---
id: 019d8a22-c324-7a10-b001-a1b2c3d4e524
title: "Bài 24: Authentication & Authorization — OAuth2, JWT & OIDC"
slug: bai-24-authentication-authorization-oauth2-jwt-oidc
description: >-
  OAuth2 flows, JWT structure & validation, OpenID Connect,
  centralized auth với Keycloak/Auth0, token propagation trong microservices,
  API Gateway auth integration, RBAC vs ABAC.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 24
section_title: "Phần 8: Security & Production Readiness"
course:
  id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
  title: "Cloud Native Microservices Architecture"
  slug: cloud-native-microservices-architecture
---

## Giới thiệu

Authentication và Authorization trong microservices phức tạp hơn monolith: mỗi service cần biết "ai đang gọi tôi?" và "họ có quyền làm điều này không?" — mà không cần check database mỗi request.

**Giải pháp**: Centralized Identity Provider (IdP) + JWT tokens — xác thực một lần tại API Gateway, token được truyền qua tất cả services.

---

## 1. Authentication vs Authorization

```
Authentication (AuthN): "Bạn là ai?"
  → Verify identity (username/password, API key, certificate)
  → Kết quả: "Đây là user John, email john@example.com"

Authorization (AuthZ): "Bạn có thể làm gì?"
  → Verify permissions (roles, scopes)
  → Kết quả: "John có role 'customer', có thể tạo và xem orders của mình"
```

---

## 2. OAuth2 — Authorization Framework

### 2.1 OAuth2 Roles

```
Resource Owner: User (người dùng cuối)
Client:         Application yêu cầu access (web app, mobile app)
Authorization Server: Keycloak/Auth0 — cấp tokens
Resource Server: API/Service chứa protected resources
```

### 2.2 Authorization Code Flow (Web Apps)

```
Browser                    Backend App             Auth Server (Keycloak)
   │                           │                           │
   │── Click Login ───────────▶│                           │
   │                           │── Redirect ──────────────▶│
   │◀─── Redirect to Login ────────────────────────────────│
   │                           │                           │
   │── Enter credentials ─────────────────────────────────▶│
   │                           │                           │
   │◀─── Redirect with code ───────────────────────────────│
   │                           │                           │
   │── Forward code ──────────▶│                           │
   │                           │── Exchange code for token▶│
   │                           │◀─ access_token + id_token─│
   │                           │                           │
   │◀─── Session created ──────│                           │
```

### 2.3 Client Credentials Flow (Service-to-Service)

```
Service A                         Auth Server
   │                                   │
   │── POST /token                     │
   │   client_id + client_secret ─────▶│
   │◀─ access_token (JWT) ─────────────│
   │                                   │
   │── API Call + Bearer token ───────▶ Service B
                                           │
                                           │── Validate JWT (signature + expiry)
                                           │── Check scopes
                                           │
                                           ▼
                                      Process request
```

### 2.4 PKCE Flow (Mobile/SPA)

