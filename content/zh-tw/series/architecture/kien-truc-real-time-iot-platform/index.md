---
id: 019d8a21-c800-7008-d001-e1f2a3b4c5d6
title: 即時架構與物聯網平台
slug: kien-truc-real-time-iot-platform
description: >-
  關於即時架構和物聯網平台的綜合課程。包括 MQTT
  協定、邊緣運算、數位孿生、時序資料庫（TimescaleDB、InfluxDB）、串流處理、裝置管理、OTA
  更新、即時監控儀表板。智慧工廠、智慧建築、連網汽車和農業物聯網中的應用。 AWS IoT、Azure IoT 和工業 IoT 系統的實際案例研究。更新於
  2026 年。
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
  name: 系統架構
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
    title: 第 1 部分：物聯網基礎
    description: 物聯網生態系概述
    sort_order: 1
    lessons:
      - id: 019d8a21-c801-70c8-d001-e1f2a3b4c501
        title: 第 1 課：物聯網平台概述 - 架構與生態系統
        slug: bai-1-tong-quan-iot-platform-architecture-ecosystem
        description: 物聯網生態系概述。物聯網架構層：裝置、閘道、雲端、應用程式。物聯網協定比較。工業 4.0 和數位轉型。
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-c802-70c8-d001-e1f2a3b4c502
        title: 第 2 課：物聯網協定 - MQTT、CoAP、AMQP 和 WebSocket
        slug: bai-2-iot-protocols-mqtt-coap-amqp-websocket
        description: >-
          MQTT 深入探討：QoS 等級、保留訊息、遺囑訊息。適用於受限設備的 CoAP。企業導向的 AMQP。用於即時網路的
          WebSocket。協議選擇指南。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-c803-70c8-d001-e1f2a3b4c503
        title: 第3課：平台架構概述-雲邊混合
        slug: bai-3-platform-architecture-overview-cloud-edge-hybrid
        description: 物聯網平台架構設計：雲邊混合。訊息代理程式（EMQX、HiveMQ）。規則引擎。設備註冊表。資料管道架構。
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 第 2 部分：設備和連接
    description: 設備配置：零接觸、基於證書
    sort_order: 2
    lessons:
      - id: 019d8a21-c804-70c8-d001-e1f2a3b4c504
        title: 第 4 課：設備管理 - 配置、註冊表和生命週期
        slug: bai-4-device-management-provisioning-registry-lifecycle
        description: 設備配置：零接觸、基於憑證。設備註冊表和元資料。設備生命週期：上線、啟動、維護、退役。車隊管理。
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-c805-70c8-d001-e1f2a3b4c505
        title: 第 5 課：物聯網安全 - 設備身份驗證和加密
        slug: bai-5-iot-security-device-authentication-encryption
        description: 物聯網安全挑戰。 X.509 證書。 TLS/DTLS。設備身份。安全啟動。韌體簽名。網路分段。物聯網零信任。
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-c806-70c8-d001-e1f2a3b4c506
        title: 第 6 課：OTA 更新與遠端配置
        slug: bai-6-ota-updates-remote-configuration
        description: 無線韌體更新：A/B 分割區、回滾。達美航空更新。配置管理。遠端診斷。設備影子/孿生狀態。
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-c807-70c8-d001-e1f2a3b4c507
        title: 第 7 課：網關架構與協定轉換
        slug: bai-7-gateway-architecture-protocol-translation
        description: 物聯網閘道器：協定轉換、本機處理、儲存轉送。邊緣網關與雲端網關。 Modbus/BACnet → MQTT 翻譯。網關集群。
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 第 3 部分：邊緣運算
    description: 邊緣運算：原因和時間
    sort_order: 3
    lessons:
      - id: 019d8a21-c808-70c8-d001-e1f2a3b4c508
        title: 第 8 課：邊緣運算架構 - 邊緣處理
        slug: bai-8-edge-computing-architecture-processing-at-the-edge
        description: 邊緣運算：原因和時間。邊緣部署模型。 Edge 運行時（K3s、KubeEdge）。邊緣人工智慧推理。邊緣資料過濾和聚合。
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-c809-70c8-d001-e1f2a3b4c509
        title: 第 9 課：邊緣 AI 與裝置端推理
        slug: bai-9-edge-ai-on-device-inference
        description: 邊緣人工智慧：TensorRT、ONNX 執行時間、TFLite。模型優化：量化、剪枝。設備端推理與雲端推理的權衡。視野在邊緣。
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-c810-70c8-d001-e1f2a3b4c510
        title: 第10課：邊雲同步與離線模式
        slug: bai-10-edge-cloud-synchronization-offline-mode
        description: 邊雲資料同步策略。儲存轉發。衝突解決。離線優先架構。最終一致的設備狀態。
        duration_minutes: 90
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 第 4 部分：資料處理與存儲
    description: 時間序列資料模式
    sort_order: 4
    lessons:
      - id: 019d8a21-c811-70c8-d001-e1f2a3b4c511
        title: 第 11 課：時間序列資料庫 - TimescaleDB、InfluxDB 和 QuestDB
        slug: bai-11-time-series-database-timescaledb-influxdb-questdb
        description: >-
          時間序列資料模式。 TimescaleDB：超表、連續聚合。 InfluxDB：Flux 查詢語言。 QuestDB：用於時間序列的
          SQL。比較和選擇。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8a21-c812-70c8-d001-e1f2a3b4c512
        title: 第 12 課：物聯網資料管道 - 攝取、處理和儲存
        slug: bai-12-iot-data-pipeline-ingestion-processing-storage
        description: 物聯網資料管道架構。高吞吐量攝取（數百萬條訊息/秒）。流處理：過濾、豐富、聚合。熱/溫/冷儲存。
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-c813-70c8-d001-e1f2a3b4c513
        title: 第 13 課：規則引擎與複雜事件處理
        slug: bai-13-rule-engine-complex-event-processing
        description: 物聯網規則引擎：事件-條件-動作。複雜事件處理（CEP）。模式檢測。警報管道。動態規則管理。
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-05
    title: 第 5 部分：數位孿生與視覺化
    description: 數位孿生概念
    sort_order: 5
    lessons:
      - id: 019d8a21-c814-70c8-d001-e1f2a3b4c514
        title: 第 14 課：數位孿生架構 - 虛擬表示
        slug: bai-14-digital-twin-architecture-virtual-representation
        description: 數位孿生概念。雙定義語言。狀態同步。模擬引擎。使用數位孿生進行預測性維護。 DTDL（數位孿生定義語言）。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8a21-c815-70c8-d001-e1f2a3b4c515
        title: 第 15 課：即時監控儀表板和視覺化
        slug: bai-15-real-time-monitoring-dashboard-visualization
        description: 即時儀表板架構。適用於物聯網的 Grafana。基於 WebSocket 的即時更新。 3D 可視化。地理空間儀表板。警報管理 UI。
        duration_minutes: 90
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a21-c816-70c8-d001-e1f2a3b4c516
        title: 第 16 課：預測性維護與異常檢測
        slug: bai-16-predictive-maintenance-anomaly-detection
        description: 預測性維護：狀態監控、故障預測。異常檢測演算法。感測器資料的 ML 模型。剩餘使用壽命 (RUL) 估計。
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-06
    title: 第六部分：產業應用
    description: IIoT 架構：OPC UA、ISA-95 級別
    sort_order: 6
    lessons:
      - id: 019d8a21-c817-70c8-d001-e1f2a3b4c517
        title: 第 17 課：智慧工廠 - 工業物聯網 (IIoT) 架構
        slug: bai-17-smart-factory-industrial-iot-iiot-architecture
        description: IIoT 架構：OPC UA、ISA-95 等級。製造執行系統（MES）。生產監控。使用視覺 AI 進行品質控制。 OEE 追蹤。
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-c818-70c8-d001-e1f2a3b4c518
        title: 第 18 課：智慧建築與能源管理
        slug: bai-18-smart-building-energy-management
        description: 智慧建築架構：BACnet、KNX 整合。暖通空調優化。佔用檢測。能源監控和優化。建築管理系統（BMS）。
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a21-c819-70c8-d001-e1f2a3b4c519
        title: 第 19 課：連網車輛與車隊管理
        slug: bai-19-connected-vehicles-fleet-management
        description: 互聯車輛架構。遠端資訊處理資料收集。車隊追蹤和路線優化。駕駛員行為分析。車輛診斷 (OBD-II)。
        duration_minutes: 90
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-c820-70c8-d001-e1f2a3b4c520
        title: 第 20 課：農業物聯網與環境監測
        slug: bai-20-agriculture-iot-environmental-monitoring
        description: 農業科技物聯網：土壤感測器、氣象站、灌溉控制。精準農業。環境監測：空氣品質、水質。 LoRaWAN 用於農業。
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-07
    title: 第 7 部分：製作與案例研究
    description: 擴展物聯網平台：大規模連線管理、訊息路由
    sort_order: 7
    lessons:
      - id: 019d8a21-c821-70c8-d001-e1f2a3b4c521
        title: 第 21 課：可擴充性 - 處理數百萬台設備
        slug: bai-21-scalability-handling-millions-of-devices
        description: 擴展物聯網平台：大規模連線管理、訊息路由。 MQTT 代理集群。分區策略。自動縮放設備連線。
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a21-c822-70c8-d001-e1f2a3b4c522
        title: 第 22 課：Kubernetes 上的物聯網平台
        slug: bai-22-iot-platform-on-kubernetes
        description: >-
          在K8s上部署物聯網平台。 EMQX 操作員。 K8s 上的 TimescaleDB。邊緣 K3s 集群。適用於物聯網基礎架構的
          GitOps。多集群管理。
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-c823-70c8-d001-e1f2a3b4c523
        title: 第 23 課：物聯網資料分析與機器學習
        slug: bai-23-iot-data-analytics-machine-learning
        description: 物聯網分析架構。感測器數據的批量分析。 IoT 的 ML 管道：時間序列的特徵工程。用於預測模型的 AutoML。
        duration_minutes: 90
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-c824-70c8-d001-e1f2a3b4c524
        title: 第 24 課：物聯網平台的可觀測性與監控
        slug: bai-24-observability-monitoring-cho-iot-platform
        description: 物聯網平台監控：設備運作狀況、訊息吞吐量、延遲。網路監控。警報管理。大規模物聯網事件響應。
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-c825-70c8-d001-e1f2a3b4c525
        title: 第 25 課：案例研究 - AWS IoT、Azure IoT 和 Bosch IoT
        slug: bai-25-case-studies-aws-iot-azure-iot-bosch-iot
        description: >-
          分析實際的物聯網平台：AWS IoT Core（無伺服器）、Azure IoT Hub（企業）、Bosch IoT
          Suite（工業）。開源替代品。吸取的教訓。
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
locale: zh-tw
---

