---
id: 019f0b20-a103-7001-e001-f2b8f9000103
title: 'レッスン 3: システム アーキテクチャの概要 — マイクロサービス、イベント駆動型、DDD'
slug: bai-3-system-architecture-overview
description: >-
  高レベルのシステム アーキテクチャ、限定されたコンテキスト
  (設計、カタログ、注文、製造、フルフィルメント、分析)、イベント駆動型アーキテクチャ、CQRS、テクノロジー スタックの選択、C4 図。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 1: ドメイン ファッション デザインと POD の概要'
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: ファッション デザインとプリント オン デマンド システム アーキテクチャ — ドメイン分析から生産まで
  slug: kien-truc-he-thong-fashion-design-print-on-demand
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6697" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6697)"/>

  <!-- Decorations -->
  <g>
    <circle cx="862" cy="276" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="624" cy="98" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="886" cy="180" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="648" cy="262" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="910" cy="84" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="76" x2="1100" y2="156" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="106" x2="1050" y2="176" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1002.8467875173176,160.5 1002.8467875173176,191.5 976,207 949.1532124826824,191.5 949.1532124826824,160.5 976,145" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ アーキテクチャ — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: システム アーキテクチャの概要 —</tspan>
      <tspan x="60" dy="42">マイクロサービス、イベント駆動型、DDD</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">ファッション デザインとプリント オン デマンド システム アーキテクチャ — ドメイン分析から生産まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: ドメイン ファッション デザインと POD の概要</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-ddd-bounded-contexts"><strong>1. DDD 境界コンテキスト</strong></h2>

<p>申し込む <strong>ドメイン駆動設計</strong> POD システムを明確に境界付けられたコンテキストに分割します。</p>

<pre><code class="language-text">┌──────────────────────────────────────────────────────────────────────────┐
│                    Fashion POD Platform                                  │
│                                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                   │
│  │   Design     │  │   Catalog    │  │   Commerce   │                   │
│  │   Context    │  │   Context    │  │   Context    │                   │
│  │              │  │              │  │              │                   │
│  │ • Canvas     │  │ • Product    │  │ • Cart       │                   │
│  │ • AI Gen     │  │ • SKU       │  │ • Checkout   │                   │
│  │ • Assets     │  │ • Mockup    │  │ • Payment    │                   │
│  │ • Templates  │  │ • Channel   │  │ • Pricing    │                   │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘                   │
│         │                 │                 │                            │
│         ▼                 ▼                 ▼                            │
│  ┌────────────────────────────────────────────────┐                     │
│  │              Event Bus (Kafka)                  │                     │
│  └────────────────────────────────────────────────┘                     │
│         │                 │                 │                            │
│         ▼                 ▼                 ▼                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                   │
│  │   Order      │  │  Production  │  │  Fulfillment │                   │
│  │   Context    │  │   Context    │  │   Context    │                   │
│  │              │  │              │  │              │                   │
│  │ • OMS       │  │ • Print Queue│  │ • Shipping   │                   │
│  │ • Saga      │  │ • Supplier   │  │ • Tracking   │                   │
│  │ • Split     │  │ • QC        │  │ • Returns    │                   │
│  │ • Timeline  │  │ • Routing   │  │ • Logistics  │                   │
│  └──────────────┘  └──────────────┘  └──────────────┘                   │
│                                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                   │
│  │  Identity &  │  │   Analytics  │  │   AI/ML      │                   │
│  │  Access      │  │   Context    │  │   Platform   │                   │
│  │              │  │              │  │              │                   │
│  │ • Auth      │  │ • Warehouse  │  │ • Feature    │                   │
│  │ • RBAC      │  │ • Dashboard  │  │   Store      │                   │
│  │ • Teams     │  │ • Reports   │  │ • Training   │                   │
│  │ • API Keys  │  │ • BI        │  │ • Serving    │                   │
│  └──────────────┘  └──────────────┘  └──────────────┘                   │
└──────────────────────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-context-map"><strong>2. コンテキスト マップ — 関係</strong></h2>

<table>
<thead>
<tr><th>上流</th><th>下流</th><th>関係性</th><th>統合</th></tr>
</thead>
<tbody>
<tr><td>デザイン</td><td>カタログ</td><td>顧客とサプライヤー</td><td>デザインアセット → 製品画像</td></tr>
<tr><td>カタログ</td><td>商業</td><td>出版言語</td><td>製品データ → ストアフロント</td></tr>
<tr><td>商業</td><td>注文</td><td>顧客とサプライヤー</td><td>チェックアウト → 注文が作成されました</td></tr>
<tr><td>注文</td><td>生産</td><td>顧客とサプライヤー</td><td>注文 → 印刷ジョブ</td></tr>
<tr><td>生産</td><td>充実</td><td>顧客とサプライヤー</td><td>印刷→出荷</td></tr>
<tr><td>すべてのコンテキスト</td><td>分析</td><td>適合者</td><td>イベント → データウェアハウス</td></tr>
<tr><td>AI/ML</td><td>デザイン、カタログ、制作</td><td>オープンホストサービス</td><td>ML推論API</td></tr>
<tr><td>チャンネル (Shopify/Etsy)</td><td>カタログ、注文</td><td>腐敗防止層</td><td>外部API → 内部モデル</td></tr>
</tbody>
</table>

