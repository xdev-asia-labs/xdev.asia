---
id: 019c9618-0008-7000-8000-c1147ba22e10
title: 'BÀI 9: THỰC HÀNH — KUBERNETES OBJECTS CƠ BẢN'
slug: thuc-hanh-2-kubernetes-objects-co-ban
description: >-
  Bài thực hành Module 2: Deploy ứng dụng web với Deployment và Sidecar container,
  thực hiện rolling update, expose service, debug với ephemeral containers, quản lý
  namespaces và resource quotas.
duration_minutes: 150
is_free: false
video_url: null
sort_order: 9
section_title: 'Module 2: Kubernetes Objects Cơ bản'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2645" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2645)"/>

  <!-- Decorations -->
  <g>
    <circle cx="732" cy="226" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="864" cy="118" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="996" cy="270" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="628" cy="162" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="760" cy="54" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="86" x2="1100" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="116" x2="1050" y2="186" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1021.507041555162,165.5 1021.507041555162,206.5 986,227 950.492958444838,206.5 950.492958444838,165.5 986,145" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — Bài 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 9: THỰC HÀNH — KUBERNETES OBJECTS CƠ</tspan>
      <tspan x="60" dy="42">BẢN</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 2: Kubernetes Objects Cơ bản</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Mục tiêu bài thực hành</h2>
<ul>
  <li>Deploy ứng dụng web thực tế với Deployment + Sidecar container (log forwarder)</li>
  <li>Thực hiện rolling update và rollback</li>
  <li>Expose service với NodePort</li>
  <li>Debug container với ephemeral containers</li>
  <li>Quản lý namespaces và ResourceQuotas cho multi-team</li>
</ul>

<h2>Chuẩn bị</h2>
<pre><code class="language-bash"># Đảm bảo cluster đang chạy
kubectl cluster-info
kubectl get nodes

# Tạo namespace cho bài thực hành
kubectl create namespace lab2
kubectl config set-context --current --namespace=lab2
</code></pre>

<h2>Lab 1: Deploy Web App với Sidecar Container</h2>
<p>Deploy nginx với Grafana Alloy làm sidecar log forwarder (mô phỏng, không cần cấu hình Loki thực tế).</p>
<pre><code class="language-bash">cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: webapp
  namespace: lab2
spec:
  replicas: 3
  selector:
    matchLabels:
      app: webapp
  template:
    metadata:
      labels:
        app: webapp
        version: v1
    spec:
      initContainers:
      # Sidecar container (K8s 1.33+)
      - name: log-agent
        image: busybox:1.36
        restartPolicy: Always
        command: ['sh', '-c', 'while true; do echo "[$(date)] Sidecar running"; sleep 30; done']
        resources:
          requests:
            cpu: "10m"
            memory: "16Mi"
      containers:
      - name: nginx
        image: nginx:1.27
        ports:
        - containerPort: 80
        resources:
          requests:
            cpu: "100m"
            memory: "128Mi"
          limits:
            cpu: "500m"
            memory: "256Mi"
        readinessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 5
          periodSeconds: 5
        livenessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 15
          periodSeconds: 10
EOF
</code></pre>
<pre><code class="language-bash"># Theo dõi deployment
kubectl rollout status deployment/webapp -n lab2
kubectl get pods -n lab2 -w

# Xem logs của từng container trong pod
kubectl logs -n lab2 -l app=webapp -c nginx
kubectl logs -n lab2 -l app=webapp -c log-agent

# Kiểm tra pods có 2 containers (nginx + log-agent)
kubectl get pods -n lab2
# READY column sẽ hiển thị 2/2
</code></pre>

<h2>Lab 2: Expose Service và Test Load Balancing</h2>
<pre><code class="language-bash">cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: v1
kind: Service
metadata:
  name: webapp-service
  namespace: lab2
spec:
  type: NodePort
  selector:
    app: webapp
  ports:
  - port: 80
    targetPort: 80
    nodePort: 31080
EOF

# Lấy Node IP
kubectl get nodes -o wide

# Test (thay NODE_IP bằng IP thực)
curl http://NODE_IP:31080

# Xem EndpointSlices
kubectl get endpointslices -n lab2 -l kubernetes.io/service-name=webapp-service
</code></pre>

<h2>Lab 3: Rolling Update</h2>
<pre><code class="language-bash"># Update sang nginx 1.28
kubectl set image deployment/webapp nginx=nginx:1.28 -n lab2

# Theo dõi quá trình update
kubectl rollout status deployment/webapp -n lab2

# Xem pods cũ bị terminate và pods mới được tạo
kubectl get pods -n lab2 -w

# Xem revision history
kubectl rollout history deployment/webapp -n lab2

# Rollback về version cũ
kubectl rollout undo deployment/webapp -n lab2
kubectl rollout status deployment/webapp -n lab2
</code></pre>

