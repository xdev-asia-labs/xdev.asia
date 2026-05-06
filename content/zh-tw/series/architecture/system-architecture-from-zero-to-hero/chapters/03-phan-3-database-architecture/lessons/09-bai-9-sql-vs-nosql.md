---
id: 019d8a21-c109-7001-d001-e1f2a3b4c509
title: 第 9 課：SQL 與 NoSQL - 選出正確的資料庫
slug: bai-9-sql-vs-nosql-chon-database-phu-hop
description: >-
  RDBMS 和 ACID 屬性。 NoSQL
  類別：鍵值（Redis、DynamoDB）、文件（MongoDB、CouchDB）、寬列（Cassandra、HBase）、圖（Neo4j）。鹼與酸。什麼時候選擇SQL，什麼時候選擇NoSQL。多語言持久性。
  NewSQL（CockroachDB、TiDB）。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 9
section_title: 第 3 部分：資料庫架構與資料管理
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8269" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8269)"/>

  <!-- Decorations -->
  <g>
    <circle cx="666" cy="248" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="732" cy="234" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="798" cy="220" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="864" cy="206" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="192" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="168" x2="1100" y2="248" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="198" x2="1050" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1055.2390923627308,196.5 1055.2390923627308,239.5 1018,261 980.7609076372692,239.5 980.7609076372692,196.5 1018,175" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ 建築 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：SQL 與 NoSQL - 選出正確的資料庫</tspan>
      <tspan x="60" dy="42">適合的</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：資料庫架構與資料管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

資料庫是每個系統的核心。選擇錯誤的資料庫可能會導致整個系統的重新架構—昂貴且痛苦。本文可協助您了解每種類型的資料庫以及何時選擇哪種資料庫。

---

## 1. SQL（關聯式資料庫）

### 1.1 酸性質

|物業 |意義|範例|
|----------|--------|--------|
| **原子性** |交易要麼全有要麼全無|匯款：減去 A + 加 B 或什麼都沒有 |
| **一致性** |資料始終處於有效狀態|平衡永遠不會是負數|
| **隔離** |交易互不影響 | 2人一起買票→不衝突 |
| **耐用** |提交完成=資料安全|伺服器崩潰≠資料遺失|

### 1.2 什麼時候選擇SQL？

```
✓ Data có cấu trúc rõ ràng (schema cố định)
✓ Relationships phức tạp (foreign keys, joins)
✓ Cần ACID transactions
✓ Data integrity quan trọng
✓ Query patterns đa dạng (ad-hoc queries)

Ví dụ: Banking, ERP, E-commerce orders, CRM
```

### 1.3 熱門：PostgreSQL 與 MySQL

|特點| PostgreSQL | MySQL |
|--------|------------|--------|
| **酸** |完整|完整（InnoDB）|
| **JSON 支援** |優（JSONB）|好 |
| **全文搜尋** |內建|內建|
| **複製** |串流媒體，邏輯 |二進位日誌 |
| **擴展** | TimescaleDB、PostGIS |有限公司|
| **最適合** |複雜查詢，資料完整性 |網頁應用程序，閱讀量大 |

---

## 2. NoSQL 類別

### 2.1 鍵值存儲

```
SET user:123 → {"name": "John", "email": "john@example.com"}
GET user:123 → {"name": "John", "email": "john@example.com"}

Cực nhanh: O(1) read/write
Hạn chế: Không có query phức tạp, không có relationships
```

|資料庫|最適合 |
|----------|---------|
| **Redis** |快取、會話、排行榜、發布/訂閱 |
| **DynamoDB** |無伺服器、自動縮放鍵值 |
| **記憶體快取** |簡單的快取 |

### 2.2 文件存儲

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

|資料庫|最適合 |
|----------|---------|
| **MongoDB** |架構靈活，開發快速 |
| **CouchDB** |離線優先，同步 |
| **彈性搜尋** |全文搜尋、分析 |

### 2.3 寬列存儲

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

|資料庫|最適合 |
|----------|---------|
| **卡桑德拉** |高寫入吞吐量、多資料中心 |
| **HBase** | Hadoop 生態系、分析 |
| **ScyllaDB** |相容於Cassandra，效能更高 |

### 2.4 圖表資料庫

```
(John) ─[FRIENDS_WITH]─► (Jane)
(John) ─[WORKS_AT]────► (Google)
(Jane) ─[LIVES_IN]────► (Hanoi)
(John) ─[LIKES]───────► (Post_123)

Query: "Tìm bạn của bạn John sống ở Hà Nội"
→ Cực nhanh với Graph DB, cực chậm với SQL (multiple JOINs)
```

|資料庫|最適合 |
|----------|---------|
| **Neo4j** |社群網路、推薦、詐欺偵測 |
| **亞馬遜海王星** | AWS 託管圖 |
| **ArangoDB** |多模型（文檔+圖表）|

---

## 3. 酸與鹼

|物業 |酸性（SQL）|基礎（NoSQL）|
|----------|------------|-------------|
| **焦點** |一致性|可用性 |
| **交易** |強|軟狀態|
| **規模** |垂直為主 |水平|
| **一致性** |立即 |最終|
| **架構** |固定|靈活|

---

## 4. SQL 與 NoSQL 決策框架

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

### 4.1 決策矩陣

|要求| → 資料庫 |
|------------|------------|
|銀行、金融| PostgreSQL（ACID）|
|使用者會話、快取 | Redis(鍵值) |
|內容管理、CMS | MongoDB（文件）|
|社交圖譜、建議 | Neo4j（圖）|
|物聯網，時間序列 |卡桑德拉/TimescaleDB |
|全文檢索 |彈性搜尋 |
|電商目錄| MongoDB + Elasticsearch |
|分析、資料倉儲 | ClickHouse/BigQuery|

---

## 5. 多語言持久性

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

每個服務都會為其用例選擇最合適的資料庫。

---

## 6.NewSQL

NewSQL 結合了兩者的優點：ACID + 水平擴展。

|資料庫|描述 |
|----------|--------|
| **CockroachDB** |分散式 SQL，相容於 PostgreSQL |
| **TiDB** | MySQL 相容，HTAP |
| **Google扳手** |全球分佈式，強一致性 |
| **YugabyteDB** |相容 PostgreSQL，分散式 |

```
NewSQL = SQL Syntax + ACID Transactions + Horizontal Scaling

Trade-off: Latency cao hơn single-node SQL (distributed overhead)
```

---

## 總結

|資料庫類型|優勢 |使用案例 |
|--------------|----------|----------|
| **SQL** | ACID、關係、複雜查詢 |銀行、電子商務、ERP |
| **鍵值** |速度、簡單 |快取、會話 |
| **檔案** |架構靈活，快速開發| CMS、目錄 |
| **寬柱** |寫入吞吐量、規模 |物聯網，時間序列 |
| **圖表** |關係查詢 |社交、推薦 |
| **新SQL** |兩全其美 |分散式酸 |

---

## 練習

1. **資料庫選擇：** 對於醫療保健管理系統（醫院），選擇以下資料庫：(a) 病患記錄，(b) 體檢歷史，(c) 醫學影像，(d) 症狀搜索，(e) 醫病關係。

2. **多語言設計：** 為類似 Shopee 的平台設計資料架構。確定每個服務需要哪個資料庫以及原因。

3. **遷移：**系統目前全部使用MongoDB。訂單需要強一致性。計劃在不停機的情況下將訂單遷移到 PostgreSQL。
