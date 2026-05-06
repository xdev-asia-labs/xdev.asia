---
id: 019e0b20-b200-7a01-e001-f1a7f8000001
title: OHDSI 和 OMOP CDM — 綜合醫療數據分析
slug: ohdsi-omop-cdm-phan-tich-du-lieu-y-te-toan-dien
description: >-
  關於 OHDSI（觀察健康資料科學和資訊學）生態系統和 OMOP 通用資料模型的綜合系列 — 從平台概述、標準化詞彙 (Athena)、醫療資料
  ETL（WhiteRabbit、Rabbit-in-a-Hat、Usagi）、PostgreSQL 上的 OMOP CDM 實施、WebAPI 和
  ATLAS安裝，到臨床數據分析（隊列定義、特徵化、發病率、人群層級）估計、患者層級預測）、數據品質評估（ACHILLES、數據品質儀表板）、用於觀察研究的
  HADES R 軟體包，以及用於多中心網路研究的 Docker/Kubernetes 上的 OHDSI 堆疊部署。
featured_image: uploads/2026/03/ohdsi-omop-cdm-series-banner.png
level: intermediate
duration_hours: 50
lesson_count: 17
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-31T14:00:00.000000Z'
created_at: '2026-03-31T14:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9616-cat7-7007-a007-000000000007
  name: 系統架構
  slug: architecture
tags:
  - name: OHDSI
    slug: ohdsi
  - name: OMOP
    slug: omop
  - name: CDM
    slug: cdm
  - name: ATLAS
    slug: atlas
  - name: WebAPI
    slug: webapi
  - name: Athena
    slug: athena
  - name: Usagi
    slug: usagi
  - name: healthcare
    slug: healthcare
  - name: y-te
    slug: y-te
  - name: ETL
    slug: etl
  - name: ACHILLES
    slug: achilles
  - name: HADES
    slug: hades
  - name: PostgreSQL
    slug: postgresql
  - name: data-quality
    slug: data-quality
  - name: observational-research
    slug: observational-research
