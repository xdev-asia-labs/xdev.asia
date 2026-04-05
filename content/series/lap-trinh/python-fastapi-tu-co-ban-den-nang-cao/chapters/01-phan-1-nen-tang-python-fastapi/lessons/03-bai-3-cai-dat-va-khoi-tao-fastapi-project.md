---
id: 019d8b40-a103-7001-b002-fastapi000103
title: 'Bài 3: Cài đặt và Khởi tạo FastAPI Project'
slug: bai-3-cai-dat-va-khoi-tao-fastapi-project
description: >-
  Cài đặt FastAPI và Uvicorn, khởi tạo project structure, hiểu cấu trúc
  thư mục chuẩn. Chạy development server, Swagger UI, ReDoc và viết
  API endpoint đầu tiên.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Nền tảng Python & FastAPI"
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: Từ Cơ bản đến Nâng cao'
  slug: python-fastapi-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6903" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6903)"/>

  <!-- Decorations -->
  <g>
    <circle cx="886" cy="148" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="672" cy="274" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="958" cy="140" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="744" cy="266" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1030" cy="132" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="128" x2="1100" y2="208" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="158" x2="1050" y2="228" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1015.2390923627308,156.5 1015.2390923627308,199.5 978,221 940.7609076372692,199.5 940.7609076372692,156.5 978,135" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 Lập trình — Bài 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 3: Cài đặt và Khởi tạo FastAPI Project</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng Python &amp; FastAPI</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-cai-dat-moi-truong"><strong>1. Cài đặt môi trường phát triển</strong></h2>

<h3 id="yeu-cau-he-thong"><strong>Yêu cầu hệ thống</strong></h3>

<ul>
<li><strong>Python 3.12+</strong> (khuyến nghị 3.12 hoặc 3.13)</li>
<li><strong>uv</strong> hoặc <strong>Poetry</strong> cho dependency management</li>
<li><strong>VS Code</strong> hoặc <strong>PyCharm</strong> với Python extension</li>
<li><strong>Git</strong> cho version control</li>
</ul>

<h3 id="cai-dat-python"><strong>Cài đặt Python 3.12+</strong></h3>

<pre><code class="language-bash"># macOS (Homebrew)
brew install python@3.12

# Ubuntu/Debian
sudo apt update
sudo apt install python3.12 python3.12-venv python3.12-dev

# Windows - tải từ https://python.org

# Kiểm tra version
python3 --version
# Python 3.12.x
</code></pre>

<h3 id="cai-dat-uv"><strong>Cài đặt uv (Recommended)</strong></h3>

<pre><code class="language-bash"># macOS / Linux
curl -LsSf https://astral.sh/uv/install.sh | sh

# Windows
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

# Kiểm tra
uv --version
</code></pre>

<h2 id="2-khoi-tao-project"><strong>2. Khởi tạo FastAPI Project</strong></h2>

<pre><code class="language-bash"># Tạo project mới
uv init fastapi-tutorial
cd fastapi-tutorial

# Thêm FastAPI và Uvicorn
uv add fastapi "uvicorn[standard]"

# Thêm dev dependencies
uv add --dev ruff mypy pytest httpx

# Xem project structure
tree .
</code></pre>

<p>File <code>pyproject.toml</code> sau khi khởi tạo:</p>

<pre><code class="language-toml">[project]
name = "fastapi-tutorial"
version = "0.1.0"
description = "FastAPI Tutorial - From Basic to Advanced"
readme = "README.md"
requires-python = ">=3.12"
dependencies = [
    "fastapi>=0.115.0",
    "uvicorn[standard]>=0.32.0",
]

[dependency-groups]
dev = [
    "httpx>=0.28.0",
    "mypy>=1.13.0",
    "pytest>=8.3.0",
    "ruff>=0.8.0",
]

[tool.ruff]
target-version = "py312"
line-length = 120

[tool.ruff.lint]
select = ["E", "F", "I", "N", "W", "UP", "B", "A", "SIM", "TCH"]

[tool.mypy]
python_version = "3.12"
strict = true
</code></pre>

<h2 id="3-cau-truc-project"><strong>3. Cấu trúc Project</strong></h2>

<p>Tạo cấu trúc thư mục chuẩn:</p>

