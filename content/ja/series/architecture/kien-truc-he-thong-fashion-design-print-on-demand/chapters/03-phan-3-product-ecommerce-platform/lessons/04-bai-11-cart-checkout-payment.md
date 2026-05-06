---
id: 019f0b20-a304-7001-e001-f2b8f9000304
title: 'レッスン 11: カート、チェックアウト、支払い — マルチゲートウェイ、税金、サブスクリプション、不正行為の検出'
slug: bai-11-cart-checkout-payment
description: >-
  ショッピング カート アーキテクチャ、チェックアウト フロー、支払いゲートウェイの統合
  (Stripe、PayPal)、税計算、サブスクリプション/メンバーシップ、不正検出、PCI
  コンプライアンス、放棄されたカートの回復、複数通貨チェックアウト。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 3: 製品と電子商取引プラットフォーム'
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: ファッション デザインとプリント オン デマンド システム アーキテクチャ — ドメイン分析から生産まで
  slug: kien-truc-he-thong-fashion-design-print-on-demand
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8102" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8102)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1022" cy="116" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="944" cy="58" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="866" cy="260" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="788" cy="202" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="710" cy="144" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="156" x2="1100" y2="236" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="186" x2="1050" y2="256" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="982.8467875173176,140.5 982.8467875173176,171.5 956,187 929.1532124826824,171.5 929.1532124826824,140.5 956,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ アーキテクチャ — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: カート、チェックアウト、支払い —</tspan>
      <tspan x="60" dy="42">マルチゲートウェイ、税金、サブスクリプション、詐欺</tspan>
      <tspan x="60" dy="42">検出</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">ファッション デザインとプリント オン デマンド システム アーキテクチャ — ドメイン分析から生産まで</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 製品と電子商取引プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-checkout-architecture"><strong>1. チェックアウトのアーキテクチャ</strong></h2>

<pre><code class="language-text">┌──────────────────────────────────────────────────────┐
│                  Checkout Flow                       │
│                                                      │
│  ┌────────┐   ┌──────────┐   ┌─────────┐   ┌──────┐│
│  │  Cart  │──▶│ Shipping │──▶│ Payment │──▶│Review││
│  │        │   │ Address  │   │ Method  │   │      ││
│  └────────┘   └──────────┘   └─────────┘   └──┬───┘│
│                                                │     │
│                                          ┌─────▼───┐ │
│                                          │  Place  │ │
│                                          │  Order  │ │
│                                          └─────┬───┘ │
└────────────────────────────────────────────────│─────┘
                                                 │
         ┌───────────────────────────────────────┼───┐
         ▼                    ▼                  ▼   ▼
  ┌──────────────┐  ┌──────────────┐  ┌──────────┐ ┌─────┐
  │Payment Gateway│  │  Tax Engine  │  │  Fraud   │ │Order│
  │Stripe/PayPal │  │ TaxJar/Avalara│ │Detection │ │Svc  │
  └──────────────┘  └──────────────┘  └──────────┘ └─────┘
</code></pre>

<h2 id="2-cart-service"><strong>2. ショッピングカートサービス</strong></h2>

<pre><code class="language-typescript">interface Cart {
  id: string;
  userId?: string;            // null for guest
  sessionId: string;          // For guest cart
  
  items: CartItem[];
  
  // Pricing
  subtotal: Money;
  discounts: AppliedDiscount[];
  shippingCost: Money;
  taxAmount: Money;
  total: Money;
  
  // Currency
  currency: Currency;
  
  // Metadata
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date;            // Cart expiry (30 days)
  
  // Checkout state
  checkoutState: CheckoutState;
}

interface CartItem {
  id: string;
  productId: string;
  variantSku: string;
  quantity: number;
  
  // Snapshot at time of add (prices can change)
  unitPrice: Money;
  
  // Custom design options
  customization?: {
    designId: string;
    printArea: string;
    mockupUrl: string;         // Preview image
  };
  
  // Availability check result
  availability: 'available' | 'low_stock' | 'unavailable';
  estimatedProductionDays: number;
}

class CartService {
  constructor(
    private cartRepo: CartRepository,    // Redis for active carts
    private pricingEngine: PricingEngine,
    private availabilityService: AvailabilityService,
  ) {}

