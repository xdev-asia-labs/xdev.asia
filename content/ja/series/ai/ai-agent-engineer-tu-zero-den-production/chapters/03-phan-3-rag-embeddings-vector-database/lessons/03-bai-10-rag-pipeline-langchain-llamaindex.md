---
id: 019e0a01-bb10-7001-c001-ee1000000001
title: 'レッスン 10: RAG パイプライン — LangChain と LlamaIndex'
slug: bai-10-rag-pipeline-langchain-llamaindex
description: >-
  RAG アーキテクチャ: インデックス作成、取得、生成。 LangChain RAG チェーン。 LlamaIndex データ
  フレームワーク。ドキュメント処理パイプライン。レトリーバーの種類。応答の合成。 RAGASによる評価。完全な RAG チャットボットの構築を練習します。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 3: RAG、埋め込み、ベクトル データベース'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI エージェント エンジニア: ゼロから本番環境まで'
  slug: ai-agent-engineer-tu-zero-den-production
locale: ja
---

> **LLM はすべてを知っています…あなたの個人データを除いて。** GPT-4 は内部ドキュメント、Confluence Wiki、または会社の内部データベースを読み取ることができません。微調整には費用がかかり、すぐに古くなり、知識が変わると幻覚が生じます。 RAG (検索拡張生成) はすべてを解決します。データから適切なコンテキストを取得し、それをプロンプトに詰め込み、LLM に正しい答えを生成させます。この記事では、現在最も人気のある 2 つのフレームワークである **LangChain** と **LlamaIndex** の両方を使用して完全な RAG パイプラインを構築します。

---

## 1. RAG アーキテクチャの概要

＃＃＃１．１．全体像 — インデックス作成 → 取得 → 生成

RAG パイプラインには 3 つの主要なフェーズが含まれています。

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

＃＃＃１．２．詳細なコンポーネント

|コンポーネント |機能 |例 |
|----------|----------|----------|
| **ドキュメントローダー** |多くのソースから生データを読み取る | PDF、HTML、Notion、Google ドライブ |
| **テキスト スプリッター** |文書を小さな塊に分割する | RecursiveCharacterTextSplitter |
| **埋め込みモデル** |テキスト → ベクトルに変換 | OpenAI `text-embedding-3-small` |
| **ベクトル ストア** |アーカイブ + ベクトルの検索 | FAISS、クロマ、松ぼっくり |
| **レトリバー** |上位 K 個の関連チャンクを検索 |類似性、MMR、ハイブリッド |
| **LLM** |コンテキストから回答を生成 | GPT-4o、クロード、ラマ 3 |
| **レスポンス シンセサイザー** |チャンクを結合 → 最終的な答え |スタッフ、マップリデュース、リファイン |

---

## 2. RAG を選ぶ理由 > 多くのユースケースに合わせた微調整

＃＃＃２．１．比較表

|基準 |ラグ |微調整 |
|----------|-----|---------------|
| **ナレッジアップデート** |リアルタイム (ベクター ストアの更新) |モデルを再トレーニングする必要があります |
| **コスト** |低 (埋め込みと推論のコストのみ) |高 (GPU 時間トレーニング) |
| **幻覚** |強力な還元（ソース付き） |データが少ない場合でも幻覚が残る |
| **透明性** |ソース文書を指定 |ブラックボックス、ソース不明 |
| **データプライバシー** |データはローカルに留まります |トレーニング サーバーに送信されるデータ |
| **セットアップ時間** |数時間 |数日→数週間 |
| **使用する場合** |動的な知識、Q&A |スタイル/トーンの適応、ドメイン固有のタスク |
| **スケーラビリティ** |ドキュメントを追加 = ベクトルを追加 |データを追加 = 再トレーニング |

＃＃＃２．２．いつ何を使うのか？

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

> **経験則: **知識**についてはRAG、**行動**については微調整。多くの実稼働システムでは、小規模な微調整モデルと知識を補足するための RAG という 2 つが組み合わされています。

---

## 3. LangChain RAG — 基本的なものから会話的なものまで

＃＃＃３．１．インストール

```bash
pip install langchain langchain-openai langchain-community \
    langchain-chroma chromadb pypdf tiktoken
```

＃＃＃３．２．ドキュメントローダーとテキストスプリッター

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

