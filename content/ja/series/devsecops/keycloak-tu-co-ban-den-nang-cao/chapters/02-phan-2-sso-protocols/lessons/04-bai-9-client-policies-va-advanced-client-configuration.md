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
      <tspan x="60" dy="0">レッスン 9: クライアント ポリシーとアドバンスト クライアント__HTMLTAG_53___
      <tspan x="60" dy="42">構成_</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">_Keycloak の基本から高度なもの__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: SSO プロトコル - OpenID Connect と SAML</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-client-policies"><strong>1.クライアント ポリシー_</strong></h2>

<p>クライアント ポリシーは、__HTMLTAG_72___セキュリティ要件をクライアントに自動的に強制</strong>できるようにするフレームワークです。各クライアントの構成を手動で確認する代わりに、Keycloak が自動的に検証して強制するようにポリシーを定義します。</p>

<h3 id="tai-sao-can-client-policies"><strong>1.1 クライアント ポリシーが必要な理由</strong></h3>
<ul>
<li><p><strong>一貫性</strong>: すべてのクライアントが同じセキュリティ標準に準拠していることを確認_</p></li>
<li><p><strong>自動化</strong>: 非準拠リクエストを自動的に拒否</p></li>
<li><p><strong>コンプライアンス</strong>: 業界標準の強制 (FAPI、PSD2、オープン バンキング)</p></li>
<li><p><strong>ガバナンス</strong>: クライアントの登録と構成を制御</p></li>
</ul>

<h3 id="architecture"><strong>1.2 アーキテクチャ: プロファイル、条件、エグゼキュータ</strong></h3>
<p>クライアント ポリシーには 3 つの主要コンポーネントが含まれます:</p>

___プレコード_0___<table>
<thead>
<tr><th>要素_</th><th>説明_</th><th>例_</th></tr>
</thead>
<tbody>
<tr><td><strong>プロフィール</strong></td><td>エグゼキューターのセット — 「 「何」_</td><td><code>fapi-2-security-profile</code></td></tr>
<tr><td><strong>条件</strong></td><td>条件は影響を受けるクライアントを決定します - 「誰に対して強制する」</td><td>クライアントには役割があります<code>fapi-client</code></td></tr>
<tr><td><strong>実行者</strong></td><td>_特定の施行ロジック — 「施行方法」_</td><td>必須 PKCE S256</td></tr>
</tbody>
</table>

<h3 id="tao-client-profile"><strong>1.3 クライアント プロファイルの作成</strong></h3>
<ol>
<li><p>__HTMLTAG_166___レルム設定</strong>→__HTMLTAG_168___クライアントポリシー</strong>→タブ__HTMLTAG_170___プロファイル</strong></p></li>
<li><p>クリック__HTMLTAG_176___クライアントプロフィールを作成</strong></p></li>
<li><p>__HTMLTAG_182___名前</strong>と__HTMLTAG_184___説明___HTMLTAG_185__HTMLTAG_186__HTMLTAG_187___を入力してください
<li><p><strong>保存</strong>をクリック→プロフィールを開く→クリック__HTMLTAG_192___実行者の追加</strong></p></li>
</ol>

