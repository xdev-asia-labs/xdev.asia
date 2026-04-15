---
id: 019e0a01-bb09-7001-c001-ee0900000001
title: "Bài 9: Vector Database — FAISS, Milvus, Pinecone"
slug: bai-9-vector-database-faiss-milvus-pinecone
description: >-
  Vector DB concepts: indexing (IVF, HNSW, PQ), similarity search. FAISS cho local development. Milvus distributed setup. Pinecone managed service. Chroma, Weaviate alternatives. Performance benchmarks, cost comparison.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: RAG, Embeddings & Vector Database"
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: "AI Agent Engineer: Từ Zero đến Production"
  slug: ai-agent-engineer-tu-zero-den-production
---

> **1 triệu vectors, tìm top-10 gần nhất trong 5ms — không phải phép thuật, mà là Vector Database.** Ở Bài 8 ta đã biến text thành embeddings. Nhưng khi hệ thống có hàng triệu documents, brute-force scan từng vector sẽ tốn hàng giây, thậm chí phút. Vector Database giải quyết bài toán này bằng **indexing algorithms** thông minh — đánh đổi một chút accuracy để đạt tốc độ gấp 1000x. Bài này đi sâu vào FAISS, Chroma, Milvus, Pinecone — từ local prototype đến production-grade distributed system.

---

## 1. Tại sao cần Vector Database?

### 1.1. Brute-Force Search — đơn giản nhưng không scale

Cách đơn giản nhất: so sánh query vector với **mọi** vector trong database.

```python
import numpy as np

def brute_force_search(query: np.ndarray, vectors: np.ndarray, top_k: int = 5):
    """So sánh query với TẤT CẢ vectors — O(n * d)"""
    # Tính cosine similarity với toàn bộ dataset
    similarities = np.dot(vectors, query) / (
        np.linalg.norm(vectors, axis=1) * np.linalg.norm(query)
    )
    # Lấy top-k indices
    top_indices = np.argsort(similarities)[-top_k:][::-1]
    return top_indices, similarities[top_indices]

# Test với 100K vectors, 768 chiều
vectors = np.random.rand(100_000, 768).astype("float32")
query = np.random.rand(768).astype("float32")

import time
start = time.time()
indices, scores = brute_force_search(query, vectors, top_k=10)
elapsed = time.time() - start
print(f"Brute-force 100K vectors: {elapsed*1000:.1f}ms")
# Output: ~50-150ms tuỳ CPU
```

### 1.2. Vấn đề khi scale

| Số vectors | Brute-force latency | Chấp nhận được? |
|-----------|-------------------|-----------------|
| 10K | ~5ms | ✅ OK |
| 100K | ~50ms | ⚠️ Chậm |
| 1M | ~500ms | ❌ Quá chậm |
| 10M | ~5 giây | ❌ Không thể dùng |
| 100M | ~50 giây | ❌ Thảm hoạ |

**Kết luận:** Brute-force là **O(n × d)** — linear với dataset size. Với production workloads (millions of vectors, QPS > 100), ta cần **Approximate Nearest Neighbor (ANN)** search.

### 1.3. ANN — đánh đổi accuracy lấy speed

```text
┌────────────────────────────────────────────────────────────┐
│              Exact vs Approximate Search                   │
├──────────────────────┬─────────────────────────────────────┤
│   Brute-Force (KNN)  │   Approximate (ANN)                 │
│                      │                                     │
│   Query ──→ scan ALL │   Query ──→ scan SUBSET             │
│   ●●●●●●●●●●●●●●●●  │   ●●●○○○○○○○○○○○○○                 │
│   ●●●●●●●●●●●●●●●●  │   ○○○○○●●●○○○○○○○○                 │
│   ●●●●●●●●●●●●●●●●  │   ○○○○○○○○○○●●●○○○                 │
│                      │                                     │
│   Recall: 100%       │   Recall: 95-99%                    │
│   Latency: O(n*d)    │   Latency: O(log n) ~ O(√n)        │
│   1M → 500ms         │   1M → 1-5ms ⚡                     │
└──────────────────────┴─────────────────────────────────────┘
```

> **Key insight:** Trong hầu hết use-case RAG, recall 95-99% là **đủ tốt**. User không nhận ra sự khác biệt giữa "top-10 chính xác" và "top-10 gần chính xác", nhưng latency từ 500ms xuống 2ms là **game-changer**.

---

## 2. Vector Indexing Algorithms

### 2.1. Flat Index — baseline, exact search

Không có indexing, lưu toàn bộ vectors và scan linear. Dùng làm **ground truth** để đánh giá các thuật toán ANN.

```text
Flat Index:
┌─────────────────────────────────────────┐
│  v1  v2  v3  v4  v5  v6  ...  vN       │
│  ●   ●   ●   ●   ●   ●       ●        │
│                                         │
│  Query q → compare with ALL N vectors   │
│  Time: O(N × d)                         │
│  Recall: 100% (exact)                   │
└─────────────────────────────────────────┘
```

### 2.2. IVF (Inverted File Index) — partition-based

Chia vector space thành **nlist** clusters (dùng k-means). Khi search, chỉ scan **nprobe** clusters gần query nhất.

```text
IVF Index (nlist=4, nprobe=2):

  Cluster 1        Cluster 2        Cluster 3        Cluster 4
  ┌─────────┐      ┌─────────┐      ┌─────────┐      ┌─────────┐
  │ ● ● ●   │      │ ● ● ●   │      │ ●  ● ●  │      │  ● ● ●  │
  │  ● ●    │      │  ● ● ●  │      │ ● ●     │      │ ●    ●  │
  │   ●     │      │    ●    │      │  ●      │      │   ● ●   │
  │  (C1)   │      │  (C2)   │      │  (C3)   │      │  (C4)   │
  └─────────┘      └─────────┘      └─────────┘      └─────────┘

  Query q → find 2 nearest centroids → scan only those clusters
  ════════════════════════════════════
  q closest to C2, C3 → scan only Cluster 2 + Cluster 3
  Vectors scanned: ~N/2 instead of N
```

