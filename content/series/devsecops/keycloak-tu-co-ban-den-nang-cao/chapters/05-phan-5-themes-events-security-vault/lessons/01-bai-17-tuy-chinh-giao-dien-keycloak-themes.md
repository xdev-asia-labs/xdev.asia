---
id: 019d8b30-b117-7001-c001-e0c5f8100117
title: 'Bài 17: Tùy chỉnh giao diện Keycloak - Themes'
slug: bai-17-tuy-chinh-giao-dien-keycloak-themes
description: >-
  Theme types (Login, Account, Admin, Email, Welcome), cấu trúc theme
  directory, tạo custom theme, theme properties file, FreeMarker template
  engine, override template cụ thể, i18n messages, sử dụng CSS/JS custom,
  extending themes (parent), deploying themes (standalone, Docker, JAR/SPI),
  theme caching và workflow phát triển theme.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 5: Themes, Events, Security và Vault"
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak từ Cơ bản đến Nâng cao
  slug: keycloak-tu-co-ban-den-nang-cao
---

<h2 id="1-tong-quan-ve-keycloak-themes"><strong>1. Tổng quan về Keycloak Themes</strong></h2>

<p>Keycloak cho phép tùy chỉnh hoàn toàn giao diện người dùng thông qua hệ thống <strong>Themes</strong>. Mỗi theme kiểm soát giao diện của một phần cụ thể trong Keycloak, từ trang đăng nhập đến email thông báo.</p>

<h3 id="11-theme-types"><strong>1.1 Theme Types</strong></h3>

<p>Keycloak hỗ trợ <strong>5 loại theme</strong>:</p>

<table>
<thead>
<tr><th>Theme Type</th><th>Mô tả</th><th>Trang áp dụng</th></tr>
</thead>
<tbody>
<tr><td><strong>Login</strong></td><td>Giao diện đăng nhập, đăng ký, reset password</td><td>Login, Register, OTP, Reset Password, Error</td></tr>
<tr><td><strong>Account</strong></td><td>Trang quản lý tài khoản người dùng</td><td>Account Console (v3 React-based)</td></tr>
<tr><td><strong>Admin</strong></td><td>Giao diện Admin Console</td><td>Admin Console (React-based)</td></tr>
<tr><td><strong>Email</strong></td><td>Template email gửi đến user</td><td>Verify Email, Reset Password, Event notifications</td></tr>
<tr><td><strong>Welcome</strong></td><td>Trang chào mừng mặc định</td><td>Landing page khi truy cập root URL</td></tr>
</tbody>
</table>

<h3 id="12-theme-mac-dinh"><strong>1.2 Theme mặc định</strong></h3>

<p>Keycloak đi kèm các theme có sẵn:</p>

<ul>
<li><strong>keycloak</strong> — Theme mặc định cho Login, Account, Email</li>
<li><strong>keycloak.v2</strong> — Theme mới cho Login (Keycloak 24+), Account Console v3</li>
<li><strong>base</strong> (deprecated) — Theme cơ sở, không nên sử dụng làm parent nữa</li>
</ul>

<h2 id="2-cau-truc-thu-muc-theme"><strong>2. Cấu trúc thư mục Theme</strong></h2>

<p>Mỗi theme được tổ chức theo cấu trúc thư mục chuẩn:</p>

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

<h3 id="21-cac-thu-muc-chinh"><strong>2.1 Các thư mục chính</strong></h3>

<table>
<thead>
<tr><th>Thư mục</th><th>Mục đích</th></tr>
</thead>
<tbody>
<tr><td><code>resources/</code></td><td>CSS, JavaScript, hình ảnh tĩnh</td></tr>
<tr><td><code>templates/</code></td><td>FreeMarker template files (.ftl)</td></tr>
<tr><td><code>messages/</code></td><td>File i18n cho đa ngôn ngữ</td></tr>
</tbody>
</table>

<h2 id="3-theme-properties-file"><strong>3. Theme Properties File</strong></h2>

