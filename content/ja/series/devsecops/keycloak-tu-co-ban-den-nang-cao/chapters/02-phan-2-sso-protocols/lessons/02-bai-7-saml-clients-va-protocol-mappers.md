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
      <tspan x="60" dy="0">レッスン 7: SAML クライアントとプロトコル マッパー</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: SSO プロトコル - OpenID Connect と SAML</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tong-quan-saml-2"><strong>1. KeycloakのSAML 2.0の概要</strong></h2>

<p>SAML 2.0 (Security Assertion Markup Language) は、企業内で広く使用されている XML ベースの認証プロトコルで、特に従来のシステム、SaaS アプリケーション (Salesforce、ServiceNow、AWS)、または政府機関と統合する場合に使用されています。</p>

<h3 id="saml-vs-oidc"><strong>SAML 2.0 と OpenID Connect の比較</strong></h3>
<table>
<thead>
<tr><th>特性</th><th>SAML 2.0</th><th>OpenID コネクト</th></tr>
</thead>
<tbody>
<tr><td>形式</td><td>XML</td><td>JSON (JWT)</td></tr>
<tr><td>輸送</td><td>HTTP リダイレクト、POST、アーティファクト</td><td>HTTP REST</td></tr>
<tr><td>トークン</td><td>SAML アサーション (XML)</td><td>JWT</td></tr>
<tr><td>サイズ</td><td>より大きい (XML 冗長)</td><td>コンパクト (JSON)</td></tr>
<tr><td>モバイルサポート</td><td>不十分 (XML 解析が重い)</td><td>良い (JSON ネイティブ)</td></tr>
<tr><td>主な使用例</td><td>エンタープライズ SSO、レガシー システム</td><td>最新の Web/モバイル アプリ</td></tr>
<tr><td>複雑</td><td>高い</td><td>より低い</td></tr>
<tr><td>ログアウト</td><td>SLO (シングルログアウト)</td><td>RP 開始、バックチャネル、フロントチャネル</td></tr>
</tbody>
</table>

<p><strong>SAML をいつ使用するか?</strong></p>
<ul>
<li><p>SAML を必要とする SaaS アプリケーション (Salesforce、Google Workspace、AWS) との統合</p></li>
<li><p>SAML のみをサポートする IdP または SP にバインドする</p></li>
<li><p>政府機関の基準への準拠を要求する</p></li>
<li><p>ADFS システム、Shibboleth からの移行</p></li>
</ul>

<h3 id="saml-terminology"><strong>SAML 用語</strong></h3>
<table>
<thead>
<tr><th>用語</th><th>説明する</th><th>OIDCと同等</th></tr>
</thead>
<tbody>
<tr><td>アイデンティティプロバイダー (IdP)</td><td>ユーザー認証側（Keycloak）</td><td>OpenID プロバイダー (OP)</td></tr>
<tr><td>サービスプロバイダー（SP）</td><td>認証要求元（アプリケーション）</td><td>依拠当事者 (RP)</td></tr>
<tr><td>アサーション</td><td>XML ドキュメントには認証情報が含まれています</td><td>トークンID</td></tr>
<tr><td>認可リクエスト</td><td>SP → IdP から認証を要求する</td><td>認可リクエスト</td></tr>
<tr><td>ACS URL</td><td>アサーション コンシューマ サービス URL</td><td>リダイレクトURI</td></tr>
<tr><td>エンティティID</td><td>SP/IdPの一意の識別子</td><td>クライアントID / 発行者</td></tr>
<tr><td>メタデータ</td><td>エンドポイント、証明書を記述する XML</td><td>よく知られた構成</td></tr>
<tr><td>名前ID</td><td>アサーション内のユーザー識別子</td><td>サブクレーム</td></tr>
<tr><td>属性ステートメント</td><td>アサーション内のユーザー属性</td><td>JWT のクレーム</td></tr>
</tbody>
</table>

<h2 id="2-tao-saml-client"><strong>2. SAML 2.0 クライアントの作成</strong></h2>

<h3 id="tao-saml-client-admin-console"><strong>2.1 管理コンソール経由で作成する</strong></h3>
<ol>
<li><p>アクセス<strong>管理コンソール</strong>→ レルムを選択 →<strong>クライアント</strong> → <strong>クライアントの作成</strong></p></li>
<li><p><strong>一般設定</strong>:</p>
<ul>
<li><strong>クライアントの種類</strong>: SAML</li>
<li><strong>クライアントID</strong>: URL ベースのエンティティ ID など<code>https://myapp.example.com/saml/metadata</code></li>
<li><strong>名前</strong>: 私の SAML アプリケーション</li>
</ul>
</li>
<li><p>クリック<strong>次</strong>そして<strong>保存</strong></p></li>
</ol>

