---
id: 019d8b30-b214-7001-c002-e0c5f8200114
title: 'Bài 14: Policies - ACL, Sentinel và RBAC'
slug: bai-14-policies-acl-sentinel-va-rbac
description: >-
  Vault Policy system, HCL policy syntax, Path-based policies, Capabilities,
  Policy templates, Fine-grained control, Sentinel policies (Enterprise),
  EGP, RGP, testing.
duration_minutes: 220
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 3: Auth Methods - Xác thực và Ủy quyền"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1303" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1303)"/>

  <!-- Decorations -->
  <g>
    <circle cx="764" cy="222" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="928" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1092" cy="90" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="756" cy="154" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="920" cy="218" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="222" x2="1100" y2="302" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="252" x2="1050" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="954.0429399400242,103.5 954.0429399400242,140.5 922,159 889.9570600599758,140.5 889.9570600599758,103.50000000000001 922,85" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Bài 14</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 14: Policies - ACL, Sentinel và RBAC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Auth Methods - Xác thực và Ủy quyền</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-vault-policy-system"><strong>1. Vault Policy System</strong></h2>

<p>Vault sử dụng <strong>policy-based access control</strong> để kiểm soát quyền truy cập. Mọi thao tác trên Vault đều phải được cho phép bởi một policy. Policies được viết bằng HCL (HashiCorp Configuration Language) hoặc JSON.</p>

<h3 id="nguyen-tac-co-ban"><strong>Nguyên tắc cơ bản</strong></h3>

<ul>
<li><p><strong>Default deny</strong> — mặc định mọi thứ bị từ chối trừ khi có policy cho phép</p></li>
<li><p><strong>Path-based</strong> — policies gắn với API paths</p></li>
<li><p><strong>Additive</strong> — nhiều policies gộp lại (union), quyền cao nhất thắng</p></li>
<li><p><strong>deny wins</strong> — nếu bất kỳ policy nào deny → deny (trừ root)</p></li>
</ul>

<h3 id="built-in-policies"><strong>Built-in Policies</strong></h3>

<table>
<thead>
<tr><th>Policy</th><th>Mô tả</th><th>Có thể xóa?</th></tr>
</thead>
<tbody>
<tr><td><code>root</code></td><td>Toàn quyền, bỏ qua mọi kiểm tra</td><td>Không</td></tr>
<tr><td><code>default</code></td><td>Gán cho mọi token, cho phép basic operations</td><td>Không (có thể sửa)</td></tr>
</tbody>
</table>

<h2 id="2-hcl-policy-syntax"><strong>2. HCL Policy Syntax</strong></h2>

<h3 id="capabilities"><strong>Capabilities</strong></h3>

<table>
<thead>
<tr><th>Capability</th><th>HTTP Verb</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td><code>create</code></td><td>POST</td><td>Tạo dữ liệu mới</td></tr>
<tr><td><code>read</code></td><td>GET</td><td>Đọc dữ liệu</td></tr>
<tr><td><code>update</code></td><td>POST/PUT</td><td>Cập nhật dữ liệu</td></tr>
<tr><td><code>delete</code></td><td>DELETE</td><td>Xóa dữ liệu</td></tr>
<tr><td><code>list</code></td><td>LIST</td><td>Liệt kê keys</td></tr>
<tr><td><code>sudo</code></td><td>—</td><td>Cho phép thao tác trên root-protected paths</td></tr>
<tr><td><code>deny</code></td><td>—</td><td>Từ chối mọi truy cập (always wins)</td></tr>
<tr><td><code>patch</code></td><td>PATCH</td><td>Partial update (KV v2)</td></tr>
</tbody>
</table>

<h3 id="vi-du-policy"><strong>Ví dụ Policy cơ bản</strong></h3>

<pre><code class="language-hcl"># policy-dev-team.hcl

# Đọc secrets trong KV cho team dev
path "secret/data/dev/*" {
  capabilities = ["create", "read", "update", "delete", "list", "patch"]
}

path "secret/metadata/dev/*" {
  capabilities = ["list", "read", "delete"]
}

# Chỉ đọc secrets production
path "secret/data/production/*" {
  capabilities = ["read"]
}

# Sinh database credentials
path "database/creds/dev-readonly" {
  capabilities = ["read"]
}

# Không được truy cập admin paths
path "sys/*" {
  capabilities = ["deny"]
}

# Cho phép đọc health status
path "sys/health" {
  capabilities = ["read"]
}

# Self-management token
path "auth/token/lookup-self" {
  capabilities = ["read"]
}

path "auth/token/renew-self" {
  capabilities = ["update"]
}
</code></pre>

<h3 id="glob-patterns"><strong>Glob Patterns</strong></h3>

