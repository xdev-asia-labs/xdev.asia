---
id: 019e0a01-bb10-7001-c001-ee1000000001
title: 第 10 課：RAG 管道 — LangChain 和 LlamaIndex
slug: bai-10-rag-pipeline-langchain-llamaindex
description: >-
  RAG架構：索引、檢索、產生。 LangChain RAG鏈。 LlamaIndex 資料框架。文檔處理管道。獵犬類型。響應綜合。使用 RAGAS
  進行評估。練習建立完整的 RAG 聊天機器人。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: 第 3 部分：RAG、嵌入和向量資料庫
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: AI代理工程師：從零到生產
  slug: ai-agent-engineer-tu-zero-den-production
locale: zh-tw
---

> **LLM 知道一切……除了您的私人資料。 ** GPT-4 無法讀取內部文件、Confluence wiki 或您公司的內部資料庫。微調成本高昂，很快就會過時，並且當知識發生變化時會產生幻覺。 RAG（檢索增強生成）解決了這一切——從數據中獲取正確的上下文，將其填充到提示中，然後讓 LLM 生成正確的答案。在本文中，我們將使用目前最受歡迎的兩個框架 **LangChain** 和 **LlamaIndex** 來建立一個完整的 RAG 管道。

---

## 1. RAG架構概述

### 1.1。大局觀——索引→檢索→生成

RAG 管道包括 3 個主要階段：

```text
┌─────────────────────────────────────────────────────────────────────┐
│                      RAG Pipeline Architecture                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ╔═══════════════════ OFFLINE: INDEXING ═══════════════════╗         │
│  ║                                                         ║         │
│  ║  Documents ──→ Chunking ──→ Embedding ──→ Vector Store  ║         │
│  ║  (PDF,HTML,    (Split     (text→vec    (FAISS,         ║         │
│  ║   MD,TXT)      by size)    model)      Chroma,Pinecone)║         │
│  ║                                                         ║         │
│  ╚═════════════════════════════════════════════════════════╝         │
│                                                                      │
│  ╔═══════════════════ ONLINE: QUERY ══════════════════════╗         │
│  ║                                                         ║         │
│  ║  User Query ──→ Embed Query ──→ Similarity Search       ║         │
│  ║       │                              │                   ║         │
│  ║       │                              ▼                   ║         │
│  ║       │                     Top-K Relevant Chunks        ║         │
│  ║       │                              │                   ║         │
│  ║       ▼                              ▼                   ║         │
│  ║  ┌─────────────────────────────────────────┐            ║         │
│  ║  │  PROMPT = System + Context + Question   │            ║         │
│  ║  └─────────────────┬───────────────────────┘            ║         │
│  ║                    │                                     ║         │
│  ║                    ▼                                     ║         │
│  ║               LLM Generate ──→ Answer + Sources          ║         │
│  ║                                                         ║         │
│  ╚═════════════════════════════════════════════════════════╝         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 1.2。詳細組件

|組件|功能|範例|
|------------|----------|--------|
| **文件載入器** |從許多來源讀取原始資料 | PDF、HTML、概念、Google 雲端硬碟 |
| **文字分割器** |將文件分成小塊 |遞歸字元文字分割器 |
| **嵌入模型** |轉換文字 → 向量 |開放人工智慧 `text-embedding-3-small` |
| **向量商店** |存檔 + 搜尋向量 | FAISS、Chroma、松果|
| **獵犬** |尋找前 K 個相關區塊 |相似性、MMR、混合 |
| **法學碩士** |根據上下文產生答案 | GPT-4o、克勞德、駱駝 3 |
| **響應合成器** |組合塊→最終答案|東西，地圖減少，精煉|

---

## 2. 為什麼選擇 RAG > 針對許多用例進行微調

### 2.1。比較表

|標準|抹布|微調|
|----------|-----|-------------|
| **知識更新** |即時（更新向量儲存）|必須重新訓練模型 |
| **成本** |低（僅花費嵌入+推理）|高（GPU 小時訓練）|
| **幻覺** |強還原（有源碼）|數據低仍會產生幻覺 |
| **透明度** |指定來源文檔 |黑盒子，來源未知 |
| **資料隱私** |資料保留在本地 |資料傳送至訓練伺服器 |
| **設定時間** |幾個小時|幾天→幾週|
| **何時使用** |動態知識、問答 |風格/語氣適應，特定領域的任務 |
| **可擴展性** |新增文件 = 新增向量 |新增資料=重新訓練|

### 2.2。什麼時候用什麼？

```text
                     Bạn cần gì?
                         │
              ┌──────────┴──────────┐
              │                     │
        Kiến thức mới          Thay đổi hành vi
        liên tục thay đổi      (style, format)
              │                     │
              ▼                     ▼
           ✅ RAG              ✅ Fine-tuning
              │                     │
     ┌────────┴────────┐           │
     │                 │           │
  Internal docs    FAQ/Support   ┌─┴──────────┐
  Research papers  Customer data │             │
  Legal documents  Product info  Chatbot voice  Code generation
                                 Brand tone     Medical NLP
