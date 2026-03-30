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
