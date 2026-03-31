---
id: 019d8a21-c800-7008-d001-e1f2a3b4c5d6
title: 'Kiến trúc Real-time & IoT Platform'
slug: kien-truc-real-time-iot-platform
description: >-
  Khóa học toàn diện về kiến trúc Real-time và IoT Platform. Bao gồm MQTT Protocol, Edge Computing, Digital Twin, Time-Series Database (TimescaleDB, InfluxDB), Stream Processing, Device Management, OTA Updates, Real-time Monitoring Dashboard. Ứng dụng trong Smart Factory, Smart Building, Connected Vehicles, và Agriculture IoT. Case studies thực tế từ AWS IoT, Azure IoT, và các hệ thống Industrial IoT. Cập nhật 2026.
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
  name: Kiến trúc hệ thống
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
    title: 'Phần 1: IoT Foundations'
    description: 'IoT ecosystem overview'
    sort_order: 1
    lessons:
      - id: 019d8a21-c801-70c8-d001-e1f2a3b4c501
        title: 'Bài 1: Tổng quan IoT Platform - Architecture & Ecosystem'
        slug: bai-1-tong-quan-iot-platform-architecture-ecosystem
        description: >-
          IoT ecosystem overview. IoT architecture layers: device, gateway, cloud, application. IoT protocols comparison. Industry 4.0 và digital transformation.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-c802-70c8-d001-e1f2a3b4c502
        title: 'Bài 2: IoT Protocols - MQTT, CoAP, AMQP & WebSocket'
        slug: bai-2-iot-protocols-mqtt-coap-amqp-websocket
        description: >-
          MQTT deep-dive: QoS levels, retained messages, will messages. CoAP cho constrained devices. AMQP cho enterprise. WebSocket cho real-time web. Protocol selection guide.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-c803-70c8-d001-e1f2a3b4c503
        title: 'Bài 3: Platform Architecture Overview - Cloud-Edge Hybrid'
        slug: bai-3-platform-architecture-overview-cloud-edge-hybrid
        description: >-
          Thiết kế kiến trúc IoT Platform: cloud-edge hybrid. Message broker (EMQX, HiveMQ). Rule engine. Device registry. Data pipeline architecture.
        duration_minutes: 90
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'Phần 2: Device & Connectivity'
    description: 'Device provisioning: zero-touch, certificate-based'
    sort_order: 2
    lessons:
      - id: 019d8a21-c804-70c8-d001-e1f2a3b4c504
        title: 'Bài 4: Device Management - Provisioning, Registry & Lifecycle'
        slug: bai-4-device-management-provisioning-registry-lifecycle
        description: >-
          Device provisioning: zero-touch, certificate-based. Device registry và metadata. Device lifecycle: onboard, active, maintenance, decommission. Fleet management.
        duration_minutes: 120
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019d8a21-c805-70c8-d001-e1f2a3b4c505
        title: 'Bài 5: IoT Security - Device Authentication & Encryption'
        slug: bai-5-iot-security-device-authentication-encryption
        description: >-
          IoT security challenges. X.509 certificates. TLS/DTLS. Device identity. Secure boot. Firmware signing. Network segmentation. Zero Trust cho IoT.
        duration_minutes: 120
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-c806-70c8-d001-e1f2a3b4c506
        title: 'Bài 6: OTA Updates & Remote Configuration'
        slug: bai-6-ota-updates-remote-configuration
        description: >-
          Over-the-Air firmware updates: A/B partition, rollback. Delta updates. Configuration management. Remote diagnostics. Device shadow/twin state.
        duration_minutes: 90
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-c807-70c8-d001-e1f2a3b4c507
        title: 'Bài 7: Gateway Architecture & Protocol Translation'
        slug: bai-7-gateway-architecture-protocol-translation
        description: >-
          IoT Gateway: protocol translation, local processing, store-and-forward. Edge gateway vs cloud gateway. Modbus/BACnet → MQTT translation. Gateway clustering.
        duration_minutes: 90
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'Phần 3: Edge Computing'
    description: 'Edge computing: why và when'
    sort_order: 3
    lessons:
      - id: 019d8a21-c808-70c8-d001-e1f2a3b4c508
        title: 'Bài 8: Edge Computing Architecture - Processing at the Edge'
        slug: bai-8-edge-computing-architecture-processing-at-the-edge
        description: >-
          Edge computing: why và when. Edge deployment models. Edge runtime (K3s, KubeEdge). Edge AI inference. Data filtering và aggregation at edge.
        duration_minutes: 120
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019d8a21-c809-70c8-d001-e1f2a3b4c509
        title: 'Bài 9: Edge AI & On-device Inference'
        slug: bai-9-edge-ai-on-device-inference
        description: >-
          Edge AI: TensorRT, ONNX Runtime, TFLite. Model optimization: quantization, pruning. On-device inference vs cloud inference trade-offs. Vision at the edge.
        duration_minutes: 120
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-c810-70c8-d001-e1f2a3b4c510
        title: 'Bài 10: Edge-Cloud Synchronization & Offline Mode'
        slug: bai-10-edge-cloud-synchronization-offline-mode
        description: >-
          Edge-cloud data sync strategies. Store-and-forward. Conflict resolution. Offline-first architecture. Eventually consistent device state.
        duration_minutes: 90
        is_free: true
        sort_order: 10
        video_url: null
  - id: section-04
    title: 'Phần 4: Data Processing & Storage'
    description: 'Time-series data patterns'
    sort_order: 4
    lessons:
      - id: 019d8a21-c811-70c8-d001-e1f2a3b4c511
        title: 'Bài 11: Time-Series Database - TimescaleDB, InfluxDB & QuestDB'
        slug: bai-11-time-series-database-timescaledb-influxdb-questdb
        description: >-
          Time-series data patterns. TimescaleDB: hypertables, continuous aggregates. InfluxDB: Flux query language. QuestDB: SQL for time-series. Comparison và selection.
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8a21-c812-70c8-d001-e1f2a3b4c512
        title: 'Bài 12: IoT Data Pipeline - Ingestion, Processing & Storage'
        slug: bai-12-iot-data-pipeline-ingestion-processing-storage
        description: >-
          IoT data pipeline architecture. High-throughput ingestion (millions messages/sec). Stream processing: filtering, enrichment, aggregation. Hot/warm/cold storage.
        duration_minutes: 120
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019d8a21-c813-70c8-d001-e1f2a3b4c513
        title: 'Bài 13: Rule Engine & Complex Event Processing'
        slug: bai-13-rule-engine-complex-event-processing
        description: >-
          IoT Rule Engine: event-condition-action. Complex Event Processing (CEP). Pattern detection. Alerting pipelines. Dynamic rule management.
        duration_minutes: 120
        is_free: true
        sort_order: 13
        video_url: null
  - id: section-05
    title: 'Phần 5: Digital Twin & Visualization'
    description: 'Digital Twin concepts'
    sort_order: 5
    lessons:
      - id: 019d8a21-c814-70c8-d001-e1f2a3b4c514
        title: 'Bài 14: Digital Twin Architecture - Virtual Representation'
        slug: bai-14-digital-twin-architecture-virtual-representation
        description: >-
          Digital Twin concepts. Twin definition language. State synchronization. Simulation engine. Predictive maintenance với digital twins. DTDL (Digital Twin Definition Language).
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8a21-c815-70c8-d001-e1f2a3b4c515
        title: 'Bài 15: Real-time Monitoring Dashboard & Visualization'
        slug: bai-15-real-time-monitoring-dashboard-visualization
        description: >-
          Real-time dashboard architecture. Grafana cho IoT. WebSocket-based live updates. 3D visualization. Geospatial dashboards. Alert management UI.
        duration_minutes: 90
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a21-c816-70c8-d001-e1f2a3b4c516
        title: 'Bài 16: Predictive Maintenance & Anomaly Detection'
        slug: bai-16-predictive-maintenance-anomaly-detection
        description: >-
          Predictive maintenance: condition monitoring, failure prediction. Anomaly detection algorithms. ML models cho sensor data. Remaining Useful Life (RUL) estimation.
        duration_minutes: 120
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-06
    title: 'Phần 6: Industry Applications'
    description: 'IIoT architecture: OPC UA, ISA-95 levels'
    sort_order: 6
    lessons:
      - id: 019d8a21-c817-70c8-d001-e1f2a3b4c517
        title: 'Bài 17: Smart Factory - Industrial IoT (IIoT) Architecture'
        slug: bai-17-smart-factory-industrial-iot-iiot-architecture
        description: >-
          IIoT architecture: OPC UA, ISA-95 levels. Manufacturing Execution System (MES). Production monitoring. Quality control với vision AI. OEE tracking.
        duration_minutes: 120
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-c818-70c8-d001-e1f2a3b4c518
        title: 'Bài 18: Smart Building & Energy Management'
        slug: bai-18-smart-building-energy-management
        description: >-
          Smart building architecture: BACnet, KNX integration. HVAC optimization. Occupancy detection. Energy monitoring và optimization. Building Management System (BMS).
        duration_minutes: 90
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a21-c819-70c8-d001-e1f2a3b4c519
        title: 'Bài 19: Connected Vehicles & Fleet Management'
        slug: bai-19-connected-vehicles-fleet-management
        description: >-
          Connected vehicle architecture. Telematics data collection. Fleet tracking và route optimization. Driver behavior analysis. Vehicle diagnostics (OBD-II).
        duration_minutes: 90
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-c820-70c8-d001-e1f2a3b4c520
        title: 'Bài 20: Agriculture IoT & Environmental Monitoring'
        slug: bai-20-agriculture-iot-environmental-monitoring
        description: >-
          AgriTech IoT: soil sensors, weather stations, irrigation control. Precision farming. Environmental monitoring: air quality, water quality. LoRaWAN cho nông nghiệp.
        duration_minutes: 90
        is_free: true
        sort_order: 20
        video_url: null
  - id: section-07
    title: 'Phần 7: Production & Case Studies'
    description: 'Scaling IoT platform: connection management, message routing at scale'
    sort_order: 7
    lessons:
      - id: 019d8a21-c821-70c8-d001-e1f2a3b4c521
        title: 'Bài 21: Scalability - Handling Millions of Devices'
        slug: bai-21-scalability-handling-millions-of-devices
        description: >-
          Scaling IoT platform: connection management, message routing at scale. MQTT broker clustering. Partitioning strategies. Auto-scaling device connections.
        duration_minutes: 120
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019d8a21-c822-70c8-d001-e1f2a3b4c522
        title: 'Bài 22: IoT Platform on Kubernetes'
        slug: bai-22-iot-platform-on-kubernetes
        description: >-
          Deploying IoT platform on K8s. EMQX operator. TimescaleDB on K8s. Edge K3s clusters. GitOps cho IoT infrastructure. Multi-cluster management.
        duration_minutes: 120
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019d8a21-c823-70c8-d001-e1f2a3b4c523
        title: 'Bài 23: IoT Data Analytics & Machine Learning'
        slug: bai-23-iot-data-analytics-machine-learning
        description: >-
          IoT analytics architecture. Batch analytics trên sensor data. ML pipeline cho IoT: feature engineering from time-series. AutoML cho predictive models.
        duration_minutes: 90
        is_free: true
        sort_order: 23
        video_url: null
      - id: 019d8a21-c824-70c8-d001-e1f2a3b4c524
        title: 'Bài 24: Observability & Monitoring cho IoT Platform'
        slug: bai-24-observability-monitoring-cho-iot-platform
        description: >-
          IoT platform monitoring: device health, message throughput, latency. Network monitoring. Alert management. Incident response cho IoT at scale.
        duration_minutes: 90
        is_free: true
        sort_order: 24
        video_url: null
      - id: 019d8a21-c825-70c8-d001-e1f2a3b4c525
        title: 'Bài 25: Case Studies - AWS IoT, Azure IoT & Bosch IoT'
        slug: bai-25-case-studies-aws-iot-azure-iot-bosch-iot
        description: >-
          Phân tích IoT platform thực tế: AWS IoT Core (serverless), Azure IoT Hub (enterprise), Bosch IoT Suite (industrial). Open-source alternatives. Lessons learned.
        duration_minutes: 120
        is_free: true
        sort_order: 25
        video_url: null
---
