---
id: 019e2a10-a115-7a01-b001-f1a2b3c4d515
title: 'Bài 15: Apache Kafka — Event-Driven Architecture'
slug: bai-15-apache-kafka-event-driven-architecture
description: >-
  SmallRye Reactive Messaging với Kafka, Event Sourcing patterns,
  Outbox Pattern, dead letter queue, consumer groups.
duration_minutes: 120
is_free: false
video_url: null
sort_order: 14
section_title: "Phần 4: Inter-service Communication"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

## Giới thiệu

Event-Driven Architecture (EDA) giải quyết vấn đề tight coupling giữa services. Thay vì gọi trực tiếp, services publish events lên **Apache Kafka** — các services khác subscribe và react. Quarkus sử dụng **SmallRye Reactive Messaging** với Kafka connector.

## Khi nào dùng Events thay REST/gRPC?

| Pattern | Use case | Ví dụ E-Commerce |
|---------|----------|-------------------|
| **REST** | Request-Response, cần result ngay | Kiểm tra stock |
| **gRPC** | Hiệu suất cao, internal | Batch stock check |
| **Kafka Events** | Fire-and-forget, decoupling | Order created → send email |

## Setup Kafka Dev Services

### Dependency

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-messaging-kafka</artifactId>
</dependency>
```

### Zero Config

Dev Services tự động start Kafka container (Redpanda):

```properties
# Không cần cấu hình gì cho dev mode!
# Kafka broker tự start, tạo topics tự động

# Production config
%prod.kafka.bootstrap.servers=${KAFKA_BOOTSTRAP_SERVERS}
```

## Domain Events

### Định nghĩa Events

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

## Event Producer — Order Service

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

### Kafka Configuration — Producer

```properties
# application.properties (Order Service)
mp.messaging.outgoing.order-events-out.connector=smallrye-kafka
mp.messaging.outgoing.order-events-out.topic=order-events
mp.messaging.outgoing.order-events-out.value.serializer=io.quarkus.kafka.client.serialization.ObjectMapperSerializer
mp.messaging.outgoing.order-events-out.key.serializer=org.apache.kafka.common.serialization.StringSerializer
```

## Event Consumer — Notification Service

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

### Kafka Configuration — Consumer

```properties
# application.properties (Notification Service)
mp.messaging.incoming.order-events-in.connector=smallrye-kafka
mp.messaging.incoming.order-events-in.topic=order-events
mp.messaging.incoming.order-events-in.group.id=notification-service
mp.messaging.incoming.order-events-in.auto.offset.reset=earliest
mp.messaging.incoming.order-events-in.value.deserializer=org.apache.kafka.common.serialization.StringDeserializer
mp.messaging.incoming.order-events-in.failure-strategy=dead-letter-queue
```

### Custom Deserializer

```java
import io.quarkus.kafka.client.serialization.ObjectMapperDeserializer;

public class OrderEventDeserializer
        extends ObjectMapperDeserializer<OrderEvent> {
    public OrderEventDeserializer() {
        super(OrderEvent.class);
    }
}
```

## Product Service — Stock Consumer

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

## Outbox Pattern — Đảm bảo Atomicity

Problem: Lưu Order vào DB + publish event — cần cả hai thành công (hoặc cả hai fail).

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

## Dead Letter Queue

```properties
# Khi consumer fail xử lý message
mp.messaging.incoming.order-events-in.failure-strategy=dead-letter-queue
mp.messaging.incoming.order-events-in.dead-letter-queue.topic=order-events-dlq
mp.messaging.incoming.order-events-in.dead-letter-queue.value.serializer=org.apache.kafka.common.serialization.StringSerializer
```

## Bài tập

1. Định nghĩa `OrderEvent` sealed interface với các event types
2. Tạo `OrderEventPublisher` trong Order Service
3. Tạo `OrderEventConsumer` trong Notification Service
4. Cấu hình Kafka channels (producer + consumer)
5. Implement Outbox Pattern đảm bảo atomicity
6. Test: tạo order → verify Notification Service nhận event → gửi email

## Tổng kết

- **SmallRye Reactive Messaging** — `@Incoming` (consume), `@Channel` + `Emitter` (produce)
- **Dev Services** tự động start Kafka (Redpanda) — zero-config
- **Sealed interfaces** cho type-safe domain events
- **`@Blocking`** cho consumer cần blocking I/O (DB, email)
- **Outbox Pattern** đảm bảo DB write + event publish atomic
- **Dead Letter Queue** cho failed messages — không mất events

Bài tiếp theo: Fault Tolerance — Circuit Breaker, Retry, Bulkhead, Timeout.
