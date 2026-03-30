---
id: 019c9617-fc02-7002-a002-fc0200000002
title: 'Bài 2: Cài đặt Môi trường & Khởi tạo Project với Spring Initializr'
slug: bai-2-cai-dat-moi-truong-va-khoi-tao-project
description: >-
  Cài đặt JDK 21+, IDE (IntelliJ IDEA/VS Code), Maven/Gradle. Khởi tạo project
  với Spring Initializr, cấu trúc thư mục và chạy ứng dụng đầu tiên.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền tảng Spring Boot"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

## Giới thiệu

Trước khi bắt đầu code, chúng ta cần chuẩn bị môi trường phát triển đúng cách. Một setup tốt sẽ giúp bạn tiết kiệm hàng giờ debug và tăng năng suất đáng kể. Bài này sẽ hướng dẫn cài đặt từ A-Z và tạo project Spring Boot 4.x đầu tiên.

---

## 1. Cài đặt JDK 21+

### 1.1 Tại sao JDK 21?

Spring Boot 4.x yêu cầu Java 17 trở lên, nhưng khuyến nghị sử dụng **JDK 21** (LTS) hoặc **JDK 25** vì:

- **Virtual Threads** (Project Loom): Có sẵn từ Java 21
- **Pattern Matching**: Switch expressions, record patterns
- **Sealed Classes**: Type-safe hierarchies
- **Long-term Support**: Được support đến 2029+

### 1.2 Cài đặt trên các OS

**macOS (với Homebrew + SDKMAN):**

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

### 1.3 Quản lý nhiều phiên bản Java

SDKMAN cho phép dễ dàng switch giữa các phiên bản:

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

## 2. Cài đặt Build Tool

### 2.1 Maven vs Gradle

| Tiêu chí | Maven | Gradle |
|-----------|-------|--------|
| Config format | XML (pom.xml) | Groovy/Kotlin (build.gradle) |
| Performance | Chậm hơn | Nhanh hơn (incremental build) |
| Learning curve | Dễ hơn | Cao hơn |
| Spring Boot support | Tốt | Tốt |
| Market share | ~60% | ~40% |

Trong series này, chúng ta sẽ dùng **Maven** cho phần chính và có ví dụ Gradle ở các bài nâng cao.

### 2.2 Cài đặt Maven

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

> **Lưu ý**: Spring Boot sử dụng Maven Wrapper (`mvnw`), bạn không bắt buộc phải cài Maven global. Project sẽ tự tải Maven version phù hợp.

---

## 3. Cài đặt IDE

### 3.1 IntelliJ IDEA (Khuyến nghị)

IntelliJ IDEA là IDE tốt nhất cho Java/Spring Boot development:

- **Community Edition**: Miễn phí, đủ cho Spring Boot
- **Ultimate Edition**: Có Spring Boot specific tools, database tools

```bash
# macOS
brew install --cask intellij-idea-ce

# Hoặc download từ https://www.jetbrains.com/idea/
```

Plugins cần thiết:
- Spring Boot (có sẵn trong Ultimate)
- Lombok
- .env files support

### 3.2 VS Code

Nếu bạn prefer VS Code, cần cài Extension Pack:

```
Extension Pack for Java (Microsoft)
Spring Boot Extension Pack (VMware/Broadcom)
```

Extensions bao gồm:
- Language Support for Java
- Debugger for Java
- Spring Boot Tools
- Spring Initializr Java Support

### 3.3 Cài đặt công cụ bổ sung

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

## 4. Khởi tạo Project với Spring Initializr

### 4.1 Sử dụng Web Interface

Truy cập [start.spring.io](https://start.spring.io) và cấu hình:

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

### 4.2 Sử dụng Command Line

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

### 4.3 Sử dụng IntelliJ IDEA

```
File → New → Project → Spring Boot
  → Server URL: https://start.spring.io
  → Chọn dependencies tương tự
  → Create
```

---

## 5. Cấu trúc Project

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

`@SpringBootApplication` là meta-annotation kết hợp 3 annotations:
- `@SpringBootConfiguration`: Đánh dấu class là configuration source
- `@EnableAutoConfiguration`: Bật auto-configuration
- `@ComponentScan`: Scan components trong package hiện tại và sub-packages

---

## 6. Chạy ứng dụng đầu tiên

### 6.1 Tạo Controller đơn giản

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

### 6.2 Cấu hình application.properties

```properties
# Server
server.port=8080

# Application
spring.application.name=spring-boot-demo

# Tạm thời disable JPA (chưa có database)
spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
```

### 6.3 Build và chạy

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

DevTools tự động restart application khi code thay đổi:

```properties
# application.properties
spring.devtools.restart.enabled=true
spring.devtools.restart.poll-interval=2s
spring.devtools.restart.quiet-period=1s
```

### 7.2 LiveReload

DevTools cũng hỗ trợ LiveReload cho browser (tự động refresh trang web khi có thay đổi).

> **Lưu ý**: Spring Boot 4.1 đã deprecate LiveReload support. Khuyến nghị dùng frontend build tools thay thế.

### 7.3 Development vs Production

DevTools tự động bị disable khi chạy từ JAR file (production). Không cần lo lắng về việc DevTools ảnh hưởng production.

---

## Tóm tắt

- Cài đặt JDK 21+ (khuyến nghị dùng SDKMAN để quản lý versions), Maven, và IDE (IntelliJ IDEA hoặc VS Code)
- Spring Initializr (start.spring.io) giúp khởi tạo project nhanh chóng với các dependencies cần thiết
- Project Spring Boot có cấu trúc rõ ràng: src/main/java cho code, src/main/resources cho configuration, src/test cho tests

## Bài tập

1. Cài đặt JDK 21 và Maven trên máy của bạn. Chạy `java -version` và `mvn -version` để xác nhận
2. Tạo project Spring Boot mới với Spring Initializr, thêm dependency `Spring Web`, chạy và truy cập `http://localhost:8080`
3. Thử thay đổi port server sang 9090 bằng cách sửa `application.properties`. Tạo thêm 2 endpoints mới: `/api/info` trả về thông tin ứng dụng và `/api/time` trả về thời gian hiện tại
