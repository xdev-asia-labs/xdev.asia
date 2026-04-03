---
id: 019e2a10-a107-7a01-b001-f1a2b3c4d507
title: 'Bài 7: Xây dựng Product Service hoàn chỉnh'
slug: bai-7-xay-dung-product-service-hoan-chinh
description: >-
  Xây dựng Product Service end-to-end: Entity, Repository, Service layer,
  REST API, DTO mapping, search, và import dữ liệu.
duration_minutes: 120
is_free: false
video_url: null
sort_order: 6
section_title: "Phần 2: Thiết kế Microservices Architecture"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

## Giới thiệu

Bài này xây dựng **Product Service** hoàn chỉnh — microservice đầu tiên trong hệ thống E-Commerce. Áp dụng kiến thức từ các bài trước: Panache, Validation, Exception Handling, DDD, Flyway vào một codebase production-ready.

## Project Structure

```
product-service/
├── pom.xml
└── src/
    ├── main/
    │   ├── java/com/xdev/ecommerce/product/
    │   │   ├── entity/
    │   │   │   ├── Product.java
    │   │   │   ├── Category.java
    │   │   │   ├── ProductImage.java
    │   │   │   ├── Money.java           # Value Object
    │   │   │   └── StockInfo.java       # Value Object
    │   │   ├── dto/
    │   │   │   ├── CreateProductRequest.java
    │   │   │   ├── UpdateProductRequest.java
    │   │   │   ├── ProductDTO.java
    │   │   │   ├── ProductListDTO.java
    │   │   │   └── CategoryDTO.java
    │   │   ├── repository/
    │   │   │   ├── ProductRepository.java
    │   │   │   └── CategoryRepository.java
    │   │   ├── service/
    │   │   │   ├── ProductService.java
    │   │   │   └── CategoryService.java
    │   │   ├── resource/
    │   │   │   ├── ProductResource.java
    │   │   │   └── CategoryResource.java
    │   │   ├── mapper/
    │   │   │   └── ProductMapper.java
    │   │   └── exception/
    │   │       ├── ProblemDetail.java
    │   │       └── ExceptionMappers.java
    │   └── resources/
    │       ├── application.properties
    │       └── db/migration/
    │           ├── V1.0.0__init_schema.sql
    │           └── V1.1.0__seed_categories.sql
    └── test/
        └── java/com/xdev/ecommerce/product/
            ├── ProductResourceTest.java
            └── ProductServiceTest.java
```

## Entity Layer

```java
// Product.java — Aggregate Root
@Entity
@Table(name = "products")
public class Product extends PanacheEntity {

    @Column(nullable = false, length = 255)
    public String name;

    @Column(length = 500)
    public String slug;

    @Column(columnDefinition = "TEXT")
    public String description;

    @Embedded
    public Money price;

    @Embedded
    public StockInfo stock;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    public Category category;

    @OneToMany(mappedBy = "product",
               cascade = CascadeType.ALL,
               orphanRemoval = true)
    @OrderBy("sortOrder ASC")
    public List<ProductImage> images = new ArrayList<>();

    @Column(length = 20)
    public String status = "DRAFT";

    @Column(name = "view_count")
    public long viewCount = 0;

    @Column(name = "created_at", updatable = false)
    public LocalDateTime createdAt;

    @Column(name = "updated_at")
    public LocalDateTime updatedAt;

    @PrePersist
    void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = createdAt;
        if (slug == null) {
            slug = Slugify.create(name);
        }
    }

    @PreUpdate
    void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    // === Domain Methods ===

    public void activate() {
        requirePositivePrice();
        requireStock();
        this.status = "ACTIVE";
    }

    public void deactivate() {
        this.status = "INACTIVE";
    }

    public void reduceStock(int qty) {
        this.stock = stock.reduce(qty);
    }

    public void reserveStock(int qty) {
        this.stock = stock.reserve(qty);
    }

    public void incrementViewCount() {
        this.viewCount++;
    }

    private void requirePositivePrice() {
        if (price == null || price.amount()
                .compareTo(BigDecimal.ZERO) <= 0) {
            throw new BusinessException(400,
                "Product price must be > 0 to activate");
        }
    }

    private void requireStock() {
        if (stock == null || stock.available() <= 0) {
            throw new BusinessException(400,
                "Product must have stock > 0 to activate");
        }
    }
}
```

