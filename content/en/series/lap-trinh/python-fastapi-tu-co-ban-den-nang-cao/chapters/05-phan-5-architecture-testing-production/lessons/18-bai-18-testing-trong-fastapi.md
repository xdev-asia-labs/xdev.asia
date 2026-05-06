---
id: 019d8b40-a502-7001-b002-fastapi000502
title: 'Lesson 18: Testing in FastAPI'
slug: bai-18-testing-trong-fastapi
description: >-
  pytest and pytest-asyncio for FastAPI. TestClient and httpx.AsyncClient. Unit
  test, integration test, e2e test. Factory Boy for test data. Coverage report
  and testing strategies.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 18
section_title: 'Part 5: Architecture, Testing & Production'
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: From Basics to Advanced'
  slug: python-fastapi-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8814" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8814)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1071" cy="123" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="1042" cy="154" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1013" cy="185" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="984" cy="216" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="955" cy="247" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="133" x2="1100" y2="213" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="163" x2="1050" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="957.2487113059643,119 957.2487113059643,147 933,161 908.7512886940357,147 908.7512886940357,119 933,105" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 Programming — Lesson 18</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 18: Testing in FastAPI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Architecture, Testing & Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-setup-testing"><strong>1. Setup Testing Environment</strong></h2>

<pre><code class="language-bash"># Cài đặt test dependencies
pip install pytest pytest-asyncio httpx factory-boy pytest-cov aiosqlite
</code></pre>

<pre><code class="language-toml"># pyproject.toml
[tool.pytest.ini_options]
asyncio_mode = "auto"
testpaths = ["tests"]
python_files = ["test_*.py"]
python_functions = ["test_*"]
addopts = "-v --tb=short --strict-markers"
markers = [
    "unit: Unit tests",
    "integration: Integration tests",
    "e2e: End-to-end tests",
]

[tool.coverage.run]
source = ["app"]
omit = ["app/main.py", "*/tests/*"]

[tool.coverage.report]
show_missing = true
fail_under = 80
</code></pre>

<pre><code>tests/
├── conftest.py              # Shared fixtures
├── factories.py             # Factory Boy factories
├── unit/
│   ├── test_user_service.py
│   └── test_schemas.py
├── integration/
│   ├── test_user_repository.py
│   └── test_auth_service.py
└── e2e/
    ├── test_users_api.py
    └── test_auth_api.py
</code></pre>

<h2 id="2-conftest"><strong>2. Conftest & Fixtures</strong></h2>

<pre><code class="language-python"># tests/conftest.py
import asyncio
from collections.abc import AsyncGenerator

import pytest
from httpx import ASGITransport, AsyncClient
from sqlalchemy.ext.asyncio import (
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

from app.core.database import Base, get_db
from app.main import create_app


# ---- Engine & Session ----

TEST_DATABASE_URL = "sqlite+aiosqlite:///./test.db"

engine = create_async_engine(TEST_DATABASE_URL, echo=False)
TestSessionLocal = async_sessionmaker(engine, expire_on_commit=False)


@pytest.fixture(scope="session")
def event_loop():
    """Tạo event loop cho toàn bộ test session."""
    loop = asyncio.new_event_loop()
    yield loop
    loop.close()


@pytest.fixture(autouse=True)
async def setup_db():
    """Tạo tables trước mỗi test, drop sau khi xong."""
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)


@pytest.fixture
async def db_session() -> AsyncGenerator[AsyncSession]:
    """Cung cấp database session cho mỗi test."""
    async with TestSessionLocal() as session:
        yield session
        await session.rollback()


# ---- App & Client ----

@pytest.fixture
async def app(db_session: AsyncSession):
    """Tạo FastAPI app với test database."""
    _app = create_app()

    async def override_get_db():
        yield db_session

    _app.dependency_overrides[get_db] = override_get_db
    return _app


@pytest.fixture
async def client(app) -> AsyncGenerator[AsyncClient]:
    """HTTP client cho e2e tests."""
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as ac:
        yield ac


@pytest.fixture
async def auth_client(client: AsyncClient) -> AsyncClient:
    """Authenticated client."""
    response = await client.post("/api/v1/auth/register", json={
        "name": "Test User",
        "email": "test@example.com",
        "password": "StrongPass123!",
    })
    token = response.json()["access_token"]
    client.headers["Authorization"] = f"Bearer {token}"
    return client
</code></pre>

<h2 id="3-factory-boy"><strong>3. Factory Boy for Test Data</strong></h2>

<pre><code class="language-python"># tests/factories.py
import factory
from factory import fuzzy

from app.core.security import hash_password
from app.modules.users.models import User
from app.modules.posts.models import Post


class UserFactory(factory.Factory):
    class Meta:
        model = User

    id = factory.Sequence(lambda n: n + 1)
    name = factory.Faker("name")
    email = factory.LazyAttribute(lambda o: f"user{o.id}@example.com")
    hashed_password = factory.LazyFunction(lambda: hash_password("Test1234!"))
    is_active = True


