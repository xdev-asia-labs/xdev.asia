---
id: 019d8b40-c502-7001-b004-django00000502
title: 'Bài 18: Performance Optimization'
slug: bai-18-performance-optimization
description: >-
  Django Debug Toolbar, query optimization. N+1 query problem,
  select_related/prefetch_related. Database indexing, query profiling.
  Connection pooling, read replicas.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 5: Testing, Deployment & Production"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5726" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5726)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1083" cy="199" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="1066" cy="82" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1049" cy="225" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1032" cy="108" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="1015" cy="251" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="109" x2="1100" y2="189" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="139" x2="1050" y2="209" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="997.1051177665153,137 997.1051177665153,181 959,203 920.8948822334847,181 920.8948822334847,137 959,115" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 Lập trình — Bài 18</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 18: Performance Optimization</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Django: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Testing, Deployment &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-debug-toolbar"><strong>1. Django Debug Toolbar</strong></h2>

<pre><code class="language-bash">pip install django-debug-toolbar
</code></pre>

<pre><code class="language-python"># settings.py (development only)
INSTALLED_APPS = [..., 'debug_toolbar']
MIDDLEWARE = ['debug_toolbar.middleware.DebugToolbarMiddleware', ...]
INTERNAL_IPS = ['127.0.0.1']
</code></pre>

<h2 id="2-query-optimization"><strong>2. Query Optimization</strong></h2>

<pre><code class="language-python"># N+1 Problem
# SAI — N+1 queries
products = Product.objects.all()
for p in products:
    print(p.category.name)  # Mỗi iteration = 1 query

# ĐÚNG — select_related (ForeignKey, OneToOne)
products = Product.objects.select_related('category', 'brand').all()

# ĐÚNG — prefetch_related (ManyToMany, reverse FK)
products = Product.objects.prefetch_related('tags', 'images').all()

# Prefetch với custom queryset
from django.db.models import Prefetch

products = Product.objects.prefetch_related(
    Prefetch(
        'reviews',
        queryset=Review.objects.filter(rating__gte=4).select_related('user'),
        to_attr='top_reviews',
    )
)
</code></pre>

<h2 id="3-aggregation"><strong>3. Aggregation & Annotation</strong></h2>

<pre><code class="language-python">from django.db.models import Count, Avg, Sum, F, Q

# Thay vì loop tính toán
products = Product.objects.annotate(
    review_count=Count('reviews'),
    avg_rating=Avg('reviews__rating'),
    revenue=F('price') * F('sold_count'),
).filter(
    review_count__gte=5,
    avg_rating__gte=4.0,
).order_by('-revenue')

# Conditional aggregation
stats = Product.objects.aggregate(
    total=Count('id'),
    active=Count('id', filter=Q(is_active=True)),
    avg_price=Avg('price'),
)
</code></pre>

<h2 id="4-indexing"><strong>4. Database Indexing</strong></h2>

<pre><code class="language-python">class Product(models.Model):
    name = models.CharField(max_length=255, db_index=True)
    slug = models.SlugField(unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        indexes = [
            models.Index(fields=['category', '-created_at']),
            models.Index(fields=['price', 'is_active']),
            models.Index(
                fields=['name'],
                condition=Q(is_active=True),
                name='active_product_name_idx',
            ),
        ]
</code></pre>

<h2 id="5-connection-pooling"><strong>5. Connection Pooling & Read Replicas</strong></h2>

<pre><code class="language-python"># pip install django-db-connection-pool
DATABASES = {
    'default': {
        'ENGINE': 'dj_db_conn_pool.backends.postgresql',
        'POOL_OPTIONS': {
            'POOL_SIZE': 10,
            'MAX_OVERFLOW': 5,
        },
    },
    'replica': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'mydb',
        'HOST': 'replica.db.example.com',
    },
}

class PrimaryReplicaRouter:
    def db_for_read(self, model, **hints):
        return 'replica'

    def db_for_write(self, model, **hints):
        return 'default'

DATABASE_ROUTERS = ['config.routers.PrimaryReplicaRouter']
</code></pre>

<p>Bài tiếp theo: <strong>Docker & CI/CD cho Django</strong>.</p>
