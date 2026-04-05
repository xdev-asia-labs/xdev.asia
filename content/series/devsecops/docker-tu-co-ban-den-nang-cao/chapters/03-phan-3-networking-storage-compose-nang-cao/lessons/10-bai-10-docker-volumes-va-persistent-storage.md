---
id: 019d8a21-a110-7001-b001-d0c4e7000110
title: 'Bài 10: Docker Volumes và Persistent Storage'
slug: bai-10-docker-volumes-va-persistent-storage
description: >-
  Docker volumes, bind mounts, tmpfs mounts, volume drivers, named volumes,
  anonymous volumes, volume plugins cho NFS/AWS EBS/GlusterFS. Backup và
  restore data, storage best practices cho databases và stateful applications.
duration_minutes: 160
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: Networking, Storage và Compose Nâng cao"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8538" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8538)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1089" cy="237" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1078" cy="46" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1067" cy="115" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="1056" cy="184" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="253" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="147" x2="1100" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="177" x2="1050" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1083.3730669589463,226 1083.3730669589463,268 1047,289 1010.6269330410536,268 1010.6269330410536,226 1047,205" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Bài 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 10: Docker Volumes và Persistent</tspan>
      <tspan x="60" dy="42">Storage</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Docker từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Networking, Storage và Compose Nâng cao</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-storage-overview"><strong>1. Docker Storage - Tổng quan</strong></h2>
<p>Mặc định, data trong container bị mất khi container bị xóa. Docker cung cấp 3 cơ chế để lưu trữ persistent data:</p>

<pre><code>┌─────────────────────────────────────────────────┐
│                 Docker Host                      │
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │
│  │  Volumes  │  │  Bind    │  │   tmpfs      │  │
│  │           │  │  Mounts  │  │   Mounts     │  │
│  │ /var/lib/ │  │  Any     │  │  RAM only    │  │
│  │ docker/   │  │  host    │  │  (no disk)   │  │
│  │ volumes/  │  │  path    │  │              │  │
│  └─────┬────┘  └─────┬────┘  └──────┬───────┘  │
│        │              │              │           │
│  ┌─────▼──────────────▼──────────────▼───────┐  │
│  │              Container                     │  │
│  └────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-docker-volumes"><strong>2. Docker Volumes</strong></h2>
<p>Volumes là cách recommended để persist data. Docker quản lý hoàn toàn volumes trong <code>/var/lib/docker/volumes/</code>.</p>

<h3><strong>2.1. Tạo và quản lý Volumes</strong></h3>
<pre><code class="language-bash"># Tạo volume
docker volume create my-data

# Liệt kê volumes
docker volume ls

# Xem chi tiết volume
docker volume inspect my-data

# Xóa volume
docker volume rm my-data

# Cleanup unused volumes
docker volume prune
</code></pre>

<h3><strong>2.2. Sử dụng Named Volumes</strong></h3>
<pre><code class="language-bash"># Mount named volume vào container
docker run -d --name db \
    -v postgres-data:/var/lib/postgresql/data \
    postgres:16

# Hoặc dùng --mount syntax (recommended cho clarity)
docker run -d --name db \
    --mount source=postgres-data,target=/var/lib/postgresql/data \
    postgres:16
</code></pre>

<h3><strong>2.3. Anonymous Volumes</strong></h3>
<pre><code class="language-bash"># Docker tự tạo volume với random name
docker run -d -v /var/lib/postgresql/data postgres:16

# Anonymous volumes thường khó quản lý
# → Luôn dùng named volumes
</code></pre>

<h2 id="3-bind-mounts"><strong>3. Bind Mounts</strong></h2>
<p>Bind mounts mount một directory/file từ host vào container:</p>

<pre><code class="language-bash"># Bind mount directory
docker run -d --name web \
    -v /home/user/html:/usr/share/nginx/html:ro \
    nginx

# Mount syntax (recommended)
docker run -d --name web \
    --mount type=bind,source=/home/user/html,target=/usr/share/nginx/html,readonly \
    nginx

# Development: live code reload
docker run -d --name dev-app \
    -v $(pwd)/src:/app/src \
    -v $(pwd)/package.json:/app/package.json \
    node:20-alpine npm run dev
</code></pre>

