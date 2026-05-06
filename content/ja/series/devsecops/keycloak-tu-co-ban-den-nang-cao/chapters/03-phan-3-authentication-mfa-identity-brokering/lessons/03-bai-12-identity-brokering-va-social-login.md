---
id: 019d8b30-b112-7001-c001-e0c5f8100112
title: 'レッスン 12: ID ブローカリングとソーシャル ログイン'
slug: bai-12-identity-brokering-va-social-login
description: ID プロバイダーの概念、ソーシャル ログイン構成 (Google、Facebook、GitHub、Apple、Microsoft)、OpenID Connect ID プロバイダー、SAML ID プロバイダー、OAuth v2 プロバイダー、Kubernetes ID プロバイダー。最初のログイン フロー、アカウント リンク、アイデンティティ プロバイダー マッパー、同期モード (インポート、強制、レガシー)、クライアント推奨 IdP (kc_idp_hint)、および IdP ログアウト フロー。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 12
section_title: 'パート 3: 認証、MFA、および ID ブローカリング'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8909" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8909)"/>

  <!-- Decorations -->
  <g>
    <circle cx="943" cy="239" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="786" cy="222" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="629" cy="205" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="972" cy="188" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="815" cy="171" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="89" x2="1100" y2="169" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="119" x2="1050" y2="189" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1027.1051177665154,167 1027.1051177665154,211 989,233 950.8948822334847,211 950.8948822334847,167 989,145" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — レッスン 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 12: ID ブローカリングとソーシャル ログイン</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 認証、MFA、および ID ブローカリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-identity-brokering-concept"><strong>1. ID ブローカリング — コンセプト</strong></h2>

<p>IDブローカリングによりKeycloakが役割を果たすことが可能になります<strong>認証仲介者</strong>アプリケーションと外部 ID プロバイダー (IdP) の間。各アプリケーションが独自の Google、Facebook、SAML IdP と統合されるのではなく、すべて Keycloak 経由で接続されます。</p>

<pre><code>┌──────────┐     ┌──────────────┐     ┌──────────────────┐
│  My App  │ ──→ │   Keycloak   │ ──→ │  External IdP    │
│          │ ←── │  (Broker)    │ ←── │  (Google, SAML)  │
└──────────┘     └──────────────┘     └──────────────────┘

Flow:
1. User truy cập My App → redirect đến Keycloak
2. User chọn "Login with Google" trên Keycloak login page
3. Keycloak redirect đến Google OAuth2
4. User xác thực tại Google → redirect về Keycloak
5. Keycloak nhận identity, tạo/link user, issue token
6. User redirect về My App với Keycloak token</code></pre>

<p><strong>利点：</strong></p>
<ul>
<li><strong>集中化</strong>: KeycloakでIdPを一度設定すると、すべてのアプリで使用できるようになります</li>
<li><strong>プロトコルブリッジング</strong>: アプリは OIDC を使用し、外部 IdP は SAML → Keycloak ブリッジを使用します</li>
<li><strong>ユーザー管理</strong>: Keycloakは外部IdPのユーザーも含めて一元管理します</li>
<li><strong>アカウントリンク</strong>: 複数の外部アイデンティティを 1 つの Keycloak アカウントにリンクします</li>
</ul>

<h2 id="2-cau-hinh-social-login"><strong>2. ソーシャルログインを設定する</strong></h2>

<h3 id="21-general-idp-settings"><strong>2.1 一般的なアイデンティティプロバイダーの設定</strong></h3>

<p>IdP を追加する場合、一般設定には次のものが含まれます。</p>

<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>価値</th></tr>
</thead>
<tbody>
<tr><td><strong>エイリアス</strong></td><td>KeycloakのIdPの一意の識別子</td><td><code>google.google.com</code>, <code>フェイスブック</code></td></tr>
<tr><td><strong>表示名</strong></td><td>ログインページに表示される名前</td><td><code>グーグル</code>, <code>Facebookでログイン</code></td></tr>
<tr><td><strong>有効</strong></td><td>IdPの有効化/無効化</td><td><code>の上</code></td></tr>
<tr><td><strong>ログインページで非表示にする</strong></td><td>ログイン ページから非表示にする (kc_idp_hint 経由でのみ使用)</td><td><code>オフ</code></td></tr>
<tr><td><strong>ストアトークン</strong></td><td>外部 IdP からのアクセス トークンを保存する</td><td><code>オフ</code>(外部 API 呼び出しが必要な場合にオンにします)</td></tr>
<tr><td><strong>保存されたトークンの読み取り可能</strong></td><td>ユーザーは保存されたトークンを読み取ることができます</td><td><code>オフ</code></td></tr>
<tr><td><strong>電子メールを信頼する</strong></td><td>IdP からの電子メールを信頼します (再度確認する必要はありません)</td><td><code>の上</code>Google/マイクロソフト用</td></tr>
<tr><td><strong>アカウントリンクのみ</strong></td><td>アカウントをリンクするためにのみ使用され、新しいアカウントを作成することはできません</td><td><code>オフ</code></td></tr>
<tr><td><strong>初回ログインの流れ</strong></td><td>フローが最初のログインを処理します</td><td><code>ブローカーへの最初のログイン</code></td></tr>
<tr><td><strong>ログイン後のフロー</strong></td><td>IdP 経由でログインするたびにフローが実行されます</td><td><code>なし</code></td></tr>
<tr><td><strong>同期モード</strong></td><td>ユーザー属性を同期する</td><td><code>輸入</code>, <code>力。力</code>、 または<code>遺産</code></td></tr>
</tbody>
</table>

