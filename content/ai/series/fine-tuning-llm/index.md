---
id: 019c9619-aa03-7003-b003-aa0300000003
title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
slug: fine-tuning-llm
description: >-
  Khóa học toàn diện về Fine-tuning Large Language Models — từ khi nào cần
  fine-tune, chuẩn bị dữ liệu, fine-tune trên Google Gemini/Vertex AI,
  OpenAI, và open-source (LoRA/QLoRA). So sánh Fine-tuning vs RAG, phương
  pháp đánh giá model, và triển khai production. Tính toán chi phí thực tế.
featured_image: uploads/2026/03/fine-tuning-llm-cover.png
level: intermediate
duration_hours: 45
lesson_count: 16
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-29T12:00:00.000000Z'
created_at: '2026-03-29T12:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: DUY TRAN
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9618-bb00-7000-b000-bb0000000001
  name: AI & Machine Learning
  slug: ai-machine-learning
tags:
  - name: fine-tuning
    slug: fine-tuning
  - name: LLM
    slug: llm
  - name: Google Gemini
    slug: google-gemini
  - name: Vertex AI
    slug: vertex-ai
  - name: LoRA
    slug: lora
  - name: QLoRA
    slug: qlora
  - name: PEFT
    slug: peft
  - name: RAG
    slug: rag
  - name: model evaluation
    slug: model-evaluation
  - name: OpenAI
    slug: openai
  - name: Hugging Face
    slug: hugging-face
  - name: Python
    slug: python
  - name: hands-on
    slug: hands-on
  - name: production
    slug: production
  - name: cost optimization
    slug: cost-optimization
  - name: AI
    slug: ai
