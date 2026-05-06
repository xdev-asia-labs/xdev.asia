---
id: 019d8b40-c100-7001-b004-django00000001
title: 'Django: 基本から上級まで'
slug: django-tu-co-ban-den-nang-cao
description: >-
  基本から上級までの包括的な Django コース。最も強力なフルスタック Python フレームワークをマスターするのに役立ちます。 Django
  ORM、Django REST フレームワーク、クラスベースのビュー、認証、Celery、チャネル
  (WebSocket)、テスト、Docker、実稼働デプロイメントが含まれます。最新の 2026 年のベスト プラクティスを適用して、Django 5.2
  以降および Python 3.12 以降に更新されました。
featured_image: uploads/2026/03/django-banner-v2.png
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
  - name: Django
    slug: django
  - name: Backend
    slug: backend
  - name: rest-api
    slug: rest-api
  - name: DRF
    slug: drf
  - name: Django REST Framework
    slug: django-rest-framework
  - name: ORM
    slug: orm
  - name: Celery
    slug: celery
  - name: Channels
    slug: channels
  - name: Docker
    slug: docker
  - name: Testing
    slug: testing
  - name: PostgreSQL
    slug: postgresql
  - name: Redis
    slug: redis
  - name: WebSocket
    slug: websocket
  - name: Full-Stack
    slug: full-stack
