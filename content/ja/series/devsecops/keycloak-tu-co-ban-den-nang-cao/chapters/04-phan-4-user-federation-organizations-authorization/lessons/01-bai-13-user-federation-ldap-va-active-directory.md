---
id: 019d8b30-b113-7001-c001-e0c5f8100113
title: 'レッスン 13: ユーザー フェデレーション - LDAP と Active Directory'
slug: bai-13-user-federation-ldap-va-active-directory
description: LDAP/AD フェデレーション、ストレージ モード (READ_ONLY、WRITABLE、UNSYNCED)、編集モード、接続設定 (SSL、接続プール)、LDAP マッパー (ユーザー属性、フルネーム、グループ、ロール、ハードコードされたロール、MSAD ユーザー アカウント制御)、パスワード ハッシュ、ユーザー同期、SSSD/FreeIPA 統合、Kerberos ブリッジ、カスタム ユーザー ストレージ SPI、LDAP の問題のトラブルシューティングを構成します。
duration_minutes: 220
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 4: ユーザー フェデレーション、組織、および認可'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6174" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6174)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1086" cy="268" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1072" cy="174" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1058" cy="80" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1044" cy="246" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1030" cy="152" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="128" x2="1100" y2="208" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="158" x2="1050" y2="228" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1015.2390923627308,156.5 1015.2390923627308,199.5 978,221 940.7609076372692,199.5 940.7609076372692,156.5 978,135" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 13: ユーザー フェデレーション - LDAP とアクティブ</tspan>
      <tspan x="60" dy="42">ディレクトリ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: ユーザー フェデレーション、組織、および認可</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-user-federation-tong-quan"><strong>1. ユーザーフェデレーション — 概要</strong></h2>

<p>ユーザーフェデレーションによるKeycloakの有効化<strong>外部ユーザーデータベースに接続する</strong>LDAP、Active Directory、カスタム データベースなど。すべてのユーザーをKeycloakにインポートする代わりに、外部ソースから直接認証できます。</p>

<p>ユーザー フェデレーションを設定するには、次の場所に移動します。<strong>管理コンソール → ユーザーフェデレーション</strong>.</p>

<h3 id="11-tai-sao-can-user-federation"><strong>1.1 ユーザー フェデレーションが必要な理由は何ですか?</strong></h3>

<table>
<thead>
<tr><th>理由</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td><strong>ユーザー管理を一元化する</strong></td><td>LDAP/AD はすでに企業内の主要なユーザー ソースである → 重複する必要はありません</td></tr>
<tr><td><strong>現在のシステムをそのまま維持する</strong></td><td>ユーザーをKeycloakに移行する必要はありません</td></tr>
<tr><td><strong>単一の真実の情報源</strong></td><td>ユーザーデータは 1 か所にのみ存在し、不整合を回避します</td></tr>
<tr><td><strong>ケルベロス SSO</strong></td><td>Active Directory からの Kerberos 認証の統合</td></tr>
</tbody>
</table>

<h3 id="12-cac-loai-federation"><strong>1.2 フェデレーションプロバイダーの種類</strong></h3>

<table>
<thead>
<tr><th>プロバイダー</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td><strong>LDAP</strong></td><td>OpenLDAP、389 Directory Server、および LDAP 準拠サーバーをサポート</td></tr>
<tr><td><strong>アクティブディレクトリ</strong></td><td>Microsoft Active Directory (LDAP プロトコル + AD 固有のマッパーを使用)</td></tr>
<tr><td><strong>SSSD</strong></td><td>システム セキュリティ サービス デーモン — FreeIPA/Red Hat IdM の統合</td></tr>
<tr><td><strong>カスタム ユーザー ストレージ SPI</strong></td><td>任意のデータベースに接続するための独自のプロバイダーを作成します</td></tr>
</tbody>
</table>

<h2 id="2-them-ldap-provider"><strong>2. LDAPプロバイダーの追加</strong></h2>

<p>入力<strong>管理コンソール → ユーザー フェデレーション → LDAP プロバイダーの追加</strong>.</p>

<h3 id="21-general-options"><strong>2.1 一般的なオプション</strong></h3>

