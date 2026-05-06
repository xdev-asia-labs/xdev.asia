---
id: 019c9617-fc01-7001-a001-fc0100000001
title: 'レッスン 1: Spring Boot とは何ですか? — 歴史、建築、そして春の生態'
slug: bai-1-spring-boot-la-gi
description: >-
  Spring Framework と Spring Boot の概要。 Spring 1.0 から Spring Boot 4.x
  までの開発履歴。階層化アーキテクチャ、メインモジュール、および Spring Boot をいつ使用するか。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 'パート 1: Spring Boot プラットフォーム'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: 基本から上級まで'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4160" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4160)"/>

  <!-- Decorations -->
  <g>
    <circle cx="960" cy="30" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="30" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="30" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1040" cy="30" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="30" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="130" x2="1100" y2="210" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="160" x2="1050" y2="230" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.650635094611,167.5 1001.650635094611,192.5 980,205 958.349364905389,192.5 958.349364905389,167.5 980,155" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 プログラミング — レッスン 0</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: Spring Boot とは何ですか? — 歴史、アリ</tspan>
      <tspan x="60" dy="42">アーキテクチャと Spring エコシステム</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Spring Boot プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

Spring Boot は、バックエンド アプリケーションを構築するための Java エコシステムで最も人気のあるフレームワークです。新興企業から Netflix、Alibaba、Google などの大企業まで、すべてが実稼働システムに Spring Boot を使用しています。

この最初のレッスンでは、Spring Boot とは何か、その開発履歴、全体的なアーキテクチャ、および Spring Boot が Java バックエンド開発の最優先の選択肢となっている理由を学びます。

---

## 1. Spring フレームワーク — すべての基礎

### 1.1 Spring フレームワークとは何ですか?

Spring Framework は、Java プラットフォーム用のアプリケーション フレームワークおよび制御反転 (IoC) コンテナです。複雑で重い J2EE (Java 2 Enterprise Edition) の代替として、2003 年に Rod Johnson によって作成されました。

Spring の基本原則:
- **制御の反転 (IoC)**: オブジェクトのライフサイクルを管理するためのフレームワーク
- **依存関係の注入 (DI)**: オブジェクトは依存関係を自分で作成するのではなく、外部から受け取ります。
- **アスペクト指向プログラミング (AOP)**: 横断的な懸念事項 (ロギング、セキュリティ、トランザクション) の分離
- **設定より規約**: 定型コードを最小限に抑える

### 1.2 純粋な Spring Framework の問題

Spring Boot が登場する前は、Spring プロジェクトをセットアップするには多くの XML または Java Config 構成が必要でした。

```xml
<!-- web.xml - Servlet Configuration -->
<servlet>
    <servlet-name>dispatcher</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <load-on-startup>1</load-on-startup>
</servlet>

<!-- applicationContext.xml - Bean Configuration -->
<bean id="dataSource" class="org.apache.commons.dbcp2.BasicDataSource">
    <property name="driverClassName" value="org.postgresql.Driver"/>
    <property name="url" value="jdbc:postgresql://localhost:5432/mydb"/>
    <property name="username" value="admin"/>
    <property name="password" value="password"/>
</bean>

<bean id="entityManagerFactory"
      class="org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean">
    <property name="dataSource" ref="dataSource"/>
    <!-- ...hàng chục dòng config nữa... -->
</bean>
```

開発者は、ビジネス ロジックを開始する前に、数百行の構成を記述する必要があります。これは Spring Boot が解決するために生まれた問題です。

---

## 2. Spring Boot — 独自のフレームワーク

### 2.1 Spring Boot とは何ですか?

Spring Boot は Spring エコシステム内のプロジェクトであり、Spring アプリケーションの作成と実行を簡素化するように設計されています。手動構成の代わりに、Spring Boot は以下を提供します。

- **自動構成**: クラスパス内の依存関係に基づいて自動的に構成します。
- **スターター依存関係**: ユースケースごとに事前に選択された依存関係「パッケージ」
- **組み込みサーバー**: Tomcat/Jetty/Undertow は直接組み込まれているため、WAR を展開する必要はありません。
- **本番環境に対応した機能**: ヘルスチェック、メトリクス、外部化された構成

```java
// Toàn bộ code cần thiết để chạy một web application
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

### 2.2 Spring Framework と Spring Boot の比較

|基準 | Spring フレームワーク |スプリングブーツ |
|----------|-----------|---------------|
|構成 |マニュアル (XML/Java) |自動構成 |
|サーバー |外部 (Tomcat WAR) |組み込みサーバー |
|依存関係 |各ライブラリを手動で選択する |スターターの依存関係 |
|セットアップ時間 |毎時 |数分 |
|学習曲線 |曹操 |平均 |
|柔軟性 |最大 |独自のデフォルト設定があります |

---

##3. 開発経緯

### 3.1 タイムライン

```
2003 ─── Spring Framework 1.0 (Rod Johnson)
  │       └── Giải pháp thay thế J2EE
2006 ─── Spring 2.0
  │       └── Annotation-based configuration
2009 ─── Spring 3.0
  │       └── Java-based configuration (@Configuration)
2013 ─── Spring 4.0 + WebSocket support
  │
2014 ─── Spring Boot 1.0 🎉
  │       └── Auto-configuration, embedded server
2017 ─── Spring Boot 2.0
  │       └── Spring Framework 5, Reactive (WebFlux)
2022 ─── Spring Boot 3.0
  │       └── Jakarta EE 9+, Java 17+, GraalVM Native
2024 ─── Spring Boot 3.4
  │       └── Virtual Threads GA, Structured Concurrency
2025 ─── Spring Boot 4.0 🚀
  │       └── Spring Framework 7, Java 17+ baseline,
  │           Jackson 3, JUnit Jupiter 6, Hibernate 7
