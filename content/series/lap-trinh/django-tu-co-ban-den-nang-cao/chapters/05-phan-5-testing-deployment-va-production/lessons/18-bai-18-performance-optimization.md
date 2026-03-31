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
