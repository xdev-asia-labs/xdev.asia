---
id: 019e1a00-aa01-7001-c001-k8sha000803
title: 'BÀI 34: TEMPO — DISTRIBUTED TRACING'
slug: bai-34-tempo-distributed-tracing
description: >-
  Deploy Grafana Tempo cho distributed tracing,
  OpenTelemetry instrumentation, trace correlation với logs/metrics,
  sampling strategies, và trace-aware monitoring.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 34
section_title: 'Phần 8: Observability — Prometheus, Loki, Tempo'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1892" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1892)"/>

  <!-- Decorations -->
  <g>
    <circle cx="833" cy="129" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="1066" cy="162" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="799" cy="195" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1032" cy="228" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="765" cy="261" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="159" x2="1100" y2="239" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="189" x2="1050" y2="259" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="988.444863728671,142 988.444863728671,176 959,193 929.555136271329,176 929.555136271329,142 959,125" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — Bài 34</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 34: TEMPO — DISTRIBUTED TRACING</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 8: Observability — Prometheus, Loki, Tempo</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Distributed tracing concepts (spans, traces, context propagation)</li>
<li>✅ Deploy Grafana Tempo trên K8s</li>
<li>✅ OpenTelemetry Collector và SDK instrumentation</li>
<li>✅ Trace → Log → Metric correlation</li>
<li>✅ Sampling strategies (head, tail, adaptive)</li>
<li>✅ TraceQL queries</li>
</ul>

<hr>

<h2 id="phan-1-concepts">PHẦN 1: DISTRIBUTED TRACING CONCEPTS</h2>

<pre><code>
Distributed Trace Flow:

Client Request
    │
    ▼
┌──────────┐ trace_id=abc123  ┌──────────────┐  ┌──────────────┐
│  API GW  │────────────────►│ Order Service │─►│Payment Service│
│ span_id=1│                  │  span_id=2    │  │  span_id=3   │
└──────────┘                  └──────┬────────┘  └──────────────┘
                                     │
                              ┌──────▼────────┐
                              │ Inventory Svc │
                              │  span_id=4    │
                              └───────────────┘

Trace = collection of spans sharing trace_id
Span  = single operation (HTTP call, DB query, etc.)
Context Propagation = passing trace_id between services

Headers:
  traceparent: 00-abc123-span1-01
  tracestate: tempo=true
</code></pre>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Feature</th><th>Tempo</th><th>Jaeger</th><th>Zipkin</th></tr>
</thead>
<tbody>
<tr><td>Storage Backend</td><td>Object storage (S3/GCS)</td><td>Elasticsearch/Cassandra</td><td>Elasticsearch/MySQL</td></tr>
<tr><td>Cost</td><td>Very low</td><td>High (index everything)</td><td>Medium</td></tr>
<tr><td>Search</td><td>TraceQL (powerful)</td><td>Tag-based</td><td>Tag-based</td></tr>
<tr><td>Integration</td><td>Grafana native</td><td>Standalone UI</td><td>Standalone UI</td></tr>
<tr><td>Trace Discovery</td><td>Metrics → Traces</td><td>Manual search</td><td>Manual search</td></tr>
<tr><td>Protocol</td><td>OTLP, Jaeger, Zipkin</td><td>Jaeger, OTLP</td><td>Zipkin, OTLP</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-deploy-tempo">PHẦN 2: DEPLOY GRAFANA TEMPO</h2>

<pre><code class="language-bash"># Install Tempo distributed:
helm install tempo grafana/tempo-distributed \
  --namespace monitoring \
  -f tempo-values.yaml
</code></pre>

<pre><code class="language-yaml"># tempo-values.yaml:
global:
  clusterDomain: cluster.local

