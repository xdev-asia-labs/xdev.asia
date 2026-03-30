---
id: 019c9617-fc12-7012-a012-fc1200000012
title: 'Bài 12: Method Security, CORS, CSRF & Security Best Practices'
slug: bai-12-method-security-cors-csrf
description: >-
  @PreAuthorize, @PostAuthorize, @Secured SpEL expressions. CORS configuration,
  CSRF protection cho SPA. Rate limiting, security headers, OWASP Top 10 prevention.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 3: Bảo mật ứng dụng"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

## Giới thiệu

Sau khi đã hiểu authentication và authorization cơ bản, bài này đi sâu vào method-level security, cấu hình CORS cho SPA, và các security best practices theo OWASP Top 10 để bảo vệ ứng dụng trong production.

---

## 1. Method-Level Security

### 1.1 Bật Method Security

```java
@Configuration
@EnableMethodSecurity // Spring Boot 4.x
public class MethodSecurityConfig { }
```

### 1.2 @PreAuthorize — Kiểm tra trước khi thực thi

```java
@Service
public class ArticleService {

    // Chỉ ADMIN mới gọi được
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteArticle(Long id) { }

    // ADMIN hoặc EDITOR
    @PreAuthorize("hasAnyRole('ADMIN', 'EDITOR')")
    public ArticleResponse updateArticle(Long id, UpdateArticleRequest request) { }

    // Kiểm tra authority cụ thể
    @PreAuthorize("hasAuthority('WRITE_ARTICLES')")
    public ArticleResponse createArticle(CreateArticleRequest request) { }

    // SpEL: Kiểm tra user hiện tại là owner
    @PreAuthorize("#username == authentication.name or hasRole('ADMIN')")
    public UserResponse getUserProfile(String username) { }

    // SpEL: Truy cập tham số method
    @PreAuthorize("@articleSecurity.isOwner(#articleId, authentication)")
    public void editArticle(Long articleId, UpdateArticleRequest request) { }
}
```

### 1.3 @PostAuthorize — Kiểm tra sau khi thực thi

```java
// Kiểm tra return value
@PostAuthorize("returnObject.owner == authentication.name or hasRole('ADMIN')")
public ArticleResponse getArticle(Long id) {
    return articleRepository.findById(id)
        .map(ArticleResponse::from)
        .orElseThrow(() -> new ResourceNotFoundException("Article", "id", id));
}
```

### 1.4 Custom Security Expression

```java
@Component("articleSecurity")
public class ArticleSecurity {

    private final ArticleRepository articleRepository;

    public ArticleSecurity(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public boolean isOwner(Long articleId, Authentication authentication) {
        return articleRepository.findById(articleId)
            .map(article -> article.getAuthor().getUsername()
                .equals(authentication.getName()))
            .orElse(false);
    }
}
```

---

## 2. CORS Configuration

### 2.1 Tại sao cần CORS?

Khi frontend (React, Next.js) chạy trên `localhost:3000` và backend trên `localhost:8080`, browser chặn cross-origin requests theo Same-Origin Policy. CORS cho phép server chỉ định domain nào được truy cập.

### 2.2 Cấu hình CORS

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http)
        throws Exception {
    http
        .cors(cors -> cors.configurationSource(corsConfigurationSource()))
        // ...other config
    ;
    return http.build();
}

