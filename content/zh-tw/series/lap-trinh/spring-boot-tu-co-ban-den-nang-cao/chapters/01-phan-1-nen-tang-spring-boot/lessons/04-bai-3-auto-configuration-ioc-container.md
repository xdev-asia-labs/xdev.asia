---
id: 019c9617-fc03-7003-a003-fc0300000003
title: 第 3 課：自動設定、Spring IoC 容器和應用程式屬性
slug: bai-3-auto-configuration-ioc-container
description: >-
  自動配置機制如何運作？ IoC 容器、ApplicationContext、BeanFactory。使用
  application.properties/yaml 和 Profile 設定應用程式。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：Spring Boot 平台
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: Spring Boot 4：從基礎到高級
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9535" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9535)"/>

  <!-- Decorations -->
  <g>
    <circle cx="659" cy="127" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="718" cy="246" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="777" cy="105" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="836" cy="224" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="895" cy="83" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="57" x2="1100" y2="137" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="87" x2="1050" y2="157" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="934.712812921102,91 934.712812921102,123 907,139 879.287187078898,123 879.287187078898,91.00000000000001 907,75" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 程式設計 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：自動設定、Spring IoC</tspan>
      <tspan x="60" dy="42">容器和應用程式屬性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Spring Boot 平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

自動配置是Spring Boot區別於純Spring框架的「魔力」。了解它的工作原理將幫助您有效地調試並根據需要自訂應用程式。在本文中，我們將探討 IoC 容器、自動設定機制以及如何管理應用程式設定。

---

## 1. 控制反轉 (IoC) 容器

### 1.1 什麼是國際奧委會？

在傳統程式設計中，您的程式碼會建立並管理物件：

```java
// Truyền thống: bạn tạo dependencies
public class OrderService {
    private final OrderRepository repository = new OrderRepository();
    private final EmailService emailService = new EmailService();
}
```

透過 IoC，框架管理物件的創建：

```java
// IoC: framework inject dependencies
@Service
public class OrderService {
    private final OrderRepository repository;
    private final EmailService emailService;

    // Spring tự động inject các dependencies
    public OrderService(OrderRepository repository, EmailService emailService) {
        this.repository = repository;
        this.emailService = emailService;
    }
}
```

### 1.2 ApplicationContext 與 BeanFactory

Spring IoC容器有2個主要介面：

```
BeanFactory (interface)
  └── ApplicationContext (interface, extends BeanFactory)
        ├── AnnotationConfigApplicationContext
        ├── GenericWebApplicationContext
        └── ...
```

|特點|豆工廠 |應用程式上下文 |
|--------|-------------|--------------------|
| Bean 實例化 |懶惰|渴望（預設）|
|活動發布 |沒有 |是的 |
| AOP 支援 |限制 |完整|
|國際化|沒有 |是的 |
|環境抽象|沒有 |是的 |

事實上，總是使用 `ApplicationContext`。

### 1.3 Bean註冊

```java
// Cách 1: Stereotype Annotations (phổ biến nhất)
@Component      // Generic component
@Service        // Business logic
@Repository     // Data access
@Controller     // Web controller
@RestController // REST API controller
@Configuration  // Configuration class

// Cách 2: @Bean method trong @Configuration
@Configuration
public class AppConfig {

    @Bean
    public ObjectMapper objectMapper() {
        return new ObjectMapper()
            .registerModule(new JavaTimeModule())
            .disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
    }

    @Bean
    public RestClient restClient() {
        return RestClient.builder()
            .baseUrl("https://api.example.com")
            .build();
    }
}
```

---

## 2. 自動設定深入探討

### 2.1 作用機制

自動配置基於啟動時對**條件**的評估：

```
Application Start
    │
    ▼
@SpringBootApplication
    │
    ├── @EnableAutoConfiguration
    │       │
    │       ▼
    │   META-INF/spring/
    │   org.springframework.boot.autoconfigure.AutoConfiguration.imports
    │       │
    │       ▼
    │   Evaluate @Conditional annotations
    │       │
    │       ├── @ConditionalOnClass → Class có trong classpath?
    │       ├── @ConditionalOnMissingBean → Bean đã tồn tại chưa?
    │       ├── @ConditionalOnProperty → Property có được set?
    │       └── @ConditionalOnWebApplication → Có phải web app?
    │       │
    │       ▼
    │   Create & Register Beans
    │
    ▼
Application Ready
```

### 2.2 範例：資料來源自動配置

當你加入 `spring-boot-starter-data-jpa` 和 PostgreSQL 驅動程式：

```java
// Spring Boot tự động detect và tạo configuration tương tự:
@AutoConfiguration
@ConditionalOnClass({ DataSource.class, EmbeddedDatabaseType.class })
@EnableConfigurationProperties(DataSourceProperties.class)
public class DataSourceAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public DataSource dataSource(DataSourceProperties properties) {
        return properties.initializeDataSourceBuilder().build();
    }
}
```

Spring Boot 將：
1. 檢測 `DataSource.class` 在類路徑中→ `@ConditionalOnClass` = 真
2. 尚未進行檢查 `DataSource` 豆類 → `@ConditionalOnMissingBean` = 真
3. 讀取屬性 `spring.datasource.*` → 建立資料來源

### 2.3 查看自動設定報告

```properties
# Bật debug mode để xem report
debug=true
```

```bash
./mvnw spring-boot:run
```

輸出將顯示：

