---
id: 019c9618-0103-7000-8000-c1147ba22e11
title: 'LESSON 12: STATEFULSETS'
slug: bai-12-statefulsets
description: 'StatefulSets for stateful applications: databases, message brokers, distributed systems. Stable network identities, ordered deployment/scaling, persistent storage per pod. Use cases with PostgreSQL, Kafka, Redis Cluster.'
duration_minutes: 85
is_free: false
video_url: null
sort_order: 12
section_title: 'Module 3: Configuration & Storage'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1531" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1531)"/>

  <!-- Decorations -->
  <g>
    <circle cx="702" cy="196" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="804" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="906" cy="220" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="1008" cy="102" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="610" cy="244" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="96" x2="1100" y2="176" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="126" x2="1050" y2="196" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="972.8467875173176,130.5 972.8467875173176,161.5 946,177 919.1532124826824,161.5 919.1532124826824,130.5 946,115" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — Lesson 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 12: STATEFULSETS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 3: Configuration &amp; Storage</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>StatefulSets: Running Stateful Applications on Kubernetes</h2>

<p>Deployment is the default workload controller for stateless applications — you can scale up/down freely because each Pod is identical and interchangeable. But with databases, message brokers, and distributed systems, each instance needs its own <em>identity</em>, its own <em>storage</em>, and a meaningful startup/shutdown order. This is why StatefulSet exists.</p>

<h2>StatefulSets vs Deployments__HTMLTAG_74___

<h3>When to Use Deployment?</h3>

<ul>
  <li>Stateless applications: web servers, API services, microservices</li>
  <li>All Pods can handle any request__HTMLTAG_81___
  <li>No need for separate persistent storage for each Pod</li>
  <li>Pods can be replaced randomly without affecting operation</li>
</ul>

<h3>When to Use StatefulSet?</h3>

<ul>
  <li>The application needs stable network identity (Pod name does not change)</li>
  <li>Each Pod needs its own persistent storage (primary, replica-1, replica-2)</li>
  <li>Important order of deployment, scaling, and deletion__HTMLTAG_95___
  <li>Peer discovery based on predictable DNS names</li>
  <li>Use cases: PostgreSQL, MySQL clusters, Redis Cluster, Kafka, Zookeeper, Elasticsearch</li>
</ul>

<h3>Visual Comparison</h3>

<pre><code class="language-bash"># Deployment: Pods có random names
kubectl get pods -l app=web-app
# NAME                      READY   STATUS    RESTARTS
# web-app-6d7b9c8f5-xk2p9   1/1     Running   0
# web-app-6d7b9c8f5-m3qr7   1/1     Running   0
# web-app-6d7b9c8f5-p8w4n   1/1     Running   0

# StatefulSet: Pods có stable, predictable names
kubectl get pods -l app=postgres
# NAME         READY   STATUS    RESTARTS
# postgres-0   1/1     Running   0   ← primary
# postgres-1   1/1     Running   0   ← replica
# postgres-2   1/1     Running   0   ← replica</code></pre>

<h2>StatefulSet Guarantees</h2>

<h3>Stable Pod Identity</h3><p>Each Pod in the StatefulSet is named according to the pattern <code>{statefulset-name}-{ordinal}</code>. Ordinal starts at 0 and increases gradually. Even when the Pod is deleted and recreated, it still receives the same identity (<code>postgres-1</code> is always <code>postgres-1</code>).</p>

<h3>Stable Network Identity with Headless Service</h3>

<p>StatefulSet requires a Headless Service (ClusterIP: None) to create DNS entries for each Pod. With Headless Service, DNS does not point to cluster IPs but points directly to Pod IPs.</p>

<pre><code class="language-yaml"># Headless Service cho StatefulSet
apiVersion: v1
kind: Service
metadata:
  name: postgres
  namespace: production
  labels:
    app: postgres
