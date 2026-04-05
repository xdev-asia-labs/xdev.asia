---
id: 019e2a10-a105-7a01-b001-f1a2b3c4d505
title: 'Bài 5: Validation, Error Handling & Config Profiles'
slug: bai-5-validation-error-handling-config-profiles
description: >-
  Bean Validation với Hibernate Validator, Exception Mappers, Problem Details (RFC 9457),
  Config Profiles cho dev/staging/prod environments.
duration_minutes: 80
is_free: false
video_url: null
sort_order: 4
section_title: "Phần 1: Nền tảng Quarkus & Project Setup"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2764" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2764)"/>

  <!-- Decorations -->
  <g>
    <circle cx="853" cy="209" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="606" cy="182" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="859" cy="155" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="612" cy="128" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="865" cy="101" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="119" x2="1100" y2="199" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="149" x2="1050" y2="219" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="948.444863728671,102 948.444863728671,136 919,153 889.555136271329,136 889.555136271329,102.00000000000001 919,85" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 Lập trình — Bài 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 5: Validation, Error Handling &amp; Config</tspan>
      <tspan x="60" dy="42">Profiles</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus Microservices: Từ Cơ bản đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng Quarkus &amp; Project Setup</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Một API chuyên nghiệp cần validate dữ liệu đầu vào, trả về lỗi với format chuẩn, và cấu hình khác nhau cho mỗi môi trường. Bài này sử dụng **Bean Validation** (Hibernate Validator), **Exception Mappers** theo chuẩn **RFC 9457 Problem Details**, và **Config Profiles** của Quarkus.

## Bean Validation

### Dependency

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-hibernate-validator</artifactId>
</dependency>
```

### Validation trên DTO

```java
import jakarta.validation.constraints.*;
import java.math.BigDecimal;

public record CreateProductRequest(
    @NotBlank(message = "Tên sản phẩm không được để trống")
    @Size(min = 3, max = 255,
          message = "Tên sản phẩm phải từ 3 đến 255 ký tự")
    String name,

    @Size(max = 5000, message = "Mô tả tối đa 5000 ký tự")
    String description,

    @NotNull(message = "Giá không được để trống")
    @DecimalMin(value = "0.01", message = "Giá phải lớn hơn 0")
    @DecimalMax(value = "999999999.99",
                message = "Giá tối đa 999,999,999.99")
    BigDecimal price,

    @NotNull(message = "Danh mục không được để trống")
    Long categoryId,

    @Min(value = 0, message = "Số lượng không được âm")
    @Max(value = 1000000, message = "Số lượng tối đa 1,000,000")
    int stockQuantity
) {}
```

### Validation trong Resource

```java
import jakarta.validation.Valid;

@POST
public Response create(@Valid CreateProductRequest request) {
    // Nếu validation fail → Quarkus tự động throw
    // ConstraintViolationException với HTTP 400
    ProductDTO created = productService.create(request);
    return Response.created(
        URI.create("/api/v1/products/" + created.id()))
        .entity(created).build();
}
```

### Custom Validator

```java
import jakarta.validation.Constraint;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import jakarta.validation.Payload;
import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = ValidSlug.Validator.class)
public @interface ValidSlug {
    String message() default "Slug không hợp lệ (chỉ chấp nhận a-z, 0-9, dấu gạch ngang)";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};

    class Validator implements ConstraintValidator<ValidSlug, String> {
        private static final Pattern SLUG_PATTERN =
            Pattern.compile("^[a-z0-9]+(-[a-z0-9]+)*$");

        @Override
        public boolean isValid(String value,
                               ConstraintValidatorContext ctx) {
            if (value == null) return true; // @NotNull xử lý riêng
            return SLUG_PATTERN.matcher(value).matches();
        }
    }
}
```

### Cross-field Validation (Class-level)

Validate nhiều field phụ thuộc nhau:

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy =
    ValidDateRange.Validator.class)
public @interface ValidDateRange {
    String message() default
        "Ngày kết thúc phải sau ngày bắt đầu";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};

    class Validator implements
            ConstraintValidator<ValidDateRange,
                CreatePromotionRequest> {

        @Override
        public boolean isValid(
                CreatePromotionRequest req,
                ConstraintValidatorContext ctx) {
            if (req.startDate() == null
                    || req.endDate() == null) {
                return true;
            }
            if (req.endDate().isBefore(req.startDate())) {
                ctx.disableDefaultConstraintViolation();
                ctx.buildConstraintViolationWithTemplate(
                    "endDate phải sau startDate")
                    .addPropertyNode("endDate")
                    .addConstraintViolation();
                return false;
            }
            return true;
        }
    }
}

@ValidDateRange
public record CreatePromotionRequest(
    @NotBlank String name,
    @NotNull @DecimalMin("0.01") BigDecimal discount,
    @NotNull @FutureOrPresent LocalDate startDate,
    @NotNull @Future LocalDate endDate
) {}
```

