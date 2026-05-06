---
id: 019d8b30-b216-7001-c002-e0c5f8200116
title: 'Lesson 16: SSH Secrets Engine and TOTP'
slug: bai-16-ssh-secrets-engine-va-totp
description: SSH Secrets Engine — Signed SSH Certificates (CA mode), OTP mode, Certificate authority setup, Host key signing. TOTP Secrets Engine. LDAP Secrets Engine — dynamic LDAP credentials, RACF passphrase support (1.21).
duration_minutes: 180
is_free: true
video_url: null
sort_order: 16
section_title: 'Part 4: Advanced Secrets Engines'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault from Basic to Advanced
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9016" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9016)"/>

  <!-- Decorations -->
  <g>
    <circle cx="650" cy="160" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="30" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="160" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="30" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="850" cy="160" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="200" x2="1100" y2="280" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="230" x2="1050" y2="300" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1030.3108891324553,182.5 1030.3108891324553,217.5 1000,235 969.6891108675446,217.5 969.6891108675446,182.5 1000,165" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — Lesson 16</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 16: SSH Secrets Engine and TOTP</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Advanced Secrets Engines</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-ssh-secrets-engine"><strong>1. SSH Secrets Engine Overview</strong></h2>

<p><strong>SSH Secrets Engine</strong> solves the problem of managing SSH access in enterprises. Instead of distributing SSH keys manually (and never revoke), Vault provides two mechanisms:</p>

<table>
<thead>
<tr><th>Mode</th><th>How it works</th><th>Recommendation</th></tr>
</thead>
<tbody>
<tr><td><strong>Signed Certificates (CA)</strong></td><td>Vault sign SSH public key → short-term certificate</td><td>✅ Recommended</td></tr>
<tr><td><strong>OTP</strong></td><td>Vault generates one-time password to SSH</td><td>Legacy, needs vault-ssh-helper</td></tr>
</tbody>
</table>

<h2 id="2-ssh-ca-mode"><strong>2. SSH CA Mode (Signed Certificates)</strong></h2>

<h3 id="kien-truc-ssh-ca"><strong>Architecture</strong></h3>

<pre><code>┌──────────┐   1. Sign my key     ┌──────────────┐
│   User   │ ───────────────────▶ │    Vault     │
│          │                      │  SSH CA      │
│          │   2. SSH Certificate │              │
│          │ ◀─────────────────── │              │
│          │                      └──────────────┘
│          │
│          │   3. SSH with certificate
│          │ ───────────────────▶ ┌──────────────┐
│          │                      │   Server     │
│          │   4. Verify cert     │  (trusts CA) │
│          │      against CA      │              │
└──────────┘                      └──────────────┘
</code></pre>

<h3 id="setup-ssh-ca"><strong>Setup SSH CA</strong></h3>

<pre><code class="language-bash"># Enable SSH secrets engine
vault secrets enable -path=ssh-client-signer ssh

# Sinh CA key pair (hoặc import existing)
vault write ssh-client-signer/config/ca generate_signing_key=true

# Lấy CA public key
vault read -field=public_key ssh-client-signer/config/ca > /etc/ssh/trusted-user-ca-keys.pem
</code></pre>

<h3 id="cau-hinh-server"><strong>Configure SSH Server to trust Vault CA</strong></h3>

<pre><code class="language-bash"># Trên mỗi SSH server — thêm vào /etc/ssh/sshd_config
TrustedUserCAKeys /etc/ssh/trusted-user-ca-keys.pem

# Restart sshd
sudo systemctl restart sshd
</code></pre>

<h3 id="tao-role-ssh"><strong>Create roles</strong></h3>

<pre><code class="language-bash"># Role cho developers — SSH vào dev servers
vault write ssh-client-signer/roles/dev-ssh \
  key_type=ca \
  default_user=developer \
  allowed_users="developer,deploy" \
  allowed_extensions="permit-pty,permit-port-forwarding" \
  default_extensions='{"permit-pty": ""}' \
  ttl=8h \
  max_ttl=24h \
  allow_user_certificates=true \
  algorithm_signer=rsa-sha2-256

# Role cho admin — SSH vào mọi server
vault write ssh-client-signer/roles/admin-ssh \
  key_type=ca \
  default_user=admin \
  allowed_users="admin,root,ubuntu" \
  allowed_extensions="permit-pty,permit-port-forwarding,permit-agent-forwarding" \
  default_extensions='{"permit-pty": ""}' \
  ttl=2h \
  max_ttl=8h \
  allow_user_certificates=true
</code></pre>

<h3 id="sign-key-ssh"><strong>Sign SSH key</strong></h3>

<pre><code class="language-bash"># Sinh SSH key pair nếu chưa có
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N ""

# Sign public key
vault write -field=signed_key ssh-client-signer/sign/dev-ssh \
  public_key=@$HOME/.ssh/id_ed25519.pub \
  valid_principals="developer" \
  ttl=8h > ~/.ssh/id_ed25519-cert.pub

# Kiểm tra certificate
ssh-keygen -L -f ~/.ssh/id_ed25519-cert.pub

# SSH với certificate
ssh -i ~/.ssh/id_ed25519 developer@server.company.com
</code></pre>

<h3 id="host-key-signing"><strong>Host Key Signing</strong></h3>

<pre><code class="language-bash"># Enable SSH engine cho host keys
vault secrets enable -path=ssh-host-signer ssh

