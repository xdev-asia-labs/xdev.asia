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
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak の基本から高度なもの</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 認証、MFA、および ID ブローカリング__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="1-identity-brokering-concept"><strong>1. ID ブローカリング — コンセプト</strong></h2>

<p>アイデンティティ ブローカリングを使用すると、Keycloak がアプリケーションと外部アイデンティティ プロバイダー (IdP) の間の__HTMLTAG_70___認証仲介__HTMLTAG_71___ として機能できるようになります。各アプリが独自の Google、Facebook、SAML IdP と統合するのではなく、すべて Keycloak 経由で接続します。</p>

___プレコード_0___

<p><strong>利点:</strong></p>
<ul>
<li><strong>集中型</strong>: KeycloakでIdPを一度設定すると、すべてのアプリで__HTMLTAG_81___を使用できるようになります
<li><strong>プロトコル ブリッジ</strong>: アプリは OIDC を使用し、外部 IdP は SAML → Keycloak ブリッジを使用</li>
<li><strong>ユーザー管理</strong>: Keycloakは外部IdPからのユーザーも含めて一元管理</li>
<li><strong>アカウントのリンク</strong>: 複数の外部 ID を 1 つの Keycloak アカウントにリンク</li>
</ul>

<h2 id="2-cau-hinh-social-login"><strong>2.ソーシャル ログイン構成</strong></h2>

<h3 id="21-general-idp-settings"><strong>2.1 一般的なアイデンティティ プロバイダ設定</strong></h3>

<p>IdP を追加する場合、一般設定には次のものが含まれます:</p><table>
<thead>
<tr><th>設定</th><th>説明_</th><th>値</th></tr>
</thead>
<tbody>
<tr><td><strong>エイリアス</strong></td><td>KeycloakのIdPの一意の識別子</td><td><code>google</code>、 <code>facebook</code></td></tr>
<tr><td><strong>表示名_</strong></td><td>ログインページに表示される名前_</td><td><code>_Google</code>、__HTMLTAG_141___でログインしますFacebook_</code></td></tr>
<tr><td><strong>有効</strong></td><td>IdP の有効化/無効化</td><td><code>オン</code></td></tr>
<tr><td><strong>ログイン ページで非表示</strong></td><td>ログイン ページで非表示 (一時使用のみ) kc_idp_hint)</td><td><code>オフ</code></td></tr>
<tr><td><strong>ストアトークン_</strong></td><td>外部IdPからのアクセストークンを保存</td><td><code>オフ</code> (外部を呼び出す必要がある場合はオンにします) API)_</td></tr>
<tr><td><strong>読み取り可能な保存トークン</strong></td><td>ユーザーが読み取り可能な保存トークン_</td><td><code>Off</code></td></tr>
<tr><td><strong>電子メールを信頼する</strong></td><td>IdP からの電子メールを信頼する (再確認する必要はありません)</td><td><code>オン</code> Google/Microsoft</td></tr>
<tr><td><strong>アカウントのリンクのみ</strong></td><td>アカウントのリンクにのみ使用され、新規作成は許可されません</td><td><code>オフ</code></td></tr>
<tr><td><strong>最初のログイン フロー</strong></td><td>_フローは最初のログインを処理します</td><td><code>最初のブローカー ログイン</code></td></tr>
<tr><td><strong>ログイン後フロー</strong></td><td>IdP 経由でログインするたびにフローが実行</td><td><code>なし</code></td></tr>
<tr><td><strong>同期モード</strong></td><td>ユーザー属性の同期_</td><td><code>インポート</code>、__HTMLTAG_251___force</code>、または<code>レガシー</code></td></tr>
</tbody>
</table>

<h3 id="22-google-oauth2"><strong>2.2 Google OAuth2</strong></h3><p><strong>ステップ 1: Google で OAuth2 認証情報を作成</strong></p>

<ol>
<li>_<strong>Google Cloud Console → API とサービス → 認証情報</strong></li> に移動します
<li>__HTMLTAG_273___「認証情報の作成 → OAuth クライアント ID」をクリック</strong></li>
<li>アプリケーション タイプ: <strong>Web アプリケーション___HTMLTAG_278__HTMLTAG_279___
<li>名前: <code>Keycloak ログイン___HTMLTAG_282__HTMLTAG_283___
<li>承認されたリダイレクト URI: <code>https://keycloak.example.com/realms/myrealm/broker/google/endpoint</code></li>
<li>__HTMLTAG_288___クライアントID</strong>と__HTMLTAG_290___クライアントシークレット___HTMLTAG_291__HTMLTAG_292___をコピーします。
</ol>

