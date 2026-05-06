---
id: 019d8a22-c308-7a10-b001-a1b2c3d4e508
title: 'Lesson 8: Database per Service & Polyglot Persistence'
slug: bai-8-database-per-service-polyglot-persistence
description: >-
  Database per Service principles, why not share databases, Polyglot Persistence
  (choose the appropriate DB for each service), data ownership and cross-service
  data query strategies.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 8
section_title: 'Part 3: Data Management in Microservices'
course:
  id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
  title: Cloud Native Microservices Architecture
  slug: cloud-native-microservices-architecture
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7701" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7701)"/>

  <!-- Decorations -->
  <g>
    <circle cx="846" cy="148" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1092" cy="274" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="838" cy="140" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1084" cy="266" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="830" cy="132" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="208" x2="1100" y2="288" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="238" x2="1050" y2="308" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1045.2390923627308,186.5 1045.2390923627308,229.5 1008,251 970.7609076372692,229.5 970.7609076372692,186.5 1008,165" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ Architecture — Lesson 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 8: Database per Service & Polyglot</tspan>
      <tspan x="60" dy="42">Persistence</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Cloud Native Microservices Architecture</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Data Management in Microservices</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

![Lesson 8: Database per Service & Polyglot Persistence](/storage/uploads/2026/03/cn-bai-8-diagram.png)

## Introduction

In monolith, all modules share one database. In microservices, each service **owns its own database**. This principle is the foundation for achieving loose coupling but at the same time creates many new data consistency challenges.

---

## 1. Database per Service Pattern

### 1.1 Principles

```
✅ Database per Service:
┌────────────┐    ┌────────────┐    ┌────────────┐
│   Order    │    │  Payment   │    │  Catalog   │
│  Service   │    │  Service   │    │  Service   │
└─────┬──────┘    └─────┬──────┘    └─────┬──────┘
      │                 │                 │
┌─────▼──────┐    ┌─────▼──────┐    ┌─────▼──────┐
│ PostgreSQL │    │ PostgreSQL │    │  MongoDB   │
│  (orders)  │    │ (payments) │    │ (products) │
└────────────┘    └────────────┘    └────────────┘

Quy tắc: KHÔNG truy cập DB của service khác trực tiếp.
Muốn data từ Payment? → Gọi Payment API.
```

### 1.2 Why not share Database?

```
❌ Shared Database:
┌────────────┐    ┌────────────┐
│   Order    │    │  Payment   │
│  Service   │    │  Service   │
└─────┬──────┘    └─────┬──────┘
      │                 │
      └────────┬────────┘
         ┌─────▼──────┐
         │ Shared DB  │
         │ (all tables)│
         └────────────┘

Vấn đề:
├── Schema coupling: Payment đổi schema → Order bị broken
├── Performance coupling: Query nặng từ Order → Payment bị chậm
├── Deployment coupling: DB migration phải coordinate cả 2 team
├── Scaling coupling: Không thể scale DB riêng cho từng service
└── Technology coupling: Tất cả phải dùng cùng DB engine
```

### 1.3 Isolation Strategies

```
Strategy 1: Separate Database (khuyến nghị)
├── Mỗi service một database instance
├── Cách ly hoàn toàn
└── Chi phí cao hơn nhưng an toàn nhất

Strategy 2: Separate Schema
├── Cùng database instance, khác schema
├── Cách ly ở mức schema
└── Chi phí thấp hơn, phù hợp start

Strategy 3: Separate Tables
├── Cùng schema, khác tables
├── Cách ly yếu nhất
└── Chỉ phù hợp giai đoạn đầu migration
```

---

## 2. Polyglot Persistence

### 2.1 Choose the appropriate Database

Each service chooses the **optimal database for its data characteristics**:

| Service | Database | Reason |
|--------|----------|-------|
| Order | PostgreSQL | ACID transactions, relational data, complex queries |
| Product Catalog | MongoDB | Flexible schema, nested documents, varied product types |
| User Session | Redis | In-memory, sub-millisecond access, auto-expire (TTL) |
| Search | Elasticsearch | Full-text search, inverted index, faceted search |
| Activity Feed | Apache Cassandra | High write throughput, time-series, distributed |
| Recommendation | Neo4j | Graph relationships ("users who bought X also bought Y") |
| Shopping Cart | Redis/DynamoDB | Key-value, fast access, ephemeral data |
| Analytics | ClickHouse | Columnar, OLAP, aggregate queries |
| File/Image | S3/MinIO | Object storage, unlimited scale |

### 2.2 Practical example: E-Commerce

