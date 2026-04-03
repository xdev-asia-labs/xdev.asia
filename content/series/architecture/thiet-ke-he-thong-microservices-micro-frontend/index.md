---
id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
title: 'Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production'
slug: thiet-ke-he-thong-microservices-micro-frontend
description: >-
  Series toàn diện về thiết kế hệ thống Full-Stack với Microservices Backend và
  Micro Frontend — từ tư duy phân tách hệ thống bằng Domain-Driven Design, thiết kế
  API (REST, GraphQL, gRPC), Data Architecture (Saga, CQRS, Event Sourcing), đến
  kiến trúc Micro Frontend (Module Federation, Shell App, Design System), BFF Pattern,
  API Gateway, Testing Strategies, CI/CD Pipeline, Observability full-stack và
  Production Readiness. Bao gồm case study thực tế xây dựng E-Commerce Platform
  và hướng dẫn migration từ Monolith. Cập nhật công nghệ 2026.
featured_image: uploads/2026/04/microservices-micro-frontend-series-banner-2026.png
level: intermediate
duration_hours: 90
lesson_count: 30
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-04-03T10:00:00.000000Z'
created_at: '2026-04-03T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019d8a21-b200-7001-c001-a1b2c3d4e5f6
  name: Kiến trúc hệ thống
  slug: kien-truc-he-thong
tags:
  - name: microservices
    slug: microservices
  - name: micro-frontend
    slug: micro-frontend
  - name: system-design
    slug: system-design
  - name: module-federation
    slug: module-federation
  - name: DDD
    slug: ddd
  - name: API Gateway
    slug: api-gateway
  - name: GraphQL
    slug: graphql
  - name: BFF
    slug: bff
  - name: CQRS
    slug: cqrs
  - name: event-driven
    slug: event-driven
  - name: design-system
    slug: design-system
  - name: CI/CD
    slug: cicd
  - name: testing
    slug: testing
  - name: observability
    slug: observability
  - name: production
    slug: production
