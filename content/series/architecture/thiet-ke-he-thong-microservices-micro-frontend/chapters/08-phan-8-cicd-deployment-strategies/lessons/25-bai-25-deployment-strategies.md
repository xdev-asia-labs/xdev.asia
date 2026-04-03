---
id: 019e4a33-d425-7b20-c001-b1c2d3e4f525
title: "Bài 25: Deployment Strategies — Blue/Green, Canary & Rolling"
slug: bai-25-deployment-strategies-blue-green-canary-rolling
description: >-
  So sánh deployment strategies: Rolling Update, Blue/Green, Canary, A/B Testing. Kubernetes deployment strategies. Argo Rollouts cho progressive delivery. Feature flags với LaunchDarkly/Unleash. Rollback strategies.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 25
section_title: "Phần 8: CI/CD & Deployment Strategies"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Deploy microservices lên production là thời điểm rủi ro nhất. Deployment strategy quyết định **blast radius** khi có bug — ảnh hưởng 100% users hay chỉ 5%? Bài này so sánh các chiến lược và hướng dẫn chọn phù hợp.

---

## 1. Rolling Update

```
Kubernetes mặc định:

Pod v1 ●●●●●  (5 replicas)

Deploy v2:
Step 1: ●●●●● + ○     (1 new pod v2 starting)
Step 2: ●●●● + ○○      (2 v2 ready, 1 v1 terminated)
Step 3: ●●● + ○○○      (3 v2 ready)
Step 4: ●● + ○○○○
Step 5: ○○○○○           (all v2)

● = v1, ○ = v2
```

**Ưu điểm:** Zero downtime, gradual, K8s native
**Nhược điểm:** Mixed versions during rollout, rollback slow
**Use case:** Low-risk changes, stateless services

---

## 2. Blue/Green Deployment

```
Blue (current, live):  ●●●●●  ← traffic
Green (new, staging):  ○○○○○  ← no traffic

Test Green thoroughly, then switch:

Blue:  ●●●●●  ← no traffic (standby)
Green: ○○○○○  ← ALL traffic switched instantly
```

**Ưu điểm:** Instant rollback (switch back to blue), full testing before live
**Nhược điểm:** 2x resources needed, database migration phải backward compatible
**Use case:** Critical services, khi cần instant rollback

---

## 3. Canary Deployment ⭐

```
Step 1: ●●●●● (100% v1)
Step 2: ●●●●○ (90% v1, 10% v2) ← canary
Step 3: Monitor metrics (error rate, latency, CPU)
Step 4a: Metrics OK → ●●●○○ → ●●○○○ → ○○○○○ (promote)
Step 4b: Metrics BAD → ●●●●● (rollback, remove canary)
```

**Ưu điểm:** Smallest blast radius, data-driven promotion
**Nhược điểm:** Complex setup, needs good monitoring
**Use case:** Most production deployments — **recommended default**

---

## 4. Argo Rollouts (Progressive Delivery)

```yaml
# rollout.yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: product-service
spec:
  replicas: 5
  strategy:
    canary:
      canaryService: product-service-canary
      stableService: product-service-stable
      steps:
        - setWeight: 5
        - pause: { duration: 5m }
        - setWeight: 20
        - pause: { duration: 10m }
        - setWeight: 50
        - pause: { duration: 15m }
        - setWeight: 100
      analysis:
        templates:
          - templateName: success-rate
        startingStep: 2
        args:
          - name: service-name
            value: product-service

---
apiVersion: argoproj.io/v1alpha1
kind: AnalysisTemplate
metadata:
  name: success-rate
spec:
  metrics:
    - name: success-rate
      interval: 1m
      successCondition: result[0] >= 0.99
      provider:
        prometheus:
          address: http://prometheus:9090
          query: |
            sum(rate(http_requests_total{service="{{args.service-name}}",code=~"2.."}[5m]))
            /
            sum(rate(http_requests_total{service="{{args.service-name}}"}[5m]))
```

---

## 5. Feature Flags

Deploy code to production **without enabling** for users:

```javascript
// Feature flag check
const unleash = require('unleash-client');

app.get('/api/products', (req, res) => {
  const products = getProducts();
  
  if (unleash.isEnabled('new-recommendation-engine', {
    userId: req.user.id
  })) {
    // New feature, enabled for specific users
    products.forEach(p => {
      p.recommendations = newEngine.getRecommendations(p.id);
    });
  }
  
  res.json(products);
});
```

### Feature Flags + Canary

```
1. Deploy v2 with feature flag OFF → 100% users get old behavior
2. Enable flag for 5% users → monitor
3. Gradually increase → 20% → 50% → 100%
4. Remove flag from code after full rollout
```

---

## 6. Decision Matrix

| Strategy | Risk | Speed | Cost | Rollback | Best For |
|----------|------|-------|------|----------|----------|
| **Rolling** | Medium | Slow | Low | Slow | Low-risk changes |
| **Blue/Green** | Low | Fast | High (2x) | Instant | Critical services |
| **Canary** | Very Low | Medium | Low | Fast | Default choice |
| **Feature Flags** | Very Low | Instant | Low | Instant | UX changes |

### Khuyến nghị

```
E-Commerce Platform:
├── Backend services: Canary (Argo Rollouts) + Auto analysis
├── Micro Frontends: Canary via CDN traffic splitting 
├── Database changes: Blue/Green (backward compatible)
└── UI features: Feature flags (Unleash)
```

---

## 7. Rollback Strategy

| Component | Rollback Method |
|-----------|----------------|
| K8s Deployment | `kubectl rollout undo` |
| Argo Rollout | Auto-rollback on failed analysis |
| MFE on CDN | Point to previous version |
| Database | Forward migration (never rollback schema) |
| Feature Flag | Disable flag instantly |

---

## Tóm tắt

- **Rolling Update**: K8s default, simple, good for low-risk
- **Blue/Green**: instant rollback, 2x cost
- **Canary**: smallest blast radius — **recommended default**
- **Argo Rollouts**: automated progressive delivery with analysis
- **Feature Flags**: deploy ≠ release, instant enable/disable

---

**Bài tiếp theo:** [Bài 26: Full-Stack Observability — Logs, Metrics & Traces](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-26-full-stack-observability-logs-metrics-traces)
