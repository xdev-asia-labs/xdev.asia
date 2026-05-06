---
id: 019d8b30-bb18-7018-c018-ee1800000018
title: 'レッスン 18: NLP パイプラインの生成 — NLP の MLOps'
slug: bai-18-nlp-pipeline-production
description: >-
  実稼働 NLP パイプライン: データの取り込み → 前処理 → 推論 → 後処理。提供モデル: FastAPI、Triton、vLLM。モニタリング:
  データ ドリフト、モデル ドリフト。 NLP モデルの CI/CD。ロギングとエラー処理。スケーリングに関する考慮事項。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: 'パート 6: NLP の作成と現代のトレンド'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP の基礎から上級まで: 自然言語処理をマスターする'
  slug: nlp-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI と ML — レッスン 17</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 18: NLP パイプラインの生成 — MLOps</tspan>
      <tspan x="60" dy="42">NLP用</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP の基礎から上級まで: 自然言語処理をマスターする</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: NLP の作成と現代のトレンド</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

高精度の NLP モデルの構築は、作業の **30%** にすぎません。残りの 70% は、モデルの運用、監視、保守に使用されます。この記事では、**本番環境に対応した NLP パイプライン**の構築について説明します。

---

## 1. 実稼働 NLP パイプライン

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

## 2. FastAPI を使用したモデル提供

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

## 3. バッチ処理

```python
from transformers import pipeline

classifier = pipeline("sentiment-analysis", device=0, batch_size=32)

# Batch inference — nhanh hơn nhiều so với từng câu
texts = ["Text 1...", "Text 2...", ...]  # Hàng nghìn texts
results = classifier(texts)  # Tự động batch
```

---

## 4. モデルの最適化

### 4.1 ONNX ランタイム

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

### 4.2 量子化

```python
from optimum.onnxruntime import ORTQuantizer
from optimum.onnxruntime.configuration import AutoQuantizationConfig

quantizer = ORTQuantizer.from_pretrained(model)
qconfig = AutoQuantizationConfig.avx512_vnni(is_static=False)
quantizer.quantize(save_dir="./quantized-model", quantization_config=qconfig)
# Model size giảm ~4x, speed tăng ~2x
```

---

## 5. モニタリング

### データドリフトの検出

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

### メトリクス ダッシュボード

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

## 6. NLP モデルの CI/CD

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

## 概要

|側面 |ツール/練習 |
|----------|----------------|
|サービング | FastAPI、Triton、vLLM |
|最適化 | ONNX、量子化、バッチ処理 |
|モニタリング |プロメテウス、ドリフト検出 |
| CI/CD | GitHub アクション、モデル品質ゲート |
|スケーリング |ロードバランサー、水平スケーリング |

---

## 次の記事

**レッスン 19: LLM と最新の NLP** — 2026 年の RAG、エージェント、および NLP のトレンド。
