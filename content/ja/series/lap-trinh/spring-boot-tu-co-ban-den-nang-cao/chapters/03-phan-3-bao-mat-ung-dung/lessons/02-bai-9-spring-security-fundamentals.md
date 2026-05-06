---
id: 019c9617-fc09-7009-a009-fc0900000009
title: 'レッスン 9: Spring セキュリティの基礎 — 認証と認可'
slug: bai-9-spring-security-fundamentals
description: >-
  SecurityFilterChain、HttpSecurityの構成。
  UserDetailsS​​ervice、PasswordEncoder、ログインフォーム、HTTP Basic。
  @Secured、@PreAuthorize を使用したロールベースのアクセス制御 (RBAC)。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 3: アプリケーションのセキュリティ'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: 基本から上級まで'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 プログラミング — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: Spring セキュリティの基礎 —</tspan>
      <tspan x="60" dy="42">認証と認可</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: アプリケーションのセキュリティ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Spring Security は、Java エコシステムで最も強力なセキュリティ フレームワークです。デフォルトでは、依存関係を追加するだけで、Spring Boot がすべてのエンドポイントを自動的に保護します。この記事では、認証、認可を構成し、セキュリティ フィルター チェーンを理解する方法について説明します。

---

## 1. Spring セキュリティ アーキテクチャ

### 1.1 セキュリティ フィルター チェーン

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

### 1.2 中心となる概念

|コンセプト |説明 |
|----------|----------|
| **認証** |認証：「あなたは誰ですか？」 |
| **承認** |分散化：「何ができるの？」 |
| **校長** |現在認証されているユーザー |
| **付与された権限** |ユーザーの権限/役割 |
| **セキュリティコンテキスト** |認証情報を保存します |

---

## 2. 基本構成

### 2.1 依存関係

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

### 2.2 SecurityFilterChain の構成

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

### 2.3 認可ルール

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

## 3. UserDetailsService — カスタム ユーザー ストア

### 3.1 エンティティとリポジトリ

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

### 3.2 カスタム UserDetailsService

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

### 3.3 ユーザー登録

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

## 4. 認証マネージャー

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

## 5. 現在のユーザー情報を取得する

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

## 6. パスワードエンコーディングのベストプラクティス

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

> **重要**: パスワードをプレーンテキストで保存しないでください。常に BCrypt または Argon2 を使用してください。

---

## 概要

- Spring Security は SecurityFilterChain を使用して、フィルターのチェーンを通じて認証と認可を処理します。
- UserDetailsService を使用すると、データベースからのカスタム ユーザー ストアを BCryptPasswordEncoder と組み合わせてパスワードを保護できます
- HttpSecurity 経由で設定された認可ルール：permitAll()、hasRole()、hasAuthority()、authenticated()

## 演習

1. REST API 用に SecurityFilterChain を構成します: パブリック エンドポイント (GET /api/products)、保護されたエンドポイント (/api/users)、管理エンドポイント (/api/admin)
2. CustomUserDetailsService を実装してデータベースからユーザーをロードし、BCrypt でエンコードされたパスワードを使用して新しいユーザーを登録します
3. エンドポイントの作成 `/api/auth/register` そして `/api/users/me`、HTTP Basic を使用した認証フローのテスト
