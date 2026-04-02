---
id: 019e1a00-aa01-7001-c001-k8sha000501
title: 'BÀI 21: RABBITMQ HA CLUSTER TRÊN KUBERNETES'
slug: bai-21-rabbitmq-ha-cluster-tren-kubernetes
description: >-
  Deploy RabbitMQ HA cluster trên Kubernetes sử dụng RabbitMQ Cluster Operator,
  quorum queues, TLS, monitoring, và best practices cho microservices messaging.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 21
section_title: 'Phần 5: Message Queue HA (RabbitMQ, Kafka, Redis)'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Hiểu kiến trúc RabbitMQ cluster và các messaging patterns</li>
<li>✅ Deploy RabbitMQ 3-node cluster bằng Cluster Operator</li>
<li>✅ Cấu hình quorum queues cho HA</li>
<li>✅ Setup TLS encryption và authentication</li>
<li>✅ Monitor RabbitMQ cluster với Prometheus</li>
<li>✅ Best practices: message durability, DLQ, flow control</li>
</ul>

<hr>

<h2 id="phan-1-kien-truc">PHẦN 1: KIẾN TRÚC RABBITMQ CLUSTER</h2>

<h3 id="11-overview">1.1. Messaging Patterns</h3>
<pre><code>
RabbitMQ Messaging Patterns:

1. Point-to-Point (Work Queue):
   Producer ──► [Queue] ──► Consumer
                        ──► Consumer  (round-robin)

2. Publish/Subscribe (Fanout):
   Producer ──► [Exchange] ──► [Queue1] ──► Consumer1
                           ──► [Queue2] ──► Consumer2

3. Routing (Direct/Topic):
   Producer ──► [Exchange] ──routing.key──► [Queue] ──► Consumer

4. RPC Pattern:
   Client ──► [Request Queue] ──► Server
   Client ◄── [Reply Queue]   ◄── Server
</code></pre>

<h3 id="12-cluster-arch">1.2. RabbitMQ Cluster Architecture</h3>
<pre><code>
RabbitMQ 3-Node Cluster (Quorum Queues):

┌─────────────────────────────────────────────────┐
│                 K8s Service (ClusterIP)          │
│                 rabbitmq.messaging:5672          │
└──────────┬──────────┬──────────┬────────────────┘
           │          │          │
    ┌──────▼──┐ ┌─────▼───┐ ┌───▼──────┐
    │ rabbit-0│ │rabbit-1 │ │ rabbit-2 │
    │ Leader  │ │Follower │ │ Follower │
    │(Quorum) │ │(Quorum) │ │(Quorum)  │
    │         │ │         │ │          │
    │ Mnesia  │ │ Mnesia  │ │ Mnesia   │
    │ Cluster │◄►│Cluster │◄►│ Cluster │
    └────┬────┘ └────┬────┘ └────┬─────┘
         │           │           │
    ┌────▼────┐ ┌────▼────┐ ┌────▼─────┐
    │Ceph PVC │ │Ceph PVC │ │ Ceph PVC │
    │ 20Gi    │ │ 20Gi    │ │ 20Gi     │
    └─────────┘ └─────────┘ └──────────┘

Quorum Queue: Raft consensus → data replicated across majority
Classic Queue: Only on 1 node (mirrored = deprecated)
</code></pre>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Feature</th><th>Classic Queue</th><th>Quorum Queue</th><th>Stream</th></tr>
</thead>
<tbody>
<tr><td>Replication</td><td>None (mirrored deprecated)</td><td>Raft-based (majority)</td><td>Append-only log</td></tr>
<tr><td>Data Safety</td><td>Low</td><td>High</td><td>High</td></tr>
<tr><td>Performance</td><td>Highest</td><td>Good (slightly lower)</td><td>Best for fan-out</td></tr>
<tr><td>Use Case</td><td>Temp/non-critical</td><td>Business-critical</td><td>Event streaming</td></tr>
<tr><td>Ordering</td><td>FIFO</td><td>FIFO</td><td>FIFO per partition</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-install-operator">PHẦN 2: CÀI ĐẶT RABBITMQ CLUSTER OPERATOR</h2>

