---
id: 019d8b33-bb08-7008-c008-ee0800000008
title: "Bài 8: Medical Q&A & Chatbot Y tế"
slug: bai-8-medical-qa-chatbot
description: >-
  Medical question answering. RAG cho y tế: PubMed retrieval. Fine-tune LLM cho medical domain. Guardrails, safety cho medical chatbot.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 3: Clinical NLP & Genomics AI"
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: "AI trong Y tế & Healthcare: Ứng dụng Thực chiến"
  slug: ai-trong-y-te-healthcare
---

> Bác sĩ trung bình đọc 5,000 bài báo/năm để cập nhật kiến thức. AI có thể đọc 34 triệu bài trên PubMed và trả lời trong vài giây — nếu được xây dựng đúng cách.

---

## 1. Cấu trúc Medical Q&A System

```
User query → Safe query check → Retriever → Context ranking
                                  ↓
              [PubMed / Clinical guidelines / EHR policies]
                                  ↓
                           LLM Generator
                                  ↓
              Response → Safety guardrails → User
```

**Tại sao RAG thay vì chỉ dùng LLM?**
- LLM hallucinate: tự tạo ra citations không tồn tại
- Medical knowledge cần cite nguồn cụ thể (PMID, guideline)
- Cần cập nhật knowledge mà không retrain model

---

## 2. Retrieval-Augmented Generation (RAG) Pipeline

### 2.1. Index PubMed abstracts

```python
from sentence_transformers import SentenceTransformer
import numpy as np
import faiss
import json

class PubMedRetriever:
    """
    Vector search trên PubMed abstracts với FAISS.
    Embedding model: PubMedBERT fine-tuned cho retrieval (BioSentVec).
    """
    def __init__(self, model_name: str = "pritamdeka/S-PubMedBert-MS-MARCO"):
        self.encoder = SentenceTransformer(model_name)
        self.index = None
        self.documents = []  # List of {"pmid", "title", "abstract"}

    def build_index(self, documents: list[dict]):
        """Build FAISS index từ danh sách abstracts."""
        self.documents = documents
        texts = [f"{d['title']}. {d['abstract']}" for d in documents]

        print(f"Encoding {len(texts)} documents...")
        embeddings = self.encoder.encode(
            texts,
            batch_size=64,
            show_progress_bar=True,
            convert_to_numpy=True,
            normalize_embeddings=True  # Cosine similarity
        )

        # FAISS IndexFlatIP: inner product = cosine similarity (khi normalized)
        dim = embeddings.shape[1]
        self.index = faiss.IndexFlatIP(dim)
        self.index.add(embeddings.astype(np.float32))
        print(f"Index built: {self.index.ntotal} vectors of dim {dim}")

    def retrieve(self, query: str, top_k: int = 5) -> list[dict]:
        """Retrieve top-K most relevant documents."""
        query_embedding = self.encoder.encode(
            [query], normalize_embeddings=True
        ).astype(np.float32)

        scores, indices = self.index.search(query_embedding, top_k)

        results = []
        for score, idx in zip(scores[0], indices[0]):
            doc = self.documents[idx].copy()
            doc["similarity_score"] = round(float(score), 4)
            results.append(doc)
        return results

    def save(self, directory: str):
        os.makedirs(directory, exist_ok=True)
        faiss.write_index(self.index, os.path.join(directory, "faiss.index"))
        with open(os.path.join(directory, "documents.json"), "w") as f:
            json.dump(self.documents, f)

    def load(self, directory: str):
        self.index = faiss.read_index(os.path.join(directory, "faiss.index"))
        with open(os.path.join(directory, "documents.json")) as f:
            self.documents = json.load(f)
```

### 2.2. RAG với OpenAI-compatible API

```python
from openai import OpenAI

SYSTEM_PROMPT = """Bạn là một trợ lý y tế AI hỗ trợ bác sĩ tra cứu thông tin.

Nguyên tắc:
1. CHỈ trả lời dựa trên context được cung cấp (các nghiên cứu)
2. LUÔN cite nguồn (PMID hoặc guideline số)
3. Nếu context không đủ, nói rõ "Không tìm thấy bằng chứng đủ mạnh trong cơ sở dữ liệu"
4. KHÔNG đưa ra chẩn đoán cụ thể cho bệnh nhân
5. KHÔNG thay thế tư vấn bác sĩ
6. Với câu hỏi khẩn cấp (đau ngực, khó thở, mất ý thức), luôn khuyên đến cấp cứu ngay"""

class MedicalQAChatbot:
    def __init__(self, retriever: PubMedRetriever, openai_api_key: str):
        self.retriever = retriever
        self.client = OpenAI(api_key=openai_api_key)
        self.conversation_history = []

    def format_context(self, retrieved_docs: list[dict]) -> str:
        context_parts = []
        for i, doc in enumerate(retrieved_docs, 1):
            context_parts.append(
                f"[{i}] PMID: {doc.get('pmid', 'N/A')}\n"
                f"Title: {doc['title']}\n"
                f"Abstract: {doc['abstract'][:500]}...\n"
                f"Similarity: {doc['similarity_score']}"
            )
        return "\n\n".join(context_parts)

    def ask(self, question: str, top_k: int = 5) -> dict:
        """Ask a medical question with RAG."""
        # Safety check TRƯỚC khi retrieve
        safety_check = self._safety_check(question)
        if safety_check["is_emergency"]:
            return {
                "answer": safety_check["emergency_message"],
                "sources": [],
                "is_emergency": True
            }

        # Retrieve relevant documents
        docs = self.retriever.retrieve(question, top_k=top_k)
        context = self.format_context(docs)

        # Build messages
        messages = [
            {"role": "system", "content": SYSTEM_PROMPT},
        ] + self.conversation_history + [
            {
                "role": "user",
                "content": f"""Câu hỏi: {question}

Context từ PubMed (hãy dựa vào đây để trả lời):
{context}

Trả lời dựa trên evidence trên, cite [số thứ tự]:\"\"\""
            }
        ]

        response = self.client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            temperature=0.1,  # Low temperature cho medical content
            max_tokens=1000
        )

        answer = response.choices[0].message.content

        # Update conversation history (giữ 6 turns gần nhất)
        self.conversation_history.append({"role": "user", "content": question})
        self.conversation_history.append({"role": "assistant", "content": answer})
        if len(self.conversation_history) > 12:
            self.conversation_history = self.conversation_history[-12:]

        return {
            "answer": answer,
            "sources": docs,
            "is_emergency": False,
            "tokens_used": response.usage.total_tokens
        }

    def _safety_check(self, question: str) -> dict:
        """Check câu hỏi có phải emergency không."""
        EMERGENCY_KEYWORDS = [
            "đau ngực dữ dội", "khó thở cấp", "mất ý thức", "co giật",
            "chảy máu không cầm", "ngộ độc", "tự tử", "overdose",
            "chest pain", "can\'t breathe", "unconscious", "seizure"
        ]
        q_lower = question.lower()
        is_emergency = any(kw in q_lower for kw in EMERGENCY_KEYWORDS)
        return {
            "is_emergency": is_emergency,
            "emergency_message": (
                "⚠️ Đây có vẻ là tình huống khẩn cấp y tế. "
                "Hãy gọi ngay 115 (Việt Nam) hoặc đến cơ sở y tế gần nhất NGAY. "
                "Không để chờ AI trả lời trong tình huống khẩn cấp."
            ) if is_emergency else ""
        }
```

