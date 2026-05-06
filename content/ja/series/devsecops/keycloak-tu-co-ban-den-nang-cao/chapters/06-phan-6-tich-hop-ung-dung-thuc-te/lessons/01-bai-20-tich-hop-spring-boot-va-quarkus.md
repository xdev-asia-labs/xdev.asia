---
id: 019d8b30-b120-7001-c001-e0c5f8100120
title: 'レッスン 20: Spring Boot と Quarkus の統合'
slug: bai-20-tich-hop-spring-boot-va-quarkus
description: Spring Security OAuth2 Resource Server (spring-boot-starter-oauth2-resource-server) を使用して Keycloak を Spring Boot 3 と統合し、JWT 検証、カスタム JwtAuthenticationConverter、realm_access/resource_access クレームからのロール マッピング、Spring Security メソッドレベルの認可 (@PreAuthorize) を構成し、Quarkus と quarkus-oidc 拡張機能、マルチテナント構成および Testcontainers を使用したテストを統合します。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 20
section_title: 'パート 6: 実際のアプリケーションの統合'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8086" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8086)"/>

  <!-- Decorations -->
  <g>
    <circle cx="784" cy="122" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="968" cy="66" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="652" cy="270" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="836" cy="214" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="1020" cy="158" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="82" x2="1100" y2="162" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="112" x2="1050" y2="182" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1014.0429399400242,163.5 1014.0429399400242,200.5 982,219 949.9570600599758,200.5 949.9570600599758,163.5 982,145" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — レッスン 20</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 20: Spring Boot と Quarkus の統合__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak の基本から高度なもの</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 実用的なアプリケーションの統合__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="1-tong-quan-tich-hop-backend"><strong>1.バックエンド統合の概要_</strong></h2>

<p>Keycloak は標準の OAuth2/OIDC メカニズムを提供し、JWT 検証をサポートするバックエンド フレームワークとの統合を可能にします。この記事では、Java エコシステムで最も人気のある 2 つのフレームワーク、__HTMLTAG_70___Spring Boot 3</strong> と <strong>Quarkus</strong> を統合します。</p>

<table>
<thead>
<tr><th>フレームワーク</th><th>ライブラリ</th><th>アプローチ_</th></tr>
</thead>
<tbody>
<tr><td>Spring Boot 3</td><td><code>spring-boot-starter-oauth2-resource-server_</code></td><td>JWT リソース サーバー</td></tr>
<tr><td>Quarkus</td><td><code>quarkus-oidc</code></td><td>OIDC 拡張</td></tr>
</tbody>
</table>

<p>アーキテクチャの概要:</p>

___プレコード_0___

<h2 id="2-spring-boot-3-keycloak-integration"><strong>2. Spring Boot 3 + Keycloak の統合</strong></h2>

<h3 id="21-maven-dependencies"><strong>2.1 Maven の依存関係</strong></h3>

___プレコード_1___

<p><strong>重要な注意:</strong> Keycloak 20以降、専用のSpring Bootアダプター(<code>keycloak-spring-boot-starter</code>)は__HTMLTAG_124___非推奨__HTMLTAG_125___になりました。現在の標準的な方法は、Spring Security の <code>spring-boot-starter-oauth2-resource-server</code>.</p> を使用することです。

<h3 id="22-application-yml-configuration"><strong>2.2 Application.yml 構成</strong></h3>

___プレコード_2___

<p>属性の説明:</p><table>
<thead>
<tr><th>プロパティ</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td><code>issuer-uri</code></td><td>JWT</td></tr> の__HTMLTAG_151___iss_</code>クレームを検証するために使用されるKeycloakレルムのURI
<tr><td><code>jwk-set-uri</code></td><td>エンドポイントには JWT 署名を検証するための公開キー (JWKS) が含まれています_</td></tr>
</tbody>
</table>

<h3 id="23-security-configuration"><strong>2.3 セキュリティ構成</strong></h3>

___プレコード_3___

<h3 id="24-custom-jwtauthenticationconverter"><strong>2.4 カスタム JwtAuthenticationConverter</strong></h3>

<p>_Keycloak は、特別な構造に従って JWT クレームにロールを保存します。正しい役割を抽出するにはカスタム コンバータが必要です:</p>

___プレコード_4___

___プレコード_5___

<p>ロール マッピングの仕組み:</p>

___プレコード_6___

<h3 id="25-rest-controller-voi-rbac"><strong>2.5 RBAC を使用した REST コントローラー</strong></h3>

___プレコード_7___

<h3 id="26-cors-configuration"><strong>2.6 CORS 構成</strong></h3>

<p>フロントエンド (React/Angular) がバックエンド API を呼び出すときは、CORS を構成する必要があります:</p>

___プレコード_8___

<p>CORS を <code>SecurityFilterChain</code>:</p> に追加します

___プレコード_9___

<h3 id="27-xu-ly-token-expiration"><strong>_2.7 トークンの有効期限の処理</strong></h3>

<p>Spring Security は__HTMLTAG_196___exp</code> クレームを自動的に検証します。トークンの有効期限が切れると、サーバーは HTTP 401:</p> を返します。

___プレコード_10___

<p>__HTMLTAG_200___SecurityFilterChain</code>:</p> に登録されました

___プレコード_11___

<h2 id="3-quarkus-keycloak-integration"><strong>3. Quarkus + Keycloak の統合</strong></h2>

<h3 id="31-quarkus-oidc-extension"><strong>3.1 Quarkus OIDC 拡張機能</strong></h3>

