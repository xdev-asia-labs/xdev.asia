---
id: 019d8b30-b122-7001-c001-e0c5f8100122
title: 第 22 課：API 閘道、Nginx 與微服務
slug: bai-22-api-gateway-nginx-va-microservices
description: Keycloak 與 Nginx（lua-resty-openidc/nginx-oidc-module 或 OAuth2 代理）、Kong Gateway（OIDC 外掛程式）、Traefik（ForwardAuth 中間件）、微服務 API 閘道模式、服務帳戶驗證（客戶端憑證授予）、代幣交換器、內部服務識別碼
duration_minutes: 220
is_free: true
video_url: null
sort_order: 22
section_title: 第六部分：整合實際應用
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9020" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9020)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1015" cy="255" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="930" cy="70" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="845" cy="145" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="760" cy="220" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="675" cy="35" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="145" x2="1100" y2="225" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="175" x2="1050" y2="245" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1029.6410161513775,175 1029.6410161513775,215 995,235 960.3589838486224,215 960.3589838486224,175 995,155" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 22 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 22 課：API 閘道、Nginx 與</tspan>
      <tspan x="60" dy="42">微服務</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從基礎到進階的鑰匙斗篷__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：整合實際應用__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_67__HTMLTAG_68___1。帶有 Keycloak 的 API 閘道模式___HTMLTAG_69__HTMLTAG_70___

<p>在微服務架構中，API 閘道可作為所有客戶端請求的單一入口點。與 Keycloak 結合使用時，閘道可處理 <strong> 集中式驗證 </strong> 和 <strong>JWT 傳播 </strong> 到下游服務。 </p>

___預編碼_0___

<table>
<thead>
___HTMLTAG_79__HTMLTAG_80___網關___HTMLTAG_81__HTMLTAG_82___驗證方法___HTMLTAG_83__HTMLTAG_84___優點____HTMLTAG_85__HTMLTAG_86___
</thead>
<tbody>
___HTMLTAG_89__HTMLTAG_90___Nginx + lua-resty-openidc___HTMLTAG_91__HTMLTAG_92___Lua模組OIDC___HTMLTAG_93__HTMLTAG_94___輕量級、高效能___HTMLTAG95__1TAG_96___
___HTMLTAG_97__HTMLTAG_98___Nginx + OAuth2 代理___HTMLTAG_99__HTMLTAG_100___Sidecar 代理___HTMLTAG_101__HTMLTAG_102___設定簡單，不需 Lua____HTMLTAG_101__HTMLTAG_102___設定簡單，不需 Lua____HTMLTAG_103__41TAG_103__4
___HTMLTAG_105__HTMLTAG_106___Kong Gateway___HTMLTAG_107__HTMLTAG_108___OIDC插件____HTMLTAG_109__HTMLTAG_110___企業功能、插件生態系統____HTMLTAG_111__HTMLTAG_112___
___HTMLTAG_113__HTMLTAG_114___Traefik____HTMLTAG_115__HTMLTAG_116___ForwardAuth___HTMLTAG_117__HTMLTAG_118___雲原生、自動發現___HTMLTAG_119__HTMLTAG_120___
</tbody>
</table>

___HTMLTAG_123__HTMLTAG_124___2。 Nginx + Keycloak 整合___HTMLTAG_125__HTMLTAG_126___

___HTMLTAG_127__HTMLTAG_128___2.1 方法 1：lua-resty-openidc___HTMLTAG_129__HTMLTAG_130___

___HTMLTAG_131__HTMLTAG_132___lua-resty-openidc</code> 是 Nginx/OpenResty 的 OpenID Connect 模組，直接在 Nginx 層支援 JWT 驗證、令牌自省和 OIDC 登入流程。 </p>

<h4>2.1.1 安裝 OpenResty</h4>

___預編碼_1___<h4>2.1.2 具有不記名令牌驗證的 Nginx 設定__HTMLTAG_138___

___預編碼_2___

___HTMLTAG_139__HTMLTAG_140___2.2 方法 2：OAuth2 代理 Sidecar___HTMLTAG_141__HTMLTAG_142___

