---
id: 019e1a00-aa01-7001-c001-k8sha001204
title: 'BÀI 49: TROUBLESHOOTING GUIDE'
slug: bai-49-troubleshooting-guide
description: >-
  Systematic troubleshooting cho K8s production:
  pod issues, networking, storage, performance,
  control plane, common errors, và diagnostic tools.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 49
section_title: 'Phần 12: Production Operations & Capstone Project'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Systematic troubleshooting methodology</li>
<li>✅ Pod troubleshooting (CrashLoopBackOff, Pending, OOM)</li>
<li>✅ Networking issues (DNS, service discovery, connectivity)</li>
<li>✅ Storage issues (PV/PVC, mount errors)</li>
<li>✅ Control plane troubleshooting</li>
<li>✅ Essential diagnostic tools</li>
</ul>

<hr>

<h2 id="phan-1-methodology">PHẦN 1: TROUBLESHOOTING METHODOLOGY</h2>

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

<h2 id="phan-2-pod">PHẦN 2: POD TROUBLESHOOTING</h2>

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

<h2 id="phan-3-network">PHẦN 3: NETWORKING TROUBLESHOOTING</h2>

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

<h2 id="phan-4-storage">PHẦN 4: STORAGE TROUBLESHOOTING</h2>

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

<h2 id="phan-5-control-plane">PHẦN 5: CONTROL PLANE TROUBLESHOOTING</h2>

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

<h2 id="phan-6-common-errors">PHẦN 6: COMMON ERRORS QUICK REFERENCE</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Error</th><th>Common Cause</th><th>Quick Fix</th></tr>
</thead>
<tbody>
<tr><td>ImagePullBackOff</td><td>Wrong image name/tag, no pull secret</td><td>Check image, add imagePullSecrets</td></tr>
<tr><td>CrashLoopBackOff</td><td>App crash, missing env/config</td><td>Check logs --previous</td></tr>
<tr><td>Pending</td><td>Insufficient resources, no node matches</td><td>Check events, node capacity</td></tr>
<tr><td>OOMKilled</td><td>Memory limit exceeded</td><td>Increase limit or fix leak</td></tr>
<tr><td>CreateContainerConfigError</td><td>Missing ConfigMap/Secret</td><td>Check referenced resources exist</td></tr>
<tr><td>Evicted</td><td>Node disk/memory pressure</td><td>Clean up node, increase resources</td></tr>
<tr><td>Back-off restarting</td><td>Readiness probe failing</td><td>Check probe config, port, path</td></tr>
<tr><td>connection refused</td><td>Service not ready, wrong port</td><td>Check endpoints, service ports</td></tr>
<tr><td>DNS resolution failed</td><td>CoreDNS down, wrong service name</td><td>Check coredns pods, FQDN</td></tr>
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

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Troubleshooting Challenge</h3>
<ul>
<li>Teammate creates 5 broken deployments (wrong image, missing configmap, etc.)</li>
<li>Diagnose and fix each using only kubectl</li>
<li>Document diagnosis steps for each</li>
</ul>

<h3 id="bt2">Bài tập 2: Diagnostic Toolkit</h3>
<ul>
<li>Create a "debug toolbox" pod with netshoot, pg_isready, redis-cli</li>
<li>Practice DNS, network, storage troubleshooting</li>
<li>Build personal troubleshooting cheat sheet</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 50: Capstone Project — E-Commerce Platform</strong>, chúng ta sẽ build và deploy toàn bộ hệ thống microservices end-to-end.</p>
