---
id: 019d8a22-c303-7a10-b001-a1b2c3d4e503
title: "Bài 3: Kubernetes Architecture & Core Concepts"
slug: bai-3-kubernetes-architecture-core-concepts
description: >-
  Kiến trúc Kubernetes (Control Plane, Worker Node), các resource cốt lõi
  (Pod, Deployment, Service, ConfigMap, Secret), Namespace strategy,
  và cách Kubernetes orchestrate container tự động.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Cloud Native Foundations"
course:
  id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
  title: "Cloud Native Microservices Architecture"
  slug: cloud-native-microservices-architecture
---

## Giới thiệu

Kubernetes (K8s) là nền tảng orchestration tiêu chuẩn cho container workloads. Hiểu kiến trúc và các khái niệm cốt lõi của Kubernetes là bắt buộc trước khi triển khai bất kỳ hệ thống microservices nào.

---

## 1. Kubernetes Architecture

### 1.1 High-Level Overview

```
┌────────────────────────────────────────────────────────────┐
│                    Kubernetes Cluster                       │
│                                                            │
│  ┌──────────────────── Control Plane ────────────────────┐ │
│  │                                                       │ │
│  │  ┌───────────┐  ┌──────────┐  ┌───────────────────┐  │ │
│  │  │ API Server│  │Scheduler │  │Controller Manager │  │ │
│  │  │ (kube-    │  │          │  │                   │  │ │
│  │  │ apiserver)│  │          │  │ - ReplicaSet      │  │ │
│  │  └─────┬─────┘  └──────────┘  │ - Deployment      │  │ │
│  │        │                      │ - Node            │  │ │
│  │  ┌─────▼─────┐               │ - Service Account │  │ │
│  │  │   etcd    │               └───────────────────┘  │ │
│  │  │ (cluster  │                                       │ │
│  │  │  state)   │  ┌──────────────────────────────────┐ │ │
│  │  └───────────┘  │ Cloud Controller Manager         │ │ │
│  │                 │ (LoadBalancer, Volume, Node)      │ │ │
│  │                 └──────────────────────────────────┘ │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                            │
│  ┌──────── Worker Node 1 ──────┐  ┌── Worker Node 2 ────┐ │
│  │                              │  │                      │ │
│  │  ┌────────┐  ┌────────────┐ │  │  ┌────────┐         │ │
│  │  │kubelet │  │kube-proxy  │ │  │  │kubelet │  ...    │ │
│  │  └────────┘  └────────────┘ │  │  └────────┘         │ │
│  │  ┌────────────────────────┐ │  │                      │ │
│  │  │   containerd           │ │  │                      │ │
│  │  │  ┌─────┐ ┌─────┐      │ │  │                      │ │
│  │  │  │Pod A│ │Pod B│ ...  │ │  │                      │ │
│  │  │  └─────┘ └─────┘      │ │  │                      │ │
│  │  └────────────────────────┘ │  │                      │ │
│  └──────────────────────────────┘  └──────────────────────┘ │
└────────────────────────────────────────────────────────────┘
```

### 1.2 Control Plane Components

**kube-apiserver** — "Front door" của cluster:
- Tiếp nhận tất cả REST API requests
- Xác thực (AuthN) và phân quyền (AuthZ)
- Validate và persist resource vào etcd
- Duy nhất component giao tiếp trực tiếp với etcd

**etcd** — Distributed key-value store:
- Lưu trữ **toàn bộ cluster state** (desired + actual)
- Strongly consistent (Raft consensus)
- Cần backup thường xuyên

**kube-scheduler** — Quyết định Pod chạy ở Node nào:
- Đánh giá resource requests, affinity, taints/tolerations
- Scoring algorithm: chọn node tối ưu nhất

**kube-controller-manager** — Đảm bảo desired state = actual state:
- ReplicaSet Controller: đảm bảo đúng số replicas
- Deployment Controller: quản lý rolling updates
- Node Controller: phát hiện node failure
- Job Controller: quản lý one-off tasks

