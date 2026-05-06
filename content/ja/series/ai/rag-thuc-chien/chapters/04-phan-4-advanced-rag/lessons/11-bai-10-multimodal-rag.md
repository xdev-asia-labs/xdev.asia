---
id: 019c9619-ff10-7010-a010-ff1000000010
title: 'レッスン 10: マルチモーダル RAG — ドキュメント内の画像、表、グラフ'
slug: bai-10-multimodal-rag
description: >-
  画像、表、グラフを含むドキュメントの場合は RAG。 PDF スキャン、OCR、表抽出から情報を抽出します。マルチモーダルの Vision LLM +
  ベクトル検索。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 4: 高度な RAG パターン'
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: リアルバトルRAG：基礎から上級まで
  slug: rag-thuc-chien
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI と ML — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 10: マルチモーダル RAG — 画像、表、チャート</tspan>
      <tspan x="60" dy="42">ドキュメント内のマップ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">リアルバトルRAG：基礎から上級まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 高度な RAG パターン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

実際のドキュメントはテキストだけではなく、**画像**、**表**、**チャート**、**図**もあります。従来の RAG はすべてを省略します。マルチモーダル RAG はこの問題を解決します。

> **例:** 50 ページの財務報告書: テキストが 40%、データ表が 30%、グラフが 20%、画像が 10%。 RAG テキストのみでは情報の 60% が欠落しています。

この記事の内容は次のとおりです。
1. **テーブル抽出** — テーブルの抽出とインデックス付け
2. **画像の理解** — Vision LLM を使用して画像/グラフを記述する
3. **マルチモーダル埋め込み** — テキストと画像の両方を同じベクトル空間に埋め込みます

---

## 1. 問題: マルチモーダルなドキュメント

### 1.1 ドキュメント内のコンテンツの種類

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

### 1.2 処理戦略

|コンテンツタイプ |戦略 |ツール |
|-----------|-----------|------|
| **テキスト** |チャンクスライブ | LangChain スプリッター |
| **表** |抽出 → テキスト/マークダウンに変換 |非構造化、キャメロット |
| **チャート/図** | Vision LLM → テキスト説明 | GPT-4o、クロード |
| **スキャンされた PDF** | OCR → テキスト | Tesseract、Azure OCR |

---

## 2. テーブルの抽出

### 2.1 非構造化の使用

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

### 2.2 表→テキストの要約

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

### 2.3 マルチベクトル: サマリー データと生データの両方を保存する

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

> **💡 演習 1:** 少なくとも 3 つの表を含む PDF から表を抽出します。マルチベクトル ストアの作成: サマリーを使用して検索し、生のテーブルを返します。テーブル データに関連する 5 つの質問をテストします。

---

## 3. 画像の理解

### 3.1 Vision LLM イメージの説明

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

### 3.2 パイプライン: PDF → 画像の抽出 → 説明 → インデックス

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

## 4. マルチモーダルな埋め込み

### 4.1 CLIP ベース: ベクトル空間を使用したテキスト + 画像

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

### 4.2 いつどのアプローチを使用するか?

|アプローチ |利点 |デメリット |使用例 |
|----------|-----------|-----------|-----------|
| **ビジョン LLM → テキスト** |柔軟、詳細 |高価な API、遅い |チャート、ダイアグラム |
| **OCR → テキスト** |早い、安い |画像内のテキストを読み取り専用 |スキャンされたドキュメント |
| **CLIP 埋め込み** |直接検索 |詳細は少し |画像検索 |
| **マルチベクトル** |両方の長所 |複雑なセットアップ |制作 |

> **💡 演習 2:** テキスト + 表 + 画像を含む PDF レポート用のマルチモーダル RAG を作成します。テストは、(a) テキストについて、(b) 表データについて、(c) グラフの内容についての質問に答えます。

---

## 5. スキャンした PDF の処理 (OCR)

### 5.1 OCR パイプライン

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

### 5.2 OCR 品質の向上

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

## 概要

|コンセプト |覚えておいてください |
|----------|----------|
| **マルチモーダル RAG** |テキスト + 表 + 画像 + グラフの RAG |
| **テーブル抽出** |非構造化高解像度 → HTML → LLM の概要 |
| **画像の説明** | Vision LLM (GPT-4o) は画像をテキストに記述します |
| **マルチベクトル** |概要を使用して検索し、生データを返す |
| **クリップ** |ベクトル空間でテキスト + 画像を埋め込む |
| **OCR** |スキャンされた PDF → テキスト、LLM 修正エラー |

## 一般的な演習

1. ✅ 2 つの小さな演習 (1、2) を完了します。
2. **完全なマルチモーダル パイプライン:** 1 つの複雑な PDF (年次報告書) を処理: テキスト + 表 + グラフを抽出 → すべてにインデックスを作成 → あらゆる種類の質問に答える Q&A チャットボットを構築。
3. **マルチベクター ストア:** Chroma + InMemoryByteStore を使用して実装します。サマリーを使用して検索し、生の HTML テーブルを返します。回答の品質をテキストのみの RAG と比較します。
4. **OCR パイプライン:** プロセス 5 でスキャンされたベトナム語 PDF → OCR → LLM 修正 → インデックス。 10 問の正解率を測定します。

> **次の記事:** Agentic RAG — エージェント + RAG がパワーを結合します — RAG パイプラインが自身で決定する必要がある場合: どこを検索するか、どのような追加情報が必要か、いつ停止するか。
