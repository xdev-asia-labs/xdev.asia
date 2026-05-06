---
id: 019e0a01-bb10-7001-c001-ee1000000001
title: 'Lesson 10: RAG Pipeline — LangChain & LlamaIndex'
slug: bai-10-rag-pipeline-langchain-llamaindex
description: >-
  RAG architecture: indexing, retrieval, generation. LangChain RAG chain.
  LlamaIndex data framework. Document processing pipeline. Retriever types.
  Response synthesis. Evaluation with RAGAS. Practice building a complete RAG
  chatbot.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: 'Part 3: RAG, Embeddings & Vector Database'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI Agent Engineer: From Zero to Production'
  slug: ai-agent-engineer-tu-zero-den-production
locale: en
---

> **LLM knows everything… except your private data.** GPT-4 cannot read internal docs, Confluence wiki, or your company's internal database. Fine-tuning is expensive, gets outdated quickly, and hallucinates when knowledge changes. RAG (Retrieval-Augmented Generation) solves it all — get the right context from your data, stuff it into the prompt, then let LLM generate the correct answer. In this article, we will build a complete RAG pipeline with both **LangChain** and **LlamaIndex** — the two most popular frameworks currently.

---

## 1. RAG Architecture Overview

### 1.1. The Big Picture — Indexing → Retrieval → Generation

RAG pipeline includes 3 main phases:

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

### 1.2. Detailed components

| Components | Function | Example |
|-----------|----------|-------|
| **Document Loader** | Read raw data from many sources | PDF, HTML, Notion, Google Drive |
| **Text Splitter** | Divide documents into small chunks | RecursiveCharacterTextSplitter |
| **Embedding Model** | Convert text → vector | OpenAI `text-embedding-3-small` |
| **Vector Store** | Archive + search vectors | FAISS, Chroma, Pinecone |
| **Retriever** | Find top-K related chunks | Similarity, MMR, hybrid |
| **LLM** | Generate answer from context | GPT-4o, Claude, Llama 3 |
| **Response Synthesizer** | Combine chunks → final answer | Stuff, Map-Reduce, Refine |

---

## 2. Why RAG > Fine-tuning for many use cases

### 2.1. Comparison Table

| Criteria | RAG | Fine-tuning |
|----------|-----|-------------|
| **Knowledge update** | Real-time (update vector store) | Must retrain the model |
| **Cost** | Low (only costs embedding + inference) | High (GPU hours training) |
| **Hallucination** | Strong reduction (with source) | Still hallucinate if data is low |
| **Transparency** | Specify source document | Black-box, source unknown |
| **Data privacy** | Data stays local | Data sent to training server |
| **Setup time** | A few hours | A few days → weeks |
| **When to use** | Dynamic knowledge, Q&A | Style/tone adaptation, domain-specific tasks |
| **Scalability** | Add docs = add vectors | Add data = retrain |

### 2.2. When to use what?

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

> **Rule of thumb:** RAG for **knowledge**, fine-tuning for **behavior**. Many production systems combine the two — a small fine-tune model then a RAG to supplement knowledge.

---

## 3. LangChain RAG — From basic to conversational

### 3.1. Install

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

**Why `chunk_overlap=200`?** When split, the context at the chunk boundary is lost. Overlap ensures that the sentence at the end of chunk A also appears at the beginning of chunk B → the retriever does not miss information.

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

### 3.4. RetrievalQA Chain — The Basics

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

### 3.5. create_retrieval_chain — New way (recommended)

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

### 3.6. Conversation RAG with Memory

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

### 4.1. Install

```bash
pip install llama-index llama-index-llms-openai \
    llama-index-embeddings-openai llama-index-vector-stores-chroma
```

### 4.2. Philosophy: Document → Node → Index

LlamaIndex takes a different approach than LangChain — it treats data as a first-class citizen:

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

LlamaIndex supports multiple answer aggregation strategies:

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

## 5. LangChain vs LlamaIndex — Detailed comparison

