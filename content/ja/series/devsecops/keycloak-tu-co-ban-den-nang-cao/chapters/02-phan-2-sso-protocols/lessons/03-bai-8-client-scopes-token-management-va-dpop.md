---
id: 019d8b30-b108-7001-c001-e0c5f8100108
title: 'レッスン 8: クライアント スコープ、トークン管理、および DPoP'
slug: bai-8-client-scopes-token-management-va-dpop
description: クライアント スコープ (デフォルトおよびオプション)、スコープ パラメーター、同意設定、レルムのデフォルト スコープ、スコープの評価、アクセス/ID/リフレッシュ トークンのライフサイクルの管理、セッションとトークンのタイムアウト、オフライン アクセス、トークン取り消し、軽量アクセス トークン、DPoP (RFC 9449)、およびトークン セキュリティのためのクライアント ポリシー。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 2: SSO プロトコル - OpenID Connect と SAML'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2449" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2449)"/>

  <!-- Decorations -->
  <g>
    <circle cx="817" cy="61" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1034" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="751" cy="255" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="968" cy="92" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="685" cy="189" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="191" x2="1100" y2="271" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="221" x2="1050" y2="291" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1013.5166604983954,178 1013.5166604983954,204 991,217 968.4833395016046,204 968.4833395016046,178 991,165" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: クライアント スコープ、トークン管理、</tspan>
      <tspan x="60" dy="42">DPoP</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: SSO プロトコル - OpenID Connect と SAML</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-client-scopes"><strong>1. クライアントのスコープ</strong></h2>

<p>クライアント スコープは管理メカニズムです<strong>プロトコル マッパーと役割グループ</strong>複数のクライアント間で共有できます。個々のクライアントにマッパーを追加する代わりに、クライアント スコープを作成し、それを必要なクライアントに割り当てます。</p>

<h3 id="default-vs-optional"><strong>1.1 デフォルトのスコープとオプションのスコープ</strong></h3>
<table>
<thead>
<tr><th>タイプ</th><th>説明する</th><th>クレームはいつトークンに追加されますか?</th></tr>
</thead>
<tbody>
<tr><td><strong>デフォルトのクライアントスコープ</strong></td><td>すべてのトークンリクエストに自動的に適用されます</td><td>常に — 明示的なリクエストは必要ありません</td></tr>
<tr><td><strong>オプションのクライアントスコープ</strong></td><td>クライアントリクエストが明示的である場合にのみ適用されます<code>範囲。範囲</code>パラメータ。パラメータ</td><td>クライアントが送信した場合のみ<code>スコープ=スコープ名</code></td></tr>
</tbody>
</table>

<p><strong>例えば：</strong></p>
<pre><code># Default scopes — luôn có trong token
# profile, email, roles, web-origins, acr → tự động áp dụng

# Optional scopes — chỉ khi request
# address, phone, offline_access, microprofile-jwt

# Authorization request với optional scope
GET /auth?response_type=code&
  client_id=my-app&
  scope=openid profile email phone address offline_access&
  redirect_uri=...</code></pre>

<h3 id="built-in-scopes"><strong>1.2 組み込みクライアントスコープ</strong></h3>
<p>Keycloakは、OIDC標準に従って利用可能なクライアント・スコープを提供します。</p>

<table>
<thead>
<tr><th>範囲</th><th>タイプ</th><th>クレームの追加</th></tr>
</thead>
<tbody>
<tr><td><code>オープンID</code></td><td>デフォルト</td><td>sub、iss、aud、exp、iat、auth_time、nonce、acr、session_state</td></tr>
<tr><td><code>プロフィール。プロフィール</code></td><td>デフォルト</td><td>名前、家族名、与えられた名前、優先ユーザー名、性別、生年月日、ロケール、更新日時</td></tr>
<tr><td><code>電子メール</code></td><td>デフォルト</td><td>メール、メール認証済み</td></tr>
<tr><td><code>役割。役割</code></td><td>デフォルト</td><td>realm_access.roles、resource_access.{client}.roles</td></tr>
<tr><td><code>ウェブオリジン</code></td><td>デフォルト</td><td>許可されたオリジン (CORS)</td></tr>
<tr><td><code>acr</code></td><td>デフォルト</td><td>acr (認証コンテキスト クラス リファレンス)</td></tr>
<tr><td><code>住所</code></td><td>オプション</td><td>住所 (形式、番地、地域、地域、郵便番号、国)</td></tr>
<tr><td><code>電話。電話</code></td><td>オプション</td><td>電話番号、電話番号_認証済み</td></tr>
<tr><td><code>オフラインアクセス</code></td><td>オプション</td><td>オフライン更新トークンの取得を許可します</td></tr>
<tr><td><code>マイクロプロファイル-jwt</code></td><td>オプション</td><td>upn、グループ (MicroProfile JWT 仕様)</td></tr>
</tbody>
</table>

