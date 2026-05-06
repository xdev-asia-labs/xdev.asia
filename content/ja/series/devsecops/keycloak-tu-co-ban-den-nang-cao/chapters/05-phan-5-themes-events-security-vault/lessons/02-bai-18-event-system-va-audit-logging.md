---
id: 019d8b30-b118-7001-c001-e0c5f8100118
title: 'レッスン 18: イベント システムと監査ログ'
slug: bai-18-event-system-va-audit-logging
description: イベントタイプ (ログインイベント、管理イベント)、イベントロギングの有効化、イベントリスナーの設定 (jboss-logging、電子メール)、イベントストア、イベント詳細、イベントフィルタリング、管理コンソールおよび REST API を介したイベントのクエリ、カスタムイベントリスナー SPI、一元化されたロギングのための ELK スタック / Grafana Loki の統合、SIEM 統合、監査コンプライアンス (SOC2、HIPAA)、アラート自動化。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 18
section_title: 'パート 5: テーマ、イベント、セキュリティ、および Vault'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1835" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1835)"/>

  <!-- Decorations -->
  <g>
    <circle cx="823" cy="99" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="1046" cy="122" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="769" cy="145" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="992" cy="168" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="191" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="229" x2="1100" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="259" x2="1050" y2="329" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="967.1051177665153,107 967.1051177665153,151 929,173 890.8948822334847,151 890.8948822334847,107.00000000000001 929,85" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — レッスン 18</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 18: イベント システムと監査ログ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: テーマ、イベント、セキュリティ、および Vault</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tong-quan-event-system"><strong>1. イベントシステムの概要</strong></h2>

<p>Keycloakがシステムを提供<strong>イベントシステム</strong>システム内のすべてのアクティビティを監視するための包括的な機能。ログイン、登録、管理設定の変更に至るすべてのアクションがイベントとして記録されます。</p>

<h3 id="11-hai-loai-events"><strong>1.1 2 種類のイベント</strong></h3>

<table>
<thead>
<tr><th>タイプ</th><th>説明する</th><th>例えば</th></tr>
</thead>
<tbody>
<tr><td><strong>ログインイベント（ユーザーイベント）</strong></td><td>ユーザー関連のアクション</td><td>ログイン、登録、ログアウト、TOKEN_EXCHANGE</td></tr>
<tr><td><strong>管理者イベント</strong></td><td>管理コンソール/API を介した構成変更</td><td>ユーザーの作成、レルムの更新、クライアントの削除</td></tr>
</tbody>
</table>

<h3 id="12-login-event-types"><strong>1.2 ログインイベントの種類</strong></h3>

<table>
<thead>
<tr><th>イベントタイプ</th><th>説明する</th><th>それはいつ起こりますか?</th></tr>
</thead>
<tbody>
<tr><td><code>ログイン</code></td><td>ログインに成功しました</td><td>ユーザーが正しい認証情報を入力する</td></tr>
<tr><td><code>ログインエラー</code></td><td>ログインに失敗しました</td><td>ユーザー名/パスワードが間違っています</td></tr>
<tr><td><code>登録する</code></td><td>新しいアカウントを登録する</td><td>ユーザーがアカウントを正常に作成しました</td></tr>
<tr><td><code>登録エラー</code></td><td>登録に失敗しました</td><td>メールが重複しています。検証に失敗しました</td></tr>
<tr><td><code>ログアウト</code></td><td>サインアウト</td><td>ユーザーのログアウトまたはセッションの期限切れ</td></tr>
<tr><td><code>CODE_TO_TOKEN</code></td><td>認可コード→トークンの交換</td><td>OIDC 認可コードのフロー</td></tr>
<tr><td><code>CODE_TO_TOKEN_ERROR</code></td><td>トークン交換に失敗しました</td><td>無効なコード、期限切れのコード</td></tr>
<tr><td><code>REFRESH_TOKEN</code></td><td>アクセストークンを更新する</td><td>クライアントはリフレッシュトークンを使用します</td></tr>
<tr><td><code>REFRESH_TOKEN_ERROR</code></td><td>リフレッシュトークンが失敗しました</td><td>トークンが取り消されたか期限切れになった</td></tr>
<tr><td><code>CLIENT_LOGIN</code></td><td>クライアント認証</td><td>サービスアカウントのログイン</td></tr>
<tr><td><code>INTROSPECT_TOKEN</code></td><td>トークンの導入</td><td>リソースサーバー検証トークン</td></tr>
<tr><td><code>UPDATE_PASSWORD</code></td><td>パスワードを変更する</td><td>ユーザーがパスワードを変更する</td></tr>
<tr><td><code>RESET_PASSWORD</code></td><td>パスワードをリセットする</td><td>電子メールリンク経由でユーザーがリセット</td></tr>
<tr><td><code>VERIFY_EMAIL</code></td><td>メール認証</td><td>ユーザーが確認リンクをクリックする</td></tr>
<tr><td><code>SEND_RESET_PASSWORD</code></td><td>パスワードリセットメールを送信する</td><td>パスワードを忘れた場合のリクエスト</td></tr>
<tr><td><code>UPDATE_PROFILE</code></td><td>プロフィールを更新する</td><td>ユーザーが個人情報を更新する</td></tr>
<tr><td><code>REMOVE_TOTP</code></td><td>TOTPデバイスの削除</td><td>ユーザーが OTP 認証システムを削除する</td></tr>
<tr><td><code>UPDATE_TOTP</code></td><td>TOTP 構成</td><td>ユーザーが OTP を設定する</td></tr>
<tr><td><code>GRANT_CONSENT</code></td><td>ユーザーが同意する</td><td>OAuth2同意画面</td></tr>
<tr><td><code>TOKEN_EXCHANGE</code></td><td>トークン交換</td><td>クライアント間でトークンを交換する</td></tr>
</tbody>
</table>

