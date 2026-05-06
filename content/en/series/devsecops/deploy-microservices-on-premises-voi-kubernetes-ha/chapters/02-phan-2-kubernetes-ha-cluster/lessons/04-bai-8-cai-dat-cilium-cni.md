---
id: 019e1a00-aa01-7001-c001-k8sha000204
title: 'LESSON 8: INSTALL CILIUM CNI — eBPF NETWORKING'
slug: bai-8-cai-dat-cilium-cni
description: Install Cilium CNI using eBPF instead of kube-proxy, enable Hubble observability, configure NetworkPolicy L3/L4/L7, and verify pod-to-pod networking works properly.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 'Part 2: Kubernetes HA Cluster with kubeadm'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Deploy Microservices On-Premises with Kubernetes HA
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-501" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-501)"/>

  <!-- Decorations -->
  <g>
    <circle cx="964" cy="182" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="828" cy="146" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="692" cy="110" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="1056" cy="74" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="920" cy="38" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="222" x2="1100" y2="302" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="252" x2="1050" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1004.0429399400242,153.5 1004.0429399400242,190.5 972,209 939.9570600599758,190.5 939.9570600599758,153.5 972,135" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Lesson 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 8: CILIUM CNI SETUP — eBPF</tspan>
      <tspan x="60" dy="42">NETWORKING</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises with Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Kubernetes HA Cluster with kubeadm__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 LESSON OBJECTIVE__HTMLTAG_68___
<p>After completing this lesson, you will:</p>
<ul>
<li>✅ Understand eBPF and why Cilium outperforms traditional CNI</li>
<li>✅ Install Cilium with Helm and verify connectivity</li>
<li>✅ Replace kube-proxy with Cilium eBPF</li>
<li>✅ Enable Hubble for network observability</li>
<li>✅ Writing NetworkPolicy L3/L4/L7</li>
</ul>

<hr>

<h2 id="phan-1-tai-sao-cilium">PART 1: WHY CHOOSE CILIUM?</h2>

<h3 id="11-so-sanh-cni">1.1. Compare popular CNIs</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Criteria__HTMLTAG_93___
<th>Calico</th>
<th>Flannel</th>
<th>Cilium</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dataplane</td>
<td>iptables/eBPF</td>
<td>VXLAN</td>
<td>eBPF native</td>
</tr>
<tr>
<td>NetworkPolicy</td>
<td>L3/L4</td>
<td>❌ Not supported</td>
<td>L3/L4/L7</td>
</tr>
<tr>
<td>Performance</td>
<td>Good</td>
<td>Average</td>
<td>Excellent</td>
</tr>
<tr>
<td>Observability</td>
<td>Basic</td>
<td>❌</td>
<td>Hubble (deep)</td>
</tr>
<tr>
<td>kube-proxy replacement</td>
<td>❌</td>
<td>❌</td>
<td>✅ Full</td>
</tr>
<tr>
<td>Encryption (WireGuard)</td>
<td>✅</td>
<td>❌</td>
<td>✅ Native</td>
</tr>
<tr>
<td>Service Mesh integration</td>
<td>❌</td>
<td>❌</td>
<td>✅ Istio/Envoy</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="12-ebpf-la-gi">1.2. What is eBPF?</h3>
<pre><code>
Mô hình truyền thống (iptables):
┌──────────┐    ┌──────────────────────────┐    ┌──────────┐
│  Pod A   │───►│  iptables (userspace)     │───►│  Pod B   │
│          │    │  Chain rules: 100+ rules  │    │          │
│          │    │  Linear scan O(n)         │    │          │
└──────────┘    └──────────────────────────┘    └──────────┘

Mô hình eBPF (Cilium):
┌──────────┐    ┌──────────────────────────┐    ┌──────────┐
│  Pod A   │───►│  eBPF program (kernel)    │───►│  Pod B   │
│          │    │  Hash-based lookup O(1)   │    │          │
│          │    │  XDP fast path            │    │          │
└──────────┘    └──────────────────────────┘    └──────────┘

✅ eBPF chạy trực tiếp trong kernel, không qua iptables
✅ Latency thấp hơn ~20-30%
✅ Scale tốt hơn khi có nhiều services (10,000+)
</code></pre>