**Trade-offs:**
- `nlist` lớn → clusters nhỏ → search nhanh, nhưng train lâu hơn
- `nprobe` lớn → recall cao hơn, nhưng chậm hơn

### 2.3. HNSW (Hierarchical Navigable Small World) — graph-based

Xây dựng multi-layer graph. Layer trên là "highway" kết nối xa, layer dưới là local connections chi tiết.

```text
HNSW Multi-Layer Graph:

Layer 2 (sparse):     A ────────────────── F
                      │                    │
Layer 1 (medium):     A ──── C ──── E ──── F
                      │      │      │      │
Layer 0 (dense):      A ─ B ─ C ─ D ─ E ── F ─ G ─ H
                      │   │   │   │   │    │   │   │

Search: start from top layer → greedy walk → descend → refine
- Top layer: big jumps (long-range connections)
- Bottom layer: fine-grained local search
- Complexity: O(log N)
```

**Đặc điểm:**
- **Pros:** Recall rất cao (~99%), latency ổn định, không cần training
- **Cons:** Memory overhead cao (lưu graph structure), build time lâu

### 2.4. PQ (Product Quantization) — compression-based

Chia vector thành **m** sub-vectors, mỗi sub-vector được quantize thành 1 byte (256 centroids).

```text
Product Quantization (m=4 sub-vectors):

Original vector (768-d):
[0.23, -0.45, 0.87, ..., 0.12, -0.33, 0.56, ..., 0.91]
 ├─── sub 1 (192-d) ───┤├─── sub 2 (192-d) ───┤...

Quantized:
sub1 → codebook_id: 42
sub2 → codebook_id: 187
sub3 → codebook_id: 5
sub4 → codebook_id: 203

Storage: 768 × 4 bytes = 3072 bytes  →  4 × 1 byte = 4 bytes
Compression ratio: ~768x !!
```

### 2.5. ScaNN (Scalable Nearest Neighbors) — Google's approach

Kết hợp **anisotropic vector quantization** + tree-based partitioning. Đặc biệt tối ưu cho inner product search.

### 2.6. So sánh các thuật toán

| Algorithm | Search Time | Memory | Build Time | Recall@10 | Best For |
|-----------|------------|--------|------------|-----------|----------|
| **Flat** | O(n×d) | 1x | None | 100% | < 50K vectors, ground truth |
| **IVF** | O(√n × d) | 1x + centroids | Medium | 90-98% | Medium datasets, tunable |
| **HNSW** | O(log n) | 1.5-2x | Slow | 95-99% | High recall, low latency |
| **PQ** | O(n × m) | 0.01-0.1x | Slow | 80-95% | Memory-constrained |
| **IVF+PQ** | O(√n × m) | 0.01x + centroids | Slow | 85-95% | Large-scale production |
| **ScaNN** | O(√n) | 1x | Medium | 95-99% | Google-scale, MIPS |

> **Thực tế:** Phần lớn production systems dùng **HNSW** (cho recall cao) hoặc **IVF+PQ** (cho dataset lớn, memory-limited). FAISS, Milvus, Pinecone đều support cả hai.

---

## 3. FAISS Deep-Dive

### 3.1. FAISS là gì?

**FAISS** (Facebook AI Similarity Search) là thư viện vector search của Meta, viết bằng C++ với Python bindings. Đặc điểm: **chạy local, tốc độ cực nhanh, GPU support**.

```bash
# Cài đặt
pip install faiss-cpu    # CPU-only
# hoặc
pip install faiss-gpu    # GPU support (cần CUDA)
```

### 3.2. IndexFlatL2 — Exact Search Baseline

```python
import faiss
import numpy as np

# ============================
# 1. Tạo sample data
# ============================
d = 768          # dimension (giống OpenAI ada-002 output)
nb = 100_000     # database size
nq = 10          # number of queries

np.random.seed(42)
xb = np.random.rand(nb, d).astype("float32")  # database vectors
xq = np.random.rand(nq, d).astype("float32")  # query vectors

# ============================
# 2. IndexFlatL2 — brute-force L2 distance
# ============================
index_flat = faiss.IndexFlatL2(d)
print(f"Is trained: {index_flat.is_trained}")   # True (no training needed)
print(f"Total vectors: {index_flat.ntotal}")    # 0

index_flat.add(xb)  # Add vectors
print(f"Total vectors: {index_flat.ntotal}")    # 100000

# ============================
# 3. Search
# ============================
import time

k = 10  # top-10
start = time.time()
distances, indices = index_flat.search(xq, k)
elapsed = time.time() - start

print(f"Search time (10 queries × 100K vectors): {elapsed*1000:.1f}ms")
print(f"Top-5 results for query 0:")
for i in range(5):
    print(f"  [{i}] vector_id={indices[0][i]}, distance={distances[0][i]:.4f}")
```

### 3.3. IndexIVFFlat — Partition-based Search

