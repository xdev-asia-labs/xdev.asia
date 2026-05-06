---
id: 019d8a21-c110-7001-d001-e1f2a3b4c513
title: 第 13 課：訊息佇列和任務佇列
slug: bai-13-message-queues-task-queues
description: >-
  為什麼需要非同步處理？訊息隊列與任務隊列。 RabbitMQ
  架構和交換類型。阿帕契卡夫卡架構。隊列模式：工作隊列、發布/訂閱、死信隊列。保證訊息傳遞和冪等性。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 13
section_title: 第 4 部分：非同步處理和通信
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4002" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4002)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1015" cy="95" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="930" cy="30" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="845" cy="225" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="760" cy="160" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="675" cy="95" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="245" x2="1100" y2="325" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="275" x2="1050" y2="345" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="979.6410161513776,125 979.6410161513776,165 945,185 910.3589838486224,165 910.3589838486224,125.00000000000001 945,105" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ 建築 — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：訊息佇列和任務佇列</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：非同步處理和通信</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

同步處理：使用者點擊「訂單」→等待30秒（建立訂單、發送電子郵件、計算運費、更新庫存...）。太慢了！ **訊息佇列**允許非同步處理，減少延遲並提高可靠性。

---

## 1. 同步與非同步

### 1.1 同步問題

```
User: POST /api/orders
  │
  ├── [200ms] Validate order
  ├── [100ms] Charge payment
  ├── [300ms] Update inventory
  ├── [500ms] Send confirmation email
  ├── [200ms] Notify warehouse
  ├── [150ms] Update analytics
  │
  └── Response: 1.45 giây! 😱

Nếu Email Service down → Toàn bộ request fail!
```

### 1.2 訊息佇列非同步

```
User: POST /api/orders
  │
  ├── [200ms] Validate order
  ├── [100ms] Charge payment
  ├── [5ms]   Publish "OrderCreated" event
  │
  └── Response: 305ms! 🚀

Background workers xử lý async:
  Queue → [Worker 1] Update inventory
  Queue → [Worker 2] Send email
  Queue → [Worker 3] Notify warehouse
  Queue → [Worker 4] Update analytics
```

---

## 2.訊息佇列與任務佇列

```
Message Queue:                    Task Queue:
┌─────────────────┐              ┌─────────────────┐
│ Producer gửi    │              │ Producer gửi    │
│ MESSAGE (data)  │              │ TASK (function   │
│                 │              │  + arguments)    │
│ Consumer tự     │              │ Worker thực      │
│ quyết định      │              │ thi task         │
│ xử lý thế nào  │              │                  │
│                 │              │ Retry, schedule  │
│ RabbitMQ, Kafka │              │ Celery, Sidekiq  │
│ SQS, NATS       │              │ Bull, Temporal   │
└─────────────────┘              └─────────────────┘
```

---

## 3.RabbitMQ

### 3.1 AMQP架構

```
Producer → Exchange → Binding → Queue → Consumer

Exchanges types:
┌──────────────────────────────────────────────────────┐
│ Direct Exchange:                                     │
│   Message với routing_key="email"                    │
│   → Queue "email_queue" (binding key="email")        │
│                                                      │
│ Fanout Exchange:                                     │
│   Message broadcast đến TẤT CẢ queues bound         │
│   → Queue A, Queue B, Queue C (all get copy)         │
│                                                      │
│ Topic Exchange:                                      │
│   Message routing_key="order.created.vn"             │
│   → Queue 1 bound "order.created.*" ✅               │
│   → Queue 2 bound "order.#" ✅                       │
│   → Queue 3 bound "payment.*" ❌                     │
│                                                      │
│ Headers Exchange:                                    │
│   Route dựa trên message headers thay vì routing_key │
└──────────────────────────────────────────────────────┘
```

### 3.2 工作佇列模式

```
               ┌── Consumer 1 (xử lý message 1, 3, 5)
               │
Producer ──► Queue ──── Consumer 2 (xử lý message 2, 4, 6)
               │
               └── Consumer 3 (xử lý message 7, 8, 9)

Mỗi message chỉ được 1 consumer xử lý
Load balancing: Round-robin hoặc prefetch
```

### 3.3 發布/訂閱模式

```
                    ┌── Queue A ──► Consumer: Email
                    │
Publisher ──► Exchange ──── Queue B ──► Consumer: SMS
  (Fanout)          │
                    └── Queue C ──► Consumer: Push

Mỗi queue nhận BẢN COPY của message
Mỗi consumer xử lý theo cách riêng
```

---

## 4.阿帕契卡夫卡

