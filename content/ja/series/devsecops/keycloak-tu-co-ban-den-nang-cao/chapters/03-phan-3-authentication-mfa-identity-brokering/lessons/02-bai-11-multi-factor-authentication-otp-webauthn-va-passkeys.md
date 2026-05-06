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
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">_Keycloak の基本から高度なもの__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 認証、MFA、および ID ブローカリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-otp-authentication"><strong>1. OTP 認証 — TOTP および HOTP</strong></h2>

<p>OTP (ワンタイム パスワード) は、最も一般的な MFA 方式です。 Keycloakは2つのタイプをサポートしています:</p>

<table>
<thead>
<tr><th>タイプ_</th><th>説明_</th><th>アルゴリズム_</th></tr>
</thead>
<tbody>
<tr><td><strong>TOTP</strong> (時間ベース)</td><td>OTP コードは時間の経過とともに変更されます (30 秒ごと)</td><td>RFC 6238</td></tr>
<tr><td><strong>HOTP</strong> (HMAC ベース)</td><td>カウンターに応じて OTP コードが変更</td><td>RFC 4226</td></tr>
</tbody>
</table>

<p><strong>TOTP はより安全であるため推奨</strong> - コードは時間の経過とともに期限切れになります。 HOTP は、デバイスが正確なクロックをサポートしていない場合にのみ使用されます。</p>

<h3 id="11-otp-policy"><strong>1.1 OTP ポリシー構成</strong></h3>

<p>__HTMLTAG_116___認証 → ポリシー → OTP ポリシー</strong>:</p> で OTP ポリシーを構成します<table>
<thead>
<tr><th>設定_</th><th>説明_</th><th>デフォルト値</th><th>推奨_</th></tr>
</thead>
<tbody>
<tr><td><strong>OTP タイプ</strong></td><td>TOTP またはHOTP_</td><td><code>totp</code></td><td><code>_totp</code></td></tr>
<tr><td><strong>OTP ハッシュ アルゴリズム</strong></td><td>アルゴリズムハッシュ_</td><td><code>SHA1_</code></td><td><code>_SHA256</code> または <code>SHA512</code></td></tr>
<tr><td><strong>桁数</strong></td><td>桁数OTP</td><td><code>6</code></td><td><code>6</code> (最高の互換性)</td></tr>
<tr><td><strong>先読みウィンドウ</strong></td><td>前/次のコード番号を受け入れましたget</td><td><code>1</code></td><td><code>1_</code> — ユーザーが頻繁に時間エラーを起こす場合に増加</td></tr>
<tr><td><strong>OTP トークン期間</strong></td><td>コードごとの有効期間 (秒) — のみTOTP</td><td><code>30_</code></td><td><code>_30</code></td></tr>
<tr><td><strong>初期カウンタ</strong></td><td>初期カウンタのみHOTP_</td><td><code>0</code></td><td><code>0</code></td></tr>
<tr><td><strong>サポートされているアプリケーション_</strong></td><td>セットアップ手順に表示されているアプリ</td><td>FreeOTP、Google Authenticator</td><td>さらにアプリを追加してください必要</td></tr>
</tbody>
</table>

<h3 id="12-setup-google-authenticator"><strong>1.2 Google Authenticator / FreeOTP を使用した OTP のセットアップ</strong></h3>

<p><strong>ステップ 1: 認証フローで OTP を有効にする</strong></p>

<p>デフォルトでは、ブラウザ フローにはすでに <code>ブラウザ - 条件付き OTP</code> サブフローがあります。 OTP は、ユーザーが OTP 資格情報を設定した場合にのみ必要です。 <strong>必須</strong> するには、すべてのユーザーが OTP を設定する必要があります:</p><ol>
<li>__HTMLTAG_261___認証 → 必要なアクション___HTMLTAG_262__HTMLTAG_263___ に移動します
<li>検索__HTMLTAG_265___OTPの構成___HTMLTAG_266__HTMLTAG_267___
<li>オン <strong>デフォルト アクション</strong>: オン — すべての新規ユーザーは OTP</li> を設定する必要があります
<li>または、「デフォルトのアクションとして設定」列で__HTMLTAG_273___必須</strong>をオンにして、既存のユーザーに適用します</li>
</ol>

