---
id: 019d8b30-b113-7001-c001-e0c5f8100113
title: 'Lesson 13: User Federation - LDAP and Active Directory'
slug: bai-13-user-federation-ldap-va-active-directory
description: Configure LDAP/AD federation, storage mode (READ_ONLY, WRITABLE, UNSYNCED), edit mode, connection settings (SSL, connection pool), LDAP mappers (User Attribute, Full Name, Group, Role, Hardcoded Role, MSAD User Account Control), password hashing, user synchronization, SSSD/FreeIPA integration, Kerberos bridge, custom User Storage SPI and troubleshooting LDAP issues.
duration_minutes: 220
is_free: true
video_url: null
sort_order: 13
section_title: 'Part 4: User Federation, Organizations and Authorization'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak from Basic to Advanced
  slug: keycloak-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6174" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6174)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1086" cy="268" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1072" cy="174" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1058" cy="80" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1044" cy="246" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1030" cy="152" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="128" x2="1100" y2="208" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="158" x2="1050" y2="228" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1015.2390923627308,156.5 1015.2390923627308,199.5 978,221 940.7609076372692,199.5 940.7609076372692,156.5 978,135" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — Lesson 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 13: User Federation - LDAP and Active</tspan>
      <tspan x="60" dy="42">Directory</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: User Federation, Organizations and Authorization</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-user-federation-tong-quan"><strong>1. User Federation — Overview</strong></h2>

<p>User Federation allows Keycloak <strong> to connect to external user databases</strong> such as LDAP, Active Directory, or custom databases. Instead of having to import all users into Keycloak, you can authenticate directly from an external source.</p>

<p>To configure User Federation, go to <strong>Admin Console → User Federation</strong>.</p>

<h3 id="11-tai-sao-can-user-federation"><strong>1.1 Why do we need User Federation?</strong></h3>

<table>
<thead>
<tr><th>Reason</th><th>Explanation</th></tr>
</thead>
<tbody>
<tr><td><strong>Centralize user management</strong></td><td>LDAP/AD is already the main source of users in the enterprise → no need to duplicate</td></tr>
<tr><td><strong>Keep the current system intact</strong></td><td>No need to migrate users to Keycloak</td></tr>
<tr><td><strong>Single Source of Truth</strong></td><td>User data only exists in one place, avoid inconsistency</td></tr>
<tr><td><strong>Kerberos SSO</strong></td><td>Integrating Kerberos authentication from Active Directory</td></tr>
</tbody>
</table>

<h3 id="12-cac-loai-federation"><strong>1.2 Types of Federation Provider</strong></h3>

<table>
<thead>
<tr><th>Provider</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><strong>LDAP</strong></td><td>Supports OpenLDAP, 389 Directory Server, and LDAP-compliant servers</td></tr>
<tr><td><strong>Active Directory</strong></td><td>Microsoft Active Directory (using LDAP protocol + AD-specific mappers)</td></tr>
<tr><td><strong>SSSD</strong></td><td>System Security Services Daemon — FreeIPA/Red Hat IdM integration</td></tr>
<tr><td><strong>Custom User Storage SPI</strong></td><td>Write your own provider to connect any database</td></tr>
</tbody>
</table>

<h2 id="2-them-ldap-provider"><strong>2. Add LDAP Provider</strong></h2>

<p>Go to <strong>Admin Console → User Federation → Add LDAP providers</strong>.</p>

<h3 id="21-general-options"><strong>2.1 General Options</strong></h3>

<table>
<thead>
<tr><th>Setting</th><th>Description</th><th>Sample value</th></tr>
</thead>
<tbody>
<tr><td><strong>Console display name</strong></td><td>Display name on Admin Console</td><td><code>Corporate LDAP</code></td></tr>
<tr><td><strong>Priority</strong></td><td>Priority order when there are many providers</td><td><code>0</code> (highest)</td></tr>
<tr><td><strong>Enabled</strong></td><td>Enable/disable provider</td><td><code>ON</code></td></tr>
<tr><td><strong>Import users</strong></td><td>Import LDAP users into Keycloak local database</td><td><code>ON</code></td></tr>
</tbody>
</table>

