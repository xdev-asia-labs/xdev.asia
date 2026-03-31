---
id: 019d8b30-bb09-7009-c009-ee0900000009
title: 'Bài 9: Transformer — "Attention Is All You Need"'
slug: bai-9-transformer
description: >-
  Kiến trúc Transformer chi tiết: encoder-decoder, positional encoding,
  layer normalization, feed-forward network. Tại sao Transformer thắng
  RNN: parallelization, long-range dependencies. Code Transformer from
  scratch với PyTorch. Annotated Transformer walkthrough.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: Deep Learning cho NLP — RNN, LSTM, đến Transformer"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
---

## Giới thiệu

Paper "Attention Is All You Need" (Vaswani et al., 2017) là **bước ngoặt lớn nhất** trong lịch sử NLP. Transformer loại bỏ hoàn toàn RNN/LSTM, chỉ dùng attention — và trở thành nền tảng của **mọi** LLM hiện đại: GPT-4, Gemini, Claude, LLaMA.

---

## 1. Tại sao cần Transformer?

| Vấn đề của RNN/LSTM | Transformer giải quyết |
|---------------------|----------------------|
| Sequential processing (chậm) | **Parallel** processing (nhanh) |
| Vanishing gradient (dài → quên) | Self-attention (trực tiếp kết nối mọi vị trí) |
| Fixed context window | Attention đến **toàn bộ** sequence |
| Khó scale lên GPU cluster | Song song hóa dễ dàng |

---

## 2. Kiến trúc Transformer

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

Transformer không có khái niệm "thứ tự" — cần **thêm vị trí** vào embeddings:

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

## 5. Transformer cho các bài toán khác nhau

| Kiến trúc | Phần sử dụng | Models | Bài toán |
|-----------|-------------|--------|----------|
| Encoder-only | Encoder | BERT, RoBERTa | Classification, NER, QA |
| Decoder-only | Decoder | GPT, LLaMA | Text generation |
| Encoder-Decoder | Cả hai | T5, BART, mBART | Translation, summarization |

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

## 6. So sánh Transformer vs RNN

| Đặc điểm | RNN/LSTM | Transformer |
|-----------|----------|-------------|
| Parallelism | Sequential | **Fully parallel** |
| Long-range | Vanishing gradient | **Direct attention** |
| Speed (training) | Chậm | **Nhanh hơn nhiều** |
| Memory | O(1) per step | O(n²) attention matrix |
| Position | Implicit (sequence) | Explicit (positional encoding) |

---

## Tổng kết

| Thành phần | Vai trò |
|------------|---------|
| Self-Attention | Kết nối mọi token với mọi token |
| Multi-Head | Nhiều góc nhìn khác nhau |
| Positional Encoding | Thêm thông tin vị trí |
| Add & Norm | Residual connection + Layer Normalization |
| Feed-Forward | Transformation phi tuyến |

---

## Bài tiếp theo

**Bài 10: BERT** — Pre-trained Language Model đầu tiên thay đổi hoàn toàn NLP: train một lần, fine-tune cho mọi bài toán.
