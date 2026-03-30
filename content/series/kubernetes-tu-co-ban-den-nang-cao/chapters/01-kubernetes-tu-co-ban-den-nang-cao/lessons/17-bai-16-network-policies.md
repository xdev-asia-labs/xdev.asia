---
id: 019c9618-0203-7000-8000-c1147ba22e12
title: 'BÀI 16: NETWORK POLICIES'
slug: bai-16-network-policies
description: >-
  Bảo mật mạng Kubernetes với NetworkPolicy: Pod selectors, Ingress/Egress rules, default-deny
  pattern. Cilium Network Policies nâng cao với L7 policies dựa trên HTTP method, path, headers.
duration_minutes: 75
is_free: false
video_url: null
sort_order: 16
section_title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài học</h2><p>Hiểu NetworkPolicy để kiểm soát traffic vào/ra khỏi Pods. Implement default-deny pattern, allow specific traffic, và dùng Cilium Network Policies cho L7 control.</p>

<h2>1. Tại sao cần NetworkPolicy?</h2>
<p>Mặc định Kubernetes cho phép tất cả traffic giữa tất cả Pods trong cluster — mọi Pod đều có thể gọi mọi Pod khác. Đây là rủi ro bảo mật nghiêm trọng.</p>
<p>NetworkPolicy cho phép bạn định nghĩa <strong>whitelist rules</strong>: chỉ traffic được phép rõ ràng mới được đi qua.</p>
<p><strong>Quan trọng</strong>: NetworkPolicy chỉ hoạt động nếu CNI plugin hỗ trợ (Cilium, Calico, Weave). Flannel không hỗ trợ NetworkPolicy.</p>

<h2>2. NetworkPolicy Anatomy</h2>
<pre><code class="language-yaml">apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: my-policy
  namespace: production
spec:
  podSelector:          # áp dụng cho Pods nào?
    matchLabels:
      app: backend
  policyTypes:
  - Ingress             # kiểm soát traffic VÀO pods được chọn
  - Egress              # kiểm soát traffic RA KHỎI pods được chọn
  ingress:
  - from:               # allow traffic từ đâu?
    - podSelector:
        matchLabels:
          app: frontend # chỉ cho phép từ frontend pods
    ports:
    - protocol: TCP
      port: 8080
  egress:
  - to:                 # allow traffic đến đâu?
    - podSelector:
        matchLabels:
          app: database # chỉ cho phép đến database pods
    ports:
    - protocol: TCP
      port: 5432
</code></pre>

<h2>3. Default-Deny Pattern — Best Practice</h2>
<p>Bắt đầu bằng "deny all", sau đó mở từng luồng traffic cần thiết.</p>

<h3>3.1 Default Deny All Ingress</h3>
<pre><code class="language-yaml">apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-ingress
  namespace: production
spec:
  podSelector: {}    # {} = apply to ALL pods in namespace
  policyTypes:
  - Ingress
  # ingress không được khai báo = deny all ingress
</code></pre>

<h3>3.2 Default Deny All Egress</h3>
<pre><code class="language-yaml">apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-egress
  namespace: production
spec:
  podSelector: {}
  policyTypes:
  - Egress
  # egress không được khai báo = deny all egress
</code></pre>

<h3>3.3 Allow DNS (quan trọng nếu deny egress)</h3>
<pre><code class="language-yaml">apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-dns
  namespace: production
spec:
  podSelector: {}
  policyTypes:
  - Egress
  egress:
  - to:
    - namespaceSelector:
        matchLabels:
          kubernetes.io/metadata.name: kube-system
    ports:
    - protocol: UDP
      port: 53
    - protocol: TCP
      port: 53
</code></pre>

<h2>4. Allow Specific Traffic Patterns</h2>

<h3>Frontend → Backend</h3>
<pre><code class="language-yaml">apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend-to-backend
  namespace: production
spec:
  podSelector:
    matchLabels:
      app: backend
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
</code></pre>

<h3>Cross-namespace: Allow từ namespace khác</h3>
<pre><code class="language-yaml">apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-from-monitoring
  namespace: production
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  ingress:
  - from:
    # Chỉ cho phép từ namespace "monitoring"
    - namespaceSelector:
        matchLabels:
          kubernetes.io/metadata.name: monitoring
    ports:
    - protocol: TCP
      port: 9090  # Prometheus scrape