<h3 id="22-connection-settings"><strong>2.2 Connection Settings</strong></h3>

<pre><code class="language-properties"># Connection URL
Connection URL: ldap://ldap.example.com:389
# Hoặc LDAPS (SSL):
Connection URL: ldaps://ldap.example.com:636

# Bind Type
Bind Type: simple

# Bind DN — tài khoản để Keycloak kết nối LDAP
Bind DN: cn=admin,dc=example,dc=com

# Bind Credential — mật khẩu
Bind Credential: ********</code></pre>

<p><strong>Connection Pool Settings:</strong></p>

<table>
<thead>
<tr><th>Setting</th><th>Description</th><th>Default</th></tr>
</thead>
<tbody>
<tr><td><strong>Connection pooling</strong></td><td>Turn on connection pooling to optimize performance</td><td><code>ON</code></td></tr>
<tr><td><strong>Connection pool authentication</strong></td><td>Pool cho authenticated connections</td><td><code>simple</code></td></tr>
<tr><td><strong>Connection pool debug</strong></td><td>Log debug cho connection pool</td><td><code>OFF</code></td></tr>
<tr><td><strong>Connection pool initial size</strong></td><td>Number of initial initial connections</td><td><code>1</code></td></tr>
<tr><td><strong>Connection pool maximum size</strong></td><td>Maximum number of connections</td><td><code>1000</code></td></tr>
<tr><td><strong>Connection pool timeout</strong></td><td>Time to wait for connection from pool</td><td><code>30000</code> ms</td></tr>
</tbody>
</table>

<h3 id="23-ssl-ldaps-configuration"><strong>2.3 SSL/LDAPS Configuration</strong></h3>

<p>To connect to LDAPS (port 636), you need to import CA certificate into Keycloak truststore:</p>

<pre><code class="language-bash"># Tải CA certificate từ LDAP server
openssl s_client -connect ldap.example.com:636 -showcerts &lt; /dev/null 2&gt;/dev/null | \
  openssl x509 -outform PEM &gt; ldap-ca.pem

# Import vào Java truststore
keytool -import -alias ldap-ca \
  -keystore /opt/keycloak/conf/truststore.jks \
  -file ldap-ca.pem \
  -storepass changeit -noprompt

# Hoặc sử dụng PEM truststore (Keycloak 24+)
# Đặt file PEM vào /opt/keycloak/conf/truststores/
cp ldap-ca.pem /opt/keycloak/conf/truststores/</code></pre>

<p>Configure Keycloak using truststore:</p>

<pre><code class="language-bash"># keycloak.conf
# Java keystore
spi-truststore-file-file=/opt/keycloak/conf/truststore.jks
spi-truststore-file-password=changeit
spi-truststore-file-type=JKS

# Hoặc PEM directory (Keycloak 24+)
truststore-paths=/opt/keycloak/conf/truststores</code></pre>

<h3 id="24-use-start-tls"><strong>2.4 Use StartTLS</strong></h3>

<p>Instead of LDAPS (port 636), you can use <strong>StartTLS</strong> on port 389:</p>

<pre><code class="language-properties">Connection URL: ldap://ldap.example.com:389
Use StartTLS: ON</code></pre>

<p>StartTLS upgrade regular LDAP connection to encrypted connection on same port 389.</p>

<h2 id="3-ldap-searching-settings"><strong>3. LDAP Searching Settings</strong></h2>

