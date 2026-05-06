---
id: 019e2a10-a112-7a01-b001-f1a2b3c4d512
title: 第 12 課：進階 RBAC 和 Keycloak 管理客戶端
slug: bai-12-rbac-nang-cao-keycloak-admin-client
description: 基於角色的進階存取控制、細粒度授權、Keycloak 管理客戶端 API 可從後端管理使用者/角色。
duration_minutes: 100
is_free: false
video_url: null
sort_order: 11
section_title: 第 3 部分：Keycloak 的安全性
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: Quarkus 微服務：從基礎知識到生產
  slug: quarkus-microservices-tu-co-ban-den-production
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-621" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-621)"/>

  <!-- Decorations -->
  <g>
    <circle cx="618" cy="284" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="636" cy="282" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="654" cy="280" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="672" cy="278" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="690" cy="276" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="164" x2="1100" y2="244" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="194" x2="1050" y2="264" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.7749907475932,194.5 1047.7749907475932,233.5 1014,253 980.2250092524068,233.5 980.2250092524068,194.5 1014,175" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 程式設計 — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：進階 RBAC 和 Keycloak 管理</tspan>
      <tspan x="60" dy="42">客戶</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus 微服務：從基礎知識到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：Keycloak 的安全性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

第 11 課涵蓋基本身份驗證 `@Authenticated` 和 `@RolesAllowed`。本文深入探討了**細粒度 RBAC**（資源級權限），區分**領域角色、客戶端角色與複合角色**、**基於群組的存取控制**、**Keycloak 管理客戶端**以程式設計方式管理使用者/角色、**多租用戶**模式以及用於生產的**審核日誌記錄**。

## 去中心化系統概述

```
┌─────────────────────────────────────────────────────────┐
│                    Keycloak Realm                       │
│                                                         │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │ Realm Roles │  │ Client Roles │  │    Groups      │  │
│  │             │  │              │  │                │  │
│  │ • admin     │  │ product-svc: │  │ /sellers       │  │
│  │ • customer  │  │  • manage    │  │   /premium     │  │
│  │ • seller    │  │  • view      │  │ /customers     │  │
│  │ • moderator │  │              │  │   /vip         │  │
│  │             │  │ order-svc:   │  │ /staff         │  │
│  │             │  │  • process   │  │   /warehouse   │  │
│  │             │  │  • refund    │  │   /support     │  │
│  └──────┬──────┘  └──────┬───────┘  └───────┬────────┘  │
│         │                │                  │           │
│         └────────────────┼──────────────────┘           │
│                          ▼                              │
│                   ┌─────────────┐                       │
│                   │    User     │                       │
│                   │  JWT Token  │                       │
│                   └─────────────┘                       │
└─────────────────────────────────────────────────────────┘
```

## 領域角色 vs 客戶端角色 vs 複合角色

### 領域角色

領域範圍 - 用於**跨服務**權限：

```
Realm Roles:
├── admin          → Full access mọi service
├── customer       → Mua hàng, xem đơn
├── seller         → Quản lý sản phẩm
└── moderator      → Review, moderate content
```

### 客戶端角色

每個用戶端（服務）的範圍 - 用於**特定於服務的**權限：

```
Client: product-service
├── product:create    → Tạo sản phẩm
├── product:update    → Sửa sản phẩm
├── product:delete    → Xoá sản phẩm
├── product:view      → Xem sản phẩm
└── product:manage    → Full CRUD

Client: order-service
├── order:create      → Tạo đơn hàng
├── order:view        → Xem đơn hàng
├── order:process     → Xử lý đơn (confirm, ship)
├── order:cancel      → Huỷ đơn
└── order:refund      → Hoàn tiền
```

### 複合角色

將多個角色分組為 1 個父角色：

```
Composite Role: "seller"
├── product:create
├── product:update
├── product:view
├── order:view
└── order:process

Composite Role: "admin"
├── seller (inherits all seller roles)
├── product:delete
├── order:cancel
├── order:refund
└── user:manage
```

### 領域 JSON 中的配置

```json
{
  "realm": "ecommerce",
  "roles": {
    "realm": [
      {
        "name": "admin",
        "composite": true,
        "composites": {
          "realm": ["seller", "moderator"],
          "client": {
            "product-service": ["product:manage", "product:delete"],
            "order-service": ["order:process", "order:refund", "order:cancel"]
          }
        }
      },
      {
        "name": "seller",
        "composite": true,
        "composites": {
          "client": {
            "product-service": ["product:create", "product:update", "product:view"],
            "order-service": ["order:view", "order:process"]
          }
        }
      },
      { "name": "customer" },
      { "name": "moderator" }
    ],
    "client": {
      "product-service": [
        { "name": "product:create" },
        { "name": "product:update" },
        { "name": "product:delete" },
        { "name": "product:view" },
        { "name": "product:manage" }
      ],
      "order-service": [
        { "name": "order:create" },
        { "name": "order:view" },
        { "name": "order:process" },
        { "name": "order:cancel" },
        { "name": "order:refund" }
      ]
    }
  }
}
```

### 在 Quarkus 中使用客戶端角色

至 `@RolesAllowed` 接收客戶端角色，需要將聲明映射到令牌中：

```properties
# Map client roles vào SecurityIdentity
quarkus.oidc.roles.role-claim-path=\
  resource_access/product-service/roles

# Hoặc dùng realm_access cho realm roles (default)
# quarkus.oidc.roles.role-claim-path=realm_access/roles
```

**JWT 令牌結構**：

```json
{
  "sub": "user-123",
  "realm_access": {
    "roles": ["seller", "customer"]
  },
  "resource_access": {
    "product-service": {
      "roles": ["product:create", "product:update", "product:view"]
    },
    "order-service": {
      "roles": ["order:view", "order:process"]
    }
  }
}
```

```java
@Path("/api/v1/products")
public class ProductResource {

    // Realm role
    @POST
    @RolesAllowed("seller")
    public Response createProduct(CreateProductRequest req) {
        // ...
    }

    // Client role (fine-grained)
    @DELETE @Path("/{id}")
    @RolesAllowed("product:delete")
    public Response deleteProduct(@PathParam("id") Long id) {
        // Chỉ admin có product:delete (qua composite role)
    }

    // Nhiều roles (OR logic — bất kỳ role nào match)
    @GET @Path("/{id}")
    @RolesAllowed({"product:view", "customer", "seller"})
    public ProductDTO getProduct(@PathParam("id") Long id) {
        // ...
    }
}
```

