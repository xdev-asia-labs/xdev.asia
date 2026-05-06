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
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: テーマ、イベント、セキュリティ、および Vault</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tong-quan-ve-keycloak-themes"><strong>1. Keycloakテーマの概要</strong></h2>

<p>Keycloakを使用すると、システムを通じてユーザーインターフェイスを完全にカスタマイズできます<strong>テーマ</strong>。各テーマは、ログインページから通知メールに至るまで、Keycloak の特定の部分のルックアンドフィールを制御します。</p>

<h3 id="11-theme-types"><strong>1.1 テーマの種類</strong></h3>

<p>キークロークのサポート<strong>5種類のテーマ</strong>:</p>

<table>
<thead>
<tr><th>テーマの種類</th><th>説明する</th><th>該当ページ</th></tr>
</thead>
<tbody>
<tr><td><strong>ログイン</strong></td><td>ログイン、登録、パスワードリセットインターフェイス</td><td>ログイン、登録、OTP、パスワードのリセット、エラー</td></tr>
<tr><td><strong>アカウント</strong></td><td>ユーザーアカウント管理ページ</td><td>アカウント コンソール (v3 React ベース)</td></tr>
<tr><td><strong>管理者</strong></td><td>管理コンソールのインターフェース</td><td>管理コンソール (React ベース)</td></tr>
<tr><td><strong>電子メール</strong></td><td>ユーザーに送信される電子メール テンプレート</td><td>電子メールの確認、パスワードのリセット、イベント通知</td></tr>
<tr><td><strong>いらっしゃいませ</strong></td><td>デフォルトのようこそページ</td><td>ルート URL にアクセスしたときのランディング ページ</td></tr>
</tbody>
</table>

<h3 id="12-theme-mac-dinh"><strong>1.2 デフォルトのテーマ</strong></h3>

<p>Keycloakには利用可能なテーマが付属しています:</p>

<ul>
<li><strong>キーマント</strong>— ログイン、アカウント、電子メールのデフォルトのテーマ</li>
<li><strong>keycloak.v2</strong>— ログイン用の新しいテーマ (Keycloak 24+)、アカウントコンソール v3</li>
<li><strong>ベース</strong>(非推奨) — 基本テーマ。親として使用しないでください。</li>
</ul>

<h2 id="2-cau-truc-thu-muc-theme"><strong>2. テーマフォルダー構造</strong></h2>

<p>各テーマは、標準のフォルダー構造に従って編成されています。</p>

<pre><code>themes/
└── my-custom-theme/
    ├── login/
    │   ├── theme.properties
    │   ├── resources/
    │   │   ├── css/
    │   │   │   └── styles.css
    │   │   ├── js/
    │   │   │   └── custom.js
    │   │   └── img/
    │   │       └── logo.png
    │   ├── templates/
    │   │   ├── login.ftl
    │   │   ├── register.ftl
    │   │   └── error.ftl
    │   └── messages/
    │       ├── messages_en.properties
    │       └── messages_vi.properties
    ├── account/
    │   ├── theme.properties
    │   └── ...
    └── email/
        ├── theme.properties
        ├── html/
        │   └── email-verification.ftl
        └── text/
            └── email-verification.ftl
</code></pre>

<h3 id="21-cac-thu-muc-chinh"><strong>2.1 メインディレクトリ</strong></h3>

<table>
<thead>
<tr><th>ディレクトリ</th><th>目的</th></tr>
</thead>
<tbody>
<tr><td><code>リソース/</code></td><td>CSS、JavaScript、静的画像</td></tr>
<tr><td><code>テンプレート/</code></td><td>FreeMarker テンプレート ファイル (.ftl)</td></tr>
<tr><td><code>メッセージ/</code></td><td>多言語用のファイル i18n</td></tr>
</tbody>
</table>

<h2 id="3-theme-properties-file"><strong>3. テーマプロパティファイル</strong></h2>

<p>ファイル<code>テーマ.プロパティ</code>は、各テーマ タイプの中心的な構成ファイルです。</p>

<pre><code class="language-properties"># themes/my-custom-theme/login/theme.properties

# Kế thừa từ theme keycloak (sử dụng tất cả template/resource chưa override)
parent=keycloak.v2

