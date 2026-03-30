---
id: 019c9618-0302-7000-8000-c1147ba22e13
title: 'BÀI 19: DAEMONSETS'
slug: bai-19-daemonsets
description: >-
  DaemonSets đảm bảo một Pod chạy trên mỗi node. Use cases: monitoring agent, logging agent, network plugin, storage. Ví dụ thực tế deploy Grafana Alloy collector trên mọi node.
duration_minutes: 60
is_free: false
video_url: null
sort_order: 19
section_title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---

<h2>DaemonSets — Một Pod Trên Mỗi Node</h2>

<p>Khi bạn cần một Pod chạy trên <strong>tất cả các nodes</strong> trong cluster (hoặc một subset nodes cụ thể), <strong>DaemonSet</strong> là câu trả lời. Không giống Deployment phân phối Pods theo replicas, DaemonSet đảm bảo mỗi node (phù hợp với selector) luôn có đúng một Pod của nó. Khi node mới được thêm vào cluster, DaemonSet tự động tạo Pod trên node đó. Khi node bị xóa, Pod cũng được garbage collected.</p>

<h2>1. DaemonSet là Gì? Cơ Chế Một Pod Per Node</h2>

<p>DaemonSet controller liên tục đảm bảo:</p>
<ul>
  <li>Mỗi node phù hợp có đúng một Pod của DaemonSet đang chạy</li>
  <li>Khi node mới join cluster → Pod mới được tạo tự động</li>
  <li>Khi node bị remove khỏi cluster → Pod bị xóa</li>
  <li>Xóa DaemonSet sẽ dọn sạch tất cả Pods nó tạo ra</li>
</ul>

<p>DaemonSet cơ bản nhất:</p>

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

<h2>2. Use Cases Thực Tế</h2>

<p>DaemonSet được dùng rộng rãi cho các loại infrastructure agents:</p>

<h3>2.1 Logging Agents</h3>
<ul>
  <li><strong>Grafana Alloy</strong>: Thu thập logs từ files và container stdout trên mỗi node</li>
  <li><strong>Fluent Bit</strong>: Lightweight log forwarder, forward logs đến Elasticsearch/Loki</li>
  <li><strong>Fluentd</strong>: Aggregate và transform logs trước khi ship đi</li>
</ul>

<h3>2.2 Monitoring Agents</h3>
<ul>
  <li><strong>Prometheus Node Exporter</strong>: Export CPU, memory, disk, network metrics của node</li>
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
  <li><strong>AWS EBS CSI Driver node plugin</strong>: Mount EBS volumes trên EC2 nodes</li>
  <li><strong>Longhorn</strong>: Distributed block storage — engine chạy trên mỗi node</li>
  <li><strong>OpenEBS</strong>: Cloud-native storage</li>
</ul>

<h3>2.5 Security</h3>
<ul>
  <li><strong>Falco</strong>: Runtime threat detection bằng eBPF (xem bài 26)</li>
  <li><strong>NeuVector</strong>: Container security platform</li>
  <li><strong>Sysdig Agent</strong>: Security và performance monitoring</li>
</ul>

<h2>3. DaemonSet vs Deployment: Khi Nào Dùng Gì?</h2>

<p>Câu hỏi thường gặp: "Tại sao không dùng Deployment với <code>replicas: N</code> thay vì DaemonSet?"</p>

<p><strong>Dùng DaemonSet khi:</strong></p>
<ul>
  <li>Cần access trực tiếp đến node resources (filesystem, network interfaces, hardware)</li>
  <li>Cần Pod trên <em>mỗi node cụ thể</em>, không phải N pods bất kỳ</li>
  <li>Agent cần biết chính xác nó đang chạy trên node nào (hostname, node IP)</li>
  <li>Infrastructure agents: logging, monitoring, CNI, CSI</li>
</ul>

<p><strong>Dùng Deployment khi:</strong></p>
<ul>
  <li>Cần scale số lượng replica độc lập với số node</li>
  <li>Application stateless không cần node-specific access</li>
  <li>Web servers, API servers, microservices thông thường</li>
</ul>

<h2>4. Node Selection — Chọn Nodes Cho DaemonSet</h2>

<p>DaemonSet không phải lúc nào cũng cần chạy trên toàn bộ cluster. Bạn có thể giới hạn bằng nhiều cách.</p>

<h3>4.1 nodeSelector</h3>

<p>Chỉ deploy trên nodes có label cụ thể:</p>

<pre><code class="language-yaml">spec:
  template:
    spec:
      nodeSelector:
        node-role: worker          # Chỉ chạy trên worker nodes
        disk-type: ssd             # Chỉ trên nodes có SSD
</code></pre>

<h3>4.2 Node Affinity</h3>

<p>Phức tạp hơn nodeSelector, hỗ trợ operators như In, NotIn, Exists:</p>

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

