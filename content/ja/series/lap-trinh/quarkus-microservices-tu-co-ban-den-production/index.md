---
id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
title: 'Quarkus マイクロサービス: 基本から運用まで'
slug: quarkus-microservices-tu-co-ban-den-production
description: >-
  Quarkus 3.x (クラウド ネイティブと Kubernetes 向けに特別に設計された「Supersonic Subatomic」Java
  フレームワーク) を使用して完全なマイクロサービス システムを構築する実践シリーズ。 PostgreSQL
  をメインデータベースとして使用し、Keycloak を認証および認可 (OIDC) に、Apache Kafka をイベント駆動型通信に、gRPC
  を使用して高パフォーマンスのサービス間を実現します。 Dev Services を使用した最初のプロジェクトの作成から、Panache を使用した REST
  API の構築、GraalVM Native Image を使用した Kubernetes への運用環境のデプロイまで。フォールト
  トレランス、OpenTelemetry オブザーバビリティ、契約テスト、CI/CD パイプライン、実稼働準備チェックリストが含まれます。実際のプロジェクト:
  E コマース プラットフォーム システムには 5 つのマイクロサービスが含まれています。
featured_image: uploads/2026/04/quarkus-microservices-series-banner-2026.png
level: intermediate
duration_hours: 85
lesson_count: 22
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
  id: 019c9617-facb-72da-8191-e6d44b88fb3e
  name: プログラミング
  slug: lap-trinh
tags:
  - name: Quarkus
    slug: quarkus
  - name: Microservices
    slug: microservices
  - name: Java
    slug: java
  - name: PostgreSQL
    slug: postgresql
  - name: Keycloak
    slug: keycloak
  - name: Kafka
    slug: kafka
  - name: gRPC
    slug: grpc
  - name: Kubernetes
    slug: kubernetes
  - name: Docker
    slug: docker
  - name: cloud-native
    slug: cloud-native
  - name: OIDC
    slug: oidc
  - name: GraalVM
    slug: graalvm
  - name: rest-api
    slug: rest-api
  - name: DevOps
    slug: devops
