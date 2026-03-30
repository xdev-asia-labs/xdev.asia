---
id: 019c9617-fc10-7010-a010-fc1000000010
title: 'Bài 10: JWT Authentication — Stateless Security cho REST API'
slug: bai-10-jwt-authentication
description: >-
  JSON Web Token (JWT) internals. Tạo JWT với jjwt library. Custom JwtAuthenticationFilter,
  refresh token flow. Stateless session management cho REST API.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Bảo mật ứng dụng"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

## Giới thiệu

HTTP Basic Authentication yêu cầu gửi credentials mỗi request — không phù hợp cho production REST APIs. JWT (JSON Web Token) cho phép stateless authentication: server không cần lưu session, mọi thông tin đều nằm trong token. Đây là chuẩn authentication phổ biến nhất cho REST API và SPA.

---

## 1. JWT Internals

### 1.1 Cấu trúc JWT

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

### 1.2 Authentication Flow

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

## 2. Implementation

### 2.1 Dependencies

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

### 2.2 JWT Configuration

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

### 2.3 JWT Service

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

### 2.4 JWT Authentication Filter

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

### 2.5 Security Configuration với JWT

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

## 3. Auth Controller

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

## 4. Testing JWT Authentication

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

## Tóm tắt

- JWT cho phép stateless authentication: server không lưu session, mọi thông tin trong token
- JwtAuthenticationFilter kiểm tra và validate token mỗi request, set SecurityContext nếu hợp lệ
- Refresh token flow cho phép renew access token mà không cần đăng nhập lại

## Bài tập

1. Implement đầy đủ JWT authentication flow: register, login, refresh token, access protected endpoint
2. Thêm roles vào JWT claims, cấu hình authorization để phân biệt USER và ADMIN endpoints
3. Implement token blacklist (lưu trong Redis hoặc in-memory) để revoke tokens khi user logout
