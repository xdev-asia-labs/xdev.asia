---
id: 019c9617-fc19-7019-a019-fc1900000019
title: 'Bài 19: API Testing — MockMvc, WebTestClient & REST Assured'
slug: bai-19-api-testing-mockmvc-webtestclient
description: >-
  MockMvc cho synchronous API testing. WebTestClient cho reactive/non-reactive.
  REST Assured cho BDD-style API tests. Contract testing patterns.
duration_minutes: 90
is_free: false
video_url: null
sort_order: 18
section_title: "Phần 5: Testing & Chất lượng Code"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

## Giới thiệu

API testing đảm bảo endpoints hoạt động đúng từ HTTP request đến response. Bài này so sánh 3 cách tiếp cận: MockMvc (lightweight), WebTestClient (modern), và REST Assured (BDD-style).

---

## 1. MockMvc — Lightweight API Testing

### 1.1 Setup

```java
@WebMvcTest(ProductController.class)
class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private ProductService productService;

    @Autowired
    private ObjectMapper objectMapper;
}
```

### 1.2 Test GET request

```java
@Test
void shouldReturnProductById() throws Exception {
    var product = new ProductResponse(1L, "Book", new BigDecimal("450000"), "Education");
    when(productService.getProduct(1L)).thenReturn(product);

    mockMvc.perform(get("/api/v1/products/{id}", 1L)
            .accept(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(content().contentType(MediaType.APPLICATION_JSON))
        .andExpect(jsonPath("$.id").value(1))
        .andExpect(jsonPath("$.name").value("Book"))
        .andExpect(jsonPath("$.price").value(450000));
}

@Test
void shouldReturn404WhenProductNotFound() throws Exception {
    when(productService.getProduct(999L))
        .thenThrow(new ResourceNotFoundException("Product", "id", 999L));

    mockMvc.perform(get("/api/v1/products/999"))
        .andExpect(status().isNotFound())
        .andExpect(jsonPath("$.detail").value("Product not found with id: 999"));
}
```

### 1.3 Test POST request

```java
@Test
void shouldCreateProduct() throws Exception {
    var request = new CreateProductRequest("New Book", new BigDecimal("300000"), "Education");
    var response = new ProductResponse(1L, "New Book", new BigDecimal("300000"), "Education");
    when(productService.create(any())).thenReturn(response);

    mockMvc.perform(post("/api/v1/products")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(request)))
        .andExpect(status().isCreated())
        .andExpect(jsonPath("$.id").value(1))
        .andExpect(jsonPath("$.name").value("New Book"));
}

@Test
void shouldReturn400WhenInvalidRequest() throws Exception {
    var request = new CreateProductRequest("", null, "");  // Invalid

    mockMvc.perform(post("/api/v1/products")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(request)))
        .andExpect(status().isBadRequest())
        .andExpect(jsonPath("$.errors").isArray())
        .andExpect(jsonPath("$.errors.length()").value(greaterThan(0)));
}
```

### 1.4 Test with Authentication

```java
@Test
@WithMockUser(username = "admin", roles = {"ADMIN"})
void shouldDeleteProductAsAdmin() throws Exception {
    mockMvc.perform(delete("/api/v1/products/1"))
        .andExpect(status().isNoContent());

    verify(productService).deleteProduct(1L);
}

@Test
@WithMockUser(username = "user", roles = {"USER"})
void shouldForbidDeleteForNormalUser() throws Exception {
    mockMvc.perform(delete("/api/v1/products/1"))
        .andExpect(status().isForbidden());
}
```

---

## 2. WebTestClient

### 2.1 Setup

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ProductApiTest {

    @Autowired
    private WebTestClient webTestClient;
}
```

### 2.2 Fluent API

```java
@Test
void shouldGetAllProducts() {
    webTestClient.get()
        .uri("/api/v1/products?page=0&size=10")
        .accept(MediaType.APPLICATION_JSON)
        .exchange()
        .expectStatus().isOk()
        .expectHeader().contentType(MediaType.APPLICATION_JSON)
        .expectBody()
        .jsonPath("$.content").isArray()
        .jsonPath("$.content.length()").isEqualTo(3)
        .jsonPath("$.totalElements").isEqualTo(3);
}

@Test
void shouldCreateProductAndReturn201() {
    var request = new CreateProductRequest("WebTestClient Book",
        new BigDecimal("500000"), "Education");

    webTestClient.post()
        .uri("/api/v1/products")
        .contentType(MediaType.APPLICATION_JSON)
        .bodyValue(request)
        .exchange()
        .expectStatus().isCreated()
        .expectBody(ProductResponse.class)
        .value(response -> {
            assertThat(response.id()).isNotNull();
            assertThat(response.name()).isEqualTo("WebTestClient Book");
        });
}
```

---

## 3. REST Assured — BDD-Style

### 3.1 Setup

```kotlin
// build.gradle.kts
testImplementation("io.rest-assured:rest-assured")
testImplementation("io.rest-assured:spring-mock-mvc")
```

### 3.2 Given-When-Then

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ProductRestAssuredTest {

    @LocalServerPort
    private int port;

    @BeforeEach
    void setUp() {
        RestAssured.port = port;
        RestAssured.basePath = "/api/v1";
    }

    @Test
    void shouldGetProduct() {
        given()
            .accept(ContentType.JSON)
        .when()
            .get("/products/{id}", 1)
        .then()
            .statusCode(200)
            .body("name", equalTo("Book"))
            .body("price", equalTo(450000));
    }

    @Test
    void shouldCreateProduct() {
        var request = Map.of(
            "name", "REST Assured Book",
            "price", 350000,
            "category", "Education"
        );

        given()
            .contentType(ContentType.JSON)
            .body(request)
        .when()
            .post("/products")
        .then()
            .statusCode(201)
            .body("id", notNullValue())
            .body("name", equalTo("REST Assured Book"));
    }
}
```

---

## 4. So sánh 3 approaches

| Feature | MockMvc | WebTestClient | REST Assured |
|---------|---------|---------------|--------------|
| Speed | Nhanh nhất (no server) | Cần server | Cần server |
| Style | Builder pattern | Fluent reactive | BDD given-when-then |
| Servlet/Reactive | Servlet only | Cả hai | Servlet only |
| Spring Boot default | Có | Có | Cần thêm dependency |
| Best for | Unit test controller | Integration test | BDD, readable tests |

---

## Tóm tắt

- MockMvc: lightweight, không cần start server, phù hợp unit test controller layer với @WebMvcTest
- WebTestClient: modern fluent API, hỗ trợ cả servlet và reactive, phù hợp integration test
- REST Assured: BDD given-when-then style, readable test code, tốt cho API acceptance tests
- Kết hợp @WithMockUser để test authorization ở controller level

## Bài tập

1. Viết MockMvc tests cho ProductController: test GET, POST, PUT, DELETE, bao gồm validation errors và 404
2. Viết WebTestClient integration tests cho full Order flow: create → get → update → delete
3. Implement REST Assured tests cho authentication flow: login → get JWT → access protected endpoint
