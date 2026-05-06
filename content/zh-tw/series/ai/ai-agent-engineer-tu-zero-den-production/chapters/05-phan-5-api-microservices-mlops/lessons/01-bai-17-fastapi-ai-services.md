---
id: 019e0a01-bb17-7001-c001-ee1700000001
title: 第 17 課：用於 AI 服務的 FastAPI
slug: bai-17-fastapi-ai-services
description: >-
  FastAPI 基礎：非同步/等待、Pydantic 模型、依賴注入。串流響應 (SSE)。用於即時聊天的
  WebSocket。文件上傳處理。身份驗證、速率限制。 OpenAPI 文件。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 16
section_title: 第 5 部分：API、微服務和 MLOps
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: AI代理工程師：從零到生產
  slug: ai-agent-engineer-tu-zero-den-production
locale: zh-tw
---

> 您已經建立了一個智慧型 AI 代理 - 但*數百萬用戶*如何透過 HTTP 呼叫它？ FastAPI 是最快的、非同步原生的、自產生的 Python 框架 OpenAPI 文件 — 用於 AI 服務生產的完美堆疊。

## 1. 為什麼選擇 FastAPI 來實作 AI 服務？

### 1.1。實際問題

部署AI服務時，您需要解決：

- **串流輸出** - LLM為每個令牌產生文本，使用者需要即時查看它
- **並發請求** — 多個使用者同時呼叫推理，互不阻塞
- **輸入驗證** — 在使用 GPU 之前拒絕不良請求
- **自動文件** — 前端團隊自行閱讀 API 規範，無需召開會議

### 1.2。比較框架

|標準|快速API |燒瓶 |姜戈休息 | Express.js |
|---|---|---|---|---|
|非同步本機 | ✅ 內建 | ❌ WSGI | ❌ WSGI | ✅ |
|自動開放API | ✅ 自發電 | ❌ 外掛程式 | ⚠️DRF | ❌ 外掛 |
| 類型驗證 | ✅ 派丹蒂克 | ❌ 手冊 | ⚠️ 序列化器 | ❌ 手冊 |
| SSE/WebSocket | ✅ 本地人 | ❌ 擴充 | ❌ 頻道 | ✅ |
|性能（RPS）| 〜15,000 | 〜2,000 | 〜1,500 | 〜18,000 |
| Python人工智慧生態系統| ✅ 本地人 | ✅ 本地人 | ✅ 本地人 | ❌橋|

> **結論：** FastAPI = 非同步 + 驗證 + 文件 + Python AI 生態 → AI 服務的最佳選擇。

### 1.3。架構概覽

```
┌─────────────────────────────────────────────────────┐
│                    Client Layer                      │
│  React App │ Mobile App │ CLI Tool │ Other Services  │
└──────┬──────────┬──────────┬──────────┬──────────────┘
       │ HTTP     │ SSE      │ WebSocket│ gRPC
       ▼          ▼          ▼          ▼
┌─────────────────────────────────────────────────────┐
│                FastAPI Application                   │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│  │ Router   │ │ Middleware│ │ Dep.Inj. │            │
│  │ /chat    │ │ Auth     │ │ DB Conn  │            │
│  │ /embed   │ │ RateLimit│ │ LLM Pool │            │
│  │ /upload  │ │ CORS     │ │ Cache    │            │
│  └──────────┘ └──────────┘ └──────────┘            │
│  ┌──────────────────────────────────────┐           │
│  │     Pydantic Models (Validation)      │           │
│  └──────────────────────────────────────┘           │
└──────┬──────────┬──────────┬────────────────────────┘
       │          │          │
       ▼          ▼          ▼
┌──────────┐ ┌──────────┐ ┌──────────┐
│ LLM APIs │ │ Vector DB│ │ Object   │
│ OpenAI   │ │ Qdrant   │ │ Storage  │
│ Claude   │ │ Pinecone │ │ S3/GCS   │
└──────────┘ └──────────┘ └──────────┘
```

## 2.FastAPI 基礎知識

### 2.1。項目設定

```bash
# Tạo project
mkdir ai-service && cd ai-service
python -m venv .venv && source .venv/bin/activate

# Install dependencies
pip install "fastapi[standard]" uvicorn[standard] pydantic-settings
pip install openai anthropic python-multipart python-jose[cryptography]
pip install slowapi redis aiofiles
```

製作資料夾結構：

```
ai-service/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI app entry
│   ├── config.py            # Settings management
│   ├── dependencies.py      # Dependency injection
│   ├── middleware.py         # Custom middleware
│   ├── routers/
│   │   ├── __init__.py
│   │   ├── chat.py          # Chat endpoints
│   │   ├── embeddings.py    # Embedding endpoints
│   │   ├── documents.py     # File upload/RAG
│   │   └── health.py        # Health checks
│   ├── models/
│   │   ├── __init__.py
│   │   ├── requests.py      # Request schemas
│   │   ├── responses.py     # Response schemas
│   │   └── domain.py        # Domain models
│   ├── services/
│   │   ├── __init__.py
│   │   ├── llm_service.py   # LLM abstraction
│   │   ├── rag_service.py   # RAG pipeline
│   │   └── auth_service.py  # Authentication
│   └── utils/
│       ├── __init__.py
│       └── streaming.py     # SSE helpers
├── tests/
├── .env
├── Dockerfile
└── pyproject.toml
```

