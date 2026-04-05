---
id: 019e1a00-aa01-7001-c001-k8sha000203
title: 'BÀI 7: JOIN THÊM CONTROL PLANE VÀ WORKER NODES'
slug: bai-7-join-them-control-plane-va-worker-nodes
description: >-
  Join master2 và master3 vào HA control plane, join worker nodes,
  verify etcd cluster với 3 members, kiểm tra leader election
  và cluster readiness.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: 'Phần 2: Kubernetes HA Cluster với kubeadm'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2466" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2466)"/>

  <!-- Decorations -->
  <g>
    <circle cx="816" cy="198" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1032" cy="254" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="748" cy="50" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="964" cy="106" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="680" cy="162" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="118" x2="1100" y2="198" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="148" x2="1050" y2="218" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="946.5788383248864,101.5 946.5788383248864,134.5 918,151 889.4211616751136,134.5 889.4211616751135,101.50000000000001 918,85" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — Bài 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 7: JOIN THÊM CONTROL PLANE VÀ WORKER</tspan>
      <tspan x="60" dy="42">NODES</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Kubernetes HA Cluster với kubeadm</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<p>Sau khi hoàn thành bài học này, bạn sẽ:</p>
<ul>
<li>✅ Join thêm 2 control plane nodes tạo thành HA cluster 3 masters</li>
<li>✅ Join worker nodes vào cluster</li>
<li>✅ Verify etcd cluster 3 members hoạt động đúng</li>
<li>✅ Kiểm tra leader election cho scheduler và controller-manager</li>
<li>✅ Label và taint nodes theo đúng vai trò</li>
</ul>

<hr>

<h2 id="phan-1-join-control-plane">PHẦN 1: JOIN CONTROL PLANE NODES</h2>

<h3 id="11-chuan-bi-tren-master2-master3">1.1. Chuẩn bị trên master2 và master3</h3>
<p>Đảm bảo master2 và master3 đã hoàn thành:</p>
<ul>
<li>✅ OS tuning (Bài 3)</li>
<li>✅ containerd + kubeadm cài đặt (Bài 5)</li>
<li>✅ Có thể kết nối tới VIP 10.10.20.100:6443</li>
</ul>

<pre><code class="language-bash"># Trên master2 và master3, verify connectivity:
nc -zv 10.10.20.100 6443
# Connection to 10.10.20.100 6443 port [tcp/*] succeeded!

# Verify containerd running:
systemctl status containerd
# ● containerd.service - containerd container runtime
#    Active: active (running)
</code></pre>

<h3 id="12-join-master2">1.2. Join master2 vào Control Plane</h3>
<pre><code class="language-bash"># Trên master2:
# Tạo audit log directory trước:
mkdir -p /var/log/kubernetes

# Join command (thay &lt;TOKEN&gt;, &lt;HASH&gt;, &lt;CERT_KEY&gt; từ output Bài 6):
kubeadm join 10.10.20.100:6443 \
  --token &lt;TOKEN&gt; \
  --discovery-token-ca-cert-hash sha256:&lt;HASH&gt; \
  --control-plane \
  --certificate-key &lt;CERT_KEY&gt; \
  --apiserver-advertise-address 10.10.20.12

# Output:
# [preflight] Running pre-flight checks
# [preflight] Reading configuration from the cluster...
# [download-certs] Downloading the certificates in Secret "kubeadm-certs"
# [certs] Using certificateDir folder "/etc/kubernetes/pki"
# [certs] Generating "apiserver" certificate and key
# ...
# [mark-control-plane] Marking the node master2 as control-plane
#
# This node has joined the cluster and a new control plane instance was created.
# Run 'kubectl get nodes' on any control-plane node to see this node join.
</code></pre>

<p>⚠️ <strong>--apiserver-advertise-address</strong>: Mỗi master dùng IP riêng của mình trên cluster network.</p>

<h3 id="13-join-master3">1.3. Join master3 vào Control Plane</h3>
<pre><code class="language-bash"># Trên master3:
mkdir -p /var/log/kubernetes