sections:
  - id: section-01
    title: 'パート 1: Quarkus プラットフォームとプロジェクトのセットアップ'
    description: >-
      Quarkus — Java Cloud Native フレームワーク、開発モード、開発サービス、開発 UI について学び、REST API
      を構築し、PostgreSQL を Panache に接続します。
    sort_order: 1
    lessons:
      - id: 019e2a10-a101-7a01-b001-f1a2b3c4d501
        title: 'レッスン 1: クオークスとは何ですか? — マイクロサービス向けの超音速サブアトミック Java'
        slug: bai-1-quarkus-la-gi-supersonic-subatomic-java-cho-microservices
        description: >-
          Quarkusの概要、ビルド時間最適化アーキテクチャ、マイクロサービスのQuarkusとSpring Bootの比較、Quarkus
          Extensionsエコシステム、1秒未満の起動デモ、QuarkusがCloud Native Java 2026に最適な選択肢である理由。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019e2a10-a102-7a01-b001-f1a2b3c4d502
        title: 'レッスン 2: Quarkus プロジェクトの作成 — CLI、開発モード、開発 UI、ライブ コーディング'
        slug: bai-2-tao-quarkus-project-cli-dev-mode-dev-ui-live-coding
        description: >-
          Quarkus CLI と JDK 21+ のインストール、quarkus create
          によるプロジェクトの作成、標準プロジェクト構造、ライブ リロード付きの開発モード、開発 UI ダッシュボード、開発サービスによる
          PostgreSQL/Keycloak/Kafka の自動開始、継続的テスト。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019e2a10-a103-7a01-b001-f1a2b3c4d503
        title: 'レッスン 3: Quarkus REST — プロフェッショナルな RESTful API の構築'
        slug: bai-3-quarkus-rest-xay-dung-restful-api-chuyen-nghiep
        description: >-
          @Path、@GET、@POST を使用した Quarkus REST (Jakarta REST)、Jackson による JSON
          シリアル化、リクエスト/レスポンス フィルタリング、CORS 構成、OpenAPI および Swagger UI 自動化、API
          バージョン管理戦略。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019e2a10-a104-7a01-b001-f1a2b3c4d504
        title: 'レッスン 4: PostgreSQL と Hibernate ORM Panache — 効果的なデータ層'
        slug: bai-4-postgresql-hibernate-orm-panache-data-layer-hieu-qua
        description: >-
          PostgreSQL と Quarkus Datasource の接続、Panache との Hibernate ORM (アクティブ
          レコードとリポジトリのパターン)、エンティティ マッピング、PanacheSQL、ページネーション、ソート、HQL/ネイティブ SQL
          によるカスタム クエリ、Dev Services の自動起動 PostgreSQL コンテナ。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019e2a10-a105-7a01-b001-f1a2b3c4d505
        title: 'レッスン 5: 検証、エラー処理、構成プロファイル'
        slug: bai-5-validation-error-handling-configuration-profiles
        description: >-
          Hibernate Validator (@NotBlank、@Size、カスタム バリデーター) による Bean
          検証、統合エラー処理のための例外マッパー、構成プロファイル (dev/test/prod)、MicroProfile
          Config、環境変数、および application.properties のベスト プラクティス。
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
  - id: section-02
    title: 'パート 2: マイクロサービス アーキテクチャの設計'
    description: 電子商取引システム向けのモノリスの分析、サービスごとのデータベース、イベント駆動型アーキテクチャ、API ゲートウェイの設計
    sort_order: 2
    lessons:
      - id: 019e2a10-a106-7a01-b001-f1a2b3c4d506
        title: 'レッスン 6: モノリスをマイクロサービスに分解する — DDD と境界付きコンテキスト'
        slug: bai-6-phan-tach-monolith-sang-microservices-ddd-bounded-context
        description: >-
          電子商取引に適用されるドメイン駆動設計 (DDD): 境界付きコンテキスト
          (製品、注文、支払い、ユーザー、通知)、集約ルート、エンティティ対値オブジェクト、ストラングラー フィグ
          パターン戦略、およびマルチモジュール Quarkus プロジェクト設計の定義。
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019e2a10-a107-7a01-b001-f1a2b3c4d507
        title: 'レッスン 7: サービスごとのデータベース — Flyway の移行とマルチデータソース'
        slug: bai-7-database-per-service-flyway-migration-multi-datasource
        description: >-
          サービスごとのデータベースの原則、各マイクロサービスのスキーマ設計、Flyway データベースの移行 (バージョン管理 +
          反復可能)、Quarkus マルチデータソース構成、データ分離戦略、およびサービス間のデータ クエリ パターン。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019e2a10-a108-7a01-b001-f1a2b3c4d508
        title: 'レッスン 8: 製品サービスと注文サービスの構築'
        slug: bai-8-xay-dung-product-service-order-service
        description: >-
          最初の 2 つのマイクロサービス、Product Catalog Service (CRUD、検索、カテゴリ、在庫) と Order
          Service (注文ライフサイクル、ステート マシン、注文品目) をハンズオンで構築しました。それぞれに独自のデータベース、Panache
          エンティティ、完全な REST API、OpenAPI ドキュメントが含まれています。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019e2a10-a109-7a01-b001-f1a2b3c4d509
        title: 'レッスン 9: 支払いサービスと通知サービスを構築する'
        slug: bai-9-xay-dung-payment-service-notification-service
        description: >-
          支払いサービス (支払い処理、トランザクション ログ、返金ワークフロー、冪等キー) と通知サービス (電子メール/SMS
          テンプレート、通知キュー、配信追跡) を構築し、電子メール用の Qute テンプレート エンジンと Quarkus Mailer
          拡張機能を統合します。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
  - id: section-03
    title: 'パート 3: Keycloak と OIDC によるセキュリティ'
    description: Keycloakをアイデンティティプロバイダー、OIDCベアラートークン認証、RBAC認可、Keycloak管理クライアントとして統合
    sort_order: 3
    lessons:
      - id: 019e2a10-a110-7a01-b001-f1a2b3c4d510
        title: 'レッスン 10: Keycloak のセットアップ — マイクロサービスのレルム、クライアント、ユーザーおよびロール'
        slug: bai-10-keycloak-setup-realm-client-users-roles-cho-microservices
        description: >-
          Dev Services を使用して Keycloak をインストールし
          (コンテナーを自動的に開始)、電子商取引用のレルムを作成し、各マイクロサービスにクライアントを登録し、ロール
          (管理者、顧客、販売者)、ユーザー属性を定義し、再現可能なセットアップのためにレルム構成をエクスポートします。
        duration_minutes: 90
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019e2a10-a111-7a01-b001-f1a2b3c4d511
        title: 'レッスン 11: Quarkus を使用した OIDC ベアラー トークン認証'
        slug: bai-11-oidc-bearer-token-authentication-voi-quarkus
        description: >-
          Quarkus OIDC 拡張構成、ベアラー トークン検証ワークフロー、JWT クレーム抽出
          (@Claim、SecurityIdentity)、@RolesAllowed
          アノテーション、@Authenticated、サービス間のトークン伝播、Dev Services 自動構成 Keycloak、および
          @TestSecurity によるセキュリティ テスト。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019e2a10-a112-7a01-b001-f1a2b3c4d512
        title: 'レッスン 12: 高度な認可 — RBAC、リソースベース、および Keycloak 管理クライアント'
        slug: >-
          bai-12-authorization-nang-cao-rbac-resource-based-keycloak-admin-client
        description: >-
          Keycloak認可サービスによるきめ細かい認可、リソースベースの権限、スコープベースのポリシー、@PermissionsAllowed、Keycloak管理クライアントAPI（ユーザー/ロールをプログラムで管理）、マルチテナントセキュリティパターン、トークンイントロスペクションとJWT検証。
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'パート 4: サービス間通信'
    description: REST クライアント、高性能 gRPC、マイクロサービス間の通信用の Apache Kafka イベント駆動型
    sort_order: 4
    lessons:
      - id: 019e2a10-a113-7a01-b001-f1a2b3c4d513
        title: 'レッスン 13: REST クライアント — サービス間通信'
        slug: bai-13-rest-client-service-to-service-communication
        description: >-
          Quarkus REST クライアント
          (@RegisterRestClient、@RestClient)、宣言型クライアントとプログラム型クライアント、タイムアウトと再試行構成、OIDC
          トークン伝播フィルター、SmallRye Stork サービス検出、クライアント側のロード
          バランシング、およびサービス間呼び出しのエラー処理。
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019e2a10-a114-7a01-b001-f1a2b3c4d514
        title: 'レッスン 14: Quarkus を使用した gRPC — 高性能のサービス間通信'
        slug: bai-14-grpc-voi-quarkus-high-performance-inter-service-communication
        description: >-
          Protobuf スキーマ設計、Quarkus gRPC 拡張機能 (コード生成、サービス実装)、gRPC クライアント
          インジェクション、双方向ストリーミング、gRPC と REST のパフォーマンス比較、ブラウザ クライアント用の
          gRPC-Web、ステータス コードによるエラー処理、および gRPC を介したヘルス チェック。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019e2a10-a115-7a01-b001-f1a2b3c4d515
        title: 'レッスン 15: Apache Kafka と SmallRye リアクティブ メッセージング — イベント駆動型アーキテクチャ'
        slug: >-
          bai-15-apache-kafka-smallrye-reactive-messaging-event-driven-architecture
        description: >-
          イベント駆動型アーキテクチャ パターン (イベント通知、イベント搬送状態転送)、Kafka の基礎
          (トピック、パーティション、コンシューマー グループ)、SmallRye リアクティブ メッセージング
          (@Incoming、@Outcoming、@Channel)、Kafka Dev Services、Avro シリアル化、送信ボックス
          パターンの実装、デッド レター キュー、および 1 回限りのセマンティクス。
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-05
    title: 'パート 5: 回復力と可観測性'
    description: フォールト トレランス パターン、OpenTelemetry 分散トレーシング、Micrometer メトリクス、集中ログ
    sort_order: 5
    lessons:
      - id: 019e2a10-a116-7a01-b001-f1a2b3c4d516
        title: 'レッスン 16: SmallRye フォールト トレランス — サーキット ブレーカー、リトライ、フォールバック'
        slug: bai-16-smallrye-fault-tolerance-circuit-breaker-retry-fallback
        description: >-
          MicroProfile フォールト トレランス アノテーション
          (@Retry、@CircuitBreaker、@Timeout、@Fallback、@Bulkhead、@RateLimit)、構成パラメーター、プログラム
          API、メトリクスの統合、フォールト トレランス動作のテスト、およびマイクロサービスのカスケード障害防止戦略。
        duration_minutes: 90
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019e2a10-a117-7a01-b001-f1a2b3c4d517
        title: 'レッスン 17: 可観測性 — OpenTelemetry、メトリクス、集中ログ'
        slug: bai-17-observability-opentelemetry-metrics-centralized-logging
        description: >-
          OpenTelemetry トレース (自動インストルメンテーション、カスタム スパン、コンテキスト伝播)、Micrometer メトリクス
          (カスタム カウンター、タイマー、ゲージ、Prometheus エンドポイント)、構造化ログ (JSON 形式、MDC、traceId
          相関)、Grafana OTel LGTM Dev Services (Grafana + Loki + Tempo + Mimir
          オールインワン)、ダッシュボードのデザインとアラート。
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019e2a10-a118-7a01-b001-f1a2b3c4d518
        title: 'レッスン 18: Redis、ヘルスチェック、API ゲートウェイを使用したキャッシュ'
        slug: bai-18-caching-voi-redis-health-checks-api-gateway
        description: >-
          @CacheResult によるアプリケーション キャッシュ (Redis/Infinispan
          バックエンド)、キャッシュ無効化戦略、SmallRye Health
          (活性、準備状況、起動プローブ)、データベース/Kafka/Keycloak 接続のカスタム ヘルス チェック、Nginx/Kong による
          API ゲートウェイ パターン、レート制限、リクエスト ルーティング。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 'パート 6: テストと品質保証'
    description: マイクロサービスのテスト戦略 - 単体テスト、統合テスト、契約テスト、およびテストコンテナ
    sort_order: 6
    lessons:
      - id: 019e2a10-a119-7a01-b001-f1a2b3c4d519
        title: 'レッスン 19: マイクロサービスのテスト — @QuarkusTest、テストコンテナーおよび開発サービス'
        slug: bai-19-testing-microservices-quarkustest-testcontainers-dev-services
        description: >-
          @QuarkusTest および @QuarkusIntegrationTest、JUnit 5 統合、テストでの CDI
          インジェクション、API テスト用の REST Assured、テスト データベース用の Dev Services
          (PostgreSQL、Kafka、Keycloak 自動起動)、カスタム シナリオ用のテストコンテナ、@InjectMock
          によるモック、継続的テスト モード、および JaCoCo によるテスト カバレッジ。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019e2a10-a120-7a01-b001-f1a2b3c4d520
        title: 'レッスン 20: 契約テストと統合テスト戦略'
        slug: bai-20-contract-testing-integration-testing-strategies
        description: >-
          Pact を使用した消費者主導の契約テスト、プロバイダーの検証、契約共有のための Pact Broker、セキュリティ テストのための
          @TestSecurity、カスタム テスト ライフサイクルのための @QuarkusTestResource、外部サービス モックのための
          WireMock、Kafka コンシューマー/プロデューサーのテスト、およびマイクロサービスのためのテスト戦略ピラミッド。
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-07
    title: 'パート 7: 導入と運用の準備'
    description: コンテナ イメージのビルド、GraalVM ネイティブ イメージ、Kubernetes デプロイ、CI/CD パイプライン、および本番環境の強化
    sort_order: 7
    lessons:
      - id: 019e2a10-a121-7a01-b001-f1a2b3c4d521
        title: 'レッスン 21: コンテナ イメージと GraalVM ネイティブ実行可能ファイル'
        slug: bai-21-container-image-graalvm-native-executable
        description: >-
          Quarkus Container Image 拡張機能 (Jib、Docker、Buildpack)、マルチステージ Dockerfile
          最適化、GraalVM ネイティブ イメージ ビルド (リフレクション構成、リソース インクルード、トラブルシューティング)、JVM
          とネイティブのパフォーマンス比較 (起動時間、メモリ、スループット)、Project Leyden による AOT キャッシュ (JDK
          24+)、ローカル開発環境用の Docker Compose。
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019e2a10-a122-7a01-b001-f1a2b3c4d522
        title: 'レッスン 22: Kubernetes のデプロイメント、CI/CD パイプライン、本番環境の準備'
        slug: bai-22-kubernetes-deployment-cicd-pipeline-production-readiness
        description: >-
          Quarkus Kubernetes 拡張機能 (デプロイ、サービス、Ingress の自動生成)、Helm
          チャートのパッケージ化、ConfigMap とシークレットの管理、GitHub アクションを使用した CI/CD (ビルド → テスト →
          ネイティブ イメージ → プッシュ → デプロイ)、ArgoCD を使用した GitOps、水平ポッド
          オートスケーラー、リソース制限、グレースフル シャットダウン、実稼働準備チェックリスト、および E-Commerce
          Microservices Platform プロジェクトの概要。
        duration_minutes: 150
        is_free: true
        sort_order: 22
        video_url: null
locale: ja
---