<hr>

<h2 id="phan-2-cai-dat-cilium">PART 2: CILIUM SETUP</h2>

<h3 id="21-cai-helm">2.1. Install Helm</h3>
<pre><code class="language-bash"># Trên master1 (hoặc bastion host):
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# Verify:
helm version
# version.BuildInfo{Version:"v3.16.x", ...}
</code></pre>

<h3 id="22-xoa-kube-proxy">2.2. Remove kube-proxy (optional — replace with Cilium)</h3>
<pre><code class="language-bash"># Option 1: Xóa kube-proxy hoàn toàn (recommended):
kubectl -n kube-system delete ds kube-proxy
kubectl -n kube-system delete cm kube-proxy

# Xóa iptables rules của kube-proxy trên MỖI node:
# (SSH vào từng node hoặc dùng script)
iptables-save | grep -v KUBE | iptables-restore

# Option 2: Giữ kube-proxy (Cilium sẽ chạy alongside)
# → Không cần xóa, nhưng sẽ có overhead
</code></pre>

<h3 id="23-cai-cilium-bang-helm">2.3. Install Cilium using Helm</h3>
<pre><code class="language-bash"># Add Cilium Helm repo:
helm repo add cilium https://helm.cilium.io/
helm repo update

# Install Cilium:
helm install cilium cilium/cilium --version 1.16.5 \
  --namespace kube-system \
  --set kubeProxyReplacement=true \
  --set k8sServiceHost=10.10.20.100 \
  --set k8sServicePort=6443 \
  --set ipam.mode=kubernetes \
  --set hubble.relay.enabled=true \
  --set hubble.ui.enabled=true \
  --set hubble.metrics.enableOpenMetrics=true \
  --set hubble.metrics.enabled="{dns,drop,tcp,flow,port-distribution,icmp,httpV2:exemplars=true;labelsContext=source_ip\,source_namespace\,source_workload\,destination_ip\,destination_namespace\,destination_workload\,traffic_direction}" \
  --set operator.replicas=2 \
  --set bpf.masquerade=true \
  --set bgpControlPlane.enabled=false \
  --set routingMode=tunnel \
  --set tunnelProtocol=vxlan \
  --set loadBalancer.algorithm=maglev \
  --set bandwidthManager.enabled=true \
  --set bandwidthManager.bbr=true
</code></pre>

<h3 id="24-giai-thich-tham-so">2.4. Important parameter explanation</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Parameters</th>
<th>Value</th>
<th>Meaning__HTMLTAG_198___
</tr>
</thead>
<tbody>
<tr>
<td>kubeProxyReplacement</td>
<td>true</td>
<td>Cilium completely replaces kube-proxy__HTMLTAG_208___
</tr>
<tr>
<td>k8sServiceHost</td>
<td>10.10.20.100</td>
<td>VIP (HAProxy) to Cilium to connect API server</td>
</tr>
<tr>
<td>ipam.mode</td>
<td>kubernetes</td>
<td>Use K8s IPAM (suitable for on-prem)</td>
</tr>
<tr>
<td>hubble.relay.enabled</td>
<td>true</td>
<td>Enable Hubble Relay for flow aggregation</td>
</tr>
<tr>
<td>hubble.ui.enabled</td>
<td>true</td>
<td>Enable Hubble UI (web dashboard)</td>
</tr>
<tr>
<td>operator.replicas__HTMLTAG_244___
<td>2</td>
<td>HA for Cilium Operator</td>
</tr>
<tr>
<td>bpf.masquerade</td>
<td>true</td>
<td>eBPF masquerading replace iptables SNAT</td>
</tr>
<tr>
<td>loadBalancer.algorithm</td>
<td>maglev</td>
<td>Consistent hashing for less disruption when scaling</td>
</tr>
<tr>
<td>bandwidthManager</td>
<td>enabled + bbr</td>
<td>EDT-based rate limiting + BBR congestion control</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="25-verify-cilium-installation">2.5. Verify Cilium Installation</h3>
<pre><code class="language-bash"># Đợi tất cả pods ready:
kubectl -n kube-system get pods -l app.kubernetes.io/part-of=cilium -w
# NAME                               READY   STATUS    RESTARTS   AGE
# cilium-xxxxx                       1/1     Running   0          2m   (DaemonSet, 1 per node)
# cilium-xxxxx                       1/1     Running   0          2m
# cilium-xxxxx                       1/1     Running   0          2m
# cilium-xxxxx                       1/1     Running   0          2m
# cilium-xxxxx                       1/1     Running   0          2m
# cilium-xxxxx                       1/1     Running   0          2m
# cilium-operator-xxxxx-xxxxx        1/1     Running   0          2m
# cilium-operator-xxxxx-xxxxx        1/1     Running   0          2m
# hubble-relay-xxxxx-xxxxx           1/1     Running   0          2m
# hubble-ui-xxxxx-xxxxx              2/2     Running   0          2m

