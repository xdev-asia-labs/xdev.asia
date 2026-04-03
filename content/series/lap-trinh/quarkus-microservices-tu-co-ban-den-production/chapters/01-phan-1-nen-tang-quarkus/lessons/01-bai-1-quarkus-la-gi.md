---
id: 019e2a10-a101-7a01-b001-f1a2b3c4d501
title: 'Bài 1: Quarkus là gì? — Supersonic Subatomic Java cho Microservices'
slug: bai-1-quarkus-la-gi-supersonic-subatomic-java-cho-microservices
description: >-
  Tổng quan Quarkus, kiến trúc build-time optimization, so sánh Quarkus vs Spring Boot
  cho microservices, Quarkus Extensions ecosystem, demo khởi động <1 giây.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 1: Nền tảng Quarkus & Project Setup"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

## Giới thiệu

Trong thế giới Cloud Native, **tốc độ khởi động** và **mức tiêu thụ bộ nhớ** quyết định chi phí vận hành hệ thống microservices. Quarkus — "Supersonic Subatomic Java" — là framework được Red Hat phát triển từ đầu dành riêng cho Kubernetes và GraalVM, với khả năng khởi động dưới 1 giây và sử dụng chỉ ~50MB RAM ở native mode.

Series này sẽ đưa bạn từ bài "Hello World" đầu tiên đến hệ thống E-Commerce gồm 5 microservices chạy trên production.

## Quarkus là gì?

Quarkus là **Kubernetes-native Java framework** được thiết kế cho JVM (HotSpot) và GraalVM Native Image. Mục tiêu: giúp Java trở thành ngôn ngữ hàng đầu cho serverless, microservices, và container-based workloads.

### Đặc điểm nổi bật

| Đặc điểm | Mô tả |
|-----------|-------|
| **Build-time optimization** | Phân tích dependency, cấu hình, annotation processing tại thời điểm build — không phải runtime |
| **Dev Services** | Tự động start PostgreSQL, Kafka, Keycloak bằng Testcontainers khi dev/test |
| **Live Coding** | Thay đổi code → save → refresh browser, không cần restart |
| **Unified Imperative + Reactive** | Hỗ trợ cả blocking (imperative) và non-blocking (reactive) trong cùng project |
| **GraalVM Native** | Compile thành native executable — startup <50ms, RAM ~50MB |
| **Extensions Ecosystem** | 600+ extensions cho mọi nhu cầu: Hibernate, Kafka, gRPC, Keycloak... |

## Kiến trúc Build-Time Optimization

Khác với Spring Boot xử lý mọi thứ tại **runtime** (classpath scanning, reflection, proxy generation), Quarkus thực hiện phần lớn công việc tại **build time**:

```
┌─────────────────────────────────────────────────┐
│              TRADITIONAL FRAMEWORK              │
│                                                 │
│  Start JVM → Load Classes → Scan Classpath →    │
│  Process Annotations → Build Dependency Graph → │
│  Create Proxies → Ready (~5-30 giây)           │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│              QUARKUS (Build-Time)                │
│                                                 │
│  BUILD: Scan → Analyze → Generate Bytecode →    │
│         Create Static Init Code                 │
│                                                 │
│  RUN:   Load Pre-computed Metadata → Ready      │
│         (~0.5-1 giây JVM, <0.05 giây Native)   │
└─────────────────────────────────────────────────┘
```

### Tại sao build-time quan trọng cho Microservices?

1. **Scale-out nhanh** — Kubernetes cần spin-up pod mới trong vài giây
2. **Serverless/FaaS** — Cold start quyết định user experience
3. **Resource efficiency** — 100 micro-instances x 50MB << 100 x 500MB
4. **Cost optimization** — Cloud billing tính theo CPU/RAM usage

## Quarkus vs Spring Boot — So sánh thực tế