<h3 id="executors"><strong>1.4 利用可能なエグゼキュータ</strong></h3><table>
<thead>
<tr><th>実行者</th><th>説明_</th><th>パラメータ_</th></tr>
</thead>
<tbody>
<tr><td><strong>安全なクライアント認証子_</strong></td><td>特定の認証方法が必要_</td><td>許可された認証子: client-secret、client-jwt、client-x509</td></tr>
<tr><td><strong>PKCE エンフォーサ</strong></td><td>必須 PKCE_</td><td>拡張: オン (クライアントが見つからない場合に自動的に追加)</td></tr>
<tr><td><strong>安全な署名アルゴリズム_</strong></td><td>_安全なアルゴリズムのみが許可されます__HTMLTAG_239___<td>デフォルト: RS256、ES256、PS256</td></tr>
<tr><td><strong>署名付き JWT の安全な署名アルゴリズム</strong></td><td>クライアント JWT 認証のアルゴリズム_</td><td>PS256、ES256 (許可されない許可) RS256)</td></tr>
<tr><td><strong>Holder-of-Key Enforcer_</strong></td><td>_必須トークン バインディング (mTLS または DPoP)_</td><td>自動構成: ON</td></tr>
<tr><td><strong>DPoP Proof Verifier</strong></td><td>トークン要求での DPoP 証明が必要</td><td></td></tr>
<tr><td><strong>機密クライアント執行者</strong></td><td>機密クライアントのみ</td><td></td></tr>
<tr><td><strong>同意が必要</strong></td><td>同意が必要な画面_</td><td></td></tr>
<tr><td><strong>フルスコープ無効</strong></td><td>フルスコープマッピング無効_</td><td></td></tr>
<tr><td><strong>暗黙的な許可の拒否</strong></td><td>暗黙的なフローの禁止</td><td></td></tr>
<tr><td><strong>リソース所有者のパスワード認証情報の付与を拒否</strong></td><td>許可されません ROPC</td><td></td></tr>
<tr><td><strong>安全なリダイレクト URI エンフォーサ</strong></td><td>リダイレクト URI を検証_</td><td>HTTPS が必要、ワイルドカードなし</td></tr>
<tr><td><strong>安全なリクエストオブジェクト</strong></td><td>必須のJAR (JWTで保護された認可リクエスト)</td><td></td></tr>
<tr><td><strong>安全な応答タイプ</strong></td><td>C安全な応答タイプを許可してください_</td><td>許可: コード (トークンなし、id_token)</td></tr>
<tr><td><strong>セキュアセッションエンフォーサ_</strong></td><td>セッション設定の強制_</td><td></td></tr>
</tbody>
</table><h3 id="tao-condition"><strong>1.5 利用可能な条件__HTMLTAG_367___</h3>

<table>
<thead>
<tr><th>条件_</th><th>説明_</th><th>例_</th></tr>
</thead>
<tbody>
<tr><td><strong>任意のクライアント</strong></td><td>すべてのクライアントに適用_</td><td>グローバル セキュリティ ポリシー_</td></tr>
<tr><td><strong>クライアント アクセス タイプ</strong></td><td>クライアント タイプ (パブリック/機密) に基づく</td><td>すべてのパブリック クライアントに PKCE を適用</td></tr>
<tr><td><strong>クライアントの役割</strong></td><td>クライアントには特定の役割がある_</td><td>クライアントには役割がある__HTMLTAG_409___fapi準拠</code></td></tr>
<tr><td><strong>クライアントスコープ</strong></td><td>クライアントが特定のスコープを使用_</td><td>_クライアントリクエストスコープ__HTMLTAG_421___payment</code></td></tr>
<tr><td><strong>クライアント更新ソースグループ</strong></td><td>ソース作成/更新クライアントに基づく</td><td>動的登録によって作成されたクライアント</td></tr>
<tr><td><strong>クライアント更新コンテキスト</strong></td><td>クライアント更新時のコンテキスト</td><td>認可リクエスト、トークンリクエスト</td></tr>
</tbody>
</table>

<h3 id="tao-policy"><strong>1.6 クライアント ポリシーの作成</strong></h3>
<ol>
<li><p>__HTMLTAG_454___レルム設定</strong>→__HTMLTAG_456___クライアントポリシー</strong>→タブ__HTMLTAG_458___ポリシー</strong></p></li>
<li><p>クリック__HTMLTAG_464___クライアント ポリシーの作成</strong></p></li>
<li><p>__HTMLTAG_470___名前</strong>と__HTMLTAG_472___説明</strong></p></li>を入力してください
<li><p>__HTMLTAG_478___条件を追加</strong> (影響を受けるクライアントを特定)</p></li>
<li><p>追加__HTMLTAG_484___クライアント プロファイル</strong> (どのプロファイルが適用されるか)</p></li>
</ol>

___プレコード_1___

<h3 id="vi-du-policy-thuc-te"><strong>1.7 実際のポリシーの例</strong></h3>

<p><strong>_ポリシー 1: すべてのクライアントに対するベースライン セキュリティ</strong></p>
___プレコード_2___

<p><strong>ポリシー 2: 金融 API の高セキュリティ</strong></p>
___プレコード_3___

<h2 id="2-fapi-security-profile"><strong>_2. FAPI 2.0 セキュリティ プロファイル</strong></h2><p>FAPI (金融グレード API) は、OpenID Foundation によって開発された高度なセキュリティ標準のセットであり、__HTMLTAG_506___Open Banking</strong>、__HTMLTAG_508___Payment Services Directive 2 (PSD2)</strong>、および金融アプリケーションで広く使用されています。