<p><strong>ステップ 2: Keycloak での設定</strong></p>

<ol>
<li>_<strong>ID プロバイダー → プロバイダーの追加 → Google</strong></li> に移動します。
<li>次を入力してください:
    <ul>
    <li><strong>クライアント ID</strong>: <code>123456789.apps.googleusercontent.com</code></li>
    <li><strong>_クライアント シークレット</strong>: <code>GOCSPX-xxxxxxxxxxxx</code></li>
    <li><strong>デフォルトのスコープ</strong>: <code>openid プロフィールメール</code></li>
    <li><strong>_信頼できるメール</strong>: <code>On</code> — Google がメールを確認しました</li>
    <li><strong>同期モード</strong>: <code>インポート</code></li>
    </ul>
</li>
<li>保存</li>
</ol>

<p><strong>リダイレクト URI 形式:</strong></p>
___プレコード_1___

<h3 id="23-facebook"><strong>2.3 Facebook</strong></h3>

<p><strong>_ステップ 1: Facebook アプリを作成</strong></p>

<ol>
<li>__HTMLTAG_354___開発者向けメタ → マイ アプリ → アプリの作成</strong></li> に移動します
<li>アプリの種類: <strong>コンシューマー</strong> または <strong>ビジネス___HTMLTAG_361__HTMLTAG_362___
<li>商品を追加 <strong>「Facebook ログイン」</strong></li>
<li>設定:
    <ul>
    <li>有効な OAuth リダイレクト URI: <code>https://keycloak.example.com/realms/myrealm/broker/facebook/endpoint</code></li>
    </ul>
</li>
<li>__HTMLTAG_375___アプリ ID</strong> と <strong>アプリ シークレット</strong></li> をコピーします
</ol>

<p><strong>_ステップ 2: Keycloak での設定</strong></p><ol>
<li>__HTMLTAG_387___ID プロバイダー → プロバイダーの追加 → Facebook</strong></li> に移動します。
<li>入力:
    <ul>
    <li><strong>クライアントID</strong>: アプリID</li>
    <li><strong>クライアント シークレット</strong>: アプリ シークレット</li>
    <li><strong>デフォルトのスコープ</strong>: <code>email public_profile</code></li>
    <li><strong>信頼できるメール</strong>: <code>オフ</code> — Facebook は未確認のメールを許可__HTMLTAG_411___
    </ul>
</li>
</ol>

<h3 id="24-github"><strong>2.4 GitHub</strong></h3>

<p><strong>_ステップ 1: GitHub OAuth アプリを作成する</strong></p>

<ol>
<li>_<strong>GitHub → [設定] → [開発者設定] → [OAuth アプリ] → [新規]</strong></li> に移動します。
<li>アプリケーション名: <code>Keycloakログイン___HTMLTAG_430__HTMLTAG_431___
<li>ホームページ URL: <code>https://myapp.example.com</code></li>
<li>認可コールバック URL: <code>https://keycloak.example.com/realms/myrealm/broker/github/endpoint</code></li>
<li>__HTMLTAG_439___クライアントID</strong>をコピーし、__HTMLTAG_441___クライアントシークレット___HTMLTAG_442__HTMLTAG_443___を生成します。
</ol>

<p><strong>_ステップ 2: Keycloak での設定</strong></p>

<ol>
<li>_<strong>[アイデンティティ プロバイダー] → [プロバイダーの追加] → [GitHub] に移動</strong></li>
<li>次を入力してください:
    <ul>
    <li><strong>クライアントID</strong>: GitHubクライアントID</li>
    <li><strong>クライアント シークレット</strong>: GitHub クライアント シークレット</li>
    <li><strong>デフォルトのスコープ</strong>: <code>user:email read:org</code> (組織情報が必要な場合は__HTMLTAG_469___read:org</code>を追加)</li>
    </ul>
</li>
</ol>