</code></pre>

<h3>Combined: Pod selector VÀ namespace selector</h3>
<pre><code class="language-yaml">ingress:
- from:
  # Pod phải có label app=prometheus VÀ trong namespace monitoring
  - namespaceSelector:
      matchLabels:
        kubernetes.io/metadata.name: monitoring
    podSelector:     # LƯU Ý: cùng item (AND logic)
      matchLabels:
        app: prometheus

# Khác với:
- from:
  # Pod trong namespace monitoring HOẶC pod có label app=prometheus (OR logic)
  - namespaceSelector:
      matchLabels:
        kubernetes.io/metadata.name: monitoring
  - podSelector:     # LƯU Ý: item riêng biệt (OR logic)
      matchLabels:
        app: prometheus
</code></pre>

<h2>5. Cilium Network Policies — L7</h2>
<p>Standard Kubernetes NetworkPolicy chỉ kiểm soát L3/L4 (IP, port). Cilium CiliumNetworkPolicy cho phép L7 control.</p>

<h3>5.1 HTTP Method và Path</h3>
<pre><code class="language-yaml">apiVersion: cilium.io/v2
kind: CiliumNetworkPolicy
metadata:
  name: api-l7-policy
  namespace: production
spec:
  endpointSelector:
    matchLabels:
      app: api-server
  ingress:
  - fromEndpoints:
    - matchLabels:
        app: frontend
    toPorts:
    - ports:
      - port: "8080"
        protocol: TCP
      rules:
        http:
        # Chỉ cho phép GET /api/v1/users
        - method: GET
          path: "^/api/v1/users.*"
        # Chỉ cho phép POST /api/v1/orders
        - method: POST
          path: "^/api/v1/orders"
        # Không cho phép GET /admin/* (không match → deny)
</code></pre>

<h3>5.2 DNS-based Policies</h3>
<pre><code class="language-yaml">apiVersion: cilium.io/v2
kind: CiliumNetworkPolicy
metadata:
  name: allow-external-dns
spec:
  endpointSelector:
    matchLabels:
      app: backend
  egress:
  # Chỉ cho phép kết nối đến api.stripe.com
  - toFQDNs:
    - matchName: "api.stripe.com"
    toPorts:
    - ports:
      - port: "443"
        protocol: TCP
  # Chỉ cho phép *.amazonaws.com
  - toFQDNs:
    - matchPattern: "*.amazonaws.com"
    toPorts:
    - ports:
      - port: "443"
        protocol: TCP
</code></pre>

<h2>6. Verify và Debug NetworkPolicy</h2>
<pre><code class="language-bash"># Test connectivity từ pod này đến pod khác
kubectl exec -n production frontend-pod -- curl http://backend-service:8080/api

# Nếu bị block:
# kubectl exec -n production frontend-pod -- curl --connect-timeout 5 http://backend-service:8080
# curl: (28) Connection timed out

# Cilium: xem dropped packets
cilium monitor --type drop

# Hubble: theo dõi traffic
hubble observe --namespace production --verdict DROPPED
hubble observe --pod frontend-pod --protocol tcp
</code></pre>

<h2>7. Best Practices</h2>
<ul>
  <li><strong>Start with default-deny</strong>: áp dụng cho mọi namespace production</li>
  <li><strong>Least privilege</strong>: chỉ mở traffic thực sự cần thiết</li>
  <li><strong>Label consistently</strong>: NetworkPolicy phụ thuộc label selectors — đặt label nhất quán</li>
  <li><strong>Test trước khi apply production</strong>: dùng Hubble audit mode để xem traffic nào sẽ bị block</li>
  <li><strong>Document policies</strong>: giải thích tại sao mỗi policy được tạo</li>
</ul>

<h2>Tóm tắt</h2>
<ul>
  <li>NetworkPolicy: whitelist rules cho Pod traffic</li>
  <li>Default-deny pattern: block all → allow specific</li>
  <li>Selectors: podSelector, namespaceSelector (AND logic trong item, OR logic giữa items)</li>
  <li>Cilium CiliumNetworkPolicy: L7 HTTP, DNS-based policies</li>
  <li>Cần CNI hỗ trợ: Cilium, Calico (không phải Flannel)</li>
</ul>
