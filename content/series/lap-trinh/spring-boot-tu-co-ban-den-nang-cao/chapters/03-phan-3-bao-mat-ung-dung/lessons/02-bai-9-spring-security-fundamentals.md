---
id: 019c9617-fc09-7009-a009-fc0900000009
title: 'Bài 9: Spring Security Fundamentals — Authentication & Authorization'
slug: bai-9-spring-security-fundamentals
description: >-
  SecurityFilterChain, HttpSecurity configuration. UserDetailsService, PasswordEncoder,
  form login, HTTP Basic. Role-based access control (RBAC) với @Secured, @PreAuthorize.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: Bảo mật ứng dụng"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

## Giới thiệu

Spring Security là framework bảo mật mạnh mẽ nhất trong hệ sinh thái Java. Mặc định, chỉ cần thêm dependency, Spring Boot tự động bảo vệ tất cả endpoints. Bài này hướng dẫn cách cấu hình authentication, authorization và hiểu security filter chain.

---

## 1. Spring Security Architecture

### 1.1 Security Filter Chain

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

### 1.2 Core Concepts

| Concept | Mô tả |
|---------|--------|
| **Authentication** | Xác thực: "Bạn là ai?" |
| **Authorization** | Phân quyền: "Bạn được làm gì?" |
| **Principal** | User hiện tại đã xác thực |
| **GrantedAuthority** | Quyền/role của user |
| **SecurityContext** | Lưu trữ authentication info |

---

## 2. Cấu hình cơ bản

### 2.1 Dependency

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

### 2.2 SecurityFilterChain Configuration

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

### 2.3 Authorization Rules

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

## 3. UserDetailsService — Custom User Store

### 3.1 Entity & Repository

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

### 3.2 Custom UserDetailsService

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

### 3.3 Đăng ký User

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

## 4. Authentication Manager

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

## 5. Lấy thông tin User hiện tại

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

## 6. Password Encoding Best Practices

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

> **Quan trọng**: Không bao giờ lưu password dạng plain text. Luôn sử dụng BCrypt hoặc Argon2.

---

## Tóm tắt

- Spring Security sử dụng SecurityFilterChain để xử lý authentication và authorization thông qua chuỗi filters
- UserDetailsService cho phép custom user store từ database, kết hợp với BCryptPasswordEncoder bảo mật password
- Authorization rules cấu hình qua HttpSecurity: permitAll(), hasRole(), hasAuthority(), authenticated()

## Bài tập

1. Cấu hình SecurityFilterChain cho REST API: public endpoints (GET /api/products), protected endpoints (/api/users), admin endpoints (/api/admin)
2. Implement CustomUserDetailsService load user từ database, đăng ký user mới với password BCrypt encoded
3. Tạo endpoint `/api/auth/register` và `/api/users/me`, test authentication flow với HTTP Basic
