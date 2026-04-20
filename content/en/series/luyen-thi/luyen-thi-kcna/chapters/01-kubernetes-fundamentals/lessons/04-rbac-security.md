---
id: kcna-d1-l04
title: 'Lesson 4: RBAC & Security Basics'
slug: 04-rbac-security
description: >-
  RBAC model: Role, ClusterRole, RoleBinding, ClusterRoleBinding.
  ServiceAccounts. NetworkPolicy. Pod Security Standards. SecurityContext.
duration_minutes: 50
is_free: true
video_url: null
sort_order: 4
section_title: "Domain 1: Kubernetes Fundamentals (46%)"
course:
  id: lt-kcna-series-001
  title: 'KCNA Exam Prep — Kubernetes and Cloud Native Associate'
  slug: luyen-thi-kcna
---

<img src="/storage/uploads/2026/04/k8s-cert-kcna-bai4-rbac-security.png" alt="Kubernetes RBAC & Security — Role, ClusterRole, RoleBinding" style="max-width: 800px; width: 100%; border-radius: 12px;" />

<h2 id="rbac">1. RBAC — Role-Based Access Control</h2>

<p><strong>RBAC</strong> controls who can do what in the cluster. It answers: "Can user X perform action Y on resource Z?"</p>

<pre><code class="language-text">RBAC Model:
  WHO (Subject)     +     WHAT (Role)         =    HOW (Binding)
  ─────────────           ──────────                ─────────────
  User                    Role (namespace)          RoleBinding (namespace)
  Group                   ClusterRole (cluster)     ClusterRoleBinding (cluster)
  ServiceAccount</code></pre>

<table>
<thead><tr><th>Component</th><th>Scope</th><th>Defines</th></tr></thead>
<tbody>
<tr><td><strong>Role</strong></td><td>Namespace</td><td>Permissions within a single namespace</td></tr>
<tr><td><strong>ClusterRole</strong></td><td>Cluster</td><td>Permissions for the entire cluster or all namespaces</td></tr>
<tr><td><strong>RoleBinding</strong></td><td>Namespace</td><td>Assigns a Role to a Subject in a specific namespace</td></tr>
<tr><td><strong>ClusterRoleBinding</strong></td><td>Cluster</td><td>Assigns a ClusterRole to a Subject across the entire cluster</td></tr>
</tbody>
</table>

<blockquote><p><strong>Exam tip:</strong> KCNA questions often test: "Which resource do you use for cluster-wide permission?" → ClusterRole + ClusterRoleBinding. "Which for a single namespace?" → Role + RoleBinding.</p></blockquote>

<h2 id="serviceaccount">2. ServiceAccounts</h2>

<p><strong>ServiceAccount</strong> is an identity used by Pods to interact with the Kubernetes API. Each namespace has a default ServiceAccount.</p>

<table>
<thead><tr><th>Feature</th><th>ServiceAccount</th><th>User account</th></tr></thead>
<tbody>
<tr><td>Who uses it</td><td>Pods, controllers, apps</td><td>Humans (admin, developer)</td></tr>
<tr><td>Created by</td><td>kubectl / API</td><td>External provider (OIDC, LDAP)</td></tr>
<tr><td>Kubernetes manages</td><td>Yes</td><td>No</td></tr>
<tr><td>Mounted as</td><td>Token in Pod</td><td>kubeconfig</td></tr>
</tbody>
</table>

<h2 id="networkpolicy">3. NetworkPolicy</h2>

<p><strong>NetworkPolicy</strong> controls network traffic between Pods. Default: all traffic is allowed. After a NetworkPolicy is applied, only traffic matching the rules is permitted (whitelist model).</p>

<pre><code class="language-text">NetworkPolicy Example:
  Namespace: production
  ┌────────────────────────────────────┐
  │  frontend Pods ──► backend Pods   │ ✓ Allowed (rule exists)
  │  random Pods   ──► backend Pods   │ ✗ Denied  (no matching rule)
  │  backend Pods  ──► database Pods  │ ✓ Allowed (rule exists)
  └────────────────────────────────────┘</code></pre>

<blockquote><p><strong>Exam tip:</strong> NetworkPolicy requires a <strong>CNI plugin that supports it</strong> (Calico, Cilium). The default kubenet plugin does NOT support NetworkPolicy — creating the resource has no effect without proper CNI!</p></blockquote>

