---
id: 019c9618-0302-7000-8000-c1147ba22e13
title: 'LESSON 19: DAEMONSETS'
slug: bai-19-daemonsets
description: 'DaemonSets ensure one Pod runs on each node. Use cases: monitoring agent, logging agent, network plugin, storage. Real-life example deploying Grafana Alloy collector on every node.'
duration_minutes: 60
is_free: false
video_url: null
sort_order: 19
section_title: 'Module 5: Workload Management'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1387" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1387)"/>

  <!-- Decorations -->
  <g>
    <circle cx="989" cy="37" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="878" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="767" cy="215" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="656" cy="44" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="133" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="147" x2="1100" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="177" x2="1050" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1033.3730669589463,176 1033.3730669589463,218 997,239 960.6269330410536,218 960.6269330410536,176 997,155" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Lesson 19</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 19: DAEMONSETS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 5: Workload Management__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>DaemonSets — One Pod Per Node__HTMLTAG_66___

<p>When you need a Pod running on <strong>all nodes</strong> in the cluster (or a specific subset of nodes), <strong>DaemonSet</strong> is the answer. Unlike Deployment, which distributes Pods in replicas, DaemonSet ensures that each node (matching the selector) always has its own Pod. When a new node is added to the cluster, DaemonSet automatically creates a Pod on that node. When the node is deleted, the Pod is also garbage collected.</p>

<h2>1. What is DaemonSet? One Pod Per Node Mechanism</h2>

<p>DaemonSet controller continuously ensures:</p>
<ul>
  <li>Each matching node has exactly one DaemonSet Pod running</li>
  <li>When a new node joins the cluster → A new Pod is automatically created</li>
  <li>When node is removed from cluster → Pod is deleted</li>
  <li>Deleting DaemonSet will clean up all Pods it created</li>
</ul>

<p>The most basic DaemonSet:</p>

<pre><code class="language-yaml">apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: simple-daemon
  namespace: monitoring
  labels:
    app: simple-daemon
spec:
  selector:
    matchLabels:
      name: simple-daemon
  template:
    metadata:
      labels:
        name: simple-daemon
    spec:
      containers:
      - name: daemon-container
        image: busybox:1.35
        command: ["sh", "-c", "while true; do echo $(hostname) is alive; sleep 60; done"]
        resources:
          requests:
            cpu: "10m"
            memory: "16Mi"
          limits:
            cpu: "50m"
            memory: "32Mi"
</code></pre>

<h2>2. Actual Use Cases</h2>

<p>DaemonSet is widely used for infrastructure agents:</p>

<h3>2.1 Logging Agents__HTMLTAG_94___
<ul>
  <li><strong>Grafana Alloy</strong>: Collect logs from stdout files and containers on each node</li>
  <li><strong>Fluent Bit</strong>: Lightweight log forwarder, forward logs to Elasticsearch/Loki</li>
  <li><strong>Fluentd</strong>: Aggregate and transform logs before shipping</li>
</ul><h3>2.2 Monitoring Agents</h3>
<ul>
  <li><strong>Prometheus Node Exporter</strong>: Export CPU, memory, disk, network metrics of node</li>
  <li><strong>Datadog Agent</strong>: Full observability — metrics, logs, traces, processes</li>
  <li><strong>Elastic Agent</strong>: Unified Elastic Stack agent</li>
</ul>

<h3>2.3 Network Plugins (CNI)</h3>
<ul>
  <li><strong>Cilium</strong>: eBPF-based networking, security, observability</li>
  <li><strong>Calico</strong>: Network policy enforcement</li>
  <li><strong>Weave Net</strong>: Simple overlay network</li>
</ul>

<h3>2.4 Storage (CSI Node Plugin)</h3>
<ul>
  <li><strong>AWS EBS CSI Driver node plugin</strong>: Mount EBS volumes on EC2 nodes</li>
  <li><strong>Longhorn</strong>: Distributed block storage — engine runs on each node</li>
  <li><strong>OpenEBS</strong>: Cloud-native storage</li>
</ul>

<h3>2.5 Security</h3>
<ul>
  <li><strong>Falco</strong>: Runtime threat detection using eBPF (see lesson 26)</li>
  <li><strong>NeuVector</strong>: Container security platform</li>
  <li><strong>Sysdig Agent</strong>: Security and performance monitoring</li>
</ul>

<h2>3. DaemonSet vs Deployment: When to Use Which?</h2>

