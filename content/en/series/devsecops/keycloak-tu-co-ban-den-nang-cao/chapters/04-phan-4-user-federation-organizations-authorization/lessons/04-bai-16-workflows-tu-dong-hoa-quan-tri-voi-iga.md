---
id: 019d8b30-b116-7001-c001-e0c5f8100116
title: 'Lesson 16: Workflows - Automating administration with IGA'
slug: bai-16-workflows-tu-dong-hoa-quan-tri-voi-iga
description: Introducing Keycloak Workflows (preview) for Identity Governance and Administration (IGA). Understanding workflows, workflow definitions, workflow expression language, managing workflows, defining conditions and steps, Joiner-Mover-Leaver (JML) processes, automated onboarding/offboarding, access reviews and common use cases for enterprises.
duration_minutes: 160
is_free: true
video_url: null
sort_order: 16
section_title: 'Part 4: User Federation, Organizations and Authorization'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak from Basic to Advanced
  slug: keycloak-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3397" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3397)"/>

  <!-- Decorations -->
  <g>
    <circle cx="870" cy="240" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="910" cy="120" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="190" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="950" cy="260" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="160" x2="1100" y2="240" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="190" x2="1050" y2="260" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="940.3108891324554,92.5 940.3108891324554,127.5 910,145 879.6891108675446,127.5 879.6891108675446,92.50000000000001 910,75" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — Lesson 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 16: Workflows - Automating administration</tspan>
<tspan x="60" dy="42">with IGA</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: User Federation, Organizations and Authorization</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-iga-va-workflows-tong-quan"><strong>1. IGA and Workflows — Overview</strong></h2>

<p><strong>Identity Governance and Administration (IGA)</strong> is the field of identity lifecycle management — from when a user joins the organization (joiner), changes roles (mover), to when he leaves (leaver). Keycloak Workflows is a <strong>preview</strong> feature that enables the automation of these IGA processes.</p>

<h3 id="11-tai-sao-can-workflows"><strong>1.1 Why do we need Workflows?</strong></h3>

<table>
<thead>
<tr><th>Problem</th><th>No Workflows</th><th>Yes Workflows</th></tr>
</thead>
<tbody>
<tr><td><strong>Onboarding new employees</strong></td><td>Admin must manually create account, assign roles, add to groups</td><td>Automatically: create account → assign roles according to department → add groups → send welcome email</td></tr>
<tr><td><strong>Changing departments</strong></td><td>Admin must manually delete old roles and assign new roles</td><td>Automatically detect department changes → update corresponding roles/groups</td></tr>
<tr><td><strong>Offboarding</strong></td><td>Forgot revoke access → security risk</td><td>Automatically disable account → revoke sessions → remove from groups</td></tr>
<tr><td><strong>Access review</strong></td><td>Unable to periodically review</td><td>Automatically check and report unused permissions</td></tr>
</tbody>
</table>

<h3 id="12-keycloak-workflows-la-gi"><strong>1.2 What is Keycloak Workflows?</strong></h3>

<p>Keycloak Workflows is a <strong>event-driven, condition-based</strong> system that allows the definition of automated processes including:</p>

<ul>
<li><strong>Trigger</strong>: Workflow trigger event (user created, attribute changed, login event...)</li>
<li><strong>Conditions</strong>: Conditions that must be met for the workflow to execute</li>
<li><strong>Steps</strong>: Actions to take when conditions are matched (assign role, add to group, send notification...)</li>
</ul>

<h2 id="2-bat-workflows-preview"><strong>2. Enable Workflows (Preview Feature)</strong></h2>

<p>Workflows is feature <strong>preview</strong>, needs to be enabled explicitly:</p>

<pre><code class="language-bash"># Bật qua command line
bin/kc.sh start --features=workflows

# Hoặc trong keycloak.conf
features=workflows

# Bật cùng các features khác
bin/kc.sh start --features=workflows,organizations,scripts

# Docker
docker run -e KC_FEATURES=workflows \
  quay.io/keycloak/keycloak:latest start-dev</code></pre>

<p><strong>Note:</strong> Preview features may change API between versions. Should not be used in production without thorough testing.</p>

