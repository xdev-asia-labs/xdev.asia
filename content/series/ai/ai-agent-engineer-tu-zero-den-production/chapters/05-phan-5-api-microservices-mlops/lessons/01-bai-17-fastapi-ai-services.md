---
id: 019e0a01-bb17-7001-c001-ee1700000001
title: "Bài 17: FastAPI cho AI Services"
slug: bai-17-fastapi-ai-services
description: >-
  FastAPI fundamentals: async/await, Pydantic models, dependency injection. Streaming responses (SSE). WebSocket cho real-time chat. File upload processing. Authentication, rate limiting. OpenAPI documentation.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 5: API, Microservices & MLOps"
course:
  id: 019e0a01-aa01-7001-b001-ff0500000001
  title: "AI Agent Engineer: Từ Zero đến Production"
  slug: ai-agent-engineer-tu-zero-den-production
---

> Bạn đã xây dựng được AI Agent thông minh — nhưng làm sao để *hàng triệu người dùng* có thể gọi nó qua HTTP? FastAPI là framework Python nhanh nhất, async-native, tự sinh OpenAPI docs — perfect stack cho AI services production.

## 1. Tại sao FastAPI cho AI Services?

### 1.1. Bài toán thực tế

Khi deploy AI services, bạn cần giải quyết:

- **Streaming output** — LLM sinh text từng token, user cần thấy real-time
- **Concurrent requests** — nhiều user gọi inference cùng lúc, không block nhau
- **Input validation** — reject bad requests trước khi tốn GPU
- **Auto documentation** — team frontend tự đọc API spec, không cần họp

### 1.2. So sánh framework

| Tiêu chí | FastAPI | Flask | Django REST | Express.js |
|---|---|---|---|---|
| Async native | ✅ Built-in | ❌ WSGI | ❌ WSGI | ✅ |
| Auto OpenAPI | ✅ Tự sinh | ❌ Plugin | ⚠️ DRF | ❌ Plugin |
| Type validation | ✅ Pydantic | ❌ Manual | ⚠️ Serializer | ❌ Manual |
| SSE/WebSocket | ✅ Native | ❌ Extension | ❌ Channels | ✅ |
| Performance (RPS) | ~15,000 | ~2,000 | ~1,500 | ~18,000 |
| Python AI ecosystem | ✅ Native | ✅ Native | ✅ Native | ❌ Bridge |

> **Kết luận:** FastAPI = async + validation + docs + Python AI ecosystem → best choice cho AI services.

### 1.3. Kiến trúc tổng quan

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

## 2. FastAPI Fundamentals

### 2.1. Project setup

```bash
# Tạo project
mkdir ai-service && cd ai-service
python -m venv .venv && source .venv/bin/activate

# Install dependencies
pip install "fastapi[standard]" uvicorn[standard] pydantic-settings
pip install openai anthropic python-multipart python-jose[cryptography]
pip install slowapi redis aiofiles
```

Cấu trúc thư mục production:

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

### 2.2. App setup cơ bản

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

### 2.3. Configuration với Pydantic Settings

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

### 2.4. Dependency Injection

Dependency Injection (DI) là pattern cốt lõi trong FastAPI — quản lý lifecycle của LLM clients, DB connections, auth:

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

## 3. Pydantic Models cho AI

### 3.1. Request models

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

### 3.2. Response models

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

### 3.3. Lợi ích của Pydantic validation

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

> **Lưu ý:** Pydantic v2 validate nhanh gấp 5-50x so với v1 nhờ core viết bằng Rust. Luôn dùng Pydantic v2 cho AI services.

## 4. Async/Await cho AI Inference

### 4.1. Tại sao Async quan trọng?

LLM inference tốn 2-30 giây per request. Với sync server, mỗi worker bị block cho đến khi inference xong:

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

### 4.2. Async endpoint pattern

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

### 4.3. Concurrent requests

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

> **Quan trọng:** Dùng `async def` cho I/O-bound (API calls, DB queries). Dùng `def` (sync) cho CPU-bound (numpy, image processing) — FastAPI tự chạy trong threadpool.

## 5. Streaming Responses với SSE

### 5.1. Server-Sent Events là gì?

SSE cho phép server push data liên tục tới client qua một HTTP connection duy nhất:

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

### 5.2. Implement SSE streaming

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

### 5.3. Client-side consume SSE

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

## 6. WebSocket cho Real-time Chat

### 6.1. SSE vs WebSocket

| Tiêu chí | SSE | WebSocket |
|---|---|---|
| Hướng giao tiếp | Server → Client (1 chiều) | Bidirectional (2 chiều) |
| Protocol | HTTP | WS (upgrade từ HTTP) |
| Reconnect | Tự động (EventSource) | Manual |
| Use case | LLM streaming output | Interactive chat, collaborative |
| Overhead | Thấp | Trung bình |

### 6.2. WebSocket chat endpoint

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

## 7. File Upload & Processing

### 7.1. Upload endpoint cho RAG

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

### 7.2. Flow xử lý document

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

