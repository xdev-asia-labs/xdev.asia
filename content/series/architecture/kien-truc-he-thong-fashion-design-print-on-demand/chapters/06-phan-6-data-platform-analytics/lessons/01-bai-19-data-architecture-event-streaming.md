---
id: 019f0b20-a601-7001-e001-f2b8f9000601
title: 'Bài 19: Data Architecture & Event Streaming — Event Sourcing, Kafka, Data Lake & Real-time Processing'
slug: bai-19-data-architecture-event-streaming
description: >-
  Kiến trúc data platform cho POD, event sourcing, Apache Kafka event streaming,
  CDC (Debezium), data lake (S3 + Iceberg), real-time processing (Flink),
  data governance, schema registry, data lineage.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 6: Data Platform & Analytics"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
---

<h2 id="1-data-architecture"><strong>1. Data Architecture Overview</strong></h2>

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

<h2 id="2-event-sourcing"><strong>2. Event Sourcing Pattern</strong></h2>

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

<h2 id="3-kafka-configuration"><strong>3. Kafka Event Streaming</strong></h2>

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

<h2 id="4-cdc-debezium"><strong>4. CDC (Change Data Capture) với Debezium</strong></h2>

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

<h2 id="5-stream-processing"><strong>5. Stream Processing (Apache Flink)</strong></h2>

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

<h2 id="6-data-lake"><strong>6. Data Lake Architecture</strong></h2>

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

<h2 id="7-schema-registry"><strong>7. Schema Registry & Data Governance</strong></h2>

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

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<table>
<thead>
<tr><th>Component</th><th>Technology</th><th>Purpose</th></tr>
</thead>
<tbody>
<tr><td>Event Streaming</td><td>Apache Kafka (3-node)</td><td>Reliable event backbone cho all services</td></tr>
<tr><td>CDC</td><td>Debezium + PostgreSQL</td><td>DB changes → Kafka topics automatically</td></tr>
<tr><td>Stream Processing</td><td>Apache Flink</td><td>Real-time aggregations, fraud detection</td></tr>
<tr><td>Data Lake</td><td>S3 + Apache Iceberg</td><td>Bronze/Silver/Gold medallion architecture</td></tr>
<tr><td>Schema Registry</td><td>Confluent Schema Registry</td><td>Schema evolution, compatibility validation</td></tr>
<tr><td>Data Governance</td><td>DataHub / Apache Atlas</td><td>Data lineage, catalog, access control</td></tr>
</tbody>
</table>
