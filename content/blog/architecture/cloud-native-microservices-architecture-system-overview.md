---
id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
title: "Cloud Native Microservices Architecture — System Overview toàn diện"
slug: cloud-native-microservices-architecture-system-overview
excerpt: >-
  Tổng quan kiến trúc Cloud Native Microservices — từ nguyên lý thiết kế, các thành phần
  cốt lõi (API Gateway, Service Mesh, Event-Driven Communication), đến chiến lược triển khai
  trên Kubernetes, observability và các best practices cho hệ thống production.
featured_image: null
type: blog
reading_time: 35
view_count: 0
meta: null
published_at: '2026-03-31T10:00:00.000000Z'
created_at: '2026-03-31T10:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9616-cat7-7007-a007-000000000007
  name: Kiến trúc hệ thống
  slug: architecture
tags:
  - name: microservices
    slug: microservices
  - name: cloud-native
    slug: cloud-native
  - name: kubernetes
    slug: kubernetes
  - name: Docker
    slug: docker
  - name: system-design
    slug: system-design
  - name: API Gateway
    slug: api-gateway
  - name: service-mesh
    slug: service-mesh
  - name: event-driven
    slug: event-driven
  - name: DevOps
    slug: devops
  - name: observability
    slug: observability
comments: []
---

> Bài viết này cung cấp cái nhìn tổng quan và chuyên sâu về kiến trúc Cloud Native Microservices — từ nguyên lý thiết kế, mô hình giao tiếp, đến chiến lược triển khai và vận hành trên môi trường production. Phù hợp cho kỹ sư phần mềm, architect và team lead đang xây dựng hoặc chuyển đổi hệ thống sang microservices.

---

## Phần 1: Cloud Native là gì?

### 1.1. Định nghĩa Cloud Native

Cloud Native là phương pháp tiếp cận xây dựng và vận hành ứng dụng tận dụng tối đa lợi thế của mô hình cloud computing. Theo định nghĩa của **Cloud Native Computing Foundation (CNCF)**:

> Cloud native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds.

Các đặc trưng cốt lõi:

- **Containerized**: Ứng dụng được đóng gói trong container, đảm bảo tính nhất quán giữa các môi trường
- **Dynamically orchestrated**: Container được quản lý và điều phối tự động (Kubernetes)
- **Microservices-oriented**: Hệ thống được chia thành các service nhỏ, độc lập
- **Loosely coupled**: Các thành phần có ít phụ thuộc lẫn nhau
- **Resilient**: Khả năng tự phục hồi khi có lỗi
- **Observable**: Có thể giám sát và theo dõi trạng thái toàn bộ hệ thống

### 1.2. So sánh Traditional vs Cloud Native

| Đặc điểm | Traditional | Cloud Native |
|-----------|-------------|--------------|
| Kiến trúc | Monolithic | Microservices |
| Triển khai | VM / Bare metal | Container / Kubernetes |
| Scaling | Vertical (scale up) | Horizontal (scale out) |
| Release cycle | Hàng tháng / quý | Hàng ngày / hàng giờ |
| Failure handling | Tránh failure | Chấp nhận failure, tự phục hồi |
| Infrastructure | Mutable (cập nhật tại chỗ) | Immutable (thay thế hoàn toàn) |
| State management | Stateful servers | Stateless services + External state |

### 1.3. The Twelve-Factor App

Cloud Native kế thừa và mở rộng từ phương pháp luận **Twelve-Factor App**:

1. **Codebase** — Một codebase duy nhất được quản lý bởi version control, triển khai nhiều môi trường
2. **Dependencies** — Khai báo và cô lập dependencies rõ ràng
3. **Config** — Lưu cấu hình trong environment variables
4. **Backing services** — Xử lý backing services (database, cache, queue) như attached resources
5. **Build, Release, Run** — Tách biệt hoàn toàn build, release và run stages
6. **Processes** — Chạy ứng dụng dưới dạng stateless processes
7. **Port binding** — Export services qua port binding
8. **Concurrency** — Scale out thông qua process model
9. **Disposability** — Khởi động nhanh, shutdown gracefully
10. **Dev/Prod parity** — Giữ development, staging và production giống nhau nhất có thể
11. **Logs** — Xử lý logs như event streams
12. **Admin processes** — Chạy admin/management tasks như one-off processes

---

## Phần 2: Microservices Architecture — Nguyên lý thiết kế

### 2.1. Microservices là gì?

