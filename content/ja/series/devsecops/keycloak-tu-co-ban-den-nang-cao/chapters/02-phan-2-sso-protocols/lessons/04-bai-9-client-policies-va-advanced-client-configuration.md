---
id: 019d8b30-b109-7001-c001-e0c5f8100109
title: 'レッスン 9: クライアント ポリシーと高度なクライアント構成'
slug: bai-9-client-policies-va-advanced-client-configuration
description: クライアント ポリシー アーキテクチャ (プロファイル、条件、エグゼキュータ)、FAPI 2.0 セキュリティ プロファイル、クライアント シークレット ローテーション、サービス アカウント、対象者サポート、機密クライアント資格情報 (クライアント ID/シークレット、署名付き JWT、X.509)、標準トークン交換、JWT 認可付与 (RFC 7523)、および MCP サーバーの構成。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 2: SSO プロトコル - OpenID Connect と SAML'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-99" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-99)"/>

  <!-- Decorations -->
  <g>
    <circle cx="849" cy="37" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1098" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="847" cy="215" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="1096" cy="44" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="845" cy="133" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="227" x2="1100" y2="307" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="257" x2="1050" y2="327" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="963.3730669589464,106 963.3730669589464,148 927,169 890.6269330410536,148 890.6269330410536,106.00000000000001 927,85" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: クライアント ポリシーとアドバンスト クライアント</tspan>
      <tspan x="60" dy="42">構成</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: SSO プロトコル - OpenID Connect と SAML</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-client-policies"><strong>1. クライアントポリシー</strong></h2>

<p>クライアント ポリシーは有効なフレームワークです<strong>セキュリティ要件を強制する</strong>クライアントに自動的にインストールされます。各クライアントの設定を手動で確認する代わりに、Keycloak が自動的に検証して適用するポリシーを定義します。</p>

<h3 id="tai-sao-can-client-policies"><strong>1.1 クライアント ポリシーが必要なのはなぜですか?</strong></h3>
<ul>
<li><p><strong>一貫性</strong>: すべてのクライアントが同じセキュリティ標準に準拠していることを確認します。</p></li>
<li><p><strong>オートメーション</strong>: 準拠していないリクエストを自動的に拒否します</p></li>
<li><p><strong>コンプライアンス</strong>: 業界標準の強制 (FAPI、PSD2、オープン バンキング)</p></li>
<li><p><strong>ガバナンス</strong>: クライアントの登録と構成を制御します</p></li>
</ul>

<h3 id="architecture"><strong>1.2 アーキテクチャ: プロファイル、条件、エグゼキュータ</strong></h3>
<p>クライアント ポリシーには、次の 3 つの主要コンポーネントが含まれます。</p>

<pre><code>┌─────────────────────────────────────────────────┐
│                  Client Policy                   │
│                                                   │
│  ┌──────────────┐     ┌──────────────────────┐   │
│  │  Conditions   │     │      Profiles        │   │
│  │ (Khi nào?)    │────>│   (Áp dụng gì?)      │   │
│  │               │     │                      │   │
│  │ • Client Role │     │  ┌────────────────┐  │   │
│  │ • Client Scope│     │  │   Executors    │  │   │
│  │ • Any Client  │     │  │ (Làm gì?)      │  │   │
│  │ • Client      │     │  │                │  │   │
│  │   Access Type │     │  │ • PKCE Enforcer│  │   │
│  │ • Client      │     │  │ • Secure Alg   │  │   │
│  │   Update      │     │  │ • DPoP Verify  │  │   │
│  │   Source      │     │  │ • ...          │  │   │
│  └──────────────┘     │  └────────────────┘  │   │
│                        └──────────────────────┘   │
└─────────────────────────────────────────────────┘</code></pre>

<table>
<thead>
<tr><th>材料</th><th>説明する</th><th>例えば</th></tr>
</thead>
<tbody>
<tr><td><strong>プロフィール</strong></td><td>エグゼキュータのセット — 「何を強制するか」を定義します</td><td><code>fapi-2-セキュリティプロファイル</code></td></tr>
<tr><td><strong>状態</strong></td><td>条件によって、どのクライアントが影響を受けるかが決まります - 「誰に対して強制するか」</td><td>クライアントには役割がある<code>ファピクライアント</code></td></tr>
<tr><td><strong>執行者</strong></td><td>特定の施行ロジック - 「施行方法」</td><td>PKCE S256 が必要です</td></tr>
</tbody>
</table>

<h3 id="tao-client-profile"><strong>1.3 クライアントプロファイルの作成</strong></h3>
<ol>
<li><p>入力<strong>レルム設定</strong> → <strong>クライアントポリシー</strong>→タブ<strong>プロフィール</strong></p></li>
<li><p>クリック<strong>クライアントプロファイルの作成</strong></p></li>
<li><p>入力<strong>名前</strong>そして<strong>説明</strong></p></li>
<li><p>クリック<strong>保存</strong>→プロフィールを開く→クリック<strong>実行者の追加</strong></p></li>
</ol>

<h3 id="executors"><strong>1.4 利用可能なエグゼキュータ</strong></h3>

