---
id: 019c9619-bb09-7009-c009-bb0900000009
title: 'レッスン 9: トークン化 — BPE、WordPiece、SentencePiece'
slug: bai-9-tokenization
description: >-
  トークン化がすべての LLM の基礎である理由を理解します。 OpenAI の
  BPE、WordPiece、Unigram/SentencePiece、Tiktoken
  アルゴリズムを探索します。ベトナムのトークン化問題を解決し、トークンを数えて API コストを見積もる方法を学びます。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 2: トランスのアーキテクチャ'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI と LLM: 基本から高度まで'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI と ML — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: トークン化 — BPE、WordPiece、</tspan>
      <tspan x="60" dy="42">センテンスピース</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI と LLM: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: トランスのアーキテクチャ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# レッスン 9: トークン化 — BPE、WordPiece、SentencePiece

## 1. なぜ文字レベルまたは単語レベルを使用しないのでしょうか?

LLM が登場する前は、2 つの一般的なトークン化アプローチがあり、それぞれに深刻なトレードオフがありました。

### 文字レベルのトークン化

```python
text = "Hello, world!"
tokens = list(text)
# ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!']
```

**利点**: 語彙は少なく (約 100 ～ 300 文字)、OOV (語彙不足) はありません。

**短所**:
- シーケンスは単語レベルより **4 ～ 5 倍**長い → O(n²) の注意が必要です。
- 学習が難しい: モデルは、意味のある単位を使用するのではなく、「スペル」を最初から学習する必要があります。
- 推論や事実の知識には効果がありません。

### 単語レベルのトークン化

```python
text = "The cats are running quickly"
tokens = text.split()
# ['The', 'cats', 'are', 'running', 'quickly']
```

**利点**: トークンには明確な意味があり、短いシーケンスがあります。

**短所**:
- 膨大な語彙 (英語には 170,000 以上の単語があります)。
- **OOV 問題**: 「cats」と「cat」は 2 つの異なるトークンです。 「新型コロナウイルス感染症（COVID-19）」という単語はありません。
- 活用と形態：「走る」、「走る」、「走る」、「らん」 → 4 つの別々のトークン。
- メモリ: 埋め込み行列が異常に大きい。

### サブワードのトークン化 — 最良のソリューション

目標: 十分に小さい語彙 (約 30K ～ 100K)、OOV なし、妥当なシーケンス長。

**原則**:
- 一般的な単語 → 単一のトークン: 「the」 → `[the]`
- 珍しい単語 → サブワードに分割：「無愛想」 → `[un, ##aff, ##able]`
- 最悪の場合: 文字ごと、OOV はありません。

## 2. バイト ペア エンコーディング (BPE) — 段階的なアルゴリズム

オリジナルの BPE (Sennrich et al., 2016) は文字レベルから始まり、徐々にマージされます。

### アルゴリズム:

```
1. Khởi tạo vocab với tất cả ký tự trong corpus
2. Lặp k lần (k = số merges mong muốn):
   a. Đếm tần suất tất cả cặp token liền kề
   b. Merge cặp phổ biến nhất thành token mới
   c. Cập nhật corpus với merge mới
3. Vocab cuối = initial chars + k merged tokens
```

### 具体的な例:

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

**BPE を最初から実装:**

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

**GPT-2 BPE**: 文字ではなく **バイト** (256 バイト値) で動作します。 → Unicode テキストで OOV することはありません。

## 3. WordPiece (BERT) — BPE と同じですが、基準とは異なります

WordPiece (Schuster & Nuclear、2012; BERT で使用) もサブワードをマージしますが、異なる基準を使用します。

**BPE の基準**: 最も高い頻度のペアをマージします。

**WordPiece の基準**: マージ ペアはコーパスの **尤度** を最大化します:
$$\text{スコア}(u, v) = \frac{\text{freq}(uv)}{\text{freq}(u) \times \text{freq}(v)}$$

これは、**個別にはあまり一般的ではない**が、**一緒に使用されることが多い**ペアを優先し、より意味のある言語単位を捕捉します。

**トークン化推論** (トレーニングとは異なります):
- BPE: マージ ルールを順番に使用します。
- WordPiece: 左から右への貪欲な最長一致優先サブワード。

```python
# WordPiece notation: ## prefix cho continuation subwords
tokenizer_bert = "bert-base-uncased"
# "unaffable" → ["un", "##aff", "##able"]
# "tokenization" → ["token", "##ization"]
# "Playing123" → ["playing", "##12", "##3"]  (lowercase + split)
```

## 4. Unigram 言語モデル (SentencePiece)

**SentencePiece** (Kudo & Richardson、2018) — T5、mT5、XLNet、および多くの多言語モデルで使用 — には 2 つの違いがあります。

### 事前のトークン化は不要

