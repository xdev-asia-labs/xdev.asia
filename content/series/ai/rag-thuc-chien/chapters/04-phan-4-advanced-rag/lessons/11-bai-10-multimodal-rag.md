---
id: 019c9619-ff10-7010-a010-ff1000000010
title: 'Bài 10: Multimodal RAG — Ảnh, Bảng, Biểu đồ trong Tài liệu'
slug: bai-10-multimodal-rag
description: >-
  RAG cho tài liệu chứa ảnh, bảng, biểu đồ. Trích xuất thông tin từ PDF
  scan, OCR, table extraction. Vision LLM + vector search cho multimodal.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 4: Advanced RAG Patterns"
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: "RAG Thực Chiến: Từ Basic đến Advanced"
  slug: rag-thuc-chien
---

## Giới thiệu

Tài liệu thực tế không chỉ có text — còn có **ảnh**, **bảng**, **biểu đồ**, **sơ đồ**. RAG truyền thống bỏ qua hết! Multimodal RAG giải quyết vấn đề này.

> **Ví dụ:** Báo cáo tài chính 50 trang: 40% text, 30% bảng số liệu, 20% biểu đồ, 10% ảnh. RAG text-only bỏ lỡ 60% thông tin!

Bài này cover:
1. **Table extraction** — trích xuất và index bảng
2. **Image understanding** — dùng Vision LLM mô tả ảnh/biểu đồ
3. **Multimodal embeddings** — embed cả text + image vào cùng vector space

---

## 1. Vấn đề: Tài liệu Multimodal

### 1.1 Các loại content trong tài liệu

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

### 1.2 Chiến lược xử lý

| Content type | Chiến lược | Tool |
|-------------|-----------|------|
| **Text** | Chunk trực tiếp | LangChain splitters |
| **Table** | Extract → chuyển thành text/markdown | Unstructured, Camelot |
| **Chart/Diagram** | Vision LLM → mô tả bằng text | GPT-4o, Claude |
| **Scanned PDF** | OCR → text | Tesseract, Azure OCR |

---

## 2. Table Extraction

### 2.1 Dùng Unstructured

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

### 2.3 Multi-vector: Lưu cả summary lẫn raw data

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

> **💡 Bài tập 1:** Extract tables từ 1 PDF có ít nhất 3 bảng. Tạo multi-vector store: search bằng summary, trả về raw table. Test 5 câu hỏi liên quan đến dữ liệu bảng.

---

## 3. Image Understanding

### 3.1 Vision LLM mô tả ảnh

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

### 4.1 CLIP-based: Text + Image cùng vector space

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

### 4.2 Khi nào dùng approach nào?

| Approach | Ưu điểm | Nhược điểm | Use case |
|---------|---------|-----------|---------|
| **Vision LLM → text** | Flexible, chi tiết | Tốn API, chậm | Charts, diagrams |
| **OCR → text** | Nhanh, rẻ | Chỉ đọc text trong ảnh | Scanned docs |
| **CLIP embeddings** | Direct search | Ít chi tiết | Image search |
| **Multi-vector** | Best of both | Complex setup | Production |

> **💡 Bài tập 2:** Tạo multimodal RAG cho 1 PDF report chứa text + bảng + ảnh. Test trả lời câu hỏi: (a) về text, (b) về dữ liệu bảng, (c) về nội dung biểu đồ.

---

## 5. Xử lý Scanned PDF (OCR)

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

### 5.2 Cải thiện chất lượng OCR

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

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Multimodal RAG** | RAG cho text + bảng + ảnh + biểu đồ |
| **Table extraction** | Unstructured hi_res → HTML → LLM summary |
| **Image description** | Vision LLM (GPT-4o) mô tả ảnh thành text |
| **Multi-vector** | Search bằng summary, return raw data |
| **CLIP** | Embed text + image cùng vector space |
| **OCR** | Scanned PDF → text, LLM fix lỗi |

## Bài tập tổng hợp

1. ✅ Hoàn thành 2 bài tập nhỏ (1, 2)
2. **Full Multimodal Pipeline:** Process 1 PDF phức tạp (annual report): extract text + tables + charts → index tất cả → build Q&A chatbot trả lời mọi loại câu hỏi.
3. **Multi-vector Store:** Implement với Chroma + InMemoryByteStore. Search bằng summary, trả về raw table HTML. So sánh answer quality với text-only RAG.
4. **OCR Pipeline:** Process 5 scanned PDF tiếng Việt → OCR → LLM fix → index. Đo accuracy trên 10 câu hỏi.

> **Bài tiếp theo:** Agentic RAG — Agent + RAG kết hợp sức mạnh — khi RAG pipeline cần tự quyết định: search ở đâu, cần thêm thông tin gì, khi nào dừng.
