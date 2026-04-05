---
id: 019c9617-fb71-7108-9898-0733dd6d13bf
title: 'Bài 6: Cài đặt và cấu hình etcd cluster'
slug: bai-6-cai-dat-va-cau-hinh-etcd-cluster
description: >-
  Download, cài đặt và cấu hình etcd cluster 3 nodes, tạo systemd service và
  kiểm tra health với etcdctl commands.
duration_minutes: 160
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Cài đặt & Cấu hình"
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7951" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7951)"/>

  <!-- Decorations -->
  <g>
    <circle cx="785" cy="85" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="970" cy="190" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="655" cy="35" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="840" cy="140" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="1025" cy="245" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="155" x2="1100" y2="235" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="185" x2="1050" y2="255" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="980.9807621135332,140 980.9807621135332,170 955,185 929.0192378864668,170 929.0192378864668,140 955,125" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Bài 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 6: Cài đặt và cấu hình etcd cluster</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL High Availability với Patroni &amp; etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Cài đặt &amp; Cấu hình</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Hiểu vai trò của etcd trong Patroni architecture</li><li>Download và cài đặt etcd trên 3 nodes</li><li>Cấu hình etcd cluster với Raft consensus</li><li>Tạo systemd service cho etcd</li><li>Kiểm tra health của etcd cluster</li><li>Sử dụng etcdctl commands cơ bản</li></ul><h2 id="1-gi%E1%BB%9Bi-thi%E1%BB%87u-etcd">1. Giới thiệu etcd</h2><h3 id="11-etcd-l%C3%A0-g%C3%AC">1.1. etcd là gì?</h3><p>etcd là distributed, reliable key-value store sử dụng Raft consensus algorithm. Được CoreOS phát triển và hiện là project của CNCF (Cloud Native Computing Foundation).</p><p><strong>Đặc điểm chính</strong>:</p><ul><li>🔐&nbsp;<strong>Strongly consistent</strong>: Đảm bảo consistency với Raft</li><li>🚀&nbsp;<strong>Fast</strong>: Sub-millisecond latency cho reads</li><li>🔄&nbsp;<strong>Distributed</strong>: Chạy multi-node cluster với quorum</li><li>📡&nbsp;<strong>Watch mechanism</strong>: Real-time notifications cho changes</li><li>🔒&nbsp;<strong>TTL support</strong>: Automatic key expiration (cho leader locks)</li><li>🌐&nbsp;<strong>gRPC + HTTP API</strong>: Easy integration</li></ul><h3 id="12-etcd-trong-patroni-architecture">1.2. etcd trong Patroni Architecture</h3><pre><code>┌──────────────────────────────────┐
│      etcd Cluster (3 nodes)      │
│  ┌─────┐   ┌─────┐   ┌─────┐    │
│  │etcd1│───│etcd2│───│etcd3│    │
│  └──┬──┘   └──┬──┘   └──┬──┘    │
│     │         │         │         │
│     └─────────┴─────────┘         │
│        Raft Consensus             │
└──────────────────────────────────┘
         │        │        │
    ┌────┴────┐  │  ┌─────┴─────┐
    ▼         ▼  ▼  ▼           ▼
┌─────────┐ ┌─────────┐ ┌─────────┐
│Patroni 1│ │Patroni 2│ │Patroni 3│
└─────────┘ └─────────┘ └─────────┘
</code></pre><p><strong>etcd lưu trữ</strong>:</p><ul><li><code>/service/postgres/leader</code>: Leader lock (TTL 30s)</li><li><code>/service/postgres/members/</code>: Node information</li><li><code>/service/postgres/config</code>: Cluster configuration</li><li><code>/service/postgres/initialize</code>: Bootstrap state</li><li><code>/service/postgres/failover</code>: Failover instructions</li></ul><h2 id="2-download-v%C3%A0-c%C3%A0i-%C4%91%E1%BA%B7t-etcd">2. Download và cài đặt etcd</h2><h3 id="21-architecture-considerations">2.1. Architecture considerations</h3><p><strong>Cluster size recommendations</strong>:</p><ul><li><strong>3 nodes</strong>: Khuyến nghị cho production, tolerate 1 failure</li><li><strong>5 nodes</strong>: High availability, tolerate 2 failures</li><li><strong>7+ nodes</strong>: Overkill cho hầu hết use cases</li></ul><p><strong>Deployment topology</strong>:</p><pre><code>Option 1: etcd on separate servers (Recommended)
┌──────────┐  ┌──────────┐  ┌──────────┐
│  etcd1   │  │  etcd2   │  │  etcd3   │
└──────────┘  └──────────┘  └──────────┘
      ▲             ▲             ▲
      └─────────────┴─────────────┘
      │             │             │