### 2.2。基本設定應用程式

```python
# app/main.py
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.routers import chat, embeddings, documents, health
from app.dependencies import init_services, cleanup_services


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Startup/shutdown lifecycle — init LLM clients, DB pools."""
    await init_services()
    yield
    await cleanup_services()


app = FastAPI(
    title="AI Service API",
    description="Production AI service with chat, RAG, and embeddings",
    version="1.0.0",
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS — cho phép frontend gọi API
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount routers
app.include_router(health.router, tags=["Health"])
app.include_router(chat.router, prefix="/api/v1", tags=["Chat"])
app.include_router(embeddings.router, prefix="/api/v1", tags=["Embeddings"])
app.include_router(documents.router, prefix="/api/v1", tags=["Documents"])
```

### 2.3。使用 Pydantic 設定進行配置

```python
# app/config.py
from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    # App
    APP_NAME: str = "AI Service"
    DEBUG: bool = False
    API_V1_PREFIX: str = "/api/v1"

    # LLM
    OPENAI_API_KEY: str = ""
    ANTHROPIC_API_KEY: str = ""
    DEFAULT_MODEL: str = "gpt-4o-mini"
    MAX_TOKENS: int = 4096
    TEMPERATURE: float = 0.7

    # Auth
    JWT_SECRET_KEY: str = "change-me-in-production"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    # Rate Limiting
    RATE_LIMIT: str = "60/minute"

    # CORS
    ALLOWED_ORIGINS: list[str] = ["http://localhost:3000"]

    # Redis
    REDIS_URL: str = "redis://localhost:6379"

    model_config = {"env_file": ".env", "extra": "ignore"}


@lru_cache
def get_settings() -> Settings:
    return Settings()

settings = get_settings()
```

### 2.4。依賴注入

依賴注入 (DI) 是 FastAPI 的核心模式 — 管理 LLM 用戶端、資料庫連線、身份驗證的生命週期：

```python
# app/dependencies.py
from typing import AsyncGenerator
from openai import AsyncOpenAI
from anthropic import AsyncAnthropic

from app.config import settings

# Global service instances
_openai_client: AsyncOpenAI | None = None
_anthropic_client: AsyncAnthropic | None = None


async def init_services():
    """Called on startup."""
    global _openai_client, _anthropic_client
    _openai_client = AsyncOpenAI(api_key=settings.OPENAI_API_KEY)
    _anthropic_client = AsyncAnthropic(api_key=settings.ANTHROPIC_API_KEY)


async def cleanup_services():
    """Called on shutdown."""
    global _openai_client, _anthropic_client
    if _openai_client:
        await _openai_client.close()
    if _anthropic_client:
        await _anthropic_client.close()


async def get_openai() -> AsyncOpenAI:
    """Dependency: inject OpenAI client vào endpoint."""
    if _openai_client is None:
        raise RuntimeError("OpenAI client not initialized")
    return _openai_client


async def get_anthropic() -> AsyncAnthropic:
    if _anthropic_client is None:
        raise RuntimeError("Anthropic client not initialized")
    return _anthropic_client
```

## 3. AI 的 Pydantic 模型

### 3.1。請求型號

```python
# app/models/requests.py
from pydantic import BaseModel, Field
from enum import Enum


class Role(str, Enum):
    system = "system"
    user = "user"
    assistant = "assistant"


class Message(BaseModel):
    role: Role
    content: str = Field(..., min_length=1, max_length=100_000)


class ChatRequest(BaseModel):
    """Request body cho /chat endpoint."""
    messages: list[Message] = Field(
        ..., min_length=1, max_length=50,
        description="Conversation history"
    )
    model: str = Field(
        default="gpt-4o-mini",
        pattern=r"^(gpt-4o|gpt-4o-mini|claude-3-5-sonnet|claude-3-5-haiku)$"
    )
    temperature: float = Field(default=0.7, ge=0.0, le=2.0)
    max_tokens: int = Field(default=4096, ge=1, le=16384)
    stream: bool = Field(default=False, description="Enable SSE streaming")
    session_id: str | None = Field(
        default=None, description="Session ID for conversation tracking"
    )

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "messages": [
                        {"role": "user", "content": "Explain RAG in 3 sentences"}
                    ],
                    "model": "gpt-4o-mini",
                    "stream": True,
                }
            ]
        }
    }


class EmbeddingRequest(BaseModel):
    texts: list[str] = Field(..., min_length=1, max_length=100)
    model: str = Field(default="text-embedding-3-small")
```

### 3.2。回應模型

