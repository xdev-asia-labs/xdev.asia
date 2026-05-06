---
id: 019e2a10-a110-7a01-b001-f1a2b3c4d510
title: 第 10 課：Keycloak — 安裝與設定領域
slug: bai-10-keycloak-cai-dat-cau-hinh-realm
description: 使用開發服務安裝 Keycloak，建立領域、客戶端、使用者、角色。了解 OIDC 流程和 JWT 令牌結構。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 9
section_title: 第 3 部分：Keycloak 的安全性
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: Quarkus 微服務：從基礎知識到生產
  slug: quarkus-microservices-tu-co-ban-den-production
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 程式設計 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：Keycloak — 安裝與設定</tspan>
      <tspan x="60" dy="42">領域</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus 微服務：從基礎知識到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：Keycloak 的安全性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

Keycloak 是最受歡迎的微服務身分和存取管理 (IAM) 解決方案。 Quarkus 透過 **OIDC 擴充** 整合 Keycloak 並提供 **開發服務** — 在開發模式下自動啟動 Keycloak 容器，無需安裝。

## 開發服務 — 自動 Keycloak

### 依賴關係

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-oidc</artifactId>
</dependency>
```

### 最低配置

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

### 開發 UI — Keycloak 控制台

```bash
quarkus dev
# Mở Dev UI: http://localhost:8080/q/dev-ui
# → OpenID Connect → Keycloak Admin (link tự động)
# → Single Page App (test OIDC flow)
```

## Keycloak 中的客戶端類型

|客戶類型 |說明 |範例|
|------------|--------|--------|
| **公開** |沒有秘密，使用PKCE | SPA（React、Vue）、行動應用程式 |
| **機密** |擁有客戶端機密，運行伺服器端 |後端服務，伺服器渲染的應用程式 |
| **僅承載** |只驗證token，不發起登入 |微服務 API（產品、訂單）|
| **服務帳戶** |機器對機器、客戶憑證授予 | Cron 工作、後台工作人員 |

### 什麼時候使用哪種類型？

```
Frontend (React/Vue)  ──▶  Public + PKCE + Authorization Code Flow
Backend API Service   ──▶  Bearer-only (chỉ validate JWT)
Service-to-Service    ──▶  Confidential + Client Credentials Grant
Admin CLI/Script      ──▶  Confidential + Direct Access Grant (dev only)
```

## 創建電子商務領域

### 導入領域配置（JSON）

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

### 在開發服務中使用領域導入

```properties
# application.properties
quarkus.keycloak.devservices.realm-path=ecommerce-realm.json
quarkus.keycloak.devservices.port=8180
```

設定檔案 `ecommerce-realm.json` 在 `src/main/resources/`。

## OIDC — OpenID 連線流程

### 授權程式碼流程（針對 Web 應用程式）

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

### JWT 令牌結構

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

## OIDC 發現和代幣自省

### OIDC 發現端點

Keycloak 為每個領域提供元資料端點：

```bash
# Discovery endpoint
curl http://localhost:8180/realms/ecommerce/.well-known/openid-configuration | jq .
```

回應包含所有重要端點：

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

### 本機 JWT 驗證與令牌內省

| |本地 JWT 驗證 |代幣自省 |
|---|---|---|
| **它是如何運作的** |下載JWKS公鑰，本地驗證 |每次請求都會呼叫 Keycloak |
| **效能** |快速（快取金鑰，驗證本機）|慢（每個請求的網路呼叫）|
| **撤銷** |未偵測到已撤銷的令牌（等待過期）|立即偵測 |
| **適合** |大多數微服務 |當需要立即撤銷時 |

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

## 為每個服務配置OIDC

### 產品服務

```properties
# product-service/application.properties
quarkus.oidc.auth-server-url=http://localhost:8180/realms/ecommerce
quarkus.oidc.client-id=ecommerce-api
quarkus.oidc.application-type=service
# Service (bearer-only): chỉ verify token, không redirect login
quarkus.oidc.token.issuer=any
```

### 訂單服務（類似）

```properties
# order-service/application.properties
quarkus.oidc.auth-server-url=http://localhost:8180/realms/ecommerce
quarkus.oidc.client-id=ecommerce-api
quarkus.oidc.application-type=service
```

## 測試 OIDC 流程

### 使用curl取得存取令牌

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

### 解碼 JWT（開發工具）

```bash
# Decode JWT payload (base64)
echo $ACCESS_TOKEN | cut -d'.' -f2 \
  | base64 -d 2>/dev/null | jq .
```

## Docker Compose — Keycloak 製作

### 開發模式（快速，無DB）

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

### 生產模式（PostgreSQL、TLS、叢集）

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

> **開發與生產模式**： `start-dev` 停用 TLS，使用 H2 記憶體資料庫，啟用 HTTP。 `start` 需要 TLS、外部資料庫和主機名稱配置。

## 透過管理 CLI 進行領域匯出/匯入

### 匯出領域（備份）

```bash
# Export toàn bộ realm (bao gồm users)
docker exec keycloak /opt/keycloak/bin/kc.sh export \
  --dir /tmp/export \
  --realm ecommerce \
  --users realm_file

# Copy ra host
docker cp keycloak:/tmp/export/ecommerce-realm.json ./backup/
```

### 導入領域（恢復）

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

### 具有自訂領域的 Quarkus 開發服務

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

## 練習

1.添加 `quarkus-oidc` 依賴項，運行開發服務，存取 Keycloak 管理控制台
2. 創建 `ecommerce-realm.json` 完整：領域、客戶端（僅承載 + 公共 + 服務帳戶）、領域角色、客戶端角色、客戶端範圍、用戶
3.從Keycloak管理控制台匯出領域配置，與原始JSON檔案進行比較
4.使用curl取得Access Token（授權碼+直接存取），解碼JWT負載
5.為Keycloak**生產模式**建立Docker Compose（PostgreSQL、TLS、健康檢查）
6.為產品服務和訂單服務配置OIDC
7. 存取 OIDC Discovery 端點，讀取字段
8.嘗試Token Introspection端點：與本地JWT驗證比較速度

## 總結

- **Keycloak 開發服務** — 開發模式下的零配置、自動啟動容器
- **領域** 包含使用者、角色、客戶端 — 每個專案 1 個領域
- **客戶類型**： `bearer-only` （後端API）， `public` （SPA/移動）， `confidential` （服務到服務）
- **客戶端範圍和協定映射器** - JWT 令牌中的控制聲明
- **OIDC 發現** — `.well-known/openid-configuration` 包含所有端點
- **本地 JWT 與內省** — 效能與撤銷之間的權衡
- **OIDC 流程**：授權碼 + PKCE（Web）、客戶端憑證（服務到服務）
- **JWT 令牌** 包含使用者資訊、領域角色、客戶端角色 — 由 Quarkus OIDC 驗證
- 透過 JSON 導入進行領域配置有助於快速重現環境
- **生產**：TLS、PostgreSQL、主機名稱配置、運作狀況檢查

下一篇文章：Quarkus 中的 OIDC 承載令牌身份驗證。
