---
id: 019d8b30-bb20-7020-c020-ee2000000020
title: 'Bài 20: Capstone Project — Xây dựng NLP Platform end-to-end'
slug: bai-20-capstone-project
description: >-
  Dự án tổng kết: xây dựng NLP platform hoàn chỉnh — text classification
  + NER + QA cho một domain cụ thể (y tế, pháp luật, hoặc e-commerce).
  Pipeline: data → training → evaluation → serving → monitoring.
  Best practices checklist và career roadmap.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 6: NLP Production & Xu hướng Hiện đại"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
---

## Giới thiệu

Đây là bài tổng kết — bạn sẽ xây dựng **NLP Platform end-to-end** tích hợp toàn bộ kiến thức từ 19 bài trước. Chọn một domain (y tế, pháp luật, hoặc e-commerce) và xây pipeline hoàn chỉnh.

---

## 1. Project Overview

### Mục tiêu

Xây dựng **Vietnamese NLP Platform** cho domain **E-commerce** với 3 tính năng:

1. **Sentiment Analysis**: Phân loại review sản phẩm (positive/neutral/negative)
2. **NER**: Trích xuất thực thể (sản phẩm, thương hiệu, thuộc tính)
3. **QA**: Hỏi đáp từ product descriptions

### Tech Stack

```
┌─────────────────────────────────────────────────────────┐
│                 NLP PLATFORM ARCHITECTURE                │
│                                                         │
│  Frontend: Streamlit / Gradio                           │
│      │                                                  │
│      ▼                                                  │
│  API Layer: FastAPI                                     │
│      │                                                  │
│      ├──▶ Sentiment Model (PhoBERT fine-tuned)         │
│      ├──▶ NER Model (PhoBERT + CRF)                   │
│      └──▶ QA Pipeline (RAG: BGE-M3 + GPT-4o-mini)     │
│                                                         │
│  Infrastructure:                                        │
│      ├── PostgreSQL + pgvector (embeddings)             │
│      ├── Redis (caching)                                │
│      ├── Prometheus + Grafana (monitoring)              │
│      └── Docker + Docker Compose                        │
└─────────────────────────────────────────────────────────┘
```

---

## 2. Phase 1: Data Collection & Preparation

```python
import pandas as pd
from underthesea import word_tokenize
from datasets import Dataset

# 1. Thu thập data (từ Shopee reviews, Tiki, etc.)
reviews = pd.read_csv("ecommerce_reviews.csv")

# 2. Preprocessing pipeline
def preprocess(text: str) -> str:
    # Word segmentation cho tiếng Việt
    segmented = word_tokenize(text, format="text")
    return segmented

reviews["processed"] = reviews["text"].apply(preprocess)

# 3. Label annotation
# Sentiment: 0=negative, 1=neutral, 2=positive
# NER: IOB tagging cho entities

# 4. Train/Val/Test split (70/15/15)
from sklearn.model_selection import train_test_split
train, temp = train_test_split(reviews, test_size=0.3, random_state=42)
val, test = train_test_split(temp, test_size=0.5, random_state=42)
```

---

## 3. Phase 2: Model Training

### 3.1 Sentiment Classification

```python
from transformers import AutoTokenizer, AutoModelForSequenceClassification, Trainer

tokenizer = AutoTokenizer.from_pretrained("vinai/phobert-base-v2")
model = AutoModelForSequenceClassification.from_pretrained(
    "vinai/phobert-base-v2", num_labels=3
)

# Fine-tune với Trainer API (xem Bài 13)
# Target: F1-macro > 0.85
```

### 3.2 Custom NER

```python
from transformers import AutoModelForTokenClassification

# Custom entity types cho e-commerce:
# PRODUCT, BRAND, ATTRIBUTE, PRICE
labels = ["O", "B-PRODUCT", "I-PRODUCT", "B-BRAND", "I-BRAND",
          "B-ATTRIBUTE", "I-ATTRIBUTE", "B-PRICE", "I-PRICE"]

model = AutoModelForTokenClassification.from_pretrained(
    "vinai/phobert-base-v2", num_labels=len(labels)
)
# Fine-tune (xem Bài 14)
# Target: Entity-level F1 > 0.80
```

