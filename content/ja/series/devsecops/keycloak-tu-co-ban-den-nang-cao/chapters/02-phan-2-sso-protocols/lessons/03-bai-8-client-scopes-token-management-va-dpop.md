---
id: 019d8b30-b108-7001-c001-e0c5f8100108
title: 'レッスン 8: クライアント スコープ、トークン管理、および DPoP'
slug: bai-8-client-scopes-token-management-va-dpop
description: クライアント スコープ (デフォルトおよびオプション)、スコープ パラメーター、同意設定、レルムのデフォルト スコープ、スコープの評価、アクセス/ID/リフレッシュ トークンのライフサイクルの管理、セッションとトークンのタイムアウト、オフライン アクセス、トークン取り消し、軽量アクセス トークン、DPoP (RFC 9449)、およびトークン セキュリティのためのクライアント ポリシー。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 2: SSO プロトコル - OpenID Connect と SAML'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2449" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2449)"/>

  <!-- Decorations -->
  <g>
    <circle cx="817" cy="61" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1034" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="751" cy="255" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="968" cy="92" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="685" cy="189" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="191" x2="1100" y2="271" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="221" x2="1050" y2="291" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1013.5166604983954,178 1013.5166604983954,204 991,217 968.4833395016046,204 968.4833395016046,178 991,165" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: クライアント スコープ、トークン管理、</tspan>
      <tspan x="60" dy="42">DPoP</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">_Keycloak の基本から高度なもの__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: SSO プロトコル - OpenID Connect と SAML</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-client-scopes"><strong>1.クライアント スコープ</strong></h2>

<p>クライアント スコープは、複数のクライアント間で共有できるプロトコル マッパーとロールの<strong>グループ</strong>を管理するためのメカニズムです。個々のクライアントにマッパーを追加する代わりに、クライアント スコープを作成し、それを必要なクライアントに割り当てます。</p>

<h3 id="default-vs-optional"><strong>1.1 デフォルトのスコープとオプションのスコープ</strong></h3>
<table>
<thead>
<tr><th>タイプ_</th><th>説明_</th><th>トークンにクレームを追加する場合_</th></tr>
</thead>
<tbody>
<tr><td><strong>デフォルトのクライアントスコープ</strong></td><td>すべてのトークンリクエストに自動的に適用</td><td>常に — 明示的なリクエストは必要ありません_</td></tr>
<tr><td><strong>オプションのクライアントスコープ</strong></td><td>クライアントが__HTMLTAG_107___スコープ</code>パラメータ</td><td>で明示的にリクエストした場合にのみ適用されます。 <code>scope=scope_name</code></td></tr>
</tbody>
</table>

<p><strong>例:</strong></p>
___プレコード_0___