### 1.3 Worker Node Components

**kubelet** — Agent chạy trên mỗi node:
- Nhận Pod spec từ API Server
- Đảm bảo containers trong Pod đang chạy
- Report node status và Pod status

**kube-proxy** — Network proxy:
- Quản lý Service networking rules (iptables/IPVS)
- Load balance traffic đến Pod endpoints

**Container Runtime** — containerd hoặc CRI-O:
- Pull images, start/stop containers
- Tuân thủ CRI (Container Runtime Interface)

---

## 2. Core Resources

### 2.1 Pod — Đơn vị nhỏ nhất

Pod là một hoặc nhiều containers chạy cùng nhau, chia sẻ network và storage:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: order-service
  labels:
    app: order-service
spec:
  containers:
    - name: order-service
      image: registry.example.com/order-service:1.0.0
      ports:
        - containerPort: 8080
      resources:
        requests:
          cpu: "250m"
          memory: "256Mi"
        limits:
          cpu: "500m"
          memory: "512Mi"
      env:
        - name: DB_HOST
          valueFrom:
            configMapKeyRef:
              name: order-config
              key: db_host
```

> **Lưu ý**: Trong production, **không bao giờ tạo Pod trực tiếp**. Luôn dùng Deployment.

### 2.2 Deployment — Quản lý lifecycle

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
  labels:
    app: order-service
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1        # Thêm tối đa 1 pod khi update
      maxUnavailable: 0  # Không cho phép pod nào unavailable
  selector:
    matchLabels:
      app: order-service
  template:
    metadata:
      labels:
        app: order-service
        version: v1
    spec:
      containers:
        - name: order-service
          image: registry.example.com/order-service:1.0.0
          ports:
            - containerPort: 8080
          resources:
            requests:
              cpu: "250m"
              memory: "512Mi"
            limits:
              cpu: "500m"
              memory: "1Gi"
          readinessProbe:
            httpGet:
              path: /health/ready
              port: 8080
            initialDelaySeconds: 10
            periodSeconds: 5
          livenessProbe:
            httpGet:
              path: /health/live
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 10
          startupProbe:
            httpGet:
              path: /health/started
              port: 8080
            failureThreshold: 30
            periodSeconds: 2
```

### 2.3 Service — Expose và Load Balance

```yaml
# ClusterIP — Internal communication (default)
apiVersion: v1
kind: Service
metadata:
  name: order-service
spec:
  type: ClusterIP
  selector:
    app: order-service
  ports:
    - port: 8080
      targetPort: 8080

# DNS: order-service.default.svc.cluster.local
# Short: order-service (cùng namespace)
```

Service types:

```
ClusterIP   → Internal only (default)
NodePort    → Expose qua port trên mỗi node (30000-32767)
LoadBalancer → Cloud provider tạo external LB
ExternalName → DNS CNAME alias
```

### 2.4 ConfigMap & Secret

```yaml
# ConfigMap — non-sensitive config
apiVersion: v1
kind: ConfigMap
metadata:
  name: order-config
data:
  db_host: "postgres-order.database.svc.cluster.local"
  db_port: "5432"
  db_name: "orders"
  log_level: "info"

---
# Secret — sensitive data (base64 encoded)
apiVersion: v1
kind: Secret
metadata:
  name: order-secret
type: Opaque
data:
  db_password: cGFzc3dvcmQxMjM=   # base64
  api_key: c2stbXlhcGlrZXk=
```

> **Quan trọng**: Kubernetes Secrets chỉ base64 encode, **không mã hóa**. Trong production, sử dụng **Sealed Secrets** hoặc **External Secrets Operator** + Vault.

### 2.5 Ingress — External access

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-ingress
  annotations:
    nginx.ingress.kubernetes.io/rate-limit: "100"
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  tls:
    - hosts:
        - api.example.com
      secretName: api-tls
  rules:
    - host: api.example.com
      http:
        paths:
          - path: /api/orders
            pathType: Prefix
            backend:
              service:
                name: order-service
                port:
                  number: 8080
          - path: /api/payments
            pathType: Prefix
            backend:
              service:
                name: payment-service
                port:
                  number: 8080
