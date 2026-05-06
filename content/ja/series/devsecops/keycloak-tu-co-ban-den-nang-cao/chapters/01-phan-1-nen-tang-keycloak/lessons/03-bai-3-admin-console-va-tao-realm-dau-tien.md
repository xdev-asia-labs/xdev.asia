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
      <tspan x="60" dy="0">レッスン 3: 管理コンソールと最初のレルムの作成</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Keycloak プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-truy-cap-admin-console"><strong>1. 管理コンソールにアクセスする</strong></h2>

<p>Keycloak (スタンドアロンまたは Docker) をインストールすると、それにアクセスできるようになります<strong>管理コンソール</strong>— Keycloakシステム全体の集中管理インターフェース。</p>

<h3 id="url-truy-cap"><strong>アクセスURL</strong></h3>
<p>デフォルトでは、管理コンソールは次の場所にあります。</p>
<pre><code>http://localhost:8080/admin</code></pre>

<p>異なるポートマッピングを持つDockerを使用してKeycloakを実行する場合:</p>
<pre><code>http://localhost:&lt;PORT&gt;/admin</code></pre>

<h3 id="tao-admin-user-dau-tien"><strong>最初の管理者ユーザーを作成する</strong></h3>
<p>初めて Keycloak にアクセスするときは、Keycloak を作成する必要があります<strong>初期管理者ユーザー</strong>管理コンソールにログインします。次の 2 つの方法があります。</p>

<p><strong>方法 1: 環境変数を使用する (Docker/実稼働環境に推奨)</strong></p>
<pre><code>docker run -d --name keycloak \
  -e KC_BOOTSTRAP_ADMIN_USERNAME=admin \
  -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin \
  -p 8080:8080 \
  quay.io/keycloak/keycloak:26.2.4 start-dev</code></pre>

<p><strong>方法2：ウェルカムページ経由（ローカルホストからアクセスする場合のみ）</strong></p>
<p>アクセス<code>http://localhost:8080</code> をクリックすると、管理者ユーザー作成フォームが表示されます。ユーザー名とパスワードを入力し、クリックします<strong>作成する</strong>.</p>

<p><strong>方法 3: コマンドライン経由</strong></p>
<pre><code># Standalone
export KC_BOOTSTRAP_ADMIN_USERNAME=admin
export KC_BOOTSTRAP_ADMIN_PASSWORD=admin
bin/kc.sh start-dev</code></pre>

<h3 id="giao-dien-admin-console"><strong>管理コンソールのインターフェース</strong></h3>
<p>ログインすると、次の主要コンポーネントを含む管理コンソール インターフェイスが表示されます。</p>
<ul>
<li><p><strong>レルムセレクター</strong>(左上隅) - 管理しているレルムを選択します</p></li>
<li><p><strong>左側のサイドバー</strong>— メイン ナビゲーション メニュー: クライアント、クライアント スコープ、レルム ロール、ユーザー、グループ、セッション、イベント、レルム設定、認証、アイデンティティ プロバイダー、ユーザー フェデレーション</p></li>
<li><p><strong>メインコンテンツエリア</strong>— 選択した項目の詳細な内容を表示します</p></li>
<li><p><strong>ユーザードロップダウン</strong>(右上隅) — 管理者アカウントの管理、サインアウト</p></li>
</ul>

<h2 id="2-tao-realm-dau-tien"><strong>2. 最初のレルムを作成する</strong></h2>

<h3 id="master-realm-va-custom-realm"><strong>マスター レルムとカスタム レルム</strong></h3>
<p>Keycloakをインストールする場合、レルムには名前が付けられます<strong>マスター。マスター</strong>既成の。マスター レルムは、他のレルムを管理するために使用される特別なレルムです。<strong>マスターレルムはアプリケーションに使用しないでください</strong>.</p>

<p>ベストプラクティス:</p>
<ul>
<li><p>使用<strong>マスターレルム</strong>スーパー管理者のみがKeycloakシステムを管理できる</p></li>
<li><p>作成する<strong>カスタムレルム</strong>各組織、プロジェクト、または環境に固有の</p></li>
<li><p>レルムの名前付けには次のような意味があります。<code>私の会社-開発</code>, <code>mycompany-ステージング</code>, <code>私の会社の製品</code></p></li>
</ul>

