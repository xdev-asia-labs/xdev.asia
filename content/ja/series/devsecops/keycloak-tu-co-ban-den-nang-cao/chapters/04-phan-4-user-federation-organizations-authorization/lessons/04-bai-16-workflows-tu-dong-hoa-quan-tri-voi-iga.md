---
id: 019d8b30-b116-7001-c001-e0c5f8100116
title: 'レッスン 16: ワークフロー - IGA による管理の自動化'
slug: bai-16-workflows-tu-dong-hoa-quan-tri-voi-iga
description: Identity Governance and Administration (IGA) 用の Keycloak ワークフロー (プレビュー) を導入します。ワークフロー、ワークフロー定義、ワークフロー表現言語、ワークフローの管理、条件とステップの定義、Joiner-Mover-Leaver (JML) プロセス、自動オンボーディング/オフボーディング、アクセス レビュー、企業の一般的な使用例を理解します。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 16
section_title: 'パート 4: ユーザー フェデレーション、組織、および認可'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — レッスン 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 16: ワークフロー - 管理の自動化</tspan>
      <tspan x="60" dy="42">IGAと</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: ユーザー フェデレーション、組織、および認可</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-iga-va-workflows-tong-quan"><strong>1. IGA とワークフロー — 概要</strong></h2>

<p><strong>アイデンティティのガバナンスと管理 (IGA)</strong>これは、ユーザーが組織に参加するとき (参加者)、役割を変更するとき (移動者)、退職するとき (退職者) までの ID ライフサイクル管理の領域です。 Keycloakワークフローは機能です<strong>プレビュー。プレビュー</strong>これらの IGA プロセスの自動化が可能になります。</p>

<h3 id="11-tai-sao-can-workflows"><strong>1.1 なぜワークフローが必要なのでしょうか?</strong></h3>

<table>
<thead>
<tr><th>問題</th><th>ワークフローがありません</th><th>ワークフローがあります</th></tr>
</thead>
<tbody>
<tr><td><strong>新入社員のオンボーディング</strong></td><td>管理者は手動でアカウントを作成し、ロールを割り当て、グループに追加する必要があります</td><td>自動: アカウントを作成 → 部門に応じて役割を割り当て → グループを追加 → ウェルカムメールを送信</td></tr>
<tr><td><strong>部署異動</strong></td><td>管理者は古い役割を手動で削除し、新しい役割を割り当てる必要があります</td><td>部門の変更を自動的に検出 → それに応じて役割/グループを更新</td></tr>
<tr><td><strong>オフボーディング</strong></td><td>アクセス権の取り消し忘れ → セキュリティリスク</td><td>アカウントを自動的に無効にする → セッションを取り消す → グループから削除</td></tr>
<tr><td><strong>アクセスレビュー</strong></td><td>定期的に見直しができない</td><td>未使用の権限を自動的にチェックして報告する</td></tr>
</tbody>
</table>

<h3 id="12-keycloak-workflows-la-gi"><strong>1.2 Keycloakワークフローとは何ですか?</strong></h3>

<p>Keycloakワークフローはシステムです<strong>イベント駆動型、条件ベース</strong>以下を含む自動プロセスの定義が可能になります。</p>

<ul>
<li><strong>トリガー</strong>: ワークフロートリガーイベント (ユーザー作成、属性変更、ログインイベント...)</li>
<li><strong>条件</strong>: ワークフローを実行するには条件を満たす必要があります</li>
<li><strong>ステップ</strong>: 条件に一致した場合に実行するアクション (ロールの割り当て、グループへの追加、通知の送信など)</li>
</ul>

<h2 id="2-bat-workflows-preview"><strong>2. ワークフローをオンにする (プレビュー機能)</strong></h2>

<p>ワークフローは機能です<strong>プレビュー。プレビュー</strong>、明示的に有効にする必要があります。</p>

<pre><code class="language-bash"># Bật qua command line
bin/kc.sh start --features=workflows

