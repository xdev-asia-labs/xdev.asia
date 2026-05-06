---
id: 019c9617-fc24-7024-a024-fc2400000024
title: 第 24 課：CI/CD、雲端部署和生產最佳實踐
slug: bai-24-cicd-cloud-deployment-production
description: >-
  GitHub Actions CI/CD 管道。使用 Kubernetes 部署到 AWS/GCP。使用 Flyway
  進行資料庫遷移。零停機部署。生產清單和最佳實踐。
duration_minutes: 150
is_free: false
video_url: null
sort_order: 23
section_title: 第 6 部分：微服務與生產
course:
  id: 019c9617-fcab-71c4-aaaa-a3e7571ff53f
  title: Spring Boot 4：從基礎到高級
  slug: spring-boot-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 程式設計 — 第 23 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 24 課：CI/CD、雲端部署和</tspan>
      <tspan x="60" dy="42">生產最佳實踐</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Spring Boot 4：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：微服務與生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

本系列的最後一篇文章總結了將 Spring Boot 應用程式投入生產所需的一切：CI/CD 管道、資料庫遷移、Kubernetes 部署、零停機更新和生產檢查表。

---

## 1. 使用 Flyway 進行資料庫遷移

### 1.1 設置

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

### 1.2 遷移文件

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

> **規則**：切勿編輯已執行的遷移檔案。建立新的遷移來更改架構。

---

## 2. 使用 GitHub Actions 進行 CI/CD

### 2.1 建置和測試管道

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

## 3.Kubernetes 部署

### 3.1 部署清單

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

### 3.2 服務與入口

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

### 3.3 Spring Boot 中的 Kubernetes 探針

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

## 4. 零停機部署

### 4.1 正常關機

```yaml
# application.yml
server:
  shutdown: graceful

spring:
  lifecycle:
    timeout-per-shutdown-phase: 30s
```

### 4.2 捲動更新策略

```
Replica 1 (v1) ─── Running ───────────────────►
Replica 2 (v1) ─── Running ───────────────────►
Replica 3 (v1) ─── Running ─── Terminating ──►

Replica 4 (v2) ──── Starting ─── Ready ──────►
Replica 5 (v2) ─────── Starting ─── Ready ──►
Replica 6 (v2) ──────────── Starting ─ Ready►
```

---

## 5. 生產清單

### 5.1 配置

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

### 5.2 安全檢查表

|項目 |狀態 |
|--------|--------|
|僅 HTTPS (TLS) | ○|
|安全標頭（HSTS、CSP）| ○|
| JWT 有效期限較短（15-30 分鐘）| ○|
|速率限制 | ○|
|輸入驗證所有端點 | ○|
| SQL注入保護（JPA） | ○|
|環境變數/vault 中的秘密 | ○|
|執行器端點受保護 | ○|

### 5.3 效能檢查表

|項目 |狀態 |
|--------|--------|
|連接池 (HikariCP) | ○|
|用於查詢的資料庫索引○|
|快取（咖啡因/Redis）| ○|
| @Transactional(readOnly=true) 用於讀取查詢 | ○|
|清單端點的分頁 | ○|
|繁重任務的非同步處理 | ○|
| GZip 壓縮 | ○|

### 5.4 監控

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

## 6. 系列總結

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

## 總結

- Flyway 管理資料庫遷移：模式的版本控制，從不編輯已執行的遷移
- GitHub Actions CI/CD：測試 → 建置 Docker 映像 → 推送到註冊表 → 部署到 Kubernetes
- Kubernetes：透過就緒/活躍探針進行捲動更新，正常關閉以實現零停機部署
- 生產清單：安全標頭、連接池、快取、監控 — 確保應用程式已做好生產準備

## 練習

1.設定Flyway：為專案中的所有實體建立遷移文件，使用進行測試 `./gradlew flywayMigrate`
2. 編寫 GitHub Actions CI/CD：使用 PostgreSQL 服務執行測試，建置 Docker 映像，推送到 GHCR
3. 建立 Kubernetes 清單：部署（3 個副本）、服務、入口。配置探測器並正常關閉。測試滾動更新
