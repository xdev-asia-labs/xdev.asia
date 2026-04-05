---
id: 019d8b30-b223-7001-c002-e0c5f8200123
title: 'Bài 23: High Availability, Integrated Storage và Production Hardening'
slug: bai-23-high-availability-integrated-storage-va-production-hardening
description: >-
  Raft Integrated Storage deep dive, Autopilot, HA architecture patterns,
  performance standby, read replicas concepts, TLS end-to-end,
  production hardening checklist, OS tuning cho Vault.
duration_minutes: 220
is_free: true
video_url: null
sort_order: 23
section_title: "Phần 7: Production, Enterprise và Vận hành"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4273" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4273)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1048" cy="174" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="996" cy="222" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="944" cy="270" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="892" cy="58" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="840" cy="106" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="154" x2="1100" y2="234" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="184" x2="1050" y2="254" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="929.1147367097487,89.5 929.1147367097487,118.5 904,133 878.8852632902513,118.5 878.8852632902513,89.50000000000001 904,75" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — Bài 23</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 23: High Availability, Integrated</tspan>
      <tspan x="60" dy="42">Storage và Production Hardening</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 7: Production, Enterprise và Vận hành</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-raft-integrated-storage-deep-dive"><strong>1. Raft Integrated Storage Deep Dive</strong></h2>

<p>Từ Vault 1.4+, <strong>Integrated Storage (Raft)</strong> là storage backend được khuyên dùng. Nó loại bỏ sự phụ thuộc vào external storage như Consul, đơn giản hóa kiến trúc và vận hành.</p>

<h3 id="kien-truc-raft"><strong>Kiến trúc Raft Consensus</strong></h3>

<pre><code>┌─────────────────────────────────────────────────────────────┐
│                    Vault HA Cluster                         │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Node 1       │  │  Node 2       │  │  Node 3       │   │
│  │  (Leader)     │  │  (Follower)   │  │  (Follower)   │   │
│  │  ┌──────────┐ │  │  ┌──────────┐ │  │  ┌──────────┐ │   │
│  │  │  Raft    │ │  │  │  Raft    │ │  │  │  Raft    │ │   │
│  │  │  Log     │◄├──├─▶│  Log     │◄├──├─▶│  Log     │ │   │
│  │  └──────────┘ │  │  └──────────┘ │  │  └──────────┘ │   │
│  │  ┌──────────┐ │  │  ┌──────────┐ │  │  ┌──────────┐ │   │
│  │  │  BoltDB  │ │  │  │  BoltDB  │ │  │  │  BoltDB  │ │   │
│  │  └──────────┘ │  │  └──────────┘ │  │  └──────────┘ │   │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
</code></pre>

<h3 id="cau-hinh-raft"><strong>Cấu hình Raft Storage</strong></h3>

<pre><code class="language-hcl"># vault-config.hcl
storage "raft" {
  path    = "/opt/vault/data"
  node_id = "vault-node-1"

  retry_join {
    leader_api_addr         = "https://vault-node-2.company.com:8200"
    leader_ca_cert_file     = "/opt/vault/tls/ca.pem"
    leader_client_cert_file = "/opt/vault/tls/client.pem"
    leader_client_key_file  = "/opt/vault/tls/client-key.pem"
  }

  retry_join {
    leader_api_addr         = "https://vault-node-3.company.com:8200"
    leader_ca_cert_file     = "/opt/vault/tls/ca.pem"
    leader_client_cert_file = "/opt/vault/tls/client.pem"
    leader_client_key_file  = "/opt/vault/tls/client-key.pem"
  }

  # Performance tuning
  performance_multiplier = 1  # Optimized for fast networks (default: 5)
}

listener "tcp" {
  address            = "0.0.0.0:8200"
  cluster_address    = "0.0.0.0:8201"
  tls_cert_file      = "/opt/vault/tls/server.pem"
  tls_key_file       = "/opt/vault/tls/server-key.pem"
  tls_client_ca_file = "/opt/vault/tls/ca.pem"
}

cluster_addr = "https://vault-node-1.company.com:8201"
api_addr     = "https://vault-node-1.company.com:8200"

seal "awskms" {
  region     = "ap-southeast-1"
  kms_key_id = "alias/vault-unseal"
}
</code></pre>

<h3 id="autopilot"><strong>Autopilot — Quản lý cluster tự động</strong></h3>

<pre><code class="language-bash"># Xem Autopilot state
vault operator raft autopilot state

# Cấu hình Autopilot
vault operator raft autopilot set-config \
  -cleanup-dead-servers=true \
  -dead-server-last-contact-threshold=24h \
  -min-quorum=3 \
  -server-stabilization-time=10s