<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>サンプル値</th></tr>
</thead>
<tbody>
<tr><td><strong>コンソールの表示名</strong></td><td>管理コンソールに表示される名前</td><td><code>企業LDAP</code></td></tr>
<tr><td><strong>優先度</strong></td><td>プロバイダが多い場合の優先順位</td><td><code>0</code>（最高）</td></tr>
<tr><td><strong>有効</strong></td><td>プロバイダーの有効化/無効化</td><td><code>の上</code></td></tr>
<tr><td><strong>ユーザーをインポートする</strong></td><td>LDAPユーザーをKeycloakローカルデータベースにインポートする</td><td><code>の上</code></td></tr>
</tbody>
</table>

<h3 id="22-connection-settings"><strong>2.2 接続設定</strong></h3>

<pre><code class="language-properties"># Connection URL
Connection URL: ldap://ldap.example.com:389
# Hoặc LDAPS (SSL):
Connection URL: ldaps://ldap.example.com:636

# Bind Type
Bind Type: simple

# Bind DN — tài khoản để Keycloak kết nối LDAP
Bind DN: cn=admin,dc=example,dc=com

# Bind Credential — mật khẩu
Bind Credential: ********</code></pre>

<p><strong>接続プールの設定:</strong></p>

<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>デフォルト</th></tr>
</thead>
<tbody>
<tr><td><strong>接続プーリング</strong></td><td>接続プールを有効にしてパフォーマンスを最適化する</td><td><code>の上</code></td></tr>
<tr><td><strong>接続プールの認証</strong></td><td>認証された接続用のプール</td><td><code>単純。単純</code></td></tr>
<tr><td><strong>接続プールのデバッグ</strong></td><td>接続プールのデバッグをログに記録する</td><td><code>オフ</code></td></tr>
<tr><td><strong>接続プールの初期サイズ</strong></td><td>最初に初期化された接続の数</td><td><code>1</code></td></tr>
<tr><td><strong>接続プールの最大サイズ</strong></td><td>最大接続数</td><td><code>1000</code></td></tr>
<tr><td><strong>接続プールのタイムアウト</strong></td><td>プールから接続を取得するまでの待ち時間</td><td><code>30000</code>MS</td></tr>
</tbody>
</table>

<h3 id="23-ssl-ldaps-configuration"><strong>2.3 SSL/LDAPS設定</strong></h3>

<p>LDAPS (ポート 636) に接続するには、CA 証明書を Keycloak トラストストアにインポートする必要があります。</p>

<pre><code class="language-bash"># Tải CA certificate từ LDAP server
openssl s_client -connect ldap.example.com:636 -showcerts &lt; /dev/null 2&gt;/dev/null | \
  openssl x509 -outform PEM &gt; ldap-ca.pem

# Import vào Java truststore
keytool -import -alias ldap-ca \
  -keystore /opt/keycloak/conf/truststore.jks \
  -file ldap-ca.pem \
  -storepass changeit -noprompt

# Hoặc sử dụng PEM truststore (Keycloak 24+)
# Đặt file PEM vào /opt/keycloak/conf/truststores/
cp ldap-ca.pem /opt/keycloak/conf/truststores/</code></pre>

<p>トラストストアを使用するように Keycloak を構成します。</p>

<pre><code class="language-bash"># keycloak.conf
# Java keystore
spi-truststore-file-file=/opt/keycloak/conf/truststore.jks
spi-truststore-file-password=changeit
spi-truststore-file-type=JKS

# Hoặc PEM directory (Keycloak 24+)
truststore-paths=/opt/keycloak/conf/truststores</code></pre>

<h3 id="24-use-start-tls"><strong>2.4 StartTLS を使用する</strong></h3>

<p>LDAPS (ポート 636) の代わりに、次のものを使用できます。<strong>TLSの開始</strong>ポート 389:</p>

<pre><code class="language-properties">Connection URL: ldap://ldap.example.com:389
Use StartTLS: ON</code></pre>

<p>StartTLS は、通常の LDAP 接続を同じポート 389 上の暗号化された接続にアップグレードします。</p>

<h2 id="3-ldap-searching-settings"><strong>3. LDAP検索設定</strong></h2>

