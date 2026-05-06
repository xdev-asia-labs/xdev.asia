---
id: 019d8b30-b105-7001-c001-e0c5f8100105
title: 'レッスン 5: 役割、権限、およびアクセス制御'
slug: bai-5-roles-permissions-va-access-control
description: レルム ロール、クライアント ロール、複合ロール、ユーザーとグループのロール マッピング、デフォルト ロール、サービス アカウント ロール。詳細な管理権限 V2、レルム管理委任、リソース固有の権限、ポリシー、権限評価。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 1: Keycloak プラットフォーム'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<div style="text-align: center; margin: 2rem 0;">
<img src="/storage/uploads/2026/03/keycloak-rbac-permissions-2026.png" alt="Keycloak RBAC & Fine-grained Permissions" style="max-width: 800px; width: 100%; border-radius: 12px;" />
<p><em>Keycloak の RBAC モデルと詳細な管理者権限 V2</em></p>
</div>

<h2 id="1-tong-quan-roles"><strong>1. Keycloakのロールの概要</strong></h2>

<p>Keycloak のロールは、アクセスを分散するための主要なメカニズムです。アプリケーションは、ユーザーのロールを (トークン内のクレームを通じて) チェックして、ユーザーに何が許可されているかを決定します。 Keycloakは、__HTMLTAG_12___Realmロール</strong>および__HTMLTAG_14___Clientロール</strong>.</p>の2種類のロールをサポートしています。

<h3 id="realm-roles-vs-client-roles"><strong>レルム ロールとクライアント ロール</strong></h3>
<table>
<thead>
<tr><th>特徴_</th><th>レルムの役割</th><th>クライアントの役割</th></tr>
</thead>
<tbody>
<tr><td>範囲_</td><td>レルム全体_</td><td>特定のクライアントのみ_</td></tr>
<tr><td>ユースケース</td><td>一般的な役割 (管理者、ユーザー、マネージャー)</td><td>アプリケーション固有の役割 (編集者、閲覧者)</td></tr>
<tr><td>名前空間</td><td>レルム内で一意</td><td>クライアント内で一意</td></tr>
<tr><td>トークン__HTMLTAG_59___<td><code>realm_access.roles</code></td><td><code>resource_access.{client}.roles</code></td></tr>
</tbody>
</table>

<h2 id="2-realm-roles"><strong>2.レルムの役割</strong></h2>

<h3 id="realm-roles-mac-dinh"><strong>2.1 デフォルトのレルムの役割</strong></h3>
<p>Keycloak はいくつかのレルム ロールを作成します:</p>
<ul>
<li><p><strong>default-roles-{realm}</strong> — 複合ロールには新規ユーザーのデフォルトのロールが含まれています__HTMLTAG_86___</li>
<li><p><strong>offline_access</strong> — オフライン トークン (長期更新トークン) を取得できます</p></li>
<li><p><strong>uma_authorization</strong> — UMA (ユーザー管理アクセス)</p></li> の使用を許可します。
</ul>

<h3 id="tao-realm-role"><strong>2.2 レルムロールの作成</strong></h3>

<p><strong>管理コンソール経由:</strong></p>
<ol>
<li><p>サイドバーの__HTMLTAG_112___レルムロール</strong>をクリック</p></li>
<li><p>_クリック__HTMLTAG_118___役割の作成</strong></p></li>
<li><p>入力:</p>
<ul>
<li><strong>役割</strong>: <code>管理者</code></li>
<li><strong>説明</strong>: <code>完全な管理者アクセス</code></li>
</ul>
</li>
<li><p>クリック__HTMLTAG_142___保存</strong></p></li>
</ol><p><strong>管理 CLI 経由:</strong></p>
___プレコード_0___

<p><strong>_REST API 経由:</strong></p>
___プレコード_1___

<h2 id="3-client-roles"><strong>3.クライアントの役割_</strong></h2>

<p>クライアント ロールは、アプリケーションに独自のロールが必要な場合に使用されます。たとえば、CMS アプリケーションには、アプリケーションのロール HR.</p> とは異なるロール <code>editor</code>、__HTMLTAG_162___author</code>、__HTMLTAG_164___reviewer</code> があります。

<h3 id="tao-client-role"><strong>3.1 クライアント ロールの作成</strong></h3>

<p><strong>_管理コンソール経由:</strong></p>
<ol>
<li><p>__<strong>クライアント</strong> に移動し、クライアントを選択します (例: <code>my-web-app</code>)</p></li>
<li><p>タブ__HTMLTAG_186___役割</strong></p></li>
<li><p>_クリック__HTMLTAG_192___役割の作成</strong></p></li>
<li><p>_名前と説明を入力</p></li>
</ol>