```

> **經驗法則：** RAG 用於 **知識**，針對 **行為** 微調。許多生產系統將兩者結合起來——一個小的微調模型，然後一個 RAG 來補充知識。

---

## 3. LangChain RAG——從基礎到會話

### 3.1。安裝

```bash
pip install langchain langchain-openai langchain-community \
    langchain-chroma chromadb pypdf tiktoken
```

### 3.2。文檔載入器和文字拆分器

```python
from langchain_community.document_loaders import (
    PyPDFLoader,
    TextLoader,
    DirectoryLoader,
    WebBaseLoader,
)
from langchain.text_splitter import RecursiveCharacterTextSplitter

# --- Load từ nhiều nguồn ---

# 1. Load PDF
pdf_loader = PyPDFLoader("docs/company_handbook.pdf")
pdf_docs = pdf_loader.load()
print(f"PDF: {len(pdf_docs)} pages loaded")

# 2. Load tất cả .txt trong folder
dir_loader = DirectoryLoader(
    "docs/knowledge_base/",
    glob="**/*.txt",
    loader_cls=TextLoader,
)
txt_docs = dir_loader.load()
print(f"Directory: {len(txt_docs)} files loaded")

# 3. Load từ web
web_loader = WebBaseLoader([
    "https://docs.python.org/3/tutorial/index.html",
])
web_docs = web_loader.load()

# Gộp tất cả documents
all_docs = pdf_docs + txt_docs + web_docs

# --- Chunking ---
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,       # Mỗi chunk tối đa 1000 ký tự
    chunk_overlap=200,     # Overlap 200 ký tự giữa chunks
    length_function=len,
    separators=["\n\n", "\n", ". ", " ", ""],  # Ưu tiên split tại paragraph
)

chunks = text_splitter.split_documents(all_docs)
print(f"Total chunks: {len(chunks)}")
# Mỗi chunk giữ metadata gốc (source file, page number)
print(f"Sample metadata: {chunks[0].metadata}")
```

**為什麼 `chunk_overlap=200`?** 分割時，區塊邊界處的上下文會遺失。重疊確保區塊 A 末端的句子也出現在區塊 B 的開頭 → 擷取器不會遺失資訊。

### 3.3。嵌入 + VectorStore 集成

```python
from langchain_openai import OpenAIEmbeddings
from langchain_chroma import Chroma

# 1. Khởi tạo embedding model
embeddings = OpenAIEmbeddings(
    model="text-embedding-3-small",  # 1536 dims, rẻ và nhanh
    # model="text-embedding-3-large",  # 3072 dims, accuracy cao hơn
)

# 2. Tạo vector store từ chunks
vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings,
    persist_directory="./chroma_db",  # Lưu local, persist qua restart
    collection_name="knowledge_base",
)
print(f"Vector store created with {vectorstore._collection.count()} vectors")

# 3. Search thử
results = vectorstore.similarity_search(
    "What is the company vacation policy?",
    k=4,  # Top 4 chunks
)
for i, doc in enumerate(results):
    print(f"\n--- Chunk {i+1} (score: similarity) ---")
    print(f"Source: {doc.metadata.get('source', 'unknown')}")
    print(doc.page_content[:200])
```

### 3.4。檢索QA鏈——基礎知識

```python
from langchain_openai import ChatOpenAI
from langchain.chains import RetrievalQA

# Setup LLM
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

# Setup retriever
retriever = vectorstore.as_retriever(
    search_type="mmr",        # Maximum Marginal Relevance — diverse results
    search_kwargs={"k": 5},   # Top 5 chunks
)

# Tạo QA chain
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",  # Nhét tất cả chunks vào 1 prompt
    retriever=retriever,
    return_source_documents=True,  # Trả cả source
)

# Query
response = qa_chain.invoke({"query": "How many vacation days do employees get?"})
print("Answer:", response["result"])
print("\nSources:")
for doc in response["source_documents"]:
    print(f"  - {doc.metadata.get('source', 'N/A')}")
```

### 3.5。 create_retrieval_chain — 新方法（推薦）

```python
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate

# Custom prompt template
system_prompt = """You are a helpful assistant that answers questions based on
the provided context. If the answer is not in the context, say "I don't have
enough information to answer that."

Context:
{context}"""

prompt = ChatPromptTemplate.from_messages([
    ("system", system_prompt),
    ("human", "{input}"),
])

# Tạo chain
question_answer_chain = create_stuff_documents_chain(llm, prompt)
rag_chain = create_retrieval_chain(retriever, question_answer_chain)

