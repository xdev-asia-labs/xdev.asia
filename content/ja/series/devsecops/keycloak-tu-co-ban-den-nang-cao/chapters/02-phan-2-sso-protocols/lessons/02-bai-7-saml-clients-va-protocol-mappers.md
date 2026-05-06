---
id: 019d8b30-b107-7001-c001-e0c5f8100107
title: 'レッスン 7: SAML クライアントとプロトコル マッパー'
slug: bai-7-saml-clients-va-protocol-mappers
description: SAML 2.0 クライアント、SAML バインディング (POST、リダイレクト、アーティファクト)、アサーション構成、XML 署名と暗号化、エンティティ記述子のインポート、IDP 開始ログインを作成および構成します。 OIDC および SAML のプロトコル マッパー、軽量アクセス トークン、ペアワイズ サブジェクト識別子。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 2: SSO プロトコル - OpenID Connect と SAML'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7385" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7385)"/>

  <!-- Decorations -->
  <g>
    <circle cx="809" cy="37" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1018" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="727" cy="215" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="936" cy="44" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="645" cy="133" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="207" x2="1100" y2="287" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="237" x2="1050" y2="307" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1043.3730669589463,186 1043.3730669589463,228 1007,249 970.6269330410536,228 970.6269330410536,186 1007,165" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — レッスン 7</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: SAML クライアントとプロトコル マッパー__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak の基本から高度なもの</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: SSO プロトコル - OpenID Connect と SAML</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="1-tong-quan-saml-2"><strong>1. KeycloakのSAML 2.0の概要</strong></h2>

<p>SAML 2.0 (Security Assertion Markup Language) は、企業内で広く使用されている XML ベースの認証プロトコルであり、特に従来のシステム、SaaS アプリケーション (Salesforce、ServiceNow、AWS)、または政府機関と統合する場合によく使用されています。</p><h3 id="saml-vs-oidc"><strong>SAML 2.0 と OpenID Connect</strong></h3>
<table>
<thead>
<tr><th>機能_</th><th>SAML 2.0</th><th>OpenID Connect</th></tr>
</thead>
<tbody>
<tr><td>形式_</td><td>XML</td><td>JSON (JWT)_</td></tr>
<tr><td>トランスポート</td><td>_HTTP リダイレクト、POST、アーティファクト_</td><td>_HTTP REST_</td></tr>
<tr><td>トークン</td><td>SAML アサーション (XML)_</td><td>JWT</td></tr>
<tr><td>サイズ</td><td>大きい (XML 冗長)_</td><td>コンパクト (JSON)_</td></tr>
<tr><td>モバイル サポート</td><td>不十分 (XML 解析が重い)_</td><td>良好 (JSON ネイティブ)_</td></tr>
<tr><td>メインのユースケース</td><td>エンタープライズ SSO、レガシー システム</td><td>最新の Web/モバイル アプリ_</td></tr>
<tr><td>複雑さ</td><td>高</td><td>下位_</td></tr>
<tr><td>ログアウト_</td><td>SLO (シングルログアウト)</td><td>RP 開始、バックチャネル、フロントチャネル_</td></tr>
</tbody>
</table>