<table>
<thead>
<tr><th>執行者</th><th>説明する</th><th>パラメータ</th></tr>
</thead>
<tbody>
<tr><td><strong>セキュアクライアント認証システム</strong></td><td>特定の認証方法が必要</td><td>許可された認証子: client-secret、client-jwt、client-x509</td></tr>
<tr><td><strong>PKCE 執行者</strong></td><td>PKCEが必要です</td><td>オーグメント: ON (クライアントが不足している場合は自動的に追加)</td></tr>
<tr><td><strong>安全な署名アルゴリズム</strong></td><td>安全なアルゴリズムのみが許可されます</td><td>デフォルト: RS256、ES256、PS256</td></tr>
<tr><td><strong>署名付き JWT の安全な署名アルゴリズム</strong></td><td>クライアント JWT 認証のアルゴリズム</td><td>PS256、ES256（RS256は不可）</td></tr>
<tr><td><strong>鍵の所有者執行者</strong></td><td>必要なトークン バインディング (mTLS または DPoP)</td><td>自動構成: オン</td></tr>
<tr><td><strong>DPoP 証明検証者</strong></td><td>トークンリクエストで DPoP 証明を要求する</td><td></td></tr>
<tr><td><strong>機密クライアント執行者</strong></td><td>機密クライアントのみが許可されます</td><td></td></tr>
<tr><td><strong>同意が必要です</strong></td><td>必須の同意画面</td><td></td></tr>
<tr><td><strong>フルスコープ無効</strong></td><td>フルスコープマッピングをオフにする</td><td></td></tr>
<tr><td><strong>暗黙的な許可を拒否する</strong></td><td>暗黙的なフローは許可されません</td><td></td></tr>
<tr><td><strong>リソース所有者のパスワード認証情報の付与を拒否する</strong></td><td>ROPC は許可されません</td><td></td></tr>
<tr><td><strong>セキュア リダイレクト URI エンフォーサ</strong></td><td>リダイレクト URI を検証する</td><td>HTTPS が必要、ワイルドカードなし</td></tr>
<tr><td><strong>安全なリクエストオブジェクト</strong></td><td>必須の JAR (JWT で保護された承認リクエスト)</td><td></td></tr>
<tr><td><strong>安全な応答タイプ</strong></td><td>安全な応答タイプのみが許可されます</td><td>許可: コード (トークンなし、id_token)</td></tr>
<tr><td><strong>セキュアセッションエンフォーサ</strong></td><td>セッション設定を強制する</td><td></td></tr>
</tbody>
</table>

<h3 id="tao-condition"><strong>1.5 利用可能な条件</strong></h3>

<table>
<thead>
<tr><th>状態</th><th>説明する</th><th>例えば</th></tr>
</thead>
<tbody>
<tr><td><strong>あらゆるクライアント</strong></td><td>すべてのクライアントに適用されます</td><td>グローバルセキュリティポリシー</td></tr>
<tr><td><strong>クライアントアクセスタイプ</strong></td><td>クライアントのタイプに基づく (公開/機密)</td><td>すべてのパブリック クライアントに PKCE を適用する</td></tr>
<tr><td><strong>クライアントの役割</strong></td><td>クライアントには特定の役割があります</td><td>クライアントには役割がある<code>fapi準拠</code></td></tr>
<tr><td><strong>クライアントスコープ</strong></td><td>クライアントは特定のスコープを使用します</td><td>クライアントリクエストのスコープ<code>支払い</code></td></tr>
<tr><td><strong>クライアント更新ソースグループ</strong></td><td>ソースの作成/更新クライアントに基づく</td><td>動的登録によって作成されたクライアント</td></tr>
<tr><td><strong>クライアント更新コンテキスト</strong></td><td>クライアント更新時のコンテキスト</td><td>認可リクエスト、トークンリクエスト</td></tr>
</tbody>
</table>

<h3 id="tao-policy"><strong>1.6 クライアントポリシーの作成</strong></h3>
<ol>
<li><p>入力<strong>レルム設定</strong> → <strong>クライアントポリシー</strong>→タブ<strong>ポリシー</strong></p></li>
<li><p>クリック<strong>クライアントポリシーの作成</strong></p></li>
<li><p>入力<strong>名前</strong>そして<strong>説明</strong></p></li>
<li><p>もっと<strong>条件</strong>(影響を受けるクライアントを特定する)</p></li>
<li><p>もっと<strong>クライアントプロファイル</strong>(どのプロファイルが適用されるか)</p></li>
</ol>

<pre><code># Ví dụ: Tạo policy enforce PKCE cho tất cả public clients
Profile: pkce-required-profile
  Executors:
    - PKCE Enforcer
        Augment: ON (auto-add PKCE nếu client không gửi)

Policy: enforce-pkce-for-public
  Conditions:
    - Client Access Type: public
  Profiles:
    - pkce-required-profile</code></pre>

<h3 id="vi-du-policy-thuc-te"><strong>1.7 実践的なポリシーの例</strong></h3>

<p><strong>ポリシー 1: すべてのクライアントのベースライン セキュリティ</strong></p>
<pre><code>Profile: baseline-security
  Executors:
    - Reject Implicit Grant
    - Reject Resource Owner Password Credentials Grant
    - PKCE Enforcer (S256)
    - Secure Signing Algorithm (RS256, ES256, PS256)

Policy: baseline-all-clients
  Conditions:
    - Any Client
  Profiles:
    - baseline-security</code></pre>

