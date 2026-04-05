---
id: 019d8b30-bb07-7007-c007-ee0700000007
title: 'Bài 7: RNN & LSTM — Xử lý Chuỗi Tuần tự'
slug: bai-7-rnn-lstm
description: >-
  Recurrent Neural Networks: kiến trúc, backpropagation through time.
  Vanishing gradient problem. LSTM: cell state, gates (forget, input,
  output). GRU: simplified variant. Bidirectional RNN. Hands-on text
  classification với PyTorch.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 3: Deep Learning cho NLP — RNN, LSTM, đến Transformer"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI &amp; ML — Bài 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 7: RNN &amp; LSTM — Xử lý Chuỗi Tuần tự</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Deep Learning cho NLP — RNN, LSTM, đến Transformer</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

**Recurrent Neural Networks (RNN)** là kiến trúc neural network đầu tiên được thiết kế cho dữ liệu **tuần tự** — text, time series, audio. Dù đã được Transformer thay thế trong nhiều bài toán, hiểu RNN/LSTM là nền tảng để hiểu tại sao Attention và Transformer ra đời.

---

## 1. RNN — Recurrent Neural Network

### 1.1 Kiến trúc

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

### 1.2 Vấn đề Vanishing Gradient

Khi chuỗi dài, gradient **giảm theo hàm mũ** qua mỗi timestep → RNN "quên" thông tin ở đầu chuỗi.

```
"The cat, which sat on the mat and watched the birds for hours, was ___"
 ↑                                                                 ↑
 Thông tin cần ở rất xa                                           Cần predict ở đây
 → Gradient ≈ 0 khi backpropagate ngược lại!
```

---

## 2. LSTM — Long Short-Term Memory

### 2.1 Kiến trúc LSTM Cell

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

| Gate | Công thức | Chức năng |
|------|----------|-----------|
| Forget | $f_t = \sigma(W_f \cdot [h_{t-1}, x_t] + b_f)$ | Quên gì? |
| Input | $i_t = \sigma(W_i \cdot [h_{t-1}, x_t] + b_i)$ | Nhớ gì mới? |
| Output | $o_t = \sigma(W_o \cdot [h_{t-1}, x_t] + b_o)$ | Output gì? |

### 2.2 LSTM với PyTorch

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

## 3. GRU — Gated Recurrent Unit

GRU đơn giản hóa LSTM: gộp forget + input gate thành **update gate**, bỏ cell state riêng.

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

| So sánh | LSTM | GRU |
|---------|------|-----|
| Parameters | Nhiều hơn (4 gates) | Ít hơn (2 gates) |
| Training | Chậm hơn | Nhanh hơn |
| Long sequences | Tốt hơn | Tốt |
| Chất lượng | Thường tương đương | Thường tương đương |

---

## 4. Bidirectional RNN

```
Forward:   h₁ → h₂ → h₃ → h₄
                                  → concat → output
Backward:  h₄ ← h₃ ← h₂ ← h₁
```

Đọc text từ **cả hai hướng** — hiểu context phía trước VÀ phía sau.

---

## Tổng kết

| Kiến trúc | Ưu điểm | Hạn chế |
|-----------|---------|---------|
| Vanilla RNN | Đơn giản | Vanishing gradient, quên nhanh |
| LSTM | Long-range dependencies | Chậm, sequential (không parallel) |
| GRU | Nhẹ hơn LSTM, hiệu quả | Tương tự LSTM |
| Bidirectional | Hiểu context 2 chiều | 2x computation |

> 📌 **Tại sao cần Transformer?** RNN/LSTM xử lý tuần tự từng token → **không thể parallel** → chậm với chuỗi dài. Transformer giải quyết vấn đề này.

---

## Bài tiếp theo

**Bài 8: Attention Mechanism** — Bước ngoặt lớn nhất của NLP: cho phép model "tập trung" vào phần quan trọng nhất.