sections:
  - id: section-ft-01
    title: "Phần 1: Tổng quan & Chiến lược — Khi nào cần Fine-tune?"
    description: Hiểu rõ khi nào fine-tune, khi nào dùng RAG, tính toán chi phí & ROI
    sort_order: 1
    lessons:
      - id: 019c9619-dd01-7001-e001-dd0100000001
        title: 'Bài 1: Fine-tuning là gì? — Landscape & Tại sao bạn (chưa) cần nó'
        slug: bai-1-fine-tuning-la-gi
        description: >-
          Định nghĩa fine-tuning trong bối cảnh LLM hiện đại. Pre-training vs
          SFT vs RLHF/DPO. Khi nào cần fine-tune, khi nào KHÔNG nên. Decision
          framework: Prompt Engineering → RAG → Fine-tuning.
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-dd02-7002-e002-dd0200000002
        title: 'Bài 2: Fine-tuning vs RAG — Cuộc tranh luận lớn nhất AI 2025'
        slug: bai-2-fine-tuning-vs-rag
        description: >-
          So sánh chi tiết Fine-tuning vs RAG: Knowledge gap vs Behavior gap.
          Decision checklist thực tế. Hybrid approach. Case studies thực tế:
          khi nào RAG thắng, khi nào Fine-tuning thắng.
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-dd03-7003-e003-dd0300000003
        title: 'Bài 3: Chi phí Fine-tuning — Tính toán ROI trước khi bắt đầu'
        slug: bai-3-chi-phi-fine-tuning
        description: >-
          Bảng giá chi tiết: Google Gemini, OpenAI, Anthropic, self-hosted.
          Tính chi phí training theo tokens × epochs. Inference cost comparison.
          ROI calculator: khi nào fine-tune "hồi vốn"? Budget planning template.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-ft-02
    title: "Phần 2: Chuẩn bị Dữ liệu — Nền tảng của mọi thành công"
    description: Data quality quyết định 90% kết quả fine-tuning
    sort_order: 2
    lessons:
      - id: 019c9619-dd04-7004-e004-dd0400000004
        title: 'Bài 4: Thu thập & Thiết kế Dataset cho Fine-tuning'
        slug: bai-4-thu-thap-thiet-ke-dataset
        description: >-
          Các loại dataset: instruction-following, conversation, classification.
          Format JSONL chuẩn. Thu thập data từ logs, docs, user feedback.
          Synthetic data generation. Bao nhiêu data là đủ? Quality vs Quantity.
        duration_minutes: 150
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-dd05-7005-e005-dd0500000005
        title: 'Bài 5: Data Cleaning & Augmentation — Từ "rác" đến "vàng"'
        slug: bai-5-data-cleaning-augmentation
        description: >-
          Pipeline làm sạch data: dedup, filtering, quality scoring. Data
          augmentation techniques. Handling imbalance và edge cases. Tokenization
          deep-dive. Train/Validation/Test split strategies.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-ft-03
    title: "Phần 3: Fine-tuning trên Google Gemini / Vertex AI"
    description: Hands-on fine-tune model trên nền tảng Google Cloud
    sort_order: 3
    lessons:
      - id: 019c9619-dd06-7006-e006-dd0600000006
        title: 'Bài 6: Google Vertex AI Setup — Môi trường & Pricing'
        slug: bai-6-vertex-ai-setup
        description: >-
          Setup Google Cloud project, IAM, billing. Vertex AI SDK installation.
          GCS bucket cho data. Quota management. Pricing breakdown chi tiết:
          training tokens × epochs. Free tier và credits.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019c9619-dd07-7007-e007-dd0700000007
        title: 'Bài 7: Fine-tune Gemini Flash — Supervised Tuning Step-by-step'
        slug: bai-7-fine-tune-gemini-flash
        description: >-
          Hands-on fine-tune Gemini 2.0 Flash trên Vertex AI. Upload dataset
          lên GCS. Configure tuning job: epochs, learning rate. Monitor training.
          Deploy endpoint. Test model fine-tuned vs base model.
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-dd08-7008-e008-dd0800000008
        title: 'Bài 8: Fine-tune Gemini cho Production — Advanced Techniques'
        slug: bai-8-fine-tune-gemini-production
        description: >-
          Distillation từ model lớn → nhỏ. Hyperparameter optimization trên
          Vertex AI. Evaluation pipeline tích hợp. A/B testing base vs tuned.
          Multi-task fine-tuning. Cost optimization strategies.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-ft-04
    title: "Phần 4: Fine-tuning trên OpenAI & các Platform khác"
    description: So sánh thực hành trên nhiều nền tảng
    sort_order: 4
    lessons:
      - id: 019c9619-dd09-7009-e009-dd0900000009
        title: 'Bài 9: Fine-tune trên OpenAI — GPT-4o-mini & GPT-4o'
        slug: bai-9-fine-tune-openai
        description: >-
          OpenAI fine-tuning API step-by-step. Dataset format requirements.
          Training job management. Inference pricing so sánh. Strengths &
          limitations. When OpenAI > Gemini và ngược lại.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9619-dd10-7010-e010-dd1000000010
        title: 'Bài 10: LoRA & QLoRA — Fine-tune Open-source Models'
        slug: bai-10-lora-qlora
        description: >-
          Lý thuyết LoRA: low-rank matrix decomposition. QLoRA: quantization +
          LoRA. Hands-on fine-tune LLaMA 3 với Hugging Face PEFT. Chạy trên
          Google Colab miễn phí. So sánh chi phí vs API fine-tuning.
        duration_minutes: 210
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-ft-05
    title: "Phần 5: Đánh giá Model — Phương pháp & Metrics"
    description: Đo lường chất lượng fine-tuned model một cách khoa học
    sort_order: 5
    lessons:
      - id: 019c9619-dd11-7011-e011-dd1100000011
        title: 'Bài 11: Metrics đánh giá LLM — Từ Perplexity đến BERTScore'
        slug: bai-11-metrics-danh-gia-llm
        description: >-
          Comprehensive guide metrics: Perplexity, BLEU, ROUGE, METEOR, BERTScore,
          Exact Match, F1. Khi nào dùng metric nào. Hạn chế của từng metric.
          Semantic similarity vs lexical overlap. Code implement từng metric.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9619-dd12-7012-e012-dd1200000012
        title: 'Bài 12: LLM-as-a-Judge & Human Evaluation'
        slug: bai-12-llm-as-a-judge
        description: >-
          "LLM đánh giá LLM" — design judge prompts, rubric scoring. Pairwise
          comparison. Multi-judge consensus. Human eval: golden test sets,
          annotation guidelines, inter-annotator agreement. Khi nào cần human
          eval, khi nào LLM-judge đủ tốt.
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9619-dd13-7013-e013-dd1300000013
        title: 'Bài 13: Evaluation Pipeline — Test Fine-tuned Model như "Pro"'
        slug: bai-13-evaluation-pipeline
        description: >-
          Xây evaluation pipeline hoàn chỉnh: golden test set design, automated
          benchmarking, regression testing. CI/CD cho model evaluation. A/B
          testing framework. Catastrophic forgetting detection. Red teaming.
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-ft-06
    title: "Phần 6: Production & Best Practices"
    description: Đưa fine-tuned model lên production an toàn
    sort_order: 6
    lessons:
      - id: 019c9619-dd14-7014-e014-dd1400000014
        title: 'Bài 14: Deployment — Serve Fine-tuned Model hiệu quả'
        slug: bai-14-deployment
        description: >-
          Deploy trên Vertex AI endpoints, OpenAI API, self-hosted (vLLM, TGI).
          Merge LoRA adapters. Multi-adapter serving. Caching & optimization.
          Monitoring inference quality và drift detection.
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019c9619-dd15-7015-e015-dd1500000015
        title: 'Bài 15: Common Pitfalls & Troubleshooting'
        slug: bai-15-common-pitfalls
        description: >-
          Top 10 sai lầm khi fine-tune: catastrophic forgetting, overfitting,
          data leakage, evaluation gap. Debugging techniques. Khi nào nên dừng
          fine-tune và quay lại prompt engineering. Recovery strategies.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c9619-dd16-7016-e016-dd1600000016
        title: 'Bài 16: Capstone — Fine-tune Model cho Use Case thực tế'
        slug: bai-16-capstone
        description: >-
          Dự án tổng kết: chọn use case → thu thập data → fine-tune trên
          Gemini + LoRA → đánh giá so sánh → deploy production. End-to-end
          workflow. Best practices checklist. Career roadmap.
        duration_minutes: 240
        is_free: true
        sort_order: 15
        video_url: null
