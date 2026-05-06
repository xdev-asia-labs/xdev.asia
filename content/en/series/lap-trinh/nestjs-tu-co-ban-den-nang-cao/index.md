---
id: 019d8b40-a100-7001-b001-nestjs000001
title: 'NestJS: From Basics to Advanced'
slug: nestjs-tu-co-ban-den-nang-cao
description: >-
  The NestJS course is comprehensive from basic to advanced, helping you master
  the most modern Node.js framework for the backend. Includes TypeScript,
  Dependency Injection, Modules, Controllers, Providers, TypeORM, Prisma,
  Authentication, Authorization, Guards, Interceptors, Pipes, WebSockets,
  GraphQL, Microservices, Testing, Docker and Production deployment. Updated
  according to NestJS 11+ and the latest 2026 best practices.
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
  name: Programming
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
    title: 'Part 1: NestJS Platform'
    description: >-
      Get familiar with NestJS, architecture, TypeScript, and build your first
      REST API
    sort_order: 1
    lessons:
      - id: 019d8b40-a101-7001-b001-nestjs000101
        title: 'Lesson 1: Introducing NestJS - Why choose NestJS?'
        slug: bai-1-gioi-thieu-nestjs-tai-sao-chon-nestjs
        description: >-
          Find out what NestJS is, compare with Express, Fastify, Koa.
          Module-based architecture, Dependency Injection, TypeScript-first.
          Ecosystem and practical use cases.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-a102-7001-b001-nestjs000102
        title: 'Lesson 2: TypeScript Essentials for NestJS'
        slug: bai-2-typescript-essentials-cho-nestjs
        description: >-
          Review essential TypeScript for NestJS: Decorators, Generics,
          Interfaces, Enums, Type Guards, Utility Types. Configure tsconfig.json
          for NestJS project.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-a103-7001-b001-nestjs000103
        title: 'Lesson 3: Install and Initialize NestJS Project'
        slug: bai-3-cai-dat-va-khoi-tao-nestjs-project
        description: >-
          Install NestJS CLI, create project, folder structure, understand
          important files. Run the development server and write the first API
          endpoint.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-a104-7001-b001-nestjs000104
        title: 'Lesson 4: Controllers and Routing in NestJS'
        slug: bai-4-controllers-va-routing-trong-nestjs
        description: >-
          Understand Controllers, Request handling, Route parameters, Query
          strings, Request body, Headers. HTTP methods, status codes, redirects
          and sub-domain routing.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Part 2: Providers, Dependency Injection & Data Layer'
    description: >-
      Services, Dependency Injection, Database connection with TypeORM/Prisma,
      Validation
    sort_order: 2
    lessons:
      - id: 019d8b40-a201-7001-b001-nestjs000201
        title: 'Lesson 5: Providers and Dependency Injection'
        slug: bai-5-providers-va-dependency-injection
        description: >-
          Deep understanding of Providers, Services, Dependency Injection
          containers. Custom providers, useClass, useValue, useFactory,
          useExisting. Injection scopes.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-a202-7001-b001-nestjs000202
        title: 'Lesson 6: Modules - Organize Code by Feature'
        slug: bai-6-modules-to-chuc-code-theo-feature
        description: >-
          Module system in NestJS, Feature modules, Shared modules, Global
          modules, Dynamic modules. Lazy loading modules and circular
          dependencies.
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-a203-7001-b001-nestjs000203
        title: 'Lesson 7: TypeORM and Prisma - Database connection'
        slug: bai-7-typeorm-va-prisma-ket-noi-database
        description: >-
          Connect PostgreSQL/MySQL with TypeORM and Prisma. Entities,
          Repositories, Relations, Migrations, Seeding. Compare TypeORM vs
          Prisma and when to use which one.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-a204-7001-b001-nestjs000204
        title: 'Lesson 8: Validation, Pipes and Exception Filters'
        slug: bai-8-validation-pipes-va-exception-filters
        description: >-
          class-validator, class-transformer, ValidationPipe, Custom Pipes.
          Built-in Exception Filters, Custom Exception Filters, HTTP Exceptions
          and error handling best practices.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Part 3: Authentication & Security'
    description: 'JWT, Passport, Guards, RBAC, Rate Limiting, CORS, Helmet'
    sort_order: 3
    lessons:
      - id: 019d8b40-a301-7001-b001-nestjs000301
        title: 'Lesson 9: Authentication with Passport and JWT'
        slug: bai-9-authentication-voi-passport-va-jwt
        description: >-
          Implement Authentication with @nestjs/passport, Local strategy, JWT
          strategy. Access token, Refresh token, Token rotation. Bcrypt password
          hashing.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-a302-7001-b001-nestjs000302
        title: 'Lesson 10: Guards and Authorization - RBAC'
        slug: bai-10-guards-va-authorization-rbac
        description: >-
          Guards in NestJS, AuthGuard, RolesGuard. Role-Based Access Control
          (RBAC), Permission-based authorization. Custom decorators @Roles(),
          @Public(). CASL integration.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-a303-7001-b001-nestjs000303
        title: 'Lesson 11: Security Best Practices'
        slug: bai-11-security-best-practices
        description: >-
          Helmet, CORS configuration, Rate Limiting with @nestjs/throttler, CSRF
          protection, Input sanitization. Security headers, HTTPS, Environment
          variables with @nestjs/config.
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-a304-7001-b001-nestjs000304
        title: 'Lesson 12: Session, Cookies and OAuth2'
        slug: bai-12-session-cookies-va-oauth2
        description: >-
          Session management, Cookie-based auth, OAuth2 with Google/GitHub.
          Social login integration, Account linking. OpenID Connect basics.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Part 4: Advanced Features'
    description: >-
      Interceptors, Middleware, WebSockets, GraphQL, File Upload, Caching, Task
      Scheduling
    sort_order: 4
    lessons:
      - id: 019d8b40-a401-7001-b001-nestjs000401
        title: 'Lesson 13: Interceptors, Middleware and Lifecycle'
        slug: bai-13-interceptors-middleware-va-lifecycle
        description: >-
          Middleware, Interceptors, Request lifecycle. Logging interceptor,
          Transform interceptor, Cache interceptor, Timeout interceptor.
          Execution context and reflection.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-a402-7001-b001-nestjs000402
        title: 'Lesson 14: WebSockets and Real-time Communication'
        slug: bai-14-websockets-va-real-time-communication
        description: >-
          @nestjs/websockets with Socket.IO, WebSocket Gateways, Rooms,
          Namespaces. Real-time chat, notifications. Server-Sent Events (SSE)
          alternative.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-a403-7001-b001-nestjs000403
        title: 'Lesson 15: GraphQL with NestJS'
        slug: bai-15-graphql-voi-nestjs
        description: >-
          @nestjs/graphql with Apollo Server. Schema-first vs Code-first
          approach. Resolvers, Queries, Mutations, Subscriptions. DataLoader for
          N+1 problem. GraphQL Playground and Federation basics.
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-a404-7001-b001-nestjs000404
        title: 'Lesson 16: File Upload, Caching and Task Scheduling'
        slug: bai-16-file-upload-caching-va-task-scheduling
        description: >-
          File upload with Multer, streaming. Caching with @nestjs/cache-manager
          and Redis. Task scheduling with @nestjs/schedule, Cron jobs,
          Intervals, Timeouts. Queues with BullMQ.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Part 5: Microservices, Testing & Production'
    description: 'NestJS Microservices, Testing, Docker, CI/CD and Production deployment'
    sort_order: 5
    lessons:
      - id: 019d8b40-a501-7001-b001-nestjs000501
        title: 'Lesson 17: NestJS Microservices'
        slug: bai-17-nestjs-microservices
        description: >-
          @nestjs/microservices, Transport layers (TCP, Redis, NATS, RabbitMQ,
          Kafka, gRPC). Message patterns, Event-based communication. Hybrid
          applications. Service discovery and load balancing.
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-a502-7001-b001-nestjs000502
        title: 'Lesson 18: Testing in NestJS'
        slug: bai-18-testing-trong-nestjs
        description: >-
          Unit testing with Jest, Testing module. Integration testing, E2E
          testing with Supertest. Mocking providers, Test database. Code
          coverage and testing best practices.
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-a503-7001-b001-nestjs000503
        title: 'Lesson 19: Dockerize and CI/CD for NestJS'
        slug: bai-19-dockerize-va-cicd-cho-nestjs
        description: >-
          Dockerfile multi-stage build for NestJS, Docker Compose with
          PostgreSQL and Redis. GitHub Actions CI/CD pipeline. Health checks,
          graceful shutdown.
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-a504-7001-b001-nestjs000504
        title: 'Lesson 20: Production Deployment and Monitoring'
        slug: bai-20-production-deployment-va-monitoring
        description: >-
          Deploy NestJS to VPS/Cloud. PM2, Nginx reverse proxy. Logging with
          Winston/Pino, OpenTelemetry tracing. Prometheus metrics, Grafana
          dashboards. Performance optimization and scaling strategies.
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
reviews: []
quizzes: []
locale: en
---
<p><strong>Knowledge requirements:</strong></p>
<ul>
<li>Basic JavaScript/TypeScript (ES6+, async/await, Promises)</li>
<li>Basic Node.js (npm, modules, event loop)</li>
<li>Understanding of HTTP and REST APIs</li>
<li>Basic SQL (SELECT, INSERT, UPDATE, DELETE, JOIN)</li>
<li>Basic Git</li>
</ul>
<p><strong>What will you learn?</strong></p>
<ul>
<li>Build professional REST APIs with NestJS and TypeScript</li>
<li>Deep understanding of Dependency Injection, Modules, Providers pattern</li>
<li>Connect Database with TypeORM and Prisma ORM</li>
<li>Implement Authentication/Authorization with JWT, Passport, RBAC</li>
<li>Real-time communication with WebSockets</li>
<li>Build GraphQL API</li>
<li>Microservices Architecture with NestJS</li>
<li>Testing: Unit test, Integration test, E2E test</li>
<li>Docker, CI/CD and Production deployment</li>
</ul>
