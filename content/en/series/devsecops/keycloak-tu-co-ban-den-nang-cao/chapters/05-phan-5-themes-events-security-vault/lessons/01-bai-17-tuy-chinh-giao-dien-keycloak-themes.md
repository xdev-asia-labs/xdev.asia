---
id: 019d8b30-b117-7001-c001-e0c5f8100117
title: 'Lesson 17: Customize the Keycloak interface - Themes'
slug: bai-17-tuy-chinh-giao-dien-keycloak-themes
description: Theme types (Login, Account, Admin, Email, Welcome), theme directory structure, custom theme creation, theme properties file, FreeMarker template engine, override specific templates, i18n messages, using custom CSS/JS, extending themes (parent), deploying themes (standalone, Docker, JAR/SPI), theme caching and theme development workflow.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 17
section_title: 'Part 5: Themes, Events, Security and Vault'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak from Basic to Advanced
  slug: keycloak-tu-co-ban-den-nang-cao
locale: en
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
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — Lesson 17</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 17: Customizing the Keycloak interface -</tspan>
      <tspan x="60" dy="42">Themes</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Themes, Events, Security and Vault</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tong-quan-ve-keycloak-themes"><strong>1. Overview of Keycloak Themes</strong></h2>

<p>Keycloak allows for complete customization of the user interface through the <strong>Themes</strong> system. Each theme controls the look and feel of a specific part of Keycloak, from the login page to notification emails.</p>

<h3 id="11-theme-types"><strong>1.1 Theme Types</strong></h3>

<p>Keycloak supports <strong>5 theme types</strong>:</p>

<table>
<thead>
<tr><th>Theme Type</th><th>Description</th><th>Applicable page</th></tr>
</thead>
<tbody>
<tr><td><strong>Login</strong></td><td>Login, registration, password reset interface</td><td>Login, Register, OTP, Reset Password, Error</td></tr>
<tr><td><strong>Account</strong></td><td>User account management page</td><td>Account Console (v3 React-based)</td></tr>
<tr><td><strong>Admin</strong></td><td>Admin Console interface</td><td>Admin Console (React-based)</td></tr>
<tr><td><strong>Email</strong></td><td>Template email sent to user</td><td>Verify Email, Reset Password, Event notifications</td></tr>
<tr><td><strong>Welcome</strong></td><td>Default welcome page</td><td>Landing page when accessing root URL</td></tr>
</tbody>
</table>

<h3 id="12-theme-mac-dinh"><strong>1.2 Default Theme</strong></h3>

<p>Keycloak comes with available themes:</p>

<ul>
<li><strong>keycloak</strong> — Default theme for Login, Account, Email</li>
<li><strong>keycloak.v2</strong> — New Theme for Login (Keycloak 24+), Account Console v3</li>
<li><strong>base</strong> (deprecated) — Base theme, should no longer be used as parent</li>
</ul>

<h2 id="2-cau-truc-thu-muc-theme"><strong>2. Theme</strong></h2> folder structure

<p>Each theme is organized according to a standard folder structure:</p>

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

<h3 id="21-cac-thu-muc-chinh"><strong>2.1 Main folders</strong></h3>

<table>
<thead>
<tr><th>Folder</th><th>Purpose</th></tr>
</thead>
<tbody>
<tr><td><code>resources/</code></td><td>CSS, JavaScript, static images</td></tr>
<tr><td><code>templates/</code></td><td>FreeMarker template files (.ftl)</td></tr>
<tr><td><code>messages/</code></td><td>File i18n for multilingual</td></tr>
</tbody>
</table>

<h2 id="3-theme-properties-file"><strong>3. Theme Properties File</strong></h2>

<p>File <code>theme.properties</code> is the central configuration file of each theme type:</p>

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

<h3 id="31-cac-thuoc-tinh-quan-trong"><strong>3.1 Important attributes</strong></h3>

<table>
<thead>
<tr><th>Property</th><th>Description</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td><code>parent</code></td><td>Parent theme to inherit</td><td><code>parent=keycloak.v2</code></td></tr>
<tr><td><code>import</code></td><td>Import resources from another theme</td><td><code>import=common/keycloak</code></td></tr>
<tr><td><code>styles</code></td><td>List of CSS files (space-separated)</td><td><code>styles=css/login.css css/custom.css</code></td></tr>
<tr><td><code>scripts</code></td><td>JavaScript files</td><td><code>scripts=js/app.js</code></td></tr>
<tr><td><code>locales</code></td><td>Supported languages</td><td><code>locales=en,vi,ja</code></td></tr>
</tbody>
</table>

