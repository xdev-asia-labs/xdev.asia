---
id: 019d8a22-c304-7a10-b001-a1b2c3d4e504
title: "Bài 4: Microservices Design Principles — SRP, DDD & Bounded Context"
slug: bai-4-microservices-design-principles-srp-ddd-bounded-context
description: >-
  Microservices là gì, Single Responsibility Principle, Domain-Driven Design,
  Bounded Context để xác định ranh giới service, Loose Coupling & High Cohesion,
  khi nào nên và không nên dùng microservices.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: Microservices Design & Communication Patterns"
course:
  id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
  title: "Cloud Native Microservices Architecture"
  slug: cloud-native-microservices-architecture
---

![Bài 4: Microservices Design Principles — SRP, DDD & Bounded Context](/storage/uploads/2026/03/cn-bai-4-diagram.png)

## Giới thiệu

Microservices không chỉ là "chia nhỏ monolith". Nếu chia sai cách, bạn sẽ có một "distributed monolith" — mang đầy đủ nhược điểm của cả hai kiến trúc. Bài này trang bị nguyên lý thiết kế để chia microservices đúng cách.

---

## 1. Microservices là gì?

Microservices là **phong cách kiến trúc** trong đó ứng dụng được cấu thành từ nhiều service nhỏ, độc lập:

```
Monolith                          Microservices
┌──────────────────────┐         ┌──────────┐ ┌──────────┐
│     Một ứng dụng     │         │  Order   │ │ Payment  │
│   ┌──────┐ ┌──────┐  │         │  Service │ │ Service  │
│   │Order │ │Payment│  │   →    └──────────┘ └──────────┘
│   ├──────┤ ├──────┤  │         ┌──────────┐ ┌──────────┐
│   │Invent│ │Notif  │  │         │Inventory │ │  Notif   │
│   └──────┘ └──────┘  │         │  Service │ │ Service  │
│    Shared Database    │         └──────────┘ └──────────┘
└──────────────────────┘          Mỗi service có DB riêng
```

### Đặc điểm

- **Chạy trong process riêng**: Mỗi service là một process/container độc lập
- **Giao tiếp qua network**: HTTP/REST, gRPC, Message Queue
- **Triển khai độc lập**: Deploy service A mà không ảnh hưởng service B
- **Database riêng**: Database per Service pattern
- **Team nhỏ**: 2-Pizza team (5-8 người) sở hữu 1-3 services

---

## 2. Single Responsibility Principle (SRP)

> Mỗi service chỉ chịu trách nhiệm cho **một nghiệp vụ** và có **một lý do duy nhất để thay đổi**.

```
✅ Đúng — Mỗi service một nghiệp vụ rõ ràng:
├── OrderService         → Quản lý vòng đời đơn hàng
├── PaymentService       → Xử lý thanh toán
├── InventoryService     → Quản lý tồn kho
├── NotificationService  → Gửi email/SMS/push
└── UserService          → Quản lý tài khoản

❌ Sai — Service "thùng rác":
├── OrderPaymentService      → 2 nghiệp vụ gộp
├── CommonService            → Mọi thứ chung
└── UtilityService           → Không rõ trách nhiệm
```

### Dấu hiệu vi phạm SRP

- Service có **quá nhiều API endpoints** không liên quan
- Thay đổi tính năng A lại phải test lại tính năng B
- Nhiều team cùng sửa một service
- Service name chứa "and" hoặc "util" hoặ "common"

---

## 3. Domain-Driven Design (DDD)

### 3.1 Tại sao cần DDD?

DDD giúp trả lời câu hỏi quan trọng nhất: **"Ranh giới của mỗi service ở đâu?"**

Thay vì chia theo kỹ thuật (frontend service, backend service, database service), DDD chia theo **nghiệp vụ kinh doanh** (business domain).

### 3.2 Strategic Design

#### Ubiquitous Language

Xây dựng **ngôn ngữ chung** giữa developer và domain expert:

```
Domain Expert (Business):        Developer (Tech):
"Đơn hàng"                   →   Order
"Thanh toán"                  →   Payment
"Giao hàng"                  →   Shipment
"Hoàn tiền"                  →   Refund
"Kho hàng"                   →   Inventory

Đảm bảo: Code, API, database, documentation đều dùng cùng thuật ngữ
```

#### Bounded Context

Bounded Context xác định **phạm vi mà một model có ý nghĩa**:

```
┌──────────────────────────────────────────────────────┐
│                   E-Commerce System                   │
│                                                       │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────┐ │
│  │   Order      │  │  Catalog    │  │  Customer    │ │
│  │   Context    │  │  Context    │  │  Context     │ │
│  │              │  │             │  │              │ │
│  │  "Product"   │  │  "Product"  │  │  "Customer"  │ │
│  │  = OrderItem │  │  = SKU with │  │  = Account   │ │
│  │  (id, qty,   │  │  specs,     │  │  with prefs, │ │
│  │   price)     │  │  images,    │  │  addresses   │ │
│  │              │  │  pricing    │  │              │ │
│  └─────────────┘  └─────────────┘  └──────────────┘ │
│                                                       │
│  Cùng từ "Product" nhưng ý nghĩa KHÁC NHAU           │
│  trong mỗi Bounded Context                           │
└──────────────────────────────────────────────────────┘
```

**Quy tắc quan trọng**: Mỗi Bounded Context → Một (hoặc vài) Microservice.

### 3.3 Context Mapping — Quan hệ giữa các Context

```
┌─────────────┐    Published    ┌──────────────┐
│   Order     │────Language────▶│   Payment    │
│   Context   │                 │   Context    │
└──────┬──────┘                 └──────────────┘
       │
       │ Customer/Supplier
       ▼
┌─────────────┐    Conformist   ┌──────────────┐
│  Shipping   │◀───────────────│  3rd Party   │
│  Context    │                 │  Logistics   │
└─────────────┘                 └──────────────┘
```

| Relationship | Mô tả |
|-------------|--------|
| **Shared Kernel** | 2 context chia sẻ subset code/model |
| **Customer/Supplier** | Upstream cung cấp API, downstream consume |
| **Conformist** | Downstream tuân thủ hoàn toàn model của upstream |
| **Anti-Corruption Layer** | Layer dịch between foreign model và internal model |
| **Published Language** | Giao tiếp qua format chuẩn (JSON schema, Protobuf) |

### 3.4 Tactical Design — Building Blocks

```
Bounded Context
│
├── Entity        → Có identity, lifecycle (Order, User)
├── Value Object  → Không có identity, immutable (Money, Address)
├── Aggregate     → Cluster of entities, consistency boundary
│   └── Aggregate Root → Entry point (Order là root, OrderItem là child)
├── Domain Event  → Sự kiện nghiệp vụ (OrderCreated, PaymentReceived)
├── Repository    → Persistence abstraction
└── Domain Service → Logic không thuộc entity nào (PricingCalculator)
```

#### Aggregate — Đơn vị consistency

```
Order Aggregate:
┌───────────────────────────────┐
│  Order (Aggregate Root)       │
│  ├── id: "O-001"             │
│  ├── status: "confirmed"     │
│  ├── total: $500             │
│  │                           │
│  ├── OrderItem               │
│  │   ├── product: "iPhone"   │
│  │   ├── qty: 1              │
│  │   └── price: $400         │
│  │                           │
│  ├── OrderItem               │
│  │   ├── product: "Case"     │
│  │   ├── qty: 1              │
│  │   └── price: $100         │
│  │                           │
│  └── ShippingAddress         │
│      └── "123 ABC Street"   │
└───────────────────────────────┘

Quy tắc:
- Chỉ truy cập thông qua Aggregate Root (Order)
- Một transaction = một aggregate
- Cross-aggregate = eventual consistency
```

---

## 4. Loose Coupling & High Cohesion

