---
id: 019d8a21-cb00-700b-d001-e1f2a3b4c5d6
title: 深入的事件驅動的微服務架構
slug: kien-truc-event-driven-microservices-chuyen-sau
description: >-
  關於事件驅動的微服務架構的深入課程。包括 Apache Kafka 和 Pulsar、Saga 模式、CQRS
  和事件溯源、發件箱模式、Exactly-once
  語意、模式登錄、死信佇列以及編排與編排。設計具有一致性保證的事件驅動的生產就緒微服務系統。案例研究：Uber、Wix、Booking.com。更新於
  2026 年。
featured_image: uploads/2026/03/event-driven-microservices-series-banner-2026.png
level: intermediate
duration_hours: 80
lesson_count: 25
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-31T10:00:00.000000Z'
created_at: '2026-03-31T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019d8a21-b200-7001-c001-a1b2c3d4e5f6
  name: 系統架構
  slug: kien-truc-he-thong
tags:
  - name: EventDriven
    slug: eventdriven
  - name: Microservices
    slug: microservices
  - name: Kafka
    slug: kafka
  - name: CQRS
    slug: cqrs
  - name: EventSourcing
    slug: eventsourcing
  - name: Saga
    slug: saga
  - name: DDD
    slug: ddd
  - name: DistributedSystems
    slug: distributedsystems
  - name: Messaging
    slug: messaging
  - name: Pulsar
    slug: pulsar
  - name: Patterns
    slug: patterns
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: 第 1 部分：事件驅動基礎
    description: 事件驅動架構 (EDA) 基礎知識
    sort_order: 1
    lessons:
      - id: 019d8a21-cb01-70cb-d001-e1f2a3b4c501
        title: 第 1 課：事件驅動架構概述 - 為什麼事件很重要
        slug: bai-1-tong-quan-event-driven-architecture-why-events-matter
        description: 事件驅動架構 (EDA) 基礎知識。事件、命令、查詢。時間耦合與事件解耦。 EDA 的優點和權衡。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-cb02-70cb-d001-e1f2a3b4c502
        title: 第 2 課：領域事件與事件建模
        slug: bai-2-domain-events-event-modeling
        description: DDD 中的領域事件。事件風暴研討會。事件建模技術。識別事件、命令、聚合。事件命名約定。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-cb03-70cb-d001-e1f2a3b4c503
        title: 第 3 課：訊息傳遞模式 - Pub/Sub、佇列和流
        slug: bai-3-messaging-patterns-pub-sub-queue-stream
        description: 訊息傳遞模式：點對點、發布/訂閱、事件流。訊息代理與事件流平台。最多一次、至少一次、恰好一次交付。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 第 2 部分：Apache Kafka 深入探究
    description: Kafka 內部架構：代理架構、主題分區、複製因子
    sort_order: 2
    lessons:
      - id: 019d8a21-cb04-70cb-d001-e1f2a3b4c504
        title: 第 4 課：Kafka 架構 - 代理、分區和複製
        slug: bai-4-kafka-architecture-brokers-partitions-replication
        description: Kafka 內部架構：代理架構、主題分區、複製因子。 ISR（同步副本）。領導人選舉。日誌段。控制器仲裁 (KRaft)。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-cb05-70cb-d001-e1f2a3b4c505
        title: 第 5 課：Kafka 生產者與消費者 - 進階模式
        slug: bai-5-kafka-producers-consumers-advanced-patterns
        description: 生產者：ack、批次、壓縮、冪等生產者。消費者：消費者群體、抵銷管理、再平衡。恰好一次語意 (EOS)。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-cb06-70cb-d001-e1f2a3b4c506
        title: 第 6 課：Kafka Streams 和 ksqlDB
        slug: bai-6-kafka-streams-ksqldb
        description: >-
          Kafka Streams：KStream、KTable、視窗、連線。國營商店。互動式查詢。 ksqlDB：流上的
          SQL。物化視圖。流處理拓撲。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-cb07-70cb-d001-e1f2a3b4c507
        title: 第 7 課：模式註冊表和資料序列化
        slug: bai-7-schema-registry-data-serialization
        description: >-
          架構註冊表：Avro、Protobuf、JSON 架構。模式演化規則。相容模式。模式驗證。 Confluence Schema
          Registry 與 Apicurio。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 第 3 部分：事件溯源和 CQRS
    description: 事件溯源基礎：事件儲存、事件重播、快照
    sort_order: 3
    lessons:
      - id: 019d8a21-cb08-70cb-d001-e1f2a3b4c508
        title: 第 8 課：事件溯源 - 不可變事件日誌作為事實來源
        slug: bai-8-event-sourcing-immutable-event-log-source-of-truth
        description: 事件溯源基礎：事件儲存、事件重播、快照。聚合重建。時態查詢。審計追蹤自然而然。事件版本控制。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-cb09-70cb-d001-e1f2a3b4c509
        title: 第 9 課：CQRS - 指令查詢職責分離
        slug: bai-9-cqrs-command-query-responsibility-segregation
        description: CQRS 模式：單獨的讀取/寫入模型。命令處理程序和網域邏輯。閱讀模型預測。最終一致性。何時使用 CQRS。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-cb10-70cb-d001-e1f2a3b4c510
        title: 第 10 課：事件儲存實作 - PostgreSQL 和 EventStoreDB
        slug: bai-10-event-store-implementation-postgresql-eventstoredb
        description: 實作事件儲存：基於 PostgreSQL（寄件匣）、EventStoreDB、Axon Server。事件序列化。訂閱模式。投影引擎。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a21-cb11-70cb-d001-e1f2a3b4c511
        title: 第 11 課：預測與閱讀模型模式
        slug: bai-11-projections-read-model-patterns
        description: 從事件中建立讀取模型。投影模式：內嵌、追趕、直播。多模型預測。重建預測。處理投影失敗。
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-04
    title: 第 4 部分：分散式模式
    description: Saga 模式深入探討：編排與編排
    sort_order: 4
    lessons:
      - id: 019d8a21-cb12-70cb-d001-e1f2a3b4c512
        title: 第 12 課：Saga 模式 - 管理分散式事務
        slug: bai-12-saga-pattern-managing-distributed-transactions
        description: Saga 模式深入探討：編排與編排。補償交易。 Saga 執行協調員。錯誤處理。佐賀狀態機。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-cb13-70cb-d001-e1f2a3b4c513
        title: 第 13 課：寄件匣模式和可靠的事件發布
        slug: bai-13-outbox-pattern-reliable-event-publishing
        description: 事務寄件箱模式。輪詢發布者與基於 CDC 的比較。 Debezium 寄件箱連接器。保證活動交付。訂購保證。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-cb14-70cb-d001-e1f2a3b4c514
        title: 第 14 課：死信隊列與錯誤處理
        slug: bai-14-dead-letter-queue-error-handling
        description: 死信佇列 (DLQ) 模式。重試策略：指數退避、斷路器。毒丸處理。錯誤分類。 DLQ 重新處理。
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8a21-cb15-70cb-d001-e1f2a3b4c515
        title: 第 15 課：冪等性與一次性處理
        slug: bai-15-idempotency-exactly-once-processing
        description: 冪等消費者：重複資料刪除策略。冪等鍵。恰好一次與有效一次。卡夫卡事務 API。消費者抵銷管理。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-05
    title: 第 5 部分：進階模式
    description: 通訊模式：事件請求-應答、事件通知、事件攜帶的狀態傳輸
    sort_order: 5
    lessons:
      - id: 019d8a21-cb16-70cb-d001-e1f2a3b4c516
        title: 第 16 課：事件驅動的微服務通訊模式
        slug: bai-16-event-driven-microservices-communication-patterns
        description: 通訊模式：事件請求-應答、事件通知、事件攜帶的狀態傳輸。混合同步+非同步模式。 API組成。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-cb17-70cb-d001-e1f2a3b4c517
        title: 第 17 課：事件驅動的資料一致性與衝突解決
        slug: bai-17-event-driven-data-consistency-conflict-resolution
        description: 最終一致性深入研究。衝突檢測和解決。最後寫入者獲勝 vs 合併。向量時鐘。用於事件驅動系統的 CRDT。
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-cb18-70cb-d001-e1f2a3b4c518
        title: 第 18 課：事件版本控制與架構演變
        slug: bai-18-event-versioning-schema-evolution
        description: 事件版本控制策略：弱模式、向上轉換、事件適配器。重大變更管理。多版本消費者。架構遷移模式。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a21-cb19-70cb-d001-e1f2a3b4c519
        title: 第 19 課：流程管理器和工作流引擎
        slug: bai-19-process-manager-workflow-engine
        description: 流程管理器模式：將長期運作的業務流程作為狀態機。 Temporal.io 工作流引擎。持久的執行力。補償。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-06
    title: 第 6 部分：營運與生產
    description: Kafka操作：監控（JMX、Prometheus）、效能調優
    sort_order: 6
    lessons:
      - id: 019d8a21-cb20-70cb-d001-e1f2a3b4c520
        title: 第 20 課：Kafka 操作 - 監控、調整與故障排除
        slug: bai-20-kafka-operations-monitoring-tuning-troubleshooting
        description: Kafka 操作：監控（JMX、Prometheus）、效能調優。消費者滯後監控。分區重新平衡。經紀人維護。解決常見問題。
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8a21-cb21-70cb-d001-e1f2a3b4c521
        title: 第 21 課：測試事件驅動系統
        slug: bai-21-testing-event-driven-systems
        description: 測試策略：單元測試事件處理程序、與嵌入式 Kafka 的整合測試。事件的合約測試。端對端測試。測試容器。
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a21-cb22-70cb-d001-e1f2a3b4c522
        title: 第 22 課：事件驅動系統的可觀察性
        slug: bai-22-observability-cho-event-driven-systems
        description: 透過事件進行分散式追蹤。相關 ID。事件流可視化。消費者滯後警報。死信監控。分區傾斜檢測。
        duration_minutes: 90
        is_free: true
        sort_order: 22
        video_url: null
  - id: section-07
    title: 第 7 部分：個案研究
    description: 從整體遷移到事件驅動：扼殺者無花果模式
    sort_order: 7
    lessons:
      - id: 019d8a21-cb23-70cb-d001-e1f2a3b4c523
        title: 第 23 課：遷移到事件驅動 - Strangler Fig 模式
        slug: bai-23-migration-to-event-driven-strangler-fig-pattern
        description: 從整體遷移到事件驅動：扼殺者無花果模式。並行運行策略。活動是新舊之間的橋樑。逐步遷移。風險管理。
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-cb24-70cb-d001-e1f2a3b4c524
        title: 第 24 課：Apache Pulsar 及替代方案
        slug: bai-24-apache-pulsar-alternatives
        description: >-
          Apache Pulsar：多租戶、分層儲存、異地複製。 Pulsar 與 Kafka 比較。 NATS
          JetStream。小熊貓。亞馬遜事件橋。選擇正確的平台。
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-cb25-70cb-d001-e1f2a3b4c525
        title: 第 25 課：案例研究 - Uber、Wix、Booking.com 和 LinkedIn
        slug: bai-25-case-studies-uber-wix-booking-com-linkedin
        description: >-
          實際事件驅動分析：Uber（事件採購乘車匹配）、Wix（事件驅動平台）、Booking.com（大規模
          Kafka）、LinkedIn（Kafka 起源）。吸取的教訓。
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
locale: zh-tw
---

