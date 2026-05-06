---
id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
title: マイクロサービスとマイクロ フロントエンドのシステム設計 — 基本から運用まで
slug: thiet-ke-he-thong-microservices-micro-frontend
description: >-
  マイクロサービス バックエンドとマイクロ フロントエンドを使用したフルスタック
  システム設計に関する包括的なシリーズ。ドメイン駆動設計を使用したシステム分離の考え方、API 設計 (REST、GraphQL、gRPC)、データ
  アーキテクチャ (Saga、CQRS、イベント ソーシング) から、マイクロ フロントエンド アーキテクチャ (モジュール フェデレーション、シェル
  アプリ、デザイン システム)、BFF パターン、API ゲートウェイ、テスト戦略、CI/CD パイプライン、可観測性フルスタック、実稼働準備状況まで。 E
  コマース プラットフォームを構築する実践的なケース スタディと Monolith からの移行手順が含まれています。テクノロジーアップデート 2026。
featured_image: uploads/2026/04/microservices-micro-frontend-series-banner-2026.png
level: intermediate
duration_hours: 90
lesson_count: 30
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-04-03T10:00:00.000000Z'
created_at: '2026-04-03T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019d8a21-b200-7001-c001-a1b2c3d4e5f6
  name: システムアーキテクチャ
  slug: kien-truc-he-thong
tags:
  - name: microservices
    slug: microservices
  - name: micro-frontend
    slug: micro-frontend
  - name: system-design
    slug: system-design
  - name: module-federation
    slug: module-federation
  - name: DDD
    slug: ddd
  - name: API Gateway
    slug: api-gateway
  - name: GraphQL
    slug: graphql
  - name: BFF
    slug: bff
  - name: CQRS
    slug: cqrs
  - name: event-driven
    slug: event-driven
  - name: design-system
    slug: design-system
  - name: CI/CD
    slug: cicd
  - name: testing
    slug: testing
  - name: observability
    slug: observability
  - name: production
    slug: production
