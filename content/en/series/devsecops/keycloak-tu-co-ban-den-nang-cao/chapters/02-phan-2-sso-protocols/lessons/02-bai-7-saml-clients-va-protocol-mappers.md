---
id: 019d8b30-b107-7001-c001-e0c5f8100107
title: 'Lesson 7: SAML Clients and Protocol Mappers'
slug: bai-7-saml-clients-va-protocol-mappers
description: Create and configure SAML 2.0 clients, SAML bindings (POST, Redirect, Artifact), assertions configuration, XML signature and encryption, Entity Descriptor import, IDP Initiated Login. Protocol Mappers for OIDC and SAML, Lightweight Access Tokens, Pairwise Subject Identifier.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 7
section_title: 'Part 2: SSO Protocols - OpenID Connect and SAML'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak from Basic to Advanced
  slug: keycloak-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7385" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7385)"/>

  <!-- Decorations -->
  <g>
    <circle cx="809" cy="37" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1018" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="727" cy="215" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="936" cy="44" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="645" cy="133" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="207" x2="1100" y2="287" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="237" x2="1050" y2="307" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1043.3730669589463,186 1043.3730669589463,228 1007,249 970.6269330410536,228 970.6269330410536,186 1007,165" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Lesson 7</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 7: SAML Clients and Protocol Mappers</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: SSO Protocols - OpenID Connect and SAML</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tong-quan-saml-2"><strong>1. Overview of SAML 2.0 in Keycloak</strong></h2>

<p>SAML 2.0 (Security Assertion Markup Language) is an XML-based authentication protocol widely used in the enterprise — especially when integrating with legacy systems, SaaS applications (Salesforce, ServiceNow, AWS), or government organizations.</p>

<h3 id="saml-vs-oidc"><strong>SAML 2.0 vs OpenID Connect</strong></h3>
<table>
<thead>
<tr><th>Features</th><th>SAML 2.0</th><th>OpenID Connect</th></tr>
</thead>
<tbody>
<tr><td>Format</td><td>XML</td><td>JSON (JWT)</td></tr>
<tr><td>Transport</td><td>HTTP Redirect, POST, Artifact</td><td>HTTP REST</td></tr>
<tr><td>Token</td><td>SAML Assertion (XML)</td><td>JWT</td></tr>
<tr><td>Size</td><td>Larger (XML verbose)</td><td>Compact (JSON)</td></tr>
<tr><td>Mobile support</td><td>Poor (heavy XML parsing)</td><td>Good (JSON native)</td></tr>
<tr><td>Use case main</td><td>Enterprise SSO, legacy systems</td><td>Modern web/mobile apps</td></tr>
<tr><td>Complexity</td><td>High</td><td>Lower</td></tr>
<tr><td>Logout</td><td>SLO (Single Logout)</td><td>RP-Initiated, Backchannel, Front-channel</td></tr>
</tbody>
</table>

<p><strong>When to use SAML?</strong></p>
<ul>
<li><p>Integrate with SaaS applications that require SAML (Salesforce, Google Workspace, AWS)</p></li>
<li><p>Associate with an IdP or SP that only supports SAML</p></li>
<li><p>Requires compliance with government organization standards</p></li>
<li><p>Migration from ADFS system, Shibboleth</p></li>
</ul>

<h3 id="saml-terminology"><strong>SAML Terms</strong></h3>
<table>
<thead>
<tr><th>Term</th><th>Description</th><th>OIDC equivalent</th></tr>
</thead>
<tbody>
<tr><td>Identity Provider (IdP)</td><td>User authentication party (Keycloak)</td><td>OpenID Provider (OP)</td></tr>
<tr><td>Service Provider (SP)</td><td>Authentication requester (application)</td><td>Relying Party (RP)</td></tr>
<tr><td>Assertion</td><td>XML document containing authentication information</td><td>ID Token</td></tr>
<tr><td>AuthnRequest</td><td>Authentication request from SP → IdP</td><td>Authorization Request</td></tr>
<tr><td>ACS URL</td><td>Assertion Consumer Service URL</td><td>Redirect URI</td></tr>
<tr><td>Entity ID</td><td>Unique identifier cho SP/IdP</td><td>Client ID / Issuer</td></tr>
<tr><td>Metadata</td><td>XML describing endpoints, certificates</td><td>Well-Known Configuration</td></tr>
<tr><td>NameID</td><td>User identifier trong assertion</td><td>sub claim</td></tr>
<tr><td>Attribute Statement</td><td>User attributes trong assertion</td><td>Claims trong JWT</td></tr>
</tbody>
</table>

