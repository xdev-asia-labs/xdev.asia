---
id: 019c9619-ff06-7006-a006-ff0600000006
title: 'レッスン 6: メタデータ、フィルタリング、ハイブリッド検索'
slug: bai-6-metadata-hybrid-search
description: >-
  メタデータをチャンクに添付し、フィールドでフィルタリングし、ベクトル検索とキーワード検索 (BM25)
  を組み合わせて、より正確な検索を実現します。セルフクエリレトリバー。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 2: ドキュメント処理パイプライン'
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: リアルバトルRAG：基礎から上級まで
  slug: rag-thuc-chien
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-630" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-630)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1089" cy="77" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1078" cy="266" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1067" cy="195" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="1056" cy="124" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="53" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="247" x2="1100" y2="327" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="277" x2="1050" y2="347" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1083.3730669589463,226 1083.3730669589463,268 1047,289 1010.6269330410536,268 1010.6269330410536,226 1047,205" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI と ML — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 6: メタデータ、フィルタリング、ハイブリッド検索</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">リアルバトルRAG：基礎から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: ドキュメント処理パイプライン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

前のレッスンでは、ドキュメントを**チャンク**する方法を学習しました。しかし、純粋なベクトル検索には大きな欠点が 1 つあります。それは、**意味** (セマンティック) によってのみ検索し、**属性** (作成日、作成者、文書タイプなど) によってフィルター処理することができません。

> **例:** ユーザーは「2025 年の休暇ポリシー」を尋ねます。ベクター検索では、**類似** コンテンツの 2023 年のポリシーが返されることがありますが、間違った年です。メタデータ フィルタリングは次のことを解決します。 `year == 2025 AND category == "HR"`。

この記事では、検索をアップグレードするための 3 つのテクニックについて説明します。
1. **メタデータ** — 各チャンクに追加情報を添付します
2. **フィルタリング** — 検索前/後のチャンクのフィルタリング
3. **ハイブリッド検索** — ベクトル + キーワードの組み合わせ (BM25)

---

## 1. メタデータ — チャンクに情報を添付する

### 1.1 メタデータとは何ですか?

ベクター ストアの各チャンクは 3 つの部分で構成されます。

```
┌─────────────────────────────────────────┐
│  Chunk                                   │
│  ├── content: "Nghỉ phép 15 ngày..."    │
│  ├── embedding: [0.12, -0.34, ...]      │  ← vector search dùng
│  └── metadata: {                         │  ← filtering dùng
│        source: "hr-policy.pdf",          │
│        page: 5,                          │
│        year: 2025,                       │
│        department: "HR",                 │
│        author: "Nguyen Van A"            │
│      }                                   │
└─────────────────────────────────────────┘
```

### 1.2 メタデータを自動的に抽出する

```python
"""Gắn metadata khi chunk tài liệu"""
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader
from datetime import datetime

# Load PDF — tự động có metadata page number
loader = PyPDFLoader("hr-policy-2025.pdf")
pages = loader.load()

# Thêm metadata custom
for page in pages:
    page.metadata.update({
        "source_type": "pdf",
        "department": "HR",
        "year": 2025,
        "language": "vi",
        "last_updated": "2025-01-15",
    })

# Chunk — metadata được kế thừa cho mỗi chunk
splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = splitter.split_documents(pages)

print(chunks[0].metadata)
# {'source': 'hr-policy-2025.pdf', 'page': 0,
#  'source_type': 'pdf', 'department': 'HR', 'year': 2025, ...}
```

### 1.3 メタデータは何に添付する必要がありますか?

|メタデータフィールド |例 |使用例 |
|---------------|-------|-----------|
| `source` | "hr-policy.pdf" |ソースを取得 |
| `page` | 5 |ユーザー検証 |
| `year` / `date` | 2025年 |時間でフィルターする |
| `category` | 「人事」「財務」 |部門でフィルターする |
| `language` | "vi"、"en" |多言語RAG |
| `author` | 「グエン・ヴァン・A」 |著者でフィルターする |
| `chunk_index` | 3 |並べ替え順序 |
| `doc_type` | 「ポリシー」、「よくある質問」 |文書の分類 |

