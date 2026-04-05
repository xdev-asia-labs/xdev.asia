---
id: 019d8b30-b224-7001-c002-e0c5f8200124
title: 'Bài 24: Vault Enterprise — Namespaces, Replication và DR'
slug: bai-24-vault-enterprise-namespaces-replication-va-dr
description: >-
  Vault Enterprise features: Namespaces cho multi-tenancy,
  Performance Replication, Disaster Recovery Replication,
  Control Groups, MFA enforcement, License management.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 24
section_title: "Phần 7: Production, Enterprise và Vận hành"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9275" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9275)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1093" cy="129" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="1086" cy="162" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1079" cy="195" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1072" cy="228" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="1065" cy="261" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="239" x2="1100" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="269" x2="1050" y2="339" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1018.444863728671,172 1018.444863728671,206 989,223 959.555136271329,206 959.555136271329,172 989,155" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — Bài 24</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 24: Vault Enterprise — Namespaces,</tspan>
      <tspan x="60" dy="42">Replication và DR</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 7: Production, Enterprise và Vận hành</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-vault-enterprise-overview"><strong>1. Vault Enterprise Overview</strong></h2>

<p><strong>Vault Enterprise</strong> bổ sung các tính năng enterprise-grade cho tổ chức lớn. Đây là các tính năng KHÔNG có trong bản OSS.</p>

<table>
<thead>
<tr><th>Feature</th><th>Mô tả</th><th>Tier</th></tr>
</thead>
<tbody>
<tr><td>Namespaces</td><td>Multi-tenancy isolation</td><td>Standard+</td></tr>
<tr><td>Performance Replication</td><td>Cross-region read replicas</td><td>Standard+</td></tr>
<tr><td>DR Replication</td><td>Disaster recovery standby cluster</td><td>Standard+</td></tr>
<tr><td>Control Groups</td><td>Multi-person approval workflow</td><td>Governance</td></tr>
<tr><td>Sentinel Policies</td><td>Policy-as-code framework</td><td>Governance</td></tr>
<tr><td>Entropy Augmentation</td><td>External entropy sources</td><td>Standard+</td></tr>
<tr><td>Seal Wrap</td><td>FIPS 140-2 compliance</td><td>Standard+</td></tr>
<tr><td>Transform SE</td><td>Format-preserving encryption</td><td>ADP</td></tr>
</tbody>
</table>

<h2 id="2-namespaces"><strong>2. Namespaces — Multi-Tenancy</strong></h2>

<p>Namespaces tạo ra các <strong>isolated Vault instances</strong> bên trong cùng một cluster. Mỗi namespace có riêng auth methods, secrets engines, policies, tokens.</p>

<h3 id="namespace-hierarchy"><strong>Namespace Hierarchy</strong></h3>

<pre><code>
root (/)
├── team-platform/
│   ├── secrets engines: kv, pki, database
│   ├── auth methods: kubernetes, approle
│   └── policies: admin, deploy
├── team-backend/
│   ├── dev/
│   │   └── secrets engines: kv
│   ├── staging/
│   │   └── secrets engines: kv, database
│   └── production/
│       └── secrets engines: kv, database, pki
└── team-frontend/
    └── secrets engines: kv
</code></pre>

<h3 id="quan-ly-namespaces"><strong>Quản lý Namespaces</strong></h3>

<pre><code class="language-bash"># Tạo namespace
vault namespace create team-platform
vault namespace create team-backend
vault namespace create -namespace=team-backend dev
vault namespace create -namespace=team-backend staging
vault namespace create -namespace=team-backend production

# List namespaces
vault namespace list
vault namespace list -namespace=team-backend

# Thao tác trong namespace
export VAULT_NAMESPACE=team-backend/production

vault secrets enable -path=secret kv-v2
vault secrets enable database
vault auth enable kubernetes

# Hoặc dùng flag
vault kv put -namespace=team-backend/production \
  secret/api-key value="prod-secret-123"
</code></pre>

<h3 id="namespace-policies"><strong>Policies trong Namespace</strong></h3>

<pre><code class="language-hcl"># Policy cho team admin — quản lý namespace của team
path "team-backend/*" {
  capabilities = ["create", "read", "update", "delete", "list", "sudo"]
}

# Policy cho developer — chỉ đọc trong dev namespace
path "team-backend/dev/secret/data/*" {
  capabilities = ["read", "list"]
}

# Cross-namespace access (root namespace policy)
path "team-backend/production/database/creds/readonly" {
  capabilities = ["read"]
}
</code></pre>

<h2 id="3-performance-replication"><strong>3. Performance Replication</strong></h2>

<p>Performance Replication cho phép đặt <strong>read replicas</strong> ở nhiều regions, giảm latency read operations.</p>

