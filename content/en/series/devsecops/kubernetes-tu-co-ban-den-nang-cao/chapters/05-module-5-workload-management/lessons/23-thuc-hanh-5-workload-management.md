---
id: 019c9618-0305-7000-8000-c1147ba22e13
title: 'LESSON 22: PRACTICE — WORKLOAD MANAGEMENT'
slug: thuc-hanh-5-workload-management
description: 'Module 5 practice: Create an Indexed Job to process datasets in parallel, configure HPA with Prometheus custom metrics, demo In-Place Pod resizing (K8s 1.35), install KEDA and scale according to HTTP requests.'
duration_minutes: 180
is_free: false
video_url: null
sort_order: 22
section_title: 'Module 5: Workload Management'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5663" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5663)"/>

  <!-- Decorations -->
  <g>
    <circle cx="678" cy="64" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="756" cy="162" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="834" cy="260" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="912" cy="98" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="990" cy="196" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="144" x2="1100" y2="224" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="174" x2="1050" y2="244" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="977.7749907475932,124.5 977.7749907475932,163.5 944,183 910.2250092524068,163.5 910.2250092524068,124.50000000000001 944,105" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — Lesson 22</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 22: PRACTICE — WORKLOAD MANAGEMENT</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 5: Workload Management__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Practice objective</h2>
<ul>
  <li>Create an Indexed Job to process data in parallel</li>
  <li>HPA configuration with CPU metrics</li>
  <li>Demo In-Place Pod resizing (K8s 1.35+)</li>
  <li>Install KEDA and scale to zero</li>
</ul>

<h2>Lab 1: Indexed Job — Parallel processing of Data</h2>
<pre><code class="language-bash">kubectl create namespace lab5

# Indexed Job: mỗi pod xử lý 1 partition của dataset
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: batch/v1
kind: Job
metadata:
  name: data-processor
  namespace: lab5
spec:
  completions: 10           # tổng 10 partitions
  parallelism: 3            # chạy song song 3 pods
  completionMode: Indexed   # mỗi pod có JOB_COMPLETION_INDEX
  backoffLimit: 2
  template:
    spec:
      restartPolicy: Never
      containers:
      - name: processor
        image: busybox:1.36
        command:
        - sh
        - -c
        - |
          echo "Processing partition \$JOB_COMPLETION_INDEX of 10"
          echo "Data: items \$((JOB_COMPLETION_INDEX * 100)) to \$(((JOB_COMPLETION_INDEX + 1) * 100 - 1))"
          sleep \$((RANDOM % 10 + 5))
          echo "Partition \$JOB_COMPLETION_INDEX completed!"
        resources:
          requests:
            cpu: "100m"
            memory: "64Mi"
EOF

# Theo dõi job
kubectl get jobs -n lab5 -w
kubectl get pods -n lab5 -l job-name=data-processor

# Xem logs của từng pod
kubectl logs -n lab5 -l job-name=data-processor --prefix=true

# Kết quả
kubectl describe job data-processor -n lab5
</code></pre>

<h2>Lab 2: CronJob with Timezone__HTMLTAG_80___
<pre><code class="language-bash">cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: batch/v1
kind: CronJob
metadata:
  name: morning-report
  namespace: lab5
spec:
  schedule: "0 8 * * 1-5"           # 8am thứ 2-6
  timeZone: "Asia/Ho_Chi_Minh"      # GA K8s 1.27
  concurrencyPolicy: Forbid          # không chạy 2 jobs cùng lúc
  successfulJobsHistoryLimit: 3
  failedJobsHistoryLimit: 1
  jobTemplate:
    spec:
      template:
        spec:
          restartPolicy: OnFailure
          containers:
          - name: report
            image: busybox:1.36
            command: ['sh', '-c', 'echo "Daily report at $(date)"']
EOF

kubectl get cronjob -n lab5
# Trigger thủ công để test
kubectl create job --from=cronjob/morning-report morning-report-manual -n lab5
kubectl logs -n lab5 job/morning-report-manual
</code></pre>

<h2>Lab 3: HPA with CPU Metrics</h2>
<pre><code class="language-bash"># Cài metrics-server (nếu chưa có)
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

# Cho kind: cần --kubelet-insecure-tls
kubectl patch deployment metrics-server -n kube-system --type='json' \
  -p='[{"op":"add","path":"/spec/template/spec/containers/0/args/-","value":"--kubelet-insecure-tls"}]'

# Deploy ứng dụng để test HPA
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: php-apache
  namespace: lab5
spec:
  replicas: 1
  selector:
    matchLabels:
      app: php-apache
  template:
    metadata:
      labels:
        app: php-apache
    spec:
      containers:
      - name: php-apache
        image: registry.k8s.io/hpa-example
        ports:
        - containerPort: 80
        resources:
          requests:
            cpu: "200m"
          limits:
            cpu: "500m"
---
apiVersion: v1
kind: Service
metadata:
  name: php-apache
  namespace: lab5
