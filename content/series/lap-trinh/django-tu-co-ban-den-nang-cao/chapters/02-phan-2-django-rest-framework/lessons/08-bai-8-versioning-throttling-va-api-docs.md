---
id: 019d8b40-c204-7001-b004-django00000204
title: 'Bài 8: Versioning, Throttling & API Docs'
slug: bai-8-versioning-throttling-va-api-docs
description: >-
  API versioning strategies (URL, header, namespace). Rate limiting
  với throttling. Swagger/OpenAPI docs với drf-spectacular.
  API best practices, CORS configuration.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 2: Django REST Framework"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

<h2 id="1-versioning"><strong>1. API Versioning</strong></h2>

<pre><code class="language-python"># settings.py
REST_FRAMEWORK = {
    'DEFAULT_VERSIONING_CLASS': 'rest_framework.versioning.URLPathVersioning',
    'DEFAULT_VERSION': 'v1',
    'ALLOWED_VERSIONS': ['v1', 'v2'],
}

# urls.py
urlpatterns = [
    path('api/&lt;str:version&gt;/', include(router.urls)),
]

# views.py
class ProductViewSet(viewsets.ModelViewSet):
    def get_serializer_class(self):
        if self.request.version == 'v2':
            return ProductV2Serializer
        return ProductV1Serializer
</code></pre>

<h2 id="2-throttling"><strong>2. Throttling (Rate Limiting)</strong></h2>

<pre><code class="language-python"># settings.py
REST_FRAMEWORK = {
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle',
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '100/hour',
        'user': '1000/hour',
        'burst': '60/min',
    },
}

# Custom throttle
from rest_framework.throttling import SimpleRateThrottle

class BurstRateThrottle(SimpleRateThrottle):
    scope = 'burst'

    def get_cache_key(self, request, view):
        if request.user.is_authenticated:
            return self.cache_format % {
                'scope': self.scope,
                'ident': request.user.pk,
            }
        return self.get_ident(request)
</code></pre>

<h2 id="3-api-docs"><strong>3. API Docs với drf-spectacular</strong></h2>

<pre><code class="language-bash">pip install drf-spectacular
</code></pre>

<pre><code class="language-python"># settings.py
INSTALLED_APPS = [..., 'drf_spectacular']

REST_FRAMEWORK = {
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
}

SPECTACULAR_SETTINGS = {
    'TITLE': 'My API',
    'DESCRIPTION': 'API documentation',
    'VERSION': '1.0.0',
}

# urls.py
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns = [
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema')),
]
</code></pre>

<h3>Custom Schema Annotations</h3>

<pre><code class="language-python">from drf_spectacular.utils import extend_schema, OpenApiParameter

class ProductViewSet(viewsets.ModelViewSet):
    @extend_schema(
        parameters=[
            OpenApiParameter('category', str, description='Filter by category slug'),
            OpenApiParameter('min_price', float),
        ],
        responses={200: ProductSerializer(many=True)},
    )
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
</code></pre>

<h2 id="4-cors"><strong>4. CORS Configuration</strong></h2>

<pre><code class="language-bash">pip install django-cors-headers
</code></pre>

<pre><code class="language-python"># settings.py
INSTALLED_APPS = [..., 'corsheaders']
MIDDLEWARE = ['corsheaders.middleware.CorsMiddleware', ...]

CORS_ALLOWED_ORIGINS = [
    'https://frontend.example.com',
]
CORS_ALLOW_CREDENTIALS = True
</code></pre>

<p>Bài tiếp theo: <strong>Authentication — Session, Token & JWT</strong>.</p>
