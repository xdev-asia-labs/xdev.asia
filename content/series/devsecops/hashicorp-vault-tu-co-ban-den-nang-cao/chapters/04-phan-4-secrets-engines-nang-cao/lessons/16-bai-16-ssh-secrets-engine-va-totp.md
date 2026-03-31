---
id: 019d8b30-b216-7001-c002-e0c5f8200116
title: 'Bài 16: SSH Secrets Engine và TOTP'
slug: bai-16-ssh-secrets-engine-va-totp
description: >-
  SSH Secrets Engine — Signed SSH Certificates (CA mode), OTP mode,
  Certificate authority setup, Host key signing. TOTP Secrets Engine.
  LDAP Secrets Engine — dynamic LDAP credentials, RACF passphrase support (1.21).
duration_minutes: 180
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 4: Secrets Engines nâng cao"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<h2 id="1-ssh-secrets-engine"><strong>1. SSH Secrets Engine Overview</strong></h2>

<p><strong>SSH Secrets Engine</strong> giải quyết bài toán quản lý SSH access trong enterprise. Thay vì phân phối SSH keys thủ công (và không bao giờ revoke), Vault cung cấp hai cơ chế:</p>

<table>
<thead>
<tr><th>Mode</th><th>Cách hoạt động</th><th>Recommendation</th></tr>
</thead>
<tbody>
<tr><td><strong>Signed Certificates (CA)</strong></td><td>Vault sign SSH public key → certificate ngắn hạn</td><td>✅ Recommended</td></tr>
<tr><td><strong>OTP</strong></td><td>Vault sinh one-time password để SSH</td><td>Legacy, cần vault-ssh-helper</td></tr>
</tbody>
</table>

<h2 id="2-ssh-ca-mode"><strong>2. SSH CA Mode (Signed Certificates)</strong></h2>

<h3 id="kien-truc-ssh-ca"><strong>Kiến trúc</strong></h3>

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

<h3 id="cau-hinh-server"><strong>Cấu hình SSH Server tin tưởng Vault CA</strong></h3>

<pre><code class="language-bash"># Trên mỗi SSH server — thêm vào /etc/ssh/sshd_config
TrustedUserCAKeys /etc/ssh/trusted-user-ca-keys.pem

# Restart sshd
sudo systemctl restart sshd
</code></pre>

<h3 id="tao-role-ssh"><strong>Tạo roles</strong></h3>

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

<p><strong>Lưu ý:</strong> OTP mode yêu cầu cài đặt <code>vault-ssh-helper</code> trên target server để verify OTP với Vault. CA mode không cần cài đặt gì thêm trên server.</p>

<h2 id="4-totp-secrets-engine"><strong>4. TOTP Secrets Engine</strong></h2>

<p><strong>TOTP Secrets Engine</strong> cho phép Vault sinh và validate TOTP (Time-based One-Time Password) codes theo RFC 6238.</p>

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

<p>Thay vì mỗi nhân viên tự quản lý 2FA codes trên điện thoại cá nhân, Vault có thể là nơi lưu trữ trung tâm cho các TOTP keys — cho phép team rotation và không mất codes khi đổi điện thoại.</p>

<h2 id="5-ldap-secrets-engine"><strong>5. LDAP Secrets Engine</strong></h2>

<p><strong>LDAP Secrets Engine</strong> (khác với LDAP Auth Method) sinh <strong>dynamic LDAP credentials</strong> — tạo và quản lý LDAP service accounts tự động.</p>

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

<p>Vault 1.21 thêm hỗ trợ RACF passphrases cho mainframe environments — cho phép passphrases dài hơn 8 ký tự truyền thống:</p>

<pre><code class="language-bash">vault write ldap/config \
  schema="racf" \
  password_policy="racf-passphrase-policy"
</code></pre>

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<ul>
<li><p><strong>SSH CA Mode</strong> — recommended, sign certificates ngắn hạn, không cần agent trên server</p></li>
<li><p><strong>SSH OTP Mode</strong> — one-time passwords, cần vault-ssh-helper</p></li>
<li><p><strong>TOTP Engine</strong> — sinh/validate TOTP codes, centralized 2FA management</p></li>
<li><p><strong>LDAP Secrets Engine</strong> — dynamic LDAP credentials, static role rotation</p></li>
<li><p><strong>RACF Passphrase</strong> (1.21) — hỗ trợ mainframe environments</p></li>
</ul>

<p>Bài tiếp theo sẽ tìm hiểu Transform và Tokenization — data protection cho PCI DSS, PII, và compliance requirements.</p>