@Bean
public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration config = new CorsConfiguration();

    config.setAllowedOrigins(List.of(
        "http://localhost:3000",          // React dev server
        "https://myapp.example.com"       // Production frontend
    ));

    config.setAllowedMethods(List.of(
        "GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"
    ));

    config.setAllowedHeaders(List.of(
        "Authorization", "Content-Type", "X-Requested-With"
    ));

    config.setExposedHeaders(List.of(
        "X-Total-Count", "X-Page-Number"
    ));

    config.setAllowCredentials(true);
    config.setMaxAge(3600L); // Cache preflight 1 hour

    UrlBasedCorsConfigurationSource source =
        new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/api/**", config);
    return source;
}
```

---

## 3. CSRF Protection

### 3.1 Khi nào cần CSRF?

- **REST API thuần (JWT/Token auth)**: Disable CSRF (token-based tự bảo vệ)
- **Server-rendered pages (Thymeleaf + form login)**: Enable CSRF
- **SPA + Cookie-based auth**: Enable CSRF với cookie repository

```java
// REST API: Disable CSRF
http.csrf(csrf -> csrf.disable());

// SPA với cookie auth: CSRF via cookie
http.csrf(csrf -> csrf
    .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
    .csrfTokenRequestHandler(new SpaCsrfTokenRequestHandler())
);
```

---

## 4. Security Headers

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http)
        throws Exception {
    http
        .headers(headers -> headers
            .contentTypeOptions(Customizer.withDefaults())  // X-Content-Type-Options: nosniff
            .frameOptions(frame -> frame.deny())             // X-Frame-Options: DENY
            .httpStrictTransportSecurity(hsts -> hsts        // HSTS
                .maxAgeInSeconds(31536000)
                .includeSubDomains(true))
            .contentSecurityPolicy(csp -> csp
                .policyDirectives("default-src 'self'; script-src 'self'"))
        );
    return http.build();
}
```

---

## 5. Rate Limiting

```java
// Simple in-memory rate limiter (production: dùng Redis)
@Component
public class RateLimitFilter extends OncePerRequestFilter {

    private final Map<String, List<Long>> requestCounts =
        new ConcurrentHashMap<>();
    private static final int MAX_REQUESTS = 100;
    private static final long TIME_WINDOW_MS = 60_000; // 1 phút

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                     HttpServletResponse response,
                                     FilterChain filterChain)
            throws ServletException, IOException {

        String clientIp = request.getRemoteAddr();
        long now = System.currentTimeMillis();

        requestCounts.computeIfAbsent(clientIp, k -> new ArrayList<>());
        List<Long> timestamps = requestCounts.get(clientIp);

        // Remove expired entries
        timestamps.removeIf(t -> now - t > TIME_WINDOW_MS);

        if (timestamps.size() >= MAX_REQUESTS) {
            response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
            response.getWriter().write("Rate limit exceeded");
            return;
        }

        timestamps.add(now);
        filterChain.doFilter(request, response);
    }
}
```

---

## 6. OWASP Top 10 — Checklist cho Spring Boot

| # | Threat | Spring Boot Solution |
|---|--------|---------------------|
| A01 | Broken Access Control | @PreAuthorize, URL-based authorization |
| A02 | Cryptographic Failures | BCrypt, AES encryption, TLS |
| A03 | Injection | Parameterized queries (JPA), input validation |
| A04 | Insecure Design | Threat modeling, least privilege |
| A05 | Security Misconfiguration | Security headers, disable verbose errors |
| A06 | Vulnerable Components | Dependabot, spring-boot dependency management |
| A07 | Authentication Failures | Strong passwords, JWT expiration, brute-force protection |
| A08 | Data Integrity Failures | CSRF protection, signed JWTs |
| A09 | Logging Failures | Structured logging, audit trails |
| A10 | SSRF | URL validation, allowlist for external calls |

---

## Tóm tắt

- Method Security (@PreAuthorize, @PostAuthorize) cho phép phân quyền tại service layer với SpEL expressions
- CORS cấu hình chính xác allowed origins, methods, headers cho frontend cross-origin access
- Security headers (HSTS, CSP, X-Frame-Options) bảo vệ chống XSS, clickjacking và injection attacks

## Bài tập

1. Implement method security: @PreAuthorize kiểm tra user là owner của resource trước khi cho phép edit/delete
2. Cấu hình CORS cho phép React frontend (localhost:3000 và production domain) truy cập API
3. Implement rate limiting middleware: max 100 requests/phút per IP, trả về 429 Too Many Requests