<p><strong>ステップ 2: ユーザーが OTP を登録</strong></p>

<p>ユーザーが初めてログインするとき (または管理者が必須アクションを有効にした後):</p>

<ol>
<li>Keycloak にページ__HTMLTAG_285___「モバイル認証システムのセットアップ」___HTMLTAG_286__HTMLTAG_287___ が表示されます
<li>ユーザーが Google Authenticator または FreeOTP アプリを開く</li>
<li>QR コードをスキャンするか、手動キーを入力してください</li>
<li>アプリから確認 OTP コードを入力</li>
<li>ユーザー</li>のOTP認証情報が保存されました
</ol>

<p><strong>ステップ 3: OTP 認証</strong></p>

<p>次回のログインから、ユーザー名/パスワードを入力した後、ユーザーはアプリから OTP コードを入力する必要があります。</p>

<h3 id="13-quan-ly-otp-credentials"><strong>_1.3 OTP認証情報の管理</strong></h3>

___プレコード_0___

<h2 id="2-recovery-codes"><strong>2.回復コード_</strong></h2>

<p>_リカバリ コードを使用すると、ユーザーは OTP デバイスを紛失した場合にアクセスを復元できます。</p>

<h3 id="21-bat-recovery-codes"><strong>2.1 リカバリ コードを有効にする</strong></h3>

<ol>
<li>__HTMLTAG_319___認証 → 必要なアクション</strong></li> に移動します
<li>__HTMLTAG_323___回復認証コードを検索</strong> (そうでない場合は登録する必要があります)</li>
<li>有効__HTMLTAG_327___デフォルトアクション</strong>または__HTMLTAG_329___有効</strong></li>
</ol>

<p><strong>OTP セットアップ後にリカバリ コードを適用する:</strong></p>

<p>OTP の設定直後にユーザーにリカバリ コードの作成を強制するには、次の順序で必須アクションを構成します:</p>

<ol>
<li><code>CONFIGURE_TOTP</code> — 最初に OTP をセットアップ</li>
<li><code>CONFIGURE_RECOVERY_AUTHN_CODES</code> — 次のリカバリ コードを生成</li>
</ol>

<h3 id="22-su-dung-recovery-codes"><strong>_2.2 リカバリ コードの使用</strong></h3>

<p>ユーザーがデバイス OTP を紛失した場合:</p>

<ol>
<li>OTP 入力画面で、__HTMLTAG_357___「別の方法を試す」</strong></li> をクリックします。
<li>__HTMLTAG_361___「回復コード」___HTMLTAG_362__HTMLTAG_363___ を選択してください
<li>保存されている回復コードのいずれかを入力</li>
<li>各コードは 1 回のみ使用可能 <strong>1 回のみ</strong></li>
<li>すべてのコードを使用した後、再生成する必要があります</li>
</ol>

<h2 id="3-webauthn-fido2"><strong>3. WebAuthn (FIDO2) — セキ​​ュリティ キー</strong></h2><p>WebAuthn では、__HTMLTAG_378___ハードウェア セキュリティ キー</strong> (YubiKey、Google Titan) または <strong>プラットフォーム認証コード</strong> (Touch ID、Windows Hello) を使用した認証が可能です。</p>

<h3 id="31-setup-webauthn"><strong>3.1 ブラウザ フローでの WebAuthn のセットアップ</strong></h3>

<p><strong>ステップ 1: WebAuthn を認証フローに追加</strong></p>

<ol>
<li>重複ブラウザ フロー → <code>WebAuthn を使用したブラウザ</code></li>
<li>フォーム サブフローで、__HTMLTAG_397___WebAuthn Authenticator</code></li> を追加します。
<li>フロー構造:
___プレコード_1___
</li>
<li>バインド フロー: <strong>認証 → バインディング → ブラウザ フロー = WebAuthn を備えたブラウザ</strong></li>
</ol>

<p><strong>ステップ 2: 必要なアクションをオンにする</strong></p>

