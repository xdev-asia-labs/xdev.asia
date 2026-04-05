---
id: 019e2a10-a110-7a01-b001-f1a2b3c4d510
title: 'Bài 10: Keycloak — Cài đặt & Cấu hình Realm'
slug: bai-10-keycloak-cai-dat-cau-hinh-realm
description: >-
  Cài đặt Keycloak bằng Dev Services, tạo Realm, Client, Users, Roles.
  Hiểu OIDC flow và JWT token structure.
duration_minutes: 90
is_free: false
video_url: null
sort_order: 9
section_title: "Phần 3: Security với Keycloak"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5251" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5251)"/>

  <!-- Decorations -->
  <g>
    <circle cx="624" cy="162" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="648" cy="206" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="672" cy="250" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="696" cy="34" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="720" cy="78" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="102" x2="1100" y2="182" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="132" x2="1050" y2="202" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="984.0429399400242,133.5 984.0429399400242,170.5 952,189 919.9570600599758,170.5 919.9570600599758,133.5 952,115" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Lập trình — Bài 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 10: Keycloak — Cài đặt &amp; Cấu hình</tspan>
      <tspan x="60" dy="42">Realm</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus Microservices: Từ Cơ bản đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Security với Keycloak</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Keycloak là Identity and Access Management (IAM) solution phổ biến nhất cho microservices. Quarkus tích hợp Keycloak thông qua **OIDC extension** và cung cấp **Dev Services** — tự động khởi động Keycloak container trong dev mode mà không cần cài đặt.

## Dev Services — Keycloak tự động

### Dependencies

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-oidc</artifactId>
</dependency>
```

### Cấu hình tối thiểu

```properties
# application.properties
# Dev Services tự động:
# - Pull quay.io/keycloak/keycloak image
# - Tạo realm "quarkus"
# - Admin console: http://localhost:PORT (random port)
# - Admin credentials: admin/admin

