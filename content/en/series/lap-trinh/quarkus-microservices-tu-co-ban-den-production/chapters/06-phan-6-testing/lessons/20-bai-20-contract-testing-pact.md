---
id: 019e2a10-a120-7a01-b001-f1a2b3c4d520
title: 'Lesson 20: Contract Testing with Pact'
slug: bai-20-contract-testing-pact
description: >-
  Consumer-Driven Contract Testing, Pact framework, ensuring API compatibility
  between microservices, Pact Broker, CI pipeline integration.
duration_minutes: 90
is_free: false
video_url: null
sort_order: 19
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: 'Quarkus Microservices: From Basics to Production'
  slug: quarkus-microservices-tu-co-ban-den-production
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Programming — Lesson 19</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 20: Contract Testing with Pact</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus Microservices: From Basics to Production</text>

  <!-- Section -->
  

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

In microservices, each service is developed and deployed independently. **Contract Testing** ensures that when Service A changes the API, Service B (consumer) does not break. **Pact** is the most popular framework for Consumer-Driven Contract Testing (CDCT).

## Problem: Integration Testing is not enough

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

- **Integration Test**: needs both services running → slow, environment issues
- **Mock response**: hardcoded → API changes not detected
- **Contract Test**: verify API schema automatically, CI-friendly

## Consumer-Driven Contract Testing Flow

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

## Dependencies

### Consumer side (Order Service)

```xml
<dependency>
    <groupId>au.com.dius.pact.consumer</groupId>
    <artifactId>junit5</artifactId>
    <version>4.6.16</version>
    <scope>test</scope>
</dependency>
```

### Provider side (Product Service)

```xml
<dependency>
    <groupId>au.com.dius.pact.provider</groupId>
    <artifactId>junit5</artifactId>
    <version>4.6.16</version>
    <scope>test</scope>
</dependency>
```

## Consumer Test — Order Service

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

## Generated Pact File

Consumer test creates JSON file at `target/pacts/`:

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

## Provider Verification — Product Service

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

## Pact Broker

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

### Publish Pact from Consumer

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

### Verify from Provider

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

## CI Pipeline Integration

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

## Pact Matchers — Flexible Matching

Instead of exact value matching, use matchers to make the contract more flexible:

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

### Matcher Types for reference

| Matcher | Description | Example |
|--------|--------|-------|
| `stringType(field)` | Any string | `"name"` |
| `integerType(field)` | Any integer | `42` |
| `decimalType(field)` | Any decimal | `99.99` |
| `booleanType(field)` | Any boolean | `true` |
| `stringMatcher(field, regex)` | Match regex | `"ACTIVE\|INACTIVE"` |
| `date(field, format)` | Date string match format | `"2024-01-01"` |
| `uuid(field)` | UUID format | `"550e8400-..."` |
| `minArrayLike(field, min)` | Array ≥ min elements | `[{...}]` |
| `eachLike(field)` | Array of any size | `[{...}, ...]` |

## Async/Message Contract Testing (Kafka)

Pact also supports testing **message contracts** — ensuring the Kafka producer and consumer agree on the message format:

### Consumer (Payment Service — reads OrderCreatedEvent from Kafka)

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

### Provider (Order Service — verify it produces in the correct format)

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

## Can-I-Deploy Workflow

`can-i-deploy` Check if the current version is compatible with all consumers/providers on the target environment:

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

### Complete CI/CD integration

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

## Schema Evolution Strategy

When you need to change the API without breaking consumers:

| Strategy | Description | Example |
|----------|--------|-------|
| **Additive** | Add new field (backward compatible) | Add `"discount"` field |
| **Tolerant Reader** | Consumer ignores unknown fields | Consumer is read-only `name, price` |
| **Expand & Contract** | Add new → migrate consumers → remove old | Rename: add new name → consumers switch → remove old |
| **Versioned API** | `/v1/products` vs `/v2/products` | Breaking change → new version |

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

## Best Practices

| Practice | Description |
|----------|--------|
| **Consumer-first** | Consumer writes contract first, provider verifies later |
| **Pact Broker** | Central repository for contracts; Use tags for branches |
| **Can-I-Deploy** | `pact-broker can-i-deploy` before deploying to production |
| **Minimal contracts** | Only verify the fields the consumer actually uses, not the entire response |
| **Provider States** | Each interaction has a clear provider state to setup test data |

## Exercises

1. Write a Consumer Contract Test for Order → Product API (get product, check stock, list products)
2. Write Provider Verification Test for Product Service
3. Setup Pact Broker using Docker Compose
4. Publish pacts and verify automatically
5. Write **Message Contract Test** for Kafka events (OrderCreatedEvent: Order → Payment)
6. Use Pact matchers (regex, type, date) instead of exact values
7. Setup `can-i-deploy` check in CI pipeline
8. Practice Expand & Contract pattern: rename field without breaking consumers

## Summary

- **Contract Testing** ensures API compatibility between microservices without the need for an integration environment
- **Consumer** writes test describing expected API response → generate Pact file
- **Provider** verify Pact file against actual API implementation
- **Pact Matchers** — flexible matching (type, regex, date format) instead of exact values
- **Message Pact** — test Kafka/messaging contracts (producer & consumer agree format)
- **Pact Broker** manages contracts centrally and provides support `can-i-deploy`
- **Can-I-Deploy** — CI gate before deploying, check compatibility
- **Schema Evolution** — Expand & Contract pattern for backward-compatible changes
- Combining unit + integration + contract tests = high confidence when deploying independently

Next article: GraalVM Native Image & Container — build native executables for production.
