---
id: 019d8b40-c103-7001-b004-django00000103
title: 第 3 課：檢視、URL 和模板
slug: bai-3-views-urls-va-templates
description: 基於函數的視圖、URL 路由、URL 命名空間。 Django 模板語言、模板繼承、自訂模板標籤/過濾器。靜態文件、媒體文件。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 3
section_title: 第 1 部分：Django 基礎知識
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: Django：從基礎到高級
  slug: django-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8523" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8523)"/>

  <!-- Decorations -->
  <g>
    <circle cx="800" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="150" x2="1100" y2="230" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="180" x2="1050" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="921.650635094611,87.5 921.650635094611,112.5 900,125 878.349364905389,112.5 878.349364905389,87.5 900,75" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 程式設計 — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：檢視、URL 和模板</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Django：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Django 基礎知識</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-fbv"><strong>1. 基於函數的視圖</strong></h2>

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

<h2 id="2-urls"><strong>2. URL路由</strong></h2>

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

<h2 id="3-templates"><strong>3.Django模板語言</strong></h2>

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

<h2 id="4-custom-tags"><strong>4. 自訂模板標籤和過濾器</strong></h2>

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

<h2 id="5-static-media"><strong>5. 靜態和媒體文件</strong></h2>

<pre><code class="language-python"># settings.py
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_DIRS = [BASE_DIR / 'static']

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
</code></pre>

<p>下一篇： <strong>基於類別的視圖和表單</strong> — ListView、CreateView、ModelForms。</p>
