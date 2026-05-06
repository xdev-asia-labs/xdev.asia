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
      <tspan x="60" dy="42">AからZまで</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: SSO プロトコル - OpenID Connect と SAML</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tong-quan-openid-connect"><strong>1. KeycloakのOpenID Connectの概要</strong></h2>

<p>OpenID Connect (OIDC) は、OAuth 2.0 プラットフォーム上に構築された認証プロトコルです。 KeycloakはOIDC仕様を完全にサポートし、企業向けに多くの機能を拡張します。この記事では、OIDC クライアントの作成、構成、統合について詳しく説明します。</p>

<h3 id="oidc-endpoints"><strong>KeycloakのOIDCエンドポイント</strong></h3>
<p>KeycloakはOIDC標準エンドポイントを提供します。すべてのエンドポイント情報は次の方法で取得できます。<strong>よく知られた構成</strong>:</p>

<pre><code>GET https://&lt;keycloak-host&gt;/realms/&lt;realm-name&gt;/.well-known/openid-configuration</code></pre>

<p>重要なエンドポイント:</p>
<table>
<thead>
<tr><th>終点</th><th>URLパターン</th><th>目的</th></tr>
</thead>
<tbody>
<tr><td>認可</td><td><code>/realms/{realm}/プロトコル/openid-connect/auth</code></td><td>認証フローの初期化</td></tr>
<tr><td>トークン</td><td><code>/realms/{realm}/プロトコル/openid-connect/token</code></td><td>トークンの取得/更新</td></tr>
<tr><td>ユーザー情報</td><td><code>/realms/{realm}/プロトコル/openid-connect/userinfo</code></td><td>ユーザー情報を取得する</td></tr>
<tr><td>ログアウト</td><td><code>/realms/{realm}/プロトコル/openid-connect/logout</code></td><td>RP によるログアウト</td></tr>
<tr><td>トークンのイントロスペクション</td><td><code>/realms/{realm}/protocol/openid-connect/token/introspect</code></td><td>トークンの有効性を確認する</td></tr>
<tr><td>トークンの取り消し</td><td><code>/realms/{realm}/protocol/openid-connect/revoke</code></td><td>トークンの取り消し</td></tr>
<tr><td>JWKS</td><td><code>/realms/{realm}/protocol/openid-connect/certs</code></td><td>JWT検証用の公開鍵</td></tr>
<tr><td>デバイスの認証</td><td><code>/realms/{realm}/protocol/openid-connect/auth/device</code></td><td>デバイス認証付与</td></tr>
</tbody>
</table>

<h2 id="2-oidc-client-types"><strong>2. OIDC クライアントの種類</strong></h2>

<p>Keycloakは、次の3つの主要なタイプのクライアントをサポートしており、それぞれが異なるアプリケーション・アーキテクチャに適しています。</p>

<h3 id="public-client"><strong>2.1 パブリッククライアント</strong></h3>
<p>クライアントはクライアント シークレットを保護できません。通常、アプリケーションは完全にブラウザーまたはモバイル デバイス上で実行されます。</p>
<ul>
<li><p><strong>特性</strong>: クライアント シークレットなし、リダイレクト URI による認証</p></li>
<li><p><strong>ユースケース</strong>: シングル ページ アプリケーション (React、Angular、Vue)、モバイル アプリ、デスクトップ アプリ</p></li>
<li><p><strong>認証フロー</strong>: 認証コード + PKCE (必須)</p></li>
<li><p><strong>構成</strong>: <code>クライアント認証</code>= オフ</p></li>
</ul>

<pre><code>// Ví dụ: SPA không có backend — PHẢI dùng Public Client + PKCE
// Client KHÔNG lưu trữ secret, chỉ dùng code_verifier/code_challenge
Client ID: my-spa-app
Client authentication: OFF
Valid redirect URIs: http://localhost:3000/*
Web origins: http://localhost:3000</code></pre>

<h3 id="confidential-client"><strong>2.2 機密クライアント</strong></h3>
<p>クライアントには、クライアント シークレット (通常はサーバー側アプリケーション) を保護する機能があります。</p>
<ul>
<li><p><strong>特性</strong>: クライアント シークレットまたは秘密キーがあり、トークン エンドポイントの呼び出し時に認証されます</p></li>
<li><p><strong>ユースケース</strong>: サーバーサイド Web アプリ (Spring Boot、Django、.NET)、バックエンド API、サービス間通信</p></li>
<li><p><strong>認証フロー</strong>: 認証コード、クライアント資格情報、またはその両方</p></li>
<li><p><strong>構成</strong>: <code>クライアント認証</code>= オン</p></li>
</ul>

<pre><code>// Ví dụ: Spring Boot backend app — dùng Confidential Client
Client ID: my-backend-api
Client authentication: ON
Client secret: auto-generated hoặc custom
Valid redirect URIs: http://localhost:8081/login/oauth2/code/keycloak</code></pre>

<h3 id="bearer-only-client"><strong>2.3 ベアラー専用クライアント (レガシー)</strong></h3>
<p>クライアントはベアラー トークンを受信して​​検証するだけであり、ログイン フローは開始しません。</p>
<ul>
<li><p><strong>特性</strong>: リダイレクト URI なし、受信トークンのみを検証します</p></li>
<li><p><strong>ユースケース</strong>: 純粋な API サービス、マイクロサービスは認証されたリクエストのみを受信します</p></li>
<li><p><strong>注記</strong>: Keycloak 25 以降では、ベアラーのみが無効になっていました<strong>廃止された</strong>。代わりに、機密クライアントを作成し、それを有効にするだけです<code>サービスアカウントの役割</code></p></li>
</ul>

