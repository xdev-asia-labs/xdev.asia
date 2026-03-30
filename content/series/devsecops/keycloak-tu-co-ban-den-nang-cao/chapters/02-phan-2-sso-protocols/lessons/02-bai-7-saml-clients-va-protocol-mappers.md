---
id: 019d8b30-b107-7001-c001-e0c5f8100107
title: 'Bài 7: SAML Clients và Protocol Mappers'
slug: bai-7-saml-clients-va-protocol-mappers
description: >-
  Tạo và cấu hình SAML 2.0 clients, SAML bindings (POST, Redirect, Artifact),
  assertions configuration, XML signature và encryption, Entity Descriptor
  import, IDP Initiated Login. Protocol Mappers cho OIDC và SAML, Lightweight
  Access Tokens, Pairwise Subject Identifier.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: SSO Protocols - OpenID Connect và SAML"
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak từ Cơ bản đến Nâng cao
  slug: keycloak-tu-co-ban-den-nang-cao
---
<h2 id="1-tong-quan-saml-2"><strong>1. Tổng quan SAML 2.0 trong Keycloak</strong></h2>

<p>SAML 2.0 (Security Assertion Markup Language) là giao thức xác thực dựa trên XML, được sử dụng rộng rãi trong enterprise — đặc biệt khi tích hợp với hệ thống legacy, SaaS applications (Salesforce, ServiceNow, AWS), hoặc các tổ chức chính phủ.</p>

<h3 id="saml-vs-oidc"><strong>SAML 2.0 vs OpenID Connect</strong></h3>
<table>
<thead>
<tr><th>Đặc điểm</th><th>SAML 2.0</th><th>OpenID Connect</th></tr>
</thead>
<tbody>
<tr><td>Định dạng</td><td>XML</td><td>JSON (JWT)</td></tr>
<tr><td>Transport</td><td>HTTP Redirect, POST, Artifact</td><td>HTTP REST</td></tr>
<tr><td>Token</td><td>SAML Assertion (XML)</td><td>JWT</td></tr>
<tr><td>Kích thước</td><td>Lớn hơn (XML verbose)</td><td>Nhỏ gọn (JSON)</td></tr>
<tr><td>Mobile support</td><td>Kém (XML parsing nặng)</td><td>Tốt (JSON native)</td></tr>
<tr><td>Use case chính</td><td>Enterprise SSO, legacy systems</td><td>Modern web/mobile apps</td></tr>
<tr><td>Complexity</td><td>Cao</td><td>Thấp hơn</td></tr>
<tr><td>Logout</td><td>SLO (Single Logout)</td><td>RP-Initiated, Backchannel, Front-channel</td></tr>
</tbody>
</table>

<p><strong>Khi nào dùng SAML?</strong></p>
<ul>
<li><p>Tích hợp với SaaS applications yêu cầu SAML (Salesforce, Google Workspace, AWS)</p></li>
<li><p>Liên kết với IdP hoặc SP chỉ hỗ trợ SAML</p></li>
<li><p>Yêu cầu tuân thủ standards của tổ chức chính phủ</p></li>
<li><p>Migration từ hệ thống ADFS, Shibboleth</p></li>
</ul>

<h3 id="saml-terminology"><strong>Thuật ngữ SAML</strong></h3>
<table>
<thead>
<tr><th>Thuật ngữ</th><th>Mô tả</th><th>Tương đương OIDC</th></tr>
</thead>
<tbody>
<tr><td>Identity Provider (IdP)</td><td>Bên xác thực user (Keycloak)</td><td>OpenID Provider (OP)</td></tr>
<tr><td>Service Provider (SP)</td><td>Bên yêu cầu xác thực (ứng dụng)</td><td>Relying Party (RP)</td></tr>
<tr><td>Assertion</td><td>XML document chứa thông tin xác thực</td><td>ID Token</td></tr>
<tr><td>AuthnRequest</td><td>Yêu cầu xác thực từ SP → IdP</td><td>Authorization Request</td></tr>
<tr><td>ACS URL</td><td>Assertion Consumer Service URL</td><td>Redirect URI</td></tr>
<tr><td>Entity ID</td><td>Unique identifier cho SP/IdP</td><td>Client ID / Issuer</td></tr>
<tr><td>Metadata</td><td>XML mô tả endpoints, certificates</td><td>Well-Known Configuration</td></tr>
<tr><td>NameID</td><td>User identifier trong assertion</td><td>sub claim</td></tr>
<tr><td>Attribute Statement</td><td>User attributes trong assertion</td><td>Claims trong JWT</td></tr>
</tbody>
</table>

