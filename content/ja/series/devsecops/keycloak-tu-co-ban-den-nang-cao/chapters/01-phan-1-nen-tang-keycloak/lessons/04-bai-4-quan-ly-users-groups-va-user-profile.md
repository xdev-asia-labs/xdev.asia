---
id: 019d8b30-b104-7001-c001-e0c5f8100104
title: 'レッスン 4: ユーザー、グループ、およびユーザー プロファイルの管理'
slug: bai-4-quan-ly-users-groups-va-user-profile
description: ユーザーの作成と管理、認証情報の設定、ユーザー属性スキーマ、ユーザー プロファイル構成、カスタム属性とバリデーター、グループとサブグループの作成、グループ属性、グループ ロール マッピング、ユーザーの自己登録、必要なアクション、偽装と個人データの管理。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 1: Keycloak プラットフォーム'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<div style="text-align: center; margin: 2rem 0;">
<img src="/storage/uploads/2026/03/keycloak-users-groups-roles-2026.png" alt="Keycloak Users, Groups, Roles Hierarchy" style="max-width: 800px; width: 100%; border-radius: 12px;" />
<p><em>Keycloakレルムのユーザー、グループ、ロールの階層モデル</em></p>
</div>

<h2 id="1-quan-ly-users"><strong>1.ユーザーの管理</strong></h2>

<p>Users は Keycloak の中心的なエンティティであり、システムにログインできるユーザーを表します。各ユーザーは特定のレルムに属し、属性、認証情報、ロール、グループ メンバーシップを持つことができます。</p>

<h3 id="tao-user-qua-admin-console"><strong>1.1 管理コンソール経由でユーザーを作成</strong></h3>
<ol>
<li><p>レルム セレクターからレルム (例: <code>my-company</code>) を選択</p></li>
<li><p>サイドバーの__HTMLTAG_26___ユーザー</strong>をクリック</p></li>
<li><p>クリック__HTMLTAG_32___ユーザーを追加</strong></p></li>
<li><p>情報を入力してください:</p>
<ul>
<li><strong>ユーザー名</strong>: <code>john.doe</code> (必須)</li>
<li><strong>メール</strong>: <code>john.doe@mycompany.com</code></li>
<li><strong>名</strong>: <code>ジョン</code></li>
<li><strong>姓</strong>: <code>Doe</code></li>
<li><strong>メール認証済み</strong>: オン (メール認証済みの場合)</li>
<li><strong>有効</strong>: オン</li>
</ul>
</li>
<li><p>クリック__HTMLTAG_76___作成</strong></p></li>
</ol>

<h3 id="tao-user-qua-cli"><strong>1.2 管理 CLI 経由でユーザーを作成</strong></h3>
___プレコード_0___

<h3 id="tao-user-qua-api"><strong>1.3 REST API 経由でユーザーを作成</strong></h3>
___プレコード_1___

<h2 id="2-thiet-lap-credentials"><strong>2.認証情報の設定_</strong></h2>

<h3 id="dat-mat-khau-qua-admin-console"><strong>2.1 管理コンソールからパスワードを設定</strong></h3>
<ol>
<li><p>_<strong>ユーザー</strong>に移動→ユーザーを選択→タブ__HTMLTAG_102___認証情報</strong></p></li>
<li><p>_クリック__HTMLTAG_108___パスワードの設定</strong></p></li>
<li><p>新しいパスワードを入力</p></li>
<li><p><strong>一時</strong>: ON (ユーザーは初回ログイン時にパスワードを変更する必要があります) または OFF (固定パスワード)</p></li>
<li><p>クリック__HTMLTAG_124___保存</strong></p></li>
</ol>

<h3 id="dat-mat-khau-qua-cli"><strong>_2.2 CLI 経由でパスワードを設定</strong></h3>
___プレコード_2___

