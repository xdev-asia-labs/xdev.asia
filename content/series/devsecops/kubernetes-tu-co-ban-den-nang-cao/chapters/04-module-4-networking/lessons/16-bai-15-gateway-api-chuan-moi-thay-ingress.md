---
id: 019c9618-0202-7000-8000-c1147ba22e12
title: 'BÀI 15: GATEWAY API — CHUẨN MỚI THAY THẾ INGRESS'
slug: bai-15-gateway-api-chuan-moi-thay-ingress
description: >-
  Gateway API v1.4 GA (10/2025) là chuẩn mới thay thế Ingress controller. GatewayClass, Gateway,
  HTTPRoute, GRPCRoute. Traffic splitting, TLS, header matching. Implementations: Cilium,
  Envoy Gateway, nginx-gateway-fabric.
duration_minutes: 100
is_free: false
video_url: null
sort_order: 15
section_title: 'Module 4: Networking'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5724" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5724)"/>

  <!-- Decorations -->
  <g>
    <circle cx="860" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="230" x2="1100" y2="310" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="260" x2="1050" y2="330" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="951.650635094611,117.5 951.650635094611,142.5 930,155 908.349364905389,142.5 908.349364905389,117.5 930,105" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — Bài 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 15: GATEWAY API — CHUẨN MỚI THAY THẾ</tspan>
      <tspan x="60" dy="42">INGRESS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 4: Networking</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Mục tiêu bài học</h2><p>Hiểu Gateway API v1.4 là chuẩn mới thay thế Ingress truyền thống, cách dùng GatewayClass, Gateway, HTTPRoute để route traffic, traffic splitting cho canary deployment, TLS termination, và các implementations phổ biến.</p>

<h2>1. Vấn đề với Ingress Truyền thống</h2>
<p>Ingress API tồn tại từ K8s 1.1 và có nhiều hạn chế:</p>
<ul>
  <li><strong>Annotation hell</strong>: mỗi controller (nginx, traefik, haproxy) dùng annotations khác nhau → vendor lock-in</li>
  <li><strong>Limited expressiveness</strong>: không có built-in traffic splitting, header modification</li>
  <li><strong>Single resource</strong>: không phân tách vai trò infrastructure vs application teams</li>
  <li><strong>TLS limitations</strong>: không có backend TLS natively</li>
</ul>
<p>Ingress-NGINX: đang vào <strong>maintenance mode (tháng 3/2026)</strong>. Các tính năng mới không được thêm vào.</p>

<h2>2. Gateway API v1.4 GA — Tháng 10/2025</h2>
<p>Gateway API là Kubernetes SIG-Network project, chuẩn hoá traffic management với:</p>
<ul>
  <li><strong>Role-oriented design</strong>: phân tách rõ ràng vai trò infrastructure provider, cluster operator, application developer</li>
  <li><strong>Expressive</strong>: traffic splitting, header matching, URL rewriting là first-class citizens</li>
  <li><strong>Portable</strong>: cùng manifest hoạt động với mọi Gateway API implementation</li>
  <li><strong>Extensible</strong>: TLSRoute, GRPCRoute, TCPRoute, custom extensions</li>
</ul>

<h2>3. Resource Hierarchy</h2>
<pre><code class="language-bash">Infrastructure Provider
    └── GatewayClass (định nghĩa loại gateway: cilium, envoy-gateway...)
           │
Cluster Operator
    └── Gateway (instance của gateway, lắng nghe trên port/protocol)
           │
Application Developer
    └── HTTPRoute / GRPCRoute (route traffic từ gateway đến services)
</code></pre>

<h3>3.1 GatewayClass</h3>
<pre><code class="language-yaml">apiVersion: gateway.networking.k8s.io/v1
kind: GatewayClass
metadata:
  name: cilium
spec:
  controllerName: io.cilium/gateway-controller
</code></pre>

<h3>3.2 Gateway</h3>
<pre><code class="language-yaml">apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: main-gateway
  namespace: infra
spec:
  gatewayClassName: cilium
  listeners:
  - name: http
    protocol: HTTP
    port: 80
  - name: https
    protocol: HTTPS
    port: 443
    tls:
      mode: Terminate
      certificateRefs:
      - name: tls-cert
        namespace: infra
</code></pre>

<h3>3.3 HTTPRoute — Path-based Routing</h3>
<pre><code class="language-yaml">apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: app-routes
  namespace: production
spec:
  parentRefs:
  - name: main-gateway
    namespace: infra
  hostnames:
  - "api.example.com"
  rules:
  # Route /api/v1 → backend-v1
  - matches:
    - path:
        type: PathPrefix
        value: /api/v1
    backendRefs:
    - name: backend-v1
      port: 8080
  # Route /api/v2 → backend-v2
  - matches:
    - path:
        type: PathPrefix
        value: /api/v2
    backendRefs:
    - name: backend-v2
      port: 8080
  # Route mọi thứ còn lại → frontend
  - backendRefs:
    - name: frontend
      port: 3000