┌──────────┐  ┌──────────┐  ┌──────────┐
│Patroni 1 │  │Patroni 2 │  │Patroni 3 │
│  + PG    │  │  + PG    │  │  + PG    │
└──────────┘  └──────────┘  └──────────┘

Option 2: etcd co-located (For labs/dev)
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   etcd1      │  │   etcd2      │  │   etcd3      │
│   Patroni 1  │  │   Patroni 2  │  │   Patroni 3  │
│   PG         │  │   PG         │  │   PG         │
└──────────────┘  └──────────────┘  └──────────────┘
</code></pre><p>Lab này sử dụng&nbsp;<strong>Option 2</strong>&nbsp;(co-located) để tiết kiệm resources.</p><h3 id="22-c%C3%A0i-%C4%91%E1%BA%B7t-etcd-tr%C3%AAn-ubuntudebian">2.2. Cài đặt etcd trên Ubuntu/Debian</h3><p>Thực hiện trên&nbsp;<strong>TẤT CẢ 3 nodes</strong>.</p><h4 id="b%C6%B0%E1%BB%9Bc-1-download-etcd-binary">Bước 1: Download etcd binary</h4><pre><code class="language-bash"># Set version
ETCD_VER=v3.5.11

# Download
wget https://github.com/etcd-io/etcd/releases/download/${ETCD_VER}/etcd-${ETCD_VER}-linux-amd64.tar.gz

# Extract
tar xzvf etcd-${ETCD_VER}-linux-amd64.tar.gz

# Move binaries to PATH
sudo mv etcd-${ETCD_VER}-linux-amd64/etcd /usr/local/bin/
sudo mv etcd-${ETCD_VER}-linux-amd64/etcdctl /usr/local/bin/
sudo mv etcd-${ETCD_VER}-linux-amd64/etcdutl /usr/local/bin/

# Verify
etcd --version
etcdctl version
</code></pre><p>Output:</p><pre><code>etcd Version: 3.5.11
Git SHA: ...
Go Version: go1.20.12
</code></pre><h4 id="b%C6%B0%E1%BB%9Bc-2-t%E1%BA%A1o-etcd-user-v%C3%A0-directories">Bước 2: Tạo etcd user và directories</h4><pre><code class="language-bash"># Tạo user
sudo useradd -r -s /bin/false etcd

# Tạo directories
sudo mkdir -p /var/lib/etcd
sudo mkdir -p /etc/etcd

# Set ownership
sudo chown -R etcd:etcd /var/lib/etcd
sudo chown -R etcd:etcd /etc/etcd
</code></pre><h3 id="23-c%C3%A0i-%C4%91%E1%BA%B7t-tr%C3%AAn-centosrhel">2.3. Cài đặt trên CentOS/RHEL</h3><pre><code class="language-bash"># Download (same as Ubuntu)
ETCD_VER=v3.5.11
wget https://github.com/etcd-io/etcd/releases/download/${ETCD_VER}/etcd-${ETCD_VER}-linux-amd64.tar.gz

tar xzvf etcd-${ETCD_VER}-linux-amd64.tar.gz

sudo mv etcd-${ETCD_VER}-linux-amd64/etcd* /usr/local/bin/

# Create user and directories
sudo useradd -r -s /sbin/nologin etcd
sudo mkdir -p /var/lib/etcd /etc/etcd
sudo chown -R etcd:etcd /var/lib/etcd /etc/etcd
</code></pre><h2 id="3-c%E1%BA%A5u-h%C3%ACnh-etcd-cluster-3-nodes">3. Cấu hình etcd cluster 3 nodes</h2><h3 id="31-network-topology">3.1. Network topology</h3><pre><code>node1 (etcd1): 10.0.1.11:2379,2380
node2 (etcd2): 10.0.1.12:2379,2380
node3 (etcd3): 10.0.1.13:2379,2380

