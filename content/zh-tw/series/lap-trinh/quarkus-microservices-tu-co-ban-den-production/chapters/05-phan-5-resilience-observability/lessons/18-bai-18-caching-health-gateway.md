---
id: 019e2a10-a118-7a01-b001-f1a2b3c4d518
title: 第 18 課：快取、運行狀況檢查和 API 網關
slug: bai-18-caching-health-checks-api-gateway
description: 使用 @CacheResult 進行 Redis 快取、運行狀況檢查（活躍性/就緒性）、API 閘道模式、速率限制、聚合。
duration_minutes: 100
is_free: false
video_url: null
sort_order: 17
section_title: 第 5 部分：彈性和可觀察性
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: Quarkus 微服務：從基礎知識到生產
  slug: quarkus-microservices-tu-co-ban-den-production
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4252" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4252)"/>

  <!-- Decorations -->
  <g>
    <circle cx="827" cy="51" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1054" cy="58" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="781" cy="65" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="1008" cy="72" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="79" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="121" x2="1100" y2="201" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="151" x2="1050" y2="221" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1052.1769145362398,203 1052.1769145362398,239 1021,257 989.8230854637602,239 989.8230854637602,203 1021,185" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 程式設計 — 第 17 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 18 課：快取、運行狀況檢查和 API</tspan>
      <tspan x="60" dy="42">閘道</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus 微服務：從基礎知識到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：彈性和可觀察性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

本文透過 3 個橫切關注點完善了微服務平台：**Redis 快取**減少資料庫負載，**用於 Kubernetes 就緒/活躍性探針的運行狀況檢查**，以及 **API 網關**作為前端的單一入口點。

## Redis 緩存

### 依賴關係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-cache</artifactId>
</dependency>
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-redis-cache</artifactId>
</dependency>
```

### 配置

```properties
# Dev Services tự động start Redis container
# Production:
%prod.quarkus.redis.hosts=redis://localhost:6379
%prod.quarkus.redis.password=${REDIS_PASSWORD}

# Cache TTL
quarkus.cache.redis.product-cache.ttl=5M
quarkus.cache.redis.category-cache.ttl=30M
quarkus.cache.redis.product-list-cache.ttl=2M
```

### @CacheResult — 快取方法返回

```java
import io.quarkus.cache.CacheResult;
import io.quarkus.cache.CacheInvalidate;
import io.quarkus.cache.CacheInvalidateAll;
import io.quarkus.cache.CacheKey;

@ApplicationScoped
public class ProductService {

    // Cache kết quả findById
    @CacheResult(cacheName = "product-cache")
    public ProductDTO getById(@CacheKey Long id) {
        Log.infof("Cache MISS: product %d", id);
        Product product = productRepo.findByIdOptional(id)
            .orElseThrow(() ->
                new ResourceNotFoundException("Product", id));
        return ProductDTO.from(product);
    }

    // Invalidate khi update
    @CacheInvalidate(cacheName = "product-cache")
    @Transactional
    public ProductDTO update(@CacheKey Long id,
                             UpdateProductRequest req) {
        Product product = productRepo.findByIdOptional(id)
            .orElseThrow(() ->
                new ResourceNotFoundException("Product", id));
        // ... update fields ...
        return ProductDTO.from(product);
    }

    // Invalidate khi delete
    @CacheInvalidate(cacheName = "product-cache")
    @Transactional
    public void delete(@CacheKey Long id) {
        productRepo.deleteById(id);
    }

    // Cache list với composite key
    @CacheResult(cacheName = "product-list-cache")
    public List<ProductListDTO> listByCategory(
            @CacheKey String category,
            @CacheKey int page,
            @CacheKey int size) {
        return productRepo
            .findActive(category, null,
                Sort.by("createdAt").descending())
            .page(Page.of(page, size))
            .list().stream()
            .map(ProductListDTO::from).toList();
    }

    // Invalidate toàn bộ cache
    @CacheInvalidateAll(cacheName = "product-list-cache")
    @Transactional
    public ProductDTO create(CreateProductRequest req) {
        // ... create product ...
    }
}
```

### 程式設計緩存

```java
import io.quarkus.cache.Cache;
import io.quarkus.cache.CacheName;
import io.quarkus.cache.CaffeineCache;

@ApplicationScoped
public class CacheManager {

    @Inject
    @CacheName("product-cache")
    Cache productCache;

    public void warmUp() {
        // Pre-load popular products
        List<Product> popular = Product
            .find("status = 'ACTIVE'",
                  Sort.by("viewCount").descending())
            .page(Page.of(0, 100))
            .list();

        for (Product p : popular) {
            productCache.as(CaffeineCache.class)
                .put(p.id, CompletableFuture.completedFuture(
                    ProductDTO.from(p)));
        }
    }

