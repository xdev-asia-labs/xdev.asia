---
id: 019d8b40-a100-7001-b001-nestjs000001
title: NestJS：從基礎到高級
slug: nestjs-tu-co-ban-den-nang-cao
description: >-
  NestJS 課程從基礎到進階都很全面，幫助您掌握最現代的後端 Node.js 框架。包括
  TypeScript、依賴注入、模組、控制器、提供者、TypeORM、Prisma、身份驗證、授權、防護、攔截器、管道、WebSockets、GraphQL、微服務、測試、Docker
  和生產部署。根據NestJS 11+和最新的2026最佳實踐進行更新。
featured_image: uploads/2026/03/nestjs-banner-v2.png
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
published_at: '2026-03-30T12:00:00.000000Z'
created_at: '2026-03-30T12:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-facb-72da-8191-e6d44b88fb3e
  name: 程式設計
  slug: lap-trinh
tags:
  - name: NestJS
    slug: nestjs
  - name: Node.js
    slug: nodejs
  - name: TypeScript
    slug: typescript
  - name: Backend
    slug: backend
  - name: rest-api
    slug: rest-api
  - name: Microservices
    slug: microservices
  - name: GraphQL
    slug: graphql
  - name: WebSocket
    slug: websocket
  - name: TypeORM
    slug: typeorm
  - name: Prisma
    slug: prisma
  - name: Docker
    slug: docker
  - name: Testing
    slug: testing
  - name: JWT
    slug: jwt
  - name: RBAC
    slug: rbac
