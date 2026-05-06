---
id: 019e1a00-aa01-7001-c001-k8sha001204
title: 'LESSON 49: TROUBLESHOOTING GUIDE'
slug: bai-49-troubleshooting-guide
description: 'Systematic troubleshooting for K8s production: pod issues, networking, storage, performance, control plane, common errors, and diagnostic tools.'
duration_minutes: 150
is_free: true
video_url: null
sort_order: 49
section_title: 'Part 12: Production Operations & Capstone Project'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Deploy Microservices On-Premises with Kubernetes HA
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-54" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-54)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1000" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="150" x2="1100" y2="230" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="180" x2="1050" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="921.650635094611,87.5 921.650635094611,112.5 900,125 878.349364905389,112.5 878.349364905389,87.5 900,75" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — Lesson 49</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 49: TROUBLESHOOTING GUIDE</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises with Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 12: Production Operations &amp; Capstone Project</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 LESSON OBJECTIVE__HTMLTAG_66___
<ul>
<li>✅ Systematic troubleshooting methodology</li>
<li>✅ Pod troubleshooting (CrashLoopBackOff, Pending, OOM)</li>
<li>✅ Networking issues (DNS, service discovery, connectivity)</li>
<li>✅ Storage issues (PV/PVC, mount errors)</li>
<li>✅ Control plane troubleshooting__HTMLTAG_77___
<li>✅ Essential diagnostic tools</li>
</ul>

<hr>

<h2 id="phan-1-methodology">PART 1: TROUBLESHOOTING METHODOLOGY</h2>

<pre><code>
Systematic Approach:

1. IDENTIFY   → What's the symptom? What changed?
2. ISOLATE    → Which component? Which layer?
3. DIAGNOSE   → Logs, events, metrics, traces
4. FIX        → Apply fix (restart, rollback, patch)
5. VERIFY     → Confirm fix, check SLO
6. DOCUMENT   → Postmortem, update runbook

Troubleshooting Layers:
┌─────────────────────────────────────┐
│ Application (code, config, deps)    │
├─────────────────────────────────────┤
│ Container (image, resources, probes)│
├─────────────────────────────────────┤
│ Pod (scheduling, lifecycle, volumes)│
├─────────────────────────────────────┤
│ Service (DNS, routing, load balance)│
├─────────────────────────────────────┤
│ Node (kubelet, OS, hardware)        │
├─────────────────────────────────────┤
│ Cluster (API server, etcd, network) │
└─────────────────────────────────────┘
</code></pre>

<hr>

<h2 id="phan-2-pod">PART 2: POD TROUBLESHOOTING</h2>

<pre><code class="language-bash"># Pod status diagnosis:

# ImagePullBackOff:
kubectl describe pod <name> | grep -A5 "Events"
# Fix: check image name, registry credentials, network

# CrashLoopBackOff:
kubectl logs <pod> --previous  # Previous container logs
kubectl describe pod <pod>     # Check exit code
# Common: app error, missing config, wrong command

# Pending:
kubectl describe pod <pod> | grep -A10 "Events"
# Common causes:
#   - Insufficient resources → check node capacity
#   - No matching node selector/affinity
#   - PVC not bound
kubectl get events --sort-by=.lastTimestamp

# OOMKilled:
kubectl describe pod <pod> | grep "OOMKilled"
kubectl top pod <pod>
# Fix: increase memory limits, fix memory leak

# Evicted:
kubectl get pods --field-selector=status.phase=Failed
kubectl describe pod <evicted-pod> | grep -i evict
# Common: node disk pressure, memory pressure
</code></pre>

<pre><code class="language-bash"># Debug containers (ephemeral):
kubectl debug pod/<name> -it --image=busybox:1.36 --target=app-container

# Debug with network tools:
kubectl debug pod/<name> -it --image=nicolaka/netshoot --target=app-container

# Copy files from pod for analysis:
kubectl cp <pod>:/var/log/app.log ./app.log
</code></pre>

<hr>

<h2 id="phan-3-network">PART 3: NETWORKING TROUBLESHOOTING</h2>

<pre><code class="language-bash"># DNS resolution:
kubectl run dns-test --image=busybox:1.36 --rm -it -- nslookup order-service
kubectl run dns-test --image=busybox:1.36 --rm -it -- nslookup order-service.default.svc.cluster.local

# Check CoreDNS:
kubectl -n kube-system get pods -l k8s-app=kube-dns
kubectl -n kube-system logs -l k8s-app=kube-dns --tail=50

# Service connectivity:
kubectl run nettest --image=nicolaka/netshoot --rm -it -- bash
# Inside pod:
curl -v http://order-service:8080/health
traceroute order-service
nmap -p 8080 order-service

# Check endpoints:
kubectl get endpoints order-service
# Empty endpoints = no pods match service selector

# NetworkPolicy issues:
kubectl get networkpolicies -n <namespace>
# Test: temporarily delete NetworkPolicy to confirm it's the cause

# Cilium network debugging:
kubectl -n kube-system exec -it ds/cilium -- cilium status
kubectl -n kube-system exec -it ds/cilium -- cilium monitor
kubectl -n kube-system exec -it ds/cilium -- cilium policy get
</code></pre>

