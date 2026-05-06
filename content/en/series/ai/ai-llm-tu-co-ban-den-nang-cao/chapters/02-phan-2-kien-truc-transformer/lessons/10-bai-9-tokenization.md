---
id: 019c9619-bb09-7009-c009-bb0900000009
title: 'Lesson 9: Tokenization — BPE, WordPiece, SentencePiece'
slug: bai-9-tokenization
description: >-
  Understand why tokenization is the foundation of every LLM. Explore OpenAI's
  BPE, WordPiece, Unigram/SentencePiece and Tiktoken algorithms. Solve the
  Vietnamese tokenization problem and learn how to count tokens to estimate API
  costs.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 8
section_title: 'Part 2: Transformer architecture'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI & LLM: From Basics to Advanced'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1139" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1139)"/>

  <!-- Decorations -->
  <g>
    <circle cx="682" cy="36" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="764" cy="38" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="846" cy="40" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="928" cy="42" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="1010" cy="44" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="236" x2="1100" y2="316" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="266" x2="1050" y2="336" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1012.8467875173176,170.5 1012.8467875173176,201.5 986,217 959.1532124826824,201.5 959.1532124826824,170.5 986,155" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI & ML — Lesson 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 9: Tokenization — BPE, WordPiece,</tspan>
      <tspan x="60" dy="42">SentencePiece</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI & LLM: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Transformer architecture</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# Lesson 9: Tokenization — BPE, WordPiece, SentencePiece

## 1. Why Not Use Character-level or Word-level?

Before LLMs, there were two popular tokenization approaches, each with serious trade-offs.

### Character-level Tokenization

```python
text = "Hello, world!"
tokens = list(text)
# ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!']
```

**Advantage**: Small vocabulary (~100-300 characters), no OOV (out-of-vocabulary).

**Disadvantages**:
- Sequence is **4-5 times** longer than word-level → O(n²) attention is expensive.
- Harder to learn: Model must learn "spelling" from scratch instead of working with meaningful units.
- Ineffective for reasoning and factual knowledge.

### Word-level Tokenization

```python
text = "The cats are running quickly"
tokens = text.split()
# ['The', 'cats', 'are', 'running', 'quickly']
```

**Advantages**: Tokens have clear meanings, short sequences.

**Disadvantages**:
- Huge Vocab (English has 170,000+ words).
- **OOV problem**: "cats" and "cat" are two different tokens; "COVID-19" is not in the vocab.
- Inflections and morphology: "run", "runs", "running", "ran" → 4 separate tokens.
- Memory: Embedding matrix is ​​absurdly large.

### Subword Tokenization — The Best Solution

Goal: Vocab small enough (~30K-100K), no OOV, reasonable sequence length.

**Principles**:
- Common word → a single token: "the" → `[the]`
- Rare word → split into subwords: "unaffable" → `[un, ##aff, ##able]`
- Worst case: character-by-character, never OOV.

## 2. Byte Pair Encoding (BPE) — Step-by-step Algorithm

The original BPE (Sennrich et al., 2016) starts from character-level and merges gradually:

### Algorithm:

```
1. Khởi tạo vocab với tất cả ký tự trong corpus
2. Lặp k lần (k = số merges mong muốn):
   a. Đếm tần suất tất cả cặp token liền kề
   b. Merge cặp phổ biến nhất thành token mới
   c. Cập nhật corpus với merge mới
3. Vocab cuối = initial chars + k merged tokens
```

### Specific examples:

```python
# Corpus ban đầu (đã pre-tokenized bằng whitespace)
# </w> đánh dấu cuối từ
corpus = {
    "l o w </w>": 5,
    "l o w e r </w>": 2,
    "n e w e s t </w>": 6,
    "w i d e s t </w>": 3,
}

# Bước 1: Vocab = {'l','o','w','</w>','e','r','n','s','t','i','d'}
# Đếm bigrams:
# ('e', 's'): 6+3 = 9  ← MAX
# ('s', 't'): 6+3 = 9  ← tie (lấy cái đầu)
# ('l', 'o'): 5+2 = 7
# ...

# Merge ('e', 's') → 'es'
corpus_after_1 = {
    "l o w </w>": 5,
    "l o w e r </w>": 2,
    "n e w es t </w>": 6,   # 'e s' → 'es'
    "w i d es t </w>": 3,   # 'e s' → 'es'
}

# Bước 2: đếm lại, ('es', 't') = 9 ← MAX
# Merge ('es', 't') → 'est'
# ...tiếp tục cho đến khi đủ k merges
```

**Implementation BPE from scratch:**

```python
from collections import Counter, defaultdict
import re
from typing import Dict, List, Tuple

def get_vocab(corpus: List[str]) -> Dict[str, int]:
    """Pre-tokenize và thêm </w> marker."""
    vocab: Dict[str, int] = defaultdict(int)
    for word in corpus:
        # Thêm space giữa các chars và </w> ở cuối
        vocab[" ".join(list(word)) + " </w>"] += 1
    return dict(vocab)

def get_bigram_stats(vocab: Dict[str, int]) -> Dict[Tuple, int]:
    """Đếm tần suất tất cả cặp token liền kề."""
    pairs: Dict[Tuple, int] = defaultdict(int)
    for word, freq in vocab.items():
        symbols = word.split()
        for i in range(len(symbols) - 1):
            pairs[(symbols[i], symbols[i + 1])] += freq
    return dict(pairs)

def merge_vocab(pair: Tuple[str, str], vocab: Dict[str, int]) -> Dict[str, int]:
    """Merge một cặp trong toàn bộ vocab."""
    new_vocab: Dict[str, int] = {}
    bigram = re.escape(" ".join(pair))
    pattern = re.compile(r"(?<!\S)" + bigram + r"(?!\S)")
    for word, freq in vocab.items():
        new_word = pattern.sub("".join(pair), word)
        new_vocab[new_word] = freq
    return new_vocab

def train_bpe(corpus: List[str], num_merges: int = 20) -> List[Tuple]:
    """Train BPE và return list of merges."""
    vocab = get_vocab(corpus)
    merges = []

    for i in range(num_merges):
        pairs = get_bigram_stats(vocab)
        if not pairs:
            break
        best_pair = max(pairs, key=pairs.get)
        vocab = merge_vocab(best_pair, vocab)
        merges.append(best_pair)
        print(f"Merge {i+1:3d}: {best_pair} → {''.join(best_pair)!r} (freq={pairs[best_pair]})")

    return merges

# Thử nghiệm
corpus = ["low"] * 5 + ["lower"] * 2 + ["newest"] * 6 + ["widest"] * 3
merges = train_bpe(corpus, num_merges=10)
```

**GPT-2 BPE**: Operates on **bytes** (256 byte values) instead of characters → never OOV with any Unicode text.

## 3. WordPiece (BERT) — Same as BPE But Different from Criterion

WordPiece (Schuster & Nakamura, 2012; used in BERT) also merges subwords but uses a different criterion.

**Criterion of BPE**: Merge the pair with the highest frequency.

**Criterion of WordPiece**: Merge pairs maximize **likelihood** of corpus:
$$\text{score}(u, v) = \frac{\text{freq}(uv)}{\text{freq}(u) \times \text{freq}(v)}$$

This favors pairs that are **less common individually** but **often together** — capturing more meaningful linguistic units.

**Tokenization inference** (different from training):
- BPE: use merge rules in order.
- WordPiece: greedy longest-match-first subword from left to right.

```python
# WordPiece notation: ## prefix cho continuation subwords
tokenizer_bert = "bert-base-uncased"
# "unaffable" → ["un", "##aff", "##able"]
# "tokenization" → ["token", "##ization"]
# "Playing123" → ["playing", "##12", "##3"]  (lowercase + split)
```

## 4. Unigram Language Model (SentencePiece)

**SentencePiece** (Kudo & Richardson, 2018) — used in T5, mT5, XLNet, and many multilingual models — has two differences:

### No need for pre-tokenization

BPE and WordPiece assume text has been split with whitespace. SentencePiece trains directly on raw text, no need for pre-tokenization. This is extremely important for:
- Japanese, Chinese (no word boundaries).
- Vietnamese (syllable-based, spaces ≠ word boundaries).

### Unigram Language Model

Instead of bottom-up merging (BPE), Unigram uses **top-down pruning**:
1. Start with large vocabs (all possible substrings).
2. Iteration: remove tokens that, if removed, reduce likelihood the least.
3. Stop when the vocab is small enough.

**Probabilistic tokenization**: Unigram model allows many different tokenizations with probabilities — useful for regularization when training.

```python
# pip install sentencepiece
import sentencepiece as spm

# Train
spm.SentencePieceTrainer.train(
    input="corpus.txt",
    model_prefix="mymodel",
    vocab_size=8000,
    model_type="unigram",      # hoặc "bpe"
    character_coverage=0.9995, # bao phủ bao nhiêu % characters
)

# Load và dùng
sp = spm.SentencePieceProcessor()
sp.load("mymodel.model")

text = "Xin chào, đây là ví dụ tokenization tiếng Việt"
tokens = sp.encode(text, out_type=str)
ids    = sp.encode(text, out_type=int)

print(tokens)  # ['▁Xin', '▁chào', ',', '▁đây', '▁là', '▁ví', '▁dụ', ...]
print(ids)     # [123, 456, ...]

# Decode
print(sp.decode(ids))  # Xin chào, đây là ví dụ tokenization tiếng Việt
```

*`▁` (U+2581) is the symbol for space/word-beginning in SentencePiece.*

## 5. Tiktoken (OpenAI) — cl100k_base and o200k_base

**Tiktoken** is OpenAI's fast BPE tokenizer, written in Rust with Python bindings.

| Encoding | Used for | Vocab size |
|---|---|---|
| `r50k_base` | GPT-2, GPT-3 (davinci) | 50,257 |
| `p50k_base` | Codex (code-davinci) | 50,281 |
| `cl100k_base` | GPT-3.5-turbo, GPT-4 | 100,277 |
| `o200k_base` | GPT-4o, o1, o3 | 200,019 |

**Why `cl100k_base` better `r50k_base`?**
- Vocab 2x larger → sequence length ~20% shorter.
- Many common phrases are encoded into 1 token.
- Better for code, multilingual text, numbers.

```python
# pip install tiktoken
import tiktoken

# Load encoders
enc_gpt4  = tiktoken.get_encoding("cl100k_base")
enc_gpt4o = tiktoken.get_encoding("o200k_base")

text = "Hello, world! Xin chào thế giới. 你好世界."

tokens_4  = enc_gpt4.encode(text)
tokens_4o = enc_gpt4o.encode(text)

print(f"cl100k_base: {len(tokens_4)} tokens  → {tokens_4}")
print(f"o200k_base:  {len(tokens_4o)} tokens → {tokens_4o}")
print(f"Decoded: {enc_gpt4.decode(tokens_4)}")

# Decode từng token riêng lẻ
for token_id in tokens_4:
    token_bytes = enc_gpt4.decode_single_token_bytes(token_id)
    print(f"  {token_id:6d} → {token_bytes}")
```

## 6. Tokenization and Vietnamese — Problems and Solutions

Vietnamese has special characteristics:
- **Syllable-based**: Each syllable is usually a morpheme — "student" (2 syllables, 1 meaning: "student").
- **Spaces do not separate words**: "student" is a two-syllable word, but "study" and "student" standing alone also have different meanings.
- **Diacritical marks**: "ah", "ah", "ah", "ah", "ã", "à" — 6 different characters.
- **Many Unicode characters**: Each accented character takes up many bytes → costs more tokens than English.

### Specific problem:

```python
import tiktoken
enc = tiktoken.get_encoding("cl100k_base")

# So sánh token efficiency
texts = {
    "English": "The student is studying artificial intelligence at university.",
    "Vietnamese": "Sinh viên đang học trí tuệ nhân tạo tại trường đại học.",
    "Chinese": "学生正在大学学习人工智能。",
}

for lang, text in texts.items():
    tokens = enc.encode(text)
    chars = len(text)
    print(f"{lang:12s}: {chars:3d} chars → {len(tokens):3d} tokens "
          f"(ratio: {chars/len(tokens):.1f} chars/token)")

# English:     61 chars →  11 tokens (ratio: 5.5 chars/token)
# Vietnamese:  59 chars →  25 tokens (ratio: 2.4 chars/token)
# Chinese:     15 chars →  17 tokens (ratio: 0.9 chars/token)
```

Vietnamese costs ~2-3x tokens compared to English for the same amount of information → **more expensive when using API** and **context window is "waste"**.

### Solution:

**1. Use models train more in Vietnamese:**
- **Vistral-7B**: LLaMA-based, fine-tuned on Vietnamese data.
- **PhoGPT**: VinAI Research, train on ~41GB Vietnamese text.
- **SeaLLM**: Multilingual SEA languages ​​including Vietnamese.

**2. Word segmentation before tokenization:**
```python
# pip install underthesea
from underthesea import word_tokenize

text = "Sinh viên đang học trí tuệ nhân tạo tại trường đại học."
words = word_tokenize(text, format="text")
# "Sinh_viên đang học trí_tuệ_nhân_tạo tại trường_đại_học ."

# Sau đó tokenize → ít tokens hơn vì "trí_tuệ_nhân_tạo" là 1 unit
```

**3. Train tokenizer specifically for Vietnamese:**
```python
from tokenizers import Tokenizer
from tokenizers.models import BPE
from tokenizers.trainers import BpeTrainer
from tokenizers.pre_tokenizers import Whitespace

tokenizer = Tokenizer(BPE(unk_token="[UNK]"))
tokenizer.pre_tokenizer = Whitespace()

trainer = BpeTrainer(
    vocab_size=32000,
    special_tokens=["[UNK]", "[CLS]", "[SEP]", "[PAD]", "[MASK]"],
)

# Train trên Vietnamese corpus
tokenizer.train(files=["vietnamese_corpus.txt"], trainer=trainer)
tokenizer.save("vi_tokenizer.json")
```

## 7. Token Counting and Cost Estimation

All LLM APIs charge according to the number of tokens. Understanding how to count tokens helps optimize costs.

```python
import tiktoken
from typing import List, Dict

def count_tokens_openai(
    messages: List[Dict[str, str]],
    model: str = "gpt-4o",
) -> Dict[str, int]:
    """
    Đếm tokens cho OpenAI Chat Completions.
    Mỗi message có overhead 4 tokens (role + formatting).
    """
    if "gpt-4o" in model or "gpt-4-turbo" in model:
        encoding = tiktoken.get_encoding("o200k_base")
    else:
        encoding = tiktoken.get_encoding("cl100k_base")

    tokens_per_message = 3   # overhead mỗi message
    tokens_per_name = 1      # nếu có "name" field

    total = 3  # overhead cho entire request (reply primed with <|start|>assistant<|message|>)

    for msg in messages:
        total += tokens_per_message
        for key, value in msg.items():
            total += len(encoding.encode(value))
            if key == "name":
                total += tokens_per_name

    return {"input_tokens": total}


def estimate_cost(
    input_tokens: int,
    output_tokens: int,
    model: str = "gpt-4o",
) -> Dict[str, float]:
    """Chi phí ước tính theo USD (giá tháng 3/2025)."""
    pricing = {
        "gpt-4o":            {"input": 2.50,  "output": 10.00},  # per 1M tokens
        "gpt-4o-mini":       {"input": 0.15,  "output": 0.60},
        "gpt-4-turbo":       {"input": 10.00, "output": 30.00},
        "gpt-3.5-turbo":     {"input": 0.50,  "output": 1.50},
        "claude-3-5-sonnet": {"input": 3.00,  "output": 15.00},
        "claude-3-haiku":    {"input": 0.25,  "output": 1.25},
    }

    if model not in pricing:
        raise ValueError(f"Unknown model: {model}")

    p = pricing[model]
    input_cost  = (input_tokens  / 1_000_000) * p["input"]
    output_cost = (output_tokens / 1_000_000) * p["output"]

    return {
        "input_cost_usd":  round(input_cost, 6),
        "output_cost_usd": round(output_cost, 6),
        "total_cost_usd":  round(input_cost + output_cost, 6),
    }


# Ví dụ
messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Explain transformer architecture in detail."},
]

token_info = count_tokens_openai(messages, model="gpt-4o")
print(f"Input tokens: {token_info['input_tokens']}")

# Giả sử output 500 tokens
cost = estimate_cost(token_info["input_tokens"], 500, model="gpt-4o")
print(f"Estimated cost: ${cost['total_cost_usd']:.6f}")
```

