---
id: 019d8a22-c311-7a10-b001-a1b2c3d4e511
title: "Bài 11: Data Consistency Patterns — Outbox, CDC & Eventual Consistency"
slug: bai-11-data-consistency-patterns-outbox-cdc-eventual-consistency
description: >-
  CAP Theorem trong thực tế, Eventual Consistency, Outbox Pattern,
  Change Data Capture (CDC) với Debezium, idempotent consumers,
  và chiến lược đảm bảo data consistency end-to-end.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 3: Data Management trong Microservices"
course:
  id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
  title: "Cloud Native Microservices Architecture"
  slug: cloud-native-microservices-architecture
---

## Giới thiệu

Khi mỗi microservice có database riêng, thách thức lớn nhất là đảm bảo **data consistency** giữa các service. Bài học này đi sâu vào các pattern giải quyết vấn đề dual write, reliable event publishing và eventual consistency.

---

## 1. Dual Write Problem

### 1.1 Vấn đề

Khi một service cần vừa **cập nhật database** vừa **publish event**, nếu một trong hai thất bại → inconsistency:

```
Scenario 1: DB thành công, Event thất bại
┌──────────────┐
│ Order Service│
│              │
│ 1. Save to DB ✅ (Order created)
│ 2. Publish to Kafka ❌ (Network error)
│              │
│ → Order tồn tại trong DB nhưng không ai biết
└──────────────┘

Scenario 2: Event thành công, DB thất bại
┌──────────────┐
│ Order Service│
│              │
│ 1. Publish to Kafka ✅ (OrderCreated sent)
│ 2. Save to DB ❌ (DB connection failed)
│              │
│ → Downstream services xử lý order không tồn tại
└──────────────┘
```

### 1.2 Tại sao không dùng distributed transaction?

```
// ❌ Anti-pattern: Distributed transaction giữa DB và Kafka
@Transactional
public void createOrder(Order order) {
    database.save(order);           // Transaction participant 1
    kafka.publish(orderCreated);    // Transaction participant 2
    // Kafka không support XA/2PC → KHÔNG THỂ atomic
}
```

---

## 2. Outbox Pattern

### 2.1 Concept

Ghi event vào **outbox table** trong **cùng database transaction** với business data. Một process riêng (Relay/Poller) đọc outbox và publish lên message broker:

```
┌─────────────────────────────────────────────────┐
│                Order Service                     │
│                                                  │
│  ┌───────────────────────────────────────────┐   │
│  │ Database Transaction (ACID)               │   │
│  │                                           │   │
│  │  INSERT INTO orders (...) VALUES (...);   │   │
│  │  INSERT INTO outbox (...) VALUES (...);   │   │
│  │                                           │   │
│  │  → Both succeed or both fail              │   │
│  └───────────────────────────────────────────┘   │
│                                                  │
│  ┌───────────────────────────────────────────┐   │
│  │ Outbox Relay (separate process)           │   │
│  │                                           │   │
│  │  1. Poll outbox table                     │   │
│  │  2. Publish event to Kafka                │   │
│  │  3. Mark outbox entry as published        │   │
│  └────────────────────┬──────────────────────┘   │
└───────────────────────┼──────────────────────────┘
                        │
                        ▼
                   ┌─────────┐
                   │  Kafka  │
                   └─────────┘
```

### 2.2 Implementation

**Outbox Table:**

```sql
CREATE TABLE outbox (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    aggregate_type  VARCHAR(255) NOT NULL,   -- "Order"
    aggregate_id    VARCHAR(255) NOT NULL,   -- "O-001"
    event_type      VARCHAR(255) NOT NULL,   -- "OrderCreated"
    payload         JSONB NOT NULL,          -- event data
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    published_at    TIMESTAMPTZ,             -- NULL = chưa publish
    retries         INT DEFAULT 0
);

CREATE INDEX idx_outbox_unpublished 
ON outbox (created_at) WHERE published_at IS NULL;
```

**Business Logic:**

```java
@Service
public class OrderService {

    @Transactional
    public Order createOrder(CreateOrderCommand cmd) {
        // 1. Save business data
        Order order = new Order(cmd);
        order.setStatus(OrderStatus.PENDING);
        orderRepository.save(order);

        // 2. Save outbox event (same transaction!)
        OutboxEvent event = OutboxEvent.builder()
            .aggregateType("Order")
            .aggregateId(order.getId())
            .eventType("OrderCreated")
            .payload(toJson(new OrderCreatedPayload(order)))
            .build();
        outboxRepository.save(event);

        return order;
    }
}
```

**Outbox Relay (Polling):**