<h3 id="import-entity-descriptor"><strong>2.2 エンティティ記述子（メタデータ）からのインポート</strong></h3>
<p>SAML クライアントを作成する最速の方法 - サービス プロバイダーから XML メタデータをインポートします。</p>
<ol>
<li><p>アクセス<strong>クライアント</strong> → <strong>インポートクライアント</strong></p></li>
<li><p>XML メタデータ ファイルをアップロードするか、URL メタデータを貼り付けます</p></li>
<li><p>Keycloakは、エンティティID、ACS URL、SLO URL、証明書、バインディングを自動的に入力します。</p></li>
</ol>

<p><strong>サービスプロバイダーの XML メタデータの例:</strong></p>
<pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata"
    entityID="https://myapp.example.com/saml/metadata"&gt;
  &lt;md:SPSSODescriptor
      AuthnRequestsSigned="true"
      WantAssertionsSigned="true"
      protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol"&gt;

    &lt;md:KeyDescriptor use="signing"&gt;
      &lt;ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#"&gt;
        &lt;ds:X509Data&gt;
          &lt;ds:X509Certificate&gt;MIICzDCCAbSg...&lt;/ds:X509Certificate&gt;
        &lt;/ds:X509Data&gt;
      &lt;/ds:KeyInfo&gt;
    &lt;/md:KeyDescriptor&gt;

    &lt;md:KeyDescriptor use="encryption"&gt;
      &lt;ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#"&gt;
        &lt;ds:X509Data&gt;
          &lt;ds:X509Certificate&gt;MIICzDCCAbSg...&lt;/ds:X509Certificate&gt;
        &lt;/ds:X509Data&gt;
      &lt;/ds:KeyInfo&gt;
    &lt;/md:KeyDescriptor&gt;

    &lt;md:SingleLogoutService
        Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
        Location="https://myapp.example.com/saml/slo"/&gt;

    &lt;md:NameIDFormat&gt;
      urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress
    &lt;/md:NameIDFormat&gt;

    &lt;md:AssertionConsumerService
        Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
        Location="https://myapp.example.com/saml/acs"
        index="0"
        isDefault="true"/&gt;

  &lt;/md:SPSSODescriptor&gt;
&lt;/md:EntityDescriptor&gt;</code></pre>

<h3 id="keycloak-idp-metadata"><strong>2.3 Keycloak IdP メタデータの取得</strong></h3>
<p>サービスプロバイダーには、構成のために Keycloak メタデータ (IdP) が必要です。メタデータ URL:</p>
<pre><code>GET https://&lt;keycloak-host&gt;/realms/&lt;realm-name&gt;/protocol/saml/descriptor</code></pre>

<p>メタデータには、エンティティ ID、SSO エンドポイント、SLO エンドポイント、署名/暗号化証明書が含まれます。</p>

<h2 id="3-saml-client-settings"><strong>3. SAML クライアント設定の詳細</strong></h2>

<h3 id="saml-settings-tab"><strong>3.1 設定タブ</strong></h3>
<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>推奨値</th></tr>
</thead>
<tbody>
<tr><td>クライアントID（エンティティID）</td><td>SAML エンティティ ID — SP の一意の識別子</td><td>URL形式:<code>https://app.example.com/saml</code></td></tr>
<tr><td>名前</td><td>表示名</td><td>アプリケーション名</td></tr>
<tr><td>クライアントの署名が必要です</td><td>SP は AuthorizationRequest に署名する必要があります</td><td>ON（本番）</td></tr>
<tr><td>POSTバインディングを強制する</td><td>応答に対する必須の POST バインディング</td><td>の上</td></tr>
<tr><td>フロントチャネルログアウト</td><td>ブラウザリダイレクトによるログアウト</td><td>の上</td></tr>
<tr><td>強制名 ID 形式</td><td>特定の名前 ID 形式が必要です</td><td>リクエストに応じて</td></tr>
<tr><td>名前IDの形式</td><td>NameIDの形式</td><td>電子メールまたは永続的な</td></tr>
<tr><td>IncludeAuthnStatement</td><td>アサーションに AuthnStatement を含める</td><td>の上</td></tr>
<tr><td>書類に署名する</td><td>SAML 応答全体に署名する</td><td>の上</td></tr>
<tr><td>アサーションに署名する</td><td>応答内のアサーションに署名する</td><td>オン（推奨）</td></tr>
</tbody>
</table>

