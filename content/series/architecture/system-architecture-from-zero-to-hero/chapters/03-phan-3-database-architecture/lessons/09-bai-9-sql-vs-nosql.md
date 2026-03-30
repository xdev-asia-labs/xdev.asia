---
id: 019d8a21-c109-7001-d001-e1f2a3b4c509
title: "Bài 9: SQL vs NoSQL - Chọn Database phù hợp"
slug: bai-9-sql-vs-nosql-chon-database-phu-hop
description: >-
  RDBMS và ACID properties. NoSQL categories: Key-Value (Redis, DynamoDB),
  Document (MongoDB, CouchDB), Wide Column (Cassandra, HBase),
  Graph (Neo4j). BASE vs ACID. Khi nào chọn SQL, khi nào chọn NoSQL.
  Polyglot Persistence. NewSQL (CockroachDB, TiDB).
duration_minutes: 160
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Database Architecture & Data Management"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Database là trái tim của mọi hệ thống. Chọn sai database có thể dẫn đến re-architecture toàn bộ hệ thống — tốn kém và đau đớn. Bài này giúp bạn hiểu rõ từng loại database và khi nào nên chọn cái nào.

---

## 1. SQL (Relational Database)

### 1.1 ACID Properties

| Property | Ý nghĩa | Ví dụ |
|----------|---------|-------|
| **Atomicity** | Transaction all-or-nothing | Chuyển tiền: trừ A + cộng B hoặc không gì cả |
| **Consistency** | Data luôn ở trạng thái hợp lệ | Balance không bao giờ âm |
| **Isolation** | Transactions không ảnh hưởng nhau | 2 người cùng mua vé → không conflict |
| **Durability** | Commit xong = data an toàn | Server crash ≠ mất data |

### 1.2 Khi nào chọn SQL?

```
✓ Data có cấu trúc rõ ràng (schema cố định)
✓ Relationships phức tạp (foreign keys, joins)
✓ Cần ACID transactions
✓ Data integrity quan trọng
✓ Query patterns đa dạng (ad-hoc queries)

Ví dụ: Banking, ERP, E-commerce orders, CRM
```

### 1.3 Phổ biến: PostgreSQL vs MySQL

| Feature | PostgreSQL | MySQL |
|---------|-----------|-------|
| **ACID** | Full | Full (InnoDB) |
| **JSON support** | Excellent (JSONB) | Good |
| **Full-text search** | Built-in | Built-in |
| **Replication** | Streaming, Logical | Binlog |
| **Extensions** | TimescaleDB, PostGIS | Limited |
| **Best for** | Complex queries, data integrity | Web apps, read-heavy |

---

## 2. NoSQL Categories

### 2.1 Key-Value Store

```
SET user:123 → {"name": "John", "email": "john@example.com"}
GET user:123 → {"name": "John", "email": "john@example.com"}

Cực nhanh: O(1) read/write
Hạn chế: Không có query phức tạp, không có relationships
```

| Database | Best for |
|----------|---------|
| **Redis** | Caching, sessions, leaderboards, pub/sub |
| **DynamoDB** | Serverless, auto-scaling key-value |
| **Memcached** | Simple caching |

### 2.2 Document Store

```json
// MongoDB document
{
  "_id": "order_123",
  "customer": {
    "name": "John",
    "email": "john@example.com"
  },
  "items": [
    {"product": "Laptop", "price": 1000, "qty": 1},
    {"product": "Mouse",  "price": 25,   "qty": 2}
  ],
  "total": 1050,
  "status": "shipped"
}
```

| Database | Best for |
|----------|---------|
| **MongoDB** | Flexible schema, rapid development |
| **CouchDB** | Offline-first, sync |
| **Elasticsearch** | Full-text search, analytics |

### 2.3 Wide Column Store

```
Row Key: user_123
  Column Family "profile":
    name: "John"
    email: "john@example.com"
  Column Family "activity":
    last_login: "2026-03-30"
    posts_count: 42

Mỗi row có thể có columns khác nhau
→ Linh hoạt cho IoT, time-series, analytics
```

| Database | Best for |
|----------|---------|
| **Cassandra** | High write throughput, multi-datacenter |
| **HBase** | Hadoop ecosystem, analytics |
| **ScyllaDB** | Cassandra-compatible, higher performance |

### 2.4 Graph Database

