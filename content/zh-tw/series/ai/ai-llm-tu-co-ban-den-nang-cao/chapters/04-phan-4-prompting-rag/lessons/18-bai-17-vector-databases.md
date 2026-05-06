---
id: 019c9619-bb17-7017-c017-bb1700000017
title: 第 17 課：向量資料庫 — 嵌入與語意搜尋
slug: bai-17-vector-databases
description: >-
  深入理解嵌入和向量搜尋演算法。比較 FAISS、ChromaDB、Qdrant、Pinecone、Weaviate —
  何時使用哪一個。建立實用的語意搜尋引擎並使用 CLIP 探索多模態嵌入。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 16
section_title: 第 4 部分：提示和 RAG
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 人工智慧和法學碩士：從基礎到高級
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 17 課：向量資料庫 — 嵌入 &</tspan>
      <tspan x="60" dy="42">語意搜尋</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧和法學碩士：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：提示和 RAG</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

# 第 17 課：向量資料庫 — 嵌入與語意搜尋

## 1. 什麼是嵌入？

嵌入是將資料（文字、圖像、音訊）轉換為高維空間中的算術向量的過程，以便「彼此有意義地接近」的事物在該空間中「彼此靠近」。

### 演化史

**Word2Vec（2013 - Google）：** 詞級嵌入。 「國王-男人+女人≈女王」。問題：每個字只有一個向量，無論上下文如何（“bank”是河岸還是銀行？）。

**ELMo / BERT (2018)：** 上下文嵌入－同一個單字根據上下文有不同的向量。大突破。

**句子變形金剛（2019）：** 連體網絡經過微調，可以為相似性任務創建高品質的*句子級*嵌入。

**法學碩士嵌入（2022+）：** OpenAI `text-embedding-3`, 一致 `embed-v3`, 谷歌 `text-embedding-004` - 從大型模型中嵌入，理解更深層的語意。

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

## 2. 餘弦相似度 vs 歐氏距離 vs 點積

衡量兩個向量之間相似性的三種流行指標：

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

|指標|何時使用 |特點|
|---|---|---|
|餘弦相似度|文字嵌入 |忽略大小，只關心方向|
|歐幾里德距離 |影像特徵，未歸一化 |計算絕對距離 |
|點積|標準化|最快，歸一化後結果 = 餘弦 |

## 3. ANN——近似最近鄰

在 10 億個 1536 維向量中找到精確的最近鄰是不可行的 (O(n))。人工神經網路演算法以一點精確度換取極快的速度。

### HNSW — 分層可導航小世界

最流行的演算法。建構多層層次圖：

- **上層：** 節點少，連接長－快速導航到大致區域
- **下層：**節點多，連線短－小範圍精準搜尋

```
Search complexity: O(log n) thay vì O(n)
Recall@10: ~99% với cài đặt đúng
```

### IVF — 倒排檔索引

將向量空間劃分為*簇*（Voronoi 單元）。搜尋時，只在最近的幾個簇中搜尋：

```
Build: K-means clustering → assign vectors to clusters
Search: Find nearest clusters → search only in those clusters
```

## 4. FAISS — Facebook AI 相似性搜索

FAISS 是來自 Meta 的 C++ 函式庫（與 Python 綁定）——本地搜尋速度最快，沒有內建持久性。

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

**何時使用FAISS：**中小型資料集（<10M向量），需要極高的速度，無網路的環境（邊緣、本地）。

## 5. ChromaDB — Embedded, Easy to Use

ChromaDB 是用於原型設計的「Energizer 電池」向量資料庫 - 嵌入在流程中運行，無需單獨的伺服器。

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

Qdrant（以 Rust 編寫）是一個強大的生產選項，具有進階過濾、有效負載和許多企業功能。

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

Pinecone 不需要基礎設施管理或自動擴展，但有成本。

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

Weaviate 以其多模式功能（文字+圖像）和 GraphQL 介面而脫穎而出。

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

## 9. 一般比較

| | FAISS | ChromaDB | Qdrant | Pinecone | Weaviate |
|---|---|---|---|---|---|
| **Deployment** | Embedded | Embedded/Server | Self-hosted/Cloud | Managed Cloud | Self-hosted/Cloud |
| **速度** |極快|快|非常快|快|平均 |
| **過濾** |無 |基本 |進階|元資料過濾器 | GraphQL |
| **多式聯運** |沒有 |沒有 |限制 |沒有 |是的（剪輯）|
| **規模** |高達~100M |高達~1M |數十億|自動|數十億|
| **成本** |免費|免費|免費套餐 |充電|免費套餐 |
| **適合** |本地研究 |原型，開發|生產|託管產品|多式聯運 |