<table>
<thead>
<tr><th>特性</th><th>公共</th><th>機密</th><th>ベアラーのみ (非推奨)</th></tr>
</thead>
<tbody>
<tr><td>クライアント認証</td><td>オフ</td><td>の上</td><td>該当なし</td></tr>
<tr><td>クライアントシークレット</td><td>そうではない</td><td>持っている</td><td>そうではない</td></tr>
<tr><td>ログインを初期化できる</td><td>持っている</td><td>持っている</td><td>そうではない</td></tr>
<tr><td>リダイレクトURI</td><td>義務的</td><td>義務的</td><td>そうではない</td></tr>
<tr><td>PKCE</td><td>義務的</td><td>オプション</td><td>該当なし</td></tr>
<tr><td>主な使用例</td><td>SPA、モバイル</td><td>サーバーアプリ</td><td>純粋なAPI</td></tr>
</tbody>
</table>

<h2 id="3-tao-oidc-client"><strong>3. 管理コンソールから OIDC クライアントを作成する</strong></h2>

<h3 id="buoc-tao-client"><strong>3.1 クライアントの作成手順</strong></h3>
<ol>
<li><p>アクセス<strong>管理コンソール</strong>→ レルムを選択 →<strong>クライアント</strong> → <strong>クライアントの作成</strong></p></li>
<li><p><strong>一般設定</strong>:</p>
<ul>
<li><strong>クライアントの種類</strong>: OpenID コネクト</li>
<li><strong>クライアントID</strong>: <code>私のアプリ</code>(一意の識別子)</li>
<li><strong>名前</strong>：マイアプリケーション（表示名）</li>
<li><strong>説明</strong>: クライアントの説明</li>
<li><strong>常に UI に表示</strong>： オフ</li>
</ul>
</li>
<li><p><strong>機能構成</strong>:</p>
<ul>
<li><strong>クライアント認証</strong>：ON（秘密）またはOFF（公開）</li>
<li><strong>認可</strong>: きめ細かい認証が必要な場合は ON</li>
<li><strong>認証の流れ</strong>: 適切なフローを選択します</li>
</ul>
</li>
<li><p><strong>ログイン設定</strong>:</p>
<ul>
<li>ルート URL、ホーム URL、有効なリダイレクト URI、有効なログアウト後のリダイレクト URI、Web オリジン</li>
</ul>
</li>
</ol>

<h3 id="tao-client-bang-admin-cli"><strong>3.2 管理 CLI を使用したクライアントの作成</strong></h3>
<pre><code># Đăng nhập Admin CLI
bin/kcadm.sh config credentials \
  --server http://localhost:8080 \
  --realm master \
  --user admin \
  --password admin

# Tạo confidential client
bin/kcadm.sh create clients -r my-company \
  -s clientId=my-backend-app \
  -s name="My Backend Application" \
  -s enabled=true \
  -s protocol=openid-connect \
  -s publicClient=false \
  -s 'redirectUris=["http://localhost:8081/*"]' \
  -s 'webOrigins=["http://localhost:8081"]' \
  -s serviceAccountsEnabled=true \
  -s directAccessGrantsEnabled=false

# Tạo public client
bin/kcadm.sh create clients -r my-company \
  -s clientId=my-spa-app \
  -s name="My SPA Application" \
  -s enabled=true \
  -s protocol=openid-connect \
  -s publicClient=true \
  -s 'redirectUris=["http://localhost:3000/*"]' \
  -s 'webOrigins=["http://localhost:3000"]' \
  -s directAccessGrantsEnabled=false</code></pre>

<h3 id="tao-client-bang-rest-api"><strong>3.3 管理REST APIを使用したクライアントの作成</strong></h3>
<pre><code># Lấy access token
ACCESS_TOKEN=$(curl -s -X POST \
  "http://localhost:8080/realms/master/protocol/openid-connect/token" \
  -d "client_id=admin-cli" \
  -d "username=admin" \
  -d "password=admin" \
  -d "grant_type=password" | jq -r '.access_token')

# Tạo client
curl -s -X POST \
  "http://localhost:8080/admin/realms/my-company/clients" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": "my-backend-app",
    "name": "My Backend Application",
    "enabled": true,
    "protocol": "openid-connect",
    "publicClient": false,
    "redirectUris": ["http://localhost:8081/*"],
    "webOrigins": ["http://localhost:8081"],
    "serviceAccountsEnabled": true,
    "directAccessGrantsEnabled": false,
    "attributes": {
      "pkce.code.challenge.method": "S256"
    }
  }'</code></pre>

<h2 id="4-client-settings-chi-tiet"><strong>4. クライアントの詳細設定</strong></h2>

<h3 id="general-settings"><strong>4.1 一般設定</strong></h3>
<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>注記</th></tr>
</thead>
<tbody>
<tr><td>クライアントID</td><td>クライアントの一意の識別子</td><td>作成後は変更できません</td></tr>
<tr><td>名前</td><td>表示名</td><td>ローカリゼーション キーのサポート:<code>${私のクライアント名}</code></td></tr>
<tr><td>説明</td><td>クライアントの説明</td><td></td></tr>
<tr><td>常に UI に表示</td><td>アカウントコンソールに常に表示されます</td><td>社内ツールに使用</td></tr>
</tbody>
</table>

