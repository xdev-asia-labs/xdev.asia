---
id: 019f0b20-a303-7001-e001-f2b8f9000303
title: 'Bài 10: Pricing Engine & Revenue Model — Cost Calculation, Dynamic Pricing & Margin Optimization'
slug: bai-10-pricing-engine-revenue-model
description: >-
  Kiến trúc pricing engine cho POD, cost breakdown (base cost + print + shipping + fees),
  dynamic pricing, margin calculator, multi-currency support,
  discount/coupon system, revenue split (designer + platform), AI-powered pricing.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: Product & E-Commerce Platform"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7197" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7197)"/>

  <!-- Decorations -->
  <g>
    <circle cx="651" cy="43" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="702" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="753" cy="225" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="804" cy="56" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="147" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="73" x2="1100" y2="153" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="103" x2="1050" y2="173" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.2487113059642,209 1047.2487113059642,237 1023,251 998.7512886940357,237 998.7512886940357,209 1023,195" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🏗️ Kiến trúc — Bài 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 10: Pricing Engine &amp; Revenue Model —</tspan>
      <tspan x="60" dy="42">Cost Calculation, Dynamic Pricing &amp; Margin</tspan>
      <tspan x="60" dy="42">Optimization</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kiến trúc Hệ thống Fashion Design &amp; Print-on-Demand — Từ Domain Analysis đến Production</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Product &amp; E-Commerce Platform</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-pod-cost-structure"><strong>1. POD Cost Structure</strong></h2>

<pre><code class="language-text">Retail Price Breakdown
┌──────────────────────────────────────────────────┐
│                 $29.99 Retail Price               │
│                                                  │
│  ┌──────────────┐  $8.50  Base product cost      │
│  │ Base Cost    │  (from supplier: blank + print) │
│  ├──────────────┤                                │
│  │ Print Cost   │  $3.50  Printing cost          │
│  │              │  (DTG: $2.50, DTF: $1.80, etc.)│
│  ├──────────────┤                                │
│  │ Shipping     │  $4.99  Standard shipping      │
│  │              │  (passed to customer or absorbed)│
│  ├──────────────┤                                │
│  │ Platform Fee │  $2.00  POD platform commission │
│  │              │  (5-15% of retail)             │
│  ├──────────────┤                                │
│  │ Channel Fee  │  $1.95  Marketplace commission │
│  │              │  (Etsy 6.5%, Amazon 15%)       │
│  ├──────────────┤                                │
│  │ Payment Fee  │  $1.17  Payment processing     │
│  │              │  (Stripe 2.9% + $0.30)         │
│  ├──────────────┤                                │
│  │ Designer     │  $3.00  Designer royalty        │
│  │ Royalty      │  (fixed or % of profit)        │
│  ├──────────────┤                                │
│  │ NET PROFIT   │  $4.88  Seller profit margin   │
│  │              │  (16.3% margin)                │
│  └──────────────┘                                │
└──────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-pricing-engine"><strong>2. Pricing Engine Architecture</strong></h2>

<pre><code class="language-typescript">interface PricingEngine {
  // Calculate full cost breakdown
  calculateCost(params: CostParams): CostBreakdown;
  
  // Suggest optimal retail price
  suggestPrice(params: PriceSuggestionParams): PriceSuggestion;
  
  // Calculate margin
  calculateMargin(retailPrice: Money, costs: CostBreakdown): MarginResult;
  
  // Apply discounts/coupons
  applyDiscount(price: Money, discount: Discount): Money;
  
  // Multi-currency conversion
  convertCurrency(amount: Money, targetCurrency: Currency): Money;
}

interface CostParams {
  baseProductId: string;
  variantSku: string;
  printMethod: PrintMethod;
  printAreas: number;            // Number of print locations (front only vs front+back)
  quantity: number;              // Usually 1 for POD
  shippingZone: ShippingZone;
  salesChannel: ChannelType;
  paymentMethod: string;
}

interface CostBreakdown {
  baseCost: Money;               // Product blank cost
  printCost: Money;              // Printing cost (method-dependent)
  additionalPrintCost: Money;    // Extra print areas cost
  subtotalProductCost: Money;    // = baseCost + printCost + additional
  
  shippingCost: Money;           // Carrier shipping cost
  
  platformFee: Money;            // Our platform fee
  channelFee: Money;             // Marketplace commission
  paymentProcessingFee: Money;   // Stripe/PayPal fee
  taxAmount: Money;              // Sales tax / VAT
  
  designerRoyalty: Money;        // Designer earnings
  