<ol>
<li>__HTMLTAG_413___認証 → 必要なアクション___HTMLTAG_414__HTMLTAG_415___ に移動します
<li>__HTMLTAG_417___WebAuthn 登録</strong> を検索<strong>デフォルト アクション</strong></li> を有効にする
<li>新規ユーザーはセキュリティ キーの登録を求められます</li>
</ol>

<h3 id="32-webauthn-policy"><strong>_3.2 WebAuthn ポリシーの構成</strong></h3>

<p>__HTMLTAG_430で設定___認証→ポリシー→WebAuthnポリシー</strong>:</p><table>
<thead>
<tr><th>設定</th><th>説明</th><th>値</th></tr>
</thead>
<tbody>
<tr><td><strong>証明書利用者エンティティ名</strong></td><td>ユーザーの表示名</td><td><code>Keycloak</code> または会社名</td></tr>
<tr><td><strong>署名アルゴリズム_</strong></td><td>レターアルゴリズムsign</td><td><code>ES256</code> (推奨)、 <code>_RS256</code></td></tr>
<tr><td><strong>証明書利用者ID</strong></td><td>Keycloakのドメイン_</td><td><code>keycloak.example.com</code> (または空白のままにします =自動)_</td></tr>
<tr><td><strong>認証伝達の優先_</strong></td><td>キーからの認証要求_</td><td><code>指定なし</code> または<code>直接</code></td></tr>
<tr><td><strong>認証子の添付</strong></td><td>認証子のタイプ_</td><td><code>指定なし</code> (USBキーとプラットフォームの両方を受け入れます)</td></tr>
<tr><td><strong>常駐キーが必要</strong></td><td>キーはデバイスに保存する必要があります</td><td><code>指定なし</code></td></tr>
<tr><td><strong>ユーザー認証要件</strong></td><td>デバイスでのユーザー認証が必要</td><td><code>指定なし</code> または<code>必須_</code></td></tr>
<tr><td><strong>作成タイムアウト</strong></td><td>キー登録時のタイムアウト (秒)</td><td><code>0</code> (いいえタイムアウト)</td></tr>
<tr><td><strong>同じ認証子の登録を避ける</strong></td><td>同じキーでの登録を 2 回避ける</td><td><code>オフ</code></td></tr>
<tr><td><strong>許容可能な AAGUID</strong></td><td>ホワイトリスト セキュリティ キー モデル</td><td>空白のままにする = すべてを受け入れる</td></tr>
</tbody>
</table>

<h3 id="33-quan-ly-webauthn-credentials"><strong>_3.3 WebAuthn 資格情報の管理</strong></h3>

___プレコード_2___

<p>ユーザーは、__HTMLTAG_576___アカウント コンソール</strong> (__HTMLTAG_578___/realms/myrealm/account/#/security/webauthn</code>.</p>) でセキュリティ キーを自分で管理することもできます。<h2 id="4-passkeys"><strong>_4.パスキー</strong></h2>

<p>Passkeys は、WebAuthn の次の進化版であり、指紋、顔認識、またはデバイス PIN を使用した <strong>パスワードなしのログイン__HTMLTAG_587___ (パスワードなし) を可能にします。</p>

<h3 id="41-passkeys-vs-webauthn"><strong>4.1 パスキーと従来の WebAuthn</strong></h3>

<table>
<thead>
<tr><th>機能_</th><th>WebAuthn (MFA)</th><th>パスキー(パスワードレス)_</th></tr>
</thead>
<tbody>
<tr><td><strong>目的_</strong></td><td>MFA — パスワードの後にステップを追加_</td><td>パスワードを完全に置き換え__HTMLTAG_613___</tr>
<tr><td><strong>Authenticator</strong></td><td><code>WebAuthn Authenticator_</code></td><td><code>WebAuthn パスワードレス認証者_</code></td></tr>
<tr><td><strong>ポリシー</strong></td><td>WebAuthnポリシー</td><td>WebAuthnパスワードレスポリシー</td></tr>
<tr><td><strong>_必須アクション</strong></td><td>_WebAuthn 登録_</td><td>WebAuthn パスワードレス登録</td></tr>
<tr><td><strong>常駐キー_</strong></td><td>_オプション</td><td>検出可能な資格情報)</td></tr>
<tr><td><strong>ユーザー認証</strong></td><td>設定_</td><td>必須 (生体認証/PIN)</td></tr>
</tbody>
</table>

