---
id: 019d8a21-a120-7001-b001-d0c4e7000120
title: 'Bài 20: Production Deployment và Troubleshooting'
slug: bai-20-production-deployment-va-troubleshooting
description: >-
  Production readiness checklist, zero-downtime deployment strategies,
  disaster recovery, Docker debugging techniques, container forensics,
  common production issues và solutions, real-world case studies.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 5: Production và Advanced Topics"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---
<h2 id="1-production-readiness"><strong>1. Production Readiness Checklist</strong></h2>
<h3><strong>Image Checklist</strong></h3>
<pre><code class="language-bash">✅ Multi-stage build → image size tối thiểu
✅ Non-root user trong Dockerfile
✅ Specific image tag (không dùng :latest)
✅ Image scanning (Trivy, Snyk)
✅ .dockerignore đầy đủ
✅ HEALTHCHECK instruction
✅ No secrets trong image layers
✅ Minimal base image (Alpine/Distroless)
</code></pre>

<h3><strong>Container Checklist</strong></h3>
<pre><code class="language-bash">✅ Resource limits (CPU + Memory)
✅ Read-only root filesystem khi có thể
✅ No privileged mode
✅ Restart policy phù hợp
✅ Logging driver configured
✅ Health check enabled
✅ Security options (no-new-privileges, seccomp)
✅ Proper signal handling (SIGTERM)
</code></pre>

<h3><strong>Infrastructure Checklist</strong></h3>
<pre><code class="language-bash">✅ Private registry (Harbor/ECR/GCR)
✅ Registry replication (geo-redundancy)
✅ Automated CI/CD pipeline
✅ Monitoring + Alerting
✅ Log aggregation
✅ Backup strategy cho volumes
✅ Network segmentation
✅ TLS everywhere
</code></pre>

<h2 id="2-zero-downtime"><strong>2. Zero-Downtime Deployment</strong></h2>
<h3><strong>Blue-Green Deployment</strong></h3>
<pre><code class="language-yaml"># docker-compose.blue-green.yml
services:
  nginx:
    image: nginx:1.27-alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx-proxy.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - app-blue
      - app-green

  app-blue:
    image: myapp:1.0
    deploy:
      replicas: 3

  app-green:
    image: myapp:2.0
    deploy:
      replicas: 3
</code></pre>

<pre><code class="language-bash">#!/bin/bash
# blue-green-deploy.sh
CURRENT=$(docker inspect nginx --format '{{json .Config.Env}}' | grep -o 'blue\|green')
TARGET=$([ "$CURRENT" = "blue" ] && echo "green" || echo "blue")

echo "Current: $CURRENT, Deploying to: $TARGET"

# Deploy new version
docker compose up -d app-$TARGET

# Wait for health checks
echo "Waiting for health checks..."
sleep 30

# Check health
if curl -sf http://app-$TARGET:3000/health > /dev/null; then
    # Switch traffic
    sed -i "s/app-$CURRENT/app-$TARGET/g" nginx-proxy.conf
    docker compose exec nginx nginx -s reload
    echo "Switched traffic to $TARGET"

    # Scale down old version
    docker compose stop app-$CURRENT
else
    echo "Health check failed, keeping $CURRENT"
    docker compose stop app-$TARGET
    exit 1
fi
</code></pre>

<h3><strong>Rolling Update với Compose</strong></h3>
<pre><code class="language-bash">#!/bin/bash
# rolling-update.sh
SERVICE="app"
NEW_IMAGE="myapp:2.0"
REPLICAS=3

for i in $(seq 1 $REPLICAS); do
    echo "Updating replica $i/$REPLICAS..."

    # Scale up with new image
    docker compose up -d --no-deps --scale $SERVICE=$((REPLICAS + 1)) --no-recreate $SERVICE

    # Remove one old container
    OLD_CONTAINER=$(docker compose ps -q $SERVICE | head -1)
    docker stop $OLD_CONTAINER
    docker rm $OLD_CONTAINER

    # Health check
    sleep 10
    if ! curl -sf http://localhost:3000/health > /dev/null; then
        echo "Health check failed at replica $i"
        exit 1
    fi

    echo "Replica $i updated successfully."
done

echo "Rolling update completed."
</code></pre>