<pre><code class="language-hcl"># * khớp mọi ký tự trong một segment
path "secret/data/team-*" {
  capabilities = ["read"]
}
# Khớp: secret/data/team-alpha, secret/data/team-beta
# Không khớp: secret/data/team-alpha/sub

# + khớp ít nhất một segment (bao gồm /)
path "secret/data/team-alpha/+" {
  capabilities = ["read"]
}
# Khớp: secret/data/team-alpha/db, secret/data/team-alpha/api/keys
</code></pre>

<h3 id="fine-grained-control"><strong>Fine-grained Control</strong></h3>

<pre><code class="language-hcl"># Cho phép tạo nhưng chỉ với parameters cụ thể
path "secret/data/production/db" {
  capabilities = ["create", "update"]
  allowed_parameters = {
    "data" = []   # Mọi giá trị
  }
  denied_parameters = {
    "data" = ["*root*", "*admin*"]  # Không cho key chứa root/admin
  }
}

# TTL constraints
path "database/creds/production" {
  capabilities = ["read"]
  min_wrapping_ttl = "5m"
  max_wrapping_ttl = "30m"
}

# Required parameters
path "auth/approle/role/*" {
  capabilities = ["create", "update"]
  required_parameters = ["token_policies", "secret_id_ttl"]
}
</code></pre>

<h2 id="3-policy-templates"><strong>3. Policy Templates</strong></h2>

<p>Policy templates cho phép tạo dynamic policies sử dụng identity information:</p>

<pre><code class="language-hcl"># Mỗi user chỉ truy cập được KV path của mình
path "secret/data/users/{{identity.entity.name}}/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}

# Dựa trên metadata
path "secret/data/teams/{{identity.entity.metadata.team}}/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}

# Dựa trên group
path "secret/data/groups/{{identity.groups.names.*.id}}/*" {
  capabilities = ["read", "list"]
}

# Dựa trên auth method alias
path "secret/data/k8s/{{identity.entity.aliases.auth_kubernetes_abc123.metadata.service_account_namespace}}/*" {
  capabilities = ["read"]
}
</code></pre>

<h2 id="4-quan-ly-policies"><strong>4. Quản lý Policies</strong></h2>

<pre><code class="language-bash"># Tạo/cập nhật policy từ file
vault policy write dev-team policy-dev-team.hcl

# Tạo policy từ stdin
vault policy write admin-policy - &lt;&lt;EOF
path "sys/*" {
  capabilities = ["create", "read", "update", "delete", "list", "sudo"]
}
path "secret/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}
EOF

# Liệt kê policies
vault policy list

# Đọc policy
vault policy read dev-team

# Xóa policy
vault policy delete dev-team

# Format/validate policy file
vault policy fmt policy-dev-team.hcl

# Test capabilities
vault token capabilities &lt;token&gt; secret/data/dev/app1
# create, delete, list, read, update

# Test capabilities của token hiện tại
vault token capabilities -self secret/data/dev/app1
</code></pre>

<h2 id="5-rbac-pattern"><strong>5. RBAC Pattern với Vault Policies</strong></h2>

<h3 id="organizational-rbac"><strong>Thiết kế RBAC cho tổ chức</strong></h3>

<pre><code class="language-hcl"># === Role: vault-admin ===
# policy-vault-admin.hcl
path "sys/*" {
  capabilities = ["create", "read", "update", "delete", "list", "sudo"]
}
path "auth/*" {
  capabilities = ["create", "read", "update", "delete", "list", "sudo"]
}

# === Role: secrets-admin ===
# policy-secrets-admin.hcl
path "secret/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}
path "database/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}
path "pki/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}

# === Role: developer ===
# policy-developer.hcl
path "secret/data/dev/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}
path "database/creds/dev-*" {
  capabilities = ["read"]
}
path "pki/issue/dev-cert" {
  capabilities = ["create", "update"]
}

# === Role: operator ===
# policy-operator.hcl
path "secret/data/production/*" {
  capabilities = ["read"]
}
path "database/creds/prod-readonly" {
  capabilities = ["read"]
}
path "sys/health" {
  capabilities = ["read"]
}
path "sys/metrics" {
  capabilities = ["read"]
}
</code></pre>

<h3 id="gan-policies-cho-groups"><strong>Gán policies cho Identity Groups</strong></h3>

<pre><code class="language-bash"># Tạo internal group
vault write identity/group \
  name="platform-team" \
  policies="secrets-admin,vault-admin" \
  member_entity_ids="entity-uuid-1,entity-uuid-2"

# Tạo external group (map từ LDAP/OIDC)
vault write identity/group \
  name="developers" \
  type="external" \
  policies="developer"

