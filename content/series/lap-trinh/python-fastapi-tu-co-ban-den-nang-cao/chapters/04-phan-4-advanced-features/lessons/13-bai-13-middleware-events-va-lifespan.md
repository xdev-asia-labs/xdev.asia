---
id: 019d8b40-a401-7001-b002-fastapi000401
title: 'Bài 13: Middleware, Events & Lifespan'
slug: bai-13-middleware-events-va-lifespan
description: >-
  HTTP Middleware, ASGI Middleware, Starlette middleware stack. Lifespan
  events (startup/shutdown), Application state. Custom middleware cho
  logging, timing, request ID tracking.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Advanced Features"
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: Từ Cơ bản đến Nâng cao'
  slug: python-fastapi-tu-co-ban-den-nang-cao
---

<h2 id="1-middleware-overview"><strong>1. Middleware trong FastAPI</strong></h2>

<p>Middleware là code chạy trước mỗi request và sau mỗi response. FastAPI hỗ trợ 2 loại middleware: HTTP middleware (dễ viết) và ASGI middleware (hiệu năng cao hơn).</p>

<pre><code>Request → Middleware 1 → Middleware 2 → Route Handler
                                              │
Response ← Middleware 1 ← Middleware 2 ←──────┘
</code></pre>

<h2 id="2-http-middleware"><strong>2. HTTP Middleware (BaseHTTPMiddleware)</strong></h2>

<pre><code class="language-python"># app/middleware/logging.py
import time
import logging

from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import Response

logger = logging.getLogger(__name__)


class LoggingMiddleware(BaseHTTPMiddleware):
    """Log mọi request/response với timing."""

    async def dispatch(self, request: Request, call_next) -> Response:
        # Before request
        start_time = time.perf_counter()
        request_id = getattr(request.state, "request_id", "unknown")

        logger.info(
            "Request started",
            extra={
                "request_id": request_id,
                "method": request.method,
                "path": request.url.path,
                "client": request.client.host if request.client else "unknown",
            },
        )

        # Process request
        try:
            response = await call_next(request)
        except Exception as exc:
            logger.error(f"Request failed: {exc}", exc_info=True)
            raise

        # After request
        process_time = time.perf_counter() - start_time
        response.headers["X-Process-Time"] = f"{process_time:.4f}"

        logger.info(
            "Request completed",
            extra={
                "request_id": request_id,
                "status_code": response.status_code,
                "process_time": f"{process_time:.4f}s",
            },
        )

        return response
</code></pre>

<h2 id="3-pure-asgi-middleware"><strong>3. Pure ASGI Middleware (Hiệu năng cao)</strong></h2>

<pre><code class="language-python"># app/middleware/timing.py
import time
from starlette.types import ASGIApp, Receive, Scope, Send


class TimingMiddleware:
    """Pure ASGI middleware - hiệu năng cao hơn BaseHTTPMiddleware."""

    def __init__(self, app: ASGIApp):
        self.app = app

    async def __call__(self, scope: Scope, receive: Receive, send: Send):
        if scope["type"] != "http":
            await self.app(scope, receive, send)
            return

        start_time = time.perf_counter()

        async def send_wrapper(message):
            if message["type"] == "http.response.start":
                process_time = time.perf_counter() - start_time
                headers = list(message.get("headers", []))
                headers.append(
                    (b"x-process-time", f"{process_time:.6f}".encode())
                )
                message["headers"] = headers
            await send(message)

        await self.app(scope, receive, send_wrapper)
</code></pre>

<h2 id="4-lifespan"><strong>4. Lifespan Events</strong></h2>

<pre><code class="language-python"># app/main.py
from contextlib import asynccontextmanager

import redis.asyncio as redis
from fastapi import FastAPI

from app.config import settings
from app.core.database import engine, Base


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Application lifespan manager.
    Code trước 'yield' chạy khi startup.
    Code sau 'yield' chạy khi shutdown.
    """
    # ===== STARTUP =====
    print("🚀 Starting application...")

    # Initialize database
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    print("✅ Database initialized")

    # Initialize Redis
    app.state.redis = redis.from_url(
        settings.redis_url,
        encoding="utf-8",
        decode_responses=True,
    )
    print("✅ Redis connected")

    # Initialize other services
    # app.state.email_service = EmailService()
    # app.state.storage = S3Storage()

    print("✅ Application started successfully")

    yield  # ===== APPLICATION IS RUNNING =====

    # ===== SHUTDOWN =====
    print("🛑 Shutting down application...")

    # Close Redis
    await app.state.redis.close()
    print("✅ Redis disconnected")

    # Close database
    await engine.dispose()
    print("✅ Database connections closed")

    print("✅ Application shut down successfully")


app = FastAPI(
    title="FastAPI Tutorial",
    lifespan=lifespan,
)
</code></pre>

<h2 id="5-app-state"><strong>5. Application State</strong></h2>

<pre><code class="language-python"># Truy cập app state trong routes
from fastapi import FastAPI, Request

app = FastAPI()

@app.get("/cache/{key}")
async def get_cache(key: str, request: Request):
    """Truy cập Redis thông qua app state."""
    redis = request.app.state.redis
    value = await redis.get(f"cache:{key}")
    return {"key": key, "value": value}


@app.post("/cache/{key}")
async def set_cache(key: str, value: str, request: Request):
    redis = request.app.state.redis
    await redis.setex(f"cache:{key}", 3600, value)
    return {"message": "Cached"}
</code></pre>

<h2 id="6-middleware-order"><strong>6. Middleware Order</strong></h2>

<pre><code class="language-python"># app/main.py - Middleware được thêm theo thứ tự NGƯỢC
# Middleware cuối cùng được thêm sẽ chạy ĐẦU TIÊN

from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.trustedhost import TrustedHostMiddleware

from app.middleware.logging import LoggingMiddleware
from app.middleware.security import SecurityHeadersMiddleware
from app.middleware.request_id import RequestIDMiddleware

# Thêm theo thứ tự ngược (last added = first executed)
app.add_middleware(LoggingMiddleware)           # 3. Logging
app.add_middleware(SecurityHeadersMiddleware)   # 2. Security headers
app.add_middleware(RequestIDMiddleware)         # 1. Request ID (chạy đầu tiên)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
)

# Execution order:
# Request  → RequestID → Security → Logging → Route
# Response ← RequestID ← Security ← Logging ← Route
</code></pre>

<h2 id="tong-ket"><strong>Tổng kết</strong></h2>

<p>Trong bài này đã tìm hiểu:</p>

<ul>
<li><strong>HTTP Middleware</strong>: Dễ viết với BaseHTTPMiddleware</li>
<li><strong>ASGI Middleware</strong>: Hiệu năng cao cho production</li>
<li><strong>Lifespan</strong>: Startup/shutdown events quản lý resources</li>
<li><strong>App State</strong>: Chia sẻ resources giữa requests</li>
<li><strong>Middleware Order</strong>: Thứ tự thực thi quan trọng</li>
</ul>

<p>Bài tiếp theo sẽ triển khai WebSockets và Real-time Communication.</p>
