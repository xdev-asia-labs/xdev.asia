---
id: 019c9617-fc11-7011-a011-fc1100000011
title: 第 11 課：OAuth2 和 OpenID Connect — 社群登入與資源伺服器
slug: bai-11-oauth2-openid-connect
description: >-
  OAuth2 授權程式碼流程，客戶端憑證。用於 Google/GitHub 登入的 Spring Security OAuth2 用戶端。具有 JWT
  驗證的資源伺服器。 Spring授權伺服器。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 第 3 部分：應用程式安全
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: Spring Boot 4：從基礎到高級
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6552" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6552)"/>

  <!-- Decorations -->
  <g>
    <circle cx="874" cy="72" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="648" cy="86" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="922" cy="100" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="696" cy="114" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="128" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="152" x2="1100" y2="232" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="182" x2="1050" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1025.38268590218,188.5 1025.38268590218,215.5 1002,229 978.6173140978201,215.5 978.6173140978201,188.5 1002,175" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 程式設計 — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：OAuth2 與 OpenID Connect — 社交</tspan>
      <tspan x="60" dy="42">登入和資源伺服器</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：應用程式安全</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

OAuth2 是一種流行的授權標準，允許第三方應用程式在不共享密碼的情況下存取資源。從「使用 Google 登入」到微服務中的服務到服務驗證，OAuth2 可以處理這一切。本文介紹如何在 Spring Boot 4.x 中整合 OAuth2。

---

## 1.OAuth2 基礎知識

### 1.1 OAuth2 中的角色

```
┌──────────────────┐
│  Resource Owner   │  ← User (người dùng)
│  (End User)       │
└────────┬─────────┘
         │ Authorize
         ▼
┌──────────────────┐     ┌──────────────────┐
│  Client           │────►│ Authorization    │
│  (Your App)       │◄────│ Server           │
│                   │     │ (Google, GitHub)  │
└────────┬─────────┘     └──────────────────┘
         │ Access Token
         ▼
┌──────────────────┐
│  Resource Server  │  ← API chứa data
│  (API)            │
└──────────────────┘
```

### 1.2 OAuth2 流程

|流量|使用案例|
|-----|----------|
|授權碼| Web 應用程式、SPA（帶有使用者互動）|
|客戶憑證|服務到服務（無使用者）|
| PKCE |行動應用、SPA（取代隱含流程）|
|裝置代碼 |智慧電視、CLI 工具 |

### 1.3 OpenID 連線 (OIDC)

OIDC 是 OAuth2 之上的一層，增加了**身分**層：
- **OAuth2**：「允許此應用程式存取我的 Google 雲端硬碟」（授權）
- **OIDC**：「使用Google帳號登入」（驗證+授權）

OIDC 端點：
- `/.well-known/openid-configuration`
- ID Token（包含使用者資訊）
- 使用者資訊端點

---

## 2. OAuth2 用戶端 — 社群登入

### 2.1 依賴與配置

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-oauth2-client</artifactId>
</dependency>
```

```yaml
# application.yaml
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: ${GOOGLE_CLIENT_ID}
            client-secret: ${GOOGLE_CLIENT_SECRET}
            scope: openid, profile, email

          github:
            client-id: ${GITHUB_CLIENT_ID}
            client-secret: ${GITHUB_CLIENT_SECRET}
            scope: read:user, user:email
```

### 2.2 OAuth2 安全性配置

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/", "/login", "/api/public/**").permitAll()
            .anyRequest().authenticated()
        )
        .oauth2Login(oauth2 -> oauth2
            .loginPage("/login")
            .defaultSuccessUrl("/dashboard")
            .userInfoEndpoint(userInfo -> userInfo
                .userService(customOAuth2UserService)
            )
        );

    return http.build();
}
```

### 2.3 自訂 OAuth2 用戶服務

