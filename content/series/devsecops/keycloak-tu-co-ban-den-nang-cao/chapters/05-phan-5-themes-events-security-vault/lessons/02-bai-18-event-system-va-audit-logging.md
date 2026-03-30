---
id: 019d8b30-b118-7001-c001-e0c5f8100118
title: 'Bài 18: Event System và Audit Logging'
slug: bai-18-event-system-va-audit-logging
description: >-
  Event types (Login Events, Admin Events), bật event logging, cấu hình
  event listeners (jboss-logging, email), Event Store, Event Details,
  event filtering, truy vấn events qua Admin Console và REST API, custom
  Event Listener SPI, tích hợp ELK Stack / Grafana Loki cho centralized
  logging, SIEM integration, audit compliance (SOC2, HIPAA) và alert
  automation.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 5: Themes, Events, Security và Vault"
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak từ Cơ bản đến Nâng cao
  slug: keycloak-tu-co-ban-den-nang-cao
---

<h2 id="1-tong-quan-event-system"><strong>1. Tổng quan Event System</strong></h2>

<p>Keycloak cung cấp hệ thống <strong>Event System</strong> toàn diện để theo dõi mọi hoạt động trong hệ thống. Mỗi hành động từ đăng nhập, đăng ký, đến thay đổi cấu hình admin đều được ghi lại thành events.</p>

<h3 id="11-hai-loai-events"><strong>1.1 Hai loại Events</strong></h3>

<table>
<thead>
<tr><th>Loại</th><th>Mô tả</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td><strong>Login Events (User Events)</strong></td><td>Các hành động liên quan đến người dùng</td><td>LOGIN, REGISTER, LOGOUT, TOKEN_EXCHANGE</td></tr>
<tr><td><strong>Admin Events</strong></td><td>Các thay đổi cấu hình qua Admin Console/API</td><td>CREATE user, UPDATE realm, DELETE client</td></tr>
</tbody>
</table>

<h3 id="12-login-event-types"><strong>1.2 Login Event Types</strong></h3>

<table>
<thead>
<tr><th>Event Type</th><th>Mô tả</th><th>Khi nào xảy ra</th></tr>
</thead>
<tbody>
<tr><td><code>LOGIN</code></td><td>Đăng nhập thành công</td><td>User nhập đúng credentials</td></tr>
<tr><td><code>LOGIN_ERROR</code></td><td>Đăng nhập thất bại</td><td>Sai username/password</td></tr>
<tr><td><code>REGISTER</code></td><td>Đăng ký tài khoản mới</td><td>User tạo account thành công</td></tr>
<tr><td><code>REGISTER_ERROR</code></td><td>Đăng ký thất bại</td><td>Email trùng, validation fail</td></tr>
<tr><td><code>LOGOUT</code></td><td>Đăng xuất</td><td>User logout hoặc session expired</td></tr>
<tr><td><code>CODE_TO_TOKEN</code></td><td>Exchange authorization code → token</td><td>OIDC Authorization Code flow</td></tr>
<tr><td><code>CODE_TO_TOKEN_ERROR</code></td><td>Token exchange thất bại</td><td>Invalid code, expired code</td></tr>
<tr><td><code>REFRESH_TOKEN</code></td><td>Refresh access token</td><td>Client dùng refresh token</td></tr>
<tr><td><code>REFRESH_TOKEN_ERROR</code></td><td>Refresh token thất bại</td><td>Token revoked hoặc expired</td></tr>
<tr><td><code>CLIENT_LOGIN</code></td><td>Client authentication</td><td>Service account login</td></tr>
<tr><td><code>INTROSPECT_TOKEN</code></td><td>Token introspection</td><td>Resource server verify token</td></tr>
<tr><td><code>UPDATE_PASSWORD</code></td><td>Đổi mật khẩu</td><td>User thay đổi password</td></tr>
<tr><td><code>RESET_PASSWORD</code></td><td>Reset mật khẩu</td><td>User reset qua email link</td></tr>
<tr><td><code>VERIFY_EMAIL</code></td><td>Xác thực email</td><td>User click verification link</td></tr>
<tr><td><code>SEND_RESET_PASSWORD</code></td><td>Gửi email reset password</td><td>Request forgot password</td></tr>
<tr><td><code>UPDATE_PROFILE</code></td><td>Cập nhật hồ sơ</td><td>User cập nhật thông tin cá nhân</td></tr>
<tr><td><code>REMOVE_TOTP</code></td><td>Xóa TOTP device</td><td>User gỡ OTP authenticator</td></tr>
<tr><td><code>UPDATE_TOTP</code></td><td>Cấu hình TOTP</td><td>User thiết lập OTP</td></tr>
<tr><td><code>GRANT_CONSENT</code></td><td>User cấp quyền consent</td><td>OAuth2 consent screen</td></tr>
<tr><td><code>TOKEN_EXCHANGE</code></td><td>Token exchange</td><td>Exchange token giữa các clients</td></tr>
</tbody>
</table>

<h3 id="13-admin-event-operations"><strong>1.3 Admin Event Operations</strong></h3>

