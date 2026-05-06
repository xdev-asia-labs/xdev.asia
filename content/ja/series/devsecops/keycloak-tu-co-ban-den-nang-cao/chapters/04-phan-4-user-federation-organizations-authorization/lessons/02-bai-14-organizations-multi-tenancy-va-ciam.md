---
id: 019d8b30-b114-7001-c001-e0c5f8100114
title: 'レッスン 14: 組織 - マルチテナンシーと CIAM'
slug: bai-14-organizations-multi-tenancy-va-ciam
description: 組織機能の有効化と構成、組織、組織ドメイン、組織属性の作成/管理、メンバーの管理 (管理対象、非管理対象)、招待管理 (送信、追跡、再送信、削除)、ID プロバイダーと組織の関連付け、メンバーの認証 (ID 優先ログイン)、組織クレームのトークンへのマッピング、および実際の B2B/B2B2C ユースケース。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 14
section_title: 'パート 4: ユーザー フェデレーション、組織、および認可'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — レッスン 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 14: 組織 - マルチテナントと</tspan>
      <tspan x="60" dy="42">CIAM</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: ユーザー フェデレーション、組織、および認可</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-organizations-tong-quan"><strong>1. 組織 - 概要</strong></h2>

<p>Keycloak Organizations は有効化機能です<strong>マルチテナント管理</strong>単一の領域内で。組織 (テナント) ごとに複数のレルムを作成する代わりに、<strong>組織</strong>レルム内でユーザーをグループ化し、ドメインを管理し、組織ごとにアクセスを制御します。</p>

<p>これはプラットフォームにとって重要な機能です<strong>B2B</strong>(企業間) および<strong>B2B2C</strong>(企業対企業対消費者)、としても知られています。<strong>CIAM</strong>(顧客のアイデンティティとアクセス管理)。</p>

<h3 id="11-use-cases"><strong>1.1 使用例</strong></h3>

<table>
<thead>
<tr><th>シナリオ</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td><strong>SaaS マルチテナント</strong></td><td>各顧客企業は組織であり、ユーザーはその組織に所属します。</td></tr>
<tr><td><strong>B2B ポータル</strong></td><td>パートナー/ベンダーは独自の組織を持ち、パートナーの従業員は組織を通じてポータルにアクセスします。</td></tr>
<tr><td><strong>子会社を持つ企業</strong></td><td>グループには多数の子会社があり、各子会社は組織です</td></tr>
<tr><td><strong>教育プラットフォーム</strong></td><td>各学校/教育機関は組織であり、教師/生徒はメンバーです</td></tr>
</tbody>
</table>

<h2 id="2-bat-organizations-feature"><strong>2.組織機能をオンにする</strong></h2>

<p>組織はKeycloak 25以降で利用できる機能です。有効にするには:</p>

<h3 id="21-bat-tren-realm"><strong>2.1 レルムで有効にする</strong></h3>

<pre><code class="language-bash"># Qua Admin Console:
# Realm Settings → General → Organizations → Enabled

# Qua kcadm.sh:
kcadm.sh update realms/my-realm \
  -s organizationsEnabled=true</code></pre>

<h3 id="22-kiem-tra-trang-thai"><strong>2.2 ステータスの確認</strong></h3>

<pre><code class="language-bash"># Qua REST API
curl -s "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq '.organizationsEnabled'
# Output: true</code></pre>

<h2 id="3-tao-va-quan-ly-organizations"><strong>3. 組織の作成と管理</strong></h2>

<h3 id="31-tao-organization-qua-admin-console"><strong>3.1 管理コンソールから組織を作成する</strong></h3>

<p>入力<strong>管理コンソール → 組織 → 組織の作成</strong>:</p>

<table>
<thead>
<tr><th>分野</th><th>説明する</th><th>例えば</th></tr>
</thead>
<tbody>
<tr><td><strong>名前</strong></td><td>組織名 (必須)</td><td><code>アクメ株式会社</code></td></tr>
<tr><td><strong>エイリアス</strong></td><td>名前から生成された一意のエイリアス</td><td><code>アクメコーポレーション</code></td></tr>
<tr><td><strong>説明</strong></td><td>組織の説明</td><td><code>Acme Corp - 企業顧客</code></td></tr>
<tr><td><strong>リダイレクト URL</strong></td><td>メンバーログイン後の URL リダイレクト</td><td><code>https://app.acme.com</code></td></tr>
</tbody>
</table>

<h3 id="32-tao-organization-qua-rest-api"><strong>3.2 REST API経由で組織を作成する</strong></h3>

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

<h2 id="4-organization-domains"><strong>4. 組織ドメイン</strong></h2>

