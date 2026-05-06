---
id: 019c9619-dd04-7004-e004-dd0400000004
title: 'Lesson 4: Collect & Design Dataset for Fine-tuning'
slug: bai-4-thu-thap-thiet-ke-dataset
description: >-
  Types of datasets: instruction-following, conversation, classification.
  Standard JSONL format. Collect data from logs, documents, user feedback.
  Synthetic data generation. Quality vs Quantity.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 3
section_title: 'Part 2: Data Preparation — The foundation of all success'
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 'Fine-tuning LLM: The Art of AI Tuning'
  slug: fine-tuning-llm
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7528" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7528)"/>

  <!-- Decorations -->
  <g>
    <circle cx="872" cy="146" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="644" cy="98" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="916" cy="50" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="688" cy="262" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="960" cy="214" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="106" x2="1100" y2="186" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="136" x2="1050" y2="206" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1041.507041555162,185.5 1041.507041555162,226.5 1006,247 970.492958444838,226.5 970.492958444838,185.5 1006,165" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI & ML — Lesson 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 4: Collect & Design Dataset for</tspan>
      <tspan x="60" dy="42">Fine tuning</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Fine-tuning LLM: The Art of AI Tuning</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Data Preparation — The foundation of all success</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

**"Garbage in, garbage out"** — it's never been truer than when it comes to fine-tuning. Quality data set is 90% success.

---

## 1. JSONL standard Dataset format

### 1.1 Instruction-following format
```json
{"messages": [
  {"role": "system", "content": "Bạn là trợ lý y khoa tiếng Việt."},
  {"role": "user", "content": "Triệu chứng sốt xuất huyết?"},
  {"role": "assistant", "content": "Sốt xuất huyết dengue có các triệu chứng chính:\n1. Sốt cao đột ngột 39-40°C\n2. Đau đầu dữ dội..."}
]}
```

### 1.2 Multi-turn conversation format
```json
{"messages": [
  {"role": "system", "content": "..."},
  {"role": "user", "content": "Câu hỏi 1"},
  {"role": "assistant", "content": "Trả lời 1"},
  {"role": "user", "content": "Follow-up"},
  {"role": "assistant", "content": "Trả lời follow-up"}
]}
```

---

## 2. Data source

### 2.1 From production logs
```python
# Extract từ customer support logs
def extract_training_data(support_logs):
    training_data = []
    for log in support_logs:
        if log["customer_rating"] >= 4:  # Chỉ lấy conversations tốt
            training_data.append({
                "messages": [
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {"role": "user", "content": log["customer_question"]},
                    {"role": "assistant", "content": log["agent_response"]}
                ]
            })
    return training_data
```

### 2.2 Synthetic Data Generation
```python
def generate_synthetic_data(seed_examples, n=100):
    prompt = f"Given these examples, generate {n} similar but diverse examples..."
    # Dùng GPT-4o/Claude để generate training data cho model nhỏ hơn
```

---

## 3. How much data is enough?

| Use cases | Minimum | Recommended | Excellent |
|----------|--------|-------------|-----------|
| Style/tone change | 50 | 200 | 500+ |
| Domain-specific | 100 | 500 | 2,000+ |
| Classification | 50/class | 200/class | 1,000+/class |
| Complex reasoning | 200 | 1,000 | 5,000+ |

> 💡 **Quality >> Quantity**: 100 perfect examples > 1,000 average examples

---

## Summary

- JSONL format with messages array is the most popular standard
- Data sources: production logs, manual creation, synthetic generation
- Quality > Quantity — invest time in data with the highest ROI
- Start with 100–200 high quality examples

## Exercises

1. Create 50 training examples for the use case you choose
2. Try synthetic data generation — compare manual vs synthetic quality
3. Validate dataset: check format, handle edge cases
4. Split into train (80%) / validation (10%) / test (10%)