<pre><code class="language-bash"># Tạo cấu trúc thư mục
mkdir -p app/{api/v1,models,schemas,services,core}
touch app/__init__.py app/main.py app/config.py
touch app/api/__init__.py app/api/v1/__init__.py
touch app/models/__init__.py app/schemas/__init__.py
touch app/services/__init__.py app/core/__init__.py
</code></pre>

<pre><code>fastapi-tutorial/
├── pyproject.toml
├── uv.lock
├── .env
├── .gitignore
├── app/
│   ├── __init__.py
│   ├── main.py              # Entry point
│   ├── config.py            # Configuration
│   ├── api/
│   │   ├── __init__.py
│   │   └── v1/
│   │       ├── __init__.py
│   │       └── items.py     # Item routes
│   ├── models/
│   │   └── __init__.py
│   ├── schemas/
│   │   ├── __init__.py
│   │   └── item.py          # Pydantic schemas
│   ├── services/
│   │   └── __init__.py
│   └── core/
│       └── __init__.py
└── tests/
    └── __init__.py
</code></pre>

<h2 id="4-viet-fastapi-app"><strong>4. Viết FastAPI Application đầu tiên</strong></h2>

<h3 id="config"><strong>app/config.py - Configuration</strong></h3>

<pre><code class="language-python">from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "FastAPI Tutorial"
    app_version: str = "0.1.0"
    debug: bool = True

    model_config = {"env_file": ".env", "env_file_encoding": "utf-8"}


settings = Settings()
</code></pre>

<h3 id="schemas"><strong>app/schemas/item.py - Pydantic Schemas</strong></h3>

<pre><code class="language-python">from pydantic import BaseModel, Field


class ItemBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, examples=["Laptop"])
    description: str | None = Field(None, max_length=500, examples=["A powerful laptop"])
    price: float = Field(..., gt=0, examples=[999.99])
    is_available: bool = Field(True)


class ItemCreate(ItemBase):
    pass


class ItemUpdate(BaseModel):
    name: str | None = Field(None, min_length=1, max_length=100)
    description: str | None = Field(None, max_length=500)
    price: float | None = Field(None, gt=0)
    is_available: bool | None = None


class ItemResponse(ItemBase):
    id: int

    model_config = {"from_attributes": True}
</code></pre>

<h3 id="routes"><strong>app/api/v1/items.py - Route Handlers</strong></h3>

<pre><code class="language-python">from fastapi import APIRouter, HTTPException, status

from app.schemas.item import ItemCreate, ItemResponse, ItemUpdate

router = APIRouter(prefix="/items", tags=["Items"])

# In-memory storage (sẽ thay bằng database sau)
fake_db: dict[int, dict] = {}
counter = 0


@router.get("/", response_model=list[ItemResponse])
async def list_items(skip: int = 0, limit: int = 10):
    """Lấy danh sách items với pagination."""
    items = list(fake_db.values())
    return items[skip : skip + limit]


@router.get("/{item_id}", response_model=ItemResponse)
async def get_item(item_id: int):
    """Lấy thông tin item theo ID."""
    if item_id not in fake_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Item with id {item_id} not found",
        )
    return fake_db[item_id]


@router.post("/", response_model=ItemResponse, status_code=status.HTTP_201_CREATED)
async def create_item(item: ItemCreate):
    """Tạo item mới."""
    global counter
    counter += 1
    item_data = {"id": counter, **item.model_dump()}
    fake_db[counter] = item_data
    return item_data


@router.put("/{item_id}", response_model=ItemResponse)
async def update_item(item_id: int, item: ItemUpdate):
    """Cập nhật item theo ID."""
    if item_id not in fake_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Item with id {item_id} not found",
        )
    stored_item = fake_db[item_id]
    update_data = item.model_dump(exclude_unset=True)
    stored_item.update(update_data)
    fake_db[item_id] = stored_item
    return stored_item


@router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_item(item_id: int):
    """Xóa item theo ID."""
    if item_id not in fake_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Item with id {item_id} not found",
        )
    del fake_db[item_id]
</code></pre>

<h3 id="main"><strong>app/main.py - Entry Point</strong></h3>

<pre><code class="language-python">from fastapi import FastAPI

from app.api.v1.items import router as items_router
from app.config import settings

app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    description="FastAPI Tutorial - Learning from basic to advanced",
    docs_url="/docs",       # Swagger UI
    redoc_url="/redoc",     # ReDoc
    openapi_url="/openapi.json",
)

