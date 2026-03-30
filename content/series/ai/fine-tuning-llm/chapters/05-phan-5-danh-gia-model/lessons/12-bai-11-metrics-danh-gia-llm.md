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

