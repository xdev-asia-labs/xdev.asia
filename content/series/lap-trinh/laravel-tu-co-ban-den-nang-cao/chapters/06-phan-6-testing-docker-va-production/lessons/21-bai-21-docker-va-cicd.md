---
id: 019d8b40-i603-7001-b010-laravel000603
title: 'Bài 21: Docker & CI/CD'
slug: bai-21-docker-va-cicd
description: >-
  Dockerfile cho Laravel (PHP-FPM + Nginx). Laravel Sail,
  Docker Compose. GitHub Actions CI/CD pipeline (lint, test,
  build, deploy). Laravel Forge, Vapor (serverless).
duration_minutes: 120
is_free: true
video_url: null
sort_order: 21
section_title: "Phần 6: Testing, Docker & Production"
course:
  id: 019d8b40-i100-7001-b010-laravel000001
  title: 'Laravel: Từ Cơ bản đến Nâng cao'
  slug: laravel-tu-co-ban-den-nang-cao
---

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

<p>Bài tiếp theo: <strong>Production Deployment & Monitoring</strong>.</p>
