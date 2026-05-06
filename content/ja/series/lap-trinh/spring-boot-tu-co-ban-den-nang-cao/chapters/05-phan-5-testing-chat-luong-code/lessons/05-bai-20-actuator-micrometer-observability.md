---
id: 019c9617-fc20-7020-a020-fc2000000020
title: 'レッスン 20: アクチュエーター、マイクロメーター、可観測性'
slug: bai-20-actuator-micrometer-observability
description: >-
  Spring Boot Actuator —
  ヘルスチェック、メトリクス、情報エンドポイント。アプリケーションメトリクス用のマイクロメーター。構造化されたロギング。トレース、メトリクス、ログによる可観測性。
duration_minutes: 120
is_free: false
video_url: null
sort_order: 19
section_title: 'パート 5: テストとコードの品質'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: 基本から上級まで'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 プログラミング — レッスン 19</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 20: アクチュエーター、マイクロメーター、</tspan>
      <tspan x="60" dy="42">可観測性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: テストとコードの品質</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

可観測性には、ログ、メトリクス、トレースの 3 つの柱があります。 Spring Boot 4 には、ヘルスチェック用の Actuator、メトリクス用の Micrometer、分散トレーシング用の Micrometer Tracing が組み込まれており、運用環境でのアプリケーションの監視とデバッグに役立ちます。

---

## 1. スプリングブーツアクチュエーター

### 1.1 セットアップ

```kotlin
// build.gradle.kts
implementation("org.springframework.boot:spring-boot-starter-actuator")
```

### 1.2 エンドポイントの構成

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

### 1.3 重要なエンドポイント

|エンドポイント |説明 |
|----------|----------|
| /アクチュエーター/健康 |ヘルスチェック — 上/下 |
| /アクチュエーター/情報 |アプリケーション情報 |
| /アクチュエーター/メトリクス |メトリクスのリスト |
| /actuator/metrics/{名前} |特定のメトリクスの詳細 |
| /アクチュエーター/プロメテウス |メトリクス Prometheus 形式 |
| /アクチュエーター/ロガー |ログ レベル ランタイムの表示と変更 |

### 1.4 カスタムヘルスインジケーター

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

### 1.5 ログレベルのランタイムの変更

```bash
# Xem log level hiện tại
curl http://localhost:8080/actuator/loggers/com.example.myapp

# Thay đổi log level (không cần restart)
curl -X POST http://localhost:8080/actuator/loggers/com.example.myapp \
  -H "Content-Type: application/json" \
  -d '{"configuredLevel": "DEBUG"}'
```

---

## 2. マイクロメーターの測定基準

### 2.1 カスタムメトリクス

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

### 2.2 @Timed アノテーション

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

### 2.3 プロメテウスの統合

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

アクセス `http://localhost:8080/actuator/prometheus` → プロメテウスのメトリクス:

```
# HELP orders_created_total Total orders created
# TYPE orders_created_total counter
orders_created_total{type="web"} 142.0

# HELP orders_processing_time_seconds Order processing duration
orders_processing_time_seconds_count 142
orders_processing_time_seconds_sum 28.456
```

---

## 3. 構造化されたロギング

### 3.1 JSON ログの構成

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

### 3.2 コンテキストログ

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

## 4. 分散トレーシング

### 4.1 マイクロメータートレースのセットアップ

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

### 4.2 カスタムスパン

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

### 4.3 可観測性アーキテクチャ

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

## 5. 実稼働環境におけるアクチュエータのセキュリティ

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

## 概要

- アクチュエーターはヘルスチェック、メトリクス、ロガーエンドポイントを提供します - 再起動せずにランタイムログレベルを変更できます
- マイクロメーター: カスタムメトリクスのカウンター、タイマー、ゲージ、Prometheus へのエクスポート
- 構造化ロギング (JSON/ECS 形式) + 分散トレーシング (OpenTelemetry) により、完全な可観測性スタックが作成されます
- 本番環境の Secure Actuator エンドポイント: ヘルス/情報のみを公開し、残りは ADMIN ロールを必要とします。

## 演習

1. Actuator の構成: ヘルス、メトリクス、Prometheus エンドポイントを公開します。外部 API 依存関係のカスタム状態インジケーターを作成する
2. カスタムメトリクスの実装: 注文のカウント、タイマーによるリクエストの処理時間の測定、ゲージによるアクティブユーザーの表示
3. 構造化ログと分散トレースをセットアップします: Prometheus + Grafana に接続します (docker-compose)
