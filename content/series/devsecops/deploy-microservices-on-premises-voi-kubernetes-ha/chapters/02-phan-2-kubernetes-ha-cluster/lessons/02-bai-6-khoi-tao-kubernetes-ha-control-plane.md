---
id: 019e1a00-aa01-7001-c001-k8sha000202
title: 'BÀI 6: KHỞI TẠO KUBERNETES HA CONTROL PLANE ĐẦU TIÊN'
slug: bai-6-khoi-tao-kubernetes-ha-control-plane
description: >-
  Tạo kubeadm-config.yaml cho HA topology, chạy kubeadm init trên
  master1 với control-plane-endpoint là VIP, xử lý certificates,
  copy kubeconfig và kiểm tra trạng thái cluster đầu tiên.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: 'Phần 2: Kubernetes HA Cluster với kubeadm'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<p>Sau khi hoàn thành bài học này, bạn sẽ:</p>
<ul>
<li>✅ Tạo kubeadm configuration file cho HA topology</li>
<li>✅ Khởi tạo control plane đầu tiên thành công</li>
<li>✅ Hiểu certificate structure và certificate rotation</li>
<li>✅ Copy kubeconfig và truy cập cluster bằng kubectl</li>
<li>✅ Hiểu stacked etcd topology vs external etcd</li>
</ul>

<hr>

<h2 id="phan-1-ha-topologies">PHẦN 1: KUBERNETES HA TOPOLOGIES</h2>

<h3 id="11-stacked-etcd-vs-external-etcd">1.1. Stacked etcd vs External etcd</h3>

**Option A: Stacked etcd** (Recommended cho hầu hết cases)

```mermaid
graph LR
    subgraph M1["🖥️ master1"]
        A1["API Server<br/>Scheduler<br/>Controller"]
        E1["etcd"]
        A1 --- E1
    end

    subgraph M2["🖥️ master2"]
        A2["API Server<br/>Scheduler<br/>Controller"]
        E2["etcd"]
        A2 --- E2
    end

    subgraph M3["🖥️ master3"]
        A3["API Server<br/>Scheduler<br/>Controller"]
        E3["etcd"]
        A3 --- E3
    end

    E1 <-->|"Raft"| E2
    E2 <-->|"Raft"| E3

    style M1 fill:#0f172a,stroke:#3b82f6,color:#e2e8f0
    style M2 fill:#0f172a,stroke:#3b82f6,color:#e2e8f0
    style M3 fill:#0f172a,stroke:#3b82f6,color:#e2e8f0
    style E1 fill:#15803d,stroke:#22c55e,color:#e2e8f0
    style E2 fill:#15803d,stroke:#22c55e,color:#e2e8f0
    style E3 fill:#15803d,stroke:#22c55e,color:#e2e8f0
```

> ✅ Ít servers · ✅ Đơn giản · ❌ etcd + API coupled

**Option B: External etcd**

```mermaid
graph TD
    subgraph MASTERS["Control Plane — 3 masters"]
        MA["API Server<br/>Scheduler<br/>Controller"]
        MB["API Server<br/>Scheduler<br/>Controller"]
        MC["API Server<br/>Scheduler<br/>Controller"]
    end

    subgraph ETCDS["etcd Cluster — 3 dedicated nodes"]
        EA["etcd"]
        EB["etcd"]
        EC["etcd"]
        EA <-->|"Raft"| EB
        EB <-->|"Raft"| EC
    end

    MA --> EA
    MB --> EB
    MC --> EC

    style MASTERS fill:#0f172a,stroke:#3b82f6,color:#e2e8f0
    style ETCDS fill:#1e293b,stroke:#15803d,color:#e2e8f0
    style EA fill:#15803d,stroke:#22c55e,color:#e2e8f0
    style EB fill:#15803d,stroke:#22c55e,color:#e2e8f0
    style EC fill:#15803d,stroke:#22c55e,color:#e2e8f0
```

> ✅ Isolation · ✅ Independent scaling · ❌ Cần 6 servers

<p>👉 <strong>Chọn Stacked etcd</strong> cho khóa học này — đơn giản, đủ tốt cho hầu hết production workloads. External etcd chỉ cần cho clusters rất lớn (100+ nodes).</p>

<hr>

<h2 id="phan-2-kubeadm-config">PHẦN 2: TẠO KUBEADM CONFIGURATION</h2>

