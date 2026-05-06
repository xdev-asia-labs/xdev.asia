---
id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
title: 'Spring Boot 4: 基本から上級まで'
slug: spring-boot-tu-co-ban-den-nang-cao
description: >-
  基本から上級まで Spring Boot 4.x に関する包括的なコース。REST API、Spring Data JPA、Spring
  Security、JWT、OAuth2、マイクロサービス、テスト、Docker、運用環境でのデプロイメントを使用したプロフェッショナルなバックエンド
  アプリケーションの構築を支援します。 Spring Framework 7、仮想スレッド、GraalVM ネイティブ イメージを使用して Spring
  Boot 4.0 を更新します。
featured_image: uploads/2026/03/spring-boot-banner-v2.png
level: beginner
duration_hours: 60
lesson_count: 24
price: '0.00'
is_free: true
view_count: 14
average_rating: '0.00'
review_count: 0
enrollment_count: 2
meta: null
published_at: '2025-12-08T08:37:00.000000Z'
created_at: '2026-02-25T18:38:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-facb-72da-8191-e6d44b88fb3e
  name: プログラミング
  slug: lap-trinh
tags:
  - name: Microservices
    slug: microservices
  - name: spring-boot
    slug: spring-boot
  - name: java
    slug: java
  - name: Backend
    slug: backend
  - name: rest-api
    slug: rest-api
  - name: Enterprise
    slug: enterprise
