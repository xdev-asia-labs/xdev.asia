---
id: 019d8b40-a100-7001-b001-nestjs000001
title: 'NestJS: Từ Cơ bản đến Nâng cao'
slug: nestjs-tu-co-ban-den-nang-cao
description: >-
  Khóa học NestJS toàn diện từ cơ bản đến nâng cao, giúp bạn làm chủ framework
  Node.js hiện đại nhất cho backend. Bao gồm TypeScript, Dependency Injection,
  Modules, Controllers, Providers, TypeORM, Prisma, Authentication, Authorization,
  Guards, Interceptors, Pipes, WebSockets, GraphQL, Microservices, Testing,
  Docker và triển khai Production. Cập nhật theo NestJS 11+ và các best practices
  mới nhất 2026.
featured_image: uploads/2026/03/nestjs-banner-v2.png
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
published_at: '2026-03-30T12:00:00.000000Z'
created_at: '2026-03-30T12:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-facb-72da-8191-e6d44b88fb3e
  name: Lập Trình
  slug: lap-trinh
tags:
  - name: NestJS
    slug: nestjs
  - name: Node.js
    slug: nodejs
  - name: TypeScript
    slug: typescript
  - name: Backend
    slug: backend
  - name: rest-api
    slug: rest-api
  - name: Microservices
    slug: microservices
  - name: GraphQL
    slug: graphql
  - name: WebSocket
    slug: websocket
  - name: TypeORM
    slug: typeorm
  - name: Prisma
    slug: prisma
  - name: Docker
    slug: docker
  - name: Testing
    slug: testing
  - name: JWT
    slug: jwt
  - name: RBAC
    slug: rbac
