---
id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
title: クラウドネイティブのマイクロサービスアーキテクチャ
slug: cloud-native-microservices-architecture
description: >-
  クラウド ネイティブ マイクロサービス アーキテクチャに関する包括的なシリーズ — コンテナ
  プラットフォーム、Kubernetes、マイクロサービスの設計原則 (DDD、境界コンテキスト)、通信モデル (REST、gRPC、イベントドリブン)
  から、データ管理 (CQRS、Saga、イベント ソーシング)、サービス メッシュ、オブザーバビリティ、復元パターン、CI/CD
  GitOps、セキュリティまで。実稼働システムのための確かな理論と実践的なアーキテクチャを組み合わせます。
featured_image: uploads/2026/03/cloud-native-microservices-series-banner-2026.png
level: intermediate
duration_hours: 70
lesson_count: 26
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
  - name: microservices
    slug: microservices
  - name: cloud-native
    slug: cloud-native
  - name: kubernetes
    slug: kubernetes
  - name: Docker
    slug: docker
  - name: system-design
    slug: system-design
  - name: API Gateway
    slug: api-gateway
  - name: service-mesh
    slug: service-mesh
  - name: event-driven
    slug: event-driven
  - name: DevOps
    slug: devops
  - name: observability
    slug: observability
  - name: CQRS
    slug: cqrs
  - name: gRPC
    slug: grpc
  - name: Kafka
    slug: kafka
  - name: Istio
    slug: istio
  - name: ArgoCD
    slug: argocd
  - name: security
    slug: security
  - name: production
    slug: production
