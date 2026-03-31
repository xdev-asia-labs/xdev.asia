---
id: 019d8b40-a503-7001-b002-fastapi000503
title: 'Bài 19: Dockerize & CI/CD cho FastAPI'
slug: bai-19-dockerize-va-cicd-cho-fastapi
description: >-
  Docker multi-stage build cho FastAPI. Docker Compose cho development và
  production. GitHub Actions CI/CD pipeline. Automated testing, linting và
  deployment workflow.
duration_minutes: 140
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 5: Architecture, Testing & Production"
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: Từ Cơ bản đến Nâng cao'
  slug: python-fastapi-tu-co-ban-den-nang-cao
---

<h2 id="1-dockerfile"><strong>1. Dockerfile Multi-stage Build</strong></h2>

<pre><code class="language-dockerfile"># ===== Stage 1: Builder =====
FROM python:3.12-slim AS builder

WORKDIR /build

# Install uv for fast dependency resolution
COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv

# Copy dependency files first (cache layer)
COPY pyproject.toml uv.lock ./

# Install dependencies (no dev deps)
RUN uv sync --frozen --no-dev --no-editable

# Copy application code
COPY app/ ./app/
COPY alembic/ ./alembic/
COPY alembic.ini ./


# ===== Stage 2: Runtime =====
FROM python:3.12-slim AS runtime

# Security: non-root user
RUN groupadd --gid 1000 appuser && \
    useradd --uid 1000 --gid 1000 --shell /bin/bash appuser

WORKDIR /app

# Copy only what's needed from builder
COPY --from=builder /build/.venv /app/.venv
COPY --from=builder /build/app ./app
COPY --from=builder /build/alembic ./alembic
COPY --from=builder /build/alembic.ini ./

# Set PATH to use venv
ENV PATH="/app/.venv/bin:$PATH"
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Health check
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/health')"

# Switch to non-root user
USER appuser

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "4"]
</code></pre>

<pre><code class="language-dockerignore"># .dockerignore
__pycache__
*.pyc
.git
.gitignore
.env
.venv
tests/
docs/
*.md
.mypy_cache
.pytest_cache
.ruff_cache
htmlcov/
</code></pre>

<h2 id="2-docker-compose"><strong>2. Docker Compose</strong></h2>

<pre><code class="language-yaml"># docker-compose.yml
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
      target: runtime
    ports:
      - "8000:8000"
    env_file: .env
    environment:
      - DATABASE_URL=postgresql+asyncpg://postgres:postgres@db:5432/fastapi_db
      - REDIS_URL=redis://redis:6379/0
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_healthy
    restart: unless-stopped
    networks:
      - app-network

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: fastapi_db
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - app-network

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - app-network

  celery-worker:
    build:
      context: .
      target: runtime
    command: celery -A app.core.celery worker --loglevel=info --concurrency=4
    env_file: .env
    environment:
      - DATABASE_URL=postgresql+asyncpg://postgres:postgres@db:5432/fastapi_db
      - REDIS_URL=redis://redis:6379/0
    depends_on:
      - db
      - redis
    restart: unless-stopped
    networks:
      - app-network

  celery-beat:
    build:
      context: .
      target: runtime
    command: celery -A app.core.celery beat --loglevel=info
    env_file: .env
    environment:
      - REDIS_URL=redis://redis:6379/0
    depends_on:
      - redis
    restart: unless-stopped
    networks:
      - app-network

volumes:
  postgres_data:
  redis_data:

networks:
  app-network:
    driver: bridge
</code></pre>

<pre><code class="language-yaml"># docker-compose.dev.yml - Override cho development
services:
  app:
    build:
      target: builder
    command: uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
    volumes:
      - .:/app
    environment:
      - DEBUG=true
</code></pre>

<pre><code class="language-bash"># Development
docker compose -f docker-compose.yml -f docker-compose.dev.yml up

# Production
docker compose up -d --build
</code></pre>

<h2 id="3-github-actions"><strong>3. GitHub Actions CI/CD</strong></h2>

