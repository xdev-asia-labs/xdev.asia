---
id: 019d8a22-c302-7a10-b001-a1b2c3d4e502
title: "Bài 2: Container & Docker — Nền tảng đóng gói ứng dụng"
slug: bai-2-container-docker-nen-tang-dong-goi-ung-dung
description: >-
  Container vs VM, Docker architecture, Dockerfile best practices,
  multi-stage build, image security scanning, và container networking cơ bản.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Cloud Native Foundations"
course:
  id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
  title: "Cloud Native Microservices Architecture"
  slug: cloud-native-microservices-architecture
---

## Giới thiệu

Container là nền tảng của Cloud Native. Mọi service trong kiến trúc microservices đều được đóng gói thành container image để đảm bảo tính nhất quán giữa development, staging và production. Bài này đi sâu vào container, Docker, và các best practices cần thiết.

---

## 1. Container vs Virtual Machine

### 1.1 Virtual Machine

```
┌──────────────────────────────────────┐
│           Host Hardware              │
├──────────────────────────────────────┤
│           Host OS (Linux)            │
├──────────────────────────────────────┤
│           Hypervisor (KVM/ESXi)      │
├────────────┬────────────┬────────────┤
│  Guest OS  │  Guest OS  │  Guest OS  │
│  (Ubuntu)  │  (CentOS)  │  (Debian)  │
├────────────┼────────────┼────────────┤
│  Libs/Bins │  Libs/Bins │  Libs/Bins │
├────────────┼────────────┼────────────┤
│   App A    │   App B    │   App C    │
└────────────┴────────────┴────────────┘
```

- Mỗi VM chạy **một OS riêng** (kernel riêng)
- Tốn tài nguyên: 500MB - 2GB RAM chỉ cho OS
- Khởi động: 30 giây - vài phút
- Isolation: Mạnh (hardware-level)

### 1.2 Container

```
┌──────────────────────────────────────┐
│           Host Hardware              │
├──────────────────────────────────────┤
│           Host OS (Linux Kernel)     │
├──────────────────────────────────────┤
│        Container Runtime (containerd)│
├────────────┬────────────┬────────────┤
│  Libs/Bins │  Libs/Bins │  Libs/Bins │
├────────────┼────────────┼────────────┤
│   App A    │   App B    │   App C    │
└────────────┴────────────┴────────────┘
```

- Tất cả container **chia sẻ kernel** của Host OS
- Nhẹ: 5MB - 200MB cho container image
- Khởi động: < 1 giây
- Isolation: Process-level (namespaces + cgroups)

### 1.3 So sánh

| Tiêu chí | VM | Container |
|----------|-----|-----------|
| Startup time | 30s - 5min | < 1s |
| Image size | GB | MB |
| RAM overhead | 500MB+ per VM | ~0 overhead |
| Isolation | Strong (hypervisor) | Process-level (namespace) |
| Density | 10-20 VMs per host | 100-1000 containers per host |
| Portability | Moderate | Excellent |

---

## 2. Docker Architecture

### 2.1 Core Components

```
┌─────────────────────────────────────────────────┐
│                Docker Client (CLI)               │
│  docker build, docker run, docker push           │
└───────────────────────┬─────────────────────────┘
                        │ REST API
┌───────────────────────▼─────────────────────────┐
│                Docker Daemon (dockerd)            │
│                                                   │
│  ┌──────────┐  ┌──────────────┐  ┌────────────┐ │
│  │  Images   │  │  Containers  │  │  Volumes   │ │
│  └──────────┘  └──────────────┘  └────────────┘ │
│  ┌──────────┐  ┌──────────────┐                  │
│  │ Networks  │  │  containerd  │                  │
│  └──────────┘  └──────┬───────┘                  │
└──────────────────────┬──────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────┐
│              Container Runtime (runc)             │
│         Linux Kernel: namespaces + cgroups        │
└─────────────────────────────────────────────────┘
```

### 2.2 Linux Kernel Features

Container được xây dựng trên 2 tính năng cốt lõi của Linux kernel:

**Namespaces** — Cách ly (isolation):
- `pid` — Process isolation (container chỉ thấy processes của mình)
- `net` — Network isolation (mỗi container có network stack riêng)
- `mnt` — Mount filesystem riêng
- `uts` — Hostname riêng
- `ipc` — Inter-process communication riêng
- `user` — User/group ID mapping riêng

**Cgroups** — Giới hạn tài nguyên:
- CPU (millicores)
- Memory (bytes)
- Disk I/O
- Network bandwidth

---

## 3. Dockerfile Best Practices

### 3.1 Multi-stage Build

Multi-stage build giúp tạo image nhỏ gọn bằng cách tách build environment và runtime:

```dockerfile
# === Stage 1: Build ===
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY . .
RUN npm run build

# === Stage 2: Runtime ===
FROM node:20-alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

USER appuser
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/health || exit 1
CMD ["node", "dist/main.js"]
```