<h2 id="2-tao-saml-client"><strong>2. Tạo SAML 2.0 Client</strong></h2>

<h3 id="tao-saml-client-admin-console"><strong>2.1 Tạo qua Admin Console</strong></h3>
<ol>
<li><p>Truy cập <strong>Admin Console</strong> → chọn realm → <strong>Clients</strong> → <strong>Create client</strong></p></li>
<li><p><strong>General Settings</strong>:</p>
<ul>
<li><strong>Client type</strong>: SAML</li>
<li><strong>Client ID</strong>: URL-based Entity ID, ví dụ <code>https://myapp.example.com/saml/metadata</code></li>
<li><strong>Name</strong>: My SAML Application</li>
</ul>
</li>
<li><p>Click <strong>Next</strong> và <strong>Save</strong></p></li>
</ol>

<h3 id="import-entity-descriptor"><strong>2.2 Import từ Entity Descriptor (Metadata)</strong></h3>
<p>Cách nhanh nhất để tạo SAML client — import metadata XML từ Service Provider:</p>
<ol>
<li><p>Truy cập <strong>Clients</strong> → <strong>Import client</strong></p></li>
<li><p>Upload file metadata XML hoặc paste URL metadata</p></li>
<li><p>Keycloak tự động populate: Entity ID, ACS URL, SLO URL, certificates, bindings</p></li>
</ol>

<p><strong>Ví dụ metadata XML của Service Provider:</strong></p>
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

<h3 id="keycloak-idp-metadata"><strong>2.3 Lấy Keycloak IdP Metadata</strong></h3>
<p>Service Provider cần metadata của Keycloak (IdP) để cấu hình. Metadata URL:</p>
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

<p><strong>Artifact Binding chi tiết:</strong></p>
<p>Artifact binding khác biệt so với POST/Redirect — thay vì gửi toàn bộ assertion qua browser, Keycloak chỉ gửi một <strong>artifact</strong> (reference ID). SP sau đó gọi trực tiếp (backchannel) đến Keycloak để lấy actual assertion.</p>

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

<p>Artifact binding an toàn hơn vì assertion không đi qua browser — hữu ích khi assertion chứa sensitive data.</p>

<h3 id="xml-signature-encryption"><strong>3.3 XML Signature và Encryption</strong></h3>

<p><strong>Signing Configuration:</strong></p>
<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>Signature Algorithm</td><td>Algorithm ký XML: RSA_SHA256 (khuyến nghị), RSA_SHA512, DSA_SHA1</td></tr>
<tr><td>SAML Signature Key Name</td><td>Key name trong signature: KEY_ID, CERT_SUBJECT, NONE</td></tr>
<tr><td>Canonicalization Method</td><td>XML canonicalization: EXCLUSIVE (khuyến nghị)</td></tr>
</tbody>
</table>

<p><strong>Encryption Configuration:</strong></p>
<p>Bật <strong>Encrypt Assertions</strong> để mã hóa assertion — chỉ SP với private key tương ứng mới giải mã được:</p>
<ul>
<li><p>Upload SP's <strong>encryption certificate</strong> trong tab <strong>Keys</strong></p></li>
<li><p>Encryption Algorithm: AES128, AES256 (khuyến nghị)</p></li>
</ul>

<pre><code># Keycloak sẽ mã hóa assertion bằng SP's public key
# Flow: Sign assertion → Encrypt signed assertion → Send to SP
# SP: Decrypt assertion → Verify signature → Extract user info</code></pre>

