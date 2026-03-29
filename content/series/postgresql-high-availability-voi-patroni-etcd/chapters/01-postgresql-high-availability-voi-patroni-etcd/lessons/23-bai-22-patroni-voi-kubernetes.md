---
id: 019c9617-fba4-73b9-bb9a-c345301dc226
title: 'Bài 22: Patroni với Kubernetes'
slug: bai-22-patroni-voi-kubernetes
description: >-
  Deploy Patroni trên Kubernetes với Patroni operator, StatefulSets, Persistent
  Volumes và Helm charts.
duration_minutes: 155
is_free: true
video_url: null
sort_order: 22
section_title: PostgreSQL High Availability với Patroni & etcd
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---
<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Deploy Patroni cluster trên Kubernetes</li><li>Configure StatefulSets và PersistentVolumes</li><li>Use Patroni Kubernetes operator</li><li>Implement storage classes và volume management</li><li>Monitor và scale Patroni trong K8s environment</li></ul><h2 id="1-kubernetes-architecture-for-patroni">1. Kubernetes Architecture for Patroni</h2><h3 id="11-components">1.1. Components</h3><pre><code class="language-text">Kubernetes Cluster:
├─ StatefulSet: postgres-cluster
│  ├─ Pod: postgres-0 (Leader)
│  ├─ Pod: postgres-1 (Replica)
│  └─ Pod: postgres-2 (Replica)
├─ Service: postgres-master (ClusterIP)
├─ Service: postgres-replica (ClusterIP)
├─ Service: postgres-config (Headless)
├─ ConfigMap: postgres-config
├─ Secret: postgres-credentials
└─ PersistentVolumeClaims:
   ├─ pgdata-postgres-0
   ├─ pgdata-postgres-1
   └─ pgdata-postgres-2

DCS: Kubernetes API (replaces etcd!)
</code></pre><h3 id="12-advantages-of-k8s">1.2. Advantages of K8s</h3><ul><li><strong>No separate etcd needed</strong>&nbsp;- Uses Kubernetes API for DCS</li><li><strong>Built-in scheduling</strong>&nbsp;- K8s handles pod placement</li><li><strong>Storage management</strong>&nbsp;- PVCs auto-provisioned</li><li><strong>Service discovery</strong>&nbsp;- K8s Services for endpoints</li><li><strong>Rolling updates</strong>&nbsp;- Native K8s feature</li><li><strong>Resource limits</strong>&nbsp;- CPU/memory guaranteed</li></ul><h2 id="2-prerequisites">2. Prerequisites</h2><h3 id="21-kubernetes-cluster">2.1. Kubernetes cluster</h3><pre><code class="language-bash"># Using kind (Kubernetes in Docker) for local testing
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.20.0/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind

# Create cluster
kind create cluster --name postgres-ha

# Or use existing K8s cluster (GKE, EKS, AKS)
</code></pre><h3 id="22-kubectl-setup">2.2. kubectl setup</h3><pre><code class="language-bash"># Install kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# Verify
kubectl version --client
kubectl cluster-info
</code></pre><h3 id="23-helm-optional">2.3. Helm (optional)</h3><pre><code class="language-bash"># Install Helm
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# Verify
helm version
</code></pre><h2 id="3-manual-deployment-with-statefulsets">3. Manual Deployment with StatefulSets</h2><h3 id="31-create-namespace">3.1. Create namespace</h3><pre><code class="language-yaml"># namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: postgres-ha
</code></pre><pre><code class="language-bash">kubectl apply -f namespace.yaml
</code></pre><h3 id="32-configmap">3.2. ConfigMap</h3><pre><code class="language-yaml"># configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: postgres-config
  namespace: postgres-ha