<p><strong>ポリシー 2: 金融 API の高セキュリティ</strong></p>
<pre><code>Profile: financial-api-profile
  Executors:
    - Confidential Client Enforcer
    - Holder-of-Key Enforcer (mTLS hoặc DPoP)
    - Secure Client Authenticator (private_key_jwt, client-x509)
    - Secure Request Object Required
    - Consent Required
    - Secure Redirect URIs Enforcer (HTTPS only)

Policy: financial-api-policy
  Conditions:
    - Client Scopes: fapi-scope
  Profiles:
    - financial-api-profile</code></pre>

<h2 id="2-fapi-security-profile"><strong>2. FAPI 2.0 セキュリティ プロファイル</strong></h2>

<p>FAPI (金融グレード API) は、OpenID Foundation によって開発された一連の高度なセキュリティ標準であり、以下で広く使用されています。<strong>オープンバンキング</strong>, <strong>決済サービス指令 2 (PSD2)</strong>、金融アプリケーションなど。</p>

<h3 id="fapi-2-baseline"><strong>2.1 FAPI 2.0 ベースライン プロファイル</strong></h3>
<p>Keycloak は、FAPI 2.0 の組み込みプロファイルを提供します。</p>

<table>
<thead>
<tr><th>リクエスト</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td>認可コードフローのみ</td><td>暗黙的および ROPC は許可されません</td></tr>
<tr><td>PKCE (S256)</td><td>すべてのクライアントに必須</td></tr>
<tr><td>機密クライアント</td><td>クライアント認証が必要です</td></tr>
<tr><td>安全な署名アルゴリズム</td><td>PS256、ES256 (RS256なし)</td></tr>
<tr><td>送信者制限付きトークン</td><td>DPoP または mTLS トークン バインディング</td></tr>
<tr><td>リダイレクト URI の完全一致</td><td>ワイルドカードなし</td></tr>
<tr><td>HTTPSが必要です</td><td>すべてのエンドポイントに対して</td></tr>
</tbody>
</table>

<h3 id="fapi-2-advanced"><strong>2.2 FAPI 2.0 高度なプロファイル (メッセージ署名)</strong></h3>
<p>ベースラインに加えて、アドバンスト プロファイルでは以下が追加されます。</p>
<ul>
<li><p><strong>PAR (プッシュされた認可リクエスト)</strong>— RFC 9126: リダイレクトする前にバックチャネル経由で認可リクエストを送信する</p></li>
<li><p><strong>JAR (JWT で保護された承認リクエスト)</strong>— RFC 9101: JWT で署名された認証パラメーター</p></li>
<li><p><strong>JARM (JWT で保護された認証応答モード)</strong>: JWT で署名された承認応答</p></li>
</ul>

<pre><code># PAR request — gửi authorization params qua backchannel
POST /realms/my-realm/protocol/openid-connect/ext/par/request
Content-Type: application/x-www-form-urlencoded
Authorization: Basic base64(client_id:client_secret)

response_type=code&
client_id=my-fapi-client&
redirect_uri=https://myapp.com/callback&
scope=openid payments&
state=random-state&
code_challenge=code_challenge_value&
code_challenge_method=S256

# Response
{
  "request_uri": "urn:ietf:params:oauth:request_uri:abc123",
  "expires_in": 60
}

# Authorization request chỉ chứa request_uri
GET /realms/my-realm/protocol/openid-connect/auth?
  client_id=my-fapi-client&
  request_uri=urn:ietf:params:oauth:request_uri:abc123</code></pre>

<h3 id="enable-fapi-2"><strong>2.3 KeycloakでFAPI 2.0を有効にする</strong></h3>
<ol>
<li><p>入力<strong>レルム設定</strong> → <strong>クライアントポリシー</strong>→タブ<strong>プロフィール</strong></p></li>
<li><p>キークロークが利用可能です<strong>グローバルプロファイル</strong>:</p>
<ul>
<li><code>fapi-2-セキュリティプロファイル</code></li>
<li><code>fapi-2-メッセージ署名プロファイル</code></li>
</ul>
</li>
<li><p>対応するプロファイルを使用してポリシーを作成する</p></li>
<li><p>コンプライアンスが必要なクライアントを選択するための条件の割り当て</p></li>
</ol>

<pre><code># Ví dụ: Enforce FAPI 2.0 cho clients có scope "fapi"
Policy: fapi-2-enforcement
  Conditions:
    - Client Scopes: fapi
  Profiles:
    - fapi-2-security-profile     # Built-in global profile
    - fapi-2-message-signing-profile  # Thêm nếu cần message signing</code></pre>

<h2 id="3-client-secret-rotation"><strong>3. クライアント シークレットのローテーション</strong></h2>

<p>クライアント シークレットのローテーションにより、クライアント シークレットを変更できます<strong>ダウンタイムを引き起こさない</strong>— 古いシークレットは移行期間中もアクティブのままです。</p>

<h3 id="cau-hinh-secret-rotation"><strong>3.1 クライアント シークレット ローテーションの構成</strong></h3>
<p>使用<strong>クライアントポリシー</strong>遺言執行者付き<strong>シークレットローテーション</strong>:</p>