sections:
  - id: section-01
    title: 'パート 1: 基礎 — アーキテクチャの進化'
    description: >-
      モノリスからマイクロサービスとマイクロ フロントエンド、マスター DDD、および全体的なフルスタック
      アーキテクチャへのアーキテクチャ進化のパスを理解します。
    sort_order: 1
    lessons:
      - id: 019e4a33-d401-7b20-c001-b1c2d3e4f501
        title: 'レッスン 1: モノリスからマイクロサービスおよびマイクロ フロントエンドへ — アーキテクチャの進化のロードマップ'
        slug: bai-1-tu-monolith-den-microservices-micro-frontend-lo-trinh-tien-hoa
        description: >-
          モノリスがボトルネックになった理由、マイクロサービスへの進化の旅、そしてフロントエンドも分離する必要がある理由を理解します。モノリス、SOA、マイクロサービス、マイクロ
          フロントエンドを比較します。変換を開始する時期。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e4a33-d402-7b20-c001-b1c2d3e4f502
        title: 'レッスン 2: ドメイン駆動設計 — システム分離の考え方'
        slug: bai-2-domain-driven-design-tu-duy-phan-tach-he-thong
        description: >-
          DDD プラットフォーム: ユビキタス言語、境界コンテキスト、集約、ドメイン イベント。イベント
          ストーミングを使用してドメインを検出する方法。戦略的 DDD と戦術的 DDD およびマイクロサービスおよびマイクロ
          フロントエンド部門へのアプリケーション。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e4a33-d403-7b20-c001-b1c2d3e4f503
        title: 'レッスン 3: フルスタックのアーキテクチャの概要 — マイクロサービス + マイクロ フロントエンド + BFF'
        slug: bai-3-kien-truc-tong-quan-full-stack-microservices-micro-frontend-bff
        description: >-
          包括的なアーキテクチャ ブループリント: フロントエンド (マイクロ フロントエンド シェル + リモート アプリ)、BFF
          レイヤー、API ゲートウェイ、バックエンド マイクロサービス、メッセージ
          ブローカー、サービスごとのデータベース。エンドツーエンドのリクエスト フローと主要な統合ポイント。
        duration_minutes: 75
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'パート 2: マイクロサービス バックエンドの設計'
    description: サービスの分解、API 設計パターン、マイクロサービス間の通信パターン。
    sort_order: 2
    lessons:
      - id: 019e4a33-d404-7b20-c001-b1c2d3e4f504
        title: 'レッスン 4: サービスの分解 — 境界のあるコンテキストとサービスの境界'
        slug: bai-4-service-decomposition-bounded-context-service-boundaries
        description: >-
          境界コンテキストに基づくサービス分離方式。サービス境界を適切に定義し、分散モノリスを避けます。サブドメインごとの分解とビジネス機能戦略ごとの分解。コンテキスト
          マッピング パターン。
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e4a33-d405-7b20-c001-b1c2d3e4f505
        title: 'レッスン 5: API 設計マスタークラス — REST、GraphQL、gRPC'
        slug: bai-5-api-design-masterclass-rest-graphql-grpc
        description: >-
          REST、GraphQL、gRPC の詳細な比較: ユースケース、パフォーマンス、トレードオフ。 RESTful API のベスト
          プラクティス、GraphQL スキーマ設計、プロトコル バッファーを使用した gRPC。 API のバージョン管理戦略と下位互換性。
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019e4a33-d406-7b20-c001-b1c2d3e4f506
        title: 'レッスン 6: サービス間通信 — 同期、非同期、およびイベント駆動型'
        slug: bai-6-inter-service-communication-sync-async-event-driven
        description: >-
          同期 (HTTP、gRPC) 通信と非同期 (メッセージ キュー、イベント ストリーミング)
          通信。リクエスト-返信、パブリッシュ-サブスクライブ、イベント通知パターン。 RabbitMQ を使用するか、Kafka
          を使用するか、NATS を使用するか。モノリスアンチパターンの配布は避けてください。
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
  - id: section-03
    title: 'パート 3: マイクロサービスのデータ アーキテクチャ'
    description: サービスごとのデータベース、Saga パターン、CQRS、およびイベント ソーシング - 分散データ管理。
    sort_order: 3
    lessons:
      - id: 019e4a33-d407-7b20-c001-b1c2d3e4f507
        title: 'レッスン 7: サービスごとのデータベースと多言語の永続性'
        slug: bai-7-database-per-service-polyglot-persistence
        description: >-
          各サービスに独自のデータベースが必要なのはなぜですか?適切なデータベースを選択するための戦略:
          PostgreSQL、MongoDB、Redis、Elasticsearch。共有データベースのアンチパターン。データの分離、スキーマの所有権、および移行戦略。
        duration_minutes: 75
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e4a33-d408-7b20-c001-b1c2d3e4f508
        title: 'レッスン 8: Saga パターンと分散トランザクション'
        slug: bai-8-saga-pattern-distributed-transactions
        description: >-
          ACID がマイクロサービスで機能しないのはなぜですか。サーガパターン: 振り付け vs
          オーケストレーション。トランザクション、冪等性、エラー処理の補償。実践例: 注文→支払い→在庫→発送のワークフロー。
        duration_minutes: 90
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e4a33-d409-7b20-c001-b1c2d3e4f509
        title: 'レッスン 9: イベント ソーシングと CQRS — いつ必要で、いつ必要でしょうか?'
        slug: bai-9-event-sourcing-cqrs-khi-nao-can-khi-nao-khong
        description: >-
          イベント ソーシング: 状態の代わりにイベントを保存します。 CQRS: 個別の読み取り/書き込みモデル。イベント ソーシングと CQRS
          を組み合わせます。トレードオフ、複雑さ、意思決定の枠組み。 CQRS が複雑すぎるのはどのような場合でしょうか。また、CQRS
          が本当に必要なのはどのような場合でしょうか?
        duration_minutes: 75
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-04
    title: 'パート 4: マイクロ フロントエンド — アーキテクチャと原則'
    description: マイクロ フロントエンドの概要、統合戦略、モジュール フェデレーション、および Web コンポーネント。
    sort_order: 4
    lessons:
      - id: 019e4a33-d410-7b20-c001-b1c2d3e4f510
        title: 'レッスン 10: マイクロ フロントエンドとは何ですか? — 利点、トレードオフ、意思決定の枠組み'
        slug: bai-10-micro-frontend-la-gi-loi-ich-trade-offs-decision-framework
        description: >-
          マイクロ フロントエンドの定義、モノリシック フロントエンドとの比較。 5つの基本原則。利点:
          独立した導入、チームの自律性、増分アップグレード。トレードオフ: ペイロード サイズ、複雑さ、一貫性。意思決定フレームワーク: Micro
          Frontend をいつ使用するか、いつ使用しないのか。
        duration_minutes: 75
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e4a33-d411-7b20-c001-b1c2d3e4f511
        title: 'レッスン 11: マイクロ フロントエンド統合戦略 — サーバーサイド、ビルドタイム、ランタイム'
        slug: bai-11-chien-luoc-tich-hop-server-side-build-time-runtime
        description: >-
          5 つの統合方法: サーバー側構成 (SSI/ESI)、ビルド時統合、iframe 経由のランタイム、JavaScript
          経由のランタイム、Web コンポーネント経由のランタイム。トレードオフ、パフォーマンス、分離性を比較します。人気のあるフレームワーク:
          シングルスパ、qiankun、Luigi、Piral。
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e4a33-d412-7b20-c001-b1c2d3e4f512
        title: 'レッスン 12: モジュール フェデレーション — Webpack 5 および Vite フェデレーション ランタイム モジュールの共有'
        slug: bai-12-module-federation-webpack-vite-runtime-module-sharing
        description: >-
          モジュールフェデレーション: 実行時にアプリケーション間でモジュールを共有する方法。 Webpack 5 モジュール
          フェデレーションの詳細: リモート、ホスト、共有モジュール。
          Viteプラグインフェデレーション。共有の依存関係、バージョンの競合、およびフォールバック戦略を処理します。 React/Vue
          を使用した実践的なセットアップ。
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-05
    title: 'パート 5: 実用的なマイクロ フロントエンドの構築'
    description: マイクロ フロントエンド用のシェル アプリケーション、状態管理、設計システム、および SSO をハンズオンで構築します。
    sort_order: 5
    lessons:
      - id: 019e4a33-d413-7b20-c001-b1c2d3e4f513
        title: 'レッスン 13: シェル アプリケーション — ルーティング、レイアウト、オーケストレーション'
        slug: bai-13-shell-application-routing-layout-orchestration
        description: >-
          コンテナ/シェル アプリの構築: マイクロ
          フロントエンドのレイアウト、ナビゲーション、ライフサイクルを管理します。動的ルーティング、遅延読み込みマイクロ
          フロントエンド。エラー境界とフォールバック UI。 404 処理、ディープリンク、ブラウザ履歴管理。
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e4a33-d414-7b20-c001-b1c2d3e4f514
        title: 'レッスン 14: 状態管理とアプリ間通信'
        slug: bai-14-state-management-cross-app-communication
        description: >-
          マイクロ フロントエンドの状態管理: ローカル状態と共有状態。カスタム イベント、Props/コールバック、URL
          ベースの通信。状態共有ソリューション: Zustand、イベント バス、カスタム イベント API。原則:
          アプリ間の状態を最小限に抑え、イベント駆動を優先します。
        duration_minutes: 75
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e4a33-d415-7b20-c001-b1c2d3e4f515
        title: 'レッスン 15: デザイン システムと CSS の分離 — クロスチームでの均一な UI'
        slug: bai-15-design-system-css-isolation-dong-nhat-ui
        description: >-
          マイクロ フロントエンド用の共有デザイン システムの構築: コンポーネント ライブラリ、デザイン トークン、タイポグラフィ、カラー
          パレット。 CSS 分離: Shadow DOM、CSS モジュール、CSS-in-JS、BEM
          命名規則。バージョニング設計システム、段階的なロールアウト。
        duration_minutes: 75
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019e4a33-d416-7b20-c001-b1c2d3e4f516
        title: 'レッスン 16: マイクロ フロントエンド間のシングル サインオンとトークン共有'
        slug: bai-16-single-sign-on-token-sharing-giua-micro-frontends
        description: >-
          Micro Frontend の認証フロー: シェル アプリでの集中認証。トークン管理: メモリ内の JWT と Cookie ベース。
          Keycloak/Auth0 との SSO 統合。マイクロ フロントエンド間でのトークンの更新、セッションの同期、およびログアウトの同期。
        duration_minutes: 75
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-06
    title: 'パート 6: API ゲートウェイと BFF レイヤー'
    description: フロントエンド パターン、API ゲートウェイ構成、および GraphQL フェデレーションのバックエンド。
    sort_order: 6
    lessons:
      - id: 019e4a33-d417-7b20-c001-b1c2d3e4f517
        title: 'レッスン 17: BFF パターン — マイクロ フロントエンドとマイクロサービスの接続'
        slug: bai-17-bff-pattern-ket-noi-micro-frontend-voi-microservices
        description: >-
          フロントエンドのためのバックエンド: なぜ BFF が必要なのでしょうか。各フロントエンド マイクには独自の BFF があります。 BFF
          集約、データ変換、キャッシュ。 Node.js/Go との親友。トレードオフ: フロントエンドごとの BFF と共有
          BFF。アンチパターンは避けるべきです。
        duration_minutes: 75
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019e4a33-d418-7b20-c001-b1c2d3e4f518
        title: 'レッスン 18: API ゲートウェイ — ルーティング、認証、レート制限、ロード バランシング'
        slug: bai-18-api-gateway-routing-auth-rate-limiting
        description: >-
          API ゲートウェイ パターン: ルーティング、認証、レート制限、リクエスト/レスポンス変換。 Kong、APISIX、Envoy
          ゲートウェイ、AWS API ゲートウェイを比較します。本番構成: ヘルスチェック、サーキットブレーカー、カナリアルーティング。 API
          ゲートウェイとサービス メッシュ — いつ何を使用するか。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019e4a33-d419-7b20-c001-b1c2d3e4f519
        title: 'レッスン 19: GraphQL フェデレーション — マイクロ フロントエンドの統合データ レイヤー'
        slug: bai-19-graphql-federation-unified-data-layer
        description: >-
          アポロ連合: スーパーグラフ、サブグラフ、ルーター。各マイクロサービスはサブグラフを公開し、フェデレーション
          ゲートウェイはそれを統合スキーマに構成します。エンティティ参照、@key ディレクティブ、およびサービス間の関係。パフォーマンス:
          データローダー、キャッシュ、永続化クエリ。
        duration_minutes: 90
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-07
    title: 'パート 7: フルスタック マイクロサービスとマイクロ フロントエンドのテスト'
    description: '包括的なテスト戦略: バックエンドとフロントエンドの両方に対する単体テスト、統合テスト、契約テスト、E2E。'
    sort_order: 7
    lessons:
      - id: 019e4a33-d420-7b20-c001-b1c2d3e4f520
        title: 'レッスン 20: マイクロサービスのテスト — 単体、統合、およびサービス コンポーネントのテスト'
        slug: bai-20-testing-microservices-unit-integration-component
        description: >-
          マイクロサービスのピラミッドをテストします。外部依存関係をモックした単体テスト。 Testcontainer を使用した統合テスト。サービス
          コンポーネント テスト: サービス全体を分離してテストします。基本的なコントラクト テスト API。
        duration_minutes: 75
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019e4a33-d421-7b20-c001-b1c2d3e4f521
        title: 'レッスン 21: マイクロ フロントエンドのテスト — コンポーネント、ビジュアル リグレッション、E2E'
        slug: bai-21-testing-micro-frontend-component-visual-e2e
        description: >-
          マイクロ フロントエンドのテスト戦略: コンポーネント テスト (React Testing Library、Vue Test
          Utils)、Visual Regression (Chromatic、Percy)、E2E テスト
          (Playwright、Cypress)。マイクロ
          フロントエンドを単独でテストするか、統合テストを行うか。クロスアプリのユーザージャーニーテスト。
        duration_minutes: 75
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019e4a33-d422-7b20-c001-b1c2d3e4f522
        title: 'レッスン 22: 消費者主導の契約 — API と UI の統合に関する協定'
        slug: bai-22-consumer-driven-contracts-pact-api-ui
        description: >-
          Pact による消費者主導の契約テスト: 統合テストだけでは不十分な理由。プロバイダーの検証、消費者の期待。 REST
          API、GraphQL、およびメッセージベースの通信のための協定。マイクロ フロントエンドのコントラクト テスト: シェル アプリとリモート
          アプリの間のインターフェイス コントラクトを検証します。
        duration_minutes: 75
        is_free: true
        sort_order: 22
        video_url: null
  - id: section-08
    title: 'パート 8: CI/CD および導入戦略'
    description: コード管理、CI/CD パイプライン、マイクロサービスとマイクロ フロントエンドの展開戦略。
    sort_order: 8
    lessons:
      - id: 019e4a33-d423-7b20-c001-b1c2d3e4f523
        title: 'レッスン 23: モノリポジトリとマルチリポジトリ — コード管理戦略'
        slug: bai-23-mono-repo-vs-multi-repo-chien-luoc-quan-ly-code
        description: >-
          マイクロサービスとマイクロ フロントエンドのモノリポジトリ、マルチリポジトリ、ハイブリッドを比較します。ツール:
          Nx、Turborepo、Lerna。 Micro Frontend のモノリポジトリ:
          共有ビルド、一貫したバージョン管理。マイクロサービスのマルチリポジトリ: チームの自律性。 Git
          ワークフロー、コードの所有権、依存関係の管理。
        duration_minutes: 75
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019e4a33-d424-7b20-c001-b1c2d3e4f524
        title: 'レッスン 24: CI/CD パイプライン — 個別に構築、テスト、デプロイする'
        slug: bai-24-cicd-pipeline-build-test-deploy-independently
        description: >-
          マイクロサービス + マイクロ フロントエンド システムの CI/CD パイプラインを設計します。各サービス/マイクロ
          フロントエンドの独立したビルドとデプロイ。 GitHub Actions / GitLab CI パイプライン
          テンプレート。自動化されたテストゲート、セキュリティスキャン、コンテナイメージのビルドとプッシュ。 ArgoCD を使用した GitOps。
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019e4a33-d425-7b20-c001-b1c2d3e4f525
        title: 'レッスン 25: 導入戦略 — カナリア、ブルーグリーン、および機能フラグ'
        slug: bai-25-deployment-strategies-canary-blue-green-feature-flags
        description: >-
          マイクロサービスの導入戦略: ローリング アップデート、Blue-Green、カナリア リリース。 Micro Frontend
          の独立したデプロイメント: CDN ベースのデプロイメント、バージョン管理されたバンドル、動的な
          RemoteEntry.js。安全な機能ロールアウトのための LaunchDarkly/Unleash による機能フラグ。ロールバック戦略。
        duration_minutes: 75
        is_free: true
        sort_order: 25
        video_url: null
  - id: section-09
    title: 'パート 9: 可観測性と実稼働の準備状況'
    description: フルスタックの可観測性、パフォーマンスの最適化、実稼働準備チェックリスト。
    sort_order: 9
    lessons:
      - id: 019e4a33-d426-7b20-c001-b1c2d3e4f526
        title: 'レッスン 26: フルスタックの可観測性 — フロントエンドからバックエンドまでのトレース'
        slug: bai-26-full-stack-observability-tracing-frontend-den-backend
        description: >-
          包括的な可観測性: フロントエンド監視 (Web Vitals、エラー追跡)、API ゲートウェイ
          ロギング、バックエンド分散トレース。フロントエンド (ブラウザ SDK) とバックエンドの両方に
          OpenTelemetry。リクエストチェーン全体の相関ID。 Grafana ダッシュボード、本番環境への警告。
        duration_minutes: 90
        is_free: true
        sort_order: 26
        video_url: null
      - id: 019e4a33-d427-7b20-c001-b1c2d3e4f527
        title: 'レッスン 27: パフォーマンスの最適化 — バンドル サイズ、キャッシュ、CDN'
        slug: bai-27-performance-optimization-bundle-caching-cdn
        description: >-
          マイクロ フロントエンドの最適化: 共有依存関係の抽出、ツリー シェーキング、動的インポート、遅延読み込み。 CDN 導入戦略:
          キャッシュ無効化、不変資産。バックエンドのパフォーマンス: 接続プーリング、N+1 クエリ、応答圧縮。コア Web Vitals
          モニタリング。
        duration_minutes: 75
        is_free: true
        sort_order: 27
        video_url: null
      - id: 019e4a33-d428-7b20-c001-b1c2d3e4f528
        title: 'レッスン 28: 本番準備チェックリスト — システムを本番環境に導入する'
        slug: bai-28-production-readiness-checklist
        description: >-
          稼働前の包括的なチェックリスト: セキュリティのレビュー、負荷テスト、カオス エンジニアリング、災害復旧計画、ランブック、オンコール
          ローテーション。アーキテクチャ決定記録 (ADR)。キャパシティプランニング、コストの最適化、チーム構造と所有権モデル。
        duration_minutes: 75
        is_free: true
        sort_order: 28
        video_url: null
  - id: section-10
    title: 'パート 10: ケーススタディと移行'
    description: Eコマースプラットフォーム構築の実践的なケーススタディとMonolithからの移行手順。
    sort_order: 10
    lessons:
      - id: 019e4a33-d429-7b20-c001-b1c2d3e4f529
        title: 'レッスン 29: ケーススタディ — フルスタックの電子商取引プラットフォームの構築'
        slug: bai-29-case-study-xay-dung-ecommerce-platform-full-stack
        description: >-
          完全な電子商取引システムを設計します: 製品カタログ、ショッピング カート、注文管理、支払い、ユーザー プロファイル — 各ドメインは 1
          つのマイクロサービス + 1 つのマイクロ フロントエンドです。詳細なアーキテクチャ、テクノロジの選択、データ
          フロー図、Kubernetes 上のデプロイメント アーキテクチャ。
        duration_minutes: 120
        is_free: true
        sort_order: 29
        video_url: null
      - id: 019e4a33-d430-7b20-c001-b1c2d3e4f530
        title: 'レッスン 30: 移行ガイド — モノリスからマイクロサービス + マイクロ フロントエンドへ'
        slug: bai-30-migration-guide-tu-monolith-sang-microservices-micro-frontend
        description: >-
          実践的な移行戦略: ストラングラーフィグパターン、抽象化による分岐、並列実行。フロントエンドの移行: モノリス SPA からマイクロ
          フロントエンドへ段階的に移行します。移行バックエンド: モノリスからサービスを抽出します。チーム分け、タイムライン、リスク管理。
          IKEA、Spotify、Zalando から学んだ教訓。
        duration_minutes: 90
        is_free: true
        sort_order: 30
        video_url: null
