---
id: 019e2a10-a122-7a01-b001-f1a2b3c4d522
title: 'レッスン 22: Kubernetes デプロイメントと CI/CD'
slug: bai-22-kubernetes-cicd
description: >-
  マイクロサービスを Kubernetes、Helm チャート、ConfigMaps/Secrets、HPA 自動スケーリング、GitHub Actions
  CI/CD、K8 上の Prometheus + Grafana によるモニタリングにデプロイします。
duration_minutes: 120
is_free: false
video_url: null
sort_order: 21
course:
  id: 019e2a10-a100-7a01-b001-f1a2b3c4d5e6
  title: 'Quarkus マイクロサービス: 基本から運用まで'
  slug: quarkus-microservices-tu-co-ban-den-production
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2270" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2270)"/>

  <!-- Decorations -->
  <g>
    <circle cx="624" cy="122" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="648" cy="66" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="672" cy="270" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="696" cy="214" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="720" cy="158" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="102" x2="1100" y2="182" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="132" x2="1050" y2="202" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="934.0429399400242,83.5 934.0429399400242,120.5 902,139 869.9570600599758,120.5 869.9570600599758,83.50000000000001 902,65" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 プログラミング — レッスン 21</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 22: Kubernetes デプロイメントと CI/CD</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Quarkus マイクロサービス: 基本から運用まで</text>

  <!-- Section -->
  

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

最後のレッスン: E コマース プラットフォーム全体を **Kubernetes** にデプロイし、**GitHub Actions CI/CD** で自動化し、**Prometheus と Grafana** で本番環境を監視します。 Quarkusには拡張機能があります `quarkus-kubernetes` 自己生成マニフェスト。

## Kubernetes 上のアーキテクチャ

```
                    ┌─── Ingress (Nginx) ───┐
                    │    ecommerce.xdev.asia │
                    └──────┬────────────────┘
                           │
            ┌──────────────┼──────────────┐
            ▼              ▼              ▼
     ┌────────────┐ ┌───────────┐ ┌────────────┐
     │  Product   │ │  Order    │ │  Payment   │
     │  Service   │ │  Service  │ │  Service   │
     │  (3 pods)  │ │  (3 pods) │ │  (2 pods)  │
     └──────┬─────┘ └─────┬─────┘ └──────┬─────┘
            │              │              │
            ▼              ▼              ▼
     ┌────────────────────────────────────┐
     │        PostgreSQL (StatefulSet)    │
     │     Kafka (Strimzi Operator)       │
     │     Keycloak (Operator)            │
     │     Redis (StatefulSet)            │
     └────────────────────────────────────┘
            │
     ┌──────┴────────────────────────────┐
     │  Monitoring Namespace             │
     │  Prometheus + Grafana + Jaeger    │
     └──────────────────────────────────┘
```

## Quarkus Kubernetes 拡張機能

```xml
<dependency>
    <groupId>io.quarkus</groupId>
    <artifactId>quarkus-kubernetes</artifactId>
</dependency>
```

### application.properties

```properties
# Kubernetes deployment config
quarkus.kubernetes.deployment-target=kubernetes
quarkus.kubernetes.namespace=ecommerce

# Container image
quarkus.container-image.group=xdev
quarkus.container-image.name=product-service
quarkus.container-image.tag=${quarkus.application.version}
quarkus.container-image.registry=ghcr.io

# Deployment settings
quarkus.kubernetes.replicas=3
quarkus.kubernetes.image-pull-policy=always

# Resources
quarkus.kubernetes.resources.requests.cpu=100m
quarkus.kubernetes.resources.requests.memory=64Mi
quarkus.kubernetes.resources.limits.cpu=500m
quarkus.kubernetes.resources.limits.memory=128Mi

# Health probes (auto-configured từ SmallRye Health)
quarkus.kubernetes.liveness-probe.http-action-path=/q/health/live
quarkus.kubernetes.readiness-probe.http-action-path=/q/health/ready
quarkus.kubernetes.startup-probe.http-action-path=/q/health/started

# Service
quarkus.kubernetes.service-type=cluster-ip
quarkus.kubernetes.ports.http.container-port=8080

# Labels
quarkus.kubernetes.labels."app.kubernetes.io/part-of"=ecommerce
quarkus.kubernetes.labels."app.kubernetes.io/managed-by"=quarkus

# Env from ConfigMap & Secret
quarkus.kubernetes.env.configmaps=product-service-config
quarkus.kubernetes.env.secrets=product-service-secret
```

