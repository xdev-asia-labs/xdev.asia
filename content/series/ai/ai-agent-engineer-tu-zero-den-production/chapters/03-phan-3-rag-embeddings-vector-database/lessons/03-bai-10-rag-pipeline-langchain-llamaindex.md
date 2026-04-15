---
id: 019e0a01-bb10-7001-c001-ee1000000001
title: "Bài 10: RAG Pipeline — LangChain & LlamaIndex"
slug: bai-10-rag-pipeline-langchain-llamaindex
description: >-
  RAG architecture: indexing, retrieval, generation. LangChain RAG chain. LlamaIndex data framework. Document processing pipeline. Retriever types. Response synthesis. Evaluation với RAGAS. Thực hành xây RAG chatbot hoàn chỉnh.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: RAG, Embeddings & Vector Database"
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: "AI Agent Engineer: Từ Zero đến Production"
  slug: ai-agent-engineer-tu-zero-den-production
---

> **LLM biết mọi thứ… trừ dữ liệu riêng của bạn.** GPT-4 không đọc được internal docs, Confluence wiki, hay database nội bộ công ty bạn. Fine-tuning thì tốn kém, outdated nhanh, và hallucinate khi knowledge thay đổi. RAG (Retrieval-Augmented Generation) giải quyết tất cả — lấy đúng context từ data của bạn, nhét vào prompt, rồi để LLM generate câu trả lời chính xác. Bài này ta sẽ build RAG pipeline hoàn chỉnh với cả **LangChain** lẫn **LlamaIndex** — hai framework phổ biến nhất hiện tại.

---

## 1. RAG Architecture Overview

### 1.1. The Big Picture — Indexing → Retrieval → Generation

RAG pipeline gồm 3 phase chính:

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

### 1.2. Các thành phần chi tiết

| Component | Chức năng | Ví dụ |
|-----------|----------|-------|
| **Document Loader** | Đọc raw data từ nhiều nguồn | PDF, HTML, Notion, Google Drive |
| **Text Splitter** | Chia document thành chunks nhỏ | RecursiveCharacterTextSplitter |
| **Embedding Model** | Chuyển text → vector | OpenAI `text-embedding-3-small` |
| **Vector Store** | Lưu trữ + search vectors | FAISS, Chroma, Pinecone |
| **Retriever** | Tìm top-K chunks liên quan | Similarity, MMR, hybrid |
| **LLM** | Generate answer từ context | GPT-4o, Claude, Llama 3 |
| **Response Synthesizer** | Kết hợp chunks → final answer | Stuff, Map-Reduce, Refine |

---

## 2. Tại sao RAG > Fine-tuning cho nhiều use cases

### 2.1. Comparison Table

| Tiêu chí | RAG | Fine-tuning |
|----------|-----|-------------|
| **Knowledge update** | Real-time (cập nhật vector store) | Phải train lại model |
| **Chi phí** | Thấp (chỉ tốn embedding + inference) | Cao (GPU hours training) |
| **Hallucination** | Giảm mạnh (có source) | Vẫn hallucinate nếu data ít |
| **Transparency** | Chỉ rõ source document | Black-box, không biết nguồn |
| **Data privacy** | Data stays local | Data gửi lên training server |
| **Setup time** | Vài giờ | Vài ngày → tuần |
| **Khi nào dùng** | Dynamic knowledge, Q&A | Style/tone adaptation, domain-specific tasks |
| **Scalability** | Thêm docs = thêm vectors | Thêm data = train lại |

### 2.2. Khi nào dùng gì?

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

> **Rule of thumb:** RAG cho **knowledge**, fine-tuning cho **behavior**. Nhiều production systems kết hợp cả hai — fine-tune model nhỏ rồi RAG để bổ sung knowledge.

---

## 3. LangChain RAG — Từ cơ bản đến conversational

### 3.1. Cài đặt

```bash
pip install langchain langchain-openai langchain-community \
    langchain-chroma chromadb pypdf tiktoken
```

### 3.2. Document Loaders & Text Splitters

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

**Tại sao `chunk_overlap=200`?** Khi split, context ở ranh giới chunk bị mất. Overlap đảm bảo câu ở cuối chunk A cũng xuất hiện ở đầu chunk B → retriever không miss thông tin.

### 3.3. Embedding + VectorStore Integration

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

### 3.4. RetrievalQA Chain — Cách cơ bản

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

### 3.5. create_retrieval_chain — Cách mới (recommended)

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

### 3.6. Conversation RAG với Memory

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

## 4. LlamaIndex RAG — Data Framework Approach

### 4.1. Cài đặt

```bash
pip install llama-index llama-index-llms-openai \
    llama-index-embeddings-openai llama-index-vector-stores-chroma
```