## 基於群組的存取控制

### 在 Keycloak 中配置群組

```json
{
  "groups": [
    {
      "name": "sellers",
      "subGroups": [
        {
          "name": "premium-sellers",
          "realmRoles": ["seller"],
          "clientRoles": {
            "product-service": ["product:manage"]
          },
          "attributes": {
            "max_products": ["1000"],
            "commission_rate": ["0.05"]
          }
        },
        {
          "name": "basic-sellers",
          "realmRoles": ["seller"],
          "clientRoles": {
            "product-service": ["product:create", "product:view"]
          },
          "attributes": {
            "max_products": ["50"],
            "commission_rate": ["0.10"]
          }
        }
      ]
    },
    {
      "name": "staff",
      "subGroups": [
        {
          "name": "warehouse",
          "realmRoles": [],
          "clientRoles": {
            "order-service": ["order:process"]
          }
        },
        {
          "name": "support",
          "realmRoles": ["moderator"],
          "clientRoles": {
            "order-service": ["order:view", "order:cancel", "order:refund"]
          }
        }
      ]
    }
  ]
}
```

### 將群組對應到令牌中

在 Keycloak 管理控制台 → 用戶端範圍 → 建立映射器中：

|設定|價值|
|--------|--------|
|映射器類型 |團體會員 |
|令牌聲明名稱 |團體 |
|完整的團體路徑|開 |
| 新增至 ID 令牌 |開 |
|新增至存取令牌 |開 |

**JWT 令牌將包含**：

```json
{
  "groups": ["/sellers/premium-sellers"],
  "realm_access": { "roles": ["seller"] },
  "resource_access": {
    "product-service": { "roles": ["product:manage"] }
  }
}
```

### 在 Quarkus 中使用群組

```java
@ApplicationScoped
public class GroupAuthorizationService {

    @Inject
    JsonWebToken jwt;

    /**
     * Check user thuộc group cụ thể
     */
    public boolean belongsToGroup(String groupPath) {
        Set<String> groups = jwt.getClaim("groups");
        if (groups == null) return false;
        return groups.stream()
            .anyMatch(g -> g.equals(groupPath)
                || g.startsWith(groupPath + "/"));
    }

    /**
     * Lấy group attribute (VD: max_products, commission_rate)
     */
    public Optional<String> getGroupAttribute(String attrName) {
        // Group attributes thường map qua custom claim
        Object value = jwt.getClaim(attrName);
        return Optional.ofNullable(value)
            .map(Object::toString);
    }

    /**
     * Kiểm tra seller tier
     */
    public SellerTier getSellerTier() {
        Set<String> groups = jwt.getClaim("groups");
        if (groups == null) return SellerTier.NONE;

        if (groups.contains("/sellers/premium-sellers")) {
            return SellerTier.PREMIUM;
        } else if (groups.contains("/sellers/basic-sellers")) {
            return SellerTier.BASIC;
        }
        return SellerTier.NONE;
    }

    public enum SellerTier { NONE, BASIC, PREMIUM }
}

@Path("/api/v1/products")
@Authenticated
public class ProductResource {

    @Inject
    GroupAuthorizationService groupAuth;

    @Inject
    JsonWebToken jwt;

    @POST
    @RolesAllowed("seller")
    public Response createProduct(CreateProductRequest req) {
        // Kiểm tra seller quota
        GroupAuthorizationService.SellerTier tier =
            groupAuth.getSellerTier();

        int maxProducts = switch (tier) {
            case PREMIUM -> 1000;
            case BASIC -> 50;
            default -> 0;
        };

        long currentCount = Product.count(
            "sellerId", jwt.getSubject());
        if (currentCount >= maxProducts) {
            throw new BusinessException(403,
                "Bạn đã đạt giới hạn " + maxProducts
                + " sản phẩm. Nâng cấp lên Premium"
                + " để đăng thêm.");
        }

        // Proceed with creation...
        return Response.status(201).build();
    }
}
```

## 細粒度授權－資源擁有者檢查

### 方法1：內聯檢查（簡單）

```java
@Path("/api/v1/orders")
@Authenticated
public class OrderResource {

    @Inject
    JsonWebToken jwt;

    @Inject
    SecurityIdentity identity;

    @Inject
    OrderRepository orderRepo;

    @Inject
    SecurityAuditService auditService;

    @GET @Path("/{id}")
    public OrderDTO getOrder(@PathParam("id") Long id) {
        Order order = orderRepo.findByIdOptional(id)
            .orElseThrow(() ->
                new ResourceNotFoundException("Order", id));

        // Resource owner check
        String currentUserId = jwt.getSubject();
        boolean isOwner =
            order.customerId.equals(currentUserId);
        boolean isAdmin = identity.hasRole("admin");
        boolean isSupport = identity.hasRole("moderator");

        if (!isOwner && !isAdmin && !isSupport) {
            auditService.logAccess("DENIED",
                "Order", id.toString());
            throw new ForbiddenException(
                "Bạn không có quyền xem đơn hàng này");
        }

        auditService.logAccess("VIEW", "Order", id.toString());

        // Support chỉ thấy thông tin giới hạn
        if (isSupport && !isOwner) {
            return OrderDTO.redacted(order);
        }

        return OrderDTO.from(order);
    }

    @PUT @Path("/{id}/cancel")
    public OrderDTO cancelOrder(@PathParam("id") Long id) {
        Order order = orderRepo.findByIdOptional(id)
            .orElseThrow(() ->
                new ResourceNotFoundException("Order", id));

        String currentUserId = jwt.getSubject();
        boolean isOwner =
            order.customerId.equals(currentUserId);
        boolean hasRefundRole =
            identity.hasRole("order:cancel");

        // Customer chỉ cancel đơn CREATED/CONFIRMED
        if (isOwner) {
            if (!Set.of("CREATED", "CONFIRMED")
                    .contains(order.status)) {
                throw new BusinessException(400,
                    "Chỉ huỷ được đơn ở trạng thái"
                    + " CREATED hoặc CONFIRMED");
            }
        } else if (!hasRefundRole) {
            throw new ForbiddenException(
                "Bạn không có quyền huỷ đơn hàng này");
        }

        order.cancel(currentUserId);
        auditService.logAccess("CANCEL",
            "Order", id.toString());
        return OrderDTO.from(order);
    }
}
```

