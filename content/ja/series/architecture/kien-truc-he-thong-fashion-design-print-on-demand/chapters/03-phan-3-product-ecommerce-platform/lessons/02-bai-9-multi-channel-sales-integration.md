---
id: 019f0b20-a302-7001-e001-f2b8f9000302
title: 'レッスン 9: マルチチャネル販売 — Shopify、Etsy、Amazon、TikTok ショップ、API 統合'
slug: bai-9-multi-channel-sales-integration
description: >-
  POD のマルチチャネル販売アーキテクチャ、Shopify、Etsy、Amazon、TikTok Shop、WooCommerce
  との統合、商品リストの同期、注文ルーティング、在庫同期、Webhook 処理、チャネル固有の要件。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 3: 製品と電子商取引プラットフォーム'
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: ファッション デザインとプリント オン デマンド システム アーキテクチャ — ドメイン分析から生産まで
  slug: kien-truc-he-thong-fashion-design-print-on-demand
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2541" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2541)"/>

  <!-- Decorations -->
  <g>
    <circle cx="910" cy="160" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="30" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1030" cy="160" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="840" cy="30" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="160" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="80" x2="1100" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="110" x2="1050" y2="180" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="960.3108891324554,112.5 960.3108891324554,147.5 930,165 899.6891108675446,147.5 899.6891108675446,112.50000000000001 930,95" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ アーキテクチャ — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: マルチチャネル販売 — Shopify、</tspan>
      <tspan x="60" dy="42">Etsy、Amazon、TikTok ショップ、API</tspan>
      <tspan x="60" dy="42">統合</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">ファッション デザインとプリント オン デマンド システム アーキテクチャ — ドメイン分析から生産まで</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 製品と電子商取引プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-multi-channel-architecture"><strong>1. マルチチャンネルアーキテクチャ</strong></h2>

<pre><code class="language-text">                    ┌──────────────────────┐
                    │   POD Platform Core  │
                    │   (Product Catalog)  │
                    └──────────┬───────────┘
                               │
                    ┌──────────▼───────────┐
                    │  Channel Manager     │
                    │  (Sync orchestrator) │
                    └──────────┬───────────┘
                               │
         ┌─────────┬───────────┼───────────┬─────────┐
         ▼         ▼           ▼           ▼         ▼
    ┌─────────┐┌─────────┐┌─────────┐┌─────────┐┌─────────┐
    │ Shopify ││  Etsy   ││ Amazon  ││ TikTok  ││  Woo    │
    │Connector││Connector││Connector││  Shop   ││Commerce │
    │         ││         ││         ││Connector││Connector│
    └────┬────┘└────┬────┘└────┬────┘└────┬────┘└────┬────┘
         │          │          │          │          │
    ┌────▼────┐┌────▼────┐┌────▼────┐┌────▼────┐┌────▼────┐
    │ Shopify ││  Etsy   ││ Amazon  ││ TikTok  ││  Woo    │
    │   API   ││  API    ││SP-API   ││  API    ││REST API │
    └─────────┘└─────────┘└─────────┘└─────────┘└─────────┘
</code></pre>

<h2 id="2-channel-connector"><strong>2. チャネルコネクタインターフェース</strong></h2>

<pre><code class="language-typescript">// Abstract connector — mỗi channel implement interface này
interface ChannelConnector {
  channelId: string;
  channelType: ChannelType;
  
  // Product sync
  publishProduct(product: SellableProduct): Promise&lt;ChannelProductResult&gt;;
  updateProduct(product: SellableProduct): Promise&lt;void&gt;;
  unpublishProduct(productId: string): Promise&lt;void&gt;;
  
  // Order handling
  fetchNewOrders(since: Date): Promise&lt;ChannelOrder[]&gt;;
  updateOrderStatus(orderId: string, status: OrderStatus, tracking?: TrackingInfo): Promise&lt;void&gt;;
  
  // Inventory sync (availability changes)
  updateAvailability(variantId: string, available: boolean): Promise&lt;void&gt;;
  
  // Webhooks
  handleWebhook(payload: unknown): Promise&lt;WebhookResult&gt;;
}

type ChannelType = 'shopify' | 'etsy' | 'amazon' | 'tiktok_shop' | 'woocommerce' | 'custom_api';

