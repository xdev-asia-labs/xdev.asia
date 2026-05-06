---
id: 019d8a21-c110-7001-d001-e1f2a3b4c524
title: 'レッスン 24: ケーススタディ - URL 短縮ツールの設計'
slug: bai-24-case-study-thiet-ke-url-shortener
description: >-
  システム設計インタビューの古典: URL Shortener (bit.ly)。要件の収集。推定 (QPS、ストレージ)。短い URL
  の生成戦略。データベースの設計。キャッシュ層。分析とリダイレクトのフロー。
duration_minutes: 140
is_free: true
video_url: null
sort_order: 24
section_title: 'パート 7: システム設計のケーススタディ'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5034" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5034)"/>

  <!-- Decorations -->
  <g>
    <circle cx="953" cy="149" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="806" cy="102" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="659" cy="55" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1012" cy="268" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="865" cy="221" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="119" x2="1100" y2="199" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="149" x2="1050" y2="219" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="998.444863728671,152 998.444863728671,186 969,203 939.555136271329,186 939.555136271329,152 969,135" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ アーキテクチャ — レッスン 24</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 24: ケーススタディ - URL 設計</tspan>
      <tspan x="60" dy="42">ショートナー</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: システム設計のケーススタディ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

URL 短縮は、面接で最も人気のあるシステム設計の質問です。シンプルではありますが、ハッシュ、データベース、キャッシュ、スケーリング、分析など、多くの概念をカバーしています。

---

## 1. 要件

### 1.1 機能

```
- Tạo short URL từ long URL
- Redirect short URL → long URL
- Custom alias (optional)
- Expiration time (optional)
- Analytics: click count, referrer, location
```

### 1.2 機能しない

```
- Read-heavy (100:1 read/write ratio)
- Low latency redirect (< 50ms)
- High availability (99.99%)
- Short URL không đoán được
```

### 1.3 推定

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

## 2. 短縮 URL の生成

### 2.1 戦略: Base62 エンコーディング

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

### 2.2 分散システムの ID 生成

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

## 3. アーキテクチャ

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

## 4. データベース設計

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

## 5. API 設計

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

## 6. リダイレクトフロー

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

## 7. スケーリングに関する考慮事項

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

## 概要

|コンポーネント |テクノロジー |目的 |
|----------|-----------|----------|
| API | Node.js/Go |ステートレス、高速 |
|データベース |ポストグレSQL | URL マッピング ACID |
|キャッシュ |レディス |ホット URL ルックアップ |
|分析 |カフカ + クリックハウス |クリック追跡 |
| ID の生成 |スノーフレーク |分散された固有 ID |

---

## 演習

1. 100 万 URL/秒 (100 倍スケール) をサポートする必要がある場合、アーキテクチャをどのように変更しますか?

2. カスタム エイリアス機能を設計します。検証、競合処理、プレミアム エイリアスの予約。

3. URL の有効期限の設計: 自動クリーンアップ、期限切れの URL リダイレクトの処理。