# Import resources từ theme khác (common resources)
import=common/keycloak

# CSS files (thêm custom CSS)
styles=css/login.css css/styles.css

# Locales hỗ trợ
locales=en,vi

# Script files
scripts=js/custom.js

# Cache control (cho production)
cacheControl=max-age=2592000
</code></pre>

<h3 id="31-cac-thuoc-tinh-quan-trong"><strong>3.1 重要な特性</strong></h3>

<table>
<thead>
<tr><th>財産</th><th>説明する</th><th>例えば</th></tr>
</thead>
<tbody>
<tr><td><code>親。親</code></td><td>継承する親テーマ</td><td><code>親=keycloak.v2</code></td></tr>
<tr><td><code>輸入</code></td><td>別のテーマからリソースをインポートする</td><td><code>import=common/keycloak</code></td></tr>
<tr><td><code>スタイル。スタイル</code></td><td>CSS ファイルのリスト (スペース区切り)</td><td><code>スタイル=css/login.css css/custom.css</code></td></tr>
<tr><td><code>スクリプト</code></td><td>JavaScript ファイル</td><td><code>スクリプト=js/app.js</code></td></tr>
<tr><td><code>ロケール</code></td><td>言語サポート</td><td><code>ロケール=en、vi、ja</code></td></tr>
</tbody>
</table>

<h2 id="4-freemarker-template-engine"><strong>4.FreeMarkerテンプレートエンジン</strong></h2>

<p>キークロークの使用<strong>Apache フリーマーカー</strong>ログインおよび電子メールテーマのテンプレートエンジンとして。 FreeMarker を使用すると、変数とロジックを使用して動的な HTML を生成できます。</p>

<h3 id="41-cu-phap-co-ban"><strong>4.1 基本的な構文</strong></h3>

<pre><code class="language-html">&lt;!-- Biến --&gt;
${realm.displayName}
${url.loginAction}
${messagesPerField.printIfExists('username','has-error')}

&lt;!-- Điều kiện --&gt;
&lt;#if realm.password&gt;
  &lt;!-- Form đăng nhập bằng password --&gt;
&lt;/#if&gt;

&lt;#if social.providers??&gt;
  &lt;!-- Hiển thị social login buttons --&gt;
  &lt;#list social.providers as p&gt;
    &lt;a href="${p.loginUrl}"&gt;${p.displayName}&lt;/a&gt;
  &lt;/#list&gt;
&lt;/#if&gt;

&lt;!-- Macro --&gt;
&lt;#macro registrationLayout&gt;
  &lt;!-- Layout wrapper --&gt;
&lt;/#macro&gt;
</code></pre>

<h3 id="42-cac-bien-co-san"><strong>4.2 ログインテーマで利用可能な変数</strong></h3>

<table>
<thead>
<tr><th>変数</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td><code>領域。レルム</code></td><td>レルム情報 (表示名、登録許可、パスワード、ソーシャル...)</td></tr>
<tr><td><code>URL</code></td><td>URL (loginAction、registrationUrl、loginResetCredentialsUrl...)</td></tr>
<tr><td><code>クライアント</code></td><td>クライアントがログインを要求しています (名前、クライアント ID...)</td></tr>
<tr><td><code>ログイン</code></td><td>フォームデータ (入力されたユーザー名...)</td></tr>
<tr><td><code>メッセージ。メッセージ</code></td><td>エラー/成功メッセージ</td></tr>
<tr><td><code>フィールドごとのメッセージ</code></td><td>各フィールドの検証メッセージ</td></tr>
<tr><td><code>社交。社交</code></td><td>ソーシャルログインプロバイダー</td></tr>
<tr><td><code>ロケール</code></td><td>現在のロケールとサポートされているロケールのリスト</td></tr>
</tbody>
</table>

<h2 id="5-override-template-cu-the"><strong>5. 特定のテンプレートをオーバーライドする</strong></h2>

<p>変更したいテンプレートをオーバーライドするだけです。残りのテンプレートは親テーマから継承されます。</p>

<h3 id="51-override-login-page"><strong>5.1 ログインページの上書き</strong></h3>

<pre><code class="language-html">&lt;!-- themes/my-custom-theme/login/templates/login.ftl --&gt;
&lt;#import "template.ftl" as layout&gt;