> **💡 演習 1:** 5 つの異なるファイル (PDF、TXT、DOCX) を含むフォルダーを読み込みます。ソース、ファイルタイプ、ファイルサイズ、作成日などのメタデータを自動的に添付します。

---

## 2. メタデータのフィルタリング

### 2.1 クエリ時のフィルター

```python
"""Filter metadata trong Chroma"""
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings

# Index chunks (đã có metadata)
vectorstore = Chroma.from_documents(
    chunks,
    OpenAIEmbeddings(model="text-embedding-3-small"),
    collection_name="company_docs"
)

# Search KHÔNG filter — trả về kết quả từ mọi phòng ban
results = vectorstore.similarity_search("nghỉ phép bao nhiêu ngày?", k=5)

# Search CÓ filter — chỉ tìm trong tài liệu HR năm 2025
results = vectorstore.similarity_search(
    "nghỉ phép bao nhiêu ngày?",
    k=5,
    filter={"year": 2025, "department": "HR"}  # Exact match
)

# Filter phức tạp: $and, $or, $gt, $lt, $in
results = vectorstore.similarity_search(
    "chính sách lương",
    k=5,
    filter={
        "$and": [
            {"year": {"$gte": 2024}},           # Năm >= 2024
            {"department": {"$in": ["HR", "Finance"]}},  # HR hoặc Finance
        ]
    }
)
```

### 2.2 Self-Query Retriever — クエリからの自己解析フィルター

```python
"""Self-Query: AI tự tách query thành search + filter"""
from langchain.retrievers import SelfQueryRetriever
from langchain.chains.query_constructor.base import AttributeInfo
from langchain_openai import ChatOpenAI

# Mô tả metadata fields cho LLM hiểu
metadata_field_info = [
    AttributeInfo(name="year", description="Năm ban hành", type="integer"),
    AttributeInfo(name="department", description="Phòng ban: HR, Finance, IT", type="string"),
    AttributeInfo(name="doc_type", description="Loại: policy, faq, guide", type="string"),
]

retriever = SelfQueryRetriever.from_llm(
    llm=ChatOpenAI(model="gpt-4o-mini", temperature=0),
    vectorstore=vectorstore,
    document_contents="Tài liệu nội bộ công ty về chính sách và quy trình",
    metadata_field_info=metadata_field_info,
)

# User hỏi: "Chính sách HR năm 2025 về nghỉ phép"
# → LLM tự parse:
#   search_query = "chính sách nghỉ phép"
#   filter = {"year": 2025, "department": "HR"}
results = retriever.invoke("Chính sách HR năm 2025 về nghỉ phép")
```

```
Flow:
User query: "Chính sách HR năm 2025 về nghỉ phép"
                    │
          ┌─────────┴─────────┐
          │   Self-Query LLM  │
          │   (parse intent)  │
          └─────────┬─────────┘
                    │
    ┌───────────────┼───────────────┐
    │               │               │
search_query    filter_year    filter_dept
"nghỉ phép"      2025           "HR"
    │               │               │
    └───────────────┼───────────────┘
                    │
          ┌─────────┴─────────┐
          │   Vector Store    │
          │  (search+filter)  │
          └─────────┬─────────┘
                    │
              Filtered results
```

> **💡 演習 2:** 少なくとも 3 つのメタデータ フィールドを持つドキュメント セットのセルフクエリ レトリバーを作成します。 5 つの自然な質問でテストします。 LLM 解析フィルターが正しいかどうかを確認してください。

---

## 3. ハイブリッド検索 — ベクター + キーワード

### 3.1 純粋なベクトル検索の問題点

