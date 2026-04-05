---
id: 019d8b30-bb06-7006-c006-ee0600000006
title: 'Bài 6: Sentence & Document Embeddings — Từ Doc2Vec đến Sentence-BERT'
slug: bai-6-sentence-document-embeddings
description: >-
  Doc2Vec và Paragraph Vectors. Sentence embeddings: average pooling,
  Sentence-BERT, E5, BGE. Semantic similarity và cosine distance.
  Ứng dụng: semantic search, clustering, deduplication. Demo với
  Sentence-Transformers library.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Biểu diễn Ngôn ngữ — Từ BoW đến Word Embeddings"
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: "NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên"
  slug: nlp-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9694" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9694)"/>

  <!-- Decorations -->
  <g>
    <circle cx="954" cy="212" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="808" cy="186" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="662" cy="160" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="1016" cy="134" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="870" cy="108" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="192" x2="1100" y2="272" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="222" x2="1050" y2="292" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1065.38268590218,228.5 1065.38268590218,255.5 1042,269 1018.6173140978201,255.5 1018.6173140978201,228.5 1042,215" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🧠 AI &amp; ML — Bài 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 6: Sentence &amp; Document Embeddings — Từ</tspan>
      <tspan x="60" dy="42">Doc2Vec đến Sentence-BERT</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP từ Cơ bản đến Nâng cao: Làm chủ Xử lý Ngôn ngữ Tự nhiên</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Biểu diễn Ngôn ngữ — Từ BoW đến Word Embeddings</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Word embeddings biểu diễn **từng từ** — nhưng trong thực tế, ta cần so sánh **câu** hoặc **tài liệu** với nhau. Sentence embeddings biến mỗi câu thành một vector duy nhất, cho phép tính **semantic similarity** — nền tảng của semantic search, RAG, và nhiều ứng dụng NLP hiện đại.

---

## 1. Từ Word đến Sentence Embeddings

### Phương pháp đơn giản: Average Pooling

```python
import numpy as np

def average_embedding(words, model):
    """Trung bình vector của các từ trong câu."""
    vectors = [model[w] for w in words if w in model]
    if not vectors:
        return np.zeros(model.vector_size)
    return np.mean(vectors, axis=0)

sentence = ["xử", "lý", "ngôn", "ngữ", "tự", "nhiên"]
sent_vec = average_embedding(sentence, word2vec_model)
# Shape: (100,) — một vector duy nhất cho cả câu
```

> ⚠️ Average pooling mất **thông tin thứ tự** và **context** — "not good" sẽ gần "good"!

---

## 2. Sentence-BERT (SBERT)

### Ý tưởng

Fine-tune BERT với **Siamese network** để tạo sentence embeddings chất lượng cao.

```python
from sentence_transformers import SentenceTransformer, util

# Load pre-trained model
model = SentenceTransformer('all-MiniLM-L6-v2')

# Encode sentences
sentences = [
    "NLP là lĩnh vực xử lý ngôn ngữ tự nhiên",
    "Xử lý ngôn ngữ tự nhiên thuộc về AI",
    "Hôm nay thời tiết đẹp quá",
]
embeddings = model.encode(sentences)
print(embeddings.shape)  # (3, 384)

# Tính cosine similarity
similarities = util.cos_sim(embeddings, embeddings)
print(similarities)
# tensor([[1.0000, 0.8234, 0.0512],  ← câu 1 & 2 rất giống
#         [0.8234, 1.0000, 0.0389],
#         [0.0512, 0.0389, 1.0000]])  ← câu 3 rất khác
```

### Các model phổ biến

| Model | Dimensions | Speed | Quality | Use case |
|-------|-----------|-------|---------|----------|
| all-MiniLM-L6-v2 | 384 | Nhanh | Tốt | General purpose |
| all-mpnet-base-v2 | 768 | Trung bình | Rất tốt | Khi cần quality cao |
| intfloat/e5-large-v2 | 1024 | Chậm | Xuất sắc | Production search |
| BAAI/bge-m3 | 1024 | Chậm | Xuất sắc | Multilingual (tiếng Việt) |

---

## 3. Ứng dụng: Semantic Search

```python
from sentence_transformers import SentenceTransformer, util
import torch

model = SentenceTransformer('all-MiniLM-L6-v2')

# "Database" tài liệu
documents = [
    "Python là ngôn ngữ lập trình phổ biến nhất cho AI",
    "JavaScript thống trị lĩnh vực web development",
    "Docker giúp đóng gói ứng dụng thành containers",
    "Kubernetes orchestrate containers trên production",
    "NLP giúp máy tính hiểu ngôn ngữ con người",
    "Computer Vision xử lý hình ảnh và video",
]
doc_embeddings = model.encode(documents, convert_to_tensor=True)

# Search
query = "làm sao để deploy ứng dụng?"
query_embedding = model.encode(query, convert_to_tensor=True)

# Tìm top-3 tài liệu liên quan nhất
scores = util.cos_sim(query_embedding, doc_embeddings)[0]
top_results = torch.topk(scores, k=3)

print("Query:", query)
for score, idx in zip(top_results.values, top_results.indices):
    print(f"  [{score:.4f}] {documents[idx]}")
# [0.6234] Docker giúp đóng gói ứng dụng thành containers
# [0.5891] Kubernetes orchestrate containers trên production
# [0.1234] JavaScript thống trị lĩnh vực web development
```

---

## 4. Ứng dụng: Document Clustering

```python
from sklearn.cluster import KMeans
import numpy as np

# Encode documents
embeddings = model.encode(documents)

# K-Means clustering
kmeans = KMeans(n_clusters=3, random_state=42)
clusters = kmeans.fit_predict(embeddings)

for i, (doc, cluster) in enumerate(zip(documents, clusters)):
    print(f"  Cluster {cluster}: {doc}")
```

---

## 5. Ứng dụng: Deduplication

```python
from sentence_transformers import util

texts = [
    "NLP xử lý ngôn ngữ tự nhiên",
    "Xử lý ngôn ngữ tự nhiên bằng NLP",
    "Machine learning rất thú vị",
    "ML là một lĩnh vực hấp dẫn",
    "Hôm nay trời đẹp",
]

embeddings = model.encode(texts)
cosine_scores = util.cos_sim(embeddings, embeddings)

# Tìm cặp trùng lặp (similarity > 0.8)
threshold = 0.8
duplicates = []
for i in range(len(texts)):
    for j in range(i + 1, len(texts)):
        if cosine_scores[i][j] > threshold:
            duplicates.append((i, j, cosine_scores[i][j].item()))
            print(f"  Duplicate: [{cosine_scores[i][j]:.4f}]")
            print(f"    A: {texts[i]}")
            print(f"    B: {texts[j]}")
```

---

## Tổng kết

| Phương pháp | Chất lượng | Tốc độ | OOV | Multilingual |
|------------|----------|--------|-----|-------------|
| Average Word2Vec | Thấp | Nhanh | Không | Không |
| Doc2Vec | Trung bình | Nhanh | Không | Không |
| Sentence-BERT | Cao | Trung bình | Có | Tùy model |
| E5 / BGE | Rất cao | Chậm hơn | Có | Có |

---

## Bài tiếp theo

**Bài 7: RNN & LSTM** — Bước vào thế giới deep learning cho NLP: xử lý chuỗi tuần tự với recurrent neural networks.
