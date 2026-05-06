---
id: 019c9618-0601-7000-8000-c1147ba22e16
title: 'LESSON 33: HELM 4 — PACKAGE MANAGER KUBERNETES'
slug: bai-33-helm-4-package-manager-kubernetes
description: Helm 4 release November 2025 with WASM plugins, server-side application, 60% performance. Helm chart structure, repositories, OCI registry. Hooks, tests, Helmfile. Compare Helm 4 vs Helm 3 and when to use Kustomize.
duration_minutes: 90
is_free: false
video_url: null
sort_order: 33
section_title: 'Module 8: Helm, Operators & GitOps'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1346" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1346)"/>

  <!-- Decorations -->
  <g>
    <circle cx="699" cy="87" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="798" cy="106" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="897" cy="125" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="996" cy="144" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="1095" cy="163" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="77" x2="1100" y2="157" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="107" x2="1050" y2="177" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1004.712812921102,161 1004.712812921102,193 977,209 949.287187078898,193 949.287187078898,161 977,145" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Lesson 33</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 33: HELM 4 — PACKAGE MANAGER</tspan>
      <tspan x="60" dy="42">KUBERNETES</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 8: Helm, Operators &amp; GitOps</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Lesson objectives</h2><p>Understand Helm 4 as a package manager for Kubernetes, chart structure, how to install/upgrade/rollback, new Helm 4 features (WASM, server-side apply), and when to use Kustomize instead of Helm.</p>

<h2>1. What is Helm?</h2>
<p>Helm is <strong>package manager for Kubernetes</strong> — similar to apt for Ubuntu, brew for macOS. Helm packages Kubernetes resources into "charts" that can be shared, versioned, and parameterized.</p>
<p><strong>Benefits</strong>:</p>
<ul>
  <li>Packaging complex applications (many resources) into 1 unit__HTMLTAG_83___
  <li>Parameterization via values.yaml</li>
  <li>Release history and rollback__HTMLTAG_87___
  <li>Dependency management</li>
  <li>Ecosystem: thousands of community charts (artifact hub)</li>
</ul><h2>2. Helm 4 — November 2025 (10th Anniversary)</h2>
<p><strong>Breaking changes from Helm 3</strong>:</p>
<ul>
  <li><strong>WebAssembly (WASM) Plugins</strong>: plugins compile to WASM, portable across OS, sandboxed execution</li>
  <li><strong>Server-Side Apply (SSA)</strong>: use K8s SSA instead of client-side merge — resolve field ownership conflicts</li>
  <li><strong>60% performance improvement</strong>: especially with large charts (1000+ resources)</li>
  <li><strong>OCI enhancements</strong>: multi-arch charts, provenance, attestation</li>
  <li><strong>Built-in helm diff</strong>: see difference before upgrade</li>
  <li>Helm 3 continues to receive security fixes until November 2026</li>
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

<h2>4. values.yaml and Templates</h2>
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
<p>Helm hooks can be used for: database migration (pre-install), smoke test (post-install), backup (pre-delete).</p>

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
  <li><strong>Use Helm when</strong>: distribute charts to other users, need complex parameterization, need dependency management, ecosystem charts (bitnami, community)</li>
  <li><strong>Use Kustomize when</strong>: simple overlay (dev/staging/prod), built-in kubectl (no additional installation required), GitOps workflows, patch YAML without templates__HTMLTAG_149___
</ul>
<pre><code class="language-bash"># Kustomize: không cần cài thêm
kubectl apply -k ./overlays/production

# Hoặc xem output mà không apply
kubectl kustomize ./overlays/production
</code></pre>

<h2>Summary</h2>
<ul>
  <li>Helm 4 (Nov 2025): WASM plugins, SSA, 60% perf, built-in diff</li>
  <li>Chart structure: Chart.yaml, values.yaml, templates/</li>
  <li>OCI registry: first-class support, no repo needed add</li>
  <li>Hooks: pre/post install/upgrade/delete for lifecycle operations</li>
  <li>Helmfile: orchestrate multiple Helm releases</li>
  <li>Helm vs Kustomize: Helm for distribution, Kustomize for simple overlays</li>
</ul>