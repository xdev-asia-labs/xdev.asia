---
id: 019d8b40-a202-7001-b002-fastapi000202
title: 'Lesson 6: SQLAlchemy 2.0 & Async Database'
slug: bai-6-sqlalchemy-2-va-async-database
description: >-
  SQLAlchemy 2.0 ORM with declarative mapping, Relationships (1-1, 1-N, N-N),
  Async engine with asyncpg. Session management, Unit of Work pattern. Connect
  PostgreSQL and MySQL.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 2: Pydantic, Database & ORM'
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: From Basics to Advanced'
  slug: python-fastapi-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6701" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6701)"/>

  <!-- Decorations -->
  <g>
    <circle cx="711" cy="43" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="822" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="933" cy="225" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1044" cy="56" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="655" cy="147" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="53" x2="1100" y2="133" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="83" x2="1050" y2="153" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="977.2487113059643,139 977.2487113059643,167 953,181 928.7512886940357,167 928.7512886940357,139 953,125" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 Programming — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 6: SQLAlchemy 2.0 & Async Database</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Pydantic, Database & ORM</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-sqlalchemy-2-overview"><strong>1. SQLAlchemy 2.0 - Overview</strong></h2>

<p>SQLAlchemy 2.0 is a new major release with many important changes: native async support, new-style query API, and improved type hints. This is the most popular ORM in the Python ecosystem.</p>

<h3 id="cai-dat"><strong>Install</strong></h3>

<pre><code class="language-bash"># PostgreSQL async
uv add sqlalchemy asyncpg greenlet

# Hoặc PostgreSQL sync
uv add sqlalchemy psycopg2-binary

# MySQL async
uv add sqlalchemy aiomysql
</code></pre>

<h2 id="2-database-setup"><strong>2. Database Setup with Async Engine</strong></h2>

<pre><code class="language-python"># app/core/database.py
from sqlalchemy.ext.asyncio import (
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)
from sqlalchemy.orm import DeclarativeBase

from app.config import settings

# Async engine
engine = create_async_engine(
    settings.database_url,
    echo=settings.debug,        # Log SQL queries khi debug
    pool_size=20,               # Connection pool size
    max_overflow=10,            # Extra connections allowed
    pool_pre_ping=True,         # Kiểm tra connection trước khi dùng
    pool_recycle=3600,          # Recycle connections sau 1 giờ
)

# Async session factory
async_session = async_sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,     # Giữ data sau commit
)


# Base class cho tất cả models
class Base(DeclarativeBase):
    pass


# Dependency cho FastAPI
async def get_db():
    """Provide database session cho mỗi request."""
    async with async_session() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()
</code></pre>

<h2 id="3-models"><strong>3. Definition of Models</strong></h2>

<pre><code class="language-python"># app/models/user.py
from datetime import datetime

from sqlalchemy import String, Boolean, Integer, Text, ForeignKey, Table, Column
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base


# Association table cho many-to-many
user_roles = Table(
    "user_roles",
    Base.metadata,
    Column("user_id", Integer, ForeignKey("users.id", ondelete="CASCADE"), primary_key=True),
    Column("role_id", Integer, ForeignKey("roles.id", ondelete="CASCADE"), primary_key=True),
)


class User(Base):
    __tablename__ = "users"

    # Primary key
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)

    # Required fields
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    email: Mapped[str] = mapped_column(String(255), unique=True, nullable=False, index=True)
    hashed_password: Mapped[str] = mapped_column(String(255), nullable=False)

    # Optional fields
    bio: Mapped[str | None] = mapped_column(Text, nullable=True)
    avatar_url: Mapped[str | None] = mapped_column(String(500), nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)

    # Timestamps
    created_at: Mapped[datetime] = mapped_column(default=datetime.utcnow)
    updated_at: Mapped[datetime | None] = mapped_column(
        default=None, onupdate=datetime.utcnow
    )

    # Relationships
    posts: Mapped[list["Post"]] = relationship(
        back_populates="author",
        cascade="all, delete-orphan",
        lazy="selectin",  # Eager loading
    )
    profile: Mapped["UserProfile | None"] = relationship(
        back_populates="user",
        uselist=False,  # One-to-one
        cascade="all, delete-orphan",
    )
    roles: Mapped[list["Role"]] = relationship(
        secondary=user_roles,
        back_populates="users",
        lazy="selectin",
    )

    def __repr__(self) -> str:
        return f"User(id={self.id}, name={self.name!r}, email={self.email!r})"
</code></pre>

<pre><code class="language-python"># app/models/post.py
from datetime import datetime
from enum import Enum as PyEnum

from sqlalchemy import String, Text, Integer, ForeignKey, Enum
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base


class PostStatus(str, PyEnum):
    draft = "draft"
    published = "published"
    archived = "archived"


class Post(Base):
    __tablename__ = "posts"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    slug: Mapped[str] = mapped_column(String(250), unique=True, nullable=False, index=True)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    status: Mapped[PostStatus] = mapped_column(
        Enum(PostStatus), default=PostStatus.draft
    )
    view_count: Mapped[int] = mapped_column(Integer, default=0)

    # Foreign key
    author_id: Mapped[int] = mapped_column(
        ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True
    )

    # Timestamps
    created_at: Mapped[datetime] = mapped_column(default=datetime.utcnow)
    updated_at: Mapped[datetime | None] = mapped_column(
        default=None, onupdate=datetime.utcnow
    )
    published_at: Mapped[datetime | None] = mapped_column(nullable=True)

    # Relationships
    author: Mapped["User"] = relationship(back_populates="posts")
    comments: Mapped[list["Comment"]] = relationship(
        back_populates="post",
        cascade="all, delete-orphan",
    )

    def __repr__(self) -> str:
        return f"Post(id={self.id}, title={self.title!r})"


