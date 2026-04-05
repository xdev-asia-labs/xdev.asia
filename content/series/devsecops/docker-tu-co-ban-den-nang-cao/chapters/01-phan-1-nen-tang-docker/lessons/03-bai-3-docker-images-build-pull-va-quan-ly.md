---
id: 019d8a21-a103-7001-b001-d0c4e7000103
title: 'Bài 3: Docker Images - Build, Pull và Quản lý'
slug: bai-3-docker-images-build-pull-va-quan-ly
description: >-
  Tìm hiểu Docker images là gì, layer architecture, docker pull/push,
  quản lý images với docker images, tag, rmi, prune. Hiểu Docker Hub,
  official images và cách chọn base image phù hợp cho dự án.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Nền tảng Docker"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1247" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1247)"/>

  <!-- Decorations -->
  <g>
    <circle cx="715" cy="215" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="830" cy="190" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="945" cy="165" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1060" cy="140" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="675" cy="115" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="245" x2="1100" y2="325" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="275" x2="1050" y2="345" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1029.6410161513775,175 1029.6410161513775,215 995,235 960.3589838486224,215 960.3589838486224,175 995,155" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Bài 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 3: Docker Images - Build, Pull và Quản</tspan>
      <tspan x="60" dy="42">lý</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Docker từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng Docker</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-docker-image-la-gi"><strong>1. Docker Image là gì?</strong></h2>
<p>Docker image là một <strong>read-only template</strong> chứa tất cả những gì cần thiết để chạy ứng dụng: code, runtime, libraries, environment variables và configuration files. Image là "blueprint" để tạo containers.</p>

<h3><strong>Layer Architecture</strong></h3>
<p>Docker image được xây dựng từ nhiều <strong>layers</strong> xếp chồng lên nhau. Mỗi instruction trong Dockerfile tạo ra một layer mới:</p>

<pre><code>┌─────────────────────────────────┐
│  Layer 4: COPY app.js /app/     │  ← Writable (Container layer)
├─────────────────────────────────┤
│  Layer 3: RUN npm install       │  ← Read-only
├─────────────────────────────────┤
│  Layer 2: RUN apt-get update    │  ← Read-only
├─────────────────────────────────┤
│  Layer 1: FROM ubuntu:22.04     │  ← Read-only (Base image)
└─────────────────────────────────┘
</code></pre>

<p><strong>Ưu điểm của layer architecture:</strong></p>
<ul>
<li><p><strong>Caching</strong>: Layers được cache, chỉ rebuild layers thay đổi</p></li>
<li><p><strong>Sharing</strong>: Nhiều images có thể chia sẻ base layers → tiết kiệm disk</p></li>
<li><p><strong>Efficiency</strong>: Pull image chỉ tải layers chưa có trên máy</p></li>
</ul>

<h2 id="2-docker-hub"><strong>2. Docker Hub và Official Images</strong></h2>
<p>Docker Hub là public registry lớn nhất, chứa hàng triệu images:</p>
<ul>
<li><p><strong>Official Images</strong>: Được Docker Inc. và maintainers xác nhận (nginx, postgres, node, python...)</p></li>
<li><p><strong>Verified Publisher</strong>: Images từ các vendors đã được xác minh (bitnami, grafana...)</p></li>
<li><p><strong>Community Images</strong>: Images do cộng đồng đóng góp</p></li>
</ul>

<h2 id="3-cac-lenh-quan-ly-images"><strong>3. Các lệnh quản lý Images</strong></h2>

<h3><strong>3.1. Pull images</strong></h3>
<pre><code class="language-bash"># Pull image mới nhất (latest tag)
docker pull nginx

# Pull image với tag cụ thể
docker pull nginx:1.27-alpine
docker pull postgres:16.4
docker pull node:20-slim

# Pull từ registry khác
docker pull ghcr.io/owner/image:tag
docker pull registry.example.com/myapp:v1.0
</code></pre>

<h3><strong>3.2. Liệt kê và tìm images</strong></h3>
<pre><code class="language-bash"># Liệt kê tất cả images
docker images
docker image ls

# Filter images
docker images --filter "dangling=true"   # Images không có tag
docker images --filter "reference=nginx"
docker images --format "{{.Repository}}:{{.Tag}} - {{.Size}}"

