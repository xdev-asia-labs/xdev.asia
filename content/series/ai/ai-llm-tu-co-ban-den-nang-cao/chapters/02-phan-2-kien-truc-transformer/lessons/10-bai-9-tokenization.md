---
id: 019c9619-bb09-7009-c009-bb0900000009
title: 'Bài 9: Tokenization — BPE, WordPiece, SentencePiece'
slug: bai-9-tokenization
description: >-
  Hiểu tại sao tokenization là nền tảng của mọi LLM. Khám phá thuật toán BPE,
  WordPiece, Unigram/SentencePiece và Tiktoken của OpenAI. Giải quyết vấn đề
  tokenization tiếng Việt và học cách đếm token để ước tính chi phí API.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 2: Kiến trúc Transformer"
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: "AI & LLM: Từ Cơ bản đến Nâng cao"
  slug: ai-llm-tu-co-ban-den-nang-cao
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI &amp; ML — Bài 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 9: Tokenization — BPE, WordPiece,</tspan>
      <tspan x="60" dy="42">SentencePiece</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI &amp; LLM: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Kiến trúc Transformer</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# Bài 9: Tokenization — BPE, WordPiece, SentencePiece

## 1. Tại Sao Không Dùng Character-level hay Word-level?

Trước khi LLMs, có hai cách tiếp cận tokenization phổ biến, mỗi cách đều có trade-offs nghiêm trọng.

### Character-level Tokenization

```python
text = "Hello, world!"
tokens = list(text)
# ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!']
```

**Ưu điểm**: Vocab nhỏ (~100-300 ký tự), không có OOV (out-of-vocabulary).

**Nhược điểm**:
- Sequence dài hơn **4-5 lần** so với word-level → attention O(n²) tốn kém.
- Harder to learn: Model phải học "spelling" từ scratch thay vì làm việc với units có nghĩa.
- Kém hiệu quả cho reasoning và factual knowledge.

### Word-level Tokenization

```python
text = "The cats are running quickly"
tokens = text.split()
# ['The', 'cats', 'are', 'running', 'quickly']
```

**Ưu điểm**: Tokens có nghĩa rõ ràng, sequence ngắn.

**Nhược điểm**:
- Vocab khổng lồ (tiếng Anh có 170,000+ words).
- **OOV problem**: "cats" và "cat" là hai tokens khác nhau; "COVID-19" không có trong vocab.
- Inflections và morphology: "run", "runs", "running", "ran" → 4 tokens riêng biệt.
- Memory: Embedding matrix lớn vô lý.

### Subword Tokenization — Giải pháp Tốt Nhất

Mục tiêu: Vocab đủ nhỏ (~30K-100K), không OOV, sequence length hợp lý.

**Nguyên tắc**:
- Từ phổ biến → một token duy nhất: "the" → `[the]`
- Từ hiếm → split thành subwords: "unaffable" → `[un, ##aff, ##able]`
- Worst case: character-by-character, không bao giờ OOV.

## 2. Byte Pair Encoding (BPE) — Thuật Toán Step-by-step

BPE gốc (Sennrich et al., 2016) bắt đầu từ character-level và merge dần:

### Thuật toán:

```
1. Khởi tạo vocab với tất cả ký tự trong corpus
2. Lặp k lần (k = số merges mong muốn):
   a. Đếm tần suất tất cả cặp token liền kề
   b. Merge cặp phổ biến nhất thành token mới
   c. Cập nhật corpus với merge mới
3. Vocab cuối = initial chars + k merged tokens
```

### Ví dụ cụ thể:

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

**Implementation BPE từ scratch:**

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

**GPT-2 BPE**: Hoạt động trên **bytes** (256 byte values) thay vì characters → không bao giờ OOV với bất kỳ Unicode text nào.

## 3. WordPiece (BERT) — Giống BPE Nhưng Khác Criterion

WordPiece (Schuster & Nakamura, 2012; dùng trong BERT) cũng merge subwords nhưng dùng criterion khác.

**Criterion của BPE**: Merge cặp có tần suất cao nhất.

**Criterion của WordPiece**: Merge cặp maximize **likelihood** của corpus:
$$\text{score}(u, v) = \frac{\text{freq}(uv)}{\text{freq}(u) \times \text{freq}(v)}$$

Điều này ưu tiên các cặp **ít phổ biến riêng lẻ** nhưng **thường xuyên đi cùng nhau** — captures more meaningful linguistic units.

**Tokenization inference** (khác training):
- BPE: dùng merge rules theo thứ tự.
- WordPiece: greedy longest-match-first subword từ trái sang phải.

```python
# WordPiece notation: ## prefix cho continuation subwords
tokenizer_bert = "bert-base-uncased"
# "unaffable" → ["un", "##aff", "##able"]
# "tokenization" → ["token", "##ization"]
# "Playing123" → ["playing", "##12", "##3"]  (lowercase + split)
```

## 4. Unigram Language Model (SentencePiece)