<h3 id="access-settings"><strong>4.2 アクセス設定</strong></h3>
<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>例えば</th></tr>
</thead>
<tbody>
<tr><td>ルートURL</td><td>元の URL、相対 URL の先頭に追加</td><td><code>http://localhost:3000</code></td></tr>
<tr><td>ホームURL</td><td>クライアントにリダイレクトするときのデフォルトの URL</td><td><code>/ダッシュボード</code></td></tr>
<tr><td>有効なリダイレクト URI</td><td>有効なリダイレクト URI のリスト (ワイルドカード *)</td><td><code>http://localhost:3000/*</code></td></tr>
<tr><td>有効なログアウト後のリダイレクト URI</td><td>ログアウト後の有効な URI</td><td><code>+</code>(リダイレクトURIを継承)</td></tr>
<tr><td>ウェブオリジン</td><td>CORS で許可されるオリジン</td><td><code>+</code>(リダイレクトURIを継承)</td></tr>
<tr><td>管理者URL</td><td>バックチャネル操作用の URL</td><td>バックエンド URL (ログアウト、ポリシーの適用)</td></tr>
</tbody>
</table>

<p><strong>リダイレクト URI に関するセキュリティ上の注意:</strong></p>
<ul>
<li><p><strong>一度もない</strong>ワイルドカードを使用する<code>*</code>運用環境でのリダイレクト URI — これは脆弱性です<strong>オープンリダイレクト</strong></p></li>
<li><p>宣言する<strong>その通り</strong>必要なリダイレクト URI</p></li>
<li><p>実稼働環境で HTTPS を使用する</p></li>
<li><p>本番リダイレクト URI では localhost の使用を避ける</p></li>
</ul>

<pre><code># ❌ KHÔNG NÊN — quá rộng, dễ bị Open Redirect attack
Valid redirect URIs: *

# ❌ KHÔNG NÊN — wildcard domain
Valid redirect URIs: https://*.example.com/*

# ✅ NÊN — khai báo chính xác
Valid redirect URIs:
  https://myapp.example.com/callback
  https://myapp.example.com/silent-renew</code></pre>

<h3 id="capability-config"><strong>4.3 機能構成</strong></h3>
<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>いつオンにするか</th></tr>
</thead>
<tbody>
<tr><td>クライアント認証</td><td>ON = 機密、OFF = 公開</td><td>サーバーアプリの場合はオン</td></tr>
<tr><td>認可</td><td>きめ細かい認可 (UMA)</td><td>リソースベースの権限が必要な場合</td></tr>
<tr><td>標準流量</td><td>認可コードの流れ</td><td>ほとんどの使用例</td></tr>
<tr><td>直接アクセス許可</td><td>リソース所有者のパスワード認証情報</td><td>従来のアプリ (非推奨)</td></tr>
<tr><td>暗黙的なフロー</td><td>暗黙的な許可 (非推奨)</td><td>使用すべきではありません</td></tr>
<tr><td>サービスアカウントの役割</td><td>クライアント資格情報の付与</td><td>マシン間の認証</td></tr>
<tr><td>OAuth 2.0 デバイス認証付与</td><td>デバイスコードフロー</td><td>スマート TV、CLI ツール</td></tr>
<tr><td>OIDC CIBA 助成金</td><td>クライアント開始のバックチャネル認証</td><td>銀行、通信</td></tr>
</tbody>
</table>

<h3 id="login-settings"><strong>4.4 ログイン設定</strong></h3>
<table>
<thead>
<tr><th>設定</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td>ログインテーマ</td><td>このクライアントのログインページのテーマ</td></tr>
<tr><td>同意が必要です</td><td>ユーザーに同意画面を表示する</td></tr>
<tr><td>クライアントを画面に表示する</td><td>同意画面にクライアント名を表示します</td></tr>
<tr><td>クライアントの同意画面のテキスト</td><td>同意のためのカスタムテキスト</td></tr>
</tbody>
</table>

<h3 id="logout-settings"><strong>4.5 ログアウト設定</strong></h3>
<table>
<thead>
<tr><th>設定</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td>フロントチャネルのログアウト</td><td>ブラウザリダイレクトによるログアウト (OpenID Connect フロントチャネルログアウト)</td></tr>
<tr><td>バックチャネルのログアウト URL</td><td>URL が Keycloak からのバックチャネル ログアウト リクエストを受信します</td></tr>
<tr><td>バックチャネルのログアウトセッションが必要です</td><td>ログアウト トークンにセッション ID を含めます。</td></tr>
<tr><td>バックチャネル ログアウトによりオフライン セッションが取り消される</td><td>ログアウト時にオフラインセッションを取り消す</td></tr>
</tbody>
</table>

<pre><code># Ví dụ Backchannel Logout URL cho Spring Boot
Backchannel logout URL: http://localhost:8081/logout/connect/back-channel/keycloak

# Ví dụ Front Channel Logout URL
Front channel logout URL: http://localhost:3000/logout-callback</code></pre>

<h2 id="5-oidc-auth-flows"><strong>5. OIDC 認証フローの詳細</strong></h2>

<h3 id="authorization-code-flow"><strong>5.1 認可コードの流れ</strong></h3>
<p>この流れでOKです<strong>一番おすすめ</strong>ほとんどのユースケースに対応します。ユーザーはKeycloakログインページにリダイレクトされます。認証が成功すると、Keycloakは認可コードを返し、クライアントはコードをトークンと交換します。</p>

<pre><code>┌──────────┐     ┌──────────┐     ┌──────────┐
│  User    │     │  Client  │     │ Keycloak │
│ (Browser)│     │  (App)   │     │  (IdP)   │
└────┬─────┘     └────┬─────┘     └────┬─────┘
     │  1. Click Login│                │
     │───────────────>│                │
     │                │ 2. Redirect    │
     │<───────────────│  /auth?        │
     │                │  response_type │
     │                │  =code&        │
     │                │  client_id=... │
     │ 3. Login page  │                │
     │───────────────────────────────>│
     │ 4. Enter credentials           │
     │───────────────────────────────>│
     │ 5. Redirect with code          │
     │<──────────────────────────────│
     │───────────────>│                │
     │                │ 6. Exchange    │
     │                │    code for    │
     │                │    tokens      │
     │                │───────────────>│
     │                │ 7. Tokens      │
     │                │<──────────────│
     │ 8. Authenticated│               │
     │<───────────────│                │</code></pre>