<h3 id="fapi-2-baseline"><strong>_2.1 FAPI 2.0 ベースライン プロファイル</strong></h3>
<p>Keycloak は FAPI 2.0 の組み込みプロファイルを提供します:</p>

<table>
<thead>
<tr><th>_リクエスト</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>認可コード フローのみ</td><td>暗黙的は許可されません、ROPC_</td></tr>
<tr><td>PKCE (S256)</td><td>すべてのクライアントに必須_</td></tr>
<tr><td>機密クライアント</td><td>クライアント認証が必要</td></tr>
<tr><td>安全な署名アルゴリズム_</td><td>PS256、ES256 (RS256 なし)_</td></tr>
<tr><td>_送信者制限トークン</td><td>DPoP または mTLS トークン バインディング</td></tr>
<tr><td>リダイレクト URI の完全一致_</td><td>ワイルドカードなし_</td></tr>
<tr><td>HTTPS が必要</td><td>すべてのエンドポイント_</td></tr>
</tbody>
</table>

<h3 id="fapi-2-advanced"><strong>_2.2 FAPI 2.0 高度なプロファイル (メッセージ署名)</strong></h3>
<p>ベースラインに加えて、詳細プロファイルでは次のものが追加されます:</p>
<ul>
<li><p><strong>PAR (プッシュされた認可リクエスト)</strong> — RFC 9126: リダイレクトする前にバックチャネル経由で認可リクエストを送信_</p></li>
<li><p><strong>JAR (JWT で保護された認可リクエスト)</strong> — RFC 9101: JWT で署名された認可パラメータ_</p></li>
<li><p><strong>JARM (JWT で保護された承認応答モード)</strong>: JWT で署名された承認応答_</p></li>
</ul>

___プレコード_4___<h3 id="enable-fapi-2"><strong>2.3 KeycloakでFAPI 2.0を有効にする</strong></h3>
<ol>
<li><p>__HTMLTAG_604___レルム設定</strong>→__HTMLTAG_606___クライアントポリシー</strong>→タブ__HTMLTAG_608___プロファイル</strong></p></li>
<li><p>Keycloak が利用可能__HTMLTAG_614___グローバル プロファイル</strong>:</p>
<ul>
<li><code>fapi-2-セキュリティ プロファイル</code></li>
<li><code>fapi-2-メッセージ署名プロファイル</code></li>
</ul>
</li>
<li><p>_対応するプロファイルを使用してポリシーを作成</p></li>
<li><p>コンプライアンスが必要なクライアントを選択するための条件の割り当て</p></li>
</ol>

___プレコード_5___

<h2 id="3-client-secret-rotation"><strong>3.クライアント シークレットのローテーション</strong></h2>

<p>クライアント シークレットのローテーションにより、クライアント シークレットの変更が可能__HTMLTAG_642___ダウンタイムが発生しません</strong> — 移行期間中、古いシークレットはアクティブのままです。</p>

<h3 id="cau-hinh-secret-rotation"><strong>3.1 クライアント シークレット ローテーションの構成</strong></h3>
<p>__HTMLTAG_650___クライアント ポリシー</strong> とエグゼキュータ<strong>シークレット ローテーション</strong>:</p>

___プレコード_6___

<p><strong>仕組み:</strong></p>
___プレコード_7___

<h3 id="trien-khai-secret-rotation"><strong>3.2 シークレットローテーションの実装</strong></h3>
___プレコード_8___

<h2 id="4-service-accounts"><strong>4.サービス アカウント</strong></h2>

<p>__HTMLTAG_668___サービスアカウントロール</strong>が機密クライアントに対して有効になっている場合、Keycloakはそのクライアント用に特別な__HTMLTAG_670___サービスアカウントユーザー</strong>を作成します。このユーザーは、マシン間の操作においてクライアントを表します。</p>

<h3 id="service-account-user"><strong>4.1 サービス アカウント ユーザー</strong></h3>
___プレコード_9___

<h3 id="gan-roles"><strong>4.2 サービス アカウントへの役割の割り当て</strong></h3>
<ol>
<li><p>クライアント → タブを開く <strong>サービス アカウントの役割</strong></p></li>
<li><p>_クリック__HTMLTAG_690___役割の割り当て</strong></p></li>
<li><p>レルム ロールを選択するか、クライアントでフィルタリングしてクライアント ロールを割り当てます</p></li>
</ol>

