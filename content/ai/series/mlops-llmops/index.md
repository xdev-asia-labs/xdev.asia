---
id: 019c9619-aa07-7007-b007-aa0700000007
title: "MLOps & LLMOps: Đưa AI lên Production"
slug: mlops-llmops
description: >-
  Khóa học chuyên sâu về MLOps và LLMOps — nghệ thuật đưa AI models từ
  prototype lên production an toàn và hiệu quả. Từ experiment tracking,
  CI/CD cho ML, đến LLM observability, cost optimization, guardrails,
  và compliance. Kỹ năng được trả lương cao nhất trong AI.
featured_image: uploads/2026/03/mlops-llmops-cover.png
level: advanced
duration_hours: 40
lesson_count: 12
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-29T14:00:00.000000Z'
created_at: '2026-03-29T14:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: DUY TRAN
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9618-bb00-7000-b000-bb0000000001
  name: AI & Machine Learning
  slug: ai-machine-learning
tags:
  - name: MLOps
    slug: mlops
  - name: LLMOps
    slug: llmops
  - name: MLflow
    slug: mlflow
  - name: Weights & Biases
    slug: wandb
  - name: Docker
    slug: docker
  - name: Kubernetes
    slug: kubernetes
  - name: CI/CD
    slug: cicd
  - name: LangSmith
    slug: langsmith
  - name: Langfuse
    slug: langfuse
  - name: cost optimization
    slug: cost-optimization
  - name: production
    slug: production
  - name: monitoring
    slug: monitoring
  - name: AI
    slug: ai
sections:
  - id: section-mlops-01
    title: "Phần 1: MLOps Fundamentals"
    description: Nền tảng MLOps — experiment tracking, versioning, và reproducibility
    sort_order: 1
    lessons:
      - id: 019c9619-ac01-7001-d101-ac0100000001
        title: 'Bài 1: MLOps là gì? — ML Lifecycle & Maturity Levels'
        slug: bai-1-mlops-la-gi
        description: >-
          Tại sao 87% ML projects không lên được production. MLOps lifecycle:
          Data → Train → Deploy → Monitor → Retrain. Google MLOps maturity
          levels (0–2). DevOps vs MLOps vs LLMOps. Team roles & responsibilities.
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-ac02-7002-d102-ac0200000002
        title: 'Bài 2: Experiment Tracking — MLflow & Weights & Biases'
        slug: bai-2-experiment-tracking
        description: >-
          Quản lý experiments: logging parameters, metrics, artifacts. So sánh
          MLflow vs Weights & Biases vs Neptune. Hands-on: track training runs,
          compare models, reproduce results. Collaborative experiment management.
        duration_minutes: 150
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-ac03-7003-d103-ac0300000003
        title: 'Bài 3: Data Versioning & Feature Store'
        slug: bai-3-data-versioning
        description: >-
          DVC (Data Version Control): version hóa datasets lớn. Feature Store
          concepts: online vs offline store. Feast framework. Data lineage
          tracking. Reproducible training pipelines.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-mlops-02
    title: "Phần 2: Model Management & Deployment"
    description: Model registry, CI/CD cho ML, và infrastructure
    sort_order: 2
    lessons:
      - id: 019c9619-ac04-7004-d104-ac0400000004
        title: 'Bài 4: Model Registry, Versioning & Packaging'
        slug: bai-4-model-registry
        description: >-
          Model Registry: staging → production → archived. Model versioning
          best practices. Packaging: BentoML, MLflow pyfunc, ONNX export.
          Model cards & documentation. Governance & approval workflows.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-ac05-7005-d105-ac0500000005
        title: 'Bài 5: CI/CD cho ML — Testing & Validation Pipelines'
        slug: bai-5-cicd-cho-ml
        description: >-
          CI/CD khác gì cho ML so với software thường? Data validation,
          model testing (unit tests, integration tests, performance tests).
          GitHub Actions / GitLab CI cho ML. Automated retraining triggers.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9619-ac06-7006-d106-ac0600000006
        title: 'Bài 6: Infrastructure — Docker, Kubernetes & Cloud ML'
        slug: bai-6-infrastructure
        description: >-
          Containerize ML models với Docker. Kubernetes cho ML serving:
          KServe, Seldon Core. Cloud ML platforms: Vertex AI, SageMaker,
          Azure ML. Serverless inference. GPU management & auto-scaling.
        duration_minutes: 180
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-mlops-03
    title: "Phần 3: LLMOps — Vận hành AI thời đại LLM"
    description: Khác biệt và đặc thù khi vận hành hệ thống LLM
    sort_order: 3
    lessons:
      - id: 019c9619-ac07-7007-d107-ac0700000007
        title: 'Bài 7: LLMOps vs MLOps — Paradigm Shift'
        slug: bai-7-llmops-vs-mlops
        description: >-
          LLMOps khác MLOps thế nào: API-first, prompt-centric, non-deterministic
          output. Compound AI Systems architecture. Foundation model selection
          strategy. Build vs Buy decision framework.
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-ac08-7008-d108-ac0800000008
        title: 'Bài 8: Prompt Management & A/B Testing'
        slug: bai-8-prompt-management
        description: >-
          Prompts-as-Code: version control, templating, dynamic prompts.
          A/B testing framework cho prompts. Staged rollouts. Prompt
          analytics: token usage, latency, quality metrics. PromptLayer,
          Humanloop, Braintrust.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019c9619-ac09-7009-d109-ac0900000009
        title: 'Bài 9: LLM Observability — LangSmith, Langfuse & Arize'
        slug: bai-9-llm-observability
        description: >-
          Tracing LLM calls: spans, traces, metadata. LangSmith deep-dive.
          Langfuse cho self-hosted observability. Arize Phoenix cho drift
          detection. Cost tracking, latency monitoring, quality scoring.
          Alert systems cho anomalies.
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-mlops-04
    title: "Phần 4: Production Excellence"
    description: Cost optimization, safety, compliance, và platform design
    sort_order: 4
    lessons:
      - id: 019c9619-ac10-7010-d110-ac1000000010
        title: 'Bài 10: Cost Optimization — Caching, Routing & Quantization'
        slug: bai-10-cost-optimization
        description: >-
          Semantic caching: giảm 30-50% API cost. Model routing: dùng model
          nhỏ/rẻ cho queries đơn giản. Quantization: INT4/INT8 cho self-hosted.
          Batch processing. Token budget management. Monthly cost analysis
          dashboard.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c9619-ac11-7011-d111-ac1100000011
        title: 'Bài 11: Guardrails, Safety & Compliance'
        slug: bai-11-guardrails-compliance
        description: >-
          Input/Output guardrails: PII filtering, toxicity detection, prompt
          injection defense. NeMo Guardrails framework. EU AI Act overview.
          AI governance for enterprises. Audit trails & explainability.
          Red teaming và adversarial testing.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9619-ac12-7012-d112-ac1200000012
        title: 'Bài 12: Capstone — Xây ML Platform từ Scratch'
        slug: bai-12-capstone
        description: >-
          Dự án tổng kết: xây dựng mini ML Platform hoàn chỉnh. MLflow
          experiment tracking, model registry, CI/CD pipeline, LLM gateway
          với routing + caching, observability dashboard, cost monitoring.
          Deploy trên Docker Compose.
        duration_minutes: 240
        is_free: true
        sort_order: 11
        video_url: null
