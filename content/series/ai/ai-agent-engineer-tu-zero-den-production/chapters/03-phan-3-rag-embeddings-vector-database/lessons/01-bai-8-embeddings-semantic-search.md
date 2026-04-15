---
id: 019e0a01-bb08-7001-c001-ee0800000001
title: "Bài 8: Embeddings & Semantic Search Fundamentals"
slug: bai-8-embeddings-semantic-search
description: >-
  Text embeddings: sentence-transformers, OpenAI embeddings. Embedding models comparison. Cosine similarity, semantic search. Chunking strategies: fixed-size, semantic, recursive. Document loaders cho PDF, web, database.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 3: RAG, Embeddings & Vector Database"
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: "AI Agent Engineer: Từ Zero đến Production"
  slug: ai-agent-engineer-tu-zero-den-production
---

> **Máy tính không hiểu ngôn ngữ — nó hiểu con số.** Embedding là cây cầu biến text thành vector, biến "nghĩa" thành toạ độ trong không gian nhiều chiều. Hai câu nghĩa giống nhau sẽ nằm **gần nhau** trong không gian đó. Đây là nền tảng của mọi hệ thống RAG, semantic search, recommendation. Không hiểu embedding → không build được AI Agent thực chiến. Bài này đi từ lý thuyết one-hot encoding đến hands-on code xây dựng một semantic search engine hoàn chỉnh.

## 1. Embedding là gì? — Từ One-Hot đến Dense Vectors

### 1.1. Vấn đề: Máy tính không hiểu text

Text là **unstructured data**. Mọi model ML/DL đều cần input dạng số. Câu hỏi là: **biến text thành số bằng cách nào mà giữ được "nghĩa"?**

### 1.2. One-Hot Encoding — cách cũ và hạn chế

Mỗi từ là một vector, chỉ có đúng 1 vị trí bằng 1, còn lại bằng 0:

```text
Vocabulary: [cat, dog, fish, bird]

cat  → [1, 0, 0, 0]
dog  → [0, 1, 0, 0]
fish → [0, 0, 1, 0]
bird → [0, 0, 0, 1]
```

**Vấn đề nghiêm trọng:**

| Hạn chế | Giải thích |
|---------|------------|
| **Không có semantic** | cosine(cat, dog) = 0, dù cùng là động vật |
| **Chiều cực lớn** | Vocabulary 100K từ → vector 100K chiều |
| **Sparse matrix** | 99.99% giá trị = 0, lãng phí bộ nhớ |
| **Không generalize** | Từ mới không có representation |

### 1.3. Dense Embeddings — ý tưởng đột phá

Thay vì vector sparse, ta dùng **dense vector** kích thước nhỏ (256–3072 chiều) mà **mỗi chiều mang một "ý nghĩa" ngầm**:

```text
One-Hot (sparse, high-dim)          Dense Embedding (learned, low-dim)
┌────────────────────────┐          ┌───────────────────────────────┐
│ cat  = [1,0,0,...,0]   │    →     │ cat  = [0.23, -0.45, 0.87, …]│
│ dog  = [0,1,0,...,0]   │    →     │ dog  = [0.25, -0.41, 0.82, …]│
│ fish = [0,0,1,...,0]   │    →     │ fish = [-0.6, 0.31, 0.15, …] │
│                        │          │                               │
│ Dim: 100,000           │          │ Dim: 768                      │
│ cosine(cat,dog) = 0    │          │ cosine(cat,dog) = 0.92 ✓      │
└────────────────────────┘          └───────────────────────────────┘
```

### 1.4. Geometric Intuition — nghĩa nằm trong khoảng cách

Embedding tạo ra một **không gian ngữ nghĩa** (semantic space). Các từ/câu có nghĩa tương tự sẽ **gần nhau**:

```text
        Semantic Space (simplified 2D)
    ▲ dimension_2
    │
    │   ● "happy"
    │       ● "joyful"          ● "king"
    │   ● "glad"                   ● "queen"
    │                                  ● "prince"
    │
    │           ● "sad"
    │       ● "unhappy"
    │   ● "depressed"
    │
    └───────────────────────────────────► dimension_1

     Cluster cảm xúc tích cực   Cluster hoàng gia
     nằm gần nhau               nằm gần nhau
```