<h3 id="42-enable-passkeys"><strong>_4.2 パスキーを有効にする</strong></h3>

<p><strong>ステップ 1: WebAuthn パスワードレス ポリシーを構成する</strong></p>

<ol>
<li>__HTMLTAG_681___認証 → ポリシー → WebAuthn パスワードレス ポリシーに移動</strong></li>
<li>構成:
    <ul>
    <li><strong>_証明書利用者エンティティ名</strong>: <code>私の会社</code></li>
    <li><strong>署名アルゴリズム</strong>: <code>ES256___HTMLTAG_696__HTMLTAG_697___
    <li><strong>_ユーザー認証要件</strong>: <code>必須</code></li>
    <li><strong>常駐キーが必要</strong>: <code>はい</code> — パスキーに必須</li>
    </ul>
</li>
</ol>

<p><strong>ステップ 2: パスワードなしのブラウザ フローの作成</strong></p>

___プレコード_3___

<p><strong>ステップ 3: 必要なアクションをオンにする</strong></p><ol>
<li>__HTMLTAG_723___認証 → 必要なアクション___HTMLTAG_724__HTMLTAG_725___ に移動します
<li>オン <strong>WebAuthn パスワードなし登録</strong> → デフォルトのアクション: オン</li>
</ol>

<h3 id="43-passkey-ui-modes"><strong>4.3 パスキー UI モード - 条件付きおよびモーダル</strong></h3>

<p><strong>条件付き UI (自動入力):</strong></p>
<p>_パスキーはユーザー名フィールドに自動的に提案されます。ユーザーは選択するだけで生体認証を使用して認証することができます。これが最もスムーズなエクスペリエンスです。</p>

<p>条件付き UI を有効にするには、__HTMLTAG_742___WebAuthn Passwordless Authenticator</code> を要件_<code>Alternative</code> とともにフローの最初に配置します。</p>

<p><strong>モーダル UI:</strong></p>
<p>ブラウザにパスキー認証を求めるダイアログが表示されます。ユーザーはダイアログを操作する必要があります。明示的な UX が必要な場合に使用します。</p>

<h3 id="44-dang-ky-passkey-qua-aia"><strong>4.4 AIA 経由でのパスキーの登録 (アプリケーション開始アクション)</strong></h3>

<p>ユーザーは、AIA リンクからいつでもパスキーに登録できます:</p>

___プレコード_4___

<p><strong>存在する場合はスキップ:</strong> ユーザーがすでにパスキーを持っている場合に登録をスキップする場合:</p>

___プレコード_5___

<p><strong>JavaScript の統合:</strong></p>

___プレコード_6___

<h2 id="5-kerberos-authentication"><strong>5. Kerberos 認証</strong></h2>

<p>Kerberos により、ドメイン (Windows AD、MIT Kerberos) にログインしているユーザーに対して__HTMLTAG_772___シングル サインオンが自動的に__HTMLTAG_773___ 可能になります。ユーザーは資格情報を入力する必要はありません。ブラウザーが自動的に Kerberos チケットを送信します。</p>

<h3 id="51-kerberos-server-setup"><strong>5.1 Kerberos サーバーのセットアップ</strong></h3>

<p>リクエスト:</p>
<ul>
<li>KDC (キー配布センター) の実行 - Active Directory または MIT Kerberos</li>
<li>Keycloak サービスの SPN (サービス プリンシパル番号)</li>
<li>Keycloak の Keytab ファイル</li>
</ul>

___プレコード_7___

<h3 id="52-keycloak-kerberos-config"><strong>5.2 Kerberos 用の Keycloak の構成</strong></h3>

<p><strong>オプション 1: Kerberos ユーザー ストレージ プロバイダ</strong></p><ol>
<li><strong>ユーザー フェデレーション → プロバイダーの追加 → Kerberos</strong></li> に移動します。
<li>構成:
    <ul>
    <li><strong>_Kerberos レルム</strong>: <code>EXAMPLE.COM</code></li>
    <li><strong>サーバー プリンシパル</strong>: <code>HTTP/keycloak.example.com@EXAMPLE.COM</code></li>
    <li><strong>_キータブ</strong>: <code>/etc/keycloak/keycloak.keytab</code></li>
    <li><strong>Kerberos 認証を許可</strong>: オン</li>
    <li><strong>パスワード認証に Kerberos を使用</strong>: オン</li>
    <li><strong>最初のログインを更新</strong>: オン</li>
    </ul>