spec:
  clusterIP: None  # Đây là "headless" - không có ClusterIP
  selector:
    app: postgres
  ports:
  - port: 5432
    name: postgres</code></pre>

<p>With headless service, DNS records are created according to the pattern:</p>
<ul>
  <li><code>postgres-0.postgres.production.svc.cluster.local</code></li>
  <li><code>postgres-1.postgres.production.svc.cluster.local</code></li>
  <li><code>postgres-2.postgres.production.svc.cluster.local</code></li>
</ul>

<p>This allows Pods to find each other deterministically — without the need for complicated service discovery.</p>

<h2>StatefulSet: PostgreSQL Example</h2>

<pre><code class="language-yaml">apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
  namespace: production
spec:
  serviceName: postgres  # Phải match với Headless Service name
  replicas: 3
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      terminationGracePeriodSeconds: 60
      initContainers:
      # Init container để setup replication
      - name: init-postgres
        image: postgres:16
        command:
        - bash
        - "-c"
        - |
          set -ex
          # Xác định ordinal từ hostname
          [[ $HOSTNAME =~ -([0-9]+)$ ]] || exit 1
          ordinal=${BASH_REMATCH[1]}
          # Pod 0 là primary, các Pod còn lại là replica
          if [[ $ordinal -eq 0 ]]; then
            echo "primary" > /etc/postgres/role
          else
            echo "replica" > /etc/postgres/role
          fi
        volumeMounts:
        - name: postgres-config
          mountPath: /etc/postgres
      containers:
      - name: postgres
        image: postgres:16
        ports:
        - containerPort: 5432
          name: postgres
        env:
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgres-secret
              key: password
        - name: POSTGRES_REPLICATION_USER
          value: replicator
        - name: POSTGRES_REPLICATION_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgres-secret
              key: replication-password
        - name: PGDATA
          value: /var/lib/postgresql/data/pgdata
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        resources:
          requests:
            cpu: 500m
            memory: 1Gi
          limits:
            cpu: 2000m
            memory: 4Gi
        readinessProbe:
          exec:
            command: ["pg_isready", "-U", "postgres"]
          initialDelaySeconds: 10
          periodSeconds: 5
          failureThreshold: 3
        livenessProbe:
          exec:
            command: ["pg_isready", "-U", "postgres"]
          initialDelaySeconds: 30
          periodSeconds: 10
          failureThreshold: 3
        volumeMounts:
        - name: data
          mountPath: /var/lib/postgresql/data
        - name: postgres-config
          mountPath: /etc/postgres
      volumes:
      - name: postgres-config
        emptyDir: {}
  # volumeClaimTemplates: tự động tạo PVC riêng cho mỗi Pod
  volumeClaimTemplates:
  - metadata:
      name: data
      labels:
        app: postgres
    spec:
      accessModes: ["ReadWriteOnce"]
      storageClassName: longhorn-replicated
      resources:
        requests:
          storage: 100Gi</code></pre>

<pre><code class="language-bash"># Verify StatefulSet deployment
kubectl get statefulset postgres -n production
kubectl get pods -l app=postgres -n production -w

# Quan sát ordered deployment
# postgres-0   0/1   Pending    0   0s
# postgres-0   0/1   Init:0/1   0   1s
# postgres-0   1/1   Running    0   15s
# postgres-1   0/1   Pending    0   0s  ← Chỉ bắt đầu sau khi postgres-0 Running
# postgres-1   1/1   Running    0   20s
# postgres-2   0/1   Pending    0   0s  ← Chỉ bắt đầu sau khi postgres-1 Running

# Kiểm tra PVC được tạo tự động
kubectl get pvc -n production
# NAME              STATUS   VOLUME         CAPACITY   ACCESS MODES
# data-postgres-0   Bound    pvc-abc123     100Gi      RWO
# data-postgres-1   Bound    pvc-def456     100Gi      RWO
# data-postgres-2   Bound    pvc-ghi789     100Gi      RWO

