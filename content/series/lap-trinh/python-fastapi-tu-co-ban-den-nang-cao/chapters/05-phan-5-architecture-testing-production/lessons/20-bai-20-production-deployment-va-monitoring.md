---
id: 019d8b40-a504-7001-b002-fastapi000504
title: 'Bài 20: Production Deployment & Monitoring'
slug: bai-20-production-deployment-va-monitoring
description: >-
  Deploy FastAPI lên production với Nginx reverse proxy. Structured Logging với
  structlog. Prometheus metrics & Grafana dashboards. Error tracking với Sentry.
  Performance tuning và scaling strategies.
duration_minutes: 160
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 5: Architecture, Testing & Production"
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: Từ Cơ bản đến Nâng cao'
  slug: python-fastapi-tu-co-ban-den-nang-cao
---

<h2 id="1-nginx-reverse-proxy"><strong>1. Nginx Reverse Proxy</strong></h2>

<pre><code class="language-nginx"># nginx/nginx.conf
upstream fastapi_app {
    least_conn;
    server app:8000;
}

server {
    listen 80;
    server_name api.example.com;

    # Redirect HTTP to HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name api.example.com;

    # SSL certificates
    ssl_certificate     /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    # Security headers
    add_header X-Content-Type-Options    nosniff;
    add_header X-Frame-Options           DENY;
    add_header X-XSS-Protection          "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=30r/s;

    # Gzip
    gzip on;
    gzip_types application/json text/plain;
    gzip_min_length 256;

    # API proxy
    location /api/ {
        limit_req zone=api burst=20 nodelay;

        proxy_pass http://fastapi_app;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_connect_timeout 10s;
        proxy_read_timeout    30s;

        # CORS headers
        add_header Access-Control-Allow-Origin  "$http_origin" always;
        add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS" always;
    }

    # WebSocket proxy
    location /ws/ {
        proxy_pass http://fastapi_app;
        proxy_http_version 1.1;
        proxy_set_header Upgrade    $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host       $host;
        proxy_read_timeout 86400;
    }

    # Static files (if any)
    location /static/ {
        alias /app/static/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Health check (no rate limit)
    location /health {
        proxy_pass http://fastapi_app/health;
    }
}
</code></pre>

<h2 id="2-structured-logging"><strong>2. Structured Logging với structlog</strong></h2>

<pre><code class="language-bash">pip install structlog python-json-logger
</code></pre>

<pre><code class="language-python"># app/core/logging.py
import logging
import sys

import structlog


def setup_logging(json_logs: bool = True, log_level: str = "INFO"):
    """Cấu hình structured logging."""

    shared_processors = [
        structlog.contextvars.merge_contextvars,
        structlog.stdlib.add_logger_name,
        structlog.stdlib.add_log_level,
        structlog.processors.TimeStamper(fmt="iso"),
        structlog.processors.StackInfoRenderer(),
        structlog.processors.UnicodeDecoder(),
    ]

    if json_logs:
        renderer = structlog.processors.JSONRenderer()
    else:
        renderer = structlog.dev.ConsoleRenderer(colors=True)

    structlog.configure(
        processors=[
            *shared_processors,
            structlog.stdlib.ProcessorFormatter.wrap_for_formatter,
        ],
        logger_factory=structlog.stdlib.LoggerFactory(),
        wrapper_class=structlog.stdlib.BoundLogger,
        cache_logger_on_first_use=True,
    )

    formatter = structlog.stdlib.ProcessorFormatter(
        processors=[
            structlog.stdlib.ProcessorFormatter.remove_processors_meta,
            renderer,
        ],
    )

    handler = logging.StreamHandler(sys.stdout)
    handler.setFormatter(formatter)

    root = logging.getLogger()
    root.addHandler(handler)
    root.setLevel(log_level)

    # Giảm noise từ third-party loggers
    for name in ["uvicorn.access", "sqlalchemy.engine"]:
        logging.getLogger(name).setLevel(logging.WARNING)
</code></pre>

<pre><code class="language-python"># app/middleware/logging.py
import time
import uuid

import structlog
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import Response

logger = structlog.get_logger()


class LoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next) -> Response:
        request_id = str(uuid.uuid4())[:8]

        # Bind context cho tất cả log trong request này
        structlog.contextvars.clear_contextvars()
        structlog.contextvars.bind_contextvars(
            request_id=request_id,
            method=request.method,
            path=request.url.path,
            client_ip=request.client.host if request.client else "unknown",
        )

        start_time = time.perf_counter()

        try:
            response = await call_next(request)
            duration_ms = (time.perf_counter() - start_time) * 1000

            logger.info(
                "request_completed",
                status_code=response.status_code,
                duration_ms=round(duration_ms, 2),
            )

            response.headers["X-Request-ID"] = request_id
            return response

        except Exception as exc:
            duration_ms = (time.perf_counter() - start_time) * 1000
            logger.exception(
                "request_failed",
                error=str(exc),
                duration_ms=round(duration_ms, 2),
            )
            raise
