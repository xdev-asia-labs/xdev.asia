---
id: 019c9619-ff06-7006-a006-ff0600000006
title: 'Bài 6: Metadata, Filtering & Hybrid Search'
slug: bai-6-metadata-hybrid-search
description: >-
  Gắn metadata cho chunks, filtering theo field, kết hợp vector search +
  keyword search (BM25) cho retrieval chính xác hơn. Self-query retriever.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Document Processing Pipeline"
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: "RAG Thực Chiến: Từ Basic đến Advanced"
  slug: rag-thuc-chien
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI &amp; ML — Bài 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 6: Metadata, Filtering &amp; Hybrid Search</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">RAG Thực Chiến: Từ Basic đến Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Document Processing Pipeline</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Bài trước bạn đã biết cách **chunk** tài liệu. Nhưng vector search thuần túy có 1 nhược điểm lớn: nó chỉ tìm theo **ý nghĩa** (semantic), không lọc được theo **thuộc tính** (ngày tạo, tác giả, loại tài liệu...).

> **Ví dụ:** User hỏi "Chính sách nghỉ phép năm 2025". Vector search có thể trả về chính sách năm 2023 vì nội dung **tương tự** — nhưng sai năm! Metadata filtering giải quyết: `year == 2025 AND category == "HR"`.

Bài này cover 3 kỹ thuật nâng cấp retrieval:
1. **Metadata** — gắn thông tin bổ sung cho mỗi chunk
2. **Filtering** — lọc chunks trước/sau khi search
3. **Hybrid Search** — kết hợp vector + keyword (BM25)

---

## 1. Metadata — Gắn thông tin cho Chunks

### 1.1 Metadata là gì?

Mỗi chunk trong vector store gồm 3 phần:

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

### 1.2 Tự động extract metadata

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

### 1.3 Metadata nên gắn gì?

| Metadata field | Ví dụ | Use case |
|---------------|-------|---------|
| `source` | "hr-policy.pdf" | Truy xuất nguồn |
| `page` | 5 | Người dùng verify |
| `year` / `date` | 2025 | Lọc theo thời gian |
| `category` | "HR", "Finance" | Lọc theo phòng ban |
| `language` | "vi", "en" | Multi-language RAG |
| `author` | "Nguyen Van A" | Lọc theo tác giả |
| `chunk_index` | 3 | Sắp xếp thứ tự |
| `doc_type` | "policy", "faq" | Phân loại tài liệu |

> **💡 Bài tập 1:** Load 1 thư mục chứa 5 file khác nhau (PDF, TXT, DOCX). Tự động gắn metadata gồm: source, file_type, file_size, created_date.

---

## 2. Metadata Filtering

### 2.1 Filter khi truy vấn

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

### 2.2 Self-Query Retriever — Tự parse filter từ câu hỏi

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

> **💡 Bài tập 2:** Tạo Self-Query Retriever cho bộ tài liệu có ít nhất 3 metadata fields. Test với 5 câu hỏi tự nhiên. Kiểm tra LLM parse filter đúng không.

---

## 3. Hybrid Search — Vector + Keyword

### 3.1 Vấn đề của Vector Search thuần

```
Query: "Nghị định 168/2024/NĐ-CP"

Vector search: tìm theo ý nghĩa → có thể trả về
               Nghị định 150/2023 (nội dung tương tự nhưng SAI số!)

Keyword search (BM25): tìm đúng "168/2024/NĐ-CP" → ĐÚNG

→ Kết hợp cả 2 = Hybrid Search
```

| Search type | Mạnh | Yếu |
|------------|------|-----|
| **Vector** | Hiểu ý nghĩa, synonym, ngữ cảnh | Sai khi cần exact match (mã, số, tên) |
| **Keyword (BM25)** | Exact match, mã số, proper nouns | Không hiểu synonym, ngữ cảnh |
| **Hybrid** | Kết hợp cả 2 ưu điểm | Cần tune weight |

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

Khi kết hợp kết quả từ 2 retriever, cần 1 cách **merge + rank**:

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

> Doc A xuất hiện ở **cả 2** retriever → rank cao nhất!

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

> **💡 Bài tập 3:** Implement hybrid search trên 1 bộ tài liệu. So sánh kết quả: (a) chỉ vector, (b) chỉ BM25, (c) hybrid. Dùng 10 câu test, ghi nhận accuracy mỗi loại.

---

## 4. Tuning Hybrid Weights

### 4.1 Khi nào ưu tiên Vector vs Keyword?

| Use case | Vector weight | BM25 weight | Lý do |
|---------|:---:|:---:|-------|
| FAQ / Q&A tổng quát | 0.7 | 0.3 | User hỏi bằng nhiều cách khác nhau |
| Luật / Mã số | 0.3 | 0.7 | Cần exact match mã điều luật |
| Tài liệu kỹ thuật | 0.5 | 0.5 | Cần cả keyword lẫn semantic |
| Multi-language | 0.8 | 0.2 | Vector tốt hơn cho cross-language |
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

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Metadata** | Thông tin bổ sung gắn vào chunk (source, year, category...) |
| **Filtering** | Lọc chunks theo metadata trước/sau search |
| **Self-Query** | LLM tự parse câu hỏi thành search + filter |
| **BM25** | Keyword search, mạnh với exact match |
| **Hybrid Search** | Vector + BM25, kết hợp ưu điểm cả 2 |
| **RRF** | Reciprocal Rank Fusion — merge kết quả 2 retriever |
| **Weight tuning** | Benchmark trên golden test set để chọn tỷ lệ |

## Bài tập tổng hợp

1. ✅ Hoàn thành 3 bài tập nhỏ (1, 2, 3)
2. **Full Pipeline:** Load 10+ tài liệu → gắn metadata đầy đủ → index vào Chroma → implement hybrid search → so sánh accuracy vector vs hybrid trên 20 câu test.
3. **Self-Query + Hybrid:** Kết hợp Self-Query Retriever với Hybrid Search. User hỏi "Chính sách HR năm 2025 về lương" → tự filter department + year + hybrid search nội dung.
4. **Dashboard:** Tạo Streamlit app: upload tài liệu → tự gắn metadata → search với filter UI (dropdown chọn year, department...).

> **Bài tiếp theo:** Query Transformation — HyDE, Multi-Query, Step-Back — biến 1 câu hỏi thành nhiều biến thể để tìm kiếm chính xác hơn.
