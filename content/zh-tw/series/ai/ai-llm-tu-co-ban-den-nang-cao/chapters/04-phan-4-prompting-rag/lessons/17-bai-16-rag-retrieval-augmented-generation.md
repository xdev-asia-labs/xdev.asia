---
id: 019c9619-bb16-7016-c016-bb1600000016
title: 第 16 課：RAG — 從 A 到 Z 的檢索增強生成
slug: bai-16-rag-retrieval-augmented-generation
description: >-
  全面了解 RAG 管道 — 從文件載入、分塊、嵌入、向量儲存、檢索到生成。包括 HyDE、RAPTOR、Corretive RAG 等先進技術以及
  LangChain + ChromaDB + OpenAI 的完整程式碼。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 15
section_title: 第 4 部分：提示和 RAG
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 人工智慧和法學碩士：從基礎到高級
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5406" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5406)"/>

  <!-- Decorations -->
  <g>
    <circle cx="812" cy="246" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="1024" cy="58" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="736" cy="130" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="948" cy="202" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="660" cy="274" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="226" x2="1100" y2="306" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="256" x2="1050" y2="326" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1061.507041555162,205.5 1061.507041555162,246.5 1026,267 990.492958444838,246.5 990.492958444838,205.5 1026,185" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 人工智慧與機器學習 — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：RAG — 檢索增強</tspan>
      <tspan x="60" dy="42">從A到Z的一代</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">人工智慧和法學碩士：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：提示和 RAG</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

# 第 16 課：RAG — 從 A 到 Z 的檢索增強生成

## 1.純LLM的問題

像 GPT-4 或 Claude 這樣的 LLM 是非常強大的模型，但它們在實踐中應用時有三個核心限制：

**幻覺：**法學碩士在觀看的意義上並不“知道”——他們根據統計概率“生成”文本。在缺乏可靠資訊的情況下，他們往往會創造出聽起來正確但實際上是錯誤的答案。

**知識截止（時間限制）：** 訓練資料有一個截止日期。 GPT-4o 可能不知道 2024 年 4 月之後發生的事件。這在金融、法律和醫療保健等快速變化的領域是一個嚴重的問題。

**私有資料（內部資料）：** 公司文件、內部程式碼庫、電子郵件、私人資料庫－所有這些都不包含在訓練資料中。 LLM 對這些資訊完全「盲目」。

RAG的誕生就是為了解決以上三個問題。

## 2. 什麼是 RAG？為什麼它有效？

**檢索增強生成（RAG）**是一種結合了*資訊檢索*和*文字生成*的架構。 RAG 不是完全依賴參數記憶體（權重內的知識），而是為 LLM 提供「非參數記憶體」——一種可以持續更新的外部文件儲存。

**為什麼對於許多用例來說，RAG 比微調更有效？ **

|標準|抹布|微調|
|---|---|---|
|更新資料 |幾乎是即時 |需要重新訓練|
|成本|低（僅嵌入+推理）|高（GPU 小時）|
|引用來源 |自然 |難|
|內容控制|簡單（編輯語料庫）|複雜|
|適合 |問答、搜尋、企業聊天機器人 |語調、風格、特定領域的任務 |

## 3. RAG 管道：兩個主要階段

RAG 由兩個完全獨立的階段組成：

### 索引階段（離線 — 運行一次或定期運行）

```
Tài liệu thô → Load → Clean → Chunk → Embed → Lưu vào Vector Store
```

### 查詢階段（線上 — 每次使用者詢問時執行）

```
User query → Embed query → Tìm top-k chunks → Re-rank → Ghép vào prompt → LLM → Response
```

## 4. 文檔加載

第一步是將文檔導入系統。 LangChain提供了100多個文件載入器：

```python
from langchain_community.document_loaders import (
    PyPDFLoader,
    Docx2txtLoader,
    WebBaseLoader,
    BSHTMLLoader,
    JSONLoader,
)

# Load PDF
pdf_loader = PyPDFLoader("annual_report.pdf")
pdf_docs = pdf_loader.load()  # List[Document]

# Load Word
word_loader = Docx2txtLoader("policy.docx")
word_docs = word_loader.load()

# Web scraping
web_loader = WebBaseLoader(
    web_paths=["https://docs.python.org/3/library/functions.html"],
    bs_kwargs={"parse_only": SoupStrainer(class_="body")},  # chỉ lấy phần body
)
web_docs = web_loader.load()

# Mỗi Document có: page_content (str) và metadata (dict)
print(pdf_docs[0].metadata)
# {'source': 'annual_report.pdf', 'page': 0}
```

## 5. 文字分塊策略

分塊是對 RAG 品質影響最大的步驟。太小的塊會丟失上下文，太大的塊會導致噪音。

### 固定大小分塊

