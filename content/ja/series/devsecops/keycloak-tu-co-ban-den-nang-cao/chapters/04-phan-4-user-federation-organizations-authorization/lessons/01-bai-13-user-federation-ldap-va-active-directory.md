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
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">_Keycloak の基本から高度なもの__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: ユーザー フェデレーション、組織、および認可__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-user-federation-tong-quan"><strong>1.ユーザー フェデレーション — 概要</strong></h2>

<p>ユーザーフェデレーションにより、Keycloak__HTMLTAG_72___がLDAP、Active Directory、カスタムデータベースなどの外部ユーザーデータベース</strong>に接続できるようになります。すべてのユーザーを Keycloak にインポートする代わりに、外部ソースから直接認証できます。</p>

<p>ユーザー フェデレーションを設定するには、__HTMLTAG_76___管理コンソール → ユーザー フェデレーション</strong>.</p> に移動します。

<h3 id="11-tai-sao-can-user-federation"><strong>1.1 ユーザー フェデレーションが必要な理由</strong></h3>

<table>
<thead>
<tr><th>理由_</th><th>説明_</th></tr>
</thead>
<tbody>
<tr><td><strong>ユーザー管理の一元化</strong></td><td>LDAP/AD はすでに企業内のユーザーの主要なソースである → 重複する必要はない_</td></tr>
<tr><td><strong>現在のシステムを維持</strong></td><td>ユーザーをKeycloakに移行する必要はありません_</td></tr>
<tr><td><strong>単一の真実の情報源</strong></td><td>ユーザーデータは 1 か所にのみ存在し、不整合を回避_</td></tr>
<tr><td><strong>Kerberos SSO</strong></td><td>Active Directory からの Kerberos 認証の統合_</td></tr>
</tbody>
</table>

<h3 id="12-cac-loai-federation"><strong>1.2 フェデレーションプロバイダーの種類</strong></h3><table>
<thead>
<tr><th>プロバイダ_</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td><strong>_LDAP</strong></td><td>OpenLDAP、389 Directory Server、および LDAP 準拠サーバーをサポート_</td></tr>
<tr><td><strong>Active Directory</strong></td><td>Microsoft Active Directory (LDAP プロトコル + AD 固有のマッパーを使用)</td></tr>
<tr><td><strong>_SSSD</strong></td><td>_システム セキュリティ サービス デーモン - FreeIPA/Red Hat IdM 統合_</td></tr>
<tr><td><strong>カスタム ユーザー ストレージ SPI</strong></td><td>任意のデータベースに接続するための独自のプロバイダーを作成_</td></tr>
</tbody>
</table>

<h2 id="2-them-ldap-provider"><strong>2. LDAP プロバイダーの追加_</strong></h2>

<p>_<strong>管理コンソール → ユーザー フェデレーション → LDAP プロバイダーの追加</strong>.</p> に移動します。

<h3 id="21-general-options"><strong>2.1 一般オプション</strong></h3>

<table>
<thead>
<tr><th>設定</th><th>説明_</th><th>テンプレート値_</th></tr>
</thead>
<tbody>
<tr><td><strong>コンソールの表示名</strong></td><td>管理コンソールに表示される名前_</td><td><code>企業LDAP</code></td></tr>
<tr><td><strong>優先度</strong></td><td>プロバイダーが多い場合の優先順位_</td><td><code>_0</code> (高)ほとんど)_</td></tr>
<tr><td><strong>有効</strong></td><td>プロバイダーの有効化/無効化_</td><td><code>ON</code></td></tr>
<tr><td><strong>ユーザーのインポート</strong></td><td>LDAPユーザーをKeycloakローカルデータベースにインポート</td><td><code>ON</code></td></tr>
</tbody>
</table>

<h3 id="22-connection-settings"><strong>2.2 接続設定</strong></h3>

___プレコード_0___

<p><strong>接続プール設定:</strong></p><table>
<thead>
<tr><th>設定</th><th>説明_</th><th>デフォルト_</th></tr>
</thead>
<tbody>
<tr><td><strong>接続プーリング</strong></td><td>接続プーリングを有効にしてパフォーマンス機能を最適化</td><td><code>ON</code></td></tr>
<tr><td><strong>接続プール認証</strong></td><td>認証された接続用のプール</td><td><code>単純</code></td></tr>
<tr><td><strong>接続プールのデバッグ</strong></td><td>接続プールのログデバッグ</td><td><code>OFF</code></td></tr>
<tr><td><strong>接続プールの初期サイズ</strong></td><td>初期接続数トップ</td><td><code>1</code></td></tr>
<tr><td><strong>接続プールの最大サイズ</strong></td><td>最大接続数 multi</td><td><code>1000</code></td></tr>
<tr><td><strong>接続プールのタイムアウト</strong></td><td>プールからの接続を取得するためのタイムアウト</td><td><code>30000</code> ms</td></tr>
</tbody>
</table>

