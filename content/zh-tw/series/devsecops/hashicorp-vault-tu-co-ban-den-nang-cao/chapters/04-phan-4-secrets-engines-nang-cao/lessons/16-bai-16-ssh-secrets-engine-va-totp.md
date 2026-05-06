---
id: 019d8b30-b216-7001-c002-e0c5f8200116
title: 第 16 課：SSH 秘密引擎和 TOTP
slug: bai-16-ssh-secrets-engine-va-totp
description: >-
  SSH 秘密引擎 — 簽署 SSH 憑證（CA 模式）、OTP 模式、憑證授權單位設定、主機金鑰簽章。 TOTP 秘密引擎。 LDAP Secrets
  Engine — 動態 LDAP 憑證、RACF 密碼支援 (1.21)。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 16
section_title: 第 4 部分：進階秘密引擎
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-9016" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-9016）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="650" cy="160" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="30" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="160" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="30" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="850" cy="160" r="8" fill="#38bdf8" opacity="0.05"/>
    <圓cx =“750”cy =“80”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“750”cy =“136”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“750”cy =“164”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <圓cx =“890”cy =“80”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <line x1 =“600”y1 =“200”x2 =“1100”y2 =“280”筆畫=“#38bdf8”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“230”x2 =“1050”y2 =“300”筆畫=“#38bdf8”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「1030.3108891324553,182.5 1030.3108891324553,217.5 1000,235 969.6891108675446,217.595 969.6891108675446,217.591969. 1000,165”填滿=“無”描邊=“#38bdf8”描邊寬度=“1”不透明度=“0.12”/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“＃38bdf8”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“＃38bdf8”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 16 堂課</text>

  <!-- 標題 -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 16 課：SSH 機密引擎與 TOTP</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階機密引擎</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-ssh-secrets-engine"><strong>1. SSH 秘密引擎概述</strong></h2>

<p><strong>SSH Secrets Engine</strong>解決企業中管理SSH存取的問題。 Vault 提供了兩種機制，而不是手動分發 SSH 金鑰（且永不撤銷）：</p>

<表>
<標題>
<tr><th>模式</th><th>運作方式</th><th>建議</th></tr>
</標題>
<正文>
<tr><td><strong>簽章憑證 (CA)</strong></td><td>Vault 簽章 SSH 公鑰 → 短期憑證</td><td>✅ 建議</td></tr>
<tr><td><strong>OTP</strong></td><td>Vault 產生 SSH 的一次性密碼</td><td>舊版，需要Vault-ssh-helper</td></tr>
</tbody>
</表>

<h2 id="2-ssh-ca-mode"><strong>2. SSH CA模式（簽章憑證）</strong></h2>

<h3 id="kien-truc-ssh-ca"><strong>架構</strong></h3>

<pre><code>┌──────────┐ 1. 簽署我的金鑰 ┌────────────┐
│ 使用者 │ ──────────────────▶ │ 保險庫 │
│ │ │ SSH CA │
│ │ 2.SSH憑證 │ │
│ │ ◀────────────────── │ │
│ │ └────────────┘
│ │
│ │ 3.附憑證的SSH
│ │ ────────────────▶ ┌────────────┐
│ │ │ 伺服器 │
│ │ 4. 驗證憑證 │ （信任 CA） │
│ │ 針對CA │ │
└──────────┘ └──────────────┘
</code></pre>

<h3 id="setup-ssh-ca"><strong>設定 SSH CA</strong></h3>

<pre><code class="language-bash"># 啟用 SSH 機密引擎
vault secrets enable -path=ssh-client-signer ssh

# Sinh CA 金鑰對（hoặc 導入現有）
vault write ssh-client-signer/config/ca generate_signing_key=true

# Lấy CA 公鑰
vault read -field=public_key ssh-client-signer/config/ca > /etc/ssh/trusted-user-ca-keys.pem
</code></pre>

<h3 id="cau-hinh-server"><strong>將 SSH 伺服器設定為信任 Vault CA</strong></h3>