```python
from langchain_text_splitters import CharacterTextSplitter

splitter = CharacterTextSplitter(
    chunk_size=1000,      # ký tự mỗi chunk
    chunk_overlap=200,    # overlap để giữ ngữ cảnh
    separator="\n\n",
)
chunks = splitter.split_documents(docs)
```

### 遞歸字元拆分器（建議用於常規文字）

```python
from langchain_text_splitters import RecursiveCharacterTextSplitter

# Thử split theo: ["\n\n", "\n", " ", ""] theo thứ tự
splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    length_function=len,
)
chunks = splitter.split_documents(docs)
```

### 語意分塊（最聰明，最昂貴）

```python
from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings

# Split dựa trên sự thay đổi ngữ nghĩa
semantic_splitter = SemanticChunker(
    embeddings=OpenAIEmbeddings(),
    breakpoint_threshold_type="percentile",
    breakpoint_threshold_amount=95,
)
chunks = semantic_splitter.split_documents(docs)
```

## 6. 嵌入模型

嵌入將文字轉換為捕獲語義的算術向量。

```python
from langchain_openai import OpenAIEmbeddings
from langchain_huggingface import HuggingFaceEmbeddings

# OpenAI — chất lượng cao, có phí
openai_embeddings = OpenAIEmbeddings(
    model="text-embedding-3-small",  # 1536 dims, rẻ hơn large
    # model="text-embedding-3-large",  # 3072 dims, tốt hơn
)

# Sentence Transformers — miễn phí, chạy local
local_embeddings = HuggingFaceEmbeddings(
    model_name="BAAI/bge-m3",           # đa ngôn ngữ, hỗ trợ tiếng Việt tốt
    # model_name="intfloat/multilingual-e5-large",
    model_kwargs={"device": "cpu"},
    encode_kwargs={"normalize_embeddings": True},
)

# Test embedding
vector = openai_embeddings.embed_query("RAG là gì?")
print(f"Dimension: {len(vector)}")  # 1536
```

## 7.向量存儲

向量儲存是用於儲存和搜尋嵌入的專用資料庫。

```python
from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

# Tạo vector store từ documents
vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings,
    persist_directory="./chroma_db",   # lưu xuống disk
    collection_name="my_rag_collection",
)

# Load lại từ disk
vectorstore = Chroma(
    persist_directory="./chroma_db",
    embedding_function=embeddings,
    collection_name="my_rag_collection",
)
```

## 8. 檢索：餘弦相似度和 MMR

```python
# Similarity search thuần (top-4 chunks giống nhất)
retriever_basic = vectorstore.as_retriever(
    search_type="similarity",
    search_kwargs={"k": 4},
)

# MMR — Max Marginal Relevance: cân bằng relevance + diversity
# Tránh trả về 4 chunks gần giống nhau
retriever_mmr = vectorstore.as_retriever(
    search_type="mmr",
    search_kwargs={
        "k": 4,           # số chunks trả về
        "fetch_k": 20,    # fetch 20, rồi chọn 4 đa dạng nhất
        "lambda_mult": 0.5,  # 0=max diversity, 1=max relevance
    },
)

# Score threshold — chỉ lấy chunks đủ liên quan
retriever_threshold = vectorstore.as_retriever(
    search_type="similarity_score_threshold",
    search_kwargs={"score_threshold": 0.7, "k": 6},
)
```

## 9. 使用交叉編碼器重新排名

雙編碼器（用於嵌入）速度快但精度較低。交叉編碼器直接將查詢與每個文件進行比較——速度較慢，但更準確。將兩者結合起來是最佳實踐。

```python
from langchain.retrievers import ContextualCompressionRetriever
from langchain.retrievers.document_compressors import CrossEncoderReranker
from langchain_community.cross_encoders import HuggingFaceCrossEncoder

# Cross-encoder model cho re-ranking
reranker_model = HuggingFaceCrossEncoder(
    model_name="BAAI/bge-reranker-v2-m3"
)
compressor = CrossEncoderReranker(model=reranker_model, top_n=3)

# Pipeline: lấy 10 chunks, re-rank, giữ top 3
reranking_retriever = ContextualCompressionRetriever(
    base_compressor=compressor,
    base_retriever=vectorstore.as_retriever(search_kwargs={"k": 10}),
)
```

## 10. 產生：將上下文插入提示中

```python
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

prompt = ChatPromptTemplate.from_template("""
Bạn là trợ lý AI hữu ích. Dựa vào ngữ cảnh dưới đây để trả lời câu hỏi.
Nếu ngữ cảnh không đủ thông tin, hãy nói rõ bạn không biết.
Đừng bịa đặt thông tin không có trong ngữ cảnh.

Ngữ cảnh:
{context}

Câu hỏi: {question}

Trả lời:""")

def format_docs(docs):
    return "\n\n---\n\n".join(
        f"[Nguồn: {doc.metadata.get('source', 'N/A')}]\n{doc.page_content}"
        for doc in docs
    )

# LCEL chain
rag_chain = (
    {"context": retriever_mmr | format_docs, "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)

response = rag_chain.invoke("RAG pipeline hoạt động như thế nào?")
print(response)
```