<h2 id="3-workflow-concepts"><strong>3. Workflow Concepts</strong></h2>

<h3 id="31-workflow-components"><strong>3.1 Workflow Components</strong></h3>

<pre><code class="language-text">Workflow Definition
├── Metadata (name, description, enabled)
├── Trigger (event type)
├── Conditions (when to execute)
│   ├── Condition 1 (attribute check)
│   ├── Condition 2 (group membership)
│   └── ... (AND/OR logic)
└── Steps (what to do)
    ├── Step 1 (assign role)
    ├── Step 2 (add to group)
    ├── Step 3 (send notification)
    └── ... (sequential execution)</code></pre>

<h3 id="32-trigger-types"><strong>3.2 Trigger Types</strong></h3>

<table>
<thead>
<tr><th>Trigger</th><th>Description</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td><strong>USER_CREATED</strong></td><td>Newly created user</td><td>Onboarding: auto-assign roles/groups</td></tr>
<tr><td><strong>USER_UPDATED</strong></td><td>User attributes change</td><td>Mover: detect department change</td></tr>
<tr><td><strong>USER_DELETED</strong></td><td>User deleted</td><td>Cleanup: revoke external access</td></tr>
<tr><td><strong>USER_DISABLED</strong></td><td>User disabled</td><td>Offboarding: revoke sessions</td></tr>
<tr><td><strong>GROUP_MEMBERSHIP_CHANGED</strong></td><td>User added/removed from group</td><td>Auto-assign related roles</td></tr>
<tr><td><strong>ROLE_ASSIGNED</strong></td><td>User assigned role</td><td>Cascading permissions</td></tr>
<tr><td><strong>ROLE_REMOVED</strong></td><td>User deleted role</td><td>Revoke dependent access</td></tr>
</tbody>
</table>

<h2 id="4-workflow-definitions"><strong>4. Workflow Definitions</strong></h2>

<h3 id="41-cau-truc-workflow-definition"><strong>4.1 Workflow Structure Definition</strong></h3>

<pre><code class="language-json">{
  "name": "Employee Onboarding",
  "description": "Automatically provision new employees based on department",
  "enabled": true,
  "trigger": {
    "type": "USER_CREATED"
  },
  "conditions": [
    {
      "type": "user_attribute",
      "attribute": "employeeType",
      "operator": "equals",
      "value": "full-time"
    }
  ],
  "steps": [
    {
      "type": "assign_role",
      "role": "employee"
    },
    {
      "type": "add_to_group",
      "group": "/Company/All-Employees"
    },
    {
      "type": "conditional",
      "condition": {
        "type": "user_attribute",
        "attribute": "department",
        "operator": "equals",
        "value": "engineering"
      },
      "thenSteps": [
        {
          "type": "assign_role",
          "role": "developer"
        },
        {
          "type": "add_to_group",
          "group": "/Company/Engineering"
        }
      ]
    }
  ]
}</code></pre>

<h3 id="42-yaml-format"><strong>4.2 YAML Format</strong></h3>

<pre><code class="language-yaml"># workflow-onboarding.yaml
name: Employee Onboarding
description: Auto-provision new employees
enabled: true

trigger:
  type: USER_CREATED

conditions:
  - type: user_attribute
    attribute: employeeType
    operator: equals
    value: full-time

steps:
  - type: assign_role
    role: employee

  - type: add_to_group
    group: /Company/All-Employees

  - type: conditional
    condition:
      type: user_attribute
      attribute: department
      operator: equals
      value: engineering
    thenSteps:
      - type: assign_role
        role: developer
      - type: add_to_group
        group: /Company/Engineering

  - type: conditional
    condition:
      type: user_attribute
      attribute: department
      operator: equals
      value: marketing
    thenSteps:
      - type: assign_role
        role: marketer
      - type: add_to_group
        group: /Company/Marketing</code></pre>

<h2 id="5-workflow-expression-language"><strong>5. Workflow Expression Language</strong></h2>

<p>Workflows uses expression language to <strong>define dynamic conditions</strong> and <strong>reference user attributes</strong>.</p>