<h3 id="tao-client-scope"><strong>1.3 新しいクライアント スコープの作成</strong></h3>
<ol>
<li><p>入力<strong>クライアントスコープ</strong> → <strong>クライアントスコープの作成</strong></p></li>
<li><p>情報を入力してください:</p>
<ul>
<li><strong>名前</strong>: <code>私のカスタムスコープ</code></li>
<li><strong>説明</strong>: 範囲の説明</li>
<li><strong>タイプ</strong>: デフォルト / オプション / なし</li>
<li><strong>同意画面への表示</strong>：ユーザーに表示したい場合はON</li>
<li><strong>同意画面のテキスト</strong>：同意画面に表示される文字列</li>
<li><strong>トークンスコープに含める</strong>: スコープ名を表示する場合に ON<code>範囲。範囲</code>トークンの請求</li>
<li><strong>GUIの注文</strong>：同意画面の表示順</li>
</ul>
</li>
<li><p>もっと<strong>プロトコル マッパー</strong>範囲内に</p></li>
<li><p>もっと<strong>範囲</strong>(ロール スコープ マッピング) ロールを制限する必要がある場合</p></li>
</ol>

<pre><code># Ví dụ: Tạo scope "billing" chứa billing-related claims
Name: billing
Type: Optional
Display on consent screen: ON
Consent screen text: "Access your billing information"
Include in token scope: ON

# Thêm Protocol Mappers:
# 1. User Attribute Mapper: billing_plan → billing_plan claim
# 2. User Attribute Mapper: billing_email → billing_email claim
# 3. Hardcoded Claim: billing_api_version → "v2"</code></pre>

<h3 id="gan-scope-cho-client"><strong>1.4 クライアントへのクライアントスコープの割り当て</strong></h3>
<ol>
<li><p>クライアント→タブを開く<strong>クライアントスコープ</strong></p></li>
<li><p>クリック<strong>クライアントスコープの追加</strong></p></li>
<li><p>スコープを選択して割り当てる<strong>デフォルト</strong>または<strong>オプション</strong></p></li>
</ol>

<pre><code># Gán scope bằng Admin CLI
# Lấy client UUID
CLIENT_UUID=$(bin/kcadm.sh get clients -r my-company \
  -q clientId=my-app --fields id --format csv --noquotes)

# Lấy client scope UUID
SCOPE_UUID=$(bin/kcadm.sh get client-scopes -r my-company \
  -q name=billing --fields id --format csv --noquotes)

# Gán default scope
bin/kcadm.sh update clients/$CLIENT_UUID/default-client-scopes/$SCOPE_UUID \
  -r my-company

# Gán optional scope
bin/kcadm.sh update clients/$CLIENT_UUID/optional-client-scopes/$SCOPE_UUID \
  -r my-company</code></pre>

<h3 id="realm-default-scopes"><strong>1.5 レルムのデフォルトクライアントスコープ</strong></h3>
<p>レルムのデフォルトクライアントスコープは自動的に割り当てられます<strong>すべての新しいクライアント</strong>作成時:</p>
<ol>
<li><p>入力<strong>クライアントスコープ</strong>→一覧を見る</p></li>
<li><p>スコープは行います<strong>割り当てられたタイプ</strong>= レルム レベルのデフォルトまたはオプションは、新しいクライアントに自動的に割り当てられます</p></li>
</ol>

<p>管理者 CLI による設定:</p>
<pre><code># Thêm scope vào realm default scopes
bin/kcadm.sh update realms/my-company/default-default-client-scopes/$SCOPE_UUID

# Thêm scope vào realm optional scopes
bin/kcadm.sh update realms/my-company/default-optional-client-scopes/$SCOPE_UUID</code></pre>

<h3 id="consent-settings"><strong>1.6 同意設定</strong></h3>
<p>クライアントが持っているとき<strong>同意が必要です</strong>= ON の場合、クライアントがトークンを受け取る前に、ユーザーは各スコープに同意する必要があります。</p>

<ul>
<li><p>各クライアント スコープは構成可能です<strong>同意画面への表示</strong>そして<strong>同意画面のテキスト</strong></p></li>
<li><p>ユーザーは以内に同意を取り消すことができます<strong>アカウントコンソール</strong>→ アプリケーション</p></li>
<li><p>同意エントリはユーザーごと、クライアントごとに保存されます</p></li>
</ul>

