---
id: 019c9619-bb05-7005-c005-bb0500000005
title: 'Bài 5: Attention Mechanism — Self-attention & Multi-head Attention'
slug: bai-5-attention-mechanism
description: >-
  Cơ chế Attention từ gốc: Scaled Dot-Product Attention, Multi-head Attention,
  tại sao Attention giải quyết được vấn đề của RNN. Code từ đầu với PyTorch.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: Kiến trúc Transformer"
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: "AI & LLM: Từ Cơ bản đến Nâng cao"
  slug: ai-llm-tu-co-ban-den-nang-cao
---

## Tổng quan

Attention Mechanism là **trái tim của mọi LLM hiện đại**. Bài này sẽ giải thích từ trực quan đến toán học, rồi code từ đầu với PyTorch. Sau bài này bạn sẽ hiểu tại sao câu "Attention is All You Need" lại revolutionary đến vậy.

---

## 1. Vấn đề: Long-range Dependencies

Xét câu: *"The **animal** didn't cross the street because **it** was too tired."*

"It" ở đây chỉ "animal" hay "street"? Con người hiểu ngay là "animal" — nhưng LSTM phải "nhớ" từ "animal" qua nhiều bước xử lý tuần tự.

**Với Attention:** token "it" có thể **trực tiếp nhìn vào** mọi token khác và tính toán xem token nào quan trọng nhất với nó — không qua trung gian.

---

## 2. Ý tưởng cốt lõi: Query, Key, Value

Attention dựa trên phép ẩn dụ **database retrieval**:

- **Query (Q):** "Tôi đang tìm gì?" — token hiện tại muốn biết điều gì
- **Key (K):** "Tôi có thể cung cấp gì?" — mỗi token "quảng cáo" nội dung của nó
- **Value (V):** "Đây là nội dung thực sự của tôi" — thông tin được trích xuất

```
Trực quan:
- Q của "it" hỏi: "tôi là gì?"
- K của "animal" trả lời tốt với query đó → attention score cao
- V của "animal" được đưa vào để tổng hợp nghĩa cho "it"
```

---

## 3. Scaled Dot-Product Attention

### Công thức

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

**Giải thích từng bước:**

1. `QK^T` — tính dot product giữa query và mọi key → similarity scores
2. `/ sqrt(d_k)` — scale để tránh gradient vanishing khi d_k lớn
3. `softmax(...)` — chuyển scores thành probability distribution (tổng = 1)
4. `* V` — weighted sum của values theo attention weights

### Tại sao chia sqrt(d_k)?

Khi d_k lớn (e.g. 64), dot products trở nên rất lớn → softmax bão hoà → gradient rất nhỏ. Chia `sqrt(d_k)` giữ variance ổn định:

```python
# Nếu q, k ~ N(0,1), thì qk^T ~ N(0, d_k)
# Std = sqrt(d_k) → chia sqrt(d_k) để std = 1
```

### Code: Scaled Dot-Product Attention

```python
import torch
import torch.nn as nn
import torch.nn.functional as F
import math

def scaled_dot_product_attention(Q, K, V, mask=None):
    """
    Q: (batch, heads, seq_len, d_k)
    K: (batch, heads, seq_len, d_k)
    V: (batch, heads, seq_len, d_v)
    """
    d_k = Q.size(-1)

    # 1. Similarity scores: (batch, heads, seq_len_q, seq_len_k)
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)

    # 2. Causal mask (dùng trong decoder — không nhìn tương lai)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, float('-inf'))

    # 3. Attention weights
    attn_weights = F.softmax(scores, dim=-1)  # (B, H, T, T)

    # 4. Weighted sum of values
    output = torch.matmul(attn_weights, V)    # (B, H, T, d_v)

    return output, attn_weights
```

---

## 4. Multi-head Attention

Thay vì chạy 1 attention với d_model chiều, Multi-head Attention **chạy h attention heads song song**, mỗi head học một "khía cạnh" khác nhau:

- Head 1: quan hệ cú pháp (subject-verb)
- Head 2: coreference ("it" → "animal")
- Head 3: semantic similarity
- ...

```
MultiHead(Q,K,V) = Concat(head_1, ..., head_h) * W_O

head_i = Attention(Q*W_i^Q, K*W_i^K, V*W_i^V)
```

### Code: Multi-head Attention

