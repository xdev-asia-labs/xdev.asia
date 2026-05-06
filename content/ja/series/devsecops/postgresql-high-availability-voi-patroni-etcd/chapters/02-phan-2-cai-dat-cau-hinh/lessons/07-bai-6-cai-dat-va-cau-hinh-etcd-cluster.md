---
id: 019c9617-fb71-7108-9898-0733dd6d13bf
title: 'レッスン 6: etcd クラスターのインストールと構成'
slug: bai-6-cai-dat-va-cau-hinh-etcd-cluster
description: etcd クラスター 3 ノードをダウンロード、インストール、構成し、systemd サービスを作成し、etcdctl コマンドで正常性をチェックします。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 6
section_title: 'パート 2: インストールと構成'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: Patroni と etcd による PostgreSQL の高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — レッスン 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 6: etcd クラスターのインストールと構成</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Patroni と PostgreSQL の高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: インストールと構成</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標_</h2><p>このレッスンの後、次のことを学びます:</p><ul><li>Patroni アーキテクチャにおける etcd の役割を理解する_</li><li>etcd を 3 ノードにダウンロードしてインストールする</li><li>Raft で etcd クラスターを構成するコンセンサス_</li><li>etcd の systemd サービスを作成_</li><li>etcd クラスターの正常性を確認_</li><li>基本的な etcdctl コマンドのバージョンを使用</li></ul><h2 id="1-gi%E1%BB%9Bi-thi%E1%BB%87u-etcd">1。 etcd_</h2><h3 id="11-etcd-l%C3%A0-g%C3%AC">1.1 の紹介。 etcd とは何ですか?</h3><p>etcd は、Raft コンセンサス アルゴリズムを使用した、信頼性の高い分散型キー/値ストアです。 CoreOS によって開発され、現在は CNCF (Cloud Native Computing Foundation) のプロジェクトです。</p><p><strong>主な機能</strong>:</p><ul><li>🔐&nbsp;<strong>強い一貫性</strong>: との一貫性を確保します。 Raft</li><li>🚀&nbsp;<strong>Fast</strong>: ミリ秒未満の読み取りレイテンシ</li><li>🔄&nbsp;<strong>分散</strong>: マルチノード クラスターを実行クォーラム</li><li>📡&nbsp;<strong>監視メカニズム</strong>: 変更のリアルタイム通知</li><li>🔒&nbsp;<strong>TTL サポート</strong>: 自動キー有効期限切れ (リーダー用)ロック)</li><li>🌐&nbsp;<strong>gRPC + HTTP API</strong>: 簡単な統合</li></ul><h3 id="12-etcd-trong-patroni-architecture">1.2。 Patroni アーキテクチャの etcd</h3><pre><code>┌──────────────────────────────────┐
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
</code></pre><p><strong>etcd 保存されたアーカイブ</strong>:</p><ul><li><code>/service/postgres/leader</code>: リーダー ロック (TTL) 30代)</li><li><code>/service/postgres/members/</code>: ノード情報_</li><li><code>/service/postgres/config</code>: クラスター構成_</li><li><code>/service/postgres/initialize</code>: ブートストラップ状態_</li><li><code>/service/postgres/failover</code>: フェイルオーバー手順_</li></ul><h2 id="2-download-v%C3%A0-c%C3%A0i-%C4%91%E1%BA%B7t-etcd">2. etcd</h2><h3 id="21-architecture-considerations">2.1 をダウンロードしてインストールします。アーキテクチャに関する考慮事項</h3><p><strong>クラスター サイズの推奨事項</strong>:</p><ul><li><strong>3 ノード</strong>: 運用環境の推奨事項、許容値 1失敗</li><li><strong>5 ノード</strong>: 高可用性、2 つの障害を許容</li><li><strong>7+ ノード</strong>: ほとんどの用途には過剰ですケース_</li></ul><p><strong>導入トポロジ</strong>:___HTMLTAG_172__CODEBLOCK_1___<p>このラボでは<strong>オプション 2</strong>(同じ場所)を使用して、リソースを保存します。</p><h3 id="22-c%C3%A0i-%C4%91%E1%BA%B7t-etcd-tr%C3%AAn-ubuntudebian">2.2。 Ubuntu/Debian に etcd をインストール</h3><p><strong>すべての 3 ノードで実行</strong>.</p><h4 id="b%C6%B0%E1%BB%9Bc-1-download-etcd-binary">ステップ 1: etcd b をダウンロードするinary</h4><pre><code class="language-bash"># Set version
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
</code></pre><p>出力:</p><pre><code>etcd Version: 3.5.11
Git SHA: ...
Go Version: go1.20.12
</code></pre><h4 id="b%C6%B0%E1%BB%9Bc-2-t%E1%BA%A1o-etcd-user-v%C3%A0-directories">ステップ 2: etcd ユーザーとディレクトリを作成_</h4><pre><code class="language-bash"># Tạo user
sudo useradd -r -s /bin/false etcd