## 11. 進階 RAG 技術

### HyDE — 假設文件嵌入

不要直接嵌入查詢（簡短、資訊少），而是使用 LLM 產生*假設文件*，然後嵌入該文件：

```python
from langchain.retrievers import HyDERetriever
from langchain_openai import ChatOpenAI

hyde_retriever = HyDERetriever.from_llm(
    retriever=vectorstore.as_retriever(),
    llm=ChatOpenAI(model="gpt-4o-mini"),
    prompt_key="web_search",
)
docs = hyde_retriever.invoke("Tại sao RAG tốt hơn fine-tuning?")
```

### 矯正 RAG (CRAG)

檢索後，使用小型 LLM 來「評估每個區塊的相關性」。如果所有區塊的相關性較低，則回退到網路搜尋：

```python
from langgraph.graph import StateGraph, END
from typing import TypedDict, List

class GraphState(TypedDict):
    question: str
    documents: List
    generation: str
    web_search_needed: bool

def grade_documents(state):
    """Dùng LLM judge để chấm từng document"""
    grader_prompt = "Tài liệu này có liên quan đến câu hỏi không? Trả lời 'yes' hoặc 'no'."
    # ... implement grading logic
    return state

# Build CRAG graph với LangGraph
workflow = StateGraph(GraphState)
# Thêm các nodes: retrieve → grade → (web_search nếu cần) → generate
```

### RAPTOR — 遞迴抽象處理

建立層次樹：聚類文件→總結每個聚類→聚類匯總→再次匯總。允許您回答詳細問題和一般問題。

## 12. 完整程式碼：RAG 管道完成

```python
# pip install langchain langchain-openai langchain-chroma chromadb pypdf

import os
from langchain_community.document_loaders import PyPDFDirectoryLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_chroma import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

os.environ["OPENAI_API_KEY"] = "your-api-key"

# ── INDEXING PHASE ──────────────────────────────────────────────

# 1. Load tài liệu
loader = PyPDFDirectoryLoader("./documents/")
raw_docs = loader.load()
print(f"Loaded {len(raw_docs)} pages")

# 2. Chunking
splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    add_start_index=True,  # ghi lại vị trí trong doc gốc
)
chunks = splitter.split_documents(raw_docs)
print(f"Created {len(chunks)} chunks")

# 3. Embedding + lưu vào ChromaDB
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings,
    persist_directory="./chroma_db",
)
print("Vectorstore ready!")

# ── QUERY PHASE ─────────────────────────────────────────────────

# 4. Retriever với MMR
retriever = vectorstore.as_retriever(
    search_type="mmr",
    search_kwargs={"k": 5, "fetch_k": 20},
)

# 5. Prompt template
prompt = ChatPromptTemplate.from_messages([
    ("system", """Bạn là chuyên gia phân tích tài liệu.
Chỉ trả lời dựa trên ngữ cảnh được cung cấp.
Luôn trích dẫn nguồn tài liệu (tên file và trang).

Ngữ cảnh:
{context}"""),
    ("human", "{question}"),
])

# 6. LLM
llm = ChatOpenAI(model="gpt-4o", temperature=0)

def format_docs_with_sources(docs):
    formatted = []
    for doc in docs:
        src = doc.metadata.get("source", "unknown")
        page = doc.metadata.get("page", "?")
        formatted.append(f"[{src}, trang {page}]\n{doc.page_content}")
    return "\n\n---\n\n".join(formatted)

# 7. RAG Chain
rag_chain = (
    {
        "context": retriever | format_docs_with_sources,
        "question": RunnablePassthrough(),
    }
    | prompt
    | llm
    | StrOutputParser()
)

# 8. Sử dụng
if __name__ == "__main__":
    questions = [
        "Chính sách bảo hành sản phẩm là bao lâu?",
        "Quy trình hoàn tiền như thế nào?",
    ]
    for q in questions:
        print(f"\nQ: {q}")
        print(f"A: {rag_chain.invoke(q)}")
        print("-" * 60)
```

## 總結

RAG 是建立實際 LLM 應用程式不可或缺的技術。標準管道包括：**載入→分塊→嵌入→儲存**（離線）和**擷取→重新排序→產生**（線上）。借助 HyDE、RAPTOR 和 Corrective RAG 等先進技術，您可以實現生產級精度。下一篇文章將深入探討向量資料庫—每個 RAG 系統的核心組件。