<p>FAQ: "Why not use Deployment with <code>replicas: N</code> instead of DaemonSet?"</p>

<p><strong>Use DaemonSet when:</strong></p>
<ul>
  <li>Need direct access to node resources (filesystem, network interfaces, hardware)</li>
  <li>Need Pods on <em>each specific node__HTMLTAG_188___, not any N pods__HTMLTAG_189___
  <li>Agent needs to know exactly which node it is running on (hostname, node IP)</li>
  <li>Infrastructure agents: logging, monitoring, CNI, CSI</li>
</ul>

<p><strong>Use Deployment when:</strong></p>
<ul>
  <li>Need to scale the number of replicas independently of the number of nodes</li>
  <li>Stateless application without node-specific access</li>
  <li>Web servers, API servers, common microservices</li>
</ul>

<h2>4. Node Selection — Select Nodes for DaemonSet</h2>

<p>DaemonSet does not always need to run across the entire cluster. You can limit it in many ways.</p>

<h3>4.1 nodeSelector__HTMLTAG_212___

<p>Only deploy on nodes with a specific label:</p>

<pre><code class="language-yaml">spec:
  template:
    spec:
      nodeSelector:
        node-role: worker          # Chỉ chạy trên worker nodes
        disk-type: ssd             # Chỉ trên nodes có SSD
</code></pre>

<h3>4.2 Node Affinity</h3><p>More complex than nodeSelector, supports operators like In, NotIn, Exists:</p>

<pre><code class="language-yaml">spec:
  template:
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: kubernetes.io/os
                operator: In
                values:
                - linux
              - key: node.kubernetes.io/instance-type
                operator: NotIn
                values:
                - t3.nano
                - t3.micro      # Bỏ qua nodes quá nhỏ
</code></pre>

<h3>4.3 Tolerations — Deploy to Tainted Nodes</h3>

<p>Nodes can have <strong>taints</strong> to prevent regular Pods from scheduling there. DaemonSet often needs <strong>tolerations</strong> to bypass these taints — especially to run on control plane nodes:</p>

<pre><code class="language-yaml">spec:
  template:
    spec:
      tolerations:
      # Tolerate taint trên master/control-plane nodes
      - key: node-role.kubernetes.io/control-plane
        operator: Exists
        effect: NoSchedule
      # Tolerate node đang không ready
      - key: node.kubernetes.io/not-ready
        operator: Exists
        effect: NoExecute
        tolerationSeconds: 300
      # Tolerate node unreachable
      - key: node.kubernetes.io/unreachable
        operator: Exists
        effect: NoExecute
        tolerationSeconds: 300
</code></pre>

<p>The last two tolerations (<code>not-ready</code> and <code>unreachable</code>) are very important for infrastructure agents — you want logging/monitoring to continue running even when the node is having problems, to capture logs of that problem.</p>

<h2>5. Update Strategies</h2>

<p>DaemonSet has two update strategies:</p>

<h3>5.1 RollingUpdate (Default)</h3>

<pre><code class="language-yaml">spec:
  updateStrategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1   # Tối đa 1 Pod không available cùng lúc
      # Hoặc dùng percentage:
      # maxUnavailable: 10%
</code></pre>

<p>With RollingUpdate, Kubernetes updates each Pod one by one (or according to maxUnavailable). Old Pod is deleted, new Pod is created on the same node.</p>

<h3>5.2 OnDelete</h3>

<pre><code class="language-yaml">spec:
  updateStrategy:
    type: OnDelete
</code></pre>

<p>With OnDelete, DaemonSet will not automatically update Pods. New Pod (with new spec) is only created when you manually delete the old Pod. Use when you want complete control over the update process.</p>

<h2>6. Practical Example: Grafana Alloy Node Agent</h2>

<p><strong>Grafana Alloy</strong> is an OpenTelemetry-native collector from Grafana Labs, replacing the old Grafana Agent. Deploy Alloy as DaemonSet to collect logs and metrics from each node:</p>

