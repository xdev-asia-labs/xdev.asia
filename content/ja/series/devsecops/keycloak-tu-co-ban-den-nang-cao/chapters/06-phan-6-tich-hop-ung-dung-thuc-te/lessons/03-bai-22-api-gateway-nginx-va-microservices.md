---
id: 019d8b30-b122-7001-c001-e0c5f8100122
title: 'レッスン 22: API ゲートウェイ、Nginx、マイクロサービス'
slug: bai-22-api-gateway-nginx-va-microservices
description: Keycloakは、Nginx（lua-resty-openidc/nginx-oidc-moduleまたはOAuth2プロキシ）、Kongゲートウェイ（OIDCプラグイン）、Traefik（ForwardAuthミドルウェア）、マイクロサービス用のAPIゲートウェイパターン、サービスアカウント認証（クライアント資格情報の付与）、トークン交換、内部サービス間認証、および完全なDocker Composeスタックと統合します。
duration_minutes: 220
is_free: true
video_url: null
sort_order: 22
section_title: 'パート 6: 実際のアプリケーションの統合'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9020" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9020)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1015" cy="255" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="930" cy="70" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="845" cy="145" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="760" cy="220" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="675" cy="35" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="145" x2="1100" y2="225" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="175" x2="1050" y2="245" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1029.6410161513775,175 1029.6410161513775,215 995,235 960.3589838486224,215 960.3589838486224,175 995,155" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — レッスン 22</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 22: API ゲートウェイ、Nginx および</tspan>
      <tspan x="60" dy="42">マイクロサービス</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">_Keycloak の基本から高度なもの__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 実用的なアプリケーションの統合__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-api-gateway-pattern-voi-keycloak"><strong>1. Keycloak を使用した API ゲートウェイ パターン</strong></h2>

<p>マイクロサービス アーキテクチャでは、API ゲートウェイはすべてのクライアント リクエストに対する単一のエントリ ポイントとして機能します。 Keycloakと組み合わせると、ゲートウェイは__HTMLTAG_72___集中認証</strong>および__HTMLTAG_74___JWT伝播</strong>をダウンストリームサービスに処理します。</p>

___プレコード_0___

<table>
<thead>
<tr><th>ゲートウェイ</th><th>認証方法</th><th>利点_</th></tr>
</thead>
<tbody>
<tr><td>Nginx + lua-resty-openidc</td><td>Lua モジュール OIDC</td><td>軽量、高性能</td></tr>
<tr><td>Nginx + OAuth2 プロキシ</td><td>サイドカー プロキシ</td><td>簡単なセットアップ、Lua は不要_</td></tr>
<tr><td>Kong ゲートウェイ</td><td>OIDC プラグイン_</td><td>エンタープライズ機能、プラグイン エコシステム_</td></tr>
<tr><td>Traefik_</td><td>ForwardAuth</td><td>クラウドネイティブ、自動検出</td></tr>
</tbody>
</table>

<h2 id="2-nginx-keycloak-integration"><strong>2. Nginx + Keycloak の統合</strong></h2>

<h3 id="21-approach-1-lua-resty-openidc"><strong>2.1 アプローチ 1: lua-resty-openidc</strong></h3>

<p><code>lua-resty-openidc</code> は、Nginx/OpenResty 用の OpenID Connect モジュールであり、JWT 検証、トークン イントロスペクション、および OIDC ログイン フローを Nginx 層で直接サポートします。</p>

<h4>2.1.1 OpenResty のインストール</h4>

___プレコード_1___<h4>2.1.2 ベアラー トークン検証を使用した Nginx 構成__HTMLTAG_138___

___プレコード_2___

<h3 id="22-approach-2-oauth2-proxy-sidecar"><strong>2.2 アプローチ 2: OAuth2 プロキシ サイドカー</strong></h3>

<p><code>oauth2-proxy</code> は、OAuth2/OIDC プロバイダーを介して認証を提供するリバース プロキシです。このアプローチには Lua は必要なく、セットアップが簡単です:</p>

___プレコード_3___

