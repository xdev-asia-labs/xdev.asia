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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6890" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6890)"/>

  <!-- Decorations -->
  <g>
    <circle cx="805" cy="225" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1010" cy="30" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="715" cy="95" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="920" cy="160" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="625" cy="225" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="115" x2="1100" y2="195" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="145" x2="1050" y2="215" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="990.9807621135332,150 990.9807621135332,180 965,195 939.0192378864668,180 939.0192378864668,150 965,135" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI &amp; ML — Bài 14</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 15: Common Pitfalls &amp; Troubleshooting</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Production &amp; Best Practices</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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

