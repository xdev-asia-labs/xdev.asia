---
id: 019d8b40-a204-7001-b002-fastapi000204
title: 'Lesson 8: CRUD Operations & Repository Pattern'
slug: bai-8-crud-operations-va-repository-pattern
description: >-
  Build a complete CRUD API, Repository pattern, Pagination, Filtering, Sorting.
  Dependency Injection in FastAPI with Depends(). Error handling and custom
  exceptions.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: 'Part 2: Pydantic, Database & ORM'
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: From Basics to Advanced'
  slug: python-fastapi-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7314" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7314)"/>

  <!-- Decorations -->
  <g>
    <circle cx="711" cy="43" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="822" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="933" cy="225" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="1044" cy="56" r="23" fill="#34d399" opacity="0.07"/>
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
    <polygon points="927.2487113059643,89 927.2487113059643,117 903,131 878.7512886940357,117 878.7512886940357,89 903,75" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 Programming — Lesson 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 8: CRUD Operations & Repository</tspan>
      <tspan x="60" dy="42">Pattern</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Pydantic, Database & ORM</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-dependency-injection"><strong>1. Dependency Injection in FastAPI</strong></h2>

<p>FastAPI has a powerful Dependency Injection (DI) system adopted <code>Depends()</code>. DI helps reuse logic, separate concerns, and ease testing.</p>

<pre><code class="language-python">from fastapi import Depends, FastAPI, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db

app = FastAPI()


# Dependency cơ bản
async def common_parameters(
    skip: int = Query(0, ge=0),
    limit: int = Query(10, ge=1, le=100),
    search: str | None = Query(None, min_length=1, max_length=100),
):
    return {"skip": skip, "limit": limit, "search": search}


# Dependency chain (dependency phụ thuộc dependency khác)
class UserRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

async def get_user_repo(
    session: AsyncSession = Depends(get_db),
) -> UserRepository:
    return UserRepository(session)


# Class-based dependency
class Paginator:
    def __init__(
        self,
        page: int = Query(1, ge=1, description="Page number"),
        per_page: int = Query(20, ge=1, le=100, description="Items per page"),
    ):
        self.page = page
        self.per_page = per_page
        self.skip = (page - 1) * per_page

    @property
    def limit(self) -> int:
        return self.per_page


# Sử dụng dependencies
@app.get("/users/")
async def list_users(
    paginator: Paginator = Depends(),
    repo: UserRepository = Depends(get_user_repo),
):
    users, total = await repo.list_users(
        skip=paginator.skip,
        limit=paginator.limit,
    )
    return {
        "items": users,
        "total": total,
        "page": paginator.page,
        "per_page": paginator.per_page,
        "total_pages": (total + paginator.per_page - 1) // paginator.per_page,
    }
</code></pre>

<h2 id="2-generic-repository"><strong>2. Generic Repository Pattern</strong></h2>

<pre><code class="language-python"># app/repositories/base.py
from typing import Generic, TypeVar, Type

from pydantic import BaseModel
from sqlalchemy import select, func, asc, desc
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import Base

ModelType = TypeVar("ModelType", bound=Base)
CreateSchemaType = TypeVar("CreateSchemaType", bound=BaseModel)
UpdateSchemaType = TypeVar("UpdateSchemaType", bound=BaseModel)


class BaseRepository(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):
    """Generic repository với CRUD operations."""

    def __init__(self, model: Type[ModelType], session: AsyncSession):
        self.model = model
        self.session = session

    async def get(self, id: int) -> ModelType | None:
        result = await self.session.execute(
            select(self.model).where(self.model.id == id)
        )
        return result.scalar_one_or_none()

    async def get_or_404(self, id: int) -> ModelType:
        obj = await self.get(id)
        if not obj:
            from fastapi import HTTPException
            raise HTTPException(
                status_code=404,
                detail=f"{self.model.__name__} with id {id} not found",
            )
        return obj

    async def list(
        self,
        skip: int = 0,
        limit: int = 10,
        order_by: str | None = None,
        order_dir: str = "desc",
        filters: dict | None = None,
    ) -> tuple[list[ModelType], int]:
        query = select(self.model)

        # Apply filters
        if filters:
            for key, value in filters.items():
                if value is not None and hasattr(self.model, key):
                    column = getattr(self.model, key)
                    if isinstance(value, str):
                        query = query.where(column.ilike(f"%{value}%"))
                    else:
                        query = query.where(column == value)

        # Count
        count_query = select(func.count()).select_from(query.subquery())
        total = (await self.session.execute(count_query)).scalar() or 0

        # Order
        if order_by and hasattr(self.model, order_by):
            column = getattr(self.model, order_by)
            query = query.order_by(desc(column) if order_dir == "desc" else asc(column))

        # Pagination
        query = query.offset(skip).limit(limit)
        result = await self.session.execute(query)
        return list(result.scalars().all()), total

    async def create(self, data: CreateSchemaType) -> ModelType:
        obj = self.model(**data.model_dump())
        self.session.add(obj)
        await self.session.flush()
        await self.session.refresh(obj)
        return obj

    async def update(self, id: int, data: UpdateSchemaType) -> ModelType:
        obj = await self.get_or_404(id)
        update_data = data.model_dump(exclude_unset=True)
        for key, value in update_data.items():
            setattr(obj, key, value)
        await self.session.flush()
        await self.session.refresh(obj)
        return obj

    async def delete(self, id: int) -> None:
        obj = await self.get_or_404(id)
        await self.session.delete(obj)
        await self.session.flush()

    async def exists(self, **kwargs) -> bool:
        query = select(self.model)
        for key, value in kwargs.items():
            if hasattr(self.model, key):
                query = query.where(getattr(self.model, key) == value)
        result = await self.session.execute(
            select(func.count()).select_from(query.subquery())
        )
        return (result.scalar() or 0) > 0