BPE と WordPiece は、テキストが空白で分割されていることを前提としています。 SentencePiece は生のテキストを直接トレーニングし、事前のトークン化は必要ありません。これは以下にとって非常に重要です。
- 日本語、中国語（単語の境界線なし）。
- ベトナム語 (音節ベース、スペース≠単語境界)。

### Unigram 言語モデル

Unigram は、ボトムアップ マージ (BPE) の代わりに **トップダウン プルーニング** を使用します。
1. 大きな語彙 (考えられるすべての部分文字列) から始めます。
2. 反復: 削除しても可能性が最小限に抑えられるトークンを削除します。
3. 語彙が十分に小さくなったら停止します。

**確率的トークン化**: Unigram モデルでは、確率を使用したさまざまなトークン化が可能です。トレーニング時の正則化に役立ちます。

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

*`▁` (U+2581) は、SentencePiece のスペース/単語先頭の記号です。*

## 5. Tiktoken (OpenAI) — cl100k_base および o200k_base

**Tiktoken** は、Python バインディングを備えた Rust で書かれた OpenAI の高速 BPE トークナイザーです。

|エンコーディング |用途 |語彙サイズ |
|---|---|---|
| `r50k_base` | GPT-2、GPT-3 (ダヴィンチ) | 50,257 |
| `p50k_base` |コーデックス (code-davinci) | 50,281 |
| `cl100k_base` | GPT-3.5-ターボ、GPT-4 | 100,277 |
| `o200k_base` | GPT-4o、o1、o3 | 200,019 |

**なぜ `cl100k_base` より良い `r50k_base`?**
- 語彙が 2 倍大きく → シーケンスの長さが ~20% 短くなります。
- 多くの一般的なフレーズが 1 つのトークンにエンコードされます。
- コード、多言語テキスト、数字に適しています。

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

## 6. 人権化とベトナム語 — 問題と解決策

ベトナム人には次のような特徴があります。
- **音節ベース**: 通常、各音節は形態素です - 「学生」 (2 音節、1 つは「学生」を意味します)。
- **スペースは単語をあるものではありません**:「student」は 2 音節の単語ですが、「study」と「student」だけでも意味が異なります。
- **発音区別記号**: 「ああ」、「ああ」、「ああ」、「ああ」、「ã」、「à」 — 6つの異なる文字。
- **多くの Unicode 文字**:各アクセント付き文字は多くのバイトを占有し、英語よりもコストが高くなります。

### 具体的な問題:

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

ベトナム語では、同じ情報量に対して英語と比較して約 2 ～ 3 倍のトークンがかかります。 → **API を使用するとより高価になり**、**コンテキスト ウィンドウは「無駄」になります**。

### 解決策:

**1.モデルを使用してベトナム語でさらにトレーニングします:**
- **Vistral-7B**: LLaMA ベース、ベトナムのデータに基づいて微調整。
- **PhoGPT**: VinAI Research、約 41GB のベトナム語テキストでトレーニング。
- **SeaLLM**: ベトナム語を含む東南アジアの多言語言語。

**2.トークン化前の単語の分割:**
```python
# pip install underthesea
from underthesea import word_tokenize

text = "Sinh viên đang học trí tuệ nhân tạo tại trường đại học."
words = word_tokenize(text, format="text")
# "Sinh_viên đang học trí_tuệ_nhân_tạo tại trường_đại_học ."

# Sau đó tokenize → ít tokens hơn vì "trí_tuệ_nhân_tạo" là 1 unit
```

**3.ベトナム語専用のトークナイザーをトレーニングします:**
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

## 7. トークンのカウントとコストの見積もり

すべての LLM API は、トークンの数に応じて課金されます。トークンのカウント方法を理解することは、コストの最適化に役立ちます。

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

## 8. コード: Tiktoken とハグフェイストークナイザーを使用する

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

## 概要

1. **サブワード トークン化** は、文字レベル (OOV なしだが長い) と単語レベル (短いが OOV と大きな語彙) のバランスをとります。
2. **BPE** は、周波数ベースのマージ (GPT シリーズ、LLaMA、Mistral) を使用します。
3. **WordPiece** は、尤度ベースのマージ (BERT およびエンコーダー モデル) を使用します。
4. **SentencePiece** は事前トークン化を必要とせず、多言語 (T5、mT5) に適しています。
5. **Tiktoken** (OpenAI): 高速、 `cl100k_base` GPT-4の場合、 `o200k_base` GPT-4o用。
6. ベトナム語は英語より **2 ～ 3 倍のトークン**がかかり、コストとコンテキストの予算に影響します。
7. コストを管理するために、展開する前に必ずトークン数を見積もってください。

次の記事では、**事前トレーニング LLM** - Causal LM、MLM を使用してモデルをゼロからトレーニングする方法、およびスケーリング則が AI についての考え方を変える理由について説明します。
