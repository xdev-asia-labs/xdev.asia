---
id: 019d8b40-a303-7001-b002-fastapi000303
title: 'Lesson 11: Security Best Practices'
slug: bai-11-security-best-practices
description: >-
  CORS configuration, Rate limiting with SlowAPI, Input sanitization, SQL
  injection prevention. HTTPS, Security headers, Environment variables
  management. OWASP Top 10 for FastAPI.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 3: Authentication & Security'
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: From Basics to Advanced'
  slug: python-fastapi-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1296" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1296)"/>

  <!-- Decorations -->
  <g>
    <circle cx="842" cy="76" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="1084" cy="178" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="826" cy="280" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="1068" cy="122" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="810" cy="224" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="116" x2="1100" y2="196" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="146" x2="1050" y2="216" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="992.8467875173176,150.5 992.8467875173176,181.5 966,197 939.1532124826824,181.5 939.1532124826824,150.5 966,135" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 Programming — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: Security Best Practices</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Authentication & Security</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-cors"><strong>1. CORS Configuration</strong></h2>

<pre><code class="language-python"># app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,  # ["https://example.com"]
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE"],
    allow_headers=["Authorization", "Content-Type", "X-Request-ID"],
    expose_headers=["X-Total-Count", "X-Request-ID"],
    max_age=600,  # Cache preflight requests for 10 minutes
)
</code></pre>

<h2 id="2-rate-limiting"><strong>2. Rate Limiting</strong></h2>

<pre><code class="language-bash">uv add slowapi
</code></pre>

<pre><code class="language-python"># app/core/rate_limit.py
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.util import get_remote_address

limiter = Limiter(
    key_func=get_remote_address,
    default_limits=["100/minute"],
    storage_uri="redis://localhost:6379/1",
)

# app/main.py
from app.core.rate_limit import limiter

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Sử dụng trong routes
from slowapi import Limiter
from fastapi import Request

@app.post("/api/v1/auth/login")
@limiter.limit("5/minute")  # Giới hạn login attempts
async def login(request: Request):
    ...

@app.get("/api/v1/items")
@limiter.limit("60/minute")
async def list_items(request: Request):
    ...
</code></pre>

<h2 id="3-security-headers"><strong>3. Security Headers Middleware</strong></h2>

<pre><code class="language-python"># app/middleware/security.py
from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import Response


class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next) -> Response:
        response = await call_next(request)

        # Security headers
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["X-XSS-Protection"] = "1; mode=block"
        response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        response.headers["Permissions-Policy"] = "camera=(), microphone=(), geolocation=()"
        response.headers["Content-Security-Policy"] = (
            "default-src 'self'; "
            "script-src 'self'; "
            "style-src 'self' 'unsafe-inline'; "
            "img-src 'self' data: https:; "
            "font-src 'self'"
        )

        # Remove server header
        response.headers.pop("server", None)

        return response


# app/main.py
app.add_middleware(SecurityHeadersMiddleware)
</code></pre>

<h2 id="4-input-sanitization"><strong>4. Input Sanitization</strong></h2>

<pre><code class="language-python"># app/core/sanitize.py
import re
import html
from pydantic import BeforeValidator
from typing import Annotated


def sanitize_string(value: str) -> str:
    """Sanitize string input - loại bỏ HTML/script injection."""
    if not isinstance(value, str):
        return value
    # Escape HTML entities
    value = html.escape(value)
    # Remove potential script tags
    value = re.sub(r'&lt;script.*?&gt;.*?&lt;/script&gt;', '', value, flags=re.IGNORECASE | re.DOTALL)
    # Remove null bytes
    value = value.replace('\x00', '')
    return value.strip()


# Custom type sử dụng trong Pydantic
SafeString = Annotated[str, BeforeValidator(sanitize_string)]


# Sử dụng trong schemas
from pydantic import BaseModel

class CommentCreate(BaseModel):
    content: SafeString  # Tự động sanitize
    title: SafeString
</code></pre>

<h2 id="5-sql-injection"><strong>5. SQL Injection Prevention</strong></h2>

