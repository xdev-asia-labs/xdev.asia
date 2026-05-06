---
id: 019d8b30-b106-7001-c001-e0c5f8100106
title: 'レッスン 6: OpenID Connect クライアント - A から Z までの構成'
slug: bai-6-openid-connect-clients-cau-hinh-tu-a-den-z
description: OIDC クライアント タイプ (パブリック、機密、ベアラーのみ)、管理コンソールを介したクライアントの作成と構成、OIDC 認証フロー (認証コード、暗黙的、クライアント資格情報、デバイス認証、CIBA)、PKCE、CIBA ポリシーの設定、および React および Spring Boot との実際的な統合について詳しく学びます。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 6
section_title: 'パート 2: SSO プロトコル - OpenID Connect と SAML'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8643" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8643)"/>

  <!-- Decorations -->
  <g>
    <circle cx="968" cy="254" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="836" cy="242" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="704" cy="230" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1072" cy="218" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="940" cy="206" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="114" x2="1100" y2="194" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="144" x2="1050" y2="214" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1039.1147367097487,199.5 1039.1147367097487,228.5 1014,243 988.8852632902513,228.5 988.8852632902513,199.5 1014,185" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — レッスン 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 6: OpenID Connect クライアント - 構成</tspan>
      <tspan x="60" dy="42">A から Z</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">_Keycloak の基本から高度なもの__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: SSO プロトコル - OpenID Connect と SAML</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tong-quan-openid-connect"><strong>1. KeycloakのOpenID Connectの概要</strong></h2>

<p>OpenID Connect (OIDC) は、OAuth 2.0 プラットフォーム上に構築された認証プロトコルです。 KeycloakはOIDC仕様を完全にサポートし、企業向けに多くの機能を拡張します。この記事では、OIDC クライアントの作成、構成、統合について詳しく説明します。</p>

<h3 id="oidc-endpoints"><strong>Keycloak の OIDC エンドポイント</strong></h3>
<p>Keycloak は OIDC 標準エンドポイントを提供します。すべてのエンドポイント情報は、__HTMLTAG_78___よく知られている構成</strong>:</p> から取得できます。

___プレコード_0___<p>重要なエンドポイント:</p>
<table>
<thead>
<tr><th>エンドポイント</th><th>URLパターン</th><th>目的_</th></tr>
</thead>
<tbody>
<tr><td>認可</td><td><code>/realms/{realm}/protocol/openid-connect/auth</code></td><td>認証フローの初期化</td></tr>
<tr><td>トークン</td><td><code>/realms/{realm}/protocol/openid-connect/token</code></td><td>トークンの取得/更新</td></tr>
<tr><td>ユーザー情報_</td><td><code>/realms/{realm}/protocol/openid-connect/userinfo</code></td><td>情報を取得するユーザー</td></tr>
<tr><td>ログアウト_</td><td><code>/realms/{realm}/protocol/openid-connect/logout</code></td><td>ログアウト (RP 開始) ログアウト)</td></tr>
<tr><td>トークンのイントロスペクション</td><td><code>/realms/{realm}/protocol/openid-connect/token/introspect_</code></td><td>トークンを確認する有効性</td></tr>
<tr><td>トークン失効_</td><td><code>/realms/{realm}/protocol/openid-connect/revoke_</code></td><td>失効トークン</td></tr>
<tr><td>JWKS</td><td><code>/realms/{realm}/protocol/openid-connect/certs</code></td><td>JWT 検証用の公開キー</td></tr>
<tr><td>デバイス認証</td><td><code>/realms/{realm}/protocol/openid-connect/auth/device_</code></td><td>デバイス認証付与</td></tr>
</tbody>
</table>

<h2 id="2-oidc-client-types"><strong>2. OIDC クライアント タイプ_</strong></h2>

<p>_Keycloak は 3 つの主要なタイプのクライアントをサポートしており、それぞれが異なるアプリケーション アーキテクチャに適しています:</p>