# Invoke
response = rag_chain.invoke({"input": "What is the remote work policy?"})
print("Answer:", response["answer"])
print("Context used:", len(response["context"]), "chunks")
```

### 3.6。帶內存的會話 RAG

```python
from langchain.chains import create_history_aware_retriever
from langchain_core.prompts import MessagesPlaceholder
from langchain_core.messages import HumanMessage, AIMessage

# Step 1: Tạo retriever biết history
contextualize_q_prompt = ChatPromptTemplate.from_messages([
    ("system", """Given a chat history and the latest user question,
    formulate a standalone question that can be understood without
    the chat history. Do NOT answer the question."""),
    MessagesPlaceholder("chat_history"),
    ("human", "{input}"),
])

history_aware_retriever = create_history_aware_retriever(
    llm, retriever, contextualize_q_prompt
)

# Step 2: Tạo QA chain với history
qa_prompt = ChatPromptTemplate.from_messages([
    ("system", """Answer based on context. If not found, say so.
    
Context: {context}"""),
    MessagesPlaceholder("chat_history"),
    ("human", "{input}"),
])

question_answer_chain = create_stuff_documents_chain(llm, qa_prompt)
conversational_rag = create_retrieval_chain(
    history_aware_retriever, question_answer_chain
)

# Step 3: Chat loop
chat_history = []

def chat(user_message: str) -> str:
    """Send message and maintain conversation history."""
    response = conversational_rag.invoke({
        "input": user_message,
        "chat_history": chat_history,
    })
    # Update history
    chat_history.append(HumanMessage(content=user_message))
    chat_history.append(AIMessage(content=response["answer"]))
    return response["answer"]

# Demo conversation
print(chat("How many vacation days do we get?"))
# → "Employees receive 20 vacation days per year..."

print(chat("What about for part-time employees?"))
# → Hiểu "vacation days" từ context trước, tìm thêm info về part-time
```

---

## 4. LlamaIndex RAG — 資料框架方法

### 4.1。安裝

```bash
pip install llama-index llama-index-llms-openai \
    llama-index-embeddings-openai llama-index-vector-stores-chroma
```

### 4.2。理念：文件→節點→索引

LlamaIndex 採用了與 LangChain 不同的方法——它將數據視為一等公民：

```text
┌──────────────── LlamaIndex Data Pipeline ─────────────────┐
│                                                            │
│  Documents ──→ Nodes ──→ Index ──→ Query Engine            │
│                                                            │
│  ┌─────────┐   ┌──────────┐   ┌────────────┐   ┌───────┐ │
│  │  PDF     │   │ Node 1   │   │ VectorStore│   │ Query │ │
│  │  HTML    │──→│ Node 2   │──→│ Index      │──→│Engine │ │
│  │  JSON    │   │ Node 3   │   │            │   │       │ │
│  │  DB rows │   │ ...      │   │ (embedded) │   │       │ │
│  └─────────┘   └──────────┘   └────────────┘   └───────┘ │
│                                                            │
│  Document: raw content + metadata                          │
│  Node: chunk of document, has relationships                │
│  Index: searchable data structure                          │
│  Query Engine: orchestrates retrieval + synthesis          │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### 4.3。 SimpleDirectoryReader + VectorStoreIndex

```python
from llama_index.core import (
    VectorStoreIndex,
    SimpleDirectoryReader,
    Settings,
    StorageContext,
)
from llama_index.llms.openai import OpenAI
from llama_index.embeddings.openai import OpenAIEmbedding

# --- Configure global settings ---
Settings.llm = OpenAI(model="gpt-4o-mini", temperature=0)
Settings.embed_model = OpenAIEmbedding(model_name="text-embedding-3-small")
Settings.chunk_size = 1024
Settings.chunk_overlap = 200

# --- Load documents ---
documents = SimpleDirectoryReader(
    input_dir="docs/knowledge_base/",
    recursive=True,                     # Đọc subfolder
    required_exts=[".pdf", ".txt", ".md"],  # Filter file types
).load_data()
print(f"Loaded {len(documents)} documents")

# --- Tạo index ---
index = VectorStoreIndex.from_documents(
    documents,
    show_progress=True,  # Progress bar khi embedding
)

# --- Persist to disk ---
index.storage_context.persist(persist_dir="./llama_storage")
print("Index persisted to disk")

# --- Load lại từ disk ---
from llama_index.core import load_index_from_storage

storage_context = StorageContext.from_defaults(persist_dir="./llama_storage")
index = load_index_from_storage(storage_context)
```

### 4.4。查詢引擎－簡單查詢

```python
# Tạo query engine
query_engine = index.as_query_engine(
    similarity_top_k=5,       # Top 5 chunks
    response_mode="compact",  # Compact synthesis
)

# Query
response = query_engine.query("What is the company's remote work policy?")
print("Answer:", response.response)

# Xem source nodes
print("\nSources:")
for node in response.source_nodes:
    print(f"  Score: {node.score:.4f}")
    print(f"  Source: {node.metadata.get('file_name', 'unknown')}")
    print(f"  Text: {node.text[:150]}...")
    print()
```