// Shopify connector implementation
class ShopifyConnector implements ChannelConnector {
  private client: ShopifyAdminAPI;
  
  constructor(
    private config: {
      shopDomain: string;
      accessToken: string;
      apiVersion: string;     // '2024-01'
    }
  ) {
    this.client = new ShopifyAdminAPI(config);
  }

  async publishProduct(product: SellableProduct): Promise&lt;ChannelProductResult&gt; {
    // Transform internal product → Shopify product format
    const shopifyProduct = this.transformToShopify(product);
    
    // Create product via GraphQL Admin API
    const result = await this.client.graphql(`
      mutation productCreate($input: ProductInput!) {
        productCreate(input: $input) {
          product { id legacyResourceId handle }
          userErrors { field message }
        }
      }
    `, {
      input: shopifyProduct,
    });

    if (result.productCreate.userErrors.length > 0) {
      throw new ChannelSyncError('shopify', result.productCreate.userErrors);
    }

    return {
      channelProductId: result.productCreate.product.id,
      externalUrl: `https://${this.config.shopDomain}/products/${result.productCreate.product.handle}`,
    };
  }

  private transformToShopify(product: SellableProduct): ShopifyProductInput {
    return {
      title: product.title,
      descriptionHtml: product.description,
      productType: product.category,
      tags: product.tags,
      variants: product.variants.map(v => ({
        sku: v.sku,
        price: v.price.amount.toString(),
        compareAtPrice: product.compareAtPrice?.amount.toString(),
        options: [v.size.name, v.color.name],
        inventoryPolicy: 'CONTINUE',      // Always available (POD)
        requiresShipping: true,
        weight: v.weight.value,
        weightUnit: v.weight.unit.toUpperCase(),
      })),
      images: product.images.map(img => ({
        src: img.url,
        altText: img.alt,
      })),
      seo: {
        title: product.seoTitle,
        description: product.seoDescription,
      },
    };
  }
}
</code></pre>

<h2 id="3-product-sync"><strong>3. 商品リストの同期</strong></h2>

<pre><code class="language-typescript">// Central sync orchestrator
class ChannelSyncService {
  constructor(
    private connectors: Map&lt;string, ChannelConnector&gt;,
    private eventBus: EventBus,
    private syncRepo: SyncStateRepository,
  ) {}

  // Publish product to all enabled channels
  async publishToChannels(
    product: SellableProduct,
    channelIds: string[],
  ): Promise&lt;PublishResult[]&gt; {
    const results: PublishResult[] = [];

    for (const channelId of channelIds) {
      const connector = this.connectors.get(channelId);
      if (!connector) continue;

      try {
        // Transform product for channel-specific requirements
        const adapted = await this.adaptForChannel(product, connector.channelType);
        
        const result = await connector.publishProduct(adapted);
        
        // Save sync state
        await this.syncRepo.saveSyncState({
          productId: product.id,
          channelId,
          channelProductId: result.channelProductId,
          externalUrl: result.externalUrl,
          lastSyncedAt: new Date(),
          status: 'synced',
        });

        results.push({ channelId, success: true, result });
      } catch (error) {
        results.push({ channelId, success: false, error: error.message });
        
        // Emit failure event for monitoring
        this.eventBus.emit('channel.sync.failed', {
          productId: product.id,
          channelId,
          error: error.message,
        });
      }
    }

    return results;
  }

  // Channel-specific adaptations
  private async adaptForChannel(
    product: SellableProduct,
    channelType: ChannelType,
  ): Promise&lt;SellableProduct&gt; {
    const adapted = { ...product };

    switch (channelType) {
      case 'etsy':
        // Etsy: max 10 images, requires shipping profile, taxonomy ID
        adapted.images = adapted.images.slice(0, 10);
        adapted.tags = adapted.tags.slice(0, 13);             // Etsy max 13 tags
        break;

      case 'amazon':
        // Amazon: bullet points, search terms, browse node
        adapted.description = formatAmazonBulletPoints(product);
        break;

      case 'tiktok_shop':
        // TikTok: video preferred, category ID, brand name
        adapted.images = await addVideoMockup(product);
        break;
    }

    return adapted;
  }
}
</code></pre>

<h2 id="4-order-routing"><strong>4. チャネルからの注文ルーティング</strong></h2>

