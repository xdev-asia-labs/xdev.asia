---
id: 019d8b30-b119-7001-c001-e0c5f8100119
title: 'レッスン 19: 高度なセキュリティと Vault の統合'
slug: bai-19-bao-mat-nang-cao-va-vault-integration
description: セキュリティ強化 Keycloak、コンテンツ セキュリティ ポリシー ヘッダー、ブルート フォース検出構成、パスワード ポリシー (各ポリシーの詳細)、セッション管理 (セッション制限、アイドル/最大タイムアウト)、CORS 構成、クリックジャッキング保護、HTTPS/TLS ベスト プラクティス、証明書管理、Vault 統合 (HashiCorp Vault、Kubernetes Secrets、ファイルベース)、ローテーション資格情報、管理コンソールのアクセス制限。
duration_minutes: 220
is_free: true
video_url: null
sort_order: 19
section_title: 'パート 5: テーマ、イベント、セキュリティ、および Vault'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6341" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6341)"/>

  <!-- Decorations -->
  <g>
    <circle cx="900" cy="170" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="90" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="50" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="50" x2="1100" y2="130" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="80" x2="1050" y2="150" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="971.650635094611,137.5 971.650635094611,162.5 950,175 928.349364905389,162.5 928.349364905389,137.5 950,125" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — レッスン 19</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 19: 高度なセキュリティとボールト</tspan>
      <tspan x="60" dy="42">統合</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: テーマ、イベント、セキュリティ、および Vault</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-security-hardening-checklist"><strong>1. セキュリティ強化チェックリスト</strong></h2>

<p>Keycloakを実稼働環境に導入する前に、次の強化策を完全に実装する必要があります。</p>

<table>
<thead>
<tr><th>#</th><th>カテゴリ</th><th>レベル</th><th>状態</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>HTTPS/TLS の強制</td><td>致命的</td><td>☐</td></tr>
<tr><td>2</td><td>デフォルトの管理者の資格情報を変更する</td><td>致命的</td><td>☐</td></tr>
<tr><td>3</td><td>ブルートフォース検出</td><td>高い</td><td>☐</td></tr>
<tr><td>4</td><td>パスワードポリシー</td><td>高い</td><td>☐</td></tr>
<tr><td>5</td><td>セッションタイムアウト</td><td>高い</td><td>☐</td></tr>
<tr><td>6</td><td>CSPヘッダー</td><td>高い</td><td>☐</td></tr>
<tr><td>7</td><td>クリックジャッキング保護</td><td>高い</td><td>☐</td></tr>
<tr><td>8</td><td>CORS 構成</td><td>中くらい</td><td>☐</td></tr>
<tr><td>9</td><td>シークレットの Vault 統合</td><td>高い</td><td>☐</td></tr>
<tr><td>10</td><td>管理コンソールのアクセス制限</td><td>高い</td><td>☐</td></tr>
<tr><td>11</td><td>未使用の機能/エンドポイントを無効にする</td><td>中くらい</td><td>☐</td></tr>
<tr><td>12</td><td>保存時のデータベースの暗号化</td><td>高い</td><td>☐</td></tr>
<tr><td>13</td><td>トークンセキュリティ (有効期限が短い)</td><td>高い</td><td>☐</td></tr>
<tr><td>14</td><td>監査ログが有効になっている</td><td>高い</td><td>☐</td></tr>
</tbody>
</table>

<h2 id="2-content-security-policy-headers"><strong>2. コンテンツ セキュリティ ポリシー (CSP) ヘッダー</strong></h2>

<p>CSP ヘッダーは、ページへの読み込みを許可するリソースを制御することにより、XSS 攻撃から保護します。</p>

<h3 id="21-cau-hinh-csp-trong-keycloak"><strong>2.1 KeycloakでCSPを構成する</strong></h3>

<p>KeycloakはCSPを構成します<strong>レルム設定 → セキュリティ防御</strong>:</p>

<pre><code class="language-text"># Headers tab → Content-Security-Policy
frame-src 'self'; frame-ancestors 'self'; object-src 'none';

# Nâng cao: restrict thêm script-src, style-src
frame-src 'self'; frame-ancestors 'self'; object-src 'none'; \
script-src 'self' 'unsafe-inline'; \
style-src 'self' 'unsafe-inline';
</code></pre>

<h3 id="22-cau-hinh-qua-rest-api"><strong>2.2 REST APIによる設定</strong></h3>