<h2 id="pod-security">4. Pod Security Standards (PSS)</h2>

<p><strong>Pod Security Standards</strong> define 3 policy levels for Pod security, replacing the deprecated PodSecurityPolicy (PSP).</p>

<table>
<thead><tr><th>Level</th><th>Restrictions</th><th>Use case</th></tr></thead>
<tbody>
<tr><td><strong>Privileged</strong></td><td>No restrictions</td><td>System-level workloads (kube-system)</td></tr>
<tr><td><strong>Baseline</strong></td><td>Prevents known privilege escalation</td><td>Standard application workloads</td></tr>
<tr><td><strong>Restricted</strong></td><td>Strictest, follows Pod hardening best practices</td><td>High-security workloads</td></tr>
</tbody>
</table>

<h2 id="security-context">5. SecurityContext</h2>

<table>
<thead><tr><th>Setting</th><th>Function</th></tr></thead>
<tbody>
<tr><td><code>runAsNonRoot: true</code></td><td>Prevents running as root</td></tr>
<tr><td><code>readOnlyRootFilesystem: true</code></td><td>Makes the root filesystem read-only</td></tr>
<tr><td><code>allowPrivilegeEscalation: false</code></td><td>No process can gain more privileges than its parent</td></tr>
<tr><td><code>runAsUser: 1000</code></td><td>Container runs as user UID 1000</td></tr>
<tr><td><code>capabilities.drop: ["ALL"]</code></td><td>Removes all Linux capabilities</td></tr>
</tbody>
</table>

<h2 id="cheatsheet">6. Cheat Sheet</h2>

<table>
<thead><tr><th>Exam question</th><th>Answer</th></tr></thead>
<tbody>
<tr><td>Namespace-scoped permissions?</td><td><strong>Role + RoleBinding</strong></td></tr>
<tr><td>Cluster-wide permissions?</td><td><strong>ClusterRole + ClusterRoleBinding</strong></td></tr>
<tr><td>Identity for Pods accessing API?</td><td><strong>ServiceAccount</strong></td></tr>
<tr><td>Control Pod-to-Pod traffic?</td><td><strong>NetworkPolicy</strong></td></tr>
<tr><td>Replace deprecated PodSecurityPolicy?</td><td><strong>Pod Security Standards (PSS)</strong></td></tr>
<tr><td>NetworkPolicy requires?</td><td>CNI supporting it (Calico, Cilium)</td></tr>
</tbody>
</table>

<h2 id="practice">7. Practice Questions</h2>

<p><strong>Q1:</strong> A team wants to grant a developer read-only access to Pods in the 'staging' namespace only. Which RBAC resources should they create?</p>
<ul>
<li>A) ClusterRole + ClusterRoleBinding</li>
<li>B) Role + RoleBinding ✓</li>
<li>C) ClusterRole + RoleBinding</li>
<li>D) ServiceAccount + Secret</li>
</ul>
<p><em>Explanation: Since the permission scope is a single namespace ('staging'), use Role (to define pod read permissions in that namespace) + RoleBinding (to assign the Role to the user in that namespace).</em></p>

<p><strong>Q2:</strong> By default, what happens when you create a NetworkPolicy that selects certain Pods?</p>
<ul>
<li>A) All traffic is blocked for all Pods in the namespace</li>
<li>B) Only traffic matching the policy rules is allowed to the selected Pods ✓</li>
<li>C) The policy has no effect until the cluster is restarted</li>
<li>D) All outbound traffic from selected Pods is blocked</li>
</ul>
<p><em>Explanation: When a NetworkPolicy selects Pods, those Pods switch to a whitelist model — only explicitly allowed ingress/egress is permitted. Pods not selected by any policy remain unrestricted (allow all).</em></p>

<p><strong>Q3:</strong> Which Pod Security Standard level should be applied to general application workloads that don't need special privileges?</p>
<ul>
<li>A) Privileged</li>
<li>B) Baseline ✓</li>
<li>C) Restricted</li>
<li>D) Default</li>
</ul>
<p><em>Explanation: Baseline prevents known privilege escalation (no hostNetwork, no privileged containers, no hostPID/IPC) while remaining permissive enough for most applications. Restricted is stricter (required for high-security environments), and Privileged has no restrictions.</em></p>
