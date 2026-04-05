---
id: 019d8b30-b203-7001-c002-e0c5f8200103
title: 'Bài 3: Vault CLI, API và Web UI'
slug: bai-3-vault-cli-api-va-web-ui
description: >-
  Làm quen Vault CLI (vault read, write, list, delete, kv, auth, secrets,
  policy, operator), Environment variables (VAULT_ADDR, VAULT_TOKEN,
  VAULT_NAMESPACE), Vault HTTP API RESTful, cURL và SDK clients
  (Go, Python, Java, Node.js). Vault Web UI overview, navigation
  và quản lý secrets qua giao diện.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Nền tảng HashiCorp Vault"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8461" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8461)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1065" cy="85" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1030" cy="190" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="995" cy="35" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="960" cy="140" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="925" cy="245" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="195" x2="1100" y2="275" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="225" x2="1050" y2="295" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1070.9807621135333,230 1070.9807621135333,260 1045,275 1019.0192378864668,260 1019.0192378864668,230 1045,215" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Bài 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 3: Vault CLI, API và Web UI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng HashiCorp Vault</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-vault-cli"><strong>1. Vault CLI Overview</strong></h2>
<p>Vault CLI là công cụ dòng lệnh chính để tương tác với Vault server. CLI sử dụng cùng HTTP API mà mọi client khác sử dụng, đảm bảo tính nhất quán.</p>

<h3 id="environment-variables"><strong>Environment Variables cần thiết</strong></h3>
<pre><code class="language-bash"># Địa chỉ Vault server
export VAULT_ADDR='https://vault.example.com:8200'

# Token xác thực
export VAULT_TOKEN='hvs.xxxxx'

# Namespace (Enterprise)
export VAULT_NAMESPACE='admin/team-a'

# Skip TLS verify (chỉ dev)
export VAULT_SKIP_VERIFY=true

# CA Certificate
export VAULT_CACERT='/path/to/ca.pem'
</code></pre>

<h3 id="cli-commands"><strong>Các CLI commands cơ bản</strong></h3>
<pre><code class="language-bash"># Kiểm tra trạng thái
vault status

# Login với các auth methods
vault login                           # Token-based
vault login -method=userpass username=admin
vault login -method=oidc

# KV operations
vault kv put secret/myapp password="s3cr3t"
vault kv get secret/myapp
vault kv get -field=password secret/myapp
vault kv list secret/
vault kv delete secret/myapp

# Secrets engine management
vault secrets enable -path=kv kv-v2
vault secrets list
vault secrets disable kv/

# Auth method management
vault auth enable userpass
vault auth list
vault auth disable userpass/

# Policy management
vault policy write my-policy policy.hcl
vault policy read my-policy
vault policy list
vault policy delete my-policy

# Operator commands
vault operator seal
vault operator unseal
vault operator raft list-peers
vault operator raft snapshot save backup.snap
</code></pre>

<h2 id="2-vault-http-api"><strong>2. Vault HTTP API</strong></h2>
<p>Vault cung cấp RESTful API hoàn chỉnh. Mọi operation đều có thể thực hiện qua API:</p>

<pre><code class="language-bash"># Đọc secret
curl -s \
  --header "X-Vault-Token: hvs.xxxxx" \
  https://vault.example.com:8200/v1/secret/data/myapp | jq

# Ghi secret
curl -s \
  --header "X-Vault-Token: hvs.xxxxx" \
  --request POST \
  --data '{"data": {"password": "s3cr3t", "username": "admin"}}' \
  https://vault.example.com:8200/v1/secret/data/myapp

# Liệt kê secrets
curl -s \
  --header "X-Vault-Token: hvs.xxxxx" \
  --request LIST \
  https://vault.example.com:8200/v1/secret/metadata/ | jq

# Health check
curl -s https://vault.example.com:8200/v1/sys/health | jq
</code></pre>

<h2 id="3-sdk-clients"><strong>3. SDK Clients</strong></h2>

<h3 id="python"><strong>Python (hvac)</strong></h3>
<pre><code class="language-python">import hvac

client = hvac.Client(url='https://vault.example.com:8200', token='hvs.xxxxx')

# Đọc secret
secret = client.secrets.kv.v2.read_secret_version(path='myapp')
print(secret['data']['data']['password'])

# Ghi secret
client.secrets.kv.v2.create_or_update_secret(
    path='myapp',
    secret=dict(password='new-password', username='admin')
)
</code></pre>

<h3 id="go"><strong>Go</strong></h3>
<pre><code class="language-go">import (
    "github.com/hashicorp/vault-client-go"
)

client, _ := vault.New(
    vault.WithAddress("https://vault.example.com:8200"),
)
client.SetToken("hvs.xxxxx")

secret, _ := client.Secrets.KvV2Read(ctx, "myapp",
    vault.WithMountPath("secret"))
</code></pre>

<h2 id="4-web-ui"><strong>4. Vault Web UI</strong></h2>
<p>Vault Web UI cung cấp giao diện trực quan được bật bằng <code>ui = true</code> trong cấu hình. Truy cập tại <code>https://vault.example.com:8200/ui</code>.</p>

<p>Web UI hỗ trợ:</p>
<ul>
<li><p>Quản lý Secrets Engines và secrets</p></li>
<li><p>Quản lý Auth Methods</p></li>
<li><p>Quản lý Policies</p></li>
<li><p>Xem Audit Logs</p></li>
<li><p>Client Count Dashboard (1.21)</p></li>
<li><p>Secret Recovery (1.21)</p></li>
</ul>

<h2 id="5-tong-ket"><strong>5. Tổng kết</strong></h2>
<p>Vault cung cấp ba cách tương tác chính: CLI, HTTP API và Web UI. CLI phù hợp cho development và scripting, API cho application integration, Web UI cho quản trị viên. Bài tiếp theo sẽ đi sâu vào cơ chế Seal/Unseal và Auto-unseal.</p>
