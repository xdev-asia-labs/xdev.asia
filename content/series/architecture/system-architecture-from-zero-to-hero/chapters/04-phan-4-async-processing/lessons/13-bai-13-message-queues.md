---
id: 019d8a21-c110-7001-d001-e1f2a3b4c513
title: "Bài 13: Message Queues & Task Queues"
slug: bai-13-message-queues-task-queues
description: >-
  Tại sao cần asynchronous processing. Message Queue vs Task
  Queue. RabbitMQ architecture & exchange types. Apache Kafka
  architecture. Queue patterns: Work Queue, Pub/Sub, Dead
  Letter Queue. Đảm bảo message delivery & idempotency.
duration_minutes: 160
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Asynchronous Processing & Communication"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Synchronous processing: User click "Đặt hàng" → chờ 30 giây (tạo order, gửi email, tính phí ship, update inventory...). Quá chậm! **Message Queues** cho phép xử lý async, giảm latency và tăng reliability.

---

## 1. Synchronous vs Asynchronous

### 1.1 Vấn đề của Synchronous

```
User: POST /api/orders
  │
  ├── [200ms] Validate order
  ├── [100ms] Charge payment
  ├── [300ms] Update inventory
  ├── [500ms] Send confirmation email
  ├── [200ms] Notify warehouse
  ├── [150ms] Update analytics
  │
  └── Response: 1.45 giây! 😱

Nếu Email Service down → Toàn bộ request fail!
```

### 1.2 Asynchronous với Message Queue

```
User: POST /api/orders
  │
  ├── [200ms] Validate order
  ├── [100ms] Charge payment
  ├── [5ms]   Publish "OrderCreated" event
  │
  └── Response: 305ms! 🚀

Background workers xử lý async:
  Queue → [Worker 1] Update inventory
  Queue → [Worker 2] Send email
  Queue → [Worker 3] Notify warehouse
  Queue → [Worker 4] Update analytics
```

---

## 2. Message Queue vs Task Queue

```
Message Queue:                    Task Queue:
┌─────────────────┐              ┌─────────────────┐
│ Producer gửi    │              │ Producer gửi    │
│ MESSAGE (data)  │              │ TASK (function   │
│                 │              │  + arguments)    │
│ Consumer tự     │              │ Worker thực      │
│ quyết định      │              │ thi task         │
│ xử lý thế nào  │              │                  │
│                 │              │ Retry, schedule  │
│ RabbitMQ, Kafka │              │ Celery, Sidekiq  │
│ SQS, NATS       │              │ Bull, Temporal   │
└─────────────────┘              └─────────────────┘
```

---

## 3. RabbitMQ

### 3.1 AMQP Architecture

```
Producer → Exchange → Binding → Queue → Consumer

Exchanges types:
┌──────────────────────────────────────────────────────┐
│ Direct Exchange:                                     │
│   Message với routing_key="email"                    │
│   → Queue "email_queue" (binding key="email")        │
│                                                      │
│ Fanout Exchange:                                     │
│   Message broadcast đến TẤT CẢ queues bound         │
│   → Queue A, Queue B, Queue C (all get copy)         │
│                                                      │
│ Topic Exchange:                                      │
│   Message routing_key="order.created.vn"             │
│   → Queue 1 bound "order.created.*" ✅               │
│   → Queue 2 bound "order.#" ✅                       │
│   → Queue 3 bound "payment.*" ❌                     │
│                                                      │
│ Headers Exchange:                                    │
│   Route dựa trên message headers thay vì routing_key │
└──────────────────────────────────────────────────────┘
```

### 3.2 Work Queue Pattern

```
               ┌── Consumer 1 (xử lý message 1, 3, 5)
               │
Producer ──► Queue ──── Consumer 2 (xử lý message 2, 4, 6)
               │
               └── Consumer 3 (xử lý message 7, 8, 9)

Mỗi message chỉ được 1 consumer xử lý
Load balancing: Round-robin hoặc prefetch
```

### 3.3 Pub/Sub Pattern

```
                    ┌── Queue A ──► Consumer: Email
                    │
Publisher ──► Exchange ──── Queue B ──► Consumer: SMS
  (Fanout)          │
                    └── Queue C ──► Consumer: Push

Mỗi queue nhận BẢN COPY của message
Mỗi consumer xử lý theo cách riêng
```

---

## 4. Apache Kafka