<pre><code class="language-bash"># Trên mỗi SSH 伺服器 — 類似 /etc/ssh/sshd_config
TrustedUserCAKeys /etc/ssh/trusted-user-ca-keys.pem

# 重新啟動sshd
sudo systemctl 重新啟動 sshd
</code></pre>

<h3 id="tao-role-ssh"><strong>創造角色</strong></h3><pre><code class="language-bash"># 開發人員角色 — SSH vào 開發伺服器
vault write ssh-client-signer/roles/dev-ssh \
  key_type=ca \
  default_user=開發人員\
  allowed_users =「開發人員，部署」\
  allowed_extensions =「允許pty，允許連接埠轉送」\
  default_extensions='{"permit-pty": ""}' \
  生存時間=8小時\
  最大生存時間=24小時 \
  allow_user_certificates=true \
  演算法簽署者=rsa-sha2-256

# 角色 cho admin — SSH vào mọi 伺服器
vault write ssh-client-signer/roles/admin-ssh \
  key_type=ca \
  預設使用者=管理員\
  allowed_users =「管理者，root，ubuntu」\
  allowed_extensions =「允許pty，允許連接埠轉發，允許代理轉發」\
  default_extensions='{"permit-pty": ""}' \
  生存時間=2小時\
  最大生存時間=8小時 \
  允許使用者憑證=true
</code></pre>

<h3 id="sign-key-ssh"><strong>簽署 SSH 金鑰</strong></h3>

<pre><code class="language-bash"># Sinh SSH 金鑰對 nếu chưa có
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N ""

# 簽署公鑰
vault write -field=signed_key ssh-client-signer/sign/dev-ssh \
  public_key=@$HOME/.ssh/id_ed25519.pub \
  valid_principals="開發人員" \
  ttl=8h > ~/.ssh/id_ed25519-cert.pub

#Kiểm tra 證書
ssh-keygen -L -f ~/.ssh/id_ed25519-cert.pub

# SSH với 證書
ssh -i ~/.ssh/id_ed25519developer@server.company.com
</code></pre>

<h3 id="host-key-signing"><strong>主機金鑰簽章</strong></h3>

<pre><code class="language-bash"># 啟用 SSH 引擎 cho 主機金鑰
vault secrets enable -path=ssh-host-signer ssh

# Sinh 主機 CA
vault write ssh-host-signer/config/ca generate_signing_key=true

# Tạo 主持人角色
vault write ssh-host-signer/roles/host-cert \
  key_type=ca \
  ttl=87600h \
  allow_host_certificates=true \
  allowed_domains="company.com,internal.company.com" \
  允許子域=true

# 簽署主機金鑰
vault write -field=signed_key ssh-host-signer/sign/host-cert \
  cert_type=主機\
  public_key=@/etc/ssh/ssh_host_ed25519_key.pub \
  valid_principals="server1.company.com" \
  > /etc/ssh/ssh_host_ed25519_key-cert.pub

# Cấu hình 伺服器 sử dụng 主機證書
# /etc/ssh/sshd_config
# HostCertificate /etc/ssh/ssh_host_ed25519_key-cert.pub
</code></pre>

<h2 id="3-ssh-otp-mode"><strong>3. SSH OTP 模式</strong></h2>

<pre><code class="language-bash"># 啟用
vault secrets enable -path=ssh-otp ssh

#陶角色
vault write ssh-otp/roles/otp-role \
  key_type=otp \
  預設使用者=ubuntu \
  cidr_list="10.0.0.0/8"

# 辛赫 OTP
vault write ssh-otp/creds/otp-role \
  ip=10.0.1.50 \
  使用者名稱=ubuntu
# 金鑰：1a2b3c4d-5e6f-7g8h

# SSH 和 OTP
ssh ubuntu@10.0.1.50
# 密碼：1a2b3c4d-5e6f-7g8h（一次性使用）
</code></pre>

<p><strong>注意：</strong> OTP 模式需要在目標伺服器上安裝 <code>vault-ssh-helper</code> 才能使用 Vault 驗證 OTP。 CA模式不需要在伺服器上進行任何額外的設定。 </p>

