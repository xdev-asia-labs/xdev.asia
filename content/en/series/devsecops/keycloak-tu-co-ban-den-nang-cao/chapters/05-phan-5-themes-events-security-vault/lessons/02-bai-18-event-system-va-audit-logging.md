---
id: 019d8b30-b118-7001-c001-e0c5f8100118
title: 'Lesson 18: Event System and Audit Logging'
slug: bai-18-event-system-va-audit-logging
description: Event types (Login Events, Admin Events), enable event logging, configure event listeners (jboss-logging, email), Event Store, Event Details, event filtering, query events via Admin Console and REST API, custom Event Listener SPI, ELK Stack / Grafana Loki integration for centralized logging, SIEM integration, audit compliance (SOC2, HIPAA) and alert automation.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 18
section_title: 'Part 5: Themes, Events, Security and Vault'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak from Basic to Advanced
  slug: keycloak-tu-co-ban-den-nang-cao
locale: en
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
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — Lesson 18</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 18: Event System and Audit Logging</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Themes, Events, Security and Vault</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tong-quan-event-system"><strong>1. Event System Overview</strong></h2>

<p>Keycloak provides a comprehensive <strong>Event System</strong> system to monitor all activities in the system. Every action from logging in, registering, to changing admin configuration is logged as events.</p>

<h3 id="11-hai-loai-events"><strong>1.1 Two types of Events</strong></h3>

<table>
<thead>
<tr><th>Type</th><th>Description</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td><strong>Login Events (User Events)</strong></td><td>Actions related to users</td><td>LOGIN, REGISTER, LOGOUT, TOKEN_EXCHANGE</td></tr>
<tr><td><strong>Admin Events</strong></td><td>Configuration changes via Admin Console/API</td><td>CREATE user, UPDATE realm, DELETE client</td></tr>
</tbody>
</table>

<h3 id="12-login-event-types"><strong>1.2 Login Event Types</strong></h3>

<table>
<thead>
<tr><th>Event Type</th><th>Description</th><th>When does it occur</th></tr>
</thead>
<tbody>
<tr><td><code>LOGIN</code></td><td>Successful login</td><td>User entered correct credentials</td></tr>
<tr><td><code>LOGIN_ERROR</code></td><td>Login failed</td><td>Wrong username/password</td></tr>
<tr><td><code>REGISTER</code></td><td>Register new account</td><td>User successfully created account</td></tr>
<tr><td><code>REGISTER_ERROR</code></td><td>Registration failed</td><td>Duplicate email, validation failed</td></tr>
<tr><td><code>LOGOUT</code></td><td>Logout</td><td>User logout or session expired</td></tr>
<tr><td><code>CODE_TO_TOKEN</code></td><td>Exchange authorization code → token</td><td>OIDC Authorization Code flow</td></tr>
<tr><td><code>CODE_TO_TOKEN_ERROR</code></td><td>Token exchange failed</td><td>Invalid code, expired code</td></tr>
<tr><td><code>REFRESH_TOKEN</code></td><td>Refresh access token</td><td>Client uses refresh token</td></tr>
<tr><td><code>REFRESH_TOKEN_ERROR</code></td><td>Refresh token failed</td><td>Token revoked or expired</td></tr>
<tr><td><code>CLIENT_LOGIN</code></td><td>Client authentication</td><td>Service account login</td></tr>
<tr><td><code>INTROSPECT_TOKEN</code></td><td>Token introspection</td><td>Resource server verify token</td></tr>
<tr><td><code>UPDATE_PASSWORD</code></td><td>Change password</td><td>User change password</td></tr>
<tr><td><code>RESET_PASSWORD</code></td><td>Reset password</td><td>User reset via email link</td></tr>
<tr><td><code>VERIFY_EMAIL</code></td><td>Email verification</td><td>User click verification link</td></tr>
<tr><td><code>SEND_RESET_PASSWORD</code></td><td>Send password reset email</td><td>Request forgotten password</td></tr>
<tr><td><code>UPDATE_PROFILE</code></td><td>Update profile</td><td>User updates personal information</td></tr>
<tr><td><code>REMOVE_TOTP</code></td><td>Delete TOTP device</td><td>User remove OTP authenticator</td></tr>
<tr><td><code>UPDATE_TOTP</code></td><td>TOTP configuration</td><td>User set OTP</td></tr>
<tr><td><code>GRANT_CONSENT</code></td><td>User grants consent</td><td>OAuth2 consent screen</td></tr>
<tr><td><code>TOKEN_EXCHANGE</code></td><td>Token exchange</td><td>Exchange tokens between clients</td></tr>
</tbody>
</table>

