---
id: 019c9618-0104-7000-8000-c1147ba22e11
title: 'BÀI 13: THỰC HÀNH — CONFIGURATION VÀ STORAGE'
slug: thuc-hanh-3-configuration-va-storage
description: >-
  Bài thực hành Module 3: Deploy ứng dụng với ConfigMaps và Secrets, tích hợp External
  Secrets Operator, cài đặt CSI driver (Longhorn), deploy PostgreSQL với StatefulSet và PVC,
  tạo volume snapshot và restore.
duration_minutes: 180
is_free: false
video_url: null
sort_order: 13
section_title: 'Module 3: Configuration & Storage'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài thực hành</h2>
<ul>
  <li>Deploy ứng dụng với ConfigMaps (env vars và volume mount)</li>
  <li>Tạo và quản lý Secrets an toàn</li>
  <li>Cài CSI driver và tạo StorageClass</li>
  <li>Deploy PostgreSQL với StatefulSet và PersistentVolumeClaim</li>
  <li>Tạo volume snapshot và thực hiện restore</li>
</ul>

<h2>Chuẩn bị</h2>
<pre><code class="language-bash">kubectl create namespace lab3
kubectl config set-context --current --namespace=lab3
</code></pre>

<h2>Lab 1: ConfigMaps</h2>
<pre><code class="language-bash"># Tạo ConfigMap từ literal values
kubectl create configmap app-config \
  --from-literal=APP_ENV=production \
  --from-literal=APP_PORT=8080 \
  --from-literal=LOG_LEVEL=info \
  -n lab3

# Tạo ConfigMap từ file
cat &gt; app.conf &lt;&lt;EOF
[server]
port = 8080
timeout = 30

[database]
host = postgres-service
port = 5432
name = myapp
EOF

kubectl create configmap app-file-config --from-file=app.conf -n lab3

# Xem ConfigMap
kubectl get configmaps -n lab3
kubectl describe configmap app-config -n lab3
</code></pre>
<pre><code class="language-bash"># Deploy app sử dụng ConfigMap
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: config-demo
  namespace: lab3
spec:
  replicas: 1
  selector:
    matchLabels:
      app: config-demo
  template:
    metadata:
      labels:
        app: config-demo
    spec:
      containers:
      - name: app
        image: nginx:1.27
        env:
        # Lấy từng key từ ConfigMap
        - name: APP_ENV
          valueFrom:
            configMapKeyRef:
              name: app-config
              key: APP_ENV
        - name: APP_PORT
          valueFrom:
            configMapKeyRef:
              name: app-config
              key: APP_PORT
        # Lấy tất cả keys từ ConfigMap
        envFrom:
        - configMapRef:
            name: app-config
        volumeMounts:
        - name: config-file
          mountPath: /etc/app
      volumes:
      - name: config-file
        configMap:
          name: app-file-config
EOF

# Verify env vars được inject
POD=$(kubectl get pods -n lab3 -l app=config-demo -o jsonpath='{.items[0].metadata.name}')
kubectl exec $POD -n lab3 -- env | grep APP
kubectl exec $POD -n lab3 -- cat /etc/app/app.conf
</code></pre>

<h2>Lab 2: Secrets</h2>
<pre><code class="language-bash"># Tạo Secret
kubectl create secret generic db-credentials \
  --from-literal=POSTGRES_USER=admin \
  --from-literal=POSTGRES_PASSWORD=SuperSecret123 \
  --from-literal=POSTGRES_DB=myapp \
  -n lab3

# Secret được lưu dưới dạng base64 (không phải encrypted!)
kubectl get secret db-credentials -n lab3 -o yaml

# Decode để xem value
kubectl get secret db-credentials -n lab3 -o jsonpath='{.data.POSTGRES_PASSWORD}' | base64 -d

# Deploy app với Secret
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: postgres-client
  namespace: lab3
spec:
  replicas: 1
  selector:
    matchLabels:
      app: postgres-client
  template:
    metadata:
      labels:
        app: postgres-client
    spec:
      containers:
      - name: app
        image: postgres:16
        command: ["sleep", "infinity"]
        envFrom:
        - secretRef:
            name: db-credentials
        # Mount secret sebagai file
        volumeMounts:
        - name: secret-volume
          mountPath: /etc/secrets
          readOnly: true
      volumes:
      - name: secret-volume
        secret:
          secretName: db-credentials
