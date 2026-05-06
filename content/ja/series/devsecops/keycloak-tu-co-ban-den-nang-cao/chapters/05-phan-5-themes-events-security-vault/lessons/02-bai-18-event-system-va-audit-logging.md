---
id: 019d8b30-b118-7001-c001-e0c5f8100118
title: 'レッスン 18: イベント システムと監査ログ'
slug: bai-18-event-system-va-audit-logging
description: イベントタイプ (ログインイベント、管理イベント)、イベントロギングの有効化、イベントリスナーの設定 (jboss-logging、電子メール)、イベントストア、イベント詳細、イベントフィルタリング、管理コンソールおよび REST API を介したイベントのクエリ、カスタムイベントリスナー SPI、一元化されたロギングのための ELK スタック / Grafana Loki の統合、SIEM 統合、監査コンプライアンス (SOC2、HIPAA)、アラート自動化。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 18
section_title: 'パート 5: テーマ、イベント、セキュリティ、および Vault'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1835" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1835)"/>

  <!-- Decorations -->
  <g>
    <circle cx="823" cy="99" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="1046" cy="122" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="769" cy="145" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="992" cy="168" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="191" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="229" x2="1100" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="259" x2="1050" y2="329" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="967.1051177665153,107 967.1051177665153,151 929,173 890.8948822334847,151 890.8948822334847,107.00000000000001 929,85" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — レッスン 18</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 18: イベント システムと監査ログ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak の基本から高度なもの</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: テーマ、イベント、セキュリティ、Vault__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="1-tong-quan-event-system"><strong>1.概要 イベント システム_</strong></h2>

<p>Keycloak は、システム内のすべてのアクティビティを監視するための包括的な <strong>イベント システム</strong> を提供します。ログイン、登録、管理設定の変更に至るすべてのアクションがイベントとして記録されます。</p>

<h3 id="11-hai-loai-events"><strong>1.1 2 種類のイベント</strong></h3>

<table>
<thead>
<tr><th>タイプ</th><th>説明_</th><th>例_</th></tr>
</thead>
<tbody>
<tr><td><strong>ログインイベント (ユーザーイベント)</strong></td><td>ユーザーに関連するアクション</td><td>LOGIN、REGISTER、LOGOUT、TOKEN_EXCHANGE</td></tr>
<tr><td><strong>管理イベント</strong></td><td>管理コンソール/APIによる構成変更</td><td>_ユーザーの作成、レルムの更新、クライアントの削除</td></tr>
</tbody>
</table>