<h3 id="21-kubeadm-config-yaml">2.1. kubeadm-config.yaml chi tiết</h3>
<pre><code class="language-bash"># Trên master1, tạo config file:
cat > /root/kubeadm-config.yaml << 'EOF'
---
apiVersion: kubeadm.k8s.io/v1beta4
kind: InitConfiguration
localAPIEndpoint:
  advertiseAddress: "10.10.20.11"     # IP của master1 trên cluster network
  bindPort: 6443
nodeRegistration:
  name: master1
  criSocket: unix:///run/containerd/containerd.sock
  taints:
    - key: "node-role.kubernetes.io/control-plane"
      effect: "NoSchedule"

---
apiVersion: kubeadm.k8s.io/v1beta4
kind: ClusterConfiguration
kubernetesVersion: "v1.31.0"          # Exact version
clusterName: "production"
controlPlaneEndpoint: "10.10.20.100:6443"   # ← VIP (HAProxy)!
certificatesDir: /etc/kubernetes/pki

networking:
  podSubnet: "10.244.0.0/16"         # Pod CIDR (cho Cilium)
  serviceSubnet: "10.96.0.0/12"      # Service CIDR
  dnsDomain: "cluster.local"

etcd:
  local:
    dataDir: /var/lib/etcd
    extraArgs:
      listen-metrics-urls: "http://0.0.0.0:2381"    # Prometheus metrics

apiServer:
  extraArgs:
    authorization-mode: "Node,RBAC"
    enable-admission-plugins: "NodeRestriction,PodSecurity"
    audit-log-path: "/var/log/kubernetes/audit.log"
    audit-log-maxage: "30"
    audit-log-maxbackup: "10"
    audit-log-maxsize: "100"
    event-ttl: "4h"
    # Encryption at rest (thêm sau khi tạo encryption config)
    # encryption-provider-config: "/etc/kubernetes/encryption-config.yaml"
  extraVolumes:
    - name: audit-log
      hostPath: /var/log/kubernetes
      mountPath: /var/log/kubernetes
      pathType: DirectoryOrCreate

controllerManager:
  extraArgs:
    bind-address: "0.0.0.0"          # Cho Prometheus scrape
    terminated-pod-gc-threshold: "100"

scheduler:
  extraArgs:
    bind-address: "0.0.0.0"          # Cho Prometheus scrape

---
apiVersion: kubelet.config.k8s.io/v1beta1
kind: KubeletConfiguration
cgroupDriver: systemd                 # Match containerd SystemdCgroup
containerRuntimeEndpoint: unix:///run/containerd/containerd.sock
evictionHard:
  memory.available: "500Mi"
  nodefs.available: "10%"
  imagefs.available: "15%"
systemReserved:
  cpu: "500m"
  memory: "1Gi"
kubeReserved:
  cpu: "500m"
  memory: "1Gi"
maxPods: 110                          # Default 110, tăng nếu cần
serializeImagePulls: false            # Parallel image pulls

---
apiVersion: kubeproxy.config.k8s.io/v1alpha1
kind: KubeProxyConfiguration
mode: "ipvs"                          # IPVS mode (better than iptables)
ipvs:
  strictARP: true                     # Required cho MetalLB
  scheduler: "rr"                     # Round-robin
EOF
</code></pre>

<h3 id="22-giai-thich-cac-tham-so-quan-trong">2.2. Giải thích các tham số quan trọng</h3>

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
<td>controlPlaneEndpoint</td>
<td>10.10.20.100:6443</td>
<td>VIP của HAProxy — TẤT CẢ components kết nối qua đây</td>
</tr>
<tr>
<td>podSubnet</td>
<td>10.244.0.0/16</td>
<td>CIDR cho pod IPs (65,534 pods max)</td>
</tr>
<tr>
<td>serviceSubnet</td>
<td>10.96.0.0/12</td>
<td>CIDR cho ClusterIP services (1,048,574 IPs)</td>
</tr>
<tr>
<td>mode: ipvs</td>
<td>kube-proxy</td>
<td>IPVS load balancing (better than iptables khi nhiều services)</td>
</tr>
<tr>
<td>strictARP: true</td>
<td>kube-proxy</td>
<td>Required cho MetalLB L2 mode</td>
</tr>
<tr>
<td>cgroupDriver: systemd</td>
<td>kubelet</td>
<td>Match containerd SystemdCgroup = true</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>⚠️ <strong>CRITICAL:</strong> <code>controlPlaneEndpoint</code> PHẢI trỏ tới VIP (HAProxy), KHÔNG phải IP của master1. Đây là yếu tố then chốt cho HA.</p>