### 4.5。聊天引擎—多輪對話

```python
# Chat engine tự quản lý history
chat_engine = index.as_chat_engine(
    chat_mode="condense_plus_context",  # Rewrite query dựa trên history
    similarity_top_k=5,
    system_prompt="""You are a helpful HR assistant. Answer questions about
    company policies based on the provided documents. Be concise and accurate.""",
)

# Multi-turn conversation
response1 = chat_engine.chat("How many vacation days do we get?")
print("Bot:", response1.response)

response2 = chat_engine.chat("What about sick leave?")
print("Bot:", response2.response)

response3 = chat_engine.chat("Can I carry over unused days?")
print("Bot:", response3.response)

# Reset conversation
chat_engine.reset()
```

### 4.6。響應合成器模式

LlamaIndex 支援多種答案聚合策略：

```python
from llama_index.core import get_response_synthesizer

# --- Mode 1: refine ---
# Iterate qua từng chunk, refine answer dần dần
synthesizer_refine = get_response_synthesizer(response_mode="refine")

# --- Mode 2: compact ---
# Gộp chunks thành ít prompt calls nhất có thể
synthesizer_compact = get_response_synthesizer(response_mode="compact")

# --- Mode 3: tree_summarize ---
# Tổng hợp theo cây: bottom-up summary rồi merge
synthesizer_tree = get_response_synthesizer(response_mode="tree_summarize")

# --- Mode 4: simple_summarize ---
# Nhét tất cả vào 1 prompt (giống "stuff" của LangChain)
synthesizer_simple = get_response_synthesizer(response_mode="simple_summarize")

# Sử dụng synthesizer trong query engine
query_engine = index.as_query_engine(
    response_synthesizer=synthesizer_refine,
    similarity_top_k=10,
)
```

---

## 5. LangChain vs LlamaIndex — 詳細比較

|標準|浪鏈 |駱駝索引 |
|----------|------------|------------|
| **理念** |編排框架—鏈/代理|資料框架—索引/查詢|
| **優勢** |柔性鏈、工具呼叫代理、多種整合 |資料攝取管道、結構化資料、回應合成 |
| **學習曲線** |媒介－許多抽象|下層 — RAG 的簡單 API |
| **RAG 設定** | 10-20行程式碼 | 5-10行程式碼|
| **代理支援** |強（ReAct、OpenAI 函數、自訂）|是的，但不太成熟 |
| **資料連接器** |社群驅動，眾多裝載機|內建 LlamaHub，100 多個連接器 |
| **響應合成** |基本（東西，map_reduce，精煉）|增強（細化、緊湊、tree_summarize）|
| **結構化輸出** |透過輸出解析器 |透過 Pydantic 程式 |
| **社群** |很大，教學很多|大型、集中的 RAG |
| **生產就緒** | LangSmith 追蹤、LangServe 部署 | LlamaCloud 管理，LlamaTrace |
| **何時選擇** |複雜的代理工作流程、多工具鏈 |資料密集型 RAG，結構化資料擷取 |

> **事實：** 許多生產系統都使用 **兩者** — LlamaIndex 用於資料攝取管道，LangChain 用於代理編排。

---

## 6. 回應綜合策略－權衡

### 6.1。四大主要策略

```text
┌─────────────────────── STUFF ───────────────────────┐
│  Chunks: [C1, C2, C3, C4]                           │
│           │   │   │   │                              │
│           └───┴───┴───┘                              │
│                 │                                    │
│                 ▼                                    │
│  Prompt:  "Context: C1+C2+C3+C4\nQuestion: Q"       │
│                 │                                    │
│                 ▼                                    │
│            LLM → Answer                              │
│  Calls: 1  |  Pros: Simple, fast  |  Cons: Token limit│
└─────────────────────────────────────────────────────┘

┌─────────────────── MAP_REDUCE ──────────────────────┐
│  Chunks: [C1, C2, C3, C4]                           │
│           │    │    │    │                            │
│           ▼    ▼    ▼    ▼                            │
│        [A1] [A2] [A3] [A4]  ← MAP: answer per chunk │
│           │    │    │    │                            │
│           └────┴────┴────┘                           │
│                 │                                    │
│                 ▼                                    │
│             REDUCE: combine                          │
│                 │                                    │
│                 ▼                                    │
│           Final Answer                               │
│  Calls: N+1  |  Pros: No token limit  |  Cons: Slow │
└─────────────────────────────────────────────────────┘

┌──────────────────── REFINE ─────────────────────────┐
│  Chunks: [C1, C2, C3, C4]                           │
│           │                                          │
│           ▼                                          │
│     LLM(C1, Q) → Answer₁                            │
│                    │                                 │
│           C2 ─────→│                                 │
│                    ▼                                 │
│     LLM(C2, Answer₁) → Answer₂                      │
│                          │                           │
│           C3 ───────────→│                           │
│                          ▼                           │
│     LLM(C3, Answer₂) → Answer₃                      │
│                          │                           │
│           C4 ───────────→│                           │
│                          ▼                           │
│     LLM(C4, Answer₃) → Final Answer                 │
│  Calls: N  |  Pros: Precise  |  Cons: Sequential    │
└─────────────────────────────────────────────────────┘
```

