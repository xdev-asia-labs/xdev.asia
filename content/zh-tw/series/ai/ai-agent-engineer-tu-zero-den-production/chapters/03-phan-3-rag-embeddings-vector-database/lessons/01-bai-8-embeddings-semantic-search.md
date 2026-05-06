---
id: 019e0a01-bb08-7001-c001-ee0800000001
title: 第 8 課：嵌入與語意搜尋基礎知識
slug: bai-8-embeddings-semantic-search
description: 文字嵌入：句子轉換器、OpenAI 嵌入。嵌入模型比較。餘弦相似度，語意搜尋。分塊策略：固定大小、語意、遞歸。 PDF、Web、資料庫的文檔載入器。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 第 3 部分：RAG、嵌入和向量資料庫
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: AI代理工程師：從零到生產
  slug: ai-agent-engineer-tu-zero-den-production
locale: zh-tw
---

> **電腦無法理解語言－它們可以理解數字。 ** 嵌入是將文字轉換為向量的橋樑，將「意義」轉換為高維空間中的座標。 Two sentences with the same meaning will lie **close to each other** in that space. This is the foundation of all RAG, semantic search, and recommendation systems. Not understanding embedding → unable to build real combat AI Agent. This article goes from one-hot encoding theory to hands-on code to build a complete semantic search engine.

## 1. 什麼是嵌入？ — From One-Hot to Dense Vectors

### 1.1。问题：计算机无法理解文本

文本是**非结构化数据**。 Every ML/DL model requires numeric input. The question is: **How to turn text into numbers while preserving the "meaning"?**

### 1.2。 One-Hot Encoding — the old and limited way

Each word is a vector, with only one position equal to 1, the rest equal 0:

```text
Vocabulary: [cat, dog, fish, bird]

cat  → [1, 0, 0, 0]
dog  → [0, 1, 0, 0]
fish → [0, 0, 1, 0]
bird → [0, 0, 0, 1]
```

**嚴重問題：**

|限制 |說明|
|--------|-------------|
| **沒有語意** | cosine(cat, dog) = 0, even though they are the same animal |
| **Extremely large dimension** | Vocabulary 100K 字 → vector 100K dimensions |
| **稀疏矩陣** | 99.99% value = 0, wasting memory |
| **不要一概而論** | New words do not have representation |

### 1.3。 Dense Embeddings — breakthrough idea

我們使用小尺寸（256-3072 維）的**密集向量**來代替稀疏向量，其中**每個維度都帶有隱含的“含義”**：

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

### 1.4。 Geometric Intuition — meaning lies in distance

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

### 2.1。 Sentence Transformers (Open-Source)

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

### 2.2。 OpenAI 文字嵌入-3

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

**俄罗斯套娃嵌入**：OpenAI `text-embedding-3-*` Supports dimension reduction while still maintaining good quality — saving storage/cost.

### 2.3。 Cohere 嵌入 v4

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

### 2.4。航程人工智慧

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

## 3.嵌入模型比較

|型號|供應商|昏暗|最大代幣 |多語言 |成本/1M 代幣 | MTEB 分數 |筆記|
|-------|----------|-----|-----------|-------------|-----------|-------------|---------|
| `text-embedding-3-large` |開放人工智慧 | 3072* | 8191 | ✅ | ~$0.13 | 〜64.6 | *Matryoshka: can be reduced |
| `text-embedding-3-small` |開放人工智慧 | 1536* | 8191 | ✅ | ~$0.02 | 〜62.3 |最便宜的基於 API 的 |
| `embed-v4.0` |連貫| 1536 | 1536 512 | 512 ✅ | ~$0.10 | 〜66.1 |二進位嵌入支援 |
| `voyage-3-large` |航程人工智慧 | 1024 | 1024 32000 | ✅ | ~$0.18 | 〜67.2 |上下文視窗大 |
| `BAAI/bge-m3` |開源| 1024 | 1024 8192 | ✅ 100+ |免費| ~65.0 |密集+稀疏+ColBERT |
| `nomic-embed-text` |開源| 768 | 768 8192 |限制 |免費| 〜62.4 |輕量級，CPU 運作良好 |
| `all-MiniLM-L6-v2` |開源| 384 | 384 256 | 256 ❌ 僅限英語 |免費| 〜56.3 |最快、最小|

