---
id: 019d8b30-bb09-7009-c009-ee0900000009
title: 第 9 課：Transformer —“你所需要的就是注意力”
slug: bai-9-transformer
description: >-
  詳細的 Transformer 架構：編碼器-解碼器、位置編碼、層歸一化、前饋網路。為什麼 Transformer 勝過 RNN：平行化、遠端依賴。使用
  PyTorch 從頭開始編寫 Transformer 程式碼。帶註釋的 Transformer 演練。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: 第 3 部分：NLP 深度學習 — RNN、LSTM 到 Transformer
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: NLP 從基礎到進階：掌握自然語言處理
  slug: nlp-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：變形金剛 — 「注意力就是你</tspan>
      <tspan x="60" dy="42">需要”</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP 從基礎到進階：掌握自然語言處理</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：NLP 深度學習 — RNN、LSTM 到 Transformer</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

論文《Attention Is All You Need》（Vaswani 等人，2017 年）是 NLP 史上**最大的轉捩點**。 Transformer 完全消除了 RNN/LSTM，僅使用注意力，並成為**每個**現代 LLM 的基礎：GPT-4、Gemini、Claude、LLaMA。

---

## 1. 為什麼我們需要 Transformer？

| RNN/LSTM 的問題 |變壓器解決|
|--------------------------------|---------------------|
|順序處理（慢）| **並行**處理（快速）|
|消失梯度（長→忘記）|自註意力（直接連接到每個位置）|
|固定上下文視窗 |注意**整個**序列 |
|難以擴展到GPU叢集|輕鬆並行化 |

---

## 2.Transformer架構

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

## 3. 位置編碼

Transformer 沒有「順序」的概念—需要**新增位置**到嵌入：

$$PE_{(pos, 2i)} = \sin\left(\frac{pos}{10000^{2i/d_{model}}}\right)$$
$$PE_{(pos, 2i+1)} = \cos\left(\frac{pos}{10000^{2i/d_{模型}}}\right)$$

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

## 4. 編碼器區塊

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

## 5. 不同問題的 Transformer

|建築|使用部分|型號|數學問題|
|------------|-------------|--------|---------|
|僅編碼器 |編碼器 |伯特，羅伯塔 |分類、NER、QA |
|僅解碼器 |解碼器| GPT、駱駝|文字產生 |
|編碼器-解碼器 |兩者 | T5、BART、mBART |翻譯、摘要|

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

## 6. 比較 Transformer 與 RNN

|特點| RNN/LSTM |變壓器|
|------------|----------|-------------|
|並行度|順序| **完全並行** |
|遠端|梯度消失 | **直接關注** |
|速度（訓練）|慢| **更快** |
|記憶體|每步 O(1) | O(n²) 注意力矩陣 |
|職位|隱式（序列）|顯式（位置編碼）|

---

## 總結

|成分|角色 |
|------------|---------|
|自我關注 |將每個令牌連接到每個令牌 |
|多頭|許多不同的觀點|
|位置編碼|新增位置資訊 |
|新增與規格|剩餘連接+層歸一化|
|前饋 |非線性變換|

---

## 下一篇文章

**第 10 課：BERT** — 第一個徹底改變 NLP 的預訓練語言模型：訓練一次，針對每個問題進行微調。
