---
id: 019d8a21-a108-7001-b001-d0c4e7000108
title: 'Bài 8: Docker Compose Cơ bản'
slug: bai-8-docker-compose-co-ban
description: >-
  Giới thiệu Docker Compose, cú pháp docker-compose.yml, services, networks,
  volumes, depends_on, healthcheck. Hướng dẫn deploy multi-container
  application với Compose: web app + database + cache (Nginx + Node.js +
  PostgreSQL + Redis).
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 2: Dockerfile và Image Optimization"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9928" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9928)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1094" cy="232" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="1088" cy="126" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1082" cy="280" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="1076" cy="174" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="1070" cy="68" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="212" x2="1100" y2="292" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="242" x2="1050" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1035.38268590218,198.5 1035.38268590218,225.5 1012,239 988.6173140978201,225.5 988.6173140978201,198.5 1012,185" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Bài 8</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 8: Docker Compose Cơ bản</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Docker từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Dockerfile và Image Optimization</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-docker-compose-la-gi"><strong>1. Docker Compose là gì?</strong></h2>
<p>Docker Compose là tool cho phép định nghĩa và chạy <strong>multi-container applications</strong> bằng một file YAML duy nhất. Thay vì chạy nhiều lệnh <code>docker run</code>, bạn chỉ cần <code>docker compose up</code>.</p>

<h3><strong>Tại sao cần Docker Compose?</strong></h3>
<ul>
<li><p>Ứng dụng thực tế có nhiều services: web, database, cache, queue, ...</p></li>
<li><p>Quản lý dependencies giữa các services</p></li>
<li><p>Reproducible environments cho development và testing</p></li>
<li><p>Infrastructure as Code - mọi thứ trong version control</p></li>
</ul>

<h2 id="2-cu-phap-compose"><strong>2. Cú pháp docker-compose.yml</strong></h2>

<h3><strong>2.1. Cấu trúc cơ bản</strong></h3>
<pre><code class="language-yaml"># docker-compose.yml
services:
  web:
    image: nginx:1.27-alpine
    ports:
      - "80:80"
    volumes:
      - ./html:/usr/share/nginx/html:ro
    depends_on:
      - api

  api:
    build: ./backend
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - DB_HOST=db
    depends_on:
      db:
        condition: service_healthy

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: secretpassword
    volumes:
      - db-data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U admin -d myapp"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  db-data:

networks:
  default:
    driver: bridge
</code></pre>

<h3><strong>2.2. Services</strong></h3>
<pre><code class="language-yaml">services:
  # Sử dụng image có sẵn
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  # Build từ Dockerfile
  app:
    build:
      context: .
      dockerfile: Dockerfile
      args:
        NODE_ENV: production
    image: myapp:latest  # Tag cho built image
</code></pre>

<h3><strong>2.3. Ports</strong></h3>
<pre><code class="language-yaml">services:
  web:
    ports:
      - "80:80"          # host:container
      - "443:443"
      - "3000:3000"
      - "127.0.0.1:8080:80"  # Bind chỉ localhost
</code></pre>

<h3><strong>2.4. Volumes</strong></h3>
<pre><code class="language-yaml">services:
  db:
    volumes:
      - db-data:/var/lib/postgresql/data     # Named volume
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql:ro  # Bind mount
      - /tmp/logs:/var/log                    # Host path

volumes:
  db-data:
    driver: local
</code></pre>

<h3><strong>2.5. Environment Variables</strong></h3>
<pre><code class="language-yaml">services:
  app:
    # Inline
    environment:
      - NODE_ENV=production
      - DB_HOST=db
      - DB_PORT=5432

    # Hoặc dùng map syntax
    environment:
      NODE_ENV: production
      DB_HOST: db

    # Từ .env file
    env_file:
      - .env
      - .env.local
</code></pre>

<h3><strong>2.6. depends_on và Healthcheck</strong></h3>
<pre><code class="language-yaml">services:
  app:
    depends_on:
      db:
        condition: service_healthy    # Đợi db healthy
      redis:
        condition: service_started    # Đợi redis bắt đầu

  db:
    image: postgres:16-alpine
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 30s

  redis:
    image: redis:7-alpine
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 3
</code></pre>

<h3><strong>2.7. Networks</strong></h3>
<pre><code class="language-yaml">services:
  frontend:
    networks:
      - frontend-net

  api:
    networks:
      - frontend-net
      - backend-net

  db:
    networks:
      - backend-net

networks:
  frontend-net:
  backend-net:
</code></pre>

<h2 id="3-docker-compose-cli"><strong>3. Docker Compose CLI</strong></h2>
<pre><code class="language-bash"># Khởi động tất cả services
docker compose up

# Khởi động ở background
docker compose up -d

# Build và khởi động
docker compose up -d --build

# Dừng tất cả services
docker compose down

# Dừng và xóa volumes
docker compose down -v

# Xem trạng thái services
docker compose ps

# Xem logs
docker compose logs
docker compose logs -f api     # Follow logs của service cụ thể

# Exec vào service
docker compose exec api sh
docker compose exec db psql -U admin -d myapp

# Run one-off command
docker compose run --rm api npm test

# Scale service
docker compose up -d --scale api=3

# Restart service
docker compose restart api

# Build/rebuild images
docker compose build
docker compose build --no-cache api
</code></pre>

<h2 id="4-lab-fullstack-app"><strong>4. Lab: Deploy Full-stack Application</strong></h2>
<p>Triển khai ứng dụng với Nginx + Node.js API + PostgreSQL + Redis:</p>

<pre><code class="language-yaml"># docker-compose.yml
services:
  # Nginx Reverse Proxy
  nginx:
    image: nginx:1.27-alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf:ro
    depends_on:
      api:
        condition: service_healthy
    restart: unless-stopped

  # Node.js API
  api:
    build:
      context: ./backend
      dockerfile: Dockerfile
    environment:
      NODE_ENV: production
      DB_HOST: db
      DB_PORT: 5432
      DB_NAME: myapp
      DB_USER: admin
      DB_PASSWORD: secretpassword
      REDIS_URL: redis://redis:6379
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_healthy
    healthcheck:
      test: ["CMD", "wget", "--spider", "-q", "http://localhost:3000/health"]
      interval: 15s
      timeout: 5s
      retries: 3
    restart: unless-stopped

  # PostgreSQL Database
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: secretpassword
    volumes:
      - postgres-data:/var/lib/postgresql/data
      - ./db/init.sql:/docker-entrypoint-initdb.d/init.sql:ro
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U admin -d myapp"]
      interval: 10s
      timeout: 5s
      retries: 5
    restart: unless-stopped

  # Redis Cache
  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes --maxmemory 256mb --maxmemory-policy allkeys-lru
    volumes:
      - redis-data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 3
    restart: unless-stopped

volumes:
  postgres-data:
  redis-data:
</code></pre>

<pre><code class="language-bash"># Deploy
docker compose up -d

# Kiểm tra
docker compose ps
docker compose logs -f

# Test
curl http://localhost/api/health
</code></pre>

<h2 id="5-tong-ket"><strong>5. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã nắm được:</p>
<ul>
<li><p>Docker Compose là gì và tại sao cần dùng</p></li>
<li><p>Cú pháp docker-compose.yml: services, volumes, networks</p></li>
<li><p>depends_on với healthcheck conditions</p></li>
<li><p>Docker Compose CLI: up, down, ps, logs, exec</p></li>
<li><p>Lab thực hành: Nginx + Node.js + PostgreSQL + Redis</p></li>
</ul>
<p>Bài tiếp theo sẽ đi sâu vào Docker Networking - cách containers giao tiếp với nhau.</p>
