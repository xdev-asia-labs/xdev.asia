---
id: 019c9617-fc02-7002-a002-fc0200000002
title: 'レッスン 2: Spring Initializr を使用した環境のセットアップとプロジェクトの初期化'
slug: bai-2-cai-dat-moi-truong-va-khoi-tao-project
description: >-
  JDK 21+、IDE (IntelliJ IDEA/VS Code)、Maven/Gradle をインストールします。 Spring Initializr
  でプロジェクトを初期化し、ディレクトリを構築して最初のアプリケーションを実行します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: Spring Boot プラットフォーム'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: 基本から上級まで'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 プログラミング — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: 環境設定と初期化</tspan>
      <tspan x="60" dy="42">Spring Initializr を使用したプロジェクト</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Spring Boot プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

コーディングを開始する前に、開発環境を適切に準備する必要があります。適切なセットアップを行うと、何時間ものデバッグ時間が節約され、生産性が大幅に向上します。この記事では、インストールを最初から最後までガイドし、最初の Spring Boot 4.x プロジェクトを作成します。

---

## 1. JDK 21以降をインストールする

### 1.1 なぜ JDK 21 なのか?

Spring Boot 4.x には Java 17 以降が必要ですが、次の理由から **JDK 21** (LTS) または **JDK 25** が推奨されます。

- **仮想スレッド** (Project Loom): Java 21 から利用可能
- **パターン マッチング**: 式を切り替え、パターンを記録します
- **Sealed Classes**: タイプセーフな階層
- **長期サポート**: 2029 年以降までサポート

### 1.2 OS へのインストール

**macOS (Homebrew + SDKMAN を使用):**

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

### 1.3 複数の Java バージョンの管理

SDKMAN では、バージョン間の切り替えが簡単に行えます。

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

## 2. ビルドツールをインストールする

### 2.1 Maven と Gradle

|基準 |メイブン |グラドル |
|----------|----------|----------|
|構成フォーマット | XML (pom.xml) | Groovy/Kotlin (build.gradle) |
|パフォーマンス |遅い |高速化 (増分ビルド) |
|学習曲線 |より簡単 |より高い |
| Spring Boot のサポート |良い |良い |
|市場シェア | ~60% | ~40% |

このシリーズでは、主要部分では **Maven** を使用し、高度なレッスンでは Gradle の例を使用します。

### 2.2 Maven のインストール

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

> **注意**: Spring Boot は Maven ラッパーを使用します (`mvnw`)、Maven をグローバルにインストールする必要はありません。プロジェクトは、適切な Maven バージョンを自動的にダウンロードします。

---

## 3. IDE をインストールする

### 3.1 IntelliJ IDEA (推奨)

IntelliJ IDEA は、Java/Spring Boot 開発に最適な IDE です。

- **コミュニティ エディション**: 無料、Spring Boot には十分です
- **Ultimate Edition**: Spring Boot 固有のツール、データベース ツールが含まれています

```bash
# macOS
brew install --cask intellij-idea-ce

# Hoặc download từ https://www.jetbrains.com/idea/
```

必要なプラグイン:
- Spring Boot (Ultimate で利用可能)
- ロンボク島
- .env ファイルのサポート

### 3.2 VS コード

VS Code を使用したい場合は、Extension Pack をインストールする必要があります。

```
Extension Pack for Java (Microsoft)
Spring Boot Extension Pack (VMware/Broadcom)
```

拡張機能には次のものが含まれます。
- Java の言語サポート
- Java用デバッガ
- スプリングブートツール
- Spring Initializr Java サポート

### 3.3 追加ツールのインストール

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

## 4. Spring Initializr でプロジェクトを初期化する

### 4.1 Web インターフェースの使用

アクセス [start.spring.io](https://start.spring.io) および構成:

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

### 4.2 コマンドラインの使用

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

### 4.3 IntelliJ IDEA の使用

```
File → New → Project → Spring Boot
  → Server URL: https://start.spring.io
  → Chọn dependencies tương tự
  → Create
```

---

## 5. プロジェクトの構造

### 5.1 ディレクトリのレイアウト

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

### 5.2 pom.xml — ビルド構成

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

### 5.3 メインアプリケーションクラス

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

`@SpringBootApplication` は、3 つのアノテーションを組み合わせたメタアノテーションです。
- `@SpringBootConfiguration`: クラスを構成ソースとしてマークします
- `@EnableAutoConfiguration`: 自動設定をオンにする
- `@ComponentScan`: 現在のパッケージおよびサブパッケージ内のコンポーネントをスキャンします

---

## 6. 最初にアプリケーションを実行します

### 6.1 単純なコントローラーを作成する

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

### 6.2 application.properties の構成

```properties
# Server
server.port=8080

# Application
spring.application.name=spring-boot-demo

# Tạm thời disable JPA (chưa có database)
spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
```

### 6.3 ビルドと実行

```bash
# Cách 1: Maven Wrapper
./mvnw spring-boot:run

# Cách 2: Build JAR rồi chạy
./mvnw clean package -DskipTests
java -jar target/spring-boot-demo-0.0.1-SNAPSHOT.jar

# Cách 3: Từ IDE
# Click Run button trên class DemoApplication
```

### 6.4 APIのテスト

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

### 7.1 自動再起動

コードが変更されると、DevTools はアプリケーションを自動的に再起動します。

```properties
# application.properties
spring.devtools.restart.enabled=true
spring.devtools.restart.poll-interval=2s
spring.devtools.restart.quiet-period=1s
```

### 7.2 ライブリロード

DevTools はブラウザーの LiveReload もサポートしています (変更があると Web サイトが自動的に更新されます)。

> **注意**: Spring Boot 4.1 では LiveReload サポートが廃止されました。代わりにフロントエンド ビルド ツールを使用することをお勧めします。

### 7.3 開発と本番

DevTools は、(運用) JAR ファイルから実行する場合には自動的に無効になります。 DevTools が本番環境に影響を与えることを心配する必要はありません。

---

## 概要

- JDK 21+ (バージョン管理には SDKMAN の使用を推奨)、Maven、および IDE (IntelliJ IDEA または VS Code) をインストールします。
- Spring Initializr (start.spring.io) は、必要な依存関係を含むプロジェクトを迅速に初期化するのに役立ちます
- プロジェクト Spring Boot は明確な構造を持っています: コードの場合は src/main/java、構成の場合は src/main/resources、テストの場合は src/test

## 演習

1. JDK 21 と Maven をマシンにインストールします。走る `java -version` そして `mvn -version` 確認する
2. Spring Initializr を使用して新しい Spring Boot プロジェクトを作成し、依存関係を追加します `Spring Web`、実行してアクセスします `http://localhost:8080`
3. 編集してサーバーポートを9090に変更してみてください。 `application.properties`。 2 つの新しいエンドポイントを作成します。 `/api/info` アプリケーション情報を返し、 `/api/time` 現在の時刻を返します
