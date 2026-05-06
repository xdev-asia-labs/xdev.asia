---
id: 019e2a10-a102-7a01-b001-f1a2b3c4d502
title: 'レッスン 2: Quarkus プロジェクトの作成 — CLI、開発モード、開発 UI、ライブ コーディング'
slug: bai-2-tao-quarkus-project-cli-dev-mode-dev-ui-live-coding
description: >-
  Quarkus CLI と JDK 21+ のインストール、プロジェクトの作成、開発モードのライブ リロード、開発 UI
  ダッシュボード、開発サービス、継続的テスト。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: Quarkus プラットフォームとプロジェクトのセットアップ'
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: 'Quarkus マイクロサービス: 基本から運用まで'
  slug: quarkus-microservices-tu-co-ban-den-production
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 プログラミング — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: Quarkus プロジェクトの作成 — CLI、開発</tspan>
      <tspan x="60" dy="42">モード、開発UI、ライブコーディング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus マイクロサービス: 基本から運用まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Quarkus プラットフォームとプロジェクトのセットアップ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Quarkus の最大の強みの 1 つは **開発者エクスペリエンス (DX)** です。開発モードでは、コードを変更→保存→結果がすぐに実行されます。 Dev Services は、構成を行わなくても PostgreSQL、Kafka、Keycloak を自動的に開始します。 Dev UI は、拡張機能を管理するための直感的なダッシュボードを提供します。継続的テストでは、コードが変更されるたびにテストが自動的に実行されます。

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

### Docker (開発サービス用)

```bash
# Docker Desktop hoặc Podman
docker --version
# Docker version 27.x

# Quarkus hỗ trợ cả Podman
podman --version
```

## 最初のプロジェクトを作成する

### Quarkus CLI

```bash
quarkus create app com.xdev.ecommerce:product-service \
  --extension='rest-jackson,hibernate-orm-panache,jdbc-postgresql,flyway,smallrye-health,openapi' \
  --java=21 \
  --wrapper

cd product-service
```

### プロジェクトの構造

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

## 開発モード — ライブコーディング

```bash
quarkus dev
# hoặc
./mvnw quarkus:dev
```

### ホットリロードはどのように機能しますか?

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

Spring DevTools との違い:
- **JVM を再起動しないでください** - 変更されたクラスのみをリロードします
- **依存関係**の変更をサポート (再起動せずに新しい拡張機能を追加)
- **構成**の変更もすぐにリロードされます

### 開発モードコマンド

開発モードの実行中に、次のキーを押します。

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

## 開発サービス — ゼロ構成インフラストラクチャ

Dev Services は、Quarkus の **キラー** 機能です。外部サービス (データベース、メッセージ ブローカー、認証サーバー) を必要とする拡張機能を追加すると、Quarkus は Testcontainers を使用して **自動的にコンテナ** を起動します。

### 仕組み

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

### application.properties (開発モード)

```properties
# KHÔNG cần cấu hình gì cho dev mode!
# Dev Services tự start PostgreSQL, Keycloak, Kafka

# Chỉ cần config cho production
%prod.quarkus.datasource.db-kind=postgresql
%prod.quarkus.datasource.jdbc.url=jdbc:postgresql://db:5432/products
%prod.quarkus.datasource.username=${DB_USER}
%prod.quarkus.datasource.password=${DB_PASS}
```

### PostgreSQL の開発サービス

```properties
# Tùy chỉnh Dev Services (tùy chọn)
quarkus.datasource.devservices.image-name=postgres:16
quarkus.datasource.devservices.port=5433
quarkus.datasource.devservices.db-name=product_db
quarkus.datasource.devservices.volumes."/path/to/init.sql"=/docker-entrypoint-initdb.d/init.sql
```

### Keycloak の開発サービス

```properties
# Auto-start Keycloak 26.x
quarkus.oidc.devservices.realm-path=dev-realm.json
quarkus.oidc.devservices.port=8180
quarkus.oidc.devservices.roles.alice=admin,user
quarkus.oidc.devservices.roles.bob=user
```

## 開発 UI — 開発ダッシュボード

アクセス `http://localhost:8080/q/dev-ui` 開発モードが実行されている場合:

### 開発 UI 機能

|タブ |機能 |
|-----|----------|
| **拡張機能** |インストールされている拡張機能のリスト、ドキュメントへのリンク |
| **構成** |すべての構成プロパティをリアルタイムで表示/編集 |
| **エンドポイント** |すべての REST エンドポイントをリストする |
| **開発サービス** |コンテナのステータスが実行中 |
| **Swagger UI** | API を直接テストする |
| **休止状態 ORM** |エンティティの表示、HQL/SQL クエリの実行 |
| **スモールライ ヘルス** |健康状態をチェック |
| **継続的なテスト** |リアルタイムのテスト結果 |

## 継続的なテスト

Quarkus は、コードが変更されるたびにテストを **自動的に** 実行します。

```bash
# Bật Continuous Testing trong Dev Mode
# Nhấn [r] để chạy tất cả tests

# Hoặc configure trong application.properties
quarkus.test.continuous-testing=enabled
# enabled | paused | disabled
```

### テストのライフサイクル

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

## マルチモジュールプロジェクトの構造

マイクロサービス システムの場合、**マルチモジュール Maven プロジェクト** を使用します。

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

### 親 POM

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

## 演習

1. JDK 21、Quarkus CLI、Docker をローカルマシンにインストールします
2. プロジェクトの作成 `product-service` 拡張子付き: `rest-jackson`、 `hibernate-orm-panache`、 `jdbc-postgresql`、 `flyway`、 `smallrye-health`
3. 走る `quarkus dev` Dev Services が PostgreSQL コンテナを自動的に起動することを確認します。
4. 次の場所で開発 UI にアクセスします。 `/q/dev-ui` — タブを探索する
5. 新しいエンドポイントを作成し、ファイルを保存して、ライブ リロードが機能するかどうかをテストします。
6. Eコマースプラットフォーム用のマルチモジュールプロジェクト構造を作成する

## 概要

- **Quarkus CLI** を使用してプロジェクトを迅速に作成 `quarkus create app`
- **開発モード** JVM を再起動せずにライブ リロード
- **Dev Services** は PostgreSQL、Kafka、Keycloak を自動的に開始します — 設定不要
- **開発 UI** ダッシュボードは拡張機能、エンドポイント、リアルタイム構成を管理します
- **継続的テスト** は、コードが変更されると自動的にテストを実行します
- マイクロサービスシステムに適したマルチモジュールプロジェクト

次の記事: Quarkus REST を使用してプロフェッショナルな RESTful API を構築する。
