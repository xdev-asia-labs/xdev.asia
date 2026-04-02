---
id: 019e1a00-aa01-7001-c001-k8sha001203
title: 'BÀI 48: PERFORMANCE TESTING & OPTIMIZATION'
slug: bai-48-performance-testing-va-optimization
description: >-
  Load testing với k6/Locust, performance profiling,
  bottleneck identification, K8s cluster tuning,
  application optimization, và benchmark reporting.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 48
section_title: 'Phần 12: Production Operations & Capstone Project'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Load testing với k6 (Grafana k6)</li>
<li>✅ Performance profile types (load, stress, spike, soak)</li>
<li>✅ Bottleneck identification methodology</li>
<li>✅ K8s cluster tuning (kernel, containerd, kubelet)</li>
<li>✅ Application-level optimization</li>
</ul>

<hr>

<h2 id="phan-1-k6-setup">PHẦN 1: LOAD TESTING VỚI K6</h2>

<pre><code class="language-bash"># Install k6:
# Option 1: Binary
curl -L https://github.com/grafana/k6/releases/download/v0.49.0/k6-v0.49.0-linux-amd64.tar.gz | tar xz
mv k6-v0.49.0-linux-amd64/k6 /usr/local/bin/

# Option 2: Run in K8s:
kubectl run k6-test --image=grafana/k6 --rm -it -- run - < test.js
</code></pre>

<pre><code class="language-javascript">// load-test.js:
import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate, Trend } from 'k6/metrics';

const errorRate = new Rate('errors');
const orderLatency = new Trend('order_latency');

