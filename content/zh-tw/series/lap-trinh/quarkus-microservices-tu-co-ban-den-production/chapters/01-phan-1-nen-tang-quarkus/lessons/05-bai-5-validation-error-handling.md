---
id: 019e2a10-a105-7a01-b001-f1a2b3c4d505
title: 第 5 課：驗證、錯誤處理和設定檔
slug: bai-5-validation-error-handling-config-profiles
description: 使用 Hibernate 驗證器進行 Bean 驗證、異常映射器、問題詳細資訊 (RFC 9457)、開發/登台/生產環境的設定檔。
duration_minutes: 80
is_free: false
video_url: null
sort_order: 4
section_title: 第 1 部分：Quarkus 平台和專案設置
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: Quarkus 微服務：從基礎知識到生產
  slug: quarkus-microservices-tu-co-ban-den-production
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 程式設計 — 第 4 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：驗證、錯誤處理與配置</tspan>
      <tspan x="60" dy="42">型材</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus 微服務：從基礎知識到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Quarkus 平台和專案設置</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

專業的API需要驗證輸入數據，以標準格式傳回錯誤，並針對每個環境進行不同的配置。本文使用 **Bean Validation**（Hibernate Validator）、**異常映射器**（根據 **RFC 9457 Problem Details**）以及 Quarkus 的 **Config Profiles**。

## Bean 驗證

### 依賴關係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-hibernate-validator</artifactId>
</dependency>
```

### DTO 驗證

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

### 資源驗證

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

### 自訂驗證器

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

### 跨領域驗證（類別層級）

驗證多個依賴欄位：

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

### 驗證群組

使用群組對建立與更新進行不同的驗證：

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

### 方法級驗證

驗證參數和傳回值：

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

## 異常處理 — RFC 9457 問題詳細信息

### 問題詳細資訊 DTO

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

### 自訂業務例外

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

### ExceptionMappers 組織－集中處理程序

不要將許多單獨的映射器類別分組為一個類別：

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

### 錯誤回應 i18n

Quarkus 支援多語言驗證訊息：

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

客戶端發送標頭 `Accept-Language: en` → 接收英文錯誤訊息。

### 回應範例

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

## 設定檔

### 預設：開發、測試、生產

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

### 自訂設定檔

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

### 應用程式 YAML（替換屬性）

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

### 使用@ConfigMapping 進行類型安全性配置

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

## 練習

1. 新增 Bean 驗證 `CreateProductRequest` 和 `UpdateProductRequest`
2. 建立自訂 `@ValidSlug` 註解驗證器
3. 實施跨領域驗證 `@ValidDateRange` 用於促銷
4. 實施 `ProblemDetail` 根據 RFC 9457 的回應
5. 創建 `GlobalExceptionHandler` 透過模式匹配處理所有異常
6. 新增驗證組（`OnCreate`, `OnUpdate`) 對於產品請求
7. 創建 `ValidationMessages.properties` i18n（越南語和英語）
8. 配置 `%dev`, `%test`, `%prod` 設定檔在 `application.properties`
9. 創建 `ProductConfig` 與 `@ConfigMapping` 管理鍵入的配置
10. 寫 `@QuarkusTest` 測試驗證錯誤返回正確的問題詳細資訊格式

## 測試驗證

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

## 總結

- **Bean 驗證** (`@NotBlank`, `@Size`, `@Min`...) 使用時自動驗證 `@Valid`
- **ExceptionMapper** 將異常轉換為標準 JSON 回應
- **RFC 9457 問題詳細資料** — 標準錯誤格式 `application/problem+json`
- **設定檔** (`%dev`, `%test`, `%prod`) — 每個環境的單獨配置
- **`@ConfigMapping`** — 類型安全性配置替代方案 `@ConfigProperty`

下一篇文章：領域驅動設計與每服務資料庫－微服務架構設計。
