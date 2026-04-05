---
id: 019d8b30-bb08-7008-c008-ee0800000008
title: 'Bài 8: Attention Mechanism — Bước ngoặt của NLP'
slug: bai-8-attention-mechanism
description: >-
  Intuition: tại sao cần attention? Bahdanau attention vs Luong
  attention. Self-attention. Scaled dot-product attention. Multi-head
  attention. Visualize attention weights. Từ Seq2Seq với attention
  đến nền tảng của Transformer.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 3: Deep Learning cho NLP — RNN, LSTM, đến Transformer"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI &amp; ML — Bài 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 8: Attention Mechanism — Bước ngoặt</tspan>
      <tspan x="60" dy="42">của NLP</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Deep Learning cho NLP — RNN, LSTM, đến Transformer</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

> "The bottleneck of Seq2Seq: compressing an entire sentence into a single fixed-size vector."

Attention mechanism cho phép model **nhìn lại tất cả** input tokens khi tạo output — không cần nén toàn bộ thông tin vào một vector duy nhất. Đây là nền tảng trực tiếp của Transformer.

---

## 1. Vấn đề của Seq2Seq không có Attention

```
Encoder:  "I love natural language processing"
              │
              ▼
         [context vector]  ← Toàn bộ câu nén vào 1 vector!
              │
              ▼
Decoder:  "Tôi yêu xử lý ngôn ngữ tự nhiên"
```

Câu càng dài → information loss càng lớn.

---

## 2. Attention — Ý tưởng cốt lõi

Thay vì chỉ dùng context vector cuối cùng, decoder **nhìn lại tất cả** hidden states của encoder:

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

Trong đó:
- **Q (Query)**: "Tôi đang tìm gì?" — hidden state hiện tại của decoder
- **K (Key)**: "Mỗi input có gì?" — hidden states của encoder
- **V (Value)**: "Thông tin thực sự" — giống K trong basic attention

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

Thay vì 1 attention, dùng **nhiều "heads"** — mỗi head học một loại quan hệ khác nhau:

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

Khi Q, K, V đều đến từ **cùng một sequence** → Self-attention. Mỗi token "nhìn" tất cả các token khác trong câu.

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

## 5. So sánh các loại Attention

| Loại | Q | K, V | Sử dụng |
|------|---|------|---------|
| Bahdanau | Decoder hidden | Encoder hiddens | Seq2Seq translation |
| Luong | Decoder hidden | Encoder hiddens | Seq2Seq (đơn giản hơn) |
| Self-attention | Same sequence | Same sequence | Transformer encoder |
| Cross-attention | Decoder | Encoder | Transformer decoder |
| Causal self-attention | Same + mask future | Same | GPT (autoregressive) |

---

## Tổng kết

| Khái niệm | Ý nghĩa |
|------------|---------|
| Attention | Cho phép model "nhìn lại" tất cả inputs |
| Q, K, V | Query tìm trong Keys, lấy Values tương ứng |
| Scaling | Chia $\sqrt{d_k}$ để ổn định gradient |
| Multi-head | Nhiều "góc nhìn" song song |
| Self-attention | Mỗi token attend to tất cả tokens khác |

---

## Bài tiếp theo

**Bài 9: Transformer — "Attention Is All You Need"** — Kiến trúc hoàn chỉnh kết hợp self-attention, positional encoding, layer norm — nền tảng của mọi LLM hiện đại.
