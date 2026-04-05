---
id: 019d8b30-b202-7001-c002-e0c5f8200102
title: 'Bài 2: Cài đặt Vault - Standalone, Docker và Kubernetes'
slug: bai-2-cai-dat-vault-standalone-docker-va-kubernetes
description: >-
  Hướng dẫn cài đặt Vault 1.21.x trên Linux (Ubuntu/CentOS), macOS,
  Docker Compose và Kubernetes Helm chart. Cấu hình storage backend
  (Integrated Storage, File, Consul), listener (TCP, TLS), chạy Vault
  ở chế độ Dev Server vs Production Mode. Khởi tạo Vault (vault operator init),
  Seal/Unseal workflow, và Root Token management.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng HashiCorp Vault"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7622" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7622)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1034" cy="192" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="968" cy="246" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="902" cy="40" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="836" cy="94" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="770" cy="148" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="232" x2="1100" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="262" x2="1050" y2="332" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="955.3826859021799,118.5 955.3826859021799,145.5 932,159 908.6173140978201,145.5 908.6173140978201,118.5 932,105" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Bài 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 2: Cài đặt Vault - Standalone, Docker</tspan>
      <tspan x="60" dy="42">và Kubernetes</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng HashiCorp Vault</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-cai-dat-vault-tren-linux"><strong>1. Cài đặt Vault trên Linux</strong></h2>

<h3 id="ubuntu-debian"><strong>Ubuntu/Debian</strong></h3>
<pre><code class="language-bash"># Thêm HashiCorp GPG key
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg

# Thêm repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list

# Cài đặt Vault
sudo apt update && sudo apt install vault

# Xác nhận cài đặt
vault version
# Vault v1.21.x
</code></pre>

<h3 id="centos-rhel"><strong>CentOS/RHEL</strong></h3>
<pre><code class="language-bash"># Thêm repository
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo

# Cài đặt Vault
sudo yum install vault

vault version
</code></pre>

<h3 id="macos"><strong>macOS</strong></h3>
<pre><code class="language-bash"># Sử dụng Homebrew
brew tap hashicorp/tap
brew install hashicorp/tap/vault

vault version
</code></pre>

<h2 id="2-dev-server"><strong>2. Chạy Vault Dev Server</strong></h2>
<p>Dev Server là chế độ development, tất cả dữ liệu lưu trong memory, TLS disabled, auto-unsealed:</p>

<pre><code class="language-bash"># Khởi chạy Dev Server
vault server -dev

# Output sẽ hiển thị:
# Unseal Key: ...
# Root Token: hvs.xxxxx

# Trong terminal khác, export environment variables
export VAULT_ADDR='http://127.0.0.1:8200'
export VAULT_TOKEN='hvs.xxxxx'

# Kiểm tra trạng thái
vault status
</code></pre>

<div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 1rem; margin: 1rem 0; border-radius: 4px;">
<p><strong>⚠️ Cảnh báo:</strong> Dev Server KHÔNG BAO GIỜ sử dụng cho production. Dữ liệu mất khi restart, không có TLS, root token dùng trực tiếp.</p>
</div>

<h2 id="3-production-configuration"><strong>3. Cấu hình Production</strong></h2>

<h3 id="vault-config"><strong>File cấu hình Vault (vault.hcl)</strong></h3>
<pre><code class="language-hcl"># /etc/vault.d/vault.hcl

# Storage Backend - Integrated Storage (Raft)
storage "raft" {
  path    = "/opt/vault/data"
  node_id = "vault-node-1"
}

# Listener - TCP với TLS
listener "tcp" {
  address     = "0.0.0.0:8200"
  tls_cert_file = "/opt/vault/tls/vault-cert.pem"
  tls_key_file  = "/opt/vault/tls/vault-key.pem"
}

# API Address
api_addr     = "https://vault.example.com:8200"
cluster_addr = "https://vault.example.com:8201"

