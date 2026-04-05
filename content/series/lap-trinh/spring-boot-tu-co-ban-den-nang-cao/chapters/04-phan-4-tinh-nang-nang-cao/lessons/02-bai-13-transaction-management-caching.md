---
id: 019c9617-fc13-7013-a013-fc1300000013
title: 'Bài 13: Transaction Management & Caching'
slug: bai-13-transaction-management-caching
description: >-
  @Transactional deep dive — propagation, isolation levels, rollback rules.
  Spring Cache abstraction với Caffeine và Redis. Cache eviction strategies.
duration_minutes: 120
is_free: false
video_url: null
sort_order: 12
section_title: "Phần 4: Tính năng Nâng cao"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9870" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9870)"/>

  <!-- Decorations -->
  <g>
    <circle cx="732" cy="206" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="864" cy="178" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="996" cy="150" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="628" cy="122" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="760" cy="94" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="86" x2="1100" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="116" x2="1050" y2="186" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="971.507041555162,115.5 971.507041555162,156.5 936,177 900.492958444838,156.5 900.492958444838,115.50000000000001 936,95" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 Lập trình — Bài 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 13: Transaction Management &amp; Caching</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Tính năng Nâng cao</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Transaction management và caching là hai tính năng quan trọng giúp đảm bảo tính toàn vẹn dữ liệu và cải thiện hiệu năng ứng dụng. Bài này đi sâu vào cơ chế hoạt động, cấu hình và các patterns hay dùng trong production.

---

## 1. @Transactional — Deep Dive

### 1.1 Cơ chế hoạt động

Spring sử dụng **AOP Proxy** để quản lý transactions. Khi method có `@Transactional` được gọi, proxy sẽ:

```
Client → Proxy → begin TX → Target Method → commit/rollback TX
```

> **Quan trọng**: Gọi method `@Transactional` từ bên trong cùng class (self-invocation) sẽ **không** đi qua proxy → transaction không hoạt động.

```java
@Service
public class OrderService {

    // ✅ Transaction hoạt động khi gọi từ bên ngoài
    @Transactional
    public OrderResponse createOrder(CreateOrderRequest request) {
        Order order = orderRepository.save(mapToEntity(request));
        orderItemRepository.saveAll(mapToItems(request, order));
        inventoryService.decreaseStock(request.getItems());
        return OrderResponse.from(order);
    }

    // ❌ self-invocation — Transaction KHÔNG hoạt động
    public void processOrders(List<CreateOrderRequest> requests) {
        for (var request : requests) {
            createOrder(request); // Gọi trực tiếp, không qua proxy
        }
    }
}
```

### 1.2 Propagation (Lan truyền Transaction)

| Propagation | Mô tả |
|------------|--------|
| REQUIRED (default) | Dùng TX hiện tại hoặc tạo mới |
| REQUIRES_NEW | Luôn tạo TX mới, suspend TX cũ |
| NESTED | TX lồng nhau, rollback không ảnh hưởng TX cha |
| SUPPORTS | Dùng TX nếu có, không tạo mới |
| NOT_SUPPORTED | Chạy ngoài TX, suspend TX nếu có |
| MANDATORY | Bắt buộc phải có TX, throw exception nếu không |
| NEVER | Không được có TX, throw exception nếu có |

```java
@Transactional(propagation = Propagation.REQUIRES_NEW)
public void saveAuditLog(AuditLog log) {
    // Luôn tạo TX mới → audit log được lưu
    // ngay cả khi TX gốc bị rollback
    auditLogRepository.save(log);
}
```

### 1.3 Isolation Levels

```java
@Transactional(isolation = Isolation.REPEATABLE_READ)
public AccountResponse transfer(Long fromId, Long toId, BigDecimal amount) {
    Account from = accountRepository.findByIdForUpdate(fromId);
    Account to = accountRepository.findByIdForUpdate(toId);

    from.debit(amount);
    to.credit(amount);

    accountRepository.saveAll(List.of(from, to));
    return AccountResponse.from(from);
}
```

### 1.4 Rollback Rules

```java
// Rollback cho tất cả checked exceptions
@Transactional(rollbackFor = Exception.class)
public void riskyOperation() throws Exception { }

// Không rollback cho BusinessException
@Transactional(noRollbackFor = BusinessException.class)
public void processPayment() { }
```

### 1.5 Read-Only optimization