# Tạo directories
sudo mkdir -p /var/lib/etcd
sudo mkdir -p /etc/etcd

# Set ownership
sudo chown -R etcd:etcd /var/lib/etcd
sudo chown -R etcd:etcd /etc/etcd
</code></pre><h3 id="23-c%C3%A0i-%C4%91%E1%BA%B7t-tr%C3%AAn-centosrhel">2.3。 CentOS/RHEL</h3><pre><code class="language-bash"># Download (same as Ubuntu)
ETCD_VER=v3.5.11
wget https://github.com/etcd-io/etcd/releases/download/${ETCD_VER}/etcd-${ETCD_VER}-linux-amd64.tar.gz

tar xzvf etcd-${ETCD_VER}-linux-amd64.tar.gz

sudo mv etcd-${ETCD_VER}-linux-amd64/etcd* /usr/local/bin/

# Create user and directories
sudo useradd -r -s /sbin/nologin etcd
sudo mkdir -p /var/lib/etcd /etc/etcd
sudo chown -R etcd:etcd /var/lib/etcd /etc/etcd
</code></pre><h2 id="3-c%E1%BA%A5u-h%C3%ACnh-etcd-cluster-3-nodes">3 にインストールします。 etcd クラスター 3 ノードを構成</h2><h3 id="31-network-topology">3.1。ネットワーク トポロジ_</h3><pre><code>node1 (etcd1): 10.0.1.11:2379,2380
node2 (etcd2): 10.0.1.12:2379,2380
node3 (etcd3): 10.0.1.13:2379,2380

Port 2379: Client communication (Patroni connects here)
Port 2380: Peer communication (etcd cluster internal)
</code></pre><h3 id="32-t%E1%BA%A1o-configuration-file">3.2。構成ファイルの作成_</h3><h4 id="node-1-100111etcetcdetcdconf">ノード 1 (10.0.1.11) - /etc/etcd/etcd.conf</h4><pre><code class="language-bash"># Member name
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
</code></pre><h4 id="node-2-100112etcetcdetcdconf">ノード 2 (10.0.1.12) - /etc/etcd/etcd.conf</h4><pre><code class="language-bash">ETCD_NAME="etcd2"
ETCD_DATA_DIR="/var/lib/etcd/etcd2.etcd"

ETCD_LISTEN_PEER_URLS="http://10.0.1.12:2380"
ETCD_LISTEN_CLIENT_URLS="http://10.0.1.12:2379,http://127.0.0.1:2379"

ETCD_INITIAL_ADVERTISE_PEER_URLS="http://10.0.1.12:2380"
ETCD_ADVERTISE_CLIENT_URLS="http://10.0.1.12:2379"

ETCD_INITIAL_CLUSTER="etcd1=http://10.0.1.11:2380,etcd2=http://10.0.1.12:2380,etcd3=http://10.0.1.13:2380"
ETCD_INITIAL_CLUSTER_STATE="new"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster-patroni"

ETCD_LOG_LEVEL="info"
</code></pre><h4 id="node-3-100113etcetcdetcdconf">ノード 3 (10.0.1.13) - /etc/etcd/etcd.conf</h4><pre><code class="language-bash">ETCD_NAME="etcd3"
ETCD_DATA_DIR="/var/lib/etcd/etcd3.etcd"

ETCD_LISTEN_PEER_URLS="http://10.0.1.13:2380"
ETCD_LISTEN_CLIENT_URLS="http://10.0.1.13:2379,http://127.0.0.1:2379"

