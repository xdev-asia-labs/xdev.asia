---
id: 019c9619-dd06-7006-e006-dd0600000006
title: 第 6 課：Google Vertex AI 設定 — 環境與定價
slug: bai-6-vertex-ai-setup
description: 設定 Google Cloud 項目、IAM、結算。 Vertex AI SDK 安裝。 GCS 資料桶。配額管理。詳細的定價細目。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: 第 3 部分：在 Google Gemini / Vertex AI 上進行微調
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 微調 LLM：AI 調優的藝術
  slug: fine-tuning-llm
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6985" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6985)"/>

  <!-- Decorations -->
  <g>
    <circle cx="747" cy="151" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="894" cy="278" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1041" cy="145" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="688" cy="272" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="835" cy="139" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="81" x2="1100" y2="161" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="111" x2="1050" y2="181" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="962.1769145362398,113 962.1769145362398,149 931,167 899.8230854637602,149 899.8230854637602,113.00000000000001 931,95" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 人工智慧與機器學習 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：Google Vertex AI 設定 — 環境</tspan>
      <tspan x="60" dy="42">& 定價</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微調 LLM：AI 調優的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：在 Google Gemini / Vertex AI 上進行微調</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

親身體驗 Google Cloud！本文建立了一個完整的環境來微調 Gemini 模型。

---

## 1. 谷歌雲端設置

```bash
# Install Google Cloud CLI
curl https://sdk.cloud.google.com | bash
gcloud init

# Create project
gcloud projects create my-finetuning-project
gcloud config set project my-finetuning-project

# Enable APIs
gcloud services enable aiplatform.googleapis.com
gcloud services enable storage.googleapis.com
```

## 2.頂點AI SDK

```bash
pip install google-cloud-aiplatform
```

```python
from google.cloud import aiplatform

aiplatform.init(
    project="my-finetuning-project",
    location="us-central1",
)
```

## 3. 用於訓練資料的 GCS 桶

```bash
gsutil mb gs://my-finetuning-data/
gsutil cp training_data.jsonl gs://my-finetuning-data/
```

## 4. 定價深入探討

```
Gemini 2.0 Flash Fine-tuning:
├── Training: ~$0.40 per 1M tokens
├── Inference: Same as base model ($0.075/1M input, $0.30/1M output)
├── Storage: GCS standard pricing
└── Evaluation: Billed as batch prediction

Ví dụ tính:
├── Dataset: 500 examples × 500 tokens = 250K tokens
├── Epochs: 3 → 750K training tokens
├── Training cost: 750K × $0.40/1M = $0.30
└── TỔNG: ~$0.30 cho 1 lần fine-tune! 🎉
```

---

## 總結

- Google Cloud 設定：專案 → API → SDK → GCS 儲存桶
- Vertex AI 完全託管 — 無需 GPU 管理
- 極低的訓練成本（大多數用例為 0.30 美元至 50 美元）
- 免費試用 300 美元學分足以完成整個課程

## 練習

1. 設定 Google Cloud 專案並啟用 Vertex AI
2.安裝SDK並測試連接
3. 將樣本資料集上傳至GCS
4. 計算資料集的估計成本