<p><strong>CLI 経由:</strong></p>
___プレコード_2___

<p><strong>REST API 経由:</strong></p>
___プレコード_3___

<h3 id="client-role-trong-token"><strong>_3.2 トークンにおけるクライアントの役割</strong></h3>
<p>クライアント ロールは、クレーム <code>resource_access</code>:</p> のアクセス トークンに表示されます。
___プレコード_4___

<h2 id="4-composite-roles"><strong>4.複合ロール_</strong></h2>

<p>複合ロールは、1 つ以上の子ロール (レルム ロールおよび/またはクライアント ロール) を含むロールです。ユーザーに複合ロールが割り当てられると、そのユーザーは自動的にすべての子のロールを持ちます。</p>

<h3 id="tao-composite-role"><strong>4.1 複合ロールの作成</strong></h3>

<p><strong>管理コンソール経由:</strong></p>
<ol>
<li><p>_<strong>レルム ロール</strong> に移動し、ロールを選択します (例: <code>admin</code>)</p></li>
<li><p>タブ <strong>アクション</strong> → <strong>関連する役割を追加_</strong></p></li>
<li><p>追加するロールを選択してください (レルム ロールおよび/またはクライアント ロール)</p></li>
<li><p>クリック__HTMLTAG_254___割り当て</strong></p></li>
</ol>

<p><strong>CLI 経由:</strong></p>
___プレコード_5___

<p><strong>階層の例:</strong></p>
___プレコード_6___<p><strong>注:</strong> ユーザーにロール <code>admin</code> が割り当てられると、そのユーザーは階層内で <strong>すべて</strong> のロールを持つことになります: <code>admin</code>、 <code>マネージャー</code>、__HTMLTAG_278___ユーザー</code>、__HTMLTAG_280___ビューア</code>、__HTMLTAG_282___エディタ</code>、__HTMLTAG_284___レビューア</code>、 <code>コンテンツ管理者</code>、__HTMLTAG_288___アカウント管理__HTMLTAG_289___.</p>

<h3 id="xem-composite-roles"><strong>_4.2 複合ロールの表示</strong></h3>
___プレコード_7___

<h2 id="5-role-mappings"><strong>5.役割のマッピング</strong></h2>

<h3 id="gan-role-cho-user"><strong>5.1 ユーザーに役割を割り当てる</strong></h3>

<p><strong>_管理コンソール経由:</strong></p>
<ol>
<li><p>__HTMLTAG_310___ユーザー</strong>に移動 → ユーザー</p></li>
<li><p>タブ__HTMLTAG_316___ロールマッピング</strong></p></li>
<li><p>_クリック__HTMLTAG_322___役割の割り当て</strong></p></li>
<li><p>レルム ロールを選択するか、クライアントでフィルタしてクライアント ロールを選択します</p></li>
<li><p>クリック__HTMLTAG_332___割り当て</strong></p></li>
</ol>

<p><strong>CLI 経由:</strong></p>
___プレコード_8___

<p><strong>_REST API 経由:</strong></p>
___プレコード_9___

<h3 id="gan-role-cho-group"><strong>5.2 グループへの役割の割り当て</strong></h3>
<p>グループにロールを割り当てると、グループ (およびサブグループ) の <strong>すべてのメンバー</strong> がそのロールを継承します:</p>

___プレコード_10___

<h3 id="effective-roles"><strong>5.3 有効な役割</strong></h3>
<p>ユーザーの有効な役割 = 直接割り当てられた役割 + グループから継承された役割 + 複合役割からの役割:</p>
___プレコード_11___

<h2 id="6-default-roles"><strong>6.デフォルトの役割_</strong></h2>

<p>アカウントの作成時または登録時に、すべての新規ユーザーにデフォルトのロールが自動的に割り当てられます。</p>

<h3 id="cau-hinh-default-roles"><strong>6.1 デフォルトの役割の構成</strong></h3>

<p><strong>管理コンソール経由:</strong></p>
<ol>
<li><p><strong>レルムの役割</strong></p></li> に移動します
<li><p>ロールを検索 <strong>default-roles-{realm}</strong> (例: <code>default-roles-my-company</code>)___HTMLTAG_386__HTMLTAG_387___
<li><p>_役割 → タブをクリック <strong>アクション</strong> → <strong>関連する役割を追加_</strong></p></li>
<li><p>デフォルトとして設定する役割を選択</p></li>
</ol>

