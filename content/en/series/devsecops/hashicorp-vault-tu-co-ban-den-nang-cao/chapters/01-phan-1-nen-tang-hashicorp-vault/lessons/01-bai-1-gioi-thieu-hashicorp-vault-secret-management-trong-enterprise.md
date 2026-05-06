---
id: 019d8b30-b201-7001-c002-e0c5f8200101
title: 'Lesson 1: Introducing HashiCorp Vault - Secret Management in Enterprise'
slug: bai-1-gioi-thieu-hashicorp-vault-secret-management-trong-enterprise
description: Learn what HashiCorp Vault is, why centralized Secret Management is needed, Vault architecture (Storage Backend, Barrier, Secrets Engines, Auth Methods, Audit Devices, System Backend), comparison with AWS Secrets Manager/Azure Key Vault/Google Secret Manager, and real-life use cases. Vault 1.21.x Overview.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 1: HashiCorp Vault Platform'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault from Basic to Advanced
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: en
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
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 1: Introducing HashiCorp Vault - Secret</tspan>
      <tspan x="60" dy="42">Management trong Enterprise</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: HashiCorp Vault Platform</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-hashicorp-vault-la-gi"><strong>1. What is HashiCorp Vault?</strong></h2>
<p><strong>HashiCorp Vault</strong> is an open source secret management solution that provides the ability to store, access and tightly control sensitive information such as passwords, API keys, certificates, encryption keys and other secrets. Vault was developed by HashiCorp and is currently one of the leading tools for infrastructure security.</p>

<p>Vault provides a unified interface for all types of secrets, while tightly controlling access and recording detailed audit logs for every interaction.</p>

<h3 id="lich-su-phat-trien"><strong>Development history</strong></h3>
<ul>
<li><p><strong>2015</strong>: HashiCorp Vault 0.1 launched — basic secrets management</p></li>
<li><p><strong>2017</strong>: Vault 0.9 — Identity Secrets Engine, Sentinel policies (Enterprise)</p></li>
<li><p><strong>2018</strong>: Vault 1.0 — Integrated Storage (Raft), Auto-unseal, many production improvements</p></li>
<li><p><strong>2020</strong>: Vault 1.5 — Transform Secrets Engine, UI improvements</p></li>
<li><p><strong>2022</strong>: Vault 1.12 — ACME protocol cho PKI, Vault Agent improvements</p></li>
<li><p><strong>2024</strong>: Vault 1.17 — Vault Secrets Operator GA, Event system</p></li>
<li><p><strong>2025-2026</strong>: Vault 1.21.x — current version with SPIFFE auth, MFA TOTP self-enrollment, Static roles for Azure, Secret Recovery</p></li>
</ul>

<h2 id="2-tai-sao-can-secret-management"><strong>2. Why is there a need for centralized Secret Management?</strong></h2>
<p>In modern enterprise systems, secrets are used everywhere:</p>
<ul>
<li><p>Database credentials for each microservice</p></li>
<li><p>API keys for integration with third-party services</p></li>
<li><p>TLS certificates for mTLS between services</p></li>
<li><p>SSH keys cho server access</p></li>
<li><p>Cloud credentials (AWS IAM, Azure Service Principal, GCP Service Account)</p></li>
<li><p>Encryption keys cho data at rest</p></li>
</ul>

<p>Without a centralized solution, secrets are often:</p>
<ul>
<li><p><strong>Secret sprawl</strong> — secrets scattered in config files, environment variables, CI/CD pipelines</p></li>
<li><p><strong>Lack of rotation</strong> — credentials should never be changed for fear of affecting the system</p></li>
<li><p><strong>Missing audit</strong> — don't know who accessed which secret and when</p></li>
<li><p><strong>Hardcoded secrets</strong> — secrets commit directly to source code</p></li>
<li><p><strong>Over-privileged access</strong> — developers have more access than necessary</p></li>
</ul>

<h2 id="3-kien-truc-vault"><strong>3. HashiCorp Vault Architecture</strong></h2>
<p>Vault has a modular architecture with the following main components:</p>

<h3 id="storage-backend"><strong>Storage Backend</strong></h3>
<p>Storage Backend is responsible for storing encrypted data. Vault is agnostic to the storage backend — all data is encrypted before being written. Options include:</p>
<ul>
<li><p><strong>Integrated Storage (Raft)</strong> — recommended, built-in, HA support</p></li>
<li><p><strong>Consul</strong> — HashiCorp Consul storage backend</p></li>
<li><p><strong>File</strong> — local file system, does not support HA</p></li>
<li><p><strong>In-memory</strong> — development only</p></li>
</ul>

<h3 id="barrier"><strong>Barrier (Encryption Layer)</strong></h3>
<p>Barrier is the encryption layer surrounding Vault. Any data going into or out of the Vault is encrypted with AES-256-GCM. The Barrier is only "opened" when the Vault is in an unsealed state.</p>

