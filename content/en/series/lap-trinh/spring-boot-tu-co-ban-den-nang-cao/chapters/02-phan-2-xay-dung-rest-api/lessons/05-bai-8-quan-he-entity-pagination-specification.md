---
id: 019c9617-fc08-7008-a008-fc0800000008
title: 'Lesson 8: Entity Relationships, Pagination & Specification'
slug: bai-8-quan-he-entity-pagination-specification
description: >-
  @OneToMany, @ManyToOne, @ManyToMany, @OneToOne. Fetch strategies (LAZY vs
  EAGER), N+1 problem. Pageable, Sort, Slice. JPA Specification for dynamic
  queries.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: 'Part 2: Building REST API'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: From Basics to Advanced'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6280" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6280)"/>

  <!-- Decorations -->
  <g>
    <circle cx="646" cy="88" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="692" cy="194" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="738" cy="40" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="784" cy="146" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="830" cy="252" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="108" x2="1100" y2="188" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="138" x2="1050" y2="208" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="995.2390923627308,136.5 995.2390923627308,179.5 958,201 920.7609076372692,179.5 920.7609076372692,136.5 958,115" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 Programming — Lesson 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 8: Entity Relationships, Pagination &</tspan>
      <tspan x="60" dy="42">Specification</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Building REST API</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

In real applications, entities have complex relationships with each other. Understanding how to map relationships, avoid the N+1 problem, and implement pagination are required skills for backend developers. This article dives into JPA relationships and dynamic queries.

---

## 1. Entity Relationships

### 1.1 @ManyToOne & @OneToMany

```java
// Category (1) ←→ (N) Product
@Entity
@Table(name = "categories")
public class Category extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String name;

    private String slug;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Product> products = new ArrayList<>();

    // Convenience method
    public void addProduct(Product product) {
        products.add(product);
        product.setCategory(this);
    }
}

@Entity
@Table(name = "products")
public class Product extends BaseEntity {

    private String name;
    private BigDecimal price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;
}
```

### 1.2 @ManyToMany

```java
// Product (N) ←→ (N) Tag
@Entity
@Table(name = "products")
public class Product extends BaseEntity {

    // ...other fields

    @ManyToMany
    @JoinTable(
        name = "product_tags",
        joinColumns = @JoinColumn(name = "product_id"),
        inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private Set<Tag> tags = new HashSet<>();

    public void addTag(Tag tag) {
        tags.add(tag);
        tag.getProducts().add(this);
    }

    public void removeTag(Tag tag) {
        tags.remove(tag);
        tag.getProducts().remove(this);
    }
}

@Entity
@Table(name = "tags")
public class Tag extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String name;

    @ManyToMany(mappedBy = "tags")
    private Set<Product> products = new HashSet<>();
}
```

### 1.3 @OneToOne

```java
@Entity
@Table(name = "users")
public class User extends BaseEntity {
    private String name;
    private String email;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL,
              fetch = FetchType.LAZY, optional = false)
    private UserProfile profile;
}

@Entity
@Table(name = "user_profiles")
public class UserProfile extends BaseEntity {
    private String bio;
    private String avatarUrl;
    private String phone;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", unique = true)
    private User user;
}
```

---

## 2. Fetch Strategies & N+1 Problem

### 2.1 LAZY vs EAGER

```java
// LAZY (Default cho @OneToMany, @ManyToMany)
// → Query phụ chỉ chạy khi access field
@OneToMany(fetch = FetchType.LAZY)
private List<Product> products;

// EAGER (Default cho @ManyToOne, @OneToOne)
// → Luôn JOIN khi query entity
@ManyToOne(fetch = FetchType.EAGER)
private Category category;
```

**Best practice**: Always use `FetchType.LAZY` for all relationships, then fetch as needed using JOIN FETCH.

### 2.2 N+1 Problem

```java
// ⚠️ N+1 Problem
List<Product> products = productRepository.findAll();
// Query 1: SELECT * FROM products → 100 products
for (Product p : products) {
    System.out.println(p.getCategory().getName());
    // Query 2..101: SELECT * FROM categories WHERE id = ?
}
// Total: 1 + 100 = 101 queries! 💀
```

### 2.3 N+1 Solution

```java
// Solution 1: JOIN FETCH
@Query("SELECT p FROM Product p JOIN FETCH p.category")
List<Product> findAllWithCategory();

// Solution 2: @EntityGraph
@EntityGraph(attributePaths = {"category", "tags"})
List<Product> findAll();

// Solution 3: Batch fetching
@Entity
public class Category {
    @OneToMany(mappedBy = "category")
    @BatchSize(size = 20) // Fetch 20 categories per query
    private List<Product> products;
}

// Solution 4: DTO Projection (tốt nhất cho read-only)
@Query("""
    SELECT new com.example.dto.ProductWithCategory(
        p.id, p.name, p.price, c.name)
    FROM Product p JOIN p.category c
    """)
List<ProductWithCategory> findAllProjected();
```

---

## 3. Pagination & Sorting

### 3.1 Pageable in Repository

```java
public interface ProductRepository extends JpaRepository<Product, Long> {

    // Tự động hỗ trợ pagination
    Page<Product> findByActiveTrue(Pageable pageable);

    Page<Product> findByCategorySlug(String slug, Pageable pageable);

    @Query("SELECT p FROM Product p WHERE p.price > :minPrice")
    Page<Product> findExpensive(@Param("minPrice") BigDecimal minPrice,
                                 Pageable pageable);
}
```

### 3.2 Controller with Pagination

