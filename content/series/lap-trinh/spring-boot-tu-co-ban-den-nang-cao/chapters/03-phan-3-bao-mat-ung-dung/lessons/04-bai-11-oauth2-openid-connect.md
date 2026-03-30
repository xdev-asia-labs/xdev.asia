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
