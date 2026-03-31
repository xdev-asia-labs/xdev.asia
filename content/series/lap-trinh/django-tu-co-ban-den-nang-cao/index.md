---
id: 019d8b40-c100-7001-b004-django00000001
title: 'Django: Từ Cơ bản đến Nâng cao'
slug: django-tu-co-ban-den-nang-cao
description: >-
  Khóa học Django toàn diện từ cơ bản đến nâng cao, giúp bạn làm chủ framework
  Python full-stack mạnh nhất. Bao gồm Django ORM, Django REST Framework,
  Class-Based Views, Authentication, Celery, Channels (WebSockets), Testing,
  Docker và triển khai Production. Cập nhật theo Django 5.2+ và Python 3.12+
  với các best practices mới nhất 2026.
featured_image: uploads/2026/03/django-series-banner-2026.png
level: beginner
duration_hours: 80
lesson_count: 20
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
  - name: Python
    slug: python
  - name: Django
    slug: django
  - name: Backend
    slug: backend
  - name: rest-api
    slug: rest-api
  - name: DRF
    slug: drf
  - name: Django REST Framework
    slug: django-rest-framework
  - name: ORM
    slug: orm
  - name: Celery
    slug: celery
  - name: Channels
    slug: channels
  - name: Docker
    slug: docker
  - name: Testing
    slug: testing
  - name: PostgreSQL
    slug: postgresql
  - name: Redis
    slug: redis
  - name: WebSocket
    slug: websocket
  - name: Full-Stack
    slug: full-stack
