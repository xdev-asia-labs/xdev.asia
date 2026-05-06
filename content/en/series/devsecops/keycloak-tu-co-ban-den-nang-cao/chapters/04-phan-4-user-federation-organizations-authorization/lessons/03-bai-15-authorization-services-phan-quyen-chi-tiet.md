---
id: 019d8b30-b115-7001-c001-e0c5f8100115
title: 'Lesson 15: Authorization Services - Detailed authorization'
slug: bai-15-authorization-services-phan-quyen-chi-tiet
description: 'Authorization Services deep dive: Resource Server, Resources, Scopes, Permissions, Policies (Role-based, User-based, Group-based, Client-based, Time-based, JavaScript, Aggregated). UMA 2.0 support, Permission API, Policy Enforcer, Pushed Claims, Resource Attributes, Claim Information Points, Evaluation API and Authorization integration into Spring Boot / Node.js applications.'
duration_minutes: 240
is_free: true
video_url: null
sort_order: 15
section_title: 'Part 4: User Federation, Organizations and Authorization'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak from Basic to Advanced
  slug: keycloak-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8946" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8946)"/>

  <!-- Decorations -->
  <g>
    <circle cx="789" cy="77" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="978" cy="266" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="667" cy="195" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="856" cy="124" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="53" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="147" x2="1100" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="177" x2="1050" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1083.3730669589463,226 1083.3730669589463,268 1047,289 1010.6269330410536,268 1010.6269330410536,226 1047,205" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Lesson 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 15: Authorization Services - Part</tspan>
<tspan x="60" dy="42">detailed permissions</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: User Federation, Organizations and Authorization</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-authorization-services-tong-quan"><strong>1. Authorization Services — Overview</strong></h2>

<p>Keycloak Authorization Services provides <strong>fine-grained authorization</strong>, allowing access control at the resource and scope level instead of relying solely on roles. This system complies with the <strong>UMA 2.0</strong> (User-Managed Access) standard and supports multiple policy types.</p>

<h3 id="11-cac-khai-niem-chinh"><strong>1.1 Main concepts</strong></h3>

<table>
<thead>
<tr><th>Concept</th><th>Description</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td><strong>Resource Server</strong></td><td>Application needs to protect resources (Keycloak client)</td><td>Backend API server</td></tr>
<tr><td><strong>Resource</strong></td><td>Object to protect</td><td>Document, API endpoint, Page</td></tr>
<tr><td><strong>Scope</strong></td><td>Actions that can be performed on resource</td><td><code>view</code>, <code>edit</code>, <code>delete</code>, <code>publish</code></td></tr>
<tr><td><strong>Permission</strong></td><td>Combining Resource/Scope with Policies</td><td>"Who can view the Document?"</td></tr>
<tr><td><strong>Policy</strong></td><td>Conditions must be met to allow access</td><td>"User must have the role 'editor'"</td></tr>
</tbody>
</table>

<h3 id="12-authorization-flow"><strong>1.2 Authorization Flow</strong></h3>

<pre><code class="language-text">Client Request → Resource Server → Keycloak Authorization
                                        │
                    ┌───────────────────┘
                    ▼
              Find Matching Permission
                    │
                    ▼
              Evaluate Associated Policies
                    │
              ┌─────┼─────┐
              ▼     ▼     ▼
           Policy Policy Policy
           (Role) (Time) (Group)
              │     │     │
              └─────┼─────┘
                    ▼
              Decision Strategy
              (Unanimous/Affirmative/Consensus)
                    │
              ┌─────┴─────┐
              ▼           ▼
           PERMIT       DENY</code></pre>

<h2 id="2-bat-authorization-services"><strong>2. Enable Authorization Services</strong></h2>

<p>Authorization Services enabled at <strong>client level</strong> (not realm):</p>

<h3 id="21-qua-admin-console"><strong>2.1 Qua Admin Console</strong></h3>

<pre><code class="language-text">Clients → my-app → Settings:
  Client authentication: ON
  Authorization: ON
  → Save</code></pre>

<h3 id="22-qua-kcadm"><strong>2.2 Qua kcadm.sh</strong></h3>

<pre><code class="language-bash"># Bật authorization trên client
kcadm.sh update clients/${CLIENT_ID} -r my-realm \
  -s authorizationServicesEnabled=true \
  -s serviceAccountsEnabled=true</code></pre>

<p>Once enabled, the <strong>Authorization</strong> tab will appear on the client settings with sub-tabs: Settings, Resources, Scopes, Policies, Permissions, Evaluate.</p>

