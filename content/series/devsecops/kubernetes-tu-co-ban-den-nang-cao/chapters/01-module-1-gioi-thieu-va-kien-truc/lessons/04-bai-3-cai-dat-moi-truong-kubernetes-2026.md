---
id: 019c9618-0002-7000-8000-c1147ba22e10
title: 'BÀI 3: CÀI ĐẶT MÔI TRƯỜNG KUBERNETES 2026'
slug: bai-3-cai-dat-moi-truong-kubernetes-2026
description: >-
  Hướng dẫn cài đặt môi trường Kubernetes 2026 với containerd 2.0, cgroup v2, kind/k3d. Cài đặt kubectl, k9s, kubectx/kubens, stern, và Headlamp dashboard thay thế Kubernetes Dashboard đã archived.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 3
section_title: 'Module 1: Giới thiệu & Kiến trúc Kubernetes'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7152" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7152)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1004" cy="62" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="908" cy="246" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="812" cy="170" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="716" cy="94" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="620" cy="278" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="242" x2="1100" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="272" x2="1050" y2="342" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="974.0429399400242,123.5 974.0429399400242,160.5 942,179 909.9570600599758,160.5 909.9570600599758,123.50000000000001 942,105" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Bài 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 3: CÀI ĐẶT MÔI TRƯỜNG KUBERNETES 2026</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 1: Giới thiệu &amp; Kiến trúc Kubernetes</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>Cài Đặt Môi Trường Kubernetes 2026</h2>

<p>Kubernetes năm 2026 đã có những thay đổi quan trọng trong stack công nghệ nền tảng. Bài học này hướng dẫn bạn xây dựng môi trường phát triển Kubernetes đầy đủ — từ yêu cầu hệ thống, cài đặt containerd 2.0, tạo cluster local, đến các công cụ CLI và dashboard hiện đại nhất.</p>

<h2>1. Yêu Cầu Hệ Thống 2026</h2>

<h3>1.1. Hardware tối thiểu</h3>

<ul>
  <li><strong>CPU</strong>: 4 cores (khuyến nghị 8+ cores để chạy multi-node cluster)</li>
  <li><strong>RAM</strong>: 8 GB (khuyến nghị 16 GB)</li>
  <li><strong>Disk</strong>: 50 GB free space (SSD được khuyến nghị)</li>
  <li><strong>OS</strong>: Linux với kernel 5.15+ (Ubuntu 22.04+, Debian 12+, RHEL 9+, hoặc macOS 14+ cho local dev)</li>
</ul>

<h3>1.2. Kiểm Tra và Đảm Bảo cgroup v2</h3>

<p>Đây là yêu cầu <strong>bắt buộc</strong> quan trọng nhất. Từ Kubernetes 1.35, cgroup v1 đã deprecated. Từ Kubernetes 1.36, chỉ cgroup v2 được hỗ trợ.</p>

<pre><code class="language-bash"># Kiểm tra cgroup version hiện tại
stat -fc %T /sys/fs/cgroup
# Kết quả cần là: cgroup2fs
# Nếu trả về "tmpfs" -> đang dùng cgroup v1, cần upgrade OS

# Cách khác để kiểm tra
ls /sys/fs/cgroup/
# cgroup v2: chỉ thấy các file như cgroup.controllers, cgroup.procs...
# cgroup v1: thấy nhiều thư mục như cpu, memory, blkio...

# Kiểm tra kernel version
uname -r
# Cần >= 5.15 cho full cgroup v2 support</code></pre>

<p><strong>Nếu đang dùng cgroup v1</strong>, cách đơn giản nhất là upgrade OS:</p>

<pre><code class="language-bash"># Ubuntu 20.04 -> 22.04 LTS upgrade
do-release-upgrade

# Hoặc với Debian 10 -> 12 (Bookworm)
# Cgroup v2 mặc định từ Debian 11+

# Bật cgroup v2 thủ công trên Ubuntu 20.04 (kernel boot param)
sudo grubby --update-kernel=ALL \
  --args="systemd.unified_cgroup_hierarchy=1 cgroup_no_v1=all"
