---
id: 019d8a21-c110-7001-d001-e1f2a3b4c510
title: 'レッスン 10: データベース レプリケーション - マスター/スレーブおよびマスター/マスター'
slug: bai-10-database-replication-master-slave-master-master
description: >-
  レプリケーションとは何ですか?なぜレプリケーションが必要なのでしょうか?同期レプリケーションと非同期レプリケーション。マスター/スレーブ:
  リードレプリカ、フェイルオーバー、プロモーション。マスター-マスター: 競合解決、スプリットブレイン。レプリケーション ラグとその対処方法。
  PostgreSQL ストリーミング レプリケーションの実践。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 'パート 3: データベース アーキテクチャとデータ管理'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ アーキテクチャ — レッスン 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 10: データベースのレプリケーション -</tspan>
      <tspan x="60" dy="42">マスター-スレーブ & マスター-マスター</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: データベース アーキテクチャとデータ管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

単一のデータベース サーバーは **単一障害点** となります。クラッシュするとシステム全体がクラッシュします。データベース レプリケーションは、データを複数のサーバーにコピーすることでこの問題を解決します。

---

## 1. なぜレプリケーションが必要なのでしょうか?

|目標 |レプリケーションがどのように役立つのか |
|----------|----------|
| **高可用性** |マスターが失敗する → スレーブが引き継ぐ |
| **読み取りスケーリング** |読み取りを複数のレプリカに分散する |
| **データの局所性** |ユーザーの近くのレプリカ (待ち時間を短縮) |
| **バックアップ** | 「ホットバックアップ」としてのレプリカ |
| **分析** |レプリカで大量のクエリを実行し、運用環境に影響を与えません |

---

## 2. 同期レプリケーションと非同期レプリケーション

### 2.1 同期

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

### 2.2 非同期

```
Client → Master: INSERT INTO orders (...)
Master → Client: "INSERT success"  ← Return ngay!
Master → Replica 1: "Replicate this" (async)
Master → Replica 2: "Replicate this" (async)

Ưu điểm: Nhanh (không đợi replicas)
Rủi ro: Master crash trước khi replicate → data loss
```

### 2.3 準同期

```
Client → Master: INSERT
Master → Replica 1: Sync (đợi 1 replica confirm)
Master → Client: "Success"
Master → Replica 2: Async (replicate sau)

→ Cân bằng giữa durability và performance
→ PostgreSQL: synchronous_commit = on (1 replica)
```

---

## 3. マスター - スレーブ (プライマリ - レプリカ)

### 3.1 アーキテクチャ

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

### 3.2 フェイルオーバープロセス

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

### 3.3 レプリケーションの遅延

```
Vấn đề:
  T=0:   User update profile (write → Master)
  T=0.1: User refresh page (read → Slave)
  Slave chưa có data mới → User thấy data cũ!

  "Tôi vừa update avatar mà sao vẫn thấy avatar cũ?"
```

**解決策:**

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

## 4. マスター-マスター (マルチプライマリ)

### 4.1 アーキテクチャ

```
  Client A ──write──► Master 1 ◄──sync──► Master 2 ◄──write── Client B
                        │                    │
                   Read + Write         Read + Write
```

### 4.2 競合の解決

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

### 4.3 スプリットブレイン問題

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

## 5. PostgreSQL ストリーミング レプリケーション

### 5.1 セットアップマスター(postgresql.conf)

```ini
# Master configuration
wal_level = replica
max_wal_senders = 5
wal_keep_size = 1GB
synchronous_standby_names = 'replica1'
```

### 5.2 レプリカのセットアップ

```bash
# Tạo base backup từ Master
pg_basebackup -h master-host -D /var/lib/postgresql/data \
  -U replication -Fp -Xs -P -R

# -R: Tạo standby.signal và postgresql.auto.conf tự động
```

### 5.3 レプリケーションの監視

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

## 6. 自動フェイルオーバーツール

|ツール |データベース |説明 |
|------|----------|------|
| **パトローニ** |ポストグレSQL | etcd/ZooKeeper による HA クラスター管理 |
| **PgBouncer** |ポストグレSQL |接続プーラー + フェイルオーバー |
| **オーケストレーター** | MySQL |トポロジー管理 + 自動フェイルオーバー |
| **MHA** | MySQL |マスター高可用性マネージャー |
| **レディ センチネル** |レディス | Redis の自動フェイルオーバー |

---

## 概要

|トポロジ |書き込み |読み取り |複雑さ |使用例 |
|----------|----------|----------|----------|----------|
|シングル | 1サーバー | 1サーバー |低い |開発、小規模アプリ |
|マスタースレーブ |マスターのみ |マスター+スレーブ |中 |読み取り負荷の高いアプリ |
|マスターマスター |両方 |両方 |高 |マルチリージョン、高書き込み |

---

## 演習

1. **レプリケーション設計:** 電子商取引は 90% 読み取り、10% 書き込み、50K QPS です。レプリケーション トポロジを設計します (マスターとスレーブの数はいくつですか?)。

2. **レプリケーション ラグ:** システムには 500 ミリ秒のレプリケーション ラグがあります。ユーザーはパスワードを変更して再度ログインしました。ログイン クエリがスレーブに届いた場合 (新しいパスワードがまだない場合)、ユーザーはログインできません。ソリューション設計。

3. **フェールオーバー計画:** PostgreSQL マスター/スレーブ クラスターのフェールオーバー Ru​​nbook を作成します。検出、決定、実行、検証が含まれます。
