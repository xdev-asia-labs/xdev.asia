---
id: 019d8a21-a100-7001-b001-d0c4e7000001
title: Docker từ Cơ bản đến Nâng cao
slug: docker-tu-co-ban-den-nang-cao
description: >-
  Khóa học Docker toàn diện từ cơ bản đến nâng cao, giúp bạn làm chủ container
  technology từ những khái niệm đầu tiên đến triển khai production thực tế.
  Bao gồm Dockerfile, Docker Compose, Networking, Storage, Security, CI/CD,
  Docker Swarm, Microservices và các best practices cho môi trường enterprise.
  Cập nhật theo Docker Engine 27+ và các công nghệ container hiện đại nhất 2026.
featured_image: uploads/2026/03/docker-series-banner-2026.png
level: beginner
duration_hours: 60
lesson_count: 20
price: '0.00'
is_free: true
view_count: 0
average_rating: '0.00'
review_count: 0
enrollment_count: 0
meta: null
published_at: '2026-03-30T08:00:00.000000Z'
created_at: '2026-03-30T08:00:00.000000Z'
author:
  id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf
  name: Duy Tran
  avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg
category:
  id: 019c9617-faa6-70d6-8679-ee4de1f177b3
  name: DevOps
  slug: devops
tags:
  - name: devops
    slug: devops
  - name: Docker
    slug: docker
  - name: container
    slug: container
  - name: docker-compose
    slug: docker-compose
  - name: Microservices
    slug: microservices
  - name: cicd
    slug: cicd
  - name: linux
    slug: linux
  - name: security
    slug: security
  - name: monitoring
    slug: monitoring
  - name: production
    slug: production
  - name: docker-registry
    slug: docker-registry
  - name: docker-swarm
    slug: docker-swarm
  - name: networking
    slug: networking
  - name: infrastructure
    slug: infrastructure
  - name: cloud-native
    slug: cloud-native
  - name: kubernetes
    slug: kubernetes
  - name: Performance
    slug: performance
  - name: HandsOn
    slug: handson
  - name: RealWorld
    slug: realworld
