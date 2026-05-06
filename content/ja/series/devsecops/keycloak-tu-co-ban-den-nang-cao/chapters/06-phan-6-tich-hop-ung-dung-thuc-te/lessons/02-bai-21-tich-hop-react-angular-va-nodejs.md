---
id: 019d8b30-b121-7001-c001-e0c5f8100121
title: 'レッスン 21: React、Angular、Node.js の統合'
slug: bai-21-tich-hop-react-angular-va-nodejs
description: Keycloakとフロントエンド（Reactはkeycloak-jsまたはreact-oidc-contextを使用し、Angularはangular-auth-oidc-clientを使用）、認証状態管理、サイレントトークン更新、保護されたルート、ロールベースのUIレンダリングを統合します。バックエンド Node.js/Express と、passport-keycloak-connect または jose JWT 検証、ミドルウェア認証、API ゲートウェイ パターン。
duration_minutes: 220
is_free: true
video_url: null
sort_order: 21
section_title: 'パート 6: 実際のアプリケーションの統合'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7896" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7896)"/>

  <!-- Decorations -->
  <g>
    <circle cx="620" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="210" x2="1100" y2="290" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="240" x2="1050" y2="310" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="981.650635094611,147.5 981.650635094611,172.5 960,185 938.349364905389,172.5 938.349364905389,147.5 960,135" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — レッスン 21</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 21: React、Angular、Node.js の統合</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak の基本から高度なもの</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 実用的なアプリケーションの統合__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="1-tong-quan-tich-hop-frontend-va-nodejs"><strong>1.フロントエンドと Node.js の統合の概要</strong></h2>

<p>Keycloakをフロントエンド・アプリケーションと統合する場合、__HTMLTAG_70___PKCE</strong>(コード交換用の証明キー)による認可コード・フローを使用します。これは、シングル・ページ・アプリケーション(SPA)およびパブリック・クライアントにとって最も標準的で安全なフローです。</p>

___プレコード_0___

<table>
<thead>
<tr><th>プラットフォーム</th><th>ライブラリ</th><th>アプローチ</th></tr>
</thead>
<tbody>
<tr><td>React</td><td><code>react-oidc-context</code> (推奨) / <code>keycloak-js</code></td><td>OIDC クライアント / Keycloakアダプター_</td></tr>
<tr><td>Angular_</td><td><code>angular-auth-oidc-client</code></td><td>OIDC クライアント</td></tr>
<tr><td>Node.js</td><td><code>jose</code> / <code>passport-keycloak-connect</code></td><td>JWT 検証 / パスポート戦略_</td></tr>
</tbody>
</table>

<h2 id="2-react-keycloak-integration"><strong>2. React + Keycloak の統合</strong></h2>

<h3 id="21-approach-1-react-oidc-context-recommended"><strong>2.1 Approach 1: react-oidc-context (Recommended)</strong></h3>

<p><code>react-oidc-context</code> は、__HTMLTAG_132___oidc-client-ts</code> に基づく最新の OIDC ライブラリであり、新しい React アプリケーションに推奨されます:</p>

___プレコード_1___

<h4>2.1.1 AuthProvider のセットアップ</h4>

___プレコード_2___

<h4>2.1.2 useAuth フックの使用法</h4>

___プレコード_3___<h4>2.1.3 アクセス トークンを使用した API 呼び出し</h4>

___プレコード_4___

<h4>2.1.4 保護されたルート__HTMLTAG_142___

___プレコード_5___

___プレコード_6___

<h4>2.1.5 ロールベースの UI レンダリング</h4>

___プレコード_7___

<h3 id="22-approach-2-keycloak-js-adapter"><strong>2.2 アプローチ 2: keycloak-js アダプター</strong></h3>

<p><code>keycloak-js</code> は Keycloak の公式アダプターです。まだ正常に動作しますが、__HTMLTAG_152___react-oidc-context</code> は、より OIDC 標準であるため、新しいプロジェクトでは優先されます:</p>

___プレコード_8___

___プレコード_9___

___プレコード_10___

___プレコード_11___

<h3 id="23-keycloak-client-configuration-cho-spa"><strong>2.3 SPAのKeycloakクライアント構成</strong></h3>

<p>Keycloak で React/Angular SPA 用のクライアントを作成する:</p>

___プレコード_12___

<h2 id="3-angular-keycloak-integration"><strong>3. Angular + Keycloak の統合</strong></h2>

<h3 id="31-cai-dat-angular-auth-oidc-client"><strong>3.1 angular-auth-oidc-client</strong></h3> をインストールする

___プレコード_13___

<h3 id="32-oidc-module-configuration"><strong>3.2 OIDC モジュール構成</strong></h3>

___プレコード_14___

<h3 id="33-auth-service"><strong>3.3 認証サービス</strong></h3>

___プレコード_15___

