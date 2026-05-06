---
id: 019d8b30-b114-7001-c001-e0c5f8100114
title: 'レッスン 14: 組織 - マルチテナンシーと CIAM'
slug: bai-14-organizations-multi-tenancy-va-ciam
description: 組織機能の有効化と構成、組織、組織ドメイン、組織属性の作成/管理、メンバーの管理 (管理対象、非管理対象)、招待管理 (送信、追跡、再送信、削除)、ID プロバイダーと組織の関連付け、メンバーの認証 (ID 優先ログイン)、組織クレームのトークンへのマッピング、および実際の B2B/B2B2C ユースケース。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 14
section_title: 'パート 4: ユーザー フェデレーション、組織、および認可'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4862" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4862)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1057" cy="201" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1014" cy="258" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="971" cy="55" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="928" cy="112" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="885" cy="169" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="211" x2="1100" y2="291" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="241" x2="1050" y2="311" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="933.5166604983954,98 933.5166604983954,124 911,137 888.4833395016046,124 888.4833395016046,98 911,85" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — レッスン 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 14: 組織 - マルチテナントと</tspan>
      <tspan x="60" dy="42">CIAM</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">_Keycloak の基本から高度なもの__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: ユーザー フェデレーション、組織、および認可__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-organizations-tong-quan"><strong>1.組織 — 概要</strong></h2>

<p>Keycloak組織は、単一レルムで<strong>マルチテナンシー</strong>管理を可能にする機能です。組織 (テナント) ごとに複数のレルムを作成する代わりに、レルム内に <strong>Organizations</strong> を作成して、ユーザーをグループ化し、ドメインを管理し、組織ごとにアクセスを制御できます。</p>

<p>これは、__HTMLTAG_78___B2B</strong> (企業間) および <strong>B2B2C</strong> (企業間企業対消費者) プラットフォームにとって重要な機能であり、__HTMLTAG_82___CIAM</strong> (顧客 ID とアクセス) とも呼ばれます。管理).</p>

<h3 id="11-use-cases"><strong>1.1 使用例</strong></h3>

<table>
<thead>
<tr><th>シナリオ</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td><strong>SaaS マルチテナント</strong></td><td>各顧客企業は組織であり、ユーザーはその組織に属します_</td></tr>
<tr><td><strong>B2B ポータル</strong></td><td>パートナー/ベンダーには独自の組織があり、パートナーの従業員は組織経由でポータルにアクセス_</td></tr>
<tr><td><strong>子会社のある企業</strong></td><td>この企業には多数の子会社があり、各子会社は組織です_</td></tr>
<tr><td><strong>教育プラットフォーム</strong></td><td>各学校/教育機関は組織であり、教師/生徒はメンバー_</td></tr>
</tbody>
</table><h2 id="2-bat-organizations-feature"><strong>2.組織機能を有効にする_</strong></h2>

<p>_Organizations は Keycloak 25 以降で利用できる機能です。有効にするには:</p>

<h3 id="21-bat-tren-realm"><strong>2.1 レルムで有効にする</strong></h3>

___プレコード_0___

<h3 id="22-kiem-tra-trang-thai"><strong>_2.2 ステータスの確認</strong></h3>

___プレコード_1___

<h2 id="3-tao-va-quan-ly-organizations"><strong>3.組織の作成と管理_</strong></h2>

<h3 id="31-tao-organization-qua-admin-console"><strong>_3.1 管理コンソール経由で組織を作成</strong></h3>

<p>__HTMLTAG_156___管理コンソール → 組織 → 組織の作成</strong>:</p> に移動します

<table>
<thead>
<tr><th>フィールド_</th><th>説明_</th><th>例_</th></tr>
</thead>
<tbody>
<tr><td><strong>名前</strong></td><td>組織名 (必須)</td><td><code>Acme Corporation</code></td></tr>
<tr><td><strong>エイリアス</strong></td><td>エイリアスの一意の自己生成名</td><td><code>acme-corporation</code></td></tr>
<tr><td><strong>説明</strong></td><td>組織の説明_</td><td><code>Acme Corp - 企業顧客</code></td></tr>
<tr><td><strong>リダイレクトURL</strong></td><td>メンバー投稿入力後のURLリダイレクト</td><td><code>https://app.acme.com</code></td></tr>
</tbody>
</table>

<h3 id="32-tao-organization-qua-rest-api"><strong>3.2 REST API 経由で組織を作成</strong></h3>

___プレコード_2___

<h2 id="4-organization-domains"><strong>4.組織ドメイン_</strong></h2>