<h2 id="3-resources"><strong>3. Resources</strong></h2>

<p>Resource represents <strong>the object to be protected</strong>. Each resource can have URIs, types, scopes, and attributes.</p>

<h3 id="31-tao-resources"><strong>3.1 Create Resources</strong></h3>

<pre><code class="language-bash"># Tạo resource qua REST API
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/resource" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Document Resource",
    "type": "document",
    "uris": ["/api/documents/*"],
    "ownerManagedAccess": false,
    "scopes": [
      { "name": "view" },
      { "name": "edit" },
      { "name": "delete" },
      { "name": "publish" }
    ],
    "attributes": {
      "department": ["engineering"],
      "sensitivity": ["internal"]
    }
  }'

# Tạo thêm resource cho specific item
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/resource" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin Panel",
    "type": "page",
    "uris": ["/admin", "/admin/*"],
    "scopes": [
      { "name": "access" }
    ]
  }'</code></pre>

<h3 id="32-resource-attributes"><strong>3.2 Resource Attributes</strong></h3>

<p>Attributes allows adding metadata to resources, which can be used in policies:</p>

<pre><code class="language-json">{
  "name": "Project X Files",
  "type": "project-files",
  "attributes": {
    "project_id": ["project-x"],
    "classification": ["confidential"],
    "allowed_regions": ["vietnam", "singapore"]
  }
}</code></pre>

<h2 id="4-scopes"><strong>4. Scopes</strong></h2>

<p>Scopes defines <strong>actions</strong> that can be performed on resources:</p>

<pre><code class="language-bash"># Tạo scopes
for scope in view edit delete publish manage; do
  curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/scope" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}" \
    -H "Content-Type: application/json" \
    -d "{\"name\": \"$scope\"}"
done</code></pre>

<p>Common scope patterns:</p>

<table>
<thead>
<tr><th>Pattern</th><th>Scopes</th></tr>
</thead>
<tbody>
<tr><td><strong>CRUD</strong></td><td><code>create</code>, <code>read</code>, <code>update</code>, <code>delete</code></td></tr>
<tr><td><strong>Content Management</strong></td><td><code>view</code>, <code>edit</code>, <code>publish</code>, <code>archive</code></td></tr>
<tr><td><strong>API Access</strong></td><td><code>read</code>, <code>write</code>, <code>admin</code></td></tr>
<tr><td><strong>File Operations</strong></td><td><code>download</code>, <code>upload</code>, <code>share</code>, <code>delete</code></td></tr>
</tbody>
</table>

<h2 id="5-policies"><strong>5. Policies</strong></h2>

<p>Policies are <strong>conditions</strong> that decide to allow or deny access. Keycloak supports many types of policies:</p>

<h3 id="51-role-based-policy"><strong>5.1 Role-based Policy</strong></h3>

<pre><code class="language-bash"># Tạo role-based policy
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/policy/role" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Editor Role Policy",
    "description": "User phải có role editor",
    "logic": "POSITIVE",
    "roles": [
      {
        "id": "'${EDITOR_ROLE_ID}'",
        "required": true
      }
    ]
  }'</code></pre>

<h3 id="52-user-based-policy"><strong>5.2 User-based Policy</strong></h3>

<pre><code class="language-json">{
  "name": "Specific Users Policy",
  "description": "Chỉ cho phép users cụ thể",
  "type": "user",
  "logic": "POSITIVE",
  "users": ["user-id-1", "user-id-2"]
}</code></pre>

<h3 id="53-group-based-policy"><strong>5.3 Group-based Policy</strong></h3>

<pre><code class="language-json">{
  "name": "Engineering Group Policy",
  "description": "Members của group Engineering",
  "type": "group",
  "logic": "POSITIVE",
  "groups": [
    {
      "id": "group-uuid",
      "path": "/Engineering",
      "extendChildren": true
    }
  ],
  "groupsClaim": "groups"
}</code></pre>

<h3 id="54-client-based-policy"><strong>5.4 Client-based Policy</strong></h3>

<pre><code class="language-json">{
  "name": "Trusted Client Policy",
  "description": "Chỉ cho phép từ trusted clients",
  "type": "client",
  "logic": "POSITIVE",
  "clients": ["trusted-frontend", "mobile-app"]
}</code></pre>

<h3 id="55-time-based-policy"><strong>5.5 Time-based Policy</strong></h3>

