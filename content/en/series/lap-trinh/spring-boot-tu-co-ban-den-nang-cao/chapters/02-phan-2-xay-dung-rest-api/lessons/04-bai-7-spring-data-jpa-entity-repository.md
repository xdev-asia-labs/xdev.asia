---
id: 019c9617-fc07-7007-a007-fc0700000007
title: 'Lesson 7: Spring Data JPA — Entity, Repository & Query Methods'
slug: bai-7-spring-data-jpa-entity-repository
description: >-
  JPA Entity mapping, @Entity, @Id, @GeneratedValue. JpaRepository interface,
  derived query methods, @Query with JPQL/Native SQL. Auditing with
  @CreatedDate, @LastModifiedDate.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 2: Building REST API'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: From Basics to Advanced'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3124" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3124)"/>

  <!-- Decorations -->
  <g>
    <circle cx="982" cy="176" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="864" cy="138" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="746" cy="100" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="628" cy="62" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="1010" cy="284" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="236" x2="1100" y2="316" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="266" x2="1050" y2="336" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1062.8467875173176,220.5 1062.8467875173176,251.5 1036,267 1009.1532124826824,251.5 1009.1532124826824,220.5 1036,205" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 Programming — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 7: Spring Data JPA — Entity,</tspan>
      <tspan x="60" dy="42">Repository & Query Methods</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Building REST API</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Spring Data JPA is the most popular abstraction layer for interacting with relational databases in Spring Boot. It minimizes boilerplate code for the data access layer and provides powerful query capabilities. This article will guide you from Entity mapping to advanced queries.

---

## 1. Database configuration

### 1.1 PostgreSQL with Docker Compose

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

> **Note**: `ddl-auto: update` For development use only. Production should be used `validate` and schema management using Flyway/Liquibase.

---

## 2. JPA Entity Mapping

### 2.1 Basic Entities

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

Spring Data automatically creates queries from method names:

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

| Keywords | SQL | Example |
|--------|-----|---------|
| `And` | AND | `findByNameAndPrice` |
| `Or` | OR | `findByNameOrSlug` |
| `Between` | BETWEEN | `findByPriceBetween` |
| `LessThan` | < | `findByPriceLessThan` |
| `GreaterThan` | > | `findByPriceGreaterThan` |
| `Like` | LIKE | `findByNameLike` |
| `Containing` | LIKE %x% | `findByNameContaining` |
| `StartingWith` | LIKE x% | `findByNameStartingWith` |
| `In` | PRINT | `findByStatusIn` |
| `OrderBy` | ORDER BY | `findByOrderByPriceAsc` |
| `Not` | <> | `findByStatusNot` |
| `IsNull` | IS NULL | `findByDeletedAtIsNull` |

---

## 4. Custom Queries

### 4.1 @Query with JPQL

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

### 4.2 @Query with Native SQL

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

### 5.1 Auditing configuration

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

### 5.2 Auditable Entities

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

## Summary

- JPA Entity uses @Entity, @Table, @Column to map Java objects to database tables
- JpaRepository provides built-in CRUD operations, Derived Query Methods automatically create SQL from method name
- @Query supports JPQL and Native SQL for complex queries, Projections reducing data transfer overhead
- JPA Auditing automatically tracks createdAt, updatedAt, createdBy, updatedBy

## Exercises

1. Create Entity `Article` with fields: id, title, slug (unique), content (TEXT), status (enum), viewCount, createdAt, updatedAt. Extend from BaseEntity
2. Create a repository with at least 5 derived query methods: search by status, search by keyword in title, count by status, find top 10 by viewCount
3. Write 2 custom @Query: a JPQL query to find articles with viewCount > N, a Native SQL query to join the categories table