```python
# ============================
# IVF Index: nlist clusters, scan nprobe
# ============================
nlist = 100    # number of clusters
nprobe = 10   # clusters to scan at search time

# IVF cần một quantizer (dùng FlatL2 cho centroids)
quantizer = faiss.IndexFlatL2(d)
index_ivf = faiss.IndexIVFFlat(quantizer, d, nlist)

# IVF cần training (learn cluster centroids)
print(f"Is trained: {index_ivf.is_trained}")  # False
index_ivf.train(xb)  # Train on database vectors
print(f"Is trained: {index_ivf.is_trained}")  # True

index_ivf.add(xb)
print(f"Total vectors: {index_ivf.ntotal}")

# Set nprobe (tuneable recall vs speed)
index_ivf.nprobe = nprobe

start = time.time()
distances, indices = index_ivf.search(xq, k)
elapsed = time.time() - start

print(f"IVF search time: {elapsed*1000:.1f}ms")
print(f"Speedup vs Flat: ~{50/max(elapsed*1000, 0.1):.1f}x")  # Rough comparison

# ============================
# Recall comparison: IVF vs Flat
# ============================
def compute_recall(pred_indices, true_indices, k):
    """Tính recall@k: bao nhiêu kết quả ANN nằm trong true top-k"""
    recalls = []
    for pred, true in zip(pred_indices, true_indices):
        recall = len(set(pred[:k]) & set(true[:k])) / k
        recalls.append(recall)
    return np.mean(recalls)

# Ground truth từ Flat index
_, gt_indices = index_flat.search(xq, k)

recall = compute_recall(indices, gt_indices, k)
print(f"Recall@{k} with nprobe={nprobe}: {recall:.3f}")
```

### 3.4. IndexHNSWFlat — Graph-based Search

```python
# ============================
# HNSW Index
# ============================
M = 32      # number of connections per node (higher → better recall, more memory)
ef_construction = 200   # construction-time search depth

index_hnsw = faiss.IndexHNSWFlat(d, M)
index_hnsw.hnsw.efConstruction = ef_construction
index_hnsw.hnsw.efSearch = 64  # search-time depth (tuneable)

# HNSW không cần train, nhưng add chậm hơn (build graph)
start = time.time()
index_hnsw.add(xb)
build_time = time.time() - start
print(f"HNSW build time: {build_time:.1f}s")

start = time.time()
distances, indices = index_hnsw.search(xq, k)
elapsed = time.time() - start
print(f"HNSW search time: {elapsed*1000:.1f}ms")

recall = compute_recall(indices, gt_indices, k)
print(f"HNSW Recall@{k}: {recall:.3f}")
```

### 3.5. Composite Index — IVF + PQ cho large-scale

```python
# ============================
# IVF + PQ: best for millions of vectors
# ============================
nlist = 256
m = 48       # number of sub-quantizers (d phải chia hết cho m)
nbits = 8    # bits per sub-quantizer (8 → 256 centroids per sub)

quantizer = faiss.IndexFlatL2(d)
index_ivfpq = faiss.IndexIVFPQ(quantizer, d, nlist, m, nbits)

# Train (cần ít nhất nlist * 40 vectors)
index_ivfpq.train(xb)
index_ivfpq.add(xb)
index_ivfpq.nprobe = 16

start = time.time()
distances, indices = index_ivfpq.search(xq, k)
elapsed = time.time() - start
print(f"IVF+PQ search time: {elapsed*1000:.1f}ms")

recall = compute_recall(indices, gt_indices, k)
print(f"IVF+PQ Recall@{k}: {recall:.3f}")

# Kiểm tra memory usage
flat_size = nb * d * 4  # float32 = 4 bytes
pq_size = nb * m * 1    # 1 byte per sub-quantizer
print(f"Flat memory:   {flat_size / 1e6:.0f} MB")
print(f"IVF+PQ memory: {pq_size / 1e6:.0f} MB")
print(f"Compression:   {flat_size / pq_size:.0f}x")
```

### 3.6. Save & Load Index

```python
# Save index to disk
faiss.write_index(index_hnsw, "my_index.faiss")

# Load index
loaded_index = faiss.read_index("my_index.faiss")
print(f"Loaded {loaded_index.ntotal} vectors")

# Search with loaded index
distances, indices = loaded_index.search(xq[:1], k)
```

### 3.7. FAISS Index Cheat Sheet

| Index | Code | Train? | Memory | Speed | Recall | Use Case |
|-------|------|--------|--------|-------|--------|----------|
| `IndexFlatL2` | `faiss.IndexFlatL2(d)` | No | High | Slow | 100% | < 50K, ground truth |
| `IndexFlatIP` | `faiss.IndexFlatIP(d)` | No | High | Slow | 100% | Cosine similarity |
| `IndexIVFFlat` | quantizer + nlist | Yes | High | Medium | 90-98% | 100K-1M vectors |
| `IndexHNSWFlat` | `faiss.IndexHNSWFlat(d, M)` | No | Very High | Fast | 95-99% | High recall needed |
| `IndexIVFPQ` | quantizer + nlist + m | Yes | Low | Fast | 85-95% | > 1M vectors |

---

## 4. Chroma — Lightweight, Local-First

### 4.1. Tại sao Chroma?

**Chroma** là vector database nhẹ nhất, thiết kế cho **prototyping nhanh** và **local development**. Tích hợp sẵn với LangChain, LlamaIndex.

```text
FAISS vs Chroma positioning:

FAISS:    Low-level library → bạn tự quản lý metadata, persistence
Chroma:   High-level DB     → built-in metadata, persistence, API
          ┌───────────────┐
          │    Chroma      │
          │  ┌───────────┐ │
          │  │  HNSW     │ │  ← Chroma dùng HNSW bên dưới
          │  │  engine    │ │
          │  └───────────┘ │
          │  + Metadata     │
          │  + Persistence  │
          │  + Collection   │
          │  + Embedding fn │
          └───────────────┘
```

### 4.2. Setup & Basic Operations

```bash
pip install chromadb
```

