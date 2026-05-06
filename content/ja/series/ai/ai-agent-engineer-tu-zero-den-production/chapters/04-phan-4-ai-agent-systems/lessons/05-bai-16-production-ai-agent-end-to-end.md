---
id: 019e0a01-bb16-7001-c001-ee1600000001
title: 'レッスン 16: Production AI エージェントの構築 — エンドツーエンド プロジェクト'
slug: bai-16-production-ai-agent-end-to-end
description: >-
  Capstone プロジェクト: 完全な AI エージェント システムを構築します。要件分析、アーキテクチャ設計。 RAG + ツール呼び出し +
  マルチエージェント。会話管理、ストリーミング応答。エラー処理、フォールバック戦略。 AI エージェントのテスト。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 4: AI エージェントとエージェントベースのシステム'
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: 'AI エージェント エンジニア: ゼロから本番環境まで'
  slug: ai-agent-engineer-tu-zero-den-production
locale: ja
---

> **概念、ツール、メモリ、計画、マルチエージェントについて学習しました。次は、これらすべてを実際の製品に組み込むときです。** この頂点のレッスンでは、**AI Research Assistant** を構築します。これは、文書の読み取り、Web の検索、コードの実行、情報の合成、および複雑な質問への回答が可能な実稼働グレードのエージェント システムです。デモ用のおもちゃではありませんが、複製、実行、デプロイできるプロジェクトです。 240 分、約 1500 行のコード、完全な製品。

---

## 1. プロジェクト概要 — AI 研究アシスタント

＃＃＃１．１．製品の目標

**AI Research Assistant** は、研究者を支援するエージェントです。

- **ドキュメントをアップロード** (PDF、テキスト、Web URL) をナレッジ ベースにアップロードします。
- **Q&A** ナレッジベース (RAG) に基づく
- **Web を検索**して最新情報を追加します
- **Python コードを実行**してデータを分析し、計算します
- 複数のソースを**合成**して一貫した回答を得る
- 多くの会話を通じて **コンテキストを記憶**

＃＃＃１．２．機能マトリックス

|能力 |ツール/モジュール |いつ使用するか |
|----------|-----------|---------------|
|ナレッジベースを読む | RAG 検索 (ChromaDB) |ユーザーがアップロードされたコンテンツについて尋ねる |
|新しい情報を見つける |ウェブ検索 (Tavily) | KB に加えてリアルタイム データが必要 |
|コードを実行する | Python エグゼキュータ (サンドボックス) |計算、分析、グラフの描画 |
|概要 |サマライザー |長い答え、複数のソース |
|コンテキストを覚えておいてください |チャット履歴 (SQLite) |すべての会話 |

＃＃＃１．３．デモのプレビュー

```text
┌─────────────────────────────────────────────────────┐
│  AI Research Assistant                               │
├─────────────────────────────────────────────────────┤
│                                                      │
│  User: Tôi vừa upload paper về RAG. So sánh RAG     │
│        truyền thống với Agentic RAG giúp tôi.       │
│                                                      │
│  Agent: [Đang tìm trong knowledge base...]          │
│         [Đang search web cho thông tin mới...]      │
│                                                      │
│  📚 Từ knowledge base (paper đã upload):             │
│  - RAG truyền thống: single retrieval → generate    │
│  - Limitations: one-shot, no self-correction        │
│                                                      │
│  🌐 Từ web search (2024-2025 papers):               │
│  - Agentic RAG: multi-step retrieval + planning     │
│  - Self-RAG, CRAG, Adaptive RAG                     │
│                                                      │
│  📊 Bảng so sánh:                                    │
│  | Feature    | Traditional | Agentic |             │
│  |------------|------------|---------|             │
│  | Retrieval  | Single     | Multi   |             │
│  | Correction | None       | Self    |             │
│  | Planning   | None       | Yes     |             │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

## 2. アーキテクチャ設計

＃＃＃２．１．システムアーキテクチャ

```text
                         ┌─────────────┐
                         │    User     │
                         │  (Browser)  │
                         └──────┬──────┘
                                │ HTTP/WebSocket
                                ▼
                    ┌───────────────────────┐
                    │      FastAPI          │
                    │   (API Gateway)       │
                    │  /chat  /upload  /sessions │
                    └───────────┬───────────┘
                                │
                    ┌───────────▼───────────┐
                    │   Agent Orchestrator  │
                    │     (LangGraph)       │
                    │                       │
                    │  ┌─────────────────┐  │
                    │  │  State Manager  │  │
                    │  │  (messages,     │  │
                    │  │   tool_calls,   │  │
                    │  │   iteration)    │  │
                    │  └─────────────────┘  │
                    └───┬────┬────┬────┬────┘
                        │    │    │    │
              ┌─────────┘    │    │    └─────────┐
              ▼              ▼    ▼              ▼
        ┌──────────┐  ┌─────────┐ ┌──────────┐ ┌──────────┐
        │RAG Search│  │  Web    │ │  Code    │ │Summarizer│
        │  Tool    │  │ Search  │ │ Executor │ │  Tool    │
        │(ChromaDB)│  │(Tavily) │ │(sandbox) │ │  (LLM)   │
        └──────────┘  └─────────┘ └──────────┘ └──────────┘
              │
              ▼
        ┌──────────┐     ┌──────────────┐
        │ ChromaDB │     │   SQLite     │
        │(vectors) │     │(chat history)│
        └──────────┘     └──────────────┘
```

＃＃＃２．２．技術スタック

|レイヤー |テクノロジー |選んだ理由 |
|------|-----------|-----------|
| LLM | OpenAI GPT-4o / オラマ (ローカル) |柔軟性: クラウドまたはローカル |
|エージェントフレームワーク |ランググラフ |ステートマシン、条件付きルーティング |
|ベクトルDB |クロマDB |軽量、組み込み型、セットアップが簡単 |
|埋め込み | OpenAI/文変換 |高品質の RAG |
|ウェブ検索 |タビリー API | AIエージェントに特化 |
| API |ファストAPI |非同期、ストリーミング、自動ドキュメント |
|チャットストレージ | SQLite + aiosqlite |ゼロ構成、非同期サポート |
|コンテナ化 | Docker Compose |ワンコマンドセットアップ |

＃＃＃２．３．データフロー

```text
Document Upload Flow:
  PDF/URL → Extract Text → Chunk (1000 tokens, 200 overlap)
          → Embed (OpenAI/local) → Store in ChromaDB

Query Flow:
  User Question → Agent Orchestrator
       │
       ├─ Route: "cần knowledge base?" → RAG Search
       ├─ Route: "cần info mới?"       → Web Search
       ├─ Route: "cần tính toán?"      → Code Executor
       │
       ▼
  Aggregate Results → Generate Final Answer → Stream to User