kubeadm join 10.10.20.100:6443 \
  --token &lt;TOKEN&gt; \
  --discovery-token-ca-cert-hash sha256:&lt;HASH&gt; \
  --control-plane \
  --certificate-key &lt;CERT_KEY&gt; \
  --apiserver-advertise-address 10.10.20.13
</code></pre>

<h3 id="14-setup-kubeconfig-tren-master2-master3">1.4. Setup kubeconfig trên master2 & master3</h3>
<pre><code class="language-bash"># Trên mỗi master node (master2 và master3):
mkdir -p $HOME/.kube
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config

# Verify nodes:
kubectl get nodes
# NAME      STATUS     ROLES           AGE     VERSION
# master1   NotReady   control-plane   10m     v1.31.0
# master2   NotReady   control-plane   3m      v1.31.0
# master3   NotReady   control-plane   1m      v1.31.0
</code></pre>

<hr>

<h2 id="phan-2-token-het-han">PHẦN 2: XỬ LÝ TOKEN HẾT HẠN</h2>

<h3 id="21-tao-token-moi">2.1. Tạo token mới (nếu token hết hạn)</h3>
<pre><code class="language-bash"># Token hết hạn sau 24 giờ. Tạo mới:
kubeadm token create --print-join-command
# Output:
# kubeadm join 10.10.20.100:6443 --token NEW_TOKEN --discovery-token-ca-cert-hash sha256:HASH

# Certificate-key hết hạn sau 2 giờ. Upload lại:
kubeadm init phase upload-certs --upload-certs
# Output:
# [upload-certs] Using certificate key: NEW_CERT_KEY

# Kết hợp lại để join control-plane:
# kubeadm join 10.10.20.100:6443 \
#   --token NEW_TOKEN \
#   --discovery-token-ca-cert-hash sha256:HASH \
#   --control-plane \
#   --certificate-key NEW_CERT_KEY
</code></pre>

<hr>

<h2 id="phan-3-join-worker-nodes">PHẦN 3: JOIN WORKER NODES</h2>

<h3 id="31-join-workers">3.1. Join worker1, worker2, worker3</h3>
<pre><code class="language-bash"># Trên MỖI worker node (worker1, worker2, worker3):
kubeadm join 10.10.20.100:6443 \
  --token &lt;TOKEN&gt; \
  --discovery-token-ca-cert-hash sha256:&lt;HASH&gt;

# Output:
# [preflight] Running pre-flight checks
# [preflight] Reading configuration from the cluster...
# [kubelet-start] Starting the kubelet
# [kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap
#
# This node has joined the cluster:
# * Certificate signing request was sent to apiserver and a response was received.
# * The Kubelet was informed of the new secure connection details.
</code></pre>

<h3 id="32-verify-all-nodes">3.2. Verify tất cả nodes</h3>
<pre><code class="language-bash"># Trên bất kỳ master nào:
kubectl get nodes -o wide
# NAME      STATUS     ROLES           AGE   VERSION    INTERNAL-IP    OS-IMAGE
# master1   NotReady   control-plane   30m   v1.31.0    10.10.20.11    Ubuntu 24.04 LTS
# master2   NotReady   control-plane   20m   v1.31.0    10.10.20.12    Ubuntu 24.04 LTS
# master3   NotReady   control-plane   18m   v1.31.0    10.10.20.13    Ubuntu 24.04 LTS
# worker1   NotReady   &lt;none&gt;          5m    v1.31.0    10.10.20.21    Ubuntu 24.04 LTS
# worker2   NotReady   &lt;none&gt;          4m    v1.31.0    10.10.20.22    Ubuntu 24.04 LTS
# worker3   NotReady   &lt;none&gt;          3m    v1.31.0    10.10.20.23    Ubuntu 24.04 LTS
# ← Status = NotReady vì chưa cài CNI (Bài 8: Cilium)
</code></pre>

<hr>

<h2 id="phan-4-verify-etcd-cluster">PHẦN 4: VERIFY ETCD CLUSTER</h2>

<h3 id="41-etcd-member-list">4.1. etcd member list</h3>
<pre><code class="language-bash"># Kiểm tra etcd cluster membership:
kubectl -n kube-system exec etcd-master1 -- etcdctl \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  member list -w table

