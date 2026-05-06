---
id: 019e2a10-a101-7a01-b001-f1a2b3c4d501
title: 'レッスン 1: クオークスとは何ですか? — マイクロサービス向けの超音速サブアトミック Java'
slug: bai-1-quarkus-la-gi-supersonic-subatomic-java-cho-microservices
description: >-
  Quarkus の概要、ビルド時最適化アーキテクチャ、マイクロサービスの Quarkus と Spring Boot の比較、Quarkus
  Extensions エコシステム、1 秒未満の起動デモ。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 0
section_title: 'パート 1: Quarkus プラットフォームとプロジェクトのセットアップ'
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: 'Quarkus マイクロサービス: 基本から運用まで'
  slug: quarkus-microservices-tu-co-ban-den-production
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 プログラミング — レッスン 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: クオークスとは何ですか? — スーパーソニック</tspan>
      <tspan x="60" dy="42">マイクロサービス用のサブアトミック Java</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus マイクロサービス: 基本から運用まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Quarkus プラットフォームとプロジェクトのセットアップ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

クラウド ネイティブの世界では、**ブート速度** と **メモリ消費量** によってマイクロサービス システムの実行コストが決まります。 Quarkus (「Supersonic Subatomic Java」) は、Kubernetes と GraalVM に特化して Red Hat によってゼロから開発されたフレームワークで、1 秒未満で起動し、ネイティブ モードで最大 50MB の RAM のみを使用する機能を備えています。

このシリーズでは、最初の「Hello World」記事から、本番環境で実行されている 5 つのマイクロサービスで構成される電子商取引システムまでを説明します。

## クォーカスとは何ですか?

Quarkus は、JVM (HotSpot) および GraalVM ネイティブ イメージ用に設計された **Kubernetes ネイティブ Java フレームワーク**です。目標は、Java がサーバーレス、マイクロサービス、コンテナベースのワークロードの主要な言語になるよう支援することです。

### 優れた機能

|特長 |説明 |
|----------|----------|
| **ビルド時の最適化** |依存関係の分析、構成、注釈処理は実行時ではなくビルド時に行われます。
| **開発サービス** |開発/テスト時に Testcontainers を使用して PostgreSQL、Kafka、Keycloak を自動的に起動する |
| **ライブコーディング** |コードを変更→保存→ブラウザを更新、再起動する必要はありません |
| **命令型と事後型の統合** |同じプロジェクト内でブロッキング (命令的) と非ブロッキング (リアクティブ) の両方をサポート |
| **GraalVM ネイティブ** |ネイティブ実行可能ファイルにコンパイル — 起動 <50ms, RAM ~50MB |
| **拡張機能エコシステム** |あらゆるニーズに対応する 600 以上の拡張機能: Hibernate、Kafka、gRPC、Keycloak... |

## ビルド時の最適化アーキテクチャ

**実行時** (クラスパスのスキャン、リフレクション、プロキシ生成) ですべてを処理する Spring Boot とは異なり、Quarkus はほとんどの作業を **ビルド時** に実行します。

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

### マイクロサービスにとってビルド時間が重要なのはなぜですか?

1. **高速スケールアウト** — Kubernetes は新しいポッドを数秒でスピンアップする必要があります
2. **サーバーレス/FaaS** — コールド スタートがユーザー エクスペリエンスを決定します
3. **Resource efficiency** — 100 micro-instances x 50MB << 100 x 500MB
4. **コストの最適化** — CPU/RAM の使用量に基づいて計算されるクラウドの請求額

## Quarkus と Spring Boot — 現実的な比較

|基準 |クォーカス 3.x |スプリングブート 3.x |
|-----------|-------------|-----------------|
| **Startup (JVM)** | ~0.5-1s | ~3-8s |
| **Startup (Native)** | ~0.02-0.05s | ~0.1-0.3s (Spring AOT) |
| **RSS Memory (JVM)** | ~80-120MB | ~200-400MB |
| **RSS Memory (Native)** | ~30-60MB | ~80-150MB |
| **Dev Experience** | Dev Services, Live Coding, Dev UI | Spring DevTools, Initializr |
| **Ecosystem** | 600+ extensions | 300+ starters |
| **コミュニティ** |強くなる |非常に大きく、成熟した |
| **学習曲線** |平均 (CDI、マイクロプロファイル) |低 (おなじみ) |
| **ネイティブ サポート** |一流、問題数は少ない |かなり改善されましたが、まだ限界があります |
| **Reactive** | Mutiny (native) + Vert.x | WebFlux (Project Reactor) |

