---
id: 019c9617-fc01-7001-a001-fc0100000001
title: 'Lesson 1: What is Spring Boot? — History, Architecture and Spring Ecology'
slug: bai-1-spring-boot-la-gi
description: >-
  Overview of Spring Framework and Spring Boot. Development history from Spring
  1.0 to Spring Boot 4.x. Layered architecture, main modules and when to use
  Spring Boot.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 'Part 1: Spring Boot Platform'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: From Basics to Advanced'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 Programming — Lesson 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: What is Spring Boot? — History, Ant</tspan>
      <tspan x="60" dy="42">Architecture and Spring Ecosystem</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Spring Boot Platform</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Spring Boot is the most popular framework in the Java ecosystem for building backend applications. From startups to large corporations like Netflix, Alibaba, and Google, all use Spring Boot for their production systems.

In this first lesson, we will learn what Spring Boot is, its development history, overall architecture, and why it has become the top choice for Java backend development.

---

## 1. Spring Framework — The foundation of everything

### 1.1 What is Spring Framework?

Spring Framework is an application framework and inversion of control (IoC) container for the Java platform. Created by Rod Johnson in 2003 as an alternative to the complex and heavy J2EE (Java 2 Enterprise Edition).

Core principles of Spring:
- **Inversion of Control (IoC)**: Framework for managing the lifecycle of objects
- **Dependency Injection (DI)**: Objects receive dependencies from the outside instead of creating them themselves
- **Aspect-Oriented Programming (AOP)**: Separating cross-cutting concerns (logging, security, transactions)
- **Convention over Configuration**: Minimize boilerplate code

### 1.2 The problem of pure Spring Framework

Before Spring Boot, setting up a Spring project required a lot of XML or Java Config configuration:

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

Developers have to write hundreds of lines of configuration before starting business logic. This is the problem that Spring Boot was born to solve.

---

## 2. Spring Boot — Opinionated Framework

### 2.1 What is Spring Boot?

Spring Boot is a project in the Spring ecosystem, designed to simplify creating and running Spring applications. Instead of manual configuration, Spring Boot provides:

- **Auto-Configuration**: Automatically configure based on dependencies in the classpath
- **Starter Dependencies**: Pre-selected dependency "packages" for each use case
- **Embedded Server**: Tomcat/Jetty/Undertow is embedded directly, no need to deploy WAR
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

### 2.2 Compare Spring Framework vs Spring Boot

| Criteria | Spring Framework | Spring Boot |
|-----------|-----------|-------------|
| Configuration | Manual (XML/Java) | Auto-Configuration |
| Server | External (Tomcat WAR) | Embedded Server |
| Dependencies | Select each lib manually | Starter Dependencies |
| Setup time | Hourly | Few minutes |
| Learning curve | Cao | Average |
| Flexibility | Maximum | There are opinionated defaults |

---

## 3. Development history

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

### 3.2 Spring Boot 4.x — Important new points

Spring Boot 4.0 marks a big step forward with:

- **Spring Framework 7**: Baseline Java 17, full embrace of modern Java features
- **Jakarta EE 11**: Continue migration from javax.* to jakarta.*
- **Hibernate ORM 7**: Improved performance and query optimization
- **JUnit Jupiter 6**: New Testing framework with many features
- **Jackson 3**: JSON processing with breaking changes from Jackson 2
- **Virtual Threads**: Native support for Project Loom
- **GraalVM Native Image**: First-class support for native compilation
- **gRPC Support**: Spring gRPC server and client auto-configuration
- **Enhanced Observability**: Deeper OpenTelemetry integration

---

## 4. Spring Boot overview architecture

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

### 4.2 Main modules in the Spring ecosystem

| Modules | Description |
|--------|--------|
| Spring Core | IoC Containers, DI, AOP |
| Spring Web MVC | REST API, Controller, View Resolver |
| Spring Data | JPA, MongoDB, Redis, Elasticsearch |
| Spring Security | Authentication, Authorization, OAuth2 |
| Spring Cloud | Microservices, Config Server, Gateway |
| Spring Batch | Batch processing, ETL jobs |
| Spring Integration | Enterprise Integration Patterns |
| Spring Boot Actuator | Health checks, Metrics, Monitoring |

---

## 5. When should you use Spring Boot?

### 5.1 Appropriate use cases

- **REST API / Microservices**: This is the most common use case
- **Enterprise Applications**: Banking, insurance, healthcare systems
- **Event-Driven Systems**: With Kafka, RabbitMQ integration
- **Batch Processing**: ETL jobs, data pipelines
- **Real-time Applications**: WebSocket, Server-Sent Events

### 5.2 When should you NOT use Spring Boot?

- **Simple Serverless Functions**: High cold start time (unless using GraalVM Native)
- **Extremely lightweight microservices**: Consider Quarkus or Micronaut
- **Frontend-heavy apps**: Use Next.js, Nuxt.js instead
- **Simple scripts/CLI tools**: Overkill for small tasks

### 5.3 Comparison with other frameworks

| Frameworks | Language | Startup Time | Memory | Ecosystem |
|-----------|----------|-------------|--------|-----------|
| Spring Boot | Java | ~2s (JVM), ~50ms (Native) | ~200MB | Huge |
| Quarkus | Java | ~0.5s | ~100MB | In development |
| NestJS | TypeScript | ~1s | ~80MB | Large |
| Django | Python | ~1s | ~50MB | Large |
| ASP.NET Core | C# | ~1s | ~100MB | Large |

---

## 6. Hello Spring Boot — First application

For a visual look, here is a complete REST API with just a few lines of code:

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

Run the application and access `http://localhost:8080/api/hello`:

```json
{
    "message": "Xin chào Spring Boot 4!",
    "version": "4.0.5",
    "java": "21.0.4"
}
```

No need to configure XML, no need to deploy WAR file, no need to install Tomcat separately. That is the power of Spring Boot.

---

## Summary

- Spring Boot is a framework that simplifies Spring application development with auto-configuration, embedded server and starter dependencies
- Spring Boot 4.x (2025-2026) based on Spring Framework 7 with Java 17+ baseline, supporting Virtual Threads, GraalVM Native and gRPC
- Spring Boot is suitable for REST API, microservices, enterprise applications and event-driven systems

## Exercises

1. Learn more about Spring Framework core concepts: IoC, DI, AOP. Write a brief description in your own words
2. Access [start.spring.io](https://start.spring.io) and explore the available starter dependencies. List the 10 starters that you consider most important
3. Compare Spring Boot with a framework you already know (NestJS, Django, Express...) about advantages and disadvantages