<h3 id="13-admin-event-operations"><strong>1.3 管理イベントの操作</strong></h3>

<table>
<thead>
<tr><th>手術</th><th>説明する</th><th>リソースの種類</th></tr>
</thead>
<tbody>
<tr><td><code>作成する</code></td><td>新しいリソースを作成する</td><td>ユーザー、クライアント、レルム、グループ、ロール...</td></tr>
<tr><td><code>アップデート</code></td><td>リソースを更新する</td><td>ユーザー、クライアント、REALM_SETTINGS...</td></tr>
<tr><td><code>消去</code></td><td>リソースの削除</td><td>ユーザー、クライアント、セッション...</td></tr>
<tr><td><code>アクション</code></td><td>行動を起こす</td><td>RESET_PASSWORD、SEND_VERIFY_EMAIL...</td></tr>
</tbody>
</table>

<h2 id="2-bat-event-logging"><strong>2. イベントログをオンにする</strong></h2>

<h3 id="21-qua-admin-console"><strong>2.1 管理コンソール経由</strong></h3>

<ol>
<li>ログイン<strong>管理コンソール</strong></li>
<li>レルムを選択 →<strong>レルム設定</strong>→タブ<strong>イベント</strong></li>
<li>構成<strong>ユーザーイベント設定</strong>:
<ul>
<li><strong>イベントの保存</strong>： の上</li>
<li><strong>有効期限</strong>: 30 日間 (コンプライアンス要件に応じて)</li>
<li><strong>保存されたタイプ</strong>: 保存するイベントの種類を選択します (デフォルト: ALL)</li>
</ul>
</li>
<li>構成<strong>管理者イベントの設定</strong>:
<ul>
<li><strong>イベントの保存</strong>： の上</li>
<li><strong>表現を含める</strong>: ON (リクエスト/レスポンスボディを保存)</li>
</ul>
</li>
<li><strong>イベントリスナー</strong>: 必要なリスナーを追加します</li>
</ol>

<h3 id="22-qua-rest-api"><strong>2.2 REST API経由</strong></h3>

<pre><code class="language-bash"># Bật event logging cho realm
curl -X PUT "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "eventsEnabled": true,
    "eventsExpiration": 2592000,
    "eventsListeners": ["jboss-logging"],
    "enabledEventTypes": [
        "LOGIN", "LOGIN_ERROR",
        "REGISTER", "REGISTER_ERROR",
        "LOGOUT",
        "CODE_TO_TOKEN", "CODE_TO_TOKEN_ERROR",
        "REFRESH_TOKEN", "REFRESH_TOKEN_ERROR",
        "CLIENT_LOGIN", "CLIENT_LOGIN_ERROR",
        "UPDATE_PASSWORD",
        "RESET_PASSWORD",
        "SEND_RESET_PASSWORD"
    ],
    "adminEventsEnabled": true,
    "adminEventsDetailsEnabled": true
  }'
</code></pre>

<h2 id="3-event-listeners"><strong>3. イベントリスナー</strong></h2>

<p>イベント リスナーは、イベントが発生したときに処理します。 Keycloak には次のリスナーが利用可能です。</p>

<h3 id="31-jboss-logging-listener"><strong>3.1 jboss-logging リスナー</strong></h3>

<p>イベントをKeycloakサーバーログに記録します(デフォルトで有効):</p>