<table>
<thead>
<tr><th>Setting</th><th>Description</th><th>Sample value</th></tr>
</thead>
<tbody>
<tr><td><strong>Users DN</strong></td><td>Base DN where Keycloak looks for users</td><td><code>ou=People,dc=example,dc=com</code></td></tr>
<tr><td><strong>User Object Classes</strong></td><td>LDAP object class cho user entries</td><td><code>inetOrgPerson, organizationalPerson</code></td></tr>
<tr><td><strong>Username LDAP attribute</strong></td><td>LDAP attribute contains username</td><td><code>uid</code> (LDAP) / <code>sAMAccountName</code> (AD)</td></tr>
<tr><td><strong>RDN LDAP attribute</strong></td><td>Attribute used for RDN (Relative Distinguished Name)</td><td><code>uid</code> (LDAP) / <code>cn</code> (AD)</td></tr>
<tr><td><strong>UUID LDAP attribute</strong></td><td>Attribute used as unique ID</td><td><code>entryUUID</code> (LDAP) / <code>objectGUID</code> (AD)</td></tr>
<tr><td><strong>Search Scope</strong></td><td><code>One Level</code> or <code>Subtree</code></td><td><code>Subtree</code></td></tr>
<tr><td><strong>Custom User LDAP Filter</strong></td><td>LDAP additional filter to filter users</td><td><code>(&amp;(objectClass=person)(memberOf=cn=app-users,ou=Groups,dc=example,dc=com))</code></td></tr>
<tr><td><strong>Read Timeout</strong></td><td>Timeout cho LDAP read operations</td><td><code>30000</code> ms</td></tr>
</tbody>
</table>

<h3 id="31-active-directory-settings"><strong>3.1 Active Directory Settings</strong></h3>

<p>When selecting <strong>Vendor = Active Directory</strong>, Keycloak automatically configures the appropriate values:</p>

<pre><code class="language-properties">Username LDAP attribute: cn
RDN LDAP attribute: cn
UUID LDAP attribute: objectGUID
User Object Classes: person, organizationalPerson, user
Users DN: cn=Users,dc=corp,dc=example,dc=com</code></pre>

<h2 id="4-storage-modes"><strong>4. Storage Modes</strong></h2>

<p>Keycloak supports 3 storage modes that dictate how Keycloak interacts with LDAP:</p>

<table>
<thead>
<tr><th>Mode</th><th>Read from LDAP</th><th>Write back to LDAP</th><th>Import to Keycloak DB</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td><strong>READ_ONLY</strong></td><td>✅</td><td>❌</td><td>✅ (cache)</td><td>LDAP is the only source, does not allow users to change information via Keycloak</td></tr>
<tr><td><strong>WRITABLE</strong></td><td>✅</td><td>✅</td><td>✅</td><td>Allow users to change information (password, profile) and write back to LDAP</td></tr>
<tr><td><strong>UNSYNCED</strong></td><td>✅</td><td>❌</td><td>✅</td><td>Import users from LDAP, then save changes only in Keycloak DB (no writeback)</td></tr>
</tbody>
</table>

<h3 id="41-edit-modes"><strong>4.1 Edit Modes</strong></h3>

<p>Edit Mode regulates the behavior when a user or admin changes information:</p>

<pre><code class="language-text">READ_ONLY:
  - User không thể đổi password qua Keycloak
  - Admin không thể edit user attributes
  - Mọi thay đổi phải thực hiện trực tiếp trên LDAP

WRITABLE:
  - User có thể đổi password → Keycloak ghi ngược về LDAP
  - Admin edit user attributes → cập nhật LDAP
  - Cẩn thận với password policy: phải match giữa Keycloak và LDAP

UNSYNCED:
  - User đổi password → chỉ lưu trong Keycloak DB
  - Đăng nhập: Keycloak thử password local trước, nếu fail thì thử LDAP
  - Phù hợp khi muốn dần migrate users sang Keycloak</code></pre>

<h2 id="5-sync-settings"><strong>5. Sync Settings</strong></h2>

<p>Keycloak can synchronize users from LDAP by 2 mechanisms:</p>

<h3 id="51-periodic-full-sync"><strong>5.1 Periodic Full Sync</strong></h3>

<pre><code class="language-properties"># Import toàn bộ users từ LDAP vào Keycloak DB
Periodic Full Sync: ON
Full Sync Period: 604800  # seconds (7 ngày)</code></pre>

<h3 id="52-periodic-changed-users-sync"><strong>5.2 Periodic Changed Users Sync</strong></h3>

