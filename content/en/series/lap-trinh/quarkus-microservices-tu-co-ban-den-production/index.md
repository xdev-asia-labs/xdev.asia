---
id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
title: 'Quarkus Microservices: From Basics to Production'
slug: quarkus-microservices-tu-co-ban-den-production
description: >-
  A hands-on series on building a complete Microservices system with Quarkus 3.x
  — the "Supersonic Subatomic" Java framework designed specifically for Cloud
  Native and Kubernetes. Using PostgreSQL as main database, Keycloak for
  Authentication & Authorization (OIDC), Apache Kafka for Event-Driven
  Communication, gRPC for high-performance inter-service. From creating your
  first project with Dev Services, building a REST API with Panache, to
  deploying production on Kubernetes with GraalVM Native Image. Includes Fault
  Tolerance, OpenTelemetry Observability, Contract Testing, CI/CD Pipeline and
  Production Readiness Checklist. Actual project: E-Commerce Platform system
  includes 5 microservices.
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
  name: Programming
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
    title: 'Part 1: Quarkus Platform & Project Setup'
    description: >-
      Get acquainted with Quarkus — Java Cloud Native framework, Dev Mode, Dev
      Services, Dev UI, build REST API and connect PostgreSQL with Panache
    sort_order: 1
    lessons:
      - id: 019e2a10-a101-7a01-b001-f1a2b3c4d501
        title: >-
          Lesson 1: What is Quarkus? — Supersonic Subatomic Java for
          Microservices
        slug: bai-1-quarkus-la-gi-supersonic-subatomic-java-cho-microservices
        description: >-
          Quarkus overview, build-time optimization architecture, Quarkus vs
          Spring Boot comparison for microservices, Quarkus Extensions
          ecosystem, <1 second startup demo, and why Quarkus is the optimal
          choice for Cloud Native Java 2026.
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e2a10-a102-7a01-b001-f1a2b3c4d502
        title: >-
          Lesson 2: Creating Quarkus Project — CLI, Dev Mode, Dev UI & Live
          Coding
        slug: bai-2-tao-quarkus-project-cli-dev-mode-dev-ui-live-coding
        description: >-
          Install Quarkus CLI and JDK 21+, create project with quarkus create,
          standard project structure, Dev Mode with live reload, Dev UI
          dashboard, Dev Services automatically start PostgreSQL/Keycloak/Kafka,
          Continuous Testing.
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e2a10-a103-7a01-b001-f1a2b3c4d503
        title: 'Lesson 3: Quarkus REST — Building a professional RESTful API'
        slug: bai-3-quarkus-rest-xay-dung-restful-api-chuyen-nghiep
        description: >-
          Quarkus REST (Jakarta REST) ​​with @Path, @GET, @POST, JSON
          serialization with Jackson, request/response filtering, CORS
          configuration, OpenAPI & Swagger UI automation, API versioning
          strategies.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019e2a10-a104-7a01-b001-f1a2b3c4d504
        title: 'Lesson 4: PostgreSQL & Hibernate ORM Panache — Effective Data Layer'
        slug: bai-4-postgresql-hibernate-orm-panache-data-layer-hieu-qua
        description: >-
          Connect PostgreSQL with Quarkus Datasource, Hibernate ORM with Panache
          (Active Record vs Repository pattern), Entity mapping, PanacheSQL,
          pagination, sorting, custom queries with HQL/Native SQL, Dev Services
          auto-start PostgreSQL container.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e2a10-a105-7a01-b001-f1a2b3c4d505
        title: 'Lesson 5: Validation, Error Handling & Configuration Profiles'
        slug: bai-5-validation-error-handling-configuration-profiles
        description: >-
          Bean Validation with Hibernate Validator (@NotBlank, @Size, custom
          validators), Exception Mapper for unified error handling, Config
          Profiles (dev/test/prod), MicroProfile Config, environment variables,
          and application.properties best practices.
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-02
    title: 'Part 2: Designing Microservices Architecture'
    description: >-
      Analyze monolith, design Database per Service, Event-Driven Architecture
      and API Gateway for E-Commerce system
    sort_order: 2
    lessons:
      - id: 019e2a10-a106-7a01-b001-f1a2b3c4d506
        title: >-
          Lesson 6: Decomposing Monolith to Microservices — DDD & Bounded
          Context
        slug: bai-6-phan-tach-monolith-sang-microservices-ddd-bounded-context
        description: >-
          Domain-Driven Design (DDD) applied to E-Commerce: defining Bounded
          Context (Product, Order, Payment, User, Notification), Aggregate Root,
          Entity vs Value Object, Strangler Fig Pattern strategy, and
          multi-module Quarkus project design.
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019e2a10-a107-7a01-b001-f1a2b3c4d507
        title: 'Lesson 7: Database per Service — Flyway Migration & Multi-datasource'
        slug: bai-7-database-per-service-flyway-migration-multi-datasource
        description: >-
          Database per Service principles, schema design for each microservice,
          Flyway database migration (versioned + repeatable), Quarkus
          multi-datasource configuration, data isolation strategies and
          cross-service data query patterns.
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e2a10-a108-7a01-b001-f1a2b3c4d508
        title: 'Lesson 8: Building Product Service & Order Service'
        slug: bai-8-xay-dung-product-service-order-service
        description: >-
          Hands-on built the first two microservices: Product Catalog Service
          (CRUD, search, category, inventory) and Order Service (order
          lifecycle, state machine, order items), each with its own database,
          Panache entities, complete REST API, and OpenAPI documentation.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e2a10-a109-7a01-b001-f1a2b3c4d509
        title: 'Lesson 9: Building Payment Service & Notification Service'
        slug: bai-9-xay-dung-payment-service-notification-service
        description: >-
          Build Payment Service (payment processing, transaction log, refund
          workflow, idempotency key) and Notification Service (email/SMS
          templates, notification queue, delivery tracking), integrate Qute
          template engine for email, and Quarkus Mailer extension.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-03
    title: 'Part 3: Security with Keycloak & OIDC'
    description: >-
      Integrate Keycloak as Identity Provider, OIDC Bearer Token Authentication,
      RBAC Authorization and Keycloak Admin Client
    sort_order: 3
    lessons:
      - id: 019e2a10-a110-7a01-b001-f1a2b3c4d510
        title: >-
          Lesson 10: Keycloak Setup — Realm, Client, Users & Roles for
          Microservices
        slug: bai-10-keycloak-setup-realm-client-users-roles-cho-microservices
        description: >-
          Install Keycloak with Dev Services (automatically start container),
          create Realm for E-Commerce, register Client for each microservice,
          define Roles (admin, customer, merchant), User attributes, and export
          Realm config for reproducible setup.
        duration_minutes: 90
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e2a10-a111-7a01-b001-f1a2b3c4d511
        title: 'Lesson 11: OIDC Bearer Token Authentication with Quarkus'
        slug: bai-11-oidc-bearer-token-authentication-voi-quarkus
        description: >-
          Quarkus OIDC extension configuration, Bearer Token validation
          workflow, JWT claims extraction (@Claim, SecurityIdentity),
          @RolesAllowed annotation, @Authenticated, token propagation between
          services, Dev Services auto-config Keycloak, and security testing with
          @TestSecurity.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e2a10-a112-7a01-b001-f1a2b3c4d512
        title: >-
          Lesson 12: Advanced Authorization — RBAC, Resource-based & Keycloak
          Admin Client
        slug: >-
          bai-12-authorization-nang-cao-rbac-resource-based-keycloak-admin-client
        description: >-
          Fine-grained authorization with Keycloak Authorization Services,
          Resource-based permissions, Scope-based policies, @PermissionsAllowed,
          Keycloak Admin Client API (manage users/roles programmatically),
          Multi-tenant security patterns, and token introspection vs JWT
          validation.
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Part 4: Inter-Service Communication'
    description: >-
      REST Client, gRPC high-performance and Apache Kafka Event-Driven for
      communication between microservices
    sort_order: 4
    lessons:
      - id: 019e2a10-a113-7a01-b001-f1a2b3c4d513
        title: 'Lesson 13: REST Client — Service-to-Service Communication'
        slug: bai-13-rest-client-service-to-service-communication
        description: >-
          Quarkus REST Client (@RegisterRestClient, @RestClient), declarative vs
          programmatic client, timeout & retry configuration, OIDC token
          propagation filter, SmallRye Stork service discovery, client-side load
          balancing, and error handling for inter-service calls.
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e2a10-a114-7a01-b001-f1a2b3c4d514
        title: >-
          Lesson 14: gRPC with Quarkus — High-Performance Inter-Service
          Communication
        slug: bai-14-grpc-voi-quarkus-high-performance-inter-service-communication
        description: >-
          Protobuf schema design, Quarkus gRPC extension (code generation,
          service implementation), gRPC client injection, bidirectional
          streaming, gRPC vs REST performance comparison, gRPC-Web for browser
          clients, error handling with Status codes, and health checking via
          gRPC.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e2a10-a115-7a01-b001-f1a2b3c4d515
        title: >-
          Lesson 15: Apache Kafka & SmallRye Reactive Messaging — Event-Driven
          Architecture
        slug: >-
          bai-15-apache-kafka-smallrye-reactive-messaging-event-driven-architecture
        description: >-
          Event-Driven Architecture patterns (Event Notification, Event-Carried
          State Transfer), Kafka fundamentals (topics, partitions, consumer
          groups), SmallRye Reactive Messaging (@Incoming, @Outgoing, @Channel),
          Kafka Dev Services, Avro serialization, Outbox Pattern implementation,
          dead letter queue, and exactly-once semantics.
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-05
    title: 'Part 5: Resilience & Observability'
    description: >-
      Fault Tolerance patterns, OpenTelemetry distributed tracing, Micrometer
      metrics and centralized logging
    sort_order: 5
    lessons:
      - id: 019e2a10-a116-7a01-b001-f1a2b3c4d516
        title: >-
          Lesson 16: SmallRye Fault Tolerance — Circuit Breaker, Retry &
          Fallback
        slug: bai-16-smallrye-fault-tolerance-circuit-breaker-retry-fallback
        description: >-
          MicroProfile Fault Tolerance annotations (@Retry, @CircuitBreaker,
          @Timeout, @Fallback, @Bulkhead, @RateLimit), configuration parameters,
          programmatic API, metrics integration, testing fault tolerance
          behaviors, and cascade failure prevention strategies for
          microservices.
        duration_minutes: 90
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019e2a10-a117-7a01-b001-f1a2b3c4d517
        title: >-
          Lesson 17: Observability — OpenTelemetry, Metrics & Centralized
          Logging
        slug: bai-17-observability-opentelemetry-metrics-centralized-logging
        description: >-
          OpenTelemetry tracing (automatic instrumentation, custom spans,
          context propagation), Micrometer metrics (custom counters, timers,
          gauges, Prometheus endpoint), Structured logging (JSON format, MDC,
          traceId correlation), Grafana OTel LGTM Dev Services (Grafana + Loki +
          Tempo + Mimir all-in-one), dashboard design and alerting.
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019e2a10-a118-7a01-b001-f1a2b3c4d518
        title: 'Lesson 18: Caching with Redis, Health Checks & API Gateway'
        slug: bai-18-caching-voi-redis-health-checks-api-gateway
        description: >-
          Application caching with @CacheResult (Redis/Infinispan backend),
          cache invalidation strategies, SmallRye Health (liveness, readiness,
          startup probes), custom health checks for database/Kafka/Keycloak
          connectivity, API Gateway pattern with Nginx/Kong, rate limiting, and
          request routing.
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 'Part 6: Testing & Quality Assurance'
    description: >-
      Testing strategies for microservices — unit testing, integration testing,
      contract testing and Testcontainers
    sort_order: 6
    lessons:
      - id: 019e2a10-a119-7a01-b001-f1a2b3c4d519
        title: >-
          Lesson 19: Testing Microservices — @QuarkusTest, Testcontainers & Dev
          Services
        slug: bai-19-testing-microservices-quarkustest-testcontainers-dev-services
        description: >-
          @QuarkusTest and @QuarkusIntegrationTest, JUnit 5 integration, CDI
          injection in tests, REST Assured for API testing, Dev Services for
          test databases (PostgreSQL, Kafka, Keycloak auto-start),
          Testcontainers for custom scenarios, mocking with @InjectMock,
          Continuous Testing mode, and test coverage with JaCoCo.
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019e2a10-a120-7a01-b001-f1a2b3c4d520
        title: 'Lesson 20: Contract Testing & Integration Testing Strategies'
        slug: bai-20-contract-testing-integration-testing-strategies
        description: >-
          Consumer-Driven Contract Testing with Pact, Provider verification,
          Pact Broker for contract sharing, @TestSecurity for security testing,
          @QuarkusTestResource for custom test lifecycle, WireMock for external
          service mocking, testing Kafka consumers/producers, and testing
          strategies pyramid for microservices.
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-07
    title: 'Part 7: Deployment & Production Readiness'
    description: >-
      Container image build, GraalVM Native Image, Kubernetes deployment, CI/CD
      pipeline and production hardening
    sort_order: 7
    lessons:
      - id: 019e2a10-a121-7a01-b001-f1a2b3c4d521
        title: 'Lesson 21: Container Image & GraalVM Native Executable'
        slug: bai-21-container-image-graalvm-native-executable
        description: >-
          Quarkus Container Image extensions (Jib, Docker, Buildpack),
          multi-stage Dockerfile optimization, GraalVM Native Image build
          (reflection config, resource inclusion, troubleshooting), JVM vs
          Native performance comparison (startup time, memory, throughput), AOT
          Caching with Project Leyden (JDK 24+), Docker Compose for local
          development environment.
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019e2a10-a122-7a01-b001-f1a2b3c4d522
        title: >-
          Lesson 22: Kubernetes Deployment, CI/CD Pipeline & Production
          Readiness
        slug: bai-22-kubernetes-deployment-cicd-pipeline-production-readiness
        description: >-
          Quarkus Kubernetes extension (auto-generate Deployment, Service,
          Ingress), Helm chart packaging, ConfigMap & Secret management, CI/CD
          with GitHub Actions (build → test → native image → push → deploy),
          GitOps with ArgoCD, Horizontal Pod Autoscaler, resource limits,
          Graceful Shutdown, Production Readiness Checklist, and E-Commerce
          Microservices Platform project summary.
        duration_minutes: 150
        is_free: true
        sort_order: 22
        video_url: null
locale: en
---

