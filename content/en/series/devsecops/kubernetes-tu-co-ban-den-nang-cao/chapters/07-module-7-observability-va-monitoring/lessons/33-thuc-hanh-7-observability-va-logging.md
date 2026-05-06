---
id: 019c9618-0505-7000-8000-c1147ba22e15
title: 'LESSON 32: PRACTICE — OBSERVABILITY AND LOGGING'
slug: thuc-hanh-7-observability-va-logging
description: 'Module 7 practice: Deploy kube-prometheus-stack, install Loki + Grafana Alloy, install Tempo with OTel auto-instrumentation, create Grafana dashboard measured metrics/logs/traces, create alerting rule.'
duration_minutes: 180
is_free: false
video_url: null
sort_order: 32
section_title: 'Module 7: Observability & Monitoring'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9746" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9746)"/>

  <!-- Decorations -->
  <g>
    <circle cx="822" cy="196" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="1044" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="766" cy="220" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="988" cy="102" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="710" cy="244" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="156" x2="1100" y2="236" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="186" x2="1050" y2="256" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="982.8467875173176,140.5 982.8467875173176,171.5 956,187 929.1532124826824,171.5 929.1532124826824,140.5 956,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — Lesson 32</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 32: PRACTICE — OBSERVABILITY AND</tspan>
      <tspan x="60" dy="42">LOGGING</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 7: Observability &amp; Monitoring</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Practice objective__HTMLTAG_68___
<ul>
  <li>Deploy full PLG stack with kube-prometheus-stack + Loki + Tempo</li>
  <li>Collect logs with Grafana Alloy__HTMLTAG_73___
  <li>Auto-instrument application with OpenTelemetry Operator</li>
  <li>Create alerting rule and Slack notification__HTMLTAG_77___
  <li>Debug using correlated observability__HTMLTAG_79___
</ul>

<h2>Lab 1: Deploy kube-prometheus-stack</h2>
<pre><code class="language-bash">kubectl create namespace monitoring

# Cài kube-prometheus-stack (Prometheus + Grafana + AlertManager)
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

cat &gt; prom-values.yaml &lt;&lt;EOF
grafana:
  adminPassword: "admin123"
  persistence:
    enabled: false
  service:
    type: NodePort
    nodePort: 32000

prometheus:
  prometheusSpec:
    retention: 7d
    resources:
      requests:
        memory: 512Mi
      limits:
        memory: 1Gi

alertmanager:
  alertmanagerSpec:
    resources:
      requests:
        memory: 64Mi
EOF

helm install kube-prometheus prometheus-community/kube-prometheus-stack \
  --namespace monitoring \
  --values prom-values.yaml

kubectl rollout status deployment/kube-prometheus-grafana -n monitoring

# Truy cập Grafana
NODE_IP=$(kubectl get nodes -o jsonpath='{.items[0].status.addresses[0].address}')
echo "Grafana: http://$NODE_IP:32000 (admin/admin123)"
</code></pre>

<h2>Lab 2: Creating ServiceMonitor for Custom App</h2>
<pre><code class="language-bash">kubectl create namespace lab7

# Deploy app expose Prometheus metrics
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: metrics-app
  namespace: lab7
  labels:
    app: metrics-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: metrics-app
  template:
    metadata:
      labels:
        app: metrics-app
    spec:
      containers:
      - name: app
        # image này expose /metrics endpoint
        image: prom/prometheus:v2.49.1
        args: ["--web.listen-address=:9090", "--config.file=/etc/prometheus/prometheus.yml"]
        ports:
        - containerPort: 9090
          name: metrics
        resources:
          requests:
            cpu: "100m"
            memory: "128Mi"
---
apiVersion: v1
kind: Service
metadata:
  name: metrics-app
  namespace: lab7
  labels:
    app: metrics-app    # Label này quan trọng cho ServiceMonitor
spec:
  selector:
    app: metrics-app
  ports:
  - name: metrics
    port: 9090
    targetPort: 9090
---
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: metrics-app
  namespace: lab7
  labels:
    release: kube-prometheus  # phải match Prometheus selector
spec:
  namespaceSelector:
    matchNames:
    - lab7
  selector:
    matchLabels:
      app: metrics-app
  endpoints:
  - port: metrics
    interval: 30s
    path: /metrics