| Criteria | LangChain | LlamaIndex |
|----------|-----------|-----------|
| **Philosophy** | Orchestration framework — chains/agents | Data framework — index/query |
| **Strengths** | Flexible chains, tool-calling agents, many integrations | Data ingestion pipeline, structured data, response synthesis |
| **Learning curve** | Medium — many abstractions | Lower — Simple API for RAG |
| **RAG setup** | 10-20 lines of code | 5-10 lines of code |
| **Agent support** | Strong (ReAct, OpenAI functions, custom) | Yes but less mature |
| **Data connectors** | Community-driven, many loaders | Built-in LlamaHub, 100+ connectors |
| **Response synthesis** | Basic (stuff, map_reduce, refine) | Enhance (refine, compact, tree_summarize) |
| **Structured output** | Via output parsers | Via Pydantic programs |
| **Community** | Very large, many tutorials | Large, focused RAG |
| **Production-ready** | LangSmith tracing, LangServe deployment | LlamaCloud managed, LlamaTrace |
| **When to choose** | Complex agent workflows, multi-tool chains | Data-heavy RAG, structured data extraction |

> **Fact:** Many production systems use **both** — LlamaIndex for data ingestion pipeline, LangChain for agent orchestration.

---

## 6. Response Synthesis Strategies — Tradeoffs

### 6.1. Four main strategies

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

| Strategy | LLM Calls | Token Usage | Latency | Accuracy | When to use |
|----------|-----------|-------------|--------|----------|-------------|
| **Stuff** | 1 | Low | Fastest | Good (if fit context) | Few chunks, big model context |
| **Map-Reduce** | N+1 | Highest | Slow | Average | Many chunks, need songs // |
| **Refine** | N | Cao | Slow (sequential) | Highest | Need accurate, detailed answer |
| **Compact** | 1-2 | Average | Fast | Good | Default choice, balanced |

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

## 8. Evaluation with RAGAS

RAGAS (Retrieval Augmented Generation Assessment) is the standard framework for evaluating the RAG pipeline.

### 8.1. Four key metrics

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

| Metrics | What to measure | Input | Target |
|--------|-------|-------|--------|
| **Faithfulness** | Is Answer making up more? | question, answer, context | > 0.85 |
| **Answer Relevancy** | Does Answer answer the question correctly? | question, answer | > 0.80 |
| **Context Precision** | Can relevant chunks get high rank? | question, context, ground_truth | > 0.75 |
| **Context Recall** | Does the Retriever get enough information? | question, context, ground_truth | > 0.80 |

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

### 8.3. Improve based on metrics

| Low Metric | Cause | Solution |
|-------------|-------------|-----------|
| **Faithfulness < 0.85** | LLM made things up out of context | Tighten prompt ("ONLY use context"), reduce temperature |
| **Answer Relevancy < 0.80** | Answer is rambling, not correct answer | Improved prompt, added "Be concise" |
| **Context Precision < 0.75** | Retriever retrieves unrelated chunks | Increase k, use MMR, re-ranking |
| **Context Recall < 0.80** | Missing information in retrieved chunks | Improve chunking (overlap, size), add docs |

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
"""ingest.py — Load documents, chunks, embed, store in Chroma."""
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
                # Add metadata
                for read in loaded:
                    doc.metadata["file_name"] = file_path.name
                    doc.metadata["file_type"] = ext
                docs.extend(loaded)
                print(f" ✓ Loaded {file_path.name} ({len(loaded)} pages)")
            except Exception as e:
                print(f" ✗ Error loading {file_path.name}: {e}")

    return documents


def chunk_documents(docs: list) -> list:
    """Split documents into overlapping chunks."""
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len,
        separators=["\n\n", "\n", ". ", " ", ""],
    )
    chunks = splitter.split_documents(docs)
    print(f" Split into {len(chunks)} chunks")
    return chunks


