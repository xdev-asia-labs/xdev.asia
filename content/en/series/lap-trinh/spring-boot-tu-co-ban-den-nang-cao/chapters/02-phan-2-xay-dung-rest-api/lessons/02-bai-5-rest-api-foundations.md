---
id: 019c9617-fc05-7005-a005-fc0500000005
title: 'Lesson 5: REST API Foundations — @RestController & Request Mapping'
slug: bai-5-rest-api-foundations
description: >-
  HTTP methods, @RestController, @RequestMapping, @GetMapping, @PostMapping.
  Path variables, query parameters, request headers. Response entities and
  status codes.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 'Part 2: Building REST API'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: From Basics to Advanced'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1764" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1764)"/>

  <!-- Decorations -->
  <g>
    <circle cx="735" cy="95" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="870" cy="30" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1005" cy="225" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="640" cy="160" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="775" cy="95" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="105" x2="1100" y2="185" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="135" x2="1050" y2="205" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1039.6410161513775,185 1039.6410161513775,225 1005,245 970.3589838486224,225 970.3589838486224,185 1005,165" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 Programming — Lesson 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 5: REST API Foundations —</tspan>
      <tspan x="60" dy="42">@RestController & Request Mapping</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Building REST API</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

REST API is the most common method of communication in modern backend applications. Spring Boot provides Spring Web MVC — a powerful and mature framework for building RESTful APIs. This article will guide from basic to advanced techniques when working with Controllers.

---

## 1. HTTP Methods & REST Conventions

### 1.1 RESTful Resource Mapping

```
Resource: /api/users

GET    /api/users          → Lấy danh sách users
GET    /api/users/{id}     → Lấy user theo ID
POST   /api/users          → Tạo user mới
PUT    /api/users/{id}     → Cập nhật toàn bộ user
PATCH  /api/users/{id}     → Cập nhật một phần user
DELETE /api/users/{id}     → Xóa user
```

### 1.2 Important HTTP Status Codes

| Code | Meaning | When to use |
|-------|---------|-------------|
| 200 | OK | GET, PUT, PATCH successful |
| 201 | Created | POST created resource successfully |
| 204 | No Content | DELETE successful |
| 400 | Bad Request | Invalid input |
| 401 | Unauthorized | Unverified |
| 403 | Forbidden | No permissions |
| 404 | Not Found | Resource does not exist |
| 409 | Conflict | Duplicate data (duplicate email) |
| 500 | Internal Server Error | Server error |

---

## 2. @RestController & Request Mapping

### 2.1 Basic Controller

```java
@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // GET /api/v1/products
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.findAll();
    }

    // GET /api/v1/products/123
    @GetMapping("/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productService.findById(id);
    }

    // POST /api/v1/products
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Product createProduct(@RequestBody Product product) {
        return productService.create(product);
    }

    // PUT /api/v1/products/123
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id,
                                  @RequestBody Product product) {
        return productService.update(id, product);
    }

    // DELETE /api/v1/products/123
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable Long id) {
        productService.delete(id);
    }
}
```

### 2.2 @RestController vs @Controller

```java
// @RestController = @Controller + @ResponseBody
// Mọi method tự động serialize return value thành JSON

@RestController // Dùng cho REST API
public class ApiController {
    @GetMapping("/api/data")
    public Map<String, String> getData() {
        return Map.of("key", "value"); // → JSON response
    }
}

@Controller // Dùng cho server-side rendering (Thymeleaf)
public class WebController {
    @GetMapping("/home")
    public String home(Model model) {
        model.addAttribute("title", "Home");
        return "home"; // → Render template home.html
    }
}
```

---

## 3. Receive data from Request

### 3.1 Path Variables

```java
@GetMapping("/users/{userId}/orders/{orderId}")
public Order getOrder(
        @PathVariable Long userId,
        @PathVariable("orderId") Long orderId) { // Custom name mapping
    return orderService.findByUserAndId(userId, orderId);
}

// Optional path variable
@GetMapping({"/files", "/files/{filename}"})
public String getFile(
        @PathVariable(required = false) String filename) {
    return filename != null ? filename : "index.html";
}
```

### 3.2 Query Parameters

```java
// GET /api/products?category=electronics&minPrice=100&maxPrice=500
@GetMapping
public List<Product> searchProducts(
        @RequestParam String category,
        @RequestParam(defaultValue = "0") double minPrice,
        @RequestParam(defaultValue = "999999") double maxPrice,
        @RequestParam(required = false) String brand) {
    return productService.search(category, minPrice, maxPrice, brand);
}

// Nhận tất cả params dưới dạng Map
@GetMapping("/search")
public List<Product> search(@RequestParam Map<String, String> params) {
    return productService.searchByParams(params);
}
```

### 3.3 Request Headers