<h3 id="public-client"><strong>2.1 パブリック クライアント</strong></h3>
<p>クライアントはクライアント シークレットを保護できません。通常、アプリケーションは完全にブラウザまたはモバイル デバイス上で実行されます。</p>
<ul>
<li><p><strong>特徴_</strong>: クライアント シークレットなし、リダイレクト URI 経由で認証_</p></li>
<li><p><strong>ユースケース</strong>: シングルページアプリケーション (React、Angular、Vue)、モバイルアプリ、デスクトップアプリ_</p></li>
<li><p><strong>認証フロー</strong>: 認証コード + PKCE (必須)</p></li>
<li><p><strong>構成</strong>: <code>クライアント認証</code> = オフ</p></li>
</ul>___プレコード_1___

<h3 id="confidential-client"><strong>2.2 機密クライアント</strong></h3>
<p>クライアントには、クライアント シークレット (通常はサーバー側アプリケーション) を保護する機能があります。</p>
<ul>
<li><p><strong>特徴_</strong>: クライアント シークレットまたは秘密キーがあり、エンドポイント トークンの呼び出し時に認証されます__HTMLTAG_228___</li>
<li><p><strong>ユースケース</strong>: サーバーサイド Web アプリ (Spring Boot、Django、.NET)、バックエンド API、サービス間通信_</p></li>
<li><p><strong>認証フロー</strong>: 認証コード、クライアント認証情報、またはその両方</p></li>
<li><p><strong>構成</strong>: <code>クライアント認証</code> = ON</p></li>
</ul>

___プレコード_2___

<h3 id="bearer-only-client"><strong>_2.3 ベアラー専用クライアント (レガシー)</strong></h3>
<p>クライアントはベアラー トークンを受信して検証するだけであり、ログイン フローは開始しません。</p>
<ul>
<li><p><strong>特徴_</strong>: リダイレクト URI なし、受信トークンのみを検証_</p></li>
<li><p><strong>ユースケース</strong>: 純粋な API サービス、マイクロサービスは認証されたリクエストのみを受け入れます__HTMLTAG_268___</li>
<li><p><strong>注</strong>: Keycloak 25以降では、ベアラーのみが__HTMLTAG_274___非推奨__HTMLTAG_275___になりました。代わりに、機密クライアントを作成し、__HTMLTAG_276___サービス アカウントの役割_</code></p></li> のみを有効にしてください。
</ul>

<table>
<thead>
<tr><th>特別_</th><th>公開_</th><th>機密</th><th>Bearer-only (非推奨)</th></tr>
</thead>
<tbody>
<tr><td>クライアント認証</td><td>OFF</td><td>ON</td><td>N/A</td></tr>
<tr><td>_クライアント シークレット</td><td>いいえ</td><td>はい</td><td>いいえ</td></tr>
<tr><td>ログインを初期化できます</td><td>はい</td><td>はい</td><td>いいえ</td></tr>
<tr><td>_リダイレクト URI_</td><td>必須</td><td>必須</td><td>いいえ</td></tr>
<tr><td>PKCE_</td><td>必須</td><td>オプション</td><td>N/A</td></tr>
<tr><td>メインケースを使用</td><td>SPA、モバイル</td><td>サーバーアプリ</td><td>純粋なAPI</td></tr>
</tbody>
</table><h2 id="3-tao-oidc-client"><strong>3.管理コンソール経由で OIDC クライアントを作成</strong></h2>

<h3 id="buoc-tao-client"><strong>_3.1 クライアントを作成する手順</strong></h3>
<ol>
<li><p>アクセス <strong>管理コンソール</strong> → レルムを選択 → <strong>クライアント</strong> → <strong>クライアントの作成</strong></p></li>
<li><p><strong>一般設定</strong>:</p>
<ul>
<li><strong>クライアント タイプ</strong>: OpenID Connect</li>
<li><strong>クライアントID</strong>: <code>my-app</code> (一意の識別子)</li>
<li><strong>名前</strong>: 私のアプリケーション (表示名)</li>
<li><strong>説明</strong>: クライアントの説明</li>
<li><strong>常に UI に表示</strong>: オフ</li>
</ul>
</li>
<li><p><strong>機能構成</strong>:</p>
<ul>
<li><strong>クライアント認証</strong>: ON (機密) または OFF (公開)</li>
<li><strong>_認可</strong>: きめ細かい認可が必要な場合はオン</li>
<li><strong>認証フロー__HTMLTAG_422___: 適切なフローを選択</li>
</ul>
</li>
<li><p><strong>ログイン設定</strong>:</p>
<ul>
<li>ルート URL、ホーム URL、有効なリダイレクト URI、有効なログアウト後のリダイレクト URI、Web オリジン</li>
</ul>
</li>
</ol>

