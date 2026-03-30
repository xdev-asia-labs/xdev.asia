---
id: 019d8a21-a113-7001-b001-d0c4e7000113
title: 'Bài 13: Docker Security Best Practices'
slug: bai-13-docker-security-best-practices
description: >-
  Bảo mật Docker daemon, rootless containers, user namespaces, seccomp
  profiles, AppArmor/SELinux, read-only filesystems, capability dropping,
  image signing với Docker Content Trust, CIS Docker Benchmark và
  compliance scanning.
duration_minutes: 220
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Security, Monitoring và CI/CD"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---
<h2 id="1-docker-security-overview"><strong>1. Docker Security - Tổng quan</strong></h2>
<p>Bảo mật Docker bao gồm nhiều lớp: từ Docker daemon, container runtime, image, đến application. Mỗi lớp cần được bảo vệ riêng biệt.</p>

<pre><code>┌─────────────────────────────────────────┐
│  Layer 5: Application Security          │
│  (Code, dependencies, secrets)          │
├─────────────────────────────────────────┤
│  Layer 4: Image Security                │
│  (Base images, scanning, signing)       │
├─────────────────────────────────────────┤
│  Layer 3: Container Runtime Security    │
│  (Namespaces, cgroups, capabilities)    │
├─────────────────────────────────────────┤
│  Layer 2: Docker Daemon Security        │
│  (TLS, authorization, rootless)         │
├─────────────────────────────────────────┤
│  Layer 1: Host OS Security              │
│  (Kernel, updates, hardening)           │
└─────────────────────────────────────────┘
</code></pre>

<h2 id="2-docker-daemon-security"><strong>2. Docker Daemon Security</strong></h2>

<h3><strong>2.1. Rootless Docker</strong></h3>
<p>Chạy Docker daemon mà không cần root privileges:</p>
<pre><code class="language-bash"># Cài đặt rootless Docker
dockerd-rootless-setuptool.sh install

# Cấu hình environment
export PATH=/home/user/bin:$PATH
export DOCKER_HOST=unix:///run/user/1000/docker.sock

# Verify
docker info | grep -i rootless
</code></pre>

<h3><strong>2.2. Docker Daemon TLS</strong></h3>
<pre><code class="language-json">// /etc/docker/daemon.json
{
  "tls": true,
  "tlsverify": true,
  "tlscacert": "/etc/docker/ca.pem",
  "tlscert": "/etc/docker/server-cert.pem",
  "tlskey": "/etc/docker/server-key.pem",
  "hosts": ["unix:///var/run/docker.sock", "tcp://0.0.0.0:2376"]
}
</code></pre>

<h2 id="3-container-security"><strong>3. Container Runtime Security</strong></h2>

<h3><strong>3.1. Non-root User</strong></h3>
<pre><code class="language-dockerfile"># Trong Dockerfile
FROM node:20-alpine
RUN addgroup -S app && adduser -S app -G app
WORKDIR /app
COPY --chown=app:app . .
RUN npm ci --only=production
USER app
CMD ["node", "server.js"]
</code></pre>

<pre><code class="language-bash"># Verify container user
docker exec my-app whoami
docker exec my-app id
</code></pre>

<h3><strong>3.2. Read-only Filesystem</strong></h3>
<pre><code class="language-bash"># Container với read-only filesystem
docker run -d \
    --read-only \
    --tmpfs /tmp:rw,noexec,nosuid,size=100m \
    --tmpfs /var/run:rw,noexec,nosuid \
    -v app-data:/data \
    myapp
</code></pre>

<pre><code class="language-yaml"># Docker Compose
services:
  api:
    image: myapp:latest
    read_only: true
    tmpfs:
      - /tmp
      - /var/run
    volumes:
      - app-data:/data
</code></pre>

<h3><strong>3.3. Linux Capabilities</strong></h3>
<pre><code class="language-bash"># Drop tất cả capabilities và chỉ add cần thiết
docker run -d \
    --cap-drop ALL \
    --cap-add NET_BIND_SERVICE \
    myapp

# Xem capabilities của container
docker exec my-app cat /proc/1/status | grep Cap
</code></pre>

<h3><strong>3.4. Security Options</strong></h3>
<pre><code class="language-bash"># No new privileges
docker run -d --security-opt=no-new-privileges:true myapp

# Seccomp profile
docker run -d --security-opt seccomp=./seccomp-profile.json myapp

# AppArmor profile
docker run -d --security-opt apparmor=docker-default myapp
</code></pre>

