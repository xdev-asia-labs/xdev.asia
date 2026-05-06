---
id: 019d8b30-bb02-7002-c002-ee0200000002
title: 第 2 課：文字預處理－文字清理與標準化
slug: bai-2-text-preprocessing
description: >-
  標記化（單字、子單字、字元級）。小寫、詞幹、詞形還原。停用詞刪除。用於文字清理的正規表示式。 Unicode 和編碼問題。使用 Python 和 spaCy
  進行實際管道預處理。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：NLP 基礎 — 透過電腦鏡頭理解語言
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: NLP 從基礎到進階：掌握自然語言處理
  slug: nlp-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 人工智慧與機器學習 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：文字預處理－清理和</tspan>
      <tspan x="60" dy="42">標準化文件</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP 從基礎到進階：掌握自然語言處理</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：NLP 基礎 — 透過電腦鏡頭理解語言</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

> 「垃圾進，垃圾出」－在 NLP 中，**80% 的成功**來自於準備和清理文字資料。

「現實生活」中的文字資料總是**髒**：包含HTML標籤、表情符號、特殊字元、縮寫、拼字錯誤、不正確的編碼...在將其添加到任何模型之前，您需要有一個標準的**預處理管道**。

---

## 1. 文字預處理流程概述

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

> ⚠️ **注意：** **並不總是需要所有**步驟。使用 BERT/GPT，您通常只需要步驟 1-3，因為模型已經經過訓練可以處理其餘步驟。

---

## 2. 文字清理

### 2.1 正規表示式電動工具

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

### 2.2 處理表情符號和特殊字符

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

## 3. Unicode 規範化

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

> 🇻🇳 **越南語**：在處理之前始終標準化為 NFC。

---

## 4. 代幣化

### 4.1 字級標記化

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

### 4.2 句子標記化

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

## 5. 小寫、字幹擷取與詞形還原

### 5.1 小寫

```python
text = "Natural Language PROCESSING is AMAZING"
text_lower = text.lower()
# "natural language processing is amazing"
```

> ⚠️ 注意：小寫會失去 NER 訊息（Apple 公司 vs 蘋果水果）。

### 5.2 詞幹擷取與詞形還原

|特點|詞幹 |詞形還原|
|------------|----------|---------------|
|方法|剪下後綴（基於規則）|查字典+POS |
|速度|快|慢一點 |
|品質 |粗糙，可能是錯誤的 |更準確|
|範例|跑步→跑步，更好→更好|跑→跑步，更好→好|

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

## 6. 停用詞刪除

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

> 📌 使用深度學習模型（BERT、GPT），通常**不需要**需要消除停用詞，因為該模型使用所有單字的上下文。

---

## 7. 使用 spaCy 完成管道

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

## 總結

|步驟|何時使用 |當不|
|--------|-------------|------------|
|文字清理 |永遠 | — |
| Unicode 規範化 |越南語，多元語言 | — |
|代幣化 |永遠 | — |
|小寫 |分類、搜尋| NER，當案件很重要時 |
|停用詞刪除 |傳統機器學習、BoW/TF-IDF |深度學習（BERT、GPT）|
|詞幹擷取/引理 |搜尋、IR、傳統機器學習 |深度學習 |

---

## 下一篇文章

**第 3 課：深入剖析標記化** — 深入研究現代標記化方法：BPE、WordPiece、SentencePiece — 所有當前法學碩士的基礎。