&lt;@layout.registrationLayout
    displayMessage=!messagesPerField.existsError('username','password')
    displayInfo=realm.password &amp;&amp; realm.registrationAllowed
    ; section&gt;

    &lt;#if section = "header"&gt;
        &lt;div class="custom-header"&gt;
            &lt;img src="${url.resourcesPath}/img/logo.png" alt="Logo" class="login-logo" /&gt;
            &lt;h1&gt;${msg("loginAccountTitle")}&lt;/h1&gt;
        &lt;/div&gt;
    &lt;#elseif section = "form"&gt;
        &lt;div class="custom-login-form"&gt;
            &lt;form action="${url.loginAction}" method="post"&gt;
                &lt;div class="form-group"&gt;
                    &lt;label for="username"&gt;
                        &lt;#if !realm.loginWithEmailAllowed&gt;
                            ${msg("username")}
                        &lt;#elseif !realm.registrationEmailAsUsername&gt;
                            ${msg("usernameOrEmail")}
                        &lt;#else&gt;
                            ${msg("email")}
                        &lt;/#if&gt;
                    &lt;/label&gt;
                    &lt;input id="username" name="username" type="text"
                           value="${(login.username!'')}"
                           class="form-control ${messagesPerField.printIfExists('username','has-error')}"
                           autofocus autocomplete="username" /&gt;
                    &lt;#if messagesPerField.existsError('username')&gt;
                        &lt;span class="error-message"&gt;${messagesPerField.get('username')}&lt;/span&gt;
                    &lt;/#if&gt;
                &lt;/div&gt;

                &lt;div class="form-group"&gt;
                    &lt;label for="password"&gt;${msg("password")}&lt;/label&gt;
                    &lt;input id="password" name="password" type="password"
                           class="form-control ${messagesPerField.printIfExists('password','has-error')}"
                           autocomplete="current-password" /&gt;
                    &lt;#if messagesPerField.existsError('password')&gt;
                        &lt;span class="error-message"&gt;${messagesPerField.get('password')}&lt;/span&gt;
                    &lt;/#if&gt;
                &lt;/div&gt;

                &lt;div class="form-actions"&gt;
                    &lt;#if realm.rememberMe &amp;&amp; !usernameHidden??&gt;
                        &lt;label class="remember-me"&gt;
                            &lt;input id="rememberMe" name="rememberMe" type="checkbox"
                                   &lt;#if login.rememberMe??&gt;checked&lt;/#if&gt;&gt;
                            ${msg("rememberMe")}
                        &lt;/label&gt;
                    &lt;/#if&gt;

                    &lt;button type="submit" class="btn btn-primary"&gt;
                        ${msg("doLogIn")}
                    &lt;/button&gt;
                &lt;/div&gt;
            &lt;/form&gt;

            &lt;#if realm.password &amp;&amp; realm.registrationAllowed&gt;
                &lt;div class="register-link"&gt;
                    ${msg("noAccount")}
                    &lt;a href="${url.registrationUrl}"&gt;${msg("doRegister")}&lt;/a&gt;
                &lt;/div&gt;
            &lt;/#if&gt;
        &lt;/div&gt;
    &lt;/#if&gt;
&lt;/@layout.registrationLayout&gt;
</code></pre>

<h3 id="52-override-register-page"><strong>5.2 登録ページの上書き</strong></h3>

<pre><code class="language-html">&lt;!-- themes/my-custom-theme/login/templates/register.ftl --&gt;
&lt;#import "template.ftl" as layout&gt;

