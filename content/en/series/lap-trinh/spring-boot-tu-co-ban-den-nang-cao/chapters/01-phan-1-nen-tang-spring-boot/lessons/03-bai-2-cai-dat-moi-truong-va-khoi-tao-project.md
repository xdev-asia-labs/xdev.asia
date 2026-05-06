---
id: 019c9617-fc02-7002-a002-fc0200000002
title: 'Lesson 2: Setting up Environment & Initializing Project with Spring Initializr'
slug: bai-2-cai-dat-moi-truong-va-khoi-tao-project
description: >-
  Install JDK 21+, IDE (IntelliJ IDEA/VS Code), Maven/Gradle. Initialize the
  project with Spring Initializr, structure the directory and run the first
  application.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 1: Spring Boot Platform'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: From Basics to Advanced'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 Programming — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 2: Environment Settings & Initialization</tspan>
      <tspan x="60" dy="42">Project with Spring Initializr</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Spring Boot Platform</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Before we start coding, we need to prepare the development environment properly. A good setup will save you hours of debugging and significantly increase your productivity. This article will guide installation from A-Z and create the first Spring Boot 4.x project.

---

## 1. Install JDK 21+

### 1.1 Why JDK 21?

Spring Boot 4.x requires Java 17 or later, but **JDK 21** (LTS) or **JDK 25** is recommended because:

- **Virtual Threads** (Project Loom): Available from Java 21
- **Pattern Matching**: Switch expressions, record patterns
- **Sealed Classes**: Type-safe hierarchies
- **Long-term Support**: Supported until 2029+

### 1.2 Installation on OSes

**macOS (with Homebrew + SDKMAN):**

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

**Ubuntu/Debian:**

```bash
sudo apt update
sudo apt install -y openjdk-21-jdk

# Hoặc dùng SDKMAN (khuyến nghị)
sdk install java 21.0.4-tem
```

**Windows:**

```powershell
# Dùng winget
winget install EclipseAdoptium.Temurin.21.JDK

# Hoặc download từ https://adoptium.net/
```

### 1.3 Managing multiple Java versions

SDKMAN allows easy switching between versions:

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

## 2. Install Build Tool

### 2.1 Maven vs Gradle

| Criteria | Maven | Gradle |
|-----------|-------|--------|
| Config format | XML (pom.xml) | Groovy/Kotlin (build.gradle) |
| Performance | Slower | Faster (incremental build) |
| Learning curve | Easier | Higher |
| Spring Boot support | Good | Good |
| Market share | ~60% | ~40% |

In this series, we will use **Maven** for the main part and have Gradle examples in the advanced lessons.

### 2.2 Install Maven

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

> **Note**: Spring Boot uses Maven Wrapper (`mvnw`), you are not required to install Maven globally. The project will automatically download the appropriate Maven version.

---

## 3. Install IDE

### 3.1 IntelliJ IDEA (Recommended)

IntelliJ IDEA is the best IDE for Java/Spring Boot development:

- **Community Edition**: Free, enough for Spring Boot
- **Ultimate Edition**: Has Spring Boot specific tools, database tools

```bash
# macOS
brew install --cask intellij-idea-ce

# Hoặc download từ https://www.jetbrains.com/idea/
```

Required plugins:
- Spring Boot (available in Ultimate)
- Lombok
- .env files support

### 3.2 VS Code

If you prefer VS Code, you need to install Extension Pack:

```
Extension Pack for Java (Microsoft)
Spring Boot Extension Pack (VMware/Broadcom)
```

Extensions include:
- Language Support for Java
- Debugger for Java
- Spring Boot Tools
- Spring Initializr Java Support

### 3.3 Install additional tools

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

## 4. Initialize Project with Spring Initializr

### 4.1 Using the Web Interface

Access [start.spring.io](https://start.spring.io) and configuration:

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

### 4.2 Using Command Line

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

### 4.3 Using IntelliJ IDEA

```
File → New → Project → Spring Boot
  → Server URL: https://start.spring.io
  → Chọn dependencies tương tự
  → Create
```

---

## 5. Project structure

### 5.1 Directory Layout

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

### 5.2 pom.xml — Build Configuration

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

### 5.3 Main Application Class

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

`@SpringBootApplication` is a meta-annotation that combines 3 annotations:
- `@SpringBootConfiguration`: Mark class as configuration source
- `@EnableAutoConfiguration`: Turn on auto-configuration
- `@ComponentScan`: Scan components in the current package and sub-packages

---

## 6. Run the application first

### 6.1 Create a simple Controller

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

### 6.2 Configuring application.properties

```properties
# Server
server.port=8080

# Application
spring.application.name=spring-boot-demo

# Tạm thời disable JPA (chưa có database)
spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
```

### 6.3 Build and run

```bash
# Cách 1: Maven Wrapper
./mvnw spring-boot:run

# Cách 2: Build JAR rồi chạy
./mvnw clean package -DskipTests
java -jar target/spring-boot-demo-0.0.1-SNAPSHOT.jar

# Cách 3: Từ IDE
# Click Run button trên class DemoApplication
```

### 6.4 Test API

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

## 7. Spring Boot DevTools

### 7.1 Automatic Restart

DevTools automatically restarts the application when code changes:

```properties
# application.properties
spring.devtools.restart.enabled=true
spring.devtools.restart.poll-interval=2s
spring.devtools.restart.quiet-period=1s
```

### 7.2 LiveReload

DevTools also supports LiveReload for the browser (automatically refreshes the website when there are changes).

> **Note**: Spring Boot 4.1 has deprecated LiveReload support. It is recommended to use frontend build tools instead.

### 7.3 Development vs Production

DevTools is automatically disabled when running from a (production) JAR file. No need to worry about DevTools affecting production.

---

## Summary

- Install JDK 21+ (recommended to use SDKMAN to manage versions), Maven, and IDE (IntelliJ IDEA or VS Code)
- Spring Initializr (start.spring.io) helps to quickly initialize projects with necessary dependencies
- Project Spring Boot has a clear structure: src/main/java for code, src/main/resources for configuration, src/test for tests

## Exercises

1. Install JDK 21 and Maven on your machine. Run `java -version` and `mvn -version` to confirm
2. Create a new Spring Boot project with Spring Initializr, add dependencies `Spring Web`, run and access `http://localhost:8080`
3. Try changing the server port to 9090 by editing `application.properties`. Create 2 new endpoints: `/api/info` Returns application information and `/api/time` returns the current time
