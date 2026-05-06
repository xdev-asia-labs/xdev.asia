---
id: 019e2a10-a115-7a01-b001-f1a2b3c4d515
title: 'レッスン 15: Apache Kafka — イベント駆動型アーキテクチャ'
slug: bai-15-apache-kafka-event-driven-architecture
description: >-
  Kafka を使用した SmallRye リアクティブ メッセージング、イベント ソーシング パターン、送信トレイ パターン、配信不能キュー、コンシューマー
  グループ。
duration_minutes: 120
is_free: false
video_url: null
sort_order: 14
section_title: 'パート 4: サービス間通信'
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: 'Quarkus マイクロサービス: 基本から運用まで'
  slug: quarkus-microservices-tu-co-ban-den-production
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7593" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7593)"/>

  <!-- Decorations -->
  <g>
    <circle cx="619" cy="227" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="638" cy="206" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="657" cy="185" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="676" cy="164" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="695" cy="143" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="137" x2="1100" y2="217" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="167" x2="1050" y2="237" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1014.712812921102,171 1014.712812921102,203 987,219 959.287187078898,203 959.287187078898,171 987,155" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 プログラミング — レッスン 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: Apache Kafka — イベント駆動型</tspan>
      <tspan x="60" dy="42">建築</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus マイクロサービス: 基本から運用まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: サービス間通信</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

イベント駆動型アーキテクチャ (EDA) は、サービス間の密結合の問題を解決します。サービスは直接呼び出すのではなく、**Apache Kafka** にイベントを発行します。他のサービスはサブスクライブして反応します。 Quarkus は、Kafka コネクタで **SmallRye Reactive Messaging** を使用します。

## REST/gRPC の代わりにイベントを使用するのはどのような場合ですか?

|パターン |使用例 |電子商取引の例 |
|----------|----------|--------|
| **休憩** |リクエストとレスポンス、すぐに結果が必要 |在庫を確認する |
| **gRPC** |高性能、内部 |一括在庫チェック |
| **カフカ イベント** |ファイアアンドフォーゲット、デカップリング |注文が作成されました → メールを送信 |

## Kafka 開発サービスのセットアップ

### 依存関係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-messaging-kafka</artifactId>
</dependency>
```

### ゼロ構成

Dev Services は Kafka コンテナー (Redpanda) を自動的に開始します。

```properties
# Không cần cấu hình gì cho dev mode!
# Kafka broker tự start, tạo topics tự động

# Production config
%prod.kafka.bootstrap.servers=${KAFKA_BOOTSTRAP_SERVERS}
```

## ドメインイベント

### イベントを定義する

```java
// Shared event schemas (có thể đặt trong common module)
public sealed interface OrderEvent {

    String orderId();
    String orderNumber();
    Instant timestamp();

    record OrderCreated(
        String orderId,
        String orderNumber,
        String customerId,
        String customerEmail,
        List<OrderItemInfo> items,
        BigDecimal totalAmount,
        Instant timestamp
    ) implements OrderEvent {}

    record OrderConfirmed(
        String orderId,
        String orderNumber,
        Instant timestamp
    ) implements OrderEvent {}

    record OrderPaid(
        String orderId,
        String orderNumber,
        String paymentId,
        BigDecimal amount,
        Instant timestamp
    ) implements OrderEvent {}

    record OrderCancelled(
        String orderId,
        String orderNumber,
        String reason,
        Instant timestamp
    ) implements OrderEvent {}

    record OrderItemInfo(
        Long productId,
        String productName,
        int quantity,
        BigDecimal unitPrice
    ) {}
}

public sealed interface PaymentEvent {
    record PaymentCompleted(
        String paymentId,
        String orderId,
        BigDecimal amount,
        String method,
        Instant timestamp
    ) implements PaymentEvent {}

    record PaymentFailed(
        String paymentId,
        String orderId,
        String reason,
        Instant timestamp
    ) implements PaymentEvent {}
}
```

## イベントプロデューサー — オーダーサービス

```java
import org.eclipse.microprofile.reactive.messaging.Channel;
import org.eclipse.microprofile.reactive.messaging.Emitter;
import io.smallrye.reactive.messaging.kafka.Record;

@ApplicationScoped
public class OrderEventPublisher {

