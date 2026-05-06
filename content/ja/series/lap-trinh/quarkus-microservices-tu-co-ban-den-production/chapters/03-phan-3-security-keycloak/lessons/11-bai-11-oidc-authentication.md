---
id: 019e2a10-a111-7a01-b001-f1a2b3c4d511
title: 'レッスン 11: OIDC ベアラー トークン認証'
slug: bai-11-oidc-bearer-token-authentication
description: >-
  Bearer
  Token、@Authenticated、@RolesAllowed、SecurityIdentity、サービス間のトークン伝播を使用した安全な REST
  API。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 10
section_title: 'パート 3: Keycloak によるセキュリティ'
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: 'Quarkus マイクロサービス: 基本から運用まで'
  slug: quarkus-microservices-tu-co-ban-den-production
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 プログラミング — レッスン 10</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: OIDC ベアラー トークン認証</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus マイクロサービス: 基本から運用まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: Keycloak によるセキュリティ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Keycloak の準備ができたら (レッスン 10)、次のステップは REST API を保護することです。 Quarkus OIDC 拡張機能は、JWT Bearer トークンを自動的に検証し、クレームを抽出し、それらをマッピングします。 `SecurityIdentity`。この記事では、電子商取引サービスに認証/認可を適用する方法について説明します。

## ベアラーのみのサービスを構成する

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

## SecurityIdentity — ユーザー情報を取得する

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

## カスタムロールマッピング

### レルムの役割 (デフォルト)

```properties
# Map Keycloak realm roles vào SecurityIdentity
quarkus.oidc.roles.role-claim-path=realm_access/roles
```

### リソースの役割 (クライアント固有)

```properties
# Map roles từ resource_access.ecommerce-api.roles
quarkus.oidc.roles.role-claim-path=resource_access/ecommerce-api/roles
```

### レルム + クライアント ロールの結合

```properties
# Gộp cả realm và client roles
quarkus.oidc.roles.role-claim-path=realm_access/roles,resource_access/ecommerce-api/roles
quarkus.oidc.roles.role-claim-separator=,
```

### カスタムのクレームベースの認可

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

## セキュリティアイデンティティの拡張

場合によっては、(JWT クレームに加えて) **データベースから** ロール/権限を SecurityIdentity に追加する必要があります。

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

リソースでの使用:

```java
@GET @Path("/admin/dashboard")
@RolesAllowed("dashboard_view")  // Role từ DB augmentor
public Response getDashboard() {
    String tenant = securityIdentity.getAttribute("tenant");
    return Response.ok(
        dashboardService.getData(tenant)).build();
}
```

## プログラムによるセキュリティチェック

注釈に加えて、プログラムでセキュリティをチェックできます。

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

## セキュリティ イベント

認証イベントをリッスンしてログを監査します。

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

## OIDC の CORS 構成

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

## サービス間のトークンの伝播

Order Service が Product Service を呼び出すときは、ユーザーの Bearer トークンを転送する必要があります。

### 依存関係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-oidc-token-propagation</artifactId>
</dependency>
```

### トークン伝播を使用する REST クライアント

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

ユーザーが Bearer トークンを使用して Order Service を呼び出すと、Order Service は Product Service → Product Service を呼び出すときにそのトークンを自動的に転送し、ユーザー/ロールで検証します。

### サービス間認証 (クライアント資格情報)

サービスが **ユーザー コンテキストなしで**別のサービスを呼び出す必要がある場合 (例: cron ジョブ、バックグラウンド タスク):

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

## HTTP セキュリティ ポリシー

注釈に加えて (`@RolesAllowed`）、セキュリティは次のように完全に設定できます。 `application.properties`:

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

> **優先順位**: Quarkus は、最も具体的なパーミッション (パス + メソッド) を最初に照合し、次にパスのみを照合します。もし `deny-all` put last → 一致しないパスはすべて拒否されます。

### アノテーションと HTTP ポリシーの比較

| | `@RolesAllowed` 注釈 | HTTP セキュリティ ポリシー |
|---|---|---|
| **宣言** | Java コードのメソッド/クラスについて |で `application.properties` |
| **利点** |タイプセーフ、コードロジックに近い |構成主導、ビルドなしで変更 |
| **欠点** |変更する場合はリビルドが必要 |どの役割とどの役割を演じるかを追跡するのは困難です |
| **適切** |きめ細かいメソッドごと |粗粒度のパスごとのパターン |

**推奨**: 両方を組み合わせます。広範なパターン (パブリック/拒否) には HTTP ポリシー、詳細なパターンにはアノテーションを使用します。

## セキュリティのテスト

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

## 演習

1. 製品 API の保護: GET パブリック、POST/PUT が必要 `seller`/`admin`、削除のみ `admin`
2. API 保護を注文する: 必要なすべてのエンドポイント `@Authenticated`、所有権チェックを追加
3.注入 `JsonWebToken` ユーザーIDとメールアドレスを取得するには
4. 注文サービス → 製品サービスからトークン伝播を設定します。
5.作成 `SecurityIdentityAugmentor` データベースから権限を追加する
6. プログラムによる認証を実装します。顧客は自分の注文を表示するだけです
7.作成 `SecurityEventLogger` 監査ログ用
8. 以下を使用してテスト ケースを作成します。 `@TestSecurity` 対象: パブリック、認可、禁止、所有権
9. で HTTP セキュリティ ポリシーを設定します。 `application.properties` すべて拒否のデフォルトの場合
10. フロントエンド アプリの CORS を構成します (localhost:3000 および運用ドメイン)

## 概要

- **ベアラーのみ** (`application-type=service`) — JWT のみを検証し、リダイレクト ログインは検証しません
- **`@PermitAll`** — パブリック、**`@Authenticated`** — 任意のログイン、**`@RolesAllowed`** — 特定の役割
- **`SecurityIdentity`** と **`JsonWebToken`** — トークンからユーザー情報を取得します
- **レルム + クライアント ロール** マッピング - 複数のソースからのロールを結合します
- **SecurityIdentity Augmentation** — データベースからセキュリティ コンテキストにロール/権限を追加します
- **プログラムによるセキュリティ** — 所有権チェック、コード内の複雑な承認ロジック
- **セキュリティ イベント** — `AuthenticationSuccessEvent`、 `AuthorizationFailureEvent` 監査用
- **CORS** — SPA フロントエンドがクロスオリジン API を呼び出すために必要です
- **トークンの伝播** (`@AccessToken`) - サービス間でユーザー トークンを転送する
- **クライアント認証情報** (`@OidcClientFilter`) — サービス間認証
- **HTTP セキュリティ ポリシー** — 注釈と組み合わせた構成主導の承認
- **`@TestSecurity`** — 単体テストでの模擬ユーザー/ロール

次の記事: 高度な RBAC と Keycloak 管理クライアント。
