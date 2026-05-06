---
id: 019c9619-dd07-7007-e007-dd0700000007
title: 'レッスン 7: Gemini Flash の微調整 — 教師付きチューニングのステップバイステップ'
slug: bai-7-fine-tune-gemini-flash
description: >-
  Vertex AI で Gemini 2.0 Flash を実際に微調整します。データセットを GCS
  にアップロードします。チューニングジョブを設定します。トレーニングをモニターします。エンドポイントをデプロイします。テストモデル。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 6
section_title: 'パート 3: Google Gemini / Vertex AI での微調整'
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 'LLM の微調整: AI チューニングの技術'
  slug: fine-tuning-llm
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: Gemini Flash の微調整 — 監視あり</tspan>
      <tspan x="60" dy="42">段階的なチューニング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">LLM の微調整: AI チューニングの技術</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: Google Gemini / Vertex AI での微調整</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

これは**最も重要**なレッスンです。Vertex AI で Gemini モデルを A から Z まで微調整します。

---

## 1. データセットの準備

```python
import json

# Dataset format cho Gemini
training_examples = [
    {
        "messages": [
            {"role": "user", "content": "Phân tích code này và đề xuất cải thiện:\n```Python\ndef calc(x,y): x+y を返します```"},
            {"role": "model", "content": "## Code Review\n\n### Vấn đề:\n1. Tên hàm `calc` không rõ ràng\n2. Thiếu type hints\n3. Thiếu docstring\n\n### Đề xuất:\n```python\ndef add_numbers(x: float, y: float) -> float:\n \"\"\"2 つの数値を合計します。\"\"\"\n return x + y\n```"}
        ]
    },
    # ... 100+ examples
]

# Save as JSONL
with open("gemini_training.jsonl", "w") as f:
    for ex in training_examples:
        f.write(json.dumps(ex, ensure_ascii=False) + "\n")
```

## 2. チューニング ジョブのアップロードと起動

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

## 3. 微調整されたモデルと基本モデルのテスト

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

## 概要

- Gemini の微調整 = JSONL のアップロード → ジョブの起動 → 待機 → テスト
- Vertex AI が GPU 自体を管理するため、必要なのはデータのみです
- 基本と微調整を比較 → 改善を測定
- 反復: データを調整し、達成できなかった場合は再トレーニングします

## 演習

1. 選択したユースケースに合わせて 100 以上の例を使用して Gemini Flash を微調整します
2. 出力の比較: 基本モデルと微調整済みモデル (10 のテスト ケース)
3. エポックを変更してみる (2 vs 3 vs 5) → 改善を測定する
4. この微調整にかかる実際のコストを計算します。

