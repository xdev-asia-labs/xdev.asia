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

