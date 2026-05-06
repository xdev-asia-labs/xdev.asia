---
id: 019d8b30-b111-7001-c001-e0c5f8100111
title: 'レッスン 11: 多要素認証 - OTP、WebAuthn、およびパスキー'
slug: bai-11-multi-factor-authentication-otp-webauthn-va-passkeys
description: TOTP/HOTP (Google Authenticator、FreeOTP)、OTP ポリシー設定、リカバリ コードを使用した 2 要素認証を構成します。 WebAuthn セットアップ (FIDO2 セキュリティ キー)、WebAuthn パスワードレス ポリシー。パスキーの統合 (条件付きおよびモーダル UI)、AIA を介したパスキーの登録、Kerberos 認証、および X.509 クライアント証明書認証。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 3: 認証、MFA、および ID ブローカリング'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2380" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2380)"/>

  <!-- Decorations -->
  <g>
    <circle cx="945" cy="65" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="790" cy="250" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="635" cy="175" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="980" cy="100" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="825" cy="285" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="135" x2="1100" y2="215" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="165" x2="1050" y2="235" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1010.9807621135332,170 1010.9807621135332,200 985,215 959.0192378864668,200 959.0192378864668,170 985,155" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: 多要素認証 - OTP、</tspan>
      <tspan x="60" dy="42">WebAuthn とパスキー</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 認証、MFA、および ID ブローカリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-otp-authentication"><strong>1. OTP 認証 — TOTP および HOTP</strong></h2>

<p>OTP (ワンタイム パスワード) は、最も一般的な MFA 方式です。 Keycloakは2つのタイプをサポートしています。</p>

<table>
<thead>
<tr><th>タイプ</th><th>説明する</th><th>アルゴリズム</th></tr>
</thead>
<tbody>
<tr><td><strong>TOTP</strong>(時間ベース)</td><td>OTP コードは時間の経過とともに (30 秒ごとに) 変化します</td><td>RFC 6238</td></tr>
<tr><td><strong>ホット</strong>(HMACベース)</td><td>OTPコードはカウンタに応じて変化します</td><td>RFC 4226</td></tr>
</tbody>
</table>

<p><strong>TOTPが推奨されます</strong>セキュリティを強化するには、コードは時間の経過とともに期限切れになります。 HOTP は、デバイスが正確なクロックをサポートしていない場合にのみ使用されます。</p>

<h3 id="11-otp-policy"><strong>1.1 OTP ポリシーの設定</strong></h3>

<p>OTP ポリシーを次の場所に設定します<strong>認証 → ポリシー → OTP ポリシー</strong>:</p>

<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>デフォルト値</th><th>推奨</th></tr>
</thead>
<tbody>
<tr><td><strong>OTPタイプ</strong></td><td>TOTPまたはHOTP</td><td><code>トップ</code></td><td><code>トップ</code></td></tr>
<tr><td><strong>OTP ハッシュ アルゴリズム</strong></td><td>ハッシュアルゴリズム</td><td><code>SHA1</code></td><td><code>SHA256</code>または<code>SHA512</code></td></tr>
<tr><td><strong>桁数</strong></td><td>OTP 桁数</td><td><code>6</code></td><td><code>6</code>(最高の互換性)</td></tr>
<tr><td><strong>先読みウィンドウ</strong></td><td>コード番号が受け入れられる前/後</td><td><code>1</code></td><td><code>1</code>— ユーザーがタイムラグを起こしやすい場合は増加します</td></tr>
<tr><td><strong>OTP トークンの期間</strong></td><td>コードごとの存続時間 (秒) — TOTP のみ</td><td><code>30</code></td><td><code>30</code></td></tr>
<tr><td><strong>初期カウンター</strong></td><td>開始カウンター — HOTP のみ</td><td><code>0</code></td><td><code>0</code></td></tr>
<tr><td><strong>サポートされているアプリケーション</strong></td><td>セットアップ手順に表示されるアプリ</td><td>FreeOTP、Google認証システム</td><td>必要に応じて他のアプリを追加する</td></tr>
</tbody>
</table>

