---
id: 019d8b40-a303-7001-b002-fastapi000303
title: 第 11 課：安全最佳實踐
slug: bai-11-security-best-practices
description: CORS 設定、SlowAPI 速率限制、輸入清理、SQL 注入預防。 HTTPS、安全標頭、環境變數管理。 FastAPI 的 OWASP 前 10 名。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 11
section_title: 第 3 部分：身份驗證和安全性
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: Python FastAPI：從基礎到進階
  slug: python-fastapi-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 程式設計 — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：安全最佳實踐</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：身份驗證和安全性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-cors"><strong>1. CORS配置</strong></h2>

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

<h2 id="2-rate-limiting"><strong>2. 速率限制</strong></h2>

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

<h2 id="3-security-headers"><strong>3. 安全頭中介軟體</strong></h2>

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

<h2 id="4-input-sanitization"><strong>4. 輸入清理</strong></h2>

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

<h2 id="5-sql-injection"><strong>5. SQL注入預防</strong></h2>

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

<h2 id="6-request-id-tracking"><strong>6. 請求 ID 跟踪</strong></h2>

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

<h2 id="7-trusted-host"><strong>7. 可信任主機和 HTTPS</strong></h2>

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

<h2 id="8-owasp-checklist"><strong>8. OWASP FastAPI 十大清單</strong></h2>

<table>
<thead>
<tr><th>#</th><th>漏洞</th><th>FastAPI 中的解決方案</th></tr>
</thead>
<tbody>
<tr><td>A01</td><td>門禁損壞</td><td>RBAC 依賴關係、所有權檢查</td></tr>
<tr><td>A02</td><td>加密失敗</td><td>Bcrypt密碼，強保密JWT</td></tr>
<tr><td>A03</td><td>注射</td><td>Pydantic 驗證、SQLAlchemy ORM</td></tr>
<tr><td>A04</td><td>不安全的設計</td><td>速率限制、輸入驗證</td></tr>
<tr><td>A05</td><td>安全配置錯誤</td><td>安全標頭、CORS、環境變數</td></tr>
<tr><td>A06</td><td>易受攻擊的組件</td><td>uv 審計、依賴更新</td></tr>
<tr><td>A07</td><td>驗證失敗</td><td>OAuth2、JWT 輪換、令牌黑名單</td></tr>
<tr><td>A08</td><td>資料完整性故障</td><td>Pydantic 驗證器、CSRF 保護</td></tr>
<tr><td>A09</td><td>記錄失敗</td><td>結構化日誌記錄、請求 ID 跟踪</td></tr>
<tr><td>A10</td><td>SSRF</td><td>URL 驗證、白名單</td></tr>
</tbody>
</table>

<h2 id="tong-ket"><strong>總結</strong></h2>

<p>FastAPI 的安全最佳實務：</p>

<ul>
<li><strong>跨域資源共享</strong>：嚴格配置，只允許必要的來源</li>
<li><strong>速率限制</strong>：保護 API 免於濫用</li>
<li><strong>安全標頭</strong>：為每個回應添加安全標頭</li>
<li><strong>輸入淨化</strong>：在處理之前清理使用者輸入</li>
<li><strong>SQL注入</strong>：使用 ORM 或參數化查詢</li>
<li><strong>請求追蹤</strong>：追蹤整個系統的請求</li>
</ul>

<p>下一篇文章將實現社交登入和 OAuth2 提供者。</p>
