---
id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
title: 'Quarkus Microservices: Từ Cơ bản đến Production'
slug: quarkus-microservices-tu-co-ban-den-production
description: >-
  Series thực chiến xây dựng hệ thống Microservices hoàn chỉnh với Quarkus 3.x —
  framework Java "Supersonic Subatomic" được thiết kế riêng cho Cloud Native và Kubernetes.
  Sử dụng PostgreSQL làm database chính, Keycloak cho Authentication & Authorization (OIDC),
  Apache Kafka cho Event-Driven Communication, gRPC cho inter-service high-performance.
  Từ tạo project đầu tiên với Dev Services, xây dựng REST API với Panache,
  đến deploy production trên Kubernetes với GraalVM Native Image.
  Bao gồm Fault Tolerance, OpenTelemetry Observability, Contract Testing,
  CI/CD Pipeline và Production Readiness Checklist.
  Dự án thực tế: Hệ thống E-Commerce Platform gồm 5 microservices.
featured_image: uploads/2026/04/quarkus-microservices-series-banner-2026.png
level: intermediate
duration_hours: 85
lesson_count: 22
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
  id: 019c9617-facb-72da-8191-e6d44b88fb3e
  name: Lập Trình
  slug: lap-trinh
tags:
  - name: Quarkus
    slug: quarkus
  - name: Microservices
    slug: microservices
  - name: Java
    slug: java
  - name: PostgreSQL
    slug: postgresql
  - name: Keycloak
    slug: keycloak
  - name: Kafka
    slug: kafka
  - name: gRPC
    slug: grpc
  - name: Kubernetes
    slug: kubernetes
  - name: Docker
    slug: docker
  - name: cloud-native
    slug: cloud-native
  - name: OIDC
    slug: oidc
  - name: GraalVM
    slug: graalvm
  - name: rest-api
    slug: rest-api
  - name: DevOps
    slug: devops