## 8. Authentication & Authorization

### 8.1. JWT Authentication

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

### 8.2. API Key authentication

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

### 8.3. Sử dụng auth trong endpoints

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

## 9. Rate Limiting & Throttling

### 9.1. Setup slowapi

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

### 9.2. Áp dụng rate limit per endpoint

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

### 9.3. Tiered rate limiting theo API key

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

## 10. Background Tasks

### 10.1. FastAPI BackgroundTasks

Dùng cho tasks nhẹ (< 30 giây), không cần tracking:

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

### 10.2. Long-running jobs với status tracking

Cho tasks nặng (RAG ingestion, batch inference), dùng job queue pattern:

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

Kubernetes deployment config sử dụng health checks:

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

### 12.1. Tự động sinh docs

FastAPI tự sinh OpenAPI schema từ type hints và Pydantic models:

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
- **API Key** via `X-API-Key: <key>` header
    """,
    version="1.0.0",
    contact={"name": "AI Team", "email": "ai-team@company.com"},
    license_info={"name": "MIT"},
)
```

Truy cập docs:
- **Swagger UI:** `http://localhost:8000/docs`
- **ReDoc:** `http://localhost:8000/redoc`
- **OpenAPI JSON:** `http://localhost:8000/openapi.json`

### 12.2. Custom response examples

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

## 13. Complete AI Service — Full Example

Dưới đây là complete `main.py` kết hợp tất cả patterns:

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

### 13.1. Run & Test

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

### 13.2. Dockerfile cho production

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

### 13.3. Request flow tổng kết

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

## 14. Cheat Sheet

| Pattern | Code | Khi nào dùng |
|---|---|---|
| Async endpoint | `async def handler()` | I/O-bound (API calls, DB) |
| Sync endpoint | `def handler()` | CPU-bound (numpy, PIL) |
| SSE streaming | `StreamingResponse(gen, media_type="text/event-stream")` | LLM output streaming |
| WebSocket | `@router.websocket("/ws")` | Bidirectional real-time chat |
| Dependency | `Depends(get_openai)` | Inject services, auth |
| Background task | `background_tasks.add_task(fn)` | Logging, DB writes |
| Rate limit | `@limiter.limit("20/minute")` | Protect AI endpoints |
| JWT auth | `Depends(verify_token)` | User authentication |
| API key auth | `Depends(verify_api_key)` | Service-to-service |
| Settings | `pydantic_settings.BaseSettings` | Config management |
| Liveness | `GET /health/live` | K8s: process alive? |
| Readiness | `GET /health/ready` | K8s: can serve traffic? |
| File upload | `UploadFile = File(...)` | Document/image upload |
| Validation | Pydantic `Field(ge=0, le=2)` | Input constraints |

## Tổng kết

Trong bài này, bạn đã nắm vững:

- ✅ **FastAPI fundamentals** — project structure, app lifecycle, CORS, routing
- ✅ **Pydantic models** — type-safe request/response validation cho AI endpoints
- ✅ **Async/Await** — non-blocking inference, concurrent API calls
- ✅ **SSE streaming** — real-time LLM output tới client
- ✅ **WebSocket** — bidirectional real-time chat
- ✅ **File upload** — document processing cho RAG ingestion
- ✅ **Authentication** — JWT tokens + API keys
- ✅ **Rate limiting** — protect AI endpoints theo tier
- ✅ **Background tasks** — async job processing
- ✅ **Error handling** — structured errors, health checks cho K8s
- ✅ **OpenAPI docs** — auto-generated, production-ready documentation

Toàn bộ patterns này kết hợp thành **production-grade AI service** — sẵn sàng deploy lên Kubernetes.

## Bài tập

### Bài tập 1: Multi-model Chat API
Xây dựng FastAPI service hỗ trợ cả OpenAI và Anthropic:
- Endpoint `/chat` nhận field `provider: "openai" | "anthropic"`
- Dùng Dependency Injection để chọn client tương ứng
- Implement SSE streaming cho cả 2 providers
- Thêm fallback: nếu provider chính fail → tự switch sang provider còn lại

### Bài tập 2: RAG Upload Pipeline
Implement full document upload + search flow:
- `POST /documents/upload` — upload PDF, validate, save
- Background task: extract text → chunk (500 tokens, 50 overlap) → embed → store
- `POST /documents/search` — semantic search over uploaded docs
- `GET /documents/{id}/status` — job tracking với progress percentage
- Thêm rate limit: 5 uploads/minute, 60 searches/minute

### Bài tập 3: Production Hardening
Thêm production features vào AI service:
- Implement tiered rate limiting: free (10/min), pro (100/min), enterprise (1000/min) dựa trên API key
- Thêm request/response logging middleware (log model, latency, token count)
- Implement circuit breaker: nếu LLM provider fail 5 lần liên tiếp → trả 503 trong 60 giây
- Write tests với `httpx.AsyncClient` và `pytest-asyncio` cho tất cả endpoints
- Dockerize và test với `docker compose up`
