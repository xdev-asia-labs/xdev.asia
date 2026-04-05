---
id: 019d8a21-a106-7001-b001-d0c4e7000106
title: 'Bài 6: Multi-stage Builds và Tối ưu Docker Image'
slug: bai-6-multi-stage-builds-va-toi-uu-docker-image
description: >-
  Kỹ thuật multi-stage builds để giảm kích thước image, layer caching
  optimization, .dockerignore, Alpine vs Distroless base images, security
  scanning với Trivy/Snyk, và các chiến lược tối ưu image cho production.
duration_minutes: 160
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Dockerfile và Image Optimization"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8886" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8886)"/>

  <!-- Decorations -->
  <g>
    <circle cx="863" cy="219" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="626" cy="282" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="889" cy="85" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="652" cy="148" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="915" cy="211" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="149" x2="1100" y2="229" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="179" x2="1050" y2="249" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1037.1051177665154,177 1037.1051177665154,221 999,243 960.8948822334847,221 960.8948822334847,177 999,155" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — Bài 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 6: Multi-stage Builds và Tối ưu Docker</tspan>
      <tspan x="60" dy="42">Image</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Docker từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Dockerfile và Image Optimization</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-multi-stage-builds"><strong>1. Multi-stage Builds</strong></h2>
<p>Multi-stage builds cho phép sử dụng nhiều FROM statements trong một Dockerfile. Chỉ artifacts cần thiết được copy vào final image, giúp giảm kích thước image đáng kể.</p>

<h3><strong>Ví dụ: Go Application</strong></h3>
<pre><code class="language-dockerfile"># Stage 1: Build
FROM golang:1.22-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o /app/server .

# Stage 2: Production (chỉ chứa binary)
FROM scratch
COPY --from=builder /app/server /server
EXPOSE 8080
ENTRYPOINT ["/server"]
# Kết quả: Image chỉ ~10MB thay vì ~300MB
</code></pre>

<h3><strong>Ví dụ: React Application</strong></h3>
<pre><code class="language-dockerfile"># Stage 1: Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Stage 2: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production (Nginx serve static files)
FROM nginx:1.27-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# Kết quả: Image ~25MB thay vì ~1.2GB
</code></pre>

<h3><strong>Ví dụ: Java Spring Boot</strong></h3>
<pre><code class="language-dockerfile"># Stage 1: Build với Maven
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn package -DskipTests -B

