---
id: 019d8b30-bb03-7003-c003-ee0300000003
title: 'Lesson 3: Tokenization Deep Dive — From Word to BPE, WordPiece, SentencePiece'
slug: bai-3-tokenization-deep-dive
description: >-
  Compare tokenization methods: whitespace, BPE, WordPiece, Unigram,
  SentencePiece. Vocabulary size and trade-offs. Tokenizer training from
  scratch. Hugging Face Tokenizers library. Vietnamese and specific tokenization
  challenges.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'Part 1: NLP Foundations — Understanding Language Through a Computer Lens'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP from Basics to Advanced: Mastering Natural Language Processing'
  slug: nlp-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1009" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1009)"/>

  <!-- Decorations -->
  <g>
    <circle cx="892" cy="226" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="684" cy="118" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="976" cy="270" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="768" cy="162" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="54" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="66" x2="1100" y2="146" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="96" x2="1050" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="951.507041555162,95.5 951.507041555162,136.5 916,157 880.492958444838,136.5 880.492958444838,95.50000000000001 916,75" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI & ML — Lesson 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: Tokenization Deep Dive — From Word</tspan>
      <tspan x="60" dy="42">to BPE, WordPiece, SentencePiece</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP from Basics to Advanced: Mastering Natural Language Processing</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: NLP Foundations — Understanding Language Through a Computer Lens</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

**Tokenization** is the first and most important step in every NLP pipeline. It determines how the model "looks" at the text — and directly affects performance.

> 💡 All modern LLMs (GPT-4, Gemini, Claude, LLaMA) use **subword tokenization** — and this article will explain why.

---

## 1. Why is Word-level Tokenization not enough?

### OOV (Out-of-Vocabulary) Problem

```python
vocab = {"hello", "world", "natural", "language"}

# Gặp từ mới → OOV!
text = "unhappiness"  # Không có trong vocab → [UNK]

# Word-level vocab cần KHỔNG LỒ
# Tiếng Anh: ~170,000 từ
# + Tên riêng, thuật ngữ, viết tắt → 500,000+
# + Đa ngôn ngữ → Hàng triệu từ
```

### 3 main problems

| Problem | Word-level | Subword | Character-level |
|--------|-----------|---------|-----------------|
| Vocab size | Huge (500K+) | Moderate (32K–128K) | Very small (256) |
| OOV | Many [UNK] | Rarely | Never |
| Semantic Meaning | Good | Good | Poor (each character) |
| Sequence length | Short | Moderate | Very long |

---

## 2. Byte-Pair Encoding (BPE)

### 2.1 Algorithm

```
Bước 1: Bắt đầu với tất cả characters làm vocab
         Vocab: {a, b, c, ..., z, _}

Bước 2: Đếm tần suất các cặp adjacent tokens
         "l o w" → (l,o): 5, (o,w): 5
         "l o w e r" → (l,o): 5, (o,w): 5, (w,e): 2, (e,r): 2
         "n e w e r" → (n,e): 1, (e,w): 1, (w,e): 2, (e,r): 2

Bước 3: Merge cặp có tần suất cao nhất
         (l,o) → "lo"     Vocab: {a, b, ..., z, _, lo}

Bước 4: Lặp lại bước 2-3 cho đến khi đạt vocab size mong muốn
         "lo w" → (lo,w) → "low"
         Vocab: {a, b, ..., z, _, lo, low, ...}
```

### 2.2 BPE in practice

```python
from tokenizers import Tokenizer
from tokenizers.models import BPE
from tokenizers.trainers import BpeTrainer
from tokenizers.pre_tokenizers import Whitespace

# 1. Khởi tạo BPE tokenizer
tokenizer = Tokenizer(BPE(unk_token="[UNK]"))
tokenizer.pre_tokenizer = Whitespace()

# 2. Training
trainer = BpeTrainer(
    vocab_size=30000,
    special_tokens=["[UNK]", "[PAD]", "[CLS]", "[SEP]", "[MASK]"],
    min_frequency=2,
)
tokenizer.train(files=["corpus.txt"], trainer=trainer)

# 3. Tokenize
output = tokenizer.encode("Xử lý ngôn ngữ tự nhiên rất thú vị")
print(output.tokens)
# ['X', 'ử', 'lý', 'ngôn', 'ngữ', 'tự', 'nhiên', 'rất', 'thú', 'vị']
```