<h2 id="4-totp-secrets-engine"><strong>4. TOTP秘密引擎</strong></h2>

<p><strong>TOTP 秘密引擎</strong>允許 Vault 根據 RFC 6238 產生和驗證 TOTP（基於時間的一次性密碼）代碼。 </p>

<h3 id="totp-generator"><strong>TOTP 生成器模式</strong></h3>

<pre><code class="language-bash"># 啟用 TOTP
vault secrets enable totp

# Tạo key từ URL（khi 設定 2FA cho 服務）
vault write totp/keys/github \
  url="otpauth://totp/GitHub:john.doe?secret=JBSWY3DPEHPK3PXP&issuer=GitHub"

# Hoặc tạo key thủ công
vault write totp/keys/aws-console \
  生成=真\
  發行人=“AWS”\
  account_name="john.doe@company.com" \
  週期=30 \
  數字=6 \
  算法=SHA1

# 辛赫 TOTP 代碼
vault read totp/code/github
# 代碼：123456

# 驗證程式碼
vault write totp/code/github code=123456
# 有效：正確
</code></pre><h3 id="totp-use-case"><strong>使用案例：集中式 2FA 管理</strong></h3>

<p>不必讓每位員工在各自的手機上管理 2FA 代碼，Vault 可以成為 TOTP 金鑰的中央儲存位置 - 允許團隊輪換，並且在更換手機時不會遺失代碼。 </p>

<h2 id="5-ldap-secrets-engine"><strong>5. LDAP 秘密引擎</strong></h2>

<p><strong>LDAP 秘密引擎</strong>（與 LDAP 驗證方法不同）產生<strong>動態 LDAP 憑證</strong> - 自動建立和管理 LDAP 服務帳戶。 </p>

<pre><code class="language-bash"># 啟用 LDAP 機密引擎
vault secrets enable ldap

# Cấu hình kết nối
vault write ldap/config \
  binddn =“cn = admin，dc =公司，dc = com”\
  綁定密碼=“管理員密碼”\
  url =“ldaps://ldap.company.com”\
  架構=“openldap”

#Tạo動態角色
vault write ldap/role/dynamic-svc \
  creation_ldif=@creation.ldif \
  刪除_ldif=@deletion.ldif \
  rollback_ldif=@rollback.ldif \
  default_ttl=1h \
  最大生存時間=24小時

# Tạo 靜態角色（密碼輪換）
vault write ldap/static-role/svc-account \
  dn="cn=svc-app,ou=服務,dc=公司,dc=com" \
  使用者名稱=“svc-app”\
  旋轉週期=24小時

# Lấy 動態憑證
vault read ldap/creds/dynamic-svc
</code></pre>

<h3 id="racf-passphrase"><strong>RACF 密碼支援 (Vault 1.21)</strong></h3>

<p>Vault 1.21 在大型主機環境中新增了對 RACF 密碼短語的支援 - 允許密碼短語長於傳統的 8 個字元：</p>

<pre><code class="language-bash">vault 寫入 ldap/config \
  模式=“racf”\
  密碼原則=“racf-密碼原則”
</code></pre>

<h2 id="6-tong-ket"><strong>6。摘要</strong></h2>

<ul>
<li><p><strong>SSH CA 模式</strong> — 建議的短期簽章證書，伺服器上無需代理</p></li>
<li><p><strong>SSH OTP 模式</strong> — 一次性密碼，需要Vault-ssh-helper</p></li>
<li><p><strong>TOTP 引擎</strong> — sinh/驗證 TOTP 代碼，集中式 2FA 管理</p></li>
<li><p><strong>LDAP Secrets Engine</strong> — 動態 LDAP 憑證、靜態角色輪替</p></li>
<li><p><strong>RACF 密碼</strong> (1.21) — 大型主機環境支援</p></li>
</ul>

<p>下一篇文章將探討轉換和標記化 - PCI DSS、PII 和合規性要求的資料保護。 </p>