<p>許可される組織ドメイン<strong>ユーザーを組織に自動的に関連付ける</strong>電子メールドメインに基づいています。ユーザーが登録されたドメインに属する電子メールを使用して登録またはログインすると、Keycloakはユーザーを対応する組織に自動的にアタッチできます。</p>

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

<p><strong>ドメインの状態:</strong></p>

<table>
<thead>
<tr><th>州</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td><strong>確認済み</strong></td><td>検証済みドメイン — この電子メール ドメインを持つユーザーは、自動的に組織に参加する資格が与えられます。</td></tr>
<tr><td><strong>未検証</strong></td><td>未検証のドメイン - 照合にのみ使用され、管理者の承認が必要です</td></tr>
</tbody>
</table>

<p><strong>重要な注意事項:</strong></p>
<ul>
<li>ドメインはただ属しているだけです<strong>単一の組織</strong></li>
<li>ドメイン検証は、組織がそのドメインを実際に所有していることを確認するのに役立ちます</li>
<li>サブドメインの一致:<code>アクメ.com</code>一致します<code>user@acme.com</code>しかし<strong>そうではない</strong>マッチ。マッチ<code>user@sub.acme.com</code></li>
</ul>

<h2 id="5-organization-attributes"><strong>5. 組織の属性</strong></h2>

<p>カスタム属性を使用すると、組織の追加のメタデータを保存できます。</p>

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

<p>属性は以下で使用できます。</p>
<ul>
<li><strong>トークンの要求</strong>— 組織メタデータをアクセス/ID トークンに追加します</li>
<li><strong>認可ポリシー</strong>— 属性に基づく認可</li>
<li><strong>カスタムロジック</strong>— アプリケーションでビジネス ロジックを処理する</li>
</ul>

<h2 id="6-quan-ly-members"><strong>6. メンバーの管理</strong></h2>

<h3 id="61-managed-vs-unmanaged-members"><strong>6.1 管理対象メンバーと非管理対象メンバー</strong></h3>

<table>
<thead>
<tr><th>タイプ</th><th>説明する</th><th>例えば</th></tr>
</thead>
<tbody>
<tr><td><strong>管理された</strong></td><td>ユーザーは組織によって完全に管理されます - ライフサイクルは組織に関連付けられています</td><td>会社員: 組織を離れると、アカウントは無効になります</td></tr>
<tr><td><strong>管理されていない</strong></td><td>無料ユーザー、組織に「参加」するだけ - アカウントは独立して存在します</td><td>フリーランサー、請負業者: 多くの組織に所属できる</td></tr>
</tbody>
</table>

<h3 id="62-them-existing-users-vao-organization"><strong>6.2 既存のユーザーを組織に追加する</strong></h3>

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

<h3 id="63-member-roles"><strong>6.3 メンバーの役割</strong></h3>

<p>組織のメンバーには、組織のコンテキストで役割を割り当てることができます。</p>

<table>
<thead>
<tr><th>役割</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td><strong>メンバー。メンバー</strong></td><td>デフォルトの役割 — 標準アクセス</td></tr>
<tr><td><strong>管理者。管理者</strong></td><td>組織管理者 — メンバーと設定を管理できます</td></tr>
</tbody>
</table>

<h2 id="7-invitation-management"><strong>7. 招待状の管理</strong></h2>

<p>Keycloak組織によるサポート<strong>ユーザーを招待する</strong>招待メールを通じて組織に参加してください。</p>

<h3 id="71-gui-invitation"><strong>7.1 招待状の送信</strong></h3>

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

<h3 id="72-invitation-states"><strong>7.2 招待状態</strong></h3>

<table>
<thead>
<tr><th>州</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td><strong>保留中</strong></td><td>招待状を送信しましたが、まだ受け入れられていません</td></tr>
<tr><td><strong>期限切れ</strong></td><td>招待の有効期限 (構成可能な有効期限)</td></tr>
</tbody>
</table>

<h3 id="73-quan-ly-invitations"><strong>7.3 招待状の管理</strong></h3>

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

<p><strong>電子メールのテンプレート:</strong>Keycloakは、カスタマイズ可能なテンプレートを使用してメールを送信します。<strong>レルム設定 → 電子メール → テンプレート</strong>。デフォルトのテンプレートには、ユーザーが招待を受け入れてアカウントを作成するためのリンクが含まれています (アカウントを持っていない場合)。</p>

<h2 id="8-lien-ket-identity-providers"><strong>8. ID プロバイダーを組織に関連付ける</strong></h2>

<p>各組織が持つことができるのは、<strong>プライベートアイデンティティプロバイダー</strong>、メンバーは組織の IdP 経由でログインできるようになります (たとえば、Acme Corp は Google Workspace を使用し、Beta Inc は Okta を使用します)。</p>