### 6.2。比較表

|戰略|法學碩士來電|代幣使用 |延遲 |準確度|何時使用 |
|----------|------------|-------------|--------|---------|------------|
| **東西** | 1 |低|最快|好（如果適合上下文）|少量塊，大模型上下文 |
| **Map-Reduce** | N+1 |最高|慢|平均 |很多塊，需要歌曲 // |
| **精簡** |尼 |曹 |慢速（順序）|最高|需要準確、詳細的答案 |
| **緊湊** | 1-2 | 1-2平均 |快|好 |預設選擇，平衡|

---

## 7. 生產 RAG 模式

### 7.1。串流回應

```python
# LangChain streaming
from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

llm_stream = ChatOpenAI(model="gpt-4o-mini", temperature=0, streaming=True)

rag_chain_stream = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt
    | llm_stream
    | StrOutputParser()
)

# Stream tokens
for chunk in rag_chain_stream.stream("What is the vacation policy?"):
    print(chunk, end="", flush=True)
print()  # Newline khi done
```

```python
# LlamaIndex streaming
query_engine_stream = index.as_query_engine(streaming=True)

streaming_response = query_engine_stream.query("What is the vacation policy?")

for text in streaming_response.response_gen:
    print(text, end="", flush=True)
print()
```

### 7.2。來源歸屬和引用

```python
# LangChain — trả về source cùng answer
from langchain_core.prompts import ChatPromptTemplate

citation_prompt = ChatPromptTemplate.from_messages([
    ("system", """Answer the question using ONLY the provided context.
For each claim, cite the source using [Source: filename, page X] format.
If you cannot find the answer, say "I don't know."

Context:
{context}"""),
    ("human", "{input}"),
])

# Chain với source tracking
rag_with_sources = create_retrieval_chain(
    retriever,
    create_stuff_documents_chain(llm, citation_prompt),
)

result = rag_with_sources.invoke({"input": "What is the PTO policy?"})
print(result["answer"])
# Output: "Employees receive 20 PTO days per year [Source: handbook.pdf, page 15]..."

# Verify actual sources
for doc in result["context"]:
    print(f"  Referenced: {doc.metadata['source']} - page {doc.metadata.get('page', 'N/A')}")
```

```python
# LlamaIndex — built-in citation
from llama_index.core.query_engine import CitationQueryEngine

citation_engine = CitationQueryEngine.from_args(
    index,
    similarity_top_k=5,
    citation_chunk_size=512,
)

response = citation_engine.query("What are the benefits?")
print(response.response)  # Answer có [1], [2] references
print("\nCitations:")
for i, node in enumerate(response.source_nodes, 1):
    print(f"  [{i}] {node.metadata.get('file_name', 'unknown')}")
```

---

## 8. 使用 RAGAS 進行評估

RAGAS（檢索增強生成評估）是評估 RAG 管道的標準架構。

### 8.1。四個關鍵指標

```text
┌──────────────────── RAGAS Metrics ────────────────────┐
│                                                        │
│  ┌─────────────────┐     ┌──────────────────┐         │
│  │  RETRIEVAL       │     │  GENERATION       │         │
│  │  QUALITY         │     │  QUALITY          │         │
│  │                  │     │                   │         │
│  │ Context Precision│     │ Faithfulness      │         │
│  │ (relevant chunks │     │ (answer supported │         │
│  │  ranked higher?) │     │  by context?)     │         │
│  │                  │     │                   │         │
│  │ Context Recall   │     │ Answer Relevancy  │         │
│  │ (all needed info │     │ (answer addresses │         │
│  │  retrieved?)     │     │  the question?)   │         │
│  └─────────────────┘     └──────────────────┘         │
│                                                        │
│  Target scores:                                        │
│  • Faithfulness    > 0.85  (giảm hallucination)       │
│  • Answer Relevancy > 0.80  (đúng câu hỏi)           │
│  • Context Precision > 0.75  (retriever quality)      │
│  • Context Recall    > 0.80  (coverage)               │
│                                                        │
└────────────────────────────────────────────────────────┘
```

|指标|测量什么 |输入|目标|
|--------|--------|--------|--------|
| **忠诚** |答案是否弥补了更多？ |问题、答案、上下文 | > 0.85 |
| **答案相關性** |答案是否正確回答了問題？ |问题，回答 | > 0.80 |
| **上下文精度** |相關區塊能否獲得高排名？ |問題、背景、ground_truth | > 0.75 |
| **情境回憶** |獵犬是否獲得了足夠的資訊？ |问题、背景、ground_truth | > 0.80 |

