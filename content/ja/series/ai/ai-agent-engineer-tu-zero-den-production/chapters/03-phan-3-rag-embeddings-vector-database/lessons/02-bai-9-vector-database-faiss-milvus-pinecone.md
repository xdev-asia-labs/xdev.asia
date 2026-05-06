---
id: 019e0a01-bb09-7001-c001-ee0900000001
title: 'レッスン 9: ベクトル データベース — FAISS、Milvus、松ぼっくり'
slug: bai-9-vector-database-faiss-milvus-pinecone
description: >-
  Vector DB の概念: インデックス作成 (IVF、HNSW、PQ)、類似性検索。地域開発のためのFAISS。 Milvus
  分散セットアップ。松ぼっくりマネージド サービス。 Chroma、Weaviateの代替品。パフォーマンスのベンチマーク、コストの比較。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 3: RAG、埋め込み、ベクトル データベース'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI エージェント エンジニア: ゼロから本番環境まで'
  slug: ai-agent-engineer-tu-zero-den-production
locale: ja
---

> **100 万のベクトル、最も近いトップ 10 を 5 ミリ秒で見つけます。魔法ではなく、ベクター データベースを使用します。** レッスン 8 では、テキストを埋め込みに変換しました。しかし、システムに何百万ものドキュメントがある場合、各ベクトルを総当たり的にスキャンするには数秒、場合によっては数分もかかります。 Vector Database は、1000 倍の速度と引き換えに、精度を少し犠牲にして、スマート **インデックス作成アルゴリズム** を使用してこの問題を解決します。この記事では、FAISS、Chroma、Milvus、Pinecone について、ローカル プロトタイプから実稼働グレードの分散システムまで詳しく掘り下げます。

---

## 1. なぜベクターデータベースが必要なのでしょうか?

＃＃＃１．１．ブルートフォース検索 — シンプルだがスケーラブルではない

最も簡単な方法: クエリ ベクトルをデータベース内の **すべて** ベクトルと比較します。

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

＃＃＃１．２．スケーリング時の問題

|ベクトルの数 |ブルートフォースレイテンシ |許容できる？ |
|----------|---------------------|------|
| 10K | ~5ms | ✅ わかりました |
| 100K | ~50ms | ⚠️遅い |
| 1M | ~500ms | ❌ 遅すぎる |
| 10M | ~5秒 | ❌ | は使用できません
| 100M | ～50秒 | ❌ 災害 |

**結論:** ブルート フォースは **O(n × d)** であり、データセット サイズに比例します。運用ワークロード (数百万のベクトル、QPS > 100) では、**近似最近傍 (ANN)** 検索が必要です。

＃＃＃１．３． ANN — 精度を犠牲にして速度を優先する

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

> **重要な洞察:** ほとんどの RAG ユースケースでは、95 ～ 99% の再現率が **十分な**です。ユーザーは「正確なトップ 10」と「ほぼ正確なトップ 10」の違いに気づいていませんが、500 ミリ秒から 2 ミリ秒までの遅延は **ゲームチェンジャー** です。

---

## 2. ベクトルインデックス付けアルゴリズム

＃＃＃２．１．フラットインデックス - ベースライン、完全検索

インデックス作成は不要で、すべてのベクトルを保存し、線形にスキャンします。 ANN アルゴリズムを評価するための**グラウンド トゥルース**として使用されます。

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

＃＃＃２．２． IVF (逆ファイルインデックス) — パーティションベース

ベクトル空間を **nlist** クラスターに分割します (K 平均法を使用)。検索するときは、クエリに最も近い **nprobe** クラスターのみをスキャンします。

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

**トレードオフ:**
- `nlist` 大きい → 小さいクラスター → 検索は高速ですが、トレーニングに時間がかかります
- `nprobe` 大きい → 再現率は高いが、速度が遅い

＃＃＃２．３． HNSW (Hierarchical Navigable Small World) — グラフベース

多層グラフの構築。上の層は「高速道路」の長距離接続で、下の層は詳細なローカル接続です。

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

**特徴:**
- **長所:** 非常に高い再現率 (~99%)、安定した遅延、トレーニングは不要
- **短所:** メモリ オーバーヘッドが高く (グラフ構造の保存)、ビルド時間が長い

＃＃＃２．４． PQ (積量子化) — 圧縮ベース

ベクトルを **m** 個のサブベクトルに分割し、各サブベクトルは 1 バイト (256 重心) に量子化されます。

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

＃＃＃２．５。 ScaNN (Scalable Nearest Neighbors) — Google のアプローチ

**異方性ベクトル量子化** + ツリーベースのパーティショニングを組み合わせます。特に内積検索に最適化されています。

