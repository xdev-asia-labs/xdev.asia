---
id: 019e1a00-aa01-7001-c001-k8sha001002
title: 'LESSON 41: HORIZONTAL & VERTICAL POD AUTOSCALING'
slug: bai-41-horizontal-va-vertical-pod-autoscaling
description: HPA with CPU/memory and custom metrics, VPA recommendations, KEDA event-driven autoscaling, Cluster Autoscaler (on-prem alternatives), and scaling best practices.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 41
section_title: 'Part 10: Deployment Patterns & Auto-Scaling'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Deploy Microservices On-Premises with Kubernetes HA
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9028" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9028)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1025" cy="265" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="950" cy="170" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="75" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="800" cy="240" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="725" cy="145" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="75" x2="1100" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="105" x2="1050" y2="175" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="950.9807621135332,110 950.9807621135332,140 925,155 899.0192378864668,140 899.0192378864668,110.00000000000001 925,95" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Lesson 41</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 41: HORIZONTAL &amp; VERTICAL POD</tspan>
      <tspan x="60" dy="42">AUTOSCALING</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises with Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 10: Deployment Patterns &amp; Auto-Scaling</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 LESSON OBJECTIVE__HTMLTAG_68___
<ul>
<li>✅ HPA v2 with CPU, memory, custom metrics__HTMLTAG_71___
<li>✅ VPA (Vertical Pod Autoscaler) recommendations</li>
<li>✅ KEDA event-driven autoscaling</li>
<li>✅ On-premises capacity planning (no cloud autoscaler)</li>
<li>✅ Scaling best practices and anti-patterns</li>
</ul>

<hr>

<h2 id="phan-1-hpa">PART 1: HPA V2 (HORIZONTAL POD AUTOSCALER)</h2>

<pre><code>
HPA Flow:

Metrics Server / Prometheus
        │
        ▼
┌──────────────┐    scale up/down    ┌──────────────┐
│     HPA      │───────────────────►│  Deployment  │
│              │                     │  replicas:   │
│ target: 70%  │                     │  2 → 5 → 3   │
│ min: 2       │                     │              │
│ max: 20      │                     │              │
└──────────────┘                     └──────────────┘
</code></pre>

<pre><code class="language-yaml"># HPA with CPU + custom metrics:
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: order-service-hpa
  namespace: default
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: order-service
  minReplicas: 2
  maxReplicas: 20
  metrics:
    # CPU-based scaling:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70

    # Memory-based scaling:
    - type: Resource
      resource:
        name: memory
        target:
          type: Utilization
          averageUtilization: 80

    # Custom metric (requests per second):
    - type: Pods
      pods:
        metric:
          name: http_requests_per_second
        target:
          type: AverageValue
          averageValue: "100"

  behavior:
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
        - type: Percent
          value: 50
          periodSeconds: 60
        - type: Pods
          value: 4
          periodSeconds: 60
      selectPolicy: Max
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
        - type: Percent
          value: 10
          periodSeconds: 120
      selectPolicy: Min
</code></pre>

<pre><code class="language-bash"># Install Metrics Server (for CPU/memory):
helm install metrics-server metrics-server/metrics-server \
  --namespace kube-system \
  --set args[0]=--kubelet-insecure-tls

# Install Prometheus Adapter (for custom metrics):
helm install prometheus-adapter prometheus-community/prometheus-adapter \
  --namespace monitoring \
  -f adapter-values.yaml
</code></pre>

<pre><code class="language-yaml"># adapter-values.yaml:
prometheus:
  url: http://prometheus-kube-prometheus-prometheus.monitoring
  port: 9090

rules:
  default: false
  custom:
    - seriesQuery: 'http_server_request_duration_seconds_count{namespace!="",pod!=""}'
      resources:
        overrides:
          namespace: { resource: "namespace" }
          pod: { resource: "pod" }
      name:
        matches: "^(.*)_total$"
        as: "http_requests_per_second"
      metricsQuery: 'sum(rate(<<.Series>>{<<.LabelMatchers>>}[2m])) by (<<.GroupBy>>)'
</code></pre>

<hr>

<h2 id="phan-2-vpa">PART 2: VERTICAL POD AUTOSCALER</h2>

<pre><code class="language-bash"># Install VPA:
git clone https://github.com/kubernetes/autoscaler.git
cd autoscaler/vertical-pod-autoscaler
./hack/vpa-up.sh
</code></pre>

<pre><code class="language-yaml"># VPA recommendation mode (safe for production):
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: order-service-vpa
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: order-service
  updatePolicy:
    updateMode: "Off"  # Recommendation only, no auto-update
  resourcePolicy:
    containerPolicies:
      - containerName: app
        minAllowed:
          cpu: 50m
          memory: 64Mi
        maxAllowed:
          cpu: 2
          memory: 2Gi
        controlledResources: ["cpu", "memory"]
</code></pre>

<pre><code class="language-bash"># Get VPA recommendations:
kubectl get vpa order-service-vpa -o yaml

