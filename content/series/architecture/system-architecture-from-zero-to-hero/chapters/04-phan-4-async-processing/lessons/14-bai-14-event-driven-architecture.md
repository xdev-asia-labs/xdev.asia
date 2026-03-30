---
id: 019d8a21-c110-7001-d001-e1f2a3b4c514
title: "Bài 14: Event-Driven Architecture"
slug: bai-14-event-driven-architecture
description: >-
  Event-Driven Architecture patterns. Event Sourcing vs
  traditional CRUD. CQRS pattern. Saga pattern cho distributed
  transactions. Event schema evolution. Hands-on thiết kế
  event-driven e-commerce system.
duration_minutes: 160
is_free: false
video_url: null
sort_order: 14
section_title: "Phần 4: Asynchronous Processing & Communication"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Thay vì services gọi trực tiếp lẫn nhau (coupling), Event-Driven Architecture để các services giao tiếp qua **events** — giảm coupling, tăng scalability, và cho phép xây dựng hệ thống phức tạp dễ dàng hơn.

---

## 1. Event-Driven Architecture (EDA) là gì?

### 1.1 Request-Driven vs Event-Driven

```
Request-Driven (Coupling cao):
  Order Service ──POST──► Inventory Service
  Order Service ──POST──► Payment Service
  Order Service ──POST──► Email Service
  
  Order Service phải biết TẤT CẢ downstream services
  Thêm service mới → Sửa Order Service

Event-Driven (Loose coupling):
  Order Service ──publish──► "OrderCreated" Event
                                │
                    ┌───────────┼───────────┐
                    ▼           ▼           ▼
              Inventory     Payment      Email
              Service       Service      Service
  
  Order Service KHÔNG biết ai subscribe
  Thêm service mới → Subscribe event, KHÔNG sửa gì
```

### 1.2 Event Types

```
1. Event Notification (thin):
   { "type": "OrderCreated", "orderId": "123" }
   → Consumer phải query lại để lấy details

2. Event-Carried State Transfer (fat):
   { "type": "OrderCreated",
     "orderId": "123",
     "userId": "456",
     "items": [...],
     "total": 1500000 }
   → Consumer có đủ data, không cần query lại

3. Domain Event:
   { "type": "OrderCreated",
     "aggregateId": "order-123",
     "aggregateType": "Order",
     "version": 1,
     "timestamp": "2024-01-15T10:30:00Z",
     "data": { ... } }
   → Dùng trong DDD, có aggregate context
```

---

## 2. Event Sourcing

### 2.1 Traditional CRUD vs Event Sourcing

```
CRUD:
  State: { balance: 700 }
  
  Chỉ biết balance hiện tại = 700
  KHÔNG biết lịch sử thay đổi

Event Sourcing:
  Events:
    1. AccountCreated { balance: 1000 }
    2. MoneyWithdrawn { amount: 200 }
    3. MoneyDeposited { amount: 500 }
    4. MoneyWithdrawn { amount: 600 }
  
  Current state = replay events:
    1000 - 200 + 500 - 600 = 700

  Biết TOÀN BỘ lịch sử
  Có thể rebuild state tại bất kỳ thời điểm
  Audit trail hoàn chỉnh
```

### 2.2 Event Store

```
┌────────────────────────────────────────────────────┐
│ Event Store                                         │
├──────┬──────────┬────────┬──────────────┬──────────┤
│ SeqNo│ AggregateId│ Type   │ Data         │ Timestamp│
├──────┼──────────┼────────┼──────────────┼──────────┤
│ 1    │ acct-001  │ Created│ {balance:1000}│ 10:00:00│
│ 2    │ acct-001  │ Withdraw│{amount: 200} │ 10:05:00│
│ 3    │ acct-002  │ Created│ {balance:500} │ 10:06:00│
│ 4    │ acct-001  │ Deposit│ {amount: 500} │ 10:10:00│
│ 5    │ acct-001  │ Withdraw│{amount: 600} │ 10:15:00│
└──────┴──────────┴────────┴──────────────┴──────────┘

Immutable! Không UPDATE, không DELETE
Chỉ APPEND events mới
```

### 2.3 Snapshots

```
Vấn đề: Account có 1 triệu events → replay chậm

Giải pháp: Snapshot (checkpoint)

  Events 1-999,999: (lịch sử cũ)
  Snapshot @ event 999,999: { balance: 52,345 }
  Events 1,000,000-1,000,005: (events mới)

  Rebuild state:
    Load snapshot: 52,345
    Replay 5 events (thay vì 1 triệu!)
```

---

## 3. CQRS

### 3.1 Command Query Responsibility Segregation

