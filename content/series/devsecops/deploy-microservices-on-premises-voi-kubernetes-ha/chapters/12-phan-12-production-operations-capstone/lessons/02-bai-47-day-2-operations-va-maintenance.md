---
id: 019e1a00-aa01-7001-c001-k8sha001202
title: 'BÀI 47: DAY-2 OPERATIONS & MAINTENANCE'
slug: bai-47-day-2-operations-va-maintenance
description: >-
  Kubernetes cluster upgrades, node maintenance,
  certificate rotation, capacity planning,
  incident management, on-call practices,
  và operational runbooks.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 47
section_title: 'Phần 12: Production Operations & Capstone Project'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Kubernetes version upgrade process</li>
<li>✅ Node maintenance (drain, cordon, uncordon)</li>
<li>✅ Certificate rotation</li>
<li>✅ Capacity planning và trending</li>
<li>✅ Incident management framework</li>
<li>✅ Operational runbooks</li>
</ul>

<hr>

<h2 id="phan-1-upgrade">PHẦN 1: KUBERNETES UPGRADE</h2>

<pre><code>
Upgrade Strategy (v1.30 → v1.31):

Order: Control Plane first, then Workers

Step 1: Upgrade control plane nodes (one at a time)
  master-1 → master-2 → master-3

Step 2: Upgrade worker nodes (rolling)
  worker-1 → worker-2 → worker-3 → worker-4

Each node:
  cordon → drain → upgrade → uncordon
</code></pre>

<pre><code class="language-bash"># Upgrade control plane (master-1):
# 1. Update kubeadm:
apt-get update
apt-get install -y kubeadm=1.31.0-1.1

# 2. Plan upgrade:
kubeadm upgrade plan

# 3. Apply upgrade:
kubeadm upgrade apply v1.31.0

# 4. Drain node:
kubectl drain master-1 --ignore-daemonsets --delete-emptydir-data

# 5. Upgrade kubelet + kubectl:
apt-get install -y kubelet=1.31.0-1.1 kubectl=1.31.0-1.1
systemctl daemon-reload
systemctl restart kubelet

# 6. Uncordon:
kubectl uncordon master-1

# Upgrade worker nodes:
# 1. Drain:
kubectl drain worker-1 --ignore-daemonsets --delete-emptydir-data

# 2. SSH to worker, upgrade:
apt-get update
apt-get install -y kubeadm=1.31.0-1.1
kubeadm upgrade node
apt-get install -y kubelet=1.31.0-1.1
systemctl daemon-reload && systemctl restart kubelet

# 3. Uncordon:
kubectl uncordon worker-1
</code></pre>

<hr>

<h2 id="phan-2-node-maintenance">PHẦN 2: NODE MAINTENANCE</h2>

<pre><code class="language-bash"># Planned maintenance (e.g., hardware replacement):

# 1. Cordon (prevent new pods):
kubectl cordon worker-02

# 2. Drain (evict existing pods):
kubectl drain worker-02 \
  --ignore-daemonsets \
  --delete-emptydir-data \
  --grace-period=120 \
  --timeout=300s

# 3. Perform maintenance (reboot, disk replace, etc.)

# 4. Uncordon (allow pods again):
kubectl uncordon worker-02

# 5. Verify:
kubectl get nodes
kubectl get pods -o wide | grep worker-02
</code></pre>

<pre><code class="language-yaml"># PodDisruptionBudget (protect during drain):
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: order-service-pdb
spec:
  minAvailable: 2
  # or: maxUnavailable: 1
  selector:
    matchLabels:
      app: order-service
</code></pre>

<hr>

<h2 id="phan-3-certs">PHẦN 3: CERTIFICATE ROTATION</h2>

<pre><code class="language-bash"># Check certificate expiry:
kubeadm certs check-expiration

# Output:
# CERTIFICATE                EXPIRES           RESIDUAL TIME
# admin.conf                 Jun 15, 2025      364d
# apiserver                  Jun 15, 2025      364d
# apiserver-etcd-client      Jun 15, 2025      364d
# apiserver-kubelet-client   Jun 15, 2025      364d
# controller-manager.conf    Jun 15, 2025      364d
# etcd-healthcheck-client    Jun 15, 2025      364d
# etcd-peer                  Jun 15, 2025      364d
# etcd-server                Jun 15, 2025      364d
# front-proxy-client         Jun 15, 2025      364d
# scheduler.conf             Jun 15, 2025      364d

# Renew all certificates:
kubeadm certs renew all

# Restart control plane pods:
kubectl -n kube-system delete pod -l tier=control-plane

