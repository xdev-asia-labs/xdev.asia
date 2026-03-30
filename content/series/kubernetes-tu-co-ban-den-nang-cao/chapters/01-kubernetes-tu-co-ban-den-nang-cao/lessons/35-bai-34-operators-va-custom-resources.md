---
id: 019c9618-0602-7000-8000-c1147ba22e16
title: 'BÀI 34: OPERATORS VÀ CUSTOM RESOURCES'
slug: bai-34-operators-va-custom-resources
description: >-
  Operator pattern: CRDs, Custom Controllers, Operator SDK, Kubebuilder. Common operators:
  Prometheus Operator, CloudNativePG (PostgreSQL), Strimzi (Kafka). Viết Operator đơn giản
  với Kubebuilder.
duration_minutes: 85
is_free: false
video_url: null
sort_order: 34
section_title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài học</h2><p>Hiểu Operator pattern, cách dùng CRDs để mở rộng Kubernetes API, và cách các operators phổ biến (Prometheus, CloudNativePG, Strimzi) giúp quản lý stateful applications.</p>

<h2>1. Operator Pattern</h2>
<p>Operators encode <strong>operational knowledge</strong> của một application vào Kubernetes controller. Thay vì admin thực hiện manual steps (backup, failover, scaling), Operator tự động hóa chúng.</p>
<p><strong>Ví dụ</strong>: Không cần biết cách manually failover PostgreSQL primary — CloudNativePG Operator tự detect primary down và promote replica trong vài giây.</p>
<p>Operator = CRD (custom resource type) + Custom Controller (watches và acts)</p>

<h2>2. Custom Resource Definitions (CRDs)</h2>
<pre><code class="language-yaml">apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: databases.mycompany.io
spec:
  group: mycompany.io
  names:
    kind: Database
    plural: databases
    singular: database
    shortNames: ["db"]
  scope: Namespaced
  versions:
  - name: v1
    served: true    # API server phục vụ version này
    storage: true   # etcd lưu ở version này
    schema:
      openAPIV3Schema:
        type: object
        properties:
          spec:
            type: object
            required: ["engine", "size"]
            properties:
              engine:
                type: string
                enum: ["postgres", "mysql"]
              size:
                type: string
              replicas:
                type: integer
                minimum: 1
                maximum: 5
          status:
            type: object
            properties:
              phase:
                type: string
              connectionString:
                type: string
    subresources:
      status: {}   # enable status subresource
    additionalPrinterColumns:
    - name: Engine
      type: string
      jsonPath: .spec.engine
    - name: Size
      type: string
      jsonPath: .spec.size
    - name: Phase
      type: string
      jsonPath: .status.phase
</code></pre>
<pre><code class="language-bash"># Sau khi apply CRD, có thể tạo custom resources
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: mycompany.io/v1
kind: Database
metadata:
  name: my-postgres
  namespace: production
spec:
  engine: postgres
  size: medium
  replicas: 3
EOF

kubectl get databases -n production
kubectl get db -n production   # dùng shortName
</code></pre>

<h2>3. Controller Loop</h2>
<p>Custom Controller liên tục watch resources và reconcile về desired state:</p>
<pre><code class="language-bash">for {
  // Lấy desired state từ K8s API
  desired = getDatabase("my-postgres")

  // Lấy actual state từ cluster
  actual = getActualDatabaseState()

  // Tính sự khác biệt
  diff = compare(desired, actual)

  // Act để reconcile
  if diff {
    applyChanges(diff)
  }

  // Cập nhật status
  updateStatus(desired, actual.phase)

  sleep(reconcileInterval)
}
</code></pre>

<h2>4. Kubebuilder — Build Operators</h2>
<pre><code class="language-bash"># Cài Kubebuilder
curl -L -o kubebuilder https://go.kubebuilder.io/dl/latest/$(go env GOOS)/$(go env GOARCH)
chmod +x kubebuilder && mv kubebuilder /usr/local/bin/

# Tạo project mới
mkdir database-operator && cd database-operator
kubebuilder init --domain mycompany.io --repo github.com/mycompany/database-operator

# Tạo API (CRD + Controller)
kubebuilder create api --group mycompany --version v1 --kind Database