<h3 id="dat-mat-khau-qua-api"><strong>2.3 REST API 経由でパスワードを設定</strong></h3>
___プレコード_3___<h3 id="password-policies"><strong>2.4 パスワード ポリシー</strong></h3>
<p>__HTMLTAG_142___Authentication</strong> → <strong>Policies</strong> → <strong>パスワード ポリシー</strong>:</p> でレルムのパスワード ポリシーを構成します
<table>
<thead>
<tr><th>ポリシー</th><th>説明_</th><th>値の例_</th></tr>
</thead>
<tbody>
<tr><td>最小長</td><td>最小長</td><td>8</td></tr>
<tr><td>大文字</td><td>大文字_</td><td>1</td></tr>
<tr><td>小文字_</td><td>小文字_</td><td>1</td></tr>
<tr><td>桁_</td><td>リクエスト番号</td><td>1</td></tr>
<tr><td>特殊文字_</td><td>特殊文字が必要_</td><td>1</td></tr>
<tr><td>ユーザー名ではありません</td><td>パスワードはユーザー名と同じであってはなりません</td><td>-</td></tr>
<tr><td>電子メールではありません</td><td>パスワードは電子メールと同じであってはなりません</td><td>-</td></tr>
<tr><td>パスワード履歴</td><td>古いパスワードを再利用しない_</td><td>3</td></tr>
<tr><td>パスワードの有効期限</td><td>パスワードの有効期限(日)</td><td>90</td></tr>
<tr><td>ハッシュ アルゴリズム</td><td>アルゴリズム ハッシュ パスワード</td><td>argon2</td></tr>
<tr><td>_ハッシュ反復_</td><td>ハッシュラウンド数</td><td>5 (argon2)</td></tr>
</tbody>
</table>

<p>CLI による構成:</p>
___プレコード_4___

<h2 id="3-user-profile"><strong>3.ユーザープロフィール_</strong></h2>

<p><strong>ユーザー プロファイル</strong> は、管理者がユーザー属性のスキーマを定義できる機能で、ユーザーが持つ属性、検証方法、インターフェイス上での表示方法を制御できます。</p>

<h3 id="bat-user-profile"><strong>_3.1 ユーザー プロファイルを有効にする</strong></h3>
<p>Keycloak 24 以降では、ユーザープロファイルがデフォルトで有効になっています。古いバージョンの場合:</p>
<ol>
<li><p><strong>レルム設定</strong> → <strong>一般_</strong></p></li>
<li><p>__HTMLTAG_278___を検索___ユーザー プロファイルが有効</strong>: オン</p></li>
</ol><p>有効にした後、__HTMLTAG_284___レルム設定</strong> → <strong>ユーザー プロファイル</strong> にアクセスして設定します。</p>

<h3 id="attribute-schema"><strong>3.2 属性スキーマの定義</strong></h3>
<p>各属性には構成があります:</p>
<ul>
<li><p><strong>Name</strong> — 属性名 (小文字、API に使用)</p></li>
<li><p><strong>表示名</strong> — UI 表示名 (i18n サポート: <code>${profile.attribute.Department}</code>)</p></li>
<li><p><strong>権限</strong> — 表示/編集できるユーザー (管理者、ユーザー)</p></li>
<li><p><strong>検証</strong> — 値を検証するためのルール</p></li>
<li><p><strong>注釈</strong> — UI レンダリングのメタデータ_</p></li>
<li><p><strong>必須</strong> — ユーザー、管理者、またはその両方に必須</p></li>
<li><p><strong>多値</strong> — 複数の値を許可</p></li>
</ul>

<h3 id="built-in-attributes"><strong>_3.3 組み込み属性</strong></h3>
<p>Keycloak には利用可能な属性があります:</p>
<table>
<thead>
<tr><th>_属性_</th><th>説明_</th><th>デフォルト_</th></tr>
</thead>
<tbody>
<tr><td>ユーザー名_</td><td>ユーザー名</td><td>必須、一意</td></tr>
<tr><td>メール</td><td>メールアドレス</td><td>必須 (オフにすることもできます)</td></tr>
<tr><td>名</td><td>名前</td><td>必須</td></tr>
<tr><td>姓</td><td>姓</td><td>必須</td></tr>
</tbody>
</table><h3 id="tao-custom-attribute"><strong>_3.4 カスタム属性の作成</strong></h3>
<p>属性の作成例 <code>phone_number</code>:</p>
<ol>
<li><p>__HTMLTAG_404___レルム設定</strong>→__HTMLTAG_406___ユーザープロフィール_</strong></p></li>に移動します
<li><p>クリック__HTMLTAG_412___属性の作成</strong></p></li>
<li><p>_構成:</p>
<ul>
<li><strong>名前</strong>: <code>電話番号</code></li>
<li><strong>表示名</strong>: <code>電話番号</code></li>
<li><strong>属性グループ</strong>: (選択または新規作成)</li>
<li><strong>次の場合に有効</strong>: 常に</li>
<li><strong>必須</strong>: ユーザー</li> に必須
</ul>
</li>
</ol>

