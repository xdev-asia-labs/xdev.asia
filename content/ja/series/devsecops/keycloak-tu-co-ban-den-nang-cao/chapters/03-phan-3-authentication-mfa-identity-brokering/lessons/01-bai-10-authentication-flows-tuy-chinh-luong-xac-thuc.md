---
id: 019d8b30-b110-7001-c001-e0c5f8100110
title: 'レッスン 10: 認証フロー - 認証フローのカスタマイズ'
slug: bai-10-authentication-flows-tuy-chinh-luong-xac-thuc
description: Keycloakの認証フロー、ブラウザフロー、直接付与フロー、登録フロー、認証情報のリセットフロー、最初のブローカーログインフローを理解します。カスタム フローの作成、実行とサブフロー、条件付きオーセンティケーター (条件 - 実行されるサブフロー、条件 - クライアント スコープ)、ステップアップ認証、ACR から認証レベル (LoA) へのマッピング、およびセッション制限を追加します。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 10
section_title: 'パート 3: 認証、MFA、および ID ブローカリング'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9250" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9250)"/>

  <!-- Decorations -->
  <g>
    <circle cx="645" cy="185" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="690" cy="150" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="735" cy="115" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="780" cy="80" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="825" cy="45" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="235" x2="1100" y2="315" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="265" x2="1050" y2="335" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1010.9807621135332,170 1010.9807621135332,200 985,215 959.0192378864668,200 959.0192378864668,170 985,155" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — レッスン 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 10: 認証フロー - カスタマイズ</tspan>
      <tspan x="60" dy="42">認証フロー</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">_Keycloak の基本から高度なもの__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 認証、MFA、および ID ブローカリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-authentication-flows-tong-quan"><strong>1.認証フロー — 概要</strong></h2>

Keycloakの__HTMLTAG_71___認証フローは、ユーザーがログイン、登録、またはセキュリティアクションを実行するときに通過する必要がある__HTMLTAG_72___一連の認証ステップ__HTMLTAG_73___です。各フローは、順序付けされた <strong>実行</strong> (認証者) で構成され、<strong>サブフロー</strong>.</p> を介してネストできます。

<p>フローを表示および管理するには、__HTMLTAG_80___管理コンソール → 認証 → フロー</strong>.</p> に移動します。

<h3 id="11-built-in-flows"><strong>1.1 組み込み認証フロー</strong></h3>

<p>_Keycloak はデフォルトのフローを提供します:</p><table>
<thead>
<tr><th>フロー</th><th>説明_</th><th>トリガーされるタイミング_</th></tr>
</thead>
<tbody>
<tr><td><strong>ブラウザ フロー</strong></td><td>ブラウザ ログイン フロー_</td><td>初めてアプリケーションにアクセスするユーザー、またはセッションの有効期限が切れたユーザー</td></tr>
<tr><td><strong>直接付与フロー</strong></td><td>ユーザー名/パスワードによる直接認証(リソース所有者のパスワード)</td><td>grant_type=passwordによるAPI呼び出し</td></tr>
<tr><td><strong>登録フロー</strong></td><td>新規アカウント登録フロー</td><td>ユーザーがログインページで「登録」をクリック</td></tr>
<tr><td><strong>資格情報のリセット フロー</strong></td><td>パスワードのリセット フロー</td><td>ユーザーが「パスワードを忘れた場合」をクリック</td></tr>
<tr><td><strong>最初のブローカーログインフロー</strong></td><td>アイデンティティプロバイダー経由の最初のログインを処理するフロー_</td><td>ソーシャルログイン経由の最初のログイントップ</td></tr>
<tr><td><strong>Docker 認証フロー</strong></td><td>Docker レジストリの認証_</td><td>Docker クライアントのイメージのプル/プッシュ</td></tr>
<tr><td><strong>HTTP チャレンジ フロー</strong></td><td>HTTP ヘッダーによる認証_</td><td>非ブラウザ クライアント (Kerberos、X.509)</td></tr>
</tbody>
</table>

<h3 id="12-flow-types"><strong>1.2 フロー タイプ</strong></h3>

<p>各フローには次のタイプの要素を含めることができます:</p>

<table>
<thead>
<tr><th>種類</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td><strong>_Authenticator</strong></td><td>特定の認証手順 (ユーザー名、パスワード フォームなど)_</td></tr>
<tr><td><strong>サブフロー</strong></td><td>_サブフローには複数の認証子が含まれています — 複雑なロジックの作成が可能_</td></tr>
<tr><td><strong>フォーム</strong></td><td>ユーザーが情報（ユーザー名、パスワード、OTPなど）を入力するためのフォームを表示_</td></tr>
</tbody>
</table>