sections:
  - id: section-01
    title: 第 1 部分：NestJS 平台
    description: 熟悉 NestJS、架構、TypeScript，並建立您的第一個 REST API
    sort_order: 1
    lessons:
      - id: 019d8b40-a101-7001-b001-nestjs000101
        title: 第 1 課：NestJS 簡介 - 為什麼選擇 NestJS？
        slug: bai-1-gioi-thieu-nestjs-tai-sao-chon-nestjs
        description: >-
          了解 NestJS 是什麼，與 Express、Fastify、Koa 進行比較。基於模組的架構、依賴注入、TypeScript
          優先。生態系統和實際用例。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-a102-7001-b001-nestjs000102
        title: 第 2 課：NestJS 的 TypeScript 基礎知識
        slug: bai-2-typescript-essentials-cho-nestjs
        description: >-
          查看 NestJS 的基本 TypeScript：裝飾器、泛型、介面、枚舉、型別防護、實用程式類型。為 NestJS 專案配置
          tsconfig.json。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-a103-7001-b001-nestjs000103
        title: 第 3 課：安裝並初始化 NestJS 項目
        slug: bai-3-cai-dat-va-khoi-tao-nestjs-project
        description: 安裝NestJS CLI，建立專案、資料夾結構，了解重要檔案。運行開發伺服器並編寫第一個 API 端點。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-a104-7001-b001-nestjs000104
        title: 第 4 課：NestJS 中的控制器與路由
        slug: bai-4-controllers-va-routing-trong-nestjs
        description: 了解控制器、請求處理、路由參數、查詢字串、請求正文、標頭。 HTTP 方法、狀態碼、重新導向和子網域路由。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 第 2 部分：提供程式、依賴注入和資料層
    description: 服務、依賴注入、與 TypeORM/Prisma 的資料庫連接、驗證
    sort_order: 2
    lessons:
      - id: 019d8b40-a201-7001-b001-nestjs000201
        title: 第 5 課：提供者和依賴注入
        slug: bai-5-providers-va-dependency-injection
        description: 深入了解提供者、服務、依賴注入容器。自訂提供者、useClass、useValue、useFactory、useExisting。注射範圍。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-a202-7001-b001-nestjs000202
        title: 第 6 課：模組 - 按功能組織程式碼
        slug: bai-6-modules-to-chuc-code-theo-feature
        description: NestJS中的模組系統，功能模組，共享模組，全域模組，動態模組。延遲載入模組和循環依賴。
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-a203-7001-b001-nestjs000203
        title: 第 7 課：TypeORM 和 Prisma - 資料庫連接
        slug: bai-7-typeorm-va-prisma-ket-noi-database
        description: >-
          使用 TypeORM 和 Prisma 連接 PostgreSQL/MySQL。實體、儲存庫、關係、遷移、播種。比較 TypeORM 與
          Prisma 以及何時使用哪一種。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-a204-7001-b001-nestjs000204
        title: 第 8 課：驗證、管道和異常過濾器
        slug: bai-8-validation-pipes-va-exception-filters
        description: 類別驗證器、類別轉換器、ValidationPipe、自訂管道。內建異常過濾器、自訂異常過濾器、HTTP 異常和錯誤處理最佳實務。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 第 3 部分：身份驗證和安全性
    description: JWT、護照、警衛、RBAC、速率限制、CORS、頭盔
    sort_order: 3
    lessons:
      - id: 019d8b40-a301-7001-b001-nestjs000301
        title: 第 9 課：使用 Passport 和 JWT 進行身份驗證
        slug: bai-9-authentication-voi-passport-va-jwt
        description: 使用@nestjs/passport、本機策略、JWT 策略實作身份驗證。存取令牌、刷新令牌、令牌輪換。 Bcrypt 密碼雜湊。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-a302-7001-b001-nestjs000302
        title: 第 10 課：警衛與授權 - RBAC
        slug: bai-10-guards-va-authorization-rbac
        description: >-
          NestJS、AuthGuard、RolesGuard
          中的守衛。基於角色的存取控制（RBAC），基於權限的授權。自訂裝飾器@Roles()、@Public()。 CASL 整合。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-a303-7001-b001-nestjs000303
        title: 第 11 課：安全最佳實踐
        slug: bai-11-security-best-practices
        description: >-
          頭盔、CORS 配置、使用 @nestjs/throttler 進行速率限制、CSRF 保護、輸入清理。安全標頭、HTTPS、帶有
          @nestjs/config 的環境變數。
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-a304-7001-b001-nestjs000304
        title: 第 12 課：會話、Cookie 和 OAuth2
        slug: bai-12-session-cookies-va-oauth2
        description: >-
          會話管理、基於 Cookie 的身份驗證、使用 Google/GitHub 的 OAuth2。社群登入整合、帳戶連結。 OpenID
          連結基礎知識。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 第 4 部分：進階功能
    description: 攔截器、中間件、WebSockets、GraphQL、檔案上傳、快取、任務調度
    sort_order: 4
    lessons:
      - id: 019d8b40-a401-7001-b001-nestjs000401
        title: 第 13 課：攔截器、中介軟體和生命週期
        slug: bai-13-interceptors-middleware-va-lifecycle
        description: 中介軟體、攔截器、請求生命週期。日誌攔截器、轉換攔截器、快取攔截器、逾時攔截器。執行上下文和反射。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-a402-7001-b001-nestjs000402
        title: 第 14 課：WebSocket 和即時通信
        slug: bai-14-websockets-va-real-time-communication
        description: >-
          @nestjs/websockets 與 Socket.IO、WebSocket 閘道、房間、命名空間。即時聊天、通知。伺服器發送事件
          (SSE) 替代方案。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-a403-7001-b001-nestjs000403
        title: 第 15 課：GraphQL 與 NestJS
        slug: bai-15-graphql-voi-nestjs
        description: >-
          @nestjs/graphql 與 Apollo 伺服器。模式優先與程式碼優先方法。解析器、查詢、變更、訂閱。 N+1 問題的
          DataLoader。 GraphQL Playground 和 Federation 基礎知識。
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-a404-7001-b001-nestjs000404
        title: 第 16 課：文件上傳、快取和任務調度
        slug: bai-16-file-upload-caching-va-task-scheduling
        description: >-
          使用 Multer 上傳文件，串流播放。使用 @nestjs/cache-manager 和 Redis
          進行快取。使用@nestjs/schedule、Cron 作業、間隔、逾時進行任務排程。使用 BullMQ 進行佇列。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 第 5 部分：微服務、測試與生產
    description: NestJS 微服務、測試、Docker、CI/CD 和生產部署
    sort_order: 5
    lessons:
      - id: 019d8b40-a501-7001-b001-nestjs000501
        title: 第 17 課：NestJS 微服務
        slug: bai-17-nestjs-microservices
        description: >-
          @nestjs/微服務，傳輸層（TCP、Redis、NATS、RabbitMQ、Kafka、gRPC）。訊息模式，基於事件的通訊。混合應用。服務發現和負載平衡。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-a502-7001-b001-nestjs000502
        title: 第 18 課：在 NestJS 進行測試
        slug: bai-18-testing-trong-nestjs
        description: >-
          使用 Jest 進行單元測試，測試模組。整合測試，使用 Supertest 進行 E2E
          測試。模擬提供者，測試資料庫。程式碼覆蓋率和測試最佳實踐。
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-a503-7001-b001-nestjs000503
        title: 第 19 課：NestJS 的 Dockerize 和 CI/CD
        slug: bai-19-dockerize-va-cicd-cho-nestjs
        description: >-
          針對 NestJS、Docker Compose 與 PostgreSQL 和 Redis 的 Dockerfile 多階段建置。
          GitHub Actions CI/CD 管道。健康檢查，優雅關閉。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-a504-7001-b001-nestjs000504
        title: 第 20 課：生產部署與監控
        slug: bai-20-production-deployment-va-monitoring
        description: >-
          將 NestJS 部署到 VPS/雲端。 PM2、Nginx 反向代理。使用 Winston/Pino、OpenTelemetry
          追蹤進行記錄。 Prometheus 指標、Grafana 儀表板。效能優化和擴展策略。
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
reviews: []
quizzes: []
locale: zh-tw
---
<p><strong>知識要求：</strong></p>
<ul>
<li>基本 JavaScript/TypeScript（ES6+、非同步/等待、Promises）</li>
<li>基本 Node.js（npm、模組、事件循環）</li>
<li>了解 HTTP 和 REST API</li>
<li>基本 SQL（選擇、插入、更新、刪除、連接）</li>
<li>基礎 Git</li>
</ul>
<p><strong>你會學到什麼？</strong></p>
<ul>
<li>使用 NestJS 和 TypeScript 建立專業的 REST API</li>
<li>深入理解依賴注入、模組、提供者模式</li>
<li>使用 TypeORM 和 Prisma ORM 連接資料庫</li>
<li>使用 JWT、Passport、RBAC 實施身份驗證/授權</li>
<li>與 WebSocket 進行即時通信</li>
<li>建置 GraphQL API</li>
<li>使用 NestJS 的微服務架構</li>
<li>測試：單元測試、整合測試、端對端測試</li>
<li>Docker、CI/CD 與生產部署</li>
</ul>
