---
id: 019e2a10-a104-7a01-b001-f1a2b3c4d504
title: 'レッスン 4: PostgreSQL と Hibernate ORM のパナッシュ'
slug: bai-4-postgresql-hibernate-orm-panache
description: >-
  PostgreSQL を Dev Services、Hibernate ORM Panache アクティブ レコード パターンおよびリポジトリ
  パターン、PanacheSQL、カスタム クエリ、トランザクションに接続します。
duration_minutes: 100
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 1: Quarkus プラットフォームとプロジェクトのセットアップ'
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: 'Quarkus マイクロサービス: 基本から運用まで'
  slug: quarkus-microservices-tu-co-ban-den-production
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 プログラミング — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 4: PostgreSQL と Hibernate ORM のパナッシュ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus マイクロサービス: 基本から運用まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Quarkus プラットフォームとプロジェクトのセットアップ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Hibernate ORM Panache は、JPA エンティティとクエリの作成を簡素化する Hibernate ORM 上のレイヤーです。 Panache は、**アクティブ レコード** (エンティティの自己クエリ) と **リポジトリ** (エンティティ/リポジトリの分離) の 2 つのパターンをサポートしています。 Dev Services と組み合わせると、PostgreSQL をインストールする必要がなく、Quarkus が自動的にコンテナを起動します。

## PostgreSQL を構成する

### 依存関係

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

### 開発サービス — 構成ゼロ

依存関係を追加するだけで、開発モードでは **それ以上の構成は必要ありません**。

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

### Dev Services が機能することを確認する

```bash
# Start dev mode
quarkus dev

# Kiểm tra container đang chạy
docker ps
# CONTAINER ID  IMAGE           PORTS                    NAMES
# abc123        postgres:16     0.0.0.0:55432->5432/tcp  ...

# Dev UI → http://localhost:8080/q/dev-ui → Database
```

## アクティブなレコード パターン

### エンティティクラス

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

### アクティブ レコードを使用する

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

## リポジトリ パターン

### エンティティ (PanacheEntity を拡張しない)

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

### リポジトリクラス

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

### サービスでリポジトリを使用する

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

## PanacheQuery — ページネーションと並べ替え

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

## カスタム クエリ — JPQL およびネイティブ

### JPQL クエリ

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

### ネイティブ SQL クエリ

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

## トランザクション

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

## Dev Services を使用したテスト

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

## 演習

1. エンティティの作成 `Product` ライフサイクル コールバックを含むアクティブ レコード パターンを使用 (`@PrePersist`、 `@PreUpdate`）
2.作成 `Category` リポジトリ パターンを持つエンティティ、関係の確立 `@OneToMany`
3. ページネーションとソートを備えた製品の CRUD エンドポイントを実装する
4. キーワードで製品を検索するためのカスタム クエリを作成します (JPQL)
5. PostgreSQL による全文検索の追加 `tsvector` (ネイティブクエリ)
6. 次のコマンドを使用して Order サービスを作成します `@Transactional` 在庫の一貫性を確保する

## 概要

- **Dev Services** は PostgreSQL コンテナを自動的に実行します。ローカルにインストールする必要はありません
- **アクティブな記録** (`extends PanacheEntity`) — 自己存在エンティティ `persist()`、 `find()`、 `delete()`
- **リポジトリ パターン** (`implements PanacheRepository<T>`) — 個別の懸念事項
- **PanacheQuery** はページネーションをサポートします (`page()`)、カウント(`count()`)、並べ替え(`Sort.by()`）
- **`@Transactional`** アトミック性の確保、リターン時の自動コミット、例外時の自動ロールバック
- **JPQL + ネイティブ SQL**: Panache では不十分な複雑なクエリ用

次の記事: Bean の検証とエラー処理 — 専門的なデータとエラー処理。
