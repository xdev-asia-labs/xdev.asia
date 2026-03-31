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
