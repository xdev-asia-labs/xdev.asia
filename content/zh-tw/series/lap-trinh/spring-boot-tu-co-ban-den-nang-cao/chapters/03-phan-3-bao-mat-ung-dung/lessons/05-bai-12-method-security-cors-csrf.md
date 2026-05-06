---
id: 019c9617-fc12-7012-a012-fc1200000012
title: 第 12 課：方法安全性、CORS、CSRF 和安全性最佳實踐
slug: bai-12-method-security-cors-csrf
description: >-
  @PreAuthorize、@PostAuthorize、@Secured SpEL 表達式。
  CORS配置，SPA的CSRF保護。速率限制、安全標頭、OWASP Top 10 預防。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 第 3 部分：應用程式安全
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: Spring Boot 4：從基礎到高級
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 程式設計 — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：方法安全性、CORS、CSRF 和</tspan>
      <tspan x="60" dy="42">安全最佳實踐</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：應用程式安全</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在了解基本的身份驗證和授權之後，本文將深入研究方法級安全性、SPA 的 CORS 配置以及根據 OWASP Top 10 的安全最佳實踐，以保護生產中的應用程式。

---

## 1. 方法級安全性

### 1.1 啟用方法安全性

```java
@Configuration
@EnableMethodSecurity // Spring Boot 4.x
public class MethodSecurityConfig { }
```

### 1.2 @PreAuthorize — 執行前檢查

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

### 1.3 @PostAuthorize — 執行後檢查

```java
// Kiểm tra return value
@PostAuthorize("returnObject.owner == authentication.name or hasRole('ADMIN')")
public ArticleResponse getArticle(Long id) {
    return articleRepository.findById(id)
        .map(ArticleResponse::from)
        .orElseThrow(() -> new ResourceNotFoundException("Article", "id", id));
}
```

### 1.4 自訂安全表達式

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

## 2.CORS配置

### 2.1 為什麼需要 CORS？

當前端（React、Next.js）運行時 `localhost:3000` 和上面的後端 `localhost:8080`，瀏覽器根據同源策略阻止跨來源請求。 CORS 允許伺服器指定存取哪些網域。

### 2.2 CORS配置

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

## 3.CSRF保護

### 3.1 什麼時候需要CSRF？

- **純 REST API（JWT/令牌身份驗證）**：停用 CSRF（基於令牌的自我保護）
- **伺服器渲染頁面（Thymeleaf + 表單登入）**：啟用 CSRF
- **SPA + 基於 Cookie 的身份驗證**：使用 cookie 儲存庫啟用 CSRF

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

## 4. 安全標頭

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

## 5. 速率限制

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

## 6. OWASP Top 10 — Spring Boot 清單

| ＃|威脅| Spring Boot 解決方案 |
|---|--------|---------------------|
| A01 |存取控制被破壞 | @PreAuthorize，基於URL的授權 |
| A02 |密碼失敗 | BCrypt、AES 加密、TLS |
| A03 |注射|參數化查詢 (JPA)、輸入驗證 |
| A04 |不安全的設計|威脅建模，最小特權 |
| A05 |安全設定錯誤|安全標頭，停用詳細錯誤 |
| A06 |易受攻擊的元件 | Dependabot，spring-boot 依賴管理 |
| A07|身分驗證失敗 |強密碼、JWT 過期、暴力保護 |
| A08 |資料完整性故障 | CSRF 保護，簽署 JWT |
| A09|記錄失敗 |結構化日誌記錄、稽核追蹤|
| A10| SSRF | URL 驗證、外部呼叫白名單 |

---

## 總結

- 方法安全性（@PreAuthorize、@PostAuthorize）允許使用 SpEL 表達式在服務層進行授權
- 正確配置的 CORS 允許前端跨域存取的來源、方法、標頭
- 安全標頭（HSTS、CSP、X-Frame-Options）可防止 XSS、點擊劫持和注入攻擊

## 練習

1. 實作安全方法：@PreAuthorize 在允許編輯/刪除之前檢查使用者是否為資源的擁有者
2. CORS配置允許React前端（localhost:3000和生產域）存取API
3.實施限速中間件：每個IP最多100個請求/分鐘，回傳429 Too Many Requests
