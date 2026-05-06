---
id: 019d8b30-b115-7001-c001-e0c5f8100115
title: 'レッスン 15: 認可サービス - 詳細な認可'
slug: bai-15-authorization-services-phan-quyen-chi-tiet
description: '認可サービスの詳細: リソース サーバー、リソース、スコープ、アクセス許可、ポリシー (ロールベース、ユーザーベース、グループベース、クライアントベース、時間ベース、JavaScript、集約)。 UMA 2.0 サポート、Permission API、Policy Enforcer、プッシュされたクレーム、リソース属性、クレーム情報ポイント、評価 API、および Spring Boot / Node.js アプリケーションへの認可の統合。'
duration_minutes: 240
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 4: ユーザー フェデレーション、組織、および認可'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8946" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8946)"/>

  <!-- Decorations -->
  <g>
    <circle cx="789" cy="77" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="978" cy="266" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="667" cy="195" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="856" cy="124" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="53" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="147" x2="1100" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="177" x2="1050" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1083.3730669589463,226 1083.3730669589463,268 1047,289 1010.6269330410536,268 1010.6269330410536,226 1047,205" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: 認可サービス - 部門</tspan>
      <tspan x="60" dy="42">詳細な権限</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">_Keycloak の基本から高度なもの__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: ユーザー フェデレーション、組織、および認可__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-authorization-services-tong-quan"><strong>1.認可サービス — 概要</strong></h2>

<p>Keycloak認可サービスは__HTMLTAG_72___きめ細かい認可</strong>を提供し、ロールだけに依存するのではなくリソースおよびスコープレベルでのアクセス制御を可能にします。このシステムは__HTMLTAG_74___UMA 2.0</strong> (ユーザー管理アクセス) 標準に準拠しており、複数のポリシー タイプをサポートしています。</p>

<h3 id="11-cac-khai-niem-chinh"><strong>1.1 主な概念</strong></h3><table>
<thead>
<tr><th>コンセプト</th><th>説明_</th><th>例_</th></tr>
</thead>
<tbody>
<tr><td><strong>リソースサーバー</strong></td><td>アプリケーションはリソースを保護する必要がある(Keycloakクライアント)</td><td>バックエンドAPIサーバー_</td></tr>
<tr><td><strong>リソース</strong></td><td>保護するオブジェクト_</td><td>ドキュメント、API エンドポイント、ページ</td></tr>
<tr><td><strong>スコープ</strong></td><td>リソースに対して実行できるアクション_</td><td><code>_表示</code>、__HTMLTAG_123___編集</code>、 <code>削除</code>、__HTMLTAG_127___公開</code></td></tr>
<tr><td><strong>権限</strong></td><td>リソース/スコープとポリシーの結合_</td><td>「ドキュメントを表示できるのは誰ですか?」</td></tr>
<tr><td><strong>ポリシー</strong></td><td>アクセスを許可するには条件を満たす必要があります_</td><td>「ユーザーには役割「編集者」が必要です」</td></tr>
</tbody>
</table>

<h3 id="12-authorization-flow"><strong>1.2 認証フロー</strong></h3>

___プレコード_0___

<h2 id="2-bat-authorization-services"><strong>2.認証サービスを有効にする</strong></h2>

<p>__HTMLTAG_162___クライアント レベル</strong> (レルムではない):</p> で有効になっている認可サービス

<h3 id="21-qua-admin-console"><strong>2.1 管理コンソール経由</strong></h3>

___プレコード_1___

<h3 id="22-qua-kcadm"><strong>2.2 kcadm.sh経由</strong></h3>

___プレコード_2___

<p>有効にすると、クライアント設定にタブ__HTMLTAG_174___認可</strong>が表示され、サブタブとして設定、リソース、スコープ、ポリシー、権限、評価が表示されます。</p>

<h2 id="3-resources"><strong>3.リソース_</strong></h2>

<p>リソースは__HTMLTAG_182___保護するオブジェクト</strong>を表します。各リソースには、URI、タイプ、スコープ、属性を含めることができます。</p>

<h3 id="31-tao-resources"><strong>3.1 リソースの作成</strong></h3>

___プレコード_3___