<pre><code class="language-python"># ❌ TUYỆT ĐỐI KHÔNG LÀM
# Truyền trực tiếp user input vào raw SQL
@app.get("/users/search")
async def bad_search(q: str, session: AsyncSession = Depends(get_db)):
    result = await session.execute(
        text(f"SELECT * FROM users WHERE name = '{q}'")  # SQL INJECTION!
    )

# ✅ ĐÚNG CÁCH 1: Sử dụng parameterized queries
from sqlalchemy import text

@app.get("/users/search")
async def safe_search(q: str, session: AsyncSession = Depends(get_db)):
    result = await session.execute(
        text("SELECT * FROM users WHERE name = :name"),
        {"name": q}  # Parameterized - safe
    )

# ✅ ĐÚNG CÁCH 2: Sử dụng SQLAlchemy ORM (recommended)
@app.get("/users/search")
async def safe_search_orm(q: str, session: AsyncSession = Depends(get_db)):
    result = await session.execute(
        select(User).where(User.name.ilike(f"%{q}%"))  # SQLAlchemy handles escaping
    )
    return result.scalars().all()
</code></pre>

<h2 id="6-request-id-tracking"><strong>6. Request ID Tracking</strong></h2>

<pre><code class="language-python"># app/middleware/request_id.py
import uuid

from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import Response


class RequestIDMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next) -> Response:
        # Lấy request ID từ header hoặc generate mới
        request_id = request.headers.get("X-Request-ID") or str(uuid.uuid4())

        # Lưu vào request state
        request.state.request_id = request_id

        # Process request
        response = await call_next(request)

        # Thêm request ID vào response header
        response.headers["X-Request-ID"] = request_id

        return response
</code></pre>

<h2 id="7-trusted-host"><strong>7. Trusted Host & HTTPS</strong></h2>

<pre><code class="language-python"># app/main.py
from starlette.middleware.trustedhost import TrustedHostMiddleware
from starlette.middleware.httpsredirect import HTTPSRedirectMiddleware

# Chỉ cho phép request từ trusted hosts
app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=["example.com", "*.example.com"],
)

# Redirect HTTP → HTTPS (production only)
if settings.environment == "production":
    app.add_middleware(HTTPSRedirectMiddleware)
</code></pre>

<h2 id="8-owasp-checklist"><strong>8. OWASP Top 10 Checklist for FastAPI</strong></h2>

<table>
<thead>
<tr><th>#</th><th>Vulnerability</th><th>Solution in FastAPI</th></tr>
</thead>
<tbody>
<tr><td>A01</td><td>Broken Access Control</td><td>RBAC dependencies, ownership checks</td></tr>
<tr><td>A02</td><td>Cryptographic Failures</td><td>Bcrypt passwords, JWT with strong secret</td></tr>
<tr><td>A03</td><td>Injection</td><td>Pydantic validation, SQLAlchemy ORM</td></tr>
<tr><td>A04</td><td>Insecure Design</td><td>Rate limiting, input validation</td></tr>
<tr><td>A05</td><td>Security Misconfiguration</td><td>Security headers, CORS, env variables</td></tr>
<tr><td>A06</td><td>Vulnerable Components</td><td>uv audit, dependency updates</td></tr>
<tr><td>A07</td><td>Auth Failures</td><td>OAuth2, JWT rotation, token blacklist</td></tr>
<tr><td>A08</td><td>Data Integrity Failures</td><td>Pydantic validators, CSRF protection</td></tr>
<tr><td>A09</td><td>Logging Failures</td><td>Structured logging, request ID tracking</td></tr>
<tr><td>A10</td><td>SSRF</td><td>URL validation, allowlists</td></tr>
</tbody>
</table>

<h2 id="tong-ket"><strong>Summary</strong></h2>

<p>Security best practices for FastAPI:</p>

<ul>
<li><strong>CORS</strong>: Strict configuration, only allow necessary origins</li>
<li><strong>Rate Limiting</strong>: Protect API from abuse</li>
<li><strong>Security Headers</strong>: Add security headers to every response</li>
<li><strong>Input Sanitization</strong>: Sanitize user input before processing</li>
<li><strong>SQL Injection</strong>: Use ORM or parameterized queries</li>
<li><strong>Request Tracking</strong>: Trace requests across the entire system</li>
</ul>

<p>The next article will implement Social Login and OAuth2 Providers.</p>
