---
id: 019e2a10-a120-7a01-b001-f1a2b3c4d520
title: 第 20 課：使用 Pact 進行合約測試
slug: bai-20-contract-testing-pact
description: 消費者驅動的合約測試、Pact 框架、確保微服務之間的 API 相容性、Pact Broker、CI 管道整合。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 19
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: Quarkus 微服務：從基礎知識到生產
  slug: quarkus-microservices-tu-co-ban-den-production
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8854" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8854)"/>

  <!-- Decorations -->
  <g>
    <circle cx="614" cy="192" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="628" cy="246" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="642" cy="40" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="656" cy="94" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="670" cy="148" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="72" x2="1100" y2="152" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="102" x2="1050" y2="172" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="945.3826859021799,108.5 945.3826859021799,135.5 922,149 898.6173140978201,135.5 898.6173140978201,108.5 922,95" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 程式設計 — 第 19 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 20 課：使用 Pact 進行合約測試</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus 微服務：從基礎知識到生產</text>

  <!-- Section -->
  

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在微服務中，每個服務都是獨立開發和部署的。 **合約測試** 確保當服務 A 更改 API 時，服務 B（消費者）不會中斷。 **Pact** 是最受歡迎的消費者驅動契約測試 (CDCT) 框架。

## 問題：整合測試還不夠

```
┌──────────┐    REST     ┌──────────┐
│  Order   │───────────▶│ Product  │
│ Service  │    API      │ Service  │
└──────────┘             └──────────┘
     │                        │
     ▼                        ▼
  Deploy v2.1             Deploy v3.0
  (expects field          (renamed field
   "stockAvailable")      to "available")
         ⚠️ BREAKING CHANGE!
```

- **整合測試**：需要兩個服務都運行 → 速度慢，環境問題
- **模擬回應**：硬編碼 → 未偵測到 API 更改
- **合約測試**：自動驗證API模式，CI友好

## 消費者驅動的合約測試流程

```
   Consumer (Order Service)            Provider (Product Service)
   ─────────────────────────           ─────────────────────────
   1. Viết test mô tả                 
      API expectations                 
              │                        
              ▼                        
   2. Generate Pact file              
      (contract JSON)                  
              │                        
              └───── Upload ──────────▶ Pact Broker
                                              │
                                              ▼
                                       3. Provider verifies
                                          contract against
                                          actual API
                                              │
                                              ▼
                                       4. ✅ Pass / ❌ Fail
```

## 依賴關係

### 消費者端（訂單服務）

```xml
<dependency>
    <groupId>au.com.dius.pact.consumer</groupId>
    <artifactId>junit5</artifactId>
    <version>4.6.16</version>
    <scope>test</scope>
</dependency>
```

### 提供者方（產品服務）

```xml
<dependency>
    <groupId>au.com.dius.pact.provider</groupId>
    <artifactId>junit5</artifactId>
    <version>4.6.16</version>
    <scope>test</scope>
</dependency>
```

## 消費者測試－訂單服務