# Output:
# recommendation:
#   containerRecommendations:
#     - containerName: app
#       lowerBound:   {cpu: 100m, memory: 128Mi}
#       target:       {cpu: 250m, memory: 256Mi}
#       upperBound:   {cpu: 500m, memory: 512Mi}
#       uncappedTarget: {cpu: 250m, memory: 256Mi}
</code></pre>

<hr>

<h2 id="phan-3-keda">PART 3: KEDA — EVENT-DRIVEN AUTOSCALING</h2>

<pre><code class="language-bash"># Install KEDA:
helm repo add kedacore https://kedacore.github.io/charts
helm install keda kedacore/keda \
  --namespace keda \
  --create-namespace
</code></pre>

<pre><code class="language-yaml"># Scale based on RabbitMQ queue length:
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: order-worker
  namespace: default
spec:
  scaleTargetRef:
    name: order-worker
  pollingInterval: 15
  cooldownPeriod: 300
  minReplicaCount: 1
  maxReplicaCount: 30
  triggers:
    - type: rabbitmq
      metadata:
        host: amqp://user:pass@rabbitmq.default:5672
        queueName: order-processing
        queueLength: "10"  # 1 pod per 10 messages
        protocol: amqp

---
# Scale based on Kafka consumer lag:
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: event-processor
spec:
  scaleTargetRef:
    name: event-processor
  triggers:
    - type: kafka
      metadata:
        bootstrapServers: kafka-bootstrap.default:9092
        consumerGroup: event-processor-group
        topic: events
        lagThreshold: "100"

---
# Scale based on Prometheus metric:
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: api-gateway
spec:
  scaleTargetRef:
    name: api-gateway
  triggers:
    - type: prometheus
      metadata:
        serverAddress: http://prometheus-kube-prometheus-prometheus.monitoring:9090
        metricName: http_requests_per_second
        query: sum(rate(http_server_request_duration_seconds_count{service="api-gateway"}[2m]))
        threshold: "500"
</code></pre>

<hr>

<h2 id="phan-4-on-prem">PART 4: ON-PREMISES CAPACITY PLANNING</h2>

<pre><code>
On-Premises vs Cloud Scaling:

Cloud: Auto-scale nodes (add VMs)
On-Prem: Fixed hardware → must plan ahead

Capacity Zones:
┌─────────────────────────────────────────┐
│ Physical Capacity: 100 CPU, 400GB RAM   │
│ ████████████████████████████████████████│
│                                         │
│ Allocated:     70 CPU, 280GB RAM (70%)  │
│ ████████████████████████████░░░░░░░░░░░│
│                                         │
│ Reserved:      15 CPU, 60GB RAM (15%)   │
│ ░░░░░░░░░░░░░░░░████░░░░░░░░░░░░░░░░░│
│                                         │
│ Buffer:        15 CPU, 60GB RAM (15%)   │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░████░░░░░░░│
│                     Alert at 80% ▲      │
└─────────────────────────────────────────┘
</code></pre>

<pre><code class="language-yaml"># Alert when cluster capacity is running low:
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: capacity-alerts
spec:
  groups:
    - name: capacity
      rules:
        - alert: ClusterCPUCapacityLow
          expr: |
            sum(kube_pod_container_resource_requests{resource="cpu"})
            /
            sum(kube_node_status_allocatable{resource="cpu"})
            > 0.8
          for: 15m
          labels:
            severity: warning
          annotations:
            summary: "Cluster CPU allocation > 80%"

        - alert: ClusterMemoryCapacityLow
          expr: |
            sum(kube_pod_container_resource_requests{resource="memory"})
            /
            sum(kube_node_status_allocatable{resource="memory"})
            > 0.8
          for: 15m
          labels:
            severity: warning
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>HPA v2</strong>: Scale on CPU, memory, or custom Prometheus metrics</li>
<li><strong>Behavior</strong>: Configure scale-up/down speed and stabilization</li>
<li><strong>VPA</strong>: Use "Off" mode for recommendations, avoid with HPA on same metric</li>
<li><strong>KEDA</strong>: Event-driven scaling (queue length, Kafka lag)</li>
<li><strong>On-prem</strong>: Fixed capacity → plan buffer, alert at 80%</li>
<li><strong>Anti-pattern</strong>: Don't use HPA + VPA on same metric</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 EXERCISE</h2><h3 id="bt1">Exercise 1: HPA + Custom Metrics__HTMLTAG_126___
<ul>
<li>Deploy Prometheus Adapter</li>
<li>Create HPA with custom requests/sec metric</li>
<li>Load test and observe scaling behavior__HTMLTAG_133___
</ul>

<h3 id="bt2">Exercise 2: KEDA Queue-Based Scaling</h3>
<ul>
<li>Install KEDA, create ScaledObject for RabbitMQ</li>
<li>Push 1000 messages to queue</li>
<li>Verify worker pods scale up, then scale down</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 NEXT POST</h2>
<p>In <strong>Lesson 42: Resource Management & Scheduling</strong>, we will optimize resource allocation and pod scheduling.</p>