# Chỉ cần cấu hình cho production
%prod.quarkus.oidc.auth-server-url=https://keycloak.xdev.asia/realms/ecommerce
%prod.quarkus.oidc.client-id=product-service
%prod.quarkus.oidc.credentials.secret=${OIDC_CLIENT_SECRET}
```

### Dev UI — Keycloak Console

```bash
quarkus dev
# Mở Dev UI: http://localhost:8080/q/dev-ui
# → OpenID Connect → Keycloak Admin (link tự động)
# → Single Page App (test OIDC flow)
```

## Client Types trong Keycloak

| Client Type | Mô tả | Ví dụ |
|-------------|--------|-------|
| **Public** | Không có secret, dùng PKCE | SPA (React, Vue), Mobile App |
| **Confidential** | Có client secret, chạy server-side | Backend service, Server-rendered app |
| **Bearer-only** | Chỉ verify token, không initiate login | Microservice API (Product, Order) |
| **Service Account** | Machine-to-machine, Client Credentials Grant | Cron jobs, Background workers |

### Khi nào dùng loại nào?

```
Frontend (React/Vue)  ──▶  Public + PKCE + Authorization Code Flow
Backend API Service   ──▶  Bearer-only (chỉ validate JWT)
Service-to-Service    ──▶  Confidential + Client Credentials Grant
Admin CLI/Script      ──▶  Confidential + Direct Access Grant (dev only)
```

## Tạo Realm cho E-Commerce

### Import realm config (JSON)

```json
{
  "realm": "ecommerce",
  "enabled": true,
  "registrationAllowed": true,
  "loginWithEmailAllowed": true,
  "sslRequired": "external",
  "bruteForceProtected": true,
  "maxFailureWaitSeconds": 900,
  "failureFactor": 5,
  "passwordPolicy": "length(8) and digits(1) and upperCase(1) and specialChars(1)",
  "accessTokenLifespan": 300,
  "ssoSessionIdleTimeout": 1800,
  "ssoSessionMaxLifespan": 36000,
  "roles": {
    "realm": [
      { "name": "customer", "description": "Khách hàng — đặt hàng, xem đơn" },
      { "name": "seller", "description": "Người bán — CRUD sản phẩm" },
      { "name": "admin", "description": "Quản trị viên — full access" },
      { "name": "support", "description": "Hỗ trợ KH — xem đơn, refund" }
    ],
    "client": {
      "ecommerce-api": [
        { "name": "product_read", "description": "Đọc sản phẩm" },
        { "name": "product_write", "description": "Tạo/sửa sản phẩm" },
        { "name": "order_read", "description": "Đọc đơn hàng" },
        { "name": "order_manage", "description": "Quản lý đơn hàng" },
        { "name": "stock_manage", "description": "Quản lý kho" }
      ]
    }
  },
  "clientScopes": [
    {
      "name": "ecommerce-scope",
      "protocol": "openid-connect",
      "attributes": { "include.in.token.scope": "true" },
      "protocolMappers": [
        {
          "name": "realm-roles-mapper",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-realm-role-mapper",
          "config": {
            "claim.name": "realm_access.roles",
            "multivalued": "true",
            "id.token.claim": "true",
            "access.token.claim": "true"
          }
        },
        {
          "name": "phone-mapper",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-attribute-mapper",
          "config": {
            "claim.name": "phone",
            "user.attribute": "phone",
            "id.token.claim": "true",
            "access.token.claim": "true"
          }
        }
      ]
    }
  ],
  "defaultDefaultClientScopes": [
    "ecommerce-scope", "profile", "email", "roles"
  ],
  "clients": [
    {
      "clientId": "ecommerce-api",
      "enabled": true,
      "publicClient": false,
      "bearerOnly": true,
      "description": "Backend API services (bearer-only)",
      "defaultClientScopes": ["ecommerce-scope"]
    },
    {
      "clientId": "ecommerce-web",
      "enabled": true,
      "publicClient": true,
      "standardFlowEnabled": true,
      "directAccessGrantsEnabled": false,
      "pkceCodeChallengeMethod": "S256",
      "redirectUris": [
        "http://localhost:3000/*",
        "https://ecommerce.xdev.asia/*"
      ],
      "webOrigins": [
        "http://localhost:3000",
        "https://ecommerce.xdev.asia"
      ],
      "description": "Frontend Web App (public + PKCE)"
    },
    {
      "clientId": "order-service-internal",
      "enabled": true,
      "publicClient": false,
      "serviceAccountsEnabled": true,
      "standardFlowEnabled": false,
      "directAccessGrantsEnabled": false,
      "secret": "change-me-in-production",
      "description": "Service-to-service (Client Credentials Grant)"
    }
  ],
  "users": [
    {
      "username": "customer1",
      "enabled": true,
      "email": "customer1@xdev.asia",
      "firstName": "Customer",
      "lastName": "One",
      "attributes": { "phone": ["0901234567"] },
      "credentials": [
        {
          "type": "password",
          "value": "password123",
          "temporary": false
        }
      ],
      "realmRoles": ["customer"],
      "clientRoles": {
        "ecommerce-api": ["product_read", "order_read"]
      }
    },
    {
      "username": "seller1",
      "enabled": true,
      "email": "seller1@xdev.asia",
      "firstName": "Seller",
      "lastName": "One",
      "credentials": [
        {
          "type": "password",
          "value": "seller123",
          "temporary": false
        }
      ],
      "realmRoles": ["seller"],
      "clientRoles": {
        "ecommerce-api": ["product_read", "product_write"]
      }
    },
    {
      "username": "admin",
      "enabled": true,
      "email": "admin@xdev.asia",
      "credentials": [
        {
          "type": "password",
          "value": "admin123",
          "temporary": false
        }
      ],
      "realmRoles": ["admin"],
      "clientRoles": {
        "ecommerce-api": [
          "product_read", "product_write",
          "order_read", "order_manage", "stock_manage"
        ]
      }
    }
  ]
}
```

### Sử dụng realm import trong Dev Services

```properties
# application.properties
quarkus.keycloak.devservices.realm-path=ecommerce-realm.json
quarkus.keycloak.devservices.port=8180
```

Đặt file `ecommerce-realm.json` trong `src/main/resources/`.

## OIDC — OpenID Connect Flow

### Authorization Code Flow (cho Web App)

```
┌──────────┐     ┌──────────────┐     ┌──────────┐
│  Browser │     │   Keycloak   │     │  Backend  │
│ (React)  │     │  Auth Server │     │  (Quarkus)│
└────┬─────┘     └──────┬───────┘     └────┬──────┘
     │  1. Login click   │                  │
     │──────────────────>│                  │
     │  2. Login page    │                  │
     │<──────────────────│                  │
     │  3. Credentials   │                  │
     │──────────────────>│                  │
     │  4. Auth Code     │                  │
     │<──────────────────│                  │
     │  5. Exchange code ─────────────────>│
     │                   │  6. Token req    │
     │                   │<────────────────│
     │                   │  7. JWT tokens   │
     │                   │────────────────>│
     │  8. Access Token  │                  │
     │<─────────────────────────────────── │
     │  9. API call + Bearer Token         │
     │─────────────────────────────────── >│
     │  10. Verify JWT,  │                  │
     │      return data  │                  │
     │<─────────────────────────────────── │
