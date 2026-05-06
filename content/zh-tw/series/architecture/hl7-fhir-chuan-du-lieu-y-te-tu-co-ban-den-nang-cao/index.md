---
id: 019e0a10-a100-7001-d001-f1a7f8000001
title: HL7 FHIR - 基礎到進階醫療資料標準
slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
description: >-
  關於醫療保健中的 HL7 FHIR（快速醫療保健互通性資源）資料標準的綜合課程 — 從理論基礎到實際實施。涵蓋 HL7 歷史（v2、v3、CDA）、FHIR
  R5 架構、核心資源（患者、觀察、遭遇、藥物、診斷報告）、RESTful API（CRUD、搜尋、捆綁、事務）、資料類型、術語（ICD-10、SNOMED
  CT、LOINC）、設定檔和擴充、FHIR 上的 SMART、FIRH Boot）、與
  EMR/HIS、安全和隱私系統（HIPAA、GDPR）整合以及越南的實際應用（第 54/2017/TT-BYT 號通知、VNEID、社會保險）。更新至HL7
  International最新官方版本FHIR R5 (v5.0.0)。
featured_image: uploads/2026/03/hl7-fhir-series-banner.png
level: beginner
duration_hours: 100
lesson_count: 25
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-30T14:00:00.000000Z'
created_at: '2026-03-30T14:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9616-cat7-7007-a007-000000000007
  name: 系統架構
  slug: architecture
tags:
  - name: HL7
    slug: hl7
  - name: FHIR
    slug: fhir
  - name: healthcare
    slug: healthcare
  - name: interoperability
    slug: interoperability
  - name: y-te
    slug: y-te
  - name: EMR
    slug: emr
  - name: HIS
    slug: his
  - name: HAPI-FHIR
    slug: hapi-fhir
  - name: REST-API
    slug: rest-api
  - name: ICD-10
    slug: icd-10
  - name: SNOMED-CT
    slug: snomed-ct
  - name: LOINC
    slug: loinc
  - name: SMART-on-FHIR
    slug: smart-on-fhir
  - name: HandsOn
    slug: handson
  - name: security
    slug: security
  - name: Java
    slug: java
  - name: Spring Boot
    slug: spring-boot
