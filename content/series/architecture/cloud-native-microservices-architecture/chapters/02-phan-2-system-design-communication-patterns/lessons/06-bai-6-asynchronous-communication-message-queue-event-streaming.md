---
id: 019d8a22-c306-7a10-b001-a1b2c3d4e506
title: "Bài 6: Asynchronous Communication — Message Queue & Event Streaming"
slug: bai-6-asynchronous-communication-message-queue-event-streaming
description: >-
  Message Queue (RabbitMQ) vs Event Streaming (Apache Kafka), Pub/Sub pattern,
  Point-to-Point pattern, event schema design, idempotency, và khi nào
  chọn async over sync.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Microservices Design & Communication Patterns"
course:
  id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
  title: "Cloud Native Microservices Architecture"
  slug: cloud-native-microservices-architecture
---

![Bài 6: Asynchronous Communication — Message Queue & Event Streaming](/storage/uploads/2026/03/cn-bai-6-diagram.png)

## Giới thiệu

Giao tiếp bất đồng bộ (asynchronous) cho phép services gửi message mà không cần chờ response. Đây là xương sống của Event-Driven Architecture và là chìa khoá để xây dựng hệ thống loosely coupled, resilient.

---

## 1. Tại sao cần Async Communication?

### 1.1 Vấn đề của Synchronous

```
Sync chain: Order → Payment → Inventory → Notification
                                              │
Vấn đề:                                      │
├── Temporal coupling: Tất cả phải online cùng lúc        
├── Latency: Total = sum(latency mỗi service)
├── Cascading failure: 1 service down → cả chain fail
└── Tight coupling: Order phải biết Payment, Inventory, ...
```

### 1.2 Giải pháp Async

```
Async: Order ──publish event──▶ Message Broker
                                    │
                    ┌───────────────┼───────────────┐
                    ▼               ▼               ▼
                Payment        Inventory       Notification
                (subscribe)    (subscribe)     (subscribe)

Ưu điểm:
├── Temporal decoupling: Services không cần online cùng lúc
├── Performance: Order trả response ngay, không chờ downstream
├── Loose coupling: Order không biết ai subscribe
└── Resilience: Message broker buffer khi consumer down
```

---

## 2. Message Queue — Point-to-Point

### 2.1 Concept

Một producer gửi message, **chỉ một** consumer nhận và xử lý:

```
Producer ──msg──▶ Queue ──msg──▶ Consumer
                  (FIFO)

Nếu có nhiều consumers → Load balancing (round-robin)
Producer ──▶ Queue ──▶ Consumer 1
                   ──▶ Consumer 2
                   ──▶ Consumer 3
Mỗi message chỉ được xử lý bởi MỘT consumer
```

### 2.2 RabbitMQ

```
┌──────────┐    ┌──────────────────────────────────┐    ┌───────────┐
│ Producer │───▶│           RabbitMQ                │───▶│ Consumer  │
└──────────┘    │                                    │    └───────────┘
                │  ┌──────────┐    ┌──────────────┐ │
                │  │ Exchange │───▶│    Queue      │ │
                │  │ (routing)│    │ (buffer msgs) │ │
                │  └──────────┘    └──────────────┘ │
                └──────────────────────────────────┘

Exchange Types:
├── Direct   → Route by exact routing_key
├── Topic    → Route by pattern (order.* , *.created)
├── Fanout   → Broadcast to all bound queues
└── Headers  → Route by message headers
```

### 2.3 Use Cases cho Message Queue

- **Task Queue**: Background jobs (send email, generate report)
- **Work Distribution**: Phân chia công việc cho nhiều workers
- **Rate Limiting**: Buffer requests khi downstream chậm
- **Delayed Processing**: Dead Letter Exchange + TTL

---

## 3. Event Streaming — Pub/Sub

### 3.1 Concept

Producer **publish event**, nhiều consumer groups **subscribe** và xử lý **độc lập**:

```
                              Consumer Group A
                         ┌────▶ Payment Service
                         │
Producer ──▶ Topic ──────┤    Consumer Group B
(Order       (order.     ├────▶ Inventory Service
 Service)     created)   │
                         │    Consumer Group C
                         └────▶ Notification Service

Mỗi consumer group nhận TẤT CẢ messages
Trong một group, messages được phân chia cho các instances
```

### 3.2 Apache Kafka Architecture

```
┌────────────────────────────────────────────────────────┐
│                    Kafka Cluster                        │
│                                                         │
│  Topic: order.created                                   │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐          │
│  │ Partition 0│ │ Partition 1│ │ Partition 2│          │
│  │ msg1, msg4 │ │ msg2, msg5 │ │ msg3, msg6 │          │
│  │ msg7, ...  │ │ msg8, ...  │ │ msg9, ...  │          │
│  └────────────┘ └────────────┘ └────────────┘          │
│                                                         │
│  Broker 1         Broker 2         Broker 3             │
│  (Leader P0)     (Leader P1)     (Leader P2)           │
│  (Replica P1)    (Replica P2)    (Replica P0)          │
│                                                         │
│  ZooKeeper / KRaft (metadata management)               │
└────────────────────────────────────────────────────────┘
```