<h3 id="13-admin-event-operations"><strong>1.3 Admin Event Operations</strong></h3>

<table>
<thead>
<tr><th>Operation</th><th>Description</th><th>Resource Types</th></tr>
</thead>
<tbody>
<tr><td><code>CREATE</code></td><td>Create new resource</td><td>USER, CLIENT, REALM, GROUP, ROLE...</td></tr>
<tr><td><code>UPDATE</code></td><td>Update resource</td><td>USER, CLIENT, REALM_SETTINGS...</td></tr>
<tr><td><code>DELETE</code></td><td>Delete resource</td><td>USER, CLIENT, SESSION...</td></tr>
<tr><td><code>ACTION</code></td><td>Perform action</td><td>RESET_PASSWORD, SEND_VERIFY_EMAIL...</td></tr>
</tbody>
</table>

<h2 id="2-bat-event-logging"><strong>2. Turn on Event Logging</strong></h2>

<h3 id="21-qua-admin-console"><strong>2.1 Qua Admin Console</strong></h3>

<ol>
<li>Login <strong>Admin Console</strong></li>
<li>Select Realm → <strong>Realm Settings</strong> → tab <strong>Events</strong></li>
<li>Configuration <strong>User events settings</strong>:
<ul>
<li><strong>Save events</strong>: ON</li>
<li><strong>Expiration</strong>: 30 days (depending on compliance requirements)</li>
<li><strong>Saved types</strong>: Select event types to save (default: ALL)</li>
</ul>
</li>
<li>Configuration <strong>Admin events settings</strong>:
<ul>
<li><strong>Save events</strong>: ON</li>
<li><strong>Include representation</strong>: ON (save request/response body)</li>
</ul>
</li>
<li><strong>Event listeners</strong>: Add necessary listeners</li>
</ol>

<h3 id="22-qua-rest-api"><strong>2.2 Qua REST API</strong></h3>

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

<h2 id="3-event-listeners"><strong>3. Event Listeners</strong></h2>

<p>Event Listeners handle events as they occur. Keycloak has the following listeners available:</p>

<h3 id="31-jboss-logging-listener"><strong>3.1 jboss-logging Listener</strong></h3>

<p>Log events to Keycloak server log (enabled by default):</p>

<pre><code class="language-text"># Log output mẫu
2026-03-15 10:30:45,123 INFO  [org.keycloak.events] (executor-thread-1)
  type=LOGIN, realmId=my-realm, clientId=my-app, userId=abc-123,
  ipAddress=192.168.1.100, auth_method=openid-connect,
  auth_type=code, redirect_uri=https://myapp.com/callback,
  username=john@example.com
</code></pre>

<h3 id="32-email-listener"><strong>3.2 Email Listener</strong></h3>

<p>Send email to user when there is an important event (for example: login from a new device):</p>

<pre><code class="language-text"># Bật email listener
Realm Settings → Events → Event listeners → Thêm "email"

# Events được gửi email por defecto:
- LOGIN_ERROR (quá nhiều lần → cảnh báo compromised account)
- UPDATE_PASSWORD
- REMOVE_TOTP
- UPDATE_TOTP
</code></pre>

<h2 id="4-event-details-va-event-store"><strong>4. Event Details and Event Store</strong></h2>

<h3 id="41-cau-truc-login-event"><strong>4.1 Login Event Structure</strong></h3>

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

<h3 id="42-cau-truc-admin-event"><strong>4.2 Admin Event Structure</strong></h3>

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

<h3 id="43-event-store-database"><strong>4.3 Event Store — Database</strong></h3>

<p>Events are stored in Keycloak's database:</p>

<table>
<thead>
<tr><th>Table</th><th>Content</th></tr>
</thead>
<tbody>
<tr><td><code>EVENT_ENTITY</code></td><td>Login events</td></tr>
<tr><td><code>ADMIN_EVENT_ENTITY</code></td><td>Admin events</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>Note:</strong> Event store is saved in Keycloak DB by default. With a large number of events, you should use a custom Event Listener to ship events to the external system and set short expiration for the built-in store.</p>
</blockquote>

<h2 id="5-event-filtering-va-truy-van"><strong>5. Event Filtering and Querying</strong></h2>

<h3 id="51-qua-admin-console"><strong>5.1 Qua Admin Console</strong></h3>

