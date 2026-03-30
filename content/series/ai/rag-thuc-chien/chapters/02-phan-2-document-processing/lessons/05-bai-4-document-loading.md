---
id: 019c9619-ff04-7004-a004-ff0400000004
title: 'Bài 4: Document Loading — PDF, DOCX, Web, YouTube, Code'
slug: bai-4-document-loading
description: >-
  Xử lý đa dạng nguồn tài liệu: PDF, DOCX, HTML/Web, YouTube transcripts,
  code repos. LangChain document loaders vs LlamaIndex readers.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 2: Document Processing Pipeline"
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: "RAG Thực Chiến: Từ Basic đến Advanced"
  slug: rag-thuc-chien
---

## Giới thiệu

RAG pipeline bắt đầu từ **data** — và data có thể ở **mọi format**: PDF, Word, trang web, video YouTube, code repo... Bài này dạy bạn cách **load** tất cả các loại tài liệu phổ biến vào RAG pipeline.

> **Quy tắc:** Garbage in = Garbage out. Document loading **chất lượng cao** = RAG **chất lượng cao**.

---

## 1. Tổng quan Document Loaders

### 1.1 Các nguồn data phổ biến

| Nguồn | Format | Thách thức |
|-------|--------|-----------|
| **PDF** | .pdf | Bảng, hình, multi-column, scan |
| **Word** | .docx, .doc | Formatting, headers/footers |
| **Web Pages** | HTML | JavaScript rendering, noise |
| **YouTube** | Video/Audio | Cần transcript, timestamp |
| **Code Repository** | .py, .js, .md | Structure, dependencies |
| **CSV/Excel** | .csv, .xlsx | Tabular data → text |
| **Database** | SQL | Query, schema understanding |

### 1.2 LangChain Document Loaders

LangChain cung cấp ecosystem phong phú document loaders:

```python
from langchain_community.document_loaders import (
    PyPDFLoader,          # PDF
    Docx2txtLoader,       # Word
    WebBaseLoader,        # Web pages
    YoutubeLoader,        # YouTube
    GitLoader,            # Git repos
    CSVLoader,            # CSV files
    TextLoader,           # Plain text
    UnstructuredExcelLoader,  # Excel
)
```

---

## 2. PDF — Loại tài liệu phổ biến nhất

### 2.1 PyPDFLoader — Cơ bản

```python
"""Load PDF đơn giản nhất — PyPDFLoader"""
from langchain_community.document_loaders import PyPDFLoader

# Load từng trang
loader = PyPDFLoader("company_handbook.pdf")
pages = loader.load()

print(f"Số trang: {len(pages)}")
for i, page in enumerate(pages[:3]):
    print(f"\n--- Trang {i+1} ---")
    print(f"Nội dung: {page.page_content[:200]}...")
    print(f"Metadata: {page.metadata}")
    # metadata = {"source": "company.pdf", "page": 0}
```

### 2.2 PDF nâng cao — Xử lý bảng, hình

PyPDF đơn giản nhưng **yếu** với bảng và hình. Dùng **Unstructured** cho PDF phức tạp:

```python
"""Unstructured: xử lý PDF phức tạp (bảng, hình, multi-column)"""
from langchain_community.document_loaders import UnstructuredPDFLoader

# Partition strategy: "hi_res" cho chất lượng cao
loader = UnstructuredPDFLoader(
    "financial_report.pdf",
    mode="elements",           # Tách từng element (text, table, image)
    strategy="hi_res",         # OCR + layout analysis
)
elements = loader.load()

# Lọc theo loại element
for elem in elements[:10]:
    elem_type = elem.metadata.get("category", "unknown")
    print(f"[{elem_type}] {elem.page_content[:100]}...")
```

### 2.3 So sánh PDF loaders

| Loader | Bảng | Hình | OCR (scan) | Speed | Cài đặt |
|--------|------|------|-----------|-------|---------|
| **PyPDFLoader** | ❌ | ❌ | ❌ | ⚡ Nhanh | `pip install pypdf` |
| **PyMuPDFLoader** | ⚠️ | ❌ | ❌ | ⚡ Nhanh | `pip install pymupdf` |
| **UnstructuredPDFLoader** | ✅ | ✅ | ✅ | 🐢 Chậm | `pip install unstructured[pdf]` |
| **Amazon Textract** | ✅ | ✅ | ✅ | ⚡ | AWS account |

> **Recommendation:** Bắt đầu bằng **PyPDFLoader**. Nếu PDF có bảng/hình, dùng **Unstructured**.

---

## 3. Web Pages

### 3.1 Load trang web

```python
"""Load nội dung từ trang web"""
from langchain_community.document_loaders import WebBaseLoader

# Load 1 trang
loader = WebBaseLoader("https://xdev.asia/ai/")
docs = loader.load()

print(f"Content length: {len(docs[0].page_content)} chars")
print(docs[0].page_content[:500])

# Load nhiều trang
urls = [
    "https://xdev.asia/blog/post-1",
    "https://xdev.asia/blog/post-2",
    "https://xdev.asia/blog/post-3",
]
loader = WebBaseLoader(urls)
docs = loader.load()
print(f"Loaded {len(docs)} pages")
```

### 3.2 Crawl website (Sitemap)