<h3 id="12-login-event-types"><strong>1.2 ログイン イベント タイプ</strong></h3><table>
<thead>
<tr><th>イベントの種類_</th><th>説明_</th><th>いつ発生する</th></tr>
</thead>
<tbody>
<tr><td><code>LOGIN</code></td><td>ログイン成功</td><td>ユーザーは正しい認証情報を入力しました_</td></tr>
<tr><td><code>LOGIN_ERROR</code></td><td>_ログイン失敗_</td><td>虚偽のユーザー名/パスワード</td></tr>
<tr><td><code>REGISTER</code></td><td>新しいアカウントを登録</td><td>ユーザーがパブリックとしてアカウントを作成</td></tr>
<tr><td><code>REGISTER_ERROR</code></td><td>登録に失敗しました_</td><td>メールが重複し、検証が失敗しました</td></tr>
<tr><td><code>_LOGOUT</code></td><td>_ログアウト_</td><td>ユーザーのログアウトまたはセッションの期限切れ_</td></tr>
<tr><td><code>CODE_TO_TOKEN</code></td><td>認可コード→トークン交換</td><td>OIDC認可コードの流れ</td></tr>
<tr><td><code>CODE_TO_TOKEN_ERROR</code></td><td>_トークン交換に失敗しました</td><td>無効なコード、期限切れのコード</td></tr>
<tr><td><code>REFRESH_TOKEN</code></td><td>リフレッシュ アクセス トークン_</td><td>クライアントがリフレッシュ トークンを使用</td></tr>
<tr><td><code>REFRESH_TOKEN_ERROR</code></td><td>リフレッシュトークンが失敗しました</td><td>トークンが取り消されているか期限切れです</td></tr>
<tr><td><code>CLIENT_LOGIN</code></td><td>_クライアント認証</td><td>サービスアカウントログイン</td></tr>
<tr><td><code>INTROSPECT_TOKEN</code></td><td>トークンイントロスペクション</td><td>リソースサーバー検証トークン</td></tr>
<tr><td><code>UPDATE_PASSWORD</code></td><td>パスワードの変更_</td><td>ユーザーのパスワード変更</td></tr>
<tr><td><code>RESET_PASSWORD</code></td><td>パスワードをリセット_</td><td>メールリンク経由でユーザーをリセット</td></tr>
<tr><td><code>VERIFY_EMAIL</code></td><td>メール認証</td><td>ユーザーのクリック確認リンク</td></tr>
<tr><td><code>SEND_RESET_PASSWORD</code></td><td>パスワードリセットメールを送信</td><td>パスワードを忘れた場合のリクエスト</td></tr>
<tr><td><code>UPDATE_PROFILE</code></td><td>プロファイルを更新</td><td>ユーザーが個人情報カーネルを更新</td></tr>
<tr><td><code>REMOVE_TOTP</code></td><td>TOTP デバイスを削除</td><td>ユーザーが OTP 認証システムを削除</td></tr>
<tr><td><code>UPDATE_TOTP</code></td><td>TOTP 構成</td><td>ユーザー設定 OTP</td></tr>
<tr><td><code>GRANT_CONSENT</code></td><td>ユーザー付与権限の同意</td><td>OAuth2同意画面</td></tr>
<tr><td><code>TOKEN_EXCHANGE</code></td><td>トークン交換</td><td>クライアント間でトークンを交換</td></tr>
</tbody>
</table><h3 id="13-admin-event-operations"><strong>1.3 管理イベント操作</strong></h3>

<table>
<thead>
<tr><th>操作_</th><th>説明_</th><th>リソースタイプ_</th></tr>
</thead>
<tbody>
<tr><td><code>CREATE</code></td><td>新しいリソースの作成</td><td>USER、CLIENT、REALM、GROUP、ROLE...</td></tr>
<tr><td><code>UPDATE</code></td><td>リソースを更新</td><td>USER、CLIENT、REALM_SETTINGS...</td></tr>
<tr><td><code>DELETE</code></td><td>リソースを削除</td><td>ユーザー、クライアント、セッション...</td></tr>
<tr><td><code>ACTION</code></td><td>_アクションの実行</td><td>_RESET_PASSWORD、SEND_VERIFY_EMAIL...</td></tr>
</tbody>
</table>

<h2 id="2-bat-event-logging"><strong>2.イベント ログを有効にする_</strong></h2>

<h3 id="21-qua-admin-console"><strong>2.1 管理コンソール経由</strong></h3>

<ol>
<li>ログイン <strong>管理コンソール___HTMLTAG_398__HTMLTAG_399___
<li>レルムを選択 → <strong>レルム設定</strong> → タブ <strong>イベント</strong></li>
<li>構成__HTMLTAG_407___ユーザー イベント設定</strong>:
<ul>
<li><strong>イベントを保存</strong>: オン</li>
<li><strong>有効期限</strong>: 30 日 (コンプライアンス要件による)</li>
<li><strong>保存されたタイプ</strong>: 保存するイベント タイプを選択します (デフォルト: すべて)</li>
</ul>
</li>
<li>構成__HTMLTAG_425___管理イベント設定</strong>:
<ul>
<li><strong>イベントを保存</strong>: オン</li>
<li><strong>表現を含める</strong>: オン (リクエスト/レスポンス本文を保存)</li>
</ul>
</li>
<li><strong>_イベント リスナー__HTMLTAG_440___: 必要なリスナーを追加__HTMLTAG_441___
</ol>