<table>
<thead>
<tr><th>Operation</th><th>Mô tả</th><th>Resource Types</th></tr>
</thead>
<tbody>
<tr><td><code>CREATE</code></td><td>Tạo mới resource</td><td>USER, CLIENT, REALM, GROUP, ROLE...</td></tr>
<tr><td><code>UPDATE</code></td><td>Cập nhật resource</td><td>USER, CLIENT, REALM_SETTINGS...</td></tr>
<tr><td><code>DELETE</code></td><td>Xóa resource</td><td>USER, CLIENT, SESSION...</td></tr>
<tr><td><code>ACTION</code></td><td>Thực hiện hành động</td><td>RESET_PASSWORD, SEND_VERIFY_EMAIL...</td></tr>
</tbody>
</table>

<h2 id="2-bat-event-logging"><strong>2. Bật Event Logging</strong></h2>

<h3 id="21-qua-admin-console"><strong>2.1 Qua Admin Console</strong></h3>

<ol>
<li>Đăng nhập <strong>Admin Console</strong></li>
<li>Chọn Realm → <strong>Realm Settings</strong> → tab <strong>Events</strong></li>
<li>Cấu hình <strong>User events settings</strong>:
<ul>
<li><strong>Save events</strong>: ON</li>
<li><strong>Expiration</strong>: 30 days (tùy yêu cầu compliance)</li>
<li><strong>Saved types</strong>: Chọn event types cần lưu (mặc định: ALL)</li>
</ul>
</li>
<li>Cấu hình <strong>Admin events settings</strong>:
<ul>
<li><strong>Save events</strong>: ON</li>
<li><strong>Include representation</strong>: ON (lưu request/response body)</li>
</ul>
</li>
<li><strong>Event listeners</strong>: Thêm listeners cần thiết</li>
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

<p>Event Listeners xử lý events khi chúng xảy ra. Keycloak có sẵn các listeners sau:</p>

<h3 id="31-jboss-logging-listener"><strong>3.1 jboss-logging Listener</strong></h3>

<p>Ghi events vào Keycloak server log (mặc định đã bật):</p>

<pre><code class="language-text"># Log output mẫu
2026-03-15 10:30:45,123 INFO  [org.keycloak.events] (executor-thread-1)
  type=LOGIN, realmId=my-realm, clientId=my-app, userId=abc-123,
  ipAddress=192.168.1.100, auth_method=openid-connect,
  auth_type=code, redirect_uri=https://myapp.com/callback,
  username=john@example.com
</code></pre>

<h3 id="32-email-listener"><strong>3.2 Email Listener</strong></h3>

<p>Gửi email cho user khi có events quan trọng (ví dụ: login từ thiết bị mới):</p>

<pre><code class="language-text"># Bật email listener
Realm Settings → Events → Event listeners → Thêm "email"

# Events được gửi email por defecto:
- LOGIN_ERROR (quá nhiều lần → cảnh báo compromised account)
- UPDATE_PASSWORD
- REMOVE_TOTP
- UPDATE_TOTP
</code></pre>

<h2 id="4-event-details-va-event-store"><strong>4. Event Details và Event Store</strong></h2>

<h3 id="41-cau-truc-login-event"><strong>4.1 Cấu trúc Login Event</strong></h3>

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

<h3 id="42-cau-truc-admin-event"><strong>4.2 Cấu trúc Admin Event</strong></h3>

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

<p>Events được lưu trong database của Keycloak:</p>

<table>
<thead>
<tr><th>Table</th><th>Nội dung</th></tr>
</thead>
<tbody>
<tr><td><code>EVENT_ENTITY</code></td><td>Login events</td></tr>
<tr><td><code>ADMIN_EVENT_ENTITY</code></td><td>Admin events</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>Lưu ý:</strong> Event store mặc định lưu trong DB Keycloak. Với lượng lớn events, nên sử dụng custom Event Listener để ship events ra hệ thống bên ngoài và set expiration ngắn cho built-in store.</p>
</blockquote>

<h2 id="5-event-filtering-va-truy-van"><strong>5. Event Filtering và Truy vấn</strong></h2>

<h3 id="51-qua-admin-console"><strong>5.1 Qua Admin Console</strong></h3>

<ol>
<li>Vào <strong>Events</strong> → tab <strong>User events</strong> hoặc <strong>Admin events</strong></li>
<li>Filter events theo:
<ul>
<li><strong>Event type</strong>: LOGIN, LOGIN_ERROR, REGISTER...</li>
<li><strong>Client</strong>: Chọn client cụ thể</li>
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

<p>Keycloak cho phép tạo custom Event Listener thông qua <strong>Service Provider Interface (SPI)</strong>.</p>

<h3 id="61-tao-maven-project"><strong>6.1 Tạo Maven Project</strong></h3>

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

<h3 id="64-dang-ky-spi"><strong>6.4 Đăng ký SPI</strong></h3>

<pre><code class="language-text"># src/main/resources/META-INF/services/org.keycloak.events.EventListenerProviderFactory
com.example.CustomEventListenerProviderFactory
</code></pre>

