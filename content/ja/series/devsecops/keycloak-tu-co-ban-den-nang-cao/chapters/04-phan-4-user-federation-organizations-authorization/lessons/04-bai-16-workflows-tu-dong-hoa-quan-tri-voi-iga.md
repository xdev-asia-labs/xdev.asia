---
id: 019d8b30-b116-7001-c001-e0c5f8100116
title: 'レッスン 16: ワークフロー - IGA による管理の自動化'
slug: bai-16-workflows-tu-dong-hoa-quan-tri-voi-iga
description: Identity Governance and Administration (IGA) 用の Keycloak ワークフロー (プレビュー) を導入します。ワークフロー、ワークフロー定義、ワークフロー表現言語、ワークフローの管理、条件とステップの定義、Joiner-Mover-Leaver (JML) プロセス、自動オンボーディング/オフボーディング、アクセス レビュー、企業の一般的な使用例を理解します。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 16
section_title: 'パート 4: ユーザー フェデレーション、組織、および認可'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3397" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3397)"/>

  <!-- Decorations -->
  <g>
    <circle cx="870" cy="240" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="910" cy="120" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="190" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="950" cy="260" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="160" x2="1100" y2="240" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="190" x2="1050" y2="260" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="940.3108891324554,92.5 940.3108891324554,127.5 910,145 879.6891108675446,127.5 879.6891108675446,92.50000000000001 910,75" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — レッスン 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 16: ワークフロー - 管理の自動化__HTMLTAG_53___
      <tspan x="60" dy="42">IGA を使用</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">_Keycloak の基本から高度なもの__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: ユーザー フェデレーション、組織、および認可__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-iga-va-workflows-tong-quan"><strong>1. IGA とワークフロー — 概要</strong></h2>

<p><strong>アイデンティティ ガバナンスおよび管理 (IGA)</strong> は、ユーザーが組織に参加するとき (参加者)、役割を変更するとき (移動者)、退職するとき (退職者) までの、アイデンティティ ライフサイクル管理の分野です。 Keycloakワークフローは、これらのIGAプロセスの自動化を可能にする機能<strong>プレビュー</strong>です。</p>

<h3 id="11-tai-sao-can-workflows"><strong>1.1 ワークフローが必要な理由</strong></h3>

<table>
<thead>
<tr><th>問題_</th><th>ワークフローなし</th><th>はいワークフロー</th></tr>
</thead>
<tbody>
<tr><td><strong>新入社員のオンボーディング</strong></td><td>管理者は手動でアカウントを作成し、役割を割り当て、グループに追加する必要があります_</td><td>自動: アカウントを作成→部門ごとに役割を割り当て→グループを追加→ウェルカムメールを送信</td></tr>
<tr><td><strong>部門の異動_</strong></td><td>管理者は古い役割を手動で削除し、新しい役割を割り当てる必要があります__HTMLTAG_109___<td>部門の変更を自動的に検出→対応する役割/グループの応答を更新</td></tr>
<tr><td><strong>オフボーディング</strong></td><td>アクセス権の取り消しを忘れた → セキュリティリスク</td><td>アカウントを自動的に無効にする→セッションを取り消す→グループから削除</td></tr>
<tr><td><strong>アクセスレビュー</strong></td><td>定期的にレビューできない__HTMLTAG_129___<td>未使用の権限を自動的にチェックして報告</td></tr>
</tbody>
</table><h3 id="12-keycloak-workflows-la-gi"><strong>1.2 Keycloakワークフローとは</strong></h3>

<p>Keycloak ワークフローは、</p> を含む自動プロセスの定義を可能にする__HTMLTAG_140___イベント駆動型、条件ベース</strong> システムです。

<ul>
<li><strong>トリガー</strong>: ワークフローをトリガーするイベント (ユーザーの作成、属性の変更、ログイン イベントなど)</li>
<li><strong>条件</strong>: ワークフローを実行するために満たす必要がある条件</li>
<li><strong>手順</strong>: 条件が一致した場合に実行されるアクション (ロールの割り当て、グループへの追加、通知の送信...)</li>
</ul>