<h3 id="12-setup-google-authenticator"><strong>1.2 Google Authenticator / FreeOTP を使用した OTP の設定</strong></h3>

<p><strong>ステップ 1: 認証フローで OTP をオンにする</strong></p>

<p>デフォルトでは、ブラウザ フローが利用可能です<code>ブラウザ - 条件付き OTP</code>サブフロー。 OTP は、ユーザーが OTP 資格情報を設定した場合にのみ必要です。に<strong>義務的な</strong>すべてのユーザーは OTP を設定する必要があります。</p>

<ol>
<li>入力<strong>認証 → 必要なアクション</strong></li>
<li>探す<strong>OTPの構成</strong></li>
<li>オンにする<strong>デフォルトのアクション</strong>: オン — すべての新規ユーザーは OTP を設定する必要があります</li>
<li>またはオンにします<strong>必須</strong>既存のユーザーに強制する列「デフォルトのアクションとして設定」</li>
</ol>

<p><strong>ステップ 2: ユーザーが OTP を登録する</strong></p>

<p>ユーザーが初めてログインしたとき (または管理者が必須アクションをオンにした後):</p>

<ol>
<li>Keycloakがページを表示します<strong>「モバイル認証設定」</strong></li>
<li>ユーザーが Google Authenticator または FreeOTP アプリを開く</li>
<li>QRコードをスキャンするか、手動キーを入力してください</li>
<li>アプリから確認用のOTPコードを入力します</li>
<li>OTP 認証情報がユーザー用に保存されます</li>
</ol>

<p><strong>ステップ 3: OTP 認証</strong></p>

<p>次回のログインからは、ユーザー名/パスワードを入力した後、アプリから OTP コードを入力する必要があります。</p>

<h3 id="13-quan-ly-otp-credentials"><strong>1.3 OTP認証情報の管理</strong></h3>

<pre><code class="language-bash"># Admin xem OTP credentials của user
curl -s -X GET \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID/credentials" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | \
  jq '.[] | select(.type=="otp")'

# Admin xóa OTP credential (force user setup lại)
curl -X DELETE \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID/credentials/$CREDENTIAL_ID" \
  -H "Authorization: Bearer $ADMIN_TOKEN"

# Admin trigger Required Action cho user cụ thể
curl -X PUT \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID" \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "requiredActions": ["CONFIGURE_TOTP"]
  }'</code></pre>

<h2 id="2-recovery-codes"><strong>2. リカバリーコード</strong></h2>

<p>リカバリ コードを使用すると、ユーザーは OTP デバイスを紛失した場合にアクセスを復元できます。</p>

<h3 id="21-bat-recovery-codes"><strong>2.1 リカバリコードを有効にする</strong></h3>

<ol>
<li>入力<strong>認証 → 必要なアクション</strong></li>
<li>探す<strong>回復認証コード</strong>（お持ちでない場合は登録が必要です）</li>
<li>オンにする<strong>デフォルトのアクション</strong>または<strong>有効</strong></li>
</ol>

<p><strong>OTP セットアップ後にリカバリ コードを適用します。</strong></p>

<p>OTP の設定直後にユーザーにリカバリ コードの作成を強制するには、次の順序で必須アクションを構成します。</p>

<ol>
<li><code>CONFIGURE_TOTP</code>— 最初に OTP を設定します</li>
<li><code>CONFIGURE_RECOVERY_AUTHN_CODES</code>— 後でリカバリーコードを生成する</li>
</ol>

<h3 id="22-su-dung-recovery-codes"><strong>2.2 リカバリコードの使用</strong></h3>

<p>ユーザーが OTP デバイスを紛失した場合:</p>

