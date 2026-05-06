---
id: kcna-d2-l06
title: 'Lesson 6: Container Orchestration Patterns'
slug: 06-orchestration-patterns
description: >-
  Scheduling, auto-scaling (HPA, VPA, Cluster Autoscaler), resource requests
  and limits, namespaces, multi-tenancy and Kubernetes upgrade strategies.
duration_minutes: 55
is_free: true
video_url: null
sort_order: 6
locale: en
section_title: "Domain 2: Container Orchestration (22%)"
course:
  id: lt-kcna-series-001
  title: 'KCNA Exam Prep — Kubernetes and Cloud Native Associate'
  slug: luyen-thi-kcna
---

<img src="/storage/uploads/2026/04/k8s-cert-kcna-bai6-orchestration.png" alt="Container Orchestration — Scheduling, Autoscaling, Resource Management" style="max-width: 800px; width: 100%; border-radius: 12px;" />

<h2 id="scheduling">1. Pod Scheduling</h2>

<p>The <strong>kube-scheduler</strong> selects a suitable node for each Pod. Scheduling is based on resources, constraints, and policies.</p>

<h3 id="node-selection">Node Selection Methods</h3>

<table>
<thead><tr><th>Method</th><th>Used for</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>nodeSelector</strong></td><td>Basic: select node by label</td><td><code>nodeSelector: {disk: ssd}</code></td></tr>
<tr><td><strong>Node Affinity</strong></td><td>Advanced: preferred/required rules</td><td>"prefer nodes in zone-a, required: arch=amd64"</td></tr>
<tr><td><strong>Pod Affinity</strong></td><td>Co-locate Pods</td><td>"schedule near Pods with label app=cache"</td></tr>
<tr><td><strong>Pod Anti-Affinity</strong></td><td>Spread Pods apart</td><td>"don't run 2 replicas on the same node"</td></tr>
</tbody>
</table>

<h2 id="taints-tolerations">2. Taints & Tolerations</h2>

<pre><code class="language-text">Taints & Tolerations:
  Node: "I have a taint — only Pods that tolerate it can run here"
  Pod:  "I tolerate that taint — schedule me there"

  kubectl taint nodes node1 gpu=true:NoSchedule
  → Only Pods with matching toleration are scheduled on node1

  Taint Effects:
    NoSchedule       → New Pods won't be scheduled (existing stay)
    PreferNoSchedule → Try to avoid scheduling (soft)
    NoExecute        → Evict existing Pods + prevent new (hard)</code></pre>

<blockquote><p><strong>Exam tip:</strong> <strong>Taint is on the Node, Toleration is on the Pod.</strong> The Control Plane nodes have a default taint so that user Pods don't run there.</p></blockquote>

<h2 id="resources">3. Resource Requests & Limits</h2>

<pre><code class="language-text">resources:
  requests:          # Minimum required for scheduling
    cpu: "250m"      # 0.25 core
    memory: "128Mi"  # 128 MiB
  limits:            # Maximum the container can use
    cpu: "500m"      # 0.5 core
    memory: "256Mi"  # 256 MiB</code></pre>

<table>
<thead><tr><th>Field</th><th>Role</th><th>What happens if exceeded</th></tr></thead>
<tbody>
<tr><td><strong>requests</strong></td><td>Minimum resource for scheduling</td><td>N/A — it's a minimum guarantee</td></tr>
<tr><td><strong>limits</strong></td><td>Maximum resource allowed</td><td>CPU: throttled. Memory: Pod OOMKilled</td></tr>
</tbody>
</table>

<blockquote><p><strong>Exam tip:</strong> requests are used by the scheduler to decide node placement. limits are enforced by the kubelet at runtime. No requests set = Pod can be scheduled on any node but may get evicted under resource pressure.</p></blockquote>

<h2 id="autoscaling">4. Autoscaling</h2>

<table>
<thead><tr><th>Type</th><th>What it scales</th><th>Based on</th><th>Needs</th></tr></thead>
<tbody>
<tr><td><strong>HPA</strong> (Horizontal Pod Autoscaler)</td><td>Number of Pod replicas</td><td>CPU/Memory/Custom metrics</td><td>metrics-server</td></tr>
<tr><td><strong>VPA</strong> (Vertical Pod Autoscaler)</td><td>CPU/Memory requests per Pod</td><td>Historical usage</td><td>VPA controller</td></tr>
<tr><td><strong>Cluster Autoscaler</strong></td><td>Number of nodes</td><td>Unschedulable Pods due to insufficient resources</td><td>Cloud provider integration</td></tr>
</tbody>
</table>

