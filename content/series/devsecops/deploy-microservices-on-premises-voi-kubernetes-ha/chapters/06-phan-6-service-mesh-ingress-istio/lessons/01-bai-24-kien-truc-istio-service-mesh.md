---
id: 019e1a00-aa01-7001-c001-k8sha000601
title: 'BÀI 24: KIẾN TRÚC ISTIO SERVICE MESH'
slug: bai-24-kien-truc-istio-service-mesh
description: >-
  Hiểu kiến trúc Istio service mesh: data plane (Envoy sidecar),
  control plane (istiod), traffic management, security (mTLS),
  observability, và so sánh với Linkerd.
duration_minutes: 150
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai24-istio-service-mesh.png
sort_order: 24
section_title: 'Phần 6: Service Mesh & Ingress với Istio'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6058" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6058)"/>

  <!-- Decorations -->
  <g>
    <circle cx="857" cy="281" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="614" cy="278" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="871" cy="275" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="628" cy="272" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="885" cy="269" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="111" x2="1100" y2="191" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="141" x2="1050" y2="211" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="983.5166604983954,148 983.5166604983954,174 961,187 938.4833395016046,174 938.4833395016046,148 961,135" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — Bài 24</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 24: KIẾN TRÚC ISTIO SERVICE MESH</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Service Mesh &amp; Ingress với Istio</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Hiểu service mesh là gì và tại sao cần</li>
<li>✅ Kiến trúc Istio: Control Plane + Data Plane</li>
<li>✅ Envoy sidecar proxy — cách thức hoạt động</li>
<li>✅ Core features: traffic management, security, observability</li>
<li>✅ So sánh Istio vs Linkerd vs Cilium Service Mesh</li>
<li>✅ Install Istio trên K8s cluster</li>
</ul>

<hr>

<h2 id="phan-1-service-mesh">PHẦN 1: SERVICE MESH LÀ GÌ?</h2>

<pre><code class="language-mermaid">
graph LR
    subgraph WITHOUT["❌ WITHOUT Service Mesh"]
        A1["Service A<br/>Retry? Timeout?"] -->|"Direct call<br/>no encryption<br/>no retry<br/>no tracing"| B1["Service B<br/>No auth? No limit?"]
    end

    subgraph WITH["✅ WITH Service Mesh — Istio"]
        A2["Service A<br/>business logic"] --> EA["🔷 Envoy Sidecar<br/>• Retry<br/>• Timeout<br/>• Tracing"]
        EA -->|"mTLS auto"| EB["🔷 Envoy Sidecar<br/>• Auth<br/>• RateLimit<br/>• Metrics"]
        EB --> B2["Service B<br/>business logic"]
        CP["istiod<br/>Control Plane"] -.->|"Config push"| EA & EB
    end

    style WITHOUT fill:#450a0a,stroke:#dc2626,color:#fca5a5
    style WITH fill:#052e16,stroke:#22c55e,color:#bbf7d0
    style EA fill:#1d4ed8,stroke:#60a5fa,color:#fff
    style EB fill:#1d4ed8,stroke:#60a5fa,color:#fff
    style CP fill:#7c3aed,stroke:#a78bfa,color:#fff
</code></pre>

<h3 id="11-why-mesh">1.1. Khi nào cần Service Mesh?</h3>
<ul>
<li>✅ > 10 microservices communicating</li>
<li>✅ Cần mTLS (zero-trust network)</li>
<li>✅ Complex traffic routing (canary, A/B)</li>
<li>✅ Distributed tracing & observability</li>
<li>✅ Rate limiting, circuit breaking consistent</li>
<li>❌ Overhead không cần cho monolith hoặc < 5 services</li>
</ul>

<hr>

<h2 id="phan-2-kien-truc-istio">PHẦN 2: KIẾN TRÚC ISTIO</h2>

