---
id: 019e1a00-aa01-7001-c001-k8sha000503
title: 'BÀI 23: REDIS HA — SENTINEL VÀ CLUSTER MODE'
slug: bai-23-redis-ha-sentinel-va-cluster-mode
description: >-
  Deploy Redis HA trên Kubernetes với hai mode: Sentinel (master-replica)
  và Cluster (sharding), caching strategies, persistence,
  monitoring và best practices.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 23
section_title: 'Phần 5: Message Queue HA (RabbitMQ, Kafka, Redis)'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Hiểu Redis Sentinel vs Cluster mode — khi nào dùng gì</li>
<li>✅ Deploy Redis Sentinel HA trên Kubernetes</li>
<li>✅ Deploy Redis Cluster mode (sharding)</li>
<li>✅ Cấu hình persistence: RDB vs AOF</li>
<li>✅ Caching strategies và best practices</li>
<li>✅ Monitoring Redis với Prometheus</li>
</ul>

<hr>

<h2 id="phan-1-kien-truc">PHẦN 1: REDIS HA — SENTINEL vs CLUSTER</h2>

<pre><code>
Redis Sentinel Mode (Master-Replica + Failover):

┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Sentinel 1  │     │ Sentinel 2  │     │ Sentinel 3  │
│ (Quorum)    │◄───►│ (Quorum)    │◄───►│ (Quorum)    │
└──────┬──────┘     └──────┬──────┘     └──────┬──────┘
       │                   │                   │
       ▼                   ▼                   ▼
┌──────────┐        ┌──────────┐        ┌──────────┐
│  MASTER  │───────►│ REPLICA 1│        │ REPLICA 2│
│  (R/W)   │───────►│  (Read)  │        │  (Read)  │
└──────────┘        └──────────┘        └──────────┘

Redis Cluster Mode (Sharding):

┌─────────────────────────────────────────────────────┐
│                 16384 Hash Slots                     │
├─────────────┬─────────────┬─────────────────────────┤
│ Slots 0-5460│ Slots 5461- │ Slots 10923-16383      │
│             │ 10922       │                         │
│ ┌────────┐  │ ┌────────┐  │ ┌────────┐             │
│ │Master 1│  │ │Master 2│  │ │Master 3│             │
│ └───┬────┘  │ └───┬────┘  │ └───┬────┘             │
│     │       │     │       │     │                   │
│ ┌───▼────┐  │ ┌───▼────┐  │ ┌───▼────┐             │
│ │Replica │  │ │Replica │  │ │Replica │             │
│ │  1a    │  │ │  2a    │  │ │  3a    │             │
│ └────────┘  │ └────────┘  │ └────────┘             │
└─────────────┴─────────────┴─────────────────────────┘
</code></pre>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Feature</th><th>Sentinel Mode</th><th>Cluster Mode</th></tr>
</thead>
<tbody>
<tr><td>Data Distribution</td><td>All data trên Master</td><td>Sharded (hash slots)</td></tr>
<tr><td>Max Dataset Size</td><td>Single node RAM</td><td>Sum of all masters' RAM</td></tr>
<tr><td>Read Scaling</td><td>Read replicas</td><td>Read replicas per shard</td></tr>
<tr><td>Write Scaling</td><td>Single master only</td><td>Multiple masters (horizontal)</td></tr>
<tr><td>Failover</td><td>Sentinel quorum vote</td><td>Built-in (gossip protocol)</td></tr>
<tr><td>Multi-key Ops</td><td>Supported</td><td>Only same hash slot ({tag})</td></tr>
<tr><td>Complexity</td><td>Simple</td><td>More complex</td></tr>
<tr><td>Best For</td><td>Cache, sessions (&lt; 32GB)</td><td>Large datasets, high write throughput</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-sentinel">PHẦN 2: DEPLOY REDIS SENTINEL HA</h2>

<h3 id="21-helm-install">2.1. Install với Bitnami Helm Chart</h3>
<pre><code class="language-bash"># Add Bitnami repo:
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

# Install Redis Sentinel:
helm install redis-sentinel bitnami/redis \
  --namespace caching \
  --create-namespace \
  --set architecture=replication \
  --set auth.password="$(openssl rand -base64 32)" \
  --set sentinel.enabled=true \
  --set sentinel.quorum=2 \
  --set replica.replicaCount=3 \
  --set sentinel.resources.requests.cpu=100m \
  --set sentinel.resources.requests.memory=128Mi \
  --set master.persistence.storageClass=ceph-block \
  --set master.persistence.size=10Gi \
  --set replica.persistence.storageClass=ceph-block \
  --set replica.persistence.size=10Gi \
  --set master.resources.requests.cpu=250m \
  --set master.resources.requests.memory=512Mi \
  --set master.resources.limits.cpu=1 \
  --set master.resources.limits.memory=1Gi \
  --set metrics.enabled=true \
  --set metrics.serviceMonitor.enabled=true
</code></pre>

<h3 id="22-custom-values">2.2. Custom Values File (chi tiết)</h3>
<pre><code class="language-yaml"># redis-sentinel-values.yaml:
architecture: replication

