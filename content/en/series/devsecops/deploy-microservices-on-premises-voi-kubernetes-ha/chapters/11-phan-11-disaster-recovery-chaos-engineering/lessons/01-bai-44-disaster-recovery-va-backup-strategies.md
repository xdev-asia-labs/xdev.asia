---
id: 019e1a00-aa01-7001-c001-k8sha001101
title: 'LESSON 44: DISASTER RECOVERY & BACKUP STRATEGIES'
slug: bai-44-disaster-recovery-va-backup-strategies
description: DR planning for on-premises K8s, Velero backup/restore, etcd disaster recovery, cross-site replication, RPO/RTO targets, and DR runbook automation.
duration_minutes: 180
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai44-disaster-recovery.png
sort_order: 44
section_title: 'Part 11: Disaster Recovery & Chaos Engineering'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Deploy Microservices On-Premises with Kubernetes HA
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3797" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3797)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1092" cy="246" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="1084" cy="58" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1076" cy="130" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="1068" cy="202" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="274" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="66" x2="1100" y2="146" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="96" x2="1050" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1051.507041555162,195.5 1051.507041555162,236.5 1016,257 980.492958444838,236.5 980.492958444838,195.5 1016,175" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — Lesson 44</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 44: DISASTER RECOVERY &amp; BACKUP</tspan>
      <tspan x="60" dy="42">STARTEGIES</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises with Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 11: Disaster Recovery &amp; Chaos Engineering</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 LESSON OBJECTIVE__HTMLTAG_68___
<ul>
<li>✅ DR planning: RPO, RTO, failure scenarios</li>
<li>✅ Velero backup & restore for K8s resources + PVs</li>
<li>✅ etcd snapshot backup & restore</li>
<li>✅ Cross-site DR strategies</li>
<li>✅ DR testing and runbook automation</li>
</ul>

<hr>

<h2 id="phan-1-dr-planning">PART 1: DR PLANNING</h2>

<pre><code>
Failure Scenarios & DR Strategy:

Level 1: Pod/Container failure
  → K8s auto-restart (ReplicaSet, liveness probe)
  → RPO: 0  |  RTO: seconds

Level 2: Node failure
  → K8s reschedule pods to other nodes
  → RPO: 0  |  RTO: minutes

Level 3: Storage failure
  → Ceph replication (replica 3)
  → RPO: 0  |  RTO: seconds

Level 4: Control plane failure
  → HA control plane (3 masters)
  → RPO: 0  |  RTO: seconds

Level 5: Entire cluster failure
  → Velero restore + etcd snapshot
  → RPO: last backup  |  RTO: 1-4 hours

Level 6: Data center / site failure
  → Cross-site DR (active-passive)
  → RPO: minutes  |  RTO: hours

┌──────────────────┬───────────┬───────────┐
│ Component        │   RPO     │   RTO     │
├──────────────────┼───────────┼───────────┤
│ K8s resources    │ 1 hour    │ 30 min    │
│ PostgreSQL       │ 5 min     │ 15 min    │
│ etcd             │ 1 hour    │ 30 min    │
│ Ceph data        │ 0 (3x)   │ seconds   │
│ Configurations   │ 0 (Git)   │ minutes   │
└──────────────────┴───────────┴───────────┘
</code></pre>

<hr>

<h2 id="phan-2-velero">PART 2: VELERO BACKUP & RESTORE__HTMLTAG_86___

<pre><code class="language-bash"># Install Velero:
helm repo add vmware-tanzu https://vmware-tanzu.github.io/helm-charts
helm install velero vmware-tanzu/velero \
  --namespace velero \
  --create-namespace \
  -f velero-values.yaml
</code></pre>

<pre><code class="language-yaml"># velero-values.yaml:
configuration:
  backupStorageLocation:
    - name: default
      provider: aws
      bucket: velero-backups
      config:
        region: us-east-1
        s3ForcePathStyle: "true"
        s3Url: http://ceph-rgw.storage:8080

  volumeSnapshotLocation:
    - name: default
      provider: csi

credentials:
  secretContents:
    cloud: |
      [default]
      aws_access_key_id=velero
      aws_secret_access_key=velero-secret

initContainers:
  - name: velero-plugin-for-aws
    image: velero/velero-plugin-for-aws:v1.9.0
    volumeMounts:
      - mountPath: /target
        name: plugins
  - name: velero-plugin-for-csi
    image: velero/velero-plugin-for-csi:v0.7.0
    volumeMounts:
      - mountPath: /target
        name: plugins

snapshotsEnabled: true

schedules:
  daily-backup:
    disabled: false
    schedule: "0 2 * * *"
    template:
      ttl: 720h
      includedNamespaces:
        - default
        - production
        - database
      snapshotVolumes: true
      storageLocation: default
      volumeSnapshotLocations:
        - default
</code></pre>

<pre><code class="language-bash"># Manual backup:
velero backup create full-backup \
  --include-namespaces default,production,database \
  --snapshot-volumes

# List backups:
velero backup get

# Restore from backup:
velero restore create --from-backup full-backup \
  --include-namespaces production

# Restore specific resources:
velero restore create --from-backup full-backup \
  --include-resources deployments,services,configmaps \
  --include-namespaces production

# Backup status:
velero backup describe full-backup --details
</code></pre>

<hr>