| Tiêu chí | Quarkus 3.x | Spring Boot 3.x |
|-----------|-------------|-----------------|
| **Startup (JVM)** | ~0.5-1s | ~3-8s |
| **Startup (Native)** | ~0.02-0.05s | ~0.1-0.3s (Spring AOT) |
| **RSS Memory (JVM)** | ~80-120MB | ~200-400MB |
| **RSS Memory (Native)** | ~30-60MB | ~80-150MB |
| **Dev Experience** | Dev Services, Live Coding, Dev UI | Spring DevTools, Initializr |
| **Ecosystem** | 600+ extensions | 300+ starters |
| **Community** | Đang phát triển mạnh | Rất lớn, mature |
| **Learning curve** | Trung bình (CDI, MicroProfile) | Thấp (quen thuộc) |
| **Native support** | First-class, ít issue | Cải thiện nhiều nhưng vẫn hạn chế |
| **Reactive** | Mutiny (native) + Vert.x | WebFlux (Project Reactor) |

### Khi nào chọn Quarkus?

- Xây dựng **microservices mới** (greenfield) cho Kubernetes
- Cần **startup nhanh** cho serverless/FaaS
- Muốn tối ưu **chi phí cloud** (ít RAM, ít CPU)
- Team đã quen với **Jakarta EE / MicroProfile**
- Cần **native executable** với GraalVM

### Khi nào chọn Spring Boot?

- Migrate **monolith hiện có** sang microservices
- Team đã có **kinh nghiệm Spring** sâu
- Cần **ecosystem rộng** và community support lớn
- Ứng dụng không quan trọng startup time

## CDI & MicroProfile — Nền tảng tiêu chuẩn

Quarkus dựa trên **hai tiêu chuẩn mở**, không phải proprietary API:

### CDI (Contexts and Dependency Injection)

CDI là tiêu chuẩn Jakarta EE cho dependency injection. Quarkus dùng **ArC** — CDI engine xử lý tại build time:

```java
// Injection cơ bản
@ApplicationScoped  // Singleton trong app
public class ProductService {

    @Inject
    ProductRepository productRepo;

    @Inject
    @ConfigProperty(name = "app.max-products",
        defaultValue = "1000")
    int maxProducts;

    public List<Product> listActive() {
        return productRepo.findActive();
    }
}

// CDI Scopes phổ biến
@ApplicationScoped  // 1 instance / app
@RequestScoped      // 1 instance / HTTP request
@SessionScoped      // 1 instance / session
@Dependent          // Mới mỗi lần inject
@Singleton          // Như @ApplicationScoped nhưng không proxy
```

**ArC vs Spring DI**: ArC phân tích toàn bộ dependency graph tại build time → loại bỏ unused beans → giảm memory + startup.

### MicroProfile

Bộ specs cho microservices, Quarkus implement đầy đủ:

| Spec | Quarkus Extension | Chức năng |
|------|-------------------|-----------|
| **Config** | Built-in | Type-safe configuration, multiple sources |
| **REST Client** | quarkus-rest-client | Type-safe HTTP client |
| **Fault Tolerance** | quarkus-smallrye-fault-tolerance | @Retry, @CircuitBreaker, @Fallback |
| **Health** | quarkus-smallrye-health | Liveness, Readiness, Startup probes |
| **Metrics** | quarkus-micrometer | Application & JVM metrics |
| **OpenAPI** | quarkus-smallrye-openapi | Swagger documentation |
| **JWT Auth** | quarkus-smallrye-jwt | JWT token parsing & validation |
| **OpenTelemetry** | quarkus-opentelemetry | Distributed tracing |

Lợi ích: code viết theo MicroProfile specs **portable** giữa Quarkus, Open Liberty, Payara, WildFly.

## Quarkus 3.34 — Tính năng mới nhất (2026)

| Feature | Mô tả |
|---------|-------|
| **Virtual Threads (Loom)** | `@RunOnVirtualThread` — non-blocking performance với imperative code |
| **Dev Services 2.0** | Tự động provision bất kỳ container nào, không chỉ built-in |
| **Unified CLI** | `quarkus dev`, `quarkus build`, `quarkus deploy` |
| **Improved Native** | Build time giảm ~40%, hỗ trợ nhiều library hơn |
| **WebSocket Next** | WebSocket server/client API mới, annotation-driven |
| **Langchain4j** | AI/LLM integration native |
| **Hibernate ORM 7** | Jakarta Persistence 3.2, improved performance |
| **Security improvements** | OIDC multi-tenancy, fine-grained RBAC |

