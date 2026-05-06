---
id: 019d8b40-b100-7001-b003-golang0000001
title: 'Golang: 基本から高度まで'
slug: golang-tu-co-ban-den-nang-cao
description: >-
  基本から上級までの包括的な Golang コース。Go 言語をマスターし、高パフォーマンスのバックエンドを構築するのに役立ちます。 Go
  の基礎、Goroutines、Channels、Gin/Fiber
  フレームワーク、GORM、gRPC、マイクロサービス、テスト、Docker、実稼働デプロイメントが含まれます。ジェネリックス、イテレータ、および最新の
  2026 年のベスト プラクティスを備えた Go 1.23 以降に更新されました。
featured_image: uploads/2026/03/golang-banner-v2.png
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
published_at: '2026-03-31T12:00:00.000000Z'
created_at: '2026-03-31T12:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-facb-72da-8191-e6d44b88fb3e
  name: プログラミング
  slug: lap-trinh
tags:
  - name: Golang
    slug: golang
  - name: Go
    slug: go
  - name: Backend
    slug: backend
  - name: rest-api
    slug: rest-api
  - name: Gin
    slug: gin
  - name: Fiber
    slug: fiber
  - name: GORM
    slug: gorm
  - name: gRPC
    slug: grpc
  - name: Microservices
    slug: microservices
  - name: Docker
    slug: docker
  - name: Testing
    slug: testing
  - name: PostgreSQL
    slug: postgresql
  - name: Redis
    slug: redis
  - name: Goroutines
    slug: goroutines
  - name: Concurrency
    slug: concurrency