___HTMLTAG_143__HTMLTAG_144___oauth2-proxy</code> 是一個反向代理，透過 OAuth2/OIDC 提供者提供驗證。這種方法不需要 Lua 並且更容易設定：</p>

___預編碼_3___

<h4>2.2.1 OAuth2 代理程式設定__HTMLTAG_148___

___預編碼_4___

<h4>2.2.2 Nginx 與 auth_request</h4>

___預編碼_5___

___HTMLTAG_151__HTMLTAG_152___3。 Kong網關+鑰匙斗篷___HTMLTAG_153__HTMLTAG_154___

___HTMLTAG_155__HTMLTAG_156___3.1 Kong OIDC插件配置___HTMLTAG_157__HTMLTAG_158___

<p>Kong Gateway 支援 OIDC 外掛程式（Kong Enterprise 或社群外掛程式）來驗證來自 Keycloak 的 JWT 令牌：</p>

___預編碼_6___

___HTMLTAG_161__HTMLTAG_162___3.2 Kong 管理 API 設定___HTMLTAG_163__HTMLTAG_164___

<p>透過 Kong 管理 API 而非宣告式進行設定：</p>

___預編碼_7___

___HTMLTAG_167__HTMLTAG_168___4。 Traefik + Keycloak___HTMLTAG_169__HTMLTAG_170___

___HTMLTAG_171__HTMLTAG_172___4.1 ForwardAuth 中間件___HTMLTAG_173__HTMLTAG_174___

<p>Traefik 使用 <strong>ForwardAuth 中間件</strong> 將身分驗證委託給外部服務（OAuth2 代理）：</p>

___預編碼_8___

___預編碼_9___

___HTMLTAG_179__HTMLTAG_180___4.2 帶有 Docker 標籤的 Traefik___HTMLTAG_181__HTMLTAG_182___

___預編碼_10___

___HTMLTAG_183__HTMLTAG_184___5。服務帳戶驗證___HTMLTAG_185__HTMLTAG_186___

___HTMLTAG_187__HTMLTAG_188___5.1 客戶憑證授予___HTMLTAG_189__HTMLTAG_190___

<p>對於服務到服務通訊（沒有使用者上下文），請使用 <strong>客戶端憑證授予</strong>:</p>

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

<h4>5.1.1 Keycloak 客戶端設定__HTMLTAG_196___

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

<h4>5.1.2 取得服務帳號代幣</h4>

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

<h4>5.1.3 Spring Boot 中的服務帳戶</h4>

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

___HTMLTAG_201__HTMLTAG_202___5.2 令牌交換 (RFC 8693)___HTMLTAG_203__HTMLTAG_204___

<p>令牌交換允許服務將使用者令牌交換為具有不同範圍/受眾的新令牌，或在呼叫下游服務時模擬使用者：</p>

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

___HTMLTAG_207__HTMLTAG_208___5.3 內部服務驗證模式___HTMLTAG_209__HTMLTAG_210___<table>
<thead>
___HTMLTAG_213__HTMLTAG_214___模式____HTMLTAG_215__HTMLTAG_216___用例___HTMLTAG_217__HTMLTAG_218_______HTMLTAG_219__HTMLTAG_220________HTMLTAG2121_____
</thead>
<tbody>
___HTMLTAG_225__HTMLTAG_226___JWT 傳播___HTMLTAG_227__HTMLTAG_228___將使用者令牌轉送至下游___HTMLTAG_229__HTMLTAG_230___簡單，保留使用者上下文___HT
___HTMLTAG_235__HTMLTAG_236___客戶端憑證___HTMLTAG_237__HTMLTAG_238___服務到服務，無使用者上下文____HTMLTAG_239__HTMLTAG_240___獨立於使用者工作階段____HTMLTAG_241__4UG_241__41424UU42____ML41__4U424141____
___HTMLTAG_245__HTMLTAG_246___令牌交換____HTMLTAG_247__HTMLTAG_248___模擬、受眾限制____HTMLTAG_249__HTMLTAG_250___使用者上下文+範圍存取____HTMLTAG_2511HTMLTAG_250___用戶上下文+範圍存取____HTMLTAG_2511HTMLTAG_250___ML
___HTMLTAG_255__HTMLTAG_256___mTLS___HTMLTAG_257__HTMLTAG_258___零信任服務網格___HTMLTAG_259__HTMLTAG_260___強身份，無需令牌____HTMLTAG_261_HTMLTAGML_262_______MLTAGML42_____
</tbody>
</table>

