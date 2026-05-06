---
id: 019d8a21-c110-7001-d001-e1f2a3b4c529
title: 'レッスン 29: ケーススタディ - E コマース プラットフォームの設計'
slug: bai-29-case-study-thiet-ke-e-commerce-platform
description: >-
  Shopee/Tiki/Amazon
  のデザイン。製品カタログサービス。ショッピングカートとチェックアウト。在庫管理（過剰販売防止）。注文処理パイプライン。支払いの統合。フラッシュセールアーキテクチャ。
duration_minutes: 170
is_free: false
video_url: null
sort_order: 29
section_title: 'パート 7: システム設計のケーススタディ'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2565" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2565)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1077" cy="261" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1054" cy="78" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1031" cy="155" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="1008" cy="232" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="985" cy="49" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="171" x2="1100" y2="251" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="201" x2="1050" y2="271" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="943.5166604983954,108 943.5166604983954,134 921,147 898.4833395016046,134 898.4833395016046,108 921,95" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ アーキテクチャ — レッスン 29</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 29: ケーススタディ - E コマースのデザイン</tspan>
      <tspan x="60" dy="42">プラットフォーム</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: システム設計のケーススタディ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

E コマース プラットフォームは、カタログ管理、在庫、カート、チェックアウト、支払い、そして特にトラフィックが 100 倍に増加する**フラッシュ セール**など、包括的な記事です。この記事では、大規模プラットフォームのアーキテクチャについて説明します。

---

## 1. 要件と見積もり

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

## 2. サービスアーキテクチャ

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

## 3. 製品カタログ

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

## 4. ショッピングカート

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

## 5. 在庫管理

### 5.1 過剰販売の防止

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

### 5.2 2 フェーズの在庫

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

## 6. 注文処理

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

## 7. フラッシュセールのアーキテクチャ

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

## 概要

|コンポーネント |テクノロジー |スケール |
|----------|-----------|----------|
|カタログ | MongoDB + Elasticsearch | 1億製品 |
|カート |レディス | 1,000 万の同時カート |
|注文 |ポストグレSQL | 1 日あたり 500 万件の注文 |
|在庫 | Redis + PostgreSQL |アトミック操作 |
|イベント |カフカ |サービス間通信 |
|フラッシュセール | CDN + キュー + Redis | 500K QPS |

---

## 演習

1. **クーポン システム:** デザイン: クーポン コード (1 回と複数回)、割合と固定割引、最小注文額、カテゴリ固有。二重使用を防止します。

2. **フラッシュ セールの詳細:** 1,000 アイテム、10 万人の同時ユーザー。詳細設計: ユーザーから「購入」をクリック→成功/失敗の応答。最大遅延 3 秒。公平なレート (ボットがすべてを勝ち取るわけではありません)。

3. **複数販売者プラットフォーム:** ショッピング カートには 3 つの異なる販売者の商品が入っています。 1オーダー→3サブオーダー。支払いは一度ですが、販売者ごとに決済されます。デザイン注文の分割と代金決済。
