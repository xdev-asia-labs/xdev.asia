---
id: 019c9619-ff10-7010-a010-ff1000000010
title: 'Lesson 10: Multimodal RAG — Images, Tables, Charts in Documents'
slug: bai-10-multimodal-rag
description: >-
  RAG for documents containing images, tables, and charts. Extract information
  from PDF scan, OCR, table extraction. Vision LLM + vector search for
  multimodal.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 'Part 4: Advanced RAG Patterns'
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: 'Real Battle RAG: From Basic to Advanced'
  slug: rag-thuc-chien
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7088" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7088)"/>

  <!-- Decorations -->
  <g>
    <circle cx="906" cy="268" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="712" cy="174" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1018" cy="80" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="824" cy="246" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="152" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="88" x2="1100" y2="168" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="118" x2="1050" y2="188" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.2390923627308,116.5 975.2390923627308,159.5 938,181 900.7609076372692,159.5 900.7609076372692,116.50000000000001 938,95" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI & ML — Lesson 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 10: Multimodal RAG — Pictures, Tables, Charts</tspan>
      <tspan x="60" dy="42">map in Documents</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Real Battle RAG: From Basic to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Advanced RAG Patterns</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Actual documents are not just text — there are also **images**, **tables**, **charts**, **diagrams**. Traditional RAG skips it all! Multimodal RAG solves this problem.

> **Example:** 50-page financial report: 40% text, 30% data tables, 20% charts, 10% images. RAG text-only misses 60% of information!

This article covers:
1. **Table extraction** — extract and index tables
2. **Image understanding** — use Vision LLM to describe images/graphs
3. **Multimodal embeddings** — embed both text + image into the same vector space

---

## 1. Problem: Multimodal Document

### 1.1 Types of content in documents

```
┌─────────────────────────────────────────┐
│  Typical Business Document              │
│                                          │
│  [Text paragraph]                        │  ← RAG text OK
│  [Text paragraph]                        │  ← RAG text OK
│                                          │
│  ┌────────────────────────────┐          │
│  │  Revenue  │ Q1  │ Q2  │ Q3│          │  ← RAG text BỎ QUA!
│  │  Product A│ 100 │ 120 │ 95│          │
│  │  Product B│ 200 │ 180 │ 220│         │
│  └────────────────────────────┘          │
│                                          │
│  [Bar chart: Revenue trends]  📊        │  ← RAG text BỎ QUA!
│                                          │
│  [Architecture diagram]       🖼️        │  ← RAG text BỎ QUA!
│                                          │
└─────────────────────────────────────────┘
```

### 1.2 Processing strategies

| Content type | Strategy | Tools |
|-------------|-----------|-------|
| **Text** | Chunks live | LangChain splitters |
| **Table** | Extract → convert to text/markdown | Unstructured, Camelot |
| **Chart/Diagram** | Vision LLM → text description | GPT-4o, Claude |
| **Scanned PDF** | OCR → text | Tesseract, Azure OCR |

---

## 2. Table Extraction

### 2.1 Use Unstructured

```python
"""Extract tables từ PDF bằng Unstructured"""
from unstructured.partition.pdf import partition_pdf

elements = partition_pdf(
    filename="financial-report.pdf",
    strategy="hi_res",           # Dùng model detection
    infer_table_structure=True,  # Detect và extract tables
    extract_images_in_pdf=True,  # Extract images
)

# Phân loại elements
tables = []
texts = []
images = []

for el in elements:
    if el.category == "Table":
        tables.append(el)
        print(f"Table found: {el.metadata.text_as_html[:200]}...")
    elif el.category == "Image":
        images.append(el)
    else:
        texts.append(el)

print(f"Found: {len(texts)} texts, {len(tables)} tables, {len(images)} images")
```

### 2.2 Table → Text summary

