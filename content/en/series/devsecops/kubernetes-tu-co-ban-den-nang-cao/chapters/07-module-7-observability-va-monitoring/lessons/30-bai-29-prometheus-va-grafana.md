---
id: 019c9618-0502-7000-8000-c1147ba22e15
title: 'LESSON 29: PROMETHEUS AND GRAFANA'
slug: bai-29-prometheus-va-grafana
description: 'Prometheus Operator and kube-prometheus-stack. ServiceMonitor, PodMonitor, PrometheusRule. Grafana dashboards for Kubernetes clusters. AlertManager: routes, receivers (Slack, PagerDuty). Recording rules and PromQL best practices.'
duration_minutes: 100
is_free: false
video_url: null
sort_order: 29
section_title: 'Module 7: Observability & Monitoring'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7102" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7102)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1074" cy="32" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="1048" cy="206" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1022" cy="120" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="996" cy="34" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="208" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="52" x2="1100" y2="132" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="82" x2="1050" y2="152" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.3826859021799,138.5 975.3826859021799,165.5 952,179 928.6173140978201,165.5 928.6173140978201,138.5 952,125" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Lesson 29</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 29: PROMETHEUS AND GRAFANA</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 7: Observability &amp; Monitoring</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>Prometheus and Grafana__HTMLTAG_66___

<p>Prometheus and Grafana are an inseparable duo in the Kubernetes ecosystem. Prometheus is responsible for collecting, storing, and querying metrics, while Grafana provides a powerful visualization layer. With the introduction of Prometheus Operator, managing Prometheus on Kubernetes becomes declarative and fully automated.</p>

<h2>Prometheus Data Model</h2>

<p>Before going into Prometheus Operator, you need to understand Prometheus's data model to write effective queries.</p>

<h3>Time Series and Labels__HTMLTAG_74___

<p>All data in Prometheus is <strong>time series</strong> — a series of values (float64) over time, uniquely identified by a metric name and a set of key-value labels. For example:</p>

<pre><code class="language-bash">http_requests_total{method="GET", status="200", job="api-server", instance="10.0.0.1:8080"}
http_requests_total{method="POST", status="500", job="api-server", instance="10.0.0.1:8080"}
</code></pre>

<p>Labels is the main tool to filter, aggregate and join data in PromQL. Good label design is important — don't use high-cardinality labels (like user ID or request ID) because it will create millions of time series and slow down Prometheus.</p>

<h3>Metric Types</h3>

<p>Prometheus defines four basic types of metrics:</p><ul>
  <li><strong>Counter</strong>: value only increases, never decreases (reset to 0 when restarting). Used for: total requests, total errors, bytes sent. Query often used with <code>rate()</code> or <code>increase()</code>.</li>
  <li><strong>Gauge</strong>: value can be increased or decreased freely. Used for: current memory usage, current number of pods, queue size.</li>
  <li><strong>Histogram</strong>: measures the distribution of observations (usually request duration, response size). Create time series with suffix <code>_bucket</code>, <code>_sum</code>, <code>_count</code>. Used to calculate percentiles with <code>histogram_quantile()</code>.</li>
  <li><strong>Summary</strong>: similar to Histogram but calculates percentiles on the client-side. Less flexible than Histogram, not recommended for new metrics.</li>
</ul>

<h2>Prometheus Operator</h2>

<p>Prometheus Operator helps manage Prometheus and AlertManager on Kubernetes in a declarative way. Instead of writing config files and reloading Prometheus manually, you create Kubernetes resources and the Operator will automatically update the configuration.</p>

<h3>CRDs of Prometheus Operator</h3>

<p>Prometheus Operator provides the following CRDs:</p>
<ul>
  <li><strong>Prometheus</strong>: defines a Prometheus instance</li>
  <li><strong>AlertManager</strong>: AlertManager cluster definition</li>
  <li><strong>ServiceMonitor</strong>: defines how to scrape metrics from Services</li>
  <li><strong>PodMonitor</strong>: defines how to scrape metrics from Pods</li>
  <li><strong>PrometheusRule</strong>: defines alerting and recording rules</li>
  <li><strong>Probe</strong>: defines blackbox monitoring targets</li>
</ul>

<h3>Prometheus CRD</h3>

<pre><code class="language-yaml">apiVersion: monitoring.coreos.com/v1
kind: Prometheus
metadata:
  name: prometheus
  namespace: monitoring
