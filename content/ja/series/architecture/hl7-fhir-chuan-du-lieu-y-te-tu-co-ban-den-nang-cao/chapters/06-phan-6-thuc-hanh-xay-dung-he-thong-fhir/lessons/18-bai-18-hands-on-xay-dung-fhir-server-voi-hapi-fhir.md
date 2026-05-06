---
id: 019e0a10-a601-7001-d001-f1a7f8000601
title: 'レッスン 18: 実践 — HAPI FHIR を使用した FHIR サーバーの構築'
slug: bai-18-hands-on-xay-dung-fhir-server-voi-hapi-fhir
description: >-
  Spring Boot を使用した HAPI FHIR JPA サーバーのセットアップ、PostgreSQL
  バックエンド、インデックス作成と検索パラメーターの構成、リソース検証、インターセプター パターン、カスタム操作
  ($everything、$validate)、一括データ エクスポート、Docker デプロイメント、パフォーマンス チューニング。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 18
section_title: 'パート 6: 実践 - FHIR システムの構築'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6995" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6995)"/>

  <!-- Decorations -->
  <g>
    <circle cx="617" cy="281" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="634" cy="278" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="651" cy="275" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="668" cy="272" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="685" cy="269" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="191" x2="1100" y2="271" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="221" x2="1050" y2="291" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="963.5166604983954,128 963.5166604983954,154 941,167 918.4833395016046,154 918.4833395016046,128 941,115" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ アーキテクチャ — レッスン 18</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 18: 実践 — FHIR サーバーの構築</tspan>
      <tspan x="60" dy="42">HAPI FHIR を使用</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 実践 - FHIR システムの構築</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-gioi-thieu-hapi-fhir"><strong>1. HAPI FHIR の紹介</strong></h2>

<p><strong>ハピ・フィル</strong> は、FHIR サーバーおよびクライアントを構築するための最も人気のあるオープン ソース Java ライブラリです。 HAPI FHIR JPA サーバーは、JPA/Hibernate を使用した永続化レイヤーを備えた完全な FHIR サーバーを提供します。</p>

<table>
<thead>
<tr><th>成分</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>HAPI FHIR コア</td><td>パーサー、モデルクラス、クライアント/サーバーフレームワーク</td></tr>
<tr><td>JPAサーバー</td><td>データベース永続性を備えた完全な FHIR サーバー</td></tr>
<tr><td>検証</td><td>プロファイルベースの検証エンジン</td></tr>
<tr><td>CLI</td><td>移行、アップロード用のコマンドライン ツール</td></tr>
<tr><td>FHIR バージョン</td><td>DSTU2、STU3、R4、R4B、R5をサポート</td></tr>
</tbody>
</table>

<h2 id="2-khoi-tao-project"><strong>2. Spring Boot でプロジェクトを初期化する</strong></h2>

<h3 id="maven-dependencies"><strong>Maven の依存関係</strong></h3>

<pre><code class="language-xml">&lt;parent&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
    &lt;version&gt;3.2.0&lt;/version&gt;
&lt;/parent&gt;

&lt;properties&gt;
    &lt;hapi.fhir.version&gt;7.4.0&lt;/hapi.fhir.version&gt;
&lt;/properties&gt;

&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;ca.uhn.hapi.fhir&lt;/groupId&gt;
        &lt;artifactId&gt;hapi-fhir-jpaserver-starter&lt;/artifactId&gt;
        &lt;version&gt;${hapi.fhir.version}&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.postgresql&lt;/groupId&gt;
        &lt;artifactId&gt;postgresql&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;ca.uhn.hapi.fhir&lt;/groupId&gt;
        &lt;artifactId&gt;hapi-fhir-structures-r5&lt;/artifactId&gt;
        &lt;version&gt;${hapi.fhir.version}&lt;/version&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre>

<h3 id="application-properties"><strong>アプリケーションのプロパティ</strong></h3>

<pre><code class="language-yaml"># application.yml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/hapi_fhir
    username: hapi
    password: ${DB_PASSWORD}
    driver-class-name: org.postgresql.Driver
  jpa:
    hibernate:
      ddl-auto: update
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
        format_sql: false
        jdbc:
          batch_size: 20
        order_inserts: true
        order_updates: true

hapi:
  fhir:
    fhir_version: R5
    server_address: http://localhost:8080/fhir
    allow_multiple_delete: true
    allow_external_references: true
    default_page_size: 20
    max_page_size: 200
    validation:
      requests_enabled: true
      responses_enabled: false
</code></pre>

<h2 id="3-fhir-server-config"><strong>3. FHIRサーバーの構成</strong></h2>

<pre><code class="language-java">@Configuration
public class FhirServerConfig {

