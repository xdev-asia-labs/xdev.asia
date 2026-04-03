---
id: 019e2a10-a121-7a01-b001-f1a2b3c4d521
title: 'Bài 21: GraalVM Native Image & Container'
slug: bai-21-graalvm-native-container
description: >-
  Build native executables với GraalVM, multi-stage Dockerfile,
  so sánh JVM vs Native performance, native testing,
  reflection configuration, container optimization.
duration_minutes: 100
is_free: false
video_url: null
sort_order: 20
section_title: "Phần 7: Deployment & Production"
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: "Quarkus Microservices: Từ Cơ bản đến Production"
  slug: quarkus-microservices-tu-co-ban-den-production
---

## Giới thiệu

Quarkus được thiết kế cho **GraalVM Native Image** từ đầu. Native executable khởi động trong **~20ms** (vs 2-5s JVM), dùng **~30MB RSS** (vs 150-300MB JVM). Đây là lợi thế lớn cho microservices trên Kubernetes: scale nhanh, tiết kiệm tài nguyên.

## GraalVM Native Image — Cách hoạt động

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

### Cài GraalVM

```bash
# SDKMAN (recommended)
sdk install java 21.0.6-graalce
sdk use java 21.0.6-graalce

# Verify
java -version
# openjdk version "21.0.6" 2025-01-21
# GraalVM CE 21.0.6+7.1
```

### Build bằng Maven

```bash
# Build native executable
./mvnw package -Dnative

# Output: target/product-service-1.0.0-runner
# (standalone binary, ~50MB)

# Run
./target/product-service-1.0.0-runner
# Quarkus started in 0.019s
```

### Build trong Container (không cần GraalVM local)

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

## So sánh JVM vs Native

| Metric | JVM Mode | Native Mode |
|--------|----------|-------------|
| **Startup time** | 2-5s | 0.015-0.05s |
| **Memory (RSS)** | 150-300 MB | 30-80 MB |
| **Docker image** | ~300 MB | ~80 MB |
| **Build time** | 10-30s | 3-10 phút |
| **Peak throughput** | Cao hơn (JIT) | Thấp hơn ~10-20% |
| **Warm-up** | Cần warm-up | Không cần |
| **Reflection** | Tự do | Cần cấu hình |

### Khi nào dùng Native?

- ✅ Serverless / Functions (cold start matters)
- ✅ Microservices scale up/down thường xuyên
- ✅ Container density cao (tiết kiệm RAM)
- ✅ CLI tools
- ❌ Long-running services cần max throughput → JVM mode tốt hơn

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

### application.properties cho Native

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

## Bài tập

1. Build native executable cho Product Service: `./mvnw package -Dnative`
2. So sánh startup time và memory: JVM vs Native
3. Viết Multi-stage Dockerfile cho native image
4. Chạy `@QuarkusIntegrationTest` trên native binary
5. Docker Compose khởi động toàn bộ hệ thống (5 services + infra)

## Tổng kết

- **GraalVM Native Image**: startup ~20ms, RSS ~30MB — lý tưởng cho microservices
- **Multi-stage Dockerfile**: build stage (Mandrel) → runtime stage (quarkus-micro-image ~80MB)
- **`@RegisterForReflection`** cho classes dùng reflection dynamic
- **`@QuarkusIntegrationTest`** test trên native binary thực tế
- Docker Compose cho development/staging, Kubernetes cho production (Bài 22)

Bài tiếp theo: Kubernetes Deployment & CI/CD — deploy lên Kubernetes cluster.
