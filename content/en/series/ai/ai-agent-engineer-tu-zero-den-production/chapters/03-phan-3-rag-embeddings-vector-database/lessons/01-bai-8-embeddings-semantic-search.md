---
id: 019e0a01-bb08-7001-c001-ee0800000001
title: 'Lesson 8: Embeddings & Semantic Search Fundamentals'
slug: bai-8-embeddings-semantic-search
description: >-
  Text embeddings: sentence-transformers, OpenAI embeddings. Embedding models
  comparison. Cosine similarity, semantic search. Chunking strategies:
  fixed-size, semantic, recursive. Document loaders for PDF, web, database.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 'Part 3: RAG, Embeddings & Vector Database'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI Agent Engineer: From Zero to Production'
  slug: ai-agent-engineer-tu-zero-den-production
locale: en
---

> **Computers don't understand language — they understand numbers.** Embedding is the bridge that turns text into vectors, turning "meaning" into coordinates in high-dimensional space. Two sentences with the same meaning will lie **close to each other** in that space. This is the foundation of all RAG, semantic search, and recommendation systems. Not understanding embedding → unable to build real combat AI Agent. This article goes from one-hot encoding theory to hands-on code to build a complete semantic search engine.

## 1. What is Embedding? — From One-Hot to Dense Vectors

### 1.1. Problem: Computers don't understand text

Text is **unstructured data**. Every ML/DL model requires numeric input. The question is: **How to turn text into numbers while preserving the "meaning"?**

### 1.2. One-Hot Encoding — the old and limited way

Each word is a vector, with only one position equal to 1, the rest equal 0:

```text
Vocabulary: [cat, dog, fish, bird]

cat  → [1, 0, 0, 0]
dog  → [0, 1, 0, 0]
fish → [0, 0, 1, 0]
bird → [0, 0, 0, 1]
```

**Serious problem:**

| Limitations | Explanation |
|--------|-------------|
| **No semantics** | cosine(cat, dog) = 0, even though they are the same animal |
| **Extremely large dimension** | Vocabulary 100K words → vector 100K dimensions |
| **Sparse matrix** | 99.99% value = 0, wasting memory |
| **Do not generalize** | New words do not have representation |

### 1.3. Dense Embeddings — breakthrough idea

Instead of sparse vectors, we use **dense vectors** of small size (256–3072 dimensions) where **each dimension carries an implicit "meaning"**:

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

### 1.4. Geometric Intuition — meaning lies in distance

Embedding creates a **semantic space**. Words/sentences with similar meanings will be **close to each other**:

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

Notable properties: **vector("king") - vector("man") + vector("woman") ≈ vector("queen")**. Embedding encodes **relationships** between concepts.

## 2. Text Embedding Models — Current Landscape

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

**Advantages**: Free, runs locally, privacy-safe, many options.
**Disadvantages**: Needs GPU for speed, large models consume RAM.

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

**Matryoshka Embeddings**: OpenAI `text-embedding-3-*` Supports dimension reduction while still maintaining good quality — saving storage/cost.

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

| Model | Provider | Dim | Max Tokens | Multilingual | Cost/1M tokens | MTEB Score | Notes |
|-------|----------|-----|-----------|-------------|-----------|-------------|---------|
| `text-embedding-3-large` | OpenAI | 3072* | 8191 | ✅ | ~$0.13 | ~64.6 | *Matryoshka: can be reduced |
| `text-embedding-3-small` | OpenAI | 1536* | 8191 | ✅ | ~$0.02 | ~62.3 | Cheapest API-based |
| `embed-v4.0` | Cohere | 1536 | 512 | ✅ | ~$0.10 | ~66.1 | Binary embedding support |
| `voyage-3-large` | Voyage AI | 1024 | 32000 | ✅ | ~$0.18 | ~67.2 | Context window large |
| `BAAI/bge-m3` | Open-source | 1024 | 8192 | ✅ 100+ | Free | ~65.0 | Dense + Sparse + ColBERT |
| `nomic-embed-text` | Open-source | 768 | 8192 | Limitations | Free | ~62.4 | Lightweight, runs well on CPU |
| `all-MiniLM-L6-v2` | Open-source | 384 | 256 | ❌ Eng only | Free | ~56.3 | Fastest, smallest |

