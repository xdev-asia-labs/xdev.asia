---
id: 019c9619-bb05-7005-c005-bb0500000005
title: 'レッスン 5: 注意のメカニズム — 自己注意と多頭注意'
slug: bai-5-attention-mechanism
description: >-
  根元からのアテンション メカニズム: スケーリングされたドット積アテンション、マルチヘッド アテンション、アテンションが RNN の問題を解決する理由。
  PyTorch を使用して最初からコードを作成します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 2: トランスのアーキテクチャ'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI と LLM: 基本から高度まで'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI と ML — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 5: 注意のメカニズム —</tspan>
      <tspan x="60" dy="42">自己注意と多頭注意</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI と LLM: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: トランスのアーキテクチャ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## 概要

アテンション メカニズムは、*最新のすべての LLM** の中心です。この記事では、視覚化から数学までを説明し、PyTorch を使用してゼロからコードを作成します。この記事を読み終えると、「必要なのは注意だけです」というフレーズがなぜそれほど革命的なのかが理解できるでしょう。

---

## 1. 問題: 長期にわたる依存関係

次の文を考えてみましょう: *「**動物**は、**疲れすぎていたので、通りを横切らなかった。」*

ここでの「それ」は「動物」を指すのか、それとも「通り」を指すのか？人間は「動物」をすぐに理解しますが、LSTM は多くの連続した処理ステップを経て「動物」という単語を「記憶」する必要があります。

**注意:** 「it」トークンは、仲介者を介さずに、他のすべてのトークンを**直接確認**し、どのトークンが最も重要であるかを計算できます。

---

## 2. 中心となるアイデア: クエリ、キー、値

注意は **データベース検索** のメタファーに基づいています。

- **クエリ (Q):** 「何を探していますか?」 — 現在のトークンが知りたいこと
- **キー (K):** 「何を提供できますか?」 — 各トークンはそのコンテンツを「宣伝」します
- **値 (V):** 「これが私の本当のコンテンツです」 - 抽出された情報

```
Trực quan:
- Q của "it" hỏi: "tôi là gì?"
- K của "animal" trả lời tốt với query đó → attention score cao
- V của "animal" được đưa vào để tổng hợp nghĩa cho "it"
```

---

## 3. スケーリングされたドット積の注意

### レシピ

$$\text{注意}(Q, K, V) = \text{ソフトマックス}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

**ステップバイステップの説明:**

1. `QK^T` — クエリとすべてのキーの間のドット積を計算 → 類似性スコア
2. `/ sqrt(d_k)` — d_k が大きい場合に勾配の消失を避けるためのスケール
3. `softmax(...)` — スコアを確率分布に変換します (合計 = 1)
4. `* V` — アテンションの重みに応じた値の加重合計

### なぜ sqrt(d_k) を除算するのでしょうか?

d_k が大きい場合 (64 など)、内積が非常に大きくなり、ソフトマックスが飽和し、勾配が非常に小さくなります。分ける `sqrt(d_k)` 分散を安定に保つ：

```python
# Nếu q, k ~ N(0,1), thì qk^T ~ N(0, d_k)
# Std = sqrt(d_k) → chia sqrt(d_k) để std = 1
```

### コード: スケーリングされたドット積アテンション

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

## 4. 多頭注意

次元 d_model で 1 つのアテンションを実行する代わりに、マルチヘッド アテンション **h 個のアテンション ヘッドを並行して実行**し、各ヘッドが異なる「側面」を学習します。

- 見出し 1: 構文関係 (主語-動詞)
- 見出し 2: 共参照 (「それ」→「動物」)
- 見出し 3: 意味上の類似性
- ...

```
MultiHead(Q,K,V) = Concat(head_1, ..., head_h) * W_O

head_i = Attention(Q*W_i^Q, K*W_i^K, V*W_i^V)
```

### コード: マルチヘッド アテンション

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

## 5. 自己注意と交差注意

| |自注意 |クロスアテンション |
|---|---|---|
| |からの質問同じシーケンス |デコーダシーケンス |
| K、V から |同じシーケンス |エンコーダ出力 |
| | で使用されるエンコーダ、デコーダ |デコーダ |
|目的 |トークンは相互に関連しています |デコーダはエンコーダに参加します |

```python
# Self-attention: Q = K = V = encoder_output
self_attn_out = mha(encoder_out, encoder_out, encoder_out)

# Cross-attention: Q từ decoder, K/V từ encoder
cross_attn_out = mha(decoder_out, encoder_out, encoder_out)
```

---

## 6. 因果的（仮面をかぶった）自己注意

デコーダでは、トークンは生成時に「前向き」ではありません。 **因果マスク**を使用します。

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

## 7. 注意を視覚化する

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

## 8. 複雑さ: アテンション vs RNN

| |時間計算量 |空間の複雑さ |シーケンシャルオペレーション |
|---|---|---|---|
|自己注意 | O(n² · d) | O(n²) |お(1) |
| ＲＮＮ | O(n · d²) | O(d) | O(n) |
| CNN | O(k · n · d²) | O(k・d) | O(log n) |

**注目の利点:** O(1) シーケンシャル操作 → **GPU 上で完全に並列化可能**。

**欠点:** O(n²) — 長いシーケンス (n=4096+) では、二次コストが非常に高くなります。これが、フラッシュ アテンションとスパース アテンションの研究が生まれた理由です。

---

## 概要

```
Attention cho phép:
✅ Mọi token attend trực tiếp mọi token khác
✅ Parallel processing (không tuần tự như RNN)
✅ Không có information bottleneck
✅ Học nhiều loại quan hệ khác nhau (multi-head)
```

**次の投稿:** すべてをまとめる — エンコーダー、デコーダー、位置エンコーディング、およびフィードフォワード レイヤーを備えた完全な Transformer アーキテクチャ。