```java
import au.com.dius.pact.consumer.dsl.PactDslJsonBody;
import au.com.dius.pact.consumer.dsl.PactDslWithProvider;
import au.com.dius.pact.consumer.junit5.PactConsumerTestExt;
import au.com.dius.pact.consumer.junit5.PactTestFor;
import au.com.dius.pact.core.model.V4Pact;
import au.com.dius.pact.core.model.annotations.Pact;

@ExtendWith(PactConsumerTestExt.class)
@PactTestFor(providerName = "ProductService")
class ProductClientContractTest {

    @Pact(provider = "ProductService",
          consumer = "OrderService")
    V4Pact getProductPact(PactDslWithProvider builder) {
        return builder
            .given("product with ID 1 exists")
                .uponReceiving("get product by id")
                .path("/api/v1/products/1")
                .method("GET")
            .willRespondWith()
                .status(200)
                .headers(Map.of(
                    "Content-Type", "application/json"))
                .body(new PactDslJsonBody()
                    .integerType("id", 1L)
                    .stringType("name", "Laptop Dell XPS")
                    .numberType("price", 25000000)
                    .stringType("currency", "VND")
                    .stringType("status", "ACTIVE")
                    .object("stock")
                        .integerType("available", 50)
                        .integerType("reserved", 5)
                    .closeObject())
            .toPact(V4Pact.class);
    }

    @Pact(provider = "ProductService",
          consumer = "OrderService")
    V4Pact checkStockPact(PactDslWithProvider builder) {
        return builder
            .given("product 1 has stock >= 2")
                .uponReceiving("check stock availability")
                .path("/api/v1/products/1/stock/check")
                .method("POST")
                .headers(Map.of(
                    "Content-Type", "application/json"))
                .body(new PactDslJsonBody()
                    .integerType("quantity", 2))
            .willRespondWith()
                .status(200)
                .body(new PactDslJsonBody()
                    .booleanType("available", true)
                    .integerType("currentStock", 50))
            .toPact(V4Pact.class);
    }

    @Pact(provider = "ProductService",
          consumer = "OrderService")
    V4Pact productNotFoundPact(
            PactDslWithProvider builder) {
        return builder
            .given("product with ID 99999 does not exist")
                .uponReceiving("get non-existent product")
                .path("/api/v1/products/99999")
                .method("GET")
            .willRespondWith()
                .status(404)
                .body(new PactDslJsonBody()
                    .stringType("title", "Resource Not Found")
                    .integerType("status", 404))
            .toPact(V4Pact.class);
    }

    @Test
    @PactTestFor(pactMethod = "getProductPact")
    void testGetProduct(MockServer mockServer) {
        // Configure REST Client to use mock server
        ProductServiceClient client =
            RestClientBuilder.newBuilder()
                .baseUri(URI.create(mockServer.getUrl()))
                .build(ProductServiceClient.class);

        ProductInfo product = client.getById(1L);

        assertNotNull(product);
        assertEquals("Laptop Dell XPS", product.name());
        assertEquals(25000000, product.price().intValue());
    }

    @Test
    @PactTestFor(pactMethod = "checkStockPact")
    void testCheckStock(MockServer mockServer) {
        ProductServiceClient client =
            RestClientBuilder.newBuilder()
                .baseUri(URI.create(mockServer.getUrl()))
                .build(ProductServiceClient.class);

        StockResult result = client.checkStock(1L, 2);

        assertTrue(result.available());
        assertEquals(50, result.currentStock());
    }

    @Test
    @PactTestFor(pactMethod = "productNotFoundPact")
    void testProductNotFound(MockServer mockServer) {
        ProductServiceClient client =
            RestClientBuilder.newBuilder()
                .baseUri(URI.create(mockServer.getUrl()))
                .build(ProductServiceClient.class);

        assertThrows(WebApplicationException.class,
            () -> client.getById(99999L));
    }
}
```

## 產生的契約文件

消費者測試創建 JSON 檔案於 `target/pacts/`：

```json
{
  "consumer": { "name": "OrderService" },
  "provider": { "name": "ProductService" },
  "interactions": [
    {
      "description": "get product by id",
      "providerStates": [
        { "name": "product with ID 1 exists" }
      ],
      "request": {
        "method": "GET",
        "path": "/api/v1/products/1"
      },
      "response": {
        "status": 200,
        "body": {
          "id": 1,
          "name": "Laptop Dell XPS",
          "price": 25000000,
          "currency": "VND",
          "stock": { "available": 50, "reserved": 5 }
        },
        "matchingRules": { ... }
      }
    }
  ]
}
```

## 提供者驗證 — 產品服務

