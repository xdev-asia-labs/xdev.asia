---
id: 019e1a00-aa01-7001-c001-k8sha001002
title: 'BÀI 41: HORIZONTAL & VERTICAL POD AUTOSCALING'
slug: bai-41-horizontal-va-vertical-pod-autoscaling
description: >-
  HPA với CPU/memory và custom metrics, VPA recommendations,
  KEDA event-driven autoscaling, Cluster Autoscaler (on-prem alternatives),
  và scaling best practices.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 41
section_title: 'Phần 10: Deployment Patterns & Auto-Scaling'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ HPA v2 với CPU, memory, custom metrics</li>
<li>✅ VPA (Vertical Pod Autoscaler) recommendations</li>
<li>✅ KEDA event-driven autoscaling</li>
<li>✅ On-premises capacity planning (no cloud autoscaler)</li>
<li>✅ Scaling best practices và anti-patterns</li>
</ul>

<hr>

<h2 id="phan-1-hpa">PHẦN 1: HPA V2 (HORIZONTAL POD AUTOSCALER)</h2>

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

<h2 id="phan-2-vpa">PHẦN 2: VERTICAL POD AUTOSCALER</h2>

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

<h2 id="phan-3-keda">PHẦN 3: KEDA — EVENT-DRIVEN AUTOSCALING</h2>

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

<h2 id="phan-4-on-prem">PHẦN 4: ON-PREMISES CAPACITY PLANNING</h2>

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

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: HPA + Custom Metrics</h3>
<ul>
<li>Deploy Prometheus Adapter</li>
<li>Create HPA with custom requests/sec metric</li>
<li>Load test and observe scaling behavior</li>
</ul>

<h3 id="bt2">Bài tập 2: KEDA Queue-Based Scaling</h3>
<ul>
<li>Install KEDA, create ScaledObject for RabbitMQ</li>
<li>Push 1000 messages to queue</li>
<li>Verify worker pods scale up, then scale down</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 42: Resource Management & Scheduling</strong>, chúng ta sẽ tối ưu resource allocation và pod scheduling.</p>