</code></pre>

<pre><code class="language-json">// Output log dạng JSON (production)
{
  "request_id": "a1b2c3d4",
  "method": "POST",
  "path": "/api/v1/users/",
  "client_ip": "192.168.1.100",
  "status_code": 201,
  "duration_ms": 45.23,
  "event": "request_completed",
  "timestamp": "2024-12-01T10:30:00Z",
  "level": "info",
  "logger": "app.middleware.logging"
}
</code></pre>

<h2 id="3-prometheus-metrics"><strong>3. Prometheus Metrics</strong></h2>

<pre><code class="language-bash">pip install prometheus-fastapi-instrumentator
</code></pre>

<pre><code class="language-python"># app/core/metrics.py
from prometheus_fastapi_instrumentator import Instrumentator
from prometheus_client import Counter, Histogram, Gauge

# Custom metrics
ACTIVE_USERS = Gauge(
    "app_active_users",
    "Number of currently active users",
)

REQUEST_DURATION = Histogram(
    "app_request_duration_seconds",
    "Request duration in seconds",
    ["method", "endpoint", "status"],
    buckets=[0.01, 0.05, 0.1, 0.25, 0.5, 1.0, 2.5, 5.0],
)

DB_QUERY_DURATION = Histogram(
    "app_db_query_duration_seconds",
    "Database query duration",
    ["operation", "table"],
)

ERRORS_TOTAL = Counter(
    "app_errors_total",
    "Total application errors",
    ["type", "endpoint"],
)


def setup_metrics(app):
    """Cấu hình Prometheus metrics."""
    Instrumentator(
        should_group_status_codes=False,
        should_ignore_untemplated=True,
        excluded_handlers=["/health", "/metrics"],
    ).instrument(app).expose(app, endpoint="/metrics")
</code></pre>

<pre><code class="language-python"># Sử dụng custom metrics trong code
import time
from app.core.metrics import DB_QUERY_DURATION, ERRORS_TOTAL


class UserRepository:
    async def get_by_id(self, id: int) -> User | None:
        start = time.perf_counter()
        try:
            result = await self.session.execute(
                select(User).where(User.id == id)
            )
            return result.scalar_one_or_none()
        finally:
            DB_QUERY_DURATION.labels(
                operation="select", table="users"
            ).observe(time.perf_counter() - start)
</code></pre>

<h2 id="4-grafana-dashboard"><strong>4. Grafana Dashboard</strong></h2>

<pre><code class="language-yaml"># docker-compose.monitoring.yml
services:
  prometheus:
    image: prom/prometheus:v2.50.0
    volumes:
      - ./monitoring/prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    ports:
      - "9090:9090"
    networks:
      - app-network

  grafana:
    image: grafana/grafana:10.3.0
    volumes:
      - grafana_data:/var/lib/grafana
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    depends_on:
      - prometheus
    networks:
      - app-network

volumes:
  prometheus_data:
  grafana_data:
</code></pre>

<pre><code class="language-yaml"># monitoring/prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: "fastapi"
    static_configs:
      - targets: ["app:8000"]
    metrics_path: /metrics

  - job_name: "postgres"
    static_configs:
      - targets: ["postgres-exporter:9187"]
</code></pre>

<h2 id="5-sentry"><strong>5. Error Tracking với Sentry</strong></h2>

<pre><code class="language-bash">pip install sentry-sdk[fastapi]
</code></pre>

<pre><code class="language-python"># app/core/sentry.py
import sentry_sdk
from sentry_sdk.integrations.fastapi import FastApiIntegration
from sentry_sdk.integrations.sqlalchemy import SqlalchemyIntegration
from sentry_sdk.integrations.celery import CeleryIntegration

from app.config import settings


def setup_sentry():
    if not settings.sentry_dsn:
        return

    sentry_sdk.init(
        dsn=settings.sentry_dsn,
        environment=settings.environment,
        release=settings.app_version,
        traces_sample_rate=0.1 if settings.environment == "production" else 1.0,
        profiles_sample_rate=0.1,
        integrations=[
            FastApiIntegration(transaction_style="endpoint"),
            SqlalchemyIntegration(),
            CeleryIntegration(),
        ],
        before_send=_filter_events,
    )


def _filter_events(event, hint):
    """Lọc events trước khi gửi Sentry."""
    if "exc_info" in hint:
        exc_type, exc_value, _ = hint["exc_info"]
        # Bỏ qua 404 errors
        from fastapi import HTTPException
        if isinstance(exc_value, HTTPException) and exc_value.status_code == 404:
            return None
    return event
</code></pre>

<h2 id="6-health-check"><strong>6. Health Check Endpoint</strong></h2>