```java
@GetMapping
public ResponseEntity<Page<ProductResponse>> getProducts(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size,
        @RequestParam(defaultValue = "createdAt") String sortBy,
        @RequestParam(defaultValue = "desc") String sortDir) {

    Sort sort = sortDir.equalsIgnoreCase("asc")
        ? Sort.by(sortBy).ascending()
        : Sort.by(sortBy).descending();

    Pageable pageable = PageRequest.of(page, size, sort);
    Page<Product> products = productRepository.findByActiveTrue(pageable);

    Page<ProductResponse> response = products.map(ProductResponse::from);
    return ResponseEntity.ok(response);
}
```

### 3.3 Page Response

```json
{
    "content": [
        {"id": 1, "name": "Product A", "price": 100},
        {"id": 2, "name": "Product B", "price": 200}
    ],
    "pageable": {
        "pageNumber": 0,
        "pageSize": 20,
        "sort": {"sorted": true, "direction": "DESC"}
    },
    "totalElements": 150,
    "totalPages": 8,
    "first": true,
    "last": false,
    "numberOfElements": 20
}
```

### 3.4 Slice vs Page

```java
// Page: Chạy COUNT query → biết total elements (tốn performance)
Page<Product> findByActiveTrue(Pageable pageable);

// Slice: Không chạy COUNT → chỉ biết hasNext (tốt cho infinite scroll)
Slice<Product> findByActiveTrue(Pageable pageable);
```

---

## 4. JPA Specification — Dynamic Queries

### 4.1 When do we need Specification?

When the API has multiple filter parameters optional:

```
GET /api/products?category=electronics&minPrice=100&maxPrice=500&status=ACTIVE&keyword=phone
```

Writing a derived query method for every combination is not feasible. Specification allows building queries dynamically.

### 4.2 Implementation

```java
// Repository extends JpaSpecificationExecutor
public interface ProductRepository extends
        JpaRepository<Product, Long>,
        JpaSpecificationExecutor<Product> {
}

// Specification builder
public class ProductSpecification {

    public static Specification<Product> hasCategory(String categorySlug) {
        return (root, query, cb) -> {
            if (categorySlug == null) return null;
            Join<Product, Category> category = root.join("category");
            return cb.equal(category.get("slug"), categorySlug);
        };
    }

    public static Specification<Product> priceBetween(BigDecimal min, BigDecimal max) {
        return (root, query, cb) -> {
            if (min == null && max == null) return null;
            if (min != null && max != null) {
                return cb.between(root.get("price"), min, max);
            }
            if (min != null) {
                return cb.greaterThanOrEqualTo(root.get("price"), min);
            }
            return cb.lessThanOrEqualTo(root.get("price"), max);
        };
    }

    public static Specification<Product> hasStatus(ProductStatus status) {
        return (root, query, cb) -> {
            if (status == null) return null;
            return cb.equal(root.get("status"), status);
        };
    }

    public static Specification<Product> nameContains(String keyword) {
        return (root, query, cb) -> {
            if (keyword == null || keyword.isBlank()) return null;
            return cb.like(
                cb.lower(root.get("name")),
                "%" + keyword.toLowerCase() + "%"
            );
        };
    }
}
```

### 4.3 Use in Service

```java
@Service
public class ProductService {

    private final ProductRepository productRepository;

    public Page<ProductResponse> search(
            String category, BigDecimal minPrice, BigDecimal maxPrice,
            ProductStatus status, String keyword, Pageable pageable) {

        Specification<Product> spec = Specification
            .where(ProductSpecification.hasCategory(category))
            .and(ProductSpecification.priceBetween(minPrice, maxPrice))
            .and(ProductSpecification.hasStatus(status))
            .and(ProductSpecification.nameContains(keyword));

        return productRepository.findAll(spec, pageable)
            .map(ProductResponse::from);
    }
}
```

### 4.4 Controllers

```java
@GetMapping("/search")
public ResponseEntity<Page<ProductResponse>> searchProducts(
        @RequestParam(required = false) String category,
        @RequestParam(required = false) BigDecimal minPrice,
        @RequestParam(required = false) BigDecimal maxPrice,
        @RequestParam(required = false) ProductStatus status,
        @RequestParam(required = false) String keyword,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size) {

    Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
    Page<ProductResponse> results = productService.search(
        category, minPrice, maxPrice, status, keyword, pageable);

    return ResponseEntity.ok(results);
}
```

---

## 5. Cascade & Orphan Removal

```java
@Entity
public class Order extends BaseEntity {

    @OneToMany(mappedBy = "order",
               cascade = CascadeType.ALL,    // Cascade tất cả operations
               orphanRemoval = true)          // Xóa item khi remove khỏi list
    private List<OrderItem> items = new ArrayList<>();

    public void addItem(OrderItem item) {
        items.add(item);
        item.setOrder(this);
    }

    public void removeItem(OrderItem item) {
        items.remove(item);
        item.setOrder(null);
        // orphanRemoval = true → item bị DELETE khỏi DB
    }
}
```

---

## Summary

- JPA relationships (@OneToMany, @ManyToOne, @ManyToMany) map relationships between entities, always use FetchType.LAZY
- N+1 problem solved by JOIN FETCH, @EntityGraph, @BatchSize or DTO projection
- Spring Data Pagination (Page, Slice, Pageable) supports automatic pagination and sorting
- JPA Specification allows building dynamic queries with many optional filter parameters

## Exercises

1. Create 3 entities: Author (1-N) Book (N-N) Tag. Fully implement relationships with convenience methods
2. Write a query to get all Books with Author without N+1 (using @EntityGraph or JOIN FETCH). Verify by number of queries in log
3. Implement search API for Books with JPA Specification: filter by author, tags, price range, keyword in title. Combined with Pagination
