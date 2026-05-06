---
id: 019d8b30-bb03-7003-c003-ee0300000003
title: 'レッスン 3: トークン化の詳細 — Word から BPE、WordPiece、SentencePiece まで'
slug: bai-3-tokenization-deep-dive
description: >-
  トークン化方法を比較します:
  ホワイトスペース、BPE、WordPiece、Unigram、SentencePiece。語彙のサイズとトレードオフ。トークナイザーをゼロからトレーニングします。ハグフェイストークナイザーライブラリ。ベトナム語および特定のトークン化の課題。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: NLP の基礎 — コンピューターのレンズを通して言語を理解する'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP の基礎から上級まで: 自然言語処理をマスターする'
  slug: nlp-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI と ML — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: トークン化の詳細 - Word から</tspan>
      <tspan x="60" dy="42">BPE、WordPiece、SentencePiece へ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP の基礎から上級まで: 自然言語処理をマスターする</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: NLP の基礎 — コンピューターのレンズを通して言語を理解する</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**トークン化**は、すべての NLP パイプラインにおける最初で最も重要なステップです。これはモデルがテキストをどのように「見る」かを決定し、パフォーマンスに直接影響します。

> 💡 すべての最新の LLM (GPT-4、Gemini、Claude、LLaMA) は **サブワード トークン化** を使用します。この記事ではその理由を説明します。

---

## 1. Word レベルのトークン化ではなぜ不十分なのでしょうか?

### OOV (語彙不足) 問題

```python
vocab = {"hello", "world", "natural", "language"}

# Gặp từ mới → OOV!
text = "unhappiness"  # Không có trong vocab → [UNK]

# Word-level vocab cần KHỔNG LỒ
# Tiếng Anh: ~170,000 từ
# + Tên riêng, thuật ngữ, viết tắt → 500,000+
# + Đa ngôn ngữ → Hàng triệu từ
```

### 3 つの主な問題

|問題 |単語レベル |サブワード |キャラクターレベル |
|----------|-----------|----------|------|
|語彙サイズ |巨大 (500K+) |中程度 (32K–128K) |非常に小さい (256) |
| OOV |たくさんの[UNK] |めったに |決して |
|意味論的な意味 |良い |良い |悪い（各キャラクター） |
|シーケンスの長さ |短い |中程度 |とても長い |

---

## 2. バイトペアエンコーディング (BPE)

### 2.1 アルゴリズム

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

### 2.2 BPE の実際

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

**使用者:** GPT-2、GPT-3、GPT-4、LLaMA、RoBERTa

---

## 3. ワードピース

WordPiece は BPE に似ていますが、頻度の代わりに **尤度** を使用します。

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

**使用者:** BERT、DistilBERT、PhoBERT

---

## 4. センテンスピースとユニグラム

### 文の一部

テキストを **生のバイト** として扱います。スペースの事前トークン化は必要ありません。

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

**使用者:** T5、ALBERT、XLNet、LLaMA (結合 BPE)

---

## 5. 比較の概要

|方法 |マージ方法 |事前にトークン化しますか? |記号 |モデル |
|-----------|-----------|--------------|-------|----------|
| BPE |最高周波数 |必要 (空白) | — | GPT、LLaMA、ロベルタ |
|ワードピース |最も高い可能性 |必要 (空白) | `##` (続き) |バート、フォバート |
|ユニグラム |トークンの種類はほとんど影響しません。必要ありません | `▁` (単語の始まり) | T5、アルバート |
|センテンスピース | BPE またはユニグラム |必要ありません | `▁` (単語の始まり) | T5、ラマ |

---

## 6. ハグフェイストークナイザー — 練習

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

## 7. ベトナム語のトークン化

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

> 🇻🇳 **洞察:** GPT-4 / Gemini のトークナイザーは、ベトナム語を英語よりも **多くのトークン**に分割し (~1.5 ～ 2 倍)、その結果、API コストが高くなります。

---

## 概要

|重要なポイント |詳細 |
|----------|----------|
|単語レベル |語彙が大きすぎて、OOV が多い → 実行不可能 |
| BPE |頻度によるマージ、最も一般的 (GPT、LLaMA) |
|ワードピース |可能性によってマージし、使用します `##` (バート) |
|センテンスピース |事前のトークン化は不要、言語に依存しない |
|ベトナム語 | English Tokenizer はより多くのトークンに分割 → コストに注意 |

---

## 次の記事

**レッスン 4: Bag of Words、TF-IDF、N グラム** — 古典的なテキスト表現方法ですが、依然として多くの問題で効果的です。
