---
id: 019e1a00-aa01-7001-c001-k8sha001003
title: 'LESSON 42: RESOURCE MANAGEMENT & SCHEDULING'
slug: bai-42-resource-management-va-scheduling
description: Kubernetes resource requests/limits, QoS classes, LimitRange, ResourceQuota, node affinity/anti-affinity, taints & tolerations, topology spread, and scheduling best practices.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 42
section_title: 'Part 10: Deployment Patterns & Auto-Scaling'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Deploy Microservices On-Premises with Kubernetes HA
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2563" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2563)"/>

  <!-- Decorations -->
  <g>
    <circle cx="611" cy="183" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="622" cy="234" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="633" cy="285" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="644" cy="76" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="655" cy="127" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="153" x2="1100" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="183" x2="1050" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1027.2487113059642,189 1027.2487113059642,217 1003,231 978.7512886940357,217 978.7512886940357,189 1003,175" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — Lesson 42</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 42: RESOURCE MANAGEMENT &amp; SCHEDULING</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises with Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 10: Deployment Patterns &amp; Auto-Scaling</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 LESSON OBJECTIVE__HTMLTAG_66___
<ul>
<li>✅ Resource requests vs limits deep dive</li>
<li>✅ QoS classes (Guaranteed, Burstable, BestEffort)</li>
<li>✅ LimitRange and ResourceQuota</li>
<li>✅ Node affinity, anti-affinity, taints/tolerations</li>
<li>✅ Topology spread constraints</li>
<li>✅ Pod Priority and Preemption</li>
</ul>

<hr>

<h2 id="phan-1-resources">PART 1: RESOURCE REQUESTS & LIMITS</h2>

<pre><code>
Resource Model:

Node Capacity: 8 CPU, 32GB RAM
│
├── kube-reserved:    0.5 CPU, 1GB  (kubelet, containerd)
├── system-reserved:  0.5 CPU, 1GB  (OS processes)
├── eviction-threshold: 100Mi       (memory.available < 100Mi → evict)
│
└── Allocatable:      7 CPU, 30GB   (available for pods)

Pod scheduling:
  requests ≤ allocatable  → pod can be scheduled
  actual usage > limits   → container OOMKilled (memory) or throttled (CPU)

                requests         limits
CPU:        guaranteed cycles   max throttle point
Memory:     guaranteed memory   OOM kill threshold
</code></pre>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>QoS Class</th><th>Condition_</th><th>Eviction Priority</th></tr>
</thead>
<tbody>
<tr><td>Guaranteed</td><td>requests == limits (all containers)</td><td>Last to evict_</td></tr>
<tr><td>Burstable</td><td>requests < limits</td><td>Middle</td></tr>
<tr><td>BestEffort</td><td>No requests or limits_</td><td>First to evict</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<pre><code class="language-yaml"># Guaranteed QoS (production databases):
containers:
  - name: postgresql
    resources:
      requests:
        cpu: "2"
        memory: 4Gi
      limits:
        cpu: "2"
        memory: 4Gi

# Burstable QoS (most apps):
containers:
  - name: order-service
    resources:
      requests:
        cpu: 100m
        memory: 128Mi
      limits:
        cpu: 500m
        memory: 512Mi
</code></pre>

<hr>

<h2 id="phan-2-limitrange-quota">PART 2: LIMITRANGE & RESOURCEQUOTA</h2>

<pre><code class="language-yaml"># LimitRange (per container defaults):
apiVersion: v1
kind: LimitRange
metadata:
  name: default-limits
  namespace: default
spec:
  limits:
    - type: Container
      default:
        cpu: 200m
        memory: 256Mi
      defaultRequest:
        cpu: 100m
        memory: 128Mi
      max:
        cpu: "4"
        memory: 8Gi
      min:
        cpu: 50m
        memory: 64Mi

---
# ResourceQuota (per namespace total):
apiVersion: v1
kind: ResourceQuota
metadata:
  name: namespace-quota
  namespace: default
spec:
  hard:
    requests.cpu: "16"
    requests.memory: 32Gi
    limits.cpu: "32"
    limits.memory: 64Gi
    pods: "100"
    persistentvolumeclaims: "20"
    services.loadbalancers: "5"
