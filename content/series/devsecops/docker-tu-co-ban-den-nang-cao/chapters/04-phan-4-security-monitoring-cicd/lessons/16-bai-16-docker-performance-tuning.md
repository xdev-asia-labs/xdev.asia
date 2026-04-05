---
id: 019d8a21-a116-7001-b001-d0c4e7000116
title: 'Bài 16: Docker Performance Tuning'
slug: bai-16-docker-performance-tuning
description: >-
  Tối ưu Docker build speed, layer caching strategies, BuildKit features,
  container runtime performance, resource management (cgroups), storage
  driver optimization, network performance tuning và benchmarking tools.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 4: Security, Monitoring và CI/CD"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8157" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8157)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1086" cy="228" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1072" cy="34" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1058" cy="100" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1044" cy="166" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1030" cy="232" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="128" x2="1100" y2="208" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="158" x2="1050" y2="228" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1015.2390923627308,156.5 1015.2390923627308,199.5 978,221 940.7609076372692,199.5 940.7609076372692,156.5 978,135" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — Bài 16</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 16: Docker Performance Tuning</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Docker từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Security, Monitoring và CI/CD</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-build-performance"><strong>1. Tối ưu Build Performance</strong></h2>

<h3><strong>1.1. BuildKit</strong></h3>
<pre><code class="language-bash"># Enable BuildKit
export DOCKER_BUILDKIT=1

# Hoặc permanent trong daemon.json
# { "features": { "buildkit": true } }

# BuildKit features:
# - Parallel build stages
# - Better caching
# - Cache mount
# - Secret mount
# - SSH forwarding
</code></pre>

<h3><strong>1.2. Layer Caching nâng cao</strong></h3>
<pre><code class="language-dockerfile"># Cache package manager downloads
FROM node:20-alpine
WORKDIR /app

# Cache npm packages
RUN --mount=type=cache,target=/root/.npm \
    --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    npm ci --only=production

COPY . .
CMD ["node", "server.js"]
</code></pre>

<pre><code class="language-dockerfile"># Python - Cache pip downloads
FROM python:3.12-slim
WORKDIR /app
RUN --mount=type=cache,target=/root/.cache/pip \
    --mount=type=bind,source=requirements.txt,target=requirements.txt \
    pip install -r requirements.txt
COPY . .
</code></pre>

<h3><strong>1.3. Build Context Optimization</strong></h3>
<pre><code class="language-bash"># Kiểm tra build context size
docker build --no-cache . 2>&1 | head -5

# Sử dụng .dockerignore hiệu quả
# Chỉ include files cần thiết
</code></pre>

<pre><code># .dockerignore
*
!src/
!package*.json
!tsconfig.json
</code></pre>

<h3><strong>1.4. Remote Cache</strong></h3>
<pre><code class="language-bash"># Export cache vào registry
docker buildx build \
    --cache-to type=registry,ref=myregistry/myapp:cache \
    --cache-from type=registry,ref=myregistry/myapp:cache \
    -t myapp:latest .

# GitHub Actions cache
docker buildx build \
    --cache-from type=gha \
    --cache-to type=gha,mode=max \
    -t myapp:latest .
</code></pre>

<h2 id="2-runtime-performance"><strong>2. Container Runtime Performance</strong></h2>

<h3><strong>2.1. Resource Management (cgroups v2)</strong></h3>
<pre><code class="language-bash"># CPU limits
docker run -d \
    --cpus=2.0 \                    # Giới hạn 2 CPU cores
    --cpu-shares=1024 \              # Relative weight
    --cpuset-cpus="0-3" \            # Pin to specific CPUs
    myapp

# Memory limits
docker run -d \
    --memory=1g \                    # Hard limit
    --memory-reservation=512m \      # Soft limit
    --memory-swap=2g \               # Swap limit
    --oom-kill-disable=false \       # Cho phép OOM killer
    myapp

# I/O limits
docker run -d \
    --device-read-bps /dev/sda:100mb \
    --device-write-bps /dev/sda:50mb \
    --device-read-iops /dev/sda:1000 \
    myapp
</code></pre>

<h3><strong>2.2. Kernel Parameters</strong></h3>
<pre><code class="language-bash"># Tối ưu sysctl cho containers
docker run -d \
    --sysctl net.core.somaxconn=65535 \
    --sysctl net.ipv4.tcp_max_syn_backlog=65535 \
    nginx

