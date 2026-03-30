---
id: 019d8a21-c107-7001-d001-e1f2a3b4c507
title: "Bài 7: Caching Strategies - Tối ưu hiệu năng với Cache"
slug: bai-7-caching-strategies-toi-uu-hieu-nang-voi-cache
description: >-
  Các tầng caching: Client, CDN, Web Server, Application, Database.
  Cache Patterns: Cache-Aside, Write-Through, Write-Behind, Refresh-Ahead.
  Cache Eviction Policies (LRU, LFU, TTL). Redis vs Memcached.
  Cache Stampede, Thundering Herd và cách xử lý. Distributed Caching.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Các Thành Phần Hạ Tầng (Infrastructure Components)"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

> "There are only two hard things in Computer Science: cache invalidation and naming things." — Phil Karlton

Caching là kỹ thuật quan trọng nhất để giảm latency và tăng throughput. Một cache hit có thể giảm response time từ 100ms xuống 1ms — cải thiện **100x**.

---

## 1. Các tầng Caching

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

**Ưu điểm:** Chỉ cache data được request, đơn giản
**Nhược điểm:** Cache miss = 3 trips (check cache + query DB + set cache)

### 2.2 Write-Through

```
Write:
  App ──► Cache: SET user:123 = {name: "Jane"} ← Update cache
  Cache ──► Database: UPDATE users SET name='Jane' WHERE id=123
  Cache ──► App: Success

Read:
  App ──► Cache: GET user:123 → Always HIT (data luôn trong cache)
```

**Ưu điểm:** Cache luôn đồng bộ với DB, read luôn nhanh
**Nhược điểm:** Write chậm hơn (phải qua cache + DB), cache data có thể không bao giờ được read

### 2.3 Write-Behind (Write-Back)

```
Write:
  App ──► Cache: SET user:123 = {name: "Jane"} ← Update cache ngay
  Cache: "OK, sẽ ghi vào DB sau"
  App ──► Client: Success ngay lập tức!

  Background (async):
  Cache ──► Database: UPDATE users SET name='Jane'
```

**Ưu điểm:** Write cực nhanh, batch writes
**Nhược điểm:** Rủi ro mất data nếu cache crash trước khi ghi DB

### 2.4 Refresh-Ahead

```
Cache có TTL = 60s

T=0:   Cache data (TTL=60s)
T=50s: TTL sắp hết → Background refresh từ DB
T=55s: Cache refreshed (TTL reset = 60s)
T=60s: Cache vẫn có data → Không có cache miss

→ Giảm cache miss gần như về 0
```

**Ưu điểm:** Gần như không có cache miss
**Nhược điểm:** Dự đoán sai → refresh lãng phí, phức tạp

---

## 3. Cache Eviction Policies

Khi cache đầy, cần quyết định xóa entry nào:

| Policy | Mô tả | Best for |
|--------|--------|---------|
| **LRU** (Least Recently Used) | Xóa entry ít được truy cập gần đây nhất | General purpose |
| **LFU** (Least Frequently Used) | Xóa entry ít được truy cập nhất | Hot data patterns |
| **FIFO** (First In First Out) | Xóa entry cũ nhất | Simple use cases |
| **TTL** (Time To Live) | Xóa sau thời gian cố định | Data có expiry tự nhiên |
| **Random** | Xóa ngẫu nhiên | Khi distribution đều |

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

| Feature | Redis | Memcached |
|---------|-------|-----------|
| **Data structures** | Strings, Lists, Sets, Sorted Sets, Hashes, Streams | Strings only |
| **Persistence** | RDB + AOF | Không |
| **Replication** | Master-Slave | Không |
| **Cluster** | Redis Cluster | Client-side sharding |
| **Pub/Sub** | ✓ | Không |
| **Lua scripting** | ✓ | Không |
| **Memory efficiency** | Tốt | Tốt hơn cho simple strings |
| **Multi-threaded** | Single-threaded (io-threads từ 6.0) | Multi-threaded |

> **Recommendation:** Dùng **Redis** cho hầu hết use cases. Chỉ dùng Memcached khi cần simple string cache, multi-threaded performance.

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

## Tổng kết

| Pattern | Write Speed | Read Speed | Consistency | Use Case |
|---------|------------|------------|-------------|----------|
| Cache-Aside | Normal | Fast (after 1st) | Eventual | General purpose |
| Write-Through | Slow | Always fast | Strong | Read-heavy + consistency |
| Write-Behind | Fast | Always fast | Eventual | Write-heavy |
| Refresh-Ahead | Normal | Always fast | Near-real-time | Predictable access |

---

## Bài tập

1. **Cache Strategy:** Thiết kế caching cho ứng dụng tin tức: (a) Bài viết hot (triệu views), (b) Bài viết cũ (ít views), (c) Comments real-time. Chọn cache pattern và TTL cho mỗi loại.

2. **Cache Problem:** Hệ thống flash sale có 100K users truy cập cùng lúc vào 1 sản phẩm. Cache key `product:123` expire đúng lúc sale bắt đầu. Thiết kế giải pháp tránh cache stampede.

3. **Redis Design:** Thiết kế Redis data structure cho leaderboard (top 100 users theo score). Cần hỗ trợ: thêm/cập nhật score, lấy top N, lấy rank của 1 user.
