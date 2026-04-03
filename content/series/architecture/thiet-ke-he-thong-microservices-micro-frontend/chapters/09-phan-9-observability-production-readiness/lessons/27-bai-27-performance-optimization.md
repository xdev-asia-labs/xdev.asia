---
id: 019e4a33-d427-7b20-c001-b1c2d3e4f527
title: "Bài 27: Performance Optimization — Frontend & Backend"
slug: bai-27-performance-optimization-frontend-backend
description: >-
  Frontend: Code splitting, lazy loading MFE, shared dependency dedup, CDN caching strategies. Backend: Connection pooling, caching layers (Redis), database query optimization, async processing. Performance budget enforcement.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 27
section_title: "Phần 9: Observability & Production Readiness"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Micro Frontend + Microservices thêm overhead: nhiều network calls, duplicate code, multiple bundles. Bài này tối ưu performance ở cả hai tầng — từ browser đến database.

---

## 1. Frontend Performance

### 1.1 Module Federation Optimization

```
Vấn đề: 5 MFEs, mỗi MFE load remoteEntry.js + chunks

Giải pháp:
├── Shared dependencies: React loaded 1 lần (singleton)
├── Lazy loading: MFE load khi navigate đến route
├── Prefetch: Prefetch MFE khi user hover nav link
└── CDN caching: Cache remoteEntry.js (short TTL) + chunks (long TTL)
```

### 1.2 Code Splitting Strategy

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

### 1.3 CDN Caching

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

### 1.4 Performance Budget

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

## 2. Backend Performance

### 2.1 Caching Layers

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

### 2.2 Redis Caching Patterns

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

### 2.3 Connection Pooling

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

### 2.4 Database Query Optimization

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

## 3. Async Processing

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

## 4. Performance Monitoring Dashboard

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

## Tóm tắt

| Layer | Optimization | Impact |
|-------|-------------|--------|
| **Frontend** | Lazy loading, shared deps, CDN | Faster page load |
| **Caching** | Redis, CDN, browser cache | Reduced latency |
| **Database** | Indexes, connection pool | Faster queries |
| **Async** | Message queues for heavy work | Lower response time |
| **Monitoring** | Performance budgets, alerts | Prevent degradation |

---

**Bài tiếp theo:** [Bài 28: Production Readiness Checklist — Security, Reliability & Compliance](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-28-production-readiness-checklist-security-reliability-compliance)
