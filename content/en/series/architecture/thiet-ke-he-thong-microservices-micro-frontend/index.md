---
id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
title: Microservices & Micro Frontend system design — From basics to Production
slug: thiet-ke-he-thong-microservices-micro-frontend
description: >-
  Comprehensive series on Full-Stack system design with Microservices Backend
  and Micro Frontend — from system separation thinking using Domain-Driven
  Design, API design (REST, GraphQL, gRPC), Data Architecture (Saga, CQRS, Event
  Sourcing), to Micro Frontend architecture (Module Federation, Shell App,
  Design System), BFF Pattern, API Gateway, Testing Strategies, CI/CD Pipeline,
  Observability full-stack and Production Readiness. Includes a practical case
  study of building an E-Commerce Platform and migration instructions from
  Monolith. Technology update 2026.
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
  name: System architecture
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
    title: 'Part 1: Foundation — Evolution of Architecture'
    description: >-
      Understand the architectural evolution path from Monolith to Microservices
      & Micro Frontend, master DDD and overall full-stack architecture.
    sort_order: 1
    lessons:
      - id: 019e4a33-d401-7b20-c001-b1c2d3e4f501
        title: >-
          Lesson 1: From Monolith to Microservices & Micro Frontend —
          Architectural evolution roadmap
        slug: bai-1-tu-monolith-den-microservices-micro-frontend-lo-trinh-tien-hoa
        description: >-
          Understand why Monolith became a bottleneck, the evolutionary journey
          to Microservices, and why Frontend also needs to be decoupled. Compare
          Monolith vs SOA vs Microservices vs Micro Frontend. When to start
          converting.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e4a33-d402-7b20-c001-b1c2d3e4f502
        title: 'Lesson 2: Domain-Driven Design — System separation thinking'
        slug: bai-2-domain-driven-design-tu-duy-phan-tach-he-thong
        description: >-
          DDD Platform: Ubiquitous Language, Bounded Context, Aggregates, Domain
          Events. How to use Event Storming to discover domains. Strategic vs
          Tactical DDD and application to Microservices & Micro Frontend
          division.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e4a33-d403-7b20-c001-b1c2d3e4f503
        title: >-
          Lesson 3: Full-Stack overview architecture — Microservices + Micro
          Frontend + BFF
        slug: bai-3-kien-truc-tong-quan-full-stack-microservices-micro-frontend-bff
        description: >-
          Comprehensive architectural blueprint: Frontend (Micro Frontend Shell
          + Remote Apps), BFF Layer, API Gateway, Backend Microservices, Message
          Broker, Database per Service. End-to-end request flow and key
          integration points.
        duration_minutes: 75
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Part 2: Designing Microservices Backend'
    description: >-
      Service decomposition, API design patterns, and communication patterns
      between microservices.
    sort_order: 2
    lessons:
      - id: 019e4a33-d404-7b20-c001-b1c2d3e4f504
        title: 'Lesson 4: Service Decomposition — Bounded Context & Service Boundaries'
        slug: bai-4-service-decomposition-bounded-context-service-boundaries
        description: >-
          Service separation method based on Bounded Context. Define service
          boundaries properly, avoid distributed monolith. Decompose by
          subdomain vs decompose by business capability strategy. Context
          Mapping patterns.
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e4a33-d405-7b20-c001-b1c2d3e4f505
        title: 'Lesson 5: API Design Masterclass — REST, GraphQL & gRPC'
        slug: bai-5-api-design-masterclass-rest-graphql-grpc
        description: >-
          Detailed comparison of REST vs GraphQL vs gRPC: use cases,
          performance, trade-offs. RESTful API best practices, GraphQL schema
          design, gRPC with Protocol Buffers. API versioning strategies and
          backward compatibility.
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e4a33-d406-7b20-c001-b1c2d3e4f506
        title: 'Lesson 6: Inter-service Communication — Sync, Async & Event-Driven'
        slug: bai-6-inter-service-communication-sync-async-event-driven
        description: >-
          Synchronous (HTTP, gRPC) vs Asynchronous (Message Queue, Event
          Streaming) communication. Request-Reply, Publish-Subscribe, Event
          Notification patterns. When to use RabbitMQ vs Kafka vs NATS. Avoid
          distributing monolith anti-pattern.
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-03
    title: 'Part 3: Data Architecture in Microservices'
    description: >-
      Database per Service, Saga Pattern, CQRS and Event Sourcing — distributed
      data management.
    sort_order: 3
    lessons:
      - id: 019e4a33-d407-7b20-c001-b1c2d3e4f507
        title: 'Lesson 7: Database per Service & Polyglot Persistence'
        slug: bai-7-database-per-service-polyglot-persistence
        description: >-
          Why does each service need its own database? Strategy for choosing the
          right database: PostgreSQL, MongoDB, Redis, Elasticsearch. Shared
          database anti-pattern. Data isolation, schema ownership and migration
          strategy.
        duration_minutes: 75
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e4a33-d408-7b20-c001-b1c2d3e4f508
        title: 'Lesson 8: Saga Pattern & Distributed Transactions'
        slug: bai-8-saga-pattern-distributed-transactions
        description: >-
          Why doesn't ACID work in Microservices. Saga Pattern: Choreography vs
          Orchestration. Compensating transactions, idempotency, and error
          handling. Practical example: Order → Payment → Inventory → Shipping
          workflow.
        duration_minutes: 90
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e4a33-d409-7b20-c001-b1c2d3e4f509
        title: 'Lesson 9: Event Sourcing & CQRS — When to need it, when not to?'
        slug: bai-9-event-sourcing-cqrs-khi-nao-can-khi-nao-khong
        description: >-
          Event Sourcing: stores events instead of state. CQRS: separate
          read/write models. Combine Event Sourcing + CQRS. Trade-offs,
          complexity, and decision framework. When is CQRS too complicated, when
          is it really necessary?
        duration_minutes: 75
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-04
    title: 'Part 4: Micro Frontend — Architecture & Principles'
    description: >-
      Micro Frontend overview, integration strategies, Module Federation and Web
      Components.
    sort_order: 4
    lessons:
      - id: 019e4a33-d410-7b20-c001-b1c2d3e4f510
        title: >-
          Lesson 10: What is Micro Frontend? — Benefits, Trade-offs & Decision
          Framework
        slug: bai-10-micro-frontend-la-gi-loi-ich-trade-offs-decision-framework
        description: >-
          Definition of Micro Frontend, comparison with Monolithic Frontend. 5
          core principles. Benefits: independent deployment, team autonomy,
          incremental upgrades. Trade-offs: payload size, complexity,
          consistency. Decision-making framework: when to and when not to use
          Micro Frontend.
        duration_minutes: 75
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e4a33-d411-7b20-c001-b1c2d3e4f511
        title: >-
          Lesson 11: Micro Frontend integration strategy — Server-side,
          Build-time & Runtime
        slug: bai-11-chien-luoc-tich-hop-server-side-build-time-runtime
        description: >-
          5 integration methods: Server-side Composition (SSI/ESI), Build-time
          Integration, Runtime via iframes, Runtime via JavaScript, Runtime via
          Web Components. Compare trade-offs, performance, isolation. Popular
          frameworks: single-spa, qiankun, Luigi, Piral.
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e4a33-d412-7b20-c001-b1c2d3e4f512
        title: >-
          Lesson 12: Module Federation — Webpack 5 & Vite Federation Runtime
          Module Sharing
        slug: bai-12-module-federation-webpack-vite-runtime-module-sharing
        description: >-
          Module Federation: how to share modules between applications at
          runtime. Webpack 5 Module Federation deep dive: Remote, Host, Shared
          modules. Vite Plugin Federation. Handle shared dependencies, version
          conflicts, and fallback strategies. Hands-on setup with React/Vue.
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-05
    title: 'Part 5: Building a practical Micro Frontend'
    description: >-
      Hands-on builds Shell Application, State Management, Design System and SSO
      for Micro Frontend.
    sort_order: 5
    lessons:
      - id: 019e4a33-d413-7b20-c001-b1c2d3e4f513
        title: 'Lesson 13: Shell Application — Routing, Layout & Orchestration'
        slug: bai-13-shell-application-routing-layout-orchestration
        description: >-
          Build Container/Shell App: manage layout, navigation, and lifecycle of
          micro frontends. Dynamic routing, lazy loading micro frontends. Error
          boundaries & fallback UI. 404 handling, deep linking, browser history
          management.
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e4a33-d414-7b20-c001-b1c2d3e4f514
        title: 'Lesson 14: State Management & Cross-App Communication'
        slug: bai-14-state-management-cross-app-communication
        description: >-
          State management in Micro Frontend: Local state vs Shared state.
          Custom Events, Props/Callbacks, URL-based communication. Shared state
          solutions: Zustand, Event Bus, Custom Event API. Principle: minimize
          cross-app state, prefer event-driven.
        duration_minutes: 75
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e4a33-d415-7b20-c001-b1c2d3e4f515
        title: 'Lesson 15: Design System & CSS Isolation — Uniform UI cross-team'
        slug: bai-15-design-system-css-isolation-dong-nhat-ui
        description: >-
          Building Shared Design System for Micro Frontend: Component Library,
          Design Tokens, Typography, Color Palette. CSS Isolation: Shadow DOM,
          CSS Modules, CSS-in-JS, BEM naming convention. Versioning design
          system, gradual rollout.
        duration_minutes: 75
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019e4a33-d416-7b20-c001-b1c2d3e4f516
        title: 'Lesson 16: Single Sign-On & Token Sharing between Micro Frontends'
        slug: bai-16-single-sign-on-token-sharing-giua-micro-frontends
        description: >-
          Authentication flow in Micro Frontend: centralized auth in Shell App.
          Token management: JWT in memory vs Cookie-based. SSO integration with
          Keycloak/Auth0. Token refresh, session sync, and logout sync across
          micro frontends.
        duration_minutes: 75
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-06
    title: 'Part 6: API Gateway & BFF Layer'
    description: >-
      Backend for Frontend pattern, API Gateway configuration, and GraphQL
      Federation.
    sort_order: 6
    lessons:
      - id: 019e4a33-d417-7b20-c001-b1c2d3e4f517
        title: 'Lesson 17: BFF Pattern — Connecting Micro Frontend with Microservices'
        slug: bai-17-bff-pattern-ket-noi-micro-frontend-voi-microservices
        description: >-
          Backend for Frontend: why do we need BFF, each frontend microphone has
          its own BFF. BFF aggregation, data transformation, caching. BFF with
          Node.js/Go. Trade-offs: BFF per frontend vs Shared BFF. Anti-patterns
          should be avoided.
        duration_minutes: 75
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019e4a33-d418-7b20-c001-b1c2d3e4f518
        title: 'Lesson 18: API Gateway — Routing, Auth, Rate Limiting & Load Balancing'
        slug: bai-18-api-gateway-routing-auth-rate-limiting
        description: >-
          API Gateway patterns: routing, authentication, rate limiting,
          request/response transformation. Compare Kong vs APISIX vs Envoy
          Gateway vs AWS API Gateway. Production configuration: health checks,
          circuit breaker, canary routing. API Gateway vs Service Mesh — when to
          use what.
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019e4a33-d419-7b20-c001-b1c2d3e4f519
        title: 'Lesson 19: GraphQL Federation — Unified Data Layer for Micro Frontend'
        slug: bai-19-graphql-federation-unified-data-layer
        description: >-
          Apollo Federation: supergraphs, subgraphs, routers. Each microservice
          exposes a subgraph, which Federation Gateway composes into a unified
          schema. Entity references, @key directives, and cross-service
          relationships. Performance: DataLoader, caching, persisted queries.
        duration_minutes: 90
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-07
    title: 'Part 7: Testing Full-Stack Microservices & Micro Frontend'
    description: >-
      Comprehensive testing strategy: Unit, Integration, Contract Testing, E2E
      for both backend and frontend.
    sort_order: 7
    lessons:
      - id: 019e4a33-d420-7b20-c001-b1c2d3e4f520
        title: >-
          Lesson 20: Testing Microservices — Unit, Integration & Service
          Component Testing
        slug: bai-20-testing-microservices-unit-integration-component
        description: >-
          Test Pyramid for Microservices. Unit testing with mocking external
          dependencies. Integration testing with Testcontainers. Service
          Component Test: test the entire service in isolation. Basic Contract
          Testing API.
        duration_minutes: 75
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019e4a33-d421-7b20-c001-b1c2d3e4f521
        title: 'Lesson 21: Testing Micro Frontend — Component, Visual Regression & E2E'
        slug: bai-21-testing-micro-frontend-component-visual-e2e
        description: >-
          Testing strategy for Micro Frontend: Component tests (React Testing
          Library, Vue Test Utils), Visual Regression (Chromatic, Percy), E2E
          tests (Playwright, Cypress). Testing micro frontend in isolation vs
          integrated testing. Cross-app user journey tests.
        duration_minutes: 75
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019e4a33-d422-7b20-c001-b1c2d3e4f522
        title: 'Lesson 22: Consumer-Driven Contracts — Pact for API & UI Integration'
        slug: bai-22-consumer-driven-contracts-pact-api-ui
        description: >-
          Consumer-Driven Contract Testing with Pact: why integration testing is
          not enough. Provider verification, consumer expectations. Pact for
          REST API, GraphQL, and message-based communication. Contract testing
          for Micro Frontend: verify interface contracts between Shell and
          Remote apps.
        duration_minutes: 75
        is_free: true
        sort_order: 22
        video_url: null
  - id: section-08
    title: 'Part 8: CI/CD & Deployment Strategies'
    description: >-
      Code management, CI/CD pipeline, and deployment strategies for
      Microservices & Micro Frontend.
    sort_order: 8
    lessons:
      - id: 019e4a33-d423-7b20-c001-b1c2d3e4f523
        title: 'Lesson 23: Mono-repo vs Multi-repo — Code management strategy'
        slug: bai-23-mono-repo-vs-multi-repo-chien-luoc-quan-ly-code
        description: >-
          Compare Mono-repo vs Multi-repo vs Hybrid for Microservices & Micro
          Frontend. Tools: Nx, Turborepo, Lerna. Mono-repo for Micro Frontend:
          shared build, consistent versioning. Multi-repo for Microservices:
          team autonomy. Git workflow, code ownership, dependency management.
        duration_minutes: 75
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019e4a33-d424-7b20-c001-b1c2d3e4f524
        title: 'Lesson 24: CI/CD Pipeline — Build, Test & Deploy Independently'
        slug: bai-24-cicd-pipeline-build-test-deploy-independently
        description: >-
          Design CI/CD pipeline for Microservices + Micro Frontend system.
          Independent build & deploy for each service/micro frontend. GitHub
          Actions / GitLab CI pipeline templates. Automated testing gates,
          security scanning, container image build & push. GitOps with ArgoCD.
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019e4a33-d425-7b20-c001-b1c2d3e4f525
        title: 'Lesson 25: Deployment Strategies — Canary, Blue-Green & Feature Flags'
        slug: bai-25-deployment-strategies-canary-blue-green-feature-flags
        description: >-
          Deployment strategy for Microservices: Rolling Update, Blue-Green,
          Canary Release. Independent deployment for Micro Frontend: CDN-based
          deployment, versioned bundles, dynamic remoteEntry.js. Feature Flags
          with LaunchDarkly/Unleash for safe feature rollout. Rollback
          strategies.
        duration_minutes: 75
        is_free: true
        sort_order: 25
        video_url: null
  - id: section-09
    title: 'Part 9: Observability & Production Readiness'
    description: >-
      Full-stack observability, performance optimization, and production
      readiness checklist.
    sort_order: 9
    lessons:
      - id: 019e4a33-d426-7b20-c001-b1c2d3e4f526
        title: 'Lesson 26: Full-Stack Observability — Tracing from Frontend to Backend'
        slug: bai-26-full-stack-observability-tracing-frontend-den-backend
        description: >-
          Comprehensive Observability: Frontend monitoring (Web Vitals, Error
          Tracking), API Gateway logging, Backend distributed tracing.
          OpenTelemetry for both frontend (browser SDK) and backend. Correlation
          ID throughout the request chain. Grafana dashboards, alerting
          production.
        duration_minutes: 90
        is_free: true
        sort_order: 26
        video_url: null
      - id: 019e4a33-d427-7b20-c001-b1c2d3e4f527
        title: 'Lesson 27: Performance Optimization — Bundle Size, Caching & CDN'
        slug: bai-27-performance-optimization-bundle-caching-cdn
        description: >-
          Micro Frontend optimization: shared dependencies extraction, tree
          shaking, dynamic imports, lazy loading. CDN deployment strategy: cache
          busting, immutable assets. Backend performance: connection pooling,
          N+1 queries, response compression. Core Web Vitals monitoring.
        duration_minutes: 75
        is_free: true
        sort_order: 27
        video_url: null
      - id: 019e4a33-d428-7b20-c001-b1c2d3e4f528
        title: >-
          Lesson 28: Production Readiness Checklist — Bringing the system to
          Production
        slug: bai-28-production-readiness-checklist
        description: >-
          Comprehensive checklist before going live: Security review, Load
          testing, Chaos engineering, Disaster recovery plan, Runbook, On-call
          rotation. Architecture Decision Records (ADR). Capacity planning, cost
          optimization, team structure & ownership model.
        duration_minutes: 75
        is_free: true
        sort_order: 28
        video_url: null
  - id: section-10
    title: 'Part 10: Case Studies & Migration'
    description: >-
      Practical case study of building E-Commerce Platform and migration
      instructions from Monolith.
    sort_order: 10
    lessons:
      - id: 019e4a33-d429-7b20-c001-b1c2d3e4f529
        title: 'Lesson 29: Case Study — Building a Full-Stack E-Commerce Platform'
        slug: bai-29-case-study-xay-dung-ecommerce-platform-full-stack
        description: >-
          Design a complete E-Commerce system: Product Catalog, Shopping Cart,
          Order Management, Payment, User Profile — each domain is 1
          Microservice + 1 Micro Frontend. Detailed architecture, technology
          choices, data flow diagrams, deployment architecture on Kubernetes.
        duration_minutes: 120
        is_free: true
        sort_order: 29
        video_url: null
      - id: 019e4a33-d430-7b20-c001-b1c2d3e4f530
        title: >-
          Lesson 30: Migration Guide — From Monolith to Microservices + Micro
          Frontend
        slug: bai-30-migration-guide-tu-monolith-sang-microservices-micro-frontend
        description: >-
          Practical migration strategy: Strangler Fig Pattern, Branch by
          Abstraction, Parallel Run. Migration frontend: from monolith SPA to
          Micro Frontend gradually. Migration backend: extract service from
          monolith. Team division, timeline, risk management. Lessons learned
          from IKEA, Spotify, Zalando.
        duration_minutes: 90
        is_free: true
        sort_order: 30
        video_url: null