Microservices là phong cách kiến trúc trong đó ứng dụng được cấu thành từ nhiều **service nhỏ, độc lập**, mỗi service:

- Chạy trong process riêng
- Giao tiếp qua các cơ chế nhẹ (HTTP/REST, gRPC, Message Queue)
- Được triển khai độc lập
- Có database riêng (Database per Service pattern)
- Được xây dựng và quản lý bởi team nhỏ

### 2.2. Nguyên lý thiết kế cốt lõi

#### Single Responsibility Principle (SRP)

Mỗi service chỉ đảm nhận **một nghiệp vụ duy nhất** và làm tốt nghiệp vụ đó:

```
✅ OrderService      — Quản lý đơn hàng
✅ PaymentService    — Xử lý thanh toán
✅ InventoryService  — Quản lý tồn kho
✅ NotificationService — Gửi thông báo

❌ OrderPaymentInventoryService — Vi phạm SRP
```

#### Domain-Driven Design (DDD)

Sử dụng DDD để xác định ranh giới (boundary) của mỗi service thông qua **Bounded Context**:

```
┌─────────────────────────────────────────────────┐
│                  E-Commerce System               │
├──────────────┬──────────────┬───────────────────┤
│  Order       │  Catalog     │  Customer         │
│  Context     │  Context     │  Context          │
│              │              │                   │
│ - Order      │ - Product    │ - Customer        │
│ - OrderItem  │ - Category   │ - Address         │
│ - OrderStatus│ - Price      │ - Preference      │
│              │ - Inventory  │                   │
├──────────────┼──────────────┼───────────────────┤
│  Payment     │  Shipping    │  Notification     │
│  Context     │  Context     │  Context          │
│              │              │                   │
│ - Payment    │ - Shipment   │ - Template        │
│ - Refund     │ - Carrier    │ - Channel         │
│ - Invoice    │ - Tracking   │ - DeliveryLog     │
└──────────────┴──────────────┴───────────────────┘
```

#### Loose Coupling & High Cohesion

- **Loose Coupling**: Thay đổi ở service A không yêu cầu thay đổi ở service B
- **High Cohesion**: Các chức năng liên quan được gom chung trong một service

### 2.3. Khi nào nên dùng Microservices?

**Nên dùng khi:**

- Hệ thống có quy mô lớn, nhiều team phát triển song song
- Cần scale từng phần hệ thống độc lập
- Yêu cầu polyglot (nhiều ngôn ngữ, framework khác nhau)
- Release cycle nhanh, continuous deployment
- Business domain phức tạp, có ranh giới rõ ràng

**Không nên dùng khi:**

- Team nhỏ (< 5 người)
- Ứng dụng đơn giản, domain ít phức tạp
- Chưa hiểu rõ domain boundary
- Không có hạ tầng CI/CD và container orchestration
- Thời gian phát triển hạn chế

> **Lưu ý:** "Monolith First" — Martin Fowler khuyến nghị bắt đầu với monolith, sau đó tách dần khi hiểu rõ domain và có đủ nhu cầu.

---

## Phần 3: Kiến trúc tổng quan hệ thống

### 3.1. High-Level Architecture

```
                        ┌─────────────┐
                        │   Clients   │
                        │ Web/Mobile/ │
                        │   IoT/API   │
                        └──────┬──────┘
                               │
                        ┌──────▼──────┐
                        │   CDN/WAF   │
                        │ CloudFlare  │
                        └──────┬──────┘
                               │
                        ┌──────▼──────┐
                        │ Load        │
                        │ Balancer    │
                        │ (L7/L4)     │
                        └──────┬──────┘
                               │
                  ┌────────────▼────────────┐
                  │      API Gateway        │
                  │  (Kong / Envoy / APISIX)│
                  │  - Rate Limiting        │
                  │  - Authentication       │
                  │  - Request Routing      │
                  │  - Protocol Translation │
                  └────────────┬────────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
     ┌────────▼──────┐ ┌──────▼───────┐ ┌──────▼───────┐
     │ Service Mesh  │ │ Service Mesh │ │ Service Mesh │
     │ (Sidecar)     │ │ (Sidecar)    │ │ (Sidecar)    │
     │┌─────────────┐│ │┌────────────┐│ │┌────────────┐│
     ││ Order       ││ ││ Payment    ││ ││ Inventory  ││
     ││ Service     ││ ││ Service    ││ ││ Service    ││
     │└─────────────┘│ │└────────────┘│ │└────────────┘│
     └───────┬───────┘ └──────┬───────┘ └──────┬───────┘
             │                │                │
    ┌────────▼─┐      ┌──────▼──┐      ┌──────▼──┐
    │PostgreSQL│      │PostgreSQL│      │PostgreSQL│
    │(Orders)  │      │(Payments)│      │(Products)│
    └──────────┘      └─────────┘      └─────────┘
```