```java
// Virtual Threads — mới trong Quarkus 3.x
@Path("/api/v1/products")
public class ProductResource {

    @GET
    @RunOnVirtualThread  // Chạy trên virtual thread
    public List<Product> listProducts() {
        // Blocking code nhưng không block OS thread
        return Product.listAll();
    }
}
```

## Quarkus Extensions Ecosystem

Extensions là cách Quarkus tích hợp libraries. Mỗi extension được tối ưu cho build-time processing:

```bash
# Tìm extensions
quarkus extension list
quarkus extension list --search=postgres

# Thêm extension vào project
quarkus extension add quarkus-rest-jackson
quarkus extension add quarkus-hibernate-orm-panache
quarkus extension add quarkus-jdbc-postgresql
quarkus extension add quarkus-oidc
quarkus extension add quarkus-smallrye-reactive-messaging-kafka
```

### Extensions chính trong series này

| Extension | Chức năng |
|-----------|-----------|
| `quarkus-rest-jackson` | REST API với JSON serialization |
| `quarkus-hibernate-orm-panache` | ORM đơn giản hóa (Active Record / Repository) |
| `quarkus-jdbc-postgresql` | JDBC driver cho PostgreSQL |
| `quarkus-flyway` | Database schema migration |
| `quarkus-oidc` | OpenID Connect / Keycloak integration |
| `quarkus-smallrye-reactive-messaging-kafka` | Apache Kafka messaging |
| `quarkus-grpc` | gRPC server/client |
| `quarkus-smallrye-fault-tolerance` | Circuit Breaker, Retry, Fallback |
| `quarkus-opentelemetry` | Distributed tracing |
| `quarkus-micrometer-registry-prometheus` | Metrics với Prometheus |
| `quarkus-smallrye-health` | Health checks |
| `quarkus-redis-client` | Redis caching |
| `quarkus-kubernetes` | Auto-generate K8s manifests |
| `quarkus-container-image-jib` | Build container image |

## Demo: Hello Quarkus — Khởi động đầu tiên

```bash
# Cài đặt Quarkus CLI (cần Java 17+)
# macOS
brew install quarkusio/tap/quarkus

# Linux (SDKMAN)
sdk install quarkus

# Tạo project
quarkus create app com.xdev:hello-quarkus \
  --extension='rest-jackson' \
  --java=21

cd hello-quarkus

# Chạy Dev Mode
quarkus dev
```

Kết quả:

```
__  ____  __  _____   ___  __ ____  ______
 --/ __ \/ / / / _ | / _ \/ //_/ / / / __/
 -/ /_/ / /_/ / __ |/ , _/ ,< / /_/ /\ \
--\___\_\____/_/ |_/_/|_/_/|_|\____/___/
2026-04-03 10:00:00,123 INFO  [io.quarkus] (Quarkus Main Thread)
  hello-quarkus 1.0.0-SNAPSHOT on JVM (powered by Quarkus 3.34.x)
  started in 0.876s. Listening on: http://localhost:8080

Tests paused
Press [h] for more options>
```

**0.876 giây** — so với 5-10 giây của Spring Boot tương đương.

### Hello REST Endpoint

```java
package com.xdev;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/hello")
public class GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello from Quarkus!";
    }
}
```

```bash
curl http://localhost:8080/hello
# Hello from Quarkus!
```

## Kiến trúc hệ thống E-Commerce (Preview)