<pre><code class="language-properties"># Chỉ đồng bộ users có thay đổi (dựa vào modifyTimestamp)
Periodic Changed Users Sync: ON
Changed Users Sync Period: 86400  # seconds (1 ngày)</code></pre>

<h3 id="53-manual-sync"><strong>5.3 Manual Sync</strong></h3>

<p>You can trigger sync manually from Admin Console or via CLI:</p>

<pre><code class="language-bash"># Trigger full sync qua Admin REST API
curl -X POST "http://localhost:8080/admin/realms/my-realm/user-storage/${LDAP_PROVIDER_ID}/sync?action=triggerFullSync" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"

# Trigger changed users sync
curl -X POST "http://localhost:8080/admin/realms/my-realm/user-storage/${LDAP_PROVIDER_ID}/sync?action=triggerChangedUsersSync" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"</code></pre>

<h2 id="6-ldap-mappers"><strong>6. LDAP Mappers</strong></h2>

<p>LDAP Mappers defines how Keycloak <strong>map LDAP attributes to Keycloak user model</strong>. This is the most important part when configuring LDAP federation.</p>

<h3 id="61-user-attribute-ldap-mapper"><strong>6.1 user-attribute-ldap-mapper</strong></h3>

<p>Map an LDAP attribute to a Keycloak user attribute:</p>

<pre><code class="language-text">Mapper Type: user-attribute-ldap-mapper
LDAP Attribute: mail
User Model Attribute: email
Read Only: true
Always Read Value From LDAP: false
Is Mandatory In LDAP: true</code></pre>

<p>Automatically generated default mappers:</p>

<table>
<thead>
<tr><th>Mapper Name</th><th>LDAP Attribute</th><th>Keycloak Attribute</th></tr>
</thead>
<tbody>
<tr><td>username</td><td><code>uid</code> / <code>sAMAccountName</code></td><td><code>username</code></td></tr>
<tr><td>email</td><td><code>mail</code></td><td><code>email</code></td></tr>
<tr><td>first name</td><td><code>givenName</code> / <code>cn</code></td><td><code>firstName</code></td></tr>
<tr><td>last name</td><td><code>sn</code></td><td><code>lastName</code></td></tr>
<tr><td>creation date</td><td><code>createTimestamp</code></td><td><code>createTimestamp</code></td></tr>
<tr><td>modify date</td><td><code>modifyTimestamp</code></td><td><code>modifyTimestamp</code></td></tr>
</tbody>
</table>

<h3 id="62-full-name-ldap-mapper"><strong>6.2 full-name-ldap-mapper</strong></h3>

<p>Map LDAP <code>cn</code> (Common Name) sang Keycloak <code>firstName</code> + <code>lastName</code>:</p>

<pre><code class="language-text">Mapper Type: full-name-ldap-mapper
LDAP Full Name Attribute: cn
Read Only: true
Write Only: false</code></pre>

<p>Useful when LDAP only has <code>cn</code> without separating <code>givenName</code>/<code>sn</code>.</p>

<h3 id="63-group-ldap-mapper"><strong>6.3 group-ldap-mapper</strong></h3>

<p>Sync LDAP groups to Keycloak groups:</p>

<pre><code class="language-text">Mapper Type: group-ldap-mapper
LDAP Groups DN: ou=Groups,dc=example,dc=com
Group Name LDAP Attribute: cn
Group Object Classes: groupOfNames
Membership LDAP Attribute: member
Membership Attribute Type: DN
Membership User LDAP Attribute: uid
Mode: READ_ONLY
User Groups Retrieve Strategy: LOAD_GROUPS_BY_MEMBER_ATTRIBUTE
Drop non-existing groups during sync: false
Groups Path: /</code></pre>

<p><strong>User Groups Retrieve Strategy options:</strong></p>

<table>
<thead>
<tr><th>Strategy</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><strong>LOAD_GROUPS_BY_MEMBER_ATTRIBUTE</strong></td><td>Load groups from LDAP based on member attribute</td></tr>
<tr><td><strong>GET_GROUPS_FROM_USER_MEMBEROF_ATTRIBUTE</strong></td><td>Read <code>memberOf</code> attribute on user entry</td></tr>
<tr><td><strong>LOAD_GROUPS_BY_MEMBER_ATTRIBUTE_RECURSIVELY</strong></td><td>Load groups recursively (nested groups)</td></tr>
</tbody>
</table>

