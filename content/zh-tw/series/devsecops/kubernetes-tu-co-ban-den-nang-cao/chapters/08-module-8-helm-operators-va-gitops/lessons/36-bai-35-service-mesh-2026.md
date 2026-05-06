---
id: 019c9618-0603-7000-8000-c1147ba22e16
title: 第 35 課：服務網格 2026 — CILIUM、ISTIO、LINKERD
slug: bai-35-service-mesh-2026-cilium-istio-linkerd
description: >-
  Service Mesh 2026：Cilium Service Mesh sidecarless eBPF（開銷減少 40-60%）、Istio
  1.24+ 環境模式、Linkerd 基於 Rust 的微代理。 mTLS、流量管理、可觀察性。比較以及何時選擇什麼。
duration_minutes: 95
is_free: false
video_url: null
sort_order: 35
section_title: 模組 8：Helm、操作員和 GitOps
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1387" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1387)"/>

  <!-- Decorations -->
  <g>
    <circle cx="671" cy="143" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="742" cy="94" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="813" cy="45" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="884" cy="256" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="955" cy="207" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="233" x2="1100" y2="313" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="263" x2="1050" y2="333" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.2487113059642,219 1057.2487113059642,247 1033,261 1008.7512886940357,247 1008.7512886940357,219 1033,205" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — 第 35 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 35 課：服務網格 2026 — CILIUM、ISTIO、</tspan>
      <tspan x="60" dy="42">LINKERD</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 8: Helm, Operators &amp; GitOps</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標</h2><p>了解為什麼需要 Service Mesh，比較 2026 年的 3 種熱門實作（Cilium Sidecarless、Istio Ambient、Linkerd），並了解何時針對特定用例選擇什麼。</p>

<h2>1. 為什麼需要Service Mesh？</h2>
<p>微服務帶來了許多挑戰：</p>
<ul>
  <li><strong>傳輸層安全協定</strong>：加密服務之間的流量，驗證身份</li>
  <li><strong>交通管理</strong>：金絲雀、熔斷、重試、超時</li>
  <li><strong>可觀察性</strong>：分散式跟踪，每個服務到服務的指標</li>
  <li><strong>負載平衡</strong>：L7負載平衡比kube-proxy更智能</li>
</ul>
<p>Service Mesh 在基礎設施層級實現了這些功能——應用程式程式碼不需要更改。</p>

<h2>2. Sidecar 與 Sidecarless 架構</h2>
<p>傳統 Service Mesh（Istio sidecar 模式）將 Envoy 代理程式註入到每個 Pod 中：</p>
<pre><code class="language-bash">Pod: [app container] + [Envoy sidecar proxy]
# Tất cả traffic đi qua Envoy → overhead về latency và resource
# Overhead: ~50MB memory/pod + ~2ms latency thêm
</code></pre>
<p>Sidecarless 方法（Cilium、Istio Ambient）：位於 Pod 外部、節點層級或核心層級的代理程式。</p>

<h2>3.Cilium服務網格——Sidecarless eBPF</h2>
<p>Cilium 實作服務網格 <strong>在核心級別使用 eBPF</strong> — Pod 中不需要 sidecar 代理。</p>
<p><strong>優點</strong>:</p>
<ul>
  <li>與 Istio sidecar 相比，網路開銷減少 40-60%</li>
  <li>最低延遲（核心空間處理）</li>
  <li>無需注入sidecar→更簡單，更容易升級</li>
  <li>與 Cilium CNI 的本機整合（網路 + 策略 + 網格的一個堆疊）</li>
  <li>哈伯：L7可觀測性已集成</li>
</ul>
<p><strong>缺點</strong>:</p>
<ul>
  <li>功能比完整的 Istio 少（無故障注入、進階流量管理）</li>
  <li>請求 Cilium 作為 CNI</li>
</ul>
<pre><code class="language-bash"># Enable Cilium Service Mesh
helm upgrade cilium cilium/cilium \
  --namespace kube-system \
  --reuse-values \
  --set ingressController.enabled=true \
  --set ingressController.loadbalancerMode=shared

# mTLS: enable mutual authentication
kubectl annotate namespace production \
  "service.cilium.io/global=true"

# Verify mTLS với Hubble
hubble observe --namespace production --protocol tcp --verdict FORWARDED
</code></pre>

<h2>4. Istio 環境模式 — 穩定 Istio 1.24+</h2>
<p>Istio Ambient 模式（從 Istio 1.24+ 開始穩定）是一種不使用 sidecar 的替代方案。</p>
<p><strong>大樓</strong>:</p>
<ul>
  <li><strong>z隧道</strong>：每節點 L4 代理、mTLS 處理和所有工作負載的基本路由</li>
  <li><strong>航點代理</strong>：每個工作負載 L7 代理，可選 — 僅在需要 L7 功能時部署</li>
</ul>
<pre><code class="language-bash">Node:
├── ztunnel (L4: mTLS, basic routing) ← tất cả workloads đi qua
│
Namespace "production":
├── app-a pod       → cần mTLS? → ztunnel handles it
├── app-b pod       → cần canary L7? → ztunnel + waypoint proxy
└── waypoint proxy  → L7: HTTP routing, header manipulation, metrics
</code></pre>
<pre><code class="language-bash"># Cài Istio Ambient
istioctl install --set profile=ambient

