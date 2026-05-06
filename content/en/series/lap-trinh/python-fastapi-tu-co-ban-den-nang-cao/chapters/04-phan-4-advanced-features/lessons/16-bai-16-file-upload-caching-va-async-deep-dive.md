---
id: 019d8b40-a404-7001-b002-fastapi000404
title: 'Lesson 16: File Upload, Caching & Async Deep Dive'
slug: bai-16-file-upload-caching-va-async-deep-dive
description: >-
  File upload streaming, UploadFile, multipart forms. Redis caching with
  fastapi-cache2. Async/await deep dive: asyncio, concurrent tasks, semaphores,
  async generators. httpx for async HTTP clients.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 16
section_title: 'Part 4: Advanced Features'
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: From Basics to Advanced'
  slug: python-fastapi-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6417" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6417)"/>

  <!-- Decorations -->
  <g>
    <circle cx="816" cy="258" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1032" cy="74" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="748" cy="150" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="964" cy="226" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="680" cy="42" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="218" x2="1100" y2="298" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="248" x2="1050" y2="318" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="946.5788383248864,101.5 946.5788383248864,134.5 918,151 889.4211616751136,134.5 889.4211616751135,101.50000000000001 918,85" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 Programming — Lesson 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 16: File Upload, Caching & Async Deep</tspan>
      <tspan x="60" dy="42">Dive</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Advanced Features</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-file-upload"><strong>1. File Upload</strong></h2>

<pre><code class="language-python">import os
import uuid
from pathlib import Path

from fastapi import APIRouter, File, HTTPException, UploadFile

router = APIRouter(prefix="/files", tags=["Files"])

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

ALLOWED_TYPES = {"image/jpeg", "image/png", "image/webp", "application/pdf"}
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB


@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    """Upload single file."""
    # Validate content type
    if file.content_type not in ALLOWED_TYPES:
        raise HTTPException(400, f"File type {file.content_type} not allowed")

    # Validate size
    contents = await file.read()
    if len(contents) > MAX_FILE_SIZE:
        raise HTTPException(400, "File too large (max 10MB)")

    # Generate unique filename
    ext = Path(file.filename or "file").suffix
    filename = f"{uuid.uuid4()}{ext}"
    filepath = UPLOAD_DIR / filename

    # Save file
    with open(filepath, "wb") as f:
        f.write(contents)

    return {
        "filename": filename,
        "original_name": file.filename,
        "content_type": file.content_type,
        "size": len(contents),
        "url": f"/uploads/{filename}",
    }


@router.post("/upload-streaming")
async def upload_large_file(file: UploadFile = File(...)):
    """Upload file lớn với streaming (không load toàn bộ vào memory)."""
    if file.content_type not in ALLOWED_TYPES:
        raise HTTPException(400, "File type not allowed")

    ext = Path(file.filename or "file").suffix
    filename = f"{uuid.uuid4()}{ext}"
    filepath = UPLOAD_DIR / filename

    total_size = 0
    chunk_size = 1024 * 1024  # 1MB chunks

    with open(filepath, "wb") as f:
        while chunk := await file.read(chunk_size):
            total_size += len(chunk)
            if total_size > MAX_FILE_SIZE:
                os.unlink(filepath)
                raise HTTPException(400, "File too large")
            f.write(chunk)

    return {"filename": filename, "size": total_size}


@router.post("/upload-multiple")
async def upload_multiple_files(files: list[UploadFile] = File(...)):
    """Upload nhiều files cùng lúc."""
    results = []
    for file in files[:10]:  # Max 10 files
        contents = await file.read()
        ext = Path(file.filename or "file").suffix
        filename = f"{uuid.uuid4()}{ext}"
        filepath = UPLOAD_DIR / filename

        with open(filepath, "wb") as f:
            f.write(contents)

        results.append({
            "filename": filename,
            "original_name": file.filename,
            "size": len(contents),
        })
    return results
</code></pre>

<h2 id="2-redis-caching"><strong>2. Redis Caching</strong></h2>

<pre><code class="language-bash">uv add fastapi-cache2[redis]
</code></pre>

<pre><code class="language-python"># app/core/cache.py
from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend
from fastapi_cache.decorator import cache
import redis.asyncio as redis

from app.config import settings


async def init_cache():
    """Khởi tạo Redis cache (gọi trong lifespan)."""
    redis_client = redis.from_url(
        settings.redis_url,
        encoding="utf-8",
        decode_responses=True,
    )
    FastAPICache.init(RedisBackend(redis_client), prefix="fastapi-cache:")


# Sử dụng trong routes
from fastapi import APIRouter

router = APIRouter()


@router.get("/items/{item_id}")
@cache(expire=60)  # Cache 60 giây
async def get_item(item_id: int):
    """Response được cache trong Redis."""
    # Expensive operation...
    return {"item_id": item_id, "data": "expensive_result"}


@router.get("/stats")
@cache(expire=300)  # Cache 5 phút
async def get_stats():
    """Statistics - cache lâu hơn."""
    return {"users": 1000, "posts": 5000}
</code></pre>

<h3 id="custom-cache"><strong>Custom Cache Helper</strong></h3>

<pre><code class="language-python"># app/core/cache_helper.py
import json
from typing import Any

import redis.asyncio as redis