<h3 id="25-apple"><strong>2.5 Apple サインイン</strong></h3>

<p><strong>_ステップ 1: Apple Developer で設定する</strong></p>

<ol>
<li>_<strong>Apple Developer → 証明書、識別子、プロファイル</strong></li> に移動します。
<li>Apple でサインイン機能を備えた__HTMLTAG_489___アプリ ID</strong> を作成</li>
<li>__HTMLTAG_493___サービスID</strong>を作成します:
    <ul>
    <li>識別子: <code>com.example.keycloak.login</code></li>
    <li>戻り URL: <code>https://keycloak.example.com/realms/myrealm/broker/apple/endpoint</code></li>
    </ul>
</li>
<li>Apple でサインインするための <strong>Key</strong> を作成 → <code>.p8</code> ファイル</li> をダウンロード
</ol>

<p><strong>ステップ 2: Keycloak での設定</strong></p><ol>
<li>__HTMLTAG_518___ID プロバイダー → プロバイダーの追加 → Apple</strong></li> に移動します。
<li>入力:
    <ul>
    <li><strong>クライアントID</strong>: サービスID (com.example.keycloak.login)</li>
    <li><strong>クライアント シークレット</strong>: .p8 キーから生成された JWT</li>
    <li><strong>_デフォルトのスコープ</strong>: <code>名前メール</code></li>
    <li><strong>信頼するメール</strong>: <code>オン</code></li>
    </ul>
</li>
</ol>

<blockquote>
<p>⚠️ <strong>注 Apple</strong>: Apple では、クライアント シークレットが .p8 キーで署名された JWT であることを要求しており、この JWT は 6 か月後に期限切れになります。クライアント シークレットを定期的に更新するか、自動スクリプトを使用する必要があります。</p>
</blockquote>

<h3 id="26-microsoft"><strong>2.6 Microsoft (Azure AD / Entra ID)</strong></h3>

<p><strong>_ステップ 1: Azure にアプリを登録</strong></p>

<ol>
<li>_<strong>Azure ポータル → Microsoft Entra ID → アプリ登録 → 新規</strong></li> に移動します。
<li>名前: <code>Keycloak SSO___HTMLTAG_567__HTMLTAG_568___
<li>サポートされているアカウントの種類: 応じて選択してください
    <ul>
    <li><code>この組織ディレクトリ内のアカウントのみ</code> — 単一テナント</li>
    <li><code>組織ディレクトリ内のアカウント</code> — マルチテナント</li>
    <li><code>組織ディレクトリおよび個人のアカウント</code> — @outlook.comを含む</li>
    </ul>
</li>
<li>リダイレクト URI: <code>Web</code> → <code>https://keycloak.example.com/realms/myrealm/broker/microsoft/endpoint</code></li>
<li>__HTMLTAG_591___証明書とシークレット→新しいクライアント シークレット</strong>→値をコピー</li> に移動します。
</ol>

<p><strong>ステップ 2: Keycloak での設定</strong></p>

<ol>
<li>__HTMLTAG_601___ID プロバイダー → プロバイダーの追加 → Microsoft</strong></li> に移動します。
<li>次を入力してください:
    <ul>
    <li><strong>クライアントID</strong>: アプリケーション(クライアント)ID</li>
    <li><strong>_クライアント シークレット</strong>: クライアント シークレットの値</li>
    <li><strong>デフォルトのスコープ</strong>: <code>openid プロフィールメール</code></li>
    <li><strong>_信頼するメール</strong>: <code>オン</code></li>
    <li><strong>テナント</strong>: シングルテナントの場合はテナント ID を入力し、マルチテナントの場合は <code>common</code>__HTMLTAG_631___ を入力します。
    </ul>
</li>
</ol>

<h2 id="3-openid-connect-identity-providers"><strong>3. OpenID Connect ID プロバイダー</strong></h2><p>利用可能なソーシャルプロバイダーに加えて、Keycloakは__HTMLTAG_640___任意のOIDCプロバイダー</strong>.</p>への接続をサポートします。

<h3 id="31-oidc-v1-provider"><strong>_3.1 OpenID Connect v1.0 プロバイダーの追加</strong></h3>

