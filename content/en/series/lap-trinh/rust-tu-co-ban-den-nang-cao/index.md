---
id: 019d8b40-f100-7001-b007-rust000000001
title: 'Rust: From Basics to Advanced'
slug: rust-tu-co-ban-den-nang-cao
description: >-
  Comprehensive Rust course from basics to advanced, helping you master the
  safest and most performant programming language. Includes Ownership,
  Borrowing, Lifetimes, Traits, Async/Await, Actix-web/Axum, SQLx, gRPC,
  WebAssembly, Testing and Production deployment. Updated to Rust 2024 edition
  with the latest 2026 best practices.
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
  name: Programming
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
    title: 'Part 1: Rust Fundamentals'
    description: 'Ownership, borrowing, lifetimes, types, control flow, error handling'
    sort_order: 1
    lessons:
      - id: 019d8b40-f101-7001-b007-rust000000101
        title: 'Lesson 1: Introducing Rust - Performance meets Safety'
        slug: bai-1-gioi-thieu-rust
        description: >-
          Why Rust? Zero-cost abstractions, memory safety without GC. Compare
          Rust vs Go vs C++ vs Zig. Install rustup, cargo, rust-analyzer. Hello
          World, cargo project structure.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-f102-7001-b007-rust000000102
        title: 'Lesson 2: Variables, Types & Control Flow'
        slug: bai-2-variables-types-va-control-flow
        description: >-
          Immutability by default, shadowing. Scalar types, compound types
          (tuple, array). String vs &str. if/else, matches, loops. Pattern
          matching deep dive.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-f103-7001-b007-rust000000103
        title: 'Lesson 3: Ownership, Borrowing & Lifetimes'
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
        title: 'Lesson 4: Structures, Enums & Pattern Matching'
        slug: bai-4-structs-enums-va-pattern-matching
        description: >-
          Structures, impl blocks, methods. Enums, Option<T>, Result<T, E>.
          Pattern matching with match, if let, while let. Destructuring. Builder
          patterns.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Part 2: Advanced Rust'
    description: 'Traits, generics, closures, iterators, smart pointers, async'
    sort_order: 2
    lessons:
      - id: 019d8b40-f201-7001-b007-rust000000201
        title: 'Lesson 5: Traits & Generics'
        slug: bai-5-traits-va-generics
        description: >-
          Trait definition, default implementations. Generic types, trait
          bounds. Associated types, supertraits. impl Trait, dyn Trait. Derive
          macros. Common traits (Display, Debug, Clone, From/Into).
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-f202-7001-b007-rust000000202
        title: 'Lesson 6: Closures, Iterators & Collections'
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
        title: 'Lesson 7: Error Handling & Modules'
        slug: bai-7-error-handling-va-modules
        description: >-
          Result, Option, unwrap, expect. ? operator, error propagation. Custom
          error types, thiserror, anyhow. Module system, crate structure, pub
          visibility. Cargo workspace.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-f204-7001-b007-rust000000204
        title: 'Lesson 8: Smart Pointers & Concurrency'
        slug: bai-8-smart-pointers-va-concurrency
        description: >-
          Box, Rc, Arc, RefCell, Mutex, RwLock. Send/Sync traits. std::thread,
          message passing (channels). Shared state concurrency. Rayon for data
          parallelism. Fearless concurrency.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Part 3: Async Rust & Web Development'
    description: 'Tokio, async/await, Axum/Actix-web, REST API'
    sort_order: 3
    lessons:
      - id: 019d8b40-f301-7001-b007-rust000000301
        title: 'Lesson 9: Async Rust & Tokio'
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
        title: 'Lesson 10: Axum Framework & REST API'
        slug: bai-10-axum-framework-va-rest-api
        description: >-
          Axum setup, routing, handlers, extractors. State management,
          middleware (tower). Serialization, JSON responses. Error handling,
          custom errors. Compare Axum vs Actix-web vs Rocket.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-f303-7001-b007-rust000000303
        title: 'Lesson 11: SQLx & Database Integration'
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
        title: 'Lesson 12: Authentication & Authorization'
        slug: bai-12-authentication-va-authorization
        description: >-
          JWT with jsonwebtoken crate, argon2 password hashing. Middleware-based
          auth, extractors. RBAC, tower middleware. OAuth2 integration. Session
          management.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Part 4: Advanced Backend'
    description: 'WebSockets, gRPC, message queues, caching, CLI tools'
    sort_order: 4
    lessons:
      - id: 019d8b40-f401-7001-b007-rust000000401
        title: 'Lesson 13: WebSockets & Real-time'
        slug: bai-13-websockets-va-real-time
        description: >-
          tokio-tungstenite, axum WebSocket support. Connection manager,
          broadcasting, rooms pattern. Server-Sent Events. Real-time chat
          application.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-f402-7001-b007-rust000000402
        title: 'Lesson 14: gRPC with Tonic'
        slug: bai-14-grpc-voi-tonic
        description: >-
          Protocol Buffers, prost code generation. Tonic gRPC framework,
          unary/streaming RPCs. Interceptors, TLS, load balancing. gRPC-web for
          browser clients.
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-f403-7001-b007-rust000000403
        title: 'Lesson 15: Message Queues & Background Jobs'
        slug: bai-15-message-queues-va-background-jobs
        description: >-
          RabbitMQ with lapin, Kafka with rdkafka. NATS messaging. Background
          job processing. Event-driven architecture patterns. Redis pub/sub.
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-f404-7001-b007-rust000000404
        title: 'Lesson 16: Caching, CLI Tools & Macros'
        slug: bai-16-caching-cli-tools-va-macros
        description: >-
          Redis caching with deadpool-redis. Command-line tools with clap.
          Procedural macros, derive macros. Serde custom serialization.
          Configuration management.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Part 5: WebAssembly & Systems'
    description: 'WASM, FFI, unsafe Rust, embedded, systems programming'
    sort_order: 5
    lessons:
      - id: 019d8b40-f501-7001-b007-rust000000501
        title: 'Lesson 17: WebAssembly with Rust'
        slug: bai-17-webassembly-voi-rust
        description: >-
          wasm-pack, wasm-bindgen. Rust → WASM compilation. JavaScript interop,
          web-sys, js-sys. Performance-critical browser code. Leptos/Yew
          frontend frameworks.
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-f502-7001-b007-rust000000502
        title: 'Lesson 18: FFI & Unsafe Rust'
        slug: bai-18-ffi-va-unsafe-rust
        description: >-
          Unsafe blocks, raw pointers, transmute. FFI (Foreign Function
          Interface), calling C from Rust. Building C-compatible libraries. PyO3
          for Python bindings. Safety variables.
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 'Part 6: Testing, CI/CD & Production'
    description: 'Testing, benchmarking, Docker, CI/CD, monitoring'
    sort_order: 6
    lessons:
      - id: 019d8b40-f601-7001-b007-rust000000601
        title: 'Lesson 19: Testing & Benchmarking'
        slug: bai-19-testing-va-benchmarking
        description: >-
          Unit tests, integration tests, doc tests. rstest (fixtures,
          parametrize), mockall. API testing with reqwest. Criterion.rs
          benchmarking. Property-based testing, fuzzing. Code coverage.
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-f602-7001-b007-rust000000602
        title: 'Lesson 20: Docker & CI/CD for Rust'
        slug: bai-20-docker-va-cicd-cho-rust
        description: >-
          Multi-stage Docker builds (builder + scratch/distroless). cargo-chef
          for caching dependencies. GitHub Actions CI/CD, cross-compilation.
          cargo-deny, cargo-audit. Clippy, rustfmt.
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8b40-f603-7001-b007-rust000000603
        title: 'Lesson 21: Observability & Monitoring'
        slug: bai-21-observability-va-monitoring
        description: >-
          tracing crate, structured logging. OpenTelemetry integration,
          Prometheus metrics. Grafana dashboards. Health checks, graceful
          shutdown. tokio-console for async debugging.
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8b40-f604-7001-b007-rust000000604
        title: 'Lesson 22: Production Deployment & Performance Tuning'
        slug: bai-22-production-deployment-va-performance-tuning
        description: >-
          Release profile optimization, LTO, codegen-units. Memory allocators
          (jemalloc, mimalloc). Connection pooling, request batching. Scaling
          strategies, microservices with Rust.
        duration_minutes: 150
        is_free: true
        sort_order: 22
        video_url: null
locale: en
---

The course **Rust: From Basics to Advanced** helps you master Rust — the most popular language on Stack Overflow for many years, combining C/C++-level performance with memory safety without the need for a garbage collector.

## What will you learn?

- **Rust Core**: Ownership, Borrowing, Lifetimes, Traits, Generics, Error Handling
- **Concurrency**: Threads, async/await, Tokio, channels, smart pointers
- **Web Development**: Axum, SQLx, JWT, gRPC (Tonic), WebSockets
- **Advanced**: WebAssembly, FFI, Unsafe Rust, Macros
- **Production**: Testing, Docker, CI/CD, Observability, Performance Tuning

## Request

- Basic programming knowledge (C/C++, Go, or other languages)
- Understanding of memory management is an advantage
- Computer with Rust toolchain (rustup) and Docker installed