<p>組織ドメインを使用すると、__HTMLTAG_229___電子メール ドメインに基づいてユーザーを組織</strong>に自動的に関連付けることができます。ユーザーが登録ドメインに属する電子メールを使用して登録またはログインすると、Keycloak はユーザーを対応する組織に自動的にアタッチできます。</p>

___プレコード_3___

<p><strong>ドメインの状態:</strong></p>

<table>
<thead>
<tr><th>状態</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td><strong>検証済み</strong></td><td>検証済みドメイン — この電子メール ドメインを持つユーザーは自動的に組織への参加資格が与えられます</td></tr>
<tr><td><strong>未確認</strong></td><td>未確認ドメイン — 照合にのみ使用され、管理者の承認が必要_</td></tr>
</tbody>
</table><p><strong>重要な注意:</strong></p>
<ul>
<li>ドメインは__HTMLTAG_270___単一の組織__HTMLTAG_271__HTMLTAG_272___にのみ属します
<li>ドメイン検証は、組織がそのドメインを実際に所有していることを確認するのに役立ちます</li>
<li>サブドメインの一致: <code>acme.com</code> は <code>user@acme.com</code> と一致しますが、__HTMLTAG_280___ は</strong> とは一致しません<code>user@sub.acme.com</code></li>
</ul>

<h2 id="5-organization-attributes"><strong>5.組織の属性_</strong></h2>

<p>カスタム属性を使用すると、組織の追加のメタデータを保存できます:</p>

___プレコード_4___

<p>属性は次の場所で使用できます:</p>
<ul>
<li><strong>トークン要求</strong> — 組織メタデータをアクセス/ID トークンに追加</li>
<li><strong>認可ポリシー</strong> — 属性に基づく認可</li>
<li><strong>_カスタム ロジック__HTMLTAG_305___ — アプリケーション内のビジネス ロジックを処理</li>
</ul>

<h2 id="6-quan-ly-members"><strong>6.メンバーの管理_</strong></h2>

<h3 id="61-managed-vs-unmanaged-members"><strong>6.1 管理メンバーと非管理メンバー</strong></h3>

<table>
<thead>
<tr><th>_タイプ_</th><th>説明_</th><th>例_</th></tr>
</thead>
<tbody>
<tr><td><strong>管理対象</strong></td><td>ユーザーは組織によって完全に管理されます — ライフサイクルは組織に関連付けられています</td><td>従業員: 組織を離れると、アカウントは無効になります</td></tr>
<tr><td><strong>非管理</strong></td><td>_無料ユーザー、組織に「参加」のみ — アカウントは独立して存在_</td><td>_フリーランサー、請負業者: 多くの組織に所属可能</td></tr>
</tbody>
</table>

<h3 id="62-them-existing-users-vao-organization"><strong>6.2 既存のユーザーを組織に追加</strong></h3>

___プレコード_5___

<h3 id="63-member-roles"><strong>6.3 メンバーの役割</strong></h3>

<p>組織のメンバーには、組織のコンテキストで役割を割り当てることができます:</p>

<table>
<thead>
<tr><th>役割</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td><strong>member</strong></td><td>デフォルトの役割 — 標準アクセス</td></tr>
<tr><td><strong>管理者</strong></td><td>組織管理者 — メンバーと設定を管理できます_</td></tr>
</tbody>
</table>

<h2 id="7-invitation-management"><strong>_7.招待状の管理</strong></h2><p>Keycloak組織は、__HTMLTAG_393___ユーザーを招待メールで組織に参加するよう</strong>をサポートします。</p>

<h3 id="71-gui-invitation"><strong>7.1 招待状を送信</strong></h3>

___プレコード_6___

<h3 id="72-invitation-states"><strong>7.2 招待状</strong></h3>

<table>
<thead>
<tr><th>状態</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td><strong>保留中</strong></td><td>招待は送信されましたが、受け入れられません__HTMLTAG_420___</tr>
<tr><td><strong>期限切れ</strong></td><td>構成可能な招待の有効期限</td></tr>
</tbody>
</table>

<h3 id="73-quan-ly-invitations"><strong>7.3 招待状の管理</strong></h3>

___プレコード_7___

<p><strong>_メールテンプレート:</strong> Keycloakは、__HTMLTAG_439___レルム設定→メール→テンプレート</strong>でカスタマイズ可能なテンプレートを使用してメールを送信します。デフォルトのテンプレートには、ユーザーが招待を受け入れてアカウントを作成するためのリンクが含まれています (アカウントを持っていない場合)。</p>

