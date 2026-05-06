---
id: 019e2a10-a101-7a01-b001-f1a2b3c4d501
title: 第一課：什麼是 Quarkus？ — 用於微服務的 Supersonic Subatomic Java
slug: bai-1-quarkus-la-gi-supersonic-subatomic-java-cho-microservices
description: Quarkus 概述、建置時最佳化架構、Quarkus 與 Spring Boot 微服務比較、Quarkus 擴充生態系統、<1 秒啟動示範。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 0
section_title: 第 1 部分：Quarkus 平台和專案設置
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: Quarkus 微服務：從基礎知識到生產
  slug: quarkus-microservices-tu-co-ban-den-production
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7638" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7638)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1007" cy="111" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="914" cy="138" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="821" cy="165" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="728" cy="192" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="635" cy="219" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="161" x2="1100" y2="241" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="191" x2="1050" y2="261" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1042.1769145362398,193 1042.1769145362398,229 1011,247 979.8230854637602,229 979.8230854637602,193 1011,175" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 程式設計 — 第 0 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第一課：什麼是 Quarkus？ — 超音速</tspan>
      <tspan x="60" dy="42">微服務的亞原子 Java</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus 微服務：從基礎知識到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Quarkus 平台和專案設置</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在雲端原生世界中，**啟動速度**和**記憶體消耗**決定了運行微服務系統的成本。 Quarkus——「Supersonic Subatomic Java」——是紅帽專門為 Kubernetes 和 GraalVM 從頭開始開發的框架，能夠在 1 秒內啟動，並且在本機模式下僅使用約 50MB 的 RAM。

本系列將帶您從第一篇「Hello World」文章開始，了解一個由 5 個在生產中運作的微服務組成的電子商務系統。

## 什麼是誇庫斯？

Quarkus 是一個 **Kubernetes 原生 Java 框架**，專為 JVM (HotSpot) 和 GraalVM Native Image 設計。目標：幫助 Java 成為無伺服器、微服務和基於容器的工作負載的領先語言。

### 突出特點

|特點|描述 |
|----------|------|
| **建置時最佳化** |在建置時而不是執行時進行依賴性分析、配置、註解處理 |
| **開發服務** |開發/測試時自動啟動 PostgreSQL、Kafka、Keycloak 和 Testcontainers |
| **即時編碼** |更改程式碼→儲存→刷新瀏覽器，無需重新啟動|
| **統一命令式+反應式** |在同一項目中支援阻塞（命令式）和非阻塞（反應式）|
| **GraalVM Native** |編譯為本機執行檔－啟動 <50ms, RAM ~50MB |
| **擴展生態系** | 600 多個擴充滿足各種需求：Hibernate、Kafka、gRPC、Keycloak... |

## 建置時優化架構

與 Spring Boot 在 **運行時** 處理所有事情（類路徑掃描、反射、代理生成）不同，Quarkus 在 **構建時** 完成大部分工作：

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

### 為什麼建置時間對微服務很重要？

1. **快速橫向擴充** — Kubernetes 需要在幾秒鐘內啟動新的 Pod
2. **Serverless/FaaS**－冷啟動決定使用者體驗
3. **Resource efficiency** — 100 micro-instances x 50MB << 100 x 500MB
4. **成本優化** — 根據CPU/RAM使用情況計算雲端計費

## Quarkus 與 Spring Boot — 現實比較

|標準|夸克斯 3.x | Spring Boot 3.x |
|-----------|-------------|-----------------|
| **Startup (JVM)** | ~0.5-1s | ~3-8s |
| **Startup (Native)** | ~0.02-0.05s | ~0.1-0.3s (Spring AOT) |
| **RSS Memory (JVM)** | ~80-120MB | ~200-400MB |
| **RSS Memory (Native)** | ~30-60MB | ~80-150MB |
| **Dev Experience** | Dev Services, Live Coding, Dev UI | Spring DevTools, Initializr |
| **Ecosystem** | 600+ extensions | 300+ starters |
| **社​​群** |成長壯大 |非常大，成熟|
| **學習曲線** |平均（CDI、MicroProfile）|低（熟悉）|
| **本機支援** |一流，問題少 |已有很大改進，但仍然有限 |
| **Reactive** | Mutiny (native) + Vert.x | WebFlux (Project Reactor) |

