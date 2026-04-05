---
id: 019d8a21-a107-7001-b001-d0c4e7000107
title: 'Bài 7: Docker Registry - Docker Hub và Private Registry'
slug: bai-7-docker-registry-docker-hub-va-private-registry
description: >-
  Làm việc với Docker Hub, tạo repositories, automated builds. Triển khai
  Private Registry với Docker Registry, Harbor. Image tagging strategies,
  versioning, vulnerability scanning và registry security best practices.
duration_minutes: 140
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Dockerfile và Image Optimization"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1456" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1456)"/>

  <!-- Decorations -->
  <g>
    <circle cx="848" cy="174" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1096" cy="222" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="844" cy="270" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1092" cy="58" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="840" cy="106" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="154" x2="1100" y2="234" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="184" x2="1050" y2="254" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="929.1147367097487,89.5 929.1147367097487,118.5 904,133 878.8852632902513,118.5 878.8852632902513,89.50000000000001 904,75" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — Bài 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 7: Docker Registry - Docker Hub và</tspan>
      <tspan x="60" dy="42">Private Registry</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Docker từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Dockerfile và Image Optimization</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-docker-registry-overview"><strong>1. Docker Registry - Tổng quan</strong></h2>
<p>Docker Registry là dịch vụ lưu trữ và phân phối Docker images. Registry đóng vai trò trung tâm trong workflow CI/CD và deployment.</p>

<h3><strong>Các loại Registry phổ biến</strong></h3>
<ul>
<li><p><strong>Docker Hub</strong>: Public registry mặc định, miễn phí cho public repos</p></li>
<li><p><strong>GitHub Container Registry (GHCR)</strong>: Tích hợp với GitHub Actions</p></li>
<li><p><strong>AWS ECR</strong>: Amazon Elastic Container Registry</p></li>
<li><p><strong>Google Artifact Registry</strong>: GCP container registry</p></li>
<li><p><strong>Azure Container Registry (ACR)</strong>: Microsoft Azure</p></li>
<li><p><strong>Harbor</strong>: Open-source enterprise registry</p></li>
<li><p><strong>Docker Registry</strong>: Self-hosted open-source registry</p></li>
</ul>

<h2 id="2-docker-hub"><strong>2. Docker Hub</strong></h2>

<h3><strong>2.1. Tạo và quản lý Repositories</strong></h3>
<pre><code class="language-bash"># Login vào Docker Hub
docker login

# Tag image cho Docker Hub
docker tag myapp:latest username/myapp:1.0.0
docker tag myapp:latest username/myapp:latest

# Push image
docker push username/myapp:1.0.0
docker push username/myapp:latest

# Pull image
docker pull username/myapp:1.0.0
</code></pre>

<h3><strong>2.2. Automated Builds với GitHub</strong></h3>
<p>Docker Hub có thể tự động build image khi push code lên GitHub:</p>
<ol>
<li><p>Link GitHub repository với Docker Hub repository</p></li>
<li><p>Cấu hình build rules (branch, tag patterns)</p></li>
<li><p>Mỗi push sẽ trigger automated build</p></li>
</ol>

<h3><strong>2.3. Webhooks</strong></h3>
<p>Docker Hub hỗ trợ webhooks để notify khi image được push thành công, phục vụ cho CI/CD pipeline.</p>

<h2 id="3-self-hosted-registry"><strong>3. Self-hosted Docker Registry</strong></h2>

<h3><strong>3.1. Triển khai Registry cơ bản</strong></h3>
<pre><code class="language-bash"># Chạy registry đơn giản
docker run -d -p 5000:5000 --name registry \
    --restart=always \
    registry:2

# Push image lên local registry
docker tag myapp:latest localhost:5000/myapp:1.0
docker push localhost:5000/myapp:1.0

# Pull image từ local registry
docker pull localhost:5000/myapp:1.0
</code></pre>