&lt;@layout.registrationLayout
    displayMessage=!messagesPerField.existsError('firstName','lastName','email','username','password','password-confirm')
    ; section&gt;

    &lt;#if section = "header"&gt;
        &lt;h1&gt;${msg("registerTitle")}&lt;/h1&gt;
    &lt;#elseif section = "form"&gt;
        &lt;form action="${url.registrationAction}" method="post"&gt;
            &lt;div class="form-group"&gt;
                &lt;label for="firstName"&gt;${msg("firstName")}&lt;/label&gt;
                &lt;input id="firstName" name="firstName" type="text"
                       value="${(register.formData.firstName!'')}"
                       class="form-control" /&gt;
            &lt;/div&gt;

            &lt;div class="form-group"&gt;
                &lt;label for="lastName"&gt;${msg("lastName")}&lt;/label&gt;
                &lt;input id="lastName" name="lastName" type="text"
                       value="${(register.formData.lastName!'')}"
                       class="form-control" /&gt;
            &lt;/div&gt;

            &lt;div class="form-group"&gt;
                &lt;label for="email"&gt;${msg("email")}&lt;/label&gt;
                &lt;input id="email" name="email" type="email"
                       value="${(register.formData.email!'')}"
                       class="form-control" autocomplete="email" /&gt;
            &lt;/div&gt;

            &lt;button type="submit" class="btn btn-primary"&gt;
                ${msg("doRegister")}
            &lt;/button&gt;

            &lt;div class="back-to-login"&gt;
                &lt;a href="${url.loginUrl}"&gt;${msg("backToLogin")}&lt;/a&gt;
            &lt;/div&gt;
        &lt;/form&gt;
    &lt;/#if&gt;
&lt;/@layout.registrationLayout&gt;
</code></pre>

<h3 id="53-override-error-page"><strong>5.3 オーバーライドエラーページ</strong></h3>

<pre><code class="language-html">&lt;!-- themes/my-custom-theme/login/templates/error.ftl --&gt;
&lt;#import "template.ftl" as layout&gt;

&lt;@layout.registrationLayout displayMessage=false; section&gt;
    &lt;#if section = "header"&gt;
        ${kcSanitize(msg("errorTitle"))?no_esc}
    &lt;#elseif section = "form"&gt;
        &lt;div class="error-container"&gt;
            &lt;div class="alert alert-error"&gt;
                &lt;span class="error-icon"&gt;⚠&lt;/span&gt;
                ${kcSanitize(message.summary)?no_esc}
            &lt;/div&gt;
            &lt;#if skipLink??&gt;
            &lt;#else&gt;
                &lt;#if client?? &amp;&amp; client.baseUrl?has_content&gt;
                    &lt;a href="${client.baseUrl}" class="btn btn-primary"&gt;
                        ${kcSanitize(msg("backToApplication"))?no_esc}
                    &lt;/a&gt;
                &lt;/#if&gt;
            &lt;/#if&gt;
        &lt;/div&gt;
    &lt;/#if&gt;
&lt;/@layout.registrationLayout&gt;
</code></pre>

<h2 id="6-custom-css-va-javascript"><strong>6. カスタム CSS と JavaScript</strong></h2>

<h3 id="61-them-custom-css"><strong>6.1 カスタムCSSの追加</strong></h3>

<pre><code class="language-css">/* themes/my-custom-theme/login/resources/css/styles.css */

/* Override login page styles */
.login-pf body {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    font-family: 'Inter', -apple-system, sans-serif;
}

/* Custom login card */
#kc-login {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    padding: 40px;
    max-width: 440px;
    margin: 0 auto;
}

/* Logo */
.login-logo {
    max-width: 180px;
    margin: 0 auto 24px;
    display: block;
}

/* Form inputs */
.form-control {
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 14px;
    transition: border-color 0.2s;
}

.form-control:focus {
    border-color: #0f3460;
    box-shadow: 0 0 0 3px rgba(15, 52, 96, 0.1);
    outline: none;
}

.form-control.has-error {
    border-color: #e74c3c;
}

/* Primary button */
.btn-primary {
    background: #0f3460;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    cursor: pointer;
    transition: background 0.2s;
}

.btn-primary:hover {
    background: #1a4a7a;
}

/* Social login buttons */
.social-links {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
}
</code></pre>

<h3 id="62-them-custom-javascript"><strong>6.2 カスタム JavaScript の追加</strong></h3>

<pre><code class="language-javascript">// themes/my-custom-theme/login/resources/js/custom.js

document.addEventListener('DOMContentLoaded', function() {
    // Password visibility toggle
    const passwordField = document.getElementById('password');
    if (passwordField) {
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.className = 'password-toggle';
        toggleBtn.textContent = '👁';
        toggleBtn.addEventListener('click', function() {
            passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
        });
        passwordField.parentNode.appendChild(toggleBtn);
    }

    // Form validation enhancement
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Đang xử lý...';
            }
        });
    }
});
</code></pre>

