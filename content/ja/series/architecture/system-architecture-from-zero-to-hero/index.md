---
id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
title: 'システムアーキテクチャ: ゼロからヒーローへ'
slug: system-architecture-from-zero-to-hero
description: >-
  システムアーキテクチャコースは、基礎から応用までを網羅しており、大規模システムの設計方法を習得するのに役立ちます。スケーラビリティ、可用性、一貫性、マイクロサービス、イベントドリブン、CQRS
  などのアーキテクチャ パターン、およびロード バランサ、CDN、キャッシュ、メッセージ キュー、データベース スケーリングなどのインフラストラクチャ
  コンポーネントに関する基本的な知識が含まれます。このコースでは、理論と
  Netflix、Uber、Twitter、その他の大規模システムの実際のケーススタディを組み合わせます。 2026
  年の現代建築トレンドに従って更新されました。
featured_image: uploads/2026/03/system-architecture-series-banner-2026.png
level: intermediate
duration_hours: 80
lesson_count: 30
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-30T10:00:00.000000Z'
created_at: '2026-03-30T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019d8a21-b200-7001-c001-a1b2c3d4e5f6
  name: システムアーキテクチャ
  slug: kien-truc-he-thong
tags:
  - name: SystemDesign
    slug: system-design
  - name: Architecture
    slug: architecture
  - name: Microservices
    slug: microservices
  - name: DistributedSystems
    slug: distributed-systems
  - name: Scalability
    slug: scalability
  - name: HighAvailability
    slug: high-availability
  - name: LoadBalancer
    slug: loadbalancer
  - name: Caching
    slug: caching
  - name: Database
    slug: database
  - name: MessageQueue
    slug: message-queue
  - name: EventDriven
    slug: event-driven
  - name: CQRS
    slug: cqrs
  - name: CDN
    slug: cdn
  - name: API
    slug: api
  - name: cloud-native
    slug: cloud-native
  - name: security
    slug: security
  - name: monitoring
    slug: monitoring
  - name: production
    slug: production
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: 'パート 1: システム設計の基礎'
    description: システム設計上の問題に対する中心的な概念とアプローチを理解する
    sort_order: 1
    lessons:
      - id: 019d8a21-c101-7001-d001-e1f2a3b4c501
        title: 'レッスン 1: システム設計とは何ですか? - 概要とロードマップ'
        slug: bai-1-system-design-la-gi-tong-quan-va-roadmap
        description: >-
          システム設計について紹介し、システム設計が必要な理由、システム設計の問題 (要件 → 高レベル設計 → 詳細 → ボトルネック)
          へのアプローチ方法を紹介します。モノリス システムと分散システムを比較します。学習ロードマップと必要なリソース。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-c102-7001-d001-e1f2a3b4c502
        title: 'レッスン 2: パフォーマンスとスケーラビリティ - 垂直方向と水平方向のスケーリング'
        slug: bai-2-performance-vs-scalability-vertical-horizontal-scaling
        description: >-
          パフォーマンスとスケーラビリティを区別してください。垂直スケーリング (スケールアップ) と水平スケーリング
          (スケールアウト)。ステートレス アーキテクチャとステートフル
          アーキテクチャ。どのスケーリング戦略をいつ選択すればよいでしょうか?裏側の計算と基本的な容量計画。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-c103-7001-d001-e1f2a3b4c503
        title: 'レッスン 3: レイテンシーとスループット、および可用性と一貫性'
        slug: bai-3-latency-vs-throughput-availability-vs-consistency
        description: >-
          レイテンシー、スループット、およびそれらの関係。 CAP 定理 (一貫性、可用性、パーティション耐性)。 CP システムと AP
          システム。一貫性パターン (強い、結果的、弱い)。可用性パターン (フェイルオーバー、レプリケーション)。数値で表される可用性
          (99.9%、99.99%)。
        duration_minutes: 150
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8a21-c104-7001-d001-e1f2a3b4c504
        title: 'レッスン 4: システム設計のためのネットワークの基礎'
        slug: bai-4-networking-fundamentals-cho-system-design
        description: >-
          DNS とその仕組み。 TCP と UDP。 HTTP/HTTPS、HTTP/2、HTTP/3。 WebSocket
          およびサーバー送信イベント。 REST、RPC、GraphQL。すべてのプログラマが知っておくべきレイテンシの数値。
        duration_minutes: 130
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'パート 2: インフラストラクチャ コンポーネント'
    description: システムアーキテクチャにおける最も重要な構成要素についての深い理解
    sort_order: 2
    lessons:
      - id: 019d8a21-c105-7001-d001-e1f2a3b4c505
        title: 'レッスン 5: ロード バランサー - インテリジェントな負荷分散'
        slug: bai-5-load-balancer-phan-phoi-tai-thong-minh
        description: >-
          ロードバランサーとは何ですか?なぜ必要ですか?レイヤ 4 とレイヤ 7 の負荷分散。アルゴリズム: ラウンド ロビン、最小接続、IP
          ハッシュ、重み付け。リバースプロキシとロードバランサー。健康診断。アクティブ-アクティブとアクティブ-パッシブ。 HAProxy と
          Nginx の実践。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-c106-7001-d001-e1f2a3b4c506
        title: 'レッスン 6: CDN (コンテンツ配信ネットワーク) - グローバル アクセラレーション'
        slug: bai-6-cdn-content-delivery-network-tang-toc-toan-cau
        description: >-
          CDN とは何ですか?またどのように機能しますか?プッシュ CDN とプル CDN の比較。キャッシュ無効化戦略。多層 CDN
          アーキテクチャ。エッジコンピューティング。 CloudFlare、AWS CloudFront、Fastly
          を比較します。ユースケースとアンチパターン。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-c107-7001-d001-e1f2a3b4c507
        title: 'レッスン 7: キャッシュ戦略 - キャッシュを使用してパフォーマンスを最適化する'
        slug: bai-7-caching-strategies-toi-uu-hieu-nang-voi-cache
        description: >-
          キャッシュ層: クライアント、CDN、Web サーバー、アプリケーション、データベース。キャッシュ パターン: キャッシュ
          アサイド、ライトスルー、ライトビハインド、リフレッシュ アヘッド。キャッシュエビクションポリシー (LRU、LFU、TTL)。 Redis
          対 Memcached。キャッシュスタンピード、サンダーリングハードとその対処方法。分散キャッシュ。
        duration_minutes: 180
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8a21-c108-7001-d001-e1f2a3b4c508
        title: 'レッスン 8: リバース プロキシと API ゲートウェイ'
        slug: bai-8-reverse-proxy-va-api-gateway
        description: >-
          リバース プロキシ: SSL 終端、圧縮、セキュリティ。 API ゲートウェイ パターン: ルーティング、認証、レート制限、スロットル。
          Nginx、Envoy、Kong、AWS API Gateway を比較します。サービス メッシュの概念 (Istio、Linkerd)。
          BFF (フロントエンド用バックエンド) パターン。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'パート 3: データベース アーキテクチャとデータ管理'
    description: 大規模システム向けデータベースの設計・拡張
    sort_order: 3
    lessons:
      - id: 019d8a21-c109-7001-d001-e1f2a3b4c509
        title: 'レッスン 9: SQL と NoSQL - 適切なデータベースを選択する'
        slug: bai-9-sql-vs-nosql-chon-database-phu-hop
        description: >-
          RDBMS と ACID のプロパティ。 NoSQL カテゴリ: Key-Value (Redis、DynamoDB)、ドキュメント
          (MongoDB、CouchDB)、ワイドカラム (Cassandra、HBase)、グラフ (Neo4j)。ベースとアシッド。 SQL
          を選択する場合と NoSQL を選択する場合。ポリグロットの永続性。 NewSQL (CockroachDB、TiDB)。
        duration_minutes: 160
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-c110-7001-d001-e1f2a3b4c510
        title: 'レッスン 10: データベース レプリケーション - マスター/スレーブおよびマスター/マスター'
        slug: bai-10-database-replication-master-slave-master-master
        description: >-
          レプリケーションとは何ですか?なぜレプリケーションが必要なのでしょうか?同期レプリケーションと非同期レプリケーション。マスター/スレーブ:
          リードレプリカ、フェイルオーバー、プロモーション。マスター-マスター: 競合解決、スプリットブレイン。レプリケーション ラグとその対処方法。
          PostgreSQL ストリーミング レプリケーションの実践。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a21-c111-7001-d001-e1f2a3b4c511
        title: 'レッスン 11: データベースのシャーディングとパーティショニング'
        slug: bai-11-database-sharding-partitioning
        description: >-
          シャーディング戦略:
          ハッシュベース、範囲ベース、地理ベース、ディレクトリベース。一貫したハッシュ。シャードキーの選択。クロスシャードのクエリと結合。シャードのバランスを再調整します。フェデレーション
          (機能分割)。非正規化のトレードオフ。実際のケース: Instagram、Pinterest。
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8a21-c112-7001-d001-e1f2a3b4c512
        title: 'レッスン 12: データ ストレージ パターン - オブジェクト ストレージ、データ レイク、時系列'
        slug: bai-12-data-storage-patterns-object-storage-data-lake-time-series
        description: >-
          オブジェクトストレージ (S3、MinIO)。データレイクとデータウェアハウス。時系列データベース
          (InfluxDB、TimescaleDB)。検索エンジン (Elasticsearch)。 BLOB
          ストレージのパターン。データライフサイクル管理。ホット/ウォーム/コールドストレージ階層。
        duration_minutes: 140
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'パート 4: 非同期処理と通信'
    description: メッセージ キュー、イベント駆動型アーキテクチャ、および非同期処理パターン
    sort_order: 4
    lessons:
      - id: 019d8a21-c113-7001-d001-e1f2a3b4c513
        title: 'レッスン 13: メッセージ キューとタスク キュー'
        slug: bai-13-message-queues-task-queues
        description: >-
          Message Queue とは何ですか?いつ使用する必要がありますか?ポイントツーポイント モデルと Pub/Sub モデル。
          RabbitMQ、Apache Kafka、AWS SQS、Redis ストリームを比較します。タスクキュー
          (Celery、Sidekiq)。デッドレターキュー。背圧と流量制御。べき等性と 1 回限りの処理。
        duration_minutes: 180
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-c114-7001-d001-e1f2a3b4c514
        title: 'レッスン 14: イベント駆動型アーキテクチャ (EDA)'
        slug: bai-14-event-driven-architecture
        description: >-
          イベント駆動型アーキテクチャ パターン。イベントソーシング。 CQRS
          (コマンドクエリ責任分離)。イベントストアのデザイン。分散トランザクション用の Saga パターン。振り付けとオーケストレーション。
          Apache Kafka の詳細。実際のケース: 銀行業務、電子商取引の注文処理。
        duration_minutes: 200
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8a21-c115-7001-d001-e1f2a3b4c515
        title: 'レッスン 15: ストリーム処理とリアルタイム データ パイプライン'
        slug: bai-15-stream-processing-real-time-data-pipelines
        description: >-
          バッチ処理とストリーム処理。 Apache Kafka ストリーム。 Apache Flink、Spark
          ストリーミング。リアルタイム分析パイプラインの設計。 Debezium による変更データ キャプチャ (CDC)。ラムダ
          アーキテクチャとカッパ アーキテクチャ。実際のケース: 不正行為の検出、ライブ ダッシュボード。
        duration_minutes: 160
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-05
    title: 'パート 5: アーキテクチャ パターン'
    description: 人気のある建築モデルとそれを実際に適用する方法
    sort_order: 5
    lessons:
      - id: 019d8a21-c116-7001-d001-e1f2a3b4c516
        title: 'レッスン 16: モノリスからマイクロサービスへ - 変革戦略'
        slug: bai-16-monolith-to-microservices-chien-luoc-chuyen-doi
        description: >-
          モノリシック アーキテクチャ: 長所と短所。マイクロサービス アーキテクチャ:
          原則、利点、課題。ストラングラーフィグパターン。サービス分解戦略 (ビジネス能力別、サブドメイン別)。サービスごとのデータベース。 API
          構成。共有ライブラリと共有なし。
        duration_minutes: 180
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-c117-7001-d001-e1f2a3b4c517
        title: 'レッスン 17: サービス通信パターン'
        slug: bai-17-service-communication-patterns
        description: >-
          同期通信: REST、gRPC、GraphQL。非同期通信: メッセージ キュー、イベント。サービスディスカバリ (Consul
          など)。サーキットブレーカーパターン (Resilience4j)。再試行、タイムアウト、バルクヘッドのパターン。サイドカーのパターン。
          API のバージョン管理戦略。
        duration_minutes: 170
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-c118-7001-d001-e1f2a3b4c518
        title: 'レッスン 18: システム アーキテクチャのドメイン駆動設計 (DDD)'
        slug: bai-18-domain-driven-design-cho-system-architecture
        description: >-
          DDD 戦略パターン: 境界付きコンテキスト、ユビキタス言語、コンテキスト マッピング。 DDD 戦術パターン:
          集約、エンティティ、値オブジェクト、ドメイン イベント、リポジトリ。腐敗防止層。 DDD
          を適用してマイクロサービスを分解します。イベントストーミングワークショップ。
        duration_minutes: 190
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a21-c119-7001-d001-e1f2a3b4c519
        title: 'レッスン 19: サーバーレスおよびクラウドネイティブのアーキテクチャ'
        slug: bai-19-serverless-cloud-native-architecture
        description: >-
          サーバーレス アーキテクチャ: AWS Lambda、Google Cloud Functions。 FaaS (Function as a
          Service) パターン。 12-Factor アプリの方法論。クラウドネイティブの原則。コンテナ
          オーケストレーションの概要。プラットフォームエンジニアリング。サーバーレスの場合とコンテナの場合。コスト最適化戦略。
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-06
    title: 'パート 6: 信頼性、セキュリティ、可観測性'
    description: 実稼働システムの信頼性、安全性、監視性を確保する
    sort_order: 6
    lessons:
      - id: 019d8a21-c120-7001-d001-e1f2a3b4c520
        title: 'レッスン 20: 高可用性とフォールト トレランス'
        slug: bai-20-high-availability-fault-tolerance
        description: >-
          失敗に備えた設計。冗長性戦略。アクティブ-アクティブ HA とアクティブ-パッシブ
          HA。ヘルスチェックと自己修復。優雅な劣化。機能フラグ。ブルーグリーン展開対カナリア。ゼロダウンタイムの導入。カオス エンジニアリングの基本
          (Netflix Chaos Monkey)。
        duration_minutes: 180
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8a21-c121-7001-d001-e1f2a3b4c521
        title: 'レッスン 21: 災害復旧とマルチリージョン アーキテクチャ'
        slug: bai-21-disaster-recovery-multi-region-architecture
        description: >-
          RPO (目標復旧時点) と RTO (目標復旧時間)。 DR 戦略: バックアップと復元、パイロット ライト、ウォーム
          スタンバイ、マルチサイト アクティブ/アクティブ。リージョン間のレプリケーション。グローバル負荷分散。リージョン間でのデータの一貫性。 DR
          テストとランブック。
        duration_minutes: 170
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a21-c122-7001-d001-e1f2a3b4c522
        title: 'レッスン 22: セキュリティ アーキテクチャ - 多層防御'
        slug: bai-22-security-architecture-defense-in-depth
        description: >-
          セキュリティ アーキテクチャの原則。認証: OAuth 2.0、OIDC、JWT、mTLS。認可: RBAC、ABAC、ReBAC。 API
          セキュリティ: レート制限、入力検証、CORS。ネットワーク セキュリティ:
          VPC、ファイアウォール、WAF。保存中および転送中のデータ暗号化。ゼロトラストアーキテクチャ。秘密管理 (Vault)。
        duration_minutes: 190
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-c123-7001-d001-e1f2a3b4c523
        title: 'レッスン 23: 可観測性 - モニタリング、ロギング、トレース'
        slug: bai-23-observability-monitoring-logging-tracing
        description: >-
          可観測性の 3 つの柱: メトリクス、ログ、トレース。 Prometheus + Grafana によるモニタリング。 ELK/Loki
          による集中ログ。 Yeter/Tempo による分散トレーシング。 OpenTelemetry 標準。アラート戦略。 SLI、SLO、SLA
          の定義。エラーバジェット。ランブックとインシデント対応。
        duration_minutes: 180
        is_free: true
        sort_order: 23
        video_url: null
  - id: section-07
    title: 'パート 7: システム設計のケーススタディ'
    description: 有名な問題から実践的なシステムを設計する - Netflix、Uber、Twitter から学ぶ
    sort_order: 7
    lessons:
      - id: 019d8a21-c124-7001-d001-e1f2a3b4c524
        title: 'レッスン 24: URL 短縮ツール (Bit.ly など) の設計'
        slug: bai-24-thiet-ke-url-shortener-nhu-bitly
        description: >-
          機能要件と非機能要件。ハイレベルなデザイン。 URL エンコード: Base62、MD5
          ハッシュ。データベーススキーマの設計。読み取り負荷の高い最適化。キャッシュ戦略。分析の追跡。レート制限。容量の見積もり (1 億
          URL/日)。
        duration_minutes: 150
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-c125-7001-d001-e1f2a3b4c525
        title: 'レッスン 25: チャット システムの設計 (WhatsApp/Slack など)'
        slug: bai-25-thiet-ke-chat-system-nhu-whatsapp-slack
        description: >-
          1 対 1 チャットとグループ チャットのアーキテクチャ。
          WebSocket接続管理。メッセージ配信を保証します。領収書を読みます。オンライン/オフラインのステータス。プッシュ通知。メディアストレージ。エンドツーエンドの暗号化。メッセージのファンアウト。数百万の同時接続まで拡張可能。
        duration_minutes: 180
        is_free: true
        sort_order: 25
        video_url: null
      - id: 019d8a21-c126-7001-d001-e1f2a3b4c526
        title: 'レッスン 26: ニュース フィード システム (Facebook/Twitter など) の設計'
        slug: bai-26-thiet-ke-news-feed-system-nhu-facebook-twitter
        description: >-
          フィード生成: 書き込み時のファンアウトと読み取り時のファンアウト (プッシュ vs
          プル)。ハイブリッドアプローチ。タイムラインサービス。ランキングと関連性のアルゴリズム。ソーシャルグラフ。フィードのキャッシュ。メディア処理パイプライン。実際のケーススタディ:
          大規模な Twitter タイムライン。
        duration_minutes: 180
        is_free: true
        sort_order: 26
        video_url: null
      - id: 019d8a21-c127-7001-d001-e1f2a3b4c527
        title: 'レッスン 27: ビデオ ストリーミング プラットフォーム (YouTube/Netflix など) の設計'
        slug: bai-27-thiet-ke-video-streaming-platform-nhu-youtube-netflix
        description: >-
          ビデオのアップロードとトランスコーディングのパイプライン。アダプティブ ビットレート ストリーミング (ABR)。
          CDN配信。ビデオメタデータサービス。レコメンデーション エンジンの概要。サムネイルの生成。ライブストリーミングアーキテクチャ。 DRM
          (デジタル著作権管理)。コストの最適化。
        duration_minutes: 190
        is_free: true
        sort_order: 27
        video_url: null
      - id: 019d8a21-c128-7001-d001-e1f2a3b4c528
        title: 'レッスン 28: 配車プラットフォーム (Uber/Grab など) の設計'
        slug: bai-28-thiet-ke-ride-sharing-platform-nhu-uber-grab
        description: >-
          位置情報ベースのサービス。地理空間インデックス (Geohash、Quadtree、H3)。リアルタイムマッチングアルゴリズム。
          ETAの計算。サージ価格設定アーキテクチャ。旅行の追跡。支払い処理の統合。地図ルート案内サービス。数百万の同時乗車に対応したスケーリング。
        duration_minutes: 190
        is_free: true
        sort_order: 28
        video_url: null
      - id: 019d8a21-c129-7001-d001-e1f2a3b4c529
        title: 'レッスン 29: E コマース プラットフォームの設計 (Amazon/Shopee など)'
        slug: bai-29-thiet-ke-e-commerce-platform-nhu-amazon-shopee
        description: >-
          製品カタログサービス。ショッピング カート (ステートレス vs ステートフル)。在庫管理
          (悲観的ロックと楽観的ロック)。注文処理パイプライン。支払いの統合。検索と発見 (Elasticsearch)。フラッシュ セール /
          トラフィックの多いイベントの処理。分散トランザクション (Saga パターン)。推薦制度。
        duration_minutes: 200
        is_free: true
        sort_order: 29
        video_url: null
  - id: section-08
    title: 'パート 8: 本番環境に対応したアーキテクチャ'
    description: 知識をまとめて実際の制作に応用する
    sort_order: 8
    lessons:
      - id: 019d8a21-c130-7001-d001-e1f2a3b4c530
        title: 'レッスン 30: アーキテクチャの決定記録と制作チェックリスト'
        slug: bai-30-architecture-decision-records-production-checklist
        description: >-
          アーキテクチャ決定記録 (ADR) - 決定を文書化します。本番準備チェックリスト。キャパシティプランニングフレームワーク。クラウド
          アーキテクチャのコスト見積もり。テクノロジーレーダー。アーキテクチャレビュープロセス。コースの概要とその後の学習パス。システムアーキテクト向けのリソースとコミュニティ。
        duration_minutes: 150
        is_free: true
        sort_order: 30
        video_url: null
locale: ja
---