<pre><code class="language-bash"># Cập nhật Security Headers cho realm
curl -X PUT "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "browserSecurityHeaders": {
        "contentSecurityPolicy": "frame-src '\''self'\''; frame-ancestors '\''self'\''; object-src '\''none'\'';",
        "contentSecurityPolicyReportOnly": "",
        "xContentTypeOptions": "nosniff",
        "xRobotsTag": "none",
        "xFrameOptions": "SAMEORIGIN",
        "strictTransportSecurity": "max-age=31536000; includeSubDomains",
        "xXSSProtection": "1; mode=block",
        "referrerPolicy": "no-referrer"
    }
  }'
</code></pre>

<h3 id="23-cac-header-bao-mat-quan-trong"><strong>2.3 重要なセキュリティヘッダー</strong></h3>

<table>
<thead>
<tr><th>ヘッダ</th><th>推奨値</th><th>目的</th></tr>
</thead>
<tbody>
<tr><td><code>X フレーム オプション</code></td><td><code>同じ原産地</code></td><td>クリックジャッキング対策</td></tr>
<tr><td><code>X-コンテンツタイプ-オプション</code></td><td><code>鼻を鳴らす</code></td><td>MIME タイプ スニッフィングを防止する</td></tr>
<tr><td><code>X-XSS 保護</code></td><td><code>1;モード=ブロック</code></td><td>ブラウザの XSS フィルターをオンにする</td></tr>
<tr><td><code>厳格な輸送セキュリティ</code></td><td><code>最大年齢=31536000;サブドメインを含む</code></td><td>HTTPS (HSTS) を強制する</td></tr>
<tr><td><code>リファラーポリシー</code></td><td><code>非参照者</code></td><td>リファラーヘッダーを送信しない</td></tr>
<tr><td><code>コンテンツセキュリティポリシー</code></td><td>フレームソース、オブジェクトソースを制限する</td><td>XSS とデータ インジェクションを防止する</td></tr>
</tbody>
</table>

<h2 id="3-brute-force-detection"><strong>3. ブルートフォース検出</strong></h2>

<p>Keycloakには、ログイン試行に対するブルートフォース防止メカニズムが組み込まれています。</p>

<h3 id="31-cau-hinh-brute-force"><strong>3.1 ブルートフォース構成</strong></h3>

<p>入力<strong>レルム設定 → セキュリティ防御 → ブルートフォース検出</strong>:</p>

<pre><code class="language-text"># Bật/tắt
Enabled: ON

# Lockout settings
Permanent Lockout: OFF                  # Có khóa vĩnh viễn không
Max Login Failures: 5                   # Số lần thất bại tối đa trước khi lock
Wait Increment (seconds): 60            # Thời gian chờ tăng dần mỗi lần fail tiếp
Max Wait (seconds): 900                 # Thời gian chờ tối đa (15 phút)
Quick Login Check (milliseconds): 1000  # Khoảng thời gian giữa 2 lần login nhanh
Minimum Quick Login Wait: 60            # Chờ tối thiểu khi quick login detected
Failure Reset Time (seconds): 43200     # Reset failure counter sau 12 giờ
</code></pre>

<h3 id="32-cau-hinh-qua-rest-api"><strong>3.2 REST APIによる設定</strong></h3>

<pre><code class="language-bash">curl -X PUT "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "bruteForceProtected": true,
    "permanentLockout": false,
    "maxFailureWaitSeconds": 900,
    "minimumQuickLoginWaitSeconds": 60,
    "waitIncrementSeconds": 60,
    "quickLoginCheckMilliSeconds": 1000,
    "maxDeltaTimeSeconds": 43200,
    "failureFactor": 5
  }'
</code></pre>

<h3 id="33-cach-hoat-dong-brute-force"><strong>3.3 ブルートフォース検出の仕組み</strong></h3>

<pre><code class="language-text">Lần fail thứ 1: Không lockout
Lần fail thứ 2: Không lockout
Lần fail thứ 3: Không lockout
Lần fail thứ 4: Không lockout
Lần fail thứ 5: Lockout 60 giây (waitIncrementSeconds)
Lần fail thứ 6: Lockout 120 giây (60 * 2)
Lần fail thứ 7: Lockout 240 giây (60 * 4)
...tiếp tục tăng...
Max lockout: 900 giây (15 phút)

Sau 12 giờ không fail: Reset counter về 0
</code></pre>

<h3 id="34-unlock-user"><strong>3.4 ロックの解除 ユーザーがロックされています</strong></h3>

<pre><code class="language-bash"># Kiểm tra trạng thái brute-force cho user
curl -s "http://localhost:8080/admin/realms/my-realm/attack-detection/brute-force/users/$USER_ID" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .

# Response mẫu:
# {
#   "numFailures": 6,
#   "disabled": true,
#   "lastIPFailure": "192.168.1.100",
#   "lastFailure": 1710489045000
# }

# Unlock user cụ thể
curl -X DELETE "http://localhost:8080/admin/realms/my-realm/attack-detection/brute-force/users/$USER_ID" \
  -H "Authorization: Bearer $ACCESS_TOKEN"

# Unlock tất cả users
curl -X DELETE "http://localhost:8080/admin/realms/my-realm/attack-detection/brute-force/users" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
</code></pre>

<h2 id="4-password-policies"><strong>4. パスワードポリシー</strong></h2>

<p>Keycloakは、強力なパスワードを確保するために多くのパスワード・ポリシーをサポートしています。</p>

<h3 id="41-cau-hinh-password-policies"><strong>4.1 パスワードポリシーの構成</strong></h3>

<p>入力<strong>認証 → ポリシー → パスワードポリシー</strong>そしてポリシーを追加します。</p>

<table>
<thead>
<tr><th>ポリシー</th><th>説明する</th><th>サンプル値</th></tr>
</thead>
<tbody>
<tr><td><code>長さ。長さ</code></td><td>最小長さ</td><td><code>12</code></td></tr>
<tr><td><code>最大長さ</code></td><td>最大長さ</td><td><code>128</code></td></tr>
<tr><td><code>数字</code></td><td>数字の最小数</td><td><code>1</code></td></tr>
<tr><td><code>小文字</code></td><td>最小文字数</td><td><code>1</code></td></tr>
<tr><td><code>大文字</code></td><td>大文字の最小数</td><td><code>1</code></td></tr>
<tr><td><code>特別な文字</code></td><td>特殊文字の最小数</td><td><code>1</code></td></tr>
<tr><td><code>ユーザー名ではありません</code></td><td>パスワードはユーザー名と同じであってはなりません</td><td>(値なし)</td></tr>
<tr><td><code>メールではありません</code></td><td>パスワードはメールアドレスと一致してはなりません</td><td>(値なし)</td></tr>
<tr><td><code>パスワード履歴</code></td><td>過去 N 個のパスワードを再利用しないでください</td><td><code>5</code></td></tr>
<tr><td><code>ハッシュアルゴリズム</code></td><td>パスワードハッシュアルゴリズム</td><td><code>pbkdf2-sha512</code></td></tr>
<tr><td><code>ハッシュ反復</code></td><td>ハッシュの反復数</td><td><code>210000</code></td></tr>
<tr><td><code>強制期限切れパスワード変更</code></td><td>N日後にMKの変更を強制される</td><td><code>90</code></td></tr>
<tr><td><code>regulx式</code></td><td>カスタム正規表現パターン</td><td><code>^(?!.*(.)\1{2}).*$</code></td></tr>
</tbody>
</table>

<h3 id="42-cau-hinh-qua-rest-api"><strong>4.2 REST APIによる設定</strong></h3>

<pre><code class="language-bash"># Set password policies cho realm
curl -X PUT "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "passwordPolicy": "length(12) and digits(1) and lowerCase(1) and upperCase(1) and specialChars(1) and notUsername and notEmail and passwordHistory(5) and hashAlgorithm(pbkdf2-sha512) and hashIterations(210000) and forceExpiredPasswordChange(90) and maxLength(128)"
  }'
</code></pre>

<h3 id="43-hash-algorithm-recommendations"><strong>4.3 ハッシュアルゴリズムの推奨事項</strong></h3>

<table>
<thead>
<tr><th>アルゴリズム</th><th>反復 (推奨)</th><th>注記</th></tr>
</thead>
<tbody>
<tr><td><code>pbkdf2-sha256</code></td><td>600,000</td><td>OWASP 2023 の推奨事項</td></tr>
<tr><td><code>pbkdf2-sha512</code></td><td>210,000</td><td>OWASP 2023 の推奨事項</td></tr>
<tr><td><code>アルゴン2</code></td><td>該当なし (Keycloak 24+)</td><td>メモリに負荷がかかるため、新規導入に推奨</td></tr>
</tbody>
</table>

<pre><code class="language-bash"># Sử dụng Argon2 (Keycloak 24+)
# passwordPolicy: hashAlgorithm(argon2)
curl -X PUT "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "passwordPolicy": "length(12) and digits(1) and lowerCase(1) and upperCase(1) and specialChars(1) and hashAlgorithm(argon2)"
  }'
</code></pre>

<h2 id="5-session-management"><strong>5. セッション管理</strong></h2>

<p>厳密なセッション管理はセキュリティにとって重要です。</p>