<table>
<thead>
<tr><th>設定</th><th>説明する</th><th>サンプル値</th></tr>
</thead>
<tbody>
<tr><td><strong>ユーザーDN</strong></td><td>Keycloakがユーザーを検索するベースDN</td><td><code>ou=人、dc=例、dc=com</code></td></tr>
<tr><td><strong>ユーザーオブジェクトクラス</strong></td><td>ユーザーエントリのLDAPオブジェクトクラス</td><td><code>inetOrgperson、organizationalperson</code></td></tr>
<tr><td><strong>ユーザー名のLDAP属性</strong></td><td>LDAP 属性にはユーザー名が含まれます</td><td><code>UID</code>(LDAP) /<code>sAMアカウント名</code>（広告）</td></tr>
<tr><td><strong>RDN LDAP 属性</strong></td><td>RDN (相対識別名) に使用される属性</td><td><code>UID</code>(LDAP) /<code>CN</code>（広告）</td></tr>
<tr><td><strong>UUID LDAP 属性</strong></td><td>属性は一意のIDとして使用されます</td><td><code>エントリUUID</code>(LDAP) /<code>オブジェクトGUID</code>（広告）</td></tr>
<tr><td><strong>検索範囲</strong></td><td><code>1 つのレベル</code>または<code>サブツリー</code></td><td><code>サブツリー</code></td></tr>
<tr><td><strong>カスタムユーザーLDAPフィルター</strong></td><td>ユーザーをフィルタリングするための追加の LDAP フィルタ</td><td><code>(&amp;(objectClass=person)(memberOf=cn=app-users,ou=Groups,dc=example,dc=com))</code></td></tr>
<tr><td><strong>読み取りタイムアウト</strong></td><td>LDAP読み取り操作のタイムアウト</td><td><code>30000</code>MS</td></tr>
</tbody>
</table>

<h3 id="31-active-directory-settings"><strong>3.1 Active Directoryの設定</strong></h3>

<p>選ぶときは<strong>ベンダー = Active Directory</strong>, Keycloak は適切な値を自動的に構成します。</p>

<pre><code class="language-properties">Username LDAP attribute: cn
RDN LDAP attribute: cn
UUID LDAP attribute: objectGUID
User Object Classes: person, organizationalPerson, user
Users DN: cn=Users,dc=corp,dc=example,dc=com</code></pre>

<h2 id="4-storage-modes"><strong>4. ストレージモード</strong></h2>

<p>Keycloakは、KeycloakがLDAPと対話する方法を決定する3つのストレージモードをサポートしています。</p>

<table>
<thead>
<tr><th>モード</th><th>LDAPから読み取る</th><th>LDAPリバースロギング</th><th>Keycloak DBへのインポート</th><th>ユースケース</th></tr>
</thead>
<tbody>
<tr><td><strong>読み取り専用</strong></td><td>✅</td><td>❌</td><td>✅ (キャッシュ)</td><td>LDAP は単一ソースであり、ユーザーが Keycloak 経由で情報を変更することはできません</td></tr>
<tr><td><strong>書き込み可能</strong></td><td>✅</td><td>✅</td><td>✅</td><td>ユーザーが情報 (パスワード、プロファイル) を変更し、LDAP に書き戻すことができるようにします。</td></tr>
<tr><td><strong>未同期</strong></td><td>✅</td><td>❌</td><td>✅</td><td>LDAP からユーザーをインポートし、Keycloak DB にのみ変更を保存します (ライトバックなし)</td></tr>
</tbody>
</table>

<h3 id="41-edit-modes"><strong>4.1 編集モード</strong></h3>

<p>編集モードは、ユーザーまたは管理者が情報を変更するときの動作を規制します。</p>

<pre><code class="language-text">READ_ONLY:
  - User không thể đổi password qua Keycloak
  - Admin không thể edit user attributes
  - Mọi thay đổi phải thực hiện trực tiếp trên LDAP

WRITABLE:
  - User có thể đổi password → Keycloak ghi ngược về LDAP
  - Admin edit user attributes → cập nhật LDAP
  - Cẩn thận với password policy: phải match giữa Keycloak và LDAP

UNSYNCED:
  - User đổi password → chỉ lưu trong Keycloak DB
  - Đăng nhập: Keycloak thử password local trước, nếu fail thì thử LDAP
  - Phù hợp khi muốn dần migrate users sang Keycloak</code></pre>

<h2 id="5-sync-settings"><strong>5. 同期設定</strong></h2>

<p>Keycloakは、次の2つのメカニズムによってLDAPからユーザーを同期できます。</p>

<h3 id="51-periodic-full-sync"><strong>5.1 定期的な完全同期</strong></h3>

<pre><code class="language-properties"># Import toàn bộ users từ LDAP vào Keycloak DB
Periodic Full Sync: ON
Full Sync Period: 604800  # seconds (7 ngày)</code></pre>