### Validation Groups

Dùng groups để validate khác nhau cho Create vs Update:

```java
// Groups
public interface OnCreate {}
public interface OnUpdate {}

public record ProductRequest(
    @Null(groups = OnCreate.class,
        message = "Không được truyền ID khi tạo mới")
    @NotNull(groups = OnUpdate.class,
        message = "ID bắt buộc khi cập nhật")
    Long id,

    @NotBlank(groups = {OnCreate.class, OnUpdate.class})
    String name,

    @NotNull(groups = OnCreate.class)
    BigDecimal price,

    @NotNull(groups = OnCreate.class)
    @Min(value = 0, groups = {OnCreate.class, OnUpdate.class})
    Integer stockQuantity
) {}

// Resource sử dụng groups
@POST
public Response create(
        @Valid @ConvertGroup(to = OnCreate.class)
        ProductRequest request) {
    // ...
}

@PUT @Path("/{id}")
public ProductDTO update(
        @PathParam("id") Long id,
        @Valid @ConvertGroup(to = OnUpdate.class)
        ProductRequest request) {
    // ...
}
```

### Method-level Validation

Validate parameters và return value:

```java
@ApplicationScoped
public class ProductService {

    @Inject
    ProductRepository productRepo;

    // Validate parameter
    public List<Product> search(
            @NotBlank String keyword,
            @Min(0) int page,
            @Min(1) @Max(100) int size) {
        return productRepo.search(keyword,
            Page.of(page, size));
    }

    // Validate return value
    @Valid
    public ProductDTO getById(@Min(1) Long id) {
        return productRepo.findByIdOptional(id)
            .map(ProductDTO::from)
            .orElseThrow(() ->
                new ResourceNotFoundException(
                    "Product", id));
    }
}
```

## Exception Handling — RFC 9457 Problem Details

### Problem Details DTO

```java
import java.net.URI;
import java.time.Instant;
import java.util.List;

public record ProblemDetail(
    URI type,
    String title,
    int status,
    String detail,
    URI instance,
    Instant timestamp,
    List<FieldError> errors
) {
    public record FieldError(
        String field,
        String message,
        Object rejectedValue
    ) {}

    public static ProblemDetail of(int status, String title,
                                   String detail) {
        return new ProblemDetail(
            URI.create("about:blank"), title, status, detail,
            null, Instant.now(), null);
    }

    public static ProblemDetail withErrors(int status, String title,
                                           String detail,
                                           List<FieldError> errors) {
        return new ProblemDetail(
            URI.create("about:blank"), title, status, detail,
            null, Instant.now(), errors);
    }
}
```

### ConstraintViolation ExceptionMapper

```java
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;
import java.util.List;

@Provider
public class ConstraintViolationExceptionMapper
        implements ExceptionMapper<ConstraintViolationException> {

    @Override
    public Response toResponse(ConstraintViolationException ex) {
        List<ProblemDetail.FieldError> fieldErrors = ex
            .getConstraintViolations()
            .stream()
            .map(cv -> new ProblemDetail.FieldError(
                extractFieldName(cv),
                cv.getMessage(),
                cv.getInvalidValue()))
            .toList();

        ProblemDetail problem = ProblemDetail.withErrors(
            400,
            "Validation Error",
            "Dữ liệu đầu vào không hợp lệ",
            fieldErrors);

        return Response.status(400)
                .type("application/problem+json")
                .entity(problem)
                .build();
    }

    private String extractFieldName(ConstraintViolation<?> cv) {
        String path = cv.getPropertyPath().toString();
        // "create.request.name" → "name"
        int lastDot = path.lastIndexOf('.');
        return lastDot >= 0 ? path.substring(lastDot + 1) : path;
    }
}
```

