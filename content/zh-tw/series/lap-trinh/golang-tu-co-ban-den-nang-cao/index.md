---
id: 019d8b40-b100-7001-b003-golang0000001
title: Golang：從基礎到高級
slug: golang-tu-co-ban-den-nang-cao
description: >-
  從基礎到進階的全面Golang課程，幫助您掌握Go語言並建立高效能後端。包括 Go 基礎知識、Goroutines、Channels、Gin/Fiber
  框架、GORM、gRPC、微服務、測試、Docker 和生產部署。更新至 Go 1.23+，包含泛型、迭代器和最新的 2026 年最佳實踐。
featured_image: uploads/2026/03/golang-banner-v2.png
level: beginner
duration_hours: 80
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
  name: 程式設計
  slug: lap-trinh
tags:
  - name: Golang
    slug: golang
  - name: Go
    slug: go
  - name: Backend
    slug: backend
  - name: rest-api
    slug: rest-api
  - name: Gin
    slug: gin
  - name: Fiber
    slug: fiber
  - name: GORM
    slug: gorm
  - name: gRPC
    slug: grpc
  - name: Microservices
    slug: microservices
  - name: Docker
    slug: docker
  - name: Testing
    slug: testing
  - name: PostgreSQL
    slug: postgresql
  - name: Redis
    slug: redis
  - name: Goroutines
    slug: goroutines
  - name: Concurrency
    slug: concurrency
