---
id: 019c9619-bb17-7017-c017-bb1700000017
title: 'Bài 17: Vector Databases — Embeddings & Semantic Search'
slug: bai-17-vector-databases
description: >-
  Hiểu sâu về embeddings và các thuật toán tìm kiếm vector. So sánh FAISS, ChromaDB,
  Qdrant, Pinecone, Weaviate — khi nào dùng loại nào. Xây dựng semantic search engine
  thực tế và khám phá multimodal embeddings với CLIP.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 4: Prompting & RAG"
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: "AI & LLM: Từ Cơ bản đến Nâng cao"
  slug: ai-llm-tu-co-ban-den-nang-cao
---

# Bài 17: Vector Databases — Embeddings & Semantic Search

## 1. Embeddings là gì?

Embedding là quá trình chuyển đổi dữ liệu (text, image, audio) thành vector số học trong không gian nhiều chiều, sao cho những thứ *có nghĩa gần nhau* thì *nằm gần nhau* trong không gian đó.

### Lịch sử tiến hóa

**Word2Vec (2013 — Google):** Embedding cấp độ từ. "king - man + woman ≈ queen". Vấn đề: mỗi từ chỉ có một vector, không phân biệt ngữ cảnh ("bank" là bờ sông hay ngân hàng?).

**ELMo / BERT (2018):** Contextual embeddings — cùng một từ có vector khác nhau tùy ngữ cảnh. Đột phá lớn.

**Sentence Transformers (2019):** Siamese networks được fine-tune để tạo ra embedding *cấp độ câu* có chất lượng cao cho similarity tasks.

**LLM Embeddings (2022+):** OpenAI `text-embedding-3`, Cohere `embed-v3`, Google `text-embedding-004` — embedding từ các model lớn, hiểu ngữ nghĩa sâu hơn.

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

Ba metric phổ biến để đo độ tương đồng giữa hai vector:

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

| Metric | Khi nào dùng | Đặc điểm |
|---|---|---|
| Cosine Similarity | Text embeddings | Bỏ qua magnitude, chỉ quan tâm hướng |
| Euclidean Distance | Image features, không normalize | Tính khoảng cách tuyệt đối |
| Dot Product | Đã normalize | Nhanh nhất, kết quả = cosine khi normalized |

## 3. ANN — Approximate Nearest Neighbor

Tìm kiếm exact nearest neighbor trong 1 tỷ vectors với 1536 chiều là không khả thi (O(n)). Các thuật toán ANN đánh đổi một chút accuracy lấy tốc độ cực cao.

### HNSW — Hierarchical Navigable Small World

Thuật toán phổ biến nhất. Xây dựng đồ thị phân cấp nhiều tầng:

- **Tầng trên:** Ít nodes, kết nối dài — điều hướng nhanh đến vùng gần đúng
- **Tầng dưới:** Nhiều nodes, kết nối ngắn — tìm chính xác trong vùng nhỏ

```
Search complexity: O(log n) thay vì O(n)
Recall@10: ~99% với cài đặt đúng
```

### IVF — Inverted File Index

Chia không gian vector thành các *cluster* (Voronoi cells). Khi search, chỉ search trong một vài cluster gần nhất:

```
Build: K-means clustering → assign vectors to clusters
Search: Find nearest clusters → search only in those clusters
```

## 4. FAISS — Facebook AI Similarity Search

FAISS là thư viện C++ (có Python binding) từ Meta — nhanh nhất cho local search, không có built-in persistence.

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

**Khi nào dùng FAISS:** Dataset nhỏ-trung bình (<10M vectors), cần tốc độ cực cao, environment không có network (edge, on-prem).

## 5. ChromaDB — Embedded, Easy to Use

ChromaDB là vector database "pin của Energizer" cho prototyping — chạy embedded trong process, không cần server riêng.

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

Qdrant (viết bằng Rust) là lựa chọn production mạnh mẽ với filtering nâng cao, payload, và nhiều tính năng enterprise.

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

Pinecone không cần quản lý infrastructure, scale tự động, nhưng có chi phí.

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

Weaviate nổi bật với khả năng multimodal (text + image) và GraphQL interface.

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

## 9. So Sánh Tổng Hợp

