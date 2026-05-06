---
id: 019c9619-ff10-7010-a010-ff1000000010
title: 第 10 課：多模式 RAG — 文件中的圖像、表格、圖表
slug: bai-10-multimodal-rag
description: RAG 用於包含圖像、表格和圖表的文件。從 PDF 掃描、OCR、表格提取中提取資訊。 Vision LLM + 多模式向量搜尋。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 第 4 部分：進階 RAG 模式
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: 真實戰鬥 RAG：從基礎到高級
  slug: rag-thuc-chien
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 人工智慧與機器學習 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：多模式 RAG — 圖片、表格、圖表</tspan>
      <tspan x="60" dy="42">文檔中的地圖</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">真實戰鬥 RAG：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階 RAG 模式</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

實際文件不僅僅是文字——還有**圖像**、**表格**、**圖表**、**圖表**。傳統的 RAG 會跳過這一切！多模態 RAG 解決了這個問題。

> **範例：** 50 頁財務報告：40% 文字、30% 資料表、20% 圖表、10% 圖片。僅 RAG 文字會遺失 60% 的資訊！

本文涵蓋：
1. **表格提取**——提取表並索引
2. **圖像理解**——使用Vision LLM來描述圖像/圖形
3. **多模態嵌入** — 將文字+圖像嵌入到同一向量空間中

---

## 1. 問題：多模式文檔

### 1.1 文件內容類型

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

### 1.2 處理策略

|內容類型 |戰略|工具|
|------------|------------|--------|
| **文字** |現場直播| LangChain分割器|
| **表格** |擷取 → 轉換為文字/markdown |非結構化，卡米洛特 |
| **圖表/圖表** |願景法學碩士→文字描述| GPT-4o，克勞德 |
| **掃描的 PDF** | OCR → 文字 |超正方體、Azure OCR |

---

## 2.表提取

### 2.1 使用非結構化

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

### 2.2 表→文本摘要

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

### 2.3 多向量：同時保存摘要資料和原始數據

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

> **💡 練習 1：** 從至少包含 3 個表格的 PDF 中提取表格。建立多向量儲存：使用摘要搜索，返回原始表。測試 5 道與表格資料​​相關的問題。

---

## 3. 影像理解

### 3.1 Vision LLM影像描述

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

### 3.2 流程：PDF→擷取影像→描述→索引

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

## 4. 多模態嵌入

### 4.1 基於 CLIP：具有向量空間的文字 + 影像

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

### 4.2 何時使用哪一種方法？

|方法|優點 |缺點 |使用案例 |
|--------|---------|------------|---------|
| **願景法學碩士 → 文本** |靈活、細節| API 昂貴，速度慢 |圖表、圖表 |
| **OCR → 文字** |快速、便宜|只讀影像中的文字 |掃描文件 |
| **CLIP 嵌入** |直接搜尋|一些細節 |圖片搜尋|
| **多向量** |兩全其美 |複雜的設定 |生產|

> **💡練習 2：** 為包含文字+表格+圖像的 PDF 報告建立多模式 RAG。測驗回答以下問題：(a) 關於文本，(b) 關於表格數據，(c) 關於圖表內容。

---

## 5.掃描PDF處理（OCR）

### 5.1 OCR 管道

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

### 5.2 提高 OCR 質量

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

## 總結

|概念 |記住|
|--------|--------|
| **多式聯運RAG** | RAG 文字 + 表格 + 圖像 + 圖表 |
| **表格擷取** |非結構化 hi_res → HTML → LLM 摘要 |
| **圖片描述** | Vision LLM (GPT-4o) 將圖像描述為文字 |
| **多向量** |使用摘要搜索，返回原始資料 |
| **剪輯** |使用向量空間嵌入文字+圖像|
| **OCR** |掃描的 PDF → 文本，LLM 修復錯誤 |

## 一般練習

1. ✅ 完成 2 個小練習 (1, 2)
2. **完整的多模式管道：** 處理1個複雜的PDF（年度報告）：提取文本+表格+圖表→全部索引→建立問答聊天機器人以回答所有類型的問題。
3. **多向量儲存：** 使用 Chroma + InMemoryByteStore 實作。使用摘要搜索，返回原始 HTML 表。將答案品質與純文字 RAG 進行比較。
4. **OCR 管道：** 處理 5 次掃描的越南語 PDF → OCR → LLM 修復 → 索引。測量 10 個問題的準確性。

> **下一篇文章：** Agentic RAG — Agent + RAG 結合了力量 — 當 RAG 管道需要自行決定時：在哪裡搜尋、需要哪些附加資訊、何時停止。