### 3.2. Các thành phần chính

#### API Gateway

API Gateway là **entry point duy nhất** cho tất cả client requests. Chức năng:

- **Request Routing**: Phân phối request đến đúng service
- **Authentication & Authorization**: Xác thực JWT/OAuth2 tập trung
- **Rate Limiting**: Giới hạn số lượng request per client
- **Protocol Translation**: HTTP ↔ gRPC, WebSocket ↔ HTTP
- **Request/Response Transformation**: Thay đổi format payload
- **Caching**: Cache response cho các request read-heavy
- **Circuit Breaker**: Ngắt kết nối khi downstream service lỗi

Các lựa chọn phổ biến:

| Gateway | Ưu điểm | Use Case |
|---------|---------|----------|
| Kong | Plugin ecosystem lớn, PostgreSQL-backed | Enterprise, multi-protocol |
| APISIX | Hiệu năng cao, etcd-backed | High throughput, low latency |
| Envoy | L7 proxy mạnh, xDS API | Service mesh integration |
| Traefik | Auto-discovery, Let's Encrypt tích hợp | Kubernetes-native |
| AWS API Gateway | Managed, tích hợp AWS | AWS ecosystem |

#### Service Mesh

Service Mesh quản lý **giao tiếp service-to-service** thông qua sidecar proxy:

```
┌──────────────────────────────────────────────┐
│                Control Plane                  │
│              (Istio / Linkerd)                │
│  ┌──────────┐ ┌──────────┐ ┌──────────────┐ │
│  │  Pilot   │ │  Citadel │ │    Galley    │ │
│  │ (Config) │ │ (Certs)  │ │ (Validation) │ │
│  └──────────┘ └──────────┘ └──────────────┘ │
└──────────────────────┬───────────────────────┘
                       │ xDS API
        ┌──────────────┼──────────────┐
        │              │              │
 ┌──────▼──────┐┌──────▼──────┐┌──────▼──────┐
 │ Envoy Proxy ││ Envoy Proxy ││ Envoy Proxy │
 │ (Sidecar)   ││ (Sidecar)   ││ (Sidecar)   │
 │┌───────────┐││┌───────────┐││┌───────────┐│
 ││ Service A │││ │ Service B │││ │ Service C ││
 │└───────────┘││└───────────┘││└───────────┘│
 └─────────────┘└─────────────┘└─────────────┘
```

Chức năng:

- **mTLS**: Mã hóa giao tiếp giữa các service (zero-trust)
- **Traffic Management**: Canary deployment, A/B testing, traffic splitting
- **Observability**: Distributed tracing, metrics, access logs tự động
- **Resiliency**: Retry, timeout, circuit breaker ở network layer
- **Authorization Policy**: Service-level access control

#### Service Registry & Discovery

Service Discovery cho phép các service tìm thấy nhau mà không cần hardcode địa chỉ:

```
┌─────────────────────────────────────────────┐
│          Service Registry                    │
│     (Consul / etcd / Kubernetes DNS)         │
│                                              │
│  ┌─────────────────────────────────────────┐ │
│  │ order-service:                          │ │
│  │   - 10.0.1.5:8080 (healthy)            │ │
│  │   - 10.0.1.6:8080 (healthy)            │ │
│  │   - 10.0.1.7:8080 (unhealthy)          │ │
│  │                                         │ │
│  │ payment-service:                        │ │
│  │   - 10.0.2.3:8080 (healthy)            │ │
│  │   - 10.0.2.4:8080 (healthy)            │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

Trong Kubernetes, service discovery được tích hợp sẵn qua **CoreDNS**:

```bash
# Service A gọi Service B qua DNS
curl http://payment-service.default.svc.cluster.local:8080/api/pay

# Hoặc rút gọn trong cùng namespace
curl http://payment-service:8080/api/pay
```

---

## Phần 4: Mô hình giao tiếp (Communication Patterns)

### 4.1. Synchronous Communication

#### REST (HTTP/JSON)

Giao tiếp đồng bộ phổ biến nhất, phù hợp cho CRUD operations:

```
Client ──HTTP POST──▶ Order Service ──HTTP GET──▶ Inventory Service
                                      ◀── 200 OK ──
       ◀── 201 Created ──
