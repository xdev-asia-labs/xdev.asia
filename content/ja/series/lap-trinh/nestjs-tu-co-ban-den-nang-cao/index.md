---
id: 019d8b40-a100-7001-b001-nestjs000001
title: 'NestJS: 基本から高度まで'
slug: nestjs-tu-co-ban-den-nang-cao
description: >-
  NestJS コースは基本から上級まで包括的であり、バックエンド用の最新の Node.js フレームワークを習得するのに役立ちます。
  TypeScript、Dependency
  Injection、モジュール、コントローラー、プロバイダー、TypeORM、Prisma、認証、承認、ガード、インターセプター、パイプ、WebSocket、GraphQL、マイクロサービス、テスト、Docker、運用環境のデプロイメントが含まれます。
  NestJS 11+ および最新の 2026 年のベスト プラクティスに従って更新されました。
featured_image: uploads/2026/03/nestjs-banner-v2.png
level: beginner
duration_hours: 80
lesson_count: 20
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-30T12:00:00.000000Z'
created_at: '2026-03-30T12:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-facb-72da-8191-e6d44b88fb3e
  name: プログラミング
  slug: lap-trinh
tags:
  - name: NestJS
    slug: nestjs
  - name: Node.js
    slug: nodejs
  - name: TypeScript
    slug: typescript
  - name: Backend
    slug: backend
  - name: rest-api
    slug: rest-api
  - name: Microservices
    slug: microservices
  - name: GraphQL
    slug: graphql
  - name: WebSocket
    slug: websocket
  - name: TypeORM
    slug: typeorm
  - name: Prisma
    slug: prisma
  - name: Docker
    slug: docker
  - name: Testing
    slug: testing
  - name: JWT
    slug: jwt
  - name: RBAC
    slug: rbac