<h3 id="saml-bindings"><strong>3.2 SAML バインディング</strong></h3>
<p>SAML は複数のバインディングをサポートしています。SAML メッセージが SP と IdP 間で転送される方法:</p>

<table>
<thead>
<tr><th>バインディング</th><th>説明する</th><th>ユースケース</th></tr>
</thead>
<tbody>
<tr><td><strong>HTTP-POST</strong></td><td>HTML フォーム自動送信経由で送信されたメッセージ</td><td>アサーションのデフォルト (大)</td></tr>
<tr><td><strong>HTTP リダイレクト</strong></td><td>URL クエリパラメータを介して送信されるメッセージ</td><td>AuthorizationRequest (小)</td></tr>
<tr><td><strong>アーチファクト</strong></td><td>アーティファクト参照のみを送信し、SP はバックチャネル経由でアサーションを取得します</td><td>高セキュリティ、大規模なアサーション</td></tr>
</tbody>
</table>

<p><strong>クライアント設定でバインドを構成します。</strong></p>
<table>
<thead>
<tr><th>設定</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td>マスターSAML処理URL</td><td>すべての SAML バインディングの汎用 URL</td></tr>
<tr><td>アサーション コンシューマ サービス POST バインディング URL</td><td>POST バインディング用の ACS URL</td></tr>
<tr><td>アサーション コンシューマ サービス リダイレクト バインディング URL</td><td>リダイレクト バインディング用の ACS URL</td></tr>
<tr><td>アサーション コンシューマ サービス アーティファクト バインディング URL</td><td>アーティファクト バインディング用の ACS URL</td></tr>
<tr><td>ログアウトサービス POST バインディング URL</td><td>POST バインディングの SLO URL</td></tr>
<tr><td>ログアウトサービスリダイレクトバインドURL</td><td>リダイレクト バインディングの SLO URL</td></tr>
<tr><td>ログアウト サービス アーティファクト バインディング URL</td><td>アーティファクト バインディングの SLO URL</td></tr>
</tbody>
</table>

<pre><code># Ví dụ cấu hình bindings
Master SAML Processing URL: https://myapp.example.com/saml
Assertion Consumer Service POST Binding URL: https://myapp.example.com/saml/acs
Logout Service POST Binding URL: https://myapp.example.com/saml/slo</code></pre>

<p><strong>アーティファクト バインディングの詳細:</strong></p>
<p>アーティファクト バインディングは POST/リダイレクトとは異なります。ブラウザ経由でアサーション全体を送信するのではなく、Keycloak は 1 つのアサーションのみを送信します。<strong>アーチファクト</strong>(参照ID)。その後、SP は Keycloak を直接 (バックチャネル) 呼び出して、実際のアサーションを取得します。</p>

<pre><code>┌──────────┐     ┌──────────┐     ┌──────────┐
│  Browser │     │    SP    │     │ Keycloak │
└────┬─────┘     └────┬─────┘     └────┬─────┘
     │                │                │
     │  1. Login      │                │
     │───────────────>│                │
     │  2. AuthnRequest               │
     │<──────────────────────────────>│
     │  3. Authentication              │
     │<──────────────────────────────>│
     │  4. Artifact (POST/Redirect)   │
     │<──────────────────────────────│
     │───────────────>│                │
     │                │ 5. ArtifactResolve (backchannel SOAP)
     │                │───────────────>│
     │                │ 6. ArtifactResponse (assertion)
     │                │<──────────────│
     │  7. Authenticated               │
     │<───────────────│                │</code></pre>

<p>アーティファクト バインディングは、アサーションがブラウザを通過しないため、より安全です。アサーションに機密データが含まれている場合に役立ちます。</p>

<h3 id="xml-signature-encryption"><strong>3.3 XML署名と暗号化</strong></h3>

<p><strong>署名構成:</strong></p>
<table>
<thead>
<tr><th>設定</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td>署名アルゴリズム</td><td>XML署名アルゴリズム: RSA_SHA256 (推奨)、RSA_SHA512、DSA_SHA1</td></tr>
<tr><td>SAML署名キー名</td><td>署名内のキー名: KEY_ID、CERT_SUBJECT、NONE</td></tr>
<tr><td>正規化方法</td><td>XML 正規化: 独占 (推奨)</td></tr>
</tbody>
</table>

<p><strong>暗号化構成:</strong></p>
<p>オンにする<strong>アサーションの暗号化</strong>アサーションを暗号化する - 対応する秘密キーを持つ SP のみが復号化できます。</p>
<ul>
<li><p>SP をアップロードする<strong>暗号化証明書</strong>タブ内<strong>キー</strong></p></li>
<li><p>暗号化アルゴリズム: AES128、AES256 (推奨)</p></li>
</ul>

