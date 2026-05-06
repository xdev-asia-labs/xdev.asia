---
id: 019c9617-fc01-7001-a001-fc0100000001
title: 第 1 課：什麼是 Spring Boot？ — 歷史、建築與春天生態
slug: bai-1-spring-boot-la-gi
description: >-
  Spring 框架和 Spring Boot 概述。從Spring 1.0到Spring Boot 4.x的發展歷史。分層架構、主要模組以及何時使用
  Spring Boot。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 第 1 部分：Spring Boot 平台
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: Spring Boot 4：從基礎到高級
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 程式設計 — 第 0 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 1 課：什麼是 Spring Boot？ — 歷史，螞蟻</tspan>
      <tspan x="60" dy="42">架構和 Spring 生態系統</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Spring Boot 平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

Spring Boot 是 Java 生態系統中最受歡迎的用於建立後端應用程式的框架。從新創公司到 Netflix、阿里巴巴和 Google 等大公司，都使用 Spring Boot 作為其生產系統。

在第一課中，我們將了解Spring Boot是什麼、它的發展歷史、整體架構以及為什麼它成為Java後端開發的首選。

---

## 1. Spring 框架－一切的基礎

### 1.1 什麼是Spring框架？

Spring Framework 是 Java 平台的應用程式框架與控制反轉 (IoC) 容器。由 Rod Johnson 於 2003 年創建，作為複雜而笨重的 J2EE（Java 2 企業版）的替代方案。

Spring的核心原則：
- **控制反轉 (IoC)**：管理物件生命週期的框架
- **依賴注入（DI）**：物件從外部接收依賴項，而不是自行創建它們
- **面向方面的程式設計（AOP）**：分離橫切關注點（日誌記錄、安全性、事務）
- **約定優於配置**：最小化樣板程式碼

### 1.2 純Spring框架的問題

在 Spring Boot 之前，設定 Spring 專案需要大量的 XML 或 Java Config 配置：

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

開發人員在開始業務邏輯之前必須編寫數百行配置。這就是 Spring Boot 的誕生就是為了解決的問題。

---

## 2. Spring Boot－自以為是的框架

### 2.1 什麼是Spring Boot？

Spring Boot 是 Spring 生態系統中的一個項目，旨在簡化 Spring 應用程式的建立和運作。 Spring Boot 提供了以下功能，而不是手動設定：

- **自動配置**：根據類別路徑中的依賴關係自動配置
- **入門依賴項**：為每個用例預先選擇的依賴項“包”
- **嵌入式伺服器**：直接嵌入Tomcat/Jetty/Undertow，無需部署WAR
- **生產就緒功能**：運作狀況檢查、指標、外部化配置

```java
// Toàn bộ code cần thiết để chạy một web application
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

### 2.2 比較 Spring 框架與 Spring Boot

|標準| Spring框架|春季啟動|
|------------|----------|----------|
|設定|手冊（XML/Java）|自動設定|
|伺服器|外部（Tomcat WAR）|嵌入式伺服器|
|依賴關係 |手動選擇每個庫 |入門依賴項 |
|設定時間|每小時 |幾分鐘 |
|學習曲線|曹 |平均 |
|彈性 |最大|有固執己見的預設值|

---

## 3. 發展歷程

### 3.1 時間軸

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

### 3.2 Spring Boot 4.x — 重要的新點

Spring Boot 4.0 標誌著向前邁出了一大步：

- **Spring Framework 7**：基線 Java 17，全面擁抱現代 Java 功能
- **Jakarta EE 11**：繼續從 javax.* 遷移到 jakarta.*
- **Hibernate ORM 7**：改進的效能和查詢最佳化
- **JUnit Jupiter 6**：具有許多功能的新測試框架
- **Jackson 3**：JSON 處理，對 Jackson 2 進行了重大更改
- **虛擬線程**：對 Project Loom 的本機支持
- **GraalVM Native Image**：本機編譯的一流支持
- **gRPC 支援**：Spring gRPC 伺服器和客戶端自動配置
- **增強的可觀測性**：更深入的 OpenTelemetry 集成

---

## 4. Spring Boot 概述架構

### 4.1 分層架構

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

### 4.2 Spring生態系主要模組

|模組 |描述 |
|--------|--------|
|彈簧芯| IoC 容器、DI、AOP |
| Spring Web MVC | Spring Web MVC REST API、控制器、視圖解析器 |
|春季資料| JPA、MongoDB、Redis、Elasticsearch |
|春季安全|身份驗證、授權、OAuth2 |
|春雲|微服務、設定伺服器、網關 |
|春季批次 |批次、ETL 作業 |
|彈簧整合|企業整合模式|
|彈簧啟動執行器|健康檢查、指標、監控 |

---

## 5.什麼時候該使用Spring Boot？

### 5.1 適當的用例

- **REST API /微服務**：這是最常見的用例
- **企業應用**：銀行、保險、醫療保健系統
- **事件驅動系統**：與 Kafka、RabbitMQ 集成
- **批次**：ETL 作業、資料管道
- **即時應用程式**：WebSocket、伺服器發送的事件

### 5.2 什麼時候不應該使用 Spring Boot？

- **簡單的無伺服器功能**：冷啟動時間長（除非使用 GraalVM Native）
- **極輕量級微服務**：考慮 Quarkus 或 Micronaut
- **前端重度應用程式**：使用 Next.js、Nuxt.js 代替
- **簡單的腳本/CLI 工具**：對於小任務來說太過分了

### 5.3 與其他框架的比較

|框架|語言 |啟動時間 |記憶體|生態系統|
|------------|----------|-------------|--------|------------|
| 春季啟動|爪哇 | 〜2 秒（JVM），〜50 毫秒（本機）| 〜200MB |巨大 |
|誇庫斯 |爪哇 | 〜0.5秒| 〜100MB |開發中 |
| NestJS |打字稿 | 〜1秒| 〜80MB |大|
|姜戈 |蟒蛇 | 〜1秒| 〜50MB |大|
| ASP.NET 核心 | C# | 〜1秒| 〜100MB |大|

---

## 6.Hello Spring Boot — 第一個應用程式

為了直觀地看到，這裡有一個完整的 REST API，只有幾行程式碼：

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

運行應用程式並訪問 `http://localhost:8080/api/hello`：

```json
{
    "message": "Xin chào Spring Boot 4!",
    "version": "4.0.5",
    "java": "21.0.4"
}
```

無需配置XML，無需部署WAR文件，無需單獨安裝Tomcat。這就是 Spring Boot 的力量。

---

## 總結

- Spring Boot 是一個透過自動設定、嵌入式伺服器和啟動器相依性簡化 Spring 應用程式開發的框架
- Spring Boot 4.x (2025-2026) 基於 Spring Framework 7，具有 Java 17+ 基線，支援虛擬線程、GraalVM Native 和 gRPC
- Spring Boot 適用於 REST API、微服務、企業應用程式和事件驅動系統

## 練習

1. 詳細了解Spring框架核心概念：IoC、DI、AOP。用自己的話寫一個簡短的描述
2. 訪問 [start.spring.io](https://start.spring.io) 並探索可用的入門依賴項。列出您認為最重要的 10 場首發
3. 將 Spring Boot 與您已經了解的框架（NestJS、Django、Express...）進行優缺點比較