<p>File <code>theme.properties</code> là file cấu hình trung tâm của mỗi theme type:</p>

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

<h3 id="31-cac-thuoc-tinh-quan-trong"><strong>3.1 Các thuộc tính quan trọng</strong></h3>

<table>
<thead>
<tr><th>Property</th><th>Mô tả</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td><code>parent</code></td><td>Theme cha để kế thừa</td><td><code>parent=keycloak.v2</code></td></tr>
<tr><td><code>import</code></td><td>Import resources từ theme khác</td><td><code>import=common/keycloak</code></td></tr>
<tr><td><code>styles</code></td><td>Danh sách CSS files (space-separated)</td><td><code>styles=css/login.css css/custom.css</code></td></tr>
<tr><td><code>scripts</code></td><td>JavaScript files</td><td><code>scripts=js/app.js</code></td></tr>
<tr><td><code>locales</code></td><td>Ngôn ngữ hỗ trợ</td><td><code>locales=en,vi,ja</code></td></tr>
</tbody>
</table>

<h2 id="4-freemarker-template-engine"><strong>4. FreeMarker Template Engine</strong></h2>

<p>Keycloak sử dụng <strong>Apache FreeMarker</strong> làm template engine cho Login và Email themes. FreeMarker cho phép tạo HTML động với các biến và logic.</p>

<h3 id="41-cu-phap-co-ban"><strong>4.1 Cú pháp cơ bản</strong></h3>

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

<h3 id="42-cac-bien-co-san"><strong>4.2 Các biến có sẵn trong Login Theme</strong></h3>

<table>
<thead>
<tr><th>Biến</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td><code>realm</code></td><td>Thông tin realm (displayName, registrationAllowed, password, social...)</td></tr>
<tr><td><code>url</code></td><td>Các URL (loginAction, registrationUrl, loginResetCredentialsUrl...)</td></tr>
<tr><td><code>client</code></td><td>Client đang request login (name, clientId...)</td></tr>
<tr><td><code>login</code></td><td>Dữ liệu form (username đã nhập...)</td></tr>
<tr><td><code>message</code></td><td>Thông báo lỗi/thành công</td></tr>
<tr><td><code>messagesPerField</code></td><td>Validation messages cho từng field</td></tr>
<tr><td><code>social</code></td><td>Social login providers</td></tr>
<tr><td><code>locale</code></td><td>Locale hiện tại và danh sách supported locales</td></tr>
</tbody>
</table>

<h2 id="5-override-template-cu-the"><strong>5. Override Template cụ thể</strong></h2>

<p>Bạn chỉ cần override những template muốn thay đổi. Các template còn lại sẽ được kế thừa từ parent theme.</p>

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

<h2 id="6-custom-css-va-javascript"><strong>6. Custom CSS và JavaScript</strong></h2>

<h3 id="61-them-custom-css"><strong>6.1 Thêm Custom CSS</strong></h3>

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

<h3 id="62-them-custom-javascript"><strong>6.2 Thêm Custom JavaScript</strong></h3>

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

<p>Keycloak hỗ trợ đa ngôn ngữ thông qua file <code>messages_{locale}.properties</code>.</p>

<h3 id="71-tao-file-tieng-viet"><strong>7.1 Tạo file tiếng Việt</strong></h3>

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

<h3 id="72-override-tin-nhan-tieng-anh"><strong>7.2 Override tin nhắn tiếng Anh</strong></h3>

<pre><code class="language-properties"># themes/my-custom-theme/login/messages/messages_en.properties

# Override default messages
loginAccountTitle=Sign in to your account
welcomeMessage=Welcome to our platform
companyName=Your Company

# Custom messages cho branding
loginTitleHtml=&lt;strong&gt;Welcome&lt;/strong&gt; to {0}
</code></pre>

<h3 id="73-su-dung-i18n-trong-template"><strong>7.3 Sử dụng i18n trong template</strong></h3>

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