sections:
  - id: section-01
    title: 'Phần 1: Nền tảng Docker'
    description: 'Làm quen với Docker, cài đặt, images và containers cơ bản'
    sort_order: 1
    lessons:
      - id: 019d8a21-a101-7001-b001-d0c4e7000101
        title: 'Bài 1: Giới thiệu Docker - Container và Virtualization'
        slug: bai-1-gioi-thieu-docker-container-va-virtualization
        description: >-
          Tìm hiểu Docker là gì, so sánh container vs virtual machine, kiến trúc
          Docker Engine (daemon, CLI, containerd, runc), lịch sử phát triển container
          technology và tại sao Docker thay đổi cách chúng ta phát triển phần mềm.
        duration_minutes: 90
        is_free: true
        sort_order: 1
        video_url: null
      - id: 019d8a21-a102-7001-b001-d0c4e7000102
        title: 'Bài 2: Cài đặt Docker và Các lệnh Cơ bản'
        slug: bai-2-cai-dat-docker-va-cac-lenh-co-ban
        description: >-
          Hướng dẫn cài đặt Docker Engine trên Ubuntu, CentOS, macOS và Windows.
          Làm quen với Docker CLI, các lệnh cơ bản như docker run, ps, stop, rm,
          exec, logs. Cấu hình Docker daemon và quản lý Docker service.
        duration_minutes: 120
        is_free: true
        sort_order: 2
        video_url: null
      - id: 019d8a21-a103-7001-b001-d0c4e7000103
        title: 'Bài 3: Docker Images - Build, Pull và Quản lý'
        slug: bai-3-docker-images-build-pull-va-quan-ly
        description: >-
          Tìm hiểu Docker images là gì, layer architecture, docker pull/push,
          quản lý images với docker images, tag, rmi, prune. Hiểu Docker Hub,
          official images và cách chọn base image phù hợp cho dự án.
        duration_minutes: 120
        is_free: true
        sort_order: 3
        video_url: null
      - id: 019d8a21-a104-7001-b001-d0c4e7000104
        title: 'Bài 4: Docker Containers - Vòng đời và Quản lý'
        slug: bai-4-docker-containers-vong-doi-va-quan-ly
        description: >-
          Hiểu vòng đời container (created, running, paused, stopped, deleted),
          các lệnh quản lý nâng cao, resource limits (CPU, memory), restart policies,
          docker inspect, docker stats và container debugging techniques.
        duration_minutes: 150
        is_free: true
        sort_order: 4
        video_url: null
  - id: section-02
    title: 'Phần 2: Dockerfile và Image Optimization'
    description: 'Xây dựng Docker images chuyên nghiệp với Dockerfile và tối ưu hóa'
    sort_order: 2
    lessons:
      - id: 019d8a21-a105-7001-b001-d0c4e7000105
        title: 'Bài 5: Dockerfile từ A đến Z'
        slug: bai-5-dockerfile-tu-a-den-z
        description: >-
          Hướng dẫn chi tiết tất cả Dockerfile instructions: FROM, RUN, COPY, ADD,
          CMD, ENTRYPOINT, ENV, ARG, WORKDIR, EXPOSE, VOLUME, USER, HEALTHCHECK,
          LABEL, SHELL, STOPSIGNAL. Best practices và anti-patterns khi viết Dockerfile.
        duration_minutes: 180
        is_free: true
        sort_order: 5
        video_url: null
      - id: 019d8a21-a106-7001-b001-d0c4e7000106
        title: 'Bài 6: Multi-stage Builds và Tối ưu Docker Image'
        slug: bai-6-multi-stage-builds-va-toi-uu-docker-image
        description: >-
          Kỹ thuật multi-stage builds để giảm kích thước image, layer caching
          optimization, .dockerignore, Alpine vs Distroless base images, security
          scanning với Trivy/Snyk, và các chiến lược tối ưu image cho production.
        duration_minutes: 160
        is_free: true
        sort_order: 6
        video_url: null
      - id: 019d8a21-a107-7001-b001-d0c4e7000107
        title: 'Bài 7: Docker Registry - Docker Hub và Private Registry'
        slug: bai-7-docker-registry-docker-hub-va-private-registry
        description: >-
          Làm việc với Docker Hub, tạo repositories, automated builds. Triển khai
          Private Registry với Docker Registry, Harbor. Image tagging strategies,
          versioning, vulnerability scanning và registry security best practices.
        duration_minutes: 140
        is_free: true
        sort_order: 7
        video_url: null
      - id: 019d8a21-a108-7001-b001-d0c4e7000108
        title: 'Bài 8: Docker Compose Cơ bản'
        slug: bai-8-docker-compose-co-ban
        description: >-
          Giới thiệu Docker Compose, cú pháp docker-compose.yml, services, networks,
          volumes, depends_on, healthcheck. Hướng dẫn deploy multi-container
          application với Compose: web app + database + cache (Nginx + Node.js +
          PostgreSQL + Redis).
        duration_minutes: 180
        is_free: true
        sort_order: 8
        video_url: null
  - id: section-03
    title: 'Phần 3: Networking, Storage và Compose Nâng cao'
    description: 'Docker networking deep dive, persistent storage và Docker Compose production'
    sort_order: 3
    lessons:
      - id: 019d8a21-a109-7001-b001-d0c4e7000109
        title: 'Bài 9: Docker Networking Deep Dive'
        slug: bai-9-docker-networking-deep-dive
        description: >-
          Tìm hiểu Docker networking drivers (bridge, host, overlay, macvlan, none),
          DNS resolution, container communication, port mapping, network isolation,
          custom networks, multi-host networking và troubleshooting network issues.
        duration_minutes: 200
        is_free: true
        sort_order: 9
        video_url: null
      - id: 019d8a21-a110-7001-b001-d0c4e7000110
        title: 'Bài 10: Docker Volumes và Persistent Storage'
        slug: bai-10-docker-volumes-va-persistent-storage
        description: >-
          Docker volumes, bind mounts, tmpfs mounts, volume drivers, named volumes,
          anonymous volumes, volume plugins cho NFS/AWS EBS/GlusterFS. Backup và
          restore data, storage best practices cho databases và stateful applications.
        duration_minutes: 160
        is_free: true
        sort_order: 10
        video_url: null
      - id: 019d8a21-a111-7001-b001-d0c4e7000111
        title: 'Bài 11: Docker Compose Nâng cao'
        slug: bai-11-docker-compose-nang-cao
        description: >-
          Compose profiles, extends, override files, variable substitution, deploy
          configuration, resource limits, rolling updates, scaling services,
          Compose Watch cho development, và production-ready Compose configurations.
        duration_minutes: 180
        is_free: true
        sort_order: 11
        video_url: null
      - id: 019d8a21-a112-7001-b001-d0c4e7000112
        title: 'Bài 12: Environment Variables, Secrets và Configuration'
        slug: bai-12-environment-variables-secrets-va-configuration
        description: >-
          Quản lý cấu hình với environment variables, .env files, Docker configs,
          Docker secrets, Vault integration. Best practices bảo mật thông tin
          nhạy cảm, 12-factor app methodology và configuration management patterns.
        duration_minutes: 140
        is_free: true
        sort_order: 12
        video_url: null
  - id: section-04
    title: 'Phần 4: Security, Monitoring và CI/CD'
    description: 'Bảo mật Docker, giám sát containers và tích hợp CI/CD pipeline'
    sort_order: 4
    lessons:
      - id: 019d8a21-a113-7001-b001-d0c4e7000113
        title: 'Bài 13: Docker Security Best Practices'
        slug: bai-13-docker-security-best-practices
        description: >-
          Bảo mật Docker daemon, rootless containers, user namespaces, seccomp
          profiles, AppArmor/SELinux, read-only filesystems, capability dropping,
          image signing với Docker Content Trust, CIS Docker Benchmark và
          compliance scanning.
        duration_minutes: 220
        is_free: true
        sort_order: 13
        video_url: null
      - id: 019d8a21-a114-7001-b001-d0c4e7000114
        title: 'Bài 14: Docker Logging và Monitoring'
        slug: bai-14-docker-logging-va-monitoring
        description: >-
          Docker logging drivers (json-file, syslog, fluentd, gelf), centralized
          logging với ELK/EFK Stack, container metrics với cAdvisor, Prometheus +
          Grafana dashboards, Docker events, health monitoring và alerting strategies.
        duration_minutes: 200
        is_free: true
        sort_order: 14
        video_url: null
      - id: 019d8a21-a115-7001-b001-d0c4e7000115
        title: 'Bài 15: Docker trong CI/CD Pipeline'
        slug: bai-15-docker-trong-ci-cd-pipeline
        description: >-
          Docker trong Jenkins, GitLab CI, GitHub Actions, tự động build và push
          images, Docker-in-Docker (DinD) vs Docker Socket, CI/CD best practices,
          automated testing với Docker, blue-green và canary deployments.
        duration_minutes: 200
        is_free: true
        sort_order: 15
        video_url: null
      - id: 019d8a21-a116-7001-b001-d0c4e7000116
        title: 'Bài 16: Docker Performance Tuning'
        slug: bai-16-docker-performance-tuning
        description: >-
          Tối ưu Docker build speed, layer caching strategies, BuildKit features,
          container runtime performance, resource management (cgroups), storage
          driver optimization, network performance tuning và benchmarking tools.
        duration_minutes: 180
        is_free: true
        sort_order: 16
        video_url: null
  - id: section-05
    title: 'Phần 5: Production và Advanced Topics'
    description: 'Docker Swarm, Microservices, Kubernetes migration và production deployment'
    sort_order: 5
    lessons:
      - id: 019d8a21-a117-7001-b001-d0c4e7000117
        title: 'Bài 17: Docker Swarm - Container Orchestration'
        slug: bai-17-docker-swarm-container-orchestration
        description: >-
          Docker Swarm mode, tạo và quản lý cluster, services, tasks, replicas,
          rolling updates, rollback, overlay networking, ingress load balancing,
          placement constraints, secrets management và Swarm vs Kubernetes comparison.
        duration_minutes: 240
        is_free: true
        sort_order: 17
        video_url: null
      - id: 019d8a21-a118-7001-b001-d0c4e7000118
        title: 'Bài 18: Docker cho Microservices Architecture'
        slug: bai-18-docker-cho-microservices-architecture
        description: >-
          Thiết kế microservices với Docker, service discovery, API gateway patterns,
          inter-service communication, event-driven architecture, distributed tracing
          với Jaeger, circuit breaker patterns và strangler fig migration strategy.
        duration_minutes: 220
        is_free: true
        sort_order: 18
        video_url: null
      - id: 019d8a21-a119-7001-b001-d0c4e7000119
        title: 'Bài 19: Docker với Kubernetes - Migration Path'
        slug: bai-19-docker-voi-kubernetes-migration-path
        description: >-
          Từ Docker Compose đến Kubernetes, Kompose tool, writing Kubernetes
          manifests, Helm charts, container runtime interface (CRI), từ Docker
          Swarm sang K8s, hybrid deployments và production migration strategies.
        duration_minutes: 200
        is_free: true
        sort_order: 19
        video_url: null
      - id: 019d8a21-a120-7001-b001-d0c4e7000120
        title: 'Bài 20: Production Deployment và Troubleshooting'
        slug: bai-20-production-deployment-va-troubleshooting
        description: >-
          Production readiness checklist, zero-downtime deployments, disaster
          recovery, backup strategies, common Docker issues và solutions,
          debugging techniques, docker system prune, disk management và
          enterprise Docker deployment patterns.
        duration_minutes: 240
        is_free: true
        sort_order: 20
        video_url: null