locale: ja
---

# マイクロサービス & マイクロ フロントエンド システム設計 — 基本から本番まで

## 概要

このシリーズでは、**マイクロサービス バックエンド + マイクロ フロントエンド** アーキテクチャを使用して、**ゼロから運用環境**までを導きます。これは、複数の並行開発チームを必要とする複雑なシステム向けの最新のアーキテクチャ モデルです。

バックエンドまたはフロントエンドのみに焦点を当てた他のシリーズとは異なり、このシリーズは**両方の側面**と**フルスタック アーキテクト**の観点を組み合わせており、UI からデータベースまで**エンドツーエンド** システムを設計する方法を理解するのに役立ちます。

## 何を学ぶのですか?

### 🏗️ アーキテクチャとデザイン
- **ドメイン駆動設計**を使用したシステム分離 (境界付きコンテキスト、イベント ストーミング)
- **マイクロサービス バックエンド**の設計: API 設計、サービス間通信、データ アーキテクチャ
- **マイクロ フロントエンド**の設計: モジュール フェデレーション、シェル アプリ、デザイン システム、クロスアプリ通信

### 🔗 フルスタック統合
- **BFF (フロントエンド用バックエンド)** パターン — マイクロ フロントエンドとマイクロサービスの間のブリッジ
- **API ゲートウェイ** — ルーティング、認証、レート制限、ロード バランシング
- **GraphQL Federation** — 複数のマイクロ フロントエンド用の統合データ レイヤー

