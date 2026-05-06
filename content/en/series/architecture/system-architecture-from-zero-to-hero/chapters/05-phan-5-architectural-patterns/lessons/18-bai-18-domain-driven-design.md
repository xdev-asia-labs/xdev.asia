---
id: 019d8a21-c110-7001-d001-e1f2a3b4c518
title: 'Lesson 18: Domain-Driven Design for System Architecture'
slug: bai-18-domain-driven-design-cho-system-architecture
description: >-
  DDD strategic patterns: Bounded Context, Ubiquitous Language, Context Map. DDD
  tactical patterns: Entity, Value Object, Aggregate, Repository. Apply DDD to
  define service boundaries in microservices.
duration_minutes: 150
is_free: false
video_url: null
sort_order: 18
section_title: 'Part 5: Architectural Patterns'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'System Architecture: From Zero to Hero'
  slug: system-architecture-from-zero-to-hero
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9755" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9755)"/>

  <!-- Decorations -->
  <g>
    <circle cx="870" cy="40" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="910" cy="220" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="50" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="950" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="60" x2="1100" y2="140" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="90" x2="1050" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1040.3108891324553,192.5 1040.3108891324553,227.5 1010,245 979.6891108675446,227.5 979.6891108675446,192.5 1010,175" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ Architecture — Lesson 18</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 18: Domain-Driven Design for System</tspan>
      <tspan x="60" dy="42">Architecture</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Architectural Patterns</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

DDD (Domain-Driven Design) is a software design method that focuses on the **business domain**. In system architecture, DDD helps define **service boundaries** — the most difficult question when designing microservices.

---

## 1. Strategic Patterns

### 1.1 Ubiquitous Language

```
Vấn đề: Developers và Business nói khác ngôn ngữ

  Business: "Khi khách hàng đặt hàng..."
  Developer: "Khi user tạo order record..."

  Business: "Sản phẩm hết hàng"
  Developer: "Product inventory count = 0"

Ubiquitous Language:
  Thống nhất ngôn ngữ giữa dev và business
  Dùng CÙNG thuật ngữ trong code, docs, meetings

  // Tốt - dùng domain language
  class Order {
    placeOrder()
    cancelOrder()
    shipOrder()
  }

  // Xấu - dùng technical language
  class OrderDAO {
    insertRecord()
    deleteRecord()
    updateStatus()
  }
```

### 1.2 Bounded Context

```
"Product" nghĩa khác nhau tùy context:

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│ Catalog Context │  │ Inventory Context│  │ Pricing Context │
│                 │  │                  │  │                 │
│ Product:        │  │ Product:         │  │ Product:        │
│ - name          │  │ - SKU            │  │ - base_price    │
│ - description   │  │ - quantity       │  │ - discount      │
│ - images        │  │ - warehouse      │  │ - margin        │
│ - categories    │  │ - reorder_level  │  │ - tax_rate      │
│ - reviews       │  │ - supplier       │  │ - currency      │
└─────────────────┘  └─────────────────┘  └─────────────────┘

Mỗi Bounded Context:
  - Có MODEL riêng cho cùng concept
  - Có NGÔN NGỮ riêng
  - Có DATABASE riêng
  → Tương ứng 1 Microservice!
```

### 1.3 Context Map

```
Các Bounded Contexts quan hệ thế nào?

┌───────────┐         ┌───────────┐
│  Catalog  │◄─ ACL ─►│ Inventory │
│  Context  │         │  Context  │
└─────┬─────┘         └───────────┘
      │
  Conformist
      │
┌─────▼─────┐         ┌───────────┐
│  Order    │──OHS/PL─►│  Payment  │
│  Context  │         │  Context  │
└─────┬─────┘         └───────────┘
      │
  Partnership
      │
┌─────▼─────┐
│ Shipping  │
│  Context  │
└───────────┘

Relationships:
  - Partnership: Hai teams hợp tác chặt
  - Customer-Supplier: Downstream phụ thuộc Upstream
  - Conformist: Downstream chấp nhận model của Upstream
  - ACL (Anti-Corruption Layer): Translate giữa models
  - OHS (Open Host Service): Upstream cung cấp API chuẩn
  - PL (Published Language): Schema chung (JSON, Protobuf)
```

---

## 2. Tactical Patterns

### 2.1 Entity vs Value Object

```
Entity: Có identity, thay đổi theo thời gian
  class Order {
    id: UUID          // Identity
    status: string    // Thay đổi
    items: OrderItem[]
  }
  // 2 Orders khác nhau vì ID khác nhau

Value Object: Không có identity, immutable
  class Money {
    amount: number
    currency: string
  }
  // Money(100, "VND") == Money(100, "VND")
  // So sánh bằng VALUE, không phải reference

  class Address {
    street: string
    city: string
    country: string
  }
```

### 2.2 Aggregates

