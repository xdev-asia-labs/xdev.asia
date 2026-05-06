---
id: 019d8a21-c700-7007-d001-e1f2a3b4c5d6
title: 資料平台與分析架構
slug: kien-truc-data-platform-analytics
description: >-
  從 Data Lakehouse 到 Data Mesh 的現代資料平台架構綜合課程。包括帶有 Airflow 和 dbt 的 ETL/ELT 管道、帶有
  Kafka 和 Flink 的流處理、資料治理和編目、資料品質框架、語義層和即時分析。設計一個為 BI、ML
  和資料驅動決策提供服務的企業級資料平台。案例研究：Uber、Netflix、Airbnb。更新於 2026 年。
featured_image: uploads/2026/03/data-platform-analytics-series-banner-2026.png
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
  - name: DataEngineering
    slug: dataengineering
  - name: DataPlatform
    slug: dataplatform
  - name: DataLakehouse
    slug: datalakehouse
  - name: DataMesh
    slug: datamesh
  - name: Kafka
    slug: kafka
  - name: Flink
    slug: flink
  - name: dbt
    slug: dbt
  - name: Airflow
    slug: airflow
  - name: Analytics
    slug: analytics
  - name: DataGovernance
    slug: datagovernance
  - name: Iceberg
    slug: iceberg
  - name: Spark
    slug: spark
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: 第 1 部分：資料平台基礎
    description: 演變：資料倉儲→資料湖→資料湖屋→資料格
    sort_order: 1
    lessons:
      - id: 019d8a21-c701-70c7-d001-e1f2a3b4c501
        title: 第 1 課：資料平台概述 - 演進與架構模式
        slug: bai-1-tong-quan-data-platform-evolution-architecture-patterns
        description: 演變：資料倉儲→資料湖→資料湖屋→資料格。現代資料堆疊。資料平台架構模式和團隊拓撲。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-c702-70c7-d001-e1f2a3b4c502
        title: 第 2 課：資料湖屋架構 - Iceberg、Delta Lake 和 Hudi
        slug: bai-2-data-lakehouse-architecture-iceberg-delta-lake-hudi
        description: >-
          Data Lakehouse：結合了 DW 和 Data Lake 的優點。阿帕契冰山、三角洲湖、阿帕契胡迪。表格式、物件儲存上的 ACID
          事務。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-c703-70c7-d001-e1f2a3b4c503
        title: 第 3 課：資料網格 - 面向領域的資料架構
        slug: bai-3-data-mesh-domain-oriented-data-architecture
        description: 資料網格原則：域所有權、資料即產品、自助平台、聯邦治理。實施模式。數據合約。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 第 2 部分：資料攝取和管道
    description: ETL 與 ELT 模式
    sort_order: 2
    lessons:
      - id: 019d8a21-c704-70c7-d001-e1f2a3b4c504
        title: 第 4 課：批次 - 使用 Airflow 和 dbt 的 ETL/ELT
        slug: bai-4-batch-processing-etl-elt-voi-airflow-dbt
        description: >-
          ETL 與 ELT 模式。 Apache Airflow：DAG、運算子、調度。
          dbt（資料建構工具）：模型、測試、文件。資料轉換最佳實踐。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-c705-70c7-d001-e1f2a3b4c505
        title: 第 5 課：流處理 - Kafka、Flink 和即時管道
        slug: bai-5-stream-processing-kafka-flink-real-time-pipeline
        description: >-
          Apache Kafka 深入研究：分區、消費者組、一次性。 Apache Flink：有狀態流程處理、視窗、浮水印。卡夫卡流與
          Flink。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-c706-70c7-d001-e1f2a3b4c506
        title: 第 6 課：變更資料擷取 (CDC) - Debezium 和事件溯源
        slug: bai-6-change-data-capture-cdc-debezium-event-sourcing
        description: >-
          CDC 概念和用例。 Debezium：捕獲 PostgreSQL、MySQL 的變更。 CDC → Kafka → Lakehouse
          管道。事件溯源模式。寄件箱模式。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-c707-70c7-d001-e1f2a3b4c507
        title: 第 7 課：資料整合與 API 攝取
        slug: bai-7-data-integration-api-ingestion
        description: >-
          REST API 資料攝取模式。 Webhook 接收器。基於檔案的攝取（S3、SFTP）。連接器生態系的
          Singer/Meltano。增量提取。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 第 3 部分：資料儲存與建模
    description: 星型模式、雪花模式
    sort_order: 3
    lessons:
      - id: 019d8a21-c708-70c7-d001-e1f2a3b4c508
        title: 第 8 課：資料建模 - 維度建模和活動模式
        slug: bai-8-data-modeling-dimensional-modeling-activity-schema
        description: 星型模式、雪花型模式。金博爾對上英蒙。活動架構。緩慢變化的尺寸（SCD）。寬表與標準化。分析建模。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-c709-70c7-d001-e1f2a3b4c509
        title: 第 9 課：儲存層 - 物件儲存、列式格式和分區
        slug: bai-9-storage-layer-object-storage-columnar-formats-partitioning
        description: 对象存储 (S3/MinIO)。柱狀格式：Parquet、ORC、Avro。分區策略。壓實。 Z 順序。儲存分層和生命週期策略。
        duration_minutes: 90
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-c710-70c7-d001-e1f2a3b4c510
        title: 第 10 課：查詢引擎 - Trino、DuckDB 和物化視圖
        slug: bai-10-query-engines-trino-duckdb-materialized-views
        description: 與 Trino/Presto 的共同查詢。用於嵌入式分析的 DuckDB。物化視圖和增量計算。查詢優化。
        duration_minutes: 90
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 第 4 部分：資料品質與治理
    description: 資料品質維度：準確性、完整性、及時性
    sort_order: 4
    lessons:
      - id: 019d8a21-c711-70c7-d001-e1f2a3b4c511
        title: 第 11 課：資料品質架構 - 測試、監控與警報
        slug: bai-11-data-quality-framework-testing-monitoring-alerting
        description: 資料品質維度：準確性、完整性、及時性。遠大的期望，dbt 測試，蘇打水。數據異常檢測。 SLA 監控。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8a21-c712-70c7-d001-e1f2a3b4c512
        title: 第 12 課：資料目錄與發現 - 元資料管理
        slug: bai-12-data-catalog-discovery-metadata-management
        description: 資料目錄：DataHub、OpenMetadata、Amundsen。元資料管理。數據沿襲追蹤。數據發現和搜尋。商業術語表。
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-c713-70c7-d001-e1f2a3b4c513
        title: 第 13 課：資料治理與存取控制
        slug: bai-13-data-governance-access-control
        description: 資料治理架構。列級存取控制。資料脫敏和匿名化。 PII 檢測。合規性（GDPR、PDPA）。數據分類。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-c714-70c7-d001-e1f2a3b4c514
        title: 第 14 課：資料契約與架構演變
        slug: bai-14-data-contracts-schema-evolution
        description: 數據合約：生產者-消費者協議。架構註冊表（Confluence、Buf）。模式演化策略。重大變更管理。版本控制。
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
  - id: section-05
    title: 第 5 部分：分析與語意層
    description: 語意層：指標的單一事實來源
    sort_order: 5
    lessons:
      - id: 019d8a21-c715-70c7-d001-e1f2a3b4c515
        title: 第 15 課：語意層 - 儲存指標與業務邏輯
        slug: bai-15-semantic-layer-metrics-store-business-logic
        description: 語意層：指標的單一事實來源。 Cube.js、MetricFlow (dbt)。指標定義、維度、措施。無頭商業智慧。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a21-c716-70c7-d001-e1f2a3b4c516
        title: 第 16 課：BI 和視覺化 - 儀表板架構
        slug: bai-16-bi-visualization-dashboard-architecture
        description: BI平台架构：Metabase、Superset、Looker。嵌入式分析。儀表板性能優化。自助分析。
        duration_minutes: 90
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-c717-70c7-d001-e1f2a3b4c517
        title: 第 17 課：即時分析 - ClickHouse 和串流儀表板
        slug: bai-17-real-time-analytics-clickhouse-streaming-dashboards
        description: 即時 OLAP：ClickHouse、Apache Druid。流式聚合。即時儀表板。近似查詢處理。抽樣策略。
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
  - id: section-06
    title: 第 6 部分：機器學習與資料平台
    description: 特徵儲存架構：Feast、Tecton
    sort_order: 6
    lessons:
      - id: 019d8a21-c718-70c7-d001-e1f2a3b4c518
        title: 第 18 課：特徵儲存 - 大規模特徵工程
        slug: bai-18-feature-store-feature-engineering-at-scale
        description: 特徵儲存架構：Feast、Tecton。離線與線上功能服務。特色管道。功能重複使用和發現。時間點正確連接。
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a21-c719-70c7-d001-e1f2a3b4c519
        title: 第 19 課：ML 管道整合 - 訓練與服務數據
        slug: bai-19-ml-pipeline-integration-training-serving-data
        description: >-
          ML 資料平台：訓練資料準備、標記管道。 Model training data versioning (DVC). A/B
          測試資料。實驗追蹤。
        duration_minutes: 90
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-c720-70c7-d001-e1f2a3b4c520
        title: 第 20 課：逆向 ETL 和營運分析
        slug: bai-20-reverse-etl-operational-analytics
        description: 反向 ETL：將資料倉儲洞察力推回營運工具（CRM、行銷）。人口普查，高接觸模式。營運分析用例。
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-07
    title: 第 7 部分：製作與案例研究
    description: 資料平台基礎設施：Kubernetes、K8s 上的 Spark
    sort_order: 7
    lessons:
      - id: 019d8a21-c721-70c7-d001-e1f2a3b4c521
        title: 第 21 課：基礎設施與成本優化
        slug: bai-21-infrastructure-cost-optimization
        description: 資料平台基礎設施：Kubernetes、K8s 上的 Spark。成本優化：現貨實例、自動擴充、儲存分層。數據團隊的 FinOps。
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a21-c722-70c7-d001-e1f2a3b4c522
        title: 第 22 課：資料平台安全與隱私
        slug: bai-22-data-platform-security-privacy
        description: 資料平台安全：加密、存取控制、稽核日誌記錄。隱私工程：差分隱私、k-匿名。數據屏蔽管道。
        duration_minutes: 90
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-c723-70c7-d001-e1f2a3b4c523
        title: 第 23 課：資料營運與平台工程
        slug: bai-23-dataops-platform-engineering
        description: DataOps 實務：用於資料管路、測試、監控的 CI/CD。自助數據平台。開發者經驗。平台團隊拓撲。
        duration_minutes: 90
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-c724-70c7-d001-e1f2a3b4c524
        title: 第 24 課：資料平台的可觀察性
        slug: bai-24-observability-cho-data-platform
        description: 資料可觀測性：管道監控、資料新鮮度、交易量異常。 SLA 追蹤。數據問題的事件響應。蒙特卡羅模式。
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-c725-70c7-d001-e1f2a3b4c525
        title: 第 25 課：案例研究 - Uber、Netflix、Airbnb 和 Spotify
        slug: bai-25-case-studies-uber-netflix-airbnb-spotify
        description: >-
          分析實際資料平台：Uber（統一資料平台）、Netflix（資料網格）、Airbnb（Minerva
          指標）、Spotify（事件交付）。吸取的教訓。
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
locale: zh-tw
---

