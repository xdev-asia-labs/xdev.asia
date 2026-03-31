---
id: 019d8b40-c304-7001-b004-django00000304
title: 'Bài 12: Security Best Practices'
slug: bai-12-security-best-practices
description: >-
  OWASP Top 10 trong Django. XSS, CSRF, SQL Injection prevention.
  Security middleware, Content Security Policy. Rate limiting,
  input sanitization, secure headers.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 3: Authentication & Security"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

<h2 id="1-security-settings"><strong>1. Security Settings</strong></h2>

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

<h2 id="2-sql-injection"><strong>2. SQL Injection Prevention</strong></h2>

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

<h2 id="3-xss"><strong>3. XSS Prevention</strong></h2>

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

<h2 id="4-csp"><strong>4. Content Security Policy</strong></h2>

<pre><code class="language-bash">pip install django-csp
</code></pre>

<pre><code class="language-python"># settings.py
MIDDLEWARE = [..., 'csp.middleware.CSPMiddleware']

CSP_DEFAULT_SRC = ("'self'",)
CSP_SCRIPT_SRC = ("'self'", 'cdn.example.com')
CSP_STYLE_SRC = ("'self'", "'unsafe-inline'")
CSP_IMG_SRC = ("'self'", 'data:', '*.amazonaws.com')
</code></pre>

<h2 id="5-input-validation"><strong>5. Input Validation & Sanitization</strong></h2>

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

<h2 id="6-security-checklist"><strong>6. Security Checklist</strong></h2>

<pre><code class="language-bash"># Django security check
python manage.py check --deploy
</code></pre>

<table>
<thead><tr><th>Mục</th><th>Trạng thái</th></tr></thead>
<tbody>
<tr><td>DEBUG = False</td><td>✅</td></tr>
<tr><td>SECRET_KEY từ env</td><td>✅</td></tr>
<tr><td>ALLOWED_HOSTS set</td><td>✅</td></tr>
<tr><td>HTTPS only</td><td>✅</td></tr>
<tr><td>CSRF enabled</td><td>✅</td></tr>
<tr><td>SQL parameterized</td><td>✅</td></tr>
<tr><td>File upload validated</td><td>✅</td></tr>
<tr><td>Security headers</td><td>✅</td></tr>
</tbody>
</table>

<p>Bài tiếp theo: <strong>Django Admin Customization</strong>.</p>
