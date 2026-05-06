---
id: 019d8a21-c110-7001-d001-e1f2a3b4c515
title: 第 15 課：串流處理和即時資料管道
slug: bai-15-stream-processing-real-time-data-pipelines
description: >-
  批次與流處理。 Apache Kafka Streams、基本 Apache Flink。視窗策略。變更資料擷取 (CDC)。即時分析管道。 Lambda
  與 Kappa 架構。
duration_minutes: 150
is_free: false
video_url: null
sort_order: 15
section_title: 第 4 部分：非同步處理和通信
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3313" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3313)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1086" cy="228" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1072" cy="34" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1058" cy="100" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1044" cy="166" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1030" cy="232" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="128" x2="1100" y2="208" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="158" x2="1050" y2="228" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="965.2390923627308,106.5 965.2390923627308,149.5 928,171 890.7609076372692,149.5 890.7609076372692,106.50000000000001 928,85" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ 建築 — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：串流處理與即時數據</tspan>
      <tspan x="60" dy="42">管道</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：非同步處理和通信</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

批次批次處理資料（每小時、每天）。但在即時時代，用戶希望立即看到結果。 **流處理**按其出現的方式處理資料。

---

## 1. 批次與流程處理

```
Batch Processing:
  ┌──────────┐    ┌──────────┐    ┌──────────┐
  │ Collect  │───►│ Process  │───►│ Output   │
  │ 24h data │    │ MapReduce│    │ Reports  │
  └──────────┘    └──────────┘    └──────────┘
  Latency: giờ → ngày
  Ví dụ: Daily sales report, ML training

Stream Processing:
  Event ──► Process ──► Output (liên tục)
  Event ──► Process ──► Output
  Event ──► Process ──► Output
  Latency: milliseconds → seconds
  Ví dụ: Fraud detection, live dashboard
```

|標準|批量|流 |
|----------|--------|--------|
|延遲 |分鐘 → 小時 |女士→秒|
|數據|有界（有終點）|無界（持續）|
|加工|整個資料集|每個事件/微批次 |
|複雜性 |降低|更高 |
|工具| Spark、Hadoop |卡夫卡流、Flink |

---

## 2. 流處理概念

### 2.1 視窗化

```
Vấn đề: "Tính trung bình requests/giây trong 5 phút qua"
Cần nhóm events theo thời gian → Window

Tumbling Window (fixed, non-overlapping):
  |----5min----|----5min----|----5min----|
  | e1 e2 e3   | e4 e5 e6   | e7 e8      |
  | avg = 100  | avg = 150  | avg = 120  |

Sliding Window (overlapping):
  |----5min----|
       |----5min----|
            |----5min----|
  Events thuộc nhiều windows → smoother aggregation

Session Window (activity-based):
  |--user active--|  gap  |--user active--|
  | e1 e2 e3 e4   | 30m  | e5 e6          |
  | session 1     |      | session 2      |
```

### 2.2 事件時間與處理時間

```
Event Time:     Khi event XẢY RA
Processing Time: Khi event ĐƯỢC XỬ LÝ

Vấn đề:
  Event tạo lúc 10:00:00 (event time)
  Network delay 5 giây
  Broker nhận lúc 10:00:05
  Consumer xử lý lúc 10:00:08 (processing time)

  Nếu dùng processing time → window 10:00-10:05 THIẾU event
  Nếu dùng event time → cần xử lý late events

Watermark:
  "Tôi tin rằng tất cả events trước thời điểm W đã đến"
  Events đến sau watermark → late events → xử lý riêng
```

---

## 3. Apache Kafka 流

### 3.1 架構

```
  ┌──────────────┐      ┌──────────────┐
  │ Input Topic  │─────►│ Kafka Streams│─────► Output Topic
  │ "orders"     │      │ Application  │      "order-stats"
  └──────────────┘      │              │
                        │ Stateful     │
                        │ Processing   │
                        │ (RocksDB)    │
                        └──────────────┘

Đặc điểm:
  - Library (không phải cluster riêng)
  - Chạy trong Java/Kotlin app
  - State stores (RocksDB) cho aggregation
  - Exactly-once processing
```

### 3.2 範例：即時訂單統計

```java
StreamsBuilder builder = new StreamsBuilder();

KStream<String, Order> orders = builder.stream("orders");

// Đếm orders theo category trong 5 phút
KTable<Windowed<String>, Long> categoryCounts = orders
    .groupBy((key, order) -> order.getCategory())
    .windowedBy(TimeWindows.ofSizeWithNoGrace(Duration.ofMinutes(5)))
    .count();

// Top products (số lượng bán)
KTable<String, Long> productCounts = orders
    .flatMapValues(order -> order.getItems())
    .groupBy((key, item) -> item.getProductId())
    .count();

categoryCounts.toStream().to("category-stats");
productCounts.toStream().to("product-rankings");
```

---

## 4. 變更資料擷取 (CDC)

### 4.1 什麼是CDC？

