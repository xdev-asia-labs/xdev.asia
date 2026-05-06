---
id: 019c9617-fc16-7016-a016-fc1600000016
title: 'Lesson 16: API Documentation with OpenAPI & HATEOAS'
slug: bai-16-openapi-hateoas
description: >-
  SpringDoc OpenAPI 3 — automatically generates Swagger UI and API docs. HATEOAS
  and hypermedia-driven APIs. API versioning strategies and best practices.
duration_minutes: 90
is_free: false
video_url: null
sort_order: 15
section_title: 'Part 4: Advanced Features'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: From Basics to Advanced'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 Programming — Lesson 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 16: API Documentation with OpenAPI &</tspan>
      <tspan x="60" dy="42">HATEOAS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Advanced Features</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

API documentation is an indispensable part when building a REST API. SpringDoc OpenAPI automatically generates API docs from code, while HATEOAS helps APIs self-describe through hypermedia links.

---

## 1. SpringDoc OpenAPI

### 1.1 Setup

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

### 1.2 Configure OpenAPI metadata

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

### 1.3 Annotate Controller

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

### 1.4 Group APIs

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

Access:
- Swagger UI: `http://localhost:8080/swagger-ui.html`
- JSON docs: `http://localhost:8080/api-docs`

---

## 2. HATEOAS — Hypermedia As The Engine Of Application State

### 2.1 Setup

```kotlin
// build.gradle.kts
implementation("org.springframework.boot:spring-boot-starter-hateoas")
```

### 2.2 Create Resource Model

```java
public class ProductModel extends RepresentationModel<ProductModel> {
    private Long id;
    private String name;
    private BigDecimal price;
    private String category;

    // constructors, getters
}
```

### 2.3 Add Links to Response

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

### 2.4 Response in HAL+JSON format

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

### 2.5 RepresentationModelAssembler

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

## 3. API Versioning Strategies

| Strategy | Example | Pros | Cons |
|----------|---------|-------|-------|
| URL Path | /api/v1/products | Clear, easy to cache | Change URL |
| Query Param | /api/products?version=1 | Flexible | Easy to forget |
| Headers | Accept: application/vnd.api.v1+json | Clean URL | Difficult to test using browser |
| Media Type | Content-Type: application/vnd.api.v1+json | Most RESTful | Complex |

**Recommended**: URL Path versioning (`/api/v1/`) is the simplest and most popular.

---

## Summary

- SpringDoc OpenAPI automatically generates Swagger UI and JSON docs from controller annotations
- HATEOAS adds hypermedia links to the response, helping clients explore the API without needing documentation
- API versioning should use URL path (/api/v1/) for most cases

## Exercises

1. SpringDoc OpenAPI integration: annotate all controllers with @Operation, @ApiResponse, create grouped docs for public and admin APIs
2. Implement HATEOAS for Product API: each product response contains self link, collection link, and related resources links
3. Create API versioning: /api/v1 and /api/v2 for ProductController, v2 has additional fields and changed response format
