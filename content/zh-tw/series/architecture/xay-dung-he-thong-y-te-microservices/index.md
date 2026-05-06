---
id: 019e1a40-a100-7001-d001-f0a1b2c30001
title: 建構微服務醫療保健系統 — Quarkus、PostgreSQL、符合 HIPAA 標準的 Keycloak
slug: xay-dung-he-thong-y-te-microservices
description: >-
  使用 Quarkus、PostgreSQL 和 Keycloak 建立具有微服務架構的醫療資訊系統 (HIS/EMR/LIS) 的逐步說明。符合
  HIPAA、HL7 FHIR、零信任安全標準。從架構設計、建置服務、去中心化、資料加密、稽核日誌記錄到 Kubernetes
  上的生產部署。每篇文章都有實用的程式碼，可以應用在醫院和醫療機構。
featured_image: uploads/2026/04/xay-dung-he-thong-y-te-microservices-banner.png
level: intermediate
duration_hours: 75
lesson_count: 24
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-04-03T08:00:00.000000Z'
created_at: '2026-04-03T08:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019d8a21-b200-7001-c001-a1b2c3d4e5f6
  name: 系統架構
  slug: kien-truc-he-thong
tags:
  - name: Healthcare
    slug: healthcare
  - name: Quarkus
    slug: quarkus
  - name: PostgreSQL
    slug: postgresql
  - name: Keycloak
    slug: keycloak
  - name: Microservices
    slug: microservices
  - name: HIPAA
    slug: hipaa
  - name: Security
    slug: security
  - name: HL7 FHIR
    slug: hl7-fhir
  - name: Docker
    slug: docker
  - name: kubernetes
    slug: kubernetes
  - name: Java
    slug: java
  - name: HandsOn
    slug: handson
