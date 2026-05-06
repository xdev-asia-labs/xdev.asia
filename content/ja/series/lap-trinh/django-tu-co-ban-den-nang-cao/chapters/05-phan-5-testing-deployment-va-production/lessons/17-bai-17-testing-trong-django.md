---
id: 019d8b40-c501-7001-b004-django00000501
title: 'レッスン 17: Django でのテスト'
slug: bai-17-testing-trong-django
description: >-
  Django テストケース、pytest-django。単体テスト モデル、ビュー、シリアライザー。 APIClient を使用した API テスト。
  Factory Boy、備品、モック、取材レポート。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: 'パート 5: テスト、展開、実稼働'
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: 基本から上級まで'
  slug: django-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5095" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5095)"/>

  <!-- Decorations -->
  <g>
    <circle cx="791" cy="243" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="982" cy="54" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="673" cy="125" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="864" cy="196" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="1055" cy="267" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="193" x2="1100" y2="273" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="223" x2="1050" y2="293" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="967.2487113059643,129 967.2487113059643,157 943,171 918.7512886940357,157 918.7512886940357,129 943,115" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 プログラミング — レッスン 17</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 17: Django でのテスト</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Django: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: テスト、展開、実稼働</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-test-setup"><strong>1. pytest-django を使用してセットアップをテストする</strong></h2>

<pre><code class="language-bash">pip install pytest pytest-django factory-boy
</code></pre>

<pre><code class="language-ini"># pytest.ini
[pytest]
DJANGO_SETTINGS_MODULE = config.settings
python_files = tests.py test_*.py *_tests.py
addopts = --reuse-db -v
</code></pre>

<h2 id="2-factory"><strong>2. ファクトリーボーイ</strong></h2>

<pre><code class="language-python">import factory
from .models import User, Product, Category

class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = User
    username = factory.Sequence(lambda n: f'user{n}')
    email = factory.LazyAttribute(lambda o: f'{o.username}@test.com')
    password = factory.PostGenerationMethodCall('set_password', 'testpass123')

class CategoryFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Category
    name = factory.Faker('word')
    slug = factory.LazyAttribute(lambda o: o.name.lower())

class ProductFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Product
    name = factory.Faker('sentence', nb_words=3)
    slug = factory.Sequence(lambda n: f'product-{n}')
    price = factory.Faker('pydecimal', left_digits=3, right_digits=2, positive=True)
    category = factory.SubFactory(CategoryFactory)
</code></pre>

<h2 id="3-model-tests"><strong>3. 単体テストモデル</strong></h2>

<pre><code class="language-python">import pytest
from .factories import ProductFactory

@pytest.mark.django_db
class TestProduct:
    def test_create_product(self):
        product = ProductFactory(name='Test Product', price=100)
        assert product.name == 'Test Product'
        assert product.price == 100

    def test_str_representation(self):
        product = ProductFactory(name='Widget')
        assert str(product) == 'Widget'

    def test_slug_unique(self):
        ProductFactory(slug='test')
        with pytest.raises(Exception):
            ProductFactory(slug='test')
</code></pre>

<h2 id="4-api-tests"><strong>4. APIテスト</strong></h2>

<pre><code class="language-python">import pytest
from rest_framework.test import APIClient
from rest_framework import status

@pytest.fixture
def api_client():
    return APIClient()

@pytest.fixture
def auth_client(api_client):
    user = UserFactory()
    api_client.force_authenticate(user=user)
    return api_client

@pytest.mark.django_db
class TestProductAPI:
    def test_list_products(self, auth_client):
        ProductFactory.create_batch(5)
        response = auth_client.get('/api/products/')
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data['results']) == 5

    def test_create_product(self, auth_client):
        category = CategoryFactory()
        data = {'name': 'New', 'slug': 'new', 'price': 99, 'category_id': category.id}
        response = auth_client.post('/api/products/', data)
        assert response.status_code == status.HTTP_201_CREATED

    def test_unauthenticated(self, api_client):
        response = api_client.post('/api/products/', {})
        assert response.status_code == status.HTTP_401_UNAUTHORIZED
</code></pre>

<h2 id="5-mocking"><strong>5. 嘲笑する</strong></h2>

<pre><code class="language-python">from unittest.mock import patch, MagicMock

@pytest.mark.django_db
class TestEmailNotification:
    @patch('accounts.tasks.send_email_task.delay')
    def test_order_sends_email(self, mock_email):
        order = OrderFactory()
        mock_email.assert_called_once_with(
            order.customer.id,
            'Đơn hàng mới',
            f'Đơn hàng #{order.id} đã được tạo.',
        )
</code></pre>

<pre><code class="language-bash"># Chạy tests với coverage
pytest --cov=. --cov-report=html
</code></pre>

<p>次の記事: <strong>パフォーマンスの最適化</strong>。</p>
