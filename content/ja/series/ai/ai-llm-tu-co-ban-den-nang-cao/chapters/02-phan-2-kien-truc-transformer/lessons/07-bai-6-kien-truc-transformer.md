---
id: 019c9619-bb06-7006-c006-bb0600000006
title: 'レッスン 6: トランスフォーマーのアーキテクチャ — エンコーダー、デコーダー、位置エンコーディング'
slug: bai-6-kien-truc-transformer
description: >-
  論文「Attending is All You Need」(2017) から Transformer
  アーキテクチャを探索します。位置エンコーディング、マルチヘッド
  アテンションを備えたエンコーダー、マスクされたセルフアテンションとクロスアテンションを備えたデコーダー、そして機械翻訳の問題に適用される完全な
  PyTorch コードです。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 2: トランスのアーキテクチャ'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI と LLM: 基本から高度まで'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2607" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2607)"/>

  <!-- Decorations -->
  <g>
    <circle cx="732" cy="106" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="864" cy="218" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="996" cy="70" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="628" cy="182" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="760" cy="34" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="86" x2="1100" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="116" x2="1050" y2="186" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="971.507041555162,115.5 971.507041555162,156.5 936,177 900.492958444838,156.5 900.492958444838,115.50000000000001 936,95" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI と ML — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 6: トランスフォーマーのアーキテクチャ — エンコーダー、</tspan>
      <tspan x="60" dy="42">デコーダ、位置エンコーディング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI と LLM: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: トランスのアーキテクチャ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# レッスン 6: トランスフォーマーのアーキテクチャ — エンコーダー、デコーダー、位置エンコーディング

## 1. 論文「必要なのは注意だけ」 — なぜ革命的なのか?

2017 年、Ashish Vaswani と Google Brain の同僚は、AI の歴史の中で最も影響力のある論文の 1 つである論文 **「Attending is All You Need」** を発表しました。以前は、シーケンス処理モデル (NLP、機械翻訳) は主に RNN と LSTM に依存していましたが、次の 2 つの基本的な制限がありました。

- **逐次処理**: RNN はトークンを順番に処理する必要があり、並列化できません。トレーニングは非常に時間がかかります。
- **消失勾配**: 勾配は多くのタイム ステップにわたって伝播するため、長い依存関係は「忘れられます」。

Transformer は、**再発を完全に排除**することで両方の問題を解決し、代わりに**セルフアテンション**を使用して、各トークンが他のすべてのトークンを同時に「認識」できるようにします。結果:

- GPU/TPU での完全な並列トレーニング。
- 長距離の依存関係を効果的に学習します。
- スケーラブル: レイヤーを追加したり、パラメーターを簡単に追加したりできます。

Transformer アーキテクチャは、**Encoder** と **Decoder** という 2 つの主要な部分で構成されており、各部分は多くの同様のレイヤーで積み重ねられています。

## 2. 位置エンコーディング — 位置エンコーディングが必要な理由とサイン/コサインの公式

アテンションには順序の概念がありません。2 つのトークンが交換されても、結果は同じままです。どのトークンがどのトークンの前に来るかをモデルが認識するには、**位置エンコーディング**が必要です。

Vaswani らは、場所を学習する (学習可能) のではなく、固定サイン/コサイン関数を使用します。

$$PE_{(pos, 2i)} = \sin\left(\frac{pos}{10000^{2i/d_{モデル}}}\right)$$

$$PE_{(pos, 2i+1)} = \cos\left(\frac{pos}{10000^{2i/d_{model}}}\right)$$

その中で `pos` はトークンの位置、 `i` は埋め込みの次元であり、 `d_model` 埋め込みサイズです。

**なぜサイン/コサインなのか?**
- 各場所には固有の「署名」があります。
- モデルは相対位置を学習できるため、 `PE[pos+k]` の線形結合です `PE[pos]`。
- トレーニング データよりも長いシーケンス長で動作します (外挿)。