ETCD_INITIAL_ADVERTISE_PEER_URLS="http://10.0.1.13:2380"
ETCD_ADVERTISE_CLIENT_URLS="http://10.0.1.13:2379"

ETCD_INITIAL_CLUSTER="etcd1=http://10.0.1.11:2380,etcd2=http://10.0.1.12:2380,etcd3=http://10.0.1.13:2380"
ETCD_INITIAL_CLUSTER_STATE="new"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster-patroni"

ETCD_LOG_LEVEL="info"
</code></pre><h3 id="33-gi%E1%BA%A3i-th%C3%ADch-c%C3%A1c-parameters">3.3。パラメータの説明</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">パラメータ</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">イタリア語意味_</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ETCD_NAME_</code></td><td style="padding: 5px 10px;">メンバーの一意の名前クラスター_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">_ETCD_DATA_DIR</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">ディレクトリを保存データ_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ETCD_LISTEN_PEER_URLS</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">URL はピア通信をリッスンします (ポート2380)</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ETCD_LISTEN_CLIENT_URLS</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">URL クライアント接続をリッスンします (ポート2379)_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ETCD_INITIAL_ADVERTISE_PEER_URLS</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">他のピアが接続するための URL to</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">_ETCD_ADVERTISE_CLIENT_URLS</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">クライアントが接続するための URL to_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">_ETCD_INITIAL_CLUSTER_</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">全メンバーのリストブートストラップ</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ETCD_INITIAL_CLUSTER_STATE___HTML TAG_275___</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">新規</code><span>&nbsp;</span>(初回)または<span>&nbsp;___HTMLTAG_283__HTMLTAG_284___既存</code><span>&nbsp;</span>(追加member)</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">_ETCD_INITIAL_CLUSTER_TOKEN_</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">一意のクラスターのトークン (混乱を避ける)混合)_</td></tr></tbody></table>
<!--kg-card-end: html-->
<h2 id="4-t%E1%BA%A1o-systemd-service">4. systemd サービスを作成</h2><p>ファイルを作成<code>/etc/systemd/system/etcd.service</code>&nbsp;on&nbsp;<strong>ALL 3ノード</strong>:</p><pre><code class="language-ini">[Unit]
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
</code></pre><p><strong>systemd をリロードし、サービスを有効にします</strong>:</p><pre><code class="language-bash">sudo systemctl daemon-reload
sudo systemctl enable etcd
</code></pre><h2 id="5-kh%E1%BB%9Fi-%C4%91%E1%BB%99ng-etcd-cluster">5。 etcd クラスター</h2><h3 id="51-start-etcd-tr%C3%AAn-c%C3%A1c-nodes">5.1 を開始します。ノードで etcd を開始_</h3><p><strong>重要</strong>: クラスターを形成できるように、同時にまたは 30 秒以内に開始してください。</p><p><strong>ターミナル 1 (ノード 1)</strong>:</p><pre><code class="language-bash">sudo systemctl start etcd
sudo systemctl status etcd
</code></pre><p><strong>ターミナル2 (ノード 2)</strong>:</p><pre><code class="language-bash">sudo systemctl start etcd
sudo systemctl status etcd
</code></pre><p><strong>ターミナル 3 (ノード 3)</strong>:___HTMLTAG_332__CODEBLOCK_14___<h3 id="52-ki%E1%BB%83m-tra-logs">5.2。ログ_</h3><pre><code class="language-bash">sudo journalctl -u etcd -f
</code></pre><p><strong>成功した起動ログ</strong>:_</p><pre><code>... etcd1 became leader at term 2
... established a TCP streaming connection with peer etcd2
... established a TCP streaming connection with peer etcd3
... ready to serve client requests
</code></pre><h2 id="6-ki%E1%BB%83m-tra-health-c%E1%BB%A7a-etcd-cluster">6を確認してください。 etcd クラスター</h2><h3 id="61-check-cluster-members">6.1 の健全性を確認します。クラスター メンバー</h3><pre><code class="language-bash"># Từ bất kỳ node nào
etcdctl member list

