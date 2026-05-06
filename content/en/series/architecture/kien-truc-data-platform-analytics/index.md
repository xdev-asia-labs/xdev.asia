---
id: 019d8a21-c700-7007-d001-e1f2a3b4c5d6
title: Data Platform & Analytics Architecture
slug: kien-truc-data-platform-analytics
description: >-
  Comprehensive course on modern Data Platform architecture from Data Lakehouse
  to Data Mesh. Includes ETL/ELT Pipeline with Airflow & dbt, Stream Processing
  with Kafka & Flink, Data Governance & Cataloging, Data Quality Framework,
  Semantic Layer, and Real-time Analytics. Design an enterprise-grade data
  platform serving BI, ML, and data-driven decisions. Case studies: Uber,
  Netflix, Airbnb. Updated 2026.
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
  name: System architecture
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
    title: 'Part 1: Data Platform Foundations'
    description: 'Evolution: Data Warehouse → Data Lake → Data Lakehouse → Data Mesh'
    sort_order: 1
    lessons:
      - id: 019d8a21-c701-70c7-d001-e1f2a3b4c501
        title: >-
          Lesson 1: Overview of Data Platform - Evolution & Architecture
          Patterns
        slug: bai-1-tong-quan-data-platform-evolution-architecture-patterns
        description: >-
          Evolution: Data Warehouse → Data Lake → Data Lakehouse → Data Mesh.
          Modern Data Stack. Data Platform architecture patterns and team
          topology.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-c702-70c7-d001-e1f2a3b4c502
        title: 'Lesson 2: Data Lakehouse Architecture - Iceberg, Delta Lake & Hudi'
        slug: bai-2-data-lakehouse-architecture-iceberg-delta-lake-hudi
        description: >-
          Data Lakehouse: combines the best of DW and Data Lake. Apache Iceberg,
          Delta Lake, Apache Hudi. Table formats, ACID transactions on object
          storage.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-c703-70c7-d001-e1f2a3b4c503
        title: 'Lesson 3: Data Mesh - Domain-Oriented Data Architecture'
        slug: bai-3-data-mesh-domain-oriented-data-architecture
        description: >-
          Data Mesh principles: domain ownership, data as product, self-serving
          platform, federated governance. Implementation patterns. Data
          contracts.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Part 2: Data Ingestion & Pipeline'
    description: ETL vs ELT patterns
    sort_order: 2
    lessons:
      - id: 019d8a21-c704-70c7-d001-e1f2a3b4c504
        title: 'Lesson 4: Batch Processing - ETL/ELT with Airflow & dbt'
        slug: bai-4-batch-processing-etl-elt-voi-airflow-dbt
        description: >-
          ETL vs ELT patterns. Apache Airflow: DAGs, operators, scheduling. dbt
          (data build tool): models, tests, documentation. Data transformation
          best practices.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-c705-70c7-d001-e1f2a3b4c505
        title: 'Lesson 5: Stream Processing - Kafka, Flink & Real-time Pipeline'
        slug: bai-5-stream-processing-kafka-flink-real-time-pipeline
        description: >-
          Apache Kafka deep-dive: partitions, consumer groups, exactly-once.
          Apache Flink: stateful stream processing, windowing, watermarks. Kafka
          Streams vs Flink.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-c706-70c7-d001-e1f2a3b4c506
        title: 'Lesson 6: Change Data Capture (CDC) - Debezium & Event Sourcing'
        slug: bai-6-change-data-capture-cdc-debezium-event-sourcing
        description: >-
          CDC concepts and use cases. Debezium: capture changes from PostgreSQL,
          MySQL. CDC → Kafka → Lakehouse pipeline. Event Sourcing patterns.
          Outbox pattern.
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-c707-70c7-d001-e1f2a3b4c507
        title: 'Lesson 7: Data Integration & API Ingestion'
        slug: bai-7-data-integration-api-ingestion
        description: >-
          REST API data ingestion patterns. Webhook receivers. File-based
          ingestion (S3, SFTP). Singer/Meltano for connector ecosystem.
          Incremental extraction.
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'Part 3: Data Storage & Modeling'
    description: 'Star schema, snowflake schema'
    sort_order: 3
    lessons:
      - id: 019d8a21-c708-70c7-d001-e1f2a3b4c508
        title: 'Lesson 8: Data Modeling - Dimensional Modeling & Activity Schema'
        slug: bai-8-data-modeling-dimensional-modeling-activity-schema
        description: >-
          Star schema, snowflake schema. Kimball vs Inmon. Activity schema.
          Slowly changing dimensions (SCD). Wide table vs normalized. Modeling
          for analytics.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-c709-70c7-d001-e1f2a3b4c509
        title: >-
          Lesson 9: Storage Layer - Object Storage, Columnar Formats &
          Partitioning
        slug: bai-9-storage-layer-object-storage-columnar-formats-partitioning
        description: >-
          Object storage (S3/MinIO). Columnar formats: Parquet, ORC, Avro.
          Partitioning strategies. Compaction. Z-ordering. Storage tiering and
          lifecycle policies.
        duration_minutes: 90
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-c710-70c7-d001-e1f2a3b4c510
        title: 'Lesson 10: Query Engines - Trino, DuckDB & Materialized Views'
        slug: bai-10-query-engines-trino-duckdb-materialized-views
        description: >-
          Federated query with Trino/Presto. DuckDB for embedded analytics.
          Materialized views and incremental computation. Query optimization.
        duration_minutes: 90
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 'Part 4: Data Quality & Governance'
    description: 'Data quality dimensions: accuracy, completeness, timeliness'
    sort_order: 4
    lessons:
      - id: 019d8a21-c711-70c7-d001-e1f2a3b4c511
        title: 'Lesson 11: Data Quality Framework - Testing, Monitoring & Alerting'
        slug: bai-11-data-quality-framework-testing-monitoring-alerting
        description: >-
          Data quality dimensions: accuracy, completeness, timeliness. Great
          Expectations, dbt tests, Soda. Data anomaly detection. SLA monitoring.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8a21-c712-70c7-d001-e1f2a3b4c512
        title: 'Lesson 12: Data Catalog & Discovery - Metadata Management'
        slug: bai-12-data-catalog-discovery-metadata-management
        description: >-
          Data catalog: DataHub, OpenMetadata, Amundsen. Metadata management.
          Data lineage tracking. Data discovery and search. Business glossary.
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-c713-70c7-d001-e1f2a3b4c513
        title: 'Lesson 13: Data Governance & Access Control'
        slug: bai-13-data-governance-access-control
        description: >-
          Data governance framework. Column-level access control. Data masking
          and anonymization. PII detection. Compliance (GDPR, PDPA). Data
          classification.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-c714-70c7-d001-e1f2a3b4c514
        title: 'Lesson 14: Data Contracts & Schema Evolution'
        slug: bai-14-data-contracts-schema-evolution
        description: >-
          Data contracts: producer-consumer agreements. Schema registry
          (Confluent, Buf). Schema evolution strategies. Breaking changes
          management. Versioning.
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
  - id: section-05
    title: 'Part 5: Analytics & Semantic Layer'
    description: 'Semantic layer: single source of truth for metrics'
    sort_order: 5
    lessons:
      - id: 019d8a21-c715-70c7-d001-e1f2a3b4c515
        title: 'Lesson 15: Semantic Layer - Store Metrics & Business Logic'
        slug: bai-15-semantic-layer-metrics-store-business-logic
        description: >-
          Semantic layer: single source of truth for metrics. Cube.js,
          MetricFlow (dbt). Metric definitions, dimensions, measures. Headless
          BI.
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a21-c716-70c7-d001-e1f2a3b4c516
        title: 'Lesson 16: BI & Visualization - Dashboard Architecture'
        slug: bai-16-bi-visualization-dashboard-architecture
        description: >-
          BI platform architecture: Metabase, Superset, Looker. Embedded
          analytics. Dashboard performance optimization. Self-service analytics.
        duration_minutes: 90
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-c717-70c7-d001-e1f2a3b4c517
        title: 'Lesson 17: Real-time Analytics - ClickHouse & Streaming Dashboards'
        slug: bai-17-real-time-analytics-clickhouse-streaming-dashboards
        description: >-
          Real-time OLAP: ClickHouse, Apache Druid. Streaming aggregations.
          Real-time dashboards. Approximate query processing. Sampling
          strategies.
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
  - id: section-06
    title: 'Part 6: ML & Data Platform'
    description: 'Feature Store architecture: Feast, Tecton'
    sort_order: 6
    lessons:
      - id: 019d8a21-c718-70c7-d001-e1f2a3b4c518
        title: 'Lesson 18: Feature Store - Feature Engineering at Scale'
        slug: bai-18-feature-store-feature-engineering-at-scale
        description: >-
          Feature Store architecture: Feast, Tecton. Offline vs online feature
          serving. Feature pipelines. Feature reuse and discovery. Point-in-time
          correct joins.
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a21-c719-70c7-d001-e1f2a3b4c519
        title: 'Lesson 19: ML Pipeline Integration - Training & Serving Data'
        slug: bai-19-ml-pipeline-integration-training-serving-data
        description: >-
          Data platform for ML: training data preparation, labeling pipelines.
          Model training data versioning (DVC). A/B testing data. Experimental
          tracking.
        duration_minutes: 90
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-c720-70c7-d001-e1f2a3b4c520
        title: 'Lesson 20: Reverse ETL & Operational Analytics'
        slug: bai-20-reverse-etl-operational-analytics
        description: >-
          Reverse ETL: push data warehouse insights back to operational tools
          (CRM, marketing). Census, Hightouch patterns. Operational analytics
          use cases.
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-07
    title: 'Part 7: Production & Case Studies'
    description: 'Data platform infrastructure: Kubernetes, Spark on K8s'
    sort_order: 7
    lessons:
      - id: 019d8a21-c721-70c7-d001-e1f2a3b4c521
        title: 'Lesson 21: Infrastructure & Cost Optimization'
        slug: bai-21-infrastructure-cost-optimization
        description: >-
          Data platform infrastructure: Kubernetes, Spark on K8s. Cost
          optimization: spot instances, auto-scaling, storage tiering. FinOps
          for data teams.
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a21-c722-70c7-d001-e1f2a3b4c522
        title: 'Lesson 22: Data Platform Security & Privacy'
        slug: bai-22-data-platform-security-privacy
        description: >-
          Data platform security: encryption, access control, audit logging.
          Privacy engineering: differential privacy, k-anonymity. Data masking
          pipelines.
        duration_minutes: 90
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-c723-70c7-d001-e1f2a3b4c523
        title: 'Lesson 23: DataOps & Platform Engineering'
        slug: bai-23-dataops-platform-engineering
        description: >-
          DataOps practices: CI/CD for data pipelines, testing, monitoring.
          Self-serve data platform. Developer experience. Platform team
          topology.
        duration_minutes: 90
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-c724-70c7-d001-e1f2a3b4c524
        title: 'Lesson 24: Observability for Data Platform'
        slug: bai-24-observability-cho-data-platform
        description: >-
          Data observability: pipeline monitoring, data freshness, volume
          anomalies. SLA tracking. Incident response for data issues. Monte
          Carlo patterns.
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-c725-70c7-d001-e1f2a3b4c525
        title: 'Lesson 25: Case Studies - Uber, Netflix, Airbnb & Spotify'
        slug: bai-25-case-studies-uber-netflix-airbnb-spotify
        description: >-
          Analyze actual data platforms: Uber (unified data platform), Netflix
          (data mesh), Airbnb (Minerva metrics), Spotify (event delivery).
          Lessons learned.
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
locale: en
---

