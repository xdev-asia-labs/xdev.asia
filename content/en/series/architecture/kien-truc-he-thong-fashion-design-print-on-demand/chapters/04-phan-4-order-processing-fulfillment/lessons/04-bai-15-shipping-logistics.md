---
id: 019f0b20-a404-7001-e001-f2b8f9000404
title: >-
  Lesson 15: Shipping & Logistics — Carrier Integration, Rate Shopping, Tracking
  & Returns
slug: bai-15-shipping-logistics
description: >-
  Shipping architecture, multi-carrier integration (UPS, FedEx, DHL, USPS), rate
  shopping, real-time tracking, international shipping, customs/duties, returns
  management, consolidated shipping for split orders.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: 'Part 4: Order Processing & Fulfillment'
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: >-
    Fashion Design & Print-on-Demand System Architecture — From Domain Analysis
    to Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7089" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7089)"/>

  <!-- Decorations -->
  <g>
    <circle cx="610" cy="180" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="630" cy="280" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="120" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <polygon points="960.3108891324554,112.5 960.3108891324554,147.5 930,165 899.6891108675446,147.5 899.6891108675446,112.50000000000001 930,95" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ Architecture — Lesson 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 15: Shipping & Logistics — Carrier</tspan>
      <tspan x="60" dy="42">Integration, Rate Shopping, Tracking &</tspan>
      <tspan x="60" dy="42">Returns</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Fashion Design & Print-on-Demand System Architecture — From Domain Analysis to Production</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Order Processing & Fulfillment</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-shipping-architecture"><strong>1. Shipping Architecture</strong></h2>

<pre><code class="language-text">Order Fulfillment → Shipping Pipeline

┌───────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│  Create   │──▶│  Rate    │──▶│  Create  │──▶│ Tracking │
│  Shipment │   │ Shopping │   │  Label   │   │  Events  │
│           │   │          │   │          │   │          │
│ - Address │   │ - UPS    │   │ - PDF    │   │ - Pickup │
│ - Weight  │   │ - FedEx  │   │ - ZPL    │   │ - Transit│
│ - Dims    │   │ - DHL    │   │ - PNG    │   │ - Deliver│
│ - Service │   │ - USPS   │   │          │   │ - Except │
└───────────┘   └──────────┘   └──────────┘   └──────────┘
</code></pre>

<h2 id="2-carrier-integration"><strong>2. Multi-carrier Integration</strong></h2>

<pre><code class="language-typescript">// Abstract shipping interface
interface ShippingService {
  getRates(shipment: ShipmentRequest): Promise&lt;ShippingRate[]&gt;;
  createLabel(shipment: ShipmentRequest, carrier: string, service: string): Promise&lt;ShippingLabel&gt;;
  trackShipment(trackingNumber: string, carrier: string): Promise&lt;TrackingInfo&gt;;
  cancelShipment(shipmentId: string): Promise&lt;void&gt;;
}

interface ShipmentRequest {
  from: Address;                    // Supplier warehouse
  to: Address;                     // Customer address
  
  parcels: Parcel[];
  
  // Service preferences
  serviceLevel: 'economy' | 'standard' | 'express' | 'overnight';
  
  // Special requirements
  signatureRequired: boolean;
  insurance?: Money;
  saturdayDelivery: boolean;
  
  // International
  customs?: CustomsDeclaration;
}

interface Parcel {
  weight: { value: number; unit: 'oz' | 'lb' | 'g' | 'kg' };
  dimensions: { length: number; width: number; height: number; unit: 'in' | 'cm' };
  items: ParcelItem[];
}

interface ShippingRate {
  carrier: string;                  // 'ups', 'fedex', 'usps', 'dhl'
  service: string;                  // 'ground', 'express', '2day'
  serviceName: string;              // 'UPS Ground', 'FedEx 2Day'
  
  rate: Money;
  retailRate: Money;                // Carrier retail rate (before discount)
  discount: number;                 // % discount from volume agreement
  
  estimatedDelivery: {
    minDays: number;
    maxDays: number;
    guaranteedDate?: Date;
  };
  
  // Restrictions
  restrictions: string[];           // 'no_po_box', 'commercial_only'
}

