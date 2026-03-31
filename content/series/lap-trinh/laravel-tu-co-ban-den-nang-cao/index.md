---
id: 019d8b40-i100-7001-b010-laravel000001
title: 'Laravel: Từ Cơ bản đến Nâng cao'
slug: laravel-tu-co-ban-den-nang-cao
description: >-
  Khóa học Laravel toàn diện từ cơ bản đến nâng cao, giúp bạn làm chủ PHP
  framework phổ biến nhất thế giới. Bao gồm Eloquent ORM, Blade Templates,
  Laravel API (Sanctum/Passport), Queues, Events, Broadcasting, Livewire,
  Testing, Docker và triển khai Production. Cập nhật theo Laravel 12+ và
  PHP 8.4+ với các best practices mới nhất 2026.
featured_image: uploads/2026/03/laravel-series-banner-2026.png
level: beginner
duration_hours: 80
lesson_count: 22
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-31T12:00:00.000000Z'
created_at: '2026-03-31T12:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-facb-72da-8191-e6d44b88fb3e
  name: Lập Trình
  slug: lap-trinh
tags:
  - name: Laravel
    slug: laravel
  - name: PHP
    slug: php
  - name: Backend
    slug: backend
  - name: Full-Stack
    slug: full-stack
  - name: Eloquent
    slug: eloquent
  - name: Blade
    slug: blade
  - name: Livewire
    slug: livewire
  - name: REST API
    slug: rest-api
  - name: Sanctum
    slug: sanctum
  - name: Queues
    slug: queues
  - name: Docker
    slug: docker
  - name: Testing
    slug: testing
  - name: PostgreSQL
    slug: postgresql
  - name: Redis
    slug: redis
  - name: Inertia.js
    slug: inertiajs