**SentencePiece** (Kudo & Richardson, 2018) — dùng trong T5, mT5, XLNet, và nhiều multilingual models — có hai điểm khác biệt:

### Không cần pre-tokenization

BPE và WordPiece giả định text đã được split bằng whitespace. SentencePiece train trực tiếp trên raw text, không cần pre-tokenization. Điều này cực kỳ quan trọng cho:
- Tiếng Nhật, Tiếng Trung (không có word boundaries).
- Tiếng Việt (âm tiết-based, spaces ≠ word boundaries).

### Unigram Language Model

Thay vì bottom-up merge (BPE), Unigram dùng **top-down pruning**:
1. Khởi đầu với vocab lớn (tất cả possible substrings).
2. Lặp: loại bỏ token mà nếu bỏ đi thì likelihood giảm ít nhất.
3. Dừng khi vocab đủ nhỏ.

**Probabilistic tokenization**: Unigram model cho phép nhiều tokenizations khác nhau với probabilities — useful cho regularization khi training.

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

*`▁` (U+2581) là ký hiệu cho space/word-beginning trong SentencePiece.*

## 5. Tiktoken (OpenAI) — cl100k_base và o200k_base

**Tiktoken** là fast BPE tokenizer của OpenAI, viết bằng Rust với Python bindings.

| Encoding | Dùng cho | Vocab size |
|---|---|---|
| `r50k_base` | GPT-2, GPT-3 (davinci) | 50,257 |
| `p50k_base` | Codex (code-davinci) | 50,281 |
| `cl100k_base` | GPT-3.5-turbo, GPT-4 | 100,277 |
| `o200k_base` | GPT-4o, o1, o3 | 200,019 |

**Tại sao `cl100k_base` tốt hơn `r50k_base`?**
- Vocab 2x lớn hơn → sequence length ngắn hơn ~20%.
- Nhiều common phrases được encode thành 1 token.
- Tốt hơn cho code, multilingual text, numbers.

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

## 6. Tokenization và Tiếng Việt — Vấn đề và Giải pháp

Tiếng Việt có đặc thù:
- **Âm tiết-based**: Mỗi âm tiết thường là một morpheme — "học sinh" (2 âm tiết, 1 nghĩa: "student").
- **Spaces không phân cách từ**: "học sinh" là một từ gồm 2 âm tiết, nhưng "học" và "sinh" đứng riêng cũng có nghĩa khác.
- **Diacritical marks**: "a", "à", "á", "ả", "ã", "ạ" — 6 characters khác nhau.
- **Nhiều ký tự Unicode**: Mỗi ký tự có dấu chiếm nhiều bytes → tốn tokens hơn tiếng Anh.

### Vấn đề cụ thể:

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

Tiếng Việt tốn ~2-3x token so với tiếng Anh cùng lượng thông tin → **đắt hơn khi dùng API** và **context window bị "waste"**.

### Giải pháp:

**1. Dùng models train nhiều tiếng Việt hơn:**
- **Vistral-7B**: LLaMA-based, fine-tuned trên Vietnamese data.
- **PhoGPT**: VinAI Research, train trên ~41GB Vietnamese text.
- **SeaLLM**: Multilingual SEA languages including Vietnamese.

**2. Word segmentation trước tokenization:**
```python
# pip install underthesea
from underthesea import word_tokenize

text = "Sinh viên đang học trí tuệ nhân tạo tại trường đại học."
words = word_tokenize(text, format="text")
# "Sinh_viên đang học trí_tuệ_nhân_tạo tại trường_đại_học ."

# Sau đó tokenize → ít tokens hơn vì "trí_tuệ_nhân_tạo" là 1 unit
```

**3. Train tokenizer riêng cho tiếng Việt:**
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

## 7. Token Counting và Cost Estimation

Mọi API LLM đều charge theo số tokens. Hiểu cách đếm token giúp tối ưu cost.

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

## 8. Code: Dùng Tiktoken và Hugging Face Tokenizers

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

## Tóm tắt

1. **Subword tokenization** cân bằng giữa character-level (OOV-free nhưng dài) và word-level (ngắn nhưng OOV và vocab lớn).
2. **BPE** dùng frequency-based merging — GPT series, LLaMA, Mistral.
3. **WordPiece** dùng likelihood-based merging — BERT và các encoder models.
4. **SentencePiece** không cần pre-tokenization, tốt cho multilingual — T5, mT5.
5. **Tiktoken** (OpenAI): nhanh, `cl100k_base` cho GPT-4, `o200k_base` cho GPT-4o.
6. Tiếng Việt tốn **2-3x token** hơn tiếng Anh — ảnh hưởng đến cost và context budget.
7. Luôn estimate token count trước khi deploy để kiểm soát chi phí.

Bài tiếp theo sẽ đi vào **Pre-training LLMs** — cách các models được train từ đầu với Causal LM, MLM, và tại sao Scaling Laws thay đổi cách chúng ta nghĩ về AI.
