---
id: 019d8b30-b101-7001-c001-e0c5f8100101
title: 'レッスン 1: Keycloak の紹介 - エンタープライズにおける IAM と SSO'
slug: bai-1-gioi-thieu-keycloak-iam-va-sso-trong-enterprise
description: Keycloak とは何か、IAM が必要な理由、中心的な概念 (レルム、クライアント、ユーザー、ロール、グループ、セッション)、Quarkus 上の Keycloak アーキテクチャ、Auth0/Okta/Azure AD との比較、企業での実際の使用例について学びます。 Keycloak 26.x バージョンの概要。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: Keycloak プラットフォーム'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<h2 id="1-keycloak-la-gi"><strong>1。 Keycloak とは何ですか?</strong></h2>
<p><strong>Keycloak</strong> は、オープンソースの ID およびアクセス管理 (IAM) ソリューションであり、当初は Red Hat によって開発され、現在は <strong>CNCF Incubation</strong> (Cloud Native Computing Foundation) プロジェクトとなっています。 Keycloak は、Web システムと RESTful Web サービスにシングル サインオン (SSO)、アイデンティティ管理、アプリケーション セキュリティを提供します。</p>

<p>Keycloak の目標は、セキュリティをシンプルにすることです。通常、開発者が自分で作成する必要があるセキュリティ機能は、すぐに利用でき、組織のニーズに合わせてカスタマイズできます。</p>

<h3 id="lich-su-phat-trien"><strong>開発履歴</strong></h3>
<ul>
<li><p><strong>2014</strong>: Keycloak は JBoss/Red Hat プロジェクトとして誕生_</p></li>
<li><p><strong>2018</strong>: Keycloak 4.0 — 認可サービス、UMA 2.0 をサポート</p></li>
<li><p><strong>2020</strong>: Keycloak.X (Quarkus ベース) プレビュー</p></li>
<li><p><strong>2022</strong>: Keycloak 20 — WildFly ディストリビューションが削除され、正式に Quarkus に切り替え</p></li>
<li><p><strong>2024</strong>: Keycloak が CNCF インキュベーション プロジェクトになる</p></li>
<li><p><strong>2026</strong>: Keycloak 26.5.x — ワークフロー、パスキー、MCP サポートを備えた現在のバージョン</p></li>
</ul>

<h2 id="2-tai-sao-can-iam"><strong>2. ID とアクセス管理が必要な理由</strong></h2>
<p>最新のエンタープライズ システムでは、次の場合に ID とアクセスの管理が複雑になります。</p>
<ul>
<li><p>多くのアプリではユニバーサル認証 (SSO) が必要</p></li>
<li><p>外部 ID プロバイダー (Google、Azure AD、LDAP) との統合が必要</p></li>
<li><p>高セキュリティのために多要素認証 (MFA) が必要</p></li>
<li><p>複雑な権限管理 (RBAC、ABAC、詳細な権限)</p></li>
<li><p>セキュリティ標準（OAuth 2.0、OIDC、SAML 2.0、FAPI 2.0）に準拠</p></li>
<li><p>SaaS アプリケーションのマルチテナント</p></li>
</ul>

<div style="text-align: center; margin: 2rem 0;">
<img src="/storage/uploads/2026/03/keycloak-sso-overview-2026.png" alt="Keycloak IAM/SSO Overview" style="max-width: 800px; width: 100%; border-radius: 12px;" />
<p><em>Keycloak IAM/SSO の概要: アプリ → Keycloak → アイデンティティプロバイダ</em></p>
</div><h2 id="3-cac-tinh-nang-chinh"><strong>3. Keycloakの主な機能_</strong></h2>
<ul>
<li><p><strong>シングル サインオン (SSO) およびシングル サインアウト</strong> (ブラウザ アプリケーション用)_</p></li>
<li><p><strong>OpenID Connect</strong> および <strong>OAuth 2.0</strong> サポート</p></li>
<li><p><strong>SAML 2.0</strong> サポート</p></li>
<li><p><strong>ID ブローカリング</strong> — 外部 OIDC または SAML ID プロバイダーによる認証_</p></li>
<li><p><strong>ソーシャル ログイン</strong> — Google、GitHub、Facebook、Apple、Microsoft でサインイン</p></li>
<li><p><strong>ユーザー フェデレーション</strong> — LDAP および Active Directory からユーザーを同期_</p></li>
<li><p><strong>Kerberos ブリッジ</strong> — Kerberos サーバーにログインしているユーザーを自動的に認証_</p></li>
<li><p><strong>管理コンソール</strong> — ユーザー、ロール、クライアント、構成の一元管理</p></li>
<li><p><strong>アカウント コンソール</strong> — ユーザーが自分のアカウントを管理できるようにします</p></li>
<li><p><strong>テーマのサポート</strong> — インターフェースのログイン、アカウント、管理者、電子メールをカスタマイズ_</p></li>
<li><p><strong>2 要素認証</strong> — TOTP/HOTP、WebAuthn、パスキー_</p></li>
<li><p><strong>認可サービス</strong> — ポリシーと権限による詳細な認可_</p></li>
<li><p><strong>組織</strong> — CIAM (B2B、B2B2C) のマルチテナンシー</p></li>
<li><p><strong>ワークフロー</strong> — 管理自動化 (IGA)</p></li>
<li><p><strong>トークン マッパー</strong> — トークンのカスタム クレーム_</p></li>
<li><p><strong>イベントと監査</strong> — 監査ログとイベント リスナー</p></li>
</ul>