```

---

## 3. プロジェクトの構造

```text
ai-research-assistant/
├── docker-compose.yml          # Orchestration
├── Dockerfile                  # App container
├── .env.example                # Environment variables template
├── requirements.txt            # Python dependencies
├── README.md
│
├── app/
│   ├── __init__.py
│   ├── main.py                 # FastAPI entry point
│   ├── config.py               # Settings & configuration
│   │
│   ├── agent/
│   │   ├── __init__.py
│   │   ├── graph.py            # LangGraph agent definition
│   │   ├── state.py            # Agent state schema
│   │   └── nodes.py            # Node functions
│   │
│   ├── tools/
│   │   ├── __init__.py
│   │   ├── rag_search.py       # RAG tool
│   │   ├── web_search.py       # Tavily web search
│   │   ├── code_executor.py    # Sandboxed Python execution
│   │   └── summarizer.py       # Summarization tool
│   │
│   ├── ingestion/
│   │   ├── __init__.py
│   │   ├── pipeline.py         # Document ingestion pipeline
│   │   ├── chunker.py          # Text chunking strategies
│   │   └── extractors.py       # PDF, web extractors
│   │
│   ├── storage/
│   │   ├── __init__.py
│   │   ├── vectorstore.py      # ChromaDB wrapper
│   │   └── chat_history.py     # SQLite chat persistence
│   │
│   └── api/
│       ├── __init__.py
│       ├── routes.py           # API endpoints
│       └── schemas.py          # Pydantic models
│
├── tests/
│   ├── __init__.py
│   ├── test_tools.py           # Unit tests for tools
│   ├── test_agent.py           # Integration tests
│   └── test_api.py             # API tests
│
└── data/
    └── sample_docs/            # Sample documents for testing
        └── sample_paper.txt
```

---

## 4. ステップ 1 — ナレッジベースのセットアップ

＃＃＃４．１．依存関係

作成 `requirements.txt`:

```text
# Core
langchain>=0.3.0
langgraph>=0.2.0
langchain-openai>=0.2.0
langchain-community>=0.3.0

# Vector store
chromadb>=0.5.0
langchain-chroma>=0.1.0

# Embeddings (local option)
sentence-transformers>=3.0.0

# Web search
tavily-python>=0.5.0

# Document processing
pypdf>=4.0.0
beautifulsoup4>=4.12.0
requests>=2.31.0

# API
fastapi>=0.115.0
uvicorn[standard]>=0.30.0
python-multipart>=0.0.9
aiosqlite>=0.20.0

# Utilities
python-dotenv>=1.0.0
pydantic>=2.0.0
pydantic-settings>=2.0.0
```

＃＃＃４．２．構成

`app/config.py`:

```python
from pydantic_settings import BaseSettings
from pathlib import Path


class Settings(BaseSettings):
    # LLM
    openai_api_key: str = ""
    llm_model: str = "gpt-4o-mini"
    embedding_model: str = "text-embedding-3-small"

    # Tavily
    tavily_api_key: str = ""

    # ChromaDB
    chroma_persist_dir: str = "./data/chroma_db"
    collection_name: str = "research_docs"

    # Chunking
    chunk_size: int = 1000
    chunk_overlap: int = 200

    # Agent
    max_iterations: int = 10
    max_execution_time: int = 120  # seconds

    # Chat history
    sqlite_db_path: str = "./data/chat_history.db"

    # Code executor
    code_execution_timeout: int = 30  # seconds

    model_config = {"env_file": ".env", "extra": "ignore"}


settings = Settings()
```

＃＃＃４．３．ドキュメント抽出ツール

`app/ingestion/extractors.py`:

```python
import requests
from bs4 import BeautifulSoup
from pypdf import PdfReader
from pathlib import Path
from io import BytesIO


def extract_from_pdf(file_path: str | None = None,
                     file_bytes: bytes | None = None) -> str:
    """Extract text from PDF file path or bytes."""
    if file_bytes:
        reader = PdfReader(BytesIO(file_bytes))
    elif file_path:
        reader = PdfReader(file_path)
    else:
        raise ValueError("Provide file_path or file_bytes")

    pages = []
    for page in reader.pages:
        text = page.extract_text()
        if text:
            pages.append(text.strip())
    return "\n\n".join(pages)


def extract_from_url(url: str) -> str:
    """Extract main text content from a web URL."""
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (compatible; ResearchAssistant/1.0)"
        )
    }
    resp = requests.get(url, headers=headers, timeout=15)
    resp.raise_for_status()

    soup = BeautifulSoup(resp.text, "html.parser")

    # Remove noise
    for tag in soup(["script", "style", "nav", "footer", "header"]):
        tag.decompose()

    # Extract from article or main content
    article = soup.find("article") or soup.find("main") or soup.body
    if not article:
        return ""

    text = article.get_text(separator="\n", strip=True)
    # Collapse multiple blank lines
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    return "\n".join(lines)


def extract_from_text(file_path: str | None = None,
                      content: str | None = None) -> str:
    """Extract from plain text file or string."""
    if content:
        return content.strip()
    if file_path:
        return Path(file_path).read_text(encoding="utf-8").strip()
    raise ValueError("Provide file_path or content")
```

＃＃＃４．４．テキストチャンカー

`app/ingestion/chunker.py`:

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter
from app.config import settings


def create_chunker() -> RecursiveCharacterTextSplitter:
    """Create a text splitter with configured chunk size."""
    return RecursiveCharacterTextSplitter(
        chunk_size=settings.chunk_size,
        chunk_overlap=settings.chunk_overlap,
        separators=["\n\n", "\n", ". ", " ", ""],
        length_function=len,
    )


def chunk_text(text: str, metadata: dict | None = None) -> list[dict]:
    """Split text into chunks with metadata."""
    chunker = create_chunker()
    chunks = chunker.split_text(text)

    results = []
    for i, chunk in enumerate(chunks):
        chunk_meta = {
            "chunk_index": i,
            "total_chunks": len(chunks),
            **(metadata or {}),
        }
        results.append({"text": chunk, "metadata": chunk_meta})
    return results
```

＃＃＃４．５。ベクトル ストア ラッパー

`app/storage/vectorstore.py`:

```python
import chromadb
from chromadb.config import Settings as ChromaSettings
from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings
from app.config import settings


_client: chromadb.ClientAPI | None = None
_vectorstore: Chroma | None = None


def get_chroma_client() -> chromadb.ClientAPI:
    global _client
    if _client is None:
        _client = chromadb.PersistentClient(
            path=settings.chroma_persist_dir,
            settings=ChromaSettings(anonymized_telemetry=False),
        )
    return _client


def get_vectorstore() -> Chroma:
    """Get or create the Chroma vectorstore with OpenAI embeddings."""
    global _vectorstore
    if _vectorstore is None:
        embeddings = OpenAIEmbeddings(
            model=settings.embedding_model,
            openai_api_key=settings.openai_api_key,
        )
        _vectorstore = Chroma(
            client=get_chroma_client(),
            collection_name=settings.collection_name,
            embedding_function=embeddings,
        )
    return _vectorstore


def add_documents(texts: list[str], metadatas: list[dict]) -> int:
    """Add documents to vector store. Returns count added."""
    store = get_vectorstore()
    store.add_texts(texts=texts, metadatas=metadatas)
    return len(texts)


def similarity_search(query: str, k: int = 5) -> list[dict]:
    """Search for similar documents."""
    store = get_vectorstore()
    docs = store.similarity_search_with_relevance_scores(query, k=k)
    results = []
    for doc, score in docs:
        results.append({
            "content": doc.page_content,
            "metadata": doc.metadata,
            "relevance_score": round(score, 4),
        })
    return results


def get_collection_stats() -> dict:
    """Get stats about the current collection."""
    client = get_chroma_client()
    try:
        col = client.get_collection(settings.collection_name)
        return {"name": settings.collection_name, "count": col.count()}
    except Exception:
        return {"name": settings.collection_name, "count": 0}
```

＃＃＃４．６．インジェストパイプライン

`app/ingestion/pipeline.py`:

```python
from datetime import datetime, timezone
from app.ingestion.extractors import (
    extract_from_pdf,
    extract_from_url,
    extract_from_text,
)
from app.ingestion.chunker import chunk_text
from app.storage.vectorstore import add_documents


def ingest_document(
    source_type: str,
    source_name: str,
    file_path: str | None = None,
    file_bytes: bytes | None = None,
    url: str | None = None,
    content: str | None = None,
) -> dict:
    """
    Full ingestion pipeline: extract → chunk → embed → store.

    Args:
        source_type: "pdf", "url", or "text"
        source_name: Friendly name for the document
        file_path: Path to local file
        file_bytes: Raw bytes (for uploaded files)
        url: Web URL to scrape
        content: Raw text content

    Returns:
        dict with ingestion stats
    """
    # Step 1: Extract
    if source_type == "pdf":
        raw_text = extract_from_pdf(
            file_path=file_path, file_bytes=file_bytes
        )
    elif source_type == "url":
        if not url:
            raise ValueError("URL required for url source_type")
        raw_text = extract_from_url(url)
    elif source_type == "text":
        raw_text = extract_from_text(
            file_path=file_path, content=content
        )
    else:
        raise ValueError(f"Unknown source_type: {source_type}")

    if not raw_text.strip():
        return {"status": "error", "message": "No text extracted"}

    # Step 2: Chunk
    metadata = {
        "source_name": source_name,
        "source_type": source_type,
        "ingested_at": datetime.now(timezone.utc).isoformat(),
    }
    if url:
        metadata["url"] = url

    chunks = chunk_text(raw_text, metadata=metadata)

    # Step 3: Store
    texts = [c["text"] for c in chunks]
    metadatas = [c["metadata"] for c in chunks]
    count = add_documents(texts, metadatas)

    return {
        "status": "success",
        "source_name": source_name,
        "source_type": source_type,
        "raw_text_length": len(raw_text),
        "chunks_created": count,
    }
```

---

## 5. ステップ 2 — ツールの定義

＃＃＃５．１． RAG検索ツール

`app/tools/rag_search.py`:

```python
from langchain_core.tools import tool
from app.storage.vectorstore import similarity_search, get_collection_stats


@tool
def rag_search(query: str, num_results: int = 5) -> str:
    """
    Search the knowledge base for relevant documents.
    Use this when the user asks about content from uploaded documents.

    Args:
        query: The search query
        num_results: Number of results to return (default 5)
    """
    stats = get_collection_stats()
    if stats["count"] == 0:
        return "Knowledge base is empty. No documents have been uploaded yet."

    results = similarity_search(query, k=num_results)

    if not results:
        return f"No relevant documents found for: {query}"

    output_parts = [
        f"Found {len(results)} relevant passages "
        f"(from {stats['count']} total chunks):\n"
    ]
    for i, r in enumerate(results, 1):
        source = r["metadata"].get("source_name", "Unknown")
        score = r["relevance_score"]
        content = r["content"][:500]  # Truncate long chunks
        output_parts.append(
            f"[{i}] (score: {score}) Source: {source}\n{content}\n"
        )
    return "\n".join(output_parts)
```

＃＃＃５．２．ウェブ検索ツール

`app/tools/web_search.py`:

```python
from langchain_core.tools import tool
from tavily import TavilyClient
from app.config import settings


@tool
def web_search(query: str, max_results: int = 5) -> str:
    """
    Search the web for up-to-date information.
    Use this when you need current information not in the knowledge base,
    or to supplement knowledge base results with recent data.

    Args:
        query: The search query
        max_results: Maximum number of results (default 5)
    """
    if not settings.tavily_api_key:
        return "Web search is not configured (missing TAVILY_API_KEY)."

    try:
        client = TavilyClient(api_key=settings.tavily_api_key)
        response = client.search(
            query=query,
            max_results=max_results,
            search_depth="advanced",
            include_answer=True,
        )
    except Exception as e:
        return f"Web search failed: {e}"

    parts = []
    if response.get("answer"):
        parts.append(f"Summary: {response['answer']}\n")

    parts.append("Sources:")
    for i, result in enumerate(response.get("results", []), 1):
        title = result.get("title", "No title")
        url = result.get("url", "")
        snippet = result.get("content", "")[:300]
        parts.append(f"[{i}] {title}\n    URL: {url}\n    {snippet}\n")

    return "\n".join(parts)
```

＃＃＃５．３．サンドボックス化されたコード実行プログラム

`app/tools/code_executor.py`:

```python
import subprocess
import tempfile
import os
from pathlib import Path
from langchain_core.tools import tool
from app.config import settings


@tool
def execute_python(code: str) -> str:
    """
    Execute Python code in a sandboxed environment.
    Use this for calculations, data analysis, or generating results.
    The code runs in an isolated subprocess with limited permissions.

    Args:
        code: Python code to execute. Print results to stdout.
    """
    # Validate: block dangerous operations
    dangerous_patterns = [
        "import os\nos.",
        "import subprocess",
        "import shutil",
        "__import__",
        "eval(",
        "exec(",
        "open('/etc",
        "open('/proc",
        "os.system(",
        "os.popen(",
        "os.remove(",
        "os.rmdir(",
    ]
    code_lower = code.lower()
    for pattern in dangerous_patterns:
        if pattern.lower() in code_lower:
            return f"Blocked: code contains disallowed pattern: {pattern}"

    # Write code to a temp file
    with tempfile.NamedTemporaryFile(
        mode="w", suffix=".py", delete=False, dir=tempfile.gettempdir()
    ) as f:
        f.write(code)
        temp_path = f.name

    try:
        result = subprocess.run(
            ["python3", temp_path],
            capture_output=True,
            text=True,
            timeout=settings.code_execution_timeout,
            cwd=tempfile.gettempdir(),
            env={
                "PATH": os.environ.get("PATH", ""),
                "HOME": tempfile.gettempdir(),
                "PYTHONPATH": "",
            },
        )

        output_parts = []
        if result.stdout:
            output_parts.append(f"Output:\n{result.stdout.strip()}")
        if result.stderr:
            output_parts.append(f"Errors:\n{result.stderr.strip()}")
        if result.returncode != 0:
            output_parts.append(
                f"Exit code: {result.returncode}"
            )

        return "\n".join(output_parts) if output_parts else "Code executed successfully (no output)."

    except subprocess.TimeoutExpired:
        return (
            f"Execution timed out after "
            f"{settings.code_execution_timeout} seconds."
        )
    except Exception as e:
        return f"Execution error: {e}"
    finally:
        Path(temp_path).unlink(missing_ok=True)
```

＃＃＃５．４．サマライザーツール

`app/tools/summarizer.py`:

```python
from langchain_core.tools import tool
from langchain_openai import ChatOpenAI
from app.config import settings


@tool
def summarize_text(text: str, focus: str = "") -> str:
    """
    Summarize a long text into key points.
    Use this when you need to condense large amounts of information.

    Args:
        text: The text to summarize
        focus: Optional focus area for the summary
    """
    if len(text) < 100:
        return text  # Too short to summarize

    llm = ChatOpenAI(
        model=settings.llm_model,
        api_key=settings.openai_api_key,
        temperature=0.3,
    )

    focus_instruction = ""
    if focus:
        focus_instruction = f" Focus on: {focus}."

    prompt = (
        f"Summarize the following text into clear, concise key points."
        f"{focus_instruction}\n\n"
        f"Text:\n{text[:8000]}"  # Limit input
    )

    response = llm.invoke(prompt)
    return response.content
```

＃＃＃５．５。ツールレジストリ

`app/tools/__init__.py`:

```python
from app.tools.rag_search import rag_search
from app.tools.web_search import web_search
from app.tools.code_executor import execute_python
from app.tools.summarizer import summarize_text

ALL_TOOLS = [rag_search, web_search, execute_python, summarize_text]

__all__ = [
    "rag_search",
    "web_search",
    "execute_python",
    "summarize_text",
    "ALL_TOOLS",
]
```

---

## 6. ステップ 3 — LangGraph を使用したエージェントの実装

＃＃＃６．１．エージェントの状態

`app/agent/state.py`:

```python
from typing import Annotated
from typing_extensions import TypedDict
from langgraph.graph.message import add_messages


class AgentState(TypedDict):
    """State schema for the research assistant agent."""
    # Chat messages (accumulated via add_messages reducer)
    messages: Annotated[list, add_messages]
    # Current session ID
    session_id: str
    # Number of agent iterations (safety limit)
    iteration_count: int
    # Final answer flag
    should_end: bool
```

なぜ使用するのでしょうか？ `TypedDict` + `Annotated`?これは標準の LangGraph パターンです。

```text
AgentState Flow:
┌──────────┐    ┌──────────┐    ┌──────────┐
│ messages  │───▶│ add_msg  │───▶│ messages  │
│ [m1, m2] │    │ reducer  │    │[m1,m2,m3]│
└──────────┘    └──────────┘    └──────────┘
      ▲                               │
      │         State immutable       │
      └───────── per step ────────────┘
```

＃＃＃６．２．ノードの機能

`app/agent/nodes.py`:

```python
from langchain_openai import ChatOpenAI
from langchain_core.messages import AIMessage, SystemMessage
from app.agent.state import AgentState
from app.tools import ALL_TOOLS
from app.config import settings

SYSTEM_PROMPT = """You are an AI Research Assistant. You help users with:
- Answering questions from their uploaded knowledge base (use rag_search)
- Finding up-to-date information from the web (use web_search)
- Running Python code for calculations/analysis (use execute_python)
- Summarizing long texts (use summarize_text)

Guidelines:
1. ALWAYS search the knowledge base first if the user asks about documents.
2. Use web search to supplement with recent information.
3. Use code execution for math, data analysis, or when the user asks.
4. Cite your sources: [KB] for knowledge base, [Web] for web results.
5. Be thorough but concise. Use structured formatting.
6. If you don't know something, say so — don't fabricate.
"""


def create_llm():
    """Create the LLM with tools bound."""
    llm = ChatOpenAI(
        model=settings.llm_model,
        api_key=settings.openai_api_key,
        temperature=0.1,
        streaming=True,
    )
    return llm.bind_tools(ALL_TOOLS)


def agent_node(state: AgentState) -> dict:
    """Main agent node: decide next action or respond."""
    messages = state["messages"]
    iteration = state.get("iteration_count", 0)

    # Safety check
    if iteration >= settings.max_iterations:
        return {
            "messages": [
                AIMessage(content=(
                    "I've reached the maximum number of steps. "
                    "Here's what I found so far based on my research."
                ))
            ],
            "should_end": True,
        }

    # Prepend system message if not present
    if not messages or not isinstance(messages[0], SystemMessage):
        messages = [SystemMessage(content=SYSTEM_PROMPT)] + list(messages)

    llm = create_llm()
    response = llm.invoke(messages)

    return {
        "messages": [response],
        "iteration_count": iteration + 1,
    }


def tool_node(state: AgentState) -> dict:
    """Execute tools requested by the agent."""
    from langgraph.prebuilt import ToolNode

    executor = ToolNode(ALL_TOOLS)
    return executor.invoke(state)
```

＃＃＃６．３． LangGraph エージェント — コア

`app/agent/graph.py`:

```python
from langgraph.graph import StateGraph, END
from langchain_core.messages import AIMessage
from app.agent.state import AgentState
from app.agent.nodes import agent_node, tool_node


def should_continue(state: AgentState) -> str:
    """Decide whether to continue, use tools, or end."""
    # Explicit end flag
    if state.get("should_end"):
        return "end"

    messages = state["messages"]
    if not messages:
        return "end"

    last_message = messages[-1]

    # If the last message has tool calls → execute tools
    if isinstance(last_message, AIMessage) and last_message.tool_calls:
        return "tools"

    # Otherwise, agent is done
    return "end"


def build_agent_graph() -> StateGraph:
    """Build and compile the research assistant agent graph."""

    graph = StateGraph(AgentState)

    # Add nodes
    graph.add_node("agent", agent_node)
    graph.add_node("tools", tool_node)

    # Set entry point
    graph.set_entry_point("agent")

    # Conditional edges from agent
    graph.add_conditional_edges(
        "agent",
        should_continue,
        {
            "tools": "tools",
            "end": END,
        },
    )

    # After tools → back to agent
    graph.add_edge("tools", "agent")

    return graph.compile()


# Singleton agent instance
_agent = None


def get_agent():
    global _agent
    if _agent is None:
        _agent = build_agent_graph()
    return _agent
```

グラフフローの視覚化:

```text
Agent Graph:
                    ┌─────────┐
                    │  START   │
                    └────┬────┘
                         │
                         ▼
                  ┌──────────────┐
            ┌────▶│    Agent     │─────────┐
            │     │  (LLM call)  │         │
            │     └──────────────┘         │
            │            │                 │
            │     has_tool_calls?          no tool calls
            │            │                 │
            │            ▼                 ▼
            │     ┌──────────────┐   ┌──────────┐
            │     │    Tools     │   │   END    │
            │     │  (execute)   │   │ (respond)│
            │     └──────┬───────┘   └──────────┘
            │            │
            └────────────┘
         (results back to agent)
```

---

## 7. ステップ 4 — 会話の管理

＃＃＃７．１．チャット履歴の保存

`app/storage/chat_history.py`:

```python
import json
import uuid
import aiosqlite
from datetime import datetime, timezone
from app.config import settings

DB_PATH = settings.sqlite_db_path


async def init_db():
    """Initialize the chat history database."""
    async with aiosqlite.connect(DB_PATH) as db:
        await db.execute("""
            CREATE TABLE IF NOT EXISTS sessions (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL DEFAULT 'New Chat',
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            )
        """)
        await db.execute("""
            CREATE TABLE IF NOT EXISTS messages (
                id TEXT PRIMARY KEY,
                session_id TEXT NOT NULL,
                role TEXT NOT NULL,
                content TEXT NOT NULL,
                tool_calls TEXT,
                created_at TEXT NOT NULL,
                FOREIGN KEY (session_id) REFERENCES sessions(id)
            )
        """)
        await db.execute("""
            CREATE INDEX IF NOT EXISTS idx_messages_session
            ON messages(session_id, created_at)
        """)
        await db.commit()


async def create_session(title: str = "New Chat") -> str:
    """Create a new chat session. Returns session ID."""
    session_id = str(uuid.uuid4())
    now = datetime.now(timezone.utc).isoformat()
    async with aiosqlite.connect(DB_PATH) as db:
        await db.execute(
            "INSERT INTO sessions (id, title, created_at, updated_at) "
            "VALUES (?, ?, ?, ?)",
            (session_id, title, now, now),
        )
        await db.commit()
    return session_id


async def list_sessions(limit: int = 50) -> list[dict]:
    """List recent chat sessions."""
    async with aiosqlite.connect(DB_PATH) as db:
        db.row_factory = aiosqlite.Row
        cursor = await db.execute(
            "SELECT id, title, created_at, updated_at "
            "FROM sessions ORDER BY updated_at DESC LIMIT ?",
            (limit,),
        )
        rows = await cursor.fetchall()
        return [dict(row) for row in rows]


async def save_message(
    session_id: str,
    role: str,
    content: str,
    tool_calls: list | None = None,
):
    """Save a message to chat history."""
    msg_id = str(uuid.uuid4())
    now = datetime.now(timezone.utc).isoformat()
    tc_json = json.dumps(tool_calls) if tool_calls else None

    async with aiosqlite.connect(DB_PATH) as db:
        await db.execute(
            "INSERT INTO messages "
            "(id, session_id, role, content, tool_calls, created_at) "
            "VALUES (?, ?, ?, ?, ?, ?)",
            (msg_id, session_id, role, content, tc_json, now),
        )
        await db.execute(
            "UPDATE sessions SET updated_at = ? WHERE id = ?",
            (now, session_id),
        )
        await db.commit()


async def get_session_messages(
    session_id: str, limit: int = 50
) -> list[dict]:
    """Get messages for a session."""
    async with aiosqlite.connect(DB_PATH) as db:
        db.row_factory = aiosqlite.Row
        cursor = await db.execute(
            "SELECT role, content, tool_calls, created_at "
            "FROM messages WHERE session_id = ? "
            "ORDER BY created_at ASC LIMIT ?",
            (session_id, limit),
        )
        rows = await cursor.fetchall()
        results = []
        for row in rows:
            msg = dict(row)
            if msg["tool_calls"]:
                msg["tool_calls"] = json.loads(msg["tool_calls"])
            results.append(msg)
        return results
```