data:
  patroni.yml: |
    scope: postgres-cluster
    namespace: /service/
    
    kubernetes:
      labels:
        application: patroni
        cluster-name: postgres-cluster
      scope_label: cluster-name
      role_label: role
      use_endpoints: true
      pod_ip: $(POD_IP)
      ports:
        - name: postgresql
          port: 5432
    
    bootstrap:
      dcs:
        ttl: 30
        loop_wait: 10
        retry_timeout: 10
        maximum_lag_on_failover: 1048576
        postgresql:
          use_pg_rewind: true
          parameters:
            max_connections: 100
            shared_buffers: 256MB
            effective_cache_size: 1GB
            maintenance_work_mem: 64MB
            checkpoint_completion_target: 0.9
            wal_buffers: 16MB
            default_statistics_target: 100
            random_page_cost: 1.1
            effective_io_concurrency: 200
            work_mem: 2621kB
            min_wal_size: 1GB
            max_wal_size: 4GB
            max_worker_processes: 4
            max_parallel_workers_per_gather: 2
            max_parallel_workers: 4
            max_parallel_maintenance_workers: 2
      
      initdb:
        - encoding: UTF8
        - data-checksums
      
      pg_hba:
        - host replication replicator 0.0.0.0/0 scram-sha-256
        - host all all 0.0.0.0/0 scram-sha-256
    
    postgresql:
      listen: 0.0.0.0:5432
      connect_address: $(POD_IP):5432
      data_dir: /var/lib/postgresql/data/pgdata
      bin_dir: /usr/lib/postgresql/18/bin
      authentication:
        replication:
          username: replicator
          password: rep_password
        superuser:
          username: postgres
          password: postgres_password
      parameters:
        unix_socket_directories: '/var/run/postgresql'
    
    restapi:
      listen: 0.0.0.0:8008
      connect_address: $(POD_IP):8008
</code></pre><pre><code class="language-bash">kubectl apply -f configmap.yaml
</code></pre><h3 id="33-secret">3.3. Secret</h3><pre><code class="language-yaml"># secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: postgres-credentials
  namespace: postgres-ha
type: Opaque
stringData:
  postgres-password: postgres_password
  replicator-password: rep_password
</code></pre><pre><code class="language-bash">kubectl apply -f secret.yaml
</code></pre><h3 id="34-statefulset">3.4. StatefulSet</h3><pre><code class="language-yaml"># statefulset.yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
  namespace: postgres-ha
  labels:
    application: patroni
    cluster-name: postgres-cluster
spec:
  serviceName: postgres-config
  replicas: 3
  selector:
    matchLabels:
      application: patroni
      cluster-name: postgres-cluster
  template:
    metadata:
      labels:
        application: patroni
        cluster-name: postgres-cluster
    spec:
      serviceAccountName: postgres
      containers:
        - name: postgres
          image: postgres:18-alpine
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 5432
              name: postgresql
              protocol: TCP
            - containerPort: 8008
              name: patroni
              protocol: TCP
          env:
            - name: POD_IP
              valueFrom:
                fieldRef:
                  apiVersion: v1
                  fieldPath: status.podIP
            - name: POD_NAME
              valueFrom:
                fieldRef:
                  apiVersion: v1
                  fieldPath: metadata.name
            - name: POD_NAMESPACE
              valueFrom:
                fieldRef:
                  apiVersion: v1
                  fieldPath: metadata.namespace
            - name: PATRONI_KUBERNETES_POD_IP
              valueFrom:
                fieldRef:
                  apiVersion: v1
                  fieldPath: status.podIP
            - name: PATRONI_KUBERNETES_NAMESPACE
              valueFrom:
                fieldRef:
                  apiVersion: v1
                  fieldPath: metadata.namespace
            - name: PATRONI_KUBERNETES_LABELS
              value: "{application: patroni, cluster-name: postgres-cluster}"
            - name: PATRONI_SCOPE
              value: postgres-cluster
            - name: PATRONI_NAME
              valueFrom:
                fieldRef:
                  apiVersion: v1
                  fieldPath: metadata.name
            - name: PATRONI_POSTGRESQL_DATA_DIR
              value: /var/lib/postgresql/data/pgdata
            - name: PATRONI_REPLICATION_USERNAME
              value: replicator
            - name: PATRONI_REPLICATION_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: postgres-credentials
                  key: replicator-password
            - name: PATRONI_SUPERUSER_USERNAME
              value: postgres
            - name: PATRONI_SUPERUSER_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: postgres-credentials
                  key: postgres-password
          volumeMounts:
            - name: pgdata
              mountPath: /var/lib/postgresql/data
            - name: config
              mountPath: /etc/patroni
          livenessProbe:
            httpGet:
              path: /liveness
              port: 8008
              scheme: HTTP
            initialDelaySeconds: 30
            periodSeconds: 10
            timeoutSeconds: 5
            failureThreshold: 3
          readinessProbe:
            httpGet:
              path: /readiness
              port: 8008
              scheme: HTTP
            initialDelaySeconds: 10
            periodSeconds: 5
            timeoutSeconds: 3
            failureThreshold: 3
          resources:
            requests:
              cpu: 500m
              memory: 512Mi
            limits:
              cpu: 2000m
              memory: 2Gi
      volumes:
        - name: config
          configMap:
            name: postgres-config
  volumeClaimTemplates:
    - metadata:
        name: pgdata
      spec:
        accessModes: ["ReadWriteOnce"]
        storageClassName: standard  # Adjust for your K8s cluster
        resources:
          requests:
            storage: 10Gi