<pre><code># Keycloak sẽ mã hóa assertion bằng SP's public key
# Flow: Sign assertion → Encrypt signed assertion → Send to SP
# SP: Decrypt assertion → Verify signature → Extract user info</code></pre>

<h3 id="saml-keys-tab"><strong>3.4 タブキー</strong></h3>
<p>SAML クライアントの証明書を管理します。</p>
<ul>
<li><p><strong>署名キー</strong>: SP が AuthnRequest に署名するために使用する証明書 — Keycloak が検証するために使用</p></li>
<li><p><strong>暗号化キー</strong>: Keycloak がアサーションの暗号化に使用する証明書 — SP は秘密鍵を使用して復号化します</p></li>
</ul>

<p>PEM、JKS、または PKCS12 ファイルから証明書をインポートします。</p>
<pre><code># Generate self-signed certificate cho SP
openssl req -x509 -newkey rsa:2048 \
  -keyout sp-private.pem -out sp-certificate.pem \
  -days 365 -nodes \
  -subj "/CN=myapp.example.com"

# Import sp-certificate.pem vào Keycloak client Keys tab</code></pre>

<h2 id="4-saml-assertions"><strong>4. SAML アサーションの構成</strong></h2>

<h3 id="name-id-format"><strong>4.1 名前IDの形式</strong></h3>
<p>名前IDは、Keycloakがアサーションでユーザー識別子を送信する方法を決定します。</p>

<table>
<thead>
<tr><th>形式</th><th>説明する</th><th>ユースケース</th></tr>
</thead>
<tbody>
<tr><td><code>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</code></td><td>電子メールアドレス</td><td>最も人気のある</td></tr>
<tr><td><code>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</code></td><td>各SPの一意の永続ID</td><td>メールを公開したくない</td></tr>
<tr><td><code>urn:oasis:names:tc:SAML:2.0:nameid-format:transient</code></td><td>一時ID、セッションごとに変更</td><td>プライバシーに配慮した</td></tr>
<tr><td><code>urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified</code></td><td>ユーザー名またはKeycloakユーザーID</td><td>フレキシブル</td></tr>
</tbody>
</table>

<h3 id="assertion-lifespan"><strong>4.2 アサーションの存続期間</strong></h3>
<p>レルム設定で構成する →<strong>トークン</strong>タブ:</p>
<ul>
<li><p><strong>アサーションの存続期間</strong>: 有効なアサーション時間 (デフォルトは 5 分、短くすることをお勧めします)</p></li>
<li><p><strong>以前はありませんでした</strong>: アサーションはこの時間より前は有効ではありません (クロック スキュー許容値)</p></li>
</ul>

<h3 id="ví-du-saml-assertion"><strong>4.3 SAML アサーションの例</strong></h3>
<pre><code>&lt;saml:Assertion xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
    ID="_abc123" IssueInstant="2026-03-30T10:00:00Z" Version="2.0"&gt;
  &lt;saml:Issuer&gt;http://localhost:8080/realms/my-company&lt;/saml:Issuer&gt;

  &lt;!-- Subject — user identity --&gt;
  &lt;saml:Subject&gt;
    &lt;saml:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"&gt;
      user@example.com
    &lt;/saml:NameID&gt;
    &lt;saml:SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer"&gt;
      &lt;saml:SubjectConfirmationData
          NotOnOrAfter="2026-03-30T10:05:00Z"
          Recipient="https://myapp.example.com/saml/acs"/&gt;
    &lt;/saml:SubjectConfirmation&gt;
  &lt;/saml:Subject&gt;

  &lt;!-- Conditions — khi nào assertion hợp lệ --&gt;
  &lt;saml:Conditions NotBefore="2026-03-30T10:00:00Z" NotOnOrAfter="2026-03-30T10:05:00Z"&gt;
    &lt;saml:AudienceRestriction&gt;
      &lt;saml:Audience&gt;https://myapp.example.com/saml/metadata&lt;/saml:Audience&gt;
    &lt;/saml:AudienceRestriction&gt;
  &lt;/saml:Conditions&gt;

  &lt;!-- AuthnStatement — thông tin xác thực --&gt;
  &lt;saml:AuthnStatement AuthnInstant="2026-03-30T10:00:00Z"
      SessionIndex="session_abc123"&gt;
    &lt;saml:AuthnContext&gt;
      &lt;saml:AuthnContextClassRef&gt;
        urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport
      &lt;/saml:AuthnContextClassRef&gt;
    &lt;/saml:AuthnContext&gt;
  &lt;/saml:AuthnStatement&gt;

  &lt;!-- AttributeStatement — user attributes --&gt;
  &lt;saml:AttributeStatement&gt;
    &lt;saml:Attribute Name="email"&gt;
      &lt;saml:AttributeValue&gt;user@example.com&lt;/saml:AttributeValue&gt;
    &lt;/saml:Attribute&gt;
    &lt;saml:Attribute Name="firstName"&gt;
      &lt;saml:AttributeValue&gt;John&lt;/saml:AttributeValue&gt;
    &lt;/saml:Attribute&gt;
    &lt;saml:Attribute Name="Role"&gt;
      &lt;saml:AttributeValue&gt;admin&lt;/saml:AttributeValue&gt;
    &lt;/saml:Attribute&gt;
  &lt;/saml:AttributeStatement&gt;