<pre><code>
┌──────────────────────────────────────────────────────┐
│                   Architecture                        │
│                                                       │
│  Region: Singapore           Region: Tokyo            │
│  ┌─────────────────┐        ┌─────────────────┐      │
│  │  PRIMARY Cluster │ ─────▶│ SECONDARY Cluster│      │
│  │                  │  Sync │  (Performance)   │      │
│  │  ┌────┐ ┌────┐  │       │  ┌────┐ ┌────┐   │      │
│  │  │ N1 │ │ N2 │  │       │  │ N1 │ │ N2 │   │      │
│  │  └────┘ └────┘  │       │  └────┘ └────┘   │      │
│  │       ┌────┐    │       │       ┌────┐     │      │
│  │       │ N3 │    │       │       │ N3 │     │      │
│  │       └────┘    │       │       └────┘     │      │
│  └─────────────────┘       └─────────────────┘       │
│  Read + Write               Read only                 │
│  (tất cả operations)        (writes → forward primary)│
└──────────────────────────────────────────────────────┘
</code></pre>

<h3 id="setup-perf-replication"><strong>Thiết lập Performance Replication</strong></h3>

<pre><code class="language-bash"># PRIMARY cluster
vault write -f sys/replication/performance/primary/enable

# Tạo secondary token
vault write sys/replication/performance/primary/secondary-token \
  id="tokyo-secondary" \
  ttl="30m"
# → Trả về wrapping_token

# SECONDARY cluster
vault write sys/replication/performance/secondary/enable \
  token="<wrapping_token>"
# Secondary sẽ reboot và sync từ primary

# Kiểm tra trạng thái
vault read sys/replication/performance/status
</code></pre>

<h3 id="perf-replication-behavior"><strong>Behavior</strong></h3>

<table>
<thead>
<tr><th>Operation</th><th>Primary</th><th>Secondary</th></tr>
</thead>
<tbody>
<tr><td>Read secrets</td><td>✅ Local</td><td>✅ Local</td></tr>
<tr><td>Write secrets</td><td>✅ Local</td><td>↗️ Forward to primary</td></tr>
<tr><td>Auth/Token</td><td>✅ Local</td><td>✅ Local (local tokens)</td></tr>
<tr><td>Policies</td><td>✅ Manage</td><td>❌ Synced from primary</td></tr>
<tr><td>Auth methods</td><td>✅ Manage</td><td>✅ Local auth methods</td></tr>
</tbody>
</table>

<h2 id="4-dr-replication"><strong>4. Disaster Recovery Replication</strong></h2>

<p>DR Replication tạo một <strong>hot standby cluster</strong> sẵn sàng promote khi primary cluster fails.</p>

<h3 id="setup-dr"><strong>Thiết lập DR</strong></h3>

<pre><code class="language-bash"># PRIMARY cluster
vault write -f sys/replication/dr/primary/enable

# Tạo DR secondary token
vault write sys/replication/dr/primary/secondary-token \
  id="dr-singapore-2"

# DR SECONDARY cluster
vault write sys/replication/dr/secondary/enable \
  token="<wrapping_token>"

# DR secondary sẽ ở trạng thái standby
# Tất cả requests bị reject (503)
</code></pre>

<h3 id="dr-failover"><strong>DR Failover</strong></h3>

<pre><code class="language-bash"># Trước failover — tạo DR operation token trên PRIMARY
vault operator generate-root -dr-token -init
vault operator generate-root -dr-token \
  -nonce="<nonce>" "<unseal-key>"

# Khi primary down — promote DR secondary
vault write sys/replication/dr/secondary/promote \
  dr_operation_token="<dr-operation-token>"

# DR secondary trở thành primary mới
# Cập nhật DNS/LB trỏ tới cluster mới
</code></pre>

<h2 id="5-control-groups"><strong>5. Control Groups (Governance)</strong></h2>

<p>Control Groups yêu cầu <strong>nhiều người approve</strong> trước khi một operation được thực thi — multi-person approval.</p>

<pre><code class="language-hcl"># Policy với control group
path "secret/data/production/master-key" {
  capabilities = ["read"]
  control_group {
    factor "approver" {
      controlled_capabilities = ["read"]
      identity {
        group_names = ["security-team"]
        approvals   = 2
      }
    }
    ttl = "4h"     # Thời gian chờ approve
    max_ttl = "8h"
  }
}
</code></pre>

<pre><code class="language-bash"># User yêu cầu secret → nhận wrapping token thay vì secret
vault kv get secret/production/master-key
# → Trả về wrapping_token (accessor)

# Approver authorize request
vault write sys/control-group/authorize \
  accessor="<accessor-from-requester>"

# Sau khi đủ approvals, user unwrap để lấy secret
vault unwrap "<wrapping_token>"
</code></pre>

<h2 id="6-license-management"><strong>6. License Management</strong></h2>

<pre><code class="language-bash"># Kiểm tra license
vault license get
vault license inspect /path/to/license.hclic

# Vault 1.8+ — license tự động load
# Đặt file license tại một trong:
# 1. VAULT_LICENSE env var
# 2. VAULT_LICENSE_PATH env var
# 3. /etc/vault.d/vault.hclic
</code></pre>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<ul>
<li><p><strong>Namespaces</strong> — Multi-tenancy, mỗi team/env quản lý Vault riêng</p></li>
<li><p><strong>Performance Replication</strong> — Cross-region reads, giảm latency</p></li>
<li><p><strong>DR Replication</strong> — Hot standby, fast failover khi primary down</p></li>
<li><p><strong>Control Groups</strong> — Multi-person approval cho sensitive operations</p></li>
<li><p><strong>Sentinel</strong> — Policy-as-code, logic phức tạp hơn ACL</p></li>
</ul>
