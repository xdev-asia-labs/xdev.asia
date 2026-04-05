---
id: 019f0b20-a401-7001-e001-f2b8f9000401
title: 'Bài 12: Order Management System — State Machine, Saga Pattern & Order Orchestration'
slug: bai-12-order-management-system
description: >-
  Kiến trúc OMS cho POD, order state machine, Saga pattern cho distributed transactions,
  split orders (multi-supplier), order orchestration, compensation logic,
  order event sourcing, idempotency.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 4: Order Processing & Fulfillment"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6230" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6230)"/>

  <!-- Decorations -->
  <g>
    <circle cx="737" cy="241" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="874" cy="138" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1011" cy="35" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="648" cy="192" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="785" cy="89" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="51" x2="1100" y2="131" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="81" x2="1050" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1023.5166604983954,188 1023.5166604983954,214 1001,227 978.4833395016046,214 978.4833395016046,188 1001,175" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ Kiến trúc — Bài 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 12: Order Management System — State</tspan>
      <tspan x="60" dy="42">Machine, Saga Pattern &amp; Order</tspan>
      <tspan x="60" dy="42">Orchestration</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kiến trúc Hệ thống Fashion Design &amp; Print-on-Demand — Từ Domain Analysis đến Production</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Order Processing &amp; Fulfillment</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-order-lifecycle"><strong>1. POD Order Lifecycle</strong></h2>

<pre><code class="language-text">POD Order Flow (không có inventory — produce on demand)

Customer                    POD Platform                   Supplier/Printer
   │                            │                               │
   │  Place Order               │                               │
   ├───────────────────────────▶│                               │
   │                            │  Validate + Payment           │
   │                            │──────────┐                    │
   │                            │          │                    │
   │                            │◀─────────┘                    │
   │                            │                               │
   │                            │  Prepare print files          │
   │                            │──────────┐                    │
   │                            │          │ (render hi-res,    │
   │                            │◀─────────┘  color convert)    │
   │                            │                               │
   │                            │  Submit to Supplier           │
   │                            ├──────────────────────────────▶│
   │                            │                               │
   │                            │         Printing...           │
   │                            │           │                   │
   │                            │  Status: In Production        │
   │                            │◀──────────────────────────────┤
   │  "Your order is being      │                               │
   │   printed!"                │         Quality Check          │
   │◀───────────────────────────┤           │                   │
   │                            │  Status: Shipped + Tracking   │
   │                            │◀──────────────────────────────┤
   │  Tracking notification     │                               │
   │◀───────────────────────────┤                               │
   │                            │                               │
   │  Delivered                 │                               │
   │◀───────────────────────────┤                               │
</code></pre>

<h2 id="2-state-machine"><strong>2. Order State Machine</strong></h2>

<pre><code class="language-typescript">// Order states specific to POD workflow
enum OrderStatus {
  // Checkout phase
  PENDING_PAYMENT = 'pending_payment',
  PAYMENT_FAILED = 'payment_failed',
  PAID = 'paid',
  
  // Processing phase
  PROCESSING = 'processing',           // Preparing print files
  FILE_READY = 'file_ready',           // Print-ready files generated
  
  // Production phase (at supplier)
  SUBMITTED_TO_SUPPLIER = 'submitted_to_supplier',
  IN_PRODUCTION = 'in_production',     // Printing/pressing
  QUALITY_CHECK = 'quality_check',     // QC at supplier
  PRODUCTION_FAILED = 'production_failed',  // Print defect
  
  // Shipping phase
  PACKED = 'packed',
  SHIPPED = 'shipped',
  IN_TRANSIT = 'in_transit',
  OUT_FOR_DELIVERY = 'out_for_delivery',
  DELIVERED = 'delivered',
  
  // Exception states
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded',
  RETURN_REQUESTED = 'return_requested',
  RETURNED = 'returned',
}

