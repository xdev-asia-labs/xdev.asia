---
id: 019d8b30-b201-7001-c002-e0c5f8200101
title: 'Bài 1: Giới thiệu HashiCorp Vault - Secret Management trong Enterprise'
slug: bai-1-gioi-thieu-hashicorp-vault-secret-management-trong-enterprise
description: >-
  Tìm hiểu HashiCorp Vault là gì, tại sao cần Secret Management tập trung,
  kiến trúc Vault (Storage Backend, Barrier, Secrets Engines, Auth Methods,
  Audit Devices, System Backend), so sánh với AWS Secrets Manager/Azure Key Vault/
  Google Secret Manager, và các use cases thực tế. Tổng quan Vault 1.21.x.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền tảng HashiCorp Vault"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1997" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1997)"/>

  <!-- Decorations -->
  <g>
    <circle cx="714" cy="32" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="828" cy="206" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="942" cy="120" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="1056" cy="34" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="670" cy="208" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="172" x2="1100" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="202" x2="1050" y2="272" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1045.38268590218,208.5 1045.38268590218,235.5 1022,249 998.6173140978201,235.5 998.6173140978201,208.5 1022,195" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Bài 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 1: Giới thiệu HashiCorp Vault - Secret</tspan>
      <tspan x="60" dy="42">Management trong Enterprise</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng HashiCorp Vault</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-hashicorp-vault-la-gi"><strong>1. HashiCorp Vault là gì?</strong></h2>
<p><strong>HashiCorp Vault</strong> là một giải pháp quản lý bí mật (Secret Management) mã nguồn mở, cung cấp khả năng lưu trữ, truy cập và kiểm soát chặt chẽ các thông tin nhạy cảm như passwords, API keys, certificates, encryption keys và các loại secrets khác. Vault được phát triển bởi HashiCorp và hiện là một trong những công cụ hàng đầu cho việc bảo mật infrastructure.</p>

<p>Vault cung cấp một giao diện thống nhất cho mọi loại secret, đồng thời kiểm soát truy cập chặt chẽ và ghi lại audit log chi tiết cho mọi tương tác.</p>

<h3 id="lich-su-phat-trien"><strong>Lịch sử phát triển</strong></h3>
<ul>
<li><p><strong>2015</strong>: HashiCorp Vault 0.1 ra mắt — quản lý secrets cơ bản</p></li>
<li><p><strong>2017</strong>: Vault 0.9 — Identity Secrets Engine, Sentinel policies (Enterprise)</p></li>
<li><p><strong>2018</strong>: Vault 1.0 — Integrated Storage (Raft), Auto-unseal, nhiều cải tiến production</p></li>
<li><p><strong>2020</strong>: Vault 1.5 — Transform Secrets Engine, UI improvements</p></li>
<li><p><strong>2022</strong>: Vault 1.12 — ACME protocol cho PKI, Vault Agent improvements</p></li>
<li><p><strong>2024</strong>: Vault 1.17 — Vault Secrets Operator GA, Event system</p></li>
<li><p><strong>2025-2026</strong>: Vault 1.21.x — phiên bản hiện tại với SPIFFE auth, MFA TOTP self-enrollment, Static roles cho Azure, Secret Recovery</p></li>
</ul>

<h2 id="2-tai-sao-can-secret-management"><strong>2. Tại sao cần Secret Management tập trung?</strong></h2>
<p>Trong hệ thống enterprise hiện đại, secrets được sử dụng ở khắp nơi:</p>
<ul>
<li><p>Database credentials cho mỗi microservice</p></li>
<li><p>API keys để tích hợp với third-party services</p></li>
<li><p>TLS certificates cho mTLS giữa các services</p></li>
<li><p>SSH keys cho server access</p></li>
<li><p>Cloud credentials (AWS IAM, Azure Service Principal, GCP Service Account)</p></li>
<li><p>Encryption keys cho data at rest</p></li>
</ul>