### 方法2：自訂 `@ResourceOwner` 註釋（重用）

```java
// === Annotation ===
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@InterceptorBinding
public @interface RequiresOwnership {
    // Sử dụng @Nonbinding cho các attribute
    // để CDI không dùng chúng làm qualifier

    @Nonbinding
    String paramName() default "id";

    @Nonbinding
    String resourceType() default "";

    @Nonbinding
    String[] bypassRoles() default {"admin"};
}

// === Ownership Resolver Interface ===
public interface OwnershipResolver<ID> {
    /**
     * Trả về userId sở hữu resource.
     * Null nếu resource không tồn tại.
     */
    String resolveOwner(String resourceType, ID resourceId);
}

// === Concrete Resolver ===
@ApplicationScoped
public class OrderOwnershipResolver
        implements OwnershipResolver<Long> {

    @Inject
    OrderRepository orderRepo;

    @Override
    public String resolveOwner(String resourceType,
                               Long resourceId) {
        return orderRepo.findByIdOptional(resourceId)
            .map(o -> o.customerId)
            .orElse(null);
    }
}

@ApplicationScoped
public class ProductOwnershipResolver
        implements OwnershipResolver<Long> {

    @Inject
    ProductRepository productRepo;

    @Override
    public String resolveOwner(String resourceType,
                               Long resourceId) {
        return productRepo.findByIdOptional(resourceId)
            .map(p -> p.sellerId)
            .orElse(null);
    }
}

// === Interceptor ===
@RequiresOwnership
@Interceptor
@Priority(Interceptor.Priority.APPLICATION + 10)
public class OwnershipInterceptor {

    private static final Logger LOG =
        Logger.getLogger(OwnershipInterceptor.class);

    @Inject
    JsonWebToken jwt;

    @Inject
    SecurityIdentity identity;

    @Inject
    SecurityAuditService auditService;

    @Inject
    Instance<OwnershipResolver<?>> resolvers;

    @AroundInvoke
    public Object checkOwnership(InvocationContext ctx)
            throws Exception {

        RequiresOwnership annotation = ctx.getMethod()
            .getAnnotation(RequiresOwnership.class);

        // 1. Check bypass roles (admin, etc.)
        for (String role : annotation.bypassRoles()) {
            if (identity.hasRole(role)) {
                LOG.debugf("Bypass ownership check:"
                    + " user=%s has role=%s",
                    jwt.getSubject(), role);
                return ctx.proceed();
            }
        }

        // 2. Extract resource ID từ method params
        Object resourceId =
            extractParam(ctx, annotation.paramName());
        if (resourceId == null) {
            throw new IllegalStateException(
                "Cannot find @PathParam(\""
                + annotation.paramName()
                + "\") in method " + ctx.getMethod());
        }

        // 3. Resolve owner
        String resourceType = annotation.resourceType();
        String ownerId = resolveOwner(resourceType,
            resourceId);
        if (ownerId == null) {
            throw new ResourceNotFoundException(
                resourceType, resourceId);
        }

        // 4. Compare
        String currentUserId = jwt.getSubject();
        if (!ownerId.equals(currentUserId)) {
            auditService.logAccess("OWNERSHIP_DENIED",
                resourceType, resourceId.toString());
            throw new ForbiddenException(
                "Bạn không có quyền truy cập "
                + resourceType + " #" + resourceId);
        }

        return ctx.proceed();
    }

    @SuppressWarnings("unchecked")
    private String resolveOwner(String resourceType,
                                Object resourceId) {
        for (OwnershipResolver resolver : resolvers) {
            try {
                return resolver.resolveOwner(
                    resourceType, resourceId);
            } catch (ClassCastException e) {
                // Wrong resolver type, try next
            }
        }
        throw new IllegalStateException(
            "No OwnershipResolver found for: "
            + resourceType);
    }

    private Object extractParam(InvocationContext ctx,
                                String paramName) {
        Parameter[] params =
            ctx.getMethod().getParameters();
        for (int i = 0; i < params.length; i++) {
            PathParam pp = params[i]
                .getAnnotation(PathParam.class);
            if (pp != null
                    && pp.value().equals(paramName)) {
                return ctx.getParameters()[i];
            }
        }
        return null;
    }
}
```

### 使用@RequiresOwnership

```java
@Path("/api/v1/orders")
@Authenticated
public class OrderResource {

    @GET @Path("/{id}")
    @RequiresOwnership(
        paramName = "id",
        resourceType = "Order",
        bypassRoles = {"admin", "moderator"})
    public OrderDTO getOrder(@PathParam("id") Long id) {
        // Nếu đến đây = đã pass ownership check
        return OrderDTO.from(orderRepo.findById(id));
    }

    @PUT @Path("/{id}")
    @RequiresOwnership(
        paramName = "id",
        resourceType = "Order")  // chỉ admin bypass
    public OrderDTO updateOrder(
            @PathParam("id") Long id,
            UpdateOrderRequest request) {
        return orderService.update(id, request);
    }
}

@Path("/api/v1/products")
@Authenticated
public class ProductResource {

    @PUT @Path("/{id}")
    @RolesAllowed("seller")
    @RequiresOwnership(
        paramName = "id",
        resourceType = "Product")
    public ProductDTO updateProduct(
            @PathParam("id") Long id,
            UpdateProductRequest request) {
        // Seller chỉ sửa được sản phẩm của mình
        return productService.update(id, request);
    }
}
```

## 自訂聲明—代幣豐富

### Keycloak 協定映射器

透過 Keycloak Admin → Client Scopes → Mappers 將自訂屬性新增至令牌：

|設定|價值|
|--------|--------|
|映射器類型 |使用者屬性 |
|使用者屬性 |賣家等級 |
|令牌聲明名稱 |賣家等級 |
|宣告 JSON 類型 |字串|
|新增至存取令牌 |開 |

或使用 **Script Mapper** 來實作複雜的邏輯：

```javascript
// Keycloak Script Mapper
// Tính seller_level dựa trên số sản phẩm đã bán
var level = 'basic';
var salesCount = user.getAttribute('total_sales');
if (salesCount && parseInt(salesCount[0]) > 1000) {
    level = 'gold';
} else if (salesCount && parseInt(salesCount[0]) > 100) {
    level = 'silver';
}
token.setOtherClaims('seller_level', level);
```

### 閱讀 Quarkus 中的自訂聲明

