---
id: 019d8b40-a102-7001-b002-fastapi000102
title: 'レッスン 2: FastAPI の Python の基礎'
slug: bai-2-python-essentials-cho-fastapi
description: >-
  FastAPI の重要な Python レビュー: タイプ ヒント、データクラス、デコレーター、コンテキスト マネージャー、ジェネレーター、基本的な
  async/await。 Poetry/uv を使用した仮想環境と依存関係の管理。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: Python の基礎と FastAPI'
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: 基本から高度まで'
  slug: python-fastapi-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-884" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-884)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1010" cy="180" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="920" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="830" cy="280" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="70" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="120" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="180" x2="1100" y2="260" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="210" x2="1050" y2="280" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1010.3108891324554,162.5 1010.3108891324554,197.5 980,215 949.6891108675446,197.5 949.6891108675446,162.5 980,145" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 プログラミング — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: FastAPI の Python の基礎</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Python の基礎と FastAPI</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-type-hints"><strong>1. タイプヒント - FastAPI の基礎</strong></h2>

<p>タイプ ヒントは、FastAPI が依存する Python の最も重要な機能です。 FastAPI はタイプ ヒントを使用して、データを自動的に検証し、ドキュメントを生成し、エディターのサポートを提供します。</p>

<h3 id="basic-types"><strong>基本タイプ</strong></h3>

<pre><code class="language-python"># Các kiểu dữ liệu cơ bản
name: str = "FastAPI"
age: int = 5
price: float = 9.99
is_active: bool = True

# Function với type hints
def greet(name: str, age: int) -> str:
    return f"Hello {name}, you are {age} years old"

# Python 3.10+ union syntax
def process(value: int | str) -> str:
    return str(value)

# Optional (có thể None)
def find_user(user_id: int) -> str | None:
    return None
</code></pre>

<h3 id="collection-types"><strong>コレクション型 (Python 3.9 以降)</strong></h3>

<pre><code class="language-python"># List, Dict, Set, Tuple - dùng lowercase từ Python 3.9+
names: list[str] = ["Alice", "Bob"]
scores: dict[str, int] = {"Alice": 95, "Bob": 87}
unique_ids: set[int] = {1, 2, 3}
coordinates: tuple[float, float] = (10.5, 20.3)

# Nested types
matrix: list[list[int]] = [[1, 2], [3, 4]]
users: dict[str, list[str]] = {"admin": ["read", "write"]}

# Function với collection types
def get_names(active_only: bool = True) -> list[str]:
    return ["Alice", "Bob"]
</code></pre>

<h3 id="advanced-types"><strong>高度なタイプ</strong></h3>

<pre><code class="language-python">from typing import Any, Literal, TypeAlias, TypeVar, Generic

# Any - cho phép mọi kiểu (tránh dùng khi có thể)
data: Any = "anything"

# Literal - giới hạn giá trị cụ thể
Status: TypeAlias = Literal["active", "inactive", "pending"]

def set_status(status: Status) -> None:
    print(f"Status: {status}")

# TypeVar và Generic
T = TypeVar("T")

class Repository(Generic[T]):
    def get(self, id: int) -> T | None:
        ...
    def list(self) -> list[T]:
        ...

# Callable
from collections.abc import Callable

def apply(func: Callable[[int, int], int], a: int, b: int) -> int:
    return func(a, b)
</code></pre>

<h2 id="2-dataclasses"><strong>2. データクラス</strong></h2>

<p>Dataclasses は Pydantic モデルの前身であり、データを適切に保存するクラスの作成に役立ちます。</p>

<pre><code class="language-python">from dataclasses import dataclass, field
from datetime import datetime

@dataclass
class User:
    name: str
    email: str
    age: int
    is_active: bool = True
    created_at: datetime = field(default_factory=datetime.now)
    tags: list[str] = field(default_factory=list)

    @property
    def display_name(self) -> str:
        return f"{self.name} ({self.email})"

# Sử dụng
user = User(name="Alice", email="alice@example.com", age=30)
print(user)  # User(name='Alice', email='alice@example.com', age=30, ...)