reviews: []
quizzes: []
---

## Giới thiệu Series

**MLOps & LLMOps: Đưa AI lên Production** là khóa học dành cho những ai muốn **bridge the gap** giữa "AI chạy trên Jupyter notebook" và "AI phục vụ triệu users trên production".

> 🎯 **Thực tế phũ phàng:** 87% ML projects **không bao giờ** lên được production. MLOps/LLMOps là bộ kỹ năng giúp bạn nằm trong **13% thành công** — và được trả lương cao nhất trong AI.

## Bạn sẽ học được gì?

### Phần 1: MLOps Fundamentals
- **Bài 1:** MLOps là gì? ML Lifecycle, Google Maturity Levels
- **Bài 2:** Experiment Tracking: MLflow & Weights & Biases
- **Bài 3:** Data Versioning (DVC) & Feature Store (Feast)

### Phần 2: Model Management & Deployment
- **Bài 4:** Model Registry, Versioning & Packaging
- **Bài 5:** CI/CD cho ML: testing, validation, automated retraining
- **Bài 6:** Infrastructure: Docker, Kubernetes, Cloud ML Platforms

### Phần 3: LLMOps
- **Bài 7:** 🔥 LLMOps vs MLOps — paradigm shift
- **Bài 8:** Prompt Management & A/B Testing
- **Bài 9:** 🔥 LLM Observability: LangSmith, Langfuse, Arize

### Phần 4: Production Excellence
- **Bài 10:** Cost Optimization: caching, routing, quantization
- **Bài 11:** Guardrails, Safety & Compliance (EU AI Act)
- **Bài 12:** Capstone: xây ML Platform từ scratch

## Yêu cầu đầu vào

- **Python nâng cao** (async, decorators, classes, testing)
- Hiểu cơ bản về ML/DL (training, evaluation, inference)
- Docker cơ bản (dockerfile, docker-compose)
- **Kinh nghiệm thực tế** với 1+ ML/LLM project là lợi thế lớn

## Công cụ sử dụng

```
Python 3.11+          | Ngôn ngữ chính
MLflow                | Experiment tracking & registry
Weights & Biases      | Advanced experiment tracking
DVC                   | Data version control
Docker / K8s          | Containerization & orchestration
GitHub Actions        | CI/CD pipelines
LangSmith / Langfuse  | LLM observability
FastAPI               | Model serving API
Grafana / Prometheus  | Monitoring dashboards
```

## So sánh tất cả series AI

| | AI & LLM | Build Agents | Fine-tuning | Prompt Eng. | RAG | Computer Vision | **MLOps** |
|---|---|---|---|---|---|---|---|
| **Focus** | Lý thuyết | Agent Apps | Tinh chỉnh | Kỹ năng prompt | Dữ liệu riêng | Hình ảnh/Video | **Production** |
| **Đối tượng** | Beginner | Intermediate | Intermediate | Mọi người | Intermediate | Intermediate | **Advanced** |
| **Cần code?** | Python | Python | Python | Không bắt buộc | Python | Python | Python + DevOps |
| **Độ khó** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐→⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | **⭐⭐⭐⭐** |