sections:
  - id: section-01
    title: 第 1 部分：架構與平台
    description: 醫療系統概述、微服務架構設計、資料分類與威脅建模
    sort_order: 1
    lessons:
      - id: 019e1a40-a101-7001-d001-f0a1b2c30101
        title: 第 1 課：醫療保健系統概述和安全要求 — HIPAA、HL7 FHIR
        slug: bai-1-tong-quan-he-thong-y-te-yeu-cau-bao-mat
        description: >-
          了解醫療資訊系統概述（HIS/EMR/LIS）、PHI/ePHI 資料、HIPAA 標準、HL7
          FHIR、越南網路安全法。確定建置安全標準醫療系統時的要求。
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e1a40-a102-7001-d001-f0a1b2c30102
        title: 第 2 課：設計醫療保健微服務架構 — Quarkus Stack Blueprint
        slug: bai-2-thiet-ke-kien-truc-microservices-y-te
        description: >-
          使用Quarkus、PostgreSQL、Keycloak、Kafka設計微服務醫療系統整體架構。 API 閘道、服務網格、網路分段、DMZ
          設計和 HIS/EMR/LIS 的架構藍圖。
        duration_minutes: 150
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e1a40-a103-7001-d001-f0a1b2c30103
        title: 第 3 課：健康資料分類 (PHI/ePHI) 與風險評估
        slug: bai-3-phan-loai-du-lieu-y-te-danh-gia-rui-ro
        description: 根據敏感度等級對醫療資料進行分類，根據 NIST SP 800-30 制定資料分類政策、資料流映射、風險評估。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019e1a40-a104-7001-d001-f0a1b2c30104
        title: 第 4 課：醫療保健系統的威脅建模 STRIDE/DREAD
        slug: bai-4-threat-modeling-stride-dread
        description: 將 STRIDE、DREAD 評分、攻擊樹應用於微服務醫療系統。從威脅模型建立安全需求。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 第 2 部分：使用 Keycloak 進行身分和存取管理
    description: 設定 Keycloak、RBAC/ABAC 去中心化、FHIR 上的 SMART、MFA
    sort_order: 2
    lessons:
      - id: 019e1a40-a105-7001-d001-f0a1b2c30105
        title: 第 5 課：為醫院設定 Keycloak 領域 — 多租戶
        slug: bai-5-setup-keycloak-realm-benh-vien
        description: >-
          為多醫院醫療系統設計並設定 Keycloak Realm。
          HIS/EMR/LIS、使用者設定檔、病患入口網站、會話管理和安全防禦的用戶端設定。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e1a40-a106-7001-d001-f0a1b2c30106
        title: 第 6 堂課：RBAC 和 ABAC 去中心化 — 醫生、護士、病人
        slug: bai-6-phan-quyen-rbac-abac
        description: 為醫療保健部署 RBAC/ABAC：角色層級結構、基於部門的存取、Keycloak 授權服務、打破玻璃的緊急存取。
        duration_minutes: 180
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019e1a40-a107-7001-d001-f0a1b2c30107
        title: 第 7 課：FHIR 上的 SMART — 用於醫療保健 API 的 OAuth2/OIDC
        slug: bai-7-smart-on-fhir-oauth2-oidc
        description: >-
          使用 Keycloak 在 FHIR 上部署 SMART：應用程式啟動框架、FHIR 範圍、EHR 啟動與獨立啟動、在 Quarkus
          上整合 HAPI FHIR 伺服器。
        duration_minutes: 180
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e1a40-a108-7001-d001-f0a1b2c30108
        title: 第 8 課：醫療保健工作者的 MFA、萬能鑰匙和緊急通道
        slug: bai-8-mfa-passkeys-emergency-access
        description: 實作適合醫療環境的 MFA：TOTP、WebAuthn/密碼、鄰近徽章、條件 MFA、緊急存取程序。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 第 3 部分：建立資料層 — 用於醫療保健的 PostgreSQL
    description: 資料庫強化、加密、行級安全、審核日誌記錄
    sort_order: 3
    lessons:
      - id: 019e1a40-a109-7001-d001-f0a1b2c30109
        title: 第9課：PostgreSQL安全加固－綜合配置
        slug: bai-9-postgresql-security-hardening
        description: 針對醫療資料強化 PostgreSQL：TLS、pg_hba.conf、角色管理、模式隔離、CIS 基準合規性。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019e1a40-a110-7001-d001-f0a1b2c30110
        title: 第 10 課：使用 PostgreSQL 加密靜態和傳輸中的數據
        slug: bai-10-ma-hoa-du-lieu-postgresql
        description: TDE、pgcrypto、SSL/TLS、HashiCorp Vault 金鑰管理、醫療資料信封加密。
        duration_minutes: 180
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e1a40-a111-7001-d001-f0a1b2c30111
        title: 第 11 課：PHI 的行級安全性與列加密
        slug: bai-11-row-level-security-column-encryption
        description: 用於病患資料隔離、基於部門的存取、列級加密、RLS 與 Quarkus 中的 Keycloak JWT 整合的 RLS 策略。
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e1a40-a112-7001-d001-f0a1b2c30112
        title: 第 12 課：使用 pgAudit + Debezium 進行稽核日誌記錄和 CDC
        slug: bai-12-audit-logging-cdc-pgaudit
        description: pgAudit、Debezium 變更資料擷取、不可變的稽核追蹤、稽核日誌的合規性報告。
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 第 4 部分：使用 Quarkus 建構微服務
    description: Quarkus OIDC、API 閘道、端對端加密、mTLS 服務網格
    sort_order: 4
    lessons:
      - id: 019e1a40-a113-7001-d001-f0a1b2c30113
        title: 第 13 課：Quarkus 安全性 — OIDC、JWT 傳播與 RBAC
        slug: bai-13-quarkus-security-oidc-jwt-rbac
        description: >-
          Quarkus OIDC 擴展，具有 Keycloak、承載令牌身份驗證、基於 JWT
          聲明的授權、@RolesAllowed、服務之間的令牌傳播。
        duration_minutes: 180
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e1a40-a114-7001-d001-f0a1b2c30114
        title: 第 14 課：API 閘道 — 速率限制、驗證與 WAF
        slug: bai-14-api-gateway-rate-limiting-waf
        description: 醫療保健 API 閘道安全性：Kong/APISIX、速率限制、JSON 架構驗證、WAF 規則、API 版本控制。
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e1a40-a115-7001-d001-f0a1b2c30115
        title: 第 15 課：微服務中的端對端加密
        slug: bai-15-ma-hoa-end-to-end-microservices
        description: 應用程式級加密、信封加密、加密 Kafka、REST/gRPC 中的欄位級加密、金鑰輪換。
        duration_minutes: 180
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019e1a40-a116-7001-d001-f0a1b2c30116
        title: 第 16 課：mTLS、服務網格和服務間通信
        slug: bai-16-mtls-service-mesh
        description: mTLS 與 Quarkus、Istio 服務網格、憑證管理員、Kubernetes NetworkPolicies、服務到服務驗證。
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 第 5 部分：合規性、稽核與資料保護
    description: HIPAA 合規性、審計追蹤、資料脫敏、災難復原
    sort_order: 5
    lessons:
      - id: 019e1a40-a117-7001-d001-f0a1b2c30117
        title: 第 17 課：HIPAA 技術保障 — 實施清單
        slug: bai-17-hipaa-technical-safeguards
        description: HIPAA 技術保障的完整清單，將每個要求對應到 Quarkus/PostgreSQL/Keycloak 實作中。
        duration_minutes: 180
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019e1a40-a118-7001-d001-f0a1b2c30118
        title: 第 18 課：集中稽核追蹤 — OpenTelemetry 和 ELK Stack
        slug: bai-18-audit-trail-opentelemetry-elk
        description: OpenTelemetry for Quarkus、分散式追蹤、結構化日誌記錄、ELK Stack、不可變日誌儲存、合規性儀表板。
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019e1a40-a119-7001-d001-f0a1b2c30119
        title: 第 19 課：資料脫敏、匿名化與去識別化
        slug: bai-19-data-masking-anonymization
        description: HIPAA 安全港去識別、k-匿名、假名化、標記化、PostgreSQL 視圖和 Quarkus 回應過濾器。
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019e1a40-a120-7001-d001-f0a1b2c30120
        title: 第 20 課：備份、災難復原和業務連續性
        slug: bai-20-backup-disaster-recovery
        description: 加密備份、pgBackRest、PITR、跨區域複製、RPO/RTO、勒索軟體防護、災難復原測試。
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-06
    title: 第六部分：生產營運
    description: 零信任、容器/K8s 安全、滲透測試、部署生產
    sort_order: 6
    lessons:
      - id: 019e1a40-a121-7001-d001-f0a1b2c30121
        title: 第 21 課：醫療保健系統的零信任架構
        slug: bai-21-zero-trust-architecture
        description: 部署零信任：微分段、持續驗證、NIST SP 800-207、Keycloak + Istio + OPA。
        duration_minutes: 180
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019e1a40-a122-7001-d001-f0a1b2c30122
        title: 第 22 課：容器和 Kubernetes 醫療保健安全
        slug: bai-22-container-kubernetes-security
        description: >-
          影像掃描 Trivy、Pod 安全標準、NetworkPolicies、External Secrets Operator、運行時安全
          Falco、SBOM。
        duration_minutes: 150
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019e1a40-a123-7001-d001-f0a1b2c30123
        title: 第 23 課：滲透測試和安全評估
        slug: bai-23-penetration-testing
        description: OWASP ZAP、SAST/DAST、依賴掃描、PostgreSQL/Keycloak 安全審計、API 安全測試、合規性報告。
        duration_minutes: 150
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019e1a40-a124-7001-d001-f0a1b2c30124
        title: 第 24 課：Capstone — 部署生產就緒型醫療保健平台
        slug: bai-24-capstone-deploy-production
        description: >-
          綜合專案：在 Kubernetes 上部署完整的醫療保健微服務平台，完全符合 HIPAA 標準 — Quarkus + PostgreSQL
          + Keycloak 上的病患、預約、實驗室、處方服務。
        duration_minutes: 300
        is_free: true
        sort_order: 24
        video_url: null
