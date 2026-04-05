---
id: 019c9618-0003-7000-8000-c1147ba22e10
title: 'BÀI 4: THỰC HÀNH — THIẾT LẬP CLUSTER VÀ CÔNG CỤ'
slug: thuc-hanh-1-thiet-lap-cluster-va-cong-cu
description: >-
  Bài thực hành đầu tiên: kiểm tra cgroup v2, cài đặt containerd 2.0, tạo cluster với kind/k3d, cài đặt và cấu hình k9s, Headlamp. Làm quen với kubectl commands cơ bản.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: 'Module 1: Giới thiệu & Kiến trúc Kubernetes'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8810" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8810)"/>

  <!-- Decorations -->
  <g>
    <circle cx="813" cy="89" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="1026" cy="282" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="739" cy="215" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="952" cy="148" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="665" cy="81" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="99" x2="1100" y2="179" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="129" x2="1050" y2="199" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1078.444863728671,232 1078.444863728671,266 1049,283 1019.555136271329,266 1019.555136271329,232 1049,215" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — Bài 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 4: THỰC HÀNH — THIẾT LẬP CLUSTER VÀ</tspan>
      <tspan x="60" dy="42">CÔNG CỤ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 1: Giới thiệu &amp; Kiến trúc Kubernetes</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>Thực Hành 1: Thiết Lập Cluster và Công Cụ</h2>

<p>Đây là bài thực hành đầu tiên trong khóa học. Mục tiêu là biến những kiến thức lý thuyết từ các bài trước thành kỹ năng thực tế — bạn sẽ tự tay xây dựng môi trường Kubernetes hoàn chỉnh, từ kiểm tra hệ thống đến deploy dashboard và chạy các lệnh khám phá cluster.</p>

<p><strong>Thời gian ước tính</strong>: 120 phút (có thể nhanh hơn nếu đã quen với Linux/terminal)</p>

<p><strong>Kết quả đầu ra của bài thực hành</strong>:</p>
<ul>
  <li>Một Kubernetes cluster 3-node (1 control plane + 2 workers) chạy trên máy local</li>
  <li>Bộ CLI tools đầy đủ: kubectl, k9s, kubectx/kubens, stern</li>
  <li>Headlamp dashboard chạy và accessible</li>
  <li>Familiarity với các kubectl commands thường dùng</li>
</ul>

<h2>Prerequisites Check</h2>

<pre><code class="language-bash">#!/bin/bash
# Chạy script này trước khi bắt đầu

echo "========================================="
echo "  Lab Prerequisites Check"
echo "========================================="

# Check OS
echo ""
echo "[1] Operating System:"
cat /etc/os-release | grep -E "^(NAME|VERSION)="
echo "Kernel: $(uname -r)"

# Check resources
echo ""
echo "[2] Hardware Resources:"
echo "CPU cores: $(nproc)"
echo "Total RAM: $(free -h | awk '/Mem:/{print $2}')"
echo "Free disk: $(df -h / | awk 'NR==2{print $4}')"

# Check cgroup version
echo ""
echo "[3] cgroup Version:"
CGROUP=$(stat -fc %T /sys/fs/cgroup)
if [ "$CGROUP" = "cgroup2fs" ]; then
  echo "✓ cgroup v2 - OK"
else
  echo "✗ cgroup v1 detected - NEED UPGRADE"
  echo "  -> Ubuntu 22.04+ required"
fi

# Check Docker
echo ""
echo "[4] Docker / Container Runtime:"
if command -v docker &> /dev/null; then
  echo "✓ Docker $(docker --version | awk '{print $3}' | tr -d ',')"
else
  echo "✗ Docker not found - required for kind/k3d"
fi

# Summary
echo ""
echo "========================================="
echo "  Requirements:"
echo "  - CPU: 4+ cores (have: $(nproc))"
echo "  - RAM: 8+ GB (have: $(free -h | awk '/Mem:/{print $2}'))"
echo "  - cgroup v2: Required (have: $CGROUP)"
echo "========================================="</code></pre>

<p>Chạy script trên và đảm bảo tất cả requirements được đáp ứng trước khi tiếp tục.</p>

<h2>Lab 1: Cài Đặt containerd 2.0 và Tạo Kind Cluster</h2>

<h3>Bước 1: Cài Docker Engine (nếu chưa có)</h3>

<p>kind và k3d đều cần Docker để chạy. Trên macOS, cài Docker Desktop. Trên Linux:</p>

<pre><code class="language-bash"># Ubuntu/Debian - cài Docker Engine
sudo apt update
sudo apt install -y ca-certificates curl gnupg

sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Thêm user vào docker group (không cần sudo mỗi lần)
sudo usermod -aG docker $USER
newgrp docker

# Verify Docker chạy được
docker run hello-world</code></pre>

<h3>Bước 2: Cài kind và tạo cluster</h3>

<pre><code class="language-bash"># Cài kind
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.27.0/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind

# Verify
kind version

# Tạo file cấu hình cluster
cat <<'EOF' > ~/k8s-lab-config.yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
name: k8s-lab
nodes:
  - role: control-plane
    extraPortMappings:
    - containerPort: 30000
      hostPort: 30000
      protocol: TCP
    - containerPort: 30001
      hostPort: 30001
      protocol: TCP
    - containerPort: 8080
      hostPort: 8080
      protocol: TCP
  - role: worker
  - role: worker
networking:
  kubeProxyMode: nftables
EOF

# Tạo cluster (mất khoảng 2-5 phút)
kind create cluster --config ~/k8s-lab-config.yaml
# Expected output:
# Creating cluster "k8s-lab" ...
#  ✓ Ensuring node image (kindest/node:v1.32.x) 🖼
#  ✓ Preparing nodes 📦 📦 📦
#  ✓ Writing configuration 📜
#  ✓ Starting control-plane 🕹️
#  ✓ Installing CNI 🔌
#  ✓ Installing StorageClass 💾
#  ✓ Joining worker nodes 🚜
# Set kubectl context to "kind-k8s-lab"
# You can now use your cluster with:
# kubectl cluster-info --context kind-k8s-lab

# Verify cluster được tạo
kubectl cluster-info --context kind-k8s-lab
kubectl get nodes</code></pre>

<p><strong>Expected output của <code>kubectl get nodes</code></strong>:</p>

<pre><code class="language-bash">NAME                    STATUS   ROLES           AGE   VERSION
k8s-lab-control-plane   Ready    control-plane   2m    v1.32.x
k8s-lab-worker          Ready    &lt;none&gt;          2m    v1.32.x
k8s-lab-worker2         Ready    &lt;none&gt;          2m    v1.32.x</code></pre>

<h3>Bước 3: Cài kubectl</h3>

