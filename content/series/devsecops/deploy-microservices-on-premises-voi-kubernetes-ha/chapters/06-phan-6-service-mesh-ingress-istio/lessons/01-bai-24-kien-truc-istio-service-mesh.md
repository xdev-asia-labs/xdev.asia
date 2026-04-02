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
sort_order: 24
section_title: 'Phần 6: Service Mesh & Ingress với Istio'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

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

<pre><code>
Microservices WITHOUT Service Mesh:
┌─────────┐    Direct call     ┌─────────┐
│Service A │──────────────────►│Service B │
│          │  (no encryption)  │          │
│ Retry?   │  (no retry)       │ No auth? │
│ Timeout? │  (no tracing)     │ No limit?│
└─────────┘                    └─────────┘
⚠️ Mỗi service tự implement: retry, circuit breaker, TLS, auth, tracing

Microservices WITH Service Mesh (Istio):
┌─────────┐ ┌───────┐    mTLS    ┌───────┐ ┌─────────┐
│Service A │►│ Envoy │───────────►│ Envoy │►│Service B │
│(business │ │Sidecar│  (auto)   │Sidecar│ │(business │
│ logic)   │ │       │           │       │ │  logic)  │
└─────────┘ │• Retry │           │• Auth  │ └─────────┘
            │• Timeout│          │• RateLimit│
            │• Tracing│          │• Metrics │
            └───────┘            └───────┘
                    ▲                ▲
                    │    Control     │
                    └──── Plane ─────┘
                         (istiod)
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

<pre><code>
Istio Architecture (v1.22+):

┌────────────────────────────────────────────────────┐
│                  CONTROL PLANE                      │
│                                                     │
│  ┌─────────────────────────────────────────┐       │
│  │               istiod                     │       │
│  │  ┌─────────┐ ┌────────┐ ┌───────────┐  │       │
│  │  │  Pilot  │ │ Citadel│ │  Galley   │  │       │
│  │  │(Traffic │ │ (mTLS  │ │ (Config   │  │       │
│  │  │ config) │ │  certs)│ │ validation│  │       │
│  │  └─────────┘ └────────┘ └───────────┘  │       │
│  └──────────────────┬──────────────────────┘       │
│                     │ xDS API (push config)         │
└─────────────────────┼──────────────────────────────┘
                      │
┌─────────────────────▼──────────────────────────────┐
│                  DATA PLANE                          │
│                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │  Pod A   │  │  Pod B   │  │  Pod C   │          │
│  │┌────────┐│  │┌────────┐│  │┌────────┐│          │
│  ││ App    ││  ││ App    ││  ││ App    ││          │
│  │└───┬────┘│  │└───┬────┘│  │└───┬────┘│          │
│  │    │     │  │    │     │  │    │     │          │
│  │┌───▼────┐│  │┌───▼────┐│  │┌───▼────┐│          │
│  ││ Envoy  ││  ││ Envoy  ││  ││ Envoy  ││          │
│  ││Sidecar ││◄►││Sidecar ││◄►││Sidecar ││          │
│  │└────────┘│  │└────────┘│  │└────────┘│          │
│  └──────────┘  └──────────┘  └──────────┘          │
└─────────────────────────────────────────────────────┘
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