<h2 id="8-extending-themes-voi-parent"><strong>8. Extending Themes với Parent</strong></h2>

<p>Theme inheritance cho phép tạo theme mới dựa trên theme có sẵn, chỉ override những phần cần thay đổi.</p>

<h3 id="81-cach-hoat-dong"><strong>8.1 Cách hoạt động</strong></h3>

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

<p>Từ Keycloak 24+, bạn có thể định nghĩa <strong>theme variants</strong> để có nhiều phiên bản khác nhau của cùng một theme:</p>

<pre><code class="language-properties"># theme.properties
parent=keycloak.v2

# Variant definition (admin có thể chọn trong Realm Settings)
variant.light.styles=css/login.css css/light.css
variant.dark.styles=css/login.css css/dark.css
</code></pre>

<h2 id="9-deploying-themes"><strong>9. Deploying Themes</strong></h2>

<h3 id="91-standalone-deployment"><strong>9.1 Standalone Deployment</strong></h3>

<p>Copy theme vào thư mục <code>themes/</code> của Keycloak:</p>

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

<h3 id="93-docker-multi-stage-build-voi-node"><strong>9.3 Docker Multi-stage Build với Node (Account v3)</strong></h3>

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

<p>Đóng gói theme dưới dạng JAR file để deploy như SPI provider:</p>

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

<h3 id="101-tat-cache-khi-phat-trien"><strong>10.1 Tắt cache khi phát triển</strong></h3>

<p>Mặc định Keycloak cache themes, cần tắt khi phát triển:</p>

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

<h3 id="103-workflow-phat-trien"><strong>10.3 Workflow phát triển</strong></h3>

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

<p>Account Console v3 sử dụng <strong>React + PatternFly</strong>. Để tùy chỉnh, bạn cần build custom React app.</p>

<h3 id="111-keycloakify"><strong>11.1 Keycloakify (Recommended)</strong></h3>

<p>Sử dụng <a href="https://www.keycloakify.dev/">Keycloakify</a> — framework chuyên dùng để tạo Keycloak themes với React:</p>

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

<p>Email themes có hai phiên bản cho mỗi template: HTML và plain text.</p>

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

<h2 id="13-ap-dung-theme-vao-realm"><strong>13. Áp dụng Theme vào Realm</strong></h2>

<h3 id="131-qua-admin-console"><strong>13.1 Qua Admin Console</strong></h3>

<ol>
<li>Đăng nhập Admin Console</li>
<li>Chọn Realm cần cấu hình</li>
<li>Vào <strong>Realm Settings → Themes</strong></li>
<li>Chọn theme cho từng type:
<ul>
<li>Login Theme: <code>my-custom-theme</code></li>
<li>Account Theme: <code>my-custom-theme</code></li>
<li>Admin Console Theme: (giữ mặc định)</li>
<li>Email Theme: <code>my-custom-theme</code></li>
</ul>
</li>
<li>Nhấn <strong>Save</strong></li>
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
<li><strong>Luôn sử dụng parent theme</strong> — Kế thừa từ <code>keycloak.v2</code> thay vì viết from scratch. Đảm bảo tương thích khi upgrade Keycloak.</li>
<li><strong>Chỉ override những gì cần thay đổi</strong> — Không copy toàn bộ template. Chỉ tạo file cho template bạn muốn customize.</li>
<li><strong>Tách theme theo client</strong> — Nếu có nhiều ứng dụng, có thể dùng theme khác nhau cho từng client (Realm Settings hoặc Client-level theme override).</li>
<li><strong>Test trên nhiều trình duyệt</strong> — Đặc biệt login page phải hoạt động trên mobile.</li>
<li><strong>Sử dụng i18n</strong> — Luôn dùng message keys thay vì hardcode text trong template.</li>
<li><strong>Version control themes</strong> — Quản lý theme trong Git repo riêng hoặc cùng project.</li>
<li><strong>CI/CD pipeline</strong> — Build theme JAR trong CI, test với Keycloak container, deploy tự động.</li>
</ul>
