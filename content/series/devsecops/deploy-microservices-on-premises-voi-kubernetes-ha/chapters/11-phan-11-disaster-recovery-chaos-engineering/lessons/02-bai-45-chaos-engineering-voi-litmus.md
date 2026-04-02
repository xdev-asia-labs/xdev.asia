---
id: 019e1a00-aa01-7001-c001-k8sha001102
title: 'BÀI 45: CHAOS ENGINEERING VỚI LITMUS'
slug: bai-45-chaos-engineering-voi-litmus
description: >-
  Chaos Engineering principles, Litmus Chaos trên K8s,
  pod/node/network chaos experiments,
  steady-state hypothesis, GameDay planning,
  và resilience scoring.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 45
section_title: 'Phần 11: Disaster Recovery & Chaos Engineering'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Chaos Engineering principles (Netflix model)</li>
<li>✅ Deploy Litmus Chaos trên K8s</li>
<li>✅ Pod chaos: kill, CPU stress, memory stress</li>
<li>✅ Node chaos: drain, network partition</li>
<li>✅ Steady-state hypothesis và probes</li>
<li>✅ GameDay planning và resilience scoring</li>
</ul>

<hr>

<h2 id="phan-1-principles">PHẦN 1: CHAOS ENGINEERING PRINCIPLES</h2>

<pre><code>
Chaos Engineering Process:

1. Define Steady State
   "Order service handles 1000 req/s with P99 < 200ms"

2. Hypothesize
   "If we kill 1 pod, the system auto-recovers in < 30s"

3. Inject Failure
   Kill pod / network partition / CPU stress

4. Observe
   Metrics, logs, user impact

5. Learn & Improve
   Fix weaknesses, update runbooks

┌─────────────┐     ┌──────────────┐     ┌───────────┐
│Define Steady │────►│   Inject     │────►│  Observe  │
│   State      │     │   Chaos      │     │  & Learn  │
└─────────────┘     └──────────────┘     └─────┬─────┘
       ▲                                        │
       └────────────────────────────────────────┘
                    (improve & repeat)
</code></pre>

<hr>

<h2 id="phan-2-litmus">PHẦN 2: DEPLOY LITMUS CHAOS</h2>

<pre><code class="language-bash"># Install Litmus:
helm repo add litmuschaos https://litmuschaos.github.io/litmus-helm/
helm install litmus litmuschaos/litmus \
  --namespace litmus \
  --create-namespace \
  --set portal.frontend.service.type=ClusterIP
</code></pre>

<pre><code class="language-yaml"># ChaosEngine: pod-kill experiment
apiVersion: litmuschaos.io/v1alpha1
kind: ChaosEngine
metadata:
  name: order-service-chaos
  namespace: default
spec:
  engineState: active
  appinfo:
    appns: default
    applabel: app=order-service
    appkind: deployment
  chaosServiceAccount: litmus-admin
  experiments:
    - name: pod-delete
      spec:
        components:
          env:
            - name: TOTAL_CHAOS_DURATION
              value: "60"
            - name: CHAOS_INTERVAL
              value: "10"
            - name: FORCE
              value: "true"
            - name: PODS_AFFECTED_PERC
              value: "50"
        probe:
          - name: check-availability
            type: httpProbe
            mode: Continuous
            httpProbe/inputs:
              url: http://order-service:8080/health
              method:
                get:
                  criteria: ==
                  responseCode: "200"
            runProperties:
              probeTimeout: 5s
              interval: 5s
              retry: 3
              probePollingInterval: 2s
</code></pre>

<hr>

<h2 id="phan-3-experiments">PHẦN 3: CHAOS EXPERIMENTS</h2>

<pre><code class="language-yaml"># CPU stress:
apiVersion: litmuschaos.io/v1alpha1
kind: ChaosEngine
metadata:
  name: cpu-stress-test
spec:
  engineState: active
  appinfo:
    appns: default
    applabel: app=order-service
    appkind: deployment
  experiments:
    - name: pod-cpu-hog
      spec:
        components:
          env:
            - name: CPU_CORES
              value: "2"
            - name: TOTAL_CHAOS_DURATION
              value: "120"
            - name: CPU_LOAD
              value: "80"

---
# Memory stress:
apiVersion: litmuschaos.io/v1alpha1
kind: ChaosEngine
metadata:
  name: memory-stress-test
spec:
  experiments:
    - name: pod-memory-hog
      spec:
        components:
          env:
            - name: MEMORY_CONSUMPTION
              value: "500"
            - name: TOTAL_CHAOS_DURATION
              value: "120"

---
# Network chaos (latency injection):
apiVersion: litmuschaos.io/v1alpha1
kind: ChaosEngine
metadata:
  name: network-chaos-test