```java
@GetMapping("/api/profile")
public UserProfile getProfile(
        @RequestHeader("Authorization") String authHeader,
        @RequestHeader(value = "Accept-Language", defaultValue = "vi") String lang) {
    String token = authHeader.replace("Bearer ", "");
    return userService.getProfile(token, lang);
}
```

### 3.4 Request Body

```java
// POST /api/users
// Content-Type: application/json
// Body: {"name": "Duy", "email": "duy@example.com"}
@PostMapping
public User createUser(@RequestBody CreateUserRequest request) {
    return userService.create(request);
}

// Record class cho request
public record CreateUserRequest(
    String name,
    String email,
    String password
) {}
```

---

## 4. ResponseEntity — Response control

### 4.1 Basics

```java
@GetMapping("/{id}")
public ResponseEntity<Product> getProduct(@PathVariable Long id) {
    return productService.findById(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
}

@PostMapping
public ResponseEntity<Product> createProduct(@RequestBody Product product) {
    Product created = productService.create(product);
    URI location = URI.create("/api/v1/products/" + created.getId());

    return ResponseEntity
        .created(location)  // 201 Created + Location header
        .body(created);
}

@DeleteMapping("/{id}")
public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
    productService.delete(id);
    return ResponseEntity.noContent().build(); // 204 No Content
}
```

### 4.2 Custom Headers

```java
@GetMapping("/download/{fileId}")
public ResponseEntity<byte[]> downloadFile(@PathVariable String fileId) {
    FileData file = fileService.getFile(fileId);

    return ResponseEntity.ok()
        .header(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + file.name() + "\"")
        .header(HttpHeaders.CONTENT_TYPE, file.contentType())
        .header("X-File-Size", String.valueOf(file.size()))
        .body(file.data());
}
```

---

## 5. Content Negotiation

### 5.1 Produces & Consumes

```java
@RestController
@RequestMapping("/api/v1/reports")
public class ReportController {

    // Chỉ chấp nhận JSON input, trả về JSON
    @PostMapping(
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE
    )
    public Report createJsonReport(@RequestBody ReportRequest request) {
        return reportService.generate(request);
    }

    // Trả về CSV
    @GetMapping(value = "/{id}/csv", produces = "text/csv")
    public String exportCsv(@PathVariable Long id) {
        return reportService.exportCsv(id);
    }
}
```

---

## 6. API Versioning Strategies

### 6.1 URL Path Versioning (Recommended)

```java
@RestController
@RequestMapping("/api/v1/users")
public class UserControllerV1 {
    @GetMapping("/{id}")
    public UserV1Response getUser(@PathVariable Long id) { }
}

@RestController
@RequestMapping("/api/v2/users")
public class UserControllerV2 {
    @GetMapping("/{id}")
    public UserV2Response getUser(@PathVariable Long id) { }
}
```

### 6.2 Header Versioning

```java
@GetMapping(value = "/users/{id}", headers = "X-API-Version=1")
public UserV1Response getUserV1(@PathVariable Long id) { }

@GetMapping(value = "/users/{id}", headers = "X-API-Version=2")
public UserV2Response getUserV2(@PathVariable Long id) { }
```

---

## 7. Real-life example: Complete CRUD API

```java
@RestController
@RequestMapping("/api/v1/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public ResponseEntity<List<TaskResponse>> getAllTasks(
            @RequestParam(defaultValue = "all") String status) {
        List<TaskResponse> tasks = taskService.findByStatus(status);
        return ResponseEntity.ok(tasks);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskResponse> getTask(@PathVariable Long id) {
        return taskService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<TaskResponse> createTask(
            @RequestBody CreateTaskRequest request) {
        TaskResponse task = taskService.create(request);
        URI location = ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(task.id())
            .toUri();
        return ResponseEntity.created(location).body(task);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<TaskResponse> updateTask(
            @PathVariable Long id,
            @RequestBody UpdateTaskRequest request) {
        return taskService.update(id, request)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        taskService.delete(id);
        return ResponseEntity.noContent().build();
    }
}

// Request/Response records
public record CreateTaskRequest(String title, String description) {}
public record UpdateTaskRequest(String title, String description, String status) {}
public record TaskResponse(Long id, String title, String description,
                           String status, LocalDateTime createdAt) {}
```

---

## Summary

- @RestController combines @Controller + @ResponseBody, automatically serializes response into JSON
- Use @GetMapping, @PostMapping, @PutMapping, @PatchMapping, @DeleteMapping for CRUD operations
- ResponseEntity allows complete control over HTTP status code, headers and body
- API versioning should use URL path (/api/v1/) for simplicity and clarity

## Exercises

1. Create CRUD REST API for entity `Book` (id, title, author, isbn, price, publishedYear) with full HTTP methods
2. Implement search endpoint: `GET /api/books?author=X&minPrice=Y&maxPrice=Z` with all optional params
3. Use ResponseEntity to return the correct status codes (201 Created with Location header, 204 No Content for DELETE, 404 for resource does not exist)
