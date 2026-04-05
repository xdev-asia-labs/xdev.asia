---
id: 019f0b20-a403-7001-e001-f2b8f9000403
title: 'Bài 14: Supplier Network & Routing Engine — Multi-supplier, Quality Control & Fallback'
slug: bai-14-supplier-network-routing-engine
description: >-
  Kiến trúc supplier network, routing engine (geo-based, cost-based, quality-based),
  multi-supplier orchestration, quality control & scoring, fallback strategy,
  supplier onboarding, SLA monitoring, capacity planning.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: Order Processing & Fulfillment"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9668" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9668)"/>

  <!-- Decorations -->
  <g>
    <circle cx="810" cy="280" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1020" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="730" cy="100" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="940" cy="270" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="180" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="180" x2="1100" y2="260" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="210" x2="1050" y2="280" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1010.3108891324554,162.5 1010.3108891324554,197.5 980,215 949.6891108675446,197.5 949.6891108675446,162.5 980,145" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ Kiến trúc — Bài 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 14: Supplier Network &amp; Routing Engine</tspan>
      <tspan x="60" dy="42">— Multi-supplier, Quality Control &amp;</tspan>
      <tspan x="60" dy="42">Fallback</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kiến trúc Hệ thống Fashion Design &amp; Print-on-Demand — Từ Domain Analysis đến Production</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Order Processing &amp; Fulfillment</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-supplier-network"><strong>1. Supplier Network Architecture</strong></h2>

<pre><code class="language-text">Global Supplier Network
┌─────────────────────────────────────────────────────┐
│                   Routing Engine                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│  │   Geo    │ │   Cost   │ │ Quality  │            │
│  │ Router   │ │ Router   │ │ Router   │            │
│  └────┬─────┘ └────┬─────┘ └────┬─────┘            │
│       └─────────────┼───────────┘                    │
│                     ▼                                │
│            ┌────────────────┐                        │
│            │  Score + Rank  │                        │
│            └───────┬────────┘                        │
└────────────────────┼────────────────────────────────┘
                     │
    ┌────────────────┼────────────────────────┐
    ▼                ▼                ▼       ▼
┌────────┐    ┌────────┐    ┌────────┐  ┌────────┐
│US East │    │US West │    │EU      │  │APAC    │
│Supplier│    │Supplier│    │Supplier│  │Supplier│
│        │    │        │    │        │  │        │
│DTG,DTF │    │DTG,Sub │    │DTG,DTF │  │DTG,Sub │
│T,Hoodie│    │T,AOP   │    │T,Hoodie│  │T,Mug   │
└────────┘    └────────┘    └────────┘  └────────┘
</code></pre>

<h2 id="2-routing-engine"><strong>2. Supplier Routing Engine</strong></h2>

<pre><code class="language-typescript">interface SupplierRouter {
  selectBestSupplier(
    order: Order,
    items: OrderItem[],
    shippingAddress: Address,
  ): Promise&lt;SupplierSelection&gt;;
}

interface SupplierSelection {
  supplierId: string;
  score: number;                    // 0-100 composite score
  factors: RoutingFactor[];
  estimatedCost: Money;
  estimatedProductionDays: number;
  estimatedShippingDays: number;
  fallbackSuppliers: string[];      // Backup options
}

interface Supplier {
  id: string;
  name: string;
  region: string[];                 // ['us-east', 'us-west']
  
  // Capabilities
  supportedProducts: string[];      // ['tshirt', 'hoodie', 'mug']
  supportedMethods: PrintMethod[];  // ['dtg', 'dtf', 'sublimation']
  
  // Performance metrics
  qualityScore: number;             // 0-100 (based on QC results)
  onTimeRate: number;               // 0-1.0
  defectRate: number;               // 0-1.0 (lower = better)
  avgProductionDays: number;
  
  // Capacity
  dailyCapacity: number;            // Max items per day
  currentUtilization: number;       // 0-1.0
  
  // Pricing
  costMatrix: CostMatrix;
  
  // API integration
  apiConfig: SupplierAPIConfig;
  
  // SLA
  sla: {
    maxProductionDays: number;
    maxDefectRate: number;
    guaranteedCapacity: number;
  };
  
  status: 'active' | 'paused' | 'onboarding' | 'suspended';
}

