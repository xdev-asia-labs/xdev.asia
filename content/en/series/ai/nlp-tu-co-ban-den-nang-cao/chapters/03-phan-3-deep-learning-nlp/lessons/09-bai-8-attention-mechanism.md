---
id: 019d8b30-bb08-7008-c008-ee0800000008
title: 'Lesson 8: Attention Mechanism — The turning point of NLP'
slug: bai-8-attention-mechanism
description: >-
  Intuition: why do we need attention? Bahdanau attention vs Luong attention.
  Self-attention. Scaled dot-product attention. Multi-head attention. Visualize
  attention weights. From Seq2Seq with attention comes the Transformer platform.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 'Part 3: Deep Learning for NLP — RNN, LSTM, to Transformer'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP from Basics to Advanced: Mastering Natural Language Processing'
  slug: nlp-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5682" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5682)"/>

  <!-- Decorations -->
  <g>
    <circle cx="858" cy="264" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="616" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="874" cy="160" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="632" cy="238" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="890" cy="56" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="184" x2="1100" y2="264" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="214" x2="1050" y2="284" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1017.7749907475932,164.5 1017.7749907475932,203.5 984,223 950.2250092524068,203.5 950.2250092524068,164.5 984,145" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI & ML — Lesson 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 8: Attention Mechanism — The turning point</tspan>
      <tspan x="60" dy="42">of NLP</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP from Basics to Advanced: Mastering Natural Language Processing</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Deep Learning for NLP — RNN, LSTM, to Transformer</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

> "The bottleneck of Seq2Seq: compressing an entire sentence into a single fixed-size vector."

Attention mechanism allows the model to **look back at all** input tokens when generating output — without needing to compress all the information into a single vector. This is the direct foundation of the Transformer.

---

## 1. The problem of Seq2Seq without Attention

```
Encoder:  "I love natural language processing"
              │
              ▼
         [context vector]  ← Toàn bộ câu nén vào 1 vector!
              │
              ▼
Decoder:  "Tôi yêu xử lý ngôn ngữ tự nhiên"
```

The longer the sentence → the greater the information loss.

---

## 2. Attention — Core idea

Instead of just using the final context vector, the decoder **looks back at all** the encoder's hidden states:

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

In which:
- **Q (Query)**: "What am I looking for?" — hidden current state of the decoder
- **K (Key)**: "What is in each input?" — hidden states of the encoder
- **V (Value)**: "Real information" — same as K in basic attention

### Scaled Dot-Product Attention

```python
import torch
import torch.nn.functional as F
import math

def scaled_dot_product_attention(Q, K, V, mask=None):
    """
    Q: (batch, seq_q, d_k)
    K: (batch, seq_k, d_k)
    V: (batch, seq_k, d_v)
    """
    d_k = Q.size(-1)

    # 1. Tính attention scores
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
    # scores: (batch, seq_q, seq_k)

    # 2. Mask (optional)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, -1e9)

    # 3. Softmax → attention weights
    weights = F.softmax(scores, dim=-1)

    # 4. Weighted sum of Values
    output = torch.matmul(weights, V)
    return output, weights
```

---

## 3. Multi-Head Attention

Instead of 1 attention, use **multiple "heads"** — each head learns a different type of relationship:

```python
class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, num_heads):
        super().__init__()
        assert d_model % num_heads == 0
        self.d_k = d_model // num_heads
        self.num_heads = num_heads

        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
        self.W_o = nn.Linear(d_model, d_model)

    def forward(self, Q, K, V, mask=None):
        batch_size = Q.size(0)

        # Linear projections rồi split thành heads
        Q = self.W_q(Q).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        K = self.W_k(K).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        V = self.W_v(V).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)

        # Attention cho từng head
        out, weights = scaled_dot_product_attention(Q, K, V, mask)

        # Concat heads
        out = out.transpose(1, 2).contiguous().view(batch_size, -1, self.num_heads * self.d_k)
        return self.W_o(out)
```

---

## 4. Self-Attention

When Q, K, V all come from **same sequence** → Self-attention. Each token "sees" all the other tokens in the sentence.

```
Input: "The cat sat on the mat"

Self-attention cho từ "sat":
  → "The": 0.05 (ít liên quan)
  → "cat": 0.45 (chủ ngữ, rất liên quan!)
  → "sat": 0.20 (chính nó)
  → "on":  0.15
  → "the": 0.05
  → "mat": 0.10
```

---

## 5. Compare types of Attention

| Type | Q | K, V | Use |
|-------|---|-------|--------|
| Bahdanau | Decoder hidden | Encoder hidden | Seq2Seq translation |
| Salary | Decoder hidden | Encoder hidden | Seq2Seq (simpler) |
| Self-attention | Same sequence | Same sequence | Transformer encoder |
| Cross-attention | Decoder | Encoders | Transformer decoder |
| Causal self-attention | Same + mask future | Similar | GPT (autoregressive) |

---

## Summary

| Concept | Meaning |
|-----------|---------|
| Attention | Allows the model to "look back" at all inputs |
| Q, K, V | Query searches in Keys, gets the corresponding Values ​​|
| Scaling | Divide $\sqrt{d_k}$ to stabilize the gradient |
| Multi-head | Many parallel "perspectives" |
| Self-attention | Each token attends to all other tokens |

---

## Next article

**Lesson 9: Transformer — "Attention Is All You Need"** — Complete architecture combining self-attention, positional encoding, layer norm — the foundation of every modern LLM.