___プレコード_10___<h3 id="service-account-best-practices"><strong>4.3 サービス アカウントのベスト プラクティス</strong></h3>
<ul>
<li><p><strong>最低権限</strong>: 各サービスに必要なロールのみを割り当てます</p></li>
<li><p><strong>個別のクライアント</strong>: マイクロサービスごとに個別のクライアントを作成し、共有しない</p></li>
<li><p><strong>監査</strong>: イベント ログを有効にしてサービス アカウントのアクティビティを追跡_</p></li>
<li><p><strong>トークンの有効期間が短い</strong>: サービス アカウントのアクセス トークンは短くする必要があります (1 ～ 5 分)</p></li>
<li><p><strong>認証情報のローテーション</strong>: クライアント シークレット ローテーションまたは証明書ベースの認証を使用</p></li>
</ul>

<h2 id="5-audience-support"><strong>5.視聴者サポート_</strong></h2>

<p>Audience (<code>aud</code> クレーム) は、どの <strong>リソース サーバー</strong> アクセス トークンが使用されるかを決定します。これは、トークンが望ましくないサービスで使用されるのを防ぐための重要なセキュリティ メカニズムです。</p>

<h3 id="audience-problem"><strong>5.1 問題</strong></h3>
___プレコード_11___

<h3 id="audience-mapper"><strong>5.2 ソリューション: オーディエンス プロトコル マッパー</strong></h3>
<p>__HTMLTAG_754___オーディエンス マッパー</strong> をクライアントまたはクライアント スコープに追加して、リソース サーバーを <code>aud</code>:</p> に追加します。

___プレコード_12___

<h3 id="audience-resolve"><strong>5.3 オーディエンス解決マッパー</strong></h3>
<p>Keycloak には <strong>Audience Resolve</strong> マッパーが組み込まれています (デフォルトのスコープ <code>roles</code>) - ユーザーがクライアント ロールを持つクライアントに対して <code>aud</code> を自動的に追加します:</p>

___プレコード_13___

<h2 id="6-confidential-client-credentials"><strong>_6.機密クライアント資格情報</strong></h2>

<h3 id="client-id-secret"><strong>6.1 クライアント ID とシークレット</strong></h3>
<p>最も単純な方法 — クライアントはリクエストで ID とシークレットを送信します:</p>

___プレコード_14___

<h3 id="signed-jwt"><strong>_6.2 署名付き JWT (private_key_jwt)</strong></h3>
<p>クライアントは秘密鍵を使用して JWT を作成して署名し、Keycloak に送信します。 Keycloak は登録された公開鍵/証明書を使用して検証します。</p>

<p><strong>Keycloak の設定:</strong></p>
<ol>
<li><p>クライアント → タブ <strong>認証情報</strong> → <strong>クライアント認証</strong>: <code>署名付き JWT</code></p></li>
<li><p>クライアント証明書または JWKS URL をアップロード</p></li>
</ol>

___プレコード_15___

<p><strong>クライアント アサーション JWT 構造:</strong></p>
___プレコード_16___<h3 id="x509-mtls"><strong>_6.3 X.509 証明書 / 相互 TLS</strong></h3>
<p>クライアントはクライアント TLS 証明書 (相互 TLS — mTLS) を使用して認証します。これは最も安全な方法です。</p>

<p><strong>構成:</strong></p>
<ol>
<li><p>クライアント → タブ <strong>資格情報</strong> → <strong>クライアント認証</strong>: <code>X.509 証明書</code></p></li>
<li><p>__HTMLTAG_834___件名DN</strong>または証明書照合のパターンを入力</p></li>
<li><p>_KeycloakサーバーのmTLSエンドポイントの有効化</p></li>
</ol>

___プレコード_17___

<p><strong>mTLS と証明書バインドされたトークンの組み合わせ:</strong></p>
___プレコード_18___

<h2 id="7-token-exchange"><strong>7。標準トークン交換 (RFC 8693)</strong></h2>

<p>Token Exchange を使用すると、サービス <strong>exchange token</strong> が、異なる権限または対象ユーザーを持つ新しいトークンを受け取ることができます。</p>