Tính chất đáng chú ý: **vector("king") - vector("man") + vector("woman") ≈ vector("queen")**. Embedding mã hoá **quan hệ** giữa các khái niệm.

## 2. Text Embedding Models — Landscape hiện tại

### 2.1. Sentence Transformers (Open-Source)

```python
from sentence_transformers import SentenceTransformer

# Load model — chạy local, free, không cần API key
model = SentenceTransformer("BAAI/bge-m3")

sentences = [
    "Embeddings convert text to vectors",
    "Vector representations of text",
    "How to cook pasta",
]

# Encode → numpy array shape (3, 1024)
embeddings = model.encode(sentences, normalize_embeddings=True)

print(f"Shape: {embeddings.shape}")       # (3, 1024)
print(f"Type: {type(embeddings[0])}")     # numpy.ndarray
```

**Ưu điểm**: Free, chạy local, privacy-safe, nhiều lựa chọn.
**Nhược điểm**: Cần GPU cho tốc độ, model lớn tốn RAM.

### 2.2. OpenAI text-embedding-3

```python
from openai import OpenAI

client = OpenAI()

response = client.embeddings.create(
    model="text-embedding-3-large",
    input=["Embeddings convert text to vectors"],
    dimensions=1024  # Có thể giảm dimension (Matryoshka)
)

embedding = response.data[0].embedding
print(f"Dimensions: {len(embedding)}")  # 1024
```

**Matryoshka Embeddings**: OpenAI `text-embedding-3-*` hỗ trợ giảm dimension mà vẫn giữ chất lượng tốt — tiết kiệm storage/cost.

### 2.3. Cohere Embed v4

```python
import cohere

co = cohere.ClientV2()

response = co.embed(
    texts=["Embeddings convert text to vectors"],
    model="embed-v4.0",
    input_type="search_document",
    embedding_types=["float"],
)

embedding = response.embeddings.float_[0]
print(f"Dimensions: {len(embedding)}")  # 1536
```

### 2.4. Voyage AI

```python
import voyageai

vo = voyageai.Client()

result = vo.embed(
    texts=["Embeddings convert text to vectors"],
    model="voyage-3-large",
    input_type="document",
)

embedding = result.embeddings[0]
print(f"Dimensions: {len(embedding)}")  # 1024
```

## 3. Embedding Model Comparison

| Model | Provider | Dim | Max Tokens | Multilingual | Cost/1M tokens | MTEB Score | Ghi chú |
|-------|----------|-----|-----------|-------------|---------------|------------|---------|
| `text-embedding-3-large` | OpenAI | 3072* | 8191 | ✅ | ~$0.13 | ~64.6 | *Matryoshka: có thể giảm dim |
| `text-embedding-3-small` | OpenAI | 1536* | 8191 | ✅ | ~$0.02 | ~62.3 | Rẻ nhất API-based |
| `embed-v4.0` | Cohere | 1536 | 512 | ✅ | ~$0.10 | ~66.1 | Binary embedding support |
| `voyage-3-large` | Voyage AI | 1024 | 32000 | ✅ | ~$0.18 | ~67.2 | Context window lớn |
| `BAAI/bge-m3` | Open-source | 1024 | 8192 | ✅ 100+ | Free | ~65.0 | Dense + Sparse + ColBERT |
| `nomic-embed-text` | Open-source | 768 | 8192 | Hạn chế | Free | ~62.4 | Nhẹ, chạy tốt CPU |
| `all-MiniLM-L6-v2` | Open-source | 384 | 256 | ❌ Eng only | Free | ~56.3 | Nhanh nhất, nhỏ nhất |