# UI
ui = true

# Disable mlock (recommended cho containers)
disable_mlock = true

# Telemetry
telemetry {
  prometheus_retention_time = "30s"
  disable_hostname         = true
}
</code></pre>

<h3 id="systemd-service"><strong>Systemd Service</strong></h3>
<pre><code class="language-ini"># /etc/systemd/system/vault.service
[Unit]
Description=HashiCorp Vault
Documentation=https://developer.hashicorp.com/vault/docs
Requires=network-online.target
After=network-online.target
ConditionFileNotEmpty=/etc/vault.d/vault.hcl

[Service]
User=vault
Group=vault
ProtectSystem=full
ProtectHome=read-only
PrivateTmp=yes
PrivateDevices=yes
SecureBits=keep-caps
AmbientCapabilities=CAP_IPC_LOCK
NoNewPrivileges=yes
ExecStart=/usr/bin/vault server -config=/etc/vault.d/vault.hcl
ExecReload=/bin/kill --signal HUP $MAINPID
KillMode=process
KillSignal=SIGINT
Restart=on-failure
RestartSec=5
TimeoutStopSec=30
LimitNOFILE=65536
LimitMEMLOCK=infinity

[Install]
WantedBy=multi-user.target
</code></pre>

<h2 id="4-docker-compose"><strong>4. Vault với Docker Compose</strong></h2>

<pre><code class="language-yaml"># docker-compose.yml
services:
  vault:
    image: hashicorp/vault:1.21
    container_name: vault
    restart: unless-stopped
    ports:
      - "8200:8200"
    environment:
      VAULT_ADDR: "http://0.0.0.0:8200"
      VAULT_API_ADDR: "http://0.0.0.0:8200"
    volumes:
      - vault-data:/vault/data
      - ./config:/vault/config
    cap_add:
      - IPC_LOCK
    command: vault server -config=/vault/config/vault.hcl

volumes:
  vault-data:
</code></pre>

<h2 id="5-khoi-tao-vault"><strong>5. Khởi tạo Vault (Operator Init)</strong></h2>

<pre><code class="language-bash"># Khởi tạo Vault lần đầu
vault operator init

# Output:
# Unseal Key 1: xxx
# Unseal Key 2: xxx
# Unseal Key 3: xxx
# Unseal Key 4: xxx
# Unseal Key 5: xxx
# Initial Root Token: hvs.xxxxx

# Unseal Vault (cần 3 trong 5 keys mặc định)
vault operator unseal &lt;key-1&gt;
vault operator unseal &lt;key-2&gt;
vault operator unseal &lt;key-3&gt;

# Custom key shares và threshold
vault operator init -key-shares=3 -key-threshold=2

# Kiểm tra trạng thái
vault status
# Sealed: false
# HA Enabled: true
</code></pre>

<h2 id="6-kubernetes-helm"><strong>6. Deploy Vault trên Kubernetes bằng Helm</strong></h2>

<pre><code class="language-bash"># Thêm Helm repo
helm repo add hashicorp https://helm.releases.hashicorp.com
helm repo update

# Cài đặt Vault standalone
helm install vault hashicorp/vault \
  --set "server.dev.enabled=false" \
  --set "server.ha.enabled=true" \
  --set "server.ha.replicas=3" \
  --set "server.ha.raft.enabled=true"

# Khởi tạo Vault trong Kubernetes
kubectl exec vault-0 -- vault operator init
kubectl exec vault-0 -- vault operator unseal &lt;key&gt;
</code></pre>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>
<p>Trong bài này bạn đã học cách cài đặt Vault trên nhiều platform khác nhau, từ bare metal Linux đến Docker và Kubernetes. Điểm quan trọng là hiểu sự khác biệt giữa Dev Server (chỉ cho testing) và Production mode (cần TLS, persistent storage, proper init/unseal). Bài tiếp theo sẽ đi sâu vào Vault CLI, API và Web UI.</p>
