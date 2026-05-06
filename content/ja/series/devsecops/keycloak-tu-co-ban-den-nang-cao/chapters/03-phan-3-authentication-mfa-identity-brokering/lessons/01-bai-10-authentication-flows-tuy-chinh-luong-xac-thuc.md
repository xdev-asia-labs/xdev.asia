---
id: 019d8b30-b110-7001-c001-e0c5f8100110
title: 'レッスン 10: 認証フロー - 認証フローのカスタマイズ'
slug: bai-10-authentication-flows-tuy-chinh-luong-xac-thuc
description: Keycloakの認証フロー、ブラウザフロー、直接付与フロー、登録フロー、認証情報のリセットフロー、最初のブローカーログインフローを理解します。カスタム フローの作成、実行とサブフロー、条件付きオーセンティケーター (条件 - 実行されるサブフロー、条件 - クライアント スコープ)、ステップアップ認証、ACR から認証レベル (LoA) へのマッピング、およびセッション制限を追加します。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 10
section_title: 'パート 3: 認証、MFA、および ID ブローカリング'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9250" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9250)"/>

  <!-- Decorations -->
  <g>
    <circle cx="645" cy="185" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="690" cy="150" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="735" cy="115" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="780" cy="80" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="825" cy="45" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="235" x2="1100" y2="315" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="265" x2="1050" y2="335" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1010.9807621135332,170 1010.9807621135332,200 985,215 959.0192378864668,200 959.0192378864668,170 985,155" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — レッスン 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 10: 認証フロー - カスタマイズ</tspan>
      <tspan x="60" dy="42">認証フロー</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 認証、MFA、および ID ブローカリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-authentication-flows-tong-quan"><strong>1. 認証フロー — 概要</strong></h2>

<p>Keycloakでの認証フローは次のとおりです。<strong>一連の認証ステップ</strong>これは、ユーザーがログイン、登録、またはその他のセキュリティ アクションを実行するときに実行する必要があります。各フローには次のものが含まれます<strong>処刑</strong>(認証者) は順序付けされており、入れ子にすることができます<strong>サブフロー</strong>.</p>

<p>フローを表示および管理するには、次のサイトにアクセスしてください。<strong>管理コンソール → 認証 → フロー</strong>.</p>

<h3 id="11-built-in-flows"><strong>1.1 組み込みの認証フロー</strong></h3>

<p>Keycloak はデフォルトのフローを提供します。</p>

<table>
<thead>
<tr><th>流れ</th><th>説明する</th><th>それはいつトリガーされますか?</th></tr>
</thead>
<tbody>
<tr><td><strong>ブラウザの流れ</strong></td><td>ブラウザからのログインの流れ</td><td>ユーザーが初めてアプリケーションにアクセスするか、セッションが期限切れになる</td></tr>
<tr><td><strong>直接助成金の流れ</strong></td><td>ユーザー名/パスワード (リソース所有者パスワード) を使用した直接認証</td><td>Grant_type=password を使用した API 呼び出し</td></tr>
<tr><td><strong>登録の流れ</strong></td><td>新規アカウント登録の流れ</td><td>ユーザーがログインページで「登録」をクリックします</td></tr>
<tr><td><strong>認証情報のリセットフロー</strong></td><td>パスワードリセットの流れ</td><td>ユーザーが「パスワードを忘れた場合」をクリックします</td></tr>
<tr><td><strong>最初のブローカーのログインフロー</strong></td><td>フローは、アイデンティティ プロバイダーを介した最初のログインを処理します。</td><td>ユーザーが初めてソーシャル ログイン経由でログインする</td></tr>
<tr><td><strong>Docker認証フロー</strong></td><td>Dockerレジストリの認証</td><td>Docker クライアントのイメージのプル/プッシュ</td></tr>
<tr><td><strong>HTTPチャレンジの流れ</strong></td><td>HTTPヘッダーによる認証</td><td>非ブラウザクライアント (Kerberos、X.509)</td></tr>
</tbody>
</table>

<h3 id="12-flow-types"><strong>1.2 フローの種類</strong></h3>

<p>各フローには、次のタイプの要素を含めることができます。</p>