<h2 id="3-event-driven"><strong>3. イベント駆動型アーキテクチャ</strong></h2>

<h3 id="domain-events"><strong>コアドメインイベント</strong></h3>

<pre><code class="language-typescript">// Design Context Events
interface DesignCreatedEvent {
  type: 'design.created';
  designId: string;
  designerId: string;
  imageUrl: string;
  metadata: { width: number; height: number; dpi: number };
  timestamp: string;
}

interface DesignApprovedEvent {
  type: 'design.approved';
  designId: string;
  qcScore: number;
  ipCheckResult: 'clean' | 'flagged';
}

// Catalog Context Events
interface ProductPublishedEvent {
  type: 'product.published';
  productId: string;
  designId: string;
  channels: string[];  // ['shopify', 'etsy', 'amazon']
  variants: Array<{ sku: string; size: string; color: string; price: number }>;
}

// Order Context Events
interface OrderCreatedEvent {
  type: 'order.created';
  orderId: string;
  customerId: string;
  items: Array<{ sku: string; quantity: number; designId: string }>;
  shippingAddress: Address;
  totalAmount: number;
}

interface OrderSplitEvent {
  type: 'order.split';
  orderId: string;
  subOrders: Array<{
    subOrderId: string;
    supplierId: string;
    items: Array<{ sku: string; quantity: number }>;
  }>;
}

// Production Context Events
interface PrintJobCompletedEvent {
  type: 'print_job.completed';
  subOrderId: string;
  supplierId: string;
  qcResult: 'pass' | 'fail';
  completedAt: string;
}

// Fulfillment Context Events
interface ShipmentCreatedEvent {
  type: 'shipment.created';
  shipmentId: string;
  orderId: string;
  carrier: string;
  trackingNumber: string;
  estimatedDelivery: string;
}
</code></pre>

<h3 id="event-flow"><strong>イベント フロー — 注文のライフサイクル</strong></h3>

<pre><code class="language-text">Commerce                    Order                     Production              Fulfillment
   │                          │                          │                       │
   │  checkout.completed      │                          │                       │
   │─────────────────────────▶│                          │                       │
   │                          │  order.created           │                       │
   │                          │─────────────────────────▶│                       │
   │                          │  order.split             │                       │
   │                          │─────────────────────────▶│                       │
   │                          │                          │  print_job.queued     │
   │                          │                          │──────────────────────▶│
   │                          │                          │  print_job.completed  │
   │                          │◀─────────────────────────│                       │
   │                          │                          │                       │
   │                          │  sub_order.ready_to_ship │                       │
   │                          │──────────────────────────────────────────────────▶│
   │                          │                          │  shipment.created     │
   │                          │◀─────────────────────────────────────────────────│
   │                          │  order.shipped           │                       │
   │                          │──▶ (notify customer)     │                       │
</code></pre>

<h2 id="4-cqrs"><strong>4. CQRSパターン</strong></h2>

<pre><code class="language-typescript">// Command Side — Write path
interface CreateProductCommand {
  designId: string;
  baseProductIds: string[];
  pricing: PricingConfig;
  publishTo: string[];
}

// Query Side — Read path (denormalized for performance)
interface ProductReadModel {
  id: string;
  title: string;
  designThumbnail: string;
  mockupImages: string[];
  variants: Array<{
    sku: string;
    size: string;
    color: string;
    price: number;
    inStock: boolean;
  }>;
  rating: number;
  reviewCount: number;
  salesCount: number;
  // Denormalized — no JOINs needed
}
</code></pre>

<h2 id="5-technology-stack"><strong>5. テクノロジースタック</strong></h2>

