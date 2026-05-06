---
id: 019d8b40-a100-7001-b002-fastapi000001
title: 'Python FastAPI: 基本から高度まで'
slug: python-fastapi-tu-co-ban-den-nang-cao
description: >-
  Python FastAPI コースは基本から上級まで包括的で、バックエンド API 用の最新の Python フレームワークを習得するのに役立ちます。
  Python
  の基礎、Pydantic、async/await、SQLAlchemy、Alembic、認証、承認、OAuth2、WebSocket、バックグラウンド
  タスク、テスト、Docker、運用環境のデプロイが含まれます。最新の 2026 年のベスト プラクティスを適用して、FastAPI 0.115 以降および
  Python 3.12 以降に更新されました。
featured_image: uploads/2026/03/python-fastapi-banner-v2.png
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
  - name: Python
    slug: python
  - name: FastAPI
    slug: fastapi
  - name: Backend
    slug: backend
  - name: rest-api
    slug: rest-api
  - name: Pydantic
    slug: pydantic
  - name: SQLAlchemy
    slug: sqlalchemy
  - name: Alembic
    slug: alembic
  - name: Docker
    slug: docker
  - name: Testing
    slug: testing
  - name: JWT
    slug: jwt
  - name: OAuth2
    slug: oauth2
  - name: WebSocket
    slug: websocket
  - name: Async
    slug: async
  - name: PostgreSQL
    slug: postgresql
  - name: Redis
    slug: redis
