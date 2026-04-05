---
id: 019d8b40-c101-7001-b004-django00000101
title: 'Bài 1: Giới thiệu Django - The Web Framework for Perfectionists'
slug: bai-1-gioi-thieu-django
description: >-
  Django là gì, triết lý "batteries included". So sánh Django vs FastAPI
  vs Flask vs Laravel. MVT architecture, Django ecosystem. Cài đặt,
  tạo project và app đầu tiên.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Django Fundamentals"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3591" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3591)"/>

  <!-- Decorations -->
  <g>
    <circle cx="987" cy="171" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="874" cy="218" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="761" cy="265" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="648" cy="52" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="1035" cy="99" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="101" x2="1100" y2="181" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="131" x2="1050" y2="201" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="982.1769145362398,133 982.1769145362398,169 951,187 919.8230854637602,169 919.8230854637602,133 951,115" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 Lập trình — Bài 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 1: Giới thiệu Django - The Web</tspan>
      <tspan x="60" dy="42">Framework for Perfectionists</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Django: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Django Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-django-la-gi"><strong>1. Django là gì?</strong></h2>

<p>Django là Python web framework "batteries included" — cung cấp sẵn ORM, admin panel, authentication, form processing, template engine và nhiều module khác ngay từ đầu.</p>

<table>
<thead><tr><th>Feature</th><th>Django</th><th>FastAPI</th><th>Flask</th><th>Laravel</th></tr></thead>
<tbody>
<tr><td>Language</td><td>Python</td><td>Python</td><td>Python</td><td>PHP</td></tr>
<tr><td>Type</td><td>Full-stack</td><td>API-only</td><td>Micro</td><td>Full-stack</td></tr>
<tr><td>ORM</td><td>Built-in</td><td>SQLAlchemy</td><td>SQLAlchemy</td><td>Eloquent</td></tr>
<tr><td>Admin</td><td>Built-in</td><td>Không</td><td>Không</td><td>Third-party</td></tr>
<tr><td>Async</td><td>Django 5.x</td><td>Native</td><td>Limited</td><td>Không</td></tr>
<tr><td>Use case</td><td>Full-stack, CMS</td><td>API, microservices</td><td>Simple apps</td><td>Full-stack</td></tr>
</tbody>
</table>

<h2 id="2-mvt"><strong>2. MVT Architecture</strong></h2>

<pre><code class="language-text">Request → URL Router → View → Template → Response
                         ↕
                       Model ↔ Database
</code></pre>

<table>
<thead><tr><th>Component</th><th>Vai trò</th></tr></thead>
<tbody>
<tr><td>Model</td><td>Data layer — ORM, database schema</td></tr>
<tr><td>View</td><td>Business logic — xử lý request, trả response</td></tr>
<tr><td>Template</td><td>Presentation — HTML rendering</td></tr>
</tbody>
</table>

<h2 id="3-cai-dat"><strong>3. Cài đặt & Tạo Project</strong></h2>

<pre><code class="language-bash"># Python virtual environment
python -m venv .venv
source .venv/bin/activate

# Cài Django
pip install django djangorestframework

# Tạo project
django-admin startproject config .

# Tạo app
python manage.py startapp users
python manage.py startapp products
</code></pre>

<h2 id="4-cau-truc"><strong>4. Cấu trúc Project</strong></h2>

<pre><code class="language-text">myproject/
├── config/
│   ├── __init__.py
│   ├── settings.py      # Configuration
│   ├── urls.py           # Root URL routing
│   ├── wsgi.py           # WSGI entry
│   └── asgi.py           # ASGI entry (async)
├── users/
│   ├── models.py         # Data models
│   ├── views.py          # View logic
│   ├── urls.py           # App URL routing
│   ├── serializers.py    # DRF serializers
│   ├── admin.py          # Admin config
│   └── tests.py          # Tests
├── manage.py
└── requirements.txt
</code></pre>

<h2 id="5-settings"><strong>5. Settings cơ bản</strong></h2>

<pre><code class="language-python"># config/settings.py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'rest_framework',
    # Custom apps
    'users',
    'products',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'mydb',
        'USER': 'postgres',
        'PASSWORD': 'secret',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
</code></pre>

<pre><code class="language-bash"># Chạy migrations & server
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
</code></pre>

<p>Bài tiếp theo: <strong>Models & Django ORM</strong> — fields, relationships, managers.</p>