<h3 id="52-periodic-changed-users-sync"><strong>5.2 変更されたユーザーの定期的な同期</strong></h3>

<pre><code class="language-properties"># Chỉ đồng bộ users có thay đổi (dựa vào modifyTimestamp)
Periodic Changed Users Sync: ON
Changed Users Sync Period: 86400  # seconds (1 ngày)</code></pre>

<h3 id="53-manual-sync"><strong>5.3 手動同期</strong></h3>

<p>同期は、管理コンソールまたは CLI 経由で手動でトリガーできます。</p>

<pre><code class="language-bash"># Trigger full sync qua Admin REST API
curl -X POST "http://localhost:8080/admin/realms/my-realm/user-storage/${LDAP_PROVIDER_ID}/sync?action=triggerFullSync" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"

# Trigger changed users sync
curl -X POST "http://localhost:8080/admin/realms/my-realm/user-storage/${LDAP_PROVIDER_ID}/sync?action=triggerChangedUsersSync" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"</code></pre>

<h2 id="6-ldap-mappers"><strong>6. LDAP マッパー</strong></h2>

<p>LDAP マッパーが Keycloak をどのように定義するか<strong>LDAP属性をKeycloakユーザーモデルにマッピングする</strong>。これは、LDAP フェデレーションを構成する場合に最も重要な部分です。</p>

<h3 id="61-user-attribute-ldap-mapper"><strong>6.1 ユーザー属性 LDAP マッパー</strong></h3>

<p>LDAP 属性を Keycloak ユーザー属性にマップします。</p>

<pre><code class="language-text">Mapper Type: user-attribute-ldap-mapper
LDAP Attribute: mail
User Model Attribute: email
Read Only: true
Always Read Value From LDAP: false
Is Mandatory In LDAP: true</code></pre>

<p>デフォルトのマッパーは自動的に作成されます。</p>

<table>
<thead>
<tr><th>マッパー名</th><th>LDAP 属性</th><th>キークローク属性</th></tr>
</thead>
<tbody>
<tr><td>ユーザー名。ユーザー名</td><td><code>UID</code> / <code>sAMアカウント名</code></td><td><code>ユーザー名。ユーザー名</code></td></tr>
<tr><td>電子メール</td><td><code>郵便</code></td><td><code>電子メール</code></td></tr>
<tr><td>ファーストネーム</td><td><code>名</code> / <code>CN</code></td><td><code>ファーストネーム</code></td></tr>
<tr><td>苗字</td><td><code>すん</code></td><td><code>苗字</code></td></tr>
<tr><td>作成日</td><td><code>タイムスタンプの作成</code></td><td><code>タイムスタンプの作成</code></td></tr>
<tr><td>日付を変更する</td><td><code>タイムスタンプの変更</code></td><td><code>タイムスタンプの変更</code></td></tr>
</tbody>
</table>

<h3 id="62-full-name-ldap-mapper"><strong>6.2 フルネーム LDAP マッパー</strong></h3>

<p>LDAP のマップ<code>CN</code>（通称）Keycloakへ<code>ファーストネーム</code> + <code>苗字</code>:</p>

<pre><code class="language-text">Mapper Type: full-name-ldap-mapper
LDAP Full Name Attribute: cn
Read Only: true
Write Only: false</code></pre>

<p>LDAP のみが使用可能な場合に役立ちます<code>CN</code>分離せずに<code>名</code>/<code>すん</code>.</p>

<h3 id="63-group-ldap-mapper"><strong>6.3 グループLDAPマッパー</strong></h3>

<p>LDAP グループを Keycloak グループに同期します。</p>

<pre><code class="language-text">Mapper Type: group-ldap-mapper
LDAP Groups DN: ou=Groups,dc=example,dc=com
Group Name LDAP Attribute: cn
Group Object Classes: groupOfNames
Membership LDAP Attribute: member
Membership Attribute Type: DN
Membership User LDAP Attribute: uid
Mode: READ_ONLY
User Groups Retrieve Strategy: LOAD_GROUPS_BY_MEMBER_ATTRIBUTE
Drop non-existing groups during sync: false
Groups Path: /</code></pre>

<p><strong>ユーザーグループの取得戦略オプション:</strong></p>

