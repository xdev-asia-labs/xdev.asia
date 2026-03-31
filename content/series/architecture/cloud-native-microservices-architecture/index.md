---
id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
title: 'Cloud Native Microservices Architecture'
slug: cloud-native-microservices-architecture
description: >-
  Series toàn diện về kiến trúc Cloud Native Microservices — từ nền tảng container,
  Kubernetes, nguyên lý thiết kế microservices (DDD, Bounded Context), các mô hình
  giao tiếp (REST, gRPC, Event-Driven), đến Data Management (CQRS, Saga, Event Sourcing),
  Service Mesh, Observability, Resiliency Patterns, CI/CD GitOps và Security.
  Kết hợp lý thuyết vững chắc với kiến trúc thực tế cho hệ thống production.
featured_image: uploads/2026/03/cloud-native-microservices-series-banner-2026.png
level: intermediate
duration_hours: 70
lesson_count: 26
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-31T10:00:00.000000Z'
created_at: '2026-03-31T10:00:00.000000Z'
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
  - name: cloud-native
    slug: cloud-native
  - name: kubernetes
    slug: kubernetes
  - name: Docker
    slug: docker
  - name: system-design
    slug: system-design
  - name: API Gateway
    slug: api-gateway
  - name: service-mesh
    slug: service-mesh
  - name: event-driven
    slug: event-driven
  - name: DevOps
    slug: devops
  - name: observability
    slug: observability
  - name: CQRS
    slug: cqrs
  - name: gRPC
    slug: grpc
  - name: Kafka
    slug: kafka
  - name: Istio
    slug: istio
  - name: ArgoCD
    slug: argocd
  - name: security
    slug: security
  - name: production
    slug: production
