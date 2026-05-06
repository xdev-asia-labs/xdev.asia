---
id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
title: 雲端原生微服務架構
slug: cloud-native-microservices-architecture
description: >-
  關於雲端原生微服務架構的綜合系列－從容器平台、Kubernetes、微服務設計原則（DDD、限界上下文）、通訊模型（REST、gRPC、事件驅動）到資料管理（CQRS、Saga、事件溯源）、服務網格、可觀察性、彈性模式、CI/CD
  GitOps 和安全性。將紮實的理論與生產系統的實際架構結合。
featured_image: uploads/2026/03/cloud-native-microservices-series-banner-2026.png
level: intermediate
duration_hours: 70
lesson_count: 26
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
  - name: microservices
    slug: microservices
  - name: cloud-native
    slug: cloud-native
  - name: kubernetes
    slug: kubernetes
  - name: Docker
    slug: docker
  - name: system-design
    slug: system-design
  - name: API Gateway
    slug: api-gateway
  - name: service-mesh
    slug: service-mesh
  - name: event-driven
    slug: event-driven
  - name: DevOps
    slug: devops
  - name: observability
    slug: observability
  - name: CQRS
    slug: cqrs
  - name: gRPC
    slug: grpc
  - name: Kafka
    slug: kafka
  - name: Istio
    slug: istio
  - name: ArgoCD
    slug: argocd
  - name: security
    slug: security
  - name: production
    slug: production