<p>Nếu không có giải pháp tập trung, secrets thường bị:</p>
<ul>
<li><p><strong>Secret sprawl</strong> — secrets nằm rải rác trong config files, environment variables, CI/CD pipelines</p></li>
<li><p><strong>Thiếu rotation</strong> — credentials không bao giờ được thay đổi vì sợ ảnh hưởng hệ thống</p></li>
<li><p><strong>Thiếu audit</strong> — không biết ai truy cập secret nào, khi nào</p></li>
<li><p><strong>Hardcoded secrets</strong> — secrets commit trực tiếp vào source code</p></li>
<li><p><strong>Over-privileged access</strong> — developers có quyền truy cập nhiều hơn cần thiết</p></li>
</ul>

<h2 id="3-kien-truc-vault"><strong>3. Kiến trúc HashiCorp Vault</strong></h2>
<p>Vault có kiến trúc modular với các thành phần chính:</p>

<h3 id="storage-backend"><strong>Storage Backend</strong></h3>
<p>Storage Backend chịu trách nhiệm lưu trữ dữ liệu đã mã hóa. Vault không tin tưởng storage backend — tất cả dữ liệu được mã hóa trước khi ghi. Các options bao gồm:</p>
<ul>
<li><p><strong>Integrated Storage (Raft)</strong> — recommended, built-in, HA support</p></li>
<li><p><strong>Consul</strong> — HashiCorp Consul storage backend</p></li>
<li><p><strong>File</strong> — local file system, không hỗ trợ HA</p></li>
<li><p><strong>In-memory</strong> — chỉ cho development</p></li>
</ul>

<h3 id="barrier"><strong>Barrier (Encryption Layer)</strong></h3>
<p>Barrier là lớp mã hóa bao quanh Vault. Mọi dữ liệu đi vào hoặc ra khỏi Vault đều được mã hóa bằng AES-256-GCM. Barrier chỉ được "mở" khi Vault ở trạng thái unsealed.</p>

<h3 id="secrets-engines"><strong>Secrets Engines</strong></h3>
<p>Secrets Engines là các components lưu trữ, sinh hoặc mã hóa dữ liệu. Mỗi engine được mount tại một path riêng:</p>
<ul>
<li><p><strong>KV</strong> — lưu trữ key-value pairs (static secrets)</p></li>
<li><p><strong>Database</strong> — sinh dynamic database credentials</p></li>
<li><p><strong>PKI</strong> — Certificate Authority, sinh TLS certificates</p></li>
<li><p><strong>Transit</strong> — Encryption as a Service</p></li>
<li><p><strong>AWS/Azure/GCP</strong> — sinh dynamic cloud credentials</p></li>
<li><p><strong>SSH</strong> — signed SSH certificates hoặc OTP</p></li>
</ul>

<h3 id="auth-methods"><strong>Auth Methods</strong></h3>
<p>Auth Methods xác thực clients và gán identity + policies:</p>
<ul>
<li><p><strong>Token</strong> — xác thực bằng Vault token</p></li>
<li><p><strong>AppRole</strong> — cho machine-to-machine authentication</p></li>
<li><p><strong>LDAP/OIDC</strong> — Human users authentication</p></li>
<li><p><strong>Kubernetes</strong> — Pod-based authentication</p></li>
<li><p><strong>AWS/Azure/GCP</strong> — Cloud workload authentication</p></li>
<li><p><strong>SPIFFE</strong> — SVID-based authentication (mới trong 1.21)</p></li>
</ul>

<h3 id="audit-devices"><strong>Audit Devices</strong></h3>
<p>Audit Devices ghi lại mọi request và response với Vault. Mỗi request được log bất kể authentication hoặc authorization thành công hay thất bại.</p>

<h2 id="4-so-sanh-vault-vs"><strong>4. So sánh Vault với các giải pháp khác</strong></h2>