locale: zh-tw
---

## 簡介

**建立微服務醫療保健系統**是一門逐步實踐課程，指導您按照**微服務**架構，使用**Quarkus** (Java)、**PostgreSQL** 和 **Keycloak** 建立完整的醫療保健資訊系統 (HIS/EMR/LIS) - 符合最高的 **HIPAA** 安全標準。

與只教授安全理論的課程不同，本系列從零開始**建構一個實用的系統**：架構設計→服務建構→去中心化→加密→稽核→部署製作。每一個設計決策都符合國際醫療安全標準。

### 你會建造什麼？

- **病患服務** — 使用 RLS + 欄位加密管理病患記錄
- **臨床服務 (EMR)** — 電子病歷、就診、診斷
- **實驗室服務 (LIS)** — 測試、結果、樣本
- **預約服務** — 預約、管理診所
- **API 閘道** — 速率限制、WAF、請求驗證
- **Keycloak IAM** — SSO、RBAC/ABAC、FHIR 上的 SMART、MFA
- **稽核與監控** — OpenTelemetry、ELK、pgAudit 稽核追蹤
- **Kubernetes 部署** — mTLS、零信任、生產就緒

### 技術堆疊

|技術 |版本 |角色 |
|------------|------------|---------|
| **誇庫斯** | 3.x |微服務框架（Java）|
| **PostgreSQL** | 16+ |資料庫——RLS、pgcrypto、pgAudit |
| **鑰匙斗篷** | 26.x |身分與存取管理 |
| **阿帕契卡夫卡** | 3.x |事件流、CDC |
| **Istio** | 1.x |服務網格，mTLS |
| **Docker + K8s** |最新 |容器編排 |
| **HashiCorp 金庫** | 1.x |秘密與金鑰管理 |
| **開放遙測** | 1.x |可觀察性與分散式追蹤 |

### 所需知識

- 基本的Java和Quarkus框架
- 基礎 PostgreSQL（SQL、模式設計）
- Docker 和容器概念
- REST API 和微服務架構

### 誰應該學習？

- **後端工程師**建構醫療系統
- **DevSecOps 工程師** 實施醫療保健安全
- **技術主管**醫院/醫療設施的建築設計
- **全端開發人員**想要了解 HIPAA 標準安全性
