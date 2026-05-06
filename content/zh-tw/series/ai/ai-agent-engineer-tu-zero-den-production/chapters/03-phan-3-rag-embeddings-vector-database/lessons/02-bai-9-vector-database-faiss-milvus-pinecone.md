---
id: 019e0a01-bb09-7001-c001-ee0900000001
title: 第 9 課：向量資料庫 — FAISS、Milvus、Pinecone
slug: bai-9-vector-database-faiss-milvus-pinecone
description: >-
  向量資料庫概念：索引（IVF、HNSW、PQ）、相似性搜尋。 FAISS 促進當地發展。 Milvus 分散式設定。松果託管服務。
  Chroma、Weaviate 替代品。性能基準、成本比較。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: 第 3 部分：RAG、嵌入和向量資料庫
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: AI代理工程師：從零到生產
  slug: ai-agent-engineer-tu-zero-den-production
locale: zh-tw
---

> **100 萬個向量，在 5 毫秒內找到最近的前 10 個向量 — 不是魔術，而是向量資料庫。 ** 在第 8 課中，我們將文字轉換為嵌入。但當系統有數百萬個文件時，暴力掃描每個向量將需要幾秒鐘，甚至幾分鐘。向量資料庫透過智慧**索引演算法**解決了這個問題——以一點精度換取 1000 倍的速度。本文深入研究 FAISS、Chroma、Milvus、Pinecone — 從本地原型到生產級分散式系統。

---

## 1. 為什麼需要向量資料庫？

### 1.1。暴力搜索—簡單但不可擴展

最簡單的方法：將查詢向量與資料庫中的**每個**向量進行比較。

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

### 1.2。縮放時出現問題

|向量數|暴力破解延遲 |可以接受嗎？ |
|----------|--------------------------------|-----------------|
| 10K | 〜5毫秒| ✅ 好的 |
| 10萬 | 〜50ms | ⚠️慢|
| 1M | 〜500ms | ❌太慢|
| 10M | 〜5 秒 | ❌ 無法使用 |
| 100M | 〜50 秒 | ❌ 災難 |

**結論：** 暴力破解是 **O(n × d)** — 與資料集大小呈線性關係。對於生產工作負荷（數百萬個向量，QPS > 100），我們需要**近似最近鄰（ANN）**搜尋。

### 1.3。 ANN — 以準確度換取速度

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

> **關鍵見解：** 在大多數 RAG 用例中，95-99% 的召回率**足夠好**。使用者沒有意識到「精確前 10 名」和「幾乎精確前 10 名」之間的區別，但從 500 毫秒到 2 毫秒的延遲是**遊戲規則改變者**。

---

## 2. 向量索引演算法

### 2.1。 Flat Index — 基線、精確搜索

無索引，保存所有向量並線性掃描。用作**基本事實**來評估 ANN 演算法。

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

### 2.2。 IVF（倒排檔案索引）－基於分區

將向量空間分割為 **nlist** 簇（使用 k 均值）。搜尋時，僅掃描最接近查詢的 **nprobe** 叢集。

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

**權衡：**
- `nlist` 大→小群集→搜尋速度快，但火車需要更長的時間
- `nprobe` 大 → 召回率較高，但速度較慢

### 2.3。 HNSW（分層可導航小世界）－基於圖形

多層圖的建構。上層是“高速公路”長途連接，下層是詳細的本地連接。

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

**特點：**
- **優點：** 召回率非常高（~99%），延遲穩定，無需訓練
- **缺點：**記憶體開銷高（儲存圖形結構），建置時間長

### 2.4。 PQ（乘積量化）－基於壓縮

將向量分為 **m** 個子向量，每個子向量被量化為 1 個位元組（256 個質心）。

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

### 2.5。 ScaNN（可擴展最近鄰）－Google 的方法

結合**各向異性向量量化** + 基於樹的分區。特別針對內積搜尋進行了最佳化。

### 2.6。比較演算法

