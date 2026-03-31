---
id: 019d8b30-bb19-7019-c019-ee1900000019
title: 'Bài 19: LLM & NLP Hiện đại — RAG, Agents, và Xu hướng 2026'
slug: bai-19-llm-nlp-hien-dai
description: >-
  Từ NLP truyền thống đến LLM era. Retrieval-Augmented Generation.
  In-context learning vs fine-tuning. Prompt engineering cho NLP tasks.
  AI Agents cho NLP workflows. Multimodal NLP. Xu hướng: small language
  models, synthetic data, constitutional AI.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 6: NLP Production & Xu hướng Hiện đại"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
---

## Giới thiệu

NLP năm 2026 đã **hoàn toàn khác** so với 5 năm trước. LLMs đã thay đổi cách tiếp cận hầu hết mọi bài toán NLP. Bài này tổng hợp xu hướng và kỹ thuật hiện đại nhất.

---

## 1. NLP Truyền thống vs LLM Era

| Truyền thống | LLM Era |
|-------------|---------|
| Mỗi task cần model riêng | Một LLM giải nhiều tasks |
| Cần labeled data | Zero/few-shot, prompt engineering |
| Train → Evaluate → Deploy | Prompt → Test → RAG/Fine-tune → Deploy |
| BERT + task-specific head | GPT-4 / Gemini + prompt |
| Weeks to build | Hours to prototype |

### Khi nào vẫn dùng NLP truyền thống?

- **Latency critical**: BERT inference ~5ms vs LLM ~500ms
- **Cost sensitive**: Fine-tuned small model << LLM API
- **Offline**: On-device, no internet
- **Specific domain**: Khi cần precision rất cao (y tế, pháp luật)

---

## 2. Retrieval-Augmented Generation (RAG)

```
┌────────────────────────────────────────────────────────┐
│                    RAG PIPELINE                         │
│                                                        │
│  User Query                                            │
│      │                                                 │
│      ▼                                                 │
│  ┌──────────┐    ┌───────────────┐                    │
│  │  Embed   │───▶│ Vector Search │── Top-K docs       │
│  │  Query   │    │ (FAISS/PGVector)│                   │
│  └──────────┘    └───────────────┘                    │
│                         │                              │
│                         ▼                              │
│  ┌──────────────────────────────────────────┐         │
│  │  LLM (GPT-4 / Gemini)                    │         │
│  │  System: "Answer based on context below"  │         │
│  │  Context: [retrieved documents]            │         │
│  │  Question: [user query]                    │         │
│  └──────────────────────────────────────────┘         │
│                         │                              │
│                         ▼                              │
│                     Answer                             │
└────────────────────────────────────────────────────────┘
```

### RAG cho NLP Tasks

| Trước (train model) | Sau (RAG) |
|---------------------|-----------|
| Fine-tune BERT cho QA | RAG + LLM: retrieve docs → generate answer |
| Train classifier trên labeled data | Few-shot examples + LLM |
| Build NER pipeline | LLM extract entities với prompt |

---

## 3. Prompt Engineering cho NLP Tasks

```python
from openai import OpenAI

client = OpenAI()

# NER bằng prompt (không cần train!)
def extract_entities(text):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{
            "role": "system",
            "content": """Extract named entities from Vietnamese text.
Return JSON: {"persons": [], "organizations": [], "locations": [], "dates": []}"""
        }, {
            "role": "user",
            "content": text
        }],
        response_format={"type": "json_object"},
    )
    return response.choices[0].message.content

# Classification bằng prompt
def classify_text(text, categories):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{
            "role": "system",
            "content": f"Classify text into one of: {categories}. Return only the category name."
        }, {
            "role": "user",
            "content": text
        }],
    )
    return response.choices[0].message.content
```

---

## 4. AI Agents cho NLP Workflows

```python
# Agent tự động phân tích document
# 1. Extract entities → 2. Classify sentiment → 3. Summarize → 4. Store results

from langchain.agents import AgentExecutor, create_openai_tools_agent
from langchain.tools import tool

@tool
def extract_entities_tool(text: str) -> dict:
    """Extract named entities from text."""
    ner = pipeline("ner", grouped_entities=True)
    return ner(text)

@tool
def classify_sentiment_tool(text: str) -> str:
    """Classify text sentiment."""
    classifier = pipeline("sentiment-analysis")
    return classifier(text)[0]

# Agent kết hợp nhiều NLP tools
# → Tự quyết định dùng tool nào, thứ tự nào
```

---

## 5. Xu hướng NLP 2026

### 5.1 Small Language Models (SLMs)

- Phi-3, Gemma 2, LLaMA 3.2 (1B-7B params)
- Chạy được trên **laptop, mobile**
- Fine-tune dễ dàng trên consumer GPU
- Đủ tốt cho nhiều NLP tasks

### 5.2 Multimodal NLP

- GPT-4o, Gemini: text + image + audio + video
- NLP không chỉ là text nữa — **multimodal understanding**
- Document AI: OCR + NLP cho invoice, form, report

### 5.3 Synthetic Data

- Dùng LLM lớn generate training data cho model nhỏ
- Giảm chi phí labeling 10-100x
- Quality control: LLM-as-judge

### 5.4 Structured Generation

```python
# Đảm bảo output LLM luôn đúng format
from pydantic import BaseModel

class NEROutput(BaseModel):
    persons: list[str]
    organizations: list[str]
    locations: list[str]

# Với Instructor, Outlines, hoặc JSON mode
```

---

## 6. Decision Framework: Chọn approach nào?

```
Bạn cần giải quyết NLP task?
    │
    ├── Prototype nhanh? ──→ LLM API + Prompt Engineering
    │
    ├── Cost sensitive? ──→ Fine-tune small model (BERT/PhoBERT)
    │
    ├── Cần knowledge base? ──→ RAG Pipeline
    │
    ├── Latency < 50ms? ──→ Distilled/Quantized model
    │
    └── Complex workflow? ──→ AI Agent + NLP Tools
```

---

## Tổng kết

| Xu hướng | Ý nghĩa |
|----------|---------|
| LLM-first | Prototype với LLM, optimize sau |
| RAG | Kết hợp retrieval + generation |
| SLMs | Small nhưng powerful, chạy edge |
| Multimodal | Text + Image + Audio |
| Agents | Tự động hóa NLP workflows |

---

## Bài tiếp theo

**Bài 20: Capstone Project** — Xây dựng NLP Platform end-to-end: classification + NER + QA cho một domain thực tế.