<pre><code># Consent screen hiển thị:
# ┌────────────────────────────────────────────┐
# │  My Application muốn:                      │
# │                                             │
# │  ☑ Access your profile information          │   ← scope: profile
# │  ☑ Access your email address                │   ← scope: email
# │  ☐ Access your billing information          │   ← scope: billing (optional)
# │  ☐ Access your phone number                 │   ← scope: phone (optional)
# │                                             │
# │  [Accept]  [Cancel]                         │
# └────────────────────────────────────────────┘</code></pre>

<h3 id="evaluate-scopes"><strong>1.7 スコープの評価（スコープ評価）</strong></h3>
<p>管理コンソールには、スコープに基づいてトークンの内容をプレビューするツールが用意されています。</p>
<ol>
<li><p>クライアント→タブを開く<strong>クライアントスコープ</strong> → <strong>評価する</strong></p></li>
<li><p>入力：<strong>ユーザー</strong>(ユーザーテストを選択)、<strong>スコープパラメータ</strong>(オプションのスコープ)</p></li>
<li><p>クリック<strong>評価する</strong>見る：</p>
<ul>
<li><strong>効果的なプロトコル マッパー</strong>: マッパーが適用されます</li>
<li><strong>効果的な役割範囲のマッピング</strong>: トークンに含まれる役割</li>
<li><strong>生成されたアクセストークン</strong>: アクセストークンのJSONをプレビュー</li>
<li><strong>生成されたIDトークン</strong>: IDトークンのJSONをプレビュー</li>
<li><strong>生成されるユーザー情報</strong>: userinfo 応答の JSON をプレビュー</li>
</ul>
</li>
</ol>

<p>これは非常に便利なツールです<strong>デバッグトークンの内容</strong>実際にトークンを要求せずに。</p>

<h2 id="2-token-management"><strong>2. トークン管理</strong></h2>

<h3 id="access-token"><strong>2.1 アクセストークン</strong></h3>
<p>アクセス トークンは、認証情報 (識別情報) を含む JWT です。<strong>どのユーザー?</strong>アクセス権がある<strong>どのリソースですか?</strong>.</p>

<p><strong>アクセストークンの構造:</strong></p>
<pre><code>{
  "exp": 1711800300,         // Expiration time
  "iat": 1711800000,         // Issued at
  "auth_time": 1711799900,   // Authentication time
  "jti": "token-id",         // JWT ID (unique)
  "iss": "http://localhost:8080/realms/my-company",  // Issuer
  "aud": ["my-app", "account"],                      // Audience
  "sub": "user-uuid",        // Subject (user ID)
  "typ": "Bearer",           // Token type
  "azp": "my-app",           // Authorized party (client ID)
  "session_state": "session-id",
  "acr": "1",                // Authentication Context Class Reference
  "scope": "openid profile email",
  "sid": "session-id",       // Session ID
  "email_verified": true,
  "name": "John Doe",
  "preferred_username": "john",
  "given_name": "John",
  "family_name": "Doe",
  "email": "john@example.com",
  "realm_access": {
    "roles": ["default-roles-my-company", "admin"]
  },
  "resource_access": {
    "my-app": {
      "roles": ["app-admin"]
    },
    "account": {
      "roles": ["manage-account"]
    }
  }
}</code></pre>

<h3 id="id-token"><strong>2.2 トークンID</strong></h3>
<p>ID トークンには ID 情報が含まれています - ユーザーを確認します<strong>誰ですか</strong>。クライアント (証明書利用者) に対してのみ、リソース サーバーには送信されません。</p>

<pre><code>{
  "exp": 1711800300,
  "iat": 1711800000,
  "auth_time": 1711799900,
  "jti": "id-token-id",
  "iss": "http://localhost:8080/realms/my-company",
  "aud": "my-app",           // Audience = client ID
  "sub": "user-uuid",
  "typ": "ID",
  "azp": "my-app",
  "nonce": "nonce-value",    // Phải match với authorization request
  "session_state": "session-id",
  "at_hash": "access-token-hash",  // Hash of access token
  "acr": "1",
  "sid": "session-id",
  "email_verified": true,
  "name": "John Doe",
  "preferred_username": "john",
  "email": "john@example.com"
}</code></pre>

<h3 id="refresh-token"><strong>2.3 リフレッシュトークン</strong></h3>
<p>リフレッシュ トークンは、ユーザーが再度ログインすることなく新しいアクセス トークンを取得するために使用されます。リフレッシュ トークンの有効期間はアクセス トークンよりも長くなります。</p>

<pre><code># Refresh access token
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token&
refresh_token=REFRESH_TOKEN&
client_id=my-app&
client_secret=CLIENT_SECRET