# Sinh host CA
vault write ssh-host-signer/config/ca generate_signing_key=true

# Tạo host role
vault write ssh-host-signer/roles/host-cert \
  key_type=ca \
  ttl=87600h \
  allow_host_certificates=true \
  allowed_domains="company.com,internal.company.com" \
  allow_subdomains=true

# Sign host key
vault write -field=signed_key ssh-host-signer/sign/host-cert \
  cert_type=host \
  public_key=@/etc/ssh/ssh_host_ed25519_key.pub \
  valid_principals="server1.company.com" \
  > /etc/ssh/ssh_host_ed25519_key-cert.pub

# Cấu hình server sử dụng host certificate
# /etc/ssh/sshd_config
# HostCertificate /etc/ssh/ssh_host_ed25519_key-cert.pub
</code></pre>

<h2 id="3-ssh-otp-mode"><strong>3. SSH OTP Mode</strong></h2>

<pre><code class="language-bash"># Enable
vault secrets enable -path=ssh-otp ssh

# Tạo role
vault write ssh-otp/roles/otp-role \
  key_type=otp \
  default_user=ubuntu \
  cidr_list="10.0.0.0/8"

# Sinh OTP
vault write ssh-otp/creds/otp-role \
  ip=10.0.1.50 \
  username=ubuntu
# key: 1a2b3c4d-5e6f-7g8h

# SSH với OTP
ssh ubuntu@10.0.1.50
# Password: 1a2b3c4d-5e6f-7g8h  (one-time use)
</code></pre>

<p><strong>Note:</strong> OTP mode requires installing <code>vault-ssh-helper</code> on the target server to verify OTP with Vault. CA mode does not require any additional settings on the server.</p>

<h2 id="4-totp-secrets-engine"><strong>4. TOTP Secrets Engine</strong></h2>

<p><strong>TOTP Secrets Engine</strong> allows Vault to generate and validate TOTP (Time-based One-Time Password) codes according to RFC 6238.</p>

<h3 id="totp-generator"><strong>TOTP Generator Mode</strong></h3>

<pre><code class="language-bash"># Enable TOTP
vault secrets enable totp

# Tạo key từ URL (khi setup 2FA cho service)
vault write totp/keys/github \
  url="otpauth://totp/GitHub:john.doe?secret=JBSWY3DPEHPK3PXP&issuer=GitHub"

# Hoặc tạo key thủ công
vault write totp/keys/aws-console \
  generate=true \
  issuer="AWS" \
  account_name="john.doe@company.com" \
  period=30 \
  digits=6 \
  algorithm=SHA1

# Sinh TOTP code
vault read totp/code/github
# code: 123456

# Validate code
vault write totp/code/github code=123456
# valid: true
</code></pre>

<h3 id="totp-use-case"><strong>Use case: Centralized 2FA Management</strong></h3>

<p>Instead of each employee managing 2FA codes on their individual phones, Vault can be a central storage place for TOTP keys — allowing for team rotation and not losing codes when changing phones.</p>

<h2 id="5-ldap-secrets-engine"><strong>5. LDAP Secrets Engine</strong></h2>

<p><strong>LDAP Secrets Engine</strong> (different from LDAP Auth Method) generates <strong>dynamic LDAP credentials</strong> — creates and manages LDAP service accounts automatically.</p>

<pre><code class="language-bash"># Enable LDAP secrets engine
vault secrets enable ldap

# Cấu hình kết nối
vault write ldap/config \
  binddn="cn=admin,dc=company,dc=com" \
  bindpass="adminpassword" \
  url="ldaps://ldap.company.com" \
  schema="openldap"

# Tạo dynamic role
vault write ldap/role/dynamic-svc \
  creation_ldif=@creation.ldif \
  deletion_ldif=@deletion.ldif \
  rollback_ldif=@rollback.ldif \
  default_ttl=1h \
  max_ttl=24h

# Tạo static role (password rotation)
vault write ldap/static-role/svc-account \
  dn="cn=svc-app,ou=services,dc=company,dc=com" \
  username="svc-app" \
  rotation_period=24h

# Lấy dynamic credentials
vault read ldap/creds/dynamic-svc
</code></pre>

<h3 id="racf-passphrase"><strong>RACF Passphrase Support (Vault 1.21)</strong></h3>

<p>Vault 1.21 adds support for RACF passphrases to mainframe environments — allowing passphrases longer than the traditional 8 characters:</p>

<pre><code class="language-bash">vault write ldap/config \
  schema="racf" \
  password_policy="racf-passphrase-policy"
</code></pre>

<h2 id="6-tong-ket"><strong>6. Summary</strong></h2>

<ul>
<li><p><strong>SSH CA Mode</strong> — recommended, short-term sign certificates, no agent required on server</p></li>
<li><p><strong>SSH OTP Mode</strong> — one-time passwords, requires vault-ssh-helper</p></li>
<li><p><strong>TOTP Engine</strong> — sinh/validate TOTP codes, centralized 2FA management</p></li>
<li><p><strong>LDAP Secrets Engine</strong> — dynamic LDAP credentials, static role rotation</p></li>
<li><p><strong>RACF Passphrase</strong> (1.21) — mainframe environments support</p></li>
</ul>

<p>The next article will explore Transform and Tokenization — data protection for PCI DSS, PII, and compliance requirements.</p>