sections:
  - id: section-01
    title: 'パート 1: NestJS プラットフォーム'
    description: NestJS、アーキテクチャ、TypeScript について理解し、最初の REST API を構築します
    sort_order: 1
    lessons:
      - id: 019d8b40-a101-7001-b001-nestjs000101
        title: 'レッスン 1: NestJS の紹介 - なぜ NestJS を選ぶのですか?'
        slug: bai-1-gioi-thieu-nestjs-tai-sao-chon-nestjs
        description: >-
          NestJS が何であるかを確認し、Express、Fastify、Koa
          と比較してください。モジュールベースのアーキテクチャ、依存関係の注入、TypeScript ファースト。エコシステムと実際の使用例。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-a102-7001-b001-nestjs000102
        title: 'レッスン 2: NestJS の TypeScript の基礎'
        slug: bai-2-typescript-essentials-cho-nestjs
        description: >-
          NestJS の重要な TypeScript (デコレータ、ジェネリック、インターフェイス、列挙型、タイプ ガード、ユーティリティ タイプ)
          を確認します。 NestJS プロジェクトの tsconfig.json を構成します。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-a103-7001-b001-nestjs000103
        title: 'レッスン 3: NestJS プロジェクトのインストールと初期化'
        slug: bai-3-cai-dat-va-khoi-tao-nestjs-project
        description: >-
          NestJS CLI
          をインストールし、プロジェクトを作成し、フォルダー構造を作成し、重要なファイルを理解します。開発サーバーを実行し、最初の API
          エンドポイントを作成します。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-a104-7001-b001-nestjs000104
        title: 'レッスン 4: NestJS のコントローラーとルーティング'
        slug: bai-4-controllers-va-routing-trong-nestjs
        description: >-
          コントローラー、リクエスト処理、ルートパラメータ、クエリ文字列、リクエスト本文、ヘッダーを理解します。 HTTP メソッド、ステータス
          コード、リダイレクト、サブドメイン ルーティング。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'パート 2: プロバイダー、依存関係の注入、およびデータ層'
    description: サービス、Dependency Injection、TypeORM/Prismaとのデータベース接続、検証
    sort_order: 2
    lessons:
      - id: 019d8b40-a201-7001-b001-nestjs000201
        title: 'レッスン 5: プロバイダーと依存関係の注入'
        slug: bai-5-providers-va-dependency-injection
        description: >-
          プロバイダー、サービス、依存性注入コンテナーについての深い理解。カスタムプロバイダー、useClass、useValue、useFactory、useExisting。インジェクションスコープ。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-a202-7001-b001-nestjs000202
        title: 'レッスン 6: モジュール - 機能ごとにコードを整理する'
        slug: bai-6-modules-to-chuc-code-theo-feature
        description: >-
          NestJS のモジュール システム、機能モジュール、共有モジュール、グローバル
          モジュール、動的モジュール。モジュールの遅延読み込みと循環依存関係。
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-a203-7001-b001-nestjs000203
        title: 'レッスン 7: TypeORM と Prisma - データベース接続'
        slug: bai-7-typeorm-va-prisma-ket-noi-database
        description: >-
          PostgreSQL/MySQL を TypeORM と Prisma で接続します。エンティティ、リポジトリ、関係、移行、シード。
          TypeORM と Prisma を比較し、いつどちらを使用するかを比較します。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-a204-7001-b001-nestjs000204
        title: 'レッスン 8: 検証、パイプ、例外フィルター'
        slug: bai-8-validation-pipes-va-exception-filters
        description: >-
          クラスバリデーター、クラストランスフォーマー、ValidationPipe、カスタムパイプ。組み込みの例外フィルター、カスタム例外フィルター、HTTP
          例外、およびエラー処理のベスト プラクティス。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'パート 3: 認証とセキュリティ'
    description: JWT、パスポート、ガード、RBAC、レート制限、CORS、ヘルメット
    sort_order: 3
    lessons:
      - id: 019d8b40-a301-7001-b001-nestjs000301
        title: 'レッスン 9: パスポートと JWT による認証'
        slug: bai-9-authentication-voi-passport-va-jwt
        description: >-
          @nestjs/passport、ローカル戦略、JWT戦略を使用して認証を実装します。アクセストークン、リフレッシュトークン、トークンローテーション。
          Bcrypt パスワードのハッシュ化。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-a302-7001-b001-nestjs000302
        title: 'レッスン 10: ガードと認可 - RBAC'
        slug: bai-10-guards-va-authorization-rbac
        description: >-
          NestJS、AuthGuard、RolesGuard のガード。役割ベースのアクセス制御 (RBAC)、許可ベースの認可。カスタム
          デコレータ @Roles()、@Public()。 CASL の統合。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-a303-7001-b001-nestjs000303
        title: 'レッスン 11: セキュリティのベスト プラクティス'
        slug: bai-11-security-best-practices
        description: >-
          ヘルメット、CORS 構成、@nestjs/throttler によるレート制限、CSRF
          保護、入力サニタイズ。セキュリティヘッダー、HTTPS、@nestjs/config による環境変数。
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-a304-7001-b001-nestjs000304
        title: 'レッスン 12: セッション、Cookie、OAuth2'
        slug: bai-12-session-cookies-va-oauth2
        description: >-
          セッション管理、Cookie ベースの認証、Google/GitHub による OAuth2。ソーシャルログイン統合、アカウントリンク。
          OpenID Connect の基本。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'パート 4: 高度な機能'
    description: インターセプタ、ミドルウェア、WebSocket、GraphQL、ファイルアップロード、キャッシュ、タスクスケジューリング
    sort_order: 4
    lessons:
      - id: 019d8b40-a401-7001-b001-nestjs000401
        title: 'レッスン 13: イ​​ンターセプター、ミドルウェア、ライフサイクル'
        slug: bai-13-interceptors-middleware-va-lifecycle
        description: >-
          ミドルウェア、インターセプター、リクエストのライフサイクル。ロギング インターセプタ、変換インターセプタ、キャッシュ
          インターセプタ、タイムアウト インターセプタ。実行コンテキストとリフレクション。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-a402-7001-b001-nestjs000402
        title: 'レッスン 14: WebSocket とリアルタイム通信'
        slug: bai-14-websockets-va-real-time-communication
        description: >-
          @nestjs/websockets と Socket.IO、WebSocket
          ゲートウェイ、ルーム、名前空間。リアルタイムチャット、通知。サーバー送信イベント (SSE) の代替手段。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-a403-7001-b001-nestjs000403
        title: 'レッスン 15: NestJS を使用した GraphQL'
        slug: bai-15-graphql-voi-nestjs
        description: >-
          @nestjs/graphql と Apollo
          サーバー。スキーマ優先アプローチとコード優先アプローチ。リゾルバー、クエリ、ミューテーション、サブスクリプション。 N+1 問題の
          DataLoader。 GraphQL プレイグラウンドとフェデレーションの基本。
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-a404-7001-b001-nestjs000404
        title: 'レッスン 16: ファイルのアップロード、キャッシュ、タスクのスケジュール設定'
        slug: bai-16-file-upload-caching-va-task-scheduling
        description: >-
          Multer によるファイルのアップロード、ストリーミング。 @nestjs/cache-manager と Redis
          を使用したキャッシュ。 @nestjs/schedule によるタスクのスケジュール、Cron ジョブ、間隔、タイムアウト。 BullMQ
          によるキュー。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'パート 5: マイクロサービス、テスト、本番環境'
    description: NestJS マイクロサービス、テスト、Docker、CI/CD、および運用環境のデプロイメント
    sort_order: 5
    lessons:
      - id: 019d8b40-a501-7001-b001-nestjs000501
        title: 'レッスン 17: NestJS マイクロサービス'
        slug: bai-17-nestjs-microservices
        description: >-
          @nestjs/microservices、トランスポート層
          (TCP、Redis、NATS、RabbitMQ、Kafka、gRPC)。メッセージ
          パターン、イベントベースのコミュニケーション。ハイブリッド アプリケーション。サービスの検出と負荷分散。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-a502-7001-b001-nestjs000502
        title: 'レッスン 18: NestJS でのテスト'
        slug: bai-18-testing-trong-nestjs
        description: >-
          Jest、テストモジュールを使用した単体テスト。 Supertest による統合テスト、E2E
          テスト。モッキングプロバイダー、テストデータベース。コードカバレッジとテストのベストプラクティス。
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-a503-7001-b001-nestjs000503
        title: 'レッスン 19: NestJS の Dockerize と CI/CD'
        slug: bai-19-dockerize-va-cicd-cho-nestjs
        description: >-
          NestJS 用の Dockerfile マルチステージ ビルド、PostgreSQL および Redis を使用した Docker
          Compose。 GitHub アクション CI/CD パイプライン。ヘルスチェック、正常なシャットダウン。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-a504-7001-b001-nestjs000504
        title: 'レッスン 20: 実稼働環境の導入と監視'
        slug: bai-20-production-deployment-va-monitoring
        description: >-
          NestJS を VPS/クラウドにデプロイします。 PM2、Nginx リバースプロキシ。 Winston/Pino
          によるロギング、OpenTelemetry トレース。 Prometheus メトリクス、Grafana
          ダッシュボード。パフォーマンスの最適化とスケーリング戦略。
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
reviews: []
quizzes: []
locale: ja
---
<p><strong>必要な知識:</strong></p>
<ul>
<li>基本的な JavaScript/TypeScript (ES6+、async/await、Promises)</li>
<li>基本的な Node.js (npm、モジュール、イベント ループ)</li>
<li>HTTP および REST API の理解</li>
<li>基本的な SQL (SELECT、INSERT、UPDATE、DELETE、JOIN)</li>
<li>基本的な Git</li>
</ul>
<p><strong>何を学ぶのですか？</strong></p>
<ul>
<li>NestJS と TypeScript を使用してプロフェッショナルな REST API を構築する</li>
<li>依存関係の注入、モジュール、プロバイダー パターンについての深い理解</li>
<li>TypeORM と Prisma ORM でデータベースを接続する</li>
<li>JWT、Passport、RBACによる認証・認可の実装</li>
<li>WebSocketによるリアルタイム通信</li>
<li>GraphQL APIを構築する</li>
<li>NestJS を使用したマイクロサービス アーキテクチャ</li>
<li>テスト:単体テスト、結合テスト、E2Eテスト</li>
<li>Docker、CI/CD、および実稼働デプロイメント</li>
</ul>
