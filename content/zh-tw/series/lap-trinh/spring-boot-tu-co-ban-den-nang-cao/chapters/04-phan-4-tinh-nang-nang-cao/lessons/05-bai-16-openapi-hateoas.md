---
id: 019c9617-fc16-7016-a016-fc1600000016
title: 第 16 課：使用 OpenAPI 和 HATEOAS 編寫 API 文檔
slug: bai-16-openapi-hateoas
description: >-
  SpringDoc OpenAPI 3 — 自動產生 Swagger UI 和 API 文件。 HATEOAS 和超媒體驅動的 API。 API
  版本控制策略和最佳實務。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 15
section_title: 第 4 部分：進階功能
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: Spring Boot 4：從基礎到高級
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8316" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8316)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1093" cy="169" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="1086" cy="42" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1079" cy="175" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1072" cy="48" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="1065" cy="181" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="239" x2="1100" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="269" x2="1050" y2="339" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="968.444863728671,122 968.444863728671,156 939,173 909.555136271329,156 909.555136271329,122.00000000000001 939,105" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 程式設計 — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：使用 OpenAPI 進行 API 文件 &</tspan>
      <tspan x="60" dy="42">哈特奧阿斯</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階功能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

API文件是建立REST API時不可或缺的一部分。 SpringDoc OpenAPI 會自動從程式碼產生 API 文檔，而 HATEOAS 透過超媒體連結幫助 API 進行自我描述。

---

## 1.SpringDoc OpenAPI

### 1.1 設置

```kotlin
// build.gradle.kts
implementation("org.springdoc:springdoc-openapi-starter-webmvc-ui:2.8.0")
```

```yaml
# application.yml
springdoc:
  api-docs:
    path: /api-docs
  swagger-ui:
    path: /swagger-ui.html
    tags-sorter: alpha
    operations-sorter: method
```

### 1.2 配置OpenAPI元數據

```java
@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
            .info(new Info()
                .title("My App API")
                .version("1.0.0")
                .description("REST API documentation for My App")
                .contact(new Contact()
                    .name("Dev Team")
                    .email("dev@example.com"))
                .license(new License()
                    .name("MIT")
                    .url("https://opensource.org/licenses/MIT")))
            .addSecurityItem(new SecurityRequirement()
                .addList("Bearer Authentication"))
            .components(new Components()
                .addSecuritySchemes("Bearer Authentication",
                    new SecurityScheme()
                        .type(SecurityScheme.Type.HTTP)
                        .bearerFormat("JWT")
                        .scheme("bearer")));
    }
}
```

### 1.3 註解控制器

```java
@RestController
@RequestMapping("/api/v1/products")
@Tag(name = "Products", description = "Product management APIs")
public class ProductController {

    @Operation(
        summary = "Get product by ID",
        description = "Returns a single product by its ID"
    )
    @ApiResponses({
        @ApiResponse(responseCode = "200",
            description = "Product found",
            content = @Content(schema =
                @Schema(implementation = ProductResponse.class))),
        @ApiResponse(responseCode = "404",
            description = "Product not found")
    })
    @GetMapping("/{id}")
    public ResponseEntity<ProductResponse> getProduct(
            @Parameter(description = "Product ID", example = "1")
            @PathVariable Long id) {
        return ResponseEntity.ok(productService.getProduct(id));
    }

    @Operation(summary = "Search products with filters")
    @GetMapping
    public ResponseEntity<Page<ProductResponse>> searchProducts(
            @Parameter(description = "Search keyword")
            @RequestParam(required = false) String keyword,
            @Parameter(description = "Min price")
            @RequestParam(required = false) BigDecimal minPrice,
            @ParameterObject Pageable pageable) {
        return ResponseEntity.ok(
            productService.search(keyword, minPrice, pageable));
    }
}
```

### 1.4 群組API

```java
@Bean
public GroupedOpenApi publicApi() {
    return GroupedOpenApi.builder()
        .group("public")
        .pathsToMatch("/api/v1/**")
        .build();
}

@Bean
public GroupedOpenApi adminApi() {
    return GroupedOpenApi.builder()
        .group("admin")
        .pathsToMatch("/api/admin/**")
        .addOpenApiMethodFilter(method ->
            method.isAnnotationPresent(PreAuthorize.class))
        .build();
}
```