<p>Quarkus は、Keycloak と統合する <code>quarkus-oidc</code> 拡張機能を提供します:</p>

___プレコード_12___

<h3 id="32-application-properties"><strong>3.2 アプリケーションのプロパティ</strong></h3>

___プレコード_13___

<h3 id="33-rest-resource-voi-rolesallowed"><strong>3.3 @RolesAllowed を使用した REST リソース</strong></h3>

___プレコード_14___

<h3 id="34-multi-tenant-oidc-configuration"><strong>3.4 マルチテナント OIDC 構成</strong></h3>

<p>Quarkus は、複数の Keycloak レルムに接続する必要がある SaaS システムのマルチテナント OIDC をサポートします:</p>

___プレコード_15___

___プレコード_16___

<h3 id="35-keycloak-authorization-policy-enforcer"><strong>3.5 Keycloak認可ポリシーエンフォーサ</strong></h3>

<p>__HTMLTAG_234___quarkus-keycloak-authorization</code> を使用して Keycloak 認可サービス ポリシーを適用します:</p>

___プレコード_17___

<h2 id="4-testing-voi-testcontainers"><strong>4.テストコンテナを使用したテスト</strong></h2>

<h3 id="41-spring-boot-testcontainers-keycloak"><strong>4.1 Spring Boot + テストコンテナ Keycloak</strong></h3>

<p>__HTMLTAG_246___testcontainers-keycloak</code> を使用して、統合テストで実際の Keycloak を実行します:</p>___プレコード_18___

<h3 id="42-test-realm-json"><strong>4.2 レルム JSON のテスト</strong></h3>

<p>ファイル <code>src/test/resources/test-realm.json</code> を作成して、テスト用のレルムをインポートします:</p>

___プレコード_19___

<h3 id="43-unit-test-voi-mock-jwt"><strong>4.3 モック JWT を使用した単体テスト</strong></h3>

<p>実際の Keycloak を使用しない単体テストの場合は、__HTMLTAG_262___@WithMockUser</code> またはカスタム JWT:</p> を使用してください。

___プレコード_20___

<h2 id="5-best-practices-va-troubleshooting"><strong>5.ベスト プラクティスとトラブルシューティング</strong></h2>

<h3 id="51-best-practices"><strong>_5.1 ベスト プラクティス</strong></h3>

<table>
<thead>
<tr><th>#</th><th>練習</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>レルムロールの使用</td><td>優先度__HTMLTAG_291___realm_access.roles</code>単一認可の単純___HTMLTAG_293__HTMLTAG_294___
<tr><td>2</td><td>ステートレスセッション</td><td>REST API には常に <code>SessionCreationPolicy.STATELESS</code> を使用</td></tr>
<tr><td>3</td><td>API の CSRF を無効にする</td><td>JWT Bearer トークンを使用する場合は CSRF は必要ありません_</td></tr>
<tr><td>4</td><td>トークン検証キャッシュ</td><td>Spring Security は JWK セットを自己キャッシュするため、リクエストごとに Keycloak を呼び出す必要はありません_</td></tr>
<tr><td>5</td><td>クレームベースの承認___HTMLTAG_325__HTMLTAG_326___<code>@PreAuthorize</code> を SpEL とともに使用して複雑なロジックを実現</td></tr>
<tr><td>6</td><td>エラー処理___HTMLTAG_335__HTMLTAG_336___カスタム__HTMLTAG_337___AuthenticationEntryPoint</code>ほとんどの応答形式</td></tr>
<tr><td>_7</td><td>テストカバレッジ</td><td>単体テスト(モックJWT)と統合テスト(テストコンテナ)の組み合わせ</td></tr>
</tbody>
</table>

<h3 id="52-troubleshooting-common-issues"><strong>_5.2 一般的な問題のトラブルシューティング</strong></h3>

___プレコード_21___

<h3 id="53-curl-testing-commands"><strong>5.3 カール テスト コマンド</strong></h3>

___プレコード_22___

<h2 id="6-tong-ket"><strong>6.概要_</strong></h2><table>
<thead>
<tr><th>基準_</th><th>Spring Boot 3</th><th>_Quarkus</th></tr>
</thead>
<tbody>
<tr><td>_ライブラリ</td><td><code>spring-boot-starter-oauth2-resource-serv er</code></td><td><code>quarkus-oidc</code></td></tr>
<tr><td>ロールマッピング_</td><td>カスタム__HTMLTAG_391___JwtAuthenticationConverter_</code></td><td>Config <code>roles.role-claim-path</code></td></tr>
<tr><td>承認</td><td><code>@PreAuthorize</code>、 <code>hasRole()</code></td><td><code>@許可されたロール</code>、__HTMLTAG_411___@認証済み</code></td></tr>
<tr><td>マルチテナント</td><td>カスタム実装</td><td>組み込み__HTMLTAG_421___TenantResolver</code></td></tr>
<tr><td>_ポリシーエンフォーサー_</td><td>マニュアル</td><td><code>quarkus-keycloak-authorization</code></td></tr>
<tr><td>テスト_</td><td>テストコンテナ + モックJWT</td><td><code>quarkus-test-keycloak-server</code></td></tr>
<tr><td>起動時間</td><td>~2～5秒</td><td>~0.5～1秒(ネイティブ~0.01秒)</td></tr>
</tbody>
</table>

<p>次の記事では、Keycloakをフロントエンドフレームワーク（React、Angular）およびNode.jsバックエンドと統合する方法を学びます。</p>