```
Aggregate = cluster of entities + value objects
Có 1 Aggregate Root (entry point)
Bên ngoài chỉ access qua Aggregate Root

┌──────────────────────────────────┐
│ Order Aggregate                  │
│                                  │
│ ┌───────────────────┐           │
│ │ Order (Root)      │           │
│ │ - id              │           │
│ │ - status          │           │
│ │ - placedAt        │           │
│ │                   │           │
│ │ ┌─────────────┐   │           │
│ │ │ OrderItem   │   │  Bên ngoài│
│ │ │ - productId │   │  KHÔNG    │
│ │ │ - quantity  │   │  access   │
│ │ │ - price     │   │  trực tiếp│
│ │ └─────────────┘   │  OrderItem│
│ │                   │           │
│ │ ┌─────────────┐   │           │
│ │ │ Money       │   │           │
│ │ │ (total)     │   │           │
│ │ └─────────────┘   │           │
│ └───────────────────┘           │
└──────────────────────────────────┘

Rules:
  1. Aggregate Root enforce business rules
  2. Transactions = 1 Aggregate
  3. Reference other Aggregates bằng ID (không object reference)
  4. Consistency boundary = Aggregate boundary
```

### 2.3 Repository

```
Repository = interface để persist/retrieve Aggregates

interface OrderRepository {
  findById(id: OrderId): Order | null
  save(order: Order): void
  findByUserId(userId: UserId): Order[]
}

// Implementation ẩn bên trong
class PostgresOrderRepository implements OrderRepository {
  async findById(id: OrderId): Promise<Order | null> {
    const row = await db.query('SELECT * FROM orders WHERE id = $1', [id]);
    return row ? this.toDomain(row) : null;
  }
}

Rule: 1 Repository per Aggregate Root
  ✅ OrderRepository
  ❌ OrderItemRepository (access qua Order)
```

---

## 3. DDD → Microservices Boundaries

### 3.1 Process

```
Step 1: Event Storming
  Post-it notes trên tường
  Orange: Domain Events (OrderPlaced, PaymentReceived)
  Blue: Commands (PlaceOrder, ChargePayment)
  Yellow: Aggregates (Order, Payment)
  Pink: Policies / Business Rules

Step 2: Identify Bounded Contexts
  Nhóm events/commands/aggregates liên quan
  → Mỗi nhóm = 1 Bounded Context

Step 3: Define Context Relationships
  Context Map: Partnership, ACL, etc.

Step 4: Map to Services
  1 Bounded Context ≈ 1 Microservice
  (có thể split thêm nếu context quá lớn)
```

### 3.2 E-Commerce Example

```
Event Storming Results:

  ProductAdded → ProductPriceChanged → ProductSearched
  → Catalog Context (Service)

  InventoryReceived → StockReserved → StockReleased
  → Inventory Context (Service)

  OrderPlaced → OrderConfirmed → OrderShipped → OrderDelivered
  → Order Context (Service)

  PaymentRequested → PaymentCharged → PaymentRefunded
  → Payment Context (Service)

  ShipmentCreated → ShipmentTracked → ShipmentDelivered
  → Shipping Context (Service)

Context Map:
  Order ──uses──► Catalog (to get product info)
  Order ──uses──► Inventory (to reserve stock)
  Order ──uses──► Payment (to charge)
  Order ──uses──► Shipping (to ship)
```

---

## 4. Anti-Corruption Layer (ACL)

```
Vấn đề: External service (payment gateway) có model khác

External Payment API:
  { "transaction_id": "xxx", "amt": 100, "ccy": "USD" }

Our Domain:
  { "paymentId": "xxx", "amount": Money(100, "USD") }

ACL translates:
  ┌──────────────┐     ┌───────────┐     ┌──────────────┐
  │ Our Domain   │────►│   ACL     │────►│ External API │
  │ Payment      │     │ Translate │     │ Stripe/VNPay │
  │ Model        │◄────│ Adapter   │◄────│ Raw response │
  └──────────────┘     └───────────┘     └──────────────┘

  // ACL Implementation
  class PaymentGatewayACL {
    async charge(payment: DomainPayment): DomainResult {
      // Translate to external model
      const externalReq = {
        amt: payment.amount.value,
        ccy: payment.amount.currency,
      };
      // Call external API
      const response = await stripe.charge(externalReq);
      // Translate back to domain model
      return new DomainResult(response.transaction_id, ...);
    }
  }
```

---

## Summary

| Pattern | Level | Purpose |
|--------|-------|----------|
| Bounded Context | Strategic | Determine service boundaries |
| Context Map | Strategic | Relationship between services |
| Ubiquitous Language | Strategic | Language unification |
| Entity/Value Object | Tactical | Model domain objects |
| Aggregates | Tactical | Consistency + transaction boundary |
| Repository | Tactical | Data access abstraction |
| ACL | Integration | Protect domain from external systems |

---

## Exercises

1. **Event Storming:** Hospital Management System: Patient registers → Doctor examines → Prescribes medicine → Payment → Picks up medicine. List Domain Events, Commands, and define Bounded Contexts.

2. **Aggregate Design:** Shopping Cart: Cart contains CartItems, each CartItem has Product reference, quantity, price. Aggregate Design. Business rules: max 20 items, quantity 1-99, total < 100M VND.

3. **Context Map:** Integrated E-commerce: internal (Order, Catalog, Inventory), external (Stripe Payment, GHN Shipping, SendGrid Email). Draw Context Map with relationship types.
