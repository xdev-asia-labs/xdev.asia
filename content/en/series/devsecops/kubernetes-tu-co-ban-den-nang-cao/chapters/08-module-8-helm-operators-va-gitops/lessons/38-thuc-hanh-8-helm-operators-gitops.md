---
id: 019c9618-0605-7000-8000-c1147ba22e16
title: 'LESSON 37: PRACTICE — HELM, OPERATORS AND GITOPS'
slug: thuc-hanh-8-helm-operators-gitops
description: 'Module 8 practice: Create Helm 4 chart and publish to OCI registry, install cert-manager operator, setup ArgoCD GitOps deploy application from Git, create App of Apps pattern.'
duration_minutes: 180
is_free: false
video_url: null
sort_order: 37
section_title: 'Module 8: Helm, Operators & GitOps'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-580" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-580)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1061" cy="213" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="1022" cy="274" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="983" cy="75" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="944" cy="136" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="905" cy="197" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="203" x2="1100" y2="283" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="233" x2="1050" y2="303" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1035.9089653438086,184 1035.9089653438086,222 1003,241 970.0910346561914,222 970.0910346561914,184 1003,165" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — Lesson 37</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 37: PRACTICE — HELM, OPERATORS AND</tspan>
      <tspan x="60" dy="42">GITOPS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 8: Helm, Operators &amp; GitOps</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Practice objective__HTMLTAG_68___
<ul>
  <li>Create Helm chart from scratch and install</li>
  <li>Create Helm hooks and tests</li>
  <li>Install cert-manager operator and generate TLS certificate</li>
  <li>Deploy ArgoCD and create Application</li>
  <li>Setup App of Apps pattern</li>
</ul>

<h2>Lab 1: Creating Helm Chart</h2>
<pre><code class="language-bash">kubectl create namespace lab8

# Tạo chart mới
helm create webapp
ls webapp/
# Chart.yaml  charts/  templates/  values.yaml

# Xem chart structure
cat webapp/Chart.yaml
cat webapp/values.yaml

# Chỉnh sửa values.yaml
cat &gt; webapp/values.yaml &lt;&lt;EOF
replicaCount: 2

image:
  repository: nginx
  tag: "1.27"
  pullPolicy: IfNotPresent

service:
  type: ClusterIP
  port: 80

ingress:
  enabled: false

resources:
  requests:
    cpu: "100m"
    memory: "128Mi"
  limits:
    cpu: "500m"
    memory: "256Mi"

livenessProbe:
  httpGet:
    path: /
    port: http

readinessProbe:
  httpGet:
    path: /
    port: http
EOF

# Lint chart
helm lint webapp/

# Dry run
helm install --dry-run --debug webapp-test webapp/ -n lab8

# Install
helm install webapp webapp/ -n lab8
helm list -n lab8

# Upgrade (thay đổi replicas)
helm upgrade webapp webapp/ -n lab8 --set replicaCount=3

# Xem history
helm history webapp -n lab8

# Rollback về revision 1
helm rollback webapp 1 -n lab8
</code></pre>

<h2>Lab 2: Helm Hooks</h2>
<pre><code class="language-bash"># Thêm pre-upgrade hook (database migration giả lập)
cat &gt; webapp/templates/migration-job.yaml &lt;&lt;EOF
apiVersion: batch/v1
kind: Job
metadata:
  name: "{{ .Release.Name }}-migration"
  annotations:
    "helm.sh/hook": pre-upgrade,pre-install
    "helm.sh/hook-weight": "-5"
    "helm.sh/hook-delete-policy": hook-succeeded
spec:
  template:
    spec:
      restartPolicy: Never
      containers:
      - name: migration
        image: busybox:1.36
        command: ['sh', '-c', 'echo "Running DB migration..."; sleep 3; echo "Migration complete!"']
EOF

# Upgrade với hook
helm upgrade webapp webapp/ -n lab8
# Xem migration job
kubectl get jobs -n lab8
kubectl logs -n lab8 job/webapp-migration
</code></pre>

<h2>Lab 3: Helm Tests</h2>
<pre><code class="language-bash"># Tạo test
mkdir -p webapp/templates/tests
cat &gt; webapp/templates/tests/test-connection.yaml &lt;&lt;EOF
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
    command:
    - sh
    - -c
    - |
      until wget -qO- http://{{ .Release.Name }}-webapp:{{ .Values.service.port }}; do
        echo "Waiting for service..."
        sleep 2
      done
      echo "Test passed!"
EOF

helm upgrade webapp webapp/ -n lab8
helm test webapp -n lab8
</code></pre>

<h2>Lab 4: cert-manager Operator</h2>
<pre><code class="language-bash"># Cài cert-manager
helm repo add jetstack https://charts.jetstack.io
helm repo update
helm install cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --set crds.enabled=true

kubectl get pods -n cert-manager
# cert-manager-xxx, cert-manager-cainjector-xxx, cert-manager-webhook-xxx