# Tìm image trên Docker Hub
docker search nginx
docker search --filter "is-official=true" postgres
</code></pre>

<h3><strong>3.3. Tag images</strong></h3>
<pre><code class="language-bash"># Tag image với tên mới
docker tag nginx:latest myregistry.com/nginx:v1.0
docker tag myapp:latest myapp:production

# Image tagging strategies
# Semantic versioning
docker tag myapp:latest myapp:1.0.0
docker tag myapp:latest myapp:1.0
docker tag myapp:latest myapp:1

# Git commit hash
docker tag myapp:latest myapp:abc1234

# Date-based
docker tag myapp:latest myapp:2026-03-30
</code></pre>

<h3><strong>3.4. Push images</strong></h3>
<pre><code class="language-bash"># Login vào registry
docker login
docker login registry.example.com

# Push image
docker push myregistry.com/nginx:v1.0

# Push tất cả tags
docker push --all-tags myregistry.com/nginx
</code></pre>

<h3><strong>3.5. Xem chi tiết và lịch sử</strong></h3>
<pre><code class="language-bash"># Xem chi tiết image
docker inspect nginx:latest

# Xem lịch sử layers
docker history nginx:latest
docker history --no-trunc nginx:latest

# Xem manifest
docker manifest inspect nginx:latest
</code></pre>

<h3><strong>3.6. Xóa và cleanup</strong></h3>
<pre><code class="language-bash"># Xóa image
docker rmi nginx:latest
docker image rm nginx:1.27

# Xóa tất cả dangling images
docker image prune

# Xóa tất cả unused images
docker image prune -a

# Force xóa
docker rmi -f image_id
</code></pre>

<h2 id="4-chon-base-image"><strong>4. Chọn Base Image phù hợp</strong></h2>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Base Image</th>
<th>Kích thước</th>
<th>Use case</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ubuntu/debian</strong></td>
<td>~77MB / ~124MB</td>
<td>Khi cần đầy đủ package manager</td>
</tr>
<tr>
<td><strong>alpine</strong></td>
<td>~7MB</td>
<td>Image nhỏ gọn, phù hợp production</td>
</tr>
<tr>
<td><strong>slim</strong></td>
<td>~80MB</td>
<td>Cân bằng giữa kích thước và compatibility</td>
</tr>
<tr>
<td><strong>distroless</strong></td>
<td>~20MB</td>
<td>Chỉ chứa app runtime, không có shell</td>
</tr>
<tr>
<td><strong>scratch</strong></td>
<td>0MB</td>
<td>Cho static binaries (Go, Rust)</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<pre><code class="language-bash"># So sánh kích thước
docker pull node:20          # ~1.1GB
docker pull node:20-slim     # ~240MB
docker pull node:20-alpine   # ~130MB
</code></pre>

<h2 id="5-build-image-co-ban"><strong>5. Build Image cơ bản với Dockerfile</strong></h2>
<pre><code class="language-dockerfile"># Dockerfile đơn giản cho Node.js app
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
</code></pre>

<pre><code class="language-bash"># Build image
docker build -t myapp:1.0 .

# Build với build context khác
docker build -t myapp:1.0 -f Dockerfile.prod .

# Build với build args
docker build --build-arg NODE_ENV=production -t myapp:1.0 .
</code></pre>

<h2 id="6-save-load-export-import"><strong>6. Save, Load, Export, Import</strong></h2>
<pre><code class="language-bash"># Save image ra file tar (backup/transfer)
docker save -o nginx-backup.tar nginx:latest

# Load image từ file tar
docker load -i nginx-backup.tar

# Export container filesystem ra tar
docker export my-container -o container-fs.tar

# Import từ tar thành image
docker import container-fs.tar myimage:imported
</code></pre>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã nắm được:</p>
<ul>
<li><p>Docker image layer architecture và cơ chế caching</p></li>
<li><p>Docker Hub, official images và verified publishers</p></li>
<li><p>Các lệnh quản lý images: pull, push, tag, rmi, prune</p></li>
<li><p>Cách chọn base image phù hợp (alpine, slim, distroless)</p></li>
<li><p>Build image cơ bản với Dockerfile</p></li>
<li><p>Save/load images để backup và transfer</p></li>
</ul>
<p>Bài tiếp theo sẽ đi sâu vào vòng đời và quản lý Docker containers.</p>
