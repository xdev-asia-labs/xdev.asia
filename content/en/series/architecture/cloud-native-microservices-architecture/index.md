---
id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
title: Cloud Native Microservices Architecture
slug: cloud-native-microservices-architecture
description: >-
  Comprehensive series on Cloud Native Microservices architecture — from
  container platforms, Kubernetes, microservices design principles (DDD, Bounded
  Context), communication models (REST, gRPC, Event-Driven), to Data Management
  (CQRS, Saga, Event Sourcing), Service Mesh, Observability, Resiliency
  Patterns, CI/CD GitOps and Security. Combine solid theory with practical
  architecture for production systems.
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
  name: System architecture
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
    title: 'Part 1: Cloud Native Foundations'
    description: >-
      Cloud Native Platform — definition, principles, containers, and Kubernetes
      basics
    sort_order: 1
    lessons:
      - id: 019d8a22-c301-7a10-b001-a1b2c3d4e501
        title: 'Lesson 1: What is Cloud Native? — Principle and Twelve-Factor App'
        slug: bai-1-cloud-native-la-gi-nguyen-ly-va-twelve-factor-app
        description: >-
          Defining Cloud Native according to CNCF, comparing Traditional vs
          Cloud Native, Twelve-Factor App methodology, and why Cloud Native is
          an inevitable trend for modern applications.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a22-c302-7a10-b001-a1b2c3d4e502
        title: 'Lesson 2: Containers & Docker — Application packaging platform'
        slug: bai-2-container-docker-nen-tang-dong-goi-ung-dung
        description: >-
          Container vs VM, Docker architecture, Dockerfile best practices,
          multi-stage build, image security scanning, and basic container
          networking.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a22-c303-7a10-b001-a1b2c3d4e503
        title: 'Lesson 3: Kubernetes Architecture & Core Concepts'
        slug: bai-3-kubernetes-architecture-core-concepts
        description: >-
          Kubernetes architecture (Control Plane, Worker Node), core resources
          (Pod, Deployment, Service, ConfigMap, Secret), Namespace strategy, and
          how Kubernetes orchestrate containers automatically.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Part 2: Microservices Design & Communication Patterns'
    description: >-
      Microservices design principles, DDD, and service-to-service communication
      models
    sort_order: 2
    lessons:
      - id: 019d8a22-c304-7a10-b001-a1b2c3d4e504
        title: 'Lesson 4: Microservices Design Principles — SRP, DDD & Bounded Context'
        slug: bai-4-microservices-design-principles-srp-ddd-bounded-context
        description: >-
          What are microservices, Single Responsibility Principle, Domain-Driven
          Design, Bounded Context to define service boundaries, Loose Coupling &
          High Cohesion, when should and should not use microservices.
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a22-c305-7a10-b001-a1b2c3d4e505
        title: 'Lesson 5: Synchronous Communication — REST API & gRPC'
        slug: bai-5-synchronous-communication-rest-api-grpc
        description: >-
          REST API design best practices, gRPC vs Protobuf, HTTP/2 multiplexing,
          comparing REST vs gRPC, when to choose which one, API versioning
          strategies.
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a22-c306-7a10-b001-a1b2c3d4e506
        title: 'Lesson 6: Asynchronous Communication — Message Queue & Event Streaming'
        slug: bai-6-asynchronous-communication-message-queue-event-streaming
        description: >-
          Message Queue (RabbitMQ) vs Event Streaming (Apache Kafka), Pub/Sub
          pattern, Point-to-Point pattern, event schema design, idempotency, and
          when to choose async over sync.
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a22-c307-7a10-b001-a1b2c3d4e507
        title: 'Lesson 7: API Gateway Pattern — Kong, APISIX & Envoy'
        slug: bai-7-api-gateway-pattern-kong-apisix-envoy
        description: >-
          What is API Gateway, functions (routing, auth, rate limiting, protocol
          translation), compare Kong vs APISIX vs Envoy vs Traefik, Backend for
          Frontend (BFF) pattern, configure API Gateway on Kubernetes.
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'Part 3: Data Management in Microservices'
    description: >-
      Distributed data management — Database per Service, Event Sourcing, CQRS,
      Saga Pattern
    sort_order: 3
    lessons:
      - id: 019d8a22-c308-7a10-b001-a1b2c3d4e508
        title: 'Lesson 8: Database per Service & Polyglot Persistence'
        slug: bai-8-database-per-service-polyglot-persistence
        description: >-
          Database per Service principles, why not share databases, Polyglot
          Persistence (choose the appropriate DB for each service), data
          ownership and cross-service data query strategies.
        duration_minutes: 90
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a22-c309-7a10-b001-a1b2c3d4e509
        title: 'Lesson 9: Event Sourcing & CQRS'
        slug: bai-9-event-sourcing-cqrs
        description: >-
          Event Sourcing — save state as event string, Event Store, snapshot
          optimization. CQRS — separate Command and Query models, eventual
          consistency, separate read/write database, when to use CQRS.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a22-c310-7a10-b001-a1b2c3d4e510
        title: 'Lesson 10: Saga Pattern — Distributed Transactions'
        slug: bai-10-saga-pattern-distributed-transactions
        description: >-
          Why 2PC is not suitable for microservices, Saga Pattern (Choreography
          vs Orchestration), compensating transactions, Saga Orchestrator
          implementation, error handling and dead letter queue.
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a22-c311-7a10-b001-a1b2c3d4e511
        title: >-
          Lesson 11: Data Consistency Patterns — Outbox, CDC & Eventual
          Consistency
        slug: bai-11-data-consistency-patterns-outbox-cdc-eventual-consistency
        description: >-
          CAP Theorem in practice, Eventual Consistency, Outbox Pattern, Change
          Data Capture (CDC) with Debezium, idempotent consumers, and end-to-end
          data consistency strategy.
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-04
    title: 'Part 4: Service Mesh & Networking'
    description: 'Service Mesh, Service Discovery, mTLS and Zero Trust networking'
    sort_order: 4
    lessons:
      - id: 019d8a22-c312-7a10-b001-a1b2c3d4e512
        title: 'Lesson 12: Service Discovery & Registry'
        slug: bai-12-service-discovery-registry
        description: >-
          Client-side vs Server-side discovery, Service Registry (Consul, etcd),
          Kubernetes DNS-based discovery, health checking, load balancing
          algorithms and service endpoint management.
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a22-c313-7a10-b001-a1b2c3d4e513
        title: 'Lesson 13: Service Mesh — Istio & Linkerd'
        slug: bai-13-service-mesh-istio-linkerd
        description: >-
          Service Mesh architecture (Data Plane + Control Plane), Sidecar Proxy
          pattern, Istio components (Pilot, Citadel, Galley), traffic management
          (canary, A/B), comparison of Istio vs Linkerd, installation and
          configuration on Kubernetes.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a22-c314-7a10-b001-a1b2c3d4e514
        title: 'Lesson 14: Zero Trust Security & mTLS'
        slug: bai-14-zero-trust-security-mtls
        description: >-
          Zero Trust Architecture principles, mutual TLS (mTLS) for
          service-to-service, automatic certificate management, authorization
          policies in Service Mesh, network policies in Kubernetes.
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
  - id: section-05
    title: 'Part 5: Observability — Three pillars'
    description: 'Metrics, Logging, Distributed Tracing and OpenTelemetry'
    sort_order: 5
    lessons:
      - id: 019d8a22-c315-7a10-b001-a1b2c3d4e515
        title: 'Lesson 15: Metrics — Prometheus & Grafana'
        slug: bai-15-metrics-prometheus-grafana
        description: >-
          RED Method, USE Method, Prometheus architecture, basic PromQL,
          ServiceMonitor in Kubernetes, Grafana dashboard design, alerting rules
          and Alertmanager configuration.
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a22-c316-7a10-b001-a1b2c3d4e516
        title: 'Lesson 16: Logging — Structured Logging, Loki & ELK Stack'
        slug: bai-16-logging-structured-logging-loki-elk
        description: >-
          Structured logging best practices, log levels strategy, Fluent Bit log
          collection, Loki vs Elasticsearch, LogQL, log correlation with
          traceId, log retention policies and cost optimization.
        duration_minutes: 90
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a22-c317-7a10-b001-a1b2c3d4e517
        title: 'Lesson 17: Distributed Tracing — OpenTelemetry & Jaeger'
        slug: bai-17-distributed-tracing-opentelemetry-jaeger
        description: >-
          Distributed Tracing concepts (Trace, Span, Context Propagation),
          OpenTelemetry SDK instrumentation, OTLP protocol, OpenTelemetry
          Collector configuration, Jaeger/Tempo backend, trace analysis and
          performance debugging.
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
  - id: section-06
    title: 'Part 6: Resiliency Patterns'
    description: 'Circuit Breaker, Retry, Bulkhead, Chaos Engineering and fault tolerance'
    sort_order: 6
    lessons:
      - id: 019d8a22-c318-7a10-b001-a1b2c3d4e518
        title: 'Lesson 18: Circuit Breaker & Retry Patterns'
        slug: bai-18-circuit-breaker-retry-patterns
        description: >-
          Circuit Breaker states (Closed, Open, Half-Open), Retry with
          Exponential Backoff & Jitter, Timeout pattern, fallback strategies,
          implementation with Resilience4j/Polly, cascade failure prevention.
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a22-c319-7a10-b001-a1b2c3d4e519
        title: 'Lesson 19: Bulkhead, Rate Limiting & Health Check Patterns'
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
        title: 'Lesson 20: Chaos Engineering — Verifying system reliability'
        slug: bai-20-chaos-engineering-kiem-chung-do-tin-cay
        description: >-
          Chaos Engineering principles, Chaos Monkey & LitmusChaos, designing
          chaos experiments, steady state hypothesis, blast radius control, game
          days, and building a culture of resilience.
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-07
    title: 'Part 7: CI/CD & Deployment Strategies'
    description: 'CI/CD Pipeline, GitOps with ArgoCD, and secure deployment strategies'
    sort_order: 7
    lessons:
      - id: 019d8a22-c321-7a10-b001-a1b2c3d4e521
        title: 'Lesson 21: CI/CD Pipeline for Microservices'
        slug: bai-21-cicd-pipeline-cho-microservices
        description: >-
          CI/CD architecture for multi-service, pipeline per service, build →
          test → scan → deploy flow, container image build & push, automated
          testing strategy (unit, integration, contract, E2E), monorepo vs
          polyrepo CI/CD.
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a22-c322-7a10-b001-a1b2c3d4e522
        title: 'Lesson 22: GitOps with ArgoCD'
        slug: bai-22-gitops-voi-argocd
        description: >-
          GitOps principles (Git as single source of truth), ArgoCD
          architecture, Application manifest, sync policies, Kustomize overlays
          for multi-env, automated rollback, ApplicationSet for multi-cluster.
        duration_minutes: 90
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a22-c323-7a10-b001-a1b2c3d4e523
        title: >-
          Lesson 23: Deployment Strategies — Canary, Blue/Green & Progressive
          Delivery
        slug: bai-23-deployment-strategies-canary-blue-green-progressive-delivery
        description: >-
          Rolling Update, Blue/Green Deployment, Canary Release, A/B Testing,
          progressive delivery with Argo Rollouts/Flagger, automated canary
          analysis, rollback strategies and feature flags.
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
  - id: section-08
    title: 'Part 8: Security & Production Readiness'
    description: 'Security, secrets management, and production readiness checklist'
    sort_order: 8
    lessons:
      - id: 019d8a22-c324-7a10-b001-a1b2c3d4e524
        title: 'Lesson 24: Authentication & Authorization — OAuth2, JWT & OIDC'
        slug: bai-24-authentication-authorization-oauth2-jwt-oidc
        description: >-
          OAuth2 flows, JWT structure & validation, OpenID Connect, centralized
          auth with Keycloak/Auth0, token propagation in microservices, API
          Gateway auth integration, RBAC vs ABAC.
        duration_minutes: 120
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a22-c325-7a10-b001-a1b2c3d4e525
        title: 'Lesson 25: Secrets Management & Container Security'
        slug: bai-25-secrets-management-container-security
        description: >-
          HashiCorp Vault, dynamic secrets, Kubernetes Secrets + Sealed Secrets,
          CSI Secret Store Driver, container image scanning (Trivy), Pod
          Security Standards, runtime security (Falco), supply chain security
          (Sigstore/Cosign).
        duration_minutes: 90
        is_free: true
        sort_order: 25
        video_url: null
      - id: 019d8a22-c326-7a10-b001-a1b2c3d4e526
        title: 'Lesson 26: Production Readiness Checklist & Implementation Roadmap'
        slug: bai-26-production-readiness-checklist-lo-trinh-trien-khai
        description: >-
          Architecture decision checklist, recommended technology stack, 4-phase
          implementation roadmap (Foundation → Core Platform → Advanced →
          Optimization), capacity planning, cost optimization, runbook template
          and disaster recovery planning.
        duration_minutes: 90
        is_free: true
        sort_order: 26
        video_url: null
locale: en
---