＃＃＃７．２．ストリーミングのサポート

ストリーミングは UX にとって重要です。ユーザーは長い回答を得るまで 30 秒も待ちたくありません。

```text
Without Streaming:           With Streaming:
┌──────────────┐            ┌──────────────┐
│  ⏳ Loading...│            │  The main    │
│              │            │  difference  │
│  (30 sec)    │            │  between...  │  ← Tokens appear
│              │            │  ▋           │     as generated
│              │            │              │
└──────────────┘            └──────────────┘
  User: 😤                    User: 😊
```

ストリーミングは API 層で処理されます (セクション 8)。

---

## 8. ステップ 5 — API レイヤー

### 8.1。ピダンティック・スキーマ

`app/api/schemas.py`:

```python
from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=10000)
    session_id: str | None = None


class ChatResponse(BaseModel):
    session_id: str
    response: str
    tools_used: list[str] = []


class UploadResponse(BaseModel):
    status: str
    source_name: str
    chunks_created: int


class IngestURLRequest(BaseModel):
    url: str = Field(..., pattern=r"^https?://")
    name: str = Field(..., min_length=1, max_length=200)


class SessionInfo(BaseModel):
    id: str
    title: str
    created_at: str
    updated_at: str


class KBStats(BaseModel):
    collection_name: str
    document_count: int
```

### 8.2。 APIルート

`app/api/routes.py`:

```python
import os
from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from fastapi.responses import StreamingResponse
from langchain_core.messages import HumanMessage, AIMessage
import json

from app.api.schemas import (
    ChatRequest,
    ChatResponse,
    UploadResponse,
    IngestURLRequest,
    SessionInfo,
    KBStats,
)
from app.agent.graph import get_agent
from app.ingestion.pipeline import ingest_document
from app.storage.chat_history import (
    create_session,
    list_sessions,
    save_message,
    get_session_messages,
)
from app.storage.vectorstore import get_collection_stats

router = APIRouter()


@router.post("/chat", response_model=ChatResponse)
async def chat(req: ChatRequest):
    """Send a message to the AI Research Assistant."""
    # Get or create session
    session_id = req.session_id
    if not session_id:
        session_id = await create_session(title=req.message[:50])

    # Save user message
    await save_message(session_id, "user", req.message)

    # Load history
    history = await get_session_messages(session_id, limit=20)
    messages = []
    for msg in history:
        if msg["role"] == "user":
            messages.append(HumanMessage(content=msg["content"]))
        elif msg["role"] == "assistant":
            messages.append(AIMessage(content=msg["content"]))

    # Run agent
    agent = get_agent()
    try:
        result = await agent.ainvoke(
            {
                "messages": messages,
                "session_id": session_id,
                "iteration_count": 0,
                "should_end": False,
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Agent error: {e}")

    # Extract final response
    final_messages = result.get("messages", [])
    response_text = ""
    tools_used = []

    for msg in final_messages:
        if isinstance(msg, AIMessage):
            if msg.content:
                response_text = msg.content
            if msg.tool_calls:
                tools_used.extend(
                    [tc["name"] for tc in msg.tool_calls]
                )

    # Save assistant response
    await save_message(session_id, "assistant", response_text)

    return ChatResponse(
        session_id=session_id,
        response=response_text,
        tools_used=list(set(tools_used)),
    )


@router.post("/chat/stream")
async def chat_stream(req: ChatRequest):
    """Stream response from the AI Research Assistant."""
    session_id = req.session_id
    if not session_id:
        session_id = await create_session(title=req.message[:50])

    await save_message(session_id, "user", req.message)

    history = await get_session_messages(session_id, limit=20)
    messages = []
    for msg in history:
        if msg["role"] == "user":
            messages.append(HumanMessage(content=msg["content"]))
        elif msg["role"] == "assistant":
            messages.append(AIMessage(content=msg["content"]))

    agent = get_agent()

    async def generate():
        full_response = ""
        try:
            async for event in agent.astream_events(
                {
                    "messages": messages,
                    "session_id": session_id,
                    "iteration_count": 0,
                    "should_end": False,
                },
                version="v2",
            ):
                kind = event["event"]

                # Stream LLM tokens
                if kind == "on_chat_model_stream":
                    chunk = event["data"]["chunk"]
                    if chunk.content:
                        full_response += chunk.content
                        yield f"data: {json.dumps({'type': 'token', 'content': chunk.content})}\n\n"

                # Notify tool usage
                elif kind == "on_tool_start":
                    tool_name = event.get("name", "unknown")
                    yield f"data: {json.dumps({'type': 'tool_start', 'tool': tool_name})}\n\n"

                elif kind == "on_tool_end":
                    tool_name = event.get("name", "unknown")
                    yield f"data: {json.dumps({'type': 'tool_end', 'tool': tool_name})}\n\n"

        except Exception as e:
            yield f"data: {json.dumps({'type': 'error', 'content': str(e)})}\n\n"

        # Save full response
        if full_response:
            await save_message(session_id, "assistant", full_response)

        yield f"data: {json.dumps({'type': 'done', 'session_id': session_id})}\n\n"

    return StreamingResponse(
        generate(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "X-Accel-Buffering": "no",
        },
    )


@router.post("/upload", response_model=UploadResponse)
async def upload_document(
    file: UploadFile = File(...),
    name: str = Form(None),
):
    """Upload a document (PDF or text) to the knowledge base."""
    if not file.filename:
        raise HTTPException(400, "No file provided")

    doc_name = name or file.filename
    file_bytes = await file.read()

    # Determine type
    if file.filename.lower().endswith(".pdf"):
        source_type = "pdf"
    else:
        source_type = "text"

    try:
        result = ingest_document(
            source_type=source_type,
            source_name=doc_name,
            file_bytes=file_bytes if source_type == "pdf" else None,
            content=(
                file_bytes.decode("utf-8")
                if source_type == "text" else None
            ),
        )
    except Exception as e:
        raise HTTPException(500, f"Ingestion failed: {e}")

    if result["status"] != "success":
        raise HTTPException(500, result.get("message", "Unknown error"))

    return UploadResponse(
        status="success",
        source_name=doc_name,
        chunks_created=result["chunks_created"],
    )


@router.post("/ingest-url", response_model=UploadResponse)
async def ingest_url(req: IngestURLRequest):
    """Ingest a web page into the knowledge base."""
    try:
        result = ingest_document(
            source_type="url",
            source_name=req.name,
            url=req.url,
        )
    except Exception as e:
        raise HTTPException(500, f"Ingestion failed: {e}")

    if result["status"] != "success":
        raise HTTPException(500, result.get("message", "Unknown error"))

    return UploadResponse(
        status="success",
        source_name=req.name,
        chunks_created=result["chunks_created"],
    )


@router.get("/sessions", response_model=list[SessionInfo])
async def get_sessions():
    """List all chat sessions."""
    sessions = await list_sessions()
    return [SessionInfo(**s) for s in sessions]


@router.get("/sessions/{session_id}/messages")
async def get_messages(session_id: str):
    """Get messages for a specific session."""
    messages = await get_session_messages(session_id)
    return {"session_id": session_id, "messages": messages}


@router.get("/knowledge-base/stats", response_model=KBStats)
async def kb_stats():
    """Get knowledge base statistics."""
    stats = get_collection_stats()
    return KBStats(
        collection_name=stats["name"],
        document_count=stats["count"],
    )
```