<h3 id="51-variables"><strong>5.1 Variables</strong></h3>

<table>
<thead>
<tr><th>Variable</th><th>Description</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td><code>user.username</code></td><td>Username of user</td><td><code>john.doe</code></td></tr>
<tr><td><code>user.email</code></td><td>Email address</td><td><code>john@example.com</code></td></tr>
<tr><td><code>user.firstName</code></td><td>First name</td><td><code>John</code></td></tr>
<tr><td><code>user.lastName</code></td><td>Last name</td><td><code>Doe</code></td></tr>
<tr><td><code>user.attributes.{name}</code></td><td>Custom attribute</td><td><code>user.attributes.department</code></td></tr>
<tr><td><code>user.groups</code></td><td>List group paths</td><td><code>["/Engineering", "/VPN-Users"]</code></td></tr>
<tr><td><code>user.roles</code></td><td>List assigned roles</td><td><code>["employee", "developer"]</code></td></tr>
<tr><td><code>event.type</code></td><td>Event type</td><td><code>USER_CREATED</code></td></tr>
<tr><td><code>event.time</code></td><td>Event timestamp</td><td><code>2026-03-30T10:00:00Z</code></td></tr>
</tbody>
</table>

<h3 id="52-operators"><strong>5.2 Operators</strong></h3>

<table>
<thead>
<tr><th>Operator</th><th>Description</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td><code>equals</code></td><td>Compare equals</td><td><code>user.attributes.department equals "engineering"</code></td></tr>
<tr><td><code>not_equals</code></td><td>Not equal</td><td><code>user.attributes.status not_equals "inactive"</code></td></tr>
<tr><td><code>contains</code></td><td>Contains values</td><td><code>user.email contains "@acme.com"</code></td></tr>
<tr><td><code>starts_with</code></td><td>Starts with</td><td><code>user.username starts_with "svc-"</code></td></tr>
<tr><td><code>ends_with</code></td><td>Ends with</td><td><code>user.email ends_with "@acme.com"</code></td></tr>
<tr><td><code>in</code></td><td>Belongs to list</td><td><code>user.attributes.location in ["HCM", "HN", "DN"]</code></td></tr>
<tr><td><code>exists</code></td><td>Attribute exists</td><td><code>user.attributes.employeeId exists</code></td></tr>
<tr><td><code>not_exists</code></td><td>Attribute does not exist</td><td><code>user.attributes.termination_date not_exists</code></td></tr>
</tbody>
</table>

<h3 id="53-functions"><strong>5.3 Functions</strong></h3>

<pre><code class="language-text"># String functions
upper(user.attributes.department)        → "ENGINEERING"
lower(user.email)                        → "john@example.com"
trim(user.attributes.title)              → "Senior Developer"

# Date functions
now()                                    → current timestamp
daysAgo(30)                              → timestamp 30 ngày trước
daysBetween(user.createdTimestamp, now()) → số ngày từ lúc tạo

# Collection functions
size(user.groups)                        → số groups
contains(user.roles, "admin")            → true/false</code></pre>

<h2 id="6-managing-workflows"><strong>6. Managing Workflows</strong></h2>

<h3 id="61-crud-operations"><strong>6.1 CRUD Operations</strong></h3>

<pre><code class="language-bash"># Tạo workflow
curl -X POST "http://localhost:8080/admin/realms/my-realm/workflows" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Employee Onboarding",
    "description": "Auto-provision new employees",
    "enabled": true,
    "trigger": { "type": "USER_CREATED" },
    "conditions": [
      {
        "type": "user_attribute",
        "attribute": "employeeType",
        "operator": "equals",
        "value": "full-time"
      }
    ],
    "steps": [
      { "type": "assign_role", "role": "employee" },
      { "type": "add_to_group", "group": "/All-Employees" }
    ]
  }'

# List workflows
curl -s "http://localhost:8080/admin/realms/my-realm/workflows" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq '.'

# Get workflow by ID
WORKFLOW_ID="workflow-uuid"
curl -s "http://localhost:8080/admin/realms/my-realm/workflows/${WORKFLOW_ID}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq '.'