sections:
  - id: section-01
    title: 'パート 1: クラウド ネイティブの基盤'
    description: クラウド ネイティブ プラットフォーム — 定義、原則、コンテナ、および Kubernetes の基本
    sort_order: 1
    lessons:
      - id: 019d8a22-c301-7a10-b001-a1b2c3d4e501
        title: 'レッスン 1: クラウドネイティブとは何ですか? — 原則と 12 要素アプリ'
        slug: bai-1-cloud-native-la-gi-nguyen-ly-va-twelve-factor-app
        description: >-
          CNCF に基づくクラウド ネイティブの定義、従来型とクラウド ネイティブの比較、12
          要素アプリ手法、および最新のアプリケーションにとってクラウド ネイティブが避けられないトレンドである理由。
        duration_minutes: 60
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a22-c302-7a10-b001-a1b2c3d4e502
        title: 'レッスン 2: コンテナーと Docker — アプリケーション パッケージング プラットフォーム'
        slug: bai-2-container-docker-nen-tang-dong-goi-ung-dung
        description: >-
          コンテナと VM、Docker アーキテクチャ、Dockerfile のベスト プラクティス、マルチステージ ビルド、イメージ セキュリティ
          スキャン、および基本的なコンテナ ネットワーキング。
        duration_minutes: 90
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a22-c303-7a10-b001-a1b2c3d4e503
        title: 'レッスン 3: Kubernetes アーキテクチャとコア概念'
        slug: bai-3-kubernetes-architecture-core-concepts
        description: >-
          Kubernetes アーキテクチャ (コントロール プレーン、ワーカー ノード)、コア リソース
          (ポッド、デプロイメント、サービス、ConfigMap、シークレット)、名前空間戦略、および Kubernetes
          がコンテナを自動的にオーケストレーションする方法。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'パート 2: マイクロサービスの設計と通信パターン'
    description: マイクロサービスの設計原則、DDD、サービス間通信モデル
    sort_order: 2
    lessons:
      - id: 019d8a22-c304-7a10-b001-a1b2c3d4e504
        title: 'レッスン 4: マイクロサービスの設計原則 — SRP、DDD、および境界付きコンテキスト'
        slug: bai-4-microservices-design-principles-srp-ddd-bounded-context
        description: >-
          マイクロサービスとは何か、単一責任の原則、ドメイン駆動設計、サービス境界を定義する境界コンテキスト、疎結合と高結合度、マイクロサービスを使用すべき場合と使用すべきでない場合。
        duration_minutes: 90
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a22-c305-7a10-b001-a1b2c3d4e505
        title: 'レッスン 5: 同期通信 — REST API と gRPC'
        slug: bai-5-synchronous-communication-rest-api-grpc
        description: >-
          REST API 設計のベスト プラクティス、gRPC と Protobuf、HTTP/2 多重化、REST と gRPC
          の比較、どちらを選択するか、API のバージョン管理戦略。
        duration_minutes: 90
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a22-c306-7a10-b001-a1b2c3d4e506
        title: 'レッスン 6: 非同期通信 — メッセージ キューとイベント ストリーミング'
        slug: bai-6-asynchronous-communication-message-queue-event-streaming
        description: >-
          メッセージ キュー (RabbitMQ) とイベント ストリーミング (Apache Kafka)、Pub/Sub
          パターン、ポイントツーポイント パターン、イベント スキーマ設計、冪等性、および同期ではなく非同期を選択する場合。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a22-c307-7a10-b001-a1b2c3d4e507
        title: 'レッスン 7: API ゲートウェイ パターン — Kong、APISIX、Envoy'
        slug: bai-7-api-gateway-pattern-kong-apisix-envoy
        description: >-
          API ゲートウェイとは何か、機能 (ルーティング、認証、レート制限、プロトコル変換)、Kong 対 APISIX 対 Envoy 対
          Traefik の比較、フロントエンド用バックエンド (BFF) パターン、Kubernetes での API ゲートウェイの構成。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'パート 3: マイクロサービスにおけるデータ管理'
    description: 分散データ管理 — サービスごとのデータベース、イベント ソーシング、CQRS、Saga パターン
    sort_order: 3
    lessons:
      - id: 019d8a22-c308-7a10-b001-a1b2c3d4e508
        title: 'レッスン 8: サービスごとのデータベースと多言語の永続性'
        slug: bai-8-database-per-service-polyglot-persistence
        description: >-
          サービスごとのデータベースの原則、データベースを共有しない理由、ポリグロット永続性 (サービスごとに適切な DB
          を選択する)、データ所有権、およびサービス間のデータ クエリ戦略。
        duration_minutes: 90
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a22-c309-7a10-b001-a1b2c3d4e509
        title: 'レッスン 9: イベント ソーシングと CQRS'
        slug: bai-9-event-sourcing-cqrs
        description: >-
          イベント ソーシング - 状態をイベント文字列として保存、イベント ストア、スナップショットの最適化。 CQRS — 個別のコマンド
          モデルとクエリ モデル、結果整合性、個別の読み取り/書き込みデータベース、CQRS をいつ使用するか。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a22-c310-7a10-b001-a1b2c3d4e510
        title: 'レッスン 10: Saga パターン — 分散トランザクション'
        slug: bai-10-saga-pattern-distributed-transactions
        description: >-
          2PC がマイクロサービス、Saga パターン (コレオグラフィーとオーケストレーション)、補償トランザクション、Saga
          Orchestrator の実装、エラー処理、デッド レター キューに適さない理由。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a22-c311-7a10-b001-a1b2c3d4e511
        title: 'レッスン 11: データ整合性パターン — 送信ボックス、CDC、および最終的な整合性'
        slug: bai-11-data-consistency-patterns-outbox-cdc-eventual-consistency
        description: >-
          実際の CAP 定理、結果整合性、送信ボックス パターン、Debezium による変更データ キャプチャ
          (CDC)、べき等コンシューマ、およびエンドツーエンドのデータ整合性戦略。
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-04
    title: 'パート 4: サービス メッシュとネットワーキング'
    description: サービス メッシュ、サービス ディスカバリ、mTLS、およびゼロトラスト ネットワーキング
    sort_order: 4
    lessons:
      - id: 019d8a22-c312-7a10-b001-a1b2c3d4e512
        title: 'レッスン 12: サービスの検出とレジストリ'
        slug: bai-12-service-discovery-registry
        description: >-
          クライアント側とサーバー側の検出、サービス レジストリ (Consul、etcd)、Kubernetes DNS ベースの検出、ヘルス
          チェック、負荷分散アルゴリズム、およびサービス エンドポイント管理。
        duration_minutes: 90
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a22-c313-7a10-b001-a1b2c3d4e513
        title: 'レッスン 13: サービス メッシュ — Istio と Linkerd'
        slug: bai-13-service-mesh-istio-linkerd
        description: >-
          サービス メッシュ アーキテクチャ (データ プレーン + コントロール プレーン)、サイドカー プロキシ パターン、Istio
          コンポーネント (パイロット、シタデル、ギャレー)、トラフィック管理 (カナリア、A/B)、Istio と Linkerd
          の比較、Kubernetes でのインストールと構成。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a22-c314-7a10-b001-a1b2c3d4e514
        title: 'レッスン 14: ゼロトラスト セキュリティと mTLS'
        slug: bai-14-zero-trust-security-mtls
        description: >-
          ゼロトラスト アーキテクチャの原則、サービス間の相互 TLS (mTLS)、自動証明書管理、サービス
          メッシュの承認ポリシー、Kubernetes のネットワーク ポリシー。
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
  - id: section-05
    title: 'パート 5: 可観測性 — 3 つの柱'
    description: メトリクス、ロギング、分散トレース、OpenTelemetry
    sort_order: 5
    lessons:
      - id: 019d8a22-c315-7a10-b001-a1b2c3d4e515
        title: 'レッスン 15: メトリクス — プロメテウスとグラファナ'
        slug: bai-15-metrics-prometheus-grafana
        description: >-
          RED メソッド、USE メソッド、Prometheus アーキテクチャ、基本的な PromQL、Kubernetes の
          ServiceMonitor、Grafana ダッシュボード設計、アラート ルール、および Alertmanager 構成。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a22-c316-7a10-b001-a1b2c3d4e516
        title: 'レッスン 16: ロギング — 構造化ロギング、Loki および ELK スタック'
        slug: bai-16-logging-structured-logging-loki-elk
        description: >-
          構造化されたログ記録のベスト プラクティス、ログ レベル戦略、Fluent Bit ログ収集、Loki と
          Elasticsearch、LogQL、traceId とのログ相関、ログ保持ポリシー、コストの最適化。
        duration_minutes: 90
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a22-c317-7a10-b001-a1b2c3d4e517
        title: 'レッスン 17: 分散トレーシング — OpenTelemetry と Yeter'
        slug: bai-17-distributed-tracing-opentelemetry-jaeger
        description: >-
          分散トレーシングの概念 (トレース、スパン、コンテキスト伝播)、OpenTelemetry SDK インストルメンテーション、OTLP
          プロトコル、OpenTelemetry Collector 構成、Jaeger/Tempo バックエンド、トレース分析、およびパフォーマンス
          デバッグ。
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
  - id: section-06
    title: 'パート 6: 回復力パターン'
    description: サーキット ブレーカー、再試行、バルクヘッド、カオス エンジニアリング、フォールト トレランス
    sort_order: 6
    lessons:
      - id: 019d8a22-c318-7a10-b001-a1b2c3d4e518
        title: 'レッスン 18: サーキット ブレーカーと再試行パターン'
        slug: bai-18-circuit-breaker-retry-patterns
        description: >-
          サーキット ブレーカーの状態 (クローズ、オープン、ハーフ オープン)、指数バックオフとジッターによる再試行、タイムアウト
          パターン、フォールバック戦略、Resilience4j/Polly による実装、カスケード障害の防止。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a22-c319-7a10-b001-a1b2c3d4e519
        title: 'レッスン 19: バルクヘッド、レート制限、ヘルス チェック パターン'
        slug: bai-19-bulkhead-rate-limiting-health-check-patterns
        description: >-
          バルクヘッド パターン (スレッド プール分離)、レート制限アルゴリズム (トークン バケット、スライディング ウィンドウ)、ヘルス
          チェック パターン (活性、準備完了、起動プローブ)、グレースフル デグラデーション戦略。
        duration_minutes: 90
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a22-c320-7a10-b001-a1b2c3d4e520
        title: 'レッスン 20: カオス エンジニアリング — システムの信頼性の検証'
        slug: bai-20-chaos-engineering-kiem-chung-do-tin-cay
        description: >-
          カオス エンジニアリングの原則、カオス
          モンキーとリトマスカオス、カオス実験の設計、定常状態の仮説、爆発範囲の制御、試合日、回復力の文化の構築。
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-07
    title: 'パート 7: CI/CD および導入戦略'
    description: CI/CD パイプライン、ArgoCD を使用した GitOps、および安全な導入戦略
    sort_order: 7
    lessons:
      - id: 019d8a22-c321-7a10-b001-a1b2c3d4e521
        title: 'レッスン 21: マイクロサービス用の CI/CD パイプライン'
        slug: bai-21-cicd-pipeline-cho-microservices
        description: >-
          マルチサービスの CI/CD アーキテクチャ、サービスごとのパイプライン、ビルド → テスト → スキャン → デプロイ フロー、コンテナ
          イメージのビルドとプッシュ、自動テスト戦略 (ユニット、統合、コントラクト、E2E)、モノリポジトリとポリリポジトリの CI/CD。
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a22-c322-7a10-b001-a1b2c3d4e522
        title: 'レッスン 22: ArgoCD を使用した GitOps'
        slug: bai-22-gitops-voi-argocd
        description: >-
          GitOps の原則 (信頼できる唯一の情報源としての Git)、ArgoCD アーキテクチャ、アプリケーション
          マニフェスト、同期ポリシー、マルチ環境用のカスタム オーバーレイ、自動ロールバック、マルチクラスター用の ApplicationSet。
        duration_minutes: 90
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a22-c323-7a10-b001-a1b2c3d4e523
        title: 'レッスン 23: 導入戦略 — カナリア、ブルー/グリーン、プログレッシブ配信'
        slug: bai-23-deployment-strategies-canary-blue-green-progressive-delivery
        description: >-
          ローリング アップデート、ブルー/グリーン デプロイメント、カナリア リリース、A/B テスト、Argo
          ロールアウト/フラッガーによるプログレッシブ配信、自動カナリア分析、ロールバック戦略、機能フラグ。
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
  - id: section-08
    title: 'パート 8: セキュリティと本番環境の準備'
    description: セキュリティ、機密管理、実稼働準備チェックリスト
    sort_order: 8
    lessons:
      - id: 019d8a22-c324-7a10-b001-a1b2c3d4e524
        title: 'レッスン 24: 認証と認可 — OAuth2、JWT、OIDC'
        slug: bai-24-authentication-authorization-oauth2-jwt-oidc
        description: >-
          OAuth2 フロー、JWT 構造と検証、OpenID Connect、Keycloak/Auth0
          による集中認証、マイクロサービスでのトークン伝播、API ゲートウェイ認証統合、RBAC と ABAC。
        duration_minutes: 120
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a22-c325-7a10-b001-a1b2c3d4e525
        title: 'レッスン 25: シークレット管理とコンテナーのセキュリティ'
        slug: bai-25-secrets-management-container-security
        description: >-
          HashiCorp Vault、動的シークレット、Kubernetes シークレット + シールされたシークレット、CSI シークレット
          ストア ドライバー、コンテナー イメージ スキャン (Trivy)、ポッド セキュリティ標準、ランタイム セキュリティ
          (Falco)、サプライ チェーン セキュリティ (Sigstore/Cosign)。
        duration_minutes: 90
        is_free: true
        sort_order: 25
        video_url: null
      - id: 019d8a22-c326-7a10-b001-a1b2c3d4e526
        title: 'レッスン 26: 実稼働準備チェックリストと実装ロードマップ'
        slug: bai-26-production-readiness-checklist-lo-trinh-trien-khai
        description: >-
          アーキテクチャ決定チェックリスト、推奨されるテクノロジー スタック、4 段階の実装ロードマップ (基盤 → コア プラットフォーム →
          アドバンスト → 最適化)、キャパシティ プランニング、コストの最適化、ランブック テンプレート、および災害復旧計画。
        duration_minutes: 90
        is_free: true
        sort_order: 26
        video_url: null
locale: ja
---