Port 2379: Client communication (Patroni connects here)
Port 2380: Peer communication (etcd cluster internal)
</code></pre><h3 id="32-t%E1%BA%A1o-configuration-file">3.2. Tạo configuration file</h3><h4 id="node-1-100111etcetcdetcdconf">Node 1 (10.0.1.11) - /etc/etcd/etcd.conf</h4><pre><code class="language-bash"># Member name
ETCD_NAME="etcd1"

# Data directory
ETCD_DATA_DIR="/var/lib/etcd/etcd1.etcd"

# Listen URLs
ETCD_LISTEN_PEER_URLS="http://10.0.1.11:2380"
ETCD_LISTEN_CLIENT_URLS="http://10.0.1.11:2379,http://127.0.0.1:2379"

# Advertise URLs (what other nodes use to connect)
ETCD_INITIAL_ADVERTISE_PEER_URLS="http://10.0.1.11:2380"
ETCD_ADVERTISE_CLIENT_URLS="http://10.0.1.11:2379"

# Cluster configuration
ETCD_INITIAL_CLUSTER="etcd1=http://10.0.1.11:2380,etcd2=http://10.0.1.12:2380,etcd3=http://10.0.1.13:2380"
ETCD_INITIAL_CLUSTER_STATE="new"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster-patroni"

# Logging
ETCD_LOG_LEVEL="info"
</code></pre><h4 id="node-2-100112etcetcdetcdconf">Node 2 (10.0.1.12) - /etc/etcd/etcd.conf</h4><pre><code class="language-bash">ETCD_NAME="etcd2"
ETCD_DATA_DIR="/var/lib/etcd/etcd2.etcd"

ETCD_LISTEN_PEER_URLS="http://10.0.1.12:2380"
ETCD_LISTEN_CLIENT_URLS="http://10.0.1.12:2379,http://127.0.0.1:2379"

ETCD_INITIAL_ADVERTISE_PEER_URLS="http://10.0.1.12:2380"
ETCD_ADVERTISE_CLIENT_URLS="http://10.0.1.12:2379"

ETCD_INITIAL_CLUSTER="etcd1=http://10.0.1.11:2380,etcd2=http://10.0.1.12:2380,etcd3=http://10.0.1.13:2380"
ETCD_INITIAL_CLUSTER_STATE="new"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster-patroni"

ETCD_LOG_LEVEL="info"
</code></pre><h4 id="node-3-100113etcetcdetcdconf">Node 3 (10.0.1.13) - /etc/etcd/etcd.conf</h4><pre><code class="language-bash">ETCD_NAME="etcd3"
ETCD_DATA_DIR="/var/lib/etcd/etcd3.etcd"

ETCD_LISTEN_PEER_URLS="http://10.0.1.13:2380"
ETCD_LISTEN_CLIENT_URLS="http://10.0.1.13:2379,http://127.0.0.1:2379"

ETCD_INITIAL_ADVERTISE_PEER_URLS="http://10.0.1.13:2380"
ETCD_ADVERTISE_CLIENT_URLS="http://10.0.1.13:2379"

ETCD_INITIAL_CLUSTER="etcd1=http://10.0.1.11:2380,etcd2=http://10.0.1.12:2380,etcd3=http://10.0.1.13:2380"
ETCD_INITIAL_CLUSTER_STATE="new"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster-patroni"

