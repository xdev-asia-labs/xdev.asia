---
id: 019c9618-0503-7000-8000-c1147ba22e15
title: 'BÀI 30: LOKI, TEMPO VÀ DISTRIBUTED TRACING'
slug: bai-30-loki-tempo-va-distributed-tracing
description: >-
  Loki log aggregation với LogQL queries. Grafana Alloy thu thập logs từ containers. Tempo distributed
  tracing. OpenTelemetry auto-instrumentation. Correlated observability: xem logs, metrics, traces
  cùng nhau trong Grafana.
duration_minutes: 90
is_free: false
video_url: null
sort_order: 30
section_title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài học</h2><p>Hiểu Loki là log aggregation system nhẹ hơn Elasticsearch, cách Grafana Alloy thu thập logs, Tempo cho distributed tracing, OpenTelemetry auto-instrumentation, và cách kết hợp Logs + Metrics + Traces trong Grafana.</p>

<h2>1. Loki — Log Aggregation</h2>

<h3>1.1 Loki vs Elasticsearch</h3>
<ul>
  <li><strong>Loki</strong>: label-based indexing (chỉ index labels, không index log content) → nhẹ hơn, rẻ hơn, phù hợp cho Kubernetes logs</li>
  <li><strong>Elasticsearch</strong>: full-text indexed → tốn nhiều memory/CPU, phù hợp khi cần full-text search</li>
</ul>
<p>Đối với Kubernetes logs (structured, labeled), Loki là lựa chọn tốt hơn trong 2026.</p>

<h3>1.2 Loki Architecture</h3>
<ul>
  <li><strong>Distributor</strong>: nhận logs từ agents, validate và fan-out</li>
  <li><strong>Ingester</strong>: buffer logs trong memory, flush ra object storage</li>
  <li><strong>Querier</strong>: thực hiện queries, merge kết quả từ ingester + storage</li>
  <li><strong>Compactor</strong>: compact chunks, retention management</li>
</ul>

<h3>1.3 LogQL — Query Language</h3>
<pre><code class="language-bash"># Cơ bản: filter theo labels
{app="nginx", namespace="production"}

# Filter log content
{app="nginx"} |= "error"
{app="nginx"} != "health"

# JSON parsing
{app="myapp"} | json | level="error"

# Regex filter
{app="nginx"} |~ "HTTP/1\\.1 [45][0-9]{2}"

# Metrics từ logs
rate({app="nginx"} |= "error" [5m])
count_over_time({app="myapp"} | json | level="error" [1h])

# Top N errors
topk(10,
  sum by (message) (
    count_over_time({namespace="production"} | json | level="error" [1h])
  )
)
</code></pre>

<h2>2. Grafana Alloy — Unified Collector</h2>
<p>Grafana Alloy thay thế tất cả các agents riêng lẻ: Promtail, OTel Collector, Prometheus agent mode.</p>
<pre><code class="language-bash"># Alloy config (River DSL)
# /etc/alloy/config.alloy

# Thu thập logs từ Kubernetes pods
discovery.kubernetes "pods" {
  role = "pod"
}