<ol>
<li>OTP入力画面で、 をクリックします。<strong>「別の方法を試してください」</strong></li>
<li>選択<strong>「リカバリーコード」</strong></li>
<li>保存したリカバリコードのいずれかを入力してください</li>
<li>各コードのみ使用可能<strong>1回</strong></li>
<li>すべてのコードを使用した後、コードを再度生成する必要があります</li>
</ol>

<h2 id="3-webauthn-fido2"><strong>3. WebAuthn (FIDO2) — セキ​​ュリティ キー</strong></h2>

<p>WebAuthn により認証が可能になります<strong>ハードウェアセキュリティキー</strong>(YubiKey、Google Titan) または<strong>プラットフォーム認証システム</strong>(Touch ID、Windows Hello)。</p>

<h3 id="31-setup-webauthn"><strong>3.1 ブラウザフローでの WebAuthn のセットアップ</strong></h3>

<p><strong>ステップ 1: WebAuthn を認証フローに追加する</strong></p>

<ol>
<li>複製ブラウザのフロー →<code>WebAuthn を備えたブラウザ</code></li>
<li>Forms サブフローに、次のように追加します。<code>WebAuthn オーセンティケーター</code></li>
<li>フロー構造:<pre><code>Browser with WebAuthn
├── Cookie (Alternative)
└── Forms (Alternative)
    ├── Username Password Form (Required)
    └── WebAuthn MFA (Conditional)
        ├── Condition - User Configured (Required)
        └── WebAuthn Authenticator (Required)</code></pre>
</li>
<li>バインドフロー:<strong>認証 → バインディング → ブラウザ フロー = WebAuthn を備えたブラウザ</strong></li>
</ol>

<p><strong>ステップ 2: 必須アクションをオンにする</strong></p>

<ol>
<li>入力<strong>認証 → 必要なアクション</strong></li>
<li>探す<strong>Web認証登録</strong>→オンにする<strong>デフォルトのアクション</strong></li>
<li>新規ユーザーはセキュリティキーの登録を求められます</li>
</ol>

<h3 id="32-webauthn-policy"><strong>3.2 WebAuthn ポリシーの設定</strong></h3>

<p>での構成<strong>認証 → ポリシー → WebAuthn ポリシー</strong>:</p>

<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>価値</th></tr>
</thead>
<tbody>
<tr><td><strong>証明書利用者エンティティ名</strong></td><td>ユーザーに表示される名前</td><td><code>キークローク</code>または会社名</td></tr>
<tr><td><strong>署名アルゴリズム</strong></td><td>署名アルゴリズム</td><td><code>ES256</code>（推奨）、<code>RS256</code></td></tr>
<tr><td><strong>証明書利用者 ID</strong></td><td>Keycloakのドメイン</td><td><code>keycloak.example.com</code>(または空白のまま = 自動)</td></tr>
<tr><td><strong>証明書の伝達の設定</strong></td><td>キーからの証明書の要求</td><td><code>指定されていない</code>または<code>直接</code></td></tr>
<tr><td><strong>認証子の添付ファイル</strong></td><td>認証子の種類</td><td><code>指定されていない</code>(USB キーとプラットフォームの両方を受け入れます)</td></tr>
<tr><td><strong>常駐キーが必要です</strong></td><td>キーはデバイスに保存する必要があります</td><td><code>指定されていない</code></td></tr>
<tr><td><strong>ユーザー認証要件</strong></td><td>デバイスでのユーザー認証が必要です</td><td><code>指定されていない</code>または<code>必須。必須</code></td></tr>
<tr><td><strong>タイムアウトの作成</strong></td><td>キー登録時のタイムアウト(秒)</td><td><code>0</code>(タイムアウトなし)</td></tr>
<tr><td><strong>同じ認証子レジスタを避ける</strong></td><td>同じキーを重複して登録しないでください</td><td><code>オフ</code></td></tr>
<tr><td><strong>許容可能な AAGUID</strong></td><td>ホワイトリスト セキュリティ キー モデル</td><td>空白のままにする = すべてを受け入れる</td></tr>
</tbody>
</table>

