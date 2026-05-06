---
id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
title: 微服務與微前端系統設計－從基礎到生產
slug: thiet-ke-he-thong-microservices-micro-frontend
description: >-
  關於微服務後端和微前端的全端系統設計的綜合系列——從使用領域驅動設計的系統分離思維、API
  設計（REST、GraphQL、gRPC）、資料架構（Saga、CQRS、事件溯源）到微前端架構（模組聯合、Shell 應用程式、設計系統）、BFF
  模式、API 閘道器、測試策略、CI/CD 通道包括建立電子商務平台的實際案例研究以及 Monolith 的遷移說明。技術更新 2026。
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
  name: 系統架構
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
    title: 第 1 部分：基礎 — 架構的演變
    description: 了解從Monolith到微服務和微前端的架構演進路徑，掌握DDD和整體全端架構。
    sort_order: 1
    lessons:
      - id: 019e4a33-d401-7b20-c001-b1c2d3e4f501
        title: 第 1 課：從整體架構到微服務與微前端 — 架構演進路線圖
        slug: bai-1-tu-monolith-den-microservices-micro-frontend-lo-trinh-tien-hoa
        description: >-
          了解為什麼 Monolith 成為瓶頸、微服務的演進之旅，以及為什麼前端也需要解耦。比較
          Monolith、SOA、微服務、微前端。何時開始轉換。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e4a33-d402-7b20-c001-b1c2d3e4f502
        title: 第 2 課：領域驅動設計－系統分離思維
        slug: bai-2-domain-driven-design-tu-duy-phan-tach-he-thong
        description: DDD 平台：通用語言、限界上下文、聚合、領域事件。如何使用事件風暴來發現域。戰略與戰術 DDD 以及微服務與微前端部門的應用。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e4a33-d403-7b20-c001-b1c2d3e4f503
        title: 第 3 課：全端概述架構 — 微服務 + 微前端 + BFF
        slug: bai-3-kien-truc-tong-quan-full-stack-microservices-micro-frontend-bff
        description: >-
          全面的架構藍圖：前端（微前端 Shell + 遠端應用程式）、BFF 層、API
          閘道、後端微服務、訊息代理程式、每服務資料庫。端到端請求流和關鍵整合點。
        duration_minutes: 75
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 第 2 部分：設計微服務後端
    description: 服務分解、API設計模式以及微服務之間的通訊模式。
    sort_order: 2
    lessons:
      - id: 019e4a33-d404-7b20-c001-b1c2d3e4f504
        title: 第 4 課：服務分解 — 有界脈絡與服務邊界
        slug: bai-4-service-decomposition-bounded-context-service-boundaries
        description: 基於Bounded Context的服務分離方法。正確定義服務邊界，避免分散式單體。依子網域分解與依業務能力策略分解。上下文映射模式。
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e4a33-d405-7b20-c001-b1c2d3e4f505
        title: 第 5 堂課：API 設計大師班 — REST、GraphQL 與 gRPC
        slug: bai-5-api-design-masterclass-rest-graphql-grpc
        description: >-
          REST、GraphQL 和 gRPC 的詳細比較：用例、效能、權衡。 RESTful API 最佳實務、GraphQL 架構設計、具有
          Protocol Buffers 的 gRPC。 API 版本控制策略和向後相容性。
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e4a33-d406-7b20-c001-b1c2d3e4f506
        title: 第 6 課：服務間通訊 — 同步、非同步與事件驅動
        slug: bai-6-inter-service-communication-sync-async-event-driven
        description: >-
          同步（HTTP、gRPC）與非同步（訊息佇列、事件流）通訊。請求-回覆、發布-訂閱、事件通知模式。何時使用
          RabbitMQ、Kafka、NATS。避免分發整體反模式。
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-03
    title: 第 3 部分：微服務中的資料架構
    description: 每個服務資料庫、Saga 模式、CQRS 和事件來源 — 分散式資料管理。
    sort_order: 3
    lessons:
      - id: 019e4a33-d407-7b20-c001-b1c2d3e4f507
        title: 第 7 課：每個服務的資料庫和多語言持久性
        slug: bai-7-database-per-service-polyglot-persistence
        description: >-
          為什麼每個服務都需要自己的資料庫？選擇正確資料庫的策略：PostgreSQL、MongoDB、Redis、Elasticsearch。共享資料庫反模式。資料隔離、模式所有權和遷移策略。
        duration_minutes: 75
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e4a33-d408-7b20-c001-b1c2d3e4f508
        title: 第 8 課：Saga 模式與分散式事務
        slug: bai-8-saga-pattern-distributed-transactions
        description: 為什麼 ACID 在微服務中不起作用？傳奇模式：編排與編排。補償事務、冪等性和錯誤處理。實際範例：訂單→付款→庫存→運送工作流程。
        duration_minutes: 90
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e4a33-d409-7b20-c001-b1c2d3e4f509
        title: 第 9 課：事件溯源與 CQRS — 何時需要，何時不需要？
        slug: bai-9-event-sourcing-cqrs-khi-nao-can-khi-nao-khong
        description: >-
          事件溯源：儲存事件而不是狀態。 CQRS：單獨的讀取/寫入模型。結合事件溯源 + CQRS。權衡、複雜性和決策框架。什麼時候 CQRS
          太複雜，什麼時候真的有必要？
        duration_minutes: 75
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-04
    title: 第 4 部分：微前端 — 架構與原理
    description: 微前端概述、整合策略、模組聯合和 Web 組件。
    sort_order: 4
    lessons:
      - id: 019e4a33-d410-7b20-c001-b1c2d3e4f510
        title: 第 10 課：什麼是微前端？ — 效益、權衡與決策框架
        slug: bai-10-micro-frontend-la-gi-loi-ich-trade-offs-decision-framework
        description: >-
          微前端的定義，與單體前端的比較。 5
          項核心原則。好處：獨立部署、團隊自治、漸進式升級。權衡：有效負載大小、複雜度、一致性。決策架構：何時使用微前端、何時不使用微前端。
        duration_minutes: 75
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e4a33-d411-7b20-c001-b1c2d3e4f511
        title: 第 11 課：微前端整合策略 - 伺服器端、建置時與執行時
        slug: bai-11-chien-luoc-tich-hop-server-side-build-time-runtime
        description: >-
          5 種整合方法：伺服器端組合 (SSI/ESI)、建置時整合、透過 iframe 執行時間、透過 JavaScript 執行時間、透過
          Web 元件執行時間。比較權衡、效能、隔離。流行框架：single-spa、qiankun、Luigi、Piral。
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e4a33-d412-7b20-c001-b1c2d3e4f512
        title: 第十二課：模組聯合－Webpack 5 & Vite Federation 執行階段模組共用
        slug: bai-12-module-federation-webpack-vite-runtime-module-sharing
        description: >-
          模組聯合：如何在運行時在應用程式之間共用模組。 Webpack 5 模組聯合深入研究：遠端、主機、共享模組。 Vite
          插件聯盟。處理共享相依性、版本衝突和回退策略。使用 React/Vue 進行實際設定。
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-05
    title: 第 5 部分：建構實用的微前端
    description: 親自為微前端建立 Shell 應用程式、狀態管理、設計系統和 SSO。
    sort_order: 5
    lessons:
      - id: 019e4a33-d413-7b20-c001-b1c2d3e4f513
        title: 第 13 課：Shell 應用程式 — 路由、佈局和編排
        slug: bai-13-shell-application-routing-layout-orchestration
        description: >-
          建立容器/外殼應用程式：管理微前端的佈局、導航和生命週期。動態路由，延遲載入微前端。錯誤邊界和後備 UI。 404
          處理、深度連結、瀏覽器歷史記錄管理。
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e4a33-d414-7b20-c001-b1c2d3e4f514
        title: 第 14 課：狀態管理和跨應用程式通信
        slug: bai-14-state-management-cross-app-communication
        description: >-
          微前端中的狀態管理：本地狀態與共享狀態。自訂事件、道具/回呼、基於 URL 的通訊。共享狀態解決方案：Zustand、事件匯流排、自訂事件
          API。原則：最小化跨應用狀態，偏好事件驅動。
        duration_minutes: 75
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e4a33-d415-7b20-c001-b1c2d3e4f515
        title: 第 15 課：設計系統與 CSS 隔離 — 跨團隊統一 UI
        slug: bai-15-design-system-css-isolation-dong-nhat-ui
        description: >-
          為微前端建構共享設計系統：元件庫、設計令牌、版面、調色盤。 CSS 隔離：Shadow DOM、CSS 模組、CSS-in-JS、BEM
          命名約定。版本設計系統，逐步推出。
        duration_minutes: 75
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019e4a33-d416-7b20-c001-b1c2d3e4f516
        title: 第 16 課：微前端之間的單一登入和令牌共享
        slug: bai-16-single-sign-on-token-sharing-giua-micro-frontends
        description: >-
          微前端中的身份驗證流程：Shell App 中的集中身份驗證。令牌管理：記憶體中的 JWT 與基於 Cookie 的比較。 SSO 與
          Keycloak/Auth0 整合。跨微前端的令牌刷新、會話同步和登出同步。
        duration_minutes: 75
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-06
    title: 第 6 部分：API 閘道和 BFF 層
    description: 前端模式的後端、API 閘道配置和 GraphQL 聯合。
    sort_order: 6
    lessons:
      - id: 019e4a33-d417-7b20-c001-b1c2d3e4f517
        title: 第 17 課：BFF 模式 — 連結微前端與微服務
        slug: bai-17-bff-pattern-ket-noi-micro-frontend-voi-microservices
        description: >-
          前端的後端：為什麼我們需要 BFF，每個前端麥克風都有自己的 BFF。 BFF 聚合、資料轉換、快取。與 Node.js/Go
          的好朋友。權衡：每個前端 BFF 與共享 BFF。應避免反模式。
        duration_minutes: 75
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019e4a33-d418-7b20-c001-b1c2d3e4f518
        title: 第 18 課：API 閘道 — 路由、驗證、速率限制和負載平衡
        slug: bai-18-api-gateway-routing-auth-rate-limiting
        description: >-
          API 閘道模式：路由、驗證、速率限制、請求/回應轉換。比較 Kong、APISIX、Envoy Gateway 和 AWS API
          Gateway。生產配置：健康檢查、斷路器、金絲雀路由。 API 閘道與服務網格 — 何時使用什麼。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019e4a33-d419-7b20-c001-b1c2d3e4f519
        title: 第 19 課：GraphQL Federation — 微前端的統一資料層
        slug: bai-19-graphql-federation-unified-data-layer
        description: >-
          Apollo Federation：超圖、子圖、路由器。每個微服務都公開一個子圖，聯合網關將其組合成一個統一的架構。實體引用、@key
          指令和跨服務關係。效能：DataLoader、快取、持久性查詢。
        duration_minutes: 90
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-07
    title: 第 7 部分：測試全端微服務和微前端
    description: 全面的測試策略：單元測試、整合測試、契約測試、後端和前端的E2E。
    sort_order: 7
    lessons:
      - id: 019e4a33-d420-7b20-c001-b1c2d3e4f520
        title: 第 20 課：測試微服務 — 單元、整合與服務元件測試
        slug: bai-20-testing-microservices-unit-integration-component
        description: 測試微服務金字塔。使用模擬外部相依性進行單元測試。與測試容器的整合測試。服務元件測試：隔離測試整個服務。基本合約測試 API。
        duration_minutes: 75
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019e4a33-d421-7b20-c001-b1c2d3e4f521
        title: 第 21 課：測試微前端 - 組件、視覺回歸和 E2E
        slug: bai-21-testing-micro-frontend-component-visual-e2e
        description: >-
          微前端測試策略：元件測試（React 測試程式庫、Vue Test Utils）、視覺回歸（Chromatic、Percy）、E2E
          測試（Playwright、Cypress）。隔離測試微前端與整合測試。跨應用程式用戶旅程測試。
        duration_minutes: 75
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019e4a33-d422-7b20-c001-b1c2d3e4f522
        title: 第 22 課：消費者驅動的契約 — API 和 UI 整合契約
        slug: bai-22-consumer-driven-contracts-pact-api-ui
        description: >-
          使用 Pact 進行消費者驅動的契約測試：為什麼整合測試還不夠。提供者驗證，消費者期望。 REST API、GraphQL
          和基於訊息的通訊的 Pact。微前端的合約測試：驗證 Shell 和遠端應用程式之間的介面合約。
        duration_minutes: 75
        is_free: true
        sort_order: 22
        video_url: null
  - id: section-08
    title: 第 8 部分：CI/CD 和部署策略
    description: 程式碼管理、CI/CD 管道以及微服務和微前端的部署策略。
    sort_order: 8
    lessons:
      - id: 019e4a33-d423-7b20-c001-b1c2d3e4f523
        title: 第 23 課：Mono-repo 與 Multi-repo — 程式碼管理策略
        slug: bai-23-mono-repo-vs-multi-repo-chien-luoc-quan-ly-code
        description: >-
          比較微服務與微前端的單一儲存庫、多重儲存庫與混合儲存庫。工具：Nx、Turborepo、Lerna。微前端的
          Mono-repo：共享建置、一致的版本控制。微服務的多重儲存庫：團隊自治。 Git 工作流程、程式碼所有權、依賴關係管理。
        duration_minutes: 75
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019e4a33-d424-7b20-c001-b1c2d3e4f524
        title: 第 24 課：CI/CD 管道 — 獨立建置、測試和部署
        slug: bai-24-cicd-pipeline-build-test-deploy-independently
        description: >-
          為微服務+微前端系統設計 CI/CD 管道。為每個服務/微前端獨立建置和部署。 GitHub Actions / GitLab CI
          管道範本。自動化測試門、安全掃描、容器鏡像建置和推送。 GitOps 與 ArgoCD。
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019e4a33-d425-7b20-c001-b1c2d3e4f525
        title: 第 25 課：部署策略 — 金絲雀、藍綠色和功能標誌
        slug: bai-25-deployment-strategies-canary-blue-green-feature-flags
        description: >-
          微服務的部署策略：滾動更新、藍綠色、金絲雀發布。微前端的獨立部署：基於CDN的部署、版本化捆綁、動態remoteEntry.js。使用
          LaunchDarkly/Unleash 進行功能標記，以實現安全的功能推出。回滾策略。
        duration_minutes: 75
        is_free: true
        sort_order: 25
        video_url: null
  - id: section-09
    title: 第 9 部分：可觀察性與生產準備情況
    description: 全端可觀察性、效能最佳化和生產準備檢查表。
    sort_order: 9
    lessons:
      - id: 019e4a33-d426-7b20-c001-b1c2d3e4f526
        title: 第 26 課：全端可觀察性－從前端到後端的追蹤
        slug: bai-26-full-stack-observability-tracing-frontend-den-backend
        description: >-
          全面的可觀察性：前端監控（Web Vitals、錯誤追蹤）、API 閘道日誌記錄、後端分散式追蹤。適用於前端（瀏覽器 SDK）和後端的
          OpenTelemetry。整個請求鏈的關聯 ID。 Grafana 儀表板，提醒生產。
        duration_minutes: 90
        is_free: true
        sort_order: 26
        video_url: null
      - id: 019e4a33-d427-7b20-c001-b1c2d3e4f527
        title: 第 27 課：效能最佳化 — 捆綁包大小、快取和 CDN
        slug: bai-27-performance-optimization-bundle-caching-cdn
        description: >-
          微前端優化：共享相依性提取、樹搖動、動態導入、延遲載入。 CDN
          部署策略：快取清除、不可變資產。後端效能：連接池、N+1查詢、回應壓縮。核心網路生命體監測。
        duration_minutes: 75
        is_free: true
        sort_order: 27
        video_url: null
      - id: 019e4a33-d428-7b20-c001-b1c2d3e4f528
        title: 第 28 課：生產準備清單 — 將系統投入生產
        slug: bai-28-production-readiness-checklist
        description: >-
          上線前的綜合清單：安全審查、負載測試、混沌工程、災難復原計畫、運作手冊、值班輪調。架構決策記錄
          (ADR)。產能規劃、成本最佳化、團隊結構和所有權模型。
        duration_minutes: 75
        is_free: true
        sort_order: 28
        video_url: null
  - id: section-10
    title: 第 10 部分：案例研究與遷移
    description: 建構電子商務平台的實際案例研究以及 Monolith 的遷移說明。
    sort_order: 10
    lessons:
      - id: 019e4a33-d429-7b20-c001-b1c2d3e4f529
        title: 第 29 課：案例研究—建立全端電子商務平台
        slug: bai-29-case-study-xay-dung-ecommerce-platform-full-stack
        description: >-
          設計一個完整的電子商務系統：產品目錄、購物車、訂單管理、付款、使用者設定檔——每個網域是 1 個微服務 + 1
          個微前端。詳細架構、技術選擇、資料流程圖、Kubernetes 上的部署架構。
        duration_minutes: 120
        is_free: true
        sort_order: 29
        video_url: null
      - id: 019e4a33-d430-7b20-c001-b1c2d3e4f530
        title: 第 30 課：遷移指南 — 從整體架構到微服務 + 微前端
        slug: bai-30-migration-guide-tu-monolith-sang-microservices-micro-frontend
        description: >-
          實用的遷移策略：Strangler Fig Pattern、Branch by Abstraction、Parallel
          Run。遷移前端：從整體式 SPA 逐步遷移到微前端。遷移後端：從整體中提取服務。團隊劃分、時間安排、風險管理。從
          IKEA、Spotify、Zalando 學到的經驗教訓。
        duration_minutes: 90
        is_free: true
        sort_order: 30
        video_url: null
