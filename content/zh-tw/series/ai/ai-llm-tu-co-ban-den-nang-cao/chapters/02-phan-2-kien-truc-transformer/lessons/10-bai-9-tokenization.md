---
id: 019c9619-bb09-7009-c009-bb0900000009
title: 第 9 課：標記化 — BPE、WordPiece、SentencePiece
slug: bai-9-tokenization
description: >-
  了解為什麼標記化是每個法學碩士的基礎。探索 OpenAI 的 BPE、WordPiece、Unigram/SentencePiece 和 Tiktoken
  演算法。解決越南語標記化問題並學習如何計算標記以估算 API 成本。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 8
section_title: 第 2 部分：Transformer 架構
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 人工智慧和法學碩士：從基礎到高級
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：標記化 — BPE、WordPiece、</tspan>
      <tspan x="60" dy="42">句子片段</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧和法學碩士：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：Transformer 架構</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

# 第 9 課：標記化 — BPE、WordPiece、SentencePiece

## 1. 為什麼不使用字元級或單字級？

在法學碩士之前，有兩種流行的代幣化方法，每種方法都有嚴重的權衡。

### 字元級標記化

```python
text = "Hello, world!"
tokens = list(text)
# ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!']
```

**優點**：字彙量小（~100-300 個字元），無 OOV（字彙外）。

**缺點**：
- 數列比字級長 **4-5 倍** → O(n²) 注意力是昂貴的。
- 更難學習：模型必須從頭開始學習“拼字”，而不是使用有意義的單元。
- 對於推理和事實知識無效。

### 字級標記化

```python
text = "The cats are running quickly"
tokens = text.split()
# ['The', 'cats', 'are', 'running', 'quickly']
```

**優點**：Token意義明確，序列短。

**缺點**：
- 大量詞彙（英語有 170,000 多個單字）。
- **OOV問題**：「cats」和「cat」是兩個不同的token；詞彙中沒有「COVID-19」。
- 詞形變化與形態：「run」、「runs」、「running」、「ran」 → 4 個單獨的標記。
- 記憶體：嵌入矩陣大得離譜。

### 子字標記化 — 最佳解決方案

目標：詞彙量夠小（~30K-100K），沒有OOV，合理的序列長度。

**原則**：
- 常用字 → 單一標記：「the」 → `[the]`
- 稀有字 → 分成子詞：「unaffable」 → `[un, ##aff, ##able]`
- 最糟的情況：逐個字符，絕對不是 OOV。

## 2. 位元組對編碼 (BPE) — 逐步演算法

最初的 BPE (Sennrich et al., 2016) 從字元層級開始，逐漸融合：

### 演算法：

```
1. Khởi tạo vocab với tất cả ký tự trong corpus
2. Lặp k lần (k = số merges mong muốn):
   a. Đếm tần suất tất cả cặp token liền kề
   b. Merge cặp phổ biến nhất thành token mới
   c. Cập nhật corpus với merge mới
3. Vocab cuối = initial chars + k merged tokens
```

###具體例子：

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

**從頭開始實施BPE：**

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

**GPT-2 BPE**：在**位元組**（256 位元組值）而不是字元上執行 → 不會與任何 Unicode 文字出現 OOV。

## 3. WordPiece (BERT) — 與 BPE 相同，但與 Criterion 不同

WordPiece（Schuster & Nakamura，2012；用於 BERT）也合併子詞，但使用不同的標準。

**BPE的標準**：合併頻率最高的對。

**WordPiece 的標準**：合併對最大化語料庫的**可能性**：
$$\text{分數}(u, v) = \frac{\text{freq}(uv)}{\text{freq}(u) \times \text{freq}(v)}$$

這有利於**不太常見的個體**但**經常在一起** - 捕獲更有意義的語言單元。

**標記化推理**（與訓練不同）：
- BPE：依序使用合併規則。
- WordPiece：從左到右貪婪的最長匹配第一個子。

```python
# WordPiece notation: ## prefix cho continuation subwords
tokenizer_bert = "bert-base-uncased"
# "unaffable" → ["un", "##aff", "##able"]
# "tokenization" → ["token", "##ization"]
# "Playing123" → ["playing", "##12", "##3"]  (lowercase + split)
```

## 4. 一元語言模型（SentencePiece）

**SentencePiece**（Kudo & Richardson，2018）—用於 T5、mT5、XLNet 和許多多語言模型—有兩個差異：

