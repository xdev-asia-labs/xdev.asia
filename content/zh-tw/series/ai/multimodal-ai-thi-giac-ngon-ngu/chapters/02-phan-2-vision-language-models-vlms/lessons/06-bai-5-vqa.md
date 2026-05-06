---
id: 019d8b35-bb05-7005-c005-ee0500000005
title: 第 5 課：視覺問答 (VQA)
slug: bai-5-vqa
description: >-
  VQA task definition. Multi-modal fusion. GQA, VQAv2 datasets. Instructed
  VQA.開放式 vs 多項選擇。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: 第 2 部分：視覺語言模型 (VLM)
course:
  id: 019d8b35-aa01-7001-b001-ff0600000001
  title: 多模態人工智慧：結合視覺、語言等
  slug: multimodal-ai-thi-giac-ngon-ngu
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-191" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-191)"/>

  <!-- Decorations -->
  <g>
    <circle cx="793" cy="249" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="986" cy="62" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="679" cy="135" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="872" cy="208" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="1065" cy="281" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="239" x2="1100" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="269" x2="1050" y2="339" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1018.444863728671,172 1018.444863728671,206 989,223 959.555136271329,206 959.555136271329,172 989,155" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 4 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：視覺問答 (VQA)</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">多模態人工智慧：結合視覺、語言等</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：視覺語言模型 (VLM)</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

VQA task definition. Multi-modal fusion. GQA, VQAv2 datasets. Instructed VQA.開放式 vs 多項選擇。

---

## 1. 概述

### 關鍵概念

Visual Question Answering (VQA) is an important topic in the field of modern AI.

---

## 2. 架構與原理

### 核心架構

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

## 3. 練習

### 設定

```bash
pip install torch transformers datasets
```

### 訓練管道

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

## 4. 最佳實踐

|方面|推薦|
|--------|----------------|
|數據|品質重於數量 |
|型號|從簡單開始，擴大規模 |
|培訓|監控損耗曲線|
|評價|使用適當的指標|

---

## 總結

|概念 |重點 |
|--------|-------------|
|建築|適合問題|
|培訓|仔細調整超參數 |
|評價|多個指標|