<h3 id="33-quan-ly-webauthn-credentials"><strong>3.3 WebAuthn 認証情報の管理</strong></h3>

<pre><code class="language-bash"># Xem WebAuthn credentials của user
curl -s -X GET \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID/credentials" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | \
  jq '.[] | select(.type=="webauthn")'

# Response
{
  "id": "credential-uuid",
  "type": "webauthn",
  "userLabel": "YubiKey 5",
  "createdDate": 1711900000000,
  "credentialData": "{\"aaguid\":\"...\",\"credentialPublicKey\":\"...\"}"
}</code></pre>

<p>ユーザーは内部セキュリティ キーを自分で管理することもできます<strong>アカウントコンソール</strong>で<code>/realms/myrealm/account/#/security/webauthn</code>.</p>

<h2 id="4-passkeys"><strong>4. パスキー</strong></h2>

<p>パスキーは WebAuthn の次の進化版です — 権限<strong>パスワードなしでログインする</strong>(パスワードレス) 指紋、顔認識、またはデバイスの PIN を使用します。</p>

<h3 id="41-passkeys-vs-webauthn"><strong>4.1 パスキーと従来の WebAuthn</strong></h3>

<table>
<thead>
<tr><th>特徴</th><th>ウェブ認証 (MFA)</th><th>パスキー (パスワードなし)</th></tr>
</thead>
<tbody>
<tr><td><strong>目的</strong></td><td>MFA — パスワードの後に​​ステップを追加</td><td>パスワードを完全に置き換える</td></tr>
<tr><td><strong>認証者</strong></td><td><code>WebAuthn オーセンティケーター</code></td><td><code>WebAuthn パスワードレス認証システム</code></td></tr>
<tr><td><strong>ポリシー</strong></td><td>Web認証ポリシー</td><td>WebAuthn パスワードレス ポリシー</td></tr>
<tr><td><strong>必要なアクション</strong></td><td>Web認証登録</td><td>WebAuthn パスワードレス登録</td></tr>
<tr><td><strong>常駐キー</strong></td><td>オプション</td><td>検出可能な資格情報</td></tr>
<tr><td><strong>ユーザー認証</strong></td><td>オプション</td><td>必須 (生体認証/PIN)</td></tr>
</tbody>
</table>

<h3 id="42-enable-passkeys"><strong>4.2 パスキーを有効にする</strong></h3>

<p><strong>ステップ 1: WebAuthn パスワードレスポリシーを構成する</strong></p>

<ol>
<li>入力<strong>認証 → ポリシー → WebAuthn パスワードレスポリシー</strong></li>
<li>構成：<ul>
    <li><strong>証明書利用者エンティティ名</strong>: <code>私の会社</code></li>
    <li><strong>署名アルゴリズム</strong>: <code>ES256</code></li>
    <li><strong>ユーザー認証要件</strong>: <code>必須。必須</code></li>
    <li><strong>常駐キーが必要です</strong>: <code>はい</code>— パスキーに必要</li>
    </ul>
</li>
</ol>

<p><strong>ステップ 2: パスワードレスのブラウザ フローを作成する</strong></p>

<pre><code>Passwordless Browser Flow
├── Cookie (Alternative)
└── Passwordless Login (Alternative)
    ├── WebAuthn Passwordless Authenticator (Alternative)  → Đăng nhập bằng Passkey
    └── Username Password Fallback (Alternative)           → Sub-flow fallback
        ├── Username Password Form (Required)
        └── Conditional OTP (Conditional)
            ├── Condition - User Configured (Required)
            └── OTP Form (Required)</code></pre>

<p><strong>ステップ 3: 必須アクションをオンにする</strong></p>

<ol>
<li>入力<strong>認証 → 必要なアクション</strong></li>
<li>オンにする<strong>WebAuthn パスワードレス登録</strong>→ デフォルトのアクション: オン</li>
</ol>

<h3 id="43-passkey-ui-modes"><strong>4.3 パスキー UI モード — 条件付きおよびモーダル</strong></h3>

