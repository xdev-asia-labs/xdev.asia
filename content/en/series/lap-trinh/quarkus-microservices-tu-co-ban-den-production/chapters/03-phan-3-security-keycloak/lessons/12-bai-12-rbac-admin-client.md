---
id: 019e2a10-a112-7a01-b001-f1a2b3c4d512
title: 'Lesson 12: Advanced RBAC & Keycloak Admin Client'
slug: bai-12-rbac-nang-cao-keycloak-admin-client
description: >-
  Advanced Role-Based Access Control, Fine-grained Authorization, Keycloak Admin
  Client API to manage users/roles from the backend.
duration_minutes: 100
is_free: false
video_url: null
sort_order: 11
section_title: 'Part 3: Security with Keycloak'
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: 'Quarkus Microservices: From Basics to Production'
  slug: quarkus-microservices-tu-co-ban-den-production
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 Programming — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 12: Advanced RBAC & Keycloak Admin</tspan>
      <tspan x="60" dy="42">Client</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus Microservices: From Basics to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Security with Keycloak</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Lesson 11 covered basic authentication `@Authenticated` and `@RolesAllowed`. This article delves into **Fine-grained RBAC** (resource-level permissions), distinguishing **Realm Roles vs Client Roles vs Composite Roles**, **Group-based Access Control**, **Keycloak Admin Client** to manage users/roles programmatically, **Multi-tenancy** pattern, and **Audit Logging** for production.

## Overview of decentralized system

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

## Realm Roles vs Client Roles vs Composite Roles

### Realm Roles

Realm-wide scope — used for **cross-service** permissions:

```
Realm Roles:
├── admin          → Full access mọi service
├── customer       → Mua hàng, xem đơn
├── seller         → Quản lý sản phẩm
└── moderator      → Review, moderate content
```

### Client Roles

Scope for each client (service) — used for **service-specific** permissions:

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

### Composite Roles

Group multiple roles into 1 parent role:

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

### Configuration in Realm JSON

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

### Using Client Roles in Quarkus

To `@RolesAllowed` receive client roles, need to map claim in token:

```properties
# Map client roles vào SecurityIdentity
quarkus.oidc.roles.role-claim-path=\
  resource_access/product-service/roles

# Hoặc dùng realm_access cho realm roles (default)
# quarkus.oidc.roles.role-claim-path=realm_access/roles
```

**JWT token structure**:

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

## Group-based Access Control

### Configure Groups in Keycloak

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

### Map Groups into Token

In Keycloak Admin Console → Client Scopes → create mapper:

| Setting | Value |
|--------|-------|
| MapperType | Group Membership |
| Token Claim Name | groups |
| Full group path | ON |
| Add to ID token | ON |
| Add to access token | ON |

**JWT token will contain**:

```json
{
  "groups": ["/sellers/premium-sellers"],
  "realm_access": { "roles": ["seller"] },
  "resource_access": {
    "product-service": { "roles": ["product:manage"] }
  }
}
```

### Using Groups in Quarkus

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

## Fine-grained Authorization — Resource Owner Check

### Method 1: Inline Check (simple)

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

### Method 2: Custom `@ResourceOwner` Annotation (reuse)

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

### Use @RequiresOwnership

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

## Custom Claims — Token Enrichment

### Keycloak Protocol Mapper

Add custom attributes to the token via Keycloak Admin → Client Scopes → Mappers:

| Setting | Value |
|--------|-------|
| MapperType | User Attribute |
| User Attribute | seller_tier |
| Token Claim Name | seller_tier |
| Claim JSON Type | String |
| Add to access token | ON |

Or use **Script Mapper** for complex logic:

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

### Read Custom Claims in Quarkus

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

## Keycloak Admin Client

### Dependency

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-keycloak-admin-client</artifactId>
</dependency>
```

### Configuration

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

> **Service Account setup in Keycloak**: Client `ecommerce-admin` → Settings → Service Account Roles → assign `realm-admin` role. role.

### DTOs

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

### User Management Service (Full)

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

### Admin REST API (Full)

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

## Self-Registration Endpoint

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

## Multi-tenancy Pattern

For SaaS — each tenant is 1 realm or 1 group + tenant attribute:

### Approach 1: Tenant via Group + Attribute

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

### Approach 2: Tenant per Realm

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

## Audit Logging

### Structured Audit Service

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

### Audit Log in application.properties

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

## Testing Security

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

## Exercises

1. Configure Realm Roles, Client Roles and Composite Roles in Keycloak realm JSON
2. Implement `@RequiresOwnership` annotation + interceptor for Order and Product resources
3. Integrate Keycloak Admin Client: CRUD users, assign/remove roles, manage groups
4. Create Admin API endpoints with Swagger documentation
5. Implement Self-Registration endpoint with email verification
6. Configure Group-based access: sellers (premium/basic) with product quota
7. Add Audit Logging structured with separate log file
8. Write tests: `@TestSecurity` for admin, customer, seller, resource ownership
9. (Advanced) Implement Multi-tenancy with Hibernate Filter or per-realm approach

## Summary

| Features | Description |
|-----------|--------|
| **Realm Roles** | Cross-service permissions: admin, customer, seller |
| **Client Roles** | Service-specific: product:create, order:refund |
| **Composite Roles** | Collect roles: seller = product:create + product:view + ... |
| **Groups** | Organize users: /sellers/premium, /staff/support |
| **@RequiresOwnership** | Resource-level authorization, admin bypass |
| **Custom Claims** | Token enrichment via Keycloak Protocol Mapper |
| **Admin Client** | CRUD users, roles, groups, sessions programmatically |
| **Multi-tenancy** | Per-group or per-realm tenant isolation |
| **Audit Logging** | Structured logs for security events, separate file |
| **@TestSecurity** | Mock authentication/authorization in tests |

Next article: REST Client — Synchronous communication between Microservices.
