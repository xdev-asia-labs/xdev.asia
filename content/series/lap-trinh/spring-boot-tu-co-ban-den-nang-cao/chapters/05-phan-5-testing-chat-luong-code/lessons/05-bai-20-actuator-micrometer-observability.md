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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2292" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2292)"/>

  <!-- Decorations -->
  <g>
    <circle cx="797" cy="261" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="994" cy="78" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="691" cy="155" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="888" cy="232" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="1085" cy="49" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="131" x2="1100" y2="211" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="161" x2="1050" y2="231" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1003.5166604983954,168 1003.5166604983954,194 981,207 958.4833395016046,194 958.4833395016046,168 981,155" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 Lập trình — Bài 19</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 20: Actuator, Micrometer &amp;</tspan>
      <tspan x="60" dy="42">Observability</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Testing &amp; Chất lượng Code</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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