```python
import chromadb
from chromadb.utils import embedding_functions

# ============================
# 1. Khởi tạo Chroma client
# ============================
# In-memory (cho testing)
client = chromadb.Client()

# Persistent (cho production local)
# client = chromadb.PersistentClient(path="./chroma_db")

# ============================
# 2. Tạo collection
# ============================
# Dùng default embedding function (all-MiniLM-L6-v2)
collection = client.create_collection(
    name="my_documents",
    metadata={"hnsw:space": "cosine"},  # distance metric
)

# ============================
# 3. Thêm documents
# ============================
collection.add(
    documents=[
        "FAISS is a library for efficient similarity search by Facebook.",
        "Milvus is a distributed vector database for AI applications.",
        "Pinecone provides a managed vector database service.",
        "Chroma is a lightweight embedding database for AI.",
        "Weaviate supports hybrid search with vectors and keywords.",
        "Qdrant is a vector search engine written in Rust.",
        "PostgreSQL with pgvector supports vector similarity search.",
        "Elasticsearch can perform vector search with dense_vector fields.",
    ],
    ids=[f"doc_{i}" for i in range(8)],
    metadatas=[
        {"type": "library", "language": "C++"},
        {"type": "database", "distributed": True},
        {"type": "managed", "cloud": True},
        {"type": "database", "lightweight": True},
        {"type": "database", "hybrid_search": True},
        {"type": "database", "language": "Rust"},
        {"type": "extension", "base": "PostgreSQL"},
        {"type": "search_engine", "base": "Elasticsearch"},
    ],
)

print(f"Collection size: {collection.count()}")

# ============================
# 4. Semantic search
# ============================
results = collection.query(
    query_texts=["best vector database for production"],
    n_results=3,
)

for i, (doc, dist, meta) in enumerate(zip(
    results["documents"][0],
    results["distances"][0],
    results["metadatas"][0],
)):
    print(f"[{i}] (dist={dist:.4f}) {doc}")
    print(f"    metadata: {meta}")

# ============================
# 5. Metadata filtering
# ============================
results = collection.query(
    query_texts=["vector search engine"],
    n_results=5,
    where={"type": "database"},  # chỉ tìm trong type=database
)
print("\nFiltered results (type=database):")
for doc in results["documents"][0]:
    print(f"  → {doc}")

# ============================
# 6. Update & Delete
# ============================
collection.update(
    ids=["doc_0"],
    documents=["FAISS is Meta's open-source vector similarity search library."],
)

collection.delete(ids=["doc_7"])
print(f"After delete: {collection.count()}")
```

### 4.3. Chroma + LangChain Integration

```python
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import TextLoader

# Load & chunk documents
loader = TextLoader("knowledge_base.txt")
documents = loader.load()

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50,
)
chunks = text_splitter.split_documents(documents)

# Tạo Chroma vectorstore với OpenAI embeddings
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings,
    persist_directory="./chroma_langchain_db",
    collection_name="knowledge_base",
)

# Semantic search
docs = vectorstore.similarity_search(
    query="How do vector databases work?",
    k=5,
)
for doc in docs:
    print(f"[{doc.metadata}] {doc.page_content[:100]}...")

# Dùng làm retriever cho RAG chain
retriever = vectorstore.as_retriever(
    search_type="mmr",          # Maximum Marginal Relevance
    search_kwargs={"k": 5, "fetch_k": 20},
)
```

---

## 5. Milvus — Distributed Vector Database

### 5.1. Milvus Architecture

**Milvus** là vector database distributed, thiết kế cho **production workloads** với hàng tỷ vectors.

```text
Milvus Architecture:

┌─────────────────────────────────────────────────────────────┐
│                        Client SDK                           │
│              (Python / Java / Go / Node.js)                 │
└──────────────────────────┬──────────────────────────────────┘
                           │ gRPC
┌──────────────────────────▼──────────────────────────────────┐
│                      Proxy Layer                            │
│              (Load balancing, routing)                       │
├─────────────┬─────────────┬─────────────┬───────────────────┤
│  Query Node │  Data Node  │ Index Node  │   Coord Services  │
│  (search)   │  (insert)   │  (build idx)│   (root/query/    │
│             │             │             │    data/index)     │
├─────────────┴─────────────┴─────────────┴───────────────────┤
│                    Storage Layer                            │
│        ┌──────────┐    ┌──────────────┐                     │
│        │  etcd     │    │ MinIO / S3   │                     │
│        │ (metadata)│    │ (data+index) │                     │
│        └──────────┘    └──────────────┘                     │
│        ┌──────────────────────────┐                         │
│        │   Kafka / Pulsar (log)   │                         │
│        └──────────────────────────┘                         │
└─────────────────────────────────────────────────────────────┘
```

### 5.2. Docker Setup

```bash
# ============================
# Milvus Standalone (dev/small production)
# ============================
# Download docker-compose
wget https://github.com/milvus-io/milvus/releases/download/v2.4.0/milvus-standalone-docker-compose.yml \
  -O docker-compose.yml

# Start Milvus
docker compose up -d

# Verify
docker compose ps
# Milvus sẽ listen trên port 19530 (gRPC) và 9091 (HTTP metric)

# Install Python SDK
pip install pymilvus
```

### 5.3. Collection Management & Search

