---
id: 019e1a00-aa01-7001-c001-k8sha000201
title: 'BÀI 5: CÀI ĐẶT CONTAINERD VÀ KUBEADM TRÊN TẤT CẢ NODES'
slug: bai-5-cai-dat-containerd-va-kubeadm
description: >-
  Cài đặt containerd 2.x với cri plugin, crictl, kubeadm, kubelet,
  kubectl phiên bản mới nhất. Cấu hình containerd để dùng systemd
  cgroup driver, kéo sandbox image và kiểm tra trước khi init cluster.
duration_minutes: 100
is_free: true
video_url: null
sort_order: 5
section_title: 'Phần 2: Kubernetes HA Cluster với kubeadm'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<p>Sau khi hoàn thành bài học này, bạn sẽ:</p>
<ul>
<li>✅ Cài đặt containerd container runtime với CRI plugin</li>
<li>✅ Cấu hình containerd sử dụng systemd cgroup driver</li>
<li>✅ Cài đặt kubeadm, kubelet, kubectl từ official repository</li>
<li>✅ Cài đặt crictl cho container debugging</li>
<li>✅ Pre-pull sandbox images và verify mọi thứ sẵn sàng</li>
</ul>

<hr>

<h2 id="phan-1-container-runtime">PHẦN 1: CONTAINER RUNTIME — TẠI SAO CONTAINERD?</h2>

<h3 id="11-lich-su-container-runtime">1.1. Lịch sử Container Runtime trong K8s</h3>
<pre><code>
Timeline:
  2014-2020: Docker → dockershim → containerd (K8s dùng Docker runtime)
  2020:      K8s 1.20 deprecate dockershim
  2022:      K8s 1.24 remove dockershim hoàn toàn
  2024+:     containerd hoặc CRI-O là standard

Container Runtime Interface (CRI):
  kubelet ─── CRI ──→ containerd ──→ runc ──→ Container
                 │
                 └──→ CRI-O ──→ runc ──→ Container
</code></pre>

<h3 id="12-containerd-vs-cri-o">1.2. containerd vs CRI-O</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Tiêu chí</th>
<th>containerd</th>
<th>CRI-O</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Maintainer</strong></td>
<td>CNCF (Docker/Moby origin)</td>
<td>CNCF (Red Hat origin)</td>
</tr>
<tr>
<td><strong>Adoption</strong></td>
<td>Rất rộng (EKS, GKE, AKS mặc định)</td>
<td>OpenShift, RHEL focused</td>
</tr>
<tr>
<td><strong>Features</strong></td>
<td>Multi-purpose (docker CLI compatible)</td>
<td>K8s-only (lightweight)</td>
</tr>
<tr>
<td><strong>Image build</strong></td>
<td>Hỗ trợ qua nerdctl/buildkit</td>
<td>Không (cần podman/buildah)</td>
</tr>
<tr>
<td><strong>Stability</strong></td>
<td>Rất ổn định</td>
<td>Ổn định</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>👉 <strong>Chọn containerd:</strong> Phổ biến nhất, tài liệu nhiều, compatible với mọi K8s distribution.</p>

<hr>

<h2 id="phan-2-cai-dat-containerd">PHẦN 2: CÀI ĐẶT CONTAINERD</h2>

<h3 id="21-cai-dat-tu-docker-repository">2.1. Cài đặt từ Docker Official Repository</h3>
<pre><code class="language-bash"># ============================================
# Chạy trên TẤT CẢ nodes (masters + workers + storage)
# ============================================

# 1. Thêm Docker GPG key và repository
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
  gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  tee /etc/apt/sources.list.d/docker.list > /dev/null

# 2. Cài đặt containerd
apt update
apt install -y containerd.io

# 3. Verify
containerd --version
# Output: containerd containerd.io v2.0.x ...
</code></pre>

<h3 id="22-cau-hinh-containerd">2.2. Cấu hình containerd</h3>
<pre><code class="language-bash"># Tạo default config
mkdir -p /etc/containerd
containerd config default > /etc/containerd/config.toml

# Cấu hình quan trọng:
# 1. Enable SystemdCgroup (BẮT BUỘC cho K8s)
# 2. Set sandbox image đúng version

# Chỉnh sửa config.toml:
sed -i 's/SystemdCgroup = false/SystemdCgroup = true/' /etc/containerd/config.toml

# Verify sandbox image version (phải khớp với K8s version):
grep sandbox_image /etc/containerd/config.toml
# Output: sandbox_image = "registry.k8s.io/pause:3.10"
</code></pre>

<p>🔬 <strong>Deep Dive — Tại sao SystemdCgroup = true?</strong></p>
<pre><code>
cgroup driver quản lý resource limits cho containers.
Có 2 drivers: cgroupfs và systemd.

kubelet sử dụng systemd cgroup driver (mặc định từ K8s 1.22+).
containerd PHẢI dùng cùng driver → SystemdCgroup = true.

Nếu mismatch:
  kubelet (systemd) vs containerd (cgroupfs)
  → Pods bị OOMKilled bất thường
  → Resource accounting sai
  → kubelet restart liên tục
</code></pre>