<pre><code class="language-json">{
  "name": "Business Hours Policy",
  "description": "Chỉ cho phép trong giờ làm việc",
  "type": "time",
  "logic": "POSITIVE",
  "notBefore": "2025-01-01 00:00:00",
  "notOnOrAfter": "2030-12-31 23:59:59",
  "dayMonth": null,
  "dayMonthEnd": null,
  "month": null,
  "monthEnd": null,
  "year": null,
  "yearEnd": null,
  "hour": 8,
  "hourEnd": 18,
  "minute": 0,
  "minuteEnd": 0
}</code></pre>

<h3 id="56-javascript-policy"><strong>5.6 JavaScript Policy</strong></h3>

<p><strong>Note:</strong> JavaScript policies need to be enabled via <code>--features=scripts</code> or uploading JAR.</p>

<pre><code class="language-javascript">// Script-based policy (upload dưới dạng JAR provider)
// Filename: my-policy.js
var context = $evaluation.getContext();
var identity = context.getIdentity();
var attributes = identity.getAttributes();

// Kiểm tra custom attribute
var department = attributes.getValue('department');
if (department && department.asString(0) === 'engineering') {
    $evaluation.grant();
} else {
    $evaluation.deny();
}</code></pre>

<p>Deploy JavaScript policy as JAR:</p>

<pre><code class="language-bash"># Tạo cấu trúc thư mục
mkdir -p META-INF/keycloak-scripts/

# Tạo file descriptor
cat &gt; META-INF/keycloak-scripts/keycloak-scripts.json &lt;&lt; 'EOF'
{
  "policies": [
    {
      "name": "Engineering Department Policy",
      "fileName": "engineering-policy.js",
      "description": "Allow only engineering department"
    }
  ]
}
EOF

# Package JAR
jar cf my-policies.jar META-INF/ engineering-policy.js

# Deploy
cp my-policies.jar /opt/keycloak/providers/
/opt/keycloak/bin/kc.sh build</code></pre>

<h3 id="57-aggregated-policy"><strong>5.7 Aggregated Policy</strong></h3>

<p>Combine multiple policies into a single policy with decision strategy:</p>

<pre><code class="language-json">{
  "name": "Full Access Policy",
  "description": "Kết hợp Role + Group + Time policies",
  "type": "aggregate",
  "logic": "POSITIVE",
  "decisionStrategy": "UNANIMOUS",
  "policies": [
    "Editor Role Policy",
    "Engineering Group Policy",
    "Business Hours Policy"
  ]
}</code></pre>

<h2 id="6-decision-strategies"><strong>6. Decision Strategies</strong></h2>

<table>
<thead>
<tr><th>Strategy</th><th>Description</th><th>When to use</th></tr>
</thead>
<tbody>
<tr><td><strong>Unanimous</strong></td><td>ALL policies must PERMIT</td><td>Strict — all conditions must be satisfied</td></tr>
<tr><td><strong>Affirmative</strong></td><td>AT LEAST ONE PERMIT policy</td><td>Flexible — only one condition needs to be satisfied</td></tr>
<tr><td><strong>Consensus</strong></td><td>PERMIT NUMBER > DENY NUMBER</td><td>Voting — majority decides</td></tr>
</tbody>
</table>

<h2 id="7-permissions"><strong>7. Permissions</strong></h2>

<p>Permissions combines <strong>Resources/Scopes with Policies</strong> to create authorization rules.</p>

<h3 id="71-resource-based-permission"><strong>7.1 Resource-based Permission</strong></h3>

<pre><code class="language-bash"># Tạo resource-based permission
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/permission/resource" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Document Access Permission",
    "description": "Ai có thể truy cập documents",
    "type": "resource",
    "logic": "POSITIVE",
    "decisionStrategy": "UNANIMOUS",
    "resources": ["Document Resource"],
    "policies": ["Editor Role Policy", "Business Hours Policy"]
  }'</code></pre>

<h3 id="72-scope-based-permission"><strong>7.2 Scope-based Permission</strong></h3>

<pre><code class="language-bash"># Tạo scope-based permission
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/permission/scope" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Document Delete Permission",
    "description": "Chỉ admin mới được xóa documents",
    "type": "scope",
    "logic": "POSITIVE",
    "decisionStrategy": "UNANIMOUS",
    "resources": ["Document Resource"],
    "scopes": ["delete"],
    "policies": ["Admin Role Policy"]
  }'

