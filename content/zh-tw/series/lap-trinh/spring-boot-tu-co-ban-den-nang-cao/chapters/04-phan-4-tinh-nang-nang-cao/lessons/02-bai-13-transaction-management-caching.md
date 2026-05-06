---
id: 019c9617-fc13-7013-a013-fc1300000013
title: 第 13 課：事務管理與快取
slug: bai-13-transaction-management-caching
description: >-
  @Transactional 深入研究——傳播、隔離等級、回滾規則。使用 Caffeine 和 Redis 進行 Spring Cache
  抽象化。快取驅逐策略。
duration_minutes: 120
is_free: false
video_url: null
sort_order: 12
section_title: 第 4 部分：進階功能
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: Spring Boot 4：從基礎到高級
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 程式設計 — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：事務管理與快取</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階功能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

事務管理和快取是有助於確保資料完整性和提高應用程式效能的兩個重要功能。本文深入探討了其運作機制、配置以及生產中常用的模式。

---

## 1.@Transactional — 深入探討

### 1.1 作用機制

Spring使用**AOP代理**來管理事務。當方法存在時 `@Transactional` 被調用時，代理將：

```
Client → Proxy → begin TX → Target Method → commit/rollback TX
```

> **重要**：呼叫方法 `@Transactional` 來自同一個類別（自調用）的將**不**透過代理→事務不起作用。

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

### 1.2 傳播（傳播交易）

|傳播|描述 |
|------------|--------|
|必要（預設）|使用現有 TX 或建立新 |
| REQUIRES_NEW | 要求始終建立新的 TX，暫停舊的 TX |
|嵌套|嵌套TX，回滾不影響父TX |
|支援 |如果可用，請使用 TX，不要建立新的 |
|不支援 |在 TX 之外運行，如果可用則暫停 TX |
|強制|必須有TX，否則拋出例外 |
|從來沒有 |必須沒有TX，有則拋出異常 |

```java
@Transactional(propagation = Propagation.REQUIRES_NEW)
public void saveAuditLog(AuditLog log) {
    // Luôn tạo TX mới → audit log được lưu
    // ngay cả khi TX gốc bị rollback
    auditLogRepository.save(log);
}
```

### 1.3 隔離級別

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

### 1.4 回滾規則

```java
// Rollback cho tất cả checked exceptions
@Transactional(rollbackFor = Exception.class)
public void riskyOperation() throws Exception { }

// Không rollback cho BusinessException
@Transactional(noRollbackFor = BusinessException.class)
public void processPayment() { }
```

### 1.5 唯讀優化

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

## 2. Spring 快取抽象

### 2.1 啟用快取

```java
@Configuration
@EnableCaching
public class CacheConfig { }
```

### 2.2 主要註釋

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

### 2.3 設定咖啡因快取（記憶體中）

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

### 2.4 Redis快取（分散式）

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

## 3. 常用模式

### 3.1 快取旁路模式

```
Read:  App → Cache (hit?) → Yes → return
                            No  → DB → Update Cache → return
Write: App → DB → Evict Cache
```

### 3.2 條件緩存

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

## 總結

- @Transactional 透過 AOP 代理程式管理事務 — 了解傳播、隔離、回溯規則
- 自呼叫不經過代理→交易不起作用，需要分離服務或使用自註入
- Spring Cache支援@Cacheable、@CachePut、@CacheEvict，方便從Caffeine（記憶體中）切換到Redis（分散式）

## 練習

1.透過@Transactional實現2個帳戶之間的轉賬，保證原子性。測試餘額不足時回滾
2. 為 ProductService 配置 Caffeine 緩存，TTL 為 10 分鐘，最多 500 個條目。測量快取前後的反應時間
3.使用REQUIRES_NEW傳播建立稽核日誌服務，以便主事務回滾時日誌不遺失
