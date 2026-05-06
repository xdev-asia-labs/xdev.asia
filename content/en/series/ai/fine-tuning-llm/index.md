---
id: 019c9619-aa03-7003-b003-aa0300000003
title: 'Fine-tuning LLM: The Art of AI Tuning'
slug: fine-tuning-llm
description: >-
  Comprehensive course on Fine-tuning Large Language Models — when to fine-tune,
  data preparation, fine-tuning on Google Gemini/Vertex AI, OpenAI, and
  open-source (LoRA/QLoRA). Compare Fine-tuning vs RAG, model evaluation
  methods, and production deployment. Calculate actual costs.
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
  name: Duy Tran
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
    title: 'Part 1: Overview & Strategy — When to Fine-tune?'
    description: 'Understand when to fine-tune, when to use RAG, calculate costs & ROI'
    sort_order: 1
    lessons:
      - id: 019c9619-dd01-7001-e001-dd0100000001
        title: >-
          Lesson 1: What is Fine-tuning? — Landscape & Why you don't need it
          (yet).
        slug: bai-1-fine-tuning-la-gi
        description: >-
          Defining fine-tuning in a modern LLM context. Pre-training vs SFT vs
          RLHF/DPO. When to fine-tune, when NOT to. Decision framework: Prompt
          Engineering → RAG → Fine-tuning.
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9619-dd02-7002-e002-dd0200000002
        title: 'Lesson 2: Fine-tuning vs RAG — The biggest AI debate of 2025'
        slug: bai-2-fine-tuning-vs-rag
        description: >-
          Detailed comparison of Fine-tuning vs RAG: Knowledge gap vs Behavior
          gap. Practical decision checklist. Hybrid approach. Actual case
          studies: when RAG wins, when Fine-tuning wins.
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9619-dd03-7003-e003-dd0300000003
        title: 'Lesson 3: Fine-tuning costs — Calculate ROI before starting'
        slug: bai-3-chi-phi-fine-tuning
        description: >-
          Detailed price list: Google Gemini, OpenAI, Anthropic, self-hosted.
          Calculate training costs in tokens × epochs. Inference cost
          comparison. ROI calculator: when does fine-tune "pay back"? Budget
          planning template.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
  - id: section-ft-02
    title: 'Part 2: Data Preparation — The foundation of all success'
    description: Data quality determines 90% of fine-tuning results
    sort_order: 2
    lessons:
      - id: 019c9619-dd04-7004-e004-dd0400000004
        title: 'Lesson 4: Collect & Design Dataset for Fine-tuning'
        slug: bai-4-thu-thap-thiet-ke-dataset
        description: >-
          Types of datasets: instruction-following, conversation,
          classification. Standard JSONL format. Collect data from logs,
          documents, user feedback. Synthetic data generation. How much data is
          enough? Quality vs Quantity.
        duration_minutes: 150
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019c9619-dd05-7005-e005-dd0500000005
        title: 'Lesson 5: Data Cleaning & Augmentation — From "garbage" to "gold"'
        slug: bai-5-data-cleaning-augmentation
        description: >-
          Data cleaning pipeline: dedup, filtering, quality scoring. Data
          augmentation techniques. Handling imbalance and edge cases.
          Tokenization deep-dive. Train/Validation/Test split strategies.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-ft-03
    title: 'Part 3: Fine-tuning on Google Gemini / Vertex AI'
    description: Hands-on fine-tune model on Google Cloud platform
    sort_order: 3
    lessons:
      - id: 019c9619-dd06-7006-e006-dd0600000006
        title: 'Lesson 6: Google Vertex AI Setup — Environment & Pricing'
        slug: bai-6-vertex-ai-setup
        description: >-
          Setup Google Cloud project, IAM, billing. Vertex AI SDK installation.
          GCS bucket for data. Quota management. Pricing breakdown details:
          training tokens × epochs. Free tiers and credits.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019c9619-dd07-7007-e007-dd0700000007
        title: 'Lesson 7: Fine-tune Gemini Flash — Supervised Tuning Step-by-step'
        slug: bai-7-fine-tune-gemini-flash
        description: >-
          Hands-on fine-tune Gemini 2.0 Flash on Vertex AI. Upload dataset to
          GCS. Configure tuning job: epochs, learning rate. Monitor training.
          Deploy endpoint. Test fine-tuned model vs base model.
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9619-dd08-7008-e008-dd0800000008
        title: 'Lesson 8: Fine-tune Gemini for Production — Advanced Techniques'
        slug: bai-8-fine-tune-gemini-production
        description: >-
          Distillation from large → small model. Hyperparameter optimization on
          Vertex AI. Integrated evaluation pipeline. A/B testing base vs tuned.
          Multi-task fine-tuning. Cost optimization strategies.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-ft-04
    title: 'Part 4: Fine-tuning on OpenAI & other Platforms'
    description: Compare practices across multiple platforms
    sort_order: 4
    lessons:
      - id: 019c9619-dd09-7009-e009-dd0900000009
        title: 'Lesson 9: Fine-tune on OpenAI — GPT-4o-mini & GPT-4o'
        slug: bai-9-fine-tune-openai
        description: >-
          OpenAI fine-tuning API step-by-step. Dataset format requirements.
          Training job management. Inference pricing comparison. Strengths &
          limitations. When OpenAI > Gemini and vice versa.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9619-dd10-7010-e010-dd1000000010
        title: 'Lesson 10: LoRA & QLoRA — Fine-tune Open-source Models'
        slug: bai-10-lora-qlora
        description: >-
          LoRA theory: low-rank matrix decomposition. QLoRA: quantization +
          LoRA. Hands-on fine-tune LLaMA 3 with Hugging Face PEFT. Runs on
          Google Colab for free. Compare cost vs API fine-tuning.
        duration_minutes: 210
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-ft-05
    title: 'Part 5: Model Evaluation — Methods & Metrics'
    description: Scientifically measure fine-tuned model quality
    sort_order: 5
    lessons:
      - id: 019c9619-dd11-7011-e011-dd1100000011
        title: 'Lesson 11: LLM Evaluation Metrics — From Perplexity to BERTScore'
        slug: bai-11-metrics-danh-gia-llm
        description: >-
          Comprehensive guide metrics: Perplexity, BLEU, ROUGE, METEOR,
          BERTScore, Exact Match, F1. When to use which metric? Limitations of
          each metric. Semantic similarity vs lexical overlap. Code implements
          each metric.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9619-dd12-7012-e012-dd1200000012
        title: 'Lesson 12: LLM-as-a-Judge & Human Evaluation'
        slug: bai-12-llm-as-a-judge
        description: >-
          "LLM evaluates LLM" — design judge prompts, rubric scoring. Pairwise
          comparison. Multi-judge consensus. Human eval: golden test sets,
          annotation guidelines, inter-annotator agreement. When is human eval
          needed, when is LLM-judge good enough?
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019c9619-dd13-7013-e013-dd1300000013
        title: 'Lesson 13: Evaluation Pipeline — Test Fine-tuned Model like "Pro"'
        slug: bai-13-evaluation-pipeline
        description: >-
          Build a complete evaluation pipeline: golden test set design,
          automated benchmarking, regression testing. CI/CD for model
          evaluation. A/B testing framework. Catastrophic forgetting detection.
          Red teaming.
        duration_minutes: 180
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-ft-06
    title: 'Part 6: Production & Best Practices'
    description: Bring fine-tuned models to production safely
    sort_order: 6
    lessons:
      - id: 019c9619-dd14-7014-e014-dd1400000014
        title: 'Lesson 14: Deployment — Serve Fine-tuned Model effectively'
        slug: bai-14-deployment
        description: >-
          Deployed on Vertex AI endpoints, OpenAI API, self-hosted (vLLM, TGI).
          Merge LoRA adapters. Multi-adapter serving. Caching & optimization.
          Monitoring quality inference and drift detection.
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019c9619-dd15-7015-e015-dd1500000015
        title: 'Lesson 15: Common Pitfalls & Troubleshooting'
        slug: bai-15-common-pitfalls
        description: >-
          Top 10 mistakes when fine-tuning: catastrophic forgetting,
          overfitting, data leakage, evaluation gap. Debugging techniques. When
          to stop fine-tuning and return to prompt engineering. Recovery
          strategies.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c9619-dd16-7016-e016-dd1600000016
        title: 'Lesson 16: Capstone — Fine-tune Model for actual Use Cases'
        slug: bai-16-capstone
        description: >-
          Summary project: select use case → collect data → fine-tune on Gemini
          + LoRA → comparative evaluation → deploy to production. End-to-end
          workflow. Best practices checklist. Career roadmap.
        duration_minutes: 240
        is_free: true
        sort_order: 15
        video_url: null