```python
class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, num_heads):
        super().__init__()
        assert d_model % num_heads == 0

        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads  # dimension per head

        # Linear projections
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
        self.W_o = nn.Linear(d_model, d_model)

    def split_heads(self, x, batch_size):
        """(B, T, d_model) → (B, H, T, d_k)"""
        x = x.view(batch_size, -1, self.num_heads, self.d_k)
        return x.transpose(1, 2)

    def forward(self, query, key, value, mask=None):
        batch_size = query.size(0)

        # 1. Linear projections + split into heads
        Q = self.split_heads(self.W_q(query), batch_size)
        K = self.split_heads(self.W_k(key),   batch_size)
        V = self.split_heads(self.W_v(value), batch_size)

        # 2. Scaled dot-product attention
        x, attn_weights = scaled_dot_product_attention(Q, K, V, mask)

        # 3. Concatenate heads: (B, H, T, d_k) → (B, T, d_model)
        x = x.transpose(1, 2).contiguous()
        x = x.view(batch_size, -1, self.d_model)

        # 4. Final linear projection
        return self.W_o(x), attn_weights


# Test
d_model, num_heads, seq_len, batch = 512, 8, 20, 4
mha = MultiHeadAttention(d_model, num_heads)
x = torch.randn(batch, seq_len, d_model)
out, weights = mha(x, x, x)  # Self-attention: Q=K=V=x
print(f"Output: {out.shape}")        # (4, 20, 512)
print(f"Attn weights: {weights.shape}")  # (4, 8, 20, 20)
```

---

## 5. Self-attention vs Cross-attention

| | Self-attention | Cross-attention |
|---|---|---|
| Q từ | Same sequence | Decoder sequence |
| K, V từ | Same sequence | Encoder output |
| Dùng trong | Encoder, Decoder | Decoder |
| Mục đích | Token quan hệ với nhau | Decoder attend encoder |

```python
# Self-attention: Q = K = V = encoder_output
self_attn_out = mha(encoder_out, encoder_out, encoder_out)

# Cross-attention: Q từ decoder, K/V từ encoder
cross_attn_out = mha(decoder_out, encoder_out, encoder_out)
```

---

## 6. Causal (Masked) Self-attention

Trong decoder, token không được "nhìn về tương lai" khi generate. Ta dùng **causal mask**:

```python
def create_causal_mask(seq_len):
    """Upper triangular matrix = 0 (future tokens bị mask)"""
    mask = torch.tril(torch.ones(seq_len, seq_len))
    return mask  # 1=attend, 0=mask

# Ví dụ seq_len=4:
# [[1, 0, 0, 0],
#  [1, 1, 0, 0],
#  [1, 1, 1, 0],
#  [1, 1, 1, 1]]
```

---

## 7. Visualize Attention

```python
import matplotlib.pyplot as plt
import seaborn as sns

def plot_attention(attn_weights, tokens, head=0):
    """Plot attention heatmap cho head cụ thể"""
    fig, ax = plt.subplots(figsize=(8, 6))
    # attn_weights: (batch, heads, seq, seq)
    weights = attn_weights[0, head].detach().numpy()
    sns.heatmap(weights, xticklabels=tokens, yticklabels=tokens,
                cmap='Blues', ax=ax)
    ax.set_title(f'Attention Head {head}')
    plt.tight_layout()
    plt.show()

# Ví dụ
tokens = ["The", "cat", "sat", "on", "the", "mat"]
# plot_attention(attn_weights, tokens, head=0)
```

---

## 8. Complexity: Attention vs RNN

| | Time Complexity | Space Complexity | Sequential Ops |
|---|---|---|---|
| Self-Attention | O(n² · d) | O(n²) | O(1) |
| RNN | O(n · d²) | O(d) | O(n) |
| CNN | O(k · n · d²) | O(k · d) | O(log n) |

**Ưu điểm Attention:** O(1) sequential operations → **hoàn toàn song song hóa được trên GPU**.

**Nhược điểm:** O(n²) — với sequence dài (n=4096+), quadratic cost rất tốn kém. Đây là lý do nghiên cứu Flash Attention, Sparse Attention ra đời.

---

## Tổng kết

```
Attention cho phép:
✅ Mọi token attend trực tiếp mọi token khác
✅ Parallel processing (không tuần tự như RNN)
✅ Không có information bottleneck
✅ Học nhiều loại quan hệ khác nhau (multi-head)
```

**Bài tiếp theo:** Ghép tất cả lại — kiến trúc Transformer hoàn chỉnh với Encoder, Decoder, Positional Encoding và Feed-Forward layers.