reviews: []
quizzes: []
---

## Giới thiệu Series

**Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI** là khóa học giúp bạn hiểu sâu và thực hành **fine-tuning** — kỹ thuật tinh chỉnh mô hình ngôn ngữ lớn cho domain, task, hoặc brand voice riêng của bạn.

> 🎯 **Câu hỏi cốt lõi mà khóa học này trả lời:**
> - Khi nào cần fine-tune? Khi nào dùng RAG? Khi nào kết hợp cả hai?
> - Fine-tune tốn bao nhiêu tiền? ROI thế nào?
> - Làm sao đánh giá fine-tuned model một cách khoa học?
> - Triển khai production ra sao cho hiệu quả?

## Bạn sẽ học được gì?

### Phần 1: Tổng quan & Chiến lược

- **Bài 1:** Fine-tuning là gì? Decision framework: Prompt Engineering → RAG → Fine-tuning
- **Bài 2:** Fine-tuning vs RAG — cuộc tranh luận lớn nhất, decision checklist thực tế
- **Bài 3:** Chi phí fine-tuning — bảng giá chi tiết, ROI calculator, budget planning

### Phần 2: Chuẩn bị Dữ liệu

- **Bài 4:** Thu thập & thiết kế dataset: JSONL format, synthetic data, quality vs quantity
- **Bài 5:** Data cleaning & augmentation: pipeline làm sạch, tokenization, split strategies

### Phần 3: Fine-tuning trên Google Gemini / Vertex AI

- **Bài 6:** Vertex AI setup: project, IAM, billing, pricing breakdown
- **Bài 7:** Fine-tune Gemini Flash step-by-step: upload data → train → deploy → test
- **Bài 8:** Advanced: distillation, hyperparameter optimization, multi-task tuning

### Phần 4: Fine-tuning trên OpenAI & Open-source

- **Bài 9:** Fine-tune OpenAI GPT-4o-mini: API workflow, so sánh với Gemini
- **Bài 10:** LoRA & QLoRA: fine-tune open-source models trên Google Colab miễn phí

### Phần 5: Đánh giá Model — Phương pháp & Metrics

- **Bài 11:** Metrics: Perplexity, BLEU, ROUGE, BERTScore — khi nào dùng gì
- **Bài 12:** LLM-as-a-Judge & Human Evaluation — đánh giá đa chiều
- **Bài 13:** Evaluation Pipeline: golden test sets, CI/CD, A/B testing, red teaming

### Phần 6: Production & Best Practices

- **Bài 14:** Deployment: Vertex AI endpoints, vLLM, multi-adapter serving
- **Bài 15:** Common pitfalls: catastrophic forgetting, overfitting, troubleshooting
- **Bài 16:** Capstone: fine-tune end-to-end cho use case thực tế

## Điểm đặc biệt của khóa học

| Chủ đề | Nội dung |
|--------|----------|
| **🔥 Google Gemini Focus** | 3 bài riêng cho Vertex AI — platform mạnh nhất 2025–2026 |
| **💰 Chi phí thực tế** | Bảng giá, ROI calculator, cost optimization — không lý thuyết suông |
| **📊 Đánh giá khoa học** | 3 bài về evaluation — BLEU, ROUGE, LLM-as-Judge, Human Eval |
| **🤔 Fine-tune vs RAG** | Decision framework đầy đủ, case studies, hybrid approach |
| **🔧 Multi-platform** | Google Gemini + OpenAI + LoRA/QLoRA open-source |
| **🚀 Production-ready** | Deploy, monitoring, A/B testing, drift detection |

## Yêu cầu đầu vào

- **Python trung cấp** (async/await, file I/O, JSON handling)
- Hiểu cơ bản về LLM (đã biết prompt engineering, API calls)
- Tài khoản Google Cloud (free trial $300 credit đủ cho cả khóa)
- Tài khoản OpenAI (cho bài 9)
- Google Colab (cho bài 10 — miễn phí)

## Công cụ sử dụng

```
Python 3.11+           | Ngôn ngữ chính
Google Cloud / Vertex AI | Fine-tune Gemini models
OpenAI API             | Fine-tune GPT-4o-mini
Hugging Face           | Transformers, PEFT, datasets
Unsloth / Axolotl      | Optimized LoRA training
Weights & Biases       | Experiment tracking
Google Colab           | Free GPU cho hands-on
BERTScore / ROUGE      | Evaluation metrics
LangSmith              | LLM-as-a-Judge pipeline
```

## So sánh 3 series AI

| | AI & LLM Series | Build AI Agents | Fine-tuning LLM |
|---|---|---|---|
| **Focus** | Lý thuyết LLM | Xây Agent | Tinh chỉnh Model |
| **Đối tượng** | Người mới | Biết LLM cơ bản | Biết LLM cơ bản |
| **Đầu ra** | Hiểu LLM | Portfolio Agents | Custom AI Models |
| **Công nghệ** | PyTorch, Transformers | LangGraph, CrewAI | Vertex AI, LoRA |
| **Độ khó** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
