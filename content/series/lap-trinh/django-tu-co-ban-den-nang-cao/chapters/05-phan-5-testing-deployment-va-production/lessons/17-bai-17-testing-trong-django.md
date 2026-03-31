---
id: 019d8b40-c501-7001-b004-django00000501
title: 'Bài 17: Testing trong Django'
slug: bai-17-testing-trong-django
description: >-
  Django TestCase, pytest-django. Unit test models, views, serializers.
  API testing với APIClient. Factory Boy, fixtures,
  mocking, coverage report.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 5: Testing, Deployment & Production"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

<h2 id="1-test-setup"><strong>1. Test Setup với pytest-django</strong></h2>

<pre><code class="language-bash">pip install pytest pytest-django factory-boy
</code></pre>

<pre><code class="language-ini"># pytest.ini
[pytest]
DJANGO_SETTINGS_MODULE = config.settings
python_files = tests.py test_*.py *_tests.py
addopts = --reuse-db -v
</code></pre>

<h2 id="2-factory"><strong>2. Factory Boy</strong></h2>

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

<h2 id="3-model-tests"><strong>3. Unit Test Models</strong></h2>

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

<h2 id="4-api-tests"><strong>4. API Testing</strong></h2>

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

<h2 id="5-mocking"><strong>5. Mocking</strong></h2>

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

<p>Bài tiếp theo: <strong>Performance Optimization</strong>.</p>
