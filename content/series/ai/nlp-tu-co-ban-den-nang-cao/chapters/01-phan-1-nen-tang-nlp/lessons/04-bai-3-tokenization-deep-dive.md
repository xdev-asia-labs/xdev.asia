---
id: 019d8b30-bb03-7003-c003-ee0300000003
title: 'Bài 3: Tokenization Deep Dive — Từ Word đến BPE, WordPiece, SentencePiece'
slug: bai-3-tokenization-deep-dive
description: >-
  So sánh các phương pháp tokenization: whitespace, BPE, WordPiece,
  Unigram, SentencePiece. Vocabulary size và trade-offs. Tokenizer
  training từ đầu. Hugging Face Tokenizers library. Tiếng Việt
  và các thách thức tokenization đặc thù.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng NLP — Hiểu Ngôn ngữ qua lăng kính Máy tính"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
---

## Giới thiệu

**Tokenization** là bước đầu tiên và quan trọng nhất trong mọi NLP pipeline. Nó quyết định cách model "nhìn" text — và ảnh hưởng trực tiếp đến hiệu suất.

> 💡 Mọi LLM hiện đại (GPT-4, Gemini, Claude, LLaMA) đều dùng **subword tokenization** — và bài này sẽ giải thích tại sao.

---

## 1. Tại sao Word-level Tokenization không đủ?

### Vấn đề OOV (Out-of-Vocabulary)

```python
vocab = {"hello", "world", "natural", "language"}

# Gặp từ mới → OOV!
text = "unhappiness"  # Không có trong vocab → [UNK]

# Word-level vocab cần KHỔNG LỒ
# Tiếng Anh: ~170,000 từ
# + Tên riêng, thuật ngữ, viết tắt → 500,000+
# + Đa ngôn ngữ → Hàng triệu từ
```

### 3 vấn đề chính

| Vấn đề | Word-level | Subword | Character-level |
|--------|-----------|---------|-----------------|
| Vocab size | Rất lớn (500K+) | Vừa phải (32K–128K) | Rất nhỏ (256) |
| OOV | Nhiều [UNK] | Hiếm khi | Không bao giờ |
| Semantic meaning | Tốt | Tốt | Kém (từng ký tự) |
| Sequence length | Ngắn | Vừa phải | Rất dài |

---

## 2. Byte-Pair Encoding (BPE)

### 2.1 Thuật toán

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

### 2.2 BPE trong thực tế

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

**Sử dụng bởi:** GPT-2, GPT-3, GPT-4, LLaMA, RoBERTa

---

## 3. WordPiece

WordPiece tương tự BPE nhưng dùng **likelihood** thay vì frequency:

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

**Sử dụng bởi:** BERT, DistilBERT, PhoBERT

---

## 4. SentencePiece & Unigram

### SentencePiece

Xử lý text như **raw bytes** — không cần pre-tokenization theo space:

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

**Sử dụng bởi:** T5, ALBERT, XLNet, LLaMA (kết hợp BPE)

---

## 5. So sánh Tổng hợp

| Phương pháp | Cách merge | Pre-tokenize? | Ký hiệu | Models |
|------------|-----------|--------------|---------|--------|
| BPE | Frequency cao nhất | Cần (whitespace) | — | GPT, LLaMA, RoBERTa |
| WordPiece | Likelihood cao nhất | Cần (whitespace) | `##` (continuation) | BERT, PhoBERT |
| Unigram | Loại token ít ảnh hưởng | Không cần | `▁` (word start) | T5, ALBERT |
| SentencePiece | BPE hoặc Unigram | Không cần | `▁` (word start) | T5, LLaMA |

---

## 6. Hugging Face Tokenizers — Thực hành

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

## 7. Tokenization cho Tiếng Việt

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

> 🇻🇳 **Insight:** Tokenizer của GPT-4 / Gemini tách tiếng Việt thành **nhiều token hơn** tiếng Anh (~1.5-2x), dẫn đến chi phí API cao hơn.

---

## Tổng kết

| Điểm chính | Chi tiết |
|------------|---------|
| Word-level | Vocab quá lớn, nhiều OOV → không khả thi |
| BPE | Merge theo frequency, phổ biến nhất (GPT, LLaMA) |
| WordPiece | Merge theo likelihood, dùng `##` (BERT) |
| SentencePiece | Không cần pre-tokenization, language-agnostic |
| Tiếng Việt | Tokenizer tiếng Anh tách thành nhiều token hơn → chú ý cost |

---

## Bài tiếp theo

**Bài 4: Bag of Words, TF-IDF & N-grams** — Phương pháp biểu diễn text cổ điển nhưng vẫn hiệu quả trong nhiều bài toán.