＃＃＃２．６．アルゴリズムを比較する

|アルゴリズム |検索時間 |メモリ |ビルド時間 |リコール@10 |最適な用途 |
|----------|-----------|----------|----------|-----------|----------|
| **フラット** | O(n×d) | 1x |なし | 100% | < 50K vectors, ground truth |
| **IVF** | O(√n × d) | 1x + centroids | Medium | 90-98% | Medium datasets, tunable |
| **HNSW** | O(log n) | 1.5-2x | Slow | 95-99% | High recall, low latency |
| **PQ** | O(n × m) | 0.01-0.1x | Slow | 80-95% | Memory-constrained |
| **IVF+PQ** | O(√n × m) | 0.01x + centroids | Slow | 85-95% | Large-scale production |
| **ScaNN** | O(√n) | 1x | Medium | 95-99% | Google-scale, MIPS |

> **現実:** ほとんどの実稼働システムでは、**HNSW** (高い再現率の場合) または **IVF+PQ** (大規模でメモリが制限されたデータセットの場合) が使用されます。 FAISS、Milvus、Pinecone はすべて両方をサポートしています。

---

## 3. FAISS の詳細

＃＃＃３．１． FAISSとは何ですか？

**FAISS** (Facebook AI 類似性検索) は、Python バインディングを使用して C++ で書かれた Meta のベクトル検索ライブラリです。特徴: **ローカルで実行、非常に高速、GPU サポート**。

```bash
# Cài đặt
pip install faiss-cpu    # CPU-only
# hoặc
pip install faiss-gpu    # GPU support (cần CUDA)
```

＃＃＃３．２． IndexFlatL2 — 正確な検索ベースライン

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

＃＃＃３．３． IndexIVFFlat — パーティションベースの検索

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

＃＃＃３．４． IndexHNSWFlat — グラフベースの検索

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

＃＃＃３．５。複合インデックス — 大規模向けの IVF + PQ

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

＃＃＃３．６．インデックスの保存とロード

```python
# Save index to disk
faiss.write_index(index_hnsw, "my_index.faiss")

# Load index
loaded_index = faiss.read_index("my_index.faiss")
print(f"Loaded {loaded_index.ntotal} vectors")

# Search with loaded index
distances, indices = loaded_index.search(xq[:1], k)
```

＃＃＃３．７． FAISS インデックスのチートシート

|インデックス |コード |電車？ |メモリ |スピード |思い出す |使用例 |
|----------|----------|----------|----------|----------|----------|----------|
| `IndexFlatL2` | `faiss.IndexFlatL2(d)` |いいえ |高 |遅い | 100% | < 50K, ground truth |
| `IndexFlatIP` | `faiss.IndexFlatIP(d)` | No | High | Slow | 100% | Cosine similarity |
| `IndexIVFFlat` | quantizer + nlist | Yes | High | Medium | 90-98% | 100K-1M vectors |
| `IndexHNSWFlat` | `faiss.IndexHNSWFlat(d, M)` | No | Very High | Fast | 95-99% | High recall needed |
| `IndexIVFPQ` | quantizer + nlist + m | Yes | Low | Fast | 85-95% | > 1M ベクトル |

---

## 4. Chroma — 軽量、ローカルファースト

＃＃＃４．１．なぜクロマなのか？

**Chroma** は、**高速プロトタイピング** と **ローカル開発** 向けに設計された最も軽量なベクター データベースです。 LangChain、LlamaIndex との組み込み統合。

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

＃＃＃４．２．セットアップと基本操作

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

＃＃＃４．３． Chroma + LangChain の統合

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

## 5. Milvus — 分散ベクトル データベース

＃＃＃５．１．ミルバス建築

**Milvus** は、数十億のベクターを含む **本番ワークロード** 向けに設計された分散ベクター データベースです。

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

＃＃＃５．２．ドッカーのセットアップ

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

＃＃＃５．３．コレクションの管理と検索

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

＃＃＃５．４． Milvus Lite — 埋め込みモード

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

## 6. 松ぼっくり — マネージド クラウド ベクトル DB

＃＃＃６．１．なぜ松ぼっくりなのか？

**Pinecone** は完全に管理されたベクター データベースであり、インフラストラクチャ管理は必要ありません。スケーリングやメンテナンスを心配せずに**迅速に出荷**したいチームに適しています。

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

＃＃＃６．２．セットアップとインデックス管理

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

＃＃＃６．３．松ぼっくりの価格モデル