<h3 id="64-role-ldap-mapper"><strong>6.4 role-ldap-mapper</strong></h3>

<p>Sync LDAP roles/groups to Keycloak realm roles:</p>

<pre><code class="language-text">Mapper Type: role-ldap-mapper
LDAP Roles DN: ou=Roles,dc=example,dc=com
Role Name LDAP Attribute: cn
Role Object Classes: groupOfNames
Membership LDAP Attribute: member
Membership Attribute Type: DN
Membership User LDAP Attribute: uid
Mode: READ_ONLY
Use Realm Roles Mapping: true
Client ID: (để trống nếu dùng realm roles)</code></pre>

<h3 id="65-hardcoded-ldap-role-mapper"><strong>6.5 hardcoded-ldap-role-mapper</strong></h3>

<p>Automatically assign a fixed role to <strong>all</strong> users from LDAP provider:</p>

<pre><code class="language-text">Mapper Type: hardcoded-ldap-role-mapper
Role: realm-role-name
# Hoặc client role:
Role: client-id.client-role-name</code></pre>

<p>Useful when you want to distinguish users from LDAP from local users with a role marker.</p>

<h3 id="66-msad-user-account-control-mapper"><strong>6.6 msad-user-account-control-mapper</strong></h3>

<p>Special Mapper for <strong>Active Directory</strong>, handling <code>userAccountControl</code> attribute:</p>

<pre><code class="language-text">Mapper Type: msad-user-account-control-mapper
# Xử lý:
# - Account enabled/disabled status
# - Password expired status
# - Account locked status
# - Require user to change password at next login</code></pre>

<p>This Mapper reads bitmask <code>userAccountControl</code> of AD to map to Keycloak user status:</p>

<table>
<thead>
<tr><th>AD Flag (bit)</th><th>Keycloak Behavior</th></tr>
</thead>
<tbody>
<tr><td><code>ACCOUNTDISABLE</code> (0x0002)</td><td>User is disabled in Keycloak</td></tr>
<tr><td><code>LOCKOUT</code> (0x0010)</td><td>User is locked</td></tr>
<tr><td><code>PASSWORD_EXPIRED</code></td><td>User must change password when logging in</td></tr>
</tbody>
</table>

<h3 id="67-certificate-ldap-mapper"><strong>6.7 certificate-ldap-mapper</strong></h3>

<p>Map LDAP certificate attribute sang Keycloak user attribute cho X.509 authentication:</p>

<pre><code class="language-text">Mapper Type: certificate-ldap-mapper
LDAP Attribute: userCertificate
User Model Attribute: usercertificate
Is DER Formatted: true
Always Read Value From LDAP: true</code></pre>

<h2 id="7-password-hashing"><strong>7. Password Hashing</strong></h2>

<p>When using LDAP federation, password hashing has several important characteristics:</p>

<table>
<thead>
<tr><th>Scenario</th><th>Password Hash</th><th>Note</th></tr>
</thead>
<tbody>
<tr><td><strong>READ_ONLY mode</strong></td><td>Password always verifies directly with LDAP server</td><td>Keycloak does not save password hash</td></tr>
<tr><td><strong>WRITABLE mode</strong></td><td>Password is recorded to LDAP according to LDAP password policy</td><td>LDAP server performs hashing</td></tr>
<tr><td><strong>UNSYNCED mode</strong></td><td>New password stored in Keycloak DB with Keycloak hashing</td><td>Old password still verified via LDAP</td></tr>
</tbody>
</table>

<pre><code class="language-bash"># Kiểm tra password policy trên LDAP (OpenLDAP)
ldapsearch -x -H ldap://localhost:389 \
  -D "cn=admin,dc=example,dc=com" -W \
  -b "cn=config" "(objectClass=olcGlobal)" olcPasswordHash