**なぜ `chunk_overlap=200`?** 分割すると、チャンク境界のコンテキストが失われます。オーバーラップにより、チャンク A の最後の文がチャンク B の先頭にも現れることが保証され、取得者は情報を見逃すことがなくなります。

＃＃＃３．３．埋め込み + VectorStore の統合

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

＃＃＃３．４． RetrievalQA チェーン — 基本

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

＃＃＃３．５。 create_retrieval_chain — 新しい方法 (推奨)

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

＃＃＃３．６．記憶との会話RAG

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

## 4. LlamaIndex RAG — データ フレームワーク アプローチ

＃＃＃４．１．インストール

```bash
pip install llama-index llama-index-llms-openai \
    llama-index-embeddings-openai llama-index-vector-stores-chroma
```

＃＃＃４．２．哲学: ドキュメント → ノード → インデックス

LlamaIndex は LangChain とは異なるアプローチを採用しており、データを第一級市民として扱います。

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

＃＃＃４．３． SimpleDirectoryReader + VectorStoreIndex

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

＃＃＃４．４．クエリ エンジン — 単純なクエリ

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

＃＃＃４．５。チャット エンジン — マルチターン会話

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

＃＃＃４．６．応答シンセサイザー モード

LlamaIndex は、複数の回答集約戦略をサポートしています。

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

## 5. LangChain と LlamaIndex — 詳細な比較

|基準 |ラングチェーン |ラマインデックス |
|----------|-----------|----------|
| **哲学** |オーケストレーション フレームワーク — チェーン/エージェント |データ フレームワーク — インデックス/クエリ |
| **強み** |柔軟なチェーン、ツール呼び出しエージェント、多くの統合 |データ取り込みパイプライン、構造化データ、応答合成 |
| **学習曲線** |中 — 多くの抽象化 |下位 — RAG 用のシンプルな API |
| **RAG セットアップ** | 10 ～ 20 行のコード | 5 ～ 10 行のコード |
| **エージェントサポート** |強い（ReAct、OpenAI機能、カスタム） |はい、しかし成熟度は低い |
| **データ コネクタ** |コミュニティ主導の多数のローダー |内蔵 LlamaHub、100 以上のコネクタ |
| **応答合成** |基本 (スタッフ、マップリデュース、リファイン) |強化 (リファイン、コンパクト、ツリー要約) |
| **構造化された出力** |出力パーサー経由 | Pydantic プログラム経由 |
| **コミュニティ** |非常に大規模で、多くのチュートリアル |大規模で集中的な RAG |
| **実稼働準備完了** | LangSmith トレース、LangServe 展開 | LlamaCloud 管理、LlamaTrace |
| **いつ選択するか** |複雑なエージェント ワークフロー、マルチツール チェーン |データ量の多い RAG、構造化データの抽出 |

> **事実:** 多くの実稼働システムでは、データ取り込みパイプラインに LlamaIndex、エージェント オーケストレーションに LangChain の両方**を使用しています。

---

## 6. 応答合成戦略 — トレードオフ

＃＃＃６．１． 4つの主要戦略

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

＃＃＃６．２．比較表

|戦略 | LLM コール |トークンの使用法 |レイテンシ |精度 |いつ使用するか |
|----------|-----------|---------------|--------|----------|---------------|
| **スタッフ** | 1 |低い |最速 |良い (文脈に適合する場合) |少数のチャンク、大きなモデル コンテキスト |
| **マップリデュース** | N+1 |最高 |遅い |平均 |多くのチャンク、曲が必要です // |
| **絞り込み** | N |曹操 |遅い (順次) |最高 |正確で詳細な回答が必要 |
| **コンパクト** | 1-2 |平均 |速い |良い |デフォルトの選択、バランス |

---

## 7. プロダクション RAG パターン

＃＃＃７．１．ストリーミング応答

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

＃＃＃７．２．出典の帰属と引用

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

## 8. RAGASによる評価

RAGAS (Retrieval Augmented Generation Assessment) は、RAG パイプラインを評価するための標準フレームワークです。

### 8.1。 4 つの主要な指標

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

|メトリクス |何を測定するか |入力 |ターゲット |
|----------|----------|----------|----------|
| **忠実さ** |アンサーはさらに多くを占めていますか？ |質問、回答、コンテキスト | > 0.85 |
| **回答の関連性** | 「Answer」は質問に正しく答えていますか? |質問、回答 | > 0.80 |
| **コンテキストの精度** |関連するチャンクは高いランクを取得できますか? |質問、コンテキスト、グラウンド真実 | > 0.75 |
| **コンテキストの想起** |レトリーバーは十分な情報を得ていますか? |質問、コンテキスト、グラウンド真実 | > 0.80 |

