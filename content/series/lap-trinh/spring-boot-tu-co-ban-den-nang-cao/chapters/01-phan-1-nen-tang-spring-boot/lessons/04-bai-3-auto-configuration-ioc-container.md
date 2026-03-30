---
id: 019c9617-fc03-7003-a003-fc0300000003
title: 'Bài 3: Auto-Configuration, Spring IoC Container & Application Properties'
slug: bai-3-auto-configuration-ioc-container
description: >-
  Cơ chế Auto-Configuration hoạt động như thế nào. IoC Container, ApplicationContext,
  BeanFactory. Cấu hình ứng dụng với application.properties/yaml và Profile.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng Spring Boot"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

## Giới thiệu

Auto-Configuration là "phép thuật" làm cho Spring Boot khác biệt so với Spring Framework thuần. Hiểu cách nó hoạt động sẽ giúp bạn debug hiệu quả và customize ứng dụng theo ý muốn. Trong bài này, chúng ta sẽ khám phá IoC Container, cơ chế Auto-Configuration và cách quản lý cấu hình ứng dụng.

---

## 1. Inversion of Control (IoC) Container

### 1.1 IoC là gì?

Trong lập trình truyền thống, code của bạn tạo và quản lý các objects:

```java
// Truyền thống: bạn tạo dependencies
public class OrderService {
    private final OrderRepository repository = new OrderRepository();
    private final EmailService emailService = new EmailService();
}
```

Với IoC, framework quản lý việc tạo objects:

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

### 1.2 ApplicationContext vs BeanFactory

Spring IoC Container có 2 interface chính:

```
BeanFactory (interface)
  └── ApplicationContext (interface, extends BeanFactory)
        ├── AnnotationConfigApplicationContext
        ├── GenericWebApplicationContext
        └── ...
```

| Feature | BeanFactory | ApplicationContext |
|---------|-------------|-------------------|
| Bean instantiation | Lazy | Eager (default) |
| Event publishing | Không | Có |
| AOP support | Hạn chế | Đầy đủ |
| Internationalization | Không | Có |
| Environment abstraction | Không | Có |

Trong thực tế, luôn sử dụng `ApplicationContext`.

### 1.3 Bean Registration

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

## 2. Auto-Configuration Deep Dive

### 2.1 Cơ chế hoạt động

Auto-Configuration dựa trên đánh giá các **conditions** tại thời điểm startup:

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

### 2.2 Ví dụ: DataSource Auto-Configuration

Khi bạn thêm `spring-boot-starter-data-jpa` và PostgreSQL driver:

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

Spring Boot sẽ:
1. Phát hiện `DataSource.class` trong classpath → `@ConditionalOnClass` = true
2. Kiểm tra chưa có `DataSource` bean → `@ConditionalOnMissingBean` = true
3. Đọc properties `spring.datasource.*` → Tạo DataSource

### 2.3 Xem Auto-Configuration Report

```properties
# Bật debug mode để xem report
debug=true
```

```bash
./mvnw spring-boot:run
```

Output sẽ hiển thị:

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

### 2.4 Customize hoặc Disable Auto-Configuration

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

## 3. Application Properties & YAML

### 3.1 Properties vs YAML

**application.properties:**
```properties
server.port=8080
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=admin
spring.datasource.password=secret
spring.jpa.hibernate.ddl-auto=update
```

**application.yaml (hoặc .yml):**
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

Cả hai format đều được hỗ trợ. YAML dễ đọc hơn cho cấu hình lồng nhau, nhưng properties phổ biến hơn.

### 3.2 Custom Properties

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

### 3.3 Property Sources & Priority

Spring Boot đọc properties từ nhiều nguồn với thứ tự ưu tiên:

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

## 4. Profiles — Cấu hình theo môi trường

### 4.1 Định nghĩa Profiles

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

### 4.2 Kích hoạt Profile

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

### 4.3 Profile-specific Beans

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

## 5. Externalized Configuration Best Practices

### 5.1 Không hardcode secrets

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

### 5.2 Sử dụng .env file cho local development

```bash
# .env (thêm vào .gitignore!)
DB_PASSWORD=local-dev-password
JWT_SECRET=dev-secret-key
```

### 5.3 Validation cho properties

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

Ứng dụng sẽ fail-fast khi thiếu required properties.

---

## Tóm tắt

- IoC Container (ApplicationContext) quản lý lifecycle của beans, hỗ trợ Dependency Injection qua constructor/setter/field injection
- Auto-Configuration tự động cấu hình beans dựa trên classpath dependencies và conditional annotations
- Spring Boot hỗ trợ cả `.properties` và `.yaml` format, Profiles cho phép cấu hình theo môi trường (dev/staging/prod)

## Bài tập

1. Bật `debug=true` trong application.properties, chạy ứng dụng và phân tích 5 auto-configurations được match (Positive matches)
2. Tạo `AppProperties` record class với prefix `app`, bind 3 custom properties từ application.yaml và inject vào một controller để hiển thị
3. Tạo 2 profiles (dev và prod) với database URL khác nhau, chạy ứng dụng với mỗi profile và verify log output