ETCD_LOG_LEVEL="info"
</code></pre><h3 id="33-gi%E1%BA%A3i-th%C3%ADch-c%C3%A1c-parameters">3.3. Giải thích các parameters</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Parameter</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Ý nghĩa</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ETCD_NAME</code></td><td style="padding: 5px 10px;">Tên unique của member trong cluster</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ETCD_DATA_DIR</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Thư mục lưu data</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ETCD_LISTEN_PEER_URLS</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">URL listen cho peer communication (port 2380)</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ETCD_LISTEN_CLIENT_URLS</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">URL listen cho client connections (port 2379)</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ETCD_INITIAL_ADVERTISE_PEER_URLS</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">URL để các peers khác connect đến</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ETCD_ADVERTISE_CLIENT_URLS</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">URL để clients connect đến</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ETCD_INITIAL_CLUSTER</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Danh sách tất cả members khi bootstrap</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ETCD_INITIAL_CLUSTER_STATE</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">new</code><span>&nbsp;</span>(first time) hoặc<span>&nbsp;</span><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">existing</code><span>&nbsp;</span>(add member)</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ETCD_INITIAL_CLUSTER_TOKEN</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Token unique cho cluster (tránh nhầm lẫn)</td></tr></tbody></table>
<!--kg-card-end: html-->
<h2 id="4-t%E1%BA%A1o-systemd-service">4. Tạo systemd service</h2><p>Tạo file&nbsp;<code>/etc/systemd/system/etcd.service</code>&nbsp;trên&nbsp;<strong>TẤT CẢ 3 nodes</strong>:</p><pre><code class="language-ini">[Unit]
Description=etcd distributed reliable key-value store
Documentation=https://etcd.io/docs/
After=network.target
Wants=network-online.target

[Service]
Type=notify
User=etcd
Group=etcd

# Load environment variables from config file
EnvironmentFile=/etc/etcd/etcd.conf

# Start etcd with config
ExecStart=/usr/local/bin/etcd

# Restart on failure
Restart=on-failure
RestartSec=5

# Limits
LimitNOFILE=65536
LimitNPROC=65536

# Security
NoNewPrivileges=true
ProtectHome=true
ProtectSystem=strict
ReadWritePaths=/var/lib/etcd

[Install]
WantedBy=multi-user.target
</code></pre><p><strong>Reload systemd và enable service</strong>:</p><pre><code class="language-bash">sudo systemctl daemon-reload
sudo systemctl enable etcd
</code></pre><h2 id="5-kh%E1%BB%9Fi-%C4%91%E1%BB%99ng-etcd-cluster">5. Khởi động etcd cluster</h2><h3 id="51-start-etcd-tr%C3%AAn-c%C3%A1c-nodes">5.1. Start etcd trên các nodes</h3><p><strong>Quan trọng</strong>: Khởi động ĐỒNG THỜI hoặc trong vòng 30 giây để cluster có thể form.</p><p><strong>Terminal 1 (node1)</strong>:</p><pre><code class="language-bash">sudo systemctl start etcd
sudo systemctl status etcd
</code></pre><p><strong>Terminal 2 (node2)</strong>:</p><pre><code class="language-bash">sudo systemctl start etcd
sudo systemctl status etcd
</code></pre><p><strong>Terminal 3 (node3)</strong>:</p><pre><code class="language-bash">sudo systemctl start etcd
sudo systemctl status etcd
</code></pre><h3 id="52-ki%E1%BB%83m-tra-logs">5.2. Kiểm tra logs</h3><pre><code class="language-bash">sudo journalctl -u etcd -f
</code></pre><p><strong>Successful startup logs</strong>:</p><pre><code>... etcd1 became leader at term 2
... established a TCP streaming connection with peer etcd2
... established a TCP streaming connection with peer etcd3
... ready to serve client requests
</code></pre><h2 id="6-ki%E1%BB%83m-tra-health-c%E1%BB%A7a-etcd-cluster">6. Kiểm tra health của etcd cluster</h2><h3 id="61-check-cluster-members">6.1. Check cluster members</h3><pre><code class="language-bash"># Từ bất kỳ node nào
etcdctl member list

# Output:
# 8e9e05c52164694d, started, etcd1, http://10.0.1.11:2380, http://10.0.1.11:2379, false
# 91bc3c398fb3c146, started, etcd2, http://10.0.1.12:2380, http://10.0.1.12:2379, false
# fd422379fda50e48, started, etcd3, http://10.0.1.13:2380, http://10.0.1.13:2379, false
</code></pre><h3 id="62-check-cluster-health">6.2. Check cluster health</h3><pre><code class="language-bash">etcdctl endpoint health --cluster

# Output:
# http://10.0.1.11:2379 is healthy: successfully committed proposal: took = 2.345678ms
# http://10.0.1.12:2379 is healthy: successfully committed proposal: took = 1.234567ms
# http://10.0.1.13:2379 is healthy: successfully committed proposal: took = 2.123456ms
</code></pre><h3 id="63-check-endpoint-status">6.3. Check endpoint status</h3><pre><code class="language-bash">etcdctl endpoint status --cluster --write-out=table