## 8. Code: Use Tiktoken and Hugging Face Tokenizers

```python
# ─── Tiktoken ─────────────────────────────────────────────────────
import tiktoken

enc = tiktoken.encoding_for_model("gpt-4o")

text = "Tokenization is the first step in any LLM pipeline!"

# Encode / decode
ids = enc.encode(text)
decoded = enc.decode(ids)
print(f"Text: {text}")
print(f"IDs:  {ids}")
print(f"Back: {decoded}")

# Visualize tokens
print("\nToken breakdown:")
for tid in ids:
    token_str = enc.decode([tid])
    print(f"  {tid:7d} | {repr(token_str)}")

# Disallow special tokens (safe mode)
safe_ids = enc.encode(text, disallowed_special=())


# ─── Hugging Face tokenizers ──────────────────────────────────────
from transformers import AutoTokenizer

# BERT tokenizer (WordPiece)
bert_tok = AutoTokenizer.from_pretrained("bert-base-uncased")

# GPT-2 tokenizer (BPE)
gpt2_tok = AutoTokenizer.from_pretrained("gpt2")

# LLaMA-3 tokenizer (BPE on bytes, SentencePiece-like)
# llama_tok = AutoTokenizer.from_pretrained("meta-llama/Meta-Llama-3-8B")

sample = "The quick brown fox jumps over the lazy dog."

for name, tok in [("BERT", bert_tok), ("GPT-2", gpt2_tok)]:
    encoded = tok(sample)
    tokens  = tok.convert_ids_to_tokens(encoded["input_ids"])
    print(f"\n{name}: {len(encoded['input_ids'])} tokens")
    print(f"  {tokens}")

# Batch encoding (efficient)
texts = [
    "First sentence here.",
    "A much longer second sentence that needs padding to batch correctly.",
]
batch = bert_tok(
    texts,
    padding=True,          # pad đến max length trong batch
    truncation=True,       # truncate nếu quá max_length
    max_length=64,
    return_tensors="pt",   # trả về PyTorch tensors
)
print(f"\nBatch input_ids shape: {batch['input_ids'].shape}")
print(f"Attention mask:\n{batch['attention_mask']}")
```

## Summary

1. **Subword tokenization** balances character-level (OOV-free but long) and word-level (short but OOV and large vocab).
2. **BPE** uses frequency-based merging — GPT series, LLaMA, Mistral.
3. **WordPiece** uses likelihood-based merging — BERT and encoder models.
4. **SentencePiece** does not need pre-tokenization, good for multilingual — T5, mT5.
5. **Tiktoken** (OpenAI): fast, `cl100k_base` for GPT-4, `o200k_base` for GPT-4o.
6. Vietnamese costs **2-3x tokens** more than English — affecting cost and context budget.
7. Always estimate token count before deploying to control costs.

The next article will go into **Pre-training LLMs** — how models are trained from scratch with Causal LM, MLM, and why Scaling Laws change the way we think about AI.
