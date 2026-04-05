---
id: 019e2a10-a104-7a01-b001-f1a2b3c4d504
title: 'Bài 4: PostgreSQL & Hibernate ORM Panache'
slug: bai-4-postgresql-hibernate-orm-panache
description: >-
  Kết nối PostgreSQL với Dev Services, Hibernate ORM Panache Active Record Pattern
  và Repository Pattern, PanacheQuery, custom queries, transactions.
duration_minutes: 100
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Nền tảng Quarkus & Project Setup"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7279" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7279)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1065" cy="265" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1030" cy="170" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="995" cy="75" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="960" cy="240" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="925" cy="145" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="195" x2="1100" y2="275" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="225" x2="1050" y2="295" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1070.9807621135333,230 1070.9807621135333,260 1045,275 1019.0192378864668,260 1019.0192378864668,230 1045,215" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 Lập trình — Bài 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 4: PostgreSQL &amp; Hibernate ORM Panache</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus Microservices: Từ Cơ bản đến Production</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng Quarkus &amp; Project Setup</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Hibernate ORM Panache là một layer trên Hibernate ORM, giúp đơn giản hóa việc viết JPA entities và queries. Panache hỗ trợ hai patterns: **Active Record** (entity tự query) và **Repository** (tách biệt entity/repository). Kết hợp với Dev Services, bạn không cần cài PostgreSQL — Quarkus tự động khởi động container.

## Cấu hình PostgreSQL

### Dependencies

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-hibernate-orm-panache</artifactId>
</dependency>
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-jdbc-postgresql</artifactId>
</dependency>
```

### Dev Services — Zero Config

Chỉ cần thêm dependencies, **không cần cấu hình gì thêm** cho dev mode:

```properties
# application.properties

# Dev Services tự động:
# - Pull postgres:latest container
# - Tạo database
# - Cấu hình JDBC URL
# - Inject vào Hibernate ORM

# Chỉ cần cấu hình cho production
%prod.quarkus.datasource.db-kind=postgresql
%prod.quarkus.datasource.username=${DB_USERNAME}
%prod.quarkus.datasource.password=${DB_PASSWORD}
%prod.quarkus.datasource.jdbc.url=jdbc:postgresql://${DB_HOST}:5432/${DB_NAME}

# Schema management
quarkus.hibernate-orm.database.generation=drop-and-create
# Production dùng Flyway (bài sau)
%prod.quarkus.hibernate-orm.database.generation=none
```

### Kiểm tra Dev Services hoạt động

```bash
# Start dev mode
quarkus dev

# Kiểm tra container đang chạy
docker ps
# CONTAINER ID  IMAGE           PORTS                    NAMES
# abc123        postgres:16     0.0.0.0:55432->5432/tcp  ...

# Dev UI → http://localhost:8080/q/dev-ui → Database
```

## Active Record Pattern

### Entity class

```java
package com.xdev.ecommerce.product.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "products")
public class Product extends PanacheEntity {
    // id được tự động generate bởi PanacheEntity (Long)

    @Column(nullable = false, length = 255)
    public String name;

    @Column(columnDefinition = "TEXT")
    public String description;

    @Column(nullable = false, precision = 12, scale = 2)
    public BigDecimal price;

    @Column(name = "stock_quantity", nullable = false)
    public int stockQuantity;

    @Column(length = 100)
    public String category;

    @Column(length = 50)
    public String status = "ACTIVE";

    @Column(name = "created_at", updatable = false)
    public LocalDateTime createdAt;

    @Column(name = "updated_at")
    public LocalDateTime updatedAt;

    @PrePersist
    void onPersist() {
        createdAt = LocalDateTime.now();
        updatedAt = createdAt;
    }

    @PreUpdate
    void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
```

### Sử dụng Active Record

```java
// CREATE
Product product = new Product();
product.name = "Laptop Dell XPS 15";
product.price = new BigDecimal("32990000");
product.stockQuantity = 50;
product.category = "Electronics";
product.persist();

// READ by ID
Product found = Product.findById(1L);

// READ all
List<Product> all = Product.listAll();

// QUERY
List<Product> electronics = Product.list(
    "category = ?1 and status = ?2", "Electronics", "ACTIVE");

// QUERY with named parameters
List<Product> cheap = Product.list(
    "price < :maxPrice and category = :cat",
    Parameters.with("maxPrice", new BigDecimal("10000000"))
              .and("cat", "Electronics"));

// UPDATE
Product.update("price = price * 0.9 where category = ?1",
               "Electronics");

// DELETE
Product.deleteById(1L);
Product.delete("status", "INACTIVE");

// COUNT
long total = Product.count();
long active = Product.count("status", "ACTIVE");
```

## Repository Pattern

### Entity (không extend PanacheEntity)

```java
@Entity
@Table(name = "categories")
public class Category extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(nullable = false, unique = true)
    public String name;

    public String description;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    public List<Product> products;
}
```

### Repository class

```java
package com.xdev.ecommerce.product.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import java.util.List;
import java.util.Optional;

@ApplicationScoped
public class CategoryRepository implements PanacheRepository<Category> {

    public Optional<Category> findByName(String name) {
        return find("name", name).firstResultOptional();
    }

    public List<Category> findActive() {
        return list("status", "ACTIVE");
    }

    public long countProducts(Long categoryId) {
        return Product.count("category.id", categoryId);
    }
}
```

### Sử dụng Repository trong Service

```java
@ApplicationScoped
public class CategoryService {

    @Inject
    CategoryRepository categoryRepository;

