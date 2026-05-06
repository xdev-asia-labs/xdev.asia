---
id: 019d8a21-c600-7006-d001-e1f2a3b4c5d6
title: 多租戶SaaS平台架構
slug: kien-truc-multi-tenant-saas-platform
description: >-
  關於多租戶 SaaS
  平台架構（從基礎到生產就緒）的綜合課程。包括租戶隔離策略、訂閱和計費引擎、外掛程式/擴充架構、白標籤、入職自動化、功能標誌、使用計量和自助管理入口網站。設計一個以最佳成本滿足數千名租戶需求的
  SaaS 系統。 Slack、Notion、Atlassian 和領先 SaaS 平台的案例研究。更新於 2026 年。
featured_image: uploads/2026/03/multi-tenant-saas-series-banner-2026.png
level: intermediate
duration_hours: 75
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
  - name: SaaS
    slug: saas
  - name: MultiTenant
    slug: multitenant
  - name: Architecture
    slug: architecture
  - name: Microservices
    slug: microservices
  - name: Billing
    slug: billing
  - name: FeatureFlags
    slug: featureflags
  - name: DDD
    slug: ddd
  - name: Kubernetes
    slug: kubernetes
  - name: Scalability
    slug: scalability
  - name: Security
    slug: security
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: 第 1 部分：SaaS 基礎
    description: SaaS 商業模式（B2B、B2C、PLG、銷售主導）
    sort_order: 1
    lessons:
      - id: 019d8a21-c601-70c6-d001-e1f2a3b4c501
        title: 第 1 課：SaaS 概述 - 商業模型、指標與架構模式
        slug: bai-1-tong-quan-saas-business-models-metrics-architecture
        description: >-
          SaaS 商業模式（B2B、B2C、PLG、銷售主導）。關鍵指標：MRR、ARR、流失率、LTV、CAC。 SaaS
          架構模式以及從本地到雲端原生的演進。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-c602-70c6-d001-e1f2a3b4c502
        title: 第 2 課：多租戶深入探討 - 隔離策略與權衡
        slug: bai-2-multi-tenancy-deep-dive-isolation-strategies-trade-offs
        description: 三種租戶隔離策略：Silo（每個租戶的資料庫）、Pool（共享資料庫）、Bridge（每個租戶的架構）。成本、安全性、效能的權衡。決策框架。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-c603-70c6-d001-e1f2a3b4c503
        title: 第 3 課：平台架構概述 - DDD 和 SaaS 微服務
        slug: bai-3-platform-architecture-overview-ddd-microservices-cho-saas
        description: SaaS平台整體架構設計。有界上下文：租戶、身分、計費、產品。共享服務與租戶特定服務。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 第 2 部分：租戶管理與身份
    description: 租戶配置自動化：基礎設施設定、資料庫建立、配置
    sort_order: 2
    lessons:
      - id: 019d8a21-c604-70c6-d001-e1f2a3b4c504
        title: 第 4 課：租戶生命週期管理 - 供應和配置
        slug: bai-4-tenant-lifecycle-management-provisioning-configuration
        description: 租戶配置自動化：基礎設施設定、資料庫建立、配置。租戶感知路由。每個租戶的自訂網域和品牌。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-c605-70c6-d001-e1f2a3b4c505
        title: 第 5 課：身分和存取管理 - 多租戶身分驗證和 SSO
        slug: bai-5-identity-access-management-multi-tenant-auth-sso
        description: 多租戶身份驗證：基於組織的登入。使用 SAML/OIDC 的 SSO。每位租戶的 RBAC。邀請流程。身分提供者聯盟。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-c606-70c6-d001-e1f2a3b4c506
        title: 第 6 課：入職引擎 - 自助註冊與引導設置
        slug: bai-6-onboarding-engine-self-service-signup-guided-setup
        description: 設計入職流程：註冊、驗證、工作區建立、引導設定。產品主導的成長模式。試用管理。激活指標追蹤。
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-c607-70c6-d001-e1f2a3b4c507
        title: 第 7 課：資料隔離與多租戶資料庫模式
        slug: bai-7-data-isolation-multi-tenant-database-patterns
        description: PostgreSQL 的行級安全性 (RLS)。租戶上下文傳播。查詢過濾模式。跨租戶資料保護。租戶感知的遷移。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 第 3 部分：計費和訂閱引擎
    description: 訂閱系統設計：計畫管理、定價等級、試用期
    sort_order: 3
    lessons:
      - id: 019d8a21-c608-70c6-d001-e1f2a3b4c508
        title: 第 8 課：訂閱引擎 - 計畫、定價與生命週期
        slug: bai-8-subscription-engine-plans-pricing-lifecycle
        description: 訂閱系統設計：計畫管理、定價等級、試用期。訂閱生命週期：建立、升級、降級、取消、暫停。祖父。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-c609-70c6-d001-e1f2a3b4c509
        title: 第 9 課：使用計量和計費引擎
        slug: bai-9-usage-metering-billing-engine
        description: 基於使用情況的計費：計量基礎設施、聚合管道。發票產生。升級/降級按比例分配。稅金計算。條紋/槳整合。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-c610-70c6-d001-e1f2a3b4c510
        title: 第 10 課：權利系統與功能門控
        slug: bai-10-entitlement-system-feature-gating
        description: 權利引擎：基於計劃的功能存取。用於漸進式推出的功能標誌。每個計劃的速率限制。配額管理。超額處理。
        duration_minutes: 90
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 第 4 部分：核心平台功能
    description: 功能標誌架構：LaunchDarkly 模式
    sort_order: 4
    lessons:
      - id: 019d8a21-c611-70c6-d001-e1f2a3b4c511
        title: 第 11 課：功能標誌與組態管理
        slug: bai-11-feature-flags-configuration-management
        description: 功能標誌架構：LaunchDarkly 模式。特定於租戶的配置。 A/B 測試基礎設施。黑暗發射。終止開關。
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8a21-c612-70c6-d001-e1f2a3b4c512
        title: 第 12 課：外掛程式和擴展架構 - 市場
        slug: bai-12-plugin-extension-architecture-marketplace
        description: 設計插件系統：擴充點、鉤子、沙盒執行。市場插件。第三方整合。網路鉤子系統。 OAuth 應用程式平台。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-c613-70c6-d001-e1f2a3b4c513
        title: 第 13 課：白標與客製化品牌
        slug: bai-13-white-labeling-custom-branding
        description: 白標架構：自訂網域、標誌、顏色、電子郵件範本。 CSS 主題引擎。經銷商/合作夥伴計畫支援。自訂登入頁面。
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-c614-70c6-d001-e1f2a3b4c514
        title: 第 14 課：通知與通訊引擎
        slug: bai-14-notification-communication-engine
        description: 多頻道通知：電子郵件、推播、應用程式內、簡訊、Slack。模板引擎。偏好管理。摘要/批次處理。交貨追蹤。
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
  - id: section-05
    title: 第 5 部分：資料和 API 平台
    description: API 優先 SaaS：REST/GraphQL API 設計
    sort_order: 5
    lessons:
      - id: 019d8a21-c615-70c6-d001-e1f2a3b4c515
        title: 第 15 課：API 設計與開發人員經驗
        slug: bai-15-api-design-developer-experience
        description: >-
          API 優先 SaaS：REST/GraphQL API 設計。 API 版本控制策略。開發者入口網站。 SDK產生。每個 API
          金鑰的速率限制。沙箱環境。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a21-c616-70c6-d001-e1f2a3b4c516
        title: 第 16 課：資料匯入/匯出和移轉工具
        slug: bai-16-data-import-export-migration-tools
        description: 透過串流傳輸批次資料匯入。匯出格式（CSV、JSON、Parquet）。從競爭對手平台遷移資料。租戶資料的 ETL 管道。
        duration_minutes: 90
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-c617-70c6-d001-e1f2a3b4c517
        title: 第 17 課：每位租戶的搜尋與分析
        slug: bai-17-search-analytics-per-tenant
        description: 多租戶全文搜尋（Elasticsearch/Meilisearch）。搜尋索引中的租戶資料隔離。應用內分析儀表板。數據導出。
        duration_minutes: 90
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-c618-70c6-d001-e1f2a3b4c518
        title: 第 18 課：稽核日誌記錄與合規性
        slug: bai-18-audit-logging-compliance
        description: 每個租戶的不可變審核日誌。活動提要。資料保留政策。 GDPR 合規性：資料刪除、匯出。 SOC 2 要求。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 第 6 部分：擴展和運營
    description: 吵鬧的鄰居問題
    sort_order: 6
    lessons:
      - id: 019d8a21-c619-70c6-d001-e1f2a3b4c519
        title: 第 19 課：吵鬧的鄰居和資源隔離
        slug: bai-19-noisy-neighbor-resource-isolation
        description: 吵鬧的鄰居問題。每個租戶的資源配額。公平調度。節流策略。租戶分層：運算、儲存、頻寬限制。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-c620-70c6-d001-e1f2a3b4c520
        title: 第 20 課：多區域部署與資料駐留
        slug: bai-20-multi-region-deployment-data-residency
        description: 多區域SaaS部署。資料駐留要求（GDPR、當地法律）。租用戶路由到最近的區域。跨區域複製策略。
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8a21-c621-70c6-d001-e1f2a3b4c521
        title: 第 21 課：租戶感知 CI/CD 和基礎設施自動化
        slug: bai-21-tenant-aware-cicd-infrastructure-automation
        description: SaaS 的 CI/CD：零停機部署。每個租用戶群組的 Canary 版本。用於租戶配置的基礎設施即代碼。 GitOps 工作流程。
        duration_minutes: 90
        is_free: true
        sort_order: 21
        video_url: null
  - id: section-07
    title: 第 7 部分：製作與案例研究
    description: 租戶感知監控：每個租戶的指標、日誌、追蹤
    sort_order: 7
    lessons:
      - id: 019d8a21-c622-70c6-d001-e1f2a3b4c522
        title: 第 22 課：多租戶的可觀察性和 SRE
        slug: bai-22-observability-sre-cho-multi-tenant
        description: 租戶感知監控：每個租戶的指標、日誌、追蹤。每層 SLI/SLO。成本歸因。租戶健康儀表板。事件管理。
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-c623-70c6-d001-e1f2a3b4c523
        title: 第 23 課：SaaS 的安全架構
        slug: bai-23-security-architecture-cho-saas
        description: SaaS 安全性：租用戶資料加密、每個租用戶的金鑰管理。漏洞管理。滲透測試。 SOC 2、ISO 27001 合規性。
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-c624-70c6-d001-e1f2a3b4c524
        title: 第 24 課：管理入口網站和自助服務操作
        slug: bai-24-admin-portal-self-service-operations
        description: 超級管理入口網站：租用戶管理、使用量監控。租戶管理入口網站：使用者管理、設定、計費。自助故障排除。
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-c625-70c6-d001-e1f2a3b4c525
        title: 第 25 課：案例研究 - Slack、Notion、Atlassian 和 Linear
        slug: bai-25-case-studies-slack-notion-atlassian-linear
        description: 實用SaaS架構分析：Slack（企業級）、Notion（協作）、Atlassian（市場）、Linear（效能優先）。吸取的教訓。
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
locale: zh-tw
---

