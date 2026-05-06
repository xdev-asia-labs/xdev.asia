---
id: 019e1a00-aa01-7001-c001-k8sha001203
title: 'LESSON 48: PERFORMANCE TESTING & OPTIMIZATION'
slug: bai-48-performance-testing-va-optimization
description: Load testing with k6/Locust, performance profiling, bottleneck identification, K8s cluster tuning, application optimization, and benchmark reporting.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 48
section_title: 'Part 12: Production Operations & Capstone Project'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Deploy Microservices On-Premises with Kubernetes HA
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6665" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6665)"/>

  <!-- Decorations -->
  <g>
    <circle cx="687" cy="251" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="774" cy="238" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="861" cy="225" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="948" cy="212" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="1035" cy="199" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="201" x2="1100" y2="281" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="231" x2="1050" y2="301" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1032.1769145362398,183 1032.1769145362398,219 1001,237 969.8230854637602,219 969.8230854637602,183 1001,165" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — Lesson 48</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 48: PERFORMANCE TESTING &amp; OPTIMIZATION</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises with Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 12: Production Operations &amp; Capstone Project</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 LESSON OBJECTIVE__HTMLTAG_66___
<ul>
<li>✅ Load testing với k6 (Grafana k6)</li>
<li>✅ Performance profile types (load, stress, spike, soak)</li>
<li>✅ Bottleneck identification methodology</li>
<li>✅ K8s cluster tuning (kernel, containerd, kubelet)</li>
<li>✅ Application-level optimization</li>
</ul>

<hr>

<h2 id="phan-1-k6-setup">PART 1: LOAD TESTING WITH K6</h2>

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

<h2 id="phan-2-test-types">PART 2: PERFORMANCE TEST TYPES</h2><!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Type_</th><th>_Goal</th><th>Pattern_</th><th>Duration</th></tr>
</thead>
<tbody>
<tr><td>Load Test</td><td>Verify SLO under expected load</td><td>Gradual ramp to target_</td><td>15-30 min</td></tr>
<tr><td>Stress Test</td><td>Find breaking point_</td><td>Increase until failure_</td><td>30+ min</td></tr>
<tr><td>Spike Test</td><td>Test sudden traffic burst</td><td>Instant jump to peak_</td><td>10-15 min</td></tr>
<tr><td>Soak Test</td><td>Find memory leaks, degradation</td><td>Sustained moderate load_</td><td>4-24 hours</td></tr>
<tr><td>Breakpoint Test_</td><td>Find max throughput_</td><td>Step increase until errors</td><td>Variable</td></tr>
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

<h2 id="phan-3-bottleneck">PART 3: BOTTLENECK IDENTIFICATION</h2>

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

<h2 id="phan-4-tuning">PART 4: CLUSTER & APPLICATION TUNING</h2>

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

<h2 id="phan-5-reporting">PART 5: BENCHMARK REPORTING</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Metric_</th><th>Target</th><th>Actual</th><th>Status</th></tr>
</thead>
<tbody>
<tr><td>Max throughput_</td><td>1000 req/s</td><td>1250 req/s</td><td>✅ PASS</td></tr>
<tr><td>P95 latency</td><td>< 500ms</td><td>320ms</td><td>✅ PASS_</td></tr>
<tr><td>P99 latency</td><td>< 1000ms</td><td>780ms</td><td>✅ PASS_</td></tr>
<tr><td>Error rate</td><td>< 0.1%</td><td>0.02%</td><td>✅ PASS_</td></tr>
<tr><td>CPU at peak</td><td>< 80%</td><td>65%</td><td>✅ PASS_</td></tr>
<tr><td>Memory at peak</td><td>< 80%</td><td>72%</td><td>✅ PASS_</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr><h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>k6</strong>: Modern load testing tool, scriptable, Grafana integration</li>
<li><strong>Test types</strong>: Load, Stress, Spike, Soak — each serves different purpose</li>
<li><strong>Bottleneck analysis</strong>: Layer by layer, trace-guided</li>
<li><strong>Right-sizing</strong>: VPA recommendations → reduce waste</li>
<li><strong>Kernel tuning</strong>: Increase connection limits, file descriptors</li>
<li><strong>Report</strong>: Document baseline, compare after optimization</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 EXERCISE</h2>

<h3 id="bt1">Exercise 1: Load Test</h3>
<ul>
<li>Write k6 script for API endpoints__HTMLTAG_276___
<li>Run load test, stress test, spike test__HTMLTAG_278___
<li>Monitor Grafana dashboards during test__HTMLTAG_280___
</ul>

<h3 id="bt2">Exercise 2: Optimization</h3>
<ul>
<li>Identify top 3 bottlenecks from test results</li>
<li>Apply optimizations (caching, right-sizing, tuning)</li>
<li>Re-test and compare improvement</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 NEXT POST</h2>
<p>In <strong>Lesson 49: Troubleshooting Guide</strong>, we will learn systematic troubleshooting for K8s production.</p>