spec:
  replicas: 2
  retention: 15d
  serviceAccountName: prometheus
  serviceMonitorSelector:
    matchLabels:
      team: frontend
  serviceMonitorNamespaceSelector:
    matchLabels:
      monitoring: enabled
  ruleSelector:
    matchLabels:
      prometheus: kube-prometheus
  storage:
    volumeClaimTemplate:
      spec:
        storageClassName: fast-ssd
        resources:
          requests:
            storage: 100Gi
  resources:
    requests:
      memory: 2Gi
      cpu: 500m
    limits:
      memory: 4Gi
      cpu: 2000m
</code></pre>

<p>Prometheus Operator automatically discovers ServiceMonitors and PodMonitors based on label selectors — no need to restart or reload Prometheus when adding new targets.</p>

<h2>ServiceMonitor — Scrape Metrics From Services</h2>

<p>ServiceMonitor is the most popular way to add scrape targets to Prometheus. It defines how Prometheus finds and scrapes metrics from a group of Services.</p>

<pre><code class="language-yaml">apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: api-server
  namespace: production
  labels:
    team: frontend
    app: api-server
spec:
  selector:
    matchLabels:
      app: api-server
  namespaceSelector:
    matchNames:
      - production
  endpoints:
    - port: metrics
      path: /metrics
      interval: 30s
      scrapeTimeout: 10s
      relabelings:
        - sourceLabels: [__meta_kubernetes_pod_name]
          targetLabel: pod
        - sourceLabels: [__meta_kubernetes_namespace]
          targetLabel: namespace
</code></pre>

<p>Service needs to expose metrics port with correct name:</p>

<pre><code class="language-yaml">apiVersion: v1
kind: Service
metadata:
  name: api-server
  namespace: production
  labels:
    app: api-server
spec:
  ports:
    - name: http
      port: 8080
    - name: metrics      # tên port phải match với ServiceMonitor
      port: 9090
  selector:
    app: api-server
</code></pre>

<h2>PodMonitor — Scrape Metrics Directly From Pods</h2>

<p>PodMonitor is used when you want to scrape directly from Pods without going through the Service, or when each Pod needs to be scraped independently (for example, each Pod exposes different metrics).</p>

<pre><code class="language-yaml">apiVersion: monitoring.coreos.com/v1
kind: PodMonitor
metadata:
  name: worker-pods
  namespace: production
spec:
  selector:
    matchLabels:
      app: worker
  podMetricsEndpoints:
    - port: metrics
      path: /metrics
      interval: 60s
  namespaceSelector:
    matchNames:
      - production
      - staging
</code></pre>

<h2>PromQL — Prometheus Query Language</h2>

<p>PromQL (Prometheus Query Language) is a powerful tool for querying time series data. Below are the most common patterns.</p><h3>Rate and Increase</h3>

<p>With Counter metrics, you always need to use <code>rate()</code> or <code>increase()</code> to get a meaningful value:</p>

<pre><code class="language-bash"># Requests per second (5 minute rate)
rate(http_requests_total[5m])

# Total requests trong 1 giờ qua
increase(http_requests_total[1h])

# Error rate percentage
rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) * 100
</code></pre>

<h3>Histogram Percentiles__HTMLTAG_176___

<pre><code class="language-bash"># P95 request latency
histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))

# P99 latency theo service
histogram_quantile(0.99,
  sum by (le, service) (
    rate(http_request_duration_seconds_bucket[5m])
  )
)
</code></pre>

<h3>Kubernetes-Specific Queries</h3>

<pre><code class="language-bash"># Pods với unavailable replicas
kube_deployment_status_replicas_unavailable > 0

# Pods đang trong CrashLoopBackOff
kube_pod_container_status_waiting_reason{reason="CrashLoopBackOff"} == 1

# CPU throttling percentage
rate(container_cpu_cfs_throttled_seconds_total[5m]) /
rate(container_cpu_cfs_periods_total[5m]) * 100 > 25

# Memory usage percentage
container_memory_working_set_bytes /
container_spec_memory_limit_bytes * 100

# Node disk pressure
kube_node_status_condition{condition="DiskPressure", status="true"} == 1
</code></pre>

<h2>Grafana Dashboards__HTMLTAG_180___

<p>Grafana is a visualization layer, connecting with Prometheus (and Loki, Tempo) to create rich dashboards.</p>

<h3>Import Dashboard From Grafana.com</h3>

