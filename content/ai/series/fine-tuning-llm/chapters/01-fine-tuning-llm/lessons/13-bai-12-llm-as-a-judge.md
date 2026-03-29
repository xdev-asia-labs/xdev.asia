---
id: 019c9619-dd12-7012-e012-dd1200000012
title: 'Bài 12: LLM-as-a-Judge & Human Evaluation'
slug: bai-12-llm-as-a-judge
description: >-
  LLM đánh giá LLM — design judge prompts, rubric scoring. Pairwise comparison. Human eval: golden test sets, annotation guidelines, inter-annotator agreement.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 5: Đánh giá Model — Phương pháp & Metrics"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
---

## Giới thiệu

BLEU, ROUGE đo "surface" — nhưng AI quality cuối cùng phải do **con người** hoặc **AI thông minh hơn** đánh giá. Đây là 2 phương pháp mạnh nhất.

---

## 1. LLM-as-a-Judge

### 1.1 Pointwise Scoring
```python
JUDGE_PROMPT = """Evaluate the response on a scale of 1-5:

**Task:** {task}
**Response:** {response}

Criteria:
- Accuracy (1-5): Thông tin chính xác không?
- Completeness (1-5): Trả lời đầy đủ không?
- Format (1-5): Đúng format yêu cầu không?
- Tone (1-5): Giọng điệu phù hợp không?

Output JSON: {"accuracy": X, "completeness": X, "format": X, "tone": X, "overall": X, "reasoning": "..."}
"""
```

### 1.2 Pairwise Comparison
```python
PAIRWISE_PROMPT = """Compare Response A vs Response B:

Task: {task}
Response A: {response_a}
Response B: {response_b}

Which is better? Output: {"winner": "A" or "B" or "tie", "reasoning": "..."}
"""
```

## 2. Human Evaluation

### Golden Test Set
```python
golden_tests = [
    {
        "input": "Triệu chứng COVID-19?",
        "expected_elements": ["sốt", "ho", "mệt mỏi", "mất vị giác"],
        "expected_format": "bullet list",
        "rubric": "Phải mention ít nhất 3/4 triệu chứng chính"
    },
    # 50+ test cases
]
```

### Inter-Annotator Agreement
```python
from sklearn.metrics import cohen_kappa_score
kappa = cohen_kappa_score(annotator_1_scores, annotator_2_scores)
# kappa > 0.6 = acceptable agreement
```

---

## Tóm tắt

- LLM-as-Judge: nhanh, scalable, correlate tốt với human
- Pairwise comparison: mạnh hơn pointwise scoring
- Human eval: gold standard nhưng đắt và chậm
- Golden test set: 50+ curated examples cho domain bạn
- Kết hợp cả LLM-Judge + Human sampling = best practice

## Bài tập

1. Design judge prompt cho domain bạn (5 rubric criteria)
2. Chạy pairwise comparison: base vs fine-tuned (20 examples)
3. Tạo golden test set 30+ examples
4. Measure inter-annotator agreement (mời 2 người đánh giá)