# Update workflow
curl -X PUT "http://localhost:8080/admin/realms/my-realm/workflows/${WORKFLOW_ID}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Employee Onboarding v2",
    "enabled": true,
    "steps": [
      { "type": "assign_role", "role": "employee" },
      { "type": "add_to_group", "group": "/All-Employees" },
      { "type": "invoke_api", "url": "https://hr.example.com/api/provisioned", "method": "POST" }
    ]
  }'

# Delete workflow
curl -X DELETE "http://localhost:8080/admin/realms/my-realm/workflows/${WORKFLOW_ID}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"

# Enable/Disable workflow
curl -X PUT "http://localhost:8080/admin/realms/my-realm/workflows/${WORKFLOW_ID}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{ "enabled": false }'</code></pre>

<h2 id="7-defining-conditions"><strong>7. Defining Conditions</strong></h2>

<h3 id="71-user-attribute-conditions"><strong>7.1 User Attribute Conditions</strong></h3>

<pre><code class="language-json">{
  "conditions": [
    {
      "type": "user_attribute",
      "attribute": "department",
      "operator": "equals",
      "value": "engineering"
    },
    {
      "type": "user_attribute",
      "attribute": "employeeType",
      "operator": "in",
      "values": ["full-time", "contract"]
    }
  ]
}</code></pre>

<h3 id="72-group-membership-conditions"><strong>7.2 Group Membership Conditions</strong></h3>

<pre><code class="language-json">{
  "conditions": [
    {
      "type": "group_membership",
      "group": "/Engineering",
      "operator": "is_member"
    }
  ]
}</code></pre>

<h3 id="73-time-based-conditions"><strong>7.3 Time-based Conditions</strong></h3>

<pre><code class="language-json">{
  "conditions": [
    {
      "type": "time",
      "attribute": "user.createdTimestamp",
      "operator": "older_than_days",
      "value": 90
    }
  ]
}</code></pre>

<h3 id="74-event-based-conditions"><strong>7.4 Event-based Conditions</strong></h3>

<pre><code class="language-json">{
  "conditions": [
    {
      "type": "event",
      "attribute": "event.details.updated_attribute",
      "operator": "equals",
      "value": "department"
    }
  ]
}</code></pre>

<h2 id="8-defining-steps"><strong>8. Defining Steps</strong></h2>

<h3 id="81-assign-role"><strong>8.1 Assign Role</strong></h3>

<pre><code class="language-json">{
  "type": "assign_role",
  "role": "employee",
  "scope": "realm"
}

// Client role
{
  "type": "assign_role",
  "role": "editor",
  "scope": "client",
  "clientId": "my-app"
}</code></pre>

<h3 id="82-remove-role"><strong>8.2 Remove Role</strong></h3>

<pre><code class="language-json">{
  "type": "remove_role",
  "role": "contractor",
  "scope": "realm"
}</code></pre>

<h3 id="83-add-to-group"><strong>8.3 Add to Group</strong></h3>

<pre><code class="language-json">{
  "type": "add_to_group",
  "group": "/Company/Engineering/Backend"
}</code></pre>

<h3 id="84-remove-from-group"><strong>8.4 Remove from Group</strong></h3>

<pre><code class="language-json">{
  "type": "remove_from_group",
  "group": "/Company/Marketing"
}</code></pre>

<h3 id="85-send-notification"><strong>8.5 Send Notification</strong></h3>

<pre><code class="language-json">{
  "type": "send_email",
  "to": "${user.email}",
  "template": "welcome-employee",
  "params": {
    "name": "${user.firstName}",
    "department": "${user.attributes.department}",
    "manager": "${user.attributes.manager}"
  }
}</code></pre>

<h3 id="86-invoke-external-api"><strong>8.6 Invoke External API</strong></h3>

<pre><code class="language-json">{
  "type": "invoke_api",
  "url": "https://hr-system.example.com/api/v1/employees/provisioned",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "X-API-Key": "${env.HR_API_KEY}"
  },
  "body": {
    "employeeId": "${user.attributes.employeeId}",
    "email": "${user.email}",
    "department": "${user.attributes.department}",
    "provisionedAt": "${event.time}"
  }
}</code></pre>