sections:
  - id: section-01
    title: 第 1 部分：OHDSI 和 OMOP CDM 概述
    description: 介紹 OHDSI 生態系、OMOP CDM 架構和標準化詞彙
    sort_order: 1
    lessons:
      - id: 019e0b20-b201-7a01-e001-f1a7f8000001
        title: 第 1 課：什麼是 OHDSI？ — 生態系概述與願景
        slug: bai-1-ohdsi-la-gi-tong-quan-he-sinh-thai-va-tam-nhin
        description: >-
          介紹OHDSI（觀察健康數據科學與資訊學）及其目標和願景、工俱生態系統的整體架構（Atlas、WebAPI、Athena、Usagi、ACHILLES、HADES）以及OMOP
          CDM在全球健康數據標準化中的作用。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e0b20-b202-7a01-e001-f1a7f8000002
        title: 第 2 課：OMOP 通用資料模型 — 結構、原理與領域
        slug: bai-2-omop-cdm-cau-truc-nguyen-ly-domain
        description: >-
          OMOP CDM v5.4
          架構、表組（臨床資料、健康系統、健康經濟學、標準化詞彙、元資料）、領域之間的關係（病情、藥物、程序、測量、觀察）、人員-訪問-事件模型和設計原則。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e0b20-b203-7a01-e001-f1a7f8000003
        title: 第 3 課：Athena — 尋找並管理標準化詞彙
        slug: bai-3-athena-tra-cuu-quan-ly-standardized-vocabularies
        description: >-
          使用 Athena 尋找標準概念，了解詞彙層次結構（ICD-10、SNOMED
          CT、RxNorm、LOINC、ATC）、概念關係、如何將詞彙載入和匯入到 OMOP CDM 資料庫、來源概念和標準概念之間的對應。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 第 2 部分：ETL 和數據標準化
    description: 從來源資料到 OMOP CDM 的 ETL 過程 — WhiteRabbit、Rabbit-in-a-Hat、Usagi
    sort_order: 2
    lessons:
      - id: 019e0b20-b204-7a01-e001-f1a7f8000004
        title: 第 4 課：WhiteRabbit 和 Rabbit-in-a-Hat — 來源資料調查和 ETL 設計
        slug: bai-4-whiterabbit-rabbit-in-a-hat-khao-sat-du-lieu-thiet-ke-etl
        description: >-
          安裝並使用 WhiteRabbit 掃描來源資料、分析掃描報告、使用 Rabbit-in-a-Hat 設計表到表格和欄位到欄位對應、建立
          ETL 規格文件以及 ETL 團隊的標準工作流程。
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e0b20-b205-7a01-e001-f1a7f8000005
        title: 第 5 課：Usagi — 將原始碼對應到 OMOP 標準概念
        slug: bai-5-usagi-mapping-ma-nguon-sang-omop-standard-concepts
        description: >-
          安裝Usagi，導入原始碼，使用術語相似度演算法查找映射候選者，手動審核和批准映射，處理特殊情況（ICD-10越南，國內藥品），導出ETL管道的映射文件。
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e0b20-b206-7a01-e001-f1a7f8000006
        title: 第 6 課：建立 ETL 管道 — 從來源資料到 OMOP CDM
        slug: bai-6-xay-dung-etl-pipeline-tu-du-lieu-nguon-sang-omop-cdm
        description: >-
          設計和實現完整的 ETL 管道，處理資料轉換（日期格式、單位轉換、程式碼映射）、將資料載入到 OMOP CDM 表、錯誤處理和資料驗證、增量
          ETL 策略、ETL 框架建議（Python、SQL、Talend）。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-03
    title: 第 3 部分：部署 OHDSI 平台
    description: 安裝 OMOP CDM 資料庫、WebAPI 後端和 ATLAS 前端
    sort_order: 3
    lessons:
      - id: 019e0b20-b207-7a01-e001-f1a7f8000007
        title: 第 7 課：在 PostgreSQL 上安裝 OMOP CDM 資料庫
        slug: bai-7-cai-dat-omop-cdm-database-tren-postgresql
        description: >-
          在 PostgreSQL 上建立 OMOP CDM 架構、匯入 DDL 腳本、從 Athena 載入標準化詞彙、建立索引和約束、配置
          OMOP 查詢的效能調整以及設定過程的腳本自動化。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e0b20-b208-7a01-e001-f1a7f8000008
        title: 第 8 課：WebAPI — 安裝、設定和 REST API
        slug: bai-8-webapi-cai-dat-cau-hinh-rest-api
        description: >-
          OHDSI WebAPI (Spring Boot) 架構、從來源或 Docker 安裝、CDM 資料庫連線配置、WebAPI REST
          端點（來源、詞彙、佇列定義、ir、估計）、驗證/授權和多來源設定。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e0b20-b209-7a01-e001-f1a7f8000009
        title: 第 9 課：ATLAS — 安裝、WebAPI 整合與概覽介面
        slug: bai-9-atlas-cai-dat-tich-hop-webapi-giao-dien-tong-quan
        description: >-
          安裝 ATLAS Web 應用程式、設定 WebAPI
          連線、介面概述（資料來源、概念集、群組定義、特徵、發生率、估計、預測）、安全性配置（OAuth、LDAP）以及常見故障排除。
        duration_minutes: 90
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-04
    title: 第 4 部分：使用 ATLAS 進行資料分析
    description: 隊列定義、特徵描述、發生率、估計和預測
    sort_order: 4
    lessons:
      - id: 019e0b20-b210-7a01-e001-f1a7f8000010
        title: 第 10 課：ATLAS — 概念集與群組定義
        slug: bai-10-atlas-concept-sets-cohort-definitions
        description: >-
          建立概念集（包括/排除後代、映射）、設計群組定義（初始事件、納入標準、審查、時代邏輯）、群組設計的最佳實踐、產生 SQL 並在 CDM
          資料庫上執行。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e0b20-b211-7a01-e001-f1a7f8000011
        title: 第 11 課：ATLAS — 特徵、發生率與途徑
        slug: bai-11-atlas-characterization-incidence-rates-pathways
        description: 隊列特徵（人口統計、條件、藥物、測量）、發病率分析（風險時間、目標/結果隊列）、治療路徑可視化、導出結果並透過 OHDSI 網路共享。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e0b20-b212-7a01-e001-f1a7f8000012
        title: 第 12 課：ATLAS — 人群層級估計與病患層級預測
        slug: bai-12-atlas-population-level-estimation-patient-level-prediction
        description: >-
          人群層級效應估計（比較隊列分析、傾向評分匹配、陰性對照結果）、患者層級預測（預測模型開發、LASSO、梯度提升、模型評估
          ROC/AUC）並產生 R 研究包。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-05
    title: 第 5 部分：資料品質與進階分析
    description: ACHILLES、數據品質儀表板和 HADES R 軟體包
    sort_order: 5
    lessons:
      - id: 019e0b20-b213-7a01-e001-f1a7f8000013
        title: 第 13 課：ACHILLES — 資料表徵與來源分析
        slug: bai-13-achilles-data-characterization-source-profiling
        description: >-
          在 CDM 資料庫上安裝並執行 ACHILLES，分析報告（人員、存取、狀況、藥物、測量分佈）、ACHILLES Heel —
          檢測資料品質問題，將結果整合到 ATLAS 資料來源中。
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e0b20-b214-7a01-e001-f1a7f8000014
        title: 第 14 課：資料品質儀表板 — 評估 CDM 資料質量
        slug: bai-14-data-quality-dashboard-danh-gia-chat-luong-du-lieu-cdm
        description: >-
          安裝資料品質儀表板，根據卡恩框架（一致性、完整性、合理性）執行 1,500
          多項檢查，分析通過/失敗結果、閾值配置、確定資料品質問題的優先級，並持續改善資料品質流程。
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e0b20-b215-7a01-e001-f1a7f8000015
        title: 第 15 課：HADES — 用於觀察研究的 R 包
        slug: bai-15-hades-r-packages-cho-nghien-cuu-quan-sat
        description: >-
          HADES
          生態系統概述（CohortGenerator、FeatureExtraction、CohortMethod、PatientLevelPrediction、SelfControlledCaseSeries）、安裝和使用主套件、從
          R、Strategus（用於可重複研究的執行引擎）運行完整的研究。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-06
    title: 第 6 部分：生產與網絡研究
    description: OHDSI堆疊生產和多中心研究的部署
    sort_order: 6
    lessons:
      - id: 019e0b20-b216-7a01-e001-f1a7f8000016
        title: 第 16 課：在 Docker 和 Kubernetes 上部署 OHDSI 堆疊
        slug: bai-16-trien-khai-ohdsi-stack-tren-docker-kubernetes
        description: >-
          適用於 OHDSI 堆疊（PostgreSQL + WebAPI + ATLAS）、Kubernetes 部署（Helm
          圖表、磁碟區、入口）、備份和復原策略、監控和警報、生產工作負載效能調整的 Docker Compose。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019e0b20-b217-7a01-e001-f1a7f8000017
        title: 第 17 課：網路研究與最佳實務 — 多中心研究
        slug: bai-17-network-studies-best-practices-nghien-cuu-da-trung-tam
        description: >-
          OHDSI 網路研究工作流程、分散式研究（每個站點在本地運行分析，僅共享匯總結果）、研究包開發、資料治理和隱私、OHDSI 社區參與以及
          OHDSI 在越南的實施路線圖。
        duration_minutes: 90
        is_free: true
        sort_order: 17
        video_url: null