> **Note:** MTEB score changes according to benchmark version. Always check [huggingface.co/spaces/mteb/leaderboard](https://huggingface.co/spaces/mteb/leaderboard) for the latest number.

### 3.1. How to choose a model — Decision Tree

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

### 4.1. Three key metrics

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

### 4.2. When to use which metric?

| Metrics | When to use | Note |
|--------|-------------|-------|
| **Cosine Similarity** | Default for most use cases. Embeddings have normalized | Does not count magnitude, only direction |
| **Dot Product** | When magnitude is important (popularity, relevance score) | Faster than cosine (skip normalize) |
| **Euclidean (L2)** | Clustering, when absolute distance is needed | Affected by scale |

> **Practical tip:** Most embedding models **normalize output** (unit vector). Once normalized: `cosine_similarity = dot_product`. Use any one, dot product is faster.

```text
Normalized Vectors:  ‖v‖ = 1

   cosine(a,b) = dot(a,b) / (‖a‖ × ‖b‖)
               = dot(a,b) / (1 × 1)
               = dot(a,b)           ← tương đương!
```

## 5. Chunking Strategies Deep-Dive

### 5.1. Why chunking?

Embedding models have a **token limit** (usually 512–8192 tokens). Long documents must be **divided into chunks** before embedding. Chunking greatly affects retrieval quality.

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

The simplest way: cut to a fixed number of characters/tokens.

```python
from langchain.text_splitter import CharacterTextSplitter

splitter = CharacterTextSplitter(
    separator="\n\n",     # Cắt ưu tiên theo paragraph
    chunk_size=1000,      # Tối đa 1000 ký tự
    chunk_overlap=200,    # Overlap 200 ký tự giữa chunks
)

chunks = splitter.split_text(document_text)
```

**Advantages**: Simple, easy to implement, predictable chunk size.
**Disadvantages**: Can cut mid-sentence/idea, losing context.

### 5.3. Recursive Character Splitting

Try cutting according to hierarchy: `\n\n` → `\n` → `. ` → ` ` → `""`. Prioritize keeping paragraphs/sentences intact.

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

**This is the default choice** for most use cases — a balance between simplicity and quality.

### 5.4. Semantic Chunking

Cut based on **semantic change** — when embedding between 2 consecutive sentences differs too much → create new chunk.

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

Take advantage of the document structure (headings, sections) to chunk smarter.

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

### 5.6. Compare Chunking Strategies

| Strategy | Quality | Speed ​​| Complexity | Best for |
|----------|-----------|-------|-----------|----------|
| **Fixed-Size** | ⭐⭐ | ⭐⭐⭐⭐⭐ | Low | Prototype, plain text |
| **Recursive** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Low | **Default choice** |
| **Semantic** | ⭐⭐⭐⭐⭐ | ⭐⭐ | Cao | High-quality RAG |
| **Document-Aware** | ⭐⭐⭐⭐ | ⭐⭐⭐ | Average | Markdown, HTML, code |

## 6. Chunk Size & Overlap — Tradeoffs & Best Practices

### 6.1. Chunk Size — balance between precision and context

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

### 6.2. Overlap — keeps continuity between chunks

Overlap helps **avoid losing information at the boundary** between 2 chunks:

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

### 6.3. Best Practices from experience

| Parameters | Recommended Range | Reason |
|-----------|-----------|-------|
| **Chunk size** | 500–1000 chars (~128–256 tokens) | Balancing precision/context |
| **Overlap** | 10–20% of chunk_size | Keep boundary context |
| **Separator priority** | `\n\n` → `\n` → `. ` → ` ` | Prioritize natural boundaries |

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

> **Tip:** There is no "optimal chunk size" universal. Always **eval on real data** using retrieval metrics (section 9) before deciding.

## 7. Document Loaders — Read any type of data source

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

| Source | Loader | When to use |
|-------|--------|-------------|
| **PDF (text-based)** | `PyMuPDFLoader` | Fast, lowercase PDF |
| **PDF (scanned/complex)** | `UnstructuredPDFLoader` | Need OCR, tables, images |
| **Web pages** | `WebBaseLoader` | Crawl articles, docs |
| **CSV** | `CSVLoader` | Structured data, each row = 1 doc |
| **JSON** | `JSONLoader` | API responses, structured export |
| **Markdown** | `UnstructuredMarkdownLoader` | Documentation, notes |
| **Database** | SQLAlchemy + custom | Query results into documents |

## 8. Hands-On: Building a Semantic Search Engine

This is the **real battle** part — building a complete semantic search engine from scratch.

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

### 8.2. Step 1 — Prepare the environment

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

### 8.6. Step 5 — Pretty Output with Rich

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

### 9.1. Why evaluate retrieval?

Search engines return 5 results — but **how many are correct?** And **are the correct ones at the top?** That's why retrieval metrics are needed.

### 9.2. The three most important metrics

| Metrics | Recipe | Meaning |
|--------|-----------|---------|
| **Recall@k** ​​| (relevant docs in top-k) / (total relevant docs) | How many % of docs are correct? |
| **MRR** | 1 / rank_of_first_relevant_result | Where is the first correct Doc located? |
| **NDCG@k** | Normalized DCG@k | Are the correct Docs at the top? (positionally weighted) |

### 9.3. Calculation example

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

> **Tip:** In production, **Recall@k is most important** for the RAG pipeline. If retrieval cannot find a relevant document, LLM will hallucinate. Target Recall@5 ≥ 0.85.

## Summary

This article covers all **foundations** for semantic search — the foundation of every RAG system:

| Concepts | Key Takeaway |
|--------|-------------|
| **Embedding** | Text variable → dense vector, keeping semantic meaning |
| **Model choice** | `bge-m3` for open-source, `text-embedding-3-small` for API budget-friendly |
| **Distance metric** | Cosine similarity is default. Normalized → cosine = dot product |
| **Chunking** | `RecursiveCharacterTextSplitter` is default. 500–1000 chars, 10–20% overlap |
| **Document loaders** | PyMuPDF for PDF, WebBaseLoader for web, CSVLoader for CSV |
| **Search pipeline** | Embed → Index → ​​Query → Rank → Return top-k |
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

## Exercises

### Exercise 1: Build Your Own Semantic Search (Basic)

Create a semantic search engine for any **10 articles**:

1. Download/copy 10 text articles into the folder `./documents/`
2. Implement `SemanticSearchEngine` class (Section 8)
3. Index all documents
4. Test search with 5 different queries
5. Compare results between models `all-MiniLM-L6-v2` and `bge-m3`

**Deliverable**: Python script can run, printing top-3 results for each query.

### Exercise 2: Chunking Experiment (Medium)

Comparing the impact of chunking on retrieval quality:

1. Use the same set of documents (10+ pages)
2. Create 4 index versions with different chunk configs:
   - `chunk_size=256, overlap=50`
   - `chunk_size=512, overlap=100`
   - `chunk_size=1024, overlap=200`
   - `SemanticChunker` (need OpenAI API key)
3. Create 10 query-answer pairs (ground truth)
4. Calculate Recall@5 and MRR for each config
5. Draw a table to compare the results

**Deliverable**: Jupyter Notebook with analysis and conclusion.

### Exercise 3: Multi-Source Search Engine (Advanced)

Build semantic search engine that handles **many types of data sources**:

1. Load documents from at least 3 sources: PDF + Web + CSV
2. Implement metadata filtering (e.g. search only within PDFs)
3. Implement hybrid scoring: `final_score = 0.7 * semantic_score + 0.3 * keyword_score`
4. Add re-ranking using cross-encoder (`ms-marco-MiniLM-L-6-v2`)
5. Build CLI interface: `python search.py --query "..." --source pdf --top 5`

**Deliverable**: GitHub repo with README, tests, and demo output.