### 🧪 テストと品質
- マイクロサービスのテスト: 単体テスト、統合テスト、契約テスト
- マイクロ フロントエンドのテスト: コンポーネント、ビジュアル リグレッション、E2E
- Pact による消費者主導の契約

### 🚀 CI/CD とプロダクション
- モノリポジトリとマルチリポジトリの戦略
- サービス/マイクロフロントエンドごとに独立したCI/CDパイプライン
- Canary リリース、Blue-Green デプロイメント、機能フラグ
- フルスタックの可観測性: フロントエンド → API → バックエンド トレース
- 本番準備チェックリスト

### 📋 ケーススタディ
- **電子商取引プラットフォーム**: アーキテクチャから展開までの完全な設計
- **移行ガイド**: モノリスからマイクロサービス + マイクロ フロントエンド (ストラングラー図、抽象化によるブランチ)

## 対象読者

- **バックエンド エンジニア**は、適切な API を設計するためにマイクロ フロントエンドを理解したいと考えています
- **フロントエンド エンジニア**は、Micro Frontend を使用してアプリケーションを拡張したいと考えています
- **フルスタック エンジニア**はエンドツーエンドのアーキテクチャを理解したいと考えています
- **ソフトウェア アーキテクト**は実稼働システムの青写真が必要です
- **Tech Leads** は Monolith からの移行を計画しています