```python
# app/models/responses.py
from pydantic import BaseModel, Field
from datetime import datetime


class TokenUsage(BaseModel):
    prompt_tokens: int
    completion_tokens: int
    total_tokens: int


class ChatResponse(BaseModel):
    """Response body cho /chat endpoint (non-streaming)."""
    id: str = Field(..., description="Unique response ID")
    content: str
    model: str
    usage: TokenUsage
    created_at: datetime = Field(default_factory=datetime.utcnow)
    session_id: str | None = None


class StreamChunk(BaseModel):
    """Mỗi chunk trong SSE stream."""
    id: str
    delta: str  # Text fragment
    finish_reason: str | None = None


class ErrorResponse(BaseModel):
    error: str
    detail: str | None = None
    request_id: str | None = None


class EmbeddingResponse(BaseModel):
    embeddings: list[list[float]]
    model: str
    usage: TokenUsage
```

### 3.3。 Pydantic 驗證的好處

```
Request đến endpoint:
┌──────────────────────────────────────────┐
│ POST /api/v1/chat                        │
│ Body: {"messages": [...], "temp": 5.0}   │
└──────────┬───────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────────┐
│         Pydantic Validation              │
│  ✗ "temp" → unknown field               │
│  ✗ temperature 5.0 → le=2.0 violated    │
│  → 422 Unprocessable Entity              │
│  → Chi tiết lỗi: field, type, message   │
└──────────────────────────────────────────┘
           │ Nếu valid
           ▼
┌──────────────────────────────────────────┐
│        Endpoint handler                  │
│  request.messages → typed, validated     │
│  → Không cần if/else check thủ công     │
└──────────────────────────────────────────┘
```

> **注意：** 由於採用 Rust 編寫的核心，Pydantic v2 的驗證速度比 v1 快 5-50 倍。請務必使用 Pydantic v2 進行 AI 服務。

## 4. AI 推理的非同步/等待

### 4.1。為什麼非同步很重要？

LLM 推理每個請求需要 2-30 秒。使用同步伺服器，每個工作執行緒都會被阻塞，直到推理完成：

```
Sync (4 workers, 8 requests):
┌────┐ ┌────┐ ┌────┐ ┌────┐
│Req1│ │Req2│ │Req3│ │Req4│  ← Processing (2-30s each)
└────┘ └────┘ └────┘ └────┘
Req5, Req6, Req7, Req8 → WAITING ⏳

Async (4 workers, 8 requests):
┌────┐ ┌────┐ ┌────┐ ┌────┐
│Req1│ │Req2│ │Req3│ │Req4│  ← Start inference
│Req5│ │Req6│ │Req7│ │Req8│  ← Pick up immediately
└────┘ └────┘ └────┘ └────┘    (I/O wait, not CPU wait)
```

### 4.2。非同步端點模式

```python
# app/routers/chat.py
import uuid
from fastapi import APIRouter, Depends
from openai import AsyncOpenAI

from app.models.requests import ChatRequest
from app.models.responses import ChatResponse, TokenUsage
from app.dependencies import get_openai

router = APIRouter()


@router.post("/chat", response_model=ChatResponse)
async def chat_completion(
    request: ChatRequest,
    openai_client: AsyncOpenAI = Depends(get_openai),
):
    """Non-streaming chat completion."""
    messages = [{"role": m.role.value, "content": m.content} for m in request.messages]

    # await → non-blocking, event loop handles other requests
    response = await openai_client.chat.completions.create(
        model=request.model,
        messages=messages,
        temperature=request.temperature,
        max_tokens=request.max_tokens,
    )

    choice = response.choices[0]
    return ChatResponse(
        id=f"resp_{uuid.uuid4().hex[:12]}",
        content=choice.message.content or "",
        model=response.model,
        usage=TokenUsage(
            prompt_tokens=response.usage.prompt_tokens,
            completion_tokens=response.usage.completion_tokens,
            total_tokens=response.usage.total_tokens,
        ),
        session_id=request.session_id,
    )
```

### 4.3。並發請求

```python
import asyncio
from openai import AsyncOpenAI


async def batch_inference(
    client: AsyncOpenAI,
    prompts: list[str],
    model: str = "gpt-4o-mini",
) -> list[str]:
    """Gọi nhiều inference song song — nhanh hơn sequential gấp N lần."""
    tasks = [
        client.chat.completions.create(
            model=model,
            messages=[{"role": "user", "content": p}],
        )
        for p in prompts
    ]
    # asyncio.gather chạy tất cả tasks concurrently
    responses = await asyncio.gather(*tasks)
    return [r.choices[0].message.content for r in responses]
```

> **重要：** 使用 `async def` 用於 I/O 綁定（API 呼叫、資料庫查詢）。使用 `def` (sync) 用於 CPU 限制（numpy、映像處理）－FastAPI 在執行緒池中自動執行。

## 5. 使用 SSE 串流回應

### 5.1。什麼是伺服器發送的事件？

SSE 允許伺服器透過單一 HTTP 連線不斷地將資料推送到客戶端：

```
Client                          Server
  │                               │
  │── GET /chat?stream=true ──▶  │
  │                               │── Call LLM API (stream)
  │◀── data: {"delta":"Xin"} ──  │
  │◀── data: {"delta":" chào"}── │
  │◀── data: {"delta":"!"} ──    │
  │◀── data: [DONE] ────────     │
  │                               │
```

### 5.2。實施 SSE 串流