sudo update-grub
sudo reboot

# Sau reboot, kiểm tra lại
stat -fc %T /sys/fs/cgroup  # Phải là cgroup2fs</code></pre>

<p>Ubuntu 22.04 LTS và mới hơn mặc định đã dùng cgroup v2 — không cần cấu hình thêm.</p>

<h2>2. Cài Đặt containerd 2.0</h2>

<p>containerd 2.0 là container runtime tiêu chuẩn cho Kubernetes 2026, với native cgroup v2 support và nhiều cải tiến hiệu năng.</p>

<h3>2.1. Cài đặt trên Ubuntu/Debian</h3>

<pre><code class="language-bash"># Xóa containerd cũ nếu có
sudo apt remove containerd containerd.io -y

# Cài đặt prerequisites
sudo apt update
sudo apt install -y ca-certificates curl gnupg lsb-release

# Thêm Docker/containerd official GPG key
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Thêm repository
echo "deb [arch=$(dpkg --print-architecture) \
  signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Cài containerd 2.0
sudo apt update
sudo apt install -y containerd.io

# Kiểm tra version
containerd --version
# Phải là 2.x.x</code></pre>

<h3>2.2. Cấu hình containerd cho Kubernetes</h3>

<pre><code class="language-bash"># Tạo thư mục config
sudo mkdir -p /etc/containerd

# Generate default config
sudo containerd config default | sudo tee /etc/containerd/config.toml

# Bật SystemdCgroup = true (BẮT BUỘC cho Kubernetes với systemd)
sudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/' \
  /etc/containerd/config.toml

# Verify thay đổi
grep SystemdCgroup /etc/containerd/config.toml
# Output phải là: SystemdCgroup = true

# Restart containerd
sudo systemctl restart containerd
sudo systemctl enable containerd

# Kiểm tra containerd đang chạy
sudo systemctl status containerd

# Test containerd hoạt động
sudo ctr version</code></pre>

<h3>2.3. Cài đặt crictl (CRI CLI tool)</h3>

<pre><code class="language-bash"># Cài crictl để interact với containerd qua CRI interface
VERSION="v1.32.0"
curl -L https://github.com/kubernetes-sigs/cri-tools/releases/download/${VERSION}/crictl-${VERSION}-linux-amd64.tar.gz \
  | sudo tar -xz -C /usr/local/bin

# Cấu hình crictl dùng containerd
cat <<EOF | sudo tee /etc/crictl.yaml
runtime-endpoint: unix:///run/containerd/containerd.sock
image-endpoint: unix:///run/containerd/containerd.sock
timeout: 10
EOF

# Test crictl
sudo crictl version</code></pre>

<h2>3. Cài Đặt Kubernetes Local: Kind vs k3d vs Minikube</h2>

<h3>3.1. So Sánh Các Options</h3>

<table>
  <thead>
    <tr>
      <th>Tool</th>
      <th>Cơ chế</th>
      <th>Ưu điểm</th>
      <th>Nhược điểm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>kind</strong></td>
      <td>K8s nodes là Docker containers</td>
      <td>Multi-node, CI-friendly, stable</td>
      <td>Cần Docker Desktop/Engine, chậm hơn k3d</td>
    </tr>
    <tr>
      <td><strong>k3d</strong></td>
      <td>k3s (lightweight K8s) trong Docker</td>
      <td>Nhanh nhất, nhẹ nhất, multi-node dễ</td>
      <td>k3s có một số differences với full K8s</td>
    </tr>
    <tr>
      <td><strong>Minikube</strong></td>
      <td>VM hoặc Docker driver</td>
      <td>Dễ dùng nhất, nhiều addons</td>
      <td>Single-node mặc định, tốn tài nguyên hơn</td>
    </tr>
  </tbody>
</table>