<h3 id="22-qua-rest-api"><strong>2.2 REST API経由</strong></h3>

___プレコード_0___

<h2 id="3-event-listeners"><strong>3.イベント リスナー_</strong></h2>

<p>イベント リスナーは、イベントが発生したときに処理します。 Keycloak には次のリスナーが利用可能です:</p>

<h3 id="31-jboss-logging-listener"><strong>3.1 jboss-logging リスナー</strong></h3>

<p>イベントをKeycloakサーバーログに記録します(デフォルトで有効):</p>

___プレコード_1___

<h3 id="32-email-listener"><strong>3.2 電子メール リスナー</strong></h3>

<p>重要なイベントがあるときにユーザーに電子メールを送信します (例: 新しいデバイスからのログイン):</p>

___プレコード_2___

<h2 id="4-event-details-va-event-store"><strong>4.イベントの詳細とイベント ストア</strong></h2><h3 id="41-cau-truc-login-event"><strong>_4.1 ログイン イベントの構造</strong></h3>

___プレコード_3___

<h3 id="42-cau-truc-admin-event"><strong>_4.2 管理イベント構造</strong></h3>

___プレコード_4___

<h3 id="43-event-store-database"><strong>4.3 イベント ストア — データベース</strong></h3>

<p>イベントはKeycloakのデータベースに保存されます:</p>

<table>
<thead>
<tr><th>表</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td><code>EVENT_ENTITY</code></td><td>ログインイベント</td></tr>
<tr><td><code>ADMIN_EVENT_ENTITY</code></td><td>管理イベント_</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>注:</strong> デフォルトでは、イベント ストアは Keycloak DB に保存されます。イベントの数が多い場合は、カスタム イベント リスナーを使用してイベントを外部システムに送信し、組み込みストアの有効期限を短く設定する必要があります。</p>
</blockquote>

<h2 id="5-event-filtering-va-truy-van"><strong>5.イベントのフィルタリングとクエリ</strong></h2>

<h3 id="51-qua-admin-console"><strong>_5.1 管理コンソール経由</strong></h3>

<ol>
<li>__HTMLTAG_527___イベント</strong> → タブ__HTMLTAG_529___ユーザー イベント</strong> または <strong>管理イベント___HTMLTAG_532__HTMLTAG_533___ に移動します
<li>イベントを次の方法でフィルタリングします。
<ul>
<li><strong>イベント タイプ</strong>: LOGIN、LOGIN_ERROR、REGISTER...</li>
<li><strong>クライアント</strong>: 特定のクライアントを選択</li>
<li><strong>ユーザー</strong>: ユーザー ID</li> で検索します
<li><strong>日付範囲</strong>: 開始日/終了日</li>
<li><strong>IP アドレス</strong>: IP によるフィルター</li>
</ul>
</li>
</ol>

<h3 id="52-qua-rest-api-login-events"><strong>5.2 REST API 経由 — ログイン イベント</strong></h3>

___プレコード_5___

<h3 id="53-qua-rest-api-admin-events"><strong>5.3 REST API 経由 — 管理イベント</strong></h3>

___プレコード_6___

<h2 id="6-custom-event-listener-spi"><strong>6.カスタム イベント リスナー SPI</strong></h2>

<p>Keycloak を使用すると、__HTMLTAG_572___サービスプロバイダーインターフェイス (SPI)</strong>.</p> を介してカスタムイベントリスナーを作成できます。

<h3 id="61-tao-maven-project"><strong>6.1 Maven プロジェクトの作成</strong></h3>

___プレコード_7___

<h3 id="62-implement-eventlistenerprovider"><strong>_6.2 EventListenerProvider の実装</strong></h3>

___プレコード_8___