# Output:
# 8e9e05c52164694d, started, etcd1, http://10.0.1.11:2380, http://10.0.1.11:2379, false
# 91bc3c398fb3c146, started, etcd2, http://10.0.1.12:2380, http://10.0.1.12:2379, false
# fd422379fda50e48, started, etcd3, http://10.0.1.13:2380, http://10.0.1.13:2379, false
</code></pre><h3 id="62-check-cluster-health">6.2 を確認します。クラスターの健全性を確認します_</h3><pre><code class="language-bash">etcdctl endpoint health --cluster

# Output:
# http://10.0.1.11:2379 is healthy: successfully committed proposal: took = 2.345678ms
# http://10.0.1.12:2379 is healthy: successfully committed proposal: took = 1.234567ms
# http://10.0.1.13:2379 is healthy: successfully committed proposal: took = 2.123456ms
</code></pre><h3 id="63-check-endpoint-status">6.3。エンドポイントのステータスを確認</h3><pre><code class="language-bash">etcdctl endpoint status --cluster --write-out=table

# Output:
# +------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
# |    ENDPOINT      |        ID        | VERSION | DB SIZE | IS LEADER | IS LEARNER | RAFT TERM | RAFT INDEX | RAFT APPLIED INDEX | ERRORS |
# +------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
# | 10.0.1.11:2379  | 8e9e05c52164694d |  3.5.11 |   20 kB |      true |      false |         2 |          8 |                  8 |        |
# | 10.0.1.12:2379  | 91bc3c398fb3c146 |  3.5.11 |   20 kB |     false |      false |         2 |          8 |                  8 |        |
# | 10.0.1.13:2379  | fd422379fda50e48 |  3.5.11 |   20 kB |     false |      false |         2 |          8 |                  8 |        |
# +------------------+------------------+---------+---------+-----------+------------+-----------+------------+--------------------+--------+
</code></pre><p><strong>説明出力</strong>:</p><ul><li><code>IS LEADER_</code>: etcd1 は現在リーダー</li><li><code>RAFT TERM</code>: 選挙期間 (選挙ごとに増加)</li><li><code>RAFT INDEX</code>: ログの数エントリ_</li></ul><h2 id="7-etcdctl-commands-c%C6%A1-b%E1%BA%A3n">7。 etcdctl 基本コマンド</h2><h3 id="71-set-environment-optional">7.1。環境を設定します (オプション)</h3><pre><code class="language-bash">export ETCDCTL_API=3
export ETCDCTL_ENDPOINTS=http://10.0.1.11:2379,http://10.0.1.12:2379,http://10.0.1.13:2379

# Thêm vào ~/.bashrc để persistent
echo 'export ETCDCTL_API=3' &gt;&gt; ~/.bashrc
echo 'export ETCDCTL_ENDPOINTS=http://10.0.1.11:2379,http://10.0.1.12:2379,http://10.0.1.13:2379' &gt;&gt; ~/.bashrc
</code></pre><h3 id="72-basic-operations">7.2。基本操作_</h3><h4 id="putgetdelete-keys">_キーの入力/取得/削除</h4><pre><code class="language-bash"># Write a key
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
</code></pre><h4 id="list-keys-with-prefix">プレフィックス付きのキーのリスト_</h4><pre><code class="language-bash"># Put some test keys
etcdctl put /service/postgres/test1 "value1"
etcdctl put /service/postgres/test2 "value2"

# List all keys under /service/postgres/
etcdctl get /service/postgres/ --prefix

# Output:
# /service/postgres/test1
# value1
# /service/postgres/test2
# value2
</code></pre><h4 id="watch-for-changes">変更を監視</h4><pre><code class="language-bash"># Terminal 1: Watch for changes
etcdctl watch /service/postgres/ --prefix

# Terminal 2: Make changes
etcdctl put /service/postgres/leader "node1"

# Terminal 1 sẽ hiển thị:
# PUT
# /service/postgres/leader
# node1
</code></pre><h4 id="ttl-keys-d%C3%B9ng-cho-leader-locks">TTL キー (リーダーに使用)ロック)</h4><pre><code class="language-bash"># Create a lease with 30 seconds TTL
etcdctl lease grant 30
# Output: lease 7587869125995748410 granted with TTL(30s)

# Put key with lease
etcdctl put /test/ttl-key "value" --lease=7587869125995748410

# Key sẽ tự động xóa sau 30 giây

