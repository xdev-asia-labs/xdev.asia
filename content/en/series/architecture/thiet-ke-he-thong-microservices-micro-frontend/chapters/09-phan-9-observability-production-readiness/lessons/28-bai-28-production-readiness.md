---
id: 019e4a33-d428-7b20-c001-b1c2d3e4f528
title: 'Lesson 28: Production Readiness Checklist — Security, Reliability & Compliance'
slug: bai-28-production-readiness-checklist-security-reliability-compliance
description: >-
  Comprehensive production readiness checklist. Security: OWASP Top 10, secret
  management, network policies. Reliability: health checks, circuit breakers,
  graceful shutdown. Disaster recovery, backup strategies.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 28
section_title: 'Part 9: Observability & Production Readiness'
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: Microservices & Micro Frontend system design — From basics to Production
  slug: thiet-ke-he-thong-microservices-micro-frontend
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ Architecture — Lesson 28</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 28: Production Readiness Checklist —</tspan>
      <tspan x="60" dy="42">Security, Reliability & Compliance</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Microservices & Micro Frontend system design — From basics to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 9: Observability & Production Readiness</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Before going live, the system needs to go through **Production Readiness Review**. This article provides a comprehensive checklist for both Microservices and Micro Frontend.

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

| Components | RPO | RTO | Strategy |
|-----------|-----|-----|----------|
| PostgreSQL | 1 min | 15 min | Streaming replica + WAL archiving |
| Redis | 5 min | 5 min | Redis Sentinel + AOF |
| Kafka | 0 | 5 min | Multi-broker, replication factor 3 |
| MFE Assets | 0 | 1 min | Multi-region CDN |
| K8s Cluster | N/A | 30 min | Multi-AZ, backed-up etcd |

---

## Summary

- **Security**: OWASP, secrets management, network policies
- **Reliability**: health checks, circuit breakers, graceful shutdown
- **Observability**: logs, metrics, traces, alerting
- **Disaster Recovery**: backups tested, RPO/RTO defined
- **Checklist**: review before every production deployment

---

**Next article:** [Lesson 29: Case Study — E-Commerce Platform Migration](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-29-case-study-e-commerce-platform-trien-khai-thuc-te)