<h3 id="63-implement-eventlistenerproviderfactory"><strong>6.3 EventListenerProviderFactory の実装</strong></h3>

___プレコード_9___

<h3 id="64-dang-ky-spi"><strong>6.4 SPI の登録</strong></h3>

___プレコード_10___

<h3 id="65-deploy-va-kich-hoat"><strong>_6.5 導入とアクティブ化</strong></h3>

___プレコード_11___

<h2 id="7-keycloak-json-logging"><strong>7. Keycloak JSON ロギング</strong></h2>

<p>集中ログと統合するには、JSON ログを出力するように Keycloak を設定します:</p>___プレコード_12___

<h3 id="71-json-log-output-mau"><strong>_7.1 JSON ログ出力サンプル</strong></h3>

___プレコード_13___

<h3 id="72-cau-hinh-log-levels"><strong>7.2 ログレベルの構成</strong></h3>

___プレコード_14___

<h2 id="8-tich-hop-elk-stack"><strong>_8. ELK スタックの統合</strong></h2>

<p>Keycloak ログを ELK スタック (Elasticsearch、Logstash、Kibana) に送信して一元的に分析します。</p>

<h3 id="81-kien-truc-tong-quan"><strong>8.1 一般的なアーキテクチャ</strong></h3>

___プレコード_15___

<h3 id="82-filebeat-configuration"><strong>_8.2 Filebeat 構成</strong></h3>

___プレコード_16___

<h3 id="83-logstash-pipeline"><strong>8.3 Logstash パイプライン</strong></h3>

___プレコード_17___

<h3 id="84-kibana-dashboard"><strong>8.4 Kibana ダッシュボード</strong></h3>

<p>監視する Kibana ダッシュボードを作成する:</p>

<ul>
<li><strong>ログインの成功/失敗率</strong> — 時系列の棒グラフ</li>
<li><strong>_上位のログイン エラー</strong> — エラー タイプ別の円グラフ</li>
<li><strong>地理的位置によるログイン</strong> — 地図の視覚化</li>
<li><strong>IP 別ログイン失敗</strong> — ブルート フォース検出テーブル</li>
<li><strong>ユーザー登録傾向</strong> — 日別の折れ線グラフ</li>
<li><strong>管理操作監査</strong> — 詳細を含むデータ テーブル</li>
</ul>

<h2 id="9-tich-hop-grafana-loki"><strong>9. Grafana Loki の統合</strong></h2>

<p>_Grafana Loki は ELK より軽量なログ集約ソリューションであり、Kubernetes 環境に適しています。</p>

<h3 id="91-promtail-configuration"><strong>9.1 Promtail 構成</strong></h3>

___プレコード_18___

<h3 id="92-grafana-dashboard-queries"><strong>9.2 Grafana ダッシュボード クエリ</strong></h3>

___プレコード_19___

<h2 id="10-siem-integration"><strong>10. SIEM 統合</strong></h2>

<p>Keycloak イベントをセキュリティ情報およびイベント管理 (SIEM) システムと統合します。</p>

<h3 id="101-splunk-integration"><strong>10.1 Splunk 統合</strong></h3>

___プレコード_20___

<h3 id="102-siem-use-cases"><strong>10.2 SIEM の使用例</strong></h3><table>
<thead>
<tr><th>_ユースケース</th><th>イベントパターン</th><th>アクション</th></tr>
</thead>
<tbody>
<tr><td><strong>_総当たり検出_</strong></td><td>同じ IP からの複数の LOGIN_ERROR_</td><td>アラート + IP ブロック</td></tr>
<tr><td><strong>アカウント乗っ取り</strong></td><td>通常とは異なる地域IPからのログイン</td><td>アラート + MFAが必要</td></tr>
<tr><td><strong>権限昇格</strong></td><td>管理者ロールadminの割り当て_</td><td>アラート+レビュー_</td></tr>
<tr><td><strong>データ漏洩</strong></td><td>多数の異常なトークン要求</td><td>アラート+セッションの取り消し</td></tr>
<tr><td><strong>不審な登録</strong></td><td>同じ IP からの複数の登録_</td><td>アラート + CAPTCHA</td></tr>
</tbody>
</table>

