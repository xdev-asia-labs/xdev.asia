---
id: 019e1a00-aa01-7001-c001-k8sha001004
title: 'BÀI 43: MULTI-TENANCY & NAMESPACE ISOLATION'
slug: bai-43-multi-tenancy-va-namespace-isolation
description: >-
  Multi-tenant architecture trên shared K8s cluster,
  namespace isolation strategies, Network Policies,
  Hierarchical Namespaces, resource fairness,
  và tenant onboarding automation.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 43
section_title: 'Phần 10: Deployment Patterns & Auto-Scaling'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6315" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6315)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1038" cy="264" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="976" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="914" cy="160" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="852" cy="238" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="790" cy="56" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="124" x2="1100" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="154" x2="1050" y2="224" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="957.7749907475932,104.5 957.7749907475932,143.5 924,163 890.2250092524068,143.5 890.2250092524068,104.50000000000001 924,85" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — Bài 43</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 43: MULTI-TENANCY &amp; NAMESPACE</tspan>
      <tspan x="60" dy="42">ISOLATION</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 10: Deployment Patterns &amp; Auto-Scaling</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Multi-tenancy models (soft vs hard isolation)</li>
<li>✅ Namespace-per-team/environment strategy</li>
<li>✅ Network Policies cho namespace isolation</li>
<li>✅ RBAC per tenant</li>
<li>✅ Tenant onboarding automation (Kyverno generate)</li>
</ul>

<hr>

<h2 id="phan-1-models">PHẦN 1: MULTI-TENANCY MODELS</h2>

<pre><code>
Multi-Tenancy Models:

Model 1: Namespace per Environment
┌────────────────────────────────┐
│     Shared K8s Cluster         │
│  ┌──────┐ ┌──────┐ ┌────────┐ │
│  │ dev  │ │staging│ │  prod  │ │
│  │      │ │      │ │        │ │
│  └──────┘ └──────┘ └────────┘ │
└────────────────────────────────┘

Model 2: Namespace per Team
┌────────────────────────────────┐
│     Shared K8s Cluster         │
│  ┌────────┐ ┌────────┐        │
│  │team-a  │ │team-b  │        │
│  │-staging│ │-staging│ ...    │
│  │-prod   │ │-prod   │        │
│  └────────┘ └────────┘        │
└────────────────────────────────┘

Model 3: Cluster per Team/Env (hard isolation)
┌────────┐ ┌────────┐ ┌──────────┐
│Dev     │ │Staging │ │Production│
│Cluster │ │Cluster │ │Cluster   │
└────────┘ └────────┘ └──────────┘
</code></pre>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Aspect</th><th>Namespace Isolation</th><th>Cluster Isolation</th></tr>
</thead>
<tbody>
<tr><td>Cost</td><td>Low (shared infra)</td><td>High (separate clusters)</td></tr>
<tr><td>Security</td><td>Medium (soft boundary)</td><td>High (hard boundary)</td></tr>
<tr><td>Complexity</td><td>Low</td><td>High</td></tr>
<tr><td>Resource Sharing</td><td>Efficient</td><td>Wasteful</td></tr>
<tr><td>Best For</td><td>Same-org teams</td><td>Different customers/compliance</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-namespace">PHẦN 2: NAMESPACE STRATEGY</h2>

<pre><code class="language-yaml"># Namespace template with all isolation:
apiVersion: v1
kind: Namespace
metadata:
  name: team-payments-prod
  labels:
    team: payments
    environment: production
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/enforce-version: latest
  annotations:
    scheduler.alpha.kubernetes.io/node-selector: "env=production"
</code></pre>