# Hoặc trong keycloak.conf
features=workflows

# Bật cùng các features khác
bin/kc.sh start --features=workflows,organizations,scripts

# Docker
docker run -e KC_FEATURES=workflows \
  quay.io/keycloak/keycloak:latest start-dev</code></pre>

<p><strong>注記：</strong>プレビュー機能はバージョン間で API が変更される場合があります。徹底的なテストを行わずに本番環境で使用しないでください。</p>

<h2 id="3-workflow-concepts"><strong>3. ワークフローの概念</strong></h2>

<h3 id="31-workflow-components"><strong>3.1 ワークフローコンポーネント</strong></h3>

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

<h3 id="32-trigger-types"><strong>3.2 トリガーの種類</strong></h3>

<table>
<thead>
<tr><th>トリガー</th><th>説明する</th><th>ユースケース</th></tr>
</thead>
<tbody>
<tr><td><strong>USER_CREATED</strong></td><td>新しいユーザーが作成されました</td><td>オンボーディング: 役割/グループの自動割り当て</td></tr>
<tr><td><strong>USER_UPDATED</strong></td><td>ユーザー属性の変更</td><td>ムーバー: 部門の変更を検出</td></tr>
<tr><td><strong>USER_DELETED</strong></td><td>ユーザーが削除されました</td><td>クリーンアップ: 外部アクセスを取り消す</td></tr>
<tr><td><strong>USER_DISABLED</strong></td><td>ユーザーが無効になっています</td><td>オフボード: セッションを取り消す</td></tr>
<tr><td><strong>GROUP_MEMBERSHIP_CHANGED</strong></td><td>ユーザーがグループに追加/グループから削除されました</td><td>関連する役割を自動割り当て</td></tr>
<tr><td><strong>ROLE_ASSIGNED</strong></td><td>ユーザーには役割が割り当てられています</td><td>カスケード権限</td></tr>
<tr><td><strong>ROLE_REMOVED</strong></td><td>ユーザーの役割が削除されました</td><td>依存アクセスを取り消す</td></tr>
</tbody>
</table>

<h2 id="4-workflow-definitions"><strong>4. ワークフローの定義</strong></h2>

<h3 id="41-cau-truc-workflow-definition"><strong>4.1 ワークフロー定義の構造</strong></h3>

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

<h3 id="42-yaml-format"><strong>4.2 YAML形式</strong></h3>

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

<h2 id="5-workflow-expression-language"><strong>5. ワークフロー表現言語</strong></h2>

<p>ワークフローは式言語を使用して、<strong>動的条件の定義</strong>そして<strong>ユーザー属性を参照する</strong>.</p>

<h3 id="51-variables"><strong>5.1 変数</strong></h3>

<table>
<thead>
<tr><th>変数</th><th>説明する</th><th>例えば</th></tr>
</thead>
<tbody>
<tr><td><code>ユーザー.ユーザー名</code></td><td>ユーザーのユーザー名</td><td><code>ジョン・ドゥ</code></td></tr>
<tr><td><code>ユーザー.メールアドレス</code></td><td>電子メールアドレス</td><td><code>john@example.com</code></td></tr>
<tr><td><code>ユーザー名.名</code></td><td>ファーストネーム</td><td><code>ジョン</code></td></tr>
<tr><td><code>ユーザーの姓</code></td><td>苗字</td><td><code>ドウ</code></td></tr>
<tr><td><code>user.attributes.{名前}</code></td><td>カスタム属性</td><td><code>ユーザー属性部門</code></td></tr>
<tr><td><code>ユーザー.グループ</code></td><td>グループパスをリストする</td><td><code>["/エンジニアリング"、"/VPN-ユーザー"]</code></td></tr>
<tr><td><code>ユーザーの役割</code></td><td>割り当てられた役割をリストする</td><td><code>[「従業員」、「開発者」]</code></td></tr>
<tr><td><code>イベントの種類</code></td><td>イベントの種類</td><td><code>USER_CREATED</code></td></tr>
<tr><td><code>イベント時間</code></td><td>イベントのタイムスタンプ</td><td><code>2026-03-30T10:00:00Z</code></td></tr>
</tbody>
</table>

