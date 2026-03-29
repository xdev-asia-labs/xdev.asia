---
id: 019c9619-dd06-7006-e006-dd0600000006
title: 'Bài 6: Google Vertex AI Setup — Môi trường & Pricing'
slug: bai-6-vertex-ai-setup
description: >-
  Setup Google Cloud project, IAM, billing. Vertex AI SDK installation. GCS bucket cho data. Quota management. Pricing breakdown chi tiết.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 3: Fine-tuning trên Google Gemini / Vertex AI"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
---

## Giới thiệu

Bắt đầu hands-on với Google Cloud! Bài này setup môi trường hoàn chỉnh để fine-tune Gemini models.

---

## 1. Google Cloud Setup

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

## 2. Vertex AI SDK

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

## 3. GCS Bucket cho Training Data

```bash
gsutil mb gs://my-finetuning-data/
gsutil cp training_data.jsonl gs://my-finetuning-data/
```

## 4. Pricing Deep-dive

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

## Tóm tắt

- Google Cloud setup: project → APIs → SDK → GCS bucket
- Vertex AI là fully managed — không cần quản lý GPU
- Chi phí training cực thấp ($0.30–$50 cho hầu hết use cases)
- Free trial $300 credit đủ cho toàn bộ khóa học

## Bài tập

1. Setup Google Cloud project và enable Vertex AI
2. Install SDK và test connection
3. Upload sample dataset lên GCS
4. Tính chi phí ước tính cho dataset của bạn