<pre><code># Tạo Profile với Secret Rotation executor
Profile: secret-rotation-profile
  Executors:
    - Secret Rotation
        Secret Expiration: 2592000        # 30 ngày (tính bằng giây)
        Rotated Secret Expiration: 604800  # Grace period: 7 ngày
        Remain Expiration: 604800          # Thời gian cảnh báo trước khi hết hạn</code></pre>

<p><strong>仕組み:</strong></p>
<pre><code>Timeline:
┌──────────────────────────────────────────────────────────┐
│ Ngày 0         Ngày 23        Ngày 30          Ngày 37  │
│   │               │              │                │     │
│   ▼               ▼              ▼                ▼     │
│ Secret A      Cảnh báo      Secret B           Secret A │
│ created       sắp hết hạn   created + active   hết hạn  │
│                              Secret A vẫn       hoàn toàn│
│                              hoạt động                   │
│                              (grace period)              │
└──────────────────────────────────────────────────────────┘

Khoảng grace period (Ngày 30-37):
- Secret B: active (primary)
- Secret A: vẫn valid (rotated secret, grace)
→ Ứng dụng có 7 ngày để chuyển sang Secret B</code></pre>

<h3 id="trien-khai-secret-rotation"><strong>3.2 シークレットローテーションの導入</strong></h3>
<pre><code># 1. Lấy current secret
CURRENT_SECRET=$(curl -s -X GET \
  "$KC_URL/admin/realms/my-realm/clients/$CLIENT_UUID/client-secret" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq -r '.value')

# 2. Rotate secret — regenerate new secret
curl -s -X POST \
  "$KC_URL/admin/realms/my-realm/clients/$CLIENT_UUID/client-secret" \
  -H "Authorization: Bearer $ADMIN_TOKEN"

# 3. Lấy new secret
NEW_SECRET=$(curl -s -X GET \
  "$KC_URL/admin/realms/my-realm/clients/$CLIENT_UUID/client-secret" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq -r '.value')

# 4. Update ứng dụng với new secret
# Trong grace period, cả current và new secret đều hoạt động</code></pre>

<h2 id="4-service-accounts"><strong>4. サービスアカウント</strong></h2>

<p>オンにした場合<strong>サービスアカウントの役割</strong>機密クライアントの場合、Keycloak は 1 つを作成します<strong>サービスアカウントユーザー</strong>特にそのクライアントのために。このユーザーは、マシン間の操作においてクライアントを表します。</p>

<h3 id="service-account-user"><strong>4.1 サービスアカウントのユーザー</strong></h3>
<pre><code># Service account user naming convention
Username: service-account-{client-id}
# Ví dụ: service-account-my-backend-service

# Service account user có các đặc điểm:
# - Không có password (authenticate bằng client credentials)
# - Có thể gán realm roles và client roles
# - Có thể thêm user attributes
# - Xuất hiện trong Users list (với filter service accounts)</code></pre>

<h3 id="gan-roles"><strong>4.2 サービスアカウントへの役割の割り当て</strong></h3>
<ol>
<li><p>クライアント→タブを開く<strong>サービスアカウントの役割</strong></p></li>
<li><p>クリック<strong>役割の割り当て</strong></p></li>
<li><p>レルムの役割を選択するか、クライアントでフィルタリングして、クライアントの役割を割り当てます</p></li>
</ol>

<pre><code># Admin CLI: Gán roles
# Gán realm role
bin/kcadm.sh add-roles -r my-realm \
  --uusername service-account-my-backend-service \
  --rolename realm-admin

# Gán client role từ client khác
bin/kcadm.sh add-roles -r my-realm \
  --uusername service-account-my-backend-service \
  --cclientid realm-management \
  --rolename manage-users

# REST API: Gán role
# Lấy service account user
SA_USER=$(curl -s -X GET \
  "$KC_URL/admin/realms/my-realm/clients/$CLIENT_UUID/service-account-user" \
  -H "Authorization: Bearer $ADMIN_TOKEN")

SA_USER_ID=$(echo $SA_USER | jq -r '.id')

# Gán realm role
ROLE_ID=$(curl -s -X GET \
  "$KC_URL/admin/realms/my-realm/roles/admin" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq -r '.id')

curl -s -X POST \
  "$KC_URL/admin/realms/my-realm/users/$SA_USER_ID/role-mappings/realm" \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '[{"id":"'$ROLE_ID'","name":"admin"}]'</code></pre>

<h3 id="service-account-best-practices"><strong>4.3 サービスアカウントのベストプラクティス</strong></h3>
<ul>
<li><p><strong>最低限の特権</strong>: 各サービスに必要な役割のみを割り当てます</p></li>
<li><p><strong>個別のクライアント</strong>: マイクロサービスごとに個別のクライアントを作成し、共有しないでください。</p></li>
<li><p><strong>監査</strong>: イベント ログを有効にしてサービス アカウントのアクティビティを追跡します</p></li>
<li><p><strong>トークンの寿命が短い</strong>: サービス アカウントのアクセス トークンは短くする必要があります (1 ～ 5 分)。</p></li>
<li><p><strong>認証情報のローテーション</strong>: クライアント シークレット ローテーションまたは証明書ベースの認証を使用します。</p></li>
</ul>

<h2 id="5-audience-support"><strong>5. 視聴者サポート</strong></h2>

