---
id: 019e1a00-aa01-7001-c001-k8sha000804
title: 'BÀI 35: GRAFANA DASHBOARDS & SLO MONITORING'
slug: bai-35-grafana-dashboards-va-slo-monitoring
description: >-
  Xây dựng Grafana unified dashboards, SLI/SLO/Error Budget monitoring,
  dashboard-as-code với Grafonnet, alerting workflows,
  và production-grade observability stack.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 35
section_title: 'Phần 8: Observability — Prometheus, Loki, Tempo'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6432" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6432)"/>

  <!-- Decorations -->
  <g>
    <circle cx="996" cy="218" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="892" cy="194" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="788" cy="170" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="684" cy="146" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1080" cy="122" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="158" x2="1100" y2="238" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="188" x2="1050" y2="258" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1036.5788383248864,191.5 1036.5788383248864,224.5 1008,241 979.4211616751136,224.5 979.4211616751135,191.5 1008,175" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — Bài 35</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 35: GRAFANA DASHBOARDS &amp; SLO</tspan>
      <tspan x="60" dy="42">MONITORING</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 8: Observability — Prometheus, Loki, Tempo</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Grafana unified dashboard design cho microservices</li>
<li>✅ SLI/SLO/Error Budget concepts và implementation</li>
<li>✅ Dashboard-as-Code với ConfigMap/Grafonnet</li>
<li>✅ Alert workflows và on-call routing</li>
<li>✅ Production observability checklist</li>
</ul>

<hr>

<h2 id="phan-1-sli-slo">PHẦN 1: SLI / SLO / ERROR BUDGET</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Concept</th><th>Definition</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td>SLI (Service Level Indicator)</td><td>Metric that measures service quality</td><td>99.2% requests < 500ms</td></tr>
<tr><td>SLO (Service Level Objective)</td><td>Target value for an SLI</td><td>99.9% availability per month</td></tr>
<tr><td>Error Budget</td><td>Allowed downtime = 1 - SLO</td><td>99.9% → 43.2 min/month</td></tr>
<tr><td>SLA (Service Level Agreement)</td><td>Contract with consequences</td><td>99.9% or refund credit</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<pre><code>
Error Budget Calculation:

SLO = 99.9% availability
Error Budget = 100% - 99.9% = 0.1%

Per month (30 days):
  0.1% × 30 × 24 × 60 = 43.2 minutes downtime allowed

Budget consumption tracking:
┌────────────────────────────────────────┐
│ Error Budget: 43.2 min/month           │
│ ████████████████░░░░ 75% remaining     │
│ Used: 10.8 min  |  Left: 32.4 min      │
│ Burn rate: 1.2x (slightly fast)        │
└────────────────────────────────────────┘
</code></pre>

<hr>

<h2 id="phan-2-slo-prometheus">PHẦN 2: SLO IMPLEMENTATION VỚI PROMETHEUS</h2>

<pre><code class="language-yaml"># PrometheusRule for SLO:
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: slo-rules
  namespace: monitoring
spec:
  groups:
    - name: slo-availability
      rules:
        # SLI: Request success rate
        - record: sli:http_requests:availability
          expr: |
            sum(rate(http_server_request_duration_seconds_count{http_status_code!~"5.."}[5m])) by (service)
            /
            sum(rate(http_server_request_duration_seconds_count[5m])) by (service)

        # SLI: Latency P99 < 500ms
        - record: sli:http_requests:latency_ok
          expr: |
            sum(rate(http_server_request_duration_seconds_bucket{le="0.5"}[5m])) by (service)
            /
            sum(rate(http_server_request_duration_seconds_count[5m])) by (service)

        # Error budget remaining (30-day window):
        - record: slo:error_budget:remaining
          expr: |
            1 - (
              (1 - sli:http_requests:availability)
              /
              (1 - 0.999)
            )

    - name: slo-alerts
      rules:
        # Burn rate alert (fast burn):
        - alert: SLOBurnRateFast
          expr: |
            (
              1 - sli:http_requests:availability
            ) / (1 - 0.999) > 14.4
          for: 2m
          labels:
            severity: critical
          annotations:
            summary: "{{ $labels.service }} SLO burn rate 14.4x (budget exhausted in 1h)"

        # Burn rate alert (slow burn):
        - alert: SLOBurnRateSlow
          expr: |
            (
              1 - sli:http_requests:availability
            ) / (1 - 0.999) > 3
          for: 30m
          labels:
            severity: warning
          annotations:
            summary: "{{ $labels.service }} SLO burn rate 3x (budget exhausted in 10h)"

        # Error budget exhausted:
        - alert: SLOErrorBudgetExhausted
          expr: slo:error_budget:remaining < 0
          for: 5m
          labels:
            severity: critical
          annotations:
            summary: "{{ $labels.service }} has exhausted its error budget"
</code></pre>

<hr>

<h2 id="phan-3-grafana-dashboards">PHẦN 3: GRAFANA DASHBOARD DESIGN</h2>

<pre><code>
Dashboard Hierarchy:

Level 1: Platform Overview
┌──────────────────────────────────────┐
│  K8s Cluster Health  │  SLO Status  │
│  Nodes: 7/7 ✅       │  Order: 99.95│
│  Pods: 142/150       │  Payment:99.9│
│  CPU: 62%  Mem: 71%  │  User: 99.99 │
└──────────────────────────────────────┘
        │ click service
        ▼
Level 2: Service Dashboard (RED Method)
┌──────────────────────────────────────┐
│  Rate: 1.2K req/s                    │
│  Errors: 0.1% (SLO: < 0.1%)         │
│  Duration: P50=12ms P99=180ms        │
│  ─────────────────────────────       │
│  Top Endpoints │ Error Breakdown     │
│  Recent Traces │ Log Errors          │
└──────────────────────────────────────┘
        │ click endpoint
        ▼
