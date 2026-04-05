---
id: 019c9619-dd07-7007-e007-dd0700000007
title: 'Bài 7: Fine-tune Gemini Flash — Supervised Tuning Step-by-step'
slug: bai-7-fine-tune-gemini-flash
description: >-
  Hands-on fine-tune Gemini 2.0 Flash trên Vertex AI. Upload dataset lên GCS. Configure tuning job. Monitor training. Deploy endpoint. Test model.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 3: Fine-tuning trên Google Gemini / Vertex AI"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI &amp; ML — Bài 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 7: Fine-tune Gemini Flash — Supervised</tspan>
      <tspan x="60" dy="42">Tuning Step-by-step</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Fine-tuning trên Google Gemini / Vertex AI</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Đây là bài **quan trọng nhất** — bạn sẽ fine-tune Gemini model từ A đến Z trên Vertex AI.

---

## 1. Chuẩn bị Dataset

```python
import json

# Dataset format cho Gemini
training_examples = [
    {
        "messages": [
            {"role": "user", "content": "Phân tích code này và đề xuất cải thiện:\n```python\ndef calc(x,y): return x+y```"},
            {"role": "model", "content": "## Code Review\n\n### Vấn đề:\n1. Tên hàm `calc` không rõ ràng\n2. Thiếu type hints\n3. Thiếu docstring\n\n### Đề xuất:\n```python\ndef add_numbers(x: float, y: float) -> float:\n    \"\"\"Tính tổng hai số.\"\"\"\n    return x + y\n```"}
        ]
    },
    # ... 100+ examples
]

# Save as JSONL
with open("gemini_training.jsonl", "w") as f:
    for ex in training_examples:
        f.write(json.dumps(ex, ensure_ascii=False) + "\n")
```

## 2. Upload & Launch Tuning Job

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

## 3. Test Fine-tuned vs Base Model

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

## Tóm tắt

- Gemini fine-tuning = upload JSONL → launch job → wait → test
- Vertex AI tự quản lý GPU, bạn chỉ cần data
- So sánh base vs fine-tuned → measure improvement
- Iterate: adjust data, retrain nếu chưa đạt

## Bài tập

1. Fine-tune Gemini Flash với 100+ examples cho use case bạn chọn
2. So sánh output: base model vs fine-tuned (10 test cases)
3. Thử thay đổi epochs (2 vs 3 vs 5) → đo improvement
4. Tính chi phí thực tế của lần fine-tune này

