---
id: 019c9617-fc14-7014-a014-fc1400000014
title: 'Bài 14: Async Processing, Scheduling & Application Events'
slug: bai-14-async-scheduling-events
description: >-
  @Async với Virtual Threads, CompletableFuture. @Scheduled cho background tasks.
  Spring Application Events — publish/subscribe, domain events, @TransactionalEventListener.
duration_minutes: 120
is_free: false
video_url: null
sort_order: 13
section_title: "Phần 4: Tính năng Nâng cao"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6083" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6083)"/>

  <!-- Decorations -->
  <g>
    <circle cx="786" cy="168" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="972" cy="214" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="658" cy="260" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="844" cy="46" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1030" cy="92" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="128" x2="1100" y2="208" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="158" x2="1050" y2="228" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1065.2390923627308,206.5 1065.2390923627308,249.5 1028,271 990.7609076372692,249.5 990.7609076372692,206.5 1028,185" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 Lập trình — Bài 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 14: Async Processing, Scheduling &amp;</tspan>
      <tspan x="60" dy="42">Application Events</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Tính năng Nâng cao</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Xử lý bất đồng bộ, task scheduling và event-driven architecture là ba patterns được sử dụng rộng rãi trong các ứng dụng enterprise. Spring Boot 4 hỗ trợ Virtual Threads (Java 21+), giúp async processing hiệu quả hơn bao giờ hết.

---

## 1. @Async — Xử lý bất đồng bộ

### 1.1 Bật Async

```java
@Configuration
@EnableAsync
public class AsyncConfig { }
```

### 1.2 Sử dụng @Async

```java
@Service
public class NotificationService {

    // Fire-and-forget
    @Async
    public void sendWelcomeEmail(String email, String name) {
        log.info("Sending email to {} on thread: {}",
            email, Thread.currentThread().getName());
        emailClient.send(email, "Welcome " + name, buildWelcomeBody(name));
    }

    // Trả về CompletableFuture
    @Async
    public CompletableFuture<ReportResult> generateReport(ReportRequest request) {
        ReportResult result = reportGenerator.generate(request);
        return CompletableFuture.completedFuture(result);
    }
}
```

### 1.3 Virtual Threads (Spring Boot 4 + Java 21+)

```yaml
# application.yml
spring:
  threads:
    virtual:
      enabled: true  # Tự động dùng Virtual Threads cho @Async
```

```java
// Custom executor với Virtual Threads
@Bean
public AsyncTaskExecutor applicationTaskExecutor() {
    return new TaskExecutorAdapter(
        Executors.newVirtualThreadPerTaskExecutor());
}
```

### 1.4 Compose nhiều Async operations

```java
@Service
public class DashboardService {

    public DashboardResponse getDashboard(Long userId) {
        CompletableFuture<UserStats> statsFuture =
            statsService.getUserStats(userId);
        CompletableFuture<List<Notification>> notifFuture =
            notificationService.getRecent(userId);
        CompletableFuture<List<Order>> ordersFuture =
            orderService.getRecentOrders(userId);

        // Chờ tất cả hoàn thành
        CompletableFuture.allOf(statsFuture, notifFuture, ordersFuture).join();

        return new DashboardResponse(
            statsFuture.join(),
            notifFuture.join(),
            ordersFuture.join()
        );
    }
}
```

### 1.5 Xử lý lỗi Async

```java
@Component
public class AsyncExceptionHandler implements AsyncUncaughtExceptionHandler {

    @Override
    public void handleUncaughtException(Throwable ex, Method method,
                                         Object... params) {
        log.error("Async error in {}: {}", method.getName(), ex.getMessage(), ex);
    }
}

@Configuration
@EnableAsync
public class AsyncConfig implements AsyncConfigurer {

    @Override
    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
        return new AsyncExceptionHandler();
    }
}
```

---

## 2. @Scheduled — Task Scheduling

### 2.1 Bật Scheduling

```java
@Configuration
@EnableScheduling
public class SchedulingConfig { }
```

### 2.2 Các loại Schedule

