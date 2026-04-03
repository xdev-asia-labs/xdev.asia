---
id: 019e2a10-a111-7a01-b001-f1a2b3c4d511
title: 'Bài 11: OIDC Bearer Token Authentication'
slug: bai-11-oidc-bearer-token-authentication
description: >-
  Bảo vệ REST API bằng Bearer Token, @Authenticated, @RolesAllowed,
  SecurityIdentity, token propagation giữa services.
duration_minutes: 90
is_free: false
video_url: null
sort_order: 10
section_title: "Phần 3: Security với Keycloak"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

## Giới thiệu

Sau khi Keycloak đã sẵn sàng (Bài 10), bước tiếp theo là bảo vệ REST API. Quarkus OIDC extension tự động verify JWT Bearer tokens, extract claims, và map vào `SecurityIdentity`. Bài này hướng dẫn cách áp dụng authentication/authorization cho E-Commerce services.

## Cấu hình Bearer-only Service

```properties
# application.properties
quarkus.oidc.auth-server-url=http://localhost:8180/realms/ecommerce
quarkus.oidc.client-id=ecommerce-api
quarkus.oidc.application-type=service

# Token verification
quarkus.oidc.token.issuer=any
# hoặc strict:
# quarkus.oidc.token.issuer=http://localhost:8180/realms/ecommerce

# JWKS cache (public key để verify JWT)
quarkus.oidc.jwks.cache-size=20
quarkus.oidc.jwks.cache-time-to-live=10M
```

## @Authenticated & @PermitAll

```java
import io.quarkus.security.Authenticated;
import jakarta.annotation.security.PermitAll;
import jakarta.annotation.security.RolesAllowed;

@Path("/api/v1/products")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProductResource {

    // Public — ai cũng truy cập được
    @GET
    @PermitAll
    public List<ProductListDTO> list() {
        return productService.listActive();
    }

    // Public — xem chi tiết sản phẩm
    @GET @Path("/{id}")
    @PermitAll
    public ProductDTO getById(@PathParam("id") Long id) {
        return productService.getById(id);
    }

    // Authenticated — cần login (bất kỳ role nào)
    @POST
    @Authenticated
    public Response create(@Valid CreateProductRequest request) {
        return Response.created(/* ... */).build();
    }

    // RolesAllowed — cần role cụ thể
    @PUT @Path("/{id}")
    @RolesAllowed({"seller", "admin"})
    public ProductDTO update(@PathParam("id") Long id,
                             @Valid UpdateProductRequest request) {
        return productService.update(id, request);
    }

    @DELETE @Path("/{id}")
    @RolesAllowed("admin")
    public Response delete(@PathParam("id") Long id) {
        productService.delete(id);
        return Response.noContent().build();
    }
}
```

## SecurityIdentity — Lấy thông tin User

```java
import io.quarkus.security.identity.SecurityIdentity;
import org.eclipse.microprofile.jwt.JsonWebToken;

@Path("/api/v1/orders")
@Authenticated
public class OrderResource {

    @Inject
    SecurityIdentity securityIdentity;

    @Inject
    JsonWebToken jwt;

    @GET @Path("/me")
    public Response getMyOrders() {
        // Lấy username
        String username = securityIdentity.getPrincipal().getName();

        // Lấy Keycloak user ID (sub claim)
        String userId = jwt.getSubject();

        // Lấy email từ JWT claim
        String email = jwt.getClaim("email");

        // Lấy full name
        String name = jwt.getClaim("name");

        // Check role
        boolean isAdmin = securityIdentity.hasRole("admin");

        // Lấy tất cả roles
        Set<String> roles = securityIdentity.getRoles();

        return Response.ok(
            orderService.listByCustomer(userId)).build();
    }

    @POST
    public Response createOrder(@Valid CreateOrderRequest request) {
        String customerId = jwt.getSubject();
        String email = jwt.getClaim("email");

        OrderDTO order = orderService.createOrder(
            customerId, email, request);
        return Response.created(/* ... */).entity(order).build();
    }
}
```

## Custom Roles Mapping

### Realm Roles (mặc định)

```properties
# Map Keycloak realm roles vào SecurityIdentity
quarkus.oidc.roles.role-claim-path=realm_access/roles
```

### Resource Roles (client-specific)

```properties
# Map roles từ resource_access.ecommerce-api.roles
quarkus.oidc.roles.role-claim-path=resource_access/ecommerce-api/roles
```

### Kết hợp Realm + Client Roles

```properties
# Gộp cả realm và client roles
quarkus.oidc.roles.role-claim-path=realm_access/roles,resource_access/ecommerce-api/roles
quarkus.oidc.roles.role-claim-separator=,
```

