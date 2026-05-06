---
id: 019d8b40-f100-7001-b007-rust000000001
title: 'Rust: 基本から上級まで'
slug: rust-tu-co-ban-den-nang-cao
description: >-
  基本から上級までの包括的な Rust
  コース。最も安全で最もパフォーマンスの高いプログラミング言語を習得するのに役立ちます。所有権、借用、ライフタイム、特性、非同期/待機、Actix-web/Axum、SQLx、gRPC、WebAssembly、テストおよび運用環境の展開が含まれます。
  2026 年の最新のベスト プラクティスを含む Rust 2024 版に更新されました。
featured_image: uploads/2026/03/rust-banner-v2.png
level: beginner
duration_hours: 90
lesson_count: 22
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
  - name: Rust
    slug: rust
  - name: Backend
    slug: backend
  - name: Systems Programming
    slug: systems-programming
  - name: Actix
    slug: actix
  - name: Axum
    slug: axum
  - name: Tokio
    slug: tokio
  - name: SQLx
    slug: sqlx
  - name: gRPC
    slug: grpc
  - name: WebAssembly
    slug: webassembly
  - name: Docker
    slug: docker
  - name: Testing
    slug: testing
  - name: Concurrency
    slug: concurrency
  - name: Ownership
    slug: ownership
  - name: PostgreSQL
    slug: postgresql