sections:
  - id: section-01
    title: 第 1 部分：Go 基礎知識
    description: Go平台、語法、類型、控制流程、函數、套件
    sort_order: 1
    lessons:
      - id: 019d8b40-b101-7001-b003-golang0000101
        title: 第 1 課：Go 簡介 - 雲端原生語言
        slug: bai-1-gioi-thieu-go-ngon-ngu-cua-cloud-native
        description: >-
          為什麼要去？與 Rust、Java、Python 進行比較。歷史、設計理念、Go 生態系。安裝、GOPATH、Go
          模組。你好世界和去工具鏈。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-b102-7001-b003-golang0000102
        title: 第 2 課：變數、類型和控制流
        slug: bai-2-variables-types-va-control-flow
        description: 原始型別、複合型別（陣列、切片、映射、結構）。指針、常數、iota。 if/else、switch、for 迴圈、範圍。類型斷言和類型開關。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-b103-7001-b003-golang0000103
        title: 第 3 課：函數、介面與錯誤處理
        slug: bai-3-functions-interfaces-va-error-handling
        description: 函數、多個返回值、可變參數函數。介面、嵌入、組合優於繼承。錯誤處理模式、自訂錯誤、errors.Is/As、panic/recover。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-b104-7001-b003-golang0000104
        title: 第 4 課：泛型、套件和模組
        slug: bai-4-generics-packages-va-modules
        description: Go 泛型（型別參數、限制）。套件組織、可見性規則、初始化函數。 Go 模組、版本控制、依賴管理、工作區模式。
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 第 2 部分：並發與網絡
    description: Goroutines、通道、上下文、HTTP 伺服器、JSON 處理
    sort_order: 2
    lessons:
      - id: 019d8b40-b201-7001-b003-golang0000201
        title: 第 5 課：Goroutine 和 Channels
        slug: bai-5-goroutines-va-channels
        description: Goroutines、WaitGroup、緩衝/無緩衝通道。選擇語句、頻道方向、扇入/扇出模式。並發與並行。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-b202-7001-b003-golang0000202
        title: 第 6 課：上下文、同步和並發模式
        slug: bai-6-context-sync-va-concurrency-patterns
        description: >-
          上下文包（WithCancel、WithTimeout、WithValue）。同步互斥量、RWMutex、同步一次、同步池。工作池、管道、速率限制器、信號量模式。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-b203-7001-b003-golang0000203
        title: 第 7 課：HTTP 伺服器和 JSON 處理
        slug: bai-7-http-server-va-json-handling
        description: >-
          net/http 套件、ServeMux (Go 1.22+)、處理程序、中介軟體模式。編碼/json、結構標籤、自訂封送處理。 HTTP
          用戶端、逾時、連線池。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-b204-7001-b003-golang0000204
        title: 第 8 課：Gin 框架與 REST API
        slug: bai-8-gin-framework-va-rest-api
        description: >-
          Gin 框架設定、路由、中介軟體。請求綁定，使用 go-playground/validator 進行驗證。回應處理、錯誤管理。
          Swagger 文件與 swaggo。比較 Gin、Fiber、Echo 和 Chi。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 第 3 部分：資料庫和身份驗證
    description: GORM、遷移、儲存庫模式、JWT、RBAC、安全
    sort_order: 3
    lessons:
      - id: 019d8b40-b301-7001-b003-golang0000301
        title: 第 9 課：GORM 與資料庫集成
        slug: bai-9-gorm-va-database-integration
        description: >-
          GORM v2 ORM、模型、關聯（HasOne、HasMany、BelongsTo、Many2Many）。 CRUD
          操作、作用域、掛鉤。連接池調整。比較 GORM、sqlx、sqlc 和 Ent。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-b302-7001-b003-golang0000302
        title: 第 10 課：遷移與儲存庫模式
        slug: bai-10-migrations-va-repository-pattern
        description: golang-migrate，Atlas 遷移。儲存庫模式、服務層、使用 Wire/Fx 進行依賴注入。清潔建築專案結構。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-b303-7001-b003-golang0000303
        title: 第 11 課：身份驗證 - JWT 和 OAuth2
        slug: bai-11-authentication-jwt-va-oauth2
        description: >-
          JWT 與 golang-jwt、bcrypt 密碼雜湊。存取令牌、刷新令牌、令牌輪換。 OAuth2 流程，使用
          Google/GitHub 進行社群登入。會話管理。
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-b304-7001-b003-golang0000304
        title: 第 12 課：授權、安全及中介軟體
        slug: bai-12-authorization-security-va-middleware
        description: RBAC，Casbin授權。 CORS、速率限制、安全標頭。輸入驗證、SQL 注入預防。中間件鏈、請求日誌、緊急復原。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 第 4 部分：進階功能
    description: WebSockets、gRPC、訊息佇列、快取、文件處理
    sort_order: 4
    lessons:
      - id: 019d8b40-b401-7001-b003-golang0000401
        title: 第 13 課：WebSocket 和即時
        slug: bai-13-websockets-va-real-time
        description: 大猩猩/websocket、ngooyr/websocket。連接管理器、廣播、房間模式。伺服器發送的事件，即時通知。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-b402-7001-b003-golang0000402
        title: 第 14 課：gRPC 和協定緩衝區
        slug: bai-14-grpc-va-protocol-buffers
        description: >-
          Protocol Buffers、protoc 編譯器、程式碼產生。 gRPC 一元、伺服器流、客戶端流、雙向流。用於 REST 相容性的
          gRPC 網關。攔截器。
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-b403-7001-b003-golang0000403
        title: 第 15 課：訊息佇列和事件驅動
        slug: bai-15-message-queues-va-event-driven
        description: >-
          RabbitMQ 與 amqp091-go，Apache Kafka 與 confluence-kafka-go。 NATS
          訊息傳遞。事件驅動架構、CQRS 模式、寄件匣模式。重試，死信隊列。
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-b404-7001-b003-golang0000404
        title: 第 16 課：快取、檔案上傳和效能
        slug: bai-16-caching-file-upload-va-performance
        description: Redis 快取策略，go-redis。文件上傳/下載、串流。 prof 分析、基準測試、記憶體最佳化。連線池、請求批次處理。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 第 5 部分：微服務、測試與生產
    description: 微服務、測試、Docker、CI/CD、監控、部署
    sort_order: 5
    lessons:
      - id: 019d8b40-b501-7001-b003-golang0000501
        title: 第 17 課：Go 的微服務架構
        slug: bai-17-microservices-architecture-voi-go
        description: >-
          微服務設計模式、服務發現、API 閘道。服務間通訊（gRPC、HTTP、訊息傳遞）。斷路器、重試、超時模式。 go-kit 與
          go-micro。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-b502-7001-b003-golang0000502
        title: 第 18 課：Go 測試
        slug: bai-18-testing-trong-go
        description: >-
          測試包、表驅動測試、子測試。證詞斷言，嘲諷嘲諷。 httptest 用於 API 測試。使用 testcontainers-go
          進行整合測試。基準測試，模糊測試。
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-b503-7001-b003-golang0000503
        title: 第 19 課：Docker、CI/CD 和 DevOps
        slug: bai-19-docker-cicd-va-devops
        description: >-
          Go 的 Docker 多階段建置（scratch/distroless）。 Docker Compose、Kubernetes 部署。
          GitHub Actions CI/CD 管道。 Makefile、golangci-lint、預先投稿掛鉤。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-b504-7001-b003-golang0000504
        title: 第 20 課：生產部署和可觀察性
        slug: bai-20-production-deployment-va-observability
        description: >-
          使用 slog/zerolog 進行結構化日誌記錄。 OpenTelemetry 追蹤、Prometheus 指標、Grafana
          儀表板。優雅關閉、健康檢查。擴展策略、效能調整。
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
locale: zh-tw
---

課程 **Golang：從基礎知識到進階** 旨在幫助您掌握 Go 語言 - 這是 Google 為雲端原生系統、微服務和高效能應用程式設計的語言。

## 你會學到什麼？

- **Go 基礎**：變數、類型、函數、介面、泛型、錯誤處理
- **並發**：Goroutines、通道、上下文、同步原語、並發模式
- **Web 開發**：Gin 框架、REST API、中介軟體、路由、驗證
- **資料庫**：GORM、遷移、儲存庫模式、乾淨的架構
- **驗證**：JWT、OAuth2、RBAC、安全最佳實踐
- **進階**：WebSockets、gRPC、訊息佇列、快取、微服務
- **生產**：測試、Docker、CI/CD、監控、可觀察性

## 請求

- 基本的程式設計知識（至少了解一種語言）
- 對 HTTP 和 REST API 的基本了解
- 安裝了 Go 1.23+ 和 Docker 的計算機