<h3 id="23-cau-hinh-containerd-chi-tiet">2.3. Cấu hình containerd chi tiết (Optional Tuning)</h3>
<pre><code class="language-toml"># /etc/containerd/config.toml — Các section quan trọng:

# [plugins."io.containerd.grpc.v1.cri"]
#   sandbox_image = "registry.k8s.io/pause:3.10"
#   
#   [plugins."io.containerd.grpc.v1.cri".containerd]
#     default_runtime_name = "runc"
#     
#     [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
#       runtime_type = "io.containerd.runc.v2"
#       
#       [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
#         SystemdCgroup = true     # ← CRITICAL
#
#   [plugins."io.containerd.grpc.v1.cri".registry]
#     # Private registry mirrors (nếu cần)
#     [plugins."io.containerd.grpc.v1.cri".registry.mirrors]
#       [plugins."io.containerd.grpc.v1.cri".registry.mirrors."docker.io"]
#         endpoint = ["https://registry-1.docker.io"]
#       # Harbor internal registry:
#       # [plugins."io.containerd.grpc.v1.cri".registry.mirrors."harbor.internal.com"]
#       #   endpoint = ["https://harbor.internal.com"]
</code></pre>

<h3 id="24-restart-containerd">2.4. Restart và Verify containerd</h3>
<pre><code class="language-bash"># Restart containerd
systemctl restart containerd
systemctl enable containerd

# Verify containerd running
systemctl status containerd
# Output: Active: active (running)

# Test containerd CRI
crictl --runtime-endpoint unix:///run/containerd/containerd.sock info
# Output: JSON with runtime info
</code></pre>

<hr>

<h2 id="phan-3-cai-dat-crictl">PHẦN 3: CÀI ĐẶT CRICTL</h2>

<h3 id="31-crictl-la-gi">3.1. crictl là gì?</h3>
<p>crictl là CLI tool cho CRI-compatible container runtimes. Tương tự docker CLI nhưng cho CRI:</p>

<pre><code>
docker ps          → crictl ps
docker images      → crictl images
docker logs        → crictl logs
docker exec        → crictl exec
docker inspect     → crictl inspect
docker pull        → crictl pull
</code></pre>

<h3 id="32-cau-hinh-crictl">3.2. Cấu hình crictl</h3>
<pre><code class="language-bash"># crictl đã được cài cùng containerd.io package
# Cấu hình endpoint:
cat > /etc/crictl.yaml << 'EOF'
runtime-endpoint: unix:///run/containerd/containerd.sock
image-endpoint: unix:///run/containerd/containerd.sock
timeout: 10
debug: false
EOF

# Test
crictl info
crictl images
</code></pre>

<hr>

<h2 id="phan-4-cai-dat-kubeadm-kubelet-kubectl">PHẦN 4: CÀI ĐẶT KUBEADM, KUBELET, KUBECTL</h2>

<h3 id="41-them-kubernetes-repository">4.1. Thêm Kubernetes Repository</h3>
<pre><code class="language-bash"># ============================================
# Chạy trên TẤT CẢ nodes
# ============================================

# Kubernetes v1.31 (hoặc latest stable)
KUBE_VERSION="v1.31"

# Thêm K8s repository key
curl -fsSL "https://pkgs.k8s.io/core:/stable:/${KUBE_VERSION}/deb/Release.key" | \
  gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg

# Thêm K8s repository
echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] \
  https://pkgs.k8s.io/core:/stable:/${KUBE_VERSION}/deb/ /" | \
  tee /etc/apt/sources.list.d/kubernetes.list

# Cài đặt
apt update
apt install -y kubelet kubeadm kubectl

# QUAN TRỌNG: Hold version để tránh auto-upgrade
apt-mark hold kubelet kubeadm kubectl

# Verify versions
kubeadm version
# Output: kubeadm version: &version.Info{Major:"1", Minor:"31", ...}

kubelet --version
# Output: Kubernetes v1.31.x

kubectl version --client
# Output: Client Version: v1.31.x
</code></pre>

<h3 id="42-enable-kubelet">4.2. Enable kubelet</h3>
<pre><code class="language-bash"># Enable kubelet service (chưa start vì chưa init cluster)
systemctl enable kubelet

# kubelet sẽ tự start khi kubeadm init/join chạy
# Hiện tại nó sẽ crash-loop → bình thường, bỏ qua
</code></pre>

<h3 id="43-kubectl-bash-completion">4.3. kubectl Bash Completion</h3>
<pre><code class="language-bash"># Setup kubectl autocomplete (trên workstation và masters)
kubectl completion bash | tee /etc/bash_completion.d/kubectl > /dev/null

# Alias cho tiện
echo 'alias k=kubectl' >> ~/.bashrc
echo 'complete -o default -F __start_kubectl k' >> ~/.bashrc
source ~/.bashrc

# Test
k get no[TAB]  # → k get nodes
</code></pre>

<hr>

<h2 id="phan-5-pre-pull-images">PHẦN 5: PRE-PULL IMAGES</h2>

