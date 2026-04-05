---
id: 019c9619-bb16-7016-c016-bb1600000016
title: 'Bài 16: RAG — Retrieval Augmented Generation từ A đến Z'
slug: bai-16-rag-retrieval-augmented-generation
description: >-
  Hiểu toàn diện về RAG pipeline — từ document loading, chunking, embedding, vector
  store, retrieval đến generation. Bao gồm các kỹ thuật nâng cao như HyDE, RAPTOR,
  Corrective RAG và code hoàn chỉnh với LangChain + ChromaDB + OpenAI.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 4: Prompting & RAG"
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: "AI & LLM: Từ Cơ bản đến Nâng cao"
  slug: ai-llm-tu-co-ban-den-nang-cao
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI &amp; ML — Bài 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 16: RAG — Retrieval Augmented</tspan>
      <tspan x="60" dy="42">Generation từ A đến Z</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI &amp; LLM: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Prompting &amp; RAG</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# Bài 16: RAG — Retrieval Augmented Generation từ A đến Z

## 1. Vấn đề của LLM thuần túy

LLM như GPT-4 hay Claude là những mô hình cực kỳ mạnh mẽ, nhưng chúng mang theo ba giới hạn cốt lõi khi ứng dụng vào thực tế:

**Hallucination (Ảo giác):** LLM không "biết" theo nghĩa tra cứu — chúng *sinh ra* văn bản dựa trên xác suất thống kê. Khi không có thông tin chắc chắn, chúng có xu hướng tạo ra câu trả lời nghe có vẻ đúng nhưng thực tế sai.

**Knowledge Cutoff (Giới hạn thời gian):** Dữ liệu training có ngày cắt. GPT-4o có thể không biết sự kiện xảy ra sau tháng 4/2024. Đây là vấn đề nghiêm trọng với các lĩnh vực thay đổi nhanh như tài chính, pháp luật, y tế.

**Private Data (Dữ liệu nội bộ):** Tài liệu công ty, codebase nội bộ, email, database riêng — tất cả đều không có trong training data. LLM hoàn toàn "mù" với thông tin này.

RAG ra đời để giải quyết cả ba vấn đề trên.

## 2. RAG là gì và tại sao hiệu quả?

**Retrieval-Augmented Generation (RAG)** là kiến trúc kết hợp giữa *information retrieval* (tìm kiếm thông tin) và *text generation* (sinh văn bản). Thay vì dựa hoàn toàn vào parametric memory (kiến thức bên trong weights), RAG cung cấp cho LLM *non-parametric memory* — kho tài liệu bên ngoài có thể cập nhật liên tục.

**Tại sao RAG hiệu quả hơn fine-tuning cho nhiều use case?**

| Tiêu chí | RAG | Fine-tuning |
|---|---|---|
| Cập nhật dữ liệu | Gần như real-time | Cần train lại |
| Chi phí | Thấp (chỉ embedding + inference) | Cao (GPU hours) |
| Trích dẫn nguồn | Tự nhiên | Khó |
| Kiểm soát nội dung | Dễ (sửa corpus) | Phức tạp |
| Phù hợp với | Q&A, search, chatbot doanh nghiệp | Tone, style, domain-specific tasks |

## 3. RAG Pipeline: Hai Phase chính

RAG gồm hai giai đoạn hoàn toàn tách biệt:

### Indexing Phase (Offline — chạy một lần hoặc định kỳ)

```
Tài liệu thô → Load → Clean → Chunk → Embed → Lưu vào Vector Store
```

### Query Phase (Online — chạy mỗi khi user hỏi)

```
User query → Embed query → Tìm top-k chunks → Re-rank → Ghép vào prompt → LLM → Response
```

## 4. Document Loading

Bước đầu tiên là đưa tài liệu vào hệ thống. LangChain cung cấp hơn 100 document loaders:

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

## 5. Text Chunking Strategies

Chunking là bước ảnh hưởng lớn nhất đến chất lượng RAG. Chunk quá nhỏ mất ngữ cảnh, chunk quá lớn thì nhiễu.

### Fixed-size Chunking

```python
from langchain_text_splitters import CharacterTextSplitter

splitter = CharacterTextSplitter(
    chunk_size=1000,      # ký tự mỗi chunk
    chunk_overlap=200,    # overlap để giữ ngữ cảnh
    separator="\n\n",
)
chunks = splitter.split_documents(docs)
```

### Recursive Character Splitter (khuyến nghị cho text thông thường)

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

### Semantic Chunking (thông minh nhất, tốn kém nhất)

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

## 6. Embedding Models

Embedding chuyển đổi text thành vector số học nắm bắt ngữ nghĩa.

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

## 7. Vector Stores

Vector store là cơ sở dữ liệu chuyên biệt để lưu và tìm kiếm embeddings.

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

## 8. Retrieval: Cosine Similarity và MMR

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

## 9. Re-ranking với Cross-Encoder

Bi-encoder (dùng để embed) nhanh nhưng kém chính xác. Cross-encoder so sánh query với từng document trực tiếp — chậm hơn nhưng chính xác hơn nhiều. Kết hợp cả hai là best practice.

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

## 10. Generation: Ghép Context vào Prompt

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

## 11. Advanced RAG Techniques

### HyDE — Hypothetical Document Embeddings

Thay vì embed query trực tiếp (ngắn, ít thông tin), dùng LLM sinh ra *tài liệu giả định* rồi embed tài liệu đó:

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

### Corrective RAG (CRAG)

Sau khi retrieve, dùng một LLM nhỏ để *đánh giá độ liên quan* của từng chunk. Nếu tất cả chunks đều kém liên quan, fallback sang web search:

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

### RAPTOR — Recursive Abstractive Processing

Xây dựng cây phân cấp: cluster documents → summarize từng cluster → cluster summaries → summarize tiếp. Cho phép answer cả câu hỏi chi tiết lẫn câu hỏi tổng quát.

## 12. Full Code: RAG Pipeline Hoàn chỉnh

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

## Tổng kết

RAG là kỹ thuật không thể thiếu để xây dựng ứng dụng LLM thực tế. Pipeline chuẩn gồm: **Load → Chunk → Embed → Store** (offline) và **Retrieve → Re-rank → Generate** (online). Với các kỹ thuật nâng cao như HyDE, RAPTOR, và Corrective RAG, bạn có thể đạt được độ chính xác production-grade. Bài tiếp theo sẽ đi sâu hơn vào Vector Databases — thành phần cốt lõi của mọi hệ thống RAG.
