---
id: 019d8b30-bb15-7015-c015-ee1500000015
title: 'Bài 15: Question Answering — Hệ thống Hỏi Đáp Thông minh'
slug: bai-15-question-answering
description: >-
  QA types: extractive, abstractive, open-domain. SQuAD dataset và
  format. Fine-tune BERT cho extractive QA. Retrieval-Augmented QA.
  Cross-encoder vs bi-encoder cho retrieval. Hands-on xây QA system
  cho tiếng Việt.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 5: Bài toán NLP Ứng dụng — Hands-on Projects"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
---

## Giới thiệu

**Question Answering (QA)** — hệ thống hỏi đáp tự động — là một trong những ứng dụng NLP có giá trị thực tiễn cao nhất: customer support automation, internal knowledge base, educational tools.

---

## 1. Các loại QA

| Loại | Cách trả lời | Ví dụ |
|------|-------------|-------|
| **Extractive** | Trích xuất đoạn text từ context | SQuAD, "CEO Apple là Tim Cook" |
| **Abstractive** | Sinh câu trả lời mới | T5, GPT generate response |
| **Open-domain** | Tìm kiếm context rồi trả lời | Wikipedia search + QA |
| **Closed-domain** | Trả lời trong phạm vi tài liệu | FAQ chatbot |

---

## 2. Extractive QA với BERT

### 2.1 Ý tưởng

```
Context: "Tim Cook là CEO của Apple từ năm 2011. Apple có trụ sở tại Cupertino."
Question: "Ai là CEO của Apple?"
Answer: "Tim Cook"  ← trích xuất từ context
         ↑ start     ↑ end
```

BERT dự đoán **start position** và **end position** của câu trả lời trong context.

### 2.2 Hands-on

```python
from transformers import pipeline

# Pre-trained QA
qa = pipeline("question-answering", model="deepset/roberta-base-squad2")

result = qa(
    question="What is the capital of France?",
    context="France is a country in Western Europe. Its capital is Paris, a major European city."
)
print(f"Answer: {result['answer']} (score: {result['score']:.4f})")
# Answer: Paris (score: 0.9834)
```

### 2.3 Fine-tune cho SQuAD

```python
from transformers import (
    AutoTokenizer,
    AutoModelForQuestionAnswering,
    Trainer,
    TrainingArguments,
)
from datasets import load_dataset

dataset = load_dataset("squad_v2")
tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")

def preprocess_qa(examples):
    questions = [q.strip() for q in examples["question"]]
    inputs = tokenizer(
        questions,
        examples["context"],
        max_length=384,
        truncation="only_second",
        stride=128,
        return_overflowing_tokens=True,
        return_offsets_mapping=True,
        padding="max_length",
    )

    offset_mapping = inputs.pop("offset_mapping")
    sample_map = inputs.pop("overflow_to_sample_mapping")
    answers = examples["answers"]
    start_positions = []
    end_positions = []

    for i, offset in enumerate(offset_mapping):
        sample_idx = sample_map[i]
        answer = answers[sample_idx]

        if len(answer["answer_start"]) == 0:
            start_positions.append(0)
            end_positions.append(0)
            continue

        start_char = answer["answer_start"][0]
        end_char = start_char + len(answer["text"][0])

        # Find token positions
        sequence_ids = inputs.sequence_ids(i)
        idx = 0
        while sequence_ids[idx] != 1:
            idx += 1
        context_start = idx
        while idx < len(sequence_ids) and sequence_ids[idx] == 1:
            idx += 1
        context_end = idx - 1

        if offset[context_start][0] > start_char or offset[context_end][1] < end_char:
            start_positions.append(0)
            end_positions.append(0)
        else:
            idx = context_start
            while idx <= context_end and offset[idx][0] <= start_char:
                idx += 1
            start_positions.append(idx - 1)

            idx = context_end
            while idx >= context_start and offset[idx][1] >= end_char:
                idx -= 1
            end_positions.append(idx + 1)

    inputs["start_positions"] = start_positions
    inputs["end_positions"] = end_positions
    return inputs

tokenized = dataset.map(preprocess_qa, batched=True, remove_columns=dataset["train"].column_names)

model = AutoModelForQuestionAnswering.from_pretrained("bert-base-uncased")

trainer = Trainer(
    model=model,
    args=TrainingArguments(
        output_dir="./qa-model",
        num_train_epochs=3,
        per_device_train_batch_size=16,
        learning_rate=3e-5,
    ),
    train_dataset=tokenized["train"],
)
trainer.train()
```

---

## 3. Retrieval-Augmented QA

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   Question    │──▶│   Retriever   │──▶│    Reader     │
│ "CEO Apple?"  │    │ (bi-encoder)  │    │ (BERT QA)    │
└──────────────┘    │ Tìm top-k     │    │ Trích answer  │
                    │ documents     │    │ từ context    │
                    └──────────────┘    └──────────────┘
```

```python
from sentence_transformers import SentenceTransformer, util
from transformers import pipeline

# 1. Retriever: tìm passages liên quan
retriever = SentenceTransformer("all-MiniLM-L6-v2")
passages = [
    "Tim Cook là CEO của Apple từ năm 2011.",
    "Google được sáng lập bởi Larry Page và Sergey Brin.",
    "Apple có trụ sở chính tại Cupertino, California.",
]
passage_embeddings = retriever.encode(passages, convert_to_tensor=True)

question = "Ai là CEO của Apple?"
q_embedding = retriever.encode(question, convert_to_tensor=True)
scores = util.cos_sim(q_embedding, passage_embeddings)[0]
top_idx = scores.argmax().item()

# 2. Reader: trích xuất answer
reader = pipeline("question-answering")
answer = reader(question=question, context=passages[top_idx])
print(f"Answer: {answer['answer']}")
# Answer: Tim Cook
```

---

## Tổng kết

| Approach | Model | Ưu điểm | Hạn chế |
|----------|-------|---------|---------|
| Extractive | BERT + QA head | Chính xác, nhanh | Chỉ extract, không generate |
| Abstractive | T5, GPT | Linh hoạt, tự nhiên | Có thể hallucinate |
| Retrieval + QA | Bi-encoder + Reader | Scalable, open-domain | 2-stage complexity |

---

## Bài tiếp theo

**Bài 16: Text Summarization & Machine Translation** — Tóm tắt văn bản và dịch máy: hai bài toán generation quan trọng nhất.