```

**Ưu điểm**: Đơn giản, dễ debug, tooling phong phú
**Nhược điểm**: Latency tăng theo chuỗi call, tight coupling về thời gian

#### gRPC

Giao tiếp binary qua HTTP/2, phù hợp cho internal service-to-service:

```protobuf
// inventory.proto
service InventoryService {
  rpc CheckStock(StockRequest) returns (StockResponse);
  rpc ReserveItems(ReserveRequest) returns (ReserveResponse);
  rpc StreamUpdates(StockFilter) returns (stream StockUpdate);
}

message StockRequest {
  string product_id = 1;
  int32 quantity = 2;
}

message StockResponse {
  bool available = 1;
  int32 current_stock = 2;
}
```

**Ưu điểm**: Hiệu năng cao (Protobuf binary), HTTP/2 multiplexing, bi-directional streaming, code generation tự động
**Nhược điểm**: Khó debug (binary), cần schema management, browser support hạn chế

### 4.2. Asynchronous Communication

#### Message Queue (Point-to-Point)

Một producer gửi message, một consumer nhận và xử lý:

```
┌──────────┐     ┌───────────────┐     ┌──────────────┐
│  Order   │────▶│  RabbitMQ     │────▶│  Payment     │
│  Service │     │  Queue        │     │  Service     │
└──────────┘     └───────────────┘     └──────────────┘
```

#### Event Streaming (Pub/Sub)

Một producer publish event, nhiều consumer subscribe và xử lý:

```
                              ┌──────────────┐
                         ┌───▶│  Payment     │
                         │    │  Service     │
┌──────────┐    ┌────────┴─┐  └──────────────┘
│  Order   │───▶│  Kafka   │
│  Service │    │  Topic   │  ┌──────────────┐
└──────────┘    │  (order. │─▶│  Inventory   │
                │  created)│  │  Service     │
                └────────┬─┘  └──────────────┘
                         │    ┌──────────────┐
                         └───▶│ Notification │
                              │  Service     │
                              └──────────────┘
```

### 4.3. Event-Driven Architecture

#### Event Sourcing

Thay vì lưu trạng thái hiện tại, lưu toàn bộ **chuỗi sự kiện** (event log):

```
Event Store (Append-only):
┌────┬──────────────┬────────────────────────────┬──────────────────────┐
│ #  │ Event Type   │ Payload                    │ Timestamp            │
├────┼──────────────┼────────────────────────────┼──────────────────────┤
│ 1  │ OrderCreated │ {id: "O-001", items: [...]}│ 2026-03-31T10:00:00Z │
│ 2  │ PaymentRecvd │ {orderId: "O-001", amt: $} │ 2026-03-31T10:01:00Z │
│ 3  │ ItemsReserved│ {orderId: "O-001"}         │ 2026-03-31T10:01:05Z │
│ 4  │ OrderShipped │ {orderId: "O-001", track: }│ 2026-03-31T10:30:00Z │
└────┴──────────────┴────────────────────────────┴──────────────────────┘

Current State = replay(events) → Order{status: "shipped", ...}
```

#### CQRS (Command Query Responsibility Segregation)

Tách biệt model cho **write** (Command) và **read** (Query):

```
                    ┌─────────────────────────────────┐
                    │         API Gateway              │
                    └────────────┬────────────────────┘
                                 │
                    ┌────────────┼────────────────┐
                    │                             │
            ┌───────▼──────┐             ┌───────▼──────┐
            │  Command     │             │  Query       │
            │  Service     │             │  Service     │
            │  (Write)     │             │  (Read)      │
            └───────┬──────┘             └───────▲──────┘
                    │                            │
            ┌───────▼──────┐             ┌───────┴──────┐
            │  PostgreSQL  │──events───▶ │ Elasticsearch│
            │  (Write DB)  │             │  (Read DB)   │
            └──────────────┘             └──────────────┘