<table>
<thead>
<tr><th>タイプ</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td><strong>認証者</strong></td><td>特定の認証ステップ (例: ユーザー名、パスワード フォーム)</td></tr>
<tr><td><strong>サブフロー</strong></td><td>子フローには複数の認証子が含まれており、複雑なロジックが可能です</td></tr>
<tr><td><strong>形状</strong></td><td>ユーザーが情報 (ユーザー名、パスワード、OTP など) を入力するためのフォームを表示します。</td></tr>
</tbody>
</table>

<h2 id="2-browser-flow-chi-tiet"><strong>2. ブラウザ フロー — 詳細</strong></h2>

<p>デフォルトのブラウザ フローは次の構造になっています。</p>

<pre><code>Browser Flow
├── Cookie (Alternative)              → Kiểm tra SSO session cookie
├── Kerberos (Disabled)               → Xác thực Kerberos (tắt mặc định)
├── Identity Provider Redirector (Alternative) → Redirect đến IdP nếu có
└── Forms (Alternative)               → Sub-flow xử lý form login
    ├── Username Password Form (Required) → Nhập username + password
    └── Browser - Conditional OTP (Conditional) → Sub-flow OTP
        ├── Condition - User Configured (Required) → Kiểm tra user đã setup OTP
        └── OTP Form (Required)           → Nhập mã OTP</code></pre>

<p><strong>仕組み:</strong></p>

<ol>
<li><strong>クッキー</strong>: ユーザーがすでに有効なセッション Cookie を持っている場合 → すべてスキップし、ログインに成功します</li>
<li><strong>ケルベロス</strong>: デフォルトでは無効です — 有効にすると、Kerberos チケットが試行されます</li>
<li><strong>アイデンティティプロバイダリダイレクタ</strong>: あれば<code>kc_idp_hint</code>→ その IdP にリダイレクトします</li>
<li><strong>フォーム</strong>：ログインフォームを表示<ul>
    <li>ユーザー名とパスワードが必要です</li>
    <li>ユーザーが OTP を設定している場合 → OTP コードの入力が必要</li>
    </ul>
</li>
</ol>

<h3 id="21-execution-requirements"><strong>2.1 実行要件</strong></h3>

<p>フロー内の各実行には 1 つの<strong>要件。要件</strong>動作を定義します。</p>

<table>
<thead>
<tr><th>要件</th><th>説明する</th><th>いつ使用するか</th></tr>
</thead>
<tbody>
<tr><td><strong>必須</strong></td><td>実行して成功することが不可欠です</td><td>ユーザー名/パスワード、OTP の設定後</td></tr>
<tr><td><strong>代替</strong></td><td>成功した代替案の 1 つで十分です</td><td>Cookie またはフォーム — たった 1 パス</td></tr>
<tr><td><strong>条件付き</strong></td><td>サブフローは条件が true の場合にのみ実行されます</td><td>条件付き OTP — ユーザーが設定した場合にのみ OTP が必要です</td></tr>
<tr><td><strong>無効</strong></td><td>完全に無視してください</td><td>ステップを削除せずに一時的に無効にする</td></tr>
</tbody>
</table>

<p><strong>重要なルール:</strong></p>
<ul>
<li>フロー内のすべての実行が<strong>代替</strong>→ただ<strong>パスワード1個</strong></li>
<li>少なくとも 1 つあれば<strong>必須</strong>→ Required はすべて合格する必要があり、Alternative は無視されます</li>
<li><strong>条件付き</strong>サブフローでよく使用されます。最初のステップは条件チェッカーであり、次のステップは認証子です。</li>
</ul>

<h2 id="3-tao-custom-authentication-flow"><strong>3. カスタム認証フローの作成</strong></h2>

<p>組み込みフローは直接編集できません。必要です<strong>重複。重複</strong>それからカスタマイズします。</p>

<h3 id="31-duplicate-va-chinh-sua"><strong>3.1 複製と編集</strong></h3>

<ol>
<li>入力<strong>認証 → フロー</strong></li>
<li>コピーするフローを選択します。たとえば、<code>ブラウザ</code></li>
<li>クリック<strong>アクション → 複製</strong></li>
<li>新しい名前:<code>私のカスタムブラウザフロー</code></li>
<li>新しいフローは、元のフローとすべて同じ実行で表示されます。</li>
</ol>

