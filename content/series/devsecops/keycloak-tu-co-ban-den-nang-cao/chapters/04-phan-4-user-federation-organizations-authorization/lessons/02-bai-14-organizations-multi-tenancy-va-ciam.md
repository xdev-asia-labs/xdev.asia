---
id: 019d8b30-b114-7001-c001-e0c5f8100114
title: 'Bài 14: Organizations - Multi-tenancy và CIAM'
slug: bai-14-organizations-multi-tenancy-va-ciam
description: >-
  Bật và cấu hình Organizations feature, tạo/quản lý organizations,
  organization domains, organization attributes, quản lý members
  (managed, unmanaged), invitation management (gửi, theo dõi, resend, xóa),
  liên kết Identity Providers với organizations, authenticating members
  (identity-first login), mapping organization claims vào tokens
  và B2B/B2B2C use cases thực tế.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: User Federation, Organizations và Authorization"
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak từ Cơ bản đến Nâng cao
  slug: keycloak-tu-co-ban-den-nang-cao
---
<h2 id="1-organizations-tong-quan"><strong>1. Organizations — Tổng quan</strong></h2>

<p>Keycloak Organizations là tính năng cho phép <strong>quản lý multi-tenancy</strong> trong một realm duy nhất. Thay vì tạo nhiều realms cho từng tổ chức (tenant), bạn có thể tạo <strong>Organizations</strong> bên trong một realm để nhóm users, quản lý domains, và kiểm soát truy cập theo tổ chức.</p>

<p>Đây là tính năng quan trọng cho các nền tảng <strong>B2B</strong> (Business-to-Business) và <strong>B2B2C</strong> (Business-to-Business-to-Consumer), còn gọi là <strong>CIAM</strong> (Customer Identity and Access Management).</p>

<h3 id="11-use-cases"><strong>1.1 Use Cases</strong></h3>

<table>
<thead>
<tr><th>Scenario</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td><strong>SaaS Multi-tenant</strong></td><td>Mỗi công ty khách hàng là một organization, users thuộc về organization của họ</td></tr>
<tr><td><strong>B2B Portal</strong></td><td>Đối tác/vendor có organization riêng, nhân viên đối tác truy cập portal qua organization</td></tr>
<tr><td><strong>Enterprise with subsidiaries</strong></td><td>Tập đoàn có nhiều công ty con, mỗi công ty con là một organization</td></tr>
<tr><td><strong>Educational platform</strong></td><td>Mỗi trường/viện là một organization, giáo viên/sinh viên là members</td></tr>
</tbody>
</table>

<h2 id="2-bat-organizations-feature"><strong>2. Bật Organizations Feature</strong></h2>

<p>Organizations là tính năng có sẵn trong Keycloak 25+. Để bật:</p>

<h3 id="21-bat-tren-realm"><strong>2.1 Bật trên Realm</strong></h3>

<pre><code class="language-bash"># Qua Admin Console:
# Realm Settings → General → Organizations → Enabled

# Qua kcadm.sh:
kcadm.sh update realms/my-realm \
  -s organizationsEnabled=true</code></pre>

<h3 id="22-kiem-tra-trang-thai"><strong>2.2 Kiểm tra trạng thái</strong></h3>

<pre><code class="language-bash"># Qua REST API
curl -s "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq '.organizationsEnabled'
# Output: true</code></pre>

<h2 id="3-tao-va-quan-ly-organizations"><strong>3. Tạo và quản lý Organizations</strong></h2>

<h3 id="31-tao-organization-qua-admin-console"><strong>3.1 Tạo Organization qua Admin Console</strong></h3>

<p>Vào <strong>Admin Console → Organizations → Create organization</strong>:</p>

<table>
<thead>
<tr><th>Field</th><th>Mô tả</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td><strong>Name</strong></td><td>Tên organization (bắt buộc)</td><td><code>Acme Corporation</code></td></tr>
<tr><td><strong>Alias</strong></td><td>Alias duy nhất, tự sinh từ name</td><td><code>acme-corporation</code></td></tr>
<tr><td><strong>Description</strong></td><td>Mô tả tổ chức</td><td><code>Acme Corp - Enterprise customer</code></td></tr>
<tr><td><strong>Redirect URL</strong></td><td>URL redirect sau khi member đăng nhập</td><td><code>https://app.acme.com</code></td></tr>
</tbody>
</table>

<h3 id="32-tao-organization-qua-rest-api"><strong>3.2 Tạo Organization qua REST API</strong></h3>

<pre><code class="language-bash"># Tạo organization
curl -X POST "http://localhost:8080/admin/realms/my-realm/organizations" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Acme Corporation",
    "alias": "acme-corporation",
    "description": "Enterprise customer - Acme Corp",
    "redirectUrl": "https://app.acme.com",
    "enabled": true,
    "domains": [
      {
        "name": "acme.com",
        "verified": true
      }
    ],
    "attributes": {
      "plan": ["enterprise"],
      "industry": ["technology"],
      "region": ["asia-pacific"]
    }
  }'