<pre><code class="language-text"># Log output mẫu
2026-03-15 10:30:45,123 INFO  [org.keycloak.events] (executor-thread-1)
  type=LOGIN, realmId=my-realm, clientId=my-app, userId=abc-123,
  ipAddress=192.168.1.100, auth_method=openid-connect,
  auth_type=code, redirect_uri=https://myapp.com/callback,
  username=john@example.com
</code></pre>

<h3 id="32-email-listener"><strong>3.2 電子メールリスナー</strong></h3>

<p>重要なイベントがあるときにユーザーに電子メールを送信します (例: 新しいデバイスからのログイン):</p>

<pre><code class="language-text"># Bật email listener
Realm Settings → Events → Event listeners → Thêm "email"

# Events được gửi email por defecto:
- LOGIN_ERROR (quá nhiều lần → cảnh báo compromised account)
- UPDATE_PASSWORD
- REMOVE_TOTP
- UPDATE_TOTP
</code></pre>

<h2 id="4-event-details-va-event-store"><strong>4. イベント詳細とイベントストア</strong></h2>

<h3 id="41-cau-truc-login-event"><strong>4.1 ログインイベントの構造</strong></h3>

<pre><code class="language-json">{
    "time": 1710489045000,
    "type": "LOGIN",
    "realmId": "my-realm",
    "clientId": "my-web-app",
    "userId": "550e8400-e29b-41d4-a716-446655440000",
    "sessionId": "abc-session-id",
    "ipAddress": "192.168.1.100",
    "details": {
        "auth_method": "openid-connect",
        "auth_type": "code",
        "redirect_uri": "https://myapp.com/callback",
        "consent": "no_consent_required",
        "code_id": "xyz-code-id",
        "username": "john@example.com",
        "identity_provider": null
    }
}
</code></pre>

<h3 id="42-cau-truc-admin-event"><strong>4.2 管理イベントの構造</strong></h3>

<pre><code class="language-json">{
    "time": 1710489100000,
    "realmId": "my-realm",
    "authDetails": {
        "realmId": "master",
        "clientId": "security-admin-console",
        "userId": "admin-user-id",
        "ipAddress": "10.0.0.1"
    },
    "operationType": "CREATE",
    "resourceType": "USER",
    "resourcePath": "users/new-user-id",
    "representation": "{\"username\":\"newuser\",\"email\":\"new@example.com\",\"enabled\":true}"
}
</code></pre>

<h3 id="43-event-store-database"><strong>4.3 イベントストア — データベース</strong></h3>

<p>イベントはKeycloakのデータベースに保存されます。</p>

<table>
<thead>
<tr><th>テーブル</th><th>コンテンツ</th></tr>
</thead>
<tbody>
<tr><td><code>EVENT_ENTITY</code></td><td>ログインイベント</td></tr>
<tr><td><code>ADMIN_EVENT_ENTITY</code></td><td>管理者イベント</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>注記：</strong>デフォルトのイベントストアはKeycloak DBに保存されます。イベントの数が多い場合は、カスタム イベント リスナーを使用してイベントを外部システムに送信し、組み込みストアの有効期限を短く設定する必要があります。</p>
</blockquote>

<h2 id="5-event-filtering-va-truy-van"><strong>5. イベントのフィルタリングとクエリ</strong></h2>

<h3 id="51-qua-admin-console"><strong>5.1 管理コンソール経由</strong></h3>

<ol>
<li>入力<strong>イベント</strong>→タブ<strong>ユーザーイベント</strong>または<strong>管理者イベント</strong></li>
<li>イベントを次の条件でフィルタリングします。<ul>
<li><strong>イベントの種類</strong>: ログイン、ログインエラー、登録...</li>
<li><strong>クライアント</strong>: 特定のクライアントを選択します</li>
<li><strong>ユーザー</strong>：ユーザーIDで検索</li>
<li><strong>日付範囲</strong>: 開始日/終了日</li>
<li><strong>IPアドレス</strong>: IPでフィルタリング</li>
</ul>
</li>
</ol>

<h3 id="52-qua-rest-api-login-events"><strong>5.2 REST API経由 — ログインイベント</strong></h3>

<pre><code class="language-bash"># Lấy tất cả login events
curl -s "http://localhost:8080/admin/realms/my-realm/events" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .

# Filter theo event type
curl -s "http://localhost:8080/admin/realms/my-realm/events?type=LOGIN_ERROR" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .

# Filter theo user
curl -s "http://localhost:8080/admin/realms/my-realm/events?user=user-uuid" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .

# Filter theo client và date range
curl -s "http://localhost:8080/admin/realms/my-realm/events?\
client=my-app&amp;\
dateFrom=2026-03-01&amp;\
dateTo=2026-03-31&amp;\
first=0&amp;\
max=100" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .

# Filter nhiều event types
curl -s "http://localhost:8080/admin/realms/my-realm/events?\
type=LOGIN&amp;type=LOGIN_ERROR&amp;type=REGISTER" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .
</code></pre>

<h3 id="53-qua-rest-api-admin-events"><strong>5.3 REST API 経由 — 管理イベント</strong></h3>

<pre><code class="language-bash"># Lấy admin events
curl -s "http://localhost:8080/admin/realms/my-realm/admin-events" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .

# Filter theo operation type
curl -s "http://localhost:8080/admin/realms/my-realm/admin-events?\
operationTypes=CREATE&amp;\
resourceTypes=USER" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .

# Filter theo resource path
curl -s "http://localhost:8080/admin/realms/my-realm/admin-events?\
resourcePath=users" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .
</code></pre>

<h2 id="6-custom-event-listener-spi"><strong>6. カスタム イベント リスナー SPI</strong></h2>

<p>Keycloak を使用すると、カスタム イベント リスナーを作成できます。<strong>サービスプロバイダーインターフェイス (SPI)</strong>.</p>

<h3 id="61-tao-maven-project"><strong>6.1 Maven プロジェクトの作成</strong></h3>

<pre><code class="language-xml">&lt;!-- pom.xml --&gt;
&lt;project&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
    &lt;groupId&gt;com.example&lt;/groupId&gt;
    &lt;artifactId&gt;custom-event-listener&lt;/artifactId&gt;
    &lt;version&gt;1.0.0&lt;/version&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;properties&gt;
        &lt;keycloak.version&gt;26.1.0&lt;/keycloak.version&gt;
        &lt;maven.compiler.source&gt;17&lt;/maven.compiler.source&gt;
        &lt;maven.compiler.target&gt;17&lt;/maven.compiler.target&gt;
    &lt;/properties&gt;

    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.keycloak&lt;/groupId&gt;
            &lt;artifactId&gt;keycloak-server-spi&lt;/artifactId&gt;
            &lt;version&gt;${keycloak.version}&lt;/version&gt;
            &lt;scope&gt;provided&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.keycloak&lt;/groupId&gt;
            &lt;artifactId&gt;keycloak-server-spi-private&lt;/artifactId&gt;
            &lt;version&gt;${keycloak.version}&lt;/version&gt;
            &lt;scope&gt;provided&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.keycloak&lt;/groupId&gt;
            &lt;artifactId&gt;keycloak-services&lt;/artifactId&gt;
            &lt;version&gt;${keycloak.version}&lt;/version&gt;
            &lt;scope&gt;provided&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/project&gt;
</code></pre>

<h3 id="62-implement-eventlistenerprovider"><strong>6.2 EventListenerProviderの実装</strong></h3>

<pre><code class="language-java">// src/main/java/com/example/CustomEventListenerProvider.java
package com.example;

import org.keycloak.events.Event;
import org.keycloak.events.EventListenerProvider;
import org.keycloak.events.EventType;
import org.keycloak.events.admin.AdminEvent;
import org.keycloak.events.admin.OperationType;
import org.keycloak.models.KeycloakSession;
import org.jboss.logging.Logger;

import java.util.Map;

public class CustomEventListenerProvider implements EventListenerProvider {

    private static final Logger log = Logger.getLogger(CustomEventListenerProvider.class);
    private final KeycloakSession session;

    public CustomEventListenerProvider(KeycloakSession session) {
        this.session = session;
    }

    @Override
    public void onEvent(Event event) {
        // Xử lý Login Events
        log.infof("Event: type=%s, realmId=%s, clientId=%s, userId=%s, ip=%s",
                event.getType(),
                event.getRealmId(),
                event.getClientId(),
                event.getUserId(),
                event.getIpAddress());

        // Xử lý theo event type
        switch (event.getType()) {
            case LOGIN:
                handleLogin(event);
                break;
            case LOGIN_ERROR:
                handleLoginError(event);
                break;
            case REGISTER:
                handleRegister(event);
                break;
            default:
                break;
        }
    }

    @Override
    public void onEvent(AdminEvent event, boolean includeRepresentation) {
        // Xử lý Admin Events
        log.infof("AdminEvent: operation=%s, resourceType=%s, resourcePath=%s, realmId=%s",
                event.getOperationType(),
                event.getResourceType(),
                event.getResourcePath(),
                event.getRealmId());

        if (event.getOperationType() == OperationType.DELETE) {
            handleAdminDelete(event);
        }
    }

