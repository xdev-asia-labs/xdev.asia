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