# Output ví dụ:
# olcPasswordHash: {SSHA}</code></pre>

<h2 id="8-sssd-va-freeipa-integration"><strong>8. SSSD and FreeIPA Integration</strong></h2>

<p>Keycloak supports integration with <strong>SSSD (System Security Services Daemon)</strong> via the D-Bus interface, allowing authenticate users from FreeIPA or Red Hat Identity Manager.</p>

<h3 id="81-prerequisites"><strong>8.1 Prerequisites</strong></h3>

<pre><code class="language-bash"># Cài đặt SSSD trên Keycloak server
sudo dnf install sssd sssd-dbus

# Cấu hình SSSD (/etc/sssd/sssd.conf)
[sssd]
services = nss, pam, ifp
domains = example.com

[domain/example.com]
id_provider = ipa
auth_provider = ipa
access_provider = ipa
ipa_domain = example.com
ipa_server = ipa.example.com

[ifp]
allowed_uids = root, keycloak
user_attributes = +mail, +givenname, +sn, +telephoneNumber</code></pre>

<h3 id="82-cau-hinh-sssd-federation-provider"><strong>8.2 Configure SSSD Federation Provider</strong></h3>

<p>In Admin Console, add <strong>SSSD</strong> federation provider — Keycloak will communicate with SSSD via D-Bus to:</p>

<ul>
<li>Authenticate users (PAM)</li>
<li>Get user attributes (InfoPipe)</li>
<li>Get group membership</li>
</ul>

<h2 id="9-kerberos-bridge"><strong>9. Kerberos Bridge</strong></h2>

<p>Keycloak can use <strong>Kerberos authentication</strong> in conjunction with LDAP federation, allowing users to log in automatically using a Kerberos ticket (SPNEGO).</p>

<h3 id="91-cau-hinh-kerberos-voi-ldap"><strong>9.1 Configuring Kerberos with LDAP</strong></h3>

<pre><code class="language-properties"># Trong LDAP provider settings
Allow Kerberos authentication: ON
Kerberos Realm: EXAMPLE.COM
Server Principal: HTTP/keycloak.example.com@EXAMPLE.COM
KeyTab: /etc/keycloak/keycloak.keytab
Use Kerberos for password authentication: ON</code></pre>

<pre><code class="language-bash"># Tạo keytab cho Keycloak service principal
kadmin.local -q "addprinc -randkey HTTP/keycloak.example.com@EXAMPLE.COM"
kadmin.local -q "ktadd -k /etc/keycloak/keycloak.keytab HTTP/keycloak.example.com@EXAMPLE.COM"

# Set permissions
chown keycloak:keycloak /etc/keycloak/keycloak.keytab
chmod 600 /etc/keycloak/keycloak.keytab</code></pre>

<h3 id="92-browser-configuration-cho-spnego"><strong>9.2 Browser Configuration cho SPNEGO</strong></h3>

<pre><code class="language-text">Firefox:
1. about:config
2. network.negotiate-auth.trusted-uris = .example.com
3. network.negotiate-auth.delegation-uris = .example.com

Chrome / Edge:
1. Policy: AuthServerAllowlist = *.example.com
2. Hoặc command line: --auth-server-whitelist="*.example.com"</code></pre>

<h2 id="10-custom-user-storage-spi"><strong>10. Custom User Storage SPI</strong></h2>

<p>When LDAP is not enough, you can write <strong>Custom User Storage Provider</strong> to connect any data source (SQL database, REST API, legacy system...).</p>

<h3 id="101-spi-interfaces"><strong>10.1 SPI Interfaces</strong></h3>

<pre><code class="language-java">// UserStorageProviderFactory — tạo provider instances
public class MyUserStorageProviderFactory
    implements UserStorageProviderFactory&lt;MyUserStorageProvider&gt; {

    @Override
    public String getId() {
        return "my-user-storage";
    }

    @Override
    public MyUserStorageProvider create(KeycloakSession session,
                                         ComponentModel model) {
        return new MyUserStorageProvider(session, model);
    }
}

