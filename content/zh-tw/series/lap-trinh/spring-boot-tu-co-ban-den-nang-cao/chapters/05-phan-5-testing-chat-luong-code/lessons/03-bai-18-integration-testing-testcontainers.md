---
id: 019c9617-fc18-7018-a018-fc1800000018
title: 第 18 課：整合測試 — @SpringBootTest 和 Testcontainers
slug: bai-18-integration-testing-testcontainers
description: >-
  @SpringBootTest、@DataJpaTest 用於整合測試。測試容器 — 在 Docker 中使用真實的 PostgreSQL、Redis
  進行測試。測試切片和最佳實踐。
duration_minutes: 120
is_free: false
video_url: null
sort_order: 17
section_title: 第 5 部分：測試和程式碼質量
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: Spring Boot 4：從基礎到高級
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7971" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7971)"/>

  <!-- Decorations -->
  <g>
    <circle cx="973" cy="49" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="846" cy="142" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="719" cy="235" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1092" cy="68" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="965" cy="161" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="79" x2="1100" y2="159" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="109" x2="1050" y2="179" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1058.444863728671,212 1058.444863728671,246 1029,263 999.555136271329,246 999.555136271329,212 1029,195" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 程式設計 — 第 17 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 18 課：整合測驗 —</tspan>
      <tspan x="60" dy="42">@SpringBootTest 和測試容器</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：測試和程式碼質量</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

整合測試測試多個元件與真實資料庫、真實配置一起工作。測試容器允許在 Docker 容器中自動執行 PostgreSQL、Redis、Kafka，確保類似生產的測試環境。

---

## 1.@SpringBootTest