# Frozen (immutable)
@dataclass(frozen=True)
class Point:
    x: float
    y: float
</code></pre>

<h2 id="3-decorators"><strong>3. デコレータ</strong></h2>

<p>FastAPI はデコレータを多用します (<code>@app.get()</code>、 <code>@app.post()</code>、...）。デコレータを理解する必要があります。</p>

<pre><code class="language-python">import functools
import time
from collections.abc import Callable
from typing import ParamSpec, TypeVar

P = ParamSpec("P")
R = TypeVar("R")

# Decorator cơ bản
def timer(func: Callable[P, R]) -> Callable[P, R]:
    @functools.wraps(func)
    def wrapper(*args: P.args, **kwargs: P.kwargs) -> R:
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"{func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "done"

# Decorator với tham số
def retry(max_attempts: int = 3):
    def decorator(func: Callable[P, R]) -> Callable[P, R]:
        @functools.wraps(func)
        def wrapper(*args: P.args, **kwargs: P.kwargs) -> R:
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise
                    print(f"Attempt {attempt + 1} failed: {e}")
            raise RuntimeError("Unreachable")
        return wrapper
    return decorator

@retry(max_attempts=3)
def fetch_data():
    ...
</code></pre>

<h2 id="4-context-managers"><strong>4. コンテキストマネージャー</strong></h2>

<p>コンテキスト マネージャーは、データベース セッションやファイル処理のために FastAPI で重要です。</p>

<pre><code class="language-python">from contextlib import contextmanager, asynccontextmanager

# Sync context manager
@contextmanager
def db_session():
    session = create_session()
    try:
        yield session
        session.commit()
    except Exception:
        session.rollback()
        raise
    finally:
        session.close()

# Async context manager (dùng nhiều trong FastAPI)
@asynccontextmanager
async def async_db_session():
    session = async_create_session()
    try:
        yield session
        await session.commit()
    except Exception:
        await session.rollback()
        raise
    finally:
        await session.close()

# Class-based context manager
class Timer:
    def __enter__(self):
        self.start = time.perf_counter()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.elapsed = time.perf_counter() - self.start
        print(f"Elapsed: {self.elapsed:.4f}s")
        return False  # Don't suppress exceptions
</code></pre>

<h2 id="5-generators"><strong>5. ジェネレーターと非同期ジェネレーター</strong></h2>

<p>FastAPI は、依存関係の挿入とストリーミング応答にジェネレーターを使用します。</p>

<pre><code class="language-python"># Generator cơ bản
def fibonacci(n: int):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# Generator expression
squares = (x ** 2 for x in range(10))

# Generator cho FastAPI dependency
def get_db():
    db = SessionLocal()
    try:
        yield db  # FastAPI sẽ inject db vào route handler
    finally:
        db.close()

# Async generator cho streaming
async def event_stream():
    while True:
        data = await get_latest_event()
        yield f"data: {data}\n\n"
</code></pre>

<h2 id="6-async-await"><strong>6. 基本的な非同期/待機</strong></h2>

<p>Async/await は FastAPI の中核機能です。正しく理解すると、効果的なコードを書くのに役立ちます。</p>

<pre><code class="language-python">import asyncio

# Async function (coroutine)
async def fetch_user(user_id: int) -> dict:
    await asyncio.sleep(1)  # Giả lập I/O operation
    return {"id": user_id, "name": "Alice"}

# Gọi async function
async def main():
    user = await fetch_user(1)
    print(user)

# Chạy concurrent tasks
async def fetch_all_users(user_ids: list[int]) -> list[dict]:
    # Chạy song song - KHÔNG tuần tự
    tasks = [fetch_user(uid) for uid in user_ids]
    results = await asyncio.gather(*tasks)
    return list(results)

# asyncio.run() - entry point
asyncio.run(main())
</code></pre>

<h3 id="sync-vs-async"><strong>FastAPI で非同期と同期をいつ使用するか?</strong></h3>

<pre><code class="language-python">from fastapi import FastAPI

app = FastAPI()

# ✅ Dùng async khi có I/O operations (database, HTTP calls, file I/O)
@app.get("/users/{user_id}")
async def get_user(user_id: int):
    user = await db.fetch_user(user_id)  # async database query
    return user

# ✅ Dùng sync khi chỉ có CPU-bound operations
# FastAPI sẽ tự chạy trong thread pool
@app.get("/compute")
def compute_heavy():
    result = heavy_cpu_computation()  # sync, CPU-bound
    return {"result": result}

# ❌ TRÁNH: dùng async nhưng gọi sync blocking code
@app.get("/bad")
async def bad_example():
    result = requests.get("https://api.example.com")  # BLOCKING trong async!
    return result.json()
</code></pre>

<h2 id="7-virtual-environments"><strong>7. 仮想環境と依存関係の管理</strong></h2>

<h3 id="uv"><strong>紫外線 (推奨 - 2026)</strong></h3>

<pre><code class="language-bash"># Cài đặt uv
curl -LsSf https://astral.sh/uv/install.sh | sh

# Khởi tạo project
uv init my-fastapi-project
cd my-fastapi-project

# Thêm dependencies
uv add fastapi uvicorn[standard]
uv add sqlalchemy alembic asyncpg

# Dev dependencies
uv add --dev pytest httpx ruff mypy

# Chạy
uv run uvicorn main:app --reload

# Sync dependencies
uv sync
</code></pre>

<h3 id="poetry"><strong>詩</strong></h3>

<pre><code class="language-bash"># Cài đặt Poetry
pip install poetry

# Khởi tạo project
poetry new my-fastapi-project
cd my-fastapi-project

# Thêm dependencies
poetry add fastapi uvicorn[standard]
poetry add sqlalchemy alembic asyncpg

# Dev dependencies
poetry add --group dev pytest httpx ruff mypy

# Chạy
poetry run uvicorn main:app --reload
</code></pre>

<h2 id="8-project-structure"><strong>8. プロジェクトの基本構造</strong></h2>

<pre><code>my-fastapi-project/
├── pyproject.toml          # Project config & dependencies
├── uv.lock                 # Lock file (uv) hoặc poetry.lock
├── README.md
├── .env                    # Environment variables
├── .gitignore
├── alembic.ini             # Alembic config
├── alembic/                # Database migrations
│   ├── env.py
│   └── versions/
├── app/
│   ├── __init__.py
│   ├── main.py             # FastAPI app entry point
│   ├── config.py           # Settings & configuration
│   ├── models/             # SQLAlchemy models
│   │   ├── __init__.py
│   │   └── user.py
│   ├── schemas/            # Pydantic schemas
│   │   ├── __init__.py
│   │   └── user.py
│   ├── api/                # Route handlers
│   │   ├── __init__.py
│   │   └── v1/
│   │       ├── __init__.py
│   │       └── users.py
│   ├── services/           # Business logic
│   │   ├── __init__.py
│   │   └── user_service.py
│   ├── repositories/       # Data access layer
│   │   ├── __init__.py
│   │   └── user_repo.py
│   └── core/               # Core utilities
│       ├── __init__.py
│       ├── database.py
│       └── security.py
└── tests/
    ├── __init__.py
    ├── conftest.py
    └── test_users.py
</code></pre>

<h2 id="tong-ket"><strong>概要</strong></h2>

<p>この記事では、FastAPI が使用する重要な Python 機能を確認しました。</p>

<ul>
<li><strong>タイプヒント</strong>: 自動検証と文書化のためのプラットフォーム</li>
<li><strong>データクラス</strong>: Pydantic モデルの前身</li>
<li><strong>デコレーター</strong>: FastAPI がルート定義に使用するパターン</li>
<li><strong>コンテキストマネージャー</strong>: リソース（データベースセッション、ファイル）を管理します。</li>
<li><strong>発電機</strong>: 依存関係の注入とストリーミングに使用されます</li>
<li><strong>非同期/待機</strong>: FastAPI の高パフォーマンスの核心</li>
</ul>

<p>次の記事では、実際の FastAPI プロジェクトのインストールと初期化について説明します。</p>
