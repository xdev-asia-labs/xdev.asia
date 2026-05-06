---
id: 019d8b40-a101-7001-b002-fastapi000101
title: 'Lesson 1: Introducing FastAPI - The most modern Python framework'
slug: bai-1-gioi-thieu-fastapi-framework-python-hien-dai-nhat
description: >-
  Find out what FastAPI is, compare with Django, Flask, Litestar. ASGI
  architecture, async-first, type hints, auto-documentation. Ecosystem and
  practical use cases.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 1: Python Foundation & FastAPI'
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: From Basics to Advanced'
  slug: python-fastapi-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6281" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6281)"/>

  <!-- Decorations -->
  <g>
    <circle cx="848" cy="214" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1096" cy="102" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="844" cy="250" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1092" cy="138" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="840" cy="286" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="154" x2="1100" y2="234" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="184" x2="1050" y2="254" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1029.1147367097487,189.5 1029.1147367097487,218.5 1004,233 978.8852632902513,218.5 978.8852632902513,189.5 1004,175" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 Programming — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: Introducing FastAPI - Framework</tspan>
      <tspan x="60" dy="42">State of the art Python</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Python Foundation & FastAPI</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-fastapi-la-gi"><strong>1. What is FastAPI?</strong></h2>

<p>FastAPI is a modern, high-performance web framework for Python, designed to make building APIs quick and easy. Created by <strong>Sebastián Ramírez</strong> In 2018, FastAPI quickly became the most popular Python framework for Backend APIs thanks to its outstanding performance, great developer experience, and powerful type hints system.</p>

<p>FastAPI runs in the background <strong>Starlette</strong> (ASGI framework) and use <strong>Pydantic</strong> for data validation, delivering speeds comparable to Node.js and Go in many benchmarks.</p>

<h3 id="tai-sao-fastapi"><strong>Why choose FastAPI?</strong></h3>

<ul>
<li><p><strong>High performance</strong>: One of the fastest Python frameworks, thanks to Starlette and async/await</p></li>
<li><p><strong>Type hints native</strong>: Use Python type hints for automated validation, serialization, and documentation</p></li>
<li><p><strong>Auto-documentation</strong>: Automatically create Swagger UI and ReDoc from code, no need to write separate docs</p></li>
<li><p><strong>Developer experience</strong>: Great editor support, autocompletion, type checking helps reduce bugs</p></li>
<li><p><strong>Async-first</strong>: Supports native async/await, suitable for I/O-bound applications</p></li>
<li><p><strong>Standards-based</strong>: Based on OpenAPI (Swagger), JSON Schema, OAuth2 standards</p></li>
</ul>

<h2 id="2-so-sanh-framework"><strong>2. Compare FastAPI with other Frameworks</strong></h2>

<table>
<thead>
<tr><th>Criteria</th><th>FastAPI</th><th>Django</th><th>Flask</th><th>Litestar</th></tr>
</thead>
<tbody>
<tr><td>Type System</td><td>Native (Pydantic)</td><td>Optional</td><td>Optional</td><td>Native (attrs/msgspec)</td></tr>
<tr><td>Performance</td><td>Very high</td><td>Average</td><td>Average</td><td>Very high</td></tr>
<tr><td>Async Support</td><td>Native</td><td>Partial (Django 5+)</td><td>Flask 2+ (limited)</td><td>Native</td></tr>
<tr><td>Auto Docs</td><td>Swagger + ReDoc</td><td>DRF Spectacular</td><td>Flask-RESTX</td><td>Swagger + ReDoc</td></tr>
<tr><td>ORM</td><td>SQLAlchemy/Tortoise</td><td>Django ORM</td><td>SQLAlchemy</td><td>SQLAlchemy</td></tr>
<tr><td>Admin Panel</td><td>SQLAdmin/FastAPI-Admin</td><td>Built-in</td><td>Flask-Admin</td><td>Community</td></tr>
<tr><td>Learning Curve</td><td>Low-Medium</td><td>Medium-High</td><td>Low</td><td>Average</td></tr>
<tr><td>Community</td><td>Very large (70k+ ⭐)</td><td>Very big</td><td>Very big</td><td>Developing</td></tr>
<tr><td>Suitable</td><td>APIs, Microservices</td><td>Full-stack, CMS</td><td>MVP, Small APIs</td><td>APIs, Enterprise</td></tr>
</tbody>
</table>