```java
@Scheduled(fixedDelay = 500) // Poll mỗi 500ms
public void publishOutboxEvents() {
    List<OutboxEvent> events = outboxRepository
        .findUnpublishedOrderByCreatedAt(BATCH_SIZE);

    for (OutboxEvent event : events) {
        try {
            kafkaTemplate.send(
                event.getAggregateType().toLowerCase() + ".events",
                event.getAggregateId(),
                event.getPayload()
            ).get(); // Wait for Kafka ACK

            event.setPublishedAt(Instant.now());
            outboxRepository.save(event);
        } catch (Exception e) {
            event.incrementRetries();
            if (event.getRetries() >= MAX_RETRIES) {
                event.moveToDeadLetter();
            }
            outboxRepository.save(event);
        }
    }
}
```

### 2.3 Ưu nhược điểm

| Ưu điểm | Nhược điểm |
|---------|-----------|
| Guaranteed delivery (at-least-once) | Polling delay (latency) |
| Atomic với business data | Outbox table cần cleanup |
| Simple implementation | At-least-once → consumer phải idempotent |
| Không cần thay đổi database technology | Thêm storage overhead |

---

## 3. Change Data Capture (CDC)

### 3.1 Concept

CDC capture **database changes** (INSERT, UPDATE, DELETE) từ **transaction log** (WAL trong PostgreSQL) và stream trực tiếp lên message broker:

```
┌──────────────────────────────────────────────┐
│               Order Service                   │
│                                               │
│  ┌────────────┐    ┌──────────────────────┐  │
│  │ Application│───▶│ PostgreSQL           │  │
│  │            │    │ ┌──────────────────┐ │  │
│  └────────────┘    │ │ orders table     │ │  │
│                    │ └──────────────────┘ │  │
│                    │ ┌──────────────────┐ │  │
│                    │ │ outbox table     │ │  │
│                    │ └──────────────────┘ │  │
│                    │ ┌──────────────────┐ │  │
│                    │ │ WAL (Write-Ahead │ │  │
│                    │ │ Log)             │ │  │
│                    │ └────────┬─────────┘ │  │
│                    └──────────┼───────────┘  │
└───────────────────────────────┼───────────────┘
                                │
                    ┌───────────▼───────────┐
                    │  Debezium Connector   │
                    │  (reads WAL stream)   │
                    └───────────┬───────────┘
                                │
                    ┌───────────▼───────────┐
                    │     Apache Kafka      │
                    │  topic: outbox.events │
                    └───────────────────────┘
```

### 3.2 Debezium Configuration

```json
{
  "name": "order-outbox-connector",
  "config": {
    "connector.class": "io.debezium.connector.postgresql.PostgresConnector",
    "database.hostname": "order-db",
    "database.port": "5432",
    "database.user": "debezium",
    "database.password": "${file:/secrets/db-password}",
    "database.dbname": "orders",
    "database.server.name": "order-service",
    "plugin.name": "pgoutput",
    
    "table.include.list": "public.outbox",
    
    "transforms": "outbox",
    "transforms.outbox.type": "io.debezium.transforms.outbox.EventRouter",
    "transforms.outbox.table.field.event.id": "id",
    "transforms.outbox.table.field.event.key": "aggregate_id",
    "transforms.outbox.table.field.event.type": "event_type",
    "transforms.outbox.table.field.event.payload": "payload",
    "transforms.outbox.route.topic.replacement": "${routedByValue}.events",
    
    "transforms.outbox.table.expand.json.payload": true
  }
}
```

### 3.3 CDC vs Polling

| Tiêu chí | Polling (Outbox Relay) | CDC (Debezium) |
|----------|----------------------|----------------|
| Latency | 100ms-1s (poll interval) | ~10ms (near real-time) |
| Database load | Frequent queries | Reads WAL (minimal impact) |
| Infrastructure | Simple (no extra component) | Cần Debezium + Kafka Connect |
| Complexity | Low | Medium |
| Reliability | Good | Excellent (WAL = source of truth) |
| **Khuyến nghị** | **Small/Medium scale** | **Large scale, low latency** |

---

## 4. Idempotent Consumers

### 4.1 Tại sao cần Idempotency?

At-least-once delivery có thể gửi **duplicate messages**:

```
Producer ──msg──▶ Broker ──msg──▶ Consumer
                                    │
                              Process ✅
                                    │
                              ACK ──▶ Broker (network timeout!)
                                    │
                         Broker re-delivers msg
                                    │
                              Consumer receives msg AGAIN
                              Process AGAIN? → Duplicate!
```

### 4.2 Implementation Strategies

**Strategy 1: Idempotency Key Table**