export const options = {
  stages: [
    { duration: '2m', target: 50 },    // Ramp up
    { duration: '5m', target: 200 },   // Sustained load
    { duration: '2m', target: 500 },   // Peak
    { duration: '3m', target: 200 },   // Scale down
    { duration: '1m', target: 0 },     // Cool down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500', 'p(99)<1000'],
    errors: ['rate<0.01'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  // Health check:
  const healthRes = http.get('http://api-gateway/health');
  check(healthRes, { 'health ok': (r) => r.status === 200 });

  // Create order:
  const orderPayload = JSON.stringify({
    user_id: `user-${__VU}`,
    items: [
      { product_id: 'PROD-001', quantity: 1 },
      { product_id: 'PROD-002', quantity: 2 },
    ],
  });

  const orderRes = http.post('http://api-gateway/api/v1/orders', orderPayload, {
    headers: { 'Content-Type': 'application/json' },
  });

  check(orderRes, {
    'order created': (r) => r.status === 201,
  });

  errorRate.add(orderRes.status !== 201);
  orderLatency.add(orderRes.timings.duration);

  sleep(1);
}
</code></pre>

<pre><code class="language-bash"># Run test:
k6 run load-test.js

# Run with Prometheus output:
k6 run --out experimental-prometheus-rw load-test.js

# Run with HTML report:
k6 run --out json=results.json load-test.js
</code></pre>

<hr>

<h2 id="phan-2-test-types">PHẦN 2: PERFORMANCE TEST TYPES</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Type</th><th>Goal</th><th>Pattern</th><th>Duration</th></tr>
</thead>
<tbody>
<tr><td>Load Test</td><td>Verify SLO under expected load</td><td>Gradual ramp to target</td><td>15-30 min</td></tr>
<tr><td>Stress Test</td><td>Find breaking point</td><td>Increase until failure</td><td>30+ min</td></tr>
<tr><td>Spike Test</td><td>Test sudden traffic burst</td><td>Instant jump to peak</td><td>10-15 min</td></tr>
<tr><td>Soak Test</td><td>Find memory leaks, degradation</td><td>Sustained moderate load</td><td>4-24 hours</td></tr>
<tr><td>Breakpoint Test</td><td>Find max throughput</td><td>Step increase until errors</td><td>Variable</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<pre><code class="language-javascript">// Stress test (find breaking point):
export const options = {
  stages: [
    { duration: '2m', target: 100 },
    { duration: '2m', target: 300 },
    { duration: '2m', target: 500 },
    { duration: '2m', target: 800 },
    { duration: '2m', target: 1000 },
    { duration: '5m', target: 1500 },  // Push beyond expected
    { duration: '2m', target: 0 },
  ],
};

// Spike test:
export const options = {
  stages: [
    { duration: '1m', target: 50 },
    { duration: '10s', target: 1000 },   // Instant spike
    { duration: '3m', target: 1000 },
    { duration: '10s', target: 50 },     // Instant drop
    { duration: '2m', target: 50 },
  ],
};
</code></pre>

<hr>

<h2 id="phan-3-bottleneck">PHẦN 3: BOTTLENECK IDENTIFICATION</h2>

<pre><code>
Bottleneck Analysis Flow:

1. Run load test → observe metrics
2. Check RED metrics per service
3. Find slowest span in trace

Bottleneck Layers:
┌── Application  (slow queries, N+1, no caching)
├── Runtime      (GC pauses, thread pool exhaustion)
├── Container    (CPU throttling, OOM)
├── Kubernetes   (scheduling, DNS, service routing)
├── Network      (bandwidth, latency, packet loss)
├── Storage      (IOPS, throughput, latency)
└── Hardware     (CPU, RAM, NIC saturation)

Diagnosis Commands:
# CPU throttling:
cat /sys/fs/cgroup/cpu/cpu.stat | grep throttled

# DNS resolution time:
kubectl exec test-pod -- time nslookup order-service

# Network latency:
kubectl exec test-pod -- curl -w "connect:%{time_connect} ttfb:%{time_starttransfer} total:%{time_total}\n" -s -o /dev/null http://order-service:8080/health
</code></pre>

<hr>

<h2 id="phan-4-tuning">PHẦN 4: CLUSTER & APPLICATION TUNING</h2>

<pre><code class="language-bash"># Kernel tuning for high-traffic nodes:
cat >> /etc/sysctl.d/99-k8s-perf.conf << 'EOF'
# Network:
net.core.somaxconn = 65535
net.ipv4.tcp_max_syn_backlog = 65535
net.core.netdev_max_backlog = 65535
net.ipv4.ip_local_port_range = 1024 65535
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_fin_timeout = 15

# File descriptors:
fs.file-max = 2097152
fs.inotify.max_user_watches = 524288

# Memory:
vm.max_map_count = 262144
EOF

sysctl --system
</code></pre>

<pre><code class="language-yaml"># Container resource optimization:
# Before (over-provisioned):
resources:
  requests:
    cpu: 1000m
    memory: 1Gi
  limits:
    cpu: 2000m
    memory: 2Gi

# After (right-sized based on VPA recommendations):
resources:
  requests:
    cpu: 250m
    memory: 256Mi
  limits:
    cpu: 500m
    memory: 512Mi

# Application tuning:
# - Connection pooling (database, HTTP clients)
# - Add caching layer (Redis)
# - Optimize queries (indexes, query plans)
# - Reduce payload size (compression, pagination)
# - Async processing (message queue for heavy tasks)
</code></pre>

<hr>

<h2 id="phan-5-reporting">PHẦN 5: BENCHMARK REPORTING</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Metric</th><th>Target</th><th>Actual</th><th>Status</th></tr>
</thead>
<tbody>
<tr><td>Max throughput</td><td>1000 req/s</td><td>1250 req/s</td><td>✅ PASS</td></tr>
<tr><td>P95 latency</td><td>< 500ms</td><td>320ms</td><td>✅ PASS</td></tr>
<tr><td>P99 latency</td><td>< 1000ms</td><td>780ms</td><td>✅ PASS</td></tr>
<tr><td>Error rate</td><td>< 0.1%</td><td>0.02%</td><td>✅ PASS</td></tr>
<tr><td>CPU at peak</td><td>< 80%</td><td>65%</td><td>✅ PASS</td></tr>
<tr><td>Memory at peak</td><td>< 80%</td><td>72%</td><td>✅ PASS</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>k6</strong>: Modern load testing tool, scriptable, Grafana integration</li>
<li><strong>Test types</strong>: Load, Stress, Spike, Soak — each serves different purpose</li>
<li><strong>Bottleneck analysis</strong>: Layer by layer, trace-guided</li>
<li><strong>Right-sizing</strong>: VPA recommendations → reduce waste</li>
<li><strong>Kernel tuning</strong>: Increase connection limits, file descriptors</li>
<li><strong>Report</strong>: Document baseline, compare after optimization</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Load Test</h3>
<ul>
<li>Write k6 script for API endpoints</li>
<li>Run load test, stress test, spike test</li>
<li>Monitor Grafana dashboards during test</li>
</ul>

<h3 id="bt2">Bài tập 2: Optimization</h3>
<ul>
<li>Identify top 3 bottlenecks from test results</li>
<li>Apply optimizations (caching, right-sizing, tuning)</li>
<li>Re-test and compare improvement</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 49: Troubleshooting Guide</strong>, chúng ta sẽ học systematic troubleshooting cho K8s production.</p>
