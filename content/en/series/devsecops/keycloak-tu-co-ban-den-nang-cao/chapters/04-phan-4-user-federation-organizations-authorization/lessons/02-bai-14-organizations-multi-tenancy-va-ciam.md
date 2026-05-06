---
id: 019d8b30-b114-7001-c001-e0c5f8100114
title: 'Lesson 14: Organizations - Multi-tenancy and CIAM'
slug: bai-14-organizations-multi-tenancy-va-ciam
description: Enable and configure the Organizations feature, create/manage organizations, organization domains, organization attributes, manage members (managed, unmanaged), invitation management (send, track, resend, delete), associate Identity Providers with organizations, authenticating members (identity-first login), mapping organization claims to tokens and actual B2B/B2B2C use cases.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 14
section_title: 'Part 4: User Federation, Organizations and Authorization'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak from Basic to Advanced
  slug: keycloak-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4862" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4862)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1057" cy="201" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1014" cy="258" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="971" cy="55" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="928" cy="112" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="885" cy="169" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="211" x2="1100" y2="291" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="241" x2="1050" y2="311" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="933.5166604983954,98 933.5166604983954,124 911,137 888.4833395016046,124 888.4833395016046,98 911,85" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — Lesson 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 14: Organizations - Multi-tenancy and</tspan>
      <tspan x="60" dy="42">CIAM</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: User Federation, Organizations and Authorization</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-organizations-tong-quan"><strong>1. Organizations — Overview</strong></h2>

<p>Keycloak Organizations is a feature that allows <strong> to manage multi-tenancy</strong> in a single realm. Instead of creating multiple realms for each organization (tenant), you can create <strong>Organizations</strong> inside a realm to group users, manage domains, and control access by organization.</p>

<p>This is an important feature for the <strong>B2B</strong> (Business-to-Business) and <strong>B2B2C</strong> (Business-to-Business-to-Consumer) platforms, also known as <strong>CIAM</strong> (Customer Identity and Access Management).</p>

<h3 id="11-use-cases"><strong>1.1 Use Cases</strong></h3>

<table>
<thead>
<tr><th>Scenario</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><strong>SaaS Multi-tenant</strong></td><td>Each customer company is an organization, users belong to their organization</td></tr>
<tr><td><strong>B2B Portal</strong></td><td>Partner/vendor has its own organization, partner employees access the portal through organization</td></tr>
<tr><td><strong>Enterprise with subsidiaries</strong></td><td>The corporation has many subsidiaries, each subsidiary is an organization</td></tr>
<tr><td><strong>Educational platform</strong></td><td>Each school/institute is an organization, teachers/students are members</td></tr>
</tbody>
</table>

<h2 id="2-bat-organizations-feature"><strong>2. Enable Organizations Feature</strong></h2>

<p>Organizations is a feature available in Keycloak 25+. To turn on:</p>

<h3 id="21-bat-tren-realm"><strong>2.1 Enable on Realm</strong></h3>

<pre><code class="language-bash"># Qua Admin Console:
# Realm Settings → General → Organizations → Enabled

# Qua kcadm.sh:
kcadm.sh update realms/my-realm \
  -s organizationsEnabled=true</code></pre>

<h3 id="22-kiem-tra-trang-thai"><strong>2.2 Check status</strong></h3>

<pre><code class="language-bash"># Qua REST API
curl -s "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq '.organizationsEnabled'
# Output: true</code></pre>

<h2 id="3-tao-va-quan-ly-organizations"><strong>3. Create and manage Organizations</strong></h2>

<h3 id="31-tao-organization-qua-admin-console"><strong>3.1 Create Organization via Admin Console</strong></h3>

<p>Go to <strong>Admin Console → Organizations → Create organization</strong>:</p>

