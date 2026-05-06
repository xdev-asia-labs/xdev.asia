---
id: 019c9618-0402-7000-8000-c1147ba22e14
title: 'LESSON 24: VALIDATINGADMISSIONPOLICY — GA K8S 1.30'
slug: bai-24-validatingadmissionpolicy-ga-k8s-1-30
description: 'ValidatingAdmissionPolicy GA from K8s 1.30 — write policies in CEL (Common Expression Language) without needing to deploy a webhook server. Compare with OPA/Gatekeeper. Patterns: block latest tag, enforce labels, validate resource limits.'
duration_minutes: 85
is_free: false
video_url: null
sort_order: 24
section_title: 'Module 6: Security'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3013" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3013)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1074" cy="172" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="1048" cy="46" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1022" cy="180" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="996" cy="54" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="188" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="152" x2="1100" y2="232" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="182" x2="1050" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.3826859021799,138.5 975.3826859021799,165.5 952,179 928.6173140978201,165.5 928.6173140978201,138.5 952,125" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Lesson 24</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 24: VALIDATINGADMISSIONPOLICY — GA K8S</tspan>
      <tspan x="60" dy="42">1.30</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 6: Security</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Lesson Objective_</h2><p>Understand ValidatingAdmissionPolicy GA K8s 1.30, write CEL policies without a webhook server, and know when you still need OPA/Gatekeeper.</p>

<h2>1. Problems with Traditional Admission Webhooks</h2>
<p>Webhook-based admission (OPA/Gatekeeper, Kyverno) has disadvantages:</p>
<ul>
  <li><strong>Network overhead</strong>: each API request needs to make an HTTP call to the webhook service</li>
  <li><strong>Availability dependency</strong>: if webhook service down → API requests fail</li>
  <li><strong>Operational burden</strong>: must maintain webhook deployment, TLS certs</li>
  <li><strong>Latency</strong>: adds latency to all API calls</li>
</ul>

<h2>2. ValidatingAdmissionPolicy — Built-in, No Webhook</h2>
<p>ValidatingAdmissionPolicy GA from K8s 1.30 allows writing validation policies directly in the API server, using <strong>CEL (Common Expression Language)</strong>.</p>
<ul>
  <li>Runs in API server process — zero network overhead</li>
  <li>No need to deploy additional service</li>
  <li>There is no single point of failure__HTMLTAG_105___
  <li>Faster than webhooks ~10x</li>
</ul>

<h2>3. CEL Basics</h2>
<p>CEL is a simple, safe expression language (no loops, no side effects).</p>
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

<h2>6. Common Policies</h2><h3>6.1 Block Images with Tag "latest"</h3>
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

<h3>6.2 Required Resource Limits</h3>
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

<h3>6.5 Prevent Privilege Escalation__HTMLTAG_128___
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

<h2>7. Policy with Parameters</h2>
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

<h2>8. Comparison: ValidatingAdmissionPolicy vs OPA/Gatekeeper</h2>
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
<p><strong>OPA/Gatekeeper is still needed when</strong>: need mutating policies (automatically inject fields), more complex policy logic than CEL support, or need mutation webhooks.</p>

<h2>Summary</h2>
<ul>
  <li>ValidatingAdmissionPolicy GA K8s 1.30: built-in, no webhook needed</li>
  <li>CEL: safe expression language for policy logic</li>
  <li>Need binding to activate: ValidatingAdmissionPolicyBinding</li>
  <li>Actions: Deny, Audit, Warn</li>
  <li>Use params (ConfigMap) to reuse policy</li>
  <li>OPA/Gatekeeper: still needed for mutating and complex rego logic</li>
</ul>