<h2 id="2-browser-flow-chi-tiet"><strong>2.ブラウザ フロー — 詳細</strong></h2>

<p>デフォルトのブラウザ フローは次の構造になっています:</p>

___プレコード_0___

<p><strong>_仕組み:</strong></p><ol>
<li><strong>_Cookie</strong>: ユーザーがすでに有効なセッション Cookie を持っている場合 → すべてスキップし、正常にログインします</li>
<li><strong>Kerberos</strong>: デフォルトでは無効になっています。有効になっている場合は、Kerberos チケット</li> を試してください。
<li><strong>アイデンティティ プロバイダ リダイレクタ</strong>: 存在する場合__HTMLTAG_237___kc_idp_hint</code> → その IdP__HTMLTAG_239___ にリダイレクトします
<li><strong>フォーム</strong>: ログイン フォームを表示します
    <ul>
    <li>ユーザー名とパスワードが必要</li>
    <li>ユーザーが OTP を設定している場合 → OTP コードの入力を要求</li>
    </ul>
</li>
</ol>

<h3 id="21-execution-requirements"><strong>_2.1 実行要件</strong></h3>

<p>フロー内の各実行には、</p> の動作を定義する <strong>requirement__HTMLTAG_257___ があります。

<table>
<thead>
<tr><th>要件</th><th>説明</th><th>いつ使用するか_</th></tr>
</thead>
<tbody>
<tr><td><strong>必須</strong></td><td>必須かつ成功__HTMLTAG_277___<td>_ユーザー名/パスワード、設定時のOTP画像</td></tr>
<tr><td><strong>代替</strong></td><td>成功した代替案の 1 つで十分</td><td>Cookie OR フォーム — 1 回のパス</td></tr>
<tr><td><strong>条件付き</strong></td><td>サブフローは条件がtrueの場合にのみ実行</td><td>条件付きOTP — ユーザーがセットアップしている場合にのみOTPを要求</td></tr>
<tr><td><strong>_無効</strong></td><td>_完全にスキップ_</td><td>削除せずにステップを無効にする</td></tr>
</tbody>
</table>

<p><strong>重要なルール:</strong></p>
<ul>
<li>フロー内のすべての実行が <strong>代替</strong> の場合 → <strong>1 パスのみ_</strong></li>
<li>__HTMLTAG_325___Required</strong> が少なくとも 1 つある場合、すべての Required が合格する必要があり、Alternative は無視されます</li>
<li><strong>Conditional</strong> はサブフローでよく使用されます。最初のステップは条件チェッカーであり、次のステップは認証子__HTMLTAG_331___
</ul>

<h2 id="3-tao-custom-authentication-flow"><strong>3.カスタム認証フローの作成</strong></h2>

<p>組み込みフローは直接編集できません。 <strong>複製</strong>してからカスタマイズする必要があります。</p>

<h3 id="31-duplicate-va-chinh-sua"><strong>_3.1 複製と編集</strong></h3><ol>
<li>__HTMLTAG_347___認証 → フロー___HTMLTAG_348__HTMLTAG_349___ に移動します
<li>コピーするフローを選択します (例: <code>ブラウザ</code></li>)
<li>_「アクション」→「複製」をクリック__HTMLTAG_356__HTMLTAG_357___
<li>新しい名前: <code>カスタム ブラウザ フロー</code></li>
<li>新しいフローは、元のフローとすべて同じ実行で表示されます</li>
</ol>

<h3 id="32-them-execution"><strong>3.2 実行の追加</strong></h3>

<p>複製後、実行を追加/削除/並べ替えることができます:</p>

<ol>
<li>カスタム フローで、__HTMLTAG_373___「ステップの追加」</strong></li> をクリックします。
<li>_リストから認証システムを選択します:
    <ul>
    <li><code>ユーザー名パスワード フォーム</code> — ユーザー名 + パスワード入力フォーム</li>
    <li><code>OTP フォーム</code> — OTP 入力フォーム コード</li>
    <li><code>_Cookie</code> — セッション Cookie を確認</li>
    <li><code>アイデンティティ プロバイダ リダイレクタ</code> — 外部 IdP</li> へのリダイレクト
    <li><code>アクセスの拒否</code> — アクセスの拒否</li>
    <li><code>アクセスを許可</code> — アクセスを許可</li>
    <li><code>ユーザー名フォーム</code> — ユーザー名のみを入力してください (パスワードは別途)</li>
    <li><code>パスワード フォーム</code> — パスワードのみを入力</li>
    <li><code>WebAuthn Authenticator</code> — セキュリティ キー</li> を使用して認証します
    <li><code>WebAuthn パスワードレス認証</code> — パスワードレス認証</li>
    </ul>