    private void handleLogin(Event event) {
        // Ví dụ: Gửi event đến Kafka
        String payload = buildEventPayload(event);
        // kafkaProducer.send("keycloak-login-events", payload);
        log.debugf("Login event sent to message broker: %s", payload);
    }

    private void handleLoginError(Event event) {
        Map&lt;String, String&gt; details = event.getDetails();
        String username = details != null ? details.get("username") : "unknown";
        String error = event.getError();

        log.warnf("Login failure: user=%s, error=%s, ip=%s",
                username, error, event.getIpAddress());

        // Ví dụ: Increment metric counter cho monitoring
        // metricsService.incrementCounter("login_failures",
        //     "realm", event.getRealmId(),
        //     "error", error);
    }

    private void handleRegister(Event event) {
        log.infof("New user registered: userId=%s, realm=%s",
                event.getUserId(), event.getRealmId());
    }

    private void handleAdminDelete(AdminEvent event) {
        log.warnf("Admin DELETE operation: resource=%s/%s by admin=%s",
                event.getResourceType(),
                event.getResourcePath(),
                event.getAuthDetails().getUserId());
    }

    private String buildEventPayload(Event event) {
        // Tạo JSON payload cho message broker
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        sb.append("\"type\":\"").append(event.getType()).append("\",");
        sb.append("\"realmId\":\"").append(event.getRealmId()).append("\",");
        sb.append("\"userId\":\"").append(event.getUserId()).append("\",");
        sb.append("\"clientId\":\"").append(event.getClientId()).append("\",");
        sb.append("\"ipAddress\":\"").append(event.getIpAddress()).append("\",");
        sb.append("\"time\":").append(event.getTime());
        sb.append("}");
        return sb.toString();
    }

    @Override
    public void close() {
        // Cleanup resources
    }
}
</code></pre>

<h3 id="63-implement-eventlistenerproviderfactory"><strong>6.3 EventListenerProviderFactoryの実装</strong></h3>

<pre><code class="language-java">// src/main/java/com/example/CustomEventListenerProviderFactory.java
package com.example;

import org.keycloak.Config;
import org.keycloak.events.EventListenerProvider;
import org.keycloak.events.EventListenerProviderFactory;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.KeycloakSessionFactory;

public class CustomEventListenerProviderFactory implements EventListenerProviderFactory {

    public static final String PROVIDER_ID = "custom-event-listener";

    @Override
    public EventListenerProvider create(KeycloakSession session) {
        return new CustomEventListenerProvider(session);
    }

    @Override
    public void init(Config.Scope config) {
        // Đọc cấu hình từ keycloak config
        // Ví dụ: String kafkaBrokers = config.get("kafka-brokers", "localhost:9092");
    }

    @Override
    public void postInit(KeycloakSessionFactory factory) {
        // Post-initialization
    }

    @Override
    public void close() {
        // Cleanup
    }

    @Override
    public String getId() {
        return PROVIDER_ID;
    }
}
</code></pre>

<h3 id="64-dang-ky-spi"><strong>6.4 SPIの登録</strong></h3>

<pre><code class="language-text"># src/main/resources/META-INF/services/org.keycloak.events.EventListenerProviderFactory
com.example.CustomEventListenerProviderFactory
</code></pre>

<h3 id="65-deploy-va-kich-hoat"><strong>6.5 導入とアクティベーション</strong></h3>

<pre><code class="language-bash"># Build
mvn clean package

# Deploy
cp target/custom-event-listener-1.0.0.jar $KEYCLOAK_HOME/providers/
$KEYCLOAK_HOME/bin/kc.sh build

# Kích hoạt: Admin Console → Realm Settings → Events → Event listeners
# Thêm "custom-event-listener"
</code></pre>

<h2 id="7-keycloak-json-logging"><strong>7. KeycloakのJSONロギング</strong></h2>

<p>集中ログと統合するには、JSON ログを出力するように Keycloak を構成します。</p>

<pre><code class="language-bash"># Bật JSON logging
bin/kc.sh start \
  --log=console \
  --log-console-output=json

# Hoặc qua environment variables
KC_LOG=console
KC_LOG_CONSOLE_OUTPUT=json
</code></pre>

<h3 id="71-json-log-output-mau"><strong>7.1 JSON ログ出力のサンプル</strong></h3>