<h3 id="51-session-timeouts"><strong>5.1 セッションのタイムアウト</strong></h3>

<p>での構成<strong>レルム設定 → セッション</strong>:</p>

<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>推奨</th></tr>
</thead>
<tbody>
<tr><td><strong>SSO セッションのアイドル状態</strong></td><td>SSO セッションの最大アイドル時間</td><td>30分</td></tr>
<tr><td><strong>SSO セッション最大値</strong></td><td>SSO セッションの最大時間 (アクティビティに関係なく)</td><td>10時</td></tr>
<tr><td><strong>SSO セッション アイドル状態 リメンバーミー</strong></td><td>「Remember Me」が有効な場合のアイドル タイムアウト</td><td>7日間</td></tr>
<tr><td><strong>SSO セッション Max Remember Me</strong></td><td>「Remember Me」が有効な場合の最大有効期間</td><td>30日</td></tr>
<tr><td><strong>クライアントセッションアイドル状態</strong></td><td>クライアント固有のセッションのアイドル タイムアウト</td><td>15分</td></tr>
<tr><td><strong>クライアントセッション最大値</strong></td><td>クライアント固有のセッションの最大存続期間</td><td>8時</td></tr>
<tr><td><strong>オフラインセッションアイドル状態</strong></td><td>オフライントークンのアイドルタイムアウト</td><td>30日</td></tr>
<tr><td><strong>オフラインセッション最大値</strong></td><td>オフラインセッションの最大制限ライフタイム</td><td>60日</td></tr>
</tbody>
</table>

<h3 id="52-cau-hinh-sessions-chi-tiet"><strong>5.2 セッションの詳細な設定</strong></h3>

<pre><code class="language-bash"># Cấu hình session timeouts
curl -X PUT "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "ssoSessionIdleTimeout": 1800,
    "ssoSessionMaxLifespan": 36000,
    "ssoSessionIdleTimeoutRememberMe": 604800,
    "ssoSessionMaxLifespanRememberMe": 2592000,
    "clientSessionIdleTimeout": 900,
    "clientSessionMaxLifespan": 28800,
    "offlineSessionIdleTimeout": 2592000,
    "offlineSessionMaxLifespan": 5184000,
    "offlineSessionMaxLifespanEnabled": true
  }'
</code></pre>

<h3 id="53-session-limits"><strong>5.3 セッション制限</strong></h3>

<p>ユーザーごとの同時セッション数を制限します。</p>

<pre><code class="language-text"># Authentication → Flows → Browser Flow
# Thêm step "User Session Limits"

Session Limits Configuration:
- Max concurrent sessions per user: 3
- Behavior on breach: "Terminate oldest session"

# Hoặc cấu hình qua Authentication Flow:
# 1. Copy "Browser" flow
# 2. Thêm execution "User Session Count Limiter"  
# 3. Cấu hình max sessions
</code></pre>

<h3 id="54-kiem-tra-va-revoke-sessions"><strong>5.4 セッションの監査と取り消し</strong></h3>

<pre><code class="language-bash"># List sessions của user
curl -s "http://localhost:8080/admin/realms/my-realm/users/$USER_ID/sessions" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .

# Response mẫu:
# [
#   {
#     "id": "session-id",
#     "username": "john",
#     "userId": "user-uuid",
#     "ipAddress": "192.168.1.100",
#     "start": 1710489045,
#     "lastAccess": 1710492645,
#     "clients": { "client-uuid": "my-app" }
#   }
# ]

# Revoke session cụ thể
curl -X DELETE "http://localhost:8080/admin/realms/my-realm/sessions/$SESSION_ID" \
  -H "Authorization: Bearer $ACCESS_TOKEN"

# Logout tất cả sessions của user
curl -X POST "http://localhost:8080/admin/realms/my-realm/users/$USER_ID/logout" \
  -H "Authorization: Bearer $ACCESS_TOKEN"

# Logout tất cả sessions trong realm
curl -X POST "http://localhost:8080/admin/realms/my-realm/logout-all" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
</code></pre>

<h2 id="6-cors-configuration"><strong>6. CORS の設定</strong></h2>

<p>CORS (Cross-Origin Resource Sharing) が構成されている<strong>クライアントごと</strong>キークロークで。</p>

<h3 id="61-cau-hinh-cors-cho-client"><strong>6.1 クライアントの CORS の構成</strong></h3>

<pre><code class="language-text"># Client Settings → Web Origins

# Cho phép specific origins
https://myapp.com
https://admin.myapp.com

# Cho phép tất cả redirect URIs (sử dụng "+")
+