<h3 id="saml-keys-tab"><strong>3.4 Tab Keys</strong></h3>
<p>Quản lý certificates cho SAML client:</p>
<ul>
<li><p><strong>Signing Key</strong>: Certificate mà SP dùng để ký AuthnRequest — Keycloak dùng để verify</p></li>
<li><p><strong>Encryption Key</strong>: Certificate mà Keycloak dùng để encrypt assertions — SP dùng private key để decrypt</p></li>
</ul>

<p>Import certificate từ file PEM, JKS, hoặc PKCS12:</p>
<pre><code># Generate self-signed certificate cho SP
openssl req -x509 -newkey rsa:2048 \
  -keyout sp-private.pem -out sp-certificate.pem \
  -days 365 -nodes \
  -subj "/CN=myapp.example.com"

# Import sp-certificate.pem vào Keycloak client Keys tab</code></pre>

<h2 id="4-saml-assertions"><strong>4. SAML Assertions Configuration</strong></h2>

<h3 id="name-id-format"><strong>4.1 Name ID Format</strong></h3>
<p>Name ID xác định cách Keycloak gửi user identifier trong assertion:</p>

<table>
<thead>
<tr><th>Format</th><th>Mô tả</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td><code>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</code></td><td>Email address</td><td>Phổ biến nhất</td></tr>
<tr><td><code>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</code></td><td>ID persistent duy nhất cho mỗi SP</td><td>Không muốn reveal email</td></tr>
<tr><td><code>urn:oasis:names:tc:SAML:2.0:nameid-format:transient</code></td><td>ID tạm thời, thay đổi mỗi session</td><td>Privacy-sensitive</td></tr>
<tr><td><code>urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified</code></td><td>Username hoặc Keycloak user ID</td><td>Linh hoạt</td></tr>
</tbody>
</table>

<h3 id="assertion-lifespan"><strong>4.2 Assertion Lifespan</strong></h3>
<p>Cấu hình trong Realm Settings → <strong>Tokens</strong> tab:</p>
<ul>
<li><p><strong>Assertion Lifespan</strong>: Thời gian assertion hợp lệ (mặc định 5 phút, khuyến nghị giữ ngắn)</p></li>
<li><p><strong>Not Before</strong>: Assertion không hợp lệ trước thời điểm này (clock skew tolerance)</p></li>
</ul>

<h3 id="ví-du-saml-assertion"><strong>4.3 Ví dụ SAML Assertion</strong></h3>
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

<p>Trong flow bình thường (SP-Initiated), user truy cập SP → SP redirect đến IdP → IdP xác thực → redirect về SP. Với <strong>IDP-Initiated Login</strong>, user bắt đầu từ IdP (Keycloak) mà không cần qua SP trước.</p>

<h3 id="cau-hinh-idp-initiated"><strong>Cấu hình IDP-Initiated Login</strong></h3>
<ol>
<li><p>Mở SAML Client → tab <strong>Advanced</strong></p></li>
<li><p>Tìm <strong>IDP-Initiated SSO URL name</strong>: nhập tên URL, ví dụ <code>my-app</code></p></li>
<li><p>URL để IDP-Initiated Login sẽ là:</p></li>
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

<p>Kết quả trong JWT:</p>
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

<p><strong>User Session Note Mapper</strong> — Map session data vào token:</p>
<pre><code>Mapper Type: User Session Note
Name: client-ip-mapper
User Session Note: clientAddress    # hoặc clientHost, identity_provider, etc.
Token Claim Name: client_ip
Claim JSON Type: String
Add to access token: ON</code></pre>

<p>Session notes có sẵn: <code>clientAddress</code>, <code>clientHost</code>, <code>identity_provider</code>, <code>identity_provider_identity</code>.</p>

<p><strong>Hardcoded Claim Mapper</strong> — Thêm claim với giá trị cố định:</p>
<pre><code>Mapper Type: Hardcoded claim
Name: environment-mapper
Token Claim Name: env
Claim value: production
Claim JSON Type: String
Add to access token: ON</code></pre>

