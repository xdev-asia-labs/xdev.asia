---
id: 019c9617-fc22-7022-a022-fc2200000022
title: 'レッスン 22: マイクロサービス — サービス ディスカバリと API ゲートウェイ'
slug: bai-22-microservices-service-discovery-api-gateway
description: >-
  Spring Boot を使用したマイクロサービス アーキテクチャ。 Consul/Eureka によるサービスディスカバリ。春のクラウドゲートウェイ。
  Resilience4j を備えたサーキット ブレーカー。構成サーバー。
duration_minutes: 150
is_free: false
video_url: null
sort_order: 21
section_title: 'パート 6: マイクロサービスとプロダクション'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: 基本から上級まで'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 プログラミング — レッスン 21</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 22: マイクロサービス — サービス検出</tspan>
      <tspan x="60" dy="42">& APIゲートウェイ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: マイクロサービスとプロダクション</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

マイクロサービス アーキテクチャは、アプリケーションを小さな独立したサービスに分割します。 Spring Cloud は、実稼働対応のマイクロサービス システムを構築するための完全なツール (Service Discovery、API Gateway、Circuit Breaker、Config Server) を提供します。

---

## 1. マイクロサービス アーキテクチャの概要

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

## 2. Consul によるサービスの発見

### 2.1 Consul (Docker) のセットアップ

```yaml
# docker-compose.yml
services:
  consul:
    image: hashicorp/consul:1.20
    ports:
      - "8500:8500"
    command: agent -server -bootstrap-expect=1 -ui -client=0.0.0.0
```

### 2.2 Spring Boot サービスの登録

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

### 2.3 サービス間の通信

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

## 3. Spring Cloud Gateway を使用した API ゲートウェイ

### 3.1 ゲートウェイのセットアップ

```kotlin
// build.gradle.kts (Gateway Service)
implementation("org.springframework.cloud:spring-cloud-starter-gateway")
implementation("org.springframework.cloud:spring-cloud-starter-consul-discovery")
```

### 3.2 ルート構成

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

### 3.3 グローバルフィルター

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

## 4. Resilience4j を備えたサーキットブレーカー

### 4.1 セットアップ

```kotlin
// build.gradle.kts
implementation("org.springframework.cloud:spring-cloud-starter-circuitbreaker-resilience4j")
```

### 4.2 構成

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

### 4.3 コードでの使用

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

### 4.4 サーキットブレーカーの状態

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

## 5. 集中構成

### 5.1 Spring クラウド構成サーバー

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

### 5.2 クライアント構成

```yaml
# bootstrap.yml (Client Service)
spring:
  application:
    name: product-service
  config:
    import: optional:configserver:http://localhost:8888
```

---

## 概要

- マイクロサービス アーキテクチャ: 各サービスは独立しており、独自のデータベースを持ち、REST/gRPC 経由で通信します。
- サービス検出 (Consul): サービスの自動登録/検出、@LoadBalanced による負荷分散
- API ゲートウェイ: シングル エントリ ポイント、ルーティング、フィルタリング、サーキット ブレーカーの統合
- Resilience4j サーキット ブレーカー: フォールバックによる連鎖的な障害からサービスを保護します

## 演習

1. Consul サービス ディスカバリを使用して 3 つのマイクロサービス (Order、Product、User) を構築します。サービスをスケーリングするときに負荷分散をテストする
2. Spring Cloud Gateway のセットアップ: 3 つのサービスへのルーティング、グローバル ロギング フィルター、レート制限
3. 注文→製品通信用にサーキット ブレーカーを実装: 製品サービスがダウンしたときのテスト フォールバック
