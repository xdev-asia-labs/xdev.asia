---
id: 019e4a33-d407-7b20-c001-b1c2d3e4f507
title: "Bài 7: Database per Service & Polyglot Persistence"
slug: bai-7-database-per-service-polyglot-persistence
description: >-
  Tại sao mỗi service cần database riêng. Chiến lược chọn database phù hợp: PostgreSQL, MongoDB, Redis, Elasticsearch. Shared database anti-pattern. Data isolation, schema ownership và migration strategy.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 3: Data Architecture trong Microservices"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

"Database per Service" là pattern nền tảng của Microservices. Không có nó, bạn không có real microservices — chỉ có modules chia sẻ cùng database (distributed monolith). Bài này giải thích tại sao, cách chọn DB đúng, và xử lý data sharing.

---

## 1. Tại sao Database per Service?

### 1.1 Shared Database — Con đường đến Distributed Monolith

```
❌ Shared Database Anti-pattern:
┌────────┐ ┌────────┐ ┌────────┐
│User µS │ │Order µS│ │Payment │
└───┬────┘ └───┬────┘ └───┬────┘
    │          │          │
    └──────────┼──────────┘
               ▼
    ┌─────────────────────┐
    │  Shared PostgreSQL  │
    │  ├── users          │  ← ai own schema này?
    │  ├── orders         │  ← coupling tại data layer
    │  ├── payments       │  ← thay đổi schema = break all
    │  └── products       │
    └─────────────────────┘
```

**Vấn đề:**
- Thay đổi schema ảnh hưởng tất cả services
- Không thể scale database độc lập
- Tight coupling — deploy phải cùng lúc
- Không thể dùng database khác nhau cho use case khác nhau

### 1.2 Database per Service

```
✅ Database per Service:
┌────────┐    ┌────────┐    ┌────────┐
│User µS │    │Order µS│    │Cart µS │
└───┬────┘    └───┬────┘    └───┬────┘
    │             │             │
    ▼             ▼             ▼
┌────────┐  ┌────────┐    ┌────────┐
│PostgreSQL│ │PostgreSQL│  │ Redis  │
│(users)  │  │(orders) │   │(carts) │
└─────────┘  └─────────┘  └────────┘

Mỗi service own data riêng.
Schema changes chỉ ảnh hưởng 1 service.
Có thể chọn DB phù hợp nhất cho use case.
```

---

## 2. Polyglot Persistence — Chọn DB đúng

### 2.1 Decision Matrix

| Use Case | Database | Tại sao |
|----------|----------|---------|
| User profiles, Orders | **PostgreSQL** | ACID, relational, mature |
| Product catalog | **PostgreSQL + Elasticsearch** | Relational + Full-text search |
| Shopping cart | **Redis** | Fast, ephemeral, TTL support |
| Session store | **Redis** | In-memory, fast expiry |
| Activity log, Events | **MongoDB / Kafka** | Schema-flexible, append-only |
| Recommendations | **Neo4j / Redis** | Graph relationships / Caching |
| Analytics/BI | **ClickHouse / BigQuery** | Columnar, fast aggregation |

### 2.2 E-Commerce Platform Database Design

```
┌─────────────────────────────────────────────┐
│ User Service → PostgreSQL                   │
│   users, addresses, preferences             │
├─────────────────────────────────────────────┤
│ Product Service → PostgreSQL + Elasticsearch│
│   products, categories, reviews (PG)        │
│   search index (ES)                         │
├─────────────────────────────────────────────┤
│ Cart Service → Redis                        │
│   cart:{userId} → JSON (items, quantities)  │
│   TTL: 7 days (auto-expire abandoned carts) │
├─────────────────────────────────────────────┤
│ Order Service → PostgreSQL                  │
│   orders, order_items, order_status_history  │
├─────────────────────────────────────────────┤
│ Payment Service → PostgreSQL                │
│   transactions, refunds, payment_methods    │
└─────────────────────────────────────────────┘
```

---

## 3. Data Sharing Patterns

Khi Service A cần data từ Service B:

### 3.1 API Composition
Service A gọi API của Service B khi cần data. Simple nhưng tạo runtime dependency.

### 3.2 Event-Carried State Transfer
Service B publish events chứa data → Service A lưu local copy.
```
ProductService publishes: ProductUpdated {id, name, price, image}
OrderService subscribes → lưu product snapshot trong order_items
→ Không cần gọi ProductService khi hiển thị order history
```

### 3.3 CQRS (xem chi tiết ở Bài 9)
Tạo read-optimized views từ events — dedicated query service.

---

## 4. Schema Migration Strategy

Mỗi service quản lý schema riêng:
- **Flyway / Liquibase** (Java) hoặc **Prisma Migrate / Knex** (Node.js)
- Migration scripts versioned trong source code
- Backward-compatible changes: add column (nullable), add table
- Breaking changes: multi-phase migration (add new → migrate data → remove old)

---

## Tóm tắt

- **Database per Service** là non-negotiable cho real microservices
- Chọn DB theo use case (**Polyglot Persistence**)
- Data sharing qua **Events** (preferred) hoặc **API calls**
- Schema migration là trách nhiệm của từng service team

---

**Bài tiếp theo:** [Bài 8: Saga Pattern & Distributed Transactions](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-8-saga-pattern-distributed-transactions)