<p><strong>Group Membership Mapper</strong> — Thêm danh sách groups của user vào token:</p>
<pre><code>Mapper Type: Group Membership
Name: groups-mapper
Token Claim Name: groups
Full group path: ON                 # /parent/child hoặc chỉ child
Add to ID token: ON
Add to access token: ON</code></pre>

<p>Kết quả:</p>
<pre><code>{
  "groups": ["/Engineering", "/Engineering/Backend"]
}</code></pre>

<p><strong>Audience Mapper</strong> — Thêm audience vào access token:</p>
<pre><code>Mapper Type: Audience
Name: api-audience
Included Client Audience: my-api-service   # Client ID của resource server
Add to access token: ON</code></pre>

<p>Kết quả:</p>
<pre><code>{
  "aud": ["my-api-service", "account"]
}</code></pre>

<p><strong>Script Mapper</strong> — Custom logic bằng JavaScript:</p>
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

<p><strong>Lưu ý</strong>: Script Mapper sử dụng Nashorn JavaScript engine. Trong Keycloak 24+, cần deploy script mappers dưới dạng custom JAR provider thay vì inline script. Xem <code>Deploy Scripts</code> trong tài liệu Keycloak.</p>

<h3 id="saml-mappers"><strong>6.3 SAML Protocol Mappers</strong></h3>

<p>SAML mappers tương tự OIDC nhưng output là SAML Attribute thay vì JWT claim:</p>

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

<p><strong>Các SAML Attribute NameFormat:</strong></p>
<table>
<thead>
<tr><th>Format</th><th>Mô tả</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td>Basic</td><td>Tên đơn giản</td><td><code>email</code>, <code>firstName</code></td></tr>
<tr><td>URI Reference</td><td>OID format, tiêu chuẩn</td><td><code>urn:oid:0.9.2342.19200300.100.1.3</code></td></tr>
<tr><td>Unspecified</td><td>Không xác định format</td><td>Tùy ý</td></tr>
</tbody>
</table>

<h2 id="7-lightweight-access-tokens"><strong>7. Lightweight Access Tokens</strong></h2>

<p>Mặc định, Keycloak access tokens chứa rất nhiều claims (realm_access, resource_access, email, name, preferred_username,...). Lightweight Access Tokens giảm kích thước token bằng cách chỉ giữ lại claims thiết yếu.</p>

<h3 id="tai-sao-can-lightweight"><strong>7.1 Tại sao cần Lightweight Access Tokens?</strong></h3>
<ul>
<li><p><strong>Giảm bandwidth</strong>: Token nhỏ hơn = gửi qua HTTP header nhanh hơn</p></li>
<li><p><strong>Giảm thông tin nhạy cảm</strong>: Access token thường được gửi đến nhiều services, không nên chứa quá nhiều PII</p></li>
<li><p><strong>Cải thiện security</strong>: Resource server sử dụng Token Introspection để lấy full claims khi cần</p></li>
</ul>

<h3 id="cau-hinh-lightweight"><strong>7.2 Cấu hình Lightweight Access Tokens</strong></h3>
<p>Mặc định, Protocol Mappers có option <strong>Add to lightweight access token</strong>. Để sử dụng:</p>
<ol>
<li><p>Với mỗi mapper, tắt <strong>Add to access token</strong> ở những claims không cần trong lightweight token</p></li>
<li><p>Sử dụng Client Policy (xem bài sau) để enforce lightweight tokens cho clients cụ thể</p></li>
<li><p>Resource server gọi Token Introspection endpoint để lấy full claims:</p></li>
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

<p>Theo mặc định, Keycloak sử dụng <strong>public subject identifier</strong> — giá trị <code>sub</code> claim giống nhau cho tất cả clients. Điều này cho phép các clients liên kết (correlate) user across services.</p>

<p><strong>Pairwise subject identifier</strong> tạo <code>sub</code> khác nhau cho mỗi client — ngăn chặn cross-service user tracking.</p>