```java
import au.com.dius.pact.provider.junit5.HttpTestTarget;
import au.com.dius.pact.provider.junit5.PactVerificationContext;
import au.com.dius.pact.provider.junit5.PactVerificationInvocationContextProvider;
import au.com.dius.pact.provider.junitsupport.*;
import au.com.dius.pact.provider.junitsupport.loader.PactFolder;

@QuarkusTest
@Provider("ProductService")
@PactFolder("pacts")  // Hoặc @PactBroker(...)
class ProductServiceContractVerificationTest {

    @BeforeEach
    void setUp(PactVerificationContext context) {
        context.setTarget(
            new HttpTestTarget("localhost",
                ConfigProvider.getConfig()
                    .getValue("quarkus.http.test-port",
                        Integer.class)));
    }

    @TestTemplate
    @ExtendWith(
        PactVerificationInvocationContextProvider.class)
    void verifyPact(PactVerificationContext context) {
        context.verifyInteraction();
    }

    // Provider States - setup test data
    @State("product with ID 1 exists")
    void setupProduct() {
        QuarkusTransaction.requiringNew().run(() -> {
            Product product = new Product();
            product.id = 1L;
            product.name = "Laptop Dell XPS";
            product.price =
                Money.vnd(new BigDecimal("25000000"));
            product.stock = new StockInfo(50, 5);
            product.status = "ACTIVE";
            Product.getEntityManager().merge(product);
        });
    }

    @State("product with ID 99999 does not exist")
    void setupNoProduct() {
        // Nothing to set up — product doesn't exist
    }

    @State("product 1 has stock >= 2")
    void setupProductWithStock() {
        setupProduct(); // Reuse — stock = 50
    }
}
```

## 契約經紀人

```yaml
# docker-compose.yml
services:
  pact-broker:
    image: pactfoundation/pact-broker:latest
    ports:
      - "9292:9292"
    environment:
      PACT_BROKER_DATABASE_URL: "sqlite:///tmp/pact_broker.sqlite3"
      PACT_BROKER_BASE_URL: "http://localhost:9292"
```

### 發布消費者協議

```xml
<plugin>
    <groupId>au.com.dius.pact.provider</groupId>
    <artifactId>maven</artifactId>
    <version>4.6.16</version>
    <configuration>
        <pactBrokerUrl>http://localhost:9292</pactBrokerUrl>
        <tags>
            <tag>main</tag>
        </tags>
    </configuration>
</plugin>
```

```bash
mvn pact:publish
```

### 從提供者驗證

```java
@Provider("ProductService")
@PactBroker(
    url = "http://localhost:9292",
    consumerVersionSelectors = {
        @VersionSelector(tag = "main")
    }
)
class ProductServiceBrokerVerificationTest {
    // Same as PactFolder version...
}
```

## CI 管道集成

```yaml
# .github/workflows/contract-test.yml
name: Contract Tests

on:
  push:
    branches: [main, develop]

jobs:
  consumer-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          java-version: '21'
          distribution: 'temurin'
      - name: Run consumer contract tests
        run: |
          cd order-service
          mvn test -pl . -Dtest="*ContractTest"
      - name: Publish pacts
        run: |
          cd order-service
          mvn pact:publish \
            -Dpact.broker.url=${{ secrets.PACT_BROKER_URL }}

  provider-verification:
    needs: consumer-tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          java-version: '21'
          distribution: 'temurin'
      - name: Verify provider contracts
        run: |
          cd product-service
          mvn test -pl . \
            -Dtest="*ContractVerificationTest" \
            -Dpactbroker.url=${{ secrets.PACT_BROKER_URL }}
```

## Pact Matchers — 靈活匹配

使用匹配器代替精確的值匹配，使合約更加靈活：

```java
@Pact(provider = "ProductService", consumer = "OrderService")
V4Pact listProductsPact(PactDslWithProvider builder) {
    return builder
        .given("products exist")
            .uponReceiving("list products")
            .path("/api/v1/products")
            .method("GET")
            .queryParameterFromProviderState(
                "page", "page", "0")
        .willRespondWith()
            .status(200)
            .body(new PactDslJsonBody()
                // Array với ít nhất 1 phần tử
                .minArrayLike("content", 1)
                    .integerType("id")          // bất kỳ integer
                    .stringType("name")          // bất kỳ string
                    .decimalType("price")        // bất kỳ decimal
                    .stringMatcher("status",
                        "ACTIVE|INACTIVE",       // regex match
                        "ACTIVE")
                    .stringMatcher("currency",
                        "VND|USD", "VND")
                    .date("createdAt",
                        "yyyy-MM-dd'T'HH:mm:ss") // date format
                .closeObject()
                .closeArray()
                // Pagination metadata
                .integerType("totalElements")
                .integerType("totalPages")
                .booleanType("last"))
        .toPact(V4Pact.class);
}
```

### 匹配器類型供參考