# Stage 2: Production
FROM eclipse-temurin:21-jre-alpine
RUN addgroup -S spring && adduser -S spring -G spring
WORKDIR /app
COPY --from=build --chown=spring:spring /app/target/*.jar app.jar
USER spring
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
    CMD wget --spider -q http://localhost:8080/actuator/health || exit 1
ENTRYPOINT ["java", "-jar", "app.jar"]
</code></pre>

<h2 id="2-layer-caching"><strong>2. Layer Caching Optimization</strong></h2>
<p>Docker cache mỗi layer. Nếu một layer thay đổi, tất cả layers phía sau bị invalidate.</p>

<h3><strong>Chiến lược tối ưu cache</strong></h3>
<pre><code class="language-dockerfile"># ❌ Bad: Mọi thay đổi code invalidate npm install
COPY . .
RUN npm ci

# ✅ Good: Chỉ reinstall khi package.json thay đổi
COPY package*.json ./
RUN npm ci
COPY . .
</code></pre>

<pre><code class="language-dockerfile"># ✅ Tách system dependencies và app dependencies
FROM python:3.12-slim

# Layer 1: System deps (ít thay đổi)
RUN apt-get update && \
    apt-get install -y --no-install-recommends gcc libpq-dev && \
    rm -rf /var/lib/apt/lists/*

# Layer 2: Python deps (thay đổi khi requirements.txt đổi)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Layer 3: App code (thay đổi thường xuyên)
COPY . .
</code></pre>

<h2 id="3-base-image-comparison"><strong>3. So sánh Base Images</strong></h2>

<h3><strong>Alpine Linux</strong></h3>
<pre><code class="language-dockerfile"># ~7MB, dùng musl libc thay vì glibc
FROM alpine:3.20
RUN apk add --no-cache nodejs npm

# Ưu điểm: Rất nhỏ, ít attack surface
# Nhược điểm: Có thể gặp compatibility issues với glibc-dependent packages
</code></pre>

<h3><strong>Distroless (Google)</strong></h3>
<pre><code class="language-dockerfile"># Không có shell, package manager, chỉ chứa runtime
FROM gcr.io/distroless/nodejs20-debian12
COPY --from=builder /app /app
CMD ["server.js"]

# Ưu điểm: Cực kỳ secure, nhỏ
# Nhược điểm: Không thể exec vào debug
</code></pre>

<h3><strong>Scratch</strong></h3>
<pre><code class="language-dockerfile"># Empty image, 0 bytes
FROM scratch
COPY --from=builder /app/binary /binary
ENTRYPOINT ["/binary"]

# Chỉ cho static binaries (Go, Rust)
</code></pre>

<h2 id="4-security-scanning"><strong>4. Security Scanning</strong></h2>

<h3><strong>Trivy</strong></h3>
<pre><code class="language-bash"># Scan image cho vulnerabilities
trivy image myapp:latest

# Scan với severity filter
trivy image --severity HIGH,CRITICAL myapp:latest

# Scan Dockerfile
trivy config Dockerfile

# Fail nếu có critical vulnerabilities
trivy image --exit-code 1 --severity CRITICAL myapp:latest
</code></pre>

<h3><strong>Docker Scout</strong></h3>
<pre><code class="language-bash"># Analyze image
docker scout quickview myapp:latest

# Chi tiết vulnerabilities
docker scout cves myapp:latest

# So sánh 2 images
docker scout compare --to myapp:v1.0 myapp:v2.0
</code></pre>

<h2 id="5-buildkit"><strong>5. BuildKit Features</strong></h2>
<pre><code class="language-bash"># Enable BuildKit
export DOCKER_BUILDKIT=1

# Hoặc trong daemon.json
# { "features": { "buildkit": true } }
</code></pre>

<pre><code class="language-dockerfile"># Cache mount - cache package downloads
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# Secret mount - build với secrets mà không bị lưu trong layer
RUN --mount=type=secret,id=npmrc,target=/root/.npmrc \
    npm ci

# SSH mount - dùng SSH keys trong build
RUN --mount=type=ssh \
    git clone git@github.com:private/repo.git
</code></pre>

<pre><code class="language-bash"># Build với secrets
docker build --secret id=npmrc,src=.npmrc -t myapp .

# Build với SSH
docker build --ssh default -t myapp .
</code></pre>

<h2 id="6-chien-luoc-toi-uu"><strong>6. Chiến lược tối ưu theo ngôn ngữ</strong></h2>

<h3><strong>Node.js</strong></h3>
<pre><code class="language-dockerfile">FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY . .
USER node
CMD ["node", "server.js"]
</code></pre>

<h3><strong>Python</strong></h3>
<pre><code class="language-dockerfile">FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
USER nobody
CMD ["python", "app.py"]
</code></pre>

<h3><strong>Go</strong></h3>
<pre><code class="language-dockerfile">FROM golang:1.22-alpine AS build
WORKDIR /app
COPY go.* ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -ldflags="-s -w" -o /server .

FROM scratch
COPY --from=build /server /server
ENTRYPOINT ["/server"]
</code></pre>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã nắm được:</p>
<ul>
<li><p>Multi-stage builds cho Go, Node.js, Java</p></li>
<li><p>Layer caching optimization strategies</p></li>
<li><p>So sánh Alpine vs Distroless vs Scratch</p></li>
<li><p>Security scanning với Trivy và Docker Scout</p></li>
<li><p>BuildKit features: cache mount, secret mount</p></li>
<li><p>Chiến lược tối ưu theo từng ngôn ngữ</p></li>
</ul>
<p>Bài tiếp theo sẽ hướng dẫn làm việc với Docker Registry, Docker Hub và Private Registry.</p>