<h3 id="34-auth-guard"><strong>3.4 認証ガード</strong></h3>

___プレコード_16___

<h3 id="35-http-interceptor"><strong>_3.5 HTTP インターセプタ</strong></h3>

___プレコード_17___

<h3 id="36-routing-configuration"><strong>3.6 ルーティング構成</strong></h3>

___プレコード_18___

<h3 id="37-component-su-dung-auth"><strong>_3.7 コンポーネントは認証を使用します</strong></h3>

___プレコード_19___

<h2 id="4-nodejs-express-keycloak-integration"><strong>4. Node.js/Express + Keycloak の統合</strong></h2>

<h3 id="41-approach-1-jose-jwt-verification-recommended"><strong>4.1 アプローチ 1: jose JWT 検証 (推奨)</strong></h3>

<p>ライブラリ <code>jose</code> を使用して JWT トークンを検証します。軽量なアプローチで、フレームワーク固有のアダプターに依存しません:</p>

___プレコード_20___

___プレコード_21___

<h3 id="42-express-application"><strong>4.2 エクスプレス アプリケーション</strong></h3>

___プレコード_22___

<h3 id="43-approach-2-passport-keycloak-connect"><strong>_4.3 アプローチ 2: パスポート-キークローク-接続</strong></h3>

<p>プロジェクトで Passport.js を使用している場合は、__HTMLTAG_214___passport-keycloak-connect</code>:</p> を使用できます。

___プレコード_23___

___プレコード_24___

<h2 id="5-silent-token-refresh"><strong>5.サイレント トークン リフレッシュ</strong></h2>

<p>トークンの更新は、シームレスなユーザー エクスペリエンスを確保するために重要です。主に 2 つのメソッドがあります:</p>

<h3 id="51-refresh-token-rotation"><strong>5.1 リフレッシュ トークンのローテーション</strong></h3>

___プレコード_25___

<h3 id="52-react-oidc-context-auto-refresh"><strong>5.2 反応-oidc-context 自動更新</strong></h3>

___プレコード_26___

<h3 id="53-silent-check-sso-html"><strong>_5.3 サイレント チェック SSO HTML</strong></h3>

<p>サイレント SSO チェック用のファイル <code>public/silent-check-sso.html</code> を作成します:</p>

___プレコード_27___

<h2 id="6-keycloak-client-settings-reference"><strong>6. Keycloakクライアント設定リファレンス</strong></h2><p>アプリケーションの種類については、Keycloakクライアント構成を参照してください:</p>

<table>
<thead>
<tr><th>設定</th><th>SPA (React/Angular)_</th><th>Node.js バックエンド_</th></tr>
</thead>
<tbody>
<tr><td>クライアント プロトコル</td><td>openid-connect</td><td>openid-connect_</td></tr>
<tr><td>アクセス タイプ</td><td><code>public</code></td><td><code>機密</code></td></tr>
<tr><td>標準フロー</td><td>ON</td><td>ON (Web アプリの場合)</td></tr>
<tr><td>直接アクセス</td><td>OFF</td><td>_OFF</td></tr>
<tr><td>サービス アカウント</td><td>OFF</td><td>ON (必要な場合)</td></tr>
<tr><td>PKCE_</td><td><code>S256_</code></td><td>N/A</td></tr>
<tr><td>_有効なリダイレクト URI</td><td><code>http://localhost:3000/*</code></td><td><code>http://localhost:8081/*</code></td></tr>
<tr><td>ウェブオリジン</td><td><code>http://localhost:3000</code></td><td><code>_+</code></td></tr>
</tbody>
</table>

<h2 id="7-tong-ket"><strong>7.概要_</strong></h2><table>
<thead>
<tr><th>プラットフォーム_</th><th>ライブラリ</th><th>利点_</th><th>メモ_</th></tr>
</thead>
<tbody>
<tr><td>React</td><td><code>react-oidc-context_</code></td><td>OIDC 標準、フック API、自動更新</td><td>リダイレクト URI を構成する必要がある正しく_</td></tr>
<tr><td>React</td><td><code>_keycloak-js</code></td><td>公式アダプター、フル API</td><td>密結合Keycloak</td></tr>
<tr><td>Angular_</td><td><code>angular-auth-oidc-client</code></td><td>Angular ネイティブ、ガード、インターセプター</td><td>Config はより複雑です反応</td></tr>
<tr><td>_Node.js</td><td><code>_jose</code></td><td>軽量、依存関係なし、標準</td><td>ミドルウェアの実装が必要あなた自身</td></tr>
<tr><td>Node.js</td><td><code>passport-keycloak-connect</code></td><td>Passport.js 統合エコシステム</td><td>セッションが必要管理_</td></tr>
</tbody>
</table>

<p>次の記事では、KeycloakをAPIゲートウェイ（Nginx、Kong、Traefik）およびマイクロサービスアーキテクチャと統合する方法を学びます。</p>