# Enable ambient cho namespace
kubectl label namespace production istio.io/dataplane-mode=ambient

# Deploy waypoint cho L7 features
istioctl waypoint apply --namespace production --enroll-namespace

# Verify
istioctl experimental waypoint status -n production
</code></pre>
<p><strong>Istio Ambient 的優勢</strong>：與 Sidecar 模式相比，資源減少約 40%。需要時提供完整的 Istio 功能（路點）。與 Istio 生態系統相容。</p>

<h2>5. Linkerd — Rust 微代理</h2>
<p>使用Linkerd <strong>linkederd2-代理</strong> 用 Rust 編寫——最小、最快的服務與 sidecar 結合。</p>
<ul>
  <li>Sidecar 但非常輕：〜10MB 內存/代理（與 Envoy 〜50MB 相比）</li>
  <li>Rust：記憶體安全、零成本抽象、超快</li>
  <li>自動 mTLS 無需配置</li>
  <li>HTTP/1.1、HTTP/2、gRPC 支持</li>
  <li>簡單的重試與超時</li>
  <li>服務設定檔：每條路由的指標和重試</li>
</ul>
<pre><code class="language-bash"># Cài Linkerd
curl --proto '=https' --tlsv1.2 -sSfL https://run.linkerd.io/install | sh
linkerd install --crds | kubectl apply -f -
linkerd install | kubectl apply -f -

# Inject sidecar
kubectl annotate namespace production linkerd.io/inject=enabled

# Verify
linkerd check
linkerd viz install | kubectl apply -f -
linkerd viz dashboard   # mở browser
</code></pre>
<p><strong>Linkerd vs Cilium vs Istio</strong>：當您想要最輕、最簡單的邊車模型時，Linkerd 適合您。</p>

<h2>6. 比較服務網格 2026</h2>
<pre><code class="language-bash">Feature              Cilium Mesh    Istio Ambient    Linkerd
───────────────────────────────────────────────────────────────
Architecture         Sidecarless    Sidecarless*     Sidecar (Rust)
Memory overhead/pod  ~0             ~0**             ~10MB
mTLS                 ✅            ✅               ✅
L7 traffic mgmt      Limited        ✅ (waypoint)    Limited
Circuit breaking     ❌            ✅               ❌
Fault injection      ❌            ✅               ❌
Observability        ✅ (Hubble)   ✅               ✅
Gateway API          ✅ Native     ✅               ✅
Multi-cluster        Limited        ✅               ✅ (linkerd-multicluster)
Complexity           Low            Medium           Low
CNCF status          Graduated      Graduated        Graduated
Best for             Cilium clusters,  Enterprise,    Lightweight,
                     new clusters  full feature set  resource-constrained

* Ambient không inject sidecar vào application pods
** ztunnel là shared per-node, không per-pod
</code></pre>

<h2>7. 使用 Istio 進行流量管理</h2>
<pre><code class="language-yaml"># VirtualService: canary deployment
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: my-app
  namespace: production
spec:
  hosts:
  - my-app
  http:
  - match:
    - headers:
        x-canary:
          exact: "true"
    route:
    - destination:
        host: my-app
        subset: canary
  - route:
    - destination:
        host: my-app
        subset: stable
      weight: 90
    - destination:
        host: my-app
        subset: canary
      weight: 10
---
# DestinationRule: define subsets
apiVersion: networking.istio.io/v1beta1
kind: DestinationRule
metadata:
  name: my-app
spec:
  host: my-app
  trafficPolicy:
    connectionPool:
      http:
        http2MaxRequests: 1000
    outlierDetection:
      consecutive5xxErrors: 5       # circuit breaking
      interval: 30s
      baseEjectionTime: 30s
  subsets:
  - name: stable
    labels:
      version: stable
  - name: canary
    labels:
      version: canary
</code></pre>

<h2>8.什麼時候選擇什麼？</h2>
<ul>
  <li><strong>Cilium 服務網格</strong>：使用了 Cilium CNI，想要 sidecarless，優先性能，mTLS 和基本流量管理就足夠了</li>
  <li><strong>Istio 環境模式</strong>：企業，需要完整的 Istio 功能（熔斷、故障注入、進階流量），已經具備 Istio 專業知識</li>
  <li><strong>林克德</strong>：想要 sidecar 模型，但最輕、最簡單、資源受限的集群</li>
  <li><strong>不要使用服務網格</strong>：叢集小，服務少，NetworkPolicy有足夠的隔離性</li>
</ul>

<h2>總結</h2>
<ul>
  <li>服務網格：mTLS、流量管理、基礎設施層級的可觀察性</li>
  <li>Cilium Sidecarless：核心級 eBPF，開銷最低，適合已經使用 Cilium 的集群</li>
  <li>Istio Ambient：L4 ztunnel + 可選的 L7 路點，功能最齊全</li>
  <li>Linkerd：Rust 微代理，sidecar 模型中最輕的</li>
  <li>2026年趨勢：sidecarless是必由之路，但Istio sidecar仍在企業中使用</li>
</ul>
