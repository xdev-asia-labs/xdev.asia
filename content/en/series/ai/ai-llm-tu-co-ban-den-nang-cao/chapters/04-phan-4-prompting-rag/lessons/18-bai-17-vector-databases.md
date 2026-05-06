---
id: 019c9619-bb17-7017-c017-bb1700000017
title: 'Lesson 17: Vector Databases — Embeddings & Semantic Search'
slug: bai-17-vector-databases
description: >-
  Deep understanding of embeddings and vector search algorithms. Compare FAISS,
  ChromaDB, Qdrant, Pinecone, Weaviate — when to use which. Build a practical
  semantic search engine and explore multimodal embeddings with CLIP.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 16
section_title: 'Part 4: Prompting & RAG'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI & LLM: From Basics to Advanced'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5166" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5166)"/>

  <!-- Decorations -->
  <g>
    <circle cx="930" cy="220" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="760" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1090" cy="260" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="920" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="40" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="240" x2="1100" y2="320" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="270" x2="1050" y2="340" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1020.3108891324554,172.5 1020.3108891324554,207.5 990,225 959.6891108675446,207.5 959.6891108675446,172.5 990,155" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI & ML — Lesson 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 17: Vector Databases — Embeddings &</tspan>
      <tspan x="60" dy="42">Semantic Search</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI & LLM: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Prompting & RAG</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# Lesson 17: Vector Databases — Embeddings & Semantic Search

## 1. What are Embeddings?

Embedding is the process of converting data (text, image, audio) into arithmetic vectors in a high-dimensional space, so that things that are *meaningfully close to each other* are *located close to each other* in that space.

### Evolutionary history

**Word2Vec (2013 — Google):** Word-level embedding. "king - man + woman ≈ queen". Problem: each word has only one vector, regardless of context ("bank" is a riverbank or a bank?).

**ELMo / BERT (2018):** Contextual embeddings — the same word has different vectors depending on the context. Big breakthrough.

**Sentence Transformers (2019):** Siamese networks are fine-tuned to create high-quality *sentence-level* embedding for similarity tasks.

**LLM Embeddings (2022+):** OpenAI `text-embedding-3`, Cohere `embed-v3`, Google `text-embedding-004` — embedding from large models, understanding deeper semantics.

```python
import numpy as np
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("BAAI/bge-m3")  # hỗ trợ tiếng Việt

sentences = [
    "Hà Nội là thủ đô của Việt Nam",
    "Thành phố Hà Nội nằm ở miền Bắc",
    "Python là ngôn ngữ lập trình phổ biến",
]

embeddings = model.encode(sentences, normalize_embeddings=True)
print(f"Shape: {embeddings.shape}")  # (3, 1024) — 3 câu, 1024 chiều
```

## 2. Cosine Similarity vs Euclidean Distance vs Dot Product

Three popular metrics to measure similarity between two vectors:

```python
import numpy as np

def cosine_similarity(a, b):
    """Đo góc giữa hai vector — không phụ thuộc độ dài"""
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

def euclidean_distance(a, b):
    """Đo khoảng cách thực trong không gian"""
    return np.linalg.norm(a - b)

def dot_product(a, b):
    """Tích vô hướng — nhanh nhất, nhưng phụ thuộc độ dài vector"""
    return np.dot(a, b)

# Ví dụ minh họa
v1 = np.array([1.0, 0.0, 0.0])
v2 = np.array([0.9, 0.1, 0.0])
v3 = np.array([0.0, 0.0, 1.0])

print(f"cos(v1,v2) = {cosine_similarity(v1, v2):.4f}")   # ~0.994 — rất giống
print(f"cos(v1,v3) = {cosine_similarity(v1, v3):.4f}")   # 0.000 — vuông góc
print(f"euc(v1,v2) = {euclidean_distance(v1, v2):.4f}")  # ~0.141

# Nếu vectors đã normalize (độ dài = 1), cosine và dot product tương đương
# text-embedding-3-small trả về vectors đã normalize
```

| Metrics | When to use | Features |
|---|---|---|
| Cosine Similarity | Text embeddings | Ignore magnitude, only care about direction |
| Euclidean Distance | Image features, no normalize | Calculate absolute distance |
| Dot Product | Normalized | Fastest, result = cosine when normalized |