# Output:
# +------------------+---------+---------+----------------------------+----------------------------+
# |       ID         | STATUS  |  NAME   |        PEER ADDRS          |       CLIENT ADDRS         |
# +------------------+---------+---------+----------------------------+----------------------------+
# | 1a2b3c4d5e6f7890 | started | master1 | https://10.10.20.11:2380  | https://10.10.20.11:2379  |
# | 2b3c4d5e6f789012 | started | master2 | https://10.10.20.12:2380  | https://10.10.20.12:2379  |
# | 3c4d5e6f78901234 | started | master3 | https://10.10.20.13:2380  | https://10.10.20.13:2379  |
# +------------------+---------+---------+----------------------------+----------------------------+
</code></pre>

<h3 id="42-etcd-endpoint-health">4.2. etcd endpoint health</h3>
<pre><code class="language-bash"># Health check tất cả endpoints:
kubectl -n kube-system exec etcd-master1 -- etcdctl \
  --endpoints=https://10.10.20.11:2379,https://10.10.20.12:2379,https://10.10.20.13:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  endpoint health -w table

# Output:
# +----------------------------+--------+-------------+-------+
# |          ENDPOINT          | HEALTH |    TOOK      | ERROR |
# +----------------------------+--------+-------------+-------+
# | https://10.10.20.11:2379   | true   | 10.123456ms |       |
# | https://10.10.20.12:2379   | true   | 12.345678ms |       |
# | https://10.10.20.13:2379   | true   | 11.234567ms |       |
# +----------------------------+--------+-------------+-------+
</code></pre>

<h3 id="43-etcd-endpoint-status">4.3. etcd endpoint status (leader check)</h3>
<pre><code class="language-bash"># Check leader:
kubectl -n kube-system exec etcd-master1 -- etcdctl \
  --endpoints=https://10.10.20.11:2379,https://10.10.20.12:2379,https://10.10.20.13:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  endpoint status -w table

# Output:
# +----------------------------+------------------+---------+---------+-----------+...+--------+
# |          ENDPOINT          |        ID        | VERSION | DB SIZE | IS LEADER |...| ERRORS |
# +----------------------------+------------------+---------+---------+-----------+...+--------+
# | https://10.10.20.11:2379   | 1a2b3c4d5e6f7890 |  3.5.15 |  3.3 MB |      true |...|        |
# | https://10.10.20.12:2379   | 2b3c4d5e6f789012 |  3.5.15 |  3.3 MB |     false |...|        |
# | https://10.10.20.13:2379   | 3c4d5e6f78901234 |  3.5.15 |  3.3 MB |     false |...|        |
# +----------------------------+------------------+---------+---------+-----------+...+--------+
</code></pre>

<hr>

<h2 id="phan-5-leader-election">PHẦN 5: LEADER ELECTION VERIFICATION</h2>

<h3 id="51-check-controller-manager-leader">5.1. Check Controller Manager leader</h3>
<pre><code class="language-bash"># Controller Manager sử dụng Lease để bầu leader:
kubectl -n kube-system get lease kube-controller-manager -o yaml
# holderIdentity: master1_xxxxx  ← master1 là leader hiện tại
# leaseDurationSeconds: 15
# renewTime: "2025-04-02T07:00:30Z"

# Scheduler leader:
kubectl -n kube-system get lease kube-scheduler -o yaml
# holderIdentity: master1_xxxxx  ← master1 là leader hiện tại
</code></pre>

<h3 id="52-test-ha-failover">5.2. Test HA Failover</h3>
<pre><code class="language-bash"># Test: Shutdown master1, verify cluster vẫn hoạt động
# ⚠️ Chỉ test trong lab!

# Trên master1:
systemctl stop kubelet

# Trên master2, kiểm tra:
kubectl get nodes
# master1 sẽ chuyển sang NotReady sau ~40 giây
# Controller Manager và Scheduler leader sẽ tự chuyển sang master2 hoặc master3