```python
# app/routers/chat.py (thêm streaming endpoint)
import json
from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from openai import AsyncOpenAI

from app.models.requests import ChatRequest
from app.dependencies import get_openai

router = APIRouter()


async def stream_chat_response(
    request: ChatRequest,
    client: AsyncOpenAI,
):
    """Generator cho SSE stream — yield từng chunk."""
    messages = [{"role": m.role.value, "content": m.content} for m in request.messages]
    response_id = f"resp_{uuid.uuid4().hex[:12]}"

    stream = await client.chat.completions.create(
        model=request.model,
        messages=messages,
        temperature=request.temperature,
        max_tokens=request.max_tokens,
        stream=True,  # ← Enable streaming
    )

    async for chunk in stream:
        delta = chunk.choices[0].delta
        finish_reason = chunk.choices[0].finish_reason

        if delta.content:
            data = json.dumps({
                "id": response_id,
                "delta": delta.content,
                "finish_reason": None,
            })
            yield f"data: {data}\n\n"

        if finish_reason:
            data = json.dumps({
                "id": response_id,
                "delta": "",
                "finish_reason": finish_reason,
            })
            yield f"data: {data}\n\n"

    yield "data: [DONE]\n\n"


@router.post("/chat/stream")
async def chat_stream(
    request: ChatRequest,
    openai_client: AsyncOpenAI = Depends(get_openai),
):
    """SSE streaming chat — real-time LLM output."""
    return StreamingResponse(
        stream_chat_response(request, openai_client),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",  # Nginx: disable buffering
        },
    )
```

### 5.3。客戶消費SSE

```python
# Client example — consume SSE stream
import httpx

async def consume_stream():
    async with httpx.AsyncClient(timeout=60.0) as client:
        async with client.stream(
            "POST",
            "http://localhost:8000/api/v1/chat/stream",
            json={
                "messages": [{"role": "user", "content": "Giải thích RAG"}],
                "stream": True,
            },
            headers={"Authorization": "Bearer <token>"},
        ) as response:
            async for line in response.aiter_lines():
                if line.startswith("data: "):
                    data = line[6:]
                    if data == "[DONE]":
                        break
                    chunk = json.loads(data)
                    print(chunk["delta"], end="", flush=True)
```

## 6. 用於即時聊天的 WebSocket

### 6.1。 SSE 與 WebSocket

|標準|上交所 | WebSockets |
|---|---|---|
|溝通方向|伺服器 → 客戶端（1 種方式）|雙向（2 路）|
|協定| HTTP | WS（從 HTTP 升級）|
|重新連線 |自動（事件來源）|手冊|
|使用案例 | LLM 串流輸出 |互動聊天、協作 |
|開銷|低|平均 |

### 6.2。 WebSocket 聊天端點

```python
# app/routers/chat.py (thêm WebSocket)
import json
from fastapi import APIRouter, WebSocket, WebSocketDisconnect, Depends
from openai import AsyncOpenAI
from app.dependencies import get_openai

router = APIRouter()


class ConnectionManager:
    """Quản lý active WebSocket connections."""

    def __init__(self):
        self.active: dict[str, WebSocket] = {}

    async def connect(self, session_id: str, websocket: WebSocket):
        await websocket.accept()
        self.active[session_id] = websocket

    def disconnect(self, session_id: str):
        self.active.pop(session_id, None)

    async def send_json(self, session_id: str, data: dict):
        if ws := self.active.get(session_id):
            await ws.send_json(data)


manager = ConnectionManager()


@router.websocket("/ws/chat/{session_id}")
async def websocket_chat(
    websocket: WebSocket,
    session_id: str,
):
    openai_client = await get_openai()
    await manager.connect(session_id, websocket)
    conversation: list[dict] = []

    try:
        while True:
            # Nhận message từ client
            data = await websocket.receive_json()
            user_msg = data.get("content", "")
            conversation.append({"role": "user", "content": user_msg})

            # Stream response qua WebSocket
            stream = await openai_client.chat.completions.create(
                model=data.get("model", "gpt-4o-mini"),
                messages=conversation,
                stream=True,
            )

            full_response = ""
            async for chunk in stream:
                delta = chunk.choices[0].delta.content or ""
                full_response += delta
                await websocket.send_json({
                    "type": "stream",
                    "delta": delta,
                })

            # Gửi signal hoàn thành
            await websocket.send_json({
                "type": "done",
                "content": full_response,
            })
            conversation.append({"role": "assistant", "content": full_response})

    except WebSocketDisconnect:
        manager.disconnect(session_id)
```

## 7. 檔案上傳與處理

### 7.1。 RAG 的上傳端點

