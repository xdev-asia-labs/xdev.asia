---
id: 019d8b30-b117-7001-c001-e0c5f8100117
title: 'レッスン 17: Keycloak インターフェースのカスタマイズ - テーマ'
slug: bai-17-tuy-chinh-giao-dien-keycloak-themes
description: テーマの種類 (ログイン、アカウント、管理者、電子メール、ようこそ)、テーマのディレクトリ構造、カスタム テーマの作成、テーマ プロパティ ファイル、FreeMarker テンプレート エンジン、特定のテンプレートのオーバーライド、i18n メッセージ、カスタム CSS/JS の使用、テーマの拡張 (親)、テーマのデプロイ (スタンドアロン、Docker、JAR/SPI)、テーマのキャッシュおよびテーマ開発ワークフロー。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 17
section_title: 'パート 5: テーマ、イベント、セキュリティ、および Vault'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2678" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2678)"/>

  <!-- Decorations -->
  <g>
    <circle cx="808" cy="174" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1016" cy="222" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="724" cy="270" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="932" cy="58" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="640" cy="106" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="134" x2="1100" y2="214" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="164" x2="1050" y2="234" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1059.1147367097487,219.5 1059.1147367097487,248.5 1034,263 1008.8852632902513,248.5 1008.8852632902513,219.5 1034,205" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — レッスン 17</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 17: Keycloak インターフェースのカスタマイズ -</tspan>
      <tspan x="60" dy="42">テーマ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">_Keycloak の基本から高度なもの__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: テーマ、イベント、セキュリティ、Vault</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tong-quan-ve-keycloak-themes"><strong>1. Keycloak テーマの概要</strong></h2>

<p>Keycloak では、__HTMLTAG_72___テーマ</strong> システムを通じてユーザー インターフェースを完全にカスタマイズできます。各テーマは、ログインページから通知メールに至るまで、Keycloak の特定の部分の外観と操作性を制御します。</p>

<h3 id="11-theme-types"><strong>1.1 テーマの種類</strong></h3>

<p>Keycloakは__HTMLTAG_80___5つのテーマタイプ</strong>:</p>をサポートしています

<table>
<thead>
<tr><th>テーマの種類</th><th>説明_</th><th>該当するページ_</th></tr>
</thead>
<tbody>
<tr><td><strong>ログイン_</strong></td><td>ログイン、登録、パスワードリセットインターフェイス_</td><td>ログイン、登録、OTP、パスワードリセット、エラー</td></tr>
<tr><td><strong>アカウント</strong></td><td>ユーザー アカウント管理ページ</td><td>アカウント コンソール (v3 React ベース)</td></tr>
<tr><td><strong>管理者</strong></td><td>管理コンソール</td><td>管理コンソール(Reactベース)</td></tr>
<tr><td><strong>メール</strong></td><td>ユーザーに送信されるテンプレートメール</td><td>メールの確認、パスワードのリセット、イベント通知</td></tr>
<tr><td><strong>ようこそ</strong></td><td>デフォルトのようこそページ_</td><td>ルートURLにアクセスするときのランディングページ</td></tr>
</tbody>
</table><h3 id="12-theme-mac-dinh"><strong>1.2 デフォルトのテーマ</strong></h3>

<p>Keycloak には利用可能なテーマが付属しています:</p>

<ul>
<li><strong>keycloak</strong> — ログイン、アカウント、電子メールのデフォルトのテーマ</li>
<li><strong>keycloak.v2</strong> — ログイン用の新しいテーマ (Keycloak 24+)、アカウントコンソール v3</li>
<li><strong>base</strong> (非推奨) — 基本テーマ。親として使用しないでください</li>
</ul>

<h2 id="2-cau-truc-thu-muc-theme"><strong>2.テーマ フォルダーの構造</strong></h2>

<p>各テーマは、標準のフォルダー構造に従って編成されています:</p>

___プレコード_0___

<h3 id="21-cac-thu-muc-chinh"><strong>2.1 メインフォルダ</strong></h3>

<table>
<thead>
<tr><th>フォルダ_</th><th>目的_</th></tr>
</thead>
<tbody>
<tr><td><code>リソース/_</code></td><td>CSS、JavaScript、静的画像_</td></tr>
<tr><td><code>templates/_</code></td><td>FreeMarker テンプレート ファイル (.ftl)</td></tr>
<tr><td><code>メッセージ/_</code></td><td>多言語用ファイル i18n</td></tr>
</tbody>
</table>

<h2 id="3-theme-properties-file"><strong>3.テーマ プロパティ ファイル_</strong></h2>

<p>ファイル <code>theme.properties</code> は、各テーマ タイプの中心的な構成ファイルです:</p>

___プレコード_1___