locale: en
---

# Microservices & Micro Frontend system design — From basics to Production

## Overview

This series takes you from **zero to production** with the **Microservices Backend + Micro Frontend** architecture — the most modern architectural model for complex systems that requires multiple parallel development teams.

Different from other series that only focus on backend or frontend, this series combines **both sides** with a **full-stack** perspective, helping you understand architects how to design an **end-to-end** system from UI to Database.

## What will you learn?

### 🏗️ Architecture & Design
- System separation using **Domain-Driven Design** (Bounded Context, Event Storming)
- Design **Microservices Backend**: API Design, Inter-service Communication, Data Architecture
- Design **Micro Frontend**: Module Federation, Shell App, Design System, Cross-app Communication

### 🔗 Full-Stack integration
- **BFF (Backend for Frontend)** Pattern — bridge between Micro Frontend and Microservices
- **API Gateway** — routing, auth, rate limiting, load balancing
- **GraphQL Federation** — unified data layer for multiple micro frontends

### 🧪 Testing & Quality
- Testing Microservices: Unit, Integration, Contract Testing
- Testing Micro Frontend: Component, Visual Regression, E2E
- Consumer-Driven Contracts with Pact

### 🚀 CI/CD & Production
- Mono-repo vs Multi-repo strategy
- Independent CI/CD pipeline for each service/micro frontend
- Canary release, Blue-Green deployment, Feature Flags
- Full-stack Observability: Frontend → API → Backend tracing
- Production Readiness Checklist