```python
# app/routers/documents.py
import uuid
import aiofiles
from pathlib import Path
from fastapi import APIRouter, UploadFile, File, HTTPException, BackgroundTasks
from pydantic import BaseModel

router = APIRouter()

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)
ALLOWED_TYPES = {
    "application/pdf",
    "text/plain",
    "text/markdown",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
}
MAX_FILE_SIZE = 50 * 1024 * 1024  # 50MB


class UploadResponse(BaseModel):
    document_id: str
    filename: str
    size_bytes: int
    status: str  # "processing" | "completed" | "failed"


@router.post("/documents/upload", response_model=UploadResponse)
async def upload_document(
    background_tasks: BackgroundTasks,
    file: UploadFile = File(..., description="PDF, TXT, MD, or DOCX file"),
):
    # Validate content type
    if file.content_type not in ALLOWED_TYPES:
        raise HTTPException(
            status_code=415,
            detail=f"Unsupported file type: {file.content_type}. "
                   f"Allowed: {', '.join(ALLOWED_TYPES)}",
        )

    # Validate file size (read in chunks to avoid memory spike)
    doc_id = uuid.uuid4().hex[:12]
    file_path = UPLOAD_DIR / f"{doc_id}_{file.filename}"
    total_size = 0

    async with aiofiles.open(file_path, "wb") as out:
        while chunk := await file.read(8192):
            total_size += len(chunk)
            if total_size > MAX_FILE_SIZE:
                # Cleanup partial file
                file_path.unlink(missing_ok=True)
                raise HTTPException(413, "File exceeds 50MB limit")
            await out.write(chunk)

    # Trigger background processing (RAG ingestion)
    background_tasks.add_task(process_document, doc_id, file_path)

    return UploadResponse(
        document_id=doc_id,
        filename=file.filename,
        size_bytes=total_size,
        status="processing",
    )


async def process_document(doc_id: str, file_path: Path):
    """Background task: extract text → chunk → embed → store in vector DB."""
    # Implement: PDF parsing, text chunking, embedding, upsert to Qdrant
    pass
```

### 7.2。流程文件

```
Client                    FastAPI                  Background Worker
  │                          │                          │
  │── POST /upload (PDF) ──▶│                          │
  │                          │── Save to disk ──▶      │
  │                          │── Add background task ──▶│
  │◀── 200 {status:         │                          │
  │    "processing"} ────    │                          │
  │                          │                    ┌─────┴─────┐
  │                          │                    │ Extract    │
  │                          │                    │ text       │
  │                          │                    │ → Chunk    │
  │                          │                    │ → Embed    │
  │                          │                    │ → VectorDB │
  │                          │                    └─────┬─────┘
  │── GET /documents/{id} ──▶│                          │
  │◀── {status:"completed"}─ │                          │
```

## 8. 身分驗證與授權

### 8.1。智威湯遜認證

```python
# app/services/auth_service.py
from datetime import datetime, timedelta, timezone
from fastapi import HTTPException, Security, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError, jwt

from app.config import settings

security = HTTPBearer()


def create_access_token(data: dict, expires_delta: timedelta | None = None) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + (
        expires_delta or timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)


def verify_token(credentials: HTTPAuthorizationCredentials = Security(security)) -> dict:
    """Dependency: verify JWT và trả về payload."""
    try:
        payload = jwt.decode(
            credentials.credentials,
            settings.JWT_SECRET_KEY,
            algorithms=[settings.JWT_ALGORITHM],
        )
        if payload.get("sub") is None:
            raise HTTPException(status_code=401, detail="Invalid token payload")
        return payload
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
            headers={"WWW-Authenticate": "Bearer"},
        )
```

### 8.2。 API金鑰認證

```python
# app/services/auth_service.py (thêm API key support)
from fastapi import Header, HTTPException


API_KEYS_DB: dict[str, dict] = {
    # Trong production: lưu trong database, hash keys
    "sk-prod-abc123": {"user": "frontend-app", "tier": "pro", "rate_limit": 100},
    "sk-prod-def456": {"user": "mobile-app", "tier": "free", "rate_limit": 10},
}


async def verify_api_key(x_api_key: str = Header(..., alias="X-API-Key")) -> dict:
    """Dependency: verify API key từ header."""
    key_data = API_KEYS_DB.get(x_api_key)
    if not key_data:
        raise HTTPException(status_code=403, detail="Invalid API key")
    return key_data
```

### 8.3。在端點中使用身份驗證

```python
# Protect endpoint với JWT
@router.post("/chat", response_model=ChatResponse)
async def chat_completion(
    request: ChatRequest,
    user: dict = Depends(verify_token),        # ← JWT auth
    openai_client: AsyncOpenAI = Depends(get_openai),
):
    # user["sub"] = user ID từ JWT
    ...

# Protect endpoint với API key
@router.post("/embeddings", response_model=EmbeddingResponse)
async def create_embeddings(
    request: EmbeddingRequest,
    api_key_data: dict = Depends(verify_api_key),  # ← API key auth
    openai_client: AsyncOpenAI = Depends(get_openai),
):
    # api_key_data["tier"] = "pro" or "free"
    ...
```

## 9. 速率限制與節流

### 9.1。設定slowapi