<h3 id="built-in-scopes"><strong>1.2 組み込みクライアント スコープ</strong></h3>
<p>Keycloak は、OIDC 標準に従って利用可能なクライアント スコープを提供します:</p><table>
<thead>
<tr><th>_範囲_</th><th>タイプ_</th><th>追加されたクレーム</th></tr>
</thead>
<tbody>
<tr><td><code>openid</code></td><td>_Default</td><td>sub、iss、aud、exp、iat、auth_time、nonce、acr、session_state</td></tr>
<tr><td><code>プロフィール</code></td><td>デフォルト</td><td>名前、家族名、指定名、優先ユーザー名、性別、生年月日、ロケール、更新日</td></tr>
<tr><td><code>email</code></td><td>_デフォルト</td><td>email、email_verified</td></tr>
<tr><td><code>roles</code></td><td>_デフォルト</td><td>_realm_access.roles、resource_access.{client}.roles</td></tr>
<tr><td><code>_ウェブオリジン_</code></td><td>_デフォルト_</td><td>許可されたオリジン (CORS)</td></tr>
<tr><td><code>_acr</code></td><td>_デフォルト</td><td>acr (認証コンテキストクラス参照)</td></tr>
<tr><td><code>住所</code></td><td>_オプション</td><td>住所 (形式、番地、地域、地域、郵便番号、国)</td></tr>
<tr><td><code>_電話</code></td><td>_オプション_</td><td>電話番号、確認済み電話番号</td></tr>
<tr><td><code>offline_access</code></td><td>_オプション</td><td>オフライン更新トークンの取得を許可__HTMLTAG_227___</tr>
<tr><td><code>microprofile-jwt</code></td><td>オプション_</td><td>upn、グループ (MicroProfile JWT 仕様)</td></tr>
</tbody>
</table><h3 id="tao-client-scope"><strong>_1.3 新しいクライアント スコープの作成</strong></h3>
<ol>
<li><p>__<strong>クライアント スコープ</strong> → <strong>クライアント スコープの作成_</strong></p></li>
<li><p>情報を入力してください:</p>
<ul>
<li><strong>名前</strong>: <code>私のカスタムスコープ</code></li>
<li><strong>説明</strong>: 説明範囲</li>
<li><strong>タイプ</strong>: デフォルト / オプション / なし</li>
<li><strong>同意画面に表示</strong>: ユーザーに表示する場合はオン</li>
<li><strong>_同意画面のテキスト</strong>: 同意画面に表示されるテキスト</li>
<li><strong>トークン スコープに含める</strong>: オンにすると、トークン__HTMLTAG_285___ の__HTMLTAG_283___scope</code> クレームにスコープ名が表示されます。
<li><strong>_GUI 注文</strong>: 同意画面に表示される注文</li>
</ul>
</li>
<li><p>__HTMLTAG_294___プロトコル マッパー</strong>をスコープに追加___HTMLTAG_296__HTMLTAG_297___
<li><p>_役割を制限する必要がある場合は__HTMLTAG_300___スコープ</strong> (役割スコープのマッピング)を追加_</p></li>
</ol>

___プレコード_1___

<h3 id="gan-scope-cho-client"><strong>_1.4 クライアント スコープをクライアントに割り当てる</strong></h3>
<ol>
<li><p>クライアント → タブを開く <strong>クライアント スコープ</strong></p></li>
<li><p>_クリック__HTMLTAG_318___クライアント スコープの追加</strong></p></li>
<li><p>スコープを選択し、__HTMLTAG_324___デフォルト_</strong> または <strong>オプション_</strong></p></li> として割り当てます。
</ol>

___プレコード_2___

<h3 id="realm-default-scopes"><strong>_1.5 レルムのデフォルト クライアント スコープ</strong></h3>
<p>レルムのデフォルト クライアント スコープは、作成時に<strong>すべての新しいクライアント</strong>に自動的に割り当てられます:</p>
<ol>
<li><p>__HTMLTAG_342___クライアント スコープ</strong> → リストを参照</p></li>
<li><p>_スコープには__HTMLTAG_348___割り当てられたタイプ</strong> = レルムレベルのデフォルトまたはオプションが新しいクライアントに自動的に割り当てられます__HTMLTAG_350___</li>
</ol>

<p>管理 CLI による設定:</p>
___プレコード_3___

<h3 id="consent-settings"><strong>1.6 同意設定</strong></h3>
<p>クライアントの<strong>同意が必要</strong> = ONの場合、クライアントがトークンを受け取る前に、ユーザーはスコープごとに同意する必要があります:</p><ul>
<li><p>各クライアント スコープは__HTMLTAG_366___同意画面の表示</strong>および__HTMLTAG_368___同意画面のテキスト_</strong></p></li>を構成できます。
<li><p>ユーザーは__HTMLTAG_374___アカウントコンソール</strong>→アプリケーション</p></li>で同意を取り消すことができます
<li><p>ユーザーごと、クライアントごとに保存される同意エントリ</p></li>
</ul>

___プレコード_4___

<h3 id="evaluate-scopes"><strong>1.7 スコープの評価 (スコープ評価)</strong></h3>
<p>管理コンソールには、スコープに基づいてトークンの内容をプレビューするツールが用意されています:</p>
<ol>
<li><p>_クライアントを開く → タブ <strong>クライアント スコープ</strong> → <strong>評価</strong></p></li>
<li><p>入力: <strong>User</strong> (ユーザー テストを選択)、__HTMLTAG_402___スコープ パラメーター</strong> (オプションのスコープ)</p></li>
<li><p>__HTMLTAG_408___評価</strong> をクリックして表示します:</p>
<ul>
<li><strong>効果的なプロトコル マッパー</strong>: マッパーが適用されます</li>
<li><strong>_有効なロール スコープ マッピング</strong>: トークンに含まれるロール</li>
<li><strong>生成されたアクセス トークン__HTMLTAG_422___: アクセス トークンの JSON をプレビュー</li>
<li><strong>_生成された ID トークン</strong>: ID トークンの JSON をプレビュー</li>
<li><strong>生成されたユーザー情報</strong>: ユーザー情報応答の JSON をプレビュー</li>
</ul>
</li>
</ol>