|演算法|搜尋時間 |記憶體|建置時間 |回憶@10 |最適合 |
|------------|---------|--------|------------|-----------|---------|
| **平** | O(n×d) | 1x |無 | 100% | < 50K vectors, ground truth |
| **IVF** | O(√n × d) | 1x + centroids | Medium | 90-98% | Medium datasets, tunable |
| **HNSW** | O(log n) | 1.5-2x | Slow | 95-99% | High recall, low latency |
| **PQ** | O(n × m) | 0.01-0.1x | Slow | 80-95% | Memory-constrained |
| **IVF+PQ** | O(√n × m) | 0.01x + centroids | Slow | 85-95% | Large-scale production |
| **ScaNN** | O(√n) | 1x | Medium | 95-99% | Google-scale, MIPS |

> **現實：** 大多數生產系統使用 **HNSW** （用於高召回率）或 **IVF+PQ** （用於大型、記憶體有限的資料集）。 FAISS、Milvus、Pinecone 都支持兩者。

---

## 3. FAISS 深入探討

### 3.1。什麼是 FAISS？

**FAISS**（Facebook AI 相似性搜尋）是 Meta 的向量搜尋庫，用 C++ 編寫並結合 Python。特點：**本地運行，速度極快，GPU支援**。

```bash
# Cài đặt
pip install faiss-cpu    # CPU-only
# hoặc
pip install faiss-gpu    # GPU support (cần CUDA)
```

### 3.2。 IndexFlatL2 — 精確搜尋基線

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

### 3.3。 IndexIVFFlat — 基於分區的搜索

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

### 3.4。 IndexHNSWFlat — 基於圖的搜索

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

### 3.5。綜合指數 — IVF + PQ 大規模

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

### 3.6。儲存和載入索引

```python
# Save index to disk
faiss.write_index(index_hnsw, "my_index.faiss")

# Load index
loaded_index = faiss.read_index("my_index.faiss")
print(f"Loaded {loaded_index.ntotal} vectors")

# Search with loaded index
distances, indices = loaded_index.search(xq[:1], k)
```

### 3.7。 FAISS 指數備忘單

|索引 |代碼|火車？ |記憶體|速度|回憶|使用案例|
|--------|--------|--------|--------|--------|--------|---------|
| `IndexFlatL2` | `faiss.IndexFlatL2(d)` |沒有 |高|慢| 100% | < 50K, ground truth |
| `IndexFlatIP` | `faiss.IndexFlatIP(d)` | No | High | Slow | 100% | Cosine similarity |
| `IndexIVFFlat` | quantizer + nlist | Yes | High | Medium | 90-98% | 100K-1M vectors |
| `IndexHNSWFlat` | `faiss.IndexHNSWFlat(d, M)` | No | Very High | Fast | 95-99% | High recall needed |
| `IndexIVFPQ` | quantizer + nlist + m | Yes | Low | Fast | 85-95% | > 100 萬個向量 |

---

## 4. Chroma — 輕量級、本地優先

### 4.1。為什麼選擇 Chroma？

**Chroma** 是最輕的向量資料庫，專為**快速原型製作**和**本地開發**而設計。內建與 LangChain、LlamaIndex 整合。

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

### 4.2。設定和基本操作

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

### 4.3。 Chroma + LangChain 整合

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

## 5. Milvus — 分散式向量資料庫

### 5.1。 Milvus 架構

**Milvus** 是一個分散式向量資料庫，專為具有數十億向量的**生產工作負載**而設計。

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

### 5.2。 Docker 設定

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

### 5.3。館藏管理與搜尋

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

### 5.4。 Milvus Lite — 嵌入模式

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

## 6. Pinecone — 託管雲端向量資料庫

### 6.1。為什麼是松果？

**Pinecone** 是一個完全託管的向量資料庫 - 無需基礎設施管理。適合想要**快速交付**而無需擔心擴展和維護的團隊。

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

### 6.2。設定和索引管理

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

### 6.3。松果定價模型

|等級 |向量|成本|最適合 |
|--------|---------|--------|----------|
| **免費** | 1 個索引上的 2M 個向量 | 0 美元 |原型製作、學習 |
| **入門** |無限| ~$0.08/100 萬次閱讀 |小型生產應用程式 |
| **标准** |无限| ~$70+/月 |中等产量 |
| **企业** |无限|定制|大规模、SLA |

