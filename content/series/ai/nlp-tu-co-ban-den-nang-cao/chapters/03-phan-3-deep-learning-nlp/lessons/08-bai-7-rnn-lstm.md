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