<p><strong>SAML を使用する場合</strong></p>
<ul>
<li><p>SAML を必要とする SaaS アプリケーション (Salesforce、Google Workspace、AWS) と統合</p></li>
<li><p>SAML のみをサポートする IdP または SP と関連付ける</p></li>
<li><p>_政府機関の標準への準拠が必要</p></li>
<li><p>_ADFS システム、Shibboleth からの移行</p></li>
</ul><h3 id="saml-terminology"><strong>SAML 用語</strong></h3>
<table>
<thead>
<tr><th>_用語_</th><th>説明_</th><th>OIDC相当_</th></tr>
</thead>
<tbody>
<tr><td>_アイデンティティプロバイダー(IdP)</td><td>ユーザー認証システム(Keycloak)</td><td>OpenIDプロバイダー(OP)</td></tr>
<tr><td>_サービスプロバイダー (SP)_</td><td>認証要求者 (アプリケーション)_</td><td>信頼者 (RP)_</td></tr>
<tr><td>アサーション</td><td>認証情報を含むXMLドキュメント_</td><td>IDトークン_</td></tr>
<tr><td>AuthnRequest</td><td>SP → IdP からの認証リクエスト_</td><td>認可リクエスト</td></tr>
<tr><td>ACS URL_</td><td>アサーション コンシューマ サービス URL_</td><td>リダイレクト URI_</td></tr>
<tr><td>エンティティID</td><td>SP/IdPの一意の識別子_</td><td>クライアントID / 発行者_</td></tr>
<tr><td>メタデータ</td><td>エンドポイント、証明書を記述するXML</td><td>よく知られている構成</td></tr>
<tr><td>名前ID</td><td>アサーション内のユーザー識別子</td><td>サブクレーム</td></tr>
<tr><td>属性ステートメント</td><td>アサーション内のユーザー属性</td><td>JWT のクレーム_</td></tr>
</tbody>
</table>

<h2 id="2-tao-saml-client"><strong>2. SAML 2.0 クライアントの作成_</strong></h2>