    public void evictAll() {
        productCache.invalidateAll().await().indefinitely();
    }
}
```

## 健康檢查

### 依賴關係（自動可用）

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-smallrye-health</artifactId>
</dependency>
```

### 自動端點

```bash
# Tất cả health checks
curl http://localhost:8081/q/health

# Liveness — service đang chạy?
curl http://localhost:8081/q/health/live

# Readiness — service sẵn sàng nhận traffic?
curl http://localhost:8081/q/health/ready

# Startup — service đã start xong?
curl http://localhost:8081/q/health/started
```

### 內建健康檢查

Quarkus 自動新增：
- **資料庫**（資料來源）：資料庫連線正常嗎？
- **Kafka**：經紀人已連線？
- **Redis**：快取已連線？

### 自訂健康檢查

```java
import org.eclipse.microprofile.health.*;

@Liveness
@ApplicationScoped
public class ServiceLivenessCheck
        implements HealthCheck {

    @Override
    public HealthCheckResponse call() {
        return HealthCheckResponse
            .named("Product Service")
            .up()
            .withData("version", "1.0.0")
            .build();
    }
}

@Readiness
@ApplicationScoped
public class DatabaseReadinessCheck
        implements HealthCheck {

    @Inject
    ProductRepository productRepo;

    @Override
    public HealthCheckResponse call() {
        try {
            long count = productRepo.count();
            return HealthCheckResponse
                .named("Database")
                .up()
                .withData("products.count", count)
                .build();
        } catch (Exception e) {
            return HealthCheckResponse
                .named("Database")
                .down()
                .withData("error", e.getMessage())
                .build();
        }
    }
}

@Readiness
@ApplicationScoped
public class ExternalServiceCheck
        implements HealthCheck {

    @Inject @RestClient
    ProductServiceClient productClient;

    @Override
    public HealthCheckResponse call() {
        try {
            productClient.list(0, 1);
            return HealthCheckResponse
                .named("Product Service")
                .up().build();
        } catch (Exception e) {
            return HealthCheckResponse
                .named("Product Service")
                .down()
                .withData("error", e.getMessage())
                .build();
        }
    }
}
```

### 健康檢查回應

```json
{
  "status": "UP",
  "checks": [
    {
      "name": "Product Service",
      "status": "UP",
      "data": { "version": "1.0.0" }
    },
    {
      "name": "Database",
      "status": "UP",
      "data": { "products.count": 150 }
    },
    {
      "name": "Reactive PostgreSQL connections health check",
      "status": "UP"
    }
  ]
}
```

## API 閘道 — Nginx / Envoy

### Nginx 配置

```nginx
# nginx.conf
upstream product-service {
    server product-service:8080;
}

upstream order-service {
    server order-service:8080;
}

upstream payment-service {
    server payment-service:8080;
}

upstream keycloak {
    server keycloak:8080;
}

server {
    listen 80;
    server_name api.ecommerce.xdev.asia;

    # Rate limiting
    limit_req_zone $binary_remote_addr
        zone=api:10m rate=100r/s;

    # Product Service
    location /api/v1/products {
        limit_req zone=api burst=20 nodelay;
        proxy_pass http://product-service;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Order Service
    location /api/v1/orders {
        limit_req zone=api burst=10 nodelay;
        proxy_pass http://order-service;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # Payment Service
    location /api/v1/payments {
        limit_req zone=api burst=5 nodelay;
        proxy_pass http://payment-service;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # Keycloak
    location /realms {
        proxy_pass http://keycloak;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # Health check aggregation
    location /health {
        access_log off;
        default_type application/json;
        return 200 '{"status":"UP","gateway":"nginx"}';
    }
}
```

### Docker 組合

```yaml
services:
  api-gateway:
    image: nginx:1.25-alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - product-service
      - order-service
      - payment-service
```

## 練習

1.為產品服務添加Redis快取（`getById`, `listByCategory`）
2.建立/更新/刪除產品時實現快取失效
3. 建立自訂健康檢查：資料庫、外部服務
4.設定Nginx API網關路由到服務
5.在Nginx中加入速率限制
6. 測試：啟動→就緒→活性探針

## 總結

- **Redis 快取** (`@CacheResult`, `@CacheInvalidate`) 減少資料庫負載
- **健康檢查** (`/q/health/live`, `/q/health/ready`) 對於 Kubernetes 探針
- **自訂健康**擴展 `HealthCheck` — 檢查資料庫、外部服務
- **API 閘道** (Nginx) — 單一入口點、路由、速率限制、TLS 終止
- **速率限制**保護後端服務免於濫用

下一篇文章：測試——@QuarkusTest 和 Testcontainers。