<h2 id="7-internationalization-i18n"><strong>7. 国際化 (i18n)</strong></h2>

<p>Keycloakはファイルを通じて複数の言語をサポートします<code>メッセージ_{ロケール}.properties</code>.</p>

<h3 id="71-tao-file-tieng-viet"><strong>7.1 ベトナム語ファイルの作成</strong></h3>

<pre><code class="language-properties"># themes/my-custom-theme/login/messages/messages_vi.properties

# Login form
loginAccountTitle=Đăng nhập vào tài khoản
username=Tên đăng nhập
usernameOrEmail=Tên đăng nhập hoặc Email
password=Mật khẩu
rememberMe=Ghi nhớ đăng nhập
doLogIn=Đăng nhập
noAccount=Chưa có tài khoản?
doRegister=Đăng ký ngay

# Registration
registerTitle=Tạo tài khoản mới
firstName=Họ
lastName=Tên
email=Địa chỉ email
doRegister=Đăng ký

# Errors
invalidUserMessage=Tên đăng nhập hoặc mật khẩu không đúng.
accountDisabledMessage=Tài khoản đã bị vô hiệu hóa. Vui lòng liên hệ quản trị viên.

# Password reset
emailForgotTitle=Quên mật khẩu?
backToLogin=Quay lại đăng nhập

# Custom messages
welcomeMessage=Chào mừng bạn đến với hệ thống
companyName=Công ty của bạn
</code></pre>

<h3 id="72-override-tin-nhan-tieng-anh"><strong>7.2 英語メッセージを上書きする</strong></h3>

<pre><code class="language-properties"># themes/my-custom-theme/login/messages/messages_en.properties

# Override default messages
loginAccountTitle=Sign in to your account
welcomeMessage=Welcome to our platform
companyName=Your Company

# Custom messages cho branding
loginTitleHtml=&lt;strong&gt;Welcome&lt;/strong&gt; to {0}
</code></pre>

<h3 id="73-su-dung-i18n-trong-template"><strong>7.3 テンプレートでの i18n の使用</strong></h3>

<pre><code class="language-html">&lt;!-- Sử dụng message key --&gt;
&lt;h1&gt;${msg("loginAccountTitle")}&lt;/h1&gt;

&lt;!-- Message với tham số --&gt;
&lt;p&gt;${msg("loginTitleHtml", realm.displayName)}&lt;/p&gt;

&lt;!-- Kiểm tra message tồn tại --&gt;
&lt;#if msg("welcomeMessage")?has_content&gt;
    &lt;p class="welcome"&gt;${msg("welcomeMessage")}&lt;/p&gt;
&lt;/#if&gt;

&lt;!-- Locale selector --&gt;
&lt;#if realm.internationalizationEnabled &amp;&amp; locale.supported?size gt 1&gt;
    &lt;div class="locale-selector"&gt;
        &lt;#list locale.supported as l&gt;
            &lt;a href="${l.url}" class="${(l.label == locale.current)?then('active','')}"&gt;
                ${l.label}
            &lt;/a&gt;
        &lt;/#list&gt;
    &lt;/div&gt;
&lt;/#if&gt;
</code></pre>

<h2 id="8-extending-themes-voi-parent"><strong>8. 保護者と一緒にテーマを拡張する</strong></h2>

<p>テーマの継承により、既存のテーマに基づいて新しいテーマを作成し、変更が必要な部分のみをオーバーライドできます。</p>

<h3 id="81-cach-hoat-dong"><strong>8.1 仕組み</strong></h3>

<pre><code class="language-text">Thứ tự tìm kiếm resource/template:
1. Current theme (my-custom-theme/login/)
2. Parent theme (keycloak.v2/login/)
3. Parent của parent (nếu có)
4. Base resources (import)
</code></pre>

<h3 id="82-multi-level-inheritance"><strong>8.2 マルチレベルの継承</strong></h3>

<pre><code class="language-properties"># themes/company-base/login/theme.properties
parent=keycloak.v2
styles=css/login.css css/company-base.css
locales=en,vi

# themes/company-product-a/login/theme.properties
parent=company-base
styles=css/login.css css/company-base.css css/product-a.css
</code></pre>