reviews: []
quizzes: []
---
<p></p><h2><strong>Phần 1: Nền tảng Docker</strong></h2>
<h3>Bài 1: Giới thiệu Docker - Container và Virtualization</h3>
<ul>
<li><p>Docker là gì? Lịch sử phát triển container technology</p></li>
<li><p>Container vs Virtual Machine - So sánh chi tiết</p></li>
<li><p>Kiến trúc Docker Engine: Docker Daemon, Docker CLI, containerd, runc</p></li>
<li><p>OCI (Open Container Initiative) standards</p></li>
<li><p>Docker Desktop vs Docker Engine</p></li>
<li><p>Use cases thực tế của Docker trong doanh nghiệp</p></li>
</ul>
<h3>Bài 2: Cài đặt Docker và Các lệnh Cơ bản</h3>
<ul>
<li><p>Cài đặt Docker Engine trên Ubuntu/CentOS/macOS/Windows</p></li>
<li><p>Cấu hình Docker daemon (daemon.json)</p></li>
<li><p>Docker CLI cơ bản: run, ps, stop, start, rm, exec, logs</p></li>
<li><p>Interactive mode vs Detached mode</p></li>
<li><p>Port mapping và environment variables cơ bản</p></li>
<li><p>Docker system commands: info, version, df, prune</p></li>
</ul>
<h3>Bài 3: Docker Images - Build, Pull và Quản lý</h3>
<ul>
<li><p>Docker image là gì? Layer architecture</p></li>
<li><p>Docker Hub và Official Images</p></li>
<li><p>Các lệnh: pull, push, images, tag, rmi, history, inspect</p></li>
<li><p>Image naming convention và tagging strategies</p></li>
<li><p>Chọn base image phù hợp (Alpine, Slim, Distroless)</p></li>
<li><p>Docker image prune và cleanup</p></li>
</ul>
<h3>Bài 4: Docker Containers - Vòng đời và Quản lý</h3>
<ul>
<li><p>Vòng đời container: created → running → paused → stopped → deleted</p></li>
<li><p>Resource limits: CPU, memory, I/O</p></li>
<li><p>Restart policies: no, always, unless-stopped, on-failure</p></li>
<li><p>Docker inspect và docker stats</p></li>
<li><p>Container debugging: exec, attach, cp, diff, export</p></li>
<li><p>Container naming conventions và labels</p></li>
</ul>