### 8.2。代碼評估

```bash
pip install ragas datasets
```

```python
from ragas import evaluate
from ragas.metrics import (
    faithfulness,
    answer_relevancy,
    context_precision,
    context_recall,
)
from datasets import Dataset

# --- Chuẩn bị evaluation dataset ---
# Cần: question, answer (from RAG), contexts (retrieved chunks), ground_truth
eval_questions = [
    "How many vacation days do employees get?",
    "What is the remote work policy?",
    "What are the health insurance options?",
]

# Chạy RAG cho từng câu hỏi
eval_answers = []
eval_contexts = []

for q in eval_questions:
    result = rag_chain.invoke({"input": q})
    eval_answers.append(result["answer"])
    eval_contexts.append([doc.page_content for doc in result["context"]])

# Ground truth (viết tay hoặc từ SME review)
ground_truths = [
    "Employees receive 20 vacation days per year, with 5 additional days after 5 years.",
    "Employees can work remotely up to 3 days per week with manager approval.",
    "The company offers three health insurance plans: Basic, Standard, and Premium.",
]

# Tạo dataset
eval_dataset = Dataset.from_dict({
    "question": eval_questions,
    "answer": eval_answers,
    "contexts": eval_contexts,
    "ground_truth": ground_truths,
})

# --- Chạy evaluation ---
results = evaluate(
    eval_dataset,
    metrics=[
        faithfulness,
        answer_relevancy,
        context_precision,
        context_recall,
    ],
)

print(results)
# {'faithfulness': 0.92, 'answer_relevancy': 0.88,
#  'context_precision': 0.83, 'context_recall': 0.90}

# Xem chi tiết từng câu
df = results.to_pandas()
print(df[["question", "faithfulness", "answer_relevancy"]].to_string())
```

### 8.3。根據指標進行改進

|低公制|原因 |解决方案 |
|------------|-------------|------------|
| ** 忠誠度 < 0.85** | LLM斷章取義|收緊提示（「僅使用上下文」），降低溫度 |
| **答案相關性 < 0.80** |答案很雜亂，不是正確答案 |改進提示，添加“簡潔” |
| **上下文精確度 < 0.75** |檢索器檢索不相關的區塊 |增加k，使用MMR，重新排名|
| **上下文回憶 < 0.80** |檢索到的區塊中缺少資訊 |改進分塊（重疊、大小），新增文件 |

---

## 9. Building Complete RAG Chatbot — End-to-End

### 9.1. Project Structure

```text
rag-chatbot/
├── ingest.py          # Indexing pipeline
├── chatbot.py         # RAG chat interface
├── evaluate.py        # RAGAS evaluation
├── requirements.txt
├── docs/              # Source documents
│   ├── handbook.pdf
│   ├── policies.txt
│   └── faq.md
└── chroma_db/         # Persisted vector store
```

### 9.2. requirements.txt

```text
langchain>=0.3.0
langchain-openai>=0.2.0
langchain-色度>=0.1.0
langchain-社群>=0.3.0
色度資料庫>=0.5.0
pypdf>=4.0.0
抖音>=0.7.0
拉格斯>=0.2.0
python-dotenv>=1.0.0
```

### 9.3. ingest.py — Indexing Pipeline

