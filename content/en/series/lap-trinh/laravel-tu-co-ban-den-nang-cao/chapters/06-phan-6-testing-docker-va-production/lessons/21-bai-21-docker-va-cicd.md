---
id: 019d8b40-i603-7001-b010-laravel000603
title: 'Lesson 21: Docker & CI/CD'
slug: bai-21-docker-va-cicd
description: >-
  Dockerfile for Laravel (PHP-FPM + Nginx). Laravel Sail, Docker Compose. GitHub
  Actions CI/CD pipeline (lint, test, build, deploy). Laravel Forge, Vapor
  (serverless).
duration_minutes: 120
is_free: true
video_url: null
sort_order: 21
section_title: 'Part 6: Testing, Docker & Production'
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: From Basics to Advanced'
  slug: laravel-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9291" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9291)"/>

  <!-- Decorations -->
  <g>
    <circle cx="723" cy="139" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="846" cy="262" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="969" cy="125" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1092" cy="248" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="111" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="129" x2="1100" y2="209" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="159" x2="1050" y2="229" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1067.1051177665154,207 1067.1051177665154,251 1029,273 990.8948822334847,251 990.8948822334847,207 1029,185" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 Programming — Lesson 21</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 21: Docker & CI/CD</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Laravel: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: Testing, Docker & Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-dockerfile"><strong>1. Dockerfile (Multi-stage)</strong></h2>

<pre><code class="language-dockerfile">FROM php:8.4-fpm-alpine AS base
RUN apk add --no-cache libpq-dev \
    && docker-php-ext-install pdo_pgsql opcache

FROM base AS composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --prefer-dist

FROM base AS runtime
WORKDIR /app
COPY --from=composer /app/vendor ./vendor
COPY . .
RUN php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

EXPOSE 9000
CMD ["php-fpm"]
</code></pre>

<h2 id="2-docker-compose"><strong>2. Docker Compose</strong></h2>

<pre><code class="language-yaml">services:
  app:
    build: .
    volumes:
      - .:/app
    depends_on:
      - db
      - redis

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./docker/nginx.conf:/etc/nginx/conf.d/default.conf
      - .:/app
    depends_on:
      - app

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: ${DB_DATABASE}
      POSTGRES_USER: ${DB_USERNAME}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - pgdata:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine

  queue:
    build: .
    command: php artisan queue:work --tries=3 --timeout=90
    depends_on:
      - db
      - redis

volumes:
  pgdata:
</code></pre>

<h2 id="3-github-actions"><strong>3. GitHub Actions CI/CD</strong></h2>

<pre><code class="language-yaml">name: Laravel CI/CD
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_DB: testing
          POSTGRES_USER: test
          POSTGRES_PASSWORD: test
        ports: ["5432:5432"]

    steps:
      - uses: actions/checkout@v4
      - uses: shivammathur/setup-php@v2
        with:
          php-version: "8.4"
          extensions: pdo_pgsql

      - run: composer install --no-interaction
      - run: cp .env.testing .env
      - run: php artisan key:generate
      - run: php artisan test --parallel --coverage --min=80
        env:
          DB_CONNECTION: pgsql
          DB_HOST: 127.0.0.1
          DB_DATABASE: testing
          DB_USERNAME: test
          DB_PASSWORD: test

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy
        run: |
          ssh ${{ secrets.SERVER }} "cd /app && git pull && composer install --no-dev && php artisan migrate --force && php artisan optimize"
</code></pre>

<p>Next article: <strong>Production Deployment & Monitoring</strong>.</p>
