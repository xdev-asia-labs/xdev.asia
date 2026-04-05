---
id: 019d8b30-b120-7001-c001-e0c5f8100120
title: 'Bài 20: Tích hợp Spring Boot và Quarkus'
slug: bai-20-tich-hop-spring-boot-va-quarkus
description: >-
  Tích hợp Keycloak với Spring Boot 3 sử dụng Spring Security OAuth2 Resource
  Server (spring-boot-starter-oauth2-resource-server), cấu hình JWT validation,
  custom JwtAuthenticationConverter, role mapping từ realm_access/resource_access
  claims, Spring Security method-level authorization (@PreAuthorize), tích hợp
  Quarkus với quarkus-oidc extension, multi-tenant configuration và testing với
  Testcontainers.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 6: Tích hợp ứng dụng thực tế"
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak từ Cơ bản đến Nâng cao
  slug: keycloak-tu-co-ban-den-nang-cao
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Bài 20</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 20: Tích hợp Spring Boot và Quarkus</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Tích hợp ứng dụng thực tế</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tong-quan-tich-hop-backend"><strong>1. Tổng quan tích hợp Backend</strong></h2>

<p>Keycloak cung cấp cơ chế OAuth2/OIDC chuẩn, cho phép tích hợp với bất kỳ backend framework nào hỗ trợ JWT verification. Trong bài này, chúng ta sẽ tích hợp với hai framework phổ biến nhất trong hệ sinh thái Java: <strong>Spring Boot 3</strong> và <strong>Quarkus</strong>.</p>

<table>
<thead>
<tr><th>Framework</th><th>Library</th><th>Approach</th></tr>
</thead>
<tbody>
<tr><td>Spring Boot 3</td><td><code>spring-boot-starter-oauth2-resource-server</code></td><td>JWT Resource Server</td></tr>
<tr><td>Quarkus</td><td><code>quarkus-oidc</code></td><td>OIDC Extension</td></tr>
</tbody>
</table>

<p>Kiến trúc tổng quan:</p>

<pre><code class="language-text">┌──────────┐     ┌───────────┐     ┌──────────────┐
│  Client  │────▶│ Keycloak  │     │ Backend API  │
│ (SPA/    │     │  Server   │     │ (Spring Boot │
│  Mobile) │     └─────┬─────┘     │  / Quarkus)  │
│          │           │           └───────┬──────┘
│          │     ┌─────▼─────┐             │
│          │     │ Access    │     ┌───────▼──────┐
│          │────▶│ Token     │────▶│ JWT Verify   │
│          │     │ (JWT)     │     │ + Role Check │
└──────────┘     └───────────┘     └──────────────┘
</code></pre>

<h2 id="2-spring-boot-3-keycloak-integration"><strong>2. Spring Boot 3 + Keycloak Integration</strong></h2>

<h3 id="21-maven-dependencies"><strong>2.1 Maven Dependencies</strong></h3>

<pre><code class="language-xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         https://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
        &lt;version&gt;3.3.0&lt;/version&gt;
    &lt;/parent&gt;

    &lt;groupId&gt;com.example&lt;/groupId&gt;
    &lt;artifactId&gt;keycloak-spring-demo&lt;/artifactId&gt;
    &lt;version&gt;1.0.0&lt;/version&gt;

    &lt;dependencies&gt;
        &lt;!-- Spring Boot Starter Web --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
        &lt;/dependency&gt;

        &lt;!-- OAuth2 Resource Server (JWT validation) --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-oauth2-resource-server&lt;/artifactId&gt;
        &lt;/dependency&gt;

        &lt;!-- Spring Security --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
        &lt;/dependency&gt;

        &lt;!-- Test dependencies --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;
            &lt;artifactId&gt;spring-security-test&lt;/artifactId&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;

        &lt;!-- Testcontainers Keycloak --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.github.dasniko&lt;/groupId&gt;
            &lt;artifactId&gt;testcontainers-keycloak&lt;/artifactId&gt;
            &lt;version&gt;3.3.1&lt;/version&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.testcontainers&lt;/groupId&gt;
            &lt;artifactId&gt;junit-jupiter&lt;/artifactId&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/project&gt;
