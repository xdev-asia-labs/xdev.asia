---
id: 019d8b40-c304-7001-b004-django00000304
title: 'レッスン 12: セキュリティのベスト プラクティス'
slug: bai-12-security-best-practices
description: >-
  Django の OWASP トップ 10。 XSS、CSRF、SQL
  インジェクションの防止。セキュリティミドルウェア、コンテンツセキュリティポリシー。レート制限、入力サニタイズ、安全なヘッダー。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 12
section_title: 'パート 3: 認証とセキュリティ'
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: 基本から上級まで'
  slug: django-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2624" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2624)"/>

  <!-- Decorations -->
  <g>
    <circle cx="901" cy="73" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="702" cy="174" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1003" cy="275" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="804" cy="116" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="605" cy="217" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="223" x2="1100" y2="303" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="253" x2="1050" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="955.9089653438086,104 955.9089653438086,142 923,161 890.0910346561914,142 890.0910346561914,104.00000000000001 923,85" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 プログラミング — レッスン 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 12: セキュリティのベスト プラクティス</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Django: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 認証とセキュリティ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-security-settings"><strong>1. セキュリティ設定</strong></h2>

<pre><code class="language-python"># settings.py — Production security
SECURE_SSL_REDIRECT = True
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
SECURE_CONTENT_TYPE_NOSNIFF = True

SESSION_COOKIE_SECURE = True
SESSION_COOKIE_HTTPONLY = True
SESSION_COOKIE_SAMESITE = 'Lax'
SESSION_COOKIE_AGE = 3600

CSRF_COOKIE_SECURE = True
CSRF_COOKIE_HTTPONLY = True

X_FRAME_OPTIONS = 'DENY'
</code></pre>

<h2 id="2-sql-injection"><strong>2. SQL インジェクションの防止</strong></h2>

<pre><code class="language-python"># SAI — vulnerable
Product.objects.raw(f"SELECT * FROM products WHERE name = '{name}'")

# ĐÚNG — parameterized query
Product.objects.raw("SELECT * FROM products WHERE name = %s", [name])

# ĐÚNG — ORM (tự escape)
Product.objects.filter(name=name)

# Raw SQL an toàn
from django.db import connection
with connection.cursor() as cursor:
    cursor.execute("SELECT * FROM products WHERE price > %s", [min_price])
</code></pre>

<h2 id="3-xss"><strong>3. XSS の防止</strong></h2>

<pre><code class="language-python"># Django template auto-escapes by default
{{ user_input }}  {# Đã escape #}
{{ user_input|safe }}  {# NGUY HIỂM — tránh dùng #}

# Bleach để sanitize HTML
import bleach
clean_html = bleach.clean(
    user_html,
    tags=['p', 'b', 'i', 'a', 'ul', 'li'],
    attributes={'a': ['href', 'title']},
)
</code></pre>

<h2 id="4-csp"><strong>4. コンテンツセキュリティポリシー</strong></h2>

<pre><code class="language-bash">pip install django-csp
</code></pre>

<pre><code class="language-python"># settings.py
MIDDLEWARE = [..., 'csp.middleware.CSPMiddleware']

CSP_DEFAULT_SRC = ("'self'",)
CSP_SCRIPT_SRC = ("'self'", 'cdn.example.com')
CSP_STYLE_SRC = ("'self'", "'unsafe-inline'")
CSP_IMG_SRC = ("'self'", 'data:', '*.amazonaws.com')
</code></pre>

<h2 id="5-input-validation"><strong>5. 入力の検証とサニタイズ</strong></h2>

<pre><code class="language-python">from django.core.validators import (
    RegexValidator, FileExtensionValidator,
)

class UserProfile(models.Model):
    phone = models.CharField(
        max_length=15,
        validators=[RegexValidator(r'^\+?[0-9]{9,15}$')],
    )
    avatar = models.FileField(
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'png', 'webp'])],
    )

# File upload size limit
FILE_UPLOAD_MAX_MEMORY_SIZE = 5 * 1024 * 1024  # 5MB
DATA_UPLOAD_MAX_MEMORY_SIZE = 10 * 1024 * 1024
</code></pre>

<h2 id="6-security-checklist"><strong>6. セキュリティチェックリスト</strong></h2>

<pre><code class="language-bash"># Django security check
python manage.py check --deploy
</code></pre>

<table>
<thead><tr><th>セクション</th><th>ステータス</th></tr></thead>
<tbody>
<tr><td>デバッグ = 偽</td><td>✅</td></tr>
<tr><td>環境からの SECRET_KEY</td><td>✅</td></tr>
<tr><td>ALLOWED_HOSTS セット</td><td>✅</td></tr>
<tr><td>HTTPSのみ</td><td>✅</td></tr>
<tr><td>CSRF有効</td><td>✅</td></tr>
<tr><td>SQLパラメータ化</td><td>✅</td></tr>
<tr><td>ファイルのアップロードが検証されました</td><td>✅</td></tr>
<tr><td>セキュリティヘッダー</td><td>✅</td></tr>
</tbody>
</table>

<p>次の記事: <strong>Django 管理者のカスタマイズ</strong>。</p>