<h3 id="22-google-oauth2"><strong>2.2 Google OAuth2</strong></h3>

<p><strong>ステップ 1: Google で OAuth2 認証情報を作成する</strong></p>

<ol>
<li>アクセス<strong>Google Cloud コンソール → API とサービス → 認証情報</strong></li>
<li>クリック<strong>「認証情報の作成 → OAuth クライアント ID」</strong></li>
<li>アプリケーションの種類:<strong>ウェブアプリケーション</strong></li>
<li>名前：<code>キークロークログイン</code></li>
<li>承認されたリダイレクト URI:<code>https://keycloak.example.com/realms/myrealm/broker/google/endpoint</code></li>
<li>コピー<strong>クライアントID</strong>そして<strong>クライアントシークレット</strong></li>
</ol>

<p><strong>ステップ2: Keycloakで設定する</strong></p>

<ol>
<li>入力<strong>ID プロバイダー → プロバイダーの追加 → Google</strong></li>
<li>入力：<ul>
    <li><strong>クライアントID</strong>: <code>123456789.apps.googleusercontent.com</code></li>
    <li><strong>クライアントシークレット</strong>: <code>GOCSPX-xxxxxxxxxxxx</code></li>
    <li><strong>デフォルトのスコープ</strong>: <code>openid プロフィールメール</code></li>
    <li><strong>電子メールを信頼する</strong>: <code>の上</code>— Google がメールを確認しました</li>
    <li><strong>同期モード</strong>: <code>輸入</code></li>
    </ul>
</li>
<li>保存</li>
</ol>

<p><strong>リダイレクト URI 形式:</strong></p>
<pre><code>https://{keycloak-host}/realms/{realm}/broker/{alias}/endpoint</code></pre>

<h3 id="23-facebook"><strong>2.3 フェイスブック</strong></h3>

<p><strong>ステップ 1: Facebook アプリを作成する</strong></p>

<ol>
<li>アクセス<strong>開発者向けメタ → マイアプリ → アプリの作成</strong></li>
<li>アプリの種類:<strong>消費者</strong>または<strong>仕事</strong></li>
<li>製品を追加<strong>「フェイスブックログイン」</strong></li>
<li>設定：<ul>
    <li>有効な OAuth リダイレクト URI:<code>https://keycloak.example.com/realms/myrealm/broker/facebook/endpoint</code></li>
    </ul>
</li>
<li>コピー<strong>アプリID</strong>そして<strong>アプリの秘密</strong></li>
</ol>

<p><strong>ステップ2: Keycloakで設定する</strong></p>

<ol>
<li>入力<strong>ID プロバイダー → プロバイダーの追加 → Facebook</strong></li>
<li>入力：<ul>
    <li><strong>クライアントID</strong>：アプリID</li>
    <li><strong>クライアントシークレット</strong>: アプリの秘密</li>
    <li><strong>デフォルトのスコープ</strong>: <code>public_profile にメールを送信する</code></li>
    <li><strong>電子メールを信頼する</strong>: <code>オフ</code>— Facebookは未確認の電子メールを許可します</li>
    </ul>
</li>
</ol>

<h3 id="24-github"><strong>2.4 GitHub</strong></h3>

<p><strong>ステップ 1: GitHub OAuth アプリを作成する</strong></p>

<ol>
<li>アクセス<strong>GitHub → 設定 → 開発者設定 → OAuth アプリ → 新規</strong></li>
<li>アプリケーション名:<code>キークロークログイン</code></li>
<li>ホームページURL：<code>https://myapp.example.com</code></li>
<li>認可コールバック URL:<code>https://keycloak.example.com/realms/myrealm/broker/github/endpoint</code></li>
<li>コピー<strong>クライアントID</strong>そして生成する<strong>クライアントシークレット</strong></li>
</ol>

<p><strong>ステップ2: Keycloakで設定する</strong></p>

<ol>
<li>入力<strong>ID プロバイダー → プロバイダーの追加 → GitHub</strong></li>
<li>入力：<ul>
    <li><strong>クライアントID</strong>: GitHub クライアント ID</li>
    <li><strong>クライアントシークレット</strong>: GitHub クライアント シークレット</li>
    <li><strong>デフォルトのスコープ</strong>: <code>ユーザー:電子メール読み取り:組織</code>（もっと<code>読む:組織</code>組織情報が必要な場合)</li>
    </ul>
</li>
</ol>