<h3 id="32-them-execution"><strong>3.2 実行の追加</strong></h3>

<p>複製したら、実行を追加/削除/並べ替えることができます。</p>

<ol>
<li>カスタム フローで、<strong>「ステップを追加」</strong></li>
<li>リストから認証システムを選択します。<ul>
    <li><code>ユーザー名 パスワード フォーム</code>— ユーザー名+パスワード入力フォーム</li>
    <li><code>OTPフォーム</code>— OTPコードを入力するフォーム</li>
    <li><code>クッキー</code>— セッション Cookie を確認する</li>
    <li><code>アイデンティティプロバイダリダイレクタ</code>— 外部 IdP へのリダイレクト</li>
    <li><code>アクセスを拒否する</code>— アクセスを拒否する</li>
    <li><code>アクセスを許可する</code>— アクセスを許可する</li>
    <li><code>ユーザー名フォーム</code>— ユーザー名のみを入力します (別のパスワード)</li>
    <li><code>パスワードフォーム</code>— パスワードのみを入力します</li>
    <li><code>WebAuthn オーセンティケーター</code>— セキュリティキーによる認証</li>
    <li><code>WebAuthn パスワードレス認証システム</code>— パスワードレス認証</li>
    </ul>
</li>
<li>適切な要件を設定します (必須、代替、条件付き、無効)</li>
</ol>

<h3 id="33-them-sub-flow"><strong>3.3 サブフローの追加</strong></h3>

<p>サブフローを使用すると、複数の実行をグループ化して、より複雑なロジックを作成できます。</p>

<pre><code>My Custom Browser Flow
├── Cookie (Alternative)
├── Identity Provider Redirector (Alternative)
└── My Login Forms (Alternative)              ← Sub-flow
    ├── Username Password Form (Required)
    └── MFA Sub-flow (Conditional)            ← Sub-flow lồng nhau
        ├── Condition - User Configured (Required)
        ├── OTP Form (Alternative)            ← Cho chọn OTP...
        └── WebAuthn Authenticator (Alternative) ← ...hoặc Security Key</code></pre>

<p><strong>サブフローを追加する方法:</strong></p>
<ol>
<li>クリック<strong>「サブフローを追加」</strong></li>
<li>たとえば、次のように名前を付けます。<code>MFA サブフロー</code></li>
<li>要件を設定します。<code>条件付き</code></li>
<li>サブフローに実行を追加する</li>
</ol>

<h2 id="4-conditional-authenticators"><strong>4. 条件付き認証子</strong></h2>

<p>条件付き認証子が許可される<strong>条件を確認する</strong>サブフローを実行する前に。条件が満たされない場合 → サブフロー全体がスキップされます。</p>

<h3 id="41-cac-condition-co-san"><strong>4.1 利用可能な条件</strong></h3>

<table>
<thead>
<tr><th>状態</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td><strong>条件 - ユーザー設定</strong></td><td>ユーザーは対応する認証情報 (OTP、WebAuthn...) を構成しました。</td></tr>
<tr><td><strong>条件 - ユーザーの役割</strong></td><td>ユーザーには特定の役割があります</td></tr>
<tr><td><strong>条件 - ユーザー属性</strong></td><td>ユーザーは必要な値を持つ特定の属性を持っています</td></tr>
<tr><td><strong>条件 - クライアントの範囲</strong></td><td>リクエストには特定のスコープが含まれています (例:<code>acr_values</code>)</td></tr>
<tr><td><strong>条件 - サブフローの実行</strong></td><td>前のサブフローは正常に実行されました</td></tr>
</tbody>
</table>

<h3 id="42-vi-du-conditional-otp-theo-role"><strong>4.2 例: ロール別の条件付き OTP</strong></h3>

<p>ロールを持つユーザーのみの OTP リクエスト<code>管理者。管理者</code>:</p>