<h3 id="83-theme-variants"><strong>8.3 テーマのバリエーション</strong></h3>

<p>Keycloak 24以降では、次のように定義できます。<strong>テーマのバリエーション</strong>同じテーマの異なるバージョンを使用するには:</p>

<pre><code class="language-properties"># theme.properties
parent=keycloak.v2

# Variant definition (admin có thể chọn trong Realm Settings)
variant.light.styles=css/login.css css/light.css
variant.dark.styles=css/login.css css/dark.css
</code></pre>

<h2 id="9-deploying-themes"><strong>9. テーマの展開</strong></h2>

<h3 id="91-standalone-deployment"><strong>9.1 スタンドアロン展開</strong></h3>

<p>テーマをフォルダーにコピー<code>テーマ/</code>キークロークの:</p>

<pre><code class="language-bash"># Cấu trúc standalone
$KEYCLOAK_HOME/
├── themes/
│   └── my-custom-theme/
│       ├── login/
│       │   ├── theme.properties
│       │   ├── resources/
│       │   ├── templates/
│       │   └── messages/
│       └── email/
│           └── ...
</code></pre>

<h3 id="92-docker-deployment"><strong>9.2 Docker のデプロイメント</strong></h3>

<pre><code class="language-dockerfile"># Dockerfile - Simple COPY
FROM quay.io/keycloak/keycloak:26.1 AS builder

# Copy custom theme
COPY themes/my-custom-theme /opt/keycloak/themes/my-custom-theme

# Build optimized Keycloak
RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:26.1

COPY --from=builder /opt/keycloak/ /opt/keycloak/

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
</code></pre>

<h3 id="93-docker-multi-stage-build-voi-node"><strong>9.3 ノードを使用した Docker マルチステージ ビルド (アカウント v3)</strong></h3>

<pre><code class="language-dockerfile"># Dockerfile - Multi-stage build cho Account Console v3 customization
FROM node:20-alpine AS theme-builder

WORKDIR /theme
COPY account-theme/ .
RUN npm ci &amp;&amp; npm run build

FROM quay.io/keycloak/keycloak:26.1 AS keycloak-builder

# Copy login/email themes
COPY themes/my-custom-theme /opt/keycloak/themes/my-custom-theme

# Copy built Account v3 theme
COPY --from=theme-builder /theme/dist /opt/keycloak/themes/my-custom-theme/account

RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:26.1
COPY --from=keycloak-builder /opt/keycloak/ /opt/keycloak/

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
</code></pre>

<h3 id="94-jar-spi-deployment"><strong>9.4 JAR/SPIのデプロイメント</strong></h3>

<p>テーマを JAR ファイルとしてパッケージ化し、SPI プロバイダーとしてデプロイします。</p>

<pre><code class="language-text">my-theme.jar
├── META-INF/
│   └── keycloak-themes.json
└── theme/
    └── my-custom-theme/
        ├── login/
        └── email/
</code></pre>

<pre><code class="language-json">// META-INF/keycloak-themes.json
{
    "themes": [
        {
            "name": "my-custom-theme",
            "types": ["login", "email"]
        }
    ]
}
</code></pre>

<pre><code class="language-bash"># Deploy JAR
cp my-theme.jar $KEYCLOAK_HOME/providers/
$KEYCLOAK_HOME/bin/kc.sh build
</code></pre>

<h2 id="10-theme-development-workflow"><strong>10. テーマ開発ワークフロー</strong></h2>

<h3 id="101-tat-cache-khi-phat-trien"><strong>10.1 開発時にキャッシュをオフにする</strong></h3>

<p>Keycloak キャッシュ テーマはデフォルトで、開発時にはオフにする必要があります。</p>

<pre><code class="language-bash"># Tắt theme caching cho development
bin/kc.sh start-dev \
  --spi-theme-static-max-age=-1 \
  --spi-theme-cache-themes=false \
  --spi-theme-cache-templates=false
</code></pre>

<h3 id="102-docker-compose-dev"><strong>10.2 開発用の Docker Compose</strong></h3>

