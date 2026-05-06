---
id: 019d8b30-bb08-7008-c008-ee0800000008
title: 第8課：注意力機制－NLP的轉折點
slug: bai-8-attention-mechanism
description: >-
  直覺：為什麼我們需要注意力？ Bahdanau 注意力 vs Luong 注意力。自我關注。縮放點積注意力。多頭關注。可視化注意力權重。備受關注的
  Seq2Seq 誕生了 Transformer 平台。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 第 3 部分：NLP 深度學習 — RNN、LSTM 到 Transformer
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: NLP 從基礎到進階：掌握自然語言處理
  slug: nlp-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：注意力機制－轉折點</tspan>
      <tspan x="60" dy="42">自然語言處理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP 從基礎到進階：掌握自然語言處理</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：NLP 深度學習 — RNN、LSTM 到 Transformer</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

> “Seq2Seq 的瓶頸：將整個句子壓縮為單一固定大小的向量。”

注意力機制允許模型在生成輸出時**查看所有**輸入標記 - 無需將所有資訊壓縮到單個向量中。這是 Transformer 的直接基礎。

---

## 1.沒有Attention的Seq2Seq問題

```
Encoder:  "I love natural language processing"
              │
              ▼
         [context vector]  ← Toàn bộ câu nén vào 1 vector!
              │
              ▼
Decoder:  "Tôi yêu xử lý ngôn ngữ tự nhiên"
```

句子越長→訊息損失越大。

---

## 2.注意力－核心思想

解碼器不只是使用最終的上下文向量，而是**回顧**編碼器的隱藏狀態：

$$\text{注意力}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

其中：
- **Q（查詢）**：「我在尋找什麼？」— 隱藏解碼器的當前狀態
- **K（鍵）**： “每個輸入中有什麼？” — 編碼器的隱藏狀態
- **V (Value)**：「真實訊息」－與基本注意力中的 K 相同

### 縮放點積注意力

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

## 3. 多頭注意力

使用**多個「頭」**而不是 1 個注意力－每個頭學習不同類型的關係：

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

## 4. 自註意力

當Q、K、V都來自**相同的序列**時 → 自我注意。每個標記「看到」句子中的所有其他標記。

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

## 5. 比較注意力類型

|類型 |問 | K、V |使用 |
|--------|---|--------|--------|
|巴達瑙 |解碼器隱藏 |編碼器隱藏 | Seq2Seq 翻譯 |
|薪資|解碼器隱藏 |編碼器隱藏 | Seq2Seq（更簡單）|
|自我關注 |相同的順序 |相同的順序 |變壓器編碼器|
|交叉注意力|解碼器|編碼器 |變壓器解碼器|
|因果自註意力 |相同+掩蓋未來|類似| GPT（自回歸）|

---

## 總結

|概念 |意義|
|------------|---------|
|注意|允許模型「回顧」所有輸入 |
| Q、K、V | Query在Keys中搜索，取得對應的Values|
|縮放 |除以$\sqrt{d_k}$以穩定梯度 |
|多頭|許多平行的「視角」|
|自我關注 |每個令牌都關注所有其他令牌|

---

## 下一篇文章

**第 9 課：Transformer —「注意力就是您所需要的」** — 結合自註意力、位置編碼、層規範的完整架構 — 每個現代法學碩士的基礎。
