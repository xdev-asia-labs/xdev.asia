---
id: 019c9618-060e-7000-8000-c1147ba22e16
title: 'BÀI 46: BEST PRACTICES PRODUCTION KUBERNETES 2026'
slug: bai-46-best-practices-production-2026
description: >-
  Production best practices tổng hợp 2026: reliability, security, performance, operations. Pod
  disruption budgets, graceful shutdown, health probes, multi-region, Platform Engineering.
duration_minutes: 80
is_free: false
video_url: null
sort_order: 46
section_title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài học</h2><p>Tổng hợp best practices production-grade cho Kubernetes 2026 — từ reliability, security, performance đến operations và Platform Engineering.</p>

<h2>1. Reliability — Zero Downtime Deployment</h2>
<pre><code class="language-yaml">apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1           # tối đa 1 pod thêm khi upgrade
      maxUnavailable: 0     # không bao giờ giảm dưới desired replicas

  template:
    spec:
      # Graceful shutdown
      terminationGracePeriodSeconds: 60

      containers:
      - name: app
        # Health probes
        startupProbe:
          httpGet:
            path: /healthz
            port: 8080
          failureThreshold: 30
          periodSeconds: 5        # tối đa 150s để start

        readinessProbe:
          httpGet:
            path: /ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 5
          failureThreshold: 3
          successThreshold: 1

        livenessProbe:
          httpGet:
            path: /healthz
            port: 8080
          periodSeconds: 10
          failureThreshold: 3

        # Graceful shutdown handler
        lifecycle:
          preStop:
            exec:
              command: ["/bin/sh", "-c", "sleep 5"]  # đợi LB drain connections

      # Topology spread cho HA
      topologySpreadConstraints:
      - maxSkew: 1
        topologyKey: topology.kubernetes.io/zone
        whenUnsatisfiable: DoNotSchedule
        labelSelector:
          matchLabels:
            app: my-app
</code></pre>

<h2>2. PodDisruptionBudget (PDB)</h2>
<pre><code class="language-yaml"># Đảm bảo luôn có minimum pods available khi node drain/upgrade
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: my-app-pdb
spec:
  minAvailable: 2      # hoặc dùng maxUnavailable: "20%"
  selector:
    matchLabels:
      app: my-app
</code></pre>
<pre><code class="language-bash"># Verify PDB
kubectl get pdb -n production
# NAME         MIN AVAILABLE   MAX UNAVAILABLE   ALLOWED DISRUPTIONS   AGE
# my-app-pdb   2               N/A               1                     5d

# PDB ngăn kubectl drain nếu sẽ vi phạm budget
kubectl drain node-1 --ignore-daemonsets
# Cannot evict pod as it would violate PDB my-app-pdb
</code></pre>

<h2>3. Security Best Practices</h2>
<pre><code class="language-yaml"># 1. Pod Security Standards: Restricted profile
apiVersion: v1
kind: Namespace
metadata:
  name: production
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/audit: restricted
    pod-security.kubernetes.io/warn: restricted
</code></pre>
<pre><code class="language-yaml"># 2. Secure container spec
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    runAsGroup: 1000
    fsGroup: 1000
    seccompProfile:
      type: RuntimeDefault    # seccomp mặc định
  containers:
  - name: app
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
      capabilities:
        drop: ["ALL"]
    volumeMounts:
    - name: tmp
      mountPath: /tmp         # app cần ghi vào /tmp
  volumes:
  - name: tmp
    emptyDir: {}
</code></pre>
<pre><code class="language-bash"># 3. Network Policies: default deny all
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-all
  namespace: production
spec:
  podSelector: {}
  policyTypes: [Ingress, Egress]
EOF

# 4. RBAC: least privilege
# Service accounts chỉ có permissions cần thiết
# Không dùng cluster-admin trong application code

# 5. Secrets management
# Không dùng env var trực tiếp cho secrets
# Dùng External Secrets Operator + AWS Secrets Manager / HashiCorp Vault

# 6. Image security
# Scan images với Trivy, Grype
# Chỉ pull từ trusted registries
# Sign images với Cosign
# Verify signatures với Admission Controller
</code></pre>

<h2>4. Performance Best Practices</h2>
<pre><code class="language-bash"># 1. Set appropriate requests/limits (đừng over hoặc under provision)
# Rule of thumb:
# - Requests: P50 actual usage
# - Limits: P99 actual usage + 20% buffer

# 2. Dùng VPA để tự động right-size