<p>これは、実際にトークンを要求せずに__HTMLTAG_436___トークンの内容をデバッグ</strong>するための非常に便利なツールです。</p>

<h2 id="2-token-management"><strong>2.トークン管理_</strong></h2>

<h3 id="access-token"><strong>_2.1 アクセストークン</strong></h3>
<p>アクセス トークンは、承認情報を含む JWT です。どの__HTMLTAG_448___user__HTMLTAG_449___がどの__HTMLTAG_450___リソース</strong>.</p>にアクセスする権限を持っているかを決定します。

<p><strong>アクセス トークン構造:</strong></p>
___プレコード_5___

<h3 id="id-token"><strong>2.2 トークン ID</strong></h3>
<p>ID トークンには ID 情報が含まれています。ユーザー <strong> が</strong> であることを確認します。クライアント (証明書利用者) に対してのみ、リソース サーバーには送信されません。</p>

___プレコード_6___

<h3 id="refresh-token"><strong>2.3 リフレッシュトークン</strong></h3>
<p>_リフレッシュ トークンは、ユーザーが再度ログインすることなく新しいアクセス トークンを取得するために使用されます。リフレッシュ トークンの有効期間はアクセス トークンよりも長くなります。</p>

___プレコード_7___

<h3 id="token-timeouts"><strong>2.4 セッションとトークンのタイムアウト</strong></h3>
<p>_<strong>レルム設定</strong> → <strong>トークン</strong> タブおよび__HTMLTAG_480___セッション</strong> タブ:</p><p><strong>トークンの有効期間:</strong></p>
<table>
<thead>
<tr><th>設定</th><th>説明</th><th>推奨値_</th></tr>
</thead>
<tbody>
<tr><td>アクセス トークンの有効期間</td><td>アクセス トークンの有効期間_</td><td>5 分 (本番)</td></tr>
<tr><td>クライアントのログインタイムアウト</td><td>ログインフロー完了までの最大時間_</td><td>5分_</td></tr>
<tr><td>ログイン タイムアウト_</td><td>ログイン ページの最大滞在時間_</td><td>30 分_</td></tr>
<tr><td>ログイン操作のタイムアウト</td><td>必要な操作の時間 (電子メールの確認など)</td><td>5 分_</td></tr>
<tr><td>_ユーザー開始アクションの有効期間</td><td>ユーザー開始アクションの時間_</td><td>5 分__HTMLTAG_537___</tr>
<tr><td>管理者が開始したアクションのデフォルトの有効期間</td><td>管理者が開始したアクションの時間 (パスワードのリセットリンク)</td><td>12 時間_</td></tr>
</tbody>
</table>

<p><strong>セッションの存続期間:</strong></p>
<table>
<thead>
<tr><th>設定_</th><th>説明_</th><th>推奨値_</th></tr>
</thead>
<tbody>
<tr><td>SSO セッションがアイドル状態</td><td>一定期間非アクティブな状態が続くとセッションが期限切れになります__HTMLTAG_569___<td>30 分_</td></tr>
<tr><td>SSO セッション最大</td><td>セッションは完全に期限切れになります (アクティビティに関係なく)</td><td>10 時間_</td></tr>
<tr><td>SSO セッション アイドル状態「Remember Me」</td><td>「Remember Me」がオンの場合のセッション アイドル</td><td>30 日__HTMLTAG_587___</tr>
<tr><td>SSO セッションの最大値を記憶する</td><td>「記憶する」がオンの場合の最大セッション数</td><td>30 日_</td></tr>
<tr><td>クライアント セッション アイドル</td><td>クライアント セッション アイドル (リフレッシュ トークンに影響)_</td><td>SSO セッション アイドルを継承_</td></tr>
<tr><td>クライアント セッション最大数</td><td>クライアント セッション最大数 (更新トークンに影響します)_</td><td>SSO セッション最大数を継承_</td></tr>
</tbody>
</table>