<h3 id="tao-realm-qua-admin-console"><strong>管理コンソール経由でレルムを作成する</strong></h3>
<ol>
<li><p>クリック<strong>レルムセレクター</strong>(左上隅のドロップダウンに「マスター」が表示されます)</p></li>
<li><p>クリック<strong>レルムの作成</strong></p></li>
<li><p>情報を入力してください:</p>
<ul>
<li><strong>レルム名</strong>: <code>私の会社</code>(小文字、数字、ハイフンのみを含む)</li>
<li><strong>有効</strong>： の上</li>
</ul>
</li>
<li><p>クリック<strong>作成する</strong></p></li>
</ol>

<h3 id="tao-realm-tu-json"><strong>JSONファイルからレルムを作成</strong></h3>
<p>JSON ファイルからレルムをインポートできます。環境間で構成を再現する場合に便利です。</p>
<pre><code>{
  "realm": "my-company",
  "enabled": true,
  "displayName": "My Company",
  "displayNameHtml": "&lt;strong&gt;My Company&lt;/strong&gt;",
  "sslRequired": "external",
  "registrationAllowed": false,
  "loginWithEmailAllowed": true,
  "duplicateEmailsAllowed": false,
  "resetPasswordAllowed": true,
  "editUsernameAllowed": false,
  "bruteForceProtected": true,
  "permanentLockout": false,
  "maxFailureWaitSeconds": 900,
  "minimumQuickLoginWaitSeconds": 60,
  "waitIncrementSeconds": 60,
  "quickLoginCheckMilliSeconds": 1000,
  "maxDeltaTimeSeconds": 43200,
  "failureFactor": 5,
  "defaultSignatureAlgorithm": "RS256",
  "accessTokenLifespan": 300,
  "ssoSessionIdleTimeout": 1800,
  "ssoSessionMaxLifespan": 36000
}</code></pre>

<p>管理コンソール経由でインポート: レルムを作成するときに、<strong>ブラウズ</strong>をクリックして JSON ファイルを選択します。</p>

<h2 id="3-realm-settings"><strong>3. レルム設定の詳細</strong></h2>

<p>レルム作成後、アクセスします。<strong>レルム設定</strong>詳細な設定についてはサイドバーから。</p>

<h3 id="general-tab"><strong>3.1 「全般」タブ</strong></h3>
<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>推奨値</th></tr>
</thead>
<tbody>
<tr><td>表示名</td><td>ログインページに表示される名前</td><td>会社名・プロジェクト名</td></tr>
<tr><td>HTML表示名</td><td>表示名の HTML サポート</td><td>ロゴ+名前</td></tr>
<tr><td>フロントエンド URL</td><td>クライアントが接続に使用する URL</td><td>https://auth.mycompany.com</td></tr>
<tr><td>SSLを要求する</td><td>リクエストにSSLを要求する</td><td><code>外部の</code>(開発) /<code>全て</code>(製品)</td></tr>
<tr><td>ユーザー管理のアクセス</td><td>ユーザーにリソースの管理を許可する (UMA)</td><td>オフ (UMA が必要な場合を除く)</td></tr>
<tr><td>ACR から LoA へのマッピング</td><td>マッピング認証コンテキスト クラスのリファレンス</td><td>ステップアップ認証が必要な場合の構成</td></tr>
</tbody>
</table>

<h3 id="login-tab"><strong>3.2 ログインタブ</strong></h3>
<p>ログイン ページの動作を構成します。</p>
<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>デフォルト</th></tr>
</thead>
<tbody>
<tr><td>ユーザー登録</td><td>新規アカウント登録を許可します</td><td>オフ</td></tr>
<tr><td>パスワードをお忘れですか</td><td>リンクを表示「パスワードを忘れた場合」</td><td>オフ</td></tr>
<tr><td>私を覚えてますか</td><td>「ログインを記憶する」チェックボックス</td><td>オフ</td></tr>
<tr><td>ユーザー名としての電子メール</td><td>電子メールをユーザー名として使用する</td><td>オフ</td></tr>
<tr><td>メールでログイン</td><td>メールによるログインを許可する</td><td>の上</td></tr>
<tr><td>重複したメール</td><td>重複したメールは許可されます</td><td>オフ</td></tr>
<tr><td>メールの確認</td><td>メール認証が必要です</td><td>オフ</td></tr>
<tr><td>ユーザー名の編集</td><td>ユーザー名の変更を許可する</td><td>オフ</td></tr>
</tbody>
</table>

