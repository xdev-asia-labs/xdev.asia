---
id: 019d8b40-c201-7001-b004-django00000201
title: 'Bài 5: DRF Serializers & Views'
slug: bai-5-drf-serializers-va-views
description: >-
  DRF setup, Serializers (Serializer, ModelSerializer, nested
  serializers). APIView, GenericAPIView, mixins. Request/Response
  objects, status codes, content negotiation.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Django REST Framework"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

<h2 id="1-setup"><strong>1. Cài đặt DRF</strong></h2>

<pre><code class="language-bash">pip install djangorestframework
</code></pre>

<pre><code class="language-python"># settings.py
INSTALLED_APPS = [
    ...
    'rest_framework',
]

REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20,
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ],
}
</code></pre>

<h2 id="2-serializers"><strong>2. Serializers</strong></h2>

<pre><code class="language-python">from rest_framework import serializers
from .models import Product, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(),
        source='category',
        write_only=True,
    )

    class Meta:
        model = Product
        fields = ['id', 'name', 'slug', 'description', 'price',
                  'category', 'category_id', 'created_at']
        read_only_fields = ['id', 'created_at']

    def validate_price(self, value):
        if value <= 0:
            raise serializers.ValidationError('Giá phải lớn hơn 0')
        return value
</code></pre>

<h3>Nested Serializer (Writable)</h3>

<pre><code class="language-python">class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['product', 'quantity', 'price']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = ['id', 'customer', 'items', 'total', 'created_at']

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        order = Order.objects.create(**validated_data)
        for item_data in items_data:
            OrderItem.objects.create(order=order, **item_data)
        return order
</code></pre>

<h2 id="3-apiview"><strong>3. APIView</strong></h2>

<pre><code class="language-python">from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class ProductListAPI(APIView):
    def get(self, request):
        products = Product.objects.filter(is_active=True)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
</code></pre>

<h2 id="4-genericapiview"><strong>4. GenericAPIView & Mixins</strong></h2>

<pre><code class="language-python">from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)

class ProductListCreateAPI(ListCreateAPIView):
    queryset = Product.objects.filter(is_active=True)
    serializer_class = ProductSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category__slug=category)
        return qs

class ProductDetailAPI(RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'
</code></pre>

<h2 id="5-urls"><strong>5. URL Configuration</strong></h2>

<pre><code class="language-python"># urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('api/products/', views.ProductListCreateAPI.as_view()),
    path('api/products/&lt;slug:slug&gt;/', views.ProductDetailAPI.as_view()),
]
</code></pre>

<p>Bài tiếp theo: <strong>ViewSets, Routers & Pagination</strong> — tối ưu hóa API views.</p>
