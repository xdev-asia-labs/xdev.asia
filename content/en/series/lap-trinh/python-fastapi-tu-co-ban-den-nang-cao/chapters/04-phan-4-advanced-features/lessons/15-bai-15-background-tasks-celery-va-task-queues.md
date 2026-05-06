---
id: 019d8b40-a403-7001-b002-fastapi000403
title: 'Lesson 15: Background Tasks, Celery & Task Queues'
slug: bai-15-background-tasks-celery-va-task-queues
description: >-
  FastAPI BackgroundTasks, Celery with Redis/RabbitMQ broker, Celery Beat for
  scheduled tasks. Task chaining, error handling, retry strategies. ARQ and SAQ
  alternatives for async task queues.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 15
section_title: 'Part 4: Advanced Features'
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: From Basics to Advanced'
  slug: python-fastapi-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6300" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6300)"/>

  <!-- Decorations -->
  <g>
    <circle cx="885" cy="145" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="670" cy="270" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="955" cy="135" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="740" cy="260" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1025" cy="125" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="55" x2="1100" y2="135" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="85" x2="1050" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1030.9807621135333,190 1030.9807621135333,220 1005,235 979.0192378864668,220 979.0192378864668,190 1005,175" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 Programming — Lesson 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 15: Background Tasks, Celery & Task</tspan>
      <tspan x="60" dy="42">Queues</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Advanced Features</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-background-tasks"><strong>1. FastAPI BackgroundTasks</strong></h2>

<p>FastAPI has built-in BackgroundTasks for lightweight tasks that run after the response has been sent:</p>

<pre><code class="language-python">from fastapi import BackgroundTasks, FastAPI

app = FastAPI()


# Background task function
async def send_email(to: str, subject: str, body: str):
    """Gửi email - chạy sau khi response trả về."""
    import asyncio
    await asyncio.sleep(2)  # Simulate sending email
    print(f"Email sent to {to}: {subject}")


async def write_log(message: str):
    """Ghi log - chạy background."""
    with open("app.log", "a") as f:
        f.write(f"{message}\n")


@app.post("/users/")
async def create_user(
    email: str,
    background_tasks: BackgroundTasks,
):
    # Tạo user... (logic chính)
    user = {"id": 1, "email": email}

    # Thêm background tasks - chạy SAU khi response trả về
    background_tasks.add_task(send_email, email, "Welcome!", "Thanks for joining")
    background_tasks.add_task(write_log, f"User created: {email}")

    return user  # Response trả về NGAY, không đợi email


# Background tasks trong Dependencies
async def log_request(background_tasks: BackgroundTasks):
    """Dependency tự thêm background task."""
    background_tasks.add_task(write_log, "Request processed")
</code></pre>

<h3 id="khi-nao-background-tasks"><strong>When to use BackgroundTasks?</strong></h3>

<ul>
<li>✅ Light, fast tasks (a few seconds): send email, log, update cache</li>
<li>❌ Heavy, long tasks (minutes/hours): ML training, video processing → use Celery</li>
<li>❌ Tasks need retry, scheduling → use Celery</li>
</ul>

<h2 id="2-celery-setup"><strong>2. Celery Setup</strong></h2>

<pre><code class="language-bash">uv add celery[redis] redis
</code></pre>

<pre><code class="language-python"># app/core/celery_app.py
from celery import Celery

from app.config import settings

celery_app = Celery(
    "fastapi_app",
    broker=settings.redis_url,           # Message broker
    backend=settings.redis_url,          # Result backend
    include=["app.tasks.email", "app.tasks.reports"],
)

# Celery configuration
celery_app.conf.update(
    task_serializer="json",
    accept_content=["json"],
    result_serializer="json",
    timezone="UTC",
    enable_utc=True,
    task_track_started=True,
    task_time_limit=300,           # Hard limit: 5 minutes
    task_soft_time_limit=240,      # Soft limit: 4 minutes
    worker_prefetch_multiplier=1,  # 1 task at a time per worker
    worker_max_tasks_per_child=100,  # Restart worker after 100 tasks
)
</code></pre>

<h2 id="3-celery-tasks"><strong>3. Celery Tasks</strong></h2>

<pre><code class="language-python"># app/tasks/email.py
from celery import shared_task

from app.core.celery_app import celery_app


@celery_app.task(
    bind=True,
    max_retries=3,
    default_retry_delay=60,  # Retry sau 60 giây
    acks_late=True,
)
def send_email_task(self, to: str, subject: str, body: str):
    """Celery task gửi email."""
    try:
        # Send email logic
        import smtplib
        print(f"Sending email to {to}: {subject}")
        # ... actual email sending code
        return {"status": "sent", "to": to}
    except Exception as exc:
        # Retry with exponential backoff
        raise self.retry(exc=exc, countdown=2 ** self.request.retries * 60)


@celery_app.task(bind=True)
def send_bulk_emails(self, recipients: list[dict]):
    """Gửi email hàng loạt."""
    results = []
    for i, recipient in enumerate(recipients):
        try:
            send_email_task.delay(
                recipient["email"],
                recipient["subject"],
                recipient["body"],
            )
            results.append({"email": recipient["email"], "status": "queued"})
        except Exception as e:
            results.append({"email": recipient["email"], "status": "failed", "error": str(e)})

        # Update progress
        self.update_state(
            state="PROGRESS",
            meta={"current": i + 1, "total": len(recipients)},
        )
    return results
