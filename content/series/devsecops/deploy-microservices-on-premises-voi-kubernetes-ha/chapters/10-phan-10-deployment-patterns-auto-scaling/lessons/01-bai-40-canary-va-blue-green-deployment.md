---
id: 019e1a00-aa01-7001-c001-k8sha001001
title: 'BÀI 40: CANARY & BLUE-GREEN DEPLOYMENT'
slug: bai-40-canary-va-blue-green-deployment
description: >-
  Deployment strategies chi tiết: Canary với Istio/Argo Rollouts,
  Blue-Green deployment, traffic shifting,
  automated rollback, và progressive delivery.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 40
section_title: 'Phần 10: Deployment Patterns & Auto-Scaling'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4131" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4131)"/>

  <!-- Decorations -->
  <g>
    <circle cx="651" cy="63" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="702" cy="74" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="753" cy="85" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="804" cy="96" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="107" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="73" x2="1100" y2="153" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="103" x2="1050" y2="173" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.2487113059642,209 1047.2487113059642,237 1023,251 998.7512886940357,237 998.7512886940357,209 1023,195" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — Bài 40</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 40: CANARY &amp; BLUE-GREEN DEPLOYMENT</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 10: Deployment Patterns &amp; Auto-Scaling</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ So sánh deployment strategies (Rolling, Blue-Green, Canary)</li>
<li>✅ Argo Rollouts cho progressive delivery</li>
<li>✅ Canary deployment với traffic shifting</li>
<li>✅ Blue-Green với instant cutover</li>
<li>✅ Analysis templates và automated rollback</li>
</ul>

<hr>

<h2 id="phan-1-strategies">PHẦN 1: DEPLOYMENT STRATEGIES</h2>

<pre><code class="language-mermaid">
graph LR
    subgraph ROLLING["🔄 Rolling Update — default K8s"]
        direction LR
        R1["v1 ████████"] -->|"gradually replace"| R2["v1 ██ v2 ██████"] --> R3["v2 ████████"]
    end

    subgraph BLUEGREEN["🔵🟢 Blue-Green"]
        direction LR
        BG1["🔵 Blue v1 ACTIVE<br/>🟢 Green v2 standby"] -->|"instant switch"| BG2["🔵 Blue v1 standby<br/>🟢 Green v2 ACTIVE"]
    end

    subgraph CANARY["🐤 Canary"]
        direction LR
        C1["v1 100%"] -->|"5%"| C2["v1 95%<br/>v2 5%"] -->|"validate"| C3["v1 70%<br/>v2 30%"] -->|"promote"| C4["v2 100%"]
    end

    style ROLLING fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style BLUEGREEN fill:#1e3a5f,stroke:#10b981,color:#e2e8f0
    style CANARY fill:#1e3a5f,stroke:#f59e0b,color:#e2e8f0
</code></pre>

<pre><code class="language-mermaid">
stateDiagram-v2
    [*] --> Deploy_v2: New version
    Deploy_v2 --> Canary_5: Shift 5% traffic
    Canary_5 --> Analysis_1: Run analysis
    Analysis_1 --> Canary_30: ✅ Pass → Shift 30%
    Analysis_1 --> Rollback: ❌ Fail
    Canary_30 --> Analysis_2: Run analysis
    Analysis_2 --> Canary_70: ✅ Pass → Shift 70%
    Analysis_2 --> Rollback: ❌ Fail
    Canary_70 --> Full_v2: ✅ Promote 100%
    Full_v2 --> [*]: Done
    Rollback --> [*]: Reverted to v1
</code></pre>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Strategy</th><th>Downtime</th><th>Rollback</th><th>Risk</th><th>Resource Cost</th></tr>
</thead>
<tbody>
<tr><td>Rolling Update</td><td>Zero</td><td>Slow</td><td>Medium</td><td>Low (+25%)</td></tr>
<tr><td>Blue-Green</td><td>Zero</td><td>Instant</td><td>Low</td><td>High (2x)</td></tr>
<tr><td>Canary</td><td>Zero</td><td>Fast</td><td>Very Low</td><td>Low (+10%)</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-argo-rollouts">PHẦN 2: ARGO ROLLOUTS</h2>

<pre><code class="language-bash"># Install Argo Rollouts:
helm repo add argo https://argoproj.github.io/argo-helm
helm install argo-rollouts argo/argo-rollouts \
  --namespace argo-rollouts \
  --create-namespace \
  --set dashboard.enabled=true
</code></pre>

<pre><code class="language-yaml"># Canary Rollout:
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: order-service
  namespace: default
