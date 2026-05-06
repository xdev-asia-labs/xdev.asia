---
id: 019d8a21-c107-7001-d001-e1f2a3b4c507
title: 'Lesson 7: Caching Strategies - Optimize performance with Cache'
slug: bai-7-caching-strategies-toi-uu-hieu-nang-voi-cache
description: >-
  Caching layers: Client, CDN, Web Server, Application, Database. Cache
  Patterns: Cache-Aside, Write-Through, Write-Behind, Refresh-Ahead. Cache
  Eviction Policies (LRU, LFU, TTL). Redis vs Memcached. Cache Stampede,
  Thundering Herd and how to handle it. Distributed Caching.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 7
section_title: 'Part 2: Infrastructure Components'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'System Architecture: From Zero to Hero'
  slug: system-architecture-from-zero-to-hero
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9479" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9479)"/>

  <!-- Decorations -->
  <g>
    <circle cx="801" cy="53" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="1002" cy="234" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="703" cy="155" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="904" cy="76" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="605" cy="257" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="123" x2="1100" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="153" x2="1050" y2="223" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="955.9089653438086,104 955.9089653438086,142 923,161 890.0910346561914,142 890.0910346561914,104.00000000000001 923,85" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🏗️ Architecture — Lesson 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 7: Caching Strategies - Optimize performance</tspan>
      <tspan x="60" dy="42">Features with Cache</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Infrastructure Components</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

> "There are only two hard things in Computer Science: cache invalidation and naming things." — Phil Karlton

Caching is the most important technique to reduce latency and increase throughput. A cache hit can reduce response time from 100ms to 1ms — a **100x** improvement.

---

## 1. Caching layers

```
┌──────────────────────────────────────────────┐
│                  User Request                 │
└───────────────────┬──────────────────────────┘
                    ▼
        ┌───────────────────┐
        │  Browser Cache    │  ← HTML, CSS, JS, Images
        └─────────┬─────────┘
                  ▼
        ┌───────────────────┐
        │    CDN Cache       │  ← Static files, API responses
        └─────────┬─────────┘
                  ▼
        ┌───────────────────┐
        │  Load Balancer     │  ← SSL session cache
        └─────────┬─────────┘
                  ▼
        ┌───────────────────┐
        │  Application Cache │  ← Redis/Memcached
        └─────────┬─────────┘
                  ▼
        ┌───────────────────┐
        │  Database Cache    │  ← Query cache, Buffer pool
        └───────────────────┘
```

---

## 2. Cache Patterns

### 2.1 Cache-Aside (Lazy Loading)

```
Read:
  App ──► Cache: "Có user:123 không?"
  Cache:  "Không" (MISS)
  App ──► Database: SELECT * FROM users WHERE id=123
  DB ──►  App: {name: "John", ...}
  App ──► Cache: SET user:123 = {name: "John", ...}  ← Cache lại
  App ──► Client: {name: "John", ...}

Lần sau:
  App ──► Cache: "Có user:123 không?"
  Cache:  "Có!" (HIT) → Return ngay, không cần DB
```

```python
def get_user(user_id):
    # 1. Check cache
    cached = redis.get(f"user:{user_id}")
    if cached:
        return json.loads(cached)

    # 2. Cache miss -> query DB
    user = db.query("SELECT * FROM users WHERE id = %s", user_id)

    # 3. Cache the result
    if user:
        redis.setex(f"user:{user_id}", 3600, json.dumps(user))  # TTL 1h

    return user
```

**Advantages:** Only caches requested data, simple
**Disadvantages:** Cache miss = 3 trips (check cache + query DB + set cache)

### 2.2 Write-Through

```
Write:
  App ──► Cache: SET user:123 = {name: "Jane"} ← Update cache
  Cache ──► Database: UPDATE users SET name='Jane' WHERE id=123
  Cache ──► App: Success

Read:
  App ──► Cache: GET user:123 → Always HIT (data luôn trong cache)
```

**Advantages:** Cache is always in sync with the DB, reading is always fast
**Disadvantages:** Writing is slower (must go through cache + DB), cache data may never be read

### 2.3 Write-Behind (Write-Back)

```
Write:
  App ──► Cache: SET user:123 = {name: "Jane"} ← Update cache ngay
  Cache: "OK, sẽ ghi vào DB sau"
  App ──► Client: Success ngay lập tức!

  Background (async):
  Cache ──► Database: UPDATE users SET name='Jane'
```

**Advantages:** Write extremely fast, batch writes
**Disadvantages:** Risk of data loss if cache crashes before writing to DB

### 2.4 Refresh-Ahead

```
Cache có TTL = 60s

T=0:   Cache data (TTL=60s)
T=50s: TTL sắp hết → Background refresh từ DB
T=55s: Cache refreshed (TTL reset = 60s)
T=60s: Cache vẫn có data → Không có cache miss

→ Giảm cache miss gần như về 0
```

