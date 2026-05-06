---
id: 019d8b40-c303-7001-b004-django00000303
title: 'レッスン 11: ソーシャル認証と OAuth2'
slug: bai-11-social-auth-va-oauth2
description: >-
  django-allauth によるソーシャル認証 (Google、GitHub、Facebook)。 django-oauth-toolkit を使用した
  OAuth2 プロバイダー。 SSO 統合、アカウントリンク、カスタムソーシャルアダプター。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 3: 認証とセキュリティ'
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: 基本から上級まで'
  slug: django-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8835" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8835)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1042" cy="156" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="984" cy="198" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="926" cy="240" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="868" cy="282" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="810" cy="64" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="216" x2="1100" y2="296" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="246" x2="1050" y2="316" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="992.8467875173176,150.5 992.8467875173176,181.5 966,197 939.1532124826824,181.5 939.1532124826824,150.5 966,135" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 プログラミング — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: ソーシャル認証と OAuth2</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Django: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 認証とセキュリティ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-allauth"><strong>1. django-allauth のセットアップ</strong></h2>

<pre><code class="language-bash">pip install django-allauth
</code></pre>

<pre><code class="language-python"># settings.py
INSTALLED_APPS = [
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.google',
    'allauth.socialaccount.providers.github',
]

SITE_ID = 1
AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend',
]

ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_EMAIL_VERIFICATION = 'mandatory'
LOGIN_REDIRECT_URL = '/dashboard/'
</code></pre>

<h2 id="2-google-oauth"><strong>2.Google OAuth2</strong></h2>

<pre><code class="language-python"># settings.py
SOCIALACCOUNT_PROVIDERS = {
    'google': {
        'APP': {
            'client_id': os.environ['GOOGLE_CLIENT_ID'],
            'secret': os.environ['GOOGLE_CLIENT_SECRET'],
        },
        'SCOPE': ['profile', 'email'],
        'AUTH_PARAMS': {'access_type': 'online'},
    },
}

# urls.py
urlpatterns = [
    path('accounts/', include('allauth.urls')),
]
</code></pre>

<h2 id="3-custom-adapter"><strong>3. カスタムソーシャルアダプター</strong></h2>

<pre><code class="language-python">from allauth.socialaccount.adapter import DefaultSocialAccountAdapter

class CustomSocialAdapter(DefaultSocialAccountAdapter):
    def pre_social_login(self, request, sociallogin):
        # Tự động link account nếu email đã tồn tại
        email = sociallogin.account.extra_data.get('email')
        if email:
            try:
                user = User.objects.get(email=email)
                sociallogin.connect(request, user)
            except User.DoesNotExist:
                pass

    def populate_user(self, request, sociallogin, data):
        user = super().populate_user(request, sociallogin, data)
        user.role = 'customer'
        return user

# settings.py
SOCIALACCOUNT_ADAPTER = 'accounts.adapters.CustomSocialAdapter'
</code></pre>

<h2 id="4-oauth2-provider"><strong>4. OAuth2プロバイダー</strong></h2>

<pre><code class="language-bash">pip install django-oauth-toolkit
</code></pre>

<pre><code class="language-python"># settings.py
INSTALLED_APPS = [..., 'oauth2_provider']

OAUTH2_PROVIDER = {
    'SCOPES': {
        'read': 'Read scope',
        'write': 'Write scope',
    },
    'ACCESS_TOKEN_EXPIRE_SECONDS': 3600,
}

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'oauth2_provider.contrib.rest_framework.OAuth2Authentication',
    ],
}

# urls.py
urlpatterns = [
    path('o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
]
</code></pre>

<h2 id="5-drf-social"><strong>5. DRF のソーシャル認証</strong></h2>

<pre><code class="language-python">from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter

# urls.py
urlpatterns = [
    path('api/auth/google/', GoogleLogin.as_view()),
]
</code></pre>

<p>次の記事: <strong>セキュリティのベストプラクティス</strong>。</p>