</code></pre><pre><code class="language-bash">kubectl apply -f statefulset.yaml
</code></pre><h3 id="35-services">3.5. Services</h3><pre><code class="language-yaml"># services.yaml
---
# Headless service for StatefulSet
apiVersion: v1
kind: Service
metadata:
  name: postgres-config
  namespace: postgres-ha
  labels:
    application: patroni
    cluster-name: postgres-cluster
spec:
  clusterIP: None
  ports:
    - port: 5432
      targetPort: 5432
      name: postgresql
    - port: 8008
      targetPort: 8008
      name: patroni
  selector:
    application: patroni
    cluster-name: postgres-cluster

---
# Service for master (read-write)
apiVersion: v1
kind: Service
metadata:
  name: postgres-master
  namespace: postgres-ha
  labels:
    application: patroni
    cluster-name: postgres-cluster
spec:
  type: ClusterIP
  ports:
    - port: 5432
      targetPort: 5432
      name: postgresql
  selector:
    application: patroni
    cluster-name: postgres-cluster
    role: master

---
# Service for replicas (read-only)
apiVersion: v1
kind: Service
metadata:
  name: postgres-replica
  namespace: postgres-ha
  labels:
    application: patroni
    cluster-name: postgres-cluster
spec:
  type: ClusterIP
  ports:
    - port: 5432
      targetPort: 5432
      name: postgresql
  selector:
    application: patroni
    cluster-name: postgres-cluster
    role: replica
</code></pre><pre><code class="language-bash">kubectl apply -f services.yaml
</code></pre><h3 id="36-rbac-service-account">3.6. RBAC (Service Account)</h3><pre><code class="language-yaml"># rbac.yaml
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: postgres
  namespace: postgres-ha

---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: postgres
  namespace: postgres-ha
rules:
  - apiGroups:
      - ""
    resources:
      - configmaps
    verbs:
      - create
      - get
      - list
      - patch
      - update
      - watch
      - delete
  - apiGroups:
      - ""
    resources:
      - endpoints
    verbs:
      - get
      - patch
      - update
      - create
      - list
      - watch
      - delete
  - apiGroups:
      - ""
    resources:
      - pods
    verbs:
      - get
      - list
      - patch
      - update
      - watch

---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: postgres
  namespace: postgres-ha
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: postgres
subjects:
  - kind: ServiceAccount
    name: postgres
</code></pre><pre><code class="language-bash">kubectl apply -f rbac.yaml
</code></pre><h2 id="4-verify-deployment">4. Verify Deployment</h2><h3 id="41-check-pods">4.1. Check pods</h3><pre><code class="language-bash">kubectl get pods -n postgres-ha -w

# Output:
# NAME         READY   STATUS    RESTARTS   AGE
# postgres-0   1/1     Running   0          2m
# postgres-1   1/1     Running   0          1m
# postgres-2   1/1     Running   0          30s
</code></pre><h3 id="42-check-statefulset">4.2. Check StatefulSet</h3><pre><code class="language-bash">kubectl get statefulset -n postgres-ha

kubectl describe statefulset postgres -n postgres-ha
</code></pre><h3 id="43-check-services">4.3. Check services</h3><pre><code class="language-bash">kubectl get svc -n postgres-ha

# NAME              TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)             AGE
# postgres-config   ClusterIP   None            &lt;none&gt;        5432/TCP,8008/TCP   3m
# postgres-master   ClusterIP   10.96.100.1     &lt;none&gt;        5432/TCP            3m
# postgres-replica  ClusterIP   10.96.100.2     &lt;none&gt;        5432/TCP            3m
</code></pre><h3 id="44-check-patroni-cluster">4.4. Check Patroni cluster</h3><pre><code class="language-bash"># Exec into pod
kubectl exec -it postgres-0 -n postgres-ha -- bash

# Inside pod
patronictl list