## 3. ANN — Approximate Nearest Neighbor

Finding the exact nearest neighbor in 1 billion vectors with 1536 dimensions is not feasible (O(n)). ANN algorithms trade a little accuracy for extreme speed.

### HNSW — Hierarchical Navigable Small World

The most popular algorithm. Build a multi-layer hierarchical graph:

- **Upper layer:** Few nodes, long connections — quick navigation to approximate area
- **Lower layer:** Many nodes, short connections — accurate search in small areas

```
Search complexity: O(log n) thay vì O(n)
Recall@10: ~99% với cài đặt đúng
```

### IVF — Inverted File Index

Divide the vector space into *clusters* (Voronoi cells). When searching, only search in the nearest few clusters:

```
Build: K-means clustering → assign vectors to clusters
Search: Find nearest clusters → search only in those clusters
```

## 4. FAISS — Facebook AI Similarity Search

FAISS is a C++ library (with Python binding) from Meta — fastest for local search, no built-in persistence.

```python
import faiss
import numpy as np

# Tạo index HNSW
dimension = 1536  # text-embedding-3-small
index = faiss.IndexHNSWFlat(dimension, 32)  # 32 = số kết nối mỗi node
index.hnsw.efConstruction = 40  # trade-off: build time vs quality

# Thêm vectors
num_vectors = 10000
vectors = np.random.random((num_vectors, dimension)).astype("float32")
faiss.normalize_L2(vectors)  # normalize cho cosine similarity
index.add(vectors)

# Search
query = np.random.random((1, dimension)).astype("float32")
faiss.normalize_L2(query)

k = 5  # top-5
distances, indices = index.search(query, k)
print(f"Top-5 indices: {indices[0]}")
print(f"Distances: {distances[0]}")

# Lưu và load
faiss.write_index(index, "my_index.faiss")
loaded_index = faiss.read_index("my_index.faiss")

# IVF index cho datasets lớn (>1M vectors)
nlist = 100  # số clusters
quantizer = faiss.IndexFlatL2(dimension)
ivf_index = faiss.IndexIVFFlat(quantizer, dimension, nlist)
ivf_index.train(vectors)  # phải train trước
ivf_index.add(vectors)
ivf_index.nprobe = 10  # search trong 10 clusters gần nhất
```

**When to use FAISS:** Small-medium dataset (<10M vectors), needs extremely high speed, environment without network (edge, on-prem).

## 5. ChromaDB — Embedded, Easy to Use

ChromaDB is the "Energizer battery" vector database for prototyping — running embedded in the process, no need for a separate server.

```python
import chromadb
from chromadb.utils import embedding_functions

# Embedded mode (lưu xuống disk)
client = chromadb.PersistentClient(path="./chroma_data")

# Dùng OpenAI embeddings
openai_ef = embedding_functions.OpenAIEmbeddingFunction(
    api_key="your-key",
    model_name="text-embedding-3-small",
)

collection = client.get_or_create_collection(
    name="documents",
    embedding_function=openai_ef,
    metadata={"hnsw:space": "cosine"},
)

# Thêm documents (ChromaDB tự embed nếu có embedding function)
collection.add(
    documents=[
        "RAG là kỹ thuật kết hợp retrieval với generation",
        "Vector database lưu embeddings và hỗ trợ similarity search",
        "Fine-tuning điều chỉnh weights của pre-trained model",
    ],
    metadatas=[
        {"category": "rag", "difficulty": "intermediate"},
        {"category": "database", "difficulty": "beginner"},
        {"category": "training", "difficulty": "advanced"},
    ],
    ids=["doc1", "doc2", "doc3"],
)

# Query với metadata filtering
results = collection.query(
    query_texts=["làm thế nào để tìm kiếm thông tin?"],
    n_results=2,
    where={"difficulty": {"$ne": "advanced"}},  # loại trừ advanced
)
print(results["documents"])
print(results["distances"])
```

## 6. Qdrant — Production-Ready

Qdrant (written in Rust) is a powerful production option with advanced filtering, payloads, and many enterprise features.