ビルドが生成する `target/kubernetes/kubernetes.yml`:

```bash
./mvnw package -Dnative \
  -Dquarkus.container-image.build=true \
  -Dquarkus.container-image.push=true
```

## Kubernetes マニフェスト

### 名前空間と構成マップ

```yaml
# k8s/base/namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: ecommerce
  labels:
    app.kubernetes.io/part-of: ecommerce
---
# k8s/base/configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: product-service-config
  namespace: ecommerce
data:
  QUARKUS_DATASOURCE_JDBC_URL: >-
    jdbc:postgresql://postgres:5432/productdb
  QUARKUS_OIDC_AUTH_SERVER_URL: >-
    http://keycloak:8080/realms/ecommerce
  QUARKUS_LOG_LEVEL: INFO
  QUARKUS_OTEL_EXPORTER_OTLP_ENDPOINT: >-
    http://jaeger-collector:4317
```

### 秘密 (封印)

```yaml
# k8s/base/secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: product-service-secret
  namespace: ecommerce
type: Opaque
stringData:
  QUARKUS_DATASOURCE_USERNAME: product
  QUARKUS_DATASOURCE_PASSWORD: "${DB_PASSWORD}"
```

> **プロダクション**: プレーン シークレットの代わりに **Sealed Secrets** または **外部シークレット オペレーター** を使用します。

### HPA — 水平ポッド オートスケーラー

```yaml
# k8s/base/hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: product-service
  namespace: ecommerce
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: product-service
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
    - type: Resource
      resource:
        name: memory
        target:
          type: Utilization
          averageUtilization: 80
  behavior:
    scaleUp:
      stabilizationWindowSeconds: 30
      policies:
        - type: Pods
          value: 2
          periodSeconds: 60
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
        - type: Pods
          value: 1
          periodSeconds: 120
```

### イングレス

```yaml
# k8s/base/ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ecommerce-ingress
  namespace: ecommerce
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /$2
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  ingressClassName: nginx
  tls:
    - hosts:
        - api.ecommerce.xdev.asia
      secretName: ecommerce-tls
  rules:
    - host: api.ecommerce.xdev.asia
      http:
        paths:
          - path: /products(/|$)(.*)
            pathType: ImplementationSpecific
            backend:
              service:
                name: product-service
                port:
                  number: 8080
          - path: /orders(/|$)(.*)
            pathType: ImplementationSpecific
            backend:
              service:
                name: order-service
                port:
                  number: 8080
          - path: /payments(/|$)(.*)
            pathType: ImplementationSpecific
            backend:
              service:
                name: payment-service
                port:
                  number: 8080
```

## ヘルムチャート

```
ecommerce-chart/
├── Chart.yaml
├── values.yaml
├── values-staging.yaml
├── values-production.yaml
└── templates/
    ├── _helpers.tpl
    ├── deployment.yaml
    ├── service.yaml
    ├── configmap.yaml
    ├── secret.yaml
    ├── hpa.yaml
    └── ingress.yaml
```

### 値.yaml