# Kết nối vào primary
kubectl exec -it postgres-0 -n production -- psql -U postgres</code></pre>

<h2>StatefulSet: Redis Cluster Example</h2>

<pre><code class="language-yaml">apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: redis-cluster
  namespace: production
spec:
  serviceName: redis-cluster
  replicas: 6  # 3 masters + 3 replicas
  selector:
    matchLabels:
      app: redis-cluster
  template:
    metadata:
      labels:
        app: redis-cluster
    spec:
      containers:
      - name: redis
        image: redis:7.2
        ports:
        - containerPort: 6379
          name: client
        - containerPort: 16379
          name: gossip
        command: ["/conf/update-node.sh", "redis-server", "/conf/redis.conf"]
        env:
        - name: POD_IP
          valueFrom:
            fieldRef:
              fieldPath: status.podIP
        resources:
          requests:
            cpu: 200m
            memory: 512Mi
          limits:
            cpu: 1000m
            memory: 2Gi
        volumeMounts:
        - name: conf
          mountPath: /conf
          readOnly: false
        - name: data
          mountPath: /data
      volumes:
      - name: conf
        configMap:
          name: redis-cluster-config
          defaultMode: 0755
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: ["ReadWriteOnce"]
      storageClassName: longhorn-replicated
      resources:
        requests:
          storage: 10Gi</code></pre>

<pre><code class="language-bash"># Khởi tạo Redis Cluster sau khi tất cả Pods Running
kubectl exec -it redis-cluster-0 -n production -- redis-cli \
  --cluster create \
  $(kubectl get pods -n production -l app=redis-cluster -o jsonpath='{range .items[*]}{.status.podIP}:6379 {end}') \
  --cluster-replicas 1 \
  --cluster-yes</code></pre>

<h2>StatefulSet: Kafka with Strimzi Operator</h2>

<h3>Introducing Strimzi</h3>

<p>Running pure Kafka with StatefulSet is complicated because Kafka depends on Zookeeper (up to version 3.x) and has many complex configurations. <strong>Strimzi Operator</strong> is a specialized operator that helps deploy and manage Kafka clusters on Kubernetes, abstract away complexity.</p>

<pre><code class="language-bash"># Cài Strimzi Operator
kubectl create namespace kafka
kubectl apply -f 'https://strimzi.io/install/latest?namespace=kafka' -n kafka

# Verify operator
kubectl get pods -n kafka</code></pre>

<pre><code class="language-yaml"># Kafka cluster với KRaft mode (không cần Zookeeper từ K8s 3.3+)
apiVersion: kafka.strimzi.io/v1beta2
kind: Kafka
metadata:
  name: production-kafka
  namespace: kafka
spec:
  kafka:
    version: 3.8.0
    replicas: 3
    listeners:
    - name: plain
      port: 9092
      type: internal
      tls: false
    - name: tls
      port: 9093
      type: internal
      tls: true
    - name: external
      port: 9094
      type: loadbalancer
      tls: true
    config:
      offsets.topic.replication.factor: 3
      transaction.state.log.replication.factor: 3
      transaction.state.log.min.isr: 2
      default.replication.factor: 3
      min.insync.replicas: 2
      inter.broker.protocol.version: "3.8"
    storage:
      type: jbod
      volumes:
      - id: 0
        type: persistent-claim
        size: 100Gi
        class: longhorn-replicated
        deleteClaim: false
    resources:
      requests:
        cpu: 500m
        memory: 2Gi
      limits:
        cpu: 2000m
        memory: 8Gi
    # KRaft mode: không cần Zookeeper
    metadataVersion: 3.8-IV0
  entityOperator:
    topicOperator: {}
    userOperator: {}
  # Bật KRaft mode
  clusterCa:
    renewalDays: 30
    validityDays: 365</code></pre>

<pre><code class="language-bash"># Verify Kafka cluster
kubectl get kafka -n kafka
kubectl get pods -n kafka

