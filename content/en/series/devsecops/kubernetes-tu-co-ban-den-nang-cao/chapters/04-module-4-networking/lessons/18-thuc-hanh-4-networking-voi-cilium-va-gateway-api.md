---
id: 019c9618-0204-7000-8000-c1147ba22e12
title: 'LESSON 17: PRACTICE — NETWORKING WITH CILIUM AND GATEWAY API'
slug: thuc-hanh-4-networking-voi-cilium-va-gateway-api
description: 'Module 4 practice: Install Cilium as CNI with Hubble UI, configure Gateway API (HTTPRoute), setup TLS with cert-manager, implement L7 Network Policies, observe network traffic through Hubble.'
duration_minutes: 180
is_free: false
video_url: null
sort_order: 17
section_title: 'Module 4: Networking'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1738" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1738)"/>

  <!-- Decorations -->
  <g>
    <circle cx="627" cy="31" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="654" cy="118" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="681" cy="205" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="708" cy="32" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="119" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="221" x2="1100" y2="301" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="251" x2="1050" y2="321" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1052.1769145362398,203 1052.1769145362398,239 1021,257 989.8230854637602,239 989.8230854637602,203 1021,185" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — Lesson 17</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 17: PRACTICE — NETWORKING WITH CILIUM</tspan>
      <tspan x="60" dy="42">AND GATEWAY API</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 4: Networking</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Practice objective__HTMLTAG_68___
<ul>
  <li>Installing Cilium CNI with Hubble observability</li>
  <li>Install and configure API Gateway (Envoy Gateway or Cilium Gateway)</li>
  <li>Create HTTPRoute for path-based routing and traffic splitting__HTMLTAG_75___
  <li>Implement default-deny NetworkPolicy and allow specific traffic</li>
  <li>Observe network traffic with Hubble UI</li>
</ul>

<h2>Lab 1: Install Cilium with Helm</h2>
<pre><code class="language-bash"># Tạo cluster kind mới không có CNI mặc định
cat &gt; kind-config.yaml &lt;&lt;EOF
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
- role: worker
- role: worker
networking:
  disableDefaultCNI: true  # Không dùng CNI mặc định
  podSubnet: "10.244.0.0/16"
EOF

kind create cluster --config kind-config.yaml --name cilium-lab

# Cài Cilium
helm repo add cilium https://helm.cilium.io/
helm repo update

helm install cilium cilium/cilium \
  --version 1.16.5 \
  --namespace kube-system \
  --set image.pullPolicy=IfNotPresent \
  --set ipam.mode=kubernetes \
  --set hubble.relay.enabled=true \
  --set hubble.ui.enabled=true \
  --set gatewayAPI.enabled=true

# Chờ Cilium ready
kubectl -n kube-system wait --for=condition=ready pod -l k8s-app=cilium --timeout=120s

# Verify
cilium status
cilium connectivity test --test-namespace=cilium-test
</code></pre>

<h2>Lab 2: Turn on Hubble UI and Observe Traffic</h2>
<pre><code class="language-bash"># Port-forward Hubble UI
kubectl port-forward -n kube-system svc/hubble-ui 12000:80 &amp;

# Mở browser: http://localhost:12000

