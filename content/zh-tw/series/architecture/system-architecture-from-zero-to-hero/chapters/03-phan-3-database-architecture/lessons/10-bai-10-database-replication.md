---
id: 019d8a21-c110-7001-d001-e1f2a3b4c510
title: 第 10 課：資料庫複製 - 主從和主
slug: bai-10-database-replication-master-slave-master-master
description: >-
  什麼是複製以及為什麼需要它？同步與異步複製。主從：唯讀副本、故障轉移、升級。大師-大師：衝突解決、裂腦。複製延遲以及如何處理它。親身體驗
  PostgreSQL 流複製。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 第 3 部分：資料庫架構與資料管理
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6569" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6569)"/>

  <!-- Decorations -->
  <g>
    <circle cx="912" cy="186" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="724" cy="238" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1036" cy="30" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="848" cy="82" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="660" cy="134" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="126" x2="1100" y2="206" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="156" x2="1050" y2="226" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="961.507041555162,105.5 961.507041555162,146.5 926,167 890.492958444838,146.5 890.492958444838,105.50000000000001 926,85" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ 建築 — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：資料庫複製 -</tspan>
      <tspan x="60" dy="42">主從和主</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：資料庫架構與資料管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

單一資料庫伺服器是**單點故障**。如果它崩潰了，整個系統就會崩潰。資料庫複製透過將資料複製到多個伺服器來解決這個問題。

---

## 1. 為什麼需要複製？

|目標|複製有何幫助？
|----------|---------------------|
| **高可用性** |主站故障 → 從站接管 |
| **閱讀縮放** |跨多個副本分佈讀取 |
| **資料局部性** |副本靠近使用者（減少延遲）|
| **備份** |副本作為「熱備份」|
| **分析** |在副本上運行大量查詢，對生產沒有影響 |

---

## 2. 同步複製與非同步複製

### 2.1 同步

```
Client → Master: INSERT INTO orders (...)
Master → Replica 1: "Replicate this!"
Replica 1 → Master: "Done!"
Master → Replica 2: "Replicate this!"
Replica 2 → Master: "Done!"
Master → Client: "INSERT success"

Đảm bảo: Tất cả replicas có data trước khi confirm
Nhược điểm: Chậm (phải đợi tất cả replicas)
```

### 2.2 非同步

```
Client → Master: INSERT INTO orders (...)
Master → Client: "INSERT success"  ← Return ngay!
Master → Replica 1: "Replicate this" (async)
Master → Replica 2: "Replicate this" (async)

Ưu điểm: Nhanh (không đợi replicas)
Rủi ro: Master crash trước khi replicate → data loss
```

### 2.3 半同步

```
Client → Master: INSERT
Master → Replica 1: Sync (đợi 1 replica confirm)
Master → Client: "Success"
Master → Replica 2: Async (replicate sau)

→ Cân bằng giữa durability và performance
→ PostgreSQL: synchronous_commit = on (1 replica)
```

---

## 3.主從（主-副本）

### 3.1 架構

```
                    Writes
  Client ───────────────────► Master (Primary)
                                │
                      Replication│ Stream
                    ┌───────────┼───────────┐
                    ▼           ▼           ▼
                ┌───────┐  ┌───────┐  ┌───────┐
     Reads ────►│Slave 1│  │Slave 2│  │Slave 3│
                │(Read) │  │(Read) │  │(Read) │
                └───────┘  └───────┘  └───────┘
```

### 3.2 故障轉移過程

```
Normal:
  App ──write──► Master ──replicate──► Slave 1, 2, 3
  App ──read───► Slave 1, 2, 3

Master fails:
  1. Detect: Health check fails (timeout 30s)
  2. Elect: Chọn Slave có data mới nhất → Promote
  3. Reconfigure: Các Slaves khác trỏ về new Master
  4. Update: App connection string → new Master

  App ──write──► Slave 1 (now Master)
  App ──read───► Slave 2, 3

Timeline:
  T=0:    Master crash
  T=30s:  Detected (health check timeout)
  T=35s:  Slave 1 promoted
  T=40s:  Connections reconfigured
  → Downtime: ~40 giây
```

### 3.3 複製滯後