```

### JWT Token Structure

```json
{
  "header": {
    "alg": "RS256",
    "typ": "JWT",
    "kid": "key-id-from-keycloak"
  },
  "payload": {
    "exp": 1713200000,
    "iat": 1713196400,
    "iss": "https://keycloak.xdev.asia/realms/ecommerce",
    "sub": "user-uuid-from-keycloak",
    "typ": "Bearer",
    "azp": "ecommerce-web",
    "realm_access": {
      "roles": ["customer"]
    },
    "resource_access": {
      "ecommerce-api": {
        "roles": ["product_read", "order_create"]
      }
    },
    "scope": "openid email profile",
    "email": "customer1@xdev.asia",
    "name": "Customer One",
    "preferred_username": "customer1"
  }
}
```

## OIDC Discovery & Token Introspection

### OIDC Discovery Endpoint

Keycloak cung cấp metadata endpoint cho mỗi realm:

```bash
# Discovery endpoint
curl http://localhost:8180/realms/ecommerce/.well-known/openid-configuration | jq .
```

Response chứa tất cả endpoints quan trọng:

```json
{
  "issuer": "http://localhost:8180/realms/ecommerce",
  "authorization_endpoint": "http://localhost:8180/realms/ecommerce/protocol/openid-connect/auth",
  "token_endpoint": "http://localhost:8180/realms/ecommerce/protocol/openid-connect/token",
  "userinfo_endpoint": "http://localhost:8180/realms/ecommerce/protocol/openid-connect/userinfo",
  "jwks_uri": "http://localhost:8180/realms/ecommerce/protocol/openid-connect/certs",
  "introspection_endpoint": "http://localhost:8180/realms/ecommerce/protocol/openid-connect/token/introspect",
  "end_session_endpoint": "http://localhost:8180/realms/ecommerce/protocol/openid-connect/logout",
  "grant_types_supported": [
    "authorization_code", "client_credentials",
    "refresh_token", "password"
  ],
  "response_types_supported": ["code", "id_token", "token"],
  "subject_types_supported": ["public", "pairwise"],
  "id_token_signing_alg_values_supported": ["RS256", "ES256"]
}
```

### Local JWT Validation vs Token Introspection

| | Local JWT Verification | Token Introspection |
|---|---|---|
| **Cách hoạt động** | Download JWKS public key, verify locally | Gọi Keycloak mỗi request |
| **Performance** | Nhanh (cache key, verify local) | Chậm (network call mỗi request) |
| **Revocation** | Không phát hiện revoked token (đợi expire) | Phát hiện ngay |
| **Phù hợp** | Hầu hết microservices | Khi cần revocation ngay lập tức |

```properties
# Mặc định: Local JWT verification (khuyến nghị)
quarkus.oidc.auth-server-url=http://localhost:8180/realms/ecommerce
quarkus.oidc.application-type=service

