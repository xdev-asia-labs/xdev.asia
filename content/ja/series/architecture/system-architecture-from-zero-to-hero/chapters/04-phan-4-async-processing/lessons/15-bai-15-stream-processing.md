---
id: 019d8a21-c110-7001-d001-e1f2a3b4c515
title: 'レッスン 15: ストリーム処理とリアルタイム データ パイプライン'
slug: bai-15-stream-processing-real-time-data-pipelines
description: >-
  バッチ処理とストリーム処理。 Apache Kafka ストリーム、基本的な Apache Flink。ウィンドウ戦略。変更データ キャプチャ
  (CDC)。リアルタイム分析パイプライン。ラムダ アーキテクチャとカッパ アーキテクチャ。
duration_minutes: 150
is_free: false
video_url: null
sort_order: 15
section_title: 'パート 4: 非同期処理と通信'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ アーキテクチャ — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: ストリーム処理とリアルタイム データ</tspan>
      <tspan x="60" dy="42">パイプライン</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 非同期処理と通信</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

バッチ処理では、データをバッチ (時間ごと、日ごと) で処理します。しかし、リアルタイム時代では、ユーザーは結果をすぐに確認したいと考えています。 **ストリーム処理** は、表示されたとおりにデータを処理します。

---

## 1. バッチ処理とストリーム処理

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

|基準 |バッチ |ストリーム |
|----------|----------|----------|
|レイテンシ |分 → 時間 |さん → 秒 |
|データ |有界 (終点あり) |無制限 (継続中) |
|処理 |データセット全体 |各イベント/マイクロバッチ |
|複雑さ |下 |より高い |
|ツール |スパーク、Hadoop |カフカストリーム、フリンク |

---

## 2. ストリーム処理の概念

### 2.1 ウィンドウ処理

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

### 2.2 イベント時間と処理時間

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

## 3. Apache Kafka ストリーム

### 3.1 アーキテクチャ

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

### 3.2 例: リアルタイムの注文統計

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

## 4. 変更データ キャプチャ (CDC)

### 4.1 CDC とは何ですか?

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

### 4.2 Debezium CDC イベント

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

### 4.3 使用例

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

## 5. Lambda アーキテクチャと Kappa アーキテクチャ

### 5.1 ラムダアーキテクチャ

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

### 5.2 Kappa アーキテクチャ

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

## 6. リアルタイム パイプラインの例

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

## 概要

|コンセプト |説明 |ツール |
|----------|----------|----------|
|ストリーム処理 |リアルタイムイベント処理 |カフカストリーム、フリンク |
|ウィンドウ処理 |イベントを時間ごとにグループ化する |タンブリング、スライディング、セッション |
| CDC | DB の変更をキャプチャ |マクスウェル・デベジウム |
|ラムダ |バッチ + スピード レイヤー | Hadoop + ストーム |
|カッパ |ストリーミングのみ、リプレイ |カフカ + フリンク |

---

## 演習

1. **パイプライン設計:** ソーシャル メディアにはリアルタイムのトレンド トピックが必要です。ストリーム処理パイプラインの設計: 入力 (投稿、いいね、共有) → 処理 → 出力 (毎分更新されるトレンド リスト)。

2. **CDC 実装:** PostgreSQL (注文) と Elasticsearch (検索) があります。同期する CDC パイプラインを設計します。ケースの処理: Elasticsearch は 2 時間ダウンしましたが、その後回復しました。

3. **窓口戦略:** 不正検出: クレジット カードで 10 分間に 5 件を超える取引がある場合に警告します。どのような種類の窓を使用しますか?遅れたイベントにどう対処するか?