### Quarkus を選択するのはどのような場合ですか?

- Kubernetes 用の **新しいマイクロサービス** (グリーンフィールド) を構築する
- サーバーレス/FaaS には **素早い起動**が必要
- **クラウド コスト**を最適化したい (RAM の削減、CPU の削減)
- チームは **Jakarta EE / MicroProfile** に精通しています
- GraalVM を使用した **ネイティブ実行可能ファイル** が必要です

### Spring Boot を選択するのはどのような場合ですか?

- **既存のモノリス**をマイクロサービスに移行する
- チームは深い**春の経験**を持っています
- 大規模な**エコシステム**と大規模なコミュニティのサポートが必要です
- アプリケーションの起動時間は重要ではありません

## CDI と MicroProfile — 標準プラットフォーム

Quarkus は、独自の API ではなく、**2 つのオープン スタンダード**に基づいています。

### CDI (Contexts and Dependency Injection)

CDI は、依存関係注入のための Jakarta EE 標準です。 Quarkus は **ArC** — CDI エンジンを使用してビルド時に処理します。

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

// 一般的な CDI スコープ
@ApplicationScoped // 1 インスタンス / アプリ
@RequestScoped // 1 インスタンス / HTTP リクエスト
@SessionScoped // 1 インスタンス / セッション
@Dependent // 各インジェクションを新規作成
@Singleton // @ApplicationScoped と似ていますが、プロキシはありません
```

**ArC と Spring DI**: ArC はビルド時に依存関係グラフ全体を分析し、未使用の Bean を削除し、メモリと起動を削減します。

### MicroProfile

Quarkus によって完全に実装されたマイクロサービスの仕様セット:

|スペック | Quarkus 拡張機能 |機能 |
|------|-------------------|-----------|
| **Config** | Built-in | Type-safe configuration, multiple sources |
| **REST Client** | quarkus-rest-client | Type-safe HTTP client |
| **Fault Tolerance** | quarkus-smallrye-fault-tolerance | @Retry, @CircuitBreaker, @Fallback |
| **Health** | quarkus-smallrye-health | Liveness, Readiness, Startup probes |
| **Metrics** | quarkus-micrometer | Application & JVM metrics |
| **OpenAPI** | quarkus-smallrye-openapi | Swagger documentation |
| **JWT Auth** | quarkus-smallrye-jwt | JWT token parsing & validation |
| **OpenTelemetry** | quarkus-opentelemetry | Distributed tracing |

利点: MicroProfile 仕様に従って記述されたコードは、Quarkus、Open Liberty、Payara、WildFly 間で **移植可能** です。

## Quarkus 3.34 — 最新機能 (2026)

|特長 |説明 |
|---------|-------|
| **Virtual Threads (Loom)** | `@RunOnVirtualThread` — 命令型コードによるノンブロッキングのパフォーマンス |
| **開発サービス 2.0** |組み込みコンテナだけでなく、あらゆるコンテナを自動的にプロビジョニングします。
| **Unified CLI** | `quarkus dev`, `quarkus build`, `quarkus deploy` |
| **改善されたネイティブ** |ビルド時間が最大 40% 短縮され、より多くのライブラリがサポートされる |
| **WebSocket Next** |新しい、アノテーション主導の WebSocket サーバー/クライアント API |
| **Langchain4j** | AI/LLM integration native |
| **Hibernate ORM 7** | Jakarta Persistence 3.2, improved performance |
| **Security improvements** | OIDC multi-tenancy, fine-grained RBAC |

```ジャワ
// 仮想スレッド — Quarkus 3.x の新機能
@Path("/api/v1/products")
パブリック クラス ProductResource {

    @GET
    @RunOnVirtualThread // 仮想スレッドで実行
    パブリックリスト<Product> listProducts() {
        // コードはブロックしますが、OS スレッドはブロックしません
        Product.listAll() を返します。
    }
}
```

## Quarkus Extensions Ecosystem

拡張機能は、Quarkus がライブラリを統合する方法です。各拡張機能はビルド時の処理用に最適化されています。

```バッシュ
# 拡張機能を検索
quarkus 拡張機能のリスト
quarkus 拡張機能リスト --search=postgres