<h3 id="validators"><strong>3.5 バリデータ</strong></h3>
<p>Keycloak は属性値をチェックするための多くのバリデーターを提供します:</p>
<table>
<thead>
<tr><th>バリデータ</th><th>説明_</th><th>構成例_</th></tr>
</thead>
<tbody>
<tr><td>length_</td><td>長さ制限_</td><td>最小: 3、最大: 50_</td></tr>
<tr><td>電子メール</td><td>電子メールの形式を確認</td><td>-</td></tr>
<tr><td>パターン</td><td>正規表現パターンを確認</td><td>^\\+[0-9]{10,15}$</td></tr>
<tr><td>整数</td><td>整数テスト</td><td>最小: 0、最大: 999999_</td></tr>
<tr><td>double</td><td>テスト実数</td><td>最小: 0.0、最大: 100.0_</td></tr>
<tr><td>uri</td><td>有効な URL を確認</td><td>-</td></tr>
<tr><td>オプション</td><td>リスト内の値を制限_</td><td>["vn","us","jp"]</td></tr>
<tr><td>人名禁止文字</td><td>名前に特殊文字を禁止__HTMLTAG_525___<td>-</td></tr>
<tr><td>ユーザー名で禁止されている文字</td><td>ユーザー名の特殊文字をブロック</td><td>-</td></tr>
<tr><td>複数値</td><td>数量値の検証</td><td>最小: 1、最大: 5</td></tr>
</tbody>
</table><p>JSON 経由の構成属性の例 <code>phone_number</code> ([ユーザー プロファイル] タブ → JSON エディター):</p>
___プレコード_5___

<h3 id="annotations-cho-ui"><strong>_3.6 UI レンダリングの注釈</strong></h3>
<p>注釈を使用すると、登録/アカウント ページでの属性の表示方法をカスタマイズできます:</p>
<table>
<thead>
<tr><th>注釈_</th><th>説明_</th><th>値_</th></tr>
</thead>
<tbody>
<tr><td>inputType_</td><td>HTML 入力タイプ</td><td>テキスト、電子メール、電話番号、番号、日付、選択、複数選択、テキストエリア、html5-*</td></tr>
<tr><td>inputHelperTextBefore</td><td>入力前に表示されるヘルパー テキスト_</td><td>文字列テキスト_</td></tr>
<tr><td>inputHelperTextAfter</td><td>入力後に表示されるヘルパー テキスト_</td><td>文字列テキスト_</td></tr>
<tr><td>inputOptionsFromValidation</td><td>バリデーターからオプションを取得_</td><td>検証名 (例: 「オプション」)</td></tr>
</tbody>
</table>

<h3 id="progressive-profiling"><strong>3.7 プログレッシブプロファイリング</strong></h3>
<p>プログレッシブ プロファイリングを使用すると、登録時にすべての情報を要求するのではなく、段階的にユーザー情報を収集できます:</p>
<ol>
<li><p><strong>必須</strong> → <strong>ユーザー必須</strong>: ON</p></li> で属性を作成
<li><p>_ユーザーがログインするときに、属性に値がない場合、Keycloakは入力を求めるフォームを表示します</p></li>
<li><p>__HTMLTAG_624___「有効な場合」スコープ</strong> と組み合わせる</strong> — クライアントが特定のスコープを要求する場合にのみ属性が必要_</p></li>
</ol>

<p>例: 属性__HTMLTAG_630___phone_number</code>は、クライアントがスコープ__HTMLTAG_632___phone</code>:</p>をリクエストした場合にのみ必要です。
___プレコード_6___

<h2 id="4-groups"><strong>4.グループとサブグループ_</strong></h2>

