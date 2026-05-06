---
id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
title: Spring Boot 4：從基礎到高級
slug: spring-boot-tu-co-ban-den-nang-cao
description: >-
  關於 Spring Boot 4.x 從基礎到進階的綜合課程，幫助您使用 REST API、Spring Data JPA、Spring
  Security、JWT、OAuth2、微服務、測試、Docker 和生產環境中的部署建立專業的後端應用程式。使用 Spring Framework
  7、虛擬執行緒、GraalVM 本機映像更新 Spring Boot 4.0。
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
  name: 程式設計
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
    title: 第 1 部分：Spring Boot 平台
    description: 了解 Spring 架構、IoC 容器、依賴注入和自動配置
    sort_order: 1
    lessons:
      - id: 019c9617-fc01-7001-a001-fc0100000001
        title: 第 1 課：什麼是 Spring Boot？ — 歷史、建築與春天生態
        slug: bai-1-spring-boot-la-gi
        description: >-
          Spring 框架和 Spring Boot 概述。從Spring 1.0到Spring Boot
          4.x的發展歷史。分層架構、主要模組以及何時使用 Spring Boot。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9617-fc02-7002-a002-fc0200000002
        title: 第 2 課：使用 Spring Initializr 設定環境並初始化項目
        slug: bai-2-cai-dat-moi-truong-va-khoi-tao-project
        description: >-
          安裝 JDK 21+、IDE（IntelliJ IDEA/VS Code）、Maven/Gradle。使用 Spring
          Initializr 初始化項目，建立目錄並執行第一個應用程式。
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9617-fc03-7003-a003-fc0300000003
        title: 第 3 課：自動設定、Spring IoC 容器和應用程式屬性
        slug: bai-3-auto-configuration-ioc-container
        description: >-
          自動配置機制如何運作？ IoC 容器、ApplicationContext、BeanFactory。使用
          application.properties/yaml 和 Profile 設定應用程式。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019c9617-fc04-7004-a004-fc0400000004
        title: 第 4 課：依賴注入與 Bean 生命週期
        slug: bai-4-dependency-injection-bean-lifecycle
        description: >-
          建構函式註入、Setter 注入、欄位注入。 Bean 範圍（單例、原型、請求、會話）。 Bean
          生命週期回調、@PostConstruct、@PreDestroy、@Conditional 註釋。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 第 2 部分：建立 REST API
    description: 使用 Spring Web MVC 設計和實作專業的 RESTful API
    sort_order: 2
    lessons:
      - id: 019c9617-fc05-7005-a005-fc0500000005
        title: 第 5 課：REST API 基礎 — @RestController 與請求映射
        slug: bai-5-rest-api-foundations
        description: >-
          HTTP
          方法、@RestController、@RequestMapping、@GetMapping、@PostMapping。路徑變數、查詢參數、請求標頭。響應實體和狀態代碼。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9617-fc06-7006-a006-fc0600000006
        title: 第 6 課：DTO 模式、驗證與全域異常處理
        slug: bai-6-dto-validation-exception-handling
        description: >-
          具有記錄類別的資料傳輸物件模式。 Bean 驗證（@Valid、@NotNull、@Size、自訂驗證器）。
          @ControllerAdvice、@ExceptionHandler、ProblemDetail RFC 9457。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019c9617-fc07-7007-a007-fc0700000007
        title: 第 7 課：Spring Data JPA — 實體、儲存庫和查詢方法
        slug: bai-7-spring-data-jpa-entity-repository
        description: >-
          JPA 實體映射、@Entity、@Id、@GenerateValue。 JpaRepository 接口，派生查詢方法，使用
          JPQL/Native SQL 的 @Query。使用@CreatedDate、@LastModifiedDate 進行審核。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9617-fc08-7008-a008-fc0800000008
        title: 第 8 課：實體關係、分頁與規範
        slug: bai-8-quan-he-entity-pagination-specification
        description: >-
          @OneToMany、@ManyToOne、@ManyToMany、@OneToOne。取得策略（LAZY 與 EAGER），N+1
          問題。可分頁、排序​​、切片。動態查詢的 JPA 規範。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 第 3 部分：應用程式安全
    description: Spring Security、JWT、OAuth2 和安全最佳實踐
    sort_order: 3
    lessons:
      - id: 019c9617-fc09-7009-a009-fc0900000009
        title: 第 9 課：Spring Security 基礎知識 — 身分驗證與授權
        slug: bai-9-spring-security-fundamentals
        description: >-
          SecurityFilterChain、HttpSecurity 配置。
          UserDetailsS​​ervice、PasswordEncoder、登入表單、HTTP Basic。使用
          @Secured、@PreAuthorize 的角色為基礎的存取控制 (RBAC)。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9617-fc10-7010-a010-fc1000000010
        title: 第 10 課：JWT 驗證 — REST API 的無狀態安全性
        slug: bai-10-jwt-authentication
        description: >-
          JSON Web 令牌 (JWT) 內部結構。使用 jjwt 庫產生
          JWT。自訂JwtAuthenticationFilter，刷新令牌流程。 REST API 的無狀態會話管理。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c9617-fc11-7011-a011-fc1100000011
        title: 第 11 課：OAuth2 和 OpenID Connect — 社群登入與資源伺服器
        slug: bai-11-oauth2-openid-connect
        description: >-
          OAuth2 授權程式碼流程，客戶端憑證。用於 Google/GitHub 登入的 Spring Security OAuth2
          用戶端。具有 JWT 驗證的資源伺服器。 Spring授權伺服器。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9617-fc12-7012-a012-fc1200000012
        title: 第 12 課：方法安全性、CORS、CSRF 和安全性最佳實踐
        slug: bai-12-method-security-cors-csrf
        description: >-
          @PreAuthorize、@PostAuthorize、@Secured SpEL 表達式。
          CORS配置，SPA的CSRF保護。速率限制、安全標頭、OWASP Top 10 預防。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-04
    title: 第 4 部分：進階功能
    description: 事務、快取、非同步、WebSocket 和 API 文檔
    sort_order: 4
    lessons:
      - id: 019c9617-fc13-7013-a013-fc1300000013
        title: 第 13 課：事務管理與快取
        slug: bai-13-transaction-management-caching
        description: >-
          @事務傳播、隔離等級、回滾規則。 Spring Cache 抽象化為 @Cacheable、@CacheEvict、@CachePut。
          Redis 快取整合。
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9617-fc14-7014-a014-fc1400000014
        title: 第 14 課：非同步處理、調度和事件
        slug: bai-14-async-scheduling-events
        description: >-
          @Async 與 CompletableFuture、虛擬執行緒（Java 21+）。 @預定的 cron
          作業。應用程式事件、@EventListener、@TransactionalEventListener。 Spring Modulith
          事件。
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019c9617-fc15-7015-a015-fc1500000015
        title: 第 15 課：文件上傳/下載、電子郵件和 WebSocket
        slug: bai-15-file-upload-email-websocket
        description: >-
          MultipartFile上傳，檔案儲存服務。帶有 Thymeleaf 模板的 Spring Mail。具有 STOMP 協定的
          WebSocket、SockJS 回退、即時通知。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c9617-fc16-7016-a016-fc1600000016
        title: 第 16 課：API 文件 — OpenAPI 3、Swagger UI 和 HATEOAS
        slug: bai-16-api-documentation-openapi-hateoas
        description: >-
          SpringDoc OpenAPI 3 整合、@Operation、@Schema 註解。 Swagger UI 自訂。 HATEOAS 與
          Spring HATEOAS、RepresentationModel、WebMvcLinkBuilder。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-05
    title: 第 5 部分：測試和程式碼質量
    description: 單元測試、整合測試、API 測試和監控
    sort_order: 5
    lessons:
      - id: 019c9617-fc17-7017-a017-fc1700000017
        title: 第 17 課：使用 JUnit 5 和 Mockito 進行單元測試
        slug: bai-17-unit-testing-junit5-mockito
        description: >-
          JUnit 5 註解、斷言、參數化測試。 Mockito
          @Mock、@InjectMocks、@Spy、ArgumentCaptor。測試服務層和實用程式類別。
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019c9617-fc18-7018-a018-fc1800000018
        title: 第 18 課：整合測試 — @SpringBootTest 和 Testcontainers
        slug: bai-18-integration-testing-testcontainers
        description: >-
          @SpringBootTest，測試切片（@WebMvcTest、@DataJpaTest、@JsonTest）。
          PostgreSQL、Redis、Kafka 的測試容器。 @DynamicPropertySource，測試配置。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019c9617-fc19-7019-a019-fc1900000019
        title: 第 19 課：API 測驗 — MockMvc、WebTestClient 和 REST Assured
        slug: bai-19-api-testing-mockmvc-webtestclient
        description: >-
          用於控制器測試的 MockMvc。用於反應式端點的 WebTestClient。 REST 確保端對端 API 測試。使用 Spring
          Cloud Contract 進行合約測試。
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019c9617-fc20-7020-a020-fc2000000020
        title: 第 20 課：記錄、監控 — 執行器、千分尺和可觀測性
        slug: bai-20-logging-monitoring-actuator
        description: >-
          使用 Logback/Log4j2 進行結構化日誌記錄。 Spring Boot Actuator
          端點、健康檢查。微米指標、Prometheus 整合。使用 OpenTelemetry 進行分散式追蹤。
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-06
    title: 第 6 部分：微服務與生產
    description: Docker、微服務架構、訊息佇列和 CI/CD
    sort_order: 6
    lessons:
      - id: 019c9617-fc21-7021-a021-fc2100000021
        title: 第 21 課：Spring Boot 的 Docker 和容器化
        slug: bai-21-docker-containerization
        description: >-
          Dockerfile 多階段建置、Jib、雲端原生建置包。 Docker Compose 用於開發。附有 Spring Boot 的
          GraalVM 本機映像。分層 JAR。
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019c9617-fc22-7022-a022-fc2200000022
        title: 第 22 課：微服務 — 服務發現、API 閘道與設定伺服器
        slug: bai-22-microservices-service-discovery
        description: >-
          Spring Cloud Netflix Eureka，Spring Cloud 網關。使用 Spring Cloud Config
          進行集中設定。具有 Resilience4j 的斷路器。使用 OpenFeign 和 RestClient 進行服務間通訊。
        duration_minutes: 180
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019c9617-fc23-7023-a023-fc2300000023
        title: 第 23 課：訊息佇列 — Kafka、RabbitMQ 和事件驅動的微服務
        slug: bai-23-message-queue-kafka-rabbitmq
        description: >-
          Apache Kafka 與 Spring Kafka — 生產者、消費者、流。 RabbitMQ 與 Spring
          AMQP。傳奇模式，寄件箱模式。事件溯源基礎知識。
        duration_minutes: 180
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019c9617-fc24-7024-a024-fc2400000024
        title: 第 24 課：CI/CD、雲端部署和生產最佳實踐
        slug: bai-24-cicd-cloud-deployment-production
        description: >-
          GitHub Actions CI/CD 管道。部署到AWS（ECS/EKS）、GCP（Cloud Run）。使用 Helm 圖表進行
          Kubernetes 部署。使用 Flyway/Liquibase 進行資料庫遷移。效能調整、連接池、正常關閉。
        duration_minutes: 180
        is_free: true
        sort_order: 23
        video_url: null
reviews: []
quizzes: []
locale: zh-tw
---
<p><strong>知識要求：</strong></p><ul><li>基礎 Java（OOP、集合、異常處理）</li><li>了解 HTTP 和 REST API</li><li>具有 Maven/Gradle 經驗（推薦）</li><li>基本的 SQL 知識</li></ul><h3 id=""></h3>
