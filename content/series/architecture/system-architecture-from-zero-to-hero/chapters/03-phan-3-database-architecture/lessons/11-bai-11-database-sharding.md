---
id: 019d8a21-c110-7001-d001-e1f2a3b4c511
title: "Bài 11: Database Sharding & Partitioning"
slug: bai-11-database-sharding-partitioning
description: >-
  Vertical vs Horizontal Partitioning. Sharding strategies:
  Range-based, Hash-based, Directory-based. Consistent Hashing.
  Cross-shard queries và distributed transactions.
  Re-sharding strategies. Hands-on thiết kế sharding scheme.
duration_minutes: 160
is_free: false
video_url: null
sort_order: 11
section_title: "Phần 3: Database Architecture & Data Management"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Khi database phình to đến hàng trăm GB hoặc TB, một server duy nhất không thể xử lý. **Sharding** chia data thành nhiều phần nhỏ hơn, mỗi phần nằm trên một server riêng.

---

## 1. Partitioning vs Sharding

```
Partitioning: Chia data TRONG 1 database server
  ┌─────────────────────────────────────┐
  │         Server (1 máy)              │
  │  ┌──────┐ ┌──────┐ ┌──────┐        │
  │  │Part 1│ │Part 2│ │Part 3│        │
  │  │Jan   │ │Feb   │ │Mar   │        │
  │  └──────┘ └──────┘ └──────┘        │
  └─────────────────────────────────────┘

Sharding: Chia data GIỮA nhiều servers
  ┌──────────┐  ┌──────────┐  ┌──────────┐
  │ Server 1 │  │ Server 2 │  │ Server 3 │
  │ Shard A  │  │ Shard B  │  │ Shard C  │
  │ User 1-M │  │ User M-N │  │ User N-Z │
  └──────────┘  └──────────┘  └──────────┘
```

---

## 2. Vertical vs Horizontal Partitioning

### 2.1 Vertical Partitioning

```sql
-- Trước: 1 table lớn
users (id, name, email, avatar_blob, bio_text, settings_json, ...)

-- Sau: Tách theo columns
users_core    (id, name, email)        -- Hot data, truy vấn thường
users_profile (id, avatar_blob, bio)   -- Large data, ít truy vấn  
users_settings(id, settings_json)      -- Read-heavy, cache được
```

### 2.2 Horizontal Partitioning (Sharding)

```sql
-- Trước: 1 table 100M rows
orders (id, user_id, product_id, amount, created_at)

-- Sau: Chia theo rows
orders_shard_0: user_id % 4 == 0  (25M rows)
orders_shard_1: user_id % 4 == 1  (25M rows)
orders_shard_2: user_id % 4 == 2  (25M rows)
orders_shard_3: user_id % 4 == 3  (25M rows)
```

---

## 3. Sharding Strategies

### 3.1 Range-Based Sharding

```
Shard Key: created_at

Shard 1: 2024-01 → 2024-03
Shard 2: 2024-04 → 2024-06
Shard 3: 2024-07 → 2024-09
Shard 4: 2024-10 → 2024-12

Ưu điểm:
  ✅ Range queries hiệu quả
  ✅ Dễ thêm shard mới

Nhược điểm:
  ❌ Hot spots (shard mới nhất nhận nhiều writes)
  ❌ Data không đều
```

### 3.2 Hash-Based Sharding

```
Shard Key: user_id
Hash Function: user_id % N (N = số shards)

user_id=101 → 101 % 4 = 1 → Shard 1
user_id=202 → 202 % 4 = 2 → Shard 2
user_id=303 → 303 % 4 = 3 → Shard 3
user_id=404 → 404 % 4 = 0 → Shard 0

Ưu điểm:
  ✅ Data phân bố đều
  ✅ Không có hot spots

Nhược điểm:
  ❌ Range queries phải query ALL shards
  ❌ Thêm shard → Phải rehash tất cả data!
```

### 3.3 Consistent Hashing

```
Vấn đề: Hash-based với N shards, thêm 1 shard → rehash tất cả

Giải pháp: Consistent Hashing Ring

         Shard A (0°)
            │
    ┌───────┼───────┐
    │       │       │
Shard D   Ring    Shard B
  (270°)  (hash)   (90°)
    │       │       │
    └───────┼───────┘
            │
         Shard C (180°)

Key → hash → vị trí trên ring → đi clockwise → gặp shard nào thì vào shard đó

Thêm Shard E (45°):
  - Chỉ di chuyển data giữa 0° và 45°
  - Không ảnh hưởng data khác
  - Di chuyển ~1/N data thay vì tất cả
```

### 3.4 Directory-Based Sharding