</li>
<li>適切な要件を設定します (必須、代替、条件付き、無効)</li>
</ol>

<h3 id="33-them-sub-flow"><strong>_3.3 サブフローの追加</strong></h3>

<p>サブフローを使用すると、複数の実行をグループ化して、より複雑なロジックを作成できます:</p>

___プレコード_1___

<p><strong>_サブフローの追加方法:</strong></p>
<ol>
<li>__HTMLTAG_435___「サブフローを追加」をクリック</strong></li>
<li>名前を付けます。例: <code>MFA サブフロー</code></li>
<li>要件の設定: <code>条件付き</code></li>
<li>サブフローに実行を追加</li>
</ol>

<h2 id="4-conditional-authenticators"><strong>4.条件付き認証子_</strong></h2>

<p>条件付き認証子を使用すると、サブフローを実行する前に__HTMLTAG_454___条件</strong>をチェックできます。条件が満たされない場合 → サブフロー全体がスキップされます。</p>

<h3 id="41-cac-condition-co-san"><strong>4.1 利用可能な条件</strong></h3><table>
<thead>
<tr><th>_状態_</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td><strong>条件 - ユーザー構成</strong></td><td>_ユーザーが対応する認証情報 (OTP、WebAuthn...) を構成しました</td></tr>
<tr><td><strong>条件 - ユーザーの役割</strong></td><td>ユーザーには特定の役割があります</td></tr>
<tr><td><strong>条件 - ユーザー属性_</strong></td><td>_ユーザーには目的の値を持つ特定の属性がある_</td></tr>
<tr><td><strong>条件 - クライアント スコープ</strong></td><td>特定のスコープを含むリクエスト (例: <code>acr_values</code>)</td></tr>
<tr><td><strong>条件 - サブフローが実行されました</strong></td><td>_サブフローは以前に正常に実行されました_</td></tr>
</tbody>
</table>

<h3 id="42-vi-du-conditional-otp-theo-role"><strong>4.2 例: 役割に応じた条件付き OTP</strong></h3>

<p>ロール <code>admin</code>:</p> を持つユーザーに対してのみ OTP をリクエストします

___プレコード_2___

<p><strong>構成条件 - ユーザー役割:</strong></p>
<ol>
<li>__HTMLTAG_529___条件 - ユーザー役割</code>をサブフロー</li>に追加します
<li>条件の横にある⚙️ (設定) アイコンをクリック</li>
<li>入力:
    <ul>
    <li><strong>エイリアス</strong>: <code>管理者の役割を確認</code></li>
    <li><strong>ユーザー ロール</strong>: <code>admin</code> (またはクライアント ロールの場合は <code>realm-management.manage-users</code>)</li>
    <li><strong>出力を否定</strong>: <code>オフ</code> (ロールを持たないユーザーに適用する場合はオン)</li>
    </ul>
</li>
</ol>

<h3 id="43-condition-client-scope"><strong>4.3 条件 - クライアントの範囲</strong></h3>

<p>クライアントが特別なスコープを要求する場合はMFAが必要です:</p>

___プレコード_3___

___プレコード_4___

<h2 id="5-step-up-authentication-va-loa"><strong>5.ステップアップ認証と認証レベル (LoA)</strong></h2>

<p>ステップアップ認証を使用すると、ユーザーに完全な再認証を強制することなく、機密性の高いアクションに対して__HTMLTAG_570___より高いレベルの認証__HTMLTAG_571___を要求できます。

<h3 id="51-acr-va-loa-mapping"><strong>5.1 ACR とスピーカー マッピング</strong></h3>

<p><strong>ACR (認証コンテキスト クラス参照)</strong> は、__HTMLTAG_580___認証レベル__HTMLTAG_581___ が実行されたことを示す ID トークン内のクレームです。 KeycloakはACR値を__HTMLTAG_582___認証レベル(LoA)</strong> — 整数</p>にマップします。<p><strong>ACR からスピーカーへのマッピング構成:</strong></p>
<ol>
<li>__HTMLTAG_591___認証 → フロー___HTMLTAG_592__HTMLTAG_593___ に移動します
<li>使用中のフローを開きます (例: ブラウザ フロー)</li>
<li>各サブフローには <strong>LoA レベル</strong></li> を割り当てることができます
</ol>

