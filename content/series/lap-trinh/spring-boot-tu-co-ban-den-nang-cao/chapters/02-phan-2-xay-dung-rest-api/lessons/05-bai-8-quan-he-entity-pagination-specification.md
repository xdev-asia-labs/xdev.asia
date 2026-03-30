---
id: 019c9617-fc08-7008-a008-fc0800000008
title: 'Bài 8: Quan hệ Entity, Pagination & Specification'
slug: bai-8-quan-he-entity-pagination-specification
description: >-
  @OneToMany, @ManyToOne, @ManyToMany, @OneToOne. Fetch strategies (LAZY vs EAGER),
  N+1 problem. Pageable, Sort, Slice. JPA Specification cho dynamic queries.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Xây dựng REST API"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

## Giới thiệu

Trong ứng dụng thực tế, entities có quan hệ phức tạp với nhau. Hiểu cách mapping relationships, tránh N+1 problem, và implement pagination là kỹ năng bắt buộc cho backend developer. Bài này đi sâu vào JPA relationships và dynamic queries.

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

**Best practice**: Luôn dùng `FetchType.LAZY` cho tất cả relationships, rồi fetch khi cần bằng JOIN FETCH.

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

### 2.3 Giải pháp N+1

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

### 3.1 Pageable trong Repository

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

### 3.2 Controller với Pagination

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

### 4.1 Khi nào cần Specification?

Khi API có nhiều filter parameters optional:

```
GET /api/products?category=electronics&minPrice=100&maxPrice=500&status=ACTIVE&keyword=phone
```

Viết derived query method cho mọi tổ hợp là không khả thi. Specification cho phép build query dynamically.

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

### 4.3 Sử dụng trong Service

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

### 4.4 Controller

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

## Tóm tắt

- JPA relationships (@OneToMany, @ManyToOne, @ManyToMany) mapping quan hệ giữa entities, luôn dùng FetchType.LAZY
- N+1 problem giải quyết bằng JOIN FETCH, @EntityGraph, @BatchSize hoặc DTO projection
- Spring Data Pagination (Page, Slice, Pageable) hỗ trợ phân trang và sắp xếp tự động
- JPA Specification cho phép build dynamic queries với nhiều filter parameters optional

## Bài tập

1. Tạo 3 entities: Author (1-N) Book (N-N) Tag. Implement đầy đủ relationships với convenience methods
2. Viết query để lấy tất cả Books kèm Author mà không bị N+1 (dùng @EntityGraph hoặc JOIN FETCH). Verify bằng số queries trong log
3. Implement search API cho Books với JPA Specification: filter theo author, tags, price range, keyword trong title. Kết hợp với Pagination