```

**Ưu điểm**: Tối ưu read/write riêng biệt, scale read và write độc lập
**Nhược điểm**: Eventual consistency, phức tạp hơn, cần event sync mechanism

### 4.4. Saga Pattern — Distributed Transactions

Trong microservices, không thể dùng **2-Phase Commit** truyền thống. Saga pattern giải quyết distributed transactions bằng chuỗi local transactions:

#### Choreography Saga

Mỗi service publish event, service tiếp theo lắng nghe và xử lý:

```
Order Service          Payment Service        Inventory Service
     │                       │                       │
     │── OrderCreated ──────▶│                       │
     │                       │── PaymentCompleted ──▶│
     │                       │                       │── ItemsReserved ──▶ ...
     │                       │                       │
     │◀── PaymentFailed ─────│ (compensating)        │
     │── OrderCancelled ────▶│                       │
```

#### Orchestration Saga

Một **Saga Orchestrator** trung tâm điều phối workflow:

```
                    ┌──────────────────┐
                    │ Saga Orchestrator│
                    │ (Order Saga)     │
                    └───────┬──────────┘
                            │
           ┌────────────────┼────────────────┐
           │                │                │
    Step 1 │         Step 2 │         Step 3 │
           ▼                ▼                ▼
    ┌──────────┐    ┌──────────┐    ┌──────────┐
    │ Payment  │    │Inventory │    │ Shipping │
    │ Service  │    │ Service  │    │ Service  │
    └──────────┘    └──────────┘    └──────────┘

    Nếu Step 2 fail → Compensate Step 1 (Refund Payment)
```

---

## Phần 5: Data Management

### 5.1. Database per Service

Mỗi service sở hữu database riêng — **không chia sẻ database** giữa các service:

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ Order Service│    │Payment Service│   │Catalog Service│
└───────┬──────┘    └───────┬──────┘    └───────┬──────┘
        │                   │                   │
  ┌─────▼─────┐      ┌─────▼─────┐      ┌─────▼─────┐
  │ PostgreSQL│      │ PostgreSQL│      │  MongoDB  │
  │ (Orders)  │      │ (Payments)│      │ (Products)│
  └───────────┘      └───────────┘      └───────────┘
```

**Nguyên tắc**: Chỉ truy cập database của service khác thông qua API của service đó, **không bao giờ query trực tiếp**.

### 5.2. Polyglot Persistence

Chọn database phù hợp với đặc tính dữ liệu của mỗi service:

| Service | Database | Lý do |
|---------|----------|-------|
| Order | PostgreSQL | ACID transactions, relational data |
| Product Catalog | MongoDB | Flexible schema, nested documents |
| User Session | Redis | In-memory, fast access, TTL |
| Search | Elasticsearch | Full-text search, inverted index |
| Activity Log | Apache Kafka + ClickHouse | High write throughput, analytics |
| Recommendation | Neo4j | Graph relationships |
| File Storage | S3 / MinIO | Object storage, scalable |

### 5.3. Data Consistency Patterns

#### Eventual Consistency

Trong hệ thống phân tán, **strong consistency cho toàn bộ hệ thống là không khả thi** (CAP Theorem). Thay vào đó, sử dụng eventual consistency:

```
Order Service                    Inventory Service
      │                                │
      │── OrderCreated event ─────────▶│
      │   (Kafka/RabbitMQ)             │
      │                                │── Giảm stock
      │                                │   (eventually consistent)
      │                                │
      │ Trong 100-500ms, cả 2 service  │
      │ đều có dữ liệu nhất quán      │
```

#### Outbox Pattern

Đảm bảo event được publish khi database transaction thành công:

```sql
-- Trong cùng một transaction
BEGIN;
  INSERT INTO orders (id, status, total) VALUES ('O-001', 'created', 500);
  INSERT INTO outbox (id, topic, payload) VALUES (uuid(), 'order.created', '{"id":"O-001",...}');
COMMIT;

-- Outbox Relay (CDC hoặc Polling) đọc và publish lên Kafka
-- Sau khi publish thành công → đánh dấu đã xử lý
```

---

## Phần 6: Triển khai trên Kubernetes

### 6.1. Container Architecture

```dockerfile
# Multi-stage build cho Java service
FROM eclipse-temurin:21-jdk AS build
WORKDIR /app
COPY . .
RUN ./gradlew bootJar --no-daemon

FROM eclipse-temurin:21-jre
RUN addgroup --system app && adduser --system --ingroup app app
USER app
COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:8080/actuator/health || exit 1

ENTRYPOINT ["java", "-jar", "app.jar"]
```

