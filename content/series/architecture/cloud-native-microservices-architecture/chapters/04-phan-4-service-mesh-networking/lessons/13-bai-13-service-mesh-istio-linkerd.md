---
id: 019d8a22-c313-7a10-b001-a1b2c3d4e513
title: "Bài 13: Service Mesh — Istio & Linkerd"
slug: bai-13-service-mesh-istio-linkerd
description: >-
  Service Mesh architecture (Data Plane + Control Plane), Sidecar Proxy pattern,
  Istio components (Pilot, Citadel, Galley), traffic management (canary, A/B),
  so sánh Istio vs Linkerd, cài đặt và cấu hình trên Kubernetes.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Service Mesh & Networking"
course:
  id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
  title: "Cloud Native Microservices Architecture"
  slug: cloud-native-microservices-architecture
---

## Giới thiệu

Khi số lượng microservices tăng, quản lý giao tiếp service-to-service trở nên phức tạp: mTLS, retry, circuit breaker, tracing, traffic splitting... **Service Mesh** giải quyết bằng cách đưa tất cả logic networking ra khỏi application code vào **infrastructure layer**.

---

## 1. Service Mesh Architecture

### 1.1 Concept

Service Mesh là **dedicated infrastructure layer** xử lý service-to-service communication thông qua network proxy (sidecar) được inject vào mỗi pod:

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

**Data Plane**: Sidecar proxies xử lý actual traffic (routing, mTLS, metrics)
**Control Plane**: Configure và quản lý data plane proxies (push policies, certificates)

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

Linkerd sử dụng **linkerd2-proxy** (viết bằng Rust) thay vì Envoy:

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

| Tiêu chí | Istio | Linkerd |
|----------|-------|---------|
| Proxy | Envoy (C++) | linkerd2-proxy (Rust) |
| Resource usage | Cao (~100MB/sidecar) | Thấp (~20MB/sidecar) |
| Latency overhead | ~3-5ms p99 | ~1-2ms p99 |
| Feature set | Rất phong phú | Core features, đơn giản |
| Learning curve | Dốc | Trung bình |
| Traffic management | Rất mạnh (VirtualService) | Cơ bản (SMI TrafficSplit) |
| Multi-cluster | Tốt | Tốt |
| Community | Lớn (Google, IBM) | Tốt (Buoyant, CNCF graduated) |
| **Khuyến nghị** | **Complex use cases, enterprise** | **Simple, performance-sensitive** |

### Khi nào chọn gì?

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

## 5. Observability từ Service Mesh

Service mesh tự động cung cấp **golden signals** mà không cần thay đổi application code:

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

## Tóm tắt

- **Service Mesh** tách networking logic ra khỏi application code vào sidecar proxy
- **Data Plane** (proxies) xử lý traffic; **Control Plane** quản lý config
- **Istio**: Feature-rich, Envoy-based, phù hợp enterprise complex use cases
- **Linkerd**: Lightweight, Rust-based, hiệu năng cao, dễ adopt
- Service Mesh tự động cung cấp mTLS, observability, traffic management
- Không phải lúc nào cũng cần service mesh — evaluate dựa trên complexity