<pre><code class="language-yaml"># docker-compose.dev.yml
services:
  keycloak:
    image: quay.io/keycloak/keycloak:26.1
    command:
      - start-dev
      - --spi-theme-static-max-age=-1
      - --spi-theme-cache-themes=false
      - --spi-theme-cache-templates=false
    volumes:
      # Mount theme directory cho hot-reload
      - ./themes/my-custom-theme:/opt/keycloak/themes/my-custom-theme
    environment:
      KC_DB: postgres
      KC_DB_URL: jdbc:postgresql://postgres:5432/keycloak
      KC_DB_USERNAME: keycloak
      KC_DB_PASSWORD: keycloak
      KC_BOOTSTRAP_ADMIN_USERNAME: admin
      KC_BOOTSTRAP_ADMIN_PASSWORD: admin
    ports:
      - "8080:8080"
    depends_on:
      - postgres

  postgres:
    image: postgres:17
    environment:
      POSTGRES_DB: keycloak
      POSTGRES_USER: keycloak
      POSTGRES_PASSWORD: keycloak
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
</code></pre>

<h3 id="103-workflow-phat-trien"><strong>10.3 開発ワークフロー</strong></h3>

<pre><code class="language-bash"># 1. Khởi chạy dev environment
docker compose -f docker-compose.dev.yml up -d

# 2. Chỉnh sửa file theme (CSV, FTL, properties)
# Thay đổi sẽ tự động reflect (vì cache đã tắt)

# 3. Refresh browser để xem thay đổi
# Không cần restart Keycloak!

# 4. Áp dụng theme vào Realm
# Admin Console → Realm Settings → Themes → Login Theme: my-custom-theme
</code></pre>

<h2 id="11-react-account-console-v3"><strong>11. React アカウント コンソール v3 のカスタマイズ</strong></h2>

<p>アカウント コンソール v3 が使用するもの<strong>反応 + パターンフライ</strong>。カスタマイズするには、カスタム React アプリを構築する必要があります。</p>

<h3 id="111-keycloakify"><strong>11.1 Keycloakify (推奨)</strong></h3>

<p>使用<a href="https://www.keycloakify.dev/">Keycloakify</a>— React で Keycloak テーマを作成するための特殊なフレームワーク:</p>

<pre><code class="language-bash"># Tạo project mới với Keycloakify
npx create-keycloakify-project my-keycloak-theme
cd my-keycloak-theme

# Cấu trúc project
my-keycloak-theme/
├── src/
│   ├── login/          # Login theme pages
│   │   ├── KcPage.tsx
│   │   ├── pages/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── ...
│   │   └── i18n.ts
│   └── account/        # Account theme pages
├── public/
│   └── ...
├── package.json
└── vite.config.ts

# Dev mode
npm run dev

# Build JAR
npm run build-keycloak-theme
# Output: dist_keycloak/my-keycloak-theme.jar
</code></pre>

<h3 id="112-keycloakify-login-page-example"><strong>11.2 Keycloakify ログインページの例</strong></h3>