```java
@Component
public class ScheduledTasks {

    // Fixed rate: 5 giây một lần (tính từ lúc BẮT ĐẦU task trước)
    @Scheduled(fixedRate = 5000)
    public void checkHealth() {
        log.info("Health check at {}", Instant.now());
    }

    // Fixed delay: 5 giây sau khi task trước HOÀN THÀNH
    @Scheduled(fixedDelay = 5000, initialDelay = 10000)
    public void syncData() {
        log.info("Syncing data...");
    }

    // Cron expression: 2 giờ sáng mỗi ngày
    @Scheduled(cron = "0 0 2 * * *")
    public void dailyCleanup() {
        log.info("Running daily cleanup...");
        tempFileService.deleteExpired();
    }

    // Cấu hình từ properties
    @Scheduled(cron = "${app.scheduler.report-cron:0 0 6 * * MON}")
    public void weeklyReport() {
        reportService.generateWeeklyReport();
    }
}
```

### 2.3 Cron Expression cheat sheet

```
┌───────────── second (0-59)
│ ┌───────────── minute (0-59)
│ │ ┌───────────── hour (0-23)
│ │ │ ┌───────────── day of month (1-31)
│ │ │ │ ┌───────────── month (1-12)
│ │ │ │ │ ┌───────────── day of week (0-7, 0=Sun)
│ │ │ │ │ │
* * * * * *

0 0 2 * * *     → 2:00 AM mỗi ngày
0 */15 * * * *   → Mỗi 15 phút
0 0 9-17 * * MON-FRI → Mỗi giờ 9h-17h, thứ 2-6
```

---

## 3. Spring Application Events

### 3.1 Tạo Custom Event

```java
// Event dùng record
public record OrderCreatedEvent(
    Long orderId,
    Long userId,
    BigDecimal totalAmount,
    Instant createdAt
) { }
```

### 3.2 Publish Event

```java
@Service
public class OrderService {

    private final ApplicationEventPublisher eventPublisher;

    public OrderService(ApplicationEventPublisher eventPublisher) {
        this.eventPublisher = eventPublisher;
    }

    @Transactional
    public OrderResponse createOrder(CreateOrderRequest request) {
        Order order = orderRepository.save(mapToOrder(request));

        // Publish event
        eventPublisher.publishEvent(new OrderCreatedEvent(
            order.getId(),
            order.getUserId(),
            order.getTotalAmount(),
            Instant.now()
        ));

        return OrderResponse.from(order);
    }
}
```

### 3.3 Subscribe Event

```java
@Component
public class OrderEventListener {

    // Đồng bộ (cùng thread, cùng transaction)
    @EventListener
    public void onOrderCreated(OrderCreatedEvent event) {
        log.info("Order {} created, amount: {}",
            event.orderId(), event.totalAmount());
    }

    // Async listener
    @Async
    @EventListener
    public void sendOrderConfirmation(OrderCreatedEvent event) {
        emailService.sendOrderConfirmation(event.userId(), event.orderId());
    }

    // Chỉ xử lý SAU khi transaction commit thành công
    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void afterOrderCommitted(OrderCreatedEvent event) {
        inventoryService.decreaseStock(event.orderId());
        analyticsService.trackOrder(event);
    }

    // Conditional listener
    @EventListener(condition = "#event.totalAmount() > 1000000")
    public void onHighValueOrder(OrderCreatedEvent event) {
        alertService.notifyManager(event);
    }
}
```

### 3.4 Event Flow trong ứng dụng

```
OrderController
    │
    ▼
OrderService.createOrder()
    │── Save to DB
    │── Publish OrderCreatedEvent
    │
    ▼
┌─────────────────────────────────┐
│  Event Listeners                │
│  ├── NotificationListener       │  ← @Async: gửi email
│  ├── InventoryListener          │  ← @TransactionalEventListener
│  ├── AnalyticsListener          │  ← @Async: track metrics
│  └── AuditListener              │  ← Ghi audit log
└─────────────────────────────────┘
```

---

## Tóm tắt

- @Async kết hợp Virtual Threads (Spring Boot 4) cho xử lý concurrent hiệu quả, không cần quản lý thread pool thủ công
- @Scheduled hỗ trợ fixed rate, fixed delay, cron expressions cho background tasks
- Application Events (publish/subscribe) giúp decouple business logic, @TransactionalEventListener đảm bảo event chỉ xử lý sau khi transaction commit

## Bài tập

1. Implement async email service: Sau khi tạo user, gửi welcome email bất đồng bộ. Xử lý lỗi với AsyncUncaughtExceptionHandler
2. Tạo scheduled task chạy mỗi ngày lúc 2h sáng, xóa expired sessions và temporary files
3. Implement event-driven order processing: OrderCreatedEvent → NotificationListener + InventoryListener + AnalyticsListener, dùng @TransactionalEventListener
