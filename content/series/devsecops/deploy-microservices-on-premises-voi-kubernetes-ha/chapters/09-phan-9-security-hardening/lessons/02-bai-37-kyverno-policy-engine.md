---
id: 019e1a00-aa01-7001-c001-k8sha000902
title: 'BÀI 37: KYVERNO POLICY ENGINE'
slug: bai-37-kyverno-policy-engine
description: >-
  Deploy Kyverno policy engine, validation/mutation/generation policies,
  best practices enforcement, image verification,
  và policy-as-code workflow với GitOps.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 37
section_title: 'Phần 9: Security Hardening'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Kyverno architecture và admission webhook</li>
<li>✅ Validation policies (block dangerous configs)</li>
<li>✅ Mutation policies (inject defaults)</li>
<li>✅ Generation policies (auto-create resources)</li>
<li>✅ Image verification (cosign signatures)</li>
<li>✅ Policy-as-code GitOps workflow</li>
</ul>

<hr>

<h2 id="phan-1-architecture">PHẦN 1: KYVERNO ARCHITECTURE</h2>

<pre><code>
Kyverno Flow:

kubectl apply
      │
      ▼
┌──────────┐    ┌──────────────────┐
│API Server│───►│ Kyverno Webhook  │
│          │    │  (Admission)     │
│          │    │                  │
│          │◄───│ Allow / Deny /   │
│          │    │ Mutate resource  │
└──────────┘    └──────────────────┘
                        │
                ┌───────┴────────┐
                │   Policies     │
                │ - Validate     │
                │ - Mutate       │
                │ - Generate     │
                │ - VerifyImages │
                └────────────────┘
</code></pre>

<pre><code class="language-bash"># Install Kyverno:
helm repo add kyverno https://kyverno.github.io/kyverno/
helm repo update

helm install kyverno kyverno/kyverno \
  --namespace kyverno \
  --create-namespace \
  -f kyverno-values.yaml
</code></pre>

<pre><code class="language-yaml"># kyverno-values.yaml:
admissionController:
  replicas: 3
  resources:
    requests:
      cpu: 100m
      memory: 256Mi
    limits:
      cpu: 500m
      memory: 512Mi

backgroundController:
  replicas: 2

cleanupController:
  replicas: 2

reportsController:
  replicas: 2
</code></pre>

<hr>

<h2 id="phan-2-validate">PHẦN 2: VALIDATION POLICIES</h2>

<pre><code class="language-yaml"># Require resource limits:
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: require-resource-limits
spec:
  validationFailureAction: Enforce
  background: true
  rules:
    - name: validate-limits
      match:
        any:
          - resources:
              kinds: ["Pod"]
      exclude:
        any:
          - resources:
              namespaces: ["kube-system", "kyverno"]
      validate:
        message: "CPU and memory limits are required"
        pattern:
          spec:
            containers:
              - resources:
                  limits:
                    memory: "?*"
                    cpu: "?*"

---
# Disallow privileged containers:
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: disallow-privileged
spec:
  validationFailureAction: Enforce
  rules:
    - name: deny-privileged
      match:
        any:
          - resources:
              kinds: ["Pod"]
      validate:
        message: "Privileged containers are not allowed"
        pattern:
          spec:
            containers:
              - securityContext:
                  privileged: "!true"

---
# Require labels:
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: require-labels
spec:
  validationFailureAction: Enforce
  rules:
    - name: check-labels
      match:
        any:
          - resources:
              kinds: ["Deployment", "StatefulSet"]
      validate:
        message: "Labels app and team are required"
        pattern:
          metadata:
            labels:
              app: "?*"
              team: "?*"

---
# Disallow latest tag:
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: disallow-latest-tag
spec:
  validationFailureAction: Enforce
  rules:
    - name: validate-image-tag
      match:
        any:
          - resources:
              kinds: ["Pod"]
      validate:
        message: "Image tag 'latest' is not allowed"
        pattern:
          spec:
            containers:
              - image: "!*:latest"
</code></pre>

<hr>

<h2 id="phan-3-mutate">PHẦN 3: MUTATION POLICIES</h2>

<pre><code class="language-yaml"># Auto-inject default securityContext:
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: add-default-security-context
spec:
  rules:
    - name: add-security-context
      match:
        any:
          - resources:
              kinds: ["Pod"]
      exclude:
        any:
          - resources:
              namespaces: ["kube-system"]
      mutate:
        patchStrategicMerge:
          spec:
            securityContext:
              runAsNonRoot: true
              seccompProfile:
                type: RuntimeDefault
            containers:
              - (name): "*"
                securityContext:
                  allowPrivilegeEscalation: false
                  capabilities:
                    drop: ["ALL"]

