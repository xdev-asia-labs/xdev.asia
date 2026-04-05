---
id: 019c9619-dd11-7011-e011-dd1100000011
title: 'Bài 11: Metrics đánh giá LLM — Từ Perplexity đến BERTScore'
slug: bai-11-metrics-danh-gia-llm
description: >-
  Comprehensive guide metrics: Perplexity, BLEU, ROUGE, METEOR, BERTScore, Exact Match, F1. Khi nào dùng metric nào. Code implement từng metric.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 5: Đánh giá Model — Phương pháp & Metrics"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6708" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6708)"/>

  <!-- Decorations -->
  <g>
    <circle cx="667" cy="51" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="734" cy="58" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="801" cy="65" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="868" cy="72" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="935" cy="79" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="141" x2="1100" y2="221" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="171" x2="1050" y2="241" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1072.1769145362398,223 1072.1769145362398,259 1041,277 1009.8230854637602,259 1009.8230854637602,223 1041,205" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI &amp; ML — Bài 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 11: Metrics đánh giá LLM — Từ</tspan>
      <tspan x="60" dy="42">Perplexity đến BERTScore</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Đánh giá Model — Phương pháp &amp; Metrics</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

"Model có tốt hơn không?" — bạn cần **metrics cụ thể** để trả lời, không phải cảm tính. Bài này cover tất cả metrics quan trọng.

---

## 1. Taxonomy of Metrics

```
┌──────────────────────────────────────────────────┐
│              LLM EVALUATION METRICS               │
├──────────────────────────────────────────────────┤
│                                                  │
│  Statistical (Lexical)     Semantic              │
│  ├── BLEU                  ├── BERTScore         │  
│  ├── ROUGE                 ├── Embedding cosine  │
│  ├── METEOR                └── BLEURT            │
│  └── Exact Match                                 │
│                                                  │
│  Training-focused          Task-specific         │
│  ├── Perplexity            ├── Accuracy          │
│  └── Loss curve            ├── F1 Score          │
│                            └── Pass@k (code)     │
│                                                  │
│  Model-based                                     │
│  ├── LLM-as-a-Judge                              │
│  └── Pairwise comparison                         │
└──────────────────────────────────────────────────┘
```

## 2. Implement từng Metric

### 2.1 ROUGE (Recall-Oriented Understudy)
```python
from rouge_score import rouge_scorer
scorer = rouge_scorer.RougeScorer(['rouge1','rouge2','rougeL'])
scores = scorer.score("reference text here", "generated text here")
print(f"ROUGE-L: {scores['rougeL'].fmeasure:.3f}")
```

### 2.2 BERTScore (Semantic Similarity)
```python
from bert_score import score
P, R, F1 = score(["generated"], ["reference"], lang="vi")
print(f"BERTScore F1: {F1.mean():.3f}")
```

### 2.3 Perplexity
```python
import math
# Perplexity = exp(average negative log-likelihood)
# Thấp hơn = model tốt hơn
perplexity = math.exp(avg_loss)
```

## 3. Khi nào dùng Metric nào?

| Task | Primary Metric | Secondary |
|------|---------------|-----------|
| Text generation | ROUGE-L, BERTScore | LLM-Judge |
| Classification | Accuracy, F1 | Confusion matrix |
| Summarization | ROUGE-1/2/L | BERTScore |
| Translation | BLEU, METEOR | Human eval |
| Code generation | Pass@k, Exact Match | Test cases |
| Conversational | LLM-as-Judge | Human preference |

---

## Tóm tắt

- **BLEU/ROUGE**: Nhanh, reproducible, nhưng chỉ đo lexical overlap
- **BERTScore**: Đo semantic similarity — tốt hơn cho creative tasks
- **Perplexity**: Training diagnostic, không phải quality metric
- **LLM-as-Judge**: Correlate cao nhất với human preference
- Dùng **combination** — không có single metric nào đủ tốt

## Bài tập

1. Implement evaluation suite: ROUGE + BERTScore + Perplexity
2. Chạy trên base model vs fine-tuned model — so sánh scores
3. Tạo visualization: radar chart so sánh các metrics
4. Phân tích: metric nào phản ánh "chất lượng thực" nhất?

