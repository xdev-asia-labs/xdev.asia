---
id: 019d8b30-bb07-7007-c007-ee0700000007
title: 第 7 課：RNN 和 LSTM — 順序序列處理
slug: bai-7-rnn-lstm
description: >-
  遞歸神經網路：架構、時間反向傳播。梯度消失問題。 LSTM：單元狀態、門（遺忘、輸入、輸出）。 GRU：簡化變體。雙向 RNN。使用 PyTorch
  進行實際文字分類。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: 第 3 部分：NLP 深度學習 — RNN、LSTM 到 Transformer
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: NLP 從基礎到進階：掌握自然語言處理
  slug: nlp-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9582" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9582)"/>

  <!-- Decorations -->
  <g>
    <circle cx="672" cy="106" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="744" cy="218" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="816" cy="70" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="888" cy="182" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="960" cy="34" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="206" x2="1100" y2="286" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="236" x2="1050" y2="306" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="941.507041555162,85.5 941.507041555162,126.5 906,147 870.492958444838,126.5 870.492958444838,85.50000000000001 906,65" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 6 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 課：RNN 和 LSTM — 順序序列處理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP 從基礎到進階：掌握自然語言處理</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：NLP 深度學習 — RNN、LSTM 到 Transformer</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**循環神經網路 (RNN)** 是第一個專為 **序列** 資料（文字、時間序列、音訊）而設計的神經網路架構。雖然Transformer在許多問題上已經被取代，但理解RNN/LSTM是理解Attention和Transformer為何誕生的基礎。

---

## 1. RNN——循環神經網絡

### 1.1 架構

```
        x₁          x₂          x₃          x₄
        │           │           │           │
        ▼           ▼           ▼           ▼
    ┌───────┐   ┌───────┐   ┌───────┐   ┌───────┐
h₀──│ RNN   │──▶│ RNN   │──▶│ RNN   │──▶│ RNN   │──▶ h₄
    │ Cell  │   │ Cell  │   │ Cell  │   │ Cell  │
    └───┬───┘   └───┬───┘   └───┬───┘   └───┬───┘
        │           │           │           │
        ▼           ▼           ▼           ▼
        y₁          y₂          y₃          y₄
```

$$h_t = \tanh(W_{hh} \cdot h_{t-1} + W_{xh} \cdot x_t + b)$$

### 1.2 梯度消失問題

當鏈很長時，梯度**隨著每個時間步**呈指數下降**→RNN“忘記”鏈開頭的信息。

```
"The cat, which sat on the mat and watched the birds for hours, was ___"
 ↑                                                                 ↑
 Thông tin cần ở rất xa                                           Cần predict ở đây
 → Gradient ≈ 0 khi backpropagate ngược lại!
```

---

## 2. LSTM——長短期記憶

### 2.1 LSTM 單元架構

```
                 Cell State (C)
    ──────────────────────────────────────────
         │              │              │
    ┌────┴────┐    ┌────┴────┐    ┌────┴────┐
    │ Forget  │    │  Input  │    │ Output  │
    │  Gate   │    │  Gate   │    │  Gate   │
    │ σ(Wf)   │    │ σ(Wi)   │    │ σ(Wo)   │
    └─────────┘    └─────────┘    └─────────┘
```

|門 |食譜|功能|
|-----|----------|------------|
|忘記| $f_t = \sigma(W_f \cdot [h_{t-1}, x_t] + b_f)$ |忘了什麼？ |
|輸入| $i_t = \sigma(W_i \cdot [h_{t-1}, x_t] + b_i)$ |什麼是新的？ |
|輸出| $o_t = \sigma(W_o \cdot [h_{t-1}, x_t] + b_o)$ |什麼輸出？ |

### 2.2 LSTM 與 PyTorch

```python
import torch
import torch.nn as nn

class TextClassifierLSTM(nn.Module):
    def __init__(self, vocab_size, embed_dim, hidden_dim, num_classes):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embed_dim)
        self.lstm = nn.LSTM(
            embed_dim, hidden_dim,
            num_layers=2,
            bidirectional=True,
            batch_first=True,
            dropout=0.3,
        )
        self.fc = nn.Linear(hidden_dim * 2, num_classes)  # *2 for bidirectional
        self.dropout = nn.Dropout(0.3)

    def forward(self, x):
        # x: (batch_size, seq_len)
        embedded = self.embedding(x)           # (B, L, embed_dim)
        output, (hidden, cell) = self.lstm(embedded)  # output: (B, L, hidden*2)

        # Lấy hidden state cuối cùng từ 2 directions
        hidden = torch.cat((hidden[-2], hidden[-1]), dim=1)  # (B, hidden*2)
        hidden = self.dropout(hidden)
        return self.fc(hidden)  # (B, num_classes)

# Khởi tạo
model = TextClassifierLSTM(
    vocab_size=30000,
    embed_dim=128,
    hidden_dim=256,
    num_classes=3,
)
```

---

## 3. GRU——門控循環單元

GRU 簡化了 LSTM：將遺忘門+輸入門組合成**更新門**，刪除單獨的狀態單元。

```python
class TextClassifierGRU(nn.Module):
    def __init__(self, vocab_size, embed_dim, hidden_dim, num_classes):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embed_dim)
        self.gru = nn.GRU(
            embed_dim, hidden_dim,
            num_layers=2,
            bidirectional=True,
            batch_first=True,
            dropout=0.3,
        )
        self.fc = nn.Linear(hidden_dim * 2, num_classes)

    def forward(self, x):
        embedded = self.embedding(x)
        output, hidden = self.gru(embedded)  # Không có cell state
        hidden = torch.cat((hidden[-2], hidden[-1]), dim=1)
        return self.fc(hidden)
```

|比較 | LSTM |格魯烏|
|--------|--------|-----|
|參數|更多（4 個門）|少（2 個門）|
|培訓|慢一點 |更快 |
|長序列|更好 |好 |
|品質 |通常相當於 |通常相當於 |

---

## 4. 雙向 RNN

```
Forward:   h₁ → h₂ → h₃ → h₄
                                  → concat → output
Backward:  h₄ ← h₃ ← h₂ ← h₁
```

從**兩個方向**閱讀文本－理解前後的上下文。

---

## 總結

|建築|優勢 |限制 |
|------------|---------|---------|
|普通 RNN |簡單|消失的梯度，很快就被遺忘|
| LSTM |遠端依賴 |緩慢、順序（非平行）|
|格魯烏|比 LSTM 更輕、更有效 |類似 LSTM |
|雙向|理解 2 向上下文 | 2x 計算 |

> 📌 **為什麼我們需要 Transformer？ ** RNN/LSTM 順序處理每個 token → **不能並行** → 長鏈速度慢。變壓器解決了這個問題。

---

## 下一篇文章

**第8課：注意力機制**——NLP最大的轉折點：讓模型「聚焦」在最重要的部分。
