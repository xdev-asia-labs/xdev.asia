---
id: 019c9617-fc12-7012-a012-fc1200000012
title: 'Lesson 12: Method Security, CORS, CSRF & Security Best Practices'
slug: bai-12-method-security-cors-csrf
description: >-
  @PreAuthorize, @PostAuthorize, @Secured SpEL expressions. CORS configuration,
  CSRF protection for SPA. Rate limiting, security headers, OWASP Top 10
  prevention.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 3: Application security'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: From Basics to Advanced'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8661" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8661)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1046" cy="248" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="992" cy="234" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="938" cy="220" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="884" cy="206" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="830" cy="192" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="108" x2="1100" y2="188" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="138" x2="1050" y2="208" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1045.2390923627308,186.5 1045.2390923627308,229.5 1008,251 970.7609076372692,229.5 970.7609076372692,186.5 1008,165" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 Programming — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 12: Method Security, CORS, CSRF &</tspan>
      <tspan x="60" dy="42">Security Best Practices</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Application security</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

After understanding basic authentication and authorization, this article delves into method-level security, CORS configuration for SPA, and security best practices according to the OWASP Top 10 to protect applications in production.

---

## 1. Method-Level Security

### 1.1 Enable Method Security

```java
@Configuration
@EnableMethodSecurity // Spring Boot 4.x
public class MethodSecurityConfig { }
```

### 1.2 @PreAuthorize — Check before executing

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

### 1.3 @PostAuthorize — Check after execution

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

### 2.1 Why do we need CORS?

When the frontend (React, Next.js) runs on `localhost:3000` and backend above `localhost:8080`, browsers block cross-origin requests according to Same-Origin Policy. CORS allows the server to specify which domains are accessed.

### 2.2 CORS configuration

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

### 3.1 When is CSRF needed?

- **Pure REST API (JWT/Token auth)**: Disable CSRF (token-based self-protection)
- **Server-rendered pages (Thymeleaf + form login)**: Enable CSRF
- **SPA + Cookie-based auth**: Enable CSRF with cookie repository

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

## 6. OWASP Top 10 — Checklist for Spring Boot

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

## Summary

- Method Security (@PreAuthorize, @PostAuthorize) allows authorization at the service layer with SpEL expressions
- Correctly configured CORS allows origins, methods, headers for frontend cross-origin access
- Security headers (HSTS, CSP, X-Frame-Options) protect against XSS, clickjacking and injection attacks

## Exercises

1. Implement security method: @PreAuthorize checks that the user is the owner of the resource before allowing edit/delete
2. CORS configuration allows React frontend (localhost:3000 and production domain) to access API
3. Implement rate limiting middleware: max 100 requests/minute per IP, returns 429 Too Many Requests