# + Cluster: postgres-cluster -------+----+-----------+
# | Member     | Host        | Role   | State     | TL | Lag in MB |
# +------------+-------------+--------+-----------+----+-----------+
# | postgres-0 | 10.244.0.5  | Leader | running   |  1 |           |
# | postgres-1 | 10.244.0.6  | Replica| streaming |  1 |         0 |
# | postgres-2 | 10.244.0.7  | Replica| streaming |  1 |         0 |
# +------------+-------------+--------+-----------+----+-----------+
</code></pre><h3 id="45-test-connection">4.5. Test connection</h3><pre><code class="language-bash"># From within cluster
kubectl run -it --rm psql-client --image=postgres:18 --restart=Never -n postgres-ha -- \
  psql -h postgres-master -U postgres

# Create test table
CREATE TABLE k8s_test (id serial primary key, data text);
INSERT INTO k8s_test (data) VALUES ('Hello from Kubernetes!');
SELECT * FROM k8s_test;
</code></pre><h2 id="5-using-zalando-postgres-operator">5. Using Zalando Postgres Operator</h2><h3 id="51-install-operator">5.1. Install operator</h3><pre><code class="language-bash"># Clone operator repo
git clone https://github.com/zalando/postgres-operator.git
cd postgres-operator

# Install via kubectl
kubectl apply -k kustomize/operator/

# Or via Helm
helm repo add postgres-operator-charts https://opensource.zalando.com/postgres-operator/charts/postgres-operator
helm install postgres-operator postgres-operator-charts/postgres-operator
</code></pre><h3 id="52-create-postgresql-cluster">5.2. Create PostgreSQL cluster</h3><pre><code class="language-yaml"># postgres-cluster.yaml
apiVersion: "acid.zalan.do/v1"
kind: postgresql
metadata:
  name: acid-postgres-cluster
  namespace: postgres-ha
spec:
  teamId: "myteam"
  volume:
    size: 10Gi
    storageClass: standard
  numberOfInstances: 3
  users:
    myapp:
      - superuser
      - createdb
  databases:
    myapp: myapp
  postgresql:
    version: "18"
    parameters:
      shared_buffers: "256MB"
      max_connections: "100"
      log_statement: "all"
  resources:
    requests:
      cpu: 500m
      memory: 512Mi
    limits:
      cpu: 2000m
      memory: 2Gi
  patroni:
    initdb:
      encoding: "UTF8"
      locale: "en_US.UTF-8"
      data-checksums: "true"
    pg_hba:
      - hostssl all all 0.0.0.0/0 scram-sha-256
      - host all all 0.0.0.0/0 scram-sha-256
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 33554432
  backup:
    schedule: "0 2 * * *"
    retentionPolicy: "7d"
</code></pre><pre><code class="language-bash">kubectl apply -f postgres-cluster.yaml
</code></pre><h3 id="53-check-cluster-status">5.3. Check cluster status</h3><pre><code class="language-bash">kubectl get postgresql -n postgres-ha

# NAME                   TEAM     VERSION   PODS   VOLUME   CPU-REQUEST   MEMORY-REQUEST   AGE   STATUS
# acid-postgres-cluster  myteam   18        3      10Gi     500m          512Mi            2m    Running

kubectl get pods -l cluster-name=acid-postgres-cluster -n postgres-ha
</code></pre><h3 id="54-connect-to-cluster">5.4. Connect to cluster</h3><pre><code class="language-bash"># Get password
export PGPASSWORD=$(kubectl get secret myapp.acid-postgres-cluster.credentials.postgresql.acid.zalan.do \
  -n postgres-ha -o jsonpath='{.data.password}' | base64 -d)

# Port-forward
kubectl port-forward svc/acid-postgres-cluster 5432:5432 -n postgres-ha &amp;

# Connect
psql -h localhost -U myapp -d myapp
</code></pre><h2 id="6-storage-management">6. Storage Management</h2><h3 id="61-storageclass-for-performance">6.1. StorageClass for performance</h3><pre><code class="language-yaml"># storageclass.yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: postgres-fast
provisioner: kubernetes.io/aws-ebs  # Or GCE, Azure, etc.
parameters:
  type: gp3  # AWS EBS GP3 (faster than GP2)
  iops: "3000"
  throughput: "125"
  fsType: ext4
volumeBindingMode: WaitForFirstConsumer
allowVolumeExpansion: true
reclaimPolicy: Retain  # Don't delete PV on PVC deletion
</code></pre><pre><code class="language-bash">kubectl apply -f storageclass.yaml

# Update StatefulSet to use new StorageClass
# volumeClaimTemplates.spec.storageClassName: postgres-fast
</code></pre><h3 id="62-volume-expansion">6.2. Volume expansion</h3><pre><code class="language-bash"># Enable volume expansion in StorageClass
# allowVolumeExpansion: true