sections:
  - id: section-01
    title: 'Phần 1: Nền tảng — Evolution of Architecture'
    description: 'Hiểu lộ trình tiến hóa kiến trúc từ Monolith đến Microservices & Micro Frontend, nắm vững DDD và kiến trúc tổng quan full-stack.'
    sort_order: 1
    lessons:
      - id: 019e4a33-d401-7b20-c001-b1c2d3e4f501
        title: 'Bài 1: Từ Monolith đến Microservices & Micro Frontend — Lộ trình tiến hóa kiến trúc'
        slug: bai-1-tu-monolith-den-microservices-micro-frontend-lo-trinh-tien-hoa
        description: >-
          Hiểu vì sao Monolith trở thành bottleneck, hành trình tiến hóa sang Microservices,
          và tại sao Frontend cũng cần được phân tách. So sánh Monolith vs SOA vs Microservices
          vs Micro Frontend. Khi nào nên bắt đầu chuyển đổi.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e4a33-d402-7b20-c001-b1c2d3e4f502
        title: 'Bài 2: Domain-Driven Design — Tư duy phân tách hệ thống'
        slug: bai-2-domain-driven-design-tu-duy-phan-tach-he-thong
        description: >-
          Nền tảng DDD: Ubiquitous Language, Bounded Context, Aggregates, Domain Events.
          Cách sử dụng Event Storming để khám phá domain. Strategic vs Tactical DDD
          và áp dụng vào việc chia Microservices & Micro Frontend.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e4a33-d403-7b20-c001-b1c2d3e4f503
        title: 'Bài 3: Kiến trúc tổng quan Full-Stack — Microservices + Micro Frontend + BFF'
        slug: bai-3-kien-truc-tong-quan-full-stack-microservices-micro-frontend-bff
        description: >-
          Blueprint kiến trúc toàn diện: Frontend (Micro Frontend Shell + Remote Apps),
          BFF Layer, API Gateway, Backend Microservices, Message Broker, Database per Service.
          Luồng request end-to-end và các điểm tích hợp chính.
        duration_minutes: 75
        is_free: true
        sort_order: 3
        video_url: null

  - id: section-02
    title: 'Phần 2: Thiết kế Microservices Backend'
    description: 'Service decomposition, API design patterns, và communication patterns giữa các microservices.'
    sort_order: 2
    lessons:
      - id: 019e4a33-d404-7b20-c001-b1c2d3e4f504
        title: 'Bài 4: Service Decomposition — Bounded Context & Service Boundaries'
        slug: bai-4-service-decomposition-bounded-context-service-boundaries
        description: >-
          Phương pháp phân tách service dựa trên Bounded Context. Xác định service boundaries
          đúng cách, tránh distributed monolith. Chiến lược decompose by subdomain
          vs decompose by business capability. Context Mapping patterns.
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e4a33-d405-7b20-c001-b1c2d3e4f505
        title: 'Bài 5: API Design Masterclass — REST, GraphQL & gRPC'
        slug: bai-5-api-design-masterclass-rest-graphql-grpc
        description: >-
          So sánh chi tiết REST vs GraphQL vs gRPC: use cases, performance, trade-offs.
          RESTful API best practices, GraphQL schema design, gRPC với Protocol Buffers.
          API versioning strategies và backward compatibility.
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e4a33-d406-7b20-c001-b1c2d3e4f506
        title: 'Bài 6: Inter-service Communication — Sync, Async & Event-Driven'
        slug: bai-6-inter-service-communication-sync-async-event-driven
        description: >-
          Synchronous (HTTP, gRPC) vs Asynchronous (Message Queue, Event Streaming) communication.
          Request-Reply, Publish-Subscribe, Event Notification patterns. Khi nào dùng RabbitMQ
          vs Kafka vs NATS. Tránh distributed monolith anti-pattern.
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null

  - id: section-03
    title: 'Phần 3: Data Architecture trong Microservices'
    description: 'Database per Service, Saga Pattern, CQRS và Event Sourcing — quản lý dữ liệu phân tán.'
    sort_order: 3
    lessons:
      - id: 019e4a33-d407-7b20-c001-b1c2d3e4f507
        title: 'Bài 7: Database per Service & Polyglot Persistence'
        slug: bai-7-database-per-service-polyglot-persistence
        description: >-
          Tại sao mỗi service cần database riêng. Chiến lược chọn database phù hợp:
          PostgreSQL, MongoDB, Redis, Elasticsearch. Shared database anti-pattern.
          Data isolation, schema ownership và migration strategy.
        duration_minutes: 75
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e4a33-d408-7b20-c001-b1c2d3e4f508
        title: 'Bài 8: Saga Pattern & Distributed Transactions'
        slug: bai-8-saga-pattern-distributed-transactions
        description: >-
          Tại sao ACID không work trong Microservices. Saga Pattern: Choreography vs Orchestration.
          Compensating transactions, idempotency, và error handling. Ví dụ thực tế:
          Order → Payment → Inventory → Shipping workflow.
        duration_minutes: 90
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e4a33-d409-7b20-c001-b1c2d3e4f509
        title: 'Bài 9: Event Sourcing & CQRS — Khi nào cần, khi nào không?'
        slug: bai-9-event-sourcing-cqrs-khi-nao-can-khi-nao-khong
        description: >-
          Event Sourcing: lưu trữ sự kiện thay vì trạng thái. CQRS: tách read/write models.
          Kết hợp Event Sourcing + CQRS. Trade-offs, complexity, và decision framework.
          Khi nào CQRS quá phức tạp, khi nào thực sự cần thiết.
        duration_minutes: 75
        is_free: true
        sort_order: 9
        video_url: null

  - id: section-04
    title: 'Phần 4: Micro Frontend — Kiến trúc & Nguyên lý'
    description: 'Tổng quan Micro Frontend, các chiến lược tích hợp, Module Federation và Web Components.'
    sort_order: 4
    lessons:
      - id: 019e4a33-d410-7b20-c001-b1c2d3e4f510
        title: 'Bài 10: Micro Frontend là gì? — Lợi ích, Trade-offs & Decision Framework'
        slug: bai-10-micro-frontend-la-gi-loi-ich-trade-offs-decision-framework
        description: >-
          Định nghĩa Micro Frontend, so sánh với Monolithic Frontend. 5 nguyên lý cốt lõi.
          Lợi ích: independent deployment, team autonomy, incremental upgrades.
          Trade-offs: payload size, complexity, consistency. Framework ra quyết định:
          khi nào nên và không nên dùng Micro Frontend.
        duration_minutes: 75
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e4a33-d411-7b20-c001-b1c2d3e4f511
        title: 'Bài 11: Chiến lược tích hợp Micro Frontend — Server-side, Build-time & Runtime'
        slug: bai-11-chien-luoc-tich-hop-server-side-build-time-runtime
        description: >-
          5 phương pháp tích hợp: Server-side Composition (SSI/ESI), Build-time Integration,
          Runtime via iframes, Runtime via JavaScript, Runtime via Web Components.
          So sánh trade-offs, performance, isolation. Các framework phổ biến:
          single-spa, qiankun, Luigi, Piral.
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e4a33-d412-7b20-c001-b1c2d3e4f512
        title: 'Bài 12: Module Federation — Webpack 5 & Vite Federation Runtime Module Sharing'
        slug: bai-12-module-federation-webpack-vite-runtime-module-sharing
        description: >-
          Module Federation: cách chia sẻ module giữa các ứng dụng tại runtime.
          Webpack 5 Module Federation deep dive: Remote, Host, Shared modules.
          Vite Plugin Federation. Xử lý shared dependencies, version conflicts,
          và fallback strategies. Hands-on setup với React/Vue.
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null

  - id: section-05
    title: 'Phần 5: Xây dựng Micro Frontend thực tế'
    description: 'Hands-on xây dựng Shell Application, State Management, Design System và SSO cho Micro Frontend.'
    sort_order: 5
    lessons:
      - id: 019e4a33-d413-7b20-c001-b1c2d3e4f513
        title: 'Bài 13: Shell Application — Routing, Layout & Orchestration'
        slug: bai-13-shell-application-routing-layout-orchestration
        description: >-
          Xây dựng Container/Shell App: quản lý layout, navigation, và lifecycle
          các micro frontend. Dynamic routing, lazy loading micro frontends.
          Error boundaries & fallback UI. Xử lý 404, deep linking,
          browser history management.
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e4a33-d414-7b20-c001-b1c2d3e4f514
        title: 'Bài 14: State Management & Cross-App Communication'
        slug: bai-14-state-management-cross-app-communication
        description: >-
          Quản lý state trong Micro Frontend: Local state vs Shared state.
          Custom Events, Props/Callbacks, URL-based communication.
          Shared state solutions: Zustand, Event Bus, Custom Event API.
          Nguyên tắc: minimize cross-app state, prefer event-driven.
        duration_minutes: 75
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e4a33-d415-7b20-c001-b1c2d3e4f515
        title: 'Bài 15: Design System & CSS Isolation — Đồng nhất UI cross-team'
        slug: bai-15-design-system-css-isolation-dong-nhat-ui
        description: >-
          Xây dựng Shared Design System cho Micro Frontend: Component Library,
          Design Tokens, Typography, Color Palette. CSS Isolation: Shadow DOM,
          CSS Modules, CSS-in-JS, BEM naming convention.
          Versioning design system, gradual rollout.
        duration_minutes: 75
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019e4a33-d416-7b20-c001-b1c2d3e4f516
        title: 'Bài 16: Single Sign-On & Token Sharing giữa Micro Frontends'
        slug: bai-16-single-sign-on-token-sharing-giua-micro-frontends
        description: >-
          Authentication flow trong Micro Frontend: centralized auth ở Shell App.
          Token management: JWT trong memory vs Cookie-based.
          SSO integration với Keycloak/Auth0. Token refresh, session sync,
          và logout đồng bộ across micro frontends.
        duration_minutes: 75
        is_free: true
        sort_order: 16
        video_url: null

  - id: section-06
    title: 'Phần 6: API Gateway & BFF Layer'
    description: 'Backend for Frontend pattern, API Gateway configuration, và GraphQL Federation.'
    sort_order: 6
    lessons:
      - id: 019e4a33-d417-7b20-c001-b1c2d3e4f517
        title: 'Bài 17: BFF Pattern — Kết nối Micro Frontend với Microservices'
        slug: bai-17-bff-pattern-ket-noi-micro-frontend-voi-microservices
        description: >-
          Backend for Frontend: tại sao cần BFF, mỗi micro frontend có BFF riêng.
          BFF aggregation, data transformation, caching. BFF với Node.js/Go.
          Trade-offs: BFF per frontend vs Shared BFF. Anti-patterns cần tránh.
        duration_minutes: 75
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019e4a33-d418-7b20-c001-b1c2d3e4f518
        title: 'Bài 18: API Gateway — Routing, Auth, Rate Limiting & Load Balancing'
        slug: bai-18-api-gateway-routing-auth-rate-limiting
        description: >-
          API Gateway patterns: routing, authentication, rate limiting, request/response
          transformation. So sánh Kong vs APISIX vs Envoy Gateway vs AWS API Gateway.
          Cấu hình production: health checks, circuit breaker, canary routing.
          API Gateway vs Service Mesh — khi nào dùng cái gì.
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019e4a33-d419-7b20-c001-b1c2d3e4f519
        title: 'Bài 19: GraphQL Federation — Unified Data Layer cho Micro Frontend'
        slug: bai-19-graphql-federation-unified-data-layer
        description: >-
          Apollo Federation: supergraph, subgraphs, router. Mỗi microservice expose
          một subgraph, Federation Gateway compose thành unified schema.
          Entity references, @key directive, và cross-service relationships.
          Performance: DataLoader, caching, persisted queries.
        duration_minutes: 90
        is_free: true
        sort_order: 19
        video_url: null

  - id: section-07
    title: 'Phần 7: Testing Full-Stack Microservices & Micro Frontend'
    description: 'Chiến lược testing toàn diện: Unit, Integration, Contract Testing, E2E cho cả backend và frontend.'
    sort_order: 7
    lessons:
      - id: 019e4a33-d420-7b20-c001-b1c2d3e4f520
        title: 'Bài 20: Testing Microservices — Unit, Integration & Service Component Test'
        slug: bai-20-testing-microservices-unit-integration-component
        description: >-
          Test Pyramid cho Microservices. Unit test với mocking external dependencies.
          Integration test với Testcontainers. Service Component Test: test toàn bộ
          service trong isolation. API Contract Testing cơ bản.
        duration_minutes: 75
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019e4a33-d421-7b20-c001-b1c2d3e4f521
        title: 'Bài 21: Testing Micro Frontend — Component, Visual Regression & E2E'
        slug: bai-21-testing-micro-frontend-component-visual-e2e
        description: >-
          Testing strategy cho Micro Frontend: Component tests (React Testing Library,
          Vue Test Utils), Visual Regression (Chromatic, Percy), E2E tests
          (Playwright, Cypress). Testing micro frontend trong isolation vs
          integrated testing. Cross-app user journey tests.
        duration_minutes: 75
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019e4a33-d422-7b20-c001-b1c2d3e4f522
        title: 'Bài 22: Consumer-Driven Contracts — Pact cho API & UI Integration'
        slug: bai-22-consumer-driven-contracts-pact-api-ui
        description: >-
          Consumer-Driven Contract Testing với Pact: tại sao integration test không đủ.
          Provider verification, consumer expectations. Pact cho REST API, GraphQL,
          và message-based communication. Contract testing cho Micro Frontend:
          verify interface contracts giữa Shell và Remote apps.
        duration_minutes: 75
        is_free: true
        sort_order: 22
        video_url: null

  - id: section-08
    title: 'Phần 8: CI/CD & Deployment Strategies'
    description: 'Quản lý code, CI/CD pipeline, và deployment strategies cho Microservices & Micro Frontend.'
    sort_order: 8
    lessons:
      - id: 019e4a33-d423-7b20-c001-b1c2d3e4f523
        title: 'Bài 23: Mono-repo vs Multi-repo — Chiến lược quản lý code'
        slug: bai-23-mono-repo-vs-multi-repo-chien-luoc-quan-ly-code
        description: >-
          So sánh Mono-repo vs Multi-repo vs Hybrid cho Microservices & Micro Frontend.
          Tools: Nx, Turborepo, Lerna. Mono-repo cho Micro Frontend: shared build,
          consistent versioning. Multi-repo cho Microservices: team autonomy.
          Git workflow, code ownership, dependency management.
        duration_minutes: 75
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019e4a33-d424-7b20-c001-b1c2d3e4f524
        title: 'Bài 24: CI/CD Pipeline — Build, Test & Deploy Independently'
        slug: bai-24-cicd-pipeline-build-test-deploy-independently
        description: >-
          Thiết kế CI/CD pipeline cho hệ thống Microservices + Micro Frontend.
          Independent build & deploy cho mỗi service/micro frontend.
          GitHub Actions / GitLab CI pipeline templates. Automated testing gates,
          security scanning, container image build & push. GitOps với ArgoCD.
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019e4a33-d425-7b20-c001-b1c2d3e4f525
        title: 'Bài 25: Deployment Strategies — Canary, Blue-Green & Feature Flags'
        slug: bai-25-deployment-strategies-canary-blue-green-feature-flags
        description: >-
          Chiến lược deploy cho Microservices: Rolling Update, Blue-Green, Canary Release.
          Independent deployment cho Micro Frontend: CDN-based deployment,
          versioned bundles, dynamic remoteEntry.js. Feature Flags với LaunchDarkly/Unleash
          để rollout features an toàn. Rollback strategies.
        duration_minutes: 75
        is_free: true
        sort_order: 25
        video_url: null

  - id: section-09
    title: 'Phần 9: Observability & Production Readiness'
    description: 'Full-stack observability, performance optimization, và production readiness checklist.'
    sort_order: 9
    lessons:
      - id: 019e4a33-d426-7b20-c001-b1c2d3e4f526
        title: 'Bài 26: Full-Stack Observability — Tracing từ Frontend đến Backend'
        slug: bai-26-full-stack-observability-tracing-frontend-den-backend
        description: >-
          Observability toàn diện: Frontend monitoring (Web Vitals, Error Tracking),
          API Gateway logging, Backend distributed tracing. OpenTelemetry cho
          cả frontend (browser SDK) và backend. Correlation ID xuyên suốt
          request chain. Grafana dashboards, alerting production.
        duration_minutes: 90
        is_free: true
        sort_order: 26
        video_url: null
      - id: 019e4a33-d427-7b20-c001-b1c2d3e4f527
        title: 'Bài 27: Performance Optimization — Bundle Size, Caching & CDN'
        slug: bai-27-performance-optimization-bundle-caching-cdn
        description: >-
          Tối ưu Micro Frontend: shared dependencies extraction, tree shaking,
          dynamic imports, lazy loading. CDN deployment strategy: cache busting,
          immutable assets. Backend performance: connection pooling, N+1 queries,
          response compression. Core Web Vitals monitoring.
        duration_minutes: 75
        is_free: true
        sort_order: 27
        video_url: null
      - id: 019e4a33-d428-7b20-c001-b1c2d3e4f528
        title: 'Bài 28: Production Readiness Checklist — Đưa hệ thống lên Production'
        slug: bai-28-production-readiness-checklist
        description: >-
          Checklist toàn diện trước khi go-live: Security review, Load testing,
          Chaos engineering, Disaster recovery plan, Runbook, On-call rotation.
          Architecture Decision Records (ADR). Capacity planning,
          cost optimization, team structure & ownership model.
        duration_minutes: 75
        is_free: true
        sort_order: 28
        video_url: null

  - id: section-10
    title: 'Phần 10: Case Studies & Migration'
    description: 'Case study thực tế xây dựng E-Commerce Platform và hướng dẫn migration từ Monolith.'
    sort_order: 10
    lessons:
      - id: 019e4a33-d429-7b20-c001-b1c2d3e4f529
        title: 'Bài 29: Case Study — Xây dựng E-Commerce Platform Full-Stack'
        slug: bai-29-case-study-xay-dung-ecommerce-platform-full-stack
        description: >-
          Thiết kế hệ thống E-Commerce hoàn chỉnh: Product Catalog, Shopping Cart,
          Order Management, Payment, User Profile — mỗi domain là 1 Microservice +
          1 Micro Frontend. Kiến trúc chi tiết, technology choices, data flow diagrams,
          deployment architecture trên Kubernetes.
        duration_minutes: 120
        is_free: true
        sort_order: 29
        video_url: null
      - id: 019e4a33-d430-7b20-c001-b1c2d3e4f530
        title: 'Bài 30: Migration Guide — Từ Monolith sang Microservices + Micro Frontend'
        slug: bai-30-migration-guide-tu-monolith-sang-microservices-micro-frontend
        description: >-
          Chiến lược migration thực tế: Strangler Fig Pattern, Branch by Abstraction,
          Parallel Run. Migration frontend: từ SPA monolith sang Micro Frontend dần dần.
          Migration backend: extract service từ monolith. Phân chia team, timeline,
          risk management. Lessons learned từ IKEA, Spotify, Zalando.
        duration_minutes: 90
        is_free: true
        sort_order: 30
        video_url: null