<h2 id="4-khai-niem-cot-loi"><strong>4.中心となる概念_</strong></h2>

<h3 id="realms"><strong>レルム</strong></h3>
<p>Realm は、ユーザー、認証情報、ロール、およびグループのセットを管理します。各ユーザーはレルムに属し、レルムにログインします。レルムは互いに分離されており、そのレルムに属するユーザーのみが管理および認証されます。</p>

<h3 id="clients"><strong>クライアント</strong></h3>
<p>クライアントは、Keycloakによるユーザーの認証を必要とするエンティティ(アプリケーション、サービス)です。クライアントは、Web アプリ、モバイル アプリ、REST API、または他のサービスを呼び出すためにトークンを必要とするサービスです。</p><h3 id="users"><strong>ユーザー</strong></h3>
<p>ユーザーはシステムにログインできるエンティティです。ユーザーには属性 (電子メール、ユーザー名、電話番号など) があり、グループに属し、役割が割り当てられています。</p>

<h3 id="roles"><strong>役割</strong></h3>
<p>_ロールは、ユーザーのタイプまたはカテゴリ (管理者、ユーザー、マネージャー) を識別します。アプリケーションは、個々のユーザーではなくロールに基づいてアクセス権を割り当てます。</p>

<h3 id="groups"><strong>グループ</strong></h3>
<p>グループはユーザー グループを管理します。グループには属性と役割のマッピングがあります。ユーザーはグループから属性とロール マッピングを継承します。</p>

<h3 id="sessions"><strong>_セッション_</strong></h3>
<p>ユーザーがログインすると、ログイン時間や SSO に参加したアプリケーションに関する情報など、ログイン セッションを管理するためのセッションが作成されます。</p>

<h2 id="5-kien-truc-keycloak"><strong>5. Quarkus の Keycloak アーキテクチャ</strong></h2>
<p>バージョン 20 以降では、Keycloak は完全に Quarkus フレームワーク上で実行され、次の機能を提供します。</p>
<ul>
<li><p><strong>超高速な起動時間_</strong> — コンテナおよびサーバーレスに適しています_</p></li>
<li><p><strong>メモリ使用量が少ない</strong> — クラウドネイティブ展開向けに最適化_</p></li>
<li><p><strong>ビルド時の最適化</strong> — プリコンパイル済み構成</p></li>
<li><p><strong>ネイティブ イメージのサポート</strong> — GraalVM をネイティブで実行する機能_</p></li>
</ul>