# Project structure:
# api/v1/database_types.go    ← CRD schema
# controllers/database_controller.go  ← Reconcile loop
# config/                     ← K8s manifests
</code></pre>
<pre><code class="language-go">// controllers/database_controller.go
func (r *DatabaseReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
    log := log.FromContext(ctx)

    // Lấy Database resource
    var database mycompanyv1.Database
    if err := r.Get(ctx, req.NamespacedName, &amp;database); err != nil {
        return ctrl.Result{}, client.IgnoreNotFound(err)
    }

    // Tạo StatefulSet nếu chưa tồn tại
    statefulSet := &amp;appsv1.StatefulSet{}
    err := r.Get(ctx, types.NamespacedName{
        Name:      database.Name,
        Namespace: database.Namespace,
    }, statefulSet)

    if errors.IsNotFound(err) {
        // Tạo StatefulSet
        newSS := r.constructStatefulSet(&amp;database)
        r.Create(ctx, newSS)
        log.Info("Created StatefulSet", "name", newSS.Name)
    }

    // Cập nhật status
    database.Status.Phase = "Running"
    r.Status().Update(ctx, &amp;database)

    return ctrl.Result{RequeueAfter: 30 * time.Second}, nil
}
</code></pre>

<h2>5. Common Operators — 2026</h2>

<h3>5.1 Prometheus Operator</h3>
<pre><code class="language-yaml"># Quản lý Prometheus cluster bằng CRDs
apiVersion: monitoring.coreos.com/v1
kind: Prometheus
metadata:
  name: main
  namespace: monitoring
spec:
  replicas: 2
  retention: 7d
  serviceMonitorSelector: {}   # watch tất cả ServiceMonitors
  resources:
    requests:
      memory: 512Mi
</code></pre>

<h3>5.2 CloudNativePG — PostgreSQL (CNCF Graduated)</h3>
<pre><code class="language-yaml">apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: my-postgres
  namespace: production
spec:
  instances: 3    # 1 primary + 2 replicas
  primaryUpdateStrategy: unsupervised  # auto failover
  storage:
    size: 10Gi
    storageClass: fast-ssd
  postgresql:
    parameters:
      max_connections: "200"
      shared_buffers: "256MB"
  backup:
    retentionPolicy: "30d"
    barmanObjectStore:
      destinationPath: s3://my-bucket/postgres/
      s3Credentials:
        accessKeyId:
          name: aws-creds
          key: ACCESS_KEY_ID
</code></pre>
<pre><code class="language-bash"># CloudNativePG: automatic primary/replica management
kubectl get clusters -n production
kubectl get pods -n production -l cnpg.io/cluster=my-postgres
# my-postgres-1 → primary
# my-postgres-2 → replica
# my-postgres-3 → replica

# Failover: xóa primary → operator tự promote replica
kubectl delete pod my-postgres-1 -n production
# → my-postgres-2 được promote thành primary trong ~5s
</code></pre>

<h3>5.3 Strimzi — Apache Kafka</h3>
<pre><code class="language-yaml">apiVersion: kafka.strimzi.io/v1beta2
kind: Kafka
metadata:
  name: my-kafka
  namespace: messaging
spec:
  kafka:
    replicas: 3
    version: 3.9.0
    config:
      auto.create.topics.enable: "false"
    storage:
      type: persistent-claim
      size: 50Gi
  zookeeper:
    replicas: 3
    storage:
      type: persistent-claim
      size: 10Gi
  entityOperator:
    topicOperator: {}    # quản lý KafkaTopic CRDs
    userOperator: {}     # quản lý KafkaUser CRDs
</code></pre>

<h3>5.4 cert-manager</h3>
<pre><code class="language-yaml"># Tự động cấp và renew TLS certificates
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: api-tls
  namespace: production
spec:
  secretName: api-tls-secret
  issuerRef:
    name: letsencrypt-prod
    kind: ClusterIssuer
  dnsNames:
  - api.example.com
  - *.api.example.com
</code></pre>

<h2>6. Operator Hub và OLM</h2>
<pre><code class="language-bash"># Operator Lifecycle Manager (OLM) quản lý lifecycle của operators
# Tìm operators tại: https://operatorhub.io/

# Cài OLM
curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/latest/download/install.sh | bash -s latest

# Cài operator từ OperatorHub
kubectl create -f https://operatorhub.io/install/postgresql.yaml
</code></pre>

<h2>Tóm tắt</h2>
<ul>
  <li>Operator = CRD + Custom Controller để automate Day-2 operations</li>
  <li>CRD mở rộng Kubernetes API với custom resource types</li>
  <li>Kubebuilder: scaffold và build operators với Go</li>
  <li>CloudNativePG: best PostgreSQL operator (CNCF graduated, auto failover)</li>
  <li>Strimzi: Kafka lifecycle management trên Kubernetes</li>
  <li>cert-manager: TLS certificate automation</li>
</ul>