```python
import torch
import math

def positional_encoding(max_len: int, d_model: int) -> torch.Tensor:
    pe = torch.zeros(max_len, d_model)
    position = torch.arange(0, max_len).unsqueeze(1).float()

    div_term = torch.exp(
        torch.arange(0, d_model, 2).float() * (-math.log(10000.0) / d_model)
    )

    pe[:, 0::2] = torch.sin(position * div_term)  # chiều chẵn
    pe[:, 1::2] = torch.cos(position * div_term)  # chiều lẻ

    return pe  # shape: (max_len, d_model)

# Kiểm tra
pe = positional_encoding(100, 512)
print(pe.shape)  # torch.Size([100, 512])
```

## 3. エンコーダー: マルチヘッド アテンション + フィードフォワード + 加算 & ノルム

エンコーダーは入力文字列を受け取り、**コンテキスト表現**の文字列を生成します。各エンコーダ層には以下が含まれます。

### 3.1 マルチヘッドセルフアテンション

```
MultiHead(Q, K, V) = Concat(head_1, ..., head_h) W^O
head_i = Attention(Q W_i^Q, K W_i^K, V W_i^V)
Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) V
```

埋め込みを分割する `h` 「ヘッド」(通常は h=8)、各ヘッドは異なるタイプの関係 (構文、セマンティクス、相互参照など) を学習します。

### 3.2 位置別フィードフォワード ネットワーク (FFN)

```
FFN(x) = max(0, x W_1 + b_1) W_2 + b_2
```

ReLU を中央に持つ 2 つの線形レイヤー。サイズは通常 `d_ff = 4 * d_model`。

### 3.3 追加と正規化 (残留接続 + 層の正規化)

各サブレイヤーの後で、残留接続とレイヤーノルムを使用します。
```
output = LayerNorm(x + Sublayer(x))
```

残留接続は、複数の層を積み重ねるときにグラジエント フローを安定させるのに役立ちます。

```python
import torch.nn as nn

class EncoderLayer(nn.Module):
    def __init__(self, d_model: int, n_heads: int, d_ff: int, dropout: float = 0.1):
        super().__init__()
        self.self_attn = nn.MultiheadAttention(d_model, n_heads, dropout=dropout, batch_first=True)
        self.ff = nn.Sequential(
            nn.Linear(d_model, d_ff),
            nn.ReLU(),
            nn.Dropout(dropout),
            nn.Linear(d_ff, d_model),
        )
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.dropout = nn.Dropout(dropout)

    def forward(self, x, src_key_padding_mask=None):
        # Self-attention + residual
        attn_out, _ = self.self_attn(x, x, x, key_padding_mask=src_key_padding_mask)
        x = self.norm1(x + self.dropout(attn_out))
        # FFN + residual
        ff_out = self.ff(x)
        x = self.norm2(x + self.dropout(ff_out))
        return x
```

## 4. デコーダー: マスクされたセルフアテンション + クロスアテンション + FFN

デコーダーはエンコーダーから出力を受け取り、ターゲット文字列をトークンごとに生成します。各デコーダ レイヤには **3 つの** サブレイヤがあります。

### 4.1 仮面をかぶった自己注意

エンコーダーのセルフアテンションと似ていますが、**因果マスク** — トークンが適切な位置にあります。 `t` ポジションのトークンのみに参加できます `< t`。推論時には将来のトークンがわからないため、これは重要です。

```python
def causal_mask(size: int) -> torch.Tensor:
    # True = position bị mask (không attend được)
    mask = torch.triu(torch.ones(size, size), diagonal=1).bool()
    return mask
```

### 4.2 クロスアテンション (エンコーダ-デコーダ アテンション)

クエリはデコーダから取得され、キーと値はエンコーダ出力から取得されます。これは、ソース シーケンスとターゲット シーケンスの間のブリッジです。

### 4.3 FFN + 加算とノルム

エンコーダーに似ています。

```python
class DecoderLayer(nn.Module):
    def __init__(self, d_model: int, n_heads: int, d_ff: int, dropout: float = 0.1):
        super().__init__()
        self.self_attn  = nn.MultiheadAttention(d_model, n_heads, dropout=dropout, batch_first=True)
        self.cross_attn = nn.MultiheadAttention(d_model, n_heads, dropout=dropout, batch_first=True)
        self.ff = nn.Sequential(
            nn.Linear(d_model, d_ff), nn.ReLU(),
            nn.Dropout(dropout), nn.Linear(d_ff, d_model),
        )
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.norm3 = nn.LayerNorm(d_model)
        self.dropout = nn.Dropout(dropout)

    def forward(self, tgt, memory, tgt_mask=None, memory_key_padding_mask=None):
        # Masked self-attention
        sa_out, _ = self.self_attn(tgt, tgt, tgt, attn_mask=tgt_mask)
        tgt = self.norm1(tgt + self.dropout(sa_out))
        # Cross-attention
        ca_out, _ = self.cross_attn(tgt, memory, memory, key_padding_mask=memory_key_padding_mask)
        tgt = self.norm2(tgt + self.dropout(ca_out))
        # FFN
        tgt = self.norm3(tgt + self.dropout(self.ff(tgt)))
        return tgt
```