### 無需預先標記化

BPE 和 WordPiece 假定文字已被空格分割。 SentencePiece 直接在原始文字上進行訓練，無需預先標記化。這對於以下方面極為重要：
- 日文、中文（無字限）。
- 越南語（基於音節，空格≠單字邊界）。

### 一元語言模型

Unigram 使用**自上而下的剪枝**，而不是自下而上的合併（BPE）：
1. 從大詞彙開始（所有可能的子字串）。
2. 迭代：刪除標記，如果刪除，則可能性降低最少。
3. 當詞彙量夠小時就停止。

**機率標記化**：Unigram 模型允許許多不同的機率標記化 - 對於訓練時的正規化很有用。

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

*`▁` (U+2581) 是 SentencePiece 中空格/單字開頭的符號。 *

## 5. Tiktoken (OpenAI) — cl100k_base 和 o200k_base

**Tiktoken** 是 OpenAI 的快速 BPE 標記產生器，使用 Rust 編寫，並結合 Python 綁定。

|編碼 |用於 |詞彙大小 |
|---|---|---|
| `r50k_base` | GPT-2、GPT-3（達文西）| 50,257 | 50,257
| `p50k_base` | Codex（代碼-達文西）| 50,281 | 50,281
| `cl100k_base` | GPT-3.5-渦輪增壓、GPT-4 | 100,277 | 100,277
| `o200k_base` | GPT-4o、o1、o3 | 200,019 | 200,019

**為什麼 `cl100k_base` 更好 `r50k_base`？ **
- 詞彙量增加 2 倍 → 序列長度縮短約 20%。
- 許多常見短語被編碼為 1 個標記。
- 更適合代碼、多語言文字、數字。

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

## 6. 代幣化與越南語 — 問題與解決方案

越南語有以下特點：
- **基於音節**：每個音節通常是一個語素 - “學生”（2個音節，1個意思：“學生”）。
- **空格不分隔單字**：「學生」是一個雙音節詞，但「學習」和「學生」單獨存在也有不同的意義。
- **變音符號**：「ah」、「ah」、「ah」、「ah」、「ã」、「à」 — 6個不同的字符。
- **許多 Unicode 字元**：每個重音字元佔用許多位元組 → 比英語花費更多的標記。

###具體問題：

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

對於相同數量的信息，越南語的成本是英語的 2-3 倍 → **使用 API 時更昂貴**並且**上下文視窗是「浪費」**。

###解決方案：

**1.使用越南語模型進行更多訓練：**
- **Vistral-7B**：基於 LLaMA，根據越南數據進行微調。
- **PhoGPT**：VinAI Research，在 ~41GB 越南文上進行訓練。
- **SeaLLM**：多語言SEA語言，包括越南語。

**2.分詞前的分詞：**
```python
# pip install underthesea
from underthesea import word_tokenize

text = "Sinh viên đang học trí tuệ nhân tạo tại trường đại học."
words = word_tokenize(text, format="text")
# "Sinh_viên đang học trí_tuệ_nhân_tạo tại trường_đại_học ."

# Sau đó tokenize → ít tokens hơn vì "trí_tuệ_nhân_tạo" là 1 unit
```

**3.專門為越南語訓練分詞器：**
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

## 7. 代幣計數與成本估算

所有LLM API均根據代幣數量收費。了解如何計算代幣有助於優化成本。

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

## 8. 程式碼：使用 Tiktoken 和 Hugging Face Tokenizer

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

## 總結

1. **子字標記化**平衡字元等級（無 OOV 但長）和單字等級（短但 OOV 且詞彙量大）。
2. **BPE** 使用基於頻率的合併－GPT 系列、LLaMA、Mistral。
3. **WordPiece** 使用基於可能性的合併－BERT 和編碼器模型。
4. **SentencePiece**不需要預分詞，適合多語言－T5、mT5。
5. **Tiktoken** (OpenAI)：快速， `cl100k_base` 對於 GPT-4， `o200k_base` 對於 GPT-4o。
6. 越南語的成本比英語高 **2-3 倍令牌** — 影響成本和上下文預算。
7. 在部署之前始終估計代幣數量以控製成本。

下一篇文章將討論 **預先訓練 LLM** — 如何使用因果 LM、MLM 從頭開始訓練模型，以及為什麼縮放定律改變了我們對人工智慧的思考方式。