<h2 id="8-lien-ket-identity-providers"><strong>8. ID プロバイダーを組織に関連付ける</strong></h2>

<p>各組織は独自の <strong>アイデンティティ プロバイダ</strong> を持つことができ、メンバーが組織の IdP 経由でログインできるようになります (たとえば、Acme Corp は Google Workspace を使用し、Beta Inc は Okta を使用します)。</p>

<h3 id="81-lien-ket-idp-voi-organization"><strong>_8.1 IdP を組織に関連付ける</strong></h3>

___プレコード_8___

<h3 id="82-cach-hoat-dong"><strong>8.2 仕組み__HTMLTAG_456___</h3>

<ol>
<li>ユーザーがログイン ページに電子メールを入力します (ID 優先ログイン)</li>
<li>_Keycloak が電子メール ドメインを決定 → 対応する組織を見つける</li>
<li>組織にリンクされた IdP がある場合 → ユーザーをその組織の IdP にリダイレクト</li>
<li>ユーザーは組織の IdP で認証</li>
<li>_Keycloak が応答を受信し、ユーザーを自動的に組織にアタッチします</li>
</ol>

<h2 id="9-identity-first-login"><strong>9. ID 優先ログイン</strong></h2>

<p>ID 優先ログインは、ユーザー <strong> が最初にメールを入力</strong>、次に Keycloak が組織のメンバーシップに基づいて適切な認証方法を決定するフローです。</p>

<h3 id="91-cau-hinh-identity-first-login"><strong>9.1 ID 優先ログインの構成</strong></h3>

<p>組織が有効になっている場合、Keycloakはブラウザ認証用にフロー__HTMLTAG_483___"organization"</strong>を自動的に作成します。このフローは次のように機能します:</p>

___プレコード_9___

<h3 id="92-cau-hinh-existing-flow"><strong>_9.2 組織の既存のフローの構成</strong></h3>

___プレコード_10___

<h2 id="10-mapping-organization-claims"><strong>10.組織のクレームをトークンにマッピング</strong></h2>

<p>Keycloak は、トークンおよび ID トークン__HTMLTAG_496___ にアクセスするために__HTMLTAG_495___組織情報を追加できるため、アプリケーションはユーザーがどの組織に属しているかを知ることができます。</p><h3 id="101-organization-membership-mapper"><strong>10.1 組織メンバーシップ マッパー</strong></h3>

<p>組織機能が有効になっている場合、Keycloakは__HTMLTAG_503___organization</code>クレームを自動的に追加します。申し立ての形式:</p>

___プレコード_11___

<h3 id="102-cau-hinh-mapper-tuy-chinh"><strong>_10.2 カスタム マッパー構成</strong></h3>

<p>__HTMLTAG_511___Organization Membership Protocol Mapper</strong> をクライアント スコープに追加して、クレームをカスタマイズできます:</p>

___プレコード_12___

<h3 id="103-su-dung-claims-trong-application"><strong>10.3 アプリケーションでのクレームの使用</strong></h3>

___プレコード_13___

<h2 id="11-b2b-va-b2b2c-use-cases"><strong>11. B2B および B2B2C の使用例</strong></h2>

<h3 id="111-b2b-partner-portal"><strong>11.1 B2B パートナー ポータル</strong></h3>

___プレコード_14___

<h3 id="112-b2b2c-saas-platform"><strong>11.2 B2B2C SaaS プラットフォーム</strong></h3>

___プレコード_15___

<h2 id="12-best-practices"><strong>12.ベスト プラクティス</strong></h2>

<ul>
<li><strong>マルチレルムの代わりに組織を使用</strong> — 管理オーバーヘッドを削減し、構成を共有</li>
<li><strong>ドメインの確認</strong> - ユーザーを自動割り当てる前に、組織が実際にドメインを所有していることを確認します</li>
<li><strong>_管理/非管理の区別</strong> — ライフサイクル管理が必要な従業員向けに管理、外部ユーザー向けに非管理__HTMLTAG_546___
<li><strong>ID 優先ログインの使用</strong> — 異なる IdP を持つ複数の組織がある場合の UX の向上</li>
<li><strong>_セキュリティ招待リンク</strong> — 適切な有効期限を設定し、保留中の招待を監視</li>
<li><strong>承認のための組織属性</strong> — 属性を使用して、プラン、層、地域ごとに権限を分散します</li>
<li><strong>メンバー数を監視</strong> — 組織が割り当てを超過した場合にアラートを設定</li>
</ul>