## 5. エンコーダのみ vs デコーダのみ vs エンコーダ/デコーダ モデル

|タイプ |例 |用途 |
|---|---|---|
| **エンコーダのみ** |バート、ロベルタ、デベルタ |分類、NER、Q&A 抽出 |
| **デコーダのみ** | GPT、LLaMA、ミストラル |テキスト生成、チャットボット、コード |
| **エンコーダ-デコーダ** | T5、BART、mT5 |翻訳、要約、Q&A生成 |

- **エンコーダーのみ**: シーケンス全体を一度に処理します (双方向)。タスクを理解するのに役立ちます。
- **デコーダのみ**: 自己回帰 (左から右)、生成タスクに適しています。現在、LLM の主要なアーキテクチャです。
- **エンコーダ-デコーダ**: エンコーダはソースを理解し、デコーダはターゲットを生成します。これは seq2seq タスクでは自然です。

## 6. PyTorch を使用した完全なトランスフォーマー (簡略化)

```python
import torch
import torch.nn as nn
import math

class Transformer(nn.Module):
    def __init__(
        self,
        src_vocab_size: int,
        tgt_vocab_size: int,
        d_model: int = 512,
        n_heads: int = 8,
        num_encoder_layers: int = 6,
        num_decoder_layers: int = 6,
        d_ff: int = 2048,
        max_seq_len: int = 512,
        dropout: float = 0.1,
    ):
        super().__init__()
        self.d_model = d_model

        # Embeddings
        self.src_embed = nn.Embedding(src_vocab_size, d_model)
        self.tgt_embed = nn.Embedding(tgt_vocab_size, d_model)

        # Positional Encoding
        pe = self._make_pe(max_seq_len, d_model)
        self.register_buffer("pe", pe)

        # Transformer core
        encoder_layer = nn.TransformerEncoderLayer(d_model, n_heads, d_ff, dropout, batch_first=True)
        decoder_layer = nn.TransformerDecoderLayer(d_model, n_heads, d_ff, dropout, batch_first=True)
        self.encoder = nn.TransformerEncoder(encoder_layer, num_layers=num_encoder_layers)
        self.decoder = nn.TransformerDecoder(decoder_layer, num_layers=num_decoder_layers)

        # Output projection
        self.output_proj = nn.Linear(d_model, tgt_vocab_size)
        self.dropout = nn.Dropout(dropout)

        self._init_weights()

    def _make_pe(self, max_len, d_model):
        pe = torch.zeros(1, max_len, d_model)
        pos = torch.arange(0, max_len).unsqueeze(1).float()
        div = torch.exp(torch.arange(0, d_model, 2).float() * (-math.log(10000.0) / d_model))
        pe[0, :, 0::2] = torch.sin(pos * div)
        pe[0, :, 1::2] = torch.cos(pos * div)
        return pe

    def _init_weights(self):
        for p in self.parameters():
            if p.dim() > 1:
                nn.init.xavier_uniform_(p)

    def encode(self, src, src_key_padding_mask=None):
        x = self.dropout(self.src_embed(src) * math.sqrt(self.d_model))
        x = x + self.pe[:, :x.size(1)]
        return self.encoder(x, src_key_padding_mask=src_key_padding_mask)

    def decode(self, tgt, memory, tgt_mask=None, memory_key_padding_mask=None):
        x = self.dropout(self.tgt_embed(tgt) * math.sqrt(self.d_model))
        x = x + self.pe[:, :x.size(1)]
        return self.decoder(x, memory, tgt_mask=tgt_mask,
                            memory_key_padding_mask=memory_key_padding_mask)

    def forward(self, src, tgt, src_key_padding_mask=None, tgt_mask=None):
        memory = self.encode(src, src_key_padding_mask)
        out = self.decode(tgt, memory, tgt_mask, src_key_padding_mask)
        return self.output_proj(out)  # (batch, tgt_len, tgt_vocab_size)


# Demo
src_vocab, tgt_vocab = 10000, 12000
model = Transformer(src_vocab, tgt_vocab)
print(f"Parameters: {sum(p.numel() for p in model.parameters()):,}")

src = torch.randint(0, src_vocab, (2, 20))   # batch=2, src_len=20
tgt = torch.randint(0, tgt_vocab, (2, 15))   # batch=2, tgt_len=15

tgt_len = tgt.size(1)
tgt_mask = torch.triu(torch.ones(tgt_len, tgt_len), diagonal=1).bool()

logits = model(src, tgt, tgt_mask=tgt_mask)
print(logits.shape)  # (2, 15, 12000)
```

