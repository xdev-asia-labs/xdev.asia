---
id: 019c9619-dd16-7016-e016-dd1600000016
title: 'Bài 16: Capstone — Fine-tune Model cho Use Case thực tế'
slug: bai-16-capstone
description: >-
  Dự án tổng kết: chọn use case → thu thập data → fine-tune trên Gemini + LoRA → đánh giá so sánh → deploy production. End-to-end workflow.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 6: Production & Best Practices"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
---

## Giới thiệu

Đây là bài tổng kết — bạn sẽ xây **end-to-end fine-tuning project** từ A → Z.

---

## 1. Project: Vietnamese Code Review Assistant

### Architecture
```
┌────────────────────────────────────────────────┐
│           FINE-TUNING PIPELINE                  │
│                                                │
│  Data Collection  → Data Cleaning → Training   │
│  (GitHub PRs,       (Dedup,         (Gemini    │
│   code reviews)     quality score)   Flash SFT)│
│                                                │
│  Evaluation → A/B Testing → Production Deploy  │
│  (ROUGE,      (Base vs FT,   (Vertex AI       │
│   LLM-Judge,   100 queries)   Endpoint)        │
│   Golden Set)                                  │
└────────────────────────────────────────────────┘
```

### Components Checklist
- [ ] Chọn use case & define success metrics
- [ ] Thu thập 200+ training examples
- [ ] Data cleaning & quality scoring
- [ ] Fine-tune trên Gemini Flash (Vertex AI)
- [ ] Fine-tune trên open-source (LoRA, cho so sánh)
- [ ] Multi-layer evaluation pipeline
- [ ] Catastrophic forgetting check
- [ ] A/B testing base vs fine-tuned
- [ ] Cost analysis & ROI report
- [ ] Deploy production endpoint
- [ ] Monitoring setup

## 2. Step-by-step

### Phase 1: Data (2–4 giờ)
- Thu thập 200+ examples
- Clean, format, split (80/10/10)
- Quality review random 20 samples

### Phase 2: Training (1–2 giờ)
- Fine-tune Gemini Flash trên Vertex AI
- Fine-tune LLaMA с LoRA (comparison)
- 3 experiments: epochs 2, 3, 5

### Phase 3: Evaluation (2–3 giờ)
- Automated metrics: ROUGE, BERTScore
- LLM-as-Judge: 50 test cases
- Golden test set: 30 curated cases
- Catastrophic forgetting: 20 general questions

### Phase 4: Production (1 giờ)
- Deploy best model
- Monitoring setup
- Cost analysis report

---

## 3. Best Practices Summary

```
✅ DO:
- Start with prompt engineering (free!)
- Invest 70% time in data quality
- Use multi-layer evaluation
- Version control everything
- Calculate ROI before and after
- Monitor in production

❌ DON'T:
- Fine-tune without trying PE/RAG first
- Use raw, unclean data
- Evaluate by "vibes" — use metrics
- Ignore catastrophic forgetting
- Skip A/B testing
- Forget about ongoing maintenance cost
```

---

## 🎉 Chúc mừng!

Bạn đã hoàn thành **Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI**! Bạn có thể:

1. **Quyết định đúng**: Fine-tune vs RAG vs Prompt Engineering
2. **Fine-tune trên 3 platforms**: Google Gemini, OpenAI, LoRA open-source
3. **Đánh giá khoa học**: BLEU, ROUGE, BERTScore, LLM-as-Judge, Human Eval
4. **Tính chi phí**: ROI calculator, budget planning, cost optimization
5. **Deploy production**: Monitoring, A/B testing, drift detection

## Bài tập cuối

1. Hoàn thành capstone project end-to-end
2. Viết evaluation report (3+ pages) với metrics cụ thể
3. Publish model hoặc share findings với community
4. Identify next use case để fine-tune