|匹配器|描述 |範例|
|--------|--------|--------|
| `stringType(field)` |任何字串 | `"name"` |
| `integerType(field)` |任意整數 | `42` |
| `decimalType(field)` |任小數| `99.99` |
| `booleanType(field)` |任何布林值 | `true` |
| `stringMatcher(field, regex)` |符合正規表示式 | `"ACTIVE\|INACTIVE"` |
| `date(field, format)` |日期字串匹配格式| `"2024-01-01"` |
| `uuid(field)` | UUID 格式 | `"550e8400-..."` |
| `minArrayLike(field, min)` |數組 ≥ 最小元素 | `[{...}]` |
| `eachLike(field)` |任意大小的陣列 | `[{...}, ...]` |

## 非同步/訊息合約測試 (Kafka)

Pact 也支援測試**訊息合約** — 確保 Kafka 生產者和消費者就訊息格式達成一致：

### 消費者（支付服務 — 從 Kafka 讀取 OrderCreatedEvent）

```java
@ExtendWith(PactConsumerTestExt.class)
@PactTestFor(providerName = "OrderService",
             providerType = ProviderType.ASYNCH)
class OrderEventConsumerContractTest {

    @Pact(provider = "OrderService",
          consumer = "PaymentService")
    MessagePact orderCreatedPact(MessagePactBuilder builder) {
        return builder
            .given("order is created")
            .expectsToReceive("an order created event")
            .withContent(new PactDslJsonBody()
                .stringType("eventType", "ORDER_CREATED")
                .uuid("orderId")
                .uuid("customerId")
                .stringType("customerEmail",
                    "customer@xdev.asia")
                .decimalType("totalAmount", 25000000)
                .stringMatcher("currency",
                    "VND|USD", "VND")
                .minArrayLike("items", 1)
                    .integerType("productId")
                    .stringType("productName")
                    .integerType("quantity")
                    .decimalType("unitPrice")
                .closeObject()
                .closeArray()
                .date("createdAt",
                    "yyyy-MM-dd'T'HH:mm:ss'Z'"))
            .toPact();
    }

    @Test
    @PactTestFor(pactMethod = "orderCreatedPact")
    void testConsumeOrderCreatedEvent(
            List<Message> messages) {

        assertFalse(messages.isEmpty());

        String json = messages.get(0)
            .contentsAsString();

        // Deserialize và verify consumer logic
        OrderCreatedEvent event = objectMapper
            .readValue(json, OrderCreatedEvent.class);

        assertNotNull(event.orderId());
        assertTrue(event.totalAmount()
            .compareTo(BigDecimal.ZERO) > 0);
        assertFalse(event.items().isEmpty());
    }
}
```

### 提供者（訂單服務 — 驗證其以正確的格式產生）

```java
@QuarkusTest
@Provider("OrderService")
@PactFolder("pacts")
class OrderEventProviderVerificationTest {

    @Inject
    ObjectMapper objectMapper;

    @TestTemplate
    @ExtendWith(
        PactVerificationInvocationContextProvider.class)
    void verifyPact(PactVerificationContext context) {
        context.verifyInteraction();
    }

    @PactVerifyProvider("an order created event")
    String produceOrderCreatedEvent() {
        // Tạo event giống production code
        OrderCreatedEvent event = new OrderCreatedEvent(
            UUID.randomUUID().toString(),
            UUID.randomUUID().toString(),
            "customer@xdev.asia",
            new BigDecimal("25000000"),
            "VND",
            List.of(new OrderItem(
                1L, "Laptop Dell", 1,
                new BigDecimal("25000000"))),
            Instant.now().toString()
        );

        return objectMapper.writeValueAsString(event);
    }
}
```

## 我可以部署工作流程嗎

`can-i-deploy` 檢查當前版本是否與目標環境上的所有消費者/提供者相容：

```bash
# Trước khi deploy Product Service v3.0 lên production
pact-broker can-i-deploy \
  --pacticipant ProductService \
  --version 3.0.0 \
  --to-environment production

# Output:
# COMPUTER SAYS: YES \o/
# All required verification results are published and successful

# Hoặc khi verification fail:
# COMPUTER SAYS: NO ¯\_(ツ)_/¯
# OrderService (v2.1.0) has a failed verification
# for the pact with ProductService (v3.0.0)
```

### 完整的 CI/CD 集成

