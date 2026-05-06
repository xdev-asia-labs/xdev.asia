---
id: 019d8b40-g100-7001-b008-nodejs0000001
title: 'Node.js Core: From Basics to Advanced'
slug: nodejs-core-tu-co-ban-den-nang-cao
description: >-
  The Node.js Core course is comprehensive from basic to advanced, helping you
  deeply understand the Node.js runtime regardless of the framework. Including
  Event Loop, Streams, Worker Threads, Cluster, HTTP/2, Crypto, File System,
  Child Processes, Native Modules, Performance Profiling. Updated to Node.js 22
  LTS with the latest 2026 best practices.
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
  name: Programming
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
    title: 'Part 1: Node.js Internals'
    description: 'V8 Engine, Event Loop, libuv, module system, async patterns'
    sort_order: 1
    lessons:
      - id: 019d8b40-g101-7001-b008-nodejs0000101
        title: 'Lesson 1: Node.js Architecture Deep Dive'
        slug: bai-1-nodejs-architecture-deep-dive
        description: >-
          V8 Engine, libuv, C++ bindings. Single-threaded event loop model.
          Node.js vs Deno vs Bun. Development history, use cases. node
          --inspect, V8 flags.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-g102-7001-b008-nodejs0000102
        title: 'Lesson 2: Event Loop & Async Patterns'
        slug: bai-2-event-loop-va-async-patterns
        description: >-
          Event Loop phases (timers, pending, poll, check, close). Microtasks vs
          macrotasks. process.nextTick vs queueMicrotask vs setImmediate.
          Callbacks, Promises, async/await. Promise.allSettled, Promise.any.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-g103-7001-b008-nodejs0000103
        title: 'Lesson 3: Module System & Package Management'
        slug: bai-3-module-system-va-package-management
        description: >-
          CommonJS vs ES Modules, module resolution algorithm. Package.json
          field exports, conditional exports. npm, pnpm workspace. Node.js
          built-in test runner, permission model.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-g104-7001-b008-nodejs0000104
        title: 'Lesson 4: TypeScript & Modern JavaScript in Node.js'
        slug: bai-4-typescript-va-modern-javascript
        description: >-
          TypeScript setup for Node.js, tsx/ts-node. Type-safe configuration,
          path aliases. ESBuild/SWC compilation. Node.js type stripping
          (--experimental-strip-types). Decorators, metadata.
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Part 2: Core Modules Deep Dive'
    description: 'File System, Streams, HTTP, Crypto, OS, Process'
    sort_order: 2
    lessons:
      - id: 019d8b40-g201-7001-b008-nodejs0000201
        title: 'Lesson 5: File System & Path'
        slug: bai-5-file-system-va-path
        description: >-
          fs/promises, fs.createReadStream/WriteStream. File watching (fs.watch,
          chokidar). Path manipulation, __dirname, import.meta.url. Temporary
          files, atomic writes. Glob patterns.
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-g202-7001-b008-nodejs0000202
        title: 'Lesson 6: Streams & Buffers'
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
        title: 'Lesson 7: HTTP/HTTPS & HTTP/2'
        slug: bai-7-http-https-va-http2
        description: >-
          http.createServer, routing, middleware pattern from scratch. HTTPS/TLS
          setup. HTTP/2 server push. Request/Response handling, chunked
          transfer. Keep-alive, connection pooling.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-g204-7001-b008-nodejs0000204
        title: 'Lesson 8: Crypto, OS & Process'
        slug: bai-8-crypto-os-va-process
        description: >-
          crypto module: hashing, HMAC, encryption (AES), key derivation
          (scrypt, argon2). Digital signatures. os module, process signals,
          environment variables. child_process, execute/spawn.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Part 3: Concurrency & Networking'
    description: 'Worker Threads, Cluster, TCP/UDP, WebSockets, IPC'
    sort_order: 3
    lessons:
      - id: 019d8b40-g301-7001-b008-nodejs0000301
        title: 'Lesson 9: Worker Threads & CPU-intensive Tasks'
        slug: bai-9-worker-threads-va-cpu-intensive
        description: >-
          Worker Threads, SharedArrayBuffer, Atomics. MessageChannel,
          transferable objects. Thread pool patterns, Piscina. CPU-intensive
          task offloading, image processing.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-g302-7001-b008-nodejs0000302
        title: 'Lesson 10: Cluster Module & Load Balancing'
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
        title: 'Lesson 11: TCP, UDP & WebSockets'
        slug: bai-11-tcp-udp-va-websockets
        description: >-
          net module (TCP server/client), dgram (UDP). WebSocket server with ws
          library. Connection management, binary protocols. Protocol design,
          custom wire formats.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-g304-7001-b008-nodejs0000304
        title: 'Lesson 12: Events, Timers & Diagnostics'
        slug: bai-12-events-timers-va-diagnostics
        description: >-
          EventEmitter patterns, custom events, memory leak detection.
          AbortController/AbortSignal. Diagnostic Channel, async_hooks. Node.js
          Inspector, heap snapshots.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Part 4: Building Without Frameworks'
    description: 'HTTP server from scratch, routing engine, middleware, database'
    sort_order: 4
    lessons:
      - id: 019d8b40-g401-7001-b008-nodejs0000401
        title: 'Lesson 13: Building HTTP Framework from Scratch'
        slug: bai-13-xay-dung-http-framework-tu-scratch
        description: >-
          Build mini framework: Router, middleware pipeline, request parsing,
          response helpers. Compare with Express/Fastify internals. Content
          negotiation, CORS.
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-g402-7001-b008-nodejs0000402
        title: 'Lesson 14: Database Drivers & Connection Pooling'
        slug: bai-14-database-drivers-va-connection-pooling
        description: >-
          pg (PostgreSQL), mysql2, better-sqlite3 native drivers. Connection
          pooling, prepared statements. Transactions, query builders (Knex.js).
          Migration tools.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-g403-7001-b008-nodejs0000403
        title: 'Lesson 15: Caching, Queues & Background Jobs'
        slug: bai-15-caching-queues-va-background-jobs
        description: >-
          Redis client (ioredis), caching patterns. BullMQ job queues, priority
          queues, rate limiting. Cron jobs with node-cron. In-memory caching
          (LRU cache).
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-g404-7001-b008-nodejs0000404
        title: 'Lesson 16: Native Addons & N-API'
        slug: bai-16-native-addons-va-napi
        description: >-
          N-API (Node-API), napi-rs (Rust bindings). node-gyp, prebuild. C/C++
          addons, performance-critical native code. When to use native addons vs
          Worker Threads vs WASM.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Part 5: Testing, Performance & Production'
    description: 'Testing, profiling, Docker, monitoring, scaling'
    sort_order: 5
    lessons:
      - id: 019d8b40-g501-7001-b008-nodejs0000501
        title: 'Lesson 17: Testing Node.js Applications'
        slug: bai-17-testing-nodejs-applications
        description: >-
          Node.js built-in test runner (node:test). Vitest for unit/integration
          tests. Supertest for HTTP testing. Nock for HTTP mocking.
          Testcontainers, code coverage (c8/istanbul).
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-g502-7001-b008-nodejs0000502
        title: 'Lesson 18: Performance Profiling & Optimization'
        slug: bai-18-performance-profiling-va-optimization
        description: >-
          V8 profiler, --prof flag, flamegraphs. Memory leak detection, heap
          snapshots. Clinic.js (Doctor, Bubbleprof, Flame). Event Loop lag
          monitoring, 0x profiler. GC tuning.
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-g503-7001-b008-nodejs0000503
        title: 'Lesson 19: Docker & CI/CD'
        slug: bai-19-docker-va-cicd
        description: >-
          Docker multi-stage build for Node.js. Alpine vs slim vs distroless.
          Docker Compose, health checks. GitHub Actions CI/CD pipeline. pnpm in
          Docker, .dockerignore best practices.
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-g504-7001-b008-nodejs0000504
        title: 'Lesson 20: Production Monitoring & Scaling'
        slug: bai-20-production-monitoring-va-scaling
        description: >-
          Pino structured logging, OpenTelemetry tracing. Prometheus metrics,
          Grafana dashboards. PM2 ecosystem. Graceful shutdown, health checks.
          Horizontal scaling, stateless design.
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
locale: en
---

The **Node.js Core: From Basics to Advanced** course helps you deeply understand the Node.js runtime — regardless of any framework, from V8 Engine internals to production-grade applications.

## What will you learn?

- **Internals**: V8 Engine, Event Loop, libuv, module system, async patterns
- **Core Modules**: File System, Streams, HTTP/2, Crypto, Worker Threads, Cluster
- **Networking**: TCP/UDP, WebSockets, custom protocols
- **Building**: HTTP framework from scratch, database drivers, caching, queues
- **Production**: Testing, profiling, Docker, CI/CD, monitoring, scaling

## Request

- Basic ES6+ JavaScript knowledge
- Basic TypeScript (recommended)
- Node.js 22 LTS and Docker
