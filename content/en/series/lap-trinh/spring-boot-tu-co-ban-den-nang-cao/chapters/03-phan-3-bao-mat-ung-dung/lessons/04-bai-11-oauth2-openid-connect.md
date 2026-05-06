---
id: 019c9617-fc11-7011-a011-fc1100000011
title: 'Lesson 11: OAuth2 & OpenID Connect — Social Login & Resource Server'
slug: bai-11-oauth2-openid-connect
description: >-
  OAuth2 Authorization Code flow, Client Credentials. Spring Security OAuth2
  Client for Google/GitHub login. Resource Server with JWT validation. Spring
  Authorization Server.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 'Part 3: Application security'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: From Basics to Advanced'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Programming — Lesson 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: OAuth2 & OpenID Connect — Social</tspan>
      <tspan x="60" dy="42">Login & Resource Server</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Application security</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

OAuth2 is a popular authorization standard to allow third-party applications to access resources without sharing passwords. From "Login with Google" to service-to-service authentication in microservices, OAuth2 handles it all. This article shows how to integrate OAuth2 in Spring Boot 4.x.

---

## 1. OAuth2 Fundamentals

### 1.1 Roles in OAuth2

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
|-----|----------|
| Authorization Code | Web apps, SPAs (with user interaction) |
| Client Credentials | Service-to-service (no user) |
| PKCE | Mobile apps, SPAs (replace implicit flow) |
| Device Code | Smart TV, CLI tools |

### 1.3 OpenID Connect (OIDC)

OIDC is a layer on top of OAuth2, adding **identity** layer:
- **OAuth2**: "Allow this app to access my Google Drive" (Authorization)
- **OIDC**: "Sign in with Google account" (Authentication + Authorization)

OIDC endpoints:
- `/.well-known/openid-configuration`
- ID Token (contains user information)
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

### 2.2 Security Config with OAuth2

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

When your application is a Resource Server (API receives JWT from client):

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

## 5. Combine JWT Custom + OAuth2

In fact, many applications support both:
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

## Summary

- OAuth2 is an authorization standard that allows applications to access resources on behalf of users without needing a password
- Spring Boot supports OAuth2 Client (social login), Resource Server (validate JWT), and Client Credentials (service-to-service)
- OpenID Connect adds an identity layer to OAuth2, providing an ID Token containing user information

## Exercises

1. Configure OAuth2 login with Google: register OAuth app on Google Cloud Console, implement social login flow
2. Create Resource Server to validate JWT from an Authorization Server, test with Postman/HTTPie
3. Implement hybrid auth: support both username/password login (JWT custom) and Google OAuth2 login in the same application