sections:
  - id: section-01
    title: 第 1 部分：HL7 和 FHIR 平台
    description: 醫療數據標準歷史、FHIR R5概述、開發環境設置
    sort_order: 1
    lessons:
      - id: 019e0a10-a101-7001-d001-f1a7f8000101
        title: 第 1 課：HL7 簡介和醫療資料標準的歷史
        slug: bai-1-gioi-thieu-hl7-va-lich-su-chuan-du-lieu-y-te
        description: >-
          了解 HL7 International 是什麼、開發醫療保健資料標準（HL7 v2、HL7
          v3/RIM、CDA）的歷史、為什麼需要醫療資料標準化、醫療保健領域的互通性挑戰，以及 FHIR 如何誕生以解決先前標準的限制。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e0a10-a102-7001-d001-f1a7f8000102
        title: 第 2 課：FHIR R5 概述 - 架構與設計原則
        slug: bai-2-tong-quan-fhir-r5-kien-truc-va-nguyen-tac-thiet-ke
        description: >-
          FHIR 架構（資源、資料類型、可擴展性、RESTful API、訊息傳遞、文件）、80/20 設計原則、FHIR 成熟度模型
          (FMM)、FHIR R4 與 R5 的比較、規範中的模組（基礎、一致性、術語、臨床、財務）。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e0a10-a103-7001-d001-f1a7f8000103
        title: 第3課：安裝FHIR開發環境
        slug: bai-3-cai-dat-moi-truong-phat-trien-fhir
        description: >-
          安裝 HAPI FHIR 伺服器 (Docker)、公共 FHIR 測試伺服器、FHIR 的 Postman Collection、FHIR
          Shorthand (FSH) 和 SUSHI、FHIR 的 VS Code 擴展，測試第一個 CRUD 操作。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 第 2 部分：FHIR 核心資源
    description: 了解有關行政、臨床、藥物和診斷資源的更多信息
    sort_order: 2
    lessons:
      - id: 019e0a10-a201-7001-d001-f1a7f8000201
        title: 第 4 課：病人、從業人員、組織 - 行政資源
        slug: bai-4-patient-practitioner-organization-resources-hanh-chinh
        description: 資源 患者詳細資料（人口統計、識別碼、聯絡人、連結）、從業者和從業者角色、組織、位置、端點。練習在 FHIR 伺服器上建立、閱讀和更新患者。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e0a10-a202-7001-d001-f1a7f8000202
        title: 第 5 課：遭遇、狀況、觀察 - 臨床資源
        slug: bai-5-encounter-condition-observation-resources-lam-sang
        description: 資源遭遇（就診、住院）、狀況（診斷、健康問題）、觀察（生命徵象、實驗室結果、社會史）。如何透過參考、觀察類別、條件分期將資源連結在一起。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e0a10-a203-7001-d001-f1a7f8000203
        title: 第 6 課：藥物治療、藥物請求、免疫接種 - 藥物資源
        slug: bai-6-medication-medicationrequest-immunization-resources-thuoc
        description: FHIR 中的藥物管理：藥物、藥物請求（處方）、藥物管理、藥物分配、藥物聲明。免疫（疫苗接種），與藥物代碼系統（RxNorm、ATC）相連。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019e0a10-a204-7001-d001-f1a7f8000204
        title: 第 7 課：診斷報告、程序、過敏不耐症 - 診斷資源
        slug: >-
          bai-7-diagnosticreport-procedure-allergyintolerance-resources-chan-doan
        description: >-
          DiagnosticReport（測試結果、影像）、Procedure（程序、手術）、AllergyIntolerance（過敏）、ServiceRequest（服務請求）、Specimen（標本）。從需求到結果的診斷工作流程。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 第 3 部分：FHIR RESTful API 和資料交換
    description: 進階 REST、捆綁、交易、搜尋交互
    sort_order: 3
    lessons:
      - id: 019e0a10-a301-7001-d001-f1a7f8000301
        title: 第 8 課：FHIR RESTful API - CRUD、搜尋、歷史記錄和版本控制
        slug: bai-8-fhir-restful-api-crud-search-history-va-versioning
        description: >-
          REST 互動的詳細資訊：建立 (POST)、讀取 (GET)、更新 (PUT)、修補 (PATCH)、刪除
          (DELETE)、vread、歷史記錄。內容協商
          (JSON/XML)、ETag、If-Match、條件操作、CapabilityStatement。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e0a10-a302-7001-d001-f1a7f8000302
        title: 第 9 課：捆綁、事務和批次 - 處理多個資源
        slug: bai-9-bundle-transaction-va-batch-xu-ly-nhieu-resources
        description: 資源包和類型（搜尋集、事務、批次、文件、訊息、集合、歷史記錄）。事務處理規則、原子操作、條件引用、批次、練習建立事務包。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019e0a10-a303-7001-d001-f1a7f8000303
        title: 第 10 課：搜尋參數和進階搜尋
        slug: bai-10-search-parameters-va-tim-kiem-nang-cao
        description: >-
          搜尋參數類型（字串、標記、引用、日期、數字、數量、uri）、修飾符（:exact、:contains、:missing、:not）、連結、反向連結
          (_has)、_include、_revinclude、_summary、_elements、_count、分頁、複合搜尋參數、自訂
          SearchParameter。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 第 4 部分：資料類型、術語和設定文件
    description: 資料類型、醫療編碼系統、設定檔和擴展
    sort_order: 4
    lessons:
      - id: 019e0a10-a401-7001-d001-f1a7f8000401
        title: 第 11 課：FHIR 資料類型 - 原始、複雜和特殊
        slug: bai-11-fhir-data-types-primitive-complex-va-special
        description: >-
          基本型別（布林、字串、uri、日期、日期時間、即時、小數、整數）、複雜型別（HumanName、Address、ContactPoint、Identifier、CodeableConcept、Coding、Quantity、Period、Reference、Narrative）、BackboneElement、Element。資料類型的擴充。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e0a10-a402-7001-d001-f1a7f8000402
        title: 第 12 課：術語 - CodeSystem、ValueSet、ConceptMap
        slug: bai-12-terminologies-codesystem-valueset-conceptmap
        description: >-
          醫學術語系統：ICD-10（診斷）、SNOMED
          CT（臨床）、LOINC（實驗室）、RxNorm（藥物）、CPT（程序）、ATC（藥物分類）。 FHIR
          中的程式碼系統、值集、概念圖。術語綁定（必需、可擴充、首選、範例）。 $驗證程式碼，$擴展，$查找。
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019e0a10-a403-7001-d001-f1a7f8000403
        title: 第 13 課：設定檔、擴充和實施指南
        slug: bai-13-profiles-extensions-va-implementation-guides
        description: >-
          StructureDefinition，建立Profile來綁定Resource、Extensions（簡單、複雜、修飾符）、Slicing、Invariants（FHIRPath約束）。實施指南
          (IG)，IG 出版商，以美國核心概況為例，國際病患摘要 (IPS)。 FHIR 簡寫 (FSH)。
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-05
    title: 第 5 部分：整合、訊息傳遞與安全性
    description: 文件、訊息傳遞、訂閱、FHIR 上的 SMART、安全性
    sort_order: 5
    lessons:
      - id: 019e0a10-a501-7001-d001-f1a7f8000501
        title: 第 14 課：FHIR 文件和訊息傳遞
        slug: bai-14-fhir-documents-va-messaging
        description: >-
          FHIR 文件（組合資源、文件包、簽章）、FHIR 訊息傳遞（訊息標頭、訊息定義、訊息事件）、比較 REST
          與訊息傳遞與文件、每個範例的使用案例。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e0a10-a502-7001-d001-f1a7f8000502
        title: 第 15 課：FHIR 訂閱和即時通知
        slug: bai-15-fhir-subscriptions-va-real-time-notifications
        description: >-
          主題為基礎的訂閱
          (R5)、訂閱主題、訂閱資源、通知通道（rest-hook、websocket、電子郵件）、通知類型（握手、心跳、事件通知）、過濾器、有效負載內容。練習在
          HAPI FHIR 伺服器上設定訂閱。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019e0a10-a503-7001-d001-f1a7f8000503
        title: 第 16 課：FHIR 上的 SMART - OAuth2 和醫療應用
        slug: bai-16-smart-on-fhir-oauth2-va-ung-dung-y-te
        description: >-
          SMART 應用程式啟動框架、醫療保健中的 OAuth 2.0、臨床範圍、啟動情境（EHR 啟動、獨立啟動）、SMART
          後端服務（系統到系統）、CDS Hooks（臨床決策支援）。練習建立簡單的 SMART 應用程式。
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019e0a10-a504-7001-d001-f1a7f8000504
        title: 第 17 課：FHIR 中的安全、隱私和同意
        slug: bai-17-security-privacy-va-consent-trong-fhir
        description: >-
          FHIR 安全標籤、AuditEvent 資源、Provenance 資源、同意框架、FHIR 中的
          RBAC/ABAC、醫療資料加密、HIPAA 合規性、GDPR、越南醫療安全法規、FHIR 伺服器的安全最佳實務。
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
  - id: section-06
    title: 第 6 部分：實踐 - 建構 FHIR 系統
    description: 動手建立 FHIR 伺服器、客戶端、實作指南
    sort_order: 6
    lessons:
      - id: 019e0a10-a601-7001-d001-f1a7f8000601
        title: 第 18 課：實作 - 使用 HAPI FHIR 建置 FHIR 伺服器
        slug: bai-18-hands-on-xay-dung-fhir-server-voi-hapi-fhir
        description: >-
          使用 HAPI FHIR JPA 伺服器（Spring Boot）、PostgreSQL
          設定、索引、驗證、攔截器、自訂操作、大量資料匯出（$export）、Docker 部署建置可用於生產的 FHIR 伺服器。
        duration_minutes: 180
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019e0a10-a602-7001-d001-f1a7f8000602
        title: 第 19 課：實踐 - FHIR 用戶端和應用程式集成
        slug: bai-19-hands-on-fhir-client-va-tich-hop-ung-dung
        description: >-
          HAPI FHIR 用戶端 (Java)、fhir.js (JavaScript/TypeScript)、Python
          fhirclient。將 FHIR 整合到 Web 和行動應用程式中。流暢的客戶端
          API、通用客戶端、處理錯誤、重試、分頁。練習：簡單的患者管理應用程式。
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019e0a10-a603-7001-d001-f1a7f8000603
        title: 第 20 課：實務 - 制定越南實施指南
        slug: bai-20-hands-on-xay-dung-implementation-guide-cho-viet-nam
        description: >-
          建立越南 FHIR 實施指南：VN-Core-Patient
          profile（CCCD、健康保險、越南地址）、VN-Core-Organization（健康保險機構代碼）、VN-Core-Encounter（健康保險檢查類型代碼）。使用
          FSH + SUSHI + IG 發佈器。將 IG 發佈到 FHIR 註冊表。
        duration_minutes: 180
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019e0a10-a604-7001-d001-f1a7f8000604
        title: 第 21 課：實踐 - 將 FHIR 與實際 EMR/HIS 集成
        slug: bai-21-hands-on-tich-hop-fhir-voi-emr-his-thuc-te
        description: >-
          FHIR 與現有 EMR/HIS 系統的整合架構、FHIR Facade 模式、從舊資料庫到 FHIR 的資料映射、HL7 v2 到
          FHIR 轉換、CDA 到 FHIR 映射、FHIR 資料倉儲的 ETL 管道。
        duration_minutes: 150
        is_free: true
        sort_order: 21
        video_url: null
  - id: section-07
    title: 第七部分：生產、規模與未來
    description: 生產部署、越南背景、案例研究、未來趨勢
    sort_order: 7
    lessons:
      - id: 019e0a10-a701-7001-d001-f1a7f8000701
        title: 第 22 課：FHIR 效能、可擴充性和監控
        slug: bai-22-fhir-performance-scalability-va-monitoring
        description: >-
          最佳化 FHIR 伺服器效能（索引、快取、批次操作）、水平擴展、負載平衡、資料庫最佳化、Prometheus/Grafana
          監控、日誌記錄、大量資料存取（$export）、FHIR nFD（近即時資料管道）。
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019e0a10-a702-7001-d001-f1a7f8000702
        title: 第 23 課：越南衛生背景下的 FHIR
        slug: bai-23-fhir-trong-boi-canh-y-te-viet-nam
        description: >-
          越南醫療保健數位化的現狀、第54/2017/TT-BYT號通知（資料互通性）、第46/2018/TT-BYT號通知（電子病歷）、VNEID和身分認證、社會保險資料互通性、在越南應用FHIR的路線圖、障礙和解決方案。
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019e0a10-a703-7001-d001-f1a7f8000703
        title: 第 24 課：案例研究 - 美國核心、IPS 與實際實施
        slug: bai-24-case-studies-us-core-ips-va-trien-khai-thuc-te
        description: >-
          分析美國核心實施指南、國際病患摘要 (IPS)、英國 NHS Digital、澳洲 AU Base。來自實際實施、FHIR
          Connectathon、測試和認證的經驗教訓。互通性路線圖。
        duration_minutes: 120
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019e0a10-a704-7001-d001-f1a7f8000704
        title: 第 25 課：FHIR 的未來 - R6、AI/ML、基因組學和新趨勢
        slug: bai-25-tuong-lai-fhir-r6-ai-ml-genomics-va-xu-huong-moi
        description: >-
          FHIR R6 路線圖、FHIR 和 AI/ML（CDS Hooks、臨床推理）、FHIR 中的基因組學、人口健康的 FHIR
          批量數據、FHIR 和物聯網/可穿戴設備、患者生成的健康數據 (PGHD)、醫療保健中的數位孿生、總結和進一步學習路線圖。
        duration_minutes: 90
        is_free: true
        sort_order: 25
        video_url: null
