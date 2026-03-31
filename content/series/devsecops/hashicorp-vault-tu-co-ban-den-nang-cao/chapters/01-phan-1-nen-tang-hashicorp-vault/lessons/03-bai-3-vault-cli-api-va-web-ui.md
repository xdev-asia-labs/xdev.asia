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