<p><strong>リクエスト認証コード:</strong></p>
<pre><code>GET /realms/my-company/protocol/openid-connect/auth?
  response_type=code&
  client_id=my-app&
  redirect_uri=http://localhost:3000/callback&
  scope=openid profile email&
  state=random-state-value&
  nonce=random-nonce-value</code></pre>

<p><strong>トークンの交換コード:</strong></p>
<pre><code>POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&
code=AUTH_CODE_FROM_CALLBACK&
client_id=my-app&
client_secret=CLIENT_SECRET&
redirect_uri=http://localhost:3000/callback</code></pre>

<p><strong>応答：</strong></p>
<pre><code>{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "expires_in": 300,
  "refresh_expires_in": 1800,
  "refresh_token": "eyJhbGciOiJIUzUxMiIs...",
  "token_type": "Bearer",
  "id_token": "eyJhbGciOiJSUzI1NiIs...",
  "not-before-policy": 0,
  "session_state": "a-session-id",
  "scope": "openid profile email"
}</code></pre>

<h3 id="authorization-code-with-pkce"><strong>5.2 認可コードフロー + PKCE</strong></h3>
<p>PKCE (Proof Key for Code Exchange、RFC 7636) は、認可コード フローを認可コード傍受攻撃から保護します。<strong>パブリッククライアントに必須</strong>そして<strong>すべてのクライアントに推奨</strong>.</p>

<p><strong>仕組み:</strong></p>
<ol>
<li><p>クライアントが作成されました<code>コード検証者</code>(ランダムな文字列 43 ～ 128 文字)</p></li>
<li><p>クライアントが計算する<code>コードチャレンジ</code>= Base64URL(SHA256(<code>コード検証者</code>))</p></li>
<li><p>送信<code>コードチャレンジ</code>認可リクエストで</p></li>
<li><p>送信<code>コード検証者</code>トークンリクエスト内 — Keycloakはハッシュ化と比較によって検証します</p></li>
</ol>

<p><strong>KeycloakでPKCEを構成します。</strong></p>
<p>「クライアント」→「タブ」に移動します<strong>高度な</strong> → <strong>詳細設定</strong>:</p>
<table>
<thead>
<tr><th>設定</th><th>価値</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td>コード交換コードチャレンジ方式の証明キー</td><td>S256</td><td>SHA-256 を使用した PKCE が必要 (推奨)</td></tr>
<tr><td></td><td>無地。無地</td><td>プレーンテキストの PKCE (安全ではありません)</td></tr>
<tr><td></td><td>（空の）</td><td>PKCEは必要ありません</td></tr>
</tbody>
</table>

<p><strong>PKCE フロー:</strong></p>
<pre><code># 1. Tạo code_verifier (client-side)
code_verifier="dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"

# 2. Tạo code_challenge = Base64URL(SHA256(code_verifier))
code_challenge="E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM"

# 3. Authorization request với code_challenge
GET /realms/my-company/protocol/openid-connect/auth?
  response_type=code&
  client_id=my-spa-app&
  redirect_uri=http://localhost:3000/callback&
  scope=openid profile email&
  state=random-state&
  code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM&
  code_challenge_method=S256

# 4. Token request với code_verifier
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&
code=AUTH_CODE&
client_id=my-spa-app&
redirect_uri=http://localhost:3000/callback&
code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk</code></pre>

<h3 id="implicit-flow"><strong>5.3 暗黙的なフロー (非推奨)</strong></h3>
<p><strong>使用すべきではありません。</strong>OAuth 2.0 Security Best Practice (RFC 9700) では、トークンは URL フラグメントを介して返され、ブラウザ履歴やリファラー ヘッダーを介して簡単に盗まれる可能性があるため、暗黙的フローの使用を推奨しません。</p>

<p><strong>交換する：</strong>SPA を含むすべてのクライアントに対して認証コード フロー + PKCE を使用します。</p>

<p>レガシー システムをサポートする必要がある場合:</p>
<pre><code># Bật Implicit Flow trong client settings
Capability Config → Implicit flow: ON

# Request (trả về token trực tiếp)
GET /realms/my-company/protocol/openid-connect/auth?
  response_type=id_token token&
  client_id=legacy-app&
  redirect_uri=http://localhost:3000/callback&
  scope=openid profile&
  state=random-state&
  nonce=random-nonce</code></pre>

<h3 id="client-credentials-flow"><strong>5.4 クライアント認証情報のフロー</strong></h3>
<p>のために<strong>マシン間の認証</strong>— ユーザーとの対話はありません。クライアントは、独自の資格情報を使用して自身を認証します。</p>

<p><strong>使用例:</strong></p>
<ul>
<li><p>マイクロサービスがマイクロサービスを呼び出す</p></li>
<li><p>バックエンドのバッチジョブ</p></li>
<li><p>スケジュールされたタスクには API アクセスが必要です</p></li>
<li><p>CI/CD パイプライン</p></li>
</ul>

<p><strong>構成：</strong></p>
<ol>
<li><p>作成する<strong>機密クライアント</strong> (<code>クライアント認証</code>= オン)</p></li>
<li><p>オンにする<strong>サービスアカウントの役割</strong>機能構成内</p></li>
<li><p>サービス アカウントに役割を割り当てる: クライアント →<strong>サービスアカウントの役割</strong>タブ</p></li>
</ol>