<h2><strong>Phần 2: Dockerfile và Image Optimization</strong></h2>
<h3>Bài 5: Dockerfile từ A đến Z</h3>
<ul>
<li><p>Tất cả Dockerfile instructions: FROM, RUN, COPY, ADD, CMD, ENTRYPOINT</p></li>
<li><p>ENV, ARG, WORKDIR, EXPOSE, VOLUME, USER</p></li>
<li><p>HEALTHCHECK, LABEL, SHELL, STOPSIGNAL</p></li>
<li><p>CMD vs ENTRYPOINT - Khi nào dùng gì?</p></li>
<li><p>COPY vs ADD - Best practices</p></li>
<li><p>Build context và .dockerignore</p></li>
</ul>
<h3>Bài 6: Multi-stage Builds và Tối ưu Docker Image</h3>
<ul>
<li><p>Multi-stage builds để giảm kích thước image</p></li>
<li><p>Layer caching optimization</p></li>
<li><p>Alpine vs Distroless vs Scratch base images</p></li>
<li><p>Security scanning với Trivy và Snyk</p></li>
<li><p>Docker Scout và image analysis</p></li>
<li><p>Chiến lược tối ưu image cho từng ngôn ngữ (Node.js, Java, Go, Python)</p></li>
</ul>
<h3>Bài 7: Docker Registry - Docker Hub và Private Registry</h3>
<ul>
<li><p>Docker Hub: repositories, automated builds, webhooks</p></li>
<li><p>Triển khai Private Registry với Docker Registry</p></li>
<li><p>Harbor - Enterprise Container Registry</p></li>
<li><p>Image tagging strategies và versioning</p></li>
<li><p>Registry authentication và authorization</p></li>
<li><p>Vulnerability scanning và security policies</p></li>
</ul>
<h3>Bài 8: Docker Compose Cơ bản</h3>
<ul>
<li><p>Docker Compose là gì? Tại sao cần Compose?</p></li>
<li><p>Cú pháp docker-compose.yml</p></li>
<li><p>Services, networks, volumes</p></li>
<li><p>depends_on và healthcheck</p></li>
<li><p>Lab: Deploy Nginx + Node.js + PostgreSQL + Redis</p></li>
<li><p>Docker Compose CLI: up, down, ps, logs, exec, build</p></li>
</ul>

