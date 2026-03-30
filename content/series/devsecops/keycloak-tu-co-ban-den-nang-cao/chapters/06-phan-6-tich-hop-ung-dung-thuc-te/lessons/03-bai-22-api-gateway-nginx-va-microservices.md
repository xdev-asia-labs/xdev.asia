---
id: 019d8b30-b122-7001-c001-e0c5f8100122
title: 'Bài 22: API Gateway, Nginx và Microservices'
slug: bai-22-api-gateway-nginx-va-microservices
description: >-
  Keycloak integration với Nginx (lua-resty-openidc/nginx-oidc-module hoặc
  OAuth2 Proxy), Kong Gateway (OIDC plugin), Traefik (ForwardAuth middleware),
  API Gateway pattern cho microservices, service account authentication (client
  credentials grant), token exchange, internal service-to-service authentication
  và complete Docker Compose stack.
duration_minutes: 220
is_free: true
video_url: null
sort_order: 22
section_title: "Phần 6: Tích hợp ứng dụng thực tế"
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak từ Cơ bản đến Nâng cao
  slug: keycloak-tu-co-ban-den-nang-cao
---

<h2 id="1-api-gateway-pattern-voi-keycloak"><strong>1. API Gateway Pattern với Keycloak</strong></h2>

<p>Trong kiến trúc microservices, API Gateway đóng vai trò là điểm vào duy nhất (single entry point) cho tất cả client requests. Khi kết hợp với Keycloak, gateway xử lý <strong>centralized authentication</strong> và <strong>JWT propagation</strong> đến các downstream services.</p>

<pre><code class="language-text">                    ┌──────────────────────────────────────┐
                    │           API Gateway                │
                    │    (Nginx / Kong / Traefik)          │
 ┌────────┐        │                                      │        ┌──────────────┐
 │ Client │────────▶│  1. Validate JWT (Keycloak JWKS)    │───────▶│ Service A    │
 │ (SPA)  │        │  2. Rate Limiting                    │        │ (User API)   │
 └────────┘        │  3. Route to service                 │        └──────────────┘
                    │  4. Propagate JWT header             │
 ┌────────┐        │                                      │        ┌──────────────┐
 │ Mobile │────────▶│                                      │───────▶│ Service B    │
 │  App   │        │                                      │        │ (Order API)  │
 └────────┘        └───────────────┬──────────────────────┘        └──────────────┘
                                    │                                      │
                    ┌───────────────▼──────────────────────┐               │
                    │           Keycloak                    │               │
                    │  - Token Validation (JWKS)           │        ┌──────▼───────┐
                    │  - Token Exchange                    │        │ Service C    │
                    │  - Service Account Tokens            │        │ (Payment)    │
                    └──────────────────────────────────────┘        └──────────────┘
</code></pre>

<table>
<thead>
<tr><th>Gateway</th><th>Auth Method</th><th>Ưu điểm</th></tr>
</thead>
<tbody>
<tr><td>Nginx + lua-resty-openidc</td><td>Lua module OIDC</td><td>Lightweight, high performance</td></tr>
<tr><td>Nginx + OAuth2 Proxy</td><td>Sidecar proxy</td><td>Dễ setup, không cần Lua</td></tr>
<tr><td>Kong Gateway</td><td>OIDC Plugin</td><td>Enterprise features, plugin ecosystem</td></tr>
<tr><td>Traefik</td><td>ForwardAuth</td><td>Cloud-native, auto-discovery</td></tr>
</tbody>
</table>

<h2 id="2-nginx-keycloak-integration"><strong>2. Nginx + Keycloak Integration</strong></h2>

<h3 id="21-approach-1-lua-resty-openidc"><strong>2.1 Approach 1: lua-resty-openidc</strong></h3>

<p><code>lua-resty-openidc</code> là OpenID Connect module cho Nginx/OpenResty, hỗ trợ JWT verification, token introspection và OIDC login flow trực tiếp tại Nginx layer.</p>

<h4>2.1.1 Cài đặt OpenResty</h4>

<pre><code class="language-dockerfile"># Dockerfile.openresty
FROM openresty/openresty:1.25.3.1-jammy

# Cài đặt lua-resty-openidc và dependencies
RUN luarocks install lua-resty-openidc 1.7.6
RUN luarocks install lua-resty-session 4.0.5

COPY nginx.conf /usr/local/openresty/nginx/conf/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
</code></pre>

