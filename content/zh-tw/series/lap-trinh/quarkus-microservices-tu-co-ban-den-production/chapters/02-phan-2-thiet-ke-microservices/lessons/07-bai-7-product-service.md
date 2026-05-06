---
id: 019e2a10-a107-7a01-b001-f1a2b3c4d507
title: 第 7 課：建構完整的產品服務
slug: bai-7-xay-dung-product-service-hoan-chinh
description: 建置端對端產品服務：實體、儲存庫、服務層、REST API、DTO 映射、搜尋和資料導入。
duration_minutes: 120
is_free: false
video_url: null
sort_order: 6
section_title: 第 2 部分：設計微服務架構
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: Quarkus 微服務：從基礎知識到生產
  slug: quarkus-microservices-tu-co-ban-den-production
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7778" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7778)"/>

  <!-- Decorations -->
  <g>
    <circle cx="932" cy="166" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="764" cy="38" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1096" cy="170" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="928" cy="42" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="760" cy="174" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="186" x2="1100" y2="266" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="216" x2="1050" y2="286" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1021.507041555162,165.5 1021.507041555162,206.5 986,227 950.492958444838,206.5 950.492958444838,165.5 986,145" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 程式設計 — 第 6 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 課：建構完整的產品服務</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus 微服務：從基礎知識到生產</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：設計微服務架構</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

本文建構了一個完整的**產品服務**－電子商務系統中的第一個微服務。將先前文章中的知識：Panache、驗證、異常處理、DDD、Flyway 應用於生產就緒的程式碼庫。

## 專案結構

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

## 實體層

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

## 儲存庫層

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

## DTO 映射

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

## 服務層

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

## REST 資源

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

## 分頁結果助手

```java
public record PagedResult<T>(
    List<T> items,
    long totalItems,
    int page,
    int size,
    int totalPages
) {}
```

## 種子資料遷移

```sql
-- V1.1.0__seed_categories.sql
INSERT INTO categories (name, description) VALUES
    ('Electronics', 'Điện tử, máy tính, điện thoại'),
    ('Clothing', 'Thời trang, quần áo'),
    ('Books', 'Sách, tài liệu'),
    ('Home', 'Đồ gia dụng, nội thất'),
    ('Sports', 'Thể thao, outdoor');
```

## 練習

1.建立一個具有上述結構的Product Service項目
2、全面實現CRUD+搜尋+分頁
3. 新增端點 `GET /api/v1/products/top-viewed` 返回前 10 名產品
4.編寫Flyway遷移（模式+種子資料）
5. 透過 Swagger UI 測試整個 API `http://localhost:8081/q/swagger-ui`
6. 更多 `CategoryResource` 類別進行 CRUD

## 總結

- **分層架構**：實體→儲存庫→服務→資源
- **DTO 映射** 使用靜態工廠方法 `from()` （小型專案不需要MapStruct）
- **PagedResult** 記錄有助於標準化尋呼回應
- **域方法**在實體中保存業務邏輯（DDD）
- **Flyway** 管理架構 + 種子數據

下一篇：訂單服務和付款服務——處理訂單和付款。