<p><strong>CLI 経由:</strong></p>
___プレコード_12___<p>その後、新しく作成されたすべてのユーザーには自動的にロールが割り当てられます: <code>user</code>、__HTMLTAG_408___offline_access</code>、__HTMLTAG_410___my-web-app/viewer</code>.</p>

<h2 id="7-service-account-roles"><strong>_7.サービス アカウントの役割_</strong></h2>

<p>サービス アカウントはサービス間の通信 (マシン間) に使用されます。ユーザーの操作は必要ありません。</p>

<h3 id="bat-service-account"><strong>_7.1 クライアントのサービス アカウントを有効にする</strong></h3>
<ol>
<li><p><strong>クライアント</strong>に移動 → クライアントを選択または作成</p></li>
<li><p>タブ__HTMLTAG_432___設定</strong>:</p>
<ul>
<li><strong>クライアント認証</strong>: オン</li>
<li><strong>サービス アカウントの役割</strong>: オン</li>
<li><strong>認可</strong>: オフ (認可サービスが必要な場合を除く)</li>
</ul>
</li>
<li><p>_クリック__HTMLTAG_452___保存</strong></p></li>
</ol>

<h3 id="gan-role-cho-service-account"><strong>7.2 サービス アカウントへの役割の割り当て</strong></h3>
___プレコード_13___

<h3 id="su-dung-service-account"><strong>_7.3 サービス アカウントの使用</strong></h3>
___プレコード_14___

<h2 id="8-fine-grained-admin-permissions"><strong>8.詳細な管理者権限 V2</strong></h2>

<p>きめ細かい管理権限 V2 (Keycloak 26 以降) では、生のレルム管理クライアント ロールを使用するだけでなく、管理コンソールで誰がどのリソースを管理できるかをきめ細かく制御できます。</p>

<h3 id="bat-fine-grained-permissions"><strong>_8.1 詳細な管理者権限を有効にする</strong></h3>
<ol>
<li><p><strong>レルム設定</strong> → <strong>一般_</strong></p></li>
<li><p>__HTMLTAG_486___管理者権限</strong> を検索 → <strong>きめ細かい管理者権限 (V2)</strong></p></li> を有効にします
<li><p>Keycloakはレルムに権限管理リソースを作成します</p></li>
</ol>

<p><strong>注:</strong> これはKeycloak 26.xのプレビュー機能です。運用環境では、有効にする前に慎重に評価する必要があります。</p>

<h3 id="resource-permissions"><strong>_8.2 リソース権限</strong></h3>
<p>有効にすると、リソースの権限を作成できます:</p><p><strong>ユーザー権限:</strong></p>
<table>
<thead>
<tr><th>許可_</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>表示</td><td>ユーザーのリストと詳細を表示</td></tr>
<tr><td>管理</td><td>ユーザーの作成、編集、削除</td></tr>
<tr><td>map-roles</td><td>ユーザーへの役割の割り当て/削除</td></tr>
<tr><td>グループメンバーシップの管理</td><td>グループへのユーザーの追加/削除_</td></tr>
<tr><td>偽装</td><td>ユーザーになりすます</td></tr>
</tbody>
</table>

<p><strong>グループ権限:</strong></p>
<table>
<thead>
<tr><th>許可_</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>表示</td><td>グループの表示</td></tr>
<tr><td>管理</td><td>グループの作成、編集、削除</td></tr>
<tr><td>メンバーの表示</td><td>グループのメンバーの表示</td></tr>
<tr><td>メンバーの管理</td><td>メンバーの追加/削除</td></tr>
<tr><td>メンバーシップの管理</td><td>グループメンバーシップの管理</td></tr>
</tbody>
</table>

<p><strong>クライアント権限:</strong></p>
<table>
<thead>
<tr><th>許可_</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>表示</td><td>クライアントの表示</td></tr>
<tr><td>管理</td><td>クライアントの作成、編集、削除</td></tr>
<tr><td>構成</td><td>クライアント設定の変更</td></tr>
<tr><td>map-roles</td><td>クライアントの役割の作成/割り当て</td></tr>
</tbody>
</table>