### 6.2. Kubernetes Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
  labels:
    app: order-service
    version: v1
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
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
              path: /actuator/health/readiness
              port: 8080
            initialDelaySeconds: 10
            periodSeconds: 5
          livenessProbe:
            httpGet:
              path: /actuator/health/liveness
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 10
          env:
            - name: DB_HOST
              valueFrom:
                secretKeyRef:
                  name: order-db-secret
                  key: host
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: order-db-secret
                  key: password
---
apiVersion: v1
kind: Service
metadata:
  name: order-service
spec:
  selector:
    app: order-service
  ports:
    - port: 8080
      targetPort: 8080
  type: ClusterIP
---
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
```

### 6.3. Namespace Strategy

Tổ chức namespaces theo chức năng:

```
Kubernetes Cluster
├── namespace: platform        # Shared infrastructure
│   ├── kafka
│   ├── redis
│   ├── prometheus
│   └── grafana
│
├── namespace: gateway         # API Gateway
│   └── kong / envoy
│
├── namespace: services-prod   # Production services
│   ├── order-service
│   ├── payment-service
│   ├── inventory-service
│   └── notification-service
│
├── namespace: services-staging
│   └── ... (staging deployments)
│
└── namespace: monitoring      # Observability stack
    ├── jaeger
    ├── loki
    └── alertmanager
```

---

## Phần 7: Observability — Ba trụ cột

### 7.1. Metrics (Prometheus + Grafana)

Thu thập và hiển thị số liệu hiệu năng hệ thống:

**RED Method** cho services:

- **R**ate — Số request per second
- **E**rrors — Tỷ lệ request lỗi
- **D**uration — Thời gian xử lý request (latency percentiles)

**USE Method** cho resources:

- **U**tilization — Tỷ lệ sử dụng (CPU, Memory, Disk)
- **S**aturation — Mức độ bão hòa (queue length, thread pool)
- **E**rrors — Lỗi hardware/software

```yaml
# Prometheus ServiceMonitor
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: order-service
spec:
  selector:
    matchLabels:
      app: order-service
  endpoints:
    - port: http
      path: /actuator/prometheus
      interval: 15s
```

### 7.2. Logging (ELK / Loki)

Structured logging cho phép query và phân tích log hiệu quả:

```json
{
  "timestamp": "2026-03-31T10:15:30.123Z",
  "level": "INFO",
  "service": "order-service",
  "traceId": "abc123def456",
  "spanId": "span789",
  "message": "Order created successfully",
  "orderId": "O-001",
  "customerId": "C-042",
  "totalAmount": 500000,
  "itemCount": 3,
  "duration_ms": 45
}
```

**Log Aggregation Architecture**:

```
Services ──fluentbit──▶ Kafka ──▶ Loki/Elasticsearch ──▶ Grafana/Kibana
                                        │
                                  ┌─────▼─────┐
                                  │ Long-term  │
                                  │ Storage    │
                                  │ (S3/MinIO) │
                                  └────────────┘
```

### 7.3. Distributed Tracing (Jaeger / Tempo)

Theo dõi request khi đi qua nhiều service:

```
Trace: abc123def456
├── Span: API Gateway (2ms)
│   └── Span: Order Service (45ms)
│       ├── Span: DB Query - Create Order (5ms)
│       ├── Span: Payment Service (gRPC) (120ms)
│       │   ├── Span: Validate Card (15ms)
│       │   └── Span: Process Payment (100ms)
│       └── Span: Kafka Produce - order.created (3ms)
│
Total Duration: 170ms
```

Sử dụng **OpenTelemetry** làm chuẩn instrumentation duy nhất:

```yaml
# OpenTelemetry Collector config
receivers:
  otlp:
    protocols:
      grpc:
        endpoint: 0.0.0.0:4317
      http:
        endpoint: 0.0.0.0:4318

processors:
  batch:
    timeout: 5s
    send_batch_size: 1024

exporters:
  jaeger:
    endpoint: jaeger:14250
  prometheus:
    endpoint: 0.0.0.0:8889

service:
  pipelines:
    traces:
      receivers: [otlp]
      processors: [batch]
      exporters: [jaeger]
    metrics:
      receivers: [otlp]
      processors: [batch]
      exporters: [prometheus]
```

---

## Phần 8: Resiliency Patterns

### 8.1. Circuit Breaker

Ngắt kết nối khi downstream service liên tục lỗi, tránh cascade failure:

```
         ┌──────────────────────────────────────────┐
         │            Circuit Breaker                │
         │                                          │
         │  CLOSED ──(failures > threshold)──▶ OPEN │
         │    ▲                                  │   │
         │    │                          (timeout)   │
         │    │                                  │   │
         │    └──(success)── HALF-OPEN ◀─────────┘   │
         └──────────────────────────────────────────┘