# Cài Hubble CLI
HUBBLE_VERSION=$(curl -s https://raw.githubusercontent.com/cilium/hubble/master/stable.txt)
curl -L --remote-name-all https://github.com/cilium/hubble/releases/download/$HUBBLE_VERSION/hubble-linux-amd64.tar.gz
tar xzvf hubble-linux-amd64.tar.gz
sudo mv hubble /usr/local/bin/

# Port-forward Hubble Relay
kubectl port-forward -n kube-system svc/hubble-relay 4245:80 &amp;

# Quan sát traffic
hubble observe --all-namespaces
hubble observe --namespace default --since 5m
</code></pre>

<h2>Lab 3: Deploy Demo Application__HTMLTAG_86___
<pre><code class="language-bash">kubectl create namespace lab4

# Deploy 3 services: frontend, api-v1, api-v2
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
  namespace: lab4
spec:
  replicas: 2
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
      - name: nginx
        image: nginx:1.27
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: frontend
  namespace: lab4
spec:
  selector:
    app: frontend
  ports:
  - port: 80
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-v1
  namespace: lab4
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api
      version: v1
  template:
    metadata:
      labels:
        app: api
        version: v1
    spec:
      containers:
      - name: api
        image: hashicorp/http-echo:latest
        args: ["-text=API v1 response", "-listen=:8080"]
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: api-v1
  namespace: lab4
spec:
  selector:
    app: api
    version: v1
  ports:
  - port: 8080
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-v2
  namespace: lab4
spec:
  replicas: 1
  selector:
    matchLabels:
      app: api
      version: v2
  template:
    metadata:
      labels:
        app: api
        version: v2
    spec:
      containers:
      - name: api
        image: hashicorp/http-echo:latest
        args: ["-text=API v2 response (canary)", "-listen=:8080"]
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: api-v2
  namespace: lab4
spec:
  selector:
    app: api
    version: v2
  ports:
  - port: 8080
EOF
</code></pre>

<h2>Lab 4: Gateway API — Path-based Routing__HTMLTAG_88___
<pre><code class="language-bash"># Cài Gateway API CRDs
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.2.1/standard-install.yaml

# Tạo GatewayClass và Gateway (dùng Cilium implementation)
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: gateway.networking.k8s.io/v1
kind: GatewayClass
metadata:
  name: cilium
spec:
  controllerName: io.cilium/gateway-controller
---
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: main-gw
  namespace: lab4
spec:
  gatewayClassName: cilium
  listeners:
  - name: http
    protocol: HTTP
    port: 80
    allowedRoutes:
      namespaces:
        from: Same
EOF

# Tạo HTTPRoute: path-based routing
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: app-routes
  namespace: lab4
spec:
  parentRefs:
  - name: main-gw
  rules:
  # /api/* → api-v1 (90%) và api-v2 (10%) canary
  - matches:
    - path:
        type: PathPrefix
        value: /api
    backendRefs:
    - name: api-v1
      port: 8080
      weight: 90
    - name: api-v2
      port: 8080
      weight: 10
  # / → frontend
  - backendRefs:
    - name: frontend
      port: 80
EOF

# Lấy Gateway external IP
kubectl get gateway main-gw -n lab4

# Test routing
GW_IP=$(kubectl get gateway main-gw -n lab4 -o jsonpath='{.status.addresses[0].value}')
curl http://$GW_IP/          # → frontend
curl http://$GW_IP/api/test  # → 90% v1, 10% v2

# Test canary distribution (chạy 20 requests)
for i in $(seq 1 20); do curl -s http://$GW_IP/api/test; done | sort | uniq -c
</code></pre>

<h2>Lab 5: NetworkPolicy — Default-Deny</h2>
<pre><code class="language-bash"># Trước khi apply policy: mọi pods có thể giao tiếp
kubectl exec -n lab4 deploy/frontend -- curl -s http://api-v1:8080   # success

# Apply default-deny ingress
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-ingress
  namespace: lab4
spec:
  podSelector: {}
  policyTypes:
  - Ingress
EOF

# Bây giờ tất cả ingress traffic bị block
kubectl exec -n lab4 deploy/frontend -- curl --connect-timeout 5 http://api-v1:8080
# curl: (28) Connection timed out

# Allow chỉ frontend → api
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend-to-api
  namespace: lab4
spec:
  podSelector:
    matchLabels:
      app: api
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend
    ports:
    - protocol: TCP
      port: 8080
EOF

# Bây giờ frontend có thể gọi api
kubectl exec -n lab4 deploy/frontend -- curl -s http://api-v1:8080   # success

# Nhưng api không thể gọi api (chặn lateral movement)
kubectl exec -n lab4 deploy/api-v1 -- curl --connect-timeout 5 http://api-v2:8080   # timeout
</code></pre>

<h2>Lab 6: Observations with Hubble__HTMLTAG_92___
<pre><code class="language-bash"># Xem traffic bị drop trong lab4
hubble observe --namespace lab4 --verdict DROPPED

# Xem tất cả traffic từ frontend
hubble observe --namespace lab4 --pod-name frontend-xxx

# Xem flow giữa api-v1 và api-v2
hubble observe --namespace lab4 --from-pod api-v1-xxx --to-pod api-v2-xxx

# Hubble UI: Mở http://localhost:12000 → chọn namespace lab4
# → thấy service map với traffic flows
</code></pre>

<h2>Cleanup</h2>
<pre><code class="language-bash">kubectl delete namespace lab4
kind delete cluster --name cilium-lab
</code></pre>

<h2>Summary__HTMLTAG_96___
<ul>
  <li>✅ Cilium CNI with eBPF networking__HTMLTAG_99___
  <li>✅ Hubble: real-time network observability</li>
  <li>✅ Gateway API: path-based routing and traffic splitting (canary)</li>
  <li>✅ NetworkPolicy: default-deny + allow specific</li>
  <li>✅ Debug dropped packets with Hubble</li>
</ul>