# Map external group → LDAP group
vault write identity/group-alias \
  name="CN=Developers,OU=Groups,DC=company,DC=com" \
  mount_accessor="auth_ldap_abc123" \
  canonical_id="&lt;group-id&gt;"
</code></pre>

<h2 id="6-sentinel-policies"><strong>6. Sentinel Policies (Enterprise)</strong></h2>

<p><strong>Sentinel</strong> là policy-as-code framework của HashiCorp, cho phép tạo policies phức tạp hơn ACL bằng ngôn ngữ Sentinel. Sentinel policies có thể kiểm tra request context, time-of-day, IP address, và nhiều yếu tố khác.</p>

<h3 id="sentinel-types"><strong>Hai loại Sentinel Policies</strong></h3>

<table>
<thead>
<tr><th>Loại</th><th>Mô tả</th><th>Scope</th></tr>
</thead>
<tbody>
<tr><td><strong>EGP</strong> (Endpoint Governing)</td><td>Gắn với API path cụ thể</td><td>Mọi request đến path đó</td></tr>
<tr><td><strong>RGP</strong> (Role Governing)</td><td>Gắn với token / identity</td><td>Mọi request từ identity đó</td></tr>
</tbody>
</table>

<h3 id="egp-vi-du"><strong>EGP Example — Business Hours Only</strong></h3>

<pre><code class="language-python"># Chỉ cho phép truy cập production secrets trong giờ làm việc
import "time"
import "strings"

# Lấy thời gian hiện tại (UTC+7 cho Việt Nam)
current_hour = time.now.hour + 7
if current_hour >= 24 {
  current_hour = current_hour - 24
}

# Kiểm tra ngày trong tuần (1=Monday, 7=Sunday)
current_day = time.now.weekday

# Business hours: Mon-Fri, 7:00-19:00 ICT
is_business_hours = current_day >= 1 and current_day <= 5 and
                    current_hour >= 7 and current_hour < 19

# Cho phép nếu trong business hours hoặc là emergency path
main = rule {
  is_business_hours or
  strings.has_prefix(request.path, "secret/data/emergency/")
}
</code></pre>

<pre><code class="language-bash"># Tạo EGP
vault write sys/policies/egp/business-hours \
  policy="$(cat business-hours.sentinel)" \
  enforcement_level="soft-mandatory" \
  paths="secret/data/production/*"
</code></pre>

<h3 id="rgp-vi-du"><strong>RGP Example — Request Validation</strong></h3>

<pre><code class="language-python"># Yêu cầu MFA cho operations trên production
import "mfa"
import "strings"

# Kiểm tra nếu path là production
is_production = strings.has_prefix(request.path, "secret/data/production/")

# Production operations cần MFA
main = rule when is_production {
  mfa.methods.totp.valid
}
</code></pre>

<h3 id="enforcement-levels"><strong>Enforcement Levels</strong></h3>

<table>
<thead>
<tr><th>Level</th><th>Hành vi khi fail</th></tr>
</thead>
<tbody>
<tr><td><code>advisory</code></td><td>Log warning, vẫn cho phép</td></tr>
<tr><td><code>soft-mandatory</code></td><td>Deny, nhưng có thể override với sudo</td></tr>
<tr><td><code>hard-mandatory</code></td><td>Deny, không thể override</td></tr>
</tbody>
</table>

<h2 id="7-policy-testing"><strong>7. Policy Testing và Debugging</strong></h2>

<pre><code class="language-bash"># Kiểm tra capabilities cụ thể
vault token capabilities -self secret/data/dev/app1

# Tạo test token với policy
vault token create -policy=dev-team -ttl=5m

# Test operations
VAULT_TOKEN="test-token" vault kv get secret/dev/app1
VAULT_TOKEN="test-token" vault kv put secret/dev/app1 key=value
VAULT_TOKEN="test-token" vault kv get secret/production/db  # Expect: permission denied

# Validate policy syntax
vault policy fmt -check policy-file.hcl
</code></pre>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<ul>
<li><p><strong>ACL Policies</strong> — path-based, capabilities, glob patterns, fine-grained control</p></li>
<li><p><strong>Policy Templates</strong> — dynamic policies sử dụng identity data</p></li>
<li><p><strong>RBAC Pattern</strong> — group-based policy assignment cho organizational structure</p></li>
<li><p><strong>Sentinel Policies</strong> (Enterprise) — policy-as-code cho complex business rules</p></li>
</ul>

<p>Bài tiếp theo sẽ tìm hiểu Identity Secrets Engine, Entities, Groups và Multi-Factor Authentication — hoàn thiện bức tranh identity management trong Vault.</p>