<p><strong>生産に関する推奨事項:</strong></p>
<pre><code>User registration: OFF (hoặc ON với reCAPTCHA)
Forgot password: ON
Remember me: ON
Email as username: Tùy yêu cầu
Login with email: ON
Verify email: ON
Edit username: OFF</code></pre>

<h3 id="email-tab"><strong>3.3 「電子メール」タブ</strong></h3>
<p>電子メールを送信するように SMTP サーバーを構成します (検証、パスワードのリセット、通知)。</p>
<table>
<thead>
<tr><th>設定</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td>から</td><td>送信電子メール アドレス (例: Noreply@mycompany.com)</td></tr>
<tr><td>表示名から</td><td>メールに表示される名前</td></tr>
<tr><td>大声で返事をする</td><td>返信アドレス (例: support@mycompany.com)</td></tr>
<tr><td>ホスト</td><td>SMTPサーバーのホスト名</td></tr>
<tr><td>ポート</td><td>SMTP ポート (STARTTLS の場合は 587、SSL の場合は 465)</td></tr>
<tr><td>暗号化</td><td>SSL または STARTTLS を有効にする</td></tr>
<tr><td>認証</td><td>SMTP のユーザー名とパスワード</td></tr>
</tbody>
</table>

<p>Gmail SMTP を使用した構成例:</p>
<pre><code>Host: smtp.gmail.com
Port: 587
From: noreply@mycompany.com
Enable StartTLS: ON
Authentication: ON
Username: your-email@gmail.com
Password: app-specific-password</code></pre>

<h3 id="themes-tab"><strong>3.4 「テーマ」タブ</strong></h3>
<p>さまざまなページの外観をカスタマイズします。</p>
<ul>
<li><p><strong>ログインテーマ</strong>— ログイン、登録、パスワードリセットページ</p></li>
<li><p><strong>アカウントのテーマ</strong>— ユーザー向けのアカウント管理ページ</p></li>
<li><p><strong>管理コンソールのテーマ</strong>— 管理コンソールインターフェイス</p></li>
<li><p><strong>電子メールのテーマ</strong>— 電子メールのテンプレート</p></li>
</ul>

<p>Keycloakはテーマを提供します<code>キーマント</code>(デフォルト)と<code>keycloak.v2</code>(アカウント コンソール v3、React ベース)。カスタム テーマを作成できます。これについては次の記事で説明します。</p>

<h3 id="localization-tab"><strong>3.5 ローカリゼーションタブ</strong></h3>
<p>ログイン、アカウント、電子メール ページの多言語サポート:</p>
<ol>
<li><p>オンにする<strong>国際化</strong>： の上</p></li>
<li><p>選択<strong>サポートされているロケール</strong>: en、vi、ja、zh-CN、...</p></li>
<li><p>選択<strong>デフォルトのロケール</strong>: vi (デフォルトのベトナム語インターフェース用)</p></li>
<li><p>必要に応じてロケールごとにメッセージ バンドルをカスタマイズする</p></li>
</ol>

<h3 id="keys-tab"><strong>3.6 タブキー</strong></h3>
<p>レルムの暗号化キーを管理します。トークンの署名と暗号化に使用されます。</p>
<ul>
<li><p><strong>アクティブなキー</strong>— キーはトークンの署名に使用されています</p></li>
<li><p><strong>パッシブキー</strong>— 以前に署名されたトークンを検証するために古いキーが引き続き使用されます</p></li>
<li><p><strong>無効なキー</strong>— キーはもう使用されていません</p></li>
</ul>

<p>デフォルトのキープロバイダー:</p>
<table>
<thead>
<tr><th>プロバイダー</th><th>アルゴリズム</th><th>目的</th></tr>
</thead>
<tbody>
<tr><td>RSA で生成された</td><td>RS256</td><td>JWT トークンに署名する</td></tr>
<tr><td>rsa-enc で生成された</td><td>RSA-OAEP</td><td>トークンを暗号化する</td></tr>
<tr><td>hmac で生成された</td><td>HS512</td><td>HMAC 署名</td></tr>
<tr><td>aes で生成された</td><td>AES</td><td>対称暗号化</td></tr>
<tr><td>ECDSA によって生成された</td><td>ES256</td><td>楕円曲線署名</td></tr>
</tbody>
</table>

<p><strong>キーのローテーション:</strong>新しいキープロバイダーを追加します → 新しいキーがアクティブになります → 古いキーがパッシブに変わります → しばらくしてから古いキーを無効にします。</p>