# KHÔNG sử dụng "*" trong production
# "*" cho phép tất cả origins — nguy hiểm!
</code></pre>

<pre><code class="language-bash"># Cấu hình CORS qua REST API
curl -X PUT "http://localhost:8080/admin/realms/my-realm/clients/$CLIENT_UUID" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "webOrigins": [
        "https://myapp.com",
        "https://admin.myapp.com"
    ]
  }'
</code></pre>

<h3 id="62-cors-best-practices"><strong>6.2 CORS のベスト プラクティス</strong></h3>

<ul>
<li><strong>常に特定の起源を指定する</strong>— ワイルドカードは使用しないでください<code>*</code></li>
<li><strong>使用<code>+</code></strong>— 有効なリダイレクト URI から起点を自動的に導出する</li>
<li><strong>個別のクライアント</strong>— 各フロントエンド アプリには、独自の CORS 構成を持つ独自のクライアントが必要です</li>
<li><strong>慎重にテストしてください</strong>— ブラウザーの DevTools で CORS 応答ヘッダーを確認する</li>
</ul>

<h2 id="7-clickjacking-protection"><strong>7. クリックジャッキング保護</strong></h2>

<p>クリックジャッキング攻撃は、Keycloak ログインページを iframe に埋め込んで認証情報を盗みます。</p>

<h3 id="71-cau-hinh-x-frame-options"><strong>7.1 X フレーム オプションの構成</strong></h3>

<pre><code class="language-text"># Realm Settings → Security Defenses → Headers

X-Frame-Options: SAMEORIGIN
# - DENY: Không cho phép iframe dưới bất kỳ điều kiện nào
# - SAMEORIGIN: Chỉ cho phép iframe từ cùng origin
# - ALLOW-FROM uri: (deprecated, dùng CSP frame-ancestors thay thế)
</code></pre>

<h3 id="72-csp-frame-ancestors"><strong>7.2 CSP フレーム祖先 (推奨)</strong></h3>

<pre><code class="language-text"># Content-Security-Policy header
frame-ancestors 'self';

# Cho phép specific parent origins
frame-ancestors 'self' https://portal.mycompany.com;
</code></pre>

<h2 id="8-https-tls-enforcement"><strong>8. HTTPS/TLS の強制</strong></h2>

<h3 id="81-cau-hinh-hostname-va-tls"><strong>8.1 ホスト名とTLSの構成</strong></h3>

<pre><code class="language-bash"># Production: Strict HTTPS
bin/kc.sh start \
  --hostname=auth.mycompany.com \
  --hostname-strict=true \
  --https-certificate-file=/etc/certs/tls.crt \
  --https-certificate-key-file=/etc/certs/tls.key \
  --https-port=8443 \
  --http-enabled=false
</code></pre>

<h3 id="82-tls-voi-reverse-proxy"><strong>8.2 リバース プロキシを使用した TLS (一般的)</strong></h3>

<pre><code class="language-bash"># Khi sử dụng reverse proxy (Nginx, HAProxy) terminate TLS
bin/kc.sh start \
  --hostname=auth.mycompany.com \
  --hostname-strict=true \
  --proxy-headers=xforwarded \
  --http-enabled=true \
  --http-port=8080
</code></pre>

<pre><code class="language-nginx"># Nginx reverse proxy configuration
server {
    listen 443 ssl http2;
    server_name auth.mycompany.com;

    ssl_certificate /etc/ssl/certs/auth.mycompany.com.crt;
    ssl_certificate_key /etc/ssl/private/auth.mycompany.com.key;

    # Strong TLS configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # HSTS
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    location / {
        proxy_pass http://keycloak:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port $server_port;

        # WebSocket support
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # Timeouts
        proxy_read_timeout 90s;
        proxy_send_timeout 90s;
    }
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name auth.mycompany.com;
    return 301 https://$host$request_uri;
}
</code></pre>

<h3 id="83-mutual-tls-mtls"><strong>8.3 相互TLS (mTLS)</strong></h3>

<pre><code class="language-bash"># Bật mTLS cho client authentication
bin/kc.sh start \
  --https-certificate-file=/etc/certs/tls.crt \
  --https-certificate-key-file=/etc/certs/tls.key \
  --https-trust-store-file=/etc/certs/truststore.jks \
  --https-trust-store-password=changeit \
  --https-client-auth=request

# --https-client-auth options:
# none: không yêu cầu client cert
# request: yêu cầu nhưng không bắt buộc
# required: bắt buộc client cert
</code></pre>

<h3 id="84-certificate-management"><strong>8.4 証明書の管理</strong></h3>

