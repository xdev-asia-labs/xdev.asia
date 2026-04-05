---
id: 019c9617-fc01-7001-a001-fc0100000001
title: 'Bài 1: Spring Boot là gì? — Lịch sử, Kiến trúc và Hệ sinh thái Spring'
slug: bai-1-spring-boot-la-gi
description: >-
  Tổng quan về Spring Framework và Spring Boot. Lịch sử phát triển từ Spring 1.0 đến
  Spring Boot 4.x. Kiến trúc layered, các module chính và khi nào nên dùng Spring Boot.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 1: Nền tảng Spring Boot"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4160" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4160)"/>

  <!-- Decorations -->
  <g>
    <circle cx="960" cy="30" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="30" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="30" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1040" cy="30" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="30" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="130" x2="1100" y2="210" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="160" x2="1050" y2="230" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.650635094611,167.5 1001.650635094611,192.5 980,205 958.349364905389,192.5 958.349364905389,167.5 980,155" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 Lập trình — Bài 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 1: Spring Boot là gì? — Lịch sử, Kiến</tspan>
      <tspan x="60" dy="42">trúc và Hệ sinh thái Spring</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng Spring Boot</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Spring Boot là framework phổ biến nhất trong hệ sinh thái Java để xây dựng ứng dụng backend. Từ các startup đến các tập đoàn lớn như Netflix, Alibaba, và Google đều sử dụng Spring Boot cho hệ thống production của mình.

Trong bài học đầu tiên này, chúng ta sẽ tìm hiểu Spring Boot là gì, lịch sử phát triển, kiến trúc tổng quan và tại sao nó trở thành lựa chọn hàng đầu cho Java backend development.

---

## 1. Spring Framework — Nền tảng của mọi thứ

### 1.1 Spring Framework là gì?

Spring Framework là một application framework và inversion of control (IoC) container cho Java platform. Được Rod Johnson tạo ra năm 2003 như một giải pháp thay thế cho J2EE (Java 2 Enterprise Edition) vốn phức tạp và nặng nề.

Core principles của Spring:
- **Inversion of Control (IoC)**: Framework quản lý lifecycle của objects
- **Dependency Injection (DI)**: Objects nhận dependencies từ bên ngoài thay vì tự tạo
- **Aspect-Oriented Programming (AOP)**: Tách cross-cutting concerns (logging, security, transaction)
- **Convention over Configuration**: Giảm thiểu boilerplate code

### 1.2 Vấn đề của Spring Framework thuần

Trước khi có Spring Boot, việc setup một Spring project đòi hỏi rất nhiều cấu hình XML hoặc Java Config:

```xml
<!-- web.xml - Servlet Configuration -->
<servlet>
    <servlet-name>dispatcher</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <load-on-startup>1</load-on-startup>
</servlet>

<!-- applicationContext.xml - Bean Configuration -->
<bean id="dataSource" class="org.apache.commons.dbcp2.BasicDataSource">
    <property name="driverClassName" value="org.postgresql.Driver"/>
    <property name="url" value="jdbc:postgresql://localhost:5432/mydb"/>
    <property name="username" value="admin"/>
    <property name="password" value="password"/>
</bean>

<bean id="entityManagerFactory"
      class="org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean">
    <property name="dataSource" ref="dataSource"/>
    <!-- ...hàng chục dòng config nữa... -->
</bean>
```

Developer phải viết hàng trăm dòng configuration trước khi bắt đầu business logic. Đây chính là vấn đề mà Spring Boot ra đời để giải quyết.

---

## 2. Spring Boot — Opinionated Framework

### 2.1 Spring Boot là gì?

Spring Boot là một project trong hệ sinh thái Spring, được thiết kế để đơn giản hóa việc tạo và chạy Spring applications. Thay vì phải cấu hình thủ công, Spring Boot cung cấp:

- **Auto-Configuration**: Tự động cấu hình dựa trên dependencies có trong classpath
- **Starter Dependencies**: Các "gói" dependency được chọn sẵn cho từng use case
- **Embedded Server**: Tomcat/Jetty/Undertow được nhúng trực tiếp, không cần deploy WAR
- **Production-ready features**: Health checks, metrics, externalized configuration

```java
// Toàn bộ code cần thiết để chạy một web application
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

### 2.2 So sánh Spring Framework vs Spring Boot

| Tiêu chí | Spring Framework | Spring Boot |
|-----------|-----------------|-------------|
| Configuration | Manual (XML/Java) | Auto-Configuration |
| Server | External (Tomcat WAR) | Embedded Server |
| Dependency | Chọn từng lib manually | Starter Dependencies |
| Setup time | Hàng giờ | Vài phút |
| Learning curve | Cao | Trung bình |
| Flexibility | Tối đa | Có opinionated defaults |

---

## 3. Lịch sử phát triển

### 3.1 Timeline

```
2003 ─── Spring Framework 1.0 (Rod Johnson)
  │       └── Giải pháp thay thế J2EE
2006 ─── Spring 2.0
  │       └── Annotation-based configuration
2009 ─── Spring 3.0
  │       └── Java-based configuration (@Configuration)
2013 ─── Spring 4.0 + WebSocket support
  │
2014 ─── Spring Boot 1.0 🎉
  │       └── Auto-configuration, embedded server
2017 ─── Spring Boot 2.0
  │       └── Spring Framework 5, Reactive (WebFlux)
2022 ─── Spring Boot 3.0
  │       └── Jakarta EE 9+, Java 17+, GraalVM Native
2024 ─── Spring Boot 3.4
  │       └── Virtual Threads GA, Structured Concurrency