</code></pre>

<h2>4. Traffic Splitting — Canary Deployment</h2>
<pre><code class="language-yaml">apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: canary-route
  namespace: production
spec:
  parentRefs:
  - name: main-gateway
    namespace: infra
  hostnames:
  - "myapp.example.com"
  rules:
  - backendRefs:
    - name: myapp-stable    # 90% traffic
      port: 80
      weight: 90
    - name: myapp-canary    # 10% traffic
      port: 80
      weight: 10
</code></pre>

<h2>5. Header Matching và URL Rewriting</h2>
<pre><code class="language-yaml">rules:
# Route dựa trên header
- matches:
  - headers:
    - name: "X-Version"
      value: "beta"
  backendRefs:
  - name: backend-beta
    port: 8080

# URL rewrite: /old-path/* → /new-path/*
- matches:
  - path:
      type: PathPrefix
      value: /old-path
  filters:
  - type: URLRewrite
    urlRewrite:
      path:
        type: ReplacePrefixMatch
        replacePrefixMatch: /new-path
  backendRefs:
  - name: backend
    port: 8080

# Redirect HTTP → HTTPS
- matches:
  - path:
      type: PathPrefix
      value: /
  filters:
  - type: RequestRedirect
    requestRedirect:
      scheme: https
      statusCode: 301
</code></pre>

<h2>6. BackendTLSPolicy — TLS đến Backend (v1.4)</h2>
<pre><code class="language-yaml">apiVersion: gateway.networking.k8s.io/v1alpha3
kind: BackendTLSPolicy
metadata:
  name: backend-tls
spec:
  targetRefs:
  - group: ""
    kind: Service
    name: secure-backend
  validation:
    caCertificateRefs:
    - group: ""
      kind: Secret
      name: backend-ca-cert
    hostname: secure-backend.production.svc.cluster.local
</code></pre>

<h2>7. Cross-namespace Routing với ReferenceGrant</h2>
<pre><code class="language-yaml"># Cho phép HTTPRoute trong namespace "production" dùng Gateway trong namespace "infra"
apiVersion: gateway.networking.k8s.io/v1beta1
kind: ReferenceGrant
metadata:
  name: allow-production
  namespace: infra
spec:
  from:
  - group: gateway.networking.k8s.io
    kind: HTTPRoute
    namespace: production
  to:
  - group: gateway.networking.k8s.io
    kind: Gateway
    name: main-gateway
</code></pre>

<h2>8. GRPCRoute</h2>
<pre><code class="language-yaml">apiVersion: gateway.networking.k8s.io/v1
kind: GRPCRoute
metadata:
  name: grpc-route
spec:
  parentRefs:
  - name: main-gateway
    namespace: infra
  hostnames:
  - "grpc.example.com"
  rules:
  - matches:
    - method:
        service: mypackage.MyService
        method: GetUser
    backendRefs:
    - name: user-service
      port: 9090
</code></pre>

<h2>9. Implementations Gateway API</h2>
<ul>
  <li><strong>Cilium Gateway API</strong>: eBPF-based, tích hợp native với Cilium CNI, hiệu quả nhất</li>
  <li><strong>Envoy Gateway</strong>: Envoy-based, feature-rich, CNCF project</li>
  <li><strong>nginx-gateway-fabric</strong>: nginx-based, ổn định</li>
  <li><strong>Istio</strong>: tích hợp với service mesh Istio</li>
  <li><strong>Traefik</strong>: hỗ trợ Gateway API v1 từ v3.0</li>
</ul>

<h2>10. Migration từ Ingress sang Gateway API</h2>
<pre><code class="language-bash"># Ingress cũ
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 8080

# Tương đương Gateway API (không cần annotations!)
# HTTPRoute như ví dụ ở phần 3.3
</code></pre>

<h2>Tóm tắt</h2>
<ul>
  <li>Gateway API v1.4 GA (10/2025) = chuẩn mới thay Ingress</li>
  <li>Role-oriented: GatewayClass (infra) → Gateway (cluster ops) → HTTPRoute (app dev)</li>
  <li>Traffic splitting, header matching, URL rewrite là first-class</li>
  <li>BackendTLSPolicy: TLS đến backend (v1.4)</li>
  <li>Cilium Gateway API: eBPF-based, khuyến nghị với Cilium CNI</li>
  <li>Ingress-NGINX: maintenance mode tháng 3/2026 — nên migrate sang Gateway API</li>
</ul>