# Tạo Kafka topic qua CRD
kubectl apply -f - << 'EOF'
apiVersion: kafka.strimzi.io/v1beta2
kind: KafkaTopic
metadata:
  name: user-events
  namespace: kafka
  labels:
    strimzi.io/cluster: production-kafka
spec:
  partitions: 12
  replicas: 3
  config:
    retention.ms: 604800000  # 7 days
    compression.type: lz4
EOF</code></pre>

<h2>Update Strategies</h2>

<h3>RollingUpdate (Default)</h3>

<pre><code class="language-yaml">apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
spec:
  updateStrategy:
    type: RollingUpdate
    rollingUpdate:
      # Cập nhật từ Pod có ordinal cao nhất xuống thấp nhất
      # Dừng lại ở partition - chỉ update Pods có ordinal >= partition
      partition: 0  # Update tất cả Pods
      # partition: 2  # Chỉ update pod-2, pod-3, ... (canary deploy)</code></pre>

<pre><code class="language-bash"># Canary update: chỉ update Pod cuối cùng trước
kubectl patch statefulset postgres -n production \
  --patch '{"spec":{"updateStrategy":{"type":"RollingUpdate","rollingUpdate":{"partition":2}}}}'

# Verify Pod 2 được update
kubectl get pods -l app=postgres -n production -o jsonpath='{range .items[*]}{.metadata.name}: {.spec.containers[0].image}{"\n"}{end}'

# Nếu OK, update tất cả
kubectl patch statefulset postgres -n production \
  --patch '{"spec":{"updateStrategy":{"rollingUpdate":{"partition":0}}}}'</code></pre>

<h3>OnDelete Strategy</h3>

<pre><code class="language-yaml">spec:
  updateStrategy:
    type: OnDelete  # Chỉ update khi Pod bị delete thủ công</code></pre>

<pre><code class="language-bash"># Với OnDelete, sau khi update spec, phải manually delete Pods
kubectl delete pod postgres-2 -n production  # Update pod-2
kubectl delete pod postgres-1 -n production  # Update pod-1
kubectl delete pod postgres-0 -n production  # Update pod-0 (primary) - cuối cùng</code></pre>

<h2>CloudNativePG: New Standard for PostgreSQL</h2>

<h3>Why CloudNativePG?</h3>

<p>StatefulSet pure for PostgreSQL still requires a lot of manual work: streaming replication setup, failover, backup management, monitoring. <strong>CloudNativePG (CNPG)</strong> is CNCF project (Sandbox 2022, Incubating 2024) designed specifically for PostgreSQL on Kubernetes.</p>

<pre><code class="language-bash"># Cài CloudNativePG Operator
kubectl apply -f \
  https://raw.githubusercontent.com/cloudnative-pg/cloudnative-pg/release-1.23/releases/cnpg-1.23.0.yaml

# Verify
kubectl get pods -n cnpg-system</code></pre>

<pre><code class="language-yaml"># PostgreSQL cluster với CloudNativePG
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-production
  namespace: production
spec:
  instances: 3  # 1 primary + 2 replicas
  imageName: ghcr.io/cloudnative-pg/postgresql:16.3

  # PostgreSQL configuration
  postgresql:
    parameters:
      max_connections: "200"
      shared_buffers: "512MB"
      effective_cache_size: "2GB"
      maintenance_work_mem: "128MB"
      wal_level: "replica"
      max_wal_senders: "10"

  # Bootstrap từ scratch
  bootstrap:
    initdb:
      database: myapp
      owner: myapp_user
      secret:
        name: postgres-credentials

  # Storage
  storage:
    size: 100Gi
    storageClass: longhorn-replicated

  # Backup sang S3
  backup:
    barmanObjectStore:
      destinationPath: s3://my-backups/postgres
      s3Credentials:
        accessKeyId:
          name: aws-credentials
          key: ACCESS_KEY_ID
        secretAccessKey:
          name: aws-credentials
          key: SECRET_ACCESS_KEY
      wal:
        compression: gzip
    retentionPolicy: "30d"

  # Monitoring
  monitoring:
    enablePodMonitor: true  # Tích hợp với Prometheus Operator

  # Resources
  resources:
    requests:
      cpu: 500m
      memory: 1Gi
    limits:
      cpu: 2000m
      memory: 4Gi</code></pre>

