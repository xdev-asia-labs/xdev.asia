---
id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
title: 'Spring Boot 4: From Basics to Advanced'
slug: spring-boot-tu-co-ban-den-nang-cao
description: >-
  Comprehensive course on Spring Boot 4.x from basic to advanced, helping you
  build professional backend applications with REST APIs, Spring Data JPA,
  Spring Security, JWT, OAuth2, microservices, testing, Docker and deployment in
  production environments. Update Spring Boot 4.0 with Spring Framework 7,
  Virtual Threads, GraalVM Native Image.
featured_image: uploads/2026/03/spring-boot-banner-v2.png
level: beginner
duration_hours: 60
lesson_count: 24
price: '0.00'
is_free: true
view_count: 14
average_rating: '0.00'
review_count: 0
enrollment_count: 2
meta: null
published_at: '2025-12-08T08:37:00.000000Z'
created_at: '2026-02-25T18:38:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-facb-72da-8191-e6d44b88fb3e
  name: Programming
  slug: lap-trinh
tags:
  - name: Microservices
    slug: microservices
  - name: spring-boot
    slug: spring-boot
  - name: java
    slug: java
  - name: Backend
    slug: backend
  - name: rest-api
    slug: rest-api
  - name: Enterprise
    slug: enterprise
sections:
  - id: section-01
    title: 'Part 1: Spring Boot Platform'
    description: >-
      Understand Spring architecture, IoC Containers, Dependency Injection and
      Auto-Configuration
    sort_order: 1
    lessons:
      - id: 019c9617-fc01-7001-a001-fc0100000001
        title: >-
          Lesson 1: What is Spring Boot? — History, Architecture and Spring
          Ecology
        slug: bai-1-spring-boot-la-gi
        description: >-
          Overview of Spring Framework and Spring Boot. Development history from
          Spring 1.0 to Spring Boot 4.x. Layered architecture, main modules and
          when to use Spring Boot.
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9617-fc02-7002-a002-fc0200000002
        title: >-
          Lesson 2: Setting up Environment & Initializing Project with Spring
          Initializr
        slug: bai-2-cai-dat-moi-truong-va-khoi-tao-project
        description: >-
          Install JDK 21+, IDE (IntelliJ IDEA/VS Code), Maven/Gradle. Initialize
          the project with Spring Initializr, structure the directory and run
          the first application.
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9617-fc03-7003-a003-fc0300000003
        title: >-
          Lesson 3: Auto-Configuration, Spring IoC Container & Application
          Properties
        slug: bai-3-auto-configuration-ioc-container
        description: >-
          How does the Auto-Configuration mechanism work? IoC Containers,
          ApplicationContext, BeanFactory. Configure the application with
          application.properties/yaml and Profile.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019c9617-fc04-7004-a004-fc0400000004
        title: 'Lesson 4: Dependency Injection & Bean Lifecycle'
        slug: bai-4-dependency-injection-bean-lifecycle
        description: >-
          Constructor Injection, Setter Injection, Field Injection. Bean Scope
          (Singleton, Prototype, Request, Session). Bean Lifecycle callbacks,
          @PostConstruct, @PreDestroy, @Conditional annotations.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Part 2: Building REST API'
    description: Design and implement professional RESTful APIs with Spring Web MVC
    sort_order: 2
    lessons:
      - id: 019c9617-fc05-7005-a005-fc0500000005
        title: 'Lesson 5: REST API Foundations — @RestController & Request Mapping'
        slug: bai-5-rest-api-foundations
        description: >-
          HTTP methods, @RestController, @RequestMapping, @GetMapping,
          @PostMapping. Path variables, query parameters, request headers.
          Response entities and status codes.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9617-fc06-7006-a006-fc0600000006
        title: 'Lesson 6: DTO Pattern, Validation & Global Exception Handling'
        slug: bai-6-dto-validation-exception-handling
        description: >-
          Data Transfer Object pattern with record classes. Bean Validation
          (@Valid, @NotNull, @Size, custom validator). @ControllerAdvice,
          @ExceptionHandler, ProblemDetail RFC 9457.
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019c9617-fc07-7007-a007-fc0700000007
        title: 'Lesson 7: Spring Data JPA — Entity, Repository & Query Methods'
        slug: bai-7-spring-data-jpa-entity-repository
        description: >-
          JPA Entity mapping, @Entity, @Id, @GeneratedValue. JpaRepository
          interface, derived query methods, @Query with JPQL/Native SQL.
          Auditing with @CreatedDate, @LastModifiedDate.
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9617-fc08-7008-a008-fc0800000008
        title: 'Lesson 8: Entity Relationships, Pagination & Specification'
        slug: bai-8-quan-he-entity-pagination-specification
        description: >-
          @OneToMany, @ManyToOne, @ManyToMany, @OneToOne. Fetch strategies (LAZY
          vs EAGER), N+1 problem. Pageable, Sort, Slice. JPA Specification for
          dynamic queries.
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'Part 3: Application security'
    description: 'Spring Security, JWT, OAuth2 and security best practices'
    sort_order: 3
    lessons:
      - id: 019c9617-fc09-7009-a009-fc0900000009
        title: >-
          Lesson 9: Spring Security Fundamentals — Authentication &
          Authorization
        slug: bai-9-spring-security-fundamentals
        description: >-
          SecurityFilterChain, HttpSecurity configuration. UserDetailsService,
          PasswordEncoder, login form, HTTP Basic. Role-based access control
          (RBAC) with @Secured, @PreAuthorize.
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9617-fc10-7010-a010-fc1000000010
        title: 'Lesson 10: JWT Authentication — Stateless Security for REST API'
        slug: bai-10-jwt-authentication
        description: >-
          JSON Web Token (JWT) internals. Generate JWT with jjwt library. Custom
          JwtAuthenticationFilter, refresh token flow. Stateless session
          management for REST API.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c9617-fc11-7011-a011-fc1100000011
        title: 'Lesson 11: OAuth2 & OpenID Connect — Social Login & Resource Server'
        slug: bai-11-oauth2-openid-connect
        description: >-
          OAuth2 Authorization Code flow, Client Credentials. Spring Security
          OAuth2 Client for Google/GitHub login. Resource Server with JWT
          validation. Spring Authorization Server.
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9617-fc12-7012-a012-fc1200000012
        title: 'Lesson 12: Method Security, CORS, CSRF & Security Best Practices'
        slug: bai-12-method-security-cors-csrf
        description: >-
          @PreAuthorize, @PostAuthorize, @Secured SpEL expressions. CORS
          configuration, CSRF protection for SPA. Rate limiting, security
          headers, OWASP Top 10 prevention.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-04
    title: 'Part 4: Advanced Features'
    description: 'Transaction, Caching, Async, WebSocket and API Documentation'
    sort_order: 4
    lessons:
      - id: 019c9617-fc13-7013-a013-fc1300000013
        title: 'Lesson 13: Transaction Management & Caching'
        slug: bai-13-transaction-management-caching
        description: >-
          @Transactional propagation, isolation levels, rollback rules. Spring
          Cache abstraction with @Cacheable, @CacheEvict, @CachePut. Redis cache
          integration.
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9617-fc14-7014-a014-fc1400000014
        title: 'Lesson 14: Async Processing, Scheduling & Events'
        slug: bai-14-async-scheduling-events
        description: >-
          @Async with CompletableFuture, Virtual Threads (Java 21+). @Scheduled
          cron jobs. ApplicationEvent, @EventListener,
          @TransactionalEventListener. Spring Modulith events.
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019c9617-fc15-7015-a015-fc1500000015
        title: 'Lesson 15: File Upload/Download, Email & WebSocket'
        slug: bai-15-file-upload-email-websocket
        description: >-
          MultipartFile upload, file storage service. Spring Mail with Thymeleaf
          templates. WebSocket with STOMP protocol, SockJS fallback, real-time
          notifications.
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c9617-fc16-7016-a016-fc1600000016
        title: 'Lesson 16: API Documentation — OpenAPI 3, Swagger UI & HATEOAS'
        slug: bai-16-api-documentation-openapi-hateoas
        description: >-
          SpringDoc OpenAPI 3 integration, @Operation, @Schema annotations.
          Swagger UI customization. HATEOAS with Spring HATEOAS,
          RepresentationModel, WebMvcLinkBuilder.
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-05
    title: 'Part 5: Testing & Code Quality'
    description: 'Unit testing, integration testing, API testing and monitoring'
    sort_order: 5
    lessons:
      - id: 019c9617-fc17-7017-a017-fc1700000017
        title: 'Lesson 17: Unit Testing with JUnit 5 & Mockito'
        slug: bai-17-unit-testing-junit5-mockito
        description: >-
          JUnit 5 annotations, assertions, parameterized tests. Mockito @Mock,
          @InjectMocks, @Spy, ArgumentCaptor. Testing service layer and utility
          classes.
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019c9617-fc18-7018-a018-fc1800000018
        title: 'Lesson 18: Integration Testing — @SpringBootTest & Testcontainers'
        slug: bai-18-integration-testing-testcontainers
        description: >-
          @SpringBootTest, test slices (@WebMvcTest, @DataJpaTest, @JsonTest).
          Testcontainers for PostgreSQL, Redis, Kafka. @DynamicPropertySource,
          Test Configuration.
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019c9617-fc19-7019-a019-fc1900000019
        title: 'Lesson 19: API Testing — MockMvc, WebTestClient & REST Assured'
        slug: bai-19-api-testing-mockmvc-webtestclient
        description: >-
          MockMvc for controller testing. WebTestClient for reactive endpoints.
          REST Assured for end-to-end API testing. Contract Testing with Spring
          Cloud Contract.
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019c9617-fc20-7020-a020-fc2000000020
        title: 'Lesson 20: Logging, Monitoring — Actuator, Micrometer & Observability'
        slug: bai-20-logging-monitoring-actuator
        description: >-
          Structured logging with Logback/Log4j2. Spring Boot Actuator
          endpoints, health checks. Micrometer metrics, Prometheus integration.
          Distributed tracing with OpenTelemetry.
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-06
    title: 'Part 6: Microservices & Production'
    description: 'Docker, microservices architecture, message queue and CI/CD'
    sort_order: 6
    lessons:
      - id: 019c9617-fc21-7021-a021-fc2100000021
        title: 'Lesson 21: Docker & Containerization for Spring Boot'
        slug: bai-21-docker-containerization
        description: >-
          Dockerfile multi-stage build, Jib, Cloud Native Buildpacks. Docker
          Compose for development. GraalVM Native Image with Spring Boot.
          Layered JARs.
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019c9617-fc22-7022-a022-fc2200000022
        title: >-
          Lesson 22: Microservices — Service Discovery, API Gateway & Config
          Server
        slug: bai-22-microservices-service-discovery
        description: >-
          Spring Cloud Netflix Eureka, Spring Cloud Gateway. Centralized
          configuration with Spring Cloud Config. Circuit Breaker with
          Resilience4j. Service-to-service communication with OpenFeign and
          RestClient.
        duration_minutes: 180
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019c9617-fc23-7023-a023-fc2300000023
        title: >-
          Lesson 23: Message Queue — Kafka, RabbitMQ & Event-Driven
          Microservices
        slug: bai-23-message-queue-kafka-rabbitmq
        description: >-
          Apache Kafka with Spring Kafka — Producer, Consumer, Streams. RabbitMQ
          with Spring AMQP. Saga pattern, Outbox pattern. Event sourcing basics.
        duration_minutes: 180
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019c9617-fc24-7024-a024-fc2400000024
        title: 'Lesson 24: CI/CD, Cloud Deployment & Production Best Practices'
        slug: bai-24-cicd-cloud-deployment-production
        description: >-
          GitHub Actions CI/CD pipeline. Deploy to AWS (ECS/EKS), GCP (Cloud
          Run). Kubernetes deployment with Helm charts. Database migration with
          Flyway/Liquibase. Performance tuning, connection pooling, graceful
          shutdown.
        duration_minutes: 180
        is_free: true
        sort_order: 23
        video_url: null
reviews: []
quizzes: []
locale: en
---
<p><strong>Knowledge requirements:</strong></p><ul><li>Basic Java (OOP, Collections, Exception Handling)</li><li>Understanding of HTTP and REST APIs</li><li>Experience with Maven/Gradle (recommended)</li><li>Basic SQL knowledge</li></ul><h3 id=""></h3>
