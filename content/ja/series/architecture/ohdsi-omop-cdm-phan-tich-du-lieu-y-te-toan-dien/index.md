---
id: 019e0b20-b200-7a01-e001-f1a7f8000001
title: OHDSI および OMOP CDM — 包括的な医療データ分析
slug: ohdsi-omop-cdm-phan-tich-du-lieu-y-te-toan-dien
description: >-
  OHDSI (Observational Health Data Sciences and Informatics) エコシステムと OMOP Common
  Data Model に関する包括的なシリーズ — プラットフォームの概要、標準化語彙 (Athena)、医療データ ETL
  (WhiteRabbit、Rabbit-in-a-Hat、Usagi)、PostgreSQL での OMOP CDM 実装、WebAPI、ATLAS
  のインストールから、臨床データ分析 (コホート定義、特性評価、罹患率、人口レベル)推定、患者レベルの予測)、データ品質評価
  (ACHILLES、データ品質ダッシュボード)、観察研究用の HADES R パッケージ、および多施設ネットワーク研究用の
  Docker/Kubernetes での OHDSI スタックの展開。
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
  name: システムアーキテクチャ
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
    title: 'パート 1: OHDSI および OMOP CDM の概要'
    description: OHDSI エコシステム、OMOP CDM アーキテクチャ、および標準化された語彙の紹介
    sort_order: 1
    lessons:
      - id: 019e0b20-b201-7a01-e001-f1a7f8000001
        title: 'レッスン 1: OHDSI とは何ですか? — エコシステムの概要とビジョン'
        slug: bai-1-ohdsi-la-gi-tong-quan-he-sinh-thai-va-tam-nhin
        description: >-
          OHDSI (Observational Health Data Sciences and
          Informatics)、その目標とビジョン、ツール エコシステムの全体的なアーキテクチャ
          (Atlas、WebAPI、Athena、Usagi、ACHILLES、HADES)、および世界的な医療データ標準化における OMOP
          CDM の役割を紹介します。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e0b20-b202-7a01-e001-f1a7f8000002
        title: 'レッスン 2: OMOP 共通データ モデル — 構造、原則、ドメイン'
        slug: bai-2-omop-cdm-cau-truc-nguyen-ly-domain
        description: >-
          OMOP CDM v5.4 アーキテクチャ、テーブル グループ
          (臨床データ、医療システム、医療経済学、標準化語彙、メタデータ)、ドメイン間の関係 (状態、薬剤、手順、測定、観察)、人物-訪問-イベント
          モデルと設計原則。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e0b20-b203-7a01-e001-f1a7f8000003
        title: 'レッスン 3: Athena — 標準化された語彙の検索と管理'
        slug: bai-3-athena-tra-cuu-quan-ly-standardized-vocabularies
        description: >-
          Athena を使用して、標準概念を検索し、語彙階層 (ICD-10、SNOMED
          CT、RxNorm、LOINC、ATC)、概念の関係、語彙を OMOP CDM
          データベースにロードおよびインポートする方法、ソース概念と標準概念の間のマッピングを理解します。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'パート 2: ETL とデータの正規化'
    description: ソースデータから OMOP CDM への ETL プロセス — WhiteRabbit、Rabbit-in-a-Hat、Usagi
    sort_order: 2
    lessons:
      - id: 019e0b20-b204-7a01-e001-f1a7f8000004
        title: 'レッスン 4: WhiteRabbit と Rabbit-in-a-Hat — ソース データ調査と ETL 設計'
        slug: bai-4-whiterabbit-rabbit-in-a-hat-khao-sat-du-lieu-thiet-ke-etl
        description: >-
          WhiteRabbit をインストールして使用すると、ソース データのスキャン、スキャン レポートの分析、Rabbit-in-a-Hat
          を使用したテーブル間およびフィールド間のマッピングの設計、ETL 仕様ドキュメントの作成、ETL
          チームの標準ワークフローを行うことができます。
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e0b20-b205-7a01-e001-f1a7f8000005
        title: 'レッスン 5: Usagi — ソース コードを OMOP 標準概念にマッピングする'
        slug: bai-5-usagi-mapping-ma-nguon-sang-omop-standard-concepts
        description: >-
          Usagi のインストール、ソース
          コードのインポート、用語類似性アルゴリズムを使用したマッピング候補の検索、マッピングの手動レビューと承認、特殊なケース (ICD-10
          ベトナム、国内医薬品) の処理、ETL パイプライン用のマッピング ファイルのエクスポート。
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e0b20-b206-7a01-e001-f1a7f8000006
        title: 'レッスン 6: ETL パイプラインの構築 — ソース データから OMOP CDM まで'
        slug: bai-6-xay-dung-etl-pipeline-tu-du-lieu-nguon-sang-omop-cdm
        description: >-
          完全な ETL パイプラインの設計と実装、データ変換の処理 (日付形式、単位変換、コード マッピング)、OMOP CDM
          テーブルへのデータのロード、エラー処理とデータ検証、増分 ETL 戦略、ETL フレームワークの推奨事項
          (Python、SQL、Talend)。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-03
    title: 'パート 3: OHDSI プラットフォームの導入'
    description: OMOP CDM データベース、WebAPI バックエンド、ATLAS フロントエンドをインストールする
    sort_order: 3
    lessons:
      - id: 019e0b20-b207-7a01-e001-f1a7f8000007
        title: 'レッスン 7: PostgreSQL に OMOP CDM データベースをインストールする'
        slug: bai-7-cai-dat-omop-cdm-database-tren-postgresql
        description: >-
          PostgreSQL で OMOP CDM スキーマを作成し、DDL スクリプトをインポートし、Athena
          から標準化語彙をロードし、インデックスと制約を作成し、OMOP クエリのパフォーマンス チューニングを構成し、セットアップ
          プロセスのスクリプト自動化を行います。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e0b20-b208-7a01-e001-f1a7f8000008
        title: 'レッスン 8: WebAPI — インストール、構成、REST API'
        slug: bai-8-webapi-cai-dat-cau-hinh-rest-api
        description: >-
          OHDSI WebAPI (Spring Boot) アーキテクチャ、ソースまたは Docker からのインストール、CDM
          データベース接続構成、WebAPI REST エンドポイント
          (ソース、語彙、コホート定義、IR、推定)、認証/認可、およびマルチソース構成。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e0b20-b209-7a01-e001-f1a7f8000009
        title: 'レッスン 9: ATLAS — インストール、WebAPI 統合、およびインターフェイスの概要'
        slug: bai-9-atlas-cai-dat-tich-hop-webapi-giao-dien-tong-quan
        description: >-
          ATLAS Web アプリケーションのインストール、WebAPI 接続の構成、インターフェイスの概要 (データ
          ソース、概念セット、コホート定義、特性評価、発生率、推定、予測)、セキュリティ構成
          (OAuth、LDAP)、および一般的なトラブルシューティング。
        duration_minutes: 90
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-04
    title: 'パート 4: ATLAS を使用したデータ分析'
    description: コホートの定義、特徴付け、発生率、推定および予測
    sort_order: 4
    lessons:
      - id: 019e0b20-b210-7a01-e001-f1a7f8000010
        title: 'レッスン 10: ATLAS — 概念セットとコホートの定義'
        slug: bai-10-atlas-concept-sets-cohort-definitions
        description: >-
          コンセプト セット (子孫を含む/除外する、マップされる) を作成し、コホート定義 (初期イベント、包含基準、打ち切り、時代ロジック)
          を設計し、コホート設計のベスト プラクティスを作成し、SQL を生成して CDM データベースで実行します。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e0b20-b211-7a01-e001-f1a7f8000011
        title: 'レッスン 11: ATLAS — 特性評価、発生率、経路'
        slug: bai-11-atlas-characterization-incidence-rates-pathways
        description: >-
          コホートの特徴付け (人口統計、状態、薬剤、測定値)、罹患率分析
          (リスクのある時間、目標/結果コホート)、治療経路の視覚化、結果のエクスポート、OHDSI ネットワーク経由の共有。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e0b20-b212-7a01-e001-f1a7f8000012
        title: 'レッスン 12: ATLAS — 人口レベルの推定と患者レベルの予測'
        slug: bai-12-atlas-population-level-estimation-patient-level-prediction
        description: >-
          集団レベルの効果推定 (比較コホート分析、傾向スコアマッチング、ネガティブコントロール結果)、患者レベルの予測
          (予測モデル開発、LASSO、勾配ブースティング、モデル評価 ROC/AUC)、および R 研究パッケージの生成。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-05
    title: 'パート 5: データ品質と高度な分析'
    description: ACHILLES、データ品質ダッシュボード、HADES R パッケージ
    sort_order: 5
    lessons:
      - id: 019e0b20-b213-7a01-e001-f1a7f8000013
        title: 'レッスン 13: ACHILLES — データの特性評価とソース プロファイリング'
        slug: bai-13-achilles-data-characterization-source-profiling
        description: >-
          ACHILLES を CDM データベースにインストールして実行し、レポート (人物、訪問、状態、薬剤、測定分布)
          を分析し、ACHILLES Heel — データ品質の問題を検出し、結果を ATLAS データ ソースに統合します。
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e0b20-b214-7a01-e001-f1a7f8000014
        title: 'レッスン 14: データ品質ダッシュボード — CDM データ品質を評価する'
        slug: bai-14-data-quality-dashboard-danh-gia-chat-luong-du-lieu-cdm
        description: >-
          データ品質ダッシュボードをインストールし、カーン フレームワーク (適合性、完全性、妥当性) に従って 1,500
          以上のチェックを実行し、合否結果、しきい値設定を分析し、データ品質の問題に優先順位を付け、データ品質プロセスを継続的に改善します。
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e0b20-b215-7a01-e001-f1a7f8000015
        title: 'レッスン 15: HADES — 観察研究用の R パッケージ'
        slug: bai-15-hades-r-packages-cho-nghien-cuu-quan-sat
        description: >-
          HADES エコシステム
          (CohortGenerator、FeatureExtraction、CohortMethod、PatientLevelPrediction、SelfControlledCaseSeries)
          の概要、メイン パッケージのインストールと使用、R からの完全なスタディの実行、再現可能なスタディのための実行エンジンである
          Strategus。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-06
    title: 'パート 6: 生産とネットワークの研究'
    description: OHDSIスタック生産とマルチセンター研究の展開
    sort_order: 6
    lessons:
      - id: 019e0b20-b216-7a01-e001-f1a7f8000016
        title: 'レッスン 16: OHDSI スタックを Docker および Kubernetes にデプロイする'
        slug: bai-16-trien-khai-ohdsi-stack-tren-docker-kubernetes
        description: >-
          OHDSI スタック (PostgreSQL + WebAPI + ATLAS) 用の Docker Compose、Kubernetes
          デプロイメント (Helm
          チャート、ボリューム、イングレス)、バックアップと復元戦略、モニタリングとアラート、運用ワークロードのパフォーマンス チューニング。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019e0b20-b217-7a01-e001-f1a7f8000017
        title: 'レッスン 17: ネットワーク研究とベスト プラクティス — 多施設研究'
        slug: bai-17-network-studies-best-practices-nghien-cuu-da-trung-tam
        description: >-
          OHDSI ネットワーク調査のワークフロー、分散型調査
          (各サイトがローカルで分析を実行し、集計結果のみを共有)、調査パッケージの開発、データ ガバナンスとプライバシー、OHDSI
          コミュニティの参加、ベトナムでの OHDSI 実装ロードマップ。
        duration_minutes: 90
        is_free: true
        sort_order: 17
        video_url: null
locale: ja
---

## コースのご紹介

**OHDSI & OMOP CDM** は、世界最大の観察による健康データ分析エコシステムに関する包括的なコースです。

### なぜ OHDSI なのか?

各病院や医療システムの医療データは異なる形式で保存されているため、複数施設での研究はほぼ不可能になっています。 **OHDSI** (発音:「オデッセイ」) は、**OMOP Common Data Model** にデータを正規化し、統合された分析ツールのセットを提供することで、この問題を解決します。

### 何を学びますか?

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

### 前提条件

- 基本的な SQL (SELECT、JOIN、GROUP BY)
- データベースの基本的な理解 (PostgreSQL を推奨)
- Docker の基本 (docker run、docker-compose)
- 基本 R (HADES セクション用) — 必須ではありません
- 深い医学知識は必要ありません