tempo:
  storage:
    trace:
      backend: s3
      s3:
        bucket: tempo-traces
        endpoint: ceph-rgw.storage:8080
        access_key: tempo
        secret_key: tempo-secret
        insecure: true
  
  receivers:
    otlp:
      protocols:
        grpc:
          endpoint: 0.0.0.0:4317
        http:
          endpoint: 0.0.0.0:4318
    jaeger:
      protocols:
        grpc:
          endpoint: 0.0.0.0:14250
        thrift_http:
          endpoint: 0.0.0.0:14268

distributor:
  replicas: 2
  resources:
    requests:
      cpu: 100m
      memory: 256Mi
    limits:
      cpu: 500m
      memory: 512Mi

ingester:
  replicas: 2
  persistence:
    enabled: true
    storageClass: ceph-block
    size: 10Gi

querier:
  replicas: 2

queryFrontend:
  replicas: 2

compactor:
  replicas: 1
  persistence:
    enabled: true
    storageClass: ceph-block
    size: 10Gi

metricsGenerator:
  enabled: true
  replicas: 1
  config:
    storage:
      remote_write:
        - url: http://prometheus-kube-prometheus-prometheus.monitoring:9090/api/v1/write
</code></pre>

<hr>

<h2 id="phan-3-otel-collector">PHẦN 3: OPENTELEMETRY COLLECTOR</h2>

<pre><code class="language-yaml"># otel-collector-values.yaml:
apiVersion: opentelemetry.io/v1beta1
kind: OpenTelemetryCollector
metadata:
  name: otel-collector
  namespace: monitoring
spec:
  mode: deployment
  replicas: 2
  config:
    receivers:
      otlp:
        protocols:
          grpc:
            endpoint: 0.0.0.0:4317
          http:
            endpoint: 0.0.0.0:4318

    processors:
      batch:
        send_batch_size: 1000
        timeout: 10s
      
      memory_limiter:
        check_interval: 1s
        limit_mib: 512
        spike_limit_mib: 128
      
      tail_sampling:
        decision_wait: 10s
        policies:
          # Always sample errors:
          - name: error-policy
            type: status_code
            status_code:
              status_codes: [ERROR]
          # Always sample slow requests:
          - name: latency-policy
            type: latency
            latency:
              threshold_ms: 1000
          # Sample 10% of normal requests:
          - name: probabilistic-policy
            type: probabilistic
            probabilistic:
              sampling_percentage: 10

    exporters:
      otlp/tempo:
        endpoint: tempo-distributor.monitoring:4317
        tls:
          insecure: true
      
      prometheus:
        endpoint: 0.0.0.0:8889
        resource_to_telemetry_conversion:
          enabled: true

    service:
      pipelines:
        traces:
          receivers: [otlp]
          processors: [memory_limiter, tail_sampling, batch]
          exporters: [otlp/tempo]
        metrics:
          receivers: [otlp]
          processors: [memory_limiter, batch]
          exporters: [prometheus]
</code></pre>

<hr>

<h2 id="phan-4-instrumentation">PHẦN 4: APPLICATION INSTRUMENTATION</h2>

<pre><code class="language-go">// Go OpenTelemetry setup:
package main

import (
    "context"
    "go.opentelemetry.io/otel"
    "go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc"
    "go.opentelemetry.io/otel/sdk/resource"
    sdktrace "go.opentelemetry.io/otel/sdk/trace"
    semconv "go.opentelemetry.io/otel/semconv/v1.21.0"
)

func initTracer() (*sdktrace.TracerProvider, error) {
    exporter, err := otlptracegrpc.New(context.Background(),
        otlptracegrpc.WithEndpoint("otel-collector.monitoring:4317"),
        otlptracegrpc.WithInsecure(),
    )
    if err != nil {
        return nil, err
    }
    
    tp := sdktrace.NewTracerProvider(
        sdktrace.WithBatcher(exporter),
        sdktrace.WithResource(resource.NewWithAttributes(
            semconv.SchemaURL,
            semconv.ServiceName("order-service"),
            semconv.ServiceVersion("1.0.0"),
            semconv.DeploymentEnvironment("production"),
        )),
    )
    otel.SetTracerProvider(tp)
    return tp, nil
}
</code></pre>

