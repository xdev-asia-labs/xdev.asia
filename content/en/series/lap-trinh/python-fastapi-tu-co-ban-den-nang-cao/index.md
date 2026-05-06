---
id: 019d8b40-a100-7001-b002-fastapi000001
title: 'Python FastAPI: From Basics to Advanced'
slug: python-fastapi-tu-co-ban-den-nang-cao
description: >-
  The Python FastAPI course is comprehensive from basic to advanced, helping you
  master the most modern Python framework for Backend API. Includes Python
  fundamentals, Pydantic, async/await, SQLAlchemy, Alembic, Authentication,
  Authorization, OAuth2, WebSockets, Background Tasks, Testing, Docker and
  Production deployment. Updated to FastAPI 0.115+ and Python 3.12+ with the
  latest 2026 best practices.
featured_image: uploads/2026/03/python-fastapi-banner-v2.png
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
  name: Programming
  slug: lap-trinh
tags:
  - name: Python
    slug: python
  - name: FastAPI
    slug: fastapi
  - name: Backend
    slug: backend
  - name: rest-api
    slug: rest-api
  - name: Pydantic
    slug: pydantic
  - name: SQLAlchemy
    slug: sqlalchemy
  - name: Alembic
    slug: alembic
  - name: Docker
    slug: docker
  - name: Testing
    slug: testing
  - name: JWT
    slug: jwt
  - name: OAuth2
    slug: oauth2
  - name: WebSocket
    slug: websocket
  - name: Async
    slug: async
  - name: PostgreSQL
    slug: postgresql
  - name: Redis
    slug: redis
