---
id: 019d8a21-a119-7001-b001-d0c4e7000119
title: 'Bài 19: Docker với Kubernetes - Migration Path'
slug: bai-19-docker-voi-kubernetes-migration-path
description: >-
  Hành trình từ Docker Compose sang Kubernetes, sử dụng Kompose để convert,
  Container Runtime Interface (CRI), containerd, Helm charts, Docker Desktop
  Kubernetes, hybrid deployments và Kubernetes basics cho Docker developers.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 5: Production và Advanced Topics"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5220" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5220)"/>

  <!-- Decorations -->
  <g>
    <circle cx="629" cy="197" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="658" cy="166" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="687" cy="135" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="716" cy="104" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="745" cy="73" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="167" x2="1100" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="197" x2="1050" y2="267" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1053.3730669589463,196 1053.3730669589463,238 1017,259 980.6269330410536,238 980.6269330410536,196 1017,175" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Bài 19</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 19: Docker với Kubernetes - Migration</tspan>
      <tspan x="60" dy="42">Path</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Docker từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Production và Advanced Topics</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-docker-to-kubernetes"><strong>1. Từ Docker đến Kubernetes</strong></h2>
<p>Khi ứng dụng phát triển, Docker Compose có thể không đủ đáp ứng nhu cầu orchestration. Kubernetes mở rộng nhiều khả năng mà Docker không có.</p>

<h3><strong>Khi nào cần chuyển sang Kubernetes?</strong></h3>
<ul>
<li>Cần auto-scaling (HPA, VPA)</li>
<li>Multi-node deployment với high availability</li>
<li>Rolling updates phức tạp với canary, blue-green</li>
<li>Service mesh (Istio, Linkerd)</li>
<li>Declarative infrastructure as code</li>
<li>Advanced scheduling và resource management</li>
</ul>

<h3><strong>Docker vs Kubernetes Concepts</strong></h3>
<pre><code>Docker                    →  Kubernetes
─────────────────────────────────────────
Container                 →  Pod
docker-compose.yml        →  Deployment + Service
docker run                →  kubectl run
docker build              →  kaniko / buildah
Docker Network            →  K8s Service + NetworkPolicy
Docker Volume             →  PersistentVolumeClaim
Docker Swarm Service      →  Deployment + HPA
docker-compose scale      →  kubectl scale / HPA
Docker Secrets            →  K8s Secrets
.env file                 →  ConfigMap
</code></pre>

<h2 id="2-kubernetes-basics"><strong>2. Kubernetes Basics cho Docker Developers</strong></h2>
<pre><code class="language-yaml"># Pod - đơn vị nhỏ nhất (tương tự container)
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  containers:
  - name: nginx
    image: nginx:1.27-alpine
    ports:
    - containerPort: 80
    resources:
      requests:
        memory: "64Mi"
        cpu: "100m"
      limits:
        memory: "128Mi"
        cpu: "250m"
</code></pre>

<pre><code class="language-yaml"># Deployment - quản lý replicas (tương tự docker service)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: web
        image: myapp:1.0
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
---
# Service - expose deployment (tương tự port mapping)
apiVersion: v1
kind: Service
metadata:
  name: web
spec:
  selector:
    app: web
  ports:
  - port: 80
    targetPort: 3000
  type: ClusterIP
</code></pre>

<h2 id="3-kompose"><strong>3. Sử dụng Kompose để Convert</strong></h2>
<pre><code class="language-bash"># Cài đặt Kompose
curl -L https://github.com/kubernetes/kompose/releases/download/v1.33.0/kompose-linux-amd64 \
  -o kompose
chmod +x kompose
sudo mv kompose /usr/local/bin/

# macOS
brew install kompose

# Convert docker-compose.yml sang K8s manifests
kompose convert

# Convert với options
kompose convert --file docker-compose.yml --out k8s/
kompose convert --chart  # Tạo Helm chart