<h2 id="2-tao-saml-client"><strong>2. Create SAML 2.0 Client</strong></h2>

<h3 id="tao-saml-client-admin-console"><strong>2.1 Create via Admin Console</strong></h3>
<ol>
<li><p>Access <strong>Admin Console</strong> → select realm → <strong>Clients</strong> → <strong>Create client</strong></p></li>
<li><p><strong>General Settings</strong>:</p>
<ul>
<li><strong>Client type</strong>: SAML</li>
<li><strong>Client ID</strong>: URL-based Entity ID, for example <code>https://myapp.example.com/saml/metadata</code></li>
<li><strong>Name</strong>: My SAML Application</li>
</ul>
</li>
<li><p>Click <strong>Next</strong> and <strong>Save</strong></p></li>
</ol>

<h3 id="import-entity-descriptor"><strong>2.2 Import from Entity Descriptor (Metadata)</strong></h3>
<p>Fastest way to create SAML client — import XML metadata from Service Provider:</p>
<ol>
<li><p>Access <strong>Clients</strong> → <strong>Import client</strong></p></li>
<li><p>Upload metadata XML file or paste metadata URL</p></li>
<li><p>Auto-populate Keycloak: Entity ID, ACS URL, SLO URL, certificates, bindings</p></li>
</ol>

<p><strong>Service Provider XML metadata example:</strong></p>
<pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata"
    entityID="https://myapp.example.com/saml/metadata"&gt;
  &lt;md:SPSSODescriptor
      AuthnRequestsSigned="true"
      WantAssertionsSigned="true"
      protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol"&gt;

    &lt;md:KeyDescriptor use="signing"&gt;
      &lt;ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#"&gt;
        &lt;ds:X509Data&gt;
          &lt;ds:X509Certificate&gt;MIICzDCCAbSg...&lt;/ds:X509Certificate&gt;
        &lt;/ds:X509Data&gt;
      &lt;/ds:KeyInfo&gt;
    &lt;/md:KeyDescriptor&gt;

    &lt;md:KeyDescriptor use="encryption"&gt;
      &lt;ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#"&gt;
        &lt;ds:X509Data&gt;
          &lt;ds:X509Certificate&gt;MIICzDCCAbSg...&lt;/ds:X509Certificate&gt;
        &lt;/ds:X509Data&gt;
      &lt;/ds:KeyInfo&gt;
    &lt;/md:KeyDescriptor&gt;

    &lt;md:SingleLogoutService
        Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
        Location="https://myapp.example.com/saml/slo"/&gt;

    &lt;md:NameIDFormat&gt;
      urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress
    &lt;/md:NameIDFormat&gt;

    &lt;md:AssertionConsumerService
        Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
        Location="https://myapp.example.com/saml/acs"
        index="0"
        isDefault="true"/&gt;

  &lt;/md:SPSSODescriptor&gt;
&lt;/md:EntityDescriptor&gt;</code></pre>

<h3 id="keycloak-idp-metadata"><strong>2.3 Get Keycloak IdP Metadata</strong></h3>
<p>Service Provider needs Keycloak metadata (IdP) for configuration. Metadata URL:</p>
<pre><code>GET https://&lt;keycloak-host&gt;/realms/&lt;realm-name&gt;/protocol/saml/descriptor</code></pre>

<p>Metadata bao gồm: Entity ID, SSO endpoints, SLO endpoints, signing/encryption certificates.</p>

<h2 id="3-saml-client-settings"><strong>3. SAML Client Settings chi tiết</strong></h2>