<ol>
<li>Go to <strong>Events</strong> → tab <strong>User events</strong> or <strong>Admin events</strong></li>
<li>Filter events theo:
<ul>
<li><strong>Event type</strong>: LOGIN, LOGIN_ERROR, REGISTER...</li>
<li><strong>Client</strong>: Select specific client</li>
<li><strong>User</strong>: Search theo user ID</li>
<li><strong>Date range</strong>: From/To date</li>
<li><strong>IP Address</strong>: Filter theo IP</li>
</ul>
</li>
</ol>

<h3 id="52-qua-rest-api-login-events"><strong>5.2 Qua REST API — Login Events</strong></h3>

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

<h3 id="53-qua-rest-api-admin-events"><strong>5.3 Qua REST API — Admin Events</strong></h3>

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

<h2 id="6-custom-event-listener-spi"><strong>6. Custom Event Listener SPI</strong></h2>

<p>Keycloak allows creating custom Event Listeners through <strong>Service Provider Interface (SPI)</strong>.</p>

<h3 id="61-tao-maven-project"><strong>6.1 Create Maven Project</strong></h3>

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

<h3 id="62-implement-eventlistenerprovider"><strong>6.2 Implement EventListenerProvider</strong></h3>

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

<h3 id="63-implement-eventlistenerproviderfactory"><strong>6.3 Implement EventListenerProviderFactory</strong></h3>

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

<h3 id="64-dang-ky-spi"><strong>6.4 Register SPI</strong></h3>

<pre><code class="language-text"># src/main/resources/META-INF/services/org.keycloak.events.EventListenerProviderFactory
com.example.CustomEventListenerProviderFactory
</code></pre>

<h3 id="65-deploy-va-kich-hoat"><strong>6.5 Deploy and Activate</strong></h3>

<pre><code class="language-bash"># Build
mvn clean package

# Deploy
cp target/custom-event-listener-1.0.0.jar $KEYCLOAK_HOME/providers/
$KEYCLOAK_HOME/bin/kc.sh build

# Kích hoạt: Admin Console → Realm Settings → Events → Event listeners
# Thêm "custom-event-listener"
</code></pre>

<h2 id="7-keycloak-json-logging"><strong>7. Keycloak JSON Logging</strong></h2>

<p>To integrate with centralized logging, configure Keycloak to output JSON logs:</p>

<pre><code class="language-bash"># Bật JSON logging
bin/kc.sh start \
  --log=console \
  --log-console-output=json

# Hoặc qua environment variables
KC_LOG=console
KC_LOG_CONSOLE_OUTPUT=json
</code></pre>

<h3 id="71-json-log-output-mau"><strong>7.1 JSON Log Output sample</strong></h3>

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

<h3 id="72-cau-hinh-log-levels"><strong>7.2 Configure Log Levels</strong></h3>

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

<h2 id="8-tich-hop-elk-stack"><strong>8. Integrating ELK Stack</strong></h2>

<p>Ship Keycloak logs to ELK Stack (Elasticsearch, Logstash, Kibana) for centralized analysis.</p>

<h3 id="81-kien-truc-tong-quan"><strong>8.1 General architecture</strong></h3>

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

<h3 id="82-filebeat-configuration"><strong>8.2 Filebeat Configuration</strong></h3>

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

<h3 id="83-logstash-pipeline"><strong>8.3 Logstash Pipeline</strong></h3>

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

<h3 id="84-kibana-dashboard"><strong>8.4 Kibana Dashboard</strong></h3>

<p>Create Kibana dashboards to monitor:</p>

<ul>
<li><strong>Login Success/Failure Rate</strong> — Bar chart over time</li>
<li><strong>Top Login Errors</strong> — Pie chart theo error type</li>
<li><strong>Login by Geo Location</strong> — Map visualization</li>
<li><strong>Failed Logins by IP</strong> — Brute-force detection table</li>
<li><strong>User Registration Trend</strong> — Line chart by day</li>
<li><strong>Admin Operations Audit</strong> — Data table with full details</li>
</ul>

<h2 id="9-tich-hop-grafana-loki"><strong>9. Grafana Loki Integration</strong></h2>

<p>Grafana Loki is a lighter log aggregation solution than ELK, suitable for Kubernetes environments.</p>

<h3 id="91-promtail-configuration"><strong>9.1 Promtail Configuration</strong></h3>

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

<h3 id="92-grafana-dashboard-queries"><strong>9.2 Grafana Dashboard Queries</strong></h3>

<pre><code class="language-text"># Login failures trong 1 giờ qua
{app="keycloak"} |~ "type=LOGIN_ERROR" | json | count_over_time({app="keycloak"} |~ "LOGIN_ERROR" [1h])

# Login events theo realm
sum by (realm) (count_over_time({app="keycloak"} |~ "type=LOGIN" [5m]))

