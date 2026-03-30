---
id: 019c9618-0402-7000-8000-c1147ba22e14
title: 'BÀI 24: VALIDATINGADMISSIONPOLICY — GA K8S 1.30'
slug: bai-24-validatingadmissionpolicy-ga-k8s-1-30
description: >-
  ValidatingAdmissionPolicy GA từ K8s 1.30 — viết policy bằng CEL (Common Expression Language)
  không cần deploy webhook server. So sánh với OPA/Gatekeeper. Patterns: chặn latest tag, enforce
  labels, validate resource limits.
duration_minutes: 85
is_free: false
video_url: null
sort_order: 24
section_title: 'Module 6: Security'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài học</h2><p>Hiểu ValidatingAdmissionPolicy GA K8s 1.30, viết CEL policies không cần webhook server, và biết khi nào vẫn cần OPA/Gatekeeper.</p>

<h2>1. Vấn đề với Admission Webhooks Truyền thống</h2>
<p>Webhook-based admission (OPA/Gatekeeper, Kyverno) có nhược điểm:</p>
<ul>
  <li><strong>Network overhead</strong>: mỗi API request cần gọi HTTP đến webhook service</li>
  <li><strong>Availability dependency</strong>: nếu webhook service down → API requests fail</li>
  <li><strong>Operational burden</strong>: phải maintain webhook deployment, TLS certs</li>
  <li><strong>Latency</strong>: thêm latency cho mọi API call</li>
</ul>

<h2>2. ValidatingAdmissionPolicy — Built-in, No Webhook</h2>
<p>ValidatingAdmissionPolicy GA từ K8s 1.30 cho phép viết validation policies trực tiếp trong API server, dùng <strong>CEL (Common Expression Language)</strong>.</p>
<ul>
  <li>Chạy trong API server process — zero network overhead</li>
  <li>Không cần deploy thêm service</li>
  <li>Không có single point of failure</li>
  <li>Nhanh hơn webhook ~10x</li>
</ul>

<h2>3. CEL Basics</h2>
<p>CEL là một expression language đơn giản, an toàn (không có loops, không có side effects).</p>
<pre><code class="language-bash"># Truy cập object fields
object.spec.replicas &lt; 10

# Check field exists
has(object.spec.template.spec.containers)

# Array operations
object.spec.template.spec.containers.all(c,
  has(c.resources) &amp;&amp; has(c.resources.limits)
)

# String operations
!object.spec.template.spec.containers.exists(c,
  c.image.endsWith(":latest")
)

# Comparison với quantities
object.spec.template.spec.containers.all(c,
  c.resources.limits.memory &lt;= resource.Quantity("2Gi")
)
</code></pre>

<h2>4. ValidatingAdmissionPolicy Structure</h2>
<pre><code class="language-yaml">apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingAdmissionPolicy
metadata:
  name: my-policy
spec:
  failurePolicy: Fail    # Fail hoặc Ignore nếu policy error
  matchConstraints:      # áp dụng cho objects nào
    resourceRules:
    - apiGroups: ["apps"]
      apiVersions: ["v1"]
      operations: ["CREATE", "UPDATE"]
      resources: ["deployments"]
  validations:           # danh sách expressions
  - expression: "object.spec.replicas &lt;= 10"
    message: "Deployment không được có quá 10 replicas"
    reason: Invalid
  - expression: "has(object.metadata.labels) &amp;&amp; has(object.metadata.labels.team)"
    message: "Deployment phải có label 'team'"
</code></pre>

<h2>5. ValidatingAdmissionPolicyBinding</h2>
<pre><code class="language-yaml">apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingAdmissionPolicyBinding
metadata:
  name: my-policy-binding
spec:
  policyName: my-policy  # reference đến ValidatingAdmissionPolicy
  validationActions:
  - Deny          # reject request nếu vi phạm
  # - Audit       # log nhưng không reject
  # - Warn        # warning nhưng không reject
  matchResources:
    namespaceSelector:
      matchLabels:
        environment: production   # chỉ apply trong production namespaces
</code></pre>

<h2>6. Common Policies</h2>

<h3>6.1 Chặn Image với Tag "latest"</h3>
<pre><code class="language-yaml">apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingAdmissionPolicy
metadata:
  name: no-latest-tag
spec:
  matchConstraints:
    resourceRules:
    - apiGroups: ["apps"]
      apiVersions: ["v1"]
      operations: ["CREATE", "UPDATE"]
      resources: ["deployments", "statefulsets", "daemonsets"]
  validations:
  - expression: |
      object.spec.template.spec.containers.all(c,
        !c.image.contains(":latest") &amp;&amp;
        c.image.contains(":")
      )
    message: "Images phải có specific tag, không được dùng :latest hoặc không có tag"
---
apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingAdmissionPolicyBinding
metadata:
  name: no-latest-tag-binding
spec:
  policyName: no-latest-tag
  validationActions: [Deny]
</code></pre>

<h3>6.2 Yêu cầu Resource Limits</h3>
<pre><code class="language-yaml">apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingAdmissionPolicy
metadata:
  name: require-resource-limits
