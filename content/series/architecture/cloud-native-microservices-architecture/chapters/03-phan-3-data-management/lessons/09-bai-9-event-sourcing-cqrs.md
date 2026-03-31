---
id: 019d8a22-c309-7a10-b001-a1b2c3d4e509
title: "Bài 9: Event Sourcing & CQRS"
slug: bai-9-event-sourcing-cqrs
description: >-
  Event Sourcing — lưu trạng thái dưới dạng chuỗi event, Event Store,
  snapshot optimization. CQRS — tách Command và Query model, eventual consistency,
  read/write database riêng biệt, khi nào nên dùng CQRS.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Data Management trong Microservices"
course:
  id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
  title: "Cloud Native Microservices Architecture"
  slug: cloud-native-microservices-architecture
---

## Giới thiệu

Event Sourcing và CQRS là hai pattern thường đi đôi, giúp giải quyết các bài toán phức tạp về data consistency, audit trail và performance optimization trong microservices.

---

## 1. Event Sourcing

### 1.1 Concept

Thay vì lưu **trạng thái hiện tại** (current state), lưu **toàn bộ chuỗi sự kiện** (events) đã xảy ra:

```
Traditional (State-based):
┌──────────────────────────────┐
│ Orders Table                 │
│ id: O-001                    │
│ status: shipped       ← Chỉ biết state hiện tại
│ total: 500,000               │
│ updated_at: 2026-03-31       │
└──────────────────────────────┘

Event Sourcing:
┌──────────────────────────────────────────────────────────┐
│ Event Store (append-only)                                │
├────┬──────────────────┬──────────────┬──────────────────┤
│ #  │ Event Type       │ Data         │ Timestamp        │
├────┼──────────────────┼──────────────┼──────────────────┤
│ 1  │ OrderCreated     │ {items, ...} │ 10:00:00         │
│ 2  │ PaymentReceived  │ {amount}     │ 10:01:00         │
│ 3  │ ItemsReserved    │ {items}      │ 10:01:05         │
│ 4  │ OrderShipped     │ {tracking}   │ 10:30:00         │
└────┴──────────────────┴──────────────┴──────────────────┘

Current State = replay(events) → Order{status: "shipped"}
```

### 1.2 Event Store

```
Đặc điểm:
├── Append-only: Không bao giờ update hoặc delete events
├── Immutable: Events là facts đã xảy ra, không thể thay đổi
├── Ordered: Events có thứ tự rõ ràng (sequence number)
└── Stream: Events được nhóm theo aggregate (ví dụ: order-O-001)

Implementation options:
├── EventStoreDB (purpose-built, recommended)
├── PostgreSQL + events table
├── Apache Kafka (log-based)
└── DynamoDB Streams (AWS)
```

**PostgreSQL Event Store:**

```sql
CREATE TABLE events (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    stream_id   VARCHAR(255) NOT NULL,     -- "order-O-001"
    version     BIGINT NOT NULL,           -- sequence number
    event_type  VARCHAR(255) NOT NULL,     -- "OrderCreated"
    data        JSONB NOT NULL,            -- event payload
    metadata    JSONB DEFAULT '{}',        -- traceId, userId, ...
    created_at  TIMESTAMPTZ DEFAULT NOW(),

    UNIQUE(stream_id, version)             -- đảm bảo ordering
);

CREATE INDEX idx_events_stream ON events(stream_id, version);
```

### 1.3 Rebuilding State

```python
def get_order(order_id: str) -> Order:
    events = event_store.get_events(stream_id=f"order-{order_id}")

    order = Order()  # empty state
    for event in events:
        order.apply(event)  # replay từng event

    return order  # current state

class Order:
    def apply(self, event):
        match event.type:
            case "OrderCreated":
                self.id = event.data["id"]
                self.status = "created"
                self.items = event.data["items"]
            case "PaymentReceived":
                self.status = "paid"
            case "OrderShipped":
                self.status = "shipped"
                self.tracking = event.data["tracking"]
```

### 1.4 Snapshot Optimization

Khi stream có quá nhiều events (hàng nghìn), replay chậm → dùng Snapshot:

```
Event Stream cho order-O-001:
  Event 1: OrderCreated
  Event 2: ItemAdded
  ...
  Event 500: ItemRemoved
  ──── Snapshot at version 500 ────
  { status: "processing", items: [...], total: 1000000 }

  Event 501: PaymentReceived
  Event 502: OrderShipped

Rebuild: Load snapshot (v500) + replay events 501-502
→ Nhanh hơn nhiều so với replay 502 events
```

### 1.5 Ưu và nhược điểm

```
✅ Ưu điểm:
├── Complete audit trail (ai làm gì, lúc nào)
├── Time travel: Rebuild state tại bất kỳ thời điểm
├── Event replay: Fix bug rồi replay events để sửa data
├── Natural fit cho event-driven architecture
└── Debug: Hiểu chính xác điều gì đã xảy ra

❌ Nhược điểm:
├── Complexity: Khó hơn CRUD đáng kể
├── Query: Không thể query trực tiếp (cần CQRS)
├── Schema evolution: Thay đổi event format phức tạp
├── Storage: Nhiều events → nhiều storage
└── Learning curve: Team cần thời gian adapt
```

