---
id: 019c9617-fc20-7020-a020-fc2000000020
title: 'Bài 20: Actuator, Micrometer & Observability'
slug: bai-20-actuator-micrometer-observability
description: >-
  Spring Boot Actuator — health checks, metrics, info endpoints. Micrometer cho
  application metrics. Structured logging. Observability với traces, metrics, logs.
duration_minutes: 120
is_free: false
video_url: null
sort_order: 19
section_title: "Phần 5: Testing & Chất lượng Code"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

## Giới thiệu

Observability gồm 3 pillars: Logs, Metrics, Traces. Spring Boot 4 tích hợp sẵn Actuator cho health checks, Micrometer cho metrics, và Micrometer Tracing cho distributed tracing — giúp monitor và debug ứng dụng trong production.

---

## 1. Spring Boot Actuator

### 1.1 Setup

```kotlin
// build.gradle.kts
implementation("org.springframework.boot:spring-boot-starter-actuator")
```

### 1.2 Cấu hình Endpoints

```yaml
# application.yml
management:
  endpoints:
    web:
      exposure:
        include: health, info, metrics, prometheus, env, loggers
      base-path: /actuator
  endpoint:
    health:
      show-details: when_authorized
      show-components: always
  info:
    env:
      enabled: true
```

### 1.3 Các Endpoints quan trọng

| Endpoint | Mô tả |
|----------|--------|
| /actuator/health | Health check — UP/DOWN |
| /actuator/info | Application info |
| /actuator/metrics | Danh sách metrics |
| /actuator/metrics/{name} | Chi tiết metric cụ thể |
| /actuator/prometheus | Metrics dạng Prometheus format |
| /actuator/loggers | Xem và thay đổi log level runtime |

### 1.4 Custom Health Indicator

```java
@Component
public class DatabaseHealthIndicator implements HealthIndicator {

    private final DataSource dataSource;

    public DatabaseHealthIndicator(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public Health health() {
        try (Connection conn = dataSource.getConnection()) {
            if (conn.isValid(2)) {
                return Health.up()
                    .withDetail("database", "PostgreSQL")
                    .withDetail("connection", "valid")
                    .build();
            }
        } catch (SQLException e) {
            return Health.down()
                .withDetail("error", e.getMessage())
                .build();
        }
        return Health.down().build();
    }
}
```

### 1.5 Thay đổi Log Level Runtime

```bash
# Xem log level hiện tại
curl http://localhost:8080/actuator/loggers/com.example.myapp

# Thay đổi log level (không cần restart)
curl -X POST http://localhost:8080/actuator/loggers/com.example.myapp \
  -H "Content-Type: application/json" \
  -d '{"configuredLevel": "DEBUG"}'
```

---

## 2. Micrometer Metrics

### 2.1 Custom Metrics

```java
@Service
public class OrderService {

    private final Counter orderCounter;
    private final Timer orderProcessingTimer;
    private final AtomicInteger activeOrders;

    public OrderService(MeterRegistry registry) {
        this.orderCounter = Counter.builder("orders.created")
            .description("Total orders created")
            .tag("type", "web")
            .register(registry);

        this.orderProcessingTimer = Timer.builder("orders.processing.time")
            .description("Order processing duration")
            .register(registry);

        this.activeOrders = registry.gauge("orders.active",
            new AtomicInteger(0));
    }

    public OrderResponse createOrder(CreateOrderRequest request) {
        return orderProcessingTimer.record(() -> {
            activeOrders.incrementAndGet();
            try {
                OrderResponse result = processOrder(request);
                orderCounter.increment();
                return result;
            } finally {
                activeOrders.decrementAndGet();
            }
        });
    }
}
```

### 2.2 @Timed Annotation

```java
@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    @Timed(value = "api.products.get",
           description = "Time to get product",
           percentiles = {0.5, 0.95, 0.99})
    @GetMapping("/{id}")
    public ResponseEntity<ProductResponse> getProduct(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProduct(id));
    }
}
```

### 2.3 Prometheus Integration

```kotlin
// build.gradle.kts
implementation("io.micrometer:micrometer-registry-prometheus")
```

```yaml
# application.yml
management:
  prometheus:
    metrics:
      export:
        enabled: true
```

Truy cập `http://localhost:8080/actuator/prometheus` → metrics dạng Prometheus:

```
# HELP orders_created_total Total orders created
# TYPE orders_created_total counter
orders_created_total{type="web"} 142.0

# HELP orders_processing_time_seconds Order processing duration
orders_processing_time_seconds_count 142
orders_processing_time_seconds_sum 28.456
```

---

## 3. Structured Logging

### 3.1 Cấu hình JSON Logging

```yaml
# application.yml
logging:
  structured:
    format:
      console: ecs  # Elastic Common Schema
  level:
    com.example: DEBUG
    org.springframework.web: INFO
```

### 3.2 Contextual Logging

```java
@Service
public class OrderService {

    private static final Logger log = LoggerFactory.getLogger(OrderService.class);

    public OrderResponse createOrder(CreateOrderRequest request) {
        log.info("Creating order for user: {}, items: {}",
            request.userId(), request.items().size());

        try {
            Order order = processOrder(request);
            log.info("Order created successfully: orderId={}, total={}",
                order.getId(), order.getTotalAmount());
            return OrderResponse.from(order);
        } catch (Exception e) {
            log.error("Failed to create order for user: {}",
                request.userId(), e);
            throw e;
        }
    }
}
```

---

## 4. Distributed Tracing

### 4.1 Setup Micrometer Tracing

```kotlin
// build.gradle.kts
implementation("io.micrometer:micrometer-tracing-bridge-otel")
implementation("io.opentelemetry:opentelemetry-exporter-otlp")
```

```yaml
# application.yml
management:
  tracing:
    sampling:
      probability: 1.0  # 100% sampling (dev), production: 0.1
  otlp:
    tracing:
      endpoint: http://localhost:4318/v1/traces
```

### 4.2 Custom Spans

```java
@Service
public class PaymentService {

    private final ObservationRegistry observationRegistry;

    public PaymentService(ObservationRegistry observationRegistry) {
        this.observationRegistry = observationRegistry;
    }

    public PaymentResult processPayment(PaymentRequest request) {
        return Observation.createNotStarted("payment.process", observationRegistry)
            .lowCardinalityKeyValue("payment.method", request.method())
            .observe(() -> {
                // Logic xử lý payment
                return doProcessPayment(request);
            });
    }
}
```

### 4.3 Observability Architecture

```
┌─────────────────────────────────────────────┐
│           Spring Boot Application            │
│  ┌──────────┐ ┌──────────┐ ┌──────────────┐ │
│  │  Logs    │ │ Metrics  │ │   Traces     │ │
│  │ Logback  │ │Micrometer│ │  OTel/Brave  │ │
│  └────┬─────┘ └────┬─────┘ └──────┬───────┘ │
└───────┼────────────┼───────────────┼─────────┘
        │            │               │
        ▼            ▼               ▼
   ┌────────┐  ┌──────────┐  ┌───────────┐
   │  Loki  │  │Prometheus│  │   Tempo   │
   └───┬────┘  └────┬─────┘  └─────┬─────┘
       │            │               │
       └────────────┼───────────────┘
                    ▼
              ┌──────────┐
              │ Grafana  │  ← Dashboard tổng hợp
              └──────────┘
```

---

## 5. Bảo mật Actuator trong Production

```java
@Bean
public SecurityFilterChain actuatorSecurity(HttpSecurity http) throws Exception {
    http
        .securityMatcher("/actuator/**")
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/actuator/health").permitAll()
            .requestMatchers("/actuator/info").permitAll()
            .requestMatchers("/actuator/**").hasRole("ADMIN"))
        .httpBasic(Customizer.withDefaults());
    return http.build();
}
```

---

## Tóm tắt

- Actuator cung cấp health checks, metrics, loggers endpoints — có thể thay đổi log level runtime không cần restart
- Micrometer: Counter, Timer, Gauge cho custom metrics, export sang Prometheus
- Structured logging (JSON/ECS format) + Distributed Tracing (OpenTelemetry) tạo nên observability stack hoàn chỉnh
- Bảo mật Actuator endpoints trong production: chỉ expose health/info công khai, còn lại yêu cầu ADMIN role

## Bài tập

1. Cấu hình Actuator: expose health, metrics, prometheus endpoints. Tạo custom health indicator cho external API dependency
2. Implement custom metrics: đếm số orders, đo thời gian xử lý request với Timer, hiển thị active users với Gauge
3. Setup structured logging và distributed tracing: kết nối với Prometheus + Grafana (docker-compose)