class PostFactory(factory.Factory):
    class Meta:
        model = Post

    id = factory.Sequence(lambda n: n + 1)
    title = factory.Faker("sentence", nb_words=5)
    content = factory.Faker("paragraph")
    author_id = factory.SubFactory(UserFactory)
    is_published = True
</code></pre>

<h2 id="4-unit-tests"><strong>4. Unit Tests</strong></h2>

<pre><code class="language-python"># tests/unit/test_schemas.py
import pytest
from pydantic import ValidationError
from app.modules.users.schemas import UserCreate


class TestUserCreateSchema:
    def test_valid_user(self):
        user = UserCreate(
            name="John Doe",
            email="john@example.com",
            password="StrongPass123!",
        )
        assert user.name == "John Doe"
        assert user.email == "john@example.com"

    def test_short_name(self):
        with pytest.raises(ValidationError) as exc_info:
            UserCreate(name="J", email="j@e.com", password="StrongPass123!")
        errors = exc_info.value.errors()
        assert errors[0]["loc"] == ("name",)
        assert "min_length" in errors[0]["type"]

    def test_short_password(self):
        with pytest.raises(ValidationError):
            UserCreate(name="John", email="j@e.com", password="123")
</code></pre>

<pre><code class="language-python"># tests/unit/test_user_service.py
from unittest.mock import AsyncMock, MagicMock

import pytest
from fastapi import HTTPException

from app.modules.users.schemas import UserCreate
from app.modules.users.service import UserService
from tests.factories import UserFactory


class TestUserService:
    @pytest.fixture
    def mock_repo(self):
        repo = MagicMock()
        repo.get_by_email = AsyncMock(return_value=None)
        repo.get_by_id = AsyncMock()
        repo.create = AsyncMock()
        return repo

    @pytest.fixture
    def service(self, mock_repo):
        return UserService(repo=mock_repo)

    async def test_create_user_success(self, service, mock_repo):
        data = UserCreate(name="John", email="john@e.com", password="Test1234!")
        mock_repo.create.return_value = UserFactory.build(
            name="John", email="john@e.com"
        )

        result = await service.create_user(data)

        assert result.name == "John"
        assert result.email == "john@e.com"
        mock_repo.create.assert_awaited_once()

    async def test_create_user_email_taken(self, service, mock_repo):
        mock_repo.get_by_email.return_value = UserFactory.build()
        data = UserCreate(name="John", email="taken@e.com", password="Test1234!")

        with pytest.raises(HTTPException) as exc_info:
            await service.create_user(data)
        assert exc_info.value.status_code == 409

    async def test_get_user_not_found(self, service, mock_repo):
        mock_repo.get_by_id.return_value = None

        with pytest.raises(HTTPException) as exc_info:
            await service.get_user(999)
        assert exc_info.value.status_code == 404
</code></pre>

<h2 id="5-integration-tests"><strong>5. Integration Tests</strong></h2>

<pre><code class="language-python"># tests/integration/test_user_repository.py
import pytest
from sqlalchemy.ext.asyncio import AsyncSession

from app.modules.users.models import User
from app.modules.users.repository import UserRepository


@pytest.mark.integration
class TestUserRepository:
    @pytest.fixture
    def repo(self, db_session: AsyncSession):
        return UserRepository(session=db_session)

    async def test_create_and_get(self, repo: UserRepository, db_session):
        user = User(
            name="Alice",
            email="alice@example.com",
            hashed_password="hashed",
        )
        created = await repo.create(user)
        await db_session.commit()

        found = await repo.get_by_id(created.id)
        assert found is not None
        assert found.name == "Alice"

    async def test_get_by_email(self, repo: UserRepository, db_session):
        user = User(
            name="Bob",
            email="bob@example.com",
            hashed_password="hashed",
        )
        await repo.create(user)
        await db_session.commit()

        found = await repo.get_by_email("bob@example.com")
        assert found is not None
        assert found.name == "Bob"

    async def test_get_nonexistent(self, repo: UserRepository):
        found = await repo.get_by_id(99999)
        assert found is None
</code></pre>

<h2 id="6-e2e-tests"><strong>6. End-to-End Tests</strong></h2>

<pre><code class="language-python"># tests/e2e/test_users_api.py
import pytest
from httpx import AsyncClient