### Custom Claim-based Authorization

```java
import io.quarkus.security.identity.SecurityIdentity;
import jakarta.interceptor.AroundInvoke;
import jakarta.interceptor.InvocationContext;

// Custom annotation
@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@InterceptorBinding
public @interface RequirePermission {
    String value();
}

// Interceptor
@RequirePermission("")
@Priority(Interceptor.Priority.APPLICATION)
@Interceptor
public class PermissionInterceptor {

    @Inject
    JsonWebToken jwt;

    @AroundInvoke
    public Object check(InvocationContext ctx) throws Exception {
        RequirePermission perm = ctx.getMethod()
            .getAnnotation(RequirePermission.class);

        @SuppressWarnings("unchecked")
        Map<String, Object> resourceAccess =
            jwt.getClaim("resource_access");

        // Check permission in JWT claims
        // ...

        return ctx.proceed();
    }
}
```

## SecurityIdentity Augmentation

Đôi khi cần thêm roles/permissions **từ database** vào SecurityIdentity (ngoài JWT claims):

```java
import io.quarkus.security.identity.AuthenticationRequestContext;
import io.quarkus.security.identity.SecurityIdentity;
import io.quarkus.security.identity.SecurityIdentityAugmentor;
import io.quarkus.security.runtime.QuarkusSecurityIdentity;
import io.smallrye.mutiny.Uni;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

@ApplicationScoped
public class CustomSecurityAugmentor
        implements SecurityIdentityAugmentor {

    @Inject
    UserPermissionRepository permissionRepo;

    @Override
    public Uni<SecurityIdentity> augment(
            SecurityIdentity identity,
            AuthenticationRequestContext context) {

        if (identity.isAnonymous()) {
            return Uni.createFrom().item(identity);
        }

        // Lấy permissions từ database
        return context.runBlocking(() -> {
            String userId = identity.getPrincipal().getName();
            Set<String> dbPermissions =
                permissionRepo.findPermissionsByUser(userId);

            QuarkusSecurityIdentity.Builder builder =
                QuarkusSecurityIdentity.builder(identity);

            // Thêm roles từ DB
            dbPermissions.forEach(builder::addRole);

            // Thêm custom attribute
            builder.addAttribute("tenant",
                permissionRepo.findTenantByUser(userId));

            return builder.build();
        });
    }
}
```

Sử dụng trong Resource:

```java
@GET @Path("/admin/dashboard")
@RolesAllowed("dashboard_view")  // Role từ DB augmentor
public Response getDashboard() {
    String tenant = securityIdentity.getAttribute("tenant");
    return Response.ok(
        dashboardService.getData(tenant)).build();
}
```

## Programmatic Security Checks

Ngoài annotations, có thể check security programmatically:

```java
@Path("/api/v1/orders")
@Authenticated
public class OrderResource {

    @Inject SecurityIdentity identity;
    @Inject JsonWebToken jwt;

    @GET @Path("/{id}")
    public Response getOrder(@PathParam("id") Long id) {
        Order order = Order.findById(id);
        if (order == null) {
            throw new ResourceNotFoundException("Order", id);
        }

        // Ownership check: user chỉ xem được đơn của mình
        // Admin xem được tất cả
        String userId = jwt.getSubject();
        if (!identity.hasRole("admin")
                && !order.customerId.equals(userId)) {
            throw new ForbiddenException(
                "You can only view your own orders");
        }

        return Response.ok(OrderDTO.from(order)).build();
    }

    @PUT @Path("/{id}/cancel")
    public Response cancelOrder(@PathParam("id") Long id) {
        Order order = Order.findById(id);
        String userId = jwt.getSubject();

        // Customer chỉ cancel đơn PENDING
        // Support cancel đơn PENDING + CONFIRMED
        // Admin cancel bất kỳ
        if (identity.hasRole("admin")) {
            // Admin — cancel any
        } else if (identity.hasRole("support")) {
            if (!Set.of("PENDING", "CONFIRMED")
                    .contains(order.status)) {
                throw new BusinessException(400,
                    "Support can only cancel PENDING/CONFIRMED orders");
            }
        } else {
            // Customer — only own PENDING orders
            if (!order.customerId.equals(userId)) {
                throw new ForbiddenException("Not your order");
            }
            if (!"PENDING".equals(order.status)) {
                throw new BusinessException(400,
                    "Can only cancel PENDING orders");
            }
        }

        orderService.cancel(order);
        return Response.ok(OrderDTO.from(order)).build();
    }
}
```

## Security Events

Lắng nghe authentication events để audit logging:

```java
import io.quarkus.security.spi.runtime.AuthenticationFailureEvent;
import io.quarkus.security.spi.runtime.AuthenticationSuccessEvent;
import io.quarkus.security.spi.runtime.AuthorizationFailureEvent;
import jakarta.enterprise.event.Observes;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class SecurityEventLogger {

    void onAuthSuccess(
            @Observes AuthenticationSuccessEvent event) {
        Log.infof("AUTH_SUCCESS user=%s",
            event.getSecurityIdentity()
                .getPrincipal().getName());
    }

    void onAuthFailure(
            @Observes AuthenticationFailureEvent event) {
        Log.warnf("AUTH_FAILURE reason=%s",
            event.getAuthenticationFailure().getMessage());
    }

    void onAuthzFailure(
            @Observes AuthorizationFailureEvent event) {
        String user = event.getSecurityIdentity() != null
            ? event.getSecurityIdentity()
                .getPrincipal().getName()
            : "anonymous";
        Log.warnf("AUTHZ_FAILURE user=%s reason=%s",
            user,
            event.getAuthorizationFailure().getMessage());
    }
}
```

## CORS Configuration cho OIDC

```properties
# application.properties
quarkus.http.cors=true
quarkus.http.cors.origins=http://localhost:3000,https://ecommerce.xdev.asia
quarkus.http.cors.headers=Accept,Authorization,Content-Type,X-Correlation-ID
quarkus.http.cors.methods=GET,POST,PUT,DELETE,PATCH,OPTIONS
quarkus.http.cors.exposed-headers=X-Total-Count,X-Correlation-ID
quarkus.http.cors.access-control-max-age=24H
quarkus.http.cors.access-control-allow-credentials=true
```

## Token Propagation giữa Services

Khi Order Service gọi Product Service, cần forward Bearer token của user:

### Dependency

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-oidc-token-propagation</artifactId>
</dependency>
```

### REST Client với Token Propagation

```java
import io.quarkus.oidc.token.propagation.AccessToken;

@RegisterRestClient(configKey = "product-service")
@Path("/api/v1/products")
@AccessToken  // Tự động forward Bearer token
public interface ProductServiceClient {

    @GET @Path("/{id}")
    ProductInfo getById(@PathParam("id") Long id);

    @POST @Path("/{id}/reserve-stock")
    void reserveStock(@PathParam("id") Long id,
                      @QueryParam("quantity") int quantity);
}
```

```properties
# application.properties
quarkus.rest-client.product-service.url=http://localhost:8081
```

Khi user gọi Order Service với Bearer token, Order Service tự động forward token đó khi gọi Product Service → Product Service verify cùng user/role.

### Service-to-Service Authentication (Client Credentials)

Khi service cần gọi service khác **không có user context** (ví dụ: cron job, background task):

```properties
# Tạo client riêng cho service-to-service
quarkus.oidc-client.auth-server-url=http://localhost:8180/realms/ecommerce
quarkus.oidc-client.client-id=order-service-internal
quarkus.oidc-client.credentials.secret=${ORDER_SERVICE_SECRET}
quarkus.oidc-client.grant.type=client
```

```java
import io.quarkus.oidc.client.filter.OidcClientFilter;

@RegisterRestClient(configKey = "product-service")
@Path("/api/v1/products")
@OidcClientFilter  // Dùng client credentials grant
public interface ProductServiceInternalClient {