```
Vấn đề:
  T=0:   User update profile (write → Master)
  T=0.1: User refresh page (read → Slave)
  Slave chưa có data mới → User thấy data cũ!

  "Tôi vừa update avatar mà sao vẫn thấy avatar cũ?"
```

**解決方案：**

```
1. Read-after-write consistency:
   Sau khi write, read từ Master (trong vài giây)

2. Monotonic reads:
   User luôn đọc từ cùng 1 Slave

3. Causal consistency:
   Track version, đảm bảo read ≥ write version

4. Tăng tốc replication:
   Parallel replication, minimize network latency
```

---

## 4. Master-Master（多主）

### 4.1 架構

```
  Client A ──write──► Master 1 ◄──sync──► Master 2 ◄──write── Client B
                        │                    │
                   Read + Write         Read + Write
```

### 4.2 衝突解決

```
Vấn đề:
  T=0: Master 1: UPDATE user SET name='John'
  T=0: Master 2: UPDATE user SET name='Jane'
  → Conflict! Tên nào đúng?

Strategies:
  1. Last Write Wins (LWW):
     So sánh timestamp, write mới nhất thắng
     Đơn giản nhưng có thể mất data

  2. Application-level resolution:
     App quyết định merge strategy
     Phức tạp nhưng chính xác

  3. CRDT (Conflict-free Replicated Data Types):
     Data structure tự động merge
     Ví dụ: Counter → Tổng tất cả increments
```

### 4.3 裂腦問題

```
Vấn đề:
  Network partition giữa Master 1 và Master 2
  Cả 2 đều nhận writes → Data diverge

  Master 1: user.balance = 1000 - 500 = 500
  Master 2: user.balance = 1000 - 300 = 700
  
  Network recovered: balance = 500? 700? 200? 

Giải pháp:
  - Quorum-based writes (majority phải đồng ý)
  - Fencing tokens (chỉ 1 master active)
  - External coordination (Zookeeper, etcd)
```

---

## 5.PostgreSQL 串流複製

### 5.1 設定主控 (postgresql.conf)

```ini
# Master configuration
wal_level = replica
max_wal_senders = 5
wal_keep_size = 1GB
synchronous_standby_names = 'replica1'
```

### 5.2 設定副本

```bash
# Tạo base backup từ Master
pg_basebackup -h master-host -D /var/lib/postgresql/data \
  -U replication -Fp -Xs -P -R

# -R: Tạo standby.signal và postgresql.auto.conf tự động
```

### 5.3 監控複製

```sql
-- Trên Master: kiểm tra replicas
SELECT client_addr, state, sent_lsn, write_lsn,
       flush_lsn, replay_lsn,
       pg_wal_lsn_diff(sent_lsn, replay_lsn) AS lag_bytes
FROM pg_stat_replication;

-- Trên Replica: kiểm tra lag
SELECT now() - pg_last_xact_replay_timestamp() AS replication_lag;
```

---

## 6. 自動故障轉移工具

|工具|資料庫|描述 |
|--------|----------|--------|
| **帕特羅尼** | PostgreSQL |使用 etcd/ZooKeeper 進行 HA 叢集管理 |
| **PgBouncer** | PostgreSQL |連線池+故障轉移|
| **編曲家** | MySQL |拓樸管理+自動故障轉移|
| **內政部** | MySQL |掌握高可用性管理器 |
| **Redis 哨兵** | Redis | Redis 的自動故障轉移 |

---

## 總結

|拓撲 |寫入 |閱讀 |複雜性 |使用案例|
|----------|--------|--------|------------|----------|
|單打 | 1 台伺服器 | 1 台伺服器 |低|開發，小型應用程式 |
|主從|僅限大師|主人+奴隸|中等|閱讀量大的應用程式 |
|大師-大師|兩者 |兩者 |高|多區域、高寫入 |

---

## 練習

1. **複製設計：** 電商90%讀，10%寫，50K QPS。設計複製拓樸（有多少個主站，多少個從站？）。

2. **複製延遲：** 系統的複製延遲為 500 毫秒。用戶剛剛更改密碼並重新登入。如果登入查詢到達從站（還沒有新密碼），則使用者無法登入。解決方案設計。

3. **故障轉移計劃：** 為 PostgreSQL 主從叢集編寫故障轉移操作手冊。包括：檢測、決策、執行、驗證。
