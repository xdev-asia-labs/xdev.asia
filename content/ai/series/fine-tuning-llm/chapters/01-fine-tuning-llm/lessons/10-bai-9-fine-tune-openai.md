---
id: 019c9619-dd09-7009-e009-dd0900000009
title: 'Bài 9: Fine-tune trên OpenAI — GPT-4o-mini & GPT-4o'
slug: bai-9-fine-tune-openai
description: >-
  OpenAI fine-tuning API step-by-step. Dataset format. Training job management. Inference pricing so sánh. When OpenAI > Gemini và ngược lại.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 4: Fine-tuning trên OpenAI & các Platform khác"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
---

## Giới thiệu

OpenAI là platform fine-tuning phổ biến nhất — ecosystem lớn, documentation tốt, nhưng inference đắt hơn Google. Bài này so sánh hands-on.

---

## 1. OpenAI Fine-tuning Workflow

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

## 2. OpenAI vs Google — Khi nào dùng gì?

| | OpenAI | Google Vertex AI |
|---|---|---|
| **Training cost** | $3.00/1M tokens (mini) | ~$0.40/1M tokens |
| **Inference cost** | 2x base price | Bằng base price |
| **Ecosystem** | Lớn nhất | Đang phát triển |
| **Ease of use** | Rất dễ | Cần GCP setup |
| **Best for** | Prototype, small scale | Production, large scale |

---

## Tóm tắt

- OpenAI fine-tuning đơn giản: upload → create job → wait → use
- Inference đắt hơn 2x base model — cần tính kỹ cho production
- Dùng OpenAI cho prototype, chuyển Google cho production scale

## Bài tập

1. Fine-tune GPT-4o-mini với cùng dataset đã dùng cho Gemini
2. So sánh output quality: Gemini FT vs OpenAI FT
3. So sánh chi phí: training + 30 ngày inference
4. Kết luận: provider nào phù hợp cho use case của bạn?