## 知識が必要です

- 少なくとも 1 つのバックエンド言語 (Node.js、Go、Java、Python) を知っていること
- 少なくとも 1 つのフロントエンド フレームワーク (React、Vue、Angular) を知っている
- REST API、HTTP、Docker の基本的な理解
- **システム アーキテクチャ: ゼロからヒーローまで** シリーズは良い補足ですが、必須ではありません

## シリーズで使用されているテクノロジー

|レイヤー |テクノロジー |
|------|-----------|
| **マイクロ フロントエンド** | React、モジュール フェデレーション (Webpack 5 / Vite)、シングルスパ、Web コンポーネント |
| **デザインシステム** | Storybook、Tailwind CSS、Shadow DOM、CSS モジュール |
| **BFF / API ゲートウェイ** | Node.js、Kong/APISIX、GraphQL (Apollo Federation) |
| **バックエンド** | Node.js/Go、REST、gRPC、GraphQL |
| **メッセージ** | RabbitMQ、Apache Kafka、NATS |
| **データベース** | PostgreSQL、MongoDB、Redis、Elasticsearch |
| **CI/CD** | GitHub アクション、GitLab CI、ArgoCD、Docker、Kubernetes |
| **可観測性** | OpenTelemetry、Grafana、Prometheus、Jaeger |
| **認証** | Keycloak、OAuth2、JWT、OIDC |

## 学習パス

```
Phần 1-3: Nền tảng Backend     (9 bài)  → Hiểu mindset & thiết kế backend
Phần 4-5: Micro Frontend       (7 bài)  → Nắm vững kiến trúc & xây dựng frontend
Phần 6:   API Layer             (3 bài)  → Kết nối backend & frontend
Phần 7-8: Testing & CI/CD      (6 bài)  → Đảm bảo chất lượng & tự động hóa
Phần 9:   Production           (3 bài)  → Observability & production readiness
Phần 10:  Case Studies          (2 bài)  → Áp dụng thực tế & migration
```