**Đặc điểm quan trọng:**
- **Log-based**: Messages được append-only, không xoá sau khi consume
- **Retention**: Giữ message theo thời gian (7 ngày default) hoặc size
- **Offset**: Mỗi consumer group track offset riêng
- **Replay**: Consumer có thể replay lại messages từ bất kỳ offset nào
- **Ordering**: Đảm bảo thứ tự trong partition (không đảm bảo cross-partition)

### 3.3 Topic Design

```
Naming convention: <domain>.<entity>.<event>

order.order.created
order.order.confirmed
order.order.cancelled
payment.payment.completed
payment.payment.failed
inventory.stock.reserved
inventory.stock.released

Partition key:
├── order_id → Đảm bảo events cùng order đi vào cùng partition → đúng thứ tự
├── customer_id → Events cùng customer ordered
└── random → Distribute đều, không đảm bảo ordering
```

---

## 4. Message Queue vs Event Streaming

| Tiêu chí | Message Queue (RabbitMQ) | Event Streaming (Kafka) |
|----------|-------------------------|------------------------|
| **Model** | Point-to-Point (hoặc Pub/Sub) | Pub/Sub (log-based) |
| **Message lifetime** | Deleted after consumed | Retained (configurable) |
| **Replay** | Không | Có |
| **Ordering** | Queue-level FIFO | Partition-level |
| **Throughput** | ~50K msg/s | ~1M+ msg/s |
| **Consumer groups** | Limited | Native support |
| **Use case** | Task queue, work distribution | Event streaming, audit log, analytics |
| **Complexity** | Thấp | Trung bình-Cao |
| **Protocol** | AMQP | Custom (Kafka protocol) |

### Khi nào chọn cái nào?

```
RabbitMQ:
├── Background jobs (send email, generate PDF)
├── Request-reply pattern
├── Complex routing rules
├── Low throughput (< 50K msg/s)
└── Team muốn đơn giản, ít learning curve

Kafka:
├── Event sourcing / Event-driven architecture
├── Stream processing (real-time analytics)
├── Audit log (cần replay)
├── High throughput (> 100K msg/s)
├── Multiple consumer groups cho cùng event
└── Data pipeline (connect to data warehouse)
```

---

## 5. Event Schema Design

### 5.1 CloudEvents Specification

Chuẩn hoá event format:

```json
{
  "specversion": "1.0",
  "id": "evt-001-abc-def",
  "source": "/services/order-service",
  "type": "com.myorg.order.created",
  "datacontenttype": "application/json",
  "time": "2026-03-31T10:00:00Z",
  "data": {
    "order_id": "O-001",
    "customer_id": "C-042",
    "items": [
      {"product_id": "P-100", "quantity": 2, "price": 250000}
    ],
    "total": 500000,
    "currency": "VND"
  }
}
```

### 5.2 Schema Evolution

Khi schema thay đổi, cần backward compatibility:

```
Schema Registry (Confluent / Apicurio):
├── v1: {order_id, customer_id, total}
├── v2: {order_id, customer_id, total, currency}  ← thêm optional field
└── v3: {order_id, customer_id, total, currency, discount}

Quy tắc:
✅ Thêm optional field → backward compatible
✅ Thêm default value cho field mới
❌ Xoá required field → breaking change
❌ Đổi type của field → breaking change
```

---

## 6. Idempotency — Xử lý duplicate messages

### 6.1 Vấn đề

Message broker đảm bảo **at-least-once delivery** → Consumer có thể nhận message **nhiều lần**:

```
Producer ──msg──▶ Broker ──msg──▶ Consumer
                              │      │
                              │  (process OK, nhưng ACK bị mất)
                              │      │
                              └──msg──▶ Consumer (nhận lại!)
```

### 6.2 Giải pháp: Idempotent Consumer

```sql
-- Lưu event_id đã xử lý
CREATE TABLE processed_events (
    event_id VARCHAR(255) PRIMARY KEY,
    processed_at TIMESTAMP DEFAULT NOW()
);

-- Trong consumer:
BEGIN;
  -- Kiểm tra đã xử lý chưa
  INSERT INTO processed_events (event_id) VALUES ('evt-001')
    ON CONFLICT (event_id) DO NOTHING;

  -- Nếu insert thành công (chưa xử lý) → xử lý business logic
  IF FOUND THEN
    UPDATE inventory SET stock = stock - 1 WHERE product_id = 'P-100';
  END IF;
COMMIT;
```

---

## 7. Tổng kết

| Pattern | Khi nào dùng |
|---------|-------------|
| Sync (REST/gRPC) | Cần response ngay, query, simple request-reply |
| Message Queue | Background jobs, task distribution, rate buffering |
| Event Streaming | Event-driven, audit log, multiple consumers, replay |
| Idempotent Consumer | Luôn implement cho mọi async consumer |
| Schema Registry | Khi event schema cần evolve mà không break consumers |

> **Bài tiếp theo**: API Gateway Pattern — Entry point duy nhất cho hệ thống microservices, xử lý routing, authentication, rate limiting tập trung.
