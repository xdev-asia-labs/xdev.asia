---
id: 019d8b40-c203-7001-b004-django00000203
title: 'レッスン 7: 高度なシリアライザーと検証'
slug: bai-7-advanced-serializers-va-validation
description: >-
  SerializerMethodField、SlugManyField、カスタム
  フィールド。オブジェクトレベルの検証、UniqueTogetherValidator。動的シリアライザー、シリアライザーの継承、select_関連/プリフェッチ関連のパフォーマンス。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 2: Django REST フレームワーク'
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: 基本から上級まで'
  slug: django-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6937" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6937)"/>

  <!-- Decorations -->
  <g>
    <circle cx="835" cy="155" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1070" cy="110" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="805" cy="65" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1040" cy="280" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="775" cy="235" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="205" x2="1100" y2="285" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="235" x2="1050" y2="305" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="989.6410161513776,135 989.6410161513776,175 955,195 920.3589838486224,175 920.3589838486224,135 955,115" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 プログラミング — レッスン 7</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: 高度なシリアライザーと検証</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Django: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: Django REST フレームワーク</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-custom-fields"><strong>1. カスタムシリアライザーフィールド</strong></h2>

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

<h2 id="2-validation"><strong>2. オブジェクトレベルの検証</strong></h2>

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

<h2 id="3-dynamic-serializers"><strong>3. 動的シリアライザー</strong></h2>

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

<h2 id="4-performance"><strong>4. パフォーマンスの最適化</strong></h2>

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

<h2 id="5-writable-nested"><strong>5. 書き込み可能なネストされたシリアライザー</strong></h2>

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

<p>次の記事: <strong>バージョニング、スロットル、API ドキュメント</strong>。</p>
