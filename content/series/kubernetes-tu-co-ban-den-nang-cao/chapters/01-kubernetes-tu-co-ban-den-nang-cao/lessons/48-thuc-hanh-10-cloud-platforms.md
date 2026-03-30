---
id: 019c9618-060f-7000-8000-c1147ba22e16
title: 'THỰC HÀNH 10: CLOUD PLATFORMS VÀ PRODUCTION READINESS'
slug: thuc-hanh-10-cloud-platforms
description: >-
  Bài thực hành Module 10: Deploy lên managed K8s (EKS/GKE/AKS), cấu hình PDB, HPA, cost
  optimization với Spot nodes, production readiness checklist, Karpenter node consolidation.
duration_minutes: 180
is_free: false
video_url: null
sort_order: 47
section_title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂANG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài thực hành</h2>
<ul>
  <li>Deploy application production-ready lên local cluster (simulate cloud)</li>
  <li>Cấu hình PodDisruptionBudget và test node drain</li>
  <li>Cấu hình HPA với custom metrics</li>
  <li>Apply security best practices (PSS, Network Policies)</li>
  <li>Test graceful shutdown</li>
  <li>Cấu hình Karpenter consolidation (simulation)</li>
</ul>

<h2>Lab 1: Production-Ready Deployment</h2>
<pre><code class="language-bash">kubectl create namespace lab10

# Deploy nginx với full production config
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: webapp
  namespace: lab10
  labels:
    app: webapp
    version: "1.0"
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: webapp
  template:
    metadata:
      labels:
        app: webapp
    spec:
      terminationGracePeriodSeconds: 60
      topologySpreadConstraints:
      - maxSkew: 1
        topologyKey: kubernetes.io/hostname
        whenUnsatisfiable: ScheduleAnyway
        labelSelector:
          matchLabels:
            app: webapp
      containers:
      - name: nginx
        image: nginx:1.27
        ports:
        - containerPort: 80
        resources:
          requests:
            cpu: "100m"
            memory: "128Mi"
          limits:
            cpu: "300m"
            memory: "256Mi"
        startupProbe:
          httpGet:
            path: /
            port: 80
          failureThreshold: 10
          periodSeconds: 3
        readinessProbe:
          httpGet:
            path: /
            port: 80
          periodSeconds: 5
          failureThreshold: 3
        livenessProbe:
          httpGet:
            path: /
            port: 80
          periodSeconds: 10
          failureThreshold: 3
        lifecycle:
          preStop:
            exec:
              command: ["/bin/sh", "-c", "sleep 5 && nginx -s quit"]
---
apiVersion: v1
kind: Service
metadata:
  name: webapp
  namespace: lab10
spec:
  selector:
    app: webapp
  ports:
  - port: 80
    targetPort: 80
EOF

kubectl get pods -n lab10 -w
</code></pre>

<h2>Lab 2: PodDisruptionBudget</h2>
<pre><code class="language-bash"># Tạo PDB
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: webapp-pdb
  namespace: lab10
spec:
  minAvailable: 2    # luôn có ít nhất 2 pods
  selector:
    matchLabels:
      app: webapp
EOF

# Kiểm tra PDB
kubectl get pdb -n lab10
# NAME         MIN AVAILABLE   MAX UNAVAILABLE   ALLOWED DISRUPTIONS
# webapp-pdb   2               N/A               1

# Test: chọn 1 node có pods
NODE=$(kubectl get pods -n lab10 -o wide | awk 'NR==2{print $7}')

# Drain node — PDB sẽ cho phép evict tối đa 1 pod tại 1 thời điểm
kubectl drain $NODE --ignore-daemonsets --delete-emptydir-data

# Observe: drain chờ đến khi pods rescheduled trước khi evict pod tiếp theo
kubectl get pods -n lab10 -o wide -w

kubectl uncordon $NODE
</code></pre>

<h2>Lab 3: Horizontal Pod Autoscaler</h2>
<pre><code class="language-bash"># Đảm bảo metrics-server đang chạy
kubectl get deployment metrics-server -n kube-system

# Tạo HPA
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: webapp-hpa
  namespace: lab10
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: webapp
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50
  behavior:
    scaleUp:
      stabilizationWindowSeconds: 30
      policies:
      - type: Pods
        value: 2
        periodSeconds: 30
    scaleDown:
      stabilizationWindowSeconds: 120
EOF

# Xem HPA status
kubectl get hpa webapp-hpa -n lab10

# Load test để trigger scale up
kubectl run load-generator --image=busybox:1.36 -n lab10 --restart=Never -- \
  /bin/sh -c "while true; do wget -q -O- http://webapp.lab10.svc.cluster.local/; done"