```python
"""Crawl tất cả trang từ sitemap"""
from langchain_community.document_loaders.sitemap import SitemapLoader

loader = SitemapLoader(
    web_path="https://xdev.asia/sitemap.xml",
    filter_urls=["https://xdev.asia/blog/"],  # Chỉ blog
)
docs = loader.load()
print(f"Crawled {len(docs)} pages from blog")
```

---

## 4. YouTube Transcripts

```python
"""Load transcript từ YouTube video"""
from langchain_community.document_loaders import YoutubeLoader

# Load transcript (auto-generated hoặc manual)
loader = YoutubeLoader.from_youtube_url(
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    add_video_info=True,         # Thêm title, description
    language=["vi", "en"],       # Ưu tiên tiếng Việt
)
docs = loader.load()

print(f"Title: {docs[0].metadata.get('title')}")
print(f"Duration: {docs[0].metadata.get('length')} seconds")
print(f"Transcript: {docs[0].page_content[:300]}...")
```

---

## 5. Code Repositories

```python
"""Load code từ Git repo"""
from langchain_community.document_loaders import GitLoader

# Clone + load tất cả files
loader = GitLoader(
    clone_url="https://github.com/user/project",
    repo_path="./temp_repo",
    branch="main",
    file_filter=lambda f: f.endswith((".py", ".md", ".yaml")),
)
docs = loader.load()

print(f"Loaded {len(docs)} files")
for doc in docs[:5]:
    print(f"  {doc.metadata['file_path']} ({len(doc.page_content)} chars)")
```

---

## 6. Batch Processing — Xử lý nhiều files

### 6.1 Load folder tài liệu

```python
"""Load tất cả tài liệu trong folder"""
from langchain_community.document_loaders import DirectoryLoader, PyPDFLoader
from pathlib import Path

# Load tất cả PDF trong folder
loader = DirectoryLoader(
    "./company_docs/",
    glob="**/*.pdf",           # Recursive, chỉ PDF
    loader_cls=PyPDFLoader,
    show_progress=True,
    use_multithreading=True,   # Parallel loading
)
docs = loader.load()
print(f"Loaded {len(docs)} pages from PDF files")

# Thêm custom metadata
for doc in docs:
    filename = Path(doc.metadata["source"]).stem
    doc.metadata["department"] = "HR" if "hr" in filename.lower() else "General"
    doc.metadata["doc_type"] = "policy"
```

### 6.2 Multi-format loader

```python
"""Unified loader cho nhiều format"""
from langchain_community.document_loaders import (
    PyPDFLoader, Docx2txtLoader, TextLoader, CSVLoader
)
from pathlib import Path

def load_document(file_path: str):
    """Load document dựa trên extension."""
    ext = Path(file_path).suffix.lower()
    
    loaders = {
        ".pdf": PyPDFLoader,
        ".docx": Docx2txtLoader,
        ".txt": TextLoader,
        ".md": TextLoader,
        ".csv": CSVLoader,
    }
    
    loader_cls = loaders.get(ext)
    if not loader_cls:
        raise ValueError(f"Unsupported format: {ext}")
    
    return loader_cls(file_path).load()

# Usage
all_docs = []
for f in Path("./docs/").glob("**/*"):
    if f.suffix in [".pdf", ".docx", ".txt", ".md", ".csv"]:
        try:
            docs = load_document(str(f))
            all_docs.extend(docs)
            print(f"✅ {f.name}: {len(docs)} chunks")
        except Exception as e:
            print(f"❌ {f.name}: {e}")

print(f"\nTotal: {len(all_docs)} documents loaded")
```

> **💡 Bài tập 6:** Viết script load tất cả tài liệu trong 1 folder (mix PDF + DOCX + TXT). In ra: tên file, số pages/chunks, tổng characters. Xử lý lỗi gracefully.

---

## 7. Tips & Best Practices

| Tip | Giải thích |
|-----|-----------|
| **Clean trước khi load** | Xóa headers/footers, page numbers, watermarks |
| **Thêm metadata** | Source, date, category — dùng cho filtering sau này |
| **Handle encoding** | Tiếng Việt: UTF-8. Check `chardet` nếu unknown |
| **Batch processing** | Dùng multithread cho folder lớn (100+ files) |
| **Test quality** | Spot-check 10% documents sau khi load |
| **Error handling** | Log files bị lỗi, đừng skip silently |

---

## Tóm tắt

| Nguồn | Loader | Ghi chú |
|-------|--------|---------|
| **PDF** | PyPDFLoader / Unstructured | Unstructured cho bảng/hình |
| **Web** | WebBaseLoader / SitemapLoader | Crawl full site qua sitemap |
| **YouTube** | YoutubeLoader | Auto-transcript + metadata |
| **Code** | GitLoader | File filter cho extensions |
| **Folder** | DirectoryLoader | Multithread, recursive |

## Bài tập tổng hợp

1. ✅ Hoàn thành bài tập nhỏ (6)
2. **Build Ingestion Pipeline:** Viết function `ingest(folder_path)` load mọi file trong folder → trả về list documents có metadata đầy đủ.
3. **PDF Benchmark:** Lấy 1 PDF phức tạp (có bảng + hình). So sánh output giữa PyPDFLoader vs Unstructured. Chất lượng khác nhau thế nào?
4. **Web Crawler:** Crawl 10 bài blog từ 1 website yêu thích → load vào ChromaDB → tạo "Chat with Blog".

> **Bài tiếp theo:** Chunking Strategies — cách chia tài liệu thành chunks tối ưu cho retrieval.
