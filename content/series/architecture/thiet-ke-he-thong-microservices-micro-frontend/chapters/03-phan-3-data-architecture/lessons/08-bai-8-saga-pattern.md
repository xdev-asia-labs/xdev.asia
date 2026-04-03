---
id: 019e4a33-d408-7b20-c001-b1c2d3e4f508
title: "Bài 8: Saga Pattern & Distributed Transactions"
slug: bai-8-saga-pattern-distributed-transactions
description: >-
  Tại sao ACID không work trong Microservices. Saga Pattern: Choreography vs Orchestration. Compensating transactions, idempotency, và error handling. Ví dụ thực tế: Order → Payment → Inventory → Shipping workflow.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: Data Architecture trong Microservices"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Trong Monolith, transaction đơn giản: `BEGIN → INSERT order → UPDATE inventory → COMMIT`. Trong Microservices, mỗi service có DB riêng → không thể dùng distributed ACID transaction (2PC quá chậm, fragile). **Saga Pattern** là giải pháp tiêu chuẩn.


![Saga Pattern — Choreography và Orchestration cho distributed transactions](/storage/uploads/2026/04/mfe-ms-diagram-bai8-saga-pattern.png)

---

## 1. Vấn đề: Distributed Transactions

### 1.1 Tại sao 2PC (Two-Phase Commit) không phù hợp?

- **Blocking**: tất cả participants bị lock cho đến khi coordinator quyết định
- **Single point of failure**: coordinator crash → deadlock
- **Performance hit**: latency tăng đáng kể
- **Không scale**: thêm participant = thêm complexity exponential

### 1.2 Accept Eventual Consistency

> Trong Microservices, chúng ta chấp nhận **eventual consistency** thay vì strong consistency. Dữ liệu sẽ nhất quán **cuối cùng**, không phải **ngay lập tức**.

---

## 2. Saga Pattern

Saga = chuỗi **local transactions**, mỗi transaction update 1 service. Nếu một transaction fail, các **compensating transactions** undo các thay đổi trước đó.

### 2.1 Choreography-based Saga

Mỗi service publish event → service tiếp theo lắng nghe và hành động:

```
Order Service         Payment Service       Inventory Service
     │                      │                      │
     │──OrderCreated───────►│                      │
     │                      │──PaymentProcessed───►│
     │                      │                      │──InventoryReserved──►
     │                      │                      │
     │ (nếu Inventory fail)                        │
     │                      │◄──InventoryFailed────│
     │◄──PaymentRefunded────│                      │
     │──OrderCancelled      │                      │
```

**Ưu điểm:** Simple, loosely coupled, no central coordinator
**Nhược điểm:** Hard to track overall flow, cyclic dependencies possible

### 2.2 Orchestration-based Saga

Saga Orchestrator điều phối toàn bộ flow:

```
                    ┌─────────────────┐
                    │ Order Saga      │
                    │ Orchestrator    │
                    └──┬──┬──┬───────┘
                       │  │  │
            ┌──────────┘  │  └──────────┐
            ▼             ▼             ▼
      ┌──────────┐ ┌──────────┐ ┌──────────┐
      │ Payment  │ │Inventory │ │ Shipping │
      │ Service  │ │ Service  │ │ Service  │
      └──────────┘ └──────────┘ └──────────┘

Orchestrator:
1. Create Order (PENDING)
2. Command: ProcessPayment → Payment Service
3. If success: Command: ReserveInventory → Inventory Service
4. If success: Command: CreateShipment → Shipping Service
5. If any fail: Compensate previous steps in reverse
```

**Ưu điểm:** Clear flow, easy to understand, centralized error handling
**Nhược điểm:** Orchestrator can become bottleneck, single point of failure

### 2.3 Khi nào dùng cái gì?

| Criteria | Choreography | Orchestration |
|----------|-------------|---------------|
| **Complexity** | 2-3 steps | 4+ steps |
| **Visibility** | Khó track | Rõ ràng |
| **Coupling** | Loose | Medium (to orchestrator) |
| **Error handling** | Distributed | Centralized |

---

## 3. Compensating Transactions

Compensating transaction = "undo" cho business transaction (không phải DB rollback):

```
Forward:                  Compensating:
CreateOrder         →     CancelOrder
ProcessPayment      →     RefundPayment
ReserveInventory    →     ReleaseInventory
CreateShipment      →     CancelShipment
```

**Lưu ý:** Compensating transaction phải **idempotent** — gọi nhiều lần cho cùng kết quả.

---

## 4. Idempotency — Xử lý Duplicate Messages

Trong distributed system, message có thể gửi nhiều lần (at-least-once delivery). Service phải xử lý duplicate:

```javascript
// Idempotent payment processing
async function processPayment(command) {
  // Check idempotency key
  const existing = await db.findPayment(command.idempotencyKey);
  if (existing) return existing; // Already processed
  
  // Process payment
  const result = await stripe.charge(command.amount);
  await db.savePayment({
    idempotencyKey: command.idempotencyKey,
    ...result
  });
  return result;
}
```

---

## 5. Hands-on: E-Commerce Order Saga

```
Create Order Saga (Orchestration):

Step 1: Order Service   → CreateOrder(PENDING)
Step 2: Payment Service → ChargeCustomer(orderId, amount)
  ✅ → Step 3
  ❌ → Compensate: CancelOrder → DONE (Order: PAYMENT_FAILED)

Step 3: Inventory Service → ReserveItems(orderId, items)
  ✅ → Step 4
  ❌ → Compensate: RefundPayment → CancelOrder → DONE (Order: OUT_OF_STOCK)

Step 4: Order Service → ConfirmOrder(orderId)
  ✅ → DONE (Order: CONFIRMED)
  
Step 5 (async): Notification Service → SendConfirmationEmail
```

---

## Tóm tắt

- **2PC không phù hợp** cho Microservices — quá chậm và fragile
- **Saga Pattern** = chuỗi local transactions + compensating transactions
- **Choreography**: simple flows (2-3 steps), loose coupling
- **Orchestration**: complex flows (4+ steps), clear visibility
- **Idempotency** là bắt buộc — luôn handle duplicate messages

---

**Bài tiếp theo:** [Bài 9: Event Sourcing & CQRS — Khi nào cần, khi nào không?](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-9-event-sourcing-cqrs-khi-nao-can-khi-nao-khong)
