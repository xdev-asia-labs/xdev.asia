---
id: 019d8b30-bb04-7004-c004-ee0400000004
title: 'レッスン 4: Bag of Words、TF-IDF、N グラム — 古典的な方法'
slug: bai-4-bow-tfidf-ngrams
description: >-
  バッグ・オブ・ワーズモデル。 TF-IDF 重み付けと数学的直観。言語モデリング用の N グラム。 scikit-learn を使用した
  CountVectorizer と TfidfVectorizer。メリットとデメリット、そしていつから効果があるのか​​？
duration_minutes: 90
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 2: 言語表現 — BoW から Word 埋め込みまで'
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: 'NLP の基礎から上級まで: 自然言語処理をマスターする'
  slug: nlp-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI と ML — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 4: Bag of Words、TF-IDF、N グラム —</tspan>
      <tspan x="60" dy="42">古典的な方法</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP の基礎から上級まで: 自然言語処理をマスターする</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 言語表現 — BoW から Word 埋め込みまで</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Word2Vec と Transformer が登場するまで、NLP はシンプルだが驚くほど効果的な **単語カウント** 手法に依存していました。 Bag of Words と TF-IDF は、特に高速のベースラインや小規模なデータが必要な場合に、2026 年現在でも広く使用されています。

---

## 1. バッグ・オブ・ワーズ (BoW)

### アイデア

各ドキュメントを、**順序を無視した**、単語の**頻度カウント ベクトル**で表します。

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

### 制限事項

- **順序が間違っています**: 「犬が人を噛む」 = 「人が犬を噛む」
- **疎行列**: 非常に疎なベクトル (ほとんど = 0)
- **意味を表すものではありません**: 同義語には異なるベクトルがあります

---

## 2. TF-IDF (用語頻度 – 逆文書頻度)

### 直感

- **TF (Term Frequency)**: 文書内で頻繁に出現する単語 → その文書にとって重要
- **IDF (逆ドキュメント頻度)**: 単語が **少ない**ドキュメントに出現する → より重要 (識別)

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

### TF-IDF がまだ「良好」なのはいつですか?

- **テキスト検索/情報検索**
- **キーワード抽出**
- **ベースライン分類** 小規模なデータセット (< 10,000 サンプル)
- **特徴エンジニアリング**と深層学習の組み合わせ

---

## 3. Nグラム

### アイデア

個々の単語を考慮する代わりに、**連続する n 個の単語のシーケンス**を考慮してください。

| N |名前 |例 (「NLP はクールです」) |
|---|-----|--------------------------|
| 1 |ユニグラム | 「NLP」「とても」「面白い」「おいしい」 |
| 2 |バイグラム | 「NLPはとても」「とても興味深い」「興味深い」 |
| 3 |トリグラム | 「NLPはとても興味深いです」、「とても興味深いです」 |

```python
from sklearn.feature_extraction.text import CountVectorizer

# Bigram + Unigram
vectorizer = CountVectorizer(ngram_range=(1, 2))
X = vectorizer.fit_transform(["NLP rất thú vị và hay"])
print(vectorizer.get_feature_names_out())
# ['hay', 'nlp', 'nlp rất', 'rất', 'rất thú', 'thú', 'thú vị', 'và', 'và hay', 'vị', 'vị và']
```

N グラムは、BoW/TF-IDF が **語順** の一部をキャプチャするのに役立ちます。「興味深い」には「興味深い」とは異なる意味があります。

---

## 4. アプリケーション: TF-IDF によるテキスト分類

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

## 概要

|方法 |利点 |制限事項 |使用例 |
|---------------|--------|----------|----------|
|ボウ |シンプル、速い |秩序の喪失、まばら |ベースライン、単語数 |
| TF-IDF |重要性を考慮する |秩序の喪失、まばら |検索、キーワード、分類 |
| Nグラム |ローカルコンテキストの取得 |語彙爆発 | BoW/TF-IDFとの組み合わせ |

---

## 次の記事

**レッスン 5: 単語の埋め込み — Word2Vec、GloVe、FastText** — Leap: 「王 - 男性 + 女性 ≈ 女王」の意味のある密集したベクトルで単語を表現します。
