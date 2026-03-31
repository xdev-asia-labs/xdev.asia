---
id: 019d8b40-f100-7001-b007-rust000000001
title: 'Rust: Từ Cơ bản đến Nâng cao'
slug: rust-tu-co-ban-den-nang-cao
description: >-
  Khóa học Rust toàn diện từ cơ bản đến nâng cao, giúp bạn làm chủ ngôn ngữ
  lập trình an toàn và hiệu suất cao nhất. Bao gồm Ownership, Borrowing,
  Lifetimes, Traits, Async/Await, Actix-web/Axum, SQLx, gRPC, WebAssembly,
  Testing và triển khai Production. Cập nhật theo Rust 2024 edition với
  các best practices mới nhất 2026.
featured_image: uploads/2026/03/rust-banner-v2.png
level: beginner
duration_hours: 90
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
  - name: Rust
    slug: rust
  - name: Backend
    slug: backend
  - name: Systems Programming
    slug: systems-programming
  - name: Actix
    slug: actix
  - name: Axum
    slug: axum
  - name: Tokio
    slug: tokio
  - name: SQLx
    slug: sqlx
  - name: gRPC
    slug: grpc
  - name: WebAssembly
    slug: webassembly
  - name: Docker
    slug: docker
  - name: Testing
    slug: testing
  - name: Concurrency
    slug: concurrency
  - name: Ownership
    slug: ownership
  - name: PostgreSQL
    slug: postgresql