# Theo dõi HPA scale up
kubectl get hpa webapp-hpa -n lab10 -w

# Stop load test
kubectl delete pod load-generator -n lab10

# Theo dõi scale down (sau 2 phút stabilization)
kubectl get hpa webapp-hpa -n lab10 -w
</code></pre>

<h2>Lab 4: Network Policies</h2>
<pre><code class="language-bash"># Default deny all trong namespace
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny
  namespace: lab10
spec:
  podSelector: {}
  policyTypes: [Ingress, Egress]
EOF

# Test: từ pod khác không thể access webapp
kubectl run test-pod --image=busybox:1.36 -n lab10 --restart=Never -- sleep 300
kubectl exec test-pod -n lab10 -- wget -T5 -q http://webapp || echo "BLOCKED (expected)"

# Allow ingress từ các pods trong namespace
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-internal
  namespace: lab10
spec:
  podSelector:
    matchLabels:
      app: webapp
  policyTypes: [Ingress]
  ingress:
  - from:
    - podSelector: {}    # tất cả pods trong namespace
    ports:
    - port: 80
EOF

# Allow egress ra internet (DNS + HTTP)
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-egress-dns
  namespace: lab10
spec:
  podSelector: {}
  policyTypes: [Egress]
  egress:
  - ports:
    - port: 53
      protocol: UDP
    - port: 53
      protocol: TCP
EOF

# Test lại: bây giờ test-pod có thể access webapp
kubectl exec test-pod -n lab10 -- wget -T5 -q -O- http://webapp | head -5

kubectl delete pod test-pod -n lab10
</code></pre>

<h2>Lab 5: Security Context</h2>
<pre><code class="language-bash"># Deploy pod với security best practices
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: v1
kind: Pod
metadata:
  name: secure-pod
  namespace: lab10
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    fsGroup: 1000
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
        add: ["NET_BIND_SERVICE"]
    resources:
      requests:
        cpu: "100m"
        memory: "64Mi"
      limits:
        cpu: "200m"
        memory: "128Mi"
    volumeMounts:
    - name: tmp
      mountPath: /tmp
    - name: cache
      mountPath: /var/cache/nginx
    - name: run
      mountPath: /var/run
  volumes:
  - name: tmp
    emptyDir: {}
  - name: cache
    emptyDir: {}
  - name: run
    emptyDir: {}
EOF

kubectl get pod secure-pod -n lab10
kubectl exec secure-pod -n lab10 -- id
# uid=1000 gid=1000

# Test readOnlyRootFilesystem
kubectl exec secure-pod -n lab10 -- touch /test-file || echo "Read-only filesystem (expected)"
kubectl exec secure-pod -n lab10 -- touch /tmp/test-file && echo "Can write to /tmp (allowed)"
</code></pre>

<h2>Lab 6: Graceful Shutdown Test</h2>
<pre><code class="language-bash"># Deploy app với graceful shutdown
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: graceful-app
  namespace: lab10
spec:
  replicas: 2
  selector:
    matchLabels:
      app: graceful-app
  template:
    metadata:
      labels:
        app: graceful-app
    spec:
      terminationGracePeriodSeconds: 30
      containers:
      - name: app
        image: busybox:1.36
        command: ["/bin/sh"]
        args:
        - -c
        - |
          trap 'echo "SIGTERM received, graceful shutdown..."; sleep 5; echo "Shutdown complete"; exit 0' TERM
          echo "App started, waiting..."
          while true; do sleep 1; done
        lifecycle:
          preStop:
            exec:
              command: ["/bin/sh", "-c", "echo 'preStop hook running'; sleep 3"]
EOF

# Xem shutdown behavior
POD=$(kubectl get pods -n lab10 -l app=graceful-app -o name | head -1)
kubectl logs -f $POD &

# Delete pod — observe graceful shutdown
kubectl delete $POD -n lab10

# Log output:
# preStop hook running
# SIGTERM received, graceful shutdown...
# Shutdown complete
</code></pre>

<h2>Cleanup</h2>
<pre><code class="language-bash">kubectl delete namespace lab10
</code></pre>

<h2>Tổng kết</h2>
<ul>
  <li>✅ Production deployment: rolling update + probes + graceful shutdown</li>
  <li>✅ PDB: ngăn drain nếu vi phạm minimum availability</li>
  <li>✅ HPA: auto-scale dựa trên CPU/RPS</li>
  <li>✅ Network Policies: default deny + allow specific traffic</li>
  <li>✅ Security context: non-root, readOnly filesystem, no capabilities</li>
  <li>✅ Graceful shutdown: preStop hook + SIGTERM handler</li>
</ul>