```python
from pymilvus import (
    connections, utility, Collection,
    FieldSchema, CollectionSchema, DataType,
)
import numpy as np

# ============================
# 1. Connect
# ============================
connections.connect("default", host="localhost", port="19530")
print(f"Connected: {utility.get_server_version()}")

# ============================
# 2. Define schema
# ============================
fields = [
    FieldSchema(name="id", dtype=DataType.INT64, is_primary=True, auto_id=True),
    FieldSchema(name="title", dtype=DataType.VARCHAR, max_length=512),
    FieldSchema(name="category", dtype=DataType.VARCHAR, max_length=64),
    FieldSchema(name="embedding", dtype=DataType.FLOAT_VECTOR, dim=768),
]

schema = CollectionSchema(fields, description="Document embeddings")

# ============================
# 3. Create collection
# ============================
collection_name = "documents"
if utility.has_collection(collection_name):
    utility.drop_collection(collection_name)

collection = Collection(name=collection_name, schema=schema)
print(f"Created collection: {collection_name}")

# ============================
# 4. Insert data
# ============================
num_docs = 10_000
np.random.seed(42)

data = [
    [f"Document {i}" for i in range(num_docs)],                    # title
    [np.random.choice(["tech", "science", "health"]) for _ in range(num_docs)],  # category
    np.random.rand(num_docs, 768).astype("float32").tolist(),      # embedding
]

insert_result = collection.insert(data)
print(f"Inserted {insert_result.insert_count} entities")

# ============================
# 5. Create index
# ============================
index_params = {
    "metric_type": "COSINE",
    "index_type": "HNSW",
    "params": {"M": 32, "efConstruction": 200},
}

collection.create_index(field_name="embedding", index_params=index_params)
print("Index created")

# ============================
# 6. Load collection to memory
# ============================
collection.load()

# ============================
# 7. Vector search
# ============================
query_vector = np.random.rand(1, 768).astype("float32").tolist()

search_params = {"metric_type": "COSINE", "params": {"ef": 64}}

results = collection.search(
    data=query_vector,
    anns_field="embedding",
    param=search_params,
    limit=5,
    output_fields=["title", "category"],
)

print("\nSearch results:")
for hits in results:
    for hit in hits:
        print(f"  ID: {hit.id}, Distance: {hit.distance:.4f}, "
              f"Title: {hit.entity.get('title')}, "
              f"Category: {hit.entity.get('category')}")

# ============================
# 8. Filtered search
# ============================
results = collection.search(
    data=query_vector,
    anns_field="embedding",
    param=search_params,
    limit=5,
    expr='category == "tech"',   # metadata filter
    output_fields=["title", "category"],
)

print("\nFiltered results (category=tech):")
for hits in results:
    for hit in hits:
        print(f"  {hit.entity.get('title')} (score: {hit.distance:.4f})")

# ============================
# 9. Cleanup
# ============================
collection.release()
# connections.disconnect("default")
```

### 5.4. Milvus Lite — embedded mode

```python
# Milvus Lite: embedded mode, không cần Docker
# Perfect cho development và testing
from pymilvus import MilvusClient

client = MilvusClient("./milvus_lite.db")  # Local file

# Simplified API
client.create_collection(
    collection_name="docs",
    dimension=768,
)

client.insert(
    collection_name="docs",
    data=[
        {"id": 1, "vector": [0.1] * 768, "text": "hello world"},
        {"id": 2, "vector": [0.2] * 768, "text": "vector search"},
    ],
)

results = client.search(
    collection_name="docs",
    data=[[0.15] * 768],
    limit=2,
    output_fields=["text"],
)
print(results)
```

---

## 6. Pinecone — Managed Cloud Vector DB

### 6.1. Tại sao Pinecone?

**Pinecone** là fully-managed vector database — không cần quản lý infrastructure. Thích hợp cho teams muốn **ship nhanh** mà không lo scaling, maintenance.

```text
Self-Hosted (FAISS/Milvus)          Managed (Pinecone)
┌─────────────────────────┐         ┌─────────────────────────┐
│ ✅ Full control          │         │ ✅ Zero ops              │
│ ✅ No vendor lock-in     │         │ ✅ Auto-scaling          │
│ ✅ Free for small scale  │         │ ✅ Built-in backups      │
│ ❌ Manage infra          │         │ ✅ Multi-region          │
│ ❌ Scale yourself        │         │ ❌ Vendor lock-in        │
│ ❌ Monitor yourself      │         │ ❌ Cost at scale         │
└─────────────────────────┘         └─────────────────────────┘
```

### 6.2. Setup & Index Management

```bash
pip install pinecone
```

```python
from pinecone import Pinecone, ServerlessSpec
import numpy as np

# ============================
# 1. Initialize client
# ============================
pc = Pinecone(api_key="YOUR_API_KEY")  # Get from https://app.pinecone.io

# ============================
# 2. Create serverless index
# ============================
index_name = "my-documents"

if index_name not in pc.list_indexes().names():
    pc.create_index(
        name=index_name,
        dimension=768,
        metric="cosine",
        spec=ServerlessSpec(
            cloud="aws",
            region="us-east-1",
        ),
    )

# Connect to index
index = pc.Index(index_name)
print(index.describe_index_stats())

# ============================
# 3. Upsert vectors
# ============================
# Format: list of (id, vector, metadata)
vectors_to_upsert = []
for i in range(100):
    vectors_to_upsert.append({
        "id": f"doc_{i}",
        "values": np.random.rand(768).tolist(),
        "metadata": {
            "title": f"Document {i}",
            "category": np.random.choice(["tech", "science", "health"]),
            "year": np.random.randint(2020, 2025),
        },
    })

# Upsert in batches (recommended: 100 vectors per batch)
batch_size = 100
for i in range(0, len(vectors_to_upsert), batch_size):
    batch = vectors_to_upsert[i : i + batch_size]
    index.upsert(vectors=batch)

print(f"Stats: {index.describe_index_stats()}")

# ============================
# 4. Query (search)
# ============================
query_vector = np.random.rand(768).tolist()

results = index.query(
    vector=query_vector,
    top_k=5,
    include_metadata=True,
)

print("\nSearch results:")
for match in results["matches"]:
    print(f"  ID: {match['id']}, Score: {match['score']:.4f}")
    print(f"  Metadata: {match['metadata']}")

# ============================
# 5. Metadata filtering
# ============================
results = index.query(
    vector=query_vector,
    top_k=5,
    include_metadata=True,
    filter={
        "category": {"$eq": "tech"},
        "year": {"$gte": 2023},
    },
)

print("\nFiltered (tech, >= 2023):")
for match in results["matches"]:
    print(f"  {match['id']}: {match['metadata']}")

# ============================
# 6. Namespaces — logical partitioning
# ============================
# Upsert vào namespace cụ thể
index.upsert(
    vectors=[{
        "id": "ns_doc_1",
        "values": np.random.rand(768).tolist(),
        "metadata": {"title": "Namespaced document"},
    }],
    namespace="project-alpha",
)

# Query trong namespace
results = index.query(
    vector=np.random.rand(768).tolist(),
    top_k=5,
    namespace="project-alpha",
    include_metadata=True,
)

# ============================
# 7. Delete
# ============================
index.delete(ids=["doc_0", "doc_1"])
# Delete by filter
index.delete(filter={"category": "health"})
# Delete entire namespace
index.delete(delete_all=True, namespace="project-alpha")
```

