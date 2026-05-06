---
id: 019d8b37-bb09-7009-c009-ee0900000009
title: 'Lesson 9: Foundation Models — TimesFM, Chronos & Moirai'
slug: bai-9-foundation-models
description: >-
  Pre-trained time series models. Google TimesFM. Amazon Chronos. Salesforce
  Moirai. Zero-shot forecasting. Fine-tuning strategies.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 'Part 3: Deep Learning for Time Series'
course:
  id: 019d8b37-aa01-7001-b001-ff0800000001
  title: 'Time Series AI: Time Series Analysis & Prediction'
  slug: time-series-ai-du-doan-chuoi-thoi-gian
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1591" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1591)"/>

  <!-- Decorations -->
  <g>
    <circle cx="863" cy="79" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="626" cy="182" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="889" cy="285" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="652" cy="128" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="915" cy="231" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="149" x2="1100" y2="229" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="179" x2="1050" y2="249" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="987.1051177665153,127 987.1051177665153,171 949,193 910.8948822334847,171 910.8948822334847,127.00000000000001 949,105" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI & ML — Lesson 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 9: Foundation Models — TimesFM,</tspan>
      <tspan x="60" dy="42">Chronos & Moirai</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Time Series AI: Time Series Analysis & Prediction</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Deep Learning for Time Series</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Pre-trained time series models. Google TimesFM. Amazon Chronos. Salesforce Moirai. Zero-shot forecasting. Fine-tuning strategies.

---

## 1. Overview

### Key concepts

Foundation Models — TimesFM, Chronos & Moirai is an important topic in the field of modern AI.

---

## 2. Architecture & Principles

### Core Architecture

```python
# Example implementation
import torch
import torch.nn as nn

class ExampleModel(nn.Module):
    def __init__(self, input_dim, output_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, 256),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(256, 128),
            nn.ReLU(),
            nn.Linear(128, output_dim),
        )
    
    def forward(self, x):
        return self.net(x)
```

---

## 3. Practice

### Setup

```bash
pip install torch transformers datasets
```

### Training Pipeline

```python
# Training loop
model = ExampleModel(input_dim=768, output_dim=10)
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-4)
criterion = nn.CrossEntropyLoss()

for epoch in range(10):
    for batch in train_loader:
        optimizer.zero_grad()
        outputs = model(batch["input"])
        loss = criterion(outputs, batch["label"])
        loss.backward()
        optimizer.step()
```

---

## 4. Best Practices

| Aspect | Recommendation |
|--------|---------------|
| Data | Quality over quantity |
| Model | Start simple, scale up |
| Training | Monitor loss curves |
| Evaluation | Use appropriate metrics |

---

## Summary

| Concepts | Key Takeaway |
|--------|-------------|
| Architecture | Suitable for the problem |
| Training | Careful hyperparameter tuning |
| Evaluation | Multiple metrics |
