---
id: 019c9619-dd07-7007-e007-dd0700000007
title: 第 7 課：微調 Gemini Flash — 逐步監督調整
slug: bai-7-fine-tune-gemini-flash
description: 在 Vertex AI 上親自微調 Gemini 2.0 Flash。將資料集上傳到 GCS。配置調優作業。監控訓練。部署端點。測試模型。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 6
section_title: 第 3 部分：在 Google Gemini / Vertex AI 上進行微調
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 微調 LLM：AI 調優的藝術
  slug: fine-tuning-llm
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2506" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2506)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1075" cy="195" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1050" cy="250" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1025" cy="45" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1000" cy="100" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="975" cy="155" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="125" x2="1100" y2="205" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="155" x2="1050" y2="225" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="959.6410161513776,105 959.6410161513776,145 925,165 890.3589838486224,145 890.3589838486224,105.00000000000001 925,85" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 人工智慧與機器學習 — 第 6 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 課：微調 Gemini Flash — 監督</tspan>
      <tspan x="60" dy="42">逐步調整</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微調 LLM：AI 調優的藝術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：在 Google Gemini / Vertex AI 上進行微調</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

這是**最重要的**課程 - 您將在 Vertex AI 上從頭到尾微調 Gemini 模型。

---

## 1. 準備資料集

```python
import json

# Dataset format cho Gemini
training_examples = [
    {
        "messages": [
            {"role": "user", "content": "Phân tích code này và đề xuất cải thiện:\n```python\ndef calc(x,y): 回傳 x+y```"},
            {"role": "model", "content": "## Code Review\n\n### Vấn đề:\n1. Tên hàm `calc` không rõ ràng\n2. Thiếu type hints\n3. Thiếu docstring\n\n### Đề xuất:\n```python\ndef add_numbers(x: float, y: float) -> float:\n \"\"\"對兩個數字求和。\"\"\"\n 回傳 x + y\n```"}
        ]
    },
    # ... 100+ examples
]

# Save as JSONL
with open("gemini_training.jsonl", "w") as f:
    for ex in training_examples:
        f.write(json.dumps(ex, ensure_ascii=False) + "\n")
```

## 2. 上傳並啟動調優作業

```python
from google.cloud import aiplatform

aiplatform.init(project="my-project", location="us-central1")

# Launch supervised tuning
tuning_job = aiplatform.SupervisedTuningJob(
    source_model="gemini-2.0-flash",
    train_dataset="gs://my-bucket/gemini_training.jsonl",
    validation_dataset="gs://my-bucket/gemini_validation.jsonl",
    tuned_model_display_name="code-reviewer-v1",
    epochs=3,
    learning_rate_multiplier=1.0,
)

tuning_job.run()
print(f"Tuned model: {tuning_job.tuned_model_endpoint_name}")
```

## 3. 測試微調模型與基本模型

```python
from google import genai

client = genai.Client()

# Base model
base_response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents="Review this code: def f(x): return x*2"
)

# Fine-tuned model
ft_response = client.models.generate_content(
    model=tuning_job.tuned_model_name,
    contents="Review this code: def f(x): return x*2"
)

print("=== BASE ===")
print(base_response.text)
print("\n=== FINE-TUNED ===")
print(ft_response.text)
```

---

## 總結

- Gemini 微調 = 上傳 JSONL → 啟動作業 → 等待 → 測試
- Vertex AI 管理 GPU 本身，您只需要數據
- 比較基礎與微調 → 衡量改進
- 迭代：調整數據，如果未達到則重新訓練

## 練習

1. 使用超過 100 個範例針對您選擇的用例微調 Gemini Flash
2. 比較輸出：基本模型與微調模型（10 個測試案例）
3.嘗試改變時期（2 vs 3 vs 5）→衡量改進
4.計算本次微調的實際成本

