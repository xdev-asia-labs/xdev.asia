---
id: 019d8a22-c323-7a10-b001-a1b2c3d4e523
title: "Bài 23: Deployment Strategies — Canary, Blue/Green & Progressive Delivery"
slug: bai-23-deployment-strategies-canary-blue-green-progressive-delivery
description: >-
  Rolling Update, Blue/Green Deployment, Canary Release, A/B Testing,
  progressive delivery với Argo Rollouts/Flagger, automated canary analysis,
  rollback strategies và feature flags.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 23
section_title: "Phần 7: CI/CD & Deployment Strategies"
course:
  id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
  title: "Cloud Native Microservices Architecture"
  slug: cloud-native-microservices-architecture
---

![Bài 23: Deployment Strategies — Canary, Blue/Green & Progressive Delivery](/storage/uploads/2026/03/cn-bai-23-diagram.png)

## Giới thiệu

Deploy một version mới lên production luôn tiềm ẩn rủi ro. Câu hỏi là: **Deploy như thế nào để minimize risk?**

Các chiến lược deployment hiện đại cho phép bạn rollout changes dần dần, quan sát behavior, và rollback tức thì nếu có vấn đề — thay vì "deploy tất cả và cầu nguyện".

---

## 1. Rolling Update — Kubernetes Default

### 1.1 Cơ chế

```
Before:  [v1][v1][v1][v1][v1]  (5 pods v1)

Step 1:  [v1][v1][v1][v1][v2]  (+1 v2, 0 downtime)
Step 2:  [v1][v1][v1][v2][v2]  (-1 v1, +1 v2)
Step 3:  [v1][v1][v2][v2][v2]
Step 4:  [v1][v2][v2][v2][v2]
After:   [v2][v2][v2][v2][v2]  (5 pods v2)

Traffic: Luôn có pods phục vụ (v1 hoặc v2)
```

### 1.2 Cấu hình

```yaml
spec:
  replicas: 5
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1         # Tối đa 1 pod extra trong quá trình update
      maxUnavailable: 0   # Không có pod nào bị down (0 downtime)
```

### 1.3 Hạn chế

- Trong quá trình deploy, có cả **v1 và v2 cùng phục vụ traffic**
- Không phù hợp khi v2 có breaking API changes so với v1
- Khó rollback nhanh (phải chờ rolling update ngược lại)

---

## 2. Blue/Green Deployment

### 2.1 Cơ chế

```
Blue environment (v1 — currently live):
  [v1][v1][v1][v1][v1]
        ↑
    Traffic (100%)

Chuẩn bị Green environment (v2 — idle):
  [v2][v2][v2][v2][v2]
        ↑
    Traffic (0%) — chỉ internal testing

Switch traffic (atomic):
  Blue  [v1][v1][v1][v1][v1] ← Traffic (0%)
  Green [v2][v2][v2][v2][v2] ← Traffic (100%)

Nếu v2 OK: Hủy Blue environment
Nếu v2 lỗi: Switch lại Blue (< 1 phút)
```

### 2.2 Kubernetes Implementation

```yaml
# Blue Service (v1)
apiVersion: v1
kind: Service
metadata:
  name: order-service
spec:
  selector:
    app: order-service
    version: blue         # ← Chỉ route vào Blue pods
  ports:
    - port: 8080

---
# Blue Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service-blue
spec:
  replicas: 5
  selector:
    matchLabels:
      app: order-service
      version: blue
  template:
    metadata:
      labels:
        app: order-service
        version: blue
    spec:
      containers:
        - name: app
          image: order-service:v1

---
# Green Deployment (running idle, being tested)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service-green
spec:
  replicas: 5
  selector:
    matchLabels:
      app: order-service
      version: green
  template:
    metadata:
      labels:
        app: order-service
        version: green
    spec:
      containers:
        - name: app
          image: order-service:v2
```

```bash
# Switch traffic sang Green (atomic patch)
kubectl patch service order-service -p '{"spec":{"selector":{"version":"green"}}}'

# Rollback — switch lại Blue (< 5 giây)
kubectl patch service order-service -p '{"spec":{"selector":{"version":"blue"}}}'
```

### 2.3 Ưu nhược điểm

**Ưu điểm**: Zero-downtime, rollback cực nhanh, test v2 trước khi live