# Permission cho publish scope
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/permission/scope" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Document Publish Permission",
    "description": "Editor và Admin được publish",
    "type": "scope",
    "logic": "POSITIVE",
    "decisionStrategy": "AFFIRMATIVE",
    "resources": ["Document Resource"],
    "scopes": ["publish"],
    "policies": ["Editor Role Policy", "Admin Role Policy"]
  }'</code></pre>

<h2 id="8-uma-20"><strong>8. UMA 2.0</strong></h2>

<p>User-Managed Access (UMA) 2.0 allows <strong>resource owners to manage access</strong> to their resources. Users can share resources with other users without admin intervention.</p>

<h3 id="81-bat-uma"><strong>8.1 Enable UMA</strong></h3>

<pre><code class="language-text">Clients → my-app → Authorization → Settings:
  Resource server settings:
    Policy Enforcement Mode: ENFORCING
    Decision Strategy: UNANIMOUS

Resources:
  Resource → Owner Managed Access: ON</code></pre>

<h3 id="82-uma-grant-flow"><strong>8.2 UMA Grant Flow</strong></h3>

<pre><code class="language-bash"># 1. Client gọi Resource Server → bị deny → nhận permission ticket
# Response 401 với header:
# WWW-Authenticate: UMA realm="my-realm",
#   as_uri="http://localhost:8080/realms/my-realm",
#   ticket="permission-ticket-value"

# 2. Client exchange permission ticket lấy RPT (Requesting Party Token)
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:uma-ticket" \
  -d "ticket=permission-ticket-value" \
  -d "client_id=my-app" \
  -d "client_secret=my-secret"

# Response chứa RPT (access token with authorization data)
{
  "access_token": "eyJhbGciOi...",
  "token_type": "Bearer",
  "authorization": {
    "permissions": [
      {
        "rsid": "resource-uuid",
        "rsname": "Document Resource",
        "scopes": ["view", "edit"]
      }
    ]
  }
}</code></pre>

<h2 id="9-permission-api"><strong>9. Permission API</strong></h2>

<p>Permission API allows <strong>to check permissions programmatically</strong> without UMA flow:</p>

<pre><code class="language-bash"># Kiểm tra quyền truy cập cho user hiện tại
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:uma-ticket" \
  -d "audience=my-app" \
  -d "permission=Document Resource#view" \
  -d "response_mode=decision" \
  -d "client_id=my-frontend" \
  -d "subject_token=${USER_ACCESS_TOKEN}"

# Response:
# { "result": true }  → PERMIT
# { "result": false } → DENY

# Kiểm tra nhiều permissions cùng lúc
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:uma-ticket" \
  -d "audience=my-app" \
  -d "permission=Document Resource#view" \
  -d "permission=Document Resource#edit" \
  -d "permission=Admin Panel#access" \
  -d "response_mode=permissions" \
  -d "client_id=my-frontend" \
  -d "subject_token=${USER_ACCESS_TOKEN}"</code></pre>

<h2 id="10-pushed-claims"><strong>10. Pushed Claims</strong></h2>

<p>Pushed Claims allows the client <strong> to send additional context information</strong> when requesting authorization, helping policies have more data to make decisions:</p>

<pre><code class="language-bash"># Request với pushed claims
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:uma-ticket" \
  -d "audience=my-app" \
  -d "permission=Document Resource#edit" \
  -d 'claim_token={"ip_address":["10.0.0.5"],"device_type":["desktop"],"risk_score":["low"]}' \
  -d "claim_token_format=urn:ietf:params:oauth:token-type:jwt" \
  -d "client_id=my-frontend" \
  -d "subject_token=${USER_ACCESS_TOKEN}"</code></pre>

<h2 id="11-claim-information-points"><strong>11. Claim Information Points</strong></h2>

<p>Claim Information Points allows <strong> to automatically collect claims from multiple sources</strong> (HTTP requests, external services) for use in policies:</p>

<pre><code class="language-json">{
  "name": "http-claim-info",
  "claimInformationPoint": {
    "claims": {
      "ip_address": "{request.remoteAddr}",
      "http_method": "{request.method}",
      "request_uri": "{request.relativePath}",
      "user_agent": "{request.headers[user-agent]}"
    }
  }
}</code></pre>

<h2 id="12-evaluation-api"><strong>12. Evaluation API</strong></h2>

<p>Keycloak Admin Console provides <strong>Evaluation Tool</strong> to test permissions before deploying.</p>

<h3 id="121-su-dung-evaluation-tool"><strong>12.1 Using Evaluation Tool</strong></h3>