<h3 id="tao-saml-client-admin-console"><strong>_2.1 管理コンソール経由で作成</strong></h3>
<ol>
<li><p>アクセス <strong>管理コンソール</strong> → レルムを選択 → <strong>クライアント</strong> → <strong>クライアントの作成</strong></p></li>
<li><p><strong>一般設定</strong>:</p>
<ul>
<li><strong>_クライアント タイプ</strong>: SAML</li>
<li><strong>クライアント ID</strong>: URL ベースのエンティティ ID (例: <code>https://myapp.example.com/saml/metadata</code></li>)
<li><strong>名前</strong>: 私のSAMLアプリケーション</li>
</ul>
</li>
<li><p><strong>次へ</strong> をクリックし、__HTMLTAG_309___保存</strong></p></li>
</ol><h3 id="import-entity-descriptor"><strong>2.2 エンティティ記述子 (メタデータ) からのインポート</strong></h3>
<p>SAML クライアントを作成する最速の方法 — サービス プロバイダーから XML メタデータをインポートします:</p>
<ol>
<li><p>アクセス <strong>クライアント</strong> → <strong>インポートクライアント</strong></p></li>
<li><p>_XML メタデータ ファイルをアップロードするか、メタデータの URL を貼り付け</p></li>
<li><p>Keycloak の自動入力: エンティティ ID、ACS URL、SLO URL、証明書、バインディング</p></li>
</ol>

<p><strong>_サービス プロバイダー XML メタデータの例:</strong></p>
___プレコード_0___

<h3 id="keycloak-idp-metadata"><strong>2.3 Keycloak IdP メタデータの取得</strong></h3>
<p>サービスプロバイダーには、構成のために Keycloak メタデータ (IdP) が必要です。メタデータ URL:</p>
___プレコード_1___

<p>メタデータには、エンティティ ID、SSO エンドポイント、SLO エンドポイント、署名/暗号化証明書が含まれます。</p>

<h2 id="3-saml-client-settings"><strong>3. SAML クライアント設定の詳細</strong></h2><h3 id="saml-settings-tab"><strong>3.1 [設定]タブ</strong></h3>
<table>
<thead>
<tr><th>設定_</th><th>説明_</th><th>推奨値_</th></tr>
</thead>
<tbody>
<tr><td>クライアント ID (エンティティ ID)</td><td>SAML エンティティ ID — SP の一意の識別子</td><td>URL 形式: <code>https://app.example.com/saml</code></td></tr>
<tr><td>名前</td><td>表示名_</td><td>アプリケーション名_</td></tr>
<tr><td>クライアント署名が必要</td><td>SP は AuthnRequest に署名する必要があります_</td><td>ON (運用)_</td></tr>
<tr><td>_POST バインディングの強制</td><td>応答の POST バインドの強制_</td><td>ON</td></tr>
<tr><td>_フロント チャネル ログアウト</td><td>ブラウザ リダイレクトによるログアウト</td><td>ON</td></tr>
<tr><td>名前 ID の形式を強制</td><td>必須の名前 ID 固有の形式_</td><td>オプション_</td></tr>
<tr><td>名前 ID の形式</td><td>名前 ID の形式</td><td>電子メールまたは永続的_</td></tr>
<tr><td>AuthnStatement を含める</td><td>アサーションに AuthnStatement を含める</td><td>ON</td></tr>
<tr><td>ドキュメントに署名_</td><td>SAML 応答全体に署名_</td><td>ON</td></tr>
<tr><td>_アサーションに署名</td><td>応答内のアサーションに署名</td><td>ON (推奨)</td></tr>
</tbody>
</table>

<h3 id="saml-bindings"><strong>3.2 SAML バインディング</strong></h3>
<p>SAML は複数のバインディングをサポートしています - SAML メッセージが SP と IdP 間で転送される方法:</p><table>
<thead>
<tr><th>_バインディング_</th><th>説明_</th><th>ユースケース_</th></tr>
</thead>
<tbody>
<tr><td><strong>HTTP-POST</strong></td><td>HTML フォーム自動送信経由で送信されたメッセージ</td><td>アサーションのデフォルト (大)</td></tr>
<tr><td><strong>_HTTP-Redirect</strong></td><td>URL クエリ パラメータ経由で送信されたメッセージ_</td><td>AuthnRequest (small)</td></tr>
<tr><td><strong>アーティファクト</strong></td><td>アーティファクト参照のみを送信し、SPはバックチャネル経由でアサーションを取得_</td><td>高セキュリティ、大規模アサーション</td></tr>
</tbody>
</table>

<p><strong>クライアント設定でバインドを構成します:</strong></p>
<table>
<thead>
<tr><th>_設定_</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>マスター SAML 処理 URL</td><td>すべての SAML バインディングの共通 URL</td></tr>
<tr><td>アサーション コンシューマ サービス POST バインディング URL</td><td>POST バインディング用の ACS URL</td></tr>
<tr><td>_アサーション コンシューマ サービス リダイレクト バインディング URL</td><td>_リダイレクト バインディング用の ACS URL_</td></tr>
<tr><td>アサーション コンシューマ サービス アーティファクト バインディング URL</td><td>アーティファクト バインディング用の ACS URL</td></tr>
<tr><td>_ログアウト サービス POST バインディング URL</td><td>POST バインディングの SLO URL</td></tr>
<tr><td>ログアウト サービス リダイレクト バインディング URL</td><td>リダイレクト バインディングの SLO URL_</td></tr>
<tr><td>ログアウト サービス アーティファクト バインディング URL</td><td>アーティファクト バインディングの SLO URL</td></tr>
</tbody>
</table>

___プレコード_2___

<p><strong>_アーティファクト バインディングの詳細:</strong></p>
<p>Artifact バインディングは POST/リダイレクトとは異なります。Keycloak はブラウザ経由でアサーション全体を送信するのではなく、__HTMLTAG_566___artifact</strong> (参照 ID) のみを送信します。その後、SP は Keycloak を直接 (バックチャネル) 呼び出して、実際のアサーションを取得します。</p>

___プレコード_3___

<p>アーティファクト バインディングは、アサーションがブラウザを経由しないため、より安全です。アサーションに機密データが含まれている場合に役立ちます。</p>

<h3 id="xml-signature-encryption"><strong>_3.3 XML 署名と暗号化</strong></h3><p><strong>署名構成:</strong></p>
<table>
<thead>
<tr><th>_設定_</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>_署名アルゴリズム</td><td>XML署名アルゴリズム: RSA_SHA256 (推奨)、RSA_SHA512、DSA_SHA1</td></tr>
<tr><td>SAML 署名キー名</td><td>署名内のキー名: KEY_ID、CERT_SUBJECT、NONE</td></tr>
<tr><td>_正規化方法</td><td>XML 正規化: 独占 (推奨)</td></tr>
</tbody>
</table>

<p><strong>_暗号化構成:</strong></p>
<p>__HTMLTAG_614___アサーションの暗号化</strong> を有効にしてアサーションを暗号化します。対応する秘密キーを持つ SP のみが復号化できます:</p>
<ul>
<li><p>_SP の <strong>暗号化証明書</strong> をタブ <strong>キー</strong></p></li> にアップロードします
<li><p>_暗号化アルゴリズム: AES128、AES256 (推奨)</p></li>
</ul>

___プレコード_4___

<h3 id="saml-keys-tab"><strong>_3.4 タブ キー</strong></h3>
<p>SAML クライアントの証明書の管理:</p>
<ul>
<li><p><strong>署名キー</strong>: SPがAuthnRequestの署名に使用する証明書 — 検証に使用されるKeycloak</p></li>
<li><p><strong>暗号化キー</strong>: Keycloakがアサーションの暗号化に使用する証明書 — SPは秘密キーを使用して復号化_</p></li>
</ul>

<p>PEM、JKS、または PKCS12 ファイルから証明書をインポートします:</p>
___プレコード_5___

<h2 id="4-saml-assertions"><strong>4. SAML アサーション構成</strong></h2>

<h3 id="name-id-format"><strong>4.1 名前 ID 形式</strong></h3>
<p>Name Keycloakがアサーションでユーザー識別子を送信する方法を決定するID:</p><table>
<thead>
<tr><th>形式_</th><th>説明_</th><th>ユースケース_</th></tr>
</thead>
<tbody>
<tr><td><code>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress_</code></td><td>メールアドレス</td><td>最も人気のある</td></tr>
<tr><td><code>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent_</code></td><td>各 SP の一意の永続 ID</td><td>公開したくないメール_</td></tr>
<tr><td><code>urn:oasis:names:tc:SAML:2.0:nameid-format:transient_</code></td><td>一時 ID、変更ごとにセッション_</td><td>プライバシーに配慮</td></tr>
<tr><td><code>urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified_</code></td><td>ユーザー名またはKeycloakユーザーID_</td><td>柔軟</td></tr>
</tbody>
</table>

<h3 id="assertion-lifespan"><strong>4.2 アサーションの存続期間</strong></h3>
<p>レルム設定の構成 → <strong>トークン</strong> タブ:</p>
<ul>
<li><p><strong>アサーションの有効期間</strong>: 有効なアサーション時間 (デフォルトは 5 分、短くすることをお勧めします)</p></li>
<li><p><strong>Not Before</strong>: アサーションはこの時間より前は無効です (クロック スキュー許容値)</p></li>
</ul>

<h3 id="ví-du-saml-assertion"><strong>4.3 SAML アサーションの例</strong></h3>
___プレコード_6___

<h2 id="5-idp-initiated-login"><strong>_5. IDP によるログイン (一方的な応答)</strong></h2>

<p>_通常のフロー (SP 開始) では、ユーザーが SP にアクセス → SP が IdP にリダイレクト → IdP が認証 → SP にリダイレクトします。 <strong>IDP-Initiated Login</strong> を使用すると、ユーザーは最初に SP を経由せずに IdP (Keycloak) から開始します。</p>

<h3 id="cau-hinh-idp-initiated"><strong>IDP によるログイン構成</strong></h3>
<ol>
<li><p>_SAML クライアントを開く → タブ <strong>上級</strong></p></li>
<li><p>__HTMLTAG_764___IDP で開始された SSO URL 名を検索</strong>: URL 名を入力します (例: <code>my-app</code></p></li>)
<li><p>_IDP 開始ログインへの URL は次のとおりです:</p></li>
</ol>

___プレコード_7___

<p><strong>セキュリティに関する注意:</strong> IDP 開始ログインには CSRF リスクがあります。アサーションには <code>InResponseTo</code> 属性がありません。製品で必要な場合にのみ使用してください (一部の SaaS アプリは IDP-Initiated のみをサポートします)。</p><h3 id="idp-initiated-settings"><strong>_IDP で開始される設定</strong></h3>
<table>
<thead>
<tr><th>設定_</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>IDP 開始 SSO URL 名</td><td>IDP 開始ログインの URL の最後の部分_</td></tr>
<tr><td>IDP が開始した SSO リレー状態</td><td>SP に送信されたデフォルトのリレー状態</td></tr>
<tr><td>アサーション コンシューマ サービス POST バインディング URL</td><td>URL SP 受信アサーション</td></tr>
</tbody>
</table>

<h2 id="6-protocol-mappers"><strong>6.プロトコル マッパー</strong></h2>

<p>プロトコル マッパーは、__HTMLTAG_820___トークン/アサーションにどのような情報が含まれるかを決定します</strong>。ユーザー属性、ロール、メタデータをクレーム (OIDC) または属性 (SAML) に変換します。</p>

<h3 id="mapper-concepts"><strong>_6.1 基本</strong></h3>
<p>プロトコル マッパーは 2 つのレベルで追加できます:</p>
<ul>
<li><p><strong>クライアント レベル</strong>: マッパーは特にそのクライアントに適用されます (クライアント → クライアント スコープ → 専用スコープ)</p></li>
<li><p><strong>クライアント スコープ レベル</strong>: マッパーはそのスコープを使用するすべてのクライアントに適用されます_</p></li>
</ul>

<p>各マッパーには共通の構成があります:</p>
<table>
<thead>
<tr><th>設定_</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>名前</td><td>マッパー名 (管理に使用)</td></tr>
<tr><td>マッパー タイプ_</td><td>マッパー タイプ (ユーザー属性、ハードコードされたクレームなど)</td></tr>
<tr><td>ID トークンに追加</td><td>ID トークン (OIDC) に追加</td></tr>
<tr><td>アクセス トークンに追加_</td><td>アクセス トークン (OIDC) に追加</td></tr>
<tr><td>ユーザー情報に追加</td><td>ユーザー情報応答に追加 (OIDC)_</td></tr>
<tr><td>トークン イントロスペクションに追加</td><td>トークン イントロスペクション レスポンスに追加</td></tr>
<tr><td>Lightweight アクセス トークンに追加</td><td>Lightweight アクセス トークンに追加</td></tr>
</tbody>
</table>

<h3 id="oidc-mappers"><strong>_6.2 OIDC プロトコル マッパー</strong></h3>

<p><strong>ユーザー属性マッパー</strong> — ユーザー属性をトークン要求にマップします:</p>
___プレコード_8___

<p>JWT の結果:</p>
___プレコード_9___<p><strong>ユーザー プロパティ マッパー</strong> — 組み込みユーザー プロパティ (ユーザー名、電子メール、名、姓) をマップします:</p>
___プレコード_10___

<p><strong>ユーザー セッション ノート マッパー</strong> — セッション データをトークンにマッピングします:</p>
___プレコード_11___

<p>利用可能なセッション メモ: <code>clientAddress</code>、__HTMLTAG_920___clientHost</code>、__HTMLTAG_922___identity_provider</code>、 <code>identity_provider_identity</code>.</p>

<p><strong>ハードコードされたクレーム マッパー</strong> — 固定値を使用してクレームを追加します:</p>
___プレコード_12___

<p><strong>_グループ メンバーシップ マッパー</strong> — ユーザーのグループ リストをトークンに追加します:</p>
___プレコード_13___

<p>結果:</p>
___プレコード_14___

<p><strong>オーディエンス マッパー</strong> — オーディエンスをアクセス トークンに追加します:</p>
___プレコード_15___

<p>結果:</p>
___プレコード_16___

<p><strong>スクリプト マッパー</strong> — JavaScript を使用したカスタム ロジック:</p>
___プレコード_17___

<p><strong>注</strong>: スクリプト マッパーは Nashorn JavaScript エンジンを使用します。 Keycloak 24以降では、スクリプトマッパーをインラインスクリプトではなくカスタムJARプロバイダーとしてデプロイする必要があります。 Keycloakドキュメントの__HTMLTAG_950___スクリプトのデプロイ</code>を参照してください。</p>

<h3 id="saml-mappers"><strong>6.3 SAML プロトコル マッパー</strong></h3>

<p>OIDC に似た SAML マッパーですが、出力は JWT クレームではなく SAML 属性です:</p>

<p><strong>ユーザー属性マッパー (SAML):</strong></p>
___プレコード_18___

<p><strong>ロール リスト マッパー (SAML):</strong></p>
___プレコード_19___

<p><strong>ハードコードされた属性マッパー (SAML):</strong></p>
___プレコード_20___

<p><strong>_SAML 属性名の形式:</strong></p>
<table>
<thead>
<tr><th>形式_</th><th>説明_</th><th>例_</th></tr>
</thead>
<tbody>
<tr><td>基本_</td><td>簡単な名前</td><td><code>メール</code>、__HTMLTAG_995___名___HTMLTAG_996__HTMLTAG_997__HTMLTAG_998___
<tr><td>URI 参照_</td><td>OID 形式、タイトル標準_</td><td><code>urn:oid:0.9.2342.19200300.100.1.3</code></td></tr>
<tr><td>未指定_</td><td>未指定形式</td><td>オプション</td></tr>
</tbody>
</table>

<h2 id="7-lightweight-access-tokens"><strong>7.軽量アクセス トークン_</strong></h2><p>デフォルトでは、Keycloak アクセス トークンには多くのクレーム (realm_access、resource_access、email、name、preferred_username など) が含まれています。 Lightweight Access Token は、必須のクレームのみを保持することでトークン サイズを削減します。</p>

<h3 id="tai-sao-can-lightweight"><strong>7.1 ライトウェイト アクセス トークンが必要な理由</strong></h3>
<ul>
<li><p><strong>帯域幅を削減</strong>: トークンが小さい = HTTP ヘッダー経由での送信が高速になります_</p></li>
<li><p><strong>機密情報を減らす_</strong>: アクセス トークンは多くのサービスに送信されることが多いため、多量の PII を含めるべきではありません_</p></li>
<li><p><strong>セキュリティの向上</strong>: リソース サーバーは必要に応じてトークン イントロスペクションを使用して完全なクレームを取得_</p></li>
</ul>

<h3 id="cau-hinh-lightweight"><strong>7.2 Lightweight Access Tokenの構成</strong></h3>
<p>デフォルトでは、プロトコル マッパーにはオプション <strong>軽量アクセス トークンに追加</strong> があります。使用するには:</p>
<ol>
<li><p>マッパーごとに、__HTMLTAG_1060___アクセス トークンに追加___HTMLTAG_1061_トークンに必要のないクレームの軽量___HTMLTAG_1062__HTMLTAG_1063___ をオフにします。
<li><p>クライアント ポリシー (次の投稿を参照) を使用して、特定のクライアントに軽量トークンを強制する_</p></li>
<li><p>リソース サーバーがトークン イントロスペクション エンドポイントを呼び出して完全なクレームを取得します:</p></li>
</ol>

___プレコード_21___

<h2 id="8-pairwise-subject-identifier"><strong>8。ペアごとの被験者識別子</strong></h2>

<p>デフォルトでは、Keycloakは__HTMLTAG_1078___パブリックサブジェクト識別子</strong>を使用します。_<code>sub</code>クレーム値はすべてのクライアントで同じです。これにより、クライアントはサービス間でユーザーを関連付けることができます。</p>

<p><strong>ペアごとのサブジェクト識別子</strong> は、クライアントごとに異なる <code>sub</code> を作成します — サービス間のユーザー追跡を防ぎます。</p>

<h3 id="cau-hinh-pairwise"><strong>8.1 ペアごとの識別子の構成</strong></h3>
<ol>
<li><p>プロトコル マッパー タイプを追加__HTMLTAG_1096___ペアワイズ サブジェクト識別子</strong> をクライアントまたはクライアント スコープ</p></li>
<li><p>_構成:</p></li>
</ol>

___プレコード_22___

<p><strong>結果:</strong></p>
___プレコード_23___

<p><strong>_セクター識別子 URI:</strong></p>
<p>クライアントのグループが同じ <code>sub</code> (たとえば、同じサービスの Web アプリとモバイル アプリ) を共有する場合は、__HTMLTAG_1116___セクター識別子 URI</strong> を使用します。この URI は、同じセクター内のクライアントのリダイレクト URI を含む JSON 配列を指します:</p>

___プレコード_24___

<h2 id="9-tich-hop-saml-spring-boot"><strong>9。 SAML と Spring Boot の統合</strong></h2><p>__HTMLTAG_1124___spring-security-saml2-service-provider</code> を使用して SAML SP:</p> を統合します

___プレコード_25___

___プレコード_26___

___プレコード_27___

<h2 id="10-thuc-hanh"><strong>10.演習_</strong></h2>

<h3 id="lab-1"><strong>ラボ 1: SAML クライアントの作成とアサーションのテスト</strong></h3>
<ol>
<li><p>エンティティ ID を使用して SAML クライアントを作成__HTMLTAG_1138___https://localhost:8443/saml</code></p></li>
<li><p>ACS URL の設定、ドキュメントへの署名、アサーションへの署名 = オン</p></li>
<li><p>__HTMLTAG_1147___samltool.com_</a> または SAML トレーサー ブラウザ拡張機能を使用して、SAML 応答をキャプチャします_</p></li>
<li><p>SAML アサーションの分析: NameID、AttributeStatement、条件、署名</p></li>
</ol>

<h3 id="lab-2"><strong>ラボ 2: OIDC のプロトコル マッパー</strong></h3>
<ol>
<li><p>ユーザー プロフィールにユーザー属性__HTMLTAG_1163___employee_id</code>を作成</p></li>
<li><p>ユーザー属性マッパーの作成: <code>employee_id</code> → トークン要求 <code>emp_id</code></p></li>
<li><p>グループ メンバーシップ マッパーの作成: グループ → トークン要求 <code>groups</code></p></li>
<li><p>ハードコードされた申し立ての作成: <code>env</code> = <code>staging</code></p></li>
<li><p>テスト: <a href="https://jwt.io">jwt.io</a></p></li> でトークンを取得してクレームを確認します
</ol>

<h3 id="lab-3"><strong>ラボ 3: SAML のプロトコル マッパー</strong></h3>
<ol>
<li><p><code>部門</code></p></li> の SAML ユーザー属性マッパーを作成
<li><p>__HTMLTAG_1209___単一ロール属性</code> = ON</p></li> を使用してロール リスト マッパーを作成
<li><p>構成名 ID 形式 = emailAddress</p></li>
<li><p>SAML レスポンスをキャプチャして AttributeStatement を確認</p></li>
</ol><h3 id="lab-4"><strong>ラボ 4: ペアごとの被験者識別子</strong></h3>
<ol>
<li><p>2 つの OIDC クライアントを作成します: <code>app-a</code> および <code>app-b</code></p></li>
<li><p>同じソルトを使用してペアごとのサブジェクト識別子マッパーを両方のクライアントに追加</p></li>
<li><p>両方のクライアントで同じユーザーでサインイン</p></li>
<li><p>アクセス トークンの値 <code>sub</code> を比較します — 異なる必要があります</p></li>
<li><p>2 つのクライアントが同じ__HTMLTAG_1251___sub___HTMLTAG_1252__HTMLTAG_1253___</li> を共有するようにセクター識別子 URI を構成します。
</ol>