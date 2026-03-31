---
id: 019d8b40-c102-7001-b004-django00000102
title: 'Bài 2: Models & Django ORM'
slug: bai-2-models-va-django-orm
description: >-
  Django ORM, model fields, relationships (ForeignKey, OneToOne,
  ManyToMany). Meta options, managers, custom querysets. Migrations CLI,
  database routers.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Django Fundamentals"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

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

<p>Bài tiếp theo: <strong>Views, URLs & Templates</strong> — FBV, URL routing, template language.</p>