<p><strong>Khuyến nghị 2026</strong>: Dùng <strong>kind</strong> cho CI/CD pipelines và khi cần test multi-node scenarios gần với production. Dùng <strong>k3d</strong> cho local development nhanh. Bài học này hướng dẫn cả hai.</p>

<h3>3.2. Cài đặt và Dùng kind</h3>

<pre><code class="language-bash"># Cài kind
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.27.0/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind

# Trên macOS
brew install kind

# Tạo cluster đơn giản (single node)
kind create cluster --name dev

# Tạo multi-node cluster với config file
cat <<EOF > kind-config.yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
name: k8s-lab
nodes:
  - role: control-plane
    kubeadmConfigPatches:
    - |
      kind: InitConfiguration
      nodeRegistration:
        kubeletExtraArgs:
          node-labels: "ingress-ready=true"
    extraPortMappings:
    - containerPort: 80
      hostPort: 80
      protocol: TCP
    - containerPort: 443
      hostPort: 443
      protocol: TCP
  - role: worker
    extraMounts:
    - hostPath: /tmp/kind-storage
      containerPath: /data
  - role: worker
networking:
  podSubnet: "10.244.0.0/16"
  serviceSubnet: "10.96.0.0/12"
  kubeProxyMode: nftables
EOF

kind create cluster --config kind-config.yaml

# Xem danh sách clusters
kind get clusters

# Xóa cluster
kind delete cluster --name k8s-lab</code></pre>

<h3>3.3. Cài đặt và Dùng k3d</h3>

<pre><code class="language-bash"># Cài k3d
curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash

# Trên macOS
brew install k3d

# Tạo cluster nhanh
k3d cluster create mycluster

# Tạo multi-node cluster
k3d cluster create k8s-lab \
  --servers 1 \
  --agents 2 \
  --port "8080:80@loadbalancer" \
  --port "8443:443@loadbalancer"

# Xem clusters
k3d cluster list

# Start/stop cluster (tiết kiệm tài nguyên khi không dùng)
k3d cluster stop k8s-lab
k3d cluster start k8s-lab

# Xóa cluster
k3d cluster delete k8s-lab</code></pre>

<h2>4. Cài Đặt kubectl</h2>

