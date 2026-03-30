---
id: 019c9618-0601-7000-8000-c1147ba22e16
title: 'BÀI 33: HELM 4 — PACKAGE MANAGER KUBERNETES'
slug: bai-33-helm-4-package-manager-kubernetes
description: >-
  Helm 4 release tháng 11/2025 với WASM plugins, server-side apply, 60% performance. Helm chart
  structure, repositories, OCI registry. Hooks, tests, Helmfile. So sánh Helm 4 vs Helm 3 và khi
  nào dùng Kustomize.
duration_minutes: 90
is_free: false
video_url: null
sort_order: 33
section_title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài học</h2><p>Hiểu Helm 4 là package manager cho Kubernetes, cấu trúc chart, cách install/upgrade/rollback, Helm 4 features mới (WASM, server-side apply), và khi nào dùng Kustomize thay Helm.</p>

<h2>1. Helm là gì?</h2>
<p>Helm là <strong>package manager cho Kubernetes</strong> — tương tự apt cho Ubuntu, brew cho macOS. Helm đóng gói Kubernetes resources vào "charts" có thể share, version, và parameterize.</p>
<p><strong>Lợi ích</strong>:</p>
<ul>
  <li>Đóng gói ứng dụng phức tạp (nhiều resources) thành 1 unit</li>
  <li>Parameterization qua values.yaml</li>
  <li>Release history và rollback</li>
  <li>Dependency management</li>
  <li>Ecosystem: hàng nghìn community charts (artifact hub)</li>
</ul>

<h2>2. Helm 4 — November 2025 (10th Anniversary)</h2>
<p><strong>Breaking changes từ Helm 3</strong>:</p>
<ul>
  <li><strong>WebAssembly (WASM) Plugins</strong>: plugins compile sang WASM, portable across OS, sandboxed execution</li>
  <li><strong>Server-Side Apply (SSA)</strong>: dùng K8s SSA thay client-side merge — giải quyết field ownership conflicts</li>
  <li><strong>60% performance improvement</strong>: đặc biệt với large charts (1000+ resources)</li>
  <li><strong>OCI enhancements</strong>: multi-arch charts, provenance, attestation</li>
  <li><strong>Built-in helm diff</strong>: xem sự khác biệt trước khi upgrade</li>
  <li>Helm 3 tiếp tục nhận security fixes đến tháng 11/2026</li>
</ul>

<h2>3. Helm Chart Structure</h2>
<pre><code class="language-bash">myapp/
├── Chart.yaml           # chart metadata
├── values.yaml          # default configuration values
├── values.schema.json   # JSON Schema validation cho values (optional)
├── charts/              # chart dependencies
│   └── postgresql/      # embedded dependency
├── templates/           # Kubernetes manifest templates
│   ├── _helpers.tpl     # named templates, shared logic
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   └── NOTES.txt        # hiển thị sau install
└── .helmignore          # ignore files khi đóng gói
</code></pre>
<pre><code class="language-yaml"># Chart.yaml
apiVersion: v2
name: myapp
description: My Application Helm Chart
type: application
version: 0.2.0        # chart version (SemVer)
appVersion: "1.2.3"   # version của app được đóng gói
dependencies:
- name: postgresql
  version: "15.5.x"
  repository: "https://charts.bitnami.com/bitnami"
  condition: postgresql.enabled
</code></pre>

<h2>4. values.yaml và Templates</h2>
<pre><code class="language-yaml"># values.yaml
replicaCount: 3
image:
  repository: myregistry.io/myapp
  tag: "1.2.3"
  pullPolicy: Always

service:
  type: ClusterIP
  port: 80

resources:
  requests:
    cpu: "100m"
    memory: "128Mi"
  limits:
    cpu: "500m"
    memory: "256Mi"

postgresql:
  enabled: true
  auth:
    database: myapp
</code></pre>
<pre><code class="language-yaml"># templates/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ include "myapp.fullname" . }}
  labels:
    {{- include "myapp.labels" . | nindent 4 }}
spec:
  replicas: {{ .Values.replicaCount }}
  selector:
    matchLabels:
      {{- include "myapp.selectorLabels" . | nindent 6 }}
  template:
    metadata:
      labels:
        {{- include "myapp.selectorLabels" . | nindent 8 }}
    spec:
      containers:
      - name: {{ .Chart.Name }}
        image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
        imagePullPolicy: {{ .Values.image.pullPolicy }}
        resources:
          {{- toYaml .Values.resources | nindent 10 }}
</code></pre>

<h2>5. Helm Commands</h2>
<pre><code class="language-bash"># Thêm repository
helm repo add stable https://charts.helm.sh/stable
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

# Tìm kiếm chart
helm search repo nginx
helm search hub postgresql   # tìm trên Artifact Hub

# Install
helm install my-nginx bitnami/nginx -n production
helm install my-nginx bitnami/nginx \
  --namespace production \
  --create-namespace \
  --set replicaCount=3 \
  --values custom-values.yaml

# Xem installed releases
helm list -n production
helm list --all-namespaces