### 1.1 完整的應用程式上下文

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class OrderIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private OrderRepository orderRepository;

    @Test
    void shouldCreateAndRetrieveOrder() {
        // Create
        var request = new CreateOrderRequest(/* ... */);
        ResponseEntity<OrderResponse> createResponse = restTemplate
            .postForEntity("/api/v1/orders", request, OrderResponse.class);

        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        Long orderId = createResponse.getBody().id();

        // Retrieve
        ResponseEntity<OrderResponse> getResponse = restTemplate
            .getForEntity("/api/v1/orders/" + orderId, OrderResponse.class);

        assertThat(getResponse.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(getResponse.getBody().id()).isEqualTo(orderId);
    }
}
```

---

## 2. 測試切片 — 僅載入必要的部分

### 2.1 @DataJpaTest — 測試儲存庫層

```java
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class ProductRepositoryTest {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    void shouldFindProductsByCategory() {
        // Given
        Product p1 = Product.builder()
            .name("Spring Boot Book").price(new BigDecimal("450000"))
            .category("Education").build();
        Product p2 = Product.builder()
            .name("Java Mug").price(new BigDecimal("150000"))
            .category("Merchandise").build();
        entityManager.persist(p1);
        entityManager.persist(p2);
        entityManager.flush();

        // When
        List<Product> result = productRepository.findByCategory("Education");

        // Then
        assertThat(result).hasSize(1);
        assertThat(result.getFirst().getName()).isEqualTo("Spring Boot Book");
    }

    @Test
    void shouldSearchByKeyword() {
        entityManager.persist(Product.builder()
            .name("Spring Boot Guide").price(BigDecimal.TEN)
            .category("Book").build());
        entityManager.flush();

        Page<Product> results = productRepository
            .searchByKeyword("spring", Pageable.ofSize(10));

        assertThat(results.getContent()).hasSize(1);
    }
}
```

### 2.2 @WebMvcTest — 測試控制器層

```java
@WebMvcTest(ProductController.class)
class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private ProductService productService;

    @Test
    void shouldReturnProduct() throws Exception {
        var product = new ProductResponse(1L, "Book", new BigDecimal("450000"));
        when(productService.getProduct(1L)).thenReturn(product);

        mockMvc.perform(get("/api/v1/products/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value("Book"))
            .andExpect(jsonPath("$.price").value(450000));
    }
}
```

---

## 3. 測試容器

### 3.1 設置

```kotlin
// build.gradle.kts
testImplementation("org.springframework.boot:spring-boot-testcontainers")
testImplementation("org.testcontainers:postgresql")
testImplementation("org.testcontainers:junit-jupiter")
```

### 3.2 PostgreSQL 容器

```java
@SpringBootTest
@Testcontainers
class ProductRepositoryIntegrationTest {

    @Container
    @ServiceConnection
    static PostgreSQLContainer<?> postgres =
        new PostgreSQLContainer<>("postgres:17-alpine");

    @Autowired
    private ProductRepository productRepository;

    @Test
    void shouldSaveAndRetrieveProduct() {
        Product product = Product.builder()
            .name("Test Product")
            .price(new BigDecimal("100000"))
            .category("Test")
            .build();

        Product saved = productRepository.save(product);

        assertThat(saved.getId()).isNotNull();
        assertThat(productRepository.findById(saved.getId()))
            .isPresent()
            .hasValueSatisfying(p ->
                assertThat(p.getName()).isEqualTo("Test Product"));
    }
}
```

### 3.3 共享容器模式（最佳化效能）

```java
// Base class cho tất cả integration tests
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Testcontainers
public abstract class BaseIntegrationTest {

    @Container
    @ServiceConnection
    static final PostgreSQLContainer<?> postgres =
        new PostgreSQLContainer<>("postgres:17-alpine")
            .withDatabaseName("testdb")
            .withUsername("test")
            .withPassword("test");

    @Autowired
    protected TestRestTemplate restTemplate;
}
```

```java
// Test kế thừa, reuse container
class OrderIntegrationTest extends BaseIntegrationTest {

    @Autowired
    private OrderRepository orderRepository;

    @BeforeEach
    void setUp() {
        orderRepository.deleteAll();
    }

    @Test
    void shouldCreateOrder() {
        // Test with real PostgreSQL
    }
}
```

### 3.4 多個容器

```java
@SpringBootTest
@Testcontainers
class FullStackIntegrationTest {

    @Container
    @ServiceConnection
    static final PostgreSQLContainer<?> postgres =
        new PostgreSQLContainer<>("postgres:17-alpine");

    @Container
    @ServiceConnection
    static final GenericContainer<?> redis =
        new GenericContainer<>("redis:7-alpine")
            .withExposedPorts(6379);
}
```

---

## 4. 測試資料管理

### 4.1 @Sql — 從檔案載入測試數據

```java
@DataJpaTest
@Sql("/test-data/products.sql")
class ProductRepositoryTest {

    @Test
    @Sql(statements = "DELETE FROM products", executionPhase = AFTER_TEST_METHOD)
    void shouldFindAllProducts() {
        List<Product> products = productRepository.findAll();
        assertThat(products).hasSize(5); // Từ products.sql
    }
}
```

### 4.2 TestFixtures — 輔助方法

```java
public class TestFixtures {

    public static Product aProduct() {
        return Product.builder()
            .name("Test Product")
            .price(new BigDecimal("100000"))
            .category("Test")
            .build();
    }

    public static CreateProductRequest aCreateProductRequest() {
        return new CreateProductRequest("Test Product",
            new BigDecimal("100000"), "Test");
    }
}
```

---

## 總結

- 測試切片（@DataJpaTest、@WebMvcTest）僅載入必要的部分，運行速度比@SpringBootTest更快
- 測試容器自動啟動 PostgreSQL、Redis 容器 — 使用真實基礎架構進行測試
- @ServiceConnection 自動設定連線屬性，無需手動配置
- 共用容器模式在測試類別之間重複使用容器，減少啟動時間

## 練習

1.使用PostgreSQL Testcontainers為ProductRepository編寫@DataJpaTest：測試儲存、findAll、自訂查詢方法
2. 使用共用 PostgreSQL 容器建立 BaseIntegrationTest 類，為訂單 CRUD 流程編寫完整的整合測試
3.測試快取：使用Testcontainers Redis，驗證資料是否被快取並正確驅逐
