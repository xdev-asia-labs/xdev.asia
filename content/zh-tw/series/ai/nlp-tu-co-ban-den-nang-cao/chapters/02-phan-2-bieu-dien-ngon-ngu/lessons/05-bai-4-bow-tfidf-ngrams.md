---
id: 019d8b30-bb04-7004-c004-ee0400000004
title: 第 4 課：詞袋、TF-IDF 和 N-gram — 經典方法
slug: bai-4-bow-tfidf-ngrams
description: >-
  詞袋模型。 TF-IDF 加權和數學直覺。用於語言建模的 N 元語法。 CountVectorizer 和 TfidfVectorizer 與
  scikit-learn。優點和缺點以及什麼時候仍然有效？
duration_minutes: 90
is_free: true
video_url: null
sort_order: 3
section_title: 第 2 部分：語言表示－從 BoW 到詞嵌入
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: NLP 從基礎到進階：掌握自然語言處理
  slug: nlp-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 人工智慧與機器學習 — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：詞袋、TF-IDF 和 N-gram —</tspan>
      <tspan x="60" dy="42">經典方法</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP 從基礎到進階：掌握自然語言處理</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：語言表示－從 BoW 到詞嵌入</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在 Word2Vec 和 Transformer 之前，NLP 依賴簡單但令人驚訝的有效**字數統計**方法。到 2026 年，詞袋和 TF-IDF 仍然被廣泛使用——尤其是當您需要快速基線或小數據時。

---

## 1. 字袋 (BoW)

### 想法

透過單字的**頻率計數向量**表示每個文檔，**忽略順序**。

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

### 限制

- **亂序**：“狗咬人”=“人咬狗”
- **稀疏矩陣**：非常稀疏的向量（大多數 = 0）
- **不代表意義**：同義詞有不同的向量

---

## 2. TF-IDF（詞頻－逆文檔頻率）

### 直覺

- **TF（詞頻）**：文件中頻繁出現的單字→對該文件很重要
- **IDF（逆文檔頻率）**：出現在**較少**文檔中的單字→更重要（有區別）

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

### TF-IDF 什麼時候還「好」？

- **文字搜尋/資訊檢索**
- **關鍵字擷取**
- **基線分類** 小資料集（< 10K 樣本）
- **特徵工程**與深度學習結合

---

## 3.N 元語法

### 想法

不要考慮單字，而是考慮 **n 個連續單字的序列**：

|尼 |名稱 |範例（“NLP 很酷”）|
|---|-----|--------------------------|
| 1 |一元字| 「NLP」、「非常」、「有趣」、「有品味」|
| 2 |二元組 | “NLP 非常”、“非常有趣”、“有趣”|
| 3 |卦 | “NLP 很有趣”、“很有趣”|

```python
from sklearn.feature_extraction.text import CountVectorizer

# Bigram + Unigram
vectorizer = CountVectorizer(ngram_range=(1, 2))
X = vectorizer.fit_transform(["NLP rất thú vị và hay"])
print(vectorizer.get_feature_names_out())
# ['hay', 'nlp', 'nlp rất', 'rất', 'rất thú', 'thú', 'thú vị', 'và', 'và hay', 'vị', 'vị và']
```

N-gram 幫助 BoW/TF-IDF 捕捉部分**詞序**——「有趣」與「有趣」有不同的意義。

---

## 4. 應用：使用 TF-IDF 進行文字分類

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

## 總結

|方法|優點 |限制 |使用案例 |
|-------------|--------|---------|---------|
|弓 |簡單、快速|失去秩序，稀疏|基線、字數 |
| TF-IDF |考慮重要性 |失去秩序，稀疏|搜尋、關鍵字、分類|
| N-gram |取得本地脈絡 |詞彙爆炸 |與BoW/TF-IDF結合 |

---

## 下一篇文章

**第 5 課：單字嵌入 — Word2Vec、GloVe、FastText** — Leap：用密集的有意義向量表示單詞，其中「國王 - 男人 + 女人 ≈ 女王」。
