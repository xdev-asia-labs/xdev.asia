---
id: 019d8b40-c101-7001-b004-django00000101
title: 第 1 課：Django 簡介 - 完美主義者的 Web 框架
slug: bai-1-gioi-thieu-django
description: >-
  Django 的「自備電池」理念是什麼？比較 Django、FastAPI、Flask 和 Laravel。
  MVT架構，Django生態系。安裝並創建您的第一個專案和應用程式。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：Django 基礎知識
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: Django：從基礎到高級
  slug: django-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 程式設計 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 1 課：Django 簡介 - 網路</tspan>
      <tspan x="60" dy="42">完美主義者的框架</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Django：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Django 基礎知識</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-django-la-gi"><strong>1.Django是什麼？</strong></h2>

<p>Django 是一個「全能」的 Python Web 框架——從一開始就提供 ORM、管理面板、身份驗證、表單處理、模板引擎和許多其他模組。</p>

<table>
<thead><tr><th>特點</th><th>薑戈</th><th>快速API</th><th>燒瓶</th><th>拉維爾</th></tr></thead>
<tbody>
<tr><td>語言</td><td>蟒蛇</td><td>蟒蛇</td><td>蟒蛇</td><td>PHP</td></tr>
<tr><td>類型</td><td>全端</td><td>僅限 API</td><td>麥克風</td><td>全端</td></tr>
<tr><td>ORM</td><td>內建</td><td>SQL煉金術</td><td>SQL煉金術</td><td>雄辯</td></tr>
<tr><td>管理員</td><td>內建</td><td>否</td><td>否</td><td>第三方</td></tr>
<tr><td>非同步</td><td>薑戈 5.x</td><td>本地人</td><td>有限公司</td><td>否</td></tr>
<tr><td>使用案例</td><td>全端、CMS</td><td>API、微服務</td><td>簡單的應用程式</td><td>全端</td></tr>
</tbody>
</table>

<h2 id="2-mvt"><strong>2.MVT架構</strong></h2>

<pre><code class="language-text">Request → URL Router → View → Template → Response
                         ↕
                       Model ↔ Database
</code></pre>

<table>
<thead><tr><th>組件</th><th>角色</th></tr></thead>
<tbody>
<tr><td>型號</td><td>資料層——ORM、資料庫模式</td></tr>
<tr><td>查看</td><td>業務邏輯－處理請求，回傳回應</td></tr>
<tr><td>範本</td><td>示範 — HTML 渲染</td></tr>
</tbody>
</table>

<h2 id="3-cai-dat"><strong>3. 安裝並建立項目</strong></h2>

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

<h2 id="4-cau-truc"><strong>4. 項目結構</strong></h2>

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

<h2 id="5-settings"><strong>5. 基本設定</strong></h2>

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

<p>下一篇： <strong>模型和 Django ORM</strong> ——領域、關係、管理者。</p>