<h3><strong>3.2. Registry với Storage và TLS</strong></h3>
<pre><code class="language-yaml"># docker-compose.yml cho production registry
services:
  registry:
    image: registry:2
    ports:
      - "5000:5000"
    environment:
      REGISTRY_STORAGE_FILESYSTEM_ROOTDIRECTORY: /var/lib/registry
      REGISTRY_HTTP_TLS_CERTIFICATE: /certs/domain.crt
      REGISTRY_HTTP_TLS_KEY: /certs/domain.key
      REGISTRY_AUTH: htpasswd
      REGISTRY_AUTH_HTPASSWD_REALM: "Registry Realm"
      REGISTRY_AUTH_HTPASSWD_PATH: /auth/htpasswd
    volumes:
      - registry-data:/var/lib/registry
      - ./certs:/certs:ro
      - ./auth:/auth:ro
    restart: always

volumes:
  registry-data:
</code></pre>

<pre><code class="language-bash"># Tạo htpasswd file
docker run --rm --entrypoint htpasswd \
    httpd:2 -Bbn admin secretpassword > auth/htpasswd

# Login vào private registry
docker login registry.example.com
</code></pre>

<h2 id="4-harbor"><strong>4. Harbor - Enterprise Container Registry</strong></h2>
<p>Harbor là open-source enterprise registry với nhiều tính năng nâng cao:</p>
<ul>
<li><p><strong>RBAC</strong>: Role-based access control</p></li>
<li><p><strong>Vulnerability Scanning</strong>: Tích hợp Trivy</p></li>
<li><p><strong>Image Signing</strong>: Cosign/Notary</p></li>
<li><p><strong>Replication</strong>: Sync images giữa registries</p></li>
<li><p><strong>Garbage Collection</strong>: Tự động cleanup</p></li>
<li><p><strong>Audit Logs</strong>: Theo dõi mọi hoạt động</p></li>
</ul>

<pre><code class="language-bash"># Cài đặt Harbor (đã có bài viết riêng trong series)
# Tham khảo: "Cài đặt Harbor trên Ubuntu 24.04"

# Push image lên Harbor
docker login harbor.example.com
docker tag myapp:latest harbor.example.com/myproject/myapp:1.0
docker push harbor.example.com/myproject/myapp:1.0
</code></pre>

<h2 id="5-image-tagging-strategies"><strong>5. Image Tagging Strategies</strong></h2>

<h3><strong>Semantic Versioning</strong></h3>
<pre><code class="language-bash"># Major.Minor.Patch
docker tag myapp:latest myapp:1.2.3
docker tag myapp:latest myapp:1.2
docker tag myapp:latest myapp:1

# Cho phép user chọn level of specificity
# myapp:1     → latest 1.x.x
# myapp:1.2   → latest 1.2.x
# myapp:1.2.3 → exact version
</code></pre>

<h3><strong>Git-based Tagging</strong></h3>
<pre><code class="language-bash"># Git commit SHA
docker tag myapp:latest myapp:abc1234

# Git branch
docker tag myapp:latest myapp:main
docker tag myapp:latest myapp:develop

# Git tag
docker tag myapp:latest myapp:v1.2.3
</code></pre>

<h3><strong>Date-based Tagging</strong></h3>
<pre><code class="language-bash"># Calendar versioning
docker tag myapp:latest myapp:2026.03.30
docker tag myapp:latest myapp:20260330-abc1234
</code></pre>

<h2 id="6-registry-api"><strong>6. Registry HTTP API</strong></h2>
<pre><code class="language-bash"># Liệt kê repositories
curl https://registry.example.com/v2/_catalog

# Liệt kê tags
curl https://registry.example.com/v2/myapp/tags/list

# Xem manifest
curl -H "Accept: application/vnd.docker.distribution.manifest.v2+json" \
    https://registry.example.com/v2/myapp/manifests/latest
</code></pre>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã nắm được:</p>
<ul>
<li><p>Các loại Docker Registry và use cases</p></li>
<li><p>Docker Hub: push, pull, automated builds, webhooks</p></li>
<li><p>Self-hosted registry với Docker Registry</p></li>
<li><p>Harbor enterprise registry overview</p></li>
<li><p>Image tagging strategies cho production</p></li>
<li><p>Registry HTTP API</p></li>
</ul>
<p>Bài tiếp theo sẽ hướng dẫn Docker Compose cơ bản - deploy multi-container applications.</p>
