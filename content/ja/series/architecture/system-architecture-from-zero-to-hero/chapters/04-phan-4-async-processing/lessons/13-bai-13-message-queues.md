---
id: 019d8a21-c110-7001-d001-e1f2a3b4c513
title: 'レッスン 13: メッセージ キューとタスク キュー'
slug: bai-13-message-queues-task-queues
description: >-
  なぜ非同期処理が必要なのでしょうか?メッセージキューとタスクキュー。 RabbitMQ のアーキテクチャと交換タイプ。 Apache Kafka
  アーキテクチャ。キュー パターン: ワーク キュー、Pub/Sub、デッド レター キュー。メッセージ配信と冪等性の保証。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 4: 非同期処理と通信'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ アーキテクチャ — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 13: メッセージ キューとタスク キュー</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 非同期処理と通信</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

同期処理: ユーザーが「注文」をクリック → 30 秒待ちます (注文の作成、メールの送信、送料の計算、在庫の更新など)。遅すぎる！ **メッセージ キュー** により、非同期処理が可能になり、待ち時間が短縮され、信頼性が向上します。

---

## 1. 同期と非同期

### 1.1 同期の問題

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

### 1.2 メッセージキューによる非同期

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

## 2. メッセージ キューとタスク キュー

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

### 3.1 AMQP アーキテクチャ

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

### 3.2 ワークキューのパターン

```
               ┌── Consumer 1 (xử lý message 1, 3, 5)
               │
Producer ──► Queue ──── Consumer 2 (xử lý message 2, 4, 6)
               │
               └── Consumer 3 (xử lý message 7, 8, 9)

Mỗi message chỉ được 1 consumer xử lý
Load balancing: Round-robin hoặc prefetch
```

### 3.3 パブリッシュ/サブスクライブ パターン

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

## 4. Apache Kafka

### 4.1 アーキテクチャ

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

### 4.2 Kafka と RabbitMQ の比較

|特長 |ラビットMQ |カフカ |
|----------|----------|----------|
|モデル |メッセージキュー |イベントログ |
|スループット | ~50,000 メッセージ/秒 | ~100万メッセージ/秒 |
|メッセージの保存 |消費→削除 |保持 (構成可能) |
|注文 |キューごと |パーティションごと |
|リプレイ |いいえ |はい (オフセットリセット) |
|使用例 |タスクの分散 |イベントストリーミング、ログ |
|ルーティング |交換 + バインディング |トピック + パーティション |
|プロトコル | AMQP |カスタムバイナリ |

---

## 5. 配送保証

### 5.1 最大 1 回

```
Producer → Broker: Send message (fire & forget)
Nếu network error → Message mất
Đơn giản, nhanh, nhưng có thể mất data

Use case: Metrics, logs (mất vài message OK)
```

### 5.2 少なくとも 1 回

```
Producer → Broker: Send message
Broker → Producer: ACK
Nếu không nhận ACK → Producer gửi lại
→ Message có thể bị duplicate!

Use case: Most applications (xử lý duplicate bằng idempotency)
```

### 5.3 1 回だけ

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

## 6. デッドレターキュー (DLQ)

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

## 7. バックプレッシャー

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

## 概要

|ツール |タイプ |最適な用途 |
|------|------|----------|
|ラビットMQ |メッセージブローカー |タスクの分散、ルーティング |
|カフカ |イベントストリーミング |高スループット、イベント ログ |
| SQS |クラウドキュー |シンプルな AWS ワークロード |
| Redis ストリーム |インメモリストリーム |リアルタイム、軽量 |
|ナッツ |メッセージ |クラウドネイティブ、低遅延 |
|セロリ/サイドキック |タスクキュー |バックグラウンドジョブ |

---

## 演習

1. **キューの設計:** 電子商取引のチェックアウトには、支払い、在庫、電子メール、SMS、分析が含まれます。メッセージ フローを設計します。ワークキューまたはパブリッシュ/サブスクライブのどちらのパターンを使用するか?

2. **冪等性:** 支払いサービスは「order-123 に $100 を請求します」というメッセージを受け取ります。ネットワークがタイムアウトしたため、プロデューサーが再度送信しました。二重充電をしないようにするにはどうすればよいですか?

3. **DLQ 戦略:** 電子メール サービスの DLQ で 500 のメッセージを検出しました。 80% は無効な電子メール アドレスが原因で、20% は SMTP サーバーのタイムアウトが原因です。治療計画を書きます。
