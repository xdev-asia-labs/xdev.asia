---
id: 019d8b37-bb02-7002-c002-ee0200000002
title: 'レッスン 2: 統計モデル — ARIMA、SARIMA、ETS'
slug: bai-2-arima-sarima-ets
description: 'ARIMA(p,d,q) モデル。旬のARIMA。指数平滑法 (ETS)。モデル選択：AIC、BIC。統計モデルの実装。'
duration_minutes: 150
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: 時系列分析の基礎'
course:
  id: 019d8b37-aa01-7001-b001-ff0800000001
  title: 'Time Series AI: 時系列分析と予測'
  slug: time-series-ai-du-doan-chuoi-thoi-gian
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4317" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4317)"/>

  <!-- Decorations -->
  <g>
    <circle cx="985" cy="45" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="870" cy="50" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="755" cy="55" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="640" cy="60" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1025" cy="65" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="155" x2="1100" y2="235" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="185" x2="1050" y2="255" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1030.9807621135333,190 1030.9807621135333,220 1005,235 979.0192378864668,220 979.0192378864668,190 1005,175" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🧠 AI と ML — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: 統計モデル — ARIMA、SARIMA</tspan>
      <tspan x="60" dy="42">&ETS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Time Series AI: 時系列分析と予測</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: 時系列分析の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ARIMA(p,d,q) モデル。旬のARIMA。指数平滑法 (ETS)。モデル選択：AIC、BIC。統計モデルの実装。

---

## 1. 概要

### 主要な概念

統計モデル — ARIMA、SARIMA & ETS は、現代の AI の分野における重要なトピックです。

---

## 2. アーキテクチャと原則

### コアアーキテクチャ

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

## 3. 練習する

### セットアップ

```bash
pip install torch transformers datasets
```

### トレーニング パイプライン

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

## 4. ベストプラクティス

|側面 |推薦 |
|------|------|
|データ |量より質 |
|モデル |シンプルに始めてスケールアップ |
|トレーニング |損失曲線を監視する |
|評価 |適切な指標を使用する |

---

## 概要

|コンセプト |重要なポイント |
|----------|---------------|
|建築 |問題に適した |
|トレーニング |ハイパーパラメータの慎重な調整 |
|評価 |複数のメトリクス |
