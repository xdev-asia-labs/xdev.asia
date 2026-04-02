---
id: 019e1a00-aa01-7001-c001-k8sha000903
title: 'BÀI 38: FALCO RUNTIME SECURITY'
slug: bai-38-falco-runtime-security
description: >-
  Deploy Falco cho runtime threat detection, custom rules,
  syscall monitoring, container drift detection,
  và incident response automation.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 38
section_title: 'Phần 9: Security Hardening'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Runtime security concepts (shift-left vs runtime)</li>
<li>✅ Falco architecture (eBPF driver, rules engine)</li>
<li>✅ Deploy Falco trên K8s</li>
<li>✅ Custom security rules</li>
<li>✅ Falcosidekick event routing</li>
<li>✅ Incident response automation</li>
</ul>

<hr>

<h2 id="phan-1-architecture">PHẦN 1: FALCO ARCHITECTURE</h2>

<pre><code>
Falco Runtime Detection:

┌─────────────────────────────────────────────┐
│                  Node (Host)                │
│                                             │
│  ┌─────────┐  syscalls  ┌────────────────┐  │
│  │Container│───────────►│ Falco (DaemonSet│  │
│  │  App    │            │  eBPF driver)   │  │
│  └─────────┘            │                 │  │
│                         │  Rules Engine:  │  │
│  ┌─────────┐            │  - Shell in     │  │
│  │Container│───────────►│    container?   │  │
│  │  App    │            │  - Write to bin?│  │
│  └─────────┘            │  - Read secrets?│  │
│                         └────────┬────────┘  │
└──────────────────────────────────┼───────────┘
                                   │
                          ┌────────▼────────┐
                          │  Falcosidekick  │
                          │  (event router) │
                          └───┬────┬────┬───┘
                              │    │    │
                           Slack  Loki  K8s
                                       Response
</code></pre>

<pre><code class="language-bash"># Install Falco:
helm repo add falcosecurity https://falcosecurity.github.io/charts
helm repo update

helm install falco falcosecurity/falco \
  --namespace falco \
  --create-namespace \
  -f falco-values.yaml
</code></pre>

<pre><code class="language-yaml"># falco-values.yaml:
driver:
  kind: modern_ebpf  # modern eBPF (no kernel module needed)

collectors:
  kubernetes:
    enabled: true

falco:
  grpc:
    enabled: true
  grpc_output:
    enabled: true
  json_output: true
  log_level: info

  rules_file:
    - /etc/falco/falco_rules.yaml
    - /etc/falco/falco_rules.local.yaml
    - /etc/falco/rules.d

falcosidekick:
  enabled: true
  config:
    slack:
      webhookurl: "https://hooks.slack.com/services/xxx"
      channel: "#security-alerts"
      minimumpriority: warning
    loki:
      hostport: "http://loki-gateway.monitoring"
    prometheus:
      extralabels: "source:falco"

resources:
  requests:
    cpu: 100m
    memory: 256Mi
  limits:
    cpu: 500m
    memory: 512Mi

tolerations:
  - effect: NoSchedule
    operator: Exists
</code></pre>

<hr>

<h2 id="phan-2-builtin-rules">PHẦN 2: FALCO BUILT-IN RULES</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Rule</th><th>Detects</th><th>Priority</th></tr>
</thead>
<tbody>
<tr><td>Terminal shell in container</td><td>kubectl exec -it</td><td>Notice</td></tr>
<tr><td>Write below /etc</td><td>Config file modification</td><td>Error</td></tr>
<tr><td>Read sensitive file</td><td>/etc/shadow, /etc/passwd</td><td>Warning</td></tr>
<tr><td>Launch privileged container</td><td>Privileged flag</td><td>Critical</td></tr>
<tr><td>Modify binary dirs</td><td>Write to /usr/bin, /sbin</td><td>Error</td></tr>
<tr><td>Outbound connection</td><td>Unexpected network calls</td><td>Notice</td></tr>
<tr><td>Crypto mining detection</td><td>Known mining processes</td><td>Critical</td></tr>
<tr><td>Container drift</td><td>New executable not in image</td><td>Error</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-3-custom-rules">PHẦN 3: CUSTOM FALCO RULES</h2>

<pre><code class="language-yaml"># Custom rules ConfigMap:
apiVersion: v1
kind: ConfigMap
metadata:
  name: falco-custom-rules
  namespace: falco
