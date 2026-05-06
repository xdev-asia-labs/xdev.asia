---
id: 019f0b20-a103-7001-e001-f2b8f9000103
title: 第 3 課：系統架構概述 — 微服務、事件驅動與 DDD
slug: bai-3-system-architecture-overview
description: 高階系統架構、有界上下文（設計、目錄、訂單、生產、履行、分析）、事件驅動架構、CQRS、技術堆疊選擇、C4 圖。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 第 1 部分：時裝設計領域和 POD 概述
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: 時裝設計與按需印刷系統架構－從領域分析到生產
  slug: kien-truc-he-thong-fashion-design-print-on-demand
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ 建築 — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：系統架構概述 —</tspan>
      <tspan x="60" dy="42">微服務、事件驅動和 DDD</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">時裝設計與按需印刷系統架構－從領域分析到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：時裝設計領域和 POD 概述</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-ddd-bounded-contexts"><strong>1.DDD限界上下文</strong></h2>

<p>申請 <strong>領域驅動設計</strong> 將 POD 系統劃分為明確界定的上下文。</p>

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

<h2 id="2-context-map"><strong>2. 上下文圖——關係</strong></h2>

<table>
<thead>
<tr><th>上游</th><th>下游</th><th>關係</th><th>整合</th></tr>
</thead>
<tbody>
<tr><td>設計</td><td>目錄</td><td>客戶-供應商</td><td>設計資產 → 產品圖片</td></tr>
<tr><td>目錄</td><td>商業</td><td>發布語言</td><td>產品資料 → 店面</td></tr>
<tr><td>商業</td><td>訂單</td><td>客戶-供應商</td><td>結帳 → 訂單已建立</td></tr>
<tr><td>訂單</td><td>生產</td><td>客戶-供應商</td><td>訂單 → 列印作業</td></tr>
<tr><td>生產</td><td>執行</td><td>客戶-供應商</td><td>印刷 → 出貨</td></tr>
<tr><td>所有上下文</td><td>分析</td><td>墨守成規者</td><td>事件 → 資料倉儲</td></tr>
<tr><td>人工智慧/機器學習</td><td>設計、目錄、生產</td><td>開放主機服務</td><td>機器學習推理 API</td></tr>
<tr><td>頻道（Shopify/Etsy）</td><td>目錄、訂單</td><td>反貪腐層</td><td>外部API→內部模型</td></tr>
</tbody>
</table>

<h2 id="3-event-driven"><strong>3. 事件驅動架構</strong></h2>

<h3 id="domain-events"><strong>核心領域事件</strong></h3>

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

<h3 id="event-flow"><strong>事件流——訂單生命週期</strong></h3>

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

<h2 id="4-cqrs"><strong>4.CQRS模式</strong></h2>

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

<h2 id="5-technology-stack"><strong>5. 技術棧</strong></h2>

<table>
<thead>
<tr><th>圖層</th><th>科技</th><th>原因</th></tr>
</thead>
<tbody>
<tr><td>API網關</td><td>Kong / AWS API網關</td><td>速率限制、身份驗證、路由</td></tr>
<tr><td>後端服務</td><td>Node.js (NestJS) / Go</td><td>高吞吐量，TypeScript 生態系統</td></tr>
<tr><td>人工智慧/機器學習服務</td><td>Python（快速API）</td><td>ML生態系、GPU推理</td></tr>
<tr><td>前端</td><td>Next.js / React</td><td>用於 SEO 的 SSR、設計工作室 SPA</td></tr>
<tr><td>活動總線</td><td>阿帕契·卡夫卡</td><td>高吞吐量、事件溯源</td></tr>
<tr><td>主資料庫</td><td>PostgreSQL</td><td>ACID、JSONB、全文搜索</td></tr>
<tr><td>快取</td><td>Redis集群</td><td>會話、產品快取、速率限制</td></tr>
<tr><td>搜尋</td><td>Elasticsearch/美麗搜索</td><td>產品搜尋、分面</td></tr>
<tr><td>物件儲存</td><td>S3/MinIO</td><td>設計文件、模型、列印文件</td></tr>
<tr><td>CDN</td><td>CloudFront/Cloudflare</td><td>影像傳送、邊緣緩存</td></tr>
<tr><td>任務佇列</td><td>BullMQ（Redis）</td><td>影像處理、電子郵件、同步</td></tr>
<tr><td>GPU推理</td><td>NVIDIA Triton/vLLM</td><td>AI設計生成，CLIP</td></tr>
<tr><td>編排</td><td>Kubernetes（EKS/GKE）</td><td>自動縮放、多區域</td></tr>
<tr><td>監控</td><td>普羅米修斯+格拉法納</td><td>指標、警報、儀表板</td></tr>
<tr><td>資料倉儲</td><td>ClickHouse/BigQuery</td><td>分析、報告</td></tr>
</tbody>
</table>

<h2 id="6-high-level-architecture"><strong>6. 高層架構圖</strong></h2>

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

<h2 id="7-data-flow"><strong>7. 資料流模式</strong></h2>

<table>
<thead>
<tr><th>流量</th><th>圖案</th><th>延遲</th></tr>
</thead>
<tbody>
<tr><td>設計→樣機</td><td>同步（即時預覽）</td><td>< 2秒</td></tr>
<tr><td>設計 → QC/IP 檢查</td><td>非同步（隊列）</td><td>5-30秒</td></tr>
<tr><td>產品 → 通道同步</td><td>非同步（事件 → 工作執行緒）</td><td>1-5分鐘</td></tr>
<tr><td>訂單→生產</td><td>非同步（saga 協調器）</td><td>秒。秒</td></tr>
<tr><td>生產→品質控制</td><td>同步（內聯）</td><td>< 5秒</td></tr>
<tr><td>全部 → 分析</td><td>非同步（CDC→Kafka→DW）</td><td>1-5分鐘</td></tr>
<tr><td>產品搜尋</td><td>CQRS讀取模型</td><td><100毫秒</td></tr>
</tbody>
</table>

<h2 id="8-tong-ket"><strong>八、總結</strong></h2>

<ul>
<li><p><strong>9 有界上下文</strong> — 設計、目錄、商務、訂單、生產、履行、身分、分析、AI/ML</p></li>
<li><p><strong>事件驅動</strong> — Kafka 事件匯流排，鬆散耦合的領域事件</p></li>
<li><p><strong>連續QRS</strong> — 單獨的讀取/寫入效能（產品目錄、搜尋）</p></li>
<li><p><strong>傳奇模式</strong> — 訂單生命週期的分散式交易</p></li>
<li><p><strong>技術堆疊</strong> — NestJS + Go + FastAPI + PostgreSQL + Kafka + Redis + K8s</p></li>
</ul>
