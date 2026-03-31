---
id: 019d8b40-g100-7001-b008-nodejs0000001
title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
slug: nodejs-core-tu-co-ban-den-nang-cao
description: >-
  Khóa học Node.js Core toàn diện từ cơ bản đến nâng cao, giúp bạn hiểu sâu
  Node.js runtime không phụ thuộc framework. Bao gồm Event Loop, Streams,
  Worker Threads, Cluster, HTTP/2, Crypto, File System, Child Processes,
  Native Modules, Performance Profiling. Cập nhật theo Node.js 22 LTS với
  các best practices mới nhất 2026.
featured_image: uploads/2026/03/nodejs-banner-v2.png
level: beginner
duration_hours: 75
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
  - name: Node.js
    slug: nodejs
  - name: JavaScript
    slug: javascript
  - name: TypeScript
    slug: typescript
  - name: Backend
    slug: backend
  - name: Event Loop
    slug: event-loop
  - name: Streams
    slug: streams
  - name: Worker Threads
    slug: worker-threads
  - name: HTTP
    slug: http
  - name: Cluster
    slug: cluster
  - name: Performance
    slug: performance
  - name: Testing
    slug: testing
  - name: Docker
    slug: docker
  - name: V8 Engine
    slug: v8-engine
sections:
  - id: section-01
    title: 'Phần 1: Node.js Internals'
    description: 'V8 Engine, Event Loop, libuv, module system, async patterns'
    sort_order: 1
    lessons:
      - id: 019d8b40-g101-7001-b008-nodejs0000101
        title: 'Bài 1: Node.js Architecture Deep Dive'
        slug: bai-1-nodejs-architecture-deep-dive
        description: >-
          V8 Engine, libuv, C++ bindings. Single-threaded event loop model.
          Node.js vs Deno vs Bun. Lịch sử phát triển, use cases.
          node --inspect, V8 flags.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-g102-7001-b008-nodejs0000102
        title: 'Bài 2: Event Loop & Async Patterns'
        slug: bai-2-event-loop-va-async-patterns
        description: >-
          Event Loop phases (timers, pending, poll, check, close). Microtasks
          vs macrotasks. process.nextTick vs queueMicrotask vs setImmediate.
          Callbacks, Promises, async/await. Promise.allSettled, Promise.any.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-g103-7001-b008-nodejs0000103
        title: 'Bài 3: Module System & Package Management'
        slug: bai-3-module-system-va-package-management
        description: >-
          CommonJS vs ES Modules, module resolution algorithm. Package.json
          exports field, conditional exports. npm, pnpm workspace. Node.js
          built-in test runner, permission model.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-g104-7001-b008-nodejs0000104
        title: 'Bài 4: TypeScript & Modern JavaScript trong Node.js'
        slug: bai-4-typescript-va-modern-javascript
        description: >-
          TypeScript setup cho Node.js, tsx/ts-node. Type-safe configuration,
          path aliases. ESBuild/SWC compilation. Node.js type stripping
          (--experimental-strip-types). Decorators, metadata.
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Phần 2: Core Modules Deep Dive'
    description: 'File System, Streams, HTTP, Crypto, OS, Process'
    sort_order: 2
    lessons:
      - id: 019d8b40-g201-7001-b008-nodejs0000201
        title: 'Bài 5: File System & Path'
        slug: bai-5-file-system-va-path
        description: >-
          fs/promises, fs.createReadStream/WriteStream. File watching
          (fs.watch, chokidar). Path manipulation, __dirname, import.meta.url.
          Temporary files, atomic writes. Glob patterns.
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-g202-7001-b008-nodejs0000202
        title: 'Bài 6: Streams & Buffers'
        slug: bai-6-streams-va-buffers
        description: >-
          Readable, Writable, Transform, Duplex streams. Backpressure,
          pipeline(), stream.compose(). Buffer API, ArrayBuffer, TypedArrays.
          Stream-based file processing, CSV/JSON parsing.
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-g203-7001-b008-nodejs0000203
        title: 'Bài 7: HTTP/HTTPS & HTTP/2'
        slug: bai-7-http-https-va-http2
        description: >-
          http.createServer, routing, middleware pattern từ scratch.
          HTTPS/TLS setup. HTTP/2 server push. Request/Response handling,
          chunked transfer. Keep-alive, connection pooling.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-g204-7001-b008-nodejs0000204
        title: 'Bài 8: Crypto, OS & Process'
        slug: bai-8-crypto-os-va-process
        description: >-
          crypto module: hashing, HMAC, encryption (AES), key derivation
          (scrypt, argon2). Digital signatures. os module, process signals,
          environment variables. child_process, exec/spawn.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Phần 3: Concurrency & Networking'
    description: 'Worker Threads, Cluster, TCP/UDP, WebSockets, IPC'
    sort_order: 3
    lessons:
      - id: 019d8b40-g301-7001-b008-nodejs0000301
        title: 'Bài 9: Worker Threads & CPU-intensive Tasks'
        slug: bai-9-worker-threads-va-cpu-intensive
        description: >-
          Worker Threads, SharedArrayBuffer, Atomics. MessageChannel,
          transferable objects. Thread pool patterns, Piscina.
          CPU-intensive task offloading, image processing.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-g302-7001-b008-nodejs0000302
        title: 'Bài 10: Cluster Module & Load Balancing'
        slug: bai-10-cluster-module-va-load-balancing
        description: >-
          Cluster module, fork(), round-robin. PM2 process manager, graceful
          shutdown. Sticky sessions, shared state challenges. Zero-downtime
          deployment, rolling restarts.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-g303-7001-b008-nodejs0000303
        title: 'Bài 11: TCP, UDP & WebSockets'
        slug: bai-11-tcp-udp-va-websockets
        description: >-
          net module (TCP server/client), dgram (UDP). WebSocket server
          với ws library. Connection management, binary protocols.
          Protocol design, custom wire formats.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-g304-7001-b008-nodejs0000304
        title: 'Bài 12: Events, Timers & Diagnostics'
        slug: bai-12-events-timers-va-diagnostics
        description: >-
          EventEmitter patterns, custom events, memory leak detection.
          AbortController/AbortSignal. Diagnostic Channel, async_hooks.
          Node.js Inspector, heap snapshots.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Phần 4: Building Without Frameworks'
    description: 'HTTP server từ scratch, routing engine, middleware, database'
    sort_order: 4
    lessons:
      - id: 019d8b40-g401-7001-b008-nodejs0000401
        title: 'Bài 13: Xây dựng HTTP Framework từ Scratch'
        slug: bai-13-xay-dung-http-framework-tu-scratch
        description: >-
          Xây dựng mini framework: Router, middleware pipeline, request
          parsing, response helpers. So sánh với Express/Fastify internals.
          Content negotiation, CORS.
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-g402-7001-b008-nodejs0000402
        title: 'Bài 14: Database Drivers & Connection Pooling'
        slug: bai-14-database-drivers-va-connection-pooling
        description: >-
          pg (PostgreSQL), mysql2, better-sqlite3 native drivers. Connection
          pooling, prepared statements. Transactions, query builders
          (Knex.js). Migration tools.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-g403-7001-b008-nodejs0000403
        title: 'Bài 15: Caching, Queues & Background Jobs'
        slug: bai-15-caching-queues-va-background-jobs
        description: >-
          Redis client (ioredis), caching patterns. BullMQ job queues,
          priority queues, rate limiting. Cron jobs với node-cron.
          In-memory caching (LRU cache).
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-g404-7001-b008-nodejs0000404
        title: 'Bài 16: Native Addons & N-API'
        slug: bai-16-native-addons-va-napi
        description: >-
          N-API (Node-API), napi-rs (Rust bindings). node-gyp, prebuild.
          C/C++ addons, performance-critical native code. When to use
          native addons vs Worker Threads vs WASM.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Phần 5: Testing, Performance & Production'
    description: 'Testing, profiling, Docker, monitoring, scaling'
    sort_order: 5
    lessons:
      - id: 019d8b40-g501-7001-b008-nodejs0000501
        title: 'Bài 17: Testing Node.js Applications'
        slug: bai-17-testing-nodejs-applications
        description: >-
          Node.js built-in test runner (node:test). Vitest cho unit/integration
          tests. Supertest cho HTTP testing. Nock cho HTTP mocking.
          Testcontainers, code coverage (c8/istanbul).
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-g502-7001-b008-nodejs0000502
        title: 'Bài 18: Performance Profiling & Optimization'
        slug: bai-18-performance-profiling-va-optimization
        description: >-
          V8 profiler, --prof flag, flamegraphs. Memory leak detection,
          heap snapshots. Clinic.js (Doctor, Bubbleprof, Flame). Event Loop
          lag monitoring, 0x profiler. GC tuning.
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-g503-7001-b008-nodejs0000503
        title: 'Bài 19: Docker & CI/CD'
        slug: bai-19-docker-va-cicd
        description: >-
          Docker multi-stage build cho Node.js. Alpine vs slim vs distroless.
          Docker Compose, health checks. GitHub Actions CI/CD pipeline.
          pnpm trong Docker, .dockerignore best practices.
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-g504-7001-b008-nodejs0000504
        title: 'Bài 20: Production Monitoring & Scaling'
        slug: bai-20-production-monitoring-va-scaling
        description: >-
          Pino structured logging, OpenTelemetry tracing. Prometheus metrics,
          Grafana dashboards. PM2 ecosystem. Graceful shutdown, health checks.
          Horizontal scaling, stateless design.
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
---

Khóa học **Node.js Core: Từ Cơ bản đến Nâng cao** giúp bạn hiểu sâu Node.js runtime — không phụ thuộc bất kỳ framework nào, từ V8 Engine internals đến production-grade applications.

## Bạn sẽ học được gì?

- **Internals**: V8 Engine, Event Loop, libuv, module system, async patterns
- **Core Modules**: File System, Streams, HTTP/2, Crypto, Worker Threads, Cluster
- **Networking**: TCP/UDP, WebSockets, custom protocols
- **Building**: HTTP framework từ scratch, database drivers, caching, queues
- **Production**: Testing, profiling, Docker, CI/CD, monitoring, scaling

## Yêu cầu

- Kiến thức JavaScript ES6+ cơ bản
- TypeScript cơ bản (khuyến khích)
- Node.js 22 LTS và Docker