sections:
  - id: section-01
    title: 'パート 1: Django の基礎'
    description: Django、MVT パターン、モデル、ビュー、テンプレート、URL ルーティングをインストールする
    sort_order: 1
    lessons:
      - id: 019d8b40-c101-7001-b004-django00000101
        title: 'レッスン 1: Django の紹介 - 完璧主義者のための Web フレームワーク'
        slug: bai-1-gioi-thieu-django
        description: >-
          Django の「バッテリー付き」哲学とは何ですか? Django、FastAPI、Flask、Laravel を比較します。 MVT
          アーキテクチャ、Django エコシステム。最初のプロジェクトとアプリをインストールして作成します。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8b40-c102-7001-b004-django00000102
        title: 'レッスン 2: モデルと Django ORM'
        slug: bai-2-models-va-django-orm
        description: >-
          Django ORM、モデル フィールド、リレーションシップ (ForeignKey、OneToOne、ManyToMany)。メタ
          オプション、マネージャー、カスタム クエリセット。移行 CLI、データベース ルーター。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8b40-c103-7001-b004-django00000103
        title: 'レッスン 3: ビュー、URL、テンプレート'
        slug: bai-3-views-urls-va-templates
        description: >-
          関数ベースのビュー、URL ルーティング、URL 名前空間。 Django テンプレート言語、テンプレートの継承、カスタム テンプレート
          タグ/フィルター。静的ファイル、メディア ファイル。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8b40-c104-7001-b004-django00000104
        title: 'レッスン 4: クラスベースのビューとフォーム'
        slug: bai-4-class-based-views-va-forms
        description: >-
          クラスベースのビュー (ListView、DetailView、CreateView、UpdateView、DeleteView)。
          Django フォーム、ModelForms、フォームセット。 CSRF 保護、フォーム検証、ファイルのアップロード。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'パート 2: Django REST フレームワーク'
    description: DRF シリアライザー、ビューセット、ルーター、ページネーション、フィルタリング、スロットリング
    sort_order: 2
    lessons:
      - id: 019d8b40-c201-7001-b004-django00000201
        title: 'レッスン 5: Django REST フレームワーク - シリアライザーとビュー'
        slug: bai-5-drf-serializers-va-views
        description: >-
          DRF セットアップ、シリアライザー (シリアライザー、ModelSerializer、ネストされたシリアライザー)。
          APIView、GenericAPIView、ミックスイン。リクエスト/レスポンス オブジェクト、ステータス コード、コンテンツ
          ネゴシエーション。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8b40-c202-7001-b004-django00000202
        title: 'レッスン 6: ビューセット、ルーター、ページネーション'
        slug: bai-6-viewsets-routers-va-pagination
        description: >-
          ModelViewSet、カスタム アクション。 DefaultRouter、ネストされたルーター。ページネーション
          (PageNumber、LimitOffset、カーソル)。
          django-filter、SearchFilter、OrderingFilter によるフィルタリング。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8b40-c203-7001-b004-django00000203
        title: 'レッスン 7: 高度なシリアライザーと検証'
        slug: bai-7-advanced-serializers-va-validation
        description: >-
          WritableNestedSerializer、多態性シリアライザー。フィールドレベル、オブジェクトレベルの検証。
          SerializerMethodField、カスタム フィールド。 select_関連/プリフェッチ関連による N+1 クエリの最適化。
        duration_minutes: 120
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8b40-c204-7001-b004-django00000204
        title: 'レッスン 8: バージョニング、スロットリング、API ドキュメント'
        slug: bai-8-versioning-throttling-va-api-docs
        description: >-
          API のバージョン管理戦略。スロットリング (AnonRate、UserRate、ScopedRate)。 OpenAPI/Swagger
          と Drf-spectacular。 DRF テスト クライアントを使用した API テスト。
        duration_minutes: 90
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'パート 3: 認証とセキュリティ'
    description: Django 認証、JWT、OAuth2、権限、セキュリティのベスト プラクティス
    sort_order: 3
    lessons:
      - id: 019d8b40-c301-7001-b004-django00000301
        title: 'レッスン 9: 認証 - セッション、トークン、JWT'
        slug: bai-9-authentication-session-token-va-jwt
        description: >-
          Django 認証システム、カスタム ユーザー
          モデル。セッション認証、トークン認証、djangorestframework-simplejwt による
          JWT。トークンの更新、ブラックリストへの登録。多要素認証。
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8b40-c302-7001-b004-django00000302
        title: 'レッスン 10: 権限と認可'
        slug: bai-10-permissions-va-authorization
        description: >-
          DRF 権限
          (IsAuthenticated、IsAdminUser、カスタム権限)。オブジェクトレベルの権限、django-guardian。
          Django のグループと権限、RBAC パターン。ジャンゴルール。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8b40-c303-7001-b004-django00000303
        title: 'レッスン 11: ソーシャル認証と OAuth2'
        slug: bai-11-social-auth-va-oauth2
        description: >-
          ソーシャル認証用の django-allauth。 Google、GitHub、Facebook のログイン。
          django-oauth-toolkit を使用した OAuth2 プロバイダー。アカウントのリンク、メール認証。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8b40-c304-7001-b004-django00000304
        title: 'レッスン 12: セキュリティのベスト プラクティス'
        slug: bai-12-security-best-practices
        description: >-
          CSRF、XSS、SQL インジェクション保護。 django-cors-headers を使用した
          CORS。レート制限、セキュリティミドルウェア。コンテンツ セキュリティ ポリシー、django-csp。 Django の OWASP
          トップ 10。
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'パート 4: 高度な機能'
    description: Django チャネル、Celery、キャッシュ、シグナル、管理者のカスタマイズ
    sort_order: 4
    lessons:
      - id: 019d8b40-c401-7001-b004-django00000401
        title: 'レッスン 13: Django 管理者のカスタマイズ'
        slug: bai-13-django-admin-customization
        description: >-
          ModelAdmin のカスタマイズ、list_display、list_filter、search_fields。インライン
          モデル、カスタム管理アクション、管理ウィジェット。最新の管理 UI 用の django-unfold。
        duration_minutes: 90
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8b40-c402-7001-b004-django00000402
        title: 'レッスン 14: Django チャネルと WebSocket'
        slug: bai-14-django-channels-va-websockets
        description: >-
          Django チャネル、ASGI、チャネル レイヤー (Redis)。 WebSocket
          コンシューマー、グループ、ブロードキャスト。リアルタイムチャットアプリ。チャネルを持つバックグラウンド ワーカー。
        duration_minutes: 150
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8b40-c403-7001-b004-django00000403
        title: 'レッスン 15: セロリ、シグナル、キャッシング'
        slug: bai-15-celery-signals-va-caching
        description: >-
          Redis/RabbitMQ を使用した Celery、定期的なタスク (Celery Beat)。 Django
          シグナル、カスタムシグナル。 Django キャッシュ フレームワーク、Redis キャッシュ、キャッシュ パターン。ジャンゴ・カシャロ。
        duration_minutes: 150
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8b40-c404-7001-b004-django00000404
        title: 'レッスン 16: ファイル ストレージ、電子メール、通知'
        slug: bai-16-file-storage-email-va-notifications
        description: >-
          Django ストレージ バックエンド、S3 と django-storage。
          Pillowによる画像処理。メール送信、テンプレート。プッシュ通知、django-notifications-hq。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'パート 5: テスト、展開、実稼働'
    description: テスト、Docker、CI/CD、モニタリング、パフォーマンスの最適化
    sort_order: 5
    lessons:
      - id: 019d8b40-c501-7001-b004-django00000501
        title: 'レッスン 17: Django でのテスト'
        slug: bai-17-testing-trong-django
        description: >-
          Django テストケース、pytest-django。ファクトリーボーイ、パン屋モデル。 DRF テスト クライアントを使用した API
          テスト。カバレッジレポート、テスト戦略。モッキング、フィクスチャ、トランザクション テスト。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8b40-c502-7001-b004-django00000502
        title: 'レッスン 18: パフォーマンスの最適化'
        slug: bai-18-performance-optimization
        description: >-
          QuerySet optimization, select_related/prefetch_related, Subquery, F/Q
          objects. Database indexing, query analysis. Django Debug Toolbar,
          django-silk profiling. Async views.
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8b40-c503-7001-b004-django00000503
        title: 'レッスン 19: Django の Docker と CI/CD'
        slug: bai-19-docker-va-cicd-cho-django
        description: >-
          Django 用の Dockerfile マルチステージ ビルド。 Docker Compose (Django + PostgreSQL
          + Redis + Celery + Nginx)。 GitHub アクション CI/CD パイプライン。 Gunicorn
          構成、静的ファイルの提供。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8b40-c504-7001-b004-django00000504
        title: 'レッスン 20: 実稼働環境の導入と監視'
        slug: bai-20-production-deployment-va-monitoring
        description: >-
          Django + Nginx + Gunicorn をデプロイします。セントリーエラー追跡、構造化ログ。 Prometheus
          メトリクス、Grafana ダッシュボード。 Django のヘルスチェック、スケーリング戦略、ダウンタイムなしの展開。
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
locale: ja
---

コース **Django: 基本から上級まで** は、MVT パターンから本番対応の REST API まで、Web 開発用の最も強力な「バッテリー付属」Python フレームワークである Django をマスターできるように設計されています。

## 何を学ぶのですか?

- **Django コア**: モデル、ビュー、テンプレート、URL ルーティング、フォーム、管理
- **Django REST フレームワーク**: シリアライザー、ビューセット、ルーター、ページネーション、フィルタリング
- **認証**: セッション、JWT、OAuth2、ソーシャル ログイン、権限
- **上級**: チャネル (WebSocket)、Celery、キャッシュ、シグナル、ファイル ストレージ
- **本番**: テスト、Docker、CI/CD、モニタリング、パフォーマンスの最適化

## リクエスト

- Python の基本的な知識 (関数、クラス、モジュール)
- HTTP、HTML、SQL の基本的な理解
- Python 3.12 以降と Docker がインストールされたコンピューター