| | FAISS | ChromaDB | Qdrant | Pinecone | Weaviate |
|---|---|---|---|---|---|
| **Deployment** | Embedded | Embedded/Server | Self-hosted/Cloud | Managed Cloud | Self-hosted/Cloud |
| **Tốc độ** | Cực nhanh | Nhanh | Rất nhanh | Nhanh | Trung bình |
| **Filtering** | Không có | Cơ bản | Nâng cao | Metadata filter | GraphQL |
| **Multimodal** | Không | Không | Hạn chế | Không | Có (CLIP) |
| **Scale** | Đến ~100M | Đến ~1M | Hàng tỷ | Tự động | Hàng tỷ |
| **Chi phí** | Miễn phí | Miễn phí | Free tier | Tính phí | Free tier |
| **Phù hợp** | Research, local | Prototype, dev | Production | Managed prod | Multimodal |

**Khuyến nghị theo use case:**
- **Prototype / RAG đơn giản:** ChromaDB
- **Production on-premise:** Qdrant
- **Managed, không muốn ops:** Pinecone
- **Multimodal search:** Weaviate
- **Maximum speed, local:** FAISS

## 10. Code: Xây dựng Semantic Search Engine

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
                "score": 1 - results["distances"][0][i],  # convert distance to similarity
            })
        return hits

    def stats(self):
        return {"total_documents": self.collection.count()}


# Demo
engine = SemanticSearchEngine()

# Index một số tài liệu mẫu
sample_docs = [
    {"id": "1", "title": "Giới thiệu RAG", "text": "RAG kết hợp retrieval với language generation để giảm hallucination"},
    {"id": "2", "title": "Vector Database", "text": "Vector database lưu trữ embeddings và hỗ trợ tìm kiếm tương đồng ngữ nghĩa"},
    {"id": "3", "title": "Fine-tuning", "text": "Fine-tuning là quá trình tiếp tục train model trên dataset chuyên biệt"},
    {"id": "4", "title": "Prompt Engineering", "text": "Prompt engineering là kỹ thuật thiết kế câu lệnh để tối ưu output của LLM"},
    {"id": "5", "title": "LangChain", "text": "LangChain là framework Python giúp xây dựng ứng dụng dựa trên LLM dễ dàng hơn"},
]

engine.index_documents(sample_docs)

# Tìm kiếm
query = "làm sao để cải thiện độ chính xác của AI chatbot?"
results = engine.search(query, top_k=3)

print(f"\nQuery: {query}")
print("\nTop kết quả:")
for r in results:
    print(f"  [{r['score']:.4f}] {r['metadata']['title']}: {r['text'][:80]}...")
```

## 11. Multimodal Embeddings với CLIP

CLIP (Contrastive Language-Image Pre-training) của OpenAI cho phép embed cả text lẫn image vào cùng một không gian vector — text và ảnh liên quan sẽ nằm gần nhau.

```python
# pip install transformers pillow torch
from transformers import CLIPProcessor, CLIPModel
from PIL import Image
import torch
import requests

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# Embed ảnh
image = Image.open("product.jpg")
image_inputs = processor(images=image, return_tensors="pt")
with torch.no_grad():
    image_features = model.get_image_features(**image_inputs)
    image_features = image_features / image_features.norm(dim=-1, keepdim=True)

# Embed text queries
texts = ["một chú mèo đang ngủ", "xe hơi màu đỏ", "bầu trời xanh"]
text_inputs = processor(text=texts, return_tensors="pt", padding=True)
with torch.no_grad():
    text_features = model.get_text_features(**text_inputs)
    text_features = text_features / text_features.norm(dim=-1, keepdim=True)

# Tính similarity giữa ảnh và các text query
similarities = (image_features @ text_features.T).squeeze()
for text, sim in zip(texts, similarities):
    print(f"{sim:.4f} | {text}")
# Output: text mô tả đúng ảnh sẽ có similarity cao nhất
```

CLIP cho phép xây dựng hệ thống tìm kiếm ảnh bằng text (Google Images kiểu DIY) hoặc RAG với tài liệu chứa cả text lẫn hình ảnh.

## Tổng kết

Vector databases là trái tim của mọi hệ thống RAG. Hiểu rõ các metric tương đồng, thuật toán ANN (HNSW, IVF), và đặc điểm từng database sẽ giúp bạn chọn đúng công cụ cho từng tình huống. Với prototype: ChromaDB. Production on-prem: Qdrant. Managed cloud: Pinecone. Multimodal: Weaviate. Cần speed tối đa local: FAISS.