2025 ─── Spring Boot 4.0 🚀
  │       └── Spring Framework 7, Java 17+ baseline,
  │           Jackson 3, JUnit Jupiter 6, Hibernate 7
2026 ─── Spring Boot 4.0.5 (Latest Stable)
          └── gRPC support, enhanced observability
```

### 3.2 Spring Boot 4.x — Những điểm mới quan trọng

Spring Boot 4.0 đánh dấu bước tiến lớn với:

- **Spring Framework 7**: Baseline Java 17, full embrace of modern Java features
- **Jakarta EE 11**: Tiếp tục migration từ javax.* sang jakarta.*
- **Hibernate ORM 7**: Cải thiện performance và query optimization
- **JUnit Jupiter 6**: Testing framework mới với nhiều features
- **Jackson 3**: JSON processing với breaking changes từ Jackson 2
- **Virtual Threads**: Native support cho Project Loom
- **GraalVM Native Image**: First-class support cho native compilation
- **gRPC Support**: Spring gRPC server và client auto-configuration
- **Enhanced Observability**: OpenTelemetry integration sâu hơn

---

## 4. Kiến trúc tổng quan Spring Boot

### 4.1 Layered Architecture

```
┌─────────────────────────────────────────┐
│           Presentation Layer            │
│  (Controllers, REST APIs, WebSocket)    │
├─────────────────────────────────────────┤
│            Service Layer                │
│  (Business Logic, Validation)           │
├─────────────────────────────────────────┤
│           Repository Layer              │
│  (Data Access, JPA, JDBC)               │
├─────────────────────────────────────────┤
│            Database Layer               │
│  (PostgreSQL, MySQL, MongoDB, Redis)    │
└─────────────────────────────────────────┘
```

### 4.2 Các module chính trong hệ sinh thái Spring

| Module | Mô tả |
|--------|--------|
| Spring Core | IoC Container, DI, AOP |
| Spring Web MVC | REST API, Controller, View Resolver |
| Spring Data | JPA, MongoDB, Redis, Elasticsearch |
| Spring Security | Authentication, Authorization, OAuth2 |
| Spring Cloud | Microservices, Config Server, Gateway |
| Spring Batch | Batch processing, ETL jobs |
| Spring Integration | Enterprise Integration Patterns |
| Spring Boot Actuator | Health checks, Metrics, Monitoring |

---

## 5. Khi nào nên dùng Spring Boot?

### 5.1 Use cases phù hợp

- **REST API / Microservices**: Đây là use case phổ biến nhất
- **Enterprise Applications**: Banking, insurance, healthcare systems
- **Event-Driven Systems**: Với Kafka, RabbitMQ integration
- **Batch Processing**: ETL jobs, data pipelines
- **Real-time Applications**: WebSocket, Server-Sent Events

### 5.2 Khi nào KHÔNG nên dùng Spring Boot?

- **Serverless Functions đơn giản**: Cold start time cao (trừ khi dùng GraalVM Native)
- **Microservices cực nhẹ**: Có thể cân nhắc Quarkus hoặc Micronaut
- **Frontend-heavy apps**: Dùng Next.js, Nuxt.js thay thế
- **Scripts/CLI tools đơn giản**: Overkill cho các task nhỏ

### 5.3 So sánh với các framework khác

| Framework | Ngôn ngữ | Startup Time | Memory | Ecosystem |
|-----------|----------|-------------|--------|-----------|
| Spring Boot | Java | ~2s (JVM), ~50ms (Native) | ~200MB | Rất lớn |
| Quarkus | Java | ~0.5s | ~100MB | Đang phát triển |
| NestJS | TypeScript | ~1s | ~80MB | Lớn |
| Django | Python | ~1s | ~50MB | Lớn |
| ASP.NET Core | C# | ~1s | ~100MB | Lớn |

---

## 6. Hello Spring Boot — Ứng dụng đầu tiên

Để có cái nhìn trực quan, đây là một REST API hoàn chỉnh chỉ với vài dòng code:

```java
@SpringBootApplication
public class HelloApplication {
    public static void main(String[] args) {
        SpringApplication.run(HelloApplication.class, args);
    }
}

@RestController
@RequestMapping("/api")
class HelloController {

    @GetMapping("/hello")
    public Map<String, String> hello() {
        return Map.of(
            "message", "Xin chào Spring Boot 4!",
            "version", "4.0.5",
            "java", System.getProperty("java.version")
        );
    }
}
```

Chạy ứng dụng và truy cập `http://localhost:8080/api/hello`:

```json
{
    "message": "Xin chào Spring Boot 4!",
    "version": "4.0.5",
    "java": "21.0.4"
}
```

Không cần cấu hình XML, không cần deploy WAR file, không cần cài đặt Tomcat riêng. Đó chính là sức mạnh của Spring Boot.

---

## Tóm tắt

- Spring Boot là framework giúp đơn giản hóa việc phát triển ứng dụng Spring với auto-configuration, embedded server và starter dependencies
- Spring Boot 4.x (2025-2026) dựa trên Spring Framework 7 với Java 17+ baseline, hỗ trợ Virtual Threads, GraalVM Native và gRPC
- Spring Boot phù hợp cho REST API, microservices, enterprise applications và event-driven systems

## Bài tập

1. Tìm hiểu thêm về Spring Framework core concepts: IoC, DI, AOP. Viết một đoạn mô tả ngắn gọn bằng lời của bạn
2. Truy cập [start.spring.io](https://start.spring.io) và khám phá các starter dependencies có sẵn. Liệt kê 10 starters mà bạn cho là quan trọng nhất
3. So sánh Spring Boot với một framework mà bạn đã biết (NestJS, Django, Express...) về ưu nhược điểm
