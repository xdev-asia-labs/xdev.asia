---
id: 019d8a21-c110-7001-d001-e1f2a3b4c511
title: 'Lesson 11: Database Sharding & Partitioning'
slug: bai-11-database-sharding-partitioning
description: >-
  Vertical vs Horizontal Partitioning. Sharding strategies: Range-based,
  Hash-based, Directory-based. Consistent Hashing. Cross-shard queries and
  distributed transactions. Re-sharding strategies. Hands-on sharding scheme
  design.
duration_minutes: 160
is_free: false
video_url: null
sort_order: 11
section_title: 'Part 3: Database Architecture & Data Management'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'System Architecture: From Zero to Hero'
  slug: system-architecture-from-zero-to-hero
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2850" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2850)"/>

  <!-- Decorations -->
  <g>
    <circle cx="911" cy="243" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="722" cy="54" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1033" cy="125" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="844" cy="196" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="655" cy="267" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="153" x2="1100" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="183" x2="1050" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="927.2487113059643,89 927.2487113059643,117 903,131 878.7512886940357,117 878.7512886940357,89 903,75" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🏗️ Architecture — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: Database Sharding & Partitioning</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Database Architecture & Data Management</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

When the database swells to hundreds of GB or TB, a single server cannot handle it. **Sharding** divides data into smaller parts, each part located on a separate server.

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

## 4. Select Shard Key

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

## 5. Problems with Sharding

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

## Comparative summary

| Strategy | Data Distribution | Range Query | Add/Remove Shard | Complexity |
|----------|-------------------|-------------|-------------|-----------|
| Range | May deviate | Good | Easy | Low |
| Hash | All | Poor | Difficult (rehash) | Average |
| Consistent Hash | All | Poor | Easy (less data moves) | Cao |
| Directory | Custom | Custom mapping | Flexible | Cao |

---

## Exercises

1. **Shard Key Selection:** Social Media system with 100M users, features: user profile, posts, comments, likes. Select shard key for each table and explain.

2. **Consistent Hashing:** Draw a consistent hashing ring with 4 nodes, add a 5th node. Calculate the percentage of data that needs to be moved.

3. **Re-sharding Plan:** You have 4 shards, shard 2 accounts for 60% of data (hot spot because of range-based over time). Write a re-shard plan with zero downtime.