sections:
  - id: section-01
    title: 'Phần 1: Django Fundamentals'
    description: 'Cài đặt Django, MVT pattern, models, views, templates, URL routing'
    sort_order: 1
    lessons:
      - id: 019d8b40-c101-7001-b004-django00000101
        title: 'Bài 1: Giới thiệu Django - The Web Framework for Perfectionists'
        slug: bai-1-gioi-thieu-django
        description: >-
          Django là gì, triết lý "batteries included". So sánh Django vs FastAPI
          vs Flask vs Laravel. MVT architecture, Django ecosystem. Cài đặt,
          tạo project và app đầu tiên.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-c102-7001-b004-django00000102
        title: 'Bài 2: Models & Django ORM'
        slug: bai-2-models-va-django-orm
        description: >-
          Django ORM, model fields, relationships (ForeignKey, OneToOne,
          ManyToMany). Meta options, managers, custom querysets. Migrations CLI,
          database routers.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-c103-7001-b004-django00000103
        title: 'Bài 3: Views, URLs & Templates'
        slug: bai-3-views-urls-va-templates
        description: >-
          Function-Based Views, URL routing, URL namespaces. Django Template
          Language, template inheritance, custom template tags/filters.
          Static files, media files.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-c104-7001-b004-django00000104
        title: 'Bài 4: Class-Based Views & Forms'
        slug: bai-4-class-based-views-va-forms
        description: >-
          Class-Based Views (ListView, DetailView, CreateView, UpdateView,
          DeleteView). Django Forms, ModelForms, formsets. CSRF protection,
          form validation, file upload.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Phần 2: Django REST Framework'
    description: 'DRF serializers, viewsets, routers, pagination, filtering, throttling'
    sort_order: 2
    lessons:
      - id: 019d8b40-c201-7001-b004-django00000201
        title: 'Bài 5: Django REST Framework - Serializers & Views'
        slug: bai-5-drf-serializers-va-views
        description: >-
          DRF setup, Serializers (Serializer, ModelSerializer, nested serializers).
          APIView, GenericAPIView, mixins. Request/Response objects,
          status codes, content negotiation.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-c202-7001-b004-django00000202
        title: 'Bài 6: ViewSets, Routers & Pagination'
        slug: bai-6-viewsets-routers-va-pagination
        description: >-
          ModelViewSet, custom actions. DefaultRouter, nested routers.
          Pagination (PageNumber, LimitOffset, Cursor). Filtering với
          django-filter, SearchFilter, OrderingFilter.
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-c203-7001-b004-django00000203
        title: 'Bài 7: Advanced Serializers & Validation'
        slug: bai-7-advanced-serializers-va-validation
        description: >-
          WritableNestedSerializer, polymorphic serializers. Field-level,
          object-level validation. SerializerMethodField, custom fields.
          Optimizing N+1 queries với select_related/prefetch_related.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-c204-7001-b004-django00000204
        title: 'Bài 8: Versioning, Throttling & API Documentation'
        slug: bai-8-versioning-throttling-va-api-docs
        description: >-
          API versioning strategies. Throttling (AnonRate, UserRate, ScopedRate).
          OpenAPI/Swagger với drf-spectacular. API testing với DRF test client.
        duration_minutes: 90
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Phần 3: Authentication & Security'
    description: 'Django auth, JWT, OAuth2, permissions, security best practices'
    sort_order: 3
    lessons:
      - id: 019d8b40-c301-7001-b004-django00000301
        title: 'Bài 9: Authentication - Session, Token & JWT'
        slug: bai-9-authentication-session-token-va-jwt
        description: >-
          Django auth system, custom User model. Session auth, Token auth,
          JWT với djangorestframework-simplejwt. Token refresh, blacklisting.
          Multi-factor authentication.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-c302-7001-b004-django00000302
        title: 'Bài 10: Permissions & Authorization'
        slug: bai-10-permissions-va-authorization
        description: >-
          DRF permissions (IsAuthenticated, IsAdminUser, custom permissions).
          Object-level permissions, django-guardian. Django Groups & Permissions,
          RBAC pattern. django-rules.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-c303-7001-b004-django00000303
        title: 'Bài 11: Social Auth & OAuth2'
        slug: bai-11-social-auth-va-oauth2
        description: >-
          django-allauth cho social authentication. Google, GitHub, Facebook login.
          OAuth2 provider với django-oauth-toolkit. Account linking, email
          verification.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-c304-7001-b004-django00000304
        title: 'Bài 12: Security Best Practices'
        slug: bai-12-security-best-practices
        description: >-
          CSRF, XSS, SQL injection protection. CORS với django-cors-headers.
          Rate limiting, security middleware. Content Security Policy,
          django-csp. OWASP Top 10 cho Django.
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Phần 4: Advanced Features'
    description: 'Django Channels, Celery, caching, signals, admin customization'
    sort_order: 4
    lessons:
      - id: 019d8b40-c401-7001-b004-django00000401
        title: 'Bài 13: Django Admin Customization'
        slug: bai-13-django-admin-customization
        description: >-
          ModelAdmin customization, list_display, list_filter, search_fields.
          Inline models, custom admin actions, admin widgets. django-unfold
          cho modern admin UI.
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-c402-7001-b004-django00000402
        title: 'Bài 14: Django Channels & WebSockets'
        slug: bai-14-django-channels-va-websockets
        description: >-
          Django Channels, ASGI, channel layers (Redis). WebSocket consumers,
          groups, broadcasting. Real-time chat application. Background workers
          với Channels.
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-c403-7001-b004-django00000403
        title: 'Bài 15: Celery, Signals & Caching'
        slug: bai-15-celery-signals-va-caching
        description: >-
          Celery với Redis/RabbitMQ, periodic tasks (Celery Beat). Django Signals,
          custom signals. Django cache framework, Redis caching, cache patterns.
          django-cachalot.
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-c404-7001-b004-django00000404
        title: 'Bài 16: File Storage, Email & Notifications'
        slug: bai-16-file-storage-email-va-notifications
        description: >-
          Django storage backends, S3 với django-storages. Image processing
          với Pillow. Email sending, templates. Push notifications,
          django-notifications-hq.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Phần 5: Testing, Deployment & Production'
    description: 'Testing, Docker, CI/CD, monitoring, performance optimization'
    sort_order: 5
    lessons:
      - id: 019d8b40-c501-7001-b004-django00000501
        title: 'Bài 17: Testing trong Django'
        slug: bai-17-testing-trong-django
        description: >-
          Django TestCase, pytest-django. Factory Boy, model bakery. API testing
          với DRF test client. Coverage report, testing strategies.
          Mocking, fixtures, transaction tests.
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-c502-7001-b004-django00000502
        title: 'Bài 18: Performance Optimization'
        slug: bai-18-performance-optimization
        description: >-
          QuerySet optimization, select_related/prefetch_related, Subquery,
          F/Q objects. Database indexing, query analysis. Django Debug Toolbar,
          django-silk profiling. Async views.
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-c503-7001-b004-django00000503
        title: 'Bài 19: Docker & CI/CD cho Django'
        slug: bai-19-docker-va-cicd-cho-django
        description: >-
          Dockerfile multi-stage build cho Django. Docker Compose (Django +
          PostgreSQL + Redis + Celery + Nginx). GitHub Actions CI/CD pipeline.
          Gunicorn configuration, static files serving.
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-c504-7001-b004-django00000504
        title: 'Bài 20: Production Deployment & Monitoring'
        slug: bai-20-production-deployment-va-monitoring
        description: >-
          Deploy Django + Nginx + Gunicorn. Sentry error tracking, structured
          logging. Prometheus metrics, Grafana dashboards. Django health checks,
          scaling strategies, zero-downtime deployment.
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
---

Khóa học **Django: Từ Cơ bản đến Nâng cao** được thiết kế giúp bạn làm chủ Django — framework Python "batteries included" mạnh nhất cho web development, từ MVT pattern đến REST API production-ready.

## Bạn sẽ học được gì?

- **Django Core**: Models, Views, Templates, URL routing, Forms, Admin
- **Django REST Framework**: Serializers, ViewSets, Routers, Pagination, Filtering
- **Authentication**: Session, JWT, OAuth2, Social Login, Permissions
- **Advanced**: Channels (WebSockets), Celery, Caching, Signals, File Storage
- **Production**: Testing, Docker, CI/CD, Monitoring, Performance Optimization

## Yêu cầu

- Kiến thức Python cơ bản (functions, classes, modules)
- Hiểu biết cơ bản về HTTP, HTML và SQL
- Máy tính cài đặt Python 3.12+ và Docker
