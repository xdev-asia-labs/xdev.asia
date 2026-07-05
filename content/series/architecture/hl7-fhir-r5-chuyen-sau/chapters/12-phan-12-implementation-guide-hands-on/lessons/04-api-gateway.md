---
id: f0205d47-46a1-4339-9ad2-d629eef4aa52
title: 'API Gateway'
slug: api-gateway
description: 'API Gateway đóng vai trò quan trọng trong kiến trúc microservices của ứng dụng y tế dựa trên FHIR R5. API Gateway hoạt động như một điểm vào duy nhất cho tất cả các yêu cầu từ client, sau đó định tuyến chúng đến các…'
duration_minutes: 17
is_free: true
video_url: null
sort_order: 4
section_title: 'Phần 12: Implementation Guide (Hands-on)'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
API Gateway đóng vai trò quan trọng trong kiến trúc microservices của ứng dụng y tế dựa trên FHIR R5. API Gateway hoạt động như một điểm vào duy nhất cho tất cả các yêu cầu từ client, sau đó định tuyến chúng đến các microservice thích hợp. Tài liệu này hướng dẫn cách thiết lập Spring Cloud Gateway kết hợp với các công nghệ như Keycloak để bảo mật, Redis để quản lý session, và các công cụ giám sát.

### Các tính năng chính của API Gateway

* **Định tuyến yêu cầu**: Chuyển tiếp yêu cầu đến microservice phù hợp
* **Xác thực và ủy quyền**: Tích hợp với Keycloak để SMART on FHIR Authentication
* **Cân bằng tải**: Phân phối traffic giữa các instance của microservice
* **Giới hạn tốc độ**: Bảo vệ API khỏi quá tải hoặc DOS attack
* **Logging và monitoring**: Theo dõi toàn bộ request/response
* **Caching**: Tăng hiệu suất cho các endpoint thường xuyên được truy cập
* **Circuit breaking**: Ngăn lỗi lan truyền giữa các service
* **Transformation**: Chuyển đổi request/response nếu cần thiết

### Công nghệ sử dụng

* **Spring Cloud Gateway**: API Gateway framework nhẹ, hiệu suất cao
* **Keycloak**: Identity và Access Management cho SMART on FHIR
* **Redis**: Lưu trữ session, rate limiting và caching
* **Resilience4j**: Circuit breaking và fault tolerance
* **Prometheus & Grafana**: Monitoring và alerting
* **ELK Stack**: Logging tập trung
* **Docker & Kubernetes**: Container và orchestration

### Các bước thiết lập

#### 1. Tạo Spring Cloud Gateway Project

Tạo một Spring Boot project mới với các dependencies cần thiết:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.4.4</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>io.akitect.healthcare</groupId>
	<artifactId>ApiGateway</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>ApiGateway</name>
	<description>Using API Gateway with FHIR API</description>
	<url/>
	<licenses>
		<license/>
	</licenses>
	<developers>
		<developer/>
	</developers>
	<scm>
		<connection/>
		<developerConnection/>
		<tag/>
		<url/>
	</scm>
	<properties>
		<java.version>24</java.version>
		<spring-cloud.version>2024.0.1</spring-cloud.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-actuator</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.cloud</groupId>
			<artifactId>spring-cloud-starter-circuitbreaker-reactor-resilience4j</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.cloud</groupId>
			<artifactId>spring-cloud-starter-gateway</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.cloud</groupId>
			<artifactId>spring-cloud-starter-loadbalancer</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.cloud</groupId>
			<artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>io.micrometer</groupId>
			<artifactId>micrometer-registry-prometheus</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<!-- Security -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-redis-reactive</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>
	</dependencies>
	<dependencyManagement>
		<dependencies>
			<dependency>
				<groupId>org.springframework.cloud</groupId>
				<artifactId>spring-cloud-dependencies</artifactId>
				<version>${spring-cloud.version}</version>
				<type>pom</type>
				<scope>import</scope>
			</dependency>
		</dependencies>
	</dependencyManagement>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>

</project>