```
Traditional (1 model cho cả Read và Write):
  ┌────────────┐
  │   Model    │ ← cả Read và Write
  │ (Order)    │    dùng chung schema
  └─────┬──────┘
        │
  ┌─────▼──────┐
  │  Database  │
  └────────────┘

CQRS (tách Read và Write model):
  Write (Command)           Read (Query)
  ┌────────────┐          ┌────────────┐
  │ Command    │          │  Query     │
  │ Model      │          │  Model     │
  │ (normalize)│          │ (denormalize)│
  └─────┬──────┘          └─────┬──────┘
        │                       │
  ┌─────▼──────┐ ──event──►┌───▼────────┐
  │Write DB    │           │ Read DB    │
  │(PostgreSQL)│           │(Elastic/   │
  │  ACID      │           │ Redis/Mongo)│
  └────────────┘           └────────────┘
```

### 3.2 CQRS + Event Sourcing

```
Command Side:
  User: "Đặt hàng"
  → Command: CreateOrder
  → Validate business rules
  → Append event: OrderCreated
  → Event Store (source of truth)

Event Side:
  OrderCreated event published
  │
  ├──► Read Model Projector
  │    → Update denormalized view (Read DB)
  │
  ├──► Inventory Service
  │    → Reserve items
  │
  └──► Notification Service
       → Send confirmation

Query Side:
  User: "Xem đơn hàng"
  → Query Read DB (optimized for reads)
  → Return instantly (pre-computed view)
```

---

## 4. Saga Pattern

### 4.1 Distributed Transaction Problem

```
Đặt hàng cần 3 bước (3 services khác nhau):
  1. Payment Service: Charge credit card
  2. Inventory Service: Reserve items
  3. Shipping Service: Create shipment

Nếu bước 3 fail → Phải rollback bước 1, 2
Không thể dùng database transaction (khác databases!)
```

### 4.2 Choreography Saga

```
Không có orchestrator, services tự coordinate qua events

  Order ──OrderCreated──► Payment
                              │
                         PaymentCharged
                              │
                              ▼
                          Inventory
                              │
                         ItemsReserved
                              │
                              ▼
                          Shipping
                              │
                         ShipmentCreated
                              │
                              ▼
                          Order: COMPLETED

Rollback (nếu Shipping fail):
  Shipping ──ShipmentFailed──► Inventory
                                   │
                             ItemsReleased
                                   │
                                   ▼
                               Payment
                                   │
                             PaymentRefunded
                                   │
                                   ▼
                               Order: CANCELLED
```

### 4.3 Orchestration Saga

```
Orchestrator điều phối tất cả steps

  ┌──────────────┐
  │ Saga         │
  │ Orchestrator │
  └──────┬───────┘
         │
    ┌────▼────┐  Success  ┌─────────┐  Success  ┌──────────┐
    │Payment  │──────────►│Inventory│──────────►│Shipping  │
    │Service  │           │Service  │           │Service   │
    └─────────┘           └─────────┘           └──────────┘
         │                     │                      │
    Compensate            Compensate             Compensate
    (Refund)              (Release)              (Cancel)

Ưu điểm: Logic tập trung, dễ debug
Nhược điểm: Orchestrator = potential SPOF
```

---

## 5. Event Schema Evolution

```
Vấn đề: Event schema thay đổi theo thời gian

v1: { "orderId": "123", "amount": 100 }
v2: { "orderId": "123", "amount": 100, "currency": "VND" }
v3: { "orderId": "123", "total": { "amount": 100, "currency": "VND" } }

Strategies:
  1. Schema Registry (Confluent/Avro):
     Quản lý versions, validate compatibility
  
  2. Upcasting:
     Khi đọc event cũ → Transform sang schema mới
     v1 event → upcaster → v3 format
  
  3. Backward/Forward compatibility:
     - Thêm field mới: có default value
     - Không rename/remove fields
     - Consumers ignore unknown fields
```

---

## Tổng kết

| Pattern | Use Case | Complexity |
|---------|----------|-----------|
| Event Notification | Loose coupling | Low |
| Event Sourcing | Audit, temporal queries | High |
| CQRS | Read/Write optimization | Medium-High |
| Choreography Saga | Simple workflows, few steps | Medium |
| Orchestration Saga | Complex workflows, many steps | High |

---

## Bài tập

1. **Event Flow:** E-commerce: User đặt hàng → check inventory → charge payment → send email → update analytics. Vẽ event flow diagram. Service nào publish event gì? Subscribe event gì?

2. **Saga Design:** Flight booking: Reserve flight → Reserve hotel → Reserve car. Nếu Reserve car fail, thiết kế compensation flow. Dùng Choreography hay Orchestration?

3. **CQRS:** Thiết kế CQRS cho tính năng "Sản phẩm bán chạy nhất": Write model (orders) và Read model (cached ranking). Events nào trigger update read model?
