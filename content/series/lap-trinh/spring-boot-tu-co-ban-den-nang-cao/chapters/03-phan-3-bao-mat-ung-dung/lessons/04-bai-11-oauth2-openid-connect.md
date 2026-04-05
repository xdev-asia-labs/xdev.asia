---
id: 019c9617-fc11-7011-a011-fc1100000011
title: 'Bài 11: OAuth2 & OpenID Connect — Social Login & Resource Server'
slug: bai-11-oauth2-openid-connect
description: >-
  OAuth2 Authorization Code flow, Client Credentials. Spring Security OAuth2 Client
  cho Google/GitHub login. Resource Server với JWT validation. Spring Authorization Server.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: Bảo mật ứng dụng"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Lập trình — Bài 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 11: OAuth2 &amp; OpenID Connect — Social</tspan>
      <tspan x="60" dy="42">Login &amp; Resource Server</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Bảo mật ứng dụng</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

OAuth2 là tiêu chuẩn authorization phổ biến để cho phép ứng dụng bên thứ ba truy cập tài nguyên mà không cần chia sẻ password. Từ "Login with Google" đến service-to-service authentication trong microservices, OAuth2 đều xử lý được. Bài này hướng dẫn cách tích hợp OAuth2 trong Spring Boot 4.x.

---

## 1. OAuth2 Fundamentals

### 1.1 Các roles trong OAuth2

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

### 1.2 OAuth2 Flows

| Flow | Use Case |
|------|----------|
| Authorization Code | Web apps, SPAs (có user interaction) |
| Client Credentials | Service-to-service (không có user) |
| PKCE | Mobile apps, SPAs (thay thế implicit flow) |
| Device Code | Smart TV, CLI tools |

### 1.3 OpenID Connect (OIDC)

OIDC là layer trên OAuth2, thêm **identity** layer:
- **OAuth2**: "Cho phép app này truy cập Google Drive của tôi" (Authorization)
- **OIDC**: "Đăng nhập bằng tài khoản Google" (Authentication + Authorization)

OIDC endpoints:
- `/.well-known/openid-configuration`
- ID Token (chứa user info)
- UserInfo endpoint

---

## 2. OAuth2 Client — Social Login

### 2.1 Dependencies & Configuration

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

### 2.2 Security Config với OAuth2

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

### 2.3 Custom OAuth2 User Service

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

## 3. OAuth2 Resource Server — Validate JWT

### 3.1 Configuration

Khi ứng dụng của bạn là Resource Server (API nhận JWT từ client):

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

## 4. Client Credentials — Service-to-Service

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

## 5. Kết hợp JWT Custom + OAuth2

Trong thực tế, nhiều ứng dụng hỗ trợ cả hai:
- **JWT custom**: Username/password login
- **OAuth2**: Social login (Google, GitHub)

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

## Tóm tắt

- OAuth2 là chuẩn authorization cho phép ứng dụng truy cập resources thay mặt user mà không cần password
- Spring Boot hỗ trợ OAuth2 Client (social login), Resource Server (validate JWT), và Client Credentials (service-to-service)
- OpenID Connect thêm identity layer lên OAuth2, cung cấp ID Token chứa thông tin user

## Bài tập

1. Cấu hình OAuth2 login với Google: đăng ký OAuth app trên Google Cloud Console, implement social login flow
2. Tạo Resource Server validate JWT từ một Authorization Server, test với Postman/HTTPie
3. Implement hybrid auth: hỗ trợ cả username/password login (JWT custom) và Google OAuth2 login trong cùng ứng dụng
