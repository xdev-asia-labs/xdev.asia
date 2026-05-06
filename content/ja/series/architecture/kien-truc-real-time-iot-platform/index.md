---
id: 019d8a21-c800-7008-d001-e1f2a3b4c5d6
title: リアルタイム アーキテクチャと IoT プラットフォーム
slug: kien-truc-real-time-iot-platform
description: >-
  リアルタイム アーキテクチャと IoT プラットフォームに関する総合コース。 MQTT プロトコル、エッジ コンピューティング、デジタル
  ツイン、時系列データベース (TimescaleDB、InfluxDB)、ストリーム処理、デバイス管理、OTA
  アップデート、リアルタイム監視ダッシュボードが含まれます。スマートファクトリー、スマートビルディング、コネクテッドビークル、農業IoTにおけるアプリケーション。
  AWS IoT、Azure IoT、Industrial IoT システムの実践的なケーススタディ。 2026年更新。
featured_image: uploads/2026/03/realtime-iot-platform-series-banner-2026.png
level: intermediate
duration_hours: 75
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
  - name: IoT
    slug: iot
  - name: RealTime
    slug: realtime
  - name: MQTT
    slug: mqtt
  - name: EdgeComputing
    slug: edgecomputing
  - name: DigitalTwin
    slug: digitaltwin
  - name: TimeSeries
    slug: timeseries
  - name: StreamProcessing
    slug: streamprocessing
  - name: Kafka
    slug: kafka
  - name: Kubernetes
    slug: kubernetes
  - name: Embedded
    slug: embedded
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: 'パート 1: IoT の基礎'
    description: IoTエコシステムの概要
    sort_order: 1
    lessons:
      - id: 019d8a21-c801-70c8-d001-e1f2a3b4c501
        title: 'レッスン 1: IoT プラットフォームの概要 - アーキテクチャとエコシステム'
        slug: bai-1-tong-quan-iot-platform-architecture-ecosystem
        description: >-
          IoT エコシステムの概要。 IoT アーキテクチャ層: デバイス、ゲートウェイ、クラウド、アプリケーション。 IoT
          プロトコルの比較。インダストリー 4.0 とデジタル変革。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-c802-70c8-d001-e1f2a3b4c502
        title: 'レッスン 2: IoT プロトコル - MQTT、CoAP、AMQP、WebSocket'
        slug: bai-2-iot-protocols-mqtt-coap-amqp-websocket
        description: >-
          MQTT の詳細: QoS レベル、保持されるメッセージ、意志メッセージ。制約のあるデバイスの CoAP。企業向けの AMQP。リアルタイム
          Web 用の WebSocket。プロトコル選択ガイド。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-c803-70c8-d001-e1f2a3b4c503
        title: 'レッスン 3: プラットフォーム アーキテクチャの概要 - クラウド エッジ ハイブリッド'
        slug: bai-3-platform-architecture-overview-cloud-edge-hybrid
        description: >-
          IoT プラットフォーム アーキテクチャ設計: クラウド エッジ ハイブリッド。メッセージ ブローカー
          (EMQX、HiveMQ)。ルールエンジン。デバイスレジストリ。データ パイプライン アーキテクチャ。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'パート 2: デバイスと接続'
    description: 'デバイスプロビジョニング: ゼロタッチ、証明書ベース'
    sort_order: 2
    lessons:
      - id: 019d8a21-c804-70c8-d001-e1f2a3b4c504
        title: 'レッスン 4: デバイス管理 - プロビジョニング、レジストリ、ライフサイクル'
        slug: bai-4-device-management-provisioning-registry-lifecycle
        description: >-
          デバイス プロビジョニング: ゼロタッチ、証明書ベース。デバイスのレジストリとメタデータ。デバイスのライフサイクル:
          オンボード、アクティブ、メンテナンス、廃止。フリート管理。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-c805-70c8-d001-e1f2a3b4c505
        title: 'レッスン 5: IoT セキュリティ - デバイスの認証と暗号化'
        slug: bai-5-iot-security-device-authentication-encryption
        description: >-
          IoT セキュリティの課題。 X.509 証明書。 TLS/DTLS。デバイスの
          ID。セキュアブート。ファームウェアの署名。ネットワークのセグメンテーション。 IoT のゼロトラスト。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-c806-70c8-d001-e1f2a3b4c506
        title: 'レッスン 6: OTA アップデートとリモート構成'
        slug: bai-6-ota-updates-remote-configuration
        description: >-
          無線ファームウェア更新: A/B
          パーティション、ロールバック。デルタのアップデート。構成管理。リモート診断。デバイスのシャドウ/ツイン状態。
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-c807-70c8-d001-e1f2a3b4c507
        title: 'レッスン 7: ゲートウェイ アーキテクチャとプロトコル変換'
        slug: bai-7-gateway-architecture-protocol-translation
        description: >-
          IoT ゲートウェイ: プロトコル変換、ローカル処理、ストア アンド フォワード。エッジゲートウェイとクラウドゲートウェイ。
          Modbus/BACnet → MQTT 変換。ゲートウェイのクラスタリング。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'パート 3: エッジ コンピューティング'
    description: 'エッジ コンピューティング: なぜ、そしていつ'
    sort_order: 3
    lessons:
      - id: 019d8a21-c808-70c8-d001-e1f2a3b4c508
        title: 'レッスン 8: エッジ コンピューティング アーキテクチャ - エッジでの処理'
        slug: bai-8-edge-computing-architecture-processing-at-the-edge
        description: >-
          エッジ コンピューティング: なぜ、いつなのか。エッジ展開モデル。エッジ ランタイム
          (K3s、KubeEdge)。エッジAI推論。エッジでのデータのフィルタリングと集約。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-c809-70c8-d001-e1f2a3b4c509
        title: 'レッスン 9: エッジ AI とオンデバイス推論'
        slug: bai-9-edge-ai-on-device-inference
        description: >-
          エッジ AI: TensorRT、ONNX ランタイム、TFLite。モデルの最適化:
          量子化、枝刈り。オンデバイス推論とクラウド推論のトレードオフ。エッジのビジョン。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-c810-70c8-d001-e1f2a3b4c510
        title: 'レッスン 10: エッジとクラウドの同期とオフライン モード'
        slug: bai-10-edge-cloud-synchronization-offline-mode
        description: エッジクラウドのデータ同期戦略。ストアアンドフォワード。紛争の解決。オフラインファーストのアーキテクチャ。結果的に一貫したデバイス状態。
        duration_minutes: 90
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 'パート 4: データの処理と保存'
    description: 時系列データのパターン
    sort_order: 4
    lessons:
      - id: 019d8a21-c811-70c8-d001-e1f2a3b4c511
        title: 'レッスン 11: 時系列データベース - TimescaleDB、InfluxDB、QuestDB'
        slug: bai-11-time-series-database-timescaledb-influxdb-questdb
        description: >-
          時系列データのパターン。 TimescaleDB: ハイパーテーブル、連続集計。 InfluxDB: Flux クエリ言語。
          QuestDB: 時系列用の SQL。比較と選択。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8a21-c812-70c8-d001-e1f2a3b4c512
        title: 'レッスン 12: IoT データ パイプライン - 取り込み、処理、ストレージ'
        slug: bai-12-iot-data-pipeline-ingestion-processing-storage
        description: >-
          IoT データ パイプライン アーキテクチャ。高スループットの取り込み (1 秒あたり数百万メッセージ)。ストリーム処理:
          フィルタリング、強化、集約。温・温・冷蔵保管。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-c813-70c8-d001-e1f2a3b4c513
        title: 'レッスン 13: ルール エンジンと複雑なイベント処理'
        slug: bai-13-rule-engine-complex-event-processing
        description: 'IoT ルール エンジン: イベント-条件-アクション。複合イベント処理 (CEP)。パターン検出。アラートパイプライン。動的なルール管理。'
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-05
    title: 'パート 5: デジタルツインと視覚化'
    description: デジタルツインの概念
    sort_order: 5
    lessons:
      - id: 019d8a21-c814-70c8-d001-e1f2a3b4c514
        title: 'レッスン 14: デジタル ツイン アーキテクチャ - 仮想表現'
        slug: bai-14-digital-twin-architecture-virtual-representation
        description: >-
          デジタルツインの概念。ツイン定義言語。状態の同期。シミュレーションエンジン。デジタルツインによる予知メンテナンス。 DTDL (デジタル
          ツイン定義言語)。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8a21-c815-70c8-d001-e1f2a3b4c515
        title: 'レッスン 15: リアルタイム監視ダッシュボードと視覚化'
        slug: bai-15-real-time-monitoring-dashboard-visualization
        description: >-
          リアルタイム ダッシュボード アーキテクチャ。 IoT 用の Grafana。 WebSocket ベースのライブ更新。 3D
          視覚化。地理空間ダッシュボード。アラート管理 UI。
        duration_minutes: 90
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a21-c816-70c8-d001-e1f2a3b4c516
        title: 'レッスン 16: 予知メンテナンスと異常検出'
        slug: bai-16-predictive-maintenance-anomaly-detection
        description: 予知保全：状態監視、故障予測。異常検出アルゴリズム。センサーデータのMLモデル。残存耐用年数 (RUL) の推定。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-06
    title: 'パート 6: 業界での応用'
    description: 'IIoT アーキテクチャ: OPC UA、ISA-95 レベル'
    sort_order: 6
    lessons:
      - id: 019d8a21-c817-70c8-d001-e1f2a3b4c517
        title: 'レッスン 17: スマート ファクトリー - 産業用 IoT (IIoT) アーキテクチャ'
        slug: bai-17-smart-factory-industrial-iot-iiot-architecture
        description: >-
          IIoT アーキテクチャ: OPC UA、ISA-95 レベル。製造実行システム (MES)。生産監視。ビジョンAIによる品質管理。
          OEE追跡。
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-c818-70c8-d001-e1f2a3b4c518
        title: 'レッスン 18: スマート ビルディングとエネルギー管理'
        slug: bai-18-smart-building-energy-management
        description: >-
          スマート ビルディング アーキテクチャ: BACnet、KNX の統合。 HVAC
          の最適化。占有検出。エネルギーの監視と最適化。ビル管理システム (BMS)。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a21-c819-70c8-d001-e1f2a3b4c519
        title: 'レッスン 19: コネクテッドビークルとフリート管理'
        slug: bai-19-connected-vehicles-fleet-management
        description: >-
          コネクテッドビークルアーキテクチャ。テレマティクスデータ収集。フリートの追跡とルートの最適化。ドライバーの行動分析。車両診断（OBD-II）。
        duration_minutes: 90
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-c820-70c8-d001-e1f2a3b4c520
        title: 'レッスン 20: 農業 IoT と環境モニタリング'
        slug: bai-20-agriculture-iot-environmental-monitoring
        description: 'AgriTech IoT: 土壌センサー、気象観測所、灌漑制御。精密農業。環境モニタリング: 大気質、水質。農業用 LoRaWAN。'
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-07
    title: 'パート 7: 制作とケーススタディ'
    description: 'IoT プラットフォームの拡張: 大規模な接続管理、メッセージ ルーティング'
    sort_order: 7
    lessons:
      - id: 019d8a21-c821-70c8-d001-e1f2a3b4c521
        title: 'レッスン 21: スケーラビリティ - 数百万のデバイスの処理'
        slug: bai-21-scalability-handling-millions-of-devices
        description: >-
          IoT プラットフォームの拡張: 大規模な接続管理、メッセージ ルーティング。 MQTT
          ブローカーのクラスタリング。パーティショニング戦略。自動スケーリングデバイス接続。
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a21-c822-70c8-d001-e1f2a3b4c522
        title: 'レッスン 22: Kubernetes 上の IoT プラットフォーム'
        slug: bai-22-iot-platform-on-kubernetes
        description: >-
          K8s に IoT プラットフォームを導入します。 EMQX オペレーター。 K8 上の TimescaleDB。エッジ K3s
          クラスター。 IoT インフラストラクチャ向けの GitOps。マルチクラスター管理。
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-c823-70c8-d001-e1f2a3b4c523
        title: 'レッスン 23: IoT データ分析と機械学習'
        slug: bai-23-iot-data-analytics-machine-learning
        description: >-
          IoT 分析アーキテクチャ。センサーデータのバッチ分析。 IoT 用の ML パイプライン:
          時系列からの特徴量エンジニアリング。予測モデル用の AutoML。
        duration_minutes: 90
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-c824-70c8-d001-e1f2a3b4c524
        title: 'レッスン 24: IoT プラットフォームの可観測性と監視'
        slug: bai-24-observability-monitoring-cho-iot-platform
        description: >-
          IoT プラットフォームのモニタリング: デバイスの健全性、メッセージ スループット、遅延。ネットワーク監視。アラート管理。大規模な IoT
          のインシデント対応。
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-c825-70c8-d001-e1f2a3b4c525
        title: 'レッスン 25: ケーススタディ - AWS IoT、Azure IoT、Bosch IoT'
        slug: bai-25-case-studies-aws-iot-azure-iot-bosch-iot
        description: >-
          実際の IoT プラットフォームを分析します: AWS IoT Core (サーバーレス)、Azure IoT Hub
          (エンタープライズ)、Bosch IoT Suite (産業用)。オープンソースの代替手段。教訓。
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
locale: ja
---

