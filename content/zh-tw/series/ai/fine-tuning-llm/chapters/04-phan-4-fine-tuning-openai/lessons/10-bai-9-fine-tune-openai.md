---
id: 019c9619-dd09-7009-e009-dd0900000009
title: 第 9 課：在 OpenAI 上微調 — GPT-4o-mini 和 GPT-4o
slug: bai-9-fine-tune-openai
description: OpenAI 逐步微調 API。資料集格式。培訓工作管理。推理定價比較。當 OpenAI > Gemini 時，反之亦然。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 第 4 部分：在 OpenAI 和其他平台上進行微調
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 微調 LLM：AI 調優的藝術
  slug: fine-tuning-llm
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3511" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3511)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1071" cy="43" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="1042" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1013" cy="225" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="984" cy="56" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="955" cy="147" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="133" x2="1100" y2="213" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="163" x2="1050" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.2487113059642,219 1057.2487113059642,247 1033,261 1008.7512886940357,247 1008.7512886940357,219 1033,205" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 人工智慧與機器學習 — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：在 OpenAI 上微調 — GPT-4o-mini</tspan>
      <tspan x="60" dy="42">& GPT-4o</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微調 LLM：AI 調優的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：在 OpenAI 和其他平台上進行微調</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

OpenAI 是最受歡迎的微調平台——龐大的生態系統、良好的文檔，但推理比Google更昂貴。本文比較的是動手操作。

---

## 1. OpenAI 微調工作流程

```python
from openai import OpenAI
client = OpenAI()

# Upload dataset
file = client.files.create(file=open("data.jsonl","rb"), purpose="fine-tune")

# Create fine-tuning job
job = client.fine_tuning.jobs.create(
    training_file=file.id,
    model="gpt-4o-mini-2024-07-18",
    hyperparameters={"n_epochs": 3}
)

# Monitor
while True:
    status = client.fine_tuning.jobs.retrieve(job.id)
    print(f"Status: {status.status}")
    if status.status in ["succeeded", "failed"]:
        break
    time.sleep(60)

# Use fine-tuned model
response = client.chat.completions.create(
    model=status.fine_tuned_model,
    messages=[{"role": "user", "content": "Test query"}]
)
```

## 2. OpenAI 與 Google — 何時使用什麼？

| |開放人工智慧 |Google頂點人工智慧 |
|---|---|---|
| **訓練費用** | 3.00 美元/100 萬代幣（迷你）| ~$0.40/1M 代幣 |
| **推理成本** | 2 倍基本價格 |等於底價|
| **生態系** |最大|開發中 |
| **易於使用** |很容易|需要 GCP 設定 |
| **最適合** |小規模原型|大規模生產|

---

## 總結

- OpenAI微調很簡單：上傳→建立作業→等待→使用
- 推理比基本模型昂貴 2 倍——需要仔細計算以進行生產
- 使用 OpenAI 進行原型，轉向 Google 進行生產規模

## 練習

1. 使用與 Gemini 相同的資料集微調 GPT-4o-mini
2. 比較輸出品質：Gemini FT 與 OpenAI FT
3.成本比較：訓練+30天推理
4. 結論：哪個提供者適合您的用例？