# プロジェクトに拡張機能を追加する
quarkus 拡張機能で quarkus-rest-jackson を追加
quarkus 拡張機能で quarkus-hibernate-orm-panache を追加
quarkus 拡張機能 quarkus-jdbc-postgresql を追加
quarkus 拡張機能で quarkus-oidc を追加
quarkus 拡張機能 quarkus-smallrye-reactive-messaging-kafka を追加
```

### このシリーズの主な拡張機能

|拡張子 |機能 |
|-----------|-----------|
| `quarkus-rest-jackson` | JSON シリアル化を使用した REST API |
| `quarkus-hibernate-orm-panache` |簡素化された ORM (アクティブ レコード / リポジトリ) |
| `quarkus-jdbc-postgresql` | JDBC driver cho PostgreSQL |
| `quarkus-flyway` | Database schema migration |
| `quarkus-oidc` | OpenID Connect / Keycloak integration |
| `quarkus-smallrye-reactive-messaging-kafka` | Apache Kafka messaging |
| `quarkus-grpc` | gRPC server/client |
| `quarkus-smallrye-fault-tolerance` | Circuit Breaker, Retry, Fallback |
| `quarkus-opentelemetry` | Distributed tracing |
| `quarkus-micrometer-registry-prometheus` | Prometheus によるメトリクス |
| `quarkus-smallrye-health` | Health checks |
| `quarkus-redis-client` | Redis caching |
| `quarkus-kubernetes` | Auto-generate K8s manifests |
| `quarkus-container-image-jib` | Build container image |

## デモ: こんにちは Quarkus — 最初のスタート

```バッシュ
# Quarkus CLI をインストールします (Java 17 以降が必要)
# macOS
brew install quarkusio/tap/quarkus

# Linux (SDKMAN)
SDK インストール quarkus

# プロジェクトを作成する
quarkus アプリを作成します com.xdev:hello-quarkus \
  --extension='レスト-ジャクソン' \
  --java=21

cd hello-quarkus

# 開発モードを実行する
クォーカス開発者
```

結果：

```
＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
 --/ __ \/ / / / _ | / _ \/ //_/ / / / __/
 -/ /_/ / /_/ / __ |/ 、 _/ 、< / /_/ /\ \
--\___\_\____/_/ |_/_/|_/_/|_|\____/___/
2026-04-03 10:00:00,123 INFO  [io.quarkus] (Quarkus Main Thread)
  hello-quarkus 1.0.0-SNAPSHOT on JVM (powered by Quarkus 3.34.x)
  started in 0.876s. Listening on: http://localhost:8080

Tests paused
Press [h] for more options>
```

**0.876 秒** — 同等の Spring Boot の場合は 5 ～ 10 秒です。

### Hello REST Endpoint

```ジャワ
パッケージcom.xdev;

インポートjakarta.ws.rs.GET;
インポートjakarta.ws.rs.パス;
インポートjakarta.ws.rs.Produces;
インポートjakarta.ws.rs.core.MediaType;