# Response — access token mới
{
  "access_token": "new-access-token",
  "expires_in": 300,
  "refresh_expires_in": 1800,
  "refresh_token": "new-refresh-token",   // Refresh token mới (rotation)
  "token_type": "Bearer"
}</code></pre>

<h3 id="token-timeouts"><strong>2.4 セッションとトークンのタイムアウト</strong></h3>
<p>内部構成<strong>レルム設定</strong> → <strong>トークン</strong>タブと<strong>セッション</strong>タブ:</p>

<p><strong>寿命トークン:</strong></p>
<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>推奨値</th></tr>
</thead>
<tbody>
<tr><td>アクセストークンの有効期間</td><td>アクセストークンの有効期間</td><td>5分（本番）</td></tr>
<tr><td>クライアントのログインタイムアウト</td><td>ログインフローが完了するまでの最大時間</td><td>5分</td></tr>
<tr><td>ログインタイムアウト</td><td>ログインページの最大滞在時間</td><td>30分</td></tr>
<tr><td>ログインアクションのタイムアウト</td><td>必要なアクションを行う時間 (電子メールの確認など)</td><td>5分</td></tr>
<tr><td>ユーザー開始アクションの有効期間</td><td>ユーザーが開始したアクションの時間</td><td>5分</td></tr>
<tr><td>デフォルトの管理者開始アクションの有効期間</td><td>管理者が開始するアクションの時間 (パスワードのリセット リンク)</td><td>12時</td></tr>
</tbody>
</table>

<p><strong>セッションの存続期間:</strong></p>
<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>推奨値</th></tr>
</thead>
<tbody>
<tr><td>SSO セッションのアイドル状態</td><td>一定期間非アクティブな状態が続くとセッションが期限切れになる</td><td>30分</td></tr>
<tr><td>SSO セッション最大値</td><td>セッションは完全に期限切れになります（アクティビティに関係なく）</td><td>10時</td></tr>
<tr><td>SSO セッション アイドル状態 リメンバーミー</td><td>「Remember Me」がオンの場合のセッションアイドル状態</td><td>30日</td></tr>
<tr><td>SSO セッション Max Remember Me</td><td>「Remember Me」ON時のセッション最大値</td><td>30日</td></tr>
<tr><td>クライアントセッションアイドル状態</td><td>クライアントセッションのアイドル状態 (トークンのリフレッシュに影響)</td><td>SSO セッションアイドル状態を継承</td></tr>
<tr><td>クライアントセッション最大値</td><td>クライアント セッションの最大値 (トークンの更新に影響します)</td><td>SSO セッション最大値を継承</td></tr>
</tbody>
</table>

<p><strong>セッションとトークンの関係:</strong></p>
<pre><code># Refresh token expiration = MIN(Client Session Idle, Client Session Max)
# Nếu Client Session = 0 → dùng SSO Session values

# Ví dụ:
# SSO Session Idle = 30 phút
# SSO Session Max = 10 giờ
# Access Token Lifespan = 5 phút
# Client Session Idle = 0 (kế thừa SSO)
# Client Session Max = 0 (kế thừa SSO)

# → Access token sống 5 phút
# → Refresh token sống tối đa 30 phút (idle) hoặc 10 giờ (max)
# → Nếu user hoạt động liên tục, session kéo dài đến SSO Session Max</code></pre>

<p><strong>クライアントレベルでオーバーライドします。</strong></p>
<p>各クライアントはタブのレルムレベルのトークン設定をオーバーライドできます。<strong>高度な</strong>:</p>
<pre><code>Client → Advanced → Advanced Settings:
  Access Token Lifespan: 60        # Override: 1 phút cho high-security API
  Client Session Idle: 900         # Override: 15 phút idle
  Client Session Max: 3600         # Override: 1 giờ max</code></pre>

<h3 id="refresh-token-rotation"><strong>2.5 リフレッシュトークンの取り消し（ローテーション）</strong></h3>
<p>オンにした場合<strong>リフレッシュトークンの取り消し</strong>、リフレッシュ トークンを使用して新しいアクセス トークンを取得するたびに、古いリフレッシュ トークンが取り消され、新しいリフレッシュ トークンが発行されます。</p>

<pre><code># Realm Settings → Tokens tab
Revoke Refresh Token: ON
Refresh Token Max Reuse: 0        # Refresh token chỉ dùng 1 lần
                                    # > 0: cho phép reuse N lần (cho network retry)</code></pre>