<table>
<thead>
<tr><th>戦略</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td><strong>LOAD_GROUPS_BY_MEMBER_ATTRIBUTE</strong></td><td>メンバー属性に基づいて LDAP からグループをロードします</td></tr>
<tr><td><strong>GET_GROUPS_FROM_USER_MEMBEROF_ATTRIBUTE</strong></td><td>読む<code>メンバーの</code>ユーザーエントリの属性</td></tr>
<tr><td><strong>LOAD_GROUPS_BY_MEMBER_ATTRIBUTE_RECURSIVELY</strong></td><td>グループを再帰的にロードします (ネストされたグループ)</td></tr>
</tbody>
</table>

<h3 id="64-role-ldap-mapper"><strong>6.4 ロールLDAPマッパー</strong></h3>

<p>LDAP ロール/グループを Keycloak レルム ロールに同期します。</p>

<pre><code class="language-text">Mapper Type: role-ldap-mapper
LDAP Roles DN: ou=Roles,dc=example,dc=com
Role Name LDAP Attribute: cn
Role Object Classes: groupOfNames
Membership LDAP Attribute: member
Membership Attribute Type: DN
Membership User LDAP Attribute: uid
Mode: READ_ONLY
Use Realm Roles Mapping: true
Client ID: (để trống nếu dùng realm roles)</code></pre>

<h3 id="65-hardcoded-ldap-role-mapper"><strong>6.5 ハードコードされた LDAP ロールマッパー</strong></h3>

<p>固定役割を自動的に割り当てる<strong>全て</strong>LDAP プロバイダーからのユーザー:</p>

<pre><code class="language-text">Mapper Type: hardcoded-ldap-role-mapper
Role: realm-role-name
# Hoặc client role:
Role: client-id.client-role-name</code></pre>

<p>ロール マーカーを使用して LDAP ユーザーとローカル ユーザーを区別する場合に便利です。</p>

<h3 id="66-msad-user-account-control-mapper"><strong>6.6 msad-user-account-control-mapper</strong></h3>

<p>特別なマッパー<strong>アクティブディレクトリ</strong>、 ハンドル<code>ユーザーアカウントコントロール</code>属性:</p>

<pre><code class="language-text">Mapper Type: msad-user-account-control-mapper
# Xử lý:
# - Account enabled/disabled status
# - Password expired status
# - Account locked status
# - Require user to change password at next login</code></pre>

<p>このマッパーはビットマスクを読み取ります<code>ユーザーアカウントコントロール</code>KeycloakユーザーステータスにマッピングするADの：</p>

<table>
<thead>
<tr><th>ADフラグ(ビット)</th><th>キークロークの動作</th></tr>
</thead>
<tbody>
<tr><td><code>責任を負う</code>(0x0002)</td><td>ユーザーはKeycloakで無効になっています</td></tr>
<tr><td><code>ロックアウト</code>(0x0010)</td><td>ユーザーがロックされています</td></tr>
<tr><td><code>PASSWORD_EXPIRED</code></td><td>ユーザーはログイン時にパスワードを変更する必要があります</td></tr>
</tbody>
</table>

<h3 id="67-certificate-ldap-mapper"><strong>6.7 証明書-LDAP-マッパー</strong></h3>

<p>X.509 認証の LDAP 証明書属性を Keycloak ユーザー属性にマップします。</p>

<pre><code class="language-text">Mapper Type: certificate-ldap-mapper
LDAP Attribute: userCertificate
User Model Attribute: usercertificate
Is DER Formatted: true
Always Read Value From LDAP: true</code></pre>

<h2 id="7-password-hashing"><strong>7. パスワードのハッシュ化</strong></h2>

<p>LDAP フェデレーションを使用する場合、パスワード ハッシュにはいくつかの重要な特性があります。</p>

<table>
<thead>
<tr><th>シナリオ</th><th>パスワードハッシュ</th><th>注記</th></tr>
</thead>
<tbody>
<tr><td><strong>読み取り専用モード</strong></td><td>パスワードは常に LDAP サーバーで直接検証されます。</td><td>Keycloakはパスワードハッシュを保存しません</td></tr>
<tr><td><strong>書き込み可能モード</strong></td><td>パスワードは、LDAP パスワード ポリシーに従って LDAP に記録されます。</td><td>LDAPサーバーはハッシュを実行します</td></tr>
<tr><td><strong>非同期モード</strong></td><td>Keycloakハッシュを使用してKeycloak DBに保存された新しいパスワード</td><td>古いパスワードは引き続き LDAP 経由で検証されます</td></tr>
</tbody>
</table>

