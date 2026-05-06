---
id: 019d8b30-b103-7001-c001-e0c5f8100103
title: 'レッスン 3: 管理コンソールと最初のレルムの作成'
slug: bai-3-admin-console-va-tao-realm-dau-tien
description: 管理コンソールについて理解し、最初の管理者ユーザーを作成し、レルム、レルム設定 (一般、ログイン、電子メール、テーマ、ローカリゼーション、キー、セキュリティ防御)、管理 CLI (kcadm.sh)、および基本的な管理 REST API を作成および構成します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 1: Keycloak プラットフォーム'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-388" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-388)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1001" cy="213" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="902" cy="274" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="803" cy="75" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="704" cy="136" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="605" cy="197" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="223" x2="1100" y2="303" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="253" x2="1050" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1005.9089653438086,154 1005.9089653438086,192 973,211 940.0910346561914,192 940.0910346561914,154 973,135" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: 管理コンソールと最初のレルムの作成__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak の基本から高度なもの</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Keycloak プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="1-truy-cap-admin-console"><strong>1.管理コンソールにアクセス</strong></h2>

<p>Keycloak (スタンドアロンまたは Docker) をインストールした後、__HTMLTAG_70___管理コンソール</strong> (Keycloak システム全体の一元管理インターフェイス) にアクセスできます。</p>

<h3 id="url-truy-cap"><strong>URL にアクセス</strong></h3>
<p>デフォルトでは、管理コンソールは</p> にあります。
___プレコード_0___

<p>別のポート マッピングで Docker を使用して Keycloak を実行する場合:</p>
___プレコード_1___

<h3 id="tao-admin-user-dau-tien"><strong>最初の管理者ユーザーを作成</strong></h3>
<p>Keycloakに初めてアクセスするときは、管理コンソールにログインするために__HTMLTAG_86___初期管理ユーザー</strong>を作成する必要があります。 2 つの方法があります:</p>

<p><strong>方法 1: 環境変数経由 (Docker/実稼働環境に推奨)</strong></p>
___プレコード_2___

<p><strong>方法 2: ウェルカム ページ経由 (ローカルホストからアクセスする場合のみ)</strong></p>
<p>_<code>http://localhost:8080</code> に移動すると、管理者ユーザー作成フォームが表示されます。ユーザー名とパスワードを入力し、「__HTMLTAG_99___作成</strong>.</p>」をクリックします。

<p><strong>方法 3: コマンド ライン経由</strong></p>
___プレコード_3___<h3 id="giao-dien-admin-console"><strong>_管理コンソール インターフェース</strong></h3>
<p>ログインすると、主なコンポーネントを備えた管理コンソール インターフェイスが表示されます:</p>
<ul>
<li><p><strong>レルムセレクター</strong> (左上隅) — 現在管理されているレルムを選択_</p></li>
<li><p><strong>左サイドバー</strong> — メイン ナビゲーション メニュー: クライアント、クライアント スコープ、レルム ロール、ユーザー、グループ、セッション、イベント、レルム設定、認証、アイデンティティ プロバイダー、ユーザー フェデレーション</p></li>
<li><p><strong>メインコンテンツ領域</strong> — 選択したアイテムの詳細なコンテンツを表示_</p></li>
<li><p><strong>ユーザー ドロップダウン</strong> (右上隅) - 管理者アカウント管理、サインアウト_</p></li>
</ul>

<h2 id="2-tao-realm-dau-tien"><strong>2.最初のレルムの作成</strong></h2>

<h3 id="master-realm-va-custom-realm"><strong>マスター レルムとカスタム レルム</strong></h3>
<p>_Keycloak をインストールすると、__HTMLTAG_147___master</strong> という名前のレルムが作成されます。マスター レルムは、他のレルムを管理するために使用される特別なレルムです。_<strong>アプリケーションにはマスター レルムを使用しないでください</strong>.</p>

<p>ベスト プラクティス:</p>
<ul>
<li><p>Keycloak システムを管理するには特権管理者のみが <strong>マスター レルム</strong> を使用してください</p></li>
<li><p>_組織、プロジェクト、または環境ごとに個別の__HTMLTAG_163___カスタム レルム__HTMLTAG_164___を作成_</p></li>
<li><p>わかりやすいレルム名を付けます: <code>mycompany-dev</code>、__HTMLTAG_171___mycompany-staging__HTMLTAG_172___、__HTMLTAG_173___mycompany-prod</code></p></li>
</ul>