# Include routers
app.include_router(items_router, prefix="/api/v1")


@app.get("/")
async def root():
    return {
        "app": settings.app_name,
        "version": settings.app_version,
        "docs": "/docs",
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}
</code></pre>

<h2 id="5-chay-server"><strong>5. Chạy Development Server</strong></h2>

<pre><code class="language-bash"># Chạy với uv
uv run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Hoặc chạy trực tiếp
uvicorn app.main:app --reload

# Output:
# INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
# INFO:     Started reloader process [12345] using WatchFiles
# INFO:     Started server process [12346]
# INFO:     Waiting for application startup.
# INFO:     Application startup complete.
</code></pre>

<h3 id="uvicorn-options"><strong>Uvicorn Options quan trọng</strong></h3>

<pre><code class="language-bash"># Development
uvicorn app.main:app \
    --reload \              # Auto-reload khi code thay đổi
    --host 0.0.0.0 \       # Listen all interfaces
    --port 8000 \           # Port
    --log-level debug       # Log level

# Production (preview)
uvicorn app.main:app \
    --workers 4 \           # Số worker processes
    --host 0.0.0.0 \
    --port 8000 \
    --no-access-log         # Tắt access log cho performance
</code></pre>

<h2 id="6-swagger-ui-redoc"><strong>6. Khám phá Swagger UI & ReDoc</strong></h2>

<p>Sau khi chạy server, truy cập:</p>

<ul>
<li><strong>Swagger UI</strong>: <code>http://localhost:8000/docs</code> - Interactive API documentation</li>
<li><strong>ReDoc</strong>: <code>http://localhost:8000/redoc</code> - Alternative documentation</li>
<li><strong>OpenAPI JSON</strong>: <code>http://localhost:8000/openapi.json</code> - Raw OpenAPI spec</li>
</ul>

<h3 id="swagger-features"><strong>Swagger UI cho phép:</strong></h3>

<ul>
<li>Xem tất cả API endpoints với HTTP methods</li>
<li>Xem request/response schemas</li>
<li><strong>"Try it out"</strong> - gọi API trực tiếp từ browser</li>
<li>Xem example values và validation rules</li>
</ul>

<h2 id="7-test-api"><strong>7. Test API với curl</strong></h2>

<pre><code class="language-bash"># Health check
curl http://localhost:8000/health

# Tạo item
curl -X POST http://localhost:8000/api/v1/items/ \
  -H "Content-Type: application/json" \
  -d '{"name": "Laptop", "description": "Gaming laptop", "price": 1299.99}'

# Lấy danh sách items
curl http://localhost:8000/api/v1/items/

# Lấy item theo ID
curl http://localhost:8000/api/v1/items/1

# Cập nhật item
curl -X PUT http://localhost:8000/api/v1/items/1 \
  -H "Content-Type: application/json" \
  -d '{"price": 999.99}'

# Xóa item
curl -X DELETE http://localhost:8000/api/v1/items/1
</code></pre>

<h2 id="8-vscode-setup"><strong>8. VS Code Setup cho FastAPI</strong></h2>

<p>Cài đặt extensions cần thiết:</p>

<pre><code class="language-json">// .vscode/extensions.json
{
  "recommendations": [
    "ms-python.python",
    "ms-python.vscode-pylance",
    "charliermarsh.ruff",
    "ms-python.mypy-type-checker"
  ]
}
</code></pre>

<pre><code class="language-json">// .vscode/settings.json
{
  "python.defaultInterpreterPath": ".venv/bin/python",
  "[python]": {
    "editor.defaultFormatter": "charliermarsh.ruff",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.organizeImports": "explicit"
    }
  }
}
</code></pre>

<h2 id="tong-ket"><strong>Tổng kết</strong></h2>

<p>Trong bài này, chúng ta đã:</p>

<ul>
<li>Cài đặt Python, uv và FastAPI</li>
<li>Khởi tạo project với cấu trúc thư mục chuẩn</li>
<li>Viết ứng dụng CRUD API đầu tiên với Pydantic schemas</li>
<li>Chạy development server và khám phá Swagger UI</li>
<li>Cấu hình VS Code cho Python development</li>
</ul>

<p>Bài tiếp theo sẽ đi sâu vào Path Operations, Request và Response handling trong FastAPI.</p>