@Path("/hello")
パブリック クラス GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        「Quarkus からこんにちは!」を返します。
    }
}
```

```バッシュ
カールする http://localhost:8080/hello
#クォーカスからこんにちは！
```

## 電子商取引システム アーキテクチャ (プレビュー)

このシリーズでは、次のものを構築します。

```
┌─────────┐ ┌─────────┐ ┌─────────┐
│ ブラウザ / │────▶│ API ゲートウェイ │────▶│ Keycloak │
│ モバイルアプリ │ │ (Nginx) │ │ (認証) │
━━━━━━━━━━━━━━━━━━━━━━━┘ ━━━━━━┬───────┘
                           │
          ┌───────┼───────┐
          │ │ │
          ▼ ▼ ▼
   ┌─────┐ ┌─────┐ ┌─────┐
   │ 商品 │ │ ご注文 │ │ お支払い │
   │ サービス │ │ サービス │ │ サービス │
   │ │ │ │ │ │
   │ クォーカス │ │ クォーカス │ │ クォーカス │
   │ REST+gRPC│ │ REST │ │ REST │
   ━━━┬─────┘ └────┬──────┘ └────┬──────┘
        │ │ │
        ▼ ▼ ▼
   ┌─────┐ ┌─────┐ ┌─────┐
   │PostgreSQL│ │PostgreSQL│ │PostgreSQL│
   │(商品)│ │(注文) │ │(支払い)│
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┘
                        │
                   ┌────┴────┐
                   │ カフカ │
                   │（イベント）│
                   ━━━┬────┘
                        │
                        ▼
                ┌─────────┐
                │ お知らせ │
                │ サービス │
                │ (クォーカス) │
                ━─────────┘
```

**5 Services:**
1. **製品サービス** — 製品、カテゴリ、在庫の管理
2. **注文サービス** — 注文処理、ステートマシン
3. **決済サービス** — 支払い、取引ログ
4. **Notification Service** — Email/SMS notifications
5. **User Service (Keycloak)** — Identity & Access Management

＃＃ エクササイズ

1. JDK 21+とQuarkus CLIをローカルマシンにインストールします。
2. 拡張子を使用して Quarkus プロジェクトを作成します `rest-jackson`
3. エンドポイントの書き込み `GET /api/info` JSONを返します `{"framework": "Quarkus", "version": "3.34"}` 
4. Quarkus と同等の Spring Boot プロジェクトの起動時間を比較する
5. 注入してみる `@ConfigProperty` の値を変更します `application.properties` — ライブリロードを観察する
6. 利用可能なすべての拡張機能をリストします。 `quarkus extension list --search=rest` — 知りたい拡張機能を 3 つ選択してください

## 覚えておくべき重要な概念

```
┌─────────────────────────────┐
│ クォーカスのメンタルモデル │
│ │
│ ┌─────────┐ ┌─────────┐ │
│ │ ビルド時間 │───▶│ 実行時間 │ │
│ │ │ │ │ │
│ │ • クラスパス │ │ • ロード前 │ │
│ │ スキャン │ │ 計算 │ │
│ │ • アノテーション │ │ メタデータ │ │
│ │ 処理 │ │ • 実行 │ │
│ │ • バイトコード │ │ 静的 │ │
│ │ 世代 │ │ 初期化 │ │
│ │ • デッドコード │ │ • HTTP の開始 │ │
│ │ 削除 │ │ サーバー │ │
│ │ │ │ │ │
│ │ (ゆっくり、一度) │ │ (速い!) │ │
│ ━━━━━━━┘ ━━━━━━━┘ │
│ │
│ ジャカルタ EE 標準 MicroProfile 標準 │
│ ┌─────────┐ ┌───────────┐ │
│ │ • CDI (ArC) │ │ • 設定 │ │
│ │ • ジャカルタ REST │ │ • REST クライアント │ │
│ │ • 永続性 │ │ • フォールトトレランス │ │
│ │ • Bean 検証│ │ • ヘルス / メトリクス │ │
│ │ • セキュリティ │ │ • OpenAPI / JWT │ │
│ ━━━━━━━━┘ ━━━━━━━━━┘ │
━━━━━━━━━━━━━━━━━━━━━━━━┘
```

## 概要

- Quarkus は **クラウド ネイティブと Kubernetes** 向けに特別に設計された Java フレームワークです
- **ビルド時の最適化**により、起動が 1 秒未満、RAM が少ない場合に役立ちます
- **Dev Services** は、開発中にインフラストラクチャを自動的にプロビジョニングします
- Spring Boot との比較: Quarkus は **高速**、**軽量**ですが、Spring Boot の方がより大規模な **エコシステム** を持っています
- このシリーズでは、5 つのマイクロサービスを備えた実用的な **E コマース プラットフォーム** システムを構築します

次の記事: Quarkus プロジェクトの作成 — CLI、開発モード、開発 UI、ライブ コーディング。
