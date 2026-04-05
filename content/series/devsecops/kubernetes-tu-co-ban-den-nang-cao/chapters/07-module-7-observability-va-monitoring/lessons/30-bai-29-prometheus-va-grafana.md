---
id: 019c9618-0502-7000-8000-c1147ba22e15
title: 'BÀI 29: PROMETHEUS VÀ GRAFANA'
slug: bai-29-prometheus-va-grafana
description: >-
  Prometheus Operator và kube-prometheus-stack. ServiceMonitor, PodMonitor, PrometheusRule. Grafana dashboards cho Kubernetes cluster. AlertManager: routes, receivers (Slack, PagerDuty). Recording rules và PromQL best practices.
duration_minutes: 100
is_free: false
video_url: null
sort_order: 29
section_title: 'Module 7: Observability & Monitoring'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Bài 29</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 29: PROMETHEUS VÀ GRAFANA</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 7: Observability &amp; Monitoring</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>Prometheus và Grafana</h2>

<p>Prometheus và Grafana là bộ đôi không thể tách rời trong hệ sinh thái Kubernetes. Prometheus chịu trách nhiệm thu thập, lưu trữ và query metrics, trong khi Grafana cung cấp lớp visualization mạnh mẽ. Với sự ra đời của Prometheus Operator, việc quản lý Prometheus trên Kubernetes trở nên declarative và tự động hóa hoàn toàn.</p>

<h2>Prometheus Data Model</h2>

<p>Trước khi đi vào Prometheus Operator, cần hiểu rõ data model của Prometheus để viết queries hiệu quả.</p>

<h3>Time Series và Labels</h3>

<p>Mọi dữ liệu trong Prometheus đều là <strong>time series</strong> — một chuỗi các giá trị (float64) theo thời gian, được định danh duy nhất bởi tên metric và một tập hợp key-value labels. Ví dụ:</p>

<pre><code class="language-bash">http_requests_total{method="GET", status="200", job="api-server", instance="10.0.0.1:8080"}
http_requests_total{method="POST", status="500", job="api-server", instance="10.0.0.1:8080"}
</code></pre>

<p>Labels là công cụ chính để filter, aggregate và join data trong PromQL. Thiết kế labels tốt là quan trọng — không nên dùng high-cardinality labels (như user ID hay request ID) vì sẽ tạo ra hàng triệu time series và làm Prometheus chậm.</p>

<h3>Metric Types</h3>

<p>Prometheus định nghĩa bốn loại metric cơ bản:</p>

<ul>
  <li><strong>Counter</strong>: giá trị chỉ tăng, không bao giờ giảm (reset về 0 khi restart). Dùng cho: total requests, total errors, bytes sent. Query thường dùng với <code>rate()</code> hoặc <code>increase()</code>.</li>
  <li><strong>Gauge</strong>: giá trị có thể tăng hoặc giảm tự do. Dùng cho: current memory usage, current number of pods, queue size.</li>
  <li><strong>Histogram</strong>: đo phân phối của các observations (thường là request duration, response size). Tạo ra các time series với suffix <code>_bucket</code>, <code>_sum</code>, <code>_count</code>. Dùng để tính percentiles với <code>histogram_quantile()</code>.</li>
  <li><strong>Summary</strong>: tương tự Histogram nhưng tính percentiles phía client-side. Ít linh hoạt hơn Histogram, không nên dùng cho metrics mới.</li>
</ul>

<h2>Prometheus Operator</h2>

<p>Prometheus Operator giúp quản lý Prometheus và AlertManager trên Kubernetes theo cách declarative. Thay vì viết config files và reload Prometheus thủ công, bạn tạo Kubernetes resources và Operator sẽ tự động cập nhật cấu hình.</p>

<h3>CRDs của Prometheus Operator</h3>

<p>Prometheus Operator cung cấp các CRDs sau:</p>
<ul>
  <li><strong>Prometheus</strong>: định nghĩa một Prometheus instance</li>
  <li><strong>AlertManager</strong>: định nghĩa AlertManager cluster</li>
  <li><strong>ServiceMonitor</strong>: định nghĩa cách scrape metrics từ Services</li>
  <li><strong>PodMonitor</strong>: định nghĩa cách scrape metrics từ Pods</li>
  <li><strong>PrometheusRule</strong>: định nghĩa alerting và recording rules</li>
  <li><strong>Probe</strong>: định nghĩa blackbox monitoring targets</li>
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

<p>Prometheus Operator tự động discover ServiceMonitors và PodMonitors dựa trên label selectors — không cần restart hay reload Prometheus khi thêm target mới.</p>

<h2>ServiceMonitor — Scrape Metrics Từ Services</h2>

<p>ServiceMonitor là cách phổ biến nhất để thêm scrape targets vào Prometheus. Nó định nghĩa cách Prometheus tìm và scrape metrics từ một nhóm Services.</p>

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

<p>Service cần expose metrics port với tên đúng:</p>

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

<h2>PodMonitor — Scrape Metrics Trực Tiếp Từ Pods</h2>

<p>PodMonitor dùng khi bạn muốn scrape trực tiếp từ Pods mà không qua Service, hoặc khi mỗi Pod cần được scrape độc lập (ví dụ: mỗi Pod expose metrics khác nhau).</p>

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

<h2>PromQL — Query Language Của Prometheus</h2>

<p>PromQL (Prometheus Query Language) là công cụ mạnh mẽ để query time series data. Dưới đây là các patterns phổ biến nhất.</p>

<h3>Rate và Increase</h3>