# Upgrade
helm upgrade my-nginx bitnami/nginx \
  --namespace production \
  --set image.tag=1.28

# Helm 4: xem diff trước khi upgrade (built-in)
helm diff upgrade my-nginx bitnami/nginx --set image.tag=1.28 -n production

# Rollback
helm rollback my-nginx 1 -n production  # rollback về revision 1
helm history my-nginx -n production     # xem revision history

# Uninstall
helm uninstall my-nginx -n production

# Dry run
helm install my-nginx bitnami/nginx --dry-run --debug
</code></pre>

<h2>6. OCI Registry</h2>
<pre><code class="language-bash"># Helm 4: OCI registry là first-class citizen
# Đăng nhập registry
helm registry login myregistry.io --username myuser

# Push chart lên OCI registry
helm package ./myapp                        # tạo myapp-0.2.0.tgz
helm push myapp-0.2.0.tgz oci://myregistry.io/helm-charts

# Pull và install từ OCI
helm install my-release oci://myregistry.io/helm-charts/myapp --version 0.2.0

# Không cần helm repo add với OCI!
</code></pre>

<h2>7. Helm Hooks</h2>
<pre><code class="language-yaml"># templates/db-migration.yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: "{{ .Release.Name }}-db-migration"
  annotations:
    "helm.sh/hook": pre-upgrade,pre-install   # chạy TRƯỚC khi install/upgrade
    "helm.sh/hook-weight": "-5"               # thứ tự (nhỏ hơn chạy trước)
    "helm.sh/hook-delete-policy": hook-succeeded  # xóa job sau khi thành công
spec:
  template:
    spec:
      restartPolicy: Never
      containers:
      - name: migration
        image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
        command: ["python", "manage.py", "migrate"]
</code></pre>
<p>Helm hooks có thể dùng cho: database migration (pre-install), smoke test (post-install), backup (pre-delete).</p>

<h2>8. Helm Tests</h2>
<pre><code class="language-yaml"># templates/tests/test-connection.yaml
apiVersion: v1
kind: Pod
metadata:
  name: "{{ .Release.Name }}-test-connection"
  annotations:
    "helm.sh/hook": test
spec:
  restartPolicy: Never
  containers:
  - name: test
    image: busybox:1.36
    command: ['wget', '--spider', 'http://{{ include "myapp.fullname" . }}:{{ .Values.service.port }}']
</code></pre>
<pre><code class="language-bash">helm test my-nginx -n production
# Pod "my-nginx-test-connection" created
# Pod "my-nginx-test-connection" succeeded
# Tests succeeded!
</code></pre>

<h2>9. Helmfile — Manage Multiple Releases</h2>
<pre><code class="language-yaml"># helmfile.yaml
repositories:
- name: bitnami
  url: https://charts.bitnami.com/bitnami
- name: grafana
  url: https://grafana.github.io/helm-charts

environments:
  staging:
    values:
    - environments/staging.yaml
  production:
    values:
    - environments/production.yaml

releases:
- name: postgresql
  namespace: database
  chart: bitnami/postgresql
  version: "15.5.x"
  values:
  - postgresql-values.yaml

- name: monitoring
  namespace: monitoring
  chart: prometheus-community/kube-prometheus-stack
  values:
  - monitoring-values.yaml

- name: myapp
  namespace: production
  chart: ./myapp
  needs:
  - database/postgresql   # deploy sau postgresql
  values:
  - myapp-values.yaml
  - "{{ .Environment.Name }}-values.yaml"
</code></pre>
<pre><code class="language-bash">helmfile apply                    # deploy tất cả
helmfile sync -e production       # sync trong environment production
helmfile diff                     # xem sự khác biệt
helmfile destroy                  # uninstall tất cả
</code></pre>

<h2>10. Helm vs Kustomize</h2>
<ul>
  <li><strong>Dùng Helm khi</strong>: phân phối chart cho người dùng khác, cần parameterization phức tạp, cần dependency management, ecosystem charts (bitnami, community)</li>
  <li><strong>Dùng Kustomize khi</strong>: overlay đơn giản (dev/staging/prod), built-in kubectl (không cần cài thêm), GitOps workflows, patch YAML mà không cần template</li>
</ul>
<pre><code class="language-bash"># Kustomize: không cần cài thêm
kubectl apply -k ./overlays/production

# Hoặc xem output mà không apply
kubectl kustomize ./overlays/production
</code></pre>

<h2>Tóm tắt</h2>
<ul>
  <li>Helm 4 (Nov 2025): WASM plugins, SSA, 60% perf, built-in diff</li>
  <li>Chart structure: Chart.yaml, values.yaml, templates/</li>
  <li>OCI registry: first-class support, không cần repo add</li>
  <li>Hooks: pre/post install/upgrade/delete cho lifecycle operations</li>
  <li>Helmfile: orchestrate multiple Helm releases</li>
  <li>Helm vs Kustomize: Helm cho phân phối, Kustomize cho simple overlays</li>
</ul>
