---
id: 019c9619-dd03-7003-e003-dd0300000003
title: 'Lesson 3: Fine-tuning costs — Calculate ROI before starting'
slug: bai-3-chi-phi-fine-tuning
description: >-
  Detailed price list: Google Gemini, OpenAI, Anthropic, self-hosted. Calculate
  training costs in tokens × epochs. Inference cost comparison. ROI calculator.
  Budget planning template.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: 'Part 1: Overview & Strategy — When to Fine-tune?'
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 'Fine-tuning LLM: The Art of AI Tuning'
  slug: fine-tuning-llm
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9573" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9573)"/>

  <!-- Decorations -->
  <g>
    <circle cx="670" cy="220" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="810" cy="260" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="950" cy="40" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="60" x2="1100" y2="140" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="90" x2="1050" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="990.3108891324554,142.5 990.3108891324554,177.5 960,195 929.6891108675446,177.5 929.6891108675446,142.5 960,125" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: Fine-tuning costs — Calculating ROI</tspan>
      <tspan x="60" dy="42">before starting</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Fine-tuning LLM: The Art of AI Tuning</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Overview & Strategy — When to Fine-tune?</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Fine-tuning isn't free — but it's also not as expensive as you might think. This article helps you **accurately** calculate costs and ROI before committing.

---

## 1. Training cost formula

```
Chi phí Training = (Số tokens trong dataset) × (Số epochs) × (Giá per token)
```

### Quick calculation example
- Dataset: 500 examples × ~500 tokens/example = 250,000 tokens
- Epochs: 3
- Total training tokens: 250,000 × 3 = 750,000 tokens

---

## 2. Comparative price list (2025–2026)

| Provider | Model | Training cost | Inference cost |
|----------|-------|--------------|----------------|
| **Google Vertex AI** | Gemini 2.0 Flash | ~$0.40/1M tokens | By base model |
| **OpenAI** | GPT-4o-mini | $3.00/1M tokens | 2x base models |
| **OpenAI** | GPT-4o | $25.00/1M tokens | 2x base models |
| **Self-hosted** | LLaMA 3 (LoRA) | GPU cost (~$1–3/hour) | Hosting cost only |

### Google Vertex AI — The biggest advantage
- Training is cheaper than OpenAI
- **Inference NO price increase** — this is a game changer
- Free trial $300 credit enough for dozens of fine-tunes

---

## 3. ROI Calculator

```python
def calculate_roi(
    training_cost: float,
    queries_per_day: int,
    prompt_tokens_saved: int,  # Nhờ FT, system prompt ngắn hơn
    price_per_1m_tokens: float,
    days: int = 30
):
    daily_savings = queries_per_day * prompt_tokens_saved * price_per_1m_tokens / 1_000_000
    total_savings = daily_savings * days
    roi_days = training_cost / daily_savings if daily_savings > 0 else float('inf')
    return {
        "training_cost": f"${training_cost:.2f}",
        "monthly_savings": f"${total_savings:.2f}",
        "break_even_days": f"{roi_days:.0f} ngày",
        "6_month_net": f"${total_savings * 6 - training_cost:.2f}"
    }

# Ví dụ: Fine-tune tiết kiệm 2000 tokens/query system prompt
print(calculate_roi(
    training_cost=50,
    queries_per_day=5000,
    prompt_tokens_saved=2000,
    price_per_1m_tokens=0.15  # GPT-4o-mini input
))
# → Break even: ~33 ngày, 6-month net savings: ~$220
```

---

## 4. Hidden Costs — Hidden costs

| Cost | Description | Estimate |
|--------|--------|----------|
| Data preparation | Collect, clean, label data | 2–20 engineering hours |
| Evaluation | Test, iterate, re-train | 5–15 hours engineering |
| Maintenance | Re-train when data changes | 2–5 hours/month |
| Opportunity costs | Other non-working time | Depends on the team |

---

## 5. Budget Planning Template

```
┌─────────────────────────────────────┐
│  FINE-TUNING BUDGET PLANNER         │
├─────────────────────────────────────┤
│  Phase 1: Data Prep      $0–$200   │
│  Phase 2: Training v1    $10–$100  │
│  Phase 3: Evaluation     $5–$50   │
│  Phase 4: Iterations ×3  $30–$300 │
│  Phase 5: Production     $0–$100  │
│  ───────────────────────────────── │
│  TOTAL                   $45–$750  │
│  (Typical: ~$200)                  │
└─────────────────────────────────────┘
```

---

## Summary

- Cost = Training tokens × Epochs × Price per token
- Cheapest Google Vertex AI for inference (no price increase)
- OpenAI inference is 2x more expensive for fine-tuned models
- Always calculate hidden costs: data prep, evaluation, maintenance
- Fine-tune can SAVE money if prompt length is reduced

## Exercises

1. Calculate fine-tune costs for your use case (use ROI calculator)
2. Comparison: Google vs OpenAI for the same dataset size
3. Calculate break-even point: how long does it take for fine-tuning to "pay back"?
4. Create budget proposal for team/manager