sections:
  - id: section-01
    title: 'Phần 1: Nền tảng Quarkus & Project Setup'
    description: >-
      Làm quen với Quarkus — framework Java Cloud Native, Dev Mode, Dev Services,
      Dev UI, xây dựng REST API và kết nối PostgreSQL với Panache
    sort_order: 1
    lessons:
      - id: 019e2a10-a101-7a01-b001-f1a2b3c4d501
        title: 'Bài 1: Quarkus là gì? — Supersonic Subatomic Java cho Microservices'
        slug: bai-1-quarkus-la-gi-supersonic-subatomic-java-cho-microservices
        description: >-
          Tổng quan Quarkus, kiến trúc build-time optimization, so sánh Quarkus vs Spring Boot
          cho microservices, Quarkus Extensions ecosystem, demo khởi động <1 giây,
          và tại sao Quarkus là lựa chọn tối ưu cho Cloud Native Java 2026.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e2a10-a102-7a01-b001-f1a2b3c4d502
        title: 'Bài 2: Tạo Quarkus Project — CLI, Dev Mode, Dev UI & Live Coding'
        slug: bai-2-tao-quarkus-project-cli-dev-mode-dev-ui-live-coding
        description: >-
          Cài đặt Quarkus CLI và JDK 21+, tạo project với quarkus create,
          cấu trúc project chuẩn, Dev Mode với live reload, Dev UI dashboard,
          Dev Services tự động start PostgreSQL/Keycloak/Kafka, Continuous Testing.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e2a10-a103-7a01-b001-f1a2b3c4d503
        title: 'Bài 3: Quarkus REST — Xây dựng RESTful API chuyên nghiệp'
        slug: bai-3-quarkus-rest-xay-dung-restful-api-chuyen-nghiep
        description: >-
          Quarkus REST (Jakarta REST) với @Path, @GET, @POST, JSON serialization
          với Jackson, request/response filtering, CORS configuration,
          OpenAPI & Swagger UI tự động, API versioning strategies.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019e2a10-a104-7a01-b001-f1a2b3c4d504
        title: 'Bài 4: PostgreSQL & Hibernate ORM Panache — Data Layer hiệu quả'
        slug: bai-4-postgresql-hibernate-orm-panache-data-layer-hieu-qua
        description: >-
          Kết nối PostgreSQL với Quarkus Datasource, Hibernate ORM with Panache
          (Active Record vs Repository pattern), Entity mapping, PanacheQuery,
          pagination, sorting, custom queries với HQL/Native SQL,
          Dev Services auto-start PostgreSQL container.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e2a10-a105-7a01-b001-f1a2b3c4d505
        title: 'Bài 5: Validation, Error Handling & Configuration Profiles'
        slug: bai-5-validation-error-handling-configuration-profiles
        description: >-
          Bean Validation với Hibernate Validator (@NotBlank, @Size, custom validators),
          Exception Mapper cho error handling thống nhất, Config Profiles
          (dev/test/prod), MicroProfile Config, environment variables,
          và application.properties best practices.
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-02
    title: 'Phần 2: Thiết kế Microservices Architecture'
    description: >-
      Phân tách monolith, thiết kế Database per Service, Event-Driven Architecture
      và API Gateway cho hệ thống E-Commerce
    sort_order: 2
    lessons:
      - id: 019e2a10-a106-7a01-b001-f1a2b3c4d506
        title: 'Bài 6: Phân tách Monolith sang Microservices — DDD & Bounded Context'
        slug: bai-6-phan-tach-monolith-sang-microservices-ddd-bounded-context
        description: >-
          Domain-Driven Design (DDD) áp dụng cho E-Commerce: xác định Bounded Context
          (Product, Order, Payment, User, Notification), Aggregate Root, Entity vs Value Object,
          chiến lược Strangler Fig Pattern, và thiết kế multi-module Quarkus project.
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019e2a10-a107-7a01-b001-f1a2b3c4d507
        title: 'Bài 7: Database per Service — Flyway Migration & Multi-datasource'
        slug: bai-7-database-per-service-flyway-migration-multi-datasource
        description: >-
          Nguyên tắc Database per Service, thiết kế schema cho từng microservice,
          Flyway database migration (versioned + repeatable), Quarkus multi-datasource
          configuration, data isolation strategies và cross-service data query patterns.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e2a10-a108-7a01-b001-f1a2b3c4d508
        title: 'Bài 8: Xây dựng Product Service & Order Service'
        slug: bai-8-xay-dung-product-service-order-service
        description: >-
          Hands-on xây dựng 2 microservices đầu tiên: Product Catalog Service
          (CRUD, search, category, inventory) và Order Service (order lifecycle,
          state machine, order items), mỗi service có database riêng, Panache entities,
          REST API hoàn chỉnh, và OpenAPI documentation.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e2a10-a109-7a01-b001-f1a2b3c4d509
        title: 'Bài 9: Xây dựng Payment Service & Notification Service'
        slug: bai-9-xay-dung-payment-service-notification-service
        description: >-
          Xây dựng Payment Service (payment processing, transaction log, refund workflow,
          idempotency key) và Notification Service (email/SMS templates, notification queue,
          delivery tracking), tích hợp Qute template engine cho email,
          và Quarkus Mailer extension.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-03
    title: 'Phần 3: Security với Keycloak & OIDC'
    description: >-
      Tích hợp Keycloak làm Identity Provider, OIDC Bearer Token Authentication,
      RBAC Authorization và Keycloak Admin Client
    sort_order: 3
    lessons:
      - id: 019e2a10-a110-7a01-b001-f1a2b3c4d510
        title: 'Bài 10: Keycloak Setup — Realm, Client, Users & Roles cho Microservices'
        slug: bai-10-keycloak-setup-realm-client-users-roles-cho-microservices
        description: >-
          Cài đặt Keycloak với Dev Services (tự động start container), tạo Realm
          cho E-Commerce, đăng ký Client cho mỗi microservice, định nghĩa Roles
          (admin, customer, merchant), User attributes, và export Realm config
          cho reproducible setup.
        duration_minutes: 90
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e2a10-a111-7a01-b001-f1a2b3c4d511
        title: 'Bài 11: OIDC Bearer Token Authentication với Quarkus'
        slug: bai-11-oidc-bearer-token-authentication-voi-quarkus
        description: >-
          Quarkus OIDC extension configuration, Bearer Token validation workflow,
          JWT claims extraction (@Claim, SecurityIdentity), @RolesAllowed annotation,
          @Authenticated, token propagation giữa services, Dev Services auto-config
          Keycloak, và testing security với @TestSecurity.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e2a10-a112-7a01-b001-f1a2b3c4d512
        title: 'Bài 12: Authorization nâng cao — RBAC, Resource-based & Keycloak Admin Client'
        slug: bai-12-authorization-nang-cao-rbac-resource-based-keycloak-admin-client
        description: >-
          Fine-grained authorization với Keycloak Authorization Services,
          Resource-based permissions, Scope-based policies, @PermissionsAllowed,
          Keycloak Admin Client API (quản lý users/roles programmatically),
          Multi-tenant security patterns, và token introspection vs JWT validation.
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Phần 4: Inter-Service Communication'
    description: >-
      REST Client, gRPC high-performance và Apache Kafka Event-Driven
      cho giao tiếp giữa các microservices
    sort_order: 4
    lessons:
      - id: 019e2a10-a113-7a01-b001-f1a2b3c4d513
        title: 'Bài 13: REST Client — Service-to-Service Communication'
        slug: bai-13-rest-client-service-to-service-communication
        description: >-
          Quarkus REST Client (@RegisterRestClient, @RestClient), declarative vs programmatic
          client, timeout & retry configuration, OIDC token propagation filter,
          SmallRye Stork service discovery, client-side load balancing,
          và error handling cho inter-service calls.
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e2a10-a114-7a01-b001-f1a2b3c4d514
        title: 'Bài 14: gRPC với Quarkus — High-Performance Inter-Service Communication'
        slug: bai-14-grpc-voi-quarkus-high-performance-inter-service-communication
        description: >-
          Protobuf schema design, Quarkus gRPC extension (code generation, service implementation),
          gRPC client injection, bidirectional streaming, gRPC vs REST performance comparison,
          gRPC-Web cho browser clients, error handling với Status codes,
          và health checking qua gRPC.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e2a10-a115-7a01-b001-f1a2b3c4d515
        title: 'Bài 15: Apache Kafka & SmallRye Reactive Messaging — Event-Driven Architecture'
        slug: bai-15-apache-kafka-smallrye-reactive-messaging-event-driven-architecture
        description: >-
          Event-Driven Architecture patterns (Event Notification, Event-Carried State Transfer),
          Kafka fundamentals (topics, partitions, consumer groups),
          SmallRye Reactive Messaging (@Incoming, @Outgoing, @Channel),
          Kafka Dev Services, Avro serialization, Outbox Pattern implementation,
          dead letter queue, và exactly-once semantics.
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-05
    title: 'Phần 5: Resilience & Observability'
    description: >-
      Fault Tolerance patterns, OpenTelemetry distributed tracing,
      Micrometer metrics và centralized logging
    sort_order: 5
    lessons:
      - id: 019e2a10-a116-7a01-b001-f1a2b3c4d516
        title: 'Bài 16: SmallRye Fault Tolerance — Circuit Breaker, Retry & Fallback'
        slug: bai-16-smallrye-fault-tolerance-circuit-breaker-retry-fallback
        description: >-
          MicroProfile Fault Tolerance annotations (@Retry, @CircuitBreaker, @Timeout,
          @Fallback, @Bulkhead, @RateLimit), cấu hình parameters, programmatic API,
          metrics integration, testing fault tolerance behaviors,
          và cascade failure prevention strategies cho microservices.
        duration_minutes: 90
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019e2a10-a117-7a01-b001-f1a2b3c4d517
        title: 'Bài 17: Observability — OpenTelemetry, Metrics & Centralized Logging'
        slug: bai-17-observability-opentelemetry-metrics-centralized-logging
        description: >-
          OpenTelemetry tracing (automatic instrumentation, custom spans, context propagation),
          Micrometer metrics (custom counters, timers, gauges, Prometheus endpoint),
          Structured logging (JSON format, MDC, traceId correlation),
          Grafana OTel LGTM Dev Services (Grafana + Loki + Tempo + Mimir all-in-one),
          dashboard design và alerting.
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019e2a10-a118-7a01-b001-f1a2b3c4d518
        title: 'Bài 18: Caching với Redis, Health Checks & API Gateway'
        slug: bai-18-caching-voi-redis-health-checks-api-gateway
        description: >-
          Application caching với @CacheResult (Redis/Infinispan backend),
          cache invalidation strategies, SmallRye Health (liveness, readiness, startup probes),
          custom health checks cho database/Kafka/Keycloak connectivity,
          API Gateway pattern với Nginx/Kong, rate limiting, và request routing.
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 'Phần 6: Testing & Quality Assurance'
    description: >-
      Testing strategies cho microservices — unit test, integration test,
      contract testing và Testcontainers
    sort_order: 6
    lessons:
      - id: 019e2a10-a119-7a01-b001-f1a2b3c4d519
        title: 'Bài 19: Testing Microservices — @QuarkusTest, Testcontainers & Dev Services'
        slug: bai-19-testing-microservices-quarkustest-testcontainers-dev-services
        description: >-
          @QuarkusTest và @QuarkusIntegrationTest, JUnit 5 integration,
          CDI injection trong tests, REST Assured cho API testing,
          Dev Services cho test databases (PostgreSQL, Kafka, Keycloak auto-start),
          Testcontainers cho custom scenarios, mock với @InjectMock,
          Continuous Testing mode, và test coverage với JaCoCo.
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019e2a10-a120-7a01-b001-f1a2b3c4d520
        title: 'Bài 20: Contract Testing & Integration Testing Strategies'
        slug: bai-20-contract-testing-integration-testing-strategies
        description: >-
          Consumer-Driven Contract Testing với Pact, Provider verification,
          Pact Broker for contract sharing, @TestSecurity cho security testing,
          @QuarkusTestResource cho custom test lifecycle, WireMock cho external service mocking,
          testing Kafka consumers/producers, và testing strategies pyramid cho microservices.
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-07
    title: 'Phần 7: Deployment & Production Readiness'
    description: >-
      Container image build, GraalVM Native Image, Kubernetes deployment,
      CI/CD pipeline và production hardening
    sort_order: 7
    lessons:
      - id: 019e2a10-a121-7a01-b001-f1a2b3c4d521
        title: 'Bài 21: Container Image & GraalVM Native Executable'
        slug: bai-21-container-image-graalvm-native-executable
        description: >-
          Quarkus Container Image extensions (Jib, Docker, Buildpack),
          multi-stage Dockerfile optimization, GraalVM Native Image build
          (reflection config, resource inclusion, troubleshooting),
          JVM vs Native performance comparison (startup time, memory, throughput),
          AOT Caching với Project Leyden (JDK 24+),
          Docker Compose cho local development environment.
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019e2a10-a122-7a01-b001-f1a2b3c4d522
        title: 'Bài 22: Kubernetes Deployment, CI/CD Pipeline & Production Readiness'
        slug: bai-22-kubernetes-deployment-cicd-pipeline-production-readiness
        description: >-
          Quarkus Kubernetes extension (auto-generate Deployment, Service, Ingress),
          Helm chart packaging, ConfigMap & Secret management,
          CI/CD với GitHub Actions (build → test → native image → push → deploy),
          GitOps với ArgoCD, Horizontal Pod Autoscaler, resource limits,
          Graceful Shutdown, Production Readiness Checklist,
          và tổng kết dự án E-Commerce Microservices Platform.
        duration_minutes: 150
        is_free: true
        sort_order: 22
        video_url: null
---