# Output:
# +------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
# |    ENDPOINT      |        ID        | VERSION | DB SIZE | IS LEADER | IS LEARNER | RAFT TERM | RAFT INDEX | RAFT APPLIED INDEX | ERRORS |
# +------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
# | 10.0.1.11:2379  | 8e9e05c52164694d |  3.5.11 |   20 kB |      true |      false |         2 |          8 |                  8 |        |
# | 10.0.1.12:2379  | 91bc3c398fb3c146 |  3.5.11 |   20 kB |     false |      false |         2 |          8 |                  8 |        |
# | 10.0.1.13:2379  | fd422379fda50e48 |  3.5.11 |   20 kB |     false |      false |         2 |          8 |                  8 |        |
# +------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
</code></pre><p><strong>Giải thích output</strong>:</p><ul><li><code>IS LEADER</code>: etcd1 đang là leader</li><li><code>RAFT TERM</code>: Election term (tăng mỗi lần election)</li><li><code>RAFT INDEX</code>: Number of log entries</li></ul><h2 id="7-etcdctl-commands-c%C6%A1-b%E1%BA%A3n">7. etcdctl commands cơ bản</h2><h3 id="71-set-environment-optional">7.1. Set environment (optional)</h3><pre><code class="language-bash">export ETCDCTL_API=3
export ETCDCTL_ENDPOINTS=http://10.0.1.11:2379,http://10.0.1.12:2379,http://10.0.1.13:2379

# Thêm vào ~/.bashrc để persistent
echo 'export ETCDCTL_API=3' &gt;&gt; ~/.bashrc
echo 'export ETCDCTL_ENDPOINTS=http://10.0.1.11:2379,http://10.0.1.12:2379,http://10.0.1.13:2379' &gt;&gt; ~/.bashrc
</code></pre><h3 id="72-basic-operations">7.2. Basic operations</h3><h4 id="putgetdelete-keys">Put/Get/Delete keys</h4><pre><code class="language-bash"># Write a key
etcdctl put /test/key1 "Hello etcd"

# Read a key
etcdctl get /test/key1
# Output:
# /test/key1
# Hello etcd

# Get with details
etcdctl get /test/key1 --write-out=json

# Delete a key
etcdctl del /test/key1
</code></pre><h4 id="list-keys-with-prefix">List keys with prefix</h4><pre><code class="language-bash"># Put some test keys
etcdctl put /service/postgres/test1 "value1"
etcdctl put /service/postgres/test2 "value2"

# List all keys under /service/postgres/
etcdctl get /service/postgres/ --prefix

# Output:
# /service/postgres/test1
# value1
# /service/postgres/test2
# value2
</code></pre><h4 id="watch-for-changes">Watch for changes</h4><pre><code class="language-bash"># Terminal 1: Watch for changes
etcdctl watch /service/postgres/ --prefix

# Terminal 2: Make changes
etcdctl put /service/postgres/leader "node1"

# Terminal 1 sẽ hiển thị:
# PUT
# /service/postgres/leader
# node1
</code></pre><h4 id="ttl-keys-d%C3%B9ng-cho-leader-locks">TTL keys (dùng cho leader locks)</h4><pre><code class="language-bash"># Create a lease with 30 seconds TTL
etcdctl lease grant 30
# Output: lease 7587869125995748410 granted with TTL(30s)

# Put key with lease
etcdctl put /test/ttl-key "value" --lease=7587869125995748410

# Key sẽ tự động xóa sau 30 giây

# Keep lease alive
etcdctl lease keep-alive 7587869125995748410
</code></pre><h3 id="73-advanced-operations">7.3. Advanced operations</h3><h4 id="transaction-atomic-operations">Transaction (atomic operations)</h4><pre><code class="language-bash"># Atomic compare-and-swap
etcdctl txn &lt;&lt;&lt; '
compare:
value("/test/key1") = "old_value"

success requests:
put /test/key1 "new_value"

failure requests:
get /test/key1
'
</code></pre><h4 id="snapshot-backup">Snapshot backup</h4><pre><code class="language-bash"># Create snapshot
etcdctl snapshot save /tmp/etcd-backup.db