<h3 id="87-set-user-attribute"><strong>8.7 Set User Attribute</strong></h3>

<pre><code class="language-json">{
  "type": "set_attribute",
  "attribute": "provisionedAt",
  "value": "${now()}"
}

{
  "type": "set_attribute",
  "attribute": "accessLevel",
  "value": "standard"
}</code></pre>

<h2 id="9-joiner-mover-leaver-jml"><strong>9. Joiner-Mover-Leaver (JML) Processes</strong></h2>

<h3 id="91-joiner-onboarding"><strong>9.1 Joiner — Automated Onboarding</strong></h3>

<pre><code class="language-yaml"># workflow-joiner.yaml
name: "JML: Joiner - Employee Onboarding"
description: Auto-provision new full-time employees
enabled: true

trigger:
  type: USER_CREATED

conditions:
  - type: user_attribute
    attribute: employeeType
    operator: equals
    value: full-time

steps:
  # Base provisioning cho tất cả employees
  - type: assign_role
    role: employee

  - type: add_to_group
    group: /Company/All-Employees

  - type: set_attribute
    attribute: onboardingStatus
    value: completed

  - type: set_attribute
    attribute: onboardedAt
    value: "${now()}"

  # Department-specific provisioning
  - type: conditional
    condition:
      type: user_attribute
      attribute: department
      operator: equals
      value: engineering
    thenSteps:
      - type: assign_role
        role: developer
      - type: add_to_group
        group: /Company/Engineering
      - type: assign_role
        role: gitlab-user
        scope: client
        clientId: gitlab

  - type: conditional
    condition:
      type: user_attribute
      attribute: department
      operator: equals
      value: sales
    thenSteps:
      - type: assign_role
        role: sales-rep
      - type: add_to_group
        group: /Company/Sales
      - type: assign_role
        role: crm-user
        scope: client
        clientId: salesforce

  # Notify HR system
  - type: invoke_api
    url: https://hr.example.com/api/onboarding/completed
    method: POST
    body:
      employeeId: "${user.attributes.employeeId}"
      email: "${user.email}"

  # Send welcome email
  - type: send_email
    to: "${user.email}"
    template: welcome-employee</code></pre>

<h3 id="92-mover-department-transfer"><strong>9.2 Mover — Department Transfer</strong></h3>

<pre><code class="language-yaml"># workflow-mover.yaml
name: "JML: Mover - Department Transfer"
description: Handle department changes
enabled: true

trigger:
  type: USER_UPDATED

conditions:
  - type: event
    attribute: event.details.updated_attribute
    operator: equals
    value: department

steps:
  # Lấy old department từ event details
  # Remove old department group
  - type: remove_from_group
    group: "/Company/${event.details.previous_value}"

  # Add to new department group
  - type: add_to_group
    group: "/Company/${user.attributes.department}"

  # Log transfer
  - type: set_attribute
    attribute: lastTransferDate
    value: "${now()}"

  - type: set_attribute
    attribute: previousDepartment
    value: "${event.details.previous_value}"

  # Notify managers
  - type: invoke_api
    url: https://hr.example.com/api/transfers
    method: POST
    body:
      employeeId: "${user.attributes.employeeId}"
      fromDepartment: "${event.details.previous_value}"
      toDepartment: "${user.attributes.department}"
      transferDate: "${event.time}"</code></pre>

<h3 id="93-leaver-offboarding"><strong>9.3 Leaver — Automated Offboarding</strong></h3>

<pre><code class="language-yaml"># workflow-leaver.yaml
name: "JML: Leaver - Employee Offboarding"
description: Auto-deprovision disabled/deleted employees
enabled: true

trigger:
  type: USER_DISABLED

conditions:
  - type: user_attribute
    attribute: employeeType
    operator: in
    values:
      - full-time
      - contract

