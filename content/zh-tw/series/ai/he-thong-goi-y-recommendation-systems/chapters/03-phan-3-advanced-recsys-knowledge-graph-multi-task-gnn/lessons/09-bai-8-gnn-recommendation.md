---
id: 019d8b36-bb08-7008-c008-ee0800000008
title: 第 8 課：用於推薦的圖神經網絡
slug: bai-8-gnn-recommendation
description: 用戶-項目二分圖。光GCN。品聖。傳遞建議的訊息。 PyG 實作。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 第 3 部分：進階 RecSys — 知識圖、多任務和 GNN
course:
  id: 019d8b36-aa01-7001-b001-ff0700000001
  title: 推薦系​​統：從基礎到生產
  slug: he-thong-goi-y-recommendation-systems
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9890" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9890)"/>

  <!-- Decorations -->
  <g>
    <circle cx="903" cy="59" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="706" cy="242" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1009" cy="165" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="812" cy="88" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="615" cy="271" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="169" x2="1100" y2="249" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="199" x2="1050" y2="269" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.1051177665154,197 1057.1051177665154,241 1019,263 980.8948822334847,241 980.8948822334847,197 1019,175" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：圖神經網絡</tspan>
      <tspan x="60" dy="42">推薦</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">推薦系統：從基礎到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：進階 RecSys — 知識圖、多任務和 GNN</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

用戶-項目二分圖。光GCN。品聖。傳遞建議的訊息。 PyG 實作。

---

## 1. 概述

### 關鍵概念

用於推薦的圖神經網路是現代人工智慧領域的一個重要課題。

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