<table>
<thead>
<tr>
<th>Tính năng</th>
<th>HashiCorp Vault</th>
<th>AWS Secrets Manager</th>
<th>Azure Key Vault</th>
<th>GCP Secret Manager</th>
</tr>
</thead>
<tbody>
<tr>
<td>Open Source</td>
<td>✅ (Community Edition)</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>Multi-cloud</td>
<td>✅</td>
<td>❌ (AWS only)</td>
<td>❌ (Azure only)</td>
<td>❌ (GCP only)</td>
</tr>
<tr>
<td>Dynamic Secrets</td>
<td>✅</td>
<td>⚠️ (hạn chế)</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>PKI/CA</td>
<td>✅</td>
<td>❌</td>
<td>✅ (hạn chế)</td>
<td>❌</td>
</tr>
<tr>
<td>Encryption as a Service</td>
<td>✅ (Transit)</td>
<td>❌</td>
<td>✅ (hạn chế)</td>
<td>❌</td>
</tr>
<tr>
<td>SSH Certificates</td>
<td>✅</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>On-premises</td>
<td>✅</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>Plugin Ecosystem</td>
<td>✅ (extensible)</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
</tbody>
</table>

<h2 id="5-cac-use-cases"><strong>5. Các use cases chính của Vault</strong></h2>

<h3 id="static-secrets"><strong>Static Secrets Management</strong></h3>
<p>Lưu trữ, rotate và encrypt arbitrary strings dưới dạng key-value pairs sử dụng KV Secrets Engine. Phù hợp cho API keys, configuration values, database passwords.</p>

<h3 id="dynamic-credentials"><strong>Dynamic Credentials</strong></h3>
<p>Sinh credentials on-demand với TTL giới hạn cho databases (PostgreSQL, MySQL, MongoDB), cloud providers (AWS IAM, Azure SP, GCP SA), và messaging systems. Credentials tự động bị revoke khi hết hạn.</p>

<h3 id="encryption-as-a-service"><strong>Encryption as a Service</strong></h3>
<p>Sử dụng Transit Secrets Engine để mã hóa/giải mã dữ liệu mà không cần lưu trữ encryption keys trong ứng dụng. Ứng dụng gửi plaintext đến Vault và nhận lại ciphertext.</p>

<h3 id="pki-certificate-management"><strong>PKI/Certificate Management</strong></h3>
<p>Vault PKI Secrets Engine hoạt động như một Certificate Authority hoàn chỉnh, sinh/sign certificates TLS, quản lý certificate lifecycle, CRL, OCSP và hỗ trợ ACME protocol.</p>

<h3 id="identity-based-access"><strong>Identity-based Access</strong></h3>
<p>Vault kết hợp nhiều identity sources (LDAP, OIDC, Kubernetes, Cloud IAM) thành một entity thống nhất, cho phép quản lý policies nhất quán trên mọi platform.</p>

<h2 id="6-vault-121x"><strong>6. Vault 1.21.x — Điểm mới</strong></h2>
<ul>
<li><p><strong>SPIFFE Authentication</strong> — xác thực workloads bằng SVID trong SPIFFE environments</p></li>
<li><p><strong>MFA TOTP Self-enrollment</strong> — users tự đăng ký MFA với QR codes khi login</p></li>
<li><p><strong>KV v2 Version Attribution</strong> — xem ai tạo mỗi version của secret</p></li>
<li><p><strong>Azure Static Roles</strong> — quản lý long-lived Azure credentials</p></li>
<li><p><strong>Secret Recovery</strong> — khôi phục secrets từ snapshots mà không overwrite dữ liệu hiện tại</p></li>
<li><p><strong>Snowflake Root Rotation</strong> — tự động rotate key-pair root credentials cho Snowflake</p></li>
<li><p><strong>RACF Passphrase Support</strong> — hỗ trợ passphrases dài hơn trong LDAP Secrets Engine</p></li>
<li><p><strong>PKI Certificate Counter</strong> — theo dõi số lượng certificates đã issue hàng tháng</p></li>
</ul>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>
<p>HashiCorp Vault là giải pháp secret management toàn diện nhất hiện nay, phù hợp cho cả on-premises và cloud environments. Với plugin ecosystem phong phú, khả năng sinh dynamic credentials, encryption as a service, PKI management và identity-based access, Vault là thành phần không thể thiếu trong kiến trúc Zero Trust hiện đại.</p>

<p>Trong bài tiếp theo, chúng ta sẽ cài đặt Vault trên nhiều platform khác nhau và tìm hiểu quy trình khởi tạo, seal/unseal.</p>