# Token introspection (khi cần realtime revocation)
# quarkus.oidc.token.verify-access-token-with-user-info=true
# Hoặc Opaque token:
# quarkus.oidc.discovery-enabled=false
# quarkus.oidc.introspection-path=/protocol/openid-connect/token/introspect
```

## Cấu hình OIDC cho mỗi Service

### Product Service

```properties
# product-service/application.properties
quarkus.oidc.auth-server-url=http://localhost:8180/realms/ecommerce
quarkus.oidc.client-id=ecommerce-api
quarkus.oidc.application-type=service
# Service (bearer-only): chỉ verify token, không redirect login
quarkus.oidc.token.issuer=any
```

### Order Service (tương tự)

```properties
# order-service/application.properties
quarkus.oidc.auth-server-url=http://localhost:8180/realms/ecommerce
quarkus.oidc.client-id=ecommerce-api
quarkus.oidc.application-type=service
```

## Test OIDC Flow

### Lấy Access Token bằng curl

```bash
# Direct Access Grant (Resource Owner Password)
# Chỉ dùng cho testing, KHÔNG dùng production!
ACCESS_TOKEN=$(curl -s -X POST \
  http://localhost:8180/realms/ecommerce/protocol/openid-connect/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=password" \
  -d "client_id=ecommerce-web" \
  -d "username=customer1" \
  -d "password=password123" \
  | jq -r '.access_token')

echo $ACCESS_TOKEN

# Gọi API với token
curl -H "Authorization: Bearer $ACCESS_TOKEN" \
  http://localhost:8081/api/v1/products
```

### Decode JWT (dev tool)

```bash
# Decode JWT payload (base64)
echo $ACCESS_TOKEN | cut -d'.' -f2 \
  | base64 -d 2>/dev/null | jq .
```

## Docker Compose — Keycloak Production

### Development mode (nhanh, không cần DB)

```yaml
services:
  keycloak-dev:
    image: quay.io/keycloak/keycloak:26.0
    command: start-dev --import-realm
    environment:
      KEYCLOAK_ADMIN: admin
      KEYCLOAK_ADMIN_PASSWORD: admin
    ports:
      - "8180:8080"
    volumes:
      - ./keycloak/ecommerce-realm.json:/opt/keycloak/data/import/ecommerce-realm.json
```

### Production mode (PostgreSQL, TLS, clustering)

```yaml
services:
  keycloak:
    image: quay.io/keycloak/keycloak:26.0
    command: >
      start
      --import-realm
      --hostname=keycloak.xdev.asia
      --hostname-strict=true
      --http-enabled=false
      --proxy-headers=xforwarded
      --health-enabled=true
      --metrics-enabled=true
    environment:
      KC_DB: postgres
      KC_DB_URL: jdbc:postgresql://keycloak-db:5432/keycloak
      KC_DB_USERNAME: keycloak
      KC_DB_PASSWORD: ${KC_DB_PASSWORD}
      KEYCLOAK_ADMIN: admin
      KEYCLOAK_ADMIN_PASSWORD: ${KEYCLOAK_ADMIN_PASSWORD}
      KC_HTTPS_CERTIFICATE_FILE: /opt/keycloak/conf/cert.pem
      KC_HTTPS_CERTIFICATE_KEY_FILE: /opt/keycloak/conf/key.pem
      KC_LOG_LEVEL: INFO
      KC_CACHE: ispn
      KC_CACHE_STACK: kubernetes
    ports:
      - "8443:8443"
    volumes:
      - ./keycloak/ecommerce-realm.json:/opt/keycloak/data/import/ecommerce-realm.json
      - ./certs:/opt/keycloak/conf
    depends_on:
      keycloak-db:
        condition: service_healthy
    healthcheck:
      test: ["CMD-SHELL", "exec 3<>/dev/tcp/localhost/9000 && echo -e 'GET /health/ready HTTP/1.1\r\nHost: localhost\r\n\r\n' >&3 && cat <&3 | grep -q '\"status\": \"UP\"'"]
      interval: 10s
      timeout: 5s
      retries: 5

  keycloak-db:
    image: postgres:16
    environment:
      POSTGRES_DB: keycloak
      POSTGRES_USER: keycloak
      POSTGRES_PASSWORD: ${KC_DB_PASSWORD}
    volumes:
      - keycloak_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U keycloak"]
      interval: 5s
      timeout: 3s
      retries: 5