> **注意：** MTEB 分數會根據基準版本而變化。經常檢查 [huggingface.co/spaces/mteb/leaderboard](https://huggingface.co/spaces/mteb/leaderboard) 取得最新號碼。

### 3.1。如何選擇模型—決策樹

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

## 4. 距離測量－餘弦、點積、歐幾裡得

### 4.1。三個關鍵指標

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

### 4.2。何時使用哪個指標？

|指標|何時使用 |注意|
|--------|-------------|--------|
| **餘弦相似度** |大多數用例的預設值。嵌入已標準化 |不計算大小，只計算方向 |
| **點積** |當規模很重要時（受歡迎程度、相關性得分）|比餘弦更快（跳過標準化）|
| **歐幾裡得 (L2)** |當需要絕對距離時進行聚類|受規模影響|

> **實用提示：**大多數嵌入模型**標準化輸出**（單位向量）。一旦標準化： `cosine_similarity = dot_product`。使用任何一種，點積速度更快。

```text
Normalized Vectors:  ‖v‖ = 1

   cosine(a,b) = dot(a,b) / (‖a‖ × ‖b‖)
               = dot(a,b) / (1 × 1)
               = dot(a,b)           ← tương đương!
```

## 5. 深入探討分塊策略

### 5.1。為什麼要分塊？

嵌入模型有**令牌限制**（通常為 512–8192 個令牌）。 Long documents must be **divided into chunks** before embedding.分塊極大地影響檢索品質。

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

### 5.2。固定大小分塊

最簡單的方法：削減到固定數量的字元/標記。

```python
from langchain.text_splitter import CharacterTextSplitter

splitter = CharacterTextSplitter(
    separator="\n\n",     # Cắt ưu tiên theo paragraph
    chunk_size=1000,      # Tối đa 1000 ký tự
    chunk_overlap=200,    # Overlap 200 ký tự giữa chunks
)

chunks = splitter.split_text(document_text)
```

**優點**：簡單、易於實現、區塊大小可預測。
**缺點**：可能會切斷句子/想法的中間部分，失去上下文。

### 5.3。遞歸字元分割

嘗試依照層次結構進行切割： `\n\n` → `\n` → `. ` → ` ` → `""`。優先考慮保持段落/句子完整。

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

### 5.4。語意分塊

基於**語義變化**進行剪切－當兩個連續句子之間的嵌入差異太大時→建立新的區塊。

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

### 5.5。文檔感知分塊

利用文件結構（標題、章節）更聰明地進行分塊。

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

### 5.6。比較分塊策略

|戰略|品質 |速度|複雜性 |最適合 |
|----------|-----------|-------|-----------|----------|
| **固定尺寸** | ⭐⭐ | ⭐⭐⭐⭐⭐ |低|原型，純文字 |
| **遞迴** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |低| **預設選擇** |
| **語意** | ⭐⭐⭐⭐⭐ | ⭐⭐ |曹 |高品質 RAG |
| **文檔感知** | ⭐⭐⭐⭐ | ⭐⭐⭐ |平均 | Markdown、HTML、代碼 |

## 6. Chunk Size & Overlap — Tradeoffs & Best Practices

### 6.1。 Chunk Size — balance between precision and context

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

### 6.2。重疊－保持區塊之間的連續性

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

### 6.3。經驗中的最佳實踐

|參數|建議範圍 |原因 |
|------------|------------|--------|
| **區塊大小** | 500–1000 個字元（~128–256 個標記）|平衡精度/上下文 |
| **重疊** | chunk_size 的 10–20% |保持邊界上下文 |
| **分隔符號優先權** | `\n\n` → `\n` → `. ` → ` ` |優先考慮自然邊界 |

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

> **提示：** 不存在通用的「最佳區塊大小」。在做出決定之前，請務必使用檢索指標（第 9 節）**評估真實資料**。

## 7. 文件載入器 — 讀取任何類型的資料來源

### 7.1。 PDF — PyMuPDF + 非結構化

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

### 7.2。網頁 — BeautifulSoup 和 WebBaseLoader

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

### 7.3。 CSV 和 JSON

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

### 7.4。文檔載入器決策表

|來源 |裝載機|何時使用 |
|--------|--------|-------------|
| **PDF（基於文字）** | `PyMuPDFLoader` |快速、小寫 PDF |
| **PDF（掃描/複雜）** | `UnstructuredPDFLoader` |需要OCR、表格、圖片|
| **網頁** | `WebBaseLoader` |抓取文章、文件 |
| **CSV** | `CSVLoader` |結構化數據，每行 = 1 個文檔 |
| **JSON** | `JSONLoader` | API 回應、結構化匯出 |
| **降價** | `UnstructuredMarkdownLoader` |文檔、註釋 |
| **資料庫** | SQLAlchemy + 自訂 |查詢結果寫入文件 |

## 8. 實作：建立語意搜尋引擎

這是**真正的戰鬥**部分——從頭開始建立一個完整的語義搜尋引擎。

### 8.1。架構概述

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

### 8.2。步驟 1 — 準備環境

```bash
pip install sentence-transformers langchain langchain-community \
    pymupdf numpy scikit-learn rich
```

### 8.3。第 2 步 — 載入和分塊文檔

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

### 8.4。步驟 3 — 嵌入與索引

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

### 8.5。步驟 4 — 搜尋功能

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

### 8.6。第 5 步 — 豐富的漂亮輸出

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

## 9. 評估－檢索指標

### 9.1。為什麼要評估檢索？

搜尋引擎回傳 5 個結果 — 但 **有多少是正確的？ ** 以及 **正確的結果在頂部嗎？ ** 這就是需要檢索指標的原因。

### 9.2。三個最重要的指標

|指標|食譜|意義|
|--------|------------|---------|
| **回憶@k** | （top-k 中的相關文檔）/（相關文檔總數）|有多少%的文檔是正確的？ |
| **MRR** | 1 / 第一相關結果排名 |第一個正確的文檔位於哪裡？ |
| **NDCG@k** |歸一化 DCG@k |頂端的文檔是否正確？ （按位置加權）|

### 9.3。計算範例

```text
Query: "What are embeddings?"

Ground truth relevant docs: {D2, D5, D8}

Search results (top-5): [D3, D2, D7, D5, D1]
                          ❌   ✅   ❌   ✅   ❌

Recall@5 = 2/3 = 0.667  (tìm được 2/3 docs relevant)
MRR       = 1/2 = 0.500  (doc relevant đầu tiên ở rank 2)
```

### 9.4。實施

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

### 9.5。評估最佳實踐

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

> **提示：** 在生產中，**Recall@k 對於 RAG 管道來說是最重要的**。如果檢索找不到相關文獻，LLM就會產生幻覺。目標召回率@5 ≥ 0.85。

## 總結

本文涵蓋了語意搜尋的所有**基礎**——每個 RAG 系統的基礎：

|概念 |重點 |
|--------|-------------|
| **嵌入** |文字變數→稠密向量，保持語意|
| **型號選擇** | `bge-m3` 對於開源， `text-embedding-3-small` API 預算友善 |
| **距離度量** |餘弦相似度是預設值。歸一化 → 餘弦 = 點積 |
| **分塊** | `RecursiveCharacterTextSplitter` 是預設的。 500–1000 個字符，10–20% 重疊 |
| **文檔載入器** | PyMuPDF for PDF、WebBaseLoader for web、CSVLoader for CSV |
| **搜尋管道** |嵌入→索引→查詢→排名→返回top-k |
| **評估** | Recall@k、MRR、NDCG — 目標 Recall@5 ≥ 0.85 |

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

## 練習

### 練習 1：建立您自己的語意搜尋（基本）

為任意 **10 篇文章** 建立語意搜尋引擎：

1.下載/複製10篇文字文章到資料夾中 `./documents/`
2. 實施 `SemanticSearchEngine` 類（第 8 節）
3. 索引所有文檔
4. 使用 5 個不同的查詢測試搜索
5. 比較模型之間的結果 `all-MiniLM-L6-v2` 和 `bge-m3`

**可交付成果**：Python 腳本可以運行，列印每個查詢的前 3 個結果。

### 練習 2：分塊實驗（中）

比較分塊對檢索品質的影響：

1.使用同一套文件（10+頁）
2. 使用不同的區塊配置建立 4 個索引版本：
   - `chunk_size=256, overlap=50`
   - `chunk_size=512, overlap=100`
   - `chunk_size=1024, overlap=200`
   - `SemanticChunker` （需要 OpenAI API 金鑰）
3. 建立 10 個查詢-答案對（基本事實）
4. 計算每個配置的 Recall@5 和 MRR
5. 繪製表格來比較結果

**可交付成果**：包含分析和結論的 Jupyter Notebook。

### 練習 3：多源搜尋引擎（進階）

建立處理**多種類型資料來源**的語意搜尋引擎：

1. 從至少 3 個來源載入文件：PDF + Web + CSV
2. 實施元資料過濾（例如僅在 PDF 內搜尋）
3. 實施混合評分： `final_score = 0.7 * semantic_score + 0.3 * keyword_score`
4. 使用交叉編碼器新增重新排名（`ms-marco-MiniLM-L-6-v2`）
5. 建構CLI介面： `python search.py --query "..." --source pdf --top 5`

**可交付成果**：包含 README、測試和演示輸出的 GitHub 儲存庫。