### 8.3。 FastAPI エントリ ポイント

`app/main.py`:

```python
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router
from app.storage.chat_history import init_db


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Initialize resources on startup."""
    await init_db()
    yield


app = FastAPI(
    title="AI Research Assistant",
    description="Production AI Agent for research and document Q&A",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api/v1")


@app.get("/health")
async def health():
    return {"status": "ok", "service": "ai-research-assistant"}
```

---

## 9. ステップ 6 — エラー処理とフォールバック戦略

＃＃＃９．１．戦略の概要

```text
Error Handling Layers:
┌─────────────────────────────────────────────┐
│  Layer 1: Tool-level retry                  │
│  - Retry failed API calls (3 attempts)      │
│  - Exponential backoff                      │
│                                             │
│  Layer 2: Agent-level fallback              │
│  - Tool fails → agent explains limitation   │
│  - Max iterations → graceful stop           │
│                                             │
│  Layer 3: API-level error handling          │
│  - Catch all exceptions → HTTP 500          │
│  - Timeout → HTTP 504                       │
│  - Rate limit → HTTP 429 with retry-after   │
└─────────────────────────────────────────────┘
```

＃＃＃９．２．デコレータの再試行

作成 `app/utils.py`:

```python
import asyncio
import functools
import logging
from typing import Callable

logger = logging.getLogger(__name__)


def retry_with_backoff(
    max_retries: int = 3,
    base_delay: float = 1.0,
    max_delay: float = 30.0,
    exceptions: tuple = (Exception,),
):
    """Retry decorator with exponential backoff."""

    def decorator(func: Callable):
        @functools.wraps(func)
        async def async_wrapper(*args, **kwargs):
            last_exception = None
            for attempt in range(max_retries):
                try:
                    return await func(*args, **kwargs)
                except exceptions as e:
                    last_exception = e
                    if attempt < max_retries - 1:
                        delay = min(
                            base_delay * (2 ** attempt), max_delay
                        )
                        logger.warning(
                            "Attempt %d/%d failed: %s. "
                            "Retrying in %.1fs...",
                            attempt + 1,
                            max_retries,
                            e,
                            delay,
                        )
                        await asyncio.sleep(delay)
            raise last_exception

        @functools.wraps(func)
        def sync_wrapper(*args, **kwargs):
            last_exception = None
            for attempt in range(max_retries):
                try:
                    return func(*args, **kwargs)
                except exceptions as e:
                    last_exception = e
                    if attempt < max_retries - 1:
                        delay = min(
                            base_delay * (2 ** attempt), max_delay
                        )
                        logger.warning(
                            "Attempt %d/%d failed: %s. "
                            "Retrying in %.1fs...",
                            attempt + 1,
                            max_retries,
                            e,
                            delay,
                        )
                        import time
                        time.sleep(delay)
            raise last_exception

        if asyncio.iscoroutinefunction(func):
            return async_wrapper
        return sync_wrapper

    return decorator
```

＃＃＃９．３．システムプロンプトでのフォールバック

エージェントは、ツールが失敗した場合に適切に処理するように指示されます。

```text
Fallback chain khi tool fail:
  1. rag_search fails → thông báo "KB unavailable, sẽ dùng web search"
  2. web_search fails  → trả lời từ kiến thức có sẵn của LLM
  3. code_executor fails → giải thích kết quả bằng text
  4. Tất cả fail → "Xin lỗi, tôi gặp lỗi kỹ thuật. Vui lòng thử lại."
```

---

## 10. ステップ 7 — AI エージェントのテスト

### 10.1。ツールの単体テスト

`tests/test_tools.py`:

```python
import pytest
from unittest.mock import patch, MagicMock


class TestRAGSearch:
    """Tests for the RAG search tool."""

    @patch("app.tools.rag_search.get_collection_stats")
    def test_empty_knowledge_base(self, mock_stats):
        mock_stats.return_value = {"name": "test", "count": 0}

        from app.tools.rag_search import rag_search
        result = rag_search.invoke({"query": "test query"})
        assert "empty" in result.lower()

    @patch("app.tools.rag_search.similarity_search")
    @patch("app.tools.rag_search.get_collection_stats")
    def test_search_with_results(self, mock_stats, mock_search):
        mock_stats.return_value = {"name": "test", "count": 10}
        mock_search.return_value = [
            {
                "content": "RAG is a technique...",
                "metadata": {"source_name": "paper.pdf"},
                "relevance_score": 0.92,
            }
        ]

        from app.tools.rag_search import rag_search
        result = rag_search.invoke({"query": "what is RAG"})
        assert "paper.pdf" in result
        assert "0.92" in result


class TestCodeExecutor:
    """Tests for the sandboxed code executor."""

    def test_simple_calculation(self):
        from app.tools.code_executor import execute_python
        result = execute_python.invoke(
            {"code": "print(2 + 2)"}
        )
        assert "4" in result

    def test_blocked_dangerous_code(self):
        from app.tools.code_executor import execute_python
        result = execute_python.invoke(
            {"code": "import subprocess\nsubprocess.run(['ls'])"}
        )
        assert "Blocked" in result

    def test_timeout_handling(self):
        from app.tools.code_executor import execute_python
        result = execute_python.invoke(
            {"code": "import time; time.sleep(999)"}
        )
        assert "timed out" in result.lower()

    def test_syntax_error(self):
        from app.tools.code_executor import execute_python
        result = execute_python.invoke(
            {"code": "def foo(\n  invalid syntax"}
        )
        assert "Error" in result or "error" in result


class TestWebSearch:
    """Tests for the web search tool."""

    @patch("app.tools.web_search.settings")
    def test_missing_api_key(self, mock_settings):
        mock_settings.tavily_api_key = ""

        from app.tools.web_search import web_search
        result = web_search.invoke({"query": "test"})
        assert "not configured" in result.lower()
```

### 10.2。エージェントの統合テスト

`tests/test_agent.py`:

```python
import pytest
from unittest.mock import patch, MagicMock, AsyncMock
from langchain_core.messages import HumanMessage, AIMessage


class TestAgentGraph:
    """Integration tests for the agent graph."""

    @patch("app.agent.nodes.ChatOpenAI")
    def test_simple_question_no_tools(self, mock_llm_class):
        """Agent should respond directly for simple questions."""
        mock_llm = MagicMock()
        mock_response = AIMessage(content="Hello! I'm your assistant.")
        mock_llm.invoke.return_value = mock_response
        mock_llm.bind_tools.return_value = mock_llm
        mock_llm_class.return_value = mock_llm

        from app.agent.graph import build_agent_graph

        graph = build_agent_graph()
        result = graph.invoke({
            "messages": [HumanMessage(content="Hello")],
            "session_id": "test-123",
            "iteration_count": 0,
            "should_end": False,
        })

        assert len(result["messages"]) > 0
        # Last message should be from AI
        last_msg = result["messages"][-1]
        assert isinstance(last_msg, AIMessage)

    def test_max_iterations_safety(self):
        """Agent should stop after max iterations."""
        from app.agent.nodes import agent_node
        from app.config import settings

        state = {
            "messages": [HumanMessage(content="test")],
            "session_id": "test",
            "iteration_count": settings.max_iterations,
            "should_end": False,
        }

        result = agent_node(state)
        assert result["should_end"] is True


class TestAgentRouting:
    """Test that the agent routes correctly."""

    def test_should_continue_with_tool_calls(self):
        from app.agent.graph import should_continue

        # AI message with tool calls → should go to tools
        ai_msg = AIMessage(
            content="",
            tool_calls=[{
                "id": "call_1",
                "name": "rag_search",
                "args": {"query": "test"},
            }],
        )
        state = {
            "messages": [ai_msg],
            "should_end": False,
            "session_id": "test",
            "iteration_count": 1,
        }
        assert should_continue(state) == "tools"

    def test_should_continue_without_tool_calls(self):
        from app.agent.graph import should_continue

        # AI message without tool calls → should end
        ai_msg = AIMessage(content="Here is your answer.")
        state = {
            "messages": [ai_msg],
            "should_end": False,
            "session_id": "test",
            "iteration_count": 1,
        }
        assert should_continue(state) == "end"

    def test_should_end_flag(self):
        from app.agent.graph import should_continue

        state = {
            "messages": [AIMessage(content="Done")],
            "should_end": True,
            "session_id": "test",
            "iteration_count": 5,
        }
        assert should_continue(state) == "end"
```

### 10.3。 APIテスト

`tests/test_api.py`:

```python
import pytest
from httpx import AsyncClient, ASGITransport
from unittest.mock import patch, AsyncMock
from app.main import app


@pytest.fixture
async def client():
    transport = ASGITransport(app=app)
    async with AsyncClient(
        transport=transport, base_url="http://test"
    ) as c:
        yield c


class TestHealthEndpoint:
    @pytest.mark.asyncio
    async def test_health(self, client):
        resp = await client.get("/health")
        assert resp.status_code == 200
        data = resp.json()
        assert data["status"] == "ok"


class TestKBStats:
    @patch("app.api.routes.get_collection_stats")
    @pytest.mark.asyncio
    async def test_kb_stats(self, mock_stats, client):
        mock_stats.return_value = {
            "name": "research_docs",
            "count": 42,
        }
        resp = await client.get("/api/v1/knowledge-base/stats")
        assert resp.status_code == 200
        data = resp.json()
        assert data["document_count"] == 42


class TestSessions:
    @patch("app.api.routes.list_sessions", new_callable=AsyncMock)
    @pytest.mark.asyncio
    async def test_list_sessions(self, mock_list, client):
        mock_list.return_value = [
            {
                "id": "s1",
                "title": "Test",
                "created_at": "2025-01-01T00:00:00Z",
                "updated_at": "2025-01-01T00:00:00Z",
            }
        ]
        resp = await client.get("/api/v1/sessions")
        assert resp.status_code == 200
        data = resp.json()
        assert len(data) == 1
        assert data[0]["id"] == "s1"
```

テストを実行します。

```bash
pytest tests/ -v --tb=short
```

---

## 11. Docker Compose — 完全なシステムを実行する

### 11.1。 Dockerfile

```dockerfile
FROM python:3.12-slim

WORKDIR /app

# Install system deps
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential && \
    rm -rf /var/lib/apt/lists/*

# Install Python deps
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy app code
COPY app/ ./app/
COPY tests/ ./tests/

# Create data directory
RUN mkdir -p /app/data/chroma_db /app/data/sample_docs

# Non-root user
RUN useradd -m -r appuser && \
    chown -R appuser:appuser /app
USER appuser

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

＃＃＃１１．２． Docker Compose

```yaml
# docker-compose.yml
services:
  app:
    build: .
    ports:
      - "8000:8000"
    env_file:
      - .env
    volumes:
      - chroma_data:/app/data/chroma_db
      - chat_data:/app/data
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

volumes:
  chroma_data:
  chat_data:
```

＃＃＃１１．３．環境ファイル

`.env.example`:

```bash
# Required
OPENAI_API_KEY=sk-your-key-here

# Optional — for web search
TAVILY_API_KEY=tvly-your-key-here

# Agent config
LLM_MODEL=gpt-4o-mini
EMBEDDING_MODEL=text-embedding-3-small
MAX_ITERATIONS=10
```

＃＃＃１１．４。起動コマンド

```bash
# 1. Copy environment file
cp .env.example .env
# Edit .env and add your API keys

# 2. Build and run
docker compose up --build

# 3. Verify
curl http://localhost:8000/health
# {"status":"ok","service":"ai-research-assistant"}

# 4. Run tests inside container
docker compose exec app pytest tests/ -v
```

または、ローカルで実行します (Docker なし)。

```bash
# Create virtual environment
python -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Set environment variables
export OPENAI_API_KEY="sk-your-key"
export TAVILY_API_KEY="tvly-your-key"

# Run
uvicorn app.main:app --reload --port 8000
```

---

## 12. デモのウォークスルー

### 12.1。書類のアップロード

```bash
# Upload a PDF
curl -X POST http://localhost:8000/api/v1/upload \
  -F "file=@data/sample_docs/sample_paper.txt" \
  -F "name=RAG Survey Paper"

# Response:
# {
#   "status": "success",
#   "source_name": "RAG Survey Paper",
#   "chunks_created": 15
# }
```

＃＃＃１２．２． URLからの取り込み

```bash
curl -X POST http://localhost:8000/api/v1/ingest-url \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://arxiv.org/abs/2312.10997",
    "name": "Self-RAG Paper"
  }'
```

### 12.3。 Q&A — ナレッジベース

```bash
curl -X POST http://localhost:8000/api/v1/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Tóm tắt RAG Survey Paper đã upload"}'

# Response:
# {
#   "session_id": "abc-123",
#   "response": "Dựa trên paper đã upload, đây là tóm tắt...\n\n
#     [KB] RAG gồm 3 stages chính:\n
#     1. **Indexing**: Documents → chunks → embeddings...\n
#     2. **Retrieval**: Query → similar chunks...\n
#     3. **Generation**: Context + Query → LLM → Answer...",
#   "tools_used": ["rag_search"]
# }
```

＃＃＃１２．４。 Q&A — ウェブ検索 + KB

```bash
curl -X POST http://localhost:8000/api/v1/chat \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "abc-123",
    "message": "So sánh RAG với Agentic RAG, bổ sung thông tin mới nhất"
  }'

