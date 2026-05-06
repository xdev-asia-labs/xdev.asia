---
id: 019d8b40-g100-7001-b008-nodejs0000001
title: Node.js 核心：從基礎到高級
slug: nodejs-core-tu-co-ban-den-nang-cao
description: >-
  Node.js 核心課程從基礎到進階都很全面，可以幫助您深入了解 Node.js
  運行時，無論框架如何。包括事件循環、流、工作執行緒、叢集、HTTP/2、加密、檔案系統、子程序、本機模組、效能分析。使用最新的 2026 年最佳實踐更新到
  Node.js 22 LTS。
featured_image: uploads/2026/03/nodejs-banner-v2.png
level: beginner
duration_hours: 75
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
  - name: Node.js
    slug: nodejs
  - name: JavaScript
    slug: javascript
  - name: TypeScript
    slug: typescript
  - name: Backend
    slug: backend
  - name: Event Loop
    slug: event-loop
  - name: Streams
    slug: streams
  - name: Worker Threads
    slug: worker-threads
  - name: HTTP
    slug: http
  - name: Cluster
    slug: cluster
  - name: Performance
    slug: performance
  - name: Testing
    slug: testing
  - name: Docker
    slug: docker
  - name: V8 Engine
    slug: v8-engine
sections:
  - id: section-01
    title: 第 1 部分：Node.js 內部結構
    description: V8 引擎、事件循環、libuv、模組系統、非同步模式
    sort_order: 1
    lessons:
      - id: 019d8b40-g101-7001-b008-nodejs0000101
        title: 第 1 課：Node.js 架構深入探討
        slug: bai-1-nodejs-architecture-deep-dive
        description: >-
          V8 引擎、libuv、C++ 綁定。單線程事件循環模型。 Node.js、Deno 和 Bun。發展歷史、用例。節點
          --inspect，V8 標誌。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-g102-7001-b008-nodejs0000102
        title: 第 2 課：事件循環與非同步模式
        slug: bai-2-event-loop-va-async-patterns
        description: >-
          事件循環階段（計時器、掛起、輪詢、檢查、關閉）。微任務與巨集任務。 process.nextTick 與queueMicrotask
          與setImmediate。回調、Promise、非同步/等待。 Promise.allSettled，Promise.any。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-g103-7001-b008-nodejs0000103
        title: 第 3 課：模組系統與套件管理
        slug: bai-3-module-system-va-package-management
        description: >-
          CommonJS vs ES Modules，模組解析演算法。 Package.json欄位匯出，條件匯出。 npm、pnpm 工作區。
          Node.js 內建測試運行器、權限模型。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-g104-7001-b008-nodejs0000104
        title: 第 4 課：Node.js 中的 TypeScript 和現代 JavaScript
        slug: bai-4-typescript-va-modern-javascript
        description: >-
          Node.js、tsx/ts-node 的 TypeScript 設定。類型安全配置、路徑別名。 ESBuild/SWC 編譯。
          Node.js 類型剝離（--experimental-strip-types）。裝飾器、元資料。
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 第 2 部分：核心模組深入探討
    description: 檔案系統、流、HTTP、加密、作業系統、進程
    sort_order: 2
    lessons:
      - id: 019d8b40-g201-7001-b008-nodejs0000201
        title: 第 5 課：檔案系統與路徑
        slug: bai-5-file-system-va-path
        description: >-
          fs/promises、fs.createReadStream/WriteStream。文件監視（fs.watch、chokidar）。路徑操作，__dirname，import.meta.url。臨時文件，原子寫入。全域模式。
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-g202-7001-b008-nodejs0000202
        title: 第 6 課：流與緩衝區
        slug: bai-6-streams-va-buffers
        description: >-
          可讀、可寫、轉換、雙工流。背壓、pipeline()、stream.compose()。緩衝區
          API、ArrayBuffer、TypedArray。基於流的檔案處理、CSV/JSON 解析。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-g203-7001-b008-nodejs0000203
        title: 第 7 課：HTTP/HTTPS 與 HTTP/2
        slug: bai-7-http-https-va-http2
        description: >-
          http.createServer、路由、中間件模式從頭開始。 HTTPS/TLS 設定。 HTTP/2
          伺服器推送。請求/回應處理，分塊傳輸。保持活動狀態，連線池。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-g204-7001-b008-nodejs0000204
        title: 第 8 課：加密、作業系統和流程
        slug: bai-8-crypto-os-va-process
        description: >-
          加密模組：雜湊、HMAC、加密 (AES)、金鑰派生（scrypt、argon2）。數位簽名。作業系統模組、進程訊號、環境變數。
          child_process，執行/產生。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 第 3 部分：並發與網絡
    description: 工作執行緒、叢集、TCP/UDP、WebSockets、IPC
    sort_order: 3
    lessons:
      - id: 019d8b40-g301-7001-b008-nodejs0000301
        title: 第 9 課：工作執行緒與 CPU 密集型任務
        slug: bai-9-worker-threads-va-cpu-intensive
        description: >-
          工作線程、SharedArrayBuffer、原子。 MessageChannel，可傳輸物件。線程池模式，Piscina。 CPU
          密集型任務卸載、映像處理。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-g302-7001-b008-nodejs0000302
        title: 第 10 課：叢集模組和負載平衡
        slug: bai-10-cluster-module-va-load-balancing
        description: 叢集模組，fork()，迴圈。 PM2進程管理器，優雅關機。黏性會議，共享狀態挑戰。零停機部署，滾動重啟。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-g303-7001-b008-nodejs0000303
        title: 第 11 課：TCP、UDP 和 WebSocket
        slug: bai-11-tcp-udp-va-websockets
        description: >-
          net 模組（TCP 伺服器/客戶端）、dgram (UDP)。帶有 ws 庫的 WebSocket
          伺服器。連線管理，二進位協定。協議設計，定制線路格式。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-g304-7001-b008-nodejs0000304
        title: 第 12 課：事件、計時器和診斷
        slug: bai-12-events-timers-va-diagnostics
        description: >-
          EventEmitter 模式、自訂事件、記憶體洩漏偵測。中止控制器/中止訊號。診斷通道，async_hooks。 Node.js
          檢查器，堆疊快照。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 第 4 部分：無框架構建
    description: 從頭開始的HTTP伺服器、路由引擎、中介軟體、資料庫
    sort_order: 4
    lessons:
      - id: 019d8b40-g401-7001-b008-nodejs0000401
        title: 第 13 課：從頭開始建立 HTTP 框架
        slug: bai-13-xay-dung-http-framework-tu-scratch
        description: 建構迷你框架：路由器、中間件管道、請求解析、回應助手。與 Express/Fastify 內部結構進行比較。內容協商、CORS。
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-g402-7001-b008-nodejs0000402
        title: 第 14 課：資料庫驅動程式和連線池
        slug: bai-14-database-drivers-va-connection-pooling
        description: >-
          pg (PostgreSQL)、mysql2、better-sqlite3 本機驅動程式。連接池、準備好的語句。事務、查詢建構器
          (Knex.js)。遷移工具。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-g403-7001-b008-nodejs0000403
        title: 第 15 課：快取、佇列和後台作業
        slug: bai-15-caching-queues-va-background-jobs
        description: >-
          Redis 用戶端（ioredis），快取模式。 BullMQ 作業佇列、優先權佇列、速率限制。使用 node-cron 進行 Cron
          作業。記憶體中快取（LRU 快取）。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-g404-7001-b008-nodejs0000404
        title: 第 16 課：本機外掛程式和 N-API
        slug: bai-16-native-addons-va-napi
        description: >-
          N-API（節點 API）、napi-rs（Rust 綁定）。節點 gyp，預建置。 C/C++
          外掛程式、效能關鍵的本機程式碼。何時使用原生外掛程式、工作執行緒和 WASM。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 第 5 部分：測試、性能和生產
    description: 測試、分析、Docker、監控、擴展
    sort_order: 5
    lessons:
      - id: 019d8b40-g501-7001-b008-nodejs0000501
        title: 第 17 課：測試 Node.js 應用程式
        slug: bai-17-testing-nodejs-applications
        description: >-
          Node.js 內建測試運行器 (node:test)。 Vitest 用於單元/整合測試。用於 HTTP 測試的 Supertest。用於
          HTTP 模擬的 Nock。測試容器，程式碼覆蓋率（c8/istanbul）。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-g502-7001-b008-nodejs0000502
        title: 第 18 課：效能分析與最佳化
        slug: bai-18-performance-profiling-va-optimization
        description: >-
          V8 分析器，--prof 標誌，火焰圖。記憶體洩漏檢測、堆快照。
          Clinic.js（Doctor、Bubbleprof、Flame）。事件循環滯後監控，0x 分析器。 GC 調諧。
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-g503-7001-b008-nodejs0000503
        title: 第 19 課：Docker 與 CI/CD
        slug: bai-19-docker-va-cicd
        description: >-
          Node.js 的 Docker 多階段建置。 Alpine、slim 和 distroless。 Docker Compose，健康檢查。
          GitHub Actions CI/CD 管道。 Docker 中的 pnpm，.dockerignore 最佳實踐。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-g504-7001-b008-nodejs0000504
        title: 第 20 課：生產監控與擴展
        slug: bai-20-production-monitoring-va-scaling
        description: >-
          Pino 结构化日志记录、OpenTelemetry 跟踪。 Prometheus 指標、Grafana 儀表板。 PM2
          生态系统。優雅關閉、健康檢查。水平扩展，无状态设计。
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
locale: zh-tw
---

**Node.js 核心：從基礎知識到進階**課程可協助您深入了解 Node.js 執行時期 - 無論任何框架，從 V8 引擎內部結構到生產級應用程式。

## 你會學到什麼？

- **內部**：V8 引擎、事件循環、libuv、模組系統、非同步模式
- **核心模組**：檔案系統、串流、HTTP/2、加密、工作執行緒、集群
- **網路**：TCP/UDP、WebSockets、自訂協議
- **建置**：從頭開始的 HTTP 框架、資料庫驅動程式、快取、佇列
- **生產**：測試、分析、Docker、CI/CD、監控、擴展

## 請求

- 基本的 ES6+ JavaScript 知識
- 基本 TypeScript（建議）
- Node.js 22 LTS 和 Docker