```蟒蛇
"""ingest.py — 載入文件、區塊、嵌入、儲存在 Chroma 中。"""
導入作業系統
從 pathlib 導入路徑
从 dotenv 导入 load_dotenv
從 langchain_community.document_loaders 導入（
    PyPDFLoader,
    文字載入器，
    非結構化MarkdownLoader，
）
從 langchain.text_splitter 導入 RecursiveCharacterTextSplitter
从 langchain_openai 导入 OpenAIEmbeddings
從 langchain_chroma 導入 Chroma

載入_dotenv()

DOCS_DIR = 路径(“文档”)
CHROMA_DIR = 路徑（“chroma_db”）
COLLECTION_NAME =“rag_chatbot”


def load_documents() -> 清單：
    """从多种文件类型加载文档。"""
    文檔 = []
    裝載機地圖 = {
        “.pdf”：PyPDFLoader，
        “.txt”：文本加载器，
        “.md”：非結構化MarkdownLoader，
    }

    對於 DOCS_DIR.rglob("*") 中的 file_path：
        ext = file_path.suffix.lower()
        如果 ext 在 loaders_map 中：
            嘗試：
                裝載機=裝載機地圖[ext](str(file_path)）
                已載入 = loader.load()
                # 新增元數據
                用於讀取已載入：
                    doc.metadata["file_name"] = file_path.name
                    doc.metadata["file_type"] = ext
                文件.擴充（已載入）
                print(f" ✓ 已載入 {file_path.name} ({len(loaded)} 頁)")
            除了異常 e：
                print(f" ✗ 載入 {file_path.name} 時發生錯誤：{e}")

    返回文件


def chunk_documents(文檔: 列表) -> 列表:
    """將文件分割成重疊的區塊。"""
    分割器 = RecursiveCharacterTextSplitter(
        塊大小=1000，
        區塊重疊=200，
        長度函數=len，
        分隔符號=["\n\n", "\n", ".", " ", ""],
    ）
    區塊= splitter.split_documents（文檔）
    print(f" 分割成 {len(chunks)} 區塊")
    返回區塊


def create_vectorstore(chunks: list) -> 色度:
    """嵌入區塊並儲存在 Chroma 中。"""
    嵌入 = OpenAIEmbeddings(model="text-embedding-3-small")

    # 刪除舊集合（如果有）
    如果 CHROMA_DIR.exists():
        進口舒蒂爾
        Shutil.rmtree(CHROMA_DIR)
        print("清除舊向量儲存")

    向量儲存 = Chroma.from_documents(
        文件=區塊，
        嵌入=嵌入，
        persist_directory=str(CHROMA_DIR),
        集合名稱=COLLECTION_NAME,
    ）
    計數 = vectorstore._collection.count()
    print(f" 在 Chroma 中儲存了 {count} 個向量")
    返迴向量庫


def main():
    print("=== RAG 索引管道 ===\n")

    print("1.正在載入文件...")
    文檔 = load_documents()
    print(f" 總計：{len(docs)} 個文檔\n")

    print("2.分塊...")
    區塊 = chunk_documents(文檔)
    列印（）

    print("3.嵌入與儲存...")
    向量儲存 = create_vectorstore(區塊)
    列印（）

    print("✅ 索引完成！")


如果 __name__ == "__main__":
    主要()
```

### 9.4. chatbot.py — Conversational RAG

```蟒蛇
"""chatbot.py — 帶有對話記憶和來源引用的 RAG 聊天機器人。"""
導入作業系統
從 pathlib 導入路徑
從 dotenv 導入 load_dotenv
從 langchain_openai 導入 ChatOpenAI、OpenAIEmbeddings
從 langchain_chroma 導入 Chroma
從 langchain.chains 導入 create_retrieval_chain、create_history_aware_retriever
從 langchain.chains.combine_documents 匯入 create_stuff_documents_chain
從 langchain_core.prompts 導入 ChatPromptTemplate、MessagesPlaceholder
從 langchain_core.messages 導入 HumanMessage、AIMessage

載入_dotenv()

CHROMA_DIR = 路徑（“chroma_db”）
COLLECTION_NAME =“rag_chatbot”


def setup_chain():
    """用對話記憶體初始化RAG鏈。"""
    # 向量存儲
    嵌入 = OpenAIEmbeddings(model="text-embedding-3-small")
    向量儲存 = 色度(
        persist_directory=str(CHROMA_DIR),
        embedding_function=嵌入，
        集合名稱=COLLECTION_NAME,
    ）
    檢索器 = vectorstore.as_retriever(
        search_type =“mmr”，
        search_kwargs={“k”：5，“fetch_k”：10}，
    ）

    #法學碩士
    llm = ChatOpenAI(模型=“gpt-4o-mini”，溫度=0)

    # 歷史感知檢索器
    contextualize_prompt = ChatPromptTemplate.from_messages([
        （“系統”，“給定聊天記錄和新問題，重新表述”
         「這是一個獨立的問題。不要回答它。」），
        MessagesPlaceholder("聊天歷史記錄"),
        （“人類”，“{輸入}”），
    ]）
    歷史檢索器 = create_history_aware_retriever(
        llm、檢索器、contextualize_prompt
    ）

    # 帶引用的 QA 鏈
    qa_prompt = ChatPromptTemplate.from_messages([
        （“系統”，“”“你是一個有用的助手。僅根據
提供了上下文。使用[來源：檔案名稱]格式引用來源。
如果答案不符合上下文，請說「我沒有該資訊」。

背景：
{上下文}"""),
        MessagesPlaceholder("聊天歷史記錄"),
        （“人類”，“{輸入}”），
    ]）

    qa_chain = create_stuff_documents_chain(llm, qa_prompt)
    返回create_retrieval_chain(history_retriever, qa_chain)


def main():
    print("=== RAG 聊天機器人 ===")
    print("輸入 'quit' 退出，'reset' 清除歷史記錄\n")

    鏈 = setup_chain()
    聊天記錄 = []

    而真實：
        user_input = input("你：").strip()
        如果不是使用者輸入：
            繼續
        如果 user_input.lower() == "退出":
            列印（“再見！”）
            打破。打破
        如果 user_input.lower() == "重置":
            chat_history.clear()
            print("歷史記錄已清除。\n")
            繼續

        # 呼叫RAG鏈
        響應 = chain.invoke({
            “輸入”：使用者輸入，
            「聊天歷史記錄」：聊天歷史記錄，
        })

        答案=回應[“答案”]
        print(f"\n機器人: {answer}")

        # 顯示來源
        來源=設定（）
        對於 response.get("context", []) 中的文件：
            fname = doc.metadata.get("檔案名稱", "未知")
            來源.add(fname)
        如果來源：
            print(f"📄 來源: {', '.join(sources)}")
        列印（）

        # 更新歷史記錄
        chat_history.append(HumanMessage(content=user_input))
        chat_history.append(AIMessage(content=answer))

        # 限制歷史記錄以避免上下文太長
        如果 len(chat_history) > 20:
            聊天歷史記錄 = 聊天歷史記錄[-20:]


如果 __name__ == "__main__":
    主要()
```