</li>
</ol>

<p><strong>オプション 2: LDAP + Kerberos (Active Directory)</strong></p>

<ol>
<li>__HTMLTAG_843___ユーザー フェデレーション → プロバイダーの追加 → LDAP</strong></li> に移動します。
<li>AD の LDAP 接続を構成</li>
<li>有効にする <strong>Kerberos 認証を許可する___HTMLTAG_850__HTMLTAG_851___
<li>Kerberos レルム、サーバー プリンシパル、キー タブを入力</li>
</ol>

<h3 id="53-bat-kerberos-trong-browser-flow"><strong>5.3 ブラウザ フローで Kerberos を有効にする</strong></h3>

<ol>
<li>__HTMLTAG_861___認証 → フロー → ブラウザ</strong> (またはカスタム フロー)</li> に移動します。
<li>検索__HTMLTAG_865___ケルベロス</strong>実行</li>
<li>要件を <code>無効</code> から <code>代替___HTMLTAG_872__HTMLTAG_873___ に変更します
</ol>

___プレコード_8___

<h3 id="54-cross-realm-trust"><strong>_5.4 クロスレルムの信頼</strong></h3>

<p>ある Kerberos レルムのユーザーが別のレルムを信頼できるようにする:</p>

___プレコード_9___

<h2 id="6-x509-client-certificate"><strong>_6. X.509 クライアント証明書認証_</strong></h2>

<p>X.509 では、__HTMLTAG_886___クライアント証明書</strong> を使用した認証が可能になります。これは、企業、政府機関、または mTLS 環境で一般的です。</p>

<h3 id="61-them-x509-vao-browser-flow"><strong>6.1 ブラウザ フローに X.509 を追加</strong></h3>

<ol>
<li>重複ブラウザ フロー → <code>X.509 を搭載したブラウザ___HTMLTAG_896__HTMLTAG_897___
<li>__HTMLTAG_899___X509/ユーザー名検証フォーム</code> をフロー</li> に追加します
</ol>

___プレコード_10___

<h3 id="62-x509-configuration"><strong>6.2 X.509 オーセンティケータの構成</strong></h3>

<p>_<code>X509/ユーザー名フォームの検証</code>:</p> の横にある⚙️ をクリックします<table>
<thead>
<tr><th>設定_</th><th>説明_</th><th>例_</th></tr>
</thead>
<tbody>
<tr><td><strong>User Identity Source</strong></td><td>Field in certificate to identify user</td><td><code>_Subject's Common Name</code>, <code>Subject's電子メール_</code></td></tr>
<tr><td><strong>Mapping Source to User Attribute</strong></td><td>Map identity source to user attribute_</td><td><code>Username or Email</code></td></tr>
<tr><td><strong>A regular expression</strong></td><td>Regex extract identity from certフィールド_</td><td><code>CN=(.*?)(?:,\|$)</code></td></tr>
<tr><td><strong>CRL チェックが有効</strong></td><td>証明書失効リストの確認</td><td><code>On</code></td></tr>
<tr><td><strong>CRL 配布ポイント</strong></td><td>URL またはパスCRL</td><td><code>ldap://ca.example.com/CN=...</code></td></tr>
<tr><td><strong>OCSP Checking Enabled</strong></td><td>Check Online Certificate Status Protocol</td><td><code>On</code></td></tr>
<tr><td><strong>OCSP Responder URI</strong></td><td>OCSP responder URL</td><td><code>http://ocsp.example.com</code></td></tr>
<tr><td><strong>証明書キーの使用法</strong></td><td>キーの使用法が必要です強制_</td><td><code>デジタル署名_</code></td></tr>
<tr><td><strong>証明書拡張キーの使用</strong></td><td>拡張キー使用法_</td><td><code>clientAuth</code></td></tr>
<tr><td><strong>証明書ポリシー検証モード</strong></td><td>証明書ポリシーを検証_</td><td><code>なし指定済み</code></td></tr>
</tbody>
</table>