|階層 |ベクター |コスト |最適な用途 |
|----------|-----------|----------|----------|
| **無料** | 1 つのインデックス上の 2M ベクトル | $0 |プロトタイピング、学習 |
| **スターター** |無制限 | ~$0.08/100 万読み取り |小規模な実稼働アプリ |
| **標準** |無制限 | ~$70+/月 |中生産 |
| **エンタープライズ** |無制限 |カスタム |大規模、SLA |

> **注:** Pinecone はストレージだけでなく、**読み取り/書き込み単位**で料金を請求します。 QPS が高いと、コストが急速に増加します。選択する前に作業負荷を見積もる必要があります。

---

## 7. Weaviate — スキーマベースのハイブリッド検索

**Weaviate** は、**ハイブリッド検索** (ベクトル + キーワード BM25) とスキーマベースのアプローチで際立っています。

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

## 8. Qdrant — Rust ベースのパフォーマンス

**Qdrant** は Rust で書かれており、**パフォーマンス** と **豊富なフィルタリング** を備えています。

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

## 9. メガ比較表

＃＃＃９．１．機能マトリックス

|特長 |フェイス |クロマ |ミルバス |松ぼっくり |回避する |クドラント |
|----------|----------|----------|----------|----------|----------|----------|
| **タイプ** |図書館 |組み込みDB |分散DB |マネージド SaaS | DB | DB |
| **言語** | C++ |パイソン | Go/C++ | - |行く |さび |
| **セルフホスト** | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| **マネージド クラウド** | ❌ | ✅ (クラウド) | ✅ (ジリズ) | ✅ | ✅ | ✅ |
| **最大ベクトル** |数十億* |数百万 |数十億 |数十億 |数十億 |数十億 |
| **メタデータ フィルター** | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **ハイブリッド検索** | ❌ | ❌ | ✅ (v2.4+) | ❌ | ✅ | ✅ |
| **GPU サポート** | ✅ | ❌ | ✅ |該当なし | ❌ | ❌ |
| **ニューサウスウェールズ州** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **体外受精** | ✅ | ❌ | ✅ |該当なし | ❌ | ❌ |
| **PQ** | ✅ | ❌ | ✅ |該当なし | ✅ | ✅ |
| **マルチテナント** | ❌ | ✅ | ✅ | ✅ (名前空間) | ✅ | ✅ |
| **REST API** | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **ラングチェーン** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **価格** |無料/OSS |無料/OSS |無料/OSS |無料 |無料/OSS |無料/OSS |

> **注:** FAISS "billions" にはカスタム シャーディングが必要です。松ぼっくりの内部が隠されています (独自仕様)。

＃＃＃９．２．いつ何を使うのか？

|シナリオ |おすすめ |理由 |
|----------|---------------|----------|
| **プロトタイプ / ハッカソン** |クロマ |ゼロセットアップ、インメモリ、LangChain が利用可能 |
| **制作、小規模チーム** | Qdrant または Chroma Cloud |導入が簡単、優れた API |
| **調査、ベンチマーク** |フェイス |低レベル制御、GPU、最速 |
| **エンタープライズ、数十億のベクトル** |ミルバス/ジリズ |分散型で大規模に実証済み |
| **ゼロオペレーション、マネージド** |松ぼっくり |インフラ管理がない |
| **ハイブリッド検索が必要** |回避する | BM25 + ベクターフュージョン内蔵 |
| **パフォーマンス重視** | Qdrant または FAISS | Rust/C++ ネイティブ速度 |

---

## 10. パフォーマンスのベンチマーク

### 10.1。ベンチマークのセットアップ

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

### 10.2。典型的なベンチマーク結果 (1M ベクトル、768-d)

|エンジン | QPS (シングルスレッド) | P50 レイテンシ | P99 レイテンシ |リコール@10 |メモリ |
|----------|----------|---------------|-------------|-----------|----------|
| FAISSフラット | ~30 | ~30ms | ~35ms | 100% | 3GB |
| FAISS HNSW (ef=64) | ~2,000 | ~0.5ms | ~1.5ms | 98.5% | 6GB |
|フェイス体外受精+PQ | ~5,000 | ~0.2ms | ~0.8ms | 92% | 0.1GB |
|ミルバス・ニューサウスウェールズ州 | ~1,500 | ~0.7ms | ~2ms | 97% | 6GB |
|ニューサウスウェールズ州クドラント | ~1,800 | ~0.6ms | ~1.8ms | 98% | 6GB |
|松ぼっくり (サーバーレス) | ~500-1000 | ～10ms | ~50ms | ~97% |該当なし |
|クロマHNSW | ~800 | ~1.2ms | ~3ms | 97% | 6GB |

> **重要な注意:** 上記の数値は**おおよそ**であり、ハードウェア、データセット、パラメーターに大きく依存します。決定する前に、必ず **実際のデータ** でベンチマークを行ってください。

