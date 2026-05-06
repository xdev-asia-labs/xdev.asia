---
id: 019c9618-0602-7000-8000-c1147ba22e16
title: 'LESSON 34: OPERATORS AND CUSTOM RESOURCES'
slug: bai-34-operators-va-custom-resources
description: 'Operator pattern: CRDs, Custom Controllers, Operator SDK, Kubebuilder. Common operators: Prometheus Operator, CloudNativePG (PostgreSQL), Strimzi (Kafka). Write simple Operators with Kubebuilder.'
duration_minutes: 85
is_free: false
video_url: null
sort_order: 34
section_title: 'Module 8: Helm, Operators & GitOps'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2066" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2066)"/>

  <!-- Decorations -->
  <g>
    <circle cx="864" cy="42" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="628" cy="46" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="892" cy="50" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="656" cy="54" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="920" cy="58" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="222" x2="1100" y2="302" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="252" x2="1050" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1054.0429399400243,203.5 1054.0429399400243,240.5 1022,259 989.9570600599758,240.5 989.9570600599758,203.5 1022,185" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Lesson 34</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 34: OPERATORS AND CUSTOM RESOURCES</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 8: Helm, Operators &amp; GitOps</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Lesson Objective</h2><p>Understand the Operator pattern, how to use CRDs to extend the Kubernetes API, and how popular operators (Prometheus, CloudNativePG, Strimzi) help manage stateful applications.</p>

<h2>1. Operator Pattern</h2>
<p>Operators encode <strong>operational knowledge</strong> of an application into the Kubernetes controller. Instead of admins performing manual steps (backup, failover, scaling), Operators automate them.</p>
<p><strong>Example</strong>: No need to know how to manually failover PostgreSQL primary — CloudNativePG Operator automatically detects primary down and promotes replica within seconds.</p>
<p>Operator = CRD (custom resource type) + Custom Controller (watches and acts)</p>

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
<p>Custom Controller continuously watches resources and reconciles them to the desired state:</p>
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

<h2>6. Operator Hub and OLM</h2>
<pre><code class="language-bash"># Operator Lifecycle Manager (OLM) quản lý lifecycle của operators
# Tìm operators tại: https://operatorhub.io/

# Cài OLM
curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/latest/download/install.sh | bash -s latest

# Cài operator từ OperatorHub
kubectl create -f https://operatorhub.io/install/postgresql.yaml
</code></pre><h2>Summary</h2>
<ul>
  <li>Operator = CRD + Custom Controller to automate Day-2 operations__HTMLTAG_105___
  <li>CRD extends the Kubernetes API with custom resource types</li>
  <li>Kubebuilder: scaffold and build operators with Go</li>
  <li>CloudNativePG: best PostgreSQL operator (CNCF graduated, auto failover)</li>
  <li>Strimzi: Kafka lifecycle management on Kubernetes__HTMLTAG_113___
  <li>cert-manager: TLS certificate automation</li>
</ul>