<p><strong>リフレッシュ トークンのローテーションが必要なのはなぜですか?</strong></p>
<ul>
<li><p>リフレッシュ トークンが盗まれた場合、攻撃者はそれを 1 回しか使用できません</p></li>
<li><p>正規のクライアントが同じリフレッシュトークンを使用 → 両方とも無効化 → トークンの盗難が検出</p></li>
<li><p>これは<strong>ベストプラクティスが推奨されます</strong>OAuth 2.0 セキュリティ BCP で</p></li>
</ul>

<h2 id="3-offline-access"><strong>3. オフラインアクセス</strong></h2>

<p>オフライントークンによりクライアントは許可されます<strong>ユーザーがオンラインでないときでもリソースにアクセスできます</strong>(ブラウザセッションなし)。オフライン トークンの有効期間は非常に長く、サーバーを再起動しても存続します。</p>

<h3 id="cau-hinh-offline"><strong>3.1 オフラインアクセスの構成</strong></h3>
<ol>
<li><p>範囲を確保する<code>オフラインアクセス</code>クライアントに割り当てられます (スコープはオプション)</p></li>
<li><p>クライアントはトークンを要求します<code>スコープ=オフラインアクセス</code></p></li>
<li><p>[レルム設定] → [セッション] タブでオフライン セッション タイムアウトを構成します。</p></li>
</ol>

<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>推奨値</th></tr>
</thead>
<tbody>
<tr><td>オフラインセッションアイドル状態</td><td>オフラインセッションはアイドル後に期限切れになります</td><td>30日</td></tr>
<tr><td>オフラインセッションの最大制限</td><td>最大ライフタイム制限をオンにする</td><td>の上</td></tr>
<tr><td>オフラインセッション最大値</td><td>オフラインセッションの最大有効期間</td><td>60日</td></tr>
</tbody>
</table>

<pre><code># Request offline token
GET /auth?response_type=code&
  client_id=my-app&
  scope=openid offline_access&
  redirect_uri=...

# Token response — refresh_token là offline token
{
  "access_token": "...",
  "expires_in": 300,
  "refresh_expires_in": 0,          // 0 = offline token (không expire theo session)
  "refresh_token": "offline-token",
  "token_type": "Bearer",
  "scope": "openid offline_access"
}

# Sử dụng offline token để refresh
POST /token
grant_type=refresh_token&
refresh_token=offline-token&
client_id=my-app&
client_secret=CLIENT_SECRET</code></pre>

<h3 id="quan-ly-offline-sessions"><strong>3.2 オフラインセッションの管理</strong></h3>
<ul>
<li><p>管理コンソール →<strong>セッション</strong>→タブ<strong>オフラインセッション</strong>: すべてのオフライン セッションを表示</p></li>
<li><p>ユーザーアカウントコンソール→<strong>セッション</strong>: ユーザーはオフライン セッションを表示および取り消すことができます</p></li>
<li><p>管理 REST API: オフライン セッションをプログラムで取り消す</p></li>
</ul>

<pre><code># Revoke offline session cho user cụ thể
DELETE /admin/realms/my-company/users/{user-id}/consents/{client-id}

# Revoke tất cả sessions (bao gồm offline) cho user
POST /admin/realms/my-company/users/{user-id}/logout</code></pre>

<h2 id="4-token-revocation"><strong>4. トークンの取り消し</strong></h2>

<h3 id="revoke-token-endpoint"><strong>4.1 トークン失効エンドポイント (RFC 7009)</strong></h3>
<p>Keycloakは、クライアントがアクセス・トークンまたはリフレッシュ・トークンを取り消すことを可能にするトークン取り消しエンドポイントをサポートしています。</p>

<pre><code># Revoke refresh token
POST /realms/my-company/protocol/openid-connect/revoke
Content-Type: application/x-www-form-urlencoded

token=REFRESH_TOKEN&
token_type_hint=refresh_token&
client_id=my-app&
client_secret=CLIENT_SECRET

# Revoke access token
POST /realms/my-company/protocol/openid-connect/revoke
Content-Type: application/x-www-form-urlencoded

token=ACCESS_TOKEN&
token_type_hint=access_token&
client_id=my-app&
client_secret=CLIENT_SECRET</code></pre>

<p><strong>注記：</strong></p>
<ul>
<li><p>リフレッシュ トークンを取り消す → リフレッシュ トークンと関連する SSO セッションの両方を無効化します (構成に応じて)</p></li>
<li><p>アクセス トークンを取り消す → JWT ベースのトークンの場合、取り消しはリソース サーバーがトークン イントロスペクションを実行するか、トークン取り消しイベントを使用する場合にのみ有効です。</p></li>
</ul>

<h3 id="not-before-policy"><strong>4.2 Not-Beforeポリシー</strong></h3>
<p>特定の時間より前に発行されたすべてのトークンを取り消します。</p>

