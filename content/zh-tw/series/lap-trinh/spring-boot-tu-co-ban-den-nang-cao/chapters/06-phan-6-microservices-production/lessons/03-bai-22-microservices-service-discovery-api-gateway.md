---
id: 019c9617-fc22-7022-a022-fc2200000022
title: 第 22 課：微服務 — 服務發現與 API 閘道
slug: bai-22-microservices-service-discovery-api-gateway
description: >-
  使用 Spring Boot 的微服務架構。使用 Consul/Eureka 進行服務發現。 Spring雲端網關。具有 Resilience4j
  的斷路器。配置伺服器。
duration_minutes: 150
is_free: false
video_url: null
sort_order: 21
section_title: 第 6 部分：微服務與生產
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: Spring Boot 4：從基礎到高級
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4939" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4939)"/>

  <!-- Decorations -->
  <g>
    <circle cx="611" cy="123" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="622" cy="154" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="633" cy="185" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="644" cy="216" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="655" cy="247" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="153" x2="1100" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="183" x2="1050" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1027.2487113059642,189 1027.2487113059642,217 1003,231 978.7512886940357,217 978.7512886940357,189 1003,175" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 程式設計 — 第 21 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 22 課：微服務－服務發現</tspan>
      <tspan x="60" dy="42">& API網關</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：微服務與生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

微服務架構將應用程式劃分為小型的、獨立的服務。 Spring Cloud 提供了完整的工具：服務發現、API 閘道、斷路器、設定伺服器來建置生產就緒的微服務系統。

---

## 1. 微服務架構概述

```
                    ┌──────────────┐
                    │   Client     │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │ API Gateway  │
                    │(Spring Cloud)│
                    └──────┬───────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
   ┌──────▼──────┐ ┌──────▼──────┐ ┌──────▼──────┐
   │ Order       │ │ Product     │ │ User        │
   │ Service     │ │ Service     │ │ Service     │
   └──────┬──────┘ └──────┬──────┘ └──────┬──────┘
          │                │                │
          ▼                ▼                ▼
     ┌─────────┐    ┌─────────┐     ┌─────────┐
     │Order DB │    │Product  │     │User DB  │
     │(Postgres)│   │DB(Mongo)│     │(Postgres)│
     └─────────┘    └─────────┘     └─────────┘
```

---

## 2. 使用 Consul 進行服務發現

### 2.1 設定 Consul (Docker)

```yaml
# docker-compose.yml
services:
  consul:
    image: hashicorp/consul:1.20
    ports:
      - "8500:8500"
    command: agent -server -bootstrap-expect=1 -ui -client=0.0.0.0
```

### 2.2 Spring Boot服務註冊

```kotlin
// build.gradle.kts
implementation("org.springframework.cloud:spring-cloud-starter-consul-discovery")
```

```yaml
# application.yml (Product Service)
spring:
  application:
    name: product-service
  cloud:
    consul:
      host: localhost
      port: 8500
      discovery:
        service-name: ${spring.application.name}
        health-check-interval: 10s
        instance-id: ${spring.application.name}:${random.value}
```

### 2.3 服務到服務通信

```java
@Configuration
public class RestClientConfig {

    @Bean
    @LoadBalanced
    public RestClient.Builder restClientBuilder() {
        return RestClient.builder();
    }
}

@Service
public class OrderService {

    private final RestClient restClient;

    public OrderService(RestClient.Builder builder) {
        this.restClient = builder
            .baseUrl("http://product-service")  // Tên service, không phải IP
            .build();
    }

    public ProductResponse getProduct(Long productId) {
        return restClient.get()
            .uri("/api/v1/products/{id}", productId)
            .retrieve()
            .body(ProductResponse.class);
    }
}
```

---

## 3. API 閘道與 Spring Cloud Gateway

### 3.1 設定網關

```kotlin
// build.gradle.kts (Gateway Service)
implementation("org.springframework.cloud:spring-cloud-starter-gateway")
implementation("org.springframework.cloud:spring-cloud-starter-consul-discovery")
```

### 3.2 路由配置

