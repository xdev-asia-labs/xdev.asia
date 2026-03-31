---
id: 019d8b40-a101-7001-b002-fastapi000101
title: 'Bài 1: Giới thiệu FastAPI - Framework Python hiện đại nhất'
slug: bai-1-gioi-thieu-fastapi-framework-python-hien-dai-nhat
description: >-
  Tìm hiểu FastAPI là gì, so sánh với Django, Flask, Litestar. Kiến trúc
  ASGI, async-first, type hints, auto-documentation. Hệ sinh thái và
  use cases thực tế.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền tảng Python & FastAPI"
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: Từ Cơ bản đến Nâng cao'
  slug: python-fastapi-tu-co-ban-den-nang-cao
---

<h2 id="1-fastapi-la-gi"><strong>1. FastAPI là gì?</strong></h2>

<p>FastAPI là một web framework hiện đại, hiệu năng cao cho Python, được thiết kế để xây dựng APIs nhanh chóng và dễ dàng. Được tạo bởi <strong>Sebastián Ramírez</strong> vào năm 2018, FastAPI nhanh chóng trở thành framework Python phổ biến nhất cho Backend API nhờ vào hiệu năng vượt trội, developer experience tuyệt vời và hệ thống type hints mạnh mẽ.</p>

<p>FastAPI chạy trên nền <strong>Starlette</strong> (ASGI framework) và sử dụng <strong>Pydantic</strong> cho data validation, mang lại tốc độ ngang ngửa Node.js và Go trong nhiều benchmark.</p>

<h3 id="tai-sao-fastapi"><strong>Tại sao chọn FastAPI?</strong></h3>

<ul>
<li><p><strong>Hiệu năng cao</strong>: Một trong những Python framework nhanh nhất, nhờ Starlette và async/await</p></li>
<li><p><strong>Type hints native</strong>: Sử dụng Python type hints cho validation, serialization và documentation tự động</p></li>
<li><p><strong>Auto-documentation</strong>: Tự động tạo Swagger UI và ReDoc từ code, không cần viết docs riêng</p></li>
<li><p><strong>Developer experience</strong>: Editor support tuyệt vời, autocompletion, type checking giúp giảm bugs</p></li>
<li><p><strong>Async-first</strong>: Hỗ trợ native async/await, phù hợp cho I/O-bound applications</p></li>
<li><p><strong>Standards-based</strong>: Dựa trên OpenAPI (Swagger), JSON Schema, OAuth2 standards</p></li>
</ul>

<h2 id="2-so-sanh-framework"><strong>2. So sánh FastAPI với các Framework khác</strong></h2>

<table>
<thead>
<tr><th>Tiêu chí</th><th>FastAPI</th><th>Django</th><th>Flask</th><th>Litestar</th></tr>
</thead>
<tbody>
<tr><td>Type System</td><td>Native (Pydantic)</td><td>Optional</td><td>Optional</td><td>Native (attrs/msgspec)</td></tr>
<tr><td>Performance</td><td>Rất cao</td><td>Trung bình</td><td>Trung bình</td><td>Rất cao</td></tr>
<tr><td>Async Support</td><td>Native</td><td>Partial (Django 5+)</td><td>Flask 2+ (limited)</td><td>Native</td></tr>
<tr><td>Auto Docs</td><td>Swagger + ReDoc</td><td>DRF Spectacular</td><td>Flask-RESTX</td><td>Swagger + ReDoc</td></tr>
<tr><td>ORM</td><td>SQLAlchemy/Tortoise</td><td>Django ORM</td><td>SQLAlchemy</td><td>SQLAlchemy</td></tr>
<tr><td>Admin Panel</td><td>SQLAdmin/FastAPI-Admin</td><td>Built-in</td><td>Flask-Admin</td><td>Community</td></tr>
<tr><td>Learning Curve</td><td>Thấp-Trung bình</td><td>Trung bình-Cao</td><td>Thấp</td><td>Trung bình</td></tr>
<tr><td>Community</td><td>Rất lớn (70k+ ⭐)</td><td>Rất lớn</td><td>Rất lớn</td><td>Đang phát triển</td></tr>
<tr><td>Phù hợp</td><td>APIs, Microservices</td><td>Full-stack, CMS</td><td>MVP, Small APIs</td><td>APIs, Enterprise</td></tr>
</tbody>
</table>

<h2 id="3-kien-truc-fastapi"><strong>3. Kiến trúc FastAPI</strong></h2>

<p>FastAPI được xây dựng dựa trên bộ ba foundation vững chắc:</p>

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

<h3 id="thanh-phan-chinh"><strong>Thành phần chính:</strong></h3>

<ul>
<li><p><strong>Uvicorn</strong>: ASGI server, chạy ứng dụng FastAPI, hỗ trợ HTTP/1.1 và WebSocket</p></li>
<li><p><strong>Starlette</strong>: ASGI framework nhẹ, cung cấp routing, middleware, WebSocket, background tasks</p></li>
<li><p><strong>Pydantic</strong>: Data validation và serialization dựa trên type hints</p></li>
<li><p><strong>OpenAPI</strong>: Tự động generate API documentation theo chuẩn OpenAPI 3.1</p></li>
</ul>

<h2 id="4-fastapi-ecosystem"><strong>4. Hệ sinh thái FastAPI</strong></h2>

<p>FastAPI có hệ sinh thái phong phú với nhiều thư viện hỗ trợ:</p>