<h4>2.2.1 OAuth2 プロキシ構成__HTMLTAG_148___

___プレコード_4___

<h4>2.2.2 auth_request</h4> を使用した Nginx

___プレコード_5___

<h2 id="3-kong-gateway-keycloak"><strong>3. Kong ゲートウェイ + Keycloak</strong></h2>

<h3 id="31-kong-oidc-plugin-configuration"><strong>3.1 Kong OIDC プラグイン構成</strong></h3>

<p>Kong Gateway は、Keycloak からの JWT トークンを検証するための OIDC プラグイン (Kong Enterprise またはコミュニティ プラグイン) をサポートしています:</p>

___プレコード_6___

<h3 id="32-kong-admin-api-configuration"><strong>3.2 Kong 管理 API 構成</strong></h3>

<p>宣言型ではなく Kong Admin API を使用した設定:</p>

___プレコード_7___

<h2 id="4-traefik-keycloak"><strong>4. Traefik + Keycloak</strong></h2>

<h3 id="41-forwardauth-middleware"><strong>4.1 ForwardAuth ミドルウェア</strong></h3>

<p>Traefik は <strong>ForwardAuth ミドルウェア</strong> を使用して認証を外部サービス (OAuth2 プロキシ) に委任します:</p>

___プレコード_8___

___プレコード_9___

<h3 id="42-traefik-voi-docker-labels"><strong>4.2 Docker ラベルを使用した Traefik</strong></h3>

___プレコード_10___

<h2 id="5-service-account-authentication"><strong>5.サービス アカウント認証</strong></h2>

<h3 id="51-client-credentials-grant"><strong>5.1 クライアント認証情報の付与</strong></h3>

<p>サービス間通信 (ユーザー コンテキストなし) の場合は、__HTMLTAG_192___クライアント資格情報の付与</strong>:</p> を使用します。

___プレコード_11___

<h4>5.1.1 Keycloakクライアントのセットアップ__HTMLTAG_196___

___プレコード_12___

<h4>5.1.2 サービス アカウント トークンの取得</h4>

___プレコード_13___

<h4>5.1.3 Spring Boot のサービス アカウント</h4>

___プレコード_14___

___プレコード_15___

<h3 id="52-token-exchange-rfc-8693"><strong>5.2 トークン交換 (RFC 8693)</strong></h3>

<p>トークン交換を使用すると、サービスがユーザー トークンを異なるスコープ/対象ユーザーの新しいトークンに交換したり、ダウンストリーム サービスを呼び出すときにユーザーになりすますことができます:</p>

___プレコード_16___

___プレコード_17___

<h3 id="53-internal-service-authentication-patterns"><strong>5.3 内部サービス認証パターン</strong></h3><table>
<thead>
<tr><th>パターン_</th><th>ユースケース</th><th>長所</th><th>短所</th></tr>
</thead>
<tbody>
<tr><td>JWT 伝播</td><td>ユーザー トークンをダウンストリームに転送</td><td>シンプル、ユーザー コンテキストが保持</td><td>トークンの有効期限の問題</td></tr>
<tr><td>クライアント認証情報</td><td>サービス間、ユーザーコンテキストなし_</td><td>ユーザーセッションから独立_</td><td>ユーザーIDなし</td></tr>
<tr><td>トークン交換_</td><td>なりすまし、閲覧者制限_</td><td>ユーザーコンテキスト + スコープ限定アクセス_</td><td>追加のKeycloak呼び出し</td></tr>
<tr><td>mTLS</td><td>ゼロトラスト サービス メッシュ</td><td>強力な ID、トークン不要_</td><td>証明書管理</td></tr>
</tbody>
</table>

<h2 id="6-complete-docker-compose-stack"><strong>6.完全な Docker Compose スタック</strong></h2>

<p>Keycloak、PostgreSQL、Nginx ゲートウェイおよびバックエンド サービスを備えた Docker Compose スタック:</p>

___プレコード_18___

<h3 id="61-nginx-configuration-cho-docker-compose"><strong>6.1 Docker Compose の Nginx 構成</strong></h3>

