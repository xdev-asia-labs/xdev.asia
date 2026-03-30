---
id: 019c9618-0404-7000-8000-c1147ba22e14
title: 'BÀI 26: SECURITY TOOLS'
slug: bai-26-security-tools
description: >-
  Công cụ bảo mật Kubernetes: kube-bench (CIS Benchmark), Trivy (vulnerability scanning), Falco
  (runtime threat detection), OPA/Gatekeeper (advanced policy). Xây dựng security pipeline.
duration_minutes: 80
is_free: false
video_url: null
sort_order: 26
section_title: 'Module 6: Security'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài học</h2><p>Biết cách dùng các security tools thiết yếu: kube-bench cho compliance check, Trivy cho vulnerability scanning, Falco cho runtime detection, OPA/Gatekeeper cho policy enforcement.</p>

<h2>1. kube-bench — CIS Benchmark</h2>
<p>kube-bench kiểm tra Kubernetes cluster theo <strong>CIS (Center for Internet Security) Kubernetes Benchmark</strong> — tiêu chuẩn security hardening được công nhận rộng rãi.</p>
<pre><code class="language-bash"># Chạy kube-bench trên master node
kubectl apply -f https://raw.githubusercontent.com/aquasecurity/kube-bench/main/job-master.yaml

# Xem kết quả
kubectl logs job/kube-bench-master

# Chạy trên worker node
kubectl apply -f https://raw.githubusercontent.com/aquasecurity/kube-bench/main/job-node.yaml
kubectl logs job/kube-bench-node
</code></pre>
<pre><code class="language-bash"># Output example:
# [PASS] 1.1.1 Ensure that the API server pod specification file permissions are set to 600 or more restrictive
# [FAIL] 1.2.1 Ensure that the --anonymous-auth argument is set to false
# [WARN] 1.2.6 Ensure that the --kubelet-certificate-authority argument is set as appropriate
#
# == Summary ==
# 42 checks PASS
# 13 checks FAIL
# 11 checks WARN

# Remediation cho 1.2.1:
# Thêm vào kube-apiserver: --anonymous-auth=false
</code></pre>
<p>Priority fixes: bắt đầu với các FAIL trong section 1 (API server) và 4 (kubelet).</p>

<h2>2. Trivy — Vulnerability Scanning</h2>
<p>Trivy là comprehensive security scanner cho containers, filesystems, Git repos, và Kubernetes clusters.</p>

<h3>2.1 Scan Container Images</h3>
<pre><code class="language-bash"># Cài Trivy
curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin

# Scan image
trivy image nginx:1.27

# Chỉ hiển thị HIGH và CRITICAL
trivy image --severity HIGH,CRITICAL nginx:1.27

# Scan với SBOM output
trivy image --format spdx-json -o nginx-sbom.json nginx:1.27

# Fail build nếu có CRITICAL vulnerabilities
trivy image --exit-code 1 --severity CRITICAL nginx:1.27
</code></pre>
<pre><code class="language-bash"># Output:
# nginx:1.27 (debian 12.8)
# ========================
# Total: 25 (HIGH: 8, CRITICAL: 2)
#
# ┌──────────────┬────────────────┬──────────┬────────┬───────────────┐
# │   Library    │ Vulnerability  │ Severity │ Status │ Fixed Version │
# ├──────────────┼────────────────┼──────────┼────────┼───────────────┤
# │ openssl      │ CVE-2024-5535  │ CRITICAL │ fixed  │ 3.0.14-1~deb12│
# └──────────────┴────────────────┴──────────┴────────┴───────────────┘
</code></pre>

<h3>2.2 Scan Kubernetes Manifests</h3>
<pre><code class="language-bash"># Scan YAML manifests cho misconfiguration
trivy config ./k8s/

# Output: tìm thấy container chạy root, no resource limits, etc.
</code></pre>

<h3>2.3 Scan Running Cluster</h3>
<pre><code class="language-bash"># Scan toàn bộ cluster
trivy k8s --report all cluster

# Scan chỉ workloads trong namespace
trivy k8s --namespace production cluster

# Export kết quả
trivy k8s --format json -o cluster-report.json cluster
</code></pre>

<h3>2.4 Trivy trong CI/CD</h3>
<pre><code class="language-yaml"># GitHub Actions
- name: Scan image
  uses: aquasecurity/trivy-action@master
  with:
    image-ref: myapp:${{ github.sha }}
    format: sarif
    output: trivy-results.sarif
    severity: CRITICAL,HIGH
    exit-code: 1

- name: Upload results to GitHub Security
  uses: github/codeql-action/upload-sarif@v3
  with:
    sarif_file: trivy-results.sarif
</code></pre>

<h2>3. Falco — Runtime Threat Detection</h2>
<p>Falco sử dụng eBPF để monitor system calls và detect suspicious behavior ở runtime.</p>

<h3>3.1 Cài đặt Falco</h3>
<pre><code class="language-bash">helm repo add falcosecurity https://falcosecurity.github.io/charts
helm repo update