<h3>4.3 Tolerations — Deploy Lên Tainted Nodes</h3>

<p>Nodes có thể có <strong>taints</strong> để ngăn Pods thông thường schedule lên đó. DaemonSet thường cần <strong>tolerations</strong> để bypass các taints này — đặc biệt là để chạy trên control plane nodes:</p>

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

<p>Hai toleration cuối (<code>not-ready</code> và <code>unreachable</code>) rất quan trọng cho infrastructure agents — bạn muốn logging/monitoring tiếp tục chạy kể cả khi node đang có vấn đề, để capture logs về sự cố đó.</p>

<h2>5. Update Strategies</h2>

<p>DaemonSet có hai update strategies:</p>

<h3>5.1 RollingUpdate (Default)</h3>

<pre><code class="language-yaml">spec:
  updateStrategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1   # Tối đa 1 Pod không available cùng lúc
      # Hoặc dùng percentage:
      # maxUnavailable: 10%
</code></pre>

<p>Với RollingUpdate, Kubernetes update từng Pod một (hoặc theo maxUnavailable). Pod cũ bị xóa, Pod mới được tạo trên cùng node.</p>

<h3>5.2 OnDelete</h3>

<pre><code class="language-yaml">spec:
  updateStrategy:
    type: OnDelete
</code></pre>

<p>Với OnDelete, DaemonSet sẽ không tự update Pods. Pod mới (với spec mới) chỉ được tạo khi bạn manually xóa Pod cũ. Dùng khi bạn muốn kiểm soát hoàn toàn quá trình update.</p>

<h2>6. Ví Dụ Thực Tế: Grafana Alloy Node Agent</h2>

<p><strong>Grafana Alloy</strong> là OpenTelemetry-native collector của Grafana Labs, thay thế Grafana Agent cũ. Deploy Alloy như DaemonSet để thu thập logs và metrics từ mỗi node:</p>

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

<p>ConfigMap cho Alloy config:</p>

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

<h2>7. Ví Dụ: Node Exporter cho Prometheus Metrics</h2>

<p>Node Exporter thu thập metrics phần cứng và OS của node, expose cho Prometheus scrape:</p>

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

<h2>8. Ưu Tiên Khi Deploy DaemonSet: PriorityClass</h2>

<p>Infrastructure agents như logging và monitoring cần được schedule trước khi application Pods — ngay cả khi node đang chịu áp lực memory. Dùng <strong>PriorityClass</strong> để đảm bảo điều này:</p>

<pre><code class="language-yaml">apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: system-node-agent
value: 1000000      # Cao hơn workloads thông thường (default: 0)
globalDefault: false
description: "Priority class for node-level DaemonSet agents"
preemptionPolicy: PreemptLowerPriority
</code></pre>

<p>Sau đó assign PriorityClass cho DaemonSet:</p>

<pre><code class="language-yaml">spec:
  template:
    spec:
      priorityClassName: system-node-agent
      containers:
      - name: node-agent
        # ...
</code></pre>

<p>Kubernetes có một số built-in priority classes:</p>
<ul>
  <li><code>system-cluster-critical</code>: 2000000000 — cho CoreDNS, kube-proxy</li>
  <li><code>system-node-critical</code>: 2000001000 — cho kubelet-adjacent components</li>
</ul>

<h2>9. Kiểm Tra và Debug DaemonSet</h2>

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

<h2>10. DaemonSet Best Practices</h2>

<ul>
  <li><strong>Resources hợp lý</strong>: DaemonSet chạy trên mọi node — nếu mỗi Pod dùng 500m CPU, cả cluster mất đi đáng kể capacity</li>
  <li><strong>Tolerations đầy đủ</strong>: Thêm tolerations cho <code>not-ready</code> và <code>unreachable</code> để agent tiếp tục hoạt động khi node có vấn đề</li>
  <li><strong>PriorityClass</strong>: Assign priority cao hơn workloads thông thường để đảm bảo schedule</li>
  <li><strong>readOnlyRootFilesystem</strong>: Bật khi có thể, dùng emptyDir hoặc hostPath cho data cần write</li>
  <li><strong>RollingUpdate maxUnavailable</strong>: Giữ ở 1 hoặc một con số nhỏ để không mất coverage trên nhiều nodes cùng lúc</li>
  <li><strong>Namespace isolation</strong>: Deploy DaemonSet vào namespace riêng (e.g., <code>monitoring</code>, <code>logging</code>) — không mix với application workloads</li>
</ul>

<p>DaemonSet là công cụ không thể thiếu trong mọi Kubernetes cluster production. Hiểu cách dùng đúng DaemonSet giúp bạn xây dựng infrastructure observability và security layer vững chắc trên nền tảng Kubernetes.</p>