<h3 id="tao-realm-qua-admin-console"><strong>_管理コンソール経由でレルムを作成</strong></h3>
<ol>
<li><p>_<strong>レルムセレクター</strong> (左上隅のドロップダウン、「マスター」と表示)</p></li> をクリックします。
<li><p>_クリック__HTMLTAG_191___レルムの作成</strong></p></li>
<li><p>情報を入力してください:</p>
<ul>
<li><strong>レルム</strong>: <code>my-company</code> (小文字、数字、ハイフンのみを含む)</li>
<li><strong>有効</strong>: オン</li>
</ul>
</li>
<li><p>クリック__HTMLTAG_213___作成</strong></p></li>
</ol>

<h3 id="tao-realm-tu-json"><strong>_JSON ファイルからレルムを作成</strong></h3>
<p>JSON ファイルからレルムをインポートできます。環境間で構成をレプリケートする場合に役立ちます:</p>
___プレコード_4___

<p>管理コンソール経由でインポート: レルムを作成するときに、__HTMLTAG_225___Browse__HTMLTAG_226___ をクリックして JSON ファイルを選択します。</p><h2 id="3-realm-settings"><strong>3.レルム設定の詳細</strong></h2>

<p>レルムを作成した後、サイドバーから__HTMLTAG_233___レルム設定</strong>にアクセスして、詳細な構成を行ってください。</p>

<h3 id="general-tab"><strong>3.1 [一般]タブ</strong></h3>
<table>
<thead>
<tr><th>設定</th><th>説明_</th><th>推奨値_</th></tr>
</thead>
<tbody>
<tr><td>表示名</td><td>ログインページに表示される名前_</td><td>_会社/プロジェクト名_</td></tr>
<tr><td>_HTML 表示名</td><td>表示名の HTML サポート_</td><td>ロゴ + 名前_</td></tr>
<tr><td>_フロントエンド URL</td><td>クライアントが接続に使用する URL_</td><td>https://auth.mycompany.com</td></tr>
<tr><td>SSL が必要_</td><td>リクエストには SSL が必要_</td><td><code>external</code> (開発) / <code>all</code> (本番)</td></tr>
<tr><td>ユーザー管理のアクセス_</td><td>ユーザーによるリソース管理の許可 (UMA)_</td><td>OFF (UMA が必要な場合を除く)_</td></tr>
<tr><td>ACR から LoA へのマッピング</td><td>認証コンテキスト クラス参照のマッピング</td><td>必要な場合のステップアップ認証の構成__HTMLTAG_301___</tr>
</tbody>
</table><h3 id="login-tab"><strong>_3.2 ログインタブ</strong></h3>
<p>ログイン ページの動作を構成します:</p>
<table>
<thead>
<tr><th>設定</th><th>説明</th><th>デフォルト_</th></tr>
</thead>
<tbody>
<tr><td>_ユーザー登録</td><td>新規アカウント登録を許可</td><td>OFF</td></tr>
<tr><td>_パスワードを忘れた場合_</td><td>「パスワードを忘れた場合」リンクを表示_</td><td>OFF</td></tr>
<tr><td>私を記憶</td><td>「ログインを記憶する」チェックボックス_</td><td>OFF</td></tr>
<tr><td>ユーザー名として電子メールを使用</td><td>ユーザー名として電子メールを使用</td><td>OFF</td></tr>
<tr><td>メールでログイン</td><td>メールでのログインを許可_</td><td>ON</td></tr>
<tr><td>重複メール</td><td>重複メールを許可__HTMLTAG_367___<td>OFF</td></tr>
<tr><td>メールの確認</td><td>メールの確認が必要_</td><td>OFF</td></tr>
<tr><td>ユーザー名を編集</td><td>ユーザー名の変更を許可</td><td>OFF</td></tr>
</tbody>
</table>

<p><strong>制作推奨:</strong></p>
___プレコード_5___

<h3 id="email-tab"><strong>_3.3 [電子メール]タブ</strong></h3>
<p>電子メールを送信するように SMTP サーバーを構成します (確認、パスワードのリセット、通知):</p>
<table>
<thead>
<tr><th>設定</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>From</td><td>送信電子メール アドレス (例: Noreply@mycompany.com)</td></tr>
<tr><td>表示名から_</td><td>メールに表示される名前</td></tr>
<tr><td>返信先</td><td>返信アドレス (例: support@mycompany.com)</td></tr>
<tr><td>ホスト</td><td>SMTPサーバーのホスト名</td></tr>
<tr><td>ポート</td><td>SMTP ポート (STARTTLS の場合は 587、SSL の場合は 465)</td></tr>
<tr><td>_暗号化_</td><td>SSL または STARTTLS を有効にする</td></tr>
<tr><td>_認証</td><td>SMTP のユーザー名とパスワード_</td></tr>
</tbody>
</table>