<p>Grafana.com has thousands of community dashboards. Some important dashboards for Kubernetes:</p>
<ul>
  <li><strong>ID 315</strong>: Kubernetes cluster monitoring (basic)</li>
  <li><strong>ID 12740</strong>: Kubernetes monitoring (advanced, requires kube-state-metrics)</li>
  <li><strong>ID 15661</strong>: Kubernetes Node Overview</li>
  <li><strong>ID 15760</strong>: Kubernetes Views — Global</li>
  <li><strong>ID 14205</strong>: Kubernetes — Pod Overview</li>
</ul>

<p>To import: go to Grafana UI → Dashboards → Import → enter ID → select Prometheus data source.</p>

<h3>Dashboard Variables</h3>

<p>Variables turns the dashboard into an interactive tool. Common variables for Kubernetes:</p>

<pre><code class="language-yaml"># Variable: cluster
Type: Query
Query: label_values(kube_node_info, cluster)

# Variable: namespace
Type: Query
Query: label_values(kube_namespace_labels{cluster="$cluster"}, namespace)

# Variable: pod
Type: Query
Query: label_values(kube_pod_info{cluster="$cluster", namespace="$namespace"}, pod)
</code></pre>

<p>With this variable, the user can select cluster → namespace → pod and every panel in the dashboard will automatically filter according to that selection.</p>

<h3>Important Panels</h3>

<p>The complete Kubernetes Dashboard should have:</p>
<ul>
  <li><strong>Node Overview</strong>: CPU usage, memory usage, disk I/O, network I/O per node</li>
  <li><strong>Pod Metrics</strong>: CPU/memory request vs limit vs actual usage</li>
  <li><strong>Deployment Status</strong>: desired vs available replicas</li>
  <li><strong>Container Restarts</strong>: restart count in 1h, 24h</li>
  <li><strong>Error Rate</strong>: HTTP 5xx rate per service</li>
  <li><strong>Latency P50/P95/P99</strong>: request duration percentiles</li>
</ul>

<h2>AlertManager</h2>

<p>AlertManager receives alerts from Prometheus and processes them: routing to the correct receiver, grouping to reduce noise, inhibition to avoid alert storms, and silencing during maintenance.</p>

<h3>Routing Tree</h3>

<p>AlertManager routing is configured in a hierarchical tree. Each route matches the labels of the alert and sends it to the corresponding receiver:</p>

<pre><code class="language-yaml">apiVersion: monitoring.coreos.com/v1alpha1
kind: AlertmanagerConfig
metadata:
  name: main-routing
  namespace: monitoring
spec:
  route:
    groupBy: ['alertname', 'cluster', 'service']
    groupWait: 30s
    groupInterval: 5m
    repeatInterval: 12h
    receiver: 'default-slack'
    routes:
      - match:
          severity: critical
        receiver: 'pagerduty-critical'
        continue: false
      - match:
          severity: warning
          team: frontend
        receiver: 'slack-frontend'
      - match:
          severity: warning
        receiver: 'slack-platform'
  receivers:
    - name: 'default-slack'
      slackConfigs:
        - apiURL:
            name: slack-secret
            key: webhook-url
          channel: '#alerts'
          title: '{{ .CommonAnnotations.summary }}'
          text: '{{ range .Alerts }}{{ .Annotations.description }}{{ end }}'
    - name: 'pagerduty-critical'
      pagerdutyConfigs:
        - routingKey:
            name: pagerduty-secret
            key: routing-key
          severity: '{{ .CommonLabels.severity }}'
</code></pre>

<h3>Inhibition Rules__HTMLTAG_256___

<p>Inhibition rules prevent alerts from being sent when another alert is active. For example, when the entire cluster is down, there is no need to send alerts for each service:</p><pre><code class="language-yaml">inhibitRules:
  - sourceMatch:
      alertname: ClusterDown
    targetMatch:
      severity: warning
    equal: ['cluster']
  - sourceMatch:
      alertname: NodeNotReady
    targetMatch:
      alertname: KubePodNotRunning
    equal: ['node']
</code></pre>

<h2>PrometheusRule — Alert Rules__HTMLTAG_260___

<p>PrometheusRule defines alerting rules and recording rules. Prometheus Operator automatically loads these rules into Prometheus.</p>

<pre><code class="language-yaml">apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: kubernetes-alerts
  namespace: monitoring
  labels:
    prometheus: kube-prometheus
    role: alert-rules
