---
id: 019e1a00-aa01-7001-c001-k8sha000802
title: 'BÀI 33: LOKI — CENTRALIZED LOGGING'
slug: bai-33-loki-centralized-logging
description: >-
  Deploy Grafana Loki cho centralized log aggregation,
  Promtail/Alloy log collection, LogQL queries,
  structured logging, log-based alerts, và retention policies.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 33
section_title: 'Phần 8: Observability — Prometheus, Loki, Tempo'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Kiến trúc Grafana Loki (vs ELK Stack)</li>
<li>✅ Deploy Loki Distributed mode trên K8s</li>
<li>✅ Promtail/Grafana Alloy log collection</li>
<li>✅ LogQL query language</li>
<li>✅ Structured logging best practices</li>
<li>✅ Log-based alerting</li>
</ul>

<hr>

<h2 id="phan-1-architecture">PHẦN 1: LOKI ARCHITECTURE</h2>

<pre><code>
Loki Architecture (Read/Write Path):

Write Path:
App Logs → Promtail → Distributor → Ingester → Object Storage
                                       ↓
                                   Index Store

Read Path:
Grafana → Query Frontend → Querier → Index + Chunks
                                    (parallel query)

Components:
┌──────────┐  ┌──────────────┐  ┌──────────────┐
│ Promtail │  │  Distributor │  │   Ingester   │
│(DaemonSet│─►│  (validates  │─►│  (write-ahead│
│ per node)│  │   + routes)  │  │   log + flush│
└──────────┘  └──────────────┘  └──────┬───────┘
                                       │
                                ┌──────▼───────┐
                                │Object Storage│
                                │(Ceph S3/MinIO│
                                │  /local disk)│
                                └──────────────┘
</code></pre>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Feature</th><th>Loki</th><th>ELK (Elasticsearch)</th></tr>
</thead>
<tbody>
<tr><td>Indexing</td><td>Labels only (metadata)</td><td>Full-text index (all content)</td></tr>
<tr><td>Storage Cost</td><td>Low (compressed chunks)</td><td>High (inverted index)</td></tr>
<tr><td>Resource Usage</td><td>Low</td><td>High (RAM, CPU)</td></tr>
<tr><td>Query Speed</td><td>Slower for full-text</td><td>Fast for full-text</td></tr>
<tr><td>Best For</td><td>K8s logs, cost-efficient</td><td>Complex log analytics</td></tr>
<tr><td>Query Language</td><td>LogQL</td><td>KQL/Lucene</td></tr>
<tr><td>Integration</td><td>Grafana native</td><td>Kibana</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-install">PHẦN 2: DEPLOY LOKI</h2>

<pre><code class="language-bash"># Install Loki:
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update

helm install loki grafana/loki \
  --namespace monitoring \
  -f loki-values.yaml
</code></pre>

<pre><code class="language-yaml"># loki-values.yaml:
loki:
  auth_enabled: false
  
  commonConfig:
    replication_factor: 1
  
  schemaConfig:
    configs:
      - from: "2024-01-01"
        store: tsdb
        object_store: s3
        schema: v13
        index:
          prefix: loki_index_
          period: 24h
  
  storage:
    type: s3
    bucketNames:
      chunks: loki-chunks
      ruler: loki-ruler
    s3:
      endpoint: ceph-rgw.storage:8080
      accessKeyId: loki
      secretAccessKey: loki-secret
      s3ForcePathStyle: true
      insecure: true
  
  limits_config:
    retention_period: 30d
    max_query_length: 720h
    max_entries_limit_per_query: 5000
    ingestion_rate_mb: 10
    ingestion_burst_size_mb: 20

deploymentMode: SimpleScalable

backend:
  replicas: 2
  persistence:
    storageClass: ceph-block
    size: 10Gi

read:
  replicas: 2

write:
  replicas: 2
  persistence:
    storageClass: ceph-block
    size: 10Gi

# Enable Promtail as DaemonSet:
gateway:
  replicas: 2
</code></pre>

<hr>

<h2 id="phan-3-promtail">PHẦN 3: LOG COLLECTION VỚI PROMTAIL</h2>

<pre><code class="language-bash"># Install Promtail:
helm install promtail grafana/promtail \
  --namespace monitoring \
  -f promtail-values.yaml
</code></pre>

<pre><code class="language-yaml"># promtail-values.yaml:
config:
  clients:
    - url: http://loki-gateway.monitoring/loki/api/v1/push

  scrape_configs:
    # Kubernetes pod logs:
    - job_name: kubernetes-pods
      kubernetes_sd_configs:
        - role: pod
      relabel_configs:
        - source_labels: [__meta_kubernetes_pod_label_app]
          target_label: app
        - source_labels: [__meta_kubernetes_namespace]
          target_label: namespace
        - source_labels: [__meta_kubernetes_pod_name]
          target_label: pod
        - source_labels: [__meta_kubernetes_pod_container_name]
          target_label: container
      pipeline_stages:
        # Parse JSON logs:
        - json:
            expressions:
              level: level
              message: msg
              timestamp: timestamp
              trace_id: trace_id
        - labels:
            level:
        - timestamp:
            source: timestamp
            format: RFC3339Nano

resources:
  requests:
    cpu: 50m
    memory: 64Mi
  limits:
    cpu: 200m
    memory: 256Mi

tolerations:
  - effect: NoSchedule
    operator: Exists
</code></pre>

<hr>

<h2 id="phan-4-logql">PHẦN 4: LOGQL QUERIES</h2>

<pre><code class="language-bash"># Basic log queries:

# All logs from a service:
{app="order-service"}

# Filter by namespace:
{namespace="default", app="order-service"}

# Text filter:
{app="order-service"} |= "error"
{app="order-service"} != "healthcheck"
{app="order-service"} |~ "timeout|connection refused"

# JSON parsing:
{app="order-service"} | json | level="error"
{app="order-service"} | json | status_code >= 500

# Log rate (logs/sec):
rate({app="order-service"} |= "error" [5m])

# Count errors by service:
sum by(app) (count_over_time({namespace="default"} | json | level="error" [1h]))

# Top 10 error messages:
topk(10, sum by(message) (count_over_time({app="order-service"} | json | level="error" [1h])))

# P99 response time from access logs:
quantile_over_time(0.99, {app="nginx"} | json | unwrap response_time [5m]) by (path)
</code></pre>

<hr>

<h2 id="phan-5-structured-logging">PHẦN 5: STRUCTURED LOGGING BEST PRACTICES</h2>

<pre><code class="language-json">// ✅ Good: Structured JSON log
{
  "timestamp": "2024-06-15T10:30:00Z",
  "level": "error",
  "msg": "Failed to process order",
  "service": "order-service",
  "trace_id": "abc123def456",
  "span_id": "span789",
  "order_id": "ORD-12345",
  "error": "connection refused",
  "duration_ms": 1500
}

// ❌ Bad: Unstructured log
// 2024-06-15 10:30:00 ERROR Failed to process order ORD-12345: connection refused
</code></pre>

<pre><code class="language-go">// Go structured logging (slog):
import "log/slog"

logger := slog.New(slog.NewJSONHandler(os.Stdout, &slog.HandlerOptions{
    Level: slog.LevelInfo,
}))

logger.Error("Failed to process order",
    "order_id", orderID,
    "error", err,
    "duration_ms", elapsed.Milliseconds(),
    "trace_id", span.SpanContext().TraceID().String(),
)
</code></pre>

<hr>

<h2 id="phan-6-log-alerts">PHẦN 6: LOG-BASED ALERTING</h2>

<pre><code class="language-yaml"># Loki ruler (alert on log patterns):
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: loki-log-alerts
  namespace: monitoring
spec:
  groups:
    - name: log-alerts
      rules:
        - alert: HighErrorLogRate
          expr: |
            sum(rate({namespace="default"} | json | level="error" [5m])) by (app) > 1
          for: 5m
          labels:
            severity: warning
          annotations:
            summary: "High error log rate on {{ $labels.app }}"

        - alert: OOMKillDetected
          expr: |
            count_over_time({namespace="default"} |= "OOMKilled" [5m]) > 0
          labels:
            severity: critical
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Loki</strong>: Index labels only → cost-efficient, Grafana-native</li>
<li><strong>Promtail</strong>: DaemonSet, auto-collect K8s pod logs</li>
<li><strong>LogQL</strong>: Powerful query language, log-to-metrics conversion</li>
<li><strong>Structured logging</strong>: JSON format, include trace_id/span_id</li>
<li><strong>Pipeline stages</strong>: Parse, label, timestamp extraction</li>
<li><strong>Retention</strong>: Configure per-tenant, 30-day default</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Loki Setup</h3>
<ul>
<li>Deploy Loki + Promtail</li>
<li>Add Loki datasource in Grafana</li>
<li>Write LogQL queries to find errors</li>
</ul>

<h3 id="bt2">Bài tập 2: Structured Logging</h3>
<ul>
<li>Implement JSON logging in sample app</li>
<li>Configure Promtail pipeline to extract level, trace_id</li>
<li>Create log-based alert rule</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 34: Tempo — Distributed Tracing</strong>, chúng ta sẽ setup distributed tracing cho microservices.</p>
