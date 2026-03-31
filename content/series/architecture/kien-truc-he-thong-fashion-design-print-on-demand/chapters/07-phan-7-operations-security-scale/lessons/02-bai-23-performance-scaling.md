---
id: 019f0b20-a702-7001-e001-f2b8f9000702
title: 'Bài 23: Performance & Scaling — CDN, Caching & Queue Architecture'
slug: bai-23-performance-scaling
description: >-
  Performance optimization — CDN cho images/mockups, multi-layer caching,
  image processing optimization, queue architecture, database scaling,
  auto-scaling policies.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 23
section_title: "Phần 7: Operations, Security & Scale"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
---

<h2 id="1-performance-hotspots"><strong>1. Performance Hotspots trong POD</strong></h2>

<ul>
<li>Image-heavy traffic (mockups, previews, thumbnails)</li>
<li>Search/filter catalog lớn</li>
<li>Burst traffic theo campaign/season</li>
<li>Background jobs: rendering, AI, sync channel</li>
</ul>

<h2 id="2-cdn-strategy"><strong>2. CDN Strategy</strong></h2>

<pre><code class="language-text">Origin (S3/Object Storage)
    -> CDN Edge Cache
       -> Image transformation layer (WebP/AVIF, resize)
          -> Browser cache
</code></pre>

<table>
<thead>
<tr><th>Asset type</th><th>TTL</th><th>Cache key</th></tr>
</thead>
<tbody>
<tr><td>Mockup immutable</td><td>30-90 ngày</td><td>hash-based URL</td></tr>
<tr><td>PDP images</td><td>7 ngày</td><td>productId+variant+size</td></tr>
<tr><td>Editor assets</td><td>1-24h</td><td>user scope</td></tr>
</tbody>
</table>

<h2 id="3-multi-layer-cache"><strong>3. Multi-layer Caching</strong></h2>

<pre><code class="language-text">L1: CDN edge
L2: API cache (Redis)
L3: Application in-memory cache
L4: DB query cache/materialized views
</code></pre>

<pre><code class="language-typescript">class ProductReadCache {
  async get(productId: string) {
    const key = `pdp:${productId}`;
    const cached = await redis.get(key);
    if (cached) return JSON.parse(cached);

    const value = await this.repo.getPdpView(productId);
    await redis.set(key, JSON.stringify(value), 'EX', 300);
    return value;
  }
}
</code></pre>

<h2 id="4-queue-architecture"><strong>4. Queue Architecture</strong></h2>

<pre><code class="language-text">Queues
  - q.realtime.preview (high priority)
  - q.print.production (high priority)
  - q.mockup.batch (medium)
  - q.channel.sync (medium)
  - q.analytics.enrichment (low)

Use dead-letter queues per domain.
</code></pre>

<pre><code class="language-typescript">interface QueuePolicy {
  maxRetry: number;
  backoffMs: number[];
  timeoutMs: number;
  concurrency: number;
}
</code></pre>

<h2 id="5-database-scaling"><strong>5. Database Scaling</strong></h2>

<ul>
<li>Read replicas cho product/search reads</li>
<li>Partitioning theo `shop_id` hoặc `created_at` với bảng lớn</li>
<li>Connection pooling (PgBouncer)</li>
<li>Index strategy theo query patterns</li>
</ul>

<h2 id="6-auto-scaling"><strong>6. Auto-scaling Policies</strong></h2>

<table>
<thead>
<tr><th>Workload</th><th>Scale trigger</th><th>Range</th></tr>
</thead>
<tbody>
<tr><td>API pods</td><td>CPU + P95 latency</td><td>4-60</td></tr>
<tr><td>Queue workers</td><td>Queue depth + lag</td><td>2-200</td></tr>
<tr><td>GPU inference</td><td>Requests/sec + VRAM</td><td>1-20</td></tr>
</tbody>
</table>

<h2 id="7-slo"><strong>7. SLO đề xuất</strong></h2>

<ul>
<li>P95 PDP API latency &lt; 250ms</li>
<li>P95 checkout API latency &lt; 400ms</li>
<li>Image first byte (CDN) &lt; 100ms</li>
<li>Queue lag (critical) &lt; 30s</li>
</ul>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<ul>
<li><p><strong>CDN + image optimization</strong> là đòn bẩy hiệu năng lớn nhất cho POD</p></li>
<li><p><strong>Queue priority</strong> giúp bảo vệ workflow quan trọng khi tải cao</p></li>
<li><p><strong>DB scaling</strong> cần đi cùng query/index discipline</p></li>
<li><p><strong>SLO-driven autoscaling</strong> giúp cân bằng chi phí và chất lượng dịch vụ</p></li>
</ul>