spec:
  selector:
    app: php-apache
  ports:
  - port: 80
EOF

# Tạo HPA
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: php-apache-hpa
  namespace: lab5
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: php-apache
  minReplicas: 1
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300   # đợi 5 phút trước khi scale down
EOF

# Generate load
kubectl run load-gen --image=busybox:1.36 -n lab5 --restart=Never -- \
  sh -c "while true; do wget -q -O- http://php-apache; done"

# Quan sát scaling
kubectl get hpa php-apache-hpa -n lab5 -w
kubectl get pods -n lab5 -w

# Stop load
kubectl delete pod load-gen -n lab5

# HPA scale down sau 5 phút (stabilizationWindow)
</code></pre>

<h2>Lab 4: In-Place Pod Resource Updates (K8s 1.35)</h2>
<pre><code class="language-bash"># Kiểm tra phiên bản K8s hỗ trợ In-Place resizing
kubectl version --short

# Deploy pod với resizePolicy
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: resizable-app
  namespace: lab5
spec:
  replicas: 1
  selector:
    matchLabels:
      app: resizable-app
  template:
    metadata:
      labels:
        app: resizable-app
    spec:
      containers:
      - name: app
        image: nginx:1.27
        resources:
          requests:
            cpu: "100m"
            memory: "128Mi"
          limits:
            cpu: "200m"
            memory: "256Mi"
        resizePolicy:
        - resourceName: cpu
          restartPolicy: NotRequired    # thay đổi CPU không cần restart
        - resourceName: memory
          restartPolicy: RestartContainer  # thay đổi memory cần restart
EOF

POD=$(kubectl get pods -n lab5 -l app=resizable-app -o jsonpath='{.items[0].metadata.name}')
echo "Pod: $POD"

# Xem resources hiện tại
kubectl get pod $POD -n lab5 -o jsonpath='{.spec.containers[0].resources}' | python3 -m json.tool

# In-place resize CPU (không restart pod!)
kubectl patch pod $POD -n lab5 --type='json' -p='[
  {"op":"replace","path":"/spec/containers/0/resources/requests/cpu","value":"250m"},
  {"op":"replace","path":"/spec/containers/0/resources/limits/cpu","value":"500m"}
]'

# Xem pod vẫn chạy (không restart)
kubectl get pod $POD -n lab5
kubectl describe pod $POD -n lab5 | grep -A5 "Resize Status"
</code></pre>

<h2>Lab 5: KEDA — Scale to Zero__HTMLTAG_86___
<pre><code class="language-bash"># Cài KEDA
helm repo add kedacore https://kedacore.github.io/charts
helm repo update
helm install keda kedacore/keda --namespace keda --create-namespace

# Verify
kubectl get pods -n keda

# Deploy ứng dụng sẽ scale
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: http-worker
  namespace: lab5
spec:
  replicas: 0  # bắt đầu với 0 replicas
  selector:
    matchLabels:
      app: http-worker
  template:
    metadata:
      labels:
        app: http-worker
    spec:
      containers:
      - name: worker
        image: nginx:1.27
        resources:
          requests:
            cpu: "100m"
            memory: "128Mi"
---
apiVersion: v1
kind: Service
metadata:
  name: http-worker
  namespace: lab5
spec:
  selector:
    app: http-worker
  ports:
  - port: 80
EOF

# Cài KEDA HTTP Add-on (scale HTTP workloads)
helm install http-add-on kedacore/keda-add-ons-http \
  --namespace keda

# Tạo HTTPScaledObject
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: http.keda.sh/v1alpha1
kind: HTTPScaledObject
metadata:
  name: http-worker-scaler
  namespace: lab5
spec:
  hosts:
  - http-worker.lab5.svc.cluster.local
  targetPendingRequests: 5   # scale up khi > 5 pending requests
  scaledownPeriod: 300       # scale down sau 5 phút idle
  scaleTargetRef:
    deployment: http-worker
    service: http-worker
    port: 80
  replicas:
    min: 0   # scale to zero!
    max: 10
EOF

# Test: khi gửi requests, KEDA sẽ scale từ 0 → N
for i in $(seq 1 20); do
  curl http://http-worker.lab5.svc.cluster.local &
done

kubectl get pods -n lab5 -w  # xem pods scale up
</code></pre>

<h2>Cleanup</h2>
<pre><code class="language-bash">kubectl delete namespace lab5
helm uninstall keda -n keda
</code></pre>

<h2>Summary__HTMLTAG_90___
<ul>
  <li>✅ Indexed Job: process data in parallel with JOB_COMPLETION_INDEX</li>
  <li>✅ CronJob with timezone support (GA K8s 1.27)</li>
  <li>✅ HPA: auto scale according to CPU, stabilization window</li>
  <li>✅ In-Place Pod resizing: changing CPU does not restart (K8s 1.35)</li>
  <li>✅ KEDA: scale to zero and scale from zero</li>
</ul>