```java
@ApplicationScoped
public class TokenClaimService {

    @Inject
    JsonWebToken jwt;

    public String getSellerTier() {
        return jwt.getClaim("seller_tier");
    }

    public String getSellerLevel() {
        return jwt.getClaim("seller_level");
    }

    /**
     * Lấy tất cả custom claims dạng Map
     */
    public Map<String, Object> getCustomClaims() {
        return Map.of(
            "seller_tier",
                Optional.ofNullable(
                    jwt.getClaim("seller_tier"))
                    .orElse("none"),
            "seller_level",
                Optional.ofNullable(
                    jwt.getClaim("seller_level"))
                    .orElse("basic"),
            "groups",
                Optional.ofNullable(
                    jwt.<Set<String>>getClaim("groups"))
                    .orElse(Set.of())
        );
    }
}
```

## Keycloak 管理客戶端

### 依賴關係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-keycloak-admin-client</artifactId>
</dependency>
```

### 配置

```properties
# === Development: Password Grant ===
quarkus.keycloak.admin-client.server-url=http://localhost:8180
quarkus.keycloak.admin-client.realm=master
quarkus.keycloak.admin-client.client-id=admin-cli
quarkus.keycloak.admin-client.grant-type=PASSWORD
quarkus.keycloak.admin-client.username=admin
quarkus.keycloak.admin-client.password=admin

# === Production: Service Account (Client Credentials) ===
%prod.quarkus.keycloak.admin-client.server-url=\
  ${KC_SERVER_URL}
%prod.quarkus.keycloak.admin-client.realm=master
%prod.quarkus.keycloak.admin-client.client-id=ecommerce-admin
%prod.quarkus.keycloak.admin-client.client-secret=\
  ${KC_ADMIN_SECRET}
%prod.quarkus.keycloak.admin-client.grant-type=\
  CLIENT_CREDENTIALS
```

> **Keycloak 中的服務帳戶設定**：客戶端 `ecommerce-admin` → 設定 → 服務帳號角色 → 分配 `realm-admin` 角色。角色。

### DTO

```java
public record CreateUserRequest(
    @NotBlank String username,
    @Email @NotBlank String email,
    @Size(min = 8) String password,
    @NotBlank String firstName,
    @NotBlank String lastName
) {}

public record UpdateUserRequest(
    String firstName,
    String lastName,
    String email,
    Map<String, List<String>> attributes
) {}

public record UserDTO(
    String id,
    String username,
    String email,
    String firstName,
    String lastName,
    boolean enabled,
    boolean emailVerified,
    List<String> realmRoles,
    Map<String, List<String>> clientRoles,
    List<String> groups,
    Map<String, List<String>> attributes,
    Long createdTimestamp
) {
    public static UserDTO from(UserRepresentation user,
                               List<String> roles,
                               Map<String, List<String>> cRoles,
                               List<String> groups) {
        return new UserDTO(
            user.getId(), user.getUsername(),
            user.getEmail(), user.getFirstName(),
            user.getLastName(), user.isEnabled(),
            user.isEmailVerified(),
            roles, cRoles, groups,
            user.getAttributes(),
            user.getCreatedTimestamp());
    }
}

public record UserPageDTO(
    List<UserDTO> users,
    int total,
    int page,
    int size
) {}
```

### 使用者管理服務（完整）

```java
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.resource.*;
import org.keycloak.representations.idm.*;
import jakarta.ws.rs.core.Response;

@ApplicationScoped
public class KeycloakUserService {

    private static final Logger LOG =
        Logger.getLogger(KeycloakUserService.class);

    @Inject
    Keycloak keycloak;

    @Inject
    SecurityAuditService auditService;

    @ConfigProperty(name = "app.keycloak.realm",
        defaultValue = "ecommerce")
    String realmName;

    // === Helper Methods ===

    private RealmResource realm() {
        return keycloak.realm(realmName);
    }

    private UsersResource users() {
        return realm().users();
    }

    private UserResource user(String userId) {
        return users().get(userId);
    }

    // =============================================
    // CREATE USER
    // =============================================

    public String createUser(CreateUserRequest request) {
        // 1. Check duplicate username/email
        List<UserRepresentation> existing =
            users().searchByEmail(request.email(), true);
        if (!existing.isEmpty()) {
            throw new BusinessException(409,
                "Email đã được sử dụng: "
                + request.email());
        }

        existing = users().searchByUsername(
            request.username(), true);
        if (!existing.isEmpty()) {
            throw new BusinessException(409,
                "Username đã tồn tại: "
                + request.username());
        }

        // 2. Build UserRepresentation
        UserRepresentation user = new UserRepresentation();
        user.setUsername(request.username());
        user.setEmail(request.email());
        user.setFirstName(request.firstName());
        user.setLastName(request.lastName());
        user.setEnabled(true);
        user.setEmailVerified(false);

        // Set initial attributes
        user.setAttributes(Map.of(
            "registered_from", List.of("ecommerce-api"),
            "registration_date",
                List.of(LocalDate.now().toString())
        ));

        // 3. Create user in Keycloak
        try (Response response = users().create(user)) {
            if (response.getStatus() != 201) {
                String error = response.readEntity(
                    String.class);
                LOG.errorf("Failed to create user: %s",
                    error);
                throw new BusinessException(400,
                    "Không thể tạo user: " + error);
            }

            // 4. Extract user ID
            String userId = extractUserId(response);

            // 5. Set password
            setPassword(userId, request.password(), false);

            // 6. Assign default role
            assignRealmRole(userId, "customer");

            // 7. Gửi email verify (optional)
            sendVerificationEmail(userId);

            LOG.infof("Created user: %s (%s)",
                request.username(), userId);
            auditService.logAdminAction(
                "CREATE_USER", userId);

            return userId;
        }
    }

    private String extractUserId(Response response) {
        String locationHeader =
            response.getHeaderString("Location");
        if (locationHeader == null) {
            throw new BusinessException(500,
                "Missing Location header in response");
        }
        return locationHeader
            .replaceAll(".*/([^/]+)$", "$1");
    }

    // =============================================
    // UPDATE USER
    // =============================================