reviews: []
quizzes: []
locale: en
---

## Introducing the Series

**Fine-tuning LLM: The Art of AI Tuning** is a course that helps you deeply understand and practice **fine-tuning** — the technique of fine-tuning large language models for your own domain, task, or brand voice.

> 🎯 **Core questions this course answers:**
> - When is fine-tuning needed? When to use RAG? When to combine the two?
> - How much does Fine-tune cost? How is the ROI?
> - How to evaluate fine-tuned models scientifically?
> - How to deploy production effectively?

## What will you learn?

### Part 1: Overview & Strategy

- **Lesson 1:** What is Fine-tuning? Decision framework: Prompt Engineering → RAG → Fine-tuning
- **Lesson 2:** Fine-tuning vs RAG — the biggest debate, a practical decision checklist
- **Lesson 3:** Fine-tuning costs — detailed price list, ROI calculator, budget planning

### Part 2: Data Preparation

- **Lesson 4:** Collect & design dataset: JSONL format, synthetic data, quality vs quantity
- **Lesson 5:** Data cleaning & augmentation: pipeline cleaning, tokenization, split strategies

### Part 3: Fine-tuning on Google Gemini / Vertex AI

- **Lesson 6:** Vertex AI setup: project, IAM, billing, pricing breakdown
- **Lesson 7:** Fine-tune Gemini Flash step-by-step: upload data → train → deploy → test
- **Lesson 8:** Advanced: distillation, hyperparameter optimization, multi-task tuning