### 什麼時候選擇 Quarkus？

- 為 Kubernetes 建構**新的微服務**（綠地）
- 無伺服器/FaaS 需要**快速啟動**
- 想要最佳化**雲端成本**（更少的 RAM、更少的 CPU）
- 團隊熟悉 **Jakarta EE / MicroProfile**
- 需要 GraalVM 的**本機可執行檔**

### 什麼時候選擇Spring Boot？

- 將**現有的整體**遷移到微服務
- 團隊擁有深厚的**Spring經驗**
- 需要大型**生態系統**和大型社區支持
- 應用程式啟動時間並不重要

## CDI 和 MicroProfile — 標準平台

Quarkus 基於**兩個開放標準**，而不是專有 API：

### CDI (Contexts and Dependency Injection)

CDI 是依賴注入的 Jakarta EE 標準。 Quarkus 使用 **ArC** — CDI 引擎在建置時進行處理：

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

    public List<Product> 列表活動（）{
        返回productRepo.findActive();
    }
}

// 流行的 CDI 範圍
@ApplicationScoped // 1 個實例/應用程式
@RequestScoped // 1 個實例/HTTP 請求
@SessionScoped // 1 個實例/會話
@Dependent // 每次注入都是新的
@Singleton // 類似 @ApplicationScoped 但沒有代理
```

**ArC 與 Spring DI**：ArC 在建置時分析整個依賴關係圖 → 刪除未使用的 bean → 減少記憶體 + 啟動。

### MicroProfile

微服務規範集，由 Quarkus 完全實作：

|規格|誇庫斯擴充 |功能|
|------|-------------------|-----------|
| **Config** | Built-in | Type-safe configuration, multiple sources |
| **REST Client** | quarkus-rest-client | Type-safe HTTP client |
| **Fault Tolerance** | quarkus-smallrye-fault-tolerance | @Retry, @CircuitBreaker, @Fallback |
| **Health** | quarkus-smallrye-health | Liveness, Readiness, Startup probes |
| **Metrics** | quarkus-micrometer | Application & JVM metrics |
| **OpenAPI** | quarkus-smallrye-openapi | Swagger documentation |
| **JWT Auth** | quarkus-smallrye-jwt | JWT token parsing & validation |
| **OpenTelemetry** | quarkus-opentelemetry | Distributed tracing |

優點：根據 MicroProfile 規範編寫的程式碼在 Quarkus、Open Liberty、Payara、WildFly 之間**可移植**。

## Quarkus 3.34 — 最新功能 (2026)

|特點|描述 |
|---------|-------|
| **Virtual Threads (Loom)** | `@RunOnVirtualThread` — 命令式程式碼的非阻塞效能 |
| **開發服務2.0** |自動配置任何容器，而不僅僅是內建容器 |
| **Unified CLI** | `quarkus dev`, `quarkus build`, `quarkus deploy` |
| **改進的原生** |建置時間減少約 40%，支援更多函式庫 |
| **WebSocket 下一個** |新的、註解驅動的 WebSocket 伺服器/客戶端 API |
| **Langchain4j** | AI/LLM integration native |
| **Hibernate ORM 7** | Jakarta Persistence 3.2, improved performance |
| **Security improvements** | OIDC multi-tenancy, fine-grained RBAC |

```爪哇
// 虛擬執行緒－Quarkus 3.x 中的新增功能
@Path(“/api/v1/產品”)
公共類產品資源{

    @GET
    @RunOnVirtualThread // 在虛擬執行緒上運行
    公共列表<Product> 列表產品() {
        // 阻塞程式碼但不阻塞作業系統線程
        返回 Product.listAll();
    }
}
```

## Quarkus Extensions Ecosystem

擴充是 Quarkus 整合庫的方式。每個擴充功能都針對建置時處理進行了最佳化：

```巴什
# 尋找擴充名
quarkus 擴充列表
quarkus 擴充列表 --search=postgres