<p>Gmail SMTP の設定例:</p>
___プレコード_6___<h3 id="themes-tab"><strong>3.4 タブのテーマ</strong></h3>
<p>さまざまなページの外観をカスタマイズする:</p>
<ul>
<li><p><strong>ログインテーマ</strong> — ログイン、登録、パスワードリセットページ</p></li>
<li><p><strong>アカウントのテーマ</strong> - ユーザー向けのアカウント管理ページ</p></li>
<li><p><strong>管理コンソールのテーマ</strong> — 管理コンソール</p></li>
<li><p><strong>メールのテーマ</strong> — メールのテンプレート</p></li>
</ul>

<p>Keycloak は、テーマ <code>keycloak</code> (デフォルト) および <code>keycloak.v2</code> (アカウント コンソール v3、React ベース) を提供します。カスタム テーマを作成できます。これについては次の記事で説明します。</p>

<h3 id="localization-tab"><strong>_3.5 ローカリゼーションタブ</strong></h3>
<p>ログイン、アカウント、電子メール ページの多言語サポート:</p>
<ol>
<li><p>_オン__HTMLTAG_502___国際化</strong>: オン</p></li>
<li><p><strong>サポートされているロケール</strong>: en、vi、ja、zh-CN、...</p></li> を選択してください
<li><p>__HTMLTAG_514___デフォルトのロケール</strong>: vi (デフォルトのベトナム語インターフェイスの場合)</p></li> を選択してください
<li><p>_必要に応じてロケールごとにメッセージ バンドルをカスタマイズ</p></li>
</ol>

<h3 id="keys-tab"><strong>3.6 タブ キー</strong></h3>
<p>レルムの暗号キーの管理 — トークンの署名と暗号化に使用されます:</p>
<ul>
<li><p><strong>アクティブ キー</strong> — トークンの署名に使用されるキー_</p></li>
<li><p><strong>パッシブキー</strong> — 以前に署名されたトークンを検証するために古いキーがまだ使用されています_</p></li>
<li><p><strong>無効なキー</strong> — キーは使用されなくなりました</p></li>
</ul><p>デフォルトのキープロバイダー:</p>
<table>
<thead>
<tr><th>プロバイダ_</th><th>アルゴリズム</th><th>目的</th></tr>
</thead>
<tbody>
<tr><td>rsa 生成</td><td>RS256</td><td>JWT トークンに署名_</td></tr>
<tr><td>rsa-enc-generated</td><td>RSA-OAEP</td><td>エンコーディングトークン_</td></tr>
<tr><td>hmac 生成</td><td>HS512</td><td>HMAC 署名_</td></tr>
<tr><td>aes 生成</td><td>AES</td><td>対称暗号化</td></tr>
<tr><td>ecdsa 生成</td><td>ES256</td><td>楕円曲線署名</td></tr>
</tbody>
</table>

<p><strong>キーのローテーション:</strong> 新しいキープロバイダーを追加します → 新しいキーがアクティブになります → 古いキーがパッシブになります → しばらくすると、古いキーが無効になります。</p>

<h3 id="tokens-tab"><strong>3.7 トークンタブ</strong></h3>
<p>トークンの有効期間と動作を構成します:</p>
<table>
<thead>
<tr><th>設定</th><th>説明</th><th>推奨値_</th></tr>
</thead>
<tbody>
<tr><td>デフォルトの署名アルゴリズム</td><td>JWT署名アルゴリズム_</td><td>RS256</td></tr>
<tr><td>リフレッシュ トークンを取り消す</td><td>使用後にリフレッシュ トークンを取り消す_</td><td>ON (運用)_</td></tr>
<tr><td>SSO セッション アイドル</td><td>最大セッション アイドル時間</td><td>30 分_</td></tr>
<tr><td>_SSO セッション最大</td><td>最大セッション時間_</td><td>10 時間_</td></tr>
<tr><td>アクセス トークンの有効期間_</td><td>アクセス トークンの有効期間_</td><td>5 分_</td></tr>
<tr><td>クライアントのログインタイムアウト</td><td>ログインフローの最大時間_</td><td>5分_</td></tr>
</tbody>
</table>