```python
from qdrant_client import QdrantClient
from qdrant_client.models import (
    Distance, VectorParams, PointStruct, Filter, FieldCondition, MatchValue
)
import uuid

# Kết nối (local hoặc cloud)
client = QdrantClient(url="http://localhost:6333")
# client = QdrantClient(url="https://xxx.qdrant.io", api_key="your-key")

# Tạo collection
client.create_collection(
    collection_name="articles",
    vectors_config=VectorParams(size=1536, distance=Distance.COSINE),
)

# Upsert points với payload phong phú
points = [
    PointStruct(
        id=str(uuid.uuid4()),
        vector=[0.1] * 1536,  # thay bằng embedding thực
        payload={
            "title": "Giới thiệu RAG",
            "author": "Nguyen Van A",
            "category": "AI",
            "published_year": 2024,
            "tags": ["rag", "llm", "retrieval"],
        },
    )
]
client.upsert(collection_name="articles", points=points)

# Search với filter phức tạp
results = client.search(
    collection_name="articles",
    query_vector=[0.1] * 1536,
    limit=5,
    query_filter=Filter(
        must=[
            FieldCondition(key="category", match=MatchValue(value="AI")),
            FieldCondition(key="published_year", range={"gte": 2023}),
        ]
    ),
    with_payload=True,
)

for r in results:
    print(f"Score: {r.score:.4f} | Title: {r.payload['title']}")
```

## 7. Pinecone — Managed Cloud

Pinecone does not need infrastructure management or automatic scaling, but there is a cost.

```python
from pinecone import Pinecone, ServerlessSpec

pc = Pinecone(api_key="your-pinecone-key")

# Tạo index serverless
pc.create_index(
    name="my-rag-index",
    dimension=1536,
    metric="cosine",
    spec=ServerlessSpec(cloud="aws", region="us-east-1"),
)

index = pc.Index("my-rag-index")

# Upsert với namespaces (phân chia logical)
index.upsert(
    vectors=[
        {"id": "v1", "values": [0.1] * 1536, "metadata": {"text": "...", "source": "doc1.pdf"}},
        {"id": "v2", "values": [0.2] * 1536, "metadata": {"text": "...", "source": "doc2.pdf"}},
    ],
    namespace="production",
)

# Query
results = index.query(
    vector=[0.15] * 1536,
    top_k=5,
    namespace="production",
    include_metadata=True,
)
```

## 8. Weaviate — Multimodal, GraphQL

Weaviate stands out with its multimodal capabilities (text + image) and GraphQL interface.

```python
import weaviate
from weaviate.classes.init import Auth

client = weaviate.connect_to_weaviate_cloud(
    cluster_url="https://xxx.weaviate.network",
    auth_credentials=Auth.api_key("your-key"),
)

# Schema được define qua Collections
from weaviate.classes.config import Configure, Property, DataType

client.collections.create(
    name="Article",
    vectorizer_config=Configure.Vectorizer.text2vec_openai(),
    properties=[
        Property(name="title", data_type=DataType.TEXT),
        Property(name="content", data_type=DataType.TEXT),
        Property(name="category", data_type=DataType.TEXT),
    ],
)

# Query bằng near_text (semantic search)
articles = client.collections.get("Article")
response = articles.query.near_text(
    query="machine learning applications",
    limit=5,
    return_metadata=["distance"],
)
```

## 9. General Comparison

| | FAISS | ChromaDB | Qdrant | Pinecone | Weaviate |
|---|---|---|---|---|---|
| **Deployment** | Embedded | Embedded/Server | Self-hosted/Cloud | Managed Cloud | Self-hosted/Cloud |
| **Speed** | Extremely fast | Fast | Very fast | Fast | Average |
| **Filtering** | None | Basic | Advanced | Metadata filter | GraphQL |
| **Multimodal** | No | No | Limitations | No | Yes (CLIP) |
| **Scale** | Up to ~100M | Up to ~1M | Billions | Automatic | Billions |
| **Cost** | Free | Free | Free tier | Charge | Free tier |
| **Suitable** | Research, local | Prototype, dev | Production | Managed prod | Multimodal |

**Recommendation according to use case:**
- **Simple Prototype / RAG:** ChromaDB
- **Production on-premise:** Qdrant
- **Managed, don't want ops:** Pinecone
- **Multimodal search:** Weaviate
- **Maximum speed, local:** FAISS

## 10. Code: Build Semantic Search Engine