<pre><code class="language-mermaid">
graph TB
    subgraph CONTROL["🧠 CONTROL PLANE"]
        subgraph ISTIOD["istiod — Unified Binary"]
            Pilot["Pilot<br/>Traffic config"]
            Citadel["Citadel<br/>mTLS certs"]
            Galley["Galley<br/>Config validation"]
        end
    end

    subgraph DATA["📡 DATA PLANE"]
        subgraph PodA["Pod A"]
            AppA["App A"]
            EnvA["🔷 Envoy Sidecar"]
            AppA --> EnvA
        end
        subgraph PodB["Pod B"]
            AppB["App B"]
            EnvB["🔷 Envoy Sidecar"]
            AppB --> EnvB
        end
        subgraph PodC["Pod C"]
            AppC["App C"]
            EnvC["🔷 Envoy Sidecar"]
            AppC --> EnvC
        end
    end

    ISTIOD -->|"xDS API<br/>push config"| EnvA & EnvB & EnvC
    EnvA <-->|"mTLS"| EnvB
    EnvB <-->|"mTLS"| EnvC
    EnvA <-->|"mTLS"| EnvC

    style CONTROL fill:#4c1d95,stroke:#8b5cf6,color:#e2e8f0
    style ISTIOD fill:#5b21b6,stroke:#a78bfa,color:#fff
    style EnvA fill:#1d4ed8,stroke:#60a5fa,color:#fff
    style EnvB fill:#1d4ed8,stroke:#60a5fa,color:#fff
    style EnvC fill:#1d4ed8,stroke:#60a5fa,color:#fff
</code></pre>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Component</th><th>Role</th><th>Details</th></tr>
</thead>
<tbody>
<tr><td>istiod</td><td>Control Plane</td><td>Single binary: Pilot + Citadel + Galley</td></tr>
<tr><td>Envoy</td><td>Sidecar Proxy</td><td>L4/L7 proxy, injected into every pod</td></tr>
<tr><td>Pilot</td><td>Traffic Management</td><td>Converts routing rules → Envoy xDS config</td></tr>
<tr><td>Citadel</td><td>Security</td><td>Certificate authority, mTLS cert rotation</td></tr>
<tr><td>Galley</td><td>Configuration</td><td>Validates & distributes Istio config</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Feature</th><th>Istio</th><th>Linkerd</th><th>Cilium SM</th></tr>
</thead>
<tbody>
<tr><td>Proxy</td><td>Envoy (C++)</td><td>linkerd2-proxy (Rust)</td><td>eBPF (kernel)</td></tr>
<tr><td>Resource Usage</td><td>Medium-High</td><td>Low</td><td>Lowest</td></tr>
<tr><td>Features</td><td>Most complete</td><td>Essential features</td><td>Growing</td></tr>
<tr><td>Learning Curve</td><td>Steep</td><td>Moderate</td><td>Low-Moderate</td></tr>
<tr><td>mTLS</td><td>Yes (auto)</td><td>Yes (auto)</td><td>Yes (WireGuard)</td></tr>
<tr><td>Traffic Mgmt</td><td>Advanced</td><td>Basic</td><td>Basic</td></tr>
<tr><td>Multi-cluster</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
<tr><td>WASM Extensions</td><td>Yes</td><td>No</td><td>No</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-3-install-istio">PHẦN 3: CÀI ĐẶT ISTIO</h2>

<h3 id="31-istioctl">3.1. Install istioctl</h3>
<pre><code class="language-bash"># Download istioctl:
curl -L https://istio.io/downloadIstio | ISTIO_VERSION=1.22.0 sh -
cd istio-1.22.0
export PATH=$PWD/bin:$PATH

# Verify:
istioctl version
# client version: 1.22.0
</code></pre>

<h3 id="32-install-profile">3.2. Install Istio (Production Profile)</h3>
<pre><code class="language-yaml"># istio-config.yaml:
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
metadata:
  name: production-istio
spec:
  profile: default
  
  meshConfig:
    accessLogFile: /dev/stdout
    accessLogEncoding: JSON
    enableTracing: true
    defaultConfig:
      tracing:
        sampling: 100.0
      holdApplicationUntilProxyStarts: true
    
    # Outbound traffic policy:
    outboundTrafficPolicy:
      mode: REGISTRY_ONLY    # Only allow registered services
    
    # Enable strict mTLS:
    # (configured via PeerAuthentication below)

  components:
    pilot:
      k8s:
        resources:
          requests:
            cpu: 500m
            memory: 512Mi
          limits:
            cpu: "2"
            memory: 2Gi
        replicas: 2          # HA istiod
        hpaSpec:
          maxReplicas: 3
          minReplicas: 2

    ingressGateways:
      - name: istio-ingressgateway
        enabled: true
        k8s:
          resources:
            requests:
              cpu: 200m
              memory: 256Mi
          service:
            type: LoadBalancer
          hpaSpec:
            maxReplicas: 5
            minReplicas: 2

  values:
    global:
      proxy:
        resources:
          requests:
            cpu: 50m
            memory: 64Mi
          limits:
            cpu: 500m
            memory: 256Mi
    pilot:
      traceSampling: 100.0
