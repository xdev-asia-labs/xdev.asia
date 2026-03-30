---
id: 019d8a21-c110-7001-d001-e1f2a3b4c524
title: "Bài 24: Case Study - Thiết kế URL Shortener"
slug: bai-24-case-study-thiet-ke-url-shortener
description: >-
  System Design Interview classic: URL Shortener (bit.ly).
  Requirements gathering. Estimation (QPS, storage). Short URL
  generation strategies. Database design. Caching layer.
  Analytics & redirection flow.
duration_minutes: 140
is_free: true
video_url: null
sort_order: 24
section_title: "Phần 7: System Design Case Studies"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

URL Shortener là bài system design phổ biến nhất trong phỏng vấn. Tuy đơn giản nhưng cover nhiều concepts: hashing, database, caching, scaling, analytics.

---

## 1. Requirements

### 1.1 Functional

```
- Tạo short URL từ long URL
- Redirect short URL → long URL
- Custom alias (optional)
- Expiration time (optional)
- Analytics: click count, referrer, location
```

### 1.2 Non-Functional

```
- Read-heavy (100:1 read/write ratio)
- Low latency redirect (< 50ms)
- High availability (99.99%)
- Short URL không đoán được
```

### 1.3 Estimation

```
Assumptions:
  100M URLs created / month
  Read:Write = 100:1 → 10B redirects / month

QPS:
  Write: 100M / (30 × 24 × 3600) ≈ 40 URLs/s
  Read:  40 × 100 = 4,000 redirects/s

Storage (5 years):
  100M × 12 × 5 = 6B URLs
  Each URL: ~500 bytes (short + long + metadata)
  Total: 6B × 500B = 3TB

Cache (20% hot URLs):
  4,000 QPS, cache 20% requests
  Cache size: 4,000 × 86,400 × 20% × 500B ≈ 35GB
  → Fits in 1 Redis instance
```

---

## 2. Short URL Generation

### 2.1 Strategy: Base62 Encoding

```
Base62: [0-9a-zA-Z] = 62 characters
7 characters: 62^7 = 3.5 trillion combinations

ID = 123456789
Base62 = "8M0kX" (5 chars)

Approach 1: Auto-increment ID → Base62
  Pros: Simple, no collision
  Cons: Predictable (sequential), single point (ID generator)

Approach 2: Hash (MD5/SHA256) → Take first 7 chars
  MD5("https://example.com/long-url") = "a1b2c3d4..."
  Short = "a1b2c3d"
  Pros: Deterministic
  Cons: Collision possible → need collision handling

Approach 3: Pre-generate random IDs
  Generate millions of unique IDs offline
  App picks unused ID from pool
  Pros: No collision, fast
  Cons: Complexity of ID pool management
```

### 2.2 ID Generation for Distributed Systems

```
Snowflake-like ID:
  ┌─────────┬──────────┬──────────┬───────────┐
  │ 1 bit   │ 41 bits  │ 10 bits  │ 12 bits   │
  │ sign    │timestamp │machine ID│ sequence  │
  └─────────┴──────────┴──────────┴───────────┘

  → Unique across servers
  → Sortable by time
  → 64-bit → Base62 = 11 chars (take 7)
```

---

## 3. Architecture

```
┌──────────────────────────────────────────────────────┐
│                                                       │
│  Client                                               │
│    │                                                   │
│    ▼                                                   │
│  ┌──────────────┐                                     │
│  │ Load Balancer│                                     │
│  └──────┬───────┘                                     │
│         │                                             │
│  ┌──────▼───────┐    ┌──────────────┐                 │
│  │ API Servers  │───►│ Redis Cache  │                 │
│  │ (Stateless)  │    │ (hot URLs)   │                 │
│  └──────┬───────┘    └──────────────┘                 │
│         │                                             │
│  ┌──────▼───────┐    ┌──────────────┐                 │
│  │ Database     │    │ Analytics    │                 │
│  │ (URL mapping)│    │ (Kafka →     │                 │
│  │              │    │  ClickHouse) │                 │
│  └──────────────┘    └──────────────┘                 │
│                                                       │
└──────────────────────────────────────────────────────┘
```

---

## 4. Database Design

```sql
CREATE TABLE urls (
  id         BIGINT PRIMARY KEY,     -- Snowflake ID
  short_code VARCHAR(7) UNIQUE,      -- Base62 encoded
  long_url   TEXT NOT NULL,
  user_id    BIGINT,                 -- creator
  created_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP,
  click_count BIGINT DEFAULT 0
);

-- Index for redirect lookup (hot path)
CREATE INDEX idx_short_code ON urls(short_code);

Database Choice:
  Write path: PostgreSQL (ACID, reliable)
  Read path:  Redis cache (fast lookup)
  Analytics:  ClickHouse (aggregate queries)
```

---

## 5. API Design

```
Create Short URL:
  POST /api/shorten
  {
    "long_url": "https://example.com/very/long/path",
    "custom_alias": "mylink",     // optional
    "expires_at": "2025-01-01"    // optional
  }
  Response: { "short_url": "https://xdev.vn/a1b2c3d" }

Redirect:
  GET /a1b2c3d
  → 301 Redirect to https://example.com/very/long/path

  301 (Permanent): Browser caches, ít analytics
  302 (Temporary): Browser không cache, nhiều analytics hơn
  → Chọn 302 nếu cần analytics chính xác

Analytics:
  GET /api/stats/a1b2c3d
  Response: { "clicks": 15234, "created": "...", ... }
```

---

## 6. Redirect Flow

```
User clicks: https://xdev.vn/a1b2c3d

1. Request → Load Balancer → API Server
2. Check Redis: GET "url:a1b2c3d"
   Hit?  → Return long_url (fast!)
   Miss? → Query Database, cache result
3. Return 302 Redirect: Location: {long_url}
4. Async: Publish click event → Kafka
   → Analytics consumer: aggregate clicks

Cache Strategy:
  Write: Create URL → Write DB + Cache
  Read:  Lookup → Cache first → DB if miss
  Eviction: LRU, TTL = 24 hours
```

---

## 7. Scaling Considerations

```
Database Scaling:
  Read-heavy → Read replicas
  10B+ URLs → Shard by short_code hash
  Partition by created_at (archive old URLs)

Cache Scaling:
  Single Redis thường đủ (35GB fits)
  Nếu cần: Redis Cluster

API Scaling:
  Stateless → Horizontal scaling
  Auto-scale based on QPS

Rate Limiting:
  Prevent abuse: Max 100 URLs/hour per user
  Prevent redirect abuse: Max 1000 redirects/min per IP
```

---

## Tổng kết

| Component | Technology | Purpose |
|-----------|-----------|---------|
| API | Node.js/Go | Stateless, fast |
| Database | PostgreSQL | URL mapping ACID |
| Cache | Redis | Hot URL lookup |
| Analytics | Kafka + ClickHouse | Click tracking |
| ID Generation | Snowflake | Distributed unique IDs |

---

## Bài tập

1. Nếu cần hỗ trợ 1M URLs/giây (100x scale), bạn thay đổi architecture thế nào?

2. Thiết kế custom alias feature: validate, conflict handling, reserving premium aliases.

3. Thiết kế URL expiration: automatic cleanup, handling expired URL redirects.