### 3.3 RAG-based QA

```python
from sentence_transformers import SentenceTransformer

# Embed product descriptions
embedder = SentenceTransformer("BAAI/bge-m3")

# Store embeddings in pgvector
# Retrieve relevant descriptions → GPT-4o-mini answer
```

---

## 4. Phase 3: API Development

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Vietnamese E-commerce NLP Platform")

class AnalysisRequest(BaseModel):
    text: str

class AnalysisResponse(BaseModel):
    sentiment: dict   # {label, score}
    entities: list    # [{text, type, score}]
    summary: str | None

@app.post("/analyze", response_model=AnalysisResponse)
async def analyze(request: AnalysisRequest):
    """Phân tích toàn diện: sentiment + NER + summary."""
    # 1. Sentiment
    sentiment_result = sentiment_model(request.text)

    # 2. NER
    entities = ner_model(request.text)

    # 3. Summary (nếu text dài)
    summary = None
    if len(request.text) > 200:
        summary = summarizer(request.text)

    return AnalysisResponse(
        sentiment=sentiment_result,
        entities=entities,
        summary=summary,
    )

@app.post("/qa")
async def question_answer(question: str, product_id: str):
    """RAG-based QA cho product."""
    # 1. Retrieve relevant passages
    # 2. Generate answer with LLM
    pass
```

---

## 5. Phase 4: Deployment & Monitoring

### Docker Compose

```yaml
# docker-compose.yml
services:
  api:
    build: .
    ports: ["8000:8000"]
    environment:
      - MODEL_PATH=/models
      - DEVICE=cpu

  postgres:
    image: pgvector/pgvector:pg16
    volumes: ["pgdata:/var/lib/postgresql/data"]

  redis:
    image: redis:alpine

  prometheus:
    image: prom/prometheus
    volumes: ["./prometheus.yml:/etc/prometheus/prometheus.yml"]

  grafana:
    image: grafana/grafana
    ports: ["3000:3000"]
```

---

## 6. Evaluation Checklist

| Tiêu chí | Target | Metric |
|----------|--------|--------|
| Sentiment Accuracy | > 85% | F1-macro |
| NER Quality | > 80% | Entity F1 |
| QA Relevance | > 90% | Human eval |
| API Latency | < 200ms | p95 latency |
| Uptime | > 99.5% | Availability |

---

## 7. Career Roadmap

```
NLP Engineer Level Map:

Junior (0-2 năm):
├── Thành thạo Python, PyTorch
├── Hiểu Transformer, BERT, GPT
├── Fine-tune pre-trained models
└── Basic deployment (FastAPI)

Mid-level (2-4 năm):
├── Design NLP pipelines end-to-end
├── RAG architecture
├── Model optimization (quantization, ONNX)
├── MLOps practices
└── Domain expertise (healthcare, legal, finance)

Senior (4+ năm):
├── Architecture decisions (NLP vs LLM vs hybrid)
├── Scale to millions of requests
├── Research & implement latest papers
├── Lead NLP team
└── Cost optimization strategies
```

---

## Tổng kết Series

Sau 20 bài, bạn đã nắm vững:

| Phần | Kiến thức |
|------|----------|
| Nền tảng | Preprocessing, Tokenization |
| Biểu diễn | BoW, TF-IDF, Word2Vec, Sentence Embeddings |
| Deep Learning | RNN, LSTM, Attention, Transformer |
| Pre-trained | BERT, GPT, Hugging Face ecosystem |
| Ứng dụng | Classification, NER, QA, Summarization, Translation |
| Production | Vietnamese NLP, MLOps, LLM trends, Capstone |

> 🎓 **Chúc mừng bạn đã hoàn thành series NLP từ Cơ bản đến Nâng cao!**