# Verify snapshot
etcdctl snapshot status /tmp/etcd-backup.db --write-out=table
</code></pre><h2 id="8-lab-setup-etcd-cluster-ho%C3%A0n-ch%E1%BB%89nh">8. Lab: Setup etcd cluster hoàn chỉnh</h2><h3 id="81-lab-objectives">8.1. Lab objectives</h3><ul><li>✅ Cài đặt etcd trên 3 nodes</li><li>✅ Cấu hình cluster</li><li>✅ Verify cluster health</li><li>✅ Test basic operations</li><li>✅ Simulate node failure</li></ul><h3 id="82-step-by-step-lab-guide">8.2. Step-by-step lab guide</h3><h4 id="1-c%C3%A0i-%C4%91%E1%BA%B7t-etcd-tr%C3%AAn-t%E1%BA%A5t-c%E1%BA%A3-nodes">1. Cài đặt etcd trên tất cả nodes</h4><p>Đã thực hiện ở Section 2.</p><h4 id="2-t%E1%BA%A1o-config-files">2. Tạo config files</h4><p>Đã thực hiện ở Section 3.</p><h4 id="3-t%E1%BA%A1o-systemd-service">3. Tạo systemd service</h4><p>Đã thực hiện ở Section 4.</p><h4 id="4-start-cluster">4. Start cluster</h4><pre><code class="language-bash"># Trên cả 3 nodes (đồng thời)
sudo systemctl start etcd

# Check status
sudo systemctl status etcd
</code></pre><h4 id="5-verify-cluster">5. Verify cluster</h4><pre><code class="language-bash"># Member list
etcdctl member list

# Health check
etcdctl endpoint health --cluster

# Status
etcdctl endpoint status --cluster --write-out=table
</code></pre><h4 id="6-test-writeread">6. Test write/read</h4><pre><code class="language-bash"># On node1: Write
etcdctl put /test/mykey "Hello from etcd cluster"

# On node2: Read
etcdctl get /test/mykey
# Should see: Hello from etcd cluster

# On node3: Verify
etcdctl get /test/mykey
# Should see: Hello from etcd cluster
</code></pre><h4 id="7-test-leader-election">7. Test leader election</h4><pre><code class="language-bash"># Identify current leader
etcdctl endpoint status --cluster --write-out=table
# Note which node IS LEADER = true

# Stop leader node
sudo systemctl stop etcd  # On leader node

# Wait 5-10 seconds

# Check from another node
etcdctl endpoint status --cluster --write-out=table
# New leader should be elected

# Restart stopped node
sudo systemctl start etcd  # On stopped node

# Verify rejoined
etcdctl member list
</code></pre><h4 id="8-test-data-persistence">8. Test data persistence</h4><pre><code class="language-bash"># Write some data
etcdctl put /persistent/key "This should survive restart"

# Restart ALL nodes (one by one)
sudo systemctl restart etcd

# Verify data
etcdctl get /persistent/key
# Should still see: This should survive restart
</code></pre><h3 id="83-troubleshooting-common-issues">8.3. Troubleshooting common issues</h3><h4 id="issue-1-cluster-wont-form">Issue 1: Cluster won't form</h4><pre><code class="language-bash"># Symptom
journalctl -u etcd -n 50
# Error: "request cluster ID mismatch"