<h3 id="23-ssl-ldaps-configuration"><strong>2.3 SSL/LDAPS 構成</strong></h3>

<p>LDAPS (ポート 636) に接続するには、CA 証明書を Keycloak トラストストアにインポートする必要があります:</p>

___プレコード_1___

<p>トラストストアを使用して Keycloak を構成する:</p>

___プレコード_2___

<h3 id="24-use-start-tls"><strong>_2.4 StartTLS を使用する</strong></h3>

<p>LDAPS (ポート 636) の代わりに、ポート 389:</p> で <strong>StartTLS</strong> を使用できます。

___プレコード_3___

<p>StartTLS は、通常の LDAP 接続を同じポート 389 の暗号化された接続にアップグレードします。</p>

<h2 id="3-ldap-searching-settings"><strong>3. LDAP 検索設定</strong></h2><table>
<thead>
<tr><th>設定</th><th>説明</th><th>テンプレート値</th></tr>
</thead>
<tbody>
<tr><td><strong>ユーザーDN</strong></td><td>Keycloakが検索するベースDNユーザー_</td><td><code>ou=人,dc=example,dc=com</code></td></tr>
<tr><td><strong>ユーザー オブジェクト クラス</strong></td><td>ユーザー エントリの LDAP オブジェクト クラス</td><td><code>inetOrgperson、organizationalperson</code></td></tr>
<tr><td><strong>ユーザー名 LDAP 属性</strong></td><td>LDAP 属性にはユーザー名が含まれています</td><td><code>uid</code> (LDAP) / <code>sAMアカウント名</code> (AD)</td></tr>
<tr><td><strong>RDN LDAP 属性</strong></td><td>RDN (相対識別名) に使用される属性</td><td><code>uid</code> (LDAP) / <code>cn</code> (広告)</td></tr>
<tr><td><strong>UUID LDAP 属性</strong></td><td>一意の ID として使用される属性</td><td><code>entryUUID</code> (LDAP) / <code>objectGUID</code> (AD)</td>HTMLTAG_442___
<tr><td><strong>検索範囲</strong></td><td><code>1レベル_</code>または<code>サブツリー</code></td><td><code>サブツリー</code></td></tr>
<tr><td><strong>カスタム ユーザー LDAP フィルタ</strong></td><td>フィルタリングする追加の LDAP フィルタユーザー_</td><td><code>(&amp;(objectClass=person)(memberOf=cn=app-users,ou=Groups,dc=example,dc=com))</code></td></tr>
<tr><td><strong>読み取りタイムアウト</strong></td><td>LDAP読み取り操作のタイムアウト</td><td><code>30000</code> ms</td></tr>
</tbody>
</table>

<h3 id="31-active-directory-settings"><strong>3.1 Active Directory 設定</strong></h3>

<p>_<strong>Vendor = Active Directory</strong> を選択すると、Keycloak は適切な値を自動的に設定します:</p>

___プレコード_4___

<h2 id="4-storage-modes"><strong>_4.ストレージ モード_</strong></h2>

<p>_Keycloak は、Keycloak が LDAP と対話する方法を決定する 3 つのストレージ モードをサポートします:</p><table>
<thead>
<tr><th>_モード_</th><th>LDAPから読み取る</th><th>LDAPに書き戻す</th><th>Keycloak DBにインポート</th><th>使用case_</th></tr>
</thead>
<tbody>
<tr><td><strong>READ_ONLY</strong></td><td>✅</td><td>❌</td><td>✅ (キャッシュ)</td><td>LDAP が唯一のソースであり、ユーザーが Keycloak 経由で情報を変更することはできません</td></tr>
<tr><td><strong>WRITABLE</strong></td>___HTMLTAG_534__ __✅</td><td>✅</td><td>✅</td><td>ユーザーの変更を許可します情報 (パスワード、プロフィール) を取得し、LDAP</td></tr> に書き戻す
<tr><td><strong>UNSYNCED</strong></td><td> ✅</td><td>❌</td><td>✅</td><td>ユーザーをインポートLDAP、その後 Keycloak DB にのみ変更を保存 (ライトバックなし)</td></tr>
</tbody>
</table>

