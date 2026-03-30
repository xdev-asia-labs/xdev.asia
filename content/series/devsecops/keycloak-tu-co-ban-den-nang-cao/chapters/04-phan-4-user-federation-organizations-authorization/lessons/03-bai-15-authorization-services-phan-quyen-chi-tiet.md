---
id: 019d8b30-b115-7001-c001-e0c5f8100115
title: 'Bài 15: Authorization Services - Phân quyền chi tiết'
slug: bai-15-authorization-services-phan-quyen-chi-tiet
description: >-
  Authorization Services deep dive: Resource Server, Resources, Scopes,
  Permissions, Policies (Role-based, User-based, Group-based, Client-based,
  Time-based, JavaScript, Aggregated). UMA 2.0 support, Permission API,
  Policy Enforcer, Pushed Claims, Resource Attributes, Claim Information Points,
  Evaluation API và tích hợp Authorization vào ứng dụng Spring Boot / Node.js.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 4: User Federation, Organizations và Authorization"
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak từ Cơ bản đến Nâng cao
  slug: keycloak-tu-co-ban-den-nang-cao
---
<h2 id="1-authorization-services-tong-quan"><strong>1. Authorization Services — Tổng quan</strong></h2>

<p>Keycloak Authorization Services cung cấp khả năng <strong>phân quyền chi tiết (fine-grained authorization)</strong>, cho phép kiểm soát truy cập ở mức resource và scope thay vì chỉ dựa vào roles. Hệ thống này tuân theo chuẩn <strong>UMA 2.0</strong> (User-Managed Access) và hỗ trợ multiple policy types.</p>

<h3 id="11-cac-khai-niem-chinh"><strong>1.1 Các khái niệm chính</strong></h3>

<table>
<thead>
<tr><th>Concept</th><th>Mô tả</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td><strong>Resource Server</strong></td><td>Application cần bảo vệ resources (là Keycloak client)</td><td>Backend API server</td></tr>
<tr><td><strong>Resource</strong></td><td>Đối tượng cần bảo vệ</td><td>Document, API endpoint, Page</td></tr>
<tr><td><strong>Scope</strong></td><td>Hành động có thể thực hiện trên resource</td><td><code>view</code>, <code>edit</code>, <code>delete</code>, <code>publish</code></td></tr>
<tr><td><strong>Permission</strong></td><td>Kết hợp Resource/Scope với Policies</td><td>"Ai được view Document?"</td></tr>
<tr><td><strong>Policy</strong></td><td>Điều kiện phải thỏa mãn để cho phép truy cập</td><td>"User phải có role 'editor'"</td></tr>
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

<h2 id="2-bat-authorization-services"><strong>2. Bật Authorization Services</strong></h2>

<p>Authorization Services được bật ở <strong>mức client</strong> (không phải realm):</p>

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

<p>Sau khi bật, tab <strong>Authorization</strong> sẽ xuất hiện trên client settings với các sub-tabs: Settings, Resources, Scopes, Policies, Permissions, Evaluate.</p>

<h2 id="3-resources"><strong>3. Resources</strong></h2>

<p>Resource đại diện cho <strong>đối tượng cần bảo vệ</strong>. Mỗi resource có thể có URIs, type, scopes, và attributes.</p>

<h3 id="31-tao-resources"><strong>3.1 Tạo Resources</strong></h3>

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

<p>Attributes cho phép thêm metadata vào resources, có thể được sử dụng trong policies:</p>

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

<p>Scopes định nghĩa <strong>các hành động</strong> có thể thực hiện trên resources:</p>

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

<p>Policies là <strong>điều kiện</strong> quyết định cho phép hoặc từ chối truy cập. Keycloak hỗ trợ nhiều loại policies:</p>

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

<p><strong>Lưu ý:</strong> JavaScript policies cần được bật qua <code>--features=scripts</code> hoặc upload JAR.</p>

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

<p>Deploy JavaScript policy dưới dạng JAR:</p>

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

<p>Kết hợp nhiều policies thành một policy duy nhất với decision strategy:</p>

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
<tr><th>Strategy</th><th>Mô tả</th><th>Khi nào dùng</th></tr>
</thead>
<tbody>
<tr><td><strong>Unanimous</strong></td><td>TẤT CẢ policies phải PERMIT</td><td>Strict — tất cả điều kiện phải thỏa mãn</td></tr>
<tr><td><strong>Affirmative</strong></td><td>ÍT NHẤT MỘT policy PERMIT</td><td>Flexible — chỉ cần một điều kiện thỏa mãn</td></tr>
<tr><td><strong>Consensus</strong></td><td>SỐ PERMIT > SỐ DENY</td><td>Voting — đa số quyết định</td></tr>
</tbody>
</table>

<h2 id="7-permissions"><strong>7. Permissions</strong></h2>

<p>Permissions kết hợp <strong>Resources/Scopes với Policies</strong> để tạo authorization rules.</p>

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

<p>User-Managed Access (UMA) 2.0 cho phép <strong>resource owners quản lý quyền truy cập</strong> vào resources của họ. User có thể chia sẻ resources với users khác mà không cần admin can thiệp.</p>

<h3 id="81-bat-uma"><strong>8.1 Bật UMA</strong></h3>

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

<p>Permission API cho phép <strong>kiểm tra permissions programmatically</strong> mà không cần UMA flow:</p>

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

<p>Pushed Claims cho phép client <strong>gửi thêm context information</strong> khi request authorization, giúp policies có thêm dữ liệu để ra quyết định:</p>

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

<p>Claim Information Points cho phép <strong>tự động thu thập claims từ nhiều nguồn</strong> (HTTP request, external services) để sử dụng trong policies:</p>

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

<p>Keycloak Admin Console cung cấp <strong>Evaluation Tool</strong> để test permissions trước khi deploy.</p>

<h3 id="121-su-dung-evaluation-tool"><strong>12.1 Sử dụng Evaluation Tool</strong></h3>

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

<p>Policy Enforcer là <strong>Java library</strong> tích hợp vào application để tự động enforce authorization policies:</p>

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

<h2 id="14-kcadm-quan-ly-authorization"><strong>14. kcadm.sh — Quản lý Authorization</strong></h2>

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
<li><strong>Bắt đầu từ coarse-grained → fine-grained</strong> — dùng role-based trước, thêm resource-based khi cần</li>
<li><strong>Dùng resource types</strong> — nhóm resources cùng loại thay vì tạo permission cho từng resource riêng</li>
<li><strong>Test với Evaluation API</strong> — luôn test permissions trước khi deploy lên production</li>
<li><strong>Cẩn thận với Decision Strategy</strong> — <code>UNANIMOUS</code> an toàn hơn nhưng restrictive hơn <code>AFFIRMATIVE</code></li>
<li><strong>Limit JavaScript policies</strong> — ưu tiên built-in policy types, chỉ dùng JavaScript khi thực sự cần</li>
<li><strong>Monitor permission evaluation performance</strong> — quá nhiều policies lồng nhau có thể gây chậm</li>
<li><strong>Export/import authorization config</strong> — dùng kcadm.sh để version control authorization settings</li>
<li><strong>Tách permission check khỏi business logic</strong> — enforce ở middleware/interceptor level</li>
</ul>