<h2 id="4-freemarker-template-engine"><strong>4. FreeMarker Template Engine</strong></h2>

<p>Keycloak uses <strong>Apache FreeMarker</strong> as the template engine for Login and Email themes. FreeMarker allows dynamic HTML generation with variables and logic.</p>

<h3 id="41-cu-phap-co-ban"><strong>4.1 Basic syntax</strong></h3>

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

<h3 id="42-cac-bien-co-san"><strong>4.2 Variables available in Login Theme</strong></h3>

<table>
<thead>
<tr><th>Variable</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><code>realm</code></td><td>Realm information (displayName, registrationAllowed, password, social...)</td></tr>
<tr><td><code>url</code></td><td>URLs (loginAction, registrationUrl, loginResetCredentialsUrl...)</td></tr>
<tr><td><code>client</code></td><td>Client is requesting login (name, clientId...)</td></tr>
<tr><td><code>login</code></td><td>Form data (entered username...)</td></tr>
<tr><td><code>message</code></td><td>Error/success message</td></tr>
<tr><td><code>messagesPerField</code></td><td>Validation messages for each field</td></tr>
<tr><td><code>social</code></td><td>Social login providers</td></tr>
<tr><td><code>locale</code></td><td>Current locale and list of supported locales</td></tr>
</tbody>
</table>

<h2 id="5-override-template-cu-the"><strong>5. Override specific Template</strong></h2>

<p>You only need to override the templates you want to change. The remaining templates will be inherited from the parent theme.</p>

<h3 id="51-override-login-page"><strong>5.1 Override Login Page</strong></h3>

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

<h3 id="52-override-register-page"><strong>5.2 Override Register Page</strong></h3>

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

<h3 id="53-override-error-page"><strong>5.3 Override Error Page</strong></h3>

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

<h2 id="6-custom-css-va-javascript"><strong>6. Custom CSS and JavaScript</strong></h2>

<h3 id="61-them-custom-css"><strong>6.1 Add Custom CSS</strong></h3>

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

<h3 id="62-them-custom-javascript"><strong>6.2 Add Custom JavaScript</strong></h3>

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

<h2 id="7-internationalization-i18n"><strong>7. Internationalization (i18n)</strong></h2>

<p>Keycloak supports multiple languages ​​through the file <code>messages_{locale}.properties</code>.</p>

<h3 id="71-tao-file-tieng-viet"><strong>7.1 Create Vietnamese file</strong></h3>

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

<h3 id="72-override-tin-nhan-tieng-anh"><strong>7.2 Override English messages</strong></h3>

<pre><code class="language-properties"># themes/my-custom-theme/login/messages/messages_en.properties

# Override default messages
loginAccountTitle=Sign in to your account
welcomeMessage=Welcome to our platform
companyName=Your Company

# Custom messages cho branding
loginTitleHtml=&lt;strong&gt;Welcome&lt;/strong&gt; to {0}
</code></pre>

<h3 id="73-su-dung-i18n-trong-template"><strong>7.3 Using i18n in template</strong></h3>

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

<h2 id="8-extending-themes-voi-parent"><strong>8. Extending Themes with Parent</strong></h2>

<p>Theme inheritance allows creating new themes based on existing themes, only overriding the parts that need to be changed.</p>

<h3 id="81-cach-hoat-dong"><strong>8.1 How it works</strong></h3>

<pre><code class="language-text">Thứ tự tìm kiếm resource/template:
1. Current theme (my-custom-theme/login/)
2. Parent theme (keycloak.v2/login/)
3. Parent của parent (nếu có)
4. Base resources (import)
</code></pre>

<h3 id="82-multi-level-inheritance"><strong>8.2 Multi-level Inheritance</strong></h3>

<pre><code class="language-properties"># themes/company-base/login/theme.properties
parent=keycloak.v2
styles=css/login.css css/company-base.css
locales=en,vi

# themes/company-product-a/login/theme.properties
parent=company-base
styles=css/login.css css/company-base.css css/product-a.css
</code></pre>

<h3 id="83-theme-variants"><strong>8.3 Theme Variants</strong></h3>

<p>From Keycloak 24+, you can define <strong>theme variants</strong> to have multiple versions of the same theme:</p>

<pre><code class="language-properties"># theme.properties
parent=keycloak.v2

# Variant definition (admin có thể chọn trong Realm Settings)
variant.light.styles=css/login.css css/light.css
variant.dark.styles=css/login.css css/dark.css
</code></pre>