<pre><code class="language-bash"># Sử dụng cert-manager trong Kubernetes
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: keycloak-tls
  namespace: keycloak
spec:
  secretName: keycloak-tls-secret
  issuerRef:
    name: letsencrypt-prod
    kind: ClusterIssuer
  dnsNames:
    - auth.mycompany.com
  renewBefore: 720h  # Renew 30 ngày trước khi hết hạn
</code></pre>

<pre><code class="language-yaml"># Kubernetes Deployment sử dụng TLS secret
apiVersion: apps/v1
kind: Deployment
metadata:
  name: keycloak
spec:
  template:
    spec:
      containers:
        - name: keycloak
          image: quay.io/keycloak/keycloak:26.1
          args:
            - start
            - --hostname=auth.mycompany.com
            - --https-certificate-file=/etc/certs/tls.crt
            - --https-certificate-key-file=/etc/certs/tls.key
          volumeMounts:
            - name: tls-certs
              mountPath: /etc/certs
              readOnly: true
      volumes:
        - name: tls-certs
          secret:
            secretName: keycloak-tls-secret
</code></pre>

<h2 id="9-vault-integration"><strong>9. ボールトの統合</strong></h2>

<p>Keycloakは、データベース内のプレーンテキストではなく、外部ボールトへのシークレット（LDAPバインド・パスワード、SMTPパスワード、クライアント・シークレット）の保存をサポートしています。</p>

<h3 id="91-hashicorp-vault-integration"><strong>9.1 HashiCorp Vault の統合</strong></h3>

<pre><code class="language-bash"># Cấu hình Keycloak sử dụng HashiCorp Vault
bin/kc.sh start \
  --vault=hashicorp \
  --vault-hashicorp-paths=/secret/data/keycloak \
  --vault-hashicorp-address=https://vault.mycompany.com:8200 \
  --vault-hashicorp-auth-method=token \
  --vault-hashicorp-token=$VAULT_TOKEN

# Hoặc sử dụng AppRole authentication
bin/kc.sh start \
  --vault=hashicorp \
  --vault-hashicorp-paths=/secret/data/keycloak \
  --vault-hashicorp-address=https://vault.mycompany.com:8200 \
  --vault-hashicorp-auth-method=approle \
  --vault-hashicorp-approle-role-id=$ROLE_ID \
  --vault-hashicorp-approle-secret-id=$SECRET_ID
</code></pre>

<h3 id="92-luu-secrets-trong-hashicorp-vault"><strong>9.2 HashiCorp Vault へのシークレットの保存</strong></h3>

<pre><code class="language-bash"># Cấu hình Vault KV secrets engine
vault secrets enable -path=secret kv-v2

# Lưu LDAP bind password
vault kv put secret/keycloak/my-realm \
  ldap_bind_credential="LdapS3cur3P@ss!" \
  smtp_password="SmtpP@ssw0rd!" \
  my-client-secret="Cl13ntS3cr3t!"

# Cấu trúc path trong Vault:
# secret/data/keycloak/{realm-name}/{key}
</code></pre>

<h3 id="93-su-dung-vault-reference-trong-keycloak"><strong>9.3 KeycloakでのVaultリファレンスの使用</strong></h3>

<p>Keycloak では、次の構文を使用します<code>${vault.key}</code>平文の代わりに:</p>

<pre><code class="language-text"># LDAP User Federation
Bind Credential: ${vault.ldap_bind_credential}

# SMTP Settings
Password: ${vault.smtp_password}

# Client Secret
Client Secret: ${vault.my-client-secret}
</code></pre>

<h3 id="94-kubernetes-secrets-vault"><strong>9.4 Kubernetes/OpenShift Secrets Vault</strong></h3>

<pre><code class="language-bash"># Sử dụng Kubernetes Secrets làm vault
bin/kc.sh start \
  --vault=file \
  --vault-dir=/mnt/secrets
</code></pre>

<pre><code class="language-yaml"># Kubernetes Secret
apiVersion: v1
kind: Secret
metadata:
  name: keycloak-vault
  namespace: keycloak
type: Opaque
stringData:
  # Format: {realm-name}_{key}
  my-realm_ldap_bind_credential: "LdapS3cur3P@ss!"
  my-realm_smtp_password: "SmtpP@ssw0rd!"
  my-realm_my-client-secret: "Cl13ntS3cr3t!"
</code></pre>

<pre><code class="language-yaml"># Mount Secret vào Keycloak Pod
apiVersion: apps/v1
kind: Deployment
metadata:
  name: keycloak