<p><strong>セッションとトークンの関係:</strong></p>
___プレコード_8___<p><strong>_クライアント レベルでの上書き:</strong></p>
<p>各クライアントは、タブ__HTMLTAG_624___詳細</strong>:</p>のレルムレベルのトークン設定をオーバーライドできます。
___プレコード_9___

<h3 id="refresh-token-rotation"><strong>2.5 リフレッシュ トークンの取り消し (ローテーション)</strong></h3>
<p>_<strong>リフレッシュ トークンの取り消し</strong> が有効な場合、リフレッシュ トークンを使用して新しいアクセス トークンを取得するたびに、古いリフレッシュ トークンが取り消され、新しいリフレッシュ トークンが発行されます。</p>

___プレコード_10___

<p><strong>トークンのローテーションをリフレッシュする必要があるのはなぜですか?</strong></p>
<ul>
<li><p>リフレッシュ トークンが盗まれた場合、攻撃者はそれを 1 回しか使用できません</p></li>
<li><p>_正規のクライアントが同じリフレッシュ トークンを使用 → 両方とも無効化 → トークンの盗難が検出</p></li>
<li><p>これは、OAuth 2.0 セキュリティ BCP で推奨される__HTMLTAG_650___ベスト プラクティス_</strong>です_</p></li>
</ul>

<h2 id="3-offline-access"><strong>3.オフライン アクセス</strong></h2>

<p>オフライン トークンを使用すると、ユーザーがオンライン</strong> (ブラウザ セッションがないとき) であっても、クライアント <strong> がリソースにアクセスできるようになります。オフライン トークンの有効期間は非常に長く、サーバーを再起動しても存続します。</p>

<h3 id="cau-hinh-offline"><strong>3.1 オフライン アクセス構成</strong></h3>
<ol>
<li><p>_スコープ <code>offline_access</code> がクライアントに割り当てられていることを確認します (スコープはオプション)</p></li>
<li><p>___<code>scope=offline_access</code></p></li> のクライアント リクエスト トークン
<li><p>レルム設定→セッションタブでオフラインセッションタイムアウトを構成します:</p></li>
</ol>

<table>
<thead>
<tr><th>設定_</th><th>説明_</th><th>推奨値_</th></tr>
</thead>
<tbody>
<tr><td>オフライン セッションがアイドル状態</td><td>オフライン セッションがアイドル状態になると期限切れになる</td><td>30 日_</td></tr>
<tr><td>オフライン セッションの最大制限</td><td>ライフタイム最大制限を有効にする_</td><td>ON</td></tr>
<tr><td>オフライン セッションの最大有効期間</td><td>オフライン セッションの最大存続期間_</td><td>60 日_</td></tr>
</tbody>
</table>

___プレコード_11___<h3 id="quan-ly-offline-sessions"><strong>3.2 オフライン セッションの管理</strong></h3>
<ul>
<li><p>管理コンソール → <strong>セッション</strong> → タブ <strong>オフライン セッション</strong>: すべてのオフライン セッションを表示</p></li>
<li><p>_ユーザー アカウント コンソール → <strong>セッション</strong>: ユーザーはオフライン セッションを表示および取り消すことができます_</p></li>
<li><p>管理REST API: プログラムによるオフラインセッションの取り消し</p></li>
</ul>

___プレコード_12___

<h2 id="4-token-revocation"><strong>4.トークンの失効</strong></h2>

<h3 id="revoke-token-endpoint"><strong>_4.1 トークン失効エンドポイント (RFC 7009)</strong></h3>
<p>Keycloak は、クライアントがアクセス トークンを取り消したり、トークンをリフレッシュできるようにするトークン取り消しエンドポイントをサポートします:</p>

___プレコード_13___