<pre><code>My Custom Browser Flow
├── Cookie (Alternative)
└── Forms (Alternative)
    ├── Username Password Form (Required)
    └── Admin OTP Sub-flow (Conditional)
        ├── Condition - User Role (Required)    → Config: role = "admin"
        └── OTP Form (Required)</code></pre>

<p><strong>条件の構成 - ユーザーの役割:</strong></p>
<ol>
<li>もっと<code>条件 - ユーザーの役割</code>サブフローへ</li>
<li>条件の横にある ⚙️ (設定) アイコンをクリックします。</li>
<li>入力：<ul>
    <li><strong>エイリアス</strong>: <code>管理者の役割を確認する</code></li>
    <li><strong>ユーザーの役割</strong>: <code>管理者。管理者</code>（または<code>レルム管理.管理ユーザー</code>クライアントの役割の場合)</li>
    <li><strong>出力を否定します</strong>: <code>オフ</code>(ロールを持たないユーザーに適用する場合はオン)</li>
    </ul>
</li>
</ol>

<h3 id="43-condition-client-scope"><strong>4.3 条件 - クライアントの範囲</strong></h3>

<p>クライアントが特別なスコープを要求する場合は MFA を要求します。</p>

<pre><code># Authorization request yêu cầu MFA
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  scope=openid profile mfa-required&
  response_type=code&
  redirect_uri=https://myapp.example.com/callback</code></pre>

<pre><code>My Custom Browser Flow
├── Cookie (Alternative)
└── Forms (Alternative)
    ├── Username Password Form (Required)
    └── MFA When Requested (Conditional)
        ├── Condition - Client Scope (Required)  → Config: scope = "mfa-required"
        └── OTP Form (Required)</code></pre>

<h2 id="5-step-up-authentication-va-loa"><strong>5. ステップアップ認証と認証レベル (LoA)</strong></h2>

<p>ステップアップ認証によりリクエストが許可されます<strong>より高いレベルの認証</strong>ユーザーに完全な再認証を強制することなく、機密性の高いアクションを実行できます。</p>

<h3 id="51-acr-va-loa-mapping"><strong>5.1 ACR とスピーカーのマッピング</strong></h3>

<p><strong>ACR (認証コンテキスト クラス リファレンス)</strong>ID トークン内のクレームは次のとおりです<strong>信憑性のレベル</strong>が行われました。 KeycloakはACR値をマップします<strong>認証レベル (LoA)</strong>— 整数。</p>

<p><strong>ACR から LoA へのマッピングを構成します。</strong></p>
<ol>
<li>入力<strong>認証 → フロー</strong></li>
<li>使用中のフローを開きます (例: ブラウザ フロー)</li>
<li>各サブフローには 1 つを割り当てることができます<strong>LoAレベル</strong></li>
</ol>

<pre><code>My Step-up Browser Flow
├── Cookie (Alternative)                          → LoA: không set
└── Login Forms (Alternative)
    ├── Username Password Form (Required)         → LoA Level 1
    └── Step-up MFA (Conditional)
        ├── Condition - Level of Authentication (Required)
        └── OTP Sub-flow (Conditional)            → LoA Level 2
            ├── Condition - User Configured (Required)
            └── OTP Form (Required)</code></pre>

<p><strong>デフォルトの LoA マッピング (認証 → フロー → 歯車アイコン):</strong></p>

<pre><code># Trong Realm Settings → General → ACR to LoA Mapping:
# Hoặc cấu hình trong flow
{
  "acr_to_loa_mapping": {
    "urn:keycloak:loa:1": 1,    // Password only
    "urn:keycloak:loa:2": 2,    // Password + OTP
    "urn:keycloak:loa:3": 3,    // Password + Security Key
    "gold": 2,                   // Custom ACR value
    "platinum": 3                // Custom ACR value
  }
}</code></pre>

<h3 id="52-request-step-up"><strong>5.2 ステップアップ認証の要求</strong></h3>

<p>クライアントは、次の方法で特定の LoA を要求します。<code>acr_values</code>または<code>主張</code>パラメータ:</p>

<pre><code># Sử dụng acr_values (voluntary — không bắt buộc)
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  scope=openid&
  acr_values=gold&
  response_type=code&
  redirect_uri=https://myapp.example.com/callback