  async addItem(cartId: string, item: AddItemRequest): Promise&lt;Cart&gt; {
    const cart = await this.cartRepo.get(cartId);
    
    // 1. Validate product exists and is available
    const availability = await this.availabilityService.check(item.variantSku);
    if (availability.status === 'unavailable') {
      throw new ProductUnavailableError(item.variantSku);
    }

    // 2. Get current price
    const price = await this.pricingEngine.getPrice(item.productId, item.variantSku);

    // 3. Add or update quantity
    const existingItem = cart.items.find(i => i.variantSku === item.variantSku);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cart.items.push({
        id: generateId(),
        productId: item.productId,
        variantSku: item.variantSku,
        quantity: item.quantity,
        unitPrice: price,
        customization: item.customization,
        availability: availability.status,
        estimatedProductionDays: availability.productionDays,
      });
    }

    // 4. Recalculate totals
    await this.recalculate(cart);

    // 5. Save
    await this.cartRepo.save(cart);
    return cart;
  }

  private async recalculate(cart: Cart): Promise&lt;void&gt; {
    // Subtotal
    cart.subtotal = cart.items.reduce(
      (sum, item) => sum.add(item.unitPrice.multiply(item.quantity)),
      Money.zero(cart.currency),
    );

    // Apply discounts
    cart.discounts = await this.applyDiscounts(cart);
    const discountTotal = cart.discounts.reduce(
      (sum, d) => sum.add(d.amount),
      Money.zero(cart.currency),
    );

    // Shipping (if address known)
    if (cart.checkoutState.shippingAddress) {
      cart.shippingCost = await this.calculateShipping(cart);
      cart.taxAmount = await this.calculateTax(cart);
    }

    // Total
    cart.total = cart.subtotal
      .subtract(discountTotal)
      .add(cart.shippingCost)
      .add(cart.taxAmount);
  }
}
</code></pre>

<h2 id="3-payment-integration"><strong>3. ペイメントゲートウェイの統合</strong></h2>

<pre><code class="language-typescript">// Payment service — abstract over multiple gateways
interface PaymentService {
  createPaymentIntent(order: CheckoutOrder): Promise&lt;PaymentIntent&gt;;
  confirmPayment(intentId: string, paymentMethod: string): Promise&lt;PaymentResult&gt;;
  refund(paymentId: string, amount: Money, reason: string): Promise&lt;RefundResult&gt;;
}

// Stripe implementation
class StripePaymentService implements PaymentService {
  constructor(private stripe: Stripe) {}

  async createPaymentIntent(order: CheckoutOrder): Promise&lt;PaymentIntent&gt; {
    const intent = await this.stripe.paymentIntents.create({
      amount: order.total.toSmallestUnit(),   // Cents
      currency: order.currency.toLowerCase(),
      
      // Metadata for reconciliation
      metadata: {
        orderId: order.id,
        customerId: order.customerId,
        source: order.source,
      },
      
      // Enable specific payment methods
      payment_method_types: ['card', 'klarna', 'afterpay_clearpay'],
      
      // Automatic payment methods based on customer's country
      automatic_payment_methods: { enabled: true },
      
      // Capture immediately (no hold)
      capture_method: 'automatic',
      
      // Statement descriptor
      statement_descriptor_suffix: 'POD ORDER',
    });

    return {
      id: intent.id,
      clientSecret: intent.client_secret!,
      status: intent.status,
      amount: Money.fromSmallestUnit(intent.amount, intent.currency),
    };
  }

  async confirmPayment(intentId: string, paymentMethodId: string): Promise&lt;PaymentResult&gt; {
    const intent = await this.stripe.paymentIntents.confirm(intentId, {
      payment_method: paymentMethodId,
    });

    return {
      success: intent.status === 'succeeded',
      paymentId: intent.id,
      status: intent.status,
      chargeId: intent.latest_charge as string,
    };
  }

  async refund(paymentId: string, amount: Money, reason: string): Promise&lt;RefundResult&gt; {
    const refund = await this.stripe.refunds.create({
      payment_intent: paymentId,
      amount: amount.toSmallestUnit(),
      reason: reason as Stripe.RefundCreateParams.Reason,
    });

    return {
      refundId: refund.id,
      status: refund.status!,
      amount: Money.fromSmallestUnit(refund.amount, refund.currency),
    };
  }
}
</code></pre>

<h2 id="4-fraud-detection"><strong>4. 不正行為の検出</strong></h2>

<pre><code class="language-typescript">interface FraudDetectionService {
  assess(order: CheckoutOrder): Promise&lt;FraudAssessment&gt;;
}

interface FraudAssessment {
  riskScore: number;           // 0-100
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  signals: FraudSignal[];
  recommendation: 'approve' | 'review' | 'reject';
}

interface FraudSignal {
  type: string;
  severity: number;
  description: string;
}

