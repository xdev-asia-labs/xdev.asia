---
id: 019d8b40-g100-7001-b008-nodejs0000001
title: 'Node.js コア: 基本から高度まで'
slug: nodejs-core-tu-co-ban-den-nang-cao
description: >-
  Node.js コア コースは、基礎から上級まで包括的で、フレームワークに関係なく Node.js ランタイムを深く理解するのに役立ちます。イベント
  ループ、ストリーム、ワーカー スレッド、クラスター、HTTP/2、暗号化、ファイル システム、子プロセス、ネイティブ モジュール、パフォーマンス
  プロファイリングが含まれます。最新の 2026 年のベスト プラクティスを適用して Node.js 22 LTS に更新されました。
featured_image: uploads/2026/03/nodejs-banner-v2.png
level: beginner
duration_hours: 75
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
  - name: Node.js
    slug: nodejs
  - name: JavaScript
    slug: javascript
  - name: TypeScript
    slug: typescript
  - name: Backend
    slug: backend
  - name: Event Loop
    slug: event-loop
  - name: Streams
    slug: streams
  - name: Worker Threads
    slug: worker-threads
  - name: HTTP
    slug: http
  - name: Cluster
    slug: cluster
  - name: Performance
    slug: performance
  - name: Testing
    slug: testing
  - name: Docker
    slug: docker
  - name: V8 Engine
    slug: v8-engine
