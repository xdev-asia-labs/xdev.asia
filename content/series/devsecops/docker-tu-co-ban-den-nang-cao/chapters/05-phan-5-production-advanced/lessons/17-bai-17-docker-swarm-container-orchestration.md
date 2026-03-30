---
id: 019d8a21-a117-7001-b001-d0c4e7000117
title: 'Bài 17: Docker Swarm - Container Orchestration'
slug: bai-17-docker-swarm-container-orchestration
description: >-
  Docker Swarm mode, tạo và quản lý cluster, services, tasks, replicas,
  rolling updates, rollback, overlay networking, ingress load balancing,
  placement constraints, secrets management và Swarm vs Kubernetes comparison.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 5: Production và Advanced Topics"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---
<h2 id="1-docker-swarm-overview"><strong>1. Docker Swarm - Tổng quan</strong></h2>
<p>Docker Swarm là native container orchestration tool của Docker, cho phép quản lý cluster gồm nhiều Docker hosts và triển khai services trên đó.</p>

<h3><strong>Kiến trúc Swarm</strong></h3>
<pre><code>┌─────────────────────────────────────────┐
│              Docker Swarm               │
│                                         │
│  ┌─────────────┐  ┌─────────────┐      │
│  │  Manager 1  │  │  Manager 2  │      │
│  │  (Leader)   │  │  (Follower) │      │
│  │             │  │             │      │
│  │  Raft       │←→│  Raft       │      │
│  │  Consensus  │  │  Consensus  │      │
│  └─────────────┘  └─────────────┘      │
│         │                │              │
│  ┌──────▼───┐  ┌────────▼──┐  ┌──────┐│
│  │ Worker 1 │  │ Worker 2  │  │Wkr 3 ││
│  │ ┌──────┐ │  │ ┌──────┐  │  │      ││
│  │ │Task 1│ │  │ │Task 2│  │  │      ││
│  │ │Task 3│ │  │ │Task 4│  │  │      ││
│  │ └──────┘ │  │ └──────┘  │  │      ││
│  └──────────┘  └───────────┘  └──────┘│
└─────────────────────────────────────────┘
</code></pre>

<h2 id="2-tao-swarm-cluster"><strong>2. Tạo Swarm Cluster</strong></h2>
<pre><code class="language-bash"># Khởi tạo Swarm (trên manager node)
docker swarm init --advertise-addr 192.168.1.10

# Output sẽ cho join token
# docker swarm join --token SWMTKN-xxx 192.168.1.10:2377

# Lấy join token cho worker
docker swarm join-token worker

# Lấy join token cho manager
docker swarm join-token manager

# Join cluster (trên worker nodes)
docker swarm join --token SWMTKN-xxx 192.168.1.10:2377

# Xem nodes trong cluster
docker node ls

# Promote worker thành manager
docker node promote worker-1

# Demote manager thành worker
docker node demote manager-2

# Leave swarm
docker swarm leave         # Worker
docker swarm leave --force # Manager (last one)
</code></pre>

<h2 id="3-services"><strong>3. Services, Tasks và Replicas</strong></h2>
<pre><code class="language-bash"># Tạo service
docker service create \
    --name web \
    --replicas 3 \
    --publish published=80,target=80 \
    nginx:1.27-alpine

# Liệt kê services
docker service ls

# Xem tasks của service
docker service ps web

# Xem logs
docker service logs web
docker service logs -f web

# Scale service
docker service scale web=5

# Inspect service
docker service inspect --pretty web
</code></pre>

<h2 id="4-rolling-updates"><strong>4. Rolling Updates và Rollback</strong></h2>
<pre><code class="language-bash"># Tạo service với update config
docker service create \
    --name api \
    --replicas 3 \
    --update-parallelism 1 \
    --update-delay 10s \
    --update-order start-first \
    --update-failure-action rollback \
    --rollback-parallelism 1 \
    --rollback-delay 5s \
    myapp:1.0

# Update image (rolling update)
docker service update --image myapp:2.0 api

# Rollback
docker service rollback api

# Update với environment variables
docker service update \
    --env-add NEW_VAR=value \
    --env-rm OLD_VAR \
    api

# Update resource limits
docker service update \
    --limit-cpu 1.0 \
    --limit-memory 512m \
    api
</code></pre>

<h2 id="5-overlay-networking"><strong>5. Overlay Networking</strong></h2>
<pre><code class="language-bash"># Tạo overlay network
docker network create -d overlay my-overlay

# Tạo encrypted overlay
docker network create -d overlay --opt encrypted my-secure-overlay

# Service sử dụng overlay network
docker service create \
    --name api \
    --network my-overlay \
    myapp

docker service create \
    --name db \
    --network my-overlay \
    postgres:16

# api có thể kết nối db bằng hostname "db"
</code></pre>