Trong series này, chúng ta sẽ xây dựng:

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│   Browser /  │────▶│  API Gateway │────▶│  Keycloak    │
│   Mobile App │     │  (Nginx)     │     │  (Auth)      │
└─────────────┘     └──────┬───────┘     └──────────────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
   ┌──────────┐    ┌──────────┐    ┌──────────┐
   │ Product  │    │  Order   │    │ Payment  │
   │ Service  │    │ Service  │    │ Service  │
   │          │    │          │    │          │
   │ Quarkus  │    │ Quarkus  │    │ Quarkus  │
   │ REST+gRPC│    │ REST     │    │ REST     │
   └────┬─────┘    └────┬─────┘    └────┬─────┘
        │               │               │
        ▼               ▼               ▼
   ┌──────────┐    ┌──────────┐    ┌──────────┐
   │PostgreSQL│    │PostgreSQL│    │PostgreSQL│
   │(Products)│    │(Orders)  │    │(Payments)│
   └──────────┘    └──────────┘    └──────────┘
                        │
                   ┌────┴────┐
                   │  Kafka  │
                   │ (Events)│
                   └────┬────┘
                        │
                        ▼
                ┌──────────────┐
                │ Notification │
                │   Service    │
                │  (Quarkus)   │
                └──────────────┘
```

**5 Services:**
1. **Product Service** — Quản lý sản phẩm, danh mục, inventory
2. **Order Service** — Xử lý đơn hàng, state machine
3. **Payment Service** — Thanh toán, transaction log
4. **Notification Service** — Email/SMS notifications
5. **User Service (Keycloak)** — Identity & Access Management

## Bài tập

1. Cài đặt JDK 21+ và Quarkus CLI trên máy local
2. Tạo một project Quarkus với extension `rest-jackson`
3. Viết endpoint `GET /api/info` trả về JSON `{"framework": "Quarkus", "version": "3.34"}` 
4. So sánh thời gian startup giữa Quarkus và một Spring Boot project tương đương
5. Thử inject `@ConfigProperty` và thay đổi giá trị trong `application.properties` — quan sát live reload
6. Liệt kê tất cả extensions có sẵn: `quarkus extension list --search=rest` — chọn 3 extensions bạn muốn tìm hiểu

## Key Concepts cần nhớ

```
┌─────────────────────────────────────────────────────────┐
│  Quarkus Mental Model                                   │
│                                                         │
│  ┌──────────────┐    ┌──────────────┐                   │
│  │  Build Time  │───▶│   Runtime    │                   │
│  │              │    │              │                   │
│  │ • Classpath  │    │ • Load pre-  │                   │
│  │   scanning   │    │   computed   │                   │
│  │ • Annotation │    │   metadata   │                   │
│  │   processing │    │ • Execute    │                   │
│  │ • Bytecode   │    │   static     │                   │
│  │   generation │    │   init       │                   │
│  │ • Dead code  │    │ • Start HTTP │                   │
│  │   removal    │    │   server     │                   │
│  │              │    │              │                   │
│  │  (slow, once)│    │  (fast!)     │                   │
│  └──────────────┘    └──────────────┘                   │
│                                                         │
│  Jakarta EE Standards     MicroProfile Standards        │
│  ┌─────────────────┐     ┌─────────────────────┐       │
│  │ • CDI (ArC)     │     │ • Config             │       │
│  │ • Jakarta REST  │     │ • REST Client         │       │
│  │ • Persistence   │     │ • Fault Tolerance     │       │
│  │ • Bean Validation│    │ • Health / Metrics    │       │
│  │ • Security      │     │ • OpenAPI / JWT       │       │
│  └─────────────────┘     └─────────────────────┘       │
└─────────────────────────────────────────────────────────┘
```

## Tổng kết

- Quarkus là Java framework thiết kế riêng cho **Cloud Native & Kubernetes**
- **Build-time optimization** giúp startup <1 giây, RAM thấp
- **Dev Services** tự động provision infrastructure trong development
- So với Spring Boot: Quarkus **nhanh hơn**, **nhẹ hơn**, nhưng Spring Boot có **ecosystem lớn hơn**
- Series này build hệ thống **E-Commerce Platform** thực tế với 5 microservices

Bài tiếp theo: Tạo Quarkus Project — CLI, Dev Mode, Dev UI & Live Coding.
