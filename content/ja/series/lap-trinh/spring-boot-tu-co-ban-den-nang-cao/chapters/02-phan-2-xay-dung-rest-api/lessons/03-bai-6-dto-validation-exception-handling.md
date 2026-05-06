---
id: 019c9617-fc06-7006-a006-fc0600000006
title: 'レッスン 6: DTO パターン、検証、およびグローバル例外処理'
slug: bai-6-dto-validation-exception-handling
description: >-
  レコード クラスを使用したデータ転送オブジェクト パターン。 Bean 検証 (@Valid、@NotNull、@Size、カスタム バリデータ)。
  @ControllerAdvice、@ExceptionHandler、問題の詳細 RFC 9457。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 2: REST API の構築'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: 基本から上級まで'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5047" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5047)"/>

  <!-- Decorations -->
  <g>
    <circle cx="765" cy="105" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="930" cy="130" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1095" cy="155" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="760" cy="180" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="925" cy="205" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="195" x2="1100" y2="275" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="225" x2="1050" y2="295" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1070.9807621135333,230 1070.9807621135333,260 1045,275 1019.0192378864668,260 1019.0192378864668,230 1045,215" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 プログラミング — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 6: DTO パターン、検証、グローバル</tspan>
      <tspan x="60" dy="42">例外処理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: REST API の構築</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

運用環境では、エンティティを API に直接公開することはありません。 DTO パターンは、表現層を永続層から分離します。 Bean Validation とグローバル例外処理を組み合わせることで、堅牢でプロフェッショナルな API を構築できます。

---

## 1. Java レコードを使用した DTO パターン

### 1.1 なぜ DTO が必要なのでしょうか?

```
Client ←→ Controller ←→ Service ←→ Repository ←→ Database
           │                          │
         DTO/Request              Entity/Model
         DTO/Response

Lý do:
- Không expose fields nhạy cảm (password hash, internal IDs)
- Decouple API contract khỏi database schema
- Validate input tại boundary
- Versioning API dễ dàng hơn
```

### 1.2 DTO に Java レコードを使用する

```java
// Entity - ánh xạ database
@Entity
@Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String passwordHash;
    private String role;
    private boolean active;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    // getters, setters...
}

// Request DTO - nhận input từ client
public record CreateUserRequest(
    String name,
    String email,
    String password
) {}

public record UpdateUserRequest(
    String name,
    String email
) {}

// Response DTO - trả về cho client
public record UserResponse(
    Long id,
    String name,
    String email,
    String role,
    LocalDateTime createdAt
) {
    // Factory method từ Entity
    public static UserResponse from(User user) {
        return new UserResponse(
            user.getId(),
            user.getName(),
            user.getEmail(),
            user.getRole(),
            user.getCreatedAt()
        );
    }
}
```

### 1.3 サービス内のマッピング

```java
@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserResponse create(CreateUserRequest request) {
        User user = new User();
        user.setName(request.name());
        user.setEmail(request.email());
        user.setPasswordHash(passwordEncoder.encode(request.password()));
        user.setRole("USER");
        user.setActive(true);
        user.setCreatedAt(LocalDateTime.now());

        User saved = userRepository.save(user);
        return UserResponse.from(saved);
    }

    public List<UserResponse> findAll() {
        return userRepository.findAll().stream()
            .map(UserResponse::from)
            .toList();
    }
}
```

---

## 2. Bean の検証

### 2.1 依存関係

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

### 2.2 検証アノテーション

```java
public record CreateUserRequest(
    @NotBlank(message = "Tên không được để trống")
    @Size(min = 2, max = 100, message = "Tên phải từ 2-100 ký tự")
    String name,

    @NotBlank(message = "Email không được để trống")
    @Email(message = "Email không hợp lệ")
    String email,

    @NotBlank(message = "Mật khẩu không được để trống")
    @Size(min = 8, message = "Mật khẩu phải ít nhất 8 ký tự")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$",
             message = "Mật khẩu phải có chữ hoa, chữ thường và số")
    String password,

    @Min(value = 0, message = "Tuổi phải >= 0")
    @Max(value = 150, message = "Tuổi phải <= 150")
    Integer age,

    @NotNull(message = "Ngày sinh không được null")
    @Past(message = "Ngày sinh phải là ngày trong quá khứ")
    LocalDate dateOfBirth
) {}
```

### 2.3 コントローラーで検証を有効にする

```java
@PostMapping
public ResponseEntity<UserResponse> createUser(
        @Valid @RequestBody CreateUserRequest request) {
    // @Valid trigger validation
    // Nếu invalid, Spring tự động throw MethodArgumentNotValidException
    UserResponse user = userService.create(request);
    return ResponseEntity.status(HttpStatus.CREATED).body(user);
}
```

### 2.4 一般的な検証アノテーション

|注釈 |説明 |
|----------|----------|
| `@NotNull` | null ではありません |
| `@NotBlank` | null ではない、空ではない、単なるスペースではない |
| `@NotEmpty` | null ではなく、空ではありません (文字列、コレクションの場合) |
| `@Size(min, max)` |制限長 |
| `@Min` / `@Max` |数制限 |
| `@Email` |電子メール形式 |
| `@Pattern` |正規表現パターン |
| `@Past` / `@Future` |過去/未来の日付 |
| `@Positive` / `@Negative` |正/負の数 |

### 2.5 カスタムバリデーター

