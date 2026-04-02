---
id: 019e1a00-aa01-7001-c001-k8sha000502
title: 'BÀI 22: APACHE KAFKA CLUSTER VỚI STRIMZI OPERATOR'
slug: bai-22-apache-kafka-cluster-voi-strimzi-operator
description: >-
  Deploy Apache Kafka HA cluster trên Kubernetes sử dụng Strimzi Operator,
  KRaft mode (không Zookeeper), topic management, consumer groups,
  Schema Registry, và monitoring.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 22
section_title: 'Phần 5: Message Queue HA (RabbitMQ, Kafka, Redis)'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Hiểu kiến trúc Kafka: brokers, topics, partitions, consumer groups</li>
<li>✅ Deploy Kafka 3-node cluster với Strimzi (KRaft mode)</li>
<li>✅ Cấu hình topics, replication, retention</li>
<li>✅ Deploy Schema Registry cho schema evolution</li>
<li>✅ Monitor Kafka cluster với JMX metrics + Prometheus</li>
<li>✅ Best practices: partitioning strategy, consumer lag, exactly-once</li>
</ul>

<hr>

<h2 id="phan-1-kien-truc">PHẦN 1: KIẾN TRÚC APACHE KAFKA</h2>

<pre><code>
Apache Kafka Architecture (KRaft Mode):

┌─────────────────────────────────────────────────────┐
│                  Kafka Cluster                       │
│                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │ Broker 0 │  │ Broker 1 │  │ Broker 2 │          │
│  │ (Leader  │  │ (Leader  │  │ (Leader  │          │
│  │ Part 0)  │  │ Part 1)  │  │ Part 2)  │          │
│  │          │  │          │  │          │          │
│  │ KRaft    │  │ KRaft    │  │ KRaft    │          │
│  │Controller│  │Controller│  │Controller│          │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘          │
│       │              │              │                │
│  ┌────▼─────┐  ┌────▼─────┐  ┌────▼─────┐          │
│  │ Ceph PVC │  │ Ceph PVC │  │ Ceph PVC │          │
│  │  50Gi    │  │  50Gi    │  │  50Gi    │          │
│  └──────────┘  └──────────┘  └──────────┘          │
└─────────────────────────────────────────────────────┘
         ▲                              │
         │                              ▼
    ┌────┴─────┐                  ┌──────────┐
    │ Producer │                  │ Consumer │
    │ (Writes) │                  │ Group    │
    └──────────┘                  └──────────┘

Topic "orders" (3 partitions, replication-factor=3):
┌──────────┬──────────┬──────────┐
│ Part 0   │ Part 1   │ Part 2   │
│ Leader:0 │ Leader:1 │ Leader:2 │
│ ISR: 1,2 │ ISR: 0,2 │ ISR: 0,1 │
└──────────┴──────────┴──────────┘
</code></pre>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Feature</th><th>Kafka</th><th>RabbitMQ</th></tr>
</thead>
<tbody>
<tr><td>Throughput</td><td>Millions msg/sec</td><td>Tens of thousands</td></tr>
<tr><td>Message Model</td><td>Pull (consumers poll)</td><td>Push (broker delivers)</td></tr>
<tr><td>Ordering</td><td>Per partition</td><td>Per queue (FIFO)</td></tr>
<tr><td>Retention</td><td>Time/size-based (days/weeks)</td><td>Until consumed</td></tr>
<tr><td>Replay</td><td>Yes (offset seek)</td><td>No (message deleted after ack)</td></tr>
<tr><td>Use Case</td><td>Event streaming, CDC, logs</td><td>Task queues, RPC, routing</td></tr>
<tr><td>Protocol</td><td>Kafka Binary Protocol</td><td>AMQP 0.9.1</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-install-strimzi">PHẦN 2: CÀI ĐẶT STRIMZI OPERATOR</h2>

<pre><code class="language-bash"># Add Strimzi Helm repo:
helm repo add strimzi https://strimzi.io/charts
helm repo update

# Install Strimzi Operator:
helm install strimzi-cluster-operator strimzi/strimzi-kafka-operator \
  --namespace kafka \
  --create-namespace \
  --set watchNamespaces="[kafka]" \
  --version 0.44.0

# Verify:
kubectl -n kafka get pods
# NAME                                        READY   STATUS
# strimzi-cluster-operator-xxx                1/1     Running