<h2 id="3-kien-truc-fastapi"><strong>3. FastAPI Architecture</strong></h2>

<p>FastAPI is built on three solid foundations:</p>

<pre><code>┌──────────────────────────────────────────────┐
│              FastAPI Application              │
├──────────────────────────────────────────────┤
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐  │
│  │  Routes   │  │  Deps    │  │  Models   │  │
│  │  (Path    │  │  (DI     │  │  (Pydantic│  │
│  │   Ops)    │  │   System)│  │   V2)     │  │
│  └──────────┘  └──────────┘  └───────────┘  │
│                                              │
├──────────────────────────────────────────────┤
│              Starlette (ASGI)                │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐  │
│  │Middleware │  │  Routing │  │ WebSocket │  │
│  └──────────┘  └──────────┘  └───────────┘  │
├──────────────────────────────────────────────┤
│          Uvicorn / Hypercorn (Server)        │
└──────────────────────────────────────────────┘
</code></pre>

<h3 id="thanh-phan-chinh"><strong>Main ingredients:</strong></h3>

<ul>
<li><p><strong>Uvicorn</strong>: ASGI server, runs FastAPI application, supports HTTP/1.1 and WebSocket</p></li>
<li><p><strong>Starlette</strong>: Lightweight ASGI framework, providing routing, middleware, WebSocket, background tasks</p></li>
<li><p><strong>Pydantic</strong>: Data validation and serialization based on type hints</p></li>
<li><p><strong>OpenAPI</strong>: Automatically generate API documentation according to OpenAPI 3.1 standards</p></li>
</ul>

<h2 id="4-fastapi-ecosystem"><strong>4. FastAPI ecosystem</strong></h2>

<p>FastAPI has a rich ecosystem with many supporting libraries:</p>

<table>
<thead>
<tr><th>Field</th><th>Library</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>ORM</td><td>SQLAlchemy, Tortoise-ORM, SQLModel</td><td>Database ORM for Python</td></tr>
<tr><td>Migration</td><td>Alembic</td><td>Database schema migration</td></tr>
<tr><td>Auth</td><td>python-jose, Passlib, Authlib</td><td>JWT, OAuth2, Password hashing</td></tr>
<tr><td>Caching</td><td>fastapi-cache2, Redis</td><td>Response caching</td></tr>
<tr><td>Task Queue</td><td>Celery, ARQ, SAQ</td><td>Background task processing</td></tr>
<tr><td>Testing</td><td>pytest, httpx</td><td>Testing framework and async client</td></tr>
<tr><td>Admin</td><td>SQLAdmin, FastAPI-Admin</td><td>Admin dashboard</td></tr>
<tr><td>Monitoring</td><td>prometheus-fastapi-instrumentator</td><td>Metrics and monitoring</td></tr>
</tbody>
</table>

<h2 id="5-hello-world"><strong>5. Hello World with FastAPI</strong></h2>

<p>Let's look at the simplest FastAPI application:</p>

<pre><code class="language-python"># main.py
from fastapi import FastAPI

app = FastAPI(
    title="My First API",
    description="Learning FastAPI from scratch",
    version="1.0.0"
)

@app.get("/")
async def root():
    return {"message": "Hello, FastAPI!"}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}
</code></pre>

<p>Run the application:</p>

<pre><code class="language-bash"># Cài đặt
pip install fastapi uvicorn

# Chạy development server
uvicorn main:app --reload

# Server sẽ chạy tại http://127.0.0.1:8000
# Swagger UI: http://127.0.0.1:8000/docs
# ReDoc: http://127.0.0.1:8000/redoc
</code></pre>