<h2 id="11-audit-compliance"><strong>11.監査コンプライアンス</strong></h2>

<h3 id="111-soc2-requirements"><strong>11.1 SOC2 要件</strong></h3>

<table>
<thead>
<tr><th>_SOC2 コントロール</th><th>Keycloak の実装</th></tr>
</thead>
<tbody>
<tr><td><strong>CC6.1</strong> — 論理アクセスセキュリティ</td><td>LOGIN、LOGIN_ERROR、PASSWORD変更のイベントログ</td></tr>
<tr><td><strong>CC6.2</strong> — ユーザー認証_</td><td>MFA イベント、登録イベント_</td></tr>
<tr><td><strong>CC6.3</strong> — アクセス承認_</td><td>ロール/権限変更の管理イベント_</td></tr>
<tr><td><strong>CC7.2</strong> — セキュリティ監視</td><td>ログイン失敗時のリアルタイム警告</td></tr>
<tr><td><strong>CC8.1</strong> — 変更管理</td><td>表現を伴う管理イベント</td></tr>
</tbody>
</table>

<h3 id="112-hipaa-requirements"><strong>_11.2 HIPAA 要件</strong></h3><table>
<thead>
<tr><th>HIPAA コントロール</th><th>Keycloak の実装</th></tr>
</thead>
<tbody>
<tr><td><strong>§164.312(b)</strong> — 監査制御_</td><td>すべてのイベント タイプ、表現のある管理イベントを有効にする_</td></tr>
<tr><td><strong>§164.312(d)</strong> — 個人認証_</td><td>認証試行のイベントログ_</td></tr>
<tr><td><strong>§164.308(a)(5)</strong> — セキュリティ意識_</td><td>不審なアクティビティの電子メール通知_</td></tr>
</tbody>
</table>

<h3 id="113-retention-policy"><strong>_11.3 保持ポリシー</strong></h3>

___プレコード_21___

<h2 id="12-alert-automation"><strong>12.アラートの自動化</strong></h2>

<h3 id="121-prometheus-alerting"><strong>_12.1 Prometheus アラート</strong></h3>

<p>Keycloak は <code>/metrics</code> エンドポイント経由でメトリクスを公開します (メトリクスを有効にする必要があります):</p>

___プレコード_22___

___プレコード_23___

<h3 id="122-alertmanager-routing"><strong>12.2 アラートマネージャーのルーティング</strong></h3>

___プレコード_24___

<h2 id="13-best-practices"><strong>13.ベスト プラクティス</strong></h2>

<ul>
<li><strong>ログイン イベントと管理イベントの両方をオンにします</strong> — システム内のアクティビティを見逃さないでください。</li>
<li><strong>イベントを外部システムに送信</strong> — 組み込みのイベント ストアだけに依存しないでください。長期保存には ELK/Loki/SIEM を使用してください。</li>
<li><strong>管理イベント表現を有効にする</strong> — 完全な監査のために管理操作のリクエスト/応答本文を保存します。</li>
<li><strong>_適切な保持期間を設定</strong> — コンプライアンス要件に準拠します (SOC2: 1 年、HIPAA: 6 年)。</li>
<li><strong>ログイン失敗率を監視</strong> — ブルートフォース検出とアカウント乗っ取りのアラートを設定します。</li>
<li><strong>イベントを関連付ける</strong> — Keycloakイベントとアプリケーションログを組み合わせて全体像を把握します。</li>
<li><strong>イベント ログの保護</strong> - ログ データには PII が含まれており、保存中および転送中に暗号化が必要であり、アクセスは制限されています。</li>
</ul>