  totalCost: Money;              // Sum of all costs
  suggestedRetailPrice: Money;   // Suggested price for target margin
}

function calculateCost(params: CostParams): CostBreakdown {
  // 1. Base product cost from supplier
  const baseCost = getSupplierCost(params.baseProductId, params.variantSku);
  
  // 2. Print cost based on method and areas
  const printCost = calculatePrintCost(params.printMethod, params.printAreas);
  
  // 3. Shipping cost
  const shippingCost = calculateShipping(
    params.baseProductId,
    params.shippingZone,
    params.quantity,
  );
  
  // 4. Platform fee (percentage-based tiers)
  const platformFee = calculatePlatformFee(baseCost.add(printCost));
  
  // 5. Channel-specific marketplace commission
  const channelFee = calculateChannelFee(params.salesChannel);
  
  // 6. Payment processing (Stripe: 2.9% + $0.30)
  const paymentFee = calculatePaymentFee(params.paymentMethod);
  
  // 7. Designer royalty
  const designerRoyalty = calculateRoyalty(params.baseProductId);

  const totalCost = baseCost
    .add(printCost)
    .add(shippingCost)
    .add(platformFee)
    .add(channelFee)
    .add(paymentFee)
    .add(designerRoyalty);

  // Suggest price for 30% margin
  const targetMargin = 0.30;
  const suggestedPrice = totalCost.divide(1 - targetMargin);

  return {
    baseCost,
    printCost,
    additionalPrintCost: Money.zero(),
    subtotalProductCost: baseCost.add(printCost),
    shippingCost,
    platformFee,
    channelFee,
    paymentProcessingFee: paymentFee,
    taxAmount: Money.zero(),
    designerRoyalty,
    totalCost,
    suggestedRetailPrice: suggestedPrice.roundUp(0.99), // $24.99 ending
  };
}
</code></pre>

<h2 id="3-print-cost"><strong>3. Print Cost Matrix</strong></h2>

<pre><code class="language-typescript">// Print cost varies by method, size, and color count
const PRINT_COST_MATRIX: Record&lt;PrintMethod, PrintCostConfig&gt; = {
  dtg: {
    baseCost: 2.50,                    // 1 location, white garment
    darkGarmentSurcharge: 1.50,        // Needs white underbase
    additionalLocationCost: 2.00,      // Per extra print area
    maxPrintArea: '15x18 inches',
    setupFee: 0,                       // No setup for POD
    suitableFor: ['cotton', 'cotton_blend'],
  },
  dtf: {
    baseCost: 1.80,
    darkGarmentSurcharge: 0,           // DTF works on any color
    additionalLocationCost: 1.50,
    maxPrintArea: '13x19 inches',
    setupFee: 0,
    suitableFor: ['cotton', 'polyester', 'nylon', 'blend'],
  },
  sublimation: {
    baseCost: 3.00,
    darkGarmentSurcharge: 0,           // Only works on white/light polyester
    additionalLocationCost: 0,         // All-over print = 1 area
    maxPrintArea: 'all-over',
    setupFee: 0,
    suitableFor: ['polyester', 'polymer_coated'],
  },
  screen_print: {
    baseCost: 5.00,                    // Per color per location
    darkGarmentSurcharge: 2.00,
    additionalLocationCost: 3.00,
    maxPrintArea: '14x16 inches',
    setupFee: 25.00,                   // Per screen
    perColorCost: 1.50,               // Each additional color
    minOrderQuantity: 24,              // Not suitable for single POD
    suitableFor: ['cotton', 'cotton_blend'],
  },
};
</code></pre>

<h2 id="4-dynamic-pricing"><strong>4. Dynamic Pricing & AI Optimization</strong></h2>

<pre><code class="language-typescript">// AI-powered pricing suggestions
interface DynamicPricingService {
  suggestOptimalPrice(product: SellableProduct): Promise&lt;PricingSuggestion&gt;;
}

interface PricingSuggestion {
  recommendedPrice: Money;
  priceRange: { min: Money; max: Money };
  confidence: number;                    // 0-1
  factors: PricingFactor[];
  competitorPrices: CompetitorPrice[];
  elasticity: number;                    // Price elasticity estimate
}

interface PricingFactor {
  name: string;
  impact: 'positive' | 'negative';
  weight: number;
  description: string;
}