<p><strong>役割権限:</strong></p>
<table>
<thead>
<tr><th>許可_</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>表示</td><td>役割の表示</td></tr>
<tr><td>管理</td><td>ロールの作成、編集、削除</td></tr>
<tr><td>map-role</td><td>ユーザー/グループへの役割の割り当て</td></tr>
</tbody>
</table><h3 id="tao-permission"><strong>8.3 権限の作成</strong></h3>
<ol>
<li><p><strong>レルム設定</strong> → <strong>管理者権限_</strong></p></li> に移動します
<li><p>_リソース タイプの選択 (ユーザー、グループ、クライアント、ロール)</p></li>
<li><p>_設定する権限をクリックします (例: ユーザーの_<strong>管理</strong>)</p></li>
<li><p>__HTMLTAG_698___ポリシー</strong>を追加して、この権限を持つユーザーを決定</p></li>
</ol>

<h3 id="policies"><strong>8.4 ポリシー</strong></h3>
<p>ポリシーは、アクセス許可を付与するための条件を定義します。 Keycloak V2 は次のポリシーをサポートしています:</p>

<p><strong>_ロールベースのポリシー:</strong></p>
___プレコード_15___

<p><strong>ユーザーベースのポリシー:</strong></p>
___プレコード_16___

<p><strong>グループベースのポリシー:</strong></p>
___プレコード_17___

<p><strong>_クライアントベースのポリシー:</strong></p>
___プレコード_18___

<h3 id="vi-du-thuc-te"><strong>8.5 実践例: 人事管理者はユーザーのみを管理</strong></h3>
<p>要件: ロール <code>hr-admin</code> を持つユーザーは、ユーザーの表示と管理のみが許可され、クライアントやレルム設定の管理は許可されません。</p>

<ol>
<li><p><strong>レルムロールの作成</strong> <code>hr-admin</code>:</p>
___プレコード_19___
</li>
<li><p><strong>きめ細かい管理者権限 V2 を有効にする</strong></p></li>
<li><p><strong>__HTMLTAG_752___hr-admin</code> のロールベースのポリシー</strong> を作成します:</p>
<ul>
<li>「管理者権限」→「ポリシー」タブに移動</li>
<li>ポリシーの作成 → ロールベース</li>
<li>名前: 「人事管理ポリシー」</li>
<li>役割を選択: <code>hr-admin</code></li>
</ul>
</li>
<li><p><strong>ユーザー権限にポリシーを割り当てる</strong>:</p>
<ul>
<li>ユーザー → 権限 <strong>view</strong> → ポリシー「人事管理ポリシー」</li> を追加
<li>ユーザー → 権限 <strong>管理</strong> → ポリシー「人事管理ポリシー」</li> を追加
</ul>
</li>
<li><p><strong>ユーザーに役割を割り当てる</strong>:</p>
___プレコード_20___
</li>
</ol>

<p>ユーザー__HTMLTAG_792___hr-manager</code>は管理コンソールにログインし、メニュー__HTMLTAG_794___ユーザー</strong>.</p>のみを表示できるようになりました。<h3 id="permission-evaluation"><strong>8.6 権限の評価</strong></h3>
<p>「評価」タブを使用して権限をテストできます:</p>
<ol>
<li><p>__<strong>管理者権限</strong> → <strong>評価</strong></p></li>
<li><p>テストするユーザーまたはクライアントを選択</p></li>
<li><p>_リソースの種類と権限を選択</p></li>
<li><p><strong>評価</strong> をクリックして結果 (許可または拒否)</p></li>
</ol>

<h2 id="9-dedicated-admin-consoles"><strong>9.専用レルム管理コンソール</strong></h2>

<p>Keycloak ではレルムごとに個別の管理者アカウントを作成できます。マスター レルムにアクセスする必要はありません:</p>

<h3 id="tao-realm-admin"><strong>9.1 レルム管理者の作成</strong></h3>
___プレコード_21___<h3 id="realm-management-roles"><strong>9.2 レルム管理クライアントの役割</strong></h3>
<p>クライアント <code>realm-management</code> には、管理者権限を制御するために利用可能なロールがあります:</p>
<table>
<thead>
<tr><th>役割</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>realm-admin</td><td>レルムの完全な管理者アクセス</td></tr>
<tr><td>ユーザーの管理</td><td>ユーザーの管理</td></tr>
<tr><td>ユーザーの表示</td><td>ユーザーの表示</td></tr>
<tr><td>クライアントの管理</td><td>クライアントの管理</td></tr>
<tr><td>クライアントの表示</td><td>クライアントの表示</td></tr>
<tr><td>レルムの管理</td><td>レルム設定の管理</td></tr>
<tr><td>view-realm</td><td>レルム設定の表示</td></tr>
<tr><td>アイデンティティ プロバイダの管理</td><td>アイデンティティ プロバイダの管理</td></tr>
<tr><td>イベントの管理</td><td>イベントの管理</td></tr>
<tr><td>_manage-authorization</td><td>認可の管理</td></tr>
<tr><td>なりすまし_</td><td>ユーザーになりすます</td></tr>
<tr><td>_クエリユーザー</td><td>検索ユーザー</td></tr>
<tr><td>クエリグループ</td><td>検索グループ</td></tr>
<tr><td>クエリクライアント_</td><td>検索クライアント</td></tr>
<tr><td>クエリレルム</td><td>検索レルム</td></tr>
</tbody>
</table>