<h3 id="52-operators"><strong>5.2 演算子</strong></h3>

<table>
<thead>
<tr><th>オペレーター</th><th>説明する</th><th>例えば</th></tr>
</thead>
<tbody>
<tr><td><code>等しい</code></td><td>等しいものを比較する</td><td><code>user.attributes.Department が「エンジニアリング」に等しい</code></td></tr>
<tr><td><code>等しくない</code></td><td>等しくない</td><td><code>user.attributes.status not_equals "inactive"</code></td></tr>
<tr><td><code>が含まれています。含まれています</code></td><td>値が含まれています</td><td><code>user.email には「@acme.com」が含まれています</code></td></tr>
<tr><td><code>で始まる</code></td><td>から始める</td><td><code>user.ユーザー名は「svc-」で始まります</code></td></tr>
<tr><td><code>で終わる</code></td><td>で終わる</td><td><code>user.email の末尾は「@acme.com」</code></td></tr>
<tr><td><code>印刷する</code></td><td>リストに属します</td><td><code>["HCM"、"HN"、"DN"] の user.attributes.location</code></td></tr>
<tr><td><code>存在します</code></td><td>属性が存在します</td><td><code>user.attributes.employeeId が存在します</code></td></tr>
<tr><td><code>存在しない</code></td><td>属性が存在しません</td><td><code>user.attributes.termination_date not_exists</code></td></tr>
</tbody>
</table>

<h3 id="53-functions"><strong>5.3 機能</strong></h3>

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

<h2 id="6-managing-workflows"><strong>6. ワークフローの管理</strong></h2>

<h3 id="61-crud-operations"><strong>6.1 CRUD操作</strong></h3>

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

<h2 id="7-defining-conditions"><strong>7. 条件の定義</strong></h2>

<h3 id="71-user-attribute-conditions"><strong>7.1 ユーザー属性の条件</strong></h3>

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

<h3 id="72-group-membership-conditions"><strong>7.2 グループのメンバーシップ条件</strong></h3>

<pre><code class="language-json">{
  "conditions": [
    {
      "type": "group_membership",
      "group": "/Engineering",
      "operator": "is_member"
    }
  ]
}</code></pre>

<h3 id="73-time-based-conditions"><strong>7.3 時間ベースの条件</strong></h3>

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

<h3 id="74-event-based-conditions"><strong>7.4 イベントベースの条件</strong></h3>

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

<h2 id="8-defining-steps"><strong>8. ステップの定義</strong></h2>

<h3 id="81-assign-role"><strong>8.1 役割の割り当て</strong></h3>

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

<h3 id="82-remove-role"><strong>8.2 役割の削除</strong></h3>

<pre><code class="language-json">{
  "type": "remove_role",
  "role": "contractor",
  "scope": "realm"
}</code></pre>

<h3 id="83-add-to-group"><strong>8.3 グループに追加</strong></h3>

<pre><code class="language-json">{
  "type": "add_to_group",
  "group": "/Company/Engineering/Backend"
}</code></pre>

<h3 id="84-remove-from-group"><strong>8.4 グループから削除</strong></h3>

<pre><code class="language-json">{
  "type": "remove_from_group",
  "group": "/Company/Marketing"
}</code></pre>

<h3 id="85-send-notification"><strong>8.5 通知の送信</strong></h3>

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

<h3 id="86-invoke-external-api"><strong>8.6 外部 API の呼び出し</strong></h3>

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

<h3 id="87-set-user-attribute"><strong>8.7 ユーザー属性の設定</strong></h3>

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