<h4>2.1.2 Nginx Configuration với Bearer Token Validation</h4>

<pre><code class="language-nginx"># /etc/nginx/conf.d/default.conf

lua_package_path '/usr/local/openresty/lualib/?.lua;;';

# Shared dict cho OIDC session & discovery cache
lua_shared_dict discovery 1m;
lua_shared_dict jwks 1m;
lua_shared_dict introspection 10m;

# Resolver cho DNS (Docker internal DNS)
resolver 127.0.0.11 ipv6=off;

upstream user-service {
    server user-service:8081;
}

upstream order-service {
    server order-service:8082;
}

server {
    listen 80;
    server_name api.example.com;

    # ===== Public endpoints (không cần auth) =====
    location /api/public/ {
        proxy_pass http://user-service;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # ===== Protected endpoints (JWT validation) =====
    location /api/users/ {
        access_by_lua_block {
            local opts = {
                discovery = "http://keycloak:8080/realms/my-realm/.well-known/openid-configuration",
                token_signing_alg_values_expected = { "RS256" },
                accept_none_alg = false,
                accept_unsupported_alg = false,
            }

            -- Verify Bearer token
            local res, err = require("resty.openidc").bearer_jwt_verify(opts)

            if err or not res then
                ngx.status = 401
                ngx.header["Content-Type"] = "application/json"
                ngx.say('{"error": "Unauthorized", "message": "' .. (err or "invalid token") .. '"}')
                return ngx.exit(ngx.HTTP_UNAUTHORIZED)
            end

            -- Propagate user info to upstream via headers
            ngx.req.set_header("X-User-ID", res.sub)
            ngx.req.set_header("X-User-Name", res.preferred_username or "")
            ngx.req.set_header("X-User-Email", res.email or "")

            -- Extract và propagate roles
            local realm_roles = ""
            if res.realm_access and res.realm_access.roles then
                realm_roles = table.concat(res.realm_access.roles, ",")
            end
            ngx.req.set_header("X-User-Roles", realm_roles)
        }

        proxy_pass http://user-service;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /api/orders/ {
        access_by_lua_block {
            local opts = {
                discovery = "http://keycloak:8080/realms/my-realm/.well-known/openid-configuration",
                token_signing_alg_values_expected = { "RS256" },
            }

            local res, err = require("resty.openidc").bearer_jwt_verify(opts)

            if err or not res then
                ngx.status = 401
                ngx.header["Content-Type"] = "application/json"
                ngx.say('{"error": "Unauthorized"}')
                return ngx.exit(ngx.HTTP_UNAUTHORIZED)
            end

            -- Kiểm tra role cần thiết
            local has_role = false
            if res.realm_access and res.realm_access.roles then
                for _, role in ipairs(res.realm_access.roles) do
                    if role == "USER" or role == "ADMIN" then
                        has_role = true
                        break
                    end
                end
            end

            if not has_role then
                ngx.status = 403
                ngx.header["Content-Type"] = "application/json"
                ngx.say('{"error": "Forbidden", "message": "Insufficient permissions"}')
                return ngx.exit(ngx.HTTP_FORBIDDEN)
            end

            ngx.req.set_header("X-User-ID", res.sub)
            ngx.req.set_header("X-User-Name", res.preferred_username or "")
        }

        proxy_pass http://order-service;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
</code></pre>

<h3 id="22-approach-2-oauth2-proxy-sidecar"><strong>2.2 Approach 2: OAuth2 Proxy Sidecar</strong></h3>

<p><code>oauth2-proxy</code> là reverse proxy cung cấp authentication qua OAuth2/OIDC providers. Approach này không cần Lua và dễ setup hơn:</p>

<pre><code class="language-text">┌────────┐     ┌──────────────┐     ┌───────┐     ┌─────────────┐
│ Client │────▶│ Nginx        │────▶│OAuth2 │────▶│ Backend     │
│        │     │ (Reverse     │     │Proxy  │     │ Service     │
│        │     │  Proxy)      │     │       │     │             │
└────────┘     └──────────────┘     └───┬───┘     └─────────────┘
                                        │
                                  ┌─────▼─────┐
                                  │ Keycloak  │
                                  │           │
                                  └───────────┘
</code></pre>

<h4>2.2.1 OAuth2 Proxy Configuration</h4>

<pre><code class="language-yaml"># oauth2-proxy.cfg
provider = "keycloak-oidc"
provider_display_name = "Keycloak"

# Keycloak OIDC configuration
oidc_issuer_url = "http://keycloak:8080/realms/my-realm"
client_id = "oauth2-proxy-client"
client_secret = "your-client-secret"

# Cookie configuration
cookie_secret = "a-32-byte-base64-encoded-secret!"
cookie_secure = false  # true cho HTTPS
cookie_name = "_oauth2_proxy"

# Redirect URL
redirect_url = "http://localhost:4180/oauth2/callback"

# Upstream configuration
upstreams = [
  "http://user-service:8081"
]

# Email domain (cho phép tất cả)
email_domains = ["*"]

# Pass headers to upstream
set_xauthrequest = true
pass_access_token = true
pass_authorization_header = true

# Skip auth cho health endpoints
skip_auth_routes = [
  "^/api/public/",
  "^/health"
]

# Token refresh
cookie_refresh = "1m"
</code></pre>

<h4>2.2.2 Nginx với auth_request</h4>

<pre><code class="language-nginx"># nginx.conf - sử dụng auth_request directive
server {
    listen 80;
    server_name api.example.com;

    # OAuth2 Proxy endpoints
    location /oauth2/ {
        proxy_pass http://oauth2-proxy:4180;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Auth-Request-Redirect $request_uri;
    }

    location = /oauth2/auth {
        proxy_pass http://oauth2-proxy:4180;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Content-Length "";
        proxy_pass_request_body off;
    }

    # Public endpoints
    location /api/public/ {
        proxy_pass http://user-service:8081;
    }

    # Protected endpoints
    location /api/ {
        auth_request /oauth2/auth;

        # Pass auth headers to upstream
        auth_request_set $user $upstream_http_x_auth_request_user;
        auth_request_set $email $upstream_http_x_auth_request_email;
        auth_request_set $access_token $upstream_http_x_auth_request_access_token;

        proxy_set_header X-User $user;
        proxy_set_header X-Email $email;
        proxy_set_header Authorization "Bearer $access_token";

        # Error handling
        error_page 401 = /oauth2/sign_in;

        proxy_pass http://user-service:8081;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
</code></pre>

<h2 id="3-kong-gateway-keycloak"><strong>3. Kong Gateway + Keycloak</strong></h2>

<h3 id="31-kong-oidc-plugin-configuration"><strong>3.1 Kong OIDC Plugin Configuration</strong></h3>

<p>Kong Gateway hỗ trợ OIDC plugin (Kong Enterprise hoặc community plugin) để validate JWT tokens từ Keycloak:</p>

<pre><code class="language-yaml"># kong.yml - Declarative configuration
_format_version: "3.0"

services:
  # ===== User Service =====
  - name: user-service
    url: http://user-service:8081
    routes:
      - name: user-api
        paths:
          - /api/users
        strip_path: false
    plugins:
      - name: openid-connect
        config:
          issuer: http://keycloak:8080/realms/my-realm
          client_id:
            - my-kong-client
          client_secret:
            - your-client-secret
          auth_methods:
            - bearer
          bearer_token_param_type:
            - header
          # Chỉ verify bearer token (Resource Server mode)
          bearer_only: "yes"
          # Cache introspection results
          cache_introspection: true
          cache_token_exchange: true
          # Propagate consumer headers
          upstream_headers_claims:
            - sub
            - preferred_username
            - email
          upstream_headers_names:
            - X-User-ID
            - X-User-Name
            - X-User-Email

  # ===== Order Service =====
  - name: order-service
    url: http://order-service:8082
    routes:
      - name: order-api
        paths:
          - /api/orders
        strip_path: false
    plugins:
      - name: openid-connect
        config:
          issuer: http://keycloak:8080/realms/my-realm
          client_id:
            - my-kong-client
          client_secret:
            - your-client-secret
          auth_methods:
            - bearer
          bearer_only: "yes"
          # Scope và role check
          scopes_required:
            - openid
          roles_required:
            - USER

  # ===== Public Service (no auth) =====
  - name: public-service
    url: http://user-service:8081
    routes:
      - name: public-api
        paths:
          - /api/public
        strip_path: false

# ===== Rate Limiting =====
plugins:
  - name: rate-limiting
    config:
      minute: 100
      policy: local
</code></pre>

<h3 id="32-kong-admin-api-configuration"><strong>3.2 Kong Admin API Configuration</strong></h3>

<p>Cấu hình qua Kong Admin API thay vì declarative:</p>

<pre><code class="language-bash"># 1. Tạo service
curl -X POST http://localhost:8001/services \
  -d name=user-service \
  -d url=http://user-service:8081

# 2. Tạo route
curl -X POST http://localhost:8001/services/user-service/routes \
  -d 'name=user-api' \
  -d 'paths[]=/api/users' \
  -d 'strip_path=false'

# 3. Thêm OIDC plugin cho route
curl -X POST http://localhost:8001/routes/user-api/plugins \
  -d 'name=openid-connect' \
  -d 'config.issuer=http://keycloak:8080/realms/my-realm' \
  -d 'config.client_id=my-kong-client' \
  -d 'config.client_secret=your-client-secret' \
  -d 'config.auth_methods=bearer' \
  -d 'config.bearer_only=yes'

# 4. Thêm rate limiting
curl -X POST http://localhost:8001/routes/user-api/plugins \
  -d 'name=rate-limiting' \
  -d 'config.minute=60' \
  -d 'config.policy=local'
</code></pre>

<h2 id="4-traefik-keycloak"><strong>4. Traefik + Keycloak</strong></h2>

<h3 id="41-forwardauth-middleware"><strong>4.1 ForwardAuth Middleware</strong></h3>

<p>Traefik sử dụng <strong>ForwardAuth middleware</strong> để delegate authentication đến một external service (OAuth2 Proxy):</p>

<pre><code class="language-yaml"># traefik.yml - Static configuration
api:
  dashboard: true
  insecure: true

entryPoints:
  web:
    address: ":80"
  websecure:
    address: ":443"

providers:
  docker:
    exposedByDefault: false
  file:
    filename: /etc/traefik/dynamic.yml
</code></pre>

<pre><code class="language-yaml"># dynamic.yml - Dynamic configuration
http:
  middlewares:
    # ForwardAuth middleware - delegate auth to OAuth2 Proxy
    keycloak-auth:
      forwardAuth:
        address: "http://oauth2-proxy:4180/oauth2/auth"
        trustForwardHeader: true
        authResponseHeaders:
          - X-Auth-Request-User
          - X-Auth-Request-Email
          - X-Auth-Request-Access-Token
          - Authorization

    # Rate limiting
    rate-limit:
      rateLimit:
        average: 100
        burst: 50
        period: 1m

  routers:
    # Public routes (no auth)
    public-api:
      rule: "PathPrefix(`/api/public`)"
      service: user-service
      entryPoints:
        - web

    # Protected routes (with auth)
    user-api:
      rule: "PathPrefix(`/api/users`)"
      service: user-service
      entryPoints:
        - web
      middlewares:
        - keycloak-auth
        - rate-limit

    order-api:
      rule: "PathPrefix(`/api/orders`)"
      service: order-service
      entryPoints:
        - web
      middlewares:
        - keycloak-auth

    # OAuth2 Proxy routes
    oauth2-proxy:
      rule: "PathPrefix(`/oauth2`)"
      service: oauth2-proxy
      entryPoints:
        - web

  services:
    user-service:
      loadBalancer:
        servers:
          - url: "http://user-service:8081"

    order-service:
      loadBalancer:
        servers:
          - url: "http://order-service:8082"

    oauth2-proxy:
      loadBalancer:
        servers:
          - url: "http://oauth2-proxy:4180"
</code></pre>

<h3 id="42-traefik-voi-docker-labels"><strong>4.2 Traefik với Docker Labels</strong></h3>

<pre><code class="language-yaml"># docker-compose.yml snippet cho Traefik + Docker labels
services:
  user-service:
    image: user-service:latest
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.user-api.rule=PathPrefix(`/api/users`)"
      - "traefik.http.routers.user-api.entrypoints=web"
      - "traefik.http.routers.user-api.middlewares=keycloak-auth@file"
      - "traefik.http.services.user-service.loadbalancer.server.port=8081"
</code></pre>

<h2 id="5-service-account-authentication"><strong>5. Service Account Authentication</strong></h2>

<h3 id="51-client-credentials-grant"><strong>5.1 Client Credentials Grant</strong></h3>

<p>Cho service-to-service communication (không có user context), sử dụng <strong>Client Credentials Grant</strong>:</p>

<pre><code class="language-text">┌──────────────┐                    ┌──────────────┐
│ Service A    │                    │ Keycloak     │
│ (Order)      │                    │              │
│              │── 1. client_id ───▶│              │
│              │   + client_secret  │              │
│              │                    │              │
│              │◀── 2. Access ──────│              │
│              │    Token           │              │
└──────┬───────┘                    └──────────────┘
       │
       │ 3. Bearer token
       ▼
┌──────────────┐
│ Service B    │
│ (Payment)    │
│              │
└──────────────┘
</code></pre>

<h4>5.1.1 Keycloak Client Setup</h4>

<pre><code class="language-text">Client Settings cho Service Account:
  Client ID:           order-service
  Client Protocol:     openid-connect
  Access Type:         confidential
  Service Accounts:    ON
  Standard Flow:       OFF (không cần user login)
  Direct Access:       OFF

  Service Account Roles:
    → Assign realm roles hoặc client roles cần thiết
    → Ví dụ: payment-read, payment-write
</code></pre>

<h4>5.1.2 Lấy Service Account Token</h4>

<pre><code class="language-bash"># Client Credentials Grant
curl -s -X POST \
  "http://localhost:8080/realms/my-realm/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=client_credentials" \
  -d "client_id=order-service" \
  -d "client_secret=order-service-secret" \
  | jq .

# Response:
# {
#   "access_token": "eyJhbGci...",
#   "expires_in": 300,
#   "token_type": "Bearer",
#   "not-before-policy": 0,
#   "scope": "profile email"
# }
</code></pre>

<h4>5.1.3 Service Account trong Spring Boot</h4>

<pre><code class="language-java">package com.example.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.time.Instant;
import java.util.Map;

@Service
public class ServiceAccountTokenProvider {

    @Value("${keycloak.auth-server-url}")
    private String keycloakUrl;

    @Value("${keycloak.realm}")
    private String realm;

    @Value("${keycloak.service-account.client-id}")
    private String clientId;

    @Value("${keycloak.service-account.client-secret}")
    private String clientSecret;

    private final RestTemplate restTemplate = new RestTemplate();

    private String cachedToken;
    private Instant tokenExpiry;

    public synchronized String getServiceAccountToken() {
        // Return cached token nếu còn hạn
        if (cachedToken != null && Instant.now().isBefore(tokenExpiry)) {
            return cachedToken;
        }

        // Request new token
        String tokenUrl = String.format(
            "%s/realms/%s/protocol/openid-connect/token",
            keycloakUrl, realm
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap&lt;String, String&gt; body = new LinkedMultiValueMap&lt;&gt;();
        body.add("grant_type", "client_credentials");
        body.add("client_id", clientId);
        body.add("client_secret", clientSecret);

        HttpEntity&lt;MultiValueMap&lt;String, String&gt;&gt; request =
            new HttpEntity&lt;&gt;(body, headers);

        ResponseEntity&lt;Map&gt; response = restTemplate.postForEntity(
            tokenUrl, request, Map.class
        );

        Map&lt;String, Object&gt; tokenResponse = response.getBody();
        cachedToken = (String) tokenResponse.get("access_token");
        int expiresIn = (Integer) tokenResponse.get("expires_in");
        // Refresh 30 giây trước khi hết hạn
        tokenExpiry = Instant.now().plusSeconds(expiresIn - 30);

        return cachedToken;
    }
}
</code></pre>

<pre><code class="language-java">// Sử dụng service account token để gọi downstream service
@Service
public class PaymentServiceClient {

    private final RestTemplate restTemplate = new RestTemplate();
    private final ServiceAccountTokenProvider tokenProvider;

    public PaymentServiceClient(ServiceAccountTokenProvider tokenProvider) {
        this.tokenProvider = tokenProvider;
    }

    public PaymentResult processPayment(PaymentRequest request) {
        String token = tokenProvider.getServiceAccountToken();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity&lt;PaymentRequest&gt; entity = new HttpEntity&lt;&gt;(request, headers);

        ResponseEntity&lt;PaymentResult&gt; response = restTemplate.exchange(
            "http://payment-service:8083/api/payments",
            HttpMethod.POST,
            entity,
            PaymentResult.class
        );

        return response.getBody();
    }
}
</code></pre>

<h3 id="52-token-exchange-rfc-8693"><strong>5.2 Token Exchange (RFC 8693)</strong></h3>

<p>Token Exchange cho phép một service đổi user token thành token mới với scope/audience khác, hoặc impersonate user khi gọi downstream service:</p>

<pre><code class="language-bash"># Bật Token Exchange trong Keycloak
# Realm Settings → Token → Token Exchange: Enable

# Exchange user token thành service-specific token
curl -s -X POST \
  "http://localhost:8080/realms/my-realm/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:token-exchange" \
  -d "client_id=order-service" \
  -d "client_secret=order-service-secret" \
  -d "subject_token=$USER_ACCESS_TOKEN" \
  -d "subject_token_type=urn:ietf:params:oauth:token-type:access_token" \
  -d "audience=payment-service" \
  -d "requested_token_type=urn:ietf:params:oauth:token-type:access_token" \
  | jq .

# Response chứa token mới với audience = payment-service
# Token vẫn giữ user identity nhưng scoped cho payment-service
</code></pre>

<pre><code class="language-text">Luồng Token Exchange:

User ──▶ Order Service (user token)
              │
              ├── Exchange user token → Keycloak
              │   (audience = payment-service)
              │
              ◀── New token (user context, scoped for payment)
              │
              ├── Call Payment Service (exchanged token)
              │
              ◀── Payment result
</code></pre>

<h3 id="53-internal-service-authentication-patterns"><strong>5.3 Internal Service Authentication Patterns</strong></h3>

<table>
<thead>
<tr><th>Pattern</th><th>Use Case</th><th>Pros</th><th>Cons</th></tr>
</thead>
<tbody>
<tr><td>JWT Propagation</td><td>Forward user token to downstream</td><td>Simple, user context preserved</td><td>Token expiry issues</td></tr>
<tr><td>Client Credentials</td><td>Service-to-service, no user context</td><td>Independent of user session</td><td>No user identity</td></tr>
<tr><td>Token Exchange</td><td>Impersonation, audience restriction</td><td>User context + scoped access</td><td>Extra Keycloak call</td></tr>
<tr><td>mTLS</td><td>Zero-trust service mesh</td><td>Strong identity, no tokens needed</td><td>Certificate management</td></tr>
</tbody>
</table>

<h2 id="6-complete-docker-compose-stack"><strong>6. Complete Docker Compose Stack</strong></h2>

<p>Docker Compose stack hoàn chỉnh với Keycloak, PostgreSQL, Nginx gateway và backend services:</p>

<pre><code class="language-yaml"># docker-compose.yml
version: '3.9'

services:
  # ===== PostgreSQL Database =====
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: keycloak
      POSTGRES_USER: keycloak
      POSTGRES_PASSWORD: keycloak_password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U keycloak"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - backend

  # ===== Keycloak =====
  keycloak:
    image: quay.io/keycloak/keycloak:25.0
    command: start-dev --import-realm
    environment:
      KC_DB: postgres
      KC_DB_URL_HOST: postgres
      KC_DB_URL_DATABASE: keycloak
      KC_DB_USERNAME: keycloak
      KC_DB_PASSWORD: keycloak_password
      KC_HOSTNAME: localhost
      KC_HOSTNAME_PORT: 8080
      KC_HTTP_ENABLED: "true"
      KC_HEALTH_ENABLED: "true"
      KEYCLOAK_ADMIN: admin
      KEYCLOAK_ADMIN_PASSWORD: admin
    volumes:
      - ./keycloak/realm-export.json:/opt/keycloak/data/import/realm-export.json
    ports:
      - "8080:8080"
    depends_on:
      postgres:
        condition: service_healthy
    healthcheck:
      test: ["CMD-SHELL", "exec 3<>/dev/tcp/localhost/8080 && echo -e 'GET /health/ready HTTP/1.1\r\nHost: localhost\r\n\r\n' >&3 && cat <&3 | grep -q '200'"]
      interval: 30s
      timeout: 10s
      retries: 5
    networks:
      - backend

  # ===== API Gateway (Nginx + OAuth2 Proxy) =====
  oauth2-proxy:
    image: quay.io/oauth2-proxy/oauth2-proxy:v7.6.0
    command:
      - --provider=keycloak-oidc
      - --provider-display-name=Keycloak
      - --oidc-issuer-url=http://keycloak:8080/realms/my-realm
      - --client-id=oauth2-proxy-client
      - --client-secret=oauth2-proxy-secret
      - --cookie-secret=bXktMzItYnl0ZS1iYXNlNjQtZW5jb2RlZC1zZWNyZXQ=
      - --cookie-secure=false
      - --email-domain=*
      - --upstream=static://202
      - --http-address=0.0.0.0:4180
      - --set-xauthrequest=true
      - --pass-access-token=true
      - --pass-authorization-header=true
      - --skip-auth-route=^/api/public/
      - --skip-provider-button=true
    depends_on:
      keycloak:
        condition: service_healthy
    networks:
      - backend

  nginx:
    image: nginx:1.27-alpine
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/conf.d:/etc/nginx/conf.d:ro
    ports:
      - "80:80"
    depends_on:
      - oauth2-proxy
      - user-service
      - order-service
    networks:
      - backend

  # ===== Backend Services =====
  user-service:
    build:
      context: ./services/user-service
      dockerfile: Dockerfile
    environment:
      SPRING_SECURITY_OAUTH2_RESOURCESERVER_JWT_ISSUER_URI: http://keycloak:8080/realms/my-realm
      SPRING_SECURITY_OAUTH2_RESOURCESERVER_JWT_JWK_SET_URI: http://keycloak:8080/realms/my-realm/protocol/openid-connect/certs
      SERVER_PORT: 8081
    ports:
      - "8081:8081"
    depends_on:
      keycloak:
        condition: service_healthy
    networks:
      - backend

  order-service:
    build:
      context: ./services/order-service
      dockerfile: Dockerfile
    environment:
      SPRING_SECURITY_OAUTH2_RESOURCESERVER_JWT_ISSUER_URI: http://keycloak:8080/realms/my-realm
      SPRING_SECURITY_OAUTH2_RESOURCESERVER_JWT_JWK_SET_URI: http://keycloak:8080/realms/my-realm/protocol/openid-connect/certs
      SERVER_PORT: 8082
      # Service account cho gọi payment-service
      KEYCLOAK_SERVICE_ACCOUNT_CLIENT_ID: order-service
      KEYCLOAK_SERVICE_ACCOUNT_CLIENT_SECRET: order-service-secret
    ports:
      - "8082:8082"
    depends_on:
      keycloak:
        condition: service_healthy
    networks:
      - backend

volumes:
  postgres_data:

networks:
  backend:
    driver: bridge
</code></pre>

<h3 id="61-nginx-configuration-cho-docker-compose"><strong>6.1 Nginx Configuration cho Docker Compose</strong></h3>

<pre><code class="language-nginx"># nginx/conf.d/default.conf
upstream user-service {
    server user-service:8081;
}

upstream order-service {
    server order-service:8082;
}

upstream oauth2-proxy {
    server oauth2-proxy:4180;
}

server {
    listen 80;
    server_name localhost;

    # ===== OAuth2 Proxy endpoints =====
    location /oauth2/ {
        proxy_pass http://oauth2-proxy;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Auth-Request-Redirect $request_uri;
    }

    location = /oauth2/auth {
        proxy_pass http://oauth2-proxy;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Content-Length "";
        proxy_pass_request_body off;
    }

    # ===== Public APIs (no auth) =====
    location /api/public/ {
        proxy_pass http://user-service;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # ===== Protected: User APIs =====
    location /api/users {
        auth_request /oauth2/auth;
        auth_request_set $user $upstream_http_x_auth_request_user;
        auth_request_set $email $upstream_http_x_auth_request_email;
        auth_request_set $token $upstream_http_x_auth_request_access_token;

        proxy_set_header X-User $user;
        proxy_set_header X-Email $email;
        proxy_set_header Authorization "Bearer $token";

        error_page 401 = /oauth2/sign_in;

        proxy_pass http://user-service;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    # ===== Protected: Order APIs =====
    location /api/orders {
        auth_request /oauth2/auth;
        auth_request_set $token $upstream_http_x_auth_request_access_token;

        proxy_set_header Authorization "Bearer $token";

        error_page 401 = /oauth2/sign_in;

        proxy_pass http://order-service;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # ===== Health check =====
    location /health {
        return 200 '{"status":"UP"}';
        add_header Content-Type application/json;
    }
}
</code></pre>

<h2 id="7-monitoring-va-rate-limiting"><strong>7. Monitoring và Rate Limiting</strong></h2>

<h3 id="71-monitor-service-account-tokens"><strong>7.1 Monitor Service Account Tokens</strong></h3>

<pre><code class="language-bash"># Kiểm tra active sessions cho service account
curl -s "http://localhost:8080/admin/realms/my-realm/clients/$CLIENT_UUID/service-account-user" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq .

# Liệt kê sessions
curl -s "http://localhost:8080/admin/realms/my-realm/users/$SERVICE_ACCOUNT_USER_ID/sessions" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq .

# Revoke tất cả sessions của service account
curl -X POST \
  "http://localhost:8080/admin/realms/my-realm/users/$SERVICE_ACCOUNT_USER_ID/logout" \
  -H "Authorization: Bearer $ADMIN_TOKEN"
</code></pre>

<h3 id="72-service-account-best-practices"><strong>7.2 Service Account Best Practices</strong></h3>

<table>
<thead>
<tr><th>#</th><th>Practice</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Short-lived tokens</td><td>Set Access Token Lifespan ngắn (5 phút) cho service accounts</td></tr>
<tr><td>2</td><td>Least privilege</td><td>Chỉ assign roles tối thiểu cần thiết</td></tr>
<tr><td>3</td><td>Rotate secrets</td><td>Thay đổi client_secret định kỳ</td></tr>
<tr><td>4</td><td>Token caching</td><td>Cache token phía client, refresh trước khi hết hạn</td></tr>
<tr><td>5</td><td>Separate clients</td><td>Mỗi service dùng client riêng, không share credentials</td></tr>
<tr><td>6</td><td>Network policies</td><td>Restrict network access giữa services</td></tr>
<tr><td>7</td><td>Audit logging</td><td>Log service account token requests</td></tr>
</tbody>
</table>

<h3 id="73-rate-limiting-tai-gateway"><strong>7.3 Rate Limiting tại Gateway</strong></h3>

<pre><code class="language-nginx"># Nginx rate limiting
http {
    # Định nghĩa rate limit zones
    # $binary_remote_addr: limit per IP
    limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;

    # Limit per authenticated user (từ JWT sub claim)
    limit_req_zone $http_x_user_id zone=user_limit:10m rate=30r/s;

    server {
        # Apply rate limiting cho API endpoints
        location /api/ {
            limit_req zone=api_limit burst=20 nodelay;
            limit_req zone=user_limit burst=50 nodelay;

            limit_req_status 429;

            # Custom error response cho rate limit
            error_page 429 = @rate_limited;
            # ... proxy_pass ...
        }

        location @rate_limited {
            default_type application/json;
            return 429 '{"error": "Too Many Requests", "message": "Rate limit exceeded. Please retry after a moment."}';
        }
    }
}
</code></pre>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<table>
<thead>
<tr><th>Gateway</th><th>Complexity</th><th>Performance</th><th>Best For</th></tr>
</thead>
<tbody>
<tr><td>Nginx + lua-resty-openidc</td><td>Medium</td><td>Very High</td><td>High-traffic, custom logic</td></tr>
<tr><td>Nginx + OAuth2 Proxy</td><td>Low</td><td>High</td><td>Quick setup, simple auth</td></tr>
<tr><td>Kong</td><td>Medium</td><td>High</td><td>Enterprise, plugin ecosystem</td></tr>
<tr><td>Traefik</td><td>Low</td><td>High</td><td>Cloud-native, Kubernetes</td></tr>
</tbody>
</table>

<p><strong>Checklist triển khai API Gateway + Keycloak:</strong></p>

<table>
<thead>
<tr><th>#</th><th>Hạng mục</th><th>Trạng thái</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>JWT validation tại gateway (JWKS caching)</td><td>☐</td></tr>
<tr><td>2</td><td>Propagate user headers đến downstream services</td><td>☐</td></tr>
<tr><td>3</td><td>Service accounts cho internal communication</td><td>☐</td></tr>
<tr><td>4</td><td>Rate limiting per IP và per user</td><td>☐</td></tr>
<tr><td>5</td><td>CORS configuration tại gateway</td><td>☐</td></tr>
<tr><td>6</td><td>Health check endpoints (bypass auth)</td><td>☐</td></tr>
<tr><td>7</td><td>TLS termination tại gateway</td><td>☐</td></tr>
<tr><td>8</td><td>Logging và monitoring</td><td>☐</td></tr>
<tr><td>9</td><td>Client secret rotation strategy</td><td>☐</td></tr>
<tr><td>10</td><td>Token expiry và refresh handling</td><td>☐</td></tr>
</tbody>
</table>

<p>Series tiếp theo sẽ đi sâu vào các chủ đề nâng cao như Keycloak clustering, production deployment và performance tuning.</p>
