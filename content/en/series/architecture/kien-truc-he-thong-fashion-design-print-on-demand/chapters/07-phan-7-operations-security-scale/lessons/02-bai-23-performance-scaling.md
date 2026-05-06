---
id: 019f0b20-a702-7001-e001-f2b8f9000702
title: 'Lesson 23: Performance & Scaling — CDN, Caching & Queue Architecture'
slug: bai-23-performance-scaling
description: >-
  Performance optimization — CDN for images/mockups, multi-layer caching, image
  processing, optimized queue architecture, database scaling, auto-scaling
  policies.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 23
section_title: 'Part 7: Operations, Security & Scale'
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: >-
    Fashion Design & Print-on-Demand System Architecture — From Domain Analysis
    to Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1555" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1555)"/>

  <!-- Decorations -->
  <g>
    <circle cx="673" cy="189" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="746" cy="242" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="819" cy="35" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="892" cy="88" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="965" cy="141" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="179" x2="1100" y2="259" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="209" x2="1050" y2="279" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1008.444863728671,162 1008.444863728671,196 979,213 949.555136271329,196 949.555136271329,162 979,145" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ Architecture — Lesson 23</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 23: Performance & Scaling — CDN,</tspan>
      <tspan x="60" dy="42">Caching & Queue Architecture</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Fashion Design & Print-on-Demand System Architecture — From Domain Analysis to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 7: Operations, Security & Scale</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-performance-hotspots"><strong>1. Performance Hotspots in POD</strong></h2>

<ul>
<li>Image-heavy traffic (mockups, previews, thumbnails)</li>
<li>Search/filter large catalog</li>
<li>Burst traffic by campaign/season</li>
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
<tr><th>Asset type</th><th>TTL</th><th>Cache keys</th></tr>
</thead>
<tbody>
<tr><td>Immutable mockups</td><td>30-90 days</td><td>hash-based URLs</td></tr>
<tr><td>PDP images</td><td>7 days</td><td>productId+variant+size</td></tr>
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
<li>Read replicas for product/search reads</li>
<li>Partitioning follows `shop_id` or `created_at` with big board</li>
<li>Connection pooling (PgBouncer)</li>
<li>Index strategy according to query patterns</li>
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

<h2 id="7-slo"><strong>7. Recommended SLO</strong></h2>

<ul>
<li>P95 PDP API latency < 250ms</li>
<li>P95 checkout API latency < 400ms</li>
<li>Image first byte (CDN) < 100ms</li>
<li>Queue lag (critical) < 30s</li>
</ul>

<h2 id="8-tong-ket"><strong>8. Summary</strong></h2>

<ul>
<li><p><strong>CDN + image optimization</strong> is the biggest performance lever for POD</p></li>
<li><p><strong>Queue priority</strong> Helps protect critical workflows during high loads</p></li>
<li><p><strong>DB scaling</strong> need to go with query/index discipline</p></li>
<li><p><strong>SLO-driven autoscaling</strong> Helps balance costs and service quality</p></li>
</ul>