locale: zh-tw
---

## 系列介紹

**HL7 FHIR（快速醫療互通性資源）**是由全球領先的醫療標準組織 HL7 International 開發的新一代醫療資料標準。 FHIR 正迅速成為許多國家（美國、英國、澳洲、歐盟）的強制性標準，並且是全球醫療保健數位化的基礎。

本系列旨在幫助您：

- **了解基礎**：HL7的歷史、為什麼需要標準化醫療數據、FHIR架構
- **主資源**：所有核心資源（病人、觀察、遭遇、藥物...）
- **API 熟練度**：RESTful API、搜尋、捆綁、事務、訊息傳遞
- **FHIR 客製化**：資料類型、術語（ICD-10、SNOMED CT、LOINC）、設定檔、擴展
- **整合與安全**：FHIR、OAuth2、安全標籤、同意上的 SMART
- **實踐**：建立 FHIR 伺服器 (HAPI FHIR)、客戶端應用程式、實施指南
- **適用於越南**：第 54/2017 號通知，連結社會保險、VNEID、VN FHIR 配置文件

### 目標受眾

- 開發商希望建立一個符合國際標準的醫療系統
- 醫療保健 IT 領域的軟體架構師（解決方案架構師）
- 業務分析師、專案經理想要了解醫療資料標準
- 醫療保健經理、IT 醫生希望了解互通性
- 健康資訊科技與生物醫學學生

### 先決條件

- REST API 和 HTTP 的基礎知識
- 了解如何讀取 JSON/XML
- 具備基本的程式設計知識（Java/Python/JavaScript — 取決於實作）
- 不需要深入的醫學知識（將在文章中解釋）
