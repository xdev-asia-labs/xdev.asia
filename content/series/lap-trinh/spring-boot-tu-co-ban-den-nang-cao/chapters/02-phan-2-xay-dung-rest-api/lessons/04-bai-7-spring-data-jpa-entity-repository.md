---
id: 019c9617-fc07-7007-a007-fc0700000007
title: 'Bài 7: Spring Data JPA — Entity, Repository & Query Methods'
slug: bai-7-spring-data-jpa-entity-repository
description: >-
  JPA Entity mapping, @Entity, @Id, @GeneratedValue. JpaRepository interface,
  derived query methods, @Query với JPQL/Native SQL. Auditing với @CreatedDate,
  @LastModifiedDate.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Xây dựng REST API"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

## Giới thiệu

Spring Data JPA là abstraction layer phổ biến nhất để tương tác với relational database trong Spring Boot. Nó giảm thiểu boilerplate code cho data access layer và cung cấp powerful query capabilities. Bài này sẽ hướng dẫn từ Entity mapping đến advanced queries.

---

## 1. Cấu hình Database

### 1.1 PostgreSQL với Docker Compose

```yaml
# docker-compose.yaml
services:
  postgres:
    image: postgres:17
    environment:
      POSTGRES_DB: springboot_demo
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: secret
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

```bash
docker compose up -d
```

### 1.2 Application Configuration

```yaml
# application.yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/springboot_demo
    username: admin
    password: secret
    driver-class-name: org.postgresql.Driver
  jpa:
    hibernate:
      ddl-auto: update  # create, create-drop, update, validate, none
    show-sql: true
    properties:
      hibernate:
        format_sql: true
        dialect: org.hibernate.dialect.PostgreSQLDialect
```

> **Lưu ý**: `ddl-auto: update` chỉ dùng cho development. Production nên dùng `validate` và quản lý schema bằng Flyway/Liquibase.

---

## 2. JPA Entity Mapping

### 2.1 Entity cơ bản

```java
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String name;

    @Column(unique = true, nullable = false, length = 100)
    private String slug;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(name = "stock_quantity", nullable = false)
    private Integer stockQuantity = 0;

    @Column(nullable = false)
    private Boolean active = true;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private ProductStatus status = ProductStatus.DRAFT;

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // Constructors, Getters, Setters
    protected Product() {} // JPA required

    public Product(String name, String slug, BigDecimal price) {
        this.name = name;
        this.slug = slug;
        this.price = price;
    }
}

public enum ProductStatus {
    DRAFT, ACTIVE, ARCHIVED
}
```

### 2.2 Base Entity (DRY)

```java
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // Getters, Setters
}

// Enable JPA Auditing
@Configuration
@EnableJpaAuditing
public class JpaConfig { }

// Entities kế thừa
@Entity
@Table(name = "products")
public class Product extends BaseEntity {
    private String name;
    private BigDecimal price;
    // ...
}

@Entity
@Table(name = "categories")
public class Category extends BaseEntity {
    private String name;
    private String slug;
    // ...
}
```

### 2.3 ID Generation Strategies

```java
// IDENTITY - Database auto-increment (khuyến nghị cho PostgreSQL)
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

// UUID - Unique across distributed systems
@Id
@GeneratedValue(strategy = GenerationType.UUID)
private UUID id;

// SEQUENCE - Database sequence (tốt cho batch insert)
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE,
                generator = "product_seq")
@SequenceGenerator(name = "product_seq",
                   sequenceName = "product_sequence",
                   allocationSize = 50)
private Long id;
```

---

## 3. Repository Interface

### 3.1 JpaRepository

```java
public interface ProductRepository extends JpaRepository<Product, Long> {
    // JpaRepository cung cấp sẵn:
    // save(entity), saveAll(entities)
    // findById(id), findAll(), findAllById(ids)
    // count(), existsById(id)
    // deleteById(id), delete(entity), deleteAll()
    // flush(), saveAndFlush(entity)
}
```

### 3.2 Derived Query Methods

Spring Data tự động tạo query từ method name:

```java
public interface ProductRepository extends JpaRepository<Product, Long> {

    // SELECT * FROM products WHERE name = ?
    List<Product> findByName(String name);

    // SELECT * FROM products WHERE slug = ?
    Optional<Product> findBySlug(String slug);

    // SELECT * FROM products WHERE price BETWEEN ? AND ?
    List<Product> findByPriceBetween(BigDecimal min, BigDecimal max);

    // SELECT * FROM products WHERE name LIKE '%keyword%'
    List<Product> findByNameContainingIgnoreCase(String keyword);

    // SELECT * FROM products WHERE active = true ORDER BY created_at DESC
    List<Product> findByActiveTrueOrderByCreatedAtDesc();

    // SELECT * FROM products WHERE status = ? AND price < ?
    List<Product> findByStatusAndPriceLessThan(ProductStatus status, BigDecimal price);