auth:
  enabled: true
  existingSecret: redis-secret
  existingSecretPasswordKey: password

master:
  count: 1
  persistence:
    enabled: true
    storageClass: ceph-block
    size: 10Gi
  resources:
    requests:
      cpu: 250m
      memory: 512Mi
    limits:
      cpu: "1"
      memory: 1Gi
  configuration: |
    maxmemory 768mb
    maxmemory-policy allkeys-lru
    save 900 1
    save 300 10
    save 60 10000
    appendonly yes
    appendfsync everysec
    no-appendfsync-on-rewrite yes
    auto-aof-rewrite-percentage 100
    auto-aof-rewrite-min-size 64mb
    tcp-keepalive 300
    timeout 0
    hz 10
    dynamic-hz yes

replica:
  replicaCount: 2
  persistence:
    enabled: true
    storageClass: ceph-block
    size: 10Gi
  resources:
    requests:
      cpu: 250m
      memory: 512Mi
    limits:
      cpu: "1"
      memory: 1Gi

sentinel:
  enabled: true
  quorum: 2
  downAfterMilliseconds: 5000
  failoverTimeout: 60000
  resources:
    requests:
      cpu: 100m
      memory: 128Mi

metrics:
  enabled: true
  serviceMonitor:
    enabled: true
    namespace: monitoring
  resources:
    requests:
      cpu: 50m
      memory: 64Mi

podAntiAffinityPreset: hard
</code></pre>

<pre><code class="language-bash"># Deploy with values:
kubectl create namespace caching

kubectl -n caching create secret generic redis-secret \
  --from-literal=password="$(openssl rand -base64 32)"

helm install redis-sentinel bitnami/redis \
  --namespace caching \
  -f redis-sentinel-values.yaml

# Verify:
kubectl -n caching get pods
# redis-sentinel-node-0   3/3   Running   (master + sentinel + metrics)
# redis-sentinel-node-1   3/3   Running   (replica + sentinel + metrics)
# redis-sentinel-node-2   3/3   Running   (replica + sentinel + metrics)

# Check sentinel:
kubectl -n caching exec redis-sentinel-node-0 -c sentinel -- \
  redis-cli -p 26379 sentinel masters
# name: mymaster
# ip: redis-sentinel-node-0.redis-sentinel-headless.caching
# port: 6379
# flags: master
# num-slaves: 2
# num-other-sentinels: 2
# quorum: 2
</code></pre>

<hr>

<h2 id="phan-3-cluster-mode">PHẦN 3: DEPLOY REDIS CLUSTER MODE</h2>

<pre><code class="language-yaml"># redis-cluster-values.yaml:
# Cho workloads cần horizontal write scaling
architecture: cluster

cluster:
  nodes: 6               # 3 masters + 3 replicas
  replicas: 1             # 1 replica per master

auth:
  enabled: true
  existingSecret: redis-cluster-secret

persistence:
  enabled: true
  storageClass: ceph-block
  size: 10Gi

resources:
  requests:
    cpu: 250m
    memory: 512Mi
  limits:
    cpu: "1"
    memory: 1Gi

redis:
  configmap: |
    maxmemory 768mb
    maxmemory-policy allkeys-lru
    cluster-require-full-coverage no
    cluster-allow-reads-when-down yes

metrics:
  enabled: true
  serviceMonitor:
    enabled: true

podAntiAffinityPreset: hard
</code></pre>

<pre><code class="language-bash"># Deploy Redis Cluster:
helm install redis-cluster bitnami/redis-cluster \
  --namespace caching \
  -f redis-cluster-values.yaml

# Verify cluster:
kubectl -n caching exec redis-cluster-0 -- \
  redis-cli -a "$REDIS_PASSWORD" cluster info
# cluster_state:ok
# cluster_slots_assigned:16384
# cluster_slots_ok:16384
# cluster_size:3
# cluster_known_nodes:6

# Check slot distribution:
kubectl -n caching exec redis-cluster-0 -- \
  redis-cli -a "$REDIS_PASSWORD" cluster nodes
# node-id master 10.244.1.x:6379 0-5460
# node-id master 10.244.2.x:6379 5461-10922
# node-id master 10.244.3.x:6379 10923-16383
</code></pre>

<hr>

<h2 id="phan-4-persistence">PHẦN 4: PERSISTENCE — RDB vs AOF</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Feature</th><th>RDB (Snapshotting)</th><th>AOF (Append-Only File)</th><th>RDB + AOF</th></tr>
</thead>
<tbody>
<tr><td>Mechanism</td><td>Point-in-time snapshot</td><td>Log every write operation</td><td>Both</td></tr>
<tr><td>Data Loss</td><td>Up to last snapshot</td><td>~1 second (appendfsync everysec)</td><td>Minimal</td></tr>
<tr><td>Recovery Speed</td><td>Fast (load binary)</td><td>Slower (replay operations)</td><td>Uses RDB first</td></tr>
<tr><td>Disk I/O</td><td>Periodic burst (fork)</td><td>Continuous (small writes)</td><td>Both</td></tr>
<tr><td>File Size</td><td>Compact</td><td>Larger (rewrite helps)</td><td>Both files</td></tr>
<tr><td>Best For</td><td>Caching (acceptable loss)</td><td>Session store (minimal loss)</td><td>Production (recommended)</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<pre><code class="language-bash"># Configuration cho production (RDB + AOF):
# save 900 1       → Snapshot nếu 1 key change trong 900s
# save 300 10      → Snapshot nếu 10 keys change trong 300s  
# save 60 10000    → Snapshot nếu 10000 keys change trong 60s
# appendonly yes
# appendfsync everysec
</code></pre>

