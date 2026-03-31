---
id: 019d8b40-c303-7001-b004-django00000303
title: 'Bài 11: Social Auth & OAuth2'
slug: bai-11-social-auth-va-oauth2
description: >-
  Social authentication với django-allauth (Google, GitHub, Facebook).
  OAuth2 Provider với django-oauth-toolkit. SSO integration,
  account linking, custom social adapters.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 3: Authentication & Security"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

<h2 id="1-allauth"><strong>1. django-allauth Setup</strong></h2>

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

<h2 id="2-google-oauth"><strong>2. Google OAuth2</strong></h2>

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

<h2 id="3-custom-adapter"><strong>3. Custom Social Adapter</strong></h2>

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

<h2 id="4-oauth2-provider"><strong>4. OAuth2 Provider</strong></h2>

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

<h2 id="5-drf-social"><strong>5. Social Auth trong DRF</strong></h2>

<pre><code class="language-python">from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter

# urls.py
urlpatterns = [
    path('api/auth/google/', GoogleLogin.as_view()),
]
</code></pre>

<p>Bài tiếp theo: <strong>Security Best Practices</strong>.</p>