<pre><code class="language-bash"># Lấy latest stable version
KUBECTL_VERSION=$(curl -L -s https://dl.k8s.io/release/stable.txt)
echo "Installing kubectl $KUBECTL_VERSION"

# Download kubectl binary
curl -LO "https://dl.k8s.io/release/${KUBECTL_VERSION}/bin/linux/amd64/kubectl"

# Verify checksum (quan trọng cho security)
curl -LO "https://dl.k8s.io/release/${KUBECTL_VERSION}/bin/linux/amd64/kubectl.sha256"
echo "$(cat kubectl.sha256)  kubectl" | sha256sum --check
# Output phải là: kubectl: OK

# Install
chmod +x kubectl
sudo mv kubectl /usr/local/bin/kubectl

# Kiểm tra
kubectl version --client

# Trên macOS
brew install kubectl
# Hoặc nếu đã cài Docker Desktop, kubectl đã được included

# Enable bash completion
echo 'source <(kubectl completion bash)' >> ~/.bashrc
echo 'alias k=kubectl' >> ~/.bashrc
echo 'complete -o default -F __start_kubectl k' >> ~/.bashrc
source ~/.bashrc

# Zsh completion
echo 'source <(kubectl completion zsh)' >> ~/.zshrc</code></pre>

<h2>5. Essential CLI Tools 2026</h2>

<h3>5.1. k9s — Terminal UI Dashboard</h3>

<p>k9s là terminal-based UI cho Kubernetes — cung cấp cái nhìn real-time về cluster resources, cho phép navigate, xem logs, exec vào containers, tất cả từ terminal.</p>

<pre><code class="language-bash"># Cài k9s
# macOS
brew install k9s

# Linux
curl -sS https://webinstall.dev/k9s | bash
# Hoặc download từ GitHub releases
curl -LO https://github.com/derailed/k9s/releases/latest/download/k9s_Linux_amd64.tar.gz
tar -xzf k9s_Linux_amd64.tar.gz
sudo mv k9s /usr/local/bin/

# Chạy k9s
k9s

# Một số hotkeys trong k9s:
# :pods     -> xem pods (thay bằng bất kỳ resource nào)
# :nodes    -> xem nodes
# l         -> xem logs của pod đang chọn
# e         -> edit resource
# d         -> describe resource
# ctrl+d    -> xóa resource
# /         -> filter/search
# ?         -> help</code></pre>

<h3>5.2. kubectx và kubens — Context và Namespace Switching</h3>

<p>Khi làm việc với nhiều clusters và namespaces, <code>kubectx</code> và <code>kubens</code> giúp switch nhanh chóng.</p>

<pre><code class="language-bash"># Cài kubectx và kubens
# macOS
brew install kubectx

# Linux
sudo git clone https://github.com/ahmetb/kubectx /opt/kubectx
sudo ln -s /opt/kubectx/kubectx /usr/local/bin/kubectx
sudo ln -s /opt/kubectx/kubens /usr/local/bin/kubens

# Với krew (kubectl plugin manager)
kubectl krew install ctx
kubectl krew install ns

# Sử dụng kubectx
kubectx                        # Liệt kê tất cả contexts
kubectx kind-k8s-lab           # Switch sang context kind-k8s-lab
kubectx -                      # Switch về context trước đó
kubectx prod=kind-k8s-lab      # Rename context

# Sử dụng kubens
kubens                         # Liệt kê tất cả namespaces
kubens kube-system             # Switch sang namespace kube-system
kubens -                       # Switch về namespace trước đó</code></pre>

<h3>5.3. stern — Multi-Pod Log Streaming</h3>

<p>stern cho phép stream logs từ nhiều Pods cùng lúc, filter theo regex, và hiển thị màu sắc theo pod.</p>

<pre><code class="language-bash"># Cài stern
# macOS
brew install stern

# Linux
curl -LO https://github.com/stern/stern/releases/latest/download/stern_linux_amd64.tar.gz
tar -xzf stern_linux_amd64.tar.gz
sudo mv stern /usr/local/bin/

# Sử dụng stern
stern .                        # Stream logs tất cả pods trong namespace hiện tại
stern my-app                   # Stream logs tất cả pods có tên chứa "my-app"
stern my-app -n production     # Trong namespace production
stern my-app --tail 50         # Chỉ 50 lines cuối mỗi pod
stern my-app --since 5m        # Logs từ 5 phút trước
stern "app=nginx" --selector   # Dùng label selector
stern . --container sidecar    # Chỉ stream container tên "sidecar"</code></pre>

<h3>5.4. krew — kubectl Plugin Manager</h3>

<pre><code class="language-bash"># Cài krew
(
  set -x; cd "$(mktemp -d)" &&
  OS="$(uname | tr '[:upper:]' '[:lower:]')" &&
  ARCH="$(uname -m | sed -e 's/x86_64/amd64/' -e 's/arm.*$/arm/' -e 's/aarch64$/arm64/')" &&
  KREW="krew-${OS}_${ARCH}" &&
  curl -fsSLO "https://github.com/kubernetes-sigs/krew/releases/latest/download/${KREW}.tar.gz" &&
  tar zxvf "${KREW}.tar.gz" &&
  ./"${KREW}" install krew
)

# Thêm vào PATH
export PATH="${KREW_ROOT:-$HOME/.krew}/bin:$PATH"
echo 'export PATH="${KREW_ROOT:-$HOME/.krew}/bin:$PATH"' >> ~/.bashrc

# Tìm và cài plugins hữu ích
kubectl krew search
kubectl krew install ctx ns neat tree view-secret

# Một số plugins hữu ích 2026:
# neat       -> output YAML gọn gàng hơn (bỏ managed fields)
# tree       -> hiển thị owner references dạng tree
# view-secret-> decode secrets dễ dàng
# rolesum    -> tóm tắt RBAC permissions
# stern      -> cũng có thể cài qua krew</code></pre>

<h2>6. Dashboard 2026: Headlamp</h2>

<p><strong>Kubernetes Dashboard</strong> (kubernetes/dashboard) đã bị <strong>archived tháng 1/2026</strong> — dự án chính thức không còn được maintain. Thay thế được khuyến nghị hiện nay là <strong>Headlamp</strong> — một web-based dashboard hiện đại, actively maintained, với UI/UX tốt hơn nhiều.</p>

<h3>6.1. Cài đặt Headlamp với Helm</h3>

<pre><code class="language-bash"># Cài Helm trước nếu chưa có
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# Thêm Headlamp Helm repo
helm repo add headlamp https://headlamp-k8s.github.io/headlamp/
helm repo update

# Cài Headlamp vào kube-system namespace
helm install headlamp headlamp/headlamp \
  --namespace kube-system \
  --set replicaCount=1

# Xem Headlamp pod đang chạy
kubectl get pods -n kube-system -l app.kubernetes.io/name=headlamp

# Port-forward để truy cập local
kubectl port-forward -n kube-system svc/headlamp 4466:80 &

# Truy cập: http://localhost:4466</code></pre>

<h3>6.2. Cấu hình Service Account Token để Login</h3>

<pre><code class="language-bash"># Tạo service account với cluster-admin permissions (chỉ dùng cho dev/lab!)
kubectl create serviceaccount headlamp-admin -n kube-system

kubectl create clusterrolebinding headlamp-admin \
  --clusterrole=cluster-admin \
  --serviceaccount=kube-system:headlamp-admin

# Tạo token (Kubernetes 1.24+ dùng TokenRequest API thay vì tự động tạo)
kubectl create token headlamp-admin -n kube-system --duration=720h

# Copy token và paste vào Headlamp login page</code></pre>

<h3>6.3. Các Alternatives cho Headlamp</h3>

<ul>
  <li><strong>Lens / OpenLens</strong>: Desktop application (Electron), rất phổ biến, nhiều features. OpenLens là open-source fork của Lens.</li>
  <li><strong>k9s</strong>: Terminal UI, faster hơn web dashboard</li>
  <li><strong>Grafana</strong>: Nếu đã có Grafana stack, dùng kubernetes plugin/dashboards</li>
  <li><strong>Rancher</strong>: Full platform khi quản lý nhiều clusters</li>
</ul>

<h2>7. IDE và Editor Setup</h2>

<h3>7.1. Visual Studio Code</h3>

<pre><code class="language-bash"># Cài extensions hữu ích cho Kubernetes development
code --install-extension ms-kubernetes-tools.vscode-kubernetes-tools
code --install-extension redhat.vscode-yaml
code --install-extension ms-azuretools.vscode-docker
code --install-extension golang.go   # Nếu dùng Go
code --install-extension hashicorp.terraform  # Nếu dùng Terraform</code></pre>

<p>Extensions cần thiết trong VS Code:</p>
<ul>
  <li><strong>Kubernetes</strong> (ms-kubernetes-tools): IntelliSense cho YAML manifests, cluster explorer, port-forward từ IDE</li>
  <li><strong>YAML</strong> (redhat): Schema validation, autocompletion cho YAML với Kubernetes schema</li>
  <li><strong>Docker</strong>: Dockerfile syntax, image management</li>
</ul>

<h3>7.2. Cấu hình YAML Schema Validation</h3>

<pre><code class="language-bash"># Thêm vào VS Code settings.json
# Settings -> Open Settings (JSON) -> thêm:
{
  "yaml.schemas": {
    "kubernetes": "*.yaml"
  },
  "yaml.customTags": [
    "!reference sequence"
  ]
}</code></pre>

<h2>8. First Commands: Kiểm Tra Cluster Hoạt Động</h2>

<p>Sau khi cài đặt xong, chạy các lệnh này để verify cluster hoạt động đúng:</p>

<pre><code class="language-bash"># 1. Thông tin cluster
kubectl cluster-info
# Output mong đợi:
# Kubernetes control plane is running at https://127.0.0.1:XXXXX
# CoreDNS is running at https://...

# 2. Danh sách nodes và trạng thái
kubectl get nodes -o wide
# Tất cả nodes phải ở trạng thái: Ready

# 3. Kiểm tra tất cả system pods
kubectl get pods -A
# Tất cả pods phải ở trạng thái: Running hoặc Completed

# 4. Kiểm tra services hệ thống
kubectl get services -A

# 5. Kiểm tra storage classes
kubectl get storageclasses

# 6. Quick connectivity test - tạo và xóa pod test
kubectl run test-pod --image=nginx:alpine --restart=Never
kubectl get pod test-pod  # Phải là Running sau ~30s
kubectl delete pod test-pod

# 7. Kiểm tra DNS hoạt động
kubectl run dns-test --image=busybox:1.36 --rm -it --restart=Never \
  -- nslookup kubernetes.default.svc.cluster.local
# Phải resolve thành công

# 8. Xem resource usage (cần metrics-server)
kubectl top nodes</code></pre>

<h2>9. Cấu Hình kubeconfig và Multiple Clusters</h2>

<pre><code class="language-bash"># kubeconfig mặc định ở ~/.kube/config
cat ~/.kube/config

# Xem contexts hiện có
kubectl config get-contexts

# Xem context đang dùng
kubectl config current-context

# Merge nhiều kubeconfig files
export KUBECONFIG=~/.kube/config:~/.kube/config-cluster2
kubectl config view --flatten > ~/.kube/config-merged
mv ~/.kube/config-merged ~/.kube/config

# Set namespace mặc định cho context
kubectl config set-context --current --namespace=my-namespace

# Một số best practices:
# - Không dùng cluster-admin trong development thường ngày
# - Tạo dedicated service account với minimum permissions cần thiết
# - Dùng kubectx/kubens để tránh nhầm cluster/namespace</code></pre>

<h2>10. Tổng Kết Setup Checklist</h2>

<p>Dưới đây là checklist để verify môi trường đã sẵn sàng:</p>

<pre><code class="language-bash">#!/bin/bash
# Kubernetes 2026 Environment Check Script

echo "=== Checking cgroup v2 ==="
CGROUP_TYPE=$(stat -fc %T /sys/fs/cgroup)
if [ "$CGROUP_TYPE" = "cgroup2fs" ]; then
  echo "✓ cgroup v2 active"
else
  echo "✗ cgroup v1 detected! Upgrade required for K8s 1.36+"
fi

echo ""
echo "=== Checking containerd ==="
if command -v containerd &> /dev/null; then
  echo "✓ containerd $(containerd --version | awk '{print $3}')"
else
  echo "✗ containerd not found"
fi

echo ""
echo "=== Checking kubectl ==="
if command -v kubectl &> /dev/null; then
  echo "✓ kubectl $(kubectl version --client --short 2>/dev/null | head -1)"
else
  echo "✗ kubectl not found"
fi

echo ""
echo "=== Checking CLI Tools ==="
for tool in kind k3d helm k9s stern kubectx kubens; do
  if command -v $tool &> /dev/null; then
    echo "✓ $tool installed"
  else
    echo "- $tool not installed (optional)"
  fi
done

echo ""
echo "=== Checking Cluster ==="
if kubectl cluster-info &> /dev/null; then
  echo "✓ Cluster accessible"
  kubectl get nodes --no-headers | awk '{print "✓ Node "$1" - "$2}'
else
  echo "✗ No cluster accessible (run: kind create cluster)"
fi</code></pre>

<p>Sau khi hoàn thành bài học này, bạn đã có đầy đủ môi trường để học và thực hành Kubernetes. Trong bài thực hành tiếp theo, chúng ta sẽ áp dụng tất cả những gì đã cài đặt để deploy ứng dụng thực tế đầu tiên.</p>