</code></pre>

<p><strong>Lưu ý quan trọng:</strong> Từ Keycloak 20+, adapter chuyên dụng cho Spring Boot (<code>keycloak-spring-boot-starter</code>) đã bị <strong>deprecated</strong>. Phương pháp chuẩn hiện tại là sử dụng <code>spring-boot-starter-oauth2-resource-server</code> của Spring Security.</p>

<h3 id="22-application-yml-configuration"><strong>2.2 Application.yml Configuration</strong></h3>

<pre><code class="language-yaml"># src/main/resources/application.yml
server:
  port: 8081

spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          # Keycloak OIDC issuer URI
          issuer-uri: http://localhost:8080/realms/my-realm
          # JWK Set URI để verify JWT signature
          jwk-set-uri: http://localhost:8080/realms/my-realm/protocol/openid-connect/certs

logging:
  level:
    org.springframework.security: DEBUG
</code></pre>

<p>Giải thích các thuộc tính:</p>

<table>
<thead>
<tr><th>Property</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td><code>issuer-uri</code></td><td>URI của Keycloak realm, dùng để validate <code>iss</code> claim trong JWT</td></tr>
<tr><td><code>jwk-set-uri</code></td><td>Endpoint chứa public keys (JWKS) để verify JWT signature</td></tr>
</tbody>
</table>

<h3 id="23-security-configuration"><strong>2.3 Security Configuration</strong></h3>

<pre><code class="language-java">package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity  // Bật @PreAuthorize, @Secured, @RolesAllowed
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // Stateless session - không lưu session trên server
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            // Tắt CSRF cho REST API (stateless)
            .csrf(csrf -> csrf.disable())
            // Cấu hình authorization rules
            .authorizeHttpRequests(auth -> auth
                // Public endpoints
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/actuator/health").permitAll()
                // Admin endpoints yêu cầu role ADMIN
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                // User endpoints yêu cầu role USER hoặc ADMIN
                .requestMatchers(HttpMethod.GET, "/api/users/**").hasAnyRole("USER", "ADMIN")
                .requestMatchers(HttpMethod.POST, "/api/users/**").hasRole("ADMIN")
                // Tất cả request khác cần authenticated
                .anyRequest().authenticated()
            )
            // Cấu hình OAuth2 Resource Server với JWT
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt
                    .jwtAuthenticationConverter(jwtAuthenticationConverter())
                )
            );

        return http.build();
    }

    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
        converter.setJwtGrantedAuthoritiesConverter(new KeycloakRoleConverter());
        return converter;
    }
}
</code></pre>

<h3 id="24-custom-jwtauthenticationconverter"><strong>2.4 Custom JwtAuthenticationConverter</strong></h3>

<p>Keycloak lưu roles trong JWT claims theo cấu trúc đặc biệt. Cần custom converter để extract đúng roles:</p>

<pre><code class="language-text">JWT Claims từ Keycloak:
{
  "realm_access": {
    "roles": ["ADMIN", "USER", "offline_access"]
  },
  "resource_access": {
    "my-client": {
      "roles": ["client_admin", "client_user"]
    },
    "account": {
      "roles": ["manage-account"]
    }
  },
  "preferred_username": "john",
  "email": "john@example.com",
  ...
}
</code></pre>