<table>
<thead>
<tr><th>Field</th><th>Description</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td><strong>Name</strong></td><td>Organization name (required)</td><td><code>Acme Corporation</code></td></tr>
<tr><td><strong>Alias</strong></td><td>Unique, self-generated Alias ​​from name</td><td><code>acme-corporation</code></td></tr>
<tr><td><strong>Description</strong></td><td>Organization description</td><td><code>Acme Corp - Enterprise customer</code></td></tr>
<tr><td><strong>Redirect URL</strong></td><td>URL redirect after member logs in</td><td><code>https://app.acme.com</code></td></tr>
</tbody>
</table>

<h3 id="32-tao-organization-qua-rest-api"><strong>3.2 Create Organization via REST API</strong></h3>

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

<p>Organization domains allows <strong> to automatically associate users with organization</strong> based on email domain. When a user registers or logs in with an email belonging to the registered domain, Keycloak can automatically attach the user to the corresponding organization.</p>

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
<tr><th>State</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><strong>Verified</strong></td><td>Verified domain — users with this email domain are automatically qualified for organization</td></tr>
<tr><td><strong>Unverified</strong></td><td>Unverified domain — only used for matching, requires admin approval</td></tr>
</tbody>
</table>

<p><strong>Important note:</strong></p>
<ul>
<li>A domain belongs to only <strong>a single organization</strong></li>
<li>Domain verification helps ensure that the organization actually owns that domain</li>
<li>Subdomain matching: <code>acme.com</code> will match <code>user@acme.com</code> but <strong>does not</strong> match <code>user@sub.acme.com</code></li>
</ul>

<h2 id="5-organization-attributes"><strong>5. Organization Attributes</strong></h2>

<p>Custom attributes allows saving additional metadata for organizations:</p>

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

<p>Attributes can be used in:</p>
<ul>
<li><strong>Token claims</strong> — add organization metadata to access/ID tokens</li>
<li><strong>Authorization policies</strong> — authorization based on attributes</li>
<li><strong>Custom logic</strong> — handles business logic in application</li>
</ul>

<h2 id="6-quan-ly-members"><strong>6. Managing Members</strong></h2>

<h3 id="61-managed-vs-unmanaged-members"><strong>6.1 Managed vs Unmanaged Members</strong></h3>

<table>
<thead>
<tr><th>Type</th><th>Description</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td><strong>Managed</strong></td><td>User is fully managed by the organization — lifecycle is tied to the organization</td><td>Company employee: when leaving the organization, account is disabled</td></tr>
<tr><td><strong>Unmanaged</strong></td><td>Free user, only "joins" organization — account exists independently</td><td>Freelancer, contractor: can belong to many organizations</td></tr>
</tbody>
</table>

<h3 id="62-them-existing-users-vao-organization"><strong>6.2 Add existing users to Organization</strong></h3>

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

<p>Organization members can be assigned roles in the context of organization:</p>

<table>
<thead>
<tr><th>Role</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><strong>member</strong></td><td>Default role — standard access</td></tr>
<tr><td><strong>admin</strong></td><td>Organization admin — can manage members and settings</td></tr>
</tbody>
</table>

<h2 id="7-invitation-management"><strong>7. Invitation Management</strong></h2>

<p>Keycloak Organizations supports <strong>inviting users</strong> to join the organization via email invitations.</p>

<h3 id="71-gui-invitation"><strong>7.1 Send Invitation</strong></h3>

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
<tr><th>State</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><strong>Pending</strong></td><td>Invitation sent, not accepted</td></tr>
<tr><td><strong>Expired</strong></td><td>Invitation expires (configurable expiration)</td></tr>
</tbody>
</table>

<h3 id="73-quan-ly-invitations"><strong>7.3 Invitations Management</strong></h3>

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

