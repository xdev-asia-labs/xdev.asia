---
id: 019c9617-fc04-7004-a004-fc0400000004
title: 'Lesson 4: Dependency Injection & Bean Lifecycle'
slug: bai-4-dependency-injection-bean-lifecycle
description: >-
  Constructor Injection, Setter Injection, Field Injection. Bean Scope
  (Singleton, Prototype, Request, Session). Bean Lifecycle callbacks,
  @PostConstruct, @PreDestroy, @Conditional annotations.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'Part 1: Spring Boot Platform'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: From Basics to Advanced'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5325" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5325)"/>

  <!-- Decorations -->
  <g>
    <circle cx="635" cy="255" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="670" cy="70" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="705" cy="145" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="740" cy="220" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="775" cy="35" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="105" x2="1100" y2="185" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="135" x2="1050" y2="205" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1039.6410161513775,185 1039.6410161513775,225 1005,245 970.3589838486224,225 970.3589838486224,185 1005,165" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 Programming — Lesson 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 4: Dependency Injection & Beans</tspan>
      <tspan x="60" dy="42">Lifecycle</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Spring Boot Platform</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Dependency Injection (DI) is the heart of the Spring Framework. A deep understanding of DI and Bean Lifecycle will help you design applications that are easy to test, easy to extend, and easy to maintain. This article will delve into injection types, bean scopes and lifecycle hooks.

---

## 1. Dependency Injection — Three approaches

### 1.1 Constructor Injection (Recommended)

```java
@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final PaymentService paymentService;
    private final NotificationService notificationService;

    // Spring tự inject qua constructor
    // Với 1 constructor duy nhất, @Autowired là optional
    public OrderService(OrderRepository orderRepository,
                        PaymentService paymentService,
                        NotificationService notificationService) {
        this.orderRepository = orderRepository;
        this.paymentService = paymentService;
        this.notificationService = notificationService;
    }
}
```

Advantages:
- **Immutable**: Fields is `final`, cannot be changed after initialization
- **Testable**: Easily create instances in unit testing
- **Fail-fast**: Missing dependency error detected right at startup
- **Clear dependencies**: Look at the constructor and immediately know what the class needs

### 1.2 Setter Injection

```java
@Service
public class ReportService {

    private ReportGenerator reportGenerator;
    private EmailService emailService;

    @Autowired
    public void setReportGenerator(ReportGenerator reportGenerator) {
        this.reportGenerator = reportGenerator;
    }

    @Autowired(required = false) // Optional dependency
    public void setEmailService(EmailService emailService) {
        this.emailService = emailService;
    }
}
```

Used when dependency is **optional** or needs to be **reconfigurable** at runtime.

### 1.3 Field Injection (Not recommended)

```java
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository; // Không dùng cách này!

    @Autowired
    private PasswordEncoder passwordEncoder;
}
```

Disadvantages:
- Cannot create instances in unit testing without using reflection
- Fields can't `final`
- Hidden dependencies, hard to see
- Spring Framework 7 warns about deprecation for field injection

---

## 2. Handle multiple Beans of the same type

### 2.1 @Primary

```java
public interface NotificationService {
    void send(String to, String message);
}

@Service
@Primary // Bean mặc định khi inject NotificationService
public class EmailNotificationService implements NotificationService {
    @Override
    public void send(String to, String message) {
        // Send email
    }
}

@Service
public class SmsNotificationService implements NotificationService {
    @Override
    public void send(String to, String message) {
        // Send SMS
    }
}
```

### 2.2 @Qualifier

```java
@Service
public class OrderService {

    private final NotificationService emailService;
    private final NotificationService smsService;

    public OrderService(
            @Qualifier("emailNotificationService") NotificationService emailService,
            @Qualifier("smsNotificationService") NotificationService smsService) {
        this.emailService = emailService;
        this.smsService = smsService;
    }
}
```

### 2.3 Inject Collection

```java
@Service
public class NotificationManager {

    private final List<NotificationService> notificationServices;

    // Spring inject TẤT CẢ beans implement NotificationService
    public NotificationManager(List<NotificationService> notificationServices) {
        this.notificationServices = notificationServices;
    }

    public void notifyAll(String to, String message) {
        notificationServices.forEach(service -> service.send(to, message));
    }
}
```

---

## 3. Bean Scopes

### 3.1 Available scopes

```java
@Component
@Scope("singleton") // Default - một instance cho toàn bộ ApplicationContext
public class SingletonBean { }

@Component
@Scope("prototype") // Mỗi lần inject tạo instance mới
public class PrototypeBean { }

@Component
@Scope("request") // Một instance per HTTP request (web only)
public class RequestScopedBean { }

@Component
@Scope("session") // Một instance per HTTP session (web only)
public class SessionScopedBean { }
```

### 3.2 Singleton vs Prototype

```java
@Component
public class SingletonDemo {
    // Singleton: Tất cả inject cùng 1 instance
    // ⚠️ Phải thread-safe nếu có mutable state
    private int counter = 0;

    public int increment() {
        return ++counter; // Race condition nếu concurrent access!
    }
}

@Component
@Scope("prototype")
public class PrototypeDemo {
    // Prototype: Mỗi lần inject tạo instance mới
    // Spring KHÔNG quản lý lifecycle sau khi tạo
    private final UUID id = UUID.randomUUID();
}
```

### 3.3 Prototype in Singleton — Common problem