<p><strong>条件付き UI (自動入力):</strong></p>
<p>パスキーはユーザー名フィールドに自動的に提案されます。ユーザーは選択するだけで生体認証を使用して認証できます。これが最もスムーズな体験です。</p>

<p>条件付き UI を有効にするには、次のように設定します。<code>WebAuthn パスワードレス認証システム</code>要件のあるフローの最初の位置にあります<code>代替</code>.</p>

<p><strong>モーダル UI:</strong></p>
<p>ブラウザに、Passkey による認証を求めるダイアログが表示されます。ユーザーはダイアログを操作する必要があります。明示的な UX が必要な場合に使用されます。</p>

<h3 id="44-dang-ky-passkey-qua-aia"><strong>4.4 AIA (アプリケーション開始アクション) 経由でのパスキーの登録</strong></h3>

<p>ユーザーは、AIA リンク経由でいつでも Passkey に登録できます。</p>

<pre><code class="language-bash"># AIA URL để trigger Passkey registration
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  redirect_uri=https://myapp.example.com/callback&
  response_type=code&
  scope=openid&
  kc_action=webauthn-register-passwordless</code></pre>

<p><strong>存在する場合はスキップします:</strong>ユーザーがすでにパスキーを持っている場合に登録をスキップしたい場合:</p>

<pre><code class="language-bash"># Thêm parameter skip_if_exists
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  redirect_uri=https://myapp.example.com/callback&
  response_type=code&
  scope=openid&
  kc_action=webauthn-register-passwordless&
  kc_action_parameter=skip_if_exists</code></pre>

<p><strong>JavaScript の統合:</strong></p>

<pre><code class="language-javascript">// Sử dụng keycloak-js adapter
const keycloak = new Keycloak({
  url: 'https://keycloak.example.com',
  realm: 'myrealm',
  clientId: 'my-app'
});

// Trigger Passkey registration
function registerPasskey() {
  keycloak.login({
    action: 'webauthn-register-passwordless'
  });
}

// Button trong UI
document.getElementById('registerPasskeyBtn')
  .addEventListener('click', registerPasskey);</code></pre>

<h2 id="5-kerberos-authentication"><strong>5.ケルベロス認証</strong></h2>

<p>ケルベロスが許可されています<strong>自動シングルサインオン</strong>ドメインにログインしているユーザーの場合 (Windows AD、MIT Kerberos)。ユーザーは資格情報を入力する必要はありません。ブラウザーが自動的に Kerberos チケットを送信します。</p>

<h3 id="51-kerberos-server-setup"><strong>5.1 Kerberosサーバーのセットアップ</strong></h3>

<p>リクエスト：</p>
<ul>
<li>KDC (キー配布センター) の実行 - Active Directory または MIT Kerberos</li>
<li>Keycloak サービスの SPN (サービス プリンシパル番号)</li>
<li>Keycloak用のKeytabファイル</li>
</ul>

<pre><code class="language-bash"># Tạo SPN và keytab cho Keycloak (MIT Kerberos)
kadmin -q "addprinc -randkey HTTP/keycloak.example.com@EXAMPLE.COM"
kadmin -q "ktadd -k /etc/keycloak/keycloak.keytab HTTP/keycloak.example.com@EXAMPLE.COM"

# Đặt permission
chmod 600 /etc/keycloak/keycloak.keytab
chown keycloak:keycloak /etc/keycloak/keycloak.keytab</code></pre>

<h3 id="52-keycloak-kerberos-config"><strong>5.2 Kerberos 用の Keycloak の構成</strong></h3>

<p><strong>オプション 1: Kerberos ユーザー ストレージ プロバイダー</strong></p>