# Solution: Clear data and restart
sudo systemctl stop etcd
sudo rm -rf /var/lib/etcd/*
sudo systemctl start etcd
</code></pre><h4 id="issue-2-cannot-connect-to-etcd">Issue 2: Cannot connect to etcd</h4><pre><code class="language-bash"># Check if etcd is listening
sudo netstat -tlnp | grep etcd
# Should see ports 2379 and 2380

# Check firewall
sudo firewall-cmd --list-all  # CentOS/RHEL
sudo ufw status                # Ubuntu

# Add firewall rules if needed
sudo ufw allow 2379/tcp
sudo ufw allow 2380/tcp
</code></pre><h4 id="issue-3-node-wont-join-cluster">Issue 3: Node won't join cluster</h4><pre><code class="language-bash"># Check ETCD_INITIAL_CLUSTER in config
cat /etc/etcd/etcd.conf | grep INITIAL_CLUSTER

# Verify network connectivity
ping 10.0.1.11
telnet 10.0.1.11 2380
</code></pre><h4 id="issue-4-split-brain-or-multiple-leaders">Issue 4: Split-brain or multiple leaders</h4><pre><code class="language-bash"># Check cluster status
etcdctl endpoint status --cluster --write-out=table

# If multiple leaders (shouldn't happen with proper setup):
# 1. Stop all etcd instances
sudo systemctl stop etcd  # On all nodes

# 2. Clear data on all nodes
sudo rm -rf /var/lib/etcd/*

# 3. Restart cluster (bootstrap again)
# Start all nodes within 30 seconds
</code></pre><h2 id="9-performance-tuning">9. Performance tuning</h2><h3 id="91-etcd-tuning-parameters">9.1. etcd tuning parameters</h3><pre><code class="language-bash"># Add to /etc/etcd/etcd.conf

# Heartbeat interval (default: 100ms)
ETCD_HEARTBEAT_INTERVAL="100"

# Election timeout (default: 1000ms)
ETCD_ELECTION_TIMEOUT="1000"

# Snapshot count (default: 10000)
# Compact and snapshot after this many transactions
ETCD_SNAPSHOT_COUNT="10000"

# Quota backend bytes (default: 2GB)
# Max database size
ETCD_QUOTA_BACKEND_BYTES="2147483648"
</code></pre><h3 id="92-monitoring-etcd">9.2. Monitoring etcd</h3><p><strong>Key metrics to monitor</strong>:</p><ul><li>Latency (99th percentile &lt; 50ms)</li><li>Disk fsync duration (&lt; 10ms)</li><li>Leader changes (should be rare)</li><li>Database size</li><li>Failed proposals</li></ul><p><strong>Check metrics</strong>:</p><pre><code class="language-bash">curl http://10.0.1.11:2379/metrics

# Key metrics:
# etcd_server_has_leader
# etcd_server_leader_changes_seen_total
# etcd_disk_backend_commit_duration_seconds
# etcd_network_peer_round_trip_time_seconds
</code></pre><h2 id="10-t%E1%BB%95ng-k%E1%BA%BFt">10. Tổng kết</h2><h3 id="key-takeaways">Key Takeaways</h3><p>✅&nbsp;<strong>etcd cluster</strong>: 3-node cluster cho production HA</p><p>✅&nbsp;<strong>Ports</strong>: 2379 (client), 2380 (peer)</p><p>✅&nbsp;<strong>Raft consensus</strong>: Automatic leader election và data replication</p><p>✅&nbsp;<strong>Quorum</strong>: Cần 2/3 nodes để cluster hoạt động</p><p>✅&nbsp;<strong>TTL keys</strong>: Dùng cho Patroni leader locks</p><p>✅&nbsp;<strong>etcdctl</strong>: CLI tool để quản lý và troubleshoot</p><h3 id="checklist-sau-lab">Checklist sau Lab</h3><ul><li>&nbsp;etcd cluster 3 nodes đang chạy</li><li>&nbsp;<code>etcdctl member list</code>&nbsp;hiển thị đầy đủ 3 members</li><li>&nbsp;<code>etcdctl endpoint health --cluster</code>&nbsp;tất cả healthy</li><li>&nbsp;Có 1 leader và 2 followers</li><li>&nbsp;etcd service enabled và sẽ auto-start khi reboot</li><li>&nbsp;Firewall cho phép ports 2379 và 2380</li></ul><h3 id="ki%E1%BA%BFn-tr%C3%BAc-hi%E1%BB%87n-t%E1%BA%A1i">Kiến trúc hiện tại</h3><pre><code class="language-text">✅ 3 VMs prepared (Bài 4)
✅ PostgreSQL 15 installed (Bài 5)
✅ etcd cluster running (Bài 6)

Next: Cài đặt Patroni và bootstrap HA cluster
</code></pre><h3 id="chu%E1%BA%A9n-b%E1%BB%8B-cho-b%C3%A0i-7">Chuẩn bị cho Bài 7</h3><p>Bài tiếp theo sẽ cài đặt Patroni và tích hợp với etcd cluster đã setup.</p>