sections:
  - id: section-01
    title: 第 1 部分：雲端原生基礎
    description: 雲端原生平台－定義、原理、容器和 Kubernetes 基礎知識
    sort_order: 1
    lessons:
      - id: 019d8a22-c301-7a10-b001-a1b2c3d4e501
        title: 第 1 課：什麼是雲端原生？ — 原理與十二要素應用程式
        slug: bai-1-cloud-native-la-gi-nguyen-ly-va-twelve-factor-app
        description: 根據 CNCF 定義雲端原生、比較傳統與雲端原生、十二要素應用方法論，以及為何雲端原生是現代應用程式的必然趨勢。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a22-c302-7a10-b001-a1b2c3d4e502
        title: 第 2 課：容器和 Docker — 應用程式打包平台
        slug: bai-2-container-docker-nen-tang-dong-goi-ung-dung
        description: 容器與虛擬機器、Docker 架構、Dockerfile 最佳實務、多階段建置、映像安全掃描和基本容器網路。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a22-c303-7a10-b001-a1b2c3d4e503
        title: 第 3 課：Kubernetes 架構與核心概念
        slug: bai-3-kubernetes-architecture-core-concepts
        description: >-
          Kubernetes
          架構（控制平面、工作節點）、核心資源（Pod、Deployment、Service、ConfigMap、Secret）、Namespace
          策略以及 Kubernetes 如何自動編排容器。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 第 2 部分：微服務設計與通訊模式
    description: 微服務設計原則、DDD 與服務間通訊模型
    sort_order: 2
    lessons:
      - id: 019d8a22-c304-7a10-b001-a1b2c3d4e504
        title: 第 4 課：微服務設計原則 — SRP、DDD 與有界上下文
        slug: bai-4-microservices-design-principles-srp-ddd-bounded-context
        description: 什麼是微服務、單一職責原則、領域驅動設計、定義服務邊界的有界脈絡、鬆散耦合和高內聚、何時應該和不應該使用微服務。
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a22-c305-7a10-b001-a1b2c3d4e505
        title: 第 5 課：同步通訊 — REST API 和 gRPC
        slug: bai-5-synchronous-communication-rest-api-grpc
        description: >-
          REST API 設計最佳實務、gRPC 與 Protobuf、HTTP/2 多重化、比較 REST 與 gRPC、何時選擇哪一種、API
          版本控制策略。
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a22-c306-7a10-b001-a1b2c3d4e506
        title: 第 6 課：非同步通訊 — 訊息佇列與事件流
        slug: bai-6-asynchronous-communication-message-queue-event-streaming
        description: >-
          訊息佇列 (RabbitMQ) 與事件流 (Apache
          Kafka)、發布/訂閱模式、點對點模式、事件模式設計、冪等性以及何時選擇非同步而不是同步。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a22-c307-7a10-b001-a1b2c3d4e507
        title: 第 7 課：API 閘道模式 — Kong、APISIX 與 Envoy
        slug: bai-7-api-gateway-pattern-kong-apisix-envoy
        description: >-
          什麼是 API 閘道、功能（路由、驗證、速率限制、協定轉換）、比較 Kong、APISIX、Envoy、Traefik、前端後端 (BFF)
          模式、在 Kubernetes 上設定 API 閘道。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 第 3 部分：微服務中的資料管理
    description: 分散式資料管理－每服務資料庫、事件溯源、CQRS、Saga 模式
    sort_order: 3
    lessons:
      - id: 019d8a22-c308-7a10-b001-a1b2c3d4e508
        title: 第 8 課：每個服務的資料庫和多語言持久性
        slug: bai-8-database-per-service-polyglot-persistence
        description: 每個服務資料庫原則、為什麼不共享資料庫、多語言持久性（為每個服務選擇合適的資料庫）、資料所有權和跨服務資料查詢策略。
        duration_minutes: 90
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a22-c309-7a10-b001-a1b2c3d4e509
        title: 第 9 課：事件溯源與 CQRS
        slug: bai-9-event-sourcing-cqrs
        description: >-
          事件溯源－將狀態儲存為事件字串、事件儲存、快照最佳化。 CQRS — 單獨的命令和查詢模型、最終一致性、單獨的讀取/寫入資料庫、何時使用
          CQRS。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a22-c310-7a10-b001-a1b2c3d4e510
        title: 第 10 課：Saga 模式 — 分散式事務
        slug: bai-10-saga-pattern-distributed-transactions
        description: 為什麼 2PC 不適合微服務、Saga 模式（編排與編排）、補償事務、Saga Orchestrator 實作、錯誤處理和死信佇列。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a22-c311-7a10-b001-a1b2c3d4e511
        title: 第 11 課：資料一致性模式 — 寄件匣、CDC 與最終一致性
        slug: bai-11-data-consistency-patterns-outbox-cdc-eventual-consistency
        description: CAP 定理實踐、最終一致性、發件箱模式、Debezium 的變更資料擷取 (CDC)、冪等消費者和端到端資料一致性策略。
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-04
    title: 第 4 部分：服務網格和網絡
    description: 服務網格、服務發現、mTLS 和零信任網絡
    sort_order: 4
    lessons:
      - id: 019d8a22-c312-7a10-b001-a1b2c3d4e512
        title: 第 12 課：服務發現與註冊
        slug: bai-12-service-discovery-registry
        description: >-
          用戶端與伺服器端發現、服務註冊表（Consul、etcd）、Kubernetes 基於 DNS
          的發現、運行狀況檢查、負載平衡演算法和服務端點管理。
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a22-c313-7a10-b001-a1b2c3d4e513
        title: 第 13 課：服務格 — Istio 和 Linkerd
        slug: bai-13-service-mesh-istio-linkerd
        description: >-
          Service Mesh 架構（資料平面 + 控制平面）、Sidecar 代理模式、Istio
          元件（Pilot、Citadel、Galley）、流量管理（canary、A/B）、Istio 與 Linkerd
          的比較、Kubernetes 上的安裝與設定。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a22-c314-7a10-b001-a1b2c3d4e514
        title: 第 14 課：零信任安全與 mTLS
        slug: bai-14-zero-trust-security-mtls
        description: >-
          零信任架構原則、服務間的雙向 TLS (mTLS)、自動憑證管理、Service Mesh 中的授權策略、Kubernetes
          中的網路策略。
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
  - id: section-05
    title: 第 5 部分：可觀察性 — 三大支柱
    description: 指標、日誌記錄、分散式追蹤和 OpenTelemetry
    sort_order: 5
    lessons:
      - id: 019d8a22-c315-7a10-b001-a1b2c3d4e515
        title: 第 15 課：指標 — Prometheus 和 Grafana
        slug: bai-15-metrics-prometheus-grafana
        description: >-
          RED方法、USE方法、Prometheus架構、基本PromQL、Kubernetes中的ServiceMonitor、Grafana儀表板設計、警報規則和Alertmanager配置。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a22-c316-7a10-b001-a1b2c3d4e516
        title: 第 16 課：日誌記錄 — 結構化日誌記錄、Loki 和 ELK Stack
        slug: bai-16-logging-structured-logging-loki-elk
        description: >-
          結構化日誌記錄最佳實務、日誌等級策略、Fluent Bit 日誌收集、Loki 與 Elasticsearch、LogQL、日誌與
          TraceId 的關聯、日誌保留策略和成本最佳化。
        duration_minutes: 90
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a22-c317-7a10-b001-a1b2c3d4e517
        title: 第 17 課：分散式追蹤 — OpenTelemetry 和 Jaeger
        slug: bai-17-distributed-tracing-opentelemetry-jaeger
        description: >-
          分散式追蹤概念（追蹤、跨度、上下文傳播）、OpenTelemetry SDK 工具、OTLP 協定、OpenTelemetry
          Collector 配置、Jaeger/Tempo 後端、追蹤分析和效能調試。
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
  - id: section-06
    title: 第 6 部分：彈性模式
    description: 斷路器、重試、艙壁、混沌工程與容錯
    sort_order: 6
    lessons:
      - id: 019d8a22-c318-7a10-b001-a1b2c3d4e518
        title: 第 18 課：斷路器和重試模式
        slug: bai-18-circuit-breaker-retry-patterns
        description: 斷路器狀態（閉合、開啟、半開）、使用指數退避和抖動重試、逾時模式、回退策略、使用 Resilience4j/Polly 實作、級聯故障預防。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a22-c319-7a10-b001-a1b2c3d4e519
        title: 第 19 課：艙壁、速率限制與健康檢查模式
        slug: bai-19-bulkhead-rate-limiting-health-check-patterns
        description: Bulkhead 模式（線程池隔離）、速率限制演算法（令牌桶、滑動視窗）、健康檢查模式（活躍性、就緒性、啟動探測）、優雅降級策略。
        duration_minutes: 90
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a22-c320-7a10-b001-a1b2c3d4e520
        title: 第 20 課：混沌工程 — 驗證系統可靠性
        slug: bai-20-chaos-engineering-kiem-chung-do-tin-cay
        description: 混沌工程原理、Chaos Monkey 和 LitmusChaos、設計混沌實驗、穩態假設、爆炸半徑控制、遊戲日以及建立彈性文化。
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-07
    title: 第 7 部分：CI/CD 和部署策略
    description: CI/CD 管道、帶有 ArgoCD 的 GitOps 以及安全部署策略
    sort_order: 7
    lessons:
      - id: 019d8a22-c321-7a10-b001-a1b2c3d4e521
        title: 第 21 課：微服務的 CI/CD 管道
        slug: bai-21-cicd-pipeline-cho-microservices
        description: >-
          用於多服務的 CI/CD 架構、每個服務的管道、建置 → 測試 → 掃描 →
          部署流程、容器映像建置和推送、自動化測試策略（單元、整合、合約、E2E）、monorepo 與 polyrepo CI/CD。
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a22-c322-7a10-b001-a1b2c3d4e522
        title: 第 22 課：GitOps 與 ArgoCD
        slug: bai-22-gitops-voi-argocd
        description: >-
          GitOps 原則（Git 作為單一事實來源）、ArgoCD 架構、應用程式清單、同步策略、用於多環境的 Kustomize
          覆寫、自動回滾、用於多叢集的 ApplicationSet。
        duration_minutes: 90
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a22-c323-7a10-b001-a1b2c3d4e523
        title: 第 23 課：部署策略 — 金絲雀、藍/綠和漸進式交付
        slug: bai-23-deployment-strategies-canary-blue-green-progressive-delivery
        description: >-
          滾動更新、藍/綠部署、金絲雀發布、A/B 測試、使用 Argo Rollouts/Flagger
          進行漸進式交付、自動金絲雀分析、回滾策略和功能標記。
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
  - id: section-08
    title: 第 8 部分：安全與生產準備狀況
    description: 安全、機密管理和生產準備清單
    sort_order: 8
    lessons:
      - id: 019d8a22-c324-7a10-b001-a1b2c3d4e524
        title: 第 24 課：身份驗證和授權 — OAuth2、JWT 和 OIDC
        slug: bai-24-authentication-authorization-oauth2-jwt-oidc
        description: >-
          OAuth2 流程、JWT 結構與驗證、OpenID Connect、使用 Keycloak/Auth0
          進行集中式身分驗證、微服務中的令牌傳播、API 閘道驗證整合、RBAC 與 ABAC。
        duration_minutes: 120
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a22-c325-7a10-b001-a1b2c3d4e525
        title: 第 25 課：秘密管理與容器安全
        slug: bai-25-secrets-management-container-security
        description: >-
          HashiCorp Vault、動態機密、Kubernetes 機密 + 密封機密、CSI 機密儲存驅動程式、容器映像掃描
          (Trivy)、Pod 安全標準、執行時間安全 (Falco)、供應鏈安全 (Sigstore/Cosign)。
        duration_minutes: 90
        is_free: true
        sort_order: 25
        video_url: null
      - id: 019d8a22-c326-7a10-b001-a1b2c3d4e526
        title: 第 26 課：生產準備清單與實施路線圖
        slug: bai-26-production-readiness-checklist-lo-trinh-trien-khai
        description: 架構決策清單、推薦技術堆疊、4階段實施路線圖（基礎→核心平台→進階→最佳化）、容量規劃、成本最佳化、運作手冊範本和災難復原規劃。
        duration_minutes: 90
        is_free: true
        sort_order: 26
        video_url: null
locale: zh-tw
---