<pre><code class="language-json">{
    "timestamp": "2026-03-15T10:30:45.123Z",
    "level": "INFO",
    "loggerClassName": "org.keycloak.events",
    "loggerName": "org.keycloak.events",
    "message": "type=LOGIN, realmId=my-realm, clientId=my-app, userId=abc-123, ipAddress=192.168.1.100",
    "threadName": "executor-thread-1",
    "threadId": 42,
    "hostName": "keycloak-0",
    "processName": "keycloak",
    "processId": 1
}
</code></pre>

<h3 id="72-cau-hinh-log-levels"><strong>7.2 ログレベルの構成</strong></h3>

<pre><code class="language-bash"># Cấu hình log levels cho events
bin/kc.sh start \
  --log=console \
  --log-console-output=json \
  --log-level=INFO \
  --log-level=org.keycloak.events:DEBUG

# Environment variables
KC_LOG_LEVEL=INFO
KC_LOG_LEVEL=org.keycloak.events:DEBUG
</code></pre>

<h2 id="8-tich-hop-elk-stack"><strong>8.ELKスタックの統合</strong></h2>

<p>一元的に分析するために、Keycloak ログを ELK スタック (Elasticsearch、Logstash、Kibana) に送信します。</p>

<h3 id="81-kien-truc-tong-quan"><strong>8.1 一般的なアーキテクチャ</strong></h3>

<pre><code class="language-text">Keycloak (JSON logs)
    ↓
Filebeat (log shipper)
    ↓
Logstash (processing &amp; enrichment)
    ↓
Elasticsearch (storage &amp; indexing)
    ↓
Kibana (visualization &amp; dashboards)
</code></pre>

<h3 id="82-filebeat-configuration"><strong>8.2 Filebeat の設定</strong></h3>

<pre><code class="language-yaml"># filebeat.yml
filebeat.inputs:
  - type: container
    paths:
      - /var/log/containers/keycloak-*.log
    processors:
      - decode_json_fields:
          fields: ["message"]
          target: "keycloak"
          overwrite_keys: true
      - add_fields:
          target: ""
          fields:
            service.name: keycloak
            environment: production

output.logstash:
  hosts: ["logstash:5044"]
</code></pre>

<h3 id="83-logstash-pipeline"><strong>8.3 Logstash パイプライン</strong></h3>

<pre><code class="language-conf"># logstash/pipeline/keycloak.conf
input {
  beats {
    port =&gt; 5044
  }
}

filter {
  if [service][name] == "keycloak" {
    # Parse Keycloak event message
    if [keycloak][message] =~ "^type=" {
      kv {
        source =&gt; "[keycloak][message]"
        field_split =&gt; ", "
        value_split =&gt; "="
        target =&gt; "kc_event"
      }

      mutate {
        add_field =&gt; {
          "event_type" =&gt; "%{[kc_event][type]}"
          "realm" =&gt; "%{[kc_event][realmId]}"
          "client_id" =&gt; "%{[kc_event][clientId]}"
        }
      }
    }

    # GeoIP enrichment
    if [kc_event][ipAddress] {
      geoip {
        source =&gt; "[kc_event][ipAddress]"
        target =&gt; "geo"
      }
    }

    # Detect suspicious patterns
    if [kc_event][type] == "LOGIN_ERROR" {
      mutate {
        add_tag =&gt; ["login_failure"]
      }
    }
  }
}

output {
  if [service][name] == "keycloak" {
    elasticsearch {
      hosts =&gt; ["elasticsearch:9200"]
      index =&gt; "keycloak-events-%{+YYYY.MM.dd}"
    }
  }
}
</code></pre>

<h3 id="84-kibana-dashboard"><strong>8.4 キバナダッシュボード</strong></h3>

<p>監視する Kibana ダッシュボードを作成します。</p>

<ul>
<li><strong>ログイン成功率/失敗率</strong>— 時間の経過に伴う棒グラフ</li>
<li><strong>よくあるログインエラー</strong>— エラーの種類別の円グラフ</li>
<li><strong>地理的位置によるログイン</strong>— 地図の視覚化</li>
<li><strong>IP によるログイン失敗</strong>— ブルートフォース検出テーブル</li>
<li><strong>ユーザー登録動向</strong>— 日別の折れ線グラフ</li>
<li><strong>管理操作の監査</strong>— 完全な詳細を含むデータテーブル</li>
</ul>

<h2 id="9-tich-hop-grafana-loki"><strong>9. Grafana Loki の統合</strong></h2>

<p>Grafana Loki は、ELK よりも軽量なログ集約ソリューションであり、Kubernetes 環境に適しています。</p>

<h3 id="91-promtail-configuration"><strong>9.1 Promtail の構成</strong></h3>

<pre><code class="language-yaml"># promtail-config.yml
server:
  http_listen_port: 9080

positions:
  filename: /tmp/positions.yaml

