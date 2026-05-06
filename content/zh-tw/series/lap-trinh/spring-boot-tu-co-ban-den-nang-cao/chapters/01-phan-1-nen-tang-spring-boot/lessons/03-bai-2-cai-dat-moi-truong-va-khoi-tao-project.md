---
id: 019c9617-fc02-7002-a002-fc0200000002
title: 第 2 課：使用 Spring Initializr 設定環境並初始化項目
slug: bai-2-cai-dat-moi-truong-va-khoi-tao-project
description: >-
  安裝 JDK 21+、IDE（IntelliJ IDEA/VS Code）、Maven/Gradle。使用 Spring Initializr
  初始化項目，建立目錄並執行第一個應用程式。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：Spring Boot 平台
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: Spring Boot 4：從基礎到高級
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-215" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-215)"/>

  <!-- Decorations -->
  <g>
    <circle cx="918" cy="284" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="736" cy="282" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="1054" cy="280" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="872" cy="278" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="690" cy="276" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="64" x2="1100" y2="144" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="94" x2="1050" y2="164" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="947.7749907475932,94.5 947.7749907475932,133.5 914,153 880.2250092524068,133.5 880.2250092524068,94.50000000000001 914,75" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 程式設計 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第2課：環境設定與初始化</tspan>
      <tspan x="60" dy="42">使用 Spring Initializr 的項目</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Spring Boot 平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在開始編碼之前，我們需要準備好開發環境。良好的設定將節省您的調試時間並顯著提高您的工作效率。本文將從 A-Z 指導安裝並創建第一個 Spring Boot 4.x 專案。

---

## 1.安裝JDK 21+

### 1.1 為什麼選擇 JDK 21？

Spring Boot 4.x 需要 Java 17 或更高版本，但建議使用 **JDK 21** (LTS) 或 **JDK 25**，因為：

- **虛擬線程**（Project Loom）：從 Java 21 開始可用
- **模式匹配**：切換表達式，記錄模式
- **密封類別**：型別安全的層次結構
- **長期支持**：支持至 2029 年以上

### 1.2 在作業系統上安裝

**macOS（使用 Homebrew + SDKMAN）：**

```bash
# Cài đặt SDKMAN
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"

# Cài đặt JDK 21
sdk install java 21.0.4-tem

# Verify
java -version
# openjdk version "21.0.4" 2024-07-16 LTS
```

**Ubuntu/Debian：**

```bash
sudo apt update
sudo apt install -y openjdk-21-jdk

# Hoặc dùng SDKMAN (khuyến nghị)
sdk install java 21.0.4-tem
```

**Windows：**

```powershell
# Dùng winget
winget install EclipseAdoptium.Temurin.21.JDK

# Hoặc download từ https://adoptium.net/
```

### 1.3 管理多個Java版本

SDKMAN 可在版本之間輕鬆切換：

```bash
# Liệt kê các phiên bản có sẵn
sdk list java

# Cài thêm JDK 25
sdk install java 25.0.1-tem

# Switch version
sdk use java 21.0.4-tem    # Cho session hiện tại
sdk default java 21.0.4-tem # Set mặc định
```

---

## 2.安裝建置工具

### 2.1 Maven 與 Gradle

|標準| Maven |搖籃 |
|------------|--------|--------|
|配置格式 | XML (pom.xml) | Groovy/Kotlin (build.gradle) |
|性能|慢一點 |更快（增量構建）|
|學習曲線|更容易 |更高 |
| Spring Boot 支援 |好 |好 |
|市佔率| 〜60% | ~40% |

在本系列中，我們將使用 **Maven** 作為主要部分，並在高級課程中提供 Gradle 範例。

### 2.2 安裝Maven

```bash
# macOS
brew install maven
# hoặc
sdk install maven

# Ubuntu
sudo apt install maven

# Verify
mvn -version
# Apache Maven 3.9.x
```