<pre><code class="language-java">package com.example.config;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class KeycloakRoleConverter implements Converter&lt;Jwt, Collection&lt;GrantedAuthority&gt;&gt; {

    // Client ID trong Keycloak
    private static final String CLIENT_ID = "my-client";

    @Override
    public Collection&lt;GrantedAuthority&gt; convert(Jwt jwt) {
        // Extract realm roles
        Collection&lt;String&gt; realmRoles = extractRealmRoles(jwt);

        // Extract client roles
        Collection&lt;String&gt; clientRoles = extractClientRoles(jwt, CLIENT_ID);

        // Combine và convert thành GrantedAuthority
        return Stream.concat(realmRoles.stream(), clientRoles.stream())
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toSet());
    }

    @SuppressWarnings("unchecked")
    private Collection&lt;String&gt; extractRealmRoles(Jwt jwt) {
        Map&lt;String, Object&gt; realmAccess = jwt.getClaimAsMap("realm_access");
        if (realmAccess == null) {
            return Collections.emptyList();
        }
        Object roles = realmAccess.get("roles");
        if (roles instanceof Collection) {
            return (Collection&lt;String&gt;) roles;
        }
        return Collections.emptyList();
    }

    @SuppressWarnings("unchecked")
    private Collection&lt;String&gt; extractClientRoles(Jwt jwt, String clientId) {
        Map&lt;String, Object&gt; resourceAccess = jwt.getClaimAsMap("resource_access");
        if (resourceAccess == null) {
            return Collections.emptyList();
        }
        Object clientAccess = resourceAccess.get(clientId);
        if (clientAccess instanceof Map) {
            Map&lt;String, Object&gt; clientMap = (Map&lt;String, Object&gt;) clientAccess;
            Object roles = clientMap.get("roles");
            if (roles instanceof Collection) {
                return (Collection&lt;String&gt;) roles;
            }
        }
        return Collections.emptyList();
    }
}
</code></pre>

<p>Cách hoạt động role mapping:</p>

<pre><code class="language-text">Keycloak JWT claim             →    Spring Security Authority
─────────────────────────────────────────────────────────────
realm_access.roles["ADMIN"]    →    ROLE_ADMIN
realm_access.roles["USER"]     →    ROLE_USER
resource_access.my-client      →    ROLE_client_admin
  .roles["client_admin"]
resource_access.my-client      →    ROLE_client_user
  .roles["client_user"]
</code></pre>

<h3 id="25-rest-controller-voi-rbac"><strong>2.5 REST Controller với RBAC</strong></h3>

<pre><code class="language-java">package com.example.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class DemoController {

    // ========== Public Endpoints ==========

    @GetMapping("/public/health")
    public ResponseEntity&lt;Map&lt;String, String&gt;&gt; health() {
        return ResponseEntity.ok(Map.of("status", "UP"));
    }

    // ========== Authenticated Endpoints ==========

    @GetMapping("/me")
    public ResponseEntity&lt;Map&lt;String, Object&gt;&gt; getCurrentUser(
            @AuthenticationPrincipal Jwt jwt) {
        return ResponseEntity.ok(Map.of(
            "username", jwt.getClaimAsString("preferred_username"),
            "email", jwt.getClaimAsString("email"),
            "roles", jwt.getClaimAsMap("realm_access"),
            "token_id", jwt.getId()
        ));
    }

    // ========== Role-based Endpoints ==========

    @GetMapping("/users")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity&lt;Map&lt;String, String&gt;&gt; getUsers() {
        return ResponseEntity.ok(Map.of(
            "message", "User list - accessible by USER and ADMIN roles"
        ));
    }

    @PostMapping("/users")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity&lt;Map&lt;String, String&gt;&gt; createUser(
            @RequestBody Map&lt;String, String&gt; user) {
        return ResponseEntity.ok(Map.of(
            "message", "User created - ADMIN only",
            "username", user.getOrDefault("username", "unknown")
        ));
    }

    @DeleteMapping("/users/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity&lt;Map&lt;String, String&gt;&gt; deleteUser(@PathVariable String id) {
        return ResponseEntity.ok(Map.of(
            "message", "User deleted",
            "userId", id
        ));
    }

    // ========== Admin Endpoints ==========

    @GetMapping("/admin/dashboard")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity&lt;Map&lt;String, String&gt;&gt; adminDashboard() {
        return ResponseEntity.ok(Map.of(
            "message", "Admin Dashboard - ADMIN only"
        ));
    }

    // ========== Advanced Authorization ==========

    // SpEL expression kiểm tra nhiều điều kiện
    @PutMapping("/users/{id}")
    @PreAuthorize("hasRole('ADMIN') or " +
                  "(hasRole('USER') and #jwt.getClaimAsString('preferred_username') == #id)")
    public ResponseEntity&lt;Map&lt;String, String&gt;&gt; updateUser(
            @PathVariable String id,
            @AuthenticationPrincipal Jwt jwt,
            @RequestBody Map&lt;String, String&gt; updates) {
        return ResponseEntity.ok(Map.of(
            "message", "User updated",
            "userId", id,
            "updatedBy", jwt.getClaimAsString("preferred_username")
        ));
    }

    // Kiểm tra client role
    @GetMapping("/reports")
    @PreAuthorize("hasAuthority('ROLE_client_admin')")
    public ResponseEntity&lt;Map&lt;String, String&gt;&gt; getReports() {
        return ResponseEntity.ok(Map.of(
            "message", "Reports - requires client_admin role"
        ));
    }
}
</code></pre>