class CacheService:
    def __init__(self, redis_client: redis.Redis):
        self.redis = redis_client

    async def get(self, key: str) -> Any | None:
        value = await self.redis.get(key)
        if value:
            return json.loads(value)
        return None

    async def set(self, key: str, value: Any, expire: int = 3600) -> None:
        await self.redis.setex(key, expire, json.dumps(value, default=str))

    async def delete(self, key: str) -> None:
        await self.redis.delete(key)

    async def delete_pattern(self, pattern: str) -> None:
        """Xóa tất cả keys theo pattern."""
        async for key in self.redis.scan_iter(match=pattern):
            await self.redis.delete(key)

    async def get_or_set(self, key: str, factory, expire: int = 3600) -> Any:
        """Get từ cache, nếu không có thì gọi factory và cache."""
        value = await self.get(key)
        if value is not None:
            return value
        value = await factory()
        await self.set(key, value, expire)
        return value


# Sử dụng
@router.get("/users/{user_id}")
async def get_user(user_id: int, request: Request):
    cache = CacheService(request.app.state.redis)

    user = await cache.get_or_set(
        f"user:{user_id}",
        lambda: fetch_user_from_db(user_id),
        expire=300,
    )
    return user
</code></pre>

<h2 id="3-async-deep-dive"><strong>3. Async Deep Dive</strong></h2>

<h3 id="concurrent-tasks"><strong>Concurrent Tasks</strong></h3>

<pre><code class="language-python">import asyncio
import httpx
from fastapi import APIRouter

router = APIRouter()


@router.get("/dashboard")
async def dashboard():
    """Gọi nhiều services song song."""
    async with httpx.AsyncClient() as client:
        # Chạy 3 requests ĐỒNG THỜI
        users_task = client.get("http://user-service/users/count")
        posts_task = client.get("http://post-service/posts/count")
        orders_task = client.get("http://order-service/orders/recent")

        users_resp, posts_resp, orders_resp = await asyncio.gather(
            users_task, posts_task, orders_task,
            return_exceptions=True,  # Không crash nếu 1 task fail
        )

    return {
        "users": users_resp.json() if not isinstance(users_resp, Exception) else None,
        "posts": posts_resp.json() if not isinstance(posts_resp, Exception) else None,
        "orders": orders_resp.json() if not isinstance(orders_resp, Exception) else None,
    }
</code></pre>

<h3 id="semaphore"><strong>Semaphore - Concurrency limit</strong></h3>

<pre><code class="language-python">import asyncio
import httpx

# Giới hạn tối đa 10 requests đồng thời
semaphore = asyncio.Semaphore(10)


async def fetch_with_limit(client: httpx.AsyncClient, url: str) -> dict:
    async with semaphore:
        response = await client.get(url)
        return response.json()


@router.post("/fetch-bulk")
async def fetch_bulk(urls: list[str]):
    """Fetch nhiều URLs với concurrency limit."""
    async with httpx.AsyncClient(timeout=30) as client:
        tasks = [fetch_with_limit(client, url) for url in urls[:100]]
        results = await asyncio.gather(*tasks, return_exceptions=True)

    return [
        r if not isinstance(r, Exception) else {"error": str(r)}
        for r in results
    ]
</code></pre>

<h3 id="async-generator"><strong>Async Generator for Streaming</strong></h3>

<pre><code class="language-python">from fastapi.responses import StreamingResponse


async def generate_csv(query_params: dict):
    """Stream CSV data - không load toàn bộ vào memory."""
    # Header
    yield "id,name,email,created_at\n"

    # Data rows - lấy từng batch
    offset = 0
    batch_size = 1000
    while True:
        users = await fetch_users_batch(offset, batch_size)
        if not users:
            break
        for user in users:
            yield f"{user.id},{user.name},{user.email},{user.created_at}\n"
        offset += batch_size


@router.get("/export/users")
async def export_users():
    """Export users ra CSV file (streaming)."""
    return StreamingResponse(
        generate_csv({}),
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=users.csv"},
    )
</code></pre>

<h2 id="4-httpx-client"><strong>4. httpx - Async HTTP Client</strong></h2>

<pre><code class="language-python"># app/core/http_client.py
import httpx
from contextlib import asynccontextmanager


class HTTPClient:
    """Reusable async HTTP client."""

    def __init__(self):
        self.client: httpx.AsyncClient | None = None

    async def start(self):
        self.client = httpx.AsyncClient(
            timeout=httpx.Timeout(30.0, connect=10.0),
            limits=httpx.Limits(
                max_connections=100,
                max_keepalive_connections=20,
            ),
            follow_redirects=True,
        )

    async def stop(self):
        if self.client:
            await self.client.aclose()

    async def get(self, url: str, **kwargs) -> httpx.Response:
        if not self.client:
            raise RuntimeError("HTTP client not initialized")
        return await self.client.get(url, **kwargs)

    async def post(self, url: str, **kwargs) -> httpx.Response:
        if not self.client:
            raise RuntimeError("HTTP client not initialized")
        return await self.client.post(url, **kwargs)


http_client = HTTPClient()

# Trong lifespan
# await http_client.start()  # startup
# await http_client.stop()   # shutdown
</code></pre>

<h2 id="tong-ket"><strong>Summary</strong></h2>

<p>In this article, we delve into:</p>

<ul>
<li><strong>File Upload</strong>: Single, multiple, streaming upload</li>
<li><strong>Redis Caching</strong>: fastapi-cache2 and custom cache service</li>
<li><strong>Async Deep Dive</strong>: gather, semaphore, async generators</li>
<li><strong>httpx</strong>: Reusable async HTTP client</li>
</ul>

<p>The next article will discuss Clean Architecture and Project Structure for large-scale apps.</p>