**Used by:** GPT-2, GPT-3, GPT-4, LLaMA, RoBERTa

---

## 3. WordPiece

WordPiece is similar to BPE but uses **likelihood** instead of frequency:

```
BPE:       Merge cặp có tần suất CAO nhất
WordPiece: Merge cặp tối đa hóa LIKELIHOOD của training data
```

```python
from transformers import BertTokenizer

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

text = "unhappiness is unbelievable"
tokens = tokenizer.tokenize(text)
print(tokens)
# ['un', '##happiness', 'is', 'un', '##believable']
# '##' = tiếp nối từ trước (không phải đầu từ)
```

**Used by:** BERT, DistilBERT, PhoBERT

---

## 4. SentencePiece & Unigram

### SentencePiece

Treat text as **raw bytes** — no space pre-tokenization required:

```python
import sentencepiece as spm

# Train
spm.SentencePieceTrainer.Train(
    input='corpus.txt',
    model_prefix='my_model',
    vocab_size=32000,
    model_type='unigram',  # hoặc 'bpe'
)

# Load & use
sp = spm.SentencePieceProcessor()
sp.Load('my_model.model')

text = "Xử lý ngôn ngữ tự nhiên"
tokens = sp.EncodeAsPieces(text)
print(tokens)
# ['▁Xử', '▁lý', '▁ngôn', '▁ngữ', '▁tự', '▁nhiên']
# '▁' = đầu từ mới
```

**Used by:** T5, ALBERT, XLNet, LLaMA (combined BPE)

---

## 5. Comparative Summary

| Method | How to merge | Pre-tokenize? | Symbol | Models |
|-------------|-----------|--------------|-------|--------|
| BPE | Highest Frequency | Need (whitespace) | — | GPT, LLaMA, RoBERTa |
| WordPiece | Highest Likelihood | Need (whitespace) | `##` (continuation) | BERT, PhoBERT |
| Unigram | Type of token has little impact | No need | `▁` (word start) | T5, ALBERT |
| SentencePiece | BPE or Unigram | No need | `▁` (word start) | T5, LLaMA |

---

## 6. Hugging Face Tokenizers — Practice

```python
from transformers import AutoTokenizer

# So sánh tokenization giữa các model
models = [
    "bert-base-uncased",
    "gpt2",
    "google/flan-t5-base",
]

text = "Tokenization is surprisingly important for NLP"

for model_name in models:
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    tokens = tokenizer.tokenize(text)
    ids = tokenizer.encode(text)
    print(f"\n{model_name}:")
    print(f"  Tokens ({len(tokens)}): {tokens}")
    print(f"  IDs: {ids}")
```

---

## 7. Tokenization for Vietnamese

```python
from transformers import AutoTokenizer

# PhoBERT tokenizer (WordPiece, có word segmentation)
phobert_tok = AutoTokenizer.from_pretrained("vinai/phobert-base-v2")
text = "Xử lý ngôn ngữ tự nhiên rất thú vị"
print(phobert_tok.tokenize(text))

# Gemma/LLaMA tokenizer (BPE, byte-level)
gemma_tok = AutoTokenizer.from_pretrained("google/gemma-2b")
print(gemma_tok.tokenize(text))
# Tiếng Việt thường bị tách thành nhiều subword hơn tiếng Anh
# → Sequence dài hơn → Tốn cost inference hơn!
```

> 🇻🇳 **Insight:** GPT-4 / Gemini's tokenizer splits Vietnamese into **more tokens** than English (~1.5-2x), resulting in higher API costs.

---

## Summary

| Key points | Details |
|-----------|---------|
| Word-level | Vocab is too big, many OOV → not feasible |
| BPE | Merge by frequency, most common (GPT, LLaMA) |
| WordPiece | Merge by likelihood, use `##` (BERT) |
| SentencePiece | No need for pre-tokenization, language-agnostic |
| Vietnamese | English Tokenizer splits into more tokens → pay attention to cost |

---

## Next article

**Lesson 4: Bag of Words, TF-IDF & N-grams** — Classic text representation method but still effective in many problems.