<h3 id="25-apple"><strong>2.5 Apple サインイン</strong></h3>

<p><strong>ステップ 1: Apple Developer で設定する</strong></p>

<ol>
<li>アクセス<strong>Apple 開発者 → 証明書、識別子、プロファイル</strong></li>
<li>作成する<strong>アプリID</strong>Apple でサインイン機能を使用</li>
<li>作成する<strong>サービスID</strong>:
    <ul>
    <li>識別子:<code>com.example.keycloak.login</code></li>
    <li>戻り値の URL:<code>https://keycloak.example.com/realms/myrealm/broker/apple/endpoint</code></li>
    </ul>
</li>
<li>作成する<strong>鍵</strong>Apple でサインインの場合 → ダウンロード<code>.p8</code>ファイル</li>
</ol>

<p><strong>ステップ2: Keycloakで設定する</strong></p>

<ol>
<li>入力<strong>ID プロバイダー → プロバイダーの追加 → Apple</strong></li>
<li>入力：<ul>
    <li><strong>クライアントID</strong>: サービス ID (com.example.keycloak.login)</li>
    <li><strong>クライアントシークレット</strong>: .p8 キーから生成された JWT</li>
    <li><strong>デフォルトのスコープ</strong>: <code>名前 メールアドレス</code></li>
    <li><strong>電子メールを信頼する</strong>: <code>の上</code></li>
    </ul>
</li>
</ol>

<blockquote>
<p>⚠️ <strong>ノートアップル</strong>: Apple では、クライアント シークレットが .p8 キーで署名された JWT であることを要求しており、この JWT は 6 か月後に期限切れになります。クライアント シークレットを定期的に更新するか、自動スクリプトを使用する必要があります。</p>
</blockquote>

<h3 id="26-microsoft"><strong>2.6 Microsoft (Azure AD / Entra ID)</strong></h3>

<p><strong>ステップ 1: Azure にアプリを登録する</strong></p>

<ol>
<li>アクセス<strong>Azure ポータル → Microsoft Entra ID → アプリ登録 → 新規</strong></li>
<li>名前：<code>Keycloak SSO</code></li>
<li>サポートされているアカウントの種類: 応じて選択してください<ul>
    <li><code>この組織ディレクトリ内のアカウントのみ</code>— シングルテナント</li>
    <li><code>任意の組織ディレクトリ内のアカウント</code>— マルチテナント</li>
    <li><code>組織ディレクトリ内のアカウントと個人のアカウント</code>— @outlook.com を含む</li>
    </ul>
</li>
<li>リダイレクト URI:<code>ウェブ</code> → <code>https://keycloak.example.com/realms/myrealm/broker/microsoft/endpoint</code></li>
<li>入力<strong>証明書とシークレット → 新しいクライアント シークレット</strong>→ 値をコピー</li>
</ol>

<p><strong>ステップ2: Keycloakで設定する</strong></p>

<ol>
<li>入力<strong>ID プロバイダー → プロバイダーの追加 → Microsoft</strong></li>
<li>入力：<ul>
    <li><strong>クライアントID</strong>：アプリケーション（クライアント）ID</li>
    <li><strong>クライアントシークレット</strong>: クライアントシークレット値</li>
    <li><strong>デフォルトのスコープ</strong>: <code>openid プロフィールメール</code></li>
    <li><strong>電子メールを信頼する</strong>: <code>の上</code></li>
    <li><strong>テナント</strong>: シングルテナントの場合はテナント ID を入力するか、<code>一般。一般</code>マルチテナント向け</li>
    </ul>
</li>
</ol>

<h2 id="3-openid-connect-identity-providers"><strong>3. OpenID Connect ID プロバイダー</strong></h2>

<p>利用可能なソーシャルプロバイダーに加えて、Keycloakはへの接続をサポートします<strong>任意の OIDC プロバイダー</strong>どれでも。</p>

<h3 id="31-oidc-v1-provider"><strong>3.1 OpenID Connect v1.0 プロバイダーの追加</strong></h3>

<ol>
<li>入力<strong>ID プロバイダー → プロバイダーの追加 → OpenID Connect v1.0</strong></li>
<li>構成：<ul>
    <li><strong>エイリアス</strong>: <code>企業SSO</code></li>
    <li><strong>表示名</strong>: <code>企業SSO</code></li>
    <li><strong>ディスカバリーエンドポイント</strong>: <code>https://sso.corp.example.com/.well-known/openid-configuration</code></li>
    <li>または、マニュアルを入力します:<ul>
        <li><strong>認可URL</strong>: <code>https://sso.corp.example.com/authorize</code></li>
        <li><strong>トークンURL</strong>: <code>https://sso.corp.example.com/token</code></li>
        <li><strong>ユーザー情報のURL</strong>: <code>https://sso.corp.example.com/userinfo</code></li>
        <li><strong>JWKSのURL</strong>: <code>https://sso.corp.example.com/jwks</code></li>
        </ul>
    </li>
    <li><strong>クライアントID</strong>：外部IdPに登録されているID</li>
    <li><strong>クライアントシークレット</strong>：対応するシークレット</li>
    <li><strong>クライアント認証</strong>: <code>クライアント シークレットがポストとして送信される</code>または<code>基本認証として送信されるクライアント シークレット</code></li>
    </ul>