---

# Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production

## Tổng quan

Series này đưa bạn từ **zero đến production** với kiến trúc **Microservices Backend + Micro Frontend** — mô hình kiến trúc hiện đại nhất cho các hệ thống phức tạp, yêu cầu nhiều team phát triển song song.

Khác với các series khác chỉ tập trung vào backend hoặc frontend, series này kết hợp **cả hai phía** với góc nhìn **full-stack architect**, giúp bạn hiểu cách thiết kế hệ thống **end-to-end** từ UI đến Database.

## Bạn sẽ học được gì?

### 🏗️ Kiến trúc & Thiết kế
- Phân tách hệ thống bằng **Domain-Driven Design** (Bounded Context, Event Storming)
- Thiết kế **Microservices Backend**: API Design, Inter-service Communication, Data Architecture
- Thiết kế **Micro Frontend**: Module Federation, Shell App, Design System, Cross-app Communication

### 🔗 Tích hợp Full-Stack
- **BFF (Backend for Frontend)** Pattern — cầu nối giữa Micro Frontend và Microservices
- **API Gateway** — routing, auth, rate limiting, load balancing
- **GraphQL Federation** — unified data layer cho nhiều micro frontends

### 🧪 Testing & Quality
- Testing Microservices: Unit, Integration, Contract Testing
- Testing Micro Frontend: Component, Visual Regression, E2E
- Consumer-Driven Contracts với Pact

