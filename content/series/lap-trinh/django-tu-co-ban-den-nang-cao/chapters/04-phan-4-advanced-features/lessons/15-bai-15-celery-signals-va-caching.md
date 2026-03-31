---
id: 019d8b40-c403-7001-b004-django00000403
title: 'Bài 15: Celery, Signals & Caching'
slug: bai-15-celery-signals-va-caching
description: >-
  Celery với Redis/RabbitMQ, async tasks, periodic tasks (Celery Beat).
  Django Signals (post_save, pre_delete). Caching framework
  (Redis, per-view, template fragment, query caching).
duration_minutes: 150
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 4: Advanced Features"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

<h2 id="1-celery-setup"><strong>1. Celery Setup</strong></h2>

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

<h2 id="2-tasks"><strong>2. Celery Tasks</strong></h2>

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

<h2 id="3-celery-beat"><strong>3. Periodic Tasks (Celery Beat)</strong></h2>

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

<h2 id="4-signals"><strong>4. Django Signals</strong></h2>

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

<h2 id="5-caching"><strong>5. Django Caching</strong></h2>

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

<p>Bài tiếp theo: <strong>File Storage, Email & Notifications</strong>.</p>