2026 ─── Spring Boot 4.0.5 (Latest Stable)
          └── gRPC support, enhanced observability
```

### 3.2 Spring Boot 4.x — 重要な新ポイント

Spring Boot 4.0 は、次の点で大きな前進を遂げています。

- **Spring Framework 7**: ベースライン Java 17、最新の Java 機能を完全に採用
- **Jakarta EE 11**: javax.* から jakarta.* への移行を継続します。
- **Hibernate ORM 7**: パフォーマンスとクエリの最適化が向上しました。
- **JUnit Jupiter 6**: 多くの機能を備えた新しいテスト フレームワーク
- **Jackson 3**: Jackson 2 からの重大な変更を伴う JSON 処理
- **仮想スレッド**: Project Loom のネイティブ サポート
- **GraalVM ネイティブ イメージ**: ネイティブ コンパイルの最上級のサポート
- **gRPC サポート**: Spring gRPC サーバーとクライアントの自動構成
- **可観測性の強化**: OpenTelemetry のより深い統合

---

## 4. Spring Boot の概要アーキテクチャ

### 4.1 階層化アーキテクチャ

```
┌─────────────────────────────────────────┐
│           Presentation Layer            │
│  (Controllers, REST APIs, WebSocket)    │
├─────────────────────────────────────────┤
│            Service Layer                │
│  (Business Logic, Validation)           │
├─────────────────────────────────────────┤
│           Repository Layer              │
│  (Data Access, JPA, JDBC)               │
├─────────────────────────────────────────┤
│            Database Layer               │
│  (PostgreSQL, MySQL, MongoDB, Redis)    │
└─────────────────────────────────────────┘
```

### 4.2 Spring エコシステムの主要モジュール

|モジュール |説明 |
|----------|----------|
|スプリングコア | IoCコンテナ、DI、AOP |
| Spring Web MVC | REST API、コントローラー、ビューリゾルバー |
|春のデータ | JPA、MongoDB、Redis、Elasticsearch |
|スプリングセキュリティ |認証、認可、OAuth2 |
|春の雲 |マイクロサービス、構成サーバー、ゲートウェイ |
|春バッチ |バッチ処理、ETL ジョブ |
|春の統合 |エンタープライズ統合パターン |
|スプリングブーツアクチュエーター |ヘルスチェック、メトリクス、モニタリング |

---

## 5. Spring Boot をいつ使用する必要がありますか?

### 5.1 適切な使用例

- **REST API / マイクロサービス**: これは最も一般的な使用例です
- **エンタープライズ アプリケーション**: 銀行、保険、医療システム
- **イベント駆動型システム**: Kafka と RabbitMQ の統合
- **バッチ処理**: ETL ジョブ、データ パイプライン
- **リアルタイム アプリケーション**: WebSocket、サーバー送信イベント

### 5.2 Spring Boot を使用すべきでないのはどのような場合ですか?

- **シンプルなサーバーレス機能**: コールド スタート時間が長い (GraalVM ネイティブを使用しない場合)
- **非常に軽量なマイクロサービス**: Quarkus または Micronaut を検討してください
- **フロントエンドを多用するアプリ**: 代わりに Next.js、Nuxt.js を使用してください
- **単純なスクリプト/CLI ツール**: 小さなタスクには過剰な作業

### 5.3 他のフレームワークとの比較

|フレームワーク |言語 |起動時間 |メモリ |エコシステム |
|----------|----------|---------------|----------|----------|
|スプリングブーツ |ジャワ | ~2s (JVM)、~50ms (ネイティブ) | ～200MB |巨大な |
|クォーカス |ジャワ | ～0.5秒 | ～100MB |開発中 |
|ネストJS |タイプスクリプト | ~1秒 | ~80MB |大 |
|ジャンゴ |パイソン | ~1秒 | ～50MB |大 |
| ASP.NETコア | C# | ~1秒 | ～100MB |大 |

---

## 6. Hello Spring Boot — 最初のアプリケーション

視覚的にわかるように、わずか数行のコードを含む完全な REST API を次に示します。

```java
@SpringBootApplication
public class HelloApplication {
    public static void main(String[] args) {
        SpringApplication.run(HelloApplication.class, args);
    }
}

@RestController
@RequestMapping("/api")
class HelloController {

    @GetMapping("/hello")
    public Map<String, String> hello() {
        return Map.of(
            "message", "Xin chào Spring Boot 4!",
            "version", "4.0.5",
            "java", System.getProperty("java.version")
        );
    }
}
```

アプリケーションを実行してアクセスする `http://localhost:8080/api/hello`:

```json
{
    "message": "Xin chào Spring Boot 4!",
    "version": "4.0.5",
    "java": "21.0.4"
}
```

XML を構成する必要も、WAR ファイルをデプロイする必要も、Tomcat を個別にインストールする必要もありません。それが Spring Boot の威力です。

---

## 概要

- Spring Boot は、自動構成、組み込みサーバー、およびスターターの依存関係により Spring アプリケーション開発を簡素化するフレームワークです
- Java 17+ ベースラインを備えた Spring Framework 7 に基づく Spring Boot 4.x (2025-2026)、仮想スレッド、GraalVM Native、gRPC をサポート
- Spring Boot は、REST API、マイクロサービス、エンタープライズ アプリケーション、イベント駆動型システムに適しています

## 演習

1. Spring Framework のコア概念である IoC、DI、AOP について詳しく学びます。自分の言葉で簡単な説明を書いてください
2. アクセス [start.spring.io](https://start.spring.io) 利用可能なスターター依存関係を調べます。あなたが最も重要だと考えるスターター 10 人を挙げてください
3. Spring Boot と既に知っているフレームワーク (NestJS、Django、Express など) の長所と短所を比較します。