<h2 id="9-deploying-themes"><strong>9. Deploying Themes</strong></h2>

<h3 id="91-standalone-deployment"><strong>9.1 Standalone Deployment</strong></h3>

<p>Copy theme to Keycloak's <code>themes/</code> folder:</p>

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

<h3 id="92-docker-deployment"><strong>9.2 Docker Deployment</strong></h3>

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

<h3 id="93-docker-multi-stage-build-voi-node"><strong>9.3 Docker Multi-stage Build with Node (Account v3)</strong></h3>

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

<h3 id="94-jar-spi-deployment"><strong>9.4 JAR/SPI Deployment</strong></h3>

<p>Package the theme as a JAR file to deploy as SPI provider:</p>

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

<h2 id="10-theme-development-workflow"><strong>10. Theme Development Workflow</strong></h2>

<h3 id="101-tat-cache-khi-phat-trien"><strong>10.1 Turn off cache during development</strong></h3>

<p>Default Keycloak cache themes, need to turn off when developing:</p>

<pre><code class="language-bash"># Tắt theme caching cho development
bin/kc.sh start-dev \
  --spi-theme-static-max-age=-1 \
  --spi-theme-cache-themes=false \
  --spi-theme-cache-templates=false
</code></pre>

<h3 id="102-docker-compose-dev"><strong>10.2 Docker Compose cho Development</strong></h3>

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

<h3 id="103-workflow-phat-trien"><strong>10.3 Development Workflow</strong></h3>

<pre><code class="language-bash"># 1. Khởi chạy dev environment
docker compose -f docker-compose.dev.yml up -d

# 2. Chỉnh sửa file theme (CSV, FTL, properties)
# Thay đổi sẽ tự động reflect (vì cache đã tắt)

# 3. Refresh browser để xem thay đổi
# Không cần restart Keycloak!

# 4. Áp dụng theme vào Realm
# Admin Console → Realm Settings → Themes → Login Theme: my-custom-theme
</code></pre>

<h2 id="11-react-account-console-v3"><strong>11. React Account Console v3 Customization</strong></h2>

<p>Account Console v3 uses <strong>React + PatternFly</strong>. To customize, you need to build custom React app.</p>

<h3 id="111-keycloakify"><strong>11.1 Keycloakify (Recommended)</strong></h3>

<p>Use <a href="__P0__">Keycloakify</a> — a specialized framework for creating Keycloak themes with React:</p>

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

<h3 id="112-keycloakify-login-page-example"><strong>11.2 Keycloakify Login Page Example</strong></h3>

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

<h2 id="12-email-theme-customization"><strong>12. Email Theme Customization</strong></h2>

<p>Email themes come in two versions per template: HTML and plain text.</p>

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

<h2 id="13-ap-dung-theme-vao-realm"><strong>13. Apply Theme to Realm</strong></h2>

<h3 id="131-qua-admin-console"><strong>13.1 Qua Admin Console</strong></h3>

<ol>
<li>Log in to Admin Console</li>
<li>Select Realm to configure</li>
<li>Go to <strong>Realm Settings → Themes</strong></li>
<li>Choose a theme for each type:
<ul>
<li>Login Theme: <code>my-custom-theme</code></li>
<li>Account Theme: <code>my-custom-theme</code></li>
<li>Admin Console Theme: (keep default)</li>
<li>Email Theme: <code>my-custom-theme</code></li>
</ul>
</li>
<li>Press <strong>Save</strong></li>
</ol>

<h3 id="132-qua-rest-api"><strong>13.2 Qua REST API</strong></h3>

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

<h2 id="14-best-practices"><strong>14. Best Practices</strong></h2>

<ul>
<li><strong>Always use parent theme</strong> — Inherit from <code>keycloak.v2</code> instead of writing from scratch. Ensure compatibility when upgrading Keycloak.</li>
<li><strong>Only override what needs to be changed</strong> — Do not copy the entire template. Only create files for the template you want to customize.</li>
<li><strong>Separate themes by client</strong> — If there are multiple applications, you can use a different theme for each client (Realm Settings or Client-level theme override).</li>
<li><strong>Test on multiple browsers</strong> — Especially the login page must work on mobile.</li>
<li><strong>Use i18n</strong> — Always use message keys instead of hardcoded text in templates.</li>
<li><strong>Version control themes</strong> — Manage themes in separate Git repo or same project.</li>
<li><strong>CI/CD pipeline</strong> — Build JAR theme in CI, test with Keycloak container, deploy automatically.</li>
</ul>