### Custom Business Exceptions

```java
// Exception classes
public class ResourceNotFoundException extends RuntimeException {
    private final String resourceType;
    private final Object resourceId;

    public ResourceNotFoundException(String type, Object id) {
        super(type + " with id " + id + " not found");
        this.resourceType = type;
        this.resourceId = id;
    }
    // getters...
}

public class BusinessException extends RuntimeException {
    private final int statusCode;

    public BusinessException(int statusCode, String message) {
        super(message);
        this.statusCode = statusCode;
    }
    // getter...
}

// ExceptionMapper
@Provider
public class ResourceNotFoundExceptionMapper
        implements ExceptionMapper<ResourceNotFoundException> {

    @Override
    public Response toResponse(ResourceNotFoundException ex) {
        ProblemDetail problem = ProblemDetail.of(
            404, "Resource Not Found", ex.getMessage());
        return Response.status(404)
                .type("application/problem+json")
                .entity(problem).build();
    }
}

@Provider
public class BusinessExceptionMapper
        implements ExceptionMapper<BusinessException> {

    @Override
    public Response toResponse(BusinessException ex) {
        ProblemDetail problem = ProblemDetail.of(
            ex.getStatusCode(), "Business Error", ex.getMessage());
        return Response.status(ex.getStatusCode())
                .type("application/problem+json")
                .entity(problem).build();
    }
}
```

### Catch-all ExceptionMapper

```java
@Provider
public class GenericExceptionMapper
        implements ExceptionMapper<Exception> {

    private static final Logger LOG =
        Logger.getLogger(GenericExceptionMapper.class);

    @Override
    public Response toResponse(Exception ex) {
        LOG.error("Unhandled exception", ex);

        ProblemDetail problem = ProblemDetail.of(
            500,
            "Internal Server Error",
            "Đã xảy ra lỗi hệ thống. Vui lòng thử lại sau.");

        return Response.status(500)
                .type("application/problem+json")
                .entity(problem).build();
    }
}
```

### Tổ chức ExceptionMappers — Centralized Handler

Thay vì nhiều mapper classes riêng lẻ, gom vào 1 class:

```java
@Provider
public class GlobalExceptionHandler
        implements ExceptionMapper<Throwable> {

    private static final Logger LOG =
        Logger.getLogger(GlobalExceptionHandler.class);

    @Override
    public Response toResponse(Throwable ex) {
        return switch (ex) {
            case ConstraintViolationException cve ->
                handleValidation(cve);
            case ResourceNotFoundException rnfe ->
                handleNotFound(rnfe);
            case BusinessException be ->
                handleBusiness(be);
            case ForbiddenException fe ->
                handleForbidden(fe);
            case WebApplicationException wae ->
                handleWebApp(wae);
            default -> handleUnexpected(ex);
        };
    }

    private Response handleValidation(
            ConstraintViolationException ex) {
        List<ProblemDetail.FieldError> fieldErrors =
            ex.getConstraintViolations().stream()
                .map(cv -> new ProblemDetail.FieldError(
                    extractFieldName(cv),
                    cv.getMessage(),
                    cv.getInvalidValue()))
                .toList();
        return respond(400, "Validation Error",
            "Dữ liệu đầu vào không hợp lệ",
            fieldErrors);
    }

    private Response handleNotFound(
            ResourceNotFoundException ex) {
        return respond(404, "Not Found",
            ex.getMessage(), null);
    }

    private Response handleBusiness(BusinessException ex) {
        return respond(ex.getStatusCode(),
            "Business Error", ex.getMessage(), null);
    }

    private Response handleForbidden(ForbiddenException ex) {
        return respond(403, "Forbidden",
            ex.getMessage(), null);
    }

    private Response handleWebApp(
            WebApplicationException ex) {
        int status = ex.getResponse().getStatus();
        return respond(status,
            Response.Status.fromStatusCode(status)
                .getReasonPhrase(),
            ex.getMessage(), null);
    }

    private Response handleUnexpected(Throwable ex) {
        LOG.error("Unhandled exception", ex);
        return respond(500, "Internal Server Error",
            "Đã xảy ra lỗi hệ thống."
            + " Vui lòng thử lại sau.", null);
    }

    private Response respond(int status, String title,
                             String detail,
                             List<ProblemDetail.FieldError> errors) {
        ProblemDetail problem = errors != null
            ? ProblemDetail.withErrors(
                status, title, detail, errors)
            : ProblemDetail.of(status, title, detail);
        return Response.status(status)
            .type("application/problem+json")
            .entity(problem).build();
    }

    private String extractFieldName(
            ConstraintViolation<?> cv) {
        String path = cv.getPropertyPath().toString();
        int lastDot = path.lastIndexOf('.');
        return lastDot >= 0
            ? path.substring(lastDot + 1) : path;
    }
}
```

