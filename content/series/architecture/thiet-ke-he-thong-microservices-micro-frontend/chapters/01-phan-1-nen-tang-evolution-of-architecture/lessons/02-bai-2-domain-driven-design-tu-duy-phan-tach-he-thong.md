---
id: 019e4a33-d402-7b20-c001-b1c2d3e4f502
title: "Bài 2: Domain-Driven Design — Tư duy phân tách hệ thống"
slug: bai-2-domain-driven-design-tu-duy-phan-tach-he-thong
description: >-
  Nền tảng DDD: Ubiquitous Language, Bounded Context, Aggregates, Domain Events.
  Cách sử dụng Event Storming để khám phá domain. Strategic vs Tactical DDD
  và áp dụng vào việc chia Microservices & Micro Frontend.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng — Evolution of Architecture"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Domain-Driven Design (DDD) không chỉ là một phương pháp viết code — đó là **tư duy phân tách hệ thống** phức tạp thành các phần có ý nghĩa business. DDD là nền tảng quyết định **cách chia Microservices** và **cách chia Micro Frontend**. Nếu chia sai, bạn sẽ có một "distributed monolith" — tệ hơn cả monolith ban đầu.

---

## 1. Tại sao cần DDD?

### 1.1 Vấn đề của technical decomposition

Cách chia hệ thống theo **lớp kỹ thuật** (UI layer, Business layer, Data layer) là sai lầm phổ biến nhất:

```
❌ Technical Decomposition (SAI):
├── frontend-service
├── backend-service
├── database-service
└── notification-service

✅ Domain Decomposition (ĐÚNG):
├── user-management (UI + API + DB cho User)
├── product-catalog (UI + API + DB cho Product)
├── order-processing (UI + API + DB cho Order)
└── payment (UI + API + DB cho Payment)
```

### 1.2 DDD giải quyết gì?

- **Ubiquitous Language**: Cả team (dev, PM, business) nói cùng "ngôn ngữ"
- **Bounded Context**: Xác định ranh giới rõ ràng giữa các domain
- **Giảm coupling**: Mỗi bounded context là một đơn vị độc lập
- **Align business & tech**: Kiến trúc phản ánh cấu trúc business

---

## 2. Strategic DDD — Nhìn bức tranh lớn

### 2.1 Ubiquitous Language

Mỗi Bounded Context có **ngôn ngữ riêng**. Cùng từ "Product" nhưng có nghĩa khác nhau trong từng context:

```
┌───────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  Product Catalog   │  │   Order Context  │  │  Shipping Context│
│                    │  │                  │  │                  │
│ Product:           │  │ OrderItem:       │  │ Parcel:          │
│ - name, desc       │  │ - productId      │  │ - weight         │
│ - price, images    │  │ - quantity       │  │ - dimensions     │
│ - categories       │  │ - unitPrice      │  │ - tracking       │
│ - reviews          │  │ - discount       │  │ - destination    │
└───────────────────┘  └──────────────────┘  └──────────────────┘

Cùng "Product" nhưng mỗi context cần thông tin khác nhau!
```

### 2.2 Bounded Context

**Bounded Context** là ranh giới logic mà bên trong đó, một domain model nhất quán được áp dụng.

**Nguyên tắc:**
- Mỗi Bounded Context = 1 Microservice (hoặc một nhóm nhỏ)
- Mỗi Bounded Context = 1 Micro Frontend (hoặc một phần UI)
- Giữa các context: giao tiếp qua **API hoặc Events** (không share database!)

### 2.3 Context Mapping

Các Bounded Context không tồn tại độc lập — chúng có **mối quan hệ** với nhau:

```
Context Map:
┌──────────────┐          ┌──────────────┐
│   Product    │◄─────────│    Order     │
│   Catalog    │ Upstream  │  Processing  │
│  (Supplier)  │──────────►│ (Consumer)   │
└──────────────┘          └──────┬───────┘
                                 │
                          ┌──────┴───────┐
                          │   Payment    │
                          │   Gateway    │
                          └──────────────┘
```

**Các pattern quan hệ:**
| Pattern | Mô tả | Khi nào dùng |
|---------|-------|-------------|
| **Customer-Supplier** | Upstream cung cấp, Downstream tiêu thụ | Quan hệ phụ thuộc rõ ràng |
| **Shared Kernel** | Chia sẻ một phần model | Hai context liên quan chặt chẽ |
| **Anti-Corruption Layer** | Layer chuyển đổi giữa hai model | Tích hợp hệ thống legacy |
| **Published Language** | API/Schema chuẩn để giao tiếp | Nhiều consumers cần dùng |

---

## 3. Tactical DDD — Chi tiết thiết kế

### 3.1 Aggregate

