---
id: 019d8b40-c504-7001-b004-django00000504
title: 'Bài 20: Production Deployment & Monitoring'
slug: bai-20-production-deployment-va-monitoring
description: >-
  Deploy Django + Nginx + Gunicorn. Sentry error tracking, structured
  logging. Prometheus metrics, Grafana dashboards. Django health checks,
  scaling strategies, zero-downtime deployment.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 5: Testing, Deployment & Production"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

<h2 id="1-nginx-gunicorn"><strong>1. Nginx + Gunicorn</strong></h2>

<pre><code class="language-nginx">upstream django {
    server web:8000;
}

server {
    listen 80;
    server_name example.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name example.com;

    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;

    client_max_body_size 10M;

    location /static/ {
        alias /app/staticfiles/;
        expires 30d;
    }

    location /media/ {
        alias /app/media/;
    }

    location / {
        proxy_pass http://django;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
</code></pre>

<pre><code class="language-python"># gunicorn.conf.py
import multiprocessing

bind = '0.0.0.0:8000'
workers = multiprocessing.cpu_count() * 2 + 1
worker_class = 'gthread'
threads = 2
timeout = 120
accesslog = '-'
errorlog = '-'
loglevel = 'info'
</code></pre>

<h2 id="2-sentry"><strong>2. Sentry Error Tracking</strong></h2>

<pre><code class="language-bash">pip install sentry-sdk
</code></pre>

<pre><code class="language-python">import sentry_sdk

sentry_sdk.init(
    dsn=os.environ['SENTRY_DSN'],
    traces_sample_rate=0.1,
    profiles_sample_rate=0.1,
    environment=os.environ.get('ENVIRONMENT', 'production'),
)
</code></pre>

<h2 id="3-logging"><strong>3. Structured Logging</strong></h2>

<pre><code class="language-python"># settings.py
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'json': {
            '()': 'pythonjsonlogger.jsonlogger.JsonFormatter',
            'format': '%(asctime)s %(name)s %(levelname)s %(message)s',
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'json',
        },
    },
    'loggers': {
        'django': {'handlers': ['console'], 'level': 'WARNING'},
        'apps': {'handlers': ['console'], 'level': 'INFO'},
    },
}
</code></pre>

<h2 id="4-health-checks"><strong>4. Health Checks</strong></h2>

<pre><code class="language-bash">pip install django-health-check
</code></pre>

<pre><code class="language-python">INSTALLED_APPS = [
    ...,
    'health_check',
    'health_check.db',
    'health_check.cache',
    'health_check.contrib.celery',
    'health_check.contrib.redis',
]

urlpatterns = [
    path('health/', include('health_check.urls')),
]
</code></pre>

<h2 id="5-prometheus"><strong>5. Prometheus & Grafana</strong></h2>

<pre><code class="language-bash">pip install django-prometheus
</code></pre>

<pre><code class="language-python">INSTALLED_APPS = [..., 'django_prometheus']
MIDDLEWARE = [
    'django_prometheus.middleware.PrometheusBeforeMiddleware',
    ...
    'django_prometheus.middleware.PrometheusAfterMiddleware',
]

urlpatterns = [
    path('', include('django_prometheus.urls')),
]
</code></pre>

<h2 id="6-zero-downtime"><strong>6. Zero-Downtime Deployment</strong></h2>

<pre><code class="language-bash">#!/bin/bash
# deploy.sh
set -e
git pull origin main
docker compose build web
docker compose up -d --no-deps web
docker compose exec web python manage.py migrate --noinput
docker compose exec web python manage.py collectstatic --noinput
# Restart workers gracefully
docker compose exec web kill -HUP 1
echo "Deploy completed!"
</code></pre>

<p>Chúc mừng bạn đã hoàn thành series <strong>Django: Từ Cơ bản đến Nâng cao</strong>! 🎉</p>