</code></pre>

<pre><code class="language-python"># app/tasks/reports.py
from celery import shared_task
from datetime import datetime

from app.core.celery_app import celery_app


@celery_app.task(bind=True, time_limit=600)
def generate_report(self, report_type: str, params: dict):
    """Generate báo cáo - task nặng."""
    self.update_state(state="PROGRESS", meta={"step": "Collecting data..."})

    # Simulate heavy computation
    import time
    time.sleep(5)

    self.update_state(state="PROGRESS", meta={"step": "Processing..."})
    time.sleep(5)

    self.update_state(state="PROGRESS", meta={"step": "Generating PDF..."})
    time.sleep(3)

    return {
        "report_type": report_type,
        "file_url": f"/reports/{report_type}_{datetime.utcnow().strftime('%Y%m%d')}.pdf",
        "generated_at": datetime.utcnow().isoformat(),
    }
</code></pre>

<h2 id="4-fastapi-celery"><strong>4. Integrate Celery with FastAPI</strong></h2>

<pre><code class="language-python"># app/api/v1/tasks.py
from fastapi import APIRouter, HTTPException
from celery.result import AsyncResult

from app.core.celery_app import celery_app
from app.tasks.email import send_email_task
from app.tasks.reports import generate_report

router = APIRouter(prefix="/tasks", tags=["Tasks"])


@router.post("/send-email")
async def queue_email(to: str, subject: str, body: str):
    """Queue email task."""
    task = send_email_task.delay(to, subject, body)
    return {"task_id": task.id, "status": "queued"}


@router.post("/reports/{report_type}")
async def queue_report(report_type: str):
    """Queue report generation."""
    task = generate_report.delay(report_type, {})
    return {"task_id": task.id, "status": "queued"}


@router.get("/status/{task_id}")
async def get_task_status(task_id: str):
    """Kiểm tra status của task."""
    result = AsyncResult(task_id, app=celery_app)
    response = {
        "task_id": task_id,
        "status": result.status,
    }

    if result.ready():
        if result.successful():
            response["result"] = result.result
        else:
            response["error"] = str(result.result)
    elif result.status == "PROGRESS":
        response["progress"] = result.info

    return response


@router.delete("/cancel/{task_id}")
async def cancel_task(task_id: str):
    """Hủy task đang chờ."""
    celery_app.control.revoke(task_id, terminate=True)
    return {"task_id": task_id, "status": "cancelled"}
</code></pre>

<h2 id="5-celery-beat"><strong>5. Celery Beat - Scheduled Tasks</strong></h2>

<pre><code class="language-python"># app/core/celery_app.py - thêm beat schedule
from celery.schedules import crontab

celery_app.conf.beat_schedule = {
    # Chạy mỗi 5 phút
    "cleanup-expired-tokens": {
        "task": "app.tasks.maintenance.cleanup_expired_tokens",
        "schedule": 300.0,  # 5 minutes
    },
    # Chạy lúc 2:00 AM hàng ngày
    "daily-report": {
        "task": "app.tasks.reports.generate_daily_report",
        "schedule": crontab(hour=2, minute=0),
    },
    # Chạy mỗi thứ 2 lúc 9:00 AM
    "weekly-digest": {
        "task": "app.tasks.email.send_weekly_digest",
        "schedule": crontab(hour=9, minute=0, day_of_week=1),
    },
}
</code></pre>

<h2 id="6-chay-celery"><strong>6. Run Celery</strong></h2>

<pre><code class="language-bash"># Chạy Celery worker
celery -A app.core.celery_app worker --loglevel=info --concurrency=4

# Chạy Celery Beat (scheduler)
celery -A app.core.celery_app beat --loglevel=info

# Chạy cả worker + beat
celery -A app.core.celery_app worker --beat --loglevel=info

# Monitor với Flower
pip install flower
celery -A app.core.celery_app flower --port=5555
# Dashboard: http://localhost:5555
</code></pre>

<h2 id="7-docker-compose"><strong>7. Docker Compose for Celery</strong></h2>

<pre><code class="language-yaml"># docker-compose.yml
services:
  app:
    build: .
    ports:
      - "8000:8000"
    depends_on:
      - redis
      - postgres

  celery-worker:
    build: .
    command: celery -A app.core.celery_app worker --loglevel=info
    depends_on:
      - redis
      - postgres

  celery-beat:
    build: .
    command: celery -A app.core.celery_app beat --loglevel=info
    depends_on:
      - redis

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
</code></pre>

<h2 id="tong-ket"><strong>Summary</strong></h2>

<p>In this article we learned:</p>

<ul>
<li><strong>BackgroundTasks</strong>: Built-in for light tasks</li>
<li><strong>Celery</strong>: Distributed task queue for heavy tasks</li>
<li><strong>Task Retry</strong>: Exponential backoff retry strategy</li>
<li><strong>Task Progress</strong>: Track progress of long-running tasks</li>
<li><strong>Celery Beat</strong>: Scheduled and periodic tasks</li>
<li><strong>Docker Compose</strong>: Run Celery with FastAPI</li>
</ul>

<p>The next article will learn about File Upload, Caching and Async Deep Dive.</p>