# 3. HPA với custom metrics
kubectl apply -f - &lt;&lt;EOF
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  minReplicas: 2
  maxReplicas: 50
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 60   # scale khi CPU > 60%
  - type: Pods
    pods:
      metric:
        name: requests_per_second
      target:
        type: AverageValue
        averageValue: 1000      # scale khi RPS > 1000/pod
  behavior:
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
      - type: Pods
        value: 4
        periodSeconds: 60       # tối đa tăng 4 pods/phút
    scaleDown:
      stabilizationWindowSeconds: 300   # đợi 5 phút trước khi scale down
EOF
</code></pre>

<h2>5. Image và Container Best Practices</h2>
<pre><code class="language-dockerfile"># Dockerfile best practices 2026
FROM golang:1.23-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download   # cache layer riêng
COPY . .
RUN CGO_ENABLED=0 go build -o server .

# Multi-stage: final image rất nhỏ
FROM scratch          # hoặc distroless
COPY --from=builder /app/server /server
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
EXPOSE 8080
USER 65534:65534      # non-root (nobody)
ENTRYPOINT ["/server"]
</code></pre>
<pre><code class="language-bash"># Image tagging strategy
# KHÔNG dùng latest trong production
# Dùng content-addressable digest cho pinning
docker pull nginx@sha256:abc123...

# Hoặc immutable tags (version + git sha)
# myapp:1.2.3-a1b2c3d

# Scan image
trivy image myapp:1.2.3 --severity HIGH,CRITICAL --exit-code 1
</code></pre>

<h2>6. Observability Best Practices</h2>
<pre><code class="language-yaml"># Structured logging
# Tất cả logs phải là JSON format với fields chuẩn
# {"level": "info", "msg": "...", "trace_id": "...", "service": "..."}

# OpenTelemetry: instrument ứng dụng
# Tự động export traces, metrics, logs

# SLO-based alerting thay vì symptom alerting
# - SLO: 99.9% requests trả về trong 500ms
# - Alert khi error budget cạn kiệt (Burn Rate > 2x)

# Runbooks cho mỗi alert
# annotations:
#   runbook_url: https://wiki.internal/runbooks/high-latency
</code></pre>

<h2>7. Platform Engineering 2026</h2>
<p>Platform Engineering: team chuyên biệt xây Internal Developer Platform (IDP) cho developers:</p>
<ul>
  <li><strong>Backstage</strong>: Service catalog, self-service portal</li>
  <li><strong>Crossplane</strong>: Self-service provisioning (database, queues, etc.) qua K8s CRDs</li>
  <li><strong>ArgoCD / Flux</strong>: GitOps deployment platform</li>
  <li><strong>Port</strong>: Alternative Backstage, low-code IDP</li>
</ul>
<pre><code class="language-bash"># Developer experience: kubectl không cần cho developers
# Thay vào đó:
# - Backstage: đăng ký service, xem deployment status
# - ArgoCD UI: xem sync status, logs
# - Grafana: xem metrics/logs
# - PagerDuty/OpsGenie: nhận alerts

# Platform team cung cấp "abstractions":
# - ClusterClass templates (CAPI)
# - Helm chart library (chuẩn hóa deployments)
# - Crossplane Compositions (self-service databases)
# - Pre-configured monitoring, logging, tracing
</code></pre>

<h2>8. Checklist Production Readiness</h2>
<pre><code class="language-bash">Reliability:
✅ Resources requests/limits được set
✅ Health probes: startupProbe + readinessProbe + livenessProbe
✅ PodDisruptionBudget
✅ Graceful shutdown (preStop hook + terminationGracePeriodSeconds)
✅ Topology spread constraints (multi-AZ)
✅ HPA configured

Security:
✅ Pod Security Standards: Restricted
✅ Non-root user, readOnlyRootFilesystem
✅ Network Policies: default deny
✅ RBAC: least privilege service accounts
✅ Secrets từ external secret store
✅ Image scanning trong CI pipeline
✅ Image signing với Cosign

Observability:
✅ Structured logging (JSON)
✅ OpenTelemetry instrumentation
✅ SLOs defined và monitored
✅ Runbooks cho alerts

Operations:
✅ Cluster upgrade plan (test trên staging trước)
✅ etcd backup tự động
✅ Disaster recovery tested (Velero restore tested)
✅ Cost monitoring (Kubecost)
</code></pre>

<h2>Tóm tắt</h2>
<ul>
  <li>Reliability: rolling updates + PDB + topology spread + graceful shutdown</li>
  <li>Security: PSS Restricted + Network Policy + RBAC least privilege</li>
  <li>Performance: đúng requests/limits + HPA + VPA</li>
  <li>Observability: structured logs + OTel + SLO-based alerting</li>
  <li>Platform Engineering: IDP giúp developers tự service, không cần ops mỗi lần</li>
</ul>