<h2><strong>Phần 3: Networking, Storage và Compose Nâng cao</strong></h2>
<h3>Bài 9: Docker Networking Deep Dive</h3>
<ul>
<li><p>Network drivers: bridge, host, overlay, macvlan, none</p></li>
<li><p>Docker DNS resolution và service discovery</p></li>
<li><p>Container-to-container communication</p></li>
<li><p>Port mapping chi tiết</p></li>
<li><p>Custom bridge networks vs default bridge</p></li>
<li><p>Multi-host networking với overlay</p></li>
<li><p>Network troubleshooting tools</p></li>
</ul>
<h3>Bài 10: Docker Volumes và Persistent Storage</h3>
<ul>
<li><p>Volumes vs Bind mounts vs tmpfs mounts</p></li>
<li><p>Named volumes và anonymous volumes</p></li>
<li><p>Volume drivers và plugins (NFS, AWS EBS, GlusterFS)</p></li>
<li><p>Backup và restore data từ volumes</p></li>
<li><p>Storage best practices cho databases</p></li>
<li><p>Read-only volumes và volume permissions</p></li>
</ul>
<h3>Bài 11: Docker Compose Nâng cao</h3>
<ul>
<li><p>Compose profiles cho multiple environments</p></li>
<li><p>Extends và override files</p></li>
<li><p>Variable substitution và .env files</p></li>
<li><p>Deploy configuration và resource limits</p></li>
<li><p>Scaling services với Compose</p></li>
<li><p>Compose Watch cho hot-reload development</p></li>
<li><p>Production-ready Compose configurations</p></li>
</ul>
<h3>Bài 12: Environment Variables, Secrets và Configuration</h3>
<ul>
<li><p>Environment variables trong Docker</p></li>
<li><p>.env files và variable precedence</p></li>
<li><p>Docker configs và Docker secrets</p></li>
<li><p>HashiCorp Vault integration</p></li>
<li><p>12-Factor App methodology</p></li>
<li><p>Configuration management patterns</p></li>
</ul>