sections:
  - id: section-01
    title: 'パート 1: Spring Boot プラットフォーム'
    description: Spring アーキテクチャ、IoC コンテナ、依存関係の注入、および自動構成を理解する
    sort_order: 1
    lessons:
      - id: 019c9617-fc01-7001-a001-fc0100000001
        title: 'レッスン 1: Spring Boot とは何ですか? — 歴史、建築、そして春の生態'
        slug: bai-1-spring-boot-la-gi
        description: >-
          Spring Framework と Spring Boot の概要。 Spring 1.0 から Spring Boot 4.x
          までの開発履歴。階層化アーキテクチャ、メインモジュール、および Spring Boot をいつ使用するか。
        duration_minutes: 90
        is_free: true
        sort_order: 0
        video_url: null
      - id: 019c9617-fc02-7002-a002-fc0200000002
        title: 'レッスン 2: Spring Initializr を使用した環境のセットアップとプロジェクトの初期化'
        slug: bai-2-cai-dat-moi-truong-va-khoi-tao-project
        description: >-
          JDK 21+、IDE (IntelliJ IDEA/VS Code)、Maven/Gradle をインストールします。 Spring
          Initializr でプロジェクトを初期化し、ディレクトリを構築して最初のアプリケーションを実行します。
        duration_minutes: 120
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019c9617-fc03-7003-a003-fc0300000003
        title: 'レッスン 3: 自動構成、Spring IoC コンテナーおよびアプリケーションのプロパティ'
        slug: bai-3-auto-configuration-ioc-container
        description: >-
          自動構成メカニズムはどのように機能しますか? IoC コンテナ、ApplicationContext、BeanFactory。
          application.properties/yaml と Profile を使用してアプリケーションを構成します。
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019c9617-fc04-7004-a004-fc0400000004
        title: 'レッスン 4: 依存性の注入と Bean のライフサイクル'
        slug: bai-4-dependency-injection-bean-lifecycle
        description: >-
          コンストラクターインジェクション、セッターインジェクション、フィールドインジェクション。 Bean スコープ
          (シングルトン、プロトタイプ、リクエスト、セッション)。 Bean ライフサイクル
          コールバック、@PostConstruct、@PreDestroy、@Conditional アノテーション。
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
  - id: section-02
    title: 'パート 2: REST API の構築'
    description: Spring Web MVC を使用してプロフェッショナルな RESTful API を設計および実装する
    sort_order: 2
    lessons:
      - id: 019c9617-fc05-7005-a005-fc0500000005
        title: 'レッスン 5: REST API の基礎 — @RestController とリクエスト マッピング'
        slug: bai-5-rest-api-foundations
        description: >-
          HTTP
          メソッド、@RestController、@RequestMapping、@GetMapping、@PostMapping。パス変数、クエリパラメータ、リクエストヘッダー。応答エンティティとステータス
          コード。
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
      - id: 019c9617-fc06-7006-a006-fc0600000006
        title: 'レッスン 6: DTO パターン、検証、およびグローバル例外処理'
        slug: bai-6-dto-validation-exception-handling
        description: >-
          レコード クラスを使用したデータ転送オブジェクト パターン。 Bean 検証 (@Valid、@NotNull、@Size、カスタム
          バリデータ)。 @ControllerAdvice、@ExceptionHandler、問題の詳細 RFC 9457。
        duration_minutes: 150
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019c9617-fc07-7007-a007-fc0700000007
        title: 'レッスン 7: Spring Data JPA — エンティティ、リポジトリ、クエリ メソッド'
        slug: bai-7-spring-data-jpa-entity-repository
        description: >-
          JPA エンティティ マッピング、@Entity、@Id、@GeneratedValue。 JpaRepository
          インターフェイス、派生クエリ メソッド、JPQL/ネイティブ SQL を使用した @Query。
          @CreatedDate、@LastModifiedDate を使用して監査します。
        duration_minutes: 150
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019c9617-fc08-7008-a008-fc0800000008
        title: 'レッスン 8: エンティティの関係、ページネーション、仕様'
        slug: bai-8-quan-he-entity-pagination-specification
        description: >-
          @OneToMany、@ManyToOne、@ManyToMany、@OneToOne。フェッチ戦略 (LAZY 対 EAGER)、N+1
          問題。ページング可能、ソート、スライス。動的クエリの JPA 仕様。
        duration_minutes: 150
        is_free: true
        sort_order: 7
        video_url: null
  - id: section-03
    title: 'パート 3: アプリケーションのセキュリティ'
    description: Spring Security、JWT、OAuth2、およびセキュリティのベスト プラクティス
    sort_order: 3
    lessons:
      - id: 019c9617-fc09-7009-a009-fc0900000009
        title: 'レッスン 9: Spring セキュリティの基礎 — 認証と認可'
        slug: bai-9-spring-security-fundamentals
        description: >-
          SecurityFilterChain、HttpSecurityの構成。
          UserDetailsS​​ervice、PasswordEncoder、ログインフォーム、HTTP Basic。
          @Secured、@PreAuthorize を使用したロールベースのアクセス制御 (RBAC)。
        duration_minutes: 150
        is_free: true
        sort_order: 8
        video_url: null
      - id: 019c9617-fc10-7010-a010-fc1000000010
        title: 'レッスン 10: JWT 認証 — REST API のステートレス セキュリティ'
        slug: bai-10-jwt-authentication
        description: >-
          JSON Web Token (JWT) internals. Generate JWT with jjwt library.カスタム
          JwtAuthenticationFilter、リフレッシュ トークン フロー。 Stateless session management
          for REST API.
        duration_minutes: 150
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019c9617-fc11-7011-a011-fc1100000011
        title: 'レッスン 11: OAuth2 と OpenID Connect — ソーシャル ログインとリソース サーバー'
        slug: bai-11-oauth2-openid-connect
        description: >-
          OAuth2 認証コード フロー、クライアント資格情報。 Google/GitHub ログイン用の Spring Security
          OAuth2 クライアント。 JWT 検証を備えたリソース サーバー。 Spring認可サーバー。
        duration_minutes: 150
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019c9617-fc12-7012-a012-fc1200000012
        title: 'レッスン 12: メソッド セキュリティ、CORS、CSRF、セキュリティのベスト プラクティス'
        slug: bai-12-method-security-cors-csrf
        description: >-
          @PreAuthorize、@PostAuthorize、@Secured SpEL 式。 CORS 構成、SPA の CSRF
          保護。レート制限、セキュリティ ヘッダー、OWASP Top 10 防止。
        duration_minutes: 120
        is_free: true
        sort_order: 11
        video_url: null
  - id: section-04
    title: 'パート 4: 高度な機能'
    description: トランザクション、キャッシュ、非同期、WebSocket、および API ドキュメント
    sort_order: 4
    lessons:
      - id: 019c9617-fc13-7013-a013-fc1300000013
        title: 'レッスン 13: トランザクション管理とキャッシング'
        slug: bai-13-transaction-management-caching
        description: >-
          @トランザクションの伝播、分離レベル、ロールバック ルール。 @Cacheable、@CacheEvict、@CachePut を使用した
          Spring Cache の抽象化。 Redis キャッシュの統合。
        duration_minutes: 150
        is_free: true
        sort_order: 12
        video_url: null
      - id: 019c9617-fc14-7014-a014-fc1400000014
        title: 'レッスン 14: 非同期処理、スケジュール、イベント'
        slug: bai-14-async-scheduling-events
        description: >-
          CompletableFuture との @Async、仮想スレッド (Java 21+)。 @スケジュールされた cron ジョブ。
          ApplicationEvent、@EventListener、@TransactionalEventListener。春のモジュリスイベント。
        duration_minutes: 150
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019c9617-fc15-7015-a015-fc1500000015
        title: 'レッスン 15: ファイルのアップロード/ダウンロード、電子メール、WebSocket'
        slug: bai-15-file-upload-email-websocket
        description: >-
          MultipartFile アップロード、ファイル ストレージ サービス。 Thymeleaf テンプレートを使用した Spring
          Mail。 STOMP プロトコルを使用した WebSocket、SockJS フォールバック、リアルタイム通知。
        duration_minutes: 120
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019c9617-fc16-7016-a016-fc1600000016
        title: 'レッスン 16: API ドキュメント — OpenAPI 3、Swagger UI、および HATEOAS'
        slug: bai-16-api-documentation-openapi-hateoas
        description: >-
          SpringDoc OpenAPI 3 統合、@Operation、@Schema アノテーション。 Swagger UI のカスタマイズ。
          Spring HATEOAS、RepresentationModel、WebMvcLinkBuilder を使用した HATEOAS。
        duration_minutes: 120
        is_free: true
        sort_order: 15
        video_url: null
  - id: section-05
    title: 'パート 5: テストとコードの品質'
    description: 単体テスト、統合テスト、API テストおよびモニタリング
    sort_order: 5
    lessons:
      - id: 019c9617-fc17-7017-a017-fc1700000017
        title: 'レッスン 17: JUnit 5 と Mockito を使用した単体テスト'
        slug: bai-17-unit-testing-junit5-mockito
        description: >-
          JUnit 5 アノテーション、アサーション、パラメーター化されたテスト。 Mockito
          @Mock、@InjectMocks、@Spy、ArgumentCaptor。サービス層とユーティリティクラスのテスト。
        duration_minutes: 150
        is_free: true
        sort_order: 16
        video_url: null
      - id: 019c9617-fc18-7018-a018-fc1800000018
        title: 'レッスン 18: 統合テスト — @SpringBootTest と Testcontainers'
        slug: bai-18-integration-testing-testcontainers
        description: >-
          @SpringBootTest、テストスライス (@WebMvcTest、@DataJpaTest、@JsonTest)。
          PostgreSQL、Redis、Kafka のテストコンテナ。 @DynamicPropertySource、テスト構成。
        duration_minutes: 150
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019c9617-fc19-7019-a019-fc1900000019
        title: 'レッスン 19: API テスト — MockMvc、WebTestClient、REST を保証'
        slug: bai-19-api-testing-mockmvc-webtestclient
        description: >-
          コントローラーのテスト用の MockMvc。リアクティブ エンドポイントの WebTestClient。エンドツーエンドの API
          テストでは REST が保証されます。 Spring Cloud Contract を使用した契約テスト。
        duration_minutes: 120
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019c9617-fc20-7020-a020-fc2000000020
        title: 'レッスン 20: ロギング、モニタリング — アクチュエーター、マイクロメーター、可観測性'
        slug: bai-20-logging-monitoring-actuator
        description: >-
          Logback/Log4j2 による構造化ロギング。 Spring Boot Actuator
          エンドポイント、ヘルスチェック。マイクロメーターのメトリクス、Prometheus の統合。 OpenTelemetry
          による分散トレース。
        duration_minutes: 150
        is_free: true
        sort_order: 19
        video_url: null
  - id: section-06
    title: 'パート 6: マイクロサービスとプロダクション'
    description: Docker、マイクロサービス アーキテクチャ、メッセージ キュー、CI/CD
    sort_order: 6
    lessons:
      - id: 019c9617-fc21-7021-a021-fc2100000021
        title: 'レッスン 21: Spring Boot の Docker とコンテナ化'
        slug: bai-21-docker-containerization
        description: >-
          Dockerfile マルチステージ ビルド、Jib、クラウド ネイティブ ビルドパック。開発用の Docker Compose。
          Spring Boot を使用した GraalVM ネイティブ イメージ。階層化された JAR。
        duration_minutes: 150
        is_free: true
        sort_order: 20
        video_url: null
      - id: 019c9617-fc22-7022-a022-fc2200000022
        title: 'レッスン 22: マイクロサービス — サービス ディスカバリ、API ゲートウェイ、構成サーバー'
        slug: bai-22-microservices-service-discovery
        description: >-
          Spring Cloud Netflix Eureka、Spring Cloud ゲートウェイ。 Spring Cloud Config
          による一元化された構成。 Resilience4j を備えたサーキット ブレーカー。 OpenFeign および RestClient
          を使用したサービス間通信。
        duration_minutes: 180
        is_free: true
        sort_order: 21
        video_url: null
      - id: 019c9617-fc23-7023-a023-fc2300000023
        title: 'レッスン 23: メッセージ キュー — Kafka、RabbitMQ、イベント駆動型マイクロサービス'
        slug: bai-23-message-queue-kafka-rabbitmq
        description: >-
          Apache Kafka と Spring Kafka — プロデューサー、コンシューマー、ストリーム。 RabbitMQ と Spring
          AMQP。サーガパターン、アウトボックスパターン。イベントソーシングの基本。
        duration_minutes: 180
        is_free: true
        sort_order: 22
        video_url: null
      - id: 019c9617-fc24-7024-a024-fc2400000024
        title: 'レッスン 24: CI/CD、クラウド展開および運用のベスト プラクティス'
        slug: bai-24-cicd-cloud-deployment-production
        description: >-
          GitHub アクション CI/CD パイプライン。 AWS (ECS/EKS)、GCP (Cloud Run) にデプロイします。
          Helm チャートを使用した Kubernetes デプロイメント。 Flyway/Liquibase
          を使用したデータベース移行。パフォーマンスのチューニング、接続プーリング、正常なシャットダウン。
        duration_minutes: 180
        is_free: true
        sort_order: 23
        video_url: null
reviews: []
quizzes: []
locale: ja
---
<p><strong>必要な知識:</strong></p><ul><li>基本的な Java (OOP、コレクション、例外処理)</li><li>HTTP および REST API の理解</li><li>Maven/Gradle の使用経験 (推奨)</li><li>基本的な SQL の知識</li></ul><h3 id=""></h3>