<pre><code># Request token
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
client_id=my-service&
client_secret=MY_CLIENT_SECRET&
scope=openid

# Response
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "expires_in": 300,
  "token_type": "Bearer",
  "not-before-policy": 0,
  "scope": "openid profile email"
}
# Lưu ý: KHÔNG có refresh_token và id_token trong Client Credentials flow</code></pre>

<h3 id="device-authorization-grant"><strong>5.5 デバイス認証付与 (RFC 8628)</strong></h3>
<p>入力が制限されているデバイス向け - スマート TV、IoT デバイス、CLI ツール。ユーザーは別のデバイス (電話、ラップトップ) でコードを使用して認証します。</p>

<p><strong>構成：</strong></p>
<ol>
<li><p>クライアント → 機能設定 → 有効化<strong>OAuth 2.0 デバイス認証付与</strong></p></li>
<li><p>レルム設定 → 構成<strong>OAuthデバイスコード</strong>寿命 (デフォルトは 600 秒)</p></li>
</ol>

<pre><code># Bước 1: Device request — lấy device code và user code
POST /realms/my-company/protocol/openid-connect/auth/device
Content-Type: application/x-www-form-urlencoded

client_id=my-tv-app

# Response
{
  "device_code": "GmRhmhcxhwAzkoEqiMEg_DnyEysNkuNhszIySk9eS",
  "user_code": "WDJB-MJHT",
  "verification_uri": "http://localhost:8080/realms/my-company/device",
  "verification_uri_complete": "http://localhost:8080/realms/my-company/device?user_code=WDJB-MJHT",
  "expires_in": 600,
  "interval": 5
}

# Bước 2: Hiển thị user_code và verification_uri trên TV/device
# User truy cập verification_uri trên phone/laptop, nhập user_code, đăng nhập

# Bước 3: Device polling — kiểm tra xem user đã xác thực chưa
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=urn:ietf:params:oauth:grant-type:device_code&
client_id=my-tv-app&
device_code=GmRhmhcxhwAzkoEqiMEg_DnyEysNkuNhszIySk9eS

# Response khi user chưa xác thực
{
  "error": "authorization_pending",
  "error_description": "The authorization request is still pending"
}

# Response khi user đã xác thực — nhận tokens
{
  "access_token": "eyJhbGciOi...",
  "refresh_token": "eyJhbGciOi...",
  "id_token": "eyJhbGciOi...",
  "token_type": "Bearer",
  "expires_in": 300
}</code></pre>

<h3 id="ciba-flow"><strong>5.6 CIBA — クライアント開始バックチャネル認証 (OIDC CIBA)</strong></h3>
<p>CIBA により、クライアントは認証を開始できるようになります<strong>ブラウザ経由でユーザーをリダイレクトする必要はありません</strong>。代わりに、Keycloakは別のチャネル(プッシュ通知、SMS、電子メール)経由でユーザーに認証リクエストを送信します。</p>

<p><strong>使用例:</strong></p>
<ul>
<li><p><strong>銀行業</strong>: POS はモバイルアプリ経由で支払いを認証します</p></li>
<li><p><strong>電気通信</strong>: SIMベースの認証</p></li>
<li><p><strong>コールセンター</strong>: エージェントが電話で顧客を認証します</p></li>
</ul>

<p><strong>CIBA 構成:</strong></p>
<ol>
<li><p>クライアント → 機能設定 → 有効化<strong>OIDC CIBA 助成金</strong></p></li>
<li><p>レルム設定 → 認証 → タブ<strong>CIBAポリシー</strong>:</p></li>
</ol>

<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>デフォルト値</th></tr>
</thead>
<tbody>
<tr><td>バックチャネルトークン配信モード</td><td>ポーリング、ping、またはプッシュ</td><td>世論調査。世論調査</td></tr>
<tr><td>有効期限切れの印刷</td><td>認証リクエストの有効期限</td><td>120秒</td></tr>
<tr><td>間隔</td><td>ポーリングリクエスト間の間隔</td><td>5秒</td></tr>
<tr><td>認証を要求されたユーザーのヒント</td><td>ユーザーヒントのタイプ:login_hint、login_hint_token、id_token_hint</td><td>ログインヒント</td></tr>
</tbody>
</table>

<pre><code># CIBA authentication request
POST /realms/my-company/protocol/openid-connect/ext/ciba/auth
Content-Type: application/x-www-form-urlencoded

client_id=my-pos-app&
client_secret=CLIENT_SECRET&
scope=openid&
login_hint=user@example.com&
binding_message=Xac+nhan+thanh+toan+500k

# Response
{
  "auth_req_id": "eyJhbGciOiJSUzI1NiIs...",
  "expires_in": 120,
  "interval": 5
}

# Polling for token (giống Device Auth)
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=urn:openid:params:grant-type:ciba&
client_id=my-pos-app&
client_secret=CLIENT_SECRET&
auth_req_id=eyJhbGciOiJSUzI1NiIs...</code></pre>

<p><strong>カスタム CIBA 認証チャネル プロバイダー:</strong></p>
<p>デフォルトではKeycloakが使用されます<code>CIBAログインユーザーリゾルバー</code>内部。実際のプッシュ通知を送信するには、カスタム SPI を実装する必要があります。</p>
<pre><code>// Implement interface CIBAAuthenticationChannelProvider
public class MyCIBAChannelProvider implements CIBAAuthenticationChannelProvider {

    @Override
    public void requestAuthentication(
        CIBALoginUserResolver.CIBALoginUser user,
        AuthenticationChannelRequest request) {
        // Gửi push notification đến user's device
        // binding_message: "Xác nhận thanh toán 500k"
        pushNotificationService.send(
            user.getDeviceToken(),
            request.getBindingMessage(),
            request.getAuthResultUrl()
        );
    }