<p>観客 （<code>オード</code>請求）決定<strong>どのリソースサーバーですか?</strong>アクセストークンは使用することを目的としています。これは、トークンが望ましくないサービスで使用されるのを防ぐための重要なセキュリティ メカニズムです。</p>

<h3 id="audience-problem"><strong>5.1 問題点</strong></h3>
<pre><code># Mặc định, access token chỉ có aud = client-id đã request
{
  "aud": "my-frontend-app",     // ← chỉ có client đã request
  "azp": "my-frontend-app"
}

# Resource Server (my-api-service) verify token:
# → aud không chứa "my-api-service"
# → REJECT! (nếu resource server validate audience)</code></pre>

<h3 id="audience-mapper"><strong>5.2 ソリューション: オーディエンス プロトコル マッパー</strong></h3>
<p>もっと<strong>オーディエンスマッパー</strong>クライアントまたはクライアント スコープに移動してリソース サーバーを追加します<code>オード</code>:</p>

<pre><code># Cách 1: Thêm Audience Mapper trực tiếp vào client
Client: my-frontend-app → Client scopes → Dedicated scope → Add mapper
  Mapper Type: Audience
  Name: api-audience
  Included Client Audience: my-api-service
  Included Custom Audience: (trống)
  Add to ID token: OFF
  Add to access token: ON

# Cách 2: Tạo Client Scope chứa Audience Mapper
Client Scope: api-access
  Mapper: Audience → my-api-service
  Gán scope cho frontend client

# Kết quả trong access token:
{
  "aud": ["my-frontend-app", "my-api-service"],
  "azp": "my-frontend-app"
}</code></pre>

<h3 id="audience-resolve"><strong>5.3 オーディエンス解決マッパー</strong></h3>
<p>Keycloakには組み込み<strong>観客の決意</strong>マッパー (デフォルトのスコープ内)<code>役割。役割</code>) — 自動的に追加<code>オード</code>ユーザーがクライアントの役割を持っているクライアントの場合:</p>

<pre><code># Nếu user có role "app-admin" của client "my-api-service"
# → Audience Resolve tự động thêm "my-api-service" vào aud
{
  "aud": ["my-frontend-app", "my-api-service"],
  "resource_access": {
    "my-api-service": {
      "roles": ["app-admin"]
    }
  }
}</code></pre>

<h2 id="6-confidential-client-credentials"><strong>6. 機密クライアント認証情報</strong></h2>

<h3 id="client-id-secret"><strong>6.1 クライアント ID とシークレット</strong></h3>
<p>最も単純な方法 — クライアントはリクエストで ID とシークレットを送信します。</p>

<pre><code># Cách 1: Form parameter
POST /token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
client_id=my-client&
client_secret=my-secret

# Cách 2: HTTP Basic Authentication
POST /token
Content-Type: application/x-www-form-urlencoded
Authorization: Basic base64(client_id:client_secret)

grant_type=client_credentials</code></pre>

<h3 id="signed-jwt"><strong>6.2 署名付き JWT (private_key_jwt)</strong></h3>
<p>クライアントは秘密鍵を使用して JWT を作成および署名し、Keycloak に送信します。 Keycloakは登録された公開鍵/証明書を使用して検証します。</p>

<p><strong>Keycloakでの設定:</strong></p>
<ol>
<li><p>クライアント → タブ<strong>資格</strong> → <strong>クライアント認証子</strong>: <code>署名付き JWT</code></p></li>
<li><p>クライアント証明書または JWKS URL をアップロードする</p></li>
</ol>

<pre><code># Tạo key pair cho client
openssl genrsa -out client-private.pem 2048
openssl req -new -x509 -key client-private.pem -out client-cert.pem -days 365

# Upload client-cert.pem vào Keycloak client Credentials tab

# Token request với client_assertion
POST /realms/my-realm/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
client_id=my-client&
client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer&
client_assertion=eyJhbGciOiJSUzI1NiIs...</code></pre>

<p><strong>クライアント アサーション JWT 構造:</strong></p>
<pre><code>{
  "iss": "my-client",                    // Client ID
  "sub": "my-client",                    // Client ID
  "aud": "http://localhost:8080/realms/my-realm",  // Token endpoint
  "iat": 1711800000,
  "exp": 1711800060,                     // Short-lived (60s)
  "jti": "unique-jwt-id"                 // Unique ID
}</code></pre>

<h3 id="x509-mtls"><strong>6.3 X.509証明書/相互TLS</strong></h3>
<p>クライアントはクライアント TLS 証明書 (相互 TLS — mTLS) を使用して認証します。これが最も安全な方法です。</p>

<p><strong>構成：</strong></p>
<ol>
<li><p>クライアント → タブ<strong>資格</strong> → <strong>クライアント認証子</strong>: <code>X.509証明書</code></p></li>
<li><p>入力<strong>件名DN</strong>または証明書照合のパターン</p></li>
<li><p>Keycloakサーバーを構成してmTLSエンドポイントを有効にする</p></li>
</ol>

<pre><code># Keycloak mTLS configuration (quarkus)
# conf/keycloak.conf hoặc environment variables
KC_HTTPS_CLIENT_AUTH=request
KC_HTTPS_KEY_STORE_FILE=/opt/keycloak/certs/server-keystore.p12
KC_HTTPS_TRUST_STORE_FILE=/opt/keycloak/certs/truststore.p12