### 4.2. Philosophy: Document → Node → Index

LlamaIndex tiếp cận khác LangChain — nó coi data là first-class citizen:

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

### 4.3. SimpleDirectoryReader + VectorStoreIndex

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

### 4.4. Query Engine — Simple Querying

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

### 4.5. Chat Engine — Multi-turn Conversation

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

### 4.6. Response Synthesizer Modes

LlamaIndex hỗ trợ nhiều chiến lược tổng hợp câu trả lời:

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

## 5. LangChain vs LlamaIndex — So sánh chi tiết

| Tiêu chí | LangChain | LlamaIndex |
|----------|-----------|------------|
| **Philosophy** | Orchestration framework — chains/agents | Data framework — index/query |
| **Điểm mạnh** | Flexible chains, tool-calling agents, nhiều integrations | Data ingestion pipeline, structured data, response synthesis |
| **Learning curve** | Trung bình — nhiều abstractions | Thấp hơn — API đơn giản cho RAG |
| **RAG setup** | 10-20 dòng code | 5-10 dòng code |
| **Agent support** | Mạnh (ReAct, OpenAI functions, custom) | Có nhưng ít mature hơn |
| **Data connectors** | Community-driven, nhiều loaders | Built-in LlamaHub, 100+ connectors |
| **Response synthesis** | Cơ bản (stuff, map_reduce, refine) | Nâng cao (refine, compact, tree_summarize) |
| **Structured output** | Qua output parsers | Qua Pydantic programs |
| **Community** | Rất lớn, nhiều tutorials | Lớn, tập trung RAG |
| **Production-ready** | LangSmith tracing, LangServe deploy | LlamaCloud managed, LlamaTrace |
| **Khi nào chọn** | Complex agent workflows, multi-tool chains | Data-heavy RAG, structured data extraction |

> **Thực tế:** Nhiều production systems dùng **cả hai** — LlamaIndex cho data ingestion pipeline, LangChain cho agent orchestration.

---

## 6. Response Synthesis Strategies — Tradeoffs

### 6.1. Bốn chiến lược chính

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

### 6.2. Comparison Table

| Strategy | LLM Calls | Token Usage | Latency | Accuracy | Khi nào dùng |
|----------|-----------|-------------|---------|----------|-------------|
| **Stuff** | 1 | Thấp | Nhanh nhất | Tốt (nếu fit context) | Ít chunks, model context lớn |
| **Map-Reduce** | N+1 | Cao nhất | Chậm | Trung bình | Nhiều chunks, cần songs // |
| **Refine** | N | Cao | Chậm (sequential) | Cao nhất | Cần answer chính xác, chi tiết |
| **Compact** | 1-2 | Trung bình | Nhanh | Tốt | Default choice, balanced |

---

## 7. Production RAG Patterns

### 7.1. Streaming Response

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

### 7.2. Source Attribution & Citation

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

## 8. Evaluation với RAGAS

RAGAS (Retrieval Augmented Generation Assessment) là framework chuẩn để đánh giá RAG pipeline.

### 8.1. Bốn metrics chính

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

| Metric | Đo gì | Input | Target |
|--------|-------|-------|--------|
| **Faithfulness** | Answer có bịa thêm không? | question, answer, context | > 0.85 |
| **Answer Relevancy** | Answer có trả lời đúng câu hỏi? | question, answer | > 0.80 |
| **Context Precision** | Chunks relevant có được rank cao? | question, context, ground_truth | > 0.75 |
| **Context Recall** | Retriever có lấy đủ info? | question, context, ground_truth | > 0.80 |

### 8.2. Code Evaluation

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

### 8.3. Cải thiện dựa trên metrics

| Metric thấp | Nguyên nhân | Giải pháp |
|-------------|-------------|-----------|
| **Faithfulness < 0.85** | LLM bịa thêm ngoài context | Tighten prompt ("ONLY use context"), giảm temperature |
| **Answer Relevancy < 0.80** | Answer lan man, không trả lời đúng | Cải thiện prompt, thêm "Be concise" |
| **Context Precision < 0.75** | Retriever lấy chunks không liên quan | Tăng k, dùng MMR, re-ranking |
| **Context Recall < 0.80** | Thiếu thông tin trong retrieved chunks | Cải thiện chunking (overlap, size), thêm docs |

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
langchain-chroma>=0.1.0
langchain-community>=0.3.0
chromadb>=0.5.0
pypdf>=4.0.0
tiktoken>=0.7.0
ragas>=0.2.0
python-dotenv>=1.0.0
```

### 9.3. ingest.py — Indexing Pipeline

```python
"""ingest.py — Load documents, chunk, embed, store in Chroma."""
import os
from pathlib import Path
from dotenv import load_dotenv
from langchain_community.document_loaders import (
    PyPDFLoader,
    TextLoader,
    UnstructuredMarkdownLoader,
)
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_chroma import Chroma