    @Override
    public boolean verifyAuthentication(String authResultId) {
        // Verify kết quả từ user's device
        return authResultStore.isApproved(authResultId);
    }
}</code></pre>

<h2 id="6-tich-hop-react"><strong>6. OIDC クライアントと React (SPA) を統合する</strong></h2>

<h3 id="keycloak-js-adapter"><strong>6.1 keycloak-jsアダプターの使用</strong></h3>
<p>Keycloak は SPA 用の公式 JavaScript アダプターを提供します。</p>

<pre><code># Cài đặt
npm install keycloak-js</code></pre>

<p><strong>React 用に Keycloak クライアントを構成します。</strong></p>
<pre><code>Client ID: my-react-app
Client authentication: OFF (public client)
Valid redirect URIs: http://localhost:3000/*
Valid post logout redirect URIs: http://localhost:3000/*
Web origins: http://localhost:3000
PKCE Code Challenge Method: S256</code></pre>

<p><strong>React で Keycloak を初期化します。</strong></p>
<pre><code>// src/keycloak.ts
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "my-company",
  clientId: "my-react-app",
});

export default keycloak;</code></pre>

<pre><code>// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import keycloak from "./keycloak";

keycloak
  .init({
    onLoad: "login-required", // hoặc 'check-sso'
    pkceMethod: "S256",
    checkLoginIframe: false, // tắt cho production tránh cookie issues
    silentCheckSsoRedirectUri:
      window.location.origin + "/silent-check-sso.html",
  })
  .then((authenticated) => {
    if (authenticated) {
      console.log("User is authenticated");
      console.log("Token:", keycloak.token);
      console.log("User info:", keycloak.tokenParsed);

      // Auto-refresh token trước khi hết hạn
      setInterval(() => {
        keycloak
          .updateToken(70) // refresh nếu token hết hạn trong 70 giây
          .then((refreshed) => {
            if (refreshed) {
              console.log("Token was refreshed");
            }
          })
          .catch(() => {
            console.error("Failed to refresh token");
            keycloak.login(); // redirect về login nếu refresh thất bại
          });
      }, 60000);

      ReactDOM.createRoot(
        document.getElementById("root") as HTMLElement
      ).render(
        &lt;React.StrictMode&gt;
          &lt;App keycloak={keycloak} /&gt;
        &lt;/React.StrictMode&gt;
      );
    } else {
      console.warn("Not authenticated");
      keycloak.login();
    }
  })
  .catch((error) => {
    console.error("Keycloak init failed:", error);
  });</code></pre>

<pre><code>// src/App.tsx
import Keycloak from "keycloak-js";

interface AppProps {
  keycloak: Keycloak;
}

function App({ keycloak }: AppProps) {
  const handleLogout = () => {
    keycloak.logout({
      redirectUri: window.location.origin,
    });
  };

  const callApi = async () => {
    // Tự động gắn Bearer token vào API calls
    const response = await fetch("http://localhost:8081/api/data", {
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    &lt;div&gt;
      &lt;h1&gt;Welcome, {keycloak.tokenParsed?.preferred_username}&lt;/h1&gt;
      &lt;p&gt;Email: {keycloak.tokenParsed?.email}&lt;/p&gt;
      &lt;p&gt;Roles: {keycloak.tokenParsed?.realm_access?.roles?.join(", ")}&lt;/p&gt;
      &lt;button onClick={callApi}&gt;Call API&lt;/button&gt;
      &lt;button onClick={handleLogout}&gt;Logout&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>

<h3 id="react-oidc-context"><strong>6.2 React-oidc-context の使用 (keycloak-js を置き換える)</strong></h3>
<p>別のオプションはライブラリを使用することです<code>反応-oidc-コンテキスト</code>に基づく<code>oidc-クライアント-ts</code>— Keycloak 固有のアダプターに依存しません。</p>

<pre><code>npm install react-oidc-context oidc-client-ts</code></pre>

<pre><code>// src/main.tsx
import { AuthProvider } from "react-oidc-context";

const oidcConfig = {
  authority: "http://localhost:8080/realms/my-company",
  client_id: "my-react-app",
  redirect_uri: "http://localhost:3000/callback",
  post_logout_redirect_uri: "http://localhost:3000",
  scope: "openid profile email",
  automaticSilentRenew: true,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  &lt;AuthProvider {...oidcConfig}&gt;
    &lt;App /&gt;
  &lt;/AuthProvider&gt;
);</code></pre>

<pre><code>// src/App.tsx
import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  if (auth.isLoading) return &lt;div&gt;Loading...&lt;/div&gt;;
  if (auth.error) return &lt;div&gt;Error: {auth.error.message}&lt;/div&gt;;

  if (!auth.isAuthenticated) {
    return &lt;button onClick={() =&gt; auth.signinRedirect()}&gt;Login&lt;/button&gt;;
  }

  return (
    &lt;div&gt;
      &lt;p&gt;Welcome, {auth.user?.profile.preferred_username}&lt;/p&gt;
      &lt;button onClick={() =&gt; auth.removeUser()}&gt;Logout&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>

<h2 id="7-tich-hop-spring-boot"><strong>7. OIDC クライアントと Spring Boot を統合する</strong></h2>

<h3 id="spring-boot-oauth2-resource-server"><strong>7.1 Spring Boot OAuth2 リソースサーバー</strong></h3>
<p>Spring Boot 構成は次のことを行います<strong>リソースサーバー</strong>— Keycloak からの JWT トークンを検証します。</p>

<pre><code>&lt;!-- pom.xml --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-oauth2-resource-server&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
&lt;/dependency&gt;</code></pre>

<pre><code># application.yml
spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: http://localhost:8080/realms/my-company
          jwk-set-uri: http://localhost:8080/realms/my-company/protocol/openid-connect/certs</code></pre>

<pre><code>// SecurityConfig.java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("admin")
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt
                    .jwtAuthenticationConverter(jwtAuthenticationConverter())
                )
            );
        return http.build();
    }

    // Custom converter để map Keycloak realm_access.roles → Spring Security authorities
    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
        converter.setJwtGrantedAuthoritiesConverter(jwt -> {
            List&lt;GrantedAuthority&gt; authorities = new ArrayList&lt;&gt;();

            // Extract realm roles
            Map&lt;String, Object&gt; realmAccess = jwt.getClaimAsMap("realm_access");
            if (realmAccess != null) {
                List&lt;String&gt; roles = (List&lt;String&gt;) realmAccess.get("roles");
                if (roles != null) {
                    roles.forEach(role ->
                        authorities.add(new SimpleGrantedAuthority("ROLE_" + role))
                    );
                }
            }

            // Extract client roles
            Map&lt;String, Object&gt; resourceAccess = jwt.getClaimAsMap("resource_access");
            if (resourceAccess != null) {
                Map&lt;String, Object&gt; clientAccess =
                    (Map&lt;String, Object&gt;) resourceAccess.get("my-backend-app");
                if (clientAccess != null) {
                    List&lt;String&gt; clientRoles = (List&lt;String&gt;) clientAccess.get("roles");
                    if (clientRoles != null) {
                        clientRoles.forEach(role ->
                            authorities.add(new SimpleGrantedAuthority("ROLE_" + role))
                        );
                    }
                }
            }

            return authorities;
        });
        return converter;
    }
}</code></pre>