<h3 id="tao-client-bang-admin-cli"><strong>3.2 管理 CLI を使用したクライアントの作成</strong></h3>
___プレコード_3___

<h3 id="tao-client-bang-rest-api"><strong>3.3 管理 REST API を使用してクライアントを作成</strong></h3>
___プレコード_4___

<h2 id="4-client-settings-chi-tiet"><strong>_4.クライアント設定の詳細</strong></h2>

<h3 id="general-settings"><strong>_4.1 一般設定</strong></h3>
<table>
<thead>
<tr><th>設定</th><th>説明</th><th>メモ_</th></tr>
</thead>
<tbody>
<tr><td>クライアントID</td><td>クライアントの一意の識別子</td><td>作成後は変更できません</td></tr>
<tr><td>名前</td><td>表示名</td><td>ローカリゼーションキーのサポート: <code>${my-client-name}</code></td></tr>
<tr><td>説明</td><td>クライアントの説明_</td><td></td></tr>
<tr><td>_常に UI に表示</td><td>常にアカウント コンソールに表示_</td><td>内部ツールに使用_</td></tr>
</tbody>
</table><h3 id="access-settings"><strong>_4.2 アクセス設定</strong></h3>
<table>
<thead>
<tr><th>設定</th><th>説明</th><th>例_</th></tr>
</thead>
<tbody>
<tr><td>ルート URL_</td><td>相対 URL の先頭に追加されるルート URL_</td><td><code>http://localhost:3000</code></td></tr>
<tr><td>ホーム URL_</td><td>クライアントにリダイレクトするときのデフォルト URL_</td><td><code>/ダッシュボード_</code></td></tr>
<tr><td>有効なリダイレクト URI</td><td>有効なリダイレクト URI のリスト (ワイルドカード *)</td><td><code>http://localhost:3000/*</code></td></tr>
<tr><td>有効なポスト ログアウト リダイレクト URI</td><td>有効なポスト ログアウト_</td><td><code>+</code> (リダイレクト URI を継承)</td></tr>
<tr><td>Web オリジン</td><td>CORS で許可されたオリジン</td><td><code>+</code> (リダイレクト URI の継承)</td></tr>
<tr><td>管理者 URL_</td><td>バックチャネル操作用の URL_</td><td>_バックエンド URL (ログアウト、ポリシー適用)_</td></tr>
</tbody>
</table>

<p><strong>リダイレクト URI のセキュリティに関するメモ:</strong></p>
<ul>
<li><p><strong>絶対に</strong> 本番環境ではリダイレクト URI としてワイルドカード <code>*</code> を使用してください。これは脆弱性です <strong>Open Redirect</strong></p></li>
<li><p>__HTMLTAG_592___正しい__HTMLTAG_593___必要なリダイレクトURIを宣言____HTMLTAG_594__HTMLTAG_595___
<li><p>_本番環境での HTTPS の使用</p></li>
<li><p>_本番リダイレクト URI では localhost の使用を避ける</p></li>
</ul>

___プレコード_5___<h3 id="capability-config"><strong>4.3 機能構成</strong></h3>
<table>
<thead>
<tr><th>_設定_</th><th>説明_</th><th>いつオンにするか</th></tr>
</thead>
<tbody>
<tr><td>クライアント認証</td><td>ON = 機密、OFF = 公開_</td><td>サーバー アプリの場合_</td></tr>
<tr><td>認可</td><td>きめ細かい認可(UMA)</td><td>リソースベースの権限が必要な場合__HTMLTAG_635___</tr>
<tr><td>標準フロー</td><td>認可コードフロー_</td><td>ほとんどの使用例_</td></tr>
<tr><td>直接アクセス許可</td><td>リソース所有者のパスワード資格情報</td><td>従来のアプリ (非推奨)_</td></tr>
<tr><td>暗黙的フロー</td><td>暗黙的付与 (非推奨)</td><td>推奨されません_</td></tr>
<tr><td>_サービス アカウントの役割_</td><td>クライアント認証情報の付与</td><td>マシン間認証_</td></tr>
<tr><td>_OAuth 2.0 デバイス認証付与</td><td>デバイス コード フロー</td><td>スマート TV、CLI ツール_</td></tr>
<tr><td>OIDC CIBA Grant</td><td>クライアント開始のバックチャネル認証_</td><td>銀行、通信_</td></tr>
</tbody>
</table>