<h2 id="9-joiner-mover-leaver-jml"><strong>9. ジョイナー、ムーバー、リーバー (JML) プロセス</strong></h2>

<h3 id="91-joiner-onboarding"><strong>9.1 ジョイナー — 自動オンボーディング</strong></h3>

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

<h3 id="92-mover-department-transfer"><strong>9.2 異動者 — 部門異動</strong></h3>

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

<h3 id="93-leaver-offboarding"><strong>9.3 退職者 — 自動オフボーディング</strong></h3>

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

<h2 id="10-access-review-workflows"><strong>10. アクセスレビューワークフロー</strong></h2>

<p>レビューへのアクセスが許可されています<strong>定期的にチェックする</strong>ユーザーが現在の権限をまだ必要としているかどうかを確認します。</p>

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

<h2 id="11-common-enterprise-use-cases"><strong>11. 一般的な企業のユースケース</strong></h2>

<h3 id="111-contractor-lifecycle-management"><strong>11.1 請負業者のライフサイクル管理</strong></h3>

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

<h3 id="112-auto-provisioning-from-ldap"><strong>11.2 LDAP Sync からの自動プロビジョニング</strong></h3>

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

<h3 id="113-compliance-password-rotation-reminder"><strong>11.3 コンプライアンス — パスワードローテーションリマインダー</strong></h3>

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

<h2 id="12-monitoring-va-troubleshooting"><strong>12. 監視とトラブルシューティング</strong></h2>

<h3 id="121-workflow-execution-logs"><strong>12.1 ワークフロー実行ログ</strong></h3>

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

<h3 id="122-common-issues"><strong>12.2 一般的な問題</strong></h3>

<table>
<thead>
<tr><th>問題</th><th>理由</th><th>解決</th></tr>
</thead>
<tbody>
<tr><td>ワークフローがトリガーされない</td><td>機能が有効になっていない、またはワークフローが無効になっています</td><td>チェック<code>--features=ワークフロー</code>そして<code>有効: true</code></td></tr>
<tr><td>条件が一致しません</td><td>属性名または値が間違っています</td><td>管理コンソール経由でユーザー属性を確認する</td></tr>
<tr><td>ステップが失敗しました</td><td>ロール/グループが存在しません</td><td>ワークフローで参照する前にロール/グループを作成してください</td></tr>
<tr><td>API呼び出しに失敗しました</td><td>外部サービスは利用できません</td><td>ネットワーク接続を確認し、再試行ロジックを追加します</td></tr>
<tr><td>メールが送信されませんでした</td><td>SMTPはまだ設定されていません</td><td>レルム設定を構成 → 電子メール</td></tr>
</tbody>
</table>

<h2 id="13-best-practices"><strong>13. ベストプラクティス</strong></h2>

<ul>
<li><strong>シンプルに始める</strong>— 最初に基本的な JML を実装し、次に複雑さを追加します</li>
<li><strong>本番前にワークフローを徹底的にテストする</strong>— これはプレビュー機能であるため、バグがある可能性があります</li>
<li><strong>冪等ステップ</strong>— 副作用を引き起こすことなくステップを再実行できるようにします</li>
<li><strong>エラー処理</strong>— 外部 API の障害または電子メールの返送に備えて計画する</li>
<li><strong>監査証跡</strong>— ワークフローの実行を記録するための属性 (タイムスタンプ、ステータス) を常に設定します。</li>
<li><strong>関心事の分離</strong>— JML を個別のワークフロー (結合者、移動者、離脱者) に分離します。</li>
<li><strong>バージョン管理</strong>— ワークフロー定義を git にエクスポートし、CI/CD を使用してデプロイします</li>
<li><strong>実行ログを監視する</strong>— 失敗したワークフロー実行に対するアラートを設定する</li>
<li><strong>段階的な展開</strong>— 最初に小規模なユーザー グループのワークフローを有効にしてから、拡張します</li>
</ul>