<ol>
<li>__HTMLTAG_649___[アイデンティティ プロバイダー] → [プロバイダーの追加] → [OpenID Connect v1.0] に移動</strong></li>
<li>構成:
    <ul>
    <li><strong>エイリアス</strong>: <code>企業sso</code></li>
    <li><strong>表示名</strong>: <code>企業SSO</code></li>
    <li><strong>_ディスカバリーエンドポイント</strong>: <code>https://sso.corp.example.com/.well-known/openid-configuration</code></li>
    <li>またはマニュアルを入力してください:
        <ul>
        <li><strong>認証 URL</strong>: <code>https://sso.corp.example.com/authorize</code></li>
        <li><strong>_トークン URL</strong>: <code>https://sso.corp.example.com/token</code></li>
        <li><strong>ユーザー情報 URL</strong>: <code>https://sso.corp.example.com/userinfo</code></li>
        <li><strong>_JWKS URL</strong>: <code>https://sso.corp.example.com/jwks</code></li>
        </ul>
    </li>
    <li><strong>クライアントID</strong>: 外部IdP</li>に登録されたID
    <li><strong>_クライアント シークレット</strong>: 対応するシークレット</li>
    <li><strong>クライアント認証</strong>: <code>投稿として送信されたクライアント シークレット_</code> または <code>基本認証として送信されたクライアント シークレット_</code></li>
    </ul>
</li>
</ol>

<p><strong>Discovery Endpoint</strong> により、Keycloak が外部 IdP のすべての URL と機能を自動的に取得できるようになります。</p>

<h3 id="32-oidc-keycloak-to-keycloak"><strong>_3.2 Keycloak 間の ID ブローカー</strong></h3>

<p>2 つの Keycloak インスタンスを接続:</p>

___プレコード_2___

<h2 id="4-saml-identity-providers"><strong>4. SAML 2.0 ID プロバイダー</strong></h2>

<h3 id="41-them-saml-idp"><strong>_4.1 SAML IdP の追加</strong></h3><ol>
<li>_<strong>[アイデンティティ プロバイダー] → [プロバイダーの追加] → [SAML v2.0] に移動</strong></li>
<li>構成:
    <ul>
    <li><strong>エイリアス</strong>: <code>corporate-saml</code></li>
    <li><strong>URL からインポート</strong>: 外部 SAML IdP のメタデータ URL をインポートします
        ___プレコード_3___
    </li>
    <li> または <strong> ファイルからインポート</strong>: XML メタデータ ファイルをアップロード</li>
    <li>_またはマニュアルを入力してください:
        <ul>
        <li><strong>シングル サインオン サービス URL</strong>: <code>https://saml-idp.example.com/sso</code></li>
        <li><strong>_シングル ログアウト サービス URL</strong>: <code>https://saml-idp.example.com/slo</code></li>
        <li><strong>NameID ポリシー形式</strong>: <code>電子メール</code> または <code>永続</code></li>
        <li><strong>認証リクエストの署名を希望</strong>: <code>オン</code></li>
        <li><strong>_アサーションの署名を希望</strong>: <code>オン</code></li>
        <li><strong>アサーションの暗号化を希望</strong>: <code>オフ</code></li>
        <li><strong>_署名の検証</strong>: <code>オン</code></li>
        <li><strong>X509 証明書を検証中</strong>: IdP 署名証明書を貼り付け</li>
        </ul>
    </li>
    </ul>
</li>
</ol>

<h3 id="42-keycloak-saml-sp-metadata"><strong>4.2 Keycloak SAML SP メタデータ</strong></h3>

<p>外部 SAML IdP には Keycloak メタデータが必要です (サービス プロバイダーとして機能):</p>

___プレコード_4___

<h2 id="5-oauth-v2-identity-providers"><strong>5. OAuth v2 ID プロバイダー</strong></h2>

<p>OAuth 2.0 のみをサポートするプロバイダー (OIDC なし):</p>