<h3 id="65-deploy-va-kich-hoat"><strong>6.5 Deploy và Kích hoạt</strong></h3>

<pre><code class="language-bash"># Build
mvn clean package

# Deploy
cp target/custom-event-listener-1.0.0.jar $KEYCLOAK_HOME/providers/
$KEYCLOAK_HOME/bin/kc.sh build

# Kích hoạt: Admin Console → Realm Settings → Events → Event listeners
# Thêm "custom-event-listener"
</code></pre>

<h2 id="7-keycloak-json-logging"><strong>7. Keycloak JSON Logging</strong></h2>

<p>Để tích hợp với centralized logging, cấu hình Keycloak output JSON logs:</p>

<pre><code class="language-bash"># Bật JSON logging
bin/kc.sh start \
  --log=console \
  --log-console-output=json

# Hoặc qua environment variables
KC_LOG=console
KC_LOG_CONSOLE_OUTPUT=json
</code></pre>

<h3 id="71-json-log-output-mau"><strong>7.1 JSON Log Output mẫu</strong></h3>

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

<h3 id="72-cau-hinh-log-levels"><strong>7.2 Cấu hình Log Levels</strong></h3>

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

<h2 id="8-tich-hop-elk-stack"><strong>8. Tích hợp ELK Stack</strong></h2>

<p>Ship Keycloak logs đến ELK Stack (Elasticsearch, Logstash, Kibana) để phân tích tập trung.</p>

<h3 id="81-kien-truc-tong-quan"><strong>8.1 Kiến trúc tổng quan</strong></h3>

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

<p>Tạo Kibana dashboards để monitor:</p>

<ul>
<li><strong>Login Success/Failure Rate</strong> — Bar chart theo thời gian</li>
<li><strong>Top Login Errors</strong> — Pie chart theo error type</li>
<li><strong>Login by Geo Location</strong> — Map visualization</li>
<li><strong>Failed Logins by IP</strong> — Table phát hiện brute-force</li>
<li><strong>User Registration Trend</strong> — Line chart theo ngày</li>
<li><strong>Admin Operations Audit</strong> — Data table với full details</li>
</ul>

<h2 id="9-tich-hop-grafana-loki"><strong>9. Tích hợp Grafana Loki</strong></h2>

<p>Grafana Loki là giải pháp log aggregation nhẹ hơn ELK, phù hợp cho Kubernetes environments.</p>

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

<p>Tích hợp Keycloak events với Security Information and Event Management (SIEM) systems.</p>

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
<tr><td><strong>Brute-force Detection</strong></td><td>Nhiều LOGIN_ERROR từ cùng IP</td><td>Alert + Block IP</td></tr>
<tr><td><strong>Account Takeover</strong></td><td>Login từ GeoIP bất thường</td><td>Alert + Require MFA</td></tr>
<tr><td><strong>Privilege Escalation</strong></td><td>Admin assign role admin</td><td>Alert + Review</td></tr>
<tr><td><strong>Data Exfiltration</strong></td><td>Nhiều token requests bất thường</td><td>Alert + Revoke sessions</td></tr>
<tr><td><strong>Suspicious Registration</strong></td><td>Nhiều REGISTER từ cùng IP</td><td>Alert + CAPTCHA</td></tr>
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
<tr><td><strong>CC7.2</strong> — Security monitoring</td><td>Real-time alerting trên login failures</td></tr>
<tr><td><strong>CC8.1</strong> — Change management</td><td>Admin Events với representations</td></tr>
</tbody>
</table>

<h3 id="112-hipaa-requirements"><strong>11.2 HIPAA Requirements</strong></h3>

<table>
<thead>
<tr><th>HIPAA Control</th><th>Keycloak Implementation</th></tr>
</thead>
<tbody>
<tr><td><strong>§164.312(b)</strong> — Audit controls</td><td>Bật tất cả event types, admin events với representations</td></tr>
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

<p>Keycloak expose metrics qua <code>/metrics</code> endpoint (cần bật metrics-enabled):</p>

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
<li><strong>Bật cả Login Events và Admin Events</strong> — Không bỏ sót bất kỳ hoạt động nào trong hệ thống.</li>
<li><strong>Ship events ra external system</strong> — Không chỉ dựa vào built-in event store. Sử dụng ELK/Loki/SIEM cho long-term storage.</li>
<li><strong>Bật admin event representations</strong> — Lưu request/response body cho admin operations để audit đầy đủ.</li>
<li><strong>Set appropriate retention</strong> — Tuân thủ compliance requirements (SOC2: 1 năm, HIPAA: 6 năm).</li>
<li><strong>Monitor login failure rates</strong> — Set alerts cho brute-force detection và account takeover.</li>
<li><strong>Correlate events</strong> — Kết hợp Keycloak events với application logs để có bức tranh toàn diện.</li>
<li><strong>Protect event logs</strong> — Log data chứa PII, cần mã hóa at rest và in transit, hạn chế access.</li>
</ul>