# Keep lease alive
etcdctl lease keep-alive 7587869125995748410
</code></pre><h3 id="73-advanced-operations">7.3。高度な操作_</h3><h4 id="transaction-atomic-operations">トランザクション (アトミック操作)_</h4><pre><code class="language-bash"># Atomic compare-and-swap
etcdctl txn &lt;&lt;&lt; '
compare:
value("/test/key1") = "old_value"

success requests:
put /test/key1 "new_value"

failure requests:
get /test/key1
'
</code></pre><h4 id="snapshot-backup">スナップショットバックアップ_</h4><pre><code class="language-bash"># Create snapshot
etcdctl snapshot save /tmp/etcd-backup.db

# Verify snapshot
etcdctl snapshot status /tmp/etcd-backup.db --write-out=table
</code></pre><h2 id="8-lab-setup-etcd-cluster-ho%C3%A0n-ch%E1%BB%89nh">8。ラボ: etcd クラスターを完全にセットアップ</h2><h3 id="81-lab-objectives">8.1。ラボの目的</h3><ul><li>✅ 3 つのノードに etcd をインストール</li><li>✅ クラスター構成</li><li>✅ クラスターの正常性を確認</li><li>✅ 基本的なテスト操作</li><li>✅ ノード障害をシミュレート</li></ul><h3 id="82-step-by-step-lab-guide">8.2。ステップバイステップのラボ ガイド</h3><h4 id="1-c%C3%A0i-%C4%91%E1%BA%B7t-etcd-tr%C3%AAn-t%E1%BA%A5t-c%E1%BA%A3-nodes">1。 etcd をすべてのノードにインストールします</h4><p>セクション 2 で完了しました。</p><h4 id="2-t%E1%BA%A1o-config-files">2。構成ファイルを作成します</h4><p>セクション 3 で完了しました。</p><h4 id="3-t%E1%BA%A1o-systemd-service">3。 systemd サービスを作成します</h4><p>セクション 4.</p><h4 id="4-start-cluster">4 で実装します。クラスター</h4><pre><code class="language-bash"># Trên cả 3 nodes (đồng thời)
sudo systemctl start etcd

# Check status
sudo systemctl status etcd
</code></pre><h4 id="5-verify-cluster">5を開始します。クラスター_</h4><pre><code class="language-bash"># Member list
etcdctl member list

# Health check
etcdctl endpoint health --cluster

# Status
etcdctl endpoint status --cluster --write-out=table
</code></pre><h4 id="6-test-writeread">6 を確認します。書き込み/読み取り_</h4><pre><code class="language-bash"># On node1: Write
etcdctl put /test/mykey "Hello from etcd cluster"

# On node2: Read
etcdctl get /test/mykey
# Should see: Hello from etcd cluster

# On node3: Verify
etcdctl get /test/mykey
# Should see: Hello from etcd cluster
</code></pre><h4 id="7-test-leader-election">7 をテストします。テスト リーダーの選出</h4><pre><code class="language-bash"># Identify current leader
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
</code></pre><h4 id="8-test-data-persistence">8。データの永続性_</h4><pre><code class="language-bash"># Write some data
etcdctl put /persistent/key "This should survive restart"

# Restart ALL nodes (one by one)
sudo systemctl restart etcd

# Verify data
etcdctl get /persistent/key
# Should still see: This should survive restart
</code></pre><h3 id="83-troubleshooting-common-issues">8.3。一般的な問題のトラブルシューティング</h3><h4 id="issue-1-cluster-wont-form">問題 1: クラスターが形成されない</h4><pre><code class="language-bash"># Symptom
journalctl -u etcd -n 50
# Error: "request cluster ID mismatch"