# Sử dụng claims parameter (essential — bắt buộc LoA)
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  scope=openid&
  claims={"id_token":{"acr":{"essential":true,"values":["gold"]}}}&
  response_type=code&
  redirect_uri=https://myapp.example.com/callback</code></pre>

<p><strong>ID トークンの結果:</strong></p>

<pre><code>{
  "acr": "gold",
  "sub": "user-123",
  "iss": "https://keycloak.example.com/realms/myrealm",
  ...
}</code></pre>

<h3 id="53-loa-trong-token"><strong>5.3 アプリケーションで LoA を確認する</strong></h3>

<pre><code class="language-java">// Spring Security — kiểm tra ACR level
@GetMapping("/sensitive-action")
public ResponseEntity&lt;?&gt; sensitiveAction(
        @AuthenticationPrincipal OidcUser user) {
    
    String acr = user.getIdToken().getClaimAsString("acr");
    
    if (!"gold".equals(acr)) {
        // Redirect user để step-up authentication
        String stepUpUrl = keycloakBaseUrl + 
            "/realms/myrealm/protocol/openid-connect/auth" +
            "?client_id=my-app" +
            "&scope=openid" +
            "&acr_values=gold" + 
            "&prompt=login" +
            "&response_type=code" +
            "&redirect_uri=" + redirectUri;
        
        return ResponseEntity.status(302)
            .header("Location", stepUpUrl)
            .build();
    }
    
    return ResponseEntity.ok("Sensitive data here");
}</code></pre>

<h2 id="6-direct-grant-flow"><strong>6. 直接的な助成金の流れ</strong></h2>

<p>ダイレクトグラントフロー処理<code>許可タイプ=パスワード</code>— ブラウザを経由しない直接認証:</p>

<pre><code>Direct Grant Flow (mặc định)
├── Username Validation (Required)    → Kiểm tra username tồn tại
├── Password (Required)               → Verify password
└── Direct Grant - Conditional OTP (Conditional)
    ├── Condition - User Configured (Required)
    └── OTP (Required)</code></pre>

<pre><code class="language-bash"># Ví dụ: Direct Grant request
curl -X POST \
  https://keycloak.example.com/realms/myrealm/protocol/openid-connect/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=password' \
  -d 'client_id=my-backend' \
  -d 'client_secret=my-secret' \
  -d 'username=user@example.com' \
  -d 'password=user-password' \
  -d 'totp=123456'    # Nếu user đã setup OTP</code></pre>

<blockquote>
<p>⚠️ <strong>注記</strong>: 直接付与 (リソース所有者のパスワード認証情報) は実稼働環境では推奨されません。代わりに認証コード フロー + PKCE を使用する必要があります。</p>
</blockquote>

<h2 id="7-registration-flow"><strong>7. 登録の流れ</strong></h2>

<p>登録フローは、新しいアカウントの登録プロセスを制御します。</p>

<pre><code>Registration Flow (mặc định)
└── Registration Form (Required)
    ├── Registration User Profile (Required)  → Nhập thông tin profile
    ├── Password Validation (Required)        → Nhập + confirm password
    └── Recaptcha (Disabled)                  → reCAPTCHA (tắt mặc định)</code></pre>

<h3 id="71-bat-registration"><strong>7.1 登録を有効にする</strong></h3>

<ol>
<li>入力<strong>レルム設定 → ログイン</strong></li>
<li>オンにする<strong>ユーザー登録</strong>：の上</li>
<li>オプション: オン<strong>ユーザー名としての電子メール</strong>ユーザーがユーザー名として電子メールを使用できるようにする</li>
</ol>

<h3 id="72-custom-registration-flow"><strong>7.2 カスタム登録の流れ</strong></h3>

<pre><code>My Registration Flow
└── Registration Form (Required)
    ├── Registration User Profile (Required)
    ├── Password Validation (Required)
    ├── Recaptcha (Required)                → Bật reCAPTCHA
    └── Terms and Conditions (Required)     → Yêu cầu đồng ý điều khoản</code></pre>

