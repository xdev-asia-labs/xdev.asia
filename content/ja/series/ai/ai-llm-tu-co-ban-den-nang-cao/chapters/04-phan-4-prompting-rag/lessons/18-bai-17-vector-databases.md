---
id: 019c9619-bb17-7017-c017-bb1700000017
title: 'レッスン 17: ベクトル データベース — 埋め込みとセマンティック検索'
slug: bai-17-vector-databases
description: >-
  エンベディングとベクトル検索アルゴリズムについての深い理解。 FAISS、ChromaDB、Qdrant、Pinecone、Weaviate
  を比較してください - いつどれを使用するか。実用的なセマンティック検索エンジンを構築し、CLIP を使用してマルチモーダルな埋め込みを探索します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 16
section_title: 'パート 4: プロンプトと RAG'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI と LLM: 基本から高度まで'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 AI と ML — レッスン 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 17: ベクトル データベース — 埋め込みと</tspan>
      <tspan x="60" dy="42">セマンティック検索</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI と LLM: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: プロンプトと RAG</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# レッスン 17: ベクトル データベース — 埋め込みとセマンティック検索

## 1. 埋め込みとは何ですか?

埋め込みとは、データ (テキスト、画像、オーディオ) を高次元空間の算術ベクトルに変換するプロセスであり、その空間内で *互いに意味のある近接* なものが * 互いに近接して配置* されるようになります。

### 進化の歴史

**Word2Vec (2013 — Google):** 単語レベルの埋め込み。 「王－男＋女≒女王」。問題: 文脈に関係なく、各単語にはベクトルが 1 つだけあります (「銀行」は川岸ですか、銀行ですか?)。

**ELMo / BERT (2018):** コンテキスト埋め込み — 同じ単語でもコンテキストに応じて異なるベクトルを持ちます。大躍進。

**Sentence Transformers (2019):** シャム ネットワークは、類似性タスク用の高品質な *文レベル* 埋め込みを作成するために微調整されています。

**LLM エンベディング (2022+):** OpenAI `text-embedding-3`、ここにあります `embed-v3`、グーグル `text-embedding-004` — 大規模なモデルからの埋め込み、より深いセマンティクスの理解。

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

## 2. コサイン類似度 vs ユークリッド距離 vs 内積

2 つのベクトル間の類似性を測定するための 3 つの一般的なメトリクス:

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

|メトリクス |いつ使用するか |特長 |
|---|---|---|
|コサイン類似度 |テキストの埋め込み |大きさを無視して方向だけを気にする |
|ユークリッド距離 |画像の特徴、正規化なし |絶対距離を計算する |
|内積 |正規化された |最速、正規化した場合の結果 = コサイン |

## 3. ANN — 近似最近傍

1536 次元の 10 億ベクトルで正確な最近傍を見つけることは実現不可能です (O(n))。 ANN アルゴリズムは、極度の速度を得るために多少の精度を犠牲にします。

### HNSW — 階層型ナビゲート可能なスモールワールド

最も人気のあるアルゴリズム。多層階層グラフを構築します。

- **上位層:** 少数のノード、長い接続 - おおよそのエリアへの素早いナビゲーション
- **下位層:** 多くのノード、短い接続 - 狭いエリアでの正確な検索

```
Search complexity: O(log n) thay vì O(n)
Recall@10: ~99% với cài đặt đúng
```

### IVF — 反転ファイルインデックス

ベクトル空間を *クラスター* (ボロノイ セル) に分割します。検索するときは、最も近いいくつかのクラスターのみを検索します。

```
Build: K-means clustering → assign vectors to clusters
Search: Find nearest clusters → search only in those clusters
```

## 4. FAISS — Facebook AI 類似性検索

FAISS は Meta の C++ ライブラリ (Python バインディング付き) です。ローカル検索では最速ですが、永続性は組み込まれていません。

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

**FAISS を使用する場合:** 中小規模のデータセット (<10M ベクトル)、非常に高速な、ネットワークのない環境 (エッジ、オンプレミス) が必要です。

## 5. ChromaDB — Embedded, Easy to Use

ChromaDB はプロトタイピング用の「Energizer Battery」ベクター データベースです。プロセスに組み込まれて実行されるため、別のサーバーは必要ありません。

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

Qdrant (Rust で書かれた) は、高度なフィルタリング、ペイロード、および多くのエンタープライズ機能を備えた強力な運用オプションです。

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

Pinecone にはインフラストラクチャ管理や自動スケーリングは必要ありませんが、コストがかかります。

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

Weaviate は、マルチモーダル機能 (テキスト + 画像) と GraphQL インターフェイスで際立っています。

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

## 9. 一般的な比較

