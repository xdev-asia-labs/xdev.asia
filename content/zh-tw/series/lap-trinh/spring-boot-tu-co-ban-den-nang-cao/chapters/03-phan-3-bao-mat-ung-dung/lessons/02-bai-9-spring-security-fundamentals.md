---
id: 019c9617-fc09-7009-a009-fc0900000009
title: 第 9 課：Spring Security 基礎知識 — 身分驗證與授權
slug: bai-9-spring-security-fundamentals
description: >-
  SecurityFilterChain、HttpSecurity 配置。
  UserDetailsS​​ervice、PasswordEncoder、登入表單、HTTP Basic。使用 @Secured、@PreAuthorize
  的角色為基礎的存取控制 (RBAC)。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 第 3 部分：應用程式安全
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: Spring Boot 4：從基礎到高級
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3215" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3215)"/>

  <!-- Decorations -->
  <g>
    <circle cx="878" cy="184" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="656" cy="62" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="934" cy="200" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="712" cy="78" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="990" cy="216" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="244" x2="1100" y2="324" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="274" x2="1050" y2="344" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="977.7749907475932,124.5 977.7749907475932,163.5 944,183 910.2250092524068,163.5 910.2250092524068,124.50000000000001 944,105" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 程式設計 — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：Spring 安全基礎知識 —</tspan>
      <tspan x="60" dy="42">認證與授權</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：應用程式安全</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

Spring Security 是 Java 生態系統中最強大的安全框架。預設情況下，只需新增依賴項，Spring Boot 就會自動保護所有端點。本文介紹如何設定身份驗證、授權並了解安全過濾器鏈。

---

## 1.Spring安全架構

### 1.1 安全過濾器鏈

```
HTTP Request
    │
    ▼
┌─────────────────────────────────┐
│  SecurityFilterChain             │
│                                  │
│  ┌───────────────────────────┐  │
│  │ CorsFilter                │  │
│  ├───────────────────────────┤  │
│  │ CsrfFilter                │  │
│  ├───────────────────────────┤  │
│  │ UsernamePasswordAuth...   │  │
│  ├───────────────────────────┤  │
│  │ BasicAuthenticationFilter │  │
│  ├───────────────────────────┤  │
│  │ BearerTokenAuth... (JWT)  │  │
│  ├───────────────────────────┤  │
│  │ AuthorizationFilter       │  │
│  ├───────────────────────────┤  │
│  │ ExceptionTranslation...   │  │
│  └───────────────────────────┘  │
│                                  │
└─────────────────────────────────┘
    │
    ▼
DispatcherServlet → Controller
```

### 1.2 核心概念

|概念 |描述 |
|--------|--------|
| **身份驗證** |驗證：「你是誰？」 |
| **授權** |去中心化：「你能做什麼？」 |
| **校長** |目前已通過身分驗證的使用者 |
| **授予權限** |使用者權限/角色 |
| **安全情境** |儲存驗證資訊 |

---

## 2. 基本配置

### 2.1 依賴關係

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

### 2.2 安全過濾鏈配置

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Disable cho REST API
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/products/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/users/**").hasAnyRole("USER", "ADMIN")
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .httpBasic(Customizer.withDefaults());

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

### 2.3 授權規則

```java
// Patterns
.requestMatchers("/public/**").permitAll()         // Ai cũng truy cập được
.requestMatchers("/admin/**").hasRole("ADMIN")     // Chỉ ADMIN
.requestMatchers("/api/**").hasAnyRole("USER", "ADMIN")
.requestMatchers("/api/**").hasAuthority("WRITE_ARTICLES")
.anyRequest().authenticated()                       // Phải đăng nhập
.anyRequest().denyAll()                             // Chặn tất cả
```

---

## 3. UserDetailsService — 自訂使用者存儲

### 3.1 實體與儲存庫

```java
@Entity
@Table(name = "users")
public class User extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password; // BCrypt hash

    @Column(nullable = false)
    private boolean enabled = true;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "role")
    private Set<String> roles = new HashSet<>();
}

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}
```

### 3.2 自訂使用者詳細資訊服務

```java
@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() ->
                new UsernameNotFoundException("User not found: " + username));

        return org.springframework.security.core.userdetails.User.builder()
            .username(user.getUsername())
            .password(user.getPassword())
            .roles(user.getRoles().toArray(String[]::new))
            .disabled(!user.isEnabled())
            .build();
    }
}
```

### 3.3 用戶註冊

```java
@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserResponse register(RegisterRequest request) {
        if (userRepository.existsByUsername(request.username())) {
            throw new DuplicateResourceException("User", "username", request.username());
        }
        if (userRepository.existsByEmail(request.email())) {
            throw new DuplicateResourceException("User", "email", request.email());
        }

        User user = new User();
        user.setUsername(request.username());
        user.setEmail(request.email());
        user.setPassword(passwordEncoder.encode(request.password()));
        user.setRoles(Set.of("USER"));
        user.setEnabled(true);

        User saved = userRepository.save(user);
        return UserResponse.from(saved);
    }
}
```

---

## 4. 身份驗證管理器

```java
@Configuration
public class SecurityConfig {

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public AuthenticationProvider authenticationProvider(
            CustomUserDetailsService userDetailsService,
            PasswordEncoder passwordEncoder) {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder);
        return provider;
    }
}
```

---

## 5.取得目前使用者訊息

```java
@RestController
@RequestMapping("/api/users")
public class UserController {

    // Cách 1: @AuthenticationPrincipal
    @GetMapping("/me")
    public UserResponse getCurrentUser(@AuthenticationPrincipal UserDetails userDetails) {
        return userService.findByUsername(userDetails.getUsername());
    }

    // Cách 2: SecurityContextHolder
    @GetMapping("/profile")
    public UserResponse getProfile() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        return userService.findByUsername(username);
    }
}
```

---

## 6. 密碼編碼最佳實踐

```java
@Bean
public PasswordEncoder passwordEncoder() {
    // BCrypt: salt tự động, strength mặc định = 10
    return new BCryptPasswordEncoder();

    // Hoặc DelegatingPasswordEncoder cho multiple encoders
    // return PasswordEncoderFactories.createDelegatingPasswordEncoder();
}

// Verify password
boolean matches = passwordEncoder.matches(rawPassword, encodedPassword);
```

> **重要**：切勿以純文字形式儲存密碼。始終使用 BCrypt 或 Argon2。

---

## 總結

- Spring Security 使用 SecurityFilterChain 透過一系列過濾器來處理身份驗證和授權
- UserDetailsService 允許從資料庫自訂使用者存儲，結合 BCryptPasswordEncoder 來保護密碼
- 透過 HttpSecurity 設定的授權規則：permitAll()、hasRole()、hasAuthority()、authentiated()

## 練習

1. 為 REST API 設定 SecurityFilterChain：公共端點 (GET /api/products)、受保護端點 (/api/users)、管理端點 (/api/admin)
2. 實作 CustomUserDetailsService 從資料庫載入用戶，使用 BCrypt 編碼的密碼註冊新用戶
3. 建立端點 `/api/auth/register` 和 `/api/users/me`，使用 HTTP Basic 測試驗證流程
