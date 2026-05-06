---
id: 019e4a33-d428-7b20-c001-b1c2d3e4f528
title: 第 28 課：生產準備清單 — 安全性、可靠性和合規性
slug: bai-28-production-readiness-checklist-security-reliability-compliance
description: 全面的生產準備清單。安全性：OWASP Top 10、秘密管理、網路策略。可靠性：健康檢查、斷路器、正常關閉。災難復原、備份策略。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 28
section_title: 第 9 部分：可觀察性與生產準備情況
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: 微服務與微前端系統設計－從基礎到生產
  slug: thiet-ke-he-thong-microservices-micro-frontend
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8837" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8837)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1047" cy="31" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="994" cy="118" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="941" cy="205" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="888" cy="32" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="835" cy="119" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="81" x2="1100" y2="161" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="111" x2="1050" y2="181" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1062.1769145362398,213 1062.1769145362398,249 1031,267 999.8230854637602,249 999.8230854637602,213 1031,195" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ 建築 — 第 28 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 28 課：生產準備清單 —</tspan>
      <tspan x="60" dy="42">安全性、可靠性和合規性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微服務與微前端系統設計－從基礎到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 9 部分：可觀察性與生產準備情況</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在上線之前，系統需要經過**生產準備審核**。本文提供了微服務和微前端的全面清單。

---

## 1. 安全檢查表

### 1.1 應用程式安全

```
✅ OWASP Top 10 reviewed:
├── SQL Injection → Parameterized queries
├── XSS → CSP headers, output encoding
├── CSRF → SameSite cookies, CSRF tokens
├── Broken Auth → OAuth2/OIDC, MFA
├── Security Misconfiguration → Hardened defaults
├── Sensitive Data Exposure → Encrypt at rest + transit
├── Broken Access Control → RBAC, resource-level checks
└── Injection → Input validation, allow-lists
```

### 1.2 秘密管理

```
❌ Secrets in code / environment variables:
DB_PASSWORD=mysecretpassword

✅ External secret management:
├── HashiCorp Vault
├── AWS Secrets Manager
├── Kubernetes External Secrets
└── Sealed Secrets (GitOps-friendly)
```

### 1.3 網路安全

```yaml
# Kubernetes Network Policy
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: product-service
spec:
  podSelector:
    matchLabels:
      app: product-service
  policyTypes: [Ingress, Egress]
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app: api-gateway
      ports:
        - port: 8080
```

---

## 2. 可靠性檢查表

### 2.1 健康檢查

```javascript
// Liveness: is the process alive?
app.get('/health/live', (req, res) => {
  res.status(200).json({ status: 'alive' });
});

// Readiness: can it serve traffic?
app.get('/health/ready', async (req, res) => {
  const dbOk = await checkDB();
  const redisOk = await checkRedis();
  
  if (dbOk && redisOk) {
    res.status(200).json({ status: 'ready' });
  } else {
    res.status(503).json({ status: 'not ready', db: dbOk, redis: redisOk });
  }
});
```

### 2.2 斷路器

```
Normal:     Service A ──► Service B (responding)
Open:       Service A ──✕ Service B (down, circuit open)
Half-Open:  Service A ──? Service B (testing 1 request)
Closed:     Service A ──► Service B (recovered)

Settings:
├── Failure threshold: 5 failures in 30s → OPEN
├── Reset timeout: 30s → try HALF-OPEN
├── Success threshold: 3 successes → CLOSE
└── Fallback: return cached/default data
```

### 2.3 正常關機

```javascript
// Handle SIGTERM gracefully
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down...');
  
  // 1. Stop accepting new requests
  server.close();
  
  // 2. Wait for in-flight requests (max 30s)
  await waitForInflightRequests(30000);
  
  // 3. Close DB connections
  await db.close();
  
  // 4. Close message broker connections
  await kafka.disconnect();
  
  console.log('Shutdown complete');
  process.exit(0);
});
```

### 2.4 資源限制

```yaml
# K8s resource limits
resources:
  requests:
    cpu: 100m
    memory: 256Mi
  limits:
    cpu: 500m
    memory: 512Mi

# HPA (auto-scaling)
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
spec:
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
```

---

## 3. 生產準備清單

```
INFRASTRUCTURE:
☐ Kubernetes cluster with node pools
☐ Auto-scaling (HPA) configured
☐ Resource limits set for all pods
☐ Network policies defined
☐ Ingress/Load balancer configured
☐ SSL/TLS certificates (auto-renew)

SECURITY:
☐ OWASP Top 10 reviewed
☐ Secrets in Vault (not env vars)
☐ RBAC policies configured
☐ Container image scanning
☐ Dependency vulnerability scanning
☐ CSP headers configured

RELIABILITY:
☐ Health checks (liveness + readiness)
☐ Circuit breakers for external calls
☐ Graceful shutdown handlers
☐ Retry policies with backoff
☐ Timeouts configured
☐ PodDisruptionBudget set

OBSERVABILITY:
☐ Structured logging (JSON)
☐ Metrics (RED method)
☐ Distributed tracing
☐ Alerting rules defined
☐ Dashboards created
☐ On-call rotation set

DATA:
☐ Database backups (automated, tested)
☐ Database migration strategy
☐ Data retention policies
☐ GDPR/privacy compliance
☐ Encryption at rest

DEPLOYMENT:
☐ CI/CD pipeline tested
☐ Rollback strategy documented
☐ Canary deployment configured
☐ Feature flags for risky features
☐ Runbook documented
```

---

## 4.災難復原

|組件|復原點目標 | RTO |戰略|
|------------|-----|-----|----------|
| PostgreSQL | 1 分鐘 | 15 分鐘 |串流副本 + WAL 檔案 |
| Redis | 5 分鐘 | 5 分鐘 | Redis哨兵+AOF |
|卡夫卡| 0 | 5 分鐘 |多經紀商，複製因子 3 |
| MFE 資產 | 0 | 1 分鐘 |多區域CDN |
| K8s叢集 |不適用 | 30 分鐘 |多可用區、備份 etcd |

---

## 總結

- **安全性**：OWASP、機密管理、網路策略
- **可靠性**：健康檢查、斷路器、正常關閉
- **可觀察性**：日誌、指標、追蹤、警報
- **災難復原**：備份經過測試，RPO/RTO 已定義
- **清單**：每次生產部署前進行檢查

---

**下一篇文章：** [第 29 課：案例研究 — 電子商務平台遷移](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-29-case-study-e-commerce-platform-trien-khai-thuc-te)