```python
# pip install sentence-transformers chromadb pandas

import chromadb
from sentence_transformers import SentenceTransformer
import pandas as pd
import json

class SemanticSearchEngine:
    def __init__(self, collection_name: str = "knowledge_base"):
        self.model = SentenceTransformer("BAAI/bge-m3")
        self.client = chromadb.PersistentClient(path="./search_db")
        self.collection = self.client.get_or_create_collection(
            name=collection_name,
            metadata={"hnsw:space": "cosine"},
        )

    def index_documents(self, documents: list[dict]):
        """
        documents: [{"id": "1", "text": "...", "title": "...", "url": "..."}]
        """
        texts = [d["text"] for d in documents]
        print(f"Embedding {len(texts)} documents...")
        embeddings = self.model.encode(texts, normalize_embeddings=True, show_progress_bar=True)

        self.collection.add(
            embeddings=embeddings.tolist(),
            documents=texts,
            metadatas=[{"title": d.get("title", ""), "url": d.get("url", "")} for d in documents],
            ids=[d["id"] for d in documents],
        )
        print(f"Indexed {len(documents)} documents!")

    def search(self, query: str, top_k: int = 5) -> list[dict]:
        query_embedding = self.model.encode([query], normalize_embeddings=True)
        results = self.collection.query(
            query_embeddings=query_embedding.tolist(),
            n_results=top_k,
        )

        hits = []
        for i in range(len(results["ids"][0])):
            hits.append({
                "id": results["ids"][0][i],
                "text": results["documents"][0][i],
                "metadata": results["metadatas"][0][i],
                "score": 1 - results["distances"][0][i], # convert distance to similarity
            })
        return hits

    def stats(self):
        return {"total_documents": self.collection.count()}


# Demo
engine = SemanticSearchEngine()

# Index some sample documents
sample_docs = [
    {"id": "1", "title": "Introducing RAG", "text": "RAG combines retrieval with language generation to reduce hallucination"},
    {"id": "2", "title": "Vector Database", "text": "Vector database stores embeddings and supports semantic similarity search"},
    {"id": "3", "title": "Fine-tuning", "text": "Fine-tuning is the process of continuing to train the model on a specialized dataset"},
    {"id": "4", "title": "Prompt Engineering", "text": "Prompt engineering is a command design technique to optimize the output of LLM"},
    {"id": "5", "title": "LangChain", "text": "LangChain is a Python framework that makes building LLM-based applications easier"},
]

engine.index_documents(sample_docs)

# Search
query = "how to improve the accuracy of AI chatbot?"
results = engine.search(query, top_k=3)

print(f"\nQuery: {query}")
print("\nTop results:")
for r in results:
    print(f" [{r['score']:.4f}] {r['metadata']['title']}: {r['text'][:80]}...")
```

## 11. Multimodal Embeddings with CLIP

OpenAI's CLIP (Contrastive Language-Image Pre-training) allows embedding both text and images into the same vector space — the text and related images will be close to each other.

```python
# pip install transformers pillow torch
from transformers import CLIPProcessor, CLIPModel
from PIL import Image
import torch
import requests

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# Embed photos
image = Image.open("product.jpg")
image_inputs = processor(images=image, return_tensors="pt")
with torch.no_grad():
    image_features = model.get_image_features(**image_inputs)
    image_features = image_features / image_features.norm(dim=-1, keepdim=True)

# Embed text queries
texts = ["a sleeping cat", "red car", "blue sky"]
text_inputs = processor(text=texts, return_tensors="pt", padding=True)
with torch.no_grad():
    text_features = model.get_text_features(**text_inputs)
    text_features = text_features / text_features.norm(dim=-1, keepdim=True)

# Calculate similarity between images and text queries
similar = (image_features @ text_features.T).squeeze()
for text, sim in zip(texts, similar):
    print(f"{sim:.4f} | {text}")
# Output: text that correctly describes the image will have the highest similarity
```

CLIP allows building an image search system using text (Google Images DIY style) or RAG with documents containing both text and images.

## Summary

Vector databases are the heart of every RAG system. Understanding similarity metrics, ANN algorithms (HNSW, IVF), and each database's characteristics will help you choose the right tool for each situation. With prototype: ChromaDB. Production on-prem: Qdrant. Managed cloud: Pinecone. Multimodal: Weaviate. Requires maximum local speed: FAISS.