# List organizations
curl -s "http://localhost:8080/admin/realms/my-realm/organizations" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq '.'

# Get organization by ID
ORG_ID="org-uuid-here"
curl -s "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq '.'

# Update organization
curl -X PUT "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Acme Corporation (Updated)",
    "description": "Updated description",
    "enabled": true
  }'

# Delete organization
curl -X DELETE "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"</code></pre>

<h2 id="4-organization-domains"><strong>4. Organization Domains</strong></h2>

<p>Organization domains cho phép <strong>tự động liên kết users với organization</strong> dựa trên email domain. Khi user đăng ký hoặc đăng nhập với email thuộc domain đã đăng ký, Keycloak có thể tự động gắn user vào organization tương ứng.</p>

<pre><code class="language-bash"># Thêm domain cho organization
curl -X POST "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}/domains" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "acme.com",
    "verified": true
  }'

# List domains
curl -s "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}/domains" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq '.'</code></pre>

<p><strong>Domain states:</strong></p>

<table>
<thead>
<tr><th>State</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td><strong>Verified</strong></td><td>Domain đã xác minh — users với email domain này tự động qualified cho organization</td></tr>
<tr><td><strong>Unverified</strong></td><td>Domain chưa xác minh — chỉ dùng cho matching, cần admin approve</td></tr>
</tbody>
</table>

<p><strong>Lưu ý quan trọng:</strong></p>
<ul>
<li>Một domain chỉ thuộc về <strong>một organization duy nhất</strong></li>
<li>Domain verification giúp đảm bảo organization thực sự sở hữu domain đó</li>
<li>Subdomain matching: <code>acme.com</code> sẽ match <code>user@acme.com</code> nhưng <strong>không</strong> match <code>user@sub.acme.com</code></li>
</ul>

<h2 id="5-organization-attributes"><strong>5. Organization Attributes</strong></h2>

<p>Custom attributes cho phép lưu metadata bổ sung cho organizations:</p>

<pre><code class="language-bash"># Set attributes khi tạo hoặc update organization
curl -X PUT "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Acme Corporation",
    "attributes": {
      "plan": ["enterprise"],
      "max_users": ["500"],
      "contract_end_date": ["2027-12-31"],
      "sla_tier": ["platinum"],
      "billing_email": ["billing@acme.com"]
    }
  }'</code></pre>

<p>Attributes có thể được sử dụng trong:</p>
<ul>
<li><strong>Token claims</strong> — thêm organization metadata vào access/ID tokens</li>
<li><strong>Authorization policies</strong> — phân quyền dựa trên attributes</li>
<li><strong>Custom logic</strong> — xử lý business logic trong application</li>
</ul>

<h2 id="6-quan-ly-members"><strong>6. Quản lý Members</strong></h2>

<h3 id="61-managed-vs-unmanaged-members"><strong>6.1 Managed vs Unmanaged Members</strong></h3>

<table>
<thead>
<tr><th>Type</th><th>Mô tả</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td><strong>Managed</strong></td><td>User được organization quản lý hoàn toàn — lifecycle bị ràng buộc với organization</td><td>Nhân viên công ty: khi rời organization, tài khoản bị vô hiệu hóa</td></tr>
<tr><td><strong>Unmanaged</strong></td><td>User tự do, chỉ "tham gia" organization — tài khoản tồn tại độc lập</td><td>Freelancer, contractor: có thể thuộc nhiều organizations</td></tr>
</tbody>
</table>

<h3 id="62-them-existing-users-vao-organization"><strong>6.2 Thêm existing users vào Organization</strong></h3>

<pre><code class="language-bash"># Thêm user vào organization
USER_ID="user-uuid-here"
curl -X PUT "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}/members/${USER_ID}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"

# List members của organization
curl -s "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}/members" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq '.[].username'

# Get membership info cho user
curl -s "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}/members/${USER_ID}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq '.'

# Remove member
curl -X DELETE "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}/members/${USER_ID}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"</code></pre>

<h3 id="63-member-roles"><strong>6.3 Member Roles</strong></h3>

<p>Organization members có thể được gán roles trong context của organization:</p>

<table>
<thead>
<tr><th>Role</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td><strong>member</strong></td><td>Role mặc định — standard access</td></tr>
<tr><td><strong>admin</strong></td><td>Organization admin — có thể quản lý members và settings</td></tr>
</tbody>
</table>

<h2 id="7-invitation-management"><strong>7. Invitation Management</strong></h2>

<p>Keycloak Organizations hỗ trợ <strong>mời users</strong> tham gia organization qua email invitations.</p>