# 為專案新增擴展
quarkus 擴充功能加入 quarkus-rest-jackson
quarkus 擴充功能加入 quarkus-hibernate-orm-panache
quarkus 擴充功能加入 quarkus-jdbc-postgresql
quarkus 擴充功能加入 quarkus-oidc
quarkus 擴充加入 quarkus-smallrye-reactive-messaging-kafka
```

### 本系列的主要擴展

|擴充|功能|
|-----------|-----------|
| `quarkus-rest-jackson` | REST API with JSON serialization |
| `quarkus-hibernate-orm-panache` |簡化的 ORM（活動記錄/儲存庫）|
| `quarkus-jdbc-postgresql` | JDBC driver cho PostgreSQL |
| `quarkus-flyway` | Database schema migration |
| `quarkus-oidc` | OpenID Connect / Keycloak integration |
| `quarkus-smallrye-reactive-messaging-kafka` | Apache Kafka messaging |
| `quarkus-grpc` | gRPC server/client |
| `quarkus-smallrye-fault-tolerance` | Circuit Breaker, Retry, Fallback |
| `quarkus-opentelemetry` | Distributed tracing |
| `quarkus-micrometer-registry-prometheus` | Prometheus 的指標 |
| `quarkus-smallrye-health` | Health checks |
| `quarkus-redis-client` | Redis caching |
| `quarkus-kubernetes` | Auto-generate K8s manifests |
| `quarkus-container-image-jib` | Build container image |

## 示範：Hello Quarkus — 首次啟動

```巴什
# 安裝 Quarkus CLI（需要 Java 17+）
# macOS
沖泡安裝quarkusio/tap/quarkus

# Linux (SDKMAN)
sdk安裝quarkus

# 建立專案
quarkus 建立應用程式 com.xdev:hello-quarkus \
  --extension='rest-jackson' \
  --java=21

cd 你好誇庫斯

# 運行開發模式
誇庫斯開發者
```

結果：

```
__ ____ __ _____ ___ __ ____ ______
 --/ __ \/ / / / _ | / _ \/ //_/ / / / __/
 -/ /_/ / /_/ / __ |/ , _/ ,< / /_/ /\ \
--\___\_\____/_/ |_/_/|_/_/|_|\____/___/
2026-04-03 10:00:00,123 INFO  [io.quarkus] (Quarkus Main Thread)
  hello-quarkus 1.0.0-SNAPSHOT on JVM (powered by Quarkus 3.34.x)
  started in 0.876s. Listening on: http://localhost:8080

Tests paused
Press [h] for more options>
```

**0.876 秒** — 相較之下，同等 Spring Boot 則需要 5-10 秒。

### Hello REST Endpoint

```爪哇
包 com.xdev；

導入 jakarta.ws.rs.GET；
導入 jakarta.ws.rs.Path;
導入 jakarta.ws.rs.Produces；
導入 jakarta.ws.rs.core.MediaType;