&lt;/saml:Assertion&gt;</code></pre>

<h2 id="5-idp-initiated-login"><strong>5. IDP によるログイン (一方的な応答)</strong></h2>

<p>通常の流れ（SP-Initiated）では、ユーザーがSPにアクセス→SPがIdPにリダイレクト→IdPが認証→SPにリダイレクトとなります。と<strong>IDP によって開始されるログイン</strong>の場合、ユーザーは最初に SP を経由せずに IdP (Keycloak) から開始します。</p>

<h3 id="cau-hinh-idp-initiated"><strong>IDP によるログインの構成</strong></h3>
<ol>
<li><p>SAMLクライアント→タブを開きます<strong>高度な</strong></p></li>
<li><p>探す<strong>IDP によって開始される SSO URL 名</strong>: URL 名を入力します。例:<code>私のアプリ</code></p></li>
<li><p>IDP-Initiated Login への URL は次のようになります。</p></li>
</ol>

<pre><code>https://&lt;keycloak-host&gt;/realms/&lt;realm&gt;/protocol/saml/clients/my-app</code></pre>

<p><strong>セキュリティ上の注意:</strong>IDP 開始ログインには CSRF リスクがあります - アサーションは利用できません<code>返信先</code>属性。 SP によって必要な場合にのみ使用してください (一部の SaaS アプリは IDP-Initiated のみをサポートします)。</p>

<h3 id="idp-initiated-settings"><strong>IDP によって開始される設定</strong></h3>
<table>
<thead>
<tr><th>設定</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td>IDP によって開始される SSO URL 名</td><td>IDP-Initiated Login の末尾の URL</td></tr>
<tr><td>IDP によって開始された SSO リレー状態</td><td>SP に送信されるデフォルトの RelayState</td></tr>
<tr><td>アサーション コンシューマ サービス POST バインディング URL</td><td>URL SP がアサーションを受信する</td></tr>
</tbody>
</table>

<h2 id="6-protocol-mappers"><strong>6. プロトコル マッパー</strong></h2>

<p>プロトコル マッパーが決定する<strong>トークン/アサーションに含まれる情報</strong>。ユーザー属性、ロール、メタデータをクレーム (OIDC) または属性 (SAML) に変換します。</p>

<h3 id="mapper-concepts"><strong>6.1 基本概念</strong></h3>
<p>プロトコル マッパーは 2 つのレベルで追加できます。</p>
<ul>
<li><p><strong>クライアントレベル</strong>: マッパーは特にそのクライアントに適用されます (クライアント → クライアント スコープ → 専用スコープ)</p></li>
<li><p><strong>クライアントスコープレベル</strong>: マッパーはそのスコープを使用するすべてのクライアントに適用されます</p></li>
</ul>

<p>各マッパーには共通の構成があります。</p>
<table>
<thead>
<tr><th>設定</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td>名前</td><td>マッパー名（管理に使用）</td></tr>
<tr><td>マッパータイプ</td><td>マッパー タイプ (ユーザー属性、ハードコードされたクレームなど)</td></tr>
<tr><td>IDトークンに追加</td><td>IDトークンの追加(OIDC)</td></tr>
<tr><td>アクセストークンに追加</td><td>アクセストークン(OIDC)の追加</td></tr>
<tr><td>ユーザー情報に追加</td><td>UserInfo 応答の追加 (OIDC)</td></tr>
<tr><td>トークンの紹介に追加</td><td>トークンイントロスペクション応答の追加</td></tr>
<tr><td>軽量アクセストークンに追加</td><td>ライトウェイトアクセストークンを追加しました</td></tr>
</tbody>
</table>

<h3 id="oidc-mappers"><strong>6.2 OIDC プロトコル マッパー</strong></h3>