<pre><code class="language-bash"># Verify cluster
kubectl get cluster postgres-production -n production
kubectl get pods -n production -l cnpg.io/cluster=postgres-production

# Xem trạng thái primary/replica
kubectl describe cluster postgres-production -n production
# ...
# Status:
#   Current Primary: postgres-production-1
#   Ready Instances: 3
#   Phase: Cluster in healthy state

# Kết nối qua service
# Primary (read-write): postgres-production-rw
# Replica (read-only): postgres-production-ro
# Bất kỳ instance nào: postgres-production-r

kubectl exec -it postgres-production-1 -n production -- psql -U myapp_user myapp

# Trigger manual failover (nếu cần)
kubectl cnpg promote postgres-production postgres-production-2 -n production

# On-demand backup
kubectl cnpg backup postgres-production -n production</code></pre>

<h2>When to Use an Operator Instead of a Plain StatefulSet?</h2>

<h3>StatefulSet Pure Match When:</h3>
<ul>
  <li>Simple application, no need to be complicated like large databases__HTMLTAG_169___
  <li>Do you have enough expertise to manage replication and failover yourself__HTMLTAG_171___
  <li>Need maximum control over every aspect of deployment</li>
  <li>Application does not have a mature operator__HTMLTAG_175___
</ul><h3>Operator Appropriate When:</h3>
<ul>
  <li>Database/stateful system complex: PostgreSQL, MySQL, Kafka, Elasticsearch</li>
  <li>Need automated failover, backup, restore</li>
  <li>Team does not have deep expertise about specific system</li>
  <li>Want Day-2 operations to be automated (upgrades, scaling, certificates)</li>
</ul>

<h3>Recommended Operators (2026)</h3>

<ul>
  <li><strong>PostgreSQL</strong>: CloudNativePG (CNCF Incubating) — production-ready, active development</li>
  <li><strong>MySQL</strong>: MySQL Operator by Oracle or Percona Operator for MySQL</li>
  <li><strong>Kafka</strong>: Strimzi (CNCF Incubating) — mature, feature-rich</li>
  <li><strong>Redis</strong>: Redis Operator by OpsTree or Spotahome Redis Operator</li>
  <li><strong>Elasticsearch/OpenSearch</strong>: ECK (Elastic Cloud on Kubernetes) or OpenSearch Operator</li>
  <li><strong>MongoDB</strong>: MongoDB Community Operator</li>
</ul>

<h2>Summary__HTMLTAG_218___

<p>StatefulSets are essential tools for stateful workloads in Kubernetes, but understanding when to use pure StatefulSets and when to use Operators is important:</p>

<ul>
  <li><strong>StatefulSet</strong> ensures stable identity, ordered ops, and persistent storage per Pod — what stateful apps need__HTMLTAG_225___
  <li><strong>Headless Service</strong> is required to create DNS records for peer discovery</li>
  <li><strong>volumeClaimTemplates</strong> automatically creates private PVC for each Pod — no shared storage</li>
  <li><strong>Ordered deployment/deletion</strong>: 0→N when deploying, N→0 when scaling down — ensuring safety for distributed systems__HTMLTAG_237___
  <li><strong>Partition rolling updates</strong> allows canary deploy with StatefulSet</li>
  <li><strong>CloudNativePG</strong> is the best standard for PostgreSQL production on K8s in 2026</li>
  <li>With complex databases, <strong>Operators</strong>significantly saves time and reduces operational risks__HTMLTAG_249___
</ul>