Aggregate là **nhóm entities** được treat như một đơn vị consistency. Mọi thay đổi đều đi qua **Aggregate Root**.

```
Order Aggregate:
┌─────────────────────────────────┐
│  Order (Aggregate Root)         │
│  ├── OrderItem                  │
│  ├── OrderItem                  │
│  └── ShippingAddress            │
│                                 │
│  Invariants:                    │
│  - Total = sum(items.price)     │
│  - Status transitions are valid │
│  - At least 1 item required     │
└─────────────────────────────────┘
```

### 3.2 Domain Events

Domain Events mô tả **sự kiện đã xảy ra** trong domain:

```typescript
// Domain Events
interface OrderPlaced {
  orderId: string;
  customerId: string;
  items: OrderItem[];
  totalAmount: number;
  placedAt: Date;
}

interface PaymentConfirmed {
  paymentId: string;
  orderId: string;
  amount: number;
  confirmedAt: Date;
}

// Event flow
OrderPlaced → PaymentService listens → PaymentConfirmed → ShippingService listens
```

---

## 4. Event Storming — Khám phá Domain

### 4.1 Event Storming là gì?

Event Storming là workshop mà **developers + domain experts** cùng nhau khám phá domain bằng cách dán sticky notes:

```
Timeline: ─────────────────────────────────────────────►

🟧 Domain Event     🟦 Command          🟨 Policy/Rule
"Order Placed"     "Place Order"       "If payment fails,
                                        cancel order"

🟪 Aggregate        🟩 External System   🔴 Hot Spot
"Order"            "Payment Gateway"   "Race condition
                                        when checking stock"
```

### 4.2 Từ Event Storming đến Bounded Context

Sau workshop, nhóm các events liên quan lại → xác định Bounded Context → map thành Microservices + Micro Frontends.

```
Event Storming Results → Bounded Contexts:
├── Product Context: ProductCreated, ProductUpdated, CategoryChanged
├── Cart Context: ItemAddedToCart, CartAbandoned, CouponApplied
├── Order Context: OrderPlaced, OrderConfirmed, OrderShipped
├── Payment Context: PaymentInitiated, PaymentConfirmed, RefundIssued
└── User Context: UserRegistered, ProfileUpdated, AddressAdded

Mapping:
├── Product Context → Product Microservice + Product MFE
├── Cart Context    → Cart Microservice + Cart MFE
├── Order Context   → Order Microservice + Checkout MFE
├── Payment Context → Payment Microservice (no separate MFE)
└── User Context    → User Microservice + Account MFE
```

---

## 5. Áp dụng DDD cho Micro Frontend

### 5.1 Bounded Context → Micro Frontend

Mỗi Bounded Context không chỉ map thành 1 Microservice mà còn map thành **1 Micro Frontend**:

```
Bounded Context: Product Catalog
├── Backend: Product Microservice
│   ├── REST API / GraphQL
│   ├── PostgreSQL database
│   └── Search index (Elasticsearch)
│
├── Frontend: Product Micro Frontend
│   ├── Product listing page
│   ├── Product detail page
│   ├── Search & filter UI
│   └── Product reviews
│
└── Team: Product Team (full-stack ownership)
```

### 5.2 Team Topology theo DDD

```
┌──────────────────────────────────────────┐
│              Organization                │
├──────────┬──────────┬────────┬───────────┤
│ Team     │ Team     │ Team   │ Team      │
│ Product  │ Cart     │ Order  │ Platform  │
├──────────┼──────────┼────────┼───────────┤
│ MFE:     │ MFE:     │ MFE:   │ Shell App │
│ Product  │ Cart     │ Order  │ Design Sys│
│ pages    │ sidebar  │ pages  │ Auth      │
├──────────┼──────────┼────────┼───────────┤
│ µS:      │ µS:      │ µS:    │ API GW    │
│ Product  │ Cart     │ Order  │ Infra     │
│ API      │ API      │ API    │           │
├──────────┼──────────┼────────┼───────────┤
│ DB:      │ DB:      │ DB:    │ Shared    │
│ Postgres │ Redis    │ Postgres│ Services │
└──────────┴──────────┴────────┴───────────┘
```

---

## Tóm tắt

- **DDD** là nền tảng tư duy để phân tách hệ thống đúng cách
- **Bounded Context** xác định ranh giới → map thành Microservices + Micro Frontends
- **Event Storming** giúp khám phá domain cùng business experts
- **Context Mapping** xác định mối quan hệ giữa các context
- Chia theo **domain** (không phải theo layer kỹ thuật) là nguyên tắc vàng

---

**Bài tiếp theo:** [Bài 3: Kiến trúc tổng quan Full-Stack — Microservices + Micro Frontend + BFF](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-3-kien-truc-tong-quan-full-stack-microservices-micro-frontend-bff)
