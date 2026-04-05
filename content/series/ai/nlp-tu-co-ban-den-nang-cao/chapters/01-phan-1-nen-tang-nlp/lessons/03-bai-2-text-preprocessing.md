---
id: 019d8b30-bb02-7002-c002-ee0200000002
title: 'Bài 2: Text Preprocessing — Làm sạch và Chuẩn hóa Văn bản'
slug: bai-2-text-preprocessing
description: >-
  Tokenization (word, subword, character-level). Lowercasing, stemming,
  lemmatization. Stopword removal. Regex cho text cleaning. Unicode &
  encoding issues. Hands-on pipeline preprocessing với Python và spaCy.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền tảng NLP — Hiểu Ngôn ngữ qua lăng kính Máy tính"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1372" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1372)"/>

  <!-- Decorations -->
  <g>
    <circle cx="624" cy="202" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="648" cy="86" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="672" cy="230" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="696" cy="114" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="720" cy="258" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="102" x2="1100" y2="182" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="132" x2="1050" y2="202" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="984.0429399400242,133.5 984.0429399400242,170.5 952,189 919.9570600599758,170.5 919.9570600599758,133.5 952,115" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI &amp; ML — Bài 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 2: Text Preprocessing — Làm sạch và</tspan>
      <tspan x="60" dy="42">Chuẩn hóa Văn bản</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng NLP — Hiểu Ngôn ngữ qua lăng kính Máy tính</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

> "Garbage in, garbage out" — Trong NLP, **80% thành công** đến từ việc chuẩn bị và làm sạch dữ liệu text.

Text data "ngoài đời" luôn **bẩn**: chứa HTML tags, emoji, ký tự đặc biệt, viết tắt, lỗi chính tả, encoding sai... Trước khi đưa vào bất kỳ model nào, bạn cần **preprocessing pipeline** chuẩn chỉ.

---

## 1. Tổng quan Text Preprocessing Pipeline

```
Raw Text
    │
    ▼
┌────────────────────────┐
│ 1. Text Cleaning       │ ← Loại HTML, URLs, special chars
├────────────────────────┤
│ 2. Unicode Normalization│ ← NFC/NFD, encoding fix
├────────────────────────┤
│ 3. Tokenization        │ ← Tách thành tokens (từ/subword)
├────────────────────────┤
│ 4. Lowercasing         │ ← Chuẩn hóa chữ hoa/thường
├────────────────────────┤
│ 5. Stopword Removal    │ ← Loại từ không mang nghĩa
├────────────────────────┤
│ 6. Stemming/Lemma      │ ← Đưa về dạng gốc
├────────────────────────┤
│ 7. Final Filtering     │ ← Min length, frequency threshold
└────────────────────────┘
    │
    ▼
Clean Tokens
```

> ⚠️ **Lưu ý:** Không phải lúc nào cũng cần **tất cả** các bước. Với BERT/GPT, bạn thường chỉ cần bước 1–3, vì model đã được train để xử lý các bước còn lại.

---

## 2. Text Cleaning

### 2.1 Regex Power Tools

```python
import re

def clean_text(text: str) -> str:
    """Pipeline làm sạch text cơ bản."""
    # 1. Loại HTML tags
    text = re.sub(r'<[^>]+>', '', text)

    # 2. Loại URLs
    text = re.sub(r'https?://\S+|www\.\S+', '[URL]', text)

    # 3. Loại email
    text = re.sub(r'\S+@\S+\.\S+', '[EMAIL]', text)

    # 4. Loại số điện thoại
    text = re.sub(r'\b\d{10,11}\b', '[PHONE]', text)

    # 5. Chuẩn hóa whitespace
    text = re.sub(r'\s+', ' ', text).strip()

    return text

# Test
raw = """
<p>Liên hệ qua email: test@email.com hoặc
truy cập https://example.com để biết thêm chi tiết.
Hotline: 0901234567</p>
"""
print(clean_text(raw))
# "Liên hệ qua email: [EMAIL] hoặc truy cập [URL] để biết thêm chi tiết. Hotline: [PHONE]"
```

### 2.2 Xử lý Emoji và Special Characters

```python
import emoji

def handle_emoji(text: str, mode: str = "remove") -> str:
    """Xử lý emoji: remove hoặc convert to text."""
    if mode == "remove":
        return emoji.replace_emoji(text, replace='')
    elif mode == "text":
        return emoji.demojize(text)  # 😀 → :grinning_face:
    return text

text = "Sản phẩm tuyệt vời! 😍🔥 5 sao ⭐⭐⭐⭐⭐"
print(handle_emoji(text, "remove"))
# "Sản phẩm tuyệt vời!  5 sao "
print(handle_emoji(text, "text"))
# "Sản phẩm tuyệt vời! :heart_eyes::fire: 5 sao :star::star::star::star::star:"
```

---

## 3. Unicode Normalization

```python
import unicodedata

def normalize_unicode(text: str) -> str:
    """Chuẩn hóa Unicode: đặc biệt quan trọng cho tiếng Việt."""
    # NFC: Composed form (khuyến nghị cho tiếng Việt)
    text = unicodedata.normalize('NFC', text)

    # Loại các ký tự control
    text = ''.join(c for c in text if not unicodedata.category(c).startswith('C')
                   or c in '\n\t')

    return text

# Ví dụ: 2 cách viết "ệ" trong Unicode
s1 = "Vi\u1ec7t"          # ệ = single codepoint (NFC)
s2 = "Vie\u0302\u0323t"   # ệ = e + circumflex + dot below (NFD)
print(s1 == s2)                                    # False!
print(normalize_unicode(s1) == normalize_unicode(s2))  # True!
```