# Client gọi token endpoint với client certificate
curl -s -X POST \
  "https://localhost:8443/realms/my-realm/protocol/openid-connect/token" \
  --cert client-cert.pem \
  --key client-private.pem \
  -d "grant_type=client_credentials" \
  -d "client_id=my-mtls-client"</code></pre>

<p><strong>mTLS と証明書にバインドされたトークンを組み合わせます。</strong></p>
<pre><code># Access token chứa certificate thumbprint
{
  "cnf": {
    "x5t#S256": "sha256-thumbprint-of-client-certificate"
  }
}

# Resource server verify:
# 1. Client gửi request với TLS client certificate
# 2. Resource server extract certificate thumbprint
# 3. So sánh với cnf.x5t#S256 trong access token
# → Nếu match → token hợp lệ + bound to correct client</code></pre>

<h2 id="7-token-exchange"><strong>7. 標準トークン交換 (RFC 8693)</strong></h2>

<p>トークン交換によりサービスが可能になります<strong>トークンを交換する</strong>異なる権限または対象者を持つ新しいトークンを受け取るため。</p>

<h3 id="token-exchange-use-cases"><strong>7.1 使用例</strong></h3>
<ul>
<li><p><strong>代表団</strong>: サービス A は、ユーザーの「代理」としてサービス B を呼び出したいと考えています。アクセス トークンを交換して、オーディエンス = サービス B と新しいトークンを取得します。</p></li>
<li><p><strong>なりすまし</strong>: 管理者は別のユーザーのように行動したいと考えています</p></li>
<li><p><strong>トークンの種類の変換</strong>: SAML アサーションのアクセス トークンを交換します (またはその逆)。</p></li>
</ul>

<h3 id="enable-token-exchange"><strong>7.2 トークン交換の構成</strong></h3>
<p>Keycloakのトークン交換は<strong>プレビュー機能</strong>— 有効にする必要があります:</p>

<pre><code># Bật feature
bin/kc.sh start-dev --features=token-exchange

# Docker
docker run -e KC_FEATURES=token-exchange quay.io/keycloak/keycloak:26.2.4 start-dev</code></pre>

<p><strong>権限を構成します。</strong></p>
<ol>
<li><p>開ける<strong>ターゲットクライアント</strong>(トークンを交換したいクライアント) → タブ<strong>権限</strong></p></li>
<li><p>オンにする<strong>許可が有効です</strong></p></li>
<li><p>クリック<strong>トークン交換</strong>許可 → ソースクライアント交換を許可するポリシーを設定</p></li>
</ol>

<pre><code># Token Exchange request
POST /realms/my-realm/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=urn:ietf:params:oauth:grant-type:token-exchange&
subject_token=USER_ACCESS_TOKEN&
subject_token_type=urn:ietf:params:oauth:token-type:access_token&
requested_token_type=urn:ietf:params:oauth:token-type:access_token&
audience=target-service&
client_id=source-service&
client_secret=SOURCE_SECRET

# Response — token mới cho target-service
{
  "access_token": "new-token-for-target-service",
  "token_type": "Bearer",
  "expires_in": 300,
  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token"
}</code></pre>

<h3 id="delegation-vs-impersonation"><strong>7.3 委任と偽装</strong></h3>
<table>
<thead>
<tr><th>モード</th><th>説明する</th><th>トークンの要求</th></tr>
</thead>
<tbody>
<tr><td><strong>代表団</strong></td><td>サービス B は、サービス A がユーザーに代わって動作していることを認識しています</td><td><code>act.sub</code>= サービス A、<code>サブ</code>= ユーザー</td></tr>
<tr><td><strong>なりすまし</strong></td><td>サービス B は知りません - トークンはそれを直接要求したユーザーと同一です</td><td><code>サブ</code>= ユーザー (なし<code>活動。活動</code>)</td></tr>
</tbody>
</table>

<h2 id="8-jwt-authorization-grant"><strong>8. JWT 認可付与 (RFC 7523)</strong></h2>

<p>クライアントが使用できるようにします<strong>JWT アサーションは信頼できる発行者によって発行されます</strong>ユーザーの介入なしでアクセス トークンを取得します。</p>

<h3 id="jwt-grant-flow"><strong>8.1 フロー</strong></h3>
<pre><code># External issuer (ví dụ: Azure AD, Google) cấp JWT cho client
# Client gửi JWT đến Keycloak để exchange lấy Keycloak access token

POST /realms/my-realm/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&
assertion=eyJhbGciOiJSUzI1NiIs...&  # JWT from external issuer
client_id=my-client&
client_secret=my-secret&
scope=openid</code></pre>

<h3 id="cau-hinh-jwt-grant"><strong>8.2 JWT 許可の構成</strong></h3>
<ol>
<li><p>レルム設定 →<strong>キー</strong>→ 外部発行者の署名キーを追加</p></li>
<li><p>または構成<strong>アイデンティティプロバイダー</strong>外部発行者向け</p></li>
<li><p>クライアントが持っている必要がある<strong>サービスアカウントの役割</strong>有効になりました。有効</p></li>
</ol>

<h2 id="9-cau-hinh-cho-mcp-servers"><strong>9. MCPサーバー用のKeycloakの構成</strong></h2>

