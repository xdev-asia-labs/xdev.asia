---
id: 019d8a21-c110-7001-d001-e1f2a3b4c514
title: 第 14 課：事件驅動架構
slug: bai-14-event-driven-architecture
description: 事件驅動架構模式。事件溯源與傳統 CRUD。 CQRS 模式。分散式事務的 Saga 模式。事件模式演變。實踐事件驅動的電子商務系統設計。
duration_minutes: 160
is_free: false
video_url: null
sort_order: 14
section_title: 第 4 部分：非同步處理和通信
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4082" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4082)"/>

  <!-- Decorations -->
  <g>
    <circle cx="694" cy="172" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="788" cy="46" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="882" cy="180" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="976" cy="54" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="1070" cy="188" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="112" x2="1100" y2="192" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="142" x2="1050" y2="212" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.3826859021799,148.5 985.3826859021799,175.5 962,189 938.6173140978201,175.5 938.6173140978201,148.5 962,135" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🏗️ 建築 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：事件驅動架構</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：非同步處理和通信</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

事件驅動架構不是讓服務直接相互呼叫（耦合），而是讓服務透過**事件**進行通訊－減少耦合，提高可擴展性，並允許更輕鬆地建構複雜系統。

---

## 1. 什麼是事件驅動架構（EDA）？

### 1.1 請求驅動與事件驅動

```
Request-Driven (Coupling cao):
  Order Service ──POST──► Inventory Service
  Order Service ──POST──► Payment Service
  Order Service ──POST──► Email Service
  
  Order Service phải biết TẤT CẢ downstream services
  Thêm service mới → Sửa Order Service

Event-Driven (Loose coupling):
  Order Service ──publish──► "OrderCreated" Event
                                │
                    ┌───────────┼───────────┐
                    ▼           ▼           ▼
              Inventory     Payment      Email
              Service       Service      Service
  
  Order Service KHÔNG biết ai subscribe
  Thêm service mới → Subscribe event, KHÔNG sửa gì
```

### 1.2 事件類型

```
1. Event Notification (thin):
   { "type": "OrderCreated", "orderId": "123" }
   → Consumer phải query lại để lấy details

2. Event-Carried State Transfer (fat):
   { "type": "OrderCreated",
     "orderId": "123",
     "userId": "456",
     "items": [...],
     "total": 1500000 }
   → Consumer có đủ data, không cần query lại

3. Domain Event:
   { "type": "OrderCreated",
     "aggregateId": "order-123",
     "aggregateType": "Order",
     "version": 1,
     "timestamp": "2024-01-15T10:30:00Z",
     "data": { ... } }
   → Dùng trong DDD, có aggregate context
```

---

## 2. 事件溯源

### 2.1 傳統 CRUD 與事件溯源

```
CRUD:
  State: { balance: 700 }
  
  Chỉ biết balance hiện tại = 700
  KHÔNG biết lịch sử thay đổi

Event Sourcing:
  Events:
    1. AccountCreated { balance: 1000 }
    2. MoneyWithdrawn { amount: 200 }
    3. MoneyDeposited { amount: 500 }
    4. MoneyWithdrawn { amount: 600 }
  
  Current state = replay events:
    1000 - 200 + 500 - 600 = 700

  Biết TOÀN BỘ lịch sử
  Có thể rebuild state tại bất kỳ thời điểm
  Audit trail hoàn chỉnh
```

### 2.2 事件商店

```
┌────────────────────────────────────────────────────┐
│ Event Store                                         │
├──────┬──────────┬────────┬──────────────┬──────────┤
│ SeqNo│ AggregateId│ Type   │ Data         │ Timestamp│
├──────┼──────────┼────────┼──────────────┼──────────┤
│ 1    │ acct-001  │ Created│ {balance:1000}│ 10:00:00│
│ 2    │ acct-001  │ Withdraw│{amount: 200} │ 10:05:00│
│ 3    │ acct-002  │ Created│ {balance:500} │ 10:06:00│
│ 4    │ acct-001  │ Deposit│ {amount: 500} │ 10:10:00│
│ 5    │ acct-001  │ Withdraw│{amount: 600} │ 10:15:00│
└──────┴──────────┴────────┴──────────────┴──────────┘

Immutable! Không UPDATE, không DELETE
Chỉ APPEND events mới
```

### 2.3 快照

```
Vấn đề: Account có 1 triệu events → replay chậm

Giải pháp: Snapshot (checkpoint)

  Events 1-999,999: (lịch sử cũ)
  Snapshot @ event 999,999: { balance: 52,345 }
  Events 1,000,000-1,000,005: (events mới)

  Rebuild state:
    Load snapshot: 52,345
    Replay 5 events (thay vì 1 triệu!)
```

---

## 3.CQRS

### 3.1 指令查詢職責分離