<h3 id="security-defenses-tab"><strong>3.8 「セキュリティ防御」タブ</strong></h3>
<p>_レルムのセキュリティ構成:</p><p><strong>ヘッダー:</strong></p>
<table>
<thead>
<tr><th>_ヘッダー_</th><th>デフォルト値_</th><th>説明_</th></tr>
</thead>
<tbody>
<tr><td>X-Frame-Options</td><td>SAMEORIGIN</td><td>クリックジャッキング対策_</td></tr>
<tr><td>コンテンツ セキュリティ ポリシー</td><td>frame-src 'self'; ..._</td><td>CSP ヘッダー</td></tr>
<tr><td>X-Content-Type-Options</td><td>nosniff</td><td>Anti-MIME スニッフィング_</td></tr>
<tr><td>X-XSS 保護</td><td>1; mode=block</td><td>XSS フィルター</td></tr>
<tr><td>_厳格なトランスポートセキュリティ</td><td>max-age=31536000</td><td>必須HTTPS</td></tr>
<tr><td>リファラーポリシー</td><td>リファラーなし</td><td>リファラーヘッダーの制御_</td></tr>
</tbody>
</table>

<p><strong>ブルート フォース検出:</strong></p>
<ul>
<li><p><strong>有効</strong>: オン (ブルート フォース防止を有効にする)</p></li>
<li><p><strong>永久ロックアウト</strong>: オフ (時間が経過すると自動的にロック解除)</p></li>
<li><p><strong>最大ログイン失敗数</strong>: 5 (ログイン試行が 5 回失敗するとロックされます)</p></li>
<li><p><strong>待機増分</strong>: 60 秒 (待機時間の増分)_</p></li>
<li><p><strong>最大待ち時間</strong>: 900 秒 (最大待ち時間 15 分)</p></li>
<li><p><strong>クイックログインチェック</strong>: 1000 ミリ秒 (ログインの検出が速すぎます)</p></li>
</ul>

<h2 id="4-admin-cli"><strong>_4.管理 CLI (kcadm.sh)</strong></h2>

<p>Keycloak は、__HTMLTAG_796___Admin CLI</strong> (<code>kcadm.sh</code>) を提供します。これは、管理コンソールにアクセスせずに Keycloak を管理するためのコマンドライン ツールです。</p>

<h3 id="cau-hinh-credentials"><strong>4.1 認証情報の構成</strong></h3>
<p>管理 CLI を使用する前に、ログインする必要があります:</p>
___プレコード_7___

<p><strong>セキュリティに関するメモ:</strong> 運用環境では、ユーザー名/パスワードをコマンド ラインで直接使用する代わりに、__HTMLTAG_810___--client</code> および <code>--secret</code> を使用してください。

<h3 id="quan-ly-realm-voi-cli"><strong>4.2 CLI を使用したレルム管理</strong></h3>

<p><strong>新しいレルムの作成:</strong></p>
___プレコード_8___<p><strong>_レルムのリストを参照:</strong></p>
___プレコード_9___

<p><strong>詳細レルムを参照:</strong></p>
___プレコード_10___

<p><strong>_レルムの更新:</strong></p>
___プレコード_11___

<p><strong>レルムの削除:</strong></p>
___プレコード_12___

<h3 id="cau-hinh-realm-settings-voi-cli"><strong>_4.3 CLI を使用したレルム設定の構成</strong></h3>

<p><strong>ログイン設定:</strong></p>
___プレコード_13___

<p><strong>構成トークン設定:</strong></p>
___プレコード_14___

<p><strong>_SMTP 設定メール:</strong></p>
___プレコード_15___

<p><strong>レルム構成のエクスポート:</strong></p>
___プレコード_16___

<h2 id="5-admin-rest-api"><strong>5.管理者 REST API_</strong></h2>

<p>Keycloak は、__HTMLTAG_864___Admin REST API</strong> を提供し、HTTP リクエストによる完全な管理を可能にし、自動化、CI/CD、他のシステムとの統合に適しています。</p>

<h3 id="lay-access-token"><strong>5.1 アクセス トークンの取得</strong></h3>
<p>API を呼び出す前に、マスター レルムからアクセス トークンを取得する必要があります:</p>
___プレコード_17___

<h3 id="quan-ly-realm-voi-api"><strong>_5.2 API を使用したレルム管理</strong></h3>

<p><strong>レルムのリストの取得:</strong></p>
___プレコード_18___

<p><strong>_新しいレルムの作成:</strong></p>
___プレコード_19___

