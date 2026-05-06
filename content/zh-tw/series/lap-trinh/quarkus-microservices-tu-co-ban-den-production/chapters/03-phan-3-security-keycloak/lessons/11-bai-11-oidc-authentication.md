---
id: 019e2a10-a111-7a01-b001-f1a2b3c4d511
title: 第 11 課：OIDC 承載令牌身份驗證
slug: bai-11-oidc-bearer-token-authentication
description: >-
  使用承載令牌、@Authenticated、@RolesAllowed、SecurityIdentity、服務之間的令牌傳播來保護 REST API
  的安全。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 10
section_title: 第 3 部分：Keycloak 的安全性
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: Quarkus 微服務：從基礎知識到生產
  slug: quarkus-microservices-tu-co-ban-den-production
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 程式設計 — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：OIDC 承載令牌身份驗證</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus 微服務：從基礎知識到生產</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：Keycloak 的安全性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

一旦 Keycloak 準備就緒（第 10 課），下一步就是保護 REST API 的安全。 Quarkus OIDC 擴充功能自動驗證 JWT Bearer 令牌、提取宣告並繪製它們 `SecurityIdentity`。本文指導如何將身分驗證/授權應用於電子商務服務。

## 配置僅承載服務

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

## SecurityIdentity — 取得使用者資訊

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

## 自訂角色映射

### 領域角色（預設）

```properties
# Map Keycloak realm roles vào SecurityIdentity
quarkus.oidc.roles.role-claim-path=realm_access/roles
```

### 資源角色（特定於客戶端）

```properties
# Map roles từ resource_access.ecommerce-api.roles
quarkus.oidc.roles.role-claim-path=resource_access/ecommerce-api/roles
```

### 結合領域 + 客戶端角色

```properties
# Gộp cả realm và client roles
quarkus.oidc.roles.role-claim-path=realm_access/roles,resource_access/ecommerce-api/roles
quarkus.oidc.roles.role-claim-separator=,
```

### 自訂基於聲明的授權

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

## 安全性身分增強

有時需要將角色/權限**從資料庫**新增至SecurityIdentity（除了JWT聲明之外）：

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

在資源中的使用：

```java
@GET @Path("/admin/dashboard")
@RolesAllowed("dashboard_view")  // Role từ DB augmentor
public Response getDashboard() {
    String tenant = securityIdentity.getAttribute("tenant");
    return Response.ok(
        dashboardService.getData(tenant)).build();
}
```

## 程式化安全檢查

除了註釋之外，您還可以透過程式檢查安全性：

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

## 安全事件

監聽身分驗證事件以審核日誌記錄：

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

## OIDC 的 CORS 配置

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

## 服務之間的令牌傳播

訂單服務呼叫產品服務時，需要轉發使用者的Bearer token：

### 依賴關係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-oidc-token-propagation</artifactId>
</dependency>
```

### 帶令牌傳播的 REST 用戶端

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

當使用者使用承載令牌呼叫訂單服務時，訂單服務會在呼叫產品服務→產品服務驗證使用者/角色時會自動轉送該令牌。

### 服務到服務驗證（客戶端憑證）

當服務需要在**沒有使用者情境**的情況下呼叫另一個服務時（例如：cron 作業、後台任務）：

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

## HTTP 安全性原則

除了註釋之外（`@RolesAllowed`），安全性可以完全配置為 `application.properties`：

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

> **優先順序**：Quarkus 首先符合最具體的權限（路徑 + 方法），然後僅符合路徑。如果 `deny-all` 放在最後 → 所有不符的路徑都將被拒絕。

### 比較註解與 HTTP 策略

| | `@RolesAllowed` 註釋| HTTP 安全性策略 |
|---|---|---|
| **宣告** |關於Java程式碼中的方法/類別|在 `application.properties` |
| **優點** |類型安全，接近程式碼邏輯 |配置驅動，無需建置即可更改 |
| **缺點** |改變時需要重建 |很難追蹤哪個角色、扮演哪個角色 |
| **適合** |每個方法的細粒度 |粗粒度的每路徑模式 |

**推薦**：結合兩者 — HTTP 策略用於廣泛模式（公開/拒絕），註釋用於細粒度。

## 測試安全性

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

## 練習

1. 保護產品API：GET公開，需POST/PUT `seller`/`admin`, 僅刪除 `admin`
2.訂單API保護：所有必要的端點 `@Authenticated`, 新增所有權檢查
3. 注射 `JsonWebToken` 取得使用者 ID 和電子郵件
4. 從訂單服務 → 產品服務配置令牌傳播
5. 創建 `SecurityIdentityAugmentor` 從資料庫新增權限
6. 實施程序化授權：客戶只能查看他/她的訂單
7. 創建 `SecurityEventLogger` 用於審計日誌記錄
8. 建立測試用例 `@TestSecurity` for：公共、授權、禁止、所有權
9. 在中設定 HTTP 安全性原則 `application.properties` 預設拒絕所有
10.為前端應用程式設定CORS（localhost：3000和生產域）

## 總結

- **僅限承載** (`application-type=service`) — 只驗證 JWT，不重定向登入
- **`@PermitAll`** — 公共，**`@Authenticated`** — 任何登錄，**`@RolesAllowed`**——具體角色
- **`SecurityIdentity`** 和 **`JsonWebToken`** — 從令牌中獲取使用者信息
- **領域 + 客戶端角色**映射 — 組合來自多個來源的角色
- **SecurityIdentity Augmentation** — 將資料庫中的角色/權限新增至安全上下文
- **程式化安全性** — 所有權檢查、程式碼中的複雜授權邏輯
- **安全事件** — `AuthenticationSuccessEvent`, `AuthorizationFailureEvent` 用於審計
- **CORS** — SPA 前端呼叫跨來源 API 所需
- **令牌傳播** (`@AccessToken`) — 在服務之間轉發使用者令牌
- **客戶憑證** (`@OidcClientFilter`) — 服務到服務的身份驗證
- **HTTP 安全性原則** — 設定驅動的授權，結合註釋
- **`@TestSecurity`** — 單元測試中的模擬使用者/角色

下一篇文章：進階 RBAC 和 Keycloak 管理客戶端。
