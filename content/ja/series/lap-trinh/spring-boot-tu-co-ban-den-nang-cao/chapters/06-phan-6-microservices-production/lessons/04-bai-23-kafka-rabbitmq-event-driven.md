---
id: 019c9617-fc23-7023-a023-fc2300000023
title: 'レッスン 23: メッセージ キュー — Kafka と RabbitMQ'
slug: bai-23-kafka-rabbitmq-event-driven
description: >-
  メッセージ キューを備えたイベント駆動型アーキテクチャ。 Apache Kafka — プロデューサー、コンシューマー、トピック。 RabbitMQ —
  交換、キュー、バインディング。分散トランザクションのサーガ パターン。
duration_minutes: 150
is_free: false
video_url: null
sort_order: 22
section_title: 'パート 6: マイクロサービスとプロダクション'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: 基本から上級まで'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8239" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8239)"/>

  <!-- Decorations -->
  <g>
    <circle cx="782" cy="196" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="964" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="646" cy="220" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="828" cy="102" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="1010" cy="244" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="136" x2="1100" y2="216" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="166" x2="1050" y2="236" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1062.8467875173176,220.5 1062.8467875173176,251.5 1036,267 1009.1532124826824,251.5 1009.1532124826824,220.5 1036,205" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 プログラミング — レッスン 22</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 23: メッセージ キュー — Kafka と RabbitMQ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: マイクロサービスとプロダクション</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

マイクロサービスでは、密結合を回避して復元力を高めるために、サービスは非同期で通信する必要があります。 Apache Kafka と RabbitMQ は、最も人気のある 2 つのメッセージ ブローカーです。この記事では、両方を Spring Boot 4 と統合する方法について説明します。

---

## 1. イベント駆動型アーキテクチャ

```
Synchronous (REST):
  Order Service ──HTTP──► Product Service  (tight coupling)

Asynchronous (Message Queue):
  Order Service ──publish──► Message Broker ──consume──► Product Service
                                            ──consume──► Notification Service
                                            ──consume──► Analytics Service
```

**利点**:
- **デカップリング**: プロデューサーは、どのコンシューマーが聞いているかを知りません。
- **回復力**: コンシューマーがダウン → メッセージがキューで待機、データ損失なし
- **スケーラビリティ**: 並列処理用のコンシューマを追加します。

---

## 2. Apache Kafka

### 2.1 セットアップ

```kotlin
// build.gradle.kts
implementation("org.springframework.kafka:spring-kafka")
```

```yaml
# application.yml
spring:
  kafka:
    bootstrap-servers: localhost:9092
    producer:
      key-serializer: org.apache.kafka.common.serialization.StringSerializer
      value-serializer: org.springframework.kafka.support.serializer.JsonSerializer
    consumer:
      group-id: ${spring.application.name}
      auto-offset-reset: earliest
      key-deserializer: org.apache.kafka.common.serialization.StringDeserializer
      value-deserializer: org.springframework.kafka.support.serializer.JsonDeserializer
      properties:
        spring.json.trusted.packages: "com.example.*"
```

### 2.2 Kafka プロデューサー

```java
@Service
public class OrderEventProducer {

    private final KafkaTemplate<String, Object> kafkaTemplate;

    public OrderEventProducer(KafkaTemplate<String, Object> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void publishOrderCreated(OrderCreatedEvent event) {
        kafkaTemplate.send("order-events", event.orderId().toString(), event)
            .whenComplete((result, ex) -> {
                if (ex != null) {
                    log.error("Failed to publish event: {}", ex.getMessage());
                } else {
                    log.info("Published to partition {} offset {}",
                        result.getRecordMetadata().partition(),
                        result.getRecordMetadata().offset());
                }
            });
    }
}
```

### 2.3 Kafka コンシューマ

```java
@Component
public class OrderEventConsumer {

    @KafkaListener(topics = "order-events", groupId = "product-service")
    public void handleOrderCreated(OrderCreatedEvent event) {
        log.info("Received order event: {}", event.orderId());
        inventoryService.decreaseStock(event.items());
    }

    // Consumer với manual acknowledgment
    @KafkaListener(topics = "payment-events", groupId = "order-service",
        containerFactory = "kafkaManualAckListenerContainerFactory")
    public void handlePaymentResult(PaymentResultEvent event,
                                     Acknowledgment ack) {
        try {
            orderService.updatePaymentStatus(event);
            ack.acknowledge();  // Commit offset sau khi xử lý thành công
        } catch (Exception e) {
            log.error("Failed to process payment event", e);
            // Không ack → Kafka sẽ retry
        }
    }
}
```

### 2.4 Kafka トピックの構成

```java
@Configuration
public class KafkaTopicConfig {

    @Bean
    public NewTopic orderEventsTopic() {
        return TopicBuilder.name("order-events")
            .partitions(3)
            .replicas(1)
            .config(TopicConfig.RETENTION_MS_CONFIG, "604800000") // 7 days
            .build();
    }

    @Bean
    public NewTopic paymentEventsTopic() {
        return TopicBuilder.name("payment-events")
            .partitions(3)
            .replicas(1)
            .build();
    }
}
```

---

## 3.RabbitMQ

### 3.1 セットアップ

```kotlin
// build.gradle.kts
implementation("org.springframework.boot:spring-boot-starter-amqp")
```