async function selectBestSupplier(
  items: OrderItem[],
  shippingAddress: Address,
  preferences: RoutingPreferences,
): Promise&lt;SupplierSelection&gt; {
  // 1. Filter eligible suppliers
  const eligible = suppliers.filter(s => 
    s.status === 'active' &&
    items.every(item => 
      s.supportedProducts.includes(item.productType) &&
      s.supportedMethods.includes(item.printMethod)
    ) &&
    s.currentUtilization < 0.95  // Not at capacity
  );

  // 2. Score each supplier
  const scored = eligible.map(supplier => {
    const geoScore = calculateGeoScore(supplier, shippingAddress);
    const costScore = calculateCostScore(supplier, items);
    const qualityScore = supplier.qualityScore;
    const capacityScore = (1 - supplier.currentUtilization) * 100;
    const reliabilityScore = supplier.onTimeRate * 100;

    // Weighted composite score
    const weights = preferences.optimize === 'cost'
      ? { geo: 0.15, cost: 0.40, quality: 0.20, capacity: 0.10, reliability: 0.15 }
      : preferences.optimize === 'speed'
      ? { geo: 0.35, cost: 0.10, quality: 0.20, capacity: 0.20, reliability: 0.15 }
      : { geo: 0.20, cost: 0.20, quality: 0.25, capacity: 0.15, reliability: 0.20 }; // balanced

    const totalScore = 
      geoScore * weights.geo +
      costScore * weights.cost +
      qualityScore * weights.quality +
      capacityScore * weights.capacity +
      reliabilityScore * weights.reliability;

    return {
      supplier,
      score: totalScore,
      factors: [
        { name: 'Geo proximity', score: geoScore },
        { name: 'Cost', score: costScore },
        { name: 'Quality', score: qualityScore },
        { name: 'Capacity', score: capacityScore },
        { name: 'Reliability', score: reliabilityScore },
      ],
    };
  });

  // 3. Sort by score (highest first)
  scored.sort((a, b) => b.score - a.score);

  const best = scored[0];
  return {
    supplierId: best.supplier.id,
    score: best.score,
    factors: best.factors,
    estimatedCost: calculateSupplierCost(best.supplier, items),
    estimatedProductionDays: best.supplier.avgProductionDays,
    estimatedShippingDays: estimateShipping(best.supplier, shippingAddress),
    fallbackSuppliers: scored.slice(1, 4).map(s => s.supplier.id),
  };
}
</code></pre>

<h2 id="3-quality-control"><strong>3. Quality Control & Scoring</strong></h2>

<pre><code class="language-typescript">// Track supplier quality over time
interface QualityControlService {
  recordInspection(inspection: QCInspection): Promise&lt;void&gt;;
  getSupplierScore(supplierId: string): Promise&lt;QualityScore&gt;;
  flagSupplier(supplierId: string, reason: string): Promise&lt;void&gt;;
}

interface QCInspection {
  orderId: string;
  supplierId: string;
  inspectedAt: Date;
  
  // Inspection results
  printQuality: QualityRating;         // Color accuracy, sharpness
  alignmentAccuracy: QualityRating;    // Design placement
  garmentQuality: QualityRating;       // Fabric, stitching
  packagingQuality: QualityRating;
  
  // Defects found
  defects: Defect[];
  
  // Overall
  passed: boolean;
  notes: string;
  
  // Customer feedback (post-delivery)
  customerRating?: number;             // 1-5 stars
  customerFeedback?: string;
}

type QualityRating = 1 | 2 | 3 | 4 | 5;

interface Defect {
  type: DefectType;
  severity: 'minor' | 'major' | 'critical';
  description: string;
  imageUrl?: string;                   // Photo of defect
}

type DefectType =
  | 'color_shift'              // Colors don't match design
  | 'misalignment'             // Design not centered
  | 'smearing'                 // Ink smear
  | 'fading'                   // Premature fading
  | 'cracking'                 // Print cracking
  | 'ghosting'                 // Double image
  | 'wrong_product'            // Wrong garment/size/color
  | 'stain'                    // Stain on garment
  | 'packaging_damage';        // Damaged in packaging

// Update supplier quality score (rolling average)
async function updateSupplierScore(supplierId: string): Promise&lt;number&gt; {
  const recentInspections = await getInspections(supplierId, {
    limit: 100,
    period: '90d',
  });

  const passRate = recentInspections.filter(i => i.passed).length / recentInspections.length;
  const avgQuality = average(recentInspections.map(i => 
    (i.printQuality + i.alignmentAccuracy + i.garmentQuality + i.packagingQuality) / 4
  ));
  const defectRate = recentInspections.reduce(
    (sum, i) => sum + i.defects.length, 0
  ) / recentInspections.length;

  const score = (passRate * 40) + (avgQuality / 5 * 40) + ((1 - Math.min(defectRate, 1)) * 20);

  // Auto-suspend if score drops below threshold
  if (score < 50) {
    await flagSupplier(supplierId, `Quality score dropped to ${score.toFixed(1)}`);
  }

  return score;
}
</code></pre>