sections:
  - id: section-01
    title: 'Phần 1: Rust Fundamentals'
    description: 'Ownership, borrowing, lifetimes, types, control flow, error handling'
    sort_order: 1
    lessons:
      - id: 019d8b40-f101-7001-b007-rust000000101
        title: 'Bài 1: Giới thiệu Rust - Performance meets Safety'
        slug: bai-1-gioi-thieu-rust
        description: >-
          Tại sao Rust? Zero-cost abstractions, memory safety without GC.
          So sánh Rust vs Go vs C++ vs Zig. Cài đặt rustup, cargo, rust-analyzer.
          Hello World, cargo project structure.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-f102-7001-b007-rust000000102
        title: 'Bài 2: Variables, Types & Control Flow'
        slug: bai-2-variables-types-va-control-flow
        description: >-
          Immutability by default, shadowing. Scalar types, compound types
          (tuple, array). String vs &str. if/else, match, loops.
          Pattern matching deep dive.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-f103-7001-b007-rust000000103
        title: 'Bài 3: Ownership, Borrowing & Lifetimes'
        slug: bai-3-ownership-borrowing-va-lifetimes
        description: >-
          Ownership rules, move semantics, Copy trait. References, borrowing
          rules, mutable references. Lifetime annotations, lifetime elision,
          'static lifetime. Borrow checker.
        duration_minutes: 150
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-f104-7001-b007-rust000000104
        title: 'Bài 4: Structs, Enums & Pattern Matching'
        slug: bai-4-structs-enums-va-pattern-matching
        description: >-
          Structs, impl blocks, methods. Enums, Option<T>, Result<T, E>.
          Pattern matching với match, if let, while let. Destructuring.
          Builder pattern.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Phần 2: Advanced Rust'
    description: 'Traits, generics, closures, iterators, smart pointers, async'
    sort_order: 2
    lessons:
      - id: 019d8b40-f201-7001-b007-rust000000201
        title: 'Bài 5: Traits & Generics'
        slug: bai-5-traits-va-generics
        description: >-
          Trait definition, default implementations. Generic types, trait bounds.
          Associated types, supertraits. impl Trait, dyn Trait. Derive macros.
          Common traits (Display, Debug, Clone, From/Into).
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-f202-7001-b007-rust000000202
        title: 'Bài 6: Closures, Iterators & Collections'
        slug: bai-6-closures-iterators-va-collections
        description: >-
          Closures, Fn/FnMut/FnOnce traits. Iterator trait, iterator adapters
          (map, filter, fold). Vec, HashMap, HashSet, BTreeMap. Collecting,
          chaining, custom iterators.
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-f203-7001-b007-rust000000203
        title: 'Bài 7: Error Handling & Modules'
        slug: bai-7-error-handling-va-modules
        description: >-
          Result, Option, unwrap, expect. ? operator, error propagation.
          Custom error types, thiserror, anyhow. Module system, crate
          structure, pub visibility. Cargo workspace.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-f204-7001-b007-rust000000204
        title: 'Bài 8: Smart Pointers & Concurrency'
        slug: bai-8-smart-pointers-va-concurrency
        description: >-
          Box, Rc, Arc, RefCell, Mutex, RwLock. Send/Sync traits. std::thread,
          message passing (channels). Shared state concurrency. Rayon for
          data parallelism. Fearless concurrency.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Phần 3: Async Rust & Web Development'
    description: 'Tokio, async/await, Axum/Actix-web, REST API'
    sort_order: 3
    lessons:
      - id: 019d8b40-f301-7001-b007-rust000000301
        title: 'Bài 9: Async Rust & Tokio'
        slug: bai-9-async-rust-va-tokio
        description: >-
          Async/await, Future trait, Pin. Tokio runtime, spawn, JoinHandle.
          Tokio channels (mpsc, broadcast, watch). tokio::select!, tokio::sync.
          Async streams.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-f302-7001-b007-rust000000302
        title: 'Bài 10: Axum Framework & REST API'
        slug: bai-10-axum-framework-va-rest-api
        description: >-
          Axum setup, routing, handlers, extractors. State management,
          middleware (tower). Serde serialization, JSON responses. Error
          handling, custom errors. So sánh Axum vs Actix-web vs Rocket.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-f303-7001-b007-rust000000303
        title: 'Bài 11: SQLx & Database Integration'
        slug: bai-11-sqlx-va-database-integration
        description: >-
          SQLx async, compile-time query checking. Migrations, connection
          pooling. CRUD operations, transactions. Sea-ORM alternative.
          Repository pattern, clean architecture.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-f304-7001-b007-rust000000304
        title: 'Bài 12: Authentication & Authorization'
        slug: bai-12-authentication-va-authorization
        description: >-
          JWT với jsonwebtoken crate, argon2 password hashing. Middleware-based
          auth, extractors. RBAC, tower middleware. OAuth2 integration.
          Session management.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Phần 4: Advanced Backend'
    description: 'WebSockets, gRPC, message queues, caching, CLI tools'
    sort_order: 4
    lessons:
      - id: 019d8b40-f401-7001-b007-rust000000401
        title: 'Bài 13: WebSockets & Real-time'
        slug: bai-13-websockets-va-real-time
        description: >-
          tokio-tungstenite, axum WebSocket support. Connection manager,
          broadcasting, rooms pattern. Server-Sent Events.
          Real-time chat application.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-f402-7001-b007-rust000000402
        title: 'Bài 14: gRPC với Tonic'
        slug: bai-14-grpc-voi-tonic
        description: >-
          Protocol Buffers, prost code generation. Tonic gRPC framework,
          unary/streaming RPCs. Interceptors, TLS, load balancing.
          gRPC-web cho browser clients.
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-f403-7001-b007-rust000000403
        title: 'Bài 15: Message Queues & Background Jobs'
        slug: bai-15-message-queues-va-background-jobs
        description: >-
          RabbitMQ với lapin, Kafka với rdkafka. NATS messaging.
          Background job processing. Event-driven architecture patterns.
          Redis pub/sub.
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-f404-7001-b007-rust000000404
        title: 'Bài 16: Caching, CLI Tools & Macros'
        slug: bai-16-caching-cli-tools-va-macros
        description: >-
          Redis caching với deadpool-redis. Command-line tools với clap.
          Procedural macros, derive macros. Serde custom serialization.
          Configuration management.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Phần 5: WebAssembly & Systems'
    description: 'WASM, FFI, unsafe Rust, embedded, systems programming'
    sort_order: 5
    lessons:
      - id: 019d8b40-f501-7001-b007-rust000000501
        title: 'Bài 17: WebAssembly với Rust'
        slug: bai-17-webassembly-voi-rust
        description: >-
          wasm-pack, wasm-bindgen. Rust → WASM compilation. JavaScript
          interop, web-sys, js-sys. Performance-critical browser code.
          Leptos/Yew frontend frameworks.
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-f502-7001-b007-rust000000502
        title: 'Bài 18: FFI & Unsafe Rust'
        slug: bai-18-ffi-va-unsafe-rust
        description: >-
          Unsafe blocks, raw pointers, transmute. FFI (Foreign Function
          Interface), calling C from Rust. Building C-compatible libraries.
          PyO3 cho Python bindings. Safety invariants.
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 'Phần 6: Testing, CI/CD & Production'
    description: 'Testing, benchmarking, Docker, CI/CD, monitoring'
    sort_order: 6
    lessons:
      - id: 019d8b40-f601-7001-b007-rust000000601
        title: 'Bài 19: Testing & Benchmarking'
        slug: bai-19-testing-va-benchmarking
        description: >-
          Unit tests, integration tests, doc tests. rstest (fixtures, parametrize),
          mockall. API testing với reqwest. Criterion.rs benchmarking.
          Property-based testing, fuzzing. Code coverage.
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-f602-7001-b007-rust000000602
        title: 'Bài 20: Docker & CI/CD cho Rust'
        slug: bai-20-docker-va-cicd-cho-rust
        description: >-
          Multi-stage Docker builds (builder + scratch/distroless). cargo-chef
          cho caching dependencies. GitHub Actions CI/CD, cross-compilation.
          cargo-deny, cargo-audit. Clippy, rustfmt.
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8b40-f603-7001-b007-rust000000603
        title: 'Bài 21: Observability & Monitoring'
        slug: bai-21-observability-va-monitoring
        description: >-
          tracing crate, structured logging. OpenTelemetry integration,
          Prometheus metrics. Grafana dashboards. Health checks, graceful
          shutdown. tokio-console cho async debugging.
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8b40-f604-7001-b007-rust000000604
        title: 'Bài 22: Production Deployment & Performance Tuning'
        slug: bai-22-production-deployment-va-performance-tuning
        description: >-
          Release profile optimization, LTO, codegen-units. Memory allocators
          (jemalloc, mimalloc). Connection pooling, request batching.
          Scaling strategies, microservices with Rust.
        duration_minutes: 150
        is_free: true
        sort_order: 22
        video_url: null
---

Khóa học **Rust: Từ Cơ bản đến Nâng cao** giúp bạn làm chủ Rust — ngôn ngữ được yêu thích nhất trên Stack Overflow nhiều năm liền, kết hợp hiệu suất ngang C/C++ với memory safety không cần garbage collector.

## Bạn sẽ học được gì?

- **Rust Core**: Ownership, Borrowing, Lifetimes, Traits, Generics, Error Handling
- **Concurrency**: Threads, async/await, Tokio, channels, smart pointers
- **Web Development**: Axum, SQLx, JWT, gRPC (Tonic), WebSockets
- **Advanced**: WebAssembly, FFI, Unsafe Rust, Macros
- **Production**: Testing, Docker, CI/CD, Observability, Performance Tuning

## Yêu cầu

- Kiến thức lập trình cơ bản (C/C++, Go, hoặc ngôn ngữ khác)
- Hiểu biết về memory management là lợi thế
- Máy tính cài đặt Rust toolchain (rustup) và Docker