<h3 id="71-gui-invitation"><strong>7.1 Gửi Invitation</strong></h3>

<pre><code class="language-bash"># Gửi invitation qua REST API
curl -X POST "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}/invitations" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "newuser@partner.com",
    "firstName": "John",
    "lastName": "Doe",
    "redirectUrl": "https://app.example.com/welcome"
  }'</code></pre>

<h3 id="72-invitation-states"><strong>7.2 Invitation States</strong></h3>

<table>
<thead>
<tr><th>State</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td><strong>Pending</strong></td><td>Invitation đã gửi, chưa được accept</td></tr>
<tr><td><strong>Expired</strong></td><td>Invitation hết hạn (configurable expiration)</td></tr>
</tbody>
</table>

<h3 id="73-quan-ly-invitations"><strong>7.3 Quản lý Invitations</strong></h3>

<pre><code class="language-bash"># List pending invitations
curl -s "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}/invitations" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq '.'

# Resend invitation
INV_ID="invitation-uuid-here"
curl -X POST "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}/invitations/${INV_ID}/resend" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"

# Delete/cancel invitation
curl -X DELETE "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}/invitations/${INV_ID}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"</code></pre>

<p><strong>Email template:</strong> Keycloak gửi email sử dụng template có thể customize tại <strong>Realm Settings → Email → Templates</strong>. Template mặc định bao gồm link để user accept invitation và tạo tài khoản (nếu chưa có).</p>

<h2 id="8-lien-ket-identity-providers"><strong>8. Liên kết Identity Providers với Organizations</strong></h2>

<p>Mỗi organization có thể có <strong>Identity Provider riêng</strong>, cho phép members đăng nhập qua IdP của tổ chức họ (ví dụ: Acme Corp dùng Google Workspace, Beta Inc dùng Okta).</p>

<h3 id="81-lien-ket-idp-voi-organization"><strong>8.1 Liên kết IdP với Organization</strong></h3>

<pre><code class="language-bash"># Liên kết Identity Provider với organization
IDP_ALIAS="acme-google-workspace"
curl -X POST "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}/identity-providers" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "\"${IDP_ALIAS}\""

# List linked Identity Providers
curl -s "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}/identity-providers" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq '.'

# Unlink Identity Provider
curl -X DELETE "http://localhost:8080/admin/realms/my-realm/organizations/${ORG_ID}/identity-providers/${IDP_ALIAS}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"</code></pre>

<h3 id="82-cach-hoat-dong"><strong>8.2 Cách hoạt động</strong></h3>

<ol>
<li>User nhập email trên login page (identity-first login)</li>
<li>Keycloak xác định email domain → tìm organization tương ứng</li>
<li>Nếu organization có linked IdP → redirect user đến IdP của organization đó</li>
<li>User authenticate với IdP của tổ chức</li>
<li>Keycloak nhận response và tự động gắn user vào organization</li>
</ol>

<h2 id="9-identity-first-login"><strong>9. Identity-First Login</strong></h2>

<p>Identity-first login là flow mà user <strong>nhập email trước</strong>, sau đó Keycloak quyết định authentication method phù hợp dựa trên organization membership.</p>

<h3 id="91-cau-hinh-identity-first-login"><strong>9.1 Cấu hình Identity-First Login</strong></h3>

<p>Khi bật Organizations, Keycloak tự động tạo flow <strong>"organization"</strong> cho browser authentication. Flow này hoạt động như sau:</p>

<pre><code class="language-text">Organization Browser Flow
├── Cookie (Alternative)
├── Organization Identity-First (Alternative)
│   ├── Username Form (Required)           → User nhập email
│   └── Organization (Conditional)
│       ├── Condition - Organization Member → Kiểm tra user thuộc organization
│       └── Organization Identity Provider  → Redirect đến org's IdP
└── Forms (Alternative)
    ├── Username Password Form (Required)
    └── Conditional OTP (Conditional)</code></pre>

<h3 id="92-cau-hinh-existing-flow"><strong>9.2 Cấu hình existing flow cho Organizations</strong></h3>

<pre><code class="language-bash"># Bind Organization flow cho Browser
kcadm.sh update realms/my-realm \
  -s 'browserFlow=organization browser'</code></pre>

<h2 id="10-mapping-organization-claims"><strong>10. Mapping Organization Claims vào Tokens</strong></h2>

<p>Keycloak có thể thêm <strong>organization information vào access tokens và ID tokens</strong>, cho phép application biết user thuộc organization nào.</p>

<h3 id="101-organization-membership-mapper"><strong>10.1 Organization Membership Mapper</strong></h3>

<p>Keycloak tự động thêm <code>organization</code> claim khi Organizations feature được bật. Claim format:</p>