sections:
  - id: section-01
    title: 'パート 1: Node.js の内部構造'
    description: V8 エンジン、イベント ループ、libuv、モジュール システム、非同期パターン
    sort_order: 1
    lessons:
      - id: 019d8b40-g101-7001-b008-nodejs0000101
        title: 'レッスン 1: Node.js アーキテクチャの詳細'
        slug: bai-1-nodejs-architecture-deep-dive
        description: >-
          V8 エンジン、libuv、C++ バインディング。シングルスレッドのイベントループモデル。
          Node.js対Deno対Bun。開発履歴、ユースケース。ノード --inspect、V8 フラグ。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-g102-7001-b008-nodejs0000102
        title: 'レッスン 2: イベント ループと非同期パターン'
        slug: bai-2-event-loop-va-async-patterns
        description: >-
          イベント ループのフェーズ (タイマー、保留中、ポーリング、チェック、クローズ)。マイクロタスクとマクロタスク。
          process.nextTick と queueMicrotask と setImmediate
          の比較。コールバック、プロミス、非同期/待機。 Promise.allSettled、Promise.any。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-g103-7001-b008-nodejs0000103
        title: 'レッスン 3: モジュール システムとパッケージ管理'
        slug: bai-3-module-system-va-package-management
        description: >-
          CommonJS と ES モジュール、モジュール解決アルゴリズム。 Package.json
          フィールドのエクスポート、条件付きエクスポート。 npm、pnpm ワークスペース。 Node.js 組み込みテスト ランナー、権限モデル。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-g104-7001-b008-nodejs0000104
        title: 'レッスン 4: Node.js の TypeScript と最新の JavaScript'
        slug: bai-4-typescript-va-modern-javascript
        description: >-
          Node.js、tsx/ts-node の TypeScript セットアップ。タイプセーフな構成、パス エイリアス。
          ESBuild/SWC コンパイル。 Node.js タイプの除去
          (--experimental-strip-types)。デコレータ、メタデータ。
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'パート 2: コアモジュールの詳細'
    description: ファイル システム、ストリーム、HTTP、暗号化、OS、プロセス
    sort_order: 2
    lessons:
      - id: 019d8b40-g201-7001-b008-nodejs0000201
        title: 'レッスン 5: ファイル システムとパス'
        slug: bai-5-file-system-va-path
        description: >-
          fs/promises、fs.createReadStream/WriteStream。ファイル監視
          (fs.watch、chokidar)。パス操作、__dirname、import.meta.url。一時ファイル、アトミック書き込み。グロブパターン。
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-g202-7001-b008-nodejs0000202
        title: 'レッスン 6: ストリームとバッファ'
        slug: bai-6-streams-va-buffers
        description: >-
          読み取り可能、書き込み可能、​​変換、二重ストリーム。バックプレッシャー、pipeline()、stream.compose()。バッファ
          API、ArrayBuffer、TypedArray。ストリームベースのファイル処理、CSV/JSON 解析。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-g203-7001-b008-nodejs0000203
        title: 'レッスン 7: HTTP/HTTPS と HTTP/2'
        slug: bai-7-http-https-va-http2
        description: >-
          http.createServer、ルーティング、ミドルウェア パターンを最初から作成します。 HTTPS/TLS の設定。 HTTP/2
          サーバープッシュ。リクエスト/レスポンスの処理、チャンク転送。キープアライブ、接続プーリング。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-g204-7001-b008-nodejs0000204
        title: 'レッスン 8: 暗号、OS、プロセス'
        slug: bai-8-crypto-os-va-process
        description: >-
          暗号化モジュール: ハッシュ、HMAC、暗号化 (AES)、キー導出 (scrypt、argon2)。デジタル署名。 OS
          モジュール、プロセス信号、環境変数。 child_process、実行/生成。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'パート 3: 同時実行性とネットワーキング'
    description: ワーカー スレッド、クラスター、TCP/UDP、WebSocket、IPC
    sort_order: 3
    lessons:
      - id: 019d8b40-g301-7001-b008-nodejs0000301
        title: 'レッスン 9: ワーカー スレッドと CPU 負荷の高いタスク'
        slug: bai-9-worker-threads-va-cpu-intensive
        description: >-
          ワーカー スレッド、SharedArrayBuffer、アトミックス。 MessageChannel、転送可能なオブジェクト。スレッド
          プール パターン、Piscina。 CPU 負荷の高いタスクのオフロード、画像処理。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-g302-7001-b008-nodejs0000302
        title: 'レッスン 10: クラスター モジュールとロード バランシング'
        slug: bai-10-cluster-module-va-load-balancing
        description: >-
          クラスターモジュール、fork()、ラウンドロビン。 PM2 プロセス
          マネージャー、正常なシャットダウン。スティッキーなセッション、共有された状態の課題。ダウンタイムゼロの導入、ローリング再起動。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-g303-7001-b008-nodejs0000303
        title: 'レッスン 11: TCP、UDP、WebSocket'
        slug: bai-11-tcp-udp-va-websockets
        description: >-
          net モジュール (TCP サーバー/クライアント)、dgram (UDP)。
          wsライブラリを備えたWebSocketサーバー。接続管理、バイナリ プロトコル。プロトコル設計、カスタムワイヤフォーマット。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-g304-7001-b008-nodejs0000304
        title: 'レッスン 12: イベント、タイマー、診断'
        slug: bai-12-events-timers-va-diagnostics
        description: >-
          EventEmitter パターン、カスタム イベント、メモリ リーク検出。
          AbortController/AbortSignal。診断チャネル、async_hooks。 Node.js インスペクター、ヒープ
          スナップショット。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'パート 4: フレームワークを使用しない構築'
    description: ゼロからの HTTP サーバー、ルーティング エンジン、ミドルウェア、データベース
    sort_order: 4
    lessons:
      - id: 019d8b40-g401-7001-b008-nodejs0000401
        title: 'レッスン 13: HTTP フレームワークをゼロから構築する'
        slug: bai-13-xay-dung-http-framework-tu-scratch
        description: >-
          ミニ フレームワークを構築します: ルーター、ミドルウェア パイプライン、リクエスト解析、レスポンス ヘルパー。
          Express/Fastify の内部構造と比較してください。コンテンツネゴシエーション、CORS。
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-g402-7001-b008-nodejs0000402
        title: 'レッスン 14: データベース ドライバーと接続プーリング'
        slug: bai-14-database-drivers-va-connection-pooling
        description: >-
          pg (PostgreSQL)、mysql2、better-sqlite3 のネイティブ
          ドライバー。接続プーリング、準備されたステートメント。トランザクション、クエリ ビルダー (Knex.js)。移行ツール。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-g403-7001-b008-nodejs0000403
        title: 'レッスン 15: キャッシュ、キュー、バックグラウンド ジョブ'
        slug: bai-15-caching-queues-va-background-jobs
        description: >-
          Redis クライアント (ioredis)、キャッシュ パターン。 BullMQ ジョブ キュー、優先キュー、レート制限。
          node-cron を使用した Cron ジョブ。インメモリ キャッシュ (LRU キャッシュ)。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-g404-7001-b008-nodejs0000404
        title: 'レッスン 16: ネイティブ アドオンと N-API'
        slug: bai-16-native-addons-va-napi
        description: >-
          N-API (ノード API)、napi-rs (Rust バインディング)。ノード-GYP、プリビルド。 C/C++
          アドオン、パフォーマンスが重要なネイティブ コード。ネイティブ アドオン、ワーカー スレッド、WASM をいつ使用するか。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'パート 5: テスト、パフォーマンス、および実稼働'
    description: テスト、プロファイリング、Docker、モニタリング、スケーリング
    sort_order: 5
    lessons:
      - id: 019d8b40-g501-7001-b008-nodejs0000501
        title: 'レッスン 17: Node.js アプリケーションのテスト'
        slug: bai-17-testing-nodejs-applications
        description: >-
          Node.js 組み込みテスト ランナー (node:test)。単体テスト/統合テスト用の Vitest。 HTTP
          テスト用のスーパーテスト。 HTTP モックの場合はノックします。テストコンテナ、コードカバレッジ (c8/istanbul)。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-g502-7001-b008-nodejs0000502
        title: 'レッスン 18: パフォーマンスのプロファイリングと最適化'
        slug: bai-18-performance-profiling-va-optimization
        description: >-
          V8 プロファイラ、--prof フラグ、フレームグラフ。メモリ リークの検出、ヒープ スナップショット。 Clinic.js
          (Doctor、Bubbleprof、Flame)。イベントループラグモニタリング、0xプロファイラ。 GCチューニング。
        duration_minutes: 150
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-g503-7001-b008-nodejs0000503
        title: 'レッスン 19: Docker と CI/CD'
        slug: bai-19-docker-va-cicd
        description: >-
          Node.js 用の Docker マルチステージ ビルド。アルパイン vs スリム vs ディストロレス。 Docker
          Compose、ヘルスチェック。 GitHub アクション CI/CD パイプライン。 Docker の
          pnpm、.dockerignore のベスト プラクティス。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-g504-7001-b008-nodejs0000504
        title: 'レッスン 20: 本番環境の監視とスケーリング'
        slug: bai-20-production-monitoring-va-scaling
        description: >-
          Pino 構造化ログ、OpenTelemetry トレース。 Prometheus メトリクス、Grafana ダッシュボード。
          PM2エコシステム。正常なシャットダウン、ヘルスチェック。水平スケーリング、ステートレスなデザイン。
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
locale: ja
---

**Node.js コア: 基本から高度まで** コースは、V8 エンジンの内部から運用グレードのアプリケーションまで、フレームワークに関係なく、Node.js ランタイムを深く理解するのに役立ちます。

## 何を学ぶのですか?

- **内部**: V8 エンジン、イベント ループ、libuv、モジュール システム、非同期パターン
- **コア モジュール**: ファイル システム、ストリーム、HTTP/2、暗号化、ワーカー スレッド、クラスター
- **ネットワーキング**: TCP/UDP、WebSocket、カスタム プロトコル
- **構築**: ゼロからの HTTP フレームワーク、データベース ドライバー、キャッシュ、キュー
- **本番**: テスト、プロファイリング、Docker、CI/CD、モニタリング、スケーリング

## リクエスト

- ES6+ JavaScript の基本的な知識
- 基本的な TypeScript (推奨)
- Node.js 22 LTS と Docker
