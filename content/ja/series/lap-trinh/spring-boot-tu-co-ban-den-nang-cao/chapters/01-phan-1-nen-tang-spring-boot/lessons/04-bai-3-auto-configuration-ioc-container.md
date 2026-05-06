---
id: 019c9617-fc03-7003-a003-fc0300000003
title: 'レッスン 3: 自動構成、Spring IoC コンテナーおよびアプリケーションのプロパティ'
slug: bai-3-auto-configuration-ioc-container
description: >-
  自動構成メカニズムはどのように機能しますか? IoC コンテナ、ApplicationContext、BeanFactory。
  application.properties/yaml と Profile を使用してアプリケーションを構成します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: Spring Boot プラットフォーム'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: 基本から上級まで'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 プログラミング — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: 自動構成、Spring IoC</tspan>
      <tspan x="60" dy="42">コンテナとアプリケーションのプロパティ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Spring Boot プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

自動構成は、Spring Boot を純粋な Spring Framework と区別する「魔法」です。その仕組みを理解すると、効果的にデバッグし、必要に応じてアプリケーションをカスタマイズするのに役立ちます。この記事では、IoC コンテナ、自動構成メカニズム、およびアプリケーション構成の管理方法について説明します。

---

## 1. 制御の反転 (IoC) コンテナ

### 1.1 IoC とは何ですか?

従来のプログラミングでは、コードでオブジェクトを作成および管理します。

```java
// Truyền thống: bạn tạo dependencies
public class OrderService {
    private final OrderRepository repository = new OrderRepository();
    private final EmailService emailService = new EmailService();
}
```

IoC を使用すると、フレームワークはオブジェクトの作成を管理します。

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

### 1.2 ApplicationContext と BeanFactory

Spring IoC Container には 2 つの主要なインターフェイスがあります。

```
BeanFactory (interface)
  └── ApplicationContext (interface, extends BeanFactory)
        ├── AnnotationConfigApplicationContext
        ├── GenericWebApplicationContext
        └── ...
```

|特長 |ビーンファクトリー |アプリケーションコンテキスト |
|--------|-------------|--------|
| Bean のインスタンス化 |怠け者 |熱心 (デフォルト) |
|イベント発行 |いいえ |はい |
| AOP サポート |制限事項 |フル |
|国際化 |いいえ |はい |
|環境の抽象化 |いいえ |はい |

実際には常に使用します `ApplicationContext`。

### 1.3 Beanの登録

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

## 2. 自動構成の詳細

### 2.1 作用機序

自動構成は、起動時の**条件**の評価に基づいています。

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

### 2.2 例: データソースの自動構成

追加するとき `spring-boot-starter-data-jpa` および PostgreSQL ドライバー:

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

Spring Boot は次のことを行います。
1. 検出 `DataSource.class` クラスパス内→ `@ConditionalOnClass` =本当
2. 検査はまだ利用できません `DataSource` 豆→ `@ConditionalOnMissingBean` =本当
3. プロパティの読み取り `spring.datasource.*` → データソースの作成

### 2.3 自動構成レポートの表示

```properties
# Bật debug mode để xem report
debug=true
```

```bash
./mvnw spring-boot:run
```

出力には次のように表示されます。

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

### 2.4 自動構成のカスタマイズまたは無効化

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

## 3. アプリケーションのプロパティと YAML

### 3.1 プロパティと YAML の比較

**application.properties:**
```properties
server.port=8080
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=admin
spring.datasource.password=secret
spring.jpa.hibernate.ddl-auto=update
```

**application.yaml (または .yml):**
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

両方の形式がサポートされています。 YAML はネストされた構成の方が読みやすいですが、プロパティの方が一般的です。

### 3.2 カスタム プロパティ

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

### 3.3 プロパティのソースと優先順位

Spring Boot は、優先順位に従って多くのソースからプロパティを読み取ります。

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

## 4. プロファイル — 環境に応じた設定

### 4.1 プロファイルの定義

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

### 4.2 プロファイルのアクティブ化

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

### 4.3 プロファイル固有の Bean

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

## 5. 外部化された構成のベスト プラクティス

### 5.1 ハードコードの秘密はありません

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

### 5.2 ローカル開発での .env ファイルの使用

```bash
# .env (thêm vào .gitignore!)
DB_PASSWORD=local-dev-password
JWT_SECRET=dev-secret-key
```

### 5.3 プロパティの検証

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

必要なプロパティが欠落している場合、アプリケーションはフェイルファストします。

---

## 概要

- IoC コンテナ (ApplicationContext) は Bean のライフサイクルを管理し、コンストラクター/セッター/フィールド インジェクションによる依存性インジェクションをサポートします。
- 自動構成は、クラスパスの依存関係と条件付きアノテーションに基づいて Bean を自動的に構成します。
- Spring Boot は両方をサポートします `.properties` そして `.yaml` 形式、プロファイルにより環境 (dev/staging/prod) に応じた構成が可能

## 演習

1.電源を入れます `debug=true` application.properties で、アプリケーションを実行し、一致する 5 つの自動構成を分析します (肯定的な一致)。
2.作成 `AppProperties` プレフィックス付きのレコードクラス `app`、application.yaml から 3 つのカスタム プロパティをバインドし、コントローラーに挿入して表示します。
3. データベース URL が異なる 2 つのプロファイル (dev と prod) を作成し、各プロファイルでアプリケーションを実行し、ログ出力を確認します。
