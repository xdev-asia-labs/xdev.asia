---
id: 019c9617-fc13-7013-a013-fc1300000013
title: 'レッスン 13: トランザクション管理とキャッシング'
slug: bai-13-transaction-management-caching
description: >-
  @トランザクションの詳細 - 伝播、分離レベル、ロールバック ルール。 Caffeine と Redis を使用した Spring Cache
  の抽象化。キャッシュエビクション戦略。
duration_minutes: 120
is_free: false
video_url: null
sort_order: 12
section_title: 'パート 4: 高度な機能'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: 基本から上級まで'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 プログラミング — レッスン 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 13: トランザクション管理とキャッシング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 高度な機能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

トランザクション管理とキャッシュは、データの整合性を確保し、アプリケーションのパフォーマンスを向上させる 2 つの重要な機能です。この記事では、運用メカニズム、構成、および運用環境で一般的に使用されるパターンについて詳しく説明します。

---

## 1. @Transactional — 詳細

### 1.1 作用機序

Spring は **AOP プロキシ**を使用してトランザクションを管理します。メソッドが存在する場合 `@Transactional` が呼び出されると、プロキシは次のことを行います。

```
Client → Proxy → begin TX → Target Method → commit/rollback TX
```

> **重要**: 呼び出しメソッド `@Transactional` 同じクラス内から (自己呼び出し) はプロキシを経由しません** → トランザクションは機能しません。

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

### 1.2 伝播 (スプレッドトランザクション)

|伝播 |説明 |
|----------|----------|
|必須 (デフォルト) |既存の TX を使用するか、新しい TX を作成します。
| REQUIRES_NEW |常に新しい TX を作成し、古い TX を一時停止します。
|ネストされた |ネストされた TX、ロールバックは親 TX に影響しません。
|サポート |利用可能な場合は TX を使用し、新しい | を作成しないでください。
|サポートされていません | TX の外で実行し、可能な場合は TX を一時停止します。
|必須 | TX が必要です。そうでない場合は例外をスローします。
|決して | TX があってはなりません。TX がある場合は例外をスローします。

```java
@Transactional(propagation = Propagation.REQUIRES_NEW)
public void saveAuditLog(AuditLog log) {
    // Luôn tạo TX mới → audit log được lưu
    // ngay cả khi TX gốc bị rollback
    auditLogRepository.save(log);
}
```

### 1.3 分離レベル

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

### 1.4 ロールバック ルール

```java
// Rollback cho tất cả checked exceptions
@Transactional(rollbackFor = Exception.class)
public void riskyOperation() throws Exception { }

// Không rollback cho BusinessException
@Transactional(noRollbackFor = BusinessException.class)
public void processPayment() { }
```

### 1.5 読み取り専用の最適化

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

## 2. Spring キャッシュの抽象化

### 2.1 キャッシュを有効にする

```java
@Configuration
@EnableCaching
public class CacheConfig { }
```

### 2.2 主な注釈

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

### 2.3 カフェイン キャッシュの構成 (メモリ内)

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

### 2.4 Redis キャッシュ (分散)

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

## 3. よく使用されるパターン

### 3.1 キャッシュアサイド パターン

```
Read:  App → Cache (hit?) → Yes → return
                            No  → DB → Update Cache → return
Write: App → DB → Evict Cache
```

### 3.2 条件付きキャッシュ

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

## 概要

- @Transactional は AOP プロキシ経由でトランザクションを管理します - 伝播、分離、ロールバック ルールを理解します
- 自己呼び出しがプロキシを経由しない → トランザクションが機能しないため、サービスを分離するか自己インジェクションを使用する必要がある
- Spring Cache は @Cacheable、@CachePut、@CacheEvict をサポートしており、Caffeine (メモリ内) から Redis (分散) への切り替えが簡単です

## 演習

1. @Transactional を使用して 2 つのアカウント間の送金を実装し、原子性を確保します。残高不足時のロールバックをテストする
2. ProductService のカフェイン キャッシュを TTL 10 分、最大 500 エントリで構成します。キャッシュの前後の応答時間を測定する
3. メイン トランザクションがロールバックするときにログが失われないように、REQUIRES_NEW 伝播を使用して監査ログ サービスを作成します。