sections:
  - id: section-01
    title: 'Phần 1: Nền tảng NestJS'
    description: 'Làm quen với NestJS, kiến trúc, TypeScript và xây dựng REST API đầu tiên'
    sort_order: 1
    lessons:
      - id: 019d8b40-a101-7001-b001-nestjs000101
        title: 'Bài 1: Giới thiệu NestJS - Tại sao chọn NestJS?'
        slug: bai-1-gioi-thieu-nestjs-tai-sao-chon-nestjs
        description: >-
          Tìm hiểu NestJS là gì, so sánh với Express, Fastify, Koa. Kiến trúc
          Module-based, Dependency Injection, TypeScript-first. Hệ sinh thái và
          use cases thực tế.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-a102-7001-b001-nestjs000102
        title: 'Bài 2: TypeScript Essentials cho NestJS'
        slug: bai-2-typescript-essentials-cho-nestjs
        description: >-
          Ôn tập TypeScript cần thiết cho NestJS: Decorators, Generics, Interfaces,
          Enums, Type Guards, Utility Types. Cấu hình tsconfig.json cho NestJS project.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-a103-7001-b001-nestjs000103
        title: 'Bài 3: Cài đặt và Khởi tạo NestJS Project'
        slug: bai-3-cai-dat-va-khoi-tao-nestjs-project
        description: >-
          Cài đặt NestJS CLI, khởi tạo project, cấu trúc thư mục, hiểu các file
          quan trọng. Chạy development server và viết API endpoint đầu tiên.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-a104-7001-b001-nestjs000104
        title: 'Bài 4: Controllers và Routing trong NestJS'
        slug: bai-4-controllers-va-routing-trong-nestjs
        description: >-
          Hiểu Controllers, Request handling, Route parameters, Query strings,
          Request body, Headers. HTTP methods, status codes, redirects và
          sub-domain routing.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Phần 2: Providers, Dependency Injection & Data Layer'
    description: 'Services, Dependency Injection, kết nối Database với TypeORM/Prisma, Validation'
    sort_order: 2
    lessons:
      - id: 019d8b40-a201-7001-b001-nestjs000201
        title: 'Bài 5: Providers và Dependency Injection'
        slug: bai-5-providers-va-dependency-injection
        description: >-
          Hiểu sâu Providers, Services, Dependency Injection container. Custom
          providers, useClass, useValue, useFactory, useExisting. Injection scopes.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-a202-7001-b001-nestjs000202
        title: 'Bài 6: Modules - Tổ chức Code theo Feature'
        slug: bai-6-modules-to-chuc-code-theo-feature
        description: >-
          Module system trong NestJS, Feature modules, Shared modules, Global
          modules, Dynamic modules. Lazy loading modules và circular dependency.
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-a203-7001-b001-nestjs000203
        title: 'Bài 7: TypeORM và Prisma - Kết nối Database'
        slug: bai-7-typeorm-va-prisma-ket-noi-database
        description: >-
          Kết nối PostgreSQL/MySQL với TypeORM và Prisma. Entities, Repositories,
          Relations, Migrations, Seeding. So sánh TypeORM vs Prisma và khi nào
          dùng cái nào.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-a204-7001-b001-nestjs000204
        title: 'Bài 8: Validation, Pipes và Exception Filters'
        slug: bai-8-validation-pipes-va-exception-filters
        description: >-
          class-validator, class-transformer, ValidationPipe, Custom Pipes.
          Built-in Exception Filters, Custom Exception Filters, HTTP Exceptions
          và error handling best practices.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Phần 3: Authentication & Security'
    description: 'JWT, Passport, Guards, RBAC, Rate Limiting, CORS, Helmet'
    sort_order: 3
    lessons:
      - id: 019d8b40-a301-7001-b001-nestjs000301
        title: 'Bài 9: Authentication với Passport và JWT'
        slug: bai-9-authentication-voi-passport-va-jwt
        description: >-
          Triển khai Authentication với @nestjs/passport, Local strategy, JWT
          strategy. Access token, Refresh token, Token rotation. Bcrypt password
          hashing.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-a302-7001-b001-nestjs000302
        title: 'Bài 10: Guards và Authorization - RBAC'
        slug: bai-10-guards-va-authorization-rbac
        description: >-
          Guards trong NestJS, AuthGuard, RolesGuard. Role-Based Access Control
          (RBAC), Permission-based authorization. Custom decorators @Roles(),
          @Public(). CASL integration.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-a303-7001-b001-nestjs000303
        title: 'Bài 11: Security Best Practices'
        slug: bai-11-security-best-practices
        description: >-
          Helmet, CORS configuration, Rate Limiting với @nestjs/throttler,
          CSRF protection, Input sanitization. Security headers, HTTPS,
          Environment variables với @nestjs/config.
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-a304-7001-b001-nestjs000304
        title: 'Bài 12: Session, Cookies và OAuth2'
        slug: bai-12-session-cookies-va-oauth2
        description: >-
          Session management, Cookie-based auth, OAuth2 với Google/GitHub.
          Social login integration, Account linking. OpenID Connect basics.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Phần 4: Advanced Features'
    description: 'Interceptors, Middleware, WebSockets, GraphQL, File Upload, Caching, Task Scheduling'
    sort_order: 4
    lessons:
      - id: 019d8b40-a401-7001-b001-nestjs000401
        title: 'Bài 13: Interceptors, Middleware và Lifecycle'
        slug: bai-13-interceptors-middleware-va-lifecycle
        description: >-
          Middleware, Interceptors, Request lifecycle. Logging interceptor,
          Transform interceptor, Cache interceptor, Timeout interceptor.
          Execution context và reflection.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-a402-7001-b001-nestjs000402
        title: 'Bài 14: WebSockets và Real-time Communication'
        slug: bai-14-websockets-va-real-time-communication
        description: >-
          @nestjs/websockets với Socket.IO, WebSocket Gateways, Rooms, Namespaces.
          Real-time chat, notifications. Server-Sent Events (SSE) alternative.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-a403-7001-b001-nestjs000403
        title: 'Bài 15: GraphQL với NestJS'
        slug: bai-15-graphql-voi-nestjs
        description: >-
          @nestjs/graphql với Apollo Server. Schema-first vs Code-first approach.
          Resolvers, Queries, Mutations, Subscriptions. DataLoader cho N+1 problem.
          GraphQL Playground và Federation basics.
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-a404-7001-b001-nestjs000404
        title: 'Bài 16: File Upload, Caching và Task Scheduling'
        slug: bai-16-file-upload-caching-va-task-scheduling
        description: >-
          File upload với Multer, streaming. Caching với @nestjs/cache-manager
          và Redis. Task scheduling với @nestjs/schedule, Cron jobs, Intervals,
          Timeouts. Queues với BullMQ.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Phần 5: Microservices, Testing & Production'
    description: 'NestJS Microservices, Testing, Docker, CI/CD và triển khai Production'
    sort_order: 5
    lessons:
      - id: 019d8b40-a501-7001-b001-nestjs000501
        title: 'Bài 17: NestJS Microservices'
        slug: bai-17-nestjs-microservices
        description: >-
          @nestjs/microservices, Transport layers (TCP, Redis, NATS, RabbitMQ, Kafka,
          gRPC). Message patterns, Event-based communication. Hybrid application.
          Service discovery và load balancing.
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-a502-7001-b001-nestjs000502
        title: 'Bài 18: Testing trong NestJS'
        slug: bai-18-testing-trong-nestjs
        description: >-
          Unit testing với Jest, Testing module. Integration testing, E2E testing
          với Supertest. Mocking providers, Test database. Code coverage và
          testing best practices.
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-a503-7001-b001-nestjs000503
        title: 'Bài 19: Dockerize và CI/CD cho NestJS'
        slug: bai-19-dockerize-va-cicd-cho-nestjs
        description: >-
          Dockerfile multi-stage build cho NestJS, Docker Compose với PostgreSQL
          và Redis. GitHub Actions CI/CD pipeline. Health checks, graceful shutdown.
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-a504-7001-b001-nestjs000504
        title: 'Bài 20: Production Deployment và Monitoring'
        slug: bai-20-production-deployment-va-monitoring
        description: >-
          Deploy NestJS lên VPS/Cloud. PM2, Nginx reverse proxy. Logging với
          Winston/Pino, OpenTelemetry tracing. Prometheus metrics, Grafana
          dashboards. Performance optimization và scaling strategies.
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
reviews: []
quizzes: []
---
<p><strong>Yêu cầu kiến thức:</strong></p>
<ul>
<li>JavaScript/TypeScript cơ bản (ES6+, async/await, Promises)</li>
<li>Node.js cơ bản (npm, modules, event loop)</li>
<li>Hiểu biết về HTTP và REST API</li>
<li>SQL cơ bản (SELECT, INSERT, UPDATE, DELETE, JOIN)</li>
<li>Git cơ bản</li>
</ul>
<p><strong>Bạn sẽ học được gì?</strong></p>
<ul>
<li>Xây dựng REST API chuyên nghiệp với NestJS và TypeScript</li>
<li>Hiểu sâu Dependency Injection, Modules, Providers pattern</li>
<li>Kết nối Database với TypeORM và Prisma ORM</li>
<li>Triển khai Authentication/Authorization với JWT, Passport, RBAC</li>
<li>Real-time communication với WebSockets</li>
<li>Xây dựng GraphQL API</li>
<li>Kiến trúc Microservices với NestJS</li>
<li>Testing: Unit test, Integration test, E2E test</li>
<li>Docker, CI/CD và triển khai Production</li>
</ul>