```java
// Tạo custom annotation
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UniqueEmailValidator.class)
public @interface UniqueEmail {
    String message() default "Email đã được sử dụng";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}

// Implement validator
public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {

    private final UserRepository userRepository;

    public UniqueEmailValidator(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public boolean isValid(String email, ConstraintValidatorContext context) {
        if (email == null) return true; // @NotBlank sẽ handle null
        return !userRepository.existsByEmail(email);
    }
}

// Sử dụng
public record CreateUserRequest(
    @NotBlank String name,
    @Email @UniqueEmail String email,
    @NotBlank @Size(min = 8) String password
) {}
```

---

## 3. グローバル例外処理

### 3.1 問題の詳細 (RFC 9457)

Spring Boot 4.x は、ErrorDetail — エラー応答の RFC 9457 標準をサポートしています。

```json
{
    "type": "https://api.example.com/errors/validation",
    "title": "Validation Error",
    "status": 400,
    "detail": "Request validation failed",
    "instance": "/api/v1/users",
    "errors": [
        {"field": "email", "message": "Email không hợp lệ"},
        {"field": "password", "message": "Mật khẩu phải ít nhất 8 ký tự"}
    ]
}
```

### 3.2 @ControllerAdvice — グローバル例外ハンドラー

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    // Validation errors
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ProblemDetail handleValidationErrors(
            MethodArgumentNotValidException ex,
            HttpServletRequest request) {

        ProblemDetail problem = ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);
        problem.setTitle("Validation Error");
        problem.setDetail("Request validation failed");
        problem.setInstance(URI.create(request.getRequestURI()));

        List<Map<String, String>> errors = ex.getBindingResult()
            .getFieldErrors().stream()
            .map(error -> Map.of(
                "field", error.getField(),
                "message", error.getDefaultMessage() != null
                    ? error.getDefaultMessage() : "Invalid value"
            ))
            .toList();

        problem.setProperty("errors", errors);
        return problem;
    }

    // Resource not found
    @ExceptionHandler(ResourceNotFoundException.class)
    public ProblemDetail handleNotFound(
            ResourceNotFoundException ex,
            HttpServletRequest request) {

        ProblemDetail problem = ProblemDetail.forStatus(HttpStatus.NOT_FOUND);
        problem.setTitle("Resource Not Found");
        problem.setDetail(ex.getMessage());
        problem.setInstance(URI.create(request.getRequestURI()));
        return problem;
    }

    // Duplicate resource
    @ExceptionHandler(DuplicateResourceException.class)
    public ProblemDetail handleDuplicate(
            DuplicateResourceException ex,
            HttpServletRequest request) {

        ProblemDetail problem = ProblemDetail.forStatus(HttpStatus.CONFLICT);
        problem.setTitle("Duplicate Resource");
        problem.setDetail(ex.getMessage());
        problem.setInstance(URI.create(request.getRequestURI()));
        return problem;
    }

    // Catch-all for unexpected errors
    @ExceptionHandler(Exception.class)
    public ProblemDetail handleGeneral(
            Exception ex,
            HttpServletRequest request) {

        ProblemDetail problem = ProblemDetail.forStatus(
            HttpStatus.INTERNAL_SERVER_ERROR);
        problem.setTitle("Internal Server Error");
        problem.setDetail("An unexpected error occurred");
        problem.setInstance(URI.create(request.getRequestURI()));
        // Không expose exception details cho client trong production
        return problem;
    }
}
```

### 3.3 カスタム例外クラス

```java
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String resource, String field, Object value) {
        super(String.format("%s not found with %s: '%s'", resource, field, value));
    }
}

public class DuplicateResourceException extends RuntimeException {
    public DuplicateResourceException(String resource, String field, Object value) {
        super(String.format("%s already exists with %s: '%s'", resource, field, value));
    }
}

// Sử dụng trong service
@Service
public class UserService {
    public UserResponse findById(Long id) {
        return userRepository.findById(id)
            .map(UserResponse::from)
            .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
    }
}
```

---

## 4. Spring Boot で ProblemDetail を有効にする

```yaml
# application.yaml
spring:
  mvc:
    problemdetails:
      enabled: true # Bật ProblemDetail cho tất cả exceptions
```

---

## 5. 応答エンベロープ パターン (オプション)

```java
// API Response wrapper
public record ApiResponse<T>(
    boolean success,
    T data,
    String message,
    LocalDateTime timestamp
) {
    public static <T> ApiResponse<T> ok(T data) {
        return new ApiResponse<>(true, data, null, LocalDateTime.now());
    }

    public static <T> ApiResponse<T> ok(T data, String message) {
        return new ApiResponse<>(true, data, message, LocalDateTime.now());
    }

    public static <T> ApiResponse<T> error(String message) {
        return new ApiResponse<>(false, null, message, LocalDateTime.now());
    }
}

// Sử dụng
@GetMapping("/{id}")
public ResponseEntity<ApiResponse<UserResponse>> getUser(@PathVariable Long id) {
    UserResponse user = userService.findById(id);
    return ResponseEntity.ok(ApiResponse.ok(user));
}
```

---

## 概要

- DTO パターンは、不変 DTO に Java レコードを使用して、API コントラクトをデータベース エンティティから分離します。
- Bean Validation (@Valid、@NotBlank、@Email...) はコントローラー層で入力を検証し、カスタムバリデーターをサポートします
- @RestControllerAdvice + @ExceptionHandler は、標準化されたエラー応答に ProblemDetail (RFC 9457) を使用して、例外を一元的に処理します。

## 演習

1. Product エンティティの DTO を作成します: CreateProductRequest (検証あり)、UpdateProductRequest、ProductResponse (原価公開なし)
2. カスタムバリデータを実装する `@ValidSlug` スラグに小文字、数字、ダッシュのみが含まれていることを確認してください
3. 少なくとも 4 つの異なるタイプの例外を処理し、RFC 9457 標準の ProblemDetail を返す GlobalExceptionHandler を作成します。