**Advantages:** Almost no cache misses
**Disadvantages:** Wrong prediction → wasteful and complicated refresh

---

## 3. Cache Eviction Policies

When the cache is full, you need to decide which entry to delete:

| Policy | Description | Best for |
|--------|--------|--------|
| **LRU** (Least Recently Used) | Delete the least recently accessed entry | General purpose |
| **LFU** (Least Frequently Used) | Delete the least visited entry | Hot data patterns |
| **FIFO** (First In First Out) | Delete oldest entry | Simple use cases |
| **TTL** (Time To Live) | Delete after a fixed time | Data has natural expiry |
| **Random** | Random deletion | When the distribution is even |

### LRU Visualization

```
Cache size = 3

Access A: [A]
Access B: [B, A]
Access C: [C, B, A]       ← Cache đầy
Access D: [D, C, B]       ← A bị evict (ít truy cập gần đây nhất)
Access B: [B, D, C]       ← B move lên đầu
Access E: [E, B, D]       ← C bị evict
```

---

## 4. Redis vs Memcached

| Features | Redis | Memcached |
|--------|-------|-----------|
| **Data structures** | Strings, Lists, Sets, Sorted Sets, Hashes, Streams | Strings only |
| **Persistence** | RDB + AOF | No |
| **Replication** | Master-Slave | No |
| **Cluster** | Redis Cluster | Client-side sharding |
| **Pub/Sub** | ✓ | No |
| **Lua scripting** | ✓ | No |
| **Memory efficiency** | Good | Better for simple strings |
| **Multi-threaded** | Single-threaded (io-threads from 6.0) | Multi-threaded |

> **Recommendation:** Use **Redis** for most use cases. Only use Memcached when you need simple string cache, multi-threaded performance.

---

## 5. Cache Problems & Solutions

### 5.1 Cache Stampede (Thundering Herd)

```
Vấn đề:
  Popular key expires
  1000 requests đồng thời → tất cả MISS
  → 1000 queries tới DB cùng lúc → DB crash!

Giải pháp 1 - Locking:
  Request 1: Cache MISS → Lock key → Query DB → Set cache → Release lock
  Request 2-1000: Cache MISS → Thấy lock → Đợi → Get from cache

Giải pháp 2 - Stale-While-Revalidate:
  Trả cached data (dù expired) → Background refresh
```

### 5.2 Cache Penetration

```
Vấn đề:
  Query cho data KHÔNG TỒN TẠI
  Cache always MISS → DB query returns empty → Không cache
  → Attacker spam requests cho non-existent IDs

Giải pháp 1 - Cache empty result:
  redis.setex("user:99999", 300, "NULL")  # Cache "không có" 5 phút

Giải pháp 2 - Bloom Filter:
  Trước khi query, check Bloom Filter
  Nếu key chắc chắn không tồn tại → Return empty ngay
```

### 5.3 Cache Avalanche

```
Vấn đề:
  Nhiều keys expire cùng lúc → Massive cache misses → DB overload

Giải pháp:
  Thêm random jitter vào TTL
  TTL = base_ttl + random(0, base_ttl * 0.1)

  Ví dụ: base_ttl = 3600s
  Key 1: TTL = 3600 + random(0, 360) = 3847s
  Key 2: TTL = 3600 + random(0, 360) = 3612s
  Key 3: TTL = 3600 + random(0, 360) = 3955s
```

---

## 6. Distributed Caching

### 6.1 Consistent Hashing

```
Khi thêm/xóa cache node, consistent hashing đảm bảo
chỉ 1/N keys cần migrate (thay vì tất cả)

Hash Ring:
          Node A
         ╱      ╲
   Node D        Node B
         ╲      ╱
          Node C

Key "user:123" → hash → vị trí trên ring → Node B
Thêm Node E → chỉ một phần keys từ Node B chuyển sang E
```

---

## Summary

| Pattern | Write Speed ​​| Read Speed ​​| Consistency | Use Case |
|--------|-------------|-----------|-------------|----------|
| Cache-Aside | Normal | Fast (after 1st) | Eventual | General purpose |
| Write-Through | Slow | Always fast | Strong | Read-heavy + consistency |
| Write-Behind | Fast | Always fast | Eventual | Write-heavy |
| Refresh-Ahead | Normal | Always fast | Near-real-time | Predictable access |

---

## Exercises

1. **Cache Strategy:** Design caching for news applications: (a) Hot articles (million views), (b) Old articles (few views), (c) Real-time comments. Select cache pattern and TTL for each type.

2. **Cache Problem:** Flash sale system has 100K users accessing 1 product at the same time. Cache keys `product:123` expires right when the sale starts. Design a solution to avoid stampede cache.

3. **Redis Design:** Design Redis data structure for leaderboard (top 100 users according to score). Need support: add/update score, get top N, get rank of 1 user.