<ol>
<li>_<strong>アイデンティティ プロバイダー → プロバイダーの追加 → OAuth v2.0</strong></li> に移動します。
<li>構成:
    <ul>
    <li><strong>認可 URL</strong>: OAuth2 認可エンドポイント</li>
    <li><strong>トークン URL</strong>: OAuth2 トークン エンドポイント</li>
    <li><strong>ユーザー情報 URL</strong>: エンドポイントはユーザー情報 (存在する場合)</li> を返します
    <li><strong>クライアント ID / クライアント シークレット</strong></li>
    <li><strong>_ユーザー情報 JSON パス</strong>: ユーザー属性を抽出するための JSONPath
        ___プレコード_5___
    </li>
    </ul>
</li>
</ol>

<h2 id="6-kubernetes-identity-providers"><strong>_6. Kubernetes ID プロバイダー</strong></h2>

<p>Keycloak は Kubernetes の IdP として機能でき、逆に Kubernetes から ID を受け取ることもできます。</p><h3 id="61-keycloak-verified-email-domain-idp"><strong>6.1 Kubernetes OpenID Connect プロバイダ</strong></h3>

___プレコード_6___

___プレコード_7___

<h2 id="7-first-login-flow"><strong>_7.最初のログイン フロー</strong></h2>

<p>最初のログイン フローは、__HTMLTAG_863___最初の</strong> ユーザーが外部 IdP 経由でログインすることを処理します。このフローは次のことを決定します:</p>
<ul>
<li>_Keycloak で新しいユーザーを作成できますか?</li>
<li>現在のユーザーへのリンクはありますか?</li>
<li>プロフィールの確認/更新のリクエストはありますか?</li>
</ul>

<h3 id="71-default-first-broker-login-flow"><strong>_7.1 デフォルトの最初のブローカーログインフロー</strong></h3>

___プレコード_8___

<h3 id="72-cach-hoat-dong"><strong>7.2 仕組みの詳細</strong></h3>

<p><strong>シナリオ 1: 新しいユーザー</strong></p>
<ol>
<li>初めて Google 経由でログインするユーザー__HTMLTAG_888___
<li><strong>プロフィールの確認</strong>: ユーザーが確認できるように Google からのプロフィール (メールアドレス、名前) を表示</li>
<li><strong>一意の場合ユーザーを作成</strong>: 電子メールが存在しない → 新しい Keycloak ユーザーを作成</li>
<li>_Google ID を Keycloak ユーザーにリンク</li>
<li>_ログイン成功__HTMLTAG_900___
</ol>

<p><strong>シナリオ 2: 電子メールはすでに Keycloak に存在します</strong></p>
<ol>
<li>ユーザーは GitHub 経由でログインし、__HTMLTAG_908___john@example.com</code></li> に電子メールを送信します
<li><strong>_一意の場合にユーザーを作成</strong>: 電子メールが既に存在する → 失敗 → 代替に切り替える</li>
<li><strong>既存のアカウントのリンクを確認</strong>: 「アカウント john@example.com はすでに存在します。リンクしますか?」</li> と尋ねます。
<li><strong>_所有権を確認</strong>: ユーザーは電子メールで確認するか、Keycloak パスワードを入力してください</li>
<li>GitHub ID を既存の Keycloak ユーザーにリンク</li>
</ol>

<h3 id="73-custom-first-login-flow"><strong>_7.3 カスタム初回ログイン フロー</strong></h3>

<p>例: 電子メールによるアカウントの自動リンク <strong>検証する必要はありません</strong> (外部 IdP を信頼する場合にのみ使用):</p>

___プレコード_9___

<blockquote>
<p>⚠️ <strong>セキュリティ警告__HTMLTAG_937___: <code>既存ユーザーを自動的に設定</code>は__HTMLTAG_940___完全に信頼__HTMLTAG_941___外部IdPを使用する場合にのみ使用してください。 IdP で自由にメールを設定できる場合、攻撃者は他人のメールを登録することでアカウントを乗っ取ることができます。</p>
</blockquote>

<h2 id="8-account-linking"><strong>_8.アカウントのリンク</strong></h2>

<p>アカウントリンクを使用すると、ユーザーは複数の外部アイデンティティを1つのKeycloakアカウントにリンクできます。</p>

<h3 id="81-linking-qua-account-console"><strong>_8.1 アカウントコンソール経由のリンク</strong></h3>

<p>ユーザーはアカウント コンソールで自分自身をリンク/リンク解除できます:</p>
___プレコード_10___

<h3 id="82-linking-qua-aia"><strong>_8.2 アプリケーション開始アクション (AIA) によるリンク</strong></h3>