<h2>Lab 4: Debug với Ephemeral Containers</h2>
<pre><code class="language-bash"># Lấy tên một pod
POD=$(kubectl get pods -n lab2 -l app=webapp -o jsonpath='{.items[0].metadata.name}')
echo "Pod: $POD"

# Attach ephemeral container debug
kubectl debug -it $POD -n lab2 --image=busybox:1.36 --target=nginx

# Trong ephemeral container:
# wget -O- http://localhost  # test localhost
# ps aux                     # xem processes trong nginx container
# exit
</code></pre>

<h2>Lab 5: Multi-team Namespaces với ResourceQuota</h2>
<pre><code class="language-bash"># Tạo namespaces cho 2 teams
kubectl create namespace team-alpha
kubectl create namespace team-beta

# Áp dụng ResourceQuota cho team-alpha
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: v1
kind: ResourceQuota
metadata:
  name: alpha-quota
  namespace: team-alpha
spec:
  hard:
    requests.cpu: "2"
    requests.memory: 4Gi
    limits.cpu: "4"
    limits.memory: 8Gi
    pods: "10"
EOF

# Áp dụng LimitRange
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: v1
kind: LimitRange
metadata:
  name: alpha-limits
  namespace: team-alpha
spec:
  limits:
  - type: Container
    default:
      cpu: "200m"
      memory: "256Mi"
    defaultRequest:
      cpu: "100m"
      memory: "128Mi"
EOF

# Deploy trong team-alpha (không cần khai báo resources — LimitRange sẽ tự áp dụng)
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: alpha-app
  namespace: team-alpha
spec:
  replicas: 3
  selector:
    matchLabels:
      app: alpha-app
  template:
    metadata:
      labels:
        app: alpha-app
    spec:
      containers:
      - name: app
        image: nginx:1.27
        # Không khai báo resources — LimitRange sẽ áp dụng default
EOF

# Kiểm tra quota usage
kubectl describe resourcequota alpha-quota -n team-alpha

# Thử vượt quá quota (sẽ bị từ chối)
kubectl scale deployment alpha-app --replicas=15 -n team-alpha
# Error: pods "alpha-app-xxx" is forbidden: exceeded quota
</code></pre>

<h2>Lab 6: Canary Deployment</h2>
<pre><code class="language-bash"># Stable: 9 replicas (90% traffic)
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: webapp-stable
  namespace: lab2
spec:
  replicas: 9
  selector:
    matchLabels:
      app: webapp-v2
      track: stable
  template:
    metadata:
      labels:
        app: webapp-v2
        track: stable
    spec:
      containers:
      - name: nginx
        image: nginx:1.27
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: webapp-canary
  namespace: lab2
spec:
  replicas: 1
  selector:
    matchLabels:
      app: webapp-v2
      track: canary
  template:
    metadata:
      labels:
        app: webapp-v2
        track: canary
    spec:
      containers:
      - name: nginx
        image: nginx:1.28   # phiên bản mới
---
apiVersion: v1
kind: Service
metadata:
  name: webapp-v2-service
  namespace: lab2
spec:
  selector:
    app: webapp-v2   # match cả stable và canary
  ports:
  - port: 80
EOF

# Kiểm tra traffic distribution
# ~10% requests sẽ đến canary pod
for i in $(seq 1 10); do kubectl exec -n lab2 debug-pod -- curl -s http://webapp-v2-service; done
</code></pre>

<h2>Troubleshooting — Common Issues</h2>
<h3>Pod stuck ở Pending</h3>
<pre><code class="language-bash">kubectl describe pod &lt;pod-name&gt; -n lab2
# Xem Events section: thường là InsufficientCPU, InsufficientMemory, hoặc ImagePullBackOff
</code></pre>
<h3>ImagePullBackOff</h3>
<pre><code class="language-bash">kubectl describe pod &lt;pod-name&gt; -n lab2
# Events: Failed to pull image — kiểm tra tên image và registry credentials
</code></pre>
<h3>CrashLoopBackOff</h3>
<pre><code class="language-bash">kubectl logs &lt;pod-name&gt; -n lab2 --previous
# Xem logs của lần chạy trước để tìm nguyên nhân crash
</code></pre>

<h2>Cleanup</h2>
<pre><code class="language-bash">kubectl delete namespace lab2 team-alpha team-beta
kubectl config set-context --current --namespace=default
</code></pre>

<h2>Tổng kết</h2>
<p>Bạn đã thực hành:</p>
<ul>
  <li>✅ Deploy Deployment với Sidecar container (K8s 1.33+)</li>
  <li>✅ Rolling update và rollback an toàn</li>
  <li>✅ Service với NodePort và EndpointSlices</li>
  <li>✅ Debug với ephemeral containers</li>
  <li>✅ Namespaces + ResourceQuota + LimitRange cho multi-team</li>
  <li>✅ Canary deployment pattern</li>
</ul>
