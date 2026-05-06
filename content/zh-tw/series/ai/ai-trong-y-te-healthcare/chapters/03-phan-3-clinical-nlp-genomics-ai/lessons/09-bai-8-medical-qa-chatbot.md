---
id: 019d8b33-bb08-7008-c008-ee0800000008
title: 第 8 課：醫療問答與醫療聊天機器人
slug: bai-8-medical-qa-chatbot
description: 醫療問題得到解答。用於醫療保健的 RAG：PubMed 檢索。微調醫學領域的法學碩士。護欄，醫療聊天機器人的安全。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 第 3 部分：臨床 NLP 和基因組學 AI
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: 健康與醫療保健中的人工智慧：實戰應用
  slug: ai-trong-y-te-healthcare
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8352" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8352)"/>

  <!-- Decorations -->
  <g>
    <circle cx="734" cy="152" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="868" cy="106" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1002" cy="60" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="636" cy="274" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="770" cy="228" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="232" x2="1100" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="262" x2="1050" y2="332" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1055.38268590218,218.5 1055.38268590218,245.5 1032,259 1008.6173140978201,245.5 1008.6173140978201,218.5 1032,205" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 人工智慧與機器學習 — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：醫療問答與醫療聊天機器人</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">健康與醫療保健中的人工智慧：實戰應用</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：臨床 NLP 和基因組學 AI</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

> 醫生平均每年閱讀 5,000 篇文章來更新他們的知識。如果建構得當，人工智慧可以閱讀 PubMed 上的 3400 萬篇文章並在幾秒鐘內做出回應。

---

## 1. 醫療問答系統的架構

```
User query → Safe query check → Retriever → Context ranking
                                  ↓
              [PubMed / Clinical guidelines / EHR policies]
                                  ↓
                           LLM Generator
                                  ↓
              Response → Safety guardrails → User
```

**為什麼選擇 RAG 而不僅僅是 LLM？ **
- LLM幻覺：自動產生不存在的引文
- 醫學知識需要引用特定來源（PMID、指南）
- 需要更新知識而不重新訓練模型

---

## 2. 檢索增強生成 (RAG) 管道

### 2.1。索引 PubMed 摘要

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

### 2.2。具有 OpenAI 相容 API 的 RAG

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

## 3. 醫學領域LLM微調

當法學碩士需要有關專業的更深入的答案時：

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

## 4. 評估：超越準確性

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

## 5. 練習

1. 建立一個簡單的 RAG 管道：使用 Entrez API 下載 1000 個 PubMed 摘要，使用 FAISS 進行索引，使用 20 個醫學問題進行測試。計算 Precision@3（檢索）。

2. 使用 LoRA 對 MedQA 資料集中的 500 個樣本微調 Llama-3.2-3B。與 USMLE 測試問題上的基本模型進行比較。

3. 實施安全護欄：列出 20 個緊急關鍵字，透過 50 個查詢進行測試。確保標記 100% 緊急查詢。

**第 9 課**：使用圖神經網路進行藥物發現。
