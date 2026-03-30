---
id: 019d8a21-a111-7001-b001-d0c4e7000111
title: 'Bài 11: Docker Compose Nâng cao'
slug: bai-11-docker-compose-nang-cao
description: >-
  Compose profiles, extends, override files, variable substitution, deploy
  configuration, resource limits, rolling updates, scaling services,
  Compose Watch cho development, và production-ready Compose configurations.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 3: Networking, Storage và Compose Nâng cao"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---
<h2 id="1-compose-profiles"><strong>1. Compose Profiles</strong></h2>
<p>Profiles cho phép bạn chọn services nào sẽ được start, phù hợp cho multiple environments:</p>

<pre><code class="language-yaml">services:
  api:
    image: myapp:latest
    # Không có profile → luôn start

  db:
    image: postgres:16
    # Không có profile → luôn start

  adminer:
    image: adminer
    profiles:
      - debug
    ports:
      - "8080:8080"

  prometheus:
    image: prom/prometheus
    profiles:
      - monitoring

  grafana:
    image: grafana/grafana
    profiles:
      - monitoring
</code></pre>

<pre><code class="language-bash"># Start default services (api, db)
docker compose up -d

# Start với debug profile
docker compose --profile debug up -d

# Start với monitoring profile
docker compose --profile monitoring up -d

# Start với nhiều profiles
docker compose --profile debug --profile monitoring up -d
</code></pre>

<h2 id="2-override-files"><strong>2. Override Files</strong></h2>
<p>Docker Compose tự động merge <code>docker-compose.yml</code> với <code>docker-compose.override.yml</code>:</p>

<pre><code class="language-yaml"># docker-compose.yml (base)
services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
</code></pre>

<pre><code class="language-yaml"># docker-compose.override.yml (development - auto-loaded)
services:
  api:
    volumes:
      - ./src:/app/src
    environment:
      NODE_ENV: development
      DEBUG: "true"
    command: npm run dev
</code></pre>

<pre><code class="language-yaml"># docker-compose.prod.yml (production - manual)
services:
  api:
    image: registry.example.com/myapp:latest
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '1.0'
          memory: 512M
    restart: always
</code></pre>

<pre><code class="language-bash"># Development (auto-loads override)
docker compose up -d

# Production (explicit files)
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
</code></pre>

<h2 id="3-variable-substitution"><strong>3. Variable Substitution</strong></h2>
<pre><code class="language-yaml"># docker-compose.yml
services:
  api:
    image: ${REGISTRY:-docker.io}/${IMAGE_NAME:-myapp}:${TAG:-latest}
    ports:
      - "${API_PORT:-3000}:3000"
    environment:
      DB_HOST: ${DB_HOST:-db}
      DB_PASSWORD: ${DB_PASSWORD:?Database password is required}
</code></pre>

<pre><code class="language-bash"># .env file (auto-loaded)
REGISTRY=harbor.example.com
IMAGE_NAME=myapp
TAG=v1.2.3
API_PORT=8080
DB_HOST=db
DB_PASSWORD=mysecretpassword
</code></pre>

<p><strong>Syntax:</strong></p>
<ul>
<li><p><code>${VAR}</code> - Sử dụng biến, lỗi nếu không set</p></li>
<li><p><code>${VAR:-default}</code> - Default value nếu không set hoặc empty</p></li>
<li><p><code>${VAR-default}</code> - Default value nếu không set</p></li>
<li><p><code>${VAR:?error}</code> - Lỗi với message nếu không set</p></li>
</ul>

<h2 id="4-deploy-configuration"><strong>4. Deploy Configuration</strong></h2>
<pre><code class="language-yaml">services:
  api:
    image: myapp:latest
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '0.50'
          memory: 256M
        reservations:
          cpus: '0.25'
          memory: 128M
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 3
        window: 120s
      update_config:
        parallelism: 1
        delay: 10s
        order: start-first
      rollback_config:
        parallelism: 1
        delay: 5s
</code></pre>

<h2 id="5-extends"><strong>5. Extends</strong></h2>
<pre><code class="language-yaml"># common.yml
services:
  base-app:
    build: .
    environment:
      LOG_LEVEL: info
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
</code></pre>

<pre><code class="language-yaml"># docker-compose.yml
services:
  api:
    extends:
      file: common.yml
      service: base-app
    ports:
      - "3000:3000"
    environment:
      SERVICE_NAME: api

  worker:
    extends:
      file: common.yml
      service: base-app
    command: npm run worker
    environment:
      SERVICE_NAME: worker
</code></pre>

<h2 id="6-compose-watch"><strong>6. Compose Watch (Hot Reload)</strong></h2>
<p>Compose Watch cho phép tự động sync files và rebuild khi code thay đổi:</p>
<pre><code class="language-yaml">services:
  api:
    build: .
    develop:
      watch:
        # Sync source code (hot reload)
        - action: sync
          path: ./src
          target: /app/src

        # Rebuild khi dependencies thay đổi
        - action: rebuild
          path: ./package.json

        # Sync + restart khi config thay đổi
        - action: sync+restart
          path: ./config
          target: /app/config
</code></pre>

<pre><code class="language-bash"># Start với watch mode
docker compose watch

# Hoặc
docker compose up --watch
</code></pre>

<h2 id="7-scaling-services"><strong>7. Scaling Services</strong></h2>
<pre><code class="language-bash"># Scale service
docker compose up -d --scale api=3

# Hoặc trong compose file
# services:
#   api:
#     deploy:
#       replicas: 3
</code></pre>

<pre><code class="language-yaml"># Load balancing với Nginx
services:
  nginx:
    image: nginx:1.27-alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - api

  api:
    build: .
    deploy:
      replicas: 3
    # Không expose ports ra host, chỉ qua nginx
</code></pre>

<h2 id="8-production-ready"><strong>8. Production-ready Compose Configuration</strong></h2>
<pre><code class="language-yaml"># docker-compose.prod.yml
services:
  api:
    image: harbor.example.com/myapp:${TAG}
    deploy:
      replicas: 2
      resources:
        limits:
          cpus: '1.0'
          memory: 512M
    environment:
      NODE_ENV: production
    healthcheck:
      test: ["CMD", "wget", "--spider", "-q", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-size: "10m"
        max-file: "3"
    read_only: true
    tmpfs:
      - /tmp
    security_opt:
      - no-new-privileges:true
</code></pre>

<h2 id="9-tong-ket"><strong>9. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã nắm được:</p>
<ul>
<li><p>Compose Profiles cho multiple environments</p></li>
<li><p>Override files cho dev/staging/production</p></li>
<li><p>Variable substitution với .env files</p></li>
<li><p>Deploy configuration và resource limits</p></li>
<li><p>Extends để tái sử dụng common configuration</p></li>
<li><p>Compose Watch cho hot-reload development</p></li>
<li><p>Scaling services và production-ready configurations</p></li>
</ul>
<p>Bài tiếp theo sẽ hướng dẫn quản lý Environment Variables, Secrets và Configuration.</p>