<h3 id="cau-hinh-pairwise"><strong>8.1 Cấu hình Pairwise Identifier</strong></h3>
<ol>
<li><p>Thêm Protocol Mapper loại <strong>Pairwise subject identifier</strong> vào client hoặc client scope</p></li>
<li><p>Cấu hình:</p></li>
</ol>

<pre><code>Mapper Type: Pairwise subject identifier
Name: pairwise-sub
Salt: random-salt-value-keep-secret   # Salt dùng để hash, PHẢI giữ bí mật
Pairwise Subject Identifier Algorithm: SHA-256
Sector Identifier URI: (tùy chọn)     # Nhóm clients share cùng sub</code></pre>

<p><strong>Kết quả:</strong></p>
<pre><code># Client A nhận sub:
{ "sub": "hashed-value-for-client-a" }

# Client B nhận sub khác:
{ "sub": "hashed-value-for-client-b" }

# Cùng 1 user nhưng sub khác nhau → không thể correlate</code></pre>

<p><strong>Sector Identifier URI:</strong></p>
<p>Nếu bạn muốn một nhóm clients chia sẻ cùng <code>sub</code> (ví dụ: web app và mobile app của cùng service), sử dụng <strong>Sector Identifier URI</strong>. URI này trỏ đến JSON array chứa redirect URIs của các clients trong cùng sector:</p>

<pre><code># https://myservice.example.com/sector-identifier.json
["https://webapp.example.com/callback", "myapp://callback"]</code></pre>

<h2 id="9-tich-hop-saml-spring-boot"><strong>9. Tích hợp SAML với Spring Boot</strong></h2>

<p>Sử dụng <code>spring-security-saml2-service-provider</code> để tích hợp SAML SP:</p>

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

<h2 id="10-thuc-hanh"><strong>10. Bài tập thực hành</strong></h2>

<h3 id="lab-1"><strong>Lab 1: Tạo SAML Client và kiểm tra Assertion</strong></h3>
<ol>
<li><p>Tạo SAML client với Entity ID <code>https://localhost:8443/saml</code></p></li>
<li><p>Cấu hình ACS URL, Sign Documents, Sign Assertions = ON</p></li>
<li><p>Sử dụng <a href="https://www.samltool.com">samltool.com</a> hoặc SAML-tracer browser extension để capture SAML Response</p></li>
<li><p>Phân tích SAML Assertion: NameID, AttributeStatement, Conditions, Signature</p></li>
</ol>

<h3 id="lab-2"><strong>Lab 2: Protocol Mappers cho OIDC</strong></h3>
<ol>
<li><p>Tạo user attribute <code>employee_id</code> trong User Profile</p></li>
<li><p>Tạo User Attribute Mapper: <code>employee_id</code> → token claim <code>emp_id</code></p></li>
<li><p>Tạo Group Membership Mapper: groups → token claim <code>groups</code></p></li>
<li><p>Tạo Hardcoded Claim: <code>env</code> = <code>staging</code></p></li>
<li><p>Test: Lấy token và verify claims trong <a href="https://jwt.io">jwt.io</a></p></li>
</ol>

<h3 id="lab-3"><strong>Lab 3: Protocol Mappers cho SAML</strong></h3>
<ol>
<li><p>Tạo SAML User Attribute Mapper cho <code>department</code></p></li>
<li><p>Tạo Role List Mapper với <code>Single Role Attribute</code> = ON</p></li>
<li><p>Cấu hình Name ID Format = emailAddress</p></li>
<li><p>Capture SAML Response và verify AttributeStatement</p></li>
</ol>

<h3 id="lab-4"><strong>Lab 4: Pairwise Subject Identifier</strong></h3>
<ol>
<li><p>Tạo 2 OIDC clients: <code>app-a</code> và <code>app-b</code></p></li>
<li><p>Thêm Pairwise Subject Identifier mapper vào cả 2 clients với cùng salt</p></li>
<li><p>Đăng nhập cùng user vào cả 2 clients</p></li>
<li><p>So sánh giá trị <code>sub</code> trong access tokens — phải khác nhau</p></li>
<li><p>Cấu hình Sector Identifier URI để 2 clients share cùng <code>sub</code></p></li>
</ol>