spec:
  matchConstraints:
    resourceRules:
    - apiGroups: ["apps"]
      apiVersions: ["v1"]
      operations: ["CREATE", "UPDATE"]
      resources: ["deployments"]
  validations:
  - expression: |
      object.spec.template.spec.containers.all(c,
        has(c.resources) &amp;&amp;
        has(c.resources.limits) &amp;&amp;
        has(c.resources.limits.cpu) &amp;&amp;
        has(c.resources.limits.memory)
      )
    message: "Tất cả containers phải có resource limits (CPU và Memory)"
  - expression: |
      object.spec.template.spec.initContainers.all(c,
        has(c.resources) &amp;&amp;
        has(c.resources.limits) &amp;&amp;
        has(c.resources.limits.cpu) &amp;&amp;
        has(c.resources.limits.memory)
      )
    message: "Tất cả init containers phải có resource limits"
</code></pre>

<h3>6.3 Require Labels</h3>
<pre><code class="language-yaml">apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingAdmissionPolicy
metadata:
  name: require-labels
spec:
  matchConstraints:
    resourceRules:
    - apiGroups: ["apps"]
      apiVersions: ["v1"]
      operations: ["CREATE"]
      resources: ["deployments"]
  validations:
  - expression: "has(object.metadata.labels.team)"
    message: "Deployment phải có label 'team'"
  - expression: "has(object.metadata.labels.app)"
    message: "Deployment phải có label 'app'"
  - expression: |
      object.metadata.labels.environment in ["dev", "staging", "production"]
    message: "Label 'environment' phải là: dev, staging, hoặc production"
</code></pre>

<h3>6.4 Limit Replicas</h3>
<pre><code class="language-yaml">apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingAdmissionPolicy
metadata:
  name: limit-replicas
spec:
  matchConstraints:
    resourceRules:
    - apiGroups: ["apps"]
      apiVersions: ["v1"]
      operations: ["CREATE", "UPDATE"]
      resources: ["deployments"]
  validations:
  - expression: "object.spec.replicas &lt;= 20"
    message: "Deployment không được có quá 20 replicas"
  - expression: "object.spec.replicas &gt;= 1"
    message: "Deployment phải có ít nhất 1 replica"
</code></pre>

<h3>6.5 Prevent Privilege Escalation</h3>
<pre><code class="language-yaml">apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingAdmissionPolicy
metadata:
  name: no-privileged
spec:
  matchConstraints:
    resourceRules:
    - apiGroups: [""]
      apiVersions: ["v1"]
      operations: ["CREATE", "UPDATE"]
      resources: ["pods"]
    - apiGroups: ["apps"]
      apiVersions: ["v1"]
      operations: ["CREATE", "UPDATE"]
      resources: ["deployments", "statefulsets", "daemonsets"]
  validations:
  - expression: |
      !object.spec.template.spec.containers.exists(c,
        has(c.securityContext) &amp;&amp;
        has(c.securityContext.privileged) &amp;&amp;
        c.securityContext.privileged == true
      )
    message: "Privileged containers không được phép"
  - expression: |
      !object.spec.template.spec.containers.exists(c,
        has(c.securityContext) &amp;&amp;
        has(c.securityContext.allowPrivilegeEscalation) &amp;&amp;
        c.securityContext.allowPrivilegeEscalation == true
      )
    message: "allowPrivilegeEscalation phải là false"
</code></pre>

<h2>7. Policy với Parameters</h2>
<pre><code class="language-yaml">apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingAdmissionPolicy
metadata:
  name: max-replicas-param
spec:
  paramKind:
    apiVersion: v1
    kind: ConfigMap
  matchConstraints:
    resourceRules:
    - apiGroups: ["apps"]
      apiVersions: ["v1"]
      operations: ["CREATE", "UPDATE"]
      resources: ["deployments"]
  validations:
  - expression: "object.spec.replicas &lt;= int(params.data.maxReplicas)"
    message: "Vượt quá số replicas tối đa"
---
# Parameter ConfigMap
apiVersion: v1
kind: ConfigMap
metadata:
  name: max-replicas-config
data:
  maxReplicas: "5"
---
apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingAdmissionPolicyBinding
metadata:
  name: max-replicas-binding
spec:
  policyName: max-replicas-param
  paramRef:
    name: max-replicas-config
    namespace: default
  validationActions: [Deny]
</code></pre>

<h2>8. So sánh: ValidatingAdmissionPolicy vs OPA/Gatekeeper</h2>
<pre><code class="language-bash">Feature              ValidatingAdmissionPolicy    OPA/Gatekeeper
────────────────────────────────────────────────────────────────
Deploy required      ❌ Built-in                  ✅ Yes (webhook)
Language             CEL                          Rego
Mutating policies    ❌ No                        ✅ Yes
Complex logic        Limited                      Full Rego
Performance          Excellent (in-process)        Good (HTTP call)
Vendor support       Kubernetes core              CNCF project
K8s version          1.30+ (GA)                  Any
</code></pre>
<p><strong>Vẫn cần OPA/Gatekeeper khi</strong>: cần mutating policies (tự động inject fields), policy logic phức tạp hơn CEL support, hoặc cần mutation webhooks.</p>

<h2>Tóm tắt</h2>
<ul>
  <li>ValidatingAdmissionPolicy GA K8s 1.30: built-in, không cần webhook</li>
  <li>CEL: safe expression language cho policy logic</li>
  <li>Cần binding để activate: ValidatingAdmissionPolicyBinding</li>
  <li>Actions: Deny, Audit, Warn</li>
  <li>Dùng params (ConfigMap) để policy reusable</li>
  <li>OPA/Gatekeeper: vẫn cần cho mutating và complex rego logic</li>
</ul>