## Repository Layer

```java
@ApplicationScoped
public class ProductRepository implements PanacheRepository<Product> {

    public Optional<Product> findBySlug(String slug) {
        return find("slug", slug).firstResultOptional();
    }

    public PanacheQuery<Product> findActive(String category,
                                            String keyword,
                                            Sort sort) {
        StringBuilder query = new StringBuilder("status = 'ACTIVE'");
        Map<String, Object> params = new HashMap<>();

        if (category != null && !category.isBlank()) {
            query.append(" AND category.name = :category");
            params.put("category", category);
        }

        if (keyword != null && !keyword.isBlank()) {
            query.append(
                " AND (LOWER(name) LIKE :kw"
                + " OR LOWER(description) LIKE :kw)");
            params.put("kw", "%" + keyword.toLowerCase() + "%");
        }

        return find(query.toString(), sort, params);
    }

    public List<Product> findTopViewed(int limit) {
        return find("status = 'ACTIVE'",
                    Sort.by("viewCount").descending())
                .page(Page.of(0, limit))
                .list();
    }

    public long countByCategory(Long categoryId) {
        return count("category.id", categoryId);
    }
}
```

## DTO Mapping

```java
// ProductDTO.java — Response
public record ProductDTO(
    Long id,
    String name,
    String slug,
    String description,
    BigDecimal price,
    String currency,
    int stockAvailable,
    String categoryName,
    Long categoryId,
    List<String> imageUrls,
    String status,
    long viewCount,
    LocalDateTime createdAt
) {
    public static ProductDTO from(Product p) {
        return new ProductDTO(
            p.id, p.name, p.slug, p.description,
            p.price != null ? p.price.amount() : null,
            p.price != null ? p.price.currency() : "VND",
            p.stock != null ? p.stock.available() : 0,
            p.category != null ? p.category.name : null,
            p.category != null ? p.category.id : null,
            p.images.stream()
                .map(img -> img.url).toList(),
            p.status, p.viewCount, p.createdAt
        );
    }
}

// ProductListDTO.java — Lightweight cho list view
public record ProductListDTO(
    Long id,
    String name,
    String slug,
    BigDecimal price,
    String thumbnail,
    String categoryName,
    long viewCount
) {
    public static ProductListDTO from(Product p) {
        String thumb = p.images.isEmpty()
            ? null : p.images.getFirst().url;
        return new ProductListDTO(
            p.id, p.name, p.slug,
            p.price != null ? p.price.amount() : null,
            thumb,
            p.category != null ? p.category.name : null,
            p.viewCount
        );
    }
}
```

## Service Layer

```java
@ApplicationScoped
public class ProductService {

    @Inject
    ProductRepository productRepo;

    @Inject
    CategoryRepository categoryRepo;

    public PagedResult<ProductListDTO> list(int page, int size,
                                            String category,
                                            String keyword,
                                            String sortBy,
                                            String direction) {
        Sort sort = Sort.by(sortBy,
            "asc".equalsIgnoreCase(direction)
                ? Sort.Direction.Ascending
                : Sort.Direction.Descending);

        PanacheQuery<Product> query =
            productRepo.findActive(category, keyword, sort)
                       .page(Page.of(page, size));

        List<ProductListDTO> items = query.list().stream()
                .map(ProductListDTO::from).toList();

        return new PagedResult<>(
            items, query.count(), page, size, query.pageCount());
    }

    public ProductDTO getById(Long id) {
        Product product = productRepo.findByIdOptional(id)
            .orElseThrow(() -> new ResourceNotFoundException(
                "Product", id));
        product.incrementViewCount();
        return ProductDTO.from(product);
    }

    public ProductDTO getBySlug(String slug) {
        Product product = productRepo.findBySlug(slug)
            .orElseThrow(() -> new ResourceNotFoundException(
                "Product", slug));
        product.incrementViewCount();
        return ProductDTO.from(product);
    }

    @Transactional
    public ProductDTO create(CreateProductRequest req) {
        Category category = categoryRepo
            .findByIdOptional(req.categoryId())
            .orElseThrow(() -> new ResourceNotFoundException(
                "Category", req.categoryId()));

        Product product = new Product();
        product.name = req.name();
        product.description = req.description();
        product.price = Money.vnd(req.price());
        product.stock = new StockInfo(req.stockQuantity(), 0);
        product.category = category;
        productRepo.persist(product);

        return ProductDTO.from(product);
    }

    @Transactional
    public ProductDTO update(Long id, UpdateProductRequest req) {
        Product product = productRepo.findByIdOptional(id)
            .orElseThrow(() -> new ResourceNotFoundException(
                "Product", id));

        if (req.name() != null) product.name = req.name();
        if (req.description() != null)
            product.description = req.description();
        if (req.price() != null)
            product.price = Money.vnd(req.price());
        if (req.stockQuantity() != null)
            product.stock = new StockInfo(req.stockQuantity(), 0);

        return ProductDTO.from(product);
    }

    @Transactional
    public void delete(Long id) {
        boolean deleted = productRepo.deleteById(id);
        if (!deleted) {
            throw new ResourceNotFoundException("Product", id);
        }
    }
}
```