spec:
  template:
    spec:
      containers:
        - name: keycloak
          args:
            - start
            - --vault=file
            - --vault-dir=/mnt/secrets
          volumeMounts:
            - name: vault-secrets
              mountPath: /mnt/secrets
              readOnly: true
      volumes:
        - name: vault-secrets
          secret:
            secretName: keycloak-vault
</code></pre>

<h3 id="95-file-based-vault-dev"><strong>9.5 ファイルベースのボールト (開発)</strong></h3>

<pre><code class="language-bash"># Tạo vault files cho development
mkdir -p /opt/keycloak/vault/my-realm

# Mỗi file chứa một secret (filename = key)
echo -n "LdapS3cur3P@ss!" > /opt/keycloak/vault/my-realm/ldap_bind_credential
echo -n "SmtpP@ssw0rd!" > /opt/keycloak/vault/my-realm/smtp_password

# Cấu hình Keycloak
bin/kc.sh start-dev \
  --vault=file \
  --vault-dir=/opt/keycloak/vault
</code></pre>

<h3 id="96-rotating-credentials"><strong>9.6 認証情報のローテーション</strong></h3>

<pre><code class="language-bash"># HashiCorp Vault: Rotate LDAP password
# 1. Update secret trong Vault
vault kv put secret/keycloak/my-realm \
  ldap_bind_credential="NewLdapP@ss2026!"

# 2. Keycloak sẽ tự động lấy secret mới
# (Vault SPI cache TTL = 0 by default, mỗi lần cần sẽ fetch lại)

# Kubernetes Secrets: Update secret
kubectl create secret generic keycloak-vault \
  --from-literal=my-realm_ldap_bind_credential="NewLdapP@ss2026!" \
  --dry-run=client -o yaml | kubectl apply -f -

# Rolling restart Keycloak để pickup new secrets
kubectl rollout restart deployment/keycloak -n keycloak
</code></pre>

<h2 id="10-admin-console-access-restrictions"><strong>10. 管理コンソールのアクセス制限</strong></h2>

<h3 id="101-dedicated-admin-realm"><strong>10.1 専用の管理者レルム</strong></h3>

<p>使用<strong>マスターレルム</strong>管理者の場合のみ、ユーザー/クライアント ビジネスを作成しないでください。</p>

<pre><code class="language-text">Best Practice:
- Master realm: Chỉ chứa admin users
- Business realms: Chứa application users/clients
- Không cho phép self-registration trên master realm
- MFA bắt buộc cho admin accounts
</code></pre>

<h3 id="102-ip-whitelist-cho-admin-console"><strong>10.2 管理コンソールの IP ホワイトリスト</strong></h3>

<pre><code class="language-nginx"># Nginx: Restrict Admin Console access
location /admin/ {
    # Chỉ cho phép IP nội bộ
    allow 10.0.0.0/8;
    allow 172.16.0.0/12;
    allow 192.168.0.0/16;
    deny all;

    proxy_pass http://keycloak:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}

# Block admin REST API từ external
location /admin/realms/ {
    allow 10.0.0.0/8;
    deny all;

    proxy_pass http://keycloak:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
</code></pre>

<h3 id="103-kubernetes-network-policy"><strong>10.3 Kubernetesネットワークポリシー</strong></h3>

<pre><code class="language-yaml"># NetworkPolicy: Restrict Admin API access
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: keycloak-admin-restrict
  namespace: keycloak
spec:
  podSelector:
    matchLabels:
      app: keycloak
  policyTypes:
    - Ingress
  ingress:
    # Allow user-facing traffic from ingress controller
    - from:
        - namespaceSelector:
            matchLabels:
              name: ingress-nginx
      ports:
        - port: 8080
    # Allow admin traffic only from management namespace
    - from:
        - namespaceSelector:
            matchLabels:
              name: management
      ports:
        - port: 8080
</code></pre>

<h2 id="11-token-security"><strong>11. トークンのセキュリティ</strong></h2>

<h3 id="111-short-lived-tokens"><strong>11.1 有効期間の短いトークン</strong></h3>

<pre><code class="language-bash"># Cấu hình token lifespans
curl -X PUT "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "accessTokenLifespan": 300,
    "accessTokenLifespanForImplicitFlow": 900,
    "actionTokenGeneratedByUserLifespan": 300,
    "actionTokenGeneratedByAdminLifespan": 43200
  }'

# Per-client token lifespan override
curl -X PUT "http://localhost:8080/admin/realms/my-realm/clients/$CLIENT_UUID" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "attributes": {
        "access.token.lifespan": "180",
        "client.session.idle.timeout": "600",
        "client.session.max.lifespan": "3600"
    }
  }'