> **Lưu ý:** MTEB score thay đổi theo benchmark version. Luôn check [huggingface.co/spaces/mteb/leaderboard](https://huggingface.co/spaces/mteb/leaderboard) cho số mới nhất.

### 3.1. Cách chọn model — Decision Tree

```text
Chọn Embedding Model — Decision Tree
─────────────────────────────────────
                ┌──────────────┐
                │ Có budget cho│
                │  API cost?   │
                └──────┬───────┘
                  Yes  │  No
            ┌──────────┴──────────┐
            ▼                     ▼
    ┌───────────────┐    ┌────────────────┐
    │ Cần top-tier  │    │  Có GPU?       │
    │ quality?      │    └───────┬────────┘
    └───────┬───────┘       Yes  │  No
       Yes  │  No       ┌───────┴────────┐
    ┌───────┴───────┐   ▼                ▼
    ▼               ▼  bge-m3       nomic-embed
 voyage-3-large  text-embed-3    all-MiniLM-L6-v2
 (best quality)  -small (cheap)  (CPU-friendly)
```

## 4. Distance Metrics — Cosine, Dot Product, Euclidean

### 4.1. Ba metrics chính

```python
import numpy as np

def cosine_similarity(a, b):
    """Đo góc giữa 2 vectors. Range: [-1, 1]. 1 = giống nhất."""
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

def dot_product(a, b):
    """Tích vô hướng. Range: (-∞, +∞). Lớn hơn = giống hơn."""
    return np.dot(a, b)

def euclidean_distance(a, b):
    """Khoảng cách Euclid. Range: [0, +∞). Nhỏ hơn = giống hơn."""
    return np.linalg.norm(a - b)

# Demo
a = np.array([0.23, -0.45, 0.87, 0.12])
b = np.array([0.25, -0.41, 0.82, 0.15])
c = np.array([-0.60, 0.31, 0.15, -0.88])

print(f"cosine(a,b) = {cosine_similarity(a,b):.4f}")  # ~0.998 (rất giống)
print(f"cosine(a,c) = {cosine_similarity(a,c):.4f}")  # ~-0.65 (khác nhiều)
print(f"euclid(a,b) = {euclidean_distance(a,b):.4f}") # ~0.08 (rất gần)
print(f"euclid(a,c) = {euclidean_distance(a,c):.4f}") # ~2.10 (rất xa)
```

### 4.2. Khi nào dùng metric nào?

| Metric | Khi nào dùng | Lưu ý |
|--------|-------------|-------|
| **Cosine Similarity** | Default cho hầu hết use case. Embeddings đã normalize | Không tính magnitude, chỉ hướng |
| **Dot Product** | Khi magnitude quan trọng (popularity, relevance score) | Nhanh hơn cosine (bỏ qua normalize) |
| **Euclidean (L2)** | Clustering, khi cần absolute distance | Bị ảnh hưởng bởi scale |

> **Tip thực tế:** Hầu hết embedding models đều **normalize output** (unit vector). Khi đã normalize: `cosine_similarity = dot_product`. Dùng cái nào cũng được, dot product nhanh hơn.

```text
Normalized Vectors:  ‖v‖ = 1

   cosine(a,b) = dot(a,b) / (‖a‖ × ‖b‖)
               = dot(a,b) / (1 × 1)
               = dot(a,b)           ← tương đương!
```

## 5. Chunking Strategies Deep-Dive

### 5.1. Vì sao phải chunking?

Embedding models có **token limit** (thường 512–8192 tokens). Document dài phải **chia thành chunks** trước khi embed. Chunking ảnh hưởng cực lớn đến retrieval quality.

```text
Document dài (10,000 tokens)
┌──────────────────────────────────────────────────────────┐
│ Lorem ipsum dolor sit amet... (quá dài cho embedding)    │
└──────────────────────────┬───────────────────────────────┘
                           │ Chunking
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
   ┌──────────┐      ┌──────────┐      ┌──────────┐
   │ Chunk 1  │      │ Chunk 2  │      │ Chunk 3  │
   │ 500 tok  │      │ 500 tok  │      │ 500 tok  │
   └──────────┘      └──────────┘      └──────────┘
        │                  │                  │
        ▼                  ▼                  ▼
   [0.2, -0.1,...]   [0.5, 0.3,...]   [-0.1, 0.7,...]
   Embedding 1        Embedding 2       Embedding 3
```

### 5.2. Fixed-Size Chunking

Cách đơn giản nhất: cắt theo số ký tự/token cố định.

```python
from langchain.text_splitter import CharacterTextSplitter

splitter = CharacterTextSplitter(
    separator="\n\n",     # Cắt ưu tiên theo paragraph
    chunk_size=1000,      # Tối đa 1000 ký tự
    chunk_overlap=200,    # Overlap 200 ký tự giữa chunks
)

chunks = splitter.split_text(document_text)
```

**Ưu điểm**: Đơn giản, dễ implement, predictable chunk size.
**Nhược điểm**: Có thể cắt giữa câu/ý, mất context.

### 5.3. Recursive Character Splitting

Thử cắt theo hierarchy: `\n\n` → `\n` → `. ` → ` ` → `""`. Ưu tiên giữ nguyên paragraph/câu.

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    separators=["\n\n", "\n", ". ", " ", ""],
    length_function=len,
)

