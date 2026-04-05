---
id: 019d8b30-bb04-7004-c004-ee0400000004
title: 'Bài 4: Bag of Words, TF-IDF & N-grams — Phương pháp Cổ điển'
slug: bai-4-bow-tfidf-ngrams
description: >-
  Bag of Words model. TF-IDF weighting và trực giác toán học. N-grams
  cho language modeling. CountVectorizer và TfidfVectorizer với
  scikit-learn. Ưu nhược điểm và khi nào vẫn hiệu quả.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 2: Biểu diễn Ngôn ngữ — Từ BoW đến Word Embeddings"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2617" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2617)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1093" cy="269" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="1086" cy="262" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1079" cy="255" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1072" cy="248" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="1065" cy="241" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="139" x2="1100" y2="219" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="169" x2="1050" y2="239" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1068.444863728671,222 1068.444863728671,256 1039,273 1009.555136271329,256 1009.555136271329,222 1039,205" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI &amp; ML — Bài 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 4: Bag of Words, TF-IDF &amp; N-grams —</tspan>
      <tspan x="60" dy="42">Phương pháp Cổ điển</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Biểu diễn Ngôn ngữ — Từ BoW đến Word Embeddings</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Trước khi có Word2Vec và Transformer, NLP dựa trên các phương pháp **đếm từ** đơn giản nhưng hiệu quả đáng ngạc nhiên. Bag of Words và TF-IDF vẫn được sử dụng rộng rãi năm 2026 — đặc biệt khi bạn cần baseline nhanh hoặc dữ liệu nhỏ.

---

## 1. Bag of Words (BoW)

### Ý tưởng

Biểu diễn mỗi document bằng **vector đếm tần suất** của các từ, **bỏ qua thứ tự**.

```python
from sklearn.feature_extraction.text import CountVectorizer

corpus = [
    "NLP rất thú vị",
    "Machine Learning rất hay",
    "NLP và Machine Learning bổ trợ nhau",
]

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(corpus)

print(vectorizer.get_feature_names_out())
# ['learning', 'machine', 'và', 'nlp', 'nhau', 'bổ', 'hay', 'rất', 'thú', 'trợ', 'vị']

print(X.toarray())
# [[0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1],  ← "NLP rất thú vị"
#  [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],  ← "ML rất hay"
#  [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0]]  ← "NLP và ML bổ trợ nhau"
```

### Hạn chế

- **Mất thứ tự**: "chó cắn người" = "người cắn chó"
- **Sparse matrix**: Vector rất thưa (hầu hết = 0)
- **Không biểu diễn nghĩa**: Từ đồng nghĩa có vector khác nhau

---

## 2. TF-IDF (Term Frequency – Inverse Document Frequency)

### Trực giác

- **TF (Term Frequency)**: Từ xuất hiện nhiều trong document → quan trọng với document đó
- **IDF (Inverse Document Frequency)**: Từ xuất hiện trong **ít** documents → quan trọng hơn (discriminative)

$$TF\text{-}IDF(t, d) = TF(t, d) \times IDF(t) = \frac{f_{t,d}}{\sum_{t'} f_{t',d}} \times \log\frac{N}{n_t}$$

```python
from sklearn.feature_extraction.text import TfidfVectorizer

corpus = [
    "NLP xử lý ngôn ngữ tự nhiên",
    "Machine Learning học từ dữ liệu",
    "NLP kết hợp Machine Learning để xử lý ngôn ngữ",
]

tfidf = TfidfVectorizer()
X = tfidf.fit_transform(corpus)

# TF-IDF values — từ "xử" và "lý" có IDF thấp vì xuất hiện nhiều docs
import pandas as pd
df = pd.DataFrame(X.toarray(), columns=tfidf.get_feature_names_out())
print(df.round(2))
```

### Khi nào TF-IDF vẫn "ngon"?

- **Text search / Information Retrieval**
- **Keyword extraction**
- **Baseline classification** với dataset nhỏ (< 10K samples)
- **Feature engineering** kết hợp với deep learning

---

## 3. N-grams

### Ý tưởng

Thay vì xét từng từ riêng lẻ, xét **chuỗi n từ liên tiếp**:

| N | Tên | Ví dụ ("NLP rất thú vị") |
|---|-----|--------------------------|
| 1 | Unigram | "NLP", "rất", "thú", "vị" |
| 2 | Bigram | "NLP rất", "rất thú", "thú vị" |
| 3 | Trigram | "NLP rất thú", "rất thú vị" |

```python
from sklearn.feature_extraction.text import CountVectorizer

# Bigram + Unigram
vectorizer = CountVectorizer(ngram_range=(1, 2))
X = vectorizer.fit_transform(["NLP rất thú vị và hay"])
print(vectorizer.get_feature_names_out())
# ['hay', 'nlp', 'nlp rất', 'rất', 'rất thú', 'thú', 'thú vị', 'và', 'và hay', 'vị', 'vị và']
```

N-grams giúp BoW/TF-IDF bắt được một phần **thứ tự từ** — "thú vị" mang nghĩa khác "vị thú".

---

## 4. Ứng dụng: Text Classification với TF-IDF

```python
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# Dataset ví dụ
texts = [
    "GPU mới của NVIDIA rất mạnh",
    "Giá Bitcoin tăng vọt hôm nay",
    "Đội tuyển Việt Nam thắng 3-0",
    "Transformer architecture cải tiến NLP",
    "Chứng khoán phục hồi sau phiên giảm",
    "World Cup 2026 sẽ tổ chức tại 3 nước",
    # ... thêm data
]
labels = ["tech", "finance", "sports", "tech", "finance", "sports"]

# Pipeline
tfidf = TfidfVectorizer(ngram_range=(1, 2), max_features=5000)
X = tfidf.fit_transform(texts)

model = LogisticRegression()
model.fit(X, labels)

# Predict
new_text = ["Apple ra mắt iPhone mới"]
prediction = model.predict(tfidf.transform(new_text))
print(prediction)  # ['tech']
```

---

## Tổng kết

| Phương pháp | Ưu điểm | Hạn chế | Use case |
|------------|---------|---------|----------|
| BoW | Đơn giản, nhanh | Mất thứ tự, sparse | Baseline, đếm từ |
| TF-IDF | Cân nhắc importance | Mất thứ tự, sparse | Search, keyword, classification |
| N-grams | Bắt được context cục bộ | Vocab explosion | Kết hợp với BoW/TF-IDF |

---

## Bài tiếp theo

**Bài 5: Word Embeddings — Word2Vec, GloVe, FastText** — Bước nhảy vọt: biểu diễn từ bằng dense vectors có nghĩa, nơi "king - man + woman ≈ queen".