// UserStorageProvider — implement các interfaces cần thiết
public class MyUserStorageProvider implements
    UserStorageProvider,
    UserLookupProvider,
    CredentialInputValidator,
    UserQueryProvider {

    @Override
    public UserModel getUserByUsername(RealmModel realm, String username) {
        // Query external database
        ExternalUser extUser = externalDb.findByUsername(username);
        if (extUser == null) return null;

        // Wrap vào Keycloak UserModel
        return new UserAdapter(session, realm, model, extUser);
    }

    @Override
    public boolean isValid(RealmModel realm, UserModel user,
                           CredentialInput input) {
        if (!supportsCredentialType(input.getType())) return false;
        // Verify password với external system
        return externalDb.verifyPassword(
            user.getUsername(),
            input.getChallengeResponse()
        );
    }
}</code></pre>

<h3 id="102-deploy-custom-provider"><strong>10.2 Deploy Custom Provider</strong></h3>

<pre><code class="language-bash"># Build JAR
mvn clean package

# Copy vào Keycloak providers directory
cp target/my-user-storage.jar /opt/keycloak/providers/

# Rebuild Keycloak
/opt/keycloak/bin/kc.sh build</code></pre>

<h2 id="11-cau-hinh-ldap-voi-kcadm"><strong>11. Configure LDAP with kcadm.sh</strong></h2>

<p>Use <code>kcadm.sh</code> to configure LDAP federation via command line:</p>

<pre><code class="language-bash"># Đăng nhập
kcadm.sh config credentials \
  --server http://localhost:8080 \
  --realm master \
  --user admin \
  --password admin

# Tạo LDAP provider
kcadm.sh create components -r my-realm \
  -s name="Corporate LDAP" \
  -s providerId=ldap \
  -s providerType=org.keycloak.storage.UserStorageProvider \
  -s 'config.vendor=["other"]' \
  -s 'config.connectionUrl=["ldap://ldap.example.com:389"]' \
  -s 'config.bindDn=["cn=admin,dc=example,dc=com"]' \
  -s 'config.bindCredential=["admin_password"]' \
  -s 'config.usersDn=["ou=People,dc=example,dc=com"]' \
  -s 'config.userObjectClasses=["inetOrgPerson, organizationalPerson"]' \
  -s 'config.usernameLDAPAttribute=["uid"]' \
  -s 'config.rdnLDAPAttribute=["uid"]' \
  -s 'config.uuidLDAPAttribute=["entryUUID"]' \
  -s 'config.editMode=["READ_ONLY"]' \
  -s 'config.syncRegistrations=["false"]' \
  -s 'config.searchScope=["2"]' \
  -s 'config.importEnabled=["true"]' \
  -s 'config.enabled=["true"]' \
  -s 'config.priority=["0"]' \
  -s 'config.fullSyncPeriod=["604800"]' \
  -s 'config.changedSyncPeriod=["86400"]'

# Lấy LDAP provider ID
LDAP_ID=$(kcadm.sh get components -r my-realm \
  --fields id,name \
  -q providerType=org.keycloak.storage.UserStorageProvider \
  | jq -r '.[0].id')

# Thêm group mapper
kcadm.sh create components -r my-realm \
  -s name="group-mapper" \
  -s providerId=group-ldap-mapper \
  -s providerType=org.keycloak.storage.ldap.mappers.LDAPStorageMapper \
  -s parentId=$LDAP_ID \
  -s 'config.groups.dn=["ou=Groups,dc=example,dc=com"]' \
  -s 'config.group.name.ldap.attribute=["cn"]' \
  -s 'config.group.object.classes=["groupOfNames"]' \
  -s 'config.membership.ldap.attribute=["member"]' \
  -s 'config.membership.attribute.type=["DN"]' \
  -s 'config.membership.user.ldap.attribute=["uid"]' \
  -s 'config.mode=["READ_ONLY"]' \
  -s 'config.drop.non.existing.groups.during.sync=["false"]'

# Trigger full sync
kcadm.sh create user-storage/$LDAP_ID/sync -r my-realm \
  -s action=triggerFullSync</code></pre>

