---
id: 019e2a10-a102-7a01-b001-f1a2b3c4d502
title: 第 2 課：建立 Quarkus 專案 — CLI、開發模式、開發 UI 和即時編碼
slug: bai-2-tao-quarkus-project-cli-dev-mode-dev-ui-live-coding
description: 安裝 Quarkus CLI 和 JDK 21+、建立專案、開發模式即時重新載入、開發 UI 儀表板、開發服務、持續測試。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：Quarkus 平台和專案設置
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: Quarkus 微服務：從基礎知識到生產
  slug: quarkus-microservices-tu-co-ban-den-production
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5023" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5023)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1047" cy="171" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="994" cy="218" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="941" cy="265" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="888" cy="52" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="835" cy="99" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="81" x2="1100" y2="161" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="111" x2="1050" y2="181" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="962.1769145362398,113 962.1769145362398,149 931,167 899.8230854637602,149 899.8230854637602,113.00000000000001 931,95" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 程式設計 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：建立 Quarkus 專案 — CLI、開發</tspan>
      <tspan x="60" dy="42">模式、開發 UI 和即時編碼</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus 微服務：從基礎知識到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Quarkus 平台和專案設置</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

Quarkus 的最大優勢之一是**開發者體驗 (DX)**。使用開發模式，您可以立即變更程式碼 → 儲存 → 結果。 Dev Services 無需任何設定即可自動啟動 PostgreSQL、Kafka、Keycloak。 Dev UI 為您提供了一個直覺的儀表板來管理擴充。每次程式碼變更時，持續測試都會自動執行測試。

## 環境設定

### JDK 21+

```bash
# SDKMAN (khuyến nghị)
sdk install java 21.0.4-tem

# Hoặc download từ Adoptium
# https://adoptium.net/

# Verify
java --version
# openjdk 21.0.4 2024-07-16 LTS
```

### Quarkus CLI

```bash
# macOS (Homebrew)
brew install quarkusio/tap/quarkus

# Linux / macOS (SDKMAN)
sdk install quarkus

# Linux (JBang)
curl -Ls https://sh.jbang.dev | bash -s - trust add https://repo1.maven.org/maven2/io/quarkus/quarkus-cli/
curl -Ls https://sh.jbang.dev | bash -s - app install --fresh --force quarkus@quarkusio

# Verify
quarkus version
# 3.34.x
```

### Docker（用於開發服務）

```bash
# Docker Desktop hoặc Podman
docker --version
# Docker version 27.x

# Quarkus hỗ trợ cả Podman
podman --version
```

## 建立第一個項目

### Quarkus CLI

```bash
quarkus create app com.xdev.ecommerce:product-service \
  --extension='rest-jackson,hibernate-orm-panache,jdbc-postgresql,flyway,smallrye-health,openapi' \
  --java=21 \
  --wrapper

cd product-service
```

### 專案結構

```
product-service/
├── mvnw                          # Maven wrapper
├── pom.xml                       # Dependencies & plugins
├── src/
│   ├── main/
│   │   ├── docker/               # Dockerfiles (JVM, Native, Legacy)
│   │   │   ├── Dockerfile.jvm
│   │   │   ├── Dockerfile.native
│   │   │   └── Dockerfile.native-micro
│   │   ├── java/com/xdev/ecommerce/
│   │   │   └── GreetingResource.java
│   │   └── resources/
│   │       ├── application.properties  # Configuration
│   │       └── META-INF/
│   │           └── resources/          # Static files (index.html)
│   └── test/
│       └── java/com/xdev/ecommerce/
│           ├── GreetingResourceTest.java
│           └── GreetingResourceIT.java   # Integration test (native)
└── .mvn/                         # Maven wrapper config
```

### pom.xml — Quarkus BOM

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>io.quarkus.platform</groupId>
            <artifactId>quarkus-bom</artifactId>
            <version>3.34.2</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>io.quarkus</groupId>
        <artifactId>quarkus-rest-jackson</artifactId>
    </dependency>
    <dependency>
        <groupId>io.quarkus</groupId>
        <artifactId>quarkus-hibernate-orm-panache</artifactId>
    </dependency>
    <dependency>
        <groupId>io.quarkus</groupId>
        <artifactId>quarkus-jdbc-postgresql</artifactId>
    </dependency>
    <!-- ... -->
</dependencies>
```

## 開發模式 — 即時編碼

```bash
quarkus dev
# hoặc
./mvnw quarkus:dev
```

### 熱重載如何運作？

```
┌─────────────────────────────────────────────┐
│  Developer thay đổi code → Save file        │
│              │                               │
│              ▼                               │
│  Quarkus detect file change                  │
│              │                               │
│              ▼                               │
│  Re-compile class đã thay đổi (incremental) │
│              │                               │
│              ▼                               │
│  Re-deploy application (trong cùng JVM)      │
│              │                               │
│              ▼                               │
│  Next HTTP request nhận code mới (~200ms)    │
└─────────────────────────────────────────────┘
```

與 Spring DevTools 相比的差異：
- **不要重新啟動 JVM** — 僅重新載入變更的類
- 支援更改**依賴關係**（新增擴充功能而無需重新啟動）
- **配置**變更也會立即重新載入

### 開發模式指令

當開發模式運作時，按以下鍵：

```
Press [h] for more options>

