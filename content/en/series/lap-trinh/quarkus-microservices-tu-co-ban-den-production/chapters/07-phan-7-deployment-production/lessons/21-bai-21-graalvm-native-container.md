---
id: 019e2a10-a121-7a01-b001-f1a2b3c4d521
title: 'Lesson 21: GraalVM Native Image & Container'
slug: bai-21-graalvm-native-container
description: >-
  Build native executables with GraalVM, multi-stage Dockerfile, compare JVM vs
  Native performance, native testing, reflection configuration, container
  optimization.
duration_minutes: 100
is_free: false
video_url: null
sort_order: 20
section_title: 'Part 7: Deployment & Production'
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: 'Quarkus Microservices: From Basics to Production'
  slug: quarkus-microservices-tu-co-ban-den-production
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9651" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9651)"/>

  <!-- Decorations -->
  <g>
    <circle cx="989" cy="257" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="878" cy="246" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="767" cy="235" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="656" cy="224" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="213" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="247" x2="1100" y2="327" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="277" x2="1050" y2="347" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1083.3730669589463,226 1083.3730669589463,268 1047,289 1010.6269330410536,268 1010.6269330410536,226 1047,205" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 Programming — Lesson 20</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 21: GraalVM Native Image & Container</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus Microservices: From Basics to Production</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 7: Deployment & Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Quarkus was designed for **GraalVM Native Image** from the ground up. Native executable starts up in **~20ms** (vs 2-5s JVM), uses **~30MB RSS** (vs 150-300MB JVM). This is a big advantage for microservices on Kubernetes: scale quickly, save resources.

## GraalVM Native Image — How it works

```
  ┌────────────────────────────┐
  │     Java Application       │
  │  + All Dependencies        │
  │  + Quarkus Extensions      │
  └──────────┬─────────────────┘
             │
             ▼
  ┌────────────────────────────┐
  │   GraalVM Native Compiler  │
  │   (Ahead-of-Time)          │
  │                            │
  │  • Static Analysis         │
  │  • Dead Code Elimination   │
  │  • Heap Snapshotting       │
  │  • Substrate VM            │
  └──────────┬─────────────────┘
             │
             ▼
  ┌────────────────────────────┐
  │   Native Executable        │
  │   ~50MB standalone binary  │
  │   Startup: ~20ms           │
  │   RSS: ~30MB               │
  └────────────────────────────┘
```

## Build Native Image

### Install GraalVM

```bash
# SDKMAN (recommended)
sdk install java 21.0.6-graalce
sdk use java 21.0.6-graalce

# Verify
java -version
# openjdk version "21.0.6" 2025-01-21
# GraalVM CE 21.0.6+7.1
```

### Build using Maven

```bash
# Build native executable
./mvnw package -Dnative

# Output: target/product-service-1.0.0-runner
# (standalone binary, ~50MB)

# Run
./target/product-service-1.0.0-runner
# Quarkus started in 0.019s
```

### Build in Container (no need for local GraalVM)

```bash
# Dùng builder image — không cần cài GraalVM local
./mvnw package -Dnative \
  -Dquarkus.native.container-build=true \
  -Dquarkus.native.builder-image=\
    quay.io/quarkus/ubi-quarkus-mandrel-builder-image:jdk-21
```

## Multi-stage Dockerfile

### Native Image Dockerfile

```dockerfile
# Stage 1: Build native executable
FROM quay.io/quarkus/ubi-quarkus-mandrel-builder-image:jdk-21 \
    AS build

COPY --chown=quarkus:quarkus mvnw /code/mvnw
COPY --chown=quarkus:quarkus .mvn /code/.mvn
COPY --chown=quarkus:quarkus pom.xml /code/
COPY --chown=quarkus:quarkus src /code/src

USER quarkus
WORKDIR /code

RUN ./mvnw package -Dnative \
    -DskipTests \
    -Dquarkus.native.additional-build-args=\
      --initialize-at-build-time

# Stage 2: Runtime image
FROM quay.io/quarkus/quarkus-micro-image:2.0

WORKDIR /work/
COPY --from=build /code/target/*-runner /work/application

RUN chmod 775 /work /work/application \
    && chown -R 1001 /work \
    && chmod -R "g+rwX" /work

EXPOSE 8080
USER 1001

ENTRYPOINT ["./application", "-Dquarkus.http.host=0.0.0.0"]
```