<h3 id="saml-settings-tab"><strong>3.1 Tab Settings</strong></h3>
<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th><th>Giá trị khuyến nghị</th></tr>
</thead>
<tbody>
<tr><td>Client ID (Entity ID)</td><td>SAML Entity ID — unique identifier cho SP</td><td>URL format: <code>https://app.example.com/saml</code></td></tr>
<tr><td>Name</td><td>Tên hiển thị</td><td>Tên ứng dụng</td></tr>
<tr><td>Client Signature Required</td><td>SP phải ký AuthnRequest</td><td>ON (production)</td></tr>
<tr><td>Force POST Binding</td><td>Bắt buộc dùng POST binding cho responses</td><td>ON</td></tr>
<tr><td>Front Channel Logout</td><td>Logout qua browser redirect</td><td>ON</td></tr>
<tr><td>Force Name ID Format</td><td>Bắt buộc Name ID format cụ thể</td><td>Tùy yêu cầu</td></tr>
<tr><td>Name ID Format</td><td>Format of NameID</td><td>email hoặc persistent</td></tr>
<tr><td>Include AuthnStatement</td><td>Bao gồm AuthnStatement trong assertion</td><td>ON</td></tr>
<tr><td>Sign Documents</td><td>Ký toàn bộ SAML response</td><td>ON</td></tr>
<tr><td>Sign Assertions</td><td>Ký assertion bên trong response</td><td>ON (khuyến nghị)</td></tr>
</tbody>
</table>

<h3 id="saml-bindings"><strong>3.2 SAML Bindings</strong></h3>
<p>SAML hỗ trợ nhiều binding — cách thức truyền tải SAML messages giữa SP và IdP:</p>

<table>
<thead>
<tr><th>Binding</th><th>Mô tả</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td><strong>HTTP-POST</strong></td><td>Message gửi qua HTML form auto-submit</td><td>Default cho assertions (lớn)</td></tr>
<tr><td><strong>HTTP-Redirect</strong></td><td>Message gửi qua URL query parameter</td><td>AuthnRequest (nhỏ)</td></tr>
<tr><td><strong>Artifact</strong></td><td>Chỉ gửi artifact reference, SP lấy assertion qua backchannel</td><td>High-security, large assertions</td></tr>
</tbody>
</table>

<p><strong>Cấu hình Bindings trong client settings:</strong></p>
<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>Master SAML Processing URL</td><td>URL chung cho tất cả SAML bindings</td></tr>
<tr><td>Assertion Consumer Service POST Binding URL</td><td>ACS URL cho POST binding</td></tr>
<tr><td>Assertion Consumer Service Redirect Binding URL</td><td>ACS URL cho Redirect binding</td></tr>
<tr><td>Assertion Consumer Service Artifact Binding URL</td><td>ACS URL cho Artifact binding</td></tr>
<tr><td>Logout Service POST Binding URL</td><td>SLO URL cho POST binding</td></tr>
<tr><td>Logout Service Redirect Binding URL</td><td>SLO URL cho Redirect binding</td></tr>
<tr><td>Logout Service Artifact Binding URL</td><td>SLO URL cho Artifact binding</td></tr>
</tbody>
</table>

<pre><code># Ví dụ cấu hình bindings
Master SAML Processing URL: https://myapp.example.com/saml
Assertion Consumer Service POST Binding URL: https://myapp.example.com/saml/acs
Logout Service POST Binding URL: https://myapp.example.com/saml/slo</code></pre>

<p><strong>Artifact Binding details:</strong></p>
<p>Artifact binding is different from POST/Redirect — instead of sending the entire assertion through the browser, Keycloak only sends a <strong>artifact</strong> (reference ID). The SP then calls directly (backchannel) to Keycloak to get the actual assertion.</p>

<pre><code>┌──────────┐     ┌──────────┐     ┌──────────┐
│  Browser │     │    SP    │     │ Keycloak │
└────┬─────┘     └────┬─────┘     └────┬─────┘
     │                │                │
     │  1. Login      │                │
     │───────────────>│                │
     │  2. AuthnRequest               │
     │<──────────────────────────────>│
     │  3. Authentication              │
     │<──────────────────────────────>│
     │  4. Artifact (POST/Redirect)   │
     │<──────────────────────────────│
     │───────────────>│                │
     │                │ 5. ArtifactResolve (backchannel SOAP)
     │                │───────────────>│
     │                │ 6. ArtifactResponse (assertion)
     │                │<──────────────│
     │  7. Authenticated               │
     │<───────────────│                │</code></pre>

<p>Artifact binding is safer because the assertion does not pass through the browser — useful when the assertion contains sensitive data.</p>

<h3 id="xml-signature-encryption"><strong>3.3 XML Signature and Encryption</strong></h3>

