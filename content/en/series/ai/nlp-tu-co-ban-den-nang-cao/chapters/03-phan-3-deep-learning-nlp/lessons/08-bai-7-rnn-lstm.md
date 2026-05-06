---
id: 019d8b30-bb07-7007-c007-ee0700000007
title: 'Lesson 7: RNN & LSTM — Sequential Sequence Processing'
slug: bai-7-rnn-lstm
description: >-
  Recurrent Neural Networks: architecture, backpropagation through time.
  Vanishing gradient problem. LSTM: cell state, gates (forget, input, output).
  GRU: simplified variant. Bidirectional RNN. Hands-on text classification with
  PyTorch.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 3: Deep Learning for NLP — RNN, LSTM, to Transformer'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP from Basics to Advanced: Mastering Natural Language Processing'
  slug: nlp-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI & ML — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 7: RNN & LSTM — Sequential Sequence Processing</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP from Basics to Advanced: Mastering Natural Language Processing</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Deep Learning for NLP — RNN, LSTM, to Transformer</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

**Recurrent Neural Networks (RNN)** is the first neural network architecture designed for **sequential** data — text, time series, audio. Although Transformer has been replaced in many problems, understanding RNN/LSTM is the foundation to understand why Attention and Transformer were born.

---

## 1. RNN — Recurrent Neural Network

### 1.1 Architecture

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

### 1.2 Vanishing Gradient problem

When the chain is long, the gradient **decreases exponentially** with each timestep → RNN "forgets" the information at the beginning of the chain.

```
"The cat, which sat on the mat and watched the birds for hours, was ___"
 ↑                                                                 ↑
 Thông tin cần ở rất xa                                           Cần predict ở đây
 → Gradient ≈ 0 khi backpropagate ngược lại!
```

---

## 2. LSTM — Long Short-Term Memory

### 2.1 LSTM Cell Architecture

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

| Gate | Recipe | Function |
|-----|----------|-----------|
| Forget | $f_t = \sigma(W_f \cdot [h_{t-1}, x_t] + b_f)$ | Forgot what? |
| Input | $i_t = \sigma(W_i \cdot [h_{t-1}, x_t] + b_i)$ | What's new? |
| Output | $o_t = \sigma(W_o \cdot [h_{t-1}, x_t] + b_o)$ | What output? |

### 2.2 LSTM with PyTorch

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

GRU simplifies LSTM: combine forget + input gate into **update gate**, removing separate state cell.

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

| Compare | LSTM | GRU |
|--------|-------|-----|
| Parameters | More (4 gates) | Less (2 gates) |
| Training | Slower | Faster |
| Long sequences | Better | Good |
| Quality | Usually equivalent to | Usually equivalent to |

---

## 4. Bidirectional RNN

```
Forward:   h₁ → h₂ → h₃ → h₄
                                  → concat → output
Backward:  h₄ ← h₃ ← h₂ ← h₁
```

Read text from **both directions** — understand the context before AND after.

---

## Summary

| Architecture | Advantages | Limitations |
|-----------|---------|---------|
| Vanilla RNN | Simple | Vanishing gradient, quickly forgotten |
| LSTM | Long-range dependencies | Slow, sequential (not parallel) |
| GRU | Lighter than LSTM, effective | Similar to LSTM |
| Bidirectional | Understanding 2-way context | 2x computation |

> 📌 **Why do we need a Transformer?** RNN/LSTM processes each token sequentially → **cannot be parallel** → slow with long chains. Transformer solves this problem.

---

## Next article

**Lesson 8: Attention Mechanism** — The biggest turning point of NLP: allowing the model to "focus" on the most important part.