<h3 id="tokens-tab"><strong>3.7 「トークン」タブ</strong></h3>
<p>トークンの有効期間と動作を構成します。</p>
<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>推奨値</th></tr>
</thead>
<tbody>
<tr><td>デフォルトの署名アルゴリズム</td><td>JWT署名アルゴリズム</td><td>RS256</td></tr>
<tr><td>リフレッシュトークンの取り消し</td><td>使用後にリフレッシュトークンを取り消す</td><td>ON（本番）</td></tr>
<tr><td>SSO セッションのアイドル状態</td><td>最大セッションアイドル時間</td><td>30分</td></tr>
<tr><td>SSO セッション最大値</td><td>最大セッション時間</td><td>10時</td></tr>
<tr><td>アクセストークンの有効期間</td><td>アクセストークンの有効期間</td><td>5分</td></tr>
<tr><td>クライアントのログインタイムアウト</td><td>ログインフローの最大時間</td><td>5分</td></tr>
</tbody>
</table>

<h3 id="security-defenses-tab"><strong>3.8 「セキュリティ防御」タブ</strong></h3>
<p>レルムのセキュリティ構成:</p>

<p><strong>ヘッダー:</strong></p>
<table>
<thead>
<tr><th>ヘッダ</th><th>デフォルト値</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td>X フレーム オプション</td><td>同じ原産地</td><td>クリックジャッキング対策</td></tr>
<tr><td>コンテンツセキュリティポリシー</td><td>フレームソース 'self'; ...</td><td>CSPヘッダー</td></tr>
<tr><td>X-コンテンツタイプ-オプション</td><td>鼻を鳴らす</td><td>MIME スニッフィングを防止する</td></tr>
<tr><td>X-XSS 保護</td><td>1;モード=ブロック</td><td>XSSフィルター</td></tr>
<tr><td>厳格な輸送セキュリティ</td><td>max-age=31536000</td><td>HTTPS を要求する</td></tr>
<tr><td>リファラーポリシー</td><td>非参照者</td><td>リファラーヘッダーを制御する</td></tr>
</tbody>
</table>

<p><strong>ブルートフォース検出:</strong></p>
<ul>
<li><p><strong>有効</strong>: ON (ブルート フォース防止をオンにする)</p></li>
<li><p><strong>永久ロックアウト</strong>：OFF（時間が経過すると自動でロックが解除されます）</p></li>
<li><p><strong>最大ログイン失敗数</strong>: 5 (ログイン試行が 5 回失敗するとロックされます)</p></li>
<li><p><strong>待機増分</strong>：60秒（待ち時間は徐々に増加します）</p></li>
<li><p><strong>最大待機時間</strong>：900秒（最大待機時間15分）</p></li>
<li><p><strong>クイックログインチェック</strong>: 1000 ミリ秒 (ログインの検出が速すぎます)</p></li>
</ul>

<h2 id="4-admin-cli"><strong>4. 管理 CLI (kcadm.sh)</strong></h2>

<p>Keycloakが提供するもの<strong>管理者 CLI</strong> (<code>kcadm.sh</code>) — 管理コンソールにアクセスせずにKeycloakを管理するためのコマンドラインツール。</p>

<h3 id="cau-hinh-credentials"><strong>4.1 資格情報の構成</strong></h3>
<p>管理 CLI を使用する前に、ログインする必要があります。</p>
<pre><code># Đăng nhập vào Keycloak server
bin/kcadm.sh config credentials \
  --server http://localhost:8080 \
  --realm master \
  --user admin \
  --password admin

# Với Docker
docker exec -it keycloak /opt/keycloak/bin/kcadm.sh config credentials \
  --server http://localhost:8080 \
  --realm master \
  --user admin \
  --password admin</code></pre>

<p><strong>セキュリティ上の注意:</strong>本番環境では、使用します<code>- クライアント</code>そして<code>- 秘密</code>ユーザー名/パスワードをコマンドラインで直接入力する代わりに。</p>

<h3 id="quan-ly-realm-voi-cli"><strong>4.2 CLI を使用したレルム管理</strong></h3>

<p><strong>新しいレルムを作成します。</strong></p>
<pre><code># Tạo realm cơ bản
bin/kcadm.sh create realms \
  -s realm=my-company \
  -s enabled=true \
  -s displayName="My Company"

# Tạo realm với nhiều cấu hình
bin/kcadm.sh create realms \
  -s realm=my-company \
  -s enabled=true \
  -s displayName="My Company" \
  -s registrationAllowed=false \
  -s loginWithEmailAllowed=true \
  -s resetPasswordAllowed=true \
  -s sslRequired=external \
  -s bruteForceProtected=true</code></pre>