```
┌────────────────────────────────────────┐
│         Lookup Service / Table         │
│  ┌──────────────────────────────────┐  │
│  │ user_id: 1-1000   → Shard A     │  │
│  │ user_id: 1001-5000→ Shard B     │  │
│  │ user_id: VIP      → Shard C     │  │
│  │ user_id: 5001+    → Shard D     │  │
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘

Ưu điểm:
  ✅ Flexible: thay đổi mapping dễ dàng
  ✅ Có thể balance thủ công

Nhược điểm:
  ❌ Lookup service = SPOF
  ❌ Extra hop cho mọi query
```

---

## 4. Chọn Shard Key

```
Shard Key tốt:
  ✅ Cardinality cao (nhiều unique values)
  ✅ Phân bố đều (không hot spots)
  ✅ Phù hợp query patterns
  ✅ Immutable (không thay đổi)

Ví dụ hệ thống E-commerce:
  ❌ country_code  → VN chiếm 80% traffic → hot spot
  ❌ created_at    → Shard mới nhất quá tải
  ✅ user_id       → Phân bố đều, query theo user phổ biến
  ✅ order_id      → UUID, phân bố tốt

Ví dụ hệ thống Chat:
  ❌ user_id   → Group chat phải query nhiều shards
  ✅ room_id   → Messages cùng room → cùng shard
```

---

## 5. Vấn đề với Sharding

### 5.1 Cross-Shard Queries

```sql
-- Query đơn giản (single shard):
SELECT * FROM orders WHERE user_id = 123;
→ hash(123) → Shard 2 → Query 1 shard ✅

-- Cross-shard query:
SELECT * FROM orders ORDER BY created_at DESC LIMIT 20;
→ Phải query TẤT CẢ shards
→ Merge + Sort kết quả
→ Chậm hơn nhiều ❌
```

### 5.2 Cross-Shard Joins

```sql
-- Trước sharding (1 database):
SELECT u.name, o.amount
FROM users u JOIN orders o ON u.id = o.user_id;

-- Sau sharding:
-- users ở Shard theo user_id
-- orders ở Shard theo order_id (khác shard!)
-- JOIN phải đi qua network → Rất chậm

Giải pháp:
  1. Denormalization: Copy user.name vào orders table
  2. Cùng shard key: Shard cả users và orders theo user_id
  3. Application-level join: Query riêng, merge trong code
```

### 5.3 Distributed Transactions

```
Vấn đề: Transfer $100 from User A (Shard 1) to User B (Shard 2)
  Shard 1: balance -= 100
  Shard 2: balance += 100
  → Phải ATOMIC! Cả 2 phải thành công hoặc cả 2 fail

Giải pháp: Two-Phase Commit (2PC)
  Phase 1 (Prepare):
    Coordinator → Shard 1: "Prepare to debit $100"
    Coordinator → Shard 2: "Prepare to credit $100"
    Both respond: "Ready"

  Phase 2 (Commit):
    Coordinator → Shard 1: "Commit"
    Coordinator → Shard 2: "Commit"

Thay thế: Saga Pattern (eventual consistency)
  Step 1: Debit User A
  Step 2: Credit User B
  Compensate: If Step 2 fails → Refund User A
```

---

## 6. Re-sharding

```
Khi nào cần re-shard:
  - Shard quá lớn (disk/memory/CPU)
  - Data phân bố không đều (hot shard)
  - Thêm capacity

Strategies:
  1. Double shard count (4 → 8):
     Mỗi shard chia đôi, di chuyển 50% data

  2. Virtual shards:
     Tạo nhiều virtual shards hơn physical servers
     Khi thêm server → Move virtual shards

  3. Online re-sharding:
     a) Tạo shard mới
     b) Dual-write (ghi cả old + new)
     c) Backfill data cũ sang shard mới
     d) Switch reads sang shard mới
     e) Stop writing to old shard
```

---

## So sánh tổng hợp

| Strategy | Data Distribution | Range Query | Add/Remove Shard | Complexity |
|----------|-------------------|-------------|-------------------|-----------|
| Range | Có thể lệch | Tốt | Dễ | Thấp |
| Hash | Đều | Kém | Khó (rehash) | Trung bình |
| Consistent Hash | Đều | Kém | Dễ (ít data move) | Cao |
| Directory | Tuỳ chỉnh | Tuỳ mapping | Linh hoạt | Cao |

---

## Bài tập

1. **Shard Key Selection:** Hệ thống Social Media với 100M users, features: user profile, posts, comments, likes. Chọn shard key cho mỗi table và giải thích.

2. **Consistent Hashing:** Vẽ consistent hashing ring với 4 nodes, thêm node thứ 5. Tính phần trăm data cần di chuyển.

3. **Re-sharding Plan:** Bạn có 4 shards, shard 2 chiếm 60% data (hot spot vì range-based theo thời gian). Viết kế hoạch re-shard với zero downtime.
