---
id: 019e2a10-a115-7a01-b001-f1a2b3c4d515
title: 第 15 課：Apache Kafka — 事件驅動架構
slug: bai-15-apache-kafka-event-driven-architecture
description: SmallRye 與 Kafka 的反應式訊息傳遞、事件溯源模式、寄件匣模式、死信佇列、消費者群組。
duration_minutes: 120
is_free: false
video_url: null
sort_order: 14
section_title: 第 4 部分：服務間通信
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: Quarkus 微服務：從基礎知識到生產
  slug: quarkus-microservices-tu-co-ban-den-production
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 程式設計 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：Apache Kafka — 事件驅動</tspan>
      <tspan x="60" dy="42">大樓</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus 微服務：從基礎知識到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：服務間通信</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

事件驅動架構（EDA）解決了服務之間的緊密耦合問題。服務不是直接呼叫它，而是將事件發佈到 **Apache Kafka** - 其他服務訂閱並做出反應。 Quarkus 將 **SmallRye Reactive Messaging** 與 Kafka 連接器結合使用。

## 何時使用事件而不是 REST/gRPC？

|圖案|使用案例 |電子商務範例|
|--------|----------|--------------------|
| **休息** |請求-回應，立即需要結果 |查看庫存 |
| **gRPC** |高效能，內部 |批次庫存查詢 |
| **卡夫卡事件** |即發即忘、解耦 |訂單已建立 → 傳送電子郵件 |

## 設定 Kafka 開發服務

### 依賴關係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-messaging-kafka</artifactId>
</dependency>
```

### 零配置

開發服務可自動啟動 Kafka 容器（Redpanda）：

```properties
# Không cần cấu hình gì cho dev mode!
# Kafka broker tự start, tạo topics tự động

# Production config
%prod.kafka.bootstrap.servers=${KAFKA_BOOTSTRAP_SERVERS}
```

## 領域事件

### 定義事件

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

## 事件製作者 — 訂單服務

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

### Kafka 設定－生產者

```properties
# application.properties (Order Service)
mp.messaging.outgoing.order-events-out.connector=smallrye-kafka
mp.messaging.outgoing.order-events-out.topic=order-events
mp.messaging.outgoing.order-events-out.value.serializer=io.quarkus.kafka.client.serialization.ObjectMapperSerializer
mp.messaging.outgoing.order-events-out.key.serializer=org.apache.kafka.common.serialization.StringSerializer
```

## 事件消費者－通知服務

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

### Kafka 設定 — 消費者

```properties
# application.properties (Notification Service)
mp.messaging.incoming.order-events-in.connector=smallrye-kafka
mp.messaging.incoming.order-events-in.topic=order-events
mp.messaging.incoming.order-events-in.group.id=notification-service
mp.messaging.incoming.order-events-in.auto.offset.reset=earliest
mp.messaging.incoming.order-events-in.value.deserializer=org.apache.kafka.common.serialization.StringDeserializer
mp.messaging.incoming.order-events-in.failure-strategy=dead-letter-queue
```

### 自訂解串器

```java
import io.quarkus.kafka.client.serialization.ObjectMapperDeserializer;

public class OrderEventDeserializer
        extends ObjectMapperDeserializer<OrderEvent> {
    public OrderEventDeserializer() {
        super(OrderEvent.class);
    }
}
```

## 產品服務 — 庫存消費者

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

## 寄件匣模式－保證原子性

問題：將訂單儲存到資料庫 + 發布事件 - 需要兩者都成功（或兩者都失敗）。

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

## 死信隊列

```properties
# Khi consumer fail xử lý message
mp.messaging.incoming.order-events-in.failure-strategy=dead-letter-queue
mp.messaging.incoming.order-events-in.dead-letter-queue.topic=order-events-dlq
mp.messaging.incoming.order-events-in.dead-letter-queue.value.serializer=org.apache.kafka.common.serialization.StringSerializer
```

## 練習

1. 定義 `OrderEvent` 具有事件類型的密封接口
2. 創建 `OrderEventPublisher` 訂單服務
3.創建 `OrderEventConsumer` 在通知服務中
4.配置Kafka通道（生產者+消費者）
5. 實現發件箱模式確保原子性
6. 測試：建立訂單 → 驗證通知服務接收事件 → 發送電子郵件

## 總結

- **SmallRye 反應式訊息傳送** — `@Incoming` （消耗）， `@Channel` + `Emitter` （生產）
- **開發服務**自動啟動 Kafka (Redpanda) — 零配置
- **密封介面**用於型別安全的網域事件
- **`@Blocking`** 適用於需要阻塞 I/O（資料庫、電子郵件）的消費者
- **寄件匣模式**確保資料庫寫入+事件發布原子
- **失敗訊息的死信佇列** - 沒有遺失事件

下一篇：容錯 - 斷路器、重試、隔板、超時。
