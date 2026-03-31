---
id: 019d8b40-c301-7001-b004-django00000301
title: 'Bài 9: Authentication — Session, Token & JWT'
slug: bai-9-authentication-session-token-va-jwt
description: >-
  Django session auth, DRF Token Authentication.
  JWT với djangorestframework-simplejwt. Token refresh,
  blacklist, custom claims. Multi-auth backend.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Authentication & Security"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

<h2 id="1-session-auth"><strong>1. Session Authentication</strong></h2>

<pre><code class="language-python">from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('dashboard')
        messages.error(request, 'Sai tên đăng nhập hoặc mật khẩu')
    return render(request, 'auth/login.html')

@login_required
def dashboard(request):
    return render(request, 'dashboard.html')
</code></pre>

<h2 id="2-token-auth"><strong>2. DRF Token Authentication</strong></h2>

<pre><code class="language-python"># settings.py
INSTALLED_APPS = [..., 'rest_framework.authtoken']
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ],
}

# views.py
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
        })
</code></pre>

<h2 id="3-jwt"><strong>3. JWT với SimpleJWT</strong></h2>

<pre><code class="language-bash">pip install djangorestframework-simplejwt
</code></pre>

<pre><code class="language-python"># settings.py
from datetime import timedelta

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=30),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,
    'SIGNING_KEY': SECRET_KEY,
    'AUTH_HEADER_TYPES': ('Bearer',),
}

# urls.py
from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView, TokenVerifyView,
)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view()),
    path('api/token/verify/', TokenVerifyView.as_view()),
]
</code></pre>

<h3>Custom JWT Claims</h3>

<pre><code class="language-python">from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['name'] = user.get_full_name()
        token['role'] = user.role
        return token

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
</code></pre>

<h2 id="4-custom-user"><strong>4. Custom User Model</strong></h2>

<pre><code class="language-python">from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, blank=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True)
    role = models.CharField(max_length=20, choices=[
        ('admin', 'Admin'),
        ('staff', 'Staff'),
        ('customer', 'Customer'),
    ], default='customer')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

# settings.py
AUTH_USER_MODEL = 'accounts.User'
</code></pre>

<p>Bài tiếp theo: <strong>Permissions & Authorization</strong>.</p>
