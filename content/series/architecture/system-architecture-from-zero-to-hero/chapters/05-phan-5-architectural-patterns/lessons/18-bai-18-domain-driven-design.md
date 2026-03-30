---
id: 019d8a21-c110-7001-d001-e1f2a3b4c518
title: "Bài 18: Domain-Driven Design cho System Architecture"
slug: bai-18-domain-driven-design-cho-system-architecture
description: >-
  DDD strategic patterns: Bounded Context, Ubiquitous Language,
  Context Map. DDD tactical patterns: Entity, Value Object,
  Aggregate, Repository. Áp dụng DDD để xác định service
  boundaries trong microservices.
duration_minutes: 150
is_free: false
video_url: null
sort_order: 18
section_title: "Phần 5: Architectural Patterns"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

DDD (Domain-Driven Design) là phương pháp thiết kế phần mềm tập trung vào **business domain**. Trong system architecture, DDD giúp xác định **service boundaries** — câu hỏi khó nhất khi thiết kế microservices.

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

### 2.2 Aggregate

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

## Tổng kết

| Pattern | Level | Mục đích |
|---------|-------|----------|
| Bounded Context | Strategic | Xác định service boundaries |
| Context Map | Strategic | Quan hệ giữa services |
| Ubiquitous Language | Strategic | Thống nhất ngôn ngữ |
| Entity/Value Object | Tactical | Model domain objects |
| Aggregate | Tactical | Consistency + transaction boundary |
| Repository | Tactical | Data access abstraction |
| ACL | Integration | Protect domain từ external systems |

---

## Bài tập

1. **Event Storming:** Hệ thống Hospital Management: Bệnh nhân đăng ký → Bác sĩ khám → Kê đơn thuốc → Thanh toán → Lấy thuốc. Liệt kê Domain Events, Commands, và xác định Bounded Contexts.

2. **Aggregate Design:** Shopping Cart: Cart chứa CartItems, mỗi CartItem có Product reference, quantity, price. Thiết kế Aggregate. Business rules: max 20 items, quantity 1-99, total < 100M VND.

3. **Context Map:** E-commerce tích hợp: nội bộ (Order, Catalog, Inventory), external (Stripe Payment, GHN Shipping, SendGrid Email). Vẽ Context Map với relationship types.
