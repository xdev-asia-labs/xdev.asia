---
id: 019d8a21-c110-7001-d001-e1f2a3b4c529
title: "Bài 29: Case Study - Thiết kế E-Commerce Platform"
slug: bai-29-case-study-thiet-ke-e-commerce-platform
description: >-
  Thiết kế Shopee/Tiki/Amazon. Product catalog service.
  Shopping cart & checkout. Inventory management (oversell
  prevention). Order processing pipeline. Payment integration.
  Flash sale architecture.
duration_minutes: 170
is_free: false
video_url: null
sort_order: 29
section_title: "Phần 7: System Design Case Studies"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

E-commerce platform là bài tổng hợp: catalog management, inventory, cart, checkout, payment, và đặc biệt là **flash sale** — thời điểm traffic tăng 100x. Bài này cover kiến trúc cho platform quy mô lớn.

---

## 1. Requirements & Estimation

```
Functional:
  - Product catalog (search, filter, browse)
  - Shopping cart
  - Checkout & payment
  - Order management
  - Inventory management
  - Flash sales/promotions
  - Reviews & ratings
  - Seller management

Estimation (shopee-scale Vietnam):
  DAU: 10M users
  Products: 100M SKUs
  Orders/day: 5M
  Peak QPS (flash sale): 500K requests/s
  
  Normal load:
    Browse: 50K QPS
    Search: 20K QPS
    Cart: 5K QPS
    Checkout: 500 QPS

  Flash sale (11.11):
    Browse: 500K QPS (10x)
    Checkout: 50K QPS (100x!)
    Duration: 1-2 hours
```

---

## 2. Service Architecture

```
┌──────────────────────────────────────────────────────────┐
│  Client (Web/App)                                         │
│      │                                                    │
│  ┌───▼──────────────────────────────────────────────┐    │
│  │              API Gateway / BFF                    │    │
│  └───┬──────┬──────┬──────┬──────┬──────┬──────┬───┘    │
│      │      │      │      │      │      │      │        │
│  ┌───▼──┐┌──▼──┐┌──▼──┐┌──▼──┐┌──▼──┐┌──▼──┐┌──▼──┐   │
│  │Cata- ││Cart ││Order││Pay- ││Inven││User ││Search│   │
│  │log   ││Svc  ││Svc  ││ment ││tory ││Svc  ││Svc  │   │
│  │Svc   ││     ││     ││Svc  ││Svc  ││     ││     │   │
│  └──┬───┘└──┬──┘└──┬──┘└──┬──┘└──┬──┘└──┬──┘└──┬──┘   │
│     │       │      │      │      │      │      │       │
│  ┌──▼──┐┌──▼──┐┌──▼──┐┌──▼──┐┌──▼──┐┌──▼──┐┌──▼──┐   │
│  │Mongo││Redis││Post-││Post-││Post-││Post-││Elas-│   │
│  │DB   ││     ││gres ││gres ││gres ││gres ││tic  │   │
│  └─────┘└─────┘└─────┘└─────┘└─────┘└─────┘└─────┘   │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │        Kafka (Event Bus)                          │   │
│  └──────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────┘
```

---

## 3. Product Catalog

```
Data Model:
  Product (MongoDB - flexible schema):
  {
    "id": "P123",
    "name": "iPhone 15 Pro",
    "category": ["electronics", "phones"],
    "seller_id": "S456",
    "attributes": {
      "color": "Blue Titanium",
      "storage": "256GB",
      "chip": "A17 Pro"
    },
    "variants": [
      { "sku": "SKU001", "storage": "256GB", "price": 28990000 },
      { "sku": "SKU002", "storage": "512GB", "price": 34990000 }
    ],
    "images": ["s3://products/p123/1.jpg", ...],
    "rating": 4.8,
    "review_count": 1523
  }

Search (Elasticsearch):
  - Full-text search: "iPhone pro xanh"
  - Filters: category, brand, price range
  - Faceted navigation: Count per brand, category
  - Auto-suggest: "iph..." → "iPhone 15 Pro"
  
  Sync: MongoDB → CDC (Debezium) → Kafka → Elasticsearch
```

---

## 4. Shopping Cart

```
Cart Storage Decision:
  Guest user:    LocalStorage (client-side)
  Logged-in:     Redis (server-side)
  
  Redis structure:
    Key: cart:{user_id}
    Value: Hash {
      "SKU001": { "quantity": 2, "price": 28990000, "added_at": ... },
      "SKU005": { "quantity": 1, "price": 599000, "added_at": ... }
    }
    TTL: 30 days

Cart Merge (login):
  Guest cart (localStorage) + Server cart (Redis) → Merged cart
  Conflict: Same item → Keep higher quantity

Cart Validation (before checkout):
  - Check product still exists
  - Check price hasn't changed → Show price change warning
  - Check inventory available
  - Apply promotions/coupons
```

---

## 5. Inventory Management

### 5.1 Oversell Prevention

