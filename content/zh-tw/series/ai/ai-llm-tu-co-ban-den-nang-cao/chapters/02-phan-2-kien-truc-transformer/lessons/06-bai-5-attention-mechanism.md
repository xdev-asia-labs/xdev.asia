---
id: 019c9619-bb05-7005-c005-bb0500000005
title: 第5課：注意力機制－自註意力與多頭注意力
slug: bai-5-attention-mechanism
description: >-
  從根源上的Attention機制：Scaled Dot-Product Attention、Multi-head
  Attention，為什麼Attention解決了RNN的問題。使用 PyTorch 從頭開始編寫程式碼。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 第 2 部分：Transformer 架構
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 人工智慧和法學碩士：從基礎到高級
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1833" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1833)"/>

  <!-- Decorations -->
  <g>
    <circle cx="601" cy="213" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="602" cy="274" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="603" cy="75" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="604" cy="136" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="605" cy="197" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="123" x2="1100" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="153" x2="1050" y2="223" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1055.9089653438086,204 1055.9089653438086,242 1023,261 990.0910346561914,242 990.0910346561914,204 1023,185" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 人工智慧與機器學習 — 第 4 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：注意力機制 —</tspan>
      <tspan x="60" dy="42">自註意力和多頭注意力</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧和法學碩士：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：Transformer 架構</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 概述

注意力機制是**每個現代法學碩士的核心**。本文將從視覺化到數學進行講解，然後使用 PyTorch 從頭開始編碼。讀完本文，您將明白為什麼「注意力就是您所需要的」這句話如此具有革命性。

---

## 1. 問題：遠端依賴

考慮這句話：*「**動物**沒有過馬路，因為**它**太累了。」*

這裡的「它」是指「動物」還是「街道」？人類可以立即理解「動物」——但 LSTM 必須透過許多連續的處理步驟「記住」「動物」這個詞。

**注意：**“it”令牌可以**直接查看**每個其他令牌併計算哪些令牌對其最重要 - 無需中介。

---

## 2.核心思想：Query、Key、Value

注意力基於**資料庫檢索**比喻：

- **查詢（Q）：**“我在尋找什麼？” — 當前代幣想知道什麼
- **關鍵 (K)：** “我能提供什麼？” — 每個令牌“宣傳”其內容
- **值（V）：**「這是我的真實內容」－擷取的訊息

```
Trực quan:
- Q của "it" hỏi: "tôi là gì?"
- K của "animal" trả lời tốt với query đó → attention score cao
- V của "animal" được đưa vào để tổng hợp nghĩa cho "it"
```

---

## 3. 縮放點積注意力

### 食譜

$$\text{注意力}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

**逐步說明：**

1. `QK^T` — 計算查詢與每個鍵之間的點積 → 相似度分數
2. `/ sqrt(d_k)` — 當 d_k 很大時進行縮放以避免梯度消失
3. `softmax(...)` — 將分數轉換為機率分佈（總和 = 1）
4. `* V` — 根據注意力權重的值的加權和

### 為什麼要除 sqrt(d_k)？

當d_k很大時（例如64），點積變得很大→softmax飽和→梯度很小。劃分 `sqrt(d_k)` 保持方差穩定：

```python
# Nếu q, k ~ N(0,1), thì qk^T ~ N(0, d_k)
# Std = sqrt(d_k) → chia sqrt(d_k) để std = 1
```

### 程式碼：縮放點積注意力

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

## 4.多頭注意力

多頭注意力**並行運行 h 個注意力頭**，而不是使用維度 d_model 運行 1 個注意力，每個注意力頭學習不同的「面向」：

- 頭 1：句法關係（主謂）
- 頭 2：共指（「它」→「動物」）
- 頭 3：語意相似性
- ...

```
MultiHead(Q,K,V) = Concat(head_1, ..., head_h) * W_O

head_i = Attention(Q*W_i^Q, K*W_i^K, V*W_i^V)
```

### 程式碼：多頭注意力

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

## 5. 自註意力 vs 交叉注意力

| |自我關注 |交叉注意力|
|---|---|---|
|問自 |相同的順序 |解碼器序列|
| K、V 來自 |相同的順序 |編碼器輸出|
|用於 |編碼器、解碼器|解碼器|
|目的|代幣之間是相互關聯的 |解碼器參加編碼器 |

```python
# Self-attention: Q = K = V = encoder_output
self_attn_out = mha(encoder_out, encoder_out, encoder_out)

# Cross-attention: Q từ decoder, K/V từ encoder
cross_attn_out = mha(decoder_out, encoder_out, encoder_out)
```

---

## 6.因果（掩蓋）自註意力

在解碼器中，令牌在產生時並不具有「前瞻性」。我們使用**因果掩模**：

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

## 7. 視覺化注意力

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

## 8. 複雜性：Attention 與 RNN

| |時間複雜度|空間複雜度|順序操作 |
|---|---|---|---|
|自我關注 | O(n²·d) | O(n²) | O(1) | O(1) |
|循環神經網路 | O(n·d²) | O(n·d²) | O(d) | O(n) |
|美國有線電視新聞網 | O(k·n·d²) | O(k·d) | O(log n) |

**注意力優勢：** O(1) 順序操作 → **在 GPU 上完全可並行化**。

**缺點：** O(n²) — 對於長序列 (n=4096+)，二次成本非常昂貴。這就是 Flash Attention 和 Sparse Attention 研究誕生的原因。

---

## 總結

```
Attention cho phép:
✅ Mọi token attend trực tiếp mọi token khác
✅ Parallel processing (không tuần tự như RNN)
✅ Không có information bottleneck
✅ Học nhiều loại quan hệ khác nhau (multi-head)
```

**下一篇文章：** 將它們放在一起 - 帶有編碼器、解碼器、位置編碼和前饋層的完整 Transformer 架構。