    public List<Category> getAll() {
        return categoryRepository.listAll();
    }

    @Transactional
    public Category create(String name, String description) {
        Category cat = new Category();
        cat.name = name;
        cat.description = description;
        categoryRepository.persist(cat);
        return cat;
    }
}
```

## PanacheQuery — Phân trang & Sắp xếp

```java
import io.quarkus.panache.common.Page;
import io.quarkus.panache.common.Sort;

@GET
public Response listProducts(
        @QueryParam("page") @DefaultValue("0") int page,
        @QueryParam("size") @DefaultValue("20") int size,
        @QueryParam("sort") @DefaultValue("createdAt") String sortBy,
        @QueryParam("dir") @DefaultValue("desc") String direction) {

    Sort sort = Sort.by(sortBy,
        direction.equalsIgnoreCase("asc")
            ? Sort.Direction.Ascending
            : Sort.Direction.Descending);

    PanacheQuery<Product> query = Product
            .find("status = ?1", sort, "ACTIVE")
            .page(Page.of(page, size));

    List<Product> items = query.list();
    long total = query.count();
    int totalPages = query.pageCount();

    return Response.ok(items)
            .header("X-Total-Count", total)
            .header("X-Total-Pages", totalPages)
            .build();
}
```

## Custom Queries — JPQL & Native

### JPQL Query

```java
@Entity
@Table(name = "products")
@NamedQuery(name = "Product.search",
    query = """
        SELECT p FROM Product p
        WHERE (LOWER(p.name) LIKE LOWER(:keyword)
           OR LOWER(p.description) LIKE LOWER(:keyword))
        AND p.status = 'ACTIVE'
        ORDER BY p.createdAt DESC
        """)
public class Product extends PanacheEntity {
    // ...
}

// Sử dụng
List<Product> results = Product.find("#Product.search",
    Parameters.with("keyword", "%" + keyword + "%")).list();
```

### Native SQL Query

```java
@ApplicationScoped
public class ProductRepository implements PanacheRepository<Product> {

    public List<Product> searchFullText(String query) {
        return find(
            """
            to_tsvector('english', name || ' ' || description)
            @@ plainto_tsquery('english', ?1)
            """, query).list();
    }

    public List<Object[]> getTopCategories(int limit) {
        return getEntityManager()
            .createNativeQuery("""
                SELECT category, COUNT(*) as cnt, AVG(price) as avg_price
                FROM products
                WHERE status = 'ACTIVE'
                GROUP BY category
                ORDER BY cnt DESC
                LIMIT :limit
                """)
            .setParameter("limit", limit)
            .getResultList();
    }
}
```

## Transactions

```java
import jakarta.transaction.Transactional;

@ApplicationScoped
public class OrderService {

    @Transactional
    public Order createOrder(CreateOrderRequest request) {
        // 1. Kiểm tra stock
        Product product = Product.findById(request.productId());
        if (product == null) {
            throw new NotFoundException("Product not found");
        }
        if (product.stockQuantity < request.quantity()) {
            throw new BadRequestException("Insufficient stock");
        }

        // 2. Giảm stock
        product.stockQuantity -= request.quantity();
        // Không cần persist() — entity đã managed

        // 3. Tạo order
        Order order = new Order();
        order.productId = product.id;
        order.quantity = request.quantity();
        order.totalPrice = product.price
            .multiply(BigDecimal.valueOf(request.quantity()));
        order.status = "PENDING";
        order.persist();

        return order;
        // Transaction auto-commit khi method return
        // Auto-rollback nếu throw exception
    }
}
```

## Testing với Dev Services

```java
import io.quarkus.test.junit.QuarkusTest;
import jakarta.transaction.Transactional;

@QuarkusTest
class ProductRepositoryTest {

    @Test
    @Transactional
    void testCreateAndFind() {
        Product product = new Product();
        product.name = "Test Product";
        product.price = new BigDecimal("100000");
        product.stockQuantity = 10;
        product.persist();

        assertNotNull(product.id);

        Product found = Product.findById(product.id);
        assertEquals("Test Product", found.name);
    }

    @Test
    void testPagination() {
        PanacheQuery<Product> query = Product.findAll()
                .page(Page.of(0, 5));
        List<Product> page1 = query.list();
        assertTrue(page1.size() <= 5);
    }
}
```

## Bài tập

1. Tạo entity `Product` với Active Record Pattern, bao gồm lifecycle callbacks (`@PrePersist`, `@PreUpdate`)
2. Tạo `Category` entity với Repository Pattern, thiết lập quan hệ `@OneToMany`
3. Implement CRUD endpoints cho Product với phân trang và sắp xếp
4. Viết custom query tìm kiếm sản phẩm theo keyword (JPQL)
5. Thêm full-text search với PostgreSQL `tsvector` (Native query)
6. Tạo Order service với `@Transactional` đảm bảo stock consistency

## Tổng kết

- **Dev Services** tự động chạy PostgreSQL container, không cần cài đặt local
- **Active Record** (`extends PanacheEntity`) — entity tự có `persist()`, `find()`, `delete()`
- **Repository Pattern** (`implements PanacheRepository<T>`) — tách biệt concerns
- **PanacheQuery** hỗ trợ phân trang (`page()`), đếm (`count()`), sắp xếp (`Sort.by()`)
- **`@Transactional`** đảm bảo atomicity, auto-commit khi return, auto-rollback khi exception
- **JPQL + Native SQL** cho complex queries mà Panache không đủ

Bài tiếp theo: Bean Validation & Error Handling — xử lý dữ liệu và lỗi chuyên nghiệp.