___プレコード_5___

<p><strong>_デフォルトの LoA マッピング (認証 → フロー → 歯車アイコン):</strong></p>

___プレコード_6___

<h3 id="52-request-step-up"><strong>5.2 ステップアップ認証のリクエスト</strong></h3>

<p>クライアントは、__HTMLTAG_610___acr_values</code> または__HTMLTAG_612___claims</code> パラメータ:</p> を介して特定の LoA をリクエストします。

___プレコード_7___

<p><strong>結果はトークン ID:</strong></p>

___プレコード_8___

<h3 id="53-loa-trong-token"><strong>_5.3 アプリケーションでスピーカーを確認する</strong></h3>

___プレコード_9___

<h2 id="6-direct-grant-flow"><strong>6.直接助成金の流れ</strong></h2>

<p>直接付与フローの処理 <code>grant_type=password</code> — ブラウザを経由しない直接認証:</p>

___プレコード_10___

___プレコード_11___

<blockquote>
<p>⚠️ <strong>注</strong>: 実稼働環境では、直接付与 (リソース所有者のパスワード認証情報) は推奨されません。代わりに認証コード フロー + PKCE を使用する必要があります。</p>
</blockquote>

<h2 id="7-registration-flow"><strong>7。登録フロー_</strong></h2>

<p>登録フローは、新しいアカウント登録プロセスを制御します:</p>

___プレコード_12___

<h3 id="71-bat-registration"><strong>_7.1 登録を有効にする</strong></h3>

<ol>
<li>__HTMLTAG_649___レルム設定 → ログイン</strong></li> に移動します
<li>オン<strong>ユーザー登録</strong>: オン</li>
<li>オプション: <strong>電子メールをユーザー名</strong>として有効にし、ユーザーが電子メールをユーザー名</li>として使用できるようにします。
</ol>

<h3 id="72-custom-registration-flow"><strong>_7.2 カスタム登録フロー</strong></h3>

___プレコード_13___

<p><strong>ReCAPTCHA 構成:</strong></p>
<ol>
<li>__HTMLTAG_671___https://www.google.com/recaptcha/admin</a></li> で Google reCAPTCHA v3 にサインアップします
<li>フロー内で、__HTMLTAG_674___Recaptcha</code></li> の横にある ⚙️ をクリックします。
<li>入力:
    <ul>
    <li><strong>_サイト キーの再キャプチャ</strong>: <code>サイト キー</code></li>
    <li><strong>再キャプチャ シークレット</strong>: <code>秘密キー</code></li>
    <li><strong>_Recaptcha.net を使用</strong>: オン (中国で必要な場合)</li>
    </ul>
</li>
</ol>

<h2 id="8-reset-credentials-flow"><strong>_8.認証情報のリセットフロー</strong></h2>

<p>フローはパスワードのリセットを処理します:</p>

___プレコード_14___

<h2 id="9-session-limits"><strong>9.セッション制限</strong></h2><p>_Keycloak を使用すると、ユーザーごとの同時セッション数を制限できます。</p>

<h3 id="91-cau-hinh-session-limits"><strong>_9.1 認証フローでのセッション制限の構成</strong></h3>

<p>__HTMLTAG_715___ユーザー セッション制限</code> 認証子をフローに追加します:</p>

___プレコード_15___

<p><strong>_ユーザー セッション制限の構成:</strong></p>
<ol>
<li>_<code>ユーザー セッションの制限___HTMLTAG_725__HTMLTAG_726___ の横にある ⚙️ をクリックします
<li>構成:
    <ul>
    <li><strong>_最大レルム セッション</strong>: レルム内のセッションの最大合計数 (例: <code>3</code>)</li>
    <li><strong>最大クライアント セッション</strong>: 1 クライアントの最大セッション数 (例: <code>1</code>)</li>
    <li><strong>_制限に達したときの動作</strong>:
        <ul>
        <li><code>新しいセッションを拒否</code> — 新しいログインを拒否</li>
        <li><code>最も古いセッションを終了</code> — 最も古いセッションを終了</li>
        </ul>
    </li>
    <li><strong>エラー メッセージ</strong>: 拒否された場合のカスタム メッセージ (例: <code>「ログイン セッションの制限に達しました」</code>)</li>
    </ul>
</li>
</ol>

