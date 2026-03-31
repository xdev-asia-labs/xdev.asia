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