<p><strong>Email template:</strong> Keycloak sends emails using templates that can be customized at <strong>Realm Settings → Email → Templates</strong>. The default template includes a link for users to accept invitations and create an account (if they don't have one).</p>

<h2 id="8-lien-ket-identity-providers"><strong>8. Associate Identity Providers with Organizations</strong></h2>

<p>Each organization can have its own <strong>Identity Provider</strong>, allowing members to log in via their organization's IdP (for example, Acme Corp uses Google Workspace, Beta Inc uses Okta).</p>

<h3 id="81-lien-ket-idp-voi-organization"><strong>8.1 Associate IdP with Organization</strong></h3>

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

<h3 id="82-cach-hoat-dong"><strong>8.2 How it works</strong></h3>

<ol>
<li>User enters email on login page (identity-first login)</li>
<li>Keycloak determines email domain → finds corresponding organization</li>
<li>If the organization has a linked IdP → redirect user to that organization's IdP</li>
<li>User authenticate with organization IdP</li>
<li>Keycloak receives response and automatically attaches user to organization</li>
</ol>

<h2 id="9-identity-first-login"><strong>9. Identity-First Login</strong></h2>

<p>Identity-first login is the flow where user <strong>enters email first</strong>, then Keycloak decides the appropriate authentication method based on organization membership.</p>

<h3 id="91-cau-hinh-identity-first-login"><strong>9.1 Configuring Identity-First Login</strong></h3>

<p>When Organizations is enabled, Keycloak automatically creates flow <strong>"organization"</strong> for browser authentication. This flow works as follows:</p>

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

<h3 id="92-cau-hinh-existing-flow"><strong>9.2 Configure existing flow for Organizations</strong></h3>

<pre><code class="language-bash"># Bind Organization flow cho Browser
kcadm.sh update realms/my-realm \
  -s 'browserFlow=organization browser'</code></pre>

<h2 id="10-mapping-organization-claims"><strong>10. Mapping Organization Claims into Tokens</strong></h2>

<p>Keycloak can add <strong>organization information to access tokens and ID tokens</strong>, allowing the application to know which organization the user belongs to.</p>

<h3 id="101-organization-membership-mapper"><strong>10.1 Organization Membership Mapper</strong></h3>

<p>Keycloak automatically adds <code>organization</code> claim when the Organizations feature is enabled. Claim format:</p>

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

<h3 id="102-cau-hinh-mapper-tuy-chinh"><strong>10.2 Custom Mapper Configuration</strong></h3>

<p>You can add <strong>Organization Membership Protocol Mapper</strong> to the client scope to customize claim:</p>

<pre><code class="language-bash"># Thêm Organization Membership Mapper vào client scope
kcadm.sh create clients/${CLIENT_ID}/protocol-mappers/models -r my-realm \
  -s name="organization-membership" \
  -s protocol=openid-connect \
  -s protocolMapper=oidc-organization-membership-mapper \
  -s 'config."claim.name"=organization' \
  -s 'config."id.token.claim"=true' \
  -s 'config."access.token.claim"=true' \
  -s 'config."userinfo.token.claim"=true'</code></pre>

<h3 id="103-su-dung-claims-trong-application"><strong>10.3 Using Claims in Application</strong></h3>

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

<h2 id="11-b2b-va-b2b2c-use-cases"><strong>11. B2B and B2B2C Use Cases</strong></h2>

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
<li><strong>Use Organizations instead of multi-realm</strong> — reduce management overhead, share configs</li>
<li><strong>Verify domains</strong> — ensures the organization actually owns the domain before auto-assigning users</li>
<li><strong>Managed/Unmanaged distinction</strong> — managed for employees who need lifecycle management, unmanaged for external users</li>
<li><strong>Use Identity-First Login</strong> — Better UX when there are multiple organizations with different IdPs</li>
<li><strong>Security Invitation links</strong> — set reasonable expiration time, monitor pending invitations</li>
<li><strong>Organization attributes for authorization</strong> — use attributes to assign authorization by plan, tier, region</li>
<li><strong>Monitor member count</strong> — set alert when organization exceeds quota</li>
</ul>