<p><strong>レルムの詳細を取得する:</strong></p>
___プレコード_20___

<p><strong>レルムの更新:</strong></p>
___プレコード_21___

<p><strong>_レルムの削除:</strong></p>
___プレコード_22___<h3 id="api-endpoints-quan-trong"><strong>5.3 重要な API エンドポイント</strong></h3>
<table>
<thead>
<tr><th>エンドポイント_</th><th>メソッド</th><th>説明_</th></tr>
</thead>
<tbody>
<tr><td>/admin/realms</td><td>GET</td><td>Realms リスト_</td></tr>
<tr><td>/admin/realms</td><td>POST</td><td>_新しいレルムの作成_</td></tr>
<tr><td>/admin/realms/{realm}</td><td>GET</td><td>レルムの詳細</td></tr>
<tr><td>/admin/realms/{レルム}</td><td>PUT</td><td>レルムの更新</td></tr>
<tr><td>/admin/realms/{レルム}</td><td>DELETE</td><td>レルムを削除</td></tr>
<tr><td>/admin/realms/{realm}/users</td><td>GET_</td><td>ユーザーのリスト_</td></tr>
<tr><td>/admin/realms/{realm}/users</td><td>POST_</td><td>ユーザーの作成_</td></tr>
<tr><td>/admin/realms/{realm}/clients</td><td>GET_</td><td>クライアントリスト_</td></tr>
<tr><td>/admin/realms/{realm}/roles</td><td>GET_</td><td>レルムロールのリスト_</td></tr>
<tr><td>/admin/realms/{realm}/groups</td><td>GET_</td><td>グループのリスト_</td></tr>
<tr><td>/admin/realms/{realm}/events_</td><td>GET_</td><td>イベント ログ_</td></tr>
</tbody>
</table>

<h3 id="postman-collection"><strong>5.4 Postman の使用</strong></h3>
<p>Keycloak は、管理 REST API の OpenAPI 仕様を提供します。 Postman または Swagger UI にインポートして、API を簡単に探索およびテストできます:</p>
___プレコード_23___

<h2 id="6-thuc-hanh"><strong>6.演習_</strong></h2>

<p>次の演習を実行して知識を定着させてください:</p><ol>
<li><p><strong>管理コンソール経由で次の設定を使用してレルム「dev-company」を作成</strong>:</p>
<ul>
<li>表示名: 「開発会社」</li>
<li>メールでログイン: オン</li>
<li>ユーザー登録：ON</li>
<li>パスワードを忘れた場合: オン</li>
<li>メールの確認: オン</li>
<li>私を覚えておいてください: オン</li>
</ul>
</li>
<li><p><strong>新しく作成されたレルムのブルート フォース検出構成</strong>:</p>
<ul>
<li>最大ログイン失敗数: 3</li>
<li>待機時間の増分: 120 秒</li>
<li>最大待機時間: 600 秒</li>
</ul>
</li>
<li><p><strong>kcadm.sh_</strong> を使用して、同様の構成でレルム「ステージング会社」を作成_</p></li>
<li><p><strong>管理REST API</strong> (curl)を使用してレルム「test-company」を作成し、レルムのリストを取得して検証_</p></li>
<li><p><strong>Export</strong> レルム「dev-company」を JSON にエクスポートし、別の名前で再インポート_</p></li>
</ol>

<h2 id="7-tong-ket"><strong>7.概要_</strong></h2>

<p>このレッスンでは次のことを学びました:</p>
<ul>
<li><p>アクセス方法と使用方法__HTMLTAG_1078___管理コンソール</strong></p></li>
<li><p>最初の__HTMLTAG_1084___管理者ユーザー</strong>を複数の方法で作成_</p></li>
<li><p>__HTMLTAG_1090___Realm</strong> の作成と構成___ — Keycloak のメイン管理ユニット</p></li>
<li><p>重要な__HTMLTAG_1096___レルム設定</strong>: 一般、ログイン、電子メール、テーマ、ローカリゼーション、キー、トークン、セキュリティ防御__HTMLTAG_1098___</li>
<li><p><strong>管理 CLI</strong> (kcadm.sh) を使用してコマンド ライン経由で管理_</p></li>
<li><p>__HTMLTAG_1108___Admin REST API</strong> を使用して管理を自動化</p></li>
</ul>

<p>次の記事では、Keycloak での__HTMLTAG_1114___ユーザー、グループ、およびユーザー プロファイルの管理</strong> について詳しく説明します。</p>