<pre><code class="language-bash"># Kiểm tra password policy trên LDAP (OpenLDAP)
ldapsearch -x -H ldap://localhost:389 \
  -D "cn=admin,dc=example,dc=com" -W \
  -b "cn=config" "(objectClass=olcGlobal)" olcPasswordHash

# Output ví dụ:
# olcPasswordHash: {SSHA}</code></pre>

<h2 id="8-sssd-va-freeipa-integration"><strong>8. SSSD と FreeIPA の統合</strong></h2>

<p>Keycloakはとの統合をサポートしています<strong>SSSD (システム セキュリティ サービス デーモン)</strong>D-Bus インターフェース経由で、FreeIPA または Red Hat Identity Manager からユーザーを認証できるようになります。</p>

<h3 id="81-prerequisites"><strong>8.1 前提条件</strong></h3>

<pre><code class="language-bash"># Cài đặt SSSD trên Keycloak server
sudo dnf install sssd sssd-dbus

# Cấu hình SSSD (/etc/sssd/sssd.conf)
[sssd]
services = nss, pam, ifp
domains = example.com

[domain/example.com]
id_provider = ipa
auth_provider = ipa
access_provider = ipa
ipa_domain = example.com
ipa_server = ipa.example.com

[ifp]
allowed_uids = root, keycloak
user_attributes = +mail, +givenname, +sn, +telephoneNumber</code></pre>

<h3 id="82-cau-hinh-sssd-federation-provider"><strong>8.2 SSSD フェデレーションプロバイダーの構成</strong></h3>

<p>管理コンソールで、追加します<strong>SSSD</strong>フェデレーションプロバイダー — KeycloakはD-Bus経由でSSSDと通信し、次のことを行います。</p>

<ul>
<li>ユーザーの認証 (PAM)</li>
<li>ユーザー属性の取得 (InfoPipe)</li>
<li>グループメンバーシップを取得する</li>
</ul>

<h2 id="9-kerberos-bridge"><strong>9. ケルベロスブリッジ</strong></h2>

<p>キークロークが使える<strong>ケルベロス認証</strong>LDAP フェデレーションと併用すると、ユーザーは Kerberos チケット (SPNEGO) を使用して自動的にログインできるようになります。</p>

<h3 id="91-cau-hinh-kerberos-voi-ldap"><strong>9.1 LDAP を使用した Kerberos の構成</strong></h3>

<pre><code class="language-properties"># Trong LDAP provider settings
Allow Kerberos authentication: ON
Kerberos Realm: EXAMPLE.COM
Server Principal: HTTP/keycloak.example.com@EXAMPLE.COM
KeyTab: /etc/keycloak/keycloak.keytab
Use Kerberos for password authentication: ON</code></pre>

<pre><code class="language-bash"># Tạo keytab cho Keycloak service principal
kadmin.local -q "addprinc -randkey HTTP/keycloak.example.com@EXAMPLE.COM"
kadmin.local -q "ktadd -k /etc/keycloak/keycloak.keytab HTTP/keycloak.example.com@EXAMPLE.COM"

# Set permissions
chown keycloak:keycloak /etc/keycloak/keycloak.keytab
chmod 600 /etc/keycloak/keycloak.keytab</code></pre>

<h3 id="92-browser-configuration-cho-spnego"><strong>9.2 SPNEGO のブラウザ設定</strong></h3>

<pre><code class="language-text">Firefox:
1. about:config
2. network.negotiate-auth.trusted-uris = .example.com
3. network.negotiate-auth.delegation-uris = .example.com

Chrome / Edge:
1. Policy: AuthServerAllowlist = *.example.com
2. Hoặc command line: --auth-server-whitelist="*.example.com"</code></pre>

<h2 id="10-custom-user-storage-spi"><strong>10. カスタム ユーザー ストレージ SPI</strong></h2>

<p>LDAP が十分でない場合は、次のように書くことができます<strong>カスタム ユーザー ストレージ プロバイダー</strong>あらゆるデータ ソース (SQL データベース、REST API、レガシー システムなど) に接続できます。</p>

<h3 id="101-spi-interfaces"><strong>10.1 SPI インターフェース</strong></h3>

<pre><code class="language-java">// UserStorageProviderFactory — tạo provider instances
public class MyUserStorageProviderFactory
    implements UserStorageProviderFactory&lt;MyUserStorageProvider&gt; {

    @Override
    public String getId() {
        return "my-user-storage";
    }

    @Override
    public MyUserStorageProvider create(KeycloakSession session,
                                         ComponentModel model) {
        return new MyUserStorageProvider(session, model);
    }
}

