---
id: 019e1a00-aa01-7001-c001-k8sha000602
title: 'BÀI 25: ISTIO TRAFFIC MANAGEMENT — VIRTUALSERVICE & DESTINATIONRULE'
slug: bai-25-istio-traffic-management-virtualservice-destinationrule
description: >-
  Cấu hình traffic routing với VirtualService, DestinationRule,
  canary deployment, A/B testing, circuit breaking, retry, timeout,
  và fault injection.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 25
section_title: 'Phần 6: Service Mesh & Ingress với Istio'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-807" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-807)"/>

  <!-- Decorations -->
  <g>
    <circle cx="795" cy="175" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="990" cy="50" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="685" cy="185" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="880" cy="60" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1075" cy="195" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="85" x2="1100" y2="165" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="115" x2="1050" y2="185" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1069.6410161513775,215 1069.6410161513775,255 1035,275 1000.3589838486224,255 1000.3589838486224,215 1035,195" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Bài 25</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 25: ISTIO TRAFFIC MANAGEMENT —</tspan>
      <tspan x="60" dy="42">VIRTUALSERVICE &amp; DESTINATIONRULE</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Service Mesh &amp; Ingress với Istio</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ VirtualService: routing rules, header-based routing</li>
<li>✅ DestinationRule: subsets, load balancing, connection pool</li>
<li>✅ Canary deployment với traffic splitting</li>
<li>✅ Circuit breaking và outlier detection</li>
<li>✅ Retry, timeout, fault injection</li>
<li>✅ Rate limiting với EnvoyFilter</li>
</ul>

<hr>

<h2 id="phan-1-virtualservice">PHẦN 1: VIRTUALSERVICE</h2>

<pre><code>
Traffic Flow:

Client → Gateway → VirtualService → DestinationRule → Pod (subset)

VirtualService: "WHERE to route" (rules)
DestinationRule: "HOW to route" (policies, subsets)
</code></pre>

<h3 id="11-basic-routing">1.1. Basic Routing</h3>
<pre><code class="language-yaml"># virtualservice-order.yaml:
apiVersion: networking.istio.io/v1
kind: VirtualService
metadata:
  name: order-service
  namespace: default
spec:
  hosts:
    - order-service              # K8s service name
  http:
    - match:
        - headers:
            x-api-version:
              exact: "v2"
      route:
        - destination:
            host: order-service
            subset: v2
            port:
              number: 8080
    - route:                     # Default route
        - destination:
            host: order-service
            subset: v1
            port:
              number: 8080
      timeout: 10s
      retries:
        attempts: 3
        perTryTimeout: 3s
        retryOn: 5xx,reset,connect-failure,refused-stream
</code></pre>

<h3 id="12-canary">1.2. Canary Deployment (Traffic Splitting)</h3>
<pre><code class="language-yaml"># canary-rollout.yaml:
apiVersion: networking.istio.io/v1
kind: VirtualService
metadata:
  name: order-service
  namespace: default
spec:
  hosts:
    - order-service
  http:
    - route:
        - destination:
            host: order-service
            subset: v1
          weight: 90             # 90% → v1 (stable)
        - destination:
            host: order-service
            subset: v2
          weight: 10             # 10% → v2 (canary)

# Gradual rollout:
# Step 1: 90/10 → monitor errors
# Step 2: 70/30 → monitor latency
# Step 3: 50/50 → load test
# Step 4: 0/100 → full rollout
</code></pre>

<h3 id="13-ab-testing">1.3. A/B Testing (Header-Based)</h3>
<pre><code class="language-yaml"># ab-testing.yaml:
apiVersion: networking.istio.io/v1
kind: VirtualService
metadata:
  name: frontend
  namespace: default
spec:
  hosts:
    - frontend
  http:
    # Users with beta cookie → v2:
    - match:
        - headers:
            cookie:
              regex: ".*beta=true.*"
      route:
        - destination:
            host: frontend
            subset: v2
    # Internal team (user-agent header):
    - match:
        - headers:
            x-team:
              exact: "internal"
      route:
        - destination:
            host: frontend
            subset: v2
    # Everyone else → v1:
    - route:
        - destination:
            host: frontend
            subset: v1
</code></pre>

<hr>

<h2 id="phan-2-destinationrule">PHẦN 2: DESTINATIONRULE</h2>

<pre><code class="language-yaml"># destination-rule-order.yaml:
apiVersion: networking.istio.io/v1
kind: DestinationRule
metadata:
  name: order-service
  namespace: default
spec:
  host: order-service
  
  trafficPolicy:
    # Load balancing:
    loadBalancer:
      simple: LEAST_REQUEST     # ROUND_ROBIN | LEAST_REQUEST | RANDOM
    
    # Connection pool:
    connectionPool:
      tcp:
        maxConnections: 100
        connectTimeout: 5s
      http:
        h2UpgradePolicy: DEFAULT
        http1MaxPendingRequests: 100
        http2MaxRequests: 1000
        maxRequestsPerConnection: 10
        maxRetries: 3
    
    # Outlier detection (circuit breaking):
    outlierDetection:
      consecutive5xxErrors: 5
      interval: 10s
      baseEjectionTime: 30s
      maxEjectionPercent: 50
      minHealthPercent: 50

  subsets:
    - name: v1
      labels:
        version: v1
    - name: v2
      labels:
        version: v2
</code></pre>

<hr>

<h2 id="phan-3-circuit-breaking">PHẦN 3: CIRCUIT BREAKING</h2>