steps:
  # Revoke all active sessions
  - type: invoke_api
    url: "http://localhost:8080/admin/realms/my-realm/users/${user.id}/logout"
    method: POST
    headers:
      Authorization: "Bearer ${admin.token}"

  # Remove from all groups (except audit trail groups)
  - type: remove_from_group
    group: /Company/All-Employees

  # Remove sensitive roles
  - type: remove_role
    role: developer

  - type: remove_role
    role: admin

  # Set offboarding metadata
  - type: set_attribute
    attribute: offboardingStatus
    value: completed

  - type: set_attribute
    attribute: offboardedAt
    value: "${now()}"

  - type: set_attribute
    attribute: accountDisabledReason
    value: employee-departure

  # Notify IT and HR
  - type: invoke_api
    url: https://hr.example.com/api/offboarding/completed
    method: POST
    body:
      employeeId: "${user.attributes.employeeId}"
      email: "${user.email}"
      offboardedAt: "${event.time}"

  # Notify admin via email
  - type: send_email
    to: it-admin@example.com
    template: offboarding-notification
    params:
      employeeName: "${user.firstName} ${user.lastName}"
      department: "${user.attributes.department}"</code></pre>

<h2 id="10-access-review-workflows"><strong>10. Access Review Workflows</strong></h2>

<p>Access reviews allows <strong> to periodically check</strong> whether users still need their current permissions:</p>

<pre><code class="language-yaml"># workflow-access-review.yaml
name: "Access Review: Inactive Users"
description: Review and flag inactive users
enabled: true

trigger:
  type: SCHEDULED
  schedule: "0 0 1 * *"  # Chạy hàng tháng

conditions:
  - type: user_attribute
    attribute: lastLoginTimestamp
    operator: older_than_days
    value: 90

steps:
  # Flag user for review
  - type: set_attribute
    attribute: accessReviewStatus
    value: pending-review

  - type: set_attribute
    attribute: accessReviewDate
    value: "${now()}"

  # Add to review group
  - type: add_to_group
    group: /Access-Review/Pending

  # Notify user's manager
  - type: send_email
    to: "${user.attributes.managerEmail}"
    template: access-review-notification
    params:
      employeeName: "${user.firstName} ${user.lastName}"
      lastLogin: "${user.attributes.lastLoginTimestamp}"
      reviewDeadline: "${daysFromNow(14)}"

  # If user has sensitive roles, escalate
  - type: conditional
    condition:
      type: role_assigned
      role: admin
    thenSteps:
      - type: send_email
        to: security-team@example.com
        template: access-review-escalation
        params:
          employeeName: "${user.firstName} ${user.lastName}"
          sensitiveRoles: "${user.roles}"</code></pre>

<h2 id="11-common-enterprise-use-cases"><strong>11. Common Enterprise Use Cases</strong></h2>

<h3 id="111-contractor-lifecycle-management"><strong>11.1 Contractor Lifecycle Management</strong></h3>

<pre><code class="language-yaml"># Tự động disable contractor khi hết hợp đồng
name: "Contractor: Auto-disable on contract end"
enabled: true
trigger:
  type: SCHEDULED
  schedule: "0 0 * * *"  # Daily check

conditions:
  - type: user_attribute
    attribute: employeeType
    operator: equals
    value: contract
  - type: user_attribute
    attribute: contractEndDate
    operator: before
    value: "${now()}"

steps:
  - type: disable_user
  - type: set_attribute
    attribute: disabledReason
    value: contract-expired
  - type: send_email
    to: "${user.attributes.managerEmail}"
    template: contractor-expired</code></pre>

<h3 id="112-auto-provisioning-from-ldap"><strong>11.2 Auto-provisioning from LDAP Sync</strong></h3>

<pre><code class="language-yaml"># Khi user được sync từ LDAP, auto-assign roles
name: "LDAP: Post-sync provisioning"
enabled: true
trigger:
  type: USER_CREATED

conditions:
  - type: user_attribute
    attribute: LDAP_ID
    operator: exists
  - type: user_attribute
    attribute: department
    operator: exists

steps:
  - type: assign_role
    role: ldap-user
  - type: conditional
    condition:
      type: user_attribute
      attribute: memberOf
      operator: contains
      value: "CN=VPN-Users"
    thenSteps:
      - type: assign_role
        role: vpn-access</code></pre>