<pre><code class="language-yaml">apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: grafana-alloy
  namespace: monitoring
  labels:
    app.kubernetes.io/name: alloy
    app.kubernetes.io/component: logs-collector
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: alloy
  updateStrategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
  template:
    metadata:
      labels:
        app.kubernetes.io/name: alloy
    spec:
      serviceAccountName: grafana-alloy
      tolerations:
      - key: node-role.kubernetes.io/control-plane
        operator: Exists
        effect: NoSchedule
      - key: node.kubernetes.io/not-ready
        operator: Exists
        effect: NoExecute
        tolerationSeconds: 300
      - key: node.kubernetes.io/unreachable
        operator: Exists
        effect: NoExecute
        tolerationSeconds: 300
      # Alloy cần chạy với host network để collect system metrics
      hostNetwork: false
      hostPID: false
      containers:
      - name: alloy
        image: grafana/alloy:v1.1.1
        args:
        - run
        - /etc/alloy/config.alloy
        - --storage.path=/tmp/alloy
        - --server.http.listen-addr=0.0.0.0:12345
        env:
        - name: HOSTNAME
          valueFrom:
            fieldRef:
              fieldPath: spec.nodeName
        - name: LOKI_URL
          value: "http://loki-gateway.monitoring.svc.cluster.local/loki/api/v1/push"
        ports:
        - name: http-metrics
          containerPort: 12345
          protocol: TCP
        resources:
          requests:
            cpu: "50m"
            memory: "128Mi"
          limits:
            cpu: "200m"
            memory: "256Mi"
        volumeMounts:
        - name: config
          mountPath: /etc/alloy
        - name: varlog
          mountPath: /var/log
          readOnly: true
        - name: varlibdockercontainers
          mountPath: /var/lib/docker/containers
          readOnly: true
        - name: storage
          mountPath: /tmp/alloy
        securityContext:
          allowPrivilegeEscalation: false
          readOnlyRootFilesystem: true
          runAsNonRoot: false   # Cần root để đọc /var/log
          runAsUser: 0
          capabilities:
            drop:
            - ALL
            add:
            - DAC_READ_SEARCH  # Đọc files của user khác
      volumes:
      - name: config
        configMap:
          name: grafana-alloy-config
      - name: varlog
        hostPath:
          path: /var/log
      - name: varlibdockercontainers
        hostPath:
          path: /var/lib/docker/containers
      - name: storage
        emptyDir: {}
</code></pre>

<p>ConfigMap for Alloy config:</p>

<pre><code class="language-yaml">apiVersion: v1
kind: ConfigMap
metadata:
  name: grafana-alloy-config
  namespace: monitoring
data:
  config.alloy: |
    // Collect container logs
    discovery.kubernetes "pods" {
      role = "pod"
      namespaces {
        own_namespace = false
      }
    }

    discovery.relabel "pod_logs" {
      targets = discovery.kubernetes.pods.targets

      rule {
        source_labels = ["__meta_kubernetes_namespace"]
        action = "replace"
        target_label = "namespace"
      }

      rule {
        source_labels = ["__meta_kubernetes_pod_name"]
        action = "replace"
        target_label = "pod"
      }

      rule {
        source_labels = ["__meta_kubernetes_container_name"]
        action = "replace"
        target_label = "container"
      }

      rule {
        source_labels = ["__meta_kubernetes_node_name"]
        target_label = "node"
      }
    }

    loki.source.kubernetes "pod_logs" {
      targets    = discovery.relabel.pod_logs.output
      forward_to = [loki.write.default.receiver]
    }

    loki.write "default" {
      endpoint {
        url = env("LOKI_URL")
      }
    }
</code></pre>

<h2>7. Example: Node Exporter for Prometheus Metrics</h2>

<p>Node Exporter collects node hardware and OS metrics, exposing them to Prometheus scrape:</p>