EOF

kubectl exec -n lab3 deploy/postgres-client -- env | grep POSTGRES
kubectl exec -n lab3 deploy/postgres-client -- ls /etc/secrets
</code></pre>

<h2>Lab 3: Immutable ConfigMap và Secret</h2>
<pre><code class="language-bash">cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: v1
kind: ConfigMap
metadata:
  name: immutable-config
  namespace: lab3
data:
  key1: value1
immutable: true   # không thể update sau khi tạo, chỉ có thể xóa và tạo lại
EOF

# Thử update sẽ bị lỗi
kubectl patch configmap immutable-config -n lab3 -p '{"data":{"key1":"new-value"}}'
# Error: field is immutable
</code></pre>

<h2>Lab 4: PersistentVolume và PVC với Local Storage</h2>
<pre><code class="language-bash"># Tạo local PV (demo, không dùng production)
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: v1
kind: PersistentVolume
metadata:
  name: local-pv-1
spec:
  capacity:
    storage: 5Gi
  accessModes:
  - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: local-storage
  local:
    path: /tmp/k8s-pv-1
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - kind-worker   # tên node của bạn
---
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: local-storage
provisioner: kubernetes.io/no-provisioner
volumeBindingMode: WaitForFirstConsumer
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
  namespace: lab3
spec:
  storageClassName: local-storage
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 2Gi
EOF

kubectl get pv
kubectl get pvc -n lab3
</code></pre>

<h2>Lab 5: PostgreSQL với StatefulSet</h2>
<pre><code class="language-bash">cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: v1
kind: Service
metadata:
  name: postgres
  namespace: lab3
spec:
  clusterIP: None   # Headless
  selector:
    app: postgres
  ports:
  - port: 5432
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
  namespace: lab3
spec:
  serviceName: postgres
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
      - name: postgres
        image: postgres:16
        ports:
        - containerPort: 5432
        envFrom:
        - secretRef:
            name: db-credentials
        volumeMounts:
        - name: data
          mountPath: /var/lib/postgresql/data
        resources:
          requests:
            cpu: "250m"
            memory: "256Mi"
          limits:
            cpu: "1"
            memory: "512Mi"
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 1Gi
EOF

# Theo dõi StatefulSet
kubectl rollout status statefulset/postgres -n lab3

# Test connection
kubectl exec -it postgres-0 -n lab3 -- psql -U admin -d myapp -c "CREATE TABLE test (id serial PRIMARY KEY, name text);"
kubectl exec -it postgres-0 -n lab3 -- psql -U admin -d myapp -c "INSERT INTO test (name) VALUES ('hello kubernetes');"
kubectl exec -it postgres-0 -n lab3 -- psql -U admin -d myapp -c "SELECT * FROM test;"
</code></pre>

<h2>Lab 6: Verify Data Persistence</h2>
<pre><code class="language-bash"># Xóa pod (StatefulSet sẽ tự tạo lại)
kubectl delete pod postgres-0 -n lab3

# Chờ pod mới
kubectl get pods -n lab3 -w

# Data vẫn còn sau khi pod restart
kubectl exec -it postgres-0 -n lab3 -- psql -U admin -d myapp -c "SELECT * FROM test;"
# Kết quả: "hello kubernetes" vẫn còn
</code></pre>

<h2>Cleanup</h2>
<pre><code class="language-bash">kubectl delete namespace lab3
kubectl delete pv local-pv-1
kubectl config set-context --current --namespace=default
</code></pre>

<h2>Tổng kết</h2>
<ul>
  <li>✅ ConfigMaps: env vars và volume mount</li>
  <li>✅ Secrets: lưu sensitive data (nhớ: base64, không phải encrypt)</li>
  <li>✅ PV/PVC: yêu cầu và cấp phát storage</li>
  <li>✅ StatefulSet PostgreSQL: stable identity, persistent storage</li>
  <li>✅ Data persistence qua pod restart</li>
</ul>