# Edit PVC
kubectl edit pvc pgdata-postgres-0 -n postgres-ha

# Change: storage: 10Gi → storage: 20Gi

# K8s will automatically expand the volume
kubectl get pvc -n postgres-ha -w
</code></pre><h3 id="63-backup-volumes">6.3. Backup volumes</h3><pre><code class="language-bash"># Using VolumeSnapshot (if supported by storage provider)
# snapshot.yaml
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshot
metadata:
  name: postgres-0-snapshot
  namespace: postgres-ha
spec:
  volumeSnapshotClassName: csi-snapclass
  source:
    persistentVolumeClaimName: pgdata-postgres-0
</code></pre><pre><code class="language-bash">kubectl apply -f snapshot.yaml
kubectl get volumesnapshot -n postgres-ha
</code></pre><h2 id="7-monitoring-on-kubernetes">7. Monitoring on Kubernetes</h2><h3 id="71-prometheus-servicemonitor">7.1. Prometheus ServiceMonitor</h3><pre><code class="language-yaml"># servicemonitor.yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: postgres
  namespace: postgres-ha
  labels:
    prometheus: kube-prometheus
spec:
  selector:
    matchLabels:
      application: patroni
      cluster-name: postgres-cluster
  endpoints:
    - port: patroni
      path: /metrics
      interval: 30s
</code></pre><pre><code class="language-bash">kubectl apply -f servicemonitor.yaml
</code></pre><h3 id="72-grafana-dashboard">7.2. Grafana dashboard</h3><pre><code class="language-bash"># Import Patroni dashboard
# Dashboard ID: 9628 (from grafana.com)

# Or create custom dashboard
kubectl port-forward svc/grafana 3000:3000 -n monitoring
</code></pre><h3 id="73-logs-with-loki">7.3. Logs with Loki</h3><pre><code class="language-yaml"># promtail-config.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: promtail-config
  namespace: postgres-ha
data:
  promtail.yaml: |
    server:
      http_listen_port: 9080
      grpc_listen_port: 0
    
    clients:
      - url: http://loki:3100/loki/api/v1/push
    
    scrape_configs:
      - job_name: postgres
        kubernetes_sd_configs:
          - role: pod
            namespaces:
              names:
                - postgres-ha
        relabel_configs:
          - source_labels: [__meta_kubernetes_pod_label_application]
            action: keep
            regex: patroni
</code></pre><h2 id="8-scaling-and-updates">8. Scaling and Updates</h2><h3 id="81-scale-cluster">8.1. Scale cluster</h3><pre><code class="language-bash"># Scale up
kubectl scale statefulset postgres --replicas=5 -n postgres-ha

# Scale down (careful!)
kubectl scale statefulset postgres --replicas=3 -n postgres-ha
</code></pre><h3 id="82-rolling-update">8.2. Rolling update</h3><pre><code class="language-bash"># Update PostgreSQL version
kubectl set image statefulset/postgres postgres=postgres:18.1-alpine -n postgres-ha

# Or edit StatefulSet
kubectl edit statefulset postgres -n postgres-ha

# K8s will update pods one by one
kubectl rollout status statefulset/postgres -n postgres-ha
</code></pre><h3 id="83-manual-failover">8.3. Manual failover</h3><pre><code class="language-bash"># Exec into any pod
kubectl exec -it postgres-0 -n postgres-ha -- bash

# Perform switchover
patronictl switchover postgres-cluster --master postgres-0 --candidate postgres-1
</code></pre><h2 id="9-troubleshooting">9. Troubleshooting</h2><h3 id="91-pod-stuck-in-pending">9.1. Pod stuck in Pending</h3><pre><code class="language-bash">kubectl describe pod postgres-0 -n postgres-ha

# Common issues:
# - Insufficient resources (CPU/memory)
# - PVC not bound
# - Node affinity rules not satisfied
</code></pre><h3 id="92-replication-not-working">9.2. Replication not working</h3><pre><code class="language-bash">kubectl logs postgres-1 -n postgres-ha

# Check Patroni status
kubectl exec -it postgres-1 -n postgres-ha -- patronictl list

# Check PostgreSQL logs
kubectl exec -it postgres-1 -n postgres-ha -- tail -f /var/lib/postgresql/data/pgdata/log/postgresql-*.log
</code></pre><h3 id="93-leader-election-issues">9.3. Leader election issues</h3><pre><code class="language-bash"># Check Kubernetes Endpoints
kubectl get endpoints -n postgres-ha