spec:
  groups:
    - name: kubernetes.deployment
      rules:
        - alert: KubeDeploymentReplicasMismatch
          expr: |
            (
              kube_deployment_spec_replicas
              !=
              kube_deployment_status_replicas_available
            ) and (
              changes(kube_deployment_status_replicas_updated[10m]) == 0
            )
          for: 15m
          labels:
            severity: warning
          annotations:
            summary: "Deployment {{ $labels.namespace }}/{{ $labels.deployment }} replica mismatch"
            description: "Deployment {{ $labels.namespace }}/{{ $labels.deployment }} has not matched the expected number of replicas for over 15 minutes."

        - alert: KubePodCrashLooping
          expr: |
            increase(kube_pod_container_status_restarts_total[1h]) > 5
          for: 2m
          labels:
            severity: warning
          annotations:
            summary: "Pod {{ $labels.namespace }}/{{ $labels.pod }} is crash looping"
            description: "Pod {{ $labels.namespace }}/{{ $labels.pod }} container {{ $labels.container }} has restarted {{ $value }} times in the last hour."

    - name: kubernetes.node
      rules:
        - alert: NodeMemoryPressure
          expr: kube_node_status_condition{condition="MemoryPressure", status="true"} == 1
          for: 5m
          labels:
            severity: critical
          annotations:
            summary: "Node {{ $labels.node }} is under memory pressure"

        - alert: NodeHighCPUUsage
          expr: |
            100 - (avg by (node) (
              rate(node_cpu_seconds_total{mode="idle"}[5m])
            ) * 100) > 85
          for: 10m
          labels:
            severity: warning
          annotations:
            summary: "High CPU usage on node {{ $labels.node }}: {{ $value | printf \"%.1f\" }}%"
</code></pre>

<h2>Recording Rules — Pre-Compute Expensive Queries</h2>

<p>Recording rules precompute complex queries and save the results as a new time series. This significantly improves the performance of dashboards and alerts that use heavy queries.</p>

<pre><code class="language-yaml">groups:
  - name: kubernetes.recording_rules
    interval: 1m
    rules:
      # Pre-compute request rate per service
      - record: job:http_requests_total:rate5m
        expr: |
          sum by (job, namespace, status) (
            rate(http_requests_total[5m])
          )

      # Pre-compute P99 latency per service
      - record: job:http_request_duration_seconds:p99
        expr: |
          histogram_quantile(0.99,
            sum by (le, job, namespace) (
              rate(http_request_duration_seconds_bucket[5m])
            )
          )

      # Pre-compute CPU usage ratio
      - record: namespace:container_cpu_usage_seconds_total:sum_rate
        expr: |
          sum by (namespace) (
            rate(container_cpu_usage_seconds_total{
              container!="",
              image!=""
            }[5m])
          )
</code></pre>

<p>Best practices for recording rules:</p>
<ul>
  <li>Name in format <code>level:metric:operations</code> (for example: <code>job:http_requests:rate5m</code>)</li>
  <li>Only create recording rules for queries used in multiple places__HTMLTAG_277___
  <li>Evaluation interval of recording rules must be less than scrape interval</li>
  <li>Do not create recording rules for single-use queries</li>
</ul>

<h2>Best Practices For Production</h2>

<h3>Prometheus Sizing</h3>

<p>Prometheus memory usage is proportional to the number of active time series. Estimate: 1-2 bytes per sample, with 15-second scrape interval, 10,000 time series will use about 1GB of RAM. With a cluster of 100 nodes and hundreds of services, expected 500K-1M time series.</p>

<h3>High Availability</h3>

<p>Run 2 Prometheus instances with the same configuration. Grafana will deduplicate when querying. With AlertManager, run 3 instances in cluster mode to ensure alerts are not lost.</p>

<h3>Long-Term Storage</h3>

<p>Prometheus should only keep data for 2-4 weeks. For long-term storage (months/years), use Thanos or Grafana Mimir — both support object storage backends (S3, GCS) at a much lower cost than Prometheus local storage.</p>

<h2>Summary</h2>

<p>Prometheus Operator has revolutionized the way monitoring is managed on Kubernetes. With ServiceMonitor and PodMonitor, adding new targets is completely declarative and requires no manual intervention. PrometheusRule helps alert rules be managed as code (GitOps-friendly), and AlertManager with flexible routing tree ensures the right people receive the right alerts.</p>

<p>The next lesson will flesh out the rest of the observability stack: Loki for logs and Tempo for distributed tracing.</p>