# CRDs:
kubectl get crds | grep strimzi
# kafkas.kafka.strimzi.io
# kafkatopics.kafka.strimzi.io
# kafkausers.kafka.strimzi.io
# kafkaconnects.kafka.strimzi.io
# kafkamirrormakers.kafka.strimzi.io
# kafkabridges.kafka.strimzi.io
</code></pre>

<hr>

<h2 id="phan-3-deploy-kafka">PHẦN 3: DEPLOY KAFKA CLUSTER (KRaft Mode)</h2>

<h3 id="31-kafka-crd">3.1. Kafka CRD</h3>
<pre><code class="language-yaml"># kafka-cluster.yaml:
apiVersion: kafka.strimzi.io/v1beta2
kind: KafkaNodePool
metadata:
  name: combined
  namespace: kafka
  labels:
    strimzi.io/cluster: production-kafka
spec:
  replicas: 3
  roles:
    - controller     # KRaft controller (replaces ZooKeeper)
    - broker         # Kafka broker
  storage:
    type: persistent-claim
    size: 50Gi
    class: ceph-block
    deleteClaim: false
  resources:
    requests:
      cpu: "1"
      memory: "2Gi"
    limits:
      cpu: "4"
      memory: "4Gi"
  jvmOptions:
    -Xms: 1536m
    -Xmx: 1536m
---
apiVersion: kafka.strimzi.io/v1beta2
kind: Kafka
metadata:
  name: production-kafka
  namespace: kafka
  annotations:
    strimzi.io/node-pools: enabled
    strimzi.io/kraft: enabled
spec:
  kafka:
    version: 3.8.0
    metadataVersion: "3.8"
    listeners:
      - name: plain
        port: 9092
        type: internal
        tls: false
      - name: tls
        port: 9093
        type: internal
        tls: true
        authentication:
          type: tls
      - name: external
        port: 9094
        type: nodeport
        tls: true
    config:
      # Replication:
      default.replication.factor: 3
      min.insync.replicas: 2
      offsets.topic.replication.factor: 3
      transaction.state.log.replication.factor: 3
      transaction.state.log.min.isr: 2

      # Log retention:
      log.retention.hours: 168         # 7 days
      log.retention.bytes: -1          # Unlimited by size
      log.segment.bytes: 1073741824    # 1GB per segment
      log.cleanup.policy: delete

      # Performance:
      num.partitions: 6                # Default partitions
      num.network.threads: 5
      num.io.threads: 8
      socket.send.buffer.bytes: 102400
      socket.receive.buffer.bytes: 102400
      socket.request.max.bytes: 104857600

      # Compression:
      compression.type: producer       # Let producer decide
      log.message.timestamp.type: CreateTime

    metricsConfig:
      type: jmxPrometheusExporter
      valueFrom:
        configMapKeyRef:
          name: kafka-jmx-metrics
          key: kafka-metrics-config.yml

  entityOperator:
    topicOperator:
      resources:
        requests:
          cpu: 100m
          memory: 256Mi
    userOperator:
      resources:
        requests:
          cpu: 100m
          memory: 256Mi
</code></pre>

<h3 id="32-jmx-config">3.2. JMX Metrics ConfigMap</h3>
<pre><code class="language-yaml"># kafka-jmx-metrics.yaml:
apiVersion: v1
kind: ConfigMap
metadata:
  name: kafka-jmx-metrics
  namespace: kafka
data:
  kafka-metrics-config.yml: |
    lowercaseOutputName: true
    lowercaseOutputLabelNames: true
    rules:
      - pattern: kafka.server<type=(.+), name=(.+), clientId=(.+), topic=(.+), partition=(.*)><>Value
        name: kafka_server_$1_$2
        type: GAUGE
        labels:
          clientId: "$3"
          topic: "$4"
          partition: "$5"
      - pattern: kafka.server<type=(.+), name=(.+), clientId=(.+), brokerHost=(.+), brokerPort=(.+)><>Value
        name: kafka_server_$1_$2
        type: GAUGE
        labels:
          clientId: "$3"
      - pattern: kafka.server<type=(.+), name=(.+)><>Value
        name: kafka_server_$1_$2
        type: GAUGE
      - pattern: kafka.server<type=(.+), name=(.+)><>Count
        name: kafka_server_$1_$2_total
        type: COUNTER
      - pattern: kafka.log<type=(.+), name=(.+), topic=(.+), partition=(.+)><>Value
        name: kafka_log_$1_$2
        type: GAUGE
        labels:
          topic: "$3"
          partition: "$4"
</code></pre>

<pre><code class="language-bash"># Deploy:
kubectl apply -f kafka-jmx-metrics.yaml
kubectl apply -f kafka-cluster.yaml