sections:
  - id: section-01
    title: 'パート 1: Python の基礎と FastAPI'
    description: 最新の Python、FastAPI、および最初の REST API の構築について学びましょう
    sort_order: 1
    lessons:
      - id: 019d8b40-a101-7001-b002-fastapi000101
        title: 'レッスン 1: FastAPI の紹介 - 最新の Python フレームワーク'
        slug: bai-1-gioi-thieu-fastapi-framework-python-hien-dai-nhat
        description: >-
          FastAPI とは何かを調べ、Django、Flask、Litestar と比較してください。 ASGI
          アーキテクチャ、非同期ファースト、タイプヒント、自動ドキュメント。エコシステムと実際の使用例。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-a102-7001-b002-fastapi000102
        title: 'レッスン 2: FastAPI の Python の基礎'
        slug: bai-2-python-essentials-cho-fastapi
        description: >-
          FastAPI の重要な Python レビュー: タイプ ヒント、データクラス、デコレーター、コンテキスト
          マネージャー、ジェネレーター、基本的な async/await。 Poetry/uv を使用した仮想環境と依存関係の管理。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-a103-7001-b002-fastapi000103
        title: 'レッスン 3: FastAPI プロジェクトのインストールと初期化'
        slug: bai-3-cai-dat-va-khoi-tao-fastapi-project
        description: >-
          FastAPI と Uvicorn
          をインストールし、プロジェクト構造を初期化し、標準のディレクトリ構造を理解します。開発サーバー、Swagger UI、ReDoc
          を実行し、最初の API エンドポイントを作成します。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-a104-7001-b002-fastapi000104
        title: 'レッスン 4: パスの操作、リクエストとレスポンス'
        slug: bai-4-path-operations-request-va-response
        description: >-
          パスパラメータ、クエリパラメータ、リクエストボディ、ヘッダー、Cookie。 HTTP メソッド、ステータス
          コード、応答モデル、JSONResponse。 Pydantic を使用すると、型検証が自動的に行われます。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'パート 2: Pydantic、データベース、ORM'
    description: Pydantic モデル、SQLAlchemy ORM、Alembic 移行、CRUD 操作
    sort_order: 2
    lessons:
      - id: 019d8b40-a201-7001-b002-fastapi000201
        title: 'レッスン 5: Pydantic V2 - データの検証とシリアル化'
        slug: bai-5-pydantic-v2-data-validation-va-serialization
        description: >-
          Pydantic BaseModel、フィールドバリデータ、model_validator、計算フィールド。カスタム タイプ、JSON
          スキーマの生成、pydantic-settings による設定管理。入れ子になったモデルと区別された共用体。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-a202-7001-b002-fastapi000202
        title: 'レッスン 6: SQLAlchemy 2.0 と非同期データベース'
        slug: bai-6-sqlalchemy-2-va-async-database
        description: >-
          宣言型マッピングを備えた SQLAlchemy 2.0 ORM、リレーションシップ (1-1、1-N、N-N)、asyncpg
          を備えた非同期エンジン。セッション管理、作業単位パターン。 PostgreSQL と MySQL を接続します。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-a203-7001-b002-fastapi000203
        title: 'レッスン 7: Alembic の移行とデータベースのシード'
        slug: bai-7-alembic-migrations-va-database-seeding
        description: >-
          非同期 SQLAlchemy の Alembic 構成、自動生成移行、移行戦略。データベースのシード、一括操作、生の
          SQL。マルチデータベースとスキーマのバージョン管理。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-a204-7001-b002-fastapi000204
        title: 'レッスン 8: CRUD 操作とリポジトリ パターン'
        slug: bai-8-crud-operations-va-repository-pattern
        description: >-
          完全な CRUD API、リポジトリ パターン、ページネーション、フィルタリング、並べ替えを構築します。 FastAPI での
          depends() による依存関係の注入。エラー処理とカスタム例外。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'パート 3: 認証とセキュリティ'
    description: OAuth2、JWT、パスワードハッシュ、RBAC、CORS、レート制限
    sort_order: 3
    lessons:
      - id: 019d8b40-a301-7001-b002-fastapi000301
        title: 'レッスン 9: OAuth2 と JWT による認証'
        slug: bai-9-authentication-voi-oauth2-va-jwt
        description: >-
          FastAPI、JWT アクセス トークン、およびリフレッシュ トークンでの OAuth2 パスワード フロー。
          Passlib/Bcrypt によるパスワードのハッシュ化。トークンのローテーション、ブラックリストへの登録。 OpenAPI
          のセキュリティ スキーム。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-a302-7001-b002-fastapi000302
        title: 'レッスン 10: 認可 - RBAC とアクセス許可'
        slug: bai-10-authorization-rbac-va-permissions
        description: FastAPI のロールベースのアクセス制御、権限ベースの承認。認可、デコレータ パターンのカスタム依存関係。マルチテナント認証戦略。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-a303-7001-b002-fastapi000303
        title: 'レッスン 11: セキュリティのベスト プラクティス'
        slug: bai-11-security-best-practices
        description: >-
          CORS 構成、SlowAPI によるレート制限、入力サニタイズ、SQL インジェクション防止。
          HTTPS、セキュリティヘッダー、環境変数管理。 FastAPI の OWASP トップ 10。
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-a304-7001-b002-fastapi000304
        title: 'レッスン 12: ソーシャル ログインと OAuth2 プロバイダー'
        slug: bai-12-social-login-va-oauth2-providers
        description: >-
          OAuth2 認証コード フロー、Google、GitHub、Facebook によるソーシャル ログイン。 Authlib
          の統合、アカウントのリンク、OpenID Connect。マルチプロバイダー認証戦略。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'パート 4: 高度な機能'
    description: ミドルウェア、WebSocket、バックグラウンド タスク、キャッシュ、ファイル アップロード、非同期の詳細
    sort_order: 4
    lessons:
      - id: 019d8b40-a401-7001-b002-fastapi000401
        title: 'レッスン 13: ミドルウェア、イベント、ライフスパン'
        slug: bai-13-middleware-events-va-lifespan
        description: >-
          HTTP ミドルウェア、ASGI ミドルウェア、Starlette ミドルウェア スタック。ライフスパン イベント
          (起動/シャットダウン)、アプリケーションの状態。ロギング、タイミング、リクエスト ID 追跡のためのカスタム ミドルウェア。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-a402-7001-b002-fastapi000402
        title: 'レッスン 14: WebSocket とリアルタイム通信'
        slug: bai-14-websockets-va-real-time-communication
        description: >-
          FastAPI の WebSocket エンドポイント、接続マネージャー、ブロードキャスト、ルーム パターン。リアルタイムチャット、通知。
          Server-Sent Events (SSE) とロングポーリングの代替手段。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-a403-7001-b002-fastapi000403
        title: 'レッスン 15: バックグラウンド タスク、セロリ、タスク キュー'
        slug: bai-15-background-tasks-celery-va-task-queues
        description: >-
          FastAPI BackgroundTasks、Redis/RabbitMQ ブローカーを備えた Celery、スケジュールされたタスク用の
          Celery Beat。タスクチェーン、エラー処理、再試行戦略。非同期タスク キューの ARQ および SAQ の代替手段。
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-a404-7001-b002-fastapi000404
        title: 'レッスン 16: ファイルのアップロード、キャッシュ、非同期の詳細'
        slug: bai-16-file-upload-caching-va-async-deep-dive
        description: >-
          ファイルアップロードストリーミング、UploadFile、マルチパートフォーム。 fastapi-cache2 を使用した Redis
          キャッシュ。非同期/待機の詳細: 非同期、同時タスク、セマフォ、非同期ジェネレーター。非同期 HTTP クライアントの場合は httpx。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'パート 5: アーキテクチャ、テスト、および運用'
    description: クリーンなアーキテクチャ、テスト、Docker、CI/CD、および実稼働デプロイメント
    sort_order: 5
    lessons:
      - id: 019d8b40-a501-7001-b002-fastapi000501
        title: 'レッスン 17: クリーンなアーキテクチャとプロジェクトの構造'
        slug: bai-17-clean-architecture-va-project-structure
        description: >-
          FastAPI
          のクリーンなアーキテクチャ、ドメイン駆動設計の基本。サービス層、リポジトリパターン、ユースケース。大規模アプリケーション向けのモジュール型プロジェクト構造。
          API のバージョン管理戦略。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-a502-7001-b002-fastapi000502
        title: 'レッスン 18: FastAPI でのテスト'
        slug: bai-18-testing-trong-fastapi
        description: >-
          pytest、TestClient、httpx.AsyncClient を使用した単体テスト。統合テスト、factory_boy
          を使用したデータベース フィクスチャ。依存関係をモックし、データベースの分離をテストします。コードカバレッジとテスト戦略。
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-a503-7001-b002-fastapi000503
        title: 'レッスン 19: FastAPI の Dockerize と CI/CD'
        slug: bai-19-dockerize-va-cicd-cho-fastapi
        description: >-
          FastAPI 用の Dockerfile マルチステージ ビルド、PostgreSQL を使用した Docker
          Compose、Redis、Celery ワーカー。 GitHub アクション CI/CD
          パイプライン。ヘルスチェック、正常なシャットダウン、Gunicorn + Uvicorn ワーカー。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-a504-7001-b002-fastapi000504
        title: 'レッスン 20: 実稼働環境の導入と監視'
        slug: bai-20-production-deployment-va-monitoring
        description: >-
          FastAPI を VPS/クラウド (AWS、GCP) にデプロイします。 Nginx リバース プロキシ、SSL/TLS。
          structlog によるログ記録、OpenTelemetry トレース。 Prometheus メトリクス、Grafana
          ダッシュボード。パフォーマンスのチューニング、接続プーリング、スケーリング戦略。
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
locale: ja
---