<ol>
<li>入力<strong>ユーザーフェデレーション → プロバイダーの追加 → Kerberos</strong></li>
<li>構成：<ul>
    <li><strong>ケルベロスレルム</strong>: <code>例.com</code></li>
    <li><strong>サーバープリンシパル</strong>: <code>HTTP/keycloak.example.com@EXAMPLE.COM</code></li>
    <li><strong>キータブ</strong>: <code>/etc/keycloak/keycloak.keytab</code></li>
    <li><strong>Kerberos認証を許可する</strong>：の上</li>
    <li><strong>パスワード認証に Kerberos を使用する</strong>：の上</li>
    <li><strong>初回ログインの更新</strong>：の上</li>
    </ul>
</li>
</ol>

<p><strong>オプション 2: LDAP + Kerberos (Active Directory)</strong></p>

<ol>
<li>入力<strong>ユーザーフェデレーション → プロバイダーの追加 → LDAP</strong></li>
<li>AD の LDAP 接続を構成する</li>
<li>項目を有効にする<strong>Kerberos認証を許可する</strong></li>
<li>Kerberos レルム、サーバー プリンシパル、キー タブを入力します。</li>
</ol>

<h3 id="53-bat-kerberos-trong-browser-flow"><strong>5.3 ブラウザフローで Kerberos を有効にする</strong></h3>

<ol>
<li>入力<strong>認証 → フロー → ブラウザ</strong>(またはカスタムフロー)</li>
<li>探す<strong>ケルベロス</strong>実行。実行</li>
<li>要件の変更<code>無効</code>豪華な<code>代替</code></li>
</ol>

<pre><code>Browser Flow (Kerberos enabled)
├── Cookie (Alternative)
├── Kerberos (Alternative)                    ← BẬT lên
├── Identity Provider Redirector (Alternative)
└── Forms (Alternative)
    ├── Username Password Form (Required)
    └── Browser - Conditional OTP (Conditional)
        ├── Condition - User Configured (Required)
        └── OTP Form (Required)</code></pre>

<h3 id="54-cross-realm-trust"><strong>5.4 レルム間の信頼</strong></h3>

<p>ある Kerberos レルムのユーザーが別のレルムを信頼できるようにします。</p>

<pre><code class="language-ini"># /etc/krb5.conf trên Keycloak server
[libdefaults]
    default_realm = CORP.EXAMPLE.COM
    dns_lookup_realm = false
    dns_lookup_kdc = false

[realms]
    CORP.EXAMPLE.COM = {
        kdc = dc1.corp.example.com
        admin_server = dc1.corp.example.com
    }
    PARTNER.EXAMPLE.COM = {
        kdc = kdc.partner.example.com
    }

[capaths]
    PARTNER.EXAMPLE.COM = {
        CORP.EXAMPLE.COM = .
    }</code></pre>

<h2 id="6-x509-client-certificate"><strong>6. X.509 クライアント証明書認証</strong></h2>

<p>X.509 では、次を使用した認証が可能です。<strong>クライアント証明書</strong>— 企業、政府、または mTLS 環境で一般的です。</p>

<h3 id="61-them-x509-vao-browser-flow"><strong>6.1 ブラウザフローへの X.509 の追加</strong></h3>

<ol>
<li>複製ブラウザのフロー →<code>X.509を搭載したブラウザ</code></li>
<li>もっと<code>X509/ユーザー名検証フォーム</code>流れの中へ</li>
</ol>

<pre><code>Browser with X.509
├── Cookie (Alternative)
├── X509/Validate Username Form (Alternative)  ← Thêm mới
├── Identity Provider Redirector (Alternative)
└── Forms (Alternative)
    ├── Username Password Form (Required)
    └── Browser - Conditional OTP (Conditional)
        ├── Condition - User Configured (Required)
        └── OTP Form (Required)</code></pre>

<h3 id="62-x509-configuration"><strong>6.2 X.509 オーセンティケータの構成</strong></h3>

<p>横にある⚙️をクリックしてください<code>X509/ユーザー名検証フォーム</code>:</p>