### Error Response i18n

Quarkus hỗ trợ validation messages đa ngôn ngữ:

```properties
# src/main/resources/ValidationMessages.properties
# (default — Vietnamese)
product.name.required=Tên sản phẩm không được để trống
product.name.size=Tên sản phẩm phải từ {min} đến {max} ký tự
product.price.min=Giá phải lớn hơn {value}
```

```properties
# src/main/resources/ValidationMessages_en.properties
product.name.required=Product name is required
product.name.size=Product name must be between {min} and {max} characters
product.price.min=Price must be greater than {value}
```

```java
public record CreateProductRequest(
    @NotBlank(message = "{product.name.required}")
    @Size(min = 3, max = 255,
          message = "{product.name.size}")
    String name,

    @DecimalMin(value = "0.01",
          message = "{product.price.min}")
    BigDecimal price
) {}
```

Client gửi header `Accept-Language: en` → nhận error messages tiếng Anh.

### Response mẫu

```json
{
  "type": "about:blank",
  "title": "Validation Error",
  "status": 400,
  "detail": "Dữ liệu đầu vào không hợp lệ",
  "timestamp": "2026-04-15T10:30:00Z",
  "errors": [
    {
      "field": "name",
      "message": "Tên sản phẩm không được để trống",
      "rejectedValue": null
    },
    {
      "field": "price",
      "message": "Giá phải lớn hơn 0",
      "rejectedValue": -100
    }
  ]
}
```

## Config Profiles

### Mặc định: dev, test, prod

```properties
# application.properties

# Chung cho tất cả profiles
quarkus.application.name=product-service
quarkus.http.port=8080

# --- DEV profile (mặc định khi `quarkus dev`) ---
%dev.quarkus.log.level=DEBUG
%dev.quarkus.hibernate-orm.database.generation=drop-and-create
%dev.quarkus.hibernate-orm.log.sql=true

# --- TEST profile (mặc định khi `mvn test`) ---
%test.quarkus.log.level=INFO
%test.quarkus.hibernate-orm.database.generation=drop-and-create

# --- PROD profile (mặc định khi `java -jar`) ---
%prod.quarkus.log.level=WARN
%prod.quarkus.hibernate-orm.database.generation=none
%prod.quarkus.datasource.jdbc.url=jdbc:postgresql://${DB_HOST}:5432/${DB_NAME}
%prod.quarkus.datasource.username=${DB_USERNAME}
%prod.quarkus.datasource.password=${DB_PASSWORD}
```

### Custom Profiles

```properties
# Profile: staging
%staging.quarkus.datasource.jdbc.url=jdbc:postgresql://staging-db:5432/ecommerce
%staging.quarkus.log.level=INFO
%staging.quarkus.hibernate-orm.database.generation=none
```

```bash
# Chạy với custom profile
quarkus dev -Dquarkus.profile=staging

# hoặc
java -Dquarkus.profile=staging -jar target/quarkus-app/quarkus-run.jar
```

