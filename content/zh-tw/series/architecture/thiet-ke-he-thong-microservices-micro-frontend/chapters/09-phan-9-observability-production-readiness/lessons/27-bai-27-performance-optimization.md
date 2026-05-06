---
id: 019e4a33-d427-7b20-c001-b1c2d3e4f527
title: 第 27 課：效能最佳化－前端和後端
slug: bai-27-performance-optimization-frontend-backend
description: 前端：代码分割、延迟加载 MFE、共享依赖删除、CDN 缓存策略。后端：连接池、缓存层（Redis）、数据库查询优化、异步处理。績效預算執行。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 27
section_title: 第 9 部分：可觀察性與生產準備情況
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: 微服務與微前端系統設計－從基礎到生產
  slug: thiet-ke-he-thong-microservices-micro-frontend
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ 建築 — 第 27 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 27 課：效能最佳化 —</tspan>
      <tspan x="60" dy="42">前端和後端</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微服務與微前端系統設計－從基礎到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 9 部分：可觀察性與生產準備情況</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

微前端 + 微服務增加了開銷：許多網路呼叫、重複程式碼、多個捆綁包。本文優化了從瀏覽器到資料庫兩個層級的效能。

---

## 1. 前端效能

### 1.1 模組聯合優化

```
Vấn đề: 5 MFEs, mỗi MFE load remoteEntry.js + chunks

Giải pháp:
├── Shared dependencies: React loaded 1 lần (singleton)
├── Lazy loading: MFE load khi navigate đến route
├── Prefetch: Prefetch MFE khi user hover nav link
└── CDN caching: Cache remoteEntry.js (short TTL) + chunks (long TTL)
```

### 1.2 程式碼分割策略

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

### 1.3 CDN 緩存

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

### 1.4 績效預算

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

## 2. 後端效能

### 2.1 快取層

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

### 2.2 Redis 快取模式

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

### 2.3 連線池

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

### 2.4 資料庫查詢最佳化

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

## 3. 非同步處理

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

## 4. 效能監控儀表板

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

## 總結

|層 |優化|影響 |
|--------|-------------|--------|
| **前端** |延遲載入、共享依賴、CDN |更快的頁面載入 |
| **快取** | Redis、CDN、瀏覽器快取 |減少延遲 |
| **資料庫** |索引、連接池|更快的查詢 |
| **非同步** |繁重工作的訊息佇列|縮短回應時間 |
| **監控** |績效預算、警報 |防止降解|

---

**下一篇文章：** [第 28 課：生產準備清單 — 安全性、可靠性和合規性](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-28-production-readiness-checklist-security-reliability-compliance)