<p><strong>Signing Configuration:</strong></p>
<table>
<thead>
<tr><th>Setting</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>Signature Algorithm</td><td>XML signing algorithm: RSA_SHA256 (recommended), RSA_SHA512, DSA_SHA1</td></tr>
<tr><td>SAML Signature Key Name</td><td>Key name trong signature: KEY_ID, CERT_SUBJECT, NONE</td></tr>
<tr><td>Canonicalization Method</td><td>XML canonicalization: EXCLUSIVE (recommended)</td></tr>
</tbody>
</table>

<p><strong>Encryption Configuration:</strong></p>
<p>Enable <strong>Encrypt Assertions</strong> to encrypt assertions — only the SP with the corresponding private key can decrypt:</p>
<ul>
<li><p>Upload SP's <strong>encryption certificate</strong> trong tab <strong>Keys</strong></p></li>
<li><p>Encryption Algorithm: AES128, AES256 (recommended)</p></li>
</ul>

<pre><code># Keycloak sẽ mã hóa assertion bằng SP's public key
# Flow: Sign assertion → Encrypt signed assertion → Send to SP
# SP: Decrypt assertion → Verify signature → Extract user info</code></pre>

<h3 id="saml-keys-tab"><strong>3.4 Tab Keys</strong></h3>
<p>Manage certificates for SAML clients:</p>
<ul>
<li><p><strong>Signing Key</strong>: Certificate that SP uses to sign AuthnRequest — Keycloak used to verify</p></li>
<li><p><strong>Encryption Key</strong>: Certificate that Keycloak uses to encrypt assertions — SP uses private key to decrypt</p></li>
</ul>

<p>Import certificate from PEM, JKS, or PKCS12 file:</p>
<pre><code># Generate self-signed certificate cho SP
openssl req -x509 -newkey rsa:2048 \
  -keyout sp-private.pem -out sp-certificate.pem \
  -days 365 -nodes \
  -subj "/CN=myapp.example.com"

# Import sp-certificate.pem vào Keycloak client Keys tab</code></pre>

<h2 id="4-saml-assertions"><strong>4. SAML Assertions Configuration</strong></h2>

<h3 id="name-id-format"><strong>4.1 Name ID Format</strong></h3>
<p>Name ID determines how Keycloak sends the user identifier in assertion:</p>

<table>
<thead>
<tr><th>Format</th><th>Description</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td><code>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</code></td><td>Email address</td><td>Most popular</td></tr>
<tr><td><code>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</code></td><td>Unique persistent ID for each SP</td><td>Don't want to reveal email</td></tr>
<tr><td><code>urn:oasis:names:tc:SAML:2.0:nameid-format:transient</code></td><td>Temporary ID, changes each session</td><td>Privacy-sensitive</td></tr>
<tr><td><code>urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified</code></td><td>Username or Keycloak user ID</td><td>Flexible</td></tr>
</tbody>
</table>

<h3 id="assertion-lifespan"><strong>4.2 Assertion Lifespan</strong></h3>
<p>Configuration in Realm Settings → <strong>Tokens</strong> tab:</p>
<ul>
<li><p><strong>Assertion Lifespan</strong>: Valid assertion time (default 5 minutes, recommended to keep short)</p></li>
<li><p><strong>Not Before</strong>: Assertion not valid before this time (clock skew tolerance)</p></li>
</ul>