<div style="text-align: center; margin: 2rem 0;">
<img src="/storage/uploads/2026/03/keycloak-architecture-2026.png" alt="Keycloak Architecture on Quarkus" style="max-width: 800px; width: 100%; border-radius: 12px;" />
<p><em>_Keycloak アーキテクチャ: Quarkus ランタイム、Infinispan キャッシュ、Hibernate ORM、管理者/アカウント コンソール_</em></p>
</div>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>コンポーネント</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>_Quarkus ランタイム</strong></td>
<td>アプリケーション サーバー (WildFly を置き換える)</td>
</tr>
<tr>
<td><strong>_無限</strong></td>
<td>セッション、トークンの分散キャッシュ</td>
</tr>
<tr>
<td><strong>_Hibernate ORM</strong></td>
<td>データベース永続性のための ORM レイヤー__HTMLTAG_309___
</tr>
<tr>
<td><strong>データベース</strong></td>
<td>PostgreSQL (推奨)、MySQL、MariaDB、Oracle、MSSQL</td>
</tr>
<tr>
<td><strong>管理コンソール</strong></td>
<td>React ベースの SPA (PatternFly 5)</td>
</tr>
<tr>
<td><strong>アカウント コンソール</strong></td>
<td>ユーザーのセルフサービスのための React ベースの SPA</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html--><h2 id="6-so-sanh"><strong>_6. Keycloak、Auth0、Okta、Azure AD</strong></h2> の比較

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>基準__HTMLTAG_347___
<th>Keycloak</th>
<th>認証0</th>
<th>オクタ</th>
<th>Azure AD</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ライセンス</strong></td>
<td>Apache 2.0 (FOSS)</td>
<td>商用</td>
<td>商用</td>
<td>商用</td>
</tr>
<tr>
<td><strong>展開</strong></td>
<td>セルフホスト</td>
<td>クラウド SaaS</td>
<td>クラウド SaaS</td>
<td>クラウド SaaS</td>
</tr>
<tr>
<td><strong>_費用</strong></td>
<td>無料 (自己運営)</td>
<td>月額 35 ドルから</td>
<td>ユーザーあたり月額 2 ドルから</td>
<td>ユーザーあたり月額 6 ドルから__HTMLTAG_399___
</tr>
<tr>
<td><strong>カスタマイズ</strong></td>
<td>非常に高い (オープンソース)</td>
<td>平均</td>
<td>平均</td>
<td>低</td>
</tr>
<tr>
<td><strong>OIDC/OAuth2</strong></td>
<td>全文</td>
<td>全文</td>
<td>全文</td>
<td>全文</td>
</tr>
<tr>
<td><strong>SAML</strong></td>
<td>全文</td>
<td>はい</td>
<td>全文</td>
<td>全文</td>
</tr>
<tr>
<td><strong>LDAP/AD</strong></td>
<td>全文</td>
<td>エンタープライズ</td>
<td>全文</td>
<td>ネイティブ</td>
</tr>
<tr>
<td><strong>_MFA</strong></td>
<td>TOTP、WebAuthn、パスキー</td>
<td>全文</td>
<td>全文</td>
<td>全文</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html--><h2 id="7-use-cases"><strong>_7.実際の使用例</strong></h2>
<ul>
<li><p><strong>エンタープライズ SSO</strong>: すべての内部アプリのシングル サインオン_</p></li>
<li><p><strong>顧客 IAM (CIAM)</strong>: 組織で顧客 ID を管理_</p></li>
<li><p><strong>API セキュリティ</strong>: OAuth 2.0 トークンによる安全な REST API_</p></li>
<li><p><strong>マイクロサービス認証</strong>: クライアント資格情報を使用したサービス間認証_</p></li>
<li><p><strong>ソーシャル ログイン</strong>: ユーザーに Google、Facebook、GitHub でのログインを許可</p></li>
<li><p><strong>_LDAP/ADフェデレーション</strong>: 既存のディレクトリ システムを統合_</p></li>
<li><p><strong>コンプライアンスのMFA</strong>: PCI-DSS、HIPAA、SOC 2要件を満たしています_</p></li>
</ul>

<h2 id="8-tong-quan-khoa-hoc"><strong>8.コースの概要</strong></h2>
<p>このコースには__HTMLTAG_527___25のレッスン__HTMLTAG_528___が__HTMLTAG_529___7つの部分</strong>に分かれており、Keycloak 26.xのすべてのモジュールをカバーしています:</p>
<ul>
<li><p><strong>パート 1</strong>: プラットフォーム (レルム、ユーザー、グループ、ロール、権限)</p></li>
<li><p><strong>パート 2</strong>: SSO プロトコル (OIDC、SAML、クライアント スコープ、トークン、DPoP)</p></li>
<li><p><strong>パート 3</strong>: 認証と MFA (フロー、OTP、WebAuthn、パスキー、ID ブローカリング)</p></li>
<li><p><strong>パート 4</strong>: フェデレーションと認可 (LDAP/AD、組織、認可サービス、ワークフロー)</p></li>
<li><p><strong>パート 5</strong>: セキュリティとカスタマイズ (テーマ、イベント、強化、Vault)</p></li>
<li><p><strong>パート 6</strong>: 実践的な統合 (Spring Boot、React/Angular、Node.js、API ゲートウェイ)</p></li>
<li><p><strong>パート 7</strong>: 本番運用 (デプロイメント、HA、Kubernetes、モニタリング)</p></li>
</ul>