---
id: 019c9618-0601-7000-8000-c1147ba22e16
title: 第 33 課：HELM 4 — 套件管理器 Kubernetes
slug: bai-33-helm-4-package-manager-kubernetes
description: >-
  Helm 4 於 2025 年 11 月發布，附有 WASM 外掛程式、伺服器端應用程式、60% 效能。 Helm 圖表結構、儲存庫、OCI
  註冊表。掛鉤、測試、Helmfile。比較 Helm 4 與 Helm 3 以及何時使用 Kustomize。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 33
section_title: 模組 8：Helm、操作員和 GitOps
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第 33 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 33 課：HELM 4 — 套件管理器</tspan>
      <tspan x="60" dy="42">KUBERNETES</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 8: Helm, Operators &amp; GitOps</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標</h2><p>了解 Helm 4 作為 Kubernetes 的套件管理器、圖表結構、如何安裝/升級/回滾、新的 Helm 4 功能（WASM、伺服器端應用）以及何時使用 Kustomize 而不是 Helm。</p>

<h2>1.什麼是頭盔？</h2>
<p>頭盔是 <strong>Kubernetes 的套件管理器</strong> — 類似 Ubuntu 的 apt、macOS 的 brew。 Helm 將 Kubernetes 資源打包成可以共享、版本化和參數化的「圖表」。</p>
<p><strong>好處</strong>:</p>
<ul>
  <li>將複雜的應用程式（許多資源）打包到 1 個單元中</li>
  <li>透過values.yaml進行參數化</li>
  <li>發布歷史和回滾</li>
  <li>依賴管理</li>
  <li>生態系：數千個社區圖表（工件中心）</li>
</ul>

<h2>2. Helm 4－2025 年 11 月（10 週年）</h2>
<p><strong>Helm 3 的重大變化</strong>:</p>
<ul>
  <li><strong>WebAssembly (WASM) 插件</strong>：插件編譯為 WASM，跨作業系統移植，沙盒執行</li>
  <li><strong>伺服器端應用程式 (SSA)</strong>：使用 K8s SSA 取代客戶端合併 — 解決欄位所有權衝突</li>
  <li><strong>60% 性能提升</strong>：尤其是大型圖表（1000+ 資源）</li>
  <li><strong>OCI 增強功能</strong>：多架構圖表、出處、證明</li>
  <li><strong>內建舵差速器</strong>：升級前查看差異</li>
  <li>Helm 3 將繼續接收安全修復，直至 2026 年 11 月</li>
</ul>

<h2>3. Helm Chart 結構</h2>
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

<h2>4.values.yaml和模板</h2>
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

<h2>5. 頭盔命令</h2>
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

<h2>6.OCI 註冊表</h2>
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

<h2>7. 頭盔掛鉤</h2>
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
<p>Helm hooks 可用於：資料庫遷移（安裝前）、冒煙測試（安裝後）、備份（刪除前）。</p>

<h2>8. 頭盔測試</h2>
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

<h2>9.Helmfile－管理多個版本</h2>
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

<h2>10.Helm 與 Kustomize</h2>
<ul>
  <li><strong>何時使用 Helm</strong>：將圖表分發給其他用戶，需要複雜的參數化，需要依賴管理，生態系統圖表（bitnami，社群）</li>
  <li><strong>使用 Kustomize 時</strong>：簡單覆蓋（dev/staging/prod）、內建 kubectl（無需額外安裝）、GitOps 工作流程、無範本的 YAML 補丁</li>
</ul>
<pre><code class="language-bash"># Kustomize: không cần cài thêm
kubectl apply -k ./overlays/production

# Hoặc xem output mà không apply
kubectl kustomize ./overlays/production
</code></pre>

<h2>總結</h2>
<ul>
  <li>Helm 4（2025 年 11 月）：WASM 外掛程式、SSA、60% 效能、內建 diff</li>
  <li>圖表結構：Chart.yaml、values.yaml、templates/</li>
  <li>OCI 註冊表：一流的支持，無需額外的存儲庫</li>
  <li>掛鉤：生命週期操作的安裝前/安裝後/升級/刪除</li>
  <li>Helmfile：編排多個 Helm 版本</li>
  <li>Helm 與 Kustomize：Helm 用於分發，Kustomize 用於簡單覆蓋</li>
</ul>