<hr>

<h2 id="phan-5-caching">PHẦN 5: CACHING STRATEGIES</h2>

<pre><code>
1. Cache-Aside (Lazy Loading):
   App ──► Cache HIT? ──► Return data
                │ MISS
                ▼
           Read from DB → Store in Cache → Return

2. Write-Through:
   App ──► Write to Cache ──► Write to DB (sync)

3. Write-Behind (Write-Back):
   App ──► Write to Cache ──► Async write to DB

4. Read-Through:
   App ──► Cache (auto-loads from DB on miss)
</code></pre>

<pre><code class="language-python"># Python example - Cache-Aside pattern:
import redis
import json

r = redis.Redis(
    host='redis-sentinel.caching.svc',
    port=26379,
    password=os.environ['REDIS_PASSWORD'],
    sentinel_manager=True,
    db=0,
    decode_responses=True
)

def get_user(user_id):
    cache_key = f"user:{user_id}"
    
    # Try cache first:
    cached = r.get(cache_key)
    if cached:
        return json.loads(cached)
    
    # Cache miss → query DB:
    user = db.query("SELECT * FROM users WHERE id = %s", user_id)
    
    # Store in cache with TTL:
    r.setex(cache_key, 3600, json.dumps(user))  # 1 hour TTL
    
    return user

def update_user(user_id, data):
    # Update DB first:
    db.execute("UPDATE users SET ... WHERE id = %s", user_id)
    
    # Invalidate cache:
    r.delete(f"user:{user_id}")
</code></pre>

<hr>

<h2 id="phan-6-app-connection">PHẦN 6: APPLICATION CONNECTION</h2>

<pre><code class="language-yaml"># App connecting to Redis Sentinel:
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  template:
    spec:
      containers:
        - name: app
          env:
            - name: REDIS_SENTINEL_HOST
              value: "redis-sentinel.caching.svc"
            - name: REDIS_SENTINEL_PORT
              value: "26379"
            - name: REDIS_MASTER_NAME
              value: "mymaster"
            - name: REDIS_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: redis-app-secret
                  key: password
</code></pre>

<hr>

<h2 id="phan-7-monitoring">PHẦN 7: MONITORING</h2>

<pre><code class="language-bash"># Key Redis metrics:
# redis_connected_clients          — Current connections
# redis_used_memory_bytes          — Memory usage
# redis_evicted_keys_total         — Keys evicted (maxmemory)
# redis_keyspace_hits_total        — Cache hits
# redis_keyspace_misses_total      — Cache misses
# redis_commands_processed_total   — Commands/sec

# Cache Hit Rate formula:
# hit_rate = hits / (hits + misses) × 100%
# Target: > 90%

# Grafana dashboard: ID 11835 (Redis Dashboard for Prometheus)
</code></pre>

<pre><code class="language-yaml"># Alerting:
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: redis-alerts
  namespace: caching
spec:
  groups:
    - name: redis
      rules:
        - alert: RedisHighMemory
          expr: redis_used_memory_bytes / redis_maxmemory > 0.9
          for: 5m
          labels:
            severity: warning

        - alert: RedisMasterDown
          expr: redis_up{role="master"} == 0
          for: 1m
          labels:
            severity: critical

        - alert: RedisLowCacheHitRate
          expr: |
            redis_keyspace_hits_total / 
            (redis_keyspace_hits_total + redis_keyspace_misses_total) < 0.8
          for: 15m
          labels:
            severity: warning
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Sentinel</strong>: Simple HA, single master, good for < 32GB datasets</li>
<li><strong>Cluster</strong>: Horizontal scaling, multi-master, for large datasets</li>
<li><strong>Persistence</strong>: RDB + AOF cho production, balance durability vs performance</li>
<li><strong>maxmemory-policy</strong>: allkeys-lru phổ biến nhất cho caching</li>
<li><strong>Cache-Aside</strong>: Pattern nên dùng, invalidate on write</li>
<li><strong>Monitor</strong>: Cache hit rate > 90%, memory usage, evictions</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Redis Sentinel Failover</h3>
<ul>
<li>Deploy Redis Sentinel 3-node</li>
<li>Write data to master, kill master pod</li>
<li>Verify Sentinel promotes replica, data intact</li>
</ul>

<h3 id="bt2">Bài tập 2: Benchmark</h3>
<ul>
<li>Run redis-benchmark: SET/GET 100,000 keys</li>
<li>Compare latency: with/without persistence</li>
<li>Monitor memory fragmentation ratio</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 24: Kiến trúc Istio Service Mesh</strong>, chúng ta sẽ tìm hiểu service mesh và deploy Istio cho microservices communication.</p>