sections:
  - id: section-01
    title: 'Phần 1: Cloud Native Foundations'
    description: 'Nền tảng Cloud Native — định nghĩa, nguyên lý, container và Kubernetes cơ bản'
    sort_order: 1
    lessons:
      - id: 019d8a22-c301-7a10-b001-a1b2c3d4e501
        title: 'Bài 1: Cloud Native là gì? — Nguyên lý và Twelve-Factor App'
        slug: bai-1-cloud-native-la-gi-nguyen-ly-va-twelve-factor-app
        description: >-
          Định nghĩa Cloud Native theo CNCF, so sánh Traditional vs Cloud Native,
          phương pháp luận Twelve-Factor App, và tại sao Cloud Native là xu hướng
          tất yếu cho ứng dụng hiện đại.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a22-c302-7a10-b001-a1b2c3d4e502
        title: 'Bài 2: Container & Docker — Nền tảng đóng gói ứng dụng'
        slug: bai-2-container-docker-nen-tang-dong-goi-ung-dung
        description: >-
          Container vs VM, Docker architecture, Dockerfile best practices,
          multi-stage build, image security scanning, và container networking cơ bản.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a22-c303-7a10-b001-a1b2c3d4e503
        title: 'Bài 3: Kubernetes Architecture & Core Concepts'
        slug: bai-3-kubernetes-architecture-core-concepts
        description: >-
          Kiến trúc Kubernetes (Control Plane, Worker Node), các resource cốt lõi
          (Pod, Deployment, Service, ConfigMap, Secret), Namespace strategy,
          và cách Kubernetes orchestrate container tự động.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Phần 2: Microservices Design & Communication Patterns'
    description: 'Nguyên lý thiết kế microservices, DDD, và các mô hình giao tiếp service-to-service'
    sort_order: 2
    lessons:
      - id: 019d8a22-c304-7a10-b001-a1b2c3d4e504
        title: 'Bài 4: Microservices Design Principles — SRP, DDD & Bounded Context'
        slug: bai-4-microservices-design-principles-srp-ddd-bounded-context
        description: >-
          Microservices là gì, Single Responsibility Principle, Domain-Driven Design,
          Bounded Context để xác định ranh giới service, Loose Coupling & High Cohesion,
          khi nào nên và không nên dùng microservices.
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a22-c305-7a10-b001-a1b2c3d4e505
        title: 'Bài 5: Synchronous Communication — REST API & gRPC'
        slug: bai-5-synchronous-communication-rest-api-grpc
        description: >-
          REST API design best practices, gRPC với Protobuf, HTTP/2 multiplexing,
          so sánh REST vs gRPC, khi nào chọn cái nào, API versioning strategies.
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a22-c306-7a10-b001-a1b2c3d4e506
        title: 'Bài 6: Asynchronous Communication — Message Queue & Event Streaming'
        slug: bai-6-asynchronous-communication-message-queue-event-streaming
        description: >-
          Message Queue (RabbitMQ) vs Event Streaming (Apache Kafka), Pub/Sub pattern,
          Point-to-Point pattern, event schema design, idempotency, và khi nào
          chọn async over sync.
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a22-c307-7a10-b001-a1b2c3d4e507
        title: 'Bài 7: API Gateway Pattern — Kong, APISIX & Envoy'
        slug: bai-7-api-gateway-pattern-kong-apisix-envoy
        description: >-
          API Gateway là gì, chức năng (routing, auth, rate limiting, protocol translation),
          so sánh Kong vs APISIX vs Envoy vs Traefik, Backend for Frontend (BFF) pattern,
          cấu hình API Gateway trên Kubernetes.
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'Phần 3: Data Management trong Microservices'
    description: 'Quản lý dữ liệu phân tán — Database per Service, Event Sourcing, CQRS, Saga Pattern'
    sort_order: 3
    lessons:
      - id: 019d8a22-c308-7a10-b001-a1b2c3d4e508
        title: 'Bài 8: Database per Service & Polyglot Persistence'
        slug: bai-8-database-per-service-polyglot-persistence
        description: >-
          Nguyên tắc Database per Service, tại sao không chia sẻ database,
          Polyglot Persistence (chọn DB phù hợp cho từng service), data ownership
          và cross-service data query strategies.
        duration_minutes: 90
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a22-c309-7a10-b001-a1b2c3d4e509
        title: 'Bài 9: Event Sourcing & CQRS'
        slug: bai-9-event-sourcing-cqrs
        description: >-
          Event Sourcing — lưu trạng thái dưới dạng chuỗi event, Event Store,
          snapshot optimization. CQRS — tách Command và Query model, eventual consistency,
          read/write database riêng biệt, khi nào nên dùng CQRS.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a22-c310-7a10-b001-a1b2c3d4e510
        title: 'Bài 10: Saga Pattern — Distributed Transactions'
        slug: bai-10-saga-pattern-distributed-transactions
        description: >-
          Tại sao 2PC không phù hợp cho microservices, Saga Pattern (Choreography
          vs Orchestration), compensating transactions, Saga Orchestrator implementation,
          error handling và dead letter queue.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a22-c311-7a10-b001-a1b2c3d4e511
        title: 'Bài 11: Data Consistency Patterns — Outbox, CDC & Eventual Consistency'
        slug: bai-11-data-consistency-patterns-outbox-cdc-eventual-consistency
        description: >-
          CAP Theorem trong thực tế, Eventual Consistency, Outbox Pattern,
          Change Data Capture (CDC) với Debezium, idempotent consumers,
          và chiến lược đảm bảo data consistency end-to-end.
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-04
    title: 'Phần 4: Service Mesh & Networking'
    description: 'Service Mesh, Service Discovery, mTLS và Zero Trust networking'
    sort_order: 4
    lessons:
      - id: 019d8a22-c312-7a10-b001-a1b2c3d4e512
        title: 'Bài 12: Service Discovery & Registry'
        slug: bai-12-service-discovery-registry
        description: >-
          Client-side vs Server-side discovery, Service Registry (Consul, etcd),
          Kubernetes DNS-based discovery, health checking, load balancing algorithms
          và service endpoint management.
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a22-c313-7a10-b001-a1b2c3d4e513
        title: 'Bài 13: Service Mesh — Istio & Linkerd'
        slug: bai-13-service-mesh-istio-linkerd
        description: >-
          Service Mesh architecture (Data Plane + Control Plane), Sidecar Proxy pattern,
          Istio components (Pilot, Citadel, Galley), traffic management (canary, A/B),
          so sánh Istio vs Linkerd, cài đặt và cấu hình trên Kubernetes.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a22-c314-7a10-b001-a1b2c3d4e514
        title: 'Bài 14: Zero Trust Security & mTLS'
        slug: bai-14-zero-trust-security-mtls
        description: >-
          Zero Trust Architecture principles, mutual TLS (mTLS) cho service-to-service,
          certificate management tự động, authorization policies trong Service Mesh,
          network policies trong Kubernetes.
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
  - id: section-05
    title: 'Phần 5: Observability — Ba trụ cột'
    description: 'Metrics, Logging, Distributed Tracing và OpenTelemetry'
    sort_order: 5
    lessons:
      - id: 019d8a22-c315-7a10-b001-a1b2c3d4e515
        title: 'Bài 15: Metrics — Prometheus & Grafana'
        slug: bai-15-metrics-prometheus-grafana
        description: >-
          RED Method, USE Method, Prometheus architecture, PromQL cơ bản,
          ServiceMonitor trong Kubernetes, Grafana dashboard design,
          alerting rules và Alertmanager configuration.
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a22-c316-7a10-b001-a1b2c3d4e516
        title: 'Bài 16: Logging — Structured Logging, Loki & ELK Stack'
        slug: bai-16-logging-structured-logging-loki-elk
        description: >-
          Structured logging best practices, log levels strategy, Fluent Bit
          log collection, Loki vs Elasticsearch, LogQL, log correlation với
          traceId, log retention policies và cost optimization.
        duration_minutes: 90
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a22-c317-7a10-b001-a1b2c3d4e517
        title: 'Bài 17: Distributed Tracing — OpenTelemetry & Jaeger'
        slug: bai-17-distributed-tracing-opentelemetry-jaeger
        description: >-
          Distributed Tracing concepts (Trace, Span, Context Propagation),
          OpenTelemetry SDK instrumentation, OTLP protocol,
          OpenTelemetry Collector configuration, Jaeger/Tempo backend,
          trace analysis và performance debugging.
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
  - id: section-06
    title: 'Phần 6: Resiliency Patterns'
    description: 'Circuit Breaker, Retry, Bulkhead, Chaos Engineering và fault tolerance'
    sort_order: 6
    lessons:
      - id: 019d8a22-c318-7a10-b001-a1b2c3d4e518
        title: 'Bài 18: Circuit Breaker & Retry Patterns'
        slug: bai-18-circuit-breaker-retry-patterns
        description: >-
          Circuit Breaker states (Closed, Open, Half-Open), Retry với
          Exponential Backoff & Jitter, Timeout pattern, fallback strategies,
          implementation với Resilience4j/Polly, cascade failure prevention.
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a22-c319-7a10-b001-a1b2c3d4e519
        title: 'Bài 19: Bulkhead, Rate Limiting & Health Check Patterns'
        slug: bai-19-bulkhead-rate-limiting-health-check-patterns
        description: >-
          Bulkhead Pattern (thread pool isolation), Rate Limiting algorithms
          (Token Bucket, Sliding Window), Health Check pattern (liveness,
          readiness, startup probes), graceful degradation strategies.
        duration_minutes: 90
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a22-c320-7a10-b001-a1b2c3d4e520
        title: 'Bài 20: Chaos Engineering — Kiểm chứng độ tin cậy hệ thống'
        slug: bai-20-chaos-engineering-kiem-chung-do-tin-cay
        description: >-
          Chaos Engineering principles, Chaos Monkey & LitmusChaos,
          thiết kế chaos experiments, steady state hypothesis,
          blast radius control, game days, và building a culture of resilience.
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-07
    title: 'Phần 7: CI/CD & Deployment Strategies'
    description: 'CI/CD Pipeline, GitOps với ArgoCD, và các chiến lược deployment an toàn'
    sort_order: 7
    lessons:
      - id: 019d8a22-c321-7a10-b001-a1b2c3d4e521
        title: 'Bài 21: CI/CD Pipeline cho Microservices'
        slug: bai-21-cicd-pipeline-cho-microservices
        description: >-
          CI/CD architecture cho multi-service, pipeline per service,
          build → test → scan → deploy flow, container image build & push,
          automated testing strategy (unit, integration, contract, E2E),
          monorepo vs polyrepo CI/CD.
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a22-c322-7a10-b001-a1b2c3d4e522
        title: 'Bài 22: GitOps với ArgoCD'
        slug: bai-22-gitops-voi-argocd
        description: >-
          GitOps principles (Git as single source of truth), ArgoCD architecture,
          Application manifest, sync policies, Kustomize overlays cho multi-env,
          automated rollback, ApplicationSet cho multi-cluster.
        duration_minutes: 90
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a22-c323-7a10-b001-a1b2c3d4e523
        title: 'Bài 23: Deployment Strategies — Canary, Blue/Green & Progressive Delivery'
        slug: bai-23-deployment-strategies-canary-blue-green-progressive-delivery
        description: >-
          Rolling Update, Blue/Green Deployment, Canary Release, A/B Testing,
          progressive delivery với Argo Rollouts/Flagger, automated canary analysis,
          rollback strategies và feature flags.
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
  - id: section-08
    title: 'Phần 8: Security & Production Readiness'
    description: 'Bảo mật, secrets management, và checklist production readiness'
    sort_order: 8
    lessons:
      - id: 019d8a22-c324-7a10-b001-a1b2c3d4e524
        title: 'Bài 24: Authentication & Authorization — OAuth2, JWT & OIDC'
        slug: bai-24-authentication-authorization-oauth2-jwt-oidc
        description: >-
          OAuth2 flows, JWT structure & validation, OpenID Connect,
          centralized auth với Keycloak/Auth0, token propagation trong microservices,
          API Gateway auth integration, RBAC vs ABAC.
        duration_minutes: 120
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a22-c325-7a10-b001-a1b2c3d4e525
        title: 'Bài 25: Secrets Management & Container Security'
        slug: bai-25-secrets-management-container-security
        description: >-
          HashiCorp Vault, dynamic secrets, Kubernetes Secrets + Sealed Secrets,
          CSI Secret Store Driver, container image scanning (Trivy),
          Pod Security Standards, runtime security (Falco),
          supply chain security (Sigstore/Cosign).
        duration_minutes: 90
        is_free: true
        sort_order: 25
        video_url: null
      - id: 019d8a22-c326-7a10-b001-a1b2c3d4e526
        title: 'Bài 26: Production Readiness Checklist & Lộ trình triển khai'
        slug: bai-26-production-readiness-checklist-lo-trinh-trien-khai
        description: >-
          Architecture decision checklist, technology stack khuyến nghị,
          lộ trình triển khai 4 phases (Foundation → Core Platform → Advanced
          → Optimization), capacity planning, cost optimization,
          runbook template và disaster recovery planning.
        duration_minutes: 90
        is_free: true
        sort_order: 26
        video_url: null
---
