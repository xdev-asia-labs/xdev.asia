---
id: 019d8b40-b100-7001-b003-golang0000001
title: 'Golang: Từ Cơ bản đến Nâng cao'
slug: golang-tu-co-ban-den-nang-cao
description: >-
  Khóa học Golang toàn diện từ cơ bản đến nâng cao, giúp bạn làm chủ ngôn ngữ
  Go và xây dựng backend hiệu suất cao. Bao gồm Go fundamentals, Goroutines,
  Channels, Gin/Fiber framework, GORM, gRPC, Microservices, Testing, Docker
  và triển khai Production. Cập nhật theo Go 1.23+ với generics, iterators
  và các best practices mới nhất 2026.
featured_image: uploads/2026/03/golang-series-banner-2026.png
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
    title: 'Phần 1: Go Fundamentals'
    description: 'Nền tảng Go, syntax, types, control flow, functions, packages'
    sort_order: 1
    lessons:
      - id: 019d8b40-b101-7001-b003-golang0000101
        title: 'Bài 1: Giới thiệu Go - Ngôn ngữ của Cloud Native'
        slug: bai-1-gioi-thieu-go-ngon-ngu-cua-cloud-native
        description: >-
          Tại sao Go? So sánh với Rust, Java, Python. Lịch sử, triết lý thiết kế,
          hệ sinh thái Go. Cài đặt, GOPATH, Go modules. Hello World và go toolchain.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-b102-7001-b003-golang0000102
        title: 'Bài 2: Variables, Types & Control Flow'
        slug: bai-2-variables-types-va-control-flow
        description: >-
          Primitive types, composite types (array, slice, map, struct). Pointers,
          constants, iota. If/else, switch, for loops, range. Type assertions
          và type switches.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-b103-7001-b003-golang0000103
        title: 'Bài 3: Functions, Interfaces & Error Handling'
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
        title: 'Bài 4: Generics, Packages & Modules'
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
    title: 'Phần 2: Concurrency & Networking'
    description: 'Goroutines, Channels, Context, HTTP server, JSON handling'
    sort_order: 2
    lessons:
      - id: 019d8b40-b201-7001-b003-golang0000201
        title: 'Bài 5: Goroutines & Channels'
        slug: bai-5-goroutines-va-channels
        description: >-
          Goroutines, WaitGroup, buffered/unbuffered channels. Select statement,
          channel directions, fan-in/fan-out patterns. Concurrency vs parallelism.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-b202-7001-b003-golang0000202
        title: 'Bài 6: Context, Sync & Concurrency Patterns'
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
        title: 'Bài 7: HTTP Server & JSON Handling'
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
        title: 'Bài 8: Gin Framework & REST API'
        slug: bai-8-gin-framework-va-rest-api
        description: >-
          Gin framework setup, routing, middleware. Request binding, validation
          với go-playground/validator. Response handling, error management.
          Swagger docs với swaggo. So sánh Gin vs Fiber vs Echo vs Chi.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Phần 3: Database & Authentication'
    description: 'GORM, migrations, repository pattern, JWT, RBAC, security'
    sort_order: 3
    lessons:
      - id: 019d8b40-b301-7001-b003-golang0000301
        title: 'Bài 9: GORM & Database Integration'
        slug: bai-9-gorm-va-database-integration
        description: >-
          GORM v2 ORM, models, associations (HasOne, HasMany, BelongsTo,
          Many2Many). CRUD operations, scopes, hooks. Connection pool tuning.
          So sánh GORM vs sqlx vs sqlc vs Ent.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-b302-7001-b003-golang0000302
        title: 'Bài 10: Migrations & Repository Pattern'
        slug: bai-10-migrations-va-repository-pattern
        description: >-
          golang-migrate, Atlas migrations. Repository pattern, Service layer,
          Dependency Injection với Wire/Fx. Clean Architecture project structure.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-b303-7001-b003-golang0000303
        title: 'Bài 11: Authentication - JWT & OAuth2'
        slug: bai-11-authentication-jwt-va-oauth2
        description: >-
          JWT với golang-jwt, bcrypt password hashing. Access token, refresh token,
          token rotation. OAuth2 flows, social login với Google/GitHub.
          Session management.
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-b304-7001-b003-golang0000304
        title: 'Bài 12: Authorization, Security & Middleware'
        slug: bai-12-authorization-security-va-middleware
        description: >-
          RBAC, Casbin authorization. CORS, rate limiting, security headers.
          Input validation, SQL injection prevention. Middleware chain,
          request logging, panic recovery.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Phần 4: Advanced Features'
    description: 'WebSockets, gRPC, message queues, caching, file handling'
    sort_order: 4
    lessons:
      - id: 019d8b40-b401-7001-b003-golang0000401
        title: 'Bài 13: WebSockets & Real-time'
        slug: bai-13-websockets-va-real-time
        description: >-
          gorilla/websocket, nhooyr/websocket. Connection manager, broadcasting,
          rooms pattern. Server-Sent Events, real-time notifications.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-b402-7001-b003-golang0000402
        title: 'Bài 14: gRPC & Protocol Buffers'
        slug: bai-14-grpc-va-protocol-buffers
        description: >-
          Protocol Buffers, protoc compiler, code generation. gRPC unary,
          server streaming, client streaming, bidirectional streaming.
          gRPC-Gateway cho REST compatibility. Interceptors.
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-b403-7001-b003-golang0000403
        title: 'Bài 15: Message Queues & Event-Driven'
        slug: bai-15-message-queues-va-event-driven
        description: >-
          RabbitMQ với amqp091-go, Apache Kafka với confluent-kafka-go.
          NATS messaging. Event-driven architecture, CQRS patterns,
          Outbox pattern. Retry, dead letter queues.
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-b404-7001-b003-golang0000404
        title: 'Bài 16: Caching, File Upload & Performance'
        slug: bai-16-caching-file-upload-va-performance
        description: >-
          Redis caching strategies, go-redis. File upload/download, streaming.
          pprof profiling, benchmark testing, memory optimization.
          Connection pooling, request batching.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Phần 5: Microservices, Testing & Production'
    description: 'Microservices, testing, Docker, CI/CD, monitoring, deployment'
    sort_order: 5
    lessons:
      - id: 019d8b40-b501-7001-b003-golang0000501
        title: 'Bài 17: Microservices Architecture với Go'
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
        title: 'Bài 18: Testing trong Go'
        slug: bai-18-testing-trong-go
        description: >-
          testing package, table-driven tests, subtests. testify assertions,
          mockery mocking. httptest cho API testing. Integration tests với
          testcontainers-go. Benchmark tests, fuzzing.
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-b503-7001-b003-golang0000503
        title: 'Bài 19: Docker, CI/CD & DevOps'
        slug: bai-19-docker-cicd-va-devops
        description: >-
          Docker multi-stage build cho Go (scratch/distroless). Docker Compose,
          Kubernetes deployment. GitHub Actions CI/CD pipeline. Makefile,
          golangci-lint, pre-commit hooks.
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-b504-7001-b003-golang0000504
        title: 'Bài 20: Production Deployment & Observability'
        slug: bai-20-production-deployment-va-observability
        description: >-
          Structured logging với slog/zerolog. OpenTelemetry tracing, Prometheus
          metrics, Grafana dashboards. Graceful shutdown, health checks.
          Scaling strategies, performance tuning.
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
---

Khóa học **Golang: Từ Cơ bản đến Nâng cao** được thiết kế giúp bạn làm chủ ngôn ngữ Go — ngôn ngữ được thiết kế bởi Google cho hệ thống cloud-native, microservices và các ứng dụng hiệu suất cao.

## Bạn sẽ học được gì?

- **Go Fundamentals**: Variables, types, functions, interfaces, generics, error handling
- **Concurrency**: Goroutines, channels, context, sync primitives, concurrency patterns
- **Web Development**: Gin framework, REST API, middleware, routing, validation
- **Database**: GORM, migrations, repository pattern, clean architecture
- **Authentication**: JWT, OAuth2, RBAC, security best practices
- **Advanced**: WebSockets, gRPC, message queues, caching, microservices
- **Production**: Testing, Docker, CI/CD, monitoring, observability

## Yêu cầu

- Kiến thức lập trình cơ bản (biết ít nhất 1 ngôn ngữ)
- Hiểu biết cơ bản về HTTP và REST API
- Máy tính cài đặt Go 1.23+ và Docker