### 📋 Case Studies
- **E-Commerce Platform**: complete design from architecture to deployment
- **Migration Guide**: from Monolith to Microservices + Micro Frontend (Strangler Fig, Branch by Abstraction)

## Target audience

- **Backend Engineers** want to understand Micro Frontend to design appropriate APIs
- **Frontend Engineers** want to scale the application with Micro Frontend
- **Full-Stack Engineers** want to understand end-to-end architecture
- **Software Architects** need a blueprint for the production system
- **Tech Leads** is planning to migrate from Monolith

## Requires knowledge

- Know at least 1 backend language (Node.js, Go, Java, Python)
- Know at least 1 frontend framework (React, Vue, Angular)
- Basic understanding of REST API, HTTP, Docker
- The **System Architecture: From Zero to Hero** series is a good supplement but not required

## Technology used in the series

| Layers | Technologies |
|-------|-------------|
| **Micro Frontend** | React, Module Federation (Webpack 5 / Vite), single-spa, Web Components |
| **Design System** | Storybook, Tailwind CSS, Shadow DOM, CSS Modules |
| **BFF / API Gateway** | Node.js, Kong/APISIX, GraphQL (Apollo Federation) |
| **Backend** | Node.js/Go, REST, gRPC, GraphQL |
| **Messaging** | RabbitMQ, Apache Kafka, NATS |
| **Database** | PostgreSQL, MongoDB, Redis, Elasticsearch |
| **CI/CD** | GitHub Actions, GitLab CI, ArgoCD, Docker, Kubernetes |
| **Observability** | OpenTelemetry, Grafana, Prometheus, Jaeger |
| **Auth** | Keycloak, OAuth2, JWT, OIDC |

## Study path

```
Phần 1-3: Nền tảng Backend     (9 bài)  → Hiểu mindset & thiết kế backend
Phần 4-5: Micro Frontend       (7 bài)  → Nắm vững kiến trúc & xây dựng frontend
Phần 6:   API Layer             (3 bài)  → Kết nối backend & frontend
Phần 7-8: Testing & CI/CD      (6 bài)  → Đảm bảo chất lượng & tự động hóa
Phần 9:   Production           (3 bài)  → Observability & production readiness
Phần 10:  Case Studies          (2 bài)  → Áp dụng thực tế & migration
```