<pre><code class="language-tsx">// src/login/pages/Login.tsx
import { type PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";

export default function Login(props: PageProps&lt;Extract&lt;KcContext, { pageId: "login.ftl" }&gt;, I18n&gt;) {
    const { kcContext, i18n, Template } = props;
    const { url, realm, social, login } = kcContext;
    const { msg } = i18n;

    return (
        &lt;Template kcContext={kcContext} i18n={i18n}&gt;
            &lt;div className="custom-login"&gt;
                &lt;img src={`${url.resourcesPath}/img/logo.png`} alt="Logo" /&gt;
                &lt;h1&gt;{msg("loginAccountTitle")}&lt;/h1&gt;

                &lt;form action={url.loginAction} method="post"&gt;
                    &lt;input
                        name="username"
                        defaultValue={login.username ?? ""}
                        placeholder={msg("usernameOrEmail")}
                    /&gt;
                    &lt;input
                        name="password"
                        type="password"
                        placeholder={msg("password")}
                    /&gt;
                    &lt;button type="submit"&gt;{msg("doLogIn")}&lt;/button&gt;
                &lt;/form&gt;

                {social?.providers &amp;&amp; (
                    &lt;div className="social-providers"&gt;
                        {social.providers.map(p =&gt; (
                            &lt;a key={p.alias} href={p.loginUrl}&gt;
                                {p.displayName}
                            &lt;/a&gt;
                        ))}
                    &lt;/div&gt;
                )}
            &lt;/div&gt;
        &lt;/Template&gt;
    );
}
</code></pre>

<h2 id="12-email-theme-customization"><strong>12. 電子メールのテーマのカスタマイズ</strong></h2>

<p>電子メールのテーマには、テンプレートごとに HTML とプレーン テキストの 2 つのバージョンがあります。</p>

<pre><code class="language-html">&lt;!-- themes/my-custom-theme/email/html/email-verification.ftl --&gt;
&lt;html&gt;
&lt;body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;"&gt;
    &lt;div style="background: #0f3460; padding: 20px; text-align: center;"&gt;
        &lt;img src="${url.resourcesPath}/img/logo-white.png" alt="Logo" style="max-width: 150px;" /&gt;
    &lt;/div&gt;
    &lt;div style="padding: 30px; background: #ffffff;"&gt;
        &lt;h2&gt;${msg("emailVerificationSubject")}&lt;/h2&gt;
        &lt;p&gt;${msg("emailVerificationBody", linkExpiration, realmName)}&lt;/p&gt;
        &lt;a href="${link}" style="display: inline-block; background: #0f3460; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px;"&gt;
            ${msg("emailVerificationLinkText")}
        &lt;/a&gt;
    &lt;/div&gt;
    &lt;div style="padding: 15px; text-align: center; color: #888; font-size: 12px;"&gt;
        &lt;p&gt;${msg("emailFooter")}&lt;/p&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<pre><code class="language-text">&lt;!-- themes/my-custom-theme/email/text/email-verification.ftl --&gt;
${msg("emailVerificationSubject")}

${msg("emailVerificationBodyPlainText", link, linkExpiration, realmName)}
</code></pre>

<h2 id="13-ap-dung-theme-vao-realm"><strong>13. テーマをレルムに適用する</strong></h2>

<h3 id="131-qua-admin-console"><strong>13.1 管理コンソール経由</strong></h3>

<ol>
<li>管理コンソールにログインします</li>
<li>構成するレルムを選択してください</li>
<li>入力<strong>レルム設定 → テーマ</strong></li>
<li>タイプごとにテーマを選択します。<ul>
<li>ログインテーマ:<code>私のカスタムテーマ</code></li>
<li>アカウントのテーマ:<code>私のカスタムテーマ</code></li>
<li>管理コンソールのテーマ: (デフォルトのまま)</li>
<li>電子メールのテーマ:<code>私のカスタムテーマ</code></li>
</ul>
</li>
<li>プレス<strong>保存</strong></li>
</ol>

<h3 id="132-qua-rest-api"><strong>13.2 REST API経由</strong></h3>

<pre><code class="language-bash"># Cập nhật theme cho realm qua API
curl -X PUT "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "loginTheme": "my-custom-theme",
    "accountTheme": "my-custom-theme",
    "emailTheme": "my-custom-theme"
  }'
</code></pre>

<h2 id="14-best-practices"><strong>14. ベストプラクティス</strong></h2>

<ul>
<li><strong>常に親テーマを使用する</strong>— から継承<code>keycloak.v2</code>最初から書くのではなく。 Keycloakをアップグレードする際は互換性を確保してください。</li>
<li><strong>変更する必要があるもののみをオーバーライドする</strong>— テンプレート全体をコピーしないでください。カスタマイズするテンプレートのファイルのみを作成します。</li>
<li><strong>クライアントごとにテーマを分ける</strong>— 複数のアプリケーションがある場合は、クライアントごとに異なるテーマを使用できます (レルム設定またはクライアントレベルのテーマのオーバーライド)。</li>
<li><strong>複数のブラウザでテスト済み</strong>— 特に、ログイン ページはモバイルでも機能する必要があります。</li>
<li><strong>i18n を使用する</strong>— テンプレートではハードコードされたテキストではなく、常にメッセージ キーを使用します。</li>
<li><strong>バージョン管理テーマ</strong>— テーマを別の Git リポジトリまたは同じプロジェクトで管理します。</li>
<li><strong>CI/CD パイプライン</strong>— CIでJARテーマを構築し、Keycloakコンテナでテストし、自動的にデプロイします。</li>
</ul>