> **注意**：Spring Boot 使用 Maven Wrapper (`mvnw`），您不需要全域安裝 Maven。專案會自動下載適合的Maven版本。

---

## 3.安裝IDE

### 3.1 IntelliJ IDEA（建議）

IntelliJ IDEA 是 Java/Spring Boot 開發的最佳 IDE：

- **社群版**：免費，足以用於 Spring Boot
- **終極版**：具有 Spring Boot 特定工具、資料庫工具

```bash
# macOS
brew install --cask intellij-idea-ce

# Hoặc download từ https://www.jetbrains.com/idea/
```

所需插件：
- Spring Boot（旗艦版中可使用）
- 龍目島
- .env 檔案支持

### 3.2 VS 程式碼

如果您喜歡 VS Code，則需要安裝擴充包：

```
Extension Pack for Java (Microsoft)
Spring Boot Extension Pack (VMware/Broadcom)
```

擴充包括：
- Java 語言支援
- Java 調試器
- Spring啟動工具
- Spring Initializr Java 支持

### 3.3 安裝附加工具

```bash
# Docker (cho database, Redis...)
brew install --cask docker

# HTTPie hoặc curl cho test API
brew install httpie

# PostgreSQL client
brew install postgresql@16

# jq cho parse JSON
brew install jq
```

---

## 4. 使用 Spring Initializr 初始化項目

### 4.1 使用 Web 介面

訪問 [start.spring.io](https://start.spring.io) 和配置：

```
Project:        Maven
Language:       Java
Spring Boot:    4.0.5
Group:          com.example
Artifact:       demo
Name:           demo
Packaging:      Jar
Java:           21

Dependencies:
  ✅ Spring Web
  ✅ Spring Data JPA
  ✅ PostgreSQL Driver
  ✅ Spring Boot DevTools
  ✅ Lombok
  ✅ Validation
```

### 4.2 使用命令列

```bash
# Dùng Spring CLI
curl https://start.spring.io/starter.tgz \
  -d type=maven-project \
  -d language=java \
  -d bootVersion=4.0.5 \
  -d groupId=com.example \
  -d artifactId=spring-boot-demo \
  -d name=spring-boot-demo \
  -d packageName=com.example.demo \
  -d javaVersion=21 \
  -d dependencies=web,data-jpa,postgresql,devtools,lombok,validation \
  | tar -xzvf -
```

### 4.3 使用 IntelliJ IDEA

```
File → New → Project → Spring Boot
  → Server URL: https://start.spring.io
  → Chọn dependencies tương tự
  → Create
```

---

## 5. 專案結構

### 5.1 目錄佈局

```
spring-boot-demo/
├── mvnw                          # Maven Wrapper (Linux/Mac)
├── mvnw.cmd                      # Maven Wrapper (Windows)
├── pom.xml                       # Maven build file
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/demo/
│   │   │       └── DemoApplication.java    # Entry point
│   │   └── resources/
│   │       ├── application.properties      # Configuration
│   │       ├── static/                     # Static files
│   │       └── templates/                  # Template files
│   └── test/
│       └── java/
│           └── com/example/demo/
│               └── DemoApplicationTests.java  # Test class
└── .gitignore
```

### 5.2 pom.xml — 建置配置

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>4.0.5</version>
        <relativePath/>
    </parent>

    <groupId>com.example</groupId>
    <artifactId>spring-boot-demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>spring-boot-demo</name>
    <description>Spring Boot 4 Demo Project</description>

    <properties>
        <java.version>21</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

### 5.3 主要應用類

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

`@SpringBootApplication` 是一個元註釋，結合了 3 個註釋：
- `@SpringBootConfiguration`：將類別標記為配置來源
- `@EnableAutoConfiguration`：開啟自動配置
- `@ComponentScan`：掃描目前包及子包中的組件

---

## 6. 首先執行應用程式

### 6.1 建立一個簡單的控制器

```java
package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public Map<String, Object> hello() {
        return Map.of(
            "message", "Xin chào từ Spring Boot 4!",
            "timestamp", LocalDateTime.now(),
            "java", Runtime.version().toString()
        );
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "UP");
    }
}
```

### 6.2 設定application.properties

```properties
# Server
server.port=8080

# Application
spring.application.name=spring-boot-demo

# Tạm thời disable JPA (chưa có database)
spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
```

### 6.3 建置並運行

```bash
# Cách 1: Maven Wrapper
./mvnw spring-boot:run

# Cách 2: Build JAR rồi chạy
./mvnw clean package -DskipTests
java -jar target/spring-boot-demo-0.0.1-SNAPSHOT.jar

# Cách 3: Từ IDE
# Click Run button trên class DemoApplication
```

### 6.4 測試API

```bash
# Dùng curl
curl http://localhost:8080/api/hello | jq

# Dùng HTTPie
http GET localhost:8080/api/hello

# Output:
# {
#     "message": "Xin chào từ Spring Boot 4!",
#     "timestamp": "2026-03-30T10:30:00",
#     "java": "21.0.4+7-LTS"
# }
```

---

## 7.Spring Boot 開發工具

### 7.1 自動重啟

當程式碼變更時，DevTools 會自動重新啟動應用程式：

```properties
# application.properties
spring.devtools.restart.enabled=true
spring.devtools.restart.poll-interval=2s
spring.devtools.restart.quiet-period=1s
```

### 7.2 即時重載

DevTools 也支援瀏覽器的 LiveReload（有更改時會自動刷新網站）。

> **注意**：Spring Boot 4.1 已棄用 LiveReload 支援。建議使用前端建置工具。

### 7.3 開發與生產

從（生產）JAR 檔案運行時，DevTools 會自動停用。無需擔心 DevTools 會影響生產。

---

## 總結

- 安裝JDK 21+（建議使用SDKMAN來管理版本）、Maven和IDE（IntelliJ IDEA或VS Code）
- Spring Initializr (start.spring.io) 有助於快速初始化具有必要相依性的項目
- Spring Boot專案具有清晰的結構：src/main/java用於程式碼，src/main/resources用於配置，src/test用於測試

## 練習

1. 在您的電腦上安裝 JDK 21 和 Maven。運行 `java -version` 和 `mvn -version` 確認
2.使用Spring Initializr新建Spring Boot項目，增加依賴 `Spring Web`，運行並訪問 `http://localhost:8080`
3.嘗試透過編輯將伺服器連接埠更改為9090 `application.properties`。建立 2 個新端點： `/api/info` 返回申請資訊並 `/api/time` 返回當前時間