<h2 id="3-disaster-recovery"><strong>3. Disaster Recovery</strong></h2>
<h3><strong>Backup Strategy</strong></h3>
<pre><code class="language-bash">#!/bin/bash
# backup.sh - Automated Docker backup
BACKUP_DIR="/backups/docker/$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

# 1. Backup volumes
echo "=== Backing up volumes ==="
for volume in $(docker volume ls -q); do
    echo "Backing up volume: $volume"
    docker run --rm \
        -v "$volume":/source:ro \
        -v "$BACKUP_DIR":/backup \
        alpine tar czf "/backup/vol_${volume}.tar.gz" -C /source .
done

# 2. Backup compose files
echo "=== Backing up configs ==="
cp docker-compose*.yml "$BACKUP_DIR/"
cp .env* "$BACKUP_DIR/" 2>/dev/null

# 3. Backup images list
echo "=== Saving image list ==="
docker images --format '{{.Repository}}:{{.Tag}}' > "$BACKUP_DIR/images.txt"

# 4. Save critical images
echo "=== Saving critical images ==="
while read -r img; do
    filename=$(echo "$img" | tr '/:' '_')
    docker save "$img" | gzip > "$BACKUP_DIR/img_${filename}.tar.gz"
done < "$BACKUP_DIR/images.txt"

# 5. Backup Docker configs
echo "=== Backing up Docker daemon config ==="
cp /etc/docker/daemon.json "$BACKUP_DIR/" 2>/dev/null

echo "Backup completed: $BACKUP_DIR"
du -sh "$BACKUP_DIR"
</code></pre>

<h3><strong>Restore</strong></h3>
<pre><code class="language-bash">#!/bin/bash
# restore.sh
BACKUP_DIR="$1"

if [ -z "$BACKUP_DIR" ]; then
    echo "Usage: ./restore.sh /path/to/backup"
    exit 1
fi

# 1. Restore images
echo "=== Restoring images ==="
for img in "$BACKUP_DIR"/img_*.tar.gz; do
    echo "Loading: $img"
    docker load < "$img"
done

# 2. Restore volumes
echo "=== Restoring volumes ==="
for vol in "$BACKUP_DIR"/vol_*.tar.gz; do
    volume_name=$(basename "$vol" | sed 's/^vol_//;s/\.tar\.gz$//')
    echo "Restoring volume: $volume_name"
    docker volume create "$volume_name"
    docker run --rm \
        -v "$volume_name":/target \
        -v "$BACKUP_DIR":/backup:ro \
        alpine tar xzf "/backup/$(basename $vol)" -C /target
done

# 3. Start services
echo "=== Starting services ==="
cp "$BACKUP_DIR"/docker-compose*.yml .
cp "$BACKUP_DIR"/.env* . 2>/dev/null
docker compose up -d

echo "Restore completed!"
</code></pre>

<h2 id="4-debugging"><strong>4. Docker Debugging Techniques</strong></h2>
<h3><strong>Container Inspection</strong></h3>
<pre><code class="language-bash"># Xem container details
docker inspect container_name

# Lấy IP address
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name

# Xem mount points
docker inspect -f '{{json .Mounts}}' container_name | jq

# Xem environment variables
docker inspect -f '{{json .Config.Env}}' container_name | jq

# Xem health check status
docker inspect -f '{{json .State.Health}}' container_name | jq

# Resource usage
docker stats container_name --no-stream

# Top processes
docker top container_name
</code></pre>

<h3><strong>Debug Container</strong></h3>
<pre><code class="language-bash"># Exec vào running container
docker exec -it container_name /bin/sh
docker exec -it container_name /bin/bash

# Debug với tools (khi container không có shell)
docker run -it --rm \
    --pid=container:target_container \
    --net=container:target_container \
    nicolaka/netshoot

# Debug stopped container (xem filesystem)
docker commit stopped_container debug_image
docker run -it --rm debug_image /bin/sh

# Copy files từ container
docker cp container_name:/app/logs/ ./debug-logs/

# Override entrypoint để debug
docker run -it --rm --entrypoint /bin/sh myapp:latest
</code></pre>

<h3><strong>Network Debugging</strong></h3>
<pre><code class="language-bash"># DNS resolution
docker exec container_name nslookup other_service
docker exec container_name dig other_service

# Port connectivity
docker exec container_name nc -zv db 5432