```python
# app/middleware.py
from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse


limiter = Limiter(
    key_func=get_remote_address,
    default_limits=["60/minute"],
    storage_uri="redis://localhost:6379/0",  # Production: Redis backend
)


def setup_rate_limiting(app: FastAPI):
    app.state.limiter = limiter
    app.add_middleware(SlowAPIMiddleware)

    @app.exception_handler(RateLimitExceeded)
    async def rate_limit_handler(request: Request, exc: RateLimitExceeded):
        return JSONResponse(
            status_code=429,
            content={
                "error": "rate_limit_exceeded",
                "detail": f"Rate limit exceeded: {exc.detail}",
                "retry_after": exc.detail,
            },
        )
```

### 9.2。對每個端點應用速率限制

```python
from slowapi import Limiter
from app.middleware import limiter

# Endpoint-specific limits
@router.post("/chat")
@limiter.limit("20/minute")  # Chat: 20 req/min (tốn GPU)
async def chat_completion(request: Request, body: ChatRequest, ...):
    ...

@router.post("/embeddings")
@limiter.limit("100/minute")  # Embeddings: 100 req/min (nhẹ hơn)
async def create_embeddings(request: Request, body: EmbeddingRequest, ...):
    ...
```

### 9.3。根據API key分級限速

```python
# Custom key function — rate limit theo user tier
def get_rate_limit_key(request: Request) -> str:
    api_key = request.headers.get("X-API-Key", "anonymous")
    return api_key


# Dynamic limits theo tier
def get_tier_limit(key: str) -> str:
    tier_limits = {
        "free": "10/minute",
        "pro": "100/minute",
        "enterprise": "1000/minute",
    }
    key_data = API_KEYS_DB.get(key, {})
    tier = key_data.get("tier", "free")
    return tier_limits.get(tier, "10/minute")
```

## 10. 後台任務

### 10.1。 FastAPI 後台任務

用於輕型任務（< 30 秒），無需追蹤：

```python
from fastapi import BackgroundTasks

async def log_request(user_id: str, model: str, tokens: int):
    """Background: log usage metrics."""
    # Insert vào analytics DB
    pass

async def update_conversation_history(session_id: str, messages: list):
    """Background: save conversation to DB."""
    pass


@router.post("/chat")
async def chat_completion(
    request: ChatRequest,
    background_tasks: BackgroundTasks,
    openai_client: AsyncOpenAI = Depends(get_openai),
):
    response = await openai_client.chat.completions.create(...)

    # Fire-and-forget background tasks
    background_tasks.add_task(
        log_request, user_id="user_123", model=request.model, tokens=100
    )
    background_tasks.add_task(
        update_conversation_history, request.session_id, request.messages
    )

    return ChatResponse(...)
```

### 10.2。具有狀態追蹤功能的長時間運行的作業

對於繁重的任務（RAG 攝取、批次推理），請使用作業佇列模式：

```python
# app/models/domain.py
from enum import Enum
from pydantic import BaseModel
from datetime import datetime


class JobStatus(str, Enum):
    pending = "pending"
    running = "running"
    completed = "completed"
    failed = "failed"


class Job(BaseModel):
    id: str
    status: JobStatus
    progress: float = 0.0  # 0-100
    result: dict | None = None
    error: str | None = None
    created_at: datetime
    updated_at: datetime


# In-memory job store (production: Redis/DB)
jobs_store: dict[str, Job] = {}
```

```python
# app/routers/documents.py
import uuid
from datetime import datetime, timezone

@router.post("/batch/inference")
async def batch_inference(
    prompts: list[str],
    background_tasks: BackgroundTasks,
):
    job_id = uuid.uuid4().hex[:12]
    now = datetime.now(timezone.utc)
    jobs_store[job_id] = Job(
        id=job_id, status=JobStatus.pending,
        created_at=now, updated_at=now,
    )
    background_tasks.add_task(run_batch_inference, job_id, prompts)
    return {"job_id": job_id, "status": "pending"}


@router.get("/jobs/{job_id}")
async def get_job_status(job_id: str):
    job = jobs_store.get(job_id)
    if not job:
        raise HTTPException(404, "Job not found")
    return job
```

## 11. Error Handling & Health Checks

### 11.1. Structured error handling

```python
# app/main.py (thêm exception handlers)
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from openai import APIError, RateLimitError
import uuid
import logging

logger = logging.getLogger(__name__)


@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    request_id = uuid.uuid4().hex[:8]
    logger.error(f"[{request_id}] Unhandled error: {exc}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={
            "error": "internal_server_error",
            "detail": "An unexpected error occurred",
            "request_id": request_id,
        },
    )


@app.exception_handler(RateLimitError)
async def openai_rate_limit_handler(request: Request, exc: RateLimitError):
    return JSONResponse(
        status_code=503,
        content={
            "error": "llm_rate_limited",
            "detail": "LLM provider rate limit reached. Please retry.",
            "retry_after": 30,
        },
        headers={"Retry-After": "30"},
    )


@app.exception_handler(APIError)
async def openai_api_error_handler(request: Request, exc: APIError):
    logger.error(f"OpenAI API error: {exc}")
    return JSONResponse(
        status_code=502,
        content={
            "error": "llm_provider_error",
            "detail": "LLM provider returned an error",
        },
    )
```

### 11.2. Health checks

