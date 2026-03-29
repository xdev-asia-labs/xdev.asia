---
id: 019c9619-dd13-7013-e013-dd1300000013
title: 'Bài 13: Evaluation Pipeline — Test Fine-tuned Model như "Pro"'
slug: bai-13-evaluation-pipeline
description: >-
  Xây evaluation pipeline hoàn chỉnh: golden test set design, automated benchmarking, regression testing, CI/CD, A/B testing, catastrophic forgetting detection, red teaming.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 5: Đánh giá Model — Phương pháp & Metrics"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
---

## Giới thiệu

Evaluation không phải "chạy 1 lần" — nó là **pipeline liên tục**. Bài này xây hệ thống eval end-to-end.

---

## 1. Multi-layer Evaluation

```
Layer 1: Automated Metrics (ROUGE, BERTScore)
  → Chạy mỗi training iteration
  → Fast, reproducible

Layer 2: LLM-as-Judge
  → Chạy mỗi version release candidate
  → Quality, relevance, format

Layer 3: Golden Test Set
  → 50+ curated test cases
  → Domain-specific validation

Layer 4: Catastrophic Forgetting Check
  → Test model vẫn giỏi tasks chung
  → Không "quên" kiến thức cũ

Layer 5: Red Teaming
  → Adversarial testing
  → Safety, edge cases, prompt injection
```

## 2. Catastrophic Forgetting Detection

```python
GENERAL_KNOWLEDGE_TESTS = [
    {"q": "Thủ đô Việt Nam là gì?", "a": "Hà Nội"},
    {"q": "1 + 1 = ?", "a": "2"},
    {"q": "Ai viết Romeo and Juliet?", "a": "Shakespeare"},
]

def check_forgetting(model, threshold=0.8):
    correct = 0
    for test in GENERAL_KNOWLEDGE_TESTS:
        response = call_model(model, test["q"])
        if test["a"].lower() in response.lower():
            correct += 1
    score = correct / len(GENERAL_KNOWLEDGE_TESTS)
    if score < threshold:
        print(f"⚠️ CATASTROPHIC FORGETTING DETECTED: {score:.0%}")
    return score
```

## 3. CI/CD for Model Evaluation

```yaml
# .github/workflows/model-eval.yml
on:
  push:
    paths: ['training_data/**']
jobs:
  evaluate:
    runs-on: ubuntu-latest
    steps:
      - run: python eval/run_metrics.py
      - run: python eval/run_llm_judge.py
      - run: python eval/check_forgetting.py
      - run: python eval/generate_report.py
```

---

## Tóm tắt

- 5 layers evaluation: metrics → LLM-judge → golden set → forgetting → red team
- Catastrophic forgetting: kiểm tra model không "quên" kiến thức chung
- CI/CD evaluation: tự động chạy khi data thay đổi
- Red teaming: test adversarial inputs trước production

## Bài tập

1. Build 5-layer evaluation pipeline cho model của bạn
2. Tạo catastrophic forgetting test suite (20+ general questions)
3. Design red teaming scenarios (10+ adversarial prompts)
4. Viết evaluation report so sánh base vs fine-tuned