```python
"""Dùng LLM summarize bảng thành text cho RAG"""
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

def summarize_table(table_html: str) -> str:
    prompt = f"""Đây là bảng dữ liệu (HTML):
{table_html}

Tóm tắt nội dung bảng thành đoạn văn (50-100 từ).
Bao gồm: tên bảng, các cột, xu hướng nổi bật, giá trị đặc biệt."""
    
    return llm.invoke(prompt).content

# Tạo document cho mỗi table
from langchain.schema import Document

table_docs = []
for table in tables:
    summary = summarize_table(table.metadata.text_as_html)
    table_docs.append(Document(
        page_content=summary,
        metadata={
            "source": "financial-report.pdf",
            "type": "table",
            "original_html": table.metadata.text_as_html,
            "page": table.metadata.page_number,
        }
    ))
```

### 2.3 Multi-vector: Save both summary and raw data

```python
"""Multi-vector store: search bằng summary, trả về raw table"""
from langchain.storage import InMemoryByteStore
from langchain.retrievers.multi_vector import MultiVectorRetriever
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
import uuid

# Vector store: chứa summaries (để search)
vectorstore = Chroma(
    collection_name="multimodal",
    embedding_function=OpenAIEmbeddings(),
)

# Doc store: chứa raw data (để trả về cho LLM)
docstore = InMemoryByteStore()

retriever = MultiVectorRetriever(
    vectorstore=vectorstore,
    byte_store=docstore,
    id_key="doc_id",
)

# Index: summary → vector store, raw → doc store
for table in tables:
    doc_id = str(uuid.uuid4())
    summary = summarize_table(table.metadata.text_as_html)
    
    # Summary vào vector store (search)
    retriever.vectorstore.add_documents([
        Document(page_content=summary, metadata={"doc_id": doc_id, "type": "table"})
    ])
    
    # Raw table vào doc store (return)
    retriever.docstore.mset([(doc_id, table.metadata.text_as_html)])
```

> **💡 Exercise 1:** Extract tables from a PDF with at least 3 tables. Create multi-vector store: search using summary, returns raw table. Test 5 questions related to table data.

---

## 3. Image Understanding

### 3.1 Vision LLM image description

```python
"""Dùng GPT-4o mô tả ảnh/biểu đồ trong tài liệu"""
import base64
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4o", temperature=0)

def describe_image(image_path: str) -> str:
    with open(image_path, "rb") as f:
        image_data = base64.b64encode(f.read()).decode()
    
    response = llm.invoke([
        {"role": "system", "content": "Mô tả chi tiết nội dung ảnh/biểu đồ. "
         "Nếu là biểu đồ: liệt kê data points, xu hướng, kết luận."},
        {"role": "user", "content": [
            {"type": "text", "text": "Mô tả ảnh này:"},
            {"type": "image_url", "image_url": {
                "url": f"data:image/png;base64,{image_data}"
            }},
        ]},
    ])
    return response.content

# Mô tả biểu đồ revenue
desc = describe_image("charts/revenue-q3.png")
# "Biểu đồ cột so sánh doanh thu Q1-Q3 2024.
#  Product A: giảm 20% từ Q1 (100M) xuống Q3 (80M).
#  Product B: tăng 10% ổn định, đạt 220M Q3.
#  Tổng doanh thu Q3: 300M, tăng 5% so với Q2..."
```

### 3.2 Pipeline: PDF → Extract images → Describe → Index

```python
"""Full pipeline cho multimodal PDF"""
import os

def process_multimodal_pdf(pdf_path: str, output_dir: str):
    # 1. Extract elements
    elements = partition_pdf(
        filename=pdf_path,
        strategy="hi_res",
        extract_images_in_pdf=True,
        image_output_dir_path=output_dir,
    )
    
    all_docs = []
    
    for el in elements:
        if el.category == "Table":
            # Summarize table
            summary = summarize_table(el.metadata.text_as_html)
            all_docs.append(Document(
                page_content=summary,
                metadata={"type": "table", "page": el.metadata.page_number}
            ))
        elif el.category == "Image":
            # Describe image
            img_path = os.path.join(output_dir, el.metadata.image_path)
            description = describe_image(img_path)
            all_docs.append(Document(
                page_content=description,
                metadata={"type": "image", "page": el.metadata.page_number}
            ))
        else:
            all_docs.append(Document(
                page_content=str(el),
                metadata={"type": "text", "page": el.metadata.page_number}
            ))
    
    return all_docs

docs = process_multimodal_pdf("report.pdf", "./extracted_images")
# Index all_docs vào vector store → search bình thường!
```