<table>
<thead>
<tr><th>Lĩnh vực</th><th>Thư viện</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>ORM</td><td>SQLAlchemy, Tortoise-ORM, SQLModel</td><td>Database ORM cho Python</td></tr>
<tr><td>Migration</td><td>Alembic</td><td>Database schema migration</td></tr>
<tr><td>Auth</td><td>python-jose, Passlib, Authlib</td><td>JWT, OAuth2, Password hashing</td></tr>
<tr><td>Caching</td><td>fastapi-cache2, Redis</td><td>Response caching</td></tr>
<tr><td>Task Queue</td><td>Celery, ARQ, SAQ</td><td>Background task processing</td></tr>
<tr><td>Testing</td><td>pytest, httpx</td><td>Testing framework và async client</td></tr>
<tr><td>Admin</td><td>SQLAdmin, FastAPI-Admin</td><td>Admin dashboard</td></tr>
<tr><td>Monitoring</td><td>prometheus-fastapi-instrumentator</td><td>Metrics và monitoring</td></tr>
</tbody>
</table>

<h2 id="5-hello-world"><strong>5. Hello World với FastAPI</strong></h2>

<p>Cùng xem một ứng dụng FastAPI đơn giản nhất:</p>

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

<p>Chạy ứng dụng:</p>

<pre><code class="language-bash"># Cài đặt
pip install fastapi uvicorn

# Chạy development server
uvicorn main:app --reload

# Server sẽ chạy tại http://127.0.0.1:8000
# Swagger UI: http://127.0.0.1:8000/docs
# ReDoc: http://127.0.0.1:8000/redoc
</code></pre>

<p>Chỉ với vài dòng code, bạn đã có:</p>

<ul>
<li>REST API endpoint với path parameter (<code>item_id</code>) được validate tự động là <code>int</code></li>
<li>Query parameter optional (<code>q</code>) với type hint</li>
<li>Interactive API documentation (Swagger UI)</li>
<li>Alternative documentation (ReDoc)</li>
<li>JSON Schema cho request/response</li>
</ul>

<h2 id="6-wsgi-vs-asgi"><strong>6. WSGI vs ASGI - Tại sao ASGI quan trọng?</strong></h2>

<p>Hiểu sự khác biệt giữa WSGI và ASGI là chìa khóa để hiểu tại sao FastAPI nhanh:</p>

<h3 id="wsgi-truyen-thong"><strong>WSGI (Web Server Gateway Interface) - Truyền thống</strong></h3>

<pre><code class="language-python"># Flask (WSGI) - synchronous, blocking
@app.route("/data")
def get_data():
    result1 = db.query("SELECT ...")    # Block - đợi DB
    result2 = requests.get("https://api.example.com")  # Block - đợi HTTP
    return jsonify(result1, result2)
    # Tổng thời gian = time(query) + time(http_call)
</code></pre>

<h3 id="asgi-hien-dai"><strong>ASGI (Asynchronous Server Gateway Interface) - Hiện đại</strong></h3>

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

<p>Với ASGI, FastAPI có thể xử lý hàng nghìn concurrent requests mà không cần nhiều threads hay processes.</p>

<h2 id="7-use-cases"><strong>7. Khi nào nên dùng FastAPI?</strong></h2>

<h3 id="nen-dung"><strong>Nên dùng FastAPI khi:</strong></h3>

<ul>
<li>Xây dựng REST APIs hoặc GraphQL APIs</li>
<li>Microservices architecture</li>
<li>Real-time applications (WebSocket, SSE)</li>
<li>Machine Learning model serving</li>
<li>IoT backend services</li>
<li>High-concurrency I/O-bound applications</li>
</ul>

<h3 id="can-nhac"><strong>Cân nhắc framework khác khi:</strong></h3>

<ul>
<li>Full-stack web app với server-rendered HTML → <strong>Django</strong></li>
<li>CMS, Admin-heavy applications → <strong>Django</strong></li>
<li>Quick prototype, simple API → <strong>Flask</strong></li>
<li>Cần tốc độ tối đa với msgspec → <strong>Litestar</strong></li>
</ul>

<h2 id="8-lo-trinh-khoa-hoc"><strong>8. Lộ trình khóa học</strong></h2>

<p>Trong series này, chúng ta sẽ đi qua 20 bài học chia thành 5 phần:</p>

<ol>
<li><strong>Phần 1: Nền tảng</strong> - Python essentials, FastAPI basics, Request/Response</li>
<li><strong>Phần 2: Database</strong> - Pydantic, SQLAlchemy, Alembic, CRUD &amp; Repository pattern</li>
<li><strong>Phần 3: Security</strong> - Authentication, Authorization, OAuth2, Security best practices</li>
<li><strong>Phần 4: Advanced</strong> - Middleware, WebSockets, Background Tasks, Caching, Async deep dive</li>
<li><strong>Phần 5: Production</strong> - Clean Architecture, Testing, Docker, CI/CD, Deployment &amp; Monitoring</li>
</ol>

<p>Mỗi bài học đều có code examples thực tế, và cuối series bạn sẽ có đủ kiến thức để xây dựng production-ready FastAPI application.</p>

<h2 id="tong-ket"><strong>Tổng kết</strong></h2>

<p>FastAPI là framework Python hiện đại nhất cho việc xây dựng APIs, kết hợp hiệu năng cao với developer experience tuyệt vời. Trong bài tiếp theo, chúng ta sẽ ôn tập các kiến thức Python cần thiết trước khi đi sâu vào FastAPI.</p>