### 9.5。試運行

```巴什
# 第 1 步：設定
echo "OPENAI_API_KEY=sk-..." > .env
mkdir -p 文檔
# 將PDF/TXT/MD檔案放入docs/

# 第 2 步：索引
python 攝取.py

# 第三步：聊天
python 聊天機器人.py
```

```文本。文字
=== RAG 聊天機器人 ===
輸入“quit”退出，輸入“reset”清除歷史記錄

你：我們有多少天假期？

Bot：員工每年有 20 天假期。服務5年後，
您還有額外 5 天的時間（總共 25 天）。 [來源：手冊.pdf]
📄 來源：handbook.pdf

你：那兼職員工呢？

Bot：兼職員工依自己的狀況按比例獲得假期
工作安排。例如，50% 的員工每年可以享有 10 天的假期。
[來源：handbook.pdf、policies.txt]
📄 資料來源：handbook.pdf、policies.txt

你：退出
再見！
```

---

＃＃ 概括

本文涵蓋了從概念到生產程式碼的整個 RAG 管道：

|主題 |要點 |
|--------|-------------|
| **RAG 架構** |索引→檢索→生成，3 個清晰的階段 |
| **RAG vs Fine-tuning** | RAG cho knowledge, fine-tuning cho behavior |
| **LangChain RAG** | Flexible chains, `create_retrieval_chain`, conversation memory |
| **LlamaIndex RAG** |資料優先，Document→Node→Index，多種回應模式 |
| **LangChain 與 LlamaIndex** |編排與資料架構－在生產中同時使用 |
| **回應合成** | Stuff（快速）、Map-Reduce（縮放）、Refine（精確）|
| **Production patterns** | Streaming, source attribution, citation |
| **RAGAS evaluation** | 4 metrics: faithfulness, relevancy, precision, recall |

```文本。文字
RAG 管道備忘單：
┌────────────────────────── ──────────────────────────┐
│ │
│ 載入 → 區塊 → 嵌入 → 儲存 → 擷取 → 答案 │
│ │
│ 塊大小：500-1500 個字符，重疊 10-20% │
│ 檢索器：MMR > 相似性（不同的結果） │
│ 回應：內容（預設），精煉（準確）│
│ 評估：RAGAS 忠誠度 > 0.85 │
│ 始終：返回來源，串流響應 │
│ │
└────────────────────────────────────────────────────┘
```

---

＃＃ 鍛煉

### 練習 1：維基百科上的 RAG（60 分鐘）

使用浪鏈 `網路基礎載入器` 載入 3-5 個關於某個主題的維基百科頁面（例如：機器學習、神經網路、深度學習）。建造 RAG 管道並使用 10 個問題進行測試。由 RAGAS 評估。

**要求：**
- 載入至少 3 個網站
- Chunk size 800, overlap 150
- 使用 `帶有自訂提示的 create_retrieval_chain`
- 列印每個答案的來源 URL
- 執行 RAGAS 評估並報告 4 個指標

### 練習 2：比較 LangChain 與 LlamaIndex（90 分鐘）

使用 LangChain 和 LlamaIndex 在同一資料集上建立相同的 RAG 管道。比較：
- 程式碼行數
- 回應品質（使用 RAGAS）
- 延遲（反應時間）
- 記憶體使用情況

**要求：**
- 相同的嵌入模型，相同的法學碩士，相同的分塊策略
- 測試 20 個類似問題
- 建立與指標的比較表
- 撰寫評論：哪個框架更適合哪個用例？

### 練習 3：生產 RAG 聊天機器人（60 分鐘）

擴展第 9 節的聊天機器人，具有以下功能：
- **串流**回應（列印每個令牌）
- **混合搜尋**（關鍵字+語義）而不僅僅是MMR
- **重新排名**頂級結果，然後再將其納入法學碩士
- **記錄**每個查詢 → 檢索到的區塊 → 回答 JSON 文件

**獎勵：** 使用 FastAPI 端點部署聊天機器人，接收 POST 請求並傳回串流回應。