<h3 id="32-resource-attributes"><strong>3.2 リソース属性</strong></h3>

<p>属性を使用すると、ポリシーで使用できるメタデータをリソースに追加できます:</p>

___プレコード_4___

<h2 id="4-scopes"><strong>4.スコープ_</strong></h2>

<p>スコープは、リソースに対して実行できる__HTMLTAG_200___アクション__HTMLTAG_201___を定義します:</p>

___プレコード_5___

<p>一般的なスコープ パターン:</p><table>
<thead>
<tr><th>パターン</th><th>スコープ</th></tr>
</thead>
<tbody>
<tr><td><strong>_CRUD</strong></td><td><code>create</code>、__HTMLTAG_223___read</code>、__HTMLTAG_225___update</code>、 <code>削除</code></td></tr>
<tr><td><strong>コンテンツ管理</strong></td><td><code>表示</code>、__HTMLTAG_239___編集</code>、__HTMLTAG_241___公開</code>、 <code>アーカイブ</code></td></tr>
<tr><td><strong>API アクセス</strong></td><td><code>read</code>、__HTMLTAG_255___write</code>、 <code>管理者</code></td></tr>
<tr><td><strong>ファイル操作</strong></td><td><code>download</code>、__HTMLTAG_269___upload</code>、__HTMLTAG_271___share</code>、 <code>削除</code></td></tr>
</tbody>
</table>

<h2 id="5-policies"><strong>5.ポリシー</strong></h2>

<p>ポリシーは、アクセスを許可または拒否することを決定する__HTMLTAG_284___条件</strong>です。 Keycloakは多くのタイプのポリシーをサポートしています:</p>

<h3 id="51-role-based-policy"><strong>5.1 役割ベースのポリシー</strong></h3>

___プレコード_6___

<h3 id="52-user-based-policy"><strong>_5.2 ユーザーベースのポリシー</strong></h3>

___プレコード_7___

<h3 id="53-group-based-policy"><strong>5.3 グループベースのポリシー</strong></h3>

___プレコード_8___

<h3 id="54-client-based-policy"><strong>5.4 クライアントベースのポリシー</strong></h3>

___プレコード_9___

<h3 id="55-time-based-policy"><strong>_5.5 時間ベースのポリシー</strong></h3>

___プレコード_10___

<h3 id="56-javascript-policy"><strong>5.6 JavaScript ポリシー</strong></h3>

<p><strong>_注:</strong> JavaScript ポリシーは、__HTMLTAG_314___--features=scripts</code> または JAR のアップロードを通じて有効にする必要があります。</p>

___プレコード_11___

<p>JavaScript ポリシーを JAR としてデプロイします:</p>

___プレコード_12___

<h3 id="57-aggregated-policy"><strong>5.7 集約ポリシー</strong></h3>

<p>意思決定戦略を使用して複数のポリシーを 1 つのポリシーに結合します:</p>

___プレコード_13___

<h2 id="6-decision-strategies"><strong>_6.意思決定戦略</strong></h2><table>
<thead>
<tr><th>_戦略_</th><th>説明_</th><th>いつ使用するか_</th></tr>
</thead>
<tbody>
<tr><td><strong>全会一致</strong></td><td>すべてのポリシーを許可する必要があります</td><td>厳格 — すべての条件が満たされる必要があります</td></tr>
<tr><td><strong>肯定</strong></td><td>少なくとも 1 つのポリシーを許可</td><td>柔軟 — 満たす必要がある条件は 1 つだけ</td></tr>
<tr><td><strong>コンセンサス</strong></td><td>許可番号 > 拒否</td><td>投票 - 過半数が定義</td></tr>
</tbody>
</table>

<h2 id="7-permissions"><strong>_7.権限_</strong></h2>

<p>権限は、__HTMLTAG_378___リソース/スコープとポリシー</strong>を組み合わせて、認可ルールを作成します。</p>

<h3 id="71-resource-based-permission"><strong>_7.1 リソースベースの権限</strong></h3>

___プレコード_14___

<h3 id="72-scope-based-permission"><strong>7.2 スコープベースの権限</strong></h3>

___プレコード_15___