<h3 id="spring-boot-oauth2-client"><strong>7.2 Spring Boot OAuth2 クライアント (サーバー側ログイン)</strong></h3>
<p>Spring Boot 構成は次のことを行います<strong>OAuth2クライアント</strong>— サーバー側のログイン フロー:</p>

<pre><code>&lt;!-- pom.xml --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-oauth2-client&lt;/artifactId&gt;
&lt;/dependency&gt;</code></pre>

<pre><code># application.yml
spring:
  security:
    oauth2:
      client:
        registration:
          keycloak:
            client-id: my-backend-app
            client-secret: ${KEYCLOAK_CLIENT_SECRET}
            scope: openid,profile,email
            authorization-grant-type: authorization_code
            redirect-uri: "{baseUrl}/login/oauth2/code/keycloak"
        provider:
          keycloak:
            issuer-uri: http://localhost:8080/realms/my-company
            user-name-attribute: preferred_username</code></pre>

<p><strong>Spring Boot OAuth2 クライアントの Keycloak クライアント設定:</strong></p>
<pre><code>Client ID: my-backend-app
Client authentication: ON (confidential)
Valid redirect URIs: http://localhost:8081/login/oauth2/code/keycloak
Backchannel logout URL: http://localhost:8081/logout/connect/back-channel/keycloak
Web origins: http://localhost:8081</code></pre>

<h2 id="8-advanced-client-settings"><strong>8. クライアントの詳細設定</strong></h2>

<h3 id="advanced-tab"><strong>8.1 詳細タブ</strong></h3>
<p>タブの詳細設定<strong>高度な</strong>クライアントの:</p>

<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>推奨値</th></tr>
</thead>
<tbody>
<tr><td>アクセストークンの有効期間</td><td>このクライアントのレルムレベルのトークンの有効期間をオーバーライドします</td><td>空白のままにします = レルムレベルを使用します</td></tr>
<tr><td>クライアントセッションアイドル状態</td><td>クライアントセッションのアイドルタイムアウトをオーバーライドする</td><td>空白のままにします = レルムレベルを使用します</td></tr>
<tr><td>クライアントセッション最大値</td><td>クライアントセッションの最大存続期間を上書きする</td><td>空白のままにします = レルムレベルを使用します</td></tr>
<tr><td>クライアントのオフライン セッションのアイドル状態</td><td>オフライン セッションのアイドル タイムアウトをオーバーライドする</td><td>空白のままにします = レルムレベルを使用します</td></tr>
<tr><td>クライアントのオフライン セッションの最大値</td><td>オフラインセッションの最大存続期間を上書きする</td><td>空白のままにします = レルムレベルを使用します</td></tr>
<tr><td>PKCEコードチャレンジ方式</td><td>必須のPKCEメソッド</td><td>S256</td></tr>
<tr><td>プッシュされた承認リクエストが必要です</td><td>必須の PAR (RFC 9126)</td><td>セキュリティの高いアプリの場合はオン</td></tr>
<tr><td>ACR から LoA へのマッピング</td><td>ACR値のマッピング → 保証レベル</td><td>ステップアップ認証を構成する</td></tr>
</tbody>
</table>

<h3 id="credentials-tab"><strong>8.2 [認証情報] タブ (機密クライアント)</strong></h3>
<p>クライアントの認証情報を管理します。</p>
<ul>
<li><p><strong>クライアント認証子</strong>: クライアント ID とシークレット (デフォルト)、署名付き JWT (client_secret_jwt)、秘密キー付き署名付き JWT (private_key_jwt)、X.509 証明書</p></li>
<li><p><strong>クライアントシークレット</strong>: 侵害された場合は再生成します</p></li>
<li><p><strong>登録アクセストークン</strong>: 動的クライアント登録に使用されます。</p></li>
</ul>

