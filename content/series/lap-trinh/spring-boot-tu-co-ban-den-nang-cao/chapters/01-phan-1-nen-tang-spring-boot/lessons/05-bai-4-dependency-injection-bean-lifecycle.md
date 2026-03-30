---
id: 019c9617-fc04-7004-a004-fc0400000004
title: 'Bài 4: Dependency Injection & Bean Lifecycle'
slug: bai-4-dependency-injection-bean-lifecycle
description: >-
  Constructor Injection, Setter Injection, Field Injection. Bean Scope (Singleton,
  Prototype, Request, Session). Bean Lifecycle callbacks, @PostConstruct, @PreDestroy,
  @Conditional annotations.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Nền tảng Spring Boot"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

## Giới thiệu

Dependency Injection (DI) là trái tim của Spring Framework. Hiểu sâu về DI và Bean Lifecycle sẽ giúp bạn thiết kế ứng dụng dễ test, dễ mở rộng và dễ maintain. Bài này sẽ đi sâu vào các kiểu injection, bean scopes và lifecycle hooks.

---

## 1. Dependency Injection — Ba cách tiếp cận

### 1.1 Constructor Injection (Khuyến nghị)

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

Ưu điểm:
- **Immutable**: Fields là `final`, không thể thay đổi sau khi khởi tạo
- **Testable**: Dễ dàng tạo instance trong unit test
- **Fail-fast**: Lỗi thiếu dependency phát hiện ngay lúc startup
- **Clear dependencies**: Nhìn constructor biết ngay class cần gì

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

Dùng khi dependency là **optional** hoặc cần **reconfigurable** tại runtime.

### 1.3 Field Injection (Không khuyến nghị)

```java
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository; // Không dùng cách này!

    @Autowired
    private PasswordEncoder passwordEncoder;
}
```

Nhược điểm:
- Không thể tạo instance trong unit test mà không dùng reflection
- Fields không thể `final`
- Dependencies ẩn, khó nhìn thấy
- Spring Framework 7 cảnh báo deprecation cho field injection

---

## 2. Xử lý nhiều Bean cùng type

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

### 3.1 Các scope có sẵn

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

### 3.3 Prototype trong Singleton — Vấn đề thường gặp

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

### 4.2 Lifecycle Callbacks trong thực tế

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

### 5.2 Custom Condition

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

Mặc định, Spring Boot tạo tất cả singleton beans lúc startup. Điều này giúp phát hiện lỗi sớm nhưng tăng startup time.

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

> **Cảnh báo**: Lazy initialization có thể che giấu lỗi configuration. Chỉ dùng khi thật sự cần thiết (startup time quá chậm) và đảm bảo có integration tests đầy đủ.

---

## Tóm tắt

- Constructor Injection là cách tiếp cận khuyến nghị: immutable, testable, fail-fast
- Bean Scope mặc định là Singleton (1 instance), dùng Prototype khi cần instance mới mỗi lần
- Bean Lifecycle cung cấp hooks (@PostConstruct, @PreDestroy) để quản lý resources
- Conditional annotations cho phép đăng ký beans dựa trên conditions (classpath, properties, profile)

## Bài tập

1. Tạo interface `PaymentGateway` với 2 implementations: `StripeGateway` và `PaypalGateway`. Dùng @Primary và @Qualifier để inject đúng bean
2. Tạo một Prototype-scoped bean và inject vào Singleton bean. Verify rằng mỗi request nhận instance khác nhau (dùng ObjectProvider)
3. Tạo service với @PostConstruct để load dữ liệu từ file JSON khi startup, @PreDestroy để log thông tin cleanup