---
# Auto-add imagePullSecrets:
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: add-image-pull-secret
spec:
  rules:
    - name: add-pull-secret
      match:
        any:
          - resources:
              kinds: ["Pod"]
      mutate:
        patchStrategicMerge:
          spec:
            imagePullSecrets:
              - name: harbor-registry-creds
</code></pre>

<hr>

<h2 id="phan-4-generate">PHẦN 4: GENERATION POLICIES</h2>

<pre><code class="language-yaml"># Auto-create NetworkPolicy for new namespaces:
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: generate-default-networkpolicy
spec:
  rules:
    - name: deny-all-ingress
      match:
        any:
          - resources:
              kinds: ["Namespace"]
      exclude:
        any:
          - resources:
              names: ["kube-system", "kyverno", "monitoring"]
      generate:
        synchronize: true
        apiVersion: networking.k8s.io/v1
        kind: NetworkPolicy
        name: default-deny-all
        namespace: "{{request.object.metadata.name}}"
        data:
          spec:
            podSelector: {}
            policyTypes:
              - Ingress
              - Egress
            ingress: []
            egress:
              - to: []
                ports:
                  - port: 53
                    protocol: UDP
                  - port: 53
                    protocol: TCP

---
# Auto-create ResourceQuota per namespace:
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: generate-resource-quota
spec:
  rules:
    - name: create-quota
      match:
        any:
          - resources:
              kinds: ["Namespace"]
              selector:
                matchLabels:
                  type: application
      generate:
        synchronize: true
        apiVersion: v1
        kind: ResourceQuota
        name: default-quota
        namespace: "{{request.object.metadata.name}}"
        data:
          spec:
            hard:
              requests.cpu: "4"
              requests.memory: 8Gi
              limits.cpu: "8"
              limits.memory: 16Gi
              pods: "50"
</code></pre>

<hr>

<h2 id="phan-5-image-verify">PHẦN 5: IMAGE VERIFICATION</h2>

<pre><code class="language-yaml"># Require signed images (cosign):
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: verify-image-signature
spec:
  validationFailureAction: Enforce
  webhookTimeoutSeconds: 30
  rules:
    - name: verify-cosign
      match:
        any:
          - resources:
              kinds: ["Pod"]
      verifyImages:
        - imageReferences:
            - "harbor.local/*"
          attestors:
            - entries:
                - keys:
                    publicKeys: |-
                      -----BEGIN PUBLIC KEY-----
                      MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE...
                      -----END PUBLIC KEY-----
</code></pre>

<pre><code class="language-bash"># Sign images with cosign:
cosign generate-key-pair

# Sign:
cosign sign --key cosign.key harbor.local/order-service:v1.0

# Verify:
cosign verify --key cosign.pub harbor.local/order-service:v1.0
</code></pre>

<hr>

<h2 id="phan-6-policy-reports">PHẦN 6: POLICY REPORTS</h2>

<pre><code class="language-bash"># View policy reports:
kubectl get policyreport -A
kubectl get clusterpolicyreport

# Detailed report:
kubectl get policyreport -n default polr-ns-default -o yaml

# Policy violations dashboard:
# Kyverno exports metrics → Prometheus → Grafana
# kyverno_policy_results_total{rule_result="fail"}
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Kyverno</strong>: Kubernetes-native policy engine (YAML, no Rego)</li>
<li><strong>Validate</strong>: Block non-compliant resources</li>
<li><strong>Mutate</strong>: Auto-inject security defaults</li>
<li><strong>Generate</strong>: Auto-create NetworkPolicy, ResourceQuota</li>
<li><strong>Image verification</strong>: Require cosign signatures</li>
<li><strong>Policy reports</strong>: Audit compliance across cluster</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Core Policies</h3>
<ul>
<li>Deploy Kyverno, create validation policies</li>
<li>Test: deploy pod without limits → should be blocked</li>
<li>Create mutation policy for securityContext</li>
</ul>

<h3 id="bt2">Bài tập 2: Policy Reports</h3>
<ul>
<li>Scan existing cluster with Audit mode policies</li>
<li>Review policy reports for violations</li>
<li>Switch to Enforce mode after fixing violations</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 38: Falco Runtime Security</strong>, chúng ta sẽ implement runtime threat detection.</p>