```
Vấn đề: Sync data giữa DB và Search/Cache/Analytics
  Option 1: Dual writes → Inconsistent (một cái fail)
  Option 2: Polling → Chậm, tốn resources
  Option 3: CDC → Capture DB changes → Stream

CDC captures database changes (INSERT, UPDATE, DELETE)
thành stream of events

  ┌──────────┐    ┌──────┐    ┌──────────────┐
  │PostgreSQL│───►│ CDC  │───►│ Kafka Topic  │
  │ WAL      │    │Debezium   │ "db.orders"  │
  └──────────┘    └──────┘    └──────┬───────┘
                                     │
                          ┌──────────┼──────────┐
                          ▼          ▼          ▼
                    Elasticsearch  Redis     Analytics
                    (Search index) (Cache)   (Data Lake)
```

### 4.2 Debezium CDC 事件

```json
{
  "before": { "id": 1, "name": "Old Name", "status": "pending" },
  "after":  { "id": 1, "name": "New Name", "status": "shipped" },
  "source": {
    "connector": "postgresql",
    "db": "ecommerce",
    "table": "orders",
    "lsn": 12345678
  },
  "op": "u",
  "ts_ms": 1705312200000
}
```

### 4.3 用例

```
1. Search Sync:
   DB → CDC → Kafka → Elasticsearch
   Mọi thay đổi DB tự động update search index

2. Cache Invalidation:
   DB → CDC → Kafka → Consumer → Redis.delete(key)
   Cache tự động invalidate khi data thay đổi

3. Cross-service Sync:
   Service A DB → CDC → Kafka → Service B
   Service B có read model của Service A data

4. Analytics:
   Production DB → CDC → Kafka → Data Lake
   Real-time data pipeline, không ảnh hưởng production
```

---

## 5. Lambda 與 Kappa 架構

### 5.1 Lambda 架構

```
                    ┌─────────────────────────┐
                    │     Batch Layer          │
  Data ────────────►│  (Hadoop/Spark)          │
  Source    │       │  Complete, accurate      │──► Batch View
            │       │  High latency            │
            │       └─────────────────────────┘
            │
            │       ┌─────────────────────────┐
            └──────►│     Speed Layer          │
                    │  (Storm/Flink)           │──► Real-time View
                    │  Approximate, fast       │
                    │  Low latency             │
                    └─────────────────────────┘
                              │
                    ┌─────────▼───────────────┐
                    │    Serving Layer         │
                    │  Merge batch + realtime  │──► Query
                    └─────────────────────────┘

Nhược điểm: Maintain 2 pipelines (batch + speed)
            Duplicate logic
```

### 5.2 Kappa 架構

```
  Data ──► Kafka (immutable log) ──► Stream Processing ──► View
  Source                              (Flink/Kafka Streams)

  Reprocessing:
    Replay Kafka log từ đầu
    → Rebuild views (thay vì batch job)

  Ưu điểm: 1 pipeline duy nhất
  Nhược điểm: Cần retained log đủ lâu
              Complex reprocessing
```

---

## 6. 即時管道範例

```
E-commerce Real-time Analytics:

  Web/App Events ──► Kafka "clickstream" ──┐
                                            │
  Order Events ──► Kafka "orders" ─────────┤
                                            │
  Payment Events ──► Kafka "payments" ─────┤
                                            ▼
                                    ┌──────────────┐
                                    │ Flink/Kafka  │
                                    │ Streams      │
                                    │              │
                                    │ • Sessionize │
                                    │ • Aggregate  │
                                    │ • Enrich     │
                                    │ • Detect     │
                                    │   anomalies  │
                                    └──────┬───────┘
                                           │
                              ┌────────────┼────────────┐
                              ▼            ▼            ▼
                        ┌──────────┐ ┌──────────┐ ┌──────────┐
                        │Dashboard │ │ Alert    │ │ Data     │
                        │(Grafana) │ │ System   │ │ Lake     │
                        │real-time │ │(PagerDuty│ │(long-term│
                        │metrics   │ │ Slack)   │ │analytics)│
                        └──────────┘ └──────────┘ └──────────┘
```

---

## 總結

|概念 |說明 |工具|
|--------|--------|--------|
|串流處理 |即時事件處理|卡夫卡流、Flink |
|開窗 |依時間將事件分組 |翻滾、滑動、訓練 |
|疾病預防控制中心|捕獲資料庫變更 |麥克斯韋·德貝齊姆 |
|拉姆達 |批量+速度層| Hadoop + Storm |
|卡帕 |僅限串流媒體、重播 |卡夫卡+Flink|

---

## 練習

1. **管道設計：** 社群媒體需要即時熱門話題。設計流程處理管道：輸入（貼文、按讚、分享）→處理→輸出（每分鐘更新的趨勢清單）。

2. **CDC 實作：** 您有 PostgreSQL（訂單）和 Elasticsearch（搜尋）。設計 CDC 管道以進行同步。案例處理：Elasticsearch宕機2小時後恢復。

3. **視窗策略：** 詐欺偵測：如果信用卡在 10 分鐘內有超過 5 筆交易，則發出警報。使用什麼類型的窗戶？如何處理遲到事件？
