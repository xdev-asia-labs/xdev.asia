---
id: 019c9617-fc21-7021-a021-fc2100000021
title: 'Bài 21: Docker & Containerization cho Spring Boot'
slug: bai-21-docker-containerization
description: >-
  Dockerfile multi-stage build. Spring Boot Buildpacks (Cloud Native Buildpacks).
  Docker Compose cho development. GraalVM Native Image. Container best practices.
duration_minutes: 120
is_free: false
video_url: null
sort_order: 20
section_title: "Phần 6: Microservices & Production"
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: "Spring Boot 4: Từ Cơ bản đến Nâng cao"
  slug: spring-boot-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1609" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1609)"/>

  <!-- Decorations -->
  <g>
    <circle cx="783" cy="259" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="966" cy="162" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="649" cy="65" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="832" cy="228" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="1015" cy="131" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="109" x2="1100" y2="189" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="139" x2="1050" y2="209" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.1051177665154,187 1047.1051177665154,231 1009,253 970.8948822334847,231 970.8948822334847,187 1009,165" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 Lập trình — Bài 20</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 21: Docker &amp; Containerization cho</tspan>
      <tspan x="60" dy="42">Spring Boot</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Microservices &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Containerization là bước đầu tiên để đưa ứng dụng Spring Boot lên production. Bài này hướng dẫn từ Dockerfile cơ bản đến multi-stage builds, Cloud Native Buildpacks, GraalVM Native Image, và Docker Compose cho local development.

---

## 1. Dockerfile Multi-Stage Build

### 1.1 Basic Dockerfile

```dockerfile
# Stage 1: Build
FROM eclipse-temurin:21-jdk-alpine AS builder
WORKDIR /app
COPY gradle/ gradle/
COPY gradlew build.gradle.kts settings.gradle.kts ./
RUN ./gradlew dependencies --no-daemon
COPY src/ src/
RUN ./gradlew bootJar --no-daemon -x test

# Stage 2: Runtime
FROM eclipse-temurin:21-jre-alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app
COPY --from=builder /app/build/libs/*.jar app.jar
USER appuser
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

### 1.2 Optimized Layered Dockerfile

Spring Boot tạo layered JAR, cho phép Docker cache hiệu quả:

```dockerfile
FROM eclipse-temurin:21-jre-alpine AS builder
WORKDIR /app
COPY build/libs/*.jar app.jar
RUN java -Djarmode=tools -jar app.jar extract --layers --destination extracted

FROM eclipse-temurin:21-jre-alpine
RUN addgroup -S app && adduser -S app -G app
WORKDIR /app
COPY --from=builder /app/extracted/dependencies/ ./
COPY --from=builder /app/extracted/spring-boot-loader/ ./
COPY --from=builder /app/extracted/snapshot-dependencies/ ./
COPY --from=builder /app/extracted/application/ ./
USER app
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

---

## 2. Cloud Native Buildpacks

Spring Boot hỗ trợ buildpacks — tạo Docker image không cần Dockerfile:

```bash
# Gradle
./gradlew bootBuildImage --imageName=myapp:latest

# Maven
./mvnw spring-boot:build-image -Dspring-boot.build-image.imageName=myapp:latest
```

```kotlin
// build.gradle.kts — Customize
tasks.bootBuildImage {
    imageName.set("registry.example.com/myapp:${version}")
    environment.set(mapOf(
        "BP_JVM_VERSION" to "21",
        "BPE_JAVA_TOOL_OPTIONS" to "-XX:MaxRAMPercentage=75"
    ))
}
```

---

## 3. GraalVM Native Image

### 3.1 Build Native Image

```kotlin
// build.gradle.kts
plugins {
    id("org.graalvm.buildtools.native") version "0.10.6"
}
```

```bash
# Build native executable
./gradlew nativeCompile

# Build native Docker image
./gradlew bootBuildImage --imageName=myapp-native:latest
```

### 3.2 So sánh JVM vs Native

| Metric | JVM | Native Image |
|--------|-----|-------------|
| Startup time | 2-5s | 50-200ms |
| Memory (RSS) | 200-400MB | 50-100MB |
| Build time | 10-30s | 3-10 phút |
| Peak throughput | Cao nhất | Thấp hơn ~10-20% |
| Best for | Long-running services | Serverless, CLI |

---

## 4. Docker Compose cho Development

```yaml
# docker-compose.yml
services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      SPRING_PROFILES_ACTIVE: docker
      SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/myapp
      SPRING_DATASOURCE_USERNAME: postgres
      SPRING_DATASOURCE_PASSWORD: postgres
      SPRING_DATA_REDIS_HOST: redis
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_started

  db:
    image: postgres:17-alpine
    ports:
      - "5432:5432"
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
```

### 4.1 Spring Boot Docker Compose Support

```kotlin
// build.gradle.kts
developmentOnly("org.springframework.boot:spring-boot-docker-compose")
```

```yaml
# application.yml
spring:
  docker:
    compose:
      lifecycle-management: start-and-stop
      file: docker-compose.yml
```

Spring Boot tự động start Docker Compose khi chạy app và configure connection properties.

---

## 5. Container Best Practices

### 5.1 JVM tuning cho Container

```dockerfile
ENTRYPOINT ["java", \
  "-XX:MaxRAMPercentage=75", \
  "-XX:+UseZGC", \
  "-XX:+ZGenerational", \
  "-Djava.security.egd=file:/dev/./urandom", \
  "-jar", "app.jar"]
```

### 5.2 Health check trong Docker

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://localhost:8080/actuator/health || exit 1
```

### 5.3 .dockerignore

```
.git
.gradle
build/
!build/libs/*.jar
.idea
*.iml
node_modules
```

---

## Tóm tắt

- Multi-stage Dockerfile: tách build và runtime stage, giảm image size đáng kể
- Cloud Native Buildpacks: tạo Docker image không cần Dockerfile, `./gradlew bootBuildImage`
- GraalVM Native Image: startup 50-200ms, memory 50-100MB — lý tưởng cho serverless
- Docker Compose + Spring Boot Docker Compose Support: tự động start dependencies khi develop

## Bài tập

1. Viết multi-stage Dockerfile cho Spring Boot app với layered extraction. So sánh image size với single-stage
2. Tạo docker-compose.yml đầy đủ: app + PostgreSQL + Redis. Cấu hình healthcheck và depends_on
3. Build GraalVM Native Image, đo startup time và memory usage, so sánh với JVM mode