data:
  custom-rules.yaml: |
    # Detect kubectl exec:
    - rule: Terminal shell in container
      desc: A shell was spawned in a container
      condition: >
        spawned_process and container
        and shell_procs
        and proc.tty != 0
      output: >
        Shell spawned in container
        (user=%user.name container=%container.name
        shell=%proc.name parent=%proc.pname
        namespace=%k8s.ns.name pod=%k8s.pod.name
        image=%container.image.repository)
      priority: WARNING
      tags: [container, shell, exec]

    # Detect writes to /etc in production:
    - rule: Write to /etc in production namespace
      desc: Detect config file changes in production containers
      condition: >
        open_write and container
        and fd.name startswith /etc
        and k8s.ns.name = "production"
        and not proc.name in (sed, tee)
      output: >
        File written to /etc in production
        (user=%user.name file=%fd.name
        container=%container.name
        namespace=%k8s.ns.name pod=%k8s.pod.name)
      priority: ERROR
      tags: [filesystem, production]

    # Detect outbound connections from DB pods:
    - rule: Unexpected outbound from database
      desc: Database pod making outbound internet connections
      condition: >
        outbound and container
        and k8s.pod.label.app in (postgresql, redis, rabbitmq)
        and not fd.sip.name in (private_ipv4)
      output: >
        Database pod making outbound connection
        (pod=%k8s.pod.name dest=%fd.sip:%fd.sport
        namespace=%k8s.ns.name)
      priority: CRITICAL
      tags: [network, database]

    # Detect package manager in running container:
    - rule: Package manager in container
      desc: Package manager executed in running container (drift)
      condition: >
        spawned_process and container
        and proc.name in (apt, apt-get, yum, dnf, apk, pip, npm)
      output: >
        Package manager executed in container
        (command=%proc.cmdline container=%container.name
         namespace=%k8s.ns.name pod=%k8s.pod.name)
      priority: ERROR
      tags: [drift, supply-chain]
</code></pre>

<hr>

<h2 id="phan-4-response">PHẦN 4: INCIDENT RESPONSE AUTOMATION</h2>

<pre><code class="language-yaml"># Falcosidekick response: auto-label suspicious pods:
falcosidekick:
  config:
    kubernetesPolicyReport:
      enabled: true
      minimumpriority: warning

# Example: Webhook to auto-isolate pod:
# When critical alert → NetworkPolicy blocks all traffic

---
# Auto-response: isolate compromised pod
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: isolate-compromised
  namespace: production
spec:
  podSelector:
    matchLabels:
      security.falco/compromised: "true"
  policyTypes:
    - Ingress
    - Egress
  # Empty = deny all
</code></pre>

<pre><code class="language-bash"># Test Falco rules:

# Trigger shell in container:
kubectl exec -it deploy/nginx -n production -- /bin/bash
# → Falco alert: "Terminal shell in container"

# Trigger file write:
kubectl exec deploy/nginx -n production -- touch /etc/test
# → Falco alert: "Write to /etc in production"

# View Falco alerts:
kubectl logs -n falco -l app.kubernetes.io/name=falco --tail=20
</code></pre>

<hr>

<h2 id="phan-5-falco-grafana">PHẦN 5: FALCO MONITORING</h2>

<pre><code class="language-yaml"># Falco metrics in Prometheus:
# falcosidekick exposes /metrics

# Grafana queries:
# Alert count by priority:
sum by (priority) (increase(falcosidekick_inputs_total[1h]))

# Alert count by rule:
topk(10, sum by (rule) (increase(falcosidekick_inputs_total[24h])))

# Critical alerts trend:
rate(falcosidekick_inputs_total{priority="critical"}[5m])
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Falco</strong>: Runtime threat detection via eBPF syscall monitoring</li>
<li><strong>Built-in rules</strong>: Shell in container, file writes, crypto mining</li>
<li><strong>Custom rules</strong>: Condition + output format, priority levels</li>
<li><strong>Falcosidekick</strong>: Route events to Slack, Loki, PagerDuty</li>
<li><strong>Incident response</strong>: Auto-isolate compromised pods</li>
<li><strong>Drift detection</strong>: Package manager execution = container drift</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Falco Setup</h3>
<ul>
<li>Deploy Falco with eBPF driver</li>
<li>Trigger built-in rules (exec, file write)</li>
<li>View alerts in Slack and Loki</li>
</ul>

<h3 id="bt2">Bài tập 2: Custom Rules</h3>
<ul>
<li>Write rule to detect outbound connections from database pods</li>
<li>Write rule to detect package manager execution</li>
<li>Configure auto-response: isolate flagged pods</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 39: Harbor Registry & Image Security</strong>, chúng ta sẽ setup private container registry với vulnerability scanning.</p>