helm install falco falcosecurity/falco \
  --namespace falco \
  --create-namespace \
  --set driver.kind=ebpf \          # dùng eBPF driver (không cần kernel module)
  --set falcosidekick.enabled=true \ # forward alerts
  --set falcosidekick.config.slack.webhookurl="https://hooks.slack.com/..."

kubectl get pods -n falco
</code></pre>

<h3>3.2 Default Falco Rules</h3>
<pre><code class="language-bash"># Falco detect các hành vi này theo default:
# - Shell spawned trong container
# - Sensitive file access (/etc/passwd, /etc/shadow, SSH keys)
# - Outbound network connections không mong muốn
# - Privilege escalation attempts
# - Container drift: binary được tạo sau khi container start

# Xem alerts
kubectl logs -n falco -l app.kubernetes.io/name=falco -f

# Alert example:
# 15:32:47.123456789: Warning Shell spawned in a container
# (user=root container_id=abc123 container_name=nginx image=nginx:1.27
# shell=sh parent=sh)
</code></pre>

<h3>3.3 Custom Falco Rules</h3>
<pre><code class="language-yaml"># /etc/falco/rules.d/custom-rules.yaml
- rule: Database Access from Unexpected Container
  desc: Detect database connections từ containers không phải backend
  condition: |
    evt.type = connect and
    fd.sport = 5432 and
    not container.image.repository contains "backend"
  output: |
    Unexpected DB connection (container=%container.name
    image=%container.image.repository user=%user.name)
  priority: WARNING

- rule: Kubernetes Secret Read at Runtime
  desc: Detect việc đọc mounted secrets
  condition: |
    open_read and
    fd.name startswith /var/run/secrets/kubernetes.io and
    not proc.name in (node, python, java, python3)
  output: |
    K8s secret read (proc=%proc.name file=%fd.name container=%container.id)
  priority: NOTICE
</code></pre>

<h3>3.4 Falco Sidekick — Alert Forwarding</h3>
<pre><code class="language-bash"># Falco Sidekick forward alerts đến nhiều destinations
helm install falco falcosecurity/falco \
  --set falcosidekick.enabled=true \
  --set falcosidekick.config.slack.webhookurl="$SLACK_WEBHOOK" \
  --set falcosidekick.config.pagerduty.routingkey="$PD_KEY" \
  --set falcosidekick.config.elasticsearch.hostport="http://elastic:9200"
</code></pre>

<h2>4. OPA/Gatekeeper — Advanced Policy</h2>
<pre><code class="language-bash"># Cài Gatekeeper
helm repo add gatekeeper https://open-policy-agent.github.io/gatekeeper/charts
helm install gatekeeper gatekeeper/gatekeeper -n gatekeeper-system --create-namespace
</code></pre>
<pre><code class="language-yaml"># ConstraintTemplate: định nghĩa policy schema
apiVersion: templates.gatekeeper.sh/v1
kind: ConstraintTemplate
metadata:
  name: k8srequiredlabels
spec:
  crd:
    spec:
      names:
        kind: K8sRequiredLabels
      validation:
        openAPIV3Schema:
          properties:
            labels:
              type: array
              items: string
  targets:
  - target: admission.k8s.gatekeeper.sh
    rego: |
      package k8srequiredlabels
      violation[{"msg": msg}] {
        required := input.parameters.labels[_]
        not input.review.object.metadata.labels[required]
        msg := sprintf("Missing required label: %v", [required])
      }
---
# Constraint: apply policy
apiVersion: constraints.gatekeeper.sh/v1beta1
kind: K8sRequiredLabels
metadata:
  name: ns-must-have-team
spec:
  match:
    kinds:
    - apiGroups: ["apps"]
      kinds: ["Deployment"]
    namespaces: ["production"]
  parameters:
    labels: ["team", "app", "environment"]
</code></pre>

<h2>5. Security Pipeline</h2>
<pre><code class="language-bash">Developer commits code
        ↓
CI/CD Pipeline:
  1. Build image
  2. Trivy scan image (fail on CRITICAL)
  3. Generate SBOM
  4. Cosign sign image
  5. Push to registry
        ↓
Kubernetes Admission:
  6. Policy Controller verify image signature
  7. ValidatingAdmissionPolicy check (no :latest, resource limits)
  8. PSA check (Restricted level)
  9. OPA/Gatekeeper check (required labels, etc.)
        ↓
Runtime:
  10. Falco monitor behavior
  11. Trivy scan running workloads
  12. Alert → Slack/PagerDuty
</code></pre>

<h2>Tóm tắt</h2>
<ul>
  <li>kube-bench: CIS benchmark compliance, fix FAIL items ưu tiên</li>
  <li>Trivy: scan images, manifests, và cluster — tích hợp CI/CD</li>
  <li>Falco: eBPF runtime detection, custom rules, Sidekick alerting</li>
  <li>OPA/Gatekeeper: khi cần mutating policies hoặc complex rego logic</li>
  <li>Security pipeline: shift-left (scan trong CI) + runtime (Falco)</li>
</ul>
