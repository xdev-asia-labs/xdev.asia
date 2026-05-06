---
id: 019f0b20-a702-7001-e001-f2b8f9000702
title: 第 23 課：效能與擴充 — CDN、快取與佇列架構
slug: bai-23-performance-scaling
description: 效能最佳化－影像/模型的 CDN、多層快取、影像處理、最佳化的佇列架構、資料庫擴充、自動擴充策略。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 23
section_title: 第 7 部分：營運、安全性和規模
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: 時裝設計與按需印刷系統架構－從領域分析到生產
  slug: kien-truc-he-thong-fashion-design-print-on-demand
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ 建築 — 第 23 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 23 課：效能與擴充 — CDN、</tspan>
      <tspan x="60" dy="42">快取和佇列架構</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">時裝設計與按需印刷系統架構－從領域分析到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 7 部分：營運、安全性和規模</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-performance-hotspots"><strong>1. POD 中的性能熱點</strong></h2>

<ul>
<li>圖片流量大（模型、預覽、縮圖）</li>
<li>搜尋/過濾大目錄</li>
<li>按活動/季節爆發流量</li>
<li>後台作業：渲染、AI、同步頻道</li>
</ul>

<h2 id="2-cdn-strategy"><strong>2.CDN策略</strong></h2>

<pre><code class="language-text">Origin (S3/Object Storage)
    -> CDN Edge Cache
       -> Image transformation layer (WebP/AVIF, resize)
          -> Browser cache
</code></pre>

<table>
<thead>
<tr><th>資產類型</th><th>TTL</th><th>快取鍵</th></tr>
</thead>
<tbody>
<tr><td>不可變的模型</td><td>30-90天</td><td>基於哈希的 URL</td></tr>
<tr><td>電漿影像</td><td>7天</td><td>產品 ID+型號+尺寸</td></tr>
<tr><td>編輯器資產</td><td>1-24小時</td><td>使用者範圍</td></tr>
</tbody>
</table>

<h2 id="3-multi-layer-cache"><strong>3.多層緩存</strong></h2>

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

<h2 id="4-queue-architecture"><strong>4. 隊列架構</strong></h2>

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

<h2 id="5-database-scaling"><strong>5. 資料庫擴展</strong></h2>

<ul>
<li>產品/搜尋讀取的讀取副本</li>
<li>分區如下 `shop_id` 或 `created_at` 帶大板</li>
<li>連接池（PgBouncer）</li>
<li>根據查詢模式的索引策略</li>
</ul>

<h2 id="6-auto-scaling"><strong>6. 自動伸縮策略</strong></h2>

<table>
<thead>
<tr><th>工作量</th><th>秤觸發</th><th>範圍</th></tr>
</thead>
<tbody>
<tr><td>API 容器</td><td>CPU+P95延遲</td><td>4-60</td></tr>
<tr><td>隊列工人</td><td>隊列深度+滯後</td><td>2-200</td></tr>
<tr><td>GPU推理</td><td>請求數/秒 + VRAM</td><td>1-20</td></tr>
</tbody>
</table>

<h2 id="7-slo"><strong>7. 推薦的 SLO</strong></h2>

<ul>
<li>P95 PDP API 延遲 < 250ms</li>
<li>P95 結帳 API 延遲 < 400 毫秒</li>
<li>影像首字節 (CDN) < 100ms</li>
<li>佇列延遲（嚴重）< 30 秒</li>
</ul>

<h2 id="8-tong-ket"><strong>八、總結</strong></h2>

<ul>
<li><p><strong>CDN+圖片優化</strong> 是 POD 最大的性能槓桿</p></li>
<li><p><strong>佇列優先權</strong> 有助於在高負載期間保護關鍵工作流程</p></li>
<li><p><strong>資料庫擴充</strong> 需要遵守查詢/索引規則</p></li>
<li><p><strong>SLO 驅動的自動縮放</strong> 有助於平衡成本和服務質量</p></li>
</ul>
