---
id: 019d8a21-a102-7001-b001-d0c4e7000102
title: 'Bài 2: Cài đặt Docker và Các lệnh Cơ bản'
slug: bai-2-cai-dat-docker-va-cac-lenh-co-ban
description: >-
  Hướng dẫn cài đặt Docker Engine trên Ubuntu, CentOS, macOS và Windows.
  Làm quen với Docker CLI, các lệnh cơ bản như docker run, ps, stop, rm,
  exec, logs. Cấu hình Docker daemon và quản lý Docker service.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng Docker"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9304" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9304)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1023" cy="279" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="946" cy="102" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="869" cy="185" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="792" cy="268" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="91" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="229" x2="1100" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="259" x2="1050" y2="329" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1017.1051177665153,157 1017.1051177665153,201 979,223 940.8948822334847,201 940.8948822334847,157 979,135" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — Bài 2</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 2: Cài đặt Docker và Các lệnh Cơ bản</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Docker từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng Docker</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-cai-dat-docker-tren-ubuntu"><strong>1. Cài đặt Docker trên Ubuntu 24.04</strong></h2>
<p>Ubuntu là platform phổ biến nhất để chạy Docker Engine trong production.</p>

<h3><strong>Bước 1: Gỡ các phiên bản cũ</strong></h3>
<pre><code class="language-bash"># Gỡ các packages Docker cũ (nếu có)
sudo apt-get remove docker docker-engine docker.io containerd runc

# Cleanup
sudo apt-get autoremove -y
</code></pre>

<h3><strong>Bước 2: Cài đặt prerequisites</strong></h3>
<pre><code class="language-bash"># Update package index
sudo apt-get update

# Cài đặt các packages cần thiết
sudo apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
</code></pre>

<h3><strong>Bước 3: Thêm Docker GPG key và repository</strong></h3>
<pre><code class="language-bash"># Thêm Docker official GPG key
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
    sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Thêm Docker repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
</code></pre>

<h3><strong>Bước 4: Cài đặt Docker Engine</strong></h3>
<pre><code class="language-bash"># Update package index
sudo apt-get update

# Cài đặt Docker Engine, CLI, containerd, và plugins
sudo apt-get install -y \
    docker-ce \
    docker-ce-cli \
    containerd.io \
    docker-buildx-plugin \
    docker-compose-plugin
</code></pre>

<h3><strong>Bước 5: Post-installation</strong></h3>
<pre><code class="language-bash"># Thêm user vào docker group (không cần sudo)
sudo usermod -aG docker $USER

# Apply group changes (hoặc logout/login)
newgrp docker

# Verify cài đặt thành công
docker run hello-world
</code></pre>

<h2 id="2-cai-dat-tren-centos"><strong>2. Cài đặt Docker trên CentOS/RHEL</strong></h2>
<pre><code class="language-bash"># Cài đặt yum-utils
sudo yum install -y yum-utils

# Thêm Docker repository
sudo yum-config-manager --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

# Cài đặt Docker Engine
sudo yum install -y docker-ce docker-ce-cli containerd.io \
    docker-buildx-plugin docker-compose-plugin

# Khởi động Docker
sudo systemctl start docker
sudo systemctl enable docker

# Thêm user vào docker group
sudo usermod -aG docker $USER
</code></pre>

<h2 id="3-cai-dat-docker-desktop"><strong>3. Cài đặt Docker Desktop (macOS/Windows)</strong></h2>
<p>Trên macOS và Windows, sử dụng Docker Desktop:</p>
<ul>
<li><p><strong>macOS</strong>: Tải từ docker.com, kéo vào Applications, hoặc dùng <code>brew install --cask docker</code></p></li>
<li><p><strong>Windows</strong>: Tải Docker Desktop installer, cần WSL 2 backend (Windows 10/11)</p></li>
</ul>

<h2 id="4-cau-hinh-docker-daemon"><strong>4. Cấu hình Docker Daemon</strong></h2>
<p>File cấu hình daemon nằm ở <code>/etc/docker/daemon.json</code>:</p>
<pre><code class="language-json">{
  "storage-driver": "overlay2",
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  },
  "default-address-pools": [
    {"base": "172.80.0.0/16", "size": 24}
  ],
  "dns": ["8.8.8.8", "8.8.4.4"],
  "live-restore": true,
  "userland-proxy": false
}
</code></pre>