# Agent sẽ:
# 1. rag_search("RAG vs Agentic RAG")     → tìm trong KB
# 2. web_search("Agentic RAG 2025")       → tìm trên web
# 3. Tổng hợp cả 2 nguồn → trả lời
```

＃＃＃１２．５。コードの実行

```bash
curl -X POST http://localhost:8000/api/v1/chat \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "abc-123",
    "message": "Tính precision@5 nếu có 3 relevant docs trong top 5 results"
  }'

# Agent sẽ dùng execute_python:
# print(f"Precision@5 = {3/5} = {3/5:.2%}")
# → "Precision@5 = 0.6 = 60.00%"
```

＃＃＃１２．６。サンプルテストドキュメント

作成 `data/sample_docs/sample_paper.txt` テストするには:

```text
Title: A Survey on Retrieval-Augmented Generation (RAG)

Abstract:
Retrieval-Augmented Generation (RAG) combines the strengths of
retrieval-based and generation-based approaches in NLP. This survey
covers the fundamental architecture, key components, and recent
advances in RAG systems.

1. Introduction
RAG was first introduced by Lewis et al. (2020) as a method to
enhance language model outputs by incorporating external knowledge
through retrieval mechanisms. Unlike pure parametric models that
rely solely on learned weights, RAG systems can access and leverage
up-to-date information from external knowledge bases.

2. Architecture
The standard RAG pipeline consists of three main stages:
- Indexing: Documents are split into chunks, encoded into vector
  representations, and stored in a vector database.
- Retrieval: Given a query, the system retrieves the most relevant
  document chunks using similarity search.
- Generation: The retrieved chunks are concatenated with the query
  and fed to a language model to generate the final answer.

3. Advanced RAG Techniques
Recent work has proposed several improvements:
- Self-RAG: The model learns when to retrieve and how to evaluate
  retrieved passages.
- Corrective RAG (CRAG): Adds a correction mechanism to filter
  out irrelevant retrieved documents.
- Adaptive RAG: Dynamically decides the retrieval strategy based
  on query complexity.

4. Evaluation Metrics
Common metrics include:
- Faithfulness: How well the answer is grounded in retrieved docs.
- Answer Relevancy: How relevant the answer is to the query.
- Context Precision: Proportion of relevant chunks in retrieved set.
- Context Recall: Proportion of relevant info that was retrieved.

5. Challenges
Key challenges include hallucination reduction, multi-hop reasoning,
real-time knowledge updates, and balancing retrieval quality with
generation fluency.
```

＃＃＃１２．７。完全なインタラクション フロー

```text
Session Flow:

User: Upload sample_paper.txt
  └─▶ Ingestion Pipeline → 15 chunks → ChromaDB ✓

User: "RAG gồm mấy stage chính?"
  └─▶ Agent → rag_search("RAG stages")
     └─▶ Found 3 relevant chunks (score > 0.8)
     └─▶ Response: "RAG gồm 3 stages: Indexing, Retrieval, Generation..."
     └─▶ tools_used: ["rag_search"]

User: "So sánh Self-RAG và CRAG"
  └─▶ Agent → rag_search("Self-RAG CRAG comparison")
     └─▶ Found in KB about both techniques
     └─▶ web_search("Self-RAG vs CRAG 2025")
     └─▶ Combined response with [KB] and [Web] citations
     └─▶ tools_used: ["rag_search", "web_search"]

User: "Tính nếu Precision@10 = 0.7, Recall@10 = 0.5, F1-score?"
  └─▶ Agent → execute_python(...)
     └─▶ Code: precision=0.7; recall=0.5
              f1 = 2 * (precision * recall) / (precision + recall)
              print(f"F1-Score = {f1:.4f}")
     └─▶ Response: "F1-Score = 0.5833"
     └─▶ tools_used: ["execute_python"]
```

---

## 概要

この最高の記事では、**AI Research Assistant** (実稼働 AI エージェント システム) を完全に構築しました。

- ✅ **アーキテクチャ設計** — 懸念事項を明確に分離した明確なシステム設計
- ✅ **ナレッジベース** — PDF、Web URL、プレーンテキスト → チャンク → ChromaDB の取り込みパイプライン
- ✅ **4 ツール** — RAG 検索、Web 検索 (Tavily)、サンドボックス コード実行、サマライザー
- ✅ **LangGraph エージェント** — 条件付きルーティング、ツール呼び出し、反復安全性を備えたステート マシン
- ✅ **会話管理** — SQLite チャット履歴、セッション管理
- ✅ **ストリーミング API** — リアルタイム応答のためのサーバー送信イベントを備えた FastAPI
- ✅ **エラー処理** — バックオフ、グレースフル デグラデーション、フォールバック チェーンを使用した再試行
- ✅ **テスト** — 単体テスト、統合テスト、モックを使用した API テスト
- ✅ **Docker Compose** — 1 つのコマンドによるデプロイメント
- ✅ **完全なコード** — クローンを作成してすぐに実行できます

コンポーネントの概要表:

|コンポーネント |ファイル |回線コード |
|----------|-----------|----------|
|構成 | `config.py` | ~35 |
|エクストラクター | `extractors.py` | ~55 |
|チャンカー | `chunker.py` | ~25 |
|ベクトルストア | `vectorstore.py` | ~65 |
|取り込みパイプライン | `pipeline.py` | ~60 |
| RAGツール | `rag_search.py` | ~30 |
|ウェブ検索ツール | `web_search.py` | ~35 |
|コードエグゼキューター | `code_executor.py` | ~60 |
|サマライザー | `summarizer.py` | ~30 |
|エージェントの状態 | `state.py` | ~12 |
|エージェントノード | `nodes.py` | ~55 |
|エージェントグラフ | `graph.py` | ~45 |
|チャット履歴 | `chat_history.py` | ~90 |
| API スキーマ | `schemas.py` | ~30 |
| API ルート | `routes.py` | ～180 |
|メインアプリ | `main.py` | ~30 |
|エラーユーティリティ | `utils.py` | ~55 |
|テスト | `test_*.py` | ～160 |
|ドッカー | `Dockerfile`、 `compose` | ~35 |
| **合計** | | **~1100** |

---

## 演習

### 演習 1: ドキュメント管理の追加 (中)

エンドポイントを追加します。

- `GET /api/v1/documents` — アップロードされたすべてのドキュメントのリスト (ChromaDB メタデータからの抜粋)
- `DELETE /api/v1/documents/{name}` — ナレッジベースからドキュメントを削除します
- RAG 検索のフィルター: 特定のドキュメントのみを検索します

### 演習 2: 引用元の追加 (中)

応答形式を拡張して、構造化された引用を返します。

```json
{
  "response": "...",
  "citations": [
    {"source": "paper.pdf", "chunk": "...", "score": 0.92},
    {"source": "web", "url": "https://...", "title": "..."}
  ]
}
```

### 演習 3: マルチユーザー サポート (上級)

- 簡易APIキー認証を追加
- 各ユーザーは独自のナレッジ ベース (個別の ChromaDB コレクション) を持ちます。
- ユーザーごとのセッション分離

### 演習 4: フロントエンド UI (上級)

以下を使用してシンプルなチャット UI を構築します。

- React/Next.js またはプレーン HTML + JavaScript
- SSE ストリーミングはトークンをリアルタイムで表示します
- UIファイルのアップロード
- セッションリストのサイドバー

### 演習 5: 可観測性 (上級)

**LangSmith** または **Langfuse** を次の目的に統合します。

- すべてのエージェントの実行をトレースします
- ツールの使用パターンを監視する
- ツールごとの遅延を追跡
- 回答の質を長期にわたって評価する