<p>Model Context Protocol (MCP) サーバーは、OAuth 2.0 を使用してクライアントを認証します。 Keycloakが役割を果たす可能性がある<strong>認可サーバー</strong>MCP エコシステム向け。</p>

<h3 id="mcp-oauth-flow"><strong>9.1 MCP OAuth 2.0 フロー</strong></h3>
<p>MCP 仕様では、サーバー間およびクライアント間の認証に OAuth 2.0 が必要です。</p>

<pre><code>┌──────────┐     ┌──────────┐     ┌──────────┐
│ MCP Host │     │ Keycloak │     │MCP Server│
│ (Client) │     │  (AuthZ) │     │(Resource)│
└────┬─────┘     └────┬─────┘     └────┬─────┘
     │                │                │
     │ 1. Request     │                │
     │    auth info    │                │
     │───────────────────────────────>│
     │ 2. Return      │                │
     │    auth metadata│                │
     │<──────────────────────────────│
     │                │                │
     │ 3. Authorization Code Flow     │
     │    (hoặc Client Credentials)   │
     │───────────────>│                │
     │ 4. Tokens      │                │
     │<───────────────│                │
     │                │                │
     │ 5. API call with access token  │
     │───────────────────────────────>│
     │ 6. MCP Server validates token  │
     │    via Keycloak JWKS/Introspect│
     │<──────────────────────────────│</code></pre>

<h3 id="mcp-client-config"><strong>9.2 MCP ホストのクライアントの作成</strong></h3>
<pre><code># MCP Host client — ứng dụng AI/LLM kết nối tới MCP servers
Client ID: mcp-host-app
Client type: OpenID Connect
Client authentication: ON (confidential)

Capability Config:
  Standard flow: ON          # Cho interactive MCP sessions
  Service accounts roles: ON # Cho automated MCP operations

Access Settings:
  Valid redirect URIs: http://localhost:3001/callback
  Web origins: http://localhost:3001

Advanced:
  PKCE Code Challenge Method: S256
  Access Token Lifespan: 300   # 5 phút</code></pre>

<h3 id="mcp-server-client"><strong>9.3 MCP サーバー (リソース サーバー) のクライアントの作成</strong></h3>
<pre><code># MCP Server client — validate incoming tokens
Client ID: mcp-tool-server
Client type: OpenID Connect
Client authentication: ON (confidential)

Capability Config:
  Standard flow: OFF
  Service accounts roles: ON    # Nếu MCP server cần gọi Keycloak APIs

# MCP Server cấu hình JWT validation
# Sử dụng Keycloak JWKS endpoint để verify access tokens
JWKS_URI: http://localhost:8080/realms/my-realm/protocol/openid-connect/certs
ISSUER: http://localhost:8080/realms/my-realm</code></pre>

<h3 id="mcp-scopes"><strong>9.4 MCP 操作のスコープの作成</strong></h3>
<pre><code># Tạo Client Scopes cho MCP permissions
Client Scope: mcp:tools:read
  Type: Optional
  Description: Read access to MCP tools
  Protocol Mapper: Hardcoded claim
    Token Claim Name: mcp_permissions
    Claim Value: ["tools:read"]

Client Scope: mcp:tools:execute
  Type: Optional
  Description: Execute MCP tools
  Protocol Mapper: Hardcoded claim
    Token Claim Name: mcp_permissions
    Claim Value: ["tools:execute"]

Client Scope: mcp:resources:read
  Type: Optional
  Description: Read MCP resources
  Protocol Mapper: Hardcoded claim
    Token Claim Name: mcp_permissions
    Claim Value: ["resources:read"]

# Gán scopes cho MCP Host client
Client: mcp-host-app
  Default scopes: mcp:tools:read, mcp:resources:read
  Optional scopes: mcp:tools:execute</code></pre>

<h3 id="mcp-audience"><strong>9.5 MCP のオーディエンス マッパー</strong></h3>
<pre><code># MCP Host client cần access token với audience = MCP Server
Client: mcp-host-app → Client scopes → Dedicated scope → Add mapper
  Mapper Type: Audience
  Name: mcp-server-audience
  Included Client Audience: mcp-tool-server
  Add to access token: ON

# Access token kết quả:
{
  "iss": "http://localhost:8080/realms/my-realm",
  "sub": "user-or-service-account-id",
  "aud": ["mcp-host-app", "mcp-tool-server"],
  "azp": "mcp-host-app",
  "scope": "openid mcp:tools:read mcp:resources:read",
  "mcp_permissions": ["tools:read", "resources:read"]
}</code></pre>

<h3 id="mcp-token-exchange"><strong>9.6 MCP マルチサーバーのトークン交換</strong></h3>
<p>MCP ホストが多くの異なる MCP サーバーを呼び出す必要がある場合は、トークン交換を使用して各サーバーのトークンを取得します。</p>

<pre><code># MCP Host có access token cho mcp-tool-server-1
# Cần access mcp-tool-server-2

POST /realms/my-realm/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=urn:ietf:params:oauth:grant-type:token-exchange&
subject_token=CURRENT_ACCESS_TOKEN&
subject_token_type=urn:ietf:params:oauth:token-type:access_token&
audience=mcp-tool-server-2&
client_id=mcp-host-app&
client_secret=HOST_SECRET&
scope=mcp:tools:execute</code></pre>