</li>
</ol>

<p><strong>ディスカバリーエンドポイント</strong>Keycloakが外部IdPのすべてのURLと機能を自動的に取得できるようにします。</p>

<h3 id="32-oidc-keycloak-to-keycloak"><strong>3.2 Keycloak 間の ID ブローカリング</strong></h3>

<p>2 つの Keycloak インスタンスを接続します。</p>

<pre><code class="language-text"># Keycloak A (IdP) — Realm: company-a
Discovery: https://keycloak-a.example.com/realms/company-a/.well-known/openid-configuration

# Keycloak B (Broker) — Realm: main
# Thêm OIDC IdP với:
# - Discovery Endpoint: https://keycloak-a.example.com/realms/company-a/.well-known/openid-configuration
# - Client ID: registered in company-a realm
# - Client Secret: from company-a client

# Tại Keycloak A, tạo client cho Keycloak B:
# - Client ID: keycloak-b-broker
# - Valid Redirect URIs: https://keycloak-b.example.com/realms/main/broker/company-a/endpoint
# - Client Authentication: On
# - Standard Flow: Enabled</code></pre>

<h2 id="4-saml-identity-providers"><strong>4. SAML 2.0 ID プロバイダー</strong></h2>

<h3 id="41-them-saml-idp"><strong>4.1 SAML IdP の追加</strong></h3>

<ol>
<li>入力<strong>ID プロバイダー → プロバイダーの追加 → SAML v2.0</strong></li>
<li>構成：<ul>
    <li><strong>エイリアス</strong>: <code>企業-saml</code></li>
    <li><strong>URLからインポート</strong>: 外部 SAML IdP のメタデータ URL を入力します。<pre><code>https://saml-idp.example.com/metadata</code></pre>
    </li>
    <li>または<strong>ファイルからインポート</strong>: XMLメタデータファイルをアップロードします</li>
    <li>または、マニュアルを入力します:<ul>
        <li><strong>シングルサインオンサービスURL</strong>: <code>https://saml-idp.example.com/sso</code></li>
        <li><strong>シングルログアウトサービスのURL</strong>: <code>https://saml-idp.example.com/slo</code></li>
        <li><strong>NameID ポリシーの形式</strong>: <code>電子メール</code>または<code>持続的</code></li>
        <li><strong>AuthnRequest の署名が必要です</strong>: <code>の上</code></li>
        <li><strong>アサーションの署名を求める</strong>: <code>の上</code></li>
        <li><strong>アサーションを暗号化したい</strong>: <code>オフ</code></li>
        <li><strong>署名の検証</strong>: <code>の上</code></li>
        <li><strong>X509 証明書の検証</strong>: IdP 署名証明書を貼り付けます</li>
        </ul>
    </li>
    </ul>
</li>
</ol>

<h3 id="42-keycloak-saml-sp-metadata"><strong>4.2 Keycloak SAML SP メタデータ</strong></h3>

<p>外部 SAML IdP には Keycloak メタデータが必要です (サービスプロバイダーとして機能):</p>

<pre><code class="language-bash"># Keycloak SP Descriptor URL
https://keycloak.example.com/realms/myrealm/broker/corporate-saml/endpoint/descriptor

# Đây là XML metadata chứa:
# - EntityID
# - AssertionConsumerService URL
# - SingleLogoutService URL
# - Keycloak signing certificate</code></pre>

<h2 id="5-oauth-v2-identity-providers"><strong>5. OAuth v2 ID プロバイダー</strong></h2>

<p>OAuth 2.0 のみをサポートする (OIDC なし) プロバイダーの場合:</p>

<ol>
<li>入力<strong>ID プロバイダー → プロバイダーの追加 → OAuth v2.0</strong></li>
<li>構成：<ul>
    <li><strong>認可URL</strong>: OAuth2 承認エンドポイント</li>
    <li><strong>トークンURL</strong>: OAuth2 トークンエンドポイント</li>
    <li><strong>ユーザー情報のURL</strong>: エンドポイントはユーザー情報 (存在する場合) を返します。</li>
    <li><strong>クライアントID/クライアントシークレット</strong></li>
    <li><strong>ユーザー情報の JSON パス</strong>: ユーザー属性を抽出するための JSONPath<pre><code># Ví dụ: nếu user info response là { "data": { "id": 123, "username": "john" } }
# Username JSONPath: $.data.username
# Email JSONPath: $.data.email</code></pre>
    </li>
    </ul>
</li>
</ol>

<h2 id="6-kubernetes-identity-providers"><strong>6. Kubernetes ID プロバイダー</strong></h2>

<p>Keycloak は Kubernetes の IdP として機能でき、逆に Kubernetes から ID を受け取ることもできます。</p>