# Tạo self-signed ClusterIssuer
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: selfsigned-issuer
spec:
  selfSigned: {}
---
# Certificate cho webapp
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: webapp-tls
  namespace: lab8
spec:
  secretName: webapp-tls-secret
  issuerRef:
    name: selfsigned-issuer
    kind: ClusterIssuer
  dnsNames:
  - webapp.lab8.svc.cluster.local
  - webapp.example.com
  duration: 2160h    # 90 days
  renewBefore: 360h  # renew khi còn 15 days
EOF

# Xem certificate status
kubectl get certificate -n lab8
kubectl describe certificate webapp-tls -n lab8
# Status: Ready

# Xem generated secret
kubectl get secret webapp-tls-secret -n lab8
kubectl get secret webapp-tls-secret -n lab8 -o jsonpath='{.data.tls\.crt}' | base64 -d | openssl x509 -text -noout
</code></pre>

<h2>Lab 5: Deploy ArgoCD</h2>
<pre><code class="language-bash"># Cài ArgoCD
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Chờ ArgoCD ready
kubectl wait --for=condition=available deployment/argocd-server -n argocd --timeout=120s

# Lấy admin password
ARGOCD_PASSWORD=$(kubectl -n argocd get secret argocd-initial-admin-secret \
  -o jsonpath="{.data.password}" | base64 -d)
echo "ArgoCD password: $ARGOCD_PASSWORD"

# Port-forward UI
kubectl port-forward svc/argocd-server -n argocd 8080:443 &amp;
echo "ArgoCD UI: https://localhost:8080 (admin/$ARGOCD_PASSWORD)"

# Hoặc dùng ArgoCD CLI
argocd login localhost:8080 --username admin --password $ARGOCD_PASSWORD --insecure
</code></pre>

<h2>Lab 6: Creating ArgoCD Application__HTMLTAG_92___
<pre><code class="language-bash"># Tạo Application bằng CLI
argocd app create webapp-gitops \
  --repo https://github.com/argoproj/argocd-example-apps \
  --path guestbook \
  --dest-server https://kubernetes.default.svc \
  --dest-namespace lab8 \
  --sync-policy automated \
  --auto-prune \
  --self-heal

# Xem status
argocd app list
argocd app get webapp-gitops

# Sync thủ công
argocd app sync webapp-gitops

# Xem trong browser: https://localhost:8080
</code></pre>
<pre><code class="language-bash"># Tạo Application bằng YAML
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: guestbook
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/argoproj/argocd-example-apps
    targetRevision: HEAD
    path: guestbook
  destination:
    server: https://kubernetes.default.svc
    namespace: lab8
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
    - CreateNamespace=true
EOF
</code></pre>

<h2>Lab 7: App of Apps</h2>
<pre><code class="language-bash"># Tạo cấu trúc Git repo (simulate locally)
mkdir -p /tmp/gitops-demo/apps-of-apps
mkdir -p /tmp/gitops-demo/apps/{webapp,monitoring}

# Root Application file
cat &gt; /tmp/gitops-demo/apps-of-apps/webapp.yaml &lt;&lt;EOF
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: webapp-child
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/argoproj/argocd-example-apps
    path: helm-guestbook
    targetRevision: HEAD
  destination:
    server: https://kubernetes.default.svc
    namespace: lab8
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
EOF

# Apply root app
kubectl apply -f /tmp/gitops-demo/apps-of-apps/ -n argocd

# ArgoCD sẽ tìm và deploy tất cả Application CRDs trong thư mục
argocd app list
</code></pre>

<h2>Lab 8: Simulate GitOps Workflow</h2>
<pre><code class="language-bash"># 1. Xem app đang chạy
kubectl get pods -n lab8

# 2. Simulate: ai đó thay đổi trực tiếp trong cluster (drift)
kubectl scale deployment guestbook-ui -n lab8 --replicas=0

# 3. ArgoCD detect và tự heal trong vài phút
kubectl get pods -n lab8 -w

# 4. Xem ArgoCD phục hồi về 2 replicas (self-heal)
argocd app get guestbook

# 5. Xem sync history
argocd app history guestbook
</code></pre>

<h2>Cleanup</h2>
<pre><code class="language-bash">helm uninstall webapp -n lab8
kubectl delete namespace lab8
kubectl delete application guestbook webapp-gitops webapp-child -n argocd
kubectl delete namespace argocd
helm uninstall cert-manager -n cert-manager
kubectl delete namespace cert-manager
</code></pre>

<h2>Summary</h2>
<ul>
  <li>✅ Helm chart from scratch: structure, templates, values</li>
  <li>✅ Helm hooks: pre-upgrade migration job</li>
  <li>✅ Helm tests: verify deployment</li>
  <li>✅ cert-manager: automatic TLS certificates</li>
  <li>✅ ArgoCD: Application + sync policy automated</li>
  <li>✅ App of Apps: manage multiple apps with 1 root app</li>
  <li>✅ GitOps self-healing: ArgoCD self-healing drift</li>
</ul>