<p><strong>ユーザー属性マッパー</strong>— ユーザー属性をトークン要求にマップします。</p>
<pre><code>Mapper Type: User Attribute
Name: department-mapper
User Attribute: department         # attribute name trong User Profile
Token Claim Name: department       # claim name trong JWT
Claim JSON Type: String            # String, long, int, boolean, JSON
Add to ID token: ON
Add to access token: ON
Add to userinfo: ON
Multivalued: OFF</code></pre>

<p>JWT での結果:</p>
<pre><code>{
  "sub": "user-id",
  "email": "user@example.com",
  "department": "Engineering",
  ...
}</code></pre>

<p><strong>ユーザープロパティマッパー</strong>— 組み込みユーザー プロパティ (ユーザー名、電子メール、名、姓) をマップします。</p>
<pre><code>Mapper Type: User Property
Name: full-name-mapper
Property: firstName
Token Claim Name: given_name
Claim JSON Type: String</code></pre>

<p><strong>ユーザーセッションノートマッパー</strong>— セッション データをトークンにマッピングします。</p>
<pre><code>Mapper Type: User Session Note
Name: client-ip-mapper
User Session Note: clientAddress    # hoặc clientHost, identity_provider, etc.
Token Claim Name: client_ip
Claim JSON Type: String
Add to access token: ON</code></pre>

<p>セッションノートが利用可能:<code>クライアントアドレス</code>, <code>クライアントホスト</code>, <code>アイデンティティプロバイダー</code>, <code>アイデンティティプロバイダアイデンティティ</code>.</p>

<p><strong>ハードコードされたクレーム マッパー</strong>— 固定値を持つクレームを追加します。</p>
<pre><code>Mapper Type: Hardcoded claim
Name: environment-mapper
Token Claim Name: env
Claim value: production
Claim JSON Type: String
Add to access token: ON</code></pre>

<p><strong>グループメンバーシップマッパー</strong>— ユーザーのグループリストをトークンに追加します。</p>
<pre><code>Mapper Type: Group Membership
Name: groups-mapper
Token Claim Name: groups
Full group path: ON                 # /parent/child hoặc chỉ child
Add to ID token: ON
Add to access token: ON</code></pre>

<p>結果：</p>
<pre><code>{
  "groups": ["/Engineering", "/Engineering/Backend"]
}</code></pre>

<p><strong>オーディエンスマッパー</strong>— アクセストークンに対象者を追加します。</p>
<pre><code>Mapper Type: Audience
Name: api-audience
Included Client Audience: my-api-service   # Client ID của resource server
Add to access token: ON</code></pre>

<p>結果：</p>
<pre><code>{
  "aud": ["my-api-service", "account"]
}</code></pre>

<p><strong>スクリプトマッパー</strong>— JavaScript を使用したカスタム ロジック:</p>
<pre><code>Mapper Type: Script Mapper
Name: custom-role-mapper
Script:
  // Combine realm roles và client roles thành flat list
  var roles = [];

  // Realm roles
  var realmRoles = user.getRealmRoleMappingsStream();
  realmRoles.forEach(function(role) {
    roles.push(role.getName());
  });

  // Client roles cho client cụ thể
  var client = keycloakSession.clients()
    .getClientByClientId(realm, 'my-app');
  if (client) {
    var clientRoles = user.getClientRoleMappingsStream(client);
    clientRoles.forEach(function(role) {
      roles.push('client:' + role.getName());
    });
  }

  exports = Java.to(roles, "java.lang.String[]");

Token Claim Name: all_roles
Claim JSON Type: JSON
Multivalued: ON</code></pre>

<p><strong>注記</strong>: スクリプト マッパーは Nashorn JavaScript エンジンを使用します。 Keycloak 24以降では、スクリプトマッパーをインラインスクリプトではなくカスタムJARプロバイダーとしてデプロイする必要があります。見る<code>デプロイスクリプト</code>Keycloakのドキュメントに記載されています。</p>

<h3 id="saml-mappers"><strong>6.3 SAML プロトコル マッパー</strong></h3>

<p>SAML マッパーは OIDC に似ていますが、出力は JWT クレームではなく SAML 属性です。</p>

<p><strong>ユーザー属性マッパー (SAML):</strong></p>
<pre><code>Mapper Type: User Attribute
Name: department-saml
User Attribute: department
Friendly Name: Department
SAML Attribute Name: urn:oid:2.16.840.1.113730.3.1.241  # hoặc friendly name
SAML Attribute NameFormat: URI Reference                  # URI, Basic, Unspecified</code></pre>

<p><strong>ロール リスト マッパー (SAML):</strong></p>
<pre><code>Mapper Type: Role list
Name: role-list
Role attribute name: Role
Friendly Name: Roles
SAML Attribute NameFormat: Basic
Single Role Attribute: ON    # Tất cả roles trong 1 attribute (khuyến nghị)
                              # OFF = mỗi role 1 attribute riêng</code></pre>