```
Vấn đề: 10 items in stock, 100 users click "Buy" simultaneously

Approach 1: Pessimistic Lock (PostgreSQL)
  BEGIN;
  SELECT stock FROM inventory WHERE sku='SKU001' FOR UPDATE;
  -- stock = 10
  IF stock >= quantity THEN
    UPDATE inventory SET stock = stock - 1 WHERE sku='SKU001';
    COMMIT;
  ELSE
    ROLLBACK; -- Hết hàng!
  END IF;
  
  ✅ Accurate, no oversell
  ❌ Slow under high contention (locks block each other)

Approach 2: Redis + Lua Script (Flash Sale)
  -- Atomic operation
  local stock = redis.call('GET', 'stock:SKU001')
  if tonumber(stock) > 0 then
    redis.call('DECR', 'stock:SKU001')
    return 1  -- success
  else
    return 0  -- out of stock
  end
  
  ✅ Extremely fast (100K ops/s)
  ✅ Atomic (no race condition)
  ❌ Need to sync back to database

Approach 3: Pre-deduct + Confirm
  1. Checkout: Deduct stock (Redis) → Reserve 15 min
  2. Payment success → Confirm deduction → Update DB
  3. Payment fail/timeout → Release stock back
```

### 5.2 Two-Phase Inventory

```
Phase 1: Reserve (checkout)
  inventory.reserved += quantity
  inventory.available -= quantity
  
  available = 10, reserved = 0
  → User adds 2 to cart
  available = 8, reserved = 2

Phase 2a: Confirm (payment success)
  inventory.reserved -= quantity
  inventory.sold += quantity
  
  available = 8, reserved = 0, sold = 2

Phase 2b: Release (payment failed/timeout)
  inventory.reserved -= quantity
  inventory.available += quantity
  
  available = 10, reserved = 0 (restored)
```

---

## 6. Order Processing

```
Order State Machine:
  CREATED → PAYMENT_PENDING → PAID → PROCESSING
  → SHIPPED → DELIVERED → COMPLETED
  
  At any point: → CANCELLED → REFUNDED

Order Creation Pipeline:
  1. Validate cart items
  2. Calculate total (items + shipping + tax - discount)
  3. Reserve inventory (Phase 1)
  4. Create order record (status: PAYMENT_PENDING)
  5. Redirect to payment
  6. Payment callback:
     Success → Confirm inventory → Update order (PAID)
     Fail → Release inventory → Update order (CANCELLED)

Event Flow:
  OrderCreated → PaymentService.charge()
  PaymentCompleted → InventoryService.confirm()
  PaymentCompleted → NotificationService.orderConfirmation()
  PaymentCompleted → AnalyticsService.trackConversion()
  OrderShipped → NotificationService.shipmentNotification()
```

---

## 7. Flash Sale Architecture

```
Challenge: 100K → 500K QPS trong 1 giây!
  Normal checkout: 500 QPS
  Flash sale start: 500,000 QPS (1000x!)

Architecture:
  ┌─────────┐     ┌──────────┐     ┌──────────┐
  │ CDN     │────►│ Rate     │────►│ Queue    │
  │ (static)│     │ Limiter  │     │ (SQS)    │
  └─────────┘     └──────────┘     └────┬─────┘
                                        │
                                  ┌─────▼──────┐
                                  │ Workers    │
                                  │ (process   │
                                  │  orders)   │
                                  └─────┬──────┘
                                        │
                                  ┌─────▼──────┐
                                  │ Redis      │
                                  │ (inventory)│
                                  └────────────┘

Strategy:
  1. Pre-warm: Cache ALL flash sale items
  2. Rate limit: Max 1 purchase per user per item
  3. Queue: Accept requests → Queue → Process async
  4. Inventory: Redis atomic decrement
  5. Circuit Breaker: If overloaded → "Đang tải, thử lại"
  
  Client sees:
    "Đang xếp hàng... vị trí: #1,234"
    → Polling status → "Đặt hàng thành công!" / "Hết hàng"

Anti-abuse:
  - CAPTCHA before flash sale
  - Rate limit per user/IP
  - Device fingerprint
  - Block known bot patterns
```

---

## Tổng kết

| Component | Technology | Scale |
|-----------|-----------|-------|
| Catalog | MongoDB + Elasticsearch | 100M products |
| Cart | Redis | 10M concurrent carts |
| Orders | PostgreSQL | 5M orders/day |
| Inventory | Redis + PostgreSQL | Atomic operations |
| Events | Kafka | Inter-service communication |
| Flash Sale | CDN + Queue + Redis | 500K QPS |

---

## Bài tập

1. **Coupon System:** Thiết kế: coupon codes (1 lần vs nhiều lần), percentage vs fixed discount, minimum order value, category-specific. Prevent double-use.

2. **Flash Sale Deep Dive:** 1000 items, 100K concurrent users. Thiết kế chi tiết: từ user click "Buy" → success/failure response. Max latency 3 giây. Tỷ lệ fair (không phải bot thắng tất cả).

3. **Multi-Seller Platform:** Giỏ hàng có items từ 3 sellers khác nhau. 1 order → 3 sub-orders. Payment 1 lần nhưng settlement cho từng seller. Thiết kế order splitting và payment settlement.