load_dotenv()

DOCS_DIR = Path("docs")
CHROMA_DIR = Path("chroma_db")
COLLECTION_NAME = "rag_chatbot"


def load_documents() -> list:
    """Load documents from multiple file types."""
    docs = []
    loaders_map = {
        ".pdf": PyPDFLoader,
        ".txt": TextLoader,
        ".md": UnstructuredMarkdownLoader,
    }

    for file_path in DOCS_DIR.rglob("*"):
        ext = file_path.suffix.lower()
        if ext in loaders_map:
            try:
                loader = loaders_map[ext](str(file_path))
                loaded = loader.load()
                # Thêm metadata
                for doc in loaded:
                    doc.metadata["file_name"] = file_path.name
                    doc.metadata["file_type"] = ext
                docs.extend(loaded)
                print(f"  ✓ Loaded {file_path.name} ({len(loaded)} pages)")
            except Exception as e:
                print(f"  ✗ Error loading {file_path.name}: {e}")

    return docs


def chunk_documents(docs: list) -> list:
    """Split documents into overlapping chunks."""
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len,
        separators=["\n\n", "\n", ". ", " ", ""],
    )
    chunks = splitter.split_documents(docs)
    print(f"  Split into {len(chunks)} chunks")
    return chunks


def create_vectorstore(chunks: list) -> Chroma:
    """Embed chunks and store in Chroma."""
    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

    # Xoá collection cũ nếu có
    if CHROMA_DIR.exists():
        import shutil
        shutil.rmtree(CHROMA_DIR)
        print("  Cleared old vector store")

    vectorstore = Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        persist_directory=str(CHROMA_DIR),
        collection_name=COLLECTION_NAME,
    )
    count = vectorstore._collection.count()
    print(f"  Stored {count} vectors in Chroma")
    return vectorstore


def main():
    print("=== RAG Indexing Pipeline ===\n")

    print("1. Loading documents...")
    docs = load_documents()
    print(f"   Total: {len(docs)} documents\n")

    print("2. Chunking...")
    chunks = chunk_documents(docs)
    print()

    print("3. Embedding & storing...")
    vectorstore = create_vectorstore(chunks)
    print()

    print("✅ Indexing complete!")


if __name__ == "__main__":
    main()
```

### 9.4. chatbot.py — Conversational RAG

```python
"""chatbot.py — RAG chatbot with conversation memory & source citation."""
import os
from pathlib import Path
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_chroma import Chroma
from langchain.chains import create_retrieval_chain, create_history_aware_retriever
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.messages import HumanMessage, AIMessage

load_dotenv()

CHROMA_DIR = Path("chroma_db")
COLLECTION_NAME = "rag_chatbot"


def setup_chain():
    """Initialize RAG chain with conversation memory."""
    # Vector store
    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
    vectorstore = Chroma(
        persist_directory=str(CHROMA_DIR),
        embedding_function=embeddings,
        collection_name=COLLECTION_NAME,
    )
    retriever = vectorstore.as_retriever(
        search_type="mmr",
        search_kwargs={"k": 5, "fetch_k": 10},
    )

    # LLM
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

    # History-aware retriever
    contextualize_prompt = ChatPromptTemplate.from_messages([
        ("system", "Given chat history and a new question, reformulate "
         "it as a standalone question. Do NOT answer it."),
        MessagesPlaceholder("chat_history"),
        ("human", "{input}"),
    ])
    history_retriever = create_history_aware_retriever(
        llm, retriever, contextualize_prompt
    )

    # QA chain with citation
    qa_prompt = ChatPromptTemplate.from_messages([
        ("system", """You are a helpful assistant. Answer based ONLY on the
provided context. Cite sources using [Source: filename] format.
If the answer is not in context, say "I don't have that information."

Context:
{context}"""),
        MessagesPlaceholder("chat_history"),
        ("human", "{input}"),
    ])

    qa_chain = create_stuff_documents_chain(llm, qa_prompt)
    return create_retrieval_chain(history_retriever, qa_chain)