```java
// Hibernate sẽ skip dirty checking → tăng performance
@Transactional(readOnly = true)
public Page<ProductResponse> searchProducts(Specification<Product> spec,
                                             Pageable pageable) {
    return productRepository.findAll(spec, pageable)
        .map(ProductResponse::from);
}
```

---

## 2. Spring Cache Abstraction

### 2.1 Bật Cache

```java
@Configuration
@EnableCaching
public class CacheConfig { }
```

### 2.2 Annotations chính

```java
@Service
public class ProductService {

    // Lưu kết quả vào cache "products" với key = id
    @Cacheable(value = "products", key = "#id")
    public ProductResponse getProduct(Long id) {
        log.info("Fetching product from DB: {}", id);
        return productRepository.findById(id)
            .map(ProductResponse::from)
            .orElseThrow(() -> new ResourceNotFoundException("Product", "id", id));
    }

    // Update cache khi data thay đổi
    @CachePut(value = "products", key = "#id")
    public ProductResponse updateProduct(Long id, UpdateProductRequest request) {
        Product product = productRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Product", "id", id));
        product.update(request);
        return ProductResponse.from(productRepository.save(product));
    }

    // Xóa entry khỏi cache
    @CacheEvict(value = "products", key = "#id")
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    // Xóa toàn bộ cache "products"
    @CacheEvict(value = "products", allEntries = true)
    public void clearProductCache() { }
}
```

### 2.3 Cấu hình Caffeine Cache (In-Memory)

```kotlin
// build.gradle.kts
implementation("com.github.ben-manes.caffeine:caffeine")
```

```yaml
# application.yml
spring:
  cache:
    type: caffeine
    caffeine:
      spec: maximumSize=1000,expireAfterWrite=10m
```

```java
@Configuration
@EnableCaching
public class CaffeineCacheConfig {

    @Bean
    public CacheManager cacheManager() {
        CaffeineCacheManager manager = new CaffeineCacheManager();
        manager.setCaffeine(Caffeine.newBuilder()
            .maximumSize(500)
            .expireAfterWrite(Duration.ofMinutes(10))
            .recordStats());
        return manager;
    }
}
```

### 2.4 Redis Cache (Distributed)

```yaml
# application.yml
spring:
  data:
    redis:
      host: localhost
      port: 6379
  cache:
    type: redis
    redis:
      time-to-live: 600000  # 10 phút (ms)
      cache-null-values: false
```

```java
@Configuration
@EnableCaching
public class RedisCacheConfig {

    @Bean
    public RedisCacheManager cacheManager(
            RedisConnectionFactory connectionFactory) {
        RedisCacheConfiguration config = RedisCacheConfiguration
            .defaultCacheConfig()
            .entryTtl(Duration.ofMinutes(10))
            .disableCachingNullValues()
            .serializeValuesWith(
                SerializationPair.fromSerializer(
                    new GenericJackson2JsonRedisSerializer()));

        return RedisCacheManager.builder(connectionFactory)
            .cacheDefaults(config)
            .withCacheConfiguration("products",
                config.entryTtl(Duration.ofMinutes(30)))
            .build();
    }
}
```

---

## 3. Patterns hay dùng

### 3.1 Cache-Aside Pattern

```
Read:  App → Cache (hit?) → Yes → return
                            No  → DB → Update Cache → return
Write: App → DB → Evict Cache
```

### 3.2 Conditional Caching

```java
// Chỉ cache khi result != null
@Cacheable(value = "users", key = "#email",
           unless = "#result == null")
public UserResponse findByEmail(String email) { }

// Chỉ cache khi price > 100
@Cacheable(value = "products", key = "#id",
           condition = "#id > 0",
           unless = "#result.price < 100")
public ProductResponse getProduct(Long id) { }
```

---

## Tóm tắt

- @Transactional quản lý transactions qua AOP proxy — hiểu propagation, isolation, rollback rules
- Self-invocation không đi qua proxy → transaction không hoạt động, cần tách service hoặc dùng self-injection
- Spring Cache hỗ trợ @Cacheable, @CachePut, @CacheEvict, dễ dàng chuyển từ Caffeine (in-memory) sang Redis (distributed)

## Bài tập

1. Implement money transfer giữa 2 tài khoản với @Transactional, đảm bảo atomicity. Test rollback khi số dư không đủ
2. Cấu hình Caffeine cache cho ProductService với TTL 10 phút, max 500 entries. Đo thời gian response trước và sau cache
3. Tạo audit log service dùng REQUIRES_NEW propagation để log không bị mất khi transaction chính rollback
