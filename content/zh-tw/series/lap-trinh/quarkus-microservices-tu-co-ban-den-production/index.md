---
id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
title: Quarkus 微服務：從基礎知識到生產
slug: quarkus-microservices-tu-co-ban-den-production
description: >-
  關於使用 Quarkus 3.x 建立完整微服務系統的實作系列－Quarkus 3.x 是專為雲端原生和 Kubernetes
  設計的「超音速亞原子」Java 架構。使用 PostgreSQL 作為主資料庫，Keycloak 用於身份驗證和授權 (OIDC)，Apache Kafka
  用於事件驅動通信，gRPC 用於高效能服務間。從使用 Dev Services 建立您的第一個專案、使用 Panache 建置 REST API，到使用
  GraalVM Native Image 在 Kubernetes 上部署生產。包括容錯、OpenTelemetry 可觀測性、合約測試、CI/CD
  管道和生產​​準備檢查表。實際項目：電商平台系統包含5個微服務。
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
  name: 程式設計
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
    title: 第 1 部分：Quarkus 平台和專案設置
    description: >-
      熟悉 Quarkus — Java Cloud Native 框架、開發模式、開發服務、開發 UI、建立 REST API 並使用 Panache
      連接 PostgreSQL
    sort_order: 1
    lessons:
      - id: 019e2a10-a101-7a01-b001-f1a2b3c4d501
        title: 第一課：什麼是 Quarkus？ — 用於微服務的 Supersonic Subatomic Java
        slug: bai-1-quarkus-la-gi-supersonic-subatomic-java-cho-microservices
        description: >-
          Quarkus 概述、建置時最佳化架構、微服務的 Quarkus 與 Spring Boot 比較、Quarkus 擴展生態系統、<1
          秒啟動演示，以及為什麼 Quarkus 是 Cloud Native Java 2026 的最佳選擇。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e2a10-a102-7a01-b001-f1a2b3c4d502
        title: 第 2 課：建立 Quarkus 專案 — CLI、開發模式、開發 UI 和即時編碼
        slug: bai-2-tao-quarkus-project-cli-dev-mode-dev-ui-live-coding
        description: >-
          安裝 Quarkus CLI 和 JDK 21+，使用 quarkus create 建立項目，標準項目結構，即時重新載入的開發模式，開發
          UI 儀表板，開發服務自動啟動 PostgreSQL/Keycloak/Kafka，持續測試。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e2a10-a103-7a01-b001-f1a2b3c4d503
        title: 第 3 課：Quarkus REST — 建立專業的 RESTful API
        slug: bai-3-quarkus-rest-xay-dung-restful-api-chuyen-nghiep
        description: >-
          Quarkus REST (Jakarta REST) 具有 @Path、@GET、@POST、Jackson 的 JSON
          序列化、請求/回應過濾、CORS 配置、OpenAPI 和 Swagger UI 自動化、API 版本控制策略。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019e2a10-a104-7a01-b001-f1a2b3c4d504
        title: 第 4 課：PostgreSQL 和 Hibernate ORM Panache — 有效的資料層
        slug: bai-4-postgresql-hibernate-orm-panache-data-layer-hieu-qua
        description: >-
          連接 PostgreSQL 與 Quarkus 資料來源、Hibernate ORM 與
          Panache（活動記錄與儲存庫模式）、實體對應、PanacheSQL、分頁、排序​​、使用 HQL/Native SQL
          的自訂查詢、開發服務自動啟動 PostgreSQL 容器。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e2a10-a105-7a01-b001-f1a2b3c4d505
        title: 第 5 課：驗證、錯誤處理和設定檔
        slug: bai-5-validation-error-handling-configuration-profiles
        description: >-
          使用 Hibernate 驗證器（@NotBlank、@Size、自訂驗證器）進行 Bean
          驗證、用於統一錯誤處理的異常映射器、設定檔（dev/test/prod）、MicroProfile 配置、環境變數和
          application.properties 最佳實踐。
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-02
    title: 第 2 部分：設計微服務架構
    description: 分析整體架構、設計每個服務的資料庫、事件驅動架構和電子商務系統的 API 網關
    sort_order: 2
    lessons:
      - id: 019e2a10-a106-7a01-b001-f1a2b3c4d506
        title: 第 6 課：將單體分解為微服務 — DDD 和有界上下文
        slug: bai-6-phan-tach-monolith-sang-microservices-ddd-bounded-context
        description: >-
          應用於電子商務的領域驅動設計（DDD）：定義有界上下文（產品、訂單、付款、使用者、通知）、聚合根、實體與值物件、Strangler Fig
          模式策略和多模組 Quarkus 專案設計。
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019e2a10-a107-7a01-b001-f1a2b3c4d507
        title: 第 7 課：每個服務的資料庫 — Flyway 遷移和多重資料來源
        slug: bai-7-database-per-service-flyway-migration-multi-datasource
        description: >-
          Database per
          Service原則、每個微服務的模式設計、Flyway資料庫遷移（版本化+可重複）、Quarkus多資料來源配置、資料隔離策略和跨服務資料查詢模式。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e2a10-a108-7a01-b001-f1a2b3c4d508
        title: 第 8 課：建構產品服務與訂單服務
        slug: bai-8-xay-dung-product-service-order-service
        description: >-
          親手建立了前兩個微服務：產品目錄服務（CRUD、搜尋、類別、庫存）和訂單服務（訂單生命週期、狀態機、訂單項目），每個服務都有自己的資料庫、Panache
          實體、完整的 REST API 和 OpenAPI 文件。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e2a10-a109-7a01-b001-f1a2b3c4d509
        title: 第 9 課：建構支付服務與通知服務
        slug: bai-9-xay-dung-payment-service-notification-service
        description: >-
          建立支付服務（支付處理、交易日誌、退款工作流程、冪等金鑰）和通知服務（電子郵件/簡訊範本、通知佇列、遞送追蹤），整合電子郵件的 Qute
          範本引擎和 Quarkus Mailer 擴充功能。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-03
    title: 第 3 部分：Keycloak 和 OIDC 的安全性
    description: 整合 Keycloak 作為身分提供者、OIDC 承載令牌身份驗證、RBAC 授權和 Keycloak 管理用戶端
    sort_order: 3
    lessons:
      - id: 019e2a10-a110-7a01-b001-f1a2b3c4d510
        title: 第 10 課：Keycloak 設定 — 微服務的領域、用戶端、使用者和角色
        slug: bai-10-keycloak-setup-realm-client-users-roles-cho-microservices
        description: >-
          使用開發服務安裝
          Keycloak（自動啟動容器），建立電子商務領域，為每個微服務註冊用戶端，定義角色（管理員、客戶、商家）、使用者屬性，並匯出領域配置以進行可重現的設定。
        duration_minutes: 90
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e2a10-a111-7a01-b001-f1a2b3c4d511
        title: 第 11 課：使用 Quarkus 進行 OIDC 承載令牌驗證
        slug: bai-11-oidc-bearer-token-authentication-voi-quarkus
        description: >-
          Quarkus OIDC 擴充配置、承載令牌驗證工作流程、JWT
          聲明提取（@Claim、SecurityIdentity）、@RolesAllowed
          註解、@Authenticated、服務之間的令牌傳播、開發服務自動配置 Keycloak 以及使用 @TestSecurity
          進行安全測試。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e2a10-a112-7a01-b001-f1a2b3c4d512
        title: 第 12 課：進階授權 — RBAC、基於資源和 Keycloak 管理用戶端
        slug: >-
          bai-12-authorization-nang-cao-rbac-resource-based-keycloak-admin-client
        description: >-
          使用 Keycloak 授權服務、基於資源的權限、基於範圍的策略、@PermissionsAllowed、Keycloak 管理用戶端
          API（以程式設計方式管理使用者/角色）、多租用戶安全模式以及令牌自省與 JWT 驗證進行細粒度授權。
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 第 4 部分：服務間通信
    description: 用於微服務之間通訊的 REST 用戶端、gRPC 高效能和 Apache Kafka 事件驅動
    sort_order: 4
    lessons:
      - id: 019e2a10-a113-7a01-b001-f1a2b3c4d513
        title: 第 13 課：REST 用戶端 — 服務到服務通信
        slug: bai-13-rest-client-service-to-service-communication
        description: >-
          Quarkus REST
          用戶端（@RegisterRestClient、@RestClient）、聲明式與編程式用戶端、逾時和重試配置、OIDC
          令牌傳播過濾器、SmallRye Stork 服務發現、客戶端負載平衡以及服務間呼叫的錯誤處理。
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e2a10-a114-7a01-b001-f1a2b3c4d514
        title: 第 14 課：gRPC 與 Quarkus — 高效能服務間通信
        slug: bai-14-grpc-voi-quarkus-high-performance-inter-service-communication
        description: >-
          Protobuf 架構設計、Quarkus gRPC 擴充功能（程式碼產生、服務實作）、gRPC 用戶端注入、雙向流、gRPC 與 REST
          效能比較、瀏覽器用戶端的 gRPC-Web、使用狀態碼進行錯誤處理以及透過 gRPC 進行健康檢查。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e2a10-a115-7a01-b001-f1a2b3c4d515
        title: 第 15 課：Apache Kafka 和 SmallRye 反應式訊息傳遞 — 事件驅動架構
        slug: >-
          bai-15-apache-kafka-smallrye-reactive-messaging-event-driven-architecture
        description: >-
          事件驅動架構模式（事件通知、事件承載狀態傳輸）、Kafka 基礎知識（主題、分區、消費者群組）、SmallRye
          反應式訊息傳遞（@Incoming、@Outgoing、@Channel）、Kafka 開發服務、Avro
          序列化、寄件匣模式實作、死訊號佇列和一次性語意。
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-05
    title: 第 5 部分：彈性和可觀察性
    description: 容錯模式、OpenTelemetry 分散式追蹤、Micrometer 指標和集中式日誌記錄
    sort_order: 5
    lessons:
      - id: 019e2a10-a116-7a01-b001-f1a2b3c4d516
        title: 第 16 課：SmallRye 容錯 — 斷路器、重試與回退
        slug: bai-16-smallrye-fault-tolerance-circuit-breaker-retry-fallback
        description: >-
          MicroProfile
          容錯註解（@Retry、@CircuitBreaker、@Timeout、@Fallback、@Bulkhead、@RateLimit）、設定參數、程式設計
          API、指標整合、測試容錯行為以及微服務的級聯故障預防策略。
        duration_minutes: 90
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019e2a10-a117-7a01-b001-f1a2b3c4d517
        title: 第 17 課：可觀察性 — OpenTelemetry、指標與集中式日誌記錄
        slug: bai-17-observability-opentelemetry-metrics-centralized-logging
        description: >-
          OpenTelemetry 追蹤（自動偵測、自訂跨度、上下文傳播）、Micrometer
          指標（自訂計數器、計時器、儀表、Prometheus 端點）、結構化日誌記錄（JSON 格式、MDC、traceId 關聯）、Grafana
          OTel LGTM 開發服務（Grafana + Lomir + Tempo + Loki 板和一體化）。
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019e2a10-a118-7a01-b001-f1a2b3c4d518
        title: 第 18 課：使用 Redis 進行快取、運行狀況檢查和 API 網關
        slug: bai-18-caching-voi-redis-health-checks-api-gateway
        description: >-
          使用 @CacheResult（Redis/Infinispan 後端）的應用程式快取、快取失效策略、SmallRye
          Health（活性、就緒性、啟動偵測）、資料庫/Kafka/Keycloak 連線的自訂運作狀況檢查、Nginx/Kong 的 API
          閘道模式、速率限制和要求路由。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 第 6 部分：測試和品質保證
    description: 微服務測試策略—單元測試、整合測試、契約測試和測試容器
    sort_order: 6
    lessons:
      - id: 019e2a10-a119-7a01-b001-f1a2b3c4d519
        title: 第 19 課：測試微服務 — @QuarkusTest、測試容器和開發服務
        slug: bai-19-testing-microservices-quarkustest-testcontainers-dev-services
        description: >-
          @QuarkusTest 和 @QuarkusIntegrationTest、JUnit 5 整合、測試中的 CDI 注入、用於 API
          測試的 REST Assured、用於測試資料庫的開發服務（PostgreSQL、Kafka、Keycloak
          自動啟動）、用於自訂場景的測試容器、使用 @InjectMock 進行模擬、連續測試的測試容器、使用 @InjectMock
          進行模擬、連續測試的測試容器、使用 @InjectMock 進行模擬、連續測試。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019e2a10-a120-7a01-b001-f1a2b3c4d520
        title: 第 20 課：合約測試和整合測試策略
        slug: bai-20-contract-testing-integration-testing-strategies
        description: >-
          使用 Pact 進行消費者驅動的合約測試、提供者驗證、用於合約共享的 Pact Broker、用於安全測試的
          @TestSecurity、用於自訂測試生命週期的 @QuarkusTestResource、用於外部服務模擬的 WireMock、測試
          Kafka 消費者/生產者以及微服務的測試策略金字塔。
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-07
    title: 第 7 部分：部署與生產準備狀況
    description: 容器鏡像建置、GraalVM Native Image、Kubernetes 部署、CI/CD 管道和生產​​強化
    sort_order: 7
    lessons:
      - id: 019e2a10-a121-7a01-b001-f1a2b3c4d521
        title: 第 21 課：容器鏡像和 GraalVM 本機可執行檔
        slug: bai-21-container-image-graalvm-native-executable
        description: >-
          Quarkus 容器映像擴充（Jib、Docker、Buildpack）、多階段 Dockerfile 最佳化、GraalVM
          本機映像建置（反射配置、資源包含、故障排除）、JVM 與本機效能比較（啟動時間、記憶體、吞吐量）、Project Leyden 的 AOT
          快取（JDKcker 24+）、用於本機開發環境的 Doose Compose。
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019e2a10-a122-7a01-b001-f1a2b3c4d522
        title: 第 22 課：Kubernetes 部署、CI/CD 管道和生產​​準備
        slug: bai-22-kubernetes-deployment-cicd-pipeline-production-readiness
        description: >-
          Quarkus Kubernetes 擴充功能（自動產生 Deployment、Service、Ingress）、Helm
          圖表打包、ConfigMap 和 Secret 管理、帶有 GitHub Actions 的 CI/CD（建置 → 測試 → 本機映像 →
          推送 → 部署）、帶有 ArgoCD 的 GitOps、Horizo​​​​n
        duration_minutes: 150
        is_free: true
        sort_order: 22
        video_url: null
locale: zh-tw
---