<h3 id="113-compliance-password-rotation-reminder"><strong>11.3 Compliance — Password Rotation Reminder</strong></h3>

<pre><code class="language-yaml"># Nhắc nhở user đổi password sau 90 ngày
name: "Compliance: Password rotation reminder"
enabled: true
trigger:
  type: SCHEDULED
  schedule: "0 8 * * 1"  # Weekly, Monday 8 AM

conditions:
  - type: user_attribute
    attribute: lastPasswordChange
    operator: older_than_days
    value: 80

steps:
  - type: send_email
    to: "${user.email}"
    template: password-rotation-reminder
    params:
      daysRemaining: "${90 - daysBetween(user.attributes.lastPasswordChange, now())}"
  - type: conditional
    condition:
      type: user_attribute
      attribute: lastPasswordChange
      operator: older_than_days
      value: 90
    thenSteps:
      - type: set_attribute
        attribute: passwordExpired
        value: "true"
      - type: invoke_api
        url: "http://localhost:8080/admin/realms/my-realm/users/${user.id}/execute-actions-email"
        method: PUT
        body: ["UPDATE_PASSWORD"]</code></pre>

<h2 id="12-monitoring-va-troubleshooting"><strong>12. Monitoring and Troubleshooting</strong></h2>

<h3 id="121-workflow-execution-logs"><strong>12.1 Workflow Execution Logs</strong></h3>

<pre><code class="language-bash"># Bật debug logging cho workflows
bin/kc.sh start \
  --features=workflows \
  --log-level=org.keycloak.workflow:DEBUG

# Xem workflow execution history
curl -s "http://localhost:8080/admin/realms/my-realm/workflows/${WORKFLOW_ID}/executions" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq '.'

# Response mẫu:
{
  "executions": [
    {
      "id": "exec-uuid-1",
      "workflowId": "workflow-uuid",
      "userId": "user-uuid",
      "status": "COMPLETED",
      "triggeredAt": "2026-03-30T10:00:00Z",
      "completedAt": "2026-03-30T10:00:02Z",
      "steps": [
        { "type": "assign_role", "status": "SUCCESS" },
        { "type": "add_to_group", "status": "SUCCESS" },
        { "type": "send_email", "status": "SUCCESS" }
      ]
    }
  ]
}</code></pre>

<h3 id="122-common-issues"><strong>12.2 Common Issues</strong></h3>

<table>
<thead>
<tr><th>Issue</th><th>Cause</th><th>Solution</th></tr>
</thead>
<tbody>
<tr><td>Workflow not triggered</td><td>Feature not enabled or workflow disabled</td><td>Check <code>--features=workflows</code> and <code>enabled: true</code></td></tr>
<tr><td>Condition does not match</td><td>Attribute name or value is wrong</td><td>Verify user attributes via Admin Console</td></tr>
<tr><td>Step failed</td><td>Role/Group does not exist</td><td>Create role/group before referencing in workflow</td></tr>
<tr><td>API call failed</td><td>External service not available</td><td>Check network connectivity, add retry logic</td></tr>
<tr><td>Email not sent</td><td>SMTP not configured</td><td>Configure Realm Settings → Email</td></tr>
</tbody>
</table>

<h2 id="13-best-practices"><strong>13. Best Practices</strong></h2>

<ul>
<li><strong>Start simple</strong> — implement basic JML first, then add complexity</li>
<li><strong>Test workflows thoroughly before production</strong> — this is a preview feature, there may be bugs</li>
<li><strong>Idempotent steps</strong> — ensures steps can be played again without causing side effects</li>
<li><strong>Error handling</strong> — plan for external API failure or email bounce</li>
<li><strong>Audit trail</strong> — always set attributes to record workflow execution (timestamps, status)</li>
<li><strong>Separation of concerns</strong> — separate JML into separate workflows (joiner, mover, leaver)</li>
<li><strong>Version control</strong> — export workflow definitions to git, use CI/CD to deploy</li>
<li><strong>Monitor execution logs</strong> — set up alerting cho failed workflow executions</li>
<li><strong>Gradual rollout</strong> — enable workflows for small groups of users first, then expand</li>
</ul>