# Update kubeconfig:
cp /etc/kubernetes/admin.conf ~/.kube/config
</code></pre>

<pre><code class="language-yaml"># Alert on certificate expiry:
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: cert-expiry-alerts
spec:
  groups:
    - name: certificates
      rules:
        - alert: KubeCertExpiringSoon
          expr: |
            apiserver_client_certificate_expiration_seconds_count > 0
            and
            apiserver_client_certificate_expiration_seconds_bucket{le="604800"} > 0
          labels:
            severity: warning
          annotations:
            summary: "K8s certificate expiring within 7 days"
</code></pre>

<hr>

<h2 id="phan-4-capacity">PHẦN 4: CAPACITY PLANNING</h2>

<pre><code class="language-bash"># Grafana queries for capacity trending:

# CPU usage trend (predict when 80% reached):
predict_linear(
  sum(rate(node_cpu_seconds_total{mode!="idle"}[1h])) by (instance)
  [7d:1h], 30*86400
)

# Memory usage trend:
predict_linear(
  node_memory_MemAvailable_bytes[7d:1h], 30*86400
)

# Disk usage trend:
predict_linear(
  node_filesystem_avail_bytes{mountpoint="/"}[7d:1h], 30*86400
)

# Pod count trending:
predict_linear(
  sum(kube_pod_info)[7d:1h], 30*86400
)
</code></pre>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Metric</th><th>Threshold</th><th>Action</th></tr>
</thead>
<tbody>
<tr><td>Cluster CPU allocation</td><td>> 70%</td><td>Plan new worker nodes</td></tr>
<tr><td>Cluster memory allocation</td><td>> 75%</td><td>Plan new worker nodes</td></tr>
<tr><td>Ceph storage used</td><td>> 70%</td><td>Add OSDs or disks</td></tr>
<tr><td>PV usage</td><td>> 80%</td><td>Expand PVC or add storage</td></tr>
<tr><td>Pod count vs quota</td><td>> 80%</td><td>Increase ResourceQuota</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-5-incident">PHẦN 5: INCIDENT MANAGEMENT</h2>

<pre><code>
Incident Severity Levels:

SEV1 (Critical):
  - Service completely down
  - Data loss risk
  - Response: Immediate, all-hands
  - Communication: Every 15 min
  
SEV2 (Major):
  - Service degraded (high error rate, slow)
  - Response: < 15 min
  - Communication: Every 30 min

SEV3 (Minor):
  - Non-critical component issue
  - Response: < 1 hour
  - Communication: Status update

SEV4 (Low):
  - Cosmetic, minor bug
  - Response: Next business day

Incident Flow:
Alert → Acknowledge → Triage → Mitigate → Root Cause → Postmortem
</code></pre>

<pre><code class="language-bash"># Incident response runbook template:

# 1. SERVICE: [Service Name]
# 2. ALERT: [Alert Name]
# 3. SYMPTOMS: [What user/system sees]
# 4. DIAGNOSIS:
#    - Check pod status: kubectl get pods -l app=X
#    - Check logs: kubectl logs deploy/X --tail=50
#    - Check metrics: Grafana dashboard [URL]
#    - Check recent changes: kubectl rollout history deploy/X
# 5. MITIGATION:
#    - Rollback: kubectl rollout undo deploy/X
#    - Scale up: kubectl scale deploy/X --replicas=10
#    - Restart: kubectl rollout restart deploy/X
# 6. ESCALATION:
#    - Team lead: [name]
#    - SRE: [name]
#    - Manager: [name]
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Upgrades</strong>: Control plane first, workers rolling, one at a time</li>
<li><strong>PDB</strong>: Always set PodDisruptionBudget before drain</li>
<li><strong>Certificates</strong>: Monitor expiry, renew before 30-day warning</li>
<li><strong>Capacity</strong>: predict_linear for proactive planning</li>
<li><strong>Incidents</strong>: SEV levels, structured runbooks, postmortems</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Upgrade Drill</h3>
<ul>
<li>Perform K8s minor version upgrade on lab cluster</li>
<li>Practice node drain with PDB protection</li>
<li>Renew certificates, verify cluster health</li>
</ul>

<h3 id="bt2">Bài tập 2: Incident Response</h3>
<ul>
<li>Create runbook for top 5 common alerts</li>
<li>Practice incident simulation: inject failure → follow runbook</li>
<li>Write postmortem template</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 48: Performance Testing & Optimization</strong>, chúng ta sẽ load test và optimize hệ thống.</p>