<h2><strong>Phần 4: Security, Monitoring và CI/CD</strong></h2>
<h3>Bài 13: Docker Security Best Practices</h3>
<ul>
<li><p>Docker daemon security</p></li>
<li><p>Rootless containers và non-root users</p></li>
<li><p>User namespaces và Linux capabilities</p></li>
<li><p>Seccomp profiles và AppArmor/SELinux</p></li>
<li><p>Read-only filesystems và capability dropping</p></li>
<li><p>Docker Content Trust (image signing)</p></li>
<li><p>CIS Docker Benchmark</p></li>
</ul>
<h3>Bài 14: Docker Logging và Monitoring</h3>
<ul>
<li><p>Docker logging drivers: json-file, syslog, fluentd, gelf</p></li>
<li><p>Centralized logging với ELK/EFK Stack</p></li>
<li><p>Container metrics với cAdvisor</p></li>
<li><p>Prometheus + Grafana dashboards cho Docker</p></li>
<li><p>Docker events và health monitoring</p></li>
<li><p>Alerting strategies</p></li>
</ul>
<h3>Bài 15: Docker trong CI/CD Pipeline</h3>
<ul>
<li><p>Docker trong Jenkins Pipeline</p></li>
<li><p>GitLab CI với Docker</p></li>
<li><p>GitHub Actions với Docker</p></li>
<li><p>Docker-in-Docker (DinD) vs Docker Socket mounting</p></li>
<li><p>Automated testing với Docker containers</p></li>
<li><p>Blue-green và canary deployments</p></li>
</ul>
<h3>Bài 16: Docker Performance Tuning</h3>
<ul>
<li><p>Tối ưu Docker build speed với BuildKit</p></li>
<li><p>Layer caching strategies nâng cao</p></li>
<li><p>Container runtime performance</p></li>
<li><p>Resource management với cgroups v2</p></li>
<li><p>Storage driver optimization (overlay2)</p></li>
<li><p>Network performance tuning</p></li>
<li><p>Benchmarking tools và profiling</p></li>
</ul>

<h2><strong>Phần 5: Production và Advanced Topics</strong></h2>
<h3>Bài 17: Docker Swarm - Container Orchestration</h3>
<ul>
<li><p>Docker Swarm mode: init, join, leave</p></li>
<li><p>Services, tasks và replicas</p></li>
<li><p>Rolling updates và rollback</p></li>
<li><p>Overlay networking và ingress</p></li>
<li><p>Placement constraints và preferences</p></li>
<li><p>Secrets và configs trong Swarm</p></li>
<li><p>Docker Swarm vs Kubernetes comparison</p></li>
</ul>
<h3>Bài 18: Docker cho Microservices Architecture</h3>
<ul>
<li><p>Thiết kế microservices với Docker containers</p></li>
<li><p>Service discovery patterns</p></li>
<li><p>API Gateway với Docker (Traefik, Kong)</p></li>
<li><p>Inter-service communication (REST, gRPC, messaging)</p></li>
<li><p>Event-driven architecture với Docker</p></li>
<li><p>Distributed tracing với Jaeger</p></li>
<li><p>Circuit breaker patterns</p></li>
</ul>
<h3>Bài 19: Docker với Kubernetes - Migration Path</h3>
<ul>
<li><p>Từ Docker Compose đến Kubernetes manifests</p></li>
<li><p>Kompose - chuyển đổi Compose sang K8s</p></li>
<li><p>Container Runtime Interface (CRI)</p></li>
<li><p>Helm charts cho Docker applications</p></li>
<li><p>Từ Docker Swarm sang Kubernetes</p></li>
<li><p>Hybrid deployment strategies</p></li>
</ul>
<h3>Bài 20: Production Deployment và Troubleshooting</h3>
<ul>
<li><p>Production readiness checklist</p></li>
<li><p>Zero-downtime deployment strategies</p></li>
<li><p>Disaster recovery và backup plans</p></li>
<li><p>Common Docker issues và solutions</p></li>
<li><p>Docker debugging techniques nâng cao</p></li>
<li><p>Disk management và cleanup strategies</p></li>
<li><p>Enterprise Docker deployment patterns</p></li>
</ul>
<p></p>