<table>
<thead>
<tr><th>レイヤー</th><th>テクノロジー</th><th>理由</th></tr>
</thead>
<tbody>
<tr><td>APIゲートウェイ</td><td>Kong / AWS API ゲートウェイ</td><td>レート制限、認証、ルーティング</td></tr>
<tr><td>バックエンドサービス</td><td>Node.js (NestJS) / Go</td><td>高スループットの TypeScript エコシステム</td></tr>
<tr><td>AI/ML サービス</td><td>Python (高速API)</td><td>ML エコシステム、GPU 推論</td></tr>
<tr><td>フロントエンド</td><td>Next.js / 反応</td><td>SEO用SSR、デザインスタジオSPA</td></tr>
<tr><td>イベントバス</td><td>アパッチ カフカ</td><td>高スループット、イベントソーシング</td></tr>
<tr><td>プライマリDB</td><td>PostgreSQL</td><td>ACID、JSONB、全文検索</td></tr>
<tr><td>キャッシュ</td><td>Redis クラスター</td><td>セッション、製品キャッシュ、レート制限</td></tr>
<tr><td>検索</td><td>エラスティックサーチ / メイリサーチ</td><td>製品検索、ファセット化</td></tr>
<tr><td>オブジェクトストレージ</td><td>S3/MinIO</td><td>デザインファイル、モックアップ、印刷ファイル</td></tr>
<tr><td>CDN</td><td>CloudFront / Cloudflare</td><td>画像配信、エッジキャッシング</td></tr>
<tr><td>タスクキュー</td><td>BullMQ (Redis)</td><td>画像処理、メール、同期</td></tr>
<tr><td>GPU推論</td><td>NVIDIA Triton/vLLM</td><td>AIデザイン生成、CLIP</td></tr>
<tr><td>オーケストレーション</td><td>Kubernetes (EKS/GKE)</td><td>自動スケーリング、マルチリージョン</td></tr>
<tr><td>モニタリング</td><td>プロメテウス + グラファナ</td><td>メトリクス、アラート、ダッシュボード</td></tr>
<tr><td>データウェアハウス</td><td>クリックハウス / BigQuery</td><td>分析、レポート作成</td></tr>
</tbody>
</table>

<h2 id="6-high-level-architecture"><strong>6. 高レベルのアーキテクチャ図</strong></h2>

<pre><code class="language-text">                          ┌─────────────┐
                          │   CDN Edge   │
                          │ (Cloudflare) │
                          └──────┬───────┘
                                 │
                          ┌──────▼───────┐
                          │ API Gateway  │
                          │ (Kong)       │
                          └──────┬───────┘
                                 │
              ┌──────────────────┼──────────────────┐
              ▼                  ▼                  ▼
     ┌────────────────┐ ┌───────────────┐ ┌────────────────┐
     │ Design Service │ │Catalog Service│ │Commerce Service│
     │ (NestJS)       │ │ (NestJS)      │ │ (NestJS)       │
     └───────┬────────┘ └───────┬───────┘ └───────┬────────┘
             │                  │                  │
             ▼                  ▼                  ▼
     ┌────────────────────────────────────────────────────┐
     │                  Kafka Cluster                      │
     └────────────────────────┬───────────────────────────┘
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
     ┌────────────────┐ ┌──────────────┐ ┌────────────────┐
     │ Order Service  │ │ Production   │ │ Fulfillment    │
     │ (NestJS)       │ │ Service (Go) │ │ Service (NestJS│
     └───────┬────────┘ └──────┬───────┘ └───────┬────────┘
             │                 │                  │
             ▼                 ▼                  ▼
     ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
     │ PostgreSQL   │  │ PostgreSQL   │  │ PostgreSQL   │
     │ (Orders)     │  │ (Production) │  │ (Shipping)   │
     └──────────────┘  └──────────────┘  └──────────────┘

     ┌────────────────┐ ┌──────────────┐ ┌────────────────┐
     │ AI/ML Service  │ │ Analytics    │ │ Channel Sync   │
     │ (FastAPI+GPU)  │ │ (ClickHouse) │ │ (Workers)      │
     └────────────────┘ └──────────────┘ └────────────────┘
</code></pre>

<h2 id="7-data-flow"><strong>7. データ フロー パターン</strong></h2>

<table>
<thead>
<tr><th>流れ</th><th>パターン</th><th>レイテンシ</th></tr>
</thead>
<tbody>
<tr><td>デザイン → モックアップ</td><td>同期（リアルタイムプレビュー）</td><td>< 2秒</td></tr>
<tr><td>設計→QC/IPチェック</td><td>非同期 (キュー)</td><td>5～30秒</td></tr>
<tr><td>製品 → チャンネル同期</td><td>非同期 (イベント → ワーカー)</td><td>1～5分</td></tr>
<tr><td>受注→生産</td><td>非同期 (サガ オーケストレーター)</td><td>秒。秒</td></tr>
<tr><td>生産 → 品質管理</td><td>同期（インライン）</td><td>< 5秒</td></tr>
<tr><td>すべて → 分析</td><td>非同期 (CDC → Kafka → DW)</td><td>1～5分</td></tr>
<tr><td>製品検索</td><td>CQRS読み取りモデル</td><td>< 100ms</td></tr>
</tbody>
</table>

<h2 id="8-tong-ket"><strong>8. まとめ</strong></h2>

<ul>
<li><p><strong>9 境界のあるコンテキスト</strong> — デザイン、カタログ、コマース、注文、生産、フルフィルメント、アイデンティティ、分析、AI/ML</p></li>
<li><p><strong>イベント駆動型</strong> — Kafka イベント バス、疎結合用のドメイン イベント</p></li>
<li><p><strong>CQRS</strong> — パフォーマンスのために読み取り/書き込みを分離 (製品カタログ、検索)</p></li>
<li><p><strong>サーガパターン</strong> — 注文ライフサイクルの分散トランザクション</p></li>
<li><p><strong>技術スタック</strong> — NestJS + Go + FastAPI + PostgreSQL + Kafka + Redis + K8s</p></li>
</ul>