<h3 id="41-edit-modes"><strong>4.1 編集モード</strong></h3>

<p>編集モードは、ユーザーまたは管理者が情報を変更するときの動作を規制します:</p>

___プレコード_5___

<h2 id="5-sync-settings"><strong>5.同期設定_</strong></h2>

<p>Keycloak は 2 つのメカニズムによって LDAP からユーザーを同期できます:</p>

<h3 id="51-periodic-full-sync"><strong>_5.1 定期的な完全同期</strong></h3>

___プレコード_6___

<h3 id="52-periodic-changed-users-sync"><strong>5.2 定期的に変更されたユーザーの同期</strong></h3>

___プレコード_7___

<h3 id="53-manual-sync"><strong>_5.3 手動同期</strong></h3>

<p>同期は管理コンソールまたは CLI 経由で手動でトリガーできます:</p>

___プレコード_8___

<h2 id="6-ldap-mappers"><strong>6. LDAP マッパー_</strong></h2>

<p>LDAPマッパーは、Keycloak__HTMLTAG_590___LDAP属性をKeycloakユーザーモデル</strong>にマッピングする方法を定義します。これは、LDAP フェデレーションを構成する場合に最も重要な部分です。</p>

<h3 id="61-user-attribute-ldap-mapper"><strong>6.1 user-attribute-ldap-mapper</strong></h3>

<p>LDAP 属性を Keycloak ユーザー属性にマッピングします:</p>

___プレコード_9___

<p>自動的に生成されたデフォルト マッパー:</p><table>
<thead>
<tr><th>マッパー名_</th><th>LDAP属性</th><th>Keycloak属性</th></tr>
</thead>
<tbody>
<tr><td>ユーザー名</td><td><code>uid</code> / <code>sAMアカウント名_</code></td><td><code>ユーザー名</code></td></tr>
<tr><td>メール</td><td><code>メール___HTMLTAG_632_ __</td><td><code>メール</code></td></tr>
<tr><td>名</td><td><code>名</code> / <code>_cn</code></td><td><code>名</code></td></tr>
<tr><td>姓</td><td><code>sn</code></td><td><code>姓</code></td></tr>
<tr><td>作成日</td><td><code>createTimestamp</code></td><td><code>_createTimestamp</code></td></tr>
<tr><td>日付変更</td><td><code>タイムスタンプ</code></td><td><code>_タイムスタンプ変更</code></td></tr>
</tbody>
</table>

<h3 id="62-full-name-ldap-mapper"><strong>_6.2 full-name-ldap-mapper</strong></h3>

<p>LDAP <code>cn</code> (通称) を Keycloak にマップ <code>firstName</code> + <code>lastName</code>:</p>

___プレコード_10___

<p>LDAP に <code>givenName</code>/<code>sn</code>.</p> を分割せずに <code>cn</code> のみがある場合に便利です。

<h3 id="63-group-ldap-mapper"><strong>_6.3 group-ldap-mapper</strong></h3>

<p>LDAP グループを Keycloak グループに同期する:</p>

___プレコード_11___

<p><strong>ユーザー グループの戦略オプションを取得:</strong></p>

<table>
<thead>
<tr><th>戦略_</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td><strong>LOAD_GROUPS_BY_MEMBER_ATTRIBUTE</strong></td><td>メンバー属性に基づいて LDAP からグループをロード</td></tr>
<tr><td><strong>GET_GROUPS_FROM_USER_MEMBEROF_ATTRIBUTE</strong></td><td>ユーザーエントリの__HTMLTAG_745___memberOf__HTMLTAG_746___属性を読み取り___HTMLTAG_747__HTMLTAG_748___
<tr><td><strong>LOAD_GROUPS_BY_MEMBER_ATTRIBUTE_RECURSIVELY</strong></td><td>グループを再帰的にロード (ネストされたグループ)</td></tr>
</tbody>
</table><h3 id="64-role-ldap-mapper"><strong>6.4 role-ldap-mapper</strong></h3>

<p>LDAP ロール/グループを Keycloak レルム ロールに同期する:</p>

___プレコード_12___