**根據用例推薦：**
- **簡單原型/RAG：** ChromaDB
- **Production on-premise:** Qdrant
- **託管，不需要操作：** 松果
- **Multimodal search:** Weaviate
- **Maximum speed, local:** FAISS

## 10. 程式碼：建立語意搜尋引擎

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

    def search(self, query: str, top_k: int = 5) -> 列表[字典]：
        query_embedding = self.model.encode（[查詢]，normalize_embeddings = True）
        結果= self.collection.query(
            query_embeddings=query_embedding.tolist(),
            n_結果=top_k,
        ）

        點擊數 = []
        對於範圍內的 i(len(結果["ids"][0]))：
            命中.追加（{
                “id”：結果[“ids”][0][i]，
                “文本”：結果[“文檔”][0][i]，
                「元資料」：結果[「元資料」][0][i]，
                "score": 1 - results["distances"][0][i], # 將距離轉換為相似度
            })
        返回點擊

    def 統計數據（自身）：
        返回 {"total_documents": self.collection.count()}


# 演示
引擎 = SemanticSearchEngine()

# 索引一些範例文檔
樣本文檔 = [
    {"id": "1", "title": "RAG 簡介", "text": "RAG 將檢索與語言生成結合以減少幻覺"},
    {"id": "2", "title": "向量資料庫", "text": "向量資料庫儲存嵌入並支援語意相似度搜尋"},
    {"id": "3", "title": "Fine-tuning", "text": "Fine-tuning 是在專門的資料集上繼續訓練模型的過程"},
    {"id": "4", "title": "提示工程", "text": "提示工程是一種最佳化LLM輸出的指令設計技術"},
    {"id": "5", "title": "LangChain", "text": "LangChain 是一個 Python 框架，可以讓建立基於 LLM 的應用程式變得更加容易"},
]

引擎.index_documents（樣本文件）

# 搜尋
query =“如何提高AI聊天機器人的準確性？”
結果 = engine.search(查詢, top_k=3)

print(f"\n查詢: {query}")
print("\n最高結果:")
對於結果中的 r：
    print(f" [{r['分數']:.4f}] {r['元資料']['標題']}: {r['文字'][:80]}...")
```

## 11. 使用 CLIP 進行多模態嵌入

OpenAI 的 CLIP（對比語言-圖像預訓練）允許將文字和圖像嵌入到同一向量空間中 - 文字和相關圖像將彼此接近。

```蟒蛇
# pip install 變形金剛枕頭火炬
從 Transformer 匯入 CLIPProcessor、CLIPModel
從 PIL 匯入影像
進口火炬
導入請求

模型 = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
處理器 = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# 嵌入照片
image = Image.open("產品.jpg")
image_inputs = 處理器(images=image, return_tensors="pt")
使用 torch.no_grad()：
    image_features = model.get_image_features(**image_inputs)
    image_features = image_features / image_features.norm(dim=-1, keepdim=True)

# 嵌入文字查詢
texts = [“一隻熟睡的貓”，“紅色汽車”，“藍天”]
text_inputs = 處理器(text=texts, return_tensors="pt", padding=True)
使用 torch.no_grad()：
    text_features = model.get_text_features(**text_inputs)
    text_features = text_features / text_features.norm(dim=-1, keepdim=True)

# 計算圖像和文字查詢之間的相似度
相似性 = (image_features @ text_features.T).squeeze()
對於文本，sim in zip（文本，類似）：
    print(f"{sim:.4f} | {text}")
# 輸出：正確描述圖像的文字將具有最高的相似度
```

CLIP 允許使用文字（Google Images DIY 風格）或 RAG 以及包含文字和圖像的文件來建立圖像搜尋系統。

## 總結

向量資料庫是每個 RAG 系統的核心。了解相似性指標、ANN 演算法（HNSW、IVF）和每個資料庫的特徵將幫助您為每種情況選擇正確的工具。原型：ChromaDB。本地生產：Qdrant。託管雲端：Pinecone。多式聯運：Weaviate。需要最大本地速度：FAISS。