### 6.3. Pinecone Pricing Model

| Tier | Vectors | Cost | Best For |
|------|---------|------|----------|
| **Free** | 2M vectors on 1 index | $0 | Prototyping, learning |
| **Starter** | Unlimited | ~$0.08/1M reads | Small production apps |
| **Standard** | Unlimited | ~$70+/month | Medium production |
| **Enterprise** | Unlimited | Custom | Large-scale, SLA |

> **Lưu ý:** Pinecone charge theo **read/write units**, không chỉ storage. Nếu QPS cao, chi phí tăng nhanh. Cần estimate workload trước khi chọn.

---

## 7. Weaviate — Schema-Based, Hybrid Search

**Weaviate** nổi bật với **hybrid search** (vector + keyword BM25) và schema-based approach.

```text
Weaviate Hybrid Search:

Query: "vector database performance benchmarks"

  ┌─────────────────┐     ┌──────────────────┐
  │  Vector Search   │     │  BM25 Keyword     │
  │  (semantic)      │     │  (exact match)    │
  │  score: 0.85     │     │  score: 12.3      │
  └────────┬────────┘     └────────┬──────────┘
           │                       │
           └───────┬───────────────┘
                   ▼
           ┌──────────────┐
           │  Fusion       │
           │  (weighted    │
           │   combination)│
           └──────┬───────┘
                  ▼
           Final ranked results
           (best of both worlds)
```

```bash
# Docker setup
docker run -d --name weaviate \
  -p 8080:8080 -p 50051:50051 \
  cr.weaviate.io/semitechnologies/weaviate:1.27.0
```

```python
import weaviate
from weaviate.classes.config import Configure, Property, DataType

# Connect
client = weaviate.connect_to_local()

# Create collection with vectorizer
collection = client.collections.create(
    name="Article",
    vectorizer_config=Configure.Vectorizer.text2vec_openai(),
    properties=[
        Property(name="title", data_type=DataType.TEXT),
        Property(name="content", data_type=DataType.TEXT),
        Property(name="category", data_type=DataType.TEXT),
    ],
)

# Hybrid search (vector + BM25)
response = collection.query.hybrid(
    query="machine learning performance",
    alpha=0.5,  # 0 = pure BM25, 1 = pure vector
    limit=5,
)
for obj in response.objects:
    print(f"{obj.properties['title']}: {obj.properties['content'][:80]}...")

client.close()
```

---

## 8. Qdrant — Rust-Based Performance

**Qdrant** viết bằng Rust, nổi bật với **performance** và **rich filtering**.

```bash
# Docker setup
docker run -d --name qdrant -p 6333:6333 -p 6334:6334 qdrant/qdrant

pip install qdrant-client
```

```python
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct
import numpy as np

client = QdrantClient("localhost", port=6333)

# Create collection
client.create_collection(
    collection_name="docs",
    vectors_config=VectorParams(size=768, distance=Distance.COSINE),
)

# Upsert points
points = [
    PointStruct(
        id=i,
        vector=np.random.rand(768).tolist(),
        payload={"title": f"Doc {i}", "category": "tech"},
    )
    for i in range(1000)
]
client.upsert(collection_name="docs", points=points)

# Search with filtering
results = client.query_points(
    collection_name="docs",
    query=np.random.rand(768).tolist(),
    limit=5,
)
for point in results.points:
    print(f"ID: {point.id}, Score: {point.score:.4f}")
```

---

## 9. Mega Comparison Table

### 9.1. Feature Matrix

| Feature | FAISS | Chroma | Milvus | Pinecone | Weaviate | Qdrant |
|---------|-------|--------|--------|----------|----------|--------|
| **Type** | Library | Embedded DB | Distributed DB | Managed SaaS | DB | DB |
| **Language** | C++ | Python | Go/C++ | - | Go | Rust |
| **Self-hosted** | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| **Managed cloud** | ❌ | ✅ (Cloud) | ✅ (Zilliz) | ✅ | ✅ | ✅ |
| **Max vectors** | Billions* | Millions | Billions | Billions | Billions | Billions |
| **Metadata filter** | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Hybrid search** | ❌ | ❌ | ✅ (v2.4+) | ❌ | ✅ | ✅ |
| **GPU support** | ✅ | ❌ | ✅ | N/A | ❌ | ❌ |
| **HNSW** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **IVF** | ✅ | ❌ | ✅ | N/A | ❌ | ❌ |
| **PQ** | ✅ | ❌ | ✅ | N/A | ✅ | ✅ |
| **Multi-tenancy** | ❌ | ✅ | ✅ | ✅ (namespace) | ✅ | ✅ |
| **REST API** | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **LangChain** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Pricing** | Free/OSS | Free/OSS | Free/OSS | Freemium | Free/OSS | Free/OSS |

> **Note:** FAISS "billions" yêu cầu custom sharding. Pinecone internals hidden (proprietary).

### 9.2. Khi nào dùng gì?

| Scenario | Recommended | Lý do |
|----------|------------|-------|
| **Prototype / hackathon** | Chroma | Zero setup, in-memory, LangChain sẵn |
| **Production, small team** | Qdrant hoặc Chroma Cloud | Dễ deploy, API tốt |
| **Research, benchmarking** | FAISS | Low-level control, GPU, fastest |
| **Enterprise, billions of vectors** | Milvus / Zilliz | Distributed, proven at scale |
| **Zero-ops, managed** | Pinecone | No infra management |
| **Need hybrid search** | Weaviate | BM25 + vector fusion built-in |
| **Performance-critical** | Qdrant hoặc FAISS | Rust/C++ native speed |

