---
id: 019d8a21-c700-7007-d001-e1f2a3b4c5d6
title: データプラットフォームと分析アーキテクチャ
slug: kien-truc-data-platform-analytics
description: >-
  データ レイクハウスからデータ メッシュまで、最新のデータ プラットフォーム アーキテクチャに関する包括的なコース。 Airflow と dbt を使用した
  ETL/ELT パイプライン、Kafka と Flink を使用したスト​​リーム処理、データ
  ガバナンスとカタログ作成、データ品質フレームワーク、セマンティック レイヤー、リアルタイム分析が含まれます。
  BI、ML、データ駆動型の意思決定を提供するエンタープライズ グレードのデータ プラットフォームを設計します。ケーススタディ:
  Uber、Netflix、Airbnb。 2026年更新。
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
  name: システムアーキテクチャ
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
    title: 'パート 1: データ プラットフォームの基盤'
    description: '進化: データ ウェアハウス → データ レイク → データ レイクハウス → データ メッシュ'
    sort_order: 1
    lessons:
      - id: 019d8a21-c701-70c7-d001-e1f2a3b4c501
        title: 'レッスン 1: データ プラットフォームの概要 - 進化とアーキテクチャ パターン'
        slug: bai-1-tong-quan-data-platform-evolution-architecture-patterns
        description: >-
          進化: データ ウェアハウス → データ レイク → データ レイクハウス → データ メッシュ。最新のデータスタック。データ
          プラットフォームのアーキテクチャ パターンとチーム トポロジ。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-c702-70c7-d001-e1f2a3b4c502
        title: 'レッスン 2: データ レイクハウスのアーキテクチャ - 氷山、デルタ湖、Hudi'
        slug: bai-2-data-lakehouse-architecture-iceberg-delta-lake-hudi
        description: >-
          Data Lakehouse: DW と Data Lake の長所を組み合わせたものです。 Apache Iceberg、Delta
          Lake、Apache Hudi。テーブル形式、オブジェクト ストレージ上の ACID トランザクション。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-c703-70c7-d001-e1f2a3b4c503
        title: 'レッスン 3: データ メッシュ - ドメイン指向のデータ アーキテクチャ'
        slug: bai-3-data-mesh-domain-oriented-data-architecture
        description: >-
          データ メッシュの原則: ドメイン所有権、製品としてのデータ、セルフサービス プラットフォーム、フェデレーション
          ガバナンス。実装パターン。データ契約。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'パート 2: データの取り込みとパイプライン'
    description: ETL と ELT のパターン
    sort_order: 2
    lessons:
      - id: 019d8a21-c704-70c7-d001-e1f2a3b4c504
        title: 'レッスン 4: バッチ処理 - エアフローと dbt を使用した ETL/ELT'
        slug: bai-4-batch-processing-etl-elt-voi-airflow-dbt
        description: >-
          ETL と ELT のパターン。 Apache Airflow: DAG、オペレーター、スケジューリング。 dbt (データ構築ツール):
          モデル、テスト、ドキュメント。データ変換のベスト プラクティス。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-c705-70c7-d001-e1f2a3b4c505
        title: 'レッスン 5: ストリーム処理 - Kafka、Flink、リアルタイム パイプライン'
        slug: bai-5-stream-processing-kafka-flink-real-time-pipeline
        description: >-
          Apache Kafka の詳細: パーティション、コンシューマ グループ、1 回限り。 Apache Flink: ステートフル
          ストリーム処理、ウィンドウ処理、ウォーターマーク。カフカストリーム対フリンク。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-c706-70c7-d001-e1f2a3b4c506
        title: 'レッスン 6: 変更データ キャプチャ (CDC) - Debezium とイベント ソーシング'
        slug: bai-6-change-data-capture-cdc-debezium-event-sourcing
        description: >-
          CDC の概念と使用例。 Debezium: PostgreSQL、MySQL からの変更をキャプチャします。 CDC → Kafka →
          Lakehouse パイプライン。イベントソーシングパターン。送信ボックスのパターン。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-c707-70c7-d001-e1f2a3b4c507
        title: 'レッスン 7: データ統合と API の取り込み'
        slug: bai-7-data-integration-api-ingestion
        description: >-
          REST API データ取り込みパターン。 Webhook レシーバー。ファイルベースの取り込み (S3、SFTP)。コネクタ
          エコシステム担当のシンガー/メルタノ。増分抽出。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'パート 3: データ ストレージとモデリング'
    description: スタースキーマ、スノーフレークスキーマ
    sort_order: 3
    lessons:
      - id: 019d8a21-c708-70c7-d001-e1f2a3b4c508
        title: 'レッスン 8: データ モデリング - 次元モデリングとアクティビティ スキーマ'
        slug: bai-8-data-modeling-dimensional-modeling-activity-schema
        description: >-
          スター スキーマ、スノーフレーク スキーマ。キンボール対インモン。アクティビティスキーマ。ゆっくりと変化する寸法
          (SCD)。ワイドテーブルと正規化。分析のためのモデリング。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-c709-70c7-d001-e1f2a3b4c509
        title: 'レッスン 9: ストレージ層 - オブジェクトストレージ、カラムナフォーマット、パーティショニング'
        slug: bai-9-storage-layer-object-storage-columnar-formats-partitioning
        description: >-
          オブジェクトストレージ (S3/MinIO)。コラム形式: Parquet、ORC、Avro。パーティショニング戦略。圧縮。 Z
          オーダー。ストレージ階層化とライフサイクル ポリシー。
        duration_minutes: 90
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-c710-70c7-d001-e1f2a3b4c510
        title: 'レッスン 10: クエリ エンジン - Trino、DuckDB、マテリアライズド ビュー'
        slug: bai-10-query-engines-trino-duckdb-materialized-views
        description: >-
          Trino/Presto によるフェデレーション クエリ。組み込み分析用の DuckDB。マテリアライズド
          ビューと増分計算。クエリの最適化。
        duration_minutes: 90
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 'パート 4: データ品質とガバナンス'
    description: 'データ品質の側面: 正確さ、完全性、適時性'
    sort_order: 4
    lessons:
      - id: 019d8a21-c711-70c7-d001-e1f2a3b4c511
        title: 'レッスン 11: データ品質フレームワーク - テスト、モニタリング、アラート'
        slug: bai-11-data-quality-framework-testing-monitoring-alerting
        description: 'データ品質の側面: 正確さ、完全性、適時性。素晴らしい期待、dbt テスト、ソーダ。データの異常検出。 SLA モニタリング。'
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8a21-c712-70c7-d001-e1f2a3b4c512
        title: 'レッスン 12: データ カタログと検出 - メタデータ管理'
        slug: bai-12-data-catalog-discovery-metadata-management
        description: >-
          データ カタログ:
          DataHub、OpenMetadata、Amunsen。メタデータ管理。データリネージの追跡。データの発見と検索。ビジネス用語集。
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-c713-70c7-d001-e1f2a3b4c513
        title: 'レッスン 13: データ ガバナンスとアクセス制御'
        slug: bai-13-data-governance-access-control
        description: >-
          データガバナンスのフレームワーク。列レベルのアクセス制御。データのマスキングと匿名化。 PII の検出。コンプライアンス
          (GDPR、PDPA)。データの分類。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-c714-70c7-d001-e1f2a3b4c514
        title: 'レッスン 14: データ コントラクトとスキーマの進化'
        slug: bai-14-data-contracts-schema-evolution
        description: 'データ契約: 生産者と消費者の契約。スキーマ レジストリ (Confluent、Buf)。スキーマ進化戦略。重大な変更管理。バージョン管理。'
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
  - id: section-05
    title: 'パート 5: 分析とセマンティック レイヤー'
    description: 'セマンティック レイヤー: メトリクスの信頼できる唯一の情報源'
    sort_order: 5
    lessons:
      - id: 019d8a21-c715-70c7-d001-e1f2a3b4c515
        title: 'レッスン 15: セマンティック レイヤー - ストア メトリックとビジネス ロジック'
        slug: bai-15-semantic-layer-metrics-store-business-logic
        description: >-
          セマンティック レイヤー: メトリクスの信頼できる唯一の情報源。 Cube.js、MetricFlow
          (dbt)。メトリクスの定義、ディメンション、メジャー。ヘッドレス BI。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a21-c716-70c7-d001-e1f2a3b4c516
        title: 'レッスン 16: BI と視覚化 - ダッシュボードのアーキテクチャ'
        slug: bai-16-bi-visualization-dashboard-architecture
        description: >-
          BI プラットフォーム アーキテクチャ:
          メタベース、スーパーセット、Looker。埋め込み型分析。ダッシュボードのパフォーマンスの最適化。セルフサービス分析。
        duration_minutes: 90
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-c717-70c7-d001-e1f2a3b4c517
        title: 'レッスン 17: リアルタイム分析 - ClickHouse とストリーミング ダッシュボード'
        slug: bai-17-real-time-analytics-clickhouse-streaming-dashboards
        description: >-
          リアルタイム OLAP: ClickHouse、Apache
          Druid。ストリーミング集約。リアルタイムのダッシュボード。おおよそのクエリ処理。サンプリング戦略。
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
  - id: section-06
    title: 'パート 6: ML とデータ プラットフォーム'
    description: 'フィーチャー ストア アーキテクチャ: Feast、Tecton'
    sort_order: 6
    lessons:
      - id: 019d8a21-c718-70c7-d001-e1f2a3b4c518
        title: 'レッスン 18: フィーチャー ストア - 大規模なフィーチャー エンジニアリング'
        slug: bai-18-feature-store-feature-engineering-at-scale
        description: >-
          フィーチャー ストア アーキテクチャ:
          Feast、Tecton。オフラインとオンラインの機能提供。機能パイプライン。機能の再利用と検出。ポイントインタイムの正しい結合。
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a21-c719-70c7-d001-e1f2a3b4c519
        title: 'レッスン 19: ML パイプラインの統合 - データのトレーニングと提供'
        slug: bai-19-ml-pipeline-integration-training-serving-data
        description: >-
          ML 用のデータ プラットフォーム: トレーニング データの準備、パイプラインのラベル付け。モデル トレーニング データのバージョン管理
          (DVC)。 A/B テスト データ。実験的な追跡。
        duration_minutes: 90
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-c720-70c7-d001-e1f2a3b4c520
        title: 'レッスン 20: リバース ETL と運用分析'
        slug: bai-20-reverse-etl-operational-analytics
        description: >-
          リバース ETL: データ ウェアハウスの洞察を運用ツール (CRM、マーケティング)
          にプッシュします。国勢調査、ハイタッチのパターン。運用分析のユースケース。
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-07
    title: 'パート 7: 制作とケーススタディ'
    description: 'データ プラットフォーム インフラストラクチャ: Kubernetes、Spark on K8s'
    sort_order: 7
    lessons:
      - id: 019d8a21-c721-70c7-d001-e1f2a3b4c521
        title: 'レッスン 21: インフラストラクチャとコストの最適化'
        slug: bai-21-infrastructure-cost-optimization
        description: >-
          データ プラットフォーム インフラストラクチャ: Kubernetes、K8 上の Spark。コストの最適化: スポット
          インスタンス、自動スケーリング、ストレージ階層化。データチームのための FinOps。
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a21-c722-70c7-d001-e1f2a3b4c522
        title: 'レッスン 22: データ プラットフォームのセキュリティとプライバシー'
        slug: bai-22-data-platform-security-privacy
        description: >-
          データ プラットフォームのセキュリティ: 暗号化、アクセス制御、監査ログ。プライバシー エンジニアリング:
          差分プライバシー、k-匿名性。データマスキングパイプライン。
        duration_minutes: 90
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-c723-70c7-d001-e1f2a3b4c523
        title: 'レッスン 23: DataOps とプラットフォーム エンジニアリング'
        slug: bai-23-dataops-platform-engineering
        description: >-
          DataOps の実践: データ パイプライン、テスト、モニタリングのための CI/CD。セルフサービスのデータ
          プラットフォーム。開発者の経験。プラットフォーム チーム トポロジ。
        duration_minutes: 90
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-c724-70c7-d001-e1f2a3b4c524
        title: 'レッスン 24: データ プラットフォームの可観測性'
        slug: bai-24-observability-cho-data-platform
        description: >-
          データの可観測性: パイプラインの監視、データの鮮度、ボリュームの異常。 SLA
          追跡。データの問題に対するインシデント対応。モンテカルロパターン。
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-c725-70c7-d001-e1f2a3b4c525
        title: 'レッスン 25: ケーススタディ - Uber、Netflix、Airbnb、Spotify'
        slug: bai-25-case-studies-uber-netflix-airbnb-spotify
        description: >-
          実際のデータ プラットフォームを分析します: Uber (統合データ プラットフォーム)、Netflix (データ メッシュ)、Airbnb
          (ミネルバ メトリクス)、Spotify (イベント配信)。教訓。
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
locale: ja
---