### 🚀 CI/CD & Production
- Mono-repo vs Multi-repo strategy
- Independent CI/CD pipeline cho mỗi service/micro frontend
- Canary release, Blue-Green deployment, Feature Flags
- Full-stack Observability: Frontend → API → Backend tracing
- Production Readiness Checklist

### 📋 Case Studies
- **E-Commerce Platform**: thiết kế hoàn chỉnh từ architecture đến deployment
- **Migration Guide**: từ Monolith sang Microservices + Micro Frontend (Strangler Fig, Branch by Abstraction)

## Đối tượng mục tiêu

- **Backend Engineers** muốn hiểu Micro Frontend để thiết kế API phù hợp
- **Frontend Engineers** muốn scale ứng dụng với Micro Frontend
- **Full-Stack Engineers** muốn nắm kiến trúc end-to-end
- **Software Architects** cần blueprint cho hệ thống production
- **Tech Leads** đang lên kế hoạch migration từ Monolith

## Yêu cầu kiến thức

- Biết ít nhất 1 ngôn ngữ backend (Node.js, Go, Java, Python)
- Biết ít nhất 1 framework frontend (React, Vue, Angular)
- Hiểu cơ bản về REST API, HTTP, Docker
- Series **System Architecture: From Zero to Hero** là bổ trợ tốt nhưng không bắt buộc