### 4.1 Loose Coupling (Kết nối lỏng)

Thay đổi ở service A **không yêu cầu** thay đổi ở service B.

```
✅ Loose Coupling:
Order Service ──event──▶ Kafka ──▶ Payment Service
(Thay đổi internal logic của Order → Payment không bị ảnh hưởng)

❌ Tight Coupling:
Order Service ──direct DB query──▶ Payment Database
(Thay đổi schema Payment DB → Order Service bị broken)
```

### 4.2 High Cohesion (Gắn kết cao)

Các chức năng **liên quan** được gom chung trong **một** service.

```
✅ High Cohesion:
Payment Service:
├── ProcessPayment()
├── RefundPayment()
├── ValidateCard()
└── GetPaymentHistory()
→ Tất cả đều liên quan đến "thanh toán"

❌ Low Cohesion:
MiscService:
├── ProcessPayment()
├── SendEmail()
├── GenerateReport()
└── ResizeImage()
→ Không liên quan gì đến nhau
```

---

## 5. Khi nào nên/không nên dùng Microservices?

### 5.1 NÊN dùng khi

- ✅ Hệ thống **quy mô lớn**, nhiều team phát triển song song
- ✅ Cần **scale từng phần** hệ thống độc lập
- ✅ Yêu cầu **polyglot** (nhiều ngôn ngữ/framework)
- ✅ Release cycle nhanh, **continuous deployment**
- ✅ Domain phức tạp, có **ranh giới rõ ràng**
- ✅ Tổ chức có **DevOps maturity** (CI/CD, monitoring, container orchestration)

### 5.2 KHÔNG nên dùng khi

- ❌ Team **nhỏ** (< 5 người)
- ❌ Ứng dụng **đơn giản**, domain ít phức tạp
- ❌ **Chưa hiểu rõ** domain boundary
- ❌ Không có hạ tầng **CI/CD** và container orchestration
- ❌ **Thời gian** phát triển hạn chế
- ❌ Team chưa có kinh nghiệm vận hành distributed system

### 5.3 Monolith First

Martin Fowler khuyến nghị **"Monolith First"**:

```
Phase 1: Monolith
├── Hiểu rõ domain
├── Phát triển nhanh
└── Xác định boundary tự nhiên

Phase 2: Modular Monolith
├── Tách module rõ ràng trong monolith
├── Mỗi module có boundary riêng
└── Giao tiếp qua internal API

Phase 3: Microservices (khi cần)
├── Tách module thành service
├── Thêm API Gateway
└── Event-driven communication
```

---

## 6. Anti-patterns cần tránh

### Distributed Monolith

```
❌ Chia thành nhiều service nhưng:
- Deploy phải đồng thời tất cả
- Shared database
- Synchronous chain calls dài
- Tightly coupled API contracts

→ Có đầy đủ nhược điểm của cả Monolith VÀ Microservices
→ Không có ưu điểm của cái nào cả
```

### Nano-services (quá nhỏ)

```
❌ Chia quá nhỏ:
├── CreateOrderService
├── UpdateOrderService
├── DeleteOrderService
├── GetOrderService
└── ListOrderService

→ Quá nhiều service, overhead network, khó quản lý
→ Nên gom thành: OrderService
```

---

## 7. Tổng kết

| Nguyên lý | Key Point |
|-----------|-----------|
| SRP | Mỗi service một nghiệp vụ, một lý do để thay đổi |
| DDD | Chia service theo Bounded Context, không theo kỹ thuật |
| Aggregate | Đơn vị consistency, truy cập qua Aggregate Root |
| Loose Coupling | Thay đổi service A không ảnh hưởng service B |
| High Cohesion | Chức năng liên quan gom chung một service |
| Monolith First | Bắt đầu monolith, tách dần khi hiểu domain |

> **Bài tiếp theo**: Synchronous Communication — REST API & gRPC, hai giao thức phổ biến nhất cho giao tiếp đồng bộ giữa các microservices.