<p><strong>reCAPTCHA を構成します。</strong></p>
<ol>
<li>Google reCAPTCHA v3 にサインアップするには、<a href="https://www.google.com/recaptcha/admin">https://www.google.com/recaptcha/admin</a></li>
<li>フロー内で、その横にある ⚙️ をクリックします<code>再キャプチャ</code></li>
<li>入力：<ul>
    <li><strong>再キャプチャサイトキー</strong>: <code>あなたのサイトキー</code></li>
    <li><strong>再キャプチャシークレット</strong>: <code>あなたの秘密鍵</code></li>
    <li><strong>Recaptcha.net を使用する</strong>: オン (中国で必要な場合)</li>
    </ul>
</li>
</ol>

<h2 id="8-reset-credentials-flow"><strong>8. 認証情報のリセットフロー</strong></h2>

<p>フローはパスワード リセット プロセスを処理します。</p>

<pre><code>Reset Credentials Flow (mặc định)
├── Choose User (Required)                → User nhập username/email
├── Send Reset Email (Required)           → Gửi email reset link
├── Reset Password (Required)             → Form nhập mật khẩu mới
└── Reset - Conditional OTP (Conditional) → OTP nếu đã cấu hình
    ├── Condition - User Configured (Required)
    └── Reset OTP (Required)</code></pre>

<h2 id="9-session-limits"><strong>9. セッション制限</strong></h2>

<p>Keycloakを使用すると、ユーザーごとの同時セッション数を制限できます。</p>

<h3 id="91-cau-hinh-session-limits"><strong>9.1 認証フローでのセッション制限の構成</strong></h3>

<p>もっと<code>ユーザーセッションの制限</code>フローへの認証子:</p>

<pre><code>My Custom Browser Flow
├── Cookie (Alternative)
└── Forms (Alternative)
    ├── Username Password Form (Required)
    ├── Browser - Conditional OTP (Conditional)
    │   ├── Condition - User Configured (Required)
    │   └── OTP Form (Required)
    └── User Session Limits (Required)</code></pre>

<p><strong>ユーザーセッション制限を構成します。</strong></p>
<ol>
<li>横にある⚙️をクリックしてください<code>ユーザーセッションの制限</code></li>
<li>構成：<ul>
    <li><strong>最大レルムセッション数</strong>: レルム内のセッションの最大合計数 (例:<code>3</code>)</li>
    <li><strong>最大クライアントセッション数</strong>: 1 クライアントの最大セッション数 (例:<code>1</code>)</li>
    <li><strong>制限に達したときの動作</strong>:
        <ul>
        <li><code>新しいセッションを拒否する</code>— 新規ログインを拒否する</li>
        <li><code>最も古いセッションを終了する</code>— 最古のセッションロック</li>
        </ul>
    </li>
    <li><strong>エラーメッセージ</strong>: 拒否された場合のカスタム メッセージ (例:<code>「ログインセッションの制限に達しました」</code>)</li>
    </ul>
</li>
</ol>

<h2 id="10-bind-flow-vao-realm-va-client"><strong>10. レルムとクライアントへのバインド フロー</strong></h2>

<h3 id="101-bind-flow-cho-realm"><strong>10.1 レルムのバインドフロー</strong></h3>

<p>カスタム フローを作成したら、それをレルムのデフォルト フローとしてバインドします。</p>

<ol>
<li>入力<strong>認証 → フロー</strong></li>
<li>タブをクリックします<strong>「バインディング」</strong>（または<strong>必要なアクション</strong>) </li>
<li>各バインディングのフローを選択します。<ul>
    <li><strong>ブラウザの流れ</strong>: <code>私のカスタムブラウザフロー</code></li>
    <li><strong>直接助成金の流れ</strong>: <code>直接助成</code></li>
    <li><strong>登録の流れ</strong>: <code>私の登録の流れ</code></li>
    <li><strong>認証情報のリセットフロー</strong>: <code>認証情報のリセット</code></li>
    </ul>
</li>
</ol>

<h3 id="102-bind-flow-cho-client"><strong>10.2 特定のクライアントのバインド フロー</strong></h3>

<p>各クライアントのレルム フローをオーバーライドできます。</p>