EOF

# Verify trong Prometheus UI
# Status → Targets → metrics-app
</code></pre>

<h2>Lab 3: AlertManager — Slack Notification__HTMLTAG_86___
<pre><code class="language-bash"># Cấu hình AlertManager với Slack
# (Cần Slack webhook URL, dùng dummy URL cho lab)
cat &gt; alertmanager-config.yaml &lt;&lt;EOF
apiVersion: v1
kind: Secret
metadata:
  name: alertmanager-kube-prometheus-alertmanager
  namespace: monitoring
stringData:
  alertmanager.yaml: |
    global:
      slack_api_url: 'https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK'
      resolve_timeout: 5m
    route:
      group_by: ['job', 'alertname', 'namespace']
      group_wait: 30s
      group_interval: 5m
      repeat_interval: 12h
      receiver: 'slack-alerts'
      routes:
      - match:
          severity: critical
        receiver: 'slack-critical'
    receivers:
    - name: 'slack-alerts'
      slack_configs:
      - channel: '#k8s-alerts'
        send_resolved: true
        title: '[{{ .Status | toUpper }}] {{ .CommonLabels.alertname }}'
        text: |
          {{ range .Alerts }}
          *Alert:* {{ .Labels.alertname }}
          *Severity:* {{ .Labels.severity }}
          *Namespace:* {{ .Labels.namespace }}
          *Description:* {{ .Annotations.description }}
          {{ end }}
    - name: 'slack-critical'
      slack_configs:
      - channel: '#k8s-critical'
        send_resolved: true
EOF
kubectl apply -f alertmanager-config.yaml

# Tạo PrometheusRule
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: custom-alerts
  namespace: lab7
  labels:
    release: kube-prometheus
spec:
  groups:
  - name: kubernetes.rules
    rules:
    - alert: PodCrashLooping
      expr: rate(kube_pod_container_status_restarts_total{namespace="lab7"}[5m]) &gt; 0
      for: 2m
      labels:
        severity: warning
      annotations:
        description: "Pod {{ $labels.pod }} in {{ $labels.namespace }} is crash looping"
    - alert: HighMemoryUsage
      expr: |
        (container_memory_working_set_bytes{namespace="lab7"}
        / container_spec_memory_limit_bytes{namespace="lab7"}) * 100 &gt; 80
      for: 5m
      labels:
        severity: warning
      annotations:
        description: "Container {{ $labels.container }} memory > 80%"
EOF
</code></pre>

<h2>Lab 4: Deploy Loki + Grafana Alloy__HTMLTAG_88___
<pre><code class="language-bash">helm repo add grafana https://grafana.github.io/helm-charts
helm repo update

# Cài Loki
helm install loki grafana/loki \
  --namespace monitoring \
  --set loki.auth_enabled=false \
  --set loki.commonConfig.replication_factor=1 \
  --set loki.storage.type=filesystem \
  --set singleBinary.replicas=1

# Cài Grafana Alloy (thay Promtail)
cat &gt; alloy-values.yaml &lt;&lt;EOF
alloy:
  configMap:
    create: true
    content: |
      // Thu thập Kubernetes logs
      discovery.kubernetes "pods" {
        role = "pod"
      }

      discovery.relabel "pod_logs" {
        targets = discovery.kubernetes.pods.targets
        rule {
          source_labels = ["__meta_kubernetes_namespace"]
          target_label  = "namespace"
        }
        rule {
          source_labels = ["__meta_kubernetes_pod_label_app"]
          target_label  = "app"
        }
        rule {
          source_labels = ["__meta_kubernetes_pod_name"]
          target_label  = "pod"
        }
        rule {
          source_labels = ["__meta_kubernetes_pod_container_name"]
          target_label  = "container"
        }
      }

      loki.source.kubernetes "pods" {
        targets    = discovery.relabel.pod_logs.output
        forward_to = [loki.write.default.receiver]
      }

      loki.write "default" {
        endpoint {
          url = "http://loki:3100/loki/api/v1/push"
        }
      }
EOF

helm install alloy grafana/alloy \
  --namespace monitoring \
  --values alloy-values.yaml

