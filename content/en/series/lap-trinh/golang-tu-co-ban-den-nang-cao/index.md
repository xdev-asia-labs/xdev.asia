---
id: 019d8b40-b100-7001-b003-golang0000001
title: 'Golang: From Basics to Advanced'
slug: golang-tu-co-ban-den-nang-cao
description: >-
  Comprehensive Golang course from basic to advanced, helping you master the Go
  language and build high-performance backends. Includes Go fundamentals,
  Goroutines, Channels, Gin/Fiber framework, GORM, gRPC, Microservices, Testing,
  Docker and Production deployment. Updated to Go 1.23+ with generics, iterators
  and the latest 2026 best practices.
featured_image: uploads/2026/03/golang-banner-v2.png
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
  - name: Golang
    slug: golang
  - name: Go
    slug: go
  - name: Backend
    slug: backend
  - name: rest-api
    slug: rest-api
  - name: Gin
    slug: gin
  - name: Fiber
    slug: fiber
  - name: GORM
    slug: gorm
  - name: gRPC
    slug: grpc
  - name: Microservices
    slug: microservices
  - name: Docker
    slug: docker
  - name: Testing
    slug: testing
  - name: PostgreSQL
    slug: postgresql
  - name: Redis
    slug: redis
  - name: Goroutines
    slug: goroutines
  - name: Concurrency
    slug: concurrency
