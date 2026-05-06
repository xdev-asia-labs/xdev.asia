---
id: 019d8a21-ca00-700a-d001-e1f2a3b4c5d6
title: 架構平台工程和內部開發者門戶
slug: kien-truc-platform-engineering-internal-developer-portal
description: >-
  有關平台工程和內部開發人員入口網站 (IDP) 的綜合課程。包括後台、服務目錄、黃金路徑、自助基礎設施、開發者體驗 (DX)、CI/CD
  平台、環境管理和內部工具。平台設計可協助開發人員自助服務基礎設施、提高開發人員的工作效率並減少認知負荷。案例研究：Spotify（後台）、Netflix、Airbnb。更新於
  2026 年。
featured_image: uploads/2026/03/platform-engineering-series-banner-2026.png
level: intermediate
duration_hours: 70
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
  - name: PlatformEngineering
    slug: platformengineering
  - name: IDP
    slug: idp
  - name: Backstage
    slug: backstage
  - name: DevEx
    slug: devex
  - name: CICD
    slug: cicd
  - name: Kubernetes
    slug: kubernetes
  - name: InfraAsCode
    slug: infraascode
  - name: SelfService
    slug: selfservice
  - name: GitOps
    slug: gitops
  - name: SRE
    slug: sre
  - name: GoldenPath
    slug: goldenpath
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: 第 1 部分：平台工程基礎
    description: 什麼是平台工程？
    sort_order: 1
    lessons:
      - id: 019d8a21-ca01-70ca-d001-e1f2a3b4c501
        title: 第 1 課：平台工程概述 - 原因、內容和方式
        slug: bai-1-tong-quan-platform-engineering-why-what-how
        description: 什麼是平台工程？ DevOps 與平台工程。內部開發者平台 (IDP) 概念。平台即產品。平台團隊的團隊拓樸。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-ca02-70ca-d001-e1f2a3b4c502
        title: 第 2 課：開發者體驗 (DX) - 衡量與改進
        slug: bai-2-developer-experience-dx-measuring-improving
        description: '開發者體驗：認知負荷、心流狀態、回饋循環。 DORA metrics, SPACE framework.開發商調查。入職時間。首次部署時間。'
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-ca03-70ca-d001-e1f2a3b4c503
        title: 第 3 課：平台架構概述 - 層和元件
        slug: bai-3-platform-architecture-overview-layers-components
        description: IDP 架構層：UI Portal、API、編排、整合。平台能力圖。建構與購買決策。平台成熟度模型。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 第 2 部分：開發者門戶
    description: Spotify Backstage：架構、外掛、目錄
    sort_order: 2
    lessons:
      - id: 019d8a21-ca04-70ca-d001-e1f2a3b4c504
        title: 第 4 課：後台 - 內部開發者門戶
        slug: bai-4-backstage-internal-developer-portal
        description: Spotify Backstage：架構、外掛、目錄。軟體目錄：元件、API、資源。技術文檔整合。客製化和插件開發。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-ca05-70ca-d001-e1f2a3b4c505
        title: 第 5 課：服務目錄與軟體模板
        slug: bai-5-service-catalog-software-templates
        description: 服務目錄：註冊、發現、管理服務。軟體模板（鷹架）：新服務的黃金路徑。模板定制。 API 文件。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-ca06-70ca-d001-e1f2a3b4c506
        title: 第 6 課：API 入口網站和文檔
        slug: bai-6-api-portal-documentation
        description: >-
          API 目錄：發現、文件、版本控制。 OpenAPI/AsyncAPI/GraphQL 規格。 API 治理。自動產生 API 文件。
          API健康監控。
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-ca07-70ca-d001-e1f2a3b4c507
        title: 第 7 課：黃金之路與柏油路
        slug: bai-7-golden-paths-paved-roads
        description: 黃金路徑：固執己見的預設工作流程。鋪好的道路與護欄。服務創造黃金之路。部署黃金之路。事件響應黃金之路。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 第 3 部分：自助服務基礎設施
    description: 自助服務基礎設施：請求→核准→提供→管理
    sort_order: 3
    lessons:
      - id: 019d8a21-ca08-70ca-d001-e1f2a3b4c508
        title: 第 8 課：自助服務基礎設施 - 配置和管理
        slug: bai-8-self-service-infrastructure-provisioning-management
        description: 自助服務基礎設施：要求→核准→提供→管理。基礎設施抽象層。資源目錄。每個請求的成本可見性。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-ca09-70ca-d001-e1f2a3b4c509
        title: 第 9 課：基礎設施即代碼 - Terraform、Crossplane 和 Pulumi
        slug: bai-9-infrastructure-as-code-terraform-crossplane-pulumi
        description: >-
          IaC 平台：Terraform 模組、Crossplane 組合、Pulumi 程式。基於原始 IaC
          的平台抽象。自助服務有護欄。狀態管理。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-ca10-70ca-d001-e1f2a3b4c510
        title: 第 10 課：環境管理 - 開發、登台、生產
        slug: bai-10-environment-management-dev-staging-production
        description: 環境管理：臨時環境、預覽環境。環境平價。基於命名空間的隔離。開發/部署的成本最佳化。
        duration_minutes: 90
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a21-ca11-70ca-d001-e1f2a3b4c511
        title: 第 11 課：資料庫和中介軟體自助服務
        slug: bai-11-database-middleware-self-service
        description: 資料庫設定：PostgreSQL、Redis、Kafka 作為自助服務。運營商模式。備份自動化。架構遷移。連線管理。
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-04
    title: 第 4 部分：CI/CD 平台
    description: CI/CD 平台：共享管道、可重複使用工作流程
    sort_order: 4
    lessons:
      - id: 019d8a21-ca12-70ca-d001-e1f2a3b4c512
        title: 第 12 課：CI/CD 平台架構 - 管道即代碼
        slug: bai-12-cicd-platform-architecture-pipeline-as-code
        description: >-
          CI/CD 平台：共享管道、可重複使用工作流程。 GitHub Actions、GitLab
          CI、Tekton。管道模板。建構緩存。工件管理。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-ca13-70ca-d001-e1f2a3b4c513
        title: 第 13 課：GitOps 和部署自動化
        slug: bai-13-gitops-deployment-automation
        description: GitOps：ArgoCD、Flux。部署策略：藍綠、金絲雀、漸進。回滾自動化。環保推廣。漂移檢測。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-ca14-70ca-d001-e1f2a3b4c514
        title: 第 14 課：容器與鏡像管理
        slug: bai-14-container-image-management
        description: 容器註冊表（港口）。影像掃描和簽名（Cosign）。基礎影像管理。多架構建構。形象推廣管道。 SBOM 生成。
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8a21-ca15-70ca-d001-e1f2a3b4c515
        title: 第 15 課：測試平台 - 左移與質量門
        slug: bai-15-testing-platform-shift-left-quality-gates
        description: 測試基礎設施：測試環境、測試資料管理。品質關卡：程式碼覆蓋率、安全性掃描、效能測試。片狀測試檢測。
        duration_minutes: 90
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-05
    title: 第 5 部分：安全與合規平台
    description: 安全平台：OPA/Gatekeeper、Kyverno
    sort_order: 5
    lessons:
      - id: 019d8a21-ca16-70ca-d001-e1f2a3b4c516
        title: 第 16 課：安全平台 - 策略即代碼
        slug: bai-16-security-platform-policy-as-code
        description: 安全平台：OPA/Gatekeeper、Kyverno。政策即代碼。自動合規性檢查。漏洞管理平台。秘密管理（Vault）。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-ca17-70ca-d001-e1f2a3b4c517
        title: 第 17 課：供應鏈安全 - SBOM 和 SLSA
        slug: bai-17-supply-chain-security-sbom-slsa
        description: 軟體供應鏈安全。 SBOM（軟體物料清單）。 SLSA 框架。依賴性掃描。簽名建置。出處驗證。
        duration_minutes: 90
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-ca18-70ca-d001-e1f2a3b4c518
        title: 第 18 課：成本管理與 FinOps 平台
        slug: bai-18-cost-management-finops-platform
        description: 雲端成本管理：每個團隊/服務的成本分配。 FinOps 實踐。預算警報。資源規模合理。 Spot 實例管理。退款/退款。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 第 6 部分：可觀測性平台
    description: 統一可觀測性：OpenTelemetry、Prometheus、Grafana、Loki、Tempo
    sort_order: 6
    lessons:
      - id: 019d8a21-ca19-70ca-d001-e1f2a3b4c519
        title: 第 19 課：可觀測性平台 - 指標、日誌和追蹤
        slug: bai-19-observability-platform-metrics-logs-traces
        description: >-
          統一可觀測性：OpenTelemetry、Prometheus、Grafana、Loki、Tempo。自助服務儀表板。警報路由。待命管理整合。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-ca20-70ca-d001-e1f2a3b4c520
        title: 第 20 課：SRE 平台 - SLO、錯誤預算與事件管理
        slug: bai-20-sre-platform-slo-error-budgets-incident-management
        description: SRE 實務：SLI/SLO/SLA 定義。預算追蹤錯誤。事件管理平台。事後自動化。混沌工程整合。
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8a21-ca21-70ca-d001-e1f2a3b4c521
        title: 第 21 課：日誌記錄與稽核平台
        slug: bai-21-logging-audit-platform
        description: 集中式日誌記錄：ELK/EFK、Loki。大規模日誌聚合。審計日誌平台。基於日誌的警報。合規性日誌記錄要求。
        duration_minutes: 90
        is_free: true
        sort_order: 21
        video_url: null
  - id: section-07
    title: 第 7 部分：製作與案例研究
    description: 平台團隊架構：團隊拓樸、賦能團隊
    sort_order: 7
    lessons:
      - id: 019d8a21-ca22-70ca-d001-e1f2a3b4c522
        title: 第22課：平台團隊組織與營運模式
        slug: bai-22-platform-team-organization-operating-model
        description: 平台團隊架構：團隊拓樸、賦能團隊。平台產品管理。內部工具的使用者研究。平台採用策略。
        duration_minutes: 90
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-ca23-70ca-d001-e1f2a3b4c523
        title: 第 23 課：平台遷移與採用
        slug: bai-23-platform-migration-adoption
        description: 遷移到新平台：分階段採用、激勵措施。遺留系統整合。衡量平台採用。社區營造。文件.
        duration_minutes: 90
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-ca24-70ca-d001-e1f2a3b4c524
        title: 第 24 課：衡量平台成功 - 指標與投資報酬率
        slug: bai-24-measuring-platform-success-metrics-roi
        description: 平台成功指標：開發人員滿意度、部署頻率、交付時間。投資報酬率計算。平台成熟度評估。持續改進。
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-ca25-70ca-d001-e1f2a3b4c525
        title: 第 25 課：案例研究 - Spotify、Netflix、Airbnb 和 Mercado Libre
        slug: bai-25-case-studies-spotify-netflix-airbnb-mercado-libre
        description: >-
          實際平台工程分析：Spotify（後台起源）、Netflix（全週期開發）、Airbnb（服務網格）、Mercado
          Libre（規模化平台）。吸取的教訓。
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
locale: zh-tw
---

