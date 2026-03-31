---
id: 019d8b40-c202-7001-b004-django00000202
title: 'Bài 6: ViewSets, Routers & Pagination'
slug: bai-6-viewsets-routers-va-pagination
description: >-
  ViewSets (ModelViewSet, ReadOnlyModelViewSet, custom actions).
  DefaultRouter, nested routers. Pagination styles, filtering,
  ordering với django-filter.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Django REST Framework"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

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

<p>Bài tiếp theo: <strong>Advanced Serializers & Validation</strong>.</p>