```yaml
# values.yaml
global:
  namespace: ecommerce
  imageRegistry: ghcr.io/xdev

services:
  product:
    name: product-service
    image:
      tag: latest
    replicas: 2
    resources:
      requests:
        cpu: 100m
        memory: 64Mi
      limits:
        cpu: 500m
        memory: 128Mi
    hpa:
      enabled: true
      minReplicas: 2
      maxReplicas: 10
      targetCPU: 70

  order:
    name: order-service
    image:
      tag: latest
    replicas: 2
    resources:
      requests:
        cpu: 100m
        memory: 64Mi
      limits:
        cpu: 500m
        memory: 128Mi

  payment:
    name: payment-service
    image:
      tag: latest
    replicas: 2

  notification:
    name: notification-service
    image:
      tag: latest
    replicas: 1

ingress:
  enabled: true
  host: api.ecommerce.xdev.asia
  tls: true
```

### 値-production.yaml

```yaml
# values-production.yaml
services:
  product:
    replicas: 3
    resources:
      limits:
        cpu: "1"
        memory: 256Mi
    hpa:
      minReplicas: 3
      maxReplicas: 20
  order:
    replicas: 3
  payment:
    replicas: 2
```

### デプロイ

```bash
# Install
helm install ecommerce ./ecommerce-chart \
  -n ecommerce --create-namespace \
  -f values-production.yaml

# Upgrade
helm upgrade ecommerce ./ecommerce-chart \
  -n ecommerce \
  -f values-production.yaml \
  --set services.product.image.tag=v1.2.0

# Rollback
helm rollback ecommerce 1 -n ecommerce
```

## GitHub アクション CI/CD

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_PREFIX: ghcr.io/${{ github.repository_owner }}

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        service:
          - product-service
          - order-service
          - payment-service
          - notification-service
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          java-version: '21'
          distribution: 'temurin'
          cache: maven
      - name: Run tests
        run: |
          cd ${{ matrix.service }}
          ./mvnw verify

  contract-test:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          java-version: '21'
          distribution: 'temurin'
      - name: Consumer contract tests
        run: |
          cd order-service
          ./mvnw test -Dtest="*ContractTest"
      - name: Provider verification
        run: |
          cd product-service
          ./mvnw test -Dtest="*ContractVerificationTest"

  build-and-push:
    needs: [test, contract-test]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    strategy:
      matrix:
        service:
          - product-service
          - order-service
          - payment-service
          - notification-service
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          java-version: '21'
          distribution: 'temurin'
          cache: maven
      - name: Login to GHCR
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - name: Build native image & push
        run: |
          cd ${{ matrix.service }}
          ./mvnw package -Dnative \
            -Dquarkus.native.container-build=true \
            -Dquarkus.container-image.build=true \
            -Dquarkus.container-image.push=true \
            -Dquarkus.container-image.registry=ghcr.io \
            -Dquarkus.container-image.group=\
              ${{ github.repository_owner }} \
            -Dquarkus.container-image.tag=\
              ${{ github.sha }} \
            -DskipTests

  deploy-staging:
    needs: build-and-push
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - uses: actions/checkout@v4
      - name: Set up kubectl
        uses: azure/setup-kubectl@v4
      - name: Set K8s context
        uses: azure/k8s-set-context@v4
        with:
          kubeconfig: ${{ secrets.KUBE_CONFIG_STAGING }}
      - name: Deploy to staging
        run: |
          helm upgrade --install ecommerce \
            ./ecommerce-chart \
            -n ecommerce-staging \
            --create-namespace \
            -f ecommerce-chart/values-staging.yaml \
            --set global.imageTag=${{ github.sha }}

  deploy-production:
    needs: deploy-staging
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: actions/checkout@v4
      - name: Set up kubectl
        uses: azure/setup-kubectl@v4
      - name: Set K8s context
        uses: azure/k8s-set-context@v4
        with:
          kubeconfig: ${{ secrets.KUBE_CONFIG_PRODUCTION }}
      - name: Deploy to production
        run: |
          helm upgrade --install ecommerce \
            ./ecommerce-chart \
            -n ecommerce \
            --create-namespace \
            -f ecommerce-chart/values-production.yaml \
            --set global.imageTag=${{ github.sha }}
      - name: Verify deployment
        run: |
          kubectl rollout status deployment/product-service \
            -n ecommerce --timeout=300s
          kubectl rollout status deployment/order-service \
            -n ecommerce --timeout=300s