<hr>

<h2 id="phan-4-storage">PART 4: STORAGE TROUBLESHOOTING</h2>

<pre><code class="language-bash"># PVC stuck in Pending:
kubectl describe pvc <name>
# Common causes:
#   - No StorageClass matching
#   - Ceph cluster full
#   - Volume not available in zone

# Check Ceph health:
kubectl -n rook-ceph exec -it deploy/rook-ceph-tools -- ceph status
kubectl -n rook-ceph exec -it deploy/rook-ceph-tools -- ceph osd df
kubectl -n rook-ceph exec -it deploy/rook-ceph-tools -- ceph health detail

# Volume mount errors:
kubectl describe pod <pod> | grep -A5 "Warning"
# "Unable to attach or mount volumes"
# Fix: check PV node affinity, RBD map conflicts

# Multi-attach errors (RWO volume):
# Only one node can attach RWO volume
# Fix: delete stuck pod on old node, or use RWX (CephFS)

# Expand PVC:
kubectl patch pvc data-pvc -p '{"spec":{"resources":{"requests":{"storage":"20Gi"}}}}'
# StorageClass must have allowVolumeExpansion: true
</code></pre>

<hr>

<h2 id="phan-5-control-plane">PART 5: CONTROL PLANE TROUBLESHOOTING</h2>

<pre><code class="language-bash"># API server issues:
kubectl get --raw /healthz
kubectl get --raw /readyz
kubectl get componentstatuses  # deprecated but still works

# Check control plane pods:
kubectl -n kube-system get pods
kubectl -n kube-system logs kube-apiserver-master-1
kubectl -n kube-system logs kube-controller-manager-master-1
kubectl -n kube-system logs kube-scheduler-master-1

# etcd health:
ETCDCTL_API=3 etcdctl endpoint health \
  --endpoints=https://10.0.1.11:2379,https://10.0.1.12:2379,https://10.0.1.13:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key

# etcd performance:
ETCDCTL_API=3 etcdctl endpoint status --write-out=table \
  --endpoints=... --cacert=... --cert=... --key=...

# Node not ready:
kubectl describe node <node>
# Check conditions: MemoryPressure, DiskPressure, PIDPressure
ssh <node> systemctl status kubelet
ssh <node> journalctl -u kubelet --tail=100
</code></pre>

<hr>

<h2 id="phan-6-common-errors">PART 6: COMMON ERRORS QUICK REFERENCE</h2><!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Error</th><th>Common Cause</th><th>Quick Fix</th></tr>
</thead>
<tbody>
<tr><td>ImagePullBackOff</td><td>Wrong image name/tag, no pull secret_</td><td>Check image, add imagePullSecrets</td></tr>
<tr><td>CrashLoopBackOff</td><td>App crash, missing env/config</td><td>Check logs --previous_</td></tr>
<tr><td>Pending</td><td>Insufficient resources, no node matches</td><td>Check events, node capacity_</td></tr>
<tr><td>OOMKilled</td><td>Memory limit exceeded</td><td>Increase limit or fix leak_</td></tr>
<tr><td>CreateContainerConfigError</td><td>Missing ConfigMap/Secret</td><td>Check referenced resources exist</td></tr>
<tr><td>Evicted_</td><td>Node disk/memory pressure</td><td>Clean up node, increase resources_</td></tr>
<tr><td>Back-off restarting</td><td>Readiness probe failing</td><td>Check probe config, port, path_</td></tr>
<tr><td>connection refused</td><td>Service not ready, wrong port</td><td>Check endpoints, service ports_</td></tr>
<tr><td>DNS resolution failed</td><td>CoreDNS down, wrong service name_</td><td>Check coredns pods, FQDN_</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Systematic approach</strong>: Identify → Isolate → Diagnose → Fix → Verify</li>
<li><strong>kubectl describe</strong>: First tool for any K8s issue</li>
<li><strong>Events</strong>: kubectl get events --sort-by=.lastTimestamp</li>
<li><strong>Debug containers</strong>: Ephemeral containers for live diagnosis</li>
<li><strong>Layer-by-layer</strong>: App → Container → Pod → Service → Node → Cluster</li>
<li><strong>Document</strong>: Every fix becomes a runbook entry</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 EXERCISE</h2>

<h3 id="bt1">Exercise 1: Troubleshooting Challenge</h3>
<ul>
<li>Teammate creates 5 broken deployments (wrong image, missing configmap, etc.)</li>
<li>Diagnose and fix each using only kubectl__HTMLTAG_225___
<li>Document diagnostic steps for each</li>
</ul><h3 id="bt2">Exercise 2: Diagnostic Toolkit</h3>
<ul>
<li>Create a "debug toolbox" pod with netshoot, pg_isready, redis-cli</li>
<li>Practice DNS, network, storage troubleshooting</li>
<li>Build personal troubleshooting cheat sheet</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 NEXT POST</h2>
<p>In <strong>Lesson 50: Capstone Project — E-Commerce Platform</strong>, we will build and deploy the entire end-to-end microservices system.</p>