# Network traffic
docker run -it --rm --net container:target \
    nicolaka/netshoot tcpdump -i eth0 port 80

# Xem network details
docker network inspect bridge

# Iptables rules (trên host)
sudo iptables -L -n -t nat | grep DOCKER
</code></pre>

<h2 id="5-container-forensics"><strong>5. Container Forensics</strong></h2>
<pre><code class="language-bash"># Xem container events
docker events --since '1h' --filter 'type=container'

# Xem exit code
docker inspect -f '{{.State.ExitCode}}' container_name

# Exit codes:
# 0   - Normal exit
# 1   - Application error
# 126 - Permission problem
# 127 - Command not found
# 137 - OOM killed (SIGKILL)
# 139 - Segfault
# 143 - SIGTERM (graceful shutdown)

# Check OOM kill
docker inspect -f '{{.State.OOMKilled}}' container_name
dmesg | grep -i "oom\|killed"

# Xem filesystem changes
docker diff container_name
# A = Added, C = Changed, D = Deleted

# Container logs với timestamps
docker logs --timestamps --since 1h container_name
docker logs --tail 100 container_name

# Export container filesystem
docker export container_name > container_fs.tar
</code></pre>

<h2 id="6-common-issues"><strong>6. Common Production Issues</strong></h2>
<h3><strong>Issue 1: Container OOM Killed</strong></h3>
<pre><code class="language-bash"># Triệu chứng: Container tự restart, exit code 137
# Nguyên nhân: Vượt memory limit

# Kiểm tra
docker stats --no-stream
docker inspect -f '{{.State.OOMKilled}}' container_name

# Fix: Tăng memory limit hoặc optimize app
docker update --memory 512m --memory-swap 1g container_name

# Compose fix:
# deploy:
#   resources:
#     limits:
#       memory: 512M
</code></pre>

<h3><strong>Issue 2: Disk Space Full</strong></h3>
<pre><code class="language-bash"># Kiểm tra disk usage
docker system df
docker system df -v

# Clean up
docker system prune           # unused containers, networks, images
docker system prune -a        # + all unused images
docker system prune --volumes # + unused volumes
docker builder prune          # build cache

# Tự động clean up (daemon.json)
# {
#   "storage-driver": "overlay2",
#   "log-driver": "json-file",
#   "log-opts": {
#     "max-size": "10m",
#     "max-file": "3"
#   }
# }

# Cron job clean up
# 0 2 * * * docker system prune -af --filter "until=168h"
</code></pre>

<h3><strong>Issue 3: Slow Container Startup</strong></h3>
<pre><code class="language-bash"># Kiểm tra
docker events --filter 'type=container'
time docker compose up -d

# Fix: Health check start_period
# healthcheck:
#   test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
#   start_period: 30s
#   interval: 10s
#   timeout: 5s
#   retries: 3

# Fix: Optimize Dockerfile layers (cache)
# Fix: Reduce image size
# Fix: Pre-pull images
docker compose pull
</code></pre>

<h3><strong>Issue 4: Networking Issues</strong></h3>
<pre><code class="language-bash"># Container không thể resolve hostname
# Kiểm tra DNS
docker exec app nslookup db
docker exec app cat /etc/resolv.conf

# Fix: Kiểm tra cùng network
docker network inspect my-network

# Fix: Custom DNS
# docker-compose.yml:
# services:
#   app:
#     dns:
#       - 8.8.8.8
#       - 8.8.4.4

# Port conflicts
sudo lsof -i :80
docker compose ps --format "table {{.Name}}\t{{.Ports}}"
</code></pre>

<h3><strong>Issue 5: Permission Denied</strong></h3>
<pre><code class="language-bash"># Volume mount permission issues
# Container user ≠ Host user

# Fix 1: Match UID/GID
# Dockerfile:
# RUN groupadd -g 1000 app && useradd -u 1000 -g app app

# Fix 2: Init container to fix permissions
docker run --rm -v mydata:/data alpine chown -R 1000:1000 /data

# Fix 3: Use named volumes (Docker manages permissions)
</code></pre>

<h2 id="7-graceful-shutdown"><strong>7. Graceful Shutdown</strong></h2>
<pre><code class="language-dockerfile"># Dockerfile - ensure proper signal handling
FROM node:22-alpine
WORKDIR /app
COPY . .