<h3 id="21-install">2.1. Install Operator</h3>
<pre><code class="language-bash"># Install RabbitMQ Cluster Operator:
kubectl apply -f https://github.com/rabbitmq/cluster-operator/releases/latest/download/cluster-operator.yml

# Verify:
kubectl get pods -n rabbitmq-system
# NAME                                         READY   STATUS
# rabbitmq-cluster-operator-7f7d8b8bb9-xxxxx   1/1     Running

# CRDs installed:
kubectl get crds | grep rabbitmq
# rabbitmqclusters.rabbitmq.com
</code></pre>

<h3 id="22-namespace">2.2. Tạo Namespace cho Messaging</h3>
<pre><code class="language-bash">kubectl create namespace messaging
kubectl label namespace messaging purpose=message-brokers
</code></pre>

<hr>

<h2 id="phan-3-deploy-cluster">PHẦN 3: DEPLOY RABBITMQ HA CLUSTER</h2>

<h3 id="31-cluster-crd">3.1. RabbitmqCluster CRD</h3>
<pre><code class="language-yaml"># rabbitmq-cluster.yaml:
apiVersion: rabbitmq.com/v1beta1
kind: RabbitmqCluster
metadata:
  name: production-rmq
  namespace: messaging
spec:
  replicas: 3

  image: rabbitmq:3.13-management

  resources:
    requests:
      cpu: "500m"
      memory: "1Gi"
    limits:
      cpu: "2"
      memory: "2Gi"

  persistence:
    storageClassName: ceph-block
    storage: 20Gi

  rabbitmq:
    additionalConfig: |
      # Cluster formation
      cluster_formation.peer_discovery_backend = rabbit_peer_discovery_k8s
      cluster_formation.k8s.host = kubernetes.default.svc.cluster.local
      cluster_formation.k8s.address_type = hostname
      cluster_formation.node_cleanup.interval = 10
      cluster_formation.node_cleanup.only_log_warning = true
      cluster_partition_handling = pause_minority

      # Quorum queues as default:
      default_queue_type = quorum

      # Memory management:
      vm_memory_high_watermark.relative = 0.7
      vm_memory_high_watermark_paging_ratio = 0.8
      disk_free_limit.relative = 1.5

      # Connection limits:
      channel_max = 2047
      heartbeat = 60

      # Consumer timeout (prevent stuck consumers):
      consumer_timeout = 3600000

      # Management plugin stats collection:
      collect_statistics_interval = 10000

    advancedConfig: |
      [
        {rabbit, [
          {tcp_listen_options, [
            {backlog, 128},
            {nodelay, true},
            {linger, {true, 0}},
            {exit_on_close, false}
          ]}
        ]}
      ].

    additionalPlugins:
      - rabbitmq_prometheus
      - rabbitmq_shovel
      - rabbitmq_shovel_management

  affinity:
    podAntiAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        - labelSelector:
            matchLabels:
              app.kubernetes.io/name: production-rmq
          topologyKey: kubernetes.io/hostname

  override:
    statefulSet:
      spec:
        template:
          spec:
            topologySpreadConstraints:
              - maxSkew: 1
                topologyKey: kubernetes.io/hostname
                whenUnsatisfiable: DoNotSchedule
                labelSelector:
                  matchLabels:
                    app.kubernetes.io/name: production-rmq
</code></pre>

<pre><code class="language-bash"># Deploy:
kubectl apply -f rabbitmq-cluster.yaml

# Watch pods:
kubectl -n messaging get pods -w
# production-rmq-server-0   1/1   Running   0   60s
# production-rmq-server-1   1/1   Running   0   90s
# production-rmq-server-2   1/1   Running   0   120s

# Verify cluster:
kubectl -n messaging exec production-rmq-server-0 -- rabbitmqctl cluster_status

# Services created:
kubectl -n messaging get svc
# production-rmq            ClusterIP   10.96.x.x   5672,15672,15692
# production-rmq-nodes      ClusterIP   None        4369,25672
</code></pre>