<pre><code class="language-text">Clients → my-app → Authorization → Evaluate:
1. Identity Information:
   - User: chọn user cần test
   - Roles: chọn roles (hoặc tự động từ user)
2. Resources:
   - Thêm resources cần evaluate
3. Contextual Information:
   - Pushed Claims (JSON)
4. Click "Evaluate"

Results:
  ┌─────────────────────────────┬────────┐
  │ Permission                  │ Result │
  ├─────────────────────────────┼────────┤
  │ Document Access Permission  │ PERMIT │
  │ Document Delete Permission  │ DENY   │
  │ Admin Panel Permission      │ DENY   │
  └─────────────────────────────┴────────┘</code></pre>

<h3 id="122-evaluation-qua-api"><strong>12.2 Evaluation qua API</strong></h3>

<pre><code class="language-bash"># Evaluate permissions cho user cụ thể
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/policy/evaluate" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user-uuid",
    "roleIds": [],
    "resources": [
      {
        "name": "Document Resource",
        "scopes": ["view", "edit", "delete"]
      }
    ],
    "context": {
      "attributes": {
        "ip_address": ["10.0.0.5"]
      }
    },
    "entitlements": false
  }'</code></pre>

<h2 id="13-policy-enforcer"><strong>13. Policy Enforcer</strong></h2>

<p>Policy Enforcer is a <strong>Java library</strong> integrated into the application to automatically enforce authorization policies:</p>

<h3 id="131-spring-boot-integration"><strong>13.1 Spring Boot Integration</strong></h3>

<pre><code class="language-xml">&lt;!-- pom.xml --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.keycloak&lt;/groupId&gt;
    &lt;artifactId&gt;keycloak-authz-client&lt;/artifactId&gt;
    &lt;version&gt;26.0.0&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.keycloak&lt;/groupId&gt;
    &lt;artifactId&gt;keycloak-policy-enforcer&lt;/artifactId&gt;
    &lt;version&gt;26.0.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>

<pre><code class="language-java">// AuthorizationConfig.java
import org.keycloak.authorization.client.AuthzClient;
import org.keycloak.authorization.client.Configuration;
import org.keycloak.representations.idm.authorization.*;

@Configuration
public class AuthorizationConfig {

    @Bean
    public AuthzClient authzClient() {
        // Load từ keycloak.json hoặc cấu hình programmatically
        return AuthzClient.create();
    }
}

// DocumentService.java
@Service
public class DocumentService {

    private final AuthzClient authzClient;

    public DocumentService(AuthzClient authzClient) {
        this.authzClient = authzClient;
    }

    public boolean canUserEditDocument(String userId, String documentId) {
        AuthorizationRequest request = new AuthorizationRequest();
        request.addPermission("Document Resource", "edit");

        try {
            AuthorizationResponse response = authzClient
                .authorization(userId)
                .authorize(request);
            // Nếu thành công → user có quyền
            return response.getToken() != null;
        } catch (AuthorizationDeniedException e) {
            return false;
        }
    }
}

// DocumentController.java
@RestController
@RequestMapping("/api/documents")
public class DocumentController {

    private final DocumentService documentService;

    @PutMapping("/{id}")
    public ResponseEntity&lt;?&gt; updateDocument(
            @PathVariable String id,
            @RequestBody DocumentDTO dto,
            @AuthenticationPrincipal Jwt jwt) {

        if (!documentService.canUserEditDocument(jwt.getSubject(), id)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body(Map.of("error", "You don't have permission to edit this document"));
        }

        // Proceed with update
        return ResponseEntity.ok(documentService.update(id, dto));
    }
}</code></pre>

<h3 id="132-keycloak-json-configuration"><strong>13.2 keycloak.json Configuration</strong></h3>

<pre><code class="language-json">{
  "realm": "my-realm",
  "auth-server-url": "http://localhost:8080",
  "resource": "my-app",
  "credentials": {
    "secret": "client-secret-here"
  },
  "policy-enforcer": {
    "enforcement-mode": "ENFORCING",
    "paths": [
      {
        "path": "/api/documents/*",
        "methods": [
          {
            "method": "GET",
            "scopes": ["view"]
          },
          {
            "method": "PUT",
            "scopes": ["edit"]
          },
          {
            "method": "DELETE",
            "scopes": ["delete"]
          }
        ]
      },
      {
        "path": "/admin/*",
        "enforcement-mode": "ENFORCING"
      },
      {
        "path": "/public/*",
        "enforcement-mode": "DISABLED"
      }
    ]
  }
}</code></pre>