locale: zh-tw
---

# 微服務與微前端系統設計 - 從基礎知識到生產

## 概述

本系列透過**微服務後端 + 微前端**架構帶您從**零到生產**——這是需要多個並行開發團隊的複雜系統的最現代的架構模型。

與其他系列只關注後端或前端不同，本系列將**雙方**與**全端架構師**視角相結合，幫助您了解如何設計一個從UI到資料庫的**端到端**系統。

## 你會學到什麼？

### 🏗️ 建築與設計
- 使用**領域驅動設計**（限界上下文、事件風暴）進行系統分離
- 設計**微服務後端**：API設計、服務間通訊、資料架構
- 設計**微前端**：模組聯合、Shell 應用程式、設計系統、跨應用程式通訊

### 🔗 全端集成
- **BFF（前端後端）**模式－微前端與微服務之間的橋樑
- **API 閘道** — 路由、驗證、速率限制、負載平衡
- **GraphQL Federation** — 多個微前端的統一資料層

### 🧪 測試和質量
- 測試微服務：單元、整合、契約測試
- 測試微前端：組件、視覺回歸、E2E
- 消費者驅動的合約與 Pact

### 🚀 CI/CD 和製作
- Mono-repo 與 Multi-repo 策略
- 每個服務/微前端都有獨立的 CI/CD 管道
- 金絲雀發布、藍綠部署、功能標誌
- 全端可觀察性：前端→API→後端追蹤
- 生產準備清單

