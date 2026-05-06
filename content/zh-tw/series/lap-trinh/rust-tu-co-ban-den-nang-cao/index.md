---
id: 019d8b40-f100-7001-b007-rust000000001
title: Rust：從基礎到高級
slug: rust-tu-co-ban-den-nang-cao
description: >-
  從基礎到進階的全面 Rust
  課程，幫助您掌握最安全、最高效能的程式語言。包括所有權、借用、生命週期、特徵、非同步/等待、Actix-web/Axum、SQLx、gRPC、WebAssembly、測試和生產部署。已更新至
  Rust 2024 版本，包含最新的 2026 年最佳實務。
featured_image: uploads/2026/03/rust-banner-v2.png
level: beginner
duration_hours: 90
lesson_count: 22
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
  - name: Rust
    slug: rust
  - name: Backend
    slug: backend
  - name: Systems Programming
    slug: systems-programming
  - name: Actix
    slug: actix
  - name: Axum
    slug: axum
  - name: Tokio
    slug: tokio
  - name: SQLx
    slug: sqlx
  - name: gRPC
    slug: grpc
  - name: WebAssembly
    slug: webassembly
  - name: Docker
    slug: docker
  - name: Testing
    slug: testing
  - name: Concurrency
    slug: concurrency
  - name: Ownership
    slug: ownership
  - name: PostgreSQL
    slug: postgresql