> 🇻🇳 **Tiếng Việt**: LUÔN normalize sang NFC trước khi xử lý.

---

## 4. Tokenization

### 4.1 Word-level Tokenization

```python
# Phương pháp đơn giản nhất: split by whitespace
text = "NLP là lĩnh vực thú vị"
tokens = text.split()
# ['NLP', 'là', 'lĩnh', 'vực', 'thú', 'vị']

# Với NLTK
import nltk
tokens = nltk.word_tokenize("I can't believe it's raining!")
# ["I", "ca", "n't", "believe", "it", "'s", "raining", "!"]

# Với spaCy
import spacy
nlp = spacy.load("en_core_web_sm")
doc = nlp("I can't believe it's raining!")
tokens = [token.text for token in doc]
# ["I", "ca", "n't", "believe", "it", "'s", "raining", "!"]
```

### 4.2 Sentence Tokenization

```python
import nltk
nltk.download('punkt')

text = """NLP rất thú vị. Bạn nên học nó!
Đặc biệt là phần Transformer. Hãy bắt đầu ngay."""

sentences = nltk.sent_tokenize(text)
# ['NLP rất thú vị.', 'Bạn nên học nó!',
#  'Đặc biệt là phần Transformer.', 'Hãy bắt đầu ngay.']
```

---

## 5. Lowercasing, Stemming & Lemmatization

### 5.1 Lowercasing

```python
text = "Natural Language PROCESSING is AMAZING"
text_lower = text.lower()
# "natural language processing is amazing"
```

> ⚠️ Cẩn thận: lowercasing làm mất thông tin NER (Apple công ty vs apple trái cây).

### 5.2 Stemming vs Lemmatization

| Đặc điểm | Stemming | Lemmatization |
|-----------|----------|---------------|
| Phương pháp | Cắt hậu tố (rule-based) | Tra từ điển + POS |
| Tốc độ | Nhanh | Chậm hơn |
| Chất lượng | Thô, có thể sai | Chính xác hơn |
| Ví dụ | running → run, better → better | running → run, better → good |

```python
# Stemming
from nltk.stem import PorterStemmer
stemmer = PorterStemmer()
words = ["running", "runs", "ran", "runner"]
print([stemmer.stem(w) for w in words])
# ['run', 'run', 'ran', 'runner']

# Lemmatization
import spacy
nlp = spacy.load("en_core_web_sm")
doc = nlp("He was running faster than the other runners")
print([(token.text, token.lemma_) for token in doc])
# [('He', 'he'), ('was', 'be'), ('running', 'run'),
#  ('faster', 'fast'), ('than', 'than'), ('the', 'the'),
#  ('other', 'other'), ('runners', 'runner')]
```

---

## 6. Stopword Removal

```python
import spacy

nlp = spacy.load("en_core_web_sm")

text = "This is a very good example of text preprocessing in NLP"
doc = nlp(text)

# Loại stopwords
tokens = [token.text for token in doc if not token.is_stop and not token.is_punct]
print(tokens)
# ['good', 'example', 'text', 'preprocessing', 'NLP']
```

> 📌 Với deep learning models (BERT, GPT), thường **KHÔNG** cần loại stopwords vì model sử dụng context từ tất cả các từ.

---

## 7. Pipeline hoàn chỉnh với spaCy

```python
import spacy
import re

nlp = spacy.load("en_core_web_sm")

def preprocess_pipeline(text: str, remove_stopwords: bool = True) -> list[str]:
    """Pipeline preprocessing hoàn chỉnh."""
    # 1. Clean
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'https?://\S+', '', text)
    text = re.sub(r'\s+', ' ', text).strip()

    # 2. spaCy processing
    doc = nlp(text.lower())

    # 3. Filter tokens
    tokens = []
    for token in doc:
        if token.is_punct or token.is_space:
            continue
        if remove_stopwords and token.is_stop:
            continue
        if len(token.lemma_) < 2:
            continue
        tokens.append(token.lemma_)

    return tokens

text = """<p>NLP is an AMAZING field! Check https://example.com
for more info about Natural Language Processing.</p>"""

print(preprocess_pipeline(text))
# ['nlp', 'amazing', 'field', 'check', 'info', 'natural', 'language', 'processing']
```

---

## Tổng kết

| Bước | Khi nào dùng | Khi nào KHÔNG |
|------|-------------|---------------|
| Text Cleaning | Luôn luôn | — |
| Unicode Normalization | Tiếng Việt, multilingual | — |
| Tokenization | Luôn luôn | — |
| Lowercasing | Classification, search | NER, khi case quan trọng |
| Stopword Removal | ML truyền thống, BoW/TF-IDF | Deep learning (BERT, GPT) |
| Stemming/Lemma | Search, IR, ML truyền thống | Deep learning |

---

## Bài tiếp theo

**Bài 3: Tokenization Deep Dive** — Đi sâu vào các phương pháp tokenization hiện đại: BPE, WordPiece, SentencePiece — nền tảng của mọi LLM hiện tại.
