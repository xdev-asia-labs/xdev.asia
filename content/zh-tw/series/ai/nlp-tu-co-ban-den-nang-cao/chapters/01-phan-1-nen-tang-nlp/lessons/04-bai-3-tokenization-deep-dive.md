---
id: 019d8b30-bb03-7003-c003-ee0300000003
title: 第 3 課：標記化深入研究 — 從 Word 到 BPE、WordPiece、SentencePiece
slug: bai-3-tokenization-deep-dive
description: >-
  比較標記化方法：空白、BPE、WordPiece、Unigram、SentencePiece。詞彙量大小和權衡。從頭開始進行分詞器訓練。擁抱臉部部分詞器庫。越南語和特定的標記化挑戰。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：NLP 基礎 — 透過電腦鏡頭理解語言
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: NLP 從基礎到進階：掌握自然語言處理
  slug: nlp-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：標記化深入研究 — 來自 Word</tspan>
      <tspan x="60" dy="42">到 BPE、WordPiece、SentencePiece</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP 從基礎到進階：掌握自然語言處理</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：NLP 基礎 — 透過電腦鏡頭理解語言</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**標記化**是每個 NLP 管道中的第一步也是最重要的一步。它決定了模型如何「看待」文本，並直接影響表現。

> 💡 所有現代法學碩士（GPT-4、Gemini、Claude、LLaMA）都使用**子詞標記化** - 本文將解釋原因。

---

## 1. 為什麼詞級標記化還不夠？

### OOV（字彙外）問題

```python
vocab = {"hello", "world", "natural", "language"}

# Gặp từ mới → OOV!
text = "unhappiness"  # Không có trong vocab → [UNK]

# Word-level vocab cần KHỔNG LỒ
# Tiếng Anh: ~170,000 từ
# + Tên riêng, thuật ngữ, viết tắt → 500,000+
# + Đa ngôn ngữ → Hàng triệu từ
```

### 3個主要問題

|問題 |字級 |子詞|角色等級 |
|--------|---------|---------|-----------------|
|字彙大小 |巨大（500K+）|中 (32K–128K) |非常小 (256) |
| OOV |許多[UNK] |很少|從來沒有|
|語意|好 |好 |可憐（每個角色）|
|序列長度|短|中|很長|

---

## 2. 位元組對編碼（BPE）

### 2.1 演算法

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

### 2.2 BPE 實踐

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

**使用者：** GPT-2、GPT-3、GPT-4、LLaMA、RoBERTa

---

## 3.WordPiece

WordPiece 與 BPE 類似，但使用 **似然** 而非頻率：

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

**使用者：** BERT、DistilBERT、PhoBERT

---

## 4. SentencePiece 和 Unigram

### 句子片段

將文字視為**原始位元組** — 不需要空間預標記：

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

**使用者：** T5、ALBERT、XLNet、LLaMA（組合 BPE）

---

## 5. 比較總結

|方法|如何合併 |預標記化？ |符號|型號|
|------------|------------|--------------|--------|--------|
| BPE |最高頻率 |需要（空格）| — | GPT、駱駝、羅伯塔 |
|詞片|最高可能性 |需要（空格）| `##` （續）| BERT，PhoBERT |
|一元字|代幣類型影響不大 |不需要| `▁` （字開頭）| T5，阿爾伯特 |
|句子 | BPE 或 Unigram |不需要| `▁` （字開頭）| T5，駱駝|

---

## 6. 擁抱臉部標記器 — 練習

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

## 7. 越南語的標記化

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

> 🇻🇳 **洞察：** GPT-4 / Gemini 的分詞器將越南語分割成 **比英語更多的標記**（~1.5-2 倍），導致 API 成本更高。

---

## 總結

|重點|詳情 |
|------------|---------|
|字級|詞彙量太大，OOV很多→不可行|
| BPE |依頻率合併，最常見（GPT、LLaMA）|
|詞片 |依可能性合併，使用 `##` （伯特）|
|句 |無需預先標記化，與語言無關 |
|越南語 | English Tokenizer 分裂成更多的 token → 注意成本 |

---

## 下一篇文章

**第 4 課：詞袋、TF-IDF 和 N-gram** — 經典的文本表示方法，但在許多問題上仍然有效。
