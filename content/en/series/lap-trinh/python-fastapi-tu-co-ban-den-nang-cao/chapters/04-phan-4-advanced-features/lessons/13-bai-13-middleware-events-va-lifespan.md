---
id: 019d8b40-a401-7001-b002-fastapi000401
title: 'Lesson 13: Middleware, Events & Lifespan'
slug: bai-13-middleware-events-va-lifespan
description: >-
  HTTP Middleware, ASGI Middleware, Starlette middleware stack. Lifespan events
  (startup/shutdown), Application state. Custom middleware for logging, timing,
  request ID tracking.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: 'Part 4: Advanced Features'
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: From Basics to Advanced'
  slug: python-fastapi-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-240" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-240)"/>

  <!-- Decorations -->
  <g>
    <circle cx="747" cy="211" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="894" cy="98" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1041" cy="245" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="688" cy="132" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="835" cy="279" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="81" x2="1100" y2="161" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="111" x2="1050" y2="181" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1012.1769145362398,163 1012.1769145362398,199 981,217 949.8230854637602,199 949.8230854637602,163 981,145" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 Programming — Lesson 13</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 13: Middleware, Events & Lifespan</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Advanced Features</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-middleware-overview"><strong>1. Middleware in FastAPI</strong></h2>

<p>Middleware is code that runs before each request and after each response. FastAPI supports two types of middleware: HTTP middleware (easy to write) and ASGI middleware (higher performance).</p>

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

<h2 id="3-pure-asgi-middleware"><strong>3. Pure ASGI Middleware (High Performance)</strong></h2>

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

<h2 id="tong-ket"><strong>Summary</strong></h2>

<p>In this article we learned:</p>

<ul>
<li><strong>HTTP Middleware</strong>: Easy to write with BaseHTTPMiddleware</li>
<li><strong>ASGI Middleware</strong>: High performance for production</li>
<li><strong>Lifespan</strong>: Startup/shutdown events manage resources</li>
<li><strong>AppState</strong>: Share resources between requests</li>
<li><strong>Middleware Order</strong>: Order of execution matters</li>
</ul>

<p>The next article will implement WebSockets and Real-time Communication.</p>