> **注意：** Pinecone 以**讀/寫單位**收費，而不僅僅是存放單位。如果QPS高，成本就會快速增加。選擇之前需要估算一下工作量。

---

## 7. Weaviate — 基于模式的混合搜索

**Weaviate** 憑藉**混合搜尋**（向量 + 關鍵字 BM25）和基於模式的方法脫穎而出。

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

## 8. Qdrant — 基於 Rust 的效能

**Qdrant** 用 Rust 編寫，具有**性能**和**豐富的過濾**。

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

## 9. 大型比較表

### 9.1。特徵矩陣

|特色|費斯 |色度 |米爾維斯 |松果|維維特 | Qdrant|
|--------|--------|--------|--------|---------|---------|--------|
| **類型** |圖書館 |嵌入式資料庫|分散式資料庫|託管 SaaS |資料庫|資料庫|
| **語言** | C++ |蟒蛇 | Go/C++ | - |去 |鐵鏽|
| **自架** | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| **託管雲** | ❌ | ✅（雲）| ✅（齊利茲）| ✅ | ✅ | ✅ |
| **最大向量** |數十億* |數百萬 |數十億|數十億|數十億|數十億|
| **元資料過濾器** | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **混合搜尋** | ❌ | ❌ | ✅ (v2.4+) | ❌ | ✅ | ✅ |
| **GPU 支援** | ✅ | ❌ | ✅ |不適用 | ❌ | ❌ |
| **新南威爾斯州** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **體外受精** | ✅ | ❌ | ✅ |不適用 | ❌ | ❌ |
| **PQ** | ✅ | ❌ | ✅ |不適用 | ✅ | ✅ |
| **多租用戶** | ❌ | ✅ | ✅ | ✅（命名空間）| ✅ | ✅ |
| **REST API** | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **浪鏈** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **定價** |免費/開源軟體 |免費/開源軟體 |免費/開源軟體 |免費|免費/開源軟體 |免費/開源軟體 |

> **注意：** FAISS“十億”需要自訂分片。松果內部隱藏（專有）。

### 9.2。什麼時候用什麼？

|場景 |推薦|原因 |
|----------|-------------|--------|
| **原型/黑客馬拉松** |色度 |零設定、記憶體、LangChain 可用 |
| **生產，小團隊** | Qdrant 或 Chroma Cloud |易於部署，良好的API |
| **研究、基準測試** |費斯 |低階控制、GPU、最快 |
| **企業，數十億個向量** | Milvus/Zilliz |分佈式，經過大規模驗證 |
| **零操作，託管** |松果|沒有基礎設施管理|
| **需要混合搜尋** |維維特 | BM25+內建向量融合|
| **效能關鍵** | Qdrant 或 FAISS | Rust/C++ 原生速度 |

---

## 10. 效能基準測試

### 10.1。基準設定

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

### 10.2。典型基準結果（1M 向量，768-d）

|引擎| QPS（單線程）| P50 延遲 | P99 延遲 |回憶@10 |內存|
|--------|--------|-------------|-------------|------------|--------|
|費斯公寓 | 〜30 | 〜30ms | ~35ms | 100% | 3GB |
| FAISS HNSW (ef=64) | 〜2,000 | 〜0.5ms | 〜1.5ms | 98.5% | 6GB|
|費斯試管嬰兒+PQ | 〜5,000 | 〜0.2ms | 〜0.8ms | 92% | 0.1GB|
| Milvus 新南威爾斯 | 〜1,500 | 〜0.7ms | 〜2ms | 97% | 6GB|
| Qdrant HNSW | 〜1,800 | 〜0.6ms | 〜1.8ms | 98% | 6GB|
| Pinecone（無伺服器）| 〜500-1000 |約 10 毫秒 | 〜50ms | ~97% |不適用 |
|色度 HNSW | 〜800 | 〜1.2ms | 〜3ms | 97% | 6GB|