<pre><code># Set not-before timestamp — tất cả tokens issued trước thời điểm này bị invalidate
PUT /admin/realms/my-company
{
  "notBefore": 1711800000   // Unix timestamp
}

# Hoặc qua Admin Console:
# Realm Settings → Sessions → "Set to now" → "Push"
# "Push" gửi not-before policy đến tất cả clients có Admin URL</code></pre>

<h3 id="token-introspection"><strong>4.3 トークンのイントロスペクション (RFC 7662)</strong></h3>
<p>リソース サーバーは、トークン イントロスペクションを使用してトークンの有効性を検証し、クレームを取得します。</p>

<pre><code># Introspect token
POST /realms/my-company/protocol/openid-connect/token/introspect
Content-Type: application/x-www-form-urlencoded

token=ACCESS_TOKEN&
client_id=my-resource-server&
client_secret=RESOURCE_SERVER_SECRET

# Response — token hợp lệ
{
  "active": true,
  "sub": "user-uuid",
  "email": "user@example.com",
  "realm_access": { "roles": ["admin"] },
  "client_id": "my-app",
  "token_type": "Bearer",
  "exp": 1711800300,
  "iat": 1711800000,
  "scope": "openid profile email"
}

# Response — token không hợp lệ
{
  "active": false
}</code></pre>

<p><strong>トークン イントロスペクションと JWT 検証を使用する場合:</strong></p>
<table>
<thead>
<tr><th>方法</th><th>アドバンテージ</th><th>短所</th></tr>
</thead>
<tbody>
<tr><td>JWT 検証 (ローカル)</td><td>高速で、Keycloakを呼び出す必要はありません</td><td>リアルタイムなし、失効遅延なし</td></tr>
<tr><td>トークンのイントロスペクション (リモート)</td><td>リアルタイムのステータス、完全な請求</td><td>ネットワーク遅延、Keycloakへの依存性</td></tr>
</tbody>
</table>

<h2 id="5-dpop"><strong>5. DPoP — 所有証明のデモンストレーション (RFC 9449)</strong></h2>

<p>DPoP が問題を解決します<strong>無記名トークンの盗難</strong>— アクセス トークンが盗まれた場合、トークンとクライアントの間にバインドがないため、攻撃者はどこでもそれを使用できます。</p>

<h3 id="dpop-overview"><strong>5.1 DPoP はどのように機能しますか?</strong></h3>
<p>DPoP はトークンを 1 つにバインドします<strong>特定の非対称鍵ペア</strong>クライアントが所有するもの。クライアントは、トークンを使用するたびに秘密キーの所有権を証明する必要があります。</p>

<pre><code>┌──────────┐                     ┌──────────┐
│  Client  │                     │ Keycloak │
└────┬─────┘                     └────┬─────┘
     │                                │
     │  1. Generate key pair          │
     │     (public + private key)     │
     │                                │
     │  2. Token request +            │
     │     DPoP Proof (signed with    │
     │     private key)               │
     │───────────────────────────────>│
     │                                │
     │  3. DPoP-bound access token    │
     │     (contains cnf.jkt claim)   │
     │<──────────────────────────────│
     │                                │
     │                          ┌──────────┐
     │                          │ Resource │
     │                          │  Server  │
     │                          └────┬─────┘
     │  4. API request +             │
     │     DPoP-bound token +        │
     │     DPoP Proof (new, signed   │
     │     with same private key)    │
     │──────────────────────────────>│
     │                               │
     │  5. Verify: token.cnf.jkt     │
     │     matches DPoP proof's      │
     │     public key                │
     │  6. Response                  │
     │<─────────────────────────────│</code></pre>

<h3 id="dpop-proof-structure"><strong>5.2 DPoP 耐性のある JWT 構造</strong></h3>
<pre><code>// DPoP Proof Header
{
  "typ": "dpop+jwt",
  "alg": "ES256",
  "jwk": {
    "kty": "EC",
    "crv": "P-256",
    "x": "base64url-encoded-x",
    "y": "base64url-encoded-y"
  }
}

// DPoP Proof Payload
{
  "jti": "unique-proof-id",           // Unique ID, ngăn replay attacks
  "htm": "POST",                       // HTTP method
  "htu": "https://keycloak/token",     // HTTP URI (token endpoint)
  "iat": 1711800000,                   // Issued at
  "ath": "access-token-hash"           // Hash of access token (khi gọi resource server)
}</code></pre>

<h3 id="dpop-keycloak"><strong>5.3 KeycloakでのDPoPの構成</strong></h3>
<p>DPoP は次の方法で適用されます。<strong>クライアントポリシー</strong>:</p>