<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>例えば</th></tr>
</thead>
<tbody>
<tr><td><strong>ユーザー ID ソース</strong></td><td>ユーザーを識別するための証明書のフィールド</td><td><code>被験者の通称</code>, <code>件名の電子メール</code></td></tr>
<tr><td><strong>ソースとユーザー属性のマッピング</strong></td><td>ID ソースをユーザー属性にマップする</td><td><code>ユーザー名またはメールアドレス</code></td></tr>
<tr><td><strong>正規表現</strong></td><td>正規表現は証明書フィールドから ID を抽出します</td><td><code>CN=(.*?)(?:,\|$)</code></td></tr>
<tr><td><strong>CRL チェックが有効になっています</strong></td><td>証明書失効リストを確認する</td><td><code>の上</code></td></tr>
<tr><td><strong>CRL配布ポイント</strong></td><td>CRL への URL またはパス</td><td><code>ldap://ca.example.com/CN=...</code></td></tr>
<tr><td><strong>OCSPチェックが有効です</strong></td><td>オンライン証明書ステータスの確認プロトコル</td><td><code>の上</code></td></tr>
<tr><td><strong>OCSP レスポンダー URI</strong></td><td>OCSP レスポンダ URL</td><td><code>http://ocsp.example.com</code></td></tr>
<tr><td><strong>証明書キーの使用法</strong></td><td>キーの使用法が必要です</td><td><code>デジタル署名</code></td></tr>
<tr><td><strong>証明書の拡張キーの使用法</strong></td><td>拡張キーの使用法</td><td><code>クライアント認証</code></td></tr>
<tr><td><strong>証明書ポリシー検証モード</strong></td><td>証明書ポリシーを検証する</td><td><code>指定されていない</code></td></tr>
</tbody>
</table>

<h3 id="63-certificate-mapping-strategies"><strong>6.3 証明書マッピング戦略</strong></h3>

<p>証明書を Keycloak ユーザーにマッピングするには、さまざまな方法があります。</p>

<pre><code class="language-text"># 1. Subject's Common Name → Username
# Certificate: CN=john.doe, OU=Engineering, O=Example Corp
# → username: john.doe

# 2. Subject's e-mail → Email
# Certificate: emailAddress=john@example.com
# → email: john@example.com

# 3. Serial Number → User Attribute
# Certificate: Serial=1A2B3C4D
# → user attribute "x509_serial" = "1A2B3C4D"

# 4. SHA-256 Certificate Thumbprint → User Attribute
# Certificate SHA-256: ab:cd:ef:12:34:...
# → user attribute "x509_thumbprint" = "ab:cd:ef:12:34:..."

# 5. Subject's DN với regex
# Certificate: CN=john.doe, OU=Engineering, O=Example Corp, C=VN
# Regex: CN=(.*?)(?:,|$)
# → Extracted: john.doe</code></pre>

<h3 id="64-crl-va-ocsp"><strong>6.4 CRL と OCSP のチェック</strong></h3>

<p>証明書が失効していないことを確認するには:</p>

<p><strong>CRL (証明書失効リスト):</strong></p>
<ul>
<li>Keycloakは設定されたURIからCRLをダウンロードしてキャッシュします</li>
<li>クライアント証明書のシリアル番号が CRL にあるかどうかを確認します</li>
<li>CRL が利用できない場合、および<code>CRLチェック有効=オン</code>→認証に失敗しました</li>
</ul>

<p><strong>OCSP (オンライン証明書ステータス プロトコル):</strong></p>
<ul>
<li>証明書のステータスをリアルタイムで確認</li>
<li>KeycloakはOCSPレスポンダーにリクエストを送信します</li>
<li>個別のチェックでは CRL よりも高速</li>
<li>短所: OCSP サーバーの可用性によって異なります。</li>
</ul>

<pre><code class="language-bash"># Test OCSP check
openssl ocsp \
  -issuer ca.pem \
  -cert client.pem \
  -url http://ocsp.example.com \
  -resp_text

# Test certificate info
openssl x509 -in client.pem -noout -subject -serial -fingerprint -sha256</code></pre>

