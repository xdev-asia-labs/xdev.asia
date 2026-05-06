---
id: 019c9617-fc19-7019-a019-fc1900000019
title: 'レッスン 19: API テスト — MockMvc、WebTestClient、REST を保証'
slug: bai-19-api-testing-mockmvc-webtestclient
description: >-
  同期 API テスト用の MockMvc。リアクティブ/非リアクティブの WebTestClient。 BDD スタイルの API テストでは REST
  が保証されます。契約テストのパターン。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 18
section_title: 'パート 5: テストとコードの品質'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: 基本から上級まで'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1259" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1259)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1090" cy="40" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1080" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1070" cy="220" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1060" cy="50" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1050" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="120" x2="1100" y2="200" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="150" x2="1050" y2="220" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="950.3108891324554,102.5 950.3108891324554,137.5 920,155 889.6891108675446,137.5 889.6891108675446,102.50000000000001 920,85" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 プログラミング — レッスン 18</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 19: API テスト — MockMvc、</tspan>
      <tspan x="60" dy="42">WebTestClient と REST を保証</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: テストとコードの品質</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

API テストにより、HTTP リクエストからレスポンスまでエンドポイントが適切に機能することが保証されます。この記事では、MockMvc (軽量)、WebTestClient (最新)、および REST Assured (BDD スタイル) の 3 つのアプローチを比較します。

---

## 1. MockMvc — 軽量 API テスト

### 1.1 セットアップ

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

### 1.2 GET リクエストのテスト

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

### 1.3 POST リクエストのテスト

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

### 1.4 認証を使用したテスト

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

### 2.1 セットアップ

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ProductApiTest {

    @Autowired
    private WebTestClient webTestClient;
}
```

### 2.2 流暢な API

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

## 3. REST 保証 — BDD スタイル

### 3.1 セットアップ

```kotlin
// build.gradle.kts
testImplementation("io.rest-assured:rest-assured")
testImplementation("io.rest-assured:spring-mock-mvc")
```

### 3.2 いつ与えられるか

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

## 4. 3 つのアプローチを比較する

|特長 |モックMVC |ウェブテストクライアント |安心の休息 |
|--------|---------|--------------|--------------|
|スピード |最速 (サーバーなし) |サーバーが必要 |サーバーが必要 |
|スタイル |ビルダーパターン |滑らかな反応性 | BDD がいつ与えられるか |
|サーブレット/リアクティブ |サーブレットのみ |両方 |サーブレットのみ |
| Spring Boot のデフォルト |はい |はい |さらに依存関係が必要 |
|こんな方に最適 |単体テストコントローラー |統合テスト | BDD、読み取り可能なテスト |

---

## 概要

- MockMvc: 軽量、サーバーを起動する必要がなく、@WebMvcTest を使用した単体テストのコントローラー層に適しています
- WebTestClient: 最新の流暢な API、サーブレットとリアクティブの両方をサポートし、統合テストに適しています
- REST 保証: BDD の Given-When-Then スタイル、読みやすいテスト コード、API 受け入れテストに適しています
- @WithMockUser を組み合わせてコントローラー レベルで認可をテストします

## 演習

1. ProductController の MockMvc テストを作成します: 検証エラーと 404 を含む GET、POST、PUT、DELETE のテスト
2. 完全な注文フローの WebTestClient 統合テストを作成します: 作成 → 取得 → 更新 → 削除
3. 認証フローの REST Assured テストを実装します: ログイン → JWT の取得 → 保護されたエンドポイントにアクセス