```
(John) ─[FRIENDS_WITH]─► (Jane)
(John) ─[WORKS_AT]────► (Google)
(Jane) ─[LIVES_IN]────► (Hanoi)
(John) ─[LIKES]───────► (Post_123)

Query: "Tìm bạn của bạn John sống ở Hà Nội"
→ Cực nhanh với Graph DB, cực chậm với SQL (multiple JOINs)
```

| Database | Best for |
|----------|---------|
| **Neo4j** | Social networks, recommendations, fraud detection |
| **Amazon Neptune** | AWS managed graph |
| **ArangoDB** | Multi-model (document + graph) |

---

## 3. ACID vs BASE

| Property | ACID (SQL) | BASE (NoSQL) |
|----------|-----------|-------------|
| **Focus** | Consistency | Availability |
| **Transactions** | Strong | Soft state |
| **Scale** | Vertical primarily | Horizontal |
| **Consistency** | Immediate | Eventual |
| **Schema** | Fixed | Flexible |

---

## 4. SQL vs NoSQL Decision Framework

```
                      Cần ACID?
                      ╱       ╲
                   Yes         No
                    │           │
               Complex         Scale
              Relations?    requirements?
              ╱       ╲     ╱        ╲
           Yes        No   High       Low
            │          │    │          │
         SQL          SQL  NoSQL      SQL
      (PostgreSQL)  (MySQL)(Cassandra)(Simple)
                           (MongoDB)
```

### 4.1 Decision Matrix

| Requirement | → Database |
|------------|-----------|
| Banking, Financial | PostgreSQL (ACID) |
| User sessions, caching | Redis (Key-Value) |
| Content management, CMS | MongoDB (Document) |
| Social graph, recommendations | Neo4j (Graph) |
| IoT, time-series | Cassandra / TimescaleDB |
| Full-text search | Elasticsearch |
| E-commerce catalog | MongoDB + Elasticsearch |
| Analytics, data warehouse | ClickHouse / BigQuery |

---

## 5. Polyglot Persistence

```
E-commerce Platform:

┌─────────────────────────────────────────────┐
│              Application Layer               │
├──────────┬──────────┬───────────┬───────────┤
│ Users    │ Products │ Orders    │ Analytics │
│   │      │   │      │   │       │   │       │
│PostgreSQL│ MongoDB  │PostgreSQL │ClickHouse │
│(accounts)│(catalog) │(payments) │(reports)  │
├──────────┴──────────┴───────────┴───────────┤
│              Redis (Caching Layer)            │
├─────────────────────────────────────────────┤
│          Elasticsearch (Search)              │
└─────────────────────────────────────────────┘
```

Mỗi service chọn database phù hợp nhất cho use case của nó.

---

## 6. NewSQL

NewSQL kết hợp ưu điểm của cả hai: ACID + Horizontal Scaling.

| Database | Mô tả |
|----------|--------|
| **CockroachDB** | Distributed SQL, PostgreSQL-compatible |
| **TiDB** | MySQL-compatible, HTAP |
| **Google Spanner** | Global distributed, strong consistency |
| **YugabyteDB** | PostgreSQL-compatible, distributed |

```
NewSQL = SQL Syntax + ACID Transactions + Horizontal Scaling

Trade-off: Latency cao hơn single-node SQL (distributed overhead)
```

---

## Tổng kết

| Database Type | Strengths | Use Cases |
|--------------|----------|----------|
| **SQL** | ACID, relationships, complex queries | Banking, E-commerce, ERP |
| **Key-Value** | Speed, simplicity | Caching, sessions |
| **Document** | Flexible schema, rapid dev | CMS, catalogs |
| **Wide Column** | Write throughput, scale | IoT, time-series |
| **Graph** | Relationship queries | Social, recommendations |
| **NewSQL** | Best of both worlds | Distributed ACID |

---

## Bài tập

1. **Database Selection:** Cho hệ thống healthcare management (bệnh viện), chọn database cho: (a) Hồ sơ bệnh nhân, (b) Lịch sử khám bệnh, (c) Hình ảnh y tế, (d) Tìm kiếm triệu chứng, (e) Quan hệ bệnh nhân-bác sĩ.

2. **Polyglot Design:** Thiết kế data architecture cho Shopee-like platform. Xác định mỗi service cần database nào và tại sao.

3. **Migration:** Hệ thống hiện dùng MongoDB cho tất cả. Orders cần strong consistency. Lập kế hoạch migrate orders sang PostgreSQL mà không downtime.