```
============================
CONDITIONS EVALUATION REPORT
============================

Positive matches:
-----------------
   DataSourceAutoConfiguration matched:
      - @ConditionalOnClass found required classes
        'javax.sql.DataSource', 'org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType'

Negative matches:
-----------------
   MongoAutoConfiguration:
      - @ConditionalOnClass did not find required class
        'com.mongodb.client.MongoClient'
```

### 2.4 自訂或停用自動配置

```java
// Exclude cụ thể
@SpringBootApplication(exclude = {
    DataSourceAutoConfiguration.class,
    SecurityAutoConfiguration.class
})
public class MyApplication { }

// Hoặc trong properties
spring.autoconfigure.exclude=\
  org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
```

---

## 3. 應用程式屬性和 YAML

### 3.1 屬性與 YAML

**應用程式.屬性：**
```properties
server.port=8080
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=admin
spring.datasource.password=secret
spring.jpa.hibernate.ddl-auto=update
```

**application.yaml（或.yml）：**
```yaml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/mydb
    username: admin
    password: secret
  jpa:
    hibernate:
      ddl-auto: update
```

兩種格式均支援。 YAML 對於巢狀配置更具可讀性，但屬性更常見。

### 3.2 自訂屬性

```java
// Định nghĩa properties class
@ConfigurationProperties(prefix = "app")
public record AppProperties(
    String name,
    String version,
    Security security
) {
    public record Security(
        String jwtSecret,
        long jwtExpirationMs,
        long refreshExpirationMs
    ) {}
}
```

```yaml
# application.yaml
app:
  name: My Application
  version: 1.0.0
  security:
    jwt-secret: my-256-bit-secret-key-for-jwt-signing
    jwt-expiration-ms: 3600000
    refresh-expiration-ms: 86400000
```

```java
// Enable và sử dụng
@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class MyApplication { }

@Service
public class AuthService {
    private final AppProperties appProperties;

    public AuthService(AppProperties appProperties) {
        this.appProperties = appProperties;
        // appProperties.security().jwtSecret()
    }
}
```

### 3.3 財產來源與優先級

Spring Boot 會以優先權順序從多個來源讀取屬性：

```
1. Command line arguments (highest priority)
   java -jar app.jar --server.port=9090

2. OS Environment variables
   SERVER_PORT=9090

3. application-{profile}.properties
   application-prod.properties

4. application.properties
   src/main/resources/application.properties

5. @PropertySource annotations

6. Default properties (lowest priority)
```

---

## 4. Profiles — 依照環境進行配置

### 4.1 設定檔的定義

```yaml
# application.yaml (default, mọi môi trường)
spring:
  application:
    name: my-app

---
# application-dev.yaml
spring:
  config:
    activate:
      on-profile: dev
  datasource:
    url: jdbc:postgresql://localhost:5432/mydb_dev
  jpa:
    show-sql: true

---
# application-prod.yaml
spring:
  config:
    activate:
      on-profile: prod
  datasource:
    url: jdbc:postgresql://db-prod:5432/mydb_prod
  jpa:
    show-sql: false
```

### 4.2 啟動個人資料

```bash
# Cách 1: Command line
java -jar app.jar --spring.profiles.active=prod

# Cách 2: Environment variable
SPRING_PROFILES_ACTIVE=prod java -jar app.jar

# Cách 3: Trong application.properties
spring.profiles.active=dev

# Cách 4: Trong IDE
# Run Configuration → Environment variables → SPRING_PROFILES_ACTIVE=dev
```

### 4.3 特定於設定檔的 Bean

```java
@Configuration
public class StorageConfig {

    @Bean
    @Profile("dev")
    public StorageService localStorageService() {
        return new LocalStorageService("/tmp/uploads");
    }

    @Bean
    @Profile("prod")
    public StorageService s3StorageService() {
        return new S3StorageService();
    }
}
```

---

## 5. 外部化配置最佳實踐

### 5.1 無硬編碼秘密

```yaml
# SAI - Không bao giờ commit secrets
spring:
  datasource:
    password: my-real-password

# ĐÚNG - Dùng environment variables
spring:
  datasource:
    password: ${DB_PASSWORD}
```

### 5.2 使用.env檔案進行本機開發

```bash
# .env (thêm vào .gitignore!)
DB_PASSWORD=local-dev-password
JWT_SECRET=dev-secret-key
```

### 5.3 屬性驗證

```java
@ConfigurationProperties(prefix = "app")
@Validated
public record AppProperties(
    @NotBlank String name,
    @NotBlank String version,
    @Valid Security security
) {
    public record Security(
        @NotBlank String jwtSecret,
        @Positive long jwtExpirationMs
    ) {}
}
```

當缺少必需的屬性時，應用程式將快速失敗。

---

## 總結

- IoC容器（ApplicationContext）管理bean的生命週期，透過建構子/setter/字段注入支援依賴注入
- 自動配置根據類別路徑依賴項和條件註解自動配置bean
- Spring Boot 兩者都支持 `.properties` 和 `.yaml` 格式，設定檔允許根據環境進行配置（dev/staging/prod）

## 練習

1. 開機 `debug=true` 在 application.properties 中，執行應用程式並分析 5 個匹配的自動配置（正匹配）
2. 創建 `AppProperties` 帶有前綴的記錄類 `app`，從application.yaml綁定3個自訂屬性並注入到控制器中顯示
3. 使用不同的資料庫 URL 建立 2 個設定檔（dev 和 prod），使用每個設定檔執行應用程式並驗證日誌輸出
