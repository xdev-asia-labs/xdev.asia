---
id: 019f0b20-a601-7001-e001-f2b8f9000601
title: 第 19 課：資料架構和事件流 - 事件溯源、Kafka、資料湖和即時處理
slug: bai-19-data-architecture-event-streaming
description: >-
  用於 POD、事件來源、Apache Kafka 事件流、CDC (Debezium)、資料湖 (S3 + Iceberg)、即時處理
  (Flink)、資料治理、模式註冊、資料沿襲的資料平台架構。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 19
section_title: 第 6 部分：資料平台與分析
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: 時裝設計與按需印刷系統架構－從領域分析到生產
  slug: kien-truc-he-thong-fashion-design-print-on-demand
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5933" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5933)"/>

  <!-- Decorations -->
  <g>
    <circle cx="982" cy="36" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="864" cy="38" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="746" cy="40" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="628" cy="42" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="1010" cy="44" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="236" x2="1100" y2="316" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="266" x2="1050" y2="336" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1012.8467875173176,170.5 1012.8467875173176,201.5 986,217 959.1532124826824,201.5 959.1532124826824,170.5 986,155" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ 建築 — 第 19 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 19 課：資料架構與事件</tspan>
      <tspan x="60" dy="42">串流媒體 — 事件溯源、Kafka、數據</tspan>
      <tspan x="60" dy="42">湖和即時處理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">時裝設計與按需印刷系統架構－從領域分析到生產</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：資料平台與分析</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-data-architecture"><strong>1. 資料架構概述</strong></h2>

<pre><code class="language-text">POD Platform Data Architecture (Event-Driven)

Microservices                Event Backbone              Data Platform
┌──────────┐                                            ┌───────────────┐
│ Design   │──┐                                         │  Data Lake    │
│ Service  │  │          ┌──────────────────┐            │  (S3/Iceberg) │
├──────────┤  │          │                  │            ├───────────────┤
│ Product  │──┼─────────▶│  Apache Kafka    │───────────▶│  Data         │
│ Service  │  │          │  Event Streaming │            │  Warehouse    │
├──────────┤  │          │                  │            │  (Snowflake/  │
│ Order    │──┤          │  Topics:         │            │   ClickHouse) │
│ Service  │  │          │  - design.events │            ├───────────────┤
├──────────┤  │          │  - order.events  │───────────▶│  Vector DB    │
│ Payment  │──┤          │  - product.events│            │  (Qdrant)     │
│ Service  │  │          │  - user.events   │            ├───────────────┤
├──────────┤  │          │  - print.events  │───────────▶│  Feature      │
│ Shipping │──┘          │  - tracking.*    │            │  Store        │
│ Service  │             └────────┬─────────┘            └───────────────┘
└──────────┘                      │                              │
                                  │                              ▼
     ┌────────────────────────────┤                      ┌───────────────┐
     │                            │                      │  Analytics &  │
     ▼                            ▼                      │  ML Platform  │
┌──────────┐              ┌──────────────┐               └───────────────┘
│  CDC     │              │  Stream      │
│(Debezium)│              │  Processing  │
│          │              │  (Flink)     │
│ DB → Kafka│             │              │
└──────────┘              └──────────────┘
</code></pre>

<h2 id="2-event-sourcing"><strong>2. 事件溯源模式</strong></h2>

<pre><code class="language-typescript">// Mọi state change → event → event store
interface EventStore {
  append(streamId: string, events: DomainEvent[]): Promise&lt;void&gt;;
  getEvents(streamId: string, fromVersion?: number): Promise&lt;DomainEvent[]&gt;;
  getSnapshot(streamId: string): Promise&lt;AggregateSnapshot | null&gt;;
}

// Domain events for POD
interface DomainEvent {
  eventId: string;
  aggregateId: string;
  aggregateType: string;           // 'Order', 'Design', 'Product'
  eventType: string;
  version: number;
  timestamp: Date;
  data: Record&lt;string, unknown&gt;;
  metadata: {
    userId: string;
    correlationId: string;
    causationId: string;
  };
}

// Event types across bounded contexts
const POD_EVENT_TYPES = {
  // Design context
  'design.created': { designId: 'string', designerId: 'string', title: 'string' },
  'design.updated': { designId: 'string', changes: 'object' },
  'design.published': { designId: 'string', publishedAt: 'datetime' },
  'design.qc_passed': { designId: 'string', score: 'number' },
  'design.qc_failed': { designId: 'string', reason: 'string' },
  
  // Order context
  'order.created': { orderId: 'string', items: 'array', total: 'number' },
  'order.paid': { orderId: 'string', paymentId: 'string', amount: 'number' },
  'order.submitted_to_supplier': { orderId: 'string', supplierId: 'string' },
  'order.in_production': { orderId: 'string', supplierOrderId: 'string' },
  'order.shipped': { orderId: 'string', trackingNumber: 'string', carrier: 'string' },
  'order.delivered': { orderId: 'string', deliveredAt: 'datetime' },
  
  // User context
  'user.registered': { userId: 'string', email: 'string' },
  'user.product_viewed': { userId: 'string', productId: 'string' },
  'user.product_favorited': { userId: 'string', productId: 'string' },
  'user.search_performed': { userId: 'string', query: 'string', results: 'number' },
};
</code></pre>

