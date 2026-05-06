---
id: 019d8a21-c600-7006-d001-e1f2a3b4c5d6
title: マルチテナント SaaS プラットフォーム アーキテクチャ
slug: kien-truc-multi-tenant-saas-platform
description: >-
  マルチテナント SaaS プラットフォーム
  アーキテクチャに関する基本的なものから実稼働対応までの包括的なコース。テナント分離戦略、サブスクリプションおよび請求エンジン、プラグイン/拡張機能アーキテクチャ、ホワイトラベル、オンボーディング自動化、機能フラグ、使用量測定、およびセルフサービス管理ポータルが含まれます。最適なコストで数千のテナントに対応する
  SaaS システムを設計します。 Slack、Notion、Atlassian、および主要な SaaS プラットフォームのケーススタディ。 2026年更新。
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
  name: システムアーキテクチャ
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
    title: 'パート 1: SaaS 基盤'
    description: SaaS ビジネスモデル (B2B、B2C、PLG、販売主導)
    sort_order: 1
    lessons:
      - id: 019d8a21-c601-70c6-d001-e1f2a3b4c501
        title: 'レッスン 1: SaaS の概要 - ビジネス モデル、メトリクス、アーキテクチャ パターン'
        slug: bai-1-tong-quan-saas-business-models-metrics-architecture
        description: >-
          SaaS ビジネス モデル (B2B、B2C、PLG、販売主導)。主要な指標: MRR、ARR、チャーン、LTV、CAC。 SaaS
          アーキテクチャ パターンとオンプレミスからクラウドネイティブへの進化。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-c602-70c6-d001-e1f2a3b4c502
        title: 'レッスン 2: マルチテナントの詳細 - 分離戦略とトレードオフ'
        slug: bai-2-multi-tenancy-deep-dive-isolation-strategies-trade-offs
        description: >-
          3 つのテナント分離戦略: サイロ (テナントごとの DB)、プール (共有 DB)、ブリッジ
          (テナントごとのスキーマ)。コスト、セキュリティ、パフォーマンスのトレードオフ。意思決定の枠組み。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-c603-70c6-d001-e1f2a3b4c503
        title: 'レッスン 3: プラットフォーム アーキテクチャの概要 - SaaS 向け DDD とマイクロサービス'
        slug: bai-3-platform-architecture-overview-ddd-microservices-cho-saas
        description: >-
          SaaS プラットフォームの全体的なアーキテクチャ設計。境界付きコンテキスト:
          テナント、ID、請求、製品。共有サービスとテナント固有のサービス。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'パート 2: テナント管理とアイデンティティ'
    description: 'テナント プロビジョニングの自動化: インフラストラクチャのセットアップ、データベースの作成、構成'
    sort_order: 2
    lessons:
      - id: 019d8a21-c604-70c6-d001-e1f2a3b4c504
        title: 'レッスン 4: テナントのライフサイクル管理 - プロビジョニングと構成'
        slug: bai-4-tenant-lifecycle-management-provisioning-configuration
        description: >-
          テナント プロビジョニングの自動化: インフラストラクチャのセットアップ、データベースの作成、構成。テナントを意識したルーティング。
          Custom domains and branding per tenant.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-c605-70c6-d001-e1f2a3b4c505
        title: 'レッスン 5: ID とアクセス管理 - マルチテナント認証と SSO'
        slug: bai-5-identity-access-management-multi-tenant-auth-sso
        description: >-
          マルチテナント認証: 組織ベースのログイン。 SAML/OIDC による SSO。テナントごとの RBAC。招待の流れ。 ID プロバイダー
          フェデレーション。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-c606-70c6-d001-e1f2a3b4c506
        title: 'レッスン 6: オンボーディング エンジン - セルフサービスのサインアップとガイド付きセットアップ'
        slug: bai-6-onboarding-engine-self-service-signup-guided-setup
        description: >-
          オンボーディング フローの設計:
          サインアップ、検証、ワークスペースの作成、ガイド付きセットアップ。製品主導の成長パターン。治験管理。アクティベーションメトリクスの追跡。
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-c607-70c6-d001-e1f2a3b4c507
        title: 'レッスン 7: データ分離とマルチテナント データベース パターン'
        slug: bai-7-data-isolation-multi-tenant-database-patterns
        description: >-
          PostgreSQL による行レベルのセキュリティ (RLS)。テナント
          コンテキストの伝播。クエリフィルタリングパターン。テナント間のデータ保護。テナントを意識した移行。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'パート 3: 請求およびサブスクリプション エンジン'
    description: 'サブスクリプション システムの設計: プラン管理、価格階層、試用期間'
    sort_order: 3
    lessons:
      - id: 019d8a21-c608-70c6-d001-e1f2a3b4c508
        title: 'レッスン 8: サブスクリプション エンジン - プラン、価格、ライフサイクル'
        slug: bai-8-subscription-engine-plans-pricing-lifecycle
        description: >-
          サブスクリプション システムの設計: プラン管理、価格階層、試用期間。サブスクリプションのライフサイクル:
          作成、アップグレード、ダウングレード、キャンセル、一時停止。祖父。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-c609-70c6-d001-e1f2a3b4c509
        title: 'レッスン 9: 使用量測定および請求エンジン'
        slug: bai-9-usage-metering-billing-engine
        description: >-
          使用量ベースの課金:
          インフラストラクチャの計測、集約パイプライン。請求書の生成。アップグレード/ダウングレードの比例配分。税金の計算。ストライプ/パドルの統合。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-c610-70c6-d001-e1f2a3b4c510
        title: 'レッスン 10: 権利付与システムと機能ゲーティング'
        slug: bai-10-entitlement-system-feature-gating
        description: >-
          権利付与エンジン: プランベースの機能へのアクセス。プログレッシブ
          ロールアウト用の機能フラグ。プランごとのレート制限。割り当て管理。超過料金の取り扱い。
        duration_minutes: 90
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 'パート 4: コア プラットフォームの機能'
    description: '機能フラグのアーキテクチャ: LaunchDarkly パターン'
    sort_order: 4
    lessons:
      - id: 019d8a21-c611-70c6-d001-e1f2a3b4c511
        title: 'レッスン 11: 機能フラグと構成管理'
        slug: bai-11-feature-flags-configuration-management
        description: >-
          機能フラグ アーキテクチャ: LaunchDarkly パターン。テナント固有の構成。 A/B
          テストのインフラストラクチャ。ダークが起動します。キルスイッチ。
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8a21-c612-70c6-d001-e1f2a3b4c512
        title: 'レッスン 12: プラグインと拡張機能のアーキテクチャ - マーケットプレイス'
        slug: bai-12-plugin-extension-architecture-marketplace
        description: >-
          プラグイン システムの設計: 拡張ポイント、フック、サンドボックス実行。マーケットプレイスのプラグイン。サードパーティの統合。
          Webhook システム。 OAuth アプリ プラットフォーム。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-c613-70c6-d001-e1f2a3b4c513
        title: 'レッスン 13: ホワイトラベルとカスタムブランディング'
        slug: bai-13-white-labeling-custom-branding
        description: >-
          ホワイトラベル アーキテクチャ: カスタム ドメイン、ロゴ、色、電子メール テンプレート。 CSSテーマエンジン。再販業者/パートナー
          プログラムのサポート。カスタムログインページ。
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-c614-70c6-d001-e1f2a3b4c514
        title: 'レッスン 14: 通知および通信エンジン'
        slug: bai-14-notification-communication-engine
        description: >-
          マルチチャネル通知:
          電子メール、プッシュ、アプリ内、SMS、Slack。テンプレートエンジン。プリファレンス管理。ダイジェスト/バッチ処理。配送追跡。
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
  - id: section-05
    title: 'パート 5: データと API プラットフォーム'
    description: 'API ファーストの SaaS: REST/GraphQL API 設計'
    sort_order: 5
    lessons:
      - id: 019d8a21-c615-70c6-d001-e1f2a3b4c515
        title: 'レッスン 15: API 設計と開発者のエクスペリエンス'
        slug: bai-15-api-design-developer-experience
        description: >-
          API ファーストの SaaS: REST/GraphQL API 設計。 API のバージョン管理戦略。開発者ポータル。 SDKの世代。
          API キーごとのレート制限。サンドボックス環境。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a21-c616-70c6-d001-e1f2a3b4c516
        title: 'レッスン 16: データのインポート/エクスポートおよび移行ツール'
        slug: bai-16-data-import-export-migration-tools
        description: >-
          ストリーミングによる一括データインポート。エクスポート形式
          (CSV、JSON、Parquet)。競合他社のプラットフォームからのデータ移行。テナント データの ETL パイプライン。
        duration_minutes: 90
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-c617-70c6-d001-e1f2a3b4c517
        title: 'レッスン 17: テナントごとの検索と分析'
        slug: bai-17-search-analytics-per-tenant
        description: >-
          マルチテナントの全文検索 (Elasticsearch/Meilisearch)。検索インデックスでのテナント
          データの分離。アプリ内分析ダッシュボード。データのエクスポート。
        duration_minutes: 90
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-c618-70c6-d001-e1f2a3b4c518
        title: 'レッスン 18: 監査ログとコンプライアンス'
        slug: bai-18-audit-logging-compliance
        description: >-
          テナントごとの不変の監査ログ。アクティビティフィード。データ保持ポリシー。 GDPR への準拠: データの削除、エクスポート。 SOC 2
          要件。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 'パート 6: スケーリングと運用'
    description: 騒音隣人問題
    sort_order: 6
    lessons:
      - id: 019d8a21-c619-70c6-d001-e1f2a3b4c519
        title: 'レッスン 19: 騒々しい隣人とリソースの分離'
        slug: bai-19-noisy-neighbor-resource-isolation
        description: >-
          騒音隣人問題。テナントごとのリソース割り当て。公平なスケジューリング。スロットル戦略。テナントの階層化:
          コンピューティング、ストレージ、帯域幅の制限。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-c620-70c6-d001-e1f2a3b4c520
        title: 'レッスン 20: マルチリージョン展開とデータ常駐'
        slug: bai-20-multi-region-deployment-data-residency
        description: >-
          マルチリージョンの SaaS デプロイメント。データ所在地の要件
          (GDPR、現地法)。テナントを最も近いリージョンにルーティングします。リージョン間のレプリケーション戦略。
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8a21-c621-70c6-d001-e1f2a3b4c521
        title: 'レッスン 21: テナントを意識した CI/CD とインフラストラクチャの自動化'
        slug: bai-21-tenant-aware-cicd-infrastructure-automation
        description: >-
          SaaS 向け CI/CD: ダウンタイムゼロの導入。 Canary はテナント グループごとにリリースします。テナント
          プロビジョニングのためのコードとしてのインフラストラクチャ。 GitOps ワークフロー。
        duration_minutes: 90
        is_free: true
        sort_order: 21
        video_url: null
  - id: section-07
    title: 'パート 7: 制作とケーススタディ'
    description: 'テナント対応のモニタリング: テナントごとのメトリクス、ログ、トレース'
    sort_order: 7
    lessons:
      - id: 019d8a21-c622-70c6-d001-e1f2a3b4c522
        title: 'レッスン 22: マルチテナントの可観測性と SRE'
        slug: bai-22-observability-sre-cho-multi-tenant
        description: >-
          テナント対応のモニタリング: テナントごとのメトリクス、ログ、トレース。階層ごとの
          SLI/SLO。コストの帰属。テナントの健全性ダッシュボード。インシデント管理。
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-c623-70c6-d001-e1f2a3b4c523
        title: 'レッスン 23: SaaS のセキュリティ アーキテクチャ'
        slug: bai-23-security-architecture-cho-saas
        description: 'SaaS セキュリティ: テナント データの暗号化、テナントごとのキー管理。脆弱性管理。侵入テスト。 SOC 2、ISO 27001 準拠。'
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-c624-70c6-d001-e1f2a3b4c524
        title: 'レッスン 24: 管理ポータルとセルフサービス操作'
        slug: bai-24-admin-portal-self-service-operations
        description: >-
          スーパー管理者ポータル: テナント管理、使用状況の監視。テナント管理ポータル:
          ユーザー管理、設定、請求。セルフサービスのトラブルシューティング。
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-c625-70c6-d001-e1f2a3b4c525
        title: 'レッスン 25: ケーススタディ - Slack、Notion、Atlassian、Linear'
        slug: bai-25-case-studies-slack-notion-atlassian-linear
        description: >-
          実践的な SaaS アーキテクチャ分析: Slack (エンタープライズ グレード)、Notion (コラボレーション)、Atlassian
          (マーケットプレイス)、Linear (パフォーマンス第一)。教訓。
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
locale: ja
---