___プレコード_19___

<h2 id="7-monitoring-va-rate-limiting"><strong>7。モニタリングとレート制限</strong></h2>

<h3 id="71-monitor-service-account-tokens"><strong>_7.1 サービス アカウント トークンの監視</strong></h3>

___プレコード_20___

<h3 id="72-service-account-best-practices"><strong>7.2 サービス アカウントのベスト プラクティス</strong></h3><table>
<thead>
<tr><th>_#</th><th>練習</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>有効期間の短いトークン</td><td>サービス アカウントのアクセス トークンの有効期間を短く設定 (5 分)_</td></tr>
<tr><td>2</td><td>最低権限</td><td>必要な最小限の役割のみを割り当て__HTMLTAG_315___</tr>
<tr><td>3</td><td>シークレットをローテーション</td><td>client_secretを定期的に変更_</td></tr>
<tr><td>_4</td><td>トークンのキャッシュ_</td><td>クライアント側でトークンをキャッシュし、有効期限が切れる前に更新__HTMLTAG_331___</tr>
<tr><td>5</td><td>個別のクライアント</td><td>各サービスは独自のクライアントを使用し、共有資格情報は使用しません_</td></tr>
<tr><td>6</td><td>ネットワーク ポリシー</td><td>サービス間のネットワーク アクセスを制限</td></tr>
<tr><td>7</td><td>監査ログ</td><td>サービス アカウント トークン要求のログ</td></tr>
</tbody>
</table>

<h3 id="73-rate-limiting-tai-gateway"><strong>_7.3 ゲートウェイでのレート制限</strong></h3>

___プレコード_21___

<h2 id="8-tong-ket"><strong>8.概要_</strong></h2>

<table>
<thead>
<tr><th>ゲートウェイ_</th><th>複雑さ</th><th>パフォーマンス_</th><th>最適な用途</th></tr>
</thead>
<tbody>
<tr><td>Nginx + lua-resty-openidc</td><td>中_</td><td>非常に高い</td><td>高トラフィック、カスタムロジック</td></tr>
<tr><td>Nginx + OAuth2 プロキシ</td><td>低___HTMLTAG_395__HTMLTAG_396___高</td><td>素早いセットアップ、簡単な認証</td></tr>
<tr><td>Kong</td><td>中</td><td>高</td><td>エンタープライズ、プラグインエコシステム</td></tr>
<tr><td>_Traefik_</td><td>低</td><td>高</td><td>クラウドネイティブ、Kubernetes_</td></tr>
</tbody>
</table>

<p><strong>_API ゲートウェイ + Keycloak 導入チェックリスト:</strong></p><table>
<thead>
<tr><th>_#</th><th>カテゴリ_</th><th>ステータス_</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>ゲートウェイでの JWT 検証 (JWKS キャッシュ)</td><td>☐</td></tr>
<tr><td>2</td><td>ユーザー ヘッダーをダウンストリーム サービスに伝播_</td><td>☐</td></tr>
<tr><td>3</td><td>内部通信用のサービス アカウント</td><td>☐</td></tr>
<tr><td>4</td><td>IP ごとおよびユーザーごとのレート制限_</td><td>☐</td></tr>
<tr><td>5</td><td>ゲートウェイでの CORS 構成</td><td>☐</td></tr>
<tr><td>6</td><td>ヘルスチェックエンドポイント (認証バイパス)</td><td>☐</td></tr>
<tr><td>7</td><td>ゲートウェイでのTLS終了</td><td>☐</td></tr>
<tr><td>8</td><td>ロギングと監視</td><td>☐</td></tr>
<tr><td>9</td><td>クライアント シークレット ローテーション戦略</td><td>☐</td></tr>
<tr><td>_10_</td><td>トークンの有効期限と更新の処理</td><td>☐</td></tr>
</tbody>
</table>

<p>次のシリーズでは、Keycloakクラスタリング、実稼働デプロイメント、パフォーマンス調整などの高度なトピックを掘り下げます。</p>