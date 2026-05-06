---
id: 019c9619-bb06-7006-c006-bb0600000006
title: 第 6 課：Transformer 架構 — 編碼器、解碼器、位置編碼
slug: bai-6-kien-truc-transformer
description: >-
  從論文「Attention is All You Need」（2017）中探索 Transformer
  架構：位置編碼、具有多頭注意力的編碼器、具有屏蔽自註意力和交叉注意力的解碼器，以及應用於機器翻譯問題的完整 PyTorch 代碼。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：Transformer 架構
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 人工智慧和法學碩士：從基礎到高級
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：Transformer 架構 — 編碼器、</tspan>
      <tspan x="60" dy="42">解碼器、位置編碼</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧和法學碩士：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：Transformer 架構</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

# 第 6 課：Transformer 架構 — 編碼器、解碼器、位置編碼

## 1. 論文「Attention is All You Need」－為何具有革命性？

2017 年，Ashish Vaswani 和 Google Brain 的同事發表了論文**“Attention is All You Need”**——人工智慧歷史上最有影響力的論文之一。先前，序列處理模型（NLP、機器翻譯）主要依賴RNN和LSTM，有兩個基本限制：

- **順序處理**：RNN 必須依序處理 token，無法並行化－訓練非常慢。
- **梯度消失**：長依賴關係被“遺忘”，因為梯度會傳播多個時間步長。

Transformer 透過**完全消除重複**來解決這兩個問題，而不是使用**自我注意**，以便每個令牌可以同時「看到」所有其他令牌。結果：

- GPU/TPU 上的完全平行訓練。
- 有效學習遠距依賴關係。
- 可擴充：輕鬆新增層、新增參數。

Transformer 架構由兩個主要部分組成：**Encoder** 和 **Decoder**，每個部分都堆疊了許多相似的層。

## 2. 位置編碼－為什麼需要它以及正弦/餘弦公式

注意力沒有順序的概念－如果交換兩個令牌，結果保持不變。為了讓模型知道哪個標記在哪個標記之前，我們需要**位置編碼**。

Vaswani 等人沒有學習位置（可學習）。使用固定的正弦/餘弦函數：

$$PE_{(pos, 2i)} = \sin\left(\frac{pos}{10000^{2i/d_{model}}}\right)$$

$$PE_{(pos, 2i+1)} = \cos\left(\frac{pos}{10000^{2i/d_{模型}}}\right)$$

在其中 `pos` 是代幣位置， `i` 是嵌入的維度， `d_model` 是嵌入大小。

**為什麼是正弦/餘弦？ **
- 每個地點都有一個獨特的「簽名」。
- 此模型可以學習相對位置，因為 `PE[pos+k]` 是線性組合 `PE[pos]`。
- 適用於序列長度大於訓練資料的情況（外推法）。

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

## 3.編碼器：多頭注意力+前饋+加法&歸一化

編碼器取得輸入字串並產生**上下文表示**的字串。每個編碼器層包括：

### 3.1 多頭自註意力

```
MultiHead(Q, K, V) = Concat(head_1, ..., head_h) W^O
head_i = Attention(Q W_i^Q, K W_i^K, V W_i^V)
Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) V
```

將嵌入分為 `h` 「頭」（通常 h=8），每個頭學習不同類型的關係（文法、語意、共指…）。

### 3.2 位置前饋網路（FFN）

```
FFN(x) = max(0, x W_1 + b_1) W_2 + b_2
```

兩個線性層，中間有 ReLU。尺寸通常為 `d_ff = 4 * d_model`。

### 3.3 Add & Norm（剩餘連接+層歸一化）

在每個子層之後，使用殘差連接和層範數：
```
output = LayerNorm(x + Sublayer(x))
```

殘餘連接有助於多層堆疊時梯度流的穩定。

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

## 4.解碼器：Masked Self-Attention + Cross-Attention + FFN

解碼器接收來自編碼器的輸出並逐一令牌產生目標字串。每個解碼器層都有**三個**子層：

### 4.1 蒙面自註意力

類似於編碼器的 Self-Attention，但具有 **因果掩碼** - 令牌就位 `t` 您只能參加該職位的代幣 `< t`。這很重要，因為在推理時，我們不知道未來的令牌。

```python
def causal_mask(size: int) -> torch.Tensor:
    # True = position bị mask (không attend được)
    mask = torch.triu(torch.ones(size, size), diagonal=1).bool()
    return mask
```

### 4.2 交叉注意力（編碼器-解碼器注意力）

Query 來自 Decoder，Key 和 Value 來自 Encoder 輸出。這是源序列和目標序列之間的橋樑。

### 4.3 FFN + 新增與範數

與編碼器類似。

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

## 5. 僅編碼器模型、僅解碼器模型、編碼器-解碼器模型

|類型 |範例|用於 |
|---|---|---|
| **僅編碼器** |伯特、羅伯塔、德伯特 |分類、NER、問答提取 |
| **僅解碼器** | GPT、LLaMA、米斯特拉爾 |文字產生、聊天機器人、代碼 |
| **編碼器-解碼器** | T5、BART、mT5 |翻譯、摘要、問答產生 |

- **僅編碼器**：一次處理整個序列（雙向），有利於理解任務。
- **僅解碼器**：自回歸（從左到右），適合生成任務。目前是法學碩士的主導架構。
- **編碼器-解碼器**：編碼器理解來源，解碼器產生目標－對於 seq2seq 任務來說很自然。

## 6. 使用 PyTorch 的完整 Transformer（簡化）

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

## 7. 機器翻譯問題的應用

機器翻譯訓練流程：

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

**生產中的常見改進：**
- **束搜尋**而不是貪婪解碼以找到更好的輸出。
- **標籤平滑**（epsilon=0.1）以規範化並避免過度自信。
- **學習率預熱** 根據原論文中的公式： `lr = d_model^(-0.5) * min(step^(-0.5), step * warmup^(-1.5))`。
- **子字標記化**（BPE/SentencePiece）而非單字級字彙。

## 總結

Transformer 是所有現代 NLP 的基礎。要記住的重點：

1. **自我注意**允許每個令牌專注於其他每個令牌－並行和遠端。
2. **位置編碼**為無重複架構新增位置資訊。
3. **Encoder** 用於理解（雙向），**Decoder** 用於產生（因果）。
4. **編碼器-解碼器**是seq2seq的自然架構，例如機器翻譯、摘要。
5. Add & Norm（殘差+LayerNorm）有助於穩定訓練深度網路。

下一篇文章將深入研究 **BERT** — 應用僅編碼器架構和雙向預訓練，以在許多 NLP 任務上實現最先進的技術。
