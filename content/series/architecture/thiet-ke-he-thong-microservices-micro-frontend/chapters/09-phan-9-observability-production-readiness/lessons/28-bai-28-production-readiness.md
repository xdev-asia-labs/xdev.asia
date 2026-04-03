---
id: 019e4a33-d428-7b20-c001-b1c2d3e4f528
title: "Bài 28: Production Readiness Checklist — Security, Reliability & Compliance"
slug: bai-28-production-readiness-checklist-security-reliability-compliance
description: >-
  Production readiness checklist toàn diện. Security: OWASP Top 10, secret management, network policies. Reliability: health checks, circuit breakers, graceful shutdown. Disaster recovery, backup strategies.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 28
section_title: "Phần 9: Observability & Production Readiness"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Trước khi go-live, hệ thống cần qua **Production Readiness Review**. Bài này cung cấp checklist toàn diện cho cả Microservices lẫn Micro Frontend.

---

## 1. Security Checklist

### 1.1 Application Security

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

### 1.2 Secret Management

```
❌ Secrets in code / environment variables:
DB_PASSWORD=mysecretpassword

✅ External secret management:
├── HashiCorp Vault
├── AWS Secrets Manager
├── Kubernetes External Secrets
└── Sealed Secrets (GitOps-friendly)
```

### 1.3 Network Security

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

## 2. Reliability Checklist

### 2.1 Health Checks

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

### 2.2 Circuit Breaker

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

### 2.3 Graceful Shutdown

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

### 2.4 Resource Limits

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

## 3. Production Readiness Checklist

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

## 4. Disaster Recovery

| Component | RPO | RTO | Strategy |
|-----------|-----|-----|----------|
| PostgreSQL | 1 min | 15 min | Streaming replica + WAL archiving |
| Redis | 5 min | 5 min | Redis Sentinel + AOF |
| Kafka | 0 | 5 min | Multi-broker, replication factor 3 |
| MFE Assets | 0 | 1 min | Multi-region CDN |
| K8s Cluster | N/A | 30 min | Multi-AZ, backed-up etcd |

---

## Tóm tắt

- **Security**: OWASP, secrets management, network policies
- **Reliability**: health checks, circuit breakers, graceful shutdown
- **Observability**: logs, metrics, traces, alerting
- **Disaster Recovery**: backups tested, RPO/RTO defined
- **Checklist**: review before every production deployment

---

**Bài tiếp theo:** [Bài 29: Case Study — E-Commerce Platform Migration](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-29-case-study-e-commerce-platform-trien-khai-thuc-te)
