---
id: 019c9617-fc24-7024-a024-fc2400000024
title: 'Lesson 24: CI/CD, Cloud Deployment & Production Best Practices'
slug: bai-24-cicd-cloud-deployment-production
description: >-
  GitHub Actions CI/CD pipeline. Deploy to AWS/GCP with Kubernetes. Database
  migration with Flyway. Zero-downtime deployment. Production checklist & best
  practices.
duration_minutes: 150
is_free: false
video_url: null
sort_order: 23
section_title: 'Part 6: Microservices & Production'
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: 'Spring Boot 4: From Basics to Advanced'
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4764" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4764)"/>

  <!-- Decorations -->
  <g>
    <circle cx="945" cy="185" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="790" cy="150" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="635" cy="115" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="980" cy="80" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="825" cy="45" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="135" x2="1100" y2="215" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="165" x2="1050" y2="235" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1060.9807621135333,220 1060.9807621135333,250 1035,265 1009.0192378864668,250 1009.0192378864668,220 1035,205" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 Programming — Lesson 23</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 24: CI/CD, Cloud Deployment &</tspan>
      <tspan x="60" dy="42">Production Best Practices</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: Microservices & Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

The final article of the series summarizes everything needed to bring a Spring Boot application to production: CI/CD pipeline, database migration, Kubernetes deployment, zero-downtime updates, and production checklist.

---

## 1. Database Migration with Flyway

### 1.1 Setup

```kotlin
// build.gradle.kts
implementation("org.flywaydb:flyway-core")
implementation("org.flywaydb:flyway-database-postgresql")
```

```yaml
# application.yml
spring:
  flyway:
    enabled: true
    locations: classpath:db/migration
    baseline-on-migrate: true
```

### 1.2 Migration Files

```
src/main/resources/db/migration/
├── V1__create_users_table.sql
├── V2__create_products_table.sql
├── V3__create_orders_table.sql
└── V4__add_email_index_to_users.sql
```

```sql
-- V1__create_users_table.sql
CREATE TABLE users (
    id          BIGSERIAL PRIMARY KEY,
    username    VARCHAR(50)  NOT NULL UNIQUE,
    email       VARCHAR(255) NOT NULL UNIQUE,
    password    VARCHAR(255) NOT NULL,
    role        VARCHAR(20)  NOT NULL DEFAULT 'USER',
    created_at  TIMESTAMP    NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMP    NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
```

```sql
-- V4__add_email_index_to_users.sql
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_users_username
    ON users(username);
```

> **Rule**: Never edit an already running migration file. Create a new migration to change the schema.

---

## 2. CI/CD with GitHub Actions

### 2.1 Build & Test Pipeline

```yaml
# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:17-alpine
        env:
          POSTGRES_DB: testdb
          POSTGRES_USER: test
          POSTGRES_PASSWORD: test
        ports:
          - 5432:5432
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-java@v4
        with:
          distribution: temurin
          java-version: 21

      - uses: gradle/actions/setup-gradle@v4

      - name: Run tests
        run: ./gradlew test
        env:
          SPRING_DATASOURCE_URL: jdbc:postgresql://localhost:5432/testdb
          SPRING_DATASOURCE_USERNAME: test
          SPRING_DATASOURCE_PASSWORD: test

      - name: Upload test report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: test-report
          path: build/reports/tests/

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-java@v4
        with:
          distribution: temurin
          java-version: 21

      - name: Build Docker image
        run: ./gradlew bootBuildImage --imageName=ghcr.io/${{ github.repository }}:${{ github.sha }}

      - name: Push to Container Registry
        run: |
          echo "${{ secrets.GITHUB_TOKEN }}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin
          docker push ghcr.io/${{ github.repository }}:${{ github.sha }}
```

---

## 3. Kubernetes Deployment

### 3.1 Deployment manifest

```yaml
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  labels:
    app: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0  # Zero-downtime
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
        - name: myapp
          image: ghcr.io/myorg/myapp:latest
          ports:
            - containerPort: 8080
          env:
            - name: SPRING_PROFILES_ACTIVE
              value: production
            - name: SPRING_DATASOURCE_URL
              valueFrom:
                secretKeyRef:
                  name: db-credentials
                  key: url
          resources:
            requests:
              memory: "256Mi"
              cpu: "250m"
            limits:
              memory: "512Mi"
              cpu: "500m"
          readinessProbe:
            httpGet:
              path: /actuator/health/readiness
              port: 8080
            initialDelaySeconds: 15
            periodSeconds: 5
          livenessProbe:
            httpGet:
              path: /actuator/health/liveness
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 10
          startupProbe:
            httpGet:
              path: /actuator/health
              port: 8080
            failureThreshold: 30
            periodSeconds: 2
```

