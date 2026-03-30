---
id: 019c9618-0204-7000-8000-c1147ba22e12
title: 'THỰC HÀNH 4: NETWORKING VỚI CILIUM VÀ GATEWAY API'
slug: thuc-hanh-4-networking-voi-cilium-va-gateway-api
description: >-
  Bài thực hành Module 4: Cài đặt Cilium làm CNI với Hubble UI, cấu hình Gateway API (HTTPRoute),
  setup TLS với cert-manager, implement L7 Network Policies, quan sát network traffic qua Hubble.
duration_minutes: 180
is_free: false
video_url: null
sort_order: 17
section_title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài thực hành</h2>
<ul>
  <li>Cài đặt Cilium CNI với Hubble observability</li>
  <li>Cài đặt và cấu hình Gateway API (Envoy Gateway hoặc Cilium Gateway)</li>
  <li>Tạo HTTPRoute cho path-based routing và traffic splitting</li>
  <li>Implement default-deny NetworkPolicy và allow specific traffic</li>
  <li>Quan sát network traffic với Hubble UI</li>
</ul>

<h2>Lab 1: Cài Cilium với Helm</h2>
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

<h2>Lab 2: Bật Hubble UI và Quan sát Traffic</h2>
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

<h2>Lab 3: Deploy Demo Application</h2>
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

<h2>Lab 4: Gateway API — Path-based Routing</h2>
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

<h2>Lab 6: Quan sát với Hubble</h2>
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

<h2>Tổng kết</h2>
<ul>
  <li>✅ Cilium CNI với eBPF networking</li>
  <li>✅ Hubble: real-time network observability</li>
  <li>✅ Gateway API: path-based routing và traffic splitting (canary)</li>
  <li>✅ NetworkPolicy: default-deny + allow specific</li>
  <li>✅ Debug dropped packets với Hubble</li>
</ul>