# Solution: Clear data and restart
sudo systemctl stop etcd
sudo rm -rf /var/lib/etcd/*
sudo systemctl start etcd
</code></pre><h4 id="issue-2-cannot-connect-to-etcd">問題 2: etcd に接続できない</h4><pre><code class="language-bash"># Check if etcd is listening
sudo netstat -tlnp | grep etcd
# Should see ports 2379 and 2380

# Check firewall
sudo firewall-cmd --list-all  # CentOS/RHEL
sudo ufw status                # Ubuntu

# Add firewall rules if needed
sudo ufw allow 2379/tcp
sudo ufw allow 2380/tcp
</code></pre><h4 id="issue-3-node-wont-join-cluster">問題 3: ノードがクラスターに参加しない</h4><pre><code class="language-bash"># Check ETCD_INITIAL_CLUSTER in config
cat /etc/etcd/etcd.conf | grep INITIAL_CLUSTER

# Verify network connectivity
ping 10.0.1.11
telnet 10.0.1.11 2380
</code></pre><h4 id="issue-4-split-brain-or-multiple-leaders">問題 4: スプリット ブレインまたは複数のリーダー</h4><pre><code class="language-bash"># Check cluster status
etcdctl endpoint status --cluster --write-out=table

# If multiple leaders (shouldn't happen with proper setup):
# 1. Stop all etcd instances
sudo systemctl stop etcd  # On all nodes

# 2. Clear data on all nodes
sudo rm -rf /var/lib/etcd/*

# 3. Restart cluster (bootstrap again)
# Start all nodes within 30 seconds
</code></pre><h2 id="9-performance-tuning">9。パフォーマンスのチューニング_</h2><h3 id="91-etcd-tuning-parameters">9.1。 etcd 調整パラメータ_</h3><pre><code class="language-bash"># Add to /etc/etcd/etcd.conf

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
</code></pre><h3 id="92-monitoring-etcd">9.2。 etcd のモニタリング</h3><p><strong>監視する主要なメトリクス</strong>:</p><ul><li>遅延 (99 パーセンタイル < 50 ミリ秒)</li><li>ディスクの fsync 持続時間 (< 50 ミリ秒) 10ms)_</li><li>リーダーの変更 (まれであるはず)</li><li>データベースのサイズ</li><li>失敗した提案</li></ul><p><strong>チェックメトリクス_</strong>:_</p><pre><code class="language-bash">curl http://10.0.1.11:2379/metrics

# Key metrics:
# etcd_server_has_leader
# etcd_server_leader_changes_seen_total
# etcd_disk_backend_commit_duration_seconds
# etcd_network_peer_round_trip_time_seconds
</code></pre><h2 id="10-t%E1%BB%95ng-k%E1%BA%BFt">10。概要</h2><h3 id="key-takeaways">重要なポイント</h3><p>✅&nbsp;<strong>etcd クラスター</strong>: 実稼働用の 3 ノード クラスターHA</p><p>✅&nbsp;<strong>ポート</strong>: 2379 (クライアント)、2380 (ピア)</p><p>✅&nbsp;<strong>Raftコンセンサス</strong>: 自動リーダー選出とデータ複製</p><p>✅&nbsp;<strong>クォーラム</strong>: クラスターが動作するには 2/3 ノードが必要動的_</p><p>✅&nbsp;<strong>TTL キー</strong>: Patroni リーダー ロックに使用</p><p>✅&nbsp;<strong>etcdctl</strong>: 管理およびトラブルシューティング</p><h3 id="checklist-sau-lab">チェックリストは後でラボ</h3><ul><li>&nbsp;etcd クラスター 3 ノードが実行</li><li>&nbsp;<code>etcdctl メンバーリスト</code>&nbsp;全表示 3メンバー</li><li>&nbsp;<code>etcdctl エンドポイントの正常性 --cluster</code>&nbsp;すべて正常</li><li>&nbsp;リーダーが 1 人、フォロワーが 2 人です</li><li>&nbsp;etcd サービスが有効になっています再起動すると自動起動</li><li>&nbsp;ファイアウォールはポート 2379 と 2380 を許可します_</li></ul><h3 id="ki%E1%BA%BFn-tr%C3%BAc-hi%E1%BB%87n-t%E1%BA%A1i">_現在のアーキテクチャ</h3><pre><code class="language-text">✅ 3 VMs prepared (Bài 4)
✅ PostgreSQL 15 installed (Bài 5)
✅ etcd cluster running (Bài 6)

Next: Cài đặt Patroni và bootstrap HA cluster
</code></pre><h3 id="chu%E1%BA%A9n-b%E1%BB%8B-cho-b%C3%A0i-7">レッスンの準備7</h3><p>次のレッスンでは、Patroni をインストールし、セットアップ etcd クラスターと統合します。</p>