async function suggestOptimalPrice(
  product: SellableProduct,
): Promise&lt;PricingSuggestion&gt; {
  // 1. Competitor analysis
  const competitors = await analyzeCompetitorPrices(product.category, product.tags);
  
  // 2. Historical sales data (similar products)
  const salesData = await getSalesHistory(product.category, product.tags);
  
  // 3. Demand signals
  const demand = await analyzeDemand({
    searchVolume: await getSearchVolume(product.tags),
    trendScore: await getTrendScore(product.tags),
    seasonality: await getSeasonalFactor(product.category),
  });

  // 4. Cost floor
  const costs = calculateCost({
    baseProductId: product.baseProductId,
    variantSku: product.variants[0].sku,
    printMethod: 'dtg',
    printAreas: 1,
    quantity: 1,
    shippingZone: 'domestic',
    salesChannel: 'shopify',
    paymentMethod: 'stripe',
  });

  // 5. ML model prediction
  const prediction = await pricingModel.predict({
    costFloor: costs.totalCost.amount,
    competitorMedian: median(competitors.map(c => c.price)),
    demandScore: demand.score,
    designQuality: product.aiQualityScore,
    brandStrength: product.designerReputation,
    seasonalMultiplier: demand.seasonality,
  });

  return {
    recommendedPrice: Money.fromAmount(prediction.optimalPrice, 'USD'),
    priceRange: {
      min: costs.totalCost.multiply(1.2),   // 20% minimum margin
      max: Money.fromAmount(prediction.maxPrice, 'USD'),
    },
    confidence: prediction.confidence,
    factors: prediction.factors,
    competitorPrices: competitors,
    elasticity: prediction.elasticity,
  };
}
</code></pre>

<h2 id="5-revenue-split"><strong>5. Revenue Split Model</strong></h2>

<pre><code class="language-typescript">// Revenue distribution: Platform + Designer + Supplier
interface RevenueSplit {
  totalRevenue: Money;           // Customer pays
  
  supplierPayout: Money;         // Base cost + print = supplier
  platformRevenue: Money;        // Platform commission
  designerRoyalty: Money;        // Designer earnings
  channelFee: Money;             // Marketplace keeps
  paymentFee: Money;             // Payment processor keeps
  sellerProfit: Money;           // Remaining for seller
}

// Royalty models
type RoyaltyModel =
  | { type: 'fixed'; amount: Money }              // Fixed $ per sale
  | { type: 'percentage'; rate: number }           // % of retail price
  | { type: 'profit_share'; rate: number }         // % of profit (after costs)
  | { type: 'tiered'; tiers: RoyaltyTier[] };      // Tiered based on volume

interface RoyaltyTier {
  minSales: number;
  maxSales: number;
  rate: number;                  // Percentage
}

// Example tiered royalty:
// 0-100 sales:   10% of profit
// 101-500 sales: 15% of profit
// 500+ sales:    20% of profit
</code></pre>

<h2 id="6-multi-currency"><strong>6. Multi-currency & Tax</strong></h2>

<pre><code class="language-typescript">// Currency conversion with real-time rates
interface CurrencyService {
  convert(amount: Money, from: Currency, to: Currency): Promise&lt;Money&gt;;
  getRates(base: Currency): Promise&lt;ExchangeRates&gt;;
}

// Tax calculation per jurisdiction
interface TaxService {
  calculateTax(params: TaxParams): Promise&lt;TaxResult&gt;;
}

interface TaxParams {
  subtotal: Money;
  shippingAddress: Address;
  productType: string;
  sellerNexus: string[];         // States/countries where seller has nexus
}

interface TaxResult {
  taxable: boolean;
  rate: number;                  // e.g., 0.0825 for 8.25%
  amount: Money;
  jurisdiction: string;          // "California, US" or "EU VAT"
  breakdown: TaxBreakdown[];
}
</code></pre>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<table>
<thead>
<tr><th>Component</th><th>Key Feature</th><th>Impact</th></tr>
</thead>
<tbody>
<tr><td>Cost Engine</td><td>Multi-factor cost breakdown</td><td>Accurate margin calculation</td></tr>
<tr><td>Print Cost Matrix</td><td>Method × color × area pricing</td><td>Optimal print method selection</td></tr>
<tr><td>Dynamic Pricing</td><td>ML-based price optimization</td><td>Revenue maximization</td></tr>
<tr><td>Revenue Split</td><td>Platform + Designer + Supplier</td><td>Fair compensation model</td></tr>
<tr><td>Multi-currency</td><td>Real-time FX rates</td><td>Global market reach</td></tr>
<tr><td>Tax Engine</td><td>Jurisdiction-based tax calc</td><td>Compliance worldwide</td></tr>
</tbody>
</table>