<pre><code class="language-go">// Trace context in HTTP handler:
func CreateOrder(w http.ResponseWriter, r *http.Request) {
    ctx, span := otel.Tracer("order-service").Start(r.Context(), "CreateOrder")
    defer span.End()
    
    span.SetAttributes(
        attribute.String("order.id", orderID),
        attribute.Int("order.items", len(items)),
    )
    
    // Call downstream service (context propagated automatically):
    resp, err := httpClient.Do(req.WithContext(ctx))
    if err != nil {
        span.RecordError(err)
        span.SetStatus(codes.Error, err.Error())
    }
}
</code></pre>

<hr>

<h2 id="phan-5-traceql">PHẦN 5: TRACEQL QUERIES</h2>

<pre><code class="language-bash"># TraceQL examples:

# Find traces by service name:
{ resource.service.name = "order-service" }

# Find error traces:
{ status = error }

# Find slow spans (> 1s):
{ duration > 1s }

# Find traces by HTTP route:
{ span.http.route = "/api/v1/orders" && status = error }

# Find traces with specific attribute:
{ span.order_id = "ORD-12345" }

# Complex: errors in payment service called from order service:
{ resource.service.name = "order-service" } >> { resource.service.name = "payment-service" && status = error }
</code></pre>

<hr>

<h2 id="phan-6-correlation">PHẦN 6: TRACE-LOG-METRIC CORRELATION</h2>

<pre><code class="language-yaml"># Grafana datasource: enable trace-to-log:
apiVersion: 1
datasources:
  - name: Tempo
    type: tempo
    url: http://tempo-query-frontend.monitoring:3100
    jsonData:
      tracesToLogs:
        datasourceUid: loki
        filterByTraceID: true
        filterBySpanID: true
      tracesToMetrics:
        datasourceUid: prometheus
        queries:
          - name: Request rate
            query: sum(rate(http_server_request_duration_seconds_count{$$__tags}[5m]))
          - name: Error rate
            query: sum(rate(http_server_request_duration_seconds_count{$$__tags, http_status_code=~"5.."}[5m]))
      serviceMap:
        datasourceUid: prometheus
</code></pre>

<pre><code>
Correlation Flow:

Grafana Dashboard (Metrics)
   │ "Error spike on order-service"
   │ Click exemplar point
   ▼
Tempo (Traces)
   │ trace_id = abc123
   │ "order-service → payment-service TIMEOUT"
   │ Click "View Logs"
   ▼
Loki (Logs)
   │ {trace_id="abc123"}
   │ "Connection refused to payment-service:8080"
   ▼
Root Cause: Payment service pod crashed (OOMKilled)
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Tempo</strong>: Trace storage on object storage → cost-efficient</li>
<li><strong>OpenTelemetry</strong>: Vendor-neutral instrumentation standard</li>
<li><strong>OTel Collector</strong>: Central pipeline, tail sampling</li>
<li><strong>TraceQL</strong>: Query traces by attributes, duration, status</li>
<li><strong>Correlation</strong>: Traces ↔ Logs ↔ Metrics = fast root cause</li>
<li><strong>Sampling</strong>: Always keep errors + slow, sample normal</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Tempo + OTel Setup</h3>
<ul>
<li>Deploy Tempo + OTel Collector</li>
<li>Instrument sample Go/Node.js app</li>
<li>View traces in Grafana</li>
</ul>

<h3 id="bt2">Bài tập 2: Trace Correlation</h3>
<ul>
<li>Configure trace-to-log linking in Grafana</li>
<li>Inject errors, find root cause via trace → log flow</li>
<li>Write TraceQL queries for slow/error traces</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 35: Grafana Dashboards & SLO</strong>, chúng ta sẽ build unified dashboards và implement SLO/SLI monitoring.</p>