---

## 2. CQRS — Command Query Responsibility Segregation

### 2.1 Concept

Tách biệt **model cho write** (Command) và **model cho read** (Query):

```
Traditional:
  Client ──CRUD──▶ Same Model ──▶ Same Database

CQRS:
                    ┌─────────────────────────────────────┐
                    │            API Layer                  │
                    └──────────┬───────────────┬───────────┘
                               │               │
                    ┌──────────▼──────┐ ┌──────▼──────────┐
                    │  Command Side   │ │   Query Side     │
                    │  (Write Model)  │ │  (Read Model)    │
                    │                 │ │                   │
                    │  - CreateOrder  │ │  - GetOrderDetails│
                    │  - CancelOrder  │ │  - ListOrders     │
                    │  - UpdateStatus │ │  - SearchOrders   │
                    └────────┬────────┘ └────────▲─────────┘
                             │                   │
                    ┌────────▼────────┐  ┌───────┴─────────┐
                    │   PostgreSQL    │  │  Elasticsearch   │
                    │   (Write DB)   │  │   (Read DB)      │
                    │  Normalized     │  │  Denormalized    │
                    └────────┬────────┘  └─────────────────┘
                             │                   ▲
                             └───── Events ──────┘
                              (sync read model)
```

### 2.2 Tại sao tách Read và Write?

```
Write:                              Read:
├── Ít operations hơn               ├── Nhiều operations hơn (10:1 ratio)
├── Cần ACID consistency             ├── Eventual consistency OK
├── Normalized schema                ├── Denormalized, pre-joined
├── Complex validation               ├── Simple query, fast response
├── Scale: moderate                   ├── Scale: aggressive (caching, replicas)
└── PostgreSQL (optimal)              └── Elasticsearch/Redis (optimal)
```

### 2.3 Synchronizing Read Model

```
Option 1: Domain Events (khuyến nghị)
  Write DB ──event──▶ Kafka ──▶ Read Model Updater ──▶ Read DB

Option 2: Change Data Capture (CDC)
  Write DB ──Debezium──▶ Kafka ──▶ Read Model Updater ──▶ Read DB

Option 3: Dual Write (KHÔNG khuyến nghị)
  Service ──write──▶ Write DB
          ──write──▶ Read DB    ← Có thể inconsistent!
```

### 2.4 CQRS + Event Sourcing

Kết hợp cả hai pattern:

```
Command Flow:
  Client ──CreateOrder──▶ Command Handler
                              │
                         Validate
                              │
                         Append event to Event Store
                              │
                         Publish event to Kafka
                              │
                              ▼
                         Event Store (source of truth)

Query Flow:
  Kafka ──OrderCreated──▶ Projection Handler
                              │
                         Update Read Model (Elasticsearch)
                              │
  Client ──GetOrder──▶ Query Handler ──▶ Read from Elasticsearch
```

### 2.5 Eventual Consistency

```
Timeline:
  T0: Client tạo order (write to Event Store)
  T1: Event published to Kafka (~5ms)
  T2: Projection handler updates Elasticsearch (~50ms)
  T3: Read model available (~100ms after T0)

Giữa T0 và T3: Read model chưa có data mới = Eventual Consistency

Giải pháp UX:
├── Optimistic UI: Client hiển thị ngay sau write, không đợi read model
├── Read-your-writes: Sau write, query write DB cho user đó
├── Polling/WebSocket: Client poll cho đến khi read model updated
└── Inbox pattern: Return 202 Accepted + polling endpoint
```

---

## 3. Khi nào dùng Event Sourcing / CQRS?

### 3.1 Nên dùng Event Sourcing khi

- ✅ Cần **audit trail** đầy đủ (finance, healthcare, legal)
- ✅ Cần **time travel** (rebuild state tại bất kỳ thời điểm)
- ✅ Domain có **complex state transitions** (order workflow, booking)
- ✅ Cần **debug production issues** (replay events)
- ✅ Event-driven architecture đã là nền tảng

### 3.2 Nên dùng CQRS khi

- ✅ Read/Write ratio **chênh lệch lớn** (10:1 hoặc hơn)
- ✅ Read và Write cần **scale khác nhau**
- ✅ Read model cần **denormalized/pre-computed**
- ✅ Complex queries cần **search engine** (Elasticsearch)

### 3.3 KHÔNG nên dùng khi

- ❌ Simple CRUD application
- ❌ Team chưa có kinh nghiệm event-driven
- ❌ Domain đơn giản, ít state transitions
- ❌ Consistency requirement = strong consistency everywhere
- ❌ Deadline gấp, cần ship nhanh

---

## 4. Tổng kết

| Pattern | Key Point |
|---------|-----------|
| Event Sourcing | Lưu events thay vì state, append-only, audit trail |
| Event Store | Immutable log of events, source of truth |
| Snapshot | Optimize rebuild bằng periodic snapshots |
| CQRS | Tách read/write model, scale independently |
| Eventual Consistency | Read model cập nhật sau write (ms-level delay) |
| Projection | Process events → update read model |

> **Bài tiếp theo**: Saga Pattern — Giải quyết distributed transactions khi mỗi service có database riêng.
