---
id: 019c9619-dd08-7008-e008-dd0800000008
title: 'Bài 8: Fine-tune Gemini cho Production — Advanced Techniques'
slug: bai-8-fine-tune-gemini-production
description: >-
  Distillation từ model lớn → nhỏ. Hyperparameter optimization. Evaluation pipeline tích hợp. A/B testing. Multi-task fine-tuning. Cost optimization.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 3: Fine-tuning trên Google Gemini / Vertex AI"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
---

## Giới thiệu

Fine-tune 1 lần là prototype, fine-tune cho production cần **iteration, evaluation, và optimization**.

---

## 1. Distillation: Model lớn → Model nhỏ

```python
# Step 1: Dùng Gemini Pro (lớn) để generate training data
# Step 2: Fine-tune Gemini Flash (nhỏ) trên data đó
# → Flash performs gần Pro nhưng rẻ hơn 10x

def distill_dataset(prompts, teacher_model="gemini-2.0-pro"):
    training_data = []
    for prompt in prompts:
        response = client.models.generate_content(
            model=teacher_model, contents=prompt
        )
        training_data.append({
            "messages": [
                {"role": "user", "content": prompt},
                {"role": "model", "content": response.text}
            ]
        })
    return training_data
```

## 2. Hyperparameter Optimization

| Param | Default | Khi nào tăng | Khi nào giảm |
|-------|---------|-------------|-------------|
| Epochs | 3 | Dataset nhỏ (<200) | Dataset lớn (>2000) |
| Learning rate | 1.0 | Model học chậm | Model "quên" kiến thức cũ |

## 3. A/B Testing Framework

```python
import random

def ab_test(query, model_a, model_b, n_trials=100):
    results = {"a_wins": 0, "b_wins": 0, "tie": 0}
    for _ in range(n_trials):
        resp_a = call_model(model_a, query)
        resp_b = call_model(model_b, query)
        winner = llm_judge(query, resp_a, resp_b)
        results[winner] += 1
    return results
```

---

## Tóm tắt

- Distillation: chắt lọc kiến thức model lớn → nhỏ, tiết kiệm 10x inference
- Hyperparameter tuning: epochs, learning rate, batch size
- A/B testing bắt buộc trước khi chuyển sang production
- Multi-task fine-tuning: 1 model, nhiều capabilities

## Bài tập

1. Thực hiện distillation: Gemini Pro → Gemini Flash
2. Chạy 3 experiments với epochs khác nhau, so sánh kết quả
3. Build A/B testing framework
4. Tính cost savings: distilled model vs original Pro model

