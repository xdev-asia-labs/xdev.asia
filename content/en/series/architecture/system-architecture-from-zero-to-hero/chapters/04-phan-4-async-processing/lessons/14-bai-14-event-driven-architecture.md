---
id: 019d8a21-c110-7001-d001-e1f2a3b4c514
title: 'Lesson 14: Event-Driven Architecture'
slug: bai-14-event-driven-architecture
description: >-
  Event-Driven Architecture patterns. Event Sourcing vs traditional CRUD. CQRS
  patterns. Saga pattern for distributed transactions. Event schema evolution.
  Hands-on event-driven e-commerce system design.
duration_minutes: 160
is_free: false
video_url: null
sort_order: 14
section_title: 'Part 4: Asynchronous Processing & Communication'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'System Architecture: From Zero to Hero'
  slug: system-architecture-from-zero-to-hero
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4082" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4082)"/>

  <!-- Decorations -->
  <g>
    <circle cx="694" cy="172" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="788" cy="46" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="882" cy="180" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="976" cy="54" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="1070" cy="188" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="112" x2="1100" y2="192" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="142" x2="1050" y2="212" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.3826859021799,148.5 985.3826859021799,175.5 962,189 938.6173140978201,175.5 938.6173140978201,148.5 962,135" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🏗️ Architecture — Lesson 14</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 14: Event-Driven Architecture</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Asynchronous Processing & Communication</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Instead of services calling each other directly (coupling), Event-Driven Architecture lets services communicate via **events** — reducing coupling, increasing scalability, and allowing for easier construction of complex systems.

---

## 1. What is Event-Driven Architecture (EDA)?

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

## Summary

| Pattern | Use Case | Complexity |
|--------|----------|-----------|
| Event Notification | Loose coupling | Low |
| Event Sourcing | Audit, temporal queries | High |
| CQRS | Read/Write optimization | Medium-High |
| Choreography Saga | Simple workflows, few steps | Medium |
| Orchestration Saga | Complex workflows, many steps | High |

---

## Exercises

1. **Event Flow:** E-commerce: User places order → check inventory → charge payment → send email → update analytics. Draw event flow diagram. Which service publishes which event? Subscribe to what event?

2. **Saga Design:** Flight booking: Reserve flight → Reserve hotel → Reserve car. If Reserve car fails, design compensation flow. Using Choreography or Orchestration?

3. **CQRS:** Design CQRS for the "Best selling products" feature: Write model (orders) and Read model (cached ranking). Which events trigger update read model?