### 3.2 Service & Ingress

```yaml
# k8s/service.yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp
spec:
  selector:
    app: myapp
  ports:
    - port: 80
      targetPort: 8080
  type: ClusterIP

---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt
spec:
  tls:
    - hosts:
        - api.example.com
      secretName: myapp-tls
  rules:
    - host: api.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: myapp
                port:
                  number: 80
```

### 3.3 Kubernetes Probes in Spring Boot

```yaml
# application-production.yml
management:
  endpoint:
    health:
      probes:
        enabled: true
  health:
    readinessstate:
      enabled: true
    livenessstate:
      enabled: true
```

---

## 4. Zero-Downtime Deployment

### 4.1 Graceful Shutdown

```yaml
# application.yml
server:
  shutdown: graceful

spring:
  lifecycle:
    timeout-per-shutdown-phase: 30s
```

### 4.2 Rolling Update Strategy

```
Replica 1 (v1) ─── Running ───────────────────►
Replica 2 (v1) ─── Running ───────────────────►
Replica 3 (v1) ─── Running ─── Terminating ──►

Replica 4 (v2) ──── Starting ─── Ready ──────►
Replica 5 (v2) ─────── Starting ─── Ready ──►
Replica 6 (v2) ──────────── Starting ─ Ready►
```

---

## 5. Production Checklist

### 5.1 Configuration

```yaml
# application-production.yml
spring:
  jpa:
    open-in-view: false        # Tắt OSIV
    show-sql: false             # Không log SQL
    hibernate:
      ddl-auto: validate        # Chỉ validate, không auto-create

  jackson:
    default-property-inclusion: non_null

server:
  error:
    include-stacktrace: never   # Không expose stacktrace
    include-message: never

logging:
  level:
    root: WARN
    com.example: INFO
```

### 5.2 Security Checklist

| Item | Status |
|--------|--------|
| HTTPS Only (TLS) | ☐ |
| Security Headers (HSTS, CSP) | ☐ |
| JWT with short expiration (15-30min) | ☐ |
| Rate Limiting | ☐ |
| Input Validation all endpoints | ☐ |
| SQL Injection protection (JPA) | ☐ |
| Secrets in env vars/vault | ☐ |
| Actuator endpoints protected | ☐ |

### 5.3 Performance Checklist

| Item | Status |
|--------|--------|
| Connection pooling (HikariCP) | ☐ |
| Database indexes for queries | ☐ |
| Caching (Caffeine/Redis) | ☐ |
| @Transactional(readOnly=true) for read queries | ☐ |
| Pagination for list endpoints | ☐ |
| Async processing for heavy tasks | ☐ |
| GZip compression | ☐ |

### 5.4 Monitoring

```yaml
# Grafana Dashboard essentials
Metrics to monitor:
  - JVM Memory (Heap/Non-Heap)
  - GC Pause time
  - HTTP request rate & latency (p50, p95, p99)
  - Error rate (4xx, 5xx)
  - Database connection pool usage
  - Thread pool utilization
  - Custom business metrics
```

---

## 6. Series Summary

```
Bạn đã học:

Phần 1: Nền tảng Spring Boot
  └── Spring IoC, Auto-Configuration, DI, Bean Lifecycle

Phần 2: Xây dựng REST API
  └── Controller, DTO, Validation, JPA, Specification

Phần 3: Bảo mật ứng dụng
  └── Spring Security, JWT, OAuth2, Method Security

Phần 4: Tính năng nâng cao
  └── Transaction, Cache, Async, Events, WebSocket, OpenAPI

Phần 5: Testing & Chất lượng
  └── JUnit 5, Mockito, Testcontainers, Actuator, Observability

Phần 6: Microservices & Production
  └── Docker, Kubernetes, Kafka/RabbitMQ, CI/CD, Production Best Practices
```

---

## Summary

- Flyway manages database migrations: version control for schema, never edit already run migrations
- GitHub Actions CI/CD: test → build Docker image → push to registry → deploy to Kubernetes
- Kubernetes: rolling update with readiness/liveness probes, graceful shutdown for zero-downtime deployment
- Production checklist: security headers, connection pooling, caching, monitoring — ensure the application is production-ready

## Exercises

1. Setup Flyway: create migration files for all entities in the project, test with `./gradlew flywayMigrate`
2. Write GitHub Actions CI/CD: run tests with PostgreSQL service, build Docker image, push to GHCR
3. Create Kubernetes manifests: Deployment (3 replicas), Service, Ingress. Configure probes and graceful shutdown. Test rolling updates