volumes:
  keycloak_data:
```

> **Dev vs Production mode**: `start-dev` tắt TLS, dùng H2 in-memory DB, cho phép HTTP. `start` yêu cầu TLS, external DB, và hostname config.

## Realm Export/Import via Admin CLI

### Export realm (backup)

```bash
# Export toàn bộ realm (bao gồm users)
docker exec keycloak /opt/keycloak/bin/kc.sh export \
  --dir /tmp/export \
  --realm ecommerce \
  --users realm_file

# Copy ra host
docker cp keycloak:/tmp/export/ecommerce-realm.json ./backup/
```

### Import realm (restore)

```bash
# Import khi khởi động
docker run --rm \
  -v ./realm-backup:/opt/keycloak/data/import \
  quay.io/keycloak/keycloak:26.0 \
  start-dev --import-realm

# Hoặc runtime import via Admin API
curl -X POST \
  http://localhost:8180/admin/realms \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d @ecommerce-realm.json
```

### Quarkus Dev Services với custom realm

```properties
# application.properties
quarkus.keycloak.devservices.realm-path=ecommerce-realm.json
quarkus.keycloak.devservices.port=8180
# Sử dụng Keycloak image cụ thể
quarkus.keycloak.devservices.image-name=quay.io/keycloak/keycloak:26.0
# Tự động share giữa các services trong dev mode
quarkus.keycloak.devservices.shared=true
quarkus.keycloak.devservices.service-name=keycloak
```

## Bài tập

1. Thêm `quarkus-oidc` dependency, chạy Dev Services, truy cập Keycloak Admin Console
2. Tạo `ecommerce-realm.json` đầy đủ: Realm, Clients (bearer-only + public + service account), Realm Roles, Client Roles, Client Scopes, Users
3. Export realm config từ Keycloak Admin console, so sánh với file JSON ban đầu
4. Lấy Access Token bằng curl (Authorization Code + Direct Access), decode JWT payload
5. Tạo Docker Compose cho Keycloak **production mode** (PostgreSQL, TLS, health checks)
6. Cấu hình OIDC cho Product Service và Order Service
7. Truy cập OIDC Discovery endpoint, đọc hiểu các trường
8. Thử Token Introspection endpoint: so sánh tốc độ với local JWT verification

## Tổng kết

- **Keycloak Dev Services** — zero-config, auto-start container trong dev mode
- **Realm** chứa Users, Roles, Clients — mỗi project 1 realm
- **Client types**: `bearer-only` (backend API), `public` (SPA/mobile), `confidential` (service-to-service)
- **Client Scopes & Protocol Mappers** — control claims trong JWT token
- **OIDC Discovery** — `.well-known/openid-configuration` chứa tất cả endpoints
- **Local JWT vs Introspection** — trade-off giữa performance và revocation
- **OIDC Flow**: Authorization Code + PKCE (web), Client Credentials (service-to-service)
- **JWT Token** chứa user info, realm roles, client roles — được verify bởi Quarkus OIDC
- Realm config qua JSON import giúp reproduce environment nhanh chóng
- **Production**: TLS, PostgreSQL, hostname config, health checks

Bài tiếp theo: OIDC Bearer Token Authentication trong Quarkus.