    @Bean
    public RestfulServer restfulServer(
            ApplicationContext context,
            FhirContext fhirContext) {
        
        RestfulServer server = new RestfulServer(fhirContext);
        server.setDefaultResponseEncoding(EncodingEnum.JSON);
        server.setDefaultPrettyPrint(true);
        
        // Register resource providers
        server.registerProviders(
            context.getBean(PatientResourceProvider.class),
            context.getBean(ObservationResourceProvider.class),
            context.getBean(EncounterResourceProvider.class)
        );
        
        // Register interceptors
        server.registerInterceptor(new ResponseHighlighterInterceptor());
        server.registerInterceptor(new CorsInterceptor());
        server.registerInterceptor(context.getBean(AuditInterceptor.class));
        
        return server;
    }
    
    @Bean
    public FhirContext fhirContext() {
        return FhirContext.forR5();
    }
}
</code></pre>

<h2 id="4-resource-providers"><strong>4. リソースプロバイダー</strong></h2>

<pre><code class="language-java">@Component
public class PatientResourceProvider implements IResourceProvider {
    
    @Autowired
    private PatientRepository patientRepo;
    
    @Override
    public Class&lt;Patient&gt; getResourceType() {
        return Patient.class;
    }
    
    @Read
    public Patient read(@IdParam IdType theId) {
        return patientRepo.findById(theId.getIdPart())
            .orElseThrow(() -&gt; new ResourceNotFoundException(theId));
    }
    
    @Create
    public MethodOutcome create(@ResourceParam Patient patient) {
        // Validate trước khi lưu
        ValidationResult result = validator.validateWithResult(patient);
        if (!result.isSuccessful()) {
            throw new UnprocessableEntityException(
                result.toOperationOutcome());
        }
        
        Patient saved = patientRepo.save(patient);
        return new MethodOutcome()
            .setId(saved.getIdElement())
            .setCreated(true);
    }
    
    @Search
    public List&lt;Patient&gt; searchByName(
            @RequiredParam(name = Patient.SP_NAME) StringParam name) {
        return patientRepo.findByNameContaining(name.getValue());
    }
    
    @Search
    public List&lt;Patient&gt; searchByIdentifier(
            @RequiredParam(name = Patient.SP_IDENTIFIER) 
            TokenParam identifier) {
        return patientRepo.findByIdentifier(
            identifier.getSystem(), identifier.getValue());
    }
    
    @Operation(name = "$everything", idempotent = true)
    public Bundle patientEverything(@IdParam IdType patientId) {
        Bundle bundle = new Bundle();
        bundle.setType(Bundle.BundleType.SEARCHSET);
        
        Patient patient = read(patientId);
        bundle.addEntry().setResource(patient);
        
        // Thêm Encounters, Observations, Conditions...
        encounterRepo.findByPatient(patientId.getIdPart())
            .forEach(e -&gt; bundle.addEntry().setResource(e));
        observationRepo.findBySubject(patientId.getIdPart())
            .forEach(o -&gt; bundle.addEntry().setResource(o));
        
        return bundle;
    }
}
</code></pre>

<h2 id="5-interceptors"><strong>5. インターセプター</strong></h2>

<p>HAPI FHIR 使用 <strong>インターセプターパターン</strong> リクエストのライフサイクルにフックします。</p>

<pre><code class="language-java">@Component
public class AuditInterceptor {
    
    @Hook(Pointcut.SERVER_INCOMING_REQUEST_PRE_HANDLED)
    public void logIncomingRequest(
            RequestDetails requestDetails) {
        log.info("FHIR Request: {} {} from {}",
            requestDetails.getRequestType(),
            requestDetails.getCompleteUrl(),
            requestDetails.getAttribute("remoteAddr"));
    }
    
    @Hook(Pointcut.STORAGE_PRESTORAGE_RESOURCE_CREATED)
    public void auditCreate(IBaseResource resource,
            RequestDetails requestDetails) {
        AuditEvent audit = new AuditEvent();
        audit.setAction(AuditEvent.AuditEventAction.C);
        audit.setRecorded(new Date());
        
        AuditEvent.AuditEventAgentComponent agent = 
            audit.addAgent();
        agent.setRequestor(true);
        // Set agent from auth context
        
        AuditEvent.AuditEventEntityComponent entity = 
            audit.addEntity();
        entity.setWhat(new Reference(
            resource.getIdElement().toUnqualifiedVersionless()));
        
        auditRepo.save(audit);
    }
}
</code></pre>

<h3 id="validation-interceptor"><strong>検証インターセプター</strong></h3>

<pre><code class="language-java">@Component
public class ValidationInterceptor {
    
    @Hook(Pointcut.STORAGE_PRESTORAGE_RESOURCE_CREATED)
    @Hook(Pointcut.STORAGE_PRESTORAGE_RESOURCE_UPDATED)
    public void validateResource(IBaseResource resource) {
        FhirValidator validator = fhirContext.newValidator();
        
        // Thêm profile validation
        IValidatorModule module = new FhirInstanceValidator(
            validationSupport);
        validator.registerValidatorModule(module);
        
        ValidationResult result = validator.validateWithResult(resource);
        
        if (!result.isSuccessful()) {
            OperationOutcome oo = (OperationOutcome) 
                result.toOperationOutcome();
            throw new UnprocessableEntityException(
                fhirContext, oo);
        }
    }
}
</code></pre>