<pre><code class="language-bash"># Nếu chưa cài kubectl
KUBECTL_VERSION=$(curl -L -s https://dl.k8s.io/release/stable.txt)
curl -LO "https://dl.k8s.io/release/${KUBECTL_VERSION}/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/kubectl

# Trên macOS
brew install kubectl

# Kiểm tra kubectl kết nối với cluster
kubectl version

# Xem tất cả pods đang chạy (system pods)
kubectl get pods -A
# Phải thấy các pods: coredns, kindnet (CNI), kube-proxy, etcd, apiserver...</code></pre>

<h3>Checkpoint Lab 1</h3>

<pre><code class="language-bash"># Chạy các lệnh này để confirm Lab 1 thành công:
echo "=== Lab 1 Checkpoint ==="

echo "Nodes:"
kubectl get nodes -o wide

echo ""
echo "System Pods:"
kubectl get pods -n kube-system

echo ""
echo "Cluster Info:"
kubectl cluster-info

# Tất cả nodes phải Ready, tất cả system pods phải Running</code></pre>

<h2>Lab 2: Cài Đặt CLI Tools</h2>

<h3>Bước 1: Cài k9s</h3>

<pre><code class="language-bash"># Linux
curl -LO https://github.com/derailed/k9s/releases/latest/download/k9s_Linux_amd64.tar.gz
tar -xzf k9s_Linux_amd64.tar.gz
sudo mv k9s /usr/local/bin/
rm k9s_Linux_amd64.tar.gz LICENSE README.md

# macOS
brew install k9s

# Verify
k9s version

# Mở k9s (thoát bằng Ctrl+C hoặc :quit)
k9s</code></pre>

<p>Khi k9s mở, thực hành các thao tác sau:</p>

<pre><code class="language-bash"># Trong k9s interface:
# 1. Mặc định bạn đang xem Pods
# 2. Nhấn '0' để xem tất cả namespaces
# 3. Di chuyển lên/xuống bằng mũi tên
# 4. Nhấn 'l' khi chọn pod để xem logs
# 5. Nhấn 'd' để describe pod
# 6. Gõ ':nodes' và Enter để chuyển sang view Nodes
# 7. Gõ ':services' để xem Services
# 8. Gõ ':namespaces' để xem Namespaces
# 9. Nhấn '?' để xem help
# 10. Gõ ':quit' và Enter để thoát</code></pre>

<h3>Bước 2: Cài kubectx và kubens</h3>

<pre><code class="language-bash"># Linux
sudo git clone https://github.com/ahmetb/kubectx /opt/kubectx
sudo ln -s /opt/kubectx/kubectx /usr/local/bin/kubectx
sudo ln -s /opt/kubectx/kubens /usr/local/bin/kubens

# macOS
brew install kubectx

# Verify và thực hành
kubectx
# Output: kind-k8s-lab (với dấu * là context đang dùng)

kubens
# Output: list của tất cả namespaces

# Switch sang kube-system
kubens kube-system
kubectl get pods  # Không cần -n kube-system nữa

# Switch về default
kubens default</code></pre>

<h3>Bước 3: Cài stern</h3>

<pre><code class="language-bash"># Linux
curl -LO https://github.com/stern/stern/releases/latest/download/stern_linux_amd64.tar.gz
tar -xzf stern_linux_amd64.tar.gz
sudo mv stern /usr/local/bin/
rm -f stern_linux_amd64.tar.gz

# macOS
brew install stern

# Test stern - stream logs từ tất cả coredns pods
stern coredns -n kube-system --tail 10
# Ctrl+C để dừng</code></pre>

<h3>Bước 4: Setup bash/zsh completion và aliases</h3>

<pre><code class="language-bash"># Thêm vào ~/.bashrc hoặc ~/.zshrc
cat >> ~/.bashrc << 'EOF'

# Kubernetes aliases và completion
source <(kubectl completion bash)
alias k=kubectl
alias kgp='kubectl get pods'
alias kgs='kubectl get services'
alias kgn='kubectl get nodes'
alias kga='kubectl get all'
alias kdp='kubectl describe pod'
alias kl='kubectl logs'
alias kx='kubectx'
alias kns='kubens'
complete -o default -F __start_kubectl k
EOF

source ~/.bashrc

# Zsh users
cat >> ~/.zshrc << 'EOF'
source <(kubectl completion zsh)
alias k=kubectl
alias kgp='kubectl get pods'
alias kgs='kubectl get services'
alias kgn='kubectl get nodes'
alias kga='kubectl get all'
complete -F __start_kubectl k
EOF

source ~/.zshrc

# Test alias
k get nodes</code></pre>

<h2>Lab 3: Deploy Headlamp Dashboard</h2>

<h3>Bước 1: Cài Helm</h3>

<pre><code class="language-bash"># Cài Helm 3
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# Verify
helm version

# macOS
brew install helm</code></pre>

<h3>Bước 2: Deploy Headlamp</h3>

<pre><code class="language-bash"># Thêm Headlamp Helm repository
helm repo add headlamp https://headlamp-k8s.github.io/headlamp/
helm repo update

# Kiểm tra chart có available
helm search repo headlamp

# Cài Headlamp
helm install headlamp headlamp/headlamp \
  --namespace kube-system \
  --set replicaCount=1 \
  --wait

# Xem kết quả
kubectl get pods -n kube-system -l app.kubernetes.io/name=headlamp
kubectl get service -n kube-system headlamp

# Expected output:
# NAME       TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
# headlamp   ClusterIP   10.96.xxx.xxx   <none>        80/TCP    1m</code></pre>

<h3>Bước 3: Tạo Access Token</h3>

<pre><code class="language-bash"># Tạo ServiceAccount cho Headlamp
kubectl create serviceaccount headlamp-admin -n kube-system

# Grant cluster-admin (chỉ dùng trong lab/dev environment!)
kubectl create clusterrolebinding headlamp-admin \
  --clusterrole=cluster-admin \
  --serviceaccount=kube-system:headlamp-admin

# Tạo token với thời hạn 24 giờ
HEADLAMP_TOKEN=$(kubectl create token headlamp-admin \
  -n kube-system \
  --duration=24h)

echo "Your Headlamp token:"
echo $HEADLAMP_TOKEN
# Save token này - bạn sẽ cần để đăng nhập</code></pre>

<h3>Bước 4: Truy cập Headlamp</h3>

<pre><code class="language-bash"># Port-forward (chạy trong background)
kubectl port-forward -n kube-system svc/headlamp 4466:80 &
PORT_FORWARD_PID=$!

echo "Headlamp accessible at: http://localhost:4466"
echo "Port-forward PID: $PORT_FORWARD_PID"
echo ""
echo "Login with the token printed above"</code></pre>

<p>Mở browser và truy cập <code>http://localhost:4466</code>. Paste token để đăng nhập. Khám phá:</p>
<ul>
  <li>Nodes: xem resource usage, labels, taints</li>
  <li>Workloads > Pods: xem tất cả pods, logs, terminal</li>
  <li>Config > ConfigMaps, Secrets</li>
  <li>Cluster > Namespaces</li>
</ul>

<h2>Lab 4: Basic kubectl Exploration</h2>

<h3>4.1. Khám Phá Cluster</h3>

<pre><code class="language-bash"># Thông tin cluster
kubectl cluster-info

# Danh sách nodes với thêm thông tin
kubectl get nodes -o wide
# Xem: NAME, STATUS, ROLES, AGE, VERSION, INTERNAL-IP, OS-IMAGE, KERNEL-VERSION

# Describe node để xem chi tiết
kubectl describe node k8s-lab-control-plane
# Quan sát: Conditions, Capacity, Allocatable, System Info, Pods

# Xem tất cả namespaces
kubectl get namespaces

# Xem tất cả pods trong mọi namespace
kubectl get pods -A -o wide

# Xem events của cluster (rất hữu ích khi troubleshoot)
kubectl get events -A --sort-by='.lastTimestamp' | tail -20</code></pre>

<h3>4.2. Tạo Pod Đầu Tiên</h3>

<pre><code class="language-bash"># Tạo pod nginx đơn giản
kubectl run my-nginx --image=nginx:alpine

# Xem pod đang được tạo
kubectl get pod my-nginx
# Đợi STATUS thành: Running

# Xem logs của pod
kubectl logs my-nginx

# Xem chi tiết pod
kubectl describe pod my-nginx
# Quan sát: Events section - thấy luồng: Scheduled -> Pulled -> Created -> Started

# Exec vào trong pod
kubectl exec -it my-nginx -- sh
# Bên trong container:
ls /usr/share/nginx/html/
cat /etc/nginx/nginx.conf
exit

# Xóa pod
kubectl delete pod my-nginx</code></pre>

<h3>4.3. Deploy ứng dụng với Deployment</h3>

<pre><code class="language-bash"># Tạo Deployment
cat <<'EOF' | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello-app
  labels:
    app: hello-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: hello-app
  template:
    metadata:
      labels:
        app: hello-app
    spec:
      containers:
      - name: hello
        image: gcr.io/google-samples/hello-app:2.0
        ports:
        - containerPort: 8080
        resources:
          requests:
            memory: "32Mi"
            cpu: "50m"
          limits:
            memory: "64Mi"
            cpu: "100m"
EOF

# Xem deployment được tạo
kubectl get deployments
kubectl get pods -l app=hello-app

# Xem chi tiết rollout
kubectl rollout status deployment/hello-app

# Scale lên 5 replicas
kubectl scale deployment hello-app --replicas=5
kubectl get pods -l app=hello-app
# Phải thấy 5 pods

# Scale xuống 2 replicas
kubectl scale deployment hello-app --replicas=2
kubectl get pods -l app=hello-app

# Expose qua Service
kubectl expose deployment hello-app \
  --port=8080 \
  --type=NodePort \
  --name=hello-svc

kubectl get service hello-svc</code></pre>

<h3>4.4. Dùng stern để Xem Logs</h3>

<pre><code class="language-bash"># Stream logs từ tất cả pods của hello-app
stern hello-app &

# Tạo traffic để thấy logs
NODE_PORT=$(kubectl get svc hello-svc -o jsonpath='{.spec.ports[0].nodePort}')
echo "NodePort: $NODE_PORT"

# Trên kind, cần port-forward vì NodePort không accessible trực tiếp
kubectl port-forward svc/hello-svc 8888:8080 &

# Gửi requests
for i in {1..5}; do
  curl -s http://localhost:8888
  sleep 0.5
done

# Xem logs đang stream từ stern
# Ctrl+C để dừng stern</code></pre>

<h3>4.5. Phân Tích Resource Usage</h3>

<pre><code class="language-bash"># Cài metrics-server (nếu chưa có trong cluster)
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

# Patch để hoạt động với kind (disable TLS verification)
kubectl patch deployment metrics-server \
  -n kube-system \
  --type='json' \
  -p='[{"op":"add","path":"/spec/template/spec/containers/0/args/-","value":"--kubelet-insecure-tls"}]'

# Đợi metrics-server sẵn sàng
kubectl rollout status deployment/metrics-server -n kube-system

# Xem resource usage
kubectl top nodes
kubectl top pods -A --sort-by=cpu
kubectl top pods -A --sort-by=memory</code></pre>

<h2>Troubleshooting Guide: Các Lỗi Thường Gặp</h2>

<h3>Lỗi 1: Node ở trạng thái NotReady</h3>

<pre><code class="language-bash"># Kiểm tra tại sao node NotReady
kubectl describe node <node-name> | grep -A 20 Conditions

# Xem kubelet logs (trong kind, exec vào node container)
docker exec -it k8s-lab-worker bash
journalctl -u kubelet -n 50

# Thường gặp: kubelet không start được vì cgroup config
# Kiểm tra cgroup trong container
stat -fc %T /sys/fs/cgroup

# Fix: đảm bảo cgroup v2 trên host trước khi tạo cluster</code></pre>

<h3>Lỗi 2: Pod stuck ở Pending</h3>

<pre><code class="language-bash"># Xem events để hiểu lý do
kubectl describe pod <pod-name>
# Tìm phần Events: ở cuối output

# Nguyên nhân thường gặp:
# 1. Insufficient resources
kubectl describe node | grep -A 5 "Allocated resources"

# 2. Image pull error
kubectl get events --field-selector reason=Failed

# 3. PVC not bound
kubectl get pvc

# 4. Node has taint, pod không có toleration
kubectl describe node | grep Taints</code></pre>

<h3>Lỗi 3: CrashLoopBackOff</h3>

<pre><code class="language-bash"># Xem logs của pod đang crash
kubectl logs <pod-name> --previous  # --previous để xem logs của lần chạy trước

# Xem logs real-time
kubectl logs <pod-name> -f

# Kiểm tra exit code và reason
kubectl describe pod <pod-name> | grep -A 10 "State:"

# Thường gặp:
# - Misconfigured environment variables
# - Missing ConfigMap/Secret
# - Command/entrypoint sai
# - Resource limits quá thấp (OOMKilled)</code></pre>

<h3>Lỗi 4: ImagePullBackOff</h3>

<pre><code class="language-bash"># Xem chi tiết lỗi
kubectl describe pod <pod-name> | grep -A 5 "Failed"

# Nguyên nhân:
# 1. Image name/tag sai
# 2. Private registry - không có imagePullSecret
# 3. Network issues trong cluster

# Với kind - load image từ local vào cluster
docker pull nginx:alpine
kind load docker-image nginx:alpine --name k8s-lab

# Verify image được load
docker exec k8s-lab-worker crictl images | grep nginx</code></pre>

<h3>Lỗi 5: kind cluster không tạo được</h3>

<pre><code class="language-bash"># Xem Docker đang chạy không
docker info

# Kiểm tra disk space
df -h

# Xem Docker logs
journalctl -u docker -n 50

# Xóa cluster cũ nếu còn tồn đọng và tạo lại
kind delete cluster --name k8s-lab
kind create cluster --config ~/k8s-lab-config.yaml

# Reset Docker nếu cần
docker system prune -a  # Cẩn thận: xóa tất cả unused images/containers</code></pre>

<h2>Dọn Dẹp Lab</h2>

<pre><code class="language-bash"># Xóa resources đã tạo trong bài thực hành
kubectl delete deployment hello-app
kubectl delete service hello-svc

# Dừng port-forward processes
kill $(lsof -t -i:4466) 2>/dev/null  # Headlamp
kill $(lsof -t -i:8888) 2>/dev/null  # hello-app

# Giữ cluster để dùng trong bài tiếp theo
# Để xóa cluster khi không cần:
# kind delete cluster --name k8s-lab</code></pre>

<h2>Tóm Tắt Bài Thực Hành</h2>

<p>Trong bài thực hành này, bạn đã hoàn thành:</p>

<ul>
  <li>Kiểm tra và xác nhận prerequisites (cgroup v2, Docker, disk space)</li>
  <li>Tạo Kubernetes cluster 3-node với kind và cấu hình nftables mode</li>
  <li>Cài đặt bộ tools: kubectl, k9s, kubectx/kubens, stern</li>
  <li>Deploy và truy cập Headlamp dashboard</li>
  <li>Thực hành các kubectl commands: get, describe, logs, exec, scale, rollout</li>
  <li>Làm quen với troubleshooting Pending pods, CrashLoopBackOff, ImagePullBackOff</li>
</ul>

<p>Từ bài tiếp theo, chúng ta đi sâu vào các Kubernetes objects — bắt đầu với <strong>Pods</strong>, đơn vị triển khai cơ bản nhất.</p>