sections:
  - id: section-01
    title: 'Phần 1: Laravel Fundamentals'
    description: 'Laravel setup, routing, controllers, Blade, Eloquent ORM'
    sort_order: 1
    lessons:
      - id: 019d8b40-i101-7001-b010-laravel000101
        title: 'Bài 1: Giới thiệu Laravel - Framework PHP Elegant nhất'
        slug: bai-1-gioi-thieu-laravel
        description: >-
          Laravel là gì, triết lý "elegant syntax". So sánh Laravel vs Symfony
          vs Django vs Spring. PHP 8.4 essentials (readonly, enums, fibers,
          named arguments). Laravel Sail, Herd setup.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-i102-7001-b010-laravel000102
        title: 'Bài 2: Routing, Controllers & Middleware'
        slug: bai-2-routing-controllers-va-middleware
        description: >-
          Route types (GET, POST, PUT, DELETE), route parameters. Resource
          controllers, invokable controllers. Middleware, middleware groups.
          Route model binding, rate limiting.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-i103-7001-b010-laravel000103
        title: 'Bài 3: Blade Templates & Frontend'
        slug: bai-3-blade-templates-va-frontend
        description: >-
          Blade syntax, components, layouts. Blade directives, custom
          directives. Asset bundling (Vite). Tailwind CSS integration.
          Anonymous components, dynamic components.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-i104-7001-b010-laravel000104
        title: 'Bài 4: Eloquent ORM & Relationships'
        slug: bai-4-eloquent-orm-va-relationships
        description: >-
          Eloquent models, mass assignment, soft deletes. Relationships
          (hasOne, hasMany, belongsTo, belongsToMany, morphMany). Eager
          loading, query scopes, accessors/mutators. Casts.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Phần 2: Database & Validation'
    description: 'Migrations, seeding, Query Builder, validation, form requests'
    sort_order: 2
    lessons:
      - id: 019d8b40-i201-7001-b010-laravel000201
        title: 'Bài 5: Migrations, Seeding & Query Builder'
        slug: bai-5-migrations-seeding-va-query-builder
        description: >-
          Database migrations, schema builder. Factory (model factories),
          seeders. Query Builder, raw queries, pagination. Database
          transactions, database testing.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-i202-7001-b010-laravel000202
        title: 'Bài 6: Validation & Form Requests'
        slug: bai-6-validation-va-form-requests
        description: >-
          Validation rules, custom validation. Form Request classes,
          authorization. Error messages, localization. File validation,
          conditional validation. Custom validation rules.
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-i203-7001-b010-laravel000203
        title: 'Bài 7: API Resources & Response'
        slug: bai-7-api-resources-va-response
        description: >-
          API Resource classes, Resource Collections. Conditional attributes,
          relationships. Pagination, wrapping. JSON responses, custom
          response macros. API versioning.
        duration_minutes: 100
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-i204-7001-b010-laravel000204
        title: 'Bài 8: File Storage & Media'
        slug: bai-8-file-storage-va-media
        description: >-
          Filesystem abstraction (local, S3, GCS). File upload, validation.
          Spatie Media Library. Image manipulation (Intervention Image).
          Temporary URLs, streaming downloads.
        duration_minutes: 90
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Phần 3: Authentication & Authorization'
    description: 'Sanctum, Passport, Gates, Policies, Social Login'
    sort_order: 3
    lessons:
      - id: 019d8b40-i301-7001-b010-laravel000301
        title: 'Bài 9: Authentication - Sanctum & Fortify'
        slug: bai-9-authentication-sanctum-va-fortify
        description: >-
          Laravel Sanctum (SPA auth, API tokens). Fortify (registration,
          login, email verification, 2FA). Password hashing, remember me.
          Custom guards, multi-auth.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-i302-7001-b010-laravel000302
        title: 'Bài 10: Authorization - Gates & Policies'
        slug: bai-10-authorization-gates-va-policies
        description: >-
          Gates, Policies, Permissions. Spatie Laravel Permission package.
          Resource authorization, policy auto-discovery. Blade @can
          directives. Super admin, role hierarchy.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-i303-7001-b010-laravel000303
        title: 'Bài 11: OAuth2, Passport & Socialite'
        slug: bai-11-oauth2-passport-va-socialite
        description: >-
          Laravel Passport (OAuth2 server). Socialite (Google, GitHub, Facebook
          login). Account linking, custom providers. JWT vs Passport tokens.
          API scopes.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-i304-7001-b010-laravel000304
        title: 'Bài 12: Security Best Practices'
        slug: bai-12-security-best-practices
        description: >-
          CSRF protection, XSS prevention. SQL injection, mass assignment
          protection. Rate limiting, encryption. CORS configuration.
          HTTPS enforcement, security headers. OWASP cho Laravel.
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Phần 4: Advanced Features'
    description: 'Queues, Events, Broadcasting, Notifications, Scheduler'
    sort_order: 4
    lessons:
      - id: 019d8b40-i401-7001-b010-laravel000401
        title: 'Bài 13: Queues & Jobs'
        slug: bai-13-queues-va-jobs
        description: >-
          Queue drivers (Redis, SQS, Database). Job classes, dispatching,
          chaining. Job batching, rate limiting. Failed jobs, retry.
          Laravel Horizon monitoring. Queue priorities.
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-i402-7001-b010-laravel000402
        title: 'Bài 14: Events, Listeners & Broadcasting'
        slug: bai-14-events-listeners-va-broadcasting
        description: >-
          Event system, event subscribers. Broadcasting với Pusher/Laravel
          Reverb. Private/presence channels. Real-time notifications,
          WebSocket integration. Laravel Echo.
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-i403-7001-b010-laravel000403
        title: 'Bài 15: Notifications, Mail & Scheduler'
        slug: bai-15-notifications-mail-va-scheduler
        description: >-
          Notification channels (mail, database, Slack, SMS). Markdown
          mail, Mailables. Task scheduling, custom Artisan commands.
          laravel-data cho DTOs. Service container deep dive.
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-i404-7001-b010-laravel000404
        title: 'Bài 16: Caching, Sessions & Performance'
        slug: bai-16-caching-sessions-va-performance
        description: >-
          Cache drivers (Redis, Memcached, file). Cache tags, atomic locks.
          Session management. N+1 query prevention, query monitoring.
          Laravel Debugbar, Telescope. Octane (Swoole/FrankenPHP).
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Phần 5: Modern Full-Stack'
    description: 'Livewire, Inertia.js, Filament Admin, API Platform'
    sort_order: 5
    lessons:
      - id: 019d8b40-i501-7001-b010-laravel000501
        title: 'Bài 17: Livewire - Full-Stack Components'
        slug: bai-17-livewire-full-stack-components
        description: >-
          Livewire 3, wire:model, wire:click. Component lifecycle, reactive
          properties. File uploads, pagination. Lazy loading, polling.
          Alpine.js integration. SPA-like experience.
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-i502-7001-b010-laravel000502
        title: 'Bài 18: Inertia.js & Vue/React Integration'
        slug: bai-18-inertiajs-va-vue-react
        description: >-
          Inertia.js monolith architecture. Laravel + Vue/React SPA. Shared
          data, form helpers, file uploads. Server-side rendering.
          Inertia vs Livewire vs traditional SPA.
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 'Phần 6: Testing, Docker & Production'
    description: 'Testing, Docker, CI/CD, deployment, monitoring'
    sort_order: 6
    lessons:
      - id: 019d8b40-i601-7001-b010-laravel000601
        title: 'Bài 19: Testing trong Laravel'
        slug: bai-19-testing-trong-laravel
        description: >-
          PHPUnit, Pest testing framework. Feature tests, unit tests.
          Database testing, factories. HTTP tests, mocking. Browser
          testing (Laravel Dusk). Code coverage.
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-i602-7001-b010-laravel000602
        title: 'Bài 20: Clean Architecture & Packages'
        slug: bai-20-clean-architecture-va-packages
        description: >-
          Repository pattern, Service layer, Action classes. Domain-Driven
          Design basics. Creating Laravel packages. Module-based structure
          (nwidart/laravel-modules). SOLID principles.
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8b40-i603-7001-b010-laravel000603
        title: 'Bài 21: Docker & CI/CD'
        slug: bai-21-docker-va-cicd
        description: >-
          Dockerfile cho Laravel (PHP-FPM + Nginx). Laravel Sail, Docker
          Compose. GitHub Actions CI/CD pipeline (lint, test, build, deploy).
          Laravel Forge, Vapor (serverless).
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8b40-i604-7001-b010-laravel000604
        title: 'Bài 22: Production Deployment & Monitoring'
        slug: bai-22-production-deployment-va-monitoring
        description: >-
          Zero-downtime deployment (Envoyer, Deployer). Laravel Telescope,
          Pulse monitoring. Sentry error tracking, structured logging.
          Prometheus metrics, health checks. Scaling strategies (Octane,
          load balancer, queue workers).
        duration_minutes: 150
        is_free: true
        sort_order: 22
        video_url: null
---

Khóa học **Laravel: Từ Cơ bản đến Nâng cao** giúp bạn làm chủ Laravel — PHP framework phổ biến nhất với hệ sinh thái "batteries included" mạnh mẽ, từ Eloquent ORM đến real-time broadcasting và production deployment.

## Bạn sẽ học được gì?

- **Laravel Core**: Routing, Controllers, Eloquent ORM, Blade, Middleware
- **API Development**: Sanctum, API Resources, Validation, File Storage
- **Authentication**: Sanctum, Passport, Socialite, Gates & Policies
- **Advanced**: Queues, Events, Broadcasting, Notifications, Caching
- **Modern Stack**: Livewire 3, Inertia.js, Filament Admin
- **Production**: Testing (Pest), Docker, CI/CD, Monitoring, Scaling

## Yêu cầu

- Kiến thức PHP 8.x cơ bản (classes, namespaces, traits)
- Hiểu biết cơ bản về HTTP, HTML, SQL
- Composer, PHP 8.4+ và Docker