<p>グループは、各ユーザーを個別に割り当てるのではなく、ユーザーを整理し、ロールと属性をユーザーのグループに一度に適用するのに役立ちます。</p>

<h3 id="tao-group-qua-admin-console"><strong>_4.1 管理コンソール経由でグループを作成</strong></h3>
<ol>
<li><p>_サイドバー</p></li>の「__HTMLTAG_648___グループ_</strong>」をクリックします。
<li><p>クリック__HTMLTAG_654___グループの作成</strong></p></li>
<li><p><strong>名前</strong>を入力してください: <code>エンジニアリング</code></p></li>
<li><p>_クリック__HTMLTAG_668___作成</strong></p></li>
</ol><h3 id="tao-sub-group"><strong>4.2 サブグループの作成</strong></h3>
<p>サブグループは親グループから属性と役割マッピングを継承します:</p>
<ol>
<li><p>グループをクリック__HTMLTAG_682___エンジニアリング</code></p></li>
<li><p>_クリック__HTMLTAG_688___サブグループの作成</strong></p></li>
<li><p>名前を入力してください: <code>バックエンド</code>、__HTMLTAG_696___フロントエンド</code>、__HTMLTAG_698___DevOps</code></p></li>
</ol>

<p>グループ構造の例:</p>
___プレコード_7___

<h3 id="tao-group-qua-cli"><strong>4.3 CLI 経由でグループを作成</strong></h3>
___プレコード_8___

<h3 id="group-attributes"><strong>_4.4 グループ属性</strong></h3>
<p>グループには Key-Value 属性を含めることができます。メタデータ、グループ構成に役立ちます:</p>
___プレコード_9___

<p>管理コンソール経由: [グループ] → [タブ] <strong>[属性]</strong> → キーと値のペアを追加します。</p>

<h3 id="them-user-vao-group"><strong>_4.5 ユーザーをグループに追加</strong></h3>
___プレコード_10___

<h3 id="default-groups"><strong>4.6 デフォルトグループ</strong></h3>
<p>デフォルト グループでは、アカウントの作成時または登録時に新しいユーザーが自動的に追加されます:</p>
<ol>
<li><p>__HTMLTAG_732___グループに移動</strong></p></li>
<li><p>_デフォルトとして設定するグループを選択</p></li>
<li><p>または__HTMLTAG_742___レルム設定</strong>→__HTMLTAG_744___ユーザー登録</strong>→__HTMLTAG_746___デフォルトグループ</strong></p></li>に移動します。
</ol>

___プレコード_11___

<h2 id="5-required-actions"><strong>_5.必要なアクション_</strong></h2>

<p>必須アクションは、正常にログインできるようになる前にユーザーが実行する必要があるアクションです。</p><h3 id="danh-sach-required-actions"><strong>5.1 利用可能な必須アクションのリスト</strong></h3>
<table>
<thead>
<tr><th>アクション</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>パスワードの更新</td><td>パスワードの変更が必要</td></tr>
<tr><td>メールを確認</td><td>メールを確認</td></tr>
<tr><td>OTP の設定</td><td>OTP の設定 (TOTP/HOTP)</td></tr>
<tr><td>プロフィールを更新_</td><td>個人情報を更新</td></tr>
<tr><td>利用規約_</td><td>利用規約に同意する_</td></tr>
<tr><td>WebAuthn の構成</td><td>デバイス WebAuthn の登録</td></tr>
<tr><td>ユーザー ロケールの更新</td><td>言語の選択</td></tr>
<tr><td>資格情報の削除</td><td>古い資格情報の削除</td></tr>
</tbody>
</table>

<h3 id="gan-required-action-cho-user"><strong>5.2 必要なアクションをユーザーに割り当てる</strong></h3>
___プレコード_12___

<h3 id="default-required-actions"><strong>_5.3 デフォルトの必須アクション</strong></h3>
<p>__HTMLTAG_830___認証</strong> → <strong>必須アクション</strong>:</p> で、すべての新規ユーザーに対してデフォルトの必須アクションを構成します。
<ul>
<li><p>_列を有効にする__HTMLTAG_838___必要なアクションのデフォルトのアクションとして設定</strong>__HTMLTAG_840___</li>
<li><p>すべての新規ユーザーにはデフォルトのアクションが自動的に割り当てられます</p></li>
</ul>