<pre><code class="language-yaml"># Docker Compose
services:
  api:
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    cap_add:
      - NET_BIND_SERVICE
</code></pre>

<h2 id="4-image-security"><strong>4. Image Security</strong></h2>

<h3><strong>4.1. Vulnerability Scanning</strong></h3>
<pre><code class="language-bash"># Trivy scan
trivy image --severity HIGH,CRITICAL myapp:latest

# Docker Scout
docker scout cves myapp:latest

# Snyk
snyk container test myapp:latest

# Tích hợp vào CI/CD
# Fail build nếu có critical vulnerabilities
trivy image --exit-code 1 --severity CRITICAL myapp:latest
</code></pre>

<h3><strong>4.2. Docker Content Trust (Image Signing)</strong></h3>
<pre><code class="language-bash"># Enable Docker Content Trust
export DOCKER_CONTENT_TRUST=1

# Push signed image
docker push myregistry/myapp:1.0

# Pull chỉ signed images
docker pull myregistry/myapp:1.0

# Cosign (modern alternative)
cosign sign myregistry/myapp:1.0
cosign verify myregistry/myapp:1.0
</code></pre>

<h3><strong>4.3. Image Best Practices</strong></h3>
<ul>
<li><p>Sử dụng minimal base images (Alpine, Distroless)</p></li>
<li><p>Pin image versions (không dùng latest)</p></li>
<li><p>Scan images định kỳ</p></li>
<li><p>Không cài đặt unnecessary packages</p></li>
<li><p>Không copy secrets vào image</p></li>
</ul>

<h2 id="5-network-security"><strong>5. Network Security</strong></h2>
<pre><code class="language-bash"># Isolate containers bằng custom networks
docker network create --internal internal-net

# Container trên internal network không thể access internet
docker run -d --network internal-net --name db postgres:16

# Chỉ expose cần thiết
# ❌ Bad
docker run -p 5432:5432 postgres:16

# ✅ Good - chỉ bind localhost
docker run -p 127.0.0.1:5432:5432 postgres:16
</code></pre>

<h2 id="6-cis-docker-benchmark"><strong>6. CIS Docker Benchmark</strong></h2>
<p>CIS Docker Benchmark cung cấp checklist bảo mật cho Docker:</p>

<pre><code class="language-bash"># Chạy Docker Bench Security
docker run --rm -it \
    --net host \
    --pid host \
    --userns host \
    --cap-add audit_control \
    -e DOCKER_CONTENT_TRUST=$DOCKER_CONTENT_TRUST \
    -v /etc:/etc:ro \
    -v /var/lib:/var/lib:ro \
    -v /var/run/docker.sock:/var/run/docker.sock:ro \
    docker/docker-bench-security
</code></pre>

<p><strong>Các category kiểm tra:</strong></p>
<ul>
<li><p>Host Configuration</p></li>
<li><p>Docker Daemon Configuration</p></li>
<li><p>Docker Daemon Configuration Files</p></li>
<li><p>Container Images and Build Files</p></li>
<li><p>Container Runtime</p></li>
<li><p>Docker Security Operations</p></li>
</ul>

<h2 id="7-security-checklist"><strong>7. Production Security Checklist</strong></h2>
<ul>
<li><p>☐ Chạy containers với non-root user</p></li>
<li><p>☐ Read-only filesystem khi có thể</p></li>
<li><p>☐ Drop all capabilities, chỉ add cần thiết</p></li>
<li><p>☐ No new privileges</p></li>
<li><p>☐ Scan images cho vulnerabilities</p></li>
<li><p>☐ Pin image versions</p></li>
<li><p>☐ Sử dụng Docker Secrets cho sensitive data</p></li>
<li><p>☐ Network isolation</p></li>
<li><p>☐ Resource limits (CPU, memory)</p></li>
<li><p>☐ Logging và monitoring</p></li>
<li><p>☐ Regular security audits</p></li>
</ul>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã nắm được:</p>
<ul>
<li><p>Docker security multi-layer approach</p></li>
<li><p>Rootless Docker và daemon security</p></li>
<li><p>Container hardening: non-root, read-only, capabilities</p></li>
<li><p>Image scanning và signing</p></li>
<li><p>Network isolation</p></li>
<li><p>CIS Docker Benchmark</p></li>
<li><p>Production security checklist</p></li>
</ul>
<p>Bài tiếp theo sẽ hướng dẫn Docker Logging và Monitoring.</p>