```python
# app/routers/health.py
from datetime import datetime, timezone
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class HealthResponse(BaseModel):
    status: str  # "healthy" | "degraded" | "unhealthy"
    timestamp: str
    version: str
    checks: dict[str, str]


@router.get("/health/live")
async def liveness():
    """Liveness probe — app is running?"""
    return {"status": "ok"}


@router.get("/health/ready", response_model=HealthResponse)
async def readiness():
    """Readiness probe — app can serve requests?"""
    checks = {}

    # Check LLM connectivity
    try:
        from app.dependencies import get_openai
        client = await get_openai()
        # Lightweight model list call
        checks["llm"] = "healthy"
    except Exception:
        checks["llm"] = "unhealthy"

    # Check Redis
    try:
        # ping Redis
        checks["redis"] = "healthy"
    except Exception:
        checks["redis"] = "unhealthy"

    overall = "healthy" if all(v == "healthy" for v in checks.values()) else "degraded"

    return HealthResponse(
        status=overall,
        timestamp=datetime.now(timezone.utc).isoformat(),
        version="1.0.0",
        checks=checks,
    )
```

Kubernetes 部署設定使用健康檢查：

```yaml
# k8s manifest snippet
livenessProbe:
  httpGet:
    path: /health/live
    port: 8000
  initialDelaySeconds: 10
  periodSeconds: 30
readinessProbe:
  httpGet:
    path: /health/ready
    port: 8000
  initialDelaySeconds: 5
  periodSeconds: 10
```

## 12. OpenAPI Documentation

### 12.1。自動產生文檔

FastAPI 會自動從類型提示和 Pydantic 模型產生 OpenAPI 模式：

```python
app = FastAPI(
    title="AI Service API",
    description="""
## AI Service API

Production-ready API for:
- 🤖 **Chat completions** (streaming & non-streaming)
- 📐 **Text embeddings** generation
- 📄 **Document upload** for RAG ingestion
- 🔍 **Semantic search** over uploaded documents

### Authentication
All endpoints require either:
- **JWT Bearer token** via `Authorization: Bearer <token>`
- **API Key** via `X-API-金鑰： <key>` header
    """,
    version="1.0.0",
    contact={"name": "AI Team", "email": "ai-team@company.com"},
    license_info={"name": "MIT"},
)
```

存取文件：
- **招搖使用者介面：** `http://localhost:8000/docs`
- **ReDoc：** `http://localhost:8000/redoc`
- **OpenAPI JSON：** `http://localhost:8000/openapi.json`

### 12.2。自訂回應範例

```python
from fastapi import APIRouter

router = APIRouter()

@router.post(
    "/chat",
    response_model=ChatResponse,
    responses={
        200: {
            "description": "Successful chat completion",
            "content": {
                "application/json": {
                    "example": {
                        "id": "resp_a1b2c3d4e5f6",
                        "content": "RAG stands for Retrieval-Augmented Generation...",
                        "model": "gpt-4o-mini",
                        "usage": {
                            "prompt_tokens": 25,
                            "completion_tokens": 150,
                            "total_tokens": 175,
                        },
                    }
                }
            },
        },
        422: {"description": "Validation error"},
        429: {"description": "Rate limit exceeded"},
        503: {"description": "LLM provider unavailable"},
    },
    summary="Chat Completion",
    description="Generate a chat completion response. Supports both streaming and non-streaming modes.",
)
async def chat_completion(request: ChatRequest, ...):
    ...
```

## 13. 完整的人工智慧服務 - 完整範例

下面是完整的 `main.py` 組合所有模式：

```python
# app/main.py — Production AI Service
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.dependencies import init_services, cleanup_services
from app.middleware import setup_rate_limiting
from app.routers import chat, embeddings, documents, health


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_services()
    yield
    await cleanup_services()


app = FastAPI(
    title="AI Service API",
    version="1.0.0",
    lifespan=lifespan,
)

# Middleware stack (order matters — last added = first executed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
setup_rate_limiting(app)

# Routers
app.include_router(health.router, tags=["Health"])
app.include_router(chat.router, prefix="/api/v1", tags=["Chat"])
app.include_router(embeddings.router, prefix="/api/v1", tags=["Embeddings"])
app.include_router(documents.router, prefix="/api/v1", tags=["Documents"])
```

### 13.1。運行和測試

```bash
# Development
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Production với multiple workers
uvicorn app.main:app --host 0.0.0.0 --port 8000 \
    --workers 4 --loop uvloop --http httptools

# Hoặc dùng Gunicorn + Uvicorn workers
gunicorn app.main:app \
    --worker-class uvicorn.workers.UvicornWorker \
    --workers 4 --bind 0.0.0.0:8000 \
    --timeout 120 --graceful-timeout 30
```

### 13.2。用於生產的 Dockerfile

```dockerfile
FROM python:3.12-slim AS base
WORKDIR /app

# Install dependencies first (Docker layer caching)
COPY pyproject.toml .
RUN pip install --no-cache-dir -e ".[prod]"

# Copy application code
COPY app/ app/

# Non-root user
RUN adduser --disabled-password --no-create-home appuser
USER appuser

EXPOSE 8000
CMD ["uvicorn", "app.main:app", \
     "--host", "0.0.0.0", "--port", "8000", \
     "--workers", "4", "--loop", "uvloop"]
```

