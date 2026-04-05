---
id: 019e1a00-aa01-7001-c001-k8sha000604
title: 'BÀI 27: ISTIO SECURITY — AUTHORIZATIONPOLICY VÀ REQUESTAUTHENTICATION'
slug: bai-27-istio-security-authorizationpolicy-va-requestauthentication
description: >-
  Cấu hình Istio security: AuthorizationPolicy cho access control,
  RequestAuthentication cho JWT validation, network segmentation,
  và zero-trust security model.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 27
section_title: 'Phần 6: Service Mesh & Ingress với Istio'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9488" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9488)"/>

  <!-- Decorations -->
  <g>
    <circle cx="742" cy="196" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="884" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1026" cy="220" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="668" cy="102" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="810" cy="244" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="216" x2="1100" y2="296" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="246" x2="1050" y2="316" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1042.8467875173176,200.5 1042.8467875173176,231.5 1016,247 989.1532124826824,231.5 989.1532124826824,200.5 1016,185" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — Bài 27</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 27: ISTIO SECURITY —</tspan>
      <tspan x="60" dy="42">AUTHORIZATIONPOLICY VÀ</tspan>
      <tspan x="60" dy="42">REQUESTAUTHENTICATION</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Service Mesh &amp; Ingress với Istio</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ AuthorizationPolicy: ALLOW, DENY, CUSTOM rules</li>
<li>✅ RequestAuthentication: JWT token validation</li>
<li>✅ Network segmentation giữa namespaces</li>
<li>✅ Zero-trust security model</li>
<li>✅ Audit logging cho security events</li>
</ul>

<hr>

<h2 id="phan-1-authorization">PHẦN 1: AUTHORIZATIONPOLICY</h2>

<pre><code>
Istio Authorization Flow:

Request → Envoy Proxy → AuthorizationPolicy check → Allow/Deny

Policy Actions:
- ALLOW: Explicitly permit (whitelist)
- DENY:  Explicitly block (blacklist)
- CUSTOM: Delegate to external authz

Evaluation Order:
1. CUSTOM policies
2. DENY policies (if match → reject)
3. ALLOW policies (if match → allow)
4. No ALLOW policy → allow all (permissive)
5. Has ALLOW policy but no match → DENY
</code></pre>

<h3 id="11-deny-all">1.1. Default Deny All (Zero Trust)</h3>
<pre><code class="language-yaml"># Deny all traffic in namespace:
apiVersion: security.istio.io/v1
kind: AuthorizationPolicy
metadata:
  name: deny-all
  namespace: default
spec:
  {}
  # Empty spec = match all → no ALLOW rules → DENY all
</code></pre>

<h3 id="12-allow-specific">1.2. Allow Specific Services</h3>
<pre><code class="language-yaml"># Allow order-service to call payment-service:
apiVersion: security.istio.io/v1
kind: AuthorizationPolicy
metadata:
  name: allow-order-to-payment
  namespace: default
spec:
  selector:
    matchLabels:
      app: payment-service
  action: ALLOW
  rules:
    - from:
        - source:
            principals:
              - "cluster.local/ns/default/sa/order-service"
      to:
        - operation:
            methods: ["POST"]
            paths: ["/api/v1/payments/*"]
---
# Allow frontend to call API services:
apiVersion: security.istio.io/v1
kind: AuthorizationPolicy
metadata:
  name: allow-frontend-to-api
  namespace: default
spec:
  selector:
    matchLabels:
      app: order-service
  action: ALLOW
  rules:
    - from:
        - source:
            principals:
              - "cluster.local/ns/default/sa/frontend"
      to:
        - operation:
            methods: ["GET", "POST", "PUT"]
            paths: ["/api/v1/*"]
---
# Allow ingress gateway to all services:
apiVersion: security.istio.io/v1
kind: AuthorizationPolicy
metadata:
  name: allow-ingress
  namespace: default
spec:
  action: ALLOW
  rules:
    - from:
        - source:
            namespaces: ["istio-system"]
</code></pre>

<h3 id="13-deny-specific">1.3. Deny Specific Patterns</h3>
<pre><code class="language-yaml"># Block access to admin endpoints from non-admin:
apiVersion: security.istio.io/v1
kind: AuthorizationPolicy
metadata:
  name: deny-admin-access
  namespace: default
spec:
  selector:
    matchLabels:
      app: admin-service
  action: DENY
  rules:
    - from:
        - source:
            notNamespaces: ["admin"]
      to:
        - operation:
            paths: ["/admin/*"]
---
# Block specific IP ranges:
apiVersion: security.istio.io/v1
kind: AuthorizationPolicy
metadata:
  name: deny-external-ips
  namespace: default
spec:
  action: DENY
  rules:
    - from:
        - source:
            ipBlocks: ["10.0.0.0/8"]
            notIpBlocks: ["10.0.1.0/24"]   # Except trusted subnet
</code></pre>

<hr>

<h2 id="phan-2-jwt">PHẦN 2: JWT AUTHENTICATION</h2>

