---
id: 019d8b30-bb20-7020-c020-ee2000000020
title: 第 20 課：Capstone 專案 — 建置端對端 NLP 平台
slug: bai-20-capstone-project
description: >-
  總結項目：建立一個完整的NLP平台－針對特定領域（醫學、法律或電子商務）的文本分類+NER+QA。流程：資料→訓練→評估→服務→監控。最佳實踐清單和職業路線圖。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 19
section_title: 第 6 部分：NLP 產生與現代趨勢
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: NLP 從基礎到進階：掌握自然語言處理
  slug: nlp-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1704" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1704)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1093" cy="289" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="1086" cy="202" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1079" cy="115" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1072" cy="288" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="1065" cy="201" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="239" x2="1100" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="269" x2="1050" y2="339" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="968.444863728671,122 968.444863728671,156 939,173 909.555136271329,156 909.555136271329,122.00000000000001 939,105" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 19 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 20 課：Capstone 專案 — 建構 NLP</tspan>
      <tspan x="60" dy="42">Platform end-to-end</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP 從基礎到進階：掌握自然語言處理</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：NLP 產生與現代趨勢</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

這是一堂總結課——您將建立一個端到端的 **NLP 平台**，整合之前 19 課中的所有知識。選擇一個領域（醫療、法律或電子商務）並建立完整的管道。

---

## 1. 專案概況

### 目標

為**電子商務**領域建立**越南 NLP 平台**，具有 3 個功能：

1. **情緒分析**：將產品評論分類（正面/中性/負面）
2. **NER**：提取實體（產品、品牌、屬性）
3. **QA**：產品描述中的問答

### 技術堆疊

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

## 2. 第一階段：資料收集與準備

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

## 3.第二階段：模型訓練

### 3.1 情緒分類

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

### 3.3 基於 RAG 的 QA

```python
from sentence_transformers import SentenceTransformer

# Embed product descriptions
embedder = SentenceTransformer("BAAI/bge-m3")

# Store embeddings in pgvector
# Retrieve relevant descriptions → GPT-4o-mini answer
```

---

## 4. 第三階段：API 開發

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

## 5. 第 4 階段：部署與監控

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

## 6. 評估清單

|標準|目標|指標|
|----------|--------|--------|
| Sentiment Accuracy | > 85% | F1-macro |
| NER 品質 | > 80% | Entity F1 |
|品質檢查相關性 | > 90% |人類評估 |
| API Latency | < 200ms | p95 latency |
| Uptime | > 99.5% |可用性 |

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

## 系列總結

20 堂課後，您將掌握：

|部分| Knowledge |
|-----|----------|
|平台|預處理、標記化 |
| Performing | BoW、TF-IDF、Word2Vec、句子嵌入 |
|深度學習 | RNN、LSTM、注意力、變壓器 |
|預訓練| BERT、GPT、Hugging Face 生態 |
|應用 |分類、NER、QA、摘要、翻譯 |
|生產|越南 NLP、MLOps、LLM 趨勢、Capstone |

> 🎓 **恭喜您完成 NLP 系列（從基本到高級）！ **