```
Traditional (1 model cho cả Read và Write):
  ┌────────────┐
  │   Model    │ ← cả Read và Write
  │ (Order)    │    dùng chung schema
  └─────┬──────┘
        │
  ┌─────▼──────┐
  │  Database  │
  └────────────┘

CQRS (tách Read và Write model):
  Write (Command)           Read (Query)
  ┌────────────┐          ┌────────────┐
  │ Command    │          │  Query     │
  │ Model      │          │  Model     │
  │ (normalize)│          │ (denormalize)│
  └─────┬──────┘          └─────┬──────┘
        │                       │
  ┌─────▼──────┐ ──event──►┌───▼────────┐
  │Write DB    │           │ Read DB    │
  │(PostgreSQL)│           │(Elastic/   │
  │  ACID      │           │ Redis/Mongo)│
  └────────────┘           └────────────┘
```

### 3.2 CQRS + 事件溯源

```
Command Side:
  User: "Đặt hàng"
  → Command: CreateOrder
  → Validate business rules
  → Append event: OrderCreated
  → Event Store (source of truth)

Event Side:
  OrderCreated event published
  │
  ├──► Read Model Projector
  │    → Update denormalized view (Read DB)
  │
  ├──► Inventory Service
  │    → Reserve items
  │
  └──► Notification Service
       → Send confirmation

Query Side:
  User: "Xem đơn hàng"
  → Query Read DB (optimized for reads)
  → Return instantly (pre-computed view)
```

---

## 4.傳奇模式

### 4.1 分散式事務問題

```
Đặt hàng cần 3 bước (3 services khác nhau):
  1. Payment Service: Charge credit card
  2. Inventory Service: Reserve items
  3. Shipping Service: Create shipment

Nếu bước 3 fail → Phải rollback bước 1, 2
Không thể dùng database transaction (khác databases!)
```

### 4.2 編舞傳奇

```
Không có orchestrator, services tự coordinate qua events

  Order ──OrderCreated──► Payment
                              │
                         PaymentCharged
                              │
                              ▼
                          Inventory
                              │
                         ItemsReserved
                              │
                              ▼
                          Shipping
                              │
                         ShipmentCreated
                              │
                              ▼
                          Order: COMPLETED

Rollback (nếu Shipping fail):
  Shipping ──ShipmentFailed──► Inventory
                                   │
                             ItemsReleased
                                   │
                                   ▼
                               Payment
                                   │
                             PaymentRefunded
                                   │
                                   ▼
                               Order: CANCELLED
```

### 4.3 編排傳奇

```
Orchestrator điều phối tất cả steps

  ┌──────────────┐
  │ Saga         │
  │ Orchestrator │
  └──────┬───────┘
         │
    ┌────▼────┐  Success  ┌─────────┐  Success  ┌──────────┐
    │Payment  │──────────►│Inventory│──────────►│Shipping  │
    │Service  │           │Service  │           │Service   │
    └─────────┘           └─────────┘           └──────────┘
         │                     │                      │
    Compensate            Compensate             Compensate
    (Refund)              (Release)              (Cancel)

Ưu điểm: Logic tập trung, dễ debug
Nhược điểm: Orchestrator = potential SPOF
```

---

## 5. 事件模式演變

```
Vấn đề: Event schema thay đổi theo thời gian

v1: { "orderId": "123", "amount": 100 }
v2: { "orderId": "123", "amount": 100, "currency": "VND" }
v3: { "orderId": "123", "total": { "amount": 100, "currency": "VND" } }

Strategies:
  1. Schema Registry (Confluent/Avro):
     Quản lý versions, validate compatibility
  
  2. Upcasting:
     Khi đọc event cũ → Transform sang schema mới
     v1 event → upcaster → v3 format
  
  3. Backward/Forward compatibility:
     - Thêm field mới: có default value
     - Không rename/remove fields
     - Consumers ignore unknown fields
```

---

## 總結

|圖案|使用案例|複雜性 |
|--------|----------|------------|
|活動通知 |鬆散耦合|低|
|事件溯源 |稽核、臨時查詢 |高|
| CQRS |讀/寫優化 |中高|
|編舞傳奇 |簡單的工作流程，幾個步驟 |中等|
|編排傳奇 |工作流程複雜，步驟多|高|

---

## 練習

1. **事件流程：** 電子商務：使用者下單→檢查庫存→付款→發送電子郵件→更新分析。繪製事件流程圖。哪個服務發布哪個事件？訂閱什麼活動？

2. **Saga Design：** 航班預訂：預訂航班→預訂酒店→預訂汽車。如果儲備車故障，設計補償流程。使用編排還是編排？

3. **CQRS：** 針對「暢銷產品」功能設計CQRS：寫入模型（訂單）和讀取模型（快取排名）。哪些事件觸發更新讀取模型？