// UserStorageProvider — implement các interfaces cần thiết
public class MyUserStorageProvider implements
    UserStorageProvider,
    UserLookupProvider,
    CredentialInputValidator,
    UserQueryProvider {

    @Override
    public UserModel getUserByUsername(RealmModel realm, String username) {
        // Query external database
        ExternalUser extUser = externalDb.findByUsername(username);
        if (extUser == null) return null;

        // Wrap vào Keycloak UserModel
        return new UserAdapter(session, realm, model, extUser);
    }

    @Override
    public boolean isValid(RealmModel realm, UserModel user,
                           CredentialInput input) {
        if (!supportsCredentialType(input.getType())) return false;
        // Verify password với external system
        return externalDb.verifyPassword(
            user.getUsername(),
            input.getChallengeResponse()
        );
    }
}</code></pre>

<h3 id="102-deploy-custom-provider"><strong>10.2 カスタムプロバイダーのデプロイ</strong></h3>

<pre><code class="language-bash"># Build JAR
mvn clean package

# Copy vào Keycloak providers directory
cp target/my-user-storage.jar /opt/keycloak/providers/

# Rebuild Keycloak
/opt/keycloak/bin/kc.sh build</code></pre>

<h2 id="11-cau-hinh-ldap-voi-kcadm"><strong>11. kcadm.sh を使用して LDAP を構成する</strong></h2>

<p>使用<code>kcadm.sh</code>コマンドライン経由で LDAP フェデレーションを設定するには、次の手順を実行します。</p>

<pre><code class="language-bash"># Đăng nhập
kcadm.sh config credentials \
  --server http://localhost:8080 \
  --realm master \
  --user admin \
  --password admin

# Tạo LDAP provider
kcadm.sh create components -r my-realm \
  -s name="Corporate LDAP" \
  -s providerId=ldap \
  -s providerType=org.keycloak.storage.UserStorageProvider \
  -s 'config.vendor=["other"]' \
  -s 'config.connectionUrl=["ldap://ldap.example.com:389"]' \
  -s 'config.bindDn=["cn=admin,dc=example,dc=com"]' \
  -s 'config.bindCredential=["admin_password"]' \
  -s 'config.usersDn=["ou=People,dc=example,dc=com"]' \
  -s 'config.userObjectClasses=["inetOrgPerson, organizationalPerson"]' \
  -s 'config.usernameLDAPAttribute=["uid"]' \
  -s 'config.rdnLDAPAttribute=["uid"]' \
  -s 'config.uuidLDAPAttribute=["entryUUID"]' \
  -s 'config.editMode=["READ_ONLY"]' \
  -s 'config.syncRegistrations=["false"]' \
  -s 'config.searchScope=["2"]' \
  -s 'config.importEnabled=["true"]' \
  -s 'config.enabled=["true"]' \
  -s 'config.priority=["0"]' \
  -s 'config.fullSyncPeriod=["604800"]' \
  -s 'config.changedSyncPeriod=["86400"]'

# Lấy LDAP provider ID
LDAP_ID=$(kcadm.sh get components -r my-realm \
  --fields id,name \
  -q providerType=org.keycloak.storage.UserStorageProvider \
  | jq -r '.[0].id')

# Thêm group mapper
kcadm.sh create components -r my-realm \
  -s name="group-mapper" \
  -s providerId=group-ldap-mapper \
  -s providerType=org.keycloak.storage.ldap.mappers.LDAPStorageMapper \
  -s parentId=$LDAP_ID \
  -s 'config.groups.dn=["ou=Groups,dc=example,dc=com"]' \
  -s 'config.group.name.ldap.attribute=["cn"]' \
  -s 'config.group.object.classes=["groupOfNames"]' \
  -s 'config.membership.ldap.attribute=["member"]' \
  -s 'config.membership.attribute.type=["DN"]' \
  -s 'config.membership.user.ldap.attribute=["uid"]' \
  -s 'config.mode=["READ_ONLY"]' \
  -s 'config.drop.non.existing.groups.during.sync=["false"]'

# Trigger full sync
kcadm.sh create user-storage/$LDAP_ID/sync -r my-realm \
  -s action=triggerFullSync</code></pre>

<h2 id="12-troubleshooting-ldap"><strong>12. LDAP 問題のトラブルシューティング</strong></h2>