### JVM Dockerfile (alternative)

```dockerfile
FROM eclipse-temurin:21-jre-alpine

ENV LANGUAGE='en_US:en'

COPY --chown=185 target/quarkus-app/lib/ /deployments/lib/
COPY --chown=185 target/quarkus-app/*.jar /deployments/
COPY --chown=185 target/quarkus-app/app/ /deployments/app/
COPY --chown=185 target/quarkus-app/quarkus/ /deployments/quarkus/

EXPOSE 8080
USER 185

ENV JAVA_OPTS_APPEND="-Dquarkus.http.host=0.0.0.0 \
  -Djava.util.logging.manager=org.jboss.logmanager.LogManager"
ENV JAVA_APP_JAR="/deployments/quarkus-run.jar"

ENTRYPOINT ["java", ${JAVA_OPTS_APPEND}, "-jar", \
  "/deployments/quarkus-run.jar"]
```

## Compare JVM vs Native

| Metrics | JVM Mode | Native Mode |
|--------|----------|-------------|
| **Startup time** | 2-5s | 0.015-0.05s |
| **Memory (RSS)** | 150-300 MB | 30-80 MB |
| **Docker image** | ~300 MB | ~80 MB |
| **Build time** | 10-30s | 3-10 minutes |
| **Peak throughput** | Higher (JIT) | ~10-20% lower |
| **Warm-up** | Need warm-up | No need |
| **Reflection** | Freedom | Need configuration |

### When to use Native?

- ✅ Serverless / Functions (cold start matters)
- ✅ Microservices scale up/down regularly
- ✅ High container density (saves RAM)
- ✅ CLI tools
- ❌ Long-running services need max throughput → JVM mode is better

## Reflection & Resources Configuration

```java
// Quarkus tự phát hiện reflection qua extensions
// Nhưng nếu dùng dynamic reflection thủ công:
@RegisterForReflection
public class ProductDTO {
    public Long id;
    public String name;
    public BigDecimal price;
}

// Đăng ký class từ library bên ngoài:
@RegisterForReflection(targets = {
    com.external.lib.SomeClass.class,
    com.external.lib.AnotherClass.class
})
public class ReflectionConfig {}
```

### application.properties for Native

```properties
# Resources cần include trong native image
quarkus.native.resources.includes=\
  db/migration/*.sql,\
  META-INF/resources/**,\
  templates/**

# Native image build settings
quarkus.native.additional-build-args=\
  -H:+ReportExceptionStackTraces,\
  --initialize-at-build-time
```

## Native Testing

```java
// Integration Test chạy trên native binary
@QuarkusIntegrationTest
class ProductResourceIT {

    @Test
    void testListProductsNative() {
        given()
            .when().get("/api/v1/products")
            .then()
                .statusCode(200);
    }

    @Test
    void testHealthCheck() {
        given()
            .when().get("/q/health")
            .then()
                .statusCode(200)
                .body("status", equalTo("UP"));
    }
}
```

```bash
# Chạy native integration tests
./mvnw verify -Dnative

# Quarkus sẽ:
# 1. Build native executable
# 2. Start native binary
# 3. Run *IT.java tests against it
# 4. Shut down
```

## Docker Compose — All Services