@路徑（“/你好”）
公共類別 GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    公共字串你好（）{
        return「來自 Quarkus 的你好！」；
    }
}
```

```巴什
捲曲 http://localhost:8080/hello
# 來自誇庫斯的問候！
```

## 電子商務系統架構（預覽版）

在本系列中，我們將建構：

```
┌──────────────┐ ┐──────────────┐ ┐────────────┐
│ 瀏覽器 / │────▶│ API 閘道 │────▶│ Keycloak │
│ 行動應用程式 │ │ (Nginx) │ │ (Auth) │
└──────────────┘ └──────┬────────┘ └──────────────┘
                           │
          ┌────────────────┼────────────────┐
          │ │ │
          ▼ ▼ ▼
   ┌──────────┐ ┌──────────┐ ┌──────────┐
   │ 商品 │ │ 訂單 │ │ 付款 │
   │ 服務 │ │ 服務 │ │ 服務 │
   │ │ │ │ │ │
   │ 誇庫斯 │ │ 誇庫斯 │ │ 誇庫斯 │
   │ REST+gRPC│ │ REST │ │ REST │
   └────┬──────┘ └────┬──────┘ └────┬──────┘
        │ │ │
        ▼ ▼ ▼
   ┌──────────┐ ┌──────────┐ ┌──────────┐
   │PostgreSQL│ │PostgreSQL│ │PostgreSQL│
   │(商品)│ │(訂單) │ │(付款)│
   └──────────┘ └──────────┘ └──────────┘
                        │
                   ┌────┴────┐
                   │ 卡夫卡 │
                   │ (活動)│
                   └────┬────┘
                        │
                        ▼
                ┌────────────┐
                │ 通知 │
                │ 服務 │
                │ (誇庫斯) │
                └────────────┘
```

**5 Services:**
1. **產品服務** — 管理產品、類別、庫存
2. **訂單服務**——訂單處理、狀態機
3. **支付服務**——付款、交易日誌
4. **Notification Service** — Email/SMS notifications
5. **User Service (Keycloak)** — Identity & Access Management

＃＃ 鍛煉

1. 在本機上安裝 JDK 21+ 和 Quarkus CLI
2.創建Quarkus項目，擴展名為 `rest-jackson`
3. 寫入端點 `GET /api/info` 返回 JSON `{"framework": "Quarkus", "version": "3.34"}` 
4. 比較 Quarkus 與同等 Spring Boot 專案之間的啟動時間
5. 嘗試注入 `@ConfigProperty` 並改變其中的值 `application.properties` — 觀察即時重新加載
6. 列出所有可用的擴充： `quarkus extension list --search=rest` — 選擇 3 個您想了解的擴充

## 需要記住的關鍵概念

```
┌──────────────────────────────────────────────────────────┐
│ Quarkus 心智模型 │
│ │
│ ┌────────────┐ ┐──────────────┐ │
│ │ 建置時間 │────▶│ 運作時間 │ │
│ │ │ │ │ │
│ │ • 類別路徑 │ │ • 載入預先載入 │ │
│ │ 扫描 │ │ 计算 │ │
│ │ • 注释 │ │ 元数据 │ │
│ │ 处理 │ │ • 执行 │ │
│ │ • 字节码 │ │ 静态 │ │
│ │ 生成 │ │ 初始化 │ │
│ │ • 死程式碼 │ │ • 啟動 HTTP │ │
│ │ 移除 │ │ 服务器 │ │
│ │ │ │ │ │
│ │ （慢速，一次）│ │ （快！） │ │
│ └──────────────┘ └──────────────┘ │
│ │
│ 雅加达 EE 标准 MicroProfile 标准 │
│ ┌──────────────┐ ┌──────────────────────┐ │
│ │ • CDI (ArC) │ │ • 配置 │ │
│ │ • 雅加達REST │ │ • REST 用戶端 │ │
│ │ • 持久性 │ │ • 容错 │ │
│ │ • Bean 驗證│ │ • 運作狀況/指標 │ │
│ │ • 安全性 │ │ • OpenAPI / JWT │ │
│ └──────────────────┘ └────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

## 總結

- Quarkus 是專為**雲端原生和 Kubernetes** 設計的 Java 框架
- **建置時最佳化**有助於啟動 <1 秒，低 RAM
- **開發服務** 在開發過程中自動設定基礎設施
- 與 Spring Boot 相比：Quarkus **更快**、**更輕**，但 Spring Boot 有更大的**生態系統**
- 本系列建構了一個實用的**電子商務平台**系統，包含5個微服務

下一篇文章：建立 Quarkus 專案 — CLI、開發模式、開發 UI 和即時編碼。