# Verify scheduler leader changed:
kubectl -n kube-system get lease kube-scheduler -o jsonpath='{.spec.holderIdentity}'
# master2_xxxxx hoặc master3_xxxxx

# Khôi phục master1:
systemctl start kubelet
# master1 sẽ trở lại Ready sau vài giây
</code></pre>

<hr>

<h2 id="phan-6-label-va-taint-nodes">PHẦN 6: LABEL VÀ TAINT NODES</h2>

<h3 id="61-label-worker-nodes">6.1. Label worker nodes</h3>
<pre><code class="language-bash"># Gán role cho worker nodes (mặc định workers không có role label):
kubectl label node worker1 node-role.kubernetes.io/worker=""
kubectl label node worker2 node-role.kubernetes.io/worker=""
kubectl label node worker3 node-role.kubernetes.io/worker=""

# Gán labels cho topology:
kubectl label node worker1 topology.kubernetes.io/zone=rack-a
kubectl label node worker2 topology.kubernetes.io/zone=rack-b
kubectl label node worker3 topology.kubernetes.io/zone=rack-a

# Label cho Ceph storage nodes (nếu dùng):
kubectl label node worker1 storage-node=true
kubectl label node worker2 storage-node=true
kubectl label node worker3 storage-node=true

# Verify labels:
kubectl get nodes --show-labels
</code></pre>

<h3 id="62-kiem-tra-taints">6.2. Kiểm tra taints</h3>
<pre><code class="language-bash"># Control plane nodes mặc định có taint:
kubectl describe node master1 | grep -i taint
# Taints: node-role.kubernetes.io/control-plane:NoSchedule

# Worker nodes KHÔNG có taint:
kubectl describe node worker1 | grep -i taint
# Taints: &lt;none&gt;

# ⚠️ KHÔNG remove taint trên control-plane trong production
# Control plane nodes chỉ chạy system components
</code></pre>

<hr>

<h2 id="phan-7-haproxy-verify">PHẦN 7: VERIFY HAPROXY BACKENDS</h2>

<pre><code class="language-bash"># Kiểm tra HAProxy stats — giờ cả 3 masters đều UP:
curl -s http://lb1:9000/stats\;csv | grep apiserver
# k8s-api,master1,... UP ...
# k8s-api,master2,... UP ...
# k8s-api,master3,... UP ...

# Verify load balancing:
for i in {1..10}; do
  curl -sk https://10.10.20.100:6443/healthz
  echo
done
# Mỗi request được HAProxy phân phối tới 1 trong 3 masters
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Join control-plane</strong> cần thêm <code>--control-plane --certificate-key</code></li>
<li><strong>Token hết hạn 24h</strong>, certificate-key hết hạn 2h — tạo mới nếu cần</li>
<li><strong>etcd 3 members</strong> cho phép cluster chịu được 1 member down (quorum = 2)</li>
<li><strong>Leader election</strong> tự động: scheduler và controller-manager failover khi leader down</li>
<li><strong>Label và taint</strong> nodes đúng vai trò giúp scheduling chính xác</li>
<li><strong>NotReady status</strong> là bình thường — cần cài CNI (Bài 8) để chuyển Ready</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Join full cluster</h3>
<ul>
<li>Join master2 và master3 vào control plane</li>
<li>Join worker1, worker2, worker3</li>
<li>Verify kubectl get nodes hiện đủ 6 nodes</li>
</ul>

<h3 id="bt2">Bài tập 2: etcd Health Check</h3>
<ul>
<li>Chạy etcdctl member list, endpoint health, endpoint status</li>
<li>Xác định ai là etcd leader</li>
</ul>

<h3 id="bt3">Bài tập 3: HA Failover Test</h3>
<ul>
<li>Stop kubelet trên master1</li>
<li>Verify cluster vẫn hoạt động qua VIP</li>
<li>Verify leader election chuyển sang master khác</li>
<li>Start lại kubelet, verify master1 trở lại</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 8: Cài đặt Cilium CNI — eBPF Networking</strong>, chúng ta sẽ cài Cilium làm Container Network Interface, giải quyết status NotReady và enable NetworkPolicy.</p>