___プレコード_11___<h3 id="83-linking-qua-admin-api"><strong>_8.3 管理REST API経由のリンク</strong></h3>

___プレコード_12___

<h2 id="9-identity-provider-mappers"><strong>9. ID プロバイダー マッパー</strong></h2>

<p>IdP マッパーを使用すると、__HTMLTAG_969___transform および外部 IdP から Keycloak ユーザー属性、ロール、またはグループへの</strong> 属性のマッピングが可能になります。</p>

<h3 id="91-mapper-types"><strong>9.1 マッパーのタイプ</strong></h3>

<table>
<thead>
<tr><th>_マッパー_</th><th>説明_</th><th>例_</th></tr>
</thead>
<tbody>
<tr><td><strong>属性インポーター</strong></td><td>_IdPクレームからKeycloakユーザー属性に属性をインポート_</td><td>IdP__HTMLTAG_996___picture</code> → Keycloak <code>avatar_url</code></td></tr>
<tr><td><strong>ハードコードされたロール</strong></td><td>IdP からすべてのユーザーに固定ロールを割り当てる_</td><td>すべての Google ユーザー → ロール<code>外部ユーザー</code></td></tr>
<tr><td><strong>ハードコードされたグループ</strong></td><td>固定グループの割り当て_</td><td>すべての GitHub ユーザー → グループ<code>/external/github</code></td></tr>
<tr><td><strong>ユーザー名テンプレート インポーター</strong></td><td>_ユーザー名を作成テンプレート</td><td><code>${ALIAS}.${CLAIM.preferred_username}</code></td></tr>
<tr><td><strong>外部ロールからロールへ</strong></td><td>外部 IdP ロールを Keycloak ロールにマッピング_</td><td>SAML ロール__HTMLTAG_1046___admin</code> → Keycloak ロール <code>realm-admin</code></td></tr>
<tr><td><strong>ハードコードされた属性</strong></td><td>IdP からユーザーの固定属性を設定</td><td><code>source=google</code> すべての Googleユーザー_</td></tr>
<tr><td><strong>SAML 属性をロールに</strong></td><td>SAML アサーション属性を Keycloak ロールにマップ_</td><td>SAML <code>部門=IT</code> → 役割__HTMLTAG_1074___ITチーム</code></td></tr>
<tr><td><strong>ロールへの高度なクレーム</strong></td><td>複雑なクレーム (JSON パス、正規表現) をロールにマッピング</td><td>Claim <code>グループ</code>には__HTMLTAG_1088___「管理者」</code>→ロール__HTMLTAG_1090___管理者</code></td></tr>
</tbody>
</table><h3 id="92-cau-hinh-mappers"><strong>9.2 マッパーの構成</strong></h3>

<p><strong>_例 1: 属性インポーター — Google からアバターをインポート</strong></p>

<ol>
<li>__HTMLTAG_1106___ID プロバイダー → Google → マッパー → マッパーの追加</strong></li> に移動します。
<li>構成:
    <ul>
    <li><strong>名前</strong>: <code>アバター URL をインポート</code></li>
    <li><strong>マッパー タイプ</strong>: <code>属性インポーター</code></li>
    <li><strong>申し立て</strong>: <code>写真</code> (Google からの申し立て名)</li>
    <li><strong>ユーザー属性名</strong>: <code>avatar_url</code> (Keycloakユーザー属性)</li>
    <li><strong>同期モード オーバーライド</strong>: <code>継承</code></li>
    </ul>
</li>
</ol>

<p><strong>例 2: ハードコードされたロール - 外部ユーザーにロールを割り当てる</strong></p>

<ol>
<li>_<strong>ID プロバイダー → GitHub → マッパー → マッパーの追加</strong></li> に移動します
<li>構成:
    <ul>
    <li><strong>名前</strong>: <code>外部ユーザー役割の割り当て</code></li>
    <li><strong>マッパー タイプ</strong>: <code>ハードコードされたロール</code></li>
    <li><strong>役割</strong>: <code>外部ユーザー</code></li>
    </ul>
</li>
</ol>

<p><strong>例 3: ユーザー名テンプレート — ユーザー名に IdP エイリアスをプレフィックス</strong></p>