---

## 10. Performance Benchmarking

### 10.1. Benchmark Setup

```python
"""
Benchmark framework cho vector databases.
Test: QPS (queries/sec), Recall@10, Latency P50/P99
"""
import time
import numpy as np

def benchmark_search(search_fn, queries, k=10, num_runs=3):
    """Benchmark a search function"""
    latencies = []

    for run in range(num_runs):
        for q in queries:
            start = time.perf_counter()
            search_fn(q, k)
            elapsed = time.perf_counter() - start
            latencies.append(elapsed * 1000)  # ms

    latencies = np.array(latencies)
    total_time = latencies.sum() / 1000  # seconds
    total_queries = len(queries) * num_runs

    return {
        "qps": total_queries / total_time,
        "p50_ms": np.percentile(latencies, 50),
        "p99_ms": np.percentile(latencies, 99),
        "mean_ms": latencies.mean(),
    }

# ============================
# FAISS Benchmark
# ============================
d, nb = 768, 1_000_000
nq = 100
xb = np.random.rand(nb, d).astype("float32")
xq = np.random.rand(nq, d).astype("float32")

# Build indexes
import faiss

# Flat (baseline)
idx_flat = faiss.IndexFlatL2(d)
idx_flat.add(xb)

# HNSW
idx_hnsw = faiss.IndexHNSWFlat(d, 32)
idx_hnsw.hnsw.efSearch = 64
idx_hnsw.add(xb)

# IVF+PQ
quantizer = faiss.IndexFlatL2(d)
idx_ivfpq = faiss.IndexIVFPQ(quantizer, d, 256, 48, 8)
idx_ivfpq.train(xb[:100_000])
idx_ivfpq.add(xb)
idx_ivfpq.nprobe = 16

# Run benchmarks
for name, idx in [("Flat", idx_flat), ("HNSW", idx_hnsw), ("IVF+PQ", idx_ivfpq)]:
    def search_fn(q, k, _idx=idx):
        return _idx.search(q.reshape(1, -1), k)

    stats = benchmark_search(search_fn, xq, k=10, num_runs=3)
    print(f"{name:10s} | QPS: {stats['qps']:8.0f} | "
          f"P50: {stats['p50_ms']:6.2f}ms | P99: {stats['p99_ms']:6.2f}ms")
```

### 10.2. Typical Benchmark Results (1M vectors, 768-d)

| Engine | QPS (single thread) | P50 Latency | P99 Latency | Recall@10 | Memory |
|--------|-------------------|-------------|-------------|-----------|--------|
| FAISS Flat | ~30 | ~30ms | ~35ms | 100% | 3 GB |
| FAISS HNSW (ef=64) | ~2,000 | ~0.5ms | ~1.5ms | 98.5% | 6 GB |
| FAISS IVF+PQ | ~5,000 | ~0.2ms | ~0.8ms | 92% | 0.1 GB |
| Milvus HNSW | ~1,500 | ~0.7ms | ~2ms | 97% | 6 GB |
| Qdrant HNSW | ~1,800 | ~0.6ms | ~1.8ms | 98% | 6 GB |
| Pinecone (serverless) | ~500-1000 | ~10ms | ~50ms | ~97% | N/A |
| Chroma HNSW | ~800 | ~1.2ms | ~3ms | 97% | 6 GB |

> **Lưu ý quan trọng:** Các con số trên là **approximate** và phụ thuộc rất nhiều vào hardware, dataset, parameters. Luôn benchmark trên **data thực** của bạn trước khi quyết định.

### 10.3. Scaling Characteristics

```text
Latency vs Dataset Size:

Latency (ms)
    │
100 │ ●                                          Flat (linear)
    │   ●
 50 │      ●
    │         ●
 10 │──●──────────●────────────────────────────── Pinecone (network)
  5 │                    ●
  2 │──●───●───●────●───────●──────●────────────  HNSW (logarithmic)
  1 │──●───●───●────●────●────●─────●──────●────  IVF+PQ (sublinear)
    │
    └──┬───┬───┬────┬────┬────┬─────┬──────┬───
      10K 50K 100K 500K  1M   5M   10M   100M
                    Dataset size
```

---

## 11. Choosing the Right Vector DB — Decision Tree

```text
                    ┌─────────────────────┐
                    │  Bạn cần Vector DB?  │
                    └─────────┬───────────┘
                              │
                    ┌─────────▼───────────┐
                    │  Prototype hay       │
                    │  Production?         │
                    └────┬───────────┬─────┘
                         │           │
              Prototype  │           │  Production
                         ▼           │
              ┌──────────────┐       │
              │   Chroma     │       │
              │ (hoặc FAISS  │       ▼
              │  nếu nghiên  │  ┌──────────────────┐
              │  cứu)        │  │  Có team DevOps?  │
              └──────────────┘  └────┬─────────┬────┘
                                     │         │
                              Có     │         │  Không
                                     ▼         ▼
                          ┌────────────┐  ┌──────────┐
                          │ Bao nhiêu   │  │ Pinecone │
                          │ vectors?    │  │ (managed)│
                          └──┬──────┬──┘  └──────────┘
                             │      │
                    < 10M    │      │  > 10M
                             ▼      ▼
                        ┌───────┐ ┌────────┐
                        │Qdrant │ │Milvus  │
                        │       │ │(dist.) │
                        └───┬───┘ └────────┘
                            │
                    Cần hybrid search?
                      │           │
                  Có  │           │  Không
                      ▼           ▼
                 ┌──────────┐  ┌───────┐
                 │ Weaviate  │  │ Qdrant│
                 └──────────┘  └───────┘
```