# Watch:
kubectl -n kafka get pods -w
# production-kafka-combined-0   1/1   Running
# production-kafka-combined-1   1/1   Running
# production-kafka-combined-2   1/1   Running
# production-kafka-entity-operator-xxx   2/2   Running

# Verify cluster:
kubectl -n kafka get kafka
# NAME               DESIRED KAFKA REPLICAS   READY
# production-kafka   3                        True

# Bootstrap service:
kubectl -n kafka get svc | grep bootstrap
# production-kafka-kafka-bootstrap   ClusterIP   10.96.x.x   9092,9093
</code></pre>

<hr>

<h2 id="phan-4-topics">PHẦN 4: TOPIC MANAGEMENT</h2>

<h3 id="41-kafka-topic">4.1. KafkaTopic CRD</h3>
<pre><code class="language-yaml"># kafka-topics.yaml:
apiVersion: kafka.strimzi.io/v1beta2
kind: KafkaTopic
metadata:
  name: orders-events
  namespace: kafka
  labels:
    strimzi.io/cluster: production-kafka
spec:
  partitions: 6
  replicas: 3
  config:
    retention.ms: 604800000          # 7 days
    min.insync.replicas: 2
    cleanup.policy: delete
    compression.type: lz4
    max.message.bytes: 1048576       # 1MB max message
    segment.ms: 86400000             # 1 day per segment
---
apiVersion: kafka.strimzi.io/v1beta2
kind: KafkaTopic
metadata:
  name: user-activities
  namespace: kafka
  labels:
    strimzi.io/cluster: production-kafka
spec:
  partitions: 12                     # High-throughput topic
  replicas: 3
  config:
    retention.ms: 2592000000         # 30 days
    min.insync.replicas: 2
    cleanup.policy: compact,delete   # Compacted log
    compression.type: snappy
---
apiVersion: kafka.strimzi.io/v1beta2
kind: KafkaTopic
metadata:
  name: payment-transactions
  namespace: kafka
  labels:
    strimzi.io/cluster: production-kafka
spec:
  partitions: 6
  replicas: 3
  config:
    retention.ms: 7776000000         # 90 days (compliance)
    min.insync.replicas: 2
    cleanup.policy: delete
    compression.type: lz4
</code></pre>

<pre><code class="language-bash"># Apply topics:
kubectl apply -f kafka-topics.yaml

# Verify:
kubectl -n kafka get kafkatopics
# NAME                   CLUSTER            PARTITIONS   REPLICATION FACTOR   READY
# orders-events          production-kafka   6            3                    True
# user-activities        production-kafka   12           3                    True
# payment-transactions   production-kafka   6            3                    True

# Describe topic:
kubectl -n kafka exec production-kafka-combined-0 -- \
  bin/kafka-topics.sh --bootstrap-server localhost:9092 \
  --describe --topic orders-events
</code></pre>

<hr>

<h2 id="phan-5-users">PHẦN 5: KAFKA USERS & ACL</h2>

<pre><code class="language-yaml"># kafka-users.yaml:
apiVersion: kafka.strimzi.io/v1beta2
kind: KafkaUser
metadata:
  name: order-service
  namespace: kafka
  labels:
    strimzi.io/cluster: production-kafka
spec:
  authentication:
    type: tls
  authorization:
    type: simple
    acls:
      # Producer: write to orders-events
      - resource:
          type: topic
          name: orders-events
          patternType: literal
        operations:
          - Write
          - Describe
        host: "*"
      # Consumer: read from payment-transactions
      - resource:
          type: topic
          name: payment-transactions
          patternType: literal
        operations:
          - Read
          - Describe
        host: "*"
      # Consumer group:
      - resource:
          type: group
          name: order-service-group
          patternType: literal
        operations:
          - Read
        host: "*"
</code></pre>

<hr>

<h2 id="phan-6-produce-consume">PHẦN 6: PRODUCE & CONSUME TEST</h2>

<pre><code class="language-bash"># Test producer:
kubectl -n kafka exec -it production-kafka-combined-0 -- \
  bin/kafka-console-producer.sh \
  --bootstrap-server localhost:9092 \
  --topic orders-events \
  --property "key.separator=:" \
  --property "parse.key=true"
# Input: order-001:{"action":"created","amount":100}

# Test consumer:
kubectl -n kafka exec -it production-kafka-combined-0 -- \
  bin/kafka-console-consumer.sh \
  --bootstrap-server localhost:9092 \
  --topic orders-events \
  --from-beginning \
  --group test-consumer-group \
  --property "print.key=true" \
  --property "key.separator=:"