    @GET @Path("/internal/stock-report")
    List<StockReport> getStockReport();
}
```

## HTTP Security Policy

Ngoài annotations (`@RolesAllowed`), có thể cấu hình security hoàn toàn bằng `application.properties`:

```properties
# ═══════════════════════════════════════════
# Public endpoints — không cần token
# ═══════════════════════════════════════════
quarkus.http.auth.permission.public-products.paths=/api/v1/products,/api/v1/products/*
quarkus.http.auth.permission.public-products.methods=GET
quarkus.http.auth.permission.public-products.policy=permit

quarkus.http.auth.permission.health.paths=/q/health/*,/q/metrics
quarkus.http.auth.permission.health.policy=permit

# ═══════════════════════════════════════════
# Authenticated endpoints — cần login, bất kỳ role
# ═══════════════════════════════════════════
quarkus.http.auth.permission.authenticated-orders.paths=/api/v1/orders/*
quarkus.http.auth.permission.authenticated-orders.policy=authenticated

quarkus.http.auth.permission.authenticated-cart.paths=/api/v1/cart/*
quarkus.http.auth.permission.authenticated-cart.policy=authenticated

# ═══════════════════════════════════════════
# Role-based endpoints
# ═══════════════════════════════════════════
quarkus.http.auth.permission.seller-products.paths=/api/v1/products
quarkus.http.auth.permission.seller-products.methods=POST,PUT
quarkus.http.auth.permission.seller-products.policy=seller-policy

quarkus.http.auth.policy.seller-policy.roles-allowed=seller,admin

quarkus.http.auth.permission.admin-only.paths=/api/v1/admin/*
quarkus.http.auth.permission.admin-only.policy=admin-policy

quarkus.http.auth.policy.admin-policy.roles-allowed=admin

# ═══════════════════════════════════════════
# Deny all — default cho mọi path chưa khai báo
# ═══════════════════════════════════════════
quarkus.http.auth.permission.deny-all.paths=/*
quarkus.http.auth.permission.deny-all.policy=deny
```

> **Thứ tự ưu tiên**: Quarkus match permission cụ thể nhất trước (path + method), sau đó đến path-only. Nếu `deny-all` đặt cuối → mọi path chưa match sẽ bị deny.

### So sánh Annotation vs HTTP Policy

| | `@RolesAllowed` annotation | HTTP Security Policy |
|---|---|---|
| **Khai báo** | Trên method/class trong Java code | Trong `application.properties` |
| **Ưu điểm** | Type-safe, gần code logic | Config-driven, thay đổi không cần build |
| **Nhược điểm** | Cần rebuild khi thay đổi | Khó track path nào cần role gì |
| **Phù hợp** | Fine-grained per-method | Coarse-grained per-path pattern |

**Khuyến nghị**: Kết hợp cả hai — HTTP Policy cho broad patterns (public/deny), annotations cho fine-grained.

## Testing Security

```java
import io.quarkus.test.junit.QuarkusTest;
import io.quarkus.test.security.TestSecurity;
import io.quarkus.test.security.oidc.Claim;
import io.quarkus.test.security.oidc.OidcSecurity;

@QuarkusTest
class ProductResourceSecurityTest {

    @Test
    void testPublicEndpoint() {
        given()
            .when().get("/api/v1/products")
            .then().statusCode(200);
    }

    @Test
    void testUnauthorized() {
        given()
            .when().post("/api/v1/products")
            .then().statusCode(401);
    }

    @Test
    @TestSecurity(user = "seller1", roles = "seller")
    @OidcSecurity(claims = {
        @Claim(key = "email", value = "seller1@xdev.asia")
    })
    void testCreateProductAsSeller() {
        given()
            .contentType("application/json")
            .body("""
                {"name": "Test Product",
                 "price": 100000, "stockQuantity": 10,
                 "categoryId": 1}
                """)
            .when().post("/api/v1/products")
            .then().statusCode(201);
    }

    @Test
    @TestSecurity(user = "customer1", roles = "customer")
    void testCreateProductAsCustomer_Forbidden() {
        given()
            .contentType("application/json")
            .body("{}")
            .when().post("/api/v1/products")
            .then().statusCode(403);
    }
}
```

## Bài tập

1. Bảo vệ Product API: GET public, POST/PUT cần `seller`/`admin`, DELETE chỉ `admin`
2. Bảo vệ Order API: tất cả endpoints cần `@Authenticated`, thêm ownership check
3. Inject `JsonWebToken` để lấy user ID và email
4. Cấu hình Token Propagation từ Order Service → Product Service
5. Tạo `SecurityIdentityAugmentor` thêm permissions từ database
6. Implement programmatic authorization: customer chỉ xem đơn của mình
7. Tạo `SecurityEventLogger` cho audit logging
8. Tạo test cases với `@TestSecurity` cho: public, authorized, forbidden, ownership
9. Thiết lập HTTP Security Policy trong `application.properties` với deny-all default
10. Cấu hình CORS cho frontend app (localhost:3000 và production domain)

## Tổng kết

- **Bearer-only** (`application-type=service`) — chỉ verify JWT, không redirect login
- **`@PermitAll`** — public, **`@Authenticated`** — login bất kỳ, **`@RolesAllowed`** — role cụ thể
- **`SecurityIdentity`** và **`JsonWebToken`** — lấy user info từ token
- **Realm + Client Roles** mapping — gộp roles từ nhiều nguồn
- **SecurityIdentity Augmentation** — thêm roles/permissions từ database vào security context
- **Programmatic Security** — ownership checks, complex authorization logic trong code
- **Security Events** — `AuthenticationSuccessEvent`, `AuthorizationFailureEvent` cho audit
- **CORS** — bắt buộc cho SPA frontend gọi API cross-origin
- **Token Propagation** (`@AccessToken`) — forward user token giữa services
- **Client Credentials** (`@OidcClientFilter`) — service-to-service auth
- **HTTP Security Policy** — config-driven authorization, kết hợp với annotations
- **`@TestSecurity`** — mock user/roles trong unit tests

Bài tiếp theo: RBAC nâng cao & Keycloak Admin Client.