<h2 id="6-custom-search-parameters"><strong>6. カスタム検索パラメータ</strong></h2>

<pre><code class="language-json">{
  "resourceType": "SearchParameter",
  "url": "http://xdev.asia/fhir/SearchParameter/patient-cccd",
  "name": "cccd",
  "status": "active",
  "description": "Tìm kiếm bệnh nhân theo số CCCD",
  "code": "cccd",
  "base": ["Patient"],
  "type": "token",
  "expression": "Patient.identifier.where(system='http://xdev.asia/fhir/sid/cccd').value"
}
</code></pre>

<p>検索パラメータを登録します。</p>

<pre><code class="language-bash">curl -X POST http://localhost:8080/fhir/SearchParameter \
  -H "Content-Type: application/fhir+json" \
  -d @search-parameter-cccd.json

# Reindex để áp dụng
curl -X POST http://localhost:8080/fhir/$reindex \
  -H "Content-Type: application/fhir+json" \
  -d '{"resourceType":"Parameters","parameter":[{"name":"url","valueString":"Patient"}]}'
</code></pre>

<h2 id="7-bulk-data-export"><strong>7. データの一括エクスポート</strong></h2>

<pre><code class="language-bash"># Khởi tạo export Patient và Observation
curl -X GET 'http://localhost:8080/fhir/$export' \
  -H "Accept: application/fhir+json" \
  -H "Prefer: respond-async" \
  -H "Content-Type: application/fhir+json" \
  --data '{
    "resourceType": "Parameters",
    "parameter": [
      {"name": "_type", "valueString": "Patient,Observation"},
      {"name": "_outputFormat", "valueString": "application/fhir+ndjson"}
    ]
  }'

# Response Header: Content-Location: http://localhost:8080/fhir/$export-poll/abc123

# Kiểm tra trạng thái
curl http://localhost:8080/fhir/\$export-poll/abc123

# Download kết quả khi hoàn tất
curl -o patients.ndjson http://localhost:8080/fhir/bulk/abc123/Patient
</code></pre>

<h2 id="8-docker-deployment"><strong>8. Docker のデプロイメント</strong></h2>

<pre><code class="language-dockerfile">FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY target/hapi-fhir-server.jar app.jar

ENV JAVA_OPTS="-Xmx2g -Xms1g"
ENV SPRING_PROFILES_ACTIVE=production

EXPOSE 8080
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
</code></pre>

<pre><code class="language-yaml"># docker-compose.yml
services:
  fhir-server:
    build: .
    ports:
      - "8080:8080"
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/hapi_fhir
      - SPRING_DATASOURCE_USERNAME=hapi
      - SPRING_DATASOURCE_PASSWORD=${DB_PASSWORD}
      - HAPI_FHIR_SERVER_ADDRESS=https://fhir.xdev.asia/fhir
    depends_on:
      postgres:
        condition: service_healthy
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/fhir/metadata"]
      interval: 30s
      timeout: 10s
      retries: 5
  
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: hapi_fhir
      POSTGRES_USER: hapi
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U hapi"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  pgdata:
</code></pre>

<h2 id="9-performance-tuning"><strong>9. パフォーマンスのチューニング</strong></h2>

<table>
<thead>
<tr><th>構成</th><th>推奨値</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>hibernate.jdbc.batch_size</td><td>20-50</td><td>バッチ挿入/更新</td></tr>
<tr><td>max_page_size</td><td>200</td><td>返される結果を制限する</td></tr>
<tr><td>再利用_cached_search_results</td><td>60000 (ミリ秒)</td><td>検索結果をキャッシュする</td></tr>
<tr><td>JVM ヒープ</td><td>2～4GB</td><td>リソースの数に応じて</td></tr>
<tr><td>接続プール</td><td>20-50</td><td>光CP接続</td></tr>
<tr><td>PostgreSQL 共有バッファ</td><td>25% RAM</td><td>データベースバッファ</td></tr>
</tbody>
</table>

<h2 id="10-tong-ket"><strong>10. まとめ</strong></h2>

<ul>
<li><p><strong>HAPI FHIR JPA サーバー</strong> — Spring Boot + PostgreSQL 上に構築されたフル機能の FHIR サーバー</p></li>
<li><p><strong>リソースプロバイダー</strong> — CRUD、検索、カスタム操作の実装</p></li>
<li><p><strong>インターセプター</strong> — 監査、検証、セキュリティのためのリクエストのライフサイクルに接続します</p></li>
<li><p><strong>カスタム検索パラメータ</strong> — ニーズに応じて検索を拡大（CCCD、健康保険）</p></li>
<li><p><strong>一括データエクスポート</strong> — 大量のデータを NDJSON 形式でエクスポート</p></li>
<li><p><strong>ドッカー</strong> — docker-compose を使用した実稼働デプロイメント</p></li>
</ul>