# Check consumer group lag:
kubectl -n kafka exec production-kafka-combined-0 -- \
  bin/kafka-consumer-groups.sh \
  --bootstrap-server localhost:9092 \
  --describe --group test-consumer-group
# GROUP               TOPIC           PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG
# test-consumer-group orders-events   0          5               5               0
# test-consumer-group orders-events   1          3               3               0
</code></pre>

<hr>

<h2 id="phan-7-schema-registry">PHẦN 7: SCHEMA REGISTRY</h2>

<pre><code class="language-yaml"># Apicurio Schema Registry (open-source alternative to Confluent):
apiVersion: apps/v1
kind: Deployment
metadata:
  name: schema-registry
  namespace: kafka
spec:
  replicas: 2
  selector:
    matchLabels:
      app: schema-registry
  template:
    metadata:
      labels:
        app: schema-registry
    spec:
      containers:
        - name: apicurio
          image: apicurio/apicurio-registry:2.6.2.Final
          ports:
            - containerPort: 8080
          env:
            - name: APICURIO_STORAGE_KIND
              value: "kafkasql"
            - name: APICURIO_KAFKASQL_BOOTSTRAP_SERVERS
              value: "production-kafka-kafka-bootstrap:9092"
          resources:
            requests:
              cpu: 200m
              memory: 512Mi
            limits:
              cpu: "1"
              memory: 1Gi
---
apiVersion: v1
kind: Service
metadata:
  name: schema-registry
  namespace: kafka
spec:
  selector:
    app: schema-registry
  ports:
    - port: 8080
      targetPort: 8080
</code></pre>

<hr>

<h2 id="phan-8-monitoring">PHẦN 8: MONITORING KAFKA</h2>

<pre><code class="language-yaml"># PodMonitor for Kafka brokers:
apiVersion: monitoring.coreos.com/v1
kind: PodMonitor
metadata:
  name: kafka-monitor
  namespace: kafka
spec:
  selector:
    matchLabels:
      strimzi.io/cluster: production-kafka
      strimzi.io/kind: Kafka
  podMetricsEndpoints:
    - port: tcp-prometheus
      path: /metrics
      interval: 15s
</code></pre>

<pre><code class="language-yaml"># Key alerts:
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: kafka-alerts
  namespace: kafka
spec:
  groups:
    - name: kafka
      rules:
        - alert: KafkaUnderReplicatedPartitions
          expr: kafka_server_replicamanager_underreplicatedpartitions > 0
          for: 5m
          labels:
            severity: critical
          annotations:
            summary: "Kafka has {{ $value }} under-replicated partitions"

        - alert: KafkaConsumerLag
          expr: kafka_consumergroup_lag > 10000
          for: 10m
          labels:
            severity: warning
          annotations:
            summary: "Consumer group {{ $labels.consumergroup }} lag: {{ $value }}"

        - alert: KafkaOfflinePartitions
          expr: kafka_controller_kafkacontroller_offlinepartitionscount > 0
          for: 1m
          labels:
            severity: critical
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Strimzi Operator</strong>: Best way to run Kafka on K8s, full lifecycle management</li>
<li><strong>KRaft mode</strong>: No ZooKeeper dependency, simpler architecture</li>
<li><strong>Replication factor 3, min.insync.replicas 2</strong>: Tolerates 1 broker failure</li>
<li><strong>Partition strategy</strong>: Key-based partitioning for ordering, increase partitions for throughput</li>
<li><strong>Consumer groups</strong>: Parallel processing, monitor lag closely</li>
<li><strong>Schema Registry</strong>: Enforce schema evolution, prevent breaking changes</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Kafka HA Lab</h3>
<ul>
<li>Deploy 3-node Kafka cluster with KRaft</li>
<li>Create topic with 6 partitions, RF=3</li>
<li>Produce 100,000 messages, kill 1 broker</li>
<li>Verify no data loss, consumer catches up</li>
</ul>

<h3 id="bt2">Bài tập 2: Performance Benchmark</h3>
<ul>
<li>Run kafka-producer-perf-test.sh with different batch sizes</li>
<li>Measure throughput: messages/sec, MB/sec</li>
<li>Compare compression: none vs lz4 vs snappy vs zstd</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 23: Redis HA — Sentinel và Cluster Mode</strong>, chúng ta sẽ deploy Redis cho caching và real-time data.</p>