sections:
  - id: section-01
    title: 'Part 1: Python Foundation & FastAPI'
    description: 'Get familiar with modern Python, FastAPI, and building your first REST API'
    sort_order: 1
    lessons:
      - id: 019d8b40-a101-7001-b002-fastapi000101
        title: 'Lesson 1: Introducing FastAPI - The most modern Python framework'
        slug: bai-1-gioi-thieu-fastapi-framework-python-hien-dai-nhat
        description: >-
          Find out what FastAPI is, compare with Django, Flask, Litestar. ASGI
          architecture, async-first, type hints, auto-documentation. Ecosystem
          and practical use cases.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-a102-7001-b002-fastapi000102
        title: 'Lesson 2: Python Essentials for FastAPI'
        slug: bai-2-python-essentials-cho-fastapi
        description: >-
          Essential Python review for FastAPI: Type Hints, Dataclasses,
          Decorators, Context Managers, Generators, basic async/await. Virtual
          environments and dependency management with Poetry/uv.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-a103-7001-b002-fastapi000103
        title: 'Lesson 3: Install and Initialize FastAPI Project'
        slug: bai-3-cai-dat-va-khoi-tao-fastapi-project
        description: >-
          Install FastAPI and Uvicorn, initialize project structure, understand
          standard directory structure. Run the development server, Swagger UI,
          ReDoc and write the first API endpoint.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-a104-7001-b002-fastapi000104
        title: 'Lesson 4: Path Operations, Request & Response'
        slug: bai-4-path-operations-request-va-response
        description: >-
          Path parameters, Query parameters, Request body, Headers, Cookies.
          HTTP methods, Status codes, Response models, JSONResponse. Type
          validation automatically with Pydantic.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Part 2: Pydantic, Database & ORM'
    description: 'Pydantic models, SQLAlchemy ORM, Alembic migrations, CRUD operations'
    sort_order: 2
    lessons:
      - id: 019d8b40-a201-7001-b002-fastapi000201
        title: 'Lesson 5: Pydantic V2 - Data Validation & Serialization'
        slug: bai-5-pydantic-v2-data-validation-va-serialization
        description: >-
          Pydantic BaseModel, Field validators, model_validator, computed
          fields. Custom types, JSON Schema generation, Settings management with
          pydantic-settings. Nested models and discriminated unions.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-a202-7001-b002-fastapi000202
        title: 'Lesson 6: SQLAlchemy 2.0 & Async Database'
        slug: bai-6-sqlalchemy-2-va-async-database
        description: >-
          SQLAlchemy 2.0 ORM with declarative mapping, Relationships (1-1, 1-N,
          N-N), Async engine with asyncpg. Session management, Unit of Work
          pattern. Connect PostgreSQL and MySQL.
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-a203-7001-b002-fastapi000203
        title: 'Lesson 7: Alembic Migrations & Database Seeding'
        slug: bai-7-alembic-migrations-va-database-seeding
        description: >-
          Alembic configuration for async SQLAlchemy, auto-generate migrations,
          migration strategies. Database seeding, bulk operations, raw SQL.
          Multi-database and schema versioning.
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-a204-7001-b002-fastapi000204
        title: 'Lesson 8: CRUD Operations & Repository Pattern'
        slug: bai-8-crud-operations-va-repository-pattern
        description: >-
          Build a complete CRUD API, Repository pattern, Pagination, Filtering,
          Sorting. Dependency Injection in FastAPI with Depends(). Error
          handling and custom exceptions.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Part 3: Authentication & Security'
    description: 'OAuth2, JWT, Password hashing, RBAC, CORS, Rate Limiting'
    sort_order: 3
    lessons:
      - id: 019d8b40-a301-7001-b002-fastapi000301
        title: 'Lesson 9: Authentication with OAuth2 and JWT'
        slug: bai-9-authentication-voi-oauth2-va-jwt
        description: >-
          OAuth2 password flow in FastAPI, JWT access token and refresh token.
          Password hashing with Passlib/Bcrypt. Token rotation, blacklisting.
          Security schemes in OpenAPI.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-a302-7001-b002-fastapi000302
        title: 'Lesson 10: Authorization - RBAC & Permissions'
        slug: bai-10-authorization-rbac-va-permissions
        description: >-
          Role-Based Access Control, Permission-based authorization in FastAPI.
          Custom dependencies for authorization, decorator patterns.
          Multi-tenant authorization strategies.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-a303-7001-b002-fastapi000303
        title: 'Lesson 11: Security Best Practices'
        slug: bai-11-security-best-practices
        description: >-
          CORS configuration, Rate limiting with SlowAPI, Input sanitization,
          SQL injection prevention. HTTPS, Security headers, Environment
          variables management. OWASP Top 10 for FastAPI.
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-a304-7001-b002-fastapi000304
        title: 'Lesson 12: Social Login & OAuth2 Providers'
        slug: bai-12-social-login-va-oauth2-providers
        description: >-
          OAuth2 Authorization Code flow, Social login with Google, GitHub,
          Facebook. Authlib integration, Account linking, OpenID Connect.
          Multi-provider authentication strategy.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Part 4: Advanced Features'
    description: >-
      Middleware, WebSockets, Background Tasks, Caching, File Upload, Async Deep
      Dive
    sort_order: 4
    lessons:
      - id: 019d8b40-a401-7001-b002-fastapi000401
        title: 'Lesson 13: Middleware, Events & Lifespan'
        slug: bai-13-middleware-events-va-lifespan
        description: >-
          HTTP Middleware, ASGI Middleware, Starlette middleware stack. Lifespan
          events (startup/shutdown), Application state. Custom middleware for
          logging, timing, request ID tracking.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-a402-7001-b002-fastapi000402
        title: 'Lesson 14: WebSockets & Real-time Communication'
        slug: bai-14-websockets-va-real-time-communication
        description: >-
          WebSocket endpoints in FastAPI, Connection manager, Broadcasting,
          Rooms pattern. Real-time chat, notifications. Server-Sent Events (SSE)
          and long polling alternatives.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-a403-7001-b002-fastapi000403
        title: 'Lesson 15: Background Tasks, Celery & Task Queues'
        slug: bai-15-background-tasks-celery-va-task-queues
        description: >-
          FastAPI BackgroundTasks, Celery with Redis/RabbitMQ broker, Celery
          Beat for scheduled tasks. Task chaining, error handling, retry
          strategies. ARQ and SAQ alternatives for async task queues.
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-a404-7001-b002-fastapi000404
        title: 'Lesson 16: File Upload, Caching & Async Deep Dive'
        slug: bai-16-file-upload-caching-va-async-deep-dive
        description: >-
          File upload streaming, UploadFile, multipart forms. Redis caching with
          fastapi-cache2. Async/await deep dive: asyncio, concurrent tasks,
          semaphores, async generators. httpx for async HTTP clients.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Part 5: Architecture, Testing & Production'
    description: 'Clean Architecture, Testing, Docker, CI/CD and Production deployment'
    sort_order: 5
    lessons:
      - id: 019d8b40-a501-7001-b002-fastapi000501
        title: 'Lesson 17: Clean Architecture & Project Structure'
        slug: bai-17-clean-architecture-va-project-structure
        description: >-
          Clean Architecture for FastAPI, Domain-Driven Design basics. Service
          layer, Repository pattern, Use cases. Modular project structure for
          large-scale applications. API versioning strategies.
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-a502-7001-b002-fastapi000502
        title: 'Lesson 18: Testing in FastAPI'
        slug: bai-18-testing-trong-fastapi
        description: >-
          Unit testing with pytest, TestClient and httpx.AsyncClient.
          Integration testing, Database fixtures with factory_boy. Mocking
          dependencies, Test database isolation. Code coverage and testing
          strategies.
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-a503-7001-b002-fastapi000503
        title: 'Lesson 19: Dockerize & CI/CD for FastAPI'
        slug: bai-19-dockerize-va-cicd-cho-fastapi
        description: >-
          Dockerfile multi-stage build for FastAPI, Docker Compose with
          PostgreSQL, Redis, Celery workers. GitHub Actions CI/CD pipeline.
          Health checks, graceful shutdown, Gunicorn + Uvicorn workers.
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-a504-7001-b002-fastapi000504
        title: 'Lesson 20: Production Deployment & Monitoring'
        slug: bai-20-production-deployment-va-monitoring
        description: >-
          Deploy FastAPI to VPS/Cloud (AWS, GCP). Nginx reverse proxy, SSL/TLS.
          Logging with structlog, OpenTelemetry tracing. Prometheus metrics,
          Grafana dashboards. Performance tuning, connection pooling, scaling
          strategies.
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
locale: en
---

