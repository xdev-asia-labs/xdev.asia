---
id: 019d8a22-c313-7a10-b001-a1b2c3d4e513
title: 'Lesson 13: Service Mesh — Istio & Linkerd'
slug: bai-13-service-mesh-istio-linkerd
description: >-
  Service Mesh architecture (Data Plane + Control Plane), Sidecar Proxy pattern,
  Istio components (Pilot, Citadel, Galley), traffic management (canary, A/B),
  comparison of Istio vs Linkerd, installation and configuration on Kubernetes.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: 'Part 4: Service Mesh & Networking'
course:
  id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
  title: Cloud Native Microservices Architecture
  slug: cloud-native-microservices-architecture
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5598" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5598)"/>

  <!-- Decorations -->
  <g>
    <circle cx="816" cy="178" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1032" cy="54" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="748" cy="190" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="964" cy="66" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="680" cy="202" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="218" x2="1100" y2="298" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="248" x2="1050" y2="318" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="946.5788383248864,101.5 946.5788383248864,134.5 918,151 889.4211616751136,134.5 889.4211616751135,101.50000000000001 918,85" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ Architecture — Lesson 13</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 13: Service Mesh — Istio & Linkerd</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Cloud Native Microservices Architecture</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Service Mesh & Networking</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

![Lesson 13: Service Mesh — Istio & Linkerd](/storage/uploads/2026/03/cn-bai-13-diagram.png)

## Introduction

As the number of microservices increases, managing service-to-service communication becomes complex: mTLS, retry, circuit breaker, tracing, traffic splitting... **Service Mesh** solves by taking all the networking logic out of the application code into the **infrastructure layer**.

---

## 1. Service Mesh Architecture

### 1.1 Concept

Service Mesh is a **dedicated infrastructure layer** that handles service-to-service communication through a network proxy (sidecar) injected into each pod:

```
Không có Service Mesh:
┌──────────┐                    ┌──────────┐
│ Service A│                    │ Service B│
│          │                    │          │
│ ┌──────┐ │     HTTP/gRPC     │ ┌──────┐ │
│ │ App  │─┼───────────────────┼▶│ App  │ │
│ │ Code │ │                    │ │ Code │ │
│ │      │ │  Circuit breaker,  │ │      │ │
│ │ +retry│ │  mTLS, tracing... │ │      │ │
│ │ +auth │ │  ← TRONG app code │ │      │ │
│ └──────┘ │                    │ └──────┘ │
└──────────┘                    └──────────┘

Có Service Mesh:
┌──────────────┐                ┌──────────────┐
│ Pod A        │                │ Pod B        │
│              │                │              │
│ ┌──────────┐ │                │ ┌──────────┐ │
│ │ App Code │ │                │ │ App Code │ │
│ │ (simple) │ │                │ │ (simple) │ │
│ └────┬─────┘ │                │ └────▲─────┘ │
│      │       │                │      │       │
│ ┌────▼─────┐ │   mTLS, retry │ ┌────┴─────┐ │
│ │ Sidecar  │─┼───circuit brk──┼▶│ Sidecar  │ │
│ │ Proxy    │ │   tracing      │ │ Proxy    │ │
│ │ (Envoy)  │ │                │ │ (Envoy)  │ │
│ └──────────┘ │                │ └──────────┘ │
└──────────────┘                └──────────────┘
```

### 1.2 Data Plane vs Control Plane

```
┌─────────────────────────────────────────────────┐
│                 Control Plane                    │
│         (Istiod / Linkerd Control Plane)         │
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │
│  │  Config  │  │  Cert    │  │  Service     │  │
│  │  Mgmt    │  │  Authority│  │  Discovery  │  │
│  │          │  │  (CA)    │  │             │  │
│  └──────────┘  └──────────┘  └──────────────┘  │
│                      │                           │
│            xDS API (push config)                 │
└──────────────────────┼───────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
┌───────▼──────┐┌──────▼──────┐┌──────▼──────┐
│ Envoy/Linkerd││ Envoy/Linkerd││ Envoy/Linkerd│ ← Data Plane
│ Proxy        ││ Proxy        ││ Proxy        │
│┌────────────┐││┌────────────┐││┌────────────┐│
││ Service A  ││││ Service B  ││││ Service C  ││
│└────────────┘││└────────────┘││└────────────┘│
└──────────────┘└──────────────┘└──────────────┘
```