<h3 id="81-lien-ket-idp-voi-organization"><strong>8.1 IdP を組織に関連付ける</strong></h3>

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

<h3 id="82-cach-hoat-dong"><strong>8.2 仕組み</strong></h3>

<ol>
<li>ユーザーがログイン ページに電子メールを入力します (ID 優先ログイン)</li>
<li>Keycloakはメールドメインを特定 → 対応する組織を見つける</li>
<li>組織にリンクされた IdP がある場合 → ユーザーをその組織の IdP にリダイレクトします</li>
<li>ユーザーは組織の IdP で認証します</li>
<li>Keycloakは応答を受信し、ユーザーを組織に自動的にアタッチします。</li>
</ol>

<h2 id="9-identity-first-login"><strong>9. ID 優先ログイン</strong></h2>

<p>ID 優先ログインは、ユーザーが<strong>最初にメールアドレスを入力してください</strong>, 次に、Keycloak は組織のメンバーシップに基づいて適切な認証方法を決定します。</p>

<h3 id="91-cau-hinh-identity-first-login"><strong>9.1 IDファーストログインの構成</strong></h3>

<p>組織が有効になっている場合、Keycloakは自動的にフローを作成します<strong>"組織"</strong>ブラウザ認証用。このフローは次のように機能します。</p>

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

<h3 id="92-cau-hinh-existing-flow"><strong>9.2 組織の既存のフローを構成する</strong></h3>

<pre><code class="language-bash"># Bind Organization flow cho Browser
kcadm.sh update realms/my-realm \
  -s 'browserFlow=organization browser'</code></pre>

<h2 id="10-mapping-organization-claims"><strong>10. 組織のクレームをトークンにマッピングする</strong></h2>

<p>Keycloak は追加する可能性があります<strong>組織情報をアクセストークンとIDトークンに変換</strong>を使用すると、アプリケーションはユーザーがどの組織に属しているかを知ることができます。</p>

<h3 id="101-organization-membership-mapper"><strong>10.1 組織メンバーシップ マッパー</strong></h3>

<p>Keycloakが自動的に追加されました<code>組織</code>組織機能が有効になっている場合に要求します。請求の形式:</p>

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

<h3 id="102-cau-hinh-mapper-tuy-chinh"><strong>10.2 カスタムマッパー構成</strong></h3>

<p>追加できます<strong>組織メンバーシップ プロトコル マッパー</strong>クライアント スコープに移動してカスタマイズします。</p>

<pre><code class="language-bash"># Thêm Organization Membership Mapper vào client scope
kcadm.sh create clients/${CLIENT_ID}/protocol-mappers/models -r my-realm \
  -s name="organization-membership" \
  -s protocol=openid-connect \
  -s protocolMapper=oidc-organization-membership-mapper \
  -s 'config."claim.name"=organization' \
  -s 'config."id.token.claim"=true' \
  -s 'config."access.token.claim"=true' \
  -s 'config."userinfo.token.claim"=true'</code></pre>

<h3 id="103-su-dung-claims-trong-application"><strong>10.3 アプリケーションでのクレームの使用</strong></h3>

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

<h2 id="11-b2b-va-b2b2c-use-cases"><strong>11. B2B および B2B2C の使用例</strong></h2>

<h3 id="111-b2b-partner-portal"><strong>11.1 B2B パートナーポータル</strong></h3>

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

<h3 id="112-b2b2c-saas-platform"><strong>11.2 B2B2C SaaS プラットフォーム</strong></h3>

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

<h2 id="12-best-practices"><strong>12. ベストプラクティス</strong></h2>

<ul>
<li><strong>マルチレルムの代わりに組織を使用する</strong>— 管理オーバーヘッドを削減し、構成を共有します</li>
<li><strong>ドメインの検証</strong>— ユーザーを自動割り当てる前に、組織が実際にドメインを所有していることを確認してください。</li>
<li><strong>管理対象/非管理対象を区別する</strong>— ライフサイクル管理が必要な従業員向けに管理され、外部ユーザー向けには管理されません</li>
<li><strong>ID 優先ログインを使用する</strong>— 異なる IdP を持つ多くの組織が存在する場合、UX は向上します</li>
<li><strong>安全な招待リンク</strong>— 適切な有効期限を設定し、保留中の招待を監視します</li>
<li><strong>認可のための組織属性</strong>— 属性を使用してプラン、階層、リージョンごとに権限を割り当てる</li>
<li><strong>メンバー数を監視する</strong>— 組織が割り当てを超過した場合にアラートを設定する</li>
</ul>