___HTMLTAG_267__HTMLTAG_268___6。完整的 Docker Compose 堆疊___HTMLTAG_269__HTMLTAG_270___

<p>Docker Compose 堆疊配有 Keycloak、PostgreSQL、Nginx 閘道和後端服務：</p>

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

___HTMLTAG_273__HTMLTAG_274___6.1 Docker Compose 的 Nginx 設定____HTMLTAG_275__HTMLTAG_276___

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

___HTMLTAG_277__HTMLTAG_278___7。監控與速率限制___HTMLTAG_279__HTMLTAG_280___

___HTMLTAG_281__HTMLTAG_282___7.1 監控服務帳號代幣___HTMLTAG_283__HTMLTAG_284___

___預編碼_20___

___HTMLTAG_285__HTMLTAG_286___7.2 服務帳戶最佳實務___HTMLTAG_287__HTMLTAG_288___<table>
<thead>
___HTMLTAG_291__HTMLTAG_292___#___HTMLTAG_293__HTMLTAG_294___練習___HTMLTAG_295__HTMLTAG_296___說明___HTMLTAG_297__HTMLTAG_298___
</thead>
<tbody>
___HTMLTAG_301__HTMLTAG_302___1___HTMLTAG_303__HTMLTAG_304___短期令牌___HTMLTAG_305__HTMLTAG_306___為服務帳戶設定存取權杖短生命週期（5 分鐘）____HTMLTAG_307__1TAG_307__HT_3088___
___HTMLTAG_309__HTMLTAG_310___2___HTMLTAG_311__HTMLTAG_312___最小權限___HTMLTAG_313__HTMLTAG_314___僅分配所需的最低角色__HTMLTAG_315__HTMLTAG_316___
___HTMLTAG_317__HTMLTAG_318___3___HTMLTAG_319__HTMLTAG_320___輪替機密___HTMLTAG_321__HTMLTAG_322___定期更改client_secret____HTMLTAG_323__HTMLTAG_324___
___HTMLTAG_325__HTMLTAG_326___4___HTMLTAG_327__HTMLTAG_328___令牌快取____HTMLTAG_329__HTMLTAG_330___在客戶端快取令牌，過期前刷新_____HTMLTAG_331__HTMLTAG_332_____HTMLTAG_331__HTMLTAG_332_____HTMLTAG_331__HTMLTAG_332_____HTMLTAG_331__HTMLTAG_332
___HTMLTAG_333__HTMLTAG_334___5___HTMLTAG_335__HTMLTAG_336___單獨的客戶端___HTMLTAG_337__HTMLTAG_338___每個服務使用自己的客戶端，沒有共享憑證_</td>__
___HTMLTAG_341__HTMLTAG_342___6___HTMLTAG_343__HTMLTAG_344___網路策略___HTMLTAG_345__HTMLTAG_346___限制服務之間的網路存取___HTMLTAG_347__HTMLTAG_348___
___HTMLTAG_349__HTMLTAG_350___7___HTMLTAG_351__HTMLTAG_352___審核日誌記錄___HTMLTAG_353__HTMLTAG_354___記錄服務帳戶令牌請求___HTMLTAG_355__HTMLTAG_356___
</tbody>
</table>

___HTMLTAG_359__HTMLTAG_360___7.3 閘道速率限制___HTMLTAG_361__HTMLTAG_362___

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

___HTMLTAG_363__HTMLTAG_364___8。摘要___HTMLTAG_365__HTMLTAG_366___