    // SELECT * FROM products WHERE category_id IN (?, ?, ?)
    List<Product> findByCategoryIdIn(List<Long> categoryIds);

    // SELECT COUNT(*) FROM products WHERE status = ?
    long countByStatus(ProductStatus status);

    // SELECT EXISTS(SELECT 1 FROM products WHERE slug = ?)
    boolean existsBySlug(String slug);

    // DELETE FROM products WHERE active = false
    void deleteByActiveFalse();

    // SELECT * FROM products WHERE name = ? LIMIT 1
    Optional<Product> findFirstByName(String name);

    // SELECT * FROM products ORDER BY price DESC LIMIT 5
    List<Product> findTop5ByOrderByPriceDesc();
}
```

### 3.3 Query Method Keywords

| Keyword | SQL | Example |
|---------|-----|---------|
| `And` | AND | `findByNameAndPrice` |
| `Or` | OR | `findByNameOrSlug` |
| `Between` | BETWEEN | `findByPriceBetween` |
| `LessThan` | < | `findByPriceLessThan` |
| `GreaterThan` | > | `findByPriceGreaterThan` |
| `Like` | LIKE | `findByNameLike` |
| `Containing` | LIKE %x% | `findByNameContaining` |
| `StartingWith` | LIKE x% | `findByNameStartingWith` |
| `In` | IN | `findByStatusIn` |
| `OrderBy` | ORDER BY | `findByOrderByPriceAsc` |
| `Not` | <> | `findByStatusNot` |
| `IsNull` | IS NULL | `findByDeletedAtIsNull` |

---

## 4. Custom Queries

### 4.1 @Query với JPQL

```java
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE p.price > :minPrice AND p.status = :status")
    List<Product> findExpensiveActiveProducts(
        @Param("minPrice") BigDecimal minPrice,
        @Param("status") ProductStatus status);

    @Query("SELECT p FROM Product p WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Product> searchByKeyword(@Param("keyword") String keyword);

    @Query("SELECT p.status, COUNT(p) FROM Product p GROUP BY p.status")
    List<Object[]> countByStatusGrouped();

    @Query("UPDATE Product p SET p.active = false WHERE p.id = :id")
    @Modifying
    @Transactional
    int softDelete(@Param("id") Long id);
}
```

### 4.2 @Query với Native SQL

```java
@Query(value = """
    SELECT p.* FROM products p
    JOIN categories c ON p.category_id = c.id
    WHERE c.slug = :categorySlug
    AND p.price BETWEEN :minPrice AND :maxPrice
    ORDER BY p.created_at DESC
    """, nativeQuery = true)
List<Product> findByCategoryAndPriceRange(
    @Param("categorySlug") String categorySlug,
    @Param("minPrice") BigDecimal minPrice,
    @Param("maxPrice") BigDecimal maxPrice);
```

### 4.3 Projections

```java
// Interface-based projection
public interface ProductSummary {
    Long getId();
    String getName();
    BigDecimal getPrice();
}

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<ProductSummary> findByActiveTrue();
}

// Record-based projection (Spring Boot 4.x)
public record ProductInfo(Long id, String name, BigDecimal price) {}

@Query("SELECT new com.example.dto.ProductInfo(p.id, p.name, p.price) FROM Product p WHERE p.active = true")
List<ProductInfo> findActiveProductInfo();
```

---

## 5. Auditing

### 5.1 Cấu hình Auditing

```java
@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
public class JpaAuditConfig {

    @Bean
    public AuditorAware<String> auditorProvider() {
        return () -> {
            // Lấy username từ Security Context
            return Optional.ofNullable(SecurityContextHolder.getContext())
                .map(SecurityContext::getAuthentication)
                .filter(Authentication::isAuthenticated)
                .map(Authentication::getName)
                .or(() -> Optional.of("system"));
        };
    }
}
```

### 5.2 Auditable Entity

```java
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class AuditableEntity extends BaseEntity {

    @CreatedBy
    @Column(name = "created_by", updatable = false)
    private String createdBy;

    @LastModifiedBy
    @Column(name = "updated_by")
    private String updatedBy;
}
```

---

## Tóm tắt

- JPA Entity sử dụng @Entity, @Table, @Column để mapping Java objects sang database tables
- JpaRepository cung cấp CRUD operations sẵn có, Derived Query Methods tự động tạo SQL từ method name
- @Query hỗ trợ JPQL và Native SQL cho complex queries, Projections giảm data transfer overhead
- JPA Auditing tự động track createdAt, updatedAt, createdBy, updatedBy

## Bài tập

1. Tạo Entity `Article` với các fields: id, title, slug (unique), content (TEXT), status (enum), viewCount, createdAt, updatedAt. Extend từ BaseEntity
2. Tạo repository với ít nhất 5 derived query methods: tìm theo status, tìm theo keyword trong title, đếm theo status, tìm top 10 theo viewCount
3. Viết 2 custom @Query: một JPQL query tìm articles có viewCount > N, một Native SQL query join với bảng categories