<ol>
<li>入力<strong>クライアント → クライアントを選択</strong></li>
<li>タブ<strong>"高度な"</strong></li>
<li>アイテム<strong>「認証フローのオーバーライド」</strong>:
    <ul>
    <li><strong>ブラウザの流れ</strong>: レルムのデフォルト以外のフローを選択します</li>
    <li><strong>直接助成金の流れ</strong>: 別のフローを選択します</li>
    </ul>
</li>
</ol>

<h2 id="11-dynamic-flow-selection-voi-client-policies"><strong>11. クライアントポリシーによる動的なフロー選択</strong></h2>

<p>Keycloak 25+ からは次のことができます<strong>クライアントポリシー</strong>クライアントのプロパティに基づいて認証フローを自動的に選択します。</p>

<h3 id="111-tao-client-policy"><strong>11.1 フロー選択のためのクライアントポリシーの作成</strong></h3>

<ol>
<li>入力<strong>レルム設定 → クライアントポリシー → ポリシー</strong></li>
<li>新しいポリシーを作成します。<code>安全なクライアント MFA ポリシー</code></li>
<li>もっと<strong>状態</strong>:
    <ul>
    <li>タイプ：<code>クライアントスコープ</code></li>
    <li>範囲:<code>["MFA が必要"]</code></li>
    </ul>
</li>
<li>もっと<strong>プロフィール</strong>(クライアントプロフィールより):<ul>
    <li>プロファイル エグゼキュータ: ブラウザ フローをオーバーライドします</li>
    </ul>
</li>
</ol>

<pre><code class="language-json">// Client Policy — ví dụ export JSON
{
  "policies": [
    {
      "name": "Secure Clients MFA Policy",
      "description": "Enforce MFA for clients with mfa-required scope",
      "enabled": true,
      "conditions": [
        {
          "condition": "client-scopes",
          "configuration": {
            "scopes": ["mfa-required"],
            "type": "DEFAULT"
          }
        }
      ],
      "profiles": ["mfa-enforced-profile"]
    }
  ]
}</code></pre>

<h2 id="12-export-import-flows"><strong>12. 認証フローのエクスポート/インポート</strong></h2>

<p>認証フローはレルムのエクスポートに含まれます。</p>

<pre><code class="language-bash"># Export realm bao gồm flows
/opt/keycloak/bin/kc.sh export \
  --dir /opt/keycloak/data/export \
  --realm myrealm

# Trong file realm-export.json, flows nằm ở:
# "authenticationFlows": [...]
# "authenticationExecutions": [...]</code></pre>

<p><strong>Admin REST API を介した部分的なインポート:</strong></p>

<pre><code class="language-bash"># Lấy danh sách flows
curl -s -X GET \
  "https://keycloak.example.com/admin/realms/myrealm/authentication/flows" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq '.[].alias'

# Export 1 flow cụ thể
FLOW_ID=$(curl -s -X GET \
  "https://keycloak.example.com/admin/realms/myrealm/authentication/flows" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | \
  jq -r '.[] | select(.alias=="My Custom Browser Flow") | .id')

curl -s -X GET \
  "https://keycloak.example.com/admin/realms/myrealm/authentication/flows/$FLOW_ID/executions" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq .</code></pre>

<h2 id="13-tom-tat"><strong>13. まとめ</strong></h2>

<table>
<thead>
<tr><th>コンセプト</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td><strong>認証の流れ</strong></td><td>認証ステップのチェーン - サブフローを介してネスト可能</td></tr>
<tr><td><strong>実行要件</strong></td><td>必須、代替、条件付き、無効</td></tr>
<tr><td><strong>条件付き認証子</strong></td><td>サブフロー実行前に条件を確認する</td></tr>
<tr><td><strong>ステップアップ認証</strong></td><td>機密性の高いアクションにはより高い LoA が必要</td></tr>
<tr><td><strong>ACR から LoA へのマッピング</strong></td><td>ACR値を数値レベルにマッピングする</td></tr>
<tr><td><strong>セッション制限</strong></td><td>ユーザーごとの同時セッションを制限する</td></tr>
<tr><td><strong>フローバインディング</strong></td><td>レルムレベルまたはクライアントごとのオーバーライドでのバインドフロー</td></tr>
</tbody>
</table>
