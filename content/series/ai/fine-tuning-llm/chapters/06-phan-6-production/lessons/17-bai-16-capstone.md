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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-114" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-114)"/>

  <!-- Decorations -->
  <g>
    <circle cx="708" cy="194" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="816" cy="162" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="924" cy="130" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1032" cy="98" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="640" cy="66" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="234" x2="1100" y2="314" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="264" x2="1050" y2="334" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1009.1147367097487,169.5 1009.1147367097487,198.5 984,213 958.8852632902513,198.5 958.8852632902513,169.5 984,155" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI &amp; ML — Bài 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 16: Capstone — Fine-tune Model cho Use</tspan>
      <tspan x="60" dy="42">Case thực tế</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Production &amp; Best Practices</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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