### 📋 案例研究
- **電商平台**：從架構到部署的完整設計
- **遷移指南**：從整體到微服務+微前端（Strangler Fig，Branch by Abstraction）

## 目標受眾

- **後端工程師**想要了解微前端以設計合適的 API
- **前端工程師**希望使用微前端擴充應用程式
- **全端工程師**想要了解端到端架構
- **軟體架構師**需要生產系統的藍圖
- **技術主管**正計劃從 Monolith 遷移

## 需要知識

- 了解至少 1 種後端語言（Node.js、Go、Java、Python）
- 了解至少 1 個前端框架（React、Vue、Angular）
- 對 REST API、HTTP、Docker 的基本了解
- **系統架構：從零到英雄**系列是一個很好的補充，但不是必需的

## 系列中使用的技術

|層 |技術 |
|--------|-------------|
| **微前端** | React、模組聯合（Webpack 5 / Vite）、single-spa、Web 元件 |
| **設計系統** | Storybook、Tailwind CSS、Shadow DOM、CSS 模組 |
| **BFF / API 閘道** | Node.js、Kong/APISIX、GraphQL（阿波羅聯邦）|
| **後端** | Node.js/Go、REST、gRPC、GraphQL |
| **訊息傳送** | RabbitMQ、阿帕契卡夫卡、NATS |
| **資料庫** | PostgreSQL、MongoDB、Redis、Elasticsearch |
| **CI/CD** | GitHub Actions、GitLab CI、ArgoCD、Docker、Kubernetes |
| **可觀察性** | OpenTelemetry、Grafana、Prometheus、Jaeger |
| **授權** | Keycloak、OAuth2、JWT、OIDC |

## 學習路徑

```
Phần 1-3: Nền tảng Backend     (9 bài)  → Hiểu mindset & thiết kế backend
Phần 4-5: Micro Frontend       (7 bài)  → Nắm vững kiến trúc & xây dựng frontend
Phần 6:   API Layer             (3 bài)  → Kết nối backend & frontend
Phần 7-8: Testing & CI/CD      (6 bài)  → Đảm bảo chất lượng & tự động hóa
Phần 9:   Production           (3 bài)  → Observability & production readiness
Phần 10:  Case Studies          (2 bài)  → Áp dụng thực tế & migration
```