<h3 id="login-settings"><strong>4.4 ログイン設定</strong></h3>
<table>
<thead>
<tr><th>設定_</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>_ログインテーマ</td><td>このクライアントのログインページのテーマ_</td></tr>
<tr><td>同意が必要_</td><td>ユーザーに同意画面を表示</td></tr>
<tr><td>画面にクライアントを表示</td><td>同意画面にクライアント名を表示_</td></tr>
<tr><td>クライアントの同意画面のテキスト</td><td>同意のカスタムテキスト</td></tr>
</tbody>
</table><h3 id="logout-settings"><strong>4.5 ログアウト設定</strong></h3>
<table>
<thead>
<tr><th>設定</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>フロント チャネル ログアウト</td><td>ブラウザ リダイレクトによるログアウト (OpenID Connect フロント チャネル ログアウト)</td></tr>
<tr><td>バックチャネルログアウトURL</td><td>Keycloakからバックチャネルログアウトリクエストを受信するURL_</td></tr>
<tr><td>バックチャネル ログアウト セッションが必要</td><td>ログアウト トークンにセッション ID を含める_</td></tr>
<tr><td>バックチャネル ログアウトによりオフライン セッションが取り消される</td><td>ログアウト時にオフライン セッションが取り消される_</td></tr>
</tbody>
</table>

___プレコード_6___

<h2 id="5-oidc-auth-flows"><strong>5. OIDC 認証フローの詳細</strong></h2>

<h3 id="authorization-code-flow"><strong>_5.1 認証コード フロー</strong></h3>
<p>これは、ほとんどのユースケースで <strong>__HTMLTAG_777___ が最も推奨するフローです。ユーザーはKeycloakログインページにリダイレクトされます。認証が成功すると、Keycloak は認証コードを返し、クライアントはコードをトークンと交換します。</p>

___プレコード_7___

<p><strong>_リクエスト認証コード:</strong></p>
___プレコード_8___

<p><strong>トークンの交換コード:</strong></p>
___プレコード_9___

<p><strong>応答:</strong></p>
___プレコード_10___

<h3 id="authorization-code-with-pkce"><strong>_5.2 認証コード フロー + PKCE</strong></h3>
<p>PKCE (コード交換用の証明キー、RFC 7636) は、認可コード フローを認可コード インターセプト攻撃から保護します。 <strong>パブリック クライアントに必須</strong> および <strong>すべてのクライアントに推奨</strong>.</p>

<p><strong>仕組み:</strong></p>
<ol>
<li><p>クライアントは__HTMLTAG_808___code_verifier</code> (ランダムな文字列43～128文字)</p></li>を作成します
<li><p>クライアント属性__HTMLTAG_814___code_challenge</code> = Base64URL(SHA256(<code>code_verifier</code>))</p></li>
<li><p>_承認リクエストで__HTMLTAG_822___code_challenge</code>を送信</p></li>
<li><p>トークンリクエストで__HTMLTAG_828___code_verifier_</code>を送信 — ハッシュと比較によるKeycloak検証</p></li>
</ol><p><strong>Keycloak の PKCE 設定:</strong></p>
<p>クライアントに移動→タブ__HTMLTAG_838___詳細</strong>→__HTMLTAG_840___詳細設定</strong>:</p>
<table>
<thead>
<tr><th>設定_</th><th>値_</th><th>説明_</th></tr>
</thead>
<tbody>
<tr><td>Code Exchange コード チャレンジ メソッドの証明キー</td><td>S256</td><td>SHA-256 による必須 PKCE (推奨)</td></tr>
<tr><td></td><td>plain</td><td>_プレーン テキストの PKCE (安全ではありません)_</td></tr>
<tr><td></td><td>(空)</td><td>オプションのPKCE</td></tr>
</tbody>
</table>

<p><strong>_PKCE フロー:</strong></p>
___プレコード_11___

