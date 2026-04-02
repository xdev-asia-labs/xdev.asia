---
id: 019e1a00-aa01-7001-c001-k8sha000603
title: 'BÀI 26: ISTIO GATEWAY VÀ INGRESS CHO PRODUCTION'
slug: bai-26-istio-gateway-va-ingress-cho-production
description: >-
  Cấu hình Istio Gateway cho external access, TLS termination với cert-manager,
  multi-domain hosting, CORS, WebSocket support, và Kubernetes Gateway API.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 26
section_title: 'Phần 6: Service Mesh & Ingress với Istio'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Cấu hình Istio Gateway cho external traffic</li>
<li>✅ TLS termination với cert-manager (Let's Encrypt)</li>
<li>✅ Multi-domain hosting</li>
<li>✅ CORS, WebSocket, gRPC support</li>
<li>✅ Kubernetes Gateway API (tương lai)</li>
</ul>

<hr>

<h2 id="phan-1-gateway">PHẦN 1: ISTIO GATEWAY</h2>

<pre><code>
External Traffic Flow:

                   ┌──────────────┐
Internet ──────►   │  MetalLB     │
                   │  LoadBalancer │
                   └──────┬───────┘
                          │
                   ┌──────▼───────┐
                   │  Istio       │
                   │  Ingress     │
                   │  Gateway     │  ← Gateway CRD
                   └──────┬───────┘
                          │
              ┌───────────┼───────────┐
              │           │           │
       ┌──────▼──┐ ┌──────▼──┐ ┌─────▼───┐
       │  api.   │ │  web.   │ │ admin.  │
       │  app.com│ │ app.com │ │ app.com │
       └─────────┘ └─────────┘ └─────────┘
         (VirtualService routing per host)
</code></pre>

<h3 id="11-basic-gateway">1.1. Basic Gateway</h3>
<pre><code class="language-yaml"># gateway.yaml:
apiVersion: networking.istio.io/v1
kind: Gateway
metadata:
  name: main-gateway
  namespace: istio-system
spec:
  selector:
    istio: ingressgateway        # Matches Istio ingress gateway pods
  servers:
    # HTTPS (port 443):
    - port:
        number: 443
        name: https
        protocol: HTTPS
      tls:
        mode: SIMPLE
        credentialName: main-tls-cert  # K8s Secret (cert-manager)
      hosts:
        - "api.myapp.com"
        - "web.myapp.com"
        - "admin.myapp.com"
    
    # HTTP → HTTPS redirect:
    - port:
        number: 80
        name: http
        protocol: HTTP
      tls:
        httpsRedirect: true
      hosts:
        - "api.myapp.com"
        - "web.myapp.com"
        - "admin.myapp.com"
</code></pre>

<h3 id="12-virtualservice-gateway">1.2. VirtualService cho Gateway</h3>
<pre><code class="language-yaml"># vs-api.yaml:
apiVersion: networking.istio.io/v1
kind: VirtualService
metadata:
  name: api-routes
  namespace: default
spec:
  hosts:
    - "api.myapp.com"
  gateways:
    - istio-system/main-gateway
  http:
    - match:
        - uri:
            prefix: /api/v1/orders
      route:
        - destination:
            host: order-service
            port:
              number: 8080
      corsPolicy:
        allowOrigins:
          - exact: "https://web.myapp.com"
        allowMethods:
          - GET
          - POST
          - PUT
          - DELETE
        allowHeaders:
          - Authorization
          - Content-Type
        maxAge: "24h"
    
    - match:
        - uri:
            prefix: /api/v1/payments
      route:
        - destination:
            host: payment-service
            port:
              number: 8080
    
    - match:
        - uri:
            prefix: /api/v1/users
      route:
        - destination:
            host: user-service
            port:
              number: 8080
---
# vs-web.yaml:
apiVersion: networking.istio.io/v1
kind: VirtualService
metadata:
  name: web-routes
  namespace: default
spec:
  hosts:
    - "web.myapp.com"
  gateways:
    - istio-system/main-gateway
  http:
    - route:
        - destination:
            host: frontend
            port:
              number: 3000
</code></pre>

<hr>

<h2 id="phan-2-tls">PHẦN 2: TLS VỚI CERT-MANAGER</h2>

<h3 id="21-cert-manager">2.1. Install cert-manager</h3>
<pre><code class="language-bash"># Install cert-manager:
helm repo add jetstack https://charts.jetstack.io
helm repo update

helm install cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --set crds.enabled=true \
  --set prometheus.enabled=true
</code></pre>

<h3 id="22-issuer">2.2. ClusterIssuer (Let's Encrypt)</h3>
<pre><code class="language-yaml"># cluster-issuer.yaml:
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: admin@myapp.com
    privateKeySecretRef:
      name: letsencrypt-prod-key
    solvers:
      - http01:
          ingress:
            class: istio
---
# Self-signed CA (for internal services):
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: cluster-ca-issuer
spec:
  selfSigned: {}
</code></pre>

<h3 id="23-certificate">2.3. Certificate cho Gateway</h3>
<pre><code class="language-yaml"># certificate.yaml:
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: main-tls-cert
  namespace: istio-system           # Same namespace as Gateway
spec:
  secretName: main-tls-cert         # Referenced in Gateway credentialName
  issuerRef:
    name: letsencrypt-prod
    kind: ClusterIssuer
  commonName: myapp.com
  dnsNames:
    - "api.myapp.com"
    - "web.myapp.com"
    - "admin.myapp.com"
    - "*.myapp.com"                  # Wildcard
  duration: 2160h                    # 90 days
  renewBefore: 360h                  # Renew 15 days before expiry
</code></pre>

<pre><code class="language-bash"># Verify certificate:
kubectl -n istio-system get certificate
# NAME            READY   SECRET           AGE
# main-tls-cert   True    main-tls-cert    5m

kubectl -n istio-system describe certificate main-tls-cert
# Status: True
# Not After: 2024-xx-xx
</code></pre>

<hr>

<h2 id="phan-3-websocket-grpc">PHẦN 3: WEBSOCKET & gRPC</h2>

<h3 id="31-websocket">3.1. WebSocket Support</h3>
<pre><code class="language-yaml"># WebSocket qua Istio Gateway:
apiVersion: networking.istio.io/v1
kind: VirtualService
metadata:
  name: websocket-routes
  namespace: default
spec:
  hosts:
    - "ws.myapp.com"
  gateways:
    - istio-system/main-gateway
  http:
    - match:
        - uri:
            prefix: /ws
          headers:
            upgrade:
              exact: websocket
      route:
        - destination:
            host: notification-service
            port:
              number: 8080
      timeout: 0s                    # No timeout for WebSocket
</code></pre>

<h3 id="32-grpc">3.2. gRPC Support</h3>
<pre><code class="language-yaml"># gRPC routing:
apiVersion: networking.istio.io/v1
kind: Gateway
metadata:
  name: grpc-gateway
  namespace: istio-system
spec:
  selector:
    istio: ingressgateway
  servers:
    - port:
        number: 443
        name: grpc-tls
        protocol: HTTPS
      tls:
        mode: SIMPLE
        credentialName: grpc-tls-cert
      hosts:
        - "grpc.myapp.com"
---
apiVersion: networking.istio.io/v1
kind: VirtualService
metadata:
  name: grpc-routes
spec:
  hosts:
    - "grpc.myapp.com"
  gateways:
    - istio-system/grpc-gateway
  http:
    - match:
        - uri:
            prefix: /order.OrderService
      route:
        - destination:
            host: order-grpc-service
            port:
              number: 50051
</code></pre>

<hr>

<h2 id="phan-4-gateway-api">PHẦN 4: KUBERNETES GATEWAY API (TƯƠNG LAI)</h2>

<pre><code class="language-yaml"># Gateway API (replacing Ingress & Istio Gateway):
# More standardized, portable across mesh implementations

apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: main-gateway
  namespace: default
spec:
  gatewayClassName: istio           # Istio implementation
  listeners:
    - name: https
      port: 443
      protocol: HTTPS
      tls:
        mode: Terminate
        certificateRefs:
          - name: main-tls-cert
      allowedRoutes:
        namespaces:
          from: All
---
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: api-routes
spec:
  parentRefs:
    - name: main-gateway
  hostnames:
    - "api.myapp.com"
  rules:
    - matches:
        - path:
            type: PathPrefix
            value: /api/v1/orders
      backendRefs:
        - name: order-service
          port: 8080
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Gateway</strong>: Entry point cho external traffic, TLS termination</li>
<li><strong>VirtualService</strong>: Route traffic từ Gateway → backend services</li>
<li><strong>cert-manager</strong>: Auto-provision & renew TLS certificates</li>
<li><strong>Multi-domain</strong>: Single Gateway, multiple VirtualServices</li>
<li><strong>Gateway API</strong>: Future standard, replacing both Ingress and Istio Gateway</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Production Gateway</h3>
<ul>
<li>Configure Gateway with TLS (cert-manager)</li>
<li>Route 3 domains to different services</li>
<li>Test HTTPS redirect</li>
</ul>

<h3 id="bt2">Bài tập 2: CORS & Security Headers</h3>
<ul>
<li>Configure CORS policy cho API</li>
<li>Add security headers (HSTS, CSP, X-Frame-Options)</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 27: Istio Security — AuthorizationPolicy và RequestAuthentication</strong>, chúng ta sẽ cấu hình security policies, JWT validation, và network segmentation.</p>