<h3 id="service-account-tab"><strong>8.3 「サービスアカウントロール」タブ</strong></h3>
<p>サービス アカウントにロールを割り当てます (クライアント認証情報フロー):</p>
<ol>
<li><p>クライアント→タブを開く<strong>サービスアカウントの役割</strong></p></li>
<li><p>クリック<strong>役割の割り当て</strong></p></li>
<li><p>割り当てるレルム ロールまたはクライアント ロールを選択します</p></li>
</ol>

<pre><code># Ví dụ gán role bằng Admin CLI
# Lấy service account user ID
SERVICE_ACCOUNT_ID=$(bin/kcadm.sh get clients/$CLIENT_UUID/service-account-user \
  -r my-company --fields id --format csv --noquotes)

# Gán realm role
bin/kcadm.sh add-roles -r my-company \
  --uusername service-account-my-service \
  --rolename admin

# Gán client role
bin/kcadm.sh add-roles -r my-company \
  --uusername service-account-my-service \
  --cclientid target-client \
  --rolename manage-users</code></pre>

<h2 id="9-thuc-hanh"><strong>9. 練習問題</strong></h2>

<h3 id="lab-1"><strong>ラボ 1: React SPA のパブリック クライアントを作成する</strong></h3>
<ol>
<li><p>クライアントの作成<code>リアクトスパラボ</code>と<code>クライアント認証</code>= オフ</p></li>
<li><p>構成: 有効なリダイレクト URI =<code>http://localhost:3000/*</code>、Web オリジン =<code>http://localhost:3000</code></p></li>
<li><p>PKCE を有効にする: 詳細 → PKCE コード チャレンジ メソッド =<code>S256</code></p></li>
<li><p>Reactアプリを作成、インストール<code>キークローク-js</code>、統合されたログイン/ログアウト</p></li>
<li><p>ブラウザの [DevTools] → [Application] → [Network] タブでトークンを確認します。</p></li>
</ol>

<h3 id="lab-2"><strong>ラボ 2: Spring Boot API 用の Confidential クライアントを作成する</strong></h3>
<ol>
<li><p>クライアントの作成<code>スプリングAPIラボ</code>と<code>クライアント認証</code>= オン</p></li>
<li><p>オンにする<code>サービスアカウントの役割</code></p></li>
<li><p>役割を割り当てる<code>管理者。管理者</code>サービスアカウント用</p></li>
<li><p>Spring Boot プロジェクトを作成する<code>スプリングブートスターターoauth2リソースサーバー</code></p></li>
<li><p>エンドポイントの実装<code>/api/私</code>JWTからユーザー情報を返します</p></li>
<li><p>でテストします<code>カール</code>Bearer トークンを送信する</p></li>
</ol>

<h3 id="lab-3"><strong>ラボ 3: クライアント認証情報のフロー</strong></h3>
<ol>
<li><p>クライアントの作成<code>バッチワーカー</code>クライアント資格情報のみのフロー</p></li>
<li><p>トークンを取得します<code>カール</code></p></li>
<li><p>取得したトークンを使用して API エンドポイントを呼び出します</p></li>
<li><p>トークンの内容を確認するには<a href="https://jwt.io">jwt.io</a>(開発専用)</p></li>
</ol>

<h3 id="lab-4"><strong>ラボ 4: デバイス認証フロー</strong></h3>
<ol>
<li><p>パブリッククライアントを作成する<code>クリツール</code>Device Authorization Grant が有効な場合</p></li>
<li><p>使用<code>カール</code>デバイスフローをシミュレートするには:</p>
<ul>
<li>デバイスコードをリクエストする</li>
<li>ブラウザで認証URIを開き、ユーザーコードを入力します</li>
<li>トークンのポーリング</li>
</ul>
</li>
<li><p>受け取ったトークンを確認する</p></li>
</ol>

<pre><code># Script test Device Authorization Flow
#!/bin/bash
REALM=my-company
CLIENT_ID=cli-tool
KC_URL=http://localhost:8080

# Bước 1: Request device code
RESPONSE=$(curl -s -X POST \
  "$KC_URL/realms/$REALM/protocol/openid-connect/auth/device" \
  -d "client_id=$CLIENT_ID")

DEVICE_CODE=$(echo $RESPONSE | jq -r '.device_code')
USER_CODE=$(echo $RESPONSE | jq -r '.user_code')
VERIFY_URI=$(echo $RESPONSE | jq -r '.verification_uri_complete')
INTERVAL=$(echo $RESPONSE | jq -r '.interval')

echo "========================================"
echo "Mở URL sau trên browser:"
echo "$VERIFY_URI"
echo "Hoặc truy cập: $(echo $RESPONSE | jq -r '.verification_uri')"
echo "Nhập code: $USER_CODE"
echo "========================================"

# Bước 2: Polling for token
while true; do
  sleep $INTERVAL
  TOKEN_RESPONSE=$(curl -s -X POST \
    "$KC_URL/realms/$REALM/protocol/openid-connect/token" \
    -d "grant_type=urn:ietf:params:oauth:grant-type:device_code" \
    -d "client_id=$CLIENT_ID" \
    -d "device_code=$DEVICE_CODE")

  ERROR=$(echo $TOKEN_RESPONSE | jq -r '.error // empty')
  if [ -z "$ERROR" ]; then
    echo "Xác thực thành công!"
    echo "Access Token: $(echo $TOKEN_RESPONSE | jq -r '.access_token' | head -c 50)..."
    break
  elif [ "$ERROR" = "authorization_pending" ]; then
    echo "Đang chờ user xác thực..."
  elif [ "$ERROR" = "slow_down" ]; then
    INTERVAL=$((INTERVAL + 5))
    echo "Slow down, tăng interval lên ${INTERVAL}s"
  else
    echo "Error: $ERROR"
    break
  fi
done</code></pre>