chunks = splitter.split_text(document_text)
print(f"Tạo {len(chunks)} chunks")
```

**Đây là default choice** cho hầu hết use case — cân bằng giữa đơn giản và chất lượng.

### 5.4. Semantic Chunking

Cắt dựa trên **sự thay đổi ngữ nghĩa** — khi embedding giữa 2 câu liên tiếp khác nhau quá nhiều → tạo chunk mới.

```python
from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

chunker = SemanticChunker(
    embeddings,
    breakpoint_threshold_type="percentile",
    breakpoint_threshold_amount=75,  # Top 25% distance → break
)

chunks = chunker.split_text(document_text)
```

```text
Semantic Chunking — How it works

Câu 1  Câu 2  Câu 3  Câu 4  Câu 5  Câu 6  Câu 7
  ●──────●──────●      ●──────●      ●──────●
  │ sim=0.92   sim=0.88│ sim=0.91    │ sim=0.89
  │                     │             │
  │  distance < threshold → same chunk│
  │                     │             │
  └─── Chunk 1 ────┘   └─ Chunk 2 ─┘ └ Chunk 3 ┘
     (topic A)          (topic B)     (topic C)

  Khi cosine distance giữa 2 câu liên tiếp > threshold
  → tạo breakpoint → chunk mới
```

### 5.5. Document-Aware Chunking

Tận dụng cấu trúc document (headings, sections) để chunk thông minh hơn.

```python
from langchain.text_splitter import MarkdownHeaderTextSplitter

headers_to_split = [
    ("#", "Header 1"),
    ("##", "Header 2"),
    ("###", "Header 3"),
]

splitter = MarkdownHeaderTextSplitter(headers_to_split)
chunks = splitter.split_text(markdown_text)

# Mỗi chunk giữ metadata headers
for chunk in chunks:
    print(f"Content: {chunk.page_content[:100]}...")
    print(f"Headers: {chunk.metadata}")
    # Output: Headers: {"Header 1": "Chapter 1", "Header 2": "Section 1.2"}
```

### 5.6. So sánh Chunking Strategies

| Strategy | Chất lượng | Tốc độ | Complexity | Best for |
|----------|-----------|--------|-----------|----------|
| **Fixed-Size** | ⭐⭐ | ⭐⭐⭐⭐⭐ | Thấp | Prototype, text thuần |
| **Recursive** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Thấp | **Default choice** |
| **Semantic** | ⭐⭐⭐⭐⭐ | ⭐⭐ | Cao | High-quality RAG |
| **Document-Aware** | ⭐⭐⭐⭐ | ⭐⭐⭐ | Trung bình | Markdown, HTML, code |

## 6. Chunk Size & Overlap — Tradeoffs & Best Practices

### 6.1. Chunk Size — cân bằng giữa precision và context

```text
Chunk Size Tradeoffs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Small chunks (128-256 tokens)
├─ ✅ Precise retrieval — tìm đúng đoạn liên quan
├─ ✅ Ít noise — chunk chỉ chứa 1 ý
├─ ❌ Mất context — không đủ thông tin xung quanh
└─ ❌ Nhiều chunks → embedding cost cao hơn

Large chunks (1024-2048 tokens)
├─ ✅ Giữ context đầy đủ — đủ thông tin cho LLM
├─ ✅ Ít chunks → embedding cost thấp hơn
├─ ❌ Recall thấp hơn — nhiều noise trong chunk
└─ ❌ Có thể trộn nhiều topics trong 1 chunk
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 6.2. Overlap — giữ continuity giữa chunks

Overlap giúp **tránh mất thông tin ở boundary** giữa 2 chunks:

```text
Không overlap:                    Có overlap (200 chars):
┌──────────┐┌──────────┐         ┌──────────────┐
│ Chunk 1  ││ Chunk 2  │         │   Chunk 1    │
│  "...AI  ││ models   │         │  "...AI      │
│  agent"  ││ need..." │         │  agent models│
└──────────┘└──────────┘         └───┬──────────┘
  ↑ mất context!                     │ overlap
                                 ┌───┴──────────┐
                                 │   Chunk 2    │
                                 │ "agent models│
                                 │  need..."    │
                                 └──────────────┘
```

### 6.3. Best Practices từ thực nghiệm

| Parameter | Recommended Range | Lý do |
|-----------|------------------|-------|
| **Chunk size** | 500–1000 chars (~128–256 tokens) | Cân bằng precision/context |
| **Overlap** | 10–20% of chunk_size | Giữ boundary context |
| **Separator priority** | `\n\n` → `\n` → `. ` → ` ` | Ưu tiên natural boundaries |

```python
# Production-recommended config
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=800,       # ~200 tokens — sweet spot
    chunk_overlap=150,    # ~19% overlap
    separators=["\n\n", "\n", ". ", " ", ""],
    length_function=len,
    is_separator_regex=False,
)
```

> **Tip:** Không có "chunk size tối ưu" universal. Luôn **eval trên data thật** bằng retrieval metrics (section 9) trước khi quyết định.

## 7. Document Loaders — Đọc mọi loại nguồn dữ liệu

### 7.1. PDF — PyMuPDF + Unstructured

```python
# Option 1: PyMuPDF — nhanh, chính xác cho text-based PDFs
from langchain_community.document_loaders import PyMuPDFLoader

loader = PyMuPDFLoader("report.pdf")
docs = loader.load()
print(f"Loaded {len(docs)} pages")
print(docs[0].page_content[:200])

# Option 2: Unstructured — xử lý PDFs phức tạp (tables, images)
from langchain_community.document_loaders import UnstructuredPDFLoader

loader = UnstructuredPDFLoader(
    "complex_report.pdf",
    mode="elements",       # Tách từng element (title, text, table)
    strategy="hi_res",     # OCR cho scanned PDFs
)
docs = loader.load()
```

### 7.2. Web Pages — BeautifulSoup & WebBaseLoader

```python
from langchain_community.document_loaders import WebBaseLoader
import bs4

# Load web page, parse chỉ main content
loader = WebBaseLoader(
    web_paths=["https://example.com/article"],
    bs_kwargs={
        "parse_only": bs4.SoupStrainer(
            class_=("post-content", "article-body")
        )
    },
)
docs = loader.load()
```

### 7.3. CSV & JSON

```python
from langchain_community.document_loaders import CSVLoader, JSONLoader

# CSV — mỗi row = 1 document
csv_loader = CSVLoader(
    "products.csv",
    csv_args={"delimiter": ","},
    source_column="product_id",
)
csv_docs = csv_loader.load()

# JSON — dùng jq-style schema
json_loader = JSONLoader(
    file_path="articles.json",
    jq_schema=".articles[]",
    content_key="body",
    metadata_func=lambda record, metadata: {
        **metadata,
        "title": record.get("title"),
        "author": record.get("author"),
    },
)
json_docs = json_loader.load()
```

### 7.4. Document Loader Decision Table

| Nguồn | Loader | Khi nào dùng |
|-------|--------|-------------|
| **PDF (text-based)** | `PyMuPDFLoader` | PDF chữ thường, nhanh |
| **PDF (scanned/complex)** | `UnstructuredPDFLoader` | Cần OCR, tables, images |
| **Web pages** | `WebBaseLoader` | Crawl articles, docs |
| **CSV** | `CSVLoader` | Structured data, mỗi row = 1 doc |
| **JSON** | `JSONLoader` | API responses, structured export |
| **Markdown** | `UnstructuredMarkdownLoader` | Documentation, notes |
| **Database** | SQLAlchemy + custom | Query results thành documents |

## 8. Hands-On: Building a Semantic Search Engine

Đây là phần **thực chiến** — build một semantic search engine hoàn chỉnh từ đầu.

### 8.1. Architecture Overview