</code></pre>

<pre><code class="language-bash"># Install:
istioctl install -f istio-config.yaml -y

# Verify:
kubectl -n istio-system get pods
# NAME                                    READY   STATUS
# istiod-xxx                              1/1     Running
# istiod-xxx                              1/1     Running  (HA replica)
# istio-ingressgateway-xxx                1/1     Running
# istio-ingressgateway-xxx                1/1     Running

# Enable sidecar injection cho namespaces:
kubectl label namespace default istio-injection=enabled
kubectl label namespace messaging istio-injection=enabled

# Verify injection:
kubectl get namespace -L istio-injection
# default     Active   istio-injection=enabled
# messaging   Active   istio-injection=enabled
</code></pre>

<hr>

<h2 id="phan-4-mtls">PHẦN 4: mTLS (MUTUAL TLS)</h2>

<pre><code class="language-yaml"># Strict mTLS cho toàn mesh:
apiVersion: security.istio.io/v1
kind: PeerAuthentication
metadata:
  name: default
  namespace: istio-system    # Mesh-wide
spec:
  mtls:
    mode: STRICT             # All traffic must be mTLS
---
# Exclude specific namespace (legacy apps):
apiVersion: security.istio.io/v1
kind: PeerAuthentication
metadata:
  name: legacy-permissive
  namespace: legacy
spec:
  mtls:
    mode: PERMISSIVE         # Accept both plain + mTLS
</code></pre>

<pre><code class="language-bash"># Verify mTLS:
istioctl x describe pod order-service-xxx.default
# Service: order-service.default
# mTLS: STRICT
# Certificates:
#   Certificate chain: valid
#   Server certificate: valid

# Check certificate:
istioctl proxy-config secret order-service-xxx.default
# RESOURCE NAME     TYPE     STATUS   VALID CERT   SERIAL NUMBER
# default           Cert     ACTIVE   true         xxx
# ROOTCA            CA       ACTIVE   true         xxx
</code></pre>

<hr>

<h2 id="phan-5-sidecar-injection">PHẦN 5: SIDECAR INJECTION</h2>

<pre><code class="language-bash"># Automatic injection (namespace label):
kubectl label namespace default istio-injection=enabled

# Manual injection (specific deployment):
kubectl apply -f <(istioctl kube-inject -f deployment.yaml)

# Verify sidecar:
kubectl get pods -n default
# order-service-xxx   2/2   Running   ← 2 containers = app + envoy

# Check Envoy config:
istioctl proxy-config clusters order-service-xxx.default
istioctl proxy-config routes order-service-xxx.default
istioctl proxy-config listeners order-service-xxx.default

# Envoy dashboard:
istioctl dashboard envoy order-service-xxx.default
</code></pre>

<hr>

<h2 id="phan-6-addons">PHẦN 6: OBSERVABILITY ADD-ONS</h2>

<pre><code class="language-bash"># Install Kiali (service mesh dashboard):
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.22/samples/addons/kiali.yaml

# Install Jaeger (distributed tracing):
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.22/samples/addons/jaeger.yaml

# Access:
istioctl dashboard kiali
istioctl dashboard jaeger

# Kiali shows:
# - Service topology graph (real-time)
# - Traffic flow between services
# - Error rates, latency
# - mTLS status
# - Istio configuration validation
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Service Mesh</strong>: Infrastructure layer for service-to-service communication</li>
<li><strong>Istio</strong>: Most feature-rich mesh, Envoy sidecar proxy</li>
<li><strong>istiod</strong>: Single control plane binary (Pilot + Citadel + Galley)</li>
<li><strong>mTLS STRICT</strong>: Zero-trust, all traffic encrypted automatically</li>
<li><strong>Sidecar injection</strong>: Label namespace, auto-inject Envoy</li>
<li><strong>Kiali</strong>: Visual service topology, essential for understanding mesh</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Install Istio</h3>
<ul>
<li>Install Istio with production profile</li>
<li>Enable sidecar injection on default namespace</li>
<li>Deploy sample Bookinfo app</li>
<li>Verify mTLS between services</li>
</ul>

<h3 id="bt2">Bài tập 2: Kiali & Jaeger</h3>
<ul>
<li>Install Kiali, explore service graph</li>
<li>Generate traffic, view traces in Jaeger</li>
<li>Identify slowest service in request chain</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 25: Istio Traffic Management — VirtualService, DestinationRule</strong>, chúng ta sẽ cấu hình traffic routing, canary deployment, và circuit breaking.</p>
