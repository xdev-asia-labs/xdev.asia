---
id: 019d8b30-bb08-7008-c008-ee0800000008
title: 'レッスン 8: 注意のメカニズム — NLP の転換点'
slug: bai-8-attention-mechanism
description: >-
  直感:
  なぜ注意が必要なのでしょうか?バダナウの注目vsルオンの注目。自己注意。スケーリングされたドット積の注意。マルチヘッド注意。注意の重みを視覚化します。注目の
  Seq2Seq から Transformer プラットフォームが登場します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 3: NLP のための深層学習 — RNN、LSTM、Transformer へ'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP の基礎から上級まで: 自然言語処理をマスターする'
  slug: nlp-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 AI と ML — レッスン 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: 注意のメカニズム — 転換点</tspan>
      <tspan x="60" dy="42">NLPの</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP の基礎から上級まで: 自然言語処理をマスターする</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: NLP のための深層学習 — RNN、LSTM、Transformer へ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

> 「Seq2Seq のボトルネック: 文全体を単一の固定サイズのベクトルに圧縮すること。」

アテンション メカニズムを使用すると、すべての情報を 1 つのベクトルに圧縮する必要がなく、モデルは出力を生成するときに **すべての入力トークンを振り返る**ことができます。これはトランスフォーマーの直接の基礎です。

---

## 1. アテンションなしの Seq2Seq の問題

```
Encoder:  "I love natural language processing"
              │
              ▼
         [context vector]  ← Toàn bộ câu nén vào 1 vector!
              │
              ▼
Decoder:  "Tôi yêu xử lý ngôn ngữ tự nhiên"
```

文章が長ければ長いほど、情報の損失が大きくなります。

---

## 2. 注意 — 中心となるアイデア

最終的なコンテキスト ベクトルを単に使用する代わりに、デコーダはエンコーダの隠れた状態を **すべて振り返ります**。

$$\text{注意}(Q, K, V) = \text{ソフトマックス}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

その中で:
- **Q (クエリ)**: 「何を探しているのですか?」 — デコーダの隠された現在の状態
- **K (キー)**: 「各入力には何が入っていますか?」 — エンコーダの隠れた状態
- **V (Value)**: 「実際の情報」 — 基本的な注意の K と同じ

### スケーリングされた内積注意

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

## 3. マルチヘッドアテンション

1 つの注意の代わりに、**複数の「ヘッド」** を使用します。各ヘッドは異なるタイプの関係を学習します。

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

## 4. 自己注意

Q、K、V がすべて **同じシーケンス** から来ている場合 → 自己注意。各トークンは、文内の他のすべてのトークンを「認識」します。

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

## 5. アテンションの種類を比較する

|タイプ | Q | K、V |使用 |
|----------|---|----------|----------|
|バダナウ |デコーダ非表示 |エンコーダ非表示 | Seq2Seq 翻訳 |
|給与 |デコーダ非表示 |エンコーダ非表示 | Seq2Seq (より単純) |
|自注意 |同じシーケンス |同じシーケンス |トランスエンコーダ |
|クロスアテンション |デコーダ |エンコーダ |トランスデコーダ |
|因果的な自己注意 |同＋マスク未来 |類似 | GPT (自己回帰) |

---

## 概要

|コンセプト |意味 |
|----------|----------|
|注意 |モデルがすべての入力を「振り返る」ことができるようにします。
| Q、K、V |クエリはキーを検索し、対応する値を取得します。
|スケーリング | $\sqrt{d_k}$ を除算して勾配を安定させる |
|マルチヘッド |多くの並行する「視点」 |
|自注意 |各トークンは他のすべてのトークンに対応します。

---

## 次の記事

**レッスン 9: トランスフォーマー — 「必要なのは注意だけです」** — セルフ アテンション、位置エンコーディング、レイヤー ノルムを組み合わせた完全なアーキテクチャ — 現代のすべての LLM の基礎。