<h3 id="31-cac-thuoc-tinh-quan-trong"><strong>_3.1 重要な属性</strong></h3><table>
<thead>
<tr><th>プロパティ</th><th>説明</th><th>例_</th></tr>
</thead>
<tbody>
<tr><td><code>parent</code></td><td>成功の親テーマの冗長</td><td><code>parent=keycloak.v2</code></td></tr>
<tr><td><code>import</code></td><td>その他のテーマからリソースをインポート</td><td><code>import=common/keycloak</code></td></tr>
<tr><td><code>styles</code></td><td>CSS ファイルのリスト (スペース区切り)</td><td><code>styles=css/login.css css/custom.css_</code></td></tr>
<tr><td><code>scripts</code></td><td>JavaScript ファイル</td><td><code>scripts=js/app.js</code></td></tr>
<tr><td><code>locales</code></td><td>サポートされる言語のサポート</td><td><code>locales=en,vi,ja</code></td></tr>
</tbody>
</table>

<h2 id="4-freemarker-template-engine"><strong>4. FreeMarker テンプレート エンジン</strong></h2>

<p>Keycloak は、ログインおよび電子メールテーマのテンプレートエンジンとして <strong>Apache FreeMarker</strong> を使用します。 FreeMarker を使用すると、変数とロジックを使用して動的な HTML を作成できます。</p>

<h3 id="41-cu-phap-co-ban"><strong>4.1 基本構文</strong></h3>

___プレコード_2___

<h3 id="42-cac-bien-co-san"><strong>_4.2 ログインテーマで使用可能な変数</strong></h3><table>
<thead>
<tr><th>変数</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td><code>レルム</code></td><td>レルム情報 (表示名、登録許可、パスワード、ソーシャル...)</td></tr>
<tr><td><code>url</code></td><td>URL (loginAction、registrationUrl、loginResetCredentialsUrl...)_</td></tr>
<tr><td><code>_client</code></td><td>_クライアントがログインを要求しています (名前、クライアント ID...)</td></tr>
<tr><td><code>_ログイン</code></td><td>フォームデータ (入力されたユーザー名...)</td></tr>
<tr><td><code>メッセージ</code></td><td>エラー/成功メッセージ__HTMLTAG_363___</tr>
<tr><td><code>フィールドごとのメッセージ</code></td><td>各フィールドの検証メッセージ_</td></tr>
<tr><td><code>_ソーシャル</code></td><td>_ソーシャル ログイン プロバイダー_</td></tr>
<tr><td><code>locale</code></td><td>_現在のロケールとサポートされるロケールのリスト_</td></tr>
</tbody>
</table>

<h2 id="5-override-template-cu-the"><strong>5.特定のテンプレートをオーバーライド</strong></h2>

<p>必要なのは、変更したいテンプレートをオーバーライドすることだけです。残りのテンプレートは親テーマから継承されます。</p>

<h3 id="51-override-login-page"><strong>5.1 ログイン ページの上書き</strong></h3>

___プレコード_3___

<h3 id="52-override-register-page"><strong>5.2 登録ページの上書き</strong></h3>

___プレコード_4___

<h3 id="53-override-error-page"><strong>_5.3 オーバーライド エラー ページ</strong></h3>

___プレコード_5___

<h2 id="6-custom-css-va-javascript"><strong>6.カスタム CSS と JavaScript_</strong></h2>

<h3 id="61-them-custom-css"><strong>_6.1 カスタム CSS の追加</strong></h3>

___プレコード_6___

<h3 id="62-them-custom-javascript"><strong>6.2 カスタム JavaScript の追加</strong></h3>

___プレコード_7___

<h2 id="7-internationalization-i18n"><strong>7.国際化 (i18n)</strong></h2>

<p>Keycloak は、ファイル <code>messages_{locale}.properties</code>.</p> を通じて複数の言語をサポートします。

<h3 id="71-tao-file-tieng-viet"><strong>_7.1 ベトナム語ファイルの作成</strong></h3>

___プレコード_8___

<h3 id="72-override-tin-nhan-tieng-anh"><strong>7.2 英語メッセージを上書き</strong></h3>

___プレコード_9___

<h3 id="73-su-dung-i18n-trong-template"><strong>7.3 テンプレートでの i18n の使用</strong></h3>

___プレコード_10___

<h2 id="8-extending-themes-voi-parent"><strong>8。親を使用したテーマの拡張</strong></h2>

<p>テーマの継承により、既存のテーマに基づいて新しいテーマを作成し、変更が必要な部分のみをオーバーライドできます。</p><h3 id="81-cach-hoat-dong"><strong>8.1 仕組み__HTMLTAG_449___</h3>

___プレコード_11___

<h3 id="82-multi-level-inheritance"><strong>_8.2 マルチレベルの継承</strong></h3>

___プレコード_12___

<h3 id="83-theme-variants"><strong>8.3 テーマのバリエーション</strong></h3>

<p>Keycloak 24 以降では、__HTMLTAG_460___テーマのバリアント</strong> を定義して、同じテーマの異なるバージョンを持たせることができます:</p>