---

## 4. Multimodal Embeddings

### 4.1 CLIP-based: Text + Image with vector space

```python
"""Embed text và ảnh vào cùng vector space"""
from langchain_experimental.open_clip import OpenCLIPEmbeddings

# CLIP embeddings: text và image → cùng 1 vector space
clip_embeddings = OpenCLIPEmbeddings(
    model_name="ViT-B-32",
    checkpoint="openai",
)

# Embed text
text_emb = clip_embeddings.embed_documents(["biểu đồ doanh thu tăng"])

# Embed image
img_emb = clip_embeddings.embed_image(["charts/revenue.png"])

# Cả 2 vectors có thể so sánh cosine similarity!
# → Search bằng text, tìm được ảnh liên quan
```

### 4.2 When to use which approach?

| Approach | Advantages | Disadvantages | Use cases |
|--------|---------|-----------|---------|
| **Vision LLM → text** | Flexible, details | Expensive API, slow | Charts, diagrams |
| **OCR → text** | Fast, cheap | Read only text in images | Scanned docs |
| **CLIP embeddings** | Direct search | Few details | Image search |
| **Multi-vector** | Best of both | Complex setup | Production |

> **💡 Exercise 2:** Create multimodal RAG for a PDF report containing text + table + image. Test answers questions: (a) about text, (b) about table data, (c) about chart content.

---

## 5. Scanned PDF processing (OCR)

### 5.1 OCR Pipeline

```python
"""OCR cho PDF scan — không có text layer"""
from unstructured.partition.pdf import partition_pdf

# strategy="ocr_only" cho scanned PDFs
elements = partition_pdf(
    filename="scanned-contract.pdf",
    strategy="ocr_only",
    languages=["vie", "eng"],   # Hỗ trợ tiếng Việt
    ocr_languages="vie+eng",
)

# Elements đã được OCR → có text content
for el in elements:
    print(el.text[:100])
```

### 5.2 Improve OCR quality

```
Kết quả OCR thô: "Điều 5. Quvền vá nghia vụ cùa người lao dộng"
                                 ↑ sai     ↑ sai         ↑ sai

Post-processing bằng LLM:
"Điều 5. Quyền và nghĩa vụ của người lao động"
→ LLM fix lỗi OCR dựa trên context!
```

```python
"""LLM post-process OCR text"""
def fix_ocr_text(raw_text: str) -> str:
    prompt = f"""Text sau được OCR từ tài liệu tiếng Việt, có thể có lỗi.
Sửa lỗi chính tả, giữ nguyên nội dung:

{raw_text}

Text đã sửa:"""
    return llm.invoke(prompt).content
```

---

## Summary

| Concepts | Remember |
|--------|--------|
| **Multimodal RAG** ​​| RAG for text + table + image + chart |
| **Table extraction** | Unstructured hi_res → HTML → LLM summary |
| **Image description** | Vision LLM (GPT-4o) describes images into text |
| **Multi-vector** | Search using summary, return raw data |
| **CLIP** | Embed text + image with vector space |
| **OCR** ​​| Scanned PDF → text, LLM fix error |

## General exercises

1. ✅ Complete 2 small exercises (1, 2)
2. **Full Multimodal Pipeline:** Process 1 complex PDF (annual report): extract text + tables + charts → index all → build Q&A chatbot to answer all types of questions.
3. **Multi-vector Store:** Implement with Chroma + InMemoryByteStore. Search using summary, returns raw HTML table. Compare answer quality with text-only RAG.
4. **OCR Pipeline:** Process 5 scanned Vietnamese PDF → OCR → LLM fix → index. Measure accuracy on 10 questions.

> **Next article:** Agentic RAG — Agent + RAG combines power — when the RAG pipeline needs to decide for itself: where to search, what additional information is needed, when to stop.