```yaml
# docker-compose.prod.yml
services:
  product-service:
    build:
      context: ./product-service
      dockerfile: src/main/docker/Dockerfile.native
    ports:
      - "8081:8080"
    environment:
      QUARKUS_DATASOURCE_JDBC_URL: >-
        jdbc:postgresql://postgres:5432/productdb
      QUARKUS_DATASOURCE_USERNAME: product
      QUARKUS_DATASOURCE_PASSWORD: ${DB_PASSWORD}
      QUARKUS_OIDC_AUTH_SERVER_URL: >-
        http://keycloak:8080/realms/ecommerce
    depends_on:
      postgres:
        condition: service_healthy
      keycloak:
        condition: service_healthy

  order-service:
    build:
      context: ./order-service
      dockerfile: src/main/docker/Dockerfile.native
    ports:
      - "8082:8080"
    environment:
      QUARKUS_DATASOURCE_JDBC_URL: >-
        jdbc:postgresql://postgres:5432/orderdb
      QUARKUS_DATASOURCE_USERNAME: order
      QUARKUS_DATASOURCE_PASSWORD: ${DB_PASSWORD}
      QUARKUS_REST_CLIENT_PRODUCT_SERVICE_URL: >-
        http://product-service:8080
      KAFKA_BOOTSTRAP_SERVERS: kafka:9092
    depends_on:
      postgres:
        condition: service_healthy
      kafka:
        condition: service_healthy

  payment-service:
    build:
      context: ./payment-service
      dockerfile: src/main/docker/Dockerfile.native
    ports:
      - "8083:8080"
    environment:
      QUARKUS_DATASOURCE_JDBC_URL: >-
        jdbc:postgresql://postgres:5432/paymentdb
      KAFKA_BOOTSTRAP_SERVERS: kafka:9092

  notification-service:
    build:
      context: ./notification-service
      dockerfile: src/main/docker/Dockerfile.native
    ports:
      - "8084:8080"
    environment:
      KAFKA_BOOTSTRAP_SERVERS: kafka:9092
      QUARKUS_MAILER_HOST: mailhog
      QUARKUS_MAILER_PORT: 1025

  postgres:
    image: postgres:17
    environment:
      POSTGRES_MULTIPLE_DATABASES: >-
        productdb,orderdb,paymentdb
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - pgdata:/var/lib/postgresql/data
      - ./init-multiple-dbs.sh:\
        /docker-entrypoint-initdb.d/init.sh
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 5s
      retries: 5

  keycloak:
    image: quay.io/keycloak/keycloak:26.2
    command: start-dev --import-realm
    ports:
      - "8180:8080"
    environment:
      KC_DB: postgres
      KC_DB_URL: jdbc:postgresql://postgres:5432/keycloak
      KC_DB_USERNAME: keycloak
      KC_DB_PASSWORD: ${DB_PASSWORD}
      KEYCLOAK_ADMIN: admin
      KEYCLOAK_ADMIN_PASSWORD: ${KEYCLOAK_ADMIN_PASSWORD}
    volumes:
      - ./keycloak/realms:/opt/keycloak/data/import
    healthcheck:
      test: ["CMD-SHELL",
        "exec 3<>/dev/tcp/localhost/8080"]
      interval: 10s
      timeout: 5s
      retries: 10

  kafka:
    image: confluentinc/cp-kafka:7.8.0
    ports:
      - "9092:9092"
    environment:
      KAFKA_NODE_ID: 1
      KAFKA_PROCESS_ROLES: controller,broker
      KAFKA_LISTENERS: >-
        PLAINTEXT://0.0.0.0:9092,CONTROLLER://0.0.0.0:9093
      KAFKA_CONTROLLER_QUORUM_VOTERS: 1@kafka:9093
      KAFKA_CONTROLLER_LISTENER_NAMES: CONTROLLER
      CLUSTER_ID: "MkU3OEVBNTcwNTJENDM2Qk"
    healthcheck:
      test: ["CMD", "kafka-broker-api-versions",
        "--bootstrap-server", "localhost:9092"]
      interval: 10s
      timeout: 10s
      retries: 5

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - product-service
      - order-service
      - payment-service

  jaeger:
    image: jaegertracing/jaeger:2
    ports:
      - "16686:16686"   # UI
      - "4317:4317"     # OTLP gRPC

  prometheus:
    image: prom/prometheus:v3.2.1
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus/prometheus.yml:\
        /etc/prometheus/prometheus.yml:ro

  grafana:
    image: grafana/grafana:11.5.2
    ports:
      - "3000:3000"
    volumes:
      - ./grafana/dashboards:/var/lib/grafana/dashboards

volumes:
  pgdata:
```

## Exercises

1. Build native executable for Product Service: `./mvnw package -Dnative`
2. Compare startup time and memory: JVM vs Native
3. Write Multi-stage Dockerfile for native image
4. Run `@QuarkusIntegrationTest` on native binary
5. Docker Compose boots the entire system (5 services + infra)

## Summary

- **GraalVM Native Image**: startup ~20ms, RSS ~30MB — ideal for microservices
- **Multi-stage Dockerfile**: build stage (Mandrel) → runtime stage (quarkus-micro-image ~80MB)
- **`@RegisterForReflection`** for classes that use dynamic reflection
- **`@QuarkusIntegrationTest`** tested on actual native binary
- Docker Compose for development/staging, Kubernetes for production (Lesson 22)

Next article: Kubernetes Deployment & CI/CD — deploy to a Kubernetes cluster.