@pytest.mark.e2e
class TestUsersAPI:
    async def test_create_user(self, client: AsyncClient):
        response = await client.post("/api/v1/users/", json={
            "name": "Jane Doe",
            "email": "jane@example.com",
            "password": "StrongPass123!",
        })
        assert response.status_code == 201
        data = response.json()
        assert data["name"] == "Jane Doe"
        assert data["email"] == "jane@example.com"
        assert "id" in data
        assert "hashed_password" not in data  # Không expose password

    async def test_create_user_duplicate_email(self, client: AsyncClient):
        payload = {
            "name": "Jane",
            "email": "duplicate@example.com",
            "password": "StrongPass123!",
        }
        await client.post("/api/v1/users/", json=payload)
        response = await client.post("/api/v1/users/", json=payload)
        assert response.status_code == 409

    async def test_get_user(self, client: AsyncClient):
        # Create
        create_resp = await client.post("/api/v1/users/", json={
            "name": "Bob",
            "email": "bob@example.com",
            "password": "StrongPass123!",
        })
        user_id = create_resp.json()["id"]

        # Get
        response = await client.get(f"/api/v1/users/{user_id}")
        assert response.status_code == 200
        assert response.json()["name"] == "Bob"

    async def test_get_user_not_found(self, client: AsyncClient):
        response = await client.get("/api/v1/users/99999")
        assert response.status_code == 404
</code></pre>

<pre><code class="language-python"># tests/e2e/test_auth_api.py
import pytest
from httpx import AsyncClient


@pytest.mark.e2e
class TestAuthAPI:
    async def test_register_and_login(self, client: AsyncClient):
        # Register
        resp = await client.post("/api/v1/auth/register", json={
            "name": "User",
            "email": "user@example.com",
            "password": "StrongPass123!",
        })
        assert resp.status_code == 201
        assert "access_token" in resp.json()

        # Login
        resp = await client.post("/api/v1/auth/login", json={
            "email": "user@example.com",
            "password": "StrongPass123!",
        })
        assert resp.status_code == 200
        data = resp.json()
        assert "access_token" in data
        assert data["token_type"] == "bearer"

    async def test_protected_endpoint(self, auth_client: AsyncClient):
        response = await auth_client.get("/api/v1/users/me")
        assert response.status_code == 200
        assert response.json()["email"] == "test@example.com"

    async def test_protected_without_token(self, client: AsyncClient):
        response = await client.get("/api/v1/users/me")
        assert response.status_code == 401
</code></pre>

<h2 id="7-advanced-patterns"><strong>7. Advanced Testing Patterns</strong></h2>

<pre><code class="language-python"># Parametrize tests
@pytest.mark.parametrize("password,expected_status", [
    ("short", 422),           # Quá ngắn
    ("nouppercase1!", 422),   # Thiếu uppercase
    ("NOLOWERCASE1!", 422),   # Thiếu lowercase
    ("NoSpecialChar1", 422),  # Thiếu special char
    ("ValidPass123!", 201),   # OK
])
async def test_password_validation(client, password, expected_status):
    response = await client.post("/api/v1/auth/register", json={
        "name": "Test",
        "email": f"test_{password[:5]}@example.com",
        "password": password,
    })
    assert response.status_code == expected_status


# Freezegun cho time-dependent tests
from freezegun import freeze_time

@freeze_time("2024-01-01 12:00:00")
async def test_token_expiry(client):
    resp = await client.post("/api/v1/auth/login", json={
        "email": "user@example.com",
        "password": "StrongPass123!",
    })
    token = resp.json()["access_token"]

    # Advance time past expiry
    with freeze_time("2024-01-02 12:00:00"):
        resp = await client.get(
            "/api/v1/users/me",
            headers={"Authorization": f"Bearer {token}"},
        )
        assert resp.status_code == 401


# Mock external services
from unittest.mock import patch

async def test_send_welcome_email(client):
    with patch("app.modules.auth.service.send_email") as mock_email:
        mock_email.return_value = True
        await client.post("/api/v1/auth/register", json={
            "name": "New User",
            "email": "new@example.com",
            "password": "StrongPass123!",
        })
        mock_email.assert_called_once_with(
            to="new@example.com",
            subject="Welcome!",
        )
</code></pre>

<h2 id="8-coverage"><strong>8. Coverage Report</strong></h2>

<pre><code class="language-bash"># Chạy tests với coverage
pytest --cov=app --cov-report=html --cov-report=term-missing

# Chạy specific marker
pytest -m unit
pytest -m integration
pytest -m e2e

# Chạy parallel tests
pip install pytest-xdist
pytest -n auto

# Output
# ---------- coverage: ... ----------
# Name                              Stmts   Miss  Cover   Missing
# ---------------------------------------------------------------
# app/modules/users/service.py         25      2    92%   45-46
# app/modules/users/repository.py      18      0   100%
# app/modules/auth/service.py          35      3    91%   78-80
# ---------------------------------------------------------------
# TOTAL                               245     12    95%
</code></pre>

<h2 id="tong-ket"><strong>Summary</strong></h2>

<ul>
<li><strong>pytest + pytest-asyncio</strong>: Async test support</li>
<li><strong>Fixtures</strong>: db_session, client, auth_client - dependency injection for tests</li>
<li><strong>Factory Boy</strong>: Create test data easily</li>
<li><strong>3 test levels</strong>: Unit → Integration → E2E</li>
<li><strong>Coverage ≥ 80%</strong>: Ensuring code quality</li>
</ul>