    public UserDTO updateUser(String userId,
                              UpdateUserRequest request) {
        UserRepresentation user =
            user(userId).toRepresentation();

        if (request.firstName() != null) {
            user.setFirstName(request.firstName());
        }
        if (request.lastName() != null) {
            user.setLastName(request.lastName());
        }
        if (request.email() != null) {
            // Check email uniqueness
            List<UserRepresentation> existing =
                users().searchByEmail(
                    request.email(), true);
            if (existing.stream()
                    .anyMatch(u -> !u.getId()
                        .equals(userId))) {
                throw new BusinessException(409,
                    "Email đã được sử dụng");
            }
            user.setEmail(request.email());
            user.setEmailVerified(false);
        }
        if (request.attributes() != null) {
            Map<String, List<String>> attrs =
                new HashMap<>(user.getAttributes() != null
                    ? user.getAttributes()
                    : Map.of());
            attrs.putAll(request.attributes());
            user.setAttributes(attrs);
        }

        user(userId).update(user);
        auditService.logAdminAction("UPDATE_USER", userId);

        return getUser(userId);
    }

    // =============================================
    // PASSWORD MANAGEMENT
    // =============================================

    public void setPassword(String userId, String password,
                            boolean temporary) {
        CredentialRepresentation cred =
            new CredentialRepresentation();
        cred.setType(CredentialRepresentation.PASSWORD);
        cred.setValue(password);
        cred.setTemporary(temporary);
        user(userId).resetPassword(cred);
    }

    public void sendVerificationEmail(String userId) {
        try {
            user(userId).sendVerifyEmail();
        } catch (Exception e) {
            LOG.warnf("Could not send verification"
                + " email to user %s: %s",
                userId, e.getMessage());
        }
    }

    public void sendPasswordResetEmail(String userId) {
        user(userId).executeActionsEmail(
            List.of("UPDATE_PASSWORD"));
    }

    // =============================================
    // ROLE MANAGEMENT
    // =============================================

    public void assignRealmRole(String userId,
                                String roleName) {
        RoleRepresentation role = realm().roles()
            .get(roleName).toRepresentation();
        user(userId).roles().realmLevel()
            .add(List.of(role));
        auditService.logAdminAction(
            "ASSIGN_ROLE:" + roleName, userId);
    }

    public void removeRealmRole(String userId,
                                String roleName) {
        RoleRepresentation role = realm().roles()
            .get(roleName).toRepresentation();
        user(userId).roles().realmLevel()
            .remove(List.of(role));
        auditService.logAdminAction(
            "REMOVE_ROLE:" + roleName, userId);
    }

    public void assignClientRole(String userId,
                                 String clientId,
                                 String roleName) {
        // Find client by clientId
        ClientRepresentation client = realm().clients()
            .findByClientId(clientId).stream()
            .findFirst()
            .orElseThrow(() -> new BusinessException(404,
                "Client not found: " + clientId));

        RoleRepresentation role = realm().clients()
            .get(client.getId()).roles()
            .get(roleName).toRepresentation();

        user(userId).roles()
            .clientLevel(client.getId())
            .add(List.of(role));

        auditService.logAdminAction(
            "ASSIGN_CLIENT_ROLE:"
            + clientId + "/" + roleName, userId);
    }

    public void removeClientRole(String userId,
                                 String clientId,
                                 String roleName) {
        ClientRepresentation client = realm().clients()
            .findByClientId(clientId).stream()
            .findFirst()
            .orElseThrow(() -> new BusinessException(404,
                "Client not found: " + clientId));

        RoleRepresentation role = realm().clients()
            .get(client.getId()).roles()
            .get(roleName).toRepresentation();

        user(userId).roles()
            .clientLevel(client.getId())
            .remove(List.of(role));
    }

    // =============================================
    // GROUP MANAGEMENT
    // =============================================

    public void joinGroup(String userId, String groupId) {
        user(userId).joinGroup(groupId);
        auditService.logAdminAction(
            "JOIN_GROUP:" + groupId, userId);
    }

    public void leaveGroup(String userId, String groupId) {
        user(userId).leaveGroup(groupId);
        auditService.logAdminAction(
            "LEAVE_GROUP:" + groupId, userId);
    }

    public List<GroupRepresentation> getUserGroups(
            String userId) {
        return user(userId).groups();
    }

    public List<GroupRepresentation> listAllGroups() {
        return realm().groups().groups();
    }

    // =============================================
    // SEARCH & GET
    // =============================================

    public UserDTO getUser(String userId) {
        UserRepresentation user =
            user(userId).toRepresentation();

        // Realm roles
        List<String> realmRoles = user(userId).roles()
            .realmLevel().listEffective().stream()
            .map(RoleRepresentation::getName)
            .filter(r -> !r.startsWith("default-roles-"))
            .toList();

        // Client roles
        Map<String, List<String>> clientRoles =
            new HashMap<>();
        for (ClientRepresentation client :
                realm().clients().findAll()) {
            List<RoleRepresentation> roles =
                user(userId).roles()
                    .clientLevel(client.getId())
                    .listEffective();
            if (!roles.isEmpty()) {
                clientRoles.put(client.getClientId(),
                    roles.stream()
                        .map(RoleRepresentation::getName)
                        .toList());
            }
        }

        // Groups
        List<String> groups = user(userId).groups().stream()
            .map(GroupRepresentation::getPath)
            .toList();

        return UserDTO.from(user, realmRoles,
            clientRoles, groups);
    }

    public UserPageDTO searchUsers(String keyword,
                                   int page, int size) {
        int first = page * size;
        List<UserDTO> users =
            users().search(keyword, first, size).stream()
                .map(u -> {
                    List<String> roles = user(u.getId())
                        .roles().realmLevel()
                        .listEffective().stream()
                        .map(RoleRepresentation::getName)
                        .filter(r ->
                            !r.startsWith("default-roles-"))
                        .toList();
                    return UserDTO.from(u, roles,
                        Map.of(), List.of());
                })
                .toList();

        int total = users().count(keyword);

        return new UserPageDTO(users, total, page, size);
    }

    // =============================================
    // ENABLE / DISABLE / DELETE
    // =============================================

    public void setUserEnabled(String userId, boolean en) {
        UserRepresentation user =
            user(userId).toRepresentation();
        user.setEnabled(en);
        user(userId).update(user);
        auditService.logAdminAction(
            en ? "ENABLE_USER" : "DISABLE_USER", userId);
    }

    public void deleteUser(String userId) {
        user(userId).remove();
        auditService.logAdminAction("DELETE_USER", userId);
    }

    // =============================================
    // SESSION MANAGEMENT
    // =============================================