<pre><code class="language-bash"># Sau khi thay đổi daemon.json, restart Docker
sudo systemctl daemon-reload
sudo systemctl restart docker
</code></pre>

<h2 id="5-docker-cli-co-ban"><strong>5. Docker CLI Cơ bản</strong></h2>

<h3><strong>5.1. docker run - Chạy container</strong></h3>
<pre><code class="language-bash"># Chạy container đơn giản
docker run hello-world

# Chạy container interactive (vào shell)
docker run -it ubuntu bash

# Chạy container ở background (detached mode)
docker run -d --name my-nginx -p 8080:80 nginx

# Chạy với environment variables
docker run -d --name my-db \
    -e POSTGRES_PASSWORD=mysecretpassword \
    -e POSTGRES_DB=myapp \
    -p 5432:5432 \
    postgres:16

# Chạy với volume mount
docker run -d --name my-app \
    -v /host/path:/container/path \
    -p 3000:3000 \
    node:20-alpine
</code></pre>

<h3><strong>5.2. Quản lý containers</strong></h3>
<pre><code class="language-bash"># Liệt kê containers đang chạy
docker ps

# Liệt kê tất cả containers (kể cả stopped)
docker ps -a

# Dừng container
docker stop my-nginx

# Khởi động lại container
docker start my-nginx

# Restart container
docker restart my-nginx

# Xóa container (phải stop trước)
docker rm my-nginx

# Force xóa container đang chạy
docker rm -f my-nginx

# Xóa tất cả stopped containers
docker container prune
</code></pre>

<h3><strong>5.3. Tương tác với container</strong></h3>
<pre><code class="language-bash"># Exec - chạy lệnh trong container đang chạy
docker exec -it my-nginx bash
docker exec my-nginx cat /etc/nginx/nginx.conf

# Xem logs
docker logs my-nginx
docker logs -f my-nginx          # Follow logs (real-time)
docker logs --tail 100 my-nginx  # 100 dòng cuối
docker logs --since 1h my-nginx  # Logs trong 1 giờ qua

# Copy files giữa host và container
docker cp myfile.txt my-nginx:/tmp/
docker cp my-nginx:/etc/nginx/nginx.conf ./

# Xem chi tiết container
docker inspect my-nginx

# Xem resource usage
docker stats
docker stats my-nginx
</code></pre>

<h2 id="6-docker-system"><strong>6. Docker System Commands</strong></h2>
<pre><code class="language-bash"># Thông tin hệ thống Docker
docker info

# Phiên bản Docker
docker version

# Disk usage
docker system df
docker system df -v  # Chi tiết

# Cleanup toàn bộ unused resources
docker system prune        # Containers, networks, images (dangling)
docker system prune -a     # Bao gồm cả unused images
docker system prune --volumes  # Bao gồm cả volumes
</code></pre>

<h2 id="7-thuc-hanh"><strong>7. Thực hành</strong></h2>
<p>Hãy thử các bài tập sau để làm quen với Docker:</p>
<ol>
<li><p>Chạy một Nginx container, truy cập qua browser tại <code>http://localhost:8080</code></p></li>
<li><p>Chạy một PostgreSQL container với custom password</p></li>
<li><p>Exec vào container và kiểm tra các processes bên trong</p></li>
<li><p>Xem logs và stats của containers</p></li>
<li><p>Dọn dẹp tất cả containers và images</p></li>
</ol>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã học được:</p>
<ul>
<li><p>Cài đặt Docker Engine trên các hệ điều hành phổ biến</p></li>
<li><p>Cấu hình Docker daemon với daemon.json</p></li>
<li><p>Các lệnh cơ bản: run, ps, stop, rm, exec, logs</p></li>
<li><p>Interactive vs Detached mode</p></li>
<li><p>Docker system commands để quản lý resources</p></li>
</ul>
<p>Bài tiếp theo sẽ đi sâu vào Docker Images - cách build, pull và quản lý images hiệu quả.</p>