```yaml
# application.yml
spring:
  application:
    name: api-gateway
  cloud:
    gateway:
      routes:
        - id: product-service
          uri: lb://product-service
          predicates:
            - Path=/api/v1/products/**
          filters:
            - StripPrefix=0
            - name: CircuitBreaker
              args:
                name: productCircuitBreaker
                fallbackUri: forward:/fallback/products

        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/v1/orders/**
          filters:
            - StripPrefix=0

        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/api/v1/users/**
```

### 3.3 全域過濾器

```java
@Component
public class LoggingFilter implements GlobalFilter, Ordered {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String requestId = UUID.randomUUID().toString();
        exchange.getRequest().mutate()
            .header("X-Request-Id", requestId);

        log.info("Request: {} {} [{}]",
            exchange.getRequest().getMethod(),
            exchange.getRequest().getPath(),
            requestId);

        return chain.filter(exchange);
    }

    @Override
    public int getOrder() {
        return -1;
    }
}
```

---

## 4.具有 Resilience4j 的斷路器

### 4.1 設置

```kotlin
// build.gradle.kts
implementation("org.springframework.cloud:spring-cloud-starter-circuitbreaker-resilience4j")
```

### 4.2 配置

```yaml
resilience4j:
  circuitbreaker:
    instances:
      productService:
        sliding-window-size: 10
        failure-rate-threshold: 50
        wait-duration-in-open-state: 10s
        permitted-number-of-calls-in-half-open-state: 3
        slow-call-duration-threshold: 2s
        slow-call-rate-threshold: 80

  retry:
    instances:
      productService:
        max-attempts: 3
        wait-duration: 1s
        exponential-backoff-multiplier: 2

  timelimiter:
    instances:
      productService:
        timeout-duration: 3s
```

### 4.3 在程式碼中使用

```java
@Service
public class OrderService {

    private final RestClient restClient;
    private final CircuitBreakerFactory circuitBreakerFactory;

    @CircuitBreaker(name = "productService", fallbackMethod = "getProductFallback")
    @Retry(name = "productService")
    public ProductResponse getProduct(Long productId) {
        return restClient.get()
            .uri("/api/v1/products/{id}", productId)
            .retrieve()
            .body(ProductResponse.class);
    }

    // Fallback khi circuit open hoặc service down
    private ProductResponse getProductFallback(Long productId, Throwable t) {
        log.warn("Fallback for product {}: {}", productId, t.getMessage());
        return new ProductResponse(productId, "Unknown Product",
            BigDecimal.ZERO, "N/A");
    }
}
```

### 4.4 斷路器狀態

```
      ┌─────────┐   Failure rate > threshold   ┌──────────┐
      │ CLOSED  │ ──────────────────────────►  │   OPEN   │
      │(normal) │                              │(blocking)│
      └────▲────┘                              └────┬─────┘
           │                                        │
           │  Success rate OK          Wait timeout │
           │                                        │
      ┌────┴──────────┐                            │
      │  HALF-OPEN    │ ◄──────────────────────────┘
      │(testing)      │
      └───────────────┘
```

---

## 5.集中配置

### 5.1 Spring Cloud 設定伺服器

```yaml
# Config Server application.yml
spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/myorg/config-repo
          default-label: main
```

### 5.2 客戶端配置

```yaml
# bootstrap.yml (Client Service)
spring:
  application:
    name: product-service
  config:
    import: optional:configserver:http://localhost:8888
```

---

## 總結

- 微服務架構：每個服務都是獨立的，有自己的資料庫，透過REST/gRPC進行通信
- 服務發現（Consul）：自動註冊/發現服務，使用@LoadBalanced進行負載平衡
- API閘道：單一入口點、路由、過濾、斷路器集成
- Resilience4j Circuit Breaker：透過回退保護服務免受級聯故障的影響

## 練習

1. 使用 Consul 服務發現建構 3 個微服務（訂單、產品、使用者）。擴展服務時測試負載平衡
2.設定Spring Cloud Gateway：路由到3個服務，全域日誌過濾器，速率限制
3. 為訂單→產品通訊實施斷路器：產品服務中斷時測試回退