> **重要說明：** 上述數字是**近似值**，很大程度取決於硬體、資料集、參數。在做出決定之前，請務必對您的**真實數據**進行基準測試。

### 10.3。縮放特性

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

## 11. 選擇正確的向量資料庫－決策樹

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

### 11.1。快速決策指南

|問題 | → 答 |
|--------|----------|
|最快的原型？ | **Chroma** — 5 行程式碼 |
|研究/基準測試？ | **FAISS** — 低級，GPU |
|生產，不想管理？ | **松果** — 零操作 |
|生產，需要控制嗎？ | **Qdrant** 或 **Milvus** |
|需要混合（向量+關鍵字）？ | **偏離** |
|資料集 > 10 億？ | **Milvus**（分散式）|
|預算=0？ | **FAISS** 或 **Qdrant**（自架）|

### 11.2。常見的反模式

|反模式 |問題 |推薦 |
|-------------|--------|-------------|
|使用 Pinecone 進行原型設計 |需要花錢，取決於網絡|使用 Chroma 本地 |
|面向生產的 FAISS 擁有元資料 | FAISS 不支援元資料過濾器 |使用 Milvus/Qdrant |
| Milvus 10K 向量 |過度設計，大量營運開銷 | Chroma或FAISS就夠了|
|暴力搜尋 > 100K |不可接受的延遲 |索引 ANN（HNSW、IVF）|
|在了解用例之前選擇資料庫 |鎖定錯誤的工具 |首先以真實數據為基準|

---

## 12. 完整的 RAG 管道範例 — 向量資料庫集成

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

## 總結

本文涵蓋了向量資料庫的整個概況——從索引演算法到 4 個主要引擎的實踐代碼：

|概念 |重點 |
|------------|-------------|
| **暴力破解** | O(n×d)，僅用於 < 50K 向量 |
| **人工神經網路演算法** | HNSW（高召回率）、IVF+PQ（記憶體效率）|
| **費斯** |庫級、最快、GPU、用於研究/自訂管道 |
| **色度** |輕量級資料庫，最適合原型設計、LangChain 整合 |
| **Milvus** |分散式，最適合企業/十億規模|
| **松果** |託管，最適合零作業生產 |
| **偏離** |最佳混合搜尋（向量+BM25）|
| **Qdrant** |基於 Rust，性能卓越，過濾豐富 |

**選擇Vector DB時的心智模式：**

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

## 練習

### 練習 1：FAISS 指數比較（⏱ 30 分鐘）

1.建立500K隨機向量的資料集（維度=384）
2. 建立4種類型的索引： `IndexFlatL2`, `IndexIVFFlat` （n列表=100）， `IndexHNSWFlat` （中號=32）， `IndexIVFPQ` (米=48)
3. 基準測試：搜尋時間、recall@10（與 Flat 相比）、記憶體使用情況
4. 繪製表格來比較結果

### 練習 2：Chroma RAG 管道（⏱ 45 分鐘）

1.建立一個包含至少50個文件的Chroma集合（可以使用維基百科段落）
2.透過元資料過濾實現語義搜索
3.作為檢索器整合到LangChain RAG鏈中
4. 比較結果 `similarity_search` 與 `mmr` （最大邊際相關性）

### 練習 3：多資料庫基準測試（⏱ 60 分鐘）

1. 準備100K向量的資料集（維度=768）
2. 為 FAISS、Chroma 和 Qdrant（或 Milvus）實施相同的流程
3.比較：插入時間、搜尋延遲、召回率、內存
4. 寫一篇簡短的報告（500 字）：“我會為專案 X 選擇哪個資料庫，為什麼？”

### 練習 4：生產就緒向量搜尋（⏱ 45 分鐘）

1. 使用真實嵌入（句子轉換器或 OpenAI）而不是隨機向量
2. 從實際 PDF/Web 載入 1000 多個文字區塊
3. 實作重排：使用向量DB取得top-20，然後使用交叉編碼器重排到top-5
4. 比較以下之間的答案品質：(a) 僅向量搜尋與 (b) 向量搜尋 + 重新排名