---

## 3. Fine-tuning LLM cho Medical Domain

Khi cần LLM trả lời chuyên sâu hơn về một specialty:

```python
from datasets import Dataset
from transformers import (
    AutoModelForCausalLM, AutoTokenizer,
    TrainingArguments, BitsAndBytesConfig
)
from peft import LoraConfig, get_peft_model, TaskType

def setup_medical_lora_finetuning(
    base_model: str = "meta-llama/Llama-3.2-3B-Instruct",
    train_data: list[dict] = None
):
    """
    LoRA fine-tuning cho medical QA.
    
    Tại sao LoRA thay vì full fine-tune?
    - Llama 3B = 3 tỷ parameters × 2 bytes = 6GB VRAM chỉ để load
    - Full fine-tune cần 24-48GB VRAM
    - LoRA: thêm ~1% parameters, cần ~8GB VRAM
    
    Dataset chuẩn: MedQA (USMLE), MedMCQA, PubMedQA
    """
    # 4-bit quantization để fit trong GPU nhỏ
    bnb_config = BitsAndBytesConfig(
        load_in_4bit=True,
        bnb_4bit_use_double_quant=True,
        bnb_4bit_quant_type="nf4",
        bnb_4bit_compute_dtype="bfloat16"
    )

    tokenizer = AutoTokenizer.from_pretrained(base_model)
    model = AutoModelForCausalLM.from_pretrained(
        base_model,
        quantization_config=bnb_config,
        device_map="auto"
    )

    # LoRA config: target attention layers
    lora_config = LoraConfig(
        task_type=TaskType.CAUSAL_LM,
        r=16,           # Rank: higher = more capacity, more memory
        lora_alpha=32,  # Scaling factor
        lora_dropout=0.1,
        target_modules=["q_proj", "v_proj", "k_proj", "o_proj"],
        # Medical specific: cũng target FFN layers
        # target_modules=["q_proj", "v_proj", "k_proj", "o_proj", "gate_proj", "up_proj"]
    )

    model = get_peft_model(model, lora_config)
    model.print_trainable_parameters()
    # Trainable: ~0.7% parameters — hiệu quả cực kỳ cao

    return model, tokenizer

def format_medical_qa_sample(sample: dict) -> str:
    """Format training sample: alpaca style cho medical QA."""
    return (
        f"### Instruction:\n"
        f"Bạn là bác sĩ AI. Hãy trả lời câu hỏi y khoa dựa trên evidence-based medicine.\n\n"
        f"### Question:\n{sample['question']}\n\n"
        f"### Answer:\n{sample['answer']}"
    )
```

---

## 4. Evaluation: Beyond Accuracy

```python
from rouge_score import rouge_scorer

def evaluate_medical_qa(predictions: list[str], references: list[str]) -> dict:
    """
    Metrics cho medical QA:
    - ROUGE-L: text overlap (không đủ cho medical)
    - BERTScore: semantic similarity
    - Medical factuality: check entities against medical KB
    - Citation accuracy: PMID exists & relevant
    """
    scorer = rouge_scorer.RougeScorer(['rougeL'], use_stemmer=True)
    rouge_scores = [
        scorer.score(ref, pred)['rougeL'].fmeasure
        for ref, pred in zip(references, predictions)
    ]

    return {
        "mean_rouge_l": round(sum(rouge_scores) / len(rouge_scores), 4),
        # Thêm BERTScore, medical factuality nếu cần
    }
```

---

## 5. Bài tập

1. Xây dựng RAG pipeline đơn giản: download 1000 PubMed abstracts bằng Entrez API, index bằng FAISS, test với 20 câu hỏi y tế. Tính Precision@3 (retrieval).

2. Fine-tune Llama-3.2-3B với LoRA trên 500 samples từ MedQA dataset. Compare với base model trên USMLE test questions.

3. Implement safety guardrails: list 20 emergency keywords, test với 50 queries. Đảm bảo 100% emergency queries được flag.

**Bài 9**: Drug Discovery với Graph Neural Networks.
