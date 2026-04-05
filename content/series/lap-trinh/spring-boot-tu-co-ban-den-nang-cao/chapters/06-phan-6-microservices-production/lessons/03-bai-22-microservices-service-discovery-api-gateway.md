---
id: 019c9617-fc22-7022-a022-fc2200000022
title: 'Bài 22: Microservices — Service Discovery & API Gateway'
slug: bai-22-microservices-service-discovery-api-gateway
description: >-
  Kiến trúc Microservices với Spring Boot. Service Discovery với Consul/Eureka.
  Spring Cloud Gateway. Circuit Breaker với Resilience4j. Config Server.
duration_minutes: 150
is_free: false
video_url: null
sort_order: 21
section_title: "Phần 6: Microservices & Production"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 Lập trình — Bài 21</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 22: Microservices — Service Discovery</tspan>
      <tspan x="60" dy="42">&amp; API Gateway</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Microservices &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Microservices architecture chia ứng dụng thành các services nhỏ, độc lập. Spring Cloud cung cấp đầy đủ công cụ: Service Discovery, API Gateway, Circuit Breaker, Config Server để xây dựng hệ thống microservices production-ready.

---

## 1. Microservices Architecture Overview

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

## 2. Service Discovery với Consul

### 2.1 Setup Consul (Docker)

```yaml
# docker-compose.yml
services:
  consul:
    image: hashicorp/consul:1.20
    ports:
      - "8500:8500"
    command: agent -server -bootstrap-expect=1 -ui -client=0.0.0.0
```

### 2.2 Spring Boot Service Registration

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

### 2.3 Service-to-Service Communication

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

## 3. API Gateway với Spring Cloud Gateway

### 3.1 Setup Gateway

```kotlin
// build.gradle.kts (Gateway Service)
implementation("org.springframework.cloud:spring-cloud-starter-gateway")
implementation("org.springframework.cloud:spring-cloud-starter-consul-discovery")
```

### 3.2 Route Configuration

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

### 3.3 Global Filters

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

## 4. Circuit Breaker với Resilience4j

### 4.1 Setup

```kotlin
// build.gradle.kts
implementation("org.springframework.cloud:spring-cloud-starter-circuitbreaker-resilience4j")
```

### 4.2 Cấu hình

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

### 4.3 Sử dụng trong Code

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

### 4.4 Circuit Breaker States

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

## 5. Centralized Configuration

### 5.1 Spring Cloud Config Server

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

### 5.2 Client Configuration

```yaml
# bootstrap.yml (Client Service)
spring:
  application:
    name: product-service
  config:
    import: optional:configserver:http://localhost:8888
```

---

## Tóm tắt

- Microservices architecture: mỗi service độc lập, có database riêng, giao tiếp qua REST/gRPC
- Service Discovery (Consul): tự động register/discover services, load balancing với @LoadBalanced
- API Gateway: single entry point, routing, filtering, circuit breaker integration
- Resilience4j Circuit Breaker: bảo vệ service khỏi cascading failures với fallback

## Bài tập

1. Xây dựng 3 microservices (Order, Product, User) với Consul service discovery. Test load balancing khi scale service
2. Setup Spring Cloud Gateway: routing tới 3 services, global logging filter, rate limiting
3. Implement Circuit Breaker cho Order → Product communication: test fallback khi Product service down