# Ulimits
docker run -d \
    --ulimit nofile=65535:65535 \
    --ulimit nproc=65535:65535 \
    myapp
</code></pre>

<h2 id="3-storage-performance"><strong>3. Storage Driver Optimization</strong></h2>
<pre><code class="language-json">// daemon.json - overlay2 (recommended)
{
  "storage-driver": "overlay2",
  "storage-opts": [
    "overlay2.override_kernel_check=true"
  ]
}
</code></pre>

<pre><code class="language-bash"># Kiểm tra storage driver
docker info | grep "Storage Driver"

# Disk usage
docker system df
docker system df -v

# Cleanup unused data
docker system prune -a --volumes

# Xem layer sizes
docker history --no-trunc myapp:latest
</code></pre>

<h2 id="4-network-performance"><strong>4. Network Performance Tuning</strong></h2>
<pre><code class="language-bash"># Host network - best performance (no NAT overhead)
docker run -d --network host myapp

# Disable userland proxy
# daemon.json: { "userland-proxy": false }

# MTU optimization
docker network create --opt com.docker.network.driver.mtu=9000 my-network
</code></pre>

<h2 id="5-image-optimization"><strong>5. Image Size Optimization</strong></h2>
<pre><code class="language-bash"># Analyze image layers
docker history myapp:latest
dive myapp:latest  # Interactive layer analysis tool

# Slim images
docker-slim build myapp:latest
</code></pre>

<h3><strong>Size comparison example:</strong></h3>
<pre><code class="language-bash"># Node.js app
node:20          → 1.1 GB
node:20-slim     → 240 MB
node:20-alpine   → 130 MB
distroless/nodejs → 120 MB

# Với multi-stage build
myapp (full)     → 1.1 GB
myapp (optimized) → 80 MB  (giảm 93%)
</code></pre>

<h2 id="6-benchmarking"><strong>6. Benchmarking Tools</strong></h2>
<pre><code class="language-bash"># Container benchmark
docker run --rm \
    -v /var/run/docker.sock:/var/run/docker.sock \
    docker/docker-bench-security

# Network benchmark
docker run -it --rm networkstatic/iperf3 -s  # Server
docker run -it --rm networkstatic/iperf3 -c host_ip  # Client

# Disk I/O benchmark
docker run --rm -v test-vol:/data \
    alpine sh -c "dd if=/dev/zero of=/data/test bs=1M count=1024 conv=fdatasync"

# HTTP benchmark
docker run --rm williamyeh/wrk -t4 -c100 -d30s http://api:3000/
</code></pre>

<h2 id="7-monitoring-performance"><strong>7. Performance Monitoring</strong></h2>
<pre><code class="language-bash"># Real-time stats
docker stats --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.MemPerc}}\t{{.NetIO}}\t{{.BlockIO}}"

# Top processes trong container
docker top my-app

# Detailed resource usage
docker exec my-app cat /proc/1/status
docker exec my-app cat /sys/fs/cgroup/memory.current
</code></pre>

<h2 id="8-performance-checklist"><strong>8. Performance Checklist</strong></h2>
<ul>
<li><p>☐ BuildKit enabled</p></li>
<li><p>☐ .dockerignore optimized</p></li>
<li><p>☐ Multi-stage builds</p></li>
<li><p>☐ Layer caching maximized</p></li>
<li><p>☐ Minimal base images</p></li>
<li><p>☐ Resource limits set</p></li>
<li><p>☐ Storage driver: overlay2</p></li>
<li><p>☐ Regular cleanup (prune)</p></li>
<li><p>☐ Monitoring in place</p></li>
</ul>

<h2 id="9-tong-ket"><strong>9. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã nắm được:</p>
<ul>
<li><p>BuildKit và layer caching optimization</p></li>
<li><p>Container runtime resource management</p></li>
<li><p>Storage driver và disk optimization</p></li>
<li><p>Network performance tuning</p></li>
<li><p>Image size optimization</p></li>
<li><p>Benchmarking và monitoring tools</p></li>
</ul>
<p>Bài tiếp theo sẽ hướng dẫn Docker Swarm - Container Orchestration.</p>