<p><strong>注:</strong></p>
<ul>
<li><p>リフレッシュ トークンを取り消す → リフレッシュ トークンと関連する SSO セッションの両方を無効化します (構成に応じて)</p></li>
<li><p>_アクセス トークンを取り消す → JWT ベースのトークンの場合、取り消しはリソース サーバーがトークン イントロスペクションを実行するか、トークン取り消しイベントを使用する場合にのみ有効です_</p></li>
</ul>

<h3 id="not-before-policy"><strong>_4.2 Not Before ポリシー</strong></h3>
<p>ある時点より前に発行されたすべてのトークンを取り消す:</p>

___プレコード_14___

<h3 id="token-introspection"><strong>4.3 トークンのイントロスペクション (RFC 7662)</strong></h3>
<p>_リソース サーバーはトークン イントロスペクションを使用してトークンの有効性を検証し、クレームを取得します:</p>

___プレコード_15___

<p><strong>トークン イントロスペクションと JWT 検証を使用する場合:</strong></p>
<table>
<thead>
<tr><th>_方法_</th><th>利点_</th><th>欠点_</th></tr>
</thead>
<tbody>
<tr><td>JWT 検証 (ローカル)</td><td>迅速、Keycloak を呼び出す必要なし_</td><td>リアルタイム、失効遅延なし_</td></tr>
<tr><td>トークンのイントロスペクション (リモート)</td><td>リアルタイムステータス、完全なクレーム_</td><td>ネットワーク遅延、Keycloakへの依存_</td></tr>
</tbody>
</table>

<h2 id="5-dpop"><strong>5. DPoP — 所有証明のデモンストレーション (RFC 9449)</strong></h2>

<p>DPoP は、__HTMLTAG_822___ベアラー トークンの盗難</strong> の問題を解決します。アクセス トークンが盗まれた場合、トークンとクライアントの間にバインドがないため、攻撃者はどこでもそのトークンを使用できます。</p>

<h3 id="dpop-overview"><strong>_5.1 DPoP はどのように機能しますか?</strong></h3>
<p>DPoP は、クライアントが所有する特定の <strong>非対称キー ペア__HTMLTAG_831___ にトークンをバインドします。クライアントは、トークンを使用するたびに秘密キーの所有権を証明する必要があります。</p>

___プレコード_16___<h3 id="dpop-proof-structure"><strong>5.2 DPoP 証明 JWT 構造</strong></h3>
___プレコード_17___

<h3 id="dpop-keycloak"><strong>5.3 KeycloakでのDPoPの構成</strong></h3>
<p>DPoP は <strong>クライアント ポリシー</strong>:</p> を通じて適用されます

<ol>
<li><p><strong>クライアント プロファイル</strong>:</p> を作成
<ul>
<li>レルム設定 → クライアント ポリシー → プロファイル タブ → 作成</li>
<li>名前: <code>dpop-profile___HTMLTAG_856__HTMLTAG_857___
<li>実行者の追加: <strong>DPoP 証明検証</strong></li>
</ul>
</li>
<li><p>__HTMLTAG_866___クライアント ポリシー</strong>:</p> の作成
<ul>
<li>「ポリシー」タブ → 作成</li>
<li>名前: <code>dpop-policy___HTMLTAG_874__HTMLTAG_875___
<li>条件を追加: <strong>クライアント アクセス タイプ</strong> または <strong>任意のクライアント</strong></li>
<li>アソシエイトプロフィール: <code>dpop-profile</code></li>
</ul>
</li>
</ol>

___プレコード_18___

<h3 id="dpop-nonce"><strong>5.4 DPoP Nonce</strong></h3>
<p>Keycloak はサーバー発行の DPoP nonce をサポートし、リプレイ攻撃に対するセキュリティを強化します:</p>

___プレコード_19___

<h3 id="dpop-implementation"><strong>_5.5 DPoP 実装例 (JavaScript)</strong></h3>
___プレコード_20___

<h2 id="6-client-policies-token"><strong>_6.トークンセキュリティのためのクライアントポリシー</strong></h2>

<p>クライアント ポリシーにより、トークンに関連するセキュリティ要件の強制が可能になります:</p>