<p>With just a few lines of code, you have:</p>

<ul>
<li>REST API endpoint with path parameter (<code>item_id</code>) is automatically validated as <code>int</code></li>
<li>Query parameters optional (<code>q</code>) with type hint</li>
<li>Interactive API documentation (Swagger UI)</li>
<li>Alternative documentation (ReDoc)</li>
<li>JSON Schema for request/response</li>
</ul>

<h2 id="6-wsgi-vs-asgi"><strong>6. WSGI vs ASGI - Why is ASGI important?</strong></h2>

<p>Understanding the difference between WSGI and ASGI is key to understanding why FastAPI is fast:</p>

<h3 id="wsgi-truyen-thong"><strong>WSGI (Web Server Gateway Interface) - Traditional</strong></h3>

<pre><code class="language-python"># Flask (WSGI) - synchronous, blocking
@app.route("/data")
def get_data():
    result1 = db.query("SELECT ...")    # Block - đợi DB
    result2 = requests.get("https://api.example.com")  # Block - đợi HTTP
    return jsonify(result1, result2)
    # Tổng thời gian = time(query) + time(http_call)
</code></pre>

<h3 id="asgi-hien-dai"><strong>ASGI (Asynchronous Server Gateway Interface) - Modern</strong></h3>

<pre><code class="language-python"># FastAPI (ASGI) - asynchronous, non-blocking
@app.get("/data")
async def get_data():
    result1, result2 = await asyncio.gather(
        db.query("SELECT ..."),         # Non-blocking
        httpx.get("https://api.example.com")  # Non-blocking
    )
    return {"db": result1, "api": result2}
    # Tổng thời gian = max(time(query), time(http_call))
</code></pre>

<p>With ASGI, FastAPI can handle thousands of concurrent requests without needing many threads or processes.</p>

<h2 id="7-use-cases"><strong>7. When should you use FastAPI?</strong></h2>

<h3 id="nen-dung"><strong>FastAPI should be used when:</strong></h3>

<ul>
<li>Build REST APIs or GraphQL APIs</li>
<li>Microservices architecture</li>
<li>Real-time applications (WebSocket, SSE)</li>
<li>Machine Learning model serving</li>
<li>IoT backend services</li>
<li>High-concurrency I/O-bound applications</li>
</ul>

<h3 id="can-nhac"><strong>Consider another framework when:</strong></h3>

<ul>
<li>Full-stack web app with server-rendered HTML → <strong>Django</strong></li>
<li>CMS, Admin-heavy applications → <strong>Django</strong></li>
<li>Quick prototype, simple API → <strong>Flask</strong></li>
<li>Need maximum speed with msgspec → <strong>Litestar</strong></li>
</ul>

<h2 id="8-lo-trinh-khoa-hoc"><strong>8. Course roadmap</strong></h2>

<p>In this series, we will go through 20 lessons divided into 5 parts:</p>

<ol>
<li><strong>Part 1: Foundation</strong> - Python essentials, FastAPI basics, Request/Response</li>
<li><strong>Part 2: Databases</strong> - Pydantic, SQLAlchemy, Alembic, CRUD & Repository pattern</li>
<li><strong>Part 3: Security</strong> - Authentication, Authorization, OAuth2, Security best practices</li>
<li><strong>Part 4: Advanced</strong> - Middleware, WebSockets, Background Tasks, Caching, Async deep diving</li>
<li><strong>Part 5: Production</strong> - Clean Architecture, Testing, Docker, CI/CD, Deployment & Monitoring</li>
</ol>

<p>Each lesson has practical code examples, and by the end of the series you will have enough knowledge to build a production-ready FastAPI application.</p>

<h2 id="tong-ket"><strong>Summary</strong></h2>

<p>FastAPI is the most modern Python framework for building APIs, combining high performance with a great developer experience. In the next article, we will review the necessary Python knowledge before diving into FastAPI.</p>