<pre><code class="language-typescript">// Order flow: Channel → Webhook → POD Platform → Supplier
interface ChannelOrderRouter {
  // Process incoming order from any channel
  processChannelOrder(channelOrder: ChannelOrder): Promise&lt;InternalOrder&gt;;
}

async function processChannelOrder(channelOrder: ChannelOrder): Promise&lt;InternalOrder&gt; {
  // 1. Map channel product IDs to internal product IDs
  const lineItems = await Promise.all(
    channelOrder.items.map(async (item) => {
      const syncState = await syncRepo.findByChannelProductId(item.channelProductId);
      return {
        productId: syncState.productId,
        variantSku: syncState.sku,
        quantity: item.quantity,
        price: item.price,
      };
    })
  );

  // 2. Create internal order
  const internalOrder = await orderService.createOrder({
    source: channelOrder.channelType,
    sourceOrderId: channelOrder.orderId,
    customer: channelOrder.customer,
    shippingAddress: channelOrder.shippingAddress,
    lineItems,
    payment: {
      status: 'paid',                    // Channel already collected payment
      amount: channelOrder.totalAmount,
      channelTransactionId: channelOrder.transactionId,
    },
  });

  // 3. Emit event for downstream processing
  eventBus.emit('order.created', {
    orderId: internalOrder.id,
    source: channelOrder.channelType,
  });

  return internalOrder;
}
</code></pre>

<h2 id="5-webhook-handling"><strong>5. Webhook の処理</strong></h2>

<pre><code class="language-typescript">// Centralized webhook handler
class WebhookRouter {
  private handlers: Map&lt;string, WebhookHandler&gt;;

  // POST /webhooks/:channel
  async handleWebhook(channel: string, req: Request): Promise&lt;Response&gt; {
    // 1. Verify webhook signature
    const isValid = await this.verifySignature(channel, req);
    if (!isValid) {
      return new Response('Unauthorized', { status: 401 });
    }

    // 2. Parse & deduplicate
    const webhookId = req.headers.get('x-webhook-id');
    if (await this.isDuplicate(webhookId)) {
      return new Response('Already processed', { status: 200 });
    }

    // 3. Route to channel handler
    const handler = this.handlers.get(channel);
    const event = await handler.parseWebhook(req);

    // 4. Process based on event type
    switch (event.type) {
      case 'order.created':
        await this.processChannelOrder(event.data);
        break;
      case 'order.cancelled':
        await this.cancelOrder(event.data);
        break;
      case 'order.refunded':
        await this.processRefund(event.data);
        break;
    }

    // 5. Mark as processed
    await this.markProcessed(webhookId);

    return new Response('OK', { status: 200 });
  }
}
</code></pre>

<h2 id="6-channel-comparison"><strong>6. チャンネルの比較</strong></h2>

<table>
<thead>
<tr><th>特長</th><th>ショッピファイ</th><th>Etsy</th><th>アマゾン</th><th>TikTokショップ</th><th>ウーコマース</th></tr>
</thead>
<tbody>
<tr><td>API タイプ</td><td>GraphQL + REST</td><td>レスト v3</td><td>SP-API</td><td>休息</td><td>レスト v3</td></tr>
<tr><td>認証</td><td>OAuth 2.0</td><td>OAuth 2.0</td><td>IAM + OAuth</td><td>OAuth 2.0</td><td>APIキー</td></tr>
<tr><td>最大画像</td><td>250</td><td>10</td><td>9</td><td>9</td><td>無制限</td></tr>
<tr><td>最大バリアント</td><td>100</td><td>さまざま</td><td>カテゴリごと</td><td>さまざま</td><td>無制限</td></tr>
<tr><td>Webhook</td><td>はい (HMAC)</td><td>限定</td><td>SQS/SNS</td><td>はい</td><td>はい (JWT)</td></tr>
<tr><td>手数料</td><td>0%</td><td>6.5%</td><td>8-15%</td><td>5%</td><td>0%</td></tr>
<tr><td>ご注文の流れ</td><td>プッシュ (Webhook)</td><td>プル（投票）</td><td>プル（SP-API）</td><td>プッシュ</td><td>プッシュ (Webhook)</td></tr>
</tbody>
</table>