| | FAISS | ChromaDB | Qdrant | Pinecone | Weaviate |
|---|---|---|---|---|---|
| **Deployment** | Embedded | Embedded/Server | Self-hosted/Cloud | Managed Cloud | Self-hosted/Cloud |
| **速度** |非常に速い |速い |非常に速い |速い |平均 |
| **フィルタリング** |なし |基本 |上級 |メタデータフィルター |グラフQL |
| **マルチモーダル** |いいえ |いいえ |制限事項 |いいえ |はい (クリップ) |
| **スケール** |最大 ~100M |最大 100 万 |数十億 |自動 |数十億 |
| **コスト** |無料 |無料 |無料枠 |充電 |無料枠 |
| **適切** |研究、地元 |プロトタイプ、開発 |制作 |マネージド製品 |マルチモーダル |

**ユースケースに応じた推奨事項:**
- **単純なプロトタイプ / RAG:** ChromaDB
- **Production on-premise:** Qdrant
- **管理済み、操作は不要です:** 松ぼっくり
- **Multimodal search:** Weaviate
- **Maximum speed, local:** FAISS

## 10. コード: セマンティック検索エンジンを構築する

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

    def search(self, query: str, top_k: int = 5) -> リスト[辞書]:
        query_embedding = self.model.encode([クエリ]、normalize_embeddings=True)
        結果 = self.collection.query(
            query_embeddings=query_embedding.tolist()、
            n_results=top_k、
        ）

        ヒット = []
        for i in range(len(results["ids"][0])):
            ヒット.append({
                "id": 結果["ids"][0][i],
                "テキスト": 結果["ドキュメント"][0][i],
                "メタデータ": 結果["メタデータ"][0][i],
                "score": 1 - results[" distances"][0][i]、 # 距離を類似度に変換します
            })
        ヒットを返す

    デフォルト統計(自分自身):
        return {"total_documents": self.collection.count()}


# デモ
エンジン = SemanticSearchEngine()

# サンプルドキュメントのインデックスを作成します
サンプルドキュメント = [
    {"id": "1", "title": "RAG の紹介", "text": "RAG は検索と言語生成を組み合わせて幻覚を軽減します"},
    {"id": "2", "title": "Vector Database", "text": "Vector データベースは埋め込みを保存し、意味的類似性検索をサポートします"},
    {"id": "3", "title": "微調整", "text": "微調整は、特殊なデータセットでモデルのトレーニングを継続するプロセスです"},
    {"id": "4", "title": "プロンプト エンジニアリング", "text": "プロンプト エンジニアリングは、LLM の出力を最適化するためのコマンド設計手法です"},
    {"id": "5", "title": "LangChain", "text": "LangChain は、LLM ベースのアプリケーションの構築を容易にする Python フレームワークです"},
】

エンジン.インデックス_ドキュメント(サンプル_ドキュメント)

# 検索
query = 「AI チャットボットの精度を向上させるにはどうすればよいですか?」
結果 = Engine.search(クエリ、top_k=3)

print(f"\nクエリ: {クエリ}")
print("\n上位の結果:")
結果の r の場合:
    print(f" [{r['score']:.4f}] {r['metadata']['title']}: {r['text'][:80]}...")
```

## 11. CLIP を使用したマルチモーダル埋め込み

OpenAI の CLIP (Contrastive Language-Image Pre-training) を使用すると、テキストと画像の両方を同じベクトル空間に埋め込むことができます。テキストと関連する画像は互いに近くなります。

```パイソン
# pip トランスフォーマーピロートーチをインストールします
トランスフォーマーインポート CLIPProcessor、CLIPModel から
PILインポート画像から
輸入トーチ
インポートリクエスト

モデル = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
プロセッサ = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# 写真を埋め込む
image = Image.open("製品.jpg")
image_inputs =processor(images=image, return_tensors="pt")
torch.no_grad() を使用:
    image_features = model.get_image_features(**image_inputs)
    image_features = image_features / image_features.norm(dim=-1, keepdim=True)

# 埋め込みテキストクエリ
texts = [「寝ている猫」、「赤い車」、「青い空」]
text_inputs =processor(text=texts、return_tensors="pt"、padding=True)
torch.no_grad() を使用:
    text_features = model.get_text_features(**text_inputs)
    text_features = text_features / text_features.norm(dim=-1, keepdim=True)

# 画像とテキストクエリ間の類似性を計算します
同様 = (image_features @ text_features.T).squeeze()
テキストの場合、zip 内の SIM (テキスト、同様):
    print(f"{sim:.4f} | {テキスト}")
# 出力: 画像を正しく説明するテキストの類似性が最も高くなります。
```

CLIP を使用すると、テキスト (Google 画像 DIY スタイル) またはテキストと画像の両方を含むドキュメントを含む RAG を使用して画像検索システムを構築できます。

## 概要

ベクトル データベースは、すべての RAG システムの中心です。類似性メトリクス、ANN アルゴリズム (HNSW、IVF)、および各データベースの特性を理解すると、それぞれの状況に適切なツールを選択するのに役立ちます。プロトタイプ: ChromaDB を使用。実稼働オンプレミス: Qdrant。マネージド クラウド: 松ぼっくり。マルチモーダル: 回避します。最大ローカル速度が必要です: FAISS。