    public List<UserSessionRepresentation> getUserSessions(
            String userId) {
        return user(userId).getUserSessions();
    }

    public void logoutUser(String userId) {
        user(userId).logout();
        auditService.logAdminAction("LOGOUT_USER", userId);
    }

    public void logoutAllSessions(String userId) {
        user(userId).getUserSessions()
            .forEach(session ->
                realm().deleteSession(session.getId()));
        auditService.logAdminAction(
            "LOGOUT_ALL_SESSIONS", userId);
    }
}
```

### 管理 REST API（完整）

```java
@Path("/api/v1/admin/users")
@RolesAllowed("admin")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Admin - User Management")
public class AdminUserResource {

    @Inject
    KeycloakUserService userService;

    // === CRUD ===

    @POST
    @Operation(summary = "Tạo user mới")
    public Response createUser(
            @Valid CreateUserRequest request) {
        String userId = userService.createUser(request);
        return Response.created(
            URI.create("/api/v1/admin/users/" + userId))
            .entity(Map.of("userId", userId))
            .build();
    }

    @GET
    @Operation(summary = "Tìm kiếm users")
    public UserPageDTO searchUsers(
            @QueryParam("q") String keyword,
            @QueryParam("page") @DefaultValue("0") int page,
            @QueryParam("size") @DefaultValue("20") int size) {
        return userService.searchUsers(keyword, page, size);
    }

    @GET @Path("/{userId}")
    @Operation(summary = "Lấy thông tin user chi tiết")
    public UserDTO getUser(
            @PathParam("userId") String userId) {
        return userService.getUser(userId);
    }

    @PUT @Path("/{userId}")
    @Operation(summary = "Cập nhật thông tin user")
    public UserDTO updateUser(
            @PathParam("userId") String userId,
            UpdateUserRequest request) {
        return userService.updateUser(userId, request);
    }

    @DELETE @Path("/{userId}")
    @Operation(summary = "Xoá user")
    public Response deleteUser(
            @PathParam("userId") String userId) {
        userService.deleteUser(userId);
        return Response.noContent().build();
    }

    // === Role Management ===

    @POST @Path("/{userId}/roles/{roleName}")
    @Operation(summary = "Gán realm role cho user")
    public Response assignRealmRole(
            @PathParam("userId") String userId,
            @PathParam("roleName") String roleName) {
        userService.assignRealmRole(userId, roleName);
        return Response.ok(Map.of(
            "message", "Đã gán role: " + roleName))
            .build();
    }

    @DELETE @Path("/{userId}/roles/{roleName}")
    @Operation(summary = "Gỡ realm role khỏi user")
    public Response removeRealmRole(
            @PathParam("userId") String userId,
            @PathParam("roleName") String roleName) {
        userService.removeRealmRole(userId, roleName);
        return Response.ok().build();
    }

    @POST
    @Path("/{userId}/clients/{clientId}/roles/{roleName}")
    @Operation(summary = "Gán client role cho user")
    public Response assignClientRole(
            @PathParam("userId") String userId,
            @PathParam("clientId") String clientId,
            @PathParam("roleName") String roleName) {
        userService.assignClientRole(
            userId, clientId, roleName);
        return Response.ok().build();
    }

    @DELETE
    @Path("/{userId}/clients/{clientId}/roles/{roleName}")
    @Operation(summary = "Gỡ client role khỏi user")
    public Response removeClientRole(
            @PathParam("userId") String userId,
            @PathParam("clientId") String clientId,
            @PathParam("roleName") String roleName) {
        userService.removeClientRole(
            userId, clientId, roleName);
        return Response.ok().build();
    }

    // === Group Management ===

    @GET @Path("/{userId}/groups")
    @Operation(summary = "Lấy danh sách groups của user")
    public List<GroupRepresentation> getUserGroups(
            @PathParam("userId") String userId) {
        return userService.getUserGroups(userId);
    }

    @POST @Path("/{userId}/groups/{groupId}")
    @Operation(summary = "Thêm user vào group")
    public Response joinGroup(
            @PathParam("userId") String userId,
            @PathParam("groupId") String groupId) {
        userService.joinGroup(userId, groupId);
        return Response.ok().build();
    }

    @DELETE @Path("/{userId}/groups/{groupId}")
    @Operation(summary = "Xoá user khỏi group")
    public Response leaveGroup(
            @PathParam("userId") String userId,
            @PathParam("groupId") String groupId) {
        userService.leaveGroup(userId, groupId);
        return Response.ok().build();
    }

    // === Account Actions ===

    @PUT @Path("/{userId}/enable")
    @Operation(summary = "Kích hoạt user")
    public Response enableUser(
            @PathParam("userId") String userId) {
        userService.setUserEnabled(userId, true);
        return Response.ok().build();
    }

    @PUT @Path("/{userId}/disable")
    @Operation(summary = "Vô hiệu hoá user")
    public Response disableUser(
            @PathParam("userId") String userId) {
        userService.setUserEnabled(userId, false);
        return Response.ok().build();
    }

    @POST @Path("/{userId}/reset-password")
    @Operation(summary = "Gửi email reset password")
    public Response resetPassword(
            @PathParam("userId") String userId) {
        userService.sendPasswordResetEmail(userId);
        return Response.ok(Map.of(
            "message", "Đã gửi email reset password"))
            .build();
    }

    @POST @Path("/{userId}/verify-email")
    @Operation(summary = "Gửi email xác thực")
    public Response verifyEmail(
            @PathParam("userId") String userId) {
        userService.sendVerificationEmail(userId);
        return Response.ok().build();
    }

    // === Session Management ===

    @GET @Path("/{userId}/sessions")
    @Operation(summary = "Lấy active sessions của user")
    public List<UserSessionRepresentation> getSessions(
            @PathParam("userId") String userId) {
        return userService.getUserSessions(userId);
    }

    @DELETE @Path("/{userId}/sessions")
    @Operation(summary = "Logout tất cả sessions")
    public Response logoutAll(
            @PathParam("userId") String userId) {
        userService.logoutAllSessions(userId);
        return Response.ok(Map.of(
            "message", "Đã logout tất cả sessions"))
            .build();
    }

    // === Groups List ===

    @GET @Path("/groups")
    @Operation(summary = "Liệt kê tất cả groups")
    public List<GroupRepresentation> listGroups() {
        return userService.listAllGroups();
    }
}
```

## 自註冊端點

```java
@Path("/api/v1/auth")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Authentication")
public class AuthResource {