<h3 id="121-connection-issues"><strong>12.1 接続の問題</strong></h3>

<table>
<thead>
<tr><th>エラー</th><th>理由</th><th>解決</th></tr>
</thead>
<tbody>
<tr><td><code>javax.naming.CommunicationException</code></td><td>LDAPサーバーに接続できません</td><td>ネットワーク、ファイアウォール、ポート 389/636 を確認してください</td></tr>
<tr><td><code>javax.naming.AuthenticationException</code></td><td>間違ったバインド DN またはバインド資格情報</td><td>バインド資格情報を検証します<code>ldapsearch</code></td></tr>
<tr><td><code>SSLハンドシェイク例外</code></td><td>証明書が信頼されていません</td><td>CA 証明書をトラストストアにインポートする</td></tr>
<tr><td><code>接続タイムアウト</code></td><td>LDAPサーバーが応答しない</td><td>接続タイムアウトを増やし、DNS を確認してください</td></tr>
</tbody>
</table>

<pre><code class="language-bash"># Test LDAP connection
ldapsearch -x -H ldap://ldap.example.com:389 \
  -D "cn=admin,dc=example,dc=com" -W \
  -b "ou=People,dc=example,dc=com" \
  "(objectClass=inetOrgPerson)" uid mail cn

# Test LDAPS connection
ldapsearch -x -H ldaps://ldap.example.com:636 \
  -D "cn=admin,dc=example,dc=com" -W \
  -b "dc=example,dc=com" "(uid=testuser)"

# Bật debug logging trong Keycloak
bin/kc.sh start-dev \
  --log-level=org.keycloak.storage.ldap:DEBUG</code></pre>

<h3 id="122-sync-failures"><strong>12.2 同期の失敗</strong></h3>

<table>
<thead>
<tr><th>エラー</th><th>理由</th><th>解決</th></tr>
</thead>
<tbody>
<tr><td><code>ユーザー ... すでに存在します</code></td><td>LDAP とローカル ユーザーの間でユーザー名が競合する</td><td>ローカル ユーザーを削除するか、ユーザー名のマッピングを変更します</td></tr>
<tr><td><code>サイズ制限を超えました</code></td><td>LDAP サーバーは返される結果の数を制限します</td><td>LDAP サーバーでページングを構成するか、LDAP フィルターを追加して範囲を縮小します</td></tr>
<tr><td><code>紹介</code></td><td>LDAP は結果ではなく紹介を返します</td><td>セット<code>紹介=フォロー</code>接続設定で</td></tr>
</tbody>
</table>

<h3 id="123-mapper-problems"><strong>12.3 マッパーの問題</strong></h3>

<pre><code class="language-bash"># Kiểm tra LDAP attributes có tồn tại
ldapsearch -x -H ldap://ldap.example.com:389 \
  -D "cn=admin,dc=example,dc=com" -W \
  -b "uid=testuser,ou=People,dc=example,dc=com" \
  "*" "+"

# Kiểm tra group membership
ldapsearch -x -H ldap://ldap.example.com:389 \
  -D "cn=admin,dc=example,dc=com" -W \
  -b "ou=Groups,dc=example,dc=com" \
  "(member=uid=testuser,ou=People,dc=example,dc=com)" cn</code></pre>

<h2 id="13-best-practices"><strong>13. ベストプラクティス</strong></h2>

<ul>
<li><strong>常に LDAPS または StartTLS を使用する</strong>— 資格情報を平文で送信しないようにします</li>
<li><strong>別のサービス アカウントを使用する</strong>バインド DN の場合 — 管理者アカウントを使用しないでください</li>
<li><strong>検索範囲を制限する</strong>— カスタム ユーザー LDAP フィルターを使用して、必要なユーザーのみをインポートします</li>
<li><strong>接続プールをオンにする</strong>— 接続作成のオーバーヘッドを削減します</li>
<li><strong>同期期間を適切に構成する</strong>— 短すぎると LDAP に大きな負荷がかかり、長すぎるとデータが古くなります</li>
<li><strong>同期ログを監視する</strong>— Keycloakは同期プロセスに関する詳細をログに記録します</li>
<li><strong>最初に READ_ONLY でテストします</strong>— 最初に設定するときは、WRITABLE を転送する前に READ_ONLY を使用して検証します。</li>
<li><strong>メジャー同期の前にKeycloak DBをバックアップする</strong>— 完全同期では数千のユーザーをインポートできます</li>
</ul>
