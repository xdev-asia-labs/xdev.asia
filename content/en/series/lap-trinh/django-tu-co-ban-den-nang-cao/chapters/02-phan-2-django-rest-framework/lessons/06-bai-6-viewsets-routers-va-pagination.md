---
id: 019d8b40-c202-7001-b004-django00000202
title: 'Lesson 6: ViewSets, Routers & Pagination'
slug: bai-6-viewsets-routers-va-pagination
description: >-
  ViewSets (ModelViewSet, ReadOnlyModelViewSet, custom actions). DefaultRouter,
  nested routers. Pagination styles, filtering, ordering with django-filter.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 2: Django REST Framework'
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: From Basics to Advanced'
  slug: django-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8402" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8402)"/>

  <!-- Decorations -->
  <g>
    <circle cx="636" cy="178" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="672" cy="54" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="708" cy="190" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="744" cy="66" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="780" cy="202" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="78" x2="1100" y2="158" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="108" x2="1050" y2="178" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1056.5788383248864,211.5 1056.5788383248864,244.5 1028,261 999.4211616751136,244.5 999.4211616751135,211.5 1028,195" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 Programming — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 6: ViewSets, Routers & Pagination</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Django: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Django REST Framework</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-viewsets"><strong>1. ViewSets</strong></h2>

<pre><code class="language-python">from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        qs = super().get_queryset()
        if self.action == 'list':
            qs = qs.filter(is_active=True)
        return qs

    @action(detail=True, methods=['post'])
    def toggle_active(self, request, slug=None):
        product = self.get_object()
        product.is_active = not product.is_active
        product.save(update_fields=['is_active'])
        return Response({'is_active': product.is_active})

    @action(detail=False)
    def featured(self, request):
        products = self.get_queryset().filter(is_featured=True)[:10]
        serializer = self.get_serializer(products, many=True)
        return Response(serializer.data)

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'
</code></pre>

<h2 id="2-router"><strong>2. Routers</strong></h2>

<pre><code class="language-python">from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('products', ProductViewSet, basename='product')
router.register('categories', CategoryViewSet, basename='category')

urlpatterns = [
    path('api/', include(router.urls)),
]
# GET    /api/products/
# POST   /api/products/
# GET    /api/products/{slug}/
# PUT    /api/products/{slug}/
# DELETE /api/products/{slug}/
# POST   /api/products/{slug}/toggle_active/
# GET    /api/products/featured/
</code></pre>

<h2 id="3-pagination"><strong>3. Pagination</strong></h2>

<pre><code class="language-python">from rest_framework.pagination import (
    PageNumberPagination,
    LimitOffsetPagination,
    CursorPagination,
)

class StandardPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100

class CursorProductPagination(CursorPagination):
    page_size = 20
    ordering = '-created_at'

class ProductViewSet(viewsets.ModelViewSet):
    pagination_class = StandardPagination
    ...
</code></pre>

<h2 id="4-filtering"><strong>4. Filtering & Ordering</strong></h2>

<pre><code class="language-bash">pip install django-filter
</code></pre>

<pre><code class="language-python">import django_filters
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

class ProductFilter(django_filters.FilterSet):
    min_price = django_filters.NumberFilter(field_name='price', lookup_expr='gte')
    max_price = django_filters.NumberFilter(field_name='price', lookup_expr='lte')

    class Meta:
        model = Product
        fields = ['category', 'is_active']

class ProductViewSet(viewsets.ModelViewSet):
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_class = ProductFilter
    search_fields = ['name', 'description']
    ordering_fields = ['price', 'created_at', 'name']
    ordering = ['-created_at']
</code></pre>

<p>Next article: <strong>Advanced Serializers & Validation</strong>.</p>