```

## Kubernetes での監視

### Prometheus 用 ServiceMonitor

```yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: quarkus-services
  namespace: ecommerce
  labels:
    release: prometheus
spec:
  selector:
    matchLabels:
      app.kubernetes.io/part-of: ecommerce
  endpoints:
    - port: http
      path: /q/metrics
      interval: 15s
```

### Grafana ダッシュボード

ダッシュボード ID **14370** (Quarkus Microprofile Metrics) をインポートするか、カスタムを作成します。

```json
{
  "dashboard": {
    "title": "E-Commerce Platform",
    "panels": [
      {
        "title": "Request Rate",
        "targets": [{
          "expr": "rate(http_server_requests_seconds_count{namespace='ecommerce'}[5m])"
        }]
      },
      {
        "title": "P99 Latency",
        "targets": [{
          "expr": "histogram_quantile(0.99, rate(http_server_requests_seconds_bucket{namespace='ecommerce'}[5m]))"
        }]
      },
      {
        "title": "Error Rate",
        "targets": [{
          "expr": "rate(http_server_requests_seconds_count{namespace='ecommerce',status=~'5..'}[5m])"
        }]
      }
    ]
  }
}
```

## 制作チェックリスト

|カテゴリー |アイテム |ステータス |
|----------|----------|----------|
| **セキュリティ** |暗号化されたシークレット (Sealed Secret) | ☐ |
| **セキュリティ** |ネットワーク ポリシーが構成されました | ☐ |
| **セキュリティ** |サービス アカウントの RBAC | ☐ |
| **信頼性** |正常性プローブが構成されました | ☐ |
| **信頼性** | HPA が設定されました | ☐ |
| **信頼性** | PodDisruption予算セット | ☐ |
| **可観測性** |分散トレーシング (Jaeger) | ☐ |
| **可観測性** |メトリクス (Prometheus + Grafana) | ☐ |
| **可観測性** |集中ログ (EFK/Loki) | ☐ |
| **CI/CD** |自動テスト | ☐ |
| **CI/CD** |受託テスト | ☐ |
| **CI/CD** |自動展開 | ☐ |
| **CI/CD** |ロールバック戦略 | ☐ |

## 演習

1. 次のコマンドを使用して Kubernetes マニフェストを生成します `quarkus-kubernetes` 拡張子
2. Eコマースプラットフォーム用のHelmチャートを作成する
3. GitHub Actions CI/CD パイプラインのセットアップ
4. ローカル Kubernetes (minikube/kind) にデプロイします。
5. HPA を構成し、自動スケーリングを確認する
6. Prometheus + Grafana モニタリングのセットアップ

## シリーズの概要

22 のレッスンを通じて、以下を完全に構築しました。

1. **Quarkus プラットフォーム** — REST API、PostgreSQL、検証
2. **マイクロサービス設計** — DDD、サービスごとのデータベース、4 つの実用的なサービス
3. **セキュリティ** — Keycloak OIDC、RBAC、トークン伝播
4. **通信** — REST クライアント、gRPC、Kafka イベント駆動型
5. **復元力と可観測性** — フォールト トレランス、OpenTelemetry、キャッシング
6. **テスト** — @QuarkusTest、契約テスト
7. **本番環境** — GraalVM ネイティブ、Kubernetes、CI/CD

**次のステップ**:
- 分散トランザクション用に **Saga パターン** を追加
- **GraphQL** API ゲートウェイ (quarkus-smallrye-graphql)
- **サービス メッシュ** (Istio) トラフィック管理用
- ArgoCD を使用した **GitOps**
- **Quarkus Virtual Threads** (Project Loom) リアクティブ ワークロード用