**Nhược điểm**: Tốn double resources (chạy cả Blue và Green), session state phải stateless (vì switch sẽ mất session)

---

## 3. Canary Release

### 3.1 Cơ chế

Thay vì switch tất cả, gửi một **lượng nhỏ traffic** sang version mới trước:

```
  v1 pods (90% traffic):  [v1][v1][v1][v1][v1]
  v2 pods (10% traffic):  [v2]

  Sau 30 phút, không có vấn đề → tăng:
  v1 pods (75% traffic):  [v1][v1][v1]
  v2 pods (25% traffic):  [v2][v2]

  Sau 1 giờ → tăng:
  v1 pods (50%) / v2 pods (50%)

  Sau 2 giờ → v2 = 100%
```

### 3.2 Istio Traffic Splitting

```yaml
# VirtualService — định nghĩa traffic split
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: order-service
spec:
  hosts:
    - order-service
  http:
    - route:
        - destination:
            host: order-service
            subset: v1
          weight: 90       # 90% traffic → v1
        - destination:
            host: order-service
            subset: v2
          weight: 10       # 10% traffic → v2

---
# DestinationRule — định nghĩa subsets
apiVersion: networking.istio.io/v1beta1
kind: DestinationRule
metadata:
  name: order-service
spec:
  host: order-service
  subsets:
    - name: v1
      labels:
        version: v1
    - name: v2
      labels:
        version: v2
```

---

## 4. Progressive Delivery với Argo Rollouts

Argo Rollouts tự động hóa canary deployment với **automated analysis**:

### 4.1 Rollout Definition

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: order-service
spec:
  replicas: 10
  selector:
    matchLabels:
      app: order-service

  template:
    metadata:
      labels:
        app: order-service
    spec:
      containers:
        - name: order-service
          image: order-service:v2  # ← CI update này

  strategy:
    canary:
      # Các bước canary tự động
      steps:
        - setWeight: 10   # Bước 1: 10% traffic
        - pause: {duration: 10m}   # Chờ 10 phút
        - analysis:
            templates:
              - templateName: success-rate
        - setWeight: 25   # Bước 2: 25% nếu analysis pass
        - pause: {duration: 10m}
        - setWeight: 50   # Bước 3: 50%
        - pause: {duration: 10m}
        - setWeight: 100  # Bước 4: 100%

      # Service Mesh integration
      trafficRouting:
        istio:
          virtualService:
            name: order-service

      # Nếu analysis fail → tự động rollback
      autoPromotionEnabled: false  # Require explicit promotion
```

### 4.2 AnalysisTemplate — Automated Canary Analysis

```yaml
apiVersion: argoproj.io/v1alpha1
kind: AnalysisTemplate
metadata:
  name: success-rate
spec:
  args:
    - name: service-name
  metrics:
    # Metric 1: Error rate phải < 5%
    - name: success-rate
      interval: 1m
      count: 5          # Đo 5 lần
      successCondition: result[0] >= 0.95
      failureLimit: 2   # Cho phép fail ≤ 2 lần
      provider:
        prometheus:
          address: http://prometheus.monitoring:9090
          query: |
            sum(rate(http_requests_total{
              service="{{args.service-name}}",
              status!~"5.."
            }[5m]))
            /
            sum(rate(http_requests_total{
              service="{{args.service-name}}"
            }[5m]))

    # Metric 2: p99 latency phải < 500ms
    - name: latency-p99
      interval: 1m
      count: 5
      successCondition: result[0] < 0.5
      failureLimit: 2
      provider:
        prometheus:
          address: http://prometheus.monitoring:9090
          query: |
            histogram_quantile(0.99,
              sum(rate(http_request_duration_seconds_bucket{
                service="{{args.service-name}}"
              }[5m])) by (le)
            )

    # Metric 3: Compare canary vs baseline (kayenta style)
    - name: error-rate-canary-vs-stable
      interval: 2m
      count: 3
      successCondition: result[0] <= 1.5  # Canary không tệ hơn stable 1.5x
      provider:
        prometheus:
          query: |
            (
              sum(rate(http_requests_total{service="order-service",version="canary",status=~"5.."}[5m]))
              /
              sum(rate(http_requests_total{service="order-service",version="canary"}[5m]))
            ) / (
              sum(rate(http_requests_total{service="order-service",version="stable",status=~"5.."}[5m]))
              /
              sum(rate(http_requests_total{service="order-service",version="stable"}[5m]))
            )
