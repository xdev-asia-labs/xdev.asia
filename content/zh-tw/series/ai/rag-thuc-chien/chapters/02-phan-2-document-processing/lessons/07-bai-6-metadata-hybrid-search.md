---
id: 019c9619-ff06-7006-a006-ff0600000006
title: 第 6 課：元資料、過濾和混合搜索
slug: bai-6-metadata-hybrid-search
description: 將元資料附加到區塊，按字段過濾，結合向量搜尋+關鍵字搜尋（BM25）以實現更準確的檢索。自查詢檢索器。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：文件處理管道
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: 真實戰鬥 RAG：從基礎到高級
  slug: rag-thuc-chien
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 人工智慧與機器學習 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：元資料、過濾和混合搜索</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">真實戰鬥 RAG：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：文件處理管道</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在上一課中，您學習如何對文件進行**分塊**。但純向量搜尋有一個主要缺點：它只能按**含義**（語義）進行搜索，無法按**屬性**（創建日期、作者、文檔類型...）進行過濾。

> **範例：** 使用者詢問「2025 年休假政策」。向量搜尋可能會返回 2023 年**類似**內容的政策 - 但年份錯誤！元資料過濾解決： `year == 2025 AND category == "HR"`。

本文涵蓋了 3 種升級檢索的技術：
1. **元資料** — 為每個區塊附加附加資訊
2. **過濾** — 在搜尋之前/之後過濾區塊
3. **混合搜尋**——向量+關鍵字組合（BM25）

---

## 1. 元資料 — 將資訊附加到區塊

### 1.1 什麼是元資料？

向量儲存中的每個區塊由 3 個部分組成：

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

### 1.2 自動擷取元數據

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

### 1.3 元資料應該附加到什麼？

|元資料欄位 |範例|使用案例 |
|----------------|--------|---------|
| `source` | “hr-policy.pdf” |檢索來源 |
| `page` | 5 |用戶驗證 |
| `year` / `date` | 2025 | 2025按時間過濾 |
| `category` | 「人力資源」、「財務」 |依部門篩選 |
| `language` | “vi”，“en”|多語言 RAG |
| `author` | “阮文A”|依作者篩選 |
| `chunk_index` | 3 |排序順序 |
| `doc_type` | “政策”、“常見問題” |文件分類|

> **💡練習 1：** 載入包含 5 個不同檔案（PDF、TXT、DOCX）的資料夾。自動附加元數據，包括：來源、文件類型、文件大小、建立日期。

---

## 2.元資料過濾

### 2.1 查詢時過濾

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

### 2.2 自查詢擷取器 — 從查詢自解析篩選器

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

> **💡練習 2：** 為至少包含 3 個元資料欄位的文件集建立自查詢檢索器。用 5 個自然問題進行測試。檢查LLM解析過濾器是否正確。

---

## 3. 混合搜尋 — 向量 + 關鍵字

### 3.1 純向量搜尋的問題

```
Query: "Nghị định 168/2024/NĐ-CP"

Vector search: tìm theo ý nghĩa → có thể trả về
               Nghị định 150/2023 (nội dung tương tự nhưng SAI số!)

Keyword search (BM25): tìm đúng "168/2024/NĐ-CP" → ĐÚNG

→ Kết hợp cả 2 = Hybrid Search
```

|搜尋類型 |強|弱|
|------------|--------|-----|
| **向量** |理解含義、同義詞、上下文 |需要精確匹配時錯誤（代碼、編號、名稱）|
| **關鍵字 (BM25)** |精確匹配、代碼、專有名詞 |不理解同義詞、上下文 |
| **混合** |結合兩者優勢|需要調整體重|

### 3.2 實作混合搜尋

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

### 3.3 倒數秩融合（RRF）

當合併 2 個檢索器的結果時，需要 **merge + rating** 方法：

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

> Doc A 出現在**兩隻**獵犬身上 → 最高排名！

### 3.4 Pinecone 混合搜尋（生產就緒）

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

> **💡練習 3：** 對一組文件實施混合搜尋。比較結果：(a) 僅載體，(b) 僅 BM25，(c) 混合。使用 10 個測驗題，記錄每種類型的準確性。

---

## 4. 調整混合權重

### 4.1 何時優先考慮向量與關鍵字？

|使用案例 |向量重量 | BM25重量|原因 |
|--------|:---:|:---:|--------|
|常見問題/一般問答 | 0.7 | 0.7 0.3 | 0.3使用者以多種不同方式詢問 |
|法律/法規| 0.3 | 0.3 0.7 | 0.7需要精確匹配規則代碼 |
|技術文件| 0.5 | 0.5 0.5 | 0.5需要關鍵字和語意 |
|多語言| 0.8 | 0.8 0.2 | 0.2 Vector更適合跨語言|
|程式碼文檔| 0.4 | 0.4 0.6 | 0.6函數名稱=關鍵字|

### 4.2 自動調整權重

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

## 總結

|概念 |記住|
|--------|--------|
| **元資料** |附加到區塊的附加資訊（來源、年份、類別...） |
| **過濾** |在搜尋前/之後按元資料過濾區塊 |
| **自助查詢** | LLM自動將問題解析為搜尋+過濾 |
| **BM25** |關鍵字搜索，精準匹配強|
| **混合搜尋** | Vector+BM25，結合兩者的優點|
| **RRF** |倒數排名融合 — 合併 2 個檢索器結果 |
| **重量調整** |黃金測試集基準選擇比例|

## 一般練習

1. ✅ 完成3個小練習（1,2,3）
2. **完整管道：** 載入 10 多個文件 → 附加完整元資料 → 索引到 Chroma → 實作混合搜尋 → 在 20 個測試問題上比較準確度向量與混合。
3. **自查詢+混合：**將自查詢擷取器與混合搜尋結合。用戶詢問「2025年人力資源政策關於薪資」→自篩選部門+年份+混合搜尋內容。
4. **儀表板：** 建立 Streamlit 應用程式：上傳文件 → 附加元資料 → 使用 UI 篩選器搜尋（下拉清單選擇年份、部門...）。

> **下一篇文章：** 查詢轉換 - HyDE、多重查詢、Step-Back - 將 1 個問題轉換為多個變體，以實現更準確的搜尋。