<h3 id="ví-du-saml-assertion"><strong>4.3 Example SAML Assertion</strong></h3>
<pre><code>&lt;saml:Assertion xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
    ID="_abc123" IssueInstant="2026-03-30T10:00:00Z" Version="2.0"&gt;
  &lt;saml:Issuer&gt;http://localhost:8080/realms/my-company&lt;/saml:Issuer&gt;

  &lt;!-- Subject — user identity --&gt;
  &lt;saml:Subject&gt;
    &lt;saml:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"&gt;
      user@example.com
    &lt;/saml:NameID&gt;
    &lt;saml:SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer"&gt;
      &lt;saml:SubjectConfirmationData
          NotOnOrAfter="2026-03-30T10:05:00Z"
          Recipient="https://myapp.example.com/saml/acs"/&gt;
    &lt;/saml:SubjectConfirmation&gt;
  &lt;/saml:Subject&gt;

  &lt;!-- Conditions — khi nào assertion hợp lệ --&gt;
  &lt;saml:Conditions NotBefore="2026-03-30T10:00:00Z" NotOnOrAfter="2026-03-30T10:05:00Z"&gt;
    &lt;saml:AudienceRestriction&gt;
      &lt;saml:Audience&gt;https://myapp.example.com/saml/metadata&lt;/saml:Audience&gt;
    &lt;/saml:AudienceRestriction&gt;
  &lt;/saml:Conditions&gt;

  &lt;!-- AuthnStatement — thông tin xác thực --&gt;
  &lt;saml:AuthnStatement AuthnInstant="2026-03-30T10:00:00Z"
      SessionIndex="session_abc123"&gt;
    &lt;saml:AuthnContext&gt;
      &lt;saml:AuthnContextClassRef&gt;
        urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport
      &lt;/saml:AuthnContextClassRef&gt;
    &lt;/saml:AuthnContext&gt;
  &lt;/saml:AuthnStatement&gt;

  &lt;!-- AttributeStatement — user attributes --&gt;
  &lt;saml:AttributeStatement&gt;
    &lt;saml:Attribute Name="email"&gt;
      &lt;saml:AttributeValue&gt;user@example.com&lt;/saml:AttributeValue&gt;
    &lt;/saml:Attribute&gt;
    &lt;saml:Attribute Name="firstName"&gt;
      &lt;saml:AttributeValue&gt;John&lt;/saml:AttributeValue&gt;
    &lt;/saml:Attribute&gt;
    &lt;saml:Attribute Name="Role"&gt;
      &lt;saml:AttributeValue&gt;admin&lt;/saml:AttributeValue&gt;
    &lt;/saml:Attribute&gt;
  &lt;/saml:AttributeStatement&gt;
&lt;/saml:Assertion&gt;</code></pre>

<h2 id="5-idp-initiated-login"><strong>5. IDP-Initiated Login (Unsolicited Response)</strong></h2>

<p>In normal flow (SP-Initiated), user accesses SP → SP redirects to IdP → IdP authenticates → redirects to SP. With <strong>IDP-Initiated Login</strong>, the user starts from the IdP (Keycloak) without going through the SP first.</p>

<h3 id="cau-hinh-idp-initiated"><strong>IDP-Initiated Login Configuration</strong></h3>
<ol>
<li><p>Open SAML Client → tab <strong>Advanced</strong></p></li>
<li><p>Find <strong>IDP-Initiated SSO URL name</strong>: enter the URL name, for example <code>my-app</code></p></li>
<li><p>The URL to IDP-Initiated Login will be:</p></li>
</ol>

<pre><code>https://&lt;keycloak-host&gt;/realms/&lt;realm&gt;/protocol/saml/clients/my-app</code></pre>

<p><strong>Lưu ý bảo mật:</strong> IDP-Initiated Login tiềm ẩn rủi ro CSRF — assertion không có <code>InResponseTo</code> attribute. Chỉ sử dụng khi SP yêu cầu (một số SaaS apps chỉ hỗ trợ IDP-Initiated).</p>

<h3 id="idp-initiated-settings"><strong>Các settings cho IDP-Initiated</strong></h3>
<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>IDP-Initiated SSO URL name</td><td>Phần cuối URL cho IDP-Initiated Login</td></tr>
<tr><td>IDP-Initiated SSO Relay State</td><td>Default RelayState gửi đến SP</td></tr>
<tr><td>Assertion Consumer Service POST Binding URL</td><td>URL SP nhận assertion</td></tr>
</tbody>
</table>

<h2 id="6-protocol-mappers"><strong>6. Protocol Mappers</strong></h2>

<p>Protocol Mappers quyết định <strong>thông tin nào được đưa vào tokens/assertions</strong>. Chúng biến đổi user attributes, roles, và metadata thành claims (OIDC) hoặc attributes (SAML).</p>

<h3 id="mapper-concepts"><strong>6.1 Khái niệm cơ bản</strong></h3>
<p>Protocol Mappers có thể được thêm ở hai cấp:</p>
<ul>
<li><p><strong>Client level</strong>: Mappers áp dụng riêng cho client đó (Client → Client scopes → Dedicated scope)</p></li>
<li><p><strong>Client Scope level</strong>: Mappers áp dụng cho tất cả clients sử dụng scope đó</p></li>
</ul>