```

### 4.3 Manual Control

```bash
# CLI để interact với rollout
kubectl argo rollouts get rollout order-service --watch

# Promote manually (nếu autoPromotionEnabled: false)
kubectl argo rollouts promote order-service

# Abort và rollback
kubectl argo rollouts abort order-service

# Undo về stable
kubectl argo rollouts undo order-service
```

---

## 5. A/B Testing

A/B Testing route traffic dựa trên **user attributes** (không phải random %):

```yaml
# Istio VirtualService với header-based routing
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: order-service
spec:
  http:
    # Route users với header X-Beta-User: true → v2
    - match:
        - headers:
            x-beta-user:
              exact: "true"
      route:
        - destination:
            host: order-service
            subset: v2

    # Route users ở EU → v2 (geographic test)
    - match:
        - headers:
            x-user-region:
              exact: "EU"
      route:
        - destination:
            host: order-service
            subset: v2

    # Tất cả còn lại → v1
    - route:
        - destination:
            host: order-service
            subset: v1
```

---

## 6. Feature Flags

Feature flags tách biệt **deploy** và **release**:

```
Deploy: Upload code lên server (mọi user không thấy)
Release: Bật feature cho users chọn lọc (flag = on)

Cho phép:
- Dark launch: deploy trước, release sau
- Ring deployment: internal → beta users → 10% → 100%
- Hotfix without redeploy: tắt feature ngay bằng flag
```

```java
// OpenFeature + FlagD
@Autowired
Client featureClient;

public Order createOrder(CreateOrderRequest request) {
    // Check feature flag
    boolean useNewCheckout = featureClient.getBooleanValue(
        "new-checkout-flow",
        false,  // default
        EvaluationContext.builder()
            .targetingKey(request.getCustomerId())
            .add("plan", request.getCustomer().getPlan())
            .build()
    );

    if (useNewCheckout) {
        return newCheckoutService.process(request);
    } else {
        return legacyCheckoutService.process(request);
    }
}
```

```yaml
# FlagD manifest (feature flag definitions)
flags:
  new-checkout-flow:
    state: ENABLED
    variants:
      "on": true
      "off": false
    defaultVariant: "off"
    targeting:
      # 20% users ngẫu nhiên
      fractional:
        - ["on", 20]
        - ["off", 80]
```

---

## 7. So sánh các chiến lược

| Strategy | Downtime | Resource Cost | Rollback Speed | Risk Level | Phù hợp |
|----------|----------|---------------|----------------|------------|---------|
| Rolling Update | 0 | 1x | Chậm (rolling) | Trung bình | Default cho stateless services |
| Blue/Green | 0 | 2x | Nhanh (<1 min) | Thấp | Khi cần rollback tức thì |
| Canary | 0 | 1x | Nhanh | Rất thấp | Khi muốn validate trên real traffic |
| A/B Testing | 0 | 1x | Nhanh | Thấp | Validate UX/business metric |
| Feature Flags | 0 | 1x | Tức thì (flag off) | Rất thấp | Gradual release, dark launch |

---

## 8. Best Practices

```
1. Luôn có readiness probe trước khi traffic vào
2. Graceful shutdown — drain in-flight requests trước khi pod down
3. Không deploy vào peak hours
4. Automated rollback khi error rate tăng
5. Canary trước production cho mọi breaking change
6. Feature flags cho long-running features
7. Post-deployment monitoring 30 phút
8. Runbook sẵn sàng trước mỗi deploy
```

---

## Tóm tắt

| Khái niệm | Mục đích |
|-----------|---------|
| Rolling Update | Zero-downtime, default Kubernetes strategy |
| Blue/Green | Instant rollback, no traffic mixing |
| Canary | Validate trên small % real traffic |
| Argo Rollouts | Automated progressive delivery với analysis |
| AnalysisTemplate | Tự động pass/fail canary dựa trên metrics |
| A/B Testing | Route theo user attributes |
| Feature Flags | Tách deploy và release |

**Bài tiếp theo**: Authentication & Authorization — OAuth2, JWT & OIDC