<pre><code>
Circuit Breaker States:

  CLOSED ──────────► OPEN ──────────► HALF-OPEN
  (normal)          (reject all)      (test few)
      ▲                                  │
      │          success                 │ 
      └──────────────────────────────────┘
                 (close again)

Istio Outlier Detection:
- consecutive5xxErrors: 5  → 5 errors → eject pod
- interval: 10s            → check every 10s
- baseEjectionTime: 30s   → eject for 30s minimum
- maxEjectionPercent: 50  → max 50% pods ejected
</code></pre>

<pre><code class="language-yaml"># Circuit breaker + connection limits:
apiVersion: networking.istio.io/v1
kind: DestinationRule
metadata:
  name: payment-service
  namespace: default
spec:
  host: payment-service
  trafficPolicy:
    connectionPool:
      tcp:
        maxConnections: 50        # Max concurrent TCP connections
      http:
        http1MaxPendingRequests: 50  # Max queued requests
        http2MaxRequests: 100        # Max concurrent requests
        maxRequestsPerConnection: 5
    outlierDetection:
      consecutive5xxErrors: 3
      interval: 5s
      baseEjectionTime: 60s
      maxEjectionPercent: 100     # Can eject all pods
</code></pre>

<hr>

<h2 id="phan-4-fault-injection">PHẦN 4: FAULT INJECTION (CHAOS TESTING)</h2>

<pre><code class="language-yaml"># Inject delay + abort for testing:
apiVersion: networking.istio.io/v1
kind: VirtualService
metadata:
  name: payment-service
  namespace: default
spec:
  hosts:
    - payment-service
  http:
    - fault:
        delay:
          percentage:
            value: 10.0           # 10% requests get 5s delay
          fixedDelay: 5s
        abort:
          percentage:
            value: 5.0            # 5% requests get HTTP 503
          httpStatus: 503
      route:
        - destination:
            host: payment-service
            subset: v1
</code></pre>

<hr>

<h2 id="phan-5-mirror">PHẦN 5: TRAFFIC MIRRORING (SHADOW TESTING)</h2>

<pre><code class="language-yaml"># Mirror production traffic to new version:
apiVersion: networking.istio.io/v1
kind: VirtualService
metadata:
  name: order-service
  namespace: default
spec:
  hosts:
    - order-service
  http:
    - route:
        - destination:
            host: order-service
            subset: v1
          weight: 100              # 100% traffic to v1
      mirror:
        host: order-service
        subset: v2                 # Mirror copy to v2
      mirrorPercentage:
        value: 100.0               # Mirror 100% traffic
    # → v2 receives copy, responses are discarded
    # → Test v2 with real traffic, zero risk!
</code></pre>

<hr>

<h2 id="phan-6-rate-limiting">PHẦN 6: RATE LIMITING</h2>

<pre><code class="language-yaml"># Rate limiting với Istio (EnvoyFilter):
apiVersion: networking.istio.io/v1alpha3
kind: EnvoyFilter
metadata:
  name: rate-limit-filter
  namespace: istio-system
spec:
  workloadSelector:
    labels:
      istio: ingressgateway
  configPatches:
    - applyTo: HTTP_FILTER
      match:
        context: GATEWAY
        listener:
          filterChain:
            filter:
              name: envoy.filters.network.http_connection_manager
      patch:
        operation: INSERT_BEFORE
        value:
          name: envoy.filters.http.local_ratelimit
          typed_config:
            "@type": type.googleapis.com/udpa.type.v1.TypedStruct
            type_url: type.googleapis.com/envoy.extensions.filters.http.local_ratelimit.v3.LocalRateLimit
            value:
              stat_prefix: http_local_rate_limiter
              token_bucket:
                max_tokens: 100
                tokens_per_fill: 100
                fill_interval: 60s    # 100 requests/minute
              filter_enabled:
                runtime_key: local_rate_limit_enabled
                default_value:
                  numerator: 100
                  denominator: HUNDRED
              filter_enforced:
                runtime_key: local_rate_limit_enforced
                default_value:
                  numerator: 100
                  denominator: HUNDRED
              response_headers_to_add:
                - append_action: OVERWRITE_IF_EXISTS_OR_ADD
                  header:
                    key: x-local-rate-limit
                    value: "true"
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>VirtualService</strong>: Routing rules — WHERE traffic goes</li>
<li><strong>DestinationRule</strong>: Policies — HOW traffic is handled (LB, circuit breaker)</li>
<li><strong>Canary</strong>: weight-based traffic splitting, gradual rollout</li>
<li><strong>Circuit breaker</strong>: outlierDetection ejects unhealthy pods</li>
<li><strong>Fault injection</strong>: Test resilience with delays and errors</li>
<li><strong>Traffic mirroring</strong>: Shadow test new versions with real traffic</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Canary Deployment</h3>
<ul>
<li>Deploy v1 and v2 of a service</li>
<li>Configure 90/10 traffic split</li>
<li>Monitor error rate in Kiali</li>
<li>Gradually shift to 0/100</li>
</ul>

<h3 id="bt2">Bài tập 2: Circuit Breaking</h3>
<ul>
<li>Configure outlier detection (3 errors → eject)</li>
<li>Use Fortio to load test</li>
<li>Observe ejection/recovery in Envoy admin</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 26: Istio Gateway và Ingress cho Production</strong>, chúng ta sẽ cấu hình external access, TLS termination, và multi-domain hosting.</p>
