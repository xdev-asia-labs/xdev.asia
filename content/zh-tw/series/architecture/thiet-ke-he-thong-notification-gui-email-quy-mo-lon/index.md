---
id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
title: 設計一個通知系統來發送數百萬封電子郵件
slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
description: >-
  關於設計和建造能夠同時發送數百萬封電子郵件的通知系統的深入課程。您將學習如何使用訊息佇列設計事件驅動的架構，建立高效能電子郵件管道，處理速率限制、重試和死信佇列，使用
  SPF/DKIM/DMARC 確保可交付性，以及部署生產就緒系統。使用 Kafka、Redis、PostgreSQL、Amazon SES、SendGrid
  將理論與實務結合。適合需要實際解決大規模郵件發送問題的後端工程師、系統架構師。
featured_image: uploads/2026/03/notification-email-system-series-banner-2026.png
level: intermediate
duration_hours: 40
lesson_count: 15
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-04-01T10:00:00.000000Z'
created_at: '2026-04-01T10:00:00.000000Z'
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
  - name: Email
    slug: email
  - name: Notification
    slug: notification
  - name: MessageQueue
    slug: message-queue
  - name: Kafka
    slug: kafka
  - name: EventDriven
    slug: event-driven
  - name: Scalability
    slug: scalability
  - name: HighAvailability
    slug: high-availability
  - name: Redis
    slug: redis
  - name: monitoring
    slug: monitoring
  - name: production
    slug: production
  - name: HandsOn
    slug: handson
