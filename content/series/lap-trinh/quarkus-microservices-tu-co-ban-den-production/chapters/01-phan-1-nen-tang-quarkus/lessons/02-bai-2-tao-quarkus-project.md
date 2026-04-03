---
id: 019e2a10-a102-7a01-b001-f1a2b3c4d502
title: 'Bài 2: Tạo Quarkus Project — CLI, Dev Mode, Dev UI & Live Coding'
slug: bai-2-tao-quarkus-project-cli-dev-mode-dev-ui-live-coding
description: >-
  Cài đặt Quarkus CLI và JDK 21+, tạo project, Dev Mode live reload,
  Dev UI dashboard, Dev Services, Continuous Testing.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền tảng Quarkus & Project Setup"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

## Giới thiệu

Một trong những điểm mạnh nhất của Quarkus là **Developer Experience (DX)**. Với Dev Mode, bạn thay đổi code → save → kết quả ngay lập tức. Dev Services tự động start PostgreSQL, Kafka, Keycloak mà không cần cấu hình gì. Dev UI cho bạn dashboard trực quan để quản lý extensions. Continuous Testing chạy test tự động mỗi khi code thay đổi.

## Cài đặt môi trường

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

### Docker (cho Dev Services)

```bash
# Docker Desktop hoặc Podman
docker --version
# Docker version 27.x

# Quarkus hỗ trợ cả Podman
podman --version
```

## Tạo Project đầu tiên

### Quarkus CLI

```bash
quarkus create app com.xdev.ecommerce:product-service \
  --extension='rest-jackson,hibernate-orm-panache,jdbc-postgresql,flyway,smallrye-health,openapi' \
  --java=21 \
  --wrapper

cd product-service
```

### Cấu trúc project

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

## Dev Mode — Live Coding

```bash
quarkus dev
# hoặc
./mvnw quarkus:dev
```

### Hot Reload hoạt động như thế nào?

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

Điểm khác biệt so với Spring DevTools:
- **Không restart JVM** — chỉ reload class đã thay đổi
- Hỗ trợ thay đổi **dependencies** (thêm extension mới mà không cần restart)
- Thay đổi **configuration** cũng được reload ngay

### Dev Mode commands

Khi Dev Mode đang chạy, nhấn các phím:

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

## Dev Services — Zero-Config Infrastructure

Dev Services là tính năng **killer** của Quarkus. Khi bạn thêm extension mà cần external service (database, message broker, auth server), Quarkus **tự động start container** bằng Testcontainers.

### Cách hoạt động

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

### application.properties (Dev Mode)

```properties
# KHÔNG cần cấu hình gì cho dev mode!
# Dev Services tự start PostgreSQL, Keycloak, Kafka

# Chỉ cần config cho production
%prod.quarkus.datasource.db-kind=postgresql
%prod.quarkus.datasource.jdbc.url=jdbc:postgresql://db:5432/products
%prod.quarkus.datasource.username=${DB_USER}
%prod.quarkus.datasource.password=${DB_PASS}
```

### Dev Services cho PostgreSQL

```properties
# Tùy chỉnh Dev Services (tùy chọn)
quarkus.datasource.devservices.image-name=postgres:16
quarkus.datasource.devservices.port=5433
quarkus.datasource.devservices.db-name=product_db
quarkus.datasource.devservices.volumes."/path/to/init.sql"=/docker-entrypoint-initdb.d/init.sql
```

### Dev Services cho Keycloak

```properties
# Auto-start Keycloak 26.x
quarkus.oidc.devservices.realm-path=dev-realm.json
quarkus.oidc.devservices.port=8180
quarkus.oidc.devservices.roles.alice=admin,user
quarkus.oidc.devservices.roles.bob=user
```

## Dev UI — Development Dashboard

Truy cập `http://localhost:8080/q/dev-ui` khi Dev Mode đang chạy:

### Các tính năng Dev UI

| Tab | Chức năng |
|-----|-----------|
| **Extensions** | Danh sách extensions đã cài, link tới docs |
| **Configuration** | Xem/sửa tất cả config properties real-time |
| **Endpoints** | Liệt kê tất cả REST endpoints |
| **Dev Services** | Trạng thái containers đang chạy |
| **Swagger UI** | Test API trực tiếp |
| **Hibernate ORM** | Xem entities, chạy HQL/SQL queries |
| **SmallRye Health** | Kiểm tra health status |
| **Continuous Testing** | Kết quả test real-time |

## Continuous Testing

Quarkus chạy test **tự động** mỗi khi code thay đổi:

```bash
# Bật Continuous Testing trong Dev Mode
# Nhấn [r] để chạy tất cả tests

# Hoặc configure trong application.properties
quarkus.test.continuous-testing=enabled
# enabled | paused | disabled
```

### Test lifecycle

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

## Cấu trúc Multi-Module Project

Cho hệ thống microservices, ta sử dụng **multi-module Maven project**:

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

### Parent POM

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

## Bài tập

1. Cài đặt JDK 21, Quarkus CLI và Docker trên máy local
2. Tạo project `product-service` với các extensions: `rest-jackson`, `hibernate-orm-panache`, `jdbc-postgresql`, `flyway`, `smallrye-health`
3. Chạy `quarkus dev` và quan sát Dev Services tự động start PostgreSQL container
4. Truy cập Dev UI tại `/q/dev-ui` — khám phá các tab
5. Viết thêm một endpoint mới, save file và kiểm tra live reload hoạt động
6. Tạo cấu trúc multi-module project cho E-Commerce Platform

## Tổng kết

- **Quarkus CLI** tạo project nhanh với `quarkus create app`
- **Dev Mode** live reload không cần restart JVM
- **Dev Services** tự động start PostgreSQL, Kafka, Keycloak — zero config
- **Dev UI** dashboard quản lý extensions, endpoints, config real-time
- **Continuous Testing** chạy test tự động khi code thay đổi
- Multi-module project phù hợp cho hệ thống microservices

Bài tiếp theo: Xây dựng RESTful API chuyên nghiệp với Quarkus REST.
