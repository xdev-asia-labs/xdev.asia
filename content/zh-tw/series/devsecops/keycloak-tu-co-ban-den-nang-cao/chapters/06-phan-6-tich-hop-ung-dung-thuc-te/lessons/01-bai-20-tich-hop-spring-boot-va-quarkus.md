---
id: 019d8b30-b120-7001-c001-e0c5f8100120
title: 第 20 課：整合 Spring Boot 和 Quarkus
slug: bai-20-tich-hop-spring-boot-va-quarkus
description: 使用 Spring Security OAuth2 資源伺服器 (spring-boot-starter-oauth2-resource-server) 將 Keycloak 與 Spring Boot 3 集成，配置 JWT 驗證、自定義 JwtAuthenticationConverter、realm_access/resource_access 聲明的角色映射、Spring Security 方法級授權使用 (PoidAquuth) 將擴充功能、Pt） Testcontainers 進行測試。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 20
section_title: 第六部分：整合實際應用
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8086" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8086)"/>

  <!-- Decorations -->
  <g>
    <circle cx="784" cy="122" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="968" cy="66" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="652" cy="270" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="836" cy="214" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="1020" cy="158" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="82" x2="1100" y2="162" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="112" x2="1050" y2="182" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1014.0429399400242,163.5 1014.0429399400242,200.5 982,219 949.9570600599758,200.5 949.9570600599758,163.5 982,145" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 20 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 20 課：整合 Spring Boot 與 Quarkus__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：整合實際應用__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_65__HTMLTAG_66___1。後端整合概述___HTMLTAG_67__HTMLTAG_68___

<p>Keycloak 提供標準的 OAuth2/OIDC 機制，允許與任何支援 JWT 驗證的後端框架整合。在本文中，我們將整合 Java 生態系統中兩個最受歡迎的框架：<strong>Spring Boot 3</strong> 和 <strong>Quarkus</strong>.</p>

<table>
<thead>
___HTMLTAG_77__HTMLTAG_78___框架___HTMLTAG_79__HTMLTAG_80___函式庫___HTMLTAG_81__HTMLTAG_82___方法___HTMLTAG_83__HTMLTAG_84___
</thead>
<tbody>
___HTMLTAG_87__HTMLTAG_88___Spring Boot 3___HTMLTAG_89__HTMLTAG_90__HTMLTAG_91___spring-boot-starter-oauth2-resource-server___HTMLTAG_92__HTMLTAG_93__HTMLTAG_94___JML___GML4UU​​S____​​UTU​​US_U​​USU​​TUUU​​U感興趣感興趣
___HTMLTAG_97__HTMLTAG_98___Quarkus___HTMLTAG_99__HTMLTAG_100__HTMLTAG_101___quarkus-oidc___HTMLTAG_102__HTMLTAG_103__HTMLTAG_104___HTMLTAG_102__HTMLTAG_103__HTMLTAG_104_____DC
</tbody>
</table>

<p>架構概述：</p>

___預編碼_0___

___HTMLTAG_111__HTMLTAG_112___2。 Spring Boot 3 + Keycloak 整合___HTMLTAG_113__HTMLTAG_114___

___HTMLTAG_115__HTMLTAG_116___2.1 Maven 依賴項___HTMLTAG_117__HTMLTAG_118___

___預編碼_1___