class Comment(Base):
    __tablename__ = "comments"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    post_id: Mapped[int] = mapped_column(
        ForeignKey("posts.id", ondelete="CASCADE"), nullable=False
    )
    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id", ondelete="CASCADE"), nullable=False
    )
    created_at: Mapped[datetime] = mapped_column(default=datetime.utcnow)

    # Relationships
    post: Mapped["Post"] = relationship(back_populates="comments")
    user: Mapped["User"] = relationship()
</code></pre>

<h2 id="4-async-queries"><strong>4. Async Queries</strong></h2>

<pre><code class="language-python"># app/repositories/user_repo.py
from sqlalchemy import select, func, or_
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.models.user import User


class UserRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def get_by_id(self, user_id: int) -> User | None:
        """Lấy user theo ID."""
        result = await self.session.execute(
            select(User).where(User.id == user_id)
        )
        return result.scalar_one_or_none()

    async def get_by_email(self, email: str) -> User | None:
        """Lấy user theo email."""
        result = await self.session.execute(
            select(User).where(User.email == email)
        )
        return result.scalar_one_or_none()

    async def get_with_posts(self, user_id: int) -> User | None:
        """Lấy user kèm posts (eager loading)."""
        result = await self.session.execute(
            select(User)
            .options(selectinload(User.posts))
            .where(User.id == user_id)
        )
        return result.scalar_one_or_none()

    async def list_users(
        self,
        skip: int = 0,
        limit: int = 10,
        search: str | None = None,
        is_active: bool | None = None,
    ) -> tuple[list[User], int]:
        """Lấy danh sách users với pagination và filter."""
        query = select(User)

        # Filters
        if search:
            query = query.where(
                or_(
                    User.name.ilike(f"%{search}%"),
                    User.email.ilike(f"%{search}%"),
                )
            )
        if is_active is not None:
            query = query.where(User.is_active == is_active)

        # Count total
        count_query = select(func.count()).select_from(query.subquery())
        total = (await self.session.execute(count_query)).scalar() or 0

        # Pagination
        query = query.offset(skip).limit(limit).order_by(User.created_at.desc())
        result = await self.session.execute(query)
        users = list(result.scalars().all())

        return users, total

    async def create(self, user: User) -> User:
        """Tạo user mới."""
        self.session.add(user)
        await self.session.flush()  # Flush để lấy ID
        await self.session.refresh(user)  # Refresh để lấy data mới
        return user

    async def update(self, user: User, data: dict) -> User:
        """Cập nhật user."""
        for key, value in data.items():
            setattr(user, key, value)
        await self.session.flush()
        await self.session.refresh(user)
        return user

    async def delete(self, user: User) -> None:
        """Xóa user."""
        await self.session.delete(user)
        await self.session.flush()
</code></pre>

<h2 id="5-fastapi-integration"><strong>5. Integration with FastAPI</strong></h2>

<pre><code class="language-python"># app/api/v1/users.py
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.models.user import User
from app.repositories.user_repo import UserRepository
from app.schemas.user import UserCreate, UserResponse, UserUpdate

router = APIRouter(prefix="/users", tags=["Users"])


def get_user_repo(session: AsyncSession = Depends(get_db)) -> UserRepository:
    return UserRepository(session)


@router.get("/", response_model=dict)
async def list_users(
    skip: int = Query(0, ge=0),
    limit: int = Query(10, ge=1, le=100),
    search: str | None = Query(None, min_length=1),
    repo: UserRepository = Depends(get_user_repo),
):
    users, total = await repo.list_users(skip=skip, limit=limit, search=search)
    return {
        "items": users,
        "total": total,
        "skip": skip,
        "limit": limit,
    }


@router.get("/{user_id}", response_model=UserResponse)
async def get_user(
    user_id: int,
    repo: UserRepository = Depends(get_user_repo),
):
    user = await repo.get_by_id(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@router.post("/", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def create_user(
    user_data: UserCreate,
    repo: UserRepository = Depends(get_user_repo),
):
    # Check email unique
    existing = await repo.get_by_email(user_data.email)
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    user = User(
        name=user_data.name,
        email=user_data.email,
        hashed_password=hash_password(user_data.password),
    )
    user = await repo.create(user)
    return user
</code></pre>

<h2 id="6-lifespan"><strong>6. Lifespan Events - Database initialization</strong></h2>

<pre><code class="language-python"># app/main.py
from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.core.database import engine, Base


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan - startup/shutdown events."""
    # Startup: tạo tables (chỉ dùng dev, production dùng Alembic)
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    print("Database tables created")

    yield  # Application is running

    # Shutdown: cleanup
    await engine.dispose()
    print("Database connections closed")


app = FastAPI(lifespan=lifespan)
</code></pre>

<h2 id="tong-ket"><strong>Summary</strong></h2>

<p>In this lesson learned:</p>

<ul>
<li><strong>Async Engine</strong>: Connect database with asyncpg, connection pooling</li>
<li><strong>Declarative Models</strong>: new Mapped[] and mapped_column() styles</li>
<li><strong>Relationships</strong>: One-to-one, One-to-many, Many-to-many</li>
<li><strong>Async Queries</strong>: select(), where(), join(), eager loading</li>
<li><strong>Repository Pattern</strong>: Standard CRUD operations</li>
<li><strong>FastAPI Integration</strong>: Depends() for database session</li>
</ul>

<p>The next article will guide Alembic migrations and database seeding.</p>