<h3 id="63-certificate-mapping-strategies"><strong>6.3 証明書マッピング戦略</strong></h3>

<p>証明書を Keycloak ユーザーにマッピングするには、さまざまな方法があります:</p>

___プレコード_11___

<h3 id="64-crl-va-ocsp"><strong>6.4 CRL および OCSP のチェック</strong></h3>

<p>証明書が取り消されていないことを確認するには:</p><p><strong>CRL (証明書失効リスト):</strong></p>
<ul>
<li>Keycloak は設定された URI から CRL をダウンロードしてキャッシュします</li>
<li>クライアント証明書のシリアル番号が CRL__HTMLTAG_1066___ に含まれているかどうかを確認してください
<li>CRL が利用できず、__HTMLTAG_1068___CRL チェックが有効 = オン</code> の場合 → 認証が失敗しました</li>
</ul>

<p><strong>OCSP (オンライン証明書ステータス プロトコル):</strong></p>
<ul>
<li>証明書のステータスをリアルタイムで確認</li>
<li>Keycloak が OCSP レスポンダーにリクエストを送信__HTMLTAG_1080___
<li>個別のチェックでは CRL より高速</li>
<li>欠点: OCSP サーバーの可用性によって異なります</li>
</ul>

___プレコード_12___

<h3 id="65-keycloak-mtls-setup"><strong>6.5 Keycloak mTLS セットアップ</strong></h3>

<p>Keycloak がクライアント証明書を受信するには、リバース プロキシまたは Keycloak を直接設定する必要があります:</p>

___プレコード_13___

___プレコード_14___

<h2 id="7-so-sanh-phuong-thuc-mfa"><strong>7。 MFA メソッドの比較</strong></h2>

<table>
<thead>
<tr><th>方法</th><th>セキュリティ機密</th><th>UX</th><th>フィッシング耐性</th><th>使用case_</th></tr>
</thead>
<tbody>
<tr><td><strong>TOTP/HOTP</strong></td><td>中央平均</td><td>良い</td><td>いいえ</td><td>人気があり導入が簡単</td></tr>
<tr><td><strong>WebAuthn (MFA)_</strong></td><td>高</td><td>_良い</td><td>はい</td><td>エンタープライズ、コンプライアンス</td></tr>
<tr><td><strong>パスキー_</strong></td><td>非常に高い_</td><td>エクスポートアイデンティティ_</td><td>はい</td><td>消費者 + 企業</td></tr>
<tr><td><strong>Kerberos</strong></td><td>高</td><td>優れた (透明)</td><td>はい(ドメイン)</td><td>エンタープライズ、Windows ドメイン</td></tr>
<tr><td><strong>X.509 証明書</strong></td><td>非常に良い高</td><td>透明</td><td>はい</td><td>政府、軍、銀行</td></tr>
</tbody>
</table>

<h2 id="8-tom-tat"><strong>8。概要_</strong></h2><table>
<thead>
<tr><th>コンセプト_</th><th>説明_</th></tr>
</thead>
<tbody>
<tr><td><strong>OTP ポリシー</strong></td><td>_TOTP/HOTP 構成 - アルゴリズム、数字、ピリオド、先読み_</td></tr>
<tr><td><strong>リカバリコード</strong></td><td>デバイス紛失時のバックアップコードOTP_</td></tr>
<tr><td><strong>WebAuthn</strong></td><td>_FIDO2 セキュリティ キー — フィッシング耐性のある MFA_</td></tr>
<tr><td><strong>パスキー_</strong></td><td>パスワードレス認証 — 検出可能な資格情報 + 生体認証_</td></tr>
<tr><td><strong>Kerberos</strong></td><td>ドメイン ユーザー向けの透過的 SSO_</td></tr>
<tr><td><strong>X.509</strong></td><td>クライアント証明書認証 — mTLS</td></tr>
<tr><td><strong>CRL/OCSP</strong></td><td>証明書失効チェック</td></tr>
</tbody>
</table>