# Convert và apply trực tiếp
kompose up

# Remove resources
kompose down
</code></pre>

<h3><strong>Ví dụ Convert</strong></h3>
<pre><code class="language-yaml"># docker-compose.yml (Input)
services:
  web:
    image: nginx:1.27-alpine
    ports:
      - "80:80"
    volumes:
      - web-data:/usr/share/nginx/html
    deploy:
      replicas: 3

  api:
    build: ./api
    ports:
      - "3000:3000"
    environment:
      DB_HOST: postgres
    depends_on:
      - postgres

  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: admin
    volumes:
      - pg-data:/var/lib/postgresql/data

volumes:
  web-data:
  pg-data:
</code></pre>

<pre><code class="language-bash"># Kompose sẽ tạo:
# web-deployment.yaml
# web-service.yaml
# web-data-persistentvolumeclaim.yaml
# api-deployment.yaml
# api-service.yaml
# postgres-deployment.yaml
# postgres-service.yaml
# pg-data-persistentvolumeclaim.yaml
</code></pre>

<h2 id="4-cri-containerd"><strong>4. Container Runtime Interface (CRI)</strong></h2>
<p>Kubernetes không trực tiếp sử dụng Docker daemon, mà sử dụng CRI:</p>
<pre><code>Kubernetes History:
K8s &lt; 1.20:  Docker (dockershim) → Docker daemon → containerd → runc
K8s 1.20-23: dockershim deprecated
K8s ≥ 1.24:  CRI → containerd → runc  (Docker không cần thiết)
                 → CRI-O → runc

Note: Docker images vẫn hoạt động vì tuân theo OCI standard!
</code></pre>

<pre><code class="language-bash"># Kiểm tra container runtime trên K8s node
kubectl get nodes -o wide
# CONTAINER-RUNTIME column hiển thị containerd://1.7.x

# Build image không cần Docker
# Kaniko - build trong K8s
# Buildah - rootless builds
# BuildKit - Docker BuildKit standalone

# Ví dụ Kaniko trong K8s
</code></pre>
<pre><code class="language-yaml">apiVersion: v1
kind: Pod
metadata:
  name: kaniko
spec:
  containers:
  - name: kaniko
    image: gcr.io/kaniko-project/executor:latest
    args:
    - "--dockerfile=Dockerfile"
    - "--context=git://github.com/user/repo.git"
    - "--destination=registry.example.com/myapp:latest"
    volumeMounts:
    - name: docker-config
      mountPath: /kaniko/.docker
  volumes:
  - name: docker-config
    secret:
      secretName: docker-registry-secret
</code></pre>

<h2 id="5-docker-desktop-kubernetes"><strong>5. Docker Desktop Kubernetes</strong></h2>
<pre><code class="language-bash"># Enable K8s trong Docker Desktop
# Settings → Kubernetes → Enable Kubernetes

# Kiểm tra cluster
kubectl cluster-info
kubectl get nodes

# Context switching
kubectl config get-contexts
kubectl config use-context docker-desktop

# Deploy app
kubectl apply -f k8s/

# Xem resources
kubectl get pods,services,deployments

# Port forward
kubectl port-forward svc/web 8080:80

# Logs
kubectl logs -f deployment/api

# Exec vào pod
kubectl exec -it pod/api-xxx -- /bin/sh
</code></pre>

<h2 id="6-helm-charts"><strong>6. Helm Charts cho Docker Developers</strong></h2>
<pre><code class="language-bash"># Cài đặt Helm
brew install helm  # macOS
# hoặc
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# Tạo Helm chart
helm create myapp

# Structure
myapp/
├── Chart.yaml          # Chart metadata
├── values.yaml         # Default values
├── templates/
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   ├── configmap.yaml
│   ├── secret.yaml
│   ├── hpa.yaml
│   └── _helpers.tpl
└── charts/             # Dependencies
</code></pre>