clients:
  - url: http://loki:3100/loki/api/v1/push

scrape_configs:
  - job_name: keycloak
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_label_app]
        regex: keycloak
        action: keep
      - source_labels: [__meta_kubernetes_namespace]
        target_label: namespace
      - source_labels: [__meta_kubernetes_pod_name]
        target_label: pod
    pipeline_stages:
      - json:
          expressions:
            level: level
            logger: loggerName
            message: message
            timestamp: timestamp
      - labels:
          level:
          logger:
      - match:
          selector: '{app="keycloak"} |~ "type=LOGIN|type=REGISTER|type=LOGOUT"'
          stages:
            - regex:
                expression: 'type=(?P&lt;event_type&gt;\w+), realmId=(?P&lt;realm&gt;[\w-]+), clientId=(?P&lt;client_id&gt;[\w-]+), userId=(?P&lt;user_id&gt;[\w-]+)'
            - labels:
                event_type:
                realm:
</code></pre>

<h3 id="92-grafana-dashboard-queries"><strong>9.2 Grafana ダッシュボードのクエリ</strong></h3>

<pre><code class="language-text"># Login failures trong 1 giờ qua
{app="keycloak"} |~ "type=LOGIN_ERROR" | json | count_over_time({app="keycloak"} |~ "LOGIN_ERROR" [1h])

# Login events theo realm
sum by (realm) (count_over_time({app="keycloak"} |~ "type=LOGIN" [5m]))

# Top IPs với login failures
{app="keycloak"} |~ "type=LOGIN_ERROR" | regexp `ipAddress=(?P&lt;ip&gt;[\d.]+)` | count by (ip) | sort desc | limit 10
</code></pre>

<h2 id="10-siem-integration"><strong>10. SIEM統合</strong></h2>

<p>Keycloakイベントをセキュリティ情報およびイベント管理(SIEM)システムと統合します。</p>

<h3 id="101-splunk-integration"><strong>10.1 Splunk の統合</strong></h3>

<pre><code class="language-yaml"># Cấu hình Filebeat ship đến Splunk HEC
output.logstash:
  enabled: false

output.http:
  enabled: true
  hosts: ["https://splunk-hec:8088"]
  path: "/services/collector/event"
  headers:
    Authorization: "Splunk &lt;HEC_TOKEN&gt;"
  format: json
</code></pre>

<h3 id="102-siem-use-cases"><strong>10.2 SIEM の使用例</strong></h3>

<table>
<thead>
<tr><th>使用事例</th><th>イベントパターン</th><th>アクション</th></tr>
</thead>
<tbody>
<tr><td><strong>ブルートフォース検出</strong></td><td>同じ IP からの複数の LOGIN_ERROR</td><td>アラート + IP ブロック</td></tr>
<tr><td><strong>アカウント乗っ取り</strong></td><td>GeoIP からのログインは異常です</td><td>アラート + MFA が必要</td></tr>
<tr><td><strong>権限昇格</strong></td><td>管理者が管理者ロールを割り当てます</td><td>アラート + レビュー</td></tr>
<tr><td><strong>データの引き出し</strong></td><td>異常なトークンリクエストが多い</td><td>アラート + セッションの取り消し</td></tr>
<tr><td><strong>不審な登録</strong></td><td>同じIPからの複数のREGISTER</td><td>アラート + キャプチャ</td></tr>
</tbody>
</table>

<h2 id="11-audit-compliance"><strong>11. 監査のコンプライアンス</strong></h2>

<h3 id="111-soc2-requirements"><strong>11.1 SOC2 要件</strong></h3>

<table>
<thead>
<tr><th>SOC2制御</th><th>キークロークの実装</th></tr>
</thead>
<tbody>
<tr><td><strong>CC6.1</strong>— 論理アクセスのセキュリティ</td><td>LOGIN、LOGIN_ERROR、PASSWORD 変更のイベントログ</td></tr>
<tr><td><strong>CC6.2</strong>— ユーザー認証</td><td>MFA イベント、登録イベント</td></tr>
<tr><td><strong>CC6.3</strong>— アクセス許可</td><td>ロール/権限変更の管理者イベント</td></tr>
<tr><td><strong>CC7.2</strong>— セキュリティ監視</td><td>ログイン失敗時のリアルタイムアラート</td></tr>
<tr><td><strong>CC8.1</strong>— 変更管理</td><td>表現を含む管理イベント</td></tr>
</tbody>
</table>

<h3 id="112-hipaa-requirements"><strong>11.2 HIPAA 要件</strong></h3>