訪問：
- 招搖使用者介面： `http://localhost:8080/swagger-ui.html`
- JSON 文檔： `http://localhost:8080/api-docs`

---

## 2. HATEOAS — 超媒體作為應用程式狀態的引擎

### 2.1 設置

```kotlin
// build.gradle.kts
implementation("org.springframework.boot:spring-boot-starter-hateoas")
```

### 2.2 建立資源模型

```java
public class ProductModel extends RepresentationModel<ProductModel> {
    private Long id;
    private String name;
    private BigDecimal price;
    private String category;

    // constructors, getters
}
```

### 2.3 新增回應鏈接

```java
@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    @GetMapping("/{id}")
    public EntityModel<ProductResponse> getProduct(@PathVariable Long id) {
        ProductResponse product = productService.getProduct(id);

        return EntityModel.of(product,
            linkTo(methodOn(ProductController.class).getProduct(id))
                .withSelfRel(),
            linkTo(methodOn(ProductController.class).getAllProducts(Pageable.unpaged()))
                .withRel("products"),
            linkTo(methodOn(ReviewController.class).getReviews(id))
                .withRel("reviews")
        );
    }

    @GetMapping
    public CollectionModel<EntityModel<ProductResponse>> getAllProducts(
            Pageable pageable) {
        Page<ProductResponse> products = productService.getAll(pageable);

        List<EntityModel<ProductResponse>> productModels = products.stream()
            .map(product -> EntityModel.of(product,
                linkTo(methodOn(ProductController.class)
                    .getProduct(product.id())).withSelfRel()))
            .toList();

        return CollectionModel.of(productModels,
            linkTo(methodOn(ProductController.class)
                .getAllProducts(pageable)).withSelfRel());
    }
}
```

### 2.4 HAL+JSON 格式的回應

```json
{
  "id": 1,
  "name": "Spring Boot in Action",
  "price": 450000,
  "_links": {
    "self": {
      "href": "http://localhost:8080/api/v1/products/1"
    },
    "products": {
      "href": "http://localhost:8080/api/v1/products"
    },
    "reviews": {
      "href": "http://localhost:8080/api/v1/products/1/reviews"
    }
  }
}
```

### 2.5 表示模型組裝器

```java
@Component
public class ProductModelAssembler
        implements RepresentationModelAssembler<Product, EntityModel<ProductResponse>> {

    @Override
    public EntityModel<ProductResponse> toModel(Product entity) {
        ProductResponse response = ProductResponse.from(entity);
        return EntityModel.of(response,
            linkTo(methodOn(ProductController.class)
                .getProduct(entity.getId())).withSelfRel(),
            linkTo(methodOn(ProductController.class)
                .getAllProducts(Pageable.unpaged())).withRel("products"));
    }
}
```

---

## 3. API 版本控制策略

|戰略|範例|優點 |缺點 |
|----------|---------|--------|--------|
|網址路徑| /api/v1/產品 |清晰、易快取 |更改網址 |
|查詢參數 | /api/產品？版本=1 |靈活|容易忘記|
|標題 |接受：application/vnd.api.v1+json |乾淨的網址 |使用瀏覽器測試困難 |
|媒體類型 |內容類型：application/vnd.api.v1+json |最寧靜|複雜|

**建議**：URL 路徑版本控制（`/api/v1/`）是最簡單也是最流行的。

---

## 總結

- SpringDoc OpenAPI 自動從控制器註釋產生 Swagger UI 和 JSON 文件
- HATEOAS 在回應中添加超媒體鏈接，幫助客戶無需文件即可探索 API
- 大多數情況下，API 版本控制應使用 URL 路徑 (/api/v1/)

## 練習

1. SpringDoc OpenAPI整合：使用@Operation、@ApiResponse註釋所有控制器，為公共和管理API建立分組文檔
2.為產品API實現HATEOAS：每個產品響應包含自鏈接、收藏鏈接和相關資源鏈接
3.為ProductController建立API版本控制：/api/v1和/api/v2，v2有附加欄位並更改了回應格式