<pre><code class="language-yaml"># Auto-provision with Kyverno (on namespace create):
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: tenant-onboarding
spec:
  rules:
    # 1. Create ResourceQuota:
    - name: generate-quota
      match:
        any:
          - resources:
              kinds: ["Namespace"]
              selector:
                matchExpressions:
                  - key: team
                    operator: Exists
      generate:
        synchronize: true
        apiVersion: v1
        kind: ResourceQuota
        name: tenant-quota
        namespace: "{{request.object.metadata.name}}"
        data:
          spec:
            hard:
              requests.cpu: "8"
              requests.memory: 16Gi
              limits.cpu: "16"
              limits.memory: 32Gi
              pods: "50"
              services.loadbalancers: "2"

    # 2. Create LimitRange:
    - name: generate-limitrange
      match:
        any:
          - resources:
              kinds: ["Namespace"]
              selector:
                matchExpressions:
                  - key: team
                    operator: Exists
      generate:
        synchronize: true
        apiVersion: v1
        kind: LimitRange
        name: tenant-limits
        namespace: "{{request.object.metadata.name}}"
        data:
          spec:
            limits:
              - type: Container
                default:
                  cpu: 200m
                  memory: 256Mi
                defaultRequest:
                  cpu: 100m
                  memory: 128Mi

    # 3. Create default NetworkPolicy:
    - name: generate-netpol
      match:
        any:
          - resources:
              kinds: ["Namespace"]
              selector:
                matchExpressions:
                  - key: team
                    operator: Exists
      generate:
        synchronize: true
        apiVersion: networking.k8s.io/v1
        kind: NetworkPolicy
        name: deny-all-default
        namespace: "{{request.object.metadata.name}}"
        data:
          spec:
            podSelector: {}
            policyTypes:
              - Ingress
              - Egress
            egress:
              - to: []
                ports:
                  - port: 53
                    protocol: UDP
                  - port: 53
                    protocol: TCP
</code></pre>

<hr>

<h2 id="phan-3-network-isolation">PHẦN 3: NETWORK ISOLATION</h2>

<pre><code class="language-yaml"># Allow intra-namespace traffic:
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-same-namespace
  namespace: team-payments-prod
spec:
  podSelector: {}
  policyTypes:
    - Ingress
  ingress:
    - from:
        - podSelector: {}

---
# Allow ingress from gateway only:
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-from-gateway
  namespace: team-payments-prod
spec:
  podSelector:
    matchLabels:
      app: payment-service
  policyTypes:
    - Ingress
  ingress:
    - from:
        - namespaceSelector:
            matchLabels:
              app: istio-gateway
      ports:
        - port: 8080

---
# Allow egress to database namespace:
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-to-database
  namespace: team-payments-prod
spec:
  podSelector: {}
  policyTypes:
    - Egress
  egress:
    - to:
        - namespaceSelector:
            matchLabels:
              purpose: database
      ports:
        - port: 5432
    - to: []
      ports:
        - port: 53
          protocol: UDP
</code></pre>

<hr>

<h2 id="phan-4-rbac-tenant">PHẦN 4: RBAC PER TENANT</h2>

<pre><code class="language-yaml"># Team RBAC:
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: team-developer
  namespace: team-payments-prod
rules:
  - apiGroups: ["", "apps", "batch"]
    resources: ["pods", "deployments", "services", "configmaps", "jobs"]
    verbs: ["get", "list", "watch", "create", "update", "delete"]
  - apiGroups: [""]
    resources: ["pods/log", "pods/exec"]
    verbs: ["get", "create"]
  # No access to secrets, RBAC, or namespace-level resources

---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: payments-team-binding
  namespace: team-payments-prod
subjects:
  - kind: Group
    name: team-payments
    apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: team-developer
  apiGroup: rbac.authorization.k8s.io
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Namespace-per-team</strong>: Balance isolation vs resource efficiency</li>
<li><strong>Automated onboarding</strong>: Kyverno generates Quota + LimitRange + NetworkPolicy</li>
<li><strong>Network isolation</strong>: Default deny-all, allow specific cross-namespace</li>
<li><strong>RBAC per tenant</strong>: Role per team, no cluster-admin</li>
<li><strong>PSS labels</strong>: Enforce restricted on all tenant namespaces</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Tenant Onboarding</h3>
<ul>
<li>Create namespace with team label → verify auto-provisioned resources</li>
<li>Verify NetworkPolicy blocks cross-namespace traffic</li>
<li>Test RBAC: team member can deploy, but not access secrets</li>
</ul>

<h3 id="bt2">Bài tập 2: Cross-Namespace Communication</h3>
<ul>
<li>Allow team-A service to call team-B API via NetworkPolicy</li>
<li>Configure Istio AuthorizationPolicy for service-to-service auth</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 44: Disaster Recovery & Backup Strategies</strong>, chúng ta sẽ bắt đầu Section 11 — DR & Chaos Engineering.</p>