<h3 id="token-exchange-use-cases"><strong>7.1 使用例</strong></h3>
<ul>
<li><p><strong>委任</strong>: サービス A はユーザーの「代理」としてサービス B を呼び出したいと考えています — アクセス トークンを交換して対象者と新しいトークンを取得します = サービス B</p></li>
<li><p><strong>なりすまし</strong>: 管理者は別のユーザーとして行動したい</p></li>
<li><p><strong>トークン タイプ変換</strong>: SAML アサーション用のアクセス トークンの交換 (またはその逆)</p></li>
</ul>

<h3 id="enable-token-exchange"><strong>_7.2 トークン交換構成</strong></h3>
<p>Keycloak のトークン交換は__HTMLTAG_884___プレビュー機能</strong> — 有効にする必要があります:</p>

___プレコード_19___

<p><strong>権限の構成:</strong></p>
<ol>
<li><p>__HTMLTAG_894___ターゲット クライアント</strong> (トークンを交換するクライアント) → タブ <strong>権限</strong></p></li>
<li><p>有効__HTMLTAG_902___権限有効</strong></p></li>
<li><p><strong>トークン交換</strong> 権限をクリック → ソース クライアント交換を許可するポリシーを設定</p></li>
</ol>

___プレコード_20___<h3 id="delegation-vs-impersonation"><strong>7.3 委任と偽装</strong></h3>
<table>
<thead>
<tr><th>_モード_</th><th>説明_</th><th>トークン要求_</th></tr>
</thead>
<tbody>
<tr><td><strong>委任</strong></td><td>サービス B は、サービス A がユーザーに代わって動作していることを知っています</td><td><code>act.sub</code> = サービス A、 <code>sub</code> = ユーザー</td></tr>
<tr><td><strong>偽装</strong></td><td>サービス B は知りません — トークンは直接ユーザー リクエストと同じ</td><td><code>sub</code> = ユーザー (いいえ) <code>行為</code>)</td></tr>
</tbody>
</table>

<h2 id="8-jwt-authorization-grant"><strong>8. JWT 認可付与 (RFC 7523)_</strong></h2>

<p>Cho phép client sử dụng một <strong>JWT アサーション được cấp bởi Trusted issuer</strong> để lấy mà không cần user interaction.</p>

<h3 id="jwt-grant-flow"><strong>8.1 フロー</strong></h3>
___プレコード_21___

<h3 id="cau-hinh-jwt-grant"><strong>_8.2 JWT 付与の構成</strong></h3>
<ol>
<li><p>_レルム設定 → <strong>キー</strong> → 外部発行者の署名キーを追加</p></li>
<li><p>または、__HTMLTAG_984___アイデンティティ プロバイダ</strong>を外部発行者用に構成_</p></li>
<li><p>_クライアントには__HTMLTAG_990___サービス アカウントの役割</strong>が有効になっている必要があります</p></li>
</ol>

<h2 id="9-cau-hinh-cho-mcp-servers"><strong>9. MCP サーバーの Keycloak の構成</strong></h2>

<p>Model Context Protocol (MCP) サーバーは、OAuth 2.0 を使用してクライアントを認証します。 Keycloak は、MCP エコシステムの <strong>認可サーバー</strong> として機能できます。</p>

<h3 id="mcp-oauth-flow"><strong>9.1 MCP OAuth 2.0 フロー</strong></h3>
<p>MCP 仕様では、サーバー間およびクライアント間の認証に OAuth 2.0 が必要です:</p>

___プレコード_22___

<h3 id="mcp-client-config"><strong>9.2 MCP ホストのクライアントの作成</strong></h3>
___プレコード_23___

<h3 id="mcp-server-client"><strong>9.3 MCP サーバー (リソース サーバー) のクライアントの作成</strong></h3>
___プレコード_24___

<h3 id="mcp-scopes"><strong>9.4 MCP 操作のスコープの作成</strong></h3>
___プレコード_25___

<h3 id="mcp-audience"><strong>_9.5 MCP のオーディエンス マッパー</strong></h3>
___プレコード_26___

<h3 id="mcp-token-exchange"><strong>9.6 MCP マルチサーバーのトークン交換</strong></h3>
<p>MCP ホストが多くの異なる MCP サーバーを呼び出す必要がある場合は、トークン交換を使用して各サーバーのトークンを取得します:</p>

___プレコード_27___

<h3 id="mcp-security-policy"><strong>9.7 MCP のクライアント ポリシー</strong></h3>
___プレコード_28___<h2 id="10-thuc-hanh"><strong>10.演習_</strong></h2>