<h2 id="6-user-self-registration"><strong>6.ユーザー自己登録_</strong></h2>

<h3 id="bat-self-registration"><strong>_6.1 自己登録を有効にする</strong></h3>
<ol>
<li><p><strong>レルム設定</strong>→__HTMLTAG_860___ログイン_</strong></p></li>
<li><p>オン__HTMLTAG_866___ユーザー登録</strong>: オン</p></li>
<li><p>_ログイン ページに「登録」リンクが表示されます</p></li>
</ol><h3 id="recaptcha"><strong>_6.2 登録用 reCAPTCHA</strong></h3>
<p>_登録フォームをボットから保護するには、reCAPTCHA を有効にしてください:</p>
<ol>
<li><p>__HTMLTAG_884___https://www.google.com/recaptcha</a></p></li> で Google reCAPTCHA にサインアップします
<li><p>__HTMLTAG_889___認証</strong>→__HTMLTAG_891___フロー</strong>→__HTMLTAG_893___登録</strong>___HTMLTAG_895__HTMLTAG_896___
<li><p>ステップを検索__HTMLTAG_899___reCAPTCHA</strong> → 無効から__HTMLTAG_901___必須</strong></p></li>
<li><p>歯車アイコンをクリックし、__HTMLTAG_907___サイトキー</strong>と__HTMLTAG_909___シークレットキー</strong>をGoogleから入力___HTMLTAG_911__HTMLTAG_912___
</ol>

<h3 id="tuy-chinh-registration-form"><strong>6.3 登録フォームのカスタマイズ</strong></h3>
<p>ユーザー プロフィールを使用すると、登録フォームに表示されるフィールドを制御できます:</p>
<ul>
<li><p><strong>ユーザー必須</strong>の属性: ONはフォーム</p></li>に表示されます
<li><p>ユーザー プロファイル設定の__HTMLTAG_929___並べ替え順序</strong>に基づく表示順序</p></li>
<li><p>__HTMLTAG_935___属性グループ</strong>を使用して関連フィールドをグループ化</p></li>
</ul>

<h2 id="7-impersonation"><strong>7.なりすまし</strong></h2>

<p>Impersonation allows admins to "fake" login under another user name — useful for debugging and support.</p>

<h3 id="su-dung-impersonation"><strong>_7.1 偽装の使用</strong></h3>
<ol>
<li><p>__<strong>ユーザー</strong> に移動し、なりすます必要があるユーザーを見つけます_</p></li>
<li><p>ドロップダウン メニュー (ケバブ メニュー) をクリック → <strong>偽装</strong></p></li>
<li><p>ブラウザで新しいタブが開き、そのユーザー名でログイン</p></li>
<li><p>イベント タイプ <code>IMPERSONATE</code></p></li> のイベントに記録されたすべてのアクション
</ol>

<h3 id="impersonation-qua-api"><strong>7.2 REST API による偽装</strong></h3>
___プレコード_13___

<p><strong>_セキュリティに関するメモ:</strong></p>
<ul>
<li><p>レルム__HTMLTAG_987___レルム管理</code>のロール__HTMLTAG_985___impersonation</code>を持つユーザーのみ_</p></li>を偽装できます。
<li><p>_すべての偽装イベントがログに記録されます - 監査にとって重要</p></li>
<li><p>運用環境では、偽装権限を特権管理者のみに制限</p></li>
</ul>

<h2 id="8-tim-kiem-va-quan-ly-users"><strong>8.上級ユーザーの検索と管理_</strong></h2><h3 id="tim-kiem-user"><strong>8.1 ユーザーの検索</strong></h3>
___プレコード_14___

<h3 id="xoa-user"><strong>8.2 ユーザーの削除</strong></h3>
___プレコード_15___

<h3 id="disable-user"><strong>8.3 ユーザーを無効にする (削除ではなく)</strong></h3>
___プレコード_16___

<h3 id="bulk-operations"><strong>8.4 一括操作</strong></h3>
<p>CSV から複数のユーザーを作成するスクリプトの例:</p>
___プレコード_17___