<p><strong>ハードコードされた属性マッパー (SAML):</strong></p>
<pre><code>Mapper Type: Hardcoded attribute
Name: tenant-id
SAML Attribute Name: tenant_id
SAML Attribute Value: my-company
Friendly Name: Tenant ID
SAML Attribute NameFormat: Basic</code></pre>

<p><strong>SAML 属性名の形式:</strong></p>
<table>
<thead>
<tr><th>形式</th><th>説明する</th><th>例えば</th></tr>
</thead>
<tbody>
<tr><td>基本</td><td>シンプルな名前</td><td><code>電子メール</code>, <code>ファーストネーム</code></td></tr>
<tr><td>URI リファレンス</td><td>OID 形式、標準</td><td><code>urn:oid:0.9.2342.19200300.100.1.3</code></td></tr>
<tr><td>不特定</td><td>指定されていない形式</td><td>オプション</td></tr>
</tbody>
</table>

<h2 id="7-lightweight-access-tokens"><strong>7. 軽量アクセストークン</strong></h2>

<p>デフォルトでは、Keycloakアクセストークンには多くのクレーム（realm_access、resource_access、email、name、preferred_usernameなど）が含まれています。 Lightweight Access Token は、必須のクレームのみを保持することでトークン サイズを削減します。</p>

<h3 id="tai-sao-can-lightweight"><strong>7.1 ライトウェイト アクセス トークンが必要なのはなぜですか?</strong></h3>
<ul>
<li><p><strong>帯域幅を減らす</strong>: トークンが小さい = HTTP ヘッダー経由でより速く送信されます</p></li>
<li><p><strong>機密情報を減らす</strong>: アクセス トークンは多くのサービスに送信されることが多いため、多すぎる PII を含めるべきではありません</p></li>
<li><p><strong>セキュリティの向上</strong>: リソース サーバーはトークン イントロスペクションを使用して、必要に応じて完全なクレームを取得します</p></li>
</ul>

<h3 id="cau-hinh-lightweight"><strong>7.2 Lightweight アクセス トークンの構成</strong></h3>
<p>デフォルトでは、プロトコル マッパーには次のオプションがあります。<strong>軽量アクセストークンに追加</strong>。使用するには:</p>
<ol>
<li><p>マッパーごとにオフにします<strong>アクセストークンに追加</strong>軽量トークンでは必要のないクレーム内</p></li>
<li><p>クライアント ポリシー (次の記事を参照) を使用して、特定のクライアントに軽量トークンを適用する</p></li>
<li><p>リソース サーバーはトークン イントロスペクション エンドポイントを呼び出して完全なクレームを取得します。</p></li>
</ol>

<pre><code># Token Introspection — lấy full claims
POST /realms/my-company/protocol/openid-connect/token/introspect
Content-Type: application/x-www-form-urlencoded

token=ACCESS_TOKEN&
client_id=my-resource-server&
client_secret=CLIENT_SECRET

# Response chứa full claims
{
  "active": true,
  "sub": "user-id",
  "email": "user@example.com",
  "realm_access": { "roles": ["admin", "user"] },
  "resource_access": { ... },
  ...
}</code></pre>

<h2 id="8-pairwise-subject-identifier"><strong>8. ペアごとの被験者識別子</strong></h2>

<p>デフォルトでは、Keycloakは次を使用します<strong>公開サブジェクト識別子</strong>- 価値<code>サブ</code>クレームはすべてのクライアントに対して同じです。これにより、クライアントはサービス間でユーザーを関連付けることができます。</p>

<p><strong>ペアごとのサブジェクト識別子</strong>作成する<code>サブ</code>クライアントごとに異なる - サービス間のユーザー追跡を防ぎます。</p>

<h3 id="cau-hinh-pairwise"><strong>8.1 ペアワイズ識別子の構成</strong></h3>
<ol>
<li><p>プロトコル マッパー タイプの追加<strong>ペアごとのサブジェクト識別子</strong>クライアントまたはクライアントスコープに</p></li>
<li><p>構成：</p></li>
</ol>

<pre><code>Mapper Type: Pairwise subject identifier
Name: pairwise-sub
Salt: random-salt-value-keep-secret   # Salt dùng để hash, PHẢI giữ bí mật
Pairwise Subject Identifier Algorithm: SHA-256
Sector Identifier URI: (tùy chọn)     # Nhóm clients share cùng sub</code></pre>