discovery.relabel "pod_logs" {
  targets = discovery.kubernetes.pods.targets
  rule {
    source_labels = ["__meta_kubernetes_pod_label_app"]
    target_label  = "app"
  }
  rule {
    source_labels = ["__meta_kubernetes_namespace"]
    target_label  = "namespace"
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

# Forward đến Loki
loki.write "default" {
  endpoint {
    url = "http://loki:3100/loki/api/v1/push"
  }
}

# Thu thập Prometheus metrics
prometheus.scrape "kubernetes" {
  targets = discovery.kubernetes.pods.targets
  forward_to = [prometheus.remote_write.grafana_cloud.receiver]
}

prometheus.remote_write "grafana_cloud" {
  endpoint {
    url = "http://prometheus:9090/api/v1/write"
  }
}
</code></pre>

<h2>3. Tempo — Distributed Tracing</h2>
<p>Tempo là distributed tracing backend của Grafana, tích hợp tốt với Loki và Prometheus.</p>

<h3>3.1 Concepts</h3>
<ul>
  <li><strong>Trace</strong>: end-to-end journey của một request (ví dụ: từ browser đến database)</li>
  <li><strong>Span</strong>: một operation trong trace (ví dụ: HTTP handler, DB query)</li>
  <li><strong>TraceID</strong>: ID duy nhất để link tất cả spans của một trace</li>
  <li><strong>SpanID</strong>: ID của span riêng lẻ</li>
</ul>

<h3>3.2 Tempo Setup</h3>
<pre><code class="language-yaml">apiVersion: apps/v1
kind: Deployment
metadata:
  name: tempo
  namespace: monitoring
spec:
  replicas: 1
  selector:
    matchLabels:
      app: tempo
  template:
    metadata:
      labels:
        app: tempo
    spec:
      containers:
      - name: tempo
        image: grafana/tempo:2.7.0
        args: ["-config.file=/etc/tempo.yaml"]
        ports:
        - containerPort: 3200   # Tempo HTTP API
        - containerPort: 4317   # OTLP gRPC
        - containerPort: 4318   # OTLP HTTP
        volumeMounts:
        - name: config
          mountPath: /etc
        - name: data
          mountPath: /tmp/tempo
      volumes:
      - name: config
        configMap:
          name: tempo-config
      - name: data
        emptyDir: {}
</code></pre>

<h2>4. OpenTelemetry Auto-instrumentation</h2>
<p>OpenTelemetry Operator tự động instrument ứng dụng mà không cần thay đổi code.</p>

<h3>4.1 Cài OTel Operator</h3>
<pre><code class="language-bash">kubectl apply -f https://github.com/open-telemetry/opentelemetry-operator/releases/latest/download/opentelemetry-operator.yaml
</code></pre>

<h3>4.2 Instrumentation CRD</h3>
<pre><code class="language-yaml">apiVersion: opentelemetry.io/v1alpha1
kind: Instrumentation
metadata:
  name: my-instrumentation
  namespace: production
spec:
  exporter:
    endpoint: http://otel-collector:4317
  propagators:
    - tracecontext
    - baggage
  sampler:
    type: parentbased_traceidratio
    argument: "0.1"   # sample 10% requests
  java:
    image: ghcr.io/open-telemetry/opentelemetry-operator/autoinstrumentation-java:latest
  nodejs:
    image: ghcr.io/open-telemetry/opentelemetry-operator/autoinstrumentation-nodejs:latest
  python:
    image: ghcr.io/open-telemetry/opentelemetry-operator/autoinstrumentation-python:latest
</code></pre>

<h3>4.3 Annotate Pod để auto-instrument</h3>
<pre><code class="language-yaml">apiVersion: apps/v1
kind: Deployment
metadata:
  name: java-app
  namespace: production
spec:
  template:
    metadata:
      annotations:
        # Bật auto-instrumentation cho Java
        instrumentation.opentelemetry.io/inject-java: "true"
        # Cho Node.js
        # instrumentation.opentelemetry.io/inject-nodejs: "true"
        # Cho Python
        # instrumentation.opentelemetry.io/inject-python: "true"
    spec:
      containers:
      - name: java-app
        image: myapp:v1.2.3
        # OTel Operator tự động inject JAVA_TOOL_OPTIONS, OTEL_SERVICE_NAME, etc.
</code></pre>

<h2>5. Correlated Observability trong Grafana</h2>
<p>Sức mạnh thực sự là khi bạn có thể đi từ Alert → Metrics → Logs → Traces trong cùng Grafana.</p>

<h3>5.1 Derived Fields trong Loki</h3>
<pre><code class="language-json">// Grafana Data Source Loki config
{
  "derivedFields": [
    {
      "name": "TraceID",
      "matcherRegex": "traceID=(\\w+)",
      "url": "${__value.raw}",
      "datasourceUid": "tempo-uid"   // link sang Tempo
    }
  ]
}
// Khi log line có "traceID=abc123" → click link → mở trace trong Tempo
</code></pre>

<h3>5.2 Exemplars — Link từ Metrics sang Traces</h3>
<pre><code class="language-yaml"># Prometheus config để enable exemplars
global:
  scrape_interval: 15s
  evaluation_interval: 15s

# Application phải expose exemplars trong metrics
# http_request_duration_seconds_bucket{le="0.1"} 24054 # {trace_id="abc123"} 0.092
</code></pre>

<h3>5.3 Grafana Explore — Correlated View</h3>
<pre><code class="language-bash"># Workflow debug:
# 1. Xem alert → metric spike ở 15:32
# 2. Grafana Explore → chuyển sang Loki → lọc logs 15:30-15:35
#    Query: {namespace="production", app="api"} |= "error" | json
# 3. Click traceID trong log line → mở Tempo
# 4. Xem trace → span nào chậm? → DB query 3.2s
</code></pre>

<h2>6. Loki vs EFK Stack — Khi nào dùng gì?</h2>
<ul>
  <li><strong>Dùng Loki</strong>: Kubernetes logs, structured logs (JSON), không cần full-text search, muốn chi phí thấp</li>
  <li><strong>Dùng Elasticsearch (EFK)</strong>: cần full-text search qua log content, compliance logging cần retention lâu, đã có infrastructure ELK hiện tại</li>
</ul>

<h2>Tóm tắt</h2>
<ul>
  <li>Loki: label-based, nhẹ, phù hợp Kubernetes logs — LogQL query language</li>
  <li>Grafana Alloy: unified collector (metrics + logs + traces)</li>
  <li>Tempo: distributed tracing, tích hợp tốt với Grafana ecosystem</li>
  <li>OTel Operator: auto-instrumentation không cần code change</li>
  <li>Correlated observability: từ alert → metric → log → trace trong Grafana</li>
</ul>