<h2 id="10-bind-flow-vao-realm-va-client"><strong>10.レルムとクライアントへのバインド フロー</strong></h2>

<h3 id="101-bind-flow-cho-realm"><strong>_10.1 レルムのバインド フロー</strong></h3>

<p>カスタム フローを作成した後、それをレルムのデフォルト フローとしてバインドします:</p>

<ol>
<li>__HTMLTAG_776___認証 → フロー___HTMLTAG_777__HTMLTAG_778___ に移動します
<li>タブをクリック <strong>「バインディング」</strong> (または__HTMLTAG_782___必要なアクション</strong>) </li>
<li>各バインディングのフローを選択:
    <ul>
    <li><strong>ブラウザ フロー</strong>: <code>カスタム ブラウザ フロー</code></li>
    <li><strong>直接助成金の流れ_</strong>: <code>直接助成金</code></li>
    <li><strong>登録フロー</strong>: <code>登録フロー</code></li>
    <li><strong>_認証情報のリセット フロー</strong>: <code>認証情報のリセット</code></li>
    </ul>
</li>
</ol>

<h3 id="102-bind-flow-cho-client"><strong>10.2 特定のクライアントのバインド フロー</strong></h3>

<p>クライアントごとにレルム フローをオーバーライドできます:</p><ol>
<li>__HTMLTAG_822___クライアントに移動 → クライアントを選択</strong></li>
<li>タブ <strong>「詳細」___HTMLTAG_827__HTMLTAG_828___
<li>セクション <strong>「認証フローのオーバーライド」</strong>:
    <ul>
    <li><strong>ブラウザ フロー</strong>: 別のフロー レルムのデフォルトを選択</li>
    <li><strong>直接助成フロー</strong>: 別のフローを選択</li>
    </ul>
</li>
</ol>

<h2 id="11-dynamic-flow-selection-voi-client-policies"><strong>11.クライアント ポリシーによる動的なフロー選択</strong></h2>

<p>Keycloak 25 以降では、__HTMLTAG_849___クライアント ポリシー</strong> を使用して、クライアントのプロパティに基づいて認証フローを自動的に選択できます。</p>

<h3 id="111-tao-client-policy"><strong>11.1 フロー選択用のクライアント ポリシーの作成</strong></h3>

<ol>
<li>__HTMLTAG_858___レルム設定 → クライアント ポリシー → ポリシー</strong></li> に移動します。
<li>新しいポリシーの作成: <code>Secure Clients MFA ポリシー</code></li>
<li>__HTMLTAG_866___条件</strong>を追加:
    <ul>
    <li>タイプ: <code>クライアントスコープ___HTMLTAG_871__HTMLTAG_872___
    <li>スコープ: <code>["MFA 必須"]</code></li>
    </ul>
</li>
<li>__HTMLTAG_880___プロファイル</strong> を追加 (クライアント プロファイルから):
    <ul>
    <li>_プロファイル エグゼキュータ: ブラウザ フローをオーバーライド__HTMLTAG_884___
    </ul>
</li>
</ol>

___プレコード_16___

<h2 id="12-export-import-flows"><strong>12.認証フローのエクスポート/インポート</strong></h2>

<p>認証フローはレルムのエクスポートに含まれています:</p>

___プレコード_17___

<p><strong>_管理 REST API 経由の部分インポート:</strong></p>

___プレコード_18___

<h2 id="13-tom-tat"><strong>13.概要_</strong></h2><table>
<thead>
<tr><th>コンセプト_</th><th>説明_</th></tr>
</thead>
<tbody>
<tr><td><strong>認証フロー</strong></td><td>認証ステップシーケンス — サブフロー経由でネスト可能_</td></tr>
<tr><td><strong>実行要件</strong></td><td>必須、代替、条件付き、無効</td></tr>
<tr><td><strong>条件付き認証子</strong></td><td>サブフロー実行前に条件を確認</td></tr>
<tr><td><strong>ステップアップ認証</strong></td><td>機密性の高いアクションには上位スピーカーが必要__HTMLTAG_942___</tr>
<tr><td><strong>ACR からスピーカーへのマッピング</strong></td><td>ACR 値を数値レベルにマッピング_</td></tr>
<tr><td><strong>セッション制限</strong></td><td>ユーザーごとの同時セッションの制限_</td></tr>
<tr><td><strong>フローバインディング</strong></td><td>レルムレベルまたはクライアントごとのオーバーライドでのバインドフロー_</td></tr>
</tbody>
</table>