---
id: 019c9619-dd12-7012-e012-dd1200000012
title: 'Lesson 12: LLM-as-a-Judge & Human Evaluation'
slug: bai-12-llm-as-a-judge
description: >-
  LLM reviews LLM — design judge prompts, rubric scoring. Pairwise comparison.
  Human eval: golden test sets, annotation guidelines, inter-annotator
  agreement.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 5: Model Evaluation — Methods & Metrics'
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 'Fine-tuning LLM: The Art of AI Tuning'
  slug: fine-tuning-llm
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8436" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8436)"/>

  <!-- Decorations -->
  <g>
    <circle cx="867" cy="211" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="634" cy="98" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="901" cy="245" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="668" cy="132" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="935" cy="279" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="241" x2="1100" y2="321" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="271" x2="1050" y2="341" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1072.1769145362398,223 1072.1769145362398,259 1041,277 1009.8230854637602,259 1009.8230854637602,223 1041,205" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 AI & ML — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 12: LLM-as-a-Judge & Human Evaluation</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Fine-tuning LLM: The Art of AI Tuning</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Model Evaluation — Methods & Metrics</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

BLEU, ROUGE measures "surface" — but AI quality must ultimately be judged by **humans** or **smarter AI**. These are the two strongest methods.

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

## Summary

- LLM-as-Judge: fast, scalable, good correlation with humans
- Pairwise comparison: stronger than pointwise scoring
- Human eval: gold standard but expensive and slow
- Golden test set: 50+ curated examples for your domain
- Combining LLM-Judge + Human sampling = best practice

## Exercises

1. Design judge prompt for your domain (5 rubric criteria)
2. Run pairwise comparison: base vs fine-tuned (20 examples)
3. Create a golden test set of 30+ examples
4. Measure inter-annotator agreement (invite 2 reviewers)