**Kết quả**: Image build ~800MB → Image runtime ~150MB

### 3.2 Layer Caching

Docker cache mỗi layer. Sắp xếp Dockerfile để tối ưu cache:

```dockerfile
# ✅ Tốt: Dependencies ít thay đổi → cache được layer này
COPY package*.json ./
RUN npm ci
# Source code thay đổi thường xuyên → chỉ invalidate từ đây
COPY . .
RUN npm run build

# ❌ Xấu: Mỗi lần thay đổi code → rebuild tất cả
COPY . .
RUN npm ci && npm run build
```

### 3.3 Security Best Practices

```dockerfile
# 1. Dùng specific version, KHÔNG dùng :latest
FROM node:20.11-alpine3.19

# 2. Chạy với non-root user
RUN addgroup -S app && adduser -S app -G app
USER app

# 3. Không copy file nhạy cảm
# .dockerignore:
# .env
# .git
# node_modules
# *.secret

# 4. Scan image trước khi push
# trivy image myapp:1.0.0
```

### 3.4 Java / Go / Python Examples

**Java (Spring Boot):**

```dockerfile
FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /app
COPY gradle/ gradle/
COPY gradlew build.gradle.kts settings.gradle.kts ./
RUN ./gradlew dependencies --no-daemon
COPY src/ src/
RUN ./gradlew bootJar --no-daemon

FROM eclipse-temurin:21-jre-alpine
RUN addgroup -S app && adduser -S app -G app
COPY --from=build /app/build/libs/*.jar /app/app.jar
USER app
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
```

**Go:**

```dockerfile
FROM golang:1.22-alpine AS build
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /server ./cmd/server

FROM scratch
COPY --from=build /server /server
COPY --from=build /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
EXPOSE 8080
ENTRYPOINT ["/server"]
```

Go với `scratch` base image → image size ~10-15MB.

---

## 4. Container Networking

### 4.1 Docker Network Types

```
Bridge (default)     Host              None         Overlay (Swarm/K8s)
┌────────────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────────┐
│ Container A    │  │Container │  │Container │  │ Host 1    Host 2 │
│ 172.17.0.2     │  │shares    │  │no network│  │ ┌─────┐  ┌─────┐│
│ Container B    │  │host's    │  │isolated  │  │ │ C-A │  │ C-B ││
│ 172.17.0.3     │  │network   │  │          │  │ └──┬──┘  └──┬──┘│
│      │         │  │stack     │  │          │  │    └────┬────┘   │
│ docker0 bridge │  │          │  │          │  │   VXLAN overlay  │
└────────────────┘  └──────────┘  └──────────┘  └──────────────────┘
```

### 4.2 Docker Compose Networking

```yaml
services:
  order-service:
    build: ./order-service
    ports:
      - "8080:8080"
    networks:
      - backend
    depends_on:
      postgres:
        condition: service_healthy

  payment-service:
    build: ./payment-service
    ports:
      - "8081:8080"
    networks:
      - backend

  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: orders
      POSTGRES_USER: app
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - backend
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app"]
      interval: 5s
      timeout: 3s
      retries: 5

networks:
  backend:
    driver: bridge

volumes:
  pgdata:

secrets:
  db_password:
    file: ./secrets/db_password.txt
```

Trong cùng network, services gọi nhau qua **tên service**:
```
order-service → http://payment-service:8080/api/pay
```

---

## 5. Image Registry

### 5.1 Quy trình CI/CD với Registry

```
Developer → Git Push → CI Pipeline:
  1. docker build -t registry.example.com/order-service:v1.2.3
  2. trivy image registry.example.com/order-service:v1.2.3
  3. docker push registry.example.com/order-service:v1.2.3
  4. Update K8s manifest → ArgoCD sync

Registry Options:
├── Docker Hub (public)
├── Harbor (self-hosted, recommended)
├── AWS ECR
├── Google Artifact Registry
└── GitHub Container Registry (ghcr.io)
```

### 5.2 Image Tagging Strategy

```bash
# ✅ Semantic versioning
registry.example.com/order-service:1.2.3
registry.example.com/order-service:1.2.3-alpine

# ✅ Git commit hash (immutable)
registry.example.com/order-service:abc123f

# ❌ KHÔNG dùng :latest trong production
registry.example.com/order-service:latest
```

---

## 6. Tổng kết

| Concept | Key Point |
|---------|-----------|
| Container vs VM | Container nhẹ hơn, khởi động nhanh hơn, density cao hơn |
| Multi-stage Build | Tách build và runtime để giảm image size |
| Layer Caching | Sắp xếp Dockerfile để tối ưu cache |
| Non-root User | Luôn chạy container với non-root user |
| Image Scanning | Scan trước khi push, block vulnerable images |
| Networking | Containers trong cùng network gọi nhau qua service name |

> **Bài tiếp theo**: Kubernetes Architecture — Cách Kubernetes orchestrate hàng trăm container, tự động scale, self-heal và manage toàn bộ lifecycle.