<pre><code class="language-yaml"># .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  PYTHON_VERSION: "3.12"
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  # ===== Job 1: Lint & Type Check =====
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install uv
        uses: astral-sh/setup-uv@v4

      - name: Set up Python
        run: uv python install ${{ env.PYTHON_VERSION }}

      - name: Install dependencies
        run: uv sync --frozen

      - name: Ruff lint
        run: uv run ruff check .

      - name: Ruff format check
        run: uv run ruff format --check .

      - name: MyPy type check
        run: uv run mypy app/

  # ===== Job 2: Tests =====
  test:
    runs-on: ubuntu-latest
    needs: lint

    services:
      postgres:
        image: postgres:16-alpine
        env:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: test_db
        ports:
          - 5432:5432
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

      redis:
        image: redis:7-alpine
        ports:
          - 6379:6379
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v4

      - name: Install uv
        uses: astral-sh/setup-uv@v4

      - name: Set up Python
        run: uv python install ${{ env.PYTHON_VERSION }}

      - name: Install dependencies
        run: uv sync --frozen

      - name: Run tests
        env:
          DATABASE_URL: postgresql+asyncpg://postgres:postgres@localhost:5432/test_db
          REDIS_URL: redis://localhost:6379/0
          SECRET_KEY: test-secret-key-ci
        run: |
          uv run pytest --cov=app --cov-report=xml --cov-report=term-missing

      - name: Upload coverage
        uses: codecov/codecov-action@v4
        with:
          file: coverage.xml
          fail_ci_if_error: false

  # ===== Job 3: Build & Push Docker Image =====
  build:
    runs-on: ubuntu-latest
    needs: test
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'

    permissions:
      contents: read
      packages: write

    steps:
      - uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Login to GHCR
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
          tags: |
            type=sha
            type=ref,event=branch
            type=semver,pattern={{version}}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  # ===== Job 4: Deploy =====
  deploy:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    environment: production

    steps:
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /opt/fastapi-app
            docker compose pull
            docker compose up -d --remove-orphans
            docker image prune -f

            # Run migrations
            docker compose exec -T app alembic upgrade head

            # Health check
            sleep 10
            curl -f http://localhost:8000/health || exit 1
</code></pre>

<h2 id="4-makefile"><strong>4. Makefile cho Developer Experience</strong></h2>

<pre><code class="language-makefile"># Makefile
.PHONY: help dev test lint build deploy

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	uv sync

dev: ## Start development server
	docker compose -f docker-compose.yml -f docker-compose.dev.yml up

test: ## Run tests
	uv run pytest --cov=app --cov-report=term-missing -v

test-unit: ## Run unit tests
	uv run pytest -m unit -v

test-e2e: ## Run e2e tests
	uv run pytest -m e2e -v

lint: ## Run linters
	uv run ruff check .
	uv run ruff format --check .
	uv run mypy app/

format: ## Format code
	uv run ruff check --fix .
	uv run ruff format .

migrate: ## Run database migrations
	uv run alembic upgrade head

migrate-create: ## Create new migration (usage: make migrate-create MSG="add users")
	uv run alembic revision --autogenerate -m "$(MSG)"

build: ## Build Docker image
	docker compose build

deploy: ## Deploy to production
	docker compose -f docker-compose.yml up -d --build

clean: ## Clean up
	find . -type d -name __pycache__ -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	rm -rf .pytest_cache .mypy_cache .ruff_cache htmlcov/
</code></pre>

<h2 id="5-pre-commit"><strong>5. Pre-commit Hooks</strong></h2>

<pre><code class="language-yaml"># .pre-commit-config.yaml
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.8.0
    hooks:
      - id: ruff
        args: [--fix]
      - id: ruff-format

  - repo: https://github.com/pre-commit/mirrors-mypy
    rev: v1.13.0
    hooks:
      - id: mypy
        additional_dependencies: [pydantic, fastapi]
        args: [--ignore-missing-imports]

  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v5.0.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-added-large-files
        args: [--maxkb=1000]
</code></pre>

<pre><code class="language-bash"># Install pre-commit
pip install pre-commit
pre-commit install
</code></pre>

<h2 id="tong-ket"><strong>Tổng kết</strong></h2>

<ul>
<li><strong>Docker Multi-stage</strong>: Build nhẹ, production-ready (non-root, healthcheck)</li>
<li><strong>Docker Compose</strong>: Full stack (App + DB + Redis + Celery)</li>
<li><strong>GitHub Actions</strong>: Lint → Test → Build → Deploy pipeline</li>
<li><strong>Makefile</strong>: Developer shortcuts</li>
<li><strong>Pre-commit</strong>: Enforce code quality trước khi commit</li>
</ul>
