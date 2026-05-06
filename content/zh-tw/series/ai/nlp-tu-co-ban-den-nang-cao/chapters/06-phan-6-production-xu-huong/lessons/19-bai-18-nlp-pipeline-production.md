---
id: 019d8b30-bb18-7018-c018-ee1800000018
title: 第 18 課：NLP 管道生產 — NLP 的 MLOps
slug: bai-18-nlp-pipeline-production
description: >-
  生產 NLP 管道：資料攝取→預處理→推理→後處理。模型服務：FastAPI、Triton、vLLM。監控：資料漂移、模型漂移。 NLP 模型的
  CI/CD。日誌記錄和錯誤處理。擴展考慮因素。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: 第 6 部分：NLP 產生與現代趨勢
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: NLP 從基礎到進階：掌握自然語言處理
  slug: nlp-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5831" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5831)"/>

  <!-- Decorations -->
  <g>
    <circle cx="702" cy="36" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="804" cy="38" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="906" cy="40" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="1008" cy="42" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="610" cy="44" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="196" x2="1100" y2="276" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="226" x2="1050" y2="296" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1072.8467875173176,230.5 1072.8467875173176,261.5 1046,277 1019.1532124826824,261.5 1019.1532124826824,230.5 1046,215" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 17 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 18 課：NLP 管道生產 — MLOps</tspan>
      <tspan x="60" dy="42">自然語言處理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP 從基礎到進階：掌握自然語言處理</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：NLP 產生與現代趨勢</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

建立高度準確的 NLP 模型僅佔 **30% 的工作**——剩下的 70% 是將其投入生產、監控和維護。本文指導如何建構 **NLP 管道生產就緒**。

---

## 1. 生產 NLP 流程

```
┌─────────────────────────────────────────────────────────────┐
│                    NLP PRODUCTION PIPELINE                   │
│                                                             │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌─────────┐ │
│  │  Input    │──▶│  Preproc │──▶│  Model   │──▶│  Post   │ │
│  │  API      │   │  Engine  │   │  Server  │   │  Proc   │ │
│  └──────────┘   └──────────┘   └──────────┘   └────┬────┘ │
│       │              │              │               │       │
│       ▼              ▼              ▼               ▼       │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Monitoring & Logging                     │   │
│  │  • Latency  • Throughput  • Data Drift  • Errors     │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. 使用 FastAPI 進行模型服務

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import pipeline
import logging
import time

app = FastAPI(title="NLP API")
logger = logging.getLogger(__name__)

# Load models on startup
classifier = None

@app.on_event("startup")
async def load_models():
    global classifier
    classifier = pipeline(
        "sentiment-analysis",
        model="./models/sentiment-phobert",
        device=0,  # GPU
    )
    logger.info("Models loaded successfully")

class TextRequest(BaseModel):
    text: str
    max_length: int = 512

class PredictionResponse(BaseModel):
    label: str
    score: float
    latency_ms: float

@app.post("/predict", response_model=PredictionResponse)
async def predict(request: TextRequest):
    start = time.time()

    if not request.text.strip():
        raise HTTPException(status_code=400, detail="Text cannot be empty")

    # Truncate input
    text = request.text[:request.max_length]

    result = classifier(text)[0]

    latency = (time.time() - start) * 1000

    logger.info(f"Prediction: {result['label']} ({result['score']:.4f}) in {latency:.1f}ms")

    return PredictionResponse(
        label=result["label"],
        score=result["score"],
        latency_ms=round(latency, 2),
    )

@app.get("/health")
async def health():
    return {"status": "healthy", "model_loaded": classifier is not None}
```

---

## 3. 批次處理

```python
from transformers import pipeline

classifier = pipeline("sentiment-analysis", device=0, batch_size=32)

# Batch inference — nhanh hơn nhiều so với từng câu
texts = ["Text 1...", "Text 2...", ...]  # Hàng nghìn texts
results = classifier(texts)  # Tự động batch
```

---

## 4. 模型最佳化

### 4.1 ONNX 運行時

```python
from optimum.onnxruntime import ORTModelForSequenceClassification
from transformers import AutoTokenizer

# Export và load ONNX model
model = ORTModelForSequenceClassification.from_pretrained(
    "./models/sentiment-phobert",
    export=True,
)
tokenizer = AutoTokenizer.from_pretrained("./models/sentiment-phobert")

# Inference nhanh hơn 2-5x
inputs = tokenizer("NLP rất thú vị", return_tensors="pt")
outputs = model(**inputs)
```

### 4.2 量化

```python
from optimum.onnxruntime import ORTQuantizer
from optimum.onnxruntime.configuration import AutoQuantizationConfig

quantizer = ORTQuantizer.from_pretrained(model)
qconfig = AutoQuantizationConfig.avx512_vnni(is_static=False)
quantizer.quantize(save_dir="./quantized-model", quantization_config=qconfig)
# Model size giảm ~4x, speed tăng ~2x
```

---

## 5. 監控

### 資料漂移偵測

```python
from scipy.stats import ks_2samp
import numpy as np

def detect_text_drift(reference_lengths, current_lengths, threshold=0.05):
    """Detect data drift bằng KS test trên text length distribution."""
    stat, p_value = ks_2samp(reference_lengths, current_lengths)
    is_drift = p_value < threshold
    return {
        "is_drift": is_drift,
        "ks_statistic": stat,
        "p_value": p_value,
    }
```

### 指標儀表板

```python
import prometheus_client as prom

# Prometheus metrics
PREDICTION_COUNTER = prom.Counter(
    'nlp_predictions_total',
    'Total predictions',
    ['model', 'label']
)
PREDICTION_LATENCY = prom.Histogram(
    'nlp_prediction_latency_seconds',
    'Prediction latency',
    ['model']
)
CONFIDENCE_HISTOGRAM = prom.Histogram(
    'nlp_confidence_score',
    'Prediction confidence distribution',
    ['model'],
    buckets=[0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 0.99, 1.0]
)
```

---

## 6. NLP 模型的 CI/CD

```yaml
# .github/workflows/nlp-pipeline.yml
name: NLP Model CI/CD

on:
  push:
    paths: ['models/**', 'src/**']

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run unit tests
        run: pytest tests/ -v
      - name: Run model quality tests
        run: python scripts/evaluate_model.py --threshold 0.85
      - name: Check for data drift
        run: python scripts/check_drift.py
```

---

## 總結

|方面|工具/實踐|
|----------|----------------|
|服務| FastAPI、Triton、vLLM |
|優化| ONNX、量化、批次 |
|監控| Prometheus，漂移檢測 |
|持續整合/持續交付 | GitHub Actions，模型品質門 |
|縮放 |負載平衡器，水平擴展|

---

## 下一篇文章

**第 19 課：LLM 與現代 NLP** — 2026 年 RAG、Agents 與 NLP 趨勢。