### 11.1. Quick Decision Guide

| Câu hỏi | → Answer |
|---------|----------|
| Prototype nhanh nhất? | **Chroma** — 5 dòng code |
| Research / benchmarking? | **FAISS** — low-level, GPU |
| Production, không muốn quản lý? | **Pinecone** — zero ops |
| Production, cần control? | **Qdrant** hoặc **Milvus** |
| Cần hybrid (vector + keyword)? | **Weaviate** |
| Dataset > 1 billion? | **Milvus** (distributed) |
| Budget = 0? | **FAISS** hoặc **Qdrant** (self-host) |

### 11.2. Common Anti-Patterns

| Anti-Pattern | Vấn đề | Khuyến nghị |
|-------------|--------|-------------|
| Dùng Pinecone cho prototype | Tốn tiền, phụ thuộc network | Dùng Chroma local |
| FAISS cho production có metadata | FAISS không hỗ trợ metadata filter | Dùng Milvus/Qdrant |
| Milvus cho 10K vectors | Over-engineer, ops overhead lớn | Chroma hoặc FAISS đủ |
| Brute-force search > 100K | Latency không chấp nhận được | Index ANN (HNSW, IVF) |
| Chọn DB trước khi biết use-case | Lock vào wrong tool | Benchmark trên real data trước |

---

## 12. Full RAG Pipeline Example — Tích hợp Vector DB

```python
"""
Complete RAG pipeline: Load → Chunk → Embed → Store → Retrieve → Generate
"""
import os
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

# ============================
# Step 1: Load documents
# ============================
loader = PyPDFLoader("technical_report.pdf")
documents = loader.load()
print(f"Loaded {len(documents)} pages")

# ============================
# Step 2: Chunk documents
# ============================
splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50,
    separators=["\n\n", "\n", ". ", " ", ""],
)
chunks = splitter.split_documents(documents)
print(f"Created {len(chunks)} chunks")

# ============================
# Step 3: Create embeddings & store in Chroma
# ============================
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings,
    persist_directory="./rag_chroma_db",
)

# ============================
# Step 4: Create retriever
# ============================
retriever = vectorstore.as_retriever(
    search_type="mmr",
    search_kwargs={"k": 5, "fetch_k": 20, "lambda_mult": 0.7},
)

# ============================
# Step 5: RAG chain
# ============================
template = """Answer the question based on the following context.
If you cannot answer from the context, say "I don't have enough information."

Context:
{context}

Question: {question}

Answer:"""

prompt = ChatPromptTemplate.from_template(template)
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)

rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)

# ============================
# Step 6: Query
# ============================
response = rag_chain.invoke("What are the key findings of the report?")
print(response)
```

---

## Tổng kết

Bài này đã cover toàn bộ landscape của Vector Database — từ thuật toán indexing đến hands-on code cho 4 engine chính:

| Khái niệm | Key Takeaway |
|-----------|-------------|
| **Brute-force** | O(n×d), chỉ dùng cho < 50K vectors |
| **ANN algorithms** | HNSW (high recall), IVF+PQ (memory-efficient) |
| **FAISS** | Library-level, nhanh nhất, GPU, dùng cho research/custom pipeline |
| **Chroma** | Lightweight DB, best for prototyping, LangChain integration |
| **Milvus** | Distributed, best for enterprise/billion-scale |
| **Pinecone** | Managed, best for zero-ops production |
| **Weaviate** | Best hybrid search (vector + BM25) |
| **Qdrant** | Rust-based, great performance, rich filtering |

**Mental model khi chọn Vector DB:**

```text
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   Speed / Control ◄────────────────► Ease of use         │
│   FAISS ← Qdrant ← Milvus ← Weaviate ← Chroma          │
│                                                          │
│   Self-hosted ◄────────────────────► Managed             │
│   FAISS ← Milvus ← Qdrant ← Weaviate ← Pinecone        │
│                                                          │
│   Cost ◄───────────────────────────► Scalability         │
│   Chroma ← FAISS ← Qdrant ← Milvus ← Pinecone          │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## Bài tập

### Bài tập 1: FAISS Index Comparison (⏱ 30 phút)

1. Tạo dataset 500K random vectors (dimension=384)
2. Build 4 loại index: `IndexFlatL2`, `IndexIVFFlat` (nlist=100), `IndexHNSWFlat` (M=32), `IndexIVFPQ` (m=48)
3. Benchmark: search time, recall@10 (so với Flat), memory usage
4. Vẽ bảng so sánh kết quả

### Bài tập 2: Chroma RAG Pipeline (⏱ 45 phút)

1. Tạo Chroma collection chứa ít nhất 50 documents (có thể dùng Wikipedia paragraphs)
2. Implement semantic search với metadata filtering
3. Tích hợp làm retriever trong LangChain RAG chain
4. So sánh kết quả `similarity_search` vs `mmr` (Maximum Marginal Relevance)

### Bài tập 3: Multi-DB Benchmark (⏱ 60 phút)

1. Chuẩn bị dataset 100K vectors (dimension=768)
2. Implement cùng một pipeline cho FAISS, Chroma, và Qdrant (hoặc Milvus)
3. So sánh: insert time, search latency, recall, memory
4. Viết báo cáo ngắn (500 từ): "Tôi sẽ chọn DB nào cho dự án X và tại sao?"

### Bài tập 4: Production-Ready Vector Search (⏱ 45 phút)

1. Dùng real embeddings (sentence-transformers hoặc OpenAI) thay vì random vectors
2. Load 1000+ text chunks từ PDF/web thực tế
3. Implement reranking: dùng vector DB lấy top-20, sau đó dùng cross-encoder rerank về top-5
4. So sánh chất lượng answer giữa: (a) Chỉ vector search vs (b) Vector search + reranking