async function assessFraud(order: CheckoutOrder): Promise&lt;FraudAssessment&gt; {
  const signals: FraudSignal[] = [];

  // 1. Velocity check — too many orders in short time
  const recentOrders = await getRecentOrders(order.email, '1h');
  if (recentOrders.length > 5) {
    signals.push({
      type: 'velocity',
      severity: 80,
      description: `${recentOrders.length} orders in last hour`,
    });
  }

  // 2. IP geolocation vs billing address mismatch
  const ipCountry = await geolocateIP(order.ipAddress);
  if (ipCountry !== order.billingAddress.country) {
    signals.push({
      type: 'geo_mismatch',
      severity: 40,
      description: `IP: ${ipCountry}, Billing: ${order.billingAddress.country}`,
    });
  }

  // 3. Email domain check
  if (isDisposableEmail(order.email)) {
    signals.push({
      type: 'disposable_email',
      severity: 60,
      description: 'Disposable email domain detected',
    });
  }

  // 4. Address verification (AVS)
  // 5. Card BIN country match
  // 6. Device fingerprint analysis
  // 7. Stripe Radar integration

  const riskScore = calculateRiskScore(signals);

  return {
    riskScore,
    riskLevel: getRiskLevel(riskScore),
    signals,
    recommendation: riskScore > 80 ? 'reject'
      : riskScore > 50 ? 'review'
      : 'approve',
  };
}
</code></pre>

<h2 id="5-abandoned-cart"><strong>5.放棄されたカートの回収</strong></h2>

<pre><code class="language-typescript">// Abandoned cart detection & recovery automation
interface AbandonedCartService {
  detectAbandoned(): Promise&lt;AbandonedCart[]&gt;;
  sendRecoveryEmail(cart: AbandonedCart, sequence: number): Promise&lt;void&gt;;
}

// Recovery email sequence
const RECOVERY_SEQUENCE = [
  { delay: '1h',   subject: 'Bạn quên gì đó trong giỏ hàng!',      discount: null },
  { delay: '24h',  subject: 'Thiết kế của bạn đang chờ...',         discount: '10%' },
  { delay: '72h',  subject: 'Ưu đãi cuối cùng — Giảm 15%!',        discount: '15%' },
];

async function processAbandonedCarts(): Promise&lt;void&gt; {
  const abandonedCarts = await cartRepo.findAbandoned({
    minAge: Duration.hours(1),
    maxAge: Duration.days(7),
    hasEmail: true,
    hasItems: true,
    notRecovered: true,
  });

  for (const cart of abandonedCarts) {
    const sequenceIndex = getSequenceIndex(cart);
    if (sequenceIndex >= RECOVERY_SEQUENCE.length) continue;

    const sequence = RECOVERY_SEQUENCE[sequenceIndex];
    
    await emailService.send({
      to: cart.email,
      template: 'abandoned-cart-recovery',
      data: {
        items: cart.items.map(formatCartItem),
        total: cart.total,
        mockupImages: cart.items.map(i => i.customization?.mockupUrl),
        discountCode: sequence.discount
          ? await generateDiscountCode(cart.id, sequence.discount)
          : null,
        recoveryUrl: `${BASE_URL}/cart/recover/${cart.recoveryToken}`,
      },
    });

    await cartRepo.markRecoveryEmailSent(cart.id, sequenceIndex);
  }
}
</code></pre>

<h2 id="6-tong-ket"><strong>6. まとめ</strong></h2>

<table>
<thead>
<tr><th>コンポーネント</th><th>テクノロジー</th><th>主な特長</th></tr>
</thead>
<tbody>
<tr><td>カート保管庫</td><td>Redis + PostgreSQL</td><td>高速読み取り/書き込み、期限切れ後も永続的</td></tr>
<tr><td>お支払い</td><td>ストライプ + PayPal</td><td>カード、BNPL、複数通貨</td></tr>
<tr><td>税金</td><td>TaxJar/Avalara</td><td>管轄区域を意識した自動申請</td></tr>
<tr><td>詐欺</td><td>ストライプレーダー + カスタムルール</td><td>ML スコアリング、ベロシティ チェック、AVS</td></tr>
<tr><td>カートの回収</td><td>電子メールの自動化 (3 ステップ)</td><td>割引が段階的に増加する時間指定シーケンス</td></tr>
<tr><td>PCI コンプライアンス</td><td>ストライプ要素 (クライアント側)</td><td>カードデータが当社のサーバーにアクセスされることはありません</td></tr>
</tbody>
</table>
