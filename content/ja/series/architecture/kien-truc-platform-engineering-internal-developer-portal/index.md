---
id: 019d8a21-ca00-700a-d001-e1f2a3b4c5d6
title: アーキテクチャ プラットフォーム エンジニアリングと社内開発者ポータル
slug: kien-truc-platform-engineering-internal-developer-portal
description: >-
  プラットフォーム エンジニアリングと内部開発者ポータル (IDP) に関する包括的なコース。バックステージ、サービス カタログ、ゴールデン
  パス、セルフサービス インフラストラクチャ、開発者エクスペリエンス (DX)、CI/CD
  プラットフォーム、環境管理、内部ツールが含まれます。プラットフォーム設計は、開発者がセルフサービスのインフラストラクチャを提供し、開発者の生産性を向上させ、認知負荷を軽減するのに役立ちます。ケーススタディ:
  Spotify (バックステージ)、Netflix、Airbnb。 2026年更新。
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
  name: システムアーキテクチャ
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
    title: 'パート 1: プラットフォーム エンジニアリングの基礎'
    description: プラットフォームエンジニアリングとは何ですか?
    sort_order: 1
    lessons:
      - id: 019d8a21-ca01-70ca-d001-e1f2a3b4c501
        title: 'レッスン 1: プラットフォーム エンジニアリングの概要 - なぜ、何を、どのように'
        slug: bai-1-tong-quan-platform-engineering-why-what-how
        description: >-
          プラットフォームエンジニアリングとは何ですか? DevOps とプラットフォーム エンジニアリング。内部開発者プラットフォーム (IDP)
          の概念。製品としてのプラットフォーム。プラットフォーム チーム用のチーム トポロジ。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-ca02-70ca-d001-e1f2a3b4c502
        title: 'レッスン 2: 開発者エクスペリエンス (DX) - 測定と改善'
        slug: bai-2-developer-experience-dx-measuring-improving
        description: >-
          開発者エクスペリエンス: 認知負荷、フロー状態、フィードバック ループ。 DORA メトリクス、SPACE
          フレームワーク。開発者アンケート。オンボーディング時間。最初の展開までの時間。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-ca03-70ca-d001-e1f2a3b4c503
        title: 'レッスン 3: プラットフォーム アーキテクチャの概要 - レイヤーとコンポーネント'
        slug: bai-3-platform-architecture-overview-layers-components
        description: >-
          IDP アーキテクチャ レイヤー: UI
          ポータル、API、オーケストレーション、統合。プラットフォーム機能マップ。構築か購入かの決定。プラットフォーム成熟度モデル。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'パート 2: 開発者ポータル'
    description: 'Spotify バックステージ: アーキテクチャ、プラグイン、カタログ'
    sort_order: 2
    lessons:
      - id: 019d8a21-ca04-70ca-d001-e1f2a3b4c504
        title: 'レッスン 4: バックステージ - 内部開発者ポータル'
        slug: bai-4-backstage-internal-developer-portal
        description: >-
          Spotify バックステージ: アーキテクチャ、プラグイン、カタログ。ソフトウェア カタログ: コンポーネント、API、リソース。
          TechDocs の統合。カスタマイズとプラグインの開発。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-ca05-70ca-d001-e1f2a3b4c505
        title: 'レッスン 5: サービス カタログとソフトウェア テンプレート'
        slug: bai-5-service-catalog-software-templates
        description: >-
          サービス カタログ: サービスを登録、検出、管理します。ソフトウェア テンプレート (スキャフォールダー): 新しいサービスのゴールデン
          パス。テンプレートのカスタマイズ。 API ドキュメント。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-ca06-70ca-d001-e1f2a3b4c506
        title: 'レッスン 6: API ポータルとドキュメント'
        slug: bai-6-api-portal-documentation
        description: >-
          API カタログ: 検出、ドキュメント、バージョン管理。 OpenAPI/AsyncAPI/GraphQL の仕様。 API ガバナンス。
          API ドキュメントの自動生成。 API ヘルスモニタリング。
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-ca07-70ca-d001-e1f2a3b4c507
        title: 'レッスン 7: 黄金の道と舗装された道路'
        slug: bai-7-golden-paths-paved-roads
        description: >-
          ゴールデン パス: 独自のデフォルト ワークフロー。舗装道路とガードレール。サービス創造の黄金の道。導入のゴールデン
          パス。インシデント対応のゴールデンパス。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'パート 3: セルフサービス インフラストラクチャ'
    description: 'セルフサービス インフラストラクチャ: 要求 → 承認 → プロビジョニング → 管理'
    sort_order: 3
    lessons:
      - id: 019d8a21-ca08-70ca-d001-e1f2a3b4c508
        title: 'レッスン 8: セルフサービス インフラストラクチャ - プロビジョニングと管理'
        slug: bai-8-self-service-infrastructure-provisioning-management
        description: >-
          セルフサービス インフラストラクチャ: 要求 → 承認 → プロビジョニング →
          管理。インフラストラクチャ抽象化レイヤー。リソースカタログ。リクエストごとのコストの可視化。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-ca09-70ca-d001-e1f2a3b4c509
        title: 'レッスン 9: コードとしてのインフラストラクチャ - Terraform、Crossplane、Pulumi'
        slug: bai-9-infrastructure-as-code-terraform-crossplane-pulumi
        description: >-
          IaC プラットフォーム: Terraform モジュール、Crossplane コンポジション、Pulumi プログラム。生の IaC
          に対するプラットフォームの抽象化。ガードレール付きのセルフサービス。状態管理。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-ca10-70ca-d001-e1f2a3b4c510
        title: 'レッスン 10: 環境管理 - 開発、ステージング、実稼働'
        slug: bai-10-environment-management-dev-staging-production
        description: '環境管理: 一時的な環境、プレビュー環境。環境の同等性。名前空間ベースの分離。開発/ステージングのコストの最適化。'
        duration_minutes: 90
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a21-ca11-70ca-d001-e1f2a3b4c511
        title: 'レッスン 11: データベースとミドルウェアのセルフサービス'
        slug: bai-11-database-middleware-self-service
        description: >-
          データベース プロビジョニング: セルフサービスとしての
          PostgreSQL、Redis、Kafka。演算子のパターン。バックアップの自動化。スキーマの移行。接続管理。
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-04
    title: 'パート 4: CI/CD プラットフォーム'
    description: 'CI/CD プラットフォーム: 共有パイプライン、再利用可能なワークフロー'
    sort_order: 4
    lessons:
      - id: 019d8a21-ca12-70ca-d001-e1f2a3b4c512
        title: 'レッスン 12: CI/CD プラットフォーム アーキテクチャ - コードとしてのパイプライン'
        slug: bai-12-cicd-platform-architecture-pipeline-as-code
        description: >-
          CI/CD プラットフォーム: 共有パイプライン、再利用可能なワークフロー。 GitHub アクション、GitLab
          CI、Tekton。パイプライン テンプレート。キャッシュを構築します。アーティファクト管理。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-ca13-70ca-d001-e1f2a3b4c513
        title: 'レッスン 13: GitOps とデプロイメントの自動化'
        slug: bai-13-gitops-deployment-automation
        description: 'GitOps: ArgoCD、Flux。導入戦略: ブルーグリーン、カナリア、プログレッシブ。ロールバックの自動化。環境推進。ドリフト検出。'
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-ca14-70ca-d001-e1f2a3b4c514
        title: 'レッスン 14: コンテナーとイメージ管理'
        slug: bai-14-container-image-management
        description: >-
          コンテナレジストリ（ハーバー）。画像のスキャンと署名
          (Cosign)。基本イメージの管理。マルチアーチビルド。イメージプロモーションパイプライン。 SBOM世代。
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8a21-ca15-70ca-d001-e1f2a3b4c515
        title: 'レッスン 15: テスト プラットフォーム - シフトレフトと品質ゲート'
        slug: bai-15-testing-platform-shift-left-quality-gates
        description: >-
          テスト インフラストラクチャ: テスト環境、テスト データ管理。品質ゲート: コード カバレッジ、セキュリティ スキャン、パフォーマンス
          テスト。不安定なテストの検出。
        duration_minutes: 90
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-05
    title: 'パート 5: セキュリティとコンプライアンスのプラットフォーム'
    description: 'セキュリティプラットフォーム: OPA/Gatekeeper、Kyverno'
    sort_order: 5
    lessons:
      - id: 019d8a21-ca16-70ca-d001-e1f2a3b4c516
        title: 'レッスン 16: セキュリティ プラットフォーム - コードとしてのポリシー'
        slug: bai-16-security-platform-policy-as-code
        description: >-
          セキュリティ プラットフォーム:
          OPA/ゲートキーパー、Kyverno。コードとしてのポリシー。自動化されたコンプライアンスチェック。脆弱性管理プラットフォーム。秘密管理（Vault）。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-ca17-70ca-d001-e1f2a3b4c517
        title: 'レッスン 17: サプライ チェーンのセキュリティ - SBOM と SLSA'
        slug: bai-17-supply-chain-security-sbom-slsa
        description: >-
          ソフトウェア サプライ チェーンのセキュリティ。 SBOM (ソフトウェア部品表)。 SLSA
          フレームワーク。依存関係のスキャン。署名されたビルド。出所の検証。
        duration_minutes: 90
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-ca18-70ca-d001-e1f2a3b4c518
        title: 'レッスン 18: コスト管理と FinOps プラットフォーム'
        slug: bai-18-cost-management-finops-platform
        description: >-
          クラウドコスト管理: チーム/サービスごとのコスト配分。 FinOps
          の実践。予算のアラート。リソースの適切なサイジング。スポットインスタンス管理。ショーバック/チャージバック。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 'パート 6: 可観測性プラットフォーム'
    description: '統合された可観測性: OpenTelemetry、Prometheus、Grafana、Loki、Tempo'
    sort_order: 6
    lessons:
      - id: 019d8a21-ca19-70ca-d001-e1f2a3b4c519
        title: 'レッスン 19: 可観測性プラットフォーム - メトリクス、ログ、トレース'
        slug: bai-19-observability-platform-metrics-logs-traces
        description: >-
          統合された可観測性:
          OpenTelemetry、Prometheus、Grafana、Loki、Tempo。セルフサービスのダッシュボード。アラートのルーティング。オンコール管理の統合。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-ca20-70ca-d001-e1f2a3b4c520
        title: 'レッスン 20: SRE プラットフォーム - SLO、エラー バジェット、およびインシデント管理'
        slug: bai-20-sre-platform-slo-error-budgets-incident-management
        description: >-
          SRE プラクティス: SLI/SLO/SLA
          の定義。エラーバジェット追跡。インシデント管理プラットフォーム。事後自動化。カオスエンジニアリングの統合。
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8a21-ca21-70ca-d001-e1f2a3b4c521
        title: 'レッスン 21: ロギングおよび監査プラットフォーム'
        slug: bai-21-logging-audit-platform
        description: '集中ログ: ELK/EFK、Loki。大規模なログ集約。監査ログプラットフォーム。ログベースのアラート。コンプライアンスのログ要件。'
        duration_minutes: 90
        is_free: true
        sort_order: 21
        video_url: null
  - id: section-07
    title: 'パート 7: 制作とケーススタディ'
    description: 'プラットフォームのチーム構造: チーム トポロジ、チームの有効化'
    sort_order: 7
    lessons:
      - id: 019d8a21-ca22-70ca-d001-e1f2a3b4c522
        title: 'レッスン 22: プラットフォーム チームの組織と運用モデル'
        slug: bai-22-platform-team-organization-operating-model
        description: >-
          プラットフォームのチーム構造: チーム
          トポロジ、チームの有効化。プラットフォーム製品管理。内部ツールのユーザー調査。プラットフォーム導入戦略。
        duration_minutes: 90
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-ca23-70ca-d001-e1f2a3b4c523
        title: 'レッスン 23: プラットフォームの移行と導入'
        slug: bai-23-platform-migration-adoption
        description: >-
          新しいプラットフォームへの移行:
          段階的な導入、インセンティブ。レガシーシステムの統合。プラットフォームの採用状況を測定します。コミュニティの構築。ドキュメント。
        duration_minutes: 90
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-ca24-70ca-d001-e1f2a3b4c524
        title: 'レッスン 24: プラットフォームの成功の測定 - 指標と ROI'
        slug: bai-24-measuring-platform-success-metrics-roi
        description: 'プラットフォームの成功指標: 開発者の満足度、導入頻度、リードタイム。 ROIの計算。プラットフォームの成熟度評価。継続的な改善。'
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-ca25-70ca-d001-e1f2a3b4c525
        title: 'レッスン 25: ケーススタディ - Spotify、Netflix、Airbnb & Mercado Libre'
        slug: bai-25-case-studies-spotify-netflix-airbnb-mercado-libre
        description: >-
          実際のプラットフォームエンジニアリング分析: Spotify (バックステージの起源)、Netflix (フルサイクル開発)、Airbnb
          (サービスメッシュ)、Mercado Libre (大規模なプラットフォーム)。教訓。
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
locale: ja
---