# Verify Alloy đang chạy
kubectl get pods -n monitoring -l app.kubernetes.io/name=alloy

# Thêm Loki datasource vào Grafana
# Grafana → Configuration → Data Sources → Add Loki
# URL: http://loki:3100
</code></pre>

<h2>Lab 5: Writing LogQL Queries</h2>
<pre><code class="language-bash"># Mở Grafana Explore → Loki datasource

# Query 1: Tất cả logs từ namespace lab7
{namespace="lab7"}

# Query 2: Chỉ error logs
{namespace="lab7"} |= "error"

# Query 3: JSON logs với level filter
{namespace="monitoring"} | json | level="error"

# Query 4: Rate của error logs
rate({namespace="lab7"} |= "error" [5m])

# Query 5: Top errors
topk(5, sum by (pod) (count_over_time({namespace="lab7"} |= "error" [10m])))
</code></pre>

<h2>Lab 6: Deploy Tempo and OTel Auto-instrumentation</h2>
<pre><code class="language-bash"># Cài Tempo
helm install tempo grafana/tempo \
  --namespace monitoring \
  --set tempo.storage.trace.backend=local

# Cài OpenTelemetry Operator
kubectl apply -f https://github.com/open-telemetry/opentelemetry-operator/releases/latest/download/opentelemetry-operator.yaml

# Tạo Instrumentation
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: opentelemetry.io/v1alpha1
kind: Instrumentation
metadata:
  name: auto-instrumentation
  namespace: lab7
spec:
  exporter:
    endpoint: http://tempo-collector.monitoring:4317
  propagators:
  - tracecontext
  - baggage
  sampler:
    type: parentbased_traceidratio
    argument: "1.0"   # 100% sample cho demo
  nodejs:
    image: ghcr.io/open-telemetry/opentelemetry-operator/autoinstrumentation-nodejs:latest
EOF

# Deploy Node.js app với auto-instrumentation
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: node-app
  namespace: lab7
spec:
  replicas: 1
  selector:
    matchLabels:
      app: node-app
  template:
    metadata:
      labels:
        app: node-app
      annotations:
        instrumentation.opentelemetry.io/inject-nodejs: "true"
    spec:
      containers:
      - name: app
        image: node:20-alpine
        command: ['node', '-e', '
          const http = require("http");
          const server = http.createServer((req, res) => {
            console.log(JSON.stringify({level: "info", msg: "request", path: req.url}));
            res.end("Hello K8s Observability!");
          });
          server.listen(3000);
        ']
        ports:
        - containerPort: 3000
EOF

# Kiểm tra OTel injected env vars
kubectl exec -n lab7 deploy/node-app -- env | grep OTEL
</code></pre>

<h2>Lab 7: Correlated Dashboard</h2>
<pre><code class="language-bash"># Thêm Tempo datasource vào Grafana
# URL: http://tempo:3100

# Cấu hình derived fields trong Loki datasource:
# Name: TraceID
# Regex: traceID=(\w+)
# URL: ${__value.raw}
# Internal link → Tempo datasource

# Tạo requests để generate traces
for i in $(seq 1 20); do
  kubectl exec -n lab7 deploy/node-app -- wget -qO- http://localhost:3000
done

# Grafana Explore:
# 1. Query Loki: {namespace="lab7", app="node-app"}
# 2. Click TraceID link trong log → mở Tempo
# 3. Xem trace spans
</code></pre>

<h2>Cleanup</h2>
<pre><code class="language-bash">kubectl delete namespace lab7
helm uninstall loki alloy tempo -n monitoring
helm uninstall kube-prometheus -n monitoring
kubectl delete namespace monitoring
</code></pre>

<h2>Summary__HTMLTAG_98___
<ul>
  <li>✅ kube-prometheus-stack: Prometheus + Grafana + AlertManager</li>
  <li>✅ ServiceMonitor for custom app metrics__HTMLTAG_103___
  <li>✅ AlertManager: routing + Slack notifications</li>
  <li>✅ Loki + Grafana Alloy: log aggregation</li>
  <li>✅ LogQL queries from simple to complex__HTMLTAG_109___
  <li>✅ Tempo + OTel auto-instrumentation</li>
  <li>✅ Correlated observability: logs ↔ traces</li>
</ul>