<h3 id="secrets-engines"><strong>Secrets Engines</strong></h3>
<p>Secrets Engines are components that store, generate or encode data. Each engine is mounted at a separate path:</p>
<ul>
<li><p><strong>KV</strong> — stores key-value pairs (static secrets)</p></li>
<li><p><strong>Database</strong> — sinh dynamic database credentials</p></li>
<li><p><strong>PKI</strong> — Certificate Authority, sinh TLS certificates</p></li>
<li><p><strong>Transit</strong> — Encryption as a Service</p></li>
<li><p><strong>AWS/Azure/GCP</strong> — sinh dynamic cloud credentials</p></li>
<li><p><strong>SSH</strong> — signed SSH certificates or OTP</p></li>
</ul>

<h3 id="auth-methods"><strong>Auth Methods</strong></h3>
<p>Auth Methods authenticates clients and assigns identities + policies:</p>
<ul>
<li><p><strong>Token</strong> — authenticate with Vault token</p></li>
<li><p><strong>AppRole</strong> — cho machine-to-machine authentication</p></li>
<li><p><strong>LDAP/OIDC</strong> — Human users authentication</p></li>
<li><p><strong>Kubernetes</strong> — Pod-based authentication</p></li>
<li><p><strong>AWS/Azure/GCP</strong> — Cloud workload authentication</p></li>
<li><p><strong>SPIFFE</strong> — SVID-based authentication (new in 1.21)</p></li>
</ul>

<h3 id="audit-devices"><strong>Audit Devices</strong></h3>
<p>Audit Devices records every request and response with Vault. Each request is logged regardless of whether authentication or authorization succeeds or fails.</p>

<h2 id="4-so-sanh-vault-vs"><strong>4. Compare Vault with other solutions</strong></h2>

<table>
<thead>
<tr>
<th>Feature</th>
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
<td>⚠️ (limited)</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>PKI/CA</td>
<td>✅</td>
<td>❌</td>
<td>✅ (limited)</td>
<td>❌</td>
</tr>
<tr>
<td>Encryption as a Service</td>
<td>✅ (Transit)</td>
<td>❌</td>
<td>✅ (limited)</td>
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

<h2 id="5-cac-use-cases"><strong>5. Key use cases of Vault</strong></h2>

<h3 id="static-secrets"><strong>Static Secrets Management</strong></h3>
<p>Store, rotate, and encrypt arbitrary strings as key-value pairs using the KV Secrets Engine. Suitable for API keys, configuration values, database passwords.</p>

<h3 id="dynamic-credentials"><strong>Dynamic Credentials</strong></h3>
<p>Generates on-demand credentials with limited TTL for databases (PostgreSQL, MySQL, MongoDB), cloud providers (AWS IAM, Azure SP, GCP SA), and messaging systems. Credentials are automatically revoked when they expire.</p>

<h3 id="encryption-as-a-service"><strong>Encryption as a Service</strong></h3>
<p>Use Transit Secrets Engine to encrypt/decrypt data without storing encryption keys in the application. The application sends plaintext to Vault and receives ciphertext back.</p>

<h3 id="pki-certificate-management"><strong>PKI/Certificate Management</strong></h3>
<p>Vault PKI Secrets Engine acts as a complete Certificate Authority, generating/signing TLS certificates, managing certificate lifecycle, CRL, OCSP and supporting ACME protocol.</p>

<h3 id="identity-based-access"><strong>Identity-based Access</strong></h3>
<p>Vault combines multiple identity sources (LDAP, OIDC, Kubernetes, Cloud IAM) into a unified entity, allowing for consistent policy management across all platforms.</p>

<h2 id="6-vault-121x"><strong>6. Vault 1.21.x — What's new</strong></h2>
<ul>
<li><p><strong>SPIFFE Authentication</strong> — authenticate workloads using SVID in SPIFFE environments</p></li>
<li><p><strong>MFA TOTP Self-enrollment</strong> — users self-enroll in MFA with QR codes when logging in</p></li>
<li><p><strong>KV v2 Version Attribution</strong> — see who created each version of secret</p></li>
<li><p><strong>Azure Static Roles</strong> — manage long-lived Azure credentials</p></li>
<li><p><strong>Secret Recovery</strong> — restore secrets from snapshots without overwriting existing data</p></li>
<li><p><strong>Snowflake Root Rotation</strong> — automatically rotate key-pair root credentials for Snowflake</p></li>
<li><p><strong>RACF Passphrase Support</strong> — supports longer passphrases in LDAP Secrets Engine</p></li>
<li><p><strong>PKI Certificate Counter</strong> — track the number of certificates issued monthly</p></li>
</ul>

<h2 id="7-tong-ket"><strong>7. Summary</strong></h2>
<p>HashiCorp Vault is the most comprehensive secret management solution today, suitable for both on-premises and cloud environments. With a rich plugin ecosystem, dynamic credentials generation, encryption as a service, PKI management and identity-based access, Vault is an indispensable component in a modern Zero Trust architecture.</p>

<p>In the next article, we will install Vault on many different platforms and learn the initialization and seal/unseal process.</p>