### 8.2。コードの評価

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

### 8.3。指標に基づいて改善する

|低メトリクス |原因 |ソリューション |
|---------------|---------------|----------|
| **忠実さ < 0.85** | LLM は文脈を無視して物事を作り上げました |プロンプトを厳しくし (「コンテキストのみを使用する」)、温度を下げます。
| **回答の関連性 < 0.80** |答えはとりとめのないもので、正解ではありません |プロンプトを改善し、「簡潔にする」を追加しました。
| **コンテキストの精度 < 0.75** | Retriever は無関係なチャンクを取得します。 k を増やす、MMR を使用する、再ランキング |
| **コンテキスト再現率 < 0.80** |取得したチャンク内の情報が欠落しています |チャンキング (オーバーラップ、サイズ) を改善し、ドキュメントを追加します。

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
ティクトケン>=0.7.0
ラガス>=0.2.0
python-dotenv>=1.0.0
```

### 9.3. ingest.py — Indexing Pipeline

```パイソン
"""ingest.py — ドキュメント、チャンクをロードし、埋め込み、Chroma に保存します。"""
OSをインポートする
pathlibインポートパスから
from dotenv import load_dotenv
langchain_community.document_loaders からインポート (
    PyPDFLoader、
    テキストローダー、
    非構造化マークダウンローダー、
）
langchain.text_splitter からインポート RecursiveCharacterTextSplitter
langchain_openai から OpenAIEmbeddings をインポート
langchain_chroma から Chroma をインポート

ロード_dotenv()

DOCS_DIR = パス("ドキュメント")
CHROMA_DIR = パス("chroma_db")
COLLECTION_NAME = "ラグ_チャットボット"


defload_documents() -> リスト:
    """複数のファイルタイプからドキュメントを読み込みます。"""
    ドキュメント = []
    ローダーマップ = {
        ".pdf": PyPDFLoader、
        ".txt": テキストローダー、
        ".md": UnstructedMarkdownLoader、
    }

    DOCS_DIR.rglob("*") の file_path の場合:
        ext = ファイルパス.suffix. lower()
        loaders_map に外部がある場合:
            試してみてください:
                ローダー = ローダー_マップ[ext](str(file_path)）
                読み込まれた=loader.load()
                # メタデータを追加する
                読み込まれた場合:
                    doc.metadata["ファイル名"] = ファイルパス.名
                    doc.metadata["file_type"] = 拡張子
                docs.extend(ロード済み)
                print(f" ✓ ロードされた {file_path.name} ({len(loaded)} ページ)")
            e としての例外を除く:
                print(f" ✗ {file_path.name} のロード中にエラーが発生しました: {e}")

    書類を返送する


def chunk_documents(docs: list) -> リスト:
    """ドキュメントを重複するチャンクに分割します。"""
    スプリッタ = RecursiveCharacterTextSplitter(
        チャンクサイズ=1000、
        chunk_overlap=200、
        length_function=len、
        区切り文字=["\n\n", "\n", ". ", " ", ""],
    ）
    チャンク = スプリッター.split_documents(docs)
    print(f" {len(chunks)} 個のチャンクに分割")
    チャンクを返す


def create_vectorstore(チャンク:リスト) -> クロマ:
    """チャンクを埋め込んで Chroma に保存します。"""
    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

    # 古いコレクションがあれば削除します
    CHROMA_DIR.exists()の場合:
        インポートシュティル
        shutil.rmtree(CHROMA_DIR)
        print("古いベクター ストアをクリアしました")

    Vectorstore = Chroma.from_documents(
        ドキュメント=チャンク、
        embedding=埋め込み、
        persist_directory=str(CHROMA_DIR),
        collection_name=COLLECTION_NAME、
    ）
    カウント = Vectorstore._collection.count()
    print(f" Chroma に {count} 個のベクトルが保存されました")
    ベクトルストアを返す


def main():
    print("=== RAG インデックス作成パイプライン ===\n")

    print("1. ドキュメントをロードしています...")
    docs =load_documents()
    print(f" 合計: {len(docs)} 個のドキュメント\n")

    print("2. チャンク化...")
    チャンク = chunk_documents(docs)
    プリント()

    print("3. 埋め込みと保存...")
    Vectorstore = create_vectorstore(チャンク)
    プリント()

    print("✅インデックス作成完了!")


__name__ == "__main__"の場合:
    メイン()
```

### 9.4. chatbot.py — Conversational RAG

```パイソン
"""chatbot.py — 会話記憶とソース引用を備えた RAG チャットボット。"""
OSをインポートする
pathlibインポートパスから
from dotenv import load_dotenv
langchain_openai からのインポート ChatOpenAI、OpenAIEmbeddings
langchain_chroma から Chroma をインポート
langchain.chains からのインポート create_retrieval_chain、create_history_aware_retriever
langchain.chains.combine_documents からインポート create_stuff_documents_chain
langchain_core.prompts から ChatPromptTemplate、MessagesPlaceholder をインポート
langchain_core.messages から HumanMessage、AIMessage をインポート

ロード_dotenv()

CHROMA_DIR = パス("chroma_db")
COLLECTION_NAME = "ラグ_チャットボット"


def setup_chain():
    """会話メモリを使用して RAG チェーンを初期化します。"""
    # ベクトルストア
    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
    ベクトルストア = クロマ(
        persist_directory=str(CHROMA_DIR),
        embedding_function=埋め込み、
        collection_name=COLLECTION_NAME、
    ）
    レトリーバー = Vectorstore.as_retriever(
        検索タイプ = "mmr",
        search_kwargs={"k": 5, "fetch_k": 10},
    ）

    #LLM
    llm = ChatOpenAI(モデル = "gpt-4o-mini"、温度 = 0)

    # 歴史を意識したレトリーバー
    contextize_prompt = ChatPromptTemplate.from_messages([
        ("system", "チャット履歴と新しい質問を考慮して、再定式化します。"
         「これは独立した質問です。回答しないでください。」)、
        MessagesPlaceholder("chat_history"),
        ("人間", "{input}"),
    ])
    History_retriever = create_history_aware_retriever(
        llm、レトリーバー、contextualize_prompt
    ）

    # 引用付きの QA チェーン
    qa_prompt = ChatPromptTemplate.from_messages([
        ("システム", """あなたは親切なアシスタントです。回答のみに基づいてください。
提供されたコンテキスト。 [出典: ファイル名] 形式を使用して出典を引用します。
答えが文脈を理解していない場合は、「その情報はありません」と言ってください。

コンテキスト:
{コンテキスト}""")、
        MessagesPlaceholder("chat_history"),
        ("人間", "{input}"),
    ])

    qa_chain = create_stuff_documents_chain(llm, qa_prompt)
    return create_retrieval_chain(history_retriever, qa_chain)


def main():
    print("=== RAG チャットボット ===)
    print("終了するには「quit」と入力し、履歴をクリアするには「reset」と入力します\n")

    チェーン = setup_chain()
    チャット履歴 = []

    whileTrue:
        user_input = input("あなた: ").strip()
        user_input でない場合:
            続ける
        if user_input. lower() == "終了":
            print(「さようなら!」)
            休憩する。休憩
        user_input. lower() == "リセット"の場合:
            chat_history.clear()
            print("履歴はクリアされました。\n")
            続ける

        # RAG チェーンを呼び出す
        応答 = チェーン.invoke({
            "入力": ユーザー入力、
            "チャット履歴": チャット履歴,
        })

        答え = 応答["答え"]
        print(f"\nボット: {answer}")

        # ソースを表示
        ソース = set()
        response.get("context", []) のドキュメントの場合:
            fname = doc.metadata.get("ファイル名", "不明")
            ソース.add(fname)
        ソースの場合:
            print(f"📄 ソース: {', '.join(sources)}")
        プリント()

        # 更新履歴
        chat_history.append(HumanMessage(content=user_input))
        chat_history.append(AIMessage(content=answer))

        # コンテキストが長すぎるのを避けるために履歴を制限する
        len(chat_history) > 20の場合:
            チャット履歴 = チャット履歴[-20:]


__name__ == "__main__"の場合:
    メイン()
```

＃＃＃９．５。試運転

```バッシュ
# ステップ 1: セットアップ
echo "OPENAI_API_KEY=sk-..." > .env
mkdir -p ドキュメント
# PDF/TXT/MD ファイルを docs/ に配置します

# ステップ 2: インデックス
Python インジェスト.py

# ステップ 3: チャット
Pythonチャットボット.py
```

```テキスト。テキスト
=== RAG チャットボット ===
終了するには「quit」と入力し、履歴をクリアするには「reset」と入力します。

あなた: 休暇は何日もらえますか?

ボット: 従業員には年間 20 日の休暇が与えられます。 5年間の勤務を経て、
さらに 5 日間 (合計 25 日間) 獲得できます。 [出典:ハンドブック.pdf]
📄 出典: handbook.pdf

あなた：パートタイムの従業員はどうですか？

ボット: パートタイム従業員は、勤務日数に基づいて日割り計算された休暇を受け取ります。
仕事のスケジュール。たとえば、50% の従業員には年間 10 日の休暇が与えられます。
[出典: handbook.pdf、policy.txt]
📄 出典: handbook.pdf、policy.txt

あなた：辞めます
さようなら！
```

---

＃＃ まとめ

この記事では、概念から実稼働コードに至る RAG パイプライン全体について説明します。

|トピックス |重要なポイント |
|--------|-------------|
| **RAG アーキテクチャ** |インデックス作成 → 取得 → 生成、3 つのクリアフェーズ |
| **RAG vs Fine-tuning** | RAG cho knowledge, fine-tuning cho behavior |
| **LangChain RAG** | Flexible chains, `create_retrieval_chain`, conversation memory |
| **LlamaIndex RAG** |データファースト、ドキュメント→ノード→インデックス、複数の応答モード |
| **LangChain 対 LlamaIndex** |オーケストレーションとデータ フレームワーク — 運用環境では両方を使用する |
| **応答合成** |スタッフ (高速)、マップリデュース (スケール)、リファイン (正確) |
| **Production patterns** | Streaming, source attribution, citation |
| **RAGAS evaluation** | 4 metrics: faithfulness, relevancy, precision, recall |

```テキスト。テキスト
RAG パイプラインのチートシート:
┌─────────────────────────┐
│ │
│ ロード → チャンク → 埋め込み → 保存 → 取得 → 回答 │
│ │
│ チャンクサイズ: 500 ～ 1500 文字、重複 10 ～ 20% │
│ レトリーバー: MMR > 類似性 (多様な結果) │
│ 応答: スタッフ (デフォルト)、リファイン (正確) │
│ 評価: RAGAS 忠実度 > 0.85 │
│ 常に: ソースを返し、応答をストリーム │
│ │
━━━━━━━━━━━━━━━━━━━━━━━━━┘
```

---

＃＃ エクササイズ

### 演習 1: Wikipedia の RAG (60 分)

ラングチェーンを使用する `WebBaseLoader` トピックに関する 3 ～ 5 ページの Wikipedia ページをロードします (例: 機械学習、ニューラル ネットワーク、深層学習)。 RAG パイプラインを構築し、10 個の質問でテストします。 RAGASによる評価。

**リクエスト：**
- 少なくとも 3 つの Web サイトをロードします
- Chunk size 800, overlap 150
- 使用 `create_retrieval_chain` とカスタム プロンプト
- 各回答のソース URL を印刷します
- RAGAS 評価を実行し、4 つのメトリクスをレポートします

### 演習 2: LangChain と LlamaIndex を比較する (90 分)

LangChain と LlamaIndex の両方を使用して、同じデータセット上に同じ RAG パイプラインを構築します。比較してください:
- コードの行数
- 応答品質 (RAGAS を使用)
- レイテンシー (応答時間)
- メモリ使用量

**要件:**
- 同じ埋め込みモデル、同じ LLM、同じチャンキング戦略
- 20 個の同様の質問についてテストします
- メトリクスとの比較表を作成する
- コメントを書く: どのフレームワークがどのユースケースに適しているか?

### 演習 3: プロダクション RAG チャットボット (60 分)

セクション 9 のチャットボットを拡張して、次の機能を追加します。
- **ストリーミング** 応答 (各トークンを出力)
- MMR だけではなく **ハイブリッド検索** (キーワード + セマンティック)
- LLM に入れる前に上位の結果を **再ランキング**
- **ログ** 各クエリ → 取得されたチャンク → JSON ファイルへの応答

**ボーナス:** FastAPI エンドポイントを使用してチャットボットをデプロイし、POST リクエストを受信して、ストリーミング レスポンスを返します。