// Valid state transitions
const ORDER_TRANSITIONS: Record&lt;OrderStatus, OrderStatus[]&gt; = {
  [OrderStatus.PENDING_PAYMENT]: [OrderStatus.PAID, OrderStatus.PAYMENT_FAILED, OrderStatus.CANCELLED],
  [OrderStatus.PAYMENT_FAILED]: [OrderStatus.PENDING_PAYMENT, OrderStatus.CANCELLED],
  [OrderStatus.PAID]: [OrderStatus.PROCESSING, OrderStatus.CANCELLED],
  [OrderStatus.PROCESSING]: [OrderStatus.FILE_READY, OrderStatus.CANCELLED],
  [OrderStatus.FILE_READY]: [OrderStatus.SUBMITTED_TO_SUPPLIER],
  [OrderStatus.SUBMITTED_TO_SUPPLIER]: [OrderStatus.IN_PRODUCTION, OrderStatus.PRODUCTION_FAILED],
  [OrderStatus.IN_PRODUCTION]: [OrderStatus.QUALITY_CHECK, OrderStatus.PRODUCTION_FAILED],
  [OrderStatus.QUALITY_CHECK]: [OrderStatus.PACKED, OrderStatus.PRODUCTION_FAILED],
  [OrderStatus.PRODUCTION_FAILED]: [OrderStatus.SUBMITTED_TO_SUPPLIER, OrderStatus.REFUNDED],  // Retry or refund
  [OrderStatus.PACKED]: [OrderStatus.SHIPPED],
  [OrderStatus.SHIPPED]: [OrderStatus.IN_TRANSIT],
  [OrderStatus.IN_TRANSIT]: [OrderStatus.OUT_FOR_DELIVERY, OrderStatus.DELIVERED],
  [OrderStatus.OUT_FOR_DELIVERY]: [OrderStatus.DELIVERED],
  [OrderStatus.DELIVERED]: [OrderStatus.RETURN_REQUESTED],
  [OrderStatus.RETURN_REQUESTED]: [OrderStatus.RETURNED, OrderStatus.DELIVERED],
  [OrderStatus.RETURNED]: [OrderStatus.REFUNDED],
  [OrderStatus.CANCELLED]: [OrderStatus.REFUNDED],
  [OrderStatus.REFUNDED]: [],
};

class OrderStateMachine {
  transition(order: Order, newStatus: OrderStatus): Order {
    const allowedTransitions = ORDER_TRANSITIONS[order.status];
    
    if (!allowedTransitions.includes(newStatus)) {
      throw new InvalidStateTransitionError(
        `Cannot transition from ${order.status} to ${newStatus}`
      );
    }

    return {
      ...order,
      status: newStatus,
      statusHistory: [
        ...order.statusHistory,
        { status: newStatus, timestamp: new Date(), actor: 'system' },
      ],
    };
  }
}
</code></pre>

<h2 id="3-saga-pattern"><strong>3. Saga Pattern — Order Orchestration</strong></h2>

<pre><code class="language-typescript">// Orchestration Saga cho order processing
// Mỗi step có compensation (rollback) nếu step sau fail

interface OrderSaga {
  steps: SagaStep[];
  execute(order: Order): Promise&lt;SagaResult&gt;;
}

interface SagaStep {
  name: string;
  execute: (context: SagaContext) => Promise&lt;void&gt;;
  compensate: (context: SagaContext) => Promise&lt;void&gt;;  // Rollback
}

const orderSagaSteps: SagaStep[] = [
  {
    name: 'validate_order',
    execute: async (ctx) => {
      await validateOrderItems(ctx.order);
      await checkSupplierAvailability(ctx.order);
    },
    compensate: async (ctx) => {
      // Nothing to compensate
    },
  },
  {
    name: 'process_payment',
    execute: async (ctx) => {
      ctx.paymentResult = await paymentService.charge(ctx.order);
    },
    compensate: async (ctx) => {
      // Refund payment
      await paymentService.refund(ctx.paymentResult.chargeId, ctx.order.total);
    },
  },
  {
    name: 'generate_print_files',
    execute: async (ctx) => {
      ctx.printFiles = await printFileService.generate(ctx.order);
    },
    compensate: async (ctx) => {
      await printFileService.cleanup(ctx.printFiles);
    },
  },
  {
    name: 'submit_to_supplier',
    execute: async (ctx) => {
      ctx.supplierOrder = await supplierService.submitOrder(
        ctx.order,
        ctx.printFiles,
      );
    },
    compensate: async (ctx) => {
      await supplierService.cancelOrder(ctx.supplierOrder.id);
    },
  },
  {
    name: 'notify_customer',
    execute: async (ctx) => {
      await notificationService.sendOrderConfirmation(ctx.order);
    },
    compensate: async (ctx) => {
      await notificationService.sendOrderCancellation(ctx.order);
    },
  },
];

// Saga executor with automatic compensation on failure
class SagaExecutor {
  async execute(steps: SagaStep[], context: SagaContext): Promise&lt;SagaResult&gt; {
    const completedSteps: SagaStep[] = [];

    for (const step of steps) {
      try {
        await step.execute(context);
        completedSteps.push(step);
      } catch (error) {
        // Compensate all completed steps in reverse order
        for (const completedStep of completedSteps.reverse()) {
          try {
            await completedStep.compensate(context);
          } catch (compensateError) {
            // Log compensation failure — needs manual intervention
            await alertService.criticalAlert({
              type: 'saga_compensation_failed',
              step: completedStep.name,
              orderId: context.order.id,
              error: compensateError.message,
            });
          }
        }

        return { success: false, failedStep: step.name, error: error.message };
      }
    }

    return { success: true };
  }
}
</code></pre>

