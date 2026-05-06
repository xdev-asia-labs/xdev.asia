---
id: 019c9619-bb06-7006-c006-bb0600000006
title: 'Lesson 6: Transformer architecture — Encoder, Decoder, Positional Encoding'
slug: bai-6-kien-truc-transformer
description: >-
  Explore the Transformer architecture from the paper "Attention is All You
  Need" (2017): Positional Encoding, Encoder with Multi-head Attention, Decoder
  with Masked Self-Attention and Cross-Attention, and complete PyTorch code
  applied to the machine translation problem.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 5
section_title: 'Part 2: Transformer architecture'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI & LLM: From Basics to Advanced'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI & ML — Lesson 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 6: Transformer architecture — Encoder,</tspan>
      <tspan x="60" dy="42">Decoder, Positional Encoding</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI & LLM: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Transformer architecture</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# Lesson 6: Transformer architecture — Encoder, Decoder, Positional Encoding

## 1. Paper "Attention is All You Need" — Why Revolutionary?

In 2017, Ashish Vaswani and colleagues at Google Brain published the paper **"Attention is All You Need"** — one of the most influential papers in AI history. Previously, sequence processing models (NLP, machine translation) mainly relied on RNN and LSTM, with two basic limitations:

- **Sequential processing**: RNN must process tokens in order, cannot be parallelized — training is very slow.
- **Vanishing gradient**: Long dependencies are "forgotten" because the gradient propagates over many time steps.

Transformer solves both problems by **eliminating recurrence completely**, instead using **Self-Attention** so that each token can "see" all other tokens at the same time. Results:

- Fully parallel training on GPU/TPU.
- Long-range dependencies are learned effectively.
- Scalable: add layers, add parameters easily.

The Transformer architecture consists of two main parts: **Encoder** and **Decoder**, each part is stacked with many similar layers.

## 2. Positional Encoding — Why is it Necessary and the Sine/Cosine Formula

Attention has no concept of order — if two tokens are swapped, the result remains the same. In order for the model to know which token comes before which token, we need **Positional Encoding**.

Instead of learning the location (learnable), Vaswani et al. Use a fixed sine/cosine function:

$$PE_{(pos, 2i)} = \sin\left(\frac{pos}{10000^{2i/d_{model}}}\right)$$

$$PE_{(pos, 2i+1)} = \cos\left(\frac{pos}{10000^{2i/d_{model}}}\right)$$

In it `pos` is the token position, `i` is the dimension in embedding, `d_model` is the embedding size.

**Why sine/cosine?**
- Each location has a unique "signature".
- The model can learn relative position because `PE[pos+k]` is linear combination of `PE[pos]`.
- Works with sequence length larger than training data (extrapolation).

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

## 3. Encoder: Multi-head Attention + Feed-Forward + Add & Norm

The encoder takes the input string and produces a string of **context representations**. Each Encoder layer includes:

### 3.1 Multi-head Self-Attention

```
MultiHead(Q, K, V) = Concat(head_1, ..., head_h) W^O
head_i = Attention(Q W_i^Q, K W_i^K, V W_i^V)
Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) V
```

Divide embedding into `h` "heads" (usually h=8), each head learns a different type of relationship (syntax, semantics, coreference...).

### 3.2 Position-wise Feed-Forward Network (FFN)

```
FFN(x) = max(0, x W_1 + b_1) W_2 + b_2
```

Two linear layers with ReLU in the middle. Size is usually `d_ff = 4 * d_model`.

### 3.3 Add & Norm (Residual Connection + Layer Normalization)

After each sub-layer, use residual connection and layer norm:
```
output = LayerNorm(x + Sublayer(x))
```

Residual connection helps the gradient flow to be stable when stacking multiple layers.

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

## 4. Decoder: Masked Self-Attention + Cross-Attention + FFN

The Decoder receives output from the Encoder and generates a target string token-by-token. Each Decoder layer has **three** sub-layers:

### 4.1 Masked Self-Attention

Like Encoder's Self-Attention, but with **causal mask** — token in position `t` You can only attend the tokens in the position `< t`. This is important because when inference, we do not know the future token.

```python
def causal_mask(size: int) -> torch.Tensor:
    # True = position bị mask (không attend được)
    mask = torch.triu(torch.ones(size, size), diagonal=1).bool()
    return mask
```

### 4.2 Cross-Attention (Encoder-Decoder Attention)

Query comes from Decoder, Key and Value come from Encoder output. This is the bridge between the source sequence and target sequence.

### 4.3 FFN + Add & Norm

Similar to Encoder.

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

## 5. Encoder-only vs Decoder-only vs Encoder-Decoder Models

| Type | Example | Used for |
|---|---|---|
| **Encoder-only** | BERT, RoBERTa, DeBERTa | Classification, NER, Q&A extractive |
| **Decoder-only** | GPT, LLaMA, Mistral | Text generation, chatbot, code |
| **Encoder-Decoder** | T5, BART, mT5 | Translation, summarization, Q&A generative |

- **Encoder-only**: Process the entire sequence at once (bidirectional), good for understanding tasks.
- **Decoder-only**: Autoregressive (left to right), good for generation tasks. Currently the dominant architecture for LLMs.
- **Encoder-Decoder**: Encoder understands source, Decoder generates target — natural for seq2seq tasks.

## 6. Full Transformer with PyTorch (Simplified)

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

## 7. Application to Machine Translation Problem

Training process for machine translation:

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

**Common improvements in production:**
- **Beam search** instead of greedy decoding to find better output.
- **Label smoothing** (epsilon=0.1) to regularize and avoid overconfidence.
- **Learning rate warmup** according to the formula in the original paper: `lr = d_model^(-0.5) * min(step^(-0.5), step * warmup^(-1.5))`.
- **Subword tokenization** (BPE/SentencePiece) instead of word-level vocab.

## Summary

Transformer is the foundation of all modern NLP. Key points to remember:

1. **Self-Attention** allows each token to attend to every other token — parallel and long-range.
2. **Positional Encoding** adds positional information for recurrence-free architecture.
3. **Encoder** is used for understanding (bidirectional), **Decoder** is used for generation (causal).
4. **Encoder-Decoder** is the natural architecture for seq2seq such as machine translation, summarization.
5. Add & Norm (residual + LayerNorm) helps train deep networks stably.

The next article will delve into **BERT** — applying Encoder-only architecture with bidirectional pre-training to achieve state-of-the-art on many NLP tasks.