# Use exec form (PID 1)
CMD ["node", "server.js"]
# NOT: CMD node server.js (runs under /bin/sh, signals not forwarded)
</code></pre>

<pre><code class="language-javascript">// server.js - Handle SIGTERM
const server = app.listen(3000);

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed.');
    // Close DB connections
    db.end(() => {
      process.exit(0);
    });
  });
});

// Set timeout for forced shutdown
setTimeout(() => {
  console.error('Forced shutdown after timeout');
  process.exit(1);
}, 30000);
</code></pre>

<pre><code class="language-bash"># Docker stop timeout
docker stop -t 30 container_name

# Compose stop timeout
# docker-compose.yml:
# services:
#   app:
#     stop_grace_period: 30s
</code></pre>

<h2 id="8-production-compose"><strong>8. Production Docker Compose Template</strong></h2>
<pre><code class="language-yaml"># docker-compose.prod.yml
services:
  app:
    image: registry.example.com/myapp:${APP_VERSION}
    restart: unless-stopped
    deploy:
      replicas: 2
      resources:
        limits:
          cpus: '1.0'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 128M
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 30s
    environment:
      NODE_ENV: production
    env_file:
      - .env.prod
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "5"
        tag: "{{.Name}}"
    security_opt:
      - no-new-privileges:true
    read_only: true
    tmpfs:
      - /tmp
    networks:
      - frontend
      - backend

  postgres:
    image: postgres:16-alpine
    restart: unless-stopped
    deploy:
      resources:
        limits:
          cpus: '2.0'
          memory: 1G
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${DB_USER}"]
      interval: 10s
      timeout: 5s
      retries: 5
    volumes:
      - pg-data:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: ${DB_NAME}
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    secrets:
      - db_password
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
    networks:
      - backend

  nginx:
    image: nginx:1.27-alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf.d:/etc/nginx/conf.d:ro
      - ./nginx/ssl:/etc/nginx/ssl:ro
    depends_on:
      app:
        condition: service_healthy
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "5"
    networks:
      - frontend

networks:
  frontend:
  backend:
    internal: true

volumes:
  pg-data:
    driver: local

secrets:
  db_password:
    file: ./secrets/db_password.txt
</code></pre>

<h2 id="9-monitoring-checklist"><strong>9. Production Monitoring Checklist</strong></h2>
<pre><code class="language-bash"># Quick monitoring script
#!/bin/bash
echo "=== Docker System Status ==="
echo ""

echo "--- Running Containers ---"
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

echo ""
echo "--- Resource Usage ---"
docker stats --no-stream --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.NetIO}}\t{{.BlockIO}}"

echo ""
echo "--- Disk Usage ---"
docker system df

echo ""
echo "--- Unhealthy Containers ---"
docker ps --filter health=unhealthy --format "{{.Names}}: {{.Status}}"

echo ""
echo "--- Recent Events ---"
docker events --since '15m' --until '0s' --format '{{.Time}} {{.Action}} {{.Actor.Attributes.name}}' 2>/dev/null | tail -20
</code></pre>

<h2 id="10-tong-ket"><strong>10. Tổng kết Series</strong></h2>
<p>Chúc mừng bạn đã hoàn thành series <strong>Docker từ Cơ bản đến Nâng cao</strong>!</p>
<p>Qua 20 bài học, bạn đã nắm vững:</p>
<ul>
<li><p><strong>Phần 1</strong>: Nền tảng Docker - container, images, lifecycle</p></li>
<li><p><strong>Phần 2</strong>: Dockerfile, multi-stage builds, registry, Compose</p></li>
<li><p><strong>Phần 3</strong>: Networking, storage, Compose nâng cao, secrets</p></li>
<li><p><strong>Phần 4</strong>: Security, monitoring, CI/CD, performance</p></li>
<li><p><strong>Phần 5</strong>: Swarm, microservices, Kubernetes migration, production deployment</p></li>
</ul>
<p><strong>Next steps:</strong></p>
<ul>
<li><p>Thực hành với real-world projects</p></li>
<li><p>Học Kubernetes chuyên sâu</p></li>
<li><p>Tìm hiểu Service Mesh (Istio, Linkerd)</p></li>
<li><p>Explore GitOps (ArgoCD, FluxCD)</p></li>
<li><p>Lấy chứng chỉ Docker Certified Associate (DCA)</p></li>
</ul>
