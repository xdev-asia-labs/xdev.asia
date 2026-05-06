---
id: 019c9617-fc10-7010-a010-fc1000000010
title: 第 10 課：JWT 驗證 — REST API 的無狀態安全性
slug: bai-10-jwt-authentication
description: >-
  JSON Web 令牌 (JWT) 內部結構。使用 jjwt 庫產生 JWT。自訂JwtAuthenticationFilter，刷新令牌流程。 REST
  API 的無狀態會話管理。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 第 3 部分：應用程式安全
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: Spring Boot 4：從基礎到高級
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1544" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1544)"/>

  <!-- Decorations -->
  <g>
    <circle cx="783" cy="159" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="966" cy="202" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="649" cy="245" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="832" cy="288" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="1015" cy="71" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="209" x2="1100" y2="289" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="239" x2="1050" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="997.1051177665153,137 997.1051177665153,181 959,203 920.8948822334847,181 920.8948822334847,137 959,115" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 程式設計 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：JWT 身份驗證 — 無狀態</tspan>
      <tspan x="60" dy="42">REST API 的安全性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：應用程式安全</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

HTTP 基本驗證需要在每個請求上傳送憑證 - 不適合生產 REST API。 JWT（JSON Web Token）允許無狀態身份驗證：伺服器不需要保存會話，所有資訊都在令牌中。這是 REST API 和 SPA 最受歡迎的身份驗證標準。

---

## 1. JWT 內部結構

### 1.1 JWT結構

```
Header.Payload.Signature

eyJhbGciOiJIUzI1NiJ9.
eyJzdWIiOiJkdXkiLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcxMTgwMDAwMH0.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

┌─────────────────────────────────┐
│ Header                          │
│ {"alg": "HS256", "typ": "JWT"}  │
├─────────────────────────────────┤
│ Payload (Claims)                │
│ {                               │
│   "sub": "duy",                 │
│   "roles": ["USER"],            │
│   "iat": 1711800000,            │
│   "exp": 1711803600             │
│ }                               │
├─────────────────────────────────┤
│ Signature                       │
│ HMACSHA256(                     │
│   base64(header) + "." +        │
│   base64(payload),              │
│   secret                        │
│ )                               │
└─────────────────────────────────┘
```

### 1.2 身份驗證流程

```
Client                          Server
  │                               │
  │  POST /api/auth/login         │
  │  {username, password}  ──────►│
  │                               │── Validate credentials
  │                               │── Generate JWT
  │  ◄────────────────────────────│
  │  {accessToken, refreshToken}  │
  │                               │
  │  GET /api/users/me            │
  │  Authorization: Bearer <JWT> ─►│
  │                               │── Validate JWT signature
  │                               │── Extract claims
  │  ◄────────────────────────────│── Return protected resource
  │  {user data}                  │
```

---

## 2. 實施

### 2.1 依賴關係

```xml
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.12.6</version>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.12.6</version>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId>
    <version>0.12.6</version>
    <scope>runtime</scope>
</dependency>
```

### 2.2 JWT配置

```yaml
# application.yaml
app:
  security:
    jwt:
      secret-key: "dGhpcy1pcy1hLXZlcnktc2VjdXJlLWtleS1mb3Itand0LXNpZ25pbmc="
      access-token-expiration: 3600000    # 1 hour
      refresh-token-expiration: 604800000 # 7 days
```

```java
@ConfigurationProperties(prefix = "app.security.jwt")
public record JwtProperties(
    String secretKey,
    long accessTokenExpiration,
    long refreshTokenExpiration
) {}
```

### 2.3 JWT 服務

```java
@Service
public class JwtService {

    private final JwtProperties jwtProperties;
    private final SecretKey signingKey;

    public JwtService(JwtProperties jwtProperties) {
        this.jwtProperties = jwtProperties;
        this.signingKey = Keys.hmacShaKeyFor(
            Decoders.BASE64.decode(jwtProperties.secretKey())
        );
    }

    public String generateAccessToken(UserDetails userDetails) {
        Map<String, Object> claims = Map.of(
            "roles", userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .toList()
        );
        return buildToken(claims, userDetails.getUsername(),
                          jwtProperties.accessTokenExpiration());
    }

    public String generateRefreshToken(UserDetails userDetails) {
        return buildToken(Map.of(), userDetails.getUsername(),
                          jwtProperties.refreshTokenExpiration());
    }

    private String buildToken(Map<String, Object> extraClaims,
                               String subject, long expiration) {
        return Jwts.builder()
            .claims(extraClaims)
            .subject(subject)
            .issuedAt(new Date())
            .expiration(new Date(System.currentTimeMillis() + expiration))
            .signWith(signingKey)
            .compact();
    }

    public String extractUsername(String token) {
        return extractClaims(token).getSubject();
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        String username = extractUsername(token);
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractClaims(token).getExpiration().before(new Date());
    }

    private Claims extractClaims(String token) {
        return Jwts.parser()
            .verifyWith(signingKey)
            .build()
            .parseSignedClaims(token)
            .getPayload();
    }
}
```