<p><strong>レルムのリストを参照してください。</strong></p>
<pre><code># Lấy tất cả realms
bin/kcadm.sh get realms --fields realm,enabled,displayName

# Output:
# [ {
#   "realm" : "master",
#   "displayName" : "Keycloak",
#   "enabled" : true
# }, {
#   "realm" : "my-company",
#   "displayName" : "My Company",
#   "enabled" : true
# } ]</code></pre>

<p><strong>レルムの詳細を参照してください。</strong></p>
<pre><code>bin/kcadm.sh get realms/my-company</code></pre>

<p><strong>レルムの更新:</strong></p>
<pre><code>bin/kcadm.sh update realms/my-company \
  -s displayName="My Company Production" \
  -s sslRequired=all \
  -s bruteForceProtected=true \
  -s failureFactor=5</code></pre>

<p><strong>レルムを削除します:</strong></p>
<pre><code>bin/kcadm.sh delete realms/my-company</code></pre>

<h3 id="cau-hinh-realm-settings-voi-cli"><strong>4.3 CLI を使用してレルム設定を構成する</strong></h3>

<p><strong>ログイン設定を構成します。</strong></p>
<pre><code>bin/kcadm.sh update realms/my-company \
  -s registrationAllowed=true \
  -s resetPasswordAllowed=true \
  -s rememberMe=true \
  -s verifyEmail=true \
  -s loginWithEmailAllowed=true \
  -s duplicateEmailsAllowed=false</code></pre>

<p><strong>トークン設定を構成します。</strong></p>
<pre><code>bin/kcadm.sh update realms/my-company \
  -s accessTokenLifespan=300 \
  -s ssoSessionIdleTimeout=1800 \
  -s ssoSessionMaxLifespan=36000 \
  -s revokeRefreshToken=true \
  -s refreshTokenMaxReuse=0</code></pre>

<p><strong>SMTP 電子メールを構成します。</strong></p>
<pre><code>bin/kcadm.sh update realms/my-company \
  -s 'smtpServer={"host":"smtp.gmail.com","port":"587","from":"noreply@mycompany.com","fromDisplayName":"My Company","starttls":"true","auth":"true","user":"your-email@gmail.com","password":"app-password"}'</code></pre>

<p><strong>レルム構成をエクスポートします。</strong></p>
<pre><code># Export realm sang file JSON
bin/kcadm.sh get realms/my-company &gt; my-company-realm.json</code></pre>

<h2 id="5-admin-rest-api"><strong>5. 管理REST API</strong></h2>

<p>Keycloakが提供するもの<strong>管理REST API</strong>HTTP リクエストによる完全な管理を可能にし、自動化、CI/CD、および他のシステムとの統合に最適です。</p>

<h3 id="lay-access-token"><strong>5.1 アクセストークンの取得</strong></h3>
<p>API を呼び出す前に、マスター レルムからアクセス トークンを取得する必要があります。</p>
<pre><code># Lấy access token bằng admin credentials
ACCESS_TOKEN=$(curl -s -X POST \
  "http://localhost:8080/realms/master/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=admin" \
  -d "password=admin" \
  -d "grant_type=password" \
  -d "client_id=admin-cli" | jq -r '.access_token')

echo $ACCESS_TOKEN</code></pre>

<h3 id="quan-ly-realm-voi-api"><strong>5.2 APIによるレルム管理</strong></h3>

<p><strong>レルムのリストを取得します。</strong></p>
<pre><code>curl -s -X GET \
  "http://localhost:8080/admin/realms" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" | jq '.[].realm'</code></pre>

<p><strong>新しいレルムを作成します。</strong></p>
<pre><code>curl -s -X POST \
  "http://localhost:8080/admin/realms" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "realm": "my-company",
    "enabled": true,
    "displayName": "My Company",
    "sslRequired": "external",
    "registrationAllowed": false,
    "loginWithEmailAllowed": true,
    "resetPasswordAllowed": true,
    "bruteForceProtected": true,
    "failureFactor": 5
  }'</code></pre>

<p><strong>レルムの詳細を取得します。</strong></p>
<pre><code>curl -s -X GET \
  "http://localhost:8080/admin/realms/my-company" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .</code></pre>

