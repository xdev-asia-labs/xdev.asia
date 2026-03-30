---
id: 019d8a21-c110-7001-d001-e1f2a3b4c515
title: "Bài 15: Stream Processing & Real-time Data Pipelines"
slug: bai-15-stream-processing-real-time-data-pipelines
description: >-
  Batch vs Stream Processing. Apache Kafka Streams, Apache
  Flink cơ bản. Windowing strategies. Change Data Capture
  (CDC). Real-time analytics pipeline. Lambda vs Kappa
  Architecture.
duration_minutes: 150
is_free: false
video_url: null
sort_order: 15
section_title: "Phần 4: Asynchronous Processing & Communication"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Batch processing xử lý data theo đợt (hàng giờ, hàng ngày). Nhưng trong thời đại real-time, user muốn thấy kết quả ngay lập tức. **Stream Processing** xử lý data ngay khi nó xuất hiện.

---

## 1. Batch vs Stream Processing

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

| Tiêu chí | Batch | Stream |
|----------|-------|--------|
| Latency | Phút → giờ | Ms → giây |
| Data | Bounded (có điểm kết thúc) | Unbounded (liên tục) |
| Processing | Toàn bộ dataset | Từng event/micro-batch |
| Complexity | Thấp hơn | Cao hơn |
| Tools | Spark, Hadoop | Kafka Streams, Flink |

---

## 2. Stream Processing Concepts

### 2.1 Windowing

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

### 2.2 Event Time vs Processing Time

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

## 3. Apache Kafka Streams

### 3.1 Architecture

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

### 3.2 Ví dụ: Real-time Order Stats

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

## 4. Change Data Capture (CDC)

### 4.1 CDC là gì?

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

### 4.2 Debezium CDC Event

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

### 4.3 Use Cases

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

## 5. Lambda vs Kappa Architecture

### 5.1 Lambda Architecture

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

### 5.2 Kappa Architecture

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

## 6. Real-time Pipeline Example

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

## Tổng kết

| Concept | Mô tả | Tool |
|---------|--------|------|
| Stream Processing | Xử lý event real-time | Kafka Streams, Flink |
| Windowing | Nhóm events theo thời gian | Tumbling, Sliding, Session |
| CDC | Capture DB changes | Debezium, Maxwell |
| Lambda | Batch + Speed layers | Hadoop + Storm |
| Kappa | Stream only, replay | Kafka + Flink |

---

## Bài tập

1. **Pipeline Design:** Social media cần real-time trending topics. Thiết kế stream processing pipeline: input (posts, likes, shares) → processing → output (trending list update mỗi phút).

2. **CDC Implementation:** Bạn có PostgreSQL (orders) và Elasticsearch (search). Thiết kế CDC pipeline để sync. Xử lý case: Elasticsearch down 2 giờ rồi recover.

3. **Window Strategy:** Fraud detection: alert nếu 1 credit card có > 5 transactions trong 10 phút. Dùng window type nào? Xử lý late events thế nào?