<h3><strong>Volumes vs Bind Mounts</strong></h3>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Feature</th>
<th>Volumes</th>
<th>Bind Mounts</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Quản lý</strong></td>
<td>Docker quản lý</td>
<td>User quản lý</td>
</tr>
<tr>
<td><strong>Location</strong></td>
<td>/var/lib/docker/volumes/</td>
<td>Bất kỳ path nào</td>
</tr>
<tr>
<td><strong>Pre-populate</strong></td>
<td>Có (copy data từ container)</td>
<td>Không (override content)</td>
</tr>
<tr>
<td><strong>Backup</strong></td>
<td>docker volume commands</td>
<td>Standard filesystem tools</td>
</tr>
<tr>
<td><strong>Use case</strong></td>
<td>Production data</td>
<td>Development, config files</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h2 id="4-tmpfs-mounts"><strong>4. tmpfs Mounts</strong></h2>
<p>Lưu data trong RAM, không persist xuống disk:</p>
<pre><code class="language-bash"># tmpfs mount
docker run -d --name app \
    --tmpfs /tmp:rw,size=100m \
    --mount type=tmpfs,target=/app/cache,tmpfs-size=50m \
    myapp

# Use case: Sensitive data (passwords, tokens)
# Data tự động xóa khi container stop
</code></pre>

<h2 id="5-backup-restore"><strong>5. Backup và Restore Data</strong></h2>

<h3><strong>5.1. Backup Volume</strong></h3>
<pre><code class="language-bash"># Backup volume vào tar file
docker run --rm \
    -v postgres-data:/data:ro \
    -v $(pwd)/backups:/backup \
    alpine tar czf /backup/postgres-backup-$(date +%Y%m%d).tar.gz -C /data .

# Hoặc dùng docker cp
docker cp db:/var/lib/postgresql/data ./backup/
</code></pre>

<h3><strong>5.2. Restore Volume</strong></h3>
<pre><code class="language-bash"># Restore từ backup
docker volume create postgres-data-restored

docker run --rm \
    -v postgres-data-restored:/data \
    -v $(pwd)/backups:/backup:ro \
    alpine tar xzf /backup/postgres-backup-20260330.tar.gz -C /data
</code></pre>

<h3><strong>5.3. Clone Volume</strong></h3>
<pre><code class="language-bash"># Clone volume
docker volume create --name cloned-data
docker run --rm \
    -v original-data:/from:ro \
    -v cloned-data:/to \
    alpine sh -c "cp -a /from/. /to/"
</code></pre>

<h2 id="6-volume-drivers"><strong>6. Volume Drivers và Plugins</strong></h2>
<pre><code class="language-bash"># NFS volume
docker volume create \
    --driver local \
    --opt type=nfs \
    --opt o=addr=192.168.1.100,rw \
    --opt device=:/shared/data \
    nfs-data

# Trong Docker Compose
# volumes:
#   nfs-data:
#     driver: local
#     driver_opts:
#       type: nfs
#       o: "addr=192.168.1.100,nolock,soft,rw"
#       device: ":/shared/data"
</code></pre>

<h2 id="7-read-only-volumes"><strong>7. Read-only Volumes và Permissions</strong></h2>
<pre><code class="language-bash"># Read-only volume
docker run -d -v config:/etc/app/config:ro nginx

# Read-only container filesystem
docker run -d --read-only \
    --tmpfs /tmp \
    -v app-data:/data \
    myapp

# Volume permissions
docker run -d \
    -v data:/data \
    --user 1000:1000 \
    myapp
</code></pre>

<h2 id="8-storage-best-practices"><strong>8. Storage Best Practices cho Databases</strong></h2>
<ul>
<li><p><strong>Luôn dùng named volumes</strong> cho database data</p></li>
<li><p><strong>Separate volumes</strong> cho data, logs, và backups</p></li>
<li><p><strong>Regular backups</strong> với automated scripts</p></li>
<li><p><strong>Test restore</strong> procedures thường xuyên</p></li>
<li><p><strong>Monitor disk usage</strong> với docker system df</p></li>
</ul>

<pre><code class="language-yaml"># Docker Compose best practice cho database
services:
  db:
    image: postgres:16-alpine
    volumes:
      - db-data:/var/lib/postgresql/data
      - db-logs:/var/log/postgresql
      - ./db/init:/docker-entrypoint-initdb.d:ro
    environment:
      PGDATA: /var/lib/postgresql/data/pgdata

volumes:
  db-data:
  db-logs:
</code></pre>

<h2 id="9-tong-ket"><strong>9. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã nắm được:</p>
<ul>
<li><p>3 loại storage: Volumes, Bind Mounts, tmpfs</p></li>
<li><p>Tạo và quản lý Docker volumes</p></li>
<li><p>Backup và restore data từ volumes</p></li>
<li><p>Volume drivers cho NFS và cloud storage</p></li>
<li><p>Read-only volumes và permissions</p></li>
<li><p>Storage best practices cho databases</p></li>
</ul>
<p>Bài tiếp theo sẽ hướng dẫn Docker Compose nâng cao - profiles, extends, override files.</p>