```
Query: "Nghị định 168/2024/NĐ-CP"

Vector search: tìm theo ý nghĩa → có thể trả về
               Nghị định 150/2023 (nội dung tương tự nhưng SAI số!)

Keyword search (BM25): tìm đúng "168/2024/NĐ-CP" → ĐÚNG

→ Kết hợp cả 2 = Hybrid Search
```

|検索タイプ |強い |弱い |
|----------|----------|-----|
| **ベクトル** |意味、同義語、文脈を理解する |完全一致 (コード、番号、名前) が必要な場合は間違っています。
| **キーワード (BM25)** |完全一致、コード、固有名詞 |同義語、文脈がわかりません |
| **ハイブリッド** |両方の利点を組み合わせる |重量を調整する必要があります |

### 3.2 ハイブリッド検索の実装

```python
"""Hybrid search với BM25 + Vector"""
from langchain_community.retrievers import BM25Retriever
from langchain.retrievers import EnsembleRetriever
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings

# Chuẩn bị documents (đã chunk)
# chunks = [Document(...), Document(...), ...]

# 1. Vector retriever
vectorstore = Chroma.from_documents(chunks, OpenAIEmbeddings())
vector_retriever = vectorstore.as_retriever(search_kwargs={"k": 5})

# 2. BM25 retriever (keyword-based)
bm25_retriever = BM25Retriever.from_documents(chunks, k=5)

# 3. Ensemble (hybrid) — weight 50/50
hybrid_retriever = EnsembleRetriever(
    retrievers=[vector_retriever, bm25_retriever],
    weights=[0.5, 0.5],  # Tùy chỉnh: 0.7/0.3 nếu ưu tiên vector
)

# Query
results = hybrid_retriever.invoke("Nghị định 168/2024/NĐ-CP")
```

### 3.3 相互ランク融合 (RRF)

2 つの取得者からの結果を結合する場合は、**merge + Rank** メソッドが必要です。

```
Vector results:        BM25 results:
1. Doc A (score 0.95)  1. Doc C (score 8.2)
2. Doc B (score 0.88)  2. Doc A (score 7.1)
3. Doc C (score 0.82)  3. Doc D (score 6.5)

RRF formula: score(d) = Σ 1/(k + rank(d))  (k=60 default)

Doc A: 1/(60+1) + 1/(60+2) = 0.0164 + 0.0161 = 0.0325  ← Top 1!
Doc C: 1/(60+3) + 1/(60+1) = 0.0159 + 0.0164 = 0.0323  ← Top 2
Doc B: 1/(60+2) + 0       = 0.0161                      ← Top 3
Doc D: 0       + 1/(60+3) = 0.0159                      ← Top 4
```

> ドクターAは**両方**のレトリバーに登場→最高ランク！

### 3.4 松ぼっくりハイブリッド検索 (実稼働対応)

```python
"""Pinecone native hybrid search — sparse + dense vectors"""
from pinecone import Pinecone
from pinecone_text.sparse import BM25Encoder

# Sparse encoder (BM25)
bm25 = BM25Encoder()
bm25.fit([chunk.page_content for chunk in chunks])

# Dense encoder (embedding)
from langchain_openai import OpenAIEmbeddings
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

# Index với cả 2 loại vector
pc = Pinecone(api_key="your-key")
index = pc.Index("hybrid-rag")

for chunk in chunks:
    dense = embeddings.embed_query(chunk.page_content)
    sparse = bm25.encode_queries(chunk.page_content)
    
    index.upsert(vectors=[{
        "id": chunk.metadata.get("id", str(hash(chunk.page_content))),
        "values": dense,          # Dense vector
        "sparse_values": sparse,  # Sparse vector (BM25)
        "metadata": chunk.metadata
    }])

# Query hybrid
query = "Nghị định 168/2024"
results = index.query(
    vector=embeddings.embed_query(query),
    sparse_vector=bm25.encode_queries(query),
    top_k=5,
    alpha=0.5,  # 0=pure sparse, 1=pure dense, 0.5=hybrid
)
```