```sql
CREATE TABLE processed_events (
    event_id    UUID PRIMARY KEY,
    processed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Consumer logic
BEGIN;
  -- Check if already processed
  INSERT INTO processed_events (event_id) VALUES ($event_id)
  ON CONFLICT (event_id) DO NOTHING;
  
  -- If inserted (not duplicate), process the event
  IF FOUND THEN
    -- Business logic here
    UPDATE inventory SET quantity = quantity - $qty WHERE product_id = $pid;
  END IF;
COMMIT;
```

**Strategy 2: Natural Idempotency**

```java
// SET operations are naturally idempotent
// "Set order status to CONFIRMED" — same result regardless of how many times

@EventHandler
public void on(PaymentCompletedEvent event) {
    Order order = orderRepository.findById(event.getOrderId());
    
    // Idempotent check: if already confirmed, skip
    if (order.getStatus() == OrderStatus.CONFIRMED) {
        return;
    }
    
    order.setStatus(OrderStatus.CONFIRMED);
    orderRepository.save(order);
}
```

**Strategy 3: Version-based (Optimistic Locking)**

```sql
UPDATE orders 
SET status = 'CONFIRMED', version = version + 1
WHERE id = 'O-001' AND version = 3;

-- If version doesn't match → someone else already updated → skip
-- Rows affected = 0 → duplicate processing detected
```

---

## 5. Eventual Consistency Strategies

### 5.1 Read Your Own Writes

Đảm bảo user luôn thấy dữ liệu mình vừa thay đổi:

```
Approach 1: Sticky Session
  → Route user requests đến cùng replica đã nhận write

Approach 2: Client-side Optimistic Update
  → UI cập nhật ngay trước khi server confirm, rollback nếu fail

Approach 3: Write-through Read Model
  → Sau khi write, đồng bộ invalidate read cache

Client ──POST /orders──▶ Order Service ──▶ Write DB
                                              │
Client ──GET /orders/123──▶ Order Service     │
  ↑                              │            │
  │                     Check: event synced?  │
  │                           Yes ──▶ Read DB │
  │                           No  ──▶ Write DB│ (fallback)
  └────────────────────────────────────────────┘
```

### 5.2 Consistency Monitoring

```sql
-- Monitor replication lag
SELECT
    topic,
    partition,
    MAX(offset) - MIN(committed_offset) AS lag
FROM consumer_offsets
GROUP BY topic, partition
HAVING lag > 1000; -- Alert if lag > 1000 messages
```

```yaml
# Prometheus alert for consistency lag
- alert: HighConsumerLag
  expr: kafka_consumer_group_lag > 5000
  for: 5m
  labels:
    severity: warning
  annotations:
    summary: "Consumer lag is high"
    description: "Consumer group {{ $labels.group }} has lag {{ $value }}"
```

---

## 6. End-to-End Pattern

### 6.1 Recommended Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     End-to-End Data Flow                     │
│                                                              │
│  ┌──────────┐    ┌──────────────────────┐    ┌───────────┐  │
│  │ Service  │    │ PostgreSQL           │    │ Debezium  │  │
│  │ Logic    │───▶│ ┌────────┐ ┌───────┐ │───▶│ CDC       │  │
│  │          │    │ │Business│ │Outbox │ │    │ Connector │  │
│  └──────────┘    │ │ Table  │ │ Table │ │    └─────┬─────┘  │
│                  │ └────────┘ └───────┘ │          │        │
│                  └──────────────────────┘          │        │
│                                                    ▼        │
│                                              ┌──────────┐   │
│                                              │  Kafka   │   │
│                                              │  Topic   │   │
│                                              └────┬─────┘   │
│                                                   │         │
│                              ┌────────────────────┼────┐    │
│                              │                    │    │    │
│                        ┌─────▼────┐         ┌─────▼────┐   │
│                        │ Consumer │         │ Consumer │   │
│                        │ Idempot. │         │ Idempot. │   │
│                        │ Check ✓  │         │ Check ✓  │   │
│                        └──────────┘         └──────────┘   │
└─────────────────────────────────────────────────────────────┘

Guarantees:
✅ Atomic write (business data + outbox in same TX)
✅ At-least-once delivery (CDC from WAL)
✅ Exactly-once processing (idempotent consumers)
✅ Near real-time (<50ms latency)
```

---

## Tóm tắt

- **Dual Write Problem** là root cause của data inconsistency trong microservices
- **Outbox Pattern** giải quyết bằng cách ghi event vào cùng DB transaction
- **CDC (Debezium)** đọc WAL stream cho near real-time event delivery
- **Idempotent consumers** đảm bảo exactly-once processing dù at-least-once delivery
- Eventual consistency là unavoidable — design cho nó thay vì chống lại nó
- **Monitoring consistency lag** là bắt buộc cho production