def create_vectorstore(chunks: list) -> Chroma:
    """Embed chunks and store in Chroma."""
    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

    # Delete old collection if any
    if CHROMA_DIR.exists():
        import shutil
        shutil.rmtree(CHROMA_DIR)
        print("Cleared old vector store")

    vectorstore = Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        persist_directory=str(CHROMA_DIR),
        collection_name=COLLECTION_NAME,
    )
    count = vectorstore._collection.count()
    print(f" Stored {count} vectors in Chroma")
    return vectorstore


def main():
    print("=== RAG Indexing Pipeline ===\n")

    print("1. Loading documents...")
    docs = load_documents()
    print(f" Total: {len(docs)} documents\n")

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

    #LLM
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

    whileTrue:
        user_input = input("You: ").strip()
        if not user_input:
            continue
        if user_input.lower() == "quit":
            print("Goodbye!")
            break. break
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

        # Limit history to avoid context being too long
        if len(chat_history) > 20:
            chat_history = chat_history[-20:]


if __name__ == "__main__":
    main()
```

### 9.5. Test run

```bash
# Step 1: Setup
echo "OPENAI_API_KEY=sk-..." > .env
mkdir -p docs
# Put PDF/TXT/MD files into docs/

# Step 2: Index
python ingest.py

# Step 3: Chat
python chatbot.py
```

```text. text
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

## Summary

This article covers the entire RAG pipeline from concept to production code:

| Topics | Key Takeaway |
|--------|-------------|
| **RAG Architecture** | Indexing → Retrieval → Generation, 3 clear phases |
| **RAG vs Fine-tuning** | RAG cho knowledge, fine-tuning cho behavior |
| **LangChain RAG** | Flexible chains, `create_retrieval_chain`, conversation memory |
| **LlamaIndex RAG** ​​| Data-first, Document→Node→Index, multiple response modes |
| **LangChain vs LlamaIndex** | Orchestration vs Data framework — use both in production |
| **Response Synthesis** | Stuff (fast), Map-Reduce (scale), Refine (accurate) |
| **Production patterns** | Streaming, source attribution, citation |
| **RAGAS evaluation** | 4 metrics: faithfulness, relevancy, precision, recall |

```text. text
RAG Pipeline Cheat Sheet:
┌────────────────────────── ──────────────────────────┐
│ │
│ Load → Chunk → Embed → Store → Retrieve → Answer │
│ │
│ Chunk size: 500-1500 chars, overlap 10-20% │
│ Retriever: MMR > similarity (diverse results) │
│ Response: stuff (default), refine (accurate) │
│ Eval: RAGAS faithfulness > 0.85 │
│ Always: return sources, stream response │
│ │
└────────────────────────── ──────────────────────────┘
```

---

## Exercise

### Exercise 1: RAG on Wikipedia (60 minutes)

Use LangChain `WebBaseLoader` load 3-5 Wikipedia pages on a topic (eg: Machine Learning, Neural Networks, Deep Learning). Build RAG pipeline and test with 10 questions. Evaluation by RAGAS.

**Request:**
- Load at least 3 websites
- Chunk size 800, overlap 150
- Use `create_retrieval_chain` with custom prompt
- Print source URL for each answer
- Run RAGAS evaluation and report 4 metrics

### Exercise 2: Compare LangChain vs LlamaIndex (90 minutes)

Build the same RAG pipeline on the same dataset using both LangChain and LlamaIndex. Compare:
- Number of lines of code
- Response quality (using RAGAS)
- Latency (response time)
- Memory usage

**Requirement:**
- Same embedding model, same LLM, same chunking strategy
- Test on 20 similar questions
- Create comparison table with metrics
- Write comments: which framework is more suitable for which use case?

### Exercise 3: Production RAG Chatbot (60 minutes)

Expand the chatbot in section 9 with the following features:
- **Streaming** response (print each token)
- **Hybrid search** (keyword + semantic) instead of just MMR
- **Re-ranking** top results before putting them into LLM
- **Logging** each query → retrieved chunks → answer to a JSON file

**Bonus:** Deploy chatbot with FastAPI endpoint, receive POST request and return streaming response.