<hr>

<h2 id="phan-3-kubeadm-init">PHẦN 3: KHỞI TẠO CLUSTER</h2>

<h3 id="31-tao-audit-log-directory">3.1. Tạo audit log directory</h3>
<pre><code class="language-bash"># Trên master1:
mkdir -p /var/log/kubernetes
</code></pre>

<h3 id="32-chay-kubeadm-init">3.2. Chạy kubeadm init</h3>
<pre><code class="language-bash"># Trên master1:
kubeadm init --config /root/kubeadm-config.yaml --upload-certs

# Output (giữ lại CẨN THẬN):
# ────────────────────────────────────────────────────────────
# Your Kubernetes control-plane has initialized successfully!
#
# To start using your cluster, you need to run the following as a regular user:
#   mkdir -p $HOME/.kube
#   sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
#   sudo chown $(id -u):$(id -g) $HOME/.kube/config
#
# You can now join any number of control-plane node by running:
#   kubeadm join 10.10.20.100:6443 --token abcdef.0123456789abcdef \
#     --discovery-token-ca-cert-hash sha256:... \
#     --control-plane --certificate-key &lt;CERTIFICATE_KEY&gt;
#
# Then you can join any number of worker nodes by running:
#   kubeadm join 10.10.20.100:6443 --token abcdef.0123456789abcdef \
#     --discovery-token-ca-cert-hash sha256:...
# ────────────────────────────────────────────────────────────
</code></pre>

<p>⚠️ <strong>GHI LẠI ngay lập tức:</strong></p>
<ul>
<li><code>--token</code>: Dùng cho join nodes (hết hạn sau 24h)</li>
<li><code>--discovery-token-ca-cert-hash</code>: SHA256 hash của CA cert</li>
<li><code>--certificate-key</code>: Dùng cho join control-plane nodes (hết hạn sau 2h)</li>
</ul>

<h3 id="33-setup-kubeconfig">3.3. Setup kubeconfig</h3>
<pre><code class="language-bash"># Trên master1:
mkdir -p $HOME/.kube
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config

# Verify cluster
kubectl get nodes
# Output:
# NAME      STATUS     ROLES           AGE   VERSION
# master1   NotReady   control-plane   30s   v1.31.0
# ← NotReady vì chưa cài CNI (Cilium sẽ fix ở Bài 8)

# Kiểm tra tất cả system pods
kubectl get pods -n kube-system
# Output:
# NAME                              READY   STATUS    RESTARTS   AGE
# coredns-xxx-xxx                   0/1     Pending   0          30s  ← Pending vì chưa có CNI
# coredns-xxx-xxx                   0/1     Pending   0          30s
# etcd-master1                      1/1     Running   0          35s
# kube-apiserver-master1            1/1     Running   0          35s
# kube-controller-manager-master1   1/1     Running   0          35s
# kube-scheduler-master1            1/1     Running   0          35s

# Kiểm tra etcd health
kubectl -n kube-system exec etcd-master1 -- etcdctl \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  endpoint health
# Output: https://127.0.0.1:2379 is healthy: successfully committed proposal
</code></pre>

<hr>

<h2 id="phan-4-certificates-deep-dive">PHẦN 4: CERTIFICATE STRUCTURE</h2>

<h3 id="41-kien-truc-certificates">4.1. Kiến trúc Certificates</h3>
<pre><code>
/etc/kubernetes/pki/
├── ca.crt                  ─── Kubernetes CA (root cert)
├── ca.key                  ─── CA private key (PROTECT!)
├── apiserver.crt           ─── API Server cert
├── apiserver.key
├── apiserver-kubelet-client.crt
├── apiserver-kubelet-client.key
├── apiserver-etcd-client.crt
├── apiserver-etcd-client.key
├── front-proxy-ca.crt      ─── Front Proxy CA
├── front-proxy-ca.key
├── front-proxy-client.crt
├── front-proxy-client.key
├── sa.pub                  ─── Service Account public key
├── sa.key                  ─── Service Account private key
└── etcd/
    ├── ca.crt              ─── etcd CA
    ├── ca.key
    ├── server.crt          ─── etcd server cert
    ├── server.key
    ├── peer.crt            ─── etcd peer cert
    ├── peer.key
    ├── healthcheck-client.crt
    └── healthcheck-client.key