<h3 id="26-cors-configuration"><strong>2.6 CORS Configuration</strong></h3>

<p>Khi frontend (React/Angular) gọi API backend, cần cấu hình CORS:</p>

<pre><code class="language-java">package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
public class CorsConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of(
            "http://localhost:3000",  // React dev
            "http://localhost:4200"   // Angular dev
        ));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        config.setAllowCredentials(true);
        config.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", config);
        return source;
    }
}
</code></pre>

<p>Thêm CORS vào <code>SecurityFilterChain</code>:</p>

<pre><code class="language-java">// Trong SecurityConfig.securityFilterChain()
http
    .cors(cors -> cors.configurationSource(corsConfigurationSource()))
    // ... các config khác
</code></pre>

<h3 id="27-xu-ly-token-expiration"><strong>2.7 Xử lý Token Expiration</strong></h3>

<p>Spring Security tự động validate <code>exp</code> claim. Khi token hết hạn, server trả về HTTP 401:</p>

<pre><code class="language-java">package com.example.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.Instant;
import java.util.Map;

@Component
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void commence(HttpServletRequest request,
                         HttpServletResponse response,
                         AuthenticationException authException) throws IOException {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);

        Map&lt;String, Object&gt; body = Map.of(
            "status", 401,
            "error", "Unauthorized",
            "message", authException.getMessage(),
            "path", request.getRequestURI(),
            "timestamp", Instant.now().toString()
        );

        objectMapper.writeValue(response.getOutputStream(), body);
    }
}
</code></pre>

<p>Đăng ký trong <code>SecurityFilterChain</code>:</p>

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

<h2 id="3-quarkus-keycloak-integration"><strong>3. Quarkus + Keycloak Integration</strong></h2>

<h3 id="31-quarkus-oidc-extension"><strong>3.1 Quarkus OIDC Extension</strong></h3>

<p>Quarkus cung cấp <code>quarkus-oidc</code> extension tích hợp sẵn với Keycloak:</p>

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

<h3 id="32-application-properties"><strong>3.2 Application Properties</strong></h3>

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

<h3 id="33-rest-resource-voi-rolesallowed"><strong>3.3 REST Resource với @RolesAllowed</strong></h3>

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

<h3 id="34-multi-tenant-oidc-configuration"><strong>3.4 Multi-tenant OIDC Configuration</strong></h3>

<p>Quarkus hỗ trợ multi-tenant OIDC cho các hệ thống SaaS cần kết nối nhiều Keycloak realms:</p>

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

<h3 id="35-keycloak-authorization-policy-enforcer"><strong>3.5 Keycloak Authorization Policy Enforcer</strong></h3>

<p>Sử dụng <code>quarkus-keycloak-authorization</code> để enforce Keycloak Authorization Services policies:</p>

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

<h2 id="4-testing-voi-testcontainers"><strong>4. Testing với Testcontainers</strong></h2>

<h3 id="41-spring-boot-testcontainers-keycloak"><strong>4.1 Spring Boot + Testcontainers Keycloak</strong></h3>

<p>Sử dụng <code>testcontainers-keycloak</code> để chạy Keycloak thật trong integration tests:</p>

<pre><code class="language-java">package com.example;

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

<h3 id="42-test-realm-json"><strong>4.2 Test Realm JSON</strong></h3>

<p>Tạo file <code>src/test/resources/test-realm.json</code> để import realm cho test:</p>

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

<h3 id="43-unit-test-voi-mock-jwt"><strong>4.3 Unit Test với Mock JWT</strong></h3>

