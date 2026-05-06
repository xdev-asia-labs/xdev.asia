---
id: 019c9619-bb16-7016-c016-bb1600000016
title: 'レッスン 16: RAG — A から Z までの検索拡張生成'
slug: bai-16-rag-retrieval-augmented-generation
description: >-
  ドキュメントの読み込み、チャンク化、埋め込み、ベクター ストア、取得から生成に至るまで、RAG パイプラインの包括的な理解。
  HyDE、RAPTOR、Corrective RAG などの高度なテクニックと、LangChain + ChromaDB + OpenAI
  を使用した完全なコードが含まれています。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 4: プロンプトと RAG'
course:
  id: 019c9619-aa01-7001-b001-aa0100000001
  title: 'AI と LLM: 基本から高度まで'
  slug: ai-llm-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🧠 AI と ML — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 16: RAG — 検索の拡張</tspan>
      <tspan x="60" dy="42">AからZまでの世代</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI と LLM: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: プロンプトと RAG</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

# レッスン 16: RAG — A から Z までの検索拡張生成

## 1. 純粋な LLM の問題

GPT-4 や Claude などの LLM は非常に強力なモデルですが、実際に適用すると次の 3 つの主要な制限があります。

**幻覚:** LLM は、見るという意味では「認識」しません。統計的確率に基づいてテキストを *生成*します。確かな情報がない場合、彼らは正しいように聞こえる答えを作成する傾向がありますが、実際には間違っています。

**知識の期限 (期限):** トレーニング データには期限があります。 GPT-4o は、2024 年 4 月以降に発生するイベントを認識していない可能性があります。これは、金融、法律、医療などの急速に変化する分野では深刻な問題です。

**プライベート データ (内部データ):** 会社の文書、内部コードベース、電子メール、プライベート データベース - すべてはトレーニング データには含まれません。 LLM はこの情報に対して完全に「盲目」です。

RAG は、上記の 3 つの問題をすべて解決するために生まれました。

＃＃２ RAGとは何ですか、なぜ効果があるのですか？

**検索拡張生成 (RAG)** は、*情報検索* と *テキスト生成* を組み合わせたアーキテクチャです。 RAG は、パラメトリック メモリ (重み内の知識) に完全に依存するのではなく、*ノンパラメトリック メモリ*、つまり継続的に更新できる外部ドキュメント ストアを LLM に提供します。

**多くのユースケースにおいて、RAG が微調整よりも効果的であるのはなぜですか?**

|基準 |ラグ |微調整 |
|---|---|---|
|データを更新 |ほぼリアルタイム |再トレーニングが必要 |
|コスト |低 (埋め込み + 推論のみ) |高 (GPU 時間) |
|出典を引用 |ナチュラル |難しい |
|コンテンツコントロール |簡単 (コーパス編集) |複雑な |
|に適しています | Q&A、検索、エンタープライズ チャットボット |トーン、スタイル、ドメイン固有のタスク |

## 3. RAG パイプライン: 2 つの主要なフェーズ

RAG は、完全に別個の 2 つのフェーズで構成されます。

### インデックス作成フェーズ (オフライン - 1 回または定期的に実行)

```
Tài liệu thô → Load → Clean → Chunk → Embed → Lưu vào Vector Store
```

### クエリフェーズ (オンライン — ユーザーが質問するたびに実行されます)

```
User query → Embed query → Tìm top-k chunks → Re-rank → Ghép vào prompt → LLM → Response
```

## 4. ドキュメントのロード

最初のステップは、ドキュメントをシステムに取り込むことです。 LangChain は 100 を超えるドキュメント ローダーを提供します。

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

## 5. テキストのチャンク戦略

チャンク化は、RAG の品質に最も大きな影響を与えるステップです。チャンクが小さすぎるとコンテキストが失われ、チャンクが大きすぎるとノイズが発生します。

### 固定サイズのチャンク化

```python
from langchain_text_splitters import CharacterTextSplitter

splitter = CharacterTextSplitter(
    chunk_size=1000,      # ký tự mỗi chunk
    chunk_overlap=200,    # overlap để giữ ngữ cảnh
    separator="\n\n",
)
chunks = splitter.split_documents(docs)
```

### 再帰文字スプリッター (通常のテキストに推奨)

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

### セマンティック チャンキング (最も賢く、最も高価)

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

## 6. モデルの埋め込み

埋め込みは、テキストをセマンティクスをキャプチャする算術ベクトルに変換します。

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

## 7. ベクター ストア

Vector ストアは、エンベディングの保存と検索に特化したデータベースです。

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

## 8. 検索: コサイン類似度と MMR

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

## 9. クロスエンコーダーによる再ランキング

バイエンコーダー (埋め込みに使用) は高速ですが、精度が低くなります。クロスエンコーダーはクエリを各ドキュメントと直接比較します。時間はかかりますが、より正確です。両方を組み合わせるのがベストプラクティスです。

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

## 10. 生成: プロンプトにコンテキストを挿入

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

## 11. 高度な RAG テクニック

### HyDE — 仮説的なドキュメントの埋め込み

クエリ (短くて少ない情報) を直接埋め込む代わりに、LLM を使用して *仮説ドキュメント* を生成し、そのドキュメントを埋め込みます。

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

### コレクティブ RAG (CRAG)

取得後、小さな LLM を使用して各チャンクの *関連性を評価*します。すべてのチャンクの関連性が低い場合は、Web 検索にフォールバックします。

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

### RAPTOR — 再帰的抽象処理

階層ツリーを構築します。ドキュメントをクラスター化→各クラスターを要約→クラスター要約→再度要約します。詳細な質問と一般的な質問の両方に回答できます。

## 12. 完全なコード: RAG パイプラインの完成

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

## 概要

RAG は、実用的な LLM アプリケーションを構築するために不可欠な技術です。標準パイプラインには、**ロード → チャンク → 埋め込み → 保存** (オフライン) および **取得 → 再ランク付け → 生成** (オンライン) が含まれます。 HyDE、RAPTOR、Corrective RAG などの高度な技術を使用すると、実稼働グレードの精度を実現できます。次の記事では、すべての RAG システムのコア コンポーネントである Vector データベースについて詳しく説明します。