> **💡 演習 3:** 一連のドキュメントに対してハイブリッド検索を実装します。結果を比較します: (a) ベクターのみ、(b) BM25 のみ、(c) ハイブリッド。 10 個のテスト質問を使用し、各種類の正解率を記録します。

---

## 4. ハイブリッド ウェイトの調整

### 4.1 ベクターとキーワードのどちらを優先すべきか?

|使用例 |ベクトルの重み | BM25重量 |理由 |
|--------|:---:|:---:|------|
|よくある質問 / 一般的な Q&A | 0.7 | 0.3 |ユーザーはさまざまな方法で質問します |
|法律/法典 | 0.3 | 0.7 |完全一致ルールコードが必要 |
|技術文書 | 0.5 | 0.5 |キーワードとセマンティクスの両方が必要 |
|多言語 | 0.8 | 0.2 | Vector はクロスランゲージに適しています |
|コードドキュメント | 0.4 | 0.6 |関数名 = キーワード |

### 4.2 重みの自動調整

```python
"""Benchmark hybrid weights trên golden test set"""
test_queries = [
    {"q": "nghỉ phép bao nhiêu ngày", "expected_doc": "hr-policy.pdf"},
    {"q": "Nghị định 168/2024", "expected_doc": "legal/nd168.pdf"},
    # ... 10+ câu test
]

weight_configs = [
    (0.3, 0.7), (0.4, 0.6), (0.5, 0.5),
    (0.6, 0.4), (0.7, 0.3), (0.8, 0.2),
]

best_config = None
best_accuracy = 0

for vec_w, bm25_w in weight_configs:
    hybrid = EnsembleRetriever(
        retrievers=[vector_retriever, bm25_retriever],
        weights=[vec_w, bm25_w],
    )
    
    correct = 0
    for test in test_queries:
        results = hybrid.invoke(test["q"])
        sources = [r.metadata["source"] for r in results[:3]]
        if test["expected_doc"] in sources:
            correct += 1
    
    accuracy = correct / len(test_queries)
    print(f"Vector={vec_w}, BM25={bm25_w}: {accuracy:.0%}")
    
    if accuracy > best_accuracy:
        best_accuracy = accuracy
        best_config = (vec_w, bm25_w)

print(f"\nBest: Vector={best_config[0]}, BM25={best_config[1]} ({best_accuracy:.0%})")
```

---

## 概要

|コンセプト |覚えておいてください |
|----------|----------|
| **メタデータ** |チャンクに添付された追加情報 (ソース、年、カテゴリなど) |
| **フィルタリング** |検索前/検索後にメタデータでチャンクをフィルターする |
| **セルフクエリ** | LLM は質問を自動的に解析して検索 + フィルターに変換します。
| **BM25** |キーワード検索、完全一致に強い |
| **ハイブリッド検索** | Vector + BM25、両方の利点を組み合わせた |
| **RRF** |相互ランク融合 — 2 つのレトリーバーの結果をマージする |
| **重量調整** |比率を選択するためのゴールデン テスト セットのベンチマーク |

## 一般的な演習

1. ✅ 3 つの小さな演習 (1、2、3) を完了します。
2. **完全なパイプライン:** 10 個以上のドキュメントをロード → 完全なメタデータを添付 → Chroma にインデックス → ハイブリッド検索を実装 → 20 のテスト質問で精度ベクトルとハイブリッドを比較。
3. **セルフクエリ + ハイブリッド:** セルフクエリ取得機能とハイブリッド検索を組み合わせます。ユーザーは「給与に関する 2025 年の人事方針」→ セルフフィルター部門 + 年 + ハイブリッド検索コンテンツを尋ねました。
4. **ダッシュボード:** Streamlit アプリを作成します: ドキュメントをアップロード → メタデータを添付 → UI フィルターで検索 (ドロップダウンで年、部門を選択)。

> **次の記事:** クエリ変換 — HyDE、マルチクエリ、ステップバック — は、1 つの質問をさまざまなバリエーションに変換し、より正確な検索を実現します。