<h3 id="mcp-security-policy"><strong>9.7 MCP のクライアント ポリシー</strong></h3>
<pre><code># Enforce security cho tất cả MCP clients
Profile: mcp-security-profile
  Executors:
    - PKCE Enforcer (S256)
    - Confidential Client Enforcer
    - Secure Signing Algorithm (RS256, ES256)
    - Reject Implicit Grant
    - Reject Resource Owner Password Credentials Grant
    - Holder-of-Key Enforcer  # DPoP cho high-security MCP operations

Policy: mcp-clients-policy
  Conditions:
    - Client Scopes: mcp:tools:read   # Áp dụng cho clients request MCP scopes
  Profiles:
    - mcp-security-profile</code></pre>

<h2 id="10-thuc-hanh"><strong>10. 練習問題</strong></h2>

<h3 id="lab-1"><strong>ラボ 1: クライアント ポリシー — ベースライン セキュリティ</strong></h3>
<ol>
<li><p>クライアントプロファイルの作成<code>ベースラインセキュリティ</code>エグゼキュータを使用: 暗黙的な許可の拒否、PKCE エンフォーサ、安全な署名アルゴリズム</p></li>
<li><p>クライアントポリシーの作成<code>ベースラインを強制する</code>条件付き<code>あらゆるクライアント</code></p></li>
<li><p>テスト: 新しいクライアントを作成し、PKCE なしでトークンを要求しようとします → 拒否されました</p></li>
<li><p>テスト: 暗黙的なフローをオンにしてみてください → 拒否されました</p></li>
</ol>

<h3 id="lab-2"><strong>ラボ 2: FAPI 2.0 への準拠</strong></h3>
<ol>
<li><p>組み込みの FAPI 2.0 セキュリティ プロファイルを使用してクライアント プロファイルを作成する</p></li>
<li><p>ロールを持つクライアントにのみ適用されるポリシーを作成する<code>ファピクライアント</code></p></li>
<li><p>署名付き JWT 認証を使用して機密クライアントを作成する</p></li>
<li><p>PAR + PKCE + DPoP を使用して完全な認証フローをテストする</p></li>
</ol>

<h3 id="lab-3"><strong>ラボ 3: クライアント シークレットのローテーション</strong></h3>
<ol>
<li><p>Secret Rotation executor を構成します (有効期限: 60 秒、猶予期間: テスト用に 30 秒)</p></li>
<li><p>機密クライアントの作成 → シークレットAを記録</p></li>
<li><p>60秒待つ → シークレットを再生成 → シークレットBを記録</p></li>
<li><p>検証: シークレット A は猶予期間 (30 秒) の間アクティブのままです。</p></li>
<li><p>検証: 猶予期間の後、シークレット B のみがアクティブになります</p></li>
</ol>

<h3 id="lab-4"><strong>ラボ 4: サービス アカウント + トークン交換</strong></h3>
<ol>
<li><p>3 つのクライアントを作成します。<code>フロントエンドアプリ</code>（公共）、<code>APIゲートウェイ</code>(機密 + サービス アカウント)、<code>決済サービス</code>（機密）</p></li>
<li><p>ユーザーは次の方法でログインします<code>フロントエンドアプリ</code>→ アクセストークンを受け取る</p></li>
<li><p><code>APIゲートウェイ</code>フロントエンドからトークンを受け取り、新しいトークンと交換します<code>決済サービス</code></p></li>
<li><p>確認: 新しいトークンが利用可能です<code>aud: 支払いサービス</code>そして<code>act.sub: API ゲートウェイ</code></p></li>
</ol>

<h3 id="lab-5"><strong>ラボ 5: MCP サーバーの構成</strong></h3>
<ol>
<li><p>レルムの作成<code>mcp-デモ</code></p></li>
<li><p>クライアントを作成します。<code>mcp-ホスト</code>（機密）、<code>mcp-ツール-サーバー</code>（機密）</p></li>
<li><p>クライアント スコープを作成します。<code>mcp:ツール:読み取り</code>, <code>mcp:ツール:実行</code></p></li>
<li><p>オーディエンス マッパーを構成する<code>mcp-ホスト</code>→ 視聴者 =<code>mcp-ツール-サーバー</code></p></li>
<li><p>クライアント認証情報フローでトークンを取得する</p></li>
<li><p>トークンの内容を確認します: 対象者、スコープ、権限</p></li>
<li><p>MCP サーバーのシミュレートは、JWKS エンドポイントを使用してトークンを検証します</p></li>
</ol>

<h3 id="lab-6"><strong>ラボ 6: 署名付き JWT クライアント認証</strong></h3>
<ol>
<li><p>RSA キー ペアの生成 (<code>オープンSSL</code>)</p></li>
<li><p>オーセンティケータを使用して機密クライアントを作成 =<code>署名付き JWT</code></p></li>
<li><p>証明書をKeycloakにアップロードする</p></li>
<li><p>client_assertion JWT を作成して署名するスクリプトを作成します。</p></li>
<li><p>トークンをリクエストする<code>クライアントアサーション</code>の代わりに<code>クライアントシークレット</code></p></li>
<li><p>受け取ったトークンを確認する</p></li>
</ol>