sections:
  - id: section-01
    title: 'Part 1: Go Fundamentals'
    description: 'Go platform, syntax, types, control flow, functions, packages'
    sort_order: 1
    lessons:
      - id: 019d8b40-b101-7001-b003-golang0000101
        title: 'Lesson 1: Introducing Go - Cloud Native language'
        slug: bai-1-gioi-thieu-go-ngon-ngu-cua-cloud-native
        description: >-
          Why Go? Compare with Rust, Java, Python. History, design philosophy,
          Go ecosystem. Install, GOPATH, Go modules. Hello World and go
          toolchain.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-b102-7001-b003-golang0000102
        title: 'Lesson 2: Variables, Types & Control Flow'
        slug: bai-2-variables-types-va-control-flow
        description: >-
          Primitive types, composite types (array, slice, map, struct).
          Pointers, constants, iota. If/else, switch, for loops, range. Type
          assertions and type switches.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-b103-7001-b003-golang0000103
        title: 'Lesson 3: Functions, Interfaces & Error Handling'
        slug: bai-3-functions-interfaces-va-error-handling
        description: >-
          Functions, multiple return values, variadic functions. Interfaces,
          embedding, composition over inheritance. Error handling patterns,
          custom errors, errors.Is/As, panic/recover.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-b104-7001-b003-golang0000104
        title: 'Lesson 4: Generics, Packages & Modules'
        slug: bai-4-generics-packages-va-modules
        description: >-
          Go Generics (type parameters, constraints). Package organization,
          visibility rules, init functions. Go modules, versioning, dependency
          management, workspace mode.
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Part 2: Concurrency & Networking'
    description: 'Goroutines, Channels, Context, HTTP server, JSON handling'
    sort_order: 2
    lessons:
      - id: 019d8b40-b201-7001-b003-golang0000201
        title: 'Lesson 5: Goroutines & Channels'
        slug: bai-5-goroutines-va-channels
        description: >-
          Goroutines, WaitGroup, buffered/unbuffered channels. Select statement,
          channel directions, fan-in/fan-out patterns. Concurrency vs
          parallelism.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-b202-7001-b003-golang0000202
        title: 'Lesson 6: Context, Sync & Concurrency Patterns'
        slug: bai-6-context-sync-va-concurrency-patterns
        description: >-
          context package (WithCancel, WithTimeout, WithValue). sync.Mutex,
          RWMutex, sync.Once, sync.Pool. Worker pool, pipeline, rate limiter,
          semaphore patterns.
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-b203-7001-b003-golang0000203
        title: 'Lesson 7: HTTP Server & JSON Handling'
        slug: bai-7-http-server-va-json-handling
        description: >-
          net/http package, ServeMux (Go 1.22+), Handlers, Middleware pattern.
          encoding/json, struct tags, custom marshaling. HTTP client, timeouts,
          connection pooling.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-b204-7001-b003-golang0000204
        title: 'Lesson 8: Gin Framework & REST API'
        slug: bai-8-gin-framework-va-rest-api
        description: >-
          Gin framework setup, routing, middleware. Request binding, validation
          with go-playground/validator. Response handling, error management.
          Swagger docs with swaggo. Compare Gin vs Fiber vs Echo vs Chi.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Part 3: Database & Authentication'
    description: 'GORM, migrations, repository pattern, JWT, RBAC, security'
    sort_order: 3
    lessons:
      - id: 019d8b40-b301-7001-b003-golang0000301
        title: 'Lesson 9: GORM & Database Integration'
        slug: bai-9-gorm-va-database-integration
        description: >-
          GORM v2 ORM, models, associations (HasOne, HasMany, BelongsTo,
          Many2Many). CRUD operations, scopes, hooks. Connection pool tuning.
          Compare GORM vs sqlx vs sqlc vs Ent.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-b302-7001-b003-golang0000302
        title: 'Lesson 10: Migrations & Repository Pattern'
        slug: bai-10-migrations-va-repository-pattern
        description: >-
          golang-migrate, Atlas migrations. Repository pattern, Service layer,
          Dependency Injection with Wire/Fx. Clean Architecture project
          structure.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-b303-7001-b003-golang0000303
        title: 'Lesson 11: Authentication - JWT & OAuth2'
        slug: bai-11-authentication-jwt-va-oauth2
        description: >-
          JWT with golang-jwt, bcrypt password hashing. Access token, refresh
          token, token rotation. OAuth2 flows, social login with Google/GitHub.
          Session management.
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-b304-7001-b003-golang0000304
        title: 'Lesson 12: Authorization, Security & Middleware'
        slug: bai-12-authorization-security-va-middleware
        description: >-
          RBAC, Casbin authorization. CORS, rate limiting, security headers.
          Input validation, SQL injection prevention. Middleware chain, request
          logging, panic recovery.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Part 4: Advanced Features'
    description: 'WebSockets, gRPC, message queues, caching, file handling'
    sort_order: 4
    lessons:
      - id: 019d8b40-b401-7001-b003-golang0000401
        title: 'Lesson 13: WebSockets & Real-time'
        slug: bai-13-websockets-va-real-time
        description: >-
          gorilla/websocket, ngooyr/websocket. Connection manager, broadcasting,
          rooms pattern. Server-Sent Events, real-time notifications.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-b402-7001-b003-golang0000402
        title: 'Lesson 14: gRPC & Protocol Buffers'
        slug: bai-14-grpc-va-protocol-buffers
        description: >-
          Protocol Buffers, protoc compiler, code generation. gRPC unary, server
          streaming, client streaming, bidirectional streaming. gRPC-Gateway for
          REST compatibility. Interceptors.
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-b403-7001-b003-golang0000403
        title: 'Lesson 15: Message Queues & Event-Driven'
        slug: bai-15-message-queues-va-event-driven
        description: >-
          RabbitMQ with amqp091-go, Apache Kafka with confluent-kafka-go. NATS
          messaging. Event-driven architecture, CQRS patterns, Outbox pattern.
          Retry, dead letter queues.
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-b404-7001-b003-golang0000404
        title: 'Lesson 16: Caching, File Upload & Performance'
        slug: bai-16-caching-file-upload-va-performance
        description: >-
          Redis caching strategies, go-redis. File upload/download, streaming.
          prof profiling, benchmark testing, memory optimization. Connection
          pooling, request batching.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Part 5: Microservices, Testing & Production'
    description: 'Microservices, testing, Docker, CI/CD, monitoring, deployment'
    sort_order: 5
    lessons:
      - id: 019d8b40-b501-7001-b003-golang0000501
        title: 'Lesson 17: Microservices Architecture with Go'
        slug: bai-17-microservices-architecture-voi-go
        description: >-
          Microservices design patterns, service discovery, API gateway.
          Inter-service communication (gRPC, HTTP, messaging). Circuit breaker,
          retry, timeout patterns. go-kit vs go-micro.
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-b502-7001-b003-golang0000502
        title: 'Lesson 18: Testing in Go'
        slug: bai-18-testing-trong-go
        description: >-
          testing packages, table-driven tests, subtests. testimony assertions,
          mockery mocking. httptest for API testing. Integration tests with
          testcontainers-go. Benchmark tests, fuzzing.
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-b503-7001-b003-golang0000503
        title: 'Lesson 19: Docker, CI/CD & DevOps'
        slug: bai-19-docker-cicd-va-devops
        description: >-
          Docker multi-stage build for Go (scratch/distroless). Docker Compose,
          Kubernetes deployment. GitHub Actions CI/CD pipeline. Makefile,
          golangci-lint, pre-commit hooks.
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-b504-7001-b003-golang0000504
        title: 'Lesson 20: Production Deployment & Observability'
        slug: bai-20-production-deployment-va-observability
        description: >-
          Structured logging with slog/zerolog. OpenTelemetry tracing,
          Prometheus metrics, Grafana dashboards. Graceful shutdown, health
          checks. Scaling strategies, performance tuning.
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
locale: en
---

The course **Golang: From Basics to Advanced** is designed to help you master the Go language — a language designed by Google for cloud-native systems, microservices and high-performance applications.

## What will you learn?

- **Go Fundamentals**: Variables, types, functions, interfaces, generics, error handling
- **Concurrency**: Goroutines, channels, context, sync primitives, concurrency patterns
- **Web Development**: Gin framework, REST API, middleware, routing, validation
- **Database**: GORM, migrations, repository pattern, clean architecture
- **Authentication**: JWT, OAuth2, RBAC, security best practices
- **Advanced**: WebSockets, gRPC, message queues, caching, microservices
- **Production**: Testing, Docker, CI/CD, monitoring, observability

## Request

- Basic programming knowledge (know at least 1 language)
- Basic understanding of HTTP and REST API
- Computer with Go 1.23+ and Docker installed