<h3 id="21-request-auth">2.1. RequestAuthentication</h3>
<pre><code class="language-yaml"># Validate JWT tokens:
apiVersion: security.istio.io/v1
kind: RequestAuthentication
metadata:
  name: jwt-auth
  namespace: default
spec:
  selector:
    matchLabels:
      app: order-service
  jwtRules:
    - issuer: "https://auth.myapp.com"
      jwksUri: "https://auth.myapp.com/.well-known/jwks.json"
      audiences:
        - "api.myapp.com"
      forwardOriginalToken: true
      outputPayloadToHeader: x-jwt-payload
---
# Require valid JWT:
apiVersion: security.istio.io/v1
kind: AuthorizationPolicy
metadata:
  name: require-jwt
  namespace: default
spec:
  selector:
    matchLabels:
      app: order-service
  action: ALLOW
  rules:
    - from:
        - source:
            requestPrincipals: ["https://auth.myapp.com/*"]
      when:
        - key: request.auth.claims[role]
          values: ["user", "admin"]
</code></pre>

<h3 id="22-role-based">2.2. Role-Based Access (JWT Claims)</h3>
<pre><code class="language-yaml"># Admin-only endpoints:
apiVersion: security.istio.io/v1
kind: AuthorizationPolicy
metadata:
  name: admin-only
  namespace: default
spec:
  selector:
    matchLabels:
      app: admin-service
  action: ALLOW
  rules:
    - from:
        - source:
            requestPrincipals: ["https://auth.myapp.com/*"]
      to:
        - operation:
            paths: ["/admin/*"]
      when:
        - key: request.auth.claims[role]
          values: ["admin"]
---
# Read-only for viewers:
apiVersion: security.istio.io/v1
kind: AuthorizationPolicy
metadata:
  name: viewer-read-only
  namespace: default
spec:
  selector:
    matchLabels:
      app: order-service
  action: ALLOW
  rules:
    - from:
        - source:
            requestPrincipals: ["https://auth.myapp.com/*"]
      to:
        - operation:
            methods: ["GET"]
      when:
        - key: request.auth.claims[role]
          values: ["viewer"]
</code></pre>

<hr>

<h2 id="phan-3-namespace-segmentation">PHẦN 3: NAMESPACE SEGMENTATION</h2>

<pre><code class="language-yaml"># Isolate namespaces:
# default  ←→  messaging  (allowed)
# default  ←→  database   (allowed)
# default  ←X→ monitoring (blocked)

# Allow default → messaging:
apiVersion: security.istio.io/v1
kind: AuthorizationPolicy
metadata:
  name: allow-from-default
  namespace: messaging
spec:
  action: ALLOW
  rules:
    - from:
        - source:
            namespaces: ["default"]

# Allow default → database:
apiVersion: security.istio.io/v1
kind: AuthorizationPolicy
metadata:
  name: allow-from-default
  namespace: database
spec:
  action: ALLOW
  rules:
    - from:
        - source:
            namespaces: ["default"]
    - from:
        - source:
            namespaces: ["monitoring"]
      to:
        - operation:
            methods: ["GET"]
            paths: ["/metrics"]
</code></pre>

<hr>

<h2 id="phan-4-audit">PHẦN 4: SECURITY AUDIT LOGGING</h2>

<pre><code class="language-yaml"># Enable access logging:
apiVersion: telemetry.istio.io/v1
kind: Telemetry
metadata:
  name: access-logging
  namespace: istio-system
spec:
  accessLogging:
    - providers:
        - name: envoy
      filter:
        expression: "response.code >= 400 || connection.mtls == false"
</code></pre>

<pre><code class="language-bash"># View access logs:
kubectl -n default logs order-service-xxx -c istio-proxy | \
  jq 'select(.response_code >= 400)'

# Check mTLS status:
istioctl authn tls-check order-service-xxx.default

# Analyze authorization denials:
kubectl -n default logs order-service-xxx -c istio-proxy | \
  grep "rbac_access_denied"
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Zero Trust</strong>: Start with deny-all, explicitly allow needed paths</li>
<li><strong>AuthorizationPolicy</strong>: Service-to-service access control (who can call whom)</li>
<li><strong>RequestAuthentication</strong>: JWT validation at ingress (end-user auth)</li>
<li><strong>mTLS + AuthZ</strong>: Combined = strong identity-based security</li>
<li><strong>Namespace segmentation</strong>: Isolate blast radius of compromised services</li>
<li><strong>Audit</strong>: Log denied requests, mTLS failures for security monitoring</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Zero Trust Lab</h3>
<ul>
<li>Apply deny-all to default namespace</li>
<li>Create ALLOW policies for specific service paths</li>
<li>Test: unauthorized service call → RBAC denied</li>
</ul>

<h3 id="bt2">Bài tập 2: JWT Auth Lab</h3>
<ul>
<li>Configure RequestAuthentication with Keycloak</li>
<li>Create role-based AuthorizationPolicy</li>
<li>Test admin vs viewer access</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 28: GitOps với ArgoCD — Kiến trúc và Cài đặt</strong>, chúng ta sẽ chuyển sang GitOps workflow cho continuous deployment.</p>