CLOSED    : Request đi qua bình thường
OPEN      : Request bị reject ngay, trả fallback response
HALF-OPEN : Cho 1 request thử, nếu thành công → CLOSED
```

### 8.2. Retry với Exponential Backoff

```
Attempt 1: Gửi request
  → Fail
  Wait: 100ms + random(0-50ms)

Attempt 2: Retry
  → Fail
  Wait: 200ms + random(0-100ms)

Attempt 3: Retry
  → Fail
  Wait: 400ms + random(0-200ms)

Attempt 4: Retry
  → Success ✓

Max retries: 5
Max delay: 30s
```

### 8.3. Bulkhead Pattern

Cô lập tài nguyên giữa các nhóm request để tránh một nhóm request chậm làm ảnh hưởng toàn bộ service:

```
┌─────────────────────────────────────────────┐
│              Order Service                   │
│                                              │
│  ┌─────────────┐  ┌─────────────┐           │
│  │ Thread Pool │  │ Thread Pool │           │
│  │ (Payment    │  │ (Inventory  │           │
│  │  calls)     │  │  calls)     │           │
│  │ max: 10     │  │ max: 15     │           │
│  └─────────────┘  └─────────────┘           │
│                                              │
│  Payment Service chậm → chỉ pool Payment    │
│  bị ảnh hưởng, Inventory calls vẫn hoạt     │
│  động bình thường                            │
└─────────────────────────────────────────────┘
```

### 8.4. Health Check Pattern

```yaml
# Kubernetes probes
livenessProbe:     # Service có đang chạy không?
  httpGet:
    path: /health/live
    port: 8080
  failureThreshold: 3

readinessProbe:    # Service có sẵn sàng nhận traffic không?
  httpGet:
    path: /health/ready
    port: 8080
  failureThreshold: 3

startupProbe:      # Service đã khởi động xong chưa?
  httpGet:
    path: /health/started
    port: 8080
  failureThreshold: 30
  periodSeconds: 2
```

---

## Phần 9: CI/CD cho Microservices

### 9.1. Pipeline Architecture

```
┌──────┐    ┌───────────┐    ┌──────────┐    ┌──────────┐    ┌───────────┐
│ Git  │───▶│   Build   │───▶│   Test   │───▶│  Deploy  │───▶│  Monitor  │
│ Push │    │           │    │          │    │  Staging │    │           │
└──────┘    │ - Lint    │    │ - Unit   │    │          │    │ - Smoke   │
            │ - Build   │    │ - Integ  │    │          │    │   tests   │
            │ - Image   │    │ - E2E    │    │          │    │ - Metrics │
            │ - Scan    │    │ - Perf   │    │          │    │ - Alerts  │
            └───────────┘    └──────────┘    └──────────┘    └───────────┘
                                                  │
                                                  ▼
                                            ┌──────────┐
                                            │  Deploy  │
                                            │  Prod    │
                                            │ (manual  │
                                            │  approve)│
                                            └──────────┘
```

### 9.2. GitOps với ArgoCD

```yaml
# Application manifest cho ArgoCD
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: order-service
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/myorg/k8s-manifests.git
    targetRevision: main
    path: services/order-service/overlays/production
  destination:
    server: https://kubernetes.default.svc
    namespace: services-prod
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
      - CreateNamespace=true
```

### 9.3. Deployment Strategies

| Strategy | Mô tả | Risk | Rollback |
|----------|--------|------|----------|
| Rolling Update | Thay thế từng pod một | Thấp | Tự động |
| Blue/Green | Chạy 2 bản song song, switch traffic | Rất thấp | Nhanh (switch lại) |
| Canary | Route % traffic nhỏ sang version mới | Rất thấp | Nhanh |
| A/B Testing | Route theo user segment | Trung bình | Trung bình |

---

## Phần 10: Security Best Practices

### 10.1. Zero Trust Architecture

```
Nguyên tắc: "Never trust, always verify"

External ──WAF──▶ API Gateway ──JWT verify──▶ Service A
                                                  │
                                            mTLS + RBAC
                                                  │
                                                  ▼
                                             Service B
                                                  │
                                        Encrypted connection
                                                  │
                                                  ▼
                                              Database
                                          (encrypted at rest)
