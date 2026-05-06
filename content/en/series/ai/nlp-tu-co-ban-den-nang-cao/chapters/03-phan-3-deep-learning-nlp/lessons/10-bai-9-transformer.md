---
id: 019d8b30-bb09-7009-c009-ee0900000009
title: 'Lesson 9: Transformer — "Attention Is All You Need"'
slug: bai-9-transformer
description: >-
  Detailed Transformer architecture: encoder-decoder, positional encoding, layer
  normalization, feed-forward network. Why Transformer wins over RNN:
  parallelization, long-range dependencies. Code Transformer from scratch with
  PyTorch. Annotated Transformer walkthrough.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: 'Part 3: Deep Learning for NLP — RNN, LSTM, to Transformer'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP from Basics to Advanced: Mastering Natural Language Processing'
  slug: nlp-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4247" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4247)"/>

  <!-- Decorations -->
  <g>
    <circle cx="798" cy="84" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="996" cy="102" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="694" cy="120" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="892" cy="138" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1090" cy="156" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="104" x2="1100" y2="184" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="134" x2="1050" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1037.7749907475932,184.5 1037.7749907475932,223.5 1004,243 970.2250092524068,223.5 970.2250092524068,184.5 1004,165" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI & ML — Lesson 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 9: Transformer — "Attention Is All You</tspan>
      <tspan x="60" dy="42">need"</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP from Basics to Advanced: Mastering Natural Language Processing</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Deep Learning for NLP — RNN, LSTM, to Transformer</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Paper "Attention Is All You Need" (Vaswani et al., 2017) is the **biggest turning point** in the history of NLP. Transformer completely eliminates RNN/LSTM, uses only attention — and becomes the basis of **every** modern LLM: GPT-4, Gemini, Claude, LLaMA.

---

## 1. Why do we need a Transformer?

| Problems of RNN/LSTM | Transformer solve |
|---------------------|---------------------|
| Sequential processing (slow) | **Parallel** processing (fast) |
| Vanishing gradient (long → forget) | Self-attention (direct connection to every location) |
| Fixed context window | Attention to **entire** sequence |
| Difficult to scale to GPU cluster | Easy Parallelization |

---

## 2. Transformer architecture

```
┌──────────────────────────────────────────────┐
│                TRANSFORMER                    │
│                                              │
│  ┌─────────────────┐  ┌─────────────────┐   │
│  │    ENCODER       │  │    DECODER       │   │
│  │  (stack of N)    │  │  (stack of N)    │   │
│  │                  │  │                  │   │
│  │ ┌──────────────┐│  │ ┌──────────────┐ │   │
│  │ │Multi-Head    ││  │ │Masked MH     │ │   │
│  │ │Self-Attention││  │ │Self-Attention │ │   │
│  │ └──────┬───────┘│  │ └──────┬───────┘ │   │
│  │ ┌──────┴───────┐│  │ ┌──────┴───────┐ │   │
│  │ │Add & Norm    ││  │ │Add & Norm    │ │   │
│  │ └──────┬───────┘│  │ └──────┬───────┘ │   │
│  │ ┌──────┴───────┐│  │ ┌──────┴───────┐ │   │
│  │ │Feed-Forward  ││  │ │Cross-Attention│ │   │
│  │ └──────┬───────┘│  │ └──────┬───────┘ │   │
│  │ ┌──────┴───────┐│  │ ┌──────┴───────┐ │   │
│  │ │Add & Norm    ││  │ │Feed-Forward  │ │   │
│  │ └──────────────┘│  │ └──────────────┘ │   │
│  └────────┬────────┘  └────────┬────────┘   │
│           │                    │              │
│  ┌────────┴────────┐  ┌───────┴────────┐    │
│  │Positional       │  │Positional      │    │
│  │Encoding + Embed │  │Encoding + Embed│    │
│  └─────────────────┘  └────────────────┘    │
└──────────────────────────────────────────────┘
```

---

## 3. Positional Encoding

Transformer has no concept of "order" — need to **add position** to embeddings:

$$PE_{(pos, 2i)} = \sin\left(\frac{pos}{10000^{2i/d_{model}}}\right)$$
$$PE_{(pos, 2i+1)} = \cos\left(\frac{pos}{10000^{2i/d_{model}}}\right)$$

```python
import torch
import math

class PositionalEncoding(nn.Module):
    def __init__(self, d_model, max_len=5000):
        super().__init__()
        pe = torch.zeros(max_len, d_model)
        position = torch.arange(0, max_len, dtype=torch.float).unsqueeze(1)
        div_term = torch.exp(
            torch.arange(0, d_model, 2).float() * (-math.log(10000.0) / d_model)
        )
        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        pe = pe.unsqueeze(0)  # (1, max_len, d_model)
        self.register_buffer('pe', pe)

    def forward(self, x):
        return x + self.pe[:, :x.size(1)]
```

---

## 4. Encoder Block

```python
class TransformerEncoderBlock(nn.Module):
    def __init__(self, d_model, num_heads, d_ff, dropout=0.1):
        super().__init__()
        self.self_attn = MultiHeadAttention(d_model, num_heads)
        self.ffn = nn.Sequential(
            nn.Linear(d_model, d_ff),
            nn.ReLU(),
            nn.Linear(d_ff, d_model),
        )
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.dropout = nn.Dropout(dropout)

    def forward(self, x, mask=None):
        # Self-Attention + Residual + LayerNorm
        attn_out = self.self_attn(x, x, x, mask)
        x = self.norm1(x + self.dropout(attn_out))

        # Feed-Forward + Residual + LayerNorm
        ffn_out = self.ffn(x)
        x = self.norm2(x + self.dropout(ffn_out))
        return x
```

---

## 5. Transformer for different problems

| Architecture | Usage section | Models | Math problem |
|-----------|-------------|--------|----------|
| Encoder-only | Encoders | BERT, RoBERTa | Classification, NER, QA |
| Decoder-only | Decoder | GPT, LLaMA | Text generation |
| Encoder-Decoder | Both | T5, BART, mBART | Translation, summarization |

```
BERT (Encoder-only):
  Input: "The [MASK] sat on the mat"
  Output: "The cat sat on the mat"

GPT (Decoder-only):
  Input: "Once upon a time"
  Output: "Once upon a time, there was a..."

T5 (Encoder-Decoder):
  Input: "translate English to Vietnamese: Hello"
  Output: "Xin chào"
```

---

## 6. Compare Transformer vs RNN

| Features | RNN/LSTM | Transformer |
|-----------|----------|-------------|
| Parallelism | Sequential | **Fully parallel** |
| Long-range | Vanishing gradient | **Direct attention** |
| Speed ​​(training) | Slow | **Much faster** |
| Memory | O(1) per step | O(n²) attention matrix |
| Position | Implicit (sequence) | Explicit (positional encoding) |

---

## Summary

| Ingredients | Role |
|-----------|---------|
| Self-Attention | Connect every token to every token |
| Multi-Head | Many different perspectives |
| Positional Encoding | Add location information |
| Add & Norm | Residual connection + Layer Normalization |
| Feed-Forward | Nonlinear Transformation |

---

## Next article

**Lesson 10: BERT** — The first Pre-trained Language Model to completely change NLP: train once, fine-tune for every problem.