# Verify nodes chuyển Ready:
kubectl get nodes
# NAME      STATUS   ROLES           AGE   VERSION
# master1   Ready    control-plane   1h    v1.31.0
# master2   Ready    control-plane   50m   v1.31.0
# master3   Ready    control-plane   48m   v1.31.0
# worker1   Ready    worker          30m   v1.31.0
# worker2   Ready    worker          29m   v1.31.0
# worker3   Ready    worker          28m   v1.31.0
# 🎉 Tất cả nodes Ready!

# Verify CoreDNS running:
kubectl -n kube-system get pods -l k8s-app=kube-dns
# NAME                       READY   STATUS    RESTARTS   AGE
# coredns-xxx-xxx            1/1     Running   0          1h
# coredns-xxx-xxx            1/1     Running   0          1h
</code></pre>

<hr>

<h2 id="phan-3-cilium-cli">PART 3: CILIUM CLI — CONNECTIVITY TEST</h2>

<h3 id="31-cai-cilium-cli">3.1. Install Cilium CLI</h3>
<pre><code class="language-bash"># Download Cilium CLI:
CILIUM_CLI_VERSION=$(curl -s https://raw.githubusercontent.com/cilium/cilium-cli/main/stable.txt)
CLI_ARCH=amd64
curl -L --fail --remote-name-all \
  https://github.com/cilium/cilium-cli/releases/download/${CILIUM_CLI_VERSION}/cilium-linux-${CLI_ARCH}.tar.gz
tar xzvf cilium-linux-${CLI_ARCH}.tar.gz -C /usr/local/bin
rm cilium-linux-${CLI_ARCH}.tar.gz

# Verify:
cilium version
</code></pre>

<h3 id="32-cilium-status">3.2. Cilium Status</h3>
<pre><code class="language-bash">cilium status
#     /¯¯\
#  /¯¯\__/¯¯\    Cilium:             OK
#  \__/¯¯\__/    Operator:           OK
#  /¯¯\__/¯¯\    Envoy DaemonSet:    disabled (using embedded mode)
#  \__/¯¯\__/    Hubble Relay:       OK
#     \__/       ClusterMesh:        disabled
#
# Deployment             cilium-operator    Desired: 2, Ready: 2/2
# DaemonSet              cilium             Desired: 6, Ready: 6/6
# Deployment             hubble-relay       Desired: 1, Ready: 1/1
# Deployment             hubble-ui          Desired: 1, Ready: 1/1
# Containers:            cilium             Running: 6
#                        cilium-operator    Running: 2
#                        hubble-relay       Running: 1
#                        hubble-ui          Running: 1
</code></pre>

<h3 id="33-connectivity-test">3.3. Connectivity Test</h3>
<pre><code class="language-bash"># Chạy full connectivity test (mất ~5 phút):
cilium connectivity test

# Output:
# ✅ All 46 tests (306 actions) successful, 0 tests skipped, 0 scenarios skipped.
</code></pre>

<hr>

<h2 id="phan-4-hubble-observability">PART 4: HUBBLE OBSERVABILITY</h2>

<h3 id="41-cai-hubble-cli">4.1. Install Hubble CLI</h3>
<pre><code class="language-bash"># Download Hubble CLI:
HUBBLE_VERSION=$(curl -s https://raw.githubusercontent.com/cilium/hubble/master/stable.txt)
curl -L --fail --remote-name-all \
  https://github.com/cilium/hubble/releases/download/${HUBBLE_VERSION}/hubble-linux-amd64.tar.gz
tar xzvf hubble-linux-amd64.tar.gz -C /usr/local/bin
rm hubble-linux-amd64.tar.gz
</code></pre>

<h3 id="42-xem-network-flows">4.2. View Network Flows</h3>
<pre><code class="language-bash"># Port-forward Hubble Relay:
kubectl -n kube-system port-forward svc/hubble-relay 4245:80 &

# Observe flows real-time:
hubble observe --follow
# Apr  2 07:00:30.123: 10.244.1.5:34567 (ID:12345) -> 10.96.0.1:443 (kube-system/kube-apiserver)
#   to-stack FORWARDED (TCP Flags: SYN)
# Apr  2 07:00:30.124: 10.96.0.1:443 -> 10.244.1.5:34567
#   to-endpoint FORWARDED (TCP Flags: SYN, ACK)

# Filter by namespace:
hubble observe --namespace default --follow

# Filter drops:
hubble observe --verdict DROPPED --follow

# Xem DNS queries:
hubble observe --protocol dns --follow
</code></pre>

<h3 id="43-hubble-ui">4.3. Hubble UI</h3>
<pre><code class="language-bash"># Port-forward Hubble UI:
kubectl -n kube-system port-forward svc/hubble-ui 12000:80
# Mở browser: http://localhost:12000
# → Service Map hiển thị tất cả connections giữa pods
</code></pre>

<hr>

<h2 id="phan-5-network-policy">PART 5: NETWORK POLICY WITH CILIUM</h2>

<h3 id="51-deploy-test-apps">5.1. Deploy test applications</h3>
<pre><code class="language-bash"># Tạo namespace test:
kubectl create namespace policy-demo

# Deploy frontend:
kubectl -n policy-demo run frontend --image=nginx:alpine --labels="app=frontend"
kubectl -n policy-demo expose pod frontend --port=80

# Deploy backend:
kubectl -n policy-demo run backend --image=nginx:alpine --labels="app=backend"
kubectl -n policy-demo expose pod backend --port=80

# Test: frontend → backend (nên hoạt động):
kubectl -n policy-demo exec frontend -- curl -s backend
# <!DOCTYPE html>...  ← OK

# Test: backend → frontend (nên hoạt động):
kubectl -n policy-demo exec backend -- curl -s frontend
# <!DOCTYPE html>...  ← OK
</code></pre>

<h3 id="52-deny-all-policy">5.2. Default Deny All Policy</h3>
<pre><code class="language-yaml"># deny-all.yaml — khóa toàn bộ traffic trong namespace:
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-all
  namespace: policy-demo
spec:
  podSelector: {}
  policyTypes:
    - Ingress
    - Egress
</code></pre>

<pre><code class="language-bash">kubectl apply -f deny-all.yaml

# Test lại: frontend → backend (BLOCKED):
kubectl -n policy-demo exec frontend -- curl -s --max-time 3 backend
# curl: (28) Connection timed out  ← BLOCKED! ✅
</code></pre>

<h3 id="53-allow-frontend-to-backend">5.3. Allow frontend → backend</h3>
<pre><code class="language-yaml"># allow-frontend-to-backend.yaml:
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend-to-backend
  namespace: policy-demo
spec:
  podSelector:
    matchLabels:
      app: backend
  policyTypes:
    - Ingress
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app: frontend
      ports:
        - protocol: TCP
          port: 80
</code></pre>

<pre><code class="language-bash">kubectl apply -f allow-frontend-to-backend.yaml

# Cần allow DNS egress cho frontend:
cat <<'EOF' | kubectl apply -f -
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-dns-egress
  namespace: policy-demo
spec:
  podSelector: {}
  policyTypes:
    - Egress
  egress:
    - to:
        - namespaceSelector:
            matchLabels:
              kubernetes.io/metadata.name: kube-system
      ports:
        - protocol: UDP
          port: 53
        - protocol: TCP
          port: 53
    - to:
        - podSelector: {}
      ports:
        - protocol: TCP
          port: 80
EOF

# Test: frontend → backend (ALLOWED):
kubectl -n policy-demo exec frontend -- curl -s --max-time 3 backend
# <!DOCTYPE html>...  ← OK! ✅
</code></pre>

<h3 id="54-cilium-l7-policy">5.4. Cilium L7 Policy (HTTP-aware)</h3>
<pre><code class="language-yaml"># cilium-l7-policy.yaml — chỉ cho phép GET /api/*:
apiVersion: cilium.io/v2
kind: CiliumNetworkPolicy
metadata:
  name: l7-rule-backend
  namespace: policy-demo
spec:
  endpointSelector:
    matchLabels:
      app: backend
  ingress:
    - fromEndpoints:
        - matchLabels:
            app: frontend
      toPorts:
        - ports:
            - port: "80"
              protocol: TCP
          rules:
            http:
              - method: "GET"
                path: "/api/.*"
</code></pre>

<pre><code class="language-bash">kubectl apply -f cilium-l7-policy.yaml

# GET /api/health → ALLOWED:
kubectl -n policy-demo exec frontend -- curl -s backend/api/health
# (response hoặc 404 nhưng connection OK)

# POST /api/data → BLOCKED:
kubectl -n policy-demo exec frontend -- curl -s -X POST backend/api/data
# Access denied  ← BLOCKED bởi L7 policy! ✅
</code></pre>

<hr>

<h2 id="phan-6-troubleshooting">PART 6: TROUBLESHOOTING</h2>

<h3 id="61-common-issues">6.1. Common Issues</h3>
<pre><code class="language-bash"># Issue 1: Cilium pod CrashLoopBackOff
kubectl -n kube-system logs -l k8s-app=cilium --tail=50
# Kiểm tra: kernel modules (bpf), containerd socket, kube-proxy conflict

# Issue 2: Nodes vẫn NotReady
cilium status
kubectl -n kube-system describe pod cilium-xxxxx
# Kiểm tra: cilium-agent có connect được API server qua VIP

# Issue 3: Pod-to-pod connectivity failed
cilium connectivity test --test pod-to-pod
# Debug eBPF:
cilium bpf policy get --all

# Issue 4: DNS resolution failed
kubectl -n kube-system rollout restart deployment coredns
hubble observe --protocol dns
</code></pre><h3 id="62-cleanup-test">6.2. Cleanup test resources</h3>
<pre><code class="language-bash">kubectl delete namespace policy-demo
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Cilium eBPF</strong> superior: O(1) lookup, replaces kube-proxy, L7 policy</li>
<li><strong>kubeProxyReplacement=true</strong>: Cilium handles all services, no need for kube-proxy</li>
<li><strong>Hubble</strong> for deep observability — see flow, DNS queries, HTTP requests</li>
<li><strong>NetworkPolicy</strong>: Default deny + whitelist is best practice</li>
<li><strong>CiliumNetworkPolicy</strong> extend K8s NetworkPolicy add L7 rules (HTTP, gRPC, Kafka)</li>
<li><strong>cilium connectivity test__HTMLTAG_341___: Run 46 tests to automatically verify networking</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 EXERCISE</h2>

<h3 id="bt1">Exercise 1: Installing Cilium</h3>
<ul>
<li>Install Helm, install Cilium with kubeProxyReplacement</li>
<li>Verify all nodes Ready</li>
<li>Run cilium status and cilium connectivity test</li>
</ul>

<h3 id="bt2">Exercise 2: NetworkPolicy Lab</h3>
<ul>
<li>Create namespace and deploy 3 pods (frontend, backend, database)</li>
<li>Apply default-deny-all</li>
<li>Create policies: frontend→backend (HTTP GET), backend→database (TCP 5432)</li>
<li>Verify only authorized traffic will work</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 NEXT POST</h2>
<p>In <strong>Lesson 9: MetalLB — LoadBalancer for On-Premises</strong>, we will install MetalLB to expose services outside the cluster with type LoadBalancer.</p>