<h2 id="4-fallback-strategy"><strong>4. Fallback & Retry Strategy</strong></h2>

<pre><code class="language-typescript">// When supplier fails, auto-reroute to fallback
async function handleSupplierFailure(
  subOrder: SubOrder,
  failureReason: string,
): Promise&lt;SubOrder&gt; {
  const selection = await router.selectBestSupplier(
    subOrder.items,
    subOrder.shippingAddress,
    { exclude: [subOrder.supplierId] },  // Exclude failed supplier
  );

  if (!selection) {
    // No alternative supplier available
    await alertService.critical({
      type: 'no_supplier_available',
      orderId: subOrder.parentOrderId,
      reason: failureReason,
    });
    throw new NoSupplierAvailableError();
  }

  // Re-route to fallback supplier
  const updatedSubOrder = {
    ...subOrder,
    supplierId: selection.supplierId,
    status: OrderStatus.SUBMITTED_TO_SUPPLIER,
    rerouteHistory: [
      ...(subOrder.rerouteHistory || []),
      {
        fromSupplier: subOrder.supplierId,
        toSupplier: selection.supplierId,
        reason: failureReason,
        timestamp: new Date(),
      },
    ],
  };

  // Submit to new supplier
  await supplierService.submitOrder(updatedSubOrder);

  // Notify customer about delay
  await notificationService.sendDelayNotification(subOrder.parentOrderId, {
    reason: 'Production issue — order rerouted to alternative facility',
    newEstimatedDelivery: calculateNewETA(selection),
  });

  return updatedSubOrder;
}
</code></pre>

<h2 id="5-supplier-api"><strong>5. Supplier API Integration</strong></h2>

<pre><code class="language-typescript">// Abstract supplier API — mỗi supplier có API khác nhau
interface SupplierAPI {
  submitOrder(order: SupplierOrderRequest): Promise&lt;SupplierOrderResponse&gt;;
  getOrderStatus(supplierOrderId: string): Promise&lt;SupplierOrderStatus&gt;;
  cancelOrder(supplierOrderId: string): Promise&lt;void&gt;;
  getCatalog(): Promise&lt;SupplierProduct[]&gt;;
  getShippingRates(params: ShippingRateParams): Promise&lt;ShippingRate[]&gt;;
}

// Printful API adapter
class PrintfulAdapter implements SupplierAPI {
  async submitOrder(order: SupplierOrderRequest): Promise&lt;SupplierOrderResponse&gt; {
    const printfulOrder = {
      recipient: {
        name: order.shippingAddress.name,
        address1: order.shippingAddress.line1,
        city: order.shippingAddress.city,
        state_code: order.shippingAddress.state,
        country_code: order.shippingAddress.country,
        zip: order.shippingAddress.postalCode,
      },
      items: order.items.map(item => ({
        sync_variant_id: item.supplierVariantId,
        quantity: item.quantity,
        files: [{
          type: 'default',
          url: item.printFileUrl,      // Our CDN URL for print file
        }],
      })),
    };

    const response = await this.client.post('/orders', printfulOrder);
    
    return {
      supplierOrderId: response.data.result.id.toString(),
      status: 'submitted',
      estimatedShipDate: response.data.result.estimated_fulfillment,
    };
  }
}
</code></pre>

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<table>
<thead>
<tr><th>Component</th><th>Strategy</th><th>Key Metric</th></tr>
</thead>
<tbody>
<tr><td>Routing Engine</td><td>Weighted multi-factor scoring</td><td>Geo + Cost + Quality + Capacity</td></tr>
<tr><td>Quality Control</td><td>Rolling 90-day inspection scoring</td><td>Pass rate, defect rate, customer rating</td></tr>
<tr><td>Fallback</td><td>Auto-reroute to ranked alternatives</td><td>Reroute time, success rate</td></tr>
<tr><td>Capacity Planning</td><td>Real-time utilization monitoring</td><td>Utilization %, daily capacity</td></tr>
<tr><td>Supplier API</td><td>Adapter pattern per supplier</td><td>API compatibility, sync reliability</td></tr>
</tbody>
</table>