<h3 id="65-hardcoded-ldap-role-mapper"><strong>6.5 ハードコードされた LDAP ロール マッパー</strong></h3>

<p>固定ロールを LDAP プロバイダーから__HTMLTAG_770___すべて</strong> ユーザーに自動的に割り当てます:</p>

___プレコード_13___

<p>ロール マーカーを使用して、LDAP のユーザーとローカル ユーザーを区別する場合に便利です。</p>

<h3 id="66-msad-user-account-control-mapper"><strong>6.6 msad-user-account-control-mapper</strong></h3>

<p>__HTMLTAG_780___Active Directory</strong> の特別なマッパー、__HTMLTAG_782___userAccountControl</code> 属性:</p> を処理します

___プレコード_14___

<p>このマッパーは AD のビットマスク <code>userAccountControl</code> を読み取り、Keycloak ユーザー ステータスにマッピングします:</p>

<table>
<thead>
<tr><th>_AD フラグ (ビット)</th><th>Keycloak の動作</th></tr>
</thead>
<tbody>
<tr><td><code>ACCOUNTDISABLE</code> (0x0002)_</td><td>Keycloak でユーザーが無効になっています_</td></tr>
<tr><td><code>LOCKOUT</code> (0x0010)</td><td>_ユーザーがロックされました</td></tr>
<tr><td><code>PASSWORD_EXPIRED</code></td><td>ユーザーはログイン時にパスワードを変更する必要があります_</td></tr>
</tbody>
</table>

<h3 id="67-certificate-ldap-mapper"><strong>_6.7 証明書-ldap-mapper</strong></h3>

<p>X.509 認証の LDAP 証明書属性を Keycloak ユーザー属性にマップします:</p>

___プレコード_15___

<h2 id="7-password-hashing"><strong>_7.パスワードのハッシュ</strong></h2>

<p>LDAP フェデレーションを使用する場合、パスワード ハッシュにはいくつかの重要な特性があります:</p>

<table>
<thead>
<tr><th>_シナリオ</th><th>パスワードハッシュ</th><th>メモ</th></tr>
</thead>
<tbody>
<tr><td><strong>READ_ONLY モード</strong></td><td>パスワードは常に LDAP サーバーで直接検証されます</td><td>Keycloak はパスワードのハッシュを保存しません</td></tr>
<tr><td><strong>WRITABLE モード</strong></td><td>LDAP パスワード ポリシーに従ってパスワードが LDAP に書き込まれます</td><td>LDAP サーバーがハッシュを実行</td></tr>
<tr><td><strong>UNSYNCEDモード</strong></td><td>Keycloakハッシュを使用してKeycloak DBに保存された新しいパスワード_</td><td>古いパスワードはまだ検証されていますLDAP</td></tr>
</tbody>
</table>

___プレコード_16___

<h2 id="8-sssd-va-freeipa-integration"><strong>_8. SSSD と FreeIPA の統合</strong></h2><p>Keycloak は、D-Bus インターフェースを介した <strong>SSSD (システム セキュリティ サービス デーモン)</strong> との統合をサポートし、FreeIPA または Red Hat Identity Manager からユーザーを認証できるようにします。</p>

<h3 id="81-prerequisites"><strong>8.1 前提条件</strong></h3>

___プレコード_17___

<h3 id="82-cau-hinh-sssd-federation-provider"><strong>_8.2 SSSD フェデレーションプロバイダーの構成</strong></h3>

<p>管理コンソールで、__HTMLTAG_898___SSSD</strong> フェデレーションプロバイダーを追加します — Keycloak は D-Bus 経由で SSSD と通信します:</p>

<ul>
<li>ユーザーの認証 (PAM)</li>
<li>ユーザー属性の取得 (InfoPipe)</li>
<li>グループ メンバーシップを取得__HTMLTAG_907___
</ul>

<h2 id="9-kerberos-bridge"><strong>_9.ケルベロス ブリッジ_</strong></h2>

<p>Keycloak は__HTMLTAG_914___Kerberos 認証</strong> を LDAP フェデレーションとともに使用できるため、ユーザーは Kerberos チケット (SPNEGO) を使用して自動的にログインできます。</p>

<h3 id="91-cau-hinh-kerberos-voi-ldap"><strong>9.1 LDAP を使用した Kerberos の構成</strong></h3>

___プレコード_18___

___プレコード_19___

<h3 id="92-browser-configuration-cho-spnego"><strong>_9.2 SPNEGO のブラウザ構成</strong></h3>