<pre><code class="language-python"># app/modules/health/router.py
from fastapi import APIRouter
from sqlalchemy import text

from app.core.database import async_session
from app.core.cache import redis_client

router = APIRouter(tags=["Health"])


@router.get("/health")
async def health_check():
    checks = {
        "status": "healthy",
        "database": await _check_db(),
        "redis": await _check_redis(),
    }

    if any(v == "unhealthy" for v in checks.values() if isinstance(v, str)):
        checks["status"] = "unhealthy"

    return checks


async def _check_db() -> str:
    try:
        async with async_session() as session:
            await session.execute(text("SELECT 1"))
        return "healthy"
    except Exception:
        return "unhealthy"


async def _check_redis() -> str:
    try:
        await redis_client.ping()
        return "healthy"
    except Exception:
        return "unhealthy"
</code></pre>

<h2 id="7-performance-tuning"><strong>7. Performance Tuning</strong></h2>

<pre><code class="language-python"># Gunicorn config cho production
# gunicorn.conf.py
import multiprocessing

# Workers
workers = multiprocessing.cpu_count() * 2 + 1
worker_class = "uvicorn.workers.UvicornWorker"
worker_connections = 1000

# Server
bind = "0.0.0.0:8000"
keepalive = 120
timeout = 30
graceful_timeout = 30

# Logging
accesslog = "-"
errorlog = "-"
loglevel = "info"

# Restart workers periodically to prevent memory leaks
max_requests = 10000
max_requests_jitter = 1000

# Preload app for faster worker startup
preload_app = True
</code></pre>

<pre><code class="language-python"># Database connection pool tuning
from sqlalchemy.ext.asyncio import create_async_engine

engine = create_async_engine(
    DATABASE_URL,
    pool_size=20,           # Connections trong pool
    max_overflow=10,        # Extra connections khi pool đầy
    pool_timeout=30,        # Timeout chờ connection
    pool_recycle=1800,      # Recycle connections sau 30 phút
    pool_pre_ping=True,     # Kiểm tra connection trước khi dùng
    echo=False,             # Tắt SQL logging trong production
)
</code></pre>

<h2 id="8-scaling"><strong>8. Scaling Strategies</strong></h2>

<pre><code>┌─────────────────────────────────────────────────┐
│                  Load Balancer                   │
│              (Nginx / AWS ALB)                   │
├──────────┬──────────┬──────────┬────────────────┤
│  App #1  │  App #2  │  App #3  │    App #N      │
│ Uvicorn  │ Uvicorn  │ Uvicorn  │   Uvicorn      │
├──────────┴──────────┴──────────┴────────────────┤
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │
│  │ Postgres │  │  Redis   │  │ Celery Workers│  │
│  │ Primary  │  │ Cluster  │  │    x N        │  │
│  │ + Replica│  │          │  │               │  │
│  └──────────┘  └──────────┘  └──────────────┘  │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │     Monitoring: Prometheus + Grafana      │   │
│  │     Error Tracking: Sentry                │   │
│  │     Logging: ELK / Loki                   │   │
│  └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
</code></pre>

<p>Scaling checklist:</p>

<table>
<thead>
<tr><th>Area</th><th>Strategy</th></tr>
</thead>
<tbody>
<tr><td>API</td><td>Horizontal scaling (nhiều instances)</td></tr>
<tr><td>Database</td><td>Read replicas, connection pooling (PgBouncer)</td></tr>
<tr><td>Cache</td><td>Redis cluster, cache invalidation strategy</td></tr>
<tr><td>Background Jobs</td><td>Celery workers auto-scale</td></tr>
<tr><td>Static Files</td><td>CDN (Cloudflare, CloudFront)</td></tr>
<tr><td>Search</td><td>Elasticsearch / Meilisearch</td></tr>
</tbody>
</table>

<h2 id="tong-ket"><strong>Tổng kết Series</strong></h2>

<p>Qua 20 bài học, bạn đã nắm vững toàn bộ kiến thức cần thiết để xây dựng REST API production-ready với FastAPI:</p>

<ul>
<li><strong>Phần 1</strong>: Nền tảng Python, FastAPI core, Request/Response</li>
<li><strong>Phần 2</strong>: Pydantic V2, SQLAlchemy 2.0, Alembic, Repository Pattern</li>
<li><strong>Phần 3</strong>: JWT Authentication, RBAC, Security, Social Login</li>
<li><strong>Phần 4</strong>: Middleware, WebSockets, Celery, Caching, Async</li>
<li><strong>Phần 5</strong>: Clean Architecture, Testing, Docker, CI/CD, Production</li>
</ul>

<p>FastAPI kết hợp với hệ sinh thái Python mạnh mẽ cho phép xây dựng applications hiệu suất cao, dễ maintain và scale.</p>