## REST Resource

```java
@Path("/api/v1/products")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Products")
public class ProductResource {

    @Inject
    ProductService productService;

    @GET
    public Response list(
            @QueryParam("page") @DefaultValue("0") int page,
            @QueryParam("size") @DefaultValue("20") int size,
            @QueryParam("category") String category,
            @QueryParam("q") String keyword,
            @QueryParam("sort") @DefaultValue("createdAt") String sort,
            @QueryParam("dir") @DefaultValue("desc") String dir) {

        var result = productService.list(
            page, size, category, keyword, sort, dir);

        return Response.ok(result.items())
                .header("X-Total-Count", result.totalItems())
                .header("X-Page", result.page())
                .header("X-Page-Size", result.size())
                .header("X-Total-Pages", result.totalPages())
                .build();
    }

    @GET @Path("/{id}")
    public ProductDTO getById(@PathParam("id") Long id) {
        return productService.getById(id);
    }

    @GET @Path("/slug/{slug}")
    public ProductDTO getBySlug(@PathParam("slug") String slug) {
        return productService.getBySlug(slug);
    }

    @POST
    public Response create(@Valid CreateProductRequest request) {
        ProductDTO created = productService.create(request);
        return Response
            .created(URI.create("/api/v1/products/" + created.id()))
            .entity(created).build();
    }

    @PUT @Path("/{id}")
    public ProductDTO update(@PathParam("id") Long id,
                             @Valid UpdateProductRequest request) {
        return productService.update(id, request);
    }

    @DELETE @Path("/{id}")
    public Response delete(@PathParam("id") Long id) {
        productService.delete(id);
        return Response.noContent().build();
    }
}
```

## Paged Result Helper

```java
public record PagedResult<T>(
    List<T> items,
    long totalItems,
    int page,
    int size,
    int totalPages
) {}
```

## Seed Data Migration

```sql
-- V1.1.0__seed_categories.sql
INSERT INTO categories (name, description) VALUES
    ('Electronics', 'Điện tử, máy tính, điện thoại'),
    ('Clothing', 'Thời trang, quần áo'),
    ('Books', 'Sách, tài liệu'),
    ('Home', 'Đồ gia dụng, nội thất'),
    ('Sports', 'Thể thao, outdoor');
```

## Bài tập

1. Tạo Product Service project với structure trên
2. Implement đầy đủ CRUD + search + pagination
3. Thêm endpoint `GET /api/v1/products/top-viewed` trả về top 10 sản phẩm
4. Viết Flyway migrations (schema + seed data)
5. Test toàn bộ API qua Swagger UI ở `http://localhost:8081/q/swagger-ui`
6. Thêm `CategoryResource` với CRUD cho categories

## Tổng kết

- **Layered Architecture**: Entity → Repository → Service → Resource
- **DTO Mapping** với static factory method `from()` (không cần MapStruct cho project nhỏ)
- **PagedResult** record giúp chuẩn hóa response phân trang
- **Domain Methods** giữ business logic trong entity (DDD)
- **Flyway** quản lý schema + seed data

Bài tiếp theo: Order Service & Payment Service — xử lý đặt hàng và thanh toán.