spec:
  experiments:
    - name: pod-network-latency
      spec:
        components:
          env:
            - name: NETWORK_LATENCY
              value: "200"
            - name: TOTAL_CHAOS_DURATION
              value: "120"
            - name: DESTINATION_IPS
              value: "10.96.0.0/12"
            - name: NETWORK_INTERFACE
              value: "eth0"

---
# Node drain:
apiVersion: litmuschaos.io/v1alpha1
kind: ChaosEngine
metadata:
  name: node-drain-test
spec:
  experiments:
    - name: node-drain
      spec:
        components:
          env:
            - name: TOTAL_CHAOS_DURATION
              value: "120"
            - name: TARGET_NODE
              value: "worker-01"
</code></pre>

<hr>

<h2 id="phan-4-probes">PHẦN 4: STEADY-STATE PROBES</h2>

<pre><code class="language-yaml"># HTTP probe: service must respond 200:
probe:
  - name: http-health-check
    type: httpProbe
    mode: Continuous
    httpProbe/inputs:
      url: http://order-service:8080/health
      method:
        get:
          criteria: ==
          responseCode: "200"
    runProperties:
      probeTimeout: 5s
      interval: 5s
      retry: 3

# Prometheus probe: error rate must stay below SLO:
probe:
  - name: error-rate-check
    type: promProbe
    mode: Edge
    promProbe/inputs:
      endpoint: http://prometheus.monitoring:9090
      query: >
        sum(rate(http_server_request_duration_seconds_count{service="order-service",http_status_code=~"5.."}[2m]))
        /
        sum(rate(http_server_request_duration_seconds_count{service="order-service"}[2m]))
      comparator:
        type: float
        criteria: "<="
        value: "0.01"
    runProperties:
      probeTimeout: 10s
      interval: 30s

# Command probe: check database connectivity:
probe:
  - name: db-connectivity
    type: cmdProbe
    mode: Edge
    cmdProbe/inputs:
      command: "pg_isready -h postgresql-rw.database -p 5432"
      comparator:
        type: string
        criteria: contains
        value: "accepting connections"
    runProperties:
      probeTimeout: 10s
</code></pre>

<hr>

<h2 id="phan-5-gameday">PHẦN 5: GAMEDAY PLANNING</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Phase</th><th>Activity</th><th>Duration</th></tr>
</thead>
<tbody>
<tr><td>Preparation</td><td>Define experiments, notify teams, ensure monitoring</td><td>1 week before</td></tr>
<tr><td>Briefing</td><td>Review experiments, assign observers, confirm rollback</td><td>30 min</td></tr>
<tr><td>Execution</td><td>Run chaos experiments one-by-one</td><td>2-4 hours</td></tr>
<tr><td>Observation</td><td>Monitor dashboards, note anomalies</td><td>During execution</td></tr>
<tr><td>Debrief</td><td>Review findings, create action items</td><td>1 hour</td></tr>
<tr><td>Follow-up</td><td>Implement fixes, schedule next GameDay</td><td>2 weeks</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<pre><code class="language-bash"># GameDay experiment sequence:

# Round 1: Single pod kill
# Hypothesis: "Service recovers in < 30s, zero user errors"

# Round 2: Kill 50% pods
# Hypothesis: "Remaining pods handle load, P99 < 500ms"

# Round 3: Node failure
# Hypothesis: "Pods reschedule in < 2 min"

# Round 4: Network partition
# Hypothesis: "Circuit breaker activates, graceful degradation"

# Round 5: Database failover
# Hypothesis: "< 5s downtime, no data loss"
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Chaos Engineering</strong>: Proactively find weaknesses before production incidents</li>
<li><strong>Litmus</strong>: K8s-native chaos framework, CRD-based experiments</li>
<li><strong>Probes</strong>: Validate steady-state during chaos (HTTP, Prometheus, command)</li>
<li><strong>Start small</strong>: Pod kill → node drain → network chaos</li>
<li><strong>GameDay</strong>: Structured team exercise, not random destruction</li>
<li><strong>Always have rollback</strong>: Know how to stop chaos immediately</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Litmus Setup</h3>
<ul>
<li>Install Litmus, run pod-delete experiment</li>
<li>Add HTTP probe to validate service availability</li>
<li>Review ChaosResult for pass/fail</li>
</ul>

<h3 id="bt2">Bài tập 2: GameDay</h3>
<ul>
<li>Plan 5-round chaos experiment sequence</li>
<li>Execute with monitoring dashboards open</li>
<li>Document findings and improvement actions</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 46: Production Readiness Checklist</strong>, chúng ta sẽ bắt đầu Section 12 — Production Operations & Capstone Project.</p>