locale: zh-tw
---

## 課程介紹

**OHDSI 和 OMOP CDM** 是關於世界上最大的觀察健康數據分析生態系統的綜合課程。

### 為什麼選擇 OHDSI？

每個醫院和衛生系統的醫療數據都以不同的格式存儲，這使得多中心研究幾乎不可能。 **OHDSI**（發音：「Odyssey」）透過將資料標準化為 **OMOP 通用資料模型**並提供一套統一的分析工具來解決此問題。

### 你會學到什麼？

```
Hệ sinh thái OHDSI
├── Standardized Vocabularies (Athena)
├── ETL Tools
│   ├── WhiteRabbit — Khảo sát dữ liệu nguồn
│   ├── Rabbit-in-a-Hat — Thiết kế ETL mapping
│   └── Usagi — Mapping mã nguồn → Standard Concepts
├── OMOP CDM Database (PostgreSQL)
├── WebAPI — Backend REST API
├── ATLAS — Web-based Analytics Platform
│   ├── Concept Sets & Cohort Definitions
│   ├── Characterization & Incidence Rates
│   ├── Population-Level Estimation
│   └── Patient-Level Prediction
├── Data Quality
│   ├── ACHILLES — Data Profiling
│   └── Data Quality Dashboard — 1,500+ Quality Checks
└── HADES — R Packages cho Observational Research
```

### 先決條件

- 基本 SQL（選擇、連線、分組依據）
- 對資料庫有基本的了解（PostgreSQL優先）
- Docker 基礎（docker run、docker-compose）
- 基本 R（針對 HADES 部分）— 不需要
- 不需要深入的醫學知識