<p>Mỗi mapper có các cấu hình chung:</p>
<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>Name</td><td>Tên mapper (dùng để quản lý)</td></tr>
<tr><td>Mapper Type</td><td>Loại mapper (User Attribute, Hardcoded Claim,...)</td></tr>
<tr><td>Add to ID token</td><td>Thêm vào ID Token (OIDC)</td></tr>
<tr><td>Add to access token</td><td>Thêm vào Access Token (OIDC)</td></tr>
<tr><td>Add to userinfo</td><td>Thêm vào UserInfo response (OIDC)</td></tr>
<tr><td>Add to token introspection</td><td>Thêm vào Token Introspection response</td></tr>
<tr><td>Add to lightweight access token</td><td>Thêm vào Lightweight Access Token</td></tr>
</tbody>
</table>

<h3 id="oidc-mappers"><strong>6.2 OIDC Protocol Mappers</strong></h3>

<p><strong>User Attribute Mapper</strong> — Map user attribute sang token claim:</p>
<pre><code>Mapper Type: User Attribute
Name: department-mapper
User Attribute: department         # attribute name trong User Profile
Token Claim Name: department       # claim name trong JWT
Claim JSON Type: String            # String, long, int, boolean, JSON
Add to ID token: ON
Add to access token: ON
Add to userinfo: ON
Multivalued: OFF</code></pre>

<p>Result in JWT:</p>
<pre><code>{
  "sub": "user-id",
  "email": "user@example.com",
  "department": "Engineering",
  ...
}</code></pre>

<p><strong>User Property Mapper</strong> — Map built-in user property (username, email, firstName, lastName):</p>
<pre><code>Mapper Type: User Property
Name: full-name-mapper
Property: firstName
Token Claim Name: given_name
Claim JSON Type: String</code></pre>

<p><strong>User Session Note Mapper</strong> — Map session data to token:</p>
<pre><code>Mapper Type: User Session Note
Name: client-ip-mapper
User Session Note: clientAddress    # hoặc clientHost, identity_provider, etc.
Token Claim Name: client_ip
Claim JSON Type: String
Add to access token: ON</code></pre>

<p>Session notes available: <code>clientAddress</code>, <code>clientHost</code>, <code>identity_provider</code>, <code>identity_provider_identity</code>.</p>

<p><strong>Hardcoded Claim Mapper</strong> — Add claim with fixed value:</p>
<pre><code>Mapper Type: Hardcoded claim
Name: environment-mapper
Token Claim Name: env
Claim value: production
Claim JSON Type: String
Add to access token: ON</code></pre>

<p><strong>Group Membership Mapper</strong> — Add a list of user groups to token:</p>
<pre><code>Mapper Type: Group Membership
Name: groups-mapper
Token Claim Name: groups
Full group path: ON                 # /parent/child hoặc chỉ child
Add to ID token: ON
Add to access token: ON</code></pre>

<p>Result:</p>
<pre><code>{
  "groups": ["/Engineering", "/Engineering/Backend"]
}</code></pre>

<p><strong>Audience Mapper</strong> — Add audience to access token:</p>
<pre><code>Mapper Type: Audience
Name: api-audience
Included Client Audience: my-api-service   # Client ID của resource server
Add to access token: ON</code></pre>

<p>Result:</p>
<pre><code>{
  "aud": ["my-api-service", "account"]
}</code></pre>

<p><strong>Script Mapper</strong> — Custom logic using JavaScript:</p>
<pre><code>Mapper Type: Script Mapper
Name: custom-role-mapper
Script:
  // Combine realm roles và client roles thành flat list
  var roles = [];

  // Realm roles
  var realmRoles = user.getRealmRoleMappingsStream();
  realmRoles.forEach(function(role) {
    roles.push(role.getName());
  });

  // Client roles cho client cụ thể
  var client = keycloakSession.clients()
    .getClientByClientId(realm, 'my-app');
  if (client) {
    var clientRoles = user.getClientRoleMappingsStream(client);
    clientRoles.forEach(function(role) {
      roles.push('client:' + role.getName());
    });
  }

  exports = Java.to(roles, "java.lang.String[]");

Token Claim Name: all_roles
Claim JSON Type: JSON
Multivalued: ON</code></pre>

<p><strong>Note</strong>: Script Mapper uses the Nashorn JavaScript engine. In Keycloak 24+, script mappers need to be deployed as a custom JAR provider instead of an inline script. See <code>Deploy Scripts</code> in the Keycloak documentation.</p>

<h3 id="saml-mappers"><strong>6.3 SAML Protocol Mappers</strong></h3>

<p>SAML mappers are similar to OIDC but the output is SAML Attribute instead of JWT claim:</p>

