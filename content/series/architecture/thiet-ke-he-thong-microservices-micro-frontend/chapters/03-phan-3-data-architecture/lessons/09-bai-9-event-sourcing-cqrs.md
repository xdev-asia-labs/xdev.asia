---
id: 019e4a33-d409-7b20-c001-b1c2d3e4f509
title: "Bài 9: Event Sourcing & CQRS — Khi nào cần, khi nào không?"
slug: bai-9-event-sourcing-cqrs-khi-nao-can-khi-nao-khong
description: >-
  Event Sourcing: lưu trữ sự kiện thay vì trạng thái. CQRS: tách read/write models. Kết hợp Event Sourcing + CQRS. Trade-offs, complexity, và decision framework. Khi nào CQRS quá phức tạp, khi nào thực sự cần thiết.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Data Architecture trong Microservices"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Event Sourcing và CQRS là hai pattern mạnh mẽ nhưng **thường bị lạm dụng**. Bài này giúp bạn hiểu bản chất, lợi ích thực sự, và quan trọng nhất — **khi nào KHÔNG nên dùng**.

---

## 1. Event Sourcing

### 1.1 Ý tưởng cốt lõi

Thay vì lưu **trạng thái hiện tại**, lưu **chuỗi sự kiện** đã xảy ra:

```
Traditional (State-based):
┌─────────────────────────┐
│ orders table            │
│ id: 123                 │
│ status: SHIPPED   ← chỉ biết trạng thái hiện tại
│ total: 500.000         │
└─────────────────────────┘

Event Sourcing:
┌─────────────────────────────────────┐
│ Event Store (Order #123)            │
│ 1. OrderCreated    {items, total}   │
│ 2. PaymentReceived {amount}         │
│ 3. ItemRemoved     {itemId}   ← biết toàn bộ lịch sử
│ 4. OrderConfirmed  {}               │
│ 5. OrderShipped    {trackingId}     │
└─────────────────────────────────────┘

State = replay(events) → current state
```

### 1.2 Lợi ích

- **Complete audit trail**: biết chính xác ai làm gì, khi nào
- **Time travel**: rebuild state tại bất kỳ thời điểm nào
- **Debug**: replay events để reproduce bugs
- **Analytics**: analyze event patterns

### 1.3 Nhược điểm

- **Complexity**: cần event store, projections, snapshots
- **Eventual consistency**: read model không real-time
- **Schema evolution**: thay đổi event schema rất khó
- **Query khó**: không thể SELECT * FROM orders WHERE status = 'SHIPPED'

---

## 2. CQRS (Command Query Responsibility Segregation)

### 2.1 Tách Read và Write

```
Traditional:
┌──────────┐     ┌──────────┐
│  Client  │────►│ Service  │────► Database
│          │◄────│(CRUD all)│◄──── (1 model)
└──────────┘     └──────────┘

CQRS:
                 ┌──────────────┐     ┌────────────┐
           ────► │ Command Side │────►│ Write DB   │
┌──────────┐     │ (Create,     │     │ (optimized │
│  Client  │     │  Update)     │     │  for write)│
└──────────┘     └──────────────┘     └─────┬──────┘
           ────► ┌──────────────┐           │ Events
                 │ Query Side   │     ┌─────▼──────┐
           ◄──── │ (Read,       │◄────│ Read DB    │
                 │  Search)     │     │ (optimized │
                 └──────────────┘     │  for read) │
                                      └────────────┘
```

### 2.2 Khi nào CQRS có giá trị?

- Read/Write ratio **rất chênh lệch** (90% read, 10% write)
- Read model cần **format khác** write model (denormalized views)
- Cần **scale read/write independently** (add read replicas)
- Complex queries cần **optimized read models** (Elasticsearch, materialized views)

---

## 3. Decision Framework

### 3.1 Khi nào DÙNG Event Sourcing + CQRS?

✅ Financial systems (cần audit trail)
✅ Order processing (trạng thái phức tạp, cần history)
✅ Collaborative editing (conflict resolution)
✅ Regulatory compliance (cần prove what happened)

### 3.2 Khi nào KHÔNG DÙNG?

❌ Simple CRUD (blog, user profile) → overkill
❌ Team nhỏ, chưa có experience → learning curve quá cao
❌ Không cần audit trail hay time travel
❌ Real-time consistency là bắt buộc

### 3.3 Có thể dùng CQRS KHÔNG CẦN Event Sourcing

```
CQRS without Event Sourcing (pragmatic approach):

Write Side: PostgreSQL (normalized)
  → On write: publish event to Kafka
  
Read Side: Elasticsearch (denormalized)
  → Consumer: listen events → update search index

Đơn giản hơn nhiều, vẫn có lợi ích tách read/write.
```

---

## 4. Áp dụng cho E-Commerce

```
Product Service: CQRS (no Event Sourcing)
  Write: PostgreSQL (products table)
  Read:  Elasticsearch (search index, facets)
  Sync:  ProductUpdated event → ES consumer

Order Service: Event Sourcing + CQRS (trạng thái phức tạp)
  Event Store: PostgreSQL (events table)
  Read Model: PostgreSQL (materialized orders view)
  
Cart Service: Simple CRUD (Redis)
  Không cần CQRS — read/write model giống nhau

User Service: Simple CRUD (PostgreSQL)
  Không cần CQRS — straightforward CRUD
```

---

## Tóm tắt

| Pattern | Complexity | Khi nào dùng | Khi nào tránh |
|---------|-----------|-------------|---------------|
| **Simple CRUD** | Low | Most services | High-traffic reads |
| **CQRS only** | Medium | Tách read/write scale | Simple domains |
| **Event Sourcing** | High | Audit trail, time travel | Simple CRUD |
| **ES + CQRS** | Very High | Financial, ordering | Almost everything else |

> **Nguyên tắc vàng:** Bắt đầu simple (CRUD). Chỉ thêm CQRS/ES khi có **pain point cụ thể** chứng minh cần thiết.

---

**Bài tiếp theo:** [Bài 10: Micro Frontend là gì? — Lợi ích, Trade-offs & Decision Framework](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-10-micro-frontend-la-gi-loi-ich-trade-offs-decision-framework)