<h2 id="2-bat-workflows-preview"><strong>2.ワークフローを有効にする (プレビュー機能)</strong></h2>

<p>ワークフローは__HTMLTAG_162___プレビュー</strong>の機能であり、明示的に有効にする必要があります:</p>

___プレコード_0___

<p><strong>注:</strong> プレビュー機能はバージョン間で API が変更される場合があります。徹底的なテストを行わずに運用環境で使用しないでください。</p>

<h2 id="3-workflow-concepts"><strong>3.ワークフローの概念</strong></h2>

<h3 id="31-workflow-components"><strong>3.1 ワークフローコンポーネント</strong></h3>

___プレコード_1___

<h3 id="32-trigger-types"><strong>3.2 トリガーの種類</strong></h3>

<table>
<thead>
<tr><th>トリガー_</th><th>説明_</th><th>ユースケース_</th></tr>
</thead>
<tbody>
<tr><td><strong>USER_CREATED</strong></td><td>新しく作成されたユーザー</td><td>オンボーディング: 役割/グループの自動割り当て</td></tr>
<tr><td><strong>USER_UPDATED</strong></td><td>ユーザー属性の変更</td><td>移動者: 部門変更の検出</td></tr>
<tr><td><strong>USER_DELETED</strong></td><td>ユーザーが削除されました</td><td>クリーンアップ: 外部アクセスを取り消します</td></tr>
<tr><td><strong>USER_DISABLED</strong></td><td>ユーザー無効</td><td>オフボーディング: セッションの取り消し</td></tr>
<tr><td><strong>GROUP_MEMBERSHIP_CHANGED</strong></td><td>グループへのユーザーの追加/削除</td><td>関連する役割の自動割り当て</td></tr>
<tr><td><strong>ROLE_ASSIGNED</strong></td><td>ユーザー割り当ての役割</td><td>カスケード権限</td></tr>
<tr><td><strong>ROLE_REMOVED</strong></td><td>ユーザーが削除したロール</td><td>依存アクセスの取り消し</td></tr>
</tbody>
</table>

<h2 id="4-workflow-definitions"><strong>4.ワークフロー定義_</strong></h2><h3 id="41-cau-truc-workflow-definition"><strong>4.1 ワークフロー構造の定義</strong></h3>

___プレコード_2___

<h3 id="42-yaml-format"><strong>4.2 YAML 形式</strong></h3>

___プレコード_3___

<h2 id="5-workflow-expression-language"><strong>5.ワークフロー式言語_</strong></h2>

<p>ワークフローは式言語を使用して__HTMLTAG_282___動的条件を定義__HTMLTAG_283___および__HTMLTAG_284___ユーザー属性を参照__HTMLTAG_285___.</p>

<h3 id="51-variables"><strong>5.1 変数</strong></h3>

<table>
<thead>
<tr><th>変数</th><th>説明</th><th>例_</th></tr>
</thead>
<tbody>
<tr><td><code>user.username</code></td><td>ユーザーのユーザー名</td><td><code>john.doe</code></td></tr>
<tr><td><code>user.email</code></td><td>メールアドレス</td><td><code>john@example.com</code></td></tr>
<tr><td><code>user.firstName</code></td><td>名</td><td><code>John</code></td></tr>
<tr><td><code>user.lastName</code></td><td>姓</td><td><code>Doe</code></td></tr>
<tr><td><code>user.attributes.{name}</code></td><td>_カスタム属性</td><td><code>user.attributes.Department</code></td></tr>_
<tr><td><code>user.groups</code></td><td>グループパスのリスト_</td><td><code>["/Engineering", "/VPN-ユーザー"]</code></td></tr>
<tr><td><code>user.roles</code></td><td>割り当てられた役割のリスト_</td><td><code>[「従業員」、「開発者」]</code></td></tr>
<tr><td><code>event.type</code></td><td>イベントタイプ</td><td><code>USER_CREATED</code></td></tr>
<tr><td><code>event.time</code></td><td>イベントタイムスタンプ</td><td><code>2026-03-30T10:00:00Z</code></td></tr>
</tbody>
</table>