```
┌──────────┐  PostgreSQL   ┌──────────┐  MongoDB
│  Order   │──────────────▶│ Catalog  │──────────▶
│  Service │  (orders,     │ Service  │  (products,
└──────────┘   line_items) └──────────┘   variants)

┌──────────┐  Redis        ┌──────────┐  Elasticsearch
│  Cart    │──────────────▶│  Search  │──────────▶
│  Service │  (cart:{uid})  │ Service  │  (products index)
└──────────┘               └──────────┘

┌──────────┐  PostgreSQL   ┌──────────┐  ClickHouse
│ Payment  │──────────────▶│Analytics │──────────▶
│ Service  │  (payments,   │ Service  │  (events,
└──────────┘   refunds)    └──────────┘   aggregates)
```

---

## 3. Cross-Service Data Query

### 3.1 Problem

When you need to display order details including customer and product information:

```
❌ Trước (monolith): 
  SELECT o.*, c.name, p.title 
  FROM orders o
  JOIN customers c ON o.customer_id = c.id
  JOIN products p ON oi.product_id = p.id

✅ Sau (microservices):
  Order, Customer, Product ở databases khác nhau → Không thể JOIN!
```

### 3.2 Solution: API Composition

```
API Gateway / BFF / Composite Service:

1. GET /orders/O-001     → Order Service    → {order_id, customer_id, items}
2. GET /customers/C-042  → Customer Service → {name, email}
3. GET /products/P-100   → Product Service  → {title, image}

4. Compose response:
{
  "order": {
    "id": "O-001",
    "customer": {"name": "Nguyen Van A", "email": "a@email.com"},
    "items": [
      {"product": {"title": "iPhone 16", "image": "..."}, "quantity": 1}
    ]
  }
}
```

### 3.3 Solution: CQRS + Materialized View

```
Tạo read-optimized view bằng cách subscribe events:

Order.Created ──▶ ┌─────────────────────┐
Customer.Updated ──▶│  Order Detail View  │
Product.Updated  ──▶│  (Elasticsearch)    │
                   │                     │
                   │  {order + customer  │
                   │   + product details}│
                   └─────────────────────┘

Query: GET /order-details/O-001 → Trả kết quả đã composed sẵn
```

### 3.4 Compare strategies

| Strategy | Pros | Cons | Use Case |
|----------|-------|-------|----------|
| API Composition | Simple, real-time data | Latency (multiple calls), partial failure | Dashboard, admin UI |
| CQRS + Materialized View | Fast reads, pre-composed | Eventual consistency, complexity | Customer-facing, search |
| Data Replication (events) | Fast, local queries | Stale data, storage duplication | Read-heavy services |

---

## 4. Data Ownership

### 4.1 Rules

```
Mỗi piece of data có MỘT owner duy nhất:

Customer data → Customer Service (owner)
  ├── Order Service: giữ customer_id (reference)
  ├── Payment Service: giữ customer_id (reference)
  └── Notification Service: subscribe CustomerUpdated event

Price data → Catalog Service (owner)
  └── Order Service: snapshot giá tại thời điểm order
       (không query lại, vì giá có thể thay đổi)
```

### 4.2 Data Snapshot Pattern

```
Khi tạo Order, snapshot data cần thiết:

Order {
  id: "O-001",
  customer_snapshot: {        ← Copy tại thời điểm order
    name: "Nguyen Van A",
    address: "123 ABC"
  },
  items: [{
    product_id: "P-100",
    title_snapshot: "iPhone",  ← Copy tại thời điểm order
    price_snapshot: 25000000   ← Giá tại thời điểm order
  }]
}

→ Customer đổi address sau đó? Order vẫn giữ address cũ (đúng)
→ Product tăng giá? Order vẫn giữ giá cũ (đúng)
```

---

## 5. Database Migration Strategy

### 5.1 From Shared DB to Database per Service

```
Phase 1: Identify boundaries
  Shared DB → Xác định tables thuộc service nào

Phase 2: Create APIs
  Service A gọi Service B qua API thay vì JOIN

Phase 3: Sync data
  Dual-write hoặc CDC để sync trong quá trình migration

Phase 4: Split databases
  Move tables sang database riêng

Phase 5: Remove old connections
  Xoá direct DB access, chỉ giữ API calls
```

---

## 6. Summary

| Concepts | Key Point |
|--------|-----------|
| Database per Service | Each service owns its own database, not shared |
| Polyglot Persistence | Choose the appropriate DB for each service |
| API Composition | Cross-service queries by aggregate API calls |
| CQRS + View | Create read-optimized views for complex queries |
| Data Ownership | Each data has a unique service owner |
| Data Snapshots | Copy the data needed at the time of transaction |

> **Next article**: Event Sourcing & CQRS — Save state as events and separate read/write model.