spec:
  replicas: 5
  revisionHistoryLimit: 3
  selector:
    matchLabels:
      app: order-service
  template:
    metadata:
      labels:
        app: order-service
    spec:
      containers:
        - name: app
          image: harbor.local/myproject/order-service:v2.0
          ports:
            - containerPort: 8080
          resources:
            requests:
              cpu: 100m
              memory: 128Mi
  strategy:
    canary:
      canaryService: order-service-canary
      stableService: order-service-stable
      trafficRouting:
        istio:
          virtualServices:
            - name: order-service-vsvc
              routes:
                - primary
      steps:
        # Step 1: 5% traffic to canary
        - setWeight: 5
        - pause: { duration: 5m }
        # Step 2: Run analysis
        - analysis:
            templates:
              - templateName: success-rate
            args:
              - name: service-name
                value: order-service-canary
        # Step 3: 25% traffic
        - setWeight: 25
        - pause: { duration: 10m }
        # Step 4: 50% traffic
        - setWeight: 50
        - pause: { duration: 10m }
        # Step 5: 100% → promote
        - setWeight: 100
</code></pre>

<hr>

<h2 id="phan-3-analysis">PHẦN 3: ANALYSIS TEMPLATES</h2>

<pre><code class="language-yaml"># Canary analysis: check error rate and latency:
apiVersion: argoproj.io/v1alpha1
kind: AnalysisTemplate
metadata:
  name: success-rate
spec:
  args:
    - name: service-name
  metrics:
    - name: success-rate
      interval: 60s
      count: 5
      successCondition: result[0] >= 0.99
      failureLimit: 2
      provider:
        prometheus:
          address: http://prometheus-kube-prometheus-prometheus.monitoring:9090
          query: |
            sum(rate(http_server_request_duration_seconds_count{
              service="{{args.service-name}}",
              http_status_code!~"5.."
            }[2m]))
            /
            sum(rate(http_server_request_duration_seconds_count{
              service="{{args.service-name}}"
            }[2m]))

    - name: latency-p99
      interval: 60s
      count: 5
      successCondition: result[0] < 0.5
      failureLimit: 2
      provider:
        prometheus:
          address: http://prometheus-kube-prometheus-prometheus.monitoring:9090
          query: |
            histogram_quantile(0.99,
              sum(rate(http_server_request_duration_seconds_bucket{
                service="{{args.service-name}}"
              }[2m])) by (le)
            )
</code></pre>

<hr>

<h2 id="phan-4-blue-green">PHẦN 4: BLUE-GREEN DEPLOYMENT</h2>

<pre><code class="language-yaml"># Blue-Green Rollout:
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: payment-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: payment-service
  template:
    metadata:
      labels:
        app: payment-service
    spec:
      containers:
        - name: app
          image: harbor.local/myproject/payment-service:v2.0
  strategy:
    blueGreen:
      activeService: payment-service-active
      previewService: payment-service-preview
      autoPromotionEnabled: false
      # Pre-promotion analysis:
      prePromotionAnalysis:
        templates:
          - templateName: smoke-test
      # Scale down old version after:
      scaleDownDelaySeconds: 300
      # Anti-affinity:
      antiAffinity:
        preferredDuringSchedulingIgnoredDuringExecution:
          weight: 100
</code></pre>

<pre><code class="language-yaml"># Smoke test analysis:
apiVersion: argoproj.io/v1alpha1
kind: AnalysisTemplate
metadata:
  name: smoke-test
spec:
  metrics:
    - name: smoke-test
      count: 1
      provider:
        job:
          spec:
            template:
              spec:
                containers:
                  - name: smoke
                    image: harbor.local/myproject/smoke-test:latest
                    command: ["./run-tests.sh"]
                    env:
                      - name: TARGET_URL
                        value: "http://payment-service-preview:8080"
                restartPolicy: Never
            backoffLimit: 0
</code></pre>

<hr>

<h2 id="phan-5-operations">PHẦN 5: ROLLOUT OPERATIONS</h2>

<pre><code class="language-bash"># Argo Rollouts CLI:
kubectl argo rollouts get rollout order-service -w
kubectl argo rollouts status order-service

# Manual promote canary:
kubectl argo rollouts promote order-service

# Abort (rollback):
kubectl argo rollouts abort order-service

# Retry after abort:
kubectl argo rollouts retry rollout order-service

# Blue-Green: promote preview to active:
kubectl argo rollouts promote payment-service

# Dashboard:
kubectl argo rollouts dashboard -p 3100
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Canary</strong>: Gradual traffic shifting, metrics-driven promotion</li>
<li><strong>Blue-Green</strong>: Instant cutover, full preview environment</li>
<li><strong>Argo Rollouts</strong>: Drop-in Deployment replacement</li>
<li><strong>AnalysisTemplate</strong>: Automated success/failure criteria</li>
<li><strong>Integration</strong>: Istio traffic routing + Prometheus metrics</li>
<li><strong>Rollback</strong>: Automatic on analysis failure</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Canary Deployment</h3>
<ul>
<li>Convert Deployment to Argo Rollout</li>
<li>Configure 5% → 25% → 50% → 100% canary steps</li>
<li>Create AnalysisTemplate with success rate check</li>
</ul>

<h3 id="bt2">Bài tập 2: Blue-Green + Smoke Test</h3>
<ul>
<li>Setup Blue-Green Rollout</li>
<li>Create smoke test Job as pre-promotion analysis</li>
<li>Inject error → verify auto-rollback</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 41: Horizontal & Vertical Pod Autoscaling</strong>, chúng ta sẽ implement auto-scaling cho workloads.</p>