sections:
  - id: section-01
    title: 第 1 部分：Rust 基礎知識
    description: 所有權、借用、生命週期、類型、控制流程、錯誤處理
    sort_order: 1
    lessons:
      - id: 019d8b40-f101-7001-b007-rust000000101
        title: 第 1 課：Rust 簡介 - 效能與安全的結合
        slug: bai-1-gioi-thieu-rust
        description: >-
          為什麼生鏽？零成本抽象，無需 GC 即可確保記憶體安全。比較 Rust、Go、C++ 和 Zig。安裝
          rustup、cargo、rust-analyzer。你好世界，貨運項目結構。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-f102-7001-b007-rust000000102
        title: 第 2 課：變數、類型和控制流
        slug: bai-2-variables-types-va-control-flow
        description: 預設的不變性，陰影。標量類型、複合型別（元組、陣列）。字串與 &str。 if/else、匹配、循環。模式匹配深入研究。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-f103-7001-b007-rust000000103
        title: 第 3 課：所有權、借用與生命週期
        slug: bai-3-ownership-borrowing-va-lifetimes
        description: 所有權規則、移動語意、複製特徵。引用、借用規則、可變引用。生命週期註解、生命週期省略、「靜態生命週期」。借用檢查器。
        duration_minutes: 150
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-f104-7001-b007-rust000000104
        title: 第 4 課：結構、枚舉和模式匹配
        slug: bai-4-structs-enums-va-pattern-matching
        description: '結構、impl 塊、方法。枚舉、選項<T>、結果<T, E>。模式匹配有match、if let、while let。解構。構建器模式。'
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 第 2 部分：高級 Rust
    description: 特徵、泛型、閉包、迭代器、智慧型指標、非同步
    sort_order: 2
    lessons:
      - id: 019d8b40-f201-7001-b007-rust000000201
        title: 第 5 課：特徵與泛型
        slug: bai-5-traits-va-generics
        description: >-
          特徵定義，預設實現。通用類型，特徵邊界。相關類型，超級特徵。 impl Trait, dyn Trait. Derive
          macros.常見特徵（顯示、調試、克隆、從/到）。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-f202-7001-b007-rust000000202
        title: 第 6 課：閉包、迭代器和集合
        slug: bai-6-closures-iterators-va-collections
        description: >-
          閉包、Fn/FnMut/FnOnce 特徵。迭代器特徵、迭代器適配器（映射、過濾器、折疊）。
          Vec、HashMap、HashSet、BTreeMap。收集、連結、自訂迭代器。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-f203-7001-b007-rust000000203
        title: 第 7 課：錯誤處理與模組
        slug: bai-7-error-handling-va-modules
        description: 結果，選項，展開，期待。 ？運算符，錯誤傳播。自訂錯誤類型，無論如何，這個錯誤。模組系統、板條箱結構、酒吧可見性。貨物工作區。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-f204-7001-b007-rust000000204
        title: 第 8 課：智慧指針和並發
        slug: bai-8-smart-pointers-va-concurrency
        description: >-
          Box、Rc、Arc、RefCell、Mutex、RwLock。發送/同步特徵。 std::thread，訊息傳遞（通道）。共享狀態並發。
          Rayon 用於資料並行性。無畏並發。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 第 3 部分：非同步 Rust 和 Web 開發
    description: Tokio、非同步/等待、Axum/Actix-web、REST API
    sort_order: 3
    lessons:
      - id: 019d8b40-f301-7001-b007-rust000000301
        title: 第 9 課：異步 Rust 和 Tokio
        slug: bai-9-async-rust-va-tokio
        description: >-
          非同步/等待、未來特徵、Pin。 Tokio 運作時、spawn、JoinHandle。東京頻道（mpsc、廣播、觀看）。
          tokio::選擇！ 、tokio::sync。異步流。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-f302-7001-b007-rust000000302
        title: 第 10 課：Axum 框架和 REST API
        slug: bai-10-axum-framework-va-rest-api
        description: >-
          Axum 設定、路由、處理程序、提取器。狀態管理，中間件（塔）。序列化、JSON 響應。錯誤處理，自訂錯誤。比較
          Axum、Actix-web 和 Rocket。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-f303-7001-b007-rust000000303
        title: 第 11 課：SQLx 和資料庫集成
        slug: bai-11-sqlx-va-database-integration
        description: SQLx 非同步、編譯時查詢檢查。遷移、連接池。 CRUD 操作、交易。 Sea-ORM 替代方案。儲存庫模式，乾淨的架構。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-f304-7001-b007-rust000000304
        title: 第 12 課：身分驗證與授權
        slug: bai-12-authentication-va-authorization
        description: >-
          JWT 與 jsonwebtoken 箱，argon2 密碼哈希。基於中間件的身份驗證、提取器。 RBAC，塔式中介軟體。 OAuth2
          整合。會話管理。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 第 4 部分：進階後端
    description: WebSockets、gRPC、訊息佇列、快取、CLI 工具
    sort_order: 4
    lessons:
      - id: 019d8b40-f401-7001-b007-rust000000401
        title: 第 13 課：WebSocket 和即時
        slug: bai-13-websockets-va-real-time
        description: tokio-tungstenite、axum WebSocket 支援。連接管理器、廣播、房間模式。伺服器發送的事件。即時聊天應用程式。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-f402-7001-b007-rust000000402
        title: 第 14 課：gRPC 與 Tonic
        slug: bai-14-grpc-voi-tonic
        description: >-
          協定緩衝區，prost 程式碼產生。 Tonic gRPC 框架，一元/流 RPC。攔截器、TLS、負載平衡。用於瀏覽器客戶端的
          gRPC-web。
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-f403-7001-b007-rust000000403
        title: 第 15 課：訊息佇列和後台作業
        slug: bai-15-message-queues-va-background-jobs
        description: >-
          RabbitMQ 與 lapin，Kafka 與 rdkafka。 NATS 訊息傳遞。後台作業處理。事件驅動的架構模式。 Redis
          發佈/訂閱。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-f404-7001-b007-rust000000404
        title: 第 16 課：快取、CLI 工具和宏
        slug: bai-16-caching-cli-tools-va-macros
        description: >-
          使用 deadpool-redis 進行 Redis 快取。帶有 clap 的命令列工具。過程宏、派生宏。 Serde
          自訂序列化。配置管理。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 第 5 部分：WebAssembly 和系統
    description: WASM、FFI、不安全 Rust、嵌入式、系統編程
    sort_order: 5
    lessons:
      - id: 019d8b40-f501-7001-b007-rust000000501
        title: 第 17 課：WebAssembly 與 Rust
        slug: bai-17-webassembly-voi-rust
        description: >-
          wasm-pack、wasm-bindgen。 Rust → WASM 編譯。 JavaScript
          互通、web-sys、js-sys。效能關鍵的瀏覽器程式碼。 Leptos/Yew 前端框架。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-f502-7001-b007-rust000000502
        title: 第 18 課：FFI 與不安全的 Rust
        slug: bai-18-ffi-va-unsafe-rust
        description: >-
          不安全塊、原始指標、轉換。 FFI（外部函數介面），從 Rust 呼叫 C。建置 C 相容庫。 PyO3 用於 Python
          綁定。安全變數。
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 第 6 部分：測試、CI/CD 和生產
    description: 測試、基準測試、Docker、CI/CD、監控
    sort_order: 6
    lessons:
      - id: 019d8b40-f601-7001-b007-rust000000601
        title: 第 19 課：測試和基準測試
        slug: bai-19-testing-va-benchmarking
        description: >-
          單元測試、整合測試、文件測試。 rstest（夾具、參數化）、mockall。使用 reqwest 進行 API 測試。
          Criterion.rs 基準測試。基於屬性的測試，模糊測試。代碼覆蓋率。
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-f602-7001-b007-rust000000602
        title: 第 20 課：Rust 的 Docker 和 CI/CD
        slug: bai-20-docker-va-cicd-cho-rust
        description: >-
          多階段 Docker 建置（建置器 + 臨時/無發行版）。 Cargo-Chef 用於快取相依性。 GitHub Actions
          CI/CD，交叉編譯。貨物拒絕、貨物審計。 Clippy，rustfmt。
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8b40-f603-7001-b007-rust000000603
        title: 第 21 課：可觀察性與監控
        slug: bai-21-observability-va-monitoring
        description: >-
          追蹤箱，結構化日誌記錄。 OpenTelemetry 整合、Prometheus 指標。 Grafana 儀表板。健康檢查，優雅關閉。
          tokio-console 用於非同步調試。
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8b40-f604-7001-b007-rust000000604
        title: 第 22 課：生產部署與效能調優
        slug: bai-22-production-deployment-va-performance-tuning
        description: >-
          發布設定檔優化、LTO、程式碼產生單元。記憶體分配器（jemalloc、mimalloc）。連線池、請求批次處理。使用 Rust
          擴展策略、微服務。
        duration_minutes: 150
        is_free: true
        sort_order: 22
        video_url: null
locale: zh-tw
---

課程 **Rust：從基礎知識到高級** 幫助您掌握 Rust — Stack Overflow 上多年來最受歡迎的語言，將 C/C++ 級效能與記憶體安全相結合，無需垃圾收集器。

## 你會學到什麼？

- **Rust Core**：所有權、借用、生命週期、特徵、泛型、錯誤處理
- **並發**：線程、非同步/等待、Tokio、通道、智慧指針
- **Web 開發**：Axum、SQLx、JWT、gRPC (Tonic)、WebSockets
- **進階**：WebAssembly、FFI、不安全 Rust、宏
- **生產**：測試、Docker、CI/CD、可觀察性、效能調優

## 請求

- 基礎程式設計知識（C/C++、Go或其他語言）
- 了解記憶體管理是一個優勢
- 安裝了 Rust 工具鏈 (rustup) 和 Docker 的計算機