<h3 id="lab-1"><strong>ラボ 1: クライアント ポリシー — ベースライン セキュリティ</strong></h3>
<ol>
<li><p>実行者を使用してクライアント プロファイルを作成__HTMLTAG_1046___baseline-security</code>: 暗黙的付与の拒否、PKCE エンフォーサ、安全な署名アルゴリズム</p></li>
<li><p>条件付きでクライアント ポリシーを作成__HTMLTAG_1052___enforce-baseline</code>__HTMLTAG_1054___任意のクライアント</code></p></li>
<li><p>テスト: 新しいクライアントを作成し、PKCE なしでトークンを要求しようとした → 拒否</p></li>
<li><p>テスト: 暗黙的フローをオンにしてみる → 拒否</p></li>
</ol>

<h3 id="lab-2"><strong>ラボ 2: FAPI 2.0 への準拠</strong></h3>
<ol>
<li><p>組み込みの FAPI 2.0 セキュリティ プロファイルを使用してクライアント プロファイルを作成</p></li>
<li><p>ロール <code>fapi-client</code></p></li> のロールを持つクライアントにのみ適用されるポリシーを作成します
<li><p>署名付き JWT 認証を使用した機密クライアントの作成</p></li>
<li><p>PAR + PKCE + DPoP を使用して完全な認証フローをテスト</p></li>
</ol>

<h3 id="lab-3"><strong>ラボ 3: クライアント シークレットのローテーション</strong></h3>
<ol>
<li><p>シークレット ローテーション エグゼキュータの構成 (有効期限: 60 秒、猶予期間: テスト用 30 秒)</p></li>
<li><p>_機密クライアントを作成 → シークレットAを記録</p></li>
<li><p>60 秒待機 → シークレットを再生成 → シークレットを記録 B</p></li>
<li><p>検証: シークレット A は猶予期間中 (30 秒) もアクティブです</p></li>
<li><p>検証: 猶予期間の後、シークレット B のみがアクティブになります</p></li>
</ol>

<h3 id="lab-4"><strong>ラボ 4: サービス アカウント + トークン交換</strong></h3>
<ol>
<li><p>3 つのクライアントを作成します: <code>frontend-app</code> (パブリック)、__HTMLTAG_1126___api-gateway</code> (機密 + サービス アカウント)、__HTMLTAG_1128___payment-service</code> (機密)</p></li>
<li><p>ユーザーは__HTMLTAG_1134___frontend-app</code>経由でログイン → アクセストークンを受け取り</p></li>
<li><p><code>api-gateway</code> フロントエンドからトークンを受け取り、新しいトークンと交換__HTMLTAG_1142___payment-service</code></p></li>
<li><p>確認: 新しいトークンには <code>aud:payment-service</code> および <code>act.sub: api-gateway</code></p></li> が含まれています
</ol><h3 id="lab-5"><strong>ラボ 5: MCP サーバー構成</strong></h3>
<ol>
<li><p>レルムの作成__HTMLTAG_1162___mcp-demo</code></p></li>
<li><p>クライアントの作成: <code>mcp-host</code> (機密)、__HTMLTAG_1170___mcp-tools-server</code> (機密)</p></li>
<li><p>クライアント スコープの作成: <code>mcp:tools:read</code>、__HTMLTAG_1178___mcp:tools:execute</code></p></li>
<li><p>__HTMLTAG_1184___mcp-host</code> のオーディエンス マッパーを構成する →Audience = <code>mcp-tools-server_</code></p></li>
<li><p>クライアント資格情報フローに対するトークンの取得</p></li>
<li><p>トークンの内容の確認: 対象ユーザー、スコープ、権限</p></li>
<li><p>JWKS エンドポイントを使用して MCP サーバー検証トークンをシミュレート</p></li>
</ol>

<h3 id="lab-6"><strong>ラボ 6: 署名付き JWT クライアント認証</strong></h3>
<ol>
<li><p>RSA キー ペアの生成 (<code>openssl</code>)</p></li>
<li><p>認証子を使用して機密クライアントを作成 = <code>署名付き JWT</code></p></li>
<li><p>_Keycloak への証明書のアップロード</p></li>
<li><p>client_assertion JWT を作成して署名するスクリプトを作成</p></li>
<li><p>_<code>client_secret</code></p></li> の代わりに <code>client_assertion</code> を使用したリクエスト トークン
<li><p>トークンを受信したことを確認</p></li>
</ol>