<h2 id="12-troubleshooting-ldap"><strong>12. Troubleshooting LDAP Issues</strong></h2>

<h3 id="121-connection-issues"><strong>12.1 Connection Issues</strong></h3>

<table>
<thead>
<tr><th>Error</th><th>Cause</th><th>Solution</th></tr>
</thead>
<tbody>
<tr><td><code>javax.naming.CommunicationException</code></td><td>Unable to connect to LDAP server</td><td>Check network, firewall, port 389/636</td></tr>
<tr><td><code>javax.naming.AuthenticationException</code></td><td>Incorrect Bind DN or Bind Credential</td><td>Verify bind credentials with <code>ldapsearch</code></td></tr>
<tr><td><code>SSLHandshakeException</code></td><td>Certificate not trusted</td><td>Import CA cert into truststore</td></tr>
<tr><td><code>Connection timeout</code></td><td>LDAP server does not respond</td><td>Increase connection timeout, check DNS</td></tr>
</tbody>
</table>

<pre><code class="language-bash"># Test LDAP connection
ldapsearch -x -H ldap://ldap.example.com:389 \
  -D "cn=admin,dc=example,dc=com" -W \
  -b "ou=People,dc=example,dc=com" \
  "(objectClass=inetOrgPerson)" uid mail cn

# Test LDAPS connection
ldapsearch -x -H ldaps://ldap.example.com:636 \
  -D "cn=admin,dc=example,dc=com" -W \
  -b "dc=example,dc=com" "(uid=testuser)"

# Bật debug logging trong Keycloak
bin/kc.sh start-dev \
  --log-level=org.keycloak.storage.ldap:DEBUG</code></pre>

<h3 id="122-sync-failures"><strong>12.2 Sync Failures</strong></h3>

<table>
<thead>
<tr><th>Error</th><th>Cause</th><th>Solution</th></tr>
</thead>
<tbody>
<tr><td><code>User ... already exists</code></td><td>Username conflict between LDAP and local users</td><td>Delete local user or change username mapping</td></tr>
<tr><td><code>Size limit exceeded</code></td><td>LDAP server limits the number of returned results</td><td>Configure paging on LDAP server, or add LDAP filter to reduce scope</td></tr>
<tr><td><code>Referral</code></td><td>LDAP returns referral instead of result</td><td>Set <code>Referral = follow</code> in connection settings</td></tr>
</tbody>
</table>

<h3 id="123-mapper-problems"><strong>12.3 Mapper Problems</strong></h3>

<pre><code class="language-bash"># Kiểm tra LDAP attributes có tồn tại
ldapsearch -x -H ldap://ldap.example.com:389 \
  -D "cn=admin,dc=example,dc=com" -W \
  -b "uid=testuser,ou=People,dc=example,dc=com" \
  "*" "+"

# Kiểm tra group membership
ldapsearch -x -H ldap://ldap.example.com:389 \
  -D "cn=admin,dc=example,dc=com" -W \
  -b "ou=Groups,dc=example,dc=com" \
  "(member=uid=testuser,ou=People,dc=example,dc=com)" cn</code></pre>

<h2 id="13-best-practices"><strong>13. Best Practices</strong></h2>

<ul>
<li><strong>Always use LDAPS or StartTLS</strong> — avoid sending credentials in plaintext</li>
<li><strong>Use separate service account</strong> for Bind DN — do not use admin account</li>
<li><strong>Search Scope Limit</strong> — use Custom User LDAP Filter to import only necessary users</li>
<li><strong>Enable Connection Pool</strong> — reduces connection creation overhead</li>
<li><strong>Configure the sync period appropriately</strong> — too short causes heavy load on LDAP, too long causes stale data</li>
<li><strong>Monitor sync logs</strong> — Keycloak records detailed sync process logs</li>
<li><strong>Test with READ_ONLY first</strong> — when first configuring, use READ_ONLY to verify before transferring WRITABLE</li>
<li><strong>Backup Keycloak DB before big sync</strong> — full sync can import thousands of users</li>
</ul>