<table>
<thead>
<tr><th>HIPAA コントロール</th><th>キークロークの実装</th></tr>
</thead>
<tbody>
<tr><td><strong>§164.312(b)</strong>— 監査制御</td><td>すべてのイベント タイプ、表現を含む管理イベントを有効にする</td></tr>
<tr><td><strong>§164.312(d)</strong>— 本人認証</td><td>認証試行のイベントログ</td></tr>
<tr><td><strong>§164.308(a)(5)</strong>— セキュリティ意識</td><td>不審なアクティビティの電子メール通知</td></tr>
</tbody>
</table>

<h3 id="113-retention-policy"><strong>11.3 保持ポリシー</strong></h3>

<pre><code class="language-bash"># Cấu hình event retention
# SOC2: minimum 1 năm
# HIPAA: minimum 6 năm

# Trong Keycloak (built-in store)
# Realm Settings → Events → Expiration: 365 days

# Trong Elasticsearch (centralized logging)
# ILM Policy:
# - Hot: 30 days (SSD)
# - Warm: 335 days (HDD)
# - Cold/Frozen: 5+ years (S3/GCS)
# - Delete: 7 years
</code></pre>

<h2 id="12-alert-automation"><strong>12. アラートの自動化</strong></h2>

<h3 id="121-prometheus-alerting"><strong>12.1 プロメテウスのアラート</strong></h3>

<p>Keycloakはメトリクスを次のように公開します。<code>/メトリクス</code>エンドポイント (メトリクスを有効にする必要があります):</p>

<pre><code class="language-bash"># Bật metrics
bin/kc.sh start --metrics-enabled=true
</code></pre>

<pre><code class="language-yaml"># prometheus-alerts.yml
groups:
  - name: keycloak-security
    rules:
      - alert: HighLoginFailureRate
        expr: |
          sum(rate(keycloak_login_error_total[5m])) by (realm)
          /
          sum(rate(keycloak_login_total[5m])) by (realm)
          > 0.3
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High login failure rate in realm {{ $labels.realm }}"
          description: "Login failure rate is {{ $value | humanizePercentage }} (threshold: 30%)"

      - alert: BruteForceDetected
        expr: |
          sum(increase(keycloak_login_error_total[5m])) by (realm) > 50
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "Possible brute-force attack on realm {{ $labels.realm }}"
          description: "{{ $value }} login failures in 5 minutes"

      - alert: UnusualRegistrationSpike
        expr: |
          sum(increase(keycloak_registrations_total[10m])) by (realm) > 100
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Unusual registration spike in realm {{ $labels.realm }}"
</code></pre>

<h3 id="122-alertmanager-routing"><strong>12.2 アラートマネージャーのルーティング</strong></h3>

<pre><code class="language-yaml"># alertmanager.yml
route:
  receiver: default
  routes:
    - match:
        severity: critical
      receiver: pagerduty-security
      continue: true
    - match:
        severity: critical
      receiver: slack-security
    - match:
        severity: warning
      receiver: slack-ops

receivers:
  - name: default
    email_configs:
      - to: ops-team@example.com

  - name: slack-security
    slack_configs:
      - api_url: https://hooks.slack.com/services/xxx
        channel: '#security-alerts'
        title: '{{ .GroupLabels.alertname }}'
        text: '{{ .CommonAnnotations.description }}'

  - name: pagerduty-security
    pagerduty_configs:
      - service_key: &lt;pagerduty-integration-key&gt;
        severity: critical
</code></pre>

<h2 id="13-best-practices"><strong>13. ベストプラクティス</strong></h2>

<ul>
<li><strong>ログイン イベントと管理者イベントの両方を有効にする</strong>— システム内のアクティビティを見逃さないでください。</li>
<li><strong>イベントを外部システムに送信する</strong>— 組み込みのイベント ストアだけに依存しないでください。長期保存には ELK/Loki/SIEM を使用してください。</li>
<li><strong>管理イベント表現をオンにする</strong>— 完全な監査のために、管理操作のリクエスト/レスポンス本文を保存します。</li>
<li><strong>適切な保持期間を設定する</strong>— コンプライアンス要件に準拠します (SOC2: 1 年、HIPAA: 6 年)。</li>
<li><strong>ログイン失敗率を監視する</strong>— ブルートフォース検出とアカウント乗っ取りに対するアラートを設定します。</li>
<li><strong>イベントを関連付ける</strong>— Keycloakイベントとアプリケーションログを組み合わせて、全体像を把握します。</li>
<li><strong>イベントログを保護する</strong>— ログ データには PII が含まれているため、保存中および転送中に暗号化してアクセスを制限する必要があります。</li>
</ul>