</code></pre>

<h2 id="3-specific-repository"><strong>3. Specific Repository (Generic inheritance)</strong></h2>

<pre><code class="language-python"># app/repositories/user_repo.py
from sqlalchemy import select, or_
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.models.user import User
from app.repositories.base import BaseRepository
from app.schemas.user import UserCreate, UserUpdate


class UserRepository(BaseRepository[User, UserCreate, UserUpdate]):
    def __init__(self, session: AsyncSession):
        super().__init__(User, session)

    async def get_by_email(self, email: str) -> User | None:
        result = await self.session.execute(
            select(User).where(User.email == email)
        )
        return result.scalar_one_or_none()

    async def get_with_posts(self, user_id: int) -> User | None:
        result = await self.session.execute(
            select(User)
            .options(selectinload(User.posts))
            .where(User.id == user_id)
        )
        return result.scalar_one_or_none()

    async def search(
        self, query: str, skip: int = 0, limit: int = 10
    ) -> tuple[list[User], int]:
        stmt = select(User).where(
            or_(
                User.name.ilike(f"%{query}%"),
                User.email.ilike(f"%{query}%"),
            )
        )
        from sqlalchemy import func
        count = (await self.session.execute(
            select(func.count()).select_from(stmt.subquery())
        )).scalar() or 0

        result = await self.session.execute(
            stmt.offset(skip).limit(limit).order_by(User.created_at.desc())
        )
        return list(result.scalars().all()), count

    async def deactivate(self, user_id: int) -> User:
        user = await self.get_or_404(user_id)
        user.is_active = False
        await self.session.flush()
        await self.session.refresh(user)
        return user
</code></pre>

<h2 id="4-service-layer"><strong>4. Service Layer</strong></h2>

<pre><code class="language-python"># app/services/user_service.py
from fastapi import HTTPException, status

from app.core.security import hash_password, verify_password
from app.models.user import User
from app.repositories.user_repo import UserRepository
from app.schemas.user import UserCreate, UserUpdate


class UserService:
    def __init__(self, repo: UserRepository):
        self.repo = repo

    async def create_user(self, data: UserCreate) -> User:
        # Business logic: check email uniqueness
        if await self.repo.get_by_email(data.email):
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Email already registered",
            )

        # Hash password before saving
        user = User(
            name=data.name,
            email=data.email,
            hashed_password=hash_password(data.password),
            bio=data.bio,
        )
        self.repo.session.add(user)
        await self.repo.session.flush()
        await self.repo.session.refresh(user)
        return user

    async def update_user(self, user_id: int, data: UserUpdate) -> User:
        user = await self.repo.get_or_404(user_id)

        # Check email uniqueness if changing email
        if data.email and data.email != user.email:
            if await self.repo.get_by_email(data.email):
                raise HTTPException(
                    status_code=status.HTTP_409_CONFLICT,
                    detail="Email already in use",
                )

        update_data = data.model_dump(exclude_unset=True)
        for key, value in update_data.items():
            setattr(user, key, value)

        await self.repo.session.flush()
        await self.repo.session.refresh(user)
        return user

    async def get_user(self, user_id: int) -> User:
        return await self.repo.get_or_404(user_id)

    async def list_users(
        self, skip: int = 0, limit: int = 10, search: str | None = None
    ) -> tuple[list[User], int]:
        if search:
            return await self.repo.search(search, skip, limit)
        return await self.repo.list(skip=skip, limit=limit, order_by="created_at")

    async def delete_user(self, user_id: int) -> None:
        await self.repo.delete(user_id)