### Application YAML (thay thế properties)

```yaml
# src/main/resources/application.yml
quarkus:
  application:
    name: product-service
  datasource:
    db-kind: postgresql
  hibernate-orm:
    database:
      generation: drop-and-create

"%prod":
  quarkus:
    datasource:
      jdbc:
        url: jdbc:postgresql://${DB_HOST}:5432/${DB_NAME}
      username: ${DB_USERNAME}
      password: ${DB_PASSWORD}
    hibernate-orm:
      database:
        generation: none
```

### Typesafe Config với @ConfigMapping

```java
import io.smallrye.config.ConfigMapping;
import io.smallrye.config.WithDefault;
import java.util.Optional;

@ConfigMapping(prefix = "app.product")
public interface ProductConfig {

    @WithDefault("20")
    int defaultPageSize();

    @WithDefault("100")
    int maxPageSize();

    Optional<String> importFilePath();

    FeatureFlags features();

    interface FeatureFlags {

        @WithDefault("false")
        boolean enableRecommendations();

        @WithDefault("true")
        boolean enableFullTextSearch();
    }
}
```

```properties
# application.properties
app.product.default-page-size=20
app.product.max-page-size=100
app.product.features.enable-recommendations=false
app.product.features.enable-full-text-search=true
```

```java
@ApplicationScoped
public class ProductService {

    @Inject
    ProductConfig config;

    public List<Product> list(int page, int size) {
        int pageSize = Math.min(size, config.maxPageSize());
        // ...
    }
}
```

## Bài tập

1. Thêm Bean Validation cho `CreateProductRequest` và `UpdateProductRequest`
2. Tạo custom `@ValidSlug` annotation validator
3. Implement cross-field validation `@ValidDateRange` cho promotion
4. Implement `ProblemDetail` response theo RFC 9457
5. Tạo `GlobalExceptionHandler` xử lý tất cả exceptions với pattern matching
6. Thêm Validation Groups (`OnCreate`, `OnUpdate`) cho ProductRequest
7. Tạo `ValidationMessages.properties` cho i18n (Vietnamese & English)
8. Cấu hình `%dev`, `%test`, `%prod` profiles trong `application.properties`
9. Tạo `ProductConfig` với `@ConfigMapping` để quản lý typed config
10. Viết `@QuarkusTest` test validation errors trả về đúng Problem Details format

## Testing Validation

```java
@QuarkusTest
class ValidationTest {

    @Test
    void testCreateProductValidation() {
        given()
            .contentType("application/json")
            .body("""
                {
                  "name": "",
                  "price": -100,
                  "stockQuantity": -1
                }
                """)
            .when().post("/api/v1/products")
            .then()
                .statusCode(400)
                .contentType("application/problem+json")
                .body("title", equalTo("Validation Error"))
                .body("status", equalTo(400))
                .body("errors.size()", greaterThan(0))
                .body("errors.field",
                    hasItems("name", "price"));
    }

    @Test
    void testNotFoundResponse() {
        given()
            .when().get("/api/v1/products/99999")
            .then()
                .statusCode(404)
                .contentType("application/problem+json")
                .body("title", equalTo("Not Found"));
    }

    @Test
    void testCustomSlugValidation() {
        given()
            .contentType("application/json")
            .body("""
                { "slug": "Invalid Slug With Spaces!" }
                """)
            .when().post("/api/v1/categories")
            .then()
                .statusCode(400)
                .body("errors[0].field",
                    equalTo("slug"));
    }
}
```

## Tổng kết

- **Bean Validation** (`@NotBlank`, `@Size`, `@Min`...) tự động validate khi dùng `@Valid`
- **ExceptionMapper** chuyển đổi exceptions thành JSON response chuẩn
- **RFC 9457 Problem Details** — format lỗi chuẩn với `application/problem+json`
- **Config Profiles** (`%dev`, `%test`, `%prod`) — cấu hình riêng cho mỗi môi trường
- **`@ConfigMapping`** — typesafe configuration thay thế `@ConfigProperty`

Bài tiếp theo: Domain-Driven Design & Database per Service — thiết kế microservices architecture.