sections:
  - id: section-01
    title: 'パート 1: Go の基礎'
    description: Go プラットフォーム、構文、型、制御フロー、関数、パッケージ
    sort_order: 1
    lessons:
      - id: 019d8b40-b101-7001-b003-golang0000101
        title: 'レッスン 1: Go の紹介 - クラウドネイティブ言語'
        slug: bai-1-gioi-thieu-go-ngon-ngu-cua-cloud-native
        description: >-
          なぜ行くのですか？ Rust、Java、Python と比較してください。歴史、設計哲学、Go エコシステム。 GOPATH、Go
          モジュールをインストールします。 Hello World と go ツールチェーン。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-b102-7001-b003-golang0000102
        title: 'レッスン 2: 変数、型、制御フロー'
        slug: bai-2-variables-types-va-control-flow
        description: >-
          プリミティブ型、複合型 (配列、スライス、マップ、構造体)。ポインタ、定数、イオタ。 If/else、スイッチ、for
          ループ、範囲。型アサーションと型スイッチ。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-b103-7001-b003-golang0000103
        title: 'レッスン 3: 関数、インターフェイス、エラー処理'
        slug: bai-3-functions-interfaces-va-error-handling
        description: >-
          関数、複数の戻り値、可変長関数。インターフェース、埋め込み、継承よりも合成。エラー処理パターン、カスタム
          エラー、errors.Is/As、パニック/リカバリ。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-b104-7001-b003-golang0000104
        title: 'レッスン 4: ジェネリック、パッケージ、モジュール'
        slug: bai-4-generics-packages-va-modules
        description: >-
          Go ジェネリック (型パラメーター、制約)。パッケージ構成、可視性ルール、初期化関数。 Go
          モジュール、バージョン管理、依存関係管理、ワークスペース モード。
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'パート 2: 同時実行性とネットワーキング'
    description: ゴルーチン、チャネル、コンテキスト、HTTP サーバー、JSON 処理
    sort_order: 2
    lessons:
      - id: 019d8b40-b201-7001-b003-golang0000201
        title: 'レッスン 5: ゴルーチンとチャネル'
        slug: bai-5-goroutines-va-channels
        description: >-
          Goroutines、WaitGroup、バッファリングされたチャネル/バッファリングされていないチャネル。ステートメント、チャネル方向、ファンイン/ファンアウト
          パターンを選択します。同時実行と並列処理。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-b202-7001-b003-golang0000202
        title: 'レッスン 6: コンテキスト、同期、同時実行パターン'
        slug: bai-6-context-sync-va-concurrency-patterns
        description: >-
          コンテキスト パッケージ (WithCancel、WithTimeout、WithValue)。
          sync.Mutex、RWMutex、sync.Once、sync.Pool。ワーカー プール、パイプライン、レート リミッター、セマフォ
          パターン。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-b203-7001-b003-golang0000203
        title: 'レッスン 7: HTTP サーバーと JSON の処理'
        slug: bai-7-http-server-va-json-handling
        description: >-
          net/http パッケージ、ServeMux (Go 1.22+)、ハンドラー、ミドルウェア
          パターン。エンコーディング/json、構造体タグ、カスタム マーシャリング。 HTTP クライアント、タイムアウト、接続プーリング。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-b204-7001-b003-golang0000204
        title: 'レッスン 8: Jin フレームワークと REST API'
        slug: bai-8-gin-framework-va-rest-api
        description: >-
          Gin
          フレームワークのセットアップ、ルーティング、ミドルウェア。バインディングをリクエストし、go-playground/validator
          で検証します。応答処理、エラー管理。 swaggo を使用した Swagger
          ドキュメント。ジン対ファイバー対エコー対チーを比較してください。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'パート 3: データベースと認証'
    description: GORM、移行、リポジトリ パターン、JWT、RBAC、セキュリティ
    sort_order: 3
    lessons:
      - id: 019d8b40-b301-7001-b003-golang0000301
        title: 'レッスン 9: GORM とデータベースの統合'
        slug: bai-9-gorm-va-database-integration
        description: >-
          GORM v2 ORM、モデル、関連付け (HasOne、HasMany、BelongsTo、Many2Many)。 CRUD
          操作、スコープ、フック。接続プールのチューニング。 GORM、sqlx、sqlc、Ent を比較します。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-b302-7001-b003-golang0000302
        title: 'レッスン 10: 移行とリポジトリ パターン'
        slug: bai-10-migrations-va-repository-pattern
        description: >-
          golang-migrate、Atlas の移行。リポジトリ パターン、サービス レイヤー、Wire/Fx による依存関係の注入。クリーン
          アーキテクチャ プロジェクトの構造。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-b303-7001-b003-golang0000303
        title: 'レッスン 11: 認証 - JWT と OAuth2'
        slug: bai-11-authentication-jwt-va-oauth2
        description: >-
          golang-jwt を使用した JWT、bcrypt パスワード
          ハッシュ。アクセストークン、リフレッシュトークン、トークンローテーション。 OAuth2 フロー、Google/GitHub
          によるソーシャル ログイン。セッション管理。
        duration_minutes: 150
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-b304-7001-b003-golang0000304
        title: 'レッスン 12: 認可、セキュリティ、ミドルウェア'
        slug: bai-12-authorization-security-va-middleware
        description: >-
          RBAC、Casbin 認証。 CORS、レート制限、セキュリティ ヘッダー。入力検証、SQL
          インジェクション防止。ミドルウェアチェーン、リクエストロギング、パニックリカバリ。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'パート 4: 高度な機能'
    description: WebSocket、gRPC、メッセージキュー、キャッシュ、ファイル処理
    sort_order: 4
    lessons:
      - id: 019d8b40-b401-7001-b003-golang0000401
        title: 'レッスン 13: WebSocket とリアルタイム'
        slug: bai-13-websockets-va-real-time
        description: >-
          ゴリラ/ウェブソケット、ngooyr/ウェブソケット。接続マネージャー、ブロードキャスト、ルーム
          パターン。サーバー送信イベント、リアルタイム通知。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-b402-7001-b003-golang0000402
        title: 'レッスン 14: gRPC とプロトコル バッファー'
        slug: bai-14-grpc-va-protocol-buffers
        description: >-
          プロトコル バッファー、プロトコル コンパイラー、コード生成。 gRPC 単項、サーバー ストリーミング、クライアント
          ストリーミング、双方向ストリーミング。 REST 互換性のための gRPC ゲートウェイ。インターセプター。
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-b403-7001-b003-golang0000403
        title: 'レッスン 15: メッセージ キューとイベント駆動型'
        slug: bai-15-message-queues-va-event-driven
        description: >-
          RabbitMQ と amqp091-go、Apache Kafka と confluent-kafka-go。 NATS
          メッセージング。イベント駆動型アーキテクチャ、CQRS パターン、送信トレイ パターン。再試行、デッドレターキュー。
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-b404-7001-b003-golang0000404
        title: 'レッスン 16: キャッシュ、ファイルのアップロード、パフォーマンス'
        slug: bai-16-caching-file-upload-va-performance
        description: >-
          Redis キャッシュ戦略、go-redis。ファイルのアップロード/ダウンロード、ストリーミング。 prof
          プロファイリング、ベンチマーク テスト、メモリの最適化。接続プーリング、リクエストのバッチ処理。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'パート 5: マイクロサービス、テスト、本番環境'
    description: マイクロサービス、テスト、Docker、CI/CD、モニタリング、デプロイメント
    sort_order: 5
    lessons:
      - id: 019d8b40-b501-7001-b003-golang0000501
        title: 'レッスン 17: Go を使用したマイクロサービス アーキテクチャ'
        slug: bai-17-microservices-architecture-voi-go
        description: >-
          マイクロサービス設計パターン、サービス検出、API ゲートウェイ。サービス間通信 (gRPC、HTTP、メッセージング)。サーキット
          ブレーカー、再試行、タイムアウト パターン。ゴーキットとゴーマイクロ。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-b502-7001-b003-golang0000502
        title: 'レッスン 18: Go でのテスト'
        slug: bai-18-testing-trong-go
        description: >-
          テストパッケージ、テーブル駆動テスト、サブテスト。証言の主張、嘲笑の嘲笑。 API テスト用の httptest。
          testcontainers-go を使用した統合テスト。ベンチマークテスト、ファジング。
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-b503-7001-b003-golang0000503
        title: 'レッスン 19: Docker、CI/CD、DevOps'
        slug: bai-19-docker-cicd-va-devops
        description: >-
          Go 用の Docker マルチステージ ビルド (スクラッチ/ディストリビューションなし)。 Docker
          Compose、Kubernetes のデプロイメント。 GitHub アクション CI/CD パイプライン。
          Makefile、golangci-lint、プリコミットフック。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-b504-7001-b003-golang0000504
        title: 'レッスン 20: 本番環境のデプロイと可観測性'
        slug: bai-20-production-deployment-va-observability
        description: >-
          slog/zerolog による構造化ロギング。 OpenTelemetry トレース、Prometheus メトリクス、Grafana
          ダッシュボード。正常なシャットダウン、ヘルスチェック。スケーリング戦略、パフォーマンスのチューニング。
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
locale: ja
---

コース **Golang: 基本から上級まで** は、Go 言語をマスターできるように設計されています。Go 言語は、クラウド ネイティブ システム、マイクロサービス、高性能アプリケーション向けに Google が設計した言語です。

## 何を学ぶのですか?

- **Go の基礎**: 変数、型、関数、インターフェイス、ジェネリックス、エラー処理
- **同時実行性**: ゴルーチン、チャネル、コンテキスト、同期プリミティブ、同時実行パターン
- **Web 開発**: Jin フレームワーク、REST API、ミドルウェア、ルーティング、検証
- **データベース**: GORM、移行、リポジトリ パターン、クリーンなアーキテクチャ
- **認証**: JWT、OAuth2、RBAC、セキュリティのベスト プラクティス
- **上級**: WebSocket、gRPC、メッセージ キュー、キャッシュ、マイクロサービス
- **本番**: テスト、Docker、CI/CD、モニタリング、可観測性

## リクエスト

- 基本的なプログラミング知識 (少なくとも 1 つの言語を知っている)
- HTTP および REST API の基本的な理解
- Go 1.23 以降と Docker がインストールされたコンピューター
