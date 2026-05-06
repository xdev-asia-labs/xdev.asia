---
id: 019c9618-0405-7000-8000-c1147ba22e14
title: 'LESSON 27: PRACTICE — KUBERNETES SECURITY'
slug: thuc-hanh-6-kubernetes-security
description: 'Module 6 practice: Create ServiceAccounts and RBAC least privilege, write ValidatingAdmissionPolicy with CEL, sign container image with Cosign, scan cluster with kube-bench, configure PSA Restricted mode.'
duration_minutes: 180
is_free: false
video_url: null
sort_order: 27
section_title: 'Module 6: Security'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2402" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2402)"/>

  <!-- Decorations -->
  <g>
    <circle cx="755" cy="275" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="910" cy="270" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1065" cy="265" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="720" cy="260" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="255" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="65" x2="1100" y2="145" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="95" x2="1050" y2="165" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="999.6410161513776,145 999.6410161513776,185 965,205 930.3589838486224,185 930.3589838486224,145 965,125" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Lesson 27</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 27: PRACTICE — KUBERNETES SECURITY</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 6: Security</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Practice objective</h2>
<ul>
  <li>Create RBAC with least privilege for CI/CD ServiceAccount__HTMLTAG_69___
  <li>Write ValidatingAdmissionPolicy using CEL</li>
  <li>Enforce Pod Security Admission Restricted mode</li>
  <li>Scan images and clusters with Trivy</li>
  <li>Deploy Falco and test runtime detection__HTMLTAG_77___
</ul>

<h2>Lab 1: RBAC — Read-only ServiceAccount</h2>
<pre><code class="language-bash">kubectl create namespace lab6

# Tạo ServiceAccount cho monitoring tool (chỉ cần đọc)
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: v1
kind: ServiceAccount
metadata:
  name: monitoring-sa
  namespace: lab6
---
# ClusterRole: chỉ đọc pods, services, nodes
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: monitoring-reader
rules:
- apiGroups: [""]
  resources: ["pods", "services", "endpoints", "nodes"]
  verbs: ["get", "list", "watch"]
- apiGroups: ["apps"]
  resources: ["deployments", "statefulsets", "daemonsets"]
  verbs: ["get", "list", "watch"]