```java
@Service // Singleton
public class OrderProcessor {

    // ⚠️ BUG: Prototype bean chỉ được tạo 1 lần khi Singleton khởi tạo!
    private final PrototypeBean prototypeBean;

    public OrderProcessor(PrototypeBean prototypeBean) {
        this.prototypeBean = prototypeBean;
    }

    // Fix: Dùng ObjectProvider
    private final ObjectProvider<PrototypeBean> prototypeBeanProvider;

    public OrderProcessor(ObjectProvider<PrototypeBean> prototypeBeanProvider) {
        this.prototypeBeanProvider = prototypeBeanProvider;
    }

    public void process() {
        PrototypeBean freshBean = prototypeBeanProvider.getObject(); // Mỗi lần mới
    }
}
```

---

## 4. Bean Lifecycle

### 4.1 Lifecycle Flow

```
Bean Definition Loaded
    │
    ▼
Instantiate (Constructor)
    │
    ▼
Populate Properties (DI)
    │
    ▼
BeanNameAware.setBeanName()
    │
    ▼
BeanFactoryAware.setBeanFactory()
    │
    ▼
ApplicationContextAware.setApplicationContext()
    │
    ▼
BeanPostProcessor.postProcessBeforeInitialization()
    │
    ▼
@PostConstruct method
    │
    ▼
InitializingBean.afterPropertiesSet()
    │
    ▼
Custom init-method
    │
    ▼
BeanPostProcessor.postProcessAfterInitialization()
    │
    ▼
═══════════════════
  Bean is Ready ✅
═══════════════════
    │
    ▼ (Application Shutdown)
    │
@PreDestroy method
    │
    ▼
DisposableBean.destroy()
    │
    ▼
Custom destroy-method
```

### 4.2 Lifecycle Callbacks in practice

```java
@Service
public class CacheService {

    private final Map<String, Object> cache = new ConcurrentHashMap<>();
    private final DataLoader dataLoader;

    public CacheService(DataLoader dataLoader) {
        this.dataLoader = dataLoader;
    }

    @PostConstruct
    public void init() {
        // Chạy sau khi tất cả dependencies đã được inject
        // Dùng để warm up cache, validate config, etc.
        System.out.println("CacheService initialized, warming up cache...");
        cache.putAll(dataLoader.loadInitialData());
    }

    @PreDestroy
    public void cleanup() {
        // Chạy trước khi bean bị destroy (application shutdown)
        // Dùng để release resources, flush data, etc.
        System.out.println("CacheService shutting down, flushing cache...");
        cache.clear();
    }
}
```

### 4.3 SmartInitializingSingleton

```java
@Component
public class ApplicationStartupListener implements SmartInitializingSingleton {

    @Override
    public void afterSingletonsInstantiated() {
        // Chạy sau khi TẤT CẢ singleton beans đã được khởi tạo
        System.out.println("All beans are ready! Application fully started.");
    }
}
```

---

## 5. Conditional Beans

### 5.1 Built-in Conditions

```java
@Configuration
public class ConditionalConfig {

    @Bean
    @ConditionalOnProperty(name = "app.cache.enabled", havingValue = "true")
    public CacheManager cacheManager() {
        return new ConcurrentMapCacheManager("users", "products");
    }

    @Bean
    @ConditionalOnMissingBean(CacheManager.class)
    public CacheManager noOpCacheManager() {
        return new NoOpCacheManager(); // Fallback khi không có cache
    }

    @Bean
    @ConditionalOnClass(name = "io.lettuce.core.RedisClient")
    public RedisTemplate<String, Object> redisTemplate() {
        return new RedisTemplate<>();
    }
}
```

### 5.2 Custom Conditions

```java
// Tạo custom condition
public class OnProductionCondition implements Condition {

    @Override
    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
        String[] activeProfiles = context.getEnvironment().getActiveProfiles();
        return Arrays.asList(activeProfiles).contains("prod");
    }
}

@Bean
@Conditional(OnProductionCondition.class)
public AuditService auditService() {
    return new AuditService();
}
```

---

## 6. Lazy Initialization

### 6.1 Default: Eager Initialization

By default, Spring Boot creates all singleton beans at startup. This helps detect errors early but increases startup time.

### 6.2 Lazy Initialization

```java
@Service
@Lazy // Bean chỉ được tạo khi lần đầu tiên được sử dụng
public class HeavyReportService {
    public HeavyReportService() {
        // Expensive initialization
    }
}
```

```yaml
# Hoặc global lazy initialization
spring:
  main:
    lazy-initialization: true
```

> **Warning**: Lazy initialization can hide configuration errors. Only use it when absolutely necessary (startup time is too slow) and ensure there are complete integration tests.

---

## Summary

- Constructor Injection is the recommended approach: immutable, testable, fail-fast
- Default Bean Scope is Singleton (1 instance), use Prototype when you need a new instance each time
- Bean Lifecycle provides hooks (@PostConstruct, @PreDestroy) to manage resources
- Conditional annotations allow to register beans based on conditions (classpath, properties, profile)

## Exercises

1. Create interface `PaymentGateway` with 2 implementations: `StripeGateway` and `PaypalGateway`. Use @Primary and @Qualifier to inject the correct bean
2. Create a Prototype-scoped bean and inject it into the Singleton bean. Verify that each request receives a different instance (using ObjectProvider)
3. Create a service with @PostConstruct to load data from JSON file at startup, @PreDestroy to log cleanup information