<h3 id="implicit-flow"><strong>5.3 暗黙的フロー (非推奨)</strong></h3>
<p><strong> 使用しないでください。</strong> OAuth 2.0 セキュリティの現在のベスト プラクティス (RFC 9700) では、トークンは URL フラグメント経由で返され、ブラウザ履歴やリファラー ヘッダー経由で簡単に盗まれるため、暗黙的フローを使用しないことを推奨しています。</p>

<p><strong>_置換:</strong> SPA を含むすべてのクライアントに認証コード フロー + PKCE を使用します。</p>

<p>レガシー システムのサポートが強制される場合:</p>
___プレコード_12___

<h3 id="client-credentials-flow"><strong>_5.4 クライアント認証情報フロー</strong></h3>
<p>__HTMLTAG_904___マシン間認証</strong> の場合 — ユーザー操作はありません。クライアントは、独自の資格情報を使用して自身を認証します。</p>

<p><strong>ユースケース:</strong></p>
<ul>
<li><p>マイクロサービス呼び出しマイクロサービス</p></li>
<li><p>_バックエンド バッチ ジョブ</p></li>
<li><p>_スケジュールされたタスクには API アクセスが必要</p></li>
<li><p>CI/CD パイプライン</p></li>
</ul>

<p><strong>_構成:</strong></p>
<ol>
<li><p>__HTMLTAG_936___機密クライアントの作成</strong> (<code>クライアント認証</code> = ON)</p></li>
<li><p>機能構成で__HTMLTAG_944___サービス アカウント ロール</strong>を有効にする</p></li>
<li><p>サービス アカウントに役割を割り当てる: クライアント → <strong>サービス アカウントの役割</strong> タブ</p></li>
</ol>

___プレコード_13___

<h3 id="device-authorization-grant"><strong>5.5 デバイス認証付与 (RFC 8628)</strong></h3>
<p>入力制限のあるデバイス向け — スマート TV、IoT デバイス、CLI ツール。ユーザーはコードを使用して別のデバイス (電話、ラップトップ) で認証します。</p><p><strong>_構成:</strong></p>
<ol>
<li><p>_クライアント → 機能設定 → 有効 <strong>OAuth 2.0 デバイス認証付与</strong></p></li>
<li><p>レルム設定 → 構成 <strong>OAuth デバイス コード</strong> 有効期間 (デフォルト 600 秒)___HTMLTAG_976__HTMLTAG_977___
</ol>

___プレコード_14___

<h3 id="ciba-flow"><strong>_5.6 CIBA — クライアント開始バックチャネル認証 (OIDC CIBA)</strong></h3>
<p>CIBA を使用すると、クライアントはブラウザ__HTMLTAG_985___ 経由でユーザーをリダイレクトすることなく認証を開始できます。代わりに、Keycloakは別のチャネル(プッシュ通知、SMS、電子メール)経由でユーザーに認証リクエストを送信します。</p>

<p><strong>ユースケース:</strong></p>
<ul>
<li><p><strong>銀行</strong>: POS はモバイル アプリ経由で支払いを認証_</p></li>
<li><p><strong>電気通信</strong>: SIM ベースの認証</p></li>
<li><p><strong>コールセンター</strong>: 電話で顧客を認証するエージェント_</p></li>
</ul>

<p><strong>_CIBA 構成:</strong></p>
<ol>
<li><p>クライアント → 機能構成 → 有効 <strong>OIDC CIBA 助成金</strong></p></li>
<li><p>レルム設定 → 認証 → タブ <strong>CIBA ポリシー</strong>:</p></li>
</ol>

<table>
<thead>
<tr><th>設定</th><th>説明_</th><th>デフォルト値_</th></tr>
</thead>
<tbody>
<tr><td>バックチャネルトークン配信モード</td><td>ポーリング、ping、またはプッシュ_</td><td>ポーリング</td></tr>
<tr><td>有効期限</td><td>認証リクエストの有効期限_</td><td>120秒_</td></tr>
<tr><td>間隔</td><td>ポーリングリクエスト間の間隔_</td><td>5秒_</td></tr>
<tr><td>認証要求されたユーザーヒント</td><td>ユーザーヒントの種類:login_hint、login_hint_token、id_token_hint</td><td>login_hint</td></tr>
</tbody>
</table>

