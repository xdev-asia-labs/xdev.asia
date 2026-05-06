---
id: 019d8b40-c102-7001-b004-django00000102
title: 'Lesson 2: Models & Django ORM'
slug: bai-2-models-va-django-orm
description: >-
  Django ORM, model fields, relationships (ForeignKey, OneToOne, ManyToMany).
  Meta options, managers, custom querysets. Migrations CLI, database routers.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'Part 1: Django Fundamentals'
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: From Basics to Advanced'
  slug: django-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1232" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1232)"/>

  <!-- Decorations -->
  <g>
    <circle cx="775" cy="115" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="950" cy="230" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="625" cy="85" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="800" cy="200" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="975" cy="55" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="125" x2="1100" y2="205" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="155" x2="1050" y2="225" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1059.6410161513775,205 1059.6410161513775,245 1025,265 990.3589838486224,245 990.3589838486224,205 1025,185" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 Programming — Lesson 2</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 2: Models & Django ORM</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Django: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Django Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-model-fields"><strong>1. Model Fields</strong></h2>

<pre><code class="language-python">from django.db import models
import uuid

class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    image = models.ImageField(upload_to='products/', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['slug']),
            models.Index(fields=['is_active', '-created_at']),
        ]

    def __str__(self):
        return self.name
</code></pre>

<h2 id="2-relationships"><strong>2. Relationships</strong></h2>

<pre><code class="language-python">class Category(models.Model):
    name = models.CharField(max_length=100)
    parent = models.ForeignKey(
        'self', on_delete=models.CASCADE,
        null=True, blank=True, related_name='children'
    )

class Product(models.Model):
    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, related_name='products'
    )
    tags = models.ManyToManyField('Tag', blank=True, related_name='products')

class ProductDetail(models.Model):
    product = models.OneToOneField(
        Product, on_delete=models.CASCADE, related_name='detail'
    )
    weight = models.FloatField()
    dimensions = models.JSONField(default=dict)
</code></pre>

<h2 id="3-queryset"><strong>3. QuerySet API</strong></h2>

<pre><code class="language-python"># CRUD
product = Product.objects.create(name='Laptop', price=999)
product.name = 'Gaming Laptop'
product.save()

# Query
products = Product.objects.filter(
    is_active=True,
    price__lte=1000,
    category__name='Electronics'
).exclude(stock=0).order_by('-price')[:10]

# Aggregation
from django.db.models import Avg, Count, Sum, Q, F

stats = Product.objects.aggregate(
    avg_price=Avg('price'),
    total_stock=Sum('stock'),
    active_count=Count('id', filter=Q(is_active=True)),
)

# F expressions — database-level operations
Product.objects.filter(id=product_id).update(stock=F('stock') - 1)

# Q objects — complex queries
products = Product.objects.filter(
    Q(name__icontains='laptop') | Q(description__icontains='laptop'),
    Q(price__gte=500) & Q(price__lte=2000),
)
</code></pre>

<h2 id="4-managers"><strong>4. Custom Managers</strong></h2>

<pre><code class="language-python">class ActiveManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_active=True)

class ProductQuerySet(models.QuerySet):
    def active(self):
        return self.filter(is_active=True)

    def in_stock(self):
        return self.filter(stock__gt=0)

    def expensive(self, min_price=100):
        return self.filter(price__gte=min_price)

class Product(models.Model):
    # ...
    objects = models.Manager()  # Default
    active_objects = ActiveManager()
    custom = ProductQuerySet.as_manager()

# Usage
Product.custom.active().in_stock().expensive(500)
</code></pre>

<h2 id="5-migrations"><strong>5. Migrations</strong></h2>

<pre><code class="language-bash">python manage.py makemigrations        # Tạo migration files
python manage.py migrate                # Apply migrations
python manage.py showmigrations         # Xem trạng thái
python manage.py sqlmigrate users 0001  # Xem SQL
python manage.py migrate users 0001     # Rollback về migration cụ thể
</code></pre>

<p>Next article: <strong>Views, URLs & Templates</strong> — FBV, URL routing, template language.</p>
