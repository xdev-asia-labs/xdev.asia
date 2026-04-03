---
id: 019e2a10-a103-7a01-b001-f1a2b3c4d503
title: 'Bài 3: Quarkus REST — Xây dựng RESTful API chuyên nghiệp'
slug: bai-3-quarkus-rest-xay-dung-restful-api-chuyen-nghiep
description: >-
  Quarkus REST (Jakarta REST) với @Path, @GET, @POST, JSON serialization,
  CORS, OpenAPI & Swagger UI, API versioning.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng Quarkus & Project Setup"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

## Giới thiệu

Quarkus REST (trước đây gọi là RESTEasy Reactive) là implementation mặc định cho Jakarta REST trong Quarkus. Nó được thiết kế để xử lý request trên **IO thread** (non-blocking) hoặc **worker thread** (blocking) tùy theo return type, mang lại throughput cao mà không cần viết reactive code phức tạp.

## Jakarta REST Annotations cơ bản

### Resource class

```java
package com.xdev.ecommerce.product;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.net.URI;
import java.util.List;

@Path("/api/v1/products")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProductResource {

    @GET
    public List<ProductDTO> list(
            @QueryParam("page") @DefaultValue("0") int page,
            @QueryParam("size") @DefaultValue("20") int size,
            @QueryParam("category") String category) {
        // Trả về list → tự động serialize sang JSON
        return productService.findAll(page, size, category);
    }

    @GET
    @Path("/{id}")
    public ProductDTO getById(@PathParam("id") Long id) {
        return productService.findById(id);
    }

    @POST
    public Response create(CreateProductRequest request) {
        ProductDTO created = productService.create(request);
        return Response
                .created(URI.create("/api/v1/products/" + created.id()))
                .entity(created)
                .build();
    }

    @PUT
    @Path("/{id}")
    public ProductDTO update(@PathParam("id") Long id,
                             UpdateProductRequest request) {
        return productService.update(id, request);
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") Long id) {
        productService.delete(id);
        return Response.noContent().build();
    }
}
```

### DTOs với Java Records

```java
// Request DTOs
public record CreateProductRequest(
    String name,
    String description,
    BigDecimal price,
    Long categoryId,
    int stockQuantity
) {}

public record UpdateProductRequest(
    String name,
    String description,
    BigDecimal price,
    int stockQuantity
) {}

// Response DTO
public record ProductDTO(
    Long id,
    String name,
    String description,
    BigDecimal price,
    String categoryName,
    int stockQuantity,
    LocalDateTime createdAt
) {}
```

## Jackson JSON Serialization

### Cấu hình Jackson

```properties
# application.properties
quarkus.jackson.date-format=yyyy-MM-dd'T'HH:mm:ss
quarkus.jackson.timezone=Asia/Ho_Chi_Minh
quarkus.jackson.serialization.indent-output=true
quarkus.jackson.serialization.write-dates-as-timestamps=false
```

### Custom ObjectMapper

```java
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import io.quarkus.jackson.ObjectMapperCustomizer;
import jakarta.inject.Singleton;

@Singleton
public class RegisterCustomModuleCustomizer implements ObjectMapperCustomizer {

    @Override
    public void customize(ObjectMapper mapper) {
        mapper.enable(SerializationFeature.INDENT_OUTPUT);
        mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
    }
}
```

## Request / Response Filtering

### Server Filters

```java
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerResponseContext;
import org.jboss.resteasy.reactive.server.ServerRequestFilter;
import org.jboss.resteasy.reactive.server.ServerResponseFilter;
import io.vertx.core.http.HttpServerRequest;

public class LoggingFilter {

    @ServerRequestFilter
    public void logRequest(ContainerRequestContext ctx,
                           HttpServerRequest request) {
        // Log incoming request
        String method = ctx.getMethod();
        String path = ctx.getUriInfo().getPath();
        String clientIp = request.remoteAddress().host();
        Log.infof("→ %s %s from %s", method, path, clientIp);
    }

    @ServerResponseFilter
    public void logResponse(ContainerResponseContext ctx) {
        int status = ctx.getStatus();
        Log.infof("← Response: %d", status);
    }
}
```

### Custom Header Filter

```java
import org.jboss.resteasy.reactive.server.ServerResponseFilter;
import jakarta.ws.rs.container.ContainerResponseContext;

public class SecurityHeadersFilter {

    @ServerResponseFilter
    public void addSecurityHeaders(ContainerResponseContext response) {
        response.getHeaders().putSingle(
            "X-Content-Type-Options", "nosniff");
        response.getHeaders().putSingle(
            "X-Frame-Options", "DENY");
        response.getHeaders().putSingle(
            "Cache-Control", "no-store");
    }
}
```

## CORS Configuration

