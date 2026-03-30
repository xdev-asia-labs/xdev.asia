---
id: 019c9618-0405-7000-8000-c1147ba22e14
title: 'BÀI 27: THỰC HÀNH — KUBERNETES SECURITY'
slug: thuc-hanh-6-kubernetes-security
description: >-
  Bài thực hành Module 6: Tạo ServiceAccounts và RBAC least privilege, viết ValidatingAdmissionPolicy
  bằng CEL, ký container image với Cosign, scan cluster với kube-bench, cấu hình PSA Restricted mode.
duration_minutes: 180
is_free: false
video_url: null
sort_order: 27
section_title: 'Module 6: Security'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài thực hành</h2>
<ul>
  <li>Tạo RBAC với least privilege cho CI/CD ServiceAccount</li>
  <li>Viết ValidatingAdmissionPolicy bằng CEL</li>
  <li>Enforce Pod Security Admission Restricted mode</li>
  <li>Scan images và cluster với Trivy</li>
  <li>Deploy Falco và test runtime detection</li>
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

<h2>Lab 2: RBAC cho CI/CD Deployer</h2>
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

<h2>Tổng kết</h2>
<ul>
  <li>✅ RBAC least privilege cho monitoring và CI/CD roles</li>
  <li>✅ ValidatingAdmissionPolicy: chặn :latest images với CEL</li>
  <li>✅ PSA Restricted mode: enforce hardened security</li>
  <li>✅ Trivy: scan images và manifests</li>
  <li>✅ Falco: runtime threat detection với eBPF</li>
</ul>
