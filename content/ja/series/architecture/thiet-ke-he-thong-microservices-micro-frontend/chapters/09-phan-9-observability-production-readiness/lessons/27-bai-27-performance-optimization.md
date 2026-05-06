---
id: 019e4a33-d427-7b20-c001-b1c2d3e4f527
title: 'レッスン 27: パフォーマンスの最適化 — フロントエンドとバックエンド'
slug: bai-27-performance-optimization-frontend-backend
description: >-
  フロントエンド: コード分割、遅延読み込み MFE、共有依存関係の重複排除、CDN キャッシュ戦略。バックエンド: 接続プーリング、キャッシュ層
  (Redis)、データベース クエリの最適化、非同期処理。パフォーマンス予算の執行。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 27
section_title: 'パート 9: 可観測性と実稼働の準備状況'
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: マイクロサービスとマイクロ フロントエンドのシステム設計 — 基本から運用まで
  slug: thiet-ke-he-thong-microservices-micro-frontend
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1036" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1036)"/>

  <!-- Decorations -->
  <g>
    <circle cx="939" cy="227" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="778" cy="206" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="617" cy="185" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="956" cy="164" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="795" cy="143" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="97" x2="1100" y2="177" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="127" x2="1050" y2="197" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1024.712812921102,181 1024.712812921102,213 997,229 969.287187078898,213 969.287187078898,181 997,165" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ 建築 — レッスン 27</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 27: パフォーマンスの最適化 —</tspan>
      <tspan x="60" dy="42">フロントエンドとバックエンド</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">マイクロサービスとマイクロ フロントエンドのシステム設計 — 基本から運用まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 9: 可観測性と実稼働の準備状況</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

マイクロ フロントエンド + マイクロサービスにより、多くのネットワーク呼び出し、重複コード、複数のバンドルなどのオーバーヘッドが追加されます。この記事では、ブラウザからデータベースまでの両方のレベルでパフォーマンスを最適化します。

---

## 1. フロントエンドのパフォーマンス

### 1.1 モジュールフェデレーションの最適化

```
Vấn đề: 5 MFEs, mỗi MFE load remoteEntry.js + chunks

Giải pháp:
├── Shared dependencies: React loaded 1 lần (singleton)
├── Lazy loading: MFE load khi navigate đến route
├── Prefetch: Prefetch MFE khi user hover nav link
└── CDN caching: Cache remoteEntry.js (short TTL) + chunks (long TTL)
```

### 1.2 コード分割戦略

```javascript
// Per-route code splitting
const ProductList = React.lazy(() => import('product/ProductList'));
const ProductDetail = React.lazy(() => import('product/ProductDetail'));

// Load riêng, chỉ khi cần
<Route path="/products" element={
  <Suspense fallback={<ProductListSkeleton />}>
    <ProductList />
  </Suspense>
} />
```

### 1.3 CDN キャッシング

```
Cache Strategy:
├── remoteEntry.js: Cache 5 min (changes on deploy)
├── Chunk files (hashed): Cache 1 year (immutable)
├── CSS files (hashed): Cache 1 year
├── Images: Cache 1 month
└── API responses: Vary by user (no CDN cache)
```

```
Cache-Control headers:
remoteEntry.js: public, max-age=300, must-revalidate
chunk-abc123.js: public, max-age=31536000, immutable
```

### 1.4 パフォーマンスの予算

```
Per MFE:
├── JS Bundle: max 200KB gzipped
├── CSS: max 30KB gzipped
├── LCP: < 2.5s
├── FID: < 100ms
├── CLS: < 0.1
└── Total Load Time: < 3s (on 3G)
```

---

## 2. バックエンドのパフォーマンス

### 2.1 キャッシュ層

```
Request Flow with Caching:

Browser Cache ← CDN Cache ← API Gateway Cache ← BFF Cache ← Service Cache ← DB
     (1)          (2)           (3)               (4)          (5)

Layer 1: Browser - HTTP cache headers
Layer 2: CDN - Static assets + API GET responses
Layer 3: Gateway - Rate limiting cache
Layer 4: BFF - Aggregated response cache (Redis)
Layer 5: Service - Entity cache (Redis)
```

### 2.2 Redis キャッシュ パターン

```javascript
// Cache-Aside Pattern
async function getProduct(id) {
  // 1. Check cache
  const cached = await redis.get(`product:${id}`);
  if (cached) return JSON.parse(cached);
  
  // 2. Cache miss → query DB
  const product = await db.query('SELECT * FROM products WHERE id = $1', [id]);
  
  // 3. Set cache (TTL 5 min)
  await redis.set(`product:${id}`, JSON.stringify(product), 'EX', 300);
  
  return product;
}

// Cache Invalidation on Update
async function updateProduct(id, data) {
  await db.query('UPDATE products SET ...', [data, id]);
  await redis.del(`product:${id}`);  // Invalidate
  await redis.del('products:list');    // Invalidate list cache
}
```

### 2.3 接続プーリング

```javascript
// PostgreSQL connection pool
const pool = new Pool({
  max: 20,               // Max connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Reuse connections, don't create per request
app.get('/api/products', async (req, res) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT * FROM products LIMIT 20');
    res.json(rows);
  } finally {
    client.release(); // Return to pool
  }
});
```

### 2.4 データベースクエリの最適化

```sql
-- Compound index cho frequently queried patterns
CREATE INDEX idx_products_category_price ON products(category_id, price);

-- Partial index cho active products only
CREATE INDEX idx_products_active ON products(id) WHERE is_active = true;

-- Cover index (avoid table lookup)
CREATE INDEX idx_orders_user_status ON orders(user_id, status) 
  INCLUDE (total, created_at);
```

---

## 3. 非同期処理

```
Move heavy work off critical path:

Synchronous (user waits):
├── Validate order
├── Reserve payment
└── Return order ID

Asynchronous (background):
├── Send confirmation email → Message Queue
├── Generate invoice PDF → Message Queue
├── Update analytics → Event Stream
├── Resize product images → Message Queue
└── Send push notification → Message Queue
```

---

## 4. パフォーマンス監視ダッシュボード

```
Grafana Dashboard:
┌─────────────────────────────────────┐
│ Frontend Metrics                    │
│ LCP: 1.8s │ FID: 45ms │ CLS: 0.05 │
├─────────────────────────────────────┤
│ Backend Metrics                     │
│ p50: 50ms │ p95: 200ms │ p99: 500ms│
├─────────────────────────────────────┤
│ Cache Hit Rate                      │
│ Redis: 92% │ CDN: 85% │ Browser: 70%│
├─────────────────────────────────────┤
│ Error Rate                          │
│ 5xx: 0.1% │ 4xx: 2.3% │ Timeout:0%│
└─────────────────────────────────────┘
```

---

## 概要

|レイヤー |最適化 |影響 |
|----------|---------------|----------|
| **フロントエンド** |遅延読み込み、共有 Deps、CDN |ページの読み込みが高速化 |
| **キャッシング** | Redis、CDN、ブラウザキャッシュ |待ち時間の短縮 |
| **データベース** |インデックス、接続プール |クエリの高速化 |
| **非同期** |負荷の高い作業のためのメッセージ キュー |応答時間の短縮 |
| **モニタリング** |パフォーマンス バジェット、アラート |劣化を防ぐ |

---

**次の記事:** [レッスン 28: 本番準備チェックリスト — セキ​​ュリティ、信頼性、コンプライアンス](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-28-production-readiness-checklist-security-reliability-compliance)