<h2 id="phan-3-etcd-dr">PART 3: ETCD DISASTER RECOVERY</h2>

<pre><code class="language-bash"># Automated etcd backup (CronJob):
# (Already covered in Bài 10, recap here for DR context)

# Backup etcd snapshot:
ETCDCTL_API=3 etcdctl snapshot save /backup/etcd-$(date +%Y%m%d-%H%M).db \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key

# Restore etcd from snapshot (DR scenario):
# 1. Stop kube-apiserver on all masters
# 2. Restore on each etcd member:
ETCDCTL_API=3 etcdctl snapshot restore /backup/etcd-latest.db \
  --name master-1 \
  --initial-cluster master-1=https://10.0.1.11:2380,master-2=https://10.0.1.12:2380,master-3=https://10.0.1.13:2380 \
  --initial-cluster-token etcd-cluster-1 \
  --initial-advertise-peer-urls https://10.0.1.11:2380 \
  --data-dir=/var/lib/etcd-restore

# 3. Replace /var/lib/etcd with restored data
# 4. Restart etcd + kube-apiserver
</code></pre>

<hr>

<h2 id="phan-4-cross-site">PART 4: CROSS-SITE DR</h2>

<pre><code>
Cross-Site DR Architecture:

Site A (Primary)                Site B (DR)
┌──────────────────┐            ┌──────────────────┐
│  K8s Cluster     │            │  K8s Cluster     │
│  (Active)        │            │  (Standby)       │
│                  │            │                  │
│  ┌────────────┐  │  replicate │  ┌────────────┐  │
│  │ PostgreSQL │──┼───────────►│  │ PostgreSQL │  │
│  │ (Primary)  │  │  streaming │  │ (Replica)  │  │
│  └────────────┘  │            │  └────────────┘  │
│                  │            │                  │
│  ┌────────────┐  │  S3 sync  │  ┌────────────┐  │
│  │ Ceph/S3    │──┼───────────►│  │ Ceph/S3    │  │
│  │ (backups)  │  │            │  │ (backups)  │  │
│  └────────────┘  │            │  └────────────┘  │
│                  │            │                  │
│  ┌────────────┐  │  GitOps   │  ┌────────────┐  │
│  │ ArgoCD     │  │  (shared) │  │ ArgoCD     │  │
│  └────────────┘  │            │  └────────────┘  │
└──────────────────┘            └──────────────────┘

Failover: DNS switch + promote PostgreSQL replica
</code></pre>

<hr>

<h2 id="phan-5-dr-runbook">PART 5: DR RUNBOOK</h2>

<pre><code class="language-bash"># DR Runbook — Full Cluster Recovery:

# Step 1: Restore infrastructure (Ansible/Terraform)
ansible-playbook -i inventory/dr site.yml

# Step 2: Bootstrap K8s cluster
kubeadm init --config kubeadm-dr-config.yaml

# Step 3: Restore etcd
etcdctl snapshot restore /backup/etcd-latest.db ...

# Step 4: Install core components (Cilium, MetalLB, Rook-Ceph)
helmfile -f helmfile-core.yaml apply

# Step 5: Restore Velero backups
velero restore create --from-backup latest-daily

# Step 6: Restore databases (PostgreSQL PITR)
kubectl apply -f postgresql-restore-cluster.yaml

# Step 7: Verify services
./scripts/verify-all-services.sh

# Step 8: Switch DNS
# Update DNS records to point to DR site
</code></pre>

<pre><code class="language-yaml"># DR testing schedule:
# Monthly:  Velero backup/restore test
# Quarterly: Full cluster DR drill
# Annually:  Cross-site failover test

# Monitoring DR readiness:
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: dr-alerts
spec:
  groups:
    - name: dr-readiness
      rules:
        - alert: VeleroBackupFailed
          expr: |
            velero_backup_failure_total > velero_backup_success_total
          for: 5m
          labels:
            severity: critical

        - alert: VeleroBackupStale
          expr: |
            time() - velero_backup_last_successful_timestamp > 86400
          for: 1h
          labels:
            severity: warning
          annotations:
            summary: "No successful Velero backup in 24h"
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>RPO/RTO</strong>: Define targets per component before disaster</li>
<li><strong>Velero</strong>: K8s resource + PV backup to S3/Ceph</li>
<li><strong>etcd</strong>: Regular snapshots, tested restore procedure</li>
<li><strong>GitOps</strong>: Infrastructure-as-Code = instant re-deploy</li>
<li><strong>Cross-site DR</strong>: PostgreSQL streaming replication + S3 sync</li>
<li><strong>Test regularly</strong>: Untested backups are not backups</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 EXERCISES__HTMLTAG_127___<h3 id="bt1">Exercise 1: Velero DR</h3>
<ul>
<li>Setup Velero with S3 backend</li>
<li>Create scheduled backup for all namespaces__HTMLTAG_134___
<li>Simulate namespace deletion → restore from backup</li>
</ul>

<h3 id="bt2">Exercise 2: DR Drill</h3>
<ul>
<li>Document DR runbook for your cluster</li>
<li>Perform etcd restore drill__HTMLTAG_144___
<li>Measure actual RTO vs target</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 NEXT POST</h2>
<p>In <strong>Lesson 45: Chaos Engineering with Litmus</strong>, we will proactively test system resilience.</p>