- apiGroups: ["metrics.k8s.io"]
  resources: ["pods", "nodes"]
  verbs: ["get", "list"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: monitoring-binding
subjects:
- kind: ServiceAccount
  name: monitoring-sa
  namespace: lab6
roleRef:
  kind: ClusterRole
  name: monitoring-reader
  apiGroup: rbac.authorization.k8s.io
EOF

# Test permissions
kubectl auth can-i get pods --as=system:serviceaccount:lab6:monitoring-sa
kubectl auth can-i delete deployments --as=system:serviceaccount:lab6:monitoring-sa
# Expected: no
kubectl auth can-i create secrets --as=system:serviceaccount:lab6:monitoring-sa
# Expected: no
</code></pre>

<h2>Lab 2: RBAC for CI/CD Deployer__HTMLTAG_82___
<pre><code class="language-bash">cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: v1
kind: ServiceAccount
metadata:
  name: cicd-deployer
  namespace: lab6
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: deployer
  namespace: lab6
rules:
# Chỉ có thể deploy (không đọc secrets)
- apiGroups: ["apps"]
  resources: ["deployments"]
  verbs: ["get", "list", "create", "update", "patch"]
- apiGroups: [""]
  resources: ["services", "configmaps"]
  verbs: ["get", "list", "create", "update", "patch"]
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list", "watch"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: cicd-binding
  namespace: lab6
subjects:
- kind: ServiceAccount
  name: cicd-deployer
  namespace: lab6
roleRef:
  kind: Role
  name: deployer
  apiGroup: rbac.authorization.k8s.io
EOF

# Verify: có thể deploy nhưng không đọc secrets
kubectl auth can-i create deployments -n lab6 --as=system:serviceaccount:lab6:cicd-deployer
kubectl auth can-i get secrets -n lab6 --as=system:serviceaccount:lab6:cicd-deployer
</code></pre>

<h2>Lab 3: ValidatingAdmissionPolicy</h2>
<pre><code class="language-bash"># Policy 1: Chặn :latest tag
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingAdmissionPolicy
metadata:
  name: no-latest-image
spec:
  failurePolicy: Fail
  matchConstraints:
    resourceRules:
    - apiGroups: ["apps"]
      apiVersions: ["v1"]
      operations: ["CREATE", "UPDATE"]
      resources: ["deployments"]
  validations:
  - expression: |
      object.spec.template.spec.containers.all(c,
        !c.image.endsWith(":latest") &amp;&amp; c.image.contains(":")
      )
    message: "Tất cả container images phải có specific tag, không dùng :latest"
---
apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingAdmissionPolicyBinding
metadata:
  name: no-latest-image-binding
spec:
  policyName: no-latest-image
  validationActions: [Deny]
  matchResources:
    namespaceSelector:
      matchLabels:
        environment: production
EOF

# Label namespace lab6 là production
kubectl label namespace lab6 environment=production

# Test: deploy với :latest → bị reject
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bad-deploy
  namespace: lab6
spec:
  replicas: 1
  selector:
    matchLabels:
      app: bad
  template:
    metadata:
      labels:
        app: bad
    spec:
      containers:
      - name: app
        image: nginx:latest   # vi phạm policy!
EOF
# Error: Tất cả container images phải có specific tag

# Deploy với tag hợp lệ → OK
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: good-deploy
  namespace: lab6
spec:
  replicas: 1
  selector:
    matchLabels:
      app: good
  template:
    metadata:
      labels:
        app: good
    spec:
      containers:
      - name: app
        image: nginx:1.27    # tag hợp lệ
EOF
</code></pre>

<h2>Lab 4: Pod Security Admission — Restricted Mode</h2>
<pre><code class="language-bash"># Tạo namespace với PSA Restricted
kubectl create namespace secure-ns
kubectl label namespace secure-ns \
  pod-security.kubernetes.io/enforce=restricted \
  pod-security.kubernetes.io/warn=restricted

# Deploy non-compliant pod (sẽ bị reject)
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: v1
kind: Pod
metadata:
  name: bad-pod
  namespace: secure-ns
spec:
  containers:
  - name: app
    image: nginx:1.27
    # Không có securityContext → vi phạm Restricted
EOF
# Error: violates PodSecurity "restricted:latest"

# Deploy compliant pod
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: v1
kind: Pod
metadata:
  name: good-pod
  namespace: secure-ns
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    seccompProfile:
      type: RuntimeDefault
  containers:
  - name: app
    image: nginx:1.27
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
      capabilities:
        drop: ["ALL"]
    volumeMounts:
    - name: cache
      mountPath: /var/cache/nginx
    - name: run
      mountPath: /var/run
    - name: tmp
      mountPath: /tmp
  volumes:
  - name: cache
    emptyDir: {}
  - name: run
    emptyDir: {}
  - name: tmp
    emptyDir: {}
EOF
</code></pre>

<h2>Lab 5: Trivy Scan</h2>
<pre><code class="language-bash"># Cài Trivy
curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin

# Scan image
trivy image --severity HIGH,CRITICAL nginx:1.27

# Scan Kubernetes manifests trong thư mục
mkdir -p /tmp/manifests
kubectl get deployment good-deploy -n lab6 -o yaml &gt; /tmp/manifests/deployment.yaml
trivy config /tmp/manifests/

# Scan running cluster (cần kubectl access)
trivy k8s --namespace lab6 cluster
</code></pre>

<h2>Lab 6: Falco Runtime Detection</h2>
<pre><code class="language-bash"># Cài Falco
helm repo add falcosecurity https://falcosecurity.github.io/charts
helm install falco falcosecurity/falco \
  --namespace falco \
  --create-namespace \
  --set driver.kind=modern_ebpf   # cho kernel mới (5.8+)

kubectl wait --for=condition=ready pod -l app.kubernetes.io/name=falco -n falco --timeout=120s

# Theo dõi Falco logs
kubectl logs -n falco -l app.kubernetes.io/name=falco -f &amp;

# Trigger alert: spawn shell trong container
POD=$(kubectl get pods -n lab6 -l app=good -o jsonpath='{.items[0].metadata.name}' 2>/dev/null || kubectl run test-pod --image=nginx:1.27 -n lab6 --dry-run=client -o name)
kubectl exec -n lab6 deploy/good-deploy -- sh -c "id"

# Xem Falco alert:
# Notice A shell was spawned in a container with an attached terminal
# (user=root k8s.ns=lab6 k8s.pod=good-deploy-xxx container=app)

# Test: đọc sensitive file
kubectl exec -n lab6 deploy/good-deploy -- cat /etc/passwd 2>/dev/null || true
# Falco sẽ detect access to /etc/passwd
</code></pre>

<h2>Cleanup</h2>
<pre><code class="language-bash">kubectl delete namespace lab6 secure-ns
kubectl delete validatingadmissionpolicy no-latest-image
kubectl delete validatingadmissionpolicybinding no-latest-image-binding
kubectl delete clusterrole monitoring-reader
kubectl delete clusterrolebinding monitoring-binding
helm uninstall falco -n falco
</code></pre>

<h2>Summary__HTMLTAG_94___
<ul>
  <li>✅ RBAC least privilege for monitoring and CI/CD roles__HTMLTAG_97___
  <li>✅ ValidatingAdmissionPolicy: block :latest images with CEL</li>
  <li>✅ PSA Restricted mode: enforce hardened security</li>
  <li>✅ Trivy: scan images and manifests__HTMLTAG_103___
  <li>✅ Falco: runtime threat detection with eBPF</li>
</ul>