<h3><strong>Ingress Load Balancing</strong></h3>
<p>Swarm tự động load balance traffic đến service replicas thông qua ingress network:</p>
<pre><code class="language-bash"># Traffic đến bất kỳ node nào trên port 80
# sẽ được route đến một replica của web service
docker service create \
    --name web \
    --replicas 3 \
    --publish 80:80 \
    nginx

# Routing mesh: Request → Any Node → Ingress → Service Container
</code></pre>

<h2 id="6-placement-constraints"><strong>6. Placement Constraints</strong></h2>
<pre><code class="language-bash"># Chạy service trên nodes cụ thể
docker service create \
    --name db \
    --constraint 'node.role == manager' \
    postgres:16

docker service create \
    --name api \
    --constraint 'node.labels.environment == production' \
    --constraint 'node.labels.region == asia' \
    myapp

# Label nodes
docker node update --label-add environment=production worker-1
docker node update --label-add region=asia worker-1

# Placement preferences (soft constraints)
docker service create \
    --name web \
    --replicas 6 \
    --placement-pref 'spread=node.labels.datacenter' \
    nginx
</code></pre>

<h2 id="7-secrets-configs"><strong>7. Secrets và Configs trong Swarm</strong></h2>
<pre><code class="language-bash"># Tạo secret
echo "mysecretpassword" | docker secret create db_password -
docker secret create ssl_cert ./server.crt

# Sử dụng secret
docker service create \
    --name db \
    --secret db_password \
    -e POSTGRES_PASSWORD_FILE=/run/secrets/db_password \
    postgres:16

# Tạo config
docker config create nginx_conf ./nginx.conf

# Sử dụng config
docker service create \
    --name web \
    --config source=nginx_conf,target=/etc/nginx/nginx.conf \
    nginx
</code></pre>

<h2 id="8-stack-deploy"><strong>8. Stack Deploy</strong></h2>
<pre><code class="language-yaml"># docker-stack.yml
version: '3.8'

services:
  web:
    image: nginx:1.27-alpine
    ports:
      - "80:80"
    deploy:
      replicas: 3
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: on-failure
    networks:
      - frontend

  api:
    image: myapp:latest
    deploy:
      replicas: 2
      resources:
        limits:
          cpus: '0.5'
          memory: 256M
    secrets:
      - db_password
    networks:
      - frontend
      - backend

  db:
    image: postgres:16-alpine
    deploy:
      placement:
        constraints:
          - node.role == manager
    volumes:
      - db-data:/var/lib/postgresql/data
    secrets:
      - db_password
    networks:
      - backend

networks:
  frontend:
  backend:

volumes:
  db-data:

secrets:
  db_password:
    external: true
</code></pre>

<pre><code class="language-bash"># Deploy stack
docker stack deploy -c docker-stack.yml myapp

# Liệt kê stacks
docker stack ls

# Xem services trong stack
docker stack services myapp

# Xem tasks
docker stack ps myapp

# Remove stack
docker stack rm myapp
</code></pre>

<h2 id="9-swarm-vs-kubernetes"><strong>9. Docker Swarm vs Kubernetes</strong></h2>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Feature</th>
<th>Docker Swarm</th>
<th>Kubernetes</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Complexity</strong></td>
<td>Đơn giản, dễ setup</td>
<td>Phức tạp hơn</td>
</tr>
<tr>
<td><strong>Learning curve</strong></td>
<td>Thấp</td>
<td>Cao</td>
</tr>
<tr>
<td><strong>Scaling</strong></td>
<td>Tốt cho small-medium</td>
<td>Tốt cho mọi quy mô</td>
</tr>
<tr>
<td><strong>Auto-scaling</strong></td>
<td>Không built-in</td>
<td>HPA, VPA, Cluster Autoscaler</td>
</tr>
<tr>
<td><strong>Ecosystem</strong></td>
<td>Nhỏ</td>
<td>Rất lớn (CNCF)</td>
</tr>
<tr>
<td><strong>Community</strong></td>
<td>Nhỏ hơn</td>
<td>Rất lớn</td>
</tr>
<tr>
<td><strong>Use case</strong></td>
<td>Small teams, simple deployments</td>
<td>Enterprise, complex microservices</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h2 id="10-tong-ket"><strong>10. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã nắm được:</p>
<ul>
<li><p>Docker Swarm architecture và cluster setup</p></li>
<li><p>Services, tasks, replicas</p></li>
<li><p>Rolling updates và rollback</p></li>
<li><p>Overlay networking và ingress</p></li>
<li><p>Placement constraints</p></li>
<li><p>Secrets, configs, và stack deploy</p></li>
<li><p>Swarm vs Kubernetes comparison</p></li>
</ul>
<p>Bài tiếp theo sẽ hướng dẫn Docker cho Microservices Architecture.</p>