### 13.3。請求流程摘要

```
┌─────────────────────────────────────────────────────────────┐
│ POST /api/v1/chat                                           │
│ Headers: Authorization: Bearer <jwt>                        │
│ Body: {"messages": [...], "stream": true}                   │
└────────┬────────────────────────────────────────────────────┘
         │
    ┌────▼────┐   ┌──────────┐   ┌──────────┐
    │  CORS   │──▶│RateLimit │──▶│  Router   │
    │Middleware│   │ Middleware│   │ /api/v1/* │
    └─────────┘   └──────────┘   └────┬──────┘
                                      │
                              ┌───────▼───────┐
                              │  Dependencies  │
                              │ verify_token() │
                              │ get_openai()   │
                              └───────┬───────┘
                                      │
                              ┌───────▼───────┐
                              │   Pydantic    │
                              │  Validation   │
                              │ ChatRequest   │
                              └───────┬───────┘
                                      │
                              ┌───────▼───────┐
                              │   Handler     │
                              │chat_stream()  │
                              └───────┬───────┘
                                      │
                              ┌───────▼───────┐
                              │StreamingResp  │
                              │  SSE chunks   │
                              │  data: {...}  │
                              └───────┬───────┘
                                      │
                              ┌───────▼───────┐
                              │BackgroundTask │
                              │ log_request() │
                              │ save_history()│
                              └───────────────┘
```

## 14.備忘單

|圖案|代碼|何時使用 |
|---|---|---|
|非同步端點 | `async def handler()` | I/O 限制（API 呼叫、DB） |
|同步端點 | `def handler()` | CPU 限制（numpy、PIL）|
|上交所直播 | `StreamingResponse(gen, media_type="text/event-stream")` | LLM輸出流|
| WebSockets | `@router.websocket("/ws")` |雙向即時聊天 |
|依賴關係 | `Depends(get_openai)` |注入服務、身份驗證 |
|後台任務| `background_tasks.add_task(fn)` |日誌記錄、資料庫寫入 |
|速率限制 | `@limiter.limit("20/minute")` |保護人工智慧端點 |
| JWT 身份驗證 | `Depends(verify_token)` |用戶認證|
| API 金鑰驗證 | `Depends(verify_api_key)` |服務到服務|
|設定| `pydantic_settings.BaseSettings` |配置管理|
|活力 | `GET /health/live` | K8s：進程還活著嗎？ |
|準備情況| `GET /health/ready` | K8s：可以服務流量嗎？ |
|文件上傳| `UploadFile = File(...)` |文件/圖片上傳 |
|驗證 |派丹提克 `Field(ge=0, le=2)` |输入约束|

## 總結

在本文中，您已經掌握了：

- ✅ **FastAPI 基礎** — 專案架構、應用程式生命週期、CORS、路由
- ✅ **Pydantic 模型** — AI 端點的類型安全請求/回應驗證
- ✅ **Async/Await** — 非阻塞推理、並發 API 調用
- ✅ **SSE 串流** — 即時 LLM 輸出到客戶端
- ✅ **WebSocket** — 雙向即時聊天
- ✅ **檔案上傳** — RAG 攝取的文件處理
- ✅ **驗證** — JWT 令牌 + API 金鑰
- ✅ **速率限制** — 按層保護 AI 端點
- ✅ **後台任務** — 非同步作業處理
- ✅ **錯誤處理** — 結構化錯誤、K8s 的健康檢查
- ✅ **OpenAPI 文件** — 自動產生、生產就緒的文檔

所有這些模式組合成一個**生產級人工智慧服務**——準備部署到 Kubernetes。

## 練習

### 練習 1：多模型聊天 API
建立一個同時支援 OpenAI 和 Anthropic 的 FastAPI 服務：
- 端点 `/chat` 接收场 `provider: "openai" | "anthropic"`
- 使用依賴注入選擇對應的客戶端
- 為兩個提供者實施 SSE 流
- 新增後備：如果主要提供者失敗→自動切換到其他提供者

### 練習 2：RAG 上傳管道
實現完整的文檔上傳+搜尋流程：
- `POST /documents/upload` — 上傳 PDF、驗證、儲存
- 後台任務：擷取文字→區塊（500個標記，50個重疊）→嵌入→存儲
- `POST /documents/search` — 對上傳文件進行語意搜索
- `GET /documents/{id}/status` — 帶有進度百分比的工作跟踪
- 新增速率限制：5 次上傳/分鐘，60 次搜尋/分鐘

### 練習 3：生產強化
為AI服務添加生產功能：
- 實施分級速率限制：基於API金鑰的免費（10/分鐘）、專業版（100/分鐘）、企業（1000/分鐘）
- 新增請求/回應日誌記錄中間件（日誌模型、延遲、令牌計數）
- 實作熔斷機制：如果LLM提供者連續失敗5次→支付503 60秒
- 编写测试 `httpx.AsyncClient` 和 `pytest-asyncio` 对于所有端点
- Dockerize 并测试 `docker compose up`