<ol>
<li><p>作成する<strong>クライアントプロフィール</strong>:</p>
<ul>
<li>レルム設定 → クライアントポリシー → プロファイルタブ → 作成</li>
<li>名前：<code>dpop プロファイル</code></li>
<li>エグゼキュータを追加:<strong>DPoP 証明の検証</strong></li>
</ul>
</li>
<li><p>作成する<strong>クライアントポリシー</strong>:</p>
<ul>
<li>「ポリシー」タブ→「作成」</li>
<li>名前：<code>dpop ポリシー</code></li>
<li>条件を追加します:<strong>クライアントアクセスタイプ</strong>または<strong>あらゆるクライアント</strong></li>
<li>アソシエイトプロフィール:<code>dpop プロファイル</code></li>
</ul>
</li>
</ol>

<pre><code># Token request với DPoP
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded
DPoP: eyJ0eXAiOiJkcG9wK2p3dCIsImFsZyI6IkVTMjU2IiwiandrIjp7Imt0eSI6Ik...

grant_type=authorization_code&
code=AUTH_CODE&
client_id=my-app&
redirect_uri=http://localhost:3000/callback

# Response — DPoP-bound token
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "token_type": "DPoP",              // Token type = "DPoP" thay vì "Bearer"
  "expires_in": 300
}

# Access token chứa confirmation claim
{
  "cnf": {
    "jkt": "thumbprint-of-client-public-key"   // JWK Thumbprint
  }
}

# Gọi Resource Server với DPoP token
GET /api/resource
Authorization: DPoP eyJhbGciOiJSUzI1NiIs...
DPoP: eyJ0eXAiOiJkcG9wK2p3dCIs...          # DPoP proof mới (htm=GET, htu=API URL)</code></pre>

<h3 id="dpop-nonce"><strong>5.4 DPoP ナンス</strong></h3>
<p>Keycloakは、リプレイ攻撃に対するセキュリティを強化するために、サーバー発行のDPoP nonceをサポートしています。</p>

<pre><code># Server response header khi DPoP nonce required
HTTP/1.1 401 Unauthorized
DPoP-Nonce: server-generated-nonce

# Client PHẢI include nonce trong DPoP proof tiếp theo
{
  "typ": "dpop+jwt",
  "alg": "ES256",
  "jwk": { ... }
}
{
  "jti": "new-unique-id",
  "htm": "POST",
  "htu": "https://keycloak/token",
  "iat": 1711800001,
  "nonce": "server-generated-nonce"    // Server-issued nonce
}</code></pre>

<h3 id="dpop-implementation"><strong>5.5 DPoP実装例(JavaScript)</strong></h3>
<pre><code>// Tạo DPoP key pair
const keyPair = await crypto.subtle.generateKey(
  { name: "ECDSA", namedCurve: "P-256" },
  true,
  ["sign", "verify"]
);

// Export public key cho DPoP proof
const publicKey = await crypto.subtle.exportKey("jwk", keyPair.publicKey);

// Tạo DPoP proof JWT
function createDPoPProof(method, url, accessToken = null, nonce = null) {
  const header = {
    typ: "dpop+jwt",
    alg: "ES256",
    jwk: {
      kty: publicKey.kty,
      crv: publicKey.crv,
      x: publicKey.x,
      y: publicKey.y,
    },
  };

  const payload = {
    jti: crypto.randomUUID(),
    htm: method,
    htu: url,
    iat: Math.floor(Date.now() / 1000),
  };

  // Thêm access token hash khi gọi resource server
  if (accessToken) {
    const encoder = new TextEncoder();
    const data = encoder.encode(accessToken);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    payload.ath = base64url(hashBuffer);
  }

  // Thêm nonce nếu server yêu cầu
  if (nonce) {
    payload.nonce = nonce;
  }

  return signJWT(header, payload, keyPair.privateKey);
}

// Sử dụng
const dpopProof = await createDPoPProof(
  "POST",
  "http://localhost:8080/realms/my-company/protocol/openid-connect/token"
);

const tokenResponse = await fetch(tokenEndpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    DPoP: dpopProof,
  },
  body: "grant_type=authorization_code&code=AUTH_CODE&...",
});</code></pre>

<h2 id="6-client-policies-token"><strong>6. トークンセキュリティのためのクライアントポリシー</strong></h2>

<p>クライアント ポリシーを使用すると、トークンに関連するセキュリティ要件を強制できます。</p>