### Part 4: Fine-tuning on OpenAI & Open-source

- **Lesson 9:** Fine-tune OpenAI GPT-4o-mini: API workflow, comparison with Gemini
- **Lesson 10:** LoRA & QLoRA: fine-tune open-source models on Google Colab for free

### Part 5: Model Evaluation — Methods & Metrics

- **Lesson 11:** Metrics: Perplexity, BLEU, ROUGE, BERTScore — when to use what
- **Lesson 12:** LLM-as-a-Judge & Human Evaluation — multidimensional evaluation
- **Lesson 13:** Evaluation Pipeline: golden test sets, CI/CD, A/B testing, red teaming

### Part 6: Production & Best Practices

- **Lesson 14:** Deployment: Vertex AI endpoints, vLLM, multi-adapter serving
- **Lesson 15:** Common pitfalls: catastrophic forgetting, overfitting, troubleshooting
- **Lesson 16:** Capstone: fine-tune end-to-end for real use cases

## Special features of the course

| Topics | Content |
|--------|----------|
| **🔥 Google Gemini Focus** | 3 separate articles for Vertex AI — the most powerful platform 2025–2026 |
| **💰 Actual costs** | Price list, ROI calculator, cost optimization — not just theory |
| **📊 Scientific Evaluation** | 3 articles on evaluation — BLEU, ROUGE, LLM-as-Judge, Human Eval |
| **🤔 Fine-tune vs RAG** ​​| Full decision framework, case studies, hybrid approach |
| **🔧 Multi-platform** | Google Gemini + OpenAI + LoRA/QLoRA open-source |
| **🚀 Production-ready** | Deployment, monitoring, A/B testing, drift detection |

## Input required

- **Intermediate Python** (async/await, file I/O, JSON handling)
- Basic understanding of LLM (knows prompt engineering, API calls)
- Google Cloud account (free trial $300 credit enough for the whole course)
- OpenAI account (for lesson 9)
- Google Colab (for lesson 10 — free)

## Tools used

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

## Compare 3 AI series

| | AI & LLM Series | Build AI Agents | Fine-tuning LLM |
|---|---|---|---|
| **Focus** | LLM Theory | Build Agent | Refine Model |
| **Object** | Newbie | Know basic LLM | Know basic LLM |
| **Output** | Understanding LLM | Portfolio Agents | Custom AI Models |
| **Technology** | PyTorch, Transformers | LangGraph, CrewAI | Vertex AI, LoRA |
| **Difficulty level** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