    @Inject
    KeycloakUserService userService;

    @Inject
    SecurityAuditService auditService;

    @POST @Path("/register")
    @PermitAll
    @Operation(summary = "Đăng ký tài khoản mới")
    public Response register(
            @Valid RegisterRequest request) {
        String userId = userService.createUser(
            new CreateUserRequest(
                request.username(), request.email(),
                request.password(), request.firstName(),
                request.lastName()));

        auditService.logAccess("REGISTER",
            "User", userId);

        return Response.status(201)
            .entity(Map.of(
                "message", "Đăng ký thành công."
                    + " Kiểm tra email để xác thực.",
                "userId", userId))
            .build();
    }

    @GET @Path("/me")
    @Authenticated
    @Operation(summary = "Lấy thông tin user hiện tại")
    public UserProfileDTO getProfile(
            @Context SecurityContext ctx) {
        JsonWebToken jwt = (JsonWebToken) ctx
            .getUserPrincipal();

        return new UserProfileDTO(
            jwt.getSubject(),
            jwt.getName(),
            jwt.getClaim("email"),
            jwt.getClaim("preferred_username"),
            jwt.getGroups(),
            jwt.getClaim("seller_tier"),
            jwt.getClaim("realm_access"));
    }
}

public record RegisterRequest(
    @NotBlank @Size(min = 3, max = 50) String username,
    @Email @NotBlank String email,
    @NotBlank @Size(min = 8, message =
        "Mật khẩu tối thiểu 8 ký tự") String password,
    @NotBlank String firstName,
    @NotBlank String lastName
) {}

public record UserProfileDTO(
    String id,
    String name,
    String email,
    String username,
    Set<String> roles,
    String sellerTier,
    Object realmAccess
) {}
```

## 多租戶模式

對於 SaaS — 每個租戶是 1 個領域或 1 個群組 + 租戶屬性：

### 方法 1：透過群組 + 屬性確定租戶

```java
@ApplicationScoped
public class TenantResolver {

    @Inject
    JsonWebToken jwt;

    /**
     * Resolve tenant từ JWT token.
     * Token chứa custom claim "tenant_id"
     * (mapped từ user attribute trong Keycloak)
     */
    public String getCurrentTenantId() {
        String tenantId = jwt.getClaim("tenant_id");
        if (tenantId == null || tenantId.isBlank()) {
            throw new ForbiddenException(
                "User không thuộc tenant nào");
        }
        return tenantId;
    }
}

// Hibernate Filter cho multi-tenancy
@FilterDef(
    name = "tenantFilter",
    parameters = @ParamDef(
        name = "tenantId", type = String.class))
@Filter(
    name = "tenantFilter",
    condition = "tenant_id = :tenantId")
@Entity
@Table(name = "products")
public class Product extends PanacheEntity {
    @Column(name = "tenant_id", nullable = false)
    public String tenantId;

    public String name;
    public BigDecimal price;
    // ...
}

// Auto-apply tenant filter
@ApplicationScoped
public class TenantFilterService {

    @Inject
    EntityManager em;

    @Inject
    TenantResolver tenantResolver;

    /**
     * Enable tenant filter cho mọi query
     * trong request scope
     */
    public void enableTenantFilter() {
        Session session = em.unwrap(Session.class);
        session.enableFilter("tenantFilter")
            .setParameter("tenantId",
                tenantResolver.getCurrentTenantId());
    }
}

// Jakarta REST Filter — tự động enable
@Provider
@Authenticated
public class TenantRequestFilter
        implements ContainerRequestFilter {

    @Inject
    TenantFilterService tenantFilter;

    @Override
    public void filter(
            ContainerRequestContext ctx) {
        tenantFilter.enableTenantFilter();
    }
}
```

### 方法 2：每個領域的租戶

```properties
# Mỗi tenant có realm riêng
# Resolve realm từ subdomain hoặc header
quarkus.oidc.auth-server-url=\
  http://keycloak:8080/realms/${tenant.realm}

# Dùng TenantConfigResolver
quarkus.oidc.tenant-enabled=true
```

```java
@ApplicationScoped
public class CustomTenantConfigResolver
        implements TenantConfigResolver {

    @Override
    public Uni<OidcTenantConfig> resolve(
            RoutingContext context,
            OidcRequestContext<OidcTenantConfig> reqCtx) {

        // Resolve tenant từ subdomain
        String host = context.request().host();
        String tenant = host.split("\\.")[0];
        // acme.ecommerce.xdev.asia → tenant = "acme"

        OidcTenantConfig config = new OidcTenantConfig();
        config.setTenantId(tenant);
        config.setAuthServerUrl(
            "http://keycloak:8080/realms/" + tenant);
        config.setClientId("ecommerce-api");
        config.setApplicationType(
            OidcTenantConfig.ApplicationType.SERVICE);

        return Uni.createFrom().item(config);
    }
}
```

## 稽核日誌記錄

### 結構化稽核服務

```java
@ApplicationScoped
public class SecurityAuditService {

    private static final Logger AUDIT =
        Logger.getLogger("SECURITY_AUDIT");

    @Inject
    JsonWebToken jwt;

    @Inject
    @ConfigProperty(name = "quarkus.application.name")
    String serviceName;

    /**
     * Log resource access (view, update, delete)
     */
    public void logAccess(String action, String resource,
                          String resourceId) {
        AuditEntry entry = new AuditEntry(
            UUID.randomUUID().toString(),
            Instant.now(),
            serviceName,
            resolveUserId(),
            resolveUsername(),
            action,
            resource,
            resourceId,
            "SUCCESS",
            null);

        AUDIT.infof("%s", entry.toJson());
    }

    /**
     * Log admin actions (create/delete user, assign role)
     */
    public void logAdminAction(String action,
                               String targetUserId) {
        AuditEntry entry = new AuditEntry(
            UUID.randomUUID().toString(),
            Instant.now(),
            serviceName,
            resolveUserId(),
            resolveUsername(),
            action,
            "User",
            targetUserId,
            "SUCCESS",
            null);

        // Admin actions → WARN level cho visibility
        AUDIT.warnf("ADMIN_ACTION | %s", entry.toJson());
    }