<hr>

<h2 id="phan-4-quorum-queues">PHẦN 4: QUORUM QUEUES VÀ POLICIES</h2>

<h3 id="41-create-queues">4.1. Tạo Quorum Queues</h3>
<pre><code class="language-bash"># Lấy credentials:
kubectl -n messaging get secret production-rmq-default-user -o jsonpath='{.data.username}' | base64 -d
kubectl -n messaging get secret production-rmq-default-user -o jsonpath='{.data.password}' | base64 -d

# Port-forward management UI:
kubectl -n messaging port-forward svc/production-rmq 15672:15672

# Via CLI - tạo quorum queue:
kubectl -n messaging exec production-rmq-server-0 -- \
  rabbitmqadmin declare queue name=orders.created \
  queue_type=quorum durable=true \
  arguments='{"x-quorum-initial-group-size": 3, "x-delivery-limit": 5}'

# Queue với Dead Letter Exchange:
kubectl -n messaging exec production-rmq-server-0 -- \
  rabbitmqadmin declare exchange name=orders type=topic durable=true

kubectl -n messaging exec production-rmq-server-0 -- \
  rabbitmqadmin declare exchange name=orders.dlx type=fanout durable=true

kubectl -n messaging exec production-rmq-server-0 -- \
  rabbitmqadmin declare queue name=orders.dlq \
  queue_type=quorum durable=true

kubectl -n messaging exec production-rmq-server-0 -- \
  rabbitmqadmin declare binding source=orders.dlx \
  destination=orders.dlq destination_type=queue

kubectl -n messaging exec production-rmq-server-0 -- \
  rabbitmqadmin declare queue name=orders.process \
  queue_type=quorum durable=true \
  arguments='{"x-dead-letter-exchange": "orders.dlx", "x-delivery-limit": 3}'
</code></pre>

<h3 id="42-vhost">4.2. Virtual Hosts & Users</h3>
<pre><code class="language-bash"># Create vhost cho mỗi service:
kubectl -n messaging exec production-rmq-server-0 -- \
  rabbitmqctl add_vhost /orders

kubectl -n messaging exec production-rmq-server-0 -- \
  rabbitmqctl add_vhost /payments

# Create service users:
kubectl -n messaging exec production-rmq-server-0 -- \
  rabbitmqctl add_user order_service "$(openssl rand -base64 24)"

kubectl -n messaging exec production-rmq-server-0 -- \
  rabbitmqctl set_permissions -p /orders order_service "orders\\..*" "orders\\..*" "orders\\..*"

# Giới hạn permissions (principle of least privilege):
# configure: "orders\\..*"   → chỉ configure queues prefix orders.
# write:     "orders\\..*"   → chỉ publish vào exchanges prefix orders.
# read:      "orders\\..*"   → chỉ consume từ queues prefix orders.
</code></pre>

<hr>

<h2 id="phan-5-tls">PHẦN 5: TLS ENCRYPTION</h2>

<pre><code class="language-yaml"># Sử dụng cert-manager:
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: rabbitmq-tls
  namespace: messaging
spec:
  secretName: rabbitmq-tls-secret
  issuerRef:
    name: cluster-ca-issuer
    kind: ClusterIssuer
  commonName: production-rmq.messaging.svc
  dnsNames:
    - production-rmq.messaging.svc
    - production-rmq.messaging.svc.cluster.local
    - "*.production-rmq-nodes.messaging.svc.cluster.local"
---
# Update RabbitmqCluster:
apiVersion: rabbitmq.com/v1beta1
kind: RabbitmqCluster
metadata:
  name: production-rmq
  namespace: messaging
spec:
  tls:
    secretName: rabbitmq-tls-secret
    caSecretName: rabbitmq-ca-secret
    disableNonTLSListeners: true   # ⚠️ Force TLS only
</code></pre>

<hr>

<h2 id="phan-6-monitoring">PHẦN 6: MONITORING</h2>