<p><strong>User Attribute Mapper (SAML):</strong></p>
<pre><code>Mapper Type: User Attribute
Name: department-saml
User Attribute: department
Friendly Name: Department
SAML Attribute Name: urn:oid:2.16.840.1.113730.3.1.241  # hoặc friendly name
SAML Attribute NameFormat: URI Reference                  # URI, Basic, Unspecified</code></pre>

<p><strong>Role List Mapper (SAML):</strong></p>
<pre><code>Mapper Type: Role list
Name: role-list
Role attribute name: Role
Friendly Name: Roles
SAML Attribute NameFormat: Basic
Single Role Attribute: ON    # Tất cả roles trong 1 attribute (khuyến nghị)
                              # OFF = mỗi role 1 attribute riêng</code></pre>

<p><strong>Hardcoded Attribute Mapper (SAML):</strong></p>
<pre><code>Mapper Type: Hardcoded attribute
Name: tenant-id
SAML Attribute Name: tenant_id
SAML Attribute Value: my-company
Friendly Name: Tenant ID
SAML Attribute NameFormat: Basic</code></pre>

<p><strong>The SAML Attribute NameFormat:</strong></p>
<table>
<thead>
<tr><th>Format</th><th>Description</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td>Basic</td><td>BasicName</td><td><code>email</code>, <code>firstName</code></td></tr>
<tr><td>URI Reference</td><td>OID format, standard</td><td><code>urn:oid:0.9.2342.19200300.100.1.3</code></td></tr>
<tr><td>Unspecified</td><td>Unspecified format</td><td>Optional</td></tr>
</tbody>
</table>

<h2 id="7-lightweight-access-tokens"><strong>7. Lightweight Access Tokens</strong></h2>

<p>By default, Keycloak access tokens contain many claims (realm_access, resource_access, email, name, preferred_username,...). Lightweight Access Tokens reduce token size by retaining only essential claims.</p>

<h3 id="tai-sao-can-lightweight"><strong>7.1 Why do we need Lightweight Access Tokens?</strong></h3>
<ul>
<li><p><strong>Reduce bandwidth</strong>: Smaller token = faster sending via HTTP header</p></li>
<li><p><strong>Reduce sensitive information</strong>: Access tokens are often sent to many services, should not contain too much PII</p></li>
<li><p><strong>Improved security</strong>: Resource server uses Token Introspection to retrieve full claims when needed</p></li>
</ul>

<h3 id="cau-hinh-lightweight"><strong>7.2 Configure Lightweight Access Tokens</strong></h3>
<p>By default, Protocol Mappers has the option <strong>Add to lightweight access token</strong>. To use:</p>
<ol>
<li><p>For each mapper, turn off <strong>Add to access token</strong> on unnecessary claims in lightweight token</p></li>
<li><p>Use Client Policy (see next article) to enforce lightweight tokens for specific clients</p></li>
<li><p>Resource server calls Token Introspection endpoint to get full claims:</p></li>
</ol>

<pre><code># Token Introspection — lấy full claims
POST /realms/my-company/protocol/openid-connect/token/introspect
Content-Type: application/x-www-form-urlencoded

token=ACCESS_TOKEN&
client_id=my-resource-server&
client_secret=CLIENT_SECRET

# Response chứa full claims
{
  "active": true,
  "sub": "user-id",
  "email": "user@example.com",
  "realm_access": { "roles": ["admin", "user"] },
  "resource_access": { ... },
  ...
}</code></pre>

<h2 id="8-pairwise-subject-identifier"><strong>8. Pairwise Subject Identifier</strong></h2>

<p>By default, Keycloak uses <strong>public subject identifier</strong> — the <code>sub</code> claim value is the same for all clients. This allows clients to correlate users across services.</p>

<p><strong>Pairwise subject identifier</strong> creates a different <code>sub</code> for each client — prevents cross-service user tracking.</p>

<h3 id="cau-hinh-pairwise"><strong>8.1 Pairwise Identifier Configuration</strong></h3>
<ol>
<li><p>Add Protocol Mapper type <strong>Pairwise subject identifier</strong> to client or client scope</p></li>
<li><p>Configuration:</p></li>
</ol>