<h2 id="8-uma-20"><strong>8. UMA 2.0</strong></h2>

<p>ユーザー管理アクセス (UMA) 2.0 を使用すると、__HTMLTAG_394___リソース所有者はリソースへの</strong> アクセスを管理できます。ユーザーは、管理者の介入なしに他のユーザーとリソースを共有できます。</p>

<h3 id="81-bat-uma"><strong>8.1 UMA を有効にする</strong></h3>

___プレコード_16___

<h3 id="82-uma-grant-flow"><strong>8.2 UMA 助成金フロー</strong></h3>

___プレコード_17___

<h2 id="9-permission-api"><strong>_9.権限 API_</strong></h2>

<p>Permission API を使用すると、UMA フローを使用せずに__HTMLTAG_410___プログラムで権限を確認できます</strong>:</p>

___プレコード_18___

<h2 id="10-pushed-claims"><strong>10.プッシュされたクレーム_</strong></h2>

<p>プッシュされた要求により、クライアント__HTMLTAG_418___は承認をリクエストするときに追加のコンテキスト情報</strong>を送信できるようになり、ポリシーが意思決定を行うためのより多くのデータを取得できるようになります:</p>

___プレコード_19___

<h2 id="11-claim-information-points"><strong>11.情報ポイントの請求</strong></h2>

<p>クレーム情報ポイントを使用すると、__HTMLTAG_426___複数のソースからクレームを自動的に収集__HTMLTAG_427___ (HTTP リクエスト、外部サービス) してポリシーで使用できます:</p>

___プレコード_20___

<h2 id="12-evaluation-api"><strong>12.評価 API</strong></h2>

<p>Keycloak 管理コンソールには、デプロイ前に権限をテストするための <strong>評価ツール</strong> が用意されています。

<h3 id="121-su-dung-evaluation-tool"><strong>12.1 評価ツールの使用</strong></h3>

___プレコード_21___

<h3 id="122-evaluation-qua-api"><strong>12.2 API による評価</strong></h3>

___プレコード_22___

<h2 id="13-policy-enforcer"><strong>13.ポリシー執行者</strong></h2><p>Policy Enforcer は、認可ポリシーを自動的に適用するためにアプリケーションに統合された <strong>Java ライブラリ</strong> です:</p>

<h3 id="131-spring-boot-integration"><strong>13.1 Spring Boot 統合</strong></h3>

___プレコード_23___

___プレコード_24___

<h3 id="132-keycloak-json-configuration"><strong>13.2 keycloak.json 構成</strong></h3>

___プレコード_25___

<h3 id="133-nodejs-integration"><strong>_13.3 Node.js 統合</strong></h3>

___プレコード_26___

<h2 id="14-kcadm-quan-ly-authorization"><strong>14. kcadm.sh — 承認管理</strong></h2>

___プレコード_27___

<h2 id="15-best-practices"><strong>15.ベスト プラクティス</strong></h2>

<ul>
<li><strong>粗粒度→粒度の細かい粒度から開始</strong> — 最初にロールベースを使用し、必要に応じてリソースベースを追加__HTMLTAG_477___
<li><strong>リソース タイプを使用する__HTMLTAG_480___ — 個別のリソースごとに権限を作成するのではなく、同じタイプのリソースをグループ化します</li>
<li><strong>評価 API を使用したテスト</strong> — 運用環境にデプロイする前に必ず権限をテストしてください</li>
<li><strong>意思決定戦略には注意してください</strong> — <code>UNANIMOUS</code> はより安全ですが、より制限的です <code>AFFIRMATIVE</code></li>
<li><strong>_JavaScript ポリシーを制限</strong> — 組み込みポリシー タイプを優先し、本当に必要な場合にのみ JavaScript を使用します</li>
<li><strong>権限評価のパフォーマンスを監視</strong> — ネストされたポリシーが多すぎると速度が低下する可能性があります</li>
<li><strong>認可設定のエクスポート/インポート</strong> — kcadm.sh を使用して認可設定のバージョンを管理</li>
<li><strong>_ビジネス ロジックから権限チェックを分離</strong> — ミドルウェア/インターセプター レベルで強制</li>
</ul>