```

---

## 3. Auto-Scaling

### 3.1 Horizontal Pod Autoscaler (HPA)

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: order-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: order-service
  minReplicas: 3
  maxReplicas: 20
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
    scaleDown:
      stabilizationWindowSeconds: 300  # Chờ 5 phút trước khi scale down
      policies:
        - type: Pods
          value: 1
          periodSeconds: 60           # Giảm tối đa 1 pod mỗi 60s
```

### 3.2 Vertical Pod Autoscaler (VPA)

VPA tự động điều chỉnh CPU/Memory requests:

```yaml
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: order-service-vpa
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: order-service
  updatePolicy:
    updateMode: "Auto"
  resourcePolicy:
    containerPolicies:
      - containerName: order-service
        minAllowed:
          cpu: "100m"
          memory: "128Mi"
        maxAllowed:
          cpu: "2"
          memory: "4Gi"
```

---

## 4. Namespace Strategy

```
Kubernetes Cluster
│
├── kube-system          # System components (CoreDNS, metrics-server)
├── kube-public          # Public resources
│
├── platform             # Shared infrastructure
│   ├── kafka
│   ├── redis
│   ├── postgresql
│   └── prometheus
│
├── gateway              # API Gateway (Kong/Traefik)
│
├── services-prod        # Production services
│   ├── order-service (3 replicas)
│   ├── payment-service (3 replicas)
│   ├── inventory-service (2 replicas)
│   └── notification-service (2 replicas)
│
├── services-staging     # Staging (1 replica each)
│
├── monitoring           # Observability stack
│   ├── grafana
│   ├── loki
│   ├── jaeger
│   └── alertmanager
│
└── argocd               # GitOps controller
```

**Resource Quotas per namespace:**

```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: services-prod-quota
  namespace: services-prod
spec:
  hard:
    requests.cpu: "20"
    requests.memory: "40Gi"
    limits.cpu: "40"
    limits.memory: "80Gi"
    pods: "100"
```

---

## 5. Kubernetes Networking Model

### 5.1 Pod-to-Pod Communication

```
Kubernetes Network Rules:
1. Mọi Pod có thể giao tiếp với mọi Pod khác (không cần NAT)
2. Agents trên node (kubelet) có thể giao tiếp với tất cả Pods trên node đó
3. Mỗi Pod có IP riêng trong cluster CIDR

Pod A (10.244.1.5) ──────────▶ Pod B (10.244.2.3)
     Node 1                         Node 2
     │                              │
     └──── CNI Plugin (Calico/Cilium/Flannel) ────┘
```

### 5.2 Service Discovery qua CoreDNS

```
Service DNS formats:
├── <service>.<namespace>.svc.cluster.local  (FQDN)
├── <service>.<namespace>.svc                (shortened)
├── <service>.<namespace>                    (shortened)
└── <service>                                (same namespace)

Ví dụ:
order-service gọi payment-service:
  curl http://payment-service:8080/api/pay           # same namespace
  curl http://payment-service.services-prod:8080     # cross namespace
```

---

## 6. Tổng kết

| Component | Vai trò |
|-----------|---------|
| Control Plane | Quản lý cluster state, scheduling, controller loops |
| Pod | Đơn vị deploy nhỏ nhất, 1+ container |
| Deployment | Quản lý ReplicaSet, rolling update, rollback |
| Service | Stable network endpoint, load balancing |
| ConfigMap/Secret | Externalize configuration |
| Ingress | External HTTP(S) routing |
| HPA/VPA | Auto-scaling horizontal và vertical |
| Namespace | Logical isolation, resource quotas |

> **Bài tiếp theo**: Microservices Design Principles — SRP, DDD & Bounded Context để xác định ranh giới dịch vụ đúng cách.
