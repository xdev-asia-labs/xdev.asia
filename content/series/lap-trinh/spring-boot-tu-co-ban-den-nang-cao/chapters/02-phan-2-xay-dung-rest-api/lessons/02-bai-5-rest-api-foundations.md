---
id: 019c9617-fc05-7005-a005-fc0500000005
title: 'Bài 5: REST API Foundations — @RestController & Request Mapping'
slug: bai-5-rest-api-foundations
description: >-
  HTTP methods, @RestController, @RequestMapping, @GetMapping, @PostMapping.
  Path variables, query parameters, request headers. Response entity và status codes.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: Xây dựng REST API"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

## Giới thiệu

REST API là phương thức giao tiếp phổ biến nhất trong các ứng dụng backend hiện đại. Spring Boot cung cấp Spring Web MVC — một framework mạnh mẽ và mature để xây dựng RESTful APIs. Bài này sẽ hướng dẫn từ cơ bản đến các kỹ thuật nâng cao khi làm việc với Controllers.

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

### 1.2 HTTP Status Codes quan trọng

| Code | Ý nghĩa | Khi nào dùng |
|------|---------|-------------|
| 200 | OK | GET, PUT, PATCH thành công |
| 201 | Created | POST tạo resource thành công |
| 204 | No Content | DELETE thành công |
| 400 | Bad Request | Input không hợp lệ |
| 401 | Unauthorized | Chưa xác thực |
| 403 | Forbidden | Không có quyền |
| 404 | Not Found | Resource không tồn tại |
| 409 | Conflict | Trùng dữ liệu (duplicate email) |
| 500 | Internal Server Error | Lỗi server |

---

## 2. @RestController & Request Mapping

### 2.1 Controller cơ bản

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

## 3. Nhận dữ liệu từ Request

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

## 4. ResponseEntity — Kiểm soát Response

### 4.1 Cơ bản

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

### 6.1 URL Path Versioning (Khuyến nghị)

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

## 7. Ví dụ thực tế: CRUD API hoàn chỉnh

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

## Tóm tắt

- @RestController kết hợp @Controller + @ResponseBody, tự động serialize response thành JSON
- Dùng @GetMapping, @PostMapping, @PutMapping, @PatchMapping, @DeleteMapping cho CRUD operations
- ResponseEntity cho phép kiểm soát hoàn toàn HTTP status code, headers và body
- API versioning nên dùng URL path (/api/v1/) cho đơn giản và rõ ràng

## Bài tập

1. Tạo CRUD REST API cho entity `Book` (id, title, author, isbn, price, publishedYear) với đầy đủ HTTP methods
2. Implement search endpoint: `GET /api/books?author=X&minPrice=Y&maxPrice=Z` với tất cả params optional
3. Sử dụng ResponseEntity để trả về đúng status codes (201 Created với Location header, 204 No Content cho DELETE, 404 cho resource không tồn tại)
