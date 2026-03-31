---
id: 019e0a10-a601-7001-d001-f1a7f8000601
title: 'Bài 18: Hands-on — Xây dựng FHIR Server với HAPI FHIR'
slug: bai-18-hands-on-xay-dung-fhir-server-voi-hapi-fhir
description: >-
  HAPI FHIR JPA Server setup với Spring Boot, PostgreSQL backend,
  cấu hình indexing và search parameters, resource validation,
  interceptors pattern, custom operations ($everything, $validate),
  bulk data export, Docker deployment, performance tuning.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 6: Thực hành - Xây dựng hệ thống FHIR"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<h2 id="1-gioi-thieu-hapi-fhir"><strong>1. Giới thiệu HAPI FHIR</strong></h2>

<p><strong>HAPI FHIR</strong> là thư viện Java mã nguồn mở phổ biến nhất để xây dựng FHIR Server và Client. HAPI FHIR JPA Server cung cấp một FHIR Server hoàn chỉnh với persistence layer sử dụng JPA/Hibernate.</p>

<table>
<thead>
<tr><th>Thành phần</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>HAPI FHIR Core</td><td>Parser, model classes, client/server framework</td></tr>
<tr><td>JPA Server</td><td>Full FHIR server với database persistence</td></tr>
<tr><td>Validation</td><td>Profile-based validation engine</td></tr>
<tr><td>CLI</td><td>Command-line tool cho migration, upload</td></tr>
<tr><td>FHIR Version</td><td>Hỗ trợ DSTU2, STU3, R4, R4B, R5</td></tr>
</tbody>
</table>

<h2 id="2-khoi-tao-project"><strong>2. Khởi tạo Project với Spring Boot</strong></h2>

<h3 id="maven-dependencies"><strong>Maven Dependencies</strong></h3>

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

<h3 id="application-properties"><strong>Application Properties</strong></h3>

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

<h2 id="3-fhir-server-config"><strong>3. Cấu hình FHIR Server</strong></h2>

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

<h2 id="4-resource-providers"><strong>4. Resource Providers</strong></h2>

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

<h2 id="5-interceptors"><strong>5. Interceptors</strong></h2>

<p>HAPI FHIR sử dụng <strong>Interceptor pattern</strong> để hook vào lifecycle của request.</p>

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

<h3 id="validation-interceptor"><strong>Validation Interceptor</strong></h3>

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

<h2 id="6-custom-search-parameters"><strong>6. Custom Search Parameters</strong></h2>

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

<p>Đăng ký search parameter:</p>

<pre><code class="language-bash">curl -X POST http://localhost:8080/fhir/SearchParameter \
  -H "Content-Type: application/fhir+json" \
  -d @search-parameter-cccd.json

# Reindex để áp dụng
curl -X POST http://localhost:8080/fhir/$reindex \
  -H "Content-Type: application/fhir+json" \
  -d '{"resourceType":"Parameters","parameter":[{"name":"url","valueString":"Patient"}]}'
</code></pre>

<h2 id="7-bulk-data-export"><strong>7. Bulk Data Export</strong></h2>

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

<h2 id="8-docker-deployment"><strong>8. Docker Deployment</strong></h2>

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

<h2 id="9-performance-tuning"><strong>9. Performance Tuning</strong></h2>

<table>
<thead>
<tr><th>Cấu hình</th><th>Giá trị khuyến nghị</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>hibernate.jdbc.batch_size</td><td>20-50</td><td>Batch insert/update</td></tr>
<tr><td>max_page_size</td><td>200</td><td>Giới hạn kết quả trả về</td></tr>
<tr><td>reuse_cached_search_results</td><td>60000 (ms)</td><td>Cache search results</td></tr>
<tr><td>JVM Heap</td><td>2-4 GB</td><td>Tùy theo số lượng resources</td></tr>
<tr><td>Connection pool</td><td>20-50</td><td>HikariCP connections</td></tr>
<tr><td>PostgreSQL shared_buffers</td><td>25% RAM</td><td>Database buffer</td></tr>
</tbody>
</table>

<h2 id="10-tong-ket"><strong>10. Tổng kết</strong></h2>

<ul>
<li><p><strong>HAPI FHIR JPA Server</strong> — Full-featured FHIR server built on Spring Boot + PostgreSQL</p></li>
<li><p><strong>Resource Providers</strong> — Implement CRUD, search, custom operations</p></li>
<li><p><strong>Interceptors</strong> — Hook vào request lifecycle cho audit, validation, security</p></li>
<li><p><strong>Custom Search Parameters</strong> — Mở rộng tìm kiếm theo nhu cầu (CCCD, BHYT)</p></li>
<li><p><strong>Bulk Data Export</strong> — Export lượng lớn data ở dạng NDJSON</p></li>
<li><p><strong>Docker</strong> — Production deployment với docker-compose</p></li>
</ul>
