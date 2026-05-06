---
id: 019d8b30-bb02-7002-c002-ee0200000002
title: 'レッスン 2: テキストの前処理 — テキストのクリーニングと標準化'
slug: bai-2-text-preprocessing
description: >-
  トークン化 (単語、サブワード、文字レベル)。小文字化、ステミング、見出し語化。ストップワードの削除。テキストクリーニング用の正規表現。 Unicode
  とエンコーディングの問題。 Python と spaCy を使用した実践的なパイプライン前処理。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: NLP の基礎 — コンピューターのレンズを通して言語を理解する'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP の基礎から上級まで: 自然言語処理をマスターする'
  slug: nlp-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI と ML — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: テキストの前処理 — クリーニングと</tspan>
      <tspan x="60" dy="42">ドキュメントの標準化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP の基礎から上級まで: 自然言語処理をマスターする</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: NLP の基礎 — コンピューターのレンズを通して言語を理解する</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

> 「ガベージイン、ガベージアウト」 — NLP では、**成功の 80%** はテキスト データの準備とクリーニングから得られます。

「現実世界」のテキスト データは常に **ダーティ**です。HTML タグ、絵文字、特殊文字、略語、スペル ミス、不正なエンコードが含まれています...モデルに追加する前に、標準の **前処理パイプライン**が必要です。

---

## 1. テキスト前処理パイプラインの概要

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

> ⚠️ **注:** **すべて**の手順が常に必要なわけではありません。 BERT/GPT を使用する場合、モデルは残りのステップを処理するようにすでにトレーニングされているため、通常はステップ 1 ～ 3 のみが必要です。

---

## 2. テキストのクリーニング

### 2.1 正規表現パワーツール

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

### 2.2 絵文字と特殊文字の処理

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

## 3. Unicode の正規化

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

> 🇻🇳 **ベトナム語**: 処理する前に必ず NFC に正規化してください。

---

## 4. トークン化

### 4.1 単語レベルのトークン化

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

### 4.2 文のトークン化

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

## 5. 小文字化、語幹処理、および見出し語化

### 5.1 小文字化

```python
text = "Natural Language PROCESSING is AMAZING"
text_lower = text.lower()
# "natural language processing is amazing"
```

> ⚠️ 注意してください: 小文字にすると NER 情報 (Apple 社と Apple 果実) が失われます。

### 5.2 ステミングと見出し語化

|特長 |ステミング |見出し語化 |
|----------|----------|----------|
|方法 |カットサフィックス (ルールベース) |辞書を引く + POS |
|スピード |速い |遅い |
|品質 |大まかで、間違っている可能性があります |より正確に |
|例 |走る → 走る、良くなる → 良くなる |走る → 走る、良くなる → 良い |

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

## 6. ストップワードの削除

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

> 📌 深層学習モデル (BERT、GPT) では、モデルがすべての単語のコンテキストを使用するため、通常、ストップワードを削除する必要はありません**。

---

## 7. spaCy によるパイプラインの完成

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

## 概要

|ステップ |いつ使用するか |そうでない場合 |
|----------|---------------|----------|
|テキストのクリーニング |常に | — |
| Unicode の正規化 |ベトナム語、多言語 | — |
|トークン化 |常に | — |
|小文字 |分類・検索 | NER、事件が重要な場合 |
|ストップワードの削除 |従来の ML、BoW/TF-IDF |ディープラーニング (BERT、GPT) |
|ステミング/補題 |検索、IR、従来の ML |ディープラーニング |

---

## 次の記事

**レッスン 3: トークン化の詳細** — 最新のトークン化手法について詳しく説明します: BPE、WordPiece、SentencePiece — 現在のすべての LLM の基礎です。
