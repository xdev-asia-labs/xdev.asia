---
id: 019c9619-dd09-7009-e009-dd0900000009
title: 'Bài 9: Fine-tune trên OpenAI — GPT-4o-mini & GPT-4o'
slug: bai-9-fine-tune-openai
description: >-
  OpenAI fine-tuning API step-by-step. Dataset format. Training job management. Inference pricing so sánh. When OpenAI > Gemini và ngược lại.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 4: Fine-tuning trên OpenAI & các Platform khác"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3511" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3511)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1071" cy="43" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="1042" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1013" cy="225" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="984" cy="56" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="955" cy="147" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="133" x2="1100" y2="213" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="163" x2="1050" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.2487113059642,219 1057.2487113059642,247 1033,261 1008.7512886940357,247 1008.7512886940357,219 1033,205" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI &amp; ML — Bài 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 9: Fine-tune trên OpenAI — GPT-4o-mini</tspan>
      <tspan x="60" dy="42">&amp; GPT-4o</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Fine-tuning trên OpenAI &amp; các Platform khác</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

OpenAI là platform fine-tuning phổ biến nhất — ecosystem lớn, documentation tốt, nhưng inference đắt hơn Google. Bài này so sánh hands-on.

---

## 1. OpenAI Fine-tuning Workflow

```python
from openai import OpenAI
client = OpenAI()

# Upload dataset
file = client.files.create(file=open("data.jsonl","rb"), purpose="fine-tune")

# Create fine-tuning job
job = client.fine_tuning.jobs.create(
    training_file=file.id,
    model="gpt-4o-mini-2024-07-18",
    hyperparameters={"n_epochs": 3}
)

# Monitor
while True:
    status = client.fine_tuning.jobs.retrieve(job.id)
    print(f"Status: {status.status}")
    if status.status in ["succeeded", "failed"]:
        break
    time.sleep(60)

# Use fine-tuned model
response = client.chat.completions.create(
    model=status.fine_tuned_model,
    messages=[{"role": "user", "content": "Test query"}]
)
```

## 2. OpenAI vs Google — Khi nào dùng gì?

| | OpenAI | Google Vertex AI |
|---|---|---|
| **Training cost** | $3.00/1M tokens (mini) | ~$0.40/1M tokens |
| **Inference cost** | 2x base price | Bằng base price |
| **Ecosystem** | Lớn nhất | Đang phát triển |
| **Ease of use** | Rất dễ | Cần GCP setup |
| **Best for** | Prototype, small scale | Production, large scale |

---

## Tóm tắt

- OpenAI fine-tuning đơn giản: upload → create job → wait → use
- Inference đắt hơn 2x base model — cần tính kỹ cho production
- Dùng OpenAI cho prototype, chuyển Google cho production scale

## Bài tập

1. Fine-tune GPT-4o-mini với cùng dataset đã dùng cho Gemini
2. So sánh output quality: Gemini FT vs OpenAI FT
3. So sánh chi phí: training + 30 ngày inference
4. Kết luận: provider nào phù hợp cho use case của bạn?

