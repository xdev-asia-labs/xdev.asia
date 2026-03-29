---
id: 019c9619-dd15-7015-e015-dd1500000015
title: 'Bài 15: Common Pitfalls & Troubleshooting'
slug: bai-15-common-pitfalls
description: >-
  Top 10 sai lầm khi fine-tune: catastrophic forgetting, overfitting, data leakage, evaluation gap. Debugging techniques. Recovery strategies.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 6: Production & Best Practices"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
---

## Giới thiệu

Fine-tuning dễ bắt đầu nhưng **dễ sai**. Bài này cover 10 pitfalls phổ biến nhất và cách khắc phục.

---

## Top 10 Pitfalls

### 1. Catastrophic Forgetting
**Triệu chứng**: Model giỏi task mới nhưng "quên" tasks cũ
**Fix**: Giảm learning rate, ít epochs, thêm general examples vào dataset

### 2. Overfitting
**Triệu chứng**: Training loss giảm nhưng validation loss tăng
**Fix**: Thêm data, regularization, early stopping, giảm epochs

### 3. Data Leakage
**Triệu chứng**: Eval scores rất cao nhưng production quality kém
**Fix**: Ensure no overlap giữa train/test, dùng temporal split

### 4. Bad Data Quality
**Triệu chứng**: Model "học" sai vì examples sai
**Fix**: Manual review random samples, quality scoring pipeline

### 5. Wrong Granularity
**Triệu chứng**: Fine-tune cho task quá broad hoặc quá narrow
**Fix**: Focus vào behavior cụ thể, không cố dạy "mọi thứ"

### 6. Insufficient Evaluation
**Triệu chứng**: "Thấy ổn" nhưng không có metrics cụ thể
**Fix**: Multi-layer evaluation pipeline (bài 13)

### 7. Ignoring Base Model Capability
**Triệu chứng**: Fine-tune cho thứ base model đã làm tốt
**Fix**: Luôn benchmark base model trước

### 8. Too Many Epochs
**Triệu chứng**: Model trả lời "sáo rỗng", lặp lại training examples
**Fix**: Monitor validation loss, stop khi loss plateau

### 9. Cost Surprise
**Triệu chứng**: Bill training/inference cao bất ngờ
**Fix**: Tính chi phí trước (bài 3), set budget alerts

### 10. No Versioning
**Triệu chứng**: "Model version nào tốt nhất?" — không biết
**Fix**: Version control datasets + models + eval results

---

## Tóm tắt

- Fine-tuning dễ sai nếu không systematic
- Luôn benchmark base model trước khi fine-tune
- Multi-layer evaluation ngăn ngừa hầu hết pitfalls
- Version control EVERYTHING: data, models, configs, eval results

## Bài tập

1. Cố tình tạo overfitting (20 epochs) → quan sát symptoms
2. Tạo checklist pre-flight cho mỗi training job
3. Implement model versioning system
4. Document 3 pitfalls bạn đã gặp (nếu có)