<h2 id="4-split-orders"><strong>4. Split Orders (Multi-supplier)</strong></h2>

<pre><code class="language-typescript">// Khi 1 order có items từ nhiều suppliers → split thành sub-orders
interface OrderSplitter {
  split(order: Order): SubOrder[];
}

interface SubOrder {
  id: string;
  parentOrderId: string;
  supplierId: string;
  items: OrderItem[];
  status: OrderStatus;
  
  // Supplier-specific
  supplierOrderId?: string;    // ID từ supplier API
  shippingMethod: string;
  trackingNumber?: string;
}

function splitOrderBySupplier(order: Order): SubOrder[] {
  // Group items by optimal supplier
  const supplierGroups = new Map&lt;string, OrderItem[]&gt;();

  for (const item of order.items) {
    const bestSupplier = selectBestSupplier(item, order.shippingAddress);
    const group = supplierGroups.get(bestSupplier.id) || [];
    group.push(item);
    supplierGroups.set(bestSupplier.id, group);
  }

  return Array.from(supplierGroups.entries()).map(([supplierId, items]) => ({
    id: generateSubOrderId(),
    parentOrderId: order.id,
    supplierId,
    items,
    status: OrderStatus.PROCESSING,
    shippingMethod: selectShippingMethod(supplierId, order.shippingAddress),
  }));
}

// Parent order status = worst child status
function aggregateOrderStatus(subOrders: SubOrder[]): OrderStatus {
  const priorities = [
    OrderStatus.PRODUCTION_FAILED,    // Highest priority (worst)
    OrderStatus.PROCESSING,
    OrderStatus.FILE_READY,
    OrderStatus.SUBMITTED_TO_SUPPLIER,
    OrderStatus.IN_PRODUCTION,
    OrderStatus.QUALITY_CHECK,
    OrderStatus.PACKED,
    OrderStatus.SHIPPED,
    OrderStatus.IN_TRANSIT,
    OrderStatus.DELIVERED,            // Lowest priority (best)
  ];

  let worstIndex = priorities.length - 1;
  for (const sub of subOrders) {
    const idx = priorities.indexOf(sub.status);
    if (idx >= 0 && idx < worstIndex) {
      worstIndex = idx;
    }
  }

  return priorities[worstIndex];
}
</code></pre>

<h2 id="5-event-sourcing"><strong>5. Order Event Sourcing</strong></h2>

<pre><code class="language-typescript">// Mọi thay đổi order được lưu dưới dạng events
interface OrderEvent {
  eventId: string;
  orderId: string;
  eventType: string;
  data: Record&lt;string, unknown&gt;;
  timestamp: Date;
  actor: string;                     // 'system', 'customer', 'admin', 'supplier'
  version: number;                   // For optimistic concurrency
}

type OrderEventType =
  | 'OrderCreated'
  | 'PaymentReceived'
  | 'PrintFileGenerated'
  | 'SubmittedToSupplier'
  | 'ProductionStarted'
  | 'QualityCheckPassed'
  | 'QualityCheckFailed'
  | 'Shipped'
  | 'TrackingUpdated'
  | 'Delivered'
  | 'CancelRequested'
  | 'Cancelled'
  | 'RefundIssued'
  | 'ReturnRequested';

// Rebuild order state from events
function rehydrateOrder(events: OrderEvent[]): Order {
  let order: Partial<Order> = {};

  for (const event of events) {
    switch (event.eventType) {
      case 'OrderCreated':
        order = { ...event.data, status: OrderStatus.PENDING_PAYMENT };
        break;
      case 'PaymentReceived':
        order.status = OrderStatus.PAID;
        order.paymentId = event.data.paymentId as string;
        break;
      case 'Shipped':
        order.status = OrderStatus.SHIPPED;
        order.trackingNumber = event.data.trackingNumber as string;
        break;
      // ... handle each event type
    }
  }

  return order as Order;
}
</code></pre>

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<table>
<thead>
<tr><th>Pattern</th><th>Purpose</th><th>POD Context</th></tr>
</thead>
<tbody>
<tr><td>State Machine</td><td>Enforce valid order transitions</td><td>15+ states specific to POD production flow</td></tr>
<tr><td>Saga Pattern</td><td>Distributed transaction coordination</td><td>Payment → PrintFile → Supplier → Notify with rollback</td></tr>
<tr><td>Split Orders</td><td>Multi-supplier fulfillment</td><td>1 customer order → N supplier sub-orders</td></tr>
<tr><td>Event Sourcing</td><td>Complete audit trail</td><td>Reconstruct order state from event history</td></tr>
<tr><td>Idempotency</td><td>Handle duplicate webhooks/retries</td><td>Idempotency key per operation</td></tr>
</tbody>
</table>
