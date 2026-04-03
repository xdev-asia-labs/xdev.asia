---
id: 019e2a10-a118-7a01-b001-f1a2b3c4d518
title: 'Bài 18: Caching, Health Checks & API Gateway'
slug: bai-18-caching-health-checks-api-gateway
description: >-
  Redis caching với @CacheResult, Health Checks (liveness/readiness),
  API Gateway pattern, rate limiting, aggregation.
duration_minutes: 100
is_free: false
video_url: null
sort_order: 17
section_title: "Phần 5: Resilience & Observability"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

## Giới thiệu

Bài này hoàn thiện microservices platform với 3 cross-cutting concerns: **Redis Caching** giảm load database, **Health Checks** cho Kubernetes readiness/liveness probes, và **API Gateway** làm single entry point cho frontend.

## Redis Caching

### Dependencies

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

### Cấu hình

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

### @CacheResult — Cache method return

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

### Programmatic Cache

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

## Health Checks

### Dependency (tự động có)

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-smallrye-health</artifactId>
</dependency>
```

### Endpoints tự động

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

### Built-in Health Checks

Quarkus tự động thêm:
- **Database** (datasource): kết nối database OK?
- **Kafka**: broker connected?
- **Redis**: cache connected?

### Custom Health Checks

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

### Health Check Response

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

## API Gateway — Nginx / Envoy

### Nginx Configuration

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

### Docker Compose

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

## Bài tập

1. Thêm Redis caching cho Product Service (`getById`, `listByCategory`)
2. Implement cache invalidation khi create/update/delete product
3. Tạo custom Health Checks: database, external service
4. Cấu hình Nginx API Gateway routing đến các services
5. Thêm rate limiting trong Nginx
6. Test: startup → readiness → liveness probes

## Tổng kết

- **Redis Cache** (`@CacheResult`, `@CacheInvalidate`) giảm DB load
- **Health Checks** (`/q/health/live`, `/q/health/ready`) cho Kubernetes probes
- **Custom Health** extends `HealthCheck` — check database, external services
- **API Gateway** (Nginx) — single entry point, routing, rate limiting, TLS termination
- **Rate Limiting** bảo vệ backend services khỏi abuse

Bài tiếp theo: Testing — @QuarkusTest & Testcontainers.