### 4.1 架構

```
┌─────────────────────────────────────────────────────┐
│                    Kafka Cluster                     │
│                                                      │
│  Topic: "orders" (3 partitions, RF=3)                │
│                                                      │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐             │
│  │Broker 1 │  │Broker 2 │  │Broker 3 │             │
│  │         │  │         │  │         │             │
│  │P0(leader│  │P1(leader│  │P2(leader│             │
│  │P1(replica│  │P2(replica│  │P0(replica│             │
│  │P2(replica│  │P0(replica│  │P1(replica│             │
│  └─────────┘  └─────────┘  └─────────┘             │
│                                                      │
│  ZooKeeper / KRaft: Cluster metadata                │
└─────────────────────────────────────────────────────┘

Producer ──► Partition (key-based routing)
Consumer Group ──► Mỗi partition chỉ 1 consumer
```

### 4.2 卡夫卡與 RabbitMQ

|特色|兔子MQ |卡夫卡|
|--------|----------|--------|
|型號|訊息佇列|事件日誌|
|吞吐量| ~50K 訊息/秒 | ~1M 訊息/秒 |
|留言保留|已消耗 → 已刪除 |保留（可設定）|
|訂購 |每個隊列 |每個分區 |
|重播|沒有 |是（偏移重置）|
|使用案例 |任務分配|事件流、日誌 |
|路由|兌換+綁定 |主題+分區 |
|協定| AMQP |自訂二進位檔案 |

---

## 5. 交貨保證

### 5.1 最多一次

```
Producer → Broker: Send message (fire & forget)
Nếu network error → Message mất
Đơn giản, nhanh, nhưng có thể mất data

Use case: Metrics, logs (mất vài message OK)
```

### 5.2 至少一次

```
Producer → Broker: Send message
Broker → Producer: ACK
Nếu không nhận ACK → Producer gửi lại
→ Message có thể bị duplicate!

Use case: Most applications (xử lý duplicate bằng idempotency)
```

### 5.3 恰好一次

```
Rất khó đạt được thực sự. Thường là:
  At-Least-Once + Idempotent Consumer

Idempotent Consumer:
  message_id = "order-123-email"
  
  IF NOT EXISTS processed_messages[message_id]:
      process(message)
      INSERT processed_messages[message_id]
  ELSE:
      skip (đã xử lý rồi)
```

---

## 6. 死信佇列（DLQ）

```
Main Queue ──► Consumer ──► Xử lý thành công ✅
                 │
                 ├── Fail lần 1 → Retry
                 ├── Fail lần 2 → Retry
                 ├── Fail lần 3 → Retry
                 │
                 └── Fail lần 4 → Dead Letter Queue
                                   │
                                   ▼
                              ┌─────────┐
                              │  DLQ    │
                              │ Manual  │
                              │ Review  │
                              └─────────┘

DLQ chứa messages không thể xử lý
Ops team review và quyết định:
  - Fix bug → Replay message
  - Bad data → Discard
  - Dependency down → Replay sau khi fix
```

---

## 7. 背壓

```
Vấn đề: Producer nhanh hơn Consumer

 Producer: 10K msg/s ────► Queue ────► Consumer: 2K msg/s
                            │
                       Queue grows!
                       Memory fills!
                       System crash!

Giải pháp:
  1. Rate limiting: Producer giới hạn tốc độ
  2. Buffering: Queue có max size, reject khi đầy
  3. Scaling: Thêm consumers
  4. Sampling: Drop non-critical messages
  5. Flow control: Broker báo Producer slow down
```

---

## 總結

|工具|類型 |最適合 |
|--------|--------|----------|
|兔子MQ |訊息代理|任務分配、路由|
|卡夫卡|事件流 |高吞吐量、事件日誌 |
|品質標準 |雲端佇列|簡單的 AWS 工作負載 |
| Redis 串流 |記憶體中流 |即時、輕量 |
| NATS |訊息 |雲端原生、低延遲 |
|芹菜/Sidekiq |任務隊列 |後台工作 |

---

## 練習

1. **隊列設計：** 電子商務結帳包括：付款、庫存、電子郵件、簡訊、分析。設計訊息流。使用哪種模式：工作隊列還是發布/訂閱？

2. **冪等性：** 支付服務收到訊息「charge $100 for order-123」。網路超時，生產者再次發送。如何保證不重複充電？

3. **DLQ 策略：** 您在電子郵件服務的 DLQ 中偵測到 500 則訊息。 80% 由於電子郵件地址無效，20% 由於 SMTP 伺服器逾時。寫一個治療計劃。