<h3 id="token-related-executors"><strong>6.1 トークン関連のエグゼキュータ</strong></h3>
<table>
<thead>
<tr><th>執行者</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td>DPoP 証明の検証</td><td>トークンリクエストには DPoP が必要</td></tr>
<tr><td>鍵の所有者執行者</td><td>必要なトークン バインディング (MTLS または DPoP)</td></tr>
<tr><td>安全な署名アルゴリズム</td><td>安全なアルゴリズムのみが許可されます (RS256、ES256 など)。</td></tr>
<tr><td>PKCE 執行者</td><td>認可コードフローにPKCEを要求する</td></tr>
<tr><td>機密クライアント執行者</td><td>クライアント認証が必要です</td></tr>
<tr><td>安全な応答タイプ</td><td>安全な応答タイプのみが許可されます</td></tr>
<tr><td>暗黙的な許可を拒否する</td><td>暗黙的な許可は許可されません</td></tr>
</tbody>
</table>

<pre><code># Ví dụ: Policy enforce DPoP + PKCE + Secure Algorithm
Profile: high-security-profile
  Executors:
    - DPoP Proof Verification
    - PKCE Enforcer (S256 only)
    - Secure Signing Algorithm (RS256, ES256)
    - Reject Implicit Grant
    - Confidential Client Enforcer

Policy: high-security-policy
  Conditions:
    - Client Role: has role "high-security"
  Profiles:
    - high-security-profile</code></pre>

<h2 id="7-thuc-hanh"><strong>7. 練習問題</strong></h2>

<h3 id="lab-1"><strong>ラボ 1: クライアント スコープ</strong></h3>
<ol>
<li><p>クライアントスコープの作成<code>組織</code>マッパーを使用: org_id、org_name、org_role</p></li>
<li><p>最初にデフォルトとしてスコープをクライアントに割り当て、次にオプションに変更します。</p></li>
<li><p>テスト: リクエスト トークンにスコープ パラメーターがない → 組織クレームがない</p></li>
<li><p>テスト: トークンをリクエストする<code>スコープ=オープンID組織</code>→組織の主張がある</p></li>
<li><p>使用<strong>評価する</strong>トークンをプレビューするツール</p></li>
</ol>

<h3 id="lab-2"><strong>ラボ 2: トークンのライフサイクル</strong></h3>
<ol>
<li><p>アクセストークン構成の有効期間 = 1 分</p></li>
<li><p>リフレッシュ トークンの取り消しをオンにし、リフレッシュ トークンの最大再利用 = 0</p></li>
<li><p>トークンを取得→1分待つ→APIを呼び出す→401を取得</p></li>
<li><p>トークンを更新 → 新しいトークンを受け取る → API を呼び出す → 成功</p></li>
<li><p>古いトークンを更新しようとすると、エラーが発生します（取り消し）</p></li>
</ol>

<h3 id="lab-3"><strong>ラボ 3: オフライン アクセス</strong></h3>
<ol>
<li><p>スコープの割り当て<code>オフラインアクセス</code>クライアントのために</p></li>
<li><p>トークンを取得する<code>スコープ=openid offline_access</code></p></li>
<li><p>チェック<code>リフレッシュ_有効期限_in</code>= 0 (オフライントークン)</p></li>
<li><p>Keycloakを再起動→オフライントークンを使用して更新→引き続き動作</p></li>
<li><p>管理コンソールでオフライン セッションを表示する</p></li>
</ol>

<h3 id="lab-4"><strong>ラボ 4: DPoP</strong></h3>
<ol>
<li><p>クライアントに DPoP を強制するクライアント ポリシーを作成する<code>dpopクライアント</code></p></li>
<li><p>キーペアの生成、DPoP 証明 JWT の作成</p></li>
<li><p>DPoP ヘッダーを含むトークンを要求 → DPoP バインドされたトークンを受信</p></li>
<li><p>トークンを使用してリソースサーバーを呼び出しますが、<strong>利用不可</strong>DPoP 証明 → リソース サーバー拒否</p></li>
<li><p>トークンを使用してリソースサーバーを呼び出す<strong>そして</strong>DPoP 証明 → 成功</p></li>
</ol>

<h3 id="lab-5"><strong>ラボ 5: トークンの取り消し</strong></h3>
<ol>
<li><p>アクセストークンとリフレッシュトークンを取得する</p></li>
<li><p>取り消しエンドポイント経由でリフレッシュトークンを取り消す</p></li>
<li><p>更新してみる→エラーが発生する</p></li>
<li><p>「Admin Console」→「Push」で「Not-Before」ポリシーを設定します。</p></li>
<li><p>古いアクセス トークンを使用してみる → イントロスペクション トークンが返される<code>アクティブ=偽</code></p></li>
</ol>
