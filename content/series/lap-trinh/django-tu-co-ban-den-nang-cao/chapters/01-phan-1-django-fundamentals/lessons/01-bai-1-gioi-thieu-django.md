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