Level 3: Request Detail
┌──────────────────────────────────────┐
│  Trace: abc123                       │
│  order-svc (12ms) → payment (80ms)   │
│  Logs: 3 entries                     │
│  DB queries: 2 (5ms total)           │
└──────────────────────────────────────┘
</code></pre>

<pre><code class="language-yaml"># Dashboard as ConfigMap:
apiVersion: v1
kind: ConfigMap
metadata:
  name: service-dashboard
  namespace: monitoring
  labels:
    grafana_dashboard: "true"
data:
  service-overview.json: |
    {
      "dashboard": {
        "title": "Service Overview - RED Method",
        "tags": ["microservices", "red"],
        "templating": {
          "list": [
            {
              "name": "service",
              "type": "query",
              "query": "label_values(http_server_request_duration_seconds_count, service)",
              "refresh": 2
            },
            {
              "name": "namespace",
              "type": "query", 
              "query": "label_values(kube_pod_info, namespace)",
              "refresh": 2
            }
          ]
        },
        "panels": [
          {
            "title": "Request Rate",
            "type": "timeseries",
            "targets": [{
              "expr": "sum(rate(http_server_request_duration_seconds_count{service=\"$service\"}[5m]))"
            }]
          },
          {
            "title": "Error Rate",
            "type": "stat",
            "targets": [{
              "expr": "1 - sli:http_requests:availability{service=\"$service\"}"
            }],
            "fieldConfig": {
              "defaults": {
                "thresholds": {
                  "steps": [
                    {"color": "green", "value": 0},
                    {"color": "yellow", "value": 0.001},
                    {"color": "red", "value": 0.01}
                  ]
                },
                "unit": "percentunit"
              }
            }
          },
          {
            "title": "Latency P99",
            "type": "timeseries",
            "targets": [{
              "expr": "histogram_quantile(0.99, sum(rate(http_server_request_duration_seconds_bucket{service=\"$service\"}[5m])) by (le))"
            }]
          }
        ]
      }
    }
</code></pre>

<hr>

<h2 id="phan-4-alerting">PHẦN 4: ALERTING WORKFLOWS</h2>

<pre><code class="language-yaml"># Alertmanager routing:
apiVersion: monitoring.coreos.com/v1alpha1
kind: AlertmanagerConfig
metadata:
  name: alert-routing
  namespace: monitoring
spec:
  route:
    groupBy: ['alertname', 'service']
    groupWait: 30s
    groupInterval: 5m
    repeatInterval: 4h
    receiver: default-slack
    routes:
      - match:
          severity: critical
        receiver: pagerduty-oncall
        repeatInterval: 5m
      - match:
          severity: warning
        receiver: team-slack
        repeatInterval: 1h

  receivers:
    - name: pagerduty-oncall
      pagerdutyConfigs:
        - routingKey:
            name: pagerduty-secret
            key: routing-key
          severity: critical
    
    - name: team-slack
      slackConfigs:
        - apiURL:
            name: slack-webhook
            key: url
          channel: '#alerts-warning'
          title: '{{ .GroupLabels.alertname }}'
          text: >-
            *Service:* {{ .GroupLabels.service }}
            *Summary:* {{ range .Alerts }}{{ .Annotations.summary }}{{ end }}
</code></pre>

<hr>

<h2 id="phan-5-checklist">PHẦN 5: PRODUCTION OBSERVABILITY CHECKLIST</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Category</th><th>Item</th><th>Tool</th></tr>
</thead>
<tbody>
<tr><td>Metrics</td><td>RED method per service</td><td>Prometheus</td></tr>
<tr><td>Metrics</td><td>USE method per node</td><td>node-exporter</td></tr>
<tr><td>Metrics</td><td>SLO/Error budget</td><td>Recording rules</td></tr>
<tr><td>Logs</td><td>Centralized structured logs</td><td>Loki + Promtail</td></tr>
<tr><td>Logs</td><td>Log-based alerts</td><td>Loki ruler</td></tr>
<tr><td>Traces</td><td>Distributed tracing</td><td>Tempo + OTel</td></tr>
<tr><td>Traces</td><td>Trace-log-metric correlation</td><td>Grafana</td></tr>
<tr><td>Alerts</td><td>Multi-burn-rate SLO alerts</td><td>Alertmanager</td></tr>
<tr><td>Alerts</td><td>On-call routing</td><td>PagerDuty</td></tr>
<tr><td>Dashboards</td><td>3-level drill-down</td><td>Grafana</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>SLO</strong>: Define error budget, alert on burn rate (not just threshold)</li>
<li><strong>RED Method</strong>: Rate, Errors, Duration per service</li>
<li><strong>Dashboard hierarchy</strong>: Platform → Service → Request detail</li>
<li><strong>Dashboard-as-Code</strong>: ConfigMap + sidecar auto-provision</li>
<li><strong>Alert routing</strong>: Critical → PagerDuty, Warning → Slack</li>
<li><strong>Correlation</strong>: Metrics → Traces → Logs = full picture</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: SLO Setup</h3>
<ul>
<li>Define SLIs cho sample service (availability + latency)</li>
<li>Create recording rules + burn rate alerts</li>
<li>Build Error Budget dashboard</li>
</ul>

<h3 id="bt2">Bài tập 2: Unified Dashboard</h3>
<ul>
<li>Create 3-level dashboard hierarchy</li>
<li>Configure trace-log-metric linking</li>
<li>Simulate incident, use observability stack to find root cause</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 36: RBAC & Pod Security Standards</strong>, chúng ta sẽ bắt đầu Section 9 — Security Hardening cho K8s cluster.</p>