<h3 id="61-keycloak-verified-email-domain-idp"><strong>6.1 Kubernetes OpenID Connect プロバイダー</strong></h3>

<pre><code class="language-yaml"># Kubernetes API server config — sử dụng Keycloak làm IdP
apiVersion: v1
kind: Config
clusters:
- cluster:
    server: https://k8s-api.example.com
    certificate-authority: /etc/kubernetes/pki/ca.crt
  name: my-cluster
users:
- name: oidc-user
  user:
    exec:
      apiVersion: client.authentication.k8s.io/v1beta1
      command: kubectl
      args:
        - oidc-login
        - get-token
        - --oidc-issuer-url=https://keycloak.example.com/realms/myrealm
        - --oidc-client-id=kubernetes
        - --oidc-extra-scope=groups</code></pre>

<pre><code class="language-bash"># kube-apiserver flags cho OIDC authentication
--oidc-issuer-url=https://keycloak.example.com/realms/myrealm
--oidc-client-id=kubernetes
--oidc-username-claim=preferred_username
--oidc-groups-claim=groups
--oidc-ca-file=/etc/kubernetes/pki/keycloak-ca.crt</code></pre>

<h2 id="7-first-login-flow"><strong>7. 初回ログインの流れ</strong></h2>

<p>最初のログインフローの処理<strong>初めて</strong>ユーザーは外部 IdP 経由でログインします。このフローでは次のことが決定されます。</p>
<ul>
<li>Keycloakで新しいユーザーを作成できますか?</li>
<li>現在のユーザーへのリンクはありますか?</li>
<li>プロフィールの確認/更新のリクエストはありますか?</li>
</ul>

<h3 id="71-default-first-broker-login-flow"><strong>7.1 デフォルトの最初のブローカーのログインフロー</strong></h3>

<pre><code>First Broker Login Flow (mặc định)
├── Review Profile (Required)                    → Hiển thị profile để user review
│   └── Config: Update Profile on First Login = missing
└── User Creation or Linking (Required)           → Sub-flow
    ├── Create User If Unique (Alternative)       → Tạo user nếu email/username chưa tồn tại
    └── Handle Existing Account (Alternative)     → Sub-flow xử lý account đã tồn tại
        ├── Confirm Link Existing Account (Required) → Hỏi user có muốn link?
        └── Verification (Alternative)            → Sub-flow verify ownership
            ├── Verify Existing Account by Email (Alternative) → Gửi email verify
            └── Verify Existing Account by Re-authentication (Alternative) → Nhập password</code></pre>

<h3 id="72-cach-hoat-dong"><strong>7.2 詳しい仕組み</strong></h3>

<p><strong>シナリオ 1: まったくの新規ユーザー</strong></p>
<ol>
<li>ユーザーが初めて Google 経由でログインする</li>
<li><strong>プロフィールを確認する</strong>: ユーザーが確認できるように Google からのプロフィール (メールアドレス、名前) を表示します。</li>
<li><strong>一意の場合はユーザーを作成</strong>: 電子メールが存在しません → 新しい Keycloak ユーザーを作成します</li>
<li>Google ID を Keycloak ユーザーにリンクする</li>
<li>ログインに成功しました</li>
</ol>

<p><strong>シナリオ 2: 電子メールがすでに Keycloak に存在する</strong></p>
<ol>
<li>ユーザーは GitHub、電子メール経由でログインします<code>john@example.com</code></li>
<li><strong>一意の場合はユーザーを作成</strong>: 電子メールはすでに存在します → 失敗 → 代替に切り替えます</li>
<li><strong>既存のアカウントのリンクを確認</strong>: 「アカウント john@example.com はすでに存在します。リンクを希望しますか?」と尋ねます。</li>
<li><strong>所有権の確認</strong>: ユーザーは電子メールで確認するか、Keycloak パスワードを入力します</li>
<li>GitHub ID を既存の Keycloak ユーザーにリンクする</li>
</ol>

<h3 id="73-custom-first-login-flow"><strong>7.3 カスタム初回ログインフロー</strong></h3>

<p>例: 電子メールによるアカウントの自動リンク<strong>確認する必要はありません</strong>(外部 IdP を信頼する場合にのみ使用されます):</p>

<pre><code>Auto-link First Login Flow
├── Create User If Unique (Alternative)
└── Automatically Set Existing User (Alternative)   ← Tự link, không hỏi user</code></pre>

<blockquote>
<p>⚠️ <strong>セキュリティ警告</strong>: <code>既存ユーザーを自動設定</code>次の場合にのみ使用してください。<strong>完全に信頼する</strong>外部IdP。 IdP でフリーメールの設定が許可されている場合、攻撃者は他人のメールを登録することでアカウントを乗っ取ることができます。</p>
</blockquote>

<h2 id="8-account-linking"><strong>8. アカウントのリンク</strong></h2>

<p>アカウントリンクを使用すると、ユーザーは複数の外部アイデンティティを 1 つの Keycloak アカウントにリンクできます。</p>