# Snapshot tự động (Enterprise)
vault operator raft autopilot snapshot-config set \
  -interval=1h \
  -retain=72 \
  -path-prefix="raft/snapshots"
</code></pre>

<h3 id="raft-snapshots"><strong>Manual Snapshots</strong></h3>

<pre><code class="language-bash"># Tạo snapshot
vault operator raft snapshot save /backup/vault-$(date +%Y%m%d%H%M).snap

# Restore snapshot
vault operator raft snapshot restore /backup/vault-20250101.snap

# List peers
vault operator raft list-peers

# Remove dead peer
vault operator raft remove-peer vault-node-4
</code></pre>

<h2 id="2-ha-architecture-patterns"><strong>2. HA Architecture Patterns</strong></h2>

<h3 id="3-node-cluster"><strong>3-Node Cluster (Tiêu chuẩn)</strong></h3>

<table>
<thead>
<tr><th>Đặc tính</th><th>Giá trị</th></tr>
</thead>
<tbody>
<tr><td>Số node</td><td>3</td></tr>
<tr><td>Fault tolerance</td><td>1 node failure</td></tr>
<tr><td>Quorum</td><td>2</td></tr>
<tr><td>Phù hợp</td><td>Staging, Production nhỏ/trung bình</td></tr>
</tbody>
</table>

<h3 id="5-node-cluster"><strong>5-Node Cluster (Enterprise / Large scale)</strong></h3>

<table>
<thead>
<tr><th>Đặc tính</th><th>Giá trị</th></tr>
</thead>
<tbody>
<tr><td>Số node</td><td>5</td></tr>
<tr><td>Fault tolerance</td><td>2 node failures</td></tr>
<tr><td>Quorum</td><td>3</td></tr>
<tr><td>Phù hợp</td><td>Large production, multi-AZ</td></tr>
</tbody>
</table>

<h3 id="multi-az"><strong>Multi-AZ Deployment</strong></h3>

<pre><code>
Region: ap-southeast-1
┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│      AZ-1      │  │      AZ-2      │  │      AZ-3      │
│                │  │                │  │                │
│  ┌──────────┐  │  │  ┌──────────┐  │  │  ┌──────────┐  │
│  │ Vault-1  │  │  │  │ Vault-2  │  │  │  │ Vault-3  │  │
│  │ (Leader) │  │  │  │(Follower)│  │  │  │(Follower)│  │
│  └──────────┘  │  │  └──────────┘  │  │  └──────────┘  │
│                │  │                │  │                │
│  ┌──────────┐  │  │                │  │  ┌──────────┐  │
│  │   LB     │  │  │  ┌──────────┐  │  │  │   LB     │  │
│  └──────────┘  │  │  │   LB     │  │  │  └──────────┘  │
│                │  │  └──────────┘  │  │                │
└────────────────┘  └────────────────┘  └────────────────┘
         ▲                  ▲                  ▲
         └──────────────────┴──────────────────┘
                        NLB / DNS
</code></pre>

<h2 id="3-tls-end-to-end"><strong>3. TLS End-to-End</strong></h2>

<h3 id="tao-certificates"><strong>Tạo Certificates với Vault PKI</strong></h3>

<pre><code class="language-bash"># Root CA
vault secrets enable -path=pki-root pki
vault secrets tune -max-lease-ttl=87600h pki-root
vault write pki-root/root/generate/internal \
  common_name="Company Root CA" \
  ttl=87600h

# Intermediate CA cho Vault cluster
vault secrets enable -path=pki-vault pki
vault secrets tune -max-lease-ttl=43800h pki-vault

vault write pki-vault/intermediate/generate/internal \
  common_name="Vault Intermediate CA" \
  | jq -r '.data.csr' > vault-intermediate.csr

vault write pki-root/root/sign-intermediate \
  csr=@vault-intermediate.csr \
  ttl=43800h \
  | jq -r '.data.certificate' > vault-intermediate.pem

vault write pki-vault/intermediate/set-signed \
  certificate=@vault-intermediate.pem

# Tạo role cho Vault server certs
vault write pki-vault/roles/vault-server \
  allowed_domains="vault.company.com,company.internal" \
  allow_subdomains=true \
  max_ttl=8760h

# Issue cert
vault write pki-vault/issue/vault-server \
  common_name="vault-node-1.company.internal" \
  alt_names="vault.company.com" \
  ip_sans="10.0.1.10" \
  ttl=720h
</code></pre>

<h2 id="4-production-hardening"><strong>4. Production Hardening Checklist</strong></h2>

<h3 id="os-config"><strong>OS-Level Tuning</strong></h3>