# Check RBAC permissions
kubectl auth can-i create endpoints --as=system:serviceaccount:postgres-ha:postgres -n postgres-ha
</code></pre><h2 id="10-best-practices">10. Best Practices</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>Use StatefulSets</strong>&nbsp;- Stable network identity</li><li><strong>Set resource limits</strong>&nbsp;- Prevent OOM kills</li><li><strong>Enable PV retention</strong>&nbsp;- Don't lose data on deletion</li><li><strong>Use headless service</strong>&nbsp;- For StatefulSet discovery</li><li><strong>Monitor with Prometheus</strong>&nbsp;- Track health</li><li><strong>Use operators</strong>&nbsp;- Simplify management</li><li><strong>Test failover</strong>&nbsp;- Regularly validate HA</li><li><strong>Backup to external storage</strong>&nbsp;- S3, GCS, etc.</li><li><strong>Use anti-affinity</strong>&nbsp;- Spread pods across nodes</li><li><strong>Document procedures</strong>&nbsp;- For operations team</li></ol><h3 id="%E2%9D%8C-dont">❌ DON'T</h3><ol><li><strong>Don't use Deployments</strong>&nbsp;- Use StatefulSets</li><li><strong>Don't skip resource limits</strong>&nbsp;- Can crash node</li><li><strong>Don't delete PVCs</strong>&nbsp;- Unless sure about data loss</li><li><strong>Don't ignore pod affinity</strong>&nbsp;- All pods on same node = bad</li><li><strong>Don't use emptyDir</strong>&nbsp;- Data lost on pod restart</li><li><strong>Don't skip backups</strong>&nbsp;- K8s is not a backup solution</li></ol><h2 id="11-lab-exercises">11. Lab Exercises</h2><h3 id="lab-1-deploy-patroni-with-statefulsets">Lab 1: Deploy Patroni with StatefulSets</h3><p><strong>Tasks</strong>:</p><ol><li>Create namespace and RBAC</li><li>Deploy ConfigMap and Secret</li><li>Create StatefulSet with 3 replicas</li><li>Deploy Services</li><li>Verify cluster status</li></ol><h3 id="lab-2-test-failover-in-kubernetes">Lab 2: Test failover in Kubernetes</h3><p><strong>Tasks</strong>:</p><ol><li>Delete leader pod</li><li>Observe automatic failover</li><li>Verify new leader elected</li><li>Check application connectivity</li><li>Document RTO</li></ol><h3 id="lab-3-use-zalando-postgres-operator">Lab 3: Use Zalando Postgres Operator</h3><p><strong>Tasks</strong>:</p><ol><li>Install operator</li><li>Create PostgreSQL cluster CR</li><li>Connect and create database</li><li>Scale cluster up/down</li><li>Test rolling update</li></ol><h3 id="lab-4-monitor-with-prometheus">Lab 4: Monitor with Prometheus</h3><p><strong>Tasks</strong>:</p><ol><li>Deploy Prometheus Operator</li><li>Create ServiceMonitor</li><li>Query metrics in Prometheus</li><li>Create Grafana dashboard</li><li>Setup alerting rules</li></ol><h2 id="12-t%E1%BB%95ng-k%E1%BA%BFt">12. Tổng kết</h2><h3 id="kubernetes-vs-traditional">Kubernetes vs Traditional</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Aspect</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Traditional</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Kubernetes</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">DCS</td><td style="padding: 5px 10px;">etcd cluster</td><td style="padding: 5px 10px;">K8s API</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Storage</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Local disks</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">PVCs</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Service discovery</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">DNS/HAProxy</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">K8s Services</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Scaling</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Manual</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">kubectl scale</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Updates</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Manual SSH</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Rolling updates</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Monitoring</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Separate setup</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">ServiceMonitor</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="key-concepts">Key Concepts</h3><pre><code class="language-text">StatefulSet: Ordered pod creation/deletion
PVC: Persistent data storage
Service: Endpoint discovery (master/replica)
ConfigMap: Patroni configuration
Secret: Passwords and credentials
RBAC: Kubernetes API access for Patroni
</code></pre><h3 id="next-steps">Next Steps</h3><p>Bài 23 sẽ cover&nbsp;<strong>Patroni Configuration Management</strong>:</p><ul><li>Dynamic configuration changes</li><li>DCS-based config storage</li><li>patronictl edit-config usage</li><li>Zero-downtime updates</li><li>Configuration validation</li></ul>