___プレコード_20___

<h2 id="10-custom-user-storage-spi"><strong>10.カスタム ユーザー ストレージ SPI</strong></h2>

<p>LDAP だけでは不十分な場合は、__HTMLTAG_930___カスタム ユーザー ストレージ プロバイダー</strong> を作成して、任意のデータ ソース (SQL データベース、REST API、レガシー システムなど) に接続できます。</p>

<h3 id="101-spi-interfaces"><strong>10.1 SPI インターフェイス</strong></h3>

___プレコード_21___

<h3 id="102-deploy-custom-provider"><strong>10.2 カスタムプロバイダーのデプロイ</strong></h3>

___プレコード_22___

<h2 id="11-cau-hinh-ldap-voi-kcadm"><strong>_11. kcadm.sh</strong></h2> を使用して LDAP を構成する

<p>__HTMLTAG_946___kcadm.sh</code> を使用して、コマンド ライン経由で LDAP フェデレーションを構成します:</p>

___プレコード_23___

<h2 id="12-troubleshooting-ldap"><strong>12. LDAP の問題のトラブルシューティング</strong></h2>

<h3 id="121-connection-issues"><strong>12.1 接続の問題</strong></h3><table>
<thead>
<tr><th>エラー</th><th>原因_</th><th>解決策_</th></tr>
</thead>
<tbody>
<tr><td><code>javax.naming.CommunicationException</code></td><td>LDAP サーバーに接続できません_</td><td>_ネットワーク、ファイアウォール、ポート 389/636 を確認してください</td></tr>
<tr><td><code>javax.naming.AuthenticationException</code></td><td>間違ったバインド DN またはバインド資格情報_</td><td>_バインド資格情報を検証してください<code>ldapsearch</code></td></tr>
<tr><td><code>SSLHandshakeException</code></td><td>_証明書が信頼できません</td><td>CA 証明書トラストストアをインポート</td></tr>
<tr><td><code>接続タイムアウト</code></td><td>LDAPサーバーが応答しません_</td><td>接続タイムアウトを増やし、DNSを確認してください</td></tr>
</tbody>
</table>

___プレコード_24___

<h3 id="122-sync-failures"><strong>12.2 同期の失敗</strong></h3>

<table>
<thead>
<tr><th>エラー</th><th>原因_</th><th>解決策_</th></tr>
</thead>
<tbody>
<tr><td><code>ユーザー ... すでに存在します</code></td><td>_LDAP とローカル ユーザーの間でユーザー名の競合_</td><td>ローカル ユーザーを削除するか、ユーザー名のマッピングを変更してください</td></tr>
<tr><td><code>サイズ制限を超えました</code></td><td>LDAPサーバーが返される結果の数を制限しています_</td><td>LDAPサーバーでページングを構成するか、LDAPフィルタを追加して結果を減らしてくださいスコープ</td></tr>
<tr><td><code>参照</code></td><td>LDAPは結果の代わりに参照を返します</td><td>接続で<code>参照=フォロー</code>を設定します設定_</td></tr>
</tbody>
</table>

<h3 id="123-mapper-problems"><strong>12.3 マッパーの問題</strong></h3>

___プレコード_25___

<h2 id="13-best-practices"><strong>13.ベスト プラクティス</strong></h2><ul>
<li><strong>常に LDAPS または StartTLS を使用してください</strong> — 認証情報をプレーンテキストで送信しないでください</li>
<li><strong>バインド DN には別のサービス アカウントを使用してください</strong> — 管理者アカウントは使用しないでください</li>
<li><strong>検索範囲の制限</strong> — カスタム ユーザー LDAP フィルタを使用して必要なユーザーのみをインポート__HTMLTAG_1083___
<li><strong>接続プールを有効にする</strong> — 接続作成のオーバーヘッドを削減</li>
<li><strong>同期期間を適切に構成してください</strong> — 短すぎると LDAP に大きな負荷がかかり、長すぎるとデータが古くなります</li>
<li><strong>同期ログの監視</strong> — Keycloak ログの詳細な同期プロセス</li>
<li><strong>最初に READ_ONLY を使用してテスト</strong> — 最初に設定した場合は、WRITABLE</li> を転送する前に READ_ONLY を使用して検証します。
<li><strong>_大きな同期の前にKeycloak DBをバックアップ</strong> — 完全同期では数千のユーザーをインポートできます</li>
</ul>