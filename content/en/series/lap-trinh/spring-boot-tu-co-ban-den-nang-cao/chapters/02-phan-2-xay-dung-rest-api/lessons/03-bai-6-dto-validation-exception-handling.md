---
id: 019c9617-fc06-7006-a006-fc0600000006
title: 'Lesson 6: DTO Pattern, Validation & Global Exception Handling'
slug: bai-6-dto-validation-exception-handling
description: >-
  Data Transfer Object pattern with record classes. Bean Validation (@Valid,
  @NotNull, @Size, custom validator). @ControllerAdvice, @ExceptionHandler,
  ProblemDetail RFC 9457.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 'Part 2: Building REST API'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: From Basics to Advanced'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 Programming — Lesson 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 6: DTO Pattern, Validation & Global</tspan>
      <tspan x="60" dy="42">Exception Handling</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Building REST API</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

In production, you never expose Entities directly to the API. The DTO pattern separates the representation layer from the persistence layer. Combined with Bean Validation and Global Exception Handling, you will build a robust and professional API.

---

## 1. DTO Pattern with Java Records

### 1.1 Why do we need DTO?

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

### 1.2 Use Java Records for DTO

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

### 1.3 Mapping in Service

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

## 2. Bean Validation

### 2.1 Dependency

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

### 2.2 Validation Annotations

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

### 2.3 Enable Validation in Controller

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

### 2.4 Common validation annotations

| Annotation | Description |
|-----------|--------|
| `@NotNull` | Not null |
| `@NotBlank` | Not null, not empty, not just spaces |
| `@NotEmpty` | Not null, not empty (for String, Collection) |
| `@Size(min, max)` | Limit length |
| `@Min` / `@Max` | Number limit |
| `@Email` | Email format |
| `@Pattern` | Regex patterns |
| `@Past` / `@Future` | Date in the past/future |
| `@Positive` / `@Negative` | Positive/negative numbers |

### 2.5 Custom Validator

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

## 3. Global Exception Handling

### 3.1 ProblemDetail (RFC 9457)

Spring Boot 4.x supports ProblemDetail — RFC 9457 standard for error responses:

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

### 3.2 @ControllerAdvice — Global Exception Handler

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

### 3.3 Custom Exception Classes

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

## 4. Enable ProblemDetail in Spring Boot

```yaml
# application.yaml
spring:
  mvc:
    problemdetails:
      enabled: true # Bật ProblemDetail cho tất cả exceptions
```

---

## 5. Response Envelope Pattern (Optional)

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

## Summary

- DTO pattern separates API contracts from database entities, using Java Records for immutable DTOs
- Bean Validation (@Valid, @NotBlank, @Email...) validates input at the controller layer, supports custom validators
- @RestControllerAdvice + @ExceptionHandler handles exceptions centrally, using ProblemDetail (RFC 9457) for standardized error responses

## Exercises

1. Create DTO for Product entity: CreateProductRequest (with validation), UpdateProductRequest, ProductResponse (without exposing cost price)
2. Implement custom validator `@ValidSlug` check the slug only contains lowercase letters, numbers and dashes
3. Create a GlobalExceptionHandler that handles at least 4 different types of exceptions, returning RFC 9457 standard ProblemDetail