### 2.4 JWT 驗證過濾器

```java
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    public JwtAuthenticationFilter(JwtService jwtService,
                                    UserDetailsService userDetailsService) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                     HttpServletResponse response,
                                     FilterChain filterChain)
            throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String jwt = authHeader.substring(7);

        try {
            String username = jwtService.extractUsername(jwt);

            if (username != null &&
                SecurityContextHolder.getContext().getAuthentication() == null) {

                UserDetails userDetails = userDetailsService
                    .loadUserByUsername(username);

                if (jwtService.isTokenValid(jwt, userDetails)) {
                    UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(
                            userDetails, null, userDetails.getAuthorities());

                    authToken.setDetails(
                        new WebAuthenticationDetailsSource()
                            .buildDetails(request));

                    SecurityContextHolder.getContext()
                        .setAuthentication(authToken);
                }
            }
        } catch (JwtException e) {
            // Token invalid or expired — continue without authentication
        }

        filterChain.doFilter(request, response);
    }
}
```

### 2.5 JWT 安全配置

```java
@Configuration
@EnableWebSecurity
@EnableConfigurationProperties(JwtProperties.class)
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter) {
        this.jwtAuthFilter = jwtAuthFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/products/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtAuthFilter,
                UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
```

---

## 3. 驗證控制器

```java
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authManager;
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private final AuthService authService;

    public AuthController(AuthenticationManager authManager,
                          JwtService jwtService,
                          UserDetailsService userDetailsService,
                          AuthService authService) {
        this.authManager = authManager;
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(
            @Valid @RequestBody RegisterRequest request) {
        UserResponse user = authService.register(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(
            @Valid @RequestBody LoginRequest request) {

        authManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.username(), request.password()));

        UserDetails userDetails = userDetailsService
            .loadUserByUsername(request.username());

        String accessToken = jwtService.generateAccessToken(userDetails);
        String refreshToken = jwtService.generateRefreshToken(userDetails);

        return ResponseEntity.ok(new AuthResponse(accessToken, refreshToken));
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refresh(
            @RequestBody RefreshTokenRequest request) {
        String username = jwtService.extractUsername(request.refreshToken());
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);

        if (jwtService.isTokenValid(request.refreshToken(), userDetails)) {
            String newAccessToken = jwtService.generateAccessToken(userDetails);
            return ResponseEntity.ok(
                new AuthResponse(newAccessToken, request.refreshToken()));
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
}

// DTOs
public record LoginRequest(
    @NotBlank String username,
    @NotBlank String password
) {}

public record RegisterRequest(
    @NotBlank @Size(min = 3, max = 50) String username,
    @NotBlank @Email String email,
    @NotBlank @Size(min = 8) String password
) {}

public record AuthResponse(String accessToken, String refreshToken) {}
public record RefreshTokenRequest(String refreshToken) {}
```

---

## 4. 測試 JWT 身份驗證

```bash
# 1. Register
http POST localhost:8080/api/auth/register \
  username=duy email=duy@example.com password=Secret123

# 2. Login
http POST localhost:8080/api/auth/login \
  username=duy password=Secret123
# Response: {"accessToken": "eyJ...", "refreshToken": "eyJ..."}

# 3. Access protected resource
http GET localhost:8080/api/users/me \
  "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9..."

# 4. Refresh token
http POST localhost:8080/api/auth/refresh \
  refreshToken=eyJ...
```

---

## 總結

- JWT允許無狀態身份驗證：伺服器不會保存會話或令牌中的任何信息
- JwtAuthenticationFilter 檢查並驗證每個請求的令牌，如果有效則設定 SecurityContext
- 刷新令牌流程允許更新存取令牌而無需再次登錄

## 練習

1. JWT身分驗證流程的完整實作：註冊、登入、刷新令牌、存取受保護端點
2.在JWT聲明中新增角色，配置授權以區分USER和ADMIN端點
3. 實作令牌黑名單（儲存在Redis或記憶體中）以在使用者登出時撤銷令牌
