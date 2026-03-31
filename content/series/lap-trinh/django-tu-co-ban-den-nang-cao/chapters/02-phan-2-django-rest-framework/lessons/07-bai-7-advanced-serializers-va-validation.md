---
id: 019d8b40-c203-7001-b004-django00000203
title: 'Bài 7: Advanced Serializers & Validation'
slug: bai-7-advanced-serializers-va-validation
description: >-
  SerializerMethodField, SlugRelatedField, custom fields. Object-level
  validation, UniqueTogetherValidator. Dynamic serializers,
  serializer inheritance, performance với select_related/prefetch_related.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Django REST Framework"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

<h2 id="1-custom-fields"><strong>1. Custom Serializer Fields</strong></h2>

<pre><code class="language-python">from rest_framework import serializers

class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.SlugRelatedField(
        source='category', slug_field='name', read_only=True
    )
    total_reviews = serializers.SerializerMethodField()
    discount_price = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'category_name',
                  'total_reviews', 'discount_price']

    def get_total_reviews(self, obj):
        return obj.reviews.count()

    def get_discount_price(self, obj):
        if obj.discount_percent:
            return obj.price * (1 - obj.discount_percent / 100)
        return obj.price
</code></pre>

<h2 id="2-validation"><strong>2. Object-Level Validation</strong></h2>

<pre><code class="language-python">from rest_framework.validators import UniqueTogetherValidator

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
        validators = [
            UniqueTogetherValidator(
                queryset=Order.objects.all(),
                fields=['customer', 'order_number'],
            )
        ]

    def validate(self, attrs):
        if attrs['start_date'] >= attrs['end_date']:
            raise serializers.ValidationError(
                'Ngày kết thúc phải sau ngày bắt đầu')
        return attrs
</code></pre>

<h2 id="3-dynamic-serializers"><strong>3. Dynamic Serializers</strong></h2>

<pre><code class="language-python">class DynamicFieldsSerializer(serializers.ModelSerializer):
    """Cho phép chọn fields qua query params: ?fields=id,name"""

    def __init__(self, *args, **kwargs):
        fields = kwargs.pop('fields', None)
        super().__init__(*args, **kwargs)
        if fields is not None:
            allowed = set(fields)
            for field_name in set(self.fields) - allowed:
                self.fields.pop(field_name)

class ProductSerializer(DynamicFieldsSerializer):
    class Meta:
        model = Product
        fields = '__all__'

# Sử dụng
serializer = ProductSerializer(products, many=True, fields=['id', 'name', 'price'])
</code></pre>

<h2 id="4-performance"><strong>4. Performance Optimization</strong></h2>

<pre><code class="language-python">class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.select_related(
            'category', 'brand'
        ).prefetch_related(
            'tags', 'images',
            Prefetch('reviews', queryset=Review.objects.select_related('user'))
        ).annotate(
            avg_rating=Avg('reviews__rating'),
            review_count=Count('reviews'),
        )

    def get_serializer_class(self):
        if self.action == 'list':
            return ProductListSerializer
        return ProductDetailSerializer
</code></pre>

<h2 id="5-writable-nested"><strong>5. Writable Nested Serializers</strong></h2>

<pre><code class="language-python">class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, required=False)

    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        images_data = validated_data.pop('images', [])
        product = Product.objects.create(**validated_data)
        for img in images_data:
            ProductImage.objects.create(product=product, **img)
        return product

    def update(self, instance, validated_data):
        images_data = validated_data.pop('images', None)
        instance = super().update(instance, validated_data)
        if images_data is not None:
            instance.images.all().delete()
            for img in images_data:
                ProductImage.objects.create(product=instance, **img)
        return instance
</code></pre>

<p>Bài tiếp theo: <strong>Versioning, Throttling & API Docs</strong>.</p>