```yaml
# application.yml
spring:
  rabbitmq:
    host: localhost
    port: 5672
    username: guest
    password: guest
```

### 3.2 交換、キュー、バインディング

```java
@Configuration
public class RabbitMQConfig {

    public static final String ORDER_EXCHANGE = "order.exchange";
    public static final String ORDER_CREATED_QUEUE = "order.created.queue";
    public static final String ORDER_CREATED_KEY = "order.created";

    @Bean
    public TopicExchange orderExchange() {
        return new TopicExchange(ORDER_EXCHANGE);
    }

    @Bean
    public Queue orderCreatedQueue() {
        return QueueBuilder.durable(ORDER_CREATED_QUEUE)
            .withArgument("x-dead-letter-exchange", "dlx.exchange")
            .withArgument("x-dead-letter-routing-key", "dlx.order.created")
            .build();
    }

    @Bean
    public Binding orderCreatedBinding() {
        return BindingBuilder
            .bind(orderCreatedQueue())
            .to(orderExchange())
            .with(ORDER_CREATED_KEY);
    }

    @Bean
    public Jackson2JsonMessageConverter messageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public RabbitTemplate rabbitTemplate(ConnectionFactory factory,
                                          Jackson2JsonMessageConverter converter) {
        RabbitTemplate template = new RabbitTemplate(factory);
        template.setMessageConverter(converter);
        return template;
    }
}
```

### 3.3 RabbitMQ プロデューサー

```java
@Service
public class OrderEventPublisher {

    private final RabbitTemplate rabbitTemplate;

    public OrderEventPublisher(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void publishOrderCreated(OrderCreatedEvent event) {
        rabbitTemplate.convertAndSend(
            RabbitMQConfig.ORDER_EXCHANGE,
            RabbitMQConfig.ORDER_CREATED_KEY,
            event
        );
        log.info("Published order event: {}", event.orderId());
    }
}
```

### 3.4 RabbitMQ コンシューマー

```java
@Component
public class OrderEventHandler {

    @RabbitListener(queues = RabbitMQConfig.ORDER_CREATED_QUEUE)
    public void handleOrderCreated(OrderCreatedEvent event) {
        log.info("Processing order: {}", event.orderId());
        inventoryService.decreaseStock(event.items());
    }
}
```

---

## 4. カフカ vs RabbitMQ

|特長 |カフカ |ラビットMQ |
|----------|----------|----------|
|モデル |ログベース (追加のみ) |キューベース (メッセージ消費) |
|スループット |非常に高い (数百万/秒) |高 (数万/秒) |
|メッセージの再生 |はい (消費者はもう一度読みます) |いいえ (ACK 後) |
|注文 |パーティション内 |キュー中 |
|使用例 |イベントストリーミング、分析 |タスクキュー、RPC |
|複雑さ |曹操 |中程度 |

---

## 5. Saga パターン — 分散トランザクション

```
┌────────────┐    ┌────────────┐    ┌────────────┐
│ Order      │    │ Payment    │    │ Inventory  │
│ Service    │    │ Service    │    │ Service    │
│            │    │            │    │            │
│ 1.Create   │───►│ 2.Charge   │───►│ 3.Reserve  │
│   Order    │    │   Payment  │    │   Stock    │
│            │    │            │    │            │
│ 6.Confirm  │◄───│ 5.Confirm  │◄───│ 4.Confirm  │
│   /Cancel  │    │  /Refund   │    │  /Release  │
└────────────┘    └────────────┘    └────────────┘
```

```java
// Choreography-based Saga
@Component
public class OrderSagaHandler {

    @KafkaListener(topics = "payment-completed")
    public void onPaymentCompleted(PaymentCompletedEvent event) {
        // Step: reserve inventory
        inventoryService.reserve(event.orderId(), event.items());
        kafkaTemplate.send("inventory-reserved",
            new InventoryReservedEvent(event.orderId()));
    }

    @KafkaListener(topics = "payment-failed")
    public void onPaymentFailed(PaymentFailedEvent event) {
        // Compensating action: cancel order
        orderService.cancelOrder(event.orderId());
    }

    @KafkaListener(topics = "inventory-failed")
    public void onInventoryFailed(InventoryFailedEvent event) {
        // Compensating actions: refund + cancel
        paymentService.refund(event.orderId());
        orderService.cancelOrder(event.orderId());
    }
}
```

---

## 概要

- イベント駆動型アーキテクチャにより、マイクロサービスの非同期通信が可能になり、復元力とスケーラビリティが向上します。
- Kafka: ログベース、メッセージの再生、非常に高いスループット - イベント ストリーミングに適しています
- RabbitMQ: キューベースの柔軟なルーティング、Dead Letter Exchange — タスク処理に適しています
- Saga パターンは、補償イベントを介して分散トランザクションを管理します

## 演習

1. Docker で Kafka をセットアップし、Order → Product イベント フローを実装します。OrderCreatedEvent を発行し、在庫を削減するために消費します。
2. RabbitMQ のセットアップ: Exchange/Queue/Binding を作成し、失敗したメッセージの Dead Letter Queue を使用した通知フローを実装します。
3. 注文フローのサーガ パターンを実装します: 注文 → 支払い → 在庫。いずれかのステップが失敗した場合の補償アクションを処理します。
