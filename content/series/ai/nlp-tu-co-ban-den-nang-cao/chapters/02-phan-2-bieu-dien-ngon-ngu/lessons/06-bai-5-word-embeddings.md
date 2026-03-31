---
id: 019d8b30-bb05-7005-c005-ee0500000005
title: 'Bài 5: Word Embeddings — Word2Vec, GloVe, FastText'
slug: bai-5-word-embeddings
description: >-
  Từ one-hot đến dense vectors. Word2Vec: CBOW vs Skip-gram, negative
  sampling. GloVe: co-occurrence matrix factorization. FastText: subword
  embeddings. Visualize với t-SNE/UMAP. Pre-trained embeddings cho
  tiếng Việt. Hands-on với Gensim.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: Biểu diễn Ngôn ngữ — Từ BoW đến Word Embeddings"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
---

## Giới thiệu

> "You shall know a word by the company it keeps" — J.R. Firth, 1957

Word embeddings biểu diễn mỗi từ bằng một **dense vector** (thường 100-300 chiều) sao cho các từ có nghĩa tương tự nằm **gần nhau** trong không gian vector. Đây là một trong những breakthrough lớn nhất trong lịch sử NLP.

---

## 1. Từ One-hot đến Dense Vectors

### One-hot: Vấn đề

```python
# Vocab: ["king", "queen", "man", "woman", "apple"]
king  = [1, 0, 0, 0, 0]
queen = [0, 1, 0, 0, 0]
man   = [0, 0, 1, 0, 0]

# cosine_similarity(king, queen) = 0  ← Không biểu diễn quan hệ nghĩa!
# Mỗi từ cách đều nhau trong không gian
```

### Dense Embeddings: Giải pháp

```python
# Word2Vec embeddings (ví dụ 4 chiều, thực tế 100-300)
king  = [0.8, 0.6, -0.2, 0.9]
queen = [0.7, 0.7, 0.8, 0.8]
man   = [0.9, 0.5, -0.3, 0.1]
woman = [0.8, 0.6, 0.7, 0.1]

# king - man + woman ≈ queen  ← "Phép toán" trên nghĩa từ!
```

---

## 2. Word2Vec

### 2.1 CBOW vs Skip-gram

```
CBOW (Continuous Bag of Words):
  Context → Target word
  ["the", "cat", "on", "the"] → "sat"

Skip-gram:
  Target word → Context
  "sat" → ["the", "cat", "on", "the"]
```

| Đặc điểm | CBOW | Skip-gram |
|-----------|------|-----------|
| Input | Context words | Target word |
| Output | Target word | Context words |
| Tốc độ | Nhanh hơn | Chậm hơn |
| Từ hiếm | Kém hơn | Tốt hơn |
| Dataset nhỏ | Tốt hơn | — |

### 2.2 Hands-on với Gensim

```python
from gensim.models import Word2Vec

# Corpus (list of tokenized sentences)
sentences = [
    ["xử", "lý", "ngôn", "ngữ", "tự", "nhiên"],
    ["machine", "learning", "và", "deep", "learning"],
    ["trí", "tuệ", "nhân", "tạo", "phát", "triển"],
    # ... thêm data
]

# Train Word2Vec
model = Word2Vec(
    sentences,
    vector_size=100,   # Số chiều embedding
    window=5,          # Context window
    min_count=1,       # Bỏ qua từ xuất hiện < min_count
    sg=1,              # 0=CBOW, 1=Skip-gram
    epochs=10,
)

# Tìm từ tương tự
print(model.wv.most_similar("ngôn", topn=5))

# Phép toán vector
result = model.wv.most_similar(
    positive=["queen", "man"],
    negative=["woman"],
    topn=1
)
print(result)  # [('king', 0.85)]

# Lưu và load
model.save("word2vec_vi.model")
loaded = Word2Vec.load("word2vec_vi.model")
```

---

## 3. GloVe (Global Vectors)

### Ý tưởng

GloVe xây dựng **co-occurrence matrix** từ toàn bộ corpus, rồi factorize:

$$J = \sum_{i,j=1}^{V} f(X_{ij})(w_i^T \tilde{w}_j + b_i + \tilde{b}_j - \log X_{ij})^2$$

```python
# Sử dụng pre-trained GloVe
import gensim.downloader as api

glove = api.load("glove-wiki-gigaword-100")  # 100d vectors

# Tìm từ tương tự
print(glove.most_similar("computer", topn=5))
# [('computers', 0.87), ('software', 0.81), ('technology', 0.78), ...]

# Analogy: king - man + woman = ?
print(glove.most_similar(positive=["king", "woman"], negative=["man"], topn=1))
# [('queen', 0.77)]
```

---

## 4. FastText

### Ưu điểm: Subword Embeddings

FastText biểu diễn từ bằng **tổng các n-gram ký tự** — xử lý được từ OOV!

```python
from gensim.models import FastText

model = FastText(
    sentences,
    vector_size=100,
    window=5,
    min_count=1,
    sg=1,  # Skip-gram
)

# Có thể lấy vector cho từ CHƯA THẤY BÃO GIỜ
vector = model.wv["từmớichưabaogiờthấy"]  # Vẫn work!
# Word2Vec sẽ báo KeyError
```

---

## 5. So sánh Word2Vec vs GloVe vs FastText

| Đặc điểm | Word2Vec | GloVe | FastText |
|-----------|----------|-------|----------|
| Phương pháp | Prediction (local context) | Count (global statistics) | Prediction + subword |
| OOV handling | Không | Không | Có (subword n-grams) |
| Morphology | Không | Không | Có |
| Training speed | Nhanh | Nhanh | Chậm hơn |
| Chất lượng | Tốt | Tốt | Tốt nhất cho morphologically-rich languages |

---

## 6. Visualize Embeddings

```python
from sklearn.manifold import TSNE
import matplotlib.pyplot as plt
import numpy as np

words = ["king", "queen", "man", "woman", "prince", "princess",
         "dog", "cat", "fish", "bird",
         "python", "java", "code", "programming"]

vectors = np.array([glove[w] for w in words])

# t-SNE giảm chiều xuống 2D
tsne = TSNE(n_components=2, random_state=42, perplexity=5)
vectors_2d = tsne.fit_transform(vectors)

plt.figure(figsize=(12, 8))
for i, word in enumerate(words):
    plt.scatter(vectors_2d[i, 0], vectors_2d[i, 1])
    plt.annotate(word, xy=(vectors_2d[i, 0], vectors_2d[i, 1]),
                 fontsize=12, ha='center', va='bottom')
plt.title("Word Embeddings Visualization (t-SNE)")
plt.show()
```

---

## 7. Pre-trained Embeddings cho Tiếng Việt

| Resource | Dimensions | Vocab | Link |
|----------|-----------|-------|------|
| PhoBERT embeddings | 768 | 64K | vinai/phobert-base-v2 |
| fastText Vietnamese | 300 | 2M | cc.vi.300.bin |
| PhoW2V | 100/300 | 500K | github.com/datquocnguyen/PhoW2V |

```python
import fasttext
import fasttext.util

# Download pre-trained Vietnamese FastText
fasttext.util.download_model('vi', if_exists='ignore')
ft = fasttext.load_model('cc.vi.300.bin')

# Sử dụng
vector = ft.get_word_vector("trí_tuệ_nhân_tạo")
similar = ft.get_nearest_neighbors("lập_trình", k=5)
print(similar)
```

---

## Tổng kết

| Khái niệm | Điểm chính |
|------------|-----------|
| One-hot | Sparse, không biểu diễn nghĩa |
| Word2Vec | Dense vectors, CBOW/Skip-gram, phép toán nghĩa |
| GloVe | Global co-occurrence + factorization |
| FastText | Subword n-grams, xử lý OOV |
| Tiếng Việt | PhoW2V, fastText Vietnamese, PhoBERT |

---

## Bài tiếp theo

**Bài 6: Sentence & Document Embeddings** — Mở rộng từ word-level lên sentence-level: Sentence-BERT, E5, và ứng dụng semantic search.