___プレコード_15___

<p><strong>カスタム CIBA 認証チャネル プロバイダー:</strong></p>
<p>デフォルトのKeycloakは内部で__HTMLTAG_1080___CIBALoginUserResolver</code>を使用します。実際のプッシュ通知を送信するには、SPI カスタム:</p> を実装する必要があります。
___プレコード_16___

<h2 id="6-tich-hop-react"><strong>6. OIDC クライアントと React (SPA) の統合</strong></h2><h3 id="keycloak-js-adapter"><strong>6.1 keycloak-js アダプターの使用</strong></h3>
<p>Keycloak は SPA 用の公式 JavaScript アダプターを提供します:</p>

___プレコード_17___

<p><strong>React 用に Keycloak クライアントを構成する:</strong></p>
___プレコード_18___

<p><strong>React で Keycloak を初期化する:</strong></p>
___プレコード_19___

___プレコード_20___

___プレコード_21___

<h3 id="react-oidc-context"><strong>_6.2 reverse-oidc-context の使用 (keycloak-js を置き換える)</strong></h3>
<p>もう 1 つのオプションは、__HTMLTAG_1108___oidc-client-ts</code> に基づくライブラリ__HTMLTAG_1106___react-oidc-context</code> を使用することです。これは Keycloak 固有のアダプター:</p> に依存しません。

___プレコード_22___

___プレコード_23___

___プレコード_24___

<h2 id="7-tich-hop-spring-boot"><strong>_7. OIDC クライアントと Spring Boot の統合</strong></h2>

<h3 id="spring-boot-oauth2-resource-server"><strong>7.1 Spring Boot OAuth2 リソース サーバー</strong></h3>
<p>Spring Boot を <strong>リソース サーバーとして構成</strong> — Keycloak からの JWT トークンを検証します:</p>

___プレコード_25___

___プレコード_26___

___プレコード_27___

<h3 id="spring-boot-oauth2-client"><strong>7.2 Spring Boot OAuth2 クライアント (サーバー側ログイン)</strong></h3>
<p>Spring Boot を <strong>OAuth2 クライアントとして構成</strong> — サーバー側のログイン フロー:</p>

___プレコード_28___

___プレコード_29___

<p><strong>Spring Boot OAuth2 クライアントの Keycloak クライアント設定:</strong></p>
___プレコード_30___

<h2 id="8-advanced-client-settings"><strong>8。クライアントの詳細設定</strong></h2>

<h3 id="advanced-tab"><strong>8.1 詳細タブ</strong></h3>
<p>クライアントの__HTMLTAG_1144___詳細</strong>タブの詳細構成:</p><table>
<thead>
<tr><th>設定</th><th>説明_</th><th>推奨値_</th></tr>
</thead>
<tbody>
<tr><td>アクセス トークンの有効期間</td><td>このクライアントのレルム レベルのトークンの有効期間をオーバーライド_</td><td>空白のまま = レルム レベルを使用_</td></tr>
<tr><td>クライアント セッション アイドル</td><td>クライアント セッション アイドル タイムアウトをオーバーライド_</td><td>空白のままにする = レルム レベルを使用_</td></tr>
<tr><td>クライアント セッションの最大値</td><td>クライアント セッションの最大存続期間を上書き_</td><td>空白のままにする = レルム レベルを使用_</td></tr>
<tr><td>クライアントのオフライン セッションのアイドル</td><td>オフライン セッションのアイドル タイムアウトを上書き_</td><td>空白のままにする = レルム レベルを使用_</td></tr>
<tr><td>クライアントのオフライン セッション最大</td><td>オフライン セッションの最大存続期間を上書き_</td><td>空白のままにする = レルム レベルを使用_</td></tr>
<tr><td>PKCE コードチャレンジメソッド</td><td>必須の PKCE メソッド_</td><td>S256</td></tr>
<tr><td>プッシュ承認リクエストが必要</td><td>PAR (RFC 9126)が必要</td><td>高セキュリティアプリの場合はON</td></tr>
<tr><td>ACR からスピーカーへのマッピング</td><td>ACR 値 → 保証レベルのマッピング</td><td>ステップアップ認証の構成</td></tr>
</tbody>
</table>