**Data Plane**: Sidecar proxies handle actual traffic (routing, mTLS, metrics)
**Control Plane**: Configure and manage data plane proxies (push policies, certificates)

---

## 2. Istio

### 2.1 Architecture

```
┌─────────────────────────────────────────┐
│           Istiod (Control Plane)        │
│                                         │
│  ┌─────────┐ ┌────────┐ ┌───────────┐ │
│  │  Pilot  │ │Citadel │ │  Galley   │ │
│  │         │ │        │ │           │ │
│  │ Service │ │ Cert   │ │ Config    │ │
│  │ Disc.   │ │ Mgmt   │ │ Validate │ │
│  │ Config  │ │ mTLS   │ │ Transform│ │
│  │ Push    │ │ SPIFFE │ │           │ │
│  └─────────┘ └────────┘ └───────────┘ │
└────────────────────┬────────────────────┘
                     │ xDS/gRPC
      ┌──────────────┼──────────────┐
      ▼              ▼              ▼
 ┌─────────┐   ┌─────────┐   ┌─────────┐
 │ Envoy   │   │ Envoy   │   │ Envoy   │
 │ Sidecar │   │ Sidecar │   │ Sidecar │
 └─────────┘   └─────────┘   └─────────┘
```

### 2.2 Installation

```bash
# Install Istio CLI
curl -L https://istio.io/downloadIstio | sh -
cd istio-*
export PATH=$PWD/bin:$PATH

# Install Istio on cluster (demo profile for learning)
istioctl install --set profile=demo -y

# Production profile
istioctl install --set profile=default \
  --set meshConfig.enableTracing=true \
  --set meshConfig.defaultConfig.tracing.zipkin.address=jaeger:9411

# Enable sidecar injection for namespace
kubectl label namespace default istio-injection=enabled

# Verify
kubectl get pods -n istio-system
```

### 2.3 Traffic Management

**VirtualService — Request routing:**

```yaml
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: order-service
spec:
  hosts:
    - order-service
  http:
    # Canary: 90% v1, 10% v2
    - route:
        - destination:
            host: order-service
            subset: v1
          weight: 90
        - destination:
            host: order-service
            subset: v2
          weight: 10
      timeout: 5s
      retries:
        attempts: 3
        perTryTimeout: 2s
        retryOn: 5xx,reset,connect-failure
```

**DestinationRule — Load balancing & circuit breaker:**

```yaml
apiVersion: networking.istio.io/v1beta1
kind: DestinationRule
metadata:
  name: order-service
spec:
  host: order-service
  trafficPolicy:
    connectionPool:
      tcp:
        maxConnections: 100
      http:
        h2UpgradePolicy: DEFAULT
        http1MaxPendingRequests: 100
        http2MaxRequests: 1000
    outlierDetection:
      consecutive5xxErrors: 5
      interval: 30s
      baseEjectionTime: 30s
      maxEjectionPercent: 50
    loadBalancer:
      simple: LEAST_REQUEST
  subsets:
    - name: v1
      labels:
        version: v1
    - name: v2
      labels:
        version: v2
```

**Header-based routing (A/B Testing):**

```yaml
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: order-service
spec:
  hosts:
    - order-service
  http:
    # Beta users → v2
    - match:
        - headers:
            x-user-group:
              exact: beta
      route:
        - destination:
            host: order-service
            subset: v2
    # All others → v1
    - route:
        - destination:
            host: order-service
            subset: v1
```

### 2.4 Fault Injection (Chaos Testing)

```yaml
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: payment-service
spec:
  hosts:
    - payment-service
  http:
    - fault:
        # 10% requests bị delay 5s
        delay:
          percentage:
            value: 10
          fixedDelay: 5s
        # 5% requests bị abort với 503
        abort:
          percentage:
            value: 5
          httpStatus: 503
      route:
        - destination:
            host: payment-service
```

---

## 3. Linkerd

### 3.1 Architecture

Linkerd uses **linkerd2-proxy** (written in Rust) instead of Envoy:

```
┌─────────────────────────────────┐
│   Linkerd Control Plane         │
│                                  │
│  ┌────────────┐  ┌───────────┐  │
│  │ Destination│  │  Identity │  │
│  │ (discovery │  │  (mTLS    │  │
│  │ + config)  │  │  certs)   │  │
│  └────────────┘  └───────────┘  │
│  ┌────────────┐                  │
│  │ Proxy      │                  │
│  │ Injector   │                  │
│  └────────────┘                  │
└─────────────────────────────────┘
            │
     ┌──────┼──────┐
     ▼      ▼      ▼
  ┌──────┐┌──────┐┌──────┐
  │linkerd││linkerd││linkerd│  ← linkerd2-proxy (Rust)
  │proxy ││proxy ││proxy │
  └──────┘└──────┘└──────┘
```

### 3.2 Installation & Usage

```bash
# Install CLI
curl -sL https://run.linkerd.io/install | sh
export PATH=$HOME/.linkerd2/bin:$PATH

# Check cluster readiness
linkerd check --pre

# Install control plane
linkerd install --crds | kubectl apply -f -
linkerd install | kubectl apply -f -

# Verify
linkerd check

# Inject sidecar into existing deployment
kubectl get deploy order-service -o yaml \
  | linkerd inject - \
  | kubectl apply -f -

# Or annotate namespace for auto-injection
kubectl annotate namespace default linkerd.io/inject=enabled

# Linkerd dashboard
linkerd viz install | kubectl apply -f -
linkerd viz dashboard
```

### 3.3 Traffic Split (SMI)

```yaml
# Service Mesh Interface (SMI) — standard API
apiVersion: split.smi-spec.io/v1alpha2
kind: TrafficSplit
metadata:
  name: order-service-split
spec:
  service: order-service
  backends:
    - service: order-service-v1
      weight: 900   # 90%
    - service: order-service-v2
      weight: 100   # 10%
```

---

## 4. Istio vs Linkerd

| Criteria | Istio | Linkerd |
|----------|-------|-------|
| Proxies | Envoy (C++) | linkerd2-proxy (Rust) |
| Resource usage | High (~100MB/sidecar) | Low (~20MB/sidecar) |
| Latency overhead | ~3-5ms p99 | ~1-2ms p99 |
| Feature set | Very rich | Core features, simple |
| Learning curve | Doc | Average |
| Traffic management | Very powerful (VirtualService) | Basic (SMI TrafficSplit) |
| Multi-cluster | Good | Good |
| Community | Big (Google, IBM) | Good (Buoyant, CNCF graduated) |
| **Recommended** | **Complex use cases, enterprise** | **Simple, performance-sensitive** |

### When to choose what?

```
Cần traffic management phức tạp (A/B, canary, fault injection)?
  → Istio

Cần performance tối đa, resource constrained?
  → Linkerd

Team nhỏ, muốn adopt nhanh?
  → Linkerd

Enterprise, nhiều cluster, complex policies?
  → Istio

Chưa chắc cần service mesh?
  → Bắt đầu KHÔNG có mesh
  → Khi pain points rõ ràng → evaluate
```

---

## 5. Observability from Service Mesh

Service mesh automatically provides **golden signals** without changing application code:

```
Automatic Metrics (mỗi request):
├── Request rate (requests/sec)
├── Success rate (% non-5xx)
├── Latency distribution (p50, p95, p99)
├── Bytes in/out
└── Active connections

Automatic Distributed Tracing:
├── Span creation cho mỗi hop
├── Context propagation (B3/W3C headers)
├── Service dependency graph
└── Request flow visualization

Automatic mTLS Metrics:
├── Certificate expiry
├── Handshake success/failure
└── Protocol versions
```

```bash
# Linkerd: xem metrics real-time
linkerd viz stat deploy
linkerd viz top deploy/order-service
linkerd viz routes deploy/order-service

# Istio: Kiali dashboard
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.20/samples/addons/kiali.yaml
istioctl dashboard kiali
```

---

## Summary

- **Service Mesh** separates networking logic from application code into sidecar proxy
- **Data Plane** (proxies) handles traffic; **Control Plane** manages config
- **Istio**: Feature-rich, Envoy-based, suitable for enterprise complex use cases
- **Linkerd**: Lightweight, Rust-based, high performance, easy to adopt
- Service Mesh automatically provides mTLS, observability, traffic management
- Service mesh is not always needed — evaluate based on complexity