<ol>
<li>構成:
    <ul>
    <li><strong>マッパー タイプ</strong>: <code>ユーザー名テンプレート インポーター_</code></li>
    <li><strong>テンプレート</strong>: <code>${ALIAS}.${CLAIM.preferred_username}</code></li>
    <li><strong>ターゲット</strong>: <code>LOCAL</code></li>
    </ul>
</li>
<li>結果: Google のユーザーのユーザー名は = <code>google.john.doe</code></li>
</ol>

<p><strong>例 4: 外部ロールからロールへ - SAML ロールをマッピング</strong></p><ol>
<li>構成:
    <ul>
    <li><strong>マッパー タイプ</strong>: <code>外部ロールからロールへ</code></li>
    <li><strong>外部ロール</strong>: <code>admin</code> (外部 SAML IdP からのロール名)</li>
    <li><strong>ロール</strong>: <code>realm-admin</code> (Keycloakロール)</li>
    </ul>
</li>
</ol>

<h2 id="10-sync-modes"><strong>10.同期モード</strong></h2>

<p>同期モードは、ユーザーがログインするたびにKeycloakが外部IdPからの情報__HTMLTAG_1242___を同期する方法__HTMLTAG_1241___を制御します。</p>

<table>
<thead>
<tr><th>モード</th><th>最初のログイン</th><th>2回目以降のログイン_</th><th>ユースケース</th></tr>
</thead>
<tbody>
<tr><td><strong>import</strong></td><td>IdP から属性をインポート_</td><td>更新なし - データをそのまま保持 Keycloak</td><td>ユーザーは編集可能Keycloakのプロフィール</td></tr>
<tr><td><strong>force</strong></td><td>IdP から属性をインポート_</td><td>IdP からの新しいデータで常に上書き</td><td>IdP は絶対的な真実の源</td></tr>
<tr><td><strong>レガシー</strong></td><td>IdP から属性をインポート_</td><td>属性が空の場合は更新、すでにはいの場合は保持</td><td>下位互換性、データを結合</td></tr>
</tbody>
</table>

<p><strong>同期モード設定:</strong></p>
<ul>
<li><strong>IdP レベル</strong>: その IdP のすべてのマッパーに適用</li>
<li><strong>マッパー レベル</strong> (同期モード オーバーライド): 特定のマッパーの同期モードをオーバーライド</li>
</ul>

___プレコード_13___

<h2 id="11-client-suggested-idp"><strong>11.クライアント推奨の IdP (kc_idp_hint)</strong></h2>

<p><code>kc_idp_hint</code> により、アプリケーション <strong> は、Keycloak ログイン ページをバイパスして、</strong> ユーザーを特定の外部 IdP に自動的にリダイレクトできます。</p>

<h3 id="111-su-dung-kc-idp-hint"><strong>11.1 kc_idp_hint の使用</strong></h3>

___プレコード_14___

<p><strong>JavaScript の統合:</strong></p>

___プレコード_15___

<h3 id="112-identity-provider-redirector"><strong>11.2 ブラウザ フローのアイデンティティ プロバイダ リダイレクタ</strong></h3>

<p><code>アイデンティティ プロバイダ リダイレクタ</code> dalam ブラウザ フローは__HTMLTAG_1335___kc_idp_hint</code>:</p> を自動的に処理します<ul>
<li>リクエストに <code>kc_idp_hint=google</code> がある場合 → 直ちに Google</li> にリダイレクトします
<li>ヒントがない場合 → 通常の流れを継続（ログインページを表示）</li>
</ul>

<p><strong>デフォルト IdP</strong>: ID プロバイダー リダイレクターのデフォルト IdP を設定できます。ヒントがない場合は、デフォルト IdP:</p> に自動的にリダイレクトされます。
<ol>
<li>_<code>アイデンティティ プロバイダ リダイレクタ___HTMLTAG_1353__HTMLTAG_1354___ の横にある ⚙️ をクリックします
<li>__HTMLTAG_1356___デフォルトのアイデンティティプロバイダ</strong>を入力してください: <code>google</code></li>
</ol>

<h2 id="12-identity-broker-logout"><strong>12. ID ブローカーのログアウト</strong></h2>