```text
Semantic Search Engine — Architecture
═════════════════════════════════════════════════════════════

  INDEXING PIPELINE (offline, run once)
  ┌────────────┐    ┌────────────┐    ┌───────────────┐
  │  Documents  │───→│  Chunking  │───→│   Embedding   │
  │  (PDF,Web)  │    │  (Recursive│    │   (BGE-M3 /   │
  │             │    │   800 char)│    │    OpenAI)     │
  └────────────┘    └────────────┘    └───────┬───────┘
                                              │
                                              ▼
                                    ┌───────────────────┐
                                    │   Vector Store    │
                                    │  (NumPy / FAISS)  │
                                    └───────────────────┘

  QUERY PIPELINE (online, per query)
  ┌────────────┐    ┌────────────┐    ┌───────────────┐
  │   Query    │───→│  Embedding │───→│  Similarity   │
  │  (user)    │    │ (same model│    │   Search      │
  │            │    │  as index) │    │  (top-k)      │
  └────────────┘    └────────────┘    └───────┬───────┘
                                              │
                                              ▼
                                    ┌───────────────────┐
                                    │  Ranked Results   │
                                    │  (score + chunk)  │
                                    └───────────────────┘
```

### 8.2. Step 1 — Chuẩn bị môi trường

```bash
pip install sentence-transformers langchain langchain-community \
    pymupdf numpy scikit-learn rich
```

### 8.3. Step 2 — Load & Chunk Documents

```python
import os
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import (
    PyMuPDFLoader,
    TextLoader,
    DirectoryLoader,
)

# Load tất cả .txt files trong thư mục
loader = DirectoryLoader(
    "./documents/",
    glob="**/*.txt",
    loader_cls=TextLoader,
    loader_kwargs={"encoding": "utf-8"},
)
docs = loader.load()
print(f"Loaded {len(docs)} documents")

# Chunk documents
splitter = RecursiveCharacterTextSplitter(
    chunk_size=800,
    chunk_overlap=150,
    separators=["\n\n", "\n", ". ", " ", ""],
)
chunks = splitter.split_documents(docs)
print(f"Created {len(chunks)} chunks")

# Xem sample chunk
print(f"\n--- Sample Chunk ---")
print(f"Content: {chunks[0].page_content[:200]}...")
print(f"Metadata: {chunks[0].metadata}")
```

### 8.4. Step 3 — Embed & Index

```python
import numpy as np
from sentence_transformers import SentenceTransformer

# Load embedding model
embed_model = SentenceTransformer("BAAI/bge-m3")

# Embed all chunks
texts = [chunk.page_content for chunk in chunks]
embeddings = embed_model.encode(
    texts,
    normalize_embeddings=True,  # Normalize cho cosine similarity
    show_progress_bar=True,
    batch_size=32,
)

# Save index (simple numpy)
np.save("embeddings.npy", embeddings)
print(f"Index shape: {embeddings.shape}")  # (num_chunks, 1024)
```

### 8.5. Step 4 — Search Function

```python
import numpy as np
from sentence_transformers import SentenceTransformer

class SemanticSearchEngine:
    def __init__(self, model_name="BAAI/bge-m3"):
        self.model = SentenceTransformer(model_name)
        self.embeddings = None
        self.chunks = None

    def index(self, chunks):
        """Index a list of document chunks."""
        self.chunks = chunks
        texts = [c.page_content for c in chunks]
        self.embeddings = self.model.encode(
            texts, normalize_embeddings=True, show_progress_bar=True
        )
        print(f"Indexed {len(chunks)} chunks")

    def search(self, query: str, top_k: int = 5) -> list[dict]:
        """Search for the most relevant chunks."""
        # Embed query
        query_emb = self.model.encode(
            [query], normalize_embeddings=True
        )[0]

        # Cosine similarity (= dot product khi normalized)
        scores = self.embeddings @ query_emb

        # Top-k indices
        top_indices = np.argsort(scores)[::-1][:top_k]

        results = []
        for idx in top_indices:
            results.append({
                "rank": len(results) + 1,
                "score": float(scores[idx]),
                "content": self.chunks[idx].page_content,
                "metadata": self.chunks[idx].metadata,
            })
        return results

# --- Usage ---
engine = SemanticSearchEngine()
engine.index(chunks)

results = engine.search("What are embeddings used for?", top_k=3)
for r in results:
    print(f"\n[Rank {r['rank']}] Score: {r['score']:.4f}")
    print(f"Source: {r['metadata'].get('source', 'N/A')}")
    print(f"Content: {r['content'][:200]}...")
```

