---
id: 019d8b40-c103-7001-b004-django00000103
title: 'Bài 3: Views, URLs & Templates'
slug: bai-3-views-urls-va-templates
description: >-
  Function-Based Views, URL routing, URL namespaces. Django Template
  Language, template inheritance, custom template tags/filters.
  Static files, media files.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Django Fundamentals"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

<h2 id="1-fbv"><strong>1. Function-Based Views</strong></h2>

<pre><code class="language-python">from django.http import JsonResponse, HttpRequest
from django.shortcuts import render, get_object_or_404
from .models import Product

def product_list(request: HttpRequest):
    products = Product.objects.filter(is_active=True)
    return render(request, 'products/list.html', {'products': products})

def product_detail(request: HttpRequest, slug: str):
    product = get_object_or_404(Product, slug=slug, is_active=True)
    return render(request, 'products/detail.html', {'product': product})

# API view
def api_products(request: HttpRequest):
    products = Product.objects.filter(is_active=True).values('id', 'name', 'price')
    return JsonResponse(list(products), safe=False)
</code></pre>

<h2 id="2-urls"><strong>2. URL Routing</strong></h2>

<pre><code class="language-python"># config/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', include('products.urls')),
    path('api/', include('api.urls')),
]

# products/urls.py
from django.urls import path
from . import views

app_name = 'products'

urlpatterns = [
    path('', views.product_list, name='list'),
    path('&lt;slug:slug&gt;/', views.product_detail, name='detail'),
    path('category/&lt;int:pk&gt;/', views.category_detail, name='category'),
]

# Template usage: {% url 'products:detail' slug=product.slug %}
</code></pre>

<h2 id="3-templates"><strong>3. Django Template Language</strong></h2>

<pre><code class="language-html">&lt;!-- templates/base.html --&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;{% block title %}My Site{% endblock %}&lt;/title&gt;
  {% load static %}
  &lt;link rel="stylesheet" href="{% static 'css/style.css' %}"&gt;
&lt;/head&gt;
&lt;body&gt;
  {% block content %}{% endblock %}
&lt;/body&gt;
&lt;/html&gt;

&lt;!-- templates/products/list.html --&gt;
{% extends 'base.html' %}

{% block title %}Sản phẩm{% endblock %}

{% block content %}
  &lt;h1&gt;Sản phẩm ({{ products|length }})&lt;/h1&gt;

  {% for product in products %}
    &lt;div class="product"&gt;
      &lt;h2&gt;&lt;a href="{% url 'products:detail' slug=product.slug %}"&gt;{{ product.name }}&lt;/a&gt;&lt;/h2&gt;
      &lt;p&gt;{{ product.price|floatformat:0 }}đ&lt;/p&gt;
      {% if product.stock &gt; 0 %}
        &lt;span class="in-stock"&gt;Còn hàng&lt;/span&gt;
      {% else %}
        &lt;span class="out-of-stock"&gt;Hết hàng&lt;/span&gt;
      {% endif %}
    &lt;/div&gt;
  {% empty %}
    &lt;p&gt;Không có sản phẩm nào.&lt;/p&gt;
  {% endfor %}
{% endblock %}
</code></pre>

<h2 id="4-custom-tags"><strong>4. Custom Template Tags & Filters</strong></h2>

<pre><code class="language-python"># products/templatetags/product_tags.py
from django import template

register = template.Library()

@register.filter
def currency(value):
    """{{ price|currency }} → 1,000,000đ"""
    return f"{int(value):,}đ"

@register.simple_tag
def featured_products(count=5):
    from products.models import Product
    return Product.objects.filter(is_active=True)[:count]

@register.inclusion_tag('products/_card.html')
def product_card(product):
    return {'product': product}
</code></pre>

<h2 id="5-static-media"><strong>5. Static & Media Files</strong></h2>

<pre><code class="language-python"># settings.py
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_DIRS = [BASE_DIR / 'static']

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
</code></pre>

<p>Bài tiếp theo: <strong>Class-Based Views & Forms</strong> — ListView, CreateView, ModelForms.</p>
