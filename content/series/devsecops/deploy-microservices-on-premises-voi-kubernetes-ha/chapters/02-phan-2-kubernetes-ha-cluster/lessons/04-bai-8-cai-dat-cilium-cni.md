---
id: 019e1a00-aa01-7001-c001-k8sha000204
title: 'BÀI 8: CÀI ĐẶT CILIUM CNI — eBPF NETWORKING'
slug: bai-8-cai-dat-cilium-cni
description: >-
  Cài đặt Cilium CNI dùng eBPF thay thế kube-proxy, enable
  Hubble observability, cấu hình NetworkPolicy L3/L4/L7,
  và verify pod-to-pod networking hoạt động đúng.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 'Phần 2: Kubernetes HA Cluster với kubeadm'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<p>Sau khi hoàn thành bài học này, bạn sẽ:</p>
<ul>
<li>✅ Hiểu eBPF và tại sao Cilium vượt trội so với CNI truyền thống</li>
<li>✅ Cài đặt Cilium với Helm và verify connectivity</li>
<li>✅ Thay thế kube-proxy bằng Cilium eBPF</li>
<li>✅ Enable Hubble cho network observability</li>
<li>✅ Viết NetworkPolicy L3/L4/L7</li>
</ul>

<hr>

<h2 id="phan-1-tai-sao-cilium">PHẦN 1: TẠI SAO CHỌN CILIUM?</h2>

<h3 id="11-so-sanh-cni">1.1. So sánh các CNI phổ biến</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Tiêu chí</th>
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
<td>❌ Không hỗ trợ</td>
<td>L3/L4/L7</td>
</tr>
<tr>
<td>Performance</td>
<td>Tốt</td>
<td>Trung bình</td>
<td>Xuất sắc</td>
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

<h3 id="12-ebpf-la-gi">1.2. eBPF là gì?</h3>
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

<h2 id="phan-2-cai-dat-cilium">PHẦN 2: CÀI ĐẶT CILIUM</h2>

<h3 id="21-cai-helm">2.1. Cài Helm</h3>
<pre><code class="language-bash"># Trên master1 (hoặc bastion host):
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# Verify:
helm version
# version.BuildInfo{Version:"v3.16.x", ...}
</code></pre>

<h3 id="22-xoa-kube-proxy">2.2. Xóa kube-proxy (optional — thay thế bằng Cilium)</h3>
<pre><code class="language-bash"># Option 1: Xóa kube-proxy hoàn toàn (recommended):
kubectl -n kube-system delete ds kube-proxy
kubectl -n kube-system delete cm kube-proxy

# Xóa iptables rules của kube-proxy trên MỖI node:
# (SSH vào từng node hoặc dùng script)
iptables-save | grep -v KUBE | iptables-restore

# Option 2: Giữ kube-proxy (Cilium sẽ chạy alongside)
# → Không cần xóa, nhưng sẽ có overhead
</code></pre>

<h3 id="23-cai-cilium-bang-helm">2.3. Cài Cilium bằng Helm</h3>
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

<h3 id="24-giai-thich-tham-so">2.4. Giải thích tham số quan trọng</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Tham số</th>
<th>Giá trị</th>
<th>Ý nghĩa</th>
</tr>
</thead>
<tbody>
<tr>
<td>kubeProxyReplacement</td>
<td>true</td>
<td>Cilium thay thế hoàn toàn kube-proxy</td>
</tr>
<tr>
<td>k8sServiceHost</td>
<td>10.10.20.100</td>
<td>VIP (HAProxy) để Cilium kết nối API server</td>
</tr>
<tr>
<td>ipam.mode</td>
<td>kubernetes</td>
<td>Dùng K8s IPAM (phù hợp cho on-prem)</td>
</tr>
<tr>
<td>hubble.relay.enabled</td>
<td>true</td>
<td>Enable Hubble Relay cho flow aggregation</td>
</tr>
<tr>
<td>hubble.ui.enabled</td>
<td>true</td>
<td>Enable Hubble UI (web dashboard)</td>
</tr>
<tr>
<td>operator.replicas</td>
<td>2</td>
<td>HA cho Cilium Operator</td>
</tr>
<tr>
<td>bpf.masquerade</td>
<td>true</td>
<td>eBPF masquerading thay thế iptables SNAT</td>
</tr>
<tr>
<td>loadBalancer.algorithm</td>
<td>maglev</td>
<td>Consistent hashing cho ít disruption khi scale</td>
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

<h2 id="phan-3-cilium-cli">PHẦN 3: CILIUM CLI — CONNECTIVITY TEST</h2>

<h3 id="31-cai-cilium-cli">3.1. Cài Cilium CLI</h3>
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

<h2 id="phan-4-hubble-observability">PHẦN 4: HUBBLE OBSERVABILITY</h2>

<h3 id="41-cai-hubble-cli">4.1. Cài Hubble CLI</h3>
<pre><code class="language-bash"># Download Hubble CLI:
HUBBLE_VERSION=$(curl -s https://raw.githubusercontent.com/cilium/hubble/master/stable.txt)
curl -L --fail --remote-name-all \
  https://github.com/cilium/hubble/releases/download/${HUBBLE_VERSION}/hubble-linux-amd64.tar.gz
tar xzvf hubble-linux-amd64.tar.gz -C /usr/local/bin
rm hubble-linux-amd64.tar.gz
</code></pre>

<h3 id="42-xem-network-flows">4.2. Xem Network Flows</h3>
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

<h2 id="phan-5-network-policy">PHẦN 5: NETWORK POLICY VỚI CILIUM</h2>

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

<h2 id="phan-6-troubleshooting">PHẦN 6: TROUBLESHOOTING</h2>

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
</code></pre>

<h3 id="62-cleanup-test">6.2. Cleanup test resources</h3>
<pre><code class="language-bash">kubectl delete namespace policy-demo
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Cilium eBPF</strong> vượt trội: O(1) lookup, thay thế kube-proxy, L7 policy</li>
<li><strong>kubeProxyReplacement=true</strong>: Cilium handle hết services, không cần kube-proxy</li>
<li><strong>Hubble</strong> cho deep observability — xem flow, DNS queries, HTTP requests</li>
<li><strong>NetworkPolicy</strong>: Default deny + whitelist là best practice</li>
<li><strong>CiliumNetworkPolicy</strong> extend K8s NetworkPolicy thêm L7 rules (HTTP, gRPC, Kafka)</li>
<li><strong>cilium connectivity test</strong>: Chạy 46 tests tự động verify networking</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Cài đặt Cilium</h3>
<ul>
<li>Cài Helm, install Cilium với kubeProxyReplacement</li>
<li>Verify tất cả nodes Ready</li>
<li>Chạy cilium status và cilium connectivity test</li>
</ul>

<h3 id="bt2">Bài tập 2: NetworkPolicy Lab</h3>
<ul>
<li>Tạo namespace và deploy 3 pods (frontend, backend, database)</li>
<li>Apply default-deny-all</li>
<li>Tạo policies: frontend→backend (HTTP GET), backend→database (TCP 5432)</li>
<li>Verify chỉ traffic được cho phép mới hoạt động</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 9: MetalLB — LoadBalancer cho On-Premises</strong>, chúng ta sẽ cài MetalLB để expose services ra ngoài cluster với type LoadBalancer.</p>