Không có client secret (code chạy trên user's device không thể giữ bí mật):

```bash
# 1. Tạo code_verifier (random string)
code_verifier = base64url(random_bytes(32))

# 2. Tạo code_challenge
code_challenge = base64url(sha256(code_verifier))

# 3. Authorization request kèm code_challenge
GET /authorize?
  response_type=code&
  client_id=xxx&
  code_challenge=abc&
  code_challenge_method=S256

# 4. Token exchange kèm code_verifier
POST /token
  code=xxx&code_verifier=original_verifier
```

---

## 3. JWT — JSON Web Token

### 3.1 Cấu trúc

```
eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1c2VyLTAwMSIsInJvbGVzIjpbImN1c3RvbWVyIl19.signature
└─────────────────┘ └──────────────────────────────────────────┘ └───────────┘
      Header                         Payload                       Signature

Header (Base64URL decoded):
{
  "alg": "RS256",    ← Thuật toán ký: RS256 (asymmetric) hoặc HS256 (symmetric)
  "typ": "JWT",
  "kid": "key-2024"  ← Key ID để lookup public key
}

Payload (Base64URL decoded):
{
  "sub": "user-001",              ← Subject (user ID)
  "iss": "https://auth.example.com", ← Issuer
  "aud": "order-service",         ← Audience (intended recipient)
  "exp": 1711900800,              ← Expiration time (Unix timestamp)
  "iat": 1711897200,              ← Issued At
  "jti": "abc-123-xyz",           ← JWT ID (prevent replay)
  "email": "john@example.com",
  "roles": ["customer"],
  "tenant_id": "tenant-001"      ← Custom claims
}

Signature: RS256(base64url(header) + "." + base64url(payload), private_key)
```

### 3.2 RS256 vs HS256

```
HS256 (Symmetric):
  - Ký và verify bằng cùng một secret key
  - Tất cả services cần biết secret → nguy hiểm
  - Dùng cho: monolith, internal tools

RS256 (Asymmetric):
  - Auth Server ký bằng private key (giữ bí mật)
  - Services verify bằng public key (có thể public)
  - Services KHÔNG thể forge tokens
  - Dùng cho: microservices, distributed systems

JWK Set (JWKS): Auth Server expose public keys tại /.well-known/jwks.json
Services cache và dùng để verify JWT offline
```

### 3.3 JWT Validation

```java
@Component
public class JwtValidator {
    // Cache JWKS (public keys) từ Auth Server
    @Autowired
    private JwkProvider jwkProvider;

    public Claims validate(String token) {
        // Parse header để lấy kid
        DecodedJWT jwt = JWT.decode(token);
        JwkKey key = jwkProvider.get(jwt.getKeyId());

        try {
            // Verify signature + claims
            return JWT.require(Algorithm.RSA256(key.getPublicKey(), null))
                .withIssuer("https://auth.example.com")
                .withAudience("order-service")
                .build()
                .verify(token)
                .getClaims();

        } catch (TokenExpiredException e) {
            throw new UnauthorizedException("Token expired");
        } catch (JWTVerificationException e) {
            throw new UnauthorizedException("Invalid token");
        }
    }
}
```

---

## 4. OpenID Connect (OIDC)

OAuth2 là authorization framework. **OIDC** là identity layer trên OAuth2:

```
OAuth2 trả về: access_token (opaque, for authorization)
OIDC thêm:     id_token (JWT, contains user identity info)
               /userinfo endpoint

Ví dụ id_token:
{
  "sub": "user-001",
  "name": "John Doe",
  "email": "john@example.com",
  "email_verified": true,
  "picture": "https://...",
  "iss": "https://auth.example.com",
  "aud": "my-app",
  "exp": 1711900800
}
```

**Khi nào dùng OIDC**: Khi cần user profile information (login, profile page). Access token dùng để access APIs.

---

## 5. Keycloak — Self-hosted Identity Provider

### 5.1 Cài đặt trên Kubernetes

```yaml
helm repo add bitnami https://charts.bitnami.com/bitnami

helm upgrade --install keycloak bitnami/keycloak \
  --namespace platform \
  --set auth.adminPassword=<password> \
  --set replicaCount=2 \
  --set postgresql.enabled=true \
  --set ingress.enabled=true \
  --set ingress.hostname=auth.example.com
```

### 5.2 Realm Configuration

```json
// Realm: myapp
// Client: order-service-api (Resource Server)
{
  "clientId": "order-service-api",
  "protocol": "openid-connect",
  "bearerOnly": true,  // Chỉ accept tokens, không issue
  "defaultClientScopes": ["openid", "profile", "email"],
  "protocolMappers": [
    {
      "name": "tenant-id-mapper",
      "protocol": "openid-connect",
      "protocolMapper": "oidc-usermodel-attribute-mapper",
      "config": {
        "user.attribute": "tenant_id",
        "claim.name": "tenant_id",
        "access.token.claim": "true"
      }
    }
  ]
}
```

---

## 6. Token propagation trong Microservices

### 6.1 API Gateway — Xác thực tập trung

```
Client ──Bearer token──▶ API Gateway
                              │
                              │ 1. Validate JWT signature
                              │ 2. Check expiry
                              │ 3. Check audience
                              │
                              │ 4. Forward token (or user info headers) → downstream services
                              │
                              ▼
                         Order Service
                              │
                              │ 5. Extract claims từ token/headers
                              │ 6. Apply RBAC logic
                              │
                              ▼
                         Process request
```

### 6.2 Kong JWT Plugin

```yaml
apiVersion: configuration.konghq.com/v1
kind: KongPlugin
metadata:
  name: jwt-auth
plugin: jwt
config:
  key_claim_name: kid
  claims_to_verify:
    - exp
    - nbf
  anonymous: null
  run_on_preflight: true
```

```yaml
# Hoặc dùng OIDC plugin
plugin: oidc
config:
  issuer: https://auth.example.com/realms/myapp
  client_id: kong-gateway
  client_secret: xxxx
  scope: openid
  bearer_only: yes
```

### 6.3 Token Forwarding vs Header Injection

**Option 1: Forward original JWT** (recommended)

```yaml
# Kong: forward original Authorization header
# Downstream service tự validate
```

Ưu điểm: Downstream service có đầy đủ claims, có thể validate signature độc lập

**Option 2: Header Injection** (simpler but less secure)

```yaml
# Kong inject parsed claims làm headers
X-Consumer-Username: john
X-Consumer-Groups: customer,admin
X-Tenant-ID: tenant-001
```

Ưu điểm: Downstream service không cần JWT library
Nhược điểm: Các headers này dễ bị forge nếu ai bypass API Gateway

---

## 7. Authorization Patterns

### 7.1 RBAC — Role-Based Access Control

```java
// Spring Security
@PreAuthorize("hasRole('ADMIN') or (hasRole('CUSTOMER') and #customerId == authentication.name)")
public Order getOrder(String orderId, String customerId) { ... }

// Hoặc Method Security
@Secured({"ROLE_ADMIN", "ROLE_MANAGER"})
public void deleteOrder(String orderId) { ... }
```

```yaml
# Kubernetes RBAC cho service-to-service (service accounts)
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: order-service-role
rules:
  - apiGroups: [""]
    resources: ["configmaps", "secrets"]
    verbs: ["get", "list"]
```

### 7.2 ABAC — Attribute-Based Access Control

```java
// Sử dụng Spring Security SpEL expression
@PreAuthorize("""
    hasRole('CUSTOMER') and
    @orderService.isOwner(#orderId, authentication.name) and
    T(java.time.LocalDate).now().isBefore(
        @orderService.getOrder(#orderId).createdAt.plusDays(30)
    )
""")
public void cancelOrder(String orderId) { ... }
```

### 7.3 OPA (Open Policy Agent) — Policy as Code

```rego
# order-policy.rego
package order

default allow = false

# Customer có thể xem order của mình
allow {
    input.action == "GET"
    input.user.roles[_] == "customer"
    input.resource.owner_id == input.user.id
}

# Admin có thể xem tất cả
allow {
    input.user.roles[_] == "admin"
    input.action == "GET"
}

# Refund chỉ trong 30 ngày
allow {
    input.action == "REFUND"
    input.user.roles[_] == "customer"
    input.resource.owner_id == input.user.id
    time.diff(input.resource.created_at, time.now_ns()) < 2592000  # 30 ngày
}
```

```java
// Gọi OPA để evaluate policy
@Service
public class AuthorizationService {
    public boolean isAllowed(String action, User user, Resource resource) {
        OpaRequest request = OpaRequest.builder()
            .input(Map.of(
                "action", action,
                "user", Map.of("id", user.getId(), "roles", user.getRoles()),
                "resource", Map.of("owner_id", resource.getOwnerId(), "created_at", resource.getCreatedAt())
            ))
            .build();

        OpaResponse response = opaClient.evaluate("order/allow", request);
        return response.getResult();
    }
}
```

---

## 8. Token Refresh & Security Considerations

### 8.1 Access Token vs Refresh Token

```
Access Token:
  - Short-lived: 5-15 phút
  - Dùng để access APIs
  - Stateless (validate offline với public key)
  - Khi bị stolen: expire sớm → damage limited

Refresh Token:
  - Long-lived: 7-30 ngày
  - Dùng để lấy access token mới
  - Stored lên Auth Server (có thể revoke)
  - Khi bị stolen: phải revoke ngay
```

### 8.2 Security Best Practices

```
□ Access token TTL: 5-15 phút (không phải 1 ngày)
□ RS256 không phải HS256 cho distributed systems
□ Validate audience (aud) claim — token không dùng được cho service khác
□ Validate issuer (iss)
□ Store tokens trong httpOnly cookies (không localStorage)
□ Refresh token rotation: mỗi lần refresh → issue token mới + revoke cũ
□ Token không chứa sensitive data (credit card, password)
□ Rate limit authentication endpoints
□ Brute force protection (lockout sau N failed attempts)
```

---

## Tóm tắt

| Khái niệm | Mục đích |
|-----------|---------|
| OAuth2 | Authorization framework (delegate access) |
| OIDC | Identity layer trên OAuth2 (who the user is) |
| JWT (RS256) | Stateless token, verify offline mà không cần DB |
| JWKS | Public key endpoint để các services verify token |
| API Gateway auth | Xác thực tập trung, downstream nhận verified claims |
| RBAC | Role-based access — simple, predictable |
| ABAC | Attribute-based — flexible, context-aware |
| OPA | Policy as code — centralized, auditable authorization |

**Bài tiếp theo**: Secrets Management & Container Security