<p>Với Counter metrics, bạn luôn cần dùng <code>rate()</code> hoặc <code>increase()</code> để có giá trị có nghĩa:</p>

<pre><code class="language-bash"># Requests per second (5 minute rate)
rate(http_requests_total[5m])

# Total requests trong 1 giờ qua
increase(http_requests_total[1h])

# Error rate percentage
rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) * 100
</code></pre>

<h3>Histogram Percentiles</h3>

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

<h2>Grafana Dashboards</h2>

<p>Grafana là visualization layer, kết nối với Prometheus (và Loki, Tempo) để tạo dashboards phong phú.</p>

<h3>Import Dashboard Từ Grafana.com</h3>

<p>Grafana.com có hàng nghìn community dashboards. Một số dashboard quan trọng cho Kubernetes:</p>
<ul>
  <li><strong>ID 315</strong>: Kubernetes cluster monitoring (basic)</li>
  <li><strong>ID 12740</strong>: Kubernetes monitoring (advanced, requires kube-state-metrics)</li>
  <li><strong>ID 15661</strong>: Kubernetes Node Overview</li>
  <li><strong>ID 15760</strong>: Kubernetes Views — Global</li>
  <li><strong>ID 14205</strong>: Kubernetes — Pod Overview</li>
</ul>

<p>Để import: vào Grafana UI → Dashboards → Import → nhập ID → chọn Prometheus data source.</p>

<h3>Dashboard Variables</h3>

<p>Variables biến dashboard thành interactive tool. Các variables phổ biến cho Kubernetes:</p>

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

<p>Với variables này, user có thể chọn cluster → namespace → pod và mọi panel trong dashboard sẽ tự động filter theo lựa chọn đó.</p>

<h3>Các Panels Quan Trọng</h3>

<p>Dashboard Kubernetes hoàn chỉnh nên có:</p>
<ul>
  <li><strong>Node Overview</strong>: CPU usage, memory usage, disk I/O, network I/O per node</li>
  <li><strong>Pod Metrics</strong>: CPU/memory request vs limit vs actual usage</li>
  <li><strong>Deployment Status</strong>: desired vs available replicas</li>
  <li><strong>Container Restarts</strong>: restart count trong 1h, 24h</li>
  <li><strong>Error Rate</strong>: HTTP 5xx rate per service</li>
  <li><strong>Latency P50/P95/P99</strong>: request duration percentiles</li>
</ul>

<h2>AlertManager</h2>

<p>AlertManager nhận alerts từ Prometheus và xử lý chúng: routing đến đúng receiver, grouping để giảm noise, inhibition để tránh alert storm, và silencing khi maintenance.</p>

<h3>Routing Tree</h3>

<p>AlertManager routing được cấu hình theo cây phân cấp. Mỗi route match labels của alert và gửi đến receiver tương ứng:</p>

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

<h3>Inhibition Rules</h3>

<p>Inhibition rules ngăn alert bị gửi đi khi một alert khác đang active. Ví dụ: khi toàn bộ cluster down, không cần gửi alerts cho từng service:</p>

<pre><code class="language-yaml">inhibitRules:
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

<h2>PrometheusRule — Alert Rules</h2>

<p>PrometheusRule định nghĩa alerting rules và recording rules. Prometheus Operator tự động load rules này vào Prometheus.</p>

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

<p>Recording rules tính toán trước các queries phức tạp và lưu kết quả thành time series mới. Điều này cải thiện đáng kể performance của dashboards và alerts sử dụng các queries nặng.</p>

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

<p>Best practices cho recording rules:</p>
<ul>
  <li>Tên theo format <code>level:metric:operations</code> (ví dụ: <code>job:http_requests:rate5m</code>)</li>
  <li>Chỉ tạo recording rules cho queries dùng trong nhiều places</li>
  <li>Evaluation interval của recording rules phải nhỏ hơn scrape interval</li>
  <li>Không tạo recording rules cho queries chỉ dùng một lần</li>
</ul>

<h2>Best Practices Cho Production</h2>

<h3>Prometheus Sizing</h3>

<p>Prometheus memory usage tỉ lệ thuận với số lượng active time series. Ước tính: 1-2 bytes per sample, với 15-second scrape interval, 10,000 time series sẽ dùng khoảng 1GB RAM. Với cluster 100 nodes và hàng trăm services, dự kiến 500K-1M time series.</p>

<h3>High Availability</h3>

<p>Chạy 2 Prometheus instances với cùng cấu hình. Grafana sẽ deduplicate khi query. Với AlertManager, chạy 3 instances theo cluster mode để đảm bảo không mất alerts.</p>

<h3>Long-Term Storage</h3>

<p>Prometheus chỉ nên giữ data 2-4 tuần. Để long-term storage (months/years), dùng Thanos hoặc Grafana Mimir — cả hai đều hỗ trợ object storage backend (S3, GCS) với chi phí thấp hơn nhiều so với Prometheus local storage.</p>

<h2>Tổng Kết</h2>

<p>Prometheus Operator đã cách mạng hóa cách quản lý monitoring trên Kubernetes. Với ServiceMonitor và PodMonitor, việc thêm targets mới là hoàn toàn declarative và không cần can thiệp thủ công. PrometheusRule giúp alert rules được quản lý như code (GitOps-friendly), và AlertManager với routing tree linh hoạt đảm bảo đúng người nhận đúng alert.</p>

<p>Bài học tiếp theo sẽ bổ sung phần còn lại của observability stack: Loki cho logs và Tempo cho distributed tracing.</p>