### 8.6. Step 5 — Pretty Output với Rich

```python
from rich.console import Console
from rich.table import Table
from rich.panel import Panel

console = Console()

def pretty_search(engine, query, top_k=5):
    console.print(Panel(f"[bold cyan]Query:[/] {query}", expand=False))

    results = engine.search(query, top_k=top_k)

    table = Table(title="Search Results", show_lines=True)
    table.add_column("Rank", style="bold", width=5)
    table.add_column("Score", width=8)
    table.add_column("Source", width=25)
    table.add_column("Content Preview", width=60)

    for r in results:
        source = r["metadata"].get("source", "N/A")
        preview = r["content"][:150].replace("\n", " ") + "..."
        table.add_row(
            str(r["rank"]),
            f"{r['score']:.4f}",
            source,
            preview,
        )

    console.print(table)

# Demo
pretty_search(engine, "How to fine-tune a language model?")
```

## 9. Evaluation — Retrieval Metrics

### 9.1. Tại sao phải evaluate retrieval?

Search engine trả về 5 kết quả — nhưng **có bao nhiêu cái đúng?** Và **cái đúng có nằm trên đầu không?** Đó là lý do cần retrieval metrics.

### 9.2. Ba metrics quan trọng nhất

| Metric | Công thức | Ý nghĩa |
|--------|-----------|---------|
| **Recall@k** | (relevant docs in top-k) / (total relevant docs) | Tìm được bao nhiêu % docs đúng? |
| **MRR** | 1 / rank_of_first_relevant_result | Doc đúng đầu tiên nằm ở vị trí nào? |
| **NDCG@k** | Normalized DCG@k | Docs đúng có nằm trên đầu không? (có trọng số vị trí) |

### 9.3. Ví dụ tính toán

```text
Query: "What are embeddings?"

Ground truth relevant docs: {D2, D5, D8}

Search results (top-5): [D3, D2, D7, D5, D1]
                          ❌   ✅   ❌   ✅   ❌

Recall@5 = 2/3 = 0.667  (tìm được 2/3 docs relevant)
MRR       = 1/2 = 0.500  (doc relevant đầu tiên ở rank 2)
```

### 9.4. Implementation

```python
import numpy as np

def recall_at_k(retrieved_ids: list, relevant_ids: set, k: int) -> float:
    """Recall@k: fraction of relevant docs found in top-k."""
    retrieved_set = set(retrieved_ids[:k])
    return len(retrieved_set & relevant_ids) / len(relevant_ids)

def mrr(retrieved_ids: list, relevant_ids: set) -> float:
    """Mean Reciprocal Rank: 1/rank of first relevant result."""
    for i, doc_id in enumerate(retrieved_ids):
        if doc_id in relevant_ids:
            return 1.0 / (i + 1)
    return 0.0

def ndcg_at_k(retrieved_ids: list, relevant_ids: set, k: int) -> float:
    """NDCG@k: position-weighted relevance score."""
    dcg = 0.0
    for i, doc_id in enumerate(retrieved_ids[:k]):
        rel = 1.0 if doc_id in relevant_ids else 0.0
        dcg += rel / np.log2(i + 2)  # i+2 vì log2(1) = 0

    # Ideal DCG (all relevant docs ở top)
    ideal_rels = sorted(
        [1.0 if did in relevant_ids else 0.0 for did in retrieved_ids[:k]],
        reverse=True,
    )
    idcg = sum(r / np.log2(i + 2) for i, r in enumerate(ideal_rels))

    return dcg / idcg if idcg > 0 else 0.0

# --- Ví dụ ---
retrieved = ["D3", "D2", "D7", "D5", "D1"]
relevant = {"D2", "D5", "D8"}

print(f"Recall@5: {recall_at_k(retrieved, relevant, 5):.3f}")  # 0.667
print(f"MRR:      {mrr(retrieved, relevant):.3f}")              # 0.500
print(f"NDCG@5:   {ndcg_at_k(retrieved, relevant, 5):.3f}")    # 0.653
```

### 9.5. Evaluation Best Practices

