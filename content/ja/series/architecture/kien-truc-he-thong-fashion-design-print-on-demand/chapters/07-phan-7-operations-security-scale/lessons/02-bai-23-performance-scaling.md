---
id: 019f0b20-a702-7001-e001-f2b8f9000702
title: 'レッスン 23: パフォーマンスとスケーリング — CDN、キャッシュ、キュー アーキテクチャ'
slug: bai-23-performance-scaling
description: >-
  パフォーマンスの最適化 — 画像/モックアップの CDN、多層キャッシュ、画像処理、最適化されたキュー アーキテクチャ、データベース
  スケーリング、自動スケーリング ポリシー。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 23
section_title: 'パート 7: 運用、セキュリティ、スケール'
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: ファッション デザインとプリント オン デマンド システム アーキテクチャ — ドメイン分析から生産まで
  slug: kien-truc-he-thong-fashion-design-print-on-demand
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ アーキテクチャ — レッスン 23</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 23: パフォーマンスとスケーリング — CDN、</tspan>
      <tspan x="60" dy="42">キャッシュとキューのアーキテクチャ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">ファッション デザインとプリント オン デマンド システム アーキテクチャ — ドメイン分析から生産まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: 運用、セキュリティ、スケール</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-performance-hotspots"><strong>1. POD のパフォーマンス ホットスポット</strong></h2>

<ul>
<li>画像を大量に使用するトラフィック (モックアップ、プレビュー、サムネイル)</li>
<li>大規模なカタログの検索/フィルタリング</li>
<li>キャンペーン/シーズン別のバーストトラフィック</li>
<li>バックグラウンドジョブ: レンダリング、AI、同期チャンネル</li>
</ul>

<h2 id="2-cdn-strategy"><strong>2. CDN戦略</strong></h2>

<pre><code class="language-text">Origin (S3/Object Storage)
    -> CDN Edge Cache
       -> Image transformation layer (WebP/AVIF, resize)
          -> Browser cache
</code></pre>

<table>
<thead>
<tr><th>資産の種類</th><th>TTL</th><th>キャッシュキー</th></tr>
</thead>
<tbody>
<tr><td>不変のモックアップ</td><td>30～90日</td><td>ハッシュベースの URL</td></tr>
<tr><td>PDP画像</td><td>7日間</td><td>製品ID+バリアント+サイズ</td></tr>
<tr><td>エディターアセット</td><td>1～24時間</td><td>ユーザースコープ</td></tr>
</tbody>
</table>

<h2 id="3-multi-layer-cache"><strong>3. 多層キャッシュ</strong></h2>

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

<h2 id="4-queue-architecture"><strong>4. キューのアーキテクチャ</strong></h2>

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

<h2 id="5-database-scaling"><strong>5. データベースのスケーリング</strong></h2>

<ul>
<li>製品/検索読み取り用のリードレプリカ</li>
<li>パーティショニングは次のとおりです `shop_id` または `created_at` 大きなボードで</li>
<li>接続プーリング (PgBouncer)</li>
<li>クエリパターンに応じたインデックス戦略</li>
</ul>

<h2 id="6-auto-scaling"><strong>6. 自動スケーリングポリシー</strong></h2>

<table>
<thead>
<tr><th>ワークロード</th><th>スケールトリガー</th><th>範囲</th></tr>
</thead>
<tbody>
<tr><td>API ポッド</td><td>CPU + P95 レイテンシー</td><td>4-60</td></tr>
<tr><td>キューワーカー</td><td>キューの深さ + ラグ</td><td>2-200</td></tr>
<tr><td>GPU推論</td><td>リクエスト/秒 + VRAM</td><td>1-20</td></tr>
</tbody>
</table>

<h2 id="7-slo"><strong>7. 推奨される SLO</strong></h2>

<ul>
<li>P95 PDP API レイテンシー < 250ms</li>
<li>P95 チェックアウト API レイテンシ < 400ms</li>
<li>画像の最初のバイト (CDN) < 100ms</li>
<li>キューラグ (重大) < 30 秒</li>
</ul>

<h2 id="8-tong-ket"><strong>8. まとめ</strong></h2>

<ul>
<li><p><strong>CDN + 画像の最適化</strong> POD の最大のパフォーマンスレバーです</p></li>
<li><p><strong>キューの優先順位</strong> 高負荷時の重要なワークフローの保護に役立ちます</p></li>
<li><p><strong>DBスケーリング</strong> クエリ/インデックスの規律に従う必要がある</p></li>
<li><p><strong>SLO 主導の自動スケーリング</strong> コストとサービス品質のバランスをとるのに役立ちます</p></li>
</ul>