### 10.3。スケーリング特性

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

## 11. 適切なベクトル DB の選択 — デシジョン ツリー

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

### 11.1。クイック意思決定ガイド

|質問 | → 答え |
|----------|----------|
|最速のプロトタイプ? | **Chroma** — 5 行のコード |
|調査/ベンチマーク? | **FAISS** — 低レベル、GPU |
|生産管理をしたくないですか? | **松ぼっくり** — ゼロオペレーション |
|生産、制御が必要ですか? | **クドラント** または **ミルバス** |
|ハイブリッド (ベクター + キーワード) が必要ですか? | **ウィアビエイト** |
|データセット > 10 億? | **ミルバス** (配布) |
|予算 = 0? | **FAISS** または **Qdrant** (セルフホスト) |

＃＃＃１１．２．一般的なアンチパターン

|アンチパターン |問題 |推奨事項 |
|---------------|--------|---------------|
|プロトタイピングに松ぼっくりを使用する |お金がかかる、ネットワークに依存する | Chroma ローカルを使用する |
|実稼働用の FAISS にはメタデータがあります | FAISS はメタデータ フィルターをサポートしていません。 Milvus/Qdrant を使用する |
| 10K ベクトルの Milvus |過剰なエンジニア、大きな運用オーバーヘッド | Chroma または FAISS で十分 |
|ブルートフォース検索 > 100K |許容できない遅延 |インデックス ANN (HNSW、IVF) |
|ユースケースを知る前に DB を選択する |間違ったツールにロックする |最初に実際のデータでベンチマークを行う |

---

## 12. 完全な RAG パイプラインの例 — ベクトル DB 統合

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

## 概要

この記事では、インデックス付けアルゴリズムから 4 つの主要なエンジンの実践的なコードに至るまで、Vector Database の全体像を取り上げます。

|コンセプト |重要なポイント |
|----------|---------------|
| **ブルートフォース** | O(n×d)、50K 未満のベクトルにのみ使用 |
| **ANN アルゴリズム** | HNSW (高再現率)、IVF+PQ (メモリ効率が高い) |
| **フェイス** |ライブラリレベルの最速の GPU、研究/カスタム パイプラインに使用 |
| **クロマ** |軽量 DB、プロトタイピングに最適、LangChain 統合 |
| **ミルバス** |分散型、エンタープライズ/10 億規模に最適 |
| **松ぼっくり** |マネージド型、ゼロオペレーション運用に最適 |
| **ウィアビエイト** |ベストハイブリッド検索 (ベクター + BM25) |
| **クドラント** | Rust ベース、優れたパフォーマンス、豊富なフィルタリング |

**Vector DB を選択する際のメンタル モデル:**

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

## 演習

### 演習 1: FAISS インデックスの比較 (⏱ 30 分)

1. 500K のランダム ベクトルのデータセットを作成します (次元 = 384)
2. 4 種類のインデックスを構築します。 `IndexFlatL2`、 `IndexIVFFlat` (nlist=100)、 `IndexHNSWFlat` (M=32)、 `IndexIVFPQ` (m=48)
3. ベンチマーク: 検索時間、リコール@10 (フラットと比較)、メモリ使用量
4. 表を描いて結果を比較する

### 演習 2: Chroma RAG パイプライン (⏱ 45 分)

1. 少なくとも 50 個のドキュメントを含む Chroma コレクションを作成します (Wikipedia の段落を使用できます)
2. メタデータ フィルタリングを使用したセマンティック検索を実装する
3. LangChain RAG チェーンにレトリーバーとして統合
4. 結果を比較する `similarity_search` 対 `mmr` (最大限界関連性)

### 演習 3: マルチ DB ベンチマーク (⏱ 60 分)

1. 100K ベクトルのデータセットを準備します (次元 = 768)
2. FAISS、Chroma、Qdrant (または Milvus) に同じパイプラインを実装します。
3. 比較: 挿入時間、検索レイテンシ、リコール、メモリ
4. 短いレポート (500 ワード) を作成します。「プロジェクト X にはどの DB を選択しますか? その理由は?」

### 演習 4: 本番環境に対応したベクトル検索 (⏱ 45 分)

1. ランダム ベクトルの代わりに実際のエンベディング (文変換または OpenAI) を使用します。
2. 実際の PDF/Web から 1000 以上のテキスト チャンクをロードする
3. 再ランキングの実装: ベクトル DB を使用してトップ 20 を取得し、クロスエンコーダーを使用してトップ 5 に再ランキングします。
4. 回答の質を以下の間で比較します: (a) ベクトル検索のみ vs (b) ベクトル検索 + 再ランキング