<pre><code>Mapper Type: Pairwise subject identifier
Name: pairwise-sub
Salt: random-salt-value-keep-secret   # Salt dùng để hash, PHẢI giữ bí mật
Pairwise Subject Identifier Algorithm: SHA-256
Sector Identifier URI: (tùy chọn)     # Nhóm clients share cùng sub</code></pre>

<p><strong>Result:</strong></p>
<pre><code># Client A nhận sub:
{ "sub": "hashed-value-for-client-a" }

# Client B nhận sub khác:
{ "sub": "hashed-value-for-client-b" }

# Cùng 1 user nhưng sub khác nhau → không thể correlate</code></pre>

<p><strong>Sector Identifier URI:</strong></p>
<p>If you want a group of clients to share the same <code>sub</code> (for example, web app and mobile app of the same service), use <strong>Sector Identifier URI</strong>. This URI points to a JSON array containing redirect URIs of clients in the same sector:</p>

<pre><code># https://myservice.example.com/sector-identifier.json
["https://webapp.example.com/callback", "myapp://callback"]</code></pre>

<h2 id="9-tich-hop-saml-spring-boot"><strong>9. Integrating SAML with Spring Boot</strong></h2>

<p>Use <code>spring-security-saml2-service-provider</code> to integrate SAML SP:</p>

<pre><code>&lt;!-- pom.xml --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;
    &lt;artifactId&gt;spring-security-saml2-service-provider&lt;/artifactId&gt;
&lt;/dependency&gt;</code></pre>

<pre><code># application.yml
spring:
  security:
    saml2:
      relyingparty:
        registration:
          keycloak:
            entity-id: https://myapp.example.com/saml/metadata
            signing:
              credentials:
                - private-key-location: classpath:credentials/sp-private.pem
                  certificate-location: classpath:credentials/sp-certificate.pem
            assertingparty:
              metadata-uri: http://localhost:8080/realms/my-company/protocol/saml/descriptor</code></pre>

<pre><code>// SecurityConfig.java
@Configuration
@EnableWebSecurity
public class SamlSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .saml2Login(saml2 -> saml2
                .loginPage("/saml2/authenticate/keycloak")
            )
            .saml2Logout(Customizer.withDefaults());
        return http.build();
    }
}</code></pre>

<h2 id="10-thuc-hanh"><strong>10. Practice exercises</strong></h2>

<h3 id="lab-1"><strong>Lab 1: Create SAML Client and test Assertion</strong></h3>
<ol>
<li><p>Create SAML client with Entity ID <code>https://localhost:8443/saml</code></p></li>
<li><p>Configure ACS URL, Sign Documents, Sign Assertions = ON</p></li>
<li><p>Use <a href="__P0__">samltool.com</a> or SAML-tracer browser extension to capture SAML Response</p></li>
<li><p>Analyze SAML Assertion: NameID, AttributeStatement, Conditions, Signature</p></li>
</ol>

<h3 id="lab-2"><strong>Lab 2: Protocol Mappers cho OIDC</strong></h3>
<ol>
<li><p>Create user attribute <code>employee_id</code> in User Profile</p></li>
<li><p>Create User Attribute Mapper: <code>employee_id</code> → token claim <code>emp_id</code></p></li>
<li><p>Create Group Membership Mapper: groups → token claim <code>groups</code></p></li>
<li><p>Create Hardcoded Claim: <code>env</code> = <code>staging</code></p></li>
<li><p>Test: Get token and verify claims in <a href="__P0__">jwt.io</a></p></li>
</ol>

<h3 id="lab-3"><strong>Lab 3: Protocol Mappers cho SAML</strong></h3>
<ol>
<li><p>Create SAML User Attribute Mapper for <code>department</code></p></li>
<li><p>Create Role List Mapper with <code>Single Role Attribute</code> = ON</p></li>
<li><p>Configuration Name ID Format = emailAddress</p></li>
<li><p>Capture SAML Response and verify AttributeStatement</p></li>
</ol>

<h3 id="lab-4"><strong>Lab 4: Pairwise Subject Identifier</strong></h3>
<ol>
<li><p>Create 2 OIDC clients: <code>app-a</code> and <code>app-b</code></p></li>
<li><p>Add Pairwise Subject Identifier mapper to both clients with the same salt</p></li>
<li><p>Sign in with the same user on both clients</p></li>
<li><p>Compare the value <code>sub</code> in access tokens — must be different</p></li>
<li><p>Configure Sector Identifier URI for 2 clients to share <code>sub</code></p></li>
</ol>
