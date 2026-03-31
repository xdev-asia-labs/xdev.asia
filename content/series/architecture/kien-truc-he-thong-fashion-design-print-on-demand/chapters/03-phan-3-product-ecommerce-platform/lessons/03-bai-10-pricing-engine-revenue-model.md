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