<h3 id="token-related-executors"><strong>6.1 トークン関連の実行者</strong></h3>
<table>
<thead>
<tr><th>_実行者</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>_DPoP 証明検証</td><td>トークン要求には DPoP が必要_</td></tr>
<tr><td>Holder-of-key Enforcer</td><td>必須トークン バインディング (MTLS または DPoP)</td></tr>
<tr><td>安全な署名アルゴリズム</td><td>安全なアルゴリズム (RS256、ES256 など) のみを許可</td></tr>
<tr><td>PKCE エンフォーサ</td><td>認可コード フローに必要な PKCE</td></tr>
<tr><td>_機密クライアント執行者</td><td>クライアント認証が必要</td></tr>
<tr><td>安全な応答タイプ</td><td>許可される安全な応答タイプのみ</td></tr>
<tr><td>暗黙的な許可を拒否</td><td>暗黙的な許可を禁止</td></tr>
</tbody>
</table>

___プレコード_21___<h2 id="7-thuc-hanh"><strong>7。演習_</strong></h2>

<h3 id="lab-1"><strong>ラボ 1: クライアント スコープ</strong></h3>
<ol>
<li><p>マッパーを使用してクライアント スコープを作成__HTMLTAG_974___organization</code>: org_id、org_name、org_role</p></li>
<li><p>_まずデフォルトとしてスコープをクライアントに割り当て、次にオプション</p></li>に変更します。
<li><p>テスト: リクエスト トークンにスコープ パラメーターがない → 組織クレームがない</p></li>
<li><p>_テスト: <code>scope=openid 組織</code> でトークンをリクエスト → はい組織クレーム</p></li>
<li><p>__HTMLTAG_994___評価</strong> ツールを使用してトークンをプレビュー</p></li>
</ol>

<h3 id="lab-2"><strong>ラボ 2: トークンのライフサイクル</strong></h3>
<ol>
<li><p>アクセス トークン構成の有効期間 = 1 分</p></li>
<li><p>リフレッシュ トークンの取り消しを有効にし、リフレッシュ トークンの最大再利用 = 0</p></li>
<li><p>トークンを取得 → 1 分待つ → API を呼び出す → 401 を受信</p></li>
<li><p>トークンの更新 → 新しいトークンの受信 → API 呼び出し → 成功</p></li>
<li><p>_古いトークンを更新しようとすると、エラー (取り消し) が発生します</p></li>
</ol>

<h3 id="lab-3"><strong>ラボ 3: オフライン アクセス</strong></h3>
<ol>
<li><p>スコープを割り当てる__HTMLTAG_1032___offline_access</code>をクライアント</p></li>
<li><p>_<code>scope=openid offline_access</code></p></li> でトークンを取得します
<li><p>__HTMLTAG_1044___refresh_expires_in</code> = 0 (オフライン トークン)</p></li> を確認してください
<li><p>Keycloakを再起動→オフライントークンを使用して更新→引き続き動作</p></li>
<li><p>管理コンソールでオフライン セッションを表示</p></li>
</ol>

<h3 id="lab-4"><strong>ラボ 4: DPoP</strong></h3>
<ol>
<li><p>クライアントに DPoP を適用するクライアント ポリシーを作成する <code>dpop-client</code></p></li>
<li><p>キーペアを生成し、DPoP 証明 JWT を作成</p></li>
<li><p>DPoP ヘッダーを含むトークンを要求 → DPoP バインドされたトークンを受信</p></li>
<li><p>トークンを使用してリソース サーバーを呼び出すが、__HTMLTAG_1078___no</strong> DPoP 証明 → リソース サーバーが拒否</p></li>
<li><p>トークンを使用してリソース サーバーを呼び出す__HTMLTAG_1084___および</strong> DPoP 証明 → 成功___HTMLTAG_1086__HTMLTAG_1087___
</ol><h3 id="lab-5"><strong>ラボ 5: トークンの失効</strong></h3>
<ol>
<li><p>アクセス トークンとリフレッシュ トークンを取得</p></li>
<li><p>取り消しエンドポイント経由で更新トークンを取り消す</p></li>
<li><p>更新してみるとエラーが発生</p></li>
<li><p>管理コンソールから「Not-Before」ポリシーを設定 → プッシュ</p></li>
<li><p>_古いアクセス トークンを使用してみる → イントロスペクション トークンが返される <code>active=false</code></p></li>
</ol>