<h3 id="81-linking-qua-account-console"><strong>8.1 アカウントコンソール経由のリンク</strong></h3>

<p>ユーザーはアカウント コンソールで自分自身をリンク/リンク解除できます。</p>
<pre><code>https://keycloak.example.com/realms/myrealm/account/#/security/linked-accounts</code></pre>

<h3 id="82-linking-qua-aia"><strong>8.2 Application Initiated Action (AIA) によるリンク</strong></h3>

<pre><code class="language-bash"># Trigger account linking từ application
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  redirect_uri=https://myapp.example.com/callback&
  response_type=code&
  scope=openid&
  kc_action=oidc-link&
  kc_action_parameter=google</code></pre>

<h3 id="83-linking-qua-admin-api"><strong>8.3 管理REST API経由のリンク</strong></h3>

<pre><code class="language-bash"># Xem federated identities của user
curl -s -X GET \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID/federated-identity" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq

# Response
[
  {
    "identityProvider": "google",
    "userId": "google-user-id-123",
    "userName": "john@gmail.com"
  }
]

# Thêm federated identity cho user
curl -X POST \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID/federated-identity/github" \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "identityProvider": "github",
    "userId": "github-user-id-456",
    "userName": "johndoe"
  }'

# Xóa federated identity
curl -X DELETE \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID/federated-identity/github" \
  -H "Authorization: Bearer $ADMIN_TOKEN"</code></pre>

<h2 id="9-identity-provider-mappers"><strong>9. ID プロバイダー マッパー</strong></h2>

<p>許可される IdP マッパー<strong>変換してマップする</strong>外部 IdP から Keycloak ユーザー属性、ロール、またはグループへの属性。</p>

<h3 id="91-mapper-types"><strong>9.1 マッパーのタイプ</strong></h3>

<table>
<thead>
<tr><th>マッパー</th><th>説明する</th><th>例えば</th></tr>
</thead>
<tbody>
<tr><td><strong>属性インポーター</strong></td><td>IdP クレームから Keycloak ユーザー属性に属性をインポートします</td><td>IdP<code>写真</code>→ キークローク<code>アバター_url</code></td></tr>
<tr><td><strong>ハードコーディングされた役割</strong></td><td>IdP からすべてのユーザーに固定ロールを割り当てる</td><td>すべての Google ユーザー → 役割<code>外部ユーザー</code></td></tr>
<tr><td><strong>ハードコードされたグループ</strong></td><td>固定グループを割り当てる</td><td>すべての GitHub ユーザー → グループ<code>/外部/github</code></td></tr>
<tr><td><strong>ユーザー名テンプレート インポーター</strong></td><td>テンプレートからユーザー名を作成する</td><td><code>${エイリアス}.${CLAIM.preferred_username}</code></td></tr>
<tr><td><strong>外部ロールからロールへ</strong></td><td>外部 IdP ロールを Keycloak ロールにマッピングする</td><td>SAML の役割<code>管理者。管理者</code>→ キークロークの役割<code>レルム管理者</code></td></tr>
<tr><td><strong>ハードコードされた属性</strong></td><td>IdPからユーザーの固定属性を設定する</td><td><code>出典=グーグル</code>すべての Google ユーザー向け</td></tr>
<tr><td><strong>ロールに対する SAML 属性</strong></td><td>SAML アサーション属性を Keycloak ロールにマップする</td><td>SAML<code>部門=IT</code>→役割<code>ITチーム</code></td></tr>
<tr><td><strong>役割に対する高度な要求</strong></td><td>複雑なクレーム (JSON パス、正規表現) をロールにマッピングする</td><td>請求<code>グループ。グループ</code>が含まれています。含まれています<code>「管理者」</code>→役割<code>管理者。管理者</code></td></tr>
</tbody>
</table>

<h3 id="92-cau-hinh-mappers"><strong>9.2 マッパーの構成</strong></h3>

<p><strong>例 1: 属性インポーター — Google からアバターをインポート</strong></p>

<ol>
<li>入力<strong>ID プロバイダー → Google → マッパー → マッパーの追加</strong></li>
<li>構成：<ul>
    <li><strong>名前</strong>: <code>アバター URL をインポート</code></li>
    <li><strong>マッパータイプ</strong>: <code>属性インポーター</code></li>
    <li><strong>請求</strong>: <code>写真</code>(Google から名前を要求)</li>
    <li><strong>ユーザー属性名</strong>: <code>アバター_url</code>(Keycloakユーザー属性)</li>
    <li><strong>同期モードのオーバーライド</strong>: <code>継承する</code></li>
    </ul>
</li>
</ol>

<p><strong>例 2: ハードコードされたロール - 外部ユーザーにロールを割り当てる</strong></p>

<ol>
<li>入力<strong>ID プロバイダー → GitHub → マッパー → マッパーの追加</strong></li>
<li>構成：<ul>
    <li><strong>名前</strong>: <code>外部ユーザー役割の割り当て</code></li>
    <li><strong>マッパータイプ</strong>: <code>ハードコーディングされた役割</code></li>
    <li><strong>役割</strong>: <code>外部ユーザー</code></li>
    </ul>