<h3 id="65-keycloak-mtls-setup"><strong>6.5 Keycloak mTLS セットアップ</strong></h3>

<p>Keycloakがクライアント証明書を受信できるようにするには、リバースプロキシまたはKeycloakを直接構成する必要があります。</p>

<pre><code class="language-yaml"># Docker Compose — Keycloak với mTLS qua nginx
services:
  nginx:
    image: nginx:latest
    ports:
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
      - ./certs/server.crt:/etc/nginx/certs/server.crt
      - ./certs/server.key:/etc/nginx/certs/server.key
      - ./certs/ca.crt:/etc/nginx/certs/ca.crt
    depends_on:
      - keycloak

  keycloak:
    image: quay.io/keycloak/keycloak:26.0
    command: start --proxy-headers xforwarded
    environment:
      KC_HOSTNAME: keycloak.example.com
      KC_HTTP_ENABLED: "true"
      KC_PROXY_HEADERS: xforwarded
      KEYCLOAK_ADMIN: admin
      KEYCLOAK_ADMIN_PASSWORD: admin</code></pre>

<pre><code class="language-nginx"># nginx.conf — Forward client certificate
server {
    listen 443 ssl;
    server_name keycloak.example.com;

    ssl_certificate /etc/nginx/certs/server.crt;
    ssl_certificate_key /etc/nginx/certs/server.key;
    ssl_client_certificate /etc/nginx/certs/ca.crt;
    ssl_verify_client optional;

    location / {
        proxy_pass http://keycloak:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port 443;
        
        # Forward client certificate
        proxy_set_header ssl-client-cert $ssl_client_escaped_cert;
    }
}</code></pre>

<h2 id="7-so-sanh-phuong-thuc-mfa"><strong>7. MFA メソッドの比較</strong></h2>

<table>
<thead>
<tr><th>方法</th><th>安全</th><th>UX</th><th>フィッシング耐性</th><th>ユースケース</th></tr>
</thead>
<tbody>
<tr><td><strong>TOTP/HOTP</strong></td><td>中くらい</td><td>良い</td><td>そうではない</td><td>人気があり、導入が簡単</td></tr>
<tr><td><strong>ウェブ認証 (MFA)</strong></td><td>高い</td><td>良い</td><td>持っている</td><td>エンタープライズ、コンプライアンス</td></tr>
<tr><td><strong>パスキー</strong></td><td>非常に高い</td><td>素晴らしい</td><td>持っている</td><td>消費者 + 企業</td></tr>
<tr><td><strong>ケルベロス</strong></td><td>高い</td><td>透明</td><td>はい (ドメイン)</td><td>エンタープライズ、Windows ドメイン</td></tr>
<tr><td><strong>X.509証明書</strong></td><td>非常に高い</td><td>透明</td><td>持っている</td><td>政府、軍、銀行</td></tr>
</tbody>
</table>

<h2 id="8-tom-tat"><strong>8. まとめ</strong></h2>

<table>
<thead>
<tr><th>コンセプト</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td><strong>OTP ポリシー</strong></td><td>TOTP/HOTP 構成 — アルゴリズム、数字、ピリオド、先読み</td></tr>
<tr><td><strong>リカバリーコード</strong></td><td>OTPデバイス紛失時のバックアップコード</td></tr>
<tr><td><strong>ウェブ認証</strong></td><td>FIDO2 セキュリティ キー — フィッシング耐性のある MFA</td></tr>
<tr><td><strong>パスキー</strong></td><td>パスワードレス認証 — 検出可能な資格情報 + 生体認証</td></tr>
<tr><td><strong>ケルベロス</strong></td><td>ドメイン ユーザー向けの透過的 SSO</td></tr>
<tr><td><strong>X.509</strong></td><td>クライアント証明書認証 - mTLS</td></tr>
<tr><td><strong>CRL/OCSP</strong></td><td>証明書失効チェック</td></tr>
</tbody>
</table>