<p>Cho unit tests không cần Keycloak thật, sử dụng <code>@WithMockUser</code> hoặc custom JWT:</p>

<pre><code class="language-java">package com.example;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.Map;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.jwt;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class MockJwtTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    void testWithMockJwt_AdminRole() throws Exception {
        mockMvc.perform(get("/api/admin/dashboard")
                .with(jwt()
                    .jwt(builder -> builder
                        .claim("preferred_username", "test-admin")
                        .claim("email", "admin@test.com")
                        .claim("realm_access", Map.of(
                            "roles", List.of("ADMIN", "USER")
                        ))
                    )
                    .authorities(new KeycloakRoleConverter())
                ))
                .andExpect(status().isOk());
    }

    @Test
    void testWithMockJwt_UserRole_AccessDenied() throws Exception {
        mockMvc.perform(get("/api/admin/dashboard")
                .with(jwt()
                    .jwt(builder -> builder
                        .claim("preferred_username", "test-user")
                        .claim("realm_access", Map.of(
                            "roles", List.of("USER")
                        ))
                    )
                    .authorities(new KeycloakRoleConverter())
                ))
                .andExpect(status().isForbidden());
    }
}
</code></pre>

<h2 id="5-best-practices-va-troubleshooting"><strong>5. Best Practices và Troubleshooting</strong></h2>

<h3 id="51-best-practices"><strong>5.1 Best Practices</strong></h3>

<table>
<thead>
<tr><th>#</th><th>Practice</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Sử dụng Realm Roles</td><td>Ưu tiên <code>realm_access.roles</code> cho authorization đơn giản</td></tr>
<tr><td>2</td><td>Stateless sessions</td><td>Luôn dùng <code>SessionCreationPolicy.STATELESS</code> cho REST API</td></tr>
<tr><td>3</td><td>Tắt CSRF cho API</td><td>CSRF không cần thiết khi sử dụng JWT Bearer token</td></tr>
<tr><td>4</td><td>Token validation caching</td><td>Spring Security tự cache JWK Set, không cần gọi Keycloak mỗi request</td></tr>
<tr><td>5</td><td>Claim-based authorization</td><td>Sử dụng <code>@PreAuthorize</code> với SpEL cho logic phức tạp</td></tr>
<tr><td>6</td><td>Error handling</td><td>Custom <code>AuthenticationEntryPoint</code> cho response format thống nhất</td></tr>
<tr><td>7</td><td>Test coverage</td><td>Kết hợp unit tests (mock JWT) và integration tests (Testcontainers)</td></tr>
</tbody>
</table>

<h3 id="52-troubleshooting-common-issues"><strong>5.2 Troubleshooting Common Issues</strong></h3>

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

<h3 id="53-curl-testing-commands"><strong>5.3 Curl Testing Commands</strong></h3>

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

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<table>
<thead>
<tr><th>Tiêu chí</th><th>Spring Boot 3</th><th>Quarkus</th></tr>
</thead>
<tbody>
<tr><td>Library</td><td><code>spring-boot-starter-oauth2-resource-server</code></td><td><code>quarkus-oidc</code></td></tr>
<tr><td>Role mapping</td><td>Custom <code>JwtAuthenticationConverter</code></td><td>Config <code>roles.role-claim-path</code></td></tr>
<tr><td>Authorization</td><td><code>@PreAuthorize</code>, <code>hasRole()</code></td><td><code>@RolesAllowed</code>, <code>@Authenticated</code></td></tr>
<tr><td>Multi-tenant</td><td>Custom implementation</td><td>Built-in <code>TenantResolver</code></td></tr>
<tr><td>Policy Enforcer</td><td>Manual</td><td><code>quarkus-keycloak-authorization</code></td></tr>
<tr><td>Testing</td><td>Testcontainers + Mock JWT</td><td><code>quarkus-test-keycloak-server</code></td></tr>
<tr><td>Startup time</td><td>~2-5s</td><td>~0.5-1s (native ~0.01s)</td></tr>
</tbody>
</table>

<p>Trong bài tiếp theo, chúng ta sẽ tìm hiểu cách tích hợp Keycloak với frontend frameworks (React, Angular) và Node.js backend.</p>