</li>
</ol>

<p><strong>例 3: ユーザー名テンプレート — ユーザー名の前に IdP エイリアスを付ける</strong></p>

<ol>
<li>構成：<ul>
    <li><strong>マッパータイプ</strong>: <code>ユーザー名テンプレート インポーター</code></li>
    <li><strong>テンプレート</strong>: <code>${エイリアス}.${CLAIM.preferred_username}</code></li>
    <li><strong>ターゲット</strong>: <code>地元</code></li>
    </ul>
</li>
<li>結果: Google のユーザーのユーザー名は = になります。<code>グーグル・ジョン・ドー</code></li>
</ol>

<p><strong>例 4: 外部ロールからロールへ - SAML ロールをマッピングする</strong></p>

<ol>
<li>構成：<ul>
    <li><strong>マッパータイプ</strong>: <code>外部ロールからロールへ</code></li>
    <li><strong>外部の役割</strong>: <code>管理者。管理者</code>(外部 SAML IdP からのロール名)</li>
    <li><strong>役割</strong>: <code>レルム管理者</code>(キークロークの役割)</li>
    </ul>
</li>
</ol>

<h2 id="10-sync-modes"><strong>10. 同期モード</strong></h2>

<p>同期モード制御<strong>Keycloakが情報を同期する方法</strong>ユーザーがログインするたびに外部 IdP から送信されます。</p>

<table>
<thead>
<tr><th>モード</th><th>初回ログイン</th><th>以降のログイン</th><th>ユースケース</th></tr>
</thead>
<tbody>
<tr><td><strong>輸入</strong></td><td>IdP から属性をインポートする</td><td>更新なし - Keycloak データをそのまま維持します</td><td>ユーザーはKeycloakでプロファイルを編集できます</td></tr>
<tr><td><strong>力。力</strong></td><td>IdP から属性をインポートする</td><td>IdP からの新しいデータで常に上書きします</td><td>IdP は絶対的な真実の源です</td></tr>
<tr><td><strong>遺産</strong></td><td>IdP から属性をインポートする</td><td>属性が空の場合は更新し、存在する場合はそのまま保持します</td><td>下位互換性、データのマージ</td></tr>
</tbody>
</table>

<p><strong>同期モードの設定:</strong></p>
<ul>
<li><strong>IdPレベルで</strong>: その IdP のすべてのマッパーに適用されます</li>
<li><strong>マッパーレベルで</strong>(同期モードオーバーライド): 特定のマッパーの同期モードをオーバーライドします。</li>
</ul>

<pre><code class="language-text"># Ví dụ: Google IdP với sync mode = import
# Mapper "Import Avatar" với Sync Mode Override = force

# Kết quả:
# - Email, name: import 1 lần, user có thể sửa trong Keycloak
# - Avatar URL: luôn cập nhật từ Google (force)</code></pre>

<h2 id="11-client-suggested-idp"><strong>11. クライアントが提案する IdP (kc_idp_hint)</strong></h2>

<p><code>kc_idp_hint</code>アプリの権限<strong>自動的にリダイレクト</strong>ユーザーを特定の外部 IdP に接続し、Keycloak ログインページをバイパスします。</p>

<h3 id="111-su-dung-kc-idp-hint"><strong>11.1 kc_idp_hint の使用</strong></h3>

<pre><code class="language-bash"># Redirect trực tiếp đến Google login
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  redirect_uri=https://myapp.example.com/callback&
  response_type=code&
  scope=openid&
  kc_idp_hint=google

# Redirect trực tiếp đến SAML IdP
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  redirect_uri=https://myapp.example.com/callback&
  response_type=code&
  scope=openid&
  kc_idp_hint=corporate-saml</code></pre>

<p><strong>JavaScript の統合:</strong></p>

<pre><code class="language-javascript">// keycloak-js adapter
const keycloak = new Keycloak({
  url: 'https://keycloak.example.com',
  realm: 'myrealm',
  clientId: 'my-app'
});

// Đăng nhập qua Google
function loginWithGoogle() {
  keycloak.login({
    idpHint: 'google'
  });
}

// Đăng nhập qua corporate SAML
function loginWithCorporate() {
  keycloak.login({
    idpHint: 'corporate-saml'
  });
}</code></pre>

<h3 id="112-identity-provider-redirector"><strong>11.2 ブラウザフローにおけるアイデンティティプロバイダリダイレクタ</strong></h3>

<p><code>アイデンティティプロバイダリダイレクタ</code>dalam ブラウザ フローが自動的に処理します<code>kc_idp_hint</code>:</p>

<ul>
<li>リクエストがあった場合<code>kc_idp_hint=google</code>→ すぐに Google にリダイレクトされます</li>
<li>ヒントがない場合 → 通常の流れを継続（ログインページを表示）</li>
</ul>