// Rate shopping: Get best rates across all carriers
async function shopRates(
  shipment: ShipmentRequest,
): Promise&lt;ShippingRate[]&gt; {
  // Request rates from all carriers in parallel
  const [upsRates, fedexRates, uspsRates, dhlRates] = await Promise.all([
    upsClient.getRates(shipment).catch(() => []),
    fedexClient.getRates(shipment).catch(() => []),
    uspsClient.getRates(shipment).catch(() => []),
    dhlClient.getRates(shipment).catch(() => []),
  ]);

  const allRates = [...upsRates, ...fedexRates, ...uspsRates, ...dhlRates];

  // Sort by price (cheapest first) within service level
  return allRates
    .filter(r => meetsServiceLevel(r, shipment.serviceLevel))
    .sort((a, b) => a.rate.amount - b.rate.amount);
}
</code></pre>

<h2 id="3-label-creation"><strong>3. Label Creation & Generation</strong></h2>

<pre><code class="language-typescript">interface ShippingLabel {
  labelId: string;
  trackingNumber: string;
  carrier: string;
  service: string;
  
  // Label file
  labelFormat: 'pdf' | 'zpl' | 'png';
  labelUrl: string;
  
  // Rates
  chargedAmount: Money;
  
  // Dates
  shipDate: Date;
  estimatedDelivery: Date;
}

// Batch label creation cho supplier
async function createBatchLabels(
  subOrders: SubOrder[],
  supplierId: string,
): Promise&lt;BatchLabelResult&gt; {
  const supplier = await getSupplier(supplierId);
  
  const labels: ShippingLabel[] = [];
  const errors: LabelError[] = [];

  for (const subOrder of subOrders) {
    try {
      // 1. Calculate best rate
      const shipment = buildShipmentRequest(subOrder, supplier.warehouse);
      const rates = await shopRates(shipment);
      const bestRate = rates[0];

      // 2. Create label
      const label = await createLabel(shipment, bestRate.carrier, bestRate.service);
      
      labels.push(label);

      // 3. Update order with tracking
      await orderService.addTracking(subOrder.id, {
        carrier: label.carrier,
        trackingNumber: label.trackingNumber,
        labelUrl: label.labelUrl,
        estimatedDelivery: label.estimatedDelivery,
      });
    } catch (error) {
      errors.push({
        subOrderId: subOrder.id,
        error: error.message,
      });
    }
  }

  return { labels, errors, totalCost: sumCosts(labels) };
}
</code></pre>

<h2 id="4-tracking"><strong>4. Real-time Tracking</strong></h2>

<pre><code class="language-typescript">// Tracking event polling & webhook processing
interface TrackingService {
  pollTrackingUpdates(): Promise&lt;void&gt;;            // Scheduled cron job
  processTrackingWebhook(webhook: TrackingWebhook): Promise&lt;void&gt;;
}