<h3 id="credentials-tab"><strong>8.2 [認証情報] タブ (機密クライアント)</strong></h3>
<p>クライアント認証情報の管理:</p>
<ul>
<li><p><strong>クライアント認証子</strong>: クライアント ID とシークレット (デフォルト)、署名付き JWT (client_secret_jwt)、秘密キー付き署名付き JWT (private_key_jwt)、X.509 証明書</p></li>
<li><p><strong>クライアント シークレット</strong>: 侵害された場合は再生成</p></li>
<li><p><strong>登録アクセストークン</strong>: 動的クライアント登録に使用</p></li>
</ul><h3 id="service-account-tab"><strong>8.3 「サービス アカウント ロール」タブ</strong></h3>
<p>サービス アカウントにロールを割り当てる (クライアント認証情報フロー):</p>
<ol>
<li><p>クライアント → タブを開く <strong>サービス アカウントの役割</strong></p></li>
<li><p>クリック__HTMLTAG_1266___役割の割り当て</strong></p></li>
<li><p>割り当てるレルム ロールまたはクライアント ロールを選択</p></li>
</ol>

___プレコード_31___

<h2 id="9-thuc-hanh"><strong>9。演習_</strong></h2>

<h3 id="lab-1"><strong>ラボ 1: React SPA のパブリック クライアントの作成</strong></h3>
<ol>
<li><p>クライアントを作成__HTMLTAG_1286___react-spa-lab</code>、__HTMLTAG_1288___クライアント認証</code> = OFF</p></li>
<li><p>構成: 有効なリダイレクト URI = <code>http://localhost:3000/*</code>、Web オリジン = <code>http://localhost:3000</code></p></li>
<li><p>PKCE を有効にする: 詳細 → PKCE コードチャレンジ方式 = <code>S256</code></p></li>
<li><p>React アプリの作成、__HTMLTAG_1306___keycloak-js</code>、ログイン/ログアウトの統合</p></li>
<li><p>ブラウザの [開発ツール] → [アプリケーション] → [ネットワーク] タブでトークンを確認します</p></li>
</ol>

<h3 id="lab-2"><strong>ラボ 2: Spring Boot API の Confidential クライアントの作成</strong></h3>
<ol>
<li><p>__HTMLTAG_1324___クライアント認証</code> = ON___HTMLTAG_1326__HTMLTAG_1327___を使用してクライアントを作成__HTMLTAG_1322___spring-api-lab</code>
<li><p>__HTMLTAG_1330___サービス アカウントの役割</code></p></li> を有効にする
<li><p>サービス アカウント</p></li> にロール <code>admin</code> を割り当てる
<li><p>__HTMLTAG_1342___spring-boot-starter-oauth2-resource-server</code></p></li> を使用して Spring Boot プロジェクトを作成する
<li><p>エンドポイントを実装__HTMLTAG_1348___/api/me</code> は JWT</p></li> からユーザー情報を返します
<li><p>__HTMLTAG_1354___curl</code> ベアラー トークンを送信</p></li> でテストします
</ol><h3 id="lab-3"><strong>ラボ 3: クライアント認証情報フロー</strong></h3>
<ol>
<li><p>クライアントの作成__HTMLTAG_1366___batch-worker</code>only クライアント認証情報フロー_</p></li>
<li><p><code>curl</code></p></li> 経由でトークンを取得します
<li><p>取得したトークンを使用して API エンドポイントを呼び出します</p></li>
<li><p>__HTMLTAG_1382___jwt.io</a> (開発専用)</p></li> 経由でトークンの内容を確認します
</ol>

<h3 id="lab-4"><strong>ラボ 4: デバイス認証フロー</strong></h3>
<ol>
<li><p>デバイス認証許可を有効にしてパブリック クライアントを作成__HTMLTAG_1394___cli-tool</code>__HTMLTAG_1396__HTMLTAG_1397___
<li><p>__HTMLTAG_1400___curl</code> を使用してデバイス フローをシミュレートします:</p>
<ul>
<li>デバイス コードをリクエスト</li>
<li>ブラウザで検証 URI を開き、ユーザー コード__HTMLTAG_1407___
<li>トークンのポーリング</li>
</ul>
</li>
<li><p>トークンを受信したことを確認</p></li>
</ol>

___プレコード_32___