<h2 id="3-kafka-configuration"><strong>3.Kafka事件流</strong></h2>

<pre><code class="language-typescript">// Kafka topology for POD platform
const KAFKA_TOPICS = {
  // Domain events (high throughput)
  'pod.design.events': {
    partitions: 12,
    replicationFactor: 3,
    retentionMs: 7 * 24 * 3600 * 1000,     // 7 days
    cleanupPolicy: 'delete',
    partitionKey: 'designId',
  },
  'pod.order.events': {
    partitions: 24,                           // Higher throughput
    replicationFactor: 3,
    retentionMs: 30 * 24 * 3600 * 1000,     // 30 days
    cleanupPolicy: 'delete',
    partitionKey: 'orderId',
  },
  'pod.user.events': {
    partitions: 12,
    replicationFactor: 3,
    retentionMs: 90 * 24 * 3600 * 1000,     // 90 days
    cleanupPolicy: 'delete',
    partitionKey: 'userId',
  },
  
  // CDC topics (from Debezium)
  'pod.cdc.products': {
    partitions: 6,
    replicationFactor: 3,
    retentionMs: 7 * 24 * 3600 * 1000,
    cleanupPolicy: 'compact',               // Keep latest per key
  },
  
  // Dead letter queue
  'pod.dlq': {
    partitions: 3,
    replicationFactor: 3,
    retentionMs: 30 * 24 * 3600 * 1000,
    cleanupPolicy: 'delete',
  },
};

// Kafka producer + consumer patterns
import { Kafka, Partitioners } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'pod-platform',
  brokers: ['kafka-1:9092', 'kafka-2:9092', 'kafka-3:9092'],
  ssl: true,
  sasl: {
    mechanism: 'scram-sha-512',
    username: process.env.KAFKA_USERNAME!,
    password: process.env.KAFKA_PASSWORD!,
  },
});

// Event publisher (used by all services)
class EventPublisher {
  private producer = kafka.producer({
    createPartitioner: Partitioners.DefaultPartitioner,
    idempotent: true,                       // Exactly-once semantics
    maxInFlightRequests: 5,
    transactionalId: 'pod-producer',
  });

  async publish(event: DomainEvent): Promise&lt;void&gt; {
    const topic = `pod.${event.aggregateType.toLowerCase()}.events`;
    
    await this.producer.send({
      topic,
      messages: [{
        key: event.aggregateId,
        value: JSON.stringify(event),
        headers: {
          'event-type': event.eventType,
          'correlation-id': event.metadata.correlationId,
          'content-type': 'application/json',
        },
        timestamp: event.timestamp.toISOString(),
      }],
    });
  }
}
</code></pre>

<h2 id="4-cdc-debezium"><strong>4. CDC（變更資料擷取）與 Debezium</strong></h2>

<pre><code class="language-json">// Debezium connector config cho PostgreSQL
{
  "name": "pod-products-connector",
  "config": {
    "connector.class": "io.debezium.connector.postgresql.PostgresConnector",
    "database.hostname": "postgres-primary",
    "database.port": "5432",
    "database.user": "debezium",
    "database.password": "${DEBEZIUM_PASSWORD}",
    "database.dbname": "pod_products",
    "database.server.name": "pod",
    "table.include.list": "public.products,public.variants,public.designs",
    "plugin.name": "pgoutput",
    
    "transforms": "unwrap,route",
    "transforms.unwrap.type": "io.debezium.transforms.ExtractNewRecordState",
    "transforms.unwrap.drop.tombstones": "false",
    "transforms.route.type": "org.apache.kafka.connect.transforms.RegexRouter",
    "transforms.route.regex": "pod\\.public\\.(.*)",
    "transforms.route.replacement": "pod.cdc.$1",
    
    "key.converter": "io.confluent.connect.avro.AvroConverter",
    "value.converter": "io.confluent.connect.avro.AvroConverter",
    "key.converter.schema.registry.url": "http://schema-registry:8081",
    "value.converter.schema.registry.url": "http://schema-registry:8081",
    
    "slot.name": "pod_products_slot",
    "publication.name": "pod_products_pub",
    "heartbeat.interval.ms": "10000"
  }
}
</code></pre>

<h2 id="5-stream-processing"><strong>5.流處理（Apache Flink）</strong></h2>

<pre><code class="language-typescript">// Real-time stream processing use cases cho POD
// (Conceptual — Flink jobs thực tế viết bằng Java/Scala hoặc Flink SQL)

// Use case 1: Real-time sales dashboard
// Flink SQL:
const realtimeSalesQuery = `
  SELECT 
    TUMBLE_START(event_time, INTERVAL '5' MINUTE) AS window_start,
    product_category,
    COUNT(*) AS order_count,
    SUM(total_amount) AS revenue,
    COUNT(DISTINCT customer_id) AS unique_customers
  FROM order_events
  WHERE event_type = 'order.paid'
  GROUP BY 
    TUMBLE(event_time, INTERVAL '5' MINUTE),
    product_category
`;