___プレコード_13___

<h2 id="9-deploying-themes"><strong>_9.テーマの展開_</strong></h2>

<h3 id="91-standalone-deployment"><strong>9.1 スタンドアロン展開</strong></h3>

<p>テーマをKeycloakの<code>主題/</code>フォルダーにコピーします:</p>

___プレコード_14___

<h3 id="92-docker-deployment"><strong>9.2 Docker のデプロイ</strong></h3>

___プレコード_15___

<h3 id="93-docker-multi-stage-build-voi-node"><strong>9.3 ノードを使用した Docker マルチステージ ビルド (アカウント v3)</strong></h3>

___プレコード_16___

<h3 id="94-jar-spi-deployment"><strong>9.4 JAR/SPI デプロイ</strong></h3>

<p>テーマを JAR ファイルとしてパッケージ化し、SPI プロバイダーとしてデプロイします:</p>

___プレコード_17___

___プレコード_18___

___プレコード_19___

<h2 id="10-theme-development-workflow"><strong>10.テーマ開発ワークフロー_</strong></h2>

<h3 id="101-tat-cache-khi-phat-trien"><strong>_10.1 開発中はキャッシュをオフにする</strong></h3>

<p>デフォルトのKeycloakキャッシュテーマ、開発時にはオフにする必要があります:</p>

___プレコード_20___

<h3 id="102-docker-compose-dev"><strong>10.2 開発用 Docker Compose</strong></h3>

___プレコード_21___

<h3 id="103-workflow-phat-trien"><strong>10.3 開発ワークフロー</strong></h3>

___プレコード_22___

<h2 id="11-react-account-console-v3"><strong>11. React アカウント コンソール v3 のカスタマイズ</strong></h2>

<p>Account Console v3 は <strong>React + PatternFly</strong> を使用します。カスタマイズするには、カスタム React アプリを構築する必要があります。</p>

<h3 id="111-keycloakify"><strong>11.1 Keycloakify (推奨)</strong></h3>

<p>__HTMLTAG_520___Keycloakify</a> を使用する — React で Keycloak テーマを作成するための特殊なフレームワーク:</p>

___プレコード_23___

<h3 id="112-keycloakify-login-page-example"><strong>11.2 Keycloakify ログインページの例</strong></h3>

___プレコード_24___

<h2 id="12-email-theme-customization"><strong>12.電子メールのテーマのカスタマイズ_</strong></h2>

<p>メール テーマには、テンプレートごとに HTML とプレーン テキストの 2 つのバージョンがあります。</p>

___プレコード_25___

___プレコード_26___

<h2 id="13-ap-dung-theme-vao-realm"><strong>13.テーマをレルムに適用</strong></h2>

<h3 id="131-qua-admin-console"><strong>13.1 管理コンソール経由</strong></h3><ol>
<li>管理コンソールにログイン__HTMLTAG_543___
<li>構成するレルムを選択__HTMLTAG_545___
<li><strong>レルム設定 → テーマ</strong></li> に移動します
<li>各タイプのテーマを選択してください:
<ul>
<li>ログイン テーマ: <code>my-custom-theme</code></li>
<li>アカウントのテーマ: <code>カスタムテーマ</code></li>
<li>管理コンソールのテーマ: (デフォルトのまま)</li>
<li>メールのテーマ: <code>my-custom-theme</code></li>
</ul>
</li>
<li>クリック__HTMLTAG_569___保存</strong></li>
</ol>

<h3 id="132-qua-rest-api"><strong>13.2 REST API経由</strong></h3>

___プレコード_27___

<h2 id="14-best-practices"><strong>14.ベスト プラクティス</strong></h2>

<ul>
<li><strong>常に親テーマを使用</strong> — 最初から作成するのではなく、__HTMLTAG_585___keycloak.v2</code> から継承します。 Keycloakをアップグレードするときは互換性を確保してください。</li>
<li><strong>_変更する必要があるもののみを上書きします__HTMLTAG_590___ — テンプレート全体をコピーしないでください。カスタマイズするテンプレートのファイルのみを作成してください。</li>
<li><strong>クライアントごとにテーマを分離</strong> — 複数のアプリケーションがある場合、クライアントごとに異なるテーマを使用できます (レルム設定またはクライアントレベルのテーマのオーバーライド)。</li>
<li><strong>複数のブラウザでテスト</strong> — 特にログイン ページはモバイルでも動作する必要があります。</li>
<li><strong>_i18n を使用</strong> — テンプレートではハードコードされたテキストではなく、常にメッセージ キーを使用します。</li>
<li><strong>バージョン管理テーマ</strong> — テーマを別の Git リポジトリまたは同じプロジェクトで管理します。</li>
<li><strong>CI/CD パイプライン</strong> — CI で JAR テーマを構築し、Keycloak コンテナでテストし、自動的にデプロイします。</li>
</ul>