<h3 id="52-operators"><strong>_5.2 演算子</strong></h3><table>
<thead>
<tr><th>_演算子</th><th>説明_</th><th>例_</th></tr>
</thead>
<tbody>
<tr><td><code>_等しい_</code></td><td>_等しい比較_</td><td><code>user.attributes.Departmentが等しい「エンジニアリング」</code></td></tr>
<tr><td><code>not_equals_</code></td><td>等しくない_</td><td><code>user.attributes.status not_equals 「非アクティブ」</code></td></tr>
<tr><td><code>を含む</code></td><td>_値を含む</td><td><code>user.email には「@acme.com」が含まれます</code></td></tr>
<tr><td><code>で始まる</code></td><td>で始まる</td><td><code>user.usernameが「svc-」で始まる</code></td></tr>
<tr><td><code>末尾</code></td><td>末尾</td><td><code>user.email ends_with "@acme.com"</code></td></tr>_
<tr><td><code>_in_</code></td><td>_リスト</td><td><code>user.attributes.location ["HCM"、"HN", 「DN」]</code></td></tr>
<tr><td><code>存在します</code></td><td>属性が存在します</td><td><code>user.attributes.employeeId が存在します</code></td></tr>
<tr><td><code>not_exists</code></td><td>属性が存在しません</td><td><code>user.attributes.termination_date not_exists_</code></td></tr>
</tbody>
</table>

<h3 id="53-functions"><strong>5.3 関数</strong></h3>

___プレコード_4___

<h2 id="6-managing-workflows"><strong>_6.ワークフローの管理</strong></h2>

<h3 id="61-crud-operations"><strong>6.1 CRUD 操作</strong></h3>

___プレコード_5___

<h2 id="7-defining-conditions"><strong>7.条件の定義_</strong></h2>

<h3 id="71-user-attribute-conditions"><strong>_7.1 ユーザー属性条件</strong></h3>

___プレコード_6___

<h3 id="72-group-membership-conditions"><strong>7.2 グループメンバーシップ条件</strong></h3>

___プレコード_7___

<h3 id="73-time-based-conditions"><strong>_7.3 時間ベースの条件</strong></h3>

___プレコード_8___

<h3 id="74-event-based-conditions"><strong>7.4 イベントベースの条件</strong></h3>

___プレコード_9___

<h2 id="8-defining-steps"><strong>8.ステップの定義_</strong></h2>

<h3 id="81-assign-role"><strong>8.1 役割の割り当て</strong></h3>

___プレコード_10___<h3 id="82-remove-role"><strong>8.2 役割の削除</strong></h3>

___プレコード_11___

<h3 id="83-add-to-group"><strong>_8.3 グループに追加</strong></h3>

___プレコード_12___

<h3 id="84-remove-from-group"><strong>8.4 グループから削除</strong></h3>

___プレコード_13___

<h3 id="85-send-notification"><strong>_8.5 通知の送信</strong></h3>

___プレコード_14___

<h3 id="86-invoke-external-api"><strong>8.6 外部 API の呼び出し</strong></h3>

___プレコード_15___

<h3 id="87-set-user-attribute"><strong>8.7 ユーザー属性の設定</strong></h3>

___プレコード_16___

<h2 id="9-joiner-mover-leaver-jml"><strong>_9. Joiner-Mover-Leaver (JML) プロセス_</strong></h2>

<h3 id="91-joiner-onboarding"><strong>9.1 ジョイナー — 自動オンボーディング</strong></h3>

