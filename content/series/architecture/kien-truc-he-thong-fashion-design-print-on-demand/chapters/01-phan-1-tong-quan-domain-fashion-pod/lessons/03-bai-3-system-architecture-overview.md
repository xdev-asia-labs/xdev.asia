---
id: 019f0b20-a103-7001-e001-f2b8f9000103
title: 'Bài 3: System Architecture Overview — Microservices, Event-Driven & DDD'
slug: bai-3-system-architecture-overview
description: >-
  High-level system architecture, bounded contexts (Design, Catalog,
  Order, Production, Fulfillment, Analytics), event-driven architecture,
  CQRS, technology stack selection, C4 diagrams.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Tổng quan Domain Fashion Design & POD"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
---

<h2 id="1-ddd-bounded-contexts"><strong>1. DDD Bounded Contexts</strong></h2>

<p>Áp dụng <strong>Domain-Driven Design</strong> để phân tách hệ thống POD thành các bounded contexts rõ ràng.</p>

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

<h2 id="2-context-map"><strong>2. Context Map — Relationships</strong></h2>

<table>
<thead>
<tr><th>Upstream</th><th>Downstream</th><th>Relationship</th><th>Integration</th></tr>
</thead>
<tbody>
<tr><td>Design</td><td>Catalog</td><td>Customer-Supplier</td><td>Design asset → Product image</td></tr>
<tr><td>Catalog</td><td>Commerce</td><td>Published Language</td><td>Product data → Storefront</td></tr>
<tr><td>Commerce</td><td>Order</td><td>Customer-Supplier</td><td>Checkout → Order created</td></tr>
<tr><td>Order</td><td>Production</td><td>Customer-Supplier</td><td>Order → Print job</td></tr>
<tr><td>Production</td><td>Fulfillment</td><td>Customer-Supplier</td><td>Printed → Ship</td></tr>
<tr><td>All contexts</td><td>Analytics</td><td>Conformist</td><td>Events → Data warehouse</td></tr>
<tr><td>AI/ML</td><td>Design, Catalog, Production</td><td>Open Host Service</td><td>ML inference API</td></tr>
<tr><td>Channel (Shopify/Etsy)</td><td>Catalog, Order</td><td>Anti-corruption Layer</td><td>External API → Internal model</td></tr>
</tbody>
</table>

<h2 id="3-event-driven"><strong>3. Event-Driven Architecture</strong></h2>

<h3 id="domain-events"><strong>Core Domain Events</strong></h3>

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

<h3 id="event-flow"><strong>Event Flow — Order Lifecycle</strong></h3>

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

<h2 id="4-cqrs"><strong>4. CQRS Pattern</strong></h2>

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

<h2 id="5-technology-stack"><strong>5. Technology Stack</strong></h2>

<table>
<thead>
<tr><th>Layer</th><th>Technology</th><th>Lý do</th></tr>
</thead>
<tbody>
<tr><td>API Gateway</td><td>Kong / AWS API Gateway</td><td>Rate limiting, auth, routing</td></tr>
<tr><td>Backend Services</td><td>Node.js (NestJS) / Go</td><td>High throughput, TypeScript ecosystem</td></tr>
<tr><td>AI/ML Services</td><td>Python (FastAPI)</td><td>ML ecosystem, GPU inference</td></tr>
<tr><td>Frontend</td><td>Next.js / React</td><td>SSR for SEO, design studio SPA</td></tr>
<tr><td>Event Bus</td><td>Apache Kafka</td><td>High throughput, event sourcing</td></tr>
<tr><td>Primary DB</td><td>PostgreSQL</td><td>ACID, JSONB, full-text search</td></tr>
<tr><td>Cache</td><td>Redis Cluster</td><td>Session, product cache, rate limiting</td></tr>
<tr><td>Search</td><td>Elasticsearch / Meilisearch</td><td>Product search, faceting</td></tr>
<tr><td>Object Storage</td><td>S3 / MinIO</td><td>Design files, mockups, print files</td></tr>
<tr><td>CDN</td><td>CloudFront / Cloudflare</td><td>Image delivery, edge caching</td></tr>
<tr><td>Task Queue</td><td>BullMQ (Redis)</td><td>Image processing, email, sync</td></tr>
<tr><td>GPU Inference</td><td>NVIDIA Triton / vLLM</td><td>AI design generation, CLIP</td></tr>
<tr><td>Orchestration</td><td>Kubernetes (EKS/GKE)</td><td>Auto-scaling, multi-region</td></tr>
<tr><td>Monitoring</td><td>Prometheus + Grafana</td><td>Metrics, alerting, dashboards</td></tr>
<tr><td>Data Warehouse</td><td>ClickHouse / BigQuery</td><td>Analytics, reporting</td></tr>
</tbody>
</table>

<h2 id="6-high-level-architecture"><strong>6. High-Level Architecture Diagram</strong></h2>

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

<h2 id="7-data-flow"><strong>7. Data Flow Patterns</strong></h2>

<table>
<thead>
<tr><th>Flow</th><th>Pattern</th><th>Latency</th></tr>
</thead>
<tbody>
<tr><td>Design → Mockup</td><td>Sync (real-time preview)</td><td>&lt; 2s</td></tr>
<tr><td>Design → QC/IP Check</td><td>Async (queue)</td><td>5-30s</td></tr>
<tr><td>Product → Channel Sync</td><td>Async (event → worker)</td><td>1-5 min</td></tr>
<tr><td>Order → Production</td><td>Async (saga orchestrator)</td><td>seconds</td></tr>
<tr><td>Production → QC</td><td>Sync (inline)</td><td>&lt; 5s</td></tr>
<tr><td>All → Analytics</td><td>Async (CDC → Kafka → DW)</td><td>1-5 min</td></tr>
<tr><td>Product Search</td><td>CQRS read model</td><td>&lt; 100ms</td></tr>
</tbody>
</table>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<ul>
<li><p><strong>9 Bounded Contexts</strong> — Design, Catalog, Commerce, Order, Production, Fulfillment, Identity, Analytics, AI/ML</p></li>
<li><p><strong>Event-Driven</strong> — Kafka event bus, domain events cho loose coupling</p></li>
<li><p><strong>CQRS</strong> — Tách read/write cho performance (product catalog, search)</p></li>
<li><p><strong>Saga Pattern</strong> — Distributed transactions cho order lifecycle</p></li>
<li><p><strong>Tech Stack</strong> — NestJS + Go + FastAPI + PostgreSQL + Kafka + Redis + K8s</p></li>
</ul>