<table>
<thead>
___HTMLTAG_369__HTMLTAG_370___網關____HTMLTAG_371__HTMLTAG_372___複雜性___HTMLTAG_373__HTMLTAG_374___效能____HTMLTAG_375__HTMLTAG_376____374___效能____HTMLTAG_375__HT__TAG_376___最適合___7HTTAGML____43____
</thead>
<tbody>
___HTMLTAG_381__HTMLTAG_382___Nginx + lua-resty-openidc___HTMLTAG_383__HTMLTAG_384___中____HTMLTAG_385__HTMLTAG_386___非常高___HTMLTAG_387__HTMLTAG_388___高流量，自訂邏輯___MLTAG_38998___
___HTMLTAG_391__HTMLTAG_392___Nginx + OAuth2 代理___HTMLTAG_393__HTMLTAG_394___低___HTMLTAG_395__HTMLTAG_396___高___HTMLTAG_397__HTMLTAG_398___1設定
___HTMLTAG_401__HTMLTAG_402___Kong___HTMLTAG_403__HTMLTAG_404___中___HTMLTAG_405__HTMLTAG_406___高___HTMLTAG_407__HTMLTAG_408___企業、406___72GMLTAG_407__HTMLTAG_408___」企業、外掛程式生態系統___MLGML_40910____4____
___HTMLTAG_411__HTMLTAG_412___Traefik____HTMLTAG_413__HTMLTAG_414___低___HTMLTAG_415__HTMLTAG_416___高___HTMLTAG_417__HTMLTAG_418_____
</tbody>
</table>

___HTMLTAG_423__HTMLTAG_424___API 閘道 + Keycloak 部署清單：___HTMLTAG_425__HTMLTAG_426___<table>
<thead>
___HTMLTAG_429__HTMLTAG_430___#___HTMLTAG_431__HTMLTAG_432___類別____HTMLTAG_433__HTMLTAG_434___狀態____HTMLTAG_435__HTMLTAG_436___
</thead>
<tbody>
___HTMLTAG_439__HTMLTAG_440___1___HTMLTAG_441__HTMLTAG_442___網關處的 JWT 驗證（JWKS 快取）___HTMLTAG_443__HTMLTAG_444____________________</td>__
___HTMLTAG_447__HTMLTAG_448___2___HTMLTAG_449__HTMLTAG_450___將使用者標頭傳播到下游服務____HTMLTAG_451__HTMLTAG_452___________HTMLTAG_453__HTMLTAG_454___
___HTMLTAG_455__HTMLTAG_456___3___HTMLTAG_457__HTMLTAG_458___用於內部通訊的服務帳戶___HTMLTAG_459__HTMLTAG_460_______________________HTMLTAG_461__HTMLTAG_462___
___HTMLTAG_463__HTMLTAG_464___4___HTMLTAG_465__HTMLTAG_466___每個 IP 和每個使用者的速率限制____HTMLTAG_467__HTMLTAG_468_________________HTMLTAG_469__HTMLTAG_470___
___HTMLTAG_471__HTMLTAG_472___5___HTMLTAG_473__HTMLTAG_474___網關處的 CORS 設定___HTMLTAG_475__HTMLTAG_476_______________________HTMLTAG_477__HTMLTAG_478___
___HTMLTAG_479__HTMLTAG_480___6___HTMLTAG_481__HTMLTAG_482___運行狀況檢查端點（繞過驗證）___HTMLTAG_483__HTMLTAG_484___________HTMLTAG_485__HTMLTAG_486___
___HTMLTAG_487__HTMLTAG_488___7___HTMLTAG_489__HTMLTAG_490___網關處的 TLS 終止___HTMLTAG_491__HTMLTAG_492________________HTMLTAG_493__HTMLTAG_491__HTMLTAG_492________________HTMLTAG_493__HTMLTAG_494___
___HTMLTAG_495__HTMLTAG_496___8___HTMLTAG_497__HTMLTAG_498___記錄與監視___HTMLTAG_499__HTMLTAG_500_____________HTMLTAG_501__HTMLTAG_502___
___HTMLTAG_503__HTMLTAG_504___9___HTMLTAG_505__HTMLTAG_506___客戶端秘密輪調策略___HTMLTAG_507__HTMLTAG_508____________HTMLTAG_509__HTMLTAG_510___
___HTMLTAG_511__HTMLTAG_512___10____HTMLTAG_513__HTMLTAG_514___令牌過期與刷新處理___HTMLTAG_515__HTMLTAG_516___________HTMLTAG_517__HTMLTAG_518___
</tbody>
</table>

<p>下一個系列將深入探討 Keycloak 叢集、生產部署和效能調整等進階主題。 </p>