<p><strong>例: ユーザーとグループのみを管理する制限付き管理者を作成します:</strong></p>
___プレコード_22___

<h2 id="10-roles-trong-ung-dung"><strong>10.アプリでのロールの使用_</strong></h2>

<h3 id="kiem-tra-role-tu-token"><strong>10.1 アクセス トークンからの役割の確認</strong></h3>
<p>役割を含むデコードされたアクセス トークン:</p>
___プレコード_23___

<h3 id="spring-boot-example"><strong>_10.2 Spring Boot の例</strong></h3>
___プレコード_24___

<h3 id="nodejs-example"><strong>10.3 Node.js の例 (Express)</strong></h3>
___プレコード_25___

<h2 id="11-thuc-hanh"><strong>11.演習_</strong></h2><ol>
<li><p><strong>レルムロールの作成</strong>: <code>スーパー管理者</code>、__HTMLTAG_980___マネージャー</code>、__HTMLTAG_982___スタッフ</code>、 <code>ビューア</code></p></li>
<li><p><strong>クライアント ロールの作成</strong>、クライアント <code>my-web-app</code>: <code>content-editor__HTMLTAG_995___、__HTMLTAG_996___content-reviewer</code>、 <code>コンテンツ発行者</code></p></li>
<li><p><strong>複合ロールの作成</strong>:</p>
<ul>
<li><code>スーパー管理者</code> には次が含まれます: <code>マネージャー</code> + すべてのクライアント ロール</li>
<li><code>マネージャー</code> には次のものが含まれます: <code>スタッフ</code> + <code>コンテンツレビューア</code></li>
<li><code>スタッフ</code> には次が含まれます: <code>ビューア</code> + <code>コンテンツエディタ</code></li>
</ul>
</li>
<li><p><strong>グループへの役割の割り当て</strong>:</p>
<ul>
<li>グループ <code>エンジニアリング</code>: レルムロール <code>スタッフ</code></li>
<li>グループ <code>エンジニアリング/バックエンド</code>: クライアントの役割__HTMLTAG_1047___コンテンツエディタ</code></li>
</ul>
</li>
<li><p><strong>きめ細かい管理者権限 V2</strong> を有効にして、</p> を作成します。
<ul>
<li>__HTMLTAG_1059___hr-admin</code></li> のロールベースのポリシー
<li>ユーザーの表示/管理権限にポリシーを割り当てる</li>
<li>役割を持つユーザーでテスト <code>hr-admin</code></li>
</ul>
</li>
<li><p><strong>クライアント <code>my-backend-service</code> のサービス アカウント</strong> をロール <code>manage-users__HTMLTAG_1077___ で作成します。 <code>view-users</code> とクライアント資格情報の付与</p></li> を使用してテストします
</ol>

<h2 id="12-tong-ket"><strong>12.概要_</strong></h2><p>このレッスンでは、</p> を学習しました。
<ul>
<li><p>__HTMLTAG_1092___レルム ロール</strong> と <strong>クライアント ロール</strong></p></li> を区別する
<li><p>__HTMLTAG_1100___複合ロール</strong>階層を使用して作成__HTMLTAG_1102__HTMLTAG_1103___
<li><p><strong>ユーザーおよびグループのロール マッピング_</strong> (直接およびレガシー)_</p></li>
<li><p>構成__HTMLTAG_1112___新規ユーザーのデフォルトの役割</strong>__HTMLTAG_1114___</li>
<li><p>マシン間通信に__HTMLTAG_1118___サービス アカウント ロール</strong>を使用</p></li>
<li><p><strong>きめ細かい管理者権限 V2</strong> ポリシー (ロールベース、ユーザーベース、グループベース、クライアントベース)</p></li>
<li><p>限定された権限を持つ__HTMLTAG_1130___専用レルム管理者</strong>を作成</p></li>
<li><p>アプリケーションのロールを確認する (Spring Boot、Node.js)</p></li>
</ul>

<p>次の記事では、Keycloak の__HTMLTAG_1140___クライアント、クライアント スコープ、OpenID Connect</strong> について説明します。</p>