<h3 id="133-nodejs-integration"><strong>13.3 Node.js Integration</strong></h3>

<pre><code class="language-typescript">// authorization.ts
import axios from 'axios';

interface PermissionResult {
  rsid: string;
  rsname: string;
  scopes: string[];
}

class KeycloakAuthzClient {
  private readonly baseUrl: string;
  private readonly realm: string;
  private readonly clientId: string;
  private readonly clientSecret: string;

  constructor(config: {
    baseUrl: string;
    realm: string;
    clientId: string;
    clientSecret: string;
  }) {
    this.baseUrl = config.baseUrl;
    this.realm = config.realm;
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
  }

  async checkPermission(
    userToken: string,
    resource: string,
    scope: string
  ): Promise&lt;boolean&gt; {
    try {
      const response = await axios.post(
        `${this.baseUrl}/realms/${this.realm}/protocol/openid-connect/token`,
        new URLSearchParams({
          grant_type: 'urn:ietf:params:oauth:grant-type:uma-ticket',
          audience: this.clientId,
          permission: `${resource}#${scope}`,
          response_mode: 'decision',
          subject_token: userToken,
        }),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          auth: {
            username: this.clientId,
            password: this.clientSecret,
          },
        }
      );
      return response.data.result === true;
    } catch {
      return false;
    }
  }

  async getPermissions(userToken: string): Promise&lt;PermissionResult[]&gt; {
    const response = await axios.post(
      `${this.baseUrl}/realms/${this.realm}/protocol/openid-connect/token`,
      new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:uma-ticket',
        audience: this.clientId,
        response_mode: 'permissions',
        subject_token: userToken,
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        auth: {
          username: this.clientId,
          password: this.clientSecret,
        },
      }
    );
    return response.data;
  }
}

// Express middleware
import { Request, Response, NextFunction } from 'express';

const authzClient = new KeycloakAuthzClient({
  baseUrl: 'http://localhost:8080',
  realm: 'my-realm',
  clientId: 'my-app',
  clientSecret: 'secret',
});

function enforcePermission(resource: string, scope: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const allowed = await authzClient.checkPermission(token, resource, scope);
    if (!allowed) {
      return res.status(403).json({
        error: `Permission denied: ${resource}#${scope}`,
      });
    }
    next();
  };
}

// Usage
app.get('/api/documents',
  enforcePermission('Document Resource', 'view'),
  documentsController.list
);

app.put('/api/documents/:id',
  enforcePermission('Document Resource', 'edit'),
  documentsController.update
);

app.delete('/api/documents/:id',
  enforcePermission('Document Resource', 'delete'),
  documentsController.delete
);</code></pre>

<h2 id="14-kcadm-quan-ly-authorization"><strong>14. kcadm.sh — Managing Authorization</strong></h2>

<pre><code class="language-bash"># List resources
kcadm.sh get clients/${CLIENT_ID}/authz/resource-server/resource -r my-realm

# List policies
kcadm.sh get clients/${CLIENT_ID}/authz/resource-server/policy -r my-realm

# List permissions
kcadm.sh get clients/${CLIENT_ID}/authz/resource-server/permission -r my-realm

# List scopes
kcadm.sh get clients/${CLIENT_ID}/authz/resource-server/scope -r my-realm

# Export authorization settings
kcadm.sh get clients/${CLIENT_ID}/authz/resource-server -r my-realm &gt; authz-export.json

# Import authorization settings
kcadm.sh create clients/${CLIENT_ID}/authz/resource-server \
  -r my-realm -f authz-import.json</code></pre>

<h2 id="15-best-practices"><strong>15. Best Practices</strong></h2>

<ul>
<li><strong>Start from coarse-grained → fine-grained</strong> — use role-based first, add resource-based as needed</li>
<li><strong>Use resource types</strong> — group resources of the same type instead of creating permissions for each individual resource</li>
<li><strong>Test with Evaluation API</strong> — always test permissions before deploying to production</li>
<li><strong>Be careful with Decision Strategy</strong> — <code>UNANIMOUS</code> is safer but more restrictive <code>AFFIRMATIVE</code></li>
<li><strong>Limit JavaScript policies</strong> — prioritize built-in policy types, only use JavaScript when really needed</li>
<li><strong>Monitor permission evaluation performance</strong> — too many nested policies can slow down</li>
<li><strong>Export/import authorization config</strong> — use kcadm.sh to version control authorization settings</li>
<li><strong>Separate permission check from business logic</strong> — enforce at middleware/interceptor level</li>
</ul>