___プレコード_17___

<h3 id="92-mover-department-transfer"><strong>9.2 移動者 — 部門異動</strong></h3>

___プレコード_18___

<h3 id="93-leaver-offboarding"><strong>9.3 離脱 — 自動オフボーディング</strong></h3>

___プレコード_19___

<h2 id="10-access-review-workflows"><strong>10.レビュー ワークフローにアクセス</strong></h2>

<p>アクセス レビューにより、__HTMLTAG_612___は__HTMLTAG_613___を定期的にチェックして、ユーザーが現在の権限をまだ必要としているかどうかを確認できます:</p>

___プレコード_20___

<h2 id="11-common-enterprise-use-cases"><strong>11.一般的な企業の使用例_</strong></h2>

<h3 id="111-contractor-lifecycle-management"><strong>_11.1 請負業者のライフサイクル管理</strong></h3>

___プレコード_21___

<h3 id="112-auto-provisioning-from-ldap"><strong>11.2 LDAP 同期からの自動プロビジョニング</strong></h3>

___プレコード_22___

<h3 id="113-compliance-password-rotation-reminder"><strong>11.3 コンプライアンス — パスワードローテーションリマインダー</strong></h3>

___プレコード_23___

<h2 id="12-monitoring-va-troubleshooting"><strong>12.監視とトラブルシューティング</strong></h2>

<h3 id="121-workflow-execution-logs"><strong>12.1 ワークフロー実行ログ</strong></h3>

___プレコード_24___

<h3 id="122-common-issues"><strong>12.2 一般的な問題</strong></h3><table>
<thead>
<tr><th>問題_</th><th>原因_</th><th>_解決策_</th></tr>
</thead>
<tbody>
<tr><td>ワークフローがトリガーされていません</td><td>機能が有効になっていない、またはワークフローが無効になっています</td><td>__HTMLTAG_661___--features=workflows</code> および <code> が有効であることを確認してください: true</code></td></tr>
<tr><td>条件が一致しません</td><td>属性名または値が間違っています_</td><td>管理コンソールでユーザー属性を確認してください_</td></tr>
<tr><td>ステップが失敗しました</td><td>ロール/グループが存在しません_</td><td>ワークフローで参照する前にロール/グループを作成してください_</td></tr>
<tr><td>API 呼び出しが失敗しました</td><td>外部サービスが利用できません</td><td>ネットワーク接続を確認し、再試行ロジックを追加__HTMLTAG_689___</tr>
<tr><td>_電子メールが送信されていません</td><td>SMTP が設定されていません__HTMLTAG_695___<td>レルム設定→電子メール_</td></tr>
</tbody>
</table>

<h2 id="13-best-practices"><strong>_13.ベスト プラクティス</strong></h2>

<ul>
<li><strong>_簡単に始めよう</strong> — 最初に基本的な JML を実装し、次に複雑さを追加</li>
<li><strong>_運用前にワークフローを徹底的にテスト</strong> — これはプレビュー機能であり、バグがある可能性があります</li>
<li><strong>冪等ステップ</strong> — 副作用を引き起こすことなくステップを再実行できるようにします</li>
<li><strong>エラー処理</strong> — 外部 API の失敗または電子メールのバウンスを計画する</li>
<li><strong>監査証跡</strong> — ワークフローの実行を記録するための属性 (タイムスタンプ、ステータス)</li> を常に設定します
<li><strong>関心事項の分離</strong> — JML を個別のワークフロー (結合者、移動者、離脱者) に分離</li>
<li><strong>バージョン管理</strong> — ワークフロー定義を git にエクスポートし、CI/CD を使用してデプロイ</li>
<li><strong>実行ログの監視</strong> — 失敗したワークフロー実行のアラートを設定</li>
<li><strong>_段階的なロールアウト</strong> — 最初に小規模なユーザー グループに対してワークフローを有効にしてから、展開</li>
</ul>