    @Inject
    @Channel("order-events-out")
    Emitter<OrderEvent> orderEventEmitter;

    public void publishOrderCreated(Order order) {
        OrderEvent.OrderCreated event =
            new OrderEvent.OrderCreated(
                order.id.toString(),
                order.orderNumber,
                order.customerId,
                order.customerEmail,
                order.items.stream()
                    .map(i -> new OrderEvent.OrderItemInfo(
                        i.productId, i.productName,
                        i.quantity,
                        i.unitPrice.amount()))
                    .toList(),
                order.totalAmount.amount(),
                Instant.now());

        orderEventEmitter.send(event);
        Log.infof("Published OrderCreated: %s",
            order.orderNumber);
    }

    public void publishOrderPaid(Order order) {
        orderEventEmitter.send(
            new OrderEvent.OrderPaid(
                order.id.toString(),
                order.orderNumber,
                order.paymentId,
                order.totalAmount.amount(),
                Instant.now()));
    }

    public void publishOrderCancelled(Order order,
                                       String reason) {
        orderEventEmitter.send(
            new OrderEvent.OrderCancelled(
                order.id.toString(),
                order.orderNumber,
                reason,
                Instant.now()));
    }
}
```

### Kafka 構成 — プロデューサー

```properties
# application.properties (Order Service)
mp.messaging.outgoing.order-events-out.connector=smallrye-kafka
mp.messaging.outgoing.order-events-out.topic=order-events
mp.messaging.outgoing.order-events-out.value.serializer=io.quarkus.kafka.client.serialization.ObjectMapperSerializer
mp.messaging.outgoing.order-events-out.key.serializer=org.apache.kafka.common.serialization.StringSerializer
```

## イベントコンシューマ — 通知サービス

```java
import org.eclipse.microprofile.reactive.messaging.Incoming;
import io.smallrye.common.annotation.Blocking;

@ApplicationScoped
public class OrderEventConsumer {

    @Inject
    NotificationTemplateService templateService;

    @Inject
    EmailNotificationSender emailSender;

    @Incoming("order-events-in")
    @Blocking  // Nếu xử lý blocking (DB, email)
    public void onOrderEvent(OrderEvent event) {
        Log.infof("Received order event: %s",
            event.getClass().getSimpleName());

        switch (event) {
            case OrderEvent.OrderCreated created -> {
                Notification notification =
                    templateService.createOrderConfirmation(
                        created.customerEmail(),
                        created.orderNumber(),
                        created.totalAmount());
                notification.persist();
                emailSender.send(notification);
            }
            case OrderEvent.OrderPaid paid -> {
                // Gửi email xác nhận thanh toán
                Log.infof("Order %s paid with %s",
                    paid.orderNumber(), paid.paymentId());
            }
            case OrderEvent.OrderCancelled cancelled -> {
                // Gửi email thông báo hủy
                Log.infof("Order %s cancelled: %s",
                    cancelled.orderNumber(),
                    cancelled.reason());
            }
            default -> Log.warnf(
                "Unknown order event: %s", event);
        }
    }
}
```

### Kafka 構成 — コンシューマー

```properties
# application.properties (Notification Service)
mp.messaging.incoming.order-events-in.connector=smallrye-kafka
mp.messaging.incoming.order-events-in.topic=order-events
mp.messaging.incoming.order-events-in.group.id=notification-service
mp.messaging.incoming.order-events-in.auto.offset.reset=earliest
mp.messaging.incoming.order-events-in.value.deserializer=org.apache.kafka.common.serialization.StringDeserializer
mp.messaging.incoming.order-events-in.failure-strategy=dead-letter-queue
```

### カスタムデシリアライザー

```java
import io.quarkus.kafka.client.serialization.ObjectMapperDeserializer;

public class OrderEventDeserializer
        extends ObjectMapperDeserializer<OrderEvent> {
    public OrderEventDeserializer() {
        super(OrderEvent.class);
    }
}
```

## 製品サービス — ストック消費者

```java
@ApplicationScoped
public class StockEventConsumer {

    @Inject
    ProductRepository productRepo;

