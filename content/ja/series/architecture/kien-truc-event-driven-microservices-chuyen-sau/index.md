---
id: 019d8a21-cb00-700b-d001-e1f2a3b4c5d6
title: 徹底したイベント駆動型マイクロサービス アーキテクチャ
slug: kien-truc-event-driven-microservices-chuyen-sau
description: >-
  イベント駆動型マイクロサービス アーキテクチャに関する詳細なコース。 Apache Kafka と Pulsar、Saga パターン、CQRS とイベント
  ソーシング、アウトボックス パターン、1 回限りのセマンティクス、スキーマ レジストリ、デッド レター
  キュー、およびコレオグラフィーとオーケストレーションが含まれます。一貫性が保証されたイベント駆動型の本番対応マイクロサービス
  システムを設計します。ケーススタディ: Uber、Wix、Booking.com。 2026年更新。
featured_image: uploads/2026/03/event-driven-microservices-series-banner-2026.png
level: intermediate
duration_hours: 80
lesson_count: 25
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
  - name: EventDriven
    slug: eventdriven
  - name: Microservices
    slug: microservices
  - name: Kafka
    slug: kafka
  - name: CQRS
    slug: cqrs
  - name: EventSourcing
    slug: eventsourcing
  - name: Saga
    slug: saga
  - name: DDD
    slug: ddd
  - name: DistributedSystems
    slug: distributedsystems
  - name: Messaging
    slug: messaging
  - name: Pulsar
    slug: pulsar
  - name: Patterns
    slug: patterns
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: 'パート 1: イベント駆動型の基盤'
    description: イベント駆動型アーキテクチャ (EDA) の基礎
    sort_order: 1
    lessons:
      - id: 019d8a21-cb01-70cb-d001-e1f2a3b4c501
        title: 'レッスン 1: イベント駆動型アーキテクチャの概要 - イベントが重要な理由'
        slug: bai-1-tong-quan-event-driven-architecture-why-events-matter
        description: >-
          イベント駆動型アーキテクチャ (EDA) の基礎。イベント、コマンド、クエリ。時間的カップリングとイベントのデカップリング。 EDA
          の利点とトレードオフ。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-cb02-70cb-d001-e1f2a3b4c502
        title: 'レッスン 2: ドメイン イベントとイベント モデリング'
        slug: bai-2-domain-events-event-modeling
        description: >-
          DDD のドメイン
          イベント。イベントストーミングワークショップ。イベントモデリング技術。イベント、コマンド、集約の識別。イベントの命名規則。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-cb03-70cb-d001-e1f2a3b4c503
        title: 'レッスン 3: メッセージング パターン - Pub/Sub、キュー、ストリーム'
        slug: bai-3-messaging-patterns-pub-sub-queue-stream
        description: >-
          メッセージング パターン: ポイントツーポイント、パブリッシュ/サブスクライブ、イベント ストリーミング。メッセージ ブローカーとイベント
          ストリーミング プラットフォーム。最大 1 回、少なくとも 1 回、正確に 1 回の配信。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'パート 2: Apache Kafka の詳細'
    description: 'Kafka の内部: ブローカー アーキテクチャ、トピック パーティション、レプリケーション ファクター'
    sort_order: 2
    lessons:
      - id: 019d8a21-cb04-70cb-d001-e1f2a3b4c504
        title: 'レッスン 4: Kafka アーキテクチャ - ブローカー、パーティション、レプリケーション'
        slug: bai-4-kafka-architecture-brokers-partitions-replication
        description: >-
          Kafka の内部: ブローカー アーキテクチャ、トピック パーティション、レプリケーション ファクター。 ISR
          (同期レプリカ)。リーダー選挙。ログセグメント。コントローラー クォーラム (KRaft)。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-cb05-70cb-d001-e1f2a3b4c505
        title: 'レッスン 5: Kafka のプロデューサーとコンシューマー - 高度なパターン'
        slug: bai-5-kafka-producers-consumers-advanced-patterns
        description: >-
          プロデューサー: ACK、バッチ処理、圧縮、冪等プロデューサー。消費者: 消費者グループ、オフセット管理、リバランス。 1
          回限りのセマンティクス (EOS)。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-cb06-70cb-d001-e1f2a3b4c506
        title: 'レッスン 6: Kafka ストリームと ksqlDB'
        slug: bai-6-kafka-streams-ksqldb
        description: >-
          Kafka ストリーム: KStream、KTable、ウィンドウ処理、結合。州の店舗。インタラクティブなクエリ。 ksqlDB:
          ストリーム上の SQL。マテリアライズドビュー。ストリーム処理トポロジ。
        duration_minutes: 120
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-cb07-70cb-d001-e1f2a3b4c507
        title: 'レッスン 7: スキーマ レジストリとデータのシリアル化'
        slug: bai-7-schema-registry-data-serialization
        description: >-
          スキーマ レジストリ: Avro、Protobuf、JSON スキーマ。スキーマ進化のルール。互換モード。スキーマの検証。
          Confluent スキーマ レジストリと Apicurio の比較。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'パート 3: イベント ソーシングと CQRS'
    description: 'イベント ソーシングの基礎: イベント ストア、イベント リプレイ、スナップショット'
    sort_order: 3
    lessons:
      - id: 019d8a21-cb08-70cb-d001-e1f2a3b4c508
        title: 'レッスン 8: イベント ソーシング - 真実の情報源としての不変イベント ログ'
        slug: bai-8-event-sourcing-immutable-event-log-source-of-truth
        description: >-
          イベント ソーシングの基本: イベント ストア、イベント
          リプレイ、スナップショット。集合体の再構築。一時的なクエリ。自然に監査証跡を取得します。イベントのバージョン管理。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-cb09-70cb-d001-e1f2a3b4c509
        title: 'レッスン 9: CQRS - コマンド クエリの責任の分離'
        slug: bai-9-cqrs-command-query-responsibility-segregation
        description: >-
          CQRS パターン: 個別の読み取り/書き込みモデル。コマンド ハンドラーとドメイン ロジック。モデルの予測を読み取ります。最終的な整合性。
          CQRS を使用する場合。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-cb10-70cb-d001-e1f2a3b4c510
        title: 'レッスン 10: イベント ストアの実装 - PostgreSQL と EventStoreDB'
        slug: bai-10-event-store-implementation-postgresql-eventstoredb
        description: >-
          イベント ストアの実装: PostgreSQL ベース (アウトボックス)、EventStoreDB、Axon
          Server。イベント連載。サブスクリプションモデル。プロジェクションエンジン。
        duration_minutes: 120
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a21-cb11-70cb-d001-e1f2a3b4c511
        title: 'レッスン 11: 投影とモデル パターンの読み取り'
        slug: bai-11-projections-read-model-patterns
        description: >-
          イベントから読み取りモデルを構築します。投影パターン:
          インライン、キャッチアップ、ライブ。マルチモデル投影。予測を再構築します。投影失敗の処理。
        duration_minutes: 90
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-04
    title: 'パート 4: 分散パターン'
    description: 'Saga パターンの詳細: 振り付けとオーケストレーション'
    sort_order: 4
    lessons:
      - id: 019d8a21-cb12-70cb-d001-e1f2a3b4c512
        title: 'レッスン 12: Saga パターン - 分散トランザクションの管理'
        slug: bai-12-saga-pattern-managing-distributed-transactions
        description: 'サーガ パターンの詳細: 振り付けとオーケストレーション。補償取引。佐賀実行コーディネーター。エラー処理。サーガステートマシン。'
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-cb13-70cb-d001-e1f2a3b4c513
        title: 'レッスン 13: 送信ボックスのパターンと信頼性の高いイベント発行'
        slug: bai-13-outbox-pattern-reliable-event-publishing
        description: >-
          トランザクション送信ボックスのパターン。ポーリングパブリッシャーと CDC ベース。 Debezium 送信ボックス
          コネクタ。イベントの配信を保証します。注文保証。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-cb14-70cb-d001-e1f2a3b4c514
        title: 'レッスン 14: デッドレターキューとエラー処理'
        slug: bai-14-dead-letter-queue-error-handling
        description: >-
          デッド レター キュー (DLQ) パターン。再試行戦略: 指数バックオフ、サーキット ブレーカー。毒薬の取り扱い。エラーの分類。 DLQ
          の再処理。
        duration_minutes: 90
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8a21-cb15-70cb-d001-e1f2a3b4c515
        title: 'レッスン 15: 冪等性と 1 回限りの処理'
        slug: bai-15-idempotency-exactly-once-processing
        description: >-
          べき等コンシューマ: 重複排除戦略。冪等性キー。厳密に 1 回と実質的に 1 回。 Kafka トランザクション
          API。消費者オフセット管理。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-05
    title: 'パート 5: 高度なパターン'
    description: '通信パターン: イベントを介した要求と応答、イベント通知、イベントを伴う状態転送'
    sort_order: 5
    lessons:
      - id: 019d8a21-cb16-70cb-d001-e1f2a3b4c516
        title: 'レッスン 16: イベント駆動型マイクロサービスの通信パターン'
        slug: bai-16-event-driven-microservices-communication-patterns
        description: '通信パターン: イベントを介した要求と応答、イベント通知、イベントを伴う状態転送。ハイブリッド同期 + 非同期パターン。 APIの構成。'
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019d8a21-cb17-70cb-d001-e1f2a3b4c517
        title: 'レッスン 17: イベント駆動型のデータ整合性と競合解決'
        slug: bai-17-event-driven-data-consistency-conflict-resolution
        description: 最終的な整合性の詳細。競合の検出と解決。最後に書いた人が勝つ vs マージ。ベクトル時計。イベント駆動型システム用の CRDT。
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-cb18-70cb-d001-e1f2a3b4c518
        title: 'レッスン 18: イベントのバージョニングとスキーマの進化'
        slug: bai-18-event-versioning-schema-evolution
        description: >-
          イベントのバージョン管理戦略: 弱いスキーマ、アップキャスト、イベント
          アダプター。重大な変更管理。マルチバージョンのコンシューマ。スキーマ移行パターン。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a21-cb19-70cb-d001-e1f2a3b4c519
        title: 'レッスン 19: プロセス マネージャーとワークフロー エンジン'
        slug: bai-19-process-manager-workflow-engine
        description: >-
          プロセス マネージャー パターン: ステート マシンとして長時間実行されるビジネス プロセス。 Temporal.io ワークフロー
          エンジン。耐久性のある実行。補償。
        duration_minutes: 120
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-06
    title: 'パート 6: 運用と生産'
    description: 'Kafka 操作: モニタリング (JMX、Prometheus)、パフォーマンス チューニング'
    sort_order: 6
    lessons:
      - id: 019d8a21-cb20-70cb-d001-e1f2a3b4c520
        title: 'レッスン 20: Kafka の操作 - 監視、チューニング、トラブルシューティング'
        slug: bai-20-kafka-operations-monitoring-tuning-troubleshooting
        description: >-
          Kafka の操作: モニタリング
          (JMX、Prometheus)、パフォーマンスのチューニング。消費者のラグモニタリング。パーティションのリバランス。ブローカーのメンテナンス。一般的な問題のトラブルシューティング。
        duration_minutes: 120
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019d8a21-cb21-70cb-d001-e1f2a3b4c521
        title: 'レッスン 21: イベント駆動型システムのテスト'
        slug: bai-21-testing-event-driven-systems
        description: >-
          テスト戦略: イベント ハンドラーの単体テスト、組み込み Kafka
          との統合テスト。イベントの受託テスト。エンドツーエンドのテスト。テストコンテナ。
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a21-cb22-70cb-d001-e1f2a3b4c522
        title: 'レッスン 22: イベント駆動型システムの可観測性'
        slug: bai-22-observability-cho-event-driven-systems
        description: >-
          イベントを介した分散トレース。相関
          ID。イベントフローの視覚化。消費者の遅れに関する警告。デッドレターの監視。パーティションのスキュー検出。
        duration_minutes: 90
        is_free: true
        sort_order: 22
        video_url: null
  - id: section-07
    title: 'パート 7: ケーススタディ'
    description: 'モノリスからイベント駆動型への移行: ストラングラー フィグ パターン'
    sort_order: 7
    lessons:
      - id: 019d8a21-cb23-70cb-d001-e1f2a3b4c523
        title: 'レッスン 23: イベント駆動型への移行 - ストラングラーフィグパターン'
        slug: bai-23-migration-to-event-driven-strangler-fig-pattern
        description: >-
          モノリスからイベント駆動型への移行: ストラングラー フィグ
          パターン。並列実行戦略。イベントは新旧の架け橋となります。段階的な移行。リスク管理。
        duration_minutes: 120
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-cb24-70cb-d001-e1f2a3b4c524
        title: 'レッスン 24: Apache Pulsar と代替手段'
        slug: bai-24-apache-pulsar-alternatives
        description: >-
          Apache Pulsar: マルチテナンシー、階層型ストレージ、ジオレプリケーション。パルサーとカフカの比較。
          NATSジェットストリーム。レッパンダ。アマゾンイベントブリッジ。適切なプラットフォームの選択。
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-cb25-70cb-d001-e1f2a3b4c525
        title: 'レッスン 25: ケーススタディ - Uber、Wix、Booking.com、LinkedIn'
        slug: bai-25-case-studies-uber-wix-booking-com-linkedin
        description: >-
          実際のイベント駆動型分析: Uber (イベント ソーシング配車マッチング)、Wix
          (イベント駆動型プラットフォーム)、Booking.com (大規模な Kafka)、LinkedIn (Kafka の起源)。教訓。
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
locale: ja
---