## 7. 機械翻訳問題への応用

機械翻訳のトレーニング プロセス:

```python
import torch.optim as optim
import torch.nn.functional as F

# Teacher forcing: dùng ground-truth token làm input cho decoder
def train_step(model, src, tgt, optimizer, criterion, device):
    model.train()
    src, tgt = src.to(device), tgt.to(device)

    tgt_input  = tgt[:, :-1]   # bỏ token cuối (EOS)
    tgt_output = tgt[:, 1:]    # bỏ token đầu (BOS)

    tgt_len = tgt_input.size(1)
    tgt_mask = torch.triu(torch.ones(tgt_len, tgt_len, device=device), diagonal=1).bool()

    logits = model(src, tgt_input, tgt_mask=tgt_mask)
    # logits: (batch, tgt_len, vocab_size)

    loss = criterion(
        logits.reshape(-1, logits.size(-1)),
        tgt_output.reshape(-1)
    )

    optimizer.zero_grad()
    loss.backward()
    torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
    optimizer.step()

    return loss.item()

# Inference: greedy decoding
@torch.no_grad()
def translate(model, src, bos_id, eos_id, max_len=100, device="cpu"):
    model.eval()
    src = src.to(device)
    memory = model.encode(src)

    tgt_tokens = torch.tensor([[bos_id]], device=device)

    for _ in range(max_len):
        tgt_len = tgt_tokens.size(1)
        tgt_mask = torch.triu(torch.ones(tgt_len, tgt_len, device=device), diagonal=1).bool()

        out = model.decode(tgt_tokens, memory, tgt_mask)
        logits = model.output_proj(out[:, -1])       # lấy logits của token cuối
        next_token = logits.argmax(dim=-1).unsqueeze(0)

        tgt_tokens = torch.cat([tgt_tokens, next_token], dim=1)

        if next_token.item() == eos_id:
            break

    return tgt_tokens.squeeze(0).tolist()
```

**本番環境における一般的な改善点:**
- より良い出力を見つけるための貪欲なデコードの代わりに**ビーム検索**。
- **ラベル平滑化** (epsilon=0.1) を正規化し、過信を回避します。
- **元の論文の式による学習率ウォームアップ**: `lr = d_model^(-0.5) * min(step^(-0.5), step * warmup^(-1.5))`。
- 単語レベルの語彙の代わりに **サブワードトークン化** (BPE/SentencePiece)。

## 概要

Transformer は、現代のすべての NLP の基礎です。覚えておくべき重要なポイント:

1. **セルフ アテンション** により、各トークンが他のすべてのトークンに並行して長距離で注意を払うことができます。
2. **位置エンコーディング** は、反復のないアーキテクチャのための位置情報を追加します。
3. **Encoder** は理解 (双方向) に使用され、**Decoder** は生成 (因果関係) に使用されます。
4. **Encoder-Decoder** は、機械翻訳や要約などの seq2seq の自然なアーキテクチャです。
5. Add & Norm (残差 + LayerNorm) は、深いネットワークを安定してトレーニングするのに役立ちます。

次の記事では、**BERT** について詳しく説明します。これは、双方向の事前トレーニングを備えたエンコーダーのみのアーキテクチャを適用して、多くの NLP タスクで最先端の機能を実現します。