<p>ユーザーがKeycloakからログアウトするとき、__HTMLTAG_1367___ログアウト</strong>を外部IdPに伝播するように構成できます。</p>

<h3 id="121-backchannel-logout"><strong>12.1 バックチャネルログアウト</strong></h3>

<p>Keycloak は、外部 OIDC IdP:</p> を使用した <strong>バックチャネル ログアウト</strong> をサポートします。

<ol>
<li>OIDC IdP 構成で、__HTMLTAG_1380___バックチャネル ログアウト___HTMLTAG_1381__HTMLTAG_1382___ を有効にします
<li>外部 IdP はバックチャネル ログアウト エンドポイントをサポートする必要があります__HTMLTAG_1384___
<li>ユーザーがKeycloakからログアウトすると → Keycloakが外部IdPにログアウトリクエストを送信</li>
</ol>

<p>SAML IdP の場合、ログアウトの伝達は <strong>SAML シングル ログアウト (SLO)</strong> プロトコルを介して自動的に処理されます。</p>

<h2 id="13-multiple-instances"><strong>13.同じソーシャル ブローカーの複数のインスタンス</strong></h2>

<p>Keycloak を使用すると、同じソーシャルプロバイダーの<strong>複数のインスタンス</strong> を追加でき、それぞれに異なるエイリアスが付けられます:</p>

___プレコード_16___

<p><strong>追加方法:</strong></p>
<ol>
<li>OIDC v1.0 プロバイダーを追加します (2 番目のインスタンスには組み込みの Google プロバイダーを使用しないでください)</li>
<li>エイリアス: <code>google-partner</code></li>
<li>検出エンドポイント: <code>https://accounts.google.com/.well-known/openid-configuration</code></li>
<li>クライアント ID / シークレット: 2 番目のインスタンス用に別の認証情報</li>
</ol>

<h2 id="14-hien-an-idps-trong-account-console"><strong>14.アカウント コンソールで IdP を表示/非表示</strong></h2>

<p>アカウント コンソールでどのユーザーが IdP を表示およびリンク/リンク解除できるかを制御します:</p><ul>
<li><strong>ログイン ページに表示</strong>: チェックなし <code>ログイン ページに非表示_</code></li>
<li><strong>ログイン ページから非表示</strong>: <code>ログイン ページで非表示</code> にチェックを入れます — 引き続き使用可能 <code>kc_idp_hint</code></li>
<li><strong>アカウント コンソールに表示</strong>: リンクされたアカウントにデフォルト IdP が表示</li>
<li><strong>アカウント リンクのみ</strong>: IdP はアカウント コンソールにのみ表示され、ログイン ページには表示されません</li>
</ul>

<h2 id="15-tom-tat"><strong>15.概要_</strong></h2>

<table>
<thead>
<tr><th>コンセプト_</th><th>説明_</th></tr>
</thead>
<tbody>
<tr><td><strong>ID ブローカリング</strong></td><td>Keycloak はアプリと外部 IdP の間を仲介します</td></tr>
<tr><td><strong>ソーシャルログイン_</strong></td><td>Google、Facebook、GitHub、Apple、Microsoft</td></tr>
<tr><td><strong>OIDC/SAML/OAuth2 IdP</strong></td><td>プロトコル標準に従って任意の IdP を接続_</td></tr>
<tr><td><strong>最初のログインフロー</strong></td><td>最初の処理: 新しいユーザーまたは既存のリンクの作成_</td></tr>
<tr><td><strong>アカウントのリンク</strong></td><td>複数の外部アイデンティティを1つのKeycloakアカウントにリンク_</td></tr>
<tr><td><strong>IdP マッパー</strong></td><td>変換属性: 属性インポーター、ハードコードされたロール/グループ、ユーザー名テンプレート</td></tr>
<tr><td><strong>同期モード</strong></td><td>インポート (1 回)、強制 (常に上書き)、レガシー (マージ)</td></tr>
<tr><td><strong>kc_idp_hint</strong></td><td>_ログイン ページをスキップして、特定の IdP に直接リダイレクト_</td></tr>
<tr><td><strong>ブローカーのログアウト</strong></td><td>外部 IdP へのログアウトの伝達 (バックチャネル/SLO)</td></tr>
</tbody>
</table>