<pre><code class="language-bash"># /etc/sysctl.d/99-vault.conf
net.core.somaxconn = 65535
net.ipv4.tcp_max_syn_backlog = 65535
net.ipv4.ip_local_port_range = 1024 65535
net.ipv4.tcp_tw_reuse = 1
vm.swappiness = 0
vm.dirty_ratio = 10

# Apply
sysctl --system
</code></pre>

<pre><code class="language-bash"># File descriptor limits
# /etc/security/limits.d/vault.conf
vault soft nofile 65536
vault hard nofile 65536
vault soft nproc 65536
vault hard nproc 65536
</code></pre>

<h3 id="systemd-hardening"><strong>Systemd Service Hardening</strong></h3>

<pre><code class="language-ini"># /etc/systemd/system/vault.service
[Unit]
Description=HashiCorp Vault
Documentation=https://www.vaultproject.io/docs
Requires=network-online.target
After=network-online.target
ConditionFileNotEmpty=/etc/vault.d/vault.hcl

[Service]
Type=notify
User=vault
Group=vault
ExecStart=/usr/bin/vault server -config=/etc/vault.d/vault.hcl
ExecReload=/bin/kill --signal HUP $MAINPID
KillMode=process
KillSignal=SIGINT
Restart=on-failure
RestartSec=5
TimeoutStopSec=30
LimitNOFILE=65536
LimitMEMLOCK=infinity

# Security hardening
ProtectSystem=full
ProtectHome=true
PrivateTmp=true
PrivateDevices=true
NoNewPrivileges=true
CapabilityBoundingSet=CAP_IPC_LOCK CAP_NET_BIND_SERVICE
AmbientCapabilities=CAP_IPC_LOCK

[Install]
WantedBy=multi-user.target
</code></pre>

<h3 id="vault-config-hardening"><strong>Vault Configuration Hardening</strong></h3>

<pre><code class="language-hcl"># Production vault.hcl
ui            = true
disable_mlock = false
log_level     = "warn"

# Disable unused features
raw_storage_endpoint = false

listener "tcp" {
  address            = "0.0.0.0:8200"
  cluster_address    = "0.0.0.0:8201"
  tls_cert_file      = "/opt/vault/tls/server.pem"
  tls_key_file       = "/opt/vault/tls/server-key.pem"
  tls_client_ca_file = "/opt/vault/tls/ca.pem"
  tls_min_version    = "tls13"
  tls_require_and_verify_client_cert = false

  # Telemetry
  telemetry {
    unauthenticated_metrics_access = false
  }
}

# Audit device — BẮT BUỘC trong production
# Cấu hình sau khi unseal qua CLI
</code></pre>

<h3 id="hardening-checklist"><strong>Checklist tổng hợp</strong></h3>

<table>
<thead>
<tr><th>#</th><th>Hạng mục</th><th>Trạng thái</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>TLS end-to-end (API + Cluster)</td><td>☐</td></tr>
<tr><td>2</td><td>Auto-unseal (KMS / HSM)</td><td>☐</td></tr>
<tr><td>3</td><td>Audit device enabled</td><td>☐</td></tr>
<tr><td>4</td><td>Initial root token revoked</td><td>☐</td></tr>
<tr><td>5</td><td>mlock enabled (disable_mlock = false)</td><td>☐</td></tr>
<tr><td>6</td><td>File descriptor limits tăng</td><td>☐</td></tr>
<tr><td>7</td><td>Swap disabled hoặc swappiness = 0</td><td>☐</td></tr>
<tr><td>8</td><td>Dedicated machine / VM</td><td>☐</td></tr>
<tr><td>9</td><td>Firewall — chỉ mở 8200, 8201</td><td>☐</td></tr>
<tr><td>10</td><td>Network segmentation</td><td>☐</td></tr>
<tr><td>11</td><td>Automated backup schedule</td><td>☐</td></tr>
<tr><td>12</td><td>Monitoring & alerting</td><td>☐</td></tr>
<tr><td>13</td><td>Log rotation configured</td><td>☐</td></tr>
<tr><td>14</td><td>Least-privilege policies</td><td>☐</td></tr>
</tbody>
</table>

<h2 id="5-tong-ket"><strong>5. Tổng kết</strong></h2>

<ul>
<li><p><strong>Raft Integrated Storage</strong> — Built-in HA storage, không cần Consul</p></li>
<li><p><strong>Autopilot</strong> — Tự động quản lý cluster membership, dead server cleanup</p></li>
<li><p><strong>Multi-AZ</strong> — Spread nodes across AZs cho fault tolerance</p></li>
<li><p><strong>TLS end-to-end</strong> — Bắt buộc trong production</p></li>
<li><p><strong>Hardening</strong> — OS tuning, systemd security, mlock, firewall, audit</p></li>
</ul>
