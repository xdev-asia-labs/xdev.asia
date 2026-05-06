---
id: 019c9618-0203-7000-8000-c1147ba22e12
title: 'LESSON 16: NETWORK POLICY'
slug: bai-16-network-policies
description: 'Secure your Kubernetes network with NetworkPolicy: Pod selectors, Ingress/Egress rules, default-deny pattern. Advanced Cilium Network Policies with L7 policies based on HTTP method, path, headers.'
duration_minutes: 75
is_free: false
video_url: null
sort_order: 16
section_title: 'Module 4: Networking'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2109" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2109)"/>

  <!-- Decorations -->
  <g>
    <circle cx="792" cy="106" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="984" cy="218" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="676" cy="70" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="868" cy="182" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="34" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="166" x2="1100" y2="246" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="196" x2="1050" y2="266" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.507041555162,145.5 1001.507041555162,186.5 966,207 930.492958444838,186.5 930.492958444838,145.5 966,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — Lesson 16</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 16: NETWORK POLICY</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 4: Networking</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Lesson Objective</h2><p>Understand NetworkPolicy to control traffic in/out of Pods. Implement default-deny pattern, allow specific traffic, and use Cilium Network Policies for L7 control.</p>

<h2>1. Why do we need NetworkPolicy?</h2>
<p>By default, Kubernetes allows all traffic between all Pods in the cluster — every Pod can call every other Pod. This is a serious security risk.</p>
<p>NetworkPolicy allows you to define <strong>whitelist rules</strong>: only explicitly allowed traffic will pass.</p>
<p><strong>Important</strong>: NetworkPolicy only works if CNI plugin supports it (Cilium, Calico, Weave). Flannel does not support NetworkPolicy.</p>

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
<p>Start with "deny all", then open each necessary traffic stream.</p>

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

<h3>3.3 Allow DNS (important if denying egress)</h3>
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

<h3>Cross-namespace: Allow from other namespace__HTMLTAG_98___
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

<h3>Combined: Pod selector AND namespace selector__HTMLTAG_100___
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
<p>Standard Kubernetes NetworkPolicy only controls L3/L4 (IP, port). Cilium CiliumNetworkPolicy allows L7 control.</p>

<h3>5.1 HTTP Method and Path</h3>
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
</code></pre><h2>6. Verify and Debug NetworkPolicy</h2>
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
  <li><strong>Start with default-deny</strong>: applies to all production namespace</li>
  <li><strong>Least privilege</strong>: only open traffic that is absolutely necessary</li>
  <li><strong>Label consistent</strong>: NetworkPolicy depends on label selectors — set label consistently</li>
  <li><strong>Test before applying to production</strong>: use Hubble audit mode to see which traffic will be blocked</li>
  <li><strong>Document policies</strong>: explains why each policy was created</li>
</ul>

<h2>Summary</h2>
<ul>
  <li>NetworkPolicy: whitelist rules for Pod traffic</li>
  <li>Default-deny pattern: block all → allow specific</li>
  <li>Selectors: podSelector, namespaceSelector (AND logic within items, OR logic between items)</li>
  <li>Cilium CiliumNetworkPolicy: L7 HTTP, DNS-based policies</li>
  <li>Need CNI support: Cilium, Calico (not Flannel)</li>
</ul>