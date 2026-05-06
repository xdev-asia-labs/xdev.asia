---
id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
title: 系統架構：從零到英雄
slug: system-architecture-from-zero-to-hero
description: >-
  系統架構課程從基礎到進階都很全面，幫助您掌握如何設計大型系統。包括可擴展性、可用性、一致性、微服務、事件驅動、CQRS
  等架構模式的基礎知識，以及負載平衡器、CDN、快取、訊息佇列、資料庫擴充等基礎架構元件。該課程將理論與來自 Netflix、Uber、Twitter
  和其他大型系統的現實案例研究相結合。根據 2026 年現代建築趨勢進行更新。
featured_image: uploads/2026/03/system-architecture-series-banner-2026.png
level: intermediate
duration_hours: 80
lesson_count: 30
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-30T10:00:00.000000Z'
created_at: '2026-03-30T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019d8a21-b200-7001-c001-a1b2c3d4e5f6
  name: 系統架構
  slug: kien-truc-he-thong
tags:
  - name: SystemDesign
    slug: system-design
  - name: Architecture
    slug: architecture
  - name: Microservices
    slug: microservices
  - name: DistributedSystems
    slug: distributed-systems
  - name: Scalability
    slug: scalability
  - name: HighAvailability
    slug: high-availability
  - name: LoadBalancer
    slug: loadbalancer
  - name: Caching
    slug: caching
  - name: Database
    slug: database
  - name: MessageQueue
    slug: message-queue
  - name: EventDriven
    slug: event-driven
  - name: CQRS
    slug: cqrs
  - name: CDN
    slug: cdn
  - name: API
    slug: api
  - name: cloud-native
    slug: cloud-native
  - name: security
    slug: security
  - name: monitoring
    slug: monitoring
  - name: production
    slug: production
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: 第 1 部分：系統設計基礎
    description: 了解系統設計問題的核心概念和方法
    sort_order: 1
    lessons:
      - id: 019d8a21-c101-7001-d001-e1f2a3b4c501
        title: 第一課：什麼是系統設計？ - 概述和路線圖
        slug: bai-1-system-design-la-gi-tong-quan-va-roadmap
        description: 介紹系統設計，為什麼需要係統設計，如何解決系統設計問題（需求→高層設計→深入研究→瓶頸）。比較整體系統與分散式系統。學習路線圖和必要的資源。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-c102-7001-d001-e1f2a3b4c502
        title: 第 2 課：效能與可擴展性 - 垂直和水平擴展
        slug: bai-2-performance-vs-scalability-vertical-horizontal-scaling
        description: 區分效能和可擴展性。垂直擴展（縱向擴展）與水平擴展（橫向擴展）。無狀態與有狀態架構。何時選擇哪種擴充策略？粗略計算和基本容量規劃。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-c103-7001-d001-e1f2a3b4c503
        title: 第 3 課：延遲與吞吐量以及可用性與一致性
        slug: bai-3-latency-vs-throughput-availability-vs-consistency
        description: >-
          延遲、吞吐量以及它們之間的關係。 CAP 定理（一致性、可用性、分區容錯性）。 CP 與 AP
          系統。一致性模式（強、最終、弱）。可用性模式（故障轉移、複製）。數量上的可用性（99.9%、99.99%）。
        duration_minutes: 150
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8a21-c104-7001-d001-e1f2a3b4c504
        title: 第 4 課：系統設計的網路基礎知識
        slug: bai-4-networking-fundamentals-cho-system-design
        description: >-
          DNS 及其工作原理。 TCP 與 UDP。 HTTP/HTTPS、HTTP/2、HTTP/3。 WebSocket 和伺服器發送的事件。
          REST、RPC 與 GraphQL。每個程式設計師都應該知道的延遲數字。
        duration_minutes: 130
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 第 2 部分：基礎設施組件
    description: 深入了解系統架構中最重要的構建塊
    sort_order: 2
    lessons:
      - id: 019d8a21-c105-7001-d001-e1f2a3b4c505
        title: 第 5 課：負載平衡器 - 智慧負載分配
        slug: bai-5-load-balancer-phan-phoi-tai-thong-minh
        description: >-
          什麼是負載平衡器以及為什麼需要它？第 4 層與第 7 層負載平衡。演算法：循環、最少連線、IP
          哈希、加權。反向代理與負載平衡器。健康檢查。主動-主動與主動-被動。親身實踐 HAProxy 和 Nginx。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-c106-7001-d001-e1f2a3b4c506
        title: 第6課：CDN（內容傳遞網路）－全球加速
        slug: bai-6-cdn-content-delivery-network-tang-toc-toan-cau
        description: >-
          什麼是 CDN 以及它如何運作？推送 CDN 與拉取 CDN。緩存失效策略。多層CDN架構。邊緣運算。比較 CloudFlare、AWS
          CloudFront、Fastly。用例和反模式。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-c107-7001-d001-e1f2a3b4c507
        title: 第 7 課：快取策略 - 使用快取優化效能
        slug: bai-7-caching-strategies-toi-uu-hieu-nang-voi-cache
        description: >-
          快取層：客戶端、CDN、Web
          伺服器、應用程式、資料庫。快取模式：快取旁路、直寫式、後寫式、提前刷新。快取驅逐策略（LRU、LFU、TTL）。 Redis 與
          Memcached。 Cache Stampede、Thundering Herd 以及如何處理它們。分散式快取。
        duration_minutes: 180
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8a21-c108-7001-d001-e1f2a3b4c508
        title: 第 8 課：反向代理和 API 網關
        slug: bai-8-reverse-proxy-va-api-gateway
        description: >-
          反向代理：SSL 終止、壓縮、安全。 API閘道模式：路由、驗證、速率限制、節流。比較 Nginx、Envoy、Kong、AWS API
          閘道。服務網格概念（Istio、Linkerd）。 BFF（前端後端）模式。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 第 3 部分：資料庫架構與資料管理
    description: 為大型系統設計和擴展資料庫
    sort_order: 3
    lessons:
      - id: 019d8a21-c109-7001-d001-e1f2a3b4c509
        title: 第 9 課：SQL 與 NoSQL - 選出正確的資料庫
        slug: bai-9-sql-vs-nosql-chon-database-phu-hop
        description: >-
          RDBMS 和 ACID 屬性。 NoSQL
          類別：鍵值（Redis、DynamoDB）、文件（MongoDB、CouchDB）、寬列（Cassandra、HBase）、圖（Neo4j）。鹼與酸。什麼時候選擇SQL，什麼時候選擇NoSQL。多語言持久性。
          NewSQL（CockroachDB、TiDB）。
        duration_minutes: 160
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-c110-7001-d001-e1f2a3b4c510
        title: 第 10 課：資料庫複製 - 主從和主
        slug: bai-10-database-replication-master-slave-master-master
        description: >-
          什麼是複製以及為什麼需要它？同步與異步複製。主從：唯讀副本、故障轉移、升級。大師-大師：衝突解決、裂腦。複製延遲以及如何處理它。親身體驗
          PostgreSQL 流複製。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a21-c111-7001-d001-e1f2a3b4c511
        title: 第 11 課：資料庫分片與分區
        slug: bai-11-database-sharding-partitioning
        description: >-
          分片策略：基於哈希、基於範圍、地理、基於目錄。一致的哈希。片鍵選擇。跨分片查詢和連接。重新平衡碎片。聯合（功能分區）。非規範化權衡。真實案例：Instagram、Pinterest。
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8a21-c112-7001-d001-e1f2a3b4c512
        title: 第 12 課：資料儲存模式 - 物件儲存、資料湖、時間序列
        slug: bai-12-data-storage-patterns-object-storage-data-lake-time-series
        description: >-
          物件儲存（S3、MinIO）。資料湖與資料倉儲。時間序列資料庫（InfluxDB、TimescaleDB）。搜尋引擎（Elasticsearch）。
          Blob 儲存模式。資料生命週期管理。熱/溫/冷儲存層。
        duration_minutes: 140
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 第 4 部分：非同步處理和通信
    description: 訊息佇列、事件驅動架構和非同步處理模式
    sort_order: 4
    lessons:
      - id: 019d8a21-c113-7001-d001-e1f2a3b4c513
        title: 第 13 課：訊息佇列和任務佇列
        slug: bai-13-message-queues-task-queues
        description: >-
          什麼是訊息隊列以及何時應該使用它？點對點與 Pub/Sub 模型。比較 RabbitMQ、Apache Kafka、AWS
          SQS、Redis Streams。任務佇列（Celery、Sidekiq）。死信隊列。背壓和流量控制。冪等性和 Exactly-Once
          處理。
        duration_minutes: 180
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-c114-7001-d001-e1f2a3b4c514
        title: 第 14 課：事件驅動架構 (EDA)
        slug: bai-14-event-driven-architecture
        description: >-
          事件驅動架構模式。事件溯源。 CQRS（命令查詢責任分離）。活動商店設計。分散式事務的 Saga 模式。編排與編排。 Apache
          Kafka 深入研究。真實案例：銀行、電子商務訂單處理。
        duration_minutes: 200
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8a21-c115-7001-d001-e1f2a3b4c515
        title: 第 15 課：串流處理和即時資料管道
        slug: bai-15-stream-processing-real-time-data-pipelines
        description: >-
          批次與流處理。阿帕契卡夫卡流。 Apache Flink、Spark 流。即時分析管道設計。使用 Debezium 進行變更資料擷取
          (CDC)。 Lambda 架構與 Kappa 架構。真實案例：詐欺偵測、即時儀表板。
        duration_minutes: 160
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-05
    title: 第 5 部分：架構模式
    description: 流行的架構模型以及如何在實踐中應用它們
    sort_order: 5
    lessons:
      - id: 019d8a21-c116-7001-d001-e1f2a3b4c516
        title: 第 16 課：從整體到微服務 - 轉型策略
        slug: bai-16-monolith-to-microservices-chien-luoc-chuyen-doi
        description: >-
          單體架構：優點和缺點。微服務架構：原則、好處、挑戰。絞殺者無花果圖案。服務分解策略（依業務能力、按子網域）。每個服務的資料庫。 API
          組成。共享庫與不共享庫。
        duration_minutes: 180
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-c117-7001-d001-e1f2a3b4c517
        title: 第 17 課：服務通訊模式
        slug: bai-17-service-communication-patterns
        description: >-
          同步通訊：REST、gRPC、GraphQL。非同步通訊：訊息佇列、事件。服務發現（Consul、Etcd）。斷路器模式
          (Resilience4j)。重試、超時、艙壁模式。邊車模式。 API 版本控制策略。
        duration_minutes: 170
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-c118-7001-d001-e1f2a3b4c518
        title: 第 18 課：系統架構的領域驅動設計 (DDD)
        slug: bai-18-domain-driven-design-cho-system-architecture
        description: >-
          DDD 策略模式：有界上下文、通用語言、上下文映射。 DDD
          戰術模式：聚合、實體、值物件、領域事件、儲存庫。反腐敗層。應用DDD來分解微服務。事件風暴研討會。
        duration_minutes: 190
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a21-c119-7001-d001-e1f2a3b4c519
        title: 第 19 課：無伺服器和雲端原生架構
        slug: bai-19-serverless-cloud-native-architecture
        description: >-
          無伺服器架構：AWS Lambda、Google Cloud Functions。 FaaS（功能即服務）模式。 12
          因素應用方法論。雲原生原則。容器編排概述。平台工程。什麼時候是無伺服器，什麼時候是容器。成本優化策略。
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-06
    title: 第 6 部分：可靠性、安全性和可觀察性
    description: 確保生產系統可靠、安全、可觀察
    sort_order: 6
    lessons:
      - id: 019d8a21-c120-7001-d001-e1f2a3b4c520
        title: 第 20 課：高可用性和容錯
        slug: bai-20-high-availability-fault-tolerance
        description: >-
          為失敗而設計。冗餘策略。主動-主動與主動-被動
          HA。健康檢查和自我修復。優雅的退化。功能標誌。藍綠部署與金絲雀部署。零停機部署。混沌工程基礎（Netflix Chaos Monkey）。
        duration_minutes: 180
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8a21-c121-7001-d001-e1f2a3b4c521
        title: 第 21 課：災難復原與多區域架構
        slug: bai-21-disaster-recovery-multi-region-architecture
        description: >-
          RPO（復原點目標）和
          RTO（復原時間目標）。災難復原策略：備份與復原、指示燈、熱待機、多站點主動-主動。跨區域複製。全域負載平衡。跨區域資料一致性。災難復原測試和運作手冊。
        duration_minutes: 170
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a21-c122-7001-d001-e1f2a3b4c522
        title: 第 22 課：安全架構 - 縱深防禦
        slug: bai-22-security-architecture-defense-in-depth
        description: >-
          安全架構原則。驗證：OAuth 2.0、OIDC、JWT、mTLS。授權：RBAC、ABAC、ReBAC。 API
          安全：速率限制、輸入驗證、CORS。網路安全：VPC、防火牆、WAF。靜態和傳輸中的資料加密。零信任架構。秘密管理（保險庫）。
        duration_minutes: 190
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-c123-7001-d001-e1f2a3b4c523
        title: 第 23 課：可觀察性 - 監控、記錄和追蹤
        slug: bai-23-observability-monitoring-logging-tracing
        description: >-
          可觀察性的三大支柱：指標、日誌、追蹤。使用 Prometheus + Grafana 進行監控。使用 ELK/Loki
          進行集中日誌記錄。使用 Jaeger/Tempo 進行分散式追蹤。開放遙測標準。警報策略。 SLI、SLO、SLA
          定義。錯誤預算。運行手冊和事件響應。
        duration_minutes: 180
        is_free: true
        sort_order: 23
        video_url: null
  - id: section-07
    title: 第 7 部分：系統設計案例研究
    description: 從著名問題設計實用系統 - 向 Netflix、Uber、Twitter 學習
    sort_order: 7
    lessons:
      - id: 019d8a21-c124-7001-d001-e1f2a3b4c524
        title: 第 24 課：設計 URL 縮短器（如 Bit.ly）
        slug: bai-24-thiet-ke-url-shortener-nhu-bitly
        description: >-
          功能性和非功能性需求。高層次設計。 URL 編碼：Base62、MD5
          哈希。資料庫架構設計。重讀優化。快取策略。分析追蹤。速率限制。容量估算（1 億個 URL/天）。
        duration_minutes: 150
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-c125-7001-d001-e1f2a3b4c525
        title: 第 25 課：設計聊天系統（如 WhatsApp/Slack）
        slug: bai-25-thiet-ke-chat-system-nhu-whatsapp-slack
        description: >-
          1-1 聊天和群組聊天架構。 WebSocket
          連線管理。訊息傳遞保證。閱讀收據。線上/離線狀態。推播通知。媒體儲存。端對端加密。訊息扇出。擴展到數百萬個並發連接。
        duration_minutes: 180
        is_free: true
        sort_order: 25
        video_url: null
      - id: 019d8a21-c126-7001-d001-e1f2a3b4c526
        title: 第 26 課：設計新聞推播系統（如 Facebook/Twitter）
        slug: bai-26-thiet-ke-news-feed-system-nhu-facebook-twitter
        description: >-
          饋送產生：寫入時扇出與讀取時扇出（推與拉）。混合方法。時間表服務。排名和相關性演算法。社交圖。快取提要。媒體處理管道。真實案例研究：大規模
          Twitter 時間軸。
        duration_minutes: 180
        is_free: true
        sort_order: 26
        video_url: null
      - id: 019d8a21-c127-7001-d001-e1f2a3b4c527
        title: 第 27 課：設計影片串流平台（如 YouTube/Netflix）
        slug: bai-27-thiet-ke-video-streaming-platform-nhu-youtube-netflix
        description: >-
          影片上傳和轉碼管道。自適應位元率流（ABR）。 CDN 分發。視訊元數據服務。推薦引擎概述。縮圖生成。直播架構。
          DRM（數位版權管理）。成本優化。
        duration_minutes: 190
        is_free: true
        sort_order: 27
        video_url: null
      - id: 019d8a21-c128-7001-d001-e1f2a3b4c528
        title: 第 28 課：設計乘車共享平台（如 Uber/Grab）
        slug: bai-28-thiet-ke-ride-sharing-platform-nhu-uber-grab
        description: >-
          基於位置的服務。地理空間索引（Geohash、四叉樹、H3）。即時匹配演算法。預計到達時間計算。峰時定價架構。行程追蹤。支付處理整合。地圖路線服務。可擴展以支援數百萬次並發騎行。
        duration_minutes: 190
        is_free: true
        sort_order: 28
        video_url: null
      - id: 019d8a21-c129-7001-d001-e1f2a3b4c529
        title: 第29課：電子商務平台設計（如Amazon/Shopee）
        slug: bai-29-thiet-ke-e-commerce-platform-nhu-amazon-shopee
        description: >-
          產品目錄服務。購物車（無狀態與有狀態）。庫存管理（悲觀鎖定與樂觀鎖定）。訂單處理管道。支付一體化。搜尋和發現（Elasticsearch）。閃購/高流量事件處理。分散式事務（Saga
          模式）。推薦系​​統。
        duration_minutes: 200
        is_free: true
        sort_order: 29
        video_url: null
  - id: section-08
    title: 第 8 部分：生產就緒架構
    description: 總結知識並將其運用到實際生產中
    sort_order: 8
    lessons:
      - id: 019d8a21-c130-7001-d001-e1f2a3b4c530
        title: 第 30 課：架構決策記錄與生產清單
        slug: bai-30-architecture-decision-records-production-checklist
        description: >-
          架構決策記錄 (ADR) -
          記錄決策。生產準備清單。能力規劃框架。雲架構的成本估算。技術雷達。架構審查流程。課程總結以及後續的學習路徑。系統架構師的資源和社群。
        duration_minutes: 150
        is_free: true
        sort_order: 30
        video_url: null
locale: zh-tw
---

