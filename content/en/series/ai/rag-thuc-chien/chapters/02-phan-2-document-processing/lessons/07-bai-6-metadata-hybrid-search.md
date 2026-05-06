---
id: 019c9619-ff06-7006-a006-ff0600000006
title: 'Lesson 6: Metadata, Filtering & Hybrid Search'
slug: bai-6-metadata-hybrid-search
description: >-
  Attach metadata to chunks, filter by field, combine vector search + keyword
  search (BM25) for more accurate retrieval. Self-query retriever.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 'Part 2: Document Processing Pipeline'
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: 'Real Battle RAG: From Basic to Advanced'
  slug: rag-thuc-chien
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI & ML — Lesson 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 6: Metadata, Filtering & Hybrid Search</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Real Battle RAG: From Basic to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Document Processing Pipeline</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

In the previous lesson, you learned how to **chunk** documents. But pure vector search has one major drawback: it only searches by **meaning** (semantic), cannot filter by **attributes** (creation date, author, document type...).

> **Example:** User asks "2025 leave policy". Vector search may return a 2023 policy for **similar** content — but the wrong year! Metadata filtering solves: `year == 2025 AND category == "HR"`.

This article covers 3 techniques for upgrading retrieval:
1. **Metadata** — attaches additional information to each chunk
2. **Filtering** — filtering chunks before/after searching
3. **Hybrid Search** — vector + keyword combination (BM25)

---

## 1. Metadata — Attach information to Chunks

### 1.1 What is Metadata?

Each chunk in the vector store consists of 3 parts:

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

### 1.2 Automatically extract metadata

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

### 1.3 What should Metadata be attached to?

| Metadata fields | Example | Use cases |
|---------------|-------|---------|
| `source` | "hr-policy.pdf" | Retrieve source |
| `page` | 5 | User verify |
| `year` / `date` | 2025 | Filter by time |
| `category` | "HR", "Finance" | Filter by department |
| `language` | "vi", "en" | Multi-language RAG |
| `author` | "Nguyen Van A" | Filter by author |
| `chunk_index` | 3 | Sort order |
| `doc_type` | "policy", "faq" | Document classification |

> **💡 Exercise 1:** Load a folder containing 5 different files (PDF, TXT, DOCX). Automatically attach metadata including: source, file_type, file_size, created_date.

---

## 2. Metadata Filtering

### 2.1 Filter when querying

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

### 2.2 Self-Query Retriever — Self-parse filter from the query

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

> **💡 Exercise 2:** Create a Self-Query Retriever for a document set with at least 3 metadata fields. Test with 5 natural questions. Check if LLM parse filter is correct.

---

## 3. Hybrid Search — Vector + Keyword

### 3.1 Problems of pure Vector Search

```
Query: "Nghị định 168/2024/NĐ-CP"

Vector search: tìm theo ý nghĩa → có thể trả về
               Nghị định 150/2023 (nội dung tương tự nhưng SAI số!)

Keyword search (BM25): tìm đúng "168/2024/NĐ-CP" → ĐÚNG

→ Kết hợp cả 2 = Hybrid Search
```

| Search type | Strong | Weak |
|-----------|-------|-----|
| **Vector** | Understanding meaning, synonym, context | Wrong when needing exact match (code, number, name) |
| **Keyword (BM25)** | Exact match, code, proper nouns | Don't understand synonym, context |
| **Hybrid** | Combining both advantages | Need to tune weight |

### 3.2 Implement Hybrid Search

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

### 3.3 Reciprocal Rank Fusion (RRF)

When combining results from 2 retrievers, a **merge + rank** method is needed:

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

> Doc A appears on **both** retrievers → highest rank!

### 3.4 Pinecone Hybrid Search (Production-ready)

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

> **💡 Exercise 3:** Implement hybrid search on a set of documents. Compare results: (a) vector only, (b) BM25 only, (c) hybrid. Use 10 test questions, record the accuracy of each type.

---

## 4. Tuning Hybrid Weights

### 4.1 When to prioritize Vector vs Keyword?

| Use cases | Vectorweight | BM25 weight | Reason |
|--------|:---:|:---:|-------|
| FAQ / General Q&A | 0.7 | 0.3 | Users ask in many different ways |
| Law / Code | 0.3 | 0.7 | Need exact match rule code |
| Technical documents | 0.5 | 0.5 | Need both keyword and semantic |
| Multi-language | 0.8 | 0.2 | Vector is better for cross-language |
| Code documentation | 0.4 | 0.6 | Function names = keyword |

### 4.2 Auto-tune weights

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

## Summary

| Concepts | Remember |
|--------|--------|
| **Metadata** | Additional information attached to the chunk (source, year, category...) |
| **Filtering** | Filter chunks by metadata before/after search |
| **Self-Query** | LLM automatically parses the question into search + filter |
| **BM25** | Keyword search, strong with exact match |
| **Hybrid Search** | Vector + BM25, combining the advantages of both |
| **RRF** | Reciprocal Rank Fusion — merge 2 retriever results |
| **Weight tuning** | Benchmark on the golden test set to choose the ratio |

## General exercises

1. ✅ Complete 3 small exercises (1, 2, 3)
2. **Full Pipeline:** Load 10+ documents → attach full metadata → index into Chroma → implement hybrid search → compare accuracy vector vs hybrid on 20 test questions.
3. **Self-Query + Hybrid:** Combine Self-Query Retriever with Hybrid Search. User asked "HR policy in 2025 on salary" → self filter department + year + hybrid search content.
4. **Dashboard:** Create Streamlit app: upload documents → attach metadata → search with UI filter (dropdown select year, department...).

> **Next article:** Query Transformation — HyDE, Multi-Query, Step-Back — turns 1 question into many variations for more accurate searching.
