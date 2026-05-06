---
id: 019c9617-fc03-7003-a003-fc0300000003
title: 'Lesson 3: Auto-Configuration, Spring IoC Container & Application Properties'
slug: bai-3-auto-configuration-ioc-container
description: >-
  How does the Auto-Configuration mechanism work? IoC Containers,
  ApplicationContext, BeanFactory. Configure the application with
  application.properties/yaml and Profile.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'Part 1: Spring Boot Platform'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: From Basics to Advanced'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 Programming — Lesson 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: Auto-Configuration, Spring IoC</tspan>
      <tspan x="60" dy="42">Containers & Application Properties</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Spring Boot Platform</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Auto-Configuration is the "magic" that makes Spring Boot different from pure Spring Framework. Understanding how it works will help you debug effectively and customize the application as desired. In this article, we will explore IoC Containers, the Auto-Configuration mechanism, and how to manage application configuration.

---

## 1. Inversion of Control (IoC) Containers

### 1.1 What is IoC?

In traditional programming, your code creates and manages objects:

```java
// Truyền thống: bạn tạo dependencies
public class OrderService {
    private final OrderRepository repository = new OrderRepository();
    private final EmailService emailService = new EmailService();
}
```

With IoC, the framework manages the creation of objects:

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

Spring IoC Container has 2 main interfaces:

```
BeanFactory (interface)
  └── ApplicationContext (interface, extends BeanFactory)
        ├── AnnotationConfigApplicationContext
        ├── GenericWebApplicationContext
        └── ...
```

| Features | BeanFactory | ApplicationContext |
|--------|-------------|-------------------|
| Bean instantiation | Lazy | Eager (default) |
| Event publishing | No | Yes |
| AOP support | Limitations | Full |
| Internationalization | No | Yes |
| Environment abstraction | No | Yes |

In fact, always use `ApplicationContext`.

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

### 2.1 Mechanism of action

Auto-Configuration is based on assessment of **conditions** at startup time:

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

### 2.2 Example: DataSource Auto-Configuration

When you add `spring-boot-starter-data-jpa` and PostgreSQL driver:

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

Spring Boot will:
1. Detection `DataSource.class` in classpath → `@ConditionalOnClass` = true
2. Inspection not yet available `DataSource` beans → `@ConditionalOnMissingBean` = true
3. Read properties `spring.datasource.*` → Create DataSource

### 2.3 View Auto-Configuration Report

```properties
# Bật debug mode để xem report
debug=true
```

```bash
./mvnw spring-boot:run
```

Output will display:

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

### 2.4 Customize or Disable Auto-Configuration

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

**application.yaml (or .yml):**
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

Both formats are supported. YAML is more readable for nested configuration, but properties are more common.

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

### 3.3 Property Sources & Priorities

Spring Boot reads properties from many sources with priority order:

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

## 4. Profiles — Configuration according to environment

### 4.1 Definition of Profiles

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

### 4.2 Activate Profile

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

### 5.1 No hardcode secrets

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

### 5.2 Using .env files for local development

```bash
# .env (thêm vào .gitignore!)
DB_PASSWORD=local-dev-password
JWT_SECRET=dev-secret-key
```

### 5.3 Validation for properties

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

The application will fail-fast when required properties are missing.

---

## Summary

- IoC Container (ApplicationContext) manages the lifecycle of beans, supports Dependency Injection via constructor/setter/field injection
- Auto-Configuration automatically configures beans based on classpath dependencies and conditional annotations
- Spring Boot supports both `.properties` and `.yaml` format, Profiles allows configuration according to environment (dev/staging/prod)

## Exercises

1. Turn on `debug=true` in application.properties, run the application and analyze the 5 auto-configurations that are matched (Positive matches)
2. Create `AppProperties` record class with prefix `app`, bind 3 custom properties from application.yaml and inject into a controller to display
3. Create 2 profiles (dev and prod) with different database URLs, run the application with each profile and verify log output