    @Incoming("order-events-for-stock")
    @Blocking
    @Transactional
    public void onOrderEvent(OrderEvent event) {
        switch (event) {
            case OrderEvent.OrderConfirmed confirmed -> {
                // Stock đã reserved qua gRPC khi confirm
                Log.infof("Order %s confirmed, stock reserved",
                    confirmed.orderNumber());
            }
            case OrderEvent.OrderCancelled cancelled -> {
                // Release stock
                // (cần OrderItems info - hoặc query Order Service)
                Log.infof("Order %s cancelled, releasing stock",
                    cancelled.orderNumber());
            }
            default -> {} // ignore
        }
    }
}
```

## 送信ボックス パターン — 保証された原子性

問題: 注文を DB に保存 + イベントを公開 — 成功するには両方が必要です (または両方が失敗します)。

```java
// Outbox table
@Entity
@Table(name = "outbox_events")
public class OutboxEvent extends PanacheEntity {

    @Column(name = "aggregate_type", length = 50)
    public String aggregateType; // "Order"

    @Column(name = "aggregate_id", length = 100)
    public String aggregateId;

    @Column(name = "event_type", length = 100)
    public String eventType; // "OrderCreated"

    @Column(columnDefinition = "TEXT")
    public String payload; // JSON

    @Column(name = "created_at")
    public LocalDateTime createdAt;

    @Column(name = "published")
    public boolean published = false;

    @PrePersist
    void onCreate() { createdAt = LocalDateTime.now(); }
}
```

```java
// Trong Order Service
@Transactional
public OrderDTO createOrder(CreateOrderRequest request) {
    Order order = new Order();
    // ... build order ...
    order.persist();

    // Cùng transaction: lưu event vào outbox
    OutboxEvent outbox = new OutboxEvent();
    outbox.aggregateType = "Order";
    outbox.aggregateId = order.id.toString();
    outbox.eventType = "OrderCreated";
    outbox.payload = objectMapper.writeValueAsString(
        OrderEvent.OrderCreated.from(order));
    outbox.persist();

    return OrderDTO.from(order);
    // Transaction commit → cả order + outbox event đều saved
}

// Scheduled poller: đọc outbox → publish to Kafka
@ApplicationScoped
public class OutboxPoller {

    @Inject @Channel("order-events-out")
    Emitter<String> emitter;

    @Scheduled(every = "5s")
    @Transactional
    void pollAndPublish() {
        List<OutboxEvent> pending = OutboxEvent
            .list("published = false ORDER BY createdAt ASC");

        for (OutboxEvent event : pending) {
            try {
                emitter.send(event.payload);
                event.published = true;
            } catch (Exception e) {
                Log.errorf("Failed to publish outbox: %s",
                    event.id);
            }
        }
    }
}
```

## デッドレターキュー

```properties
# Khi consumer fail xử lý message
mp.messaging.incoming.order-events-in.failure-strategy=dead-letter-queue
mp.messaging.incoming.order-events-in.dead-letter-queue.topic=order-events-dlq
mp.messaging.incoming.order-events-in.dead-letter-queue.value.serializer=org.apache.kafka.common.serialization.StringSerializer
```

## 演習

1. 定義 `OrderEvent` イベントタイプを使用したシールドされたインターフェイス
2.作成 `OrderEventPublisher` オーダーサービス中
3. 作成する `OrderEventConsumer` 通知サービス内
4. Kafka チャネルを構成する (プロデューサー + コンシューマー)
5. Outbox パターンを実装してアトミック性を確保する
6. テスト: 注文を作成 → 通知サービスがイベントを受信することを確認 → 電子メールを送信

## 概要

- **SmallRye リアクティブ メッセージング** — `@Incoming` (消費)、 `@Channel` + `Emitter` (プロデュース)
- **Dev Services** は Kafka (Redpanda) を自動的に開始します — ゼロ構成
- **タイプセーフなドメイン イベント用のシールドされたインターフェイス**
- **`@Blocking`** ブロッキング I/O (DB、電子メール) が必要なコンシューマー向け
- **送信ボックス パターン** により、DB 書き込み + イベント パブリッシュがアトミックに保証されます
- 失敗したメッセージの **デッドレター キュー** - イベントが失われることはありません

次の記事: フォールト トレランス — サーキット ブレーカー、再試行、バルクヘッド、タイムアウト。