def main():
    print("=== RAG Chatbot ===")
    print("Type 'quit' to exit, 'reset' to clear history\n")

    chain = setup_chain()
    chat_history = []

    while True:
        user_input = input("You: ").strip()
        if not user_input:
            continue
        if user_input.lower() == "quit":
            print("Goodbye!")
            break
        if user_input.lower() == "reset":
            chat_history.clear()
            print("History cleared.\n")
            continue

        # Invoke RAG chain
        response = chain.invoke({
            "input": user_input,
            "chat_history": chat_history,
        })

        answer = response["answer"]
        print(f"\nBot: {answer}")

        # Show sources
        sources = set()
        for doc in response.get("context", []):
            fname = doc.metadata.get("file_name", "unknown")
            sources.add(fname)
        if sources:
            print(f"📄 Sources: {', '.join(sources)}")
        print()

        # Update history
        chat_history.append(HumanMessage(content=user_input))
        chat_history.append(AIMessage(content=answer))

        # Giới hạn history để tránh context quá dài
        if len(chat_history) > 20:
            chat_history = chat_history[-20:]


if __name__ == "__main__":
    main()
```

### 9.5. Chạy thử

```bash
# Step 1: Setup
echo "OPENAI_API_KEY=sk-..." > .env
mkdir -p docs
# Đặt file PDF/TXT/MD vào docs/

# Step 2: Index
python ingest.py

# Step 3: Chat
python chatbot.py
```

```text
=== RAG Chatbot ===
Type 'quit' to exit, 'reset' to clear history

You: How many vacation days do we get?

Bot: Employees receive 20 vacation days per year. After 5 years of service,
you get an additional 5 days (total 25 days). [Source: handbook.pdf]
📄 Sources: handbook.pdf

You: What about part-time employees?

Bot: Part-time employees receive vacation days pro-rated based on their
work schedule. For example, a 50% employee gets 10 days per year.
[Source: handbook.pdf, policies.txt]
📄 Sources: handbook.pdf, policies.txt

You: quit
Goodbye!
```

---

## Tổng kết

Bài này đã cover toàn bộ RAG pipeline từ concept đến production code:

| Chủ đề | Key Takeaway |
|--------|-------------|
| **RAG Architecture** | Indexing → Retrieval → Generation, 3 phase rõ ràng |
| **RAG vs Fine-tuning** | RAG cho knowledge, fine-tuning cho behavior |
| **LangChain RAG** | Flexible chains, `create_retrieval_chain`, conversation memory |
| **LlamaIndex RAG** | Data-first, Document→Node→Index, nhiều response modes |
| **LangChain vs LlamaIndex** | Orchestration vs Data framework — dùng cả hai trong production |
| **Response Synthesis** | Stuff (nhanh), Map-Reduce (scale), Refine (chính xác) |
| **Production patterns** | Streaming, source attribution, citation |
| **RAGAS evaluation** | 4 metrics: faithfulness, relevancy, precision, recall |

```text
RAG Pipeline Cheat Sheet:
┌────────────────────────────────────────────────────┐
│                                                    │
│  Load → Chunk → Embed → Store → Retrieve → Answer │
│                                                    │
│  Chunk size: 500-1500 chars, overlap 10-20%        │
│  Retriever: MMR > similarity (diverse results)     │
│  Response: stuff (default), refine (accurate)      │
│  Eval: RAGAS faithfulness > 0.85                   │
│  Always: return sources, stream response           │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

## Bài tập

### Bài tập 1: RAG trên Wikipedia (60 phút)

Dùng LangChain `WebBaseLoader` load 3-5 trang Wikipedia về một chủ đề (ví dụ: Machine Learning, Neural Networks, Deep Learning). Build RAG pipeline và test với 10 câu hỏi. Đánh giá bằng RAGAS.

**Yêu cầu:**
- Load ít nhất 3 trang web
- Chunk size 800, overlap 150
- Dùng `create_retrieval_chain` với custom prompt
- In source URL cho mỗi câu trả lời
- Chạy RAGAS evaluation và report 4 metrics

### Bài tập 2: So sánh LangChain vs LlamaIndex (90 phút)

Build cùng một RAG pipeline trên cùng dataset bằng cả LangChain và LlamaIndex. So sánh:
- Số dòng code
- Response quality (dùng RAGAS)
- Latency (thời gian trả lời)
- Memory usage

**Yêu cầu:**
- Cùng embedding model, cùng LLM, cùng chunking strategy
- Test trên 20 câu hỏi giống nhau
- Tạo comparison table với metrics
- Viết nhận xét: framework nào phù hợp hơn cho use case nào

### Bài tập 3: Production RAG Chatbot (60 phút)

Mở rộng chatbot ở section 9 với các features:
- **Streaming** response (print từng token)
- **Hybrid search** (keyword + semantic) thay vì chỉ MMR
- **Re-ranking** top results trước khi đưa vào LLM
- **Logging** mỗi query → retrieved chunks → answer ra file JSON

**Bonus:** Deploy chatbot với FastAPI endpoint, nhận POST request và trả streaming response.