sections:
  - id: section-01
    title: 第 1 部分：基礎 — 了解大規模通知問題
    description: 分析發送數百萬封電子郵件的系統的需求、整體架構和核心設計模式
    sort_order: 1
    lessons:
      - id: 019e7a10-a101-7001-d001-f1e2d3c4b501
        title: 第 1 課：通知系統概述 — 發送數百萬封電子郵件的問題
        slug: bai-1-tong-quan-he-thong-notification-bai-toan-gui-trieu-email
        description: >-
          分析發送數百萬封電子郵件的問題：實際用例（行銷活動、交易電子郵件、系統警報）。功能性和非功能性需求。粗略估計：吞吐量、儲存、頻寬。比較通知管道：電子郵件、簡訊、推播。為什麼電子郵件仍然是王道。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e7a10-a102-7001-d001-f1e2d3c4b502
        title: 第 2 課：通用架構 — 高層設計
        slug: bai-2-kien-truc-tong-quan-high-level-design
        description: >-
          設計通知系統的高層架構：API Gateway、Notification Service、Message Queue、Worker
          Pool、Email Provider。資料從觸發器流向收件匣。關注點分離。冪等性。通知元資料的資料庫架構設計。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e7a10-a103-7001-d001-f1e2d3c4b503
        title: 第 3 課：大型電子郵件系統的設計模式
        slug: bai-3-design-patterns-cho-email-system-quy-mo-lon
        description: >-
          扇出模式、生產者-消費者模式、優先權佇列模式。外部電子郵件提供者的斷路器。用於隔離故障的艙壁模式。寄件箱模式確保至少一次投遞。用於多步驟通知工作流程的
          Saga 模式。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 第 2 部分：訊息佇列和事件驅動架構
    description: 使用訊息佇列和事件驅動架構建構通知系統的骨幹
    sort_order: 2
    lessons:
      - id: 019e7a10-a104-7001-d001-f1e2d3c4b504
        title: 第 4 課：訊息佇列－通知系統的支柱
        slug: bai-4-message-queue-xuong-song-cua-notification-system
        description: >-
          為什麼電子郵件系統需要訊息佇列？比較 Kafka、RabbitMQ、Amazon SQS 和 Redis
          Streams。電子郵件工作負載的分區策略。消費者組和並行處理。恰好一次與至少一次語意。動手設定 Kafka 叢集。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e7a10-a105-7001-d001-f1e2d3c4b505
        title: 第 5 課：使用 Kafka 的事件驅動通知管道
        slug: bai-5-event-driven-notification-pipeline-voi-kafka
        description: >-
          為通知事件設計事件架構。主題設計：通知請求、電子郵件傳送、電子郵件狀態、電子郵件dlq。 Kafka Connect 用於資料整合。使用
          Kafka Streams 進行串流處理。用於通知審計追蹤的事件溯源。實踐：建構完整的管道。
        duration_minutes: 180
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e7a10-a106-7001-d001-f1e2d3c4b506
        title: 第 6 課：優先權佇列和調度引擎
        slug: bai-6-priority-queue-va-scheduling-engine
        description: >-
          多重優先權佇列設計：關鍵（OTP、密碼重設）、高（訂單確認）、正常（行銷）。延遲/預定的電子郵件發送。基於 Cron
          與基於事件的調度。時區感知發送。用於調度的 Redis 排序集。速率感知隊列消耗。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-03
    title: 第 3 部分：電子郵件基礎設施和交付引擎
    description: 深入研究電子郵件協議，整合 ESP、範本引擎和內容管道
    sort_order: 3
    lessons:
      - id: 019e7a10-a107-7001-d001-f1e2d3c4b507
        title: 第 7 課：SMTP 深入探究 — 從根本上理解電子郵件傳送
        slug: bai-7-smtp-deep-dive-hieu-email-delivery-tu-goc
        description: >-
          SMTP 協定生命週期：HELO、MAIL FROM、RCPT TO、DATA。 MX 記錄和 DNS
          解析。電子郵件路由。彈跳類型：硬彈跳、軟彈跳。反饋循環。電子郵件標頭剖析。 SMTP 的連線池。實踐：透過原始 SMTP 發送電子郵件。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e7a10-a108-7001-d001-f1e2d3c4b508
        title: 第 8 課：電子郵件服務提供者 — SES、SendGrid、Mailgun
        slug: bai-8-email-service-providers-ses-sendgrid-mailgun
        description: >-
          Amazon SES、SendGrid、Mailgun、Postmark 的詳細比較。數百萬封電子郵件的定價模型和成本優化。 API 與
          SMTP 整合。多提供者故障轉移策略。避免供應商鎖定。抽象層設計。實踐：Amazon SES 與 SendGrid 後備整合。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e7a10-a109-7001-d001-f1e2d3c4b509
        title: 第 9 課：模板引擎和內容管道
        slug: bai-9-template-engine-va-content-pipeline
        description: >-
          電子郵件範本系統：MJML、Handlebars、React Email。模板版本控制和 A/B
          測試。為數百萬收件者提供動態內容個人化。內嵌
          CSS、圖片託管、響應式電子郵件。內容管道：範本→渲染→驗證→傳送。預渲染和快取策略。取消訂閱連結合規性。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-04
    title: 第 4 部分：處理規模 - 擴展到數百萬
    description: 擴展系統以發送數百萬封電子郵件的技術：速率限制、批次、錯誤處理
    sort_order: 4
    lessons:
      - id: 019e7a10-a110-7001-d001-f1e2d3c4b510
        title: 第 10 課：速率限制與節流 — 控制傳送速度
        slug: bai-10-rate-limiting-throttling-kiem-soat-toc-do-gui
        description: >-
          為什麼需要速率限制：ESP 限制、IP 信譽、域信譽。令牌桶、滑動視窗、漏桶演算法。多層級限制：按提供者、按網域、按
          IP。自適應速率限制基於跳出率。基於Redis的分散式速率限制器。新域名的IP升溫策略。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e7a10-a111-7001-d001-f1e2d3c4b511
        title: 第 11 課：批次和工作池架構
        slug: bai-11-batch-processing-worker-pool-architecture
        description: >-
          分塊策略：將數百萬封電子郵件分成最佳批次。工作池設計：動態擴充、優雅關閉。使用 Kubernetes HPA
          進行水平擴展。資料庫批量操作。對大型收件者清單進行記憶體高效處理。進度追蹤和可恢復的活動。實踐：建構可擴展的工作系統。
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e7a10-a112-7001-d001-f1e2d3c4b512
        title: 第 12 課：重試、死信隊列與錯誤處理
        slug: bai-12-retry-dead-letter-queue-error-handling
        description: >-
          重試策略：指數退避、抖動、最大重試。死信佇列設計和重新處理工作流程。錯誤分類：暫時性故障與永久性故障。 ESP
          故障斷路器。有毒訊息處理。補償邏輯。當錯誤率超過閾值時發出警報。實踐：實現完整的錯誤處理管道。
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-05
    title: 第 5 部分：交付能力、監控與生產
    description: 確保電子郵件到達收件匣、監控系統並部署到生產環境
    sort_order: 5
    lessons:
      - id: 019e7a10-a113-7001-d001-f1e2d3c4b513
        title: 第 13 課：電子郵件送達率 — SPF、DKIM、DMARC
        slug: bai-13-email-deliverability-spf-dkim-dmarc
        description: >-
          電子郵件驗證：SPF 記錄、DKIM 簽章、DMARC
          策略。知識產權管理聲譽。域預熱過程。垃圾郵件分數優化。清單衛生：電子郵件驗證、退回郵件處理、投訴處理。收件匣放置測試。黑名單監控。
          BIMI（訊息識別品牌指標）。
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e7a10-a114-7001-d001-f1e2d3c4b514
        title: 第 14 課：監控、指標與警報
        slug: bai-14-monitoring-metrics-alerting
        description: >-
          關鍵指標：發送率、送達率、跳出率、開啟率、點擊率、投訴率。 Prometheus + Grafana 儀表板。使用
          OpenTelemetry 進行分散式追蹤。隊列深度監控。工人健康檢查。 SLA 定義和追蹤。 PagerDuty/OpsGenie
          整合。常見事件的操作手冊。動手實作：建立監控儀表板。
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e7a10-a115-7001-d001-f1e2d3c4b515
        title: 第 15 課：生產部署 — 發送 1000 萬封電子郵件的案例研究
        slug: bai-15-production-deployment-case-study-gui-10-trieu-email
        description: >-
          端到端案例研究：設計和實施一個發送 1000 萬封電子郵件用於行銷活動的系統。 AWS/GCP 上的基礎設施設置。 Kubernetes
          部署清單。 CI/CD 管道。使用 k6 進行負載測試。混沌工程場景。成本分析和優化。從實際生產事件中學到的教訓。
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
locale: zh-tw
---

## 簡介

您是否想知道像 **Shopee**、**Grab**、**Netflix** 這樣的公司如何每天發送數百萬封電子郵件，同時仍然確保電子郵件到達收件匣、不被垃圾郵件發送以及系統不會崩潰？

本課程將帶您從**零到生產就緒**，設計和建立一個能夠一次發送**數百萬封電子郵件**的通知系統——以正確的方式、正確的架構和最佳實踐。

## 你會學到什麼？

- 從頭開始的**架構設計**事件驅動的通知系統
- **訊息佇列**與 Kafka：分區、消費者群組、一次性交付
- **電子郵件基礎架構**：SMTP 深入研究、ESP 整合（SES、SendGrid）
- **擴充**：速率限制、批次、工作池架構
- **送達率**：SPF、DKIM、DMARC — 確保電子郵件到達收件匣
- **生產**：監控、警報、混沌工程、成本優化

## 需要知識

- 具備後端開發基礎（任何語言）
- 了解基本的HTTP、REST API、資料庫
- 了解基本的 Docker（運行動手實驗）

## 適合的對象

- 後端開發人員希望提升系統設計知識
- 系統架構師設計通知平台
- Tech Lead需要解決發送大規模電子郵件的問題
- 系統設計面試準備者