<h3 id="51-pull-k8s-images-truoc">5.1. Pull K8s Images trước khi init</h3>
<pre><code class="language-bash"># Xem danh sách images cần thiết cho K8s:
kubeadm config images list
# Output:
# registry.k8s.io/kube-apiserver:v1.31.x
# registry.k8s.io/kube-controller-manager:v1.31.x
# registry.k8s.io/kube-scheduler:v1.31.x
# registry.k8s.io/kube-proxy:v1.31.x
# registry.k8s.io/coredns/coredns:v1.11.x
# registry.k8s.io/pause:3.10
# registry.k8s.io/etcd:3.5.x

# Pre-pull trên TẤT CẢ control plane nodes (master1, master2, master3):
kubeadm config images pull
# Output:
# [config/images] Pulled registry.k8s.io/kube-apiserver:v1.31.x
# [config/images] Pulled registry.k8s.io/kube-controller-manager:v1.31.x
# ...

# Verify
crictl images | grep k8s.io
</code></pre>

<p>💡 <strong>Tip:</strong> Nếu nodes không có internet access, pull images trên máy có internet, export thành tar, rồi import trên nodes:</p>
<pre><code class="language-bash"># Trên máy có internet:
ctr -n k8s.io images export k8s-images.tar $(kubeadm config images list | tr '\n' ' ')

# Copy sang nodes:
scp k8s-images.tar root@master1:/tmp/

# Import trên nodes:
ctr -n k8s.io images import /tmp/k8s-images.tar
</code></pre>

<hr>

<h2 id="phan-6-pre-flight-check">PHẦN 6: PRE-FLIGHT CHECK</h2>

<h3 id="61-kubeadm-preflight">6.1. kubeadm preflight check</h3>
<pre><code class="language-bash"># Chạy preflight checks (dry-run):
kubeadm init --dry-run 2>&1 | head -30

# Hoặc dùng script toàn diện:
#!/bin/bash
echo "=== Pre-flight Check ==="

# 1. containerd
echo -n "containerd: "
systemctl is-active containerd && echo "✅" || echo "❌"

# 2. kubelet enabled
echo -n "kubelet enabled: "
systemctl is-enabled kubelet && echo "✅" || echo "❌"

# 3. Swap disabled
echo -n "Swap disabled: "
[[ $(swapon --show | wc -l) -eq 0 ]] && echo "✅" || echo "❌"

# 4. br_netfilter
echo -n "br_netfilter: "
lsmod | grep -q br_netfilter && echo "✅" || echo "❌"

# 5. ip_forward
echo -n "ip_forward: "
[[ $(sysctl -n net.ipv4.ip_forward) -eq 1 ]] && echo "✅" || echo "❌"

# 6. SystemdCgroup
echo -n "SystemdCgroup: "
grep -q "SystemdCgroup = true" /etc/containerd/config.toml && echo "✅" || echo "❌"

# 7. Images pulled (control plane only)
echo -n "K8s images: "
REQUIRED=$(kubeadm config images list 2>/dev/null | wc -l)
PULLED=$(crictl images 2>/dev/null | grep -c "registry.k8s.io")
echo "${PULLED}/${REQUIRED} pulled"

# 8. Ports available
for port in 6443 2379 2380 10250 10259 10257; do
  echo -n "Port $port: "
  ss -tlnp | grep -q ":$port " && echo "❌ IN USE" || echo "✅ Available"
done

echo ""
echo "=== Check HAProxy VIP ==="
echo -n "VIP reachable: "
ping -c 1 -W 2 10.10.20.100 &>/dev/null && echo "✅" || echo "❌"
echo -n "HAProxy port 6443: "
nc -z -w2 10.10.20.100 6443 &>/dev/null && echo "✅ (will route after API server starts)" || echo "⚠️ Not yet"
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>containerd</strong> là standard container runtime, cài từ Docker official repository</li>
<li><strong>SystemdCgroup = true</strong> là BẮT BUỘC — phải match với kubelet cgroup driver</li>
<li><strong>kubeadm, kubelet, kubectl</strong> cài từ pkgs.k8s.io, sau đó <code>apt-mark hold</code> để tránh auto-upgrade</li>
<li><strong>Pre-pull images</strong> tiết kiệm thời gian init cluster, đặc biệt quan trọng cho air-gapped environments</li>
<li><strong>Pre-flight checks</strong> giúp phát hiện issues trước khi chạy kubeadm init</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Cài đặt trên tất cả nodes</h3>
<ul>
<li>Cài containerd + kubeadm trên tất cả 6 nodes (3 masters + 3 workers)</li>
<li>Verify SystemdCgroup = true trên mỗi node</li>
<li>Pre-pull K8s images trên 3 master nodes</li>
<li>Chạy pre-flight check script, đảm bảo tất cả PASS</li>
</ul>

<h3 id="bt2">Bài tập 2: Air-gapped image transfer</h3>
<ul>
<li>Export K8s images thành tar file</li>
<li>Transfer sang 1 node không có internet</li>
<li>Import và verify images available</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 6: Khởi tạo Kubernetes HA Control Plane đầu tiên</strong>, chúng ta sẽ chạy kubeadm init trên master1 với HA configuration, tạo cluster certificate và kubeconfig.</p>