[r] - Re-run all tests
[o] - Toggle test output
[s] - Force restart
[w] - Open Dev UI in browser
[d] - Disable/Enable live reload
[h] - Show this help
[q] - Quit
```

## 開發服務 — 零設定基礎設施

開發服務是 Quarkus 的**殺手**功能。當您新增需要外部服務（資料庫、訊息代理程式、驗證伺服器）的擴充功能時，Quarkus **會自動使用 Testcontainers 啟動容器**。

### 它是如何工作的

```
┌─────────────────────────────────────────────┐
│  quarkus dev                                 │
│              │                               │
│              ▼                               │
│  Detect jdbc-postgresql extension            │
│  → No datasource URL configured             │
│  → Auto-start PostgreSQL container           │
│              │                               │
│  Detect quarkus-oidc extension               │
│  → No OIDC server configured                │
│  → Auto-start Keycloak container             │
│              │                               │
│  Detect kafka extension                      │
│  → No bootstrap servers configured           │
│  → Auto-start Kafka container (Redpanda)     │
│              │                               │
│  Inject connection URLs automatically        │
└─────────────────────────────────────────────┘
```

### application.properties（開發模式）

```properties
# KHÔNG cần cấu hình gì cho dev mode!
# Dev Services tự start PostgreSQL, Keycloak, Kafka

# Chỉ cần config cho production
%prod.quarkus.datasource.db-kind=postgresql
%prod.quarkus.datasource.jdbc.url=jdbc:postgresql://db:5432/products
%prod.quarkus.datasource.username=${DB_USER}
%prod.quarkus.datasource.password=${DB_PASS}
```

### PostgreSQL 開發服務

```properties
# Tùy chỉnh Dev Services (tùy chọn)
quarkus.datasource.devservices.image-name=postgres:16
quarkus.datasource.devservices.port=5433
quarkus.datasource.devservices.db-name=product_db
quarkus.datasource.devservices.volumes."/path/to/init.sql"=/docker-entrypoint-initdb.d/init.sql
```

### Keycloak 開發服務

```properties
# Auto-start Keycloak 26.x
quarkus.oidc.devservices.realm-path=dev-realm.json
quarkus.oidc.devservices.port=8180
quarkus.oidc.devservices.roles.alice=admin,user
quarkus.oidc.devservices.roles.bob=user
```

## 開發 UI — 開發儀表板

訪問 `http://localhost:8080/q/dev-ui` 當開發模式運作時：

### 開發使用者介面功能

|標籤 |功能|
|-----|------------|
| **擴充** |已安裝的擴充列表，文件連結 |
| **配置** |即時檢視/編輯所有配置屬性 |
| **端點** |列出所有 REST 端點 |
| **開發服務** |容器狀態運作 |
| **Swagger 使用者介面** |直接測試API |
| **休眠 ORM** |檢視實體、執行 HQL/SQL 查詢 |
| **小黑麥健康** |檢查健康狀況 |
| **持續測試** |即時測試結果 |

## 持續測試

每次程式碼變更時，Quarkus 都會**自動**執行測試：

```bash
# Bật Continuous Testing trong Dev Mode
# Nhấn [r] để chạy tất cả tests

# Hoặc configure trong application.properties
quarkus.test.continuous-testing=enabled
# enabled | paused | disabled
```

### 測試生命週期

```
┌──────────────────────────────────────────┐
│  Code change detected                     │
│          │                                │
│          ▼                                │
│  Identify affected tests                  │
│          │                                │
│          ▼                                │
│  Run ONLY affected tests (smart filter)   │
│          │                                │
│          ▼                                │
│  Display results in terminal              │
│  ✅ 5 passed | ❌ 1 failed | ⏭️ 3 skipped │
└──────────────────────────────────────────┘
```

## 多模組專案結構

對於微服務系統，我們使用**多模組Maven專案**：

```
ecommerce-platform/
├── pom.xml                     # Parent POM
├── common/                     # Shared DTOs, utils
│   ├── pom.xml
│   └── src/
├── product-service/            # Microservice 1
│   ├── pom.xml
│   └── src/
├── order-service/              # Microservice 2
│   ├── pom.xml
│   └── src/
├── payment-service/            # Microservice 3
│   ├── pom.xml
│   └── src/
├── notification-service/       # Microservice 4
│   ├── pom.xml
│   └── src/
└── docker-compose.yml          # Local environment
```

### 父 POM

```xml
<project>
    <groupId>com.xdev.ecommerce</groupId>
    <artifactId>ecommerce-platform</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>pom</packaging>

    <modules>
        <module>common</module>
        <module>product-service</module>
        <module>order-service</module>
        <module>payment-service</module>
        <module>notification-service</module>
    </modules>

    <properties>
        <quarkus.platform.version>3.34.2</quarkus.platform.version>
        <java.version>21</java.version>
        <maven.compiler.source>${java.version}</maven.compiler.source>
        <maven.compiler.target>${java.version}</maven.compiler.target>
    </properties>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.quarkus.platform</groupId>
                <artifactId>quarkus-bom</artifactId>
                <version>${quarkus.platform.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
</project>
```

## 練習

1. 在本機上安裝 JDK 21、Quarkus CLI 和 Docker
2. 建立項目 `product-service` 帶有擴展名： `rest-jackson`, `hibernate-orm-panache`, `jdbc-postgresql`, `flyway`, `smallrye-health`
3. 跑步 `quarkus dev` 並觀察 Dev Services 自動啟動 PostgreSQL 容器
4. 存取開發 UI `/q/dev-ui` — 探索選項卡
5.編寫新端點，儲存檔案並測試即時重新載入是否有效
6. 為電子商務平台創建多模組專案結構

## 總結

- **Quarkus CLI** 使用以下命令快速建立項目 `quarkus create app`
- **開發模式**即時重新加載，無需重新啟動 JVM
- **開發服務**自動啟動 PostgreSQL、Kafka、Keycloak — 零配置
- **開發 UI** 儀表板管理擴充功能、端點、即時配置
- **持續測試** 當程式碼變更時自動執行測試
- 適合微服務系統的多模組項目

下一篇文章：使用 Quarkus REST 建立專業的 RESTful API。