```properties
# application.properties
quarkus.http.cors=true
quarkus.http.cors.origins=http://localhost:3000,https://ecommerce.xdev.asia
quarkus.http.cors.methods=GET,POST,PUT,DELETE,OPTIONS
quarkus.http.cors.headers=Content-Type,Authorization
quarkus.http.cors.exposed-headers=X-Total-Count
quarkus.http.cors.access-control-max-age=24H
```

## Pagination Response Pattern

```java
import jakarta.ws.rs.core.Response;

@GET
public Response list(@QueryParam("page") @DefaultValue("0") int page,
                     @QueryParam("size") @DefaultValue("20") int size) {

    PanacheQuery<Product> query = Product.findAll();
    List<ProductDTO> items = query
            .page(Page.of(page, size))
            .list()
            .stream()
            .map(ProductDTO::from)
            .toList();

    long total = query.count();

    return Response.ok(items)
            .header("X-Total-Count", total)
            .header("X-Page", page)
            .header("X-Page-Size", size)
            .header("X-Total-Pages", (total + size - 1) / size)
            .build();
}
```

## OpenAPI & Swagger UI

```properties
# Swagger UI tự động có sẵn ở dev mode
# http://localhost:8080/q/swagger-ui

# Tùy chỉnh OpenAPI info
quarkus.smallrye-openapi.info-title=Product Service API
quarkus.smallrye-openapi.info-version=1.0.0
quarkus.smallrye-openapi.info-description=API quản lý sản phẩm E-Commerce
quarkus.smallrye-openapi.info-contact-name=xdev.asia
quarkus.smallrye-openapi.info-contact-url=https://xdev.asia

# Cho phép Swagger UI ở production (tùy chọn)
quarkus.swagger-ui.always-include=true
```

### OpenAPI Annotations

```java
import org.eclipse.microprofile.openapi.annotations.*;
import org.eclipse.microprofile.openapi.annotations.media.*;
import org.eclipse.microprofile.openapi.annotations.parameters.*;
import org.eclipse.microprofile.openapi.annotations.responses.*;

@Path("/api/v1/products")
@Tag(name = "Products", description = "Quản lý sản phẩm")
public class ProductResource {

    @GET
    @Operation(summary = "Danh sách sản phẩm",
               description = "Lấy danh sách sản phẩm với phân trang")
    @APIResponse(responseCode = "200",
                 description = "Thành công",
                 content = @Content(
                     mediaType = "application/json",
                     schema = @Schema(
                         implementation = ProductDTO.class)))
    public List<ProductDTO> list(
            @Parameter(description = "Trang (bắt đầu từ 0)")
            @QueryParam("page") @DefaultValue("0") int page,
            @Parameter(description = "Số lượng mỗi trang")
            @QueryParam("size") @DefaultValue("20") int size) {
        // ...
    }

    @POST
    @Operation(summary = "Tạo sản phẩm mới")
    @APIResponse(responseCode = "201",
                 description = "Sản phẩm được tạo thành công")
    @APIResponse(responseCode = "400",
                 description = "Dữ liệu không hợp lệ")
    public Response create(
            @RequestBody(required = true,
                content = @Content(schema = @Schema(
                    implementation = CreateProductRequest.class)))
            CreateProductRequest request) {
        // ...
    }
}
```

## API Versioning Strategies

### URI Versioning (khuyến nghị cho microservices)

```java
@Path("/api/v1/products")
public class ProductResourceV1 {
    @GET
    public List<ProductDTOv1> list() { /* ... */ }
}

@Path("/api/v2/products")
public class ProductResourceV2 {
    @GET
    public List<ProductDTOv2> list() { /* ... */ }
}
```

### Header Versioning

```java
@Path("/api/products")
public class ProductResource {

    @GET
    public Response list(@HeaderParam("X-API-Version") 
                         @DefaultValue("1") int version) {
        return switch (version) {
            case 2 -> Response.ok(listV2()).build();
            default -> Response.ok(listV1()).build();
        };
    }
}
```

## Bài tập

1. Tạo `ProductResource` với đầy đủ CRUD operations
2. Sử dụng Java Records cho Request/Response DTOs
3. Thêm pagination support với headers `X-Total-Count`, `X-Page`
4. Cấu hình CORS cho `http://localhost:3000`
5. Truy cập Swagger UI và test tất cả endpoints
6. Thêm OpenAPI annotations mô tả chi tiết cho mỗi endpoint

## Tổng kết

- **Quarkus REST** dùng Jakarta REST annotations (`@Path`, `@GET`, `@POST`...)
- **Java Records** phù hợp cho immutable DTOs
- **Server Filters** (`@ServerRequestFilter`, `@ServerResponseFilter`) cho cross-cutting concerns
- **CORS** cấu hình trong `application.properties`
- **OpenAPI + Swagger UI** tự động generate documentation
- **API Versioning** qua URI (`/api/v1/`, `/api/v2/`) đơn giản và rõ ràng

Bài tiếp theo: PostgreSQL & Hibernate ORM Panache — Data Layer hiệu quả.
