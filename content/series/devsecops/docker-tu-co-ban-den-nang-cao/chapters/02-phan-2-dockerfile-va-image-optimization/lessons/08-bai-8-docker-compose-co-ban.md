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