```text
Retrieval Eval Workflow
━━━━━━━━━━━━━━━━━━━━━
1. Tạo evaluation dataset (query → relevant doc IDs)
   ├─ Manual labeling (chính xác nhất)
   ├─ LLM-generated (nhanh, cần spot-check)
   └─ Click-through logs (production data)

2. Run search cho mỗi query → retrieved IDs

3. Tính metrics: Recall@5, MRR, NDCG@10

4. So sánh khi thay đổi:
   ├─ Embedding model
   ├─ Chunk size / overlap
   ├─ Distance metric
   └─ Re-ranking strategy

5. Pick config cho Recall@5 > 0.85 & MRR > 0.6
```

> **Tip:** Trong production, **Recall@k quan trọng nhất** cho RAG pipeline. Nếu retrieval không tìm được document relevant, LLM sẽ hallucinate. Target Recall@5 ≥ 0.85.

## Tổng kết

Bài này đã cover toàn bộ **foundations** cho semantic search — nền tảng của mọi hệ thống RAG:

| Concept | Key Takeaway |
|---------|-------------|
| **Embedding** | Biến text → dense vector, giữ semantic meaning |
| **Model choice** | `bge-m3` cho open-source, `text-embedding-3-small` cho API budget-friendly |
| **Distance metric** | Cosine similarity là default. Normalized → cosine = dot product |
| **Chunking** | `RecursiveCharacterTextSplitter` là default. 500–1000 chars, 10–20% overlap |
| **Document loaders** | PyMuPDF cho PDF, WebBaseLoader cho web, CSVLoader cho CSV |
| **Search pipeline** | Embed → Index → Query → Rank → Return top-k |
| **Evaluation** | Recall@k, MRR, NDCG — target Recall@5 ≥ 0.85 |

```text
Bài 8 Knowledge Map
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    Embeddings
                    (dense vectors)
                        │
          ┌─────────────┼──────────────┐
          ▼             ▼              ▼
     Embedding      Chunking      Distance
      Models       Strategies      Metrics
    (bge-m3,       (recursive,    (cosine,
     OpenAI)       semantic)      dot product)
          │             │              │
          └─────────────┼──────────────┘
                        ▼
               Semantic Search
                  Engine
                    │
            ┌───────┴───────┐
            ▼               ▼
        Document         Retrieval
        Loaders          Evaluation
     (PDF, Web, CSV)   (Recall, MRR)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Bài tập

### Bài tập 1: Build Your Own Semantic Search (Cơ bản)

Tạo một semantic search engine cho **10 articles** bất kỳ:

1. Download/copy 10 bài viết text vào thư mục `./documents/`
2. Implement `SemanticSearchEngine` class (Section 8)
3. Index tất cả documents
4. Test search với 5 queries khác nhau
5. So sánh kết quả giữa model `all-MiniLM-L6-v2` và `bge-m3`

**Deliverable**: Python script chạy được, in ra top-3 results cho mỗi query.

### Bài tập 2: Chunking Experiment (Trung bình)

So sánh ảnh hưởng của chunking lên retrieval quality:

1. Dùng cùng một bộ documents (10+ trang)
2. Tạo 4 phiên bản index với chunk configs khác nhau:
   - `chunk_size=256, overlap=50`
   - `chunk_size=512, overlap=100`
   - `chunk_size=1024, overlap=200`
   - `SemanticChunker` (cần OpenAI API key)
3. Tạo 10 query-answer pairs (ground truth)
4. Tính Recall@5 và MRR cho mỗi config
5. Vẽ bảng so sánh kết quả

**Deliverable**: Jupyter Notebook với analysis và conclusion.

### Bài tập 3: Multi-Source Search Engine (Nâng cao)

Build semantic search engine xử lý **nhiều loại nguồn dữ liệu**:

1. Load documents từ ít nhất 3 sources: PDF + Web + CSV
2. Implement metadata filtering (ví dụ: chỉ search trong PDFs)
3. Implement hybrid scoring: `final_score = 0.7 * semantic_score + 0.3 * keyword_score`
4. Thêm re-ranking bằng cross-encoder (`ms-marco-MiniLM-L-6-v2`)
5. Build CLI interface: `python search.py --query "..." --source pdf --top 5`

**Deliverable**: GitHub repo với README, tests, và demo output.