```yaml
# .github/workflows/deploy-product-service.yml
jobs:
  contract-verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run provider verification
        run: mvn test -Dtest="*ContractVerificationTest"
      - name: Publish verification results
        run: |
          mvn pact:publish \
            -Dpact.broker.url=${{ secrets.PACT_BROKER_URL }} \
            -Dpact.provider.version=${{ github.sha }}

  can-i-deploy:
    needs: contract-verify
    runs-on: ubuntu-latest
    steps:
      - name: Can I Deploy?
        run: |
          docker run --rm pactfoundation/pact-cli:latest \
            broker can-i-deploy \
            --pacticipant ProductService \
            --version ${{ github.sha }} \
            --to-environment production \
            --broker-base-url ${{ secrets.PACT_BROKER_URL }}

  deploy:
    needs: can-i-deploy
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        run: echo "Deploying..."
      - name: Record deployment
        run: |
          docker run --rm pactfoundation/pact-cli:latest \
            broker record-deployment \
            --pacticipant ProductService \
            --version ${{ github.sha }} \
            --environment production \
            --broker-base-url ${{ secrets.PACT_BROKER_URL }}
```

## 模式演化策略

當您需要在不破壞消費者的情況下更改 API 時：

|戰略|描述 |範例|
|----------|--------|--------|
| **添加劑** |新增欄位（向後相容）|新增 `"discount"` 領域 |
| **寬容的讀者** |消費者忽略未知領域 |消費者是只讀的 `name, price` |
| **擴張與收縮** |新增新的→遷移消費者→刪除舊的|重新命名：新增名稱→消費者切換→刪除舊名稱|
| **版本化 API** | `/v1/products` 與 `/v2/products` |重大變更 → 新版本 |

```
Expand & Contract Pattern:
═══════════════════════════

Phase 1 — Expand:
  Provider response: { "stock": 50, "stockAvailable": 50 }
  Consumer A: reads "stock"
  Consumer B: reads "stock"

Phase 2 — Migrate:
  Provider response: { "stock": 50, "stockAvailable": 50 }
  Consumer A: reads "stockAvailable" ← migrated
  Consumer B: reads "stock" ← not yet

Phase 3 — Contract:
  Provider response: { "stockAvailable": 50 }
  Consumer A: reads "stockAvailable" ✅
  Consumer B: reads "stockAvailable" ← migrated ✅
```

## 最佳實踐

|實踐|描述 |
|----------|--------|
| **消費者至上** |消費者先寫合同，提供者再驗證 |
| **合約經紀人** |合約中央儲存庫；對分支使用標籤 |
| **我可以部署** | `pact-broker can-i-deploy` 在部署到生產之前|
| **最小合約** |僅驗證消費者實際使用的字段，而不驗證整個回應 |
| **提供者國家** |每次互動都有一個明確的提供者狀態來設定測試資料 |

## 練習

1. 為訂單 → 產品 API 撰寫消費者合約測試（取得產品、檢查庫存、列出產品）
2. 編寫產品服務的提供者驗證測試
3. 使用 Docker Compose 設定 Pact Broker
4. 發布協議並自動驗證
5. 為Kafka事件編寫**訊息合約測試**（OrderCreatedEvent：訂單→付款）
6. 使用 Pact 匹配器（正規表示式、類型、日期）而不是精確值
7. 設定 `can-i-deploy` 檢查 CI 管道
8. 實踐 Expand & Contract 模式：在不破壞消費者的情況下重新命名字段

## 總結

- **合約測試** 確保微服務之間的 API 相容性，無需整合環境
- **消費者**編寫描述預期 API 回應的測試 → 產生 Pact 文件
- **提供者**根據實際 API 實作驗證 Pact 文件
- **Pact Matchers** — 靈活匹配（類型、正規表示式、日期格式）而不是精確值
- **訊息協議** — 測試 Kafka/訊息傳遞合約（生產者和消費者同意格式）
- **Pact Broker** 集中管理合約並提供支持 `can-i-deploy`
- **Can-I-Deploy** — 部署前 CI 門，檢查相容性
- **架構演化** — 向後相容更改的擴展和收縮模式
- 組合單元+整合+合約測試=獨立部署時的高置信度

下一篇文章：GraalVM 本機映像與容器 — 建置用於生產的本機可執行檔。