<pre><code class="language-yaml">apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: node-exporter
  namespace: monitoring
  labels:
    app.kubernetes.io/name: node-exporter
    app.kubernetes.io/component: metrics
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: node-exporter
  updateStrategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
  template:
    metadata:
      labels:
        app.kubernetes.io/name: node-exporter
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "9100"
        prometheus.io/path: "/metrics"
    spec:
      hostPID: true       # Cần để monitor processes
      hostIPC: true
      hostNetwork: true   # Cần để collect network metrics chính xác
      dnsPolicy: ClusterFirstWithHostNet
      tolerations:
      - operator: Exists    # Tolerate tất cả taints
      serviceAccountName: node-exporter
      containers:
      - name: node-exporter
        image: quay.io/prometheus/node-exporter:v1.7.0
        args:
        - --path.rootfs=/host/root
        - --path.procfs=/host/proc
        - --path.sysfs=/host/sys
        - --collector.filesystem.mount-points-exclude=^/(dev|proc|sys|var/lib/docker/.+|var/lib/kubelet/.+)($|/)
        - --no-collector.ipvs
        ports:
        - containerPort: 9100
          hostPort: 9100    # Expose trực tiếp trên node
          name: metrics
          protocol: TCP
        resources:
          requests:
            cpu: "15m"
            memory: "32Mi"
          limits:
            cpu: "250m"
            memory: "180Mi"
        securityContext:
          readOnlyRootFilesystem: true
          runAsNonRoot: true
          runAsUser: 65534    # nobody
          allowPrivilegeEscalation: false
        volumeMounts:
        - name: root
          mountPath: /host/root
          readOnly: true
          mountPropagation: HostToContainer
        - name: proc
          mountPath: /host/proc
          readOnly: true
        - name: sys
          mountPath: /host/sys
          readOnly: true
      volumes:
      - name: root
        hostPath:
          path: /
      - name: proc
        hostPath:
          path: /proc
      - name: sys
        hostPath:
          path: /sys
</code></pre>

<h2>8. Priority When Deploy DaemonSet: PriorityClass</h2>

<p>Infrastructure agents like logging and monitoring need to be scheduled before application Pods — even when the node is under memory pressure. Use <strong>PriorityClass</strong> to ensure this:</p>

<pre><code class="language-yaml">apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: system-node-agent
value: 1000000      # Cao hơn workloads thông thường (default: 0)
globalDefault: false
description: "Priority class for node-level DaemonSet agents"
preemptionPolicy: PreemptLowerPriority
</code></pre>

<p>Then assign PriorityClass to DaemonSet:</p>

<pre><code class="language-yaml">spec:
  template:
    spec:
      priorityClassName: system-node-agent
      containers:
      - name: node-agent
        # ...
</code></pre>

<p>Kubernetes has a number of built-in priority classes:</p>
<ul>
  <li><code>system-cluster-critical</code>: 2000000000 — for CoreDNS, kube-proxy</li>
  <li><code>system-node-critical</code>: 2000001000 — for kubelet-adjacent components</li>
</ul>

<h2>9. Test and Debug DaemonSet</h2>

<pre><code class="language-bash"># Xem tất cả DaemonSets trong cluster
kubectl get daemonsets --all-namespaces

# Xem chi tiết DaemonSet
kubectl describe daemonset node-exporter -n monitoring

# Kiểm tra số Pods expected vs actual
# DESIRED: số node phù hợp | CURRENT: đang create | READY: healthy | UP-TO-DATE: có spec mới | AVAILABLE: ready for use
kubectl get daemonset grafana-alloy -n monitoring
# NAME            DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE
# grafana-alloy   5         5         5       5            5

# Xem Pods của DaemonSet trên từng node
kubectl get pods -n monitoring -l app.kubernetes.io/name=alloy -o wide

# Debug Pod không schedule
kubectl get events -n monitoring --sort-by='.lastTimestamp'

# Xem logs từ một node cụ thể
kubectl logs -n monitoring -l app.kubernetes.io/name=alloy \
  --field-selector spec.nodeName=worker-node-1
</code></pre>

<h2>10. DaemonSet Best Practices</h2><ul>
  <li><strong>Reasonable Resources</strong>: DaemonSet runs on every node — if each Pod uses 500m of CPU, the whole cluster loses a significant amount of capacity__HTMLTAG_285___
  <li><strong>Full Tolerations</strong>: Add tolerations for <code>not-ready</code> and <code>unreachable</code> so that the agent continues to operate when the node has problems__HTMLTAG_293___
  <li><strong>PriorityClass</strong>: Assign priority higher than regular workloads to ensure schedule</li>
  <li><strong>readOnlyRootFilesystem</strong>: Enable when possible, use emptyDir or hostPath for data to write__HTMLTAG_301___
  <li><strong>RollingUpdate maxUnavailable</strong>: Keep to 1 or a small number to not lose coverage on many nodes at the same time__HTMLTAG_305___
  <li><strong>Namespace isolation</strong>: Deploy DaemonSet into separate namespace (e.g., <code>monitoring</code>, <code>logging</code>) — do not mix with application workloads</li>
</ul>

<p>DaemonSet is an indispensable tool in every Kubernetes cluster production. Understanding how to properly use DaemonSet helps you build a solid infrastructure observability and security layer on the Kubernetes platform.</p>