```

#### 2. Cấu hình Gateway Routes

Cấu hình các routes trong file `application.yml`:

```yaml
server:
  port: ${PORT:8760}
spring:
  application:
    name: fhir-api-gateway
  cloud:
    gateway:
      routes:
        # Patient Service Routes
        - id: patient-service
          uri: lb://patient-service
          predicates:
            - Path=/api/patients/**, /api/related-persons/**
          filters:
            - name: CircuitBreaker
              args:
                name: patientServiceCircuitBreaker
                fallbackUri: forward:/fallback/patient
            - name: RequestRateLimiter
              args:
                redis-rate-limiter.replenishRate: 10
                redis-rate-limiter.burstCapacity: 20

        # Encounter Service Routes
        - id: encounter-service
          uri: lb://encounter-service
          predicates:
            - Path=/api/encounters/**, /api/observations/**, /api/diagnostics/**
          filters:
            - name: CircuitBreaker
              args:
                name: encounterServiceCircuitBreaker
                fallbackUri: forward:/fallback/encounter

        # Appointment Service Routes
        - id: appointment-service
          uri: lb://appointment-service
          predicates:
            - Path=/api/appointments/**, /api/schedules/**
          filters:
            - name: CircuitBreaker
              args:
                name: appointmentServiceCircuitBreaker
                fallbackUri: forward:/fallback/appointment

        # Reporting Service Routes
        - id: reporting-service
          uri: lb://reporting-service
          predicates:
            - Path=/api/reports/**, /api/measures/**
          filters:
            - name: CircuitBreaker
              args:
                name: reportingServiceCircuitBreaker
                fallbackUri: forward:/fallback/reporting

        # FHIR Server Direct Access (secured with special permissions)
        - id: fhir-server
          uri: ${app.fhir-server-url}
          predicates:
            - Path=/fhir/**
          filters:
            - name: RequestRateLimiter
              args:
                redis-rate-limiter.replenishRate: 5
                redis-rate-limiter.burstCapacity: 10
                key-resolver: "#{@ipKeyResolver}"

        # Community Service Routes
        - id: community-service
          uri: lb://community-service
          predicates:
            - Path=/api/community/**, /api/groups/**
          filters:
            - name: CircuitBreaker
              args:
                name: communityServiceCircuitBreaker
                fallbackUri: forward:/fallback/community

        # Medication Service Routes
        - id: medication-service
          uri: lb://medication-service
          predicates:
            - Path=/api/medications/**, /api/prescriptions/**
          filters:
            - name: CircuitBreaker
              args:
                name: medicationServiceCircuitBreaker
                fallbackUri: forward:/fallback/medication

        # Notification Service Routes
        - id: notification-service
          uri: lb://notification-service
          predicates:
            - Path=/api/notifications/**
          filters:
            - name: CircuitBreaker
              args:
                name: notificationServiceCircuitBreaker
                fallbackUri: forward:/fallback/notification

        # Integration Service Routes (HIS connection)
        - id: integration-service
          uri: lb://integration-service
          predicates:
            - Path=/api/integration/**
          filters:
            - name: CircuitBreaker
              args:
                name: integrationServiceCircuitBreaker
                fallbackUri: forward:/fallback/integration

        # Frontend routes - React App
        - id: frontend
          uri: ${app.frontend-url}
          predicates:
            - Path=/**
          filters:
            - name: StripPrefix
              args:
                parts: 0

  # Redis Configuration for Rate Limiting
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: ${KEYCLOAK_URL:http://localhost:8080}/realms/fhir-realm
          jwk-set-uri: ${KEYCLOAK_URL:http://localhost:8080}/realms/fhir-realm/protocol/openid-connect/certs
  data:
    redis:
      port: ${REDIS_PORT:6379}
      host: ${REDIS_HOST:localhost}
      password: ${REDIS_PASSWORD:admin}

# Service Discovery
eureka:
  client:
    enabled: true
    service-url:
      defaultZone: ${EUREKA_URI:http://admin:admin@localhost:8761/eureka/}
  instance:
    preferIpAddress: true

# Security Configuration

# Circuit Breaker Configuration
resilience4j:
  circuitbreaker:
    configs:
      default:
        slidingWindowSize: 10
        failureRateThreshold: 50
        waitDurationInOpenState: 10000
        permittedNumberOfCallsInHalfOpenState: 5
    instances:
      patientServiceCircuitBreaker:
        baseConfig: default
      encounterServiceCircuitBreaker:
        baseConfig: default
      appointmentServiceCircuitBreaker:
        baseConfig: default
      reportingServiceCircuitBreaker:
        baseConfig: default
      communityServiceCircuitBreaker:
        baseConfig: default
      medicationServiceCircuitBreaker:
        baseConfig: default
      notificationServiceCircuitBreaker:
        baseConfig: default
      integrationServiceCircuitBreaker:
        baseConfig: default

# Actuator Configuration for Monitoring
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
  endpoint:
    health:
      show-details: always
  prometheus:
    metrics:
      export:
        enabled: true

# Application specific properties
app:
  fhir-server-url: ${FHIR_SERVER_URL:http://localhost:8000}
  frontend-url: ${FRONTEND_URL:http://localhost:3000}

```

#### 3. Cấu hình bảo mật với SMART on FHIR (Keycloak)

Tạo class SecurityConfig để cấu hình bảo mật:

```java
package io.akitect.healthcare.ApiGateway.config;

import org.springframework.cloud.gateway.filter.ratelimit.KeyResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.server.resource.authentication.ReactiveJwtAuthenticationConverter;
import org.springframework.security.web.server.SecurityWebFilterChain;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        return http
                .csrf(ServerHttpSecurity.CsrfSpec::disable)
                .authorizeExchange(exchanges -> exchanges
                        .pathMatchers("/fhir/**").hasRole("FHIR_ADMIN")
                        .pathMatchers("/api/patients/**").hasAnyRole("PATIENT_READ", "PATIENT_ADMIN")
                        .pathMatchers("/api/encounters/**").hasAnyRole("ENCOUNTER_READ", "ENCOUNTER_ADMIN")
                        .pathMatchers("/actuator/**").permitAll()
                        .anyExchange().authenticated()
                )
                .oauth2ResourceServer(oauth2 -> oauth2
                        .jwt(jwt -> jwt.jwtAuthenticationConverter(jwtAuthenticationConverter()))
                )
                .build();
    }

    @Bean
    public ReactiveJwtAuthenticationConverter jwtAuthenticationConverter() {
        ReactiveJwtAuthenticationConverter converter = new ReactiveJwtAuthenticationConverter();

        // The key fix: Return Flux<GrantedAuthority> instead of Mono<List<GrantedAuthority>>
        converter.setJwtGrantedAuthoritiesConverter(jwt -> {
            Map<String, Object> realmAccess = jwt.getClaimAsMap("realm_access");

            if (realmAccess == null || !realmAccess.containsKey("roles")) {
                return Flux.empty();
            }

            @SuppressWarnings("unchecked")
            List<String> roles = (List<String>) realmAccess.get("roles");

            // Convert to Flux<GrantedAuthority> directly
            return Flux.fromIterable(roles)
                    .map(roleName -> "ROLE_" + roleName)
                    .map(SimpleGrantedAuthority::new);
        });

        return converter;
    }

    @Bean
    public KeyResolver ipKeyResolver() {
        return exchange -> Mono.just(
                Objects.requireNonNull(exchange.getRequest().getRemoteAddress()).getHostName()
        );
    }
}
```

#### 4. Tạo Global Pre-Filter cho Logging và Tracing

```java
@Component
public class LoggingFilter implements GlobalFilter {
    private static final Logger log = LoggerFactory.getLogger(LoggingFilter.class);

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();
        String requestId = UUID.randomUUID().toString();

        log.info("Request: {} {} {} requestId: {}",
                request.getMethod(),
                request.getURI(),
                request.getQueryParams(),
                requestId);

        // Add request ID to response header for correlation
        return chain.filter(
                        exchange.mutate()
                                .request(exchange.getRequest().mutate()
                                        .header("X-Request-ID", requestId)
                                        .build())
                                .build())
                .then(Mono.fromRunnable(() -> {
                    ServerHttpResponse response = exchange.getResponse();
                    log.info("Response: status={}, requestId={}",
                            response.getStatusCode(),
                            requestId);
                }));
    }
}
```

#### 5. Triển khai Circuit Breaker và Fallback Endpoints

```java
@RestController
@RequestMapping("/fallback")
public class FallbackController {

    @GetMapping("/patient")
    public Mono<ResponseEntity<Map<String, String>>> patientFallback() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Patient service is currently unavailable. Please try again later.");
        response.put("status", "error");
        return Mono.just(ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(response));
    }
    
    @GetMapping("/encounter")
    public Mono<ResponseEntity<Map<String, String>>> encounterFallback() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Encounter service is currently unavailable. Please try again later.");
        response.put("status", "error");
        return Mono.just(ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(response));
    }
    
    // Add similar fallback methods for other services
    
    @GetMapping("/**")
    public Mono<ResponseEntity<Map<String, String>>> defaultFallback() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "The requested service is currently unavailable. Please try again later.");
        response.put("status", "error");
        return Mono.just(ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(response));
    }
}
```

#### 6. Cấu hình CORS cho Frontend

```java
@Configuration
public class CorsConfig {

    @Bean
    public CorsWebFilter corsWebFilter() {
        CorsConfiguration corsConfig = new CorsConfiguration();
        corsConfig.setAllowedOrigins(Arrays.asList(
            "http://localhost:3000"
        ));
        corsConfig.setMaxAge(3600L);
        corsConfig.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        corsConfig.setAllowedHeaders(Arrays.asList("*"));
        corsConfig.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfig);
        
        return new CorsWebFilter(source);
    }
}
```

#### 7. Tạo Dockerfile và Docker Compose

**Dockerfile**

```dockerfile
FROM openjdk:21-slim
WORKDIR /app
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

**docker-compose.yml**

```yaml
version: '3.8'

services:
  fhir-api-gateway:
    build: .
    container_name: fhir-api-gateway
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=docker
      - EUREKA_HOST=eureka-server
      - REDIS_HOST=redis
      - KEYCLOAK_URL=http://keycloak:8080
      - FHIR_SERVER_URL=http://hapi-fhir-server:8080
      - FRONTEND_URL=http://frontend:3000
    networks:
      - fhir-network
    depends_on:
      - redis
      - eureka-server
      - keycloak

  redis:
    image: redis:7.0-alpine
    container_name: fhir-redis
    ports:
      - "6379:6379"
    networks:
      - fhir-network

  eureka-server:
    image: fhir-eureka-server:latest
    container_name: fhir-eureka-server
    ports:
      - "8761:8761"
    networks:
      - fhir-network

  keycloak:
    image: quay.io/keycloak/keycloak:latest
    container_name: fhir-keycloak
    environment:
      - KEYCLOAK_ADMIN=admin
      - KEYCLOAK_ADMIN_PASSWORD=admin
      - KC_DB=postgres
      - KC_DB_URL=jdbc:postgresql://postgres:5432/keycloak
      - KC_DB_USERNAME=keycloak
      - KC_DB_PASSWORD=keycloak
    ports:
      - "8090:8080"
    networks:
      - fhir-network
    depends_on:
      - postgres
    command: ["start-dev"]

  postgres:
    image: postgres:15-alpine
    container_name: fhir-postgres
    environment:
      - POSTGRES_DB=keycloak
      - POSTGRES_USER=keycloak
      - POSTGRES_PASSWORD=keycloak
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - fhir-network

networks:
  fhir-network:
    driver: bridge

volumes:
  postgres_data:
```

#### 8. Kubernetes Deployment

Tạo file YAML để triển khai trên Kubernetes:

**gateway-deployment.yaml**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: fhir-api-gateway
  namespace: fhir-system
spec:
  replicas: 2
  selector:
    matchLabels:
      app: fhir-api-gateway
  template:
    metadata:
      labels:
        app: fhir-api-gateway
    spec:
      containers:
      - name: fhir-api-gateway
        image: your-docker-registry/fhir-api-gateway:latest
        ports:
        - containerPort: 8080
        env:
        - name: SPRING_PROFILES_ACTIVE
          value: "kubernetes"
        - name: EUREKA_HOST
          value: "eureka-server"
        - name: REDIS_HOST
          value: "redis"
        - name: KEYCLOAK_URL
          value: "http://keycloak:8080"
        - name: FHIR_SERVER_URL
          value: "http://hapi-fhir-server:8080"
        - name: FRONTEND_URL
          value: "http://frontend:3000"
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1Gi"
            cpu: "1000m"
        readinessProbe:
          httpGet:
            path: /actuator/health/readiness
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        livenessProbe:
          httpGet:
            path: /actuator/health/liveness
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 30
---
apiVersion: v1
kind: Service
metadata:
  name: fhir-api-gateway
  namespace: fhir-system
spec:
  selector:
    app: fhir-api-gateway
  ports:
  - port: 80
    targetPort: 8080
  type: ClusterIP
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: fhir-api-gateway-ingress
  namespace: fhir-system
  annotations:
    kubernetes.io/ingress.class: "nginx"
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  tls:
  - hosts:
    - api.your-fhir-domain.com
    secretName: fhir-api-tls
  rules:
  - host: api.your-fhir-domain.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: fhir-api-gateway
            port:
              number: 80
```

#### 9. Cấu hình Keycloak cho SMART on FHIR

1. Tạo Realm mới có tên `fhir-realm`
2. Cấu hình clients:

**SMART on FHIR Client**

* Client ID: `fhir-client`
* Client Protocol: `openid-connect`
* Access Type: `confidential`
* Valid Redirect URIs: `http://localhost:3000/*, https://your-production-domain.com/*`
* Web Origins: `+`

3. Tạo các roles:
   * `fhir_admin`
   * `patient_read`
   * `patient_write`
   * `encounter_read`
   * `encounter_write`
   * `appointment_read`
   * `appointment_write`
4. Tạo các scopes (Client Scopes):
   * `fhir_admin`
   * `patient_read`
   * `patient_write`
   * `encounter_read`
   * `encounter_write`
   * `appointment_read`
   * `appointment_write`
5. Map các roles vào scopes và clients

```json
{
  "realm": "fhir-realm",
  "enabled": true,
  "displayName": "FHIR Healthcare System",
  "displayNameHtml": "<div class=\"kc-logo-text\"><span>FHIR Healthcare System</span></div>",
  "roles": {
    "realm": [
      {
        "name": "fhir_admin",
        "description": "FHIR Administrator with full access"
      },
      {
        "name": "patient_read",
        "description": "Read access to patient resources"
      },
      {
        "name": "patient_write",
        "description": "Write access to patient resources"
      },
      {
        "name": "encounter_read",
        "description": "Read access to encounter resources"
      },
      {
        "name": "encounter_write",
        "description": "Write access to encounter resources"
      },
      {
        "name": "appointment_read",
        "description": "Read access to appointment resources"
      },
      {
        "name": "appointment_write",
        "description": "Write access to appointment resources"
      }
    ]
  },
  "clients": [
    {
      "clientId": "fhir-client",
      "name": "FHIR Client Application",
      "description": "SMART on FHIR Client Application",
      "rootUrl": "http://localhost:3000",
      "adminUrl": "http://localhost:3000",
      "baseUrl": "http://localhost:3000",
      "surrogateAuthRequired": false,
      "enabled": true,
      "alwaysDisplayInConsole": false,
      "clientAuthenticatorType": "client-secret",
      "secret": "change-me-in-production",
      "redirectUris": [
        "http://localhost:3000/*",
        "https://your-production-domain.com/*"
      ],
      "webOrigins": [
        "+"
      ],
      "notBefore": 0,
      "bearerOnly": false,
      "consentRequired": false,
      "standardFlowEnabled": true,
      "implicitFlowEnabled": false,
      "directAccessGrantsEnabled": true,
      "serviceAccountsEnabled": true,
      "publicClient": false,
      "frontchannelLogout": false,
      "protocol": "openid-connect",
      "attributes": {
        "access.token.lifespan": 1800,
        "saml.assertion.signature": "false",
        "saml.force.post.binding": "false",
        "saml.multivalued.roles": "false",
        "saml.encrypt": "false",
        "oauth2.device.authorization.grant.enabled": "false",
        "backchannel.logout.revoke.offline.tokens": "false",
        "saml.server.signature": "false",
        "saml.server.signature.keyinfo.ext": "false",
        "use.refresh.tokens": "true",
        "exclude.session.state.from.auth.response": "false",
        "backchannel.logout.session.required": "true",
        "client_credentials.use_refresh_token": "false",
        "saml_force_name_id_format": "false",
        "saml.client.signature": "false",
        "tls.client.certificate.bound.access.tokens": "false",
        "require.pushed.authorization.requests": "false",
        "saml.authnstatement": "false",
        "display.on.consent.screen": "false",
        "saml.onetimeuse.condition": "false"
      },
      "authenticationFlowBindingOverrides": {},
      "fullScopeAllowed": false,
      "defaultClientScopes": [
        "web-origins",
        "profile",
        "roles",
        "email"
      ],
      "optionalClientScopes": [
        "address",
        "phone",
        "offline_access",
        "microprofile-jwt",
        "fhir_admin",
        "patient_read",
        "patient_write",
        "encounter_read",
        "encounter_write",
        "appointment_read",
        "appointment_write"
      ]
    }
  ],
  "clientScopes": [
    {
      "name": "fhir_admin",
      "description": "FHIR Administrator Access",
      "protocol": "openid-connect",
      "attributes": {
        "include.in.token.scope": "true",
        "display.on.consent.screen": "true",
        "consent.screen.text": "FHIR Administrator Access"
      },
      "protocolMappers": [
        {
          "name": "fhir_admin role",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-realm-role-mapper",
          "consentRequired": false,
          "config": {
            "multivalued": "true",
            "userinfo.token.claim": "true",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "roles",
            "jsonType.label": "String",
            "role": "fhir_admin"
          }
        }
      ]
    },
    {
      "name": "patient_read",
      "description": "Read access to patient resources",
      "protocol": "openid-connect",
      "attributes": {
        "include.in.token.scope": "true",
        "display.on.consent.screen": "true",
        "consent.screen.text": "Read access to patient resources"
      },
      "protocolMappers": [
        {
          "name": "patient_read role",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-realm-role-mapper",
          "consentRequired": false,
          "config": {
            "multivalued": "true",
            "userinfo.token.claim": "true",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "roles",
            "jsonType.label": "String",
            "role": "patient_read"
          }
        }
      ]
    },
    {
      "name": "patient_write",
      "description": "Write access to patient resources",
      "protocol": "openid-connect",
      "attributes": {
        "include.in.token.scope": "true",
        "display.on.consent.screen": "true",
        "consent.screen.text": "Write access to patient resources"
      },
      "protocolMappers": [
        {
          "name": "patient_write role",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-realm-role-mapper",
          "consentRequired": false,
          "config": {
            "multivalued": "true",
            "userinfo.token.claim": "true",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "roles",
            "jsonType.label": "String",
            "role": "patient_write"
          }
        }
      ]
    },
    {
      "name": "encounter_read",
      "description": "Read access to encounter resources",
      "protocol": "openid-connect",
      "attributes": {
        "include.in.token.scope": "true",
        "display.on.consent.screen": "true",
        "consent.screen.text": "Read access to encounter resources"
      },
      "protocolMappers": [
        {
          "name": "encounter_read role",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-realm-role-mapper",
          "consentRequired": false,
          "config": {
            "multivalued": "true",
            "userinfo.token.claim": "true",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "roles",
            "jsonType.label": "String",
            "role": "encounter_read"
          }
        }
      ]
    },
    {
      "name": "encounter_write",
      "description": "Write access to encounter resources",
      "protocol": "openid-connect",
      "attributes": {
        "include.in.token.scope": "true",
        "display.on.consent.screen": "true",
        "consent.screen.text": "Write access to encounter resources"
      },
      "protocolMappers": [
        {
          "name": "encounter_write role",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-realm-role-mapper",
          "consentRequired": false,
          "config": {
            "multivalued": "true",
            "userinfo.token.claim": "true",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "roles",
            "jsonType.label": "String",
            "role": "encounter_write"
          }
        }
      ]
    },
    {
      "name": "appointment_read",
      "description": "Read access to appointment resources",
      "protocol": "openid-connect",
      "attributes": {
        "include.in.token.scope": "true",
        "display.on.consent.screen": "true",
        "consent.screen.text": "Read access to appointment resources"
      },
      "protocolMappers": [
        {
          "name": "appointment_read role",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-realm-role-mapper",
          "consentRequired": false,
          "config": {
            "multivalued": "true",
            "userinfo.token.claim": "true",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "roles",
            "jsonType.label": "String",
            "role": "appointment_read"
          }
        }
      ]
    },
    {
      "name": "appointment_write",
      "description": "Write access to appointment resources",
      "protocol": "openid-connect",
      "attributes": {
        "include.in.token.scope": "true",
        "display.on.consent.screen": "true",
        "consent.screen.text": "Write access to appointment resources"
      },
      "protocolMappers": [
        {
          "name": "appointment_write role",
          "protocol": "openid-connect",
          "protocolMapper": "oidc-usermodel-realm-role-mapper",
          "consentRequired": false,
          "config": {
            "multivalued": "true",
            "userinfo.token.claim": "true",
            "id.token.claim": "true",
            "access.token.claim": "true",
            "claim.name": "roles",
            "jsonType.label": "String",
            "role": "appointment_write"
          }
        }
      ]
    }
  ],
  "defaultDefaultClientScopes": [
    "web-origins",
    "profile",
    "roles",
    "email"
  ],
  "defaultOptionalClientScopes": [
    "address",
    "phone",
    "offline_access",
    "microprofile-jwt"
  ],
  "browserSecurityHeaders": {
    "contentSecurityPolicyReportOnly": "",
    "xContentTypeOptions": "nosniff",
    "xRobotsTag": "none",
    "xFrameOptions": "SAMEORIGIN",
    "contentSecurityPolicy": "frame-src 'self'; frame-ancestors 'self'; object-src 'none';",
    "xXSSProtection": "1; mode=block",
    "strictTransportSecurity": "max-age=31536000; includeSubDomains"
  },
  "smtpServer": {},
  "eventsEnabled": true,
  "eventsListeners": [
    "jboss-logging"
  ],
  "enabledEventTypes": [
    "LOGIN",
    "LOGIN_ERROR",
    "LOGOUT",
    "LOGOUT_ERROR",
    "CODE_TO_TOKEN",
    "CODE_TO_TOKEN_ERROR",
    "CLIENT_LOGIN",
    "CLIENT_LOGIN_ERROR"
  ],
  "adminEventsEnabled": true,
  "adminEventsDetailsEnabled": true,
  "internationalizationEnabled": false,
  "supportedLocales": [],
  "identityProviders": [],
  "identityProviderMappers": [],
  "components": {
    "org.keycloak.services.clientregistration.policy.ClientRegistrationPolicy": [
      {
        "name": "Allowed Protocol Mapper Types",
        "providerId": "allowed-protocol-mappers",
        "subComponents": {},
        "config": {
          "allowed-protocol-mapper-types": [
            "oidc-usermodel-attribute-mapper",
            "oidc-sha256-pairwise-sub-mapper",
            "oidc-usermodel-property-mapper",
            "saml-user-property-mapper",
            "oidc-full-name-mapper",
            "saml-role-list-mapper",
            "saml-user-attribute-mapper",
            "oidc-address-mapper"
          ],
          "consent-required-for-all-mappers": [
            "true"
          ]
        }
      },
      {
        "name": "Allowed Client Scopes",
        "providerId": "allowed-client-templates",
        "subComponents": {},
        "config": {
          "allow-default-scopes": [
            "true"
          ]
        }
      },
      {
        "name": "Consent Required",
        "providerId": "consent-required",
        "subComponents": {},
        "config": {}
      },
      {
        "name": "Full Scope Disabled",
        "providerId": "scope",
        "subComponents": {},
        "config": {}
      },
      {
        "name": "Max Clients Limit",
        "providerId": "max-clients",
        "subComponents": {},
        "config": {
          "max-clients": [
            "200"
          ]
        }
      },
      {
        "name": "Trusted Hosts",
        "providerId": "trusted-hosts",
        "subComponents": {},
        "config": {
          "host-sending-registration-request-must-match": [
            "true"
          ],
          "client-uris-must-match": [
            "true"
          ]
        }
      }
    ],
    "org.keycloak.keys.KeyProvider": [
      {
        "name": "rsa-generated",
        "providerId": "rsa-generated",
        "subComponents": {},
        "config": {
          "priority": [
            "100"
          ]
        }
      },
      {
        "name": "hmac-generated",
        "providerId": "hmac-generated",
        "subComponents": {},
        "config": {
          "priority": [
            "100"
          ],
          "algorithm": [
            "HS256"
          ]
        }
      },
      {
        "name": "aes-generated",
        "providerId": "aes-generated",
        "subComponents": {},
        "config": {
          "priority": [
            "100"
          ]
        }
      }
    ]
  },
  "userManagedAccessAllowed": false
}
```

#### 10. Cấu hình Monitoring với Prometheus và Grafana

**prometheus.yml**

```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'fhir-api-gateway'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['fhir-api-gateway:8080']
```

**Grafana Dashboard**:

* Tạo dashboard để giám sát các metrics chính:
  * Request rate và latency
  * Error rate
  * Circuit breaker status
  * JVM metrics (memory, threads)
  * Rate limiter status

### Tích hợp với Các Microservices FHIR

Để các microservices có thể giao tiếp qua API Gateway, cần đảm bảo:

1. Mỗi service đều đăng ký với Eureka Service Discovery
2. Xác thực token JWT từ gateway trong mỗi microservice
3. Cung cấp OpenAPI/Swagger documentation cho mỗi service

Ví dụ cấu hình Eureka client trong microservice:

```yaml
# application.yml của một microservice
spring:
  application:
    name: patient-service
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: ${KEYCLOAK_URL:http://localhost:8080}/realms/fhir-realm
          jwk-set-uri: ${KEYCLOAK_URL:http://localhost:8080}/realms/fhir-realm/protocol/openid-connect/certs

eureka:
  client:
    service-url:
      defaultZone: http://${EUREKA_HOST:localhost}:${EUREKA_PORT:8761}/eureka/
  instance:
    prefer-ip-address: true
```

### Kết luận

API Gateway đóng vai trò quan trọng trong kiến trúc microservices của hệ thống y tế FHIR. Bằng cách sử dụng Spring Cloud Gateway kết hợp với các công nghệ như Keycloak, Redis, và các công cụ monitoring, chúng ta có thể tạo ra một gateway hiệu quả, an toàn và có khả năng mở rộng.

Hướng dẫn này đã trình bày các bước cơ bản để thiết lập một API Gateway hoạt động đầy đủ cho ứng dụng y tế dựa trên FHIR R5. Tùy vào quy mô và yêu cầu cụ thể của dự án, có thể cần thêm các tính năng và tùy chỉnh khác.

### Tài nguyên bổ sung

* [Spring Cloud Gateway Documentation](https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/)
* [SMART on FHIR Documentation](http://hl7.org/fhir/smart-app-launch/)
* [Keycloak Documentation](https://www.keycloak.org/documentation)
* [HAPI FHIR Documentation](https://hapifhir.io/hapi-fhir/docs/)
