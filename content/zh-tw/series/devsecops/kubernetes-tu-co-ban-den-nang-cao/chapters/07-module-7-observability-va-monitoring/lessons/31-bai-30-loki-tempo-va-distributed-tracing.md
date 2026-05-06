---
id: 019c9618-0503-7000-8000-c1147ba22e15
title: 第 30 課：LOKI、TEMPO 和分散式追蹤
slug: bai-30-loki-tempo-va-distributed-tracing
description: >-
  使用 LogQL 查詢進行 Loki 日誌聚合。 Grafana Alloy 從容器中收集日誌。 Tempo 分散式追蹤。 OpenTelemetry
  自動檢測。相關的可觀察性：在 Grafana 中一起查看日誌、指標、追蹤。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 30
section_title: 模組 7：可觀察性和監控
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3228" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3228)"/>

  <!-- Decorations -->
  <g>
    <circle cx="981" cy="273" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="862" cy="94" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="743" cy="175" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="624" cy="256" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="1005" cy="77" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="163" x2="1100" y2="243" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="193" x2="1050" y2="263" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="995.9089653438086,144 995.9089653438086,182 963,201 930.0910346561914,182 930.0910346561914,144 963,125" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — 第 30 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 30 課：LOKI、TEMPO 和分散式追蹤</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 7: Observability &amp; Monitoring</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標</h2><p>了解Loki是一個比Elasticsearch更輕的日誌聚合系統，Grafana Alloy如何收集日誌，用於分散式追蹤的Tempo，OpenTelemetry自動檢測，以及如何在Grafana中組合Logs + Metrics + Traces。</p>

<h2>1. Loki——日誌聚合</h2>

<h3>1.1 Loki 與 Elasticsearch</h3>
<ul>
  <li><strong>洛基</strong>：基於標籤的索引（只索引標籤，不索引日誌內容）→更輕，更便宜，適合Kubernetes日誌</li>
  <li><strong>彈性搜尋</strong>：全文索引→消耗大量記憶體/CPU，適合需要全文檢索的情況</li>
</ul>
<p>對於 Kubernetes 日誌（結構化、標記），Loki 是 2026 年更好的選擇。</p>

<h3>1.2 Loki架構</h3>
<ul>
  <li><strong>經銷商</strong>：從代理接收日誌，驗證並扇出</li>
  <li><strong>攝取者</strong>：緩衝日誌在記憶體中，刷新到物件存儲</li>
  <li><strong>查詢者</strong>：執行查詢，合併 inester + 儲存的結果</li>
  <li><strong>壓實機</strong>：緊湊塊，保留管理</li>
</ul>

<h3>1.3 LogQL——查詢語言</h3>
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

<h2>2. Grafana Alloy－統一收集器</h2>
<p>Grafana Alloy 取代了所有個體代理：Promtail、OTel Collector、Prometheus 代理模式。</p>
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

<h2>3. Tempo——分散式追蹤</h2>
<p>Tempo 是 Grafana 的分散式追蹤後端，與 Loki 和 Prometheus 整合良好。</p>

<h3>3.1 概念</h3>
<ul>
  <li><strong>蹤跡</strong>：請求的端到端旅程（例如，從瀏覽器到資料庫）</li>
  <li><strong>跨距</strong>：追蹤中的操作（例如 HTTP 處理程序、資料庫查詢）</li>
  <li><strong>追蹤ID</strong>：連結追蹤的所有跨度的唯一 ID</li>
  <li><strong>跨度ID</strong>：單一跨度的ID</li>
</ul>

<h3>3.2 速度設定</h3>
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

<h2>4. OpenTelemetry自動檢測</h2>
<p>OpenTelemetry Operator 無需更改程式碼即可自動偵測應用程式。</p>

<h3>4.1 安裝OTel運營商</h3>
<pre><code class="language-bash">kubectl apply -f https://github.com/open-telemetry/opentelemetry-operator/releases/latest/download/opentelemetry-operator.yaml
</code></pre>

<h3>4.2 儀表CRD</h3>
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

<h3>4.3 為自動儀表註解 Pod</h3>
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

<h2>5. Grafana 中的相關可觀察性</h2>
<p>真正的力量在於您可以在 Grafana 中從警報 → 指標 → 日誌 → 追蹤。</p>

<h3>5.1 Loki 中的派生字段</h3>
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

<h3>5.2 範例－從指標到軌跡的鏈接</h3>
<pre><code class="language-yaml"># Prometheus config để enable exemplars
global:
  scrape_interval: 15s
  evaluation_interval: 15s

# Application phải expose exemplars trong metrics
# http_request_duration_seconds_bucket{le="0.1"} 24054 # {trace_id="abc123"} 0.092
</code></pre>

<h3>5.3 Grafana Explore——相關視圖</h3>
<pre><code class="language-bash"># Workflow debug:
# 1. Xem alert → metric spike ở 15:32
# 2. Grafana Explore → chuyển sang Loki → lọc logs 15:30-15:35
#    Query: {namespace="production", app="api"} |= "error" | json
# 3. Click traceID trong log line → mở Tempo
# 4. Xem trace → span nào chậm? → DB query 3.2s
</code></pre>

<h2>6. Loki 與 EFK Stack — 何時使用什麼？</h2>
<ul>
  <li><strong>使用洛基</strong>：Kubernetes日誌，結構化日誌（JSON），不需要全文檢索，想要低成本</li>
  <li><strong>使用 Elasticsearch (EFK)</strong>：需要透過日誌內容進行全文搜索，合規日誌需要長期保留，而且已經有現有的ELK基礎設施</li>
</ul>

<h2>總結</h2>
<ul>
  <li>Loki：基於標籤的、輕量級的、適合Kubernetes日誌－LogQL查詢語言</li>
  <li>Grafana Alloy：統一收集器（指標+日誌+追蹤）</li>
  <li>Tempo：分散式追踪，與 Grafana 生態系統完美集成</li>
  <li>OTel 操作員：自動偵測，無需更改程式碼</li>
  <li>相關可觀測性：從 Grafana 中的警報 → 指標 → 日誌 → 跟踪</li>
</ul>
