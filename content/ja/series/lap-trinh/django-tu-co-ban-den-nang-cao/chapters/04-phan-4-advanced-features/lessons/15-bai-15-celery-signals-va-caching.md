---
id: 019d8b40-c403-7001-b004-django00000403
title: 'レッスン 15: セロリ、シグナル、キャッシング'
slug: bai-15-celery-signals-va-caching
description: >-
  Redis/RabbitMQ を使用した Celery、非同期タスク、定期タスク (Celery Beat)。 Django シグナル
  (post_save、pre_delete)。キャッシュ フレームワーク (Redis、ビューごと、テンプレート フラグメント、クエリ キャッシュ)。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 4: 高度な機能'
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: 基本から上級まで'
  slug: django-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8676" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8676)"/>

  <!-- Decorations -->
  <g>
    <circle cx="828" cy="234" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1056" cy="42" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="784" cy="110" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1012" cy="178" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="740" cy="246" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="94" x2="1100" y2="174" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="124" x2="1050" y2="194" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1069.1147367097487,229.5 1069.1147367097487,258.5 1044,273 1018.8852632902513,258.5 1018.8852632902513,229.5 1044,215" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 プログラミング — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: セロリ、シグナル、キャッシング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Django: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 高度な機能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-celery-setup"><strong>1.セロリのセットアップ</strong></h2>

<pre><code class="language-bash">pip install celery redis
</code></pre>

<pre><code class="language-python"># config/celery.py
import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

app = Celery('config')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()

# settings.py
CELERY_BROKER_URL = 'redis://localhost:6379/0'
CELERY_RESULT_BACKEND = 'redis://localhost:6379/0'
CELERY_ACCEPT_CONTENT = ['json']
CELERY_TASK_SERIALIZER = 'json'
</code></pre>

<h2 id="2-tasks"><strong>2. セロリのタスク</strong></h2>

<pre><code class="language-python">from celery import shared_task

@shared_task(bind=True, max_retries=3)
def send_email_task(self, user_id, subject, body):
    try:
        user = User.objects.get(id=user_id)
        user.email_user(subject, body)
    except Exception as exc:
        self.retry(exc=exc, countdown=60)

@shared_task
def generate_report(report_type, date_range):
    # Long-running task
    data = compile_report(report_type, date_range)
    save_report(data)
    return {'status': 'completed'}

# Gọi task
send_email_task.delay(user.id, 'Welcome', 'Chào mừng bạn!')
result = generate_report.apply_async(
    args=['sales', '2024-01'],
    countdown=10,  # Delay 10s
)
</code></pre>

<h2 id="3-celery-beat"><strong>3.定期タスク（セロリビート）</strong></h2>

<pre><code class="language-python"># settings.py
from celery.schedules import crontab

CELERY_BEAT_SCHEDULE = {
    'cleanup-expired-sessions': {
        'task': 'accounts.tasks.cleanup_sessions',
        'schedule': crontab(hour=2, minute=0),
    },
    'send-daily-digest': {
        'task': 'notifications.tasks.daily_digest',
        'schedule': crontab(hour=8, minute=0),
    },
    'sync-inventory': {
        'task': 'products.tasks.sync_inventory',
        'schedule': 300.0,  # Mỗi 5 phút
    },
}
</code></pre>

<h2 id="4-signals"><strong>4. ジャンゴシグナル</strong></h2>

<pre><code class="language-python">from django.db.models.signals import post_save, pre_delete
from django.dispatch import receiver

@receiver(post_save, sender=Order)
def order_created(sender, instance, created, **kwargs):
    if created:
        send_email_task.delay(
            instance.customer.id,
            'Đơn hàng mới',
            f'Đơn hàng #{instance.id} đã được tạo.',
        )
        notify_user(instance.customer.id, 'Đơn hàng mới đã được tạo')

@receiver(pre_delete, sender=Product)
def product_cleanup(sender, instance, **kwargs):
    if instance.image:
        instance.image.delete(save=False)
</code></pre>

<h2 id="5-caching"><strong>5. ジャンゴのキャッシュ</strong></h2>

<pre><code class="language-python"># settings.py
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.redis.RedisCache',
        'LOCATION': 'redis://127.0.0.1:6379/1',
    },
}

# View-level caching
from django.views.decorators.cache import cache_page

@cache_page(60 * 15)  # 15 phút
def product_list(request):
    ...

# Low-level cache API
from django.core.cache import cache

def get_product_detail(slug):
    cache_key = f'product:{slug}'
    product = cache.get(cache_key)
    if product is None:
        product = Product.objects.get(slug=slug)
        cache.set(cache_key, product, timeout=3600)
    return product

# Invalidate cache on update
@receiver(post_save, sender=Product)
def invalidate_product_cache(sender, instance, **kwargs):
    cache.delete(f'product:{instance.slug}')
</code></pre>

<p>次の記事: <strong>ファイルストレージ、電子メール、通知</strong>。</p>