<p><strong>デフォルトの IdP</strong>: ID プロバイダー リダイレクターのデフォルト IdP を設定できます。ヒントがない場合は、デフォルト IdP に自動的にリダイレクトされます。</p>
<ol>
<li>横にある⚙️をクリックしてください<code>アイデンティティプロバイダリダイレクタ</code></li>
<li>入力<strong>デフォルトのアイデンティティプロバイダー</strong>: <code>google.google.com</code></li>
</ol>

<h2 id="12-identity-broker-logout"><strong>12. ID ブローカーのログアウト</strong></h2>

<p>ユーザーがKeycloakからログアウトすると、それを構成できます<strong>ログアウトを伝播する</strong>外部 IdP に送信します。</p>

<h3 id="121-backchannel-logout"><strong>12.1 バックチャネルのログアウト</strong></h3>

<p>キークロークのサポート<strong>バックチャネルログアウト</strong>外部 OIDC IdP を使用する場合:</p>

<ol>
<li>OIDC IdP 構成で、有効にします。<strong>バックチャネルログアウト</strong></li>
<li>外部 IdP はバックチャネル ログアウト エンドポイントをサポートする必要があります</li>
<li>ユーザーがKeycloakからログアウトすると → Keycloakが外部IdPにログアウトリクエストを送信します</li>
</ol>

<p>SAML IdP の場合、ログアウト伝播が処理されます<strong>SAML シングル ログアウト (SLO)</strong>プロトコルを自動的に実行します。</p>

<h2 id="13-multiple-instances"><strong>13. 同じソーシャル ブローカーの複数のインスタンス</strong></h2>

<p>Keycloak ではさらに多くのことが可能になります<strong>多くの例</strong>同じソーシャルプロバイダーであり、それぞれに異なるエイリアスが付いています。</p>

<pre><code class="language-text"># Ví dụ: 2 Google IdPs cho 2 Google Workspace domains
Identity Providers:
  - Alias: google-corp        → Google Workspace domain corp.example.com
  - Alias: google-partner     → Google Workspace domain partner.example.com

# Mỗi instance có Client ID / Client Secret riêng
# registered tại Google Cloud Console khác nhau</code></pre>

<p><strong>追加方法:</strong></p>
<ol>
<li>OIDC v1.0 プロバイダーを追加します (2 番目のインスタンスには組み込みの Google プロバイダーを使用しないでください)</li>
<li>エイリアス：<code>グーグルパートナー</code></li>
<li>検出エンドポイント:<code>https://accounts.google.com/.well-known/openid-configuration</code></li>
<li>クライアント ID / シークレット: 2 番目のインスタンスの別の認証情報</li>
</ol>

<h2 id="14-hien-an-idps-trong-account-console"><strong>14. アカウントコンソールでの IdP の表示/非表示</strong></h2>

<p>アカウント コンソールでどのユーザーが IdP を表示およびリンク/リンク解除できるかを制御します。</p>

<ul>
<li><strong>ログインページに表示されます</strong>：ダニなし<code>ログインページで非表示にする</code></li>
<li><strong>ログインページから非表示にする</strong>：チェックマーク<code>ログインページで非表示にする</code>— まだ使用できます<code>kc_idp_hint</code></li>
<li><strong>アカウントコンソールに表示される</strong>: デフォルトの IdP がリンクされたアカウントに表示されます</li>
<li><strong>アカウントリンクのみ</strong>: IdP はアカウント コンソールにのみ表示され、ログイン ページには表示されません。</li>
</ul>

<h2 id="15-tom-tat"><strong>15. まとめ</strong></h2>

<table>
<thead>
<tr><th>コンセプト</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td><strong>ID ブローカーリング</strong></td><td>Keycloakはアプリと外部IdPの間を仲介します</td></tr>
<tr><td><strong>ソーシャルログイン</strong></td><td>グーグル、フェイスブック、ギットハブ、アップル、マイクロソフト</td></tr>
<tr><td><strong>OIDC/SAML/OAuth2 IdP</strong></td><td>プロトコル標準に従って任意の IdP に接続します</td></tr>
<tr><td><strong>初回ログインの流れ</strong></td><td>最初の処理: 新しいユーザーまたは既存のリンクを作成します</td></tr>
<tr><td><strong>アカウントリンク</strong></td><td>複数の外部アイデンティティを 1 つの Keycloak アカウントにリンクする</td></tr>
<tr><td><strong>IdP マッパー</strong></td><td>変換属性: 属性インポーター、ハードコードされたロール/グループ、ユーザー名テンプレート</td></tr>
<tr><td><strong>同期モード</strong></td><td>インポート (1 回)、強制 (常に上書き)、レガシー (マージ)</td></tr>
<tr><td><strong>kc_idp_hint</strong></td><td>ログイン ページをスキップし、特定の IdP に直接リダイレクトします</td></tr>
<tr><td><strong>ブローカーのログアウト</strong></td><td>ログアウトを外部 IdP に伝播する (バックチャネル/SLO)</td></tr>
</tbody>
</table>
