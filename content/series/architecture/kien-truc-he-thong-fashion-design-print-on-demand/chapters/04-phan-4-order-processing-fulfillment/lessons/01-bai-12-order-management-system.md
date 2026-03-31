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