<p><strong>レルムの更新:</strong></p>
<pre><code>curl -s -X PUT \
  "http://localhost:8080/admin/realms/my-company" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "displayName": "My Company Updated",
    "sslRequired": "all"
  }'</code></pre>

<p><strong>レルムを削除します:</strong></p>
<pre><code>curl -s -X DELETE \
  "http://localhost:8080/admin/realms/my-company" \
  -H "Authorization: Bearer $ACCESS_TOKEN"</code></pre>

<h3 id="api-endpoints-quan-trong"><strong>5.3 重要な API エンドポイント</strong></h3>
<table>
<thead>
<tr><th>終点</th><th>方法</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td>/admin/レルム</td><td>得る</td><td>レルムのリスト</td></tr>
<tr><td>/admin/レルム</td><td>役職</td><td>新しいレルムを作成する</td></tr>
<tr><td>/admin/realms/{レルム}</td><td>得る</td><td>レルムの詳細</td></tr>
<tr><td>/admin/realms/{レルム}</td><td>置く</td><td>レルムを更新する</td></tr>
<tr><td>/admin/realms/{レルム}</td><td>消去</td><td>レルムの削除</td></tr>
<tr><td>/admin/realms/{realm}/users</td><td>得る</td><td>ユーザー一覧</td></tr>
<tr><td>/admin/realms/{realm}/users</td><td>役職</td><td>ユーザーの作成</td></tr>
<tr><td>/admin/realms/{realm}/clients</td><td>得る</td><td>顧客リスト</td></tr>
<tr><td>/admin/realms/{realm}/roles</td><td>得る</td><td>レルムの役割のリスト</td></tr>
<tr><td>/admin/realms/{realm}/groups</td><td>得る</td><td>グループ一覧</td></tr>
<tr><td>/admin/realms/{realm}/events</td><td>得る</td><td>イベントログ</td></tr>
</tbody>
</table>

<h3 id="postman-collection"><strong>5.4 ポストマンの使用</strong></h3>
<p>Keycloakは、管理REST APIのOpenAPI仕様を提供します。 Postman または Swagger UI にインポートして、API を簡単に探索およびテストできます。</p>
<pre><code># OpenAPI spec URL
http://localhost:8080/admin/realms/{realm}/.well-known/openid-configuration</code></pre>

<h2 id="6-thuc-hanh"><strong>6. 練習問題</strong></h2>

<p>知識を定着させるために次の演習を行ってください。</p>

<ol>
<li><p><strong>レルム「dev-company」を作成します</strong>管理コンソール経由で次の設定を行います。</p>
<ul>
<li>表示名: 「開発会社」</li>
<li>メールでログイン：ON</li>
<li>ユーザー登録：ON</li>
<li>パスワードを忘れた場合：ON</li>
<li>電子メールの確認: オン</li>
<li>私を覚えておいてください: オン</li>
</ul>
</li>
<li><p><strong>ブルートフォース検出の構成</strong>新しく作成されたレルムの場合:</p>
<ul>
<li>ログイン失敗の最大数: 3</li>
<li>待機増分: 120 秒</li>
<li>最大待機時間: 600 秒</li>
</ul>
</li>
<li><p><strong>kcadm.shを使用する</strong>同様の構成でレルム「staging-company」を作成します</p></li>
<li><p><strong>管理REST APIを使用する</strong>(curl) レルム「test-company」を作成し、レルムのリストを取得して検証します。</p></li>
<li><p><strong>輸出</strong>レルム「dev-company」を JSON に変換し、別の名前で再インポートします</p></li>
</ol>

<h2 id="7-tong-ket"><strong>7. まとめ</strong></h2>

<p>このレッスンでは、次のことを学びました。</p>
<ul>
<li><p>アクセス方法と利用方法<strong>管理コンソール</strong></p></li>
<li><p>作成する<strong>管理者ユーザー</strong>まずは多くの方法を経て</p></li>
<li><p>作成して構成する<strong>レルム</strong>— Keycloakの主要な管理ユニット</p></li>
<li><p>理解する<strong>レルム設定</strong>重要: 一般、ログイン、電子メール、テーマ、ローカリゼーション、キー、トークン、セキュリティ防御</p></li>
<li><p>使用<strong>管理者 CLI</strong>(kcadm.sh) コマンドライン経由の管理用</p></li>
<li><p>使用<strong>管理REST API</strong>管理を自動化する</p></li>
</ul>

<p>次の記事で詳細な手順を説明します<strong>ユーザー、グループ、ユーザー プロファイルの管理</strong>キークロークで。</p>