___HTMLTAG_119__HTMLTAG_120___重要說明：</strong> 從 Keycloak 20+ 開始，專用 Spring Boot 適配器 (<code>keycloak-spring-boot-starter</code>ML_1231141412370 ___123__124123__12 ___123__124___123____124123____。目前的標準方法是使用 Spring Security 的 <code>spring-boot-starter-oauth2-resource-server</code>.</p>

___HTMLTAG_129__HTMLTAG_130___2.2 Application.yml 設定___HTMLTAG_131__HTMLTAG_132___

___預編碼_2___

<p>屬性解釋：</p><table>
<thead>
___HTMLTAG_137__HTMLTAG_138___屬性___HTMLTAG_139__HTMLTAG_140___說明___HTMLTAG_141__HTMLTAG_142___
</thead>
<tbody>
___HTMLTAG_145__HTMLTAG_146__HTMLTAG_147___issuer-uri___HTMLTAG_148__HTMLTAG_149__HTMLTAG_150___Keycloak 領域的 URI，用於驗證 JWT 中的 <code>1____HT聲明___HTMLTAG_153__HTMLTAG_154___
___HTMLTAG_155__HTMLTAG_156__HTMLTAG_157___jwk-set-uri___HTMLTAG_158__HTMLTAG_159__HTMLTAG_160___端點包含用於驗證 JWT 簽章的公用金鑰 (JWKS)____HTMLTAG_16162162162162122_____
</tbody>
</table>

___HTMLTAG_165__HTMLTAG_166___2.3 安全設定___HTMLTAG_167__HTMLTAG_168___

___預編碼_3___

___HTMLTAG_169__HTMLTAG_170___2.4 自訂 JwtAuthenticationConverter___HTMLTAG_171__HTMLTAG_172___

<p>Keycloak 根據特殊結構儲存 JWT 聲明中的角色。需要自訂轉換器來提取正確的角色：</p>

___預編碼_4___

___預編碼_5___

<p>角色映射的工作原理：</p>

___預編碼_6___

___HTMLTAG_177__HTMLTAG_178___2.5 具有 RBAC 的 REST 控制器___HTMLTAG_179__HTMLTAG_180___

___預編碼_7___

___HTMLTAG_181__HTMLTAG_182___2.6 CORS 設定___HTMLTAG_183__HTMLTAG_184___

<p>前端（React/Angular）呼叫後端API時，需要設定CORS：</p>

___預編碼_8___

<p>將 CORS 加入到 <code>SecurityFilterChain</code>:</p>

___預編碼_9___

___HTMLTAG_191__HTMLTAG_192___2.7 處理令牌過期___HTMLTAG_193__HTMLTAG_194___

<p>Spring Security 自動驗證 <code>exp</code> 聲明。當令牌過期時，伺服器傳回 HTTP 401:</p>

___預編碼_10___

<p>已在 <code>SecurityFilterChain</code> 中註冊：</p>

<pre><code class="language-java">// Trong SecurityConfig
@Autowired
private CustomAuthenticationEntryPoint authEntryPoint;

// Trong securityFilterChain()
.oauth2ResourceServer(oauth2 -> oauth2
    .jwt(jwt -> jwt
        .jwtAuthenticationConverter(jwtAuthenticationConverter())
    )
    .authenticationEntryPoint(authEntryPoint)
)
</code></pre>

___HTMLTAG_203__HTMLTAG_204___3。 Quarkus + Keycloak 整合___HTMLTAG_205__HTMLTAG_206___

___HTMLTAG_207__HTMLTAG_208___3.1 Quarkus OIDC 擴充___HTMLTAG_209__HTMLTAG_210___

<p>Quarkus 提供了 <code>quarkus-oidc</code> 與 Keycloak 整合的擴充：</p>

<pre><code class="language-xml">&lt;!-- pom.xml --&gt;
&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
        &lt;artifactId&gt;quarkus-oidc&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
        &lt;artifactId&gt;quarkus-rest&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- Optional: Keycloak Authorization Policy Enforcer --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
        &lt;artifactId&gt;quarkus-keycloak-authorization&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!-- Test --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
        &lt;artifactId&gt;quarkus-test-keycloak-server&lt;/artifactId&gt;
        &lt;scope&gt;test&lt;/scope&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre>

___HTMLTAG_215__HTMLTAG_216___3.2 應用程式屬性___HTMLTAG_217__HTMLTAG_218___

<pre><code class="language-properties"># src/main/resources/application.properties

# ===== OIDC Configuration =====
quarkus.oidc.auth-server-url=http://localhost:8080/realms/my-realm
quarkus.oidc.client-id=my-quarkus-client
quarkus.oidc.credentials.secret=my-client-secret

# Application type: service (Resource Server) hoặc web-app (OIDC login)
quarkus.oidc.application-type=service

# Token verification
quarkus.oidc.token.issuer=http://localhost:8080/realms/my-realm
quarkus.oidc.token.audience=my-quarkus-client

# Role mapping - Keycloak roles source
quarkus.oidc.roles.role-claim-path=realm_access/roles
quarkus.oidc.roles.source=accesstoken

# ===== HTTP Configuration =====
quarkus.http.port=8081
quarkus.http.cors=true
quarkus.http.cors.origins=http://localhost:3000,http://localhost:4200
quarkus.http.cors.methods=GET,POST,PUT,DELETE,OPTIONS
quarkus.http.cors.headers=Authorization,Content-Type
</code></pre>

___HTMLTAG_219__HTMLTAG_220___3.3 具有 @RolesAllowed 的 REST 資源___HTMLTAG_221__HTMLTAG_222___

<pre><code class="language-java">package com.example.resource;

import io.quarkus.security.Authenticated;
import io.quarkus.security.identity.SecurityIdentity;
import jakarta.annotation.security.PermitAll;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.Map;
import java.util.Set;

import org.eclipse.microprofile.jwt.JsonWebToken;

@Path("/api")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class DemoResource {

    @Inject
    SecurityIdentity securityIdentity;

    @Inject
    JsonWebToken jwt;

    // ========== Public ==========

    @GET
    @Path("/public/health")
    @PermitAll
    public Response health() {
        return Response.ok(Map.of("status", "UP")).build();
    }

    // ========== Authenticated ==========

    @GET
    @Path("/me")
    @Authenticated
    public Response getCurrentUser() {
        return Response.ok(Map.of(
            "username", jwt.getClaim("preferred_username"),
            "email", jwt.getClaim("email"),
            "roles", securityIdentity.getRoles(),
            "token_id", jwt.getTokenID()
        )).build();
    }

    // ========== Role-based ==========

    @GET
    @Path("/users")
    @RolesAllowed({"USER", "ADMIN"})
    public Response getUsers() {
        return Response.ok(Map.of(
            "message", "User list - USER and ADMIN roles"
        )).build();
    }

    @POST
    @Path("/users")
    @RolesAllowed("ADMIN")
    public Response createUser(Map&lt;String, String&gt; user) {
        return Response.ok(Map.of(
            "message", "User created",
            "username", user.getOrDefault("username", "unknown")
        )).build();
    }

    @GET
    @Path("/admin/dashboard")
    @RolesAllowed("ADMIN")
    public Response adminDashboard() {
        return Response.ok(Map.of(
            "message", "Admin Dashboard - ADMIN only",
            "identity", securityIdentity.getPrincipal().getName()
        )).build();
    }
}
</code></pre>

___HTMLTAG_223__HTMLTAG_224___3.4 多租用戶 OIDC 設定___HTMLTAG_225__HTMLTAG_226___

<p>Quarkus 支援需要連接多個 Keycloak 領域的 SaaS 系統的多租戶 OIDC：</p>

<pre><code class="language-properties"># application.properties - Multi-tenant setup

# Default tenant
quarkus.oidc.auth-server-url=http://localhost:8080/realms/default-realm
quarkus.oidc.client-id=default-client
quarkus.oidc.application-type=service

# Tenant A
quarkus.oidc.tenant-a.auth-server-url=http://localhost:8080/realms/tenant-a
quarkus.oidc.tenant-a.client-id=tenant-a-client
quarkus.oidc.tenant-a.credentials.secret=tenant-a-secret
quarkus.oidc.tenant-a.application-type=service

# Tenant B
quarkus.oidc.tenant-b.auth-server-url=http://localhost:8080/realms/tenant-b
quarkus.oidc.tenant-b.client-id=tenant-b-client
quarkus.oidc.tenant-b.credentials.secret=tenant-b-secret
quarkus.oidc.tenant-b.application-type=service
</code></pre>

<pre><code class="language-java">package com.example.config;

import io.quarkus.oidc.OidcTenantConfig;
import io.quarkus.oidc.TenantResolver;
import io.vertx.ext.web.RoutingContext;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class CustomTenantResolver implements TenantResolver {

    @Override
    public String resolve(RoutingContext context) {
        // Resolve tenant từ request path
        String path = context.request().path();

        if (path.startsWith("/api/tenant-a")) {
            return "tenant-a";
        }
        if (path.startsWith("/api/tenant-b")) {
            return "tenant-b";
        }

        // Hoặc resolve từ header
        String tenantHeader = context.request().getHeader("X-Tenant-ID");
        if (tenantHeader != null) {
            return tenantHeader;
        }

        // Default tenant
        return null;
    }
}
</code></pre>

___HTMLTAG_229__HTMLTAG_230___3.5 Keycloak 授權策略執行者___HTMLTAG_231__HTMLTAG_232___

<p>使用 <code>quarkus-keycloak-authorization</code> 強制執行 Keycloak 授權服務策略：</p>

<pre><code class="language-properties"># application.properties
quarkus.keycloak.policy-enforcer.enable=true
quarkus.keycloak.policy-enforcer.enforcement-mode=ENFORCING

# Policy paths
quarkus.keycloak.policy-enforcer.paths.users.path=/api/users/*
quarkus.keycloak.policy-enforcer.paths.users.enforcement-mode=ENFORCING

quarkus.keycloak.policy-enforcer.paths.admin.path=/api/admin/*
quarkus.keycloak.policy-enforcer.paths.admin.enforcement-mode=ENFORCING

quarkus.keycloak.policy-enforcer.paths.public.path=/api/public/*
quarkus.keycloak.policy-enforcer.paths.public.enforcement-mode=DISABLED
</code></pre>

___HTMLTAG_237__HTMLTAG_238___4。使用測試容器進行測試___HTMLTAG_239__HTMLTAG_240___

___HTMLTAG_241__HTMLTAG_242___4.1 Spring Boot + Testcontainers Keycloak___HTMLTAG_243__HTMLTAG_244___

<p>使用 <code>testcontainers-keycloak</code> 在整合測試中執行真正的 Keycloak：</p><pre><code class="language-java">package com.example;

import com.github.dasniko.testcontainers.keycloak.KeycloakContainer;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@Testcontainers
class KeycloakIntegrationTest {

    @Container
    static KeycloakContainer keycloak = new KeycloakContainer("quay.io/keycloak/keycloak:25.0")
            .withRealmImportFile("test-realm.json");

    @Autowired
    MockMvc mockMvc;

    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.security.oauth2.resourceserver.jwt.issuer-uri",
            () -> keycloak.getAuthServerUrl() + "/realms/test-realm");
        registry.add("spring.security.oauth2.resourceserver.jwt.jwk-set-uri",
            () -> keycloak.getAuthServerUrl()
                + "/realms/test-realm/protocol/openid-connect/certs");
    }

    static String adminToken;
    static String userToken;

    @BeforeAll
    static void obtainTokens() {
        // Lấy admin token
        adminToken = getAccessToken("admin-user", "admin-pass");
        // Lấy user token
        userToken = getAccessToken("regular-user", "user-pass");
    }

    static String getAccessToken(String username, String password) {
        // Sử dụng Keycloak Admin Client hoặc HTTP request
        // để lấy token từ Keycloak container
        String tokenEndpoint = keycloak.getAuthServerUrl()
            + "/realms/test-realm/protocol/openid-connect/token";

        // HTTP POST to token endpoint
        // grant_type=password&client_id=test-client
        // &username=...&password=...
        // Return access_token from response

        // (Implementation chi tiết sử dụng RestTemplate hoặc WebClient)
        return ""; // Placeholder
    }

    @Test
    void publicEndpoint_shouldReturnOk() throws Exception {
        mockMvc.perform(get("/api/public/health"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("UP"));
    }

    @Test
    void protectedEndpoint_withoutToken_shouldReturn401() throws Exception {
        mockMvc.perform(get("/api/me"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void protectedEndpoint_withValidToken_shouldReturnOk() throws Exception {
        mockMvc.perform(get("/api/me")
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + userToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.username").exists());
    }

    @Test
    void adminEndpoint_withUserToken_shouldReturn403() throws Exception {
        mockMvc.perform(get("/api/admin/dashboard")
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + userToken))
                .andExpect(status().isForbidden());
    }

    @Test
    void adminEndpoint_withAdminToken_shouldReturnOk() throws Exception {
        mockMvc.perform(get("/api/admin/dashboard")
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + adminToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.message").exists());
    }
}
</code></pre>

___HTMLTAG_249__HTMLTAG_250___4.2 測驗領域 JSON___HTMLTAG_251__HTMLTAG_252___

<p>建立檔案 <code>src/test/resources/test-realm.json</code> 匯入用於測試的領域：</p>

<pre><code class="language-json">{
  "realm": "test-realm",
  "enabled": true,
  "clients": [
    {
      "clientId": "test-client",
      "enabled": true,
      "publicClient": true,
      "directAccessGrantsEnabled": true,
      "redirectUris": ["*"]
    }
  ],
  "roles": {
    "realm": [
      { "name": "ADMIN", "composite": false },
      { "name": "USER", "composite": false }
    ]
  },
  "users": [
    {
      "username": "admin-user",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "admin-pass", "temporary": false }
      ],
      "realmRoles": ["ADMIN", "USER"]
    },
    {
      "username": "regular-user",
      "enabled": true,
      "credentials": [
        { "type": "password", "value": "user-pass", "temporary": false }
      ],
      "realmRoles": ["USER"]
    }
  ]
}
</code></pre>

___HTMLTAG_257__HTMLTAG_258___4.3 使用模擬 JWT 進行單元測試___HTMLTAG_259__HTMLTAG_260___

<p>對於沒有真正 Keycloak 的單元測試，請使用 <code>@WithMockUser</code> 或自訂 JWT:</p>

___預編碼_20___

___HTMLTAG_265__HTMLTAG_266___5。最佳實務與故障排除___HTMLTAG_267__HTMLTAG_268___

___HTMLTAG_269__HTMLTAG_270___5.1 最佳實務___HTMLTAG_271__HTMLTAG_272___

<table>
<thead>
___HTMLTAG_275__HTMLTAG_276___#___HTMLTAG_277__HTMLTAG_278___練習___HTMLTAG_279__HTMLTAG_280___說明___HTMLTAG_281__HTMLTAG_282___
</thead>
<tbody>
___HTMLTAG_285__HTMLTAG_286___1___HTMLTAG_287__HTMLTAG_288___使用領域角色___HTMLTAG_289__HTMLTAG_290___優先權<code>realm_access.rolesTAG_290___優先權<code>realm_access。
___HTMLTAG_295__HTMLTAG_296___2___HTMLTAG_297__HTMLTAG_298___無狀態會話___HTMLTAG_299__HTMLTAG_300___一律使用 <code>SessionCreationPolicy.STATELESSHTMLTAP. API___HTMLTAG_303__HTMLTAG_304___
___HTMLTAG_305__HTMLTAG_306___3___HTMLTAG_307__HTMLTAG_308___對 API 停用 CSRF___HTMLTAG_309__HTMLTAG_310___使用 JWT 不記名權杖時不需要 CSRF____HTMLTAG_311110G_31112G_3112
___HTMLTAG_313__HTMLTAG_314___4___HTMLTAG_315__HTMLTAG_316___Token驗證快取___HTMLTAG_317__HTMLTAG_318___Spring Security自緩存JWK集，無需為每個請求調用
___HTMLTAG_321__HTMLTAG_322___5___HTMLTAG_323__HTMLTAG_324___基於聲明的授權___HTMLTAG_325__HTMLTAG_326___使用 <code>@PreAuthorize</code>___進行複雜的邏輯雜項___HTMLTAG_329__HTMLTAG_330___
___HTMLTAG_331__HTMLTAG_332___6___HTMLTAG_333__HTMLTAG_334___錯誤處理___HTMLTAG_335__HTMLTAG_336___自訂<code>AuthenticationEntryPoint</code>ML_MLTAG_337___AuthenticationEntryPoint</code>ML____338____3030____]
___HTMLTAG_341__HTMLTAG_342___7___HTMLTAG_343__HTMLTAG_344___測試覆蓋率___HTMLTAG_345__HTMLTAG_346___單元測試（模擬 JWT）和整合測試（測試容器）的組合___HTMLTAG_3478___MLTAG_3478___
</tbody>
</table>

___HTMLTAG_351__HTMLTAG_352___5.2 常見問題疑慮___HTMLTAG_353__HTMLTAG_354___

<pre><code class="language-text">Lỗi: "An error occurred while attempting to decode the Jwt"
→ Kiểm tra issuer-uri có đúng realm URL không
→ Đảm bảo Keycloak server đang chạy và accessible

Lỗi: "Jwt expired"
→ Token đã hết hạn, client cần refresh token
→ Kiểm tra Access Token Lifespan trong Keycloak Realm Settings

Lỗi: "Access Denied" dù đúng role
→ Kiểm tra role name trong JWT có match với @PreAuthorize không
→ Debug: log SecurityContext.getAuthentication().getAuthorities()
→ Kiểm tra KeycloakRoleConverter có prefix "ROLE_" đúng không

Lỗi: "CORS error" khi gọi từ frontend
→ Kiểm tra CorsConfiguration có include frontend origin không
→ Đảm bảo Authorization header được allow
</code></pre>

___HTMLTAG_355__HTMLTAG_356___5.3 捲曲測試指令___HTMLTAG_357__HTMLTAG_358___

<pre><code class="language-bash"># 1. Lấy Access Token từ Keycloak
ACCESS_TOKEN=$(curl -s -X POST \
  "http://localhost:8080/realms/my-realm/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=password" \
  -d "client_id=my-client" \
  -d "username=admin" \
  -d "password=admin" \
  | jq -r '.access_token')

echo $ACCESS_TOKEN

# 2. Decode JWT (kiểm tra claims)
echo $ACCESS_TOKEN | cut -d'.' -f2 | base64 -d 2>/dev/null | jq .

# 3. Gọi public endpoint
curl -s http://localhost:8081/api/public/health | jq .

# 4. Gọi protected endpoint với token
curl -s http://localhost:8081/api/me \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .

# 5. Gọi admin endpoint
curl -s http://localhost:8081/api/admin/dashboard \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .

# 6. Gọi endpoint không có token (expect 401)
curl -s -o /dev/null -w "%{http_code}" http://localhost:8081/api/me
</code></pre>

___HTMLTAG_359__HTMLTAG_360___6。摘要___HTMLTAG_361__HTMLTAG_362___<table>
<thead>
___HTMLTAG_365__HTMLTAG_366___標準____HTMLTAG_367__HTMLTAG_368___Spring Boot 3___HTMLTAG_369__HTMLTAG_370___Quarkus___HTMLTAG_371__HTMLTAG_372___
</thead>
<tbody>
___HTMLTAG_375__HTMLTAG_376___函式庫___HTMLTAG_377__HTMLTAG_378__HTMLTAG_379___spring-boot-starter-oauth2-resource-ser v呃___HTMLTAG_380__HTMLTAG_381__HTMLTAG_382__HTMLTAG_383___quarkus-oidc___HTMLTAG_384__HTMLTAG_385__HTMLTAG_386___
___HTMLTAG_387__HTMLTAG_388___角色映射____HTMLTAG_389__HTMLTAG_390___自訂<code>JwtAuthenticationConverter____HTMLTAG_392__HTMLTAG_393__HTMLTAG_394___設定<code>roles.role-claim-path___HTMLTAG_396__HTMLTAGML_3978HT
___HTMLTAG_399__HTMLTAG_400___授權___HTMLTAG_401__HTMLTAG_402__HTMLTAG_403___@預先授權</code>， <code>hasRole()___HTMLTAG_406__HTMLTAG_407__HTMLTAG_408__HTMLTAG_409___@允許的角色</code>、<code>@已驗證___HTML___MLTAG_410___、<code>@已驗證___HTML___MLTA4114141414141_____
___HTMLTAG_415__HTMLTAG_416___多重租戶___HTMLTAG_417__HTMLTAG_418___自訂實作___HTMLTAG_419__HTMLTAG_420___內建<code>租戶解析器___HTMLTAG_42221TAGMLHTMLTAG421____422___MLTAG_42221421_4224_ML
___HTMLTAG_425__HTMLTAG_426___策略执行器____HTMLTAG_427__HTMLTAG_428___手册___HTMLTAG_429__HTMLTAG_430__HTMLTAG_431___quarkus-keycloak-authorization___HTMLTAG_432__HTMLTAG_433__HTMLTAG_434___
___HTMLTAG_435__HTMLTAG_436___測試____HTMLTAG_437__HTMLTAG_438___測試容器+模擬JWT___HTMLTAG_439__HTMLTAG_440__HTMLTAG_441___qu__us-test-keycloak-server___MLGMLGML
___HTMLTAG_445__HTMLTAG_446___啟動時間___HTMLTAG_447__HTMLTAG_448___~2-5s___HTMLTAG_449__HTMLTAG_450___~0.5-1s（原生~0.01s）<td>~0.5-1s（原生~0.01s）</td>~0.5-12122_____
</tbody>
</table>

<p>在下一篇文章中，我們將學習如何將 Keycloak 與前端框架（React、Angular）和 Node.js 後端整合。 </p>