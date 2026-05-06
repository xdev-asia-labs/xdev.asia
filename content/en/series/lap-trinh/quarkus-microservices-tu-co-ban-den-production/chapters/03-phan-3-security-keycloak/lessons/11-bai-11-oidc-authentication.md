---
id: 019e2a10-a111-7a01-b001-f1a2b3c4d511
title: 'Lesson 11: OIDC Bearer Token Authentication'
slug: bai-11-oidc-bearer-token-authentication
description: >-
  Secure REST API with Bearer Token, @Authenticated, @RolesAllowed,
  SecurityIdentity, token propagation between services.
duration_minutes: 90
is_free: false
video_url: null
sort_order: 10
section_title: 'Part 3: Security with Keycloak'
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: 'Quarkus Microservices: From Basics to Production'
  slug: quarkus-microservices-tu-co-ban-den-production
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2100" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2100)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1034" cy="172" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="968" cy="46" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="902" cy="180" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="836" cy="54" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="770" cy="188" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="132" x2="1100" y2="212" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="162" x2="1050" y2="232" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1055.38268590218,218.5 1055.38268590218,245.5 1032,259 1008.6173140978201,245.5 1008.6173140978201,218.5 1032,205" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Programming — Lesson 10</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: OIDC Bearer Token Authentication</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus Microservices: From Basics to Production</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Security with Keycloak</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Once Keycloak is ready (Lesson 10), the next step is to secure the REST API. Quarkus OIDC extension automatically verifies JWT Bearer tokens, extracts claims, and maps them `SecurityIdentity`. This article guides how to apply authentication/authorization to E-Commerce services.

## Configure Bearer-only Service

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

## SecurityIdentity — Get User information

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

### Realm Roles (default)

```properties
# Map Keycloak realm roles vào SecurityIdentity
quarkus.oidc.roles.role-claim-path=realm_access/roles
```

### Resource Roles (client-specific)

```properties
# Map roles từ resource_access.ecommerce-api.roles
quarkus.oidc.roles.role-claim-path=resource_access/ecommerce-api/roles
```

### Combine Realm + Client Roles

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

Sometimes it is necessary to add roles/permissions **from the database** to SecurityIdentity (in addition to JWT claims):

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

Use in Resource:

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

In addition to annotations, you can check security programmatically:

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

Listen for authentication events to audit logging:

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

## CORS Configuration for OIDC

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

## Token Propagation between Services

When Order Service calls Product Service, it is necessary to forward the user's Bearer token:

### Dependency

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-oidc-token-propagation</artifactId>
</dependency>
```

### REST Client with Token Propagation

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

When a user calls Order Service with a Bearer token, Order Service automatically forwards that token when calling Product Service → Product Service verify with user/role.

### Service-to-Service Authentication (Client Credentials)

When the service needs to call another service **without user context** (eg: cron job, background task):

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

In addition to annotations (`@RolesAllowed`), security can be configured completely with `application.properties`:

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

> **Order of priority**: Quarkus matches the most specific permission first (path + method), then path-only. If `deny-all` put last → all unmatched paths will be denied.

### Compare Annotation vs HTTP Policy

| | `@RolesAllowed` annotation | HTTP Security Policy |
|---|---|---|
| **Declaration** | On method/class in Java code | In `application.properties` |
| **Advantages** | Type-safe, close to code logic | Config-driven, changes without build |
| **Disadvantages** | Need to rebuild when changing | It's difficult to track which role and which role to play |
| **Suitable** | Fine-grained per-method | Coarse-grained per-path pattern |

**Recommended**: Combine both — HTTP Policy for broad patterns (public/deny), annotations for fine-grained.

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

## Exercises

1. Protect Product API: GET public, POST/PUT required `seller`/`admin`, DELETE only `admin`
2. Order API protection: all necessary endpoints `@Authenticated`, add ownership check
3. Inject `JsonWebToken` to get user ID and email
4. Configure Token Propagation from Order Service → Product Service
5. Create `SecurityIdentityAugmentor` add permissions from database
6. Implement programmatic authorization: customer only views his/her order
7. Create `SecurityEventLogger` for audit logging
8. Create test cases with `@TestSecurity` for: public, authorized, forbidden, ownership
9. Set up HTTP Security Policy in `application.properties` with deny-all default
10. Configure CORS for frontend app (localhost:3000 and production domain)

## Summary

- **Bearer-only** (`application-type=service`) — only verify JWT, not redirect login
- **`@PermitAll`** — public, **`@Authenticated`** — any login, **`@RolesAllowed`** — specific role
- **`SecurityIdentity`** and **`JsonWebToken`** — get user info from token
- **Realm + Client Roles** mapping — combine roles from multiple sources
- **SecurityIdentity Augmentation** — adds roles/permissions from database to security context
- **Programmatic Security** — ownership checks, complex authorization logic in code
- **Security Events** — `AuthenticationSuccessEvent`, `AuthorizationFailureEvent` for audit
- **CORS** — required for SPA frontend to call cross-origin API
- **Token Propagation** (`@AccessToken`) — forward user token between services
- **Client Credentials** (`@OidcClientFilter`) — service-to-service auth
- **HTTP Security Policy** — config-driven authorization, combined with annotations
- **`@TestSecurity`** — mock users/roles in unit tests

Next article: Advanced RBAC & Keycloak Admin Client.
