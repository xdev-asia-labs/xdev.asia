---
id: 019d8b40-c503-7001-b004-django00000503
title: 'Bài 19: Docker & CI/CD cho Django'
slug: bai-19-docker-va-cicd-cho-django
description: >-
  Dockerize Django application. Docker Compose (Django + PostgreSQL +
  Redis + Celery). GitHub Actions CI/CD pipeline.
  Multi-stage builds, environment management.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 5: Testing, Deployment & Production"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

<h2 id="1-dockerfile"><strong>1. Dockerfile (Multi-stage)</strong></h2>

<pre><code class="language-dockerfile">FROM python:3.12-slim AS base
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1
WORKDIR /app

FROM base AS builder
RUN pip install --upgrade pip
COPY requirements.txt .
RUN pip install --prefix=/install -r requirements.txt

FROM base AS runtime
COPY --from=builder /install /usr/local
COPY . .
RUN python manage.py collectstatic --noinput

EXPOSE 8000
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "4"]
</code></pre>

<h2 id="2-docker-compose"><strong>2. Docker Compose</strong></h2>

<pre><code class="language-yaml">services:
  web:
    build: .
    ports:
      - "8000:8000"
    env_file: .env
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_started
    command: gunicorn config.wsgi:application --bind 0.0.0.0:8000

  db:
    image: postgres:16-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: ${DB_NAME}
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${DB_USER}"]
      interval: 5s
      retries: 5

  redis:
    image: redis:7-alpine

  celery:
    build: .
    command: celery -A config worker -l info
    env_file: .env
    depends_on:
      - redis
      - db

  celery-beat:
    build: .
    command: celery -A config beat -l info
    env_file: .env
    depends_on:
      - redis

volumes:
  postgres_data:
</code></pre>

<h2 id="3-github-actions"><strong>3. GitHub Actions CI/CD</strong></h2>

<pre><code class="language-yaml">name: Django CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_DB: test_db
          POSTGRES_USER: test_user
          POSTGRES_PASSWORD: test_pass
        ports: ["5432:5432"]
        options: --health-cmd pg_isready --health-interval 10s

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
      - run: pip install -r requirements.txt
      - run: pytest --cov=. --cov-report=xml
        env:
          DATABASE_URL: postgres://test_user:test_pass@localhost/test_db

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to production
        run: |
          ssh ${{ secrets.SERVER_HOST }} "cd /app && git pull && docker compose up -d --build"
</code></pre>

<h2 id="4-env-management"><strong>4. Environment Management</strong></h2>

<pre><code class="language-python"># settings.py
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.environ['DJANGO_SECRET_KEY']
DEBUG = os.environ.get('DEBUG', 'False') == 'True'
ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', '').split(',')

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ['DB_NAME'],
        'USER': os.environ['DB_USER'],
        'PASSWORD': os.environ['DB_PASSWORD'],
        'HOST': os.environ.get('DB_HOST', 'localhost'),
        'PORT': os.environ.get('DB_PORT', '5432'),
    },
}
</code></pre>

<p>Bài tiếp theo: <strong>Production Deployment & Monitoring</strong>.</p>
