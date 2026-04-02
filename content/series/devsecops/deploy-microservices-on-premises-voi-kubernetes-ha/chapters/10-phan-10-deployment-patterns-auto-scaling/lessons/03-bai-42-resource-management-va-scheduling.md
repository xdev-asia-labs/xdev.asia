---
id: 019e1a00-aa01-7001-c001-k8sha001003
title: 'BÀI 42: RESOURCE MANAGEMENT & SCHEDULING'
slug: bai-42-resource-management-va-scheduling
description: >-
  Kubernetes resource requests/limits, QoS classes,
  LimitRange, ResourceQuota, node affinity/anti-affinity,
  taints & tolerations, topology spread, và scheduling best practices.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 42
section_title: 'Phần 10: Deployment Patterns & Auto-Scaling'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Resource requests vs limits deep dive</li>
<li>✅ QoS classes (Guaranteed, Burstable, BestEffort)</li>
<li>✅ LimitRange và ResourceQuota</li>
<li>✅ Node affinity, anti-affinity, taints/tolerations</li>
<li>✅ Topology spread constraints</li>
<li>✅ Pod Priority và Preemption</li>
</ul>

<hr>

<h2 id="phan-1-resources">PHẦN 1: RESOURCE REQUESTS & LIMITS</h2>

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
<tr><th>QoS Class</th><th>Condition</th><th>Eviction Priority</th></tr>
</thead>
<tbody>
<tr><td>Guaranteed</td><td>requests == limits (all containers)</td><td>Last to evict</td></tr>
<tr><td>Burstable</td><td>requests < limits</td><td>Middle</td></tr>
<tr><td>BestEffort</td><td>No requests or limits</td><td>First to evict</td></tr>
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

<h2 id="phan-2-limitrange-quota">PHẦN 2: LIMITRANGE & RESOURCEQUOTA</h2>

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

<h2 id="phan-3-scheduling">PHẦN 3: NODE AFFINITY & ANTI-AFFINITY</h2>

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

<h2 id="phan-4-taints">PHẦN 4: TAINTS & TOLERATIONS</h2>

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

<h2 id="phan-5-priority">PHẦN 5: POD PRIORITY & PREEMPTION</h2>

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

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Requests</strong>: Scheduling guarantee; <strong>Limits</strong>: Hard ceiling</li>
<li><strong>QoS</strong>: Guaranteed for databases, Burstable for apps</li>
<li><strong>LimitRange</strong>: Default/max per container; <strong>ResourceQuota</strong>: Total per namespace</li>
<li><strong>Topology spread</strong>: Even distribution across nodes/zones</li>
<li><strong>Taints</strong>: Dedicate nodes for specific workloads</li>
<li><strong>Priority</strong>: Critical services preempt batch jobs</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Resource Governance</h3>
<ul>
<li>Create LimitRange and ResourceQuota for namespace</li>
<li>Deploy pod without resources → verify defaults applied</li>
<li>Exceed quota → verify pod rejected</li>
</ul>

<h3 id="bt2">Bài tập 2: Scheduling</h3>
<ul>
<li>Taint 2 nodes for database workloads</li>
<li>Configure topology spread for 6-replica deployment</li>
<li>Create priority classes, test preemption</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 43: Multi-Tenancy & Namespace Isolation</strong>, chúng ta sẽ implement multi-tenant architecture trên shared cluster.</p>