<pre><code class="language-json">{
  "sub": "user-uuid",
  "email": "john@acme.com",
  "organization": {
    "acme-corporation": {
      "name": "Acme Corporation",
      "roles": ["member"]
    }
  },
  "iss": "http://localhost:8080/realms/my-realm",
  "aud": "my-app"
}</code></pre>

<h3 id="102-cau-hinh-mapper-tuy-chinh"><strong>10.2 Cấu hình Mapper tùy chỉnh</strong></h3>

<p>Bạn có thể thêm <strong>Organization Membership Protocol Mapper</strong> vào client scope để customize claim:</p>

<pre><code class="language-bash"># Thêm Organization Membership Mapper vào client scope
kcadm.sh create clients/${CLIENT_ID}/protocol-mappers/models -r my-realm \
  -s name="organization-membership" \
  -s protocol=openid-connect \
  -s protocolMapper=oidc-organization-membership-mapper \
  -s 'config."claim.name"=organization' \
  -s 'config."id.token.claim"=true' \
  -s 'config."access.token.claim"=true' \
  -s 'config."userinfo.token.claim"=true'</code></pre>

<h3 id="103-su-dung-claims-trong-application"><strong>10.3 Sử dụng Claims trong Application</strong></h3>

<pre><code class="language-typescript">// Ví dụ: Express.js middleware kiểm tra organization
import { Request, Response, NextFunction } from 'express';

interface OrganizationClaim {
  [alias: string]: {
    name: string;
    roles: string[];
  };
}

function requireOrganization(orgAlias: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.user; // decoded JWT
    const orgs: OrganizationClaim = token.organization || {};

    if (!orgs[orgAlias]) {
      return res.status(403).json({
        error: `User is not a member of organization: ${orgAlias}`
      });
    }

    // Attach org info to request
    req.organization = orgs[orgAlias];
    next();
  };
}

// Usage
app.get('/api/dashboard',
  requireOrganization('acme-corporation'),
  (req, res) => {
    res.json({ message: `Welcome to ${req.organization.name}` });
  }
);</code></pre>

<h2 id="11-b2b-va-b2b2c-use-cases"><strong>11. B2B và B2B2C Use Cases</strong></h2>

<h3 id="111-b2b-partner-portal"><strong>11.1 B2B Partner Portal</strong></h3>

<pre><code class="language-text">Scenario: Platform cung cấp portal cho partners

Realm: platform-realm
├── Organization: "Partner A" (partner-a.com)
│   ├── IdP: Partner A's Okta
│   ├── Members: 50 employees
│   └── Attributes: { plan: "gold", api_quota: "10000" }
├── Organization: "Partner B" (partner-b.com)
│   ├── IdP: Partner B's Azure AD
│   ├── Members: 200 employees
│   └── Attributes: { plan: "platinum", api_quota: "unlimited" }
└── Organization: "Partner C" (partner-c.com)
    ├── IdP: Partner C's Google Workspace
    ├── Members: 30 employees
    └── Attributes: { plan: "silver", api_quota: "5000" }

Flow:
1. Partner employee truy cập portal
2. Nhập email → Keycloak detect organization từ domain
3. Redirect đến IdP của partner
4. Authenticate → token chứa organization claim
5. Application phân quyền dựa trên organization + plan</code></pre>

<h3 id="112-b2b2c-saas-platform"><strong>11.2 B2B2C SaaS Platform</strong></h3>

<pre><code class="language-text">Scenario: SaaS platform bán cho businesses, businesses mời end-users

Realm: saas-realm
├── Organization: "School A"
│   ├── Domain: school-a.edu.vn
│   ├── Members (Managed): Teachers, Admin staff
│   ├── Members (Unmanaged): Students (self-registered)
│   └── IdP: School A's LDAP → federated via Keycloak IdP
├── Organization: "School B"
│   ├── Domain: school-b.edu.vn
│   ├── Members (Managed): Teachers
│   └── Members (Unmanaged): Students
└── Individual users (no organization)
    └── Free tier users</code></pre>

<h2 id="12-best-practices"><strong>12. Best Practices</strong></h2>

<ul>
<li><strong>Dùng Organizations thay vì multi-realm</strong> — giảm overhead quản lý, chia sẻ configs</li>
<li><strong>Verify domains</strong> — đảm bảo organization thực sự sở hữu domain trước khi auto-assign users</li>
<li><strong>Phân biệt Managed/Unmanaged</strong> — managed cho employees cần lifecycle management, unmanaged cho external users</li>
<li><strong>Sử dụng Identity-First Login</strong> — UX tốt hơn khi có nhiều organizations với different IdPs</li>
<li><strong>Bảo mật Invitation links</strong> — set expiration time hợp lý, monitor pending invitations</li>
<li><strong>Organization attributes cho authorization</strong> — dùng attributes để phân quyền theo plan, tier, region</li>
<li><strong>Monitor member count</strong> — đặt alert khi organization vượt quá quota</li>
</ul>