<h2 id="9-personal-data-management"><strong>9。個人データの管理</strong></h2>

<p>Keycloak は、__HTMLTAG_1027___アカウント コンソール</strong> を通じて GDPR 準拠をサポートし、ユーザーに次のことを許可します:</p>
<ul>
<li><p><strong>個人情報の表示</strong> — 電子メール、名前、属性_</p></li>
<li><p><strong>情報の編集_</strong> — ユーザー プロフィールの権限に依存_</p></li>
<li><p><strong>セッションの表示</strong> — アクティブなログインセッション_</p></li>
<li><p><strong>デバイスの管理</strong> — ログインしているデバイスの表示と取り消し_</p></li>
<li><p><strong>アプリケーションの表示</strong> - アクセスが許可されたアプリケーション</p></li>
<li><p><strong>アカウントを削除</strong> — アカウントを自分で削除します (許可されている場合)</p></li>
</ul>

<p>アカウント コンソール URL:</p>
___プレコード_18___

<p>アカウントの削除を有効にする:</p>
<ol>
<li><p>__HTMLTAG_1075___認証</strong> → <strong>必要なアクション_</strong></p></li>
<li><p>アクションを有効にする__HTMLTAG_1083___アカウントを削除</strong></p></li>
<li><p>__HTMLTAG_1089___レルム設定</strong>→__HTMLTAG_1091___ログイン</strong>→オンにする__HTMLTAG_1093___アカウントを削除___HTMLTAG_1094__HTMLTAG_1095__HTMLTAG_1096___
</ol>

<h2 id="10-thuc-hanh"><strong>10.演習_</strong></h2><ol>
<li><p><strong>レルム <code>my-company</code> のユーザー プロファイル</strong> をカスタム属性で作成します:</p>
<ul>
<li><code>電話番号</code> (必須、国際形式の正規表現バリデータ)</li>
<li><code>部門__HTMLTAG_1117___ (必須、オプション: エンジニアリング、人事、財務、マーケティング)</li>
<li><code>employee_id</code> (管理者のみ編集、パターン: EMP-[0-9]{4})</li>
</ul>
</li>
<li><p><strong>グループ階層の作成</strong>:</p>
<ul>
<li>エンジニアリング → バックエンド、フロントエンド、DevOps</li>
<li>運営 → 人事、財務</li>
</ul>
</li>
<li><p><strong>CLI 経由で 5 人のユーザーを作成</strong>、各ユーザーは異なるグループに属し、一時パスワード_</p></li>
<li><p><strong>電子メール検証と登録テストによるセルフ登録の有効化_</strong>__HTMLTAG_1147___</li>
<li><p><strong>パスワード ポリシーの構成</strong>: 最小 10 文字、1 大文字、1 桁、1 特殊文字、履歴 5、有効期限 90 日</p></li>
</ol>

<h2 id="11-tong-ket"><strong>11.概要_</strong></h2>

<p>このレッスンでは、</p> を学習しました。
<ul>
<li><p>管理コンソール、CLI、REST API 経由で <strong>ユーザー</strong> を作成および管理</p></li>
<li><p>__HTMLTAG_1171___認証情報_</strong>および__HTMLTAG_1173___パスワードポリシー</strong></p></li>の設定
<li><p>__HTMLTAG_1179___ユーザー プロファイル_</strong>を使用して、バリデーターとアノテーションを含む属性スキーマを定義します_</p></li>
<li><p>階層、属性、デフォルト グループを使用して__HTMLTAG_1185___グループ</strong>および__HTMLTAG_1187___サブグループ</strong>を作成_</p></li>
<li><p>構成__HTMLTAG_1193___必須アクション</strong>ユーザーに必須</p></li>
<li><p>reCAPTCHA___HTMLTAG_1201__HTMLTAG_1202___ で <strong>自己登録</strong> を有効にする
<li><p>デバッグには__HTMLTAG_1205___偽装</strong>を使用</p></li>
<li><p>GDPR 準拠のための__HTMLTAG_1211___個人データ</strong>の管理</p></li>
</ul>

<p>次の記事では、Keycloak の__HTMLTAG_1217___ロール、権限、アクセス制御</strong>について説明します。</p>