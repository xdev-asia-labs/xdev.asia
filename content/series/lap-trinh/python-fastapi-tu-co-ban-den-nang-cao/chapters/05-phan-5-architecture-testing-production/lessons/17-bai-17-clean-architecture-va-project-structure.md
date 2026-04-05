---
id: 019d8b40-a501-7001-b002-fastapi000501
title: 'Bài 17: Clean Architecture & Project Structure'
slug: bai-17-clean-architecture-va-project-structure
description: >-
  Clean Architecture cho FastAPI, Domain-Driven Design basics. Service layer,
  Repository pattern, Use cases. Modular project structure cho large-scale
  applications. API versioning strategies.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 5: Architecture, Testing & Production"
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: Từ Cơ bản đến Nâng cao'
  slug: python-fastapi-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4667" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4667)"/>

  <!-- Decorations -->
  <g>
    <circle cx="991" cy="283" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="882" cy="194" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="773" cy="105" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="664" cy="276" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="1055" cy="187" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="193" x2="1100" y2="273" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="223" x2="1050" y2="293" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1067.2487113059642,229 1067.2487113059642,257 1043,271 1018.7512886940357,257 1018.7512886940357,229 1043,215" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 Lập trình — Bài 17</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 17: Clean Architecture &amp; Project</tspan>
      <tspan x="60" dy="42">Structure</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Architecture, Testing &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-clean-architecture"><strong>1. Clean Architecture cho FastAPI</strong></h2>

<p>Clean Architecture (Uncle Bob) tách ứng dụng thành các layers độc lập, giúp dễ test, maintain và scale:</p>

<pre><code>┌───────────────────────────────────────────────┐
│              Presentation Layer                │
│    (FastAPI Routes, Schemas, Dependencies)     │
├───────────────────────────────────────────────┤
│              Application Layer                 │
│         (Use Cases, Services, DTOs)            │
├───────────────────────────────────────────────┤
│                Domain Layer                    │
│      (Entities, Value Objects, Interfaces)     │
├───────────────────────────────────────────────┤
│            Infrastructure Layer                │
│  (Database, External APIs, File System, Cache) │
└───────────────────────────────────────────────┘

Rule: Dependencies point INWARD only
Outer layers depend on inner layers, never the reverse
</code></pre>

<h2 id="2-project-structure"><strong>2. Modular Project Structure</strong></h2>

<pre><code>app/
├── __init__.py
├── main.py                       # FastAPI app factory
├── config.py                     # Pydantic settings
│
├── core/                         # Shared infrastructure
│   ├── __init__.py
│   ├── database.py               # SQLAlchemy engine, session
│   ├── security.py               # JWT, password hashing
│   ├── cache.py                  # Redis cache
│   ├── exceptions.py             # Base exceptions
│   └── dependencies.py           # Shared dependencies
│
├── modules/                      # Feature modules
│   ├── __init__.py
│   │
│   ├── users/                    # User module
│   │   ├── __init__.py
│   │   ├── router.py             # API routes
│   │   ├── schemas.py            # Pydantic schemas
│   │   ├── models.py             # SQLAlchemy models
│   │   ├── repository.py         # Data access
│   │   ├── service.py            # Business logic
│   │   ├── dependencies.py       # Module-specific deps
│   │   └── exceptions.py         # Module exceptions
│   │
│   ├── posts/                    # Post module
│   │   ├── __init__.py
│   │   ├── router.py
│   │   ├── schemas.py
│   │   ├── models.py
│   │   ├── repository.py
│   │   └── service.py
│   │
│   └── auth/                     # Auth module
│       ├── __init__.py
│       ├── router.py
│       ├── schemas.py
│       ├── service.py
│       └── dependencies.py
│
├── middleware/                    # Custom middleware
│   ├── __init__.py
│   ├── logging.py
│   └── security.py
│
└── utils/                        # Shared utilities
    ├── __init__.py
    ├── pagination.py
    └── validators.py
</code></pre>

<h2 id="3-app-factory"><strong>3. Application Factory Pattern</strong></h2>

<pre><code class="language-python"># app/main.py
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings


def create_app() -> FastAPI:
    """Application factory - tạo và cấu hình FastAPI app."""

    @asynccontextmanager
    async def lifespan(app: FastAPI):
        # Startup
        from app.core.database import engine, Base
        from app.core.cache import init_cache

        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
        await init_cache()
        yield
        # Shutdown
        await engine.dispose()

    app = FastAPI(
        title=settings.app_name,
        version=settings.app_version,
        lifespan=lifespan,
        docs_url="/docs" if settings.debug else None,
        redoc_url="/redoc" if settings.debug else None,
    )

    # Middleware
    _setup_middleware(app)

    # Routes
    _setup_routes(app)

    # Exception handlers
    _setup_exception_handlers(app)

    return app


def _setup_middleware(app: FastAPI) -> None:
    from app.middleware.logging import LoggingMiddleware
    from app.middleware.security import SecurityHeadersMiddleware

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    app.add_middleware(SecurityHeadersMiddleware)
    app.add_middleware(LoggingMiddleware)


def _setup_routes(app: FastAPI) -> None:
    from app.modules.auth.router import router as auth_router
    from app.modules.users.router import router as users_router
    from app.modules.posts.router import router as posts_router

    app.include_router(auth_router, prefix="/api/v1")
    app.include_router(users_router, prefix="/api/v1")
    app.include_router(posts_router, prefix="/api/v1")


def _setup_exception_handlers(app: FastAPI) -> None:
    from app.core.exceptions import AppException, app_exception_handler

    app.add_exception_handler(AppException, app_exception_handler)


# Create app instance
app = create_app()
</code></pre>

<h2 id="4-module-pattern"><strong>4. Module Pattern</strong></h2>

<pre><code class="language-python"># app/modules/users/models.py
from datetime import datetime
from sqlalchemy import String, Boolean
from sqlalchemy.orm import Mapped, mapped_column
from app.core.database import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100))
    email: Mapped[str] = mapped_column(String(255), unique=True)
    hashed_password: Mapped[str] = mapped_column(String(255))
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(default=datetime.utcnow)
</code></pre>

<pre><code class="language-python"># app/modules/users/schemas.py
from pydantic import BaseModel, Field
from datetime import datetime


class UserCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: str
    password: str = Field(..., min_length=8)


class UserUpdate(BaseModel):
    name: str | None = None
    email: str | None = None


class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    is_active: bool
    created_at: datetime

    model_config = {"from_attributes": True}
</code></pre>

<pre><code class="language-python"># app/modules/users/repository.py
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from .models import User


class UserRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def get_by_id(self, id: int) -> User | None:
        result = await self.session.execute(select(User).where(User.id == id))
        return result.scalar_one_or_none()

    async def get_by_email(self, email: str) -> User | None:
        result = await self.session.execute(select(User).where(User.email == email))
        return result.scalar_one_or_none()

    async def create(self, user: User) -> User:
        self.session.add(user)
        await self.session.flush()
        await self.session.refresh(user)
        return user
</code></pre>

<pre><code class="language-python"># app/modules/users/service.py
from fastapi import HTTPException, status

from app.core.security import hash_password
from .models import User
from .repository import UserRepository
from .schemas import UserCreate


class UserService:
    def __init__(self, repo: UserRepository):
        self.repo = repo

    async def create_user(self, data: UserCreate) -> User:
        if await self.repo.get_by_email(data.email):
            raise HTTPException(status.HTTP_409_CONFLICT, "Email taken")

        user = User(
            name=data.name,
            email=data.email,
            hashed_password=hash_password(data.password),
        )
        return await self.repo.create(user)

    async def get_user(self, user_id: int) -> User:
        user = await self.repo.get_by_id(user_id)
        if not user:
            raise HTTPException(status.HTTP_404_NOT_FOUND, "User not found")
        return user
</code></pre>

<pre><code class="language-python"># app/modules/users/dependencies.py
from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from .repository import UserRepository
from .service import UserService


def get_user_service(session: AsyncSession = Depends(get_db)) -> UserService:
    repo = UserRepository(session)
    return UserService(repo)
</code></pre>

<pre><code class="language-python"># app/modules/users/router.py
from fastapi import APIRouter, Depends, status

from .dependencies import get_user_service
from .schemas import UserCreate, UserResponse
from .service import UserService

router = APIRouter(prefix="/users", tags=["Users"])


@router.post("/", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def create_user(
    data: UserCreate,
    service: UserService = Depends(get_user_service),
):
    return await service.create_user(data)


@router.get("/{user_id}", response_model=UserResponse)
async def get_user(
    user_id: int,
    service: UserService = Depends(get_user_service),
):
    return await service.get_user(user_id)
</code></pre>

<h2 id="5-api-versioning"><strong>5. API Versioning</strong></h2>

<pre><code class="language-python"># URL-based versioning (recommended)
app.include_router(users_v1_router, prefix="/api/v1")
app.include_router(users_v2_router, prefix="/api/v2")

# Header-based versioning
from fastapi import Header

@router.get("/users/")
async def get_users(api_version: str = Header("v1", alias="X-API-Version")):
    if api_version == "v2":
        return get_users_v2()
    return get_users_v1()
</code></pre>

<h2 id="tong-ket"><strong>Tổng kết</strong></h2>

<p>Trong bài này đã xây dựng:</p>

<ul>
<li><strong>Clean Architecture</strong>: 4 layers tách biệt rõ ràng</li>
<li><strong>Modular Structure</strong>: Feature-based modules</li>
<li><strong>App Factory</strong>: Tạo app linh hoạt, dễ test</li>
<li><strong>Module Pattern</strong>: Router → Service → Repository → Model</li>
<li><strong>API Versioning</strong>: URL-based versioning</li>
</ul>

<p>Bài tiếp theo sẽ đi vào Testing.</p>