<pre><code class="language-text">HPA Flow:
  metrics-server → HPA controller → check current CPU %
  If CPU > 70% target → scale up replicas
  If CPU < 70% target → scale down replicas

  kubectl autoscale deployment nginx --cpu-percent=70 --min=2 --max=10</code></pre>

<h2 id="namespace">5. Namespace & Multi-tenancy</h2>

<table>
<thead><tr><th>Resource</th><th>Used for</th></tr></thead>
<tbody>
<tr><td><strong>Namespace</strong></td><td>Logical division (dev, staging, prod or per team)</td></tr>
<tr><td><strong>ResourceQuota</strong></td><td>Limit total resources a namespace can consume</td></tr>
<tr><td><strong>LimitRange</strong></td><td>Set default/min/max resources per container in a namespace</td></tr>
<tr><td><strong>NetworkPolicy</strong></td><td>Control traffic between namespaces</td></tr>
<tr><td><strong>RBAC</strong></td><td>Control who can access what in a namespace</td></tr>
</tbody>
</table>

<pre><code class="language-text">Multi-tenancy Pattern:
  Cluster
  ├── namespace: team-alpha
  │   ├── ResourceQuota: max 10 CPU, 32Gi memory
  │   ├── LimitRange: default 200m CPU, 256Mi per container
  │   ├── NetworkPolicy: deny all ingress from other namespaces
  │   └── RBAC: only team-alpha members can access
  ├── namespace: team-beta
  │   └── ...similar isolation...
  └── namespace: kube-system (platform)</code></pre>

<h2 id="cheatsheet">6. Cheat Sheet</h2>

<table>
<thead><tr><th>Exam question</th><th>Answer</th></tr></thead>
<tbody>
<tr><td>What happens when CPU limit is exceeded?</td><td>Container is <strong>throttled</strong> (not killed)</td></tr>
<tr><td>What happens when memory limit is exceeded?</td><td>Container is <strong>OOMKilled</strong></td></tr>
<tr><td>Scale based on CPU usage?</td><td><strong>HPA</strong></td></tr>
<tr><td>Add more nodes when Pods are unschedulable?</td><td><strong>Cluster Autoscaler</strong></td></tr>
<tr><td>Force Pods onto specific nodes?</td><td><strong>nodeSelector</strong> or <strong>Node Affinity</strong></td></tr>
<tr><td>Prevent Pods from running on certain nodes?</td><td><strong>Taints</strong></td></tr>
<tr><td>Limit total resources per namespace?</td><td><strong>ResourceQuota</strong></td></tr>
</tbody>
</table>

<h2 id="practice">7. Practice Questions</h2>

<p><strong>Q1:</strong> A container has a memory limit of 256Mi and attempts to allocate 300Mi. What happens?</p>
<ul>
<li>A) The container is CPU-throttled</li>
<li>B) The container is terminated with OOMKilled ✓</li>
<li>C) The memory limit is automatically increased</li>
<li>D) The request is queued until memory becomes available</li>
</ul>
<p><em>Explanation: When a container exceeds its memory limit, the kernel's OOM Killer terminates it. CPU exceeding limits causes throttling (degraded performance), but memory violations cause immediate termination.</em></p>

<p><strong>Q2:</strong> A cluster admin wants to ensure only GPU workloads run on GPU-equipped nodes. What should they use?</p>
<ul>
<li>A) Node Affinity</li>
<li>B) Taints on GPU nodes + Tolerations on GPU Pods ✓</li>
<li>C) ResourceQuota</li>
<li>D) PriorityClass</li>
</ul>
<p><em>Explanation: Tainting GPU nodes (e.g., gpu=true:NoSchedule) prevents non-GPU Pods from being scheduled there. GPU workloads add the matching toleration, allowing them to use the GPU nodes. nodeSelector/affinity would attract Pods to GPU nodes but wouldn't prevent non-GPU Pods from landing there.</em></p>

<p><strong>Q3:</strong> Which autoscaling mechanism should be used when Pods are in Pending state due to insufficient cluster resources?</p>
<ul>
<li>A) HPA</li>
<li>B) VPA</li>
<li>C) Cluster Autoscaler ✓</li>
<li>D) LimitRange</li>
</ul>
<p><em>Explanation: Cluster Autoscaler watches for unschedulable Pods (Pending due to insufficient CPU/memory on all nodes) and provisions new nodes from the cloud provider. HPA adds Pod replicas; VPA adjusts Pod resources — neither adds new nodes.</em></p>