```java
@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    public CustomOAuth2UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest)
            throws OAuth2AuthenticationException {
        OAuth2User oauth2User = super.loadUser(userRequest);

        String provider = userRequest.getClientRegistration().getRegistrationId();
        String email = oauth2User.getAttribute("email");
        String name = oauth2User.getAttribute("name");

        // Tìm hoặc tạo user trong database
        User user = userRepository.findByEmail(email)
            .orElseGet(() -> {
                User newUser = new User();
                newUser.setEmail(email);
                newUser.setName(name);
                newUser.setProvider(provider);
                newUser.setRoles(Set.of("USER"));
                newUser.setEnabled(true);
                return userRepository.save(newUser);
            });

        return new CustomOAuth2User(oauth2User, user);
    }
}
```

---

## 3. OAuth2 資源伺服器 — 驗證 JWT

### 3.1 配置

當您的應用程式是資源伺服器時（API 從客戶端接收 JWT）：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
</dependency>
```

```yaml
spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: https://accounts.google.com
          # hoặc
          jwk-set-uri: https://www.googleapis.com/oauth2/v3/certs
```

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/public/**").permitAll()
            .anyRequest().authenticated()
        )
        .oauth2ResourceServer(oauth2 -> oauth2
            .jwt(jwt -> jwt
                .jwtAuthenticationConverter(jwtAuthenticationConverter())
            )
        );

    return http.build();
}

@Bean
public JwtAuthenticationConverter jwtAuthenticationConverter() {
    JwtGrantedAuthoritiesConverter grantedAuthorities =
        new JwtGrantedAuthoritiesConverter();
    grantedAuthorities.setAuthoritiesClaimName("roles");
    grantedAuthorities.setAuthorityPrefix("ROLE_");

    JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
    converter.setJwtGrantedAuthoritiesConverter(grantedAuthorities);
    return converter;
}
```

---

## 4. 用戶端憑證 — 服務到服務

```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          internal-service:
            provider: custom-auth-server
            client-id: ${SERVICE_CLIENT_ID}
            client-secret: ${SERVICE_CLIENT_SECRET}
            authorization-grant-type: client_credentials
            scope: read, write
        provider:
          custom-auth-server:
            token-uri: https://auth.example.com/oauth2/token
```

```java
@Service
public class ExternalApiService {

    private final RestClient restClient;

    public ExternalApiService(
            RestClient.Builder builder,
            OAuth2AuthorizedClientManager authorizedClientManager) {

        this.restClient = builder
            .baseUrl("https://api.other-service.com")
            .requestInterceptor(
                new OAuth2ClientHttpRequestInterceptor(authorizedClientManager))
            .build();
    }

    public List<DataResponse> fetchData() {
        return restClient.get()
            .uri("/api/data")
            .retrieve()
            .body(new ParameterizedTypeReference<>() {});
    }
}
```

---

## 5. 結合 JWT Custom + OAuth2

事實上，許多應用程式都支援：
- **JWT 自訂**：使用者名稱/密碼登入
- **OAuth2**：社群登入（Google、GitHub）

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .csrf(csrf -> csrf.disable())
        .sessionManagement(session -> session
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/auth/**", "/oauth2/**").permitAll()
            .anyRequest().authenticated()
        )
        // Custom JWT filter
        .addFilterBefore(jwtAuthFilter,
            UsernamePasswordAuthenticationFilter.class)
        // OAuth2 login (social)
        .oauth2Login(oauth2 -> oauth2
            .successHandler(oAuth2SuccessHandler) // Generate JWT after OAuth2 login
        );

    return http.build();
}
```

---

## 總結

- OAuth2是一種授權標準，允許應用程式代表使用者存取資源而無需密碼
- Spring Boot 支援 OAuth2 用戶端（社交登入）、資源伺服器（驗證 JWT）和用戶端憑證（服務到服務）
- OpenID Connect 為 OAuth2 新增身分層，提供包含使用者資訊的 ID Token

## 練習

1. 設定 Google OAuth2 登入：在 Google Cloud Console 上註冊 OAuth 應用，實現社群登入流程
2. 建立資源伺服器以從授權伺服器驗證 JWT，使用 Postman/HTTPie 進行測試
3.實現混合身份驗證：在同一應用程式中同時支援使用者名稱/密碼登入（JWT自訂）和Google OAuth2登錄