    /**
     * Log security violations (unauthorized access,
     * ownership check failures)
     */
    public void logViolation(String action, String resource,
                             String resourceId,
                             String reason) {
        AuditEntry entry = new AuditEntry(
            UUID.randomUUID().toString(),
            Instant.now(),
            serviceName,
            resolveUserId(),
            resolveUsername(),
            action,
            resource,
            resourceId,
            "DENIED",
            reason);

        // Security violations → ERROR level
        AUDIT.errorf("SECURITY_VIOLATION | %s",
            entry.toJson());
    }

    private String resolveUserId() {
        return jwt != null ? jwt.getSubject() : "anonymous";
    }

    private String resolveUsername() {
        return jwt != null
            ? jwt.getClaim("preferred_username")
            : "anonymous";
    }
}

public record AuditEntry(
    String id,
    Instant timestamp,
    String service,
    String userId,
    String username,
    String action,
    String resourceType,
    String resourceId,
    String result,
    String reason
) {
    public String toJson() {
        return String.format(
            "{\"id\":\"%s\",\"timestamp\":\"%s\","
            + "\"service\":\"%s\",\"userId\":\"%s\","
            + "\"username\":\"%s\",\"action\":\"%s\","
            + "\"resourceType\":\"%s\","
            + "\"resourceId\":\"%s\","
            + "\"result\":\"%s\",\"reason\":\"%s\"}",
            id, timestamp, service, userId, username,
            action, resourceType, resourceId,
            result, reason != null ? reason : "");
    }
}
```

### 審核登入 application.properties

```properties
# Separate audit log file
quarkus.log.category."SECURITY_AUDIT".level=INFO
quarkus.log.handler.file."audit".enable=true
quarkus.log.handler.file."audit".path=logs/audit.log
quarkus.log.handler.file."audit".rotation.max-file-size=50M
quarkus.log.handler.file."audit".rotation.max-backup-index=30
quarkus.log.handler.file."audit".format=%d{yyyy-MM-dd HH:mm:ss} %m%n
quarkus.log.category."SECURITY_AUDIT".handlers=audit
quarkus.log.category."SECURITY_AUDIT".use-parent-handlers=false
```

## 測試安全性

```java
@QuarkusTest
class AdminUserResourceTest {

    // === Test admin access ===
    @Test
    @TestSecurity(user = "admin1",
        roles = {"admin"})
    void testListUsersAsAdmin() {
        given()
            .queryParam("q", "test")
            .when().get("/api/v1/admin/users")
            .then()
                .statusCode(200)
                .body("users", notNullValue())
                .body("total", greaterThanOrEqualTo(0));
    }

    // === Test forbidden for non-admin ===
    @Test
    @TestSecurity(user = "customer1",
        roles = {"customer"})
    void testListUsersAsCustomerForbidden() {
        given()
            .when().get("/api/v1/admin/users")
            .then()
                .statusCode(403);
    }

    // === Test resource owner ===
    @Test
    @TestSecurity(user = "owner-123",
        roles = {"customer"})
    void testGetOwnOrder() {
        // Assume order #1 belongs to owner-123
        given()
            .when().get("/api/v1/orders/1")
            .then()
                .statusCode(200);
    }

    @Test
    @TestSecurity(user = "other-user",
        roles = {"customer"})
    void testGetOtherUserOrderForbidden() {
        // order #1 belongs to owner-123, not other-user
        given()
            .when().get("/api/v1/orders/1")
            .then()
                .statusCode(403);
    }

    // === Test admin bypass ownership ===
    @Test
    @TestSecurity(user = "admin1",
        roles = {"admin"})
    void testAdminCanViewAnyOrder() {
        given()
            .when().get("/api/v1/orders/1")
            .then()
                .statusCode(200);
    }

    // === Test self-registration ===
    @Test
    void testRegister() {
        given()
            .contentType("application/json")
            .body("""
                {
                  "username": "newuser",
                  "email": "new@xdev.asia",
                  "password": "Password123!",
                  "firstName": "New",
                  "lastName": "User"
                }
                """)
            .when().post("/api/v1/auth/register")
            .then()
                .statusCode(201)
                .body("userId", notNullValue());
    }

    // === Test client roles ===
    @Test
    @TestSecurity(user = "seller1",
        roles = {"seller", "product:create",
                 "product:update", "product:view"})
    void testSellerCanCreateProduct() {
        given()
            .contentType("application/json")
            .body("""
                {"name": "Test Product",
                 "price": 100000,
                 "stockQuantity": 10,
                 "categoryId": 1}
                """)
            .when().post("/api/v1/products")
            .then()
                .statusCode(201);
    }

    @Test
    @TestSecurity(user = "seller1",
        roles = {"seller", "product:create"})
    void testSellerCannotDeleteProduct() {
        // seller không có product:delete
        given()
            .when().delete("/api/v1/products/1")
            .then()
                .statusCode(403);
    }
}
```

## 練習

1. 在Keycloak領域JSON中配置領域角色、客戶端角色和複合角色
2. 實施 `@RequiresOwnership` 訂單和產品資源的註解+攔截器
3. 整合Keycloak管理客戶端：CRUD使用者、指派/刪除角色、管理群組
4. 使用 Swagger 文件建立管理 API 端點
5. 實施帶有電子郵件驗證的自助註冊端點
6. 配置基於群組的存取：具有產品配額的賣家（進階/基本）
7. 新增使用單獨日誌檔案建構的審核日誌記錄
8. 編寫測試： `@TestSecurity` 對於管理員、客戶、賣家、資源所有權
9.（進階）使用 Hibernate Filter 或 per-realm 方法實作多租戶

## 總結

|特點|描述 |
|------------|--------|
| **領域角色** |跨服務權限：管理者、客戶、賣家 |
| **客戶角色** |服務特定：產品：創建，訂單：退款 |
| **複合角色** |收集角色：賣家 = 產品：創建 + 產品：查看 + ... |
| **團體** |組織使用者：/sellers/premium、/staff/support |
| **@RequiresOwnership** |資源級授權，管理員繞過 |
| **客製化聲明** |透過 Keycloak 協定映射器豐富代幣 |
| **管理客戶端** |以程式方式增刪改查使用者、角色、群組、會話 |
| **多租戶** |每組或每領域租戶隔離 |
| **稽核日誌** |安全事件的結構化日誌，單獨的檔案 |
| **@TestSecurity** |測試中的模擬認證/授權 |

下一篇文章：REST 用戶端 — 微服務之間的同步通訊。
