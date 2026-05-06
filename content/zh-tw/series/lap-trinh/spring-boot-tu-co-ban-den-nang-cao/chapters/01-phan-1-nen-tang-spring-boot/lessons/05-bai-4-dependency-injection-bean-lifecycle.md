---
id: 019c9617-fc04-7004-a004-fc0400000004
title: 第 4 課：依賴注入與 Bean 生命週期
slug: bai-4-dependency-injection-bean-lifecycle
description: >-
  建構函式註入、Setter 注入、欄位注入。 Bean 範圍（單例、原型、請求、會話）。 Bean
  生命週期回調、@PostConstruct、@PreDestroy、@Conditional 註釋。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 第 1 部分：Spring Boot 平台
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: Spring Boot 4：從基礎到高級
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 程式設計 — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：依賴注入與 Bean</tspan>
      <tspan x="60" dy="42">生命週期</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Spring Boot 平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

依賴注入 (DI) 是 Spring 框架的核心。對 DI 和 Bean 生命週期的深入了解將幫助您設計易於測試、易於擴展和易於維護的應用程式。本文將深入探討注入型態、bean 作用域與生命週期掛鉤。

---

## 1. 依賴注入－三種方法

### 1.1 建構子注入（建議）

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

優點：
- **不可變**：字段是 `final`，初始化後不能更改
- **可測試**：在單元測試中輕鬆建立實例
- **快速失敗**：啟動時偵測到缺少依賴項錯誤
- **清晰的依賴關係**：看看建構函數，立即知道類別需要什麼

### 1.2 Setter注入

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

當依賴項是**可選**或需要在運行時**可重新配置**時使用。

### 1.3 欄位注入（不建議）

```java
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository; // Không dùng cách này!

    @Autowired
    private PasswordEncoder passwordEncoder;
}
```

缺點：
- 不使用反射就無法在單元測試中建立實例
- 字段不能 `final`
- 隱藏的依賴關係，很難看到
- Spring Framework 7 警告棄用欄位注入

---

## 2. 處理多個相同類型的Bean

### 2.1 @小學

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

### 2.2 @限定符

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

### 2.3 注入集合

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

## 3.Bean 範圍

### 3.1 可用範圍

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

### 3.2 單例與原型

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

### 3.3 Singleton 中的原型 — 常見問題

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

## 4.Bean 生命週期

### 4.1 生命週期流程

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

### 4.2 生命週期回呼實踐

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

### 4.3 智慧初始化單例

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

## 5. 條件 Bean

### 5.1 內建條件

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

### 5.2 自訂條件

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

## 6. 延遲初始化

### 6.1 預設：熱切初始化

預設情況下，Spring Boot 在啟動時會建立所有單例 bean。這有助於及早發現錯誤，但會增加啟動時間。

### 6.2 延遲初始化

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

> **警告**：延遲初始化可以隱藏設定錯誤。僅在絕對必要時使用它（啟動時間太慢）並確保有完整的整合測試。

---

## 總結

- 建構函式註入是推薦的方法：不可變、可測試、快速失敗
- 預設 Bean 範圍是 Singleton（1 個實例），當每次需要新實例時使用 Prototype
- Bean Lifecycle提供鉤子（@PostConstruct、@PreDestroy）來管理資源
- 條件註解允許根據條件（類別路徑、屬性、設定檔）註冊 bean

## 練習

1.創建接口 `PaymentGateway` 有 2 個實作： `StripeGateway` 和 `PaypalGateway`。使用@Primary和@Qualifier注入正確的bean
2. 建立一個 Prototype 範圍的 bean 並將其註入到 Singleton bean 中。驗證每個請求是否收到不同的實例（使用 ObjectProvider）
3. 使用@PostConstruct建立一個服務，以在啟動時從JSON檔案載入數據，使用@PreDestroy來記錄清理訊息