</code></pre>

<h3 id="112-token-introspection"><strong>11.2 トークンのイントロスペクション</strong></h3>

<pre><code class="language-bash"># Introspect token (kiểm tra validity)
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/token/introspect" \
  -d "client_id=my-resource-server" \
  -d "client_secret=$CLIENT_SECRET" \
  -d "token=$ACCESS_TOKEN"

# Response
# {
#   "active": true,
#   "sub": "user-uuid",
#   "aud": "my-app",
#   "exp": 1710492645,
#   "iat": 1710489045,
#   "realm_access": { "roles": ["user"] },
#   "scope": "openid profile email"
# }
</code></pre>

<h3 id="113-token-revocation"><strong>11.3 トークンの取り消し</strong></h3>

<pre><code class="language-bash"># Revoke refresh token
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/revoke" \
  -d "client_id=my-app" \
  -d "client_secret=$CLIENT_SECRET" \
  -d "token=$REFRESH_TOKEN" \
  -d "token_type_hint=refresh_token"

# Revoke access token
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/revoke" \
  -d "client_id=my-app" \
  -d "client_secret=$CLIENT_SECRET" \
  -d "token=$ACCESS_TOKEN" \
  -d "token_type_hint=access_token"
</code></pre>

<h2 id="12-production-deployment-hardened"><strong>12. 実稼働環境への導入 — 強化された</strong></h2>

<pre><code class="language-yaml"># docker-compose.production.yml - Hardened Keycloak
services:
  keycloak:
    image: quay.io/keycloak/keycloak:26.1
    command:
      - start
      - --hostname=auth.mycompany.com
      - --hostname-strict=true
      - --proxy-headers=xforwarded
      - --http-enabled=true
      - --metrics-enabled=true
      - --health-enabled=true
      - --vault=file
      - --vault-dir=/mnt/secrets
      - --log=console
      - --log-console-output=json
    environment:
      KC_DB: postgres
      KC_DB_URL: jdbc:postgresql://postgres:5432/keycloak
      KC_DB_USERNAME: keycloak
      KC_DB_PASSWORD_FILE: /run/secrets/db_password
      KC_CACHE: ispn
      KC_CACHE_STACK: kubernetes
    volumes:
      - ./secrets:/mnt/secrets:ro
    secrets:
      - db_password
    deploy:
      replicas: 2
      resources:
        limits:
          memory: 1G
          cpus: '1.0'
        reservations:
          memory: 512M
          cpus: '0.5'
    healthcheck:
      test: ["CMD-SHELL", "exec 3<>/dev/tcp/localhost/9000 && echo -e 'GET /health/ready HTTP/1.1\r\nHost: localhost\r\n\r\n' >&3 && cat <&3 | grep -q '\"status\":\"UP\"'"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s

secrets:
  db_password:
    file: ./secrets/db_password
</code></pre>

<h2 id="13-best-practices-tong-hop"><strong>13. ベストプラクティスの概要</strong></h2>

<ul>
<li><strong>どこでもHTTPS</strong>— TLS を使用せずに Keycloak 本番環境をデプロイしないでください。 HSTS ヘッダーを使用します。</li>
<li><strong>Vault の秘密</strong>— 平文の認証情報を DB に保存しないでください。 HashiCorp Vault または Kubernetes Secret を使用します。</li>
<li><strong>強力なパスワードポリシー</strong>— 最小 12 文字。反復回数が多い場合は Argon2 または PBKDF2-SHA512 を使用します。</li>
<li><strong>セッション制限</strong>— 同時セッションの数を制限します。それに応じてアイドル/最大タイムアウトを設定します。</li>
<li><strong>管理者アクセスが制限されています</strong>— 管理コンソールの IP ホワイトリスト。管理者アカウントには MFA が必要です。</li>
<li><strong>有効期間の短いトークン</strong>— アクセス トークンは 5 分間、リフレッシュ トークンのローテーションは有効です。</li>
<li><strong>ブルートフォース保護</strong>— 有効にし、それに応じて設定します。ログイン失敗率を監視します。</li>
<li><strong>定期的なセキュリティ監査</strong>— Keycloak構成を定期的に確認します。最新バージョンにアップデートしてください。</li>
<li><strong>別個の管理レルム</strong>— マスターレルムは管理者のみに使用します。管理者ユーザーとビジネス ユーザーを混在させないでください。</li>
<li><strong>監視と警告</strong>— イベント ログ (レッスン 18) をセキュリティ監視と組み合わせて、検出と対応を行います。</li>
</ul>