## Công nghệ sử dụng trong series

| Layer | Technologies |
|-------|-------------|
| **Micro Frontend** | React, Module Federation (Webpack 5 / Vite), single-spa, Web Components |
| **Design System** | Storybook, Tailwind CSS, Shadow DOM, CSS Modules |
| **BFF / API Gateway** | Node.js, Kong / APISIX, GraphQL (Apollo Federation) |
| **Backend** | Node.js / Go, REST, gRPC, GraphQL |
| **Messaging** | RabbitMQ, Apache Kafka, NATS |
| **Database** | PostgreSQL, MongoDB, Redis, Elasticsearch |
| **CI/CD** | GitHub Actions, GitLab CI, ArgoCD, Docker, Kubernetes |
| **Observability** | OpenTelemetry, Grafana, Prometheus, Jaeger |
| **Auth** | Keycloak, OAuth2, JWT, OIDC |

## Lộ trình học

```
Phần 1-3: Nền tảng Backend     (9 bài)  → Hiểu mindset & thiết kế backend
Phần 4-5: Micro Frontend       (7 bài)  → Nắm vững kiến trúc & xây dựng frontend
Phần 6:   API Layer             (3 bài)  → Kết nối backend & frontend
Phần 7-8: Testing & CI/CD      (6 bài)  → Đảm bảo chất lượng & tự động hóa
Phần 9:   Production           (3 bài)  → Observability & production readiness
Phần 10:  Case Studies          (2 bài)  → Áp dụng thực tế & migration
```