interface TrackingEvent {
  timestamp: Date;
  status: TrackingStatus;
  location: {
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  description: string;
  carrier: string;
}

type TrackingStatus =
  | 'label_created'
  | 'picked_up'
  | 'in_transit'
  | 'out_for_delivery'
  | 'delivered'
  | 'delivery_attempted'
  | 'exception'
  | 'returned_to_sender';

// Customer notification based on tracking events
async function processTrackingEvent(event: TrackingEvent, orderId: string): Promise&lt;void&gt; {
  // Update order status
  const statusMap: Partial&lt;Record&lt;TrackingStatus, OrderStatus&gt;&gt; = {
    picked_up: OrderStatus.SHIPPED,
    in_transit: OrderStatus.IN_TRANSIT,
    out_for_delivery: OrderStatus.OUT_FOR_DELIVERY,
    delivered: OrderStatus.DELIVERED,
  };

  const newStatus = statusMap[event.status];
  if (newStatus) {
    await orderService.updateStatus(orderId, newStatus);
  }

  // Send customer notification for key events
  const notifyEvents: TrackingStatus[] = [
    'picked_up', 'out_for_delivery', 'delivered', 'exception',
  ];

  if (notifyEvents.includes(event.status)) {
    await notificationService.sendTrackingUpdate(orderId, event);
  }

  // Handle exceptions
  if (event.status === 'exception') {
    await handleShippingException(orderId, event);
  }
}
</code></pre>

<h2 id="5-international"><strong>5. International Shipping & Customs</strong></h2>

<pre><code class="language-typescript">interface CustomsDeclaration {
  // Sender & recipient
  senderTaxId?: string;
  recipientTaxId?: string;
  
  // Contents
  contentType: 'merchandise' | 'gift' | 'sample' | 'return';
  
  items: CustomsItem[];
  
  // Duties payment
  dutiesPayment: 'sender' | 'recipient' | 'third_party';  // DDP / DAP
  
  // Incoterms
  incoterms: 'DDP' | 'DAP' | 'DDU';
}

interface CustomsItem {
  description: string;              // "Cotton T-shirt with printed design"
  hsCode: string;                   // HS tariff code: 6109.10 (T-shirts, knitted)
  quantity: number;
  unitValue: Money;
  weight: Weight;
  countryOfOrigin: string;          // Country where product was manufactured
  countryOfManufacture: string;
}

// HS Code mapping for common POD products
const HS_CODES: Record&lt;string, string&gt; = {
  tshirt_cotton: '6109.10.0012',      // T-shirts, singlets, cotton, knitted
  tshirt_synthetic: '6109.90.1007',    // T-shirts, man-made fibers
  hoodie: '6110.20.2079',             // Pullovers, cotton, knitted
  mug_ceramic: '6912.00.4400',        // Ceramic tableware
  phone_case: '3926.90.9996',         // Articles of plastics
  tote_bag_cotton: '4202.92.1500',    // Travel bags, cotton
  poster: '4911.91.2040',             // Printed pictures, designs
};

// Calculate import duties & taxes
async function calculateDuties(
  shipment: ShipmentRequest,
  destination: string,
): Promise&lt;DutiesEstimate&gt; {
  // Use duty calculator API (e.g., Zonos, Avalara Cross-Border)
  const estimate = await dutiesCalculator.calculate({
    items: shipment.customs!.items,
    destination,
    shippingCost: shipment.shippingCost,
  });

  return {
    dutyAmount: estimate.duty,
    taxAmount: estimate.tax,           // VAT/GST
    totalLandedCost: estimate.landedCost,
    deMinimisMet: estimate.duty.amount === 0,  // Under duty threshold
  };
}
</code></pre>

<h2 id="6-returns"><strong>6. Returns Management</strong></h2>

<pre><code class="language-typescript">interface ReturnService {
  createReturn(request: ReturnRequest): Promise&lt;ReturnAuthorization&gt;;
  processReturn(returnId: string): Promise&lt;void&gt;;
}

interface ReturnRequest {
  orderId: string;
  reason: ReturnReason;
  items: Array<{ sku: string; quantity: number }>;
  customerNote: string;
  photos?: string[];                   // Photos of defect/issue
}

type ReturnReason =
  | 'wrong_size'                       // → Offer exchange
  | 'print_quality'                    // → Full refund + no return needed (POD = no restock)
  | 'wrong_item'                       // → Reship correct item
  | 'damaged_in_transit'               // → Full refund or reship
  | 'not_as_described'                 // → Review + partial/full refund
  | 'changed_mind';                    // → Policy dependent

// POD-specific: No physical return needed for print quality issues
// (Item can't be restocked — it's custom printed)
async function handleReturn(request: ReturnRequest): Promise&lt;ReturnResult&gt; {
  const policy = getReturnPolicy(request.reason);

  switch (policy.action) {
    case 'refund_no_return':
      // Print defect → refund immediately, no need to ship back
      await paymentService.refund(request.orderId, policy.refundAmount);
      return { action: 'refunded', requiresReturn: false };

    case 'reship':
      // Wrong item → reship correct one
      await orderService.createReship(request.orderId, request.items);
      return { action: 'reshipped', requiresReturn: false };

    case 'exchange':
      // Wrong size → create exchange order
      return { action: 'exchange_offered', requiresReturn: true };

    default:
      return { action: 'review_needed', requiresReturn: false };
  }
}
</code></pre>

<h2 id="7-tong-ket"><strong>7. Summary</strong></h2>

<table>
<thead>
<tr><th>Component</th><th>Key Features</th><th>POD Specific</th></tr>
</thead>
<tbody>
<tr><td>Rate Shopping</td><td>Multi-carrier parallel quotes</td><td>Supplier warehouse → customer direct</td></tr>
<tr><td>Label Creation</td><td>Batch labels for suppliers</td><td>Supplier prints & ships directly</td></tr>
<tr><td>Tracking</td><td>Real-time webhooks + polling</td><td>Status sync back to sales channels</td></tr>
<tr><td>International</td><td>HS codes, duties calculator</td><td>POD product HS code mapping</td></tr>
<tr><td>Returns</td><td>No-return refund for print defects</td><td>Custom items can't be restocked</td></tr>
</tbody>
</table>