</code></pre>

<h2 id="5-complete-api"><strong>5. Complete CRUD API</strong></h2>

<pre><code class="language-python"># app/api/v1/users.py
from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.repositories.user_repo import UserRepository
from app.schemas.user import UserCreate, UserResponse, UserUpdate, PaginatedResponse
from app.services.user_service import UserService

router = APIRouter(prefix="/users", tags=["Users"])


# Dependencies
def get_user_service(session: AsyncSession = Depends(get_db)) -> UserService:
    repo = UserRepository(session)
    return UserService(repo)


@router.get("/", response_model=PaginatedResponse[UserResponse])
async def list_users(
    page: int = Query(1, ge=1),
    per_page: int = Query(20, ge=1, le=100),
    search: str | None = Query(None, min_length=1),
    service: UserService = Depends(get_user_service),
):
    """Lấy danh sách users với pagination."""
    skip = (page - 1) * per_page
    users, total = await service.list_users(skip=skip, limit=per_page, search=search)
    return PaginatedResponse(
        items=users,
        total=total,
        page=page,
        per_page=per_page,
        total_pages=(total + per_page - 1) // per_page,
    )


@router.get("/{user_id}", response_model=UserResponse)
async def get_user(
    user_id: int,
    service: UserService = Depends(get_user_service),
):
    """Lấy thông tin user theo ID."""
    return await service.get_user(user_id)


@router.post(
    "/",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_user(
    data: UserCreate,
    service: UserService = Depends(get_user_service),
):
    """Tạo user mới."""
    return await service.create_user(data)


@router.patch("/{user_id}", response_model=UserResponse)
async def update_user(
    user_id: int,
    data: UserUpdate,
    service: UserService = Depends(get_user_service),
):
    """Cập nhật thông tin user."""
    return await service.update_user(user_id, data)


@router.delete("/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(
    user_id: int,
    service: UserService = Depends(get_user_service),
):
    """Xóa user."""
    await service.delete_user(user_id)
</code></pre>

<h2 id="6-pagination-schema"><strong>6. Pagination Response Schema</strong></h2>

<pre><code class="language-python"># app/schemas/common.py
from typing import Generic, TypeVar
from pydantic import BaseModel

T = TypeVar("T")


class PaginatedResponse(BaseModel, Generic[T]):
    """Generic paginated response."""
    items: list[T]
    total: int
    page: int
    per_page: int
    total_pages: int

    @property
    def has_next(self) -> bool:
        return self.page < self.total_pages

    @property
    def has_prev(self) -> bool:
        return self.page > 1
</code></pre>

<h2 id="7-custom-exceptions"><strong>7. Custom Exceptions</strong></h2>

<pre><code class="language-python"># app/core/exceptions.py
from fastapi import HTTPException, Request, status
from fastapi.responses import JSONResponse


class AppException(Exception):
    """Base application exception."""
    def __init__(self, message: str, status_code: int = 500, error_code: str = "INTERNAL_ERROR"):
        self.message = message
        self.status_code = status_code
        self.error_code = error_code


class NotFoundError(AppException):
    def __init__(self, resource: str, id: int | str):
        super().__init__(
            message=f"{resource} with id '{id}' not found",
            status_code=404,
            error_code="NOT_FOUND",
        )


class ConflictError(AppException):
    def __init__(self, message: str):
        super().__init__(message=message, status_code=409, error_code="CONFLICT")


class ForbiddenError(AppException):
    def __init__(self, message: str = "You don't have permission to perform this action"):
        super().__init__(message=message, status_code=403, error_code="FORBIDDEN")


# Exception handler
async def app_exception_handler(request: Request, exc: AppException) -> JSONResponse:
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "error": exc.error_code,
            "message": exc.message,
            "path": str(request.url),
        },
    )


# Register trong main.py
# app.add_exception_handler(AppException, app_exception_handler)
</code></pre>

<h2 id="tong-ket"><strong>Summary</strong></h2>

<p>In this article, a complete architecture has been built:</p>

<ul>
<li><strong>Dependency Injection</strong>: Depends() for DI in FastAPI</li>
<li><strong>Generic Repository</strong>: Base CRUD operations reuse</li>
<li><strong>Specific Repository</strong>: Custom queries inherit Generic</li>
<li><strong>Service Layer</strong>: Business logic is separate</li>
<li><strong>CRUD API</strong>: Complete RESTful endpoints</li>
<li><strong>Pagination</strong>: Generic paginated response</li>
<li><strong>Custom Exceptions</strong>: Structured error handling</li>
</ul>

<p>The next article will implement Authentication with OAuth2 and JWT.</p>