<p><strong>結果：</strong></p>
<pre><code># Client A nhận sub:
{ "sub": "hashed-value-for-client-a" }

# Client B nhận sub khác:
{ "sub": "hashed-value-for-client-b" }

# Cùng 1 user nhưng sub khác nhau → không thể correlate</code></pre>

<p><strong>セクター識別子 URI:</strong></p>
<p>クライアントのグループで共有したい場合<code>サブ</code>(例: 同じサービスの Web アプリとモバイル アプリ)、使用します<strong>セクター識別子 URI</strong>。この URI は、同じセクター内のクライアントのリダイレクト URI を含む JSON 配列を指します。</p>

<pre><code># https://myservice.example.com/sector-identifier.json
["https://webapp.example.com/callback", "myapp://callback"]</code></pre>

<h2 id="9-tich-hop-saml-spring-boot"><strong>9. SAML と Spring Boot を統合する</strong></h2>

<p>使用<code>spring-security-saml2-サービスプロバイダー</code>SAML SP を統合するには:</p>

<pre><code>&lt;!-- pom.xml --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;
    &lt;artifactId&gt;spring-security-saml2-service-provider&lt;/artifactId&gt;
&lt;/dependency&gt;</code></pre>

<pre><code># application.yml
spring:
  security:
    saml2:
      relyingparty:
        registration:
          keycloak:
            entity-id: https://myapp.example.com/saml/metadata
            signing:
              credentials:
                - private-key-location: classpath:credentials/sp-private.pem
                  certificate-location: classpath:credentials/sp-certificate.pem
            assertingparty:
              metadata-uri: http://localhost:8080/realms/my-company/protocol/saml/descriptor</code></pre>

<pre><code>// SecurityConfig.java
@Configuration
@EnableWebSecurity
public class SamlSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .saml2Login(saml2 -> saml2
                .loginPage("/saml2/authenticate/keycloak")
            )
            .saml2Logout(Customizer.withDefaults());
        return http.build();
    }
}</code></pre>

<h2 id="10-thuc-hanh"><strong>10. 練習問題</strong></h2>

<h3 id="lab-1"><strong>ラボ 1: SAML クライアントを作成してアサーションをテストする</strong></h3>
<ol>
<li><p>エンティティ ID を使用して SAML クライアントを作成する<code>https://localhost:8443/saml</code></p></li>
<li><p>ACS URL、署名ドキュメント、署名アサーション = ON を設定します。</p></li>
<li><p>使用<a href="https://www.samltool.com">samltool.com</a>または SAML 応答をキャプチャするための SAML-tracer ブラウザ拡張機能</p></li>
<li><p>SAML アサーションの分析: NameID、AttributeStatement、条件、署名</p></li>
</ol>

<h3 id="lab-2"><strong>ラボ 2: OIDC のプロトコル マッパー</strong></h3>
<ol>
<li><p>ユーザー属性の作成<code>従業員ID</code>ユーザープロフィール内</p></li>
<li><p>ユーザー属性マッパーを作成します。<code>従業員ID</code>→ トークンの請求<code>emp_id</code></p></li>
<li><p>グループ メンバーシップ マッパーの作成: グループ → トークン要求<code>グループ。グループ</code></p></li>
<li><p>ハードコードされたクレームを作成します。<code>環境</code> = <code>ステージング。ステージング</code></p></li>
<li><p>テスト: トークンを取得し、クレームを検証します。<a href="https://jwt.io">jwt.io</a></p></li>
</ol>

<h3 id="lab-3"><strong>ラボ 3: SAML のプロトコル マッパー</strong></h3>
<ol>
<li><p>SAML ユーザー属性マッパーの作成<code>部門</code></p></li>
<li><p>ロールリストマッパーを作成する<code>単一の役割の属性</code>= オン</p></li>
<li><p>名前 ID 形式 = emailAddress の構成</p></li>
<li><p>SAML レスポンスをキャプチャし、AttributeStatement を検証する</p></li>
</ol>

<h3 id="lab-4"><strong>ラボ 4: ペアごとの被験者識別子</strong></h3>
<ol>
<li><p>2 つの OIDC クライアントを作成します。<code>アプリ-a</code>そして<code>アプリ-b</code></p></li>
<li><p>同じソルトを使用して両方のクライアントにペアワイズ サブジェクト識別子マッパーを追加する</p></li>
<li><p>両方のクライアントに同じユーザーでログインします</p></li>
<li><p>値を比較する<code>サブ</code>アクセストークン内 — 異なるものである必要があります</p></li>
<li><p>2 つのクライアントが共有するセクター識別子 URI を構成する<code>サブ</code></p></li>
</ol>