// Use case 2: Fraud detection — real-time velocity check
const fraudDetectionQuery = `
  SELECT 
    customer_email,
    COUNT(*) AS order_count,
    SUM(total_amount) AS total_spent
  FROM order_events
  WHERE event_type = 'order.created'
    AND event_time > CURRENT_TIMESTAMP - INTERVAL '1' HOUR
  GROUP BY customer_email
  HAVING COUNT(*) > 5 OR SUM(total_amount) > 1000
`;

// Use case 3: Supplier performance monitoring
const supplierMonitoring = `
  SELECT 
    supplier_id,
    AVG(TIMESTAMPDIFF(HOUR, submitted_at, shipped_at)) AS avg_production_hours,
    COUNT(CASE WHEN status = 'production_failed' THEN 1 END) AS fail_count,
    COUNT(*) AS total_orders
  FROM supplier_order_events
  GROUP BY 
    HOP(event_time, INTERVAL '1' HOUR, INTERVAL '24' HOUR),
    supplier_id
`;
</code></pre>

<h2 id="6-data-lake"><strong>6. 資料湖架構</strong></h2>

<pre><code class="language-text">Data Lake Layered Architecture (Medallion)

┌─────────────────────────────────────────────────────────┐
│                        Gold Layer                        │
│  (Business-ready aggregates)                             │
│  - dim_products, dim_customers, dim_suppliers            │
│  - fact_orders, fact_design_generations, fact_prints      │
│  - agg_daily_revenue, agg_supplier_performance           │
│  Format: Iceberg tables, partitioned by date             │
├─────────────────────────────────────────────────────────┤
│                       Silver Layer                       │
│  (Cleaned, deduplicated, joined)                         │
│  - orders_enriched (order + customer + product joined)   │
│  - designs_with_metrics (design + views + sales)         │
│  - supplier_orders_detailed                              │
│  Format: Parquet, partitioned                            │
├─────────────────────────────────────────────────────────┤
│                       Bronze Layer                       │
│  (Raw events, CDC, API dumps)                            │
│  - kafka events (raw JSON)                               │
│  - CDC changestreams                                     │
│  - API response dumps (supplier, channels)               │
│  Format: JSON/Avro, partitioned by date                  │
└─────────────────────────────────────────────────────────┘
│                                                          │
│  Storage: S3 + Apache Iceberg (table format)             │
│  Compute: Spark / Flink / Trino                          │
│  Catalog: AWS Glue / Hive Metastore                      │
│  Governance: Apache Atlas / DataHub                      │
└──────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="7-schema-registry"><strong>7. 模式註冊與資料治理</strong></h2>

<pre><code class="language-typescript">// Schema evolution for event data
// Using Confluent Schema Registry with Avro

// Order event schema (Avro)
const orderCreatedSchema = {
  type: 'record',
  name: 'OrderCreated',
  namespace: 'com.pod.order.events',
  fields: [
    { name: 'orderId', type: 'string' },
    { name: 'customerId', type: 'string' },
    { name: 'items', type: { type: 'array', items: {
      type: 'record',
      name: 'OrderItem',
      fields: [
        { name: 'productId', type: 'string' },
        { name: 'variantSku', type: 'string' },
        { name: 'quantity', type: 'int' },
        { name: 'unitPrice', type: { type: 'bytes', logicalType: 'decimal', precision: 10, scale: 2 } },
      ],
    }}},
    { name: 'totalAmount', type: { type: 'bytes', logicalType: 'decimal', precision: 10, scale: 2 } },
    { name: 'currency', type: 'string' },
    { name: 'createdAt', type: { type: 'long', logicalType: 'timestamp-millis' } },
    // v2: Added field (backward compatible)
    { name: 'salesChannel', type: ['null', 'string'], default: null },
  ],
};

// Compatibility modes:
// BACKWARD — new schema can read old data (add optional fields)
// FORWARD — old schema can read new data (remove optional fields)  
// FULL — both directions
</code></pre>

<h2 id="8-tong-ket"><strong>八、總結</strong></h2>

<table>
<thead>
<tr><th>組件</th><th>科技</th><th>目的</th></tr>
</thead>
<tbody>
<tr><td>事件流</td><td>Apache Kafka（3 節點）</td><td>所有服務的可靠事件主幹</td></tr>
<tr><td>疾病預防控制中心</td><td>Debezium + PostgreSQL</td><td>自動變更資料庫 → Kafka 主題</td></tr>
<tr><td>串流處理</td><td>阿帕契弗林克</td><td>即時聚合、詐欺檢測</td></tr>
<tr><td>資料湖</td><td>S3 + 阿帕契冰山</td><td>銅/銀/金獎章建築</td></tr>
<tr><td>模式註冊表</td><td>匯合模式註冊表</td><td>架構演進、相容性驗證</td></tr>
<tr><td>資料治理</td><td>資料中心/Apache Atlas</td><td>資料沿襲、目錄、存取控制</td></tr>
</tbody>
</table>