```

### 10.2. Authentication & Authorization Flow

```
┌────────┐     ┌───────────┐     ┌──────────────┐     ┌─────────┐
│ Client │────▶│API Gateway│────▶│   Auth       │────▶│  OIDC   │
│        │     │           │     │   Service    │     │Provider │
│        │◀────│  + JWT    │◀────│             │◀────│(Keycloak│
│        │     │  validate │     │             │     │ /Auth0) │
└────────┘     └─────┬─────┘     └──────────────┘     └─────────┘
                     │
                     │ JWT token (validated)
                     ▼
              ┌──────────────┐
              │  Downstream  │
              │  Service     │
              │              │
              │  Extract:    │
              │  - user_id   │
              │  - roles     │
              │  - tenant_id │
              │  - scopes    │
              └──────────────┘
```

### 10.3. Secrets Management

```
┌────────────────────────────────────────────┐
│           Vault (HashiCorp)                │
│                                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐│
│  │ DB Creds │  │API Keys  │  │TLS Certs ││
│  │ (dynamic)│  │          │  │(auto     ││
│  │          │  │          │  │ rotate)  ││
│  └──────────┘  └──────────┘  └──────────┘│
└───────────────────┬────────────────────────┘
                    │
    ┌───────────────┼───────────────┐
    │               │               │
    ▼               ▼               ▼
Pod (via       Pod (via        Pod (via
 CSI Driver)   Sidecar)       Init Container)
```

---

## Phần 11: Tổng kết và Checklist

### Architecture Decision Checklist

```
□ Service boundaries xác định rõ ràng (DDD Bounded Context)
□ API contracts được định nghĩa (OpenAPI/Protobuf)
□ Communication patterns phù hợp (sync vs async)
□ Database per service
□ Event-driven cho cross-service workflows
□ Saga pattern cho distributed transactions
□ API Gateway configured (auth, rate limit, routing)
□ Service Mesh cho mTLS và traffic management
□ CI/CD pipeline per service
□ Container security scanning
□ Observability stack (metrics, logs, traces)
□ Alerting rules defined
□ Disaster recovery plan
□ Load testing completed
□ Runbook cho mỗi service
```

### Technology Stack khuyến nghị

| Thành phần | Công nghệ | Ghi chú |
|-----------|-----------|---------|
| Container Runtime | containerd | Kubernetes default |
| Orchestration | Kubernetes (K8s) | EKS / GKE / AKS hoặc self-managed |
| API Gateway | Kong / APISIX | Plugin ecosystem |
| Service Mesh | Istio / Linkerd | Istio feature-rich, Linkerd lightweight |
| Message Broker | Apache Kafka | Event streaming |
| Task Queue | RabbitMQ | Point-to-point messaging |
| CI/CD | GitLab CI / GitHub Actions | Pipeline per service |
| GitOps | ArgoCD / Flux | Declarative deployment |
| Monitoring | Prometheus + Grafana | Metrics |
| Logging | Loki + Grafana | Hoặc ELK stack |
| Tracing | Jaeger / Tempo | OpenTelemetry compatible |
| Secret Management | HashiCorp Vault | Dynamic secrets |
| Registry | Harbor | Private container registry |
| IaC | Terraform / Pulumi | Infrastructure as Code |

### Lộ trình áp dụng

**Phase 1 — Foundation (1-2 tháng)**
- Thiết lập Kubernetes cluster
- CI/CD pipeline cơ bản
- Container registry (Harbor)
- Tách 1-2 service đầu tiên từ monolith

**Phase 2 — Core Platform (2-3 tháng)**
- API Gateway
- Service discovery
- Centralized logging & monitoring
- Database per service migration

**Phase 3 — Advanced (3-6 tháng)**
- Service Mesh (Istio/Linkerd)
- Event-driven architecture (Kafka)
- Distributed tracing
- Auto-scaling policies

**Phase 4 — Optimization (Ongoing)**
- Performance tuning
- Cost optimization
- Chaos engineering
- Security hardening

---

## Tham khảo

- [Cloud Native Computing Foundation](https://www.cncf.io/)
- [The Twelve-Factor App](https://12factor.net/)
- Martin Fowler — *Microservices* (martinfowler.com)
- Sam Newman — *Building Microservices*, 2nd Edition
- Chris Richardson — *Microservices Patterns*
- Kubernetes Documentation — kubernetes.io
- Istio Documentation — istio.io