</code></pre>

<h3 id="42-kiem-tra-certificate-expiry">4.2. Kiểm tra Certificate Expiry</h3>
<pre><code class="language-bash"># Xem tất cả cert expiry:
kubeadm certs check-expiration
# Output:
# CERTIFICATE                EXPIRES                  RESIDUAL TIME
# admin.conf                 Apr 02, 2027 07:00 UTC   364d
# apiserver                  Apr 02, 2027 07:00 UTC   364d
# apiserver-etcd-client      Apr 02, 2027 07:00 UTC   364d
# ...
# ca                         Mar 30, 2036 07:00 UTC   9y   ← CA valid 10 years
# etcd-ca                    Mar 30, 2036 07:00 UTC   9y

# ⚠️ Certificates mặc định valid 1 NĂM (trừ CA: 10 năm)
# Phải renew trước khi expire!

# Renew tất cả certs:
# kubeadm certs renew all
# (Sẽ học chi tiết ở Bài 46: Nâng cấp Cluster)
</code></pre>

<hr>

<h2 id="phan-5-verify-ha-readiness">PHẦN 5: VERIFY HA READINESS</h2>

<h3 id="51-kiem-tra-api-server-qua-vip">5.1. Kiểm tra API Server qua VIP</h3>
<pre><code class="language-bash"># Verify API server accessible qua VIP (HAProxy):
curl -sk https://10.10.20.100:6443/healthz
# Output: ok

# Kiểm tra HAProxy backend status:
curl -s http://lb1:9000/stats\;csv | grep k8s-api
# master1 → UP, master2 → DOWN, master3 → DOWN (chưa join)

# API server accessible trực tiếp:
curl -sk https://10.10.20.11:6443/healthz
# Output: ok
</code></pre>

<h3 id="52-luu-join-commands">5.2. Lưu join commands (quan trọng!)</h3>
<pre><code class="language-bash"># Lưu join commands vào file:
cat > /root/join-commands.sh << 'CMDS'
# === Join Control Plane nodes (master2, master3) ===
# Certificate key expires in 2 HOURS!
kubeadm join 10.10.20.100:6443 \
  --token &lt;TOKEN&gt; \
  --discovery-token-ca-cert-hash sha256:&lt;HASH&gt; \
  --control-plane \
  --certificate-key &lt;CERT_KEY&gt;

# === Join Worker nodes ===
kubeadm join 10.10.20.100:6443 \
  --token &lt;TOKEN&gt; \
  --discovery-token-ca-cert-hash sha256:&lt;HASH&gt;
CMDS

# Nếu token hết hạn, tạo mới:
kubeadm token create --print-join-command
# Output: kubeadm join 10.10.20.100:6443 --token NEW_TOKEN --discovery-token-ca-cert-hash sha256:HASH

# Nếu certificate-key hết hạn, upload certs lại:
kubeadm init phase upload-certs --upload-certs
# Output: Using certificate key: NEW_CERTIFICATE_KEY
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>controlPlaneEndpoint</strong> phải trỏ tới VIP (HAProxy), không phải IP cụ thể</li>
<li><strong>Stacked etcd</strong> đủ tốt cho hầu hết deployments, etcd chạy cùng control plane</li>
<li><strong>--upload-certs</strong> flag tự động distribute certificates cho join control-plane</li>
<li><strong>Token hết hạn 24h</strong>, certificate-key hết hạn 2h — phải lưu và join nodes sớm</li>
<li><strong>ipvs mode + strictARP</strong> cho kube-proxy là requirement cho MetalLB</li>
<li><strong>Node status NotReady</strong> là bình thường trước khi cài CNI (Cilium)</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Init control plane</h3>
<ul>
<li>Tạo kubeadm-config.yaml trên master1</li>
<li>Chạy kubeadm init --config --upload-certs</li>
<li>Setup kubeconfig, verify kubectl get nodes</li>
<li>GHI LẠI join commands</li>
</ul>

<h3 id="bt2">Bài tập 2: Verify certificates</h3>
<ul>
<li>List tất cả certificates trong /etc/kubernetes/pki/</li>
<li>Chạy kubeadm certs check-expiration</li>
<li>Verify API server qua VIP: curl -sk https://VIP:6443/healthz</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 7: Join thêm Control Plane và Worker Nodes</strong>, chúng ta sẽ join master2, master3 vào control plane HA và join worker nodes vào cluster.</p>