### 4.1 Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Kafka Cluster                     │
│                                                      │
│  Topic: "orders" (3 partitions, RF=3)                │
│                                                      │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐             │
│  │Broker 1 │  │Broker 2 │  │Broker 3 │             │
│  │         │  │         │  │         │             │
│  │P0(leader│  │P1(leader│  │P2(leader│             │
│  │P1(replica│  │P2(replica│  │P0(replica│             │
│  │P2(replica│  │P0(replica│  │P1(replica│             │
│  └─────────┘  └─────────┘  └─────────┘             │
│                                                      │
│  ZooKeeper / KRaft: Cluster metadata                │
└─────────────────────────────────────────────────────┘

Producer ──► Partition (key-based routing)
Consumer Group ──► Mỗi partition chỉ 1 consumer
```

### 4.2 Kafka vs RabbitMQ

| Feature | RabbitMQ | Kafka |
|---------|----------|-------|
| Model | Message Queue | Event Log |
| Throughput | ~50K msg/s | ~1M msg/s |
| Message retention | Consumed → deleted | Retained (configurable) |
| Ordering | Per queue | Per partition |
| Replay | Không | Có (offset reset) |
| Use case | Task distribution | Event streaming, logs |
| Routing | Exchange + binding | Topic + partition |
| Protocol | AMQP | Custom binary |

---

## 5. Delivery Guarantees

### 5.1 At-Most-Once

```
Producer → Broker: Send message (fire & forget)
Nếu network error → Message mất
Đơn giản, nhanh, nhưng có thể mất data

Use case: Metrics, logs (mất vài message OK)
```

### 5.2 At-Least-Once

```
Producer → Broker: Send message
Broker → Producer: ACK
Nếu không nhận ACK → Producer gửi lại
→ Message có thể bị duplicate!

Use case: Most applications (xử lý duplicate bằng idempotency)
```

### 5.3 Exactly-Once

```
Rất khó đạt được thực sự. Thường là:
  At-Least-Once + Idempotent Consumer

Idempotent Consumer:
  message_id = "order-123-email"
  
  IF NOT EXISTS processed_messages[message_id]:
      process(message)
      INSERT processed_messages[message_id]
  ELSE:
      skip (đã xử lý rồi)
```

---

## 6. Dead Letter Queue (DLQ)

```
Main Queue ──► Consumer ──► Xử lý thành công ✅
                 │
                 ├── Fail lần 1 → Retry
                 ├── Fail lần 2 → Retry
                 ├── Fail lần 3 → Retry
                 │
                 └── Fail lần 4 → Dead Letter Queue
                                   │
                                   ▼
                              ┌─────────┐
                              │  DLQ    │
                              │ Manual  │
                              │ Review  │
                              └─────────┘

DLQ chứa messages không thể xử lý
Ops team review và quyết định:
  - Fix bug → Replay message
  - Bad data → Discard
  - Dependency down → Replay sau khi fix
```

---

## 7. Backpressure

```
Vấn đề: Producer nhanh hơn Consumer

 Producer: 10K msg/s ────► Queue ────► Consumer: 2K msg/s
                            │
                       Queue grows!
                       Memory fills!
                       System crash!

Giải pháp:
  1. Rate limiting: Producer giới hạn tốc độ
  2. Buffering: Queue có max size, reject khi đầy
  3. Scaling: Thêm consumers
  4. Sampling: Drop non-critical messages
  5. Flow control: Broker báo Producer slow down
```

---

## Tổng kết

| Tool | Type | Best For |
|------|------|----------|
| RabbitMQ | Message Broker | Task distribution, routing |
| Kafka | Event Streaming | High throughput, event log |
| SQS | Cloud Queue | Simple AWS workloads |
| Redis Streams | In-memory stream | Real-time, lightweight |
| NATS | Messaging | Cloud-native, low latency |
| Celery/Sidekiq | Task Queue | Background jobs |

---

## Bài tập

1. **Queue Design:** E-commerce checkout gồm: payment, inventory, email, SMS, analytics. Thiết kế message flow. Sử dụng pattern nào: Work Queue hay Pub/Sub?

2. **Idempotency:** Payment service nhận message "charge $100 for order-123". Network timeout, producer gửi lại. Làm sao đảm bảo không charge 2 lần?

3. **DLQ Strategy:** Bạn phát hiện 500 messages trong DLQ của email service. 80% do email address invalid, 20% do SMTP server timeout. Viết kế hoạch xử lý.