# Top IPs với login failures
{app="keycloak"} |~ "type=LOGIN_ERROR" | regexp `ipAddress=(?P&lt;ip&gt;[\d.]+)` | count by (ip) | sort desc | limit 10
</code></pre>

<h2 id="10-siem-integration"><strong>10. SIEM Integration</strong></h2>

<p>Integrate Keycloak events with Security Information and Event Management (SIEM) systems.</p>

<h3 id="101-splunk-integration"><strong>10.1 Splunk Integration</strong></h3>

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

<h3 id="102-siem-use-cases"><strong>10.2 SIEM Use Cases</strong></h3>

<table>
<thead>
<tr><th>Use Case</th><th>Event Pattern</th><th>Action</th></tr>
</thead>
<tbody>
<tr><td><strong>Brute-force Detection</strong></td><td>Multiple LOGIN_ERROR from same IP</td><td>Alert + Block IP</td></tr>
<tr><td><strong>Account Takeover</strong></td><td>Login from unusual GeoIP</td><td>Alert + Require MFA</td></tr>
<tr><td><strong>Privilege Escalation</strong></td><td>Admin assign role admin</td><td>Alert + Review</td></tr>
<tr><td><strong>Data Exfiltration</strong></td><td>Many unusual token requests</td><td>Alert + Revoke sessions</td></tr>
<tr><td><strong>Suspicious Registration</strong></td><td>Multiple REGISTER from same IP</td><td>Alert + CAPTCHA</td></tr>
</tbody>
</table>

<h2 id="11-audit-compliance"><strong>11. Audit Compliance</strong></h2>

<h3 id="111-soc2-requirements"><strong>11.1 SOC2 Requirements</strong></h3>

<table>
<thead>
<tr><th>SOC2 Control</th><th>Keycloak Implementation</th></tr>
</thead>
<tbody>
<tr><td><strong>CC6.1</strong> — Logical access security</td><td>Event logging cho LOGIN, LOGIN_ERROR, PASSWORD changes</td></tr>
<tr><td><strong>CC6.2</strong> — User authentication</td><td>MFA events, registration events</td></tr>
<tr><td><strong>CC6.3</strong> — Access authorization</td><td>Admin Events cho role/permission changes</td></tr>
<tr><td><strong>CC7.2</strong> — Security monitoring</td><td>Real-time alerting on login failures</td></tr>
<tr><td><strong>CC8.1</strong> — Change management</td><td>Admin Events with representations</td></tr>
</tbody>
</table>

<h3 id="112-hipaa-requirements"><strong>11.2 HIPAA Requirements</strong></h3>

<table>
<thead>
<tr><th>HIPAA Control</th><th>Keycloak Implementation</th></tr>
</thead>
<tbody>
<tr><td><strong>§164.312(b)</strong> — Audit controls</td><td>Enable all event types, admin events with representations</td></tr>
<tr><td><strong>§164.312(d)</strong> — Person authentication</td><td>Event logging cho authentication attempts</td></tr>
<tr><td><strong>§164.308(a)(5)</strong> — Security awareness</td><td>Email notifications cho suspicious activity</td></tr>
</tbody>
</table>

<h3 id="113-retention-policy"><strong>11.3 Retention Policy</strong></h3>

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

<h2 id="12-alert-automation"><strong>12. Alert Automation</strong></h2>

<h3 id="121-prometheus-alerting"><strong>12.1 Prometheus Alerting</strong></h3>

<p>Keycloak expose metrics via <code>/metrics</code> endpoint (needs metrics-enabled):</p>

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

<h3 id="122-alertmanager-routing"><strong>12.2 Alertmanager Routing</strong></h3>

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

<h2 id="13-best-practices"><strong>13. Best Practices</strong></h2>

<ul>
<li><strong>Turn on both Login Events and Admin Events</strong> — Don't miss any activity in the system.</li>
<li><strong>Ship events to external system</strong> — Don't just rely on the built-in event store. Use ELK/Loki/SIEM for long-term storage.</li>
<li><strong>Enable admin event representations</strong> — Save request/response body for admin operations for full auditing.</li>
<li><strong>Set appropriate retention</strong> — Comply with compliance requirements (SOC2: 1 year, HIPAA: 6 years).</li>
<li><strong>Monitor login failure rates</strong> — Set alerts for brute-force detection and account takeover.</li>
<li><strong>Correlate events</strong> — Combine Keycloak events with application logs for a comprehensive picture.</li>
<li><strong>Protect event logs</strong> — Log data contains PII, needs encryption at rest and in transit, access restricted.</li>
</ul>