</code></pre>

<hr>

<h2 id="phan-3-scheduling">PART 3: NODE AFFINITY & ANTI-AFFINITY</h2>

<pre><code class="language-yaml"># Node affinity: schedule on specific hardware:
apiVersion: apps/v1
kind: Deployment
metadata:
  name: gpu-ml-service
spec:
  template:
    spec:
      affinity:
        # Node affinity: prefer SSD nodes:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
              - matchExpressions:
                  - key: node-type
                    operator: In
                    values: ["compute"]
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 100
              preference:
                matchExpressions:
                  - key: disk-type
                    operator: In
                    values: ["ssd"]

        # Pod anti-affinity: spread across nodes:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            - labelSelector:
                matchExpressions:
                  - key: app
                    operator: In
                    values: ["gpu-ml-service"]
              topologyKey: kubernetes.io/hostname
</code></pre>

<pre><code class="language-yaml"># Topology spread: distribute evenly across zones/nodes:
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
spec:
  replicas: 6
  template:
    spec:
      topologySpreadConstraints:
        - maxSkew: 1
          topologyKey: kubernetes.io/hostname
          whenUnsatisfiable: DoNotSchedule
          labelSelector:
            matchLabels:
              app: order-service
        - maxSkew: 1
          topologyKey: topology.kubernetes.io/zone
          whenUnsatisfiable: ScheduleAnyway
          labelSelector:
            matchLabels:
              app: order-service
</code></pre>

<hr>

<h2 id="phan-4-taints">PART 4: TAINTS & TOLERATIONS</h2>

<pre><code class="language-bash"># Taint nodes for dedicated workloads:
kubectl taint nodes worker-db-01 dedicated=database:NoSchedule
kubectl taint nodes worker-db-02 dedicated=database:NoSchedule
</code></pre>

<pre><code class="language-yaml"># Toleration: only database pods on DB nodes:
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgresql
spec:
  template:
    spec:
      tolerations:
        - key: dedicated
          operator: Equal
          value: database
          effect: NoSchedule
      nodeSelector:
        dedicated: database
</code></pre>

<hr>

<h2 id="phan-5-priority">PART 5: POD PRIORITY & PREEMPTION</h2>

<pre><code class="language-yaml"># Priority classes:
apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: critical-production
value: 1000000
globalDefault: false
description: "Critical production workloads"
preemptionPolicy: PreemptLowerPriority

---
apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: default-production
value: 100000
globalDefault: true
description: "Default production priority"

---
apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: batch-jobs
value: 10000
description: "Batch jobs, preemptible"
preemptionPolicy: Never

---
# Use in Deployment:
apiVersion: apps/v1
kind: Deployment
metadata:
  name: payment-service
spec:
  template:
    spec:
      priorityClassName: critical-production
</code></pre>

<hr><h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Requests</strong>: Scheduling guarantee; <strong>Limits</strong>: Hard ceiling</li>
<li><strong>QoS</strong>: Guaranteed for databases, Burstable for apps</li>
<li><strong>LimitRange</strong>: Default/max per container; <strong>ResourceQuota</strong>: Total per namespace</li>
<li><strong>Topology spread</strong>: Even distribution across nodes/zones</li>
<li><strong>Taints</strong>: Dedicate nodes for specific workloads</li>
<li><strong>Priority</strong>: Critical services preempt batch jobs</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 EXERCISES__HTMLTAG_171___

<h3 id="bt1">Exercise 1: Resource Governance__HTMLTAG_173___
<ul>
<li>Create LimitRange and ResourceQuota for namespace__HTMLTAG_176___
<li>Deploy pod without resources → verify defaults applied</li>
<li>Exceed quota → verify pod rejected</li>
</ul>

<h3 id="bt2">Exercise 2: Scheduling</h3>
<ul>
<li>Taint 2 nodes for database workloads</li>
<li>Configure topology spread for 6-replica deployment__HTMLTAG_188___
<li>Create priority classes, test preemption__HTMLTAG_190___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 NEXT POST</h2>
<p>In <strong>Lesson 43: Multi-Tenancy & Namespace Isolation</strong>, we will implement multi-tenant architecture on shared cluster.</p>