<pre><code class="language-yaml"># PodMonitor cho Prometheus:
apiVersion: monitoring.coreos.com/v1
kind: PodMonitor
metadata:
  name: rabbitmq-monitor
  namespace: messaging
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: production-rmq
  podMetricsEndpoints:
    - port: prometheus
      interval: 15s
      path: /metrics
---
# Key metrics:
# rabbitmq_queue_messages_ready         — Messages waiting
# rabbitmq_queue_messages_unacked       — Messages in-flight
# rabbitmq_queue_consumers              — Consumer count
# rabbitmq_connections                  — Total connections
# rabbitmq_channels                     — Total channels
# rabbitmq_process_resident_memory_bytes — RAM usage
# rabbitmq_disk_space_available_bytes   — Disk available
</code></pre>

<pre><code class="language-yaml"># Alerting rules:
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: rabbitmq-alerts
  namespace: messaging
spec:
  groups:
    - name: rabbitmq
      rules:
        - alert: RabbitMQQueueBacklog
          expr: rabbitmq_queue_messages_ready > 10000
          for: 5m
          labels:
            severity: warning
          annotations:
            summary: "Queue {{ $labels.queue }} has {{ $value }} messages"

        - alert: RabbitMQNoConsumers
          expr: rabbitmq_queue_consumers == 0
          for: 10m
          labels:
            severity: critical
          annotations:
            summary: "Queue {{ $labels.queue }} has no consumers"

        - alert: RabbitMQHighMemory
          expr: rabbitmq_process_resident_memory_bytes / rabbitmq_resident_memory_limit_bytes > 0.8
          for: 5m
          labels:
            severity: warning

        - alert: RabbitMQNodeDown
          expr: rabbitmq_identity_info < 3
          for: 1m
          labels:
            severity: critical
</code></pre>

<hr>

<h2 id="phan-7-app-integration">PHẦN 7: APPLICATION INTEGRATION</h2>

<pre><code class="language-yaml"># Application sử dụng RabbitMQ:
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
  namespace: default
spec:
  template:
    spec:
      containers:
        - name: order-service
          env:
            - name: RABBITMQ_URL
              value: "amqps://order_service:$(RABBITMQ_PASSWORD)@production-rmq.messaging:5671/orders"
            - name: RABBITMQ_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: order-rmq-secret
                  key: password
</code></pre>

<pre><code class="language-python"># Python producer (pika):
import pika
import json

connection = pika.BlockingConnection(
    pika.URLParameters(os.environ['RABBITMQ_URL'])
)
channel = connection.channel()

# Publish with delivery confirmation:
channel.confirm_delivery()

message = {"order_id": "12345", "amount": 100.00}
channel.basic_publish(
    exchange='orders',
    routing_key='orders.created',
    body=json.dumps(message),
    properties=pika.BasicProperties(
        delivery_mode=2,        # Persistent message
        content_type='application/json',
        message_id=str(uuid.uuid4())
    )
)
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Quorum queues</strong>: Raft-based replication, always use for production</li>
<li><strong>Cluster Operator</strong>: Declarative RabbitMQ on K8s, auto-clustering</li>
<li><strong>3-node cluster</strong>: Tolerates 1 node failure (majority = 2)</li>
<li><strong>Dead Letter Queue</strong>: Handle poison messages, retry logic</li>
<li><strong>TLS + vhosts</strong>: Isolate services, encrypt in transit</li>
<li><strong>pause_minority</strong>: Prevent split-brain partition handling</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: RabbitMQ HA Lab</h3>
<ul>
<li>Deploy 3-node RabbitMQ cluster</li>
<li>Create quorum queue with DLQ</li>
<li>Publish 10,000 messages, kill 1 node, verify no message loss</li>
</ul>

<h3 id="bt2">Bài tập 2: Monitoring Setup</h3>
<ul>
<li>Configure PodMonitor</li>
<li>Import RabbitMQ Grafana dashboard (ID: 10991)</li>
<li>Create alert for queue backlog > 5000</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 22: Apache Kafka Cluster với Strimzi Operator</strong>, chúng ta sẽ deploy Kafka cho high-throughput event streaming.</p>