sections:
  - id: section-01
    title: 'パート 1: Rust の基礎'
    description: 所有権、借用、有効期間、タイプ、制御フロー、エラー処理
    sort_order: 1
    lessons:
      - id: 019d8b40-f101-7001-b007-rust000000101
        title: 'レッスン 1: Rust の紹介 - パフォーマンスと安全性の両立'
        slug: bai-1-gioi-thieu-rust
        description: >-
          なぜ錆びるのか？ゼロコストの抽象化、GC を使用しないメモリの安全性。 Rust、Go、C++、Zig
          を比較してください。錆び、カーゴ、錆びアナライザーをインストールします。 Hello World、貨物プロジェクトの構造。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-f102-7001-b007-rust000000102
        title: 'レッスン 2: 変数、型、制御フロー'
        slug: bai-2-variables-types-va-control-flow
        description: >-
          デフォルトでの不変性、シャドウイング。スカラー型、複合型 (タプル、配列)。文字列と&str。
          if/else、一致、ループ。パターンマッチングの詳細。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-f103-7001-b007-rust000000103
        title: 'レッスン 3: 所有権、借入、存続期間'
        slug: bai-3-ownership-borrowing-va-lifetimes
        description: >-
          所有権ルール、移動セマンティクス、コピー特性。参照、借用ルール、変更可能な参照。有効期間アノテーション、有効期間省略、「静的有効期間」。チェッカーを借ります。
        duration_minutes: 150
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-f104-7001-b007-rust000000104
        title: 'レッスン 4: 構造体、列挙型、パターン マッチング'
        slug: bai-4-structs-enums-va-pattern-matching
        description: >-
          構造体、impl ブロッ​​ク、メソッド。列挙型、Option<T>、Result<T, E>。 match を使用したパターン
          マッチング、if let、while let。解体。ビルダーパターン。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'パート 2: 高度な Rust'
    description: トレイト、ジェネリック、クロージャ、イテレータ、スマート ポインタ、非同期
    sort_order: 2
    lessons:
      - id: 019d8b40-f201-7001-b007-rust000000201
        title: 'レッスン 5: 特性とジェネリック'
        slug: bai-5-traits-va-generics
        description: >-
          特性の定義、デフォルトの実装。ジェネリックタイプ、トレイト境界。関連するタイプ、スーパー特性。 impl 特性、dyn
          特性。マクロを派生します。共通の特性 (表示、デバッグ、クローン、From/Into)。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-f202-7001-b007-rust000000202
        title: 'レッスン 6: クロージャ、イテレータ、コレクション'
        slug: bai-6-closures-iterators-va-collections
        description: >-
          クロージャ、Fn/FnMut/FnOnce 特性。イテレーター特性、イテレーターアダプター (マップ、フィルター、フォールド)。
          Vec、HashMap、HashSet、BTreeMap。カスタムイテレータの収集、連鎖。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-f203-7001-b007-rust000000203
        title: 'レッスン 7: エラー処理とモジュール'
        slug: bai-7-error-handling-va-modules
        description: >-
          結果、オプション、アンラップ、期待。 ?演算子、エラー伝播。カスタム エラー タイプ、thiserror
          など。モジュールシステム、クレート構造、パブの可視性。貨物作業スペース。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-f204-7001-b007-rust000000204
        title: 'レッスン 8: スマート ポインタと同時実行性'
        slug: bai-8-smart-pointers-va-concurrency
        description: >-
          ボックス、Rc、Arc、RefCell、Mutex、RwLock。特性を送信/同期します。 std::thread、メッセージ受け渡し
          (チャネル)。共有状態の同時実行。データ並列処理にはレーヨン。恐れることのない同時実行。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'パート 3: 非同期 Rust と Web 開発'
    description: Tokio、async/await、Axum/Actix-web、REST API
    sort_order: 3
    lessons:
      - id: 019d8b40-f301-7001-b007-rust000000301
        title: 'レッスン 9: 非同期 Rust と Tokio'
        slug: bai-9-async-rust-va-tokio
        description: >-
          非同期/待機、将来の特性、ピン。 Tokio ランタイム、スポーン、JoinHandle。 Tokio チャンネル
          (mpsc、ブロードキャスト、視聴)。 tokio::select!、tokio::sync。非同期ストリーム。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-f302-7001-b007-rust000000302
        title: 'レッスン 10: Axum フレームワークと REST API'
        slug: bai-10-axum-framework-va-rest-api
        description: >-
          Axum のセットアップ、ルーティング、ハンドラー、エクストラクター。状態管理、ミドルウェア（タワー）。シリアル化、JSON
          応答。エラー処理、カスタム エラー。 Axum、Actix-web、Rocket を比較します。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-f303-7001-b007-rust000000303
        title: 'レッスン 11: SQLx とデータベースの統合'
        slug: bai-11-sqlx-va-database-integration
        description: >-
          SQLx 非同期、コンパイル時のクエリ チェック。移行、接続プーリング。 CRUD 操作、トランザクション。 Sea-ORM
          の代替品。リポジトリ パターン、クリーンなアーキテクチャ。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-f304-7001-b007-rust000000304
        title: 'レッスン 12: 認証と認可'
        slug: bai-12-authentication-va-authorization
        description: >-
          jsonwebtoken クレート、argon2 パスワード ハッシュを使用した JWT。ミドルウェアベースの認証、抽出機能。
          RBAC、タワーミドルウェア。 OAuth2の統合。セッション管理。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'パート 4: 高度なバックエンド'
    description: WebSocket、gRPC、メッセージキュー、キャッシュ、CLI ツール
    sort_order: 4
    lessons:
      - id: 019d8b40-f401-7001-b007-rust000000401
        title: 'レッスン 13: WebSocket とリアルタイム'
        slug: bai-13-websockets-va-real-time
        description: >-
          tokio-tungstenite, axum WebSocket support.接続マネージャー、ブロードキャスト、ルーム
          パターン。サーバー送信イベント。リアルタイムチャットアプリ。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-f402-7001-b007-rust000000402
        title: 'レッスン 14: Tonic を使用した gRPC'
        slug: bai-14-grpc-voi-tonic
        description: >-
          プロトコル バッファー、prost コード生成。 Tonic gRPC フレームワーク、単項/ストリーミング
          RPC。インターセプター、TLS、負荷分散。ブラウザ クライアント用の gRPC-web。
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-f403-7001-b007-rust000000403
        title: 'レッスン 15: メッセージ キューとバックグラウンド ジョブ'
        slug: bai-15-message-queues-va-background-jobs
        description: >-
          RabbitMQ with lapin, Kafka with rdkafka. NATS メッセージング。 Background job
          processing.イベント駆動型のアーキテクチャ パターン。 Redis パブ/サブスクライブ。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-f404-7001-b007-rust000000404
        title: 'レッスン 16: キャッシュ、CLI ツール、マクロ'
        slug: bai-16-caching-cli-tools-va-macros
        description: >-
          Deadpool-Redis を使用した Redis キャッシュ。拍手を伴うコマンドラインツール。手続き型マクロ、派生マクロ。
          Serdeカスタムシリアル化。構成管理。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'パート 5: WebAssembly とシステム'
    description: WASM、FFI、安全でない Rust、組み込み、システム プログラミング
    sort_order: 5
    lessons:
      - id: 019d8b40-f501-7001-b007-rust000000501
        title: 'レッスン 17: Rust を使用した WebAssembly'
        slug: bai-17-webassembly-voi-rust
        description: >-
          wasm-pack、wasm-bindgen。 Rust → WASM compilation. JavaScript interop,
          web-sys, js-sys. Performance-critical browser code. Leptos/Yew
          frontend frameworks.
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-f502-7001-b007-rust000000502
        title: 'レッスン 18: FFI と危険な Rust'
        slug: bai-18-ffi-va-unsafe-rust
        description: >-
          安全でないブロック、生のポインター、変換。 FFI (Foreign Function Interface)、Rust から C
          を呼び出します。 C 互換ライブラリの構築。 Python バインディング用の PyO3。安全変数。
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
  - id: section-06
    title: 'パート 6: テスト、CI/CD、本番環境'
    description: テスト、ベンチマーク、Docker、CI/CD、モニタリング
    sort_order: 6
    lessons:
      - id: 019d8b40-f601-7001-b007-rust000000601
        title: 'レッスン 19: テストとベンチマーク'
        slug: bai-19-testing-va-benchmarking
        description: >-
          単体テスト、統合テスト、ドキュメントテスト。 rstest (フィクスチャ、パラメータ化)、モコール。リクエストを使用した API テスト。
          Criterion.rs のベンチマーク。プロパティベースのテスト、ファジング。コードカバレッジ。
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-f602-7001-b007-rust000000602
        title: 'レッスン 20: Ru​​st の Docker と CI/CD'
        slug: bai-20-docker-va-cicd-cho-rust
        description: >-
          マルチステージ Docker ビルド (ビルダー + スクラッチ/ディストロレス)。依存関係をキャッシュするためのCargo-chef。
          GitHub アクション CI/CD、クロスコンパイル。貨物拒否、貨物監査。クリッピー、サビト。
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8b40-f603-7001-b007-rust000000603
        title: 'レッスン 21: 可観測性と監視'
        slug: bai-21-observability-va-monitoring
        description: >-
          トレースクレート、構造化ロギング。 OpenTelemetry の統合、Prometheus
          メトリクス。グラファナのダッシュボード。ヘルスチェック、正常なシャットダウン。非同期デバッグ用の tokio-console。
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8b40-f604-7001-b007-rust000000604
        title: 'レッスン 22: 実稼働環境の導入とパフォーマンスのチューニング'
        slug: bai-22-production-deployment-va-performance-tuning
        description: >-
          プロファイルの最適化、LTO、コード生成ユニットをリリースします。メモリ アロケータ
          (jemalloc、mimalloc)。接続プーリング、リクエストのバッチ処理。スケーリング戦略、Rust によるマイクロサービス。
        duration_minutes: 150
        is_free: true
        sort_order: 22
        video_url: null
locale: ja
---

コース **Rust: 基本から上級まで** は、Rust をマスターするのに役立ちます。Rust は、スタック オーバーフローで長年にわたって最も人気のある言語であり、ガベージ コレクターを必要とせずに、C/C++ レベルのパフォーマンスとメモリの安全性を組み合わせています。

## 何を学ぶのですか?

- **Rust コア**: 所有権、借用、有効期間、特性、ジェネリック、エラー処理
- **同時実行**: スレッド、非同期/待機、Tokio、チャネル、スマート ポインター
- **Web 開発**: Axum、SQLx、JWT、gRPC (Tonic)、WebSocket
- **上級**: WebAssembly、FFI、Unsafe Rust、マクロ
- **本番**: テスト、Docker、CI/CD、可観測性、パフォーマンス チューニング

## リクエスト

- 基本的なプログラミングの知識 (C/C++、Go、またはその他の言語)
- メモリ管理を理解していると有利
- Rust ツールチェーン (rustup) と Docker がインストールされたコンピューター