<pre><code class="language-yaml"># values.yaml - tương tự .env file trong Docker
replicaCount: 3

image:
  repository: myapp
  tag: "1.0"
  pullPolicy: IfNotPresent

service:
  type: ClusterIP
  port: 80

ingress:
  enabled: true
  hosts:
    - host: myapp.example.com
      paths:
        - path: /
          pathType: Prefix

resources:
  limits:
    cpu: 500m
    memory: 256Mi
  requests:
    cpu: 100m
    memory: 128Mi

autoscaling:
  enabled: true
  minReplicas: 2
  maxReplicas: 10
  targetCPUUtilizationPercentage: 80
</code></pre>

<pre><code class="language-bash"># Install chart
helm install myapp ./myapp -f values-prod.yaml

# Upgrade
helm upgrade myapp ./myapp -f values-prod.yaml

# Rollback
helm rollback myapp 1

# List releases
helm list

# Uninstall
helm uninstall myapp
</code></pre>

<h2 id="7-migration-strategy"><strong>7. Migration Strategy</strong></h2>
<h3><strong>Phương pháp từng bước</strong></h3>
<pre><code>Phase 1: Containerize (Docker)
  ├── Dockerfile cho mỗi service
  ├── docker-compose.yml cho local dev
  └── CI/CD build Docker images

Phase 2: Registry Setup
  ├── Private registry (Harbor/ECR/GCR)
  ├── Image scanning (Trivy)
  └── Tagging strategy (semver)

Phase 3: K8s Dev Environment
  ├── Docker Desktop Kubernetes
  ├── Kompose convert
  ├── Fix và optimize manifests
  └── Test locally

Phase 4: Staging
  ├── Deploy to staging K8s cluster
  ├── Helm charts cho deployment
  ├── ConfigMaps + Secrets
  └── Monitoring + Logging

Phase 5: Production
  ├── Production K8s cluster (EKS/GKE/AKS)
  ├── Ingress controller
  ├── HPA + resource limits
  ├── Network policies
  └── Backup + DR
</code></pre>

<h2 id="8-hybrid-deployments"><strong>8. Hybrid Deployments</strong></h2>
<p>Không phải mọi thứ đều cần Kubernetes ngay lập tức:</p>
<pre><code class="language-yaml"># Development: Docker Compose
# Staging/Production: Kubernetes
# Shared codebase, shared Dockerfiles

# Makefile cho hybrid workflow
# Makefile
.PHONY: dev staging prod

dev:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml up

staging:
	helm upgrade --install myapp ./helm/myapp \
		-f helm/myapp/values-staging.yaml \
		--namespace staging

prod:
	helm upgrade --install myapp ./helm/myapp \
		-f helm/myapp/values-prod.yaml \
		--namespace production
</code></pre>

<h2 id="9-configmap-secret"><strong>9. ConfigMap và Secret từ Docker</strong></h2>
<pre><code class="language-bash"># Docker .env → K8s ConfigMap
kubectl create configmap app-config \
    --from-env-file=.env

# Docker secret → K8s Secret
kubectl create secret generic db-creds \
    --from-literal=username=admin \
    --from-literal=password=secretpass

# Docker config file → K8s ConfigMap
kubectl create configmap nginx-config \
    --from-file=nginx.conf
</code></pre>

<h2 id="10-tong-ket"><strong>10. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã học:</p>
<ul>
<li><p>Docker vs Kubernetes concepts mapping</p></li>
<li><p>Kubernetes basics cho Docker developers</p></li>
<li><p>Kompose để convert docker-compose.yml</p></li>
<li><p>Container Runtime Interface (CRI) và containerd</p></li>
<li><p>Docker Desktop Kubernetes cho development</p></li>
<li><p>Helm charts cho packaging và deployment</p></li>
<li><p>Migration strategy và hybrid deployments</p></li>
</ul>
<p>Bài tiếp theo: Production Deployment và Troubleshooting - bài cuối cùng!</p>
