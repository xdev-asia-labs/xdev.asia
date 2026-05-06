---
id: 019d8b30-b119-7001-c001-e0c5f8100119
title: 'レッスン 19: 高度なセキュリティと Vault の統合'
slug: bai-19-bao-mat-nang-cao-va-vault-integration
description: セキュリティ強化 Keycloak、コンテンツ セキュリティ ポリシー ヘッダー、ブルート フォース検出構成、パスワード ポリシー (各ポリシーの詳細)、セッション管理 (セッション制限、アイドル/最大タイムアウト)、CORS 構成、クリックジャッキング保護、HTTPS/TLS ベスト プラクティス、証明書管理、Vault 統合 (HashiCorp Vault、Kubernetes Secrets、ファイルベース)、ローテーション資格情報、管理コンソールのアクセス制限。
duration_minutes: 220
is_free: true
video_url: null
sort_order: 19
section_title: 'パート 5: テーマ、イベント、セキュリティ、および Vault'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6341" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6341)"/>

  <!-- Decorations -->
  <g>
    <circle cx="900" cy="170" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="90" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="50" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="50" x2="1100" y2="130" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="80" x2="1050" y2="150" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="971.650635094611,137.5 971.650635094611,162.5 950,175 928.349364905389,162.5 928.349364905389,137.5 950,125" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — レッスン 19</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 19: 高度なセキュリティとボールト</tspan>
      <tspan x="60" dy="42">統合</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">_Keycloak の基本から高度なもの__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: テーマ、イベント、セキュリティ、Vault</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-security-hardening-checklist"><strong>1.セキュリティ強化チェックリスト</strong></h2>

<p>Before putting Keycloak into production, the following hardening measures need to be fully implemented:</p><table>
<thead>
<tr><th>#</th><th>カテゴリ_</th><th>レベル_</th><th>ステータス__HTMLTAG_83___</tr>
</thead>
<tbody>
<tr><td>1</td><td>HTTPS/TLS の強制</td><td>_重要</td><td>☐</td></tr>
<tr><td>2</td><td>デフォルトの管理者資格情報の変更_</td><td>重要</td><td>☐</td></tr>
<tr><td>3</td><td>ブルートフォース検出</td><td>高</td><td>☐</td></tr>
<tr><td>4</td><td>パスワード ポリシー</td><td>高</td><td>☐</td></tr>
<tr><td>5</td><td>セッションタイムアウト</td><td>高</td><td>☐</td></tr>
<tr><td>6</td><td>CSP ヘッダー</td><td>高</td><td>☐</td></tr>
<tr><td>7</td><td>クリックジャッキング保護</td><td>高</td><td>☐</td></tr>
<tr><td>8</td><td>CORS 構成</td><td>中</td><td>☐</td></tr>
<tr><td>9</td><td>シークレットの Vault 統合</td><td>高</td><td>☐</td></tr>
<tr><td>10_</td><td>管理コンソールのアクセス制限</td><td>高</td><td>☐</td></tr>
<tr><td>11</td><td>未使用の機能/エンドポイントを無効にする</td><td>中</td><td>☐</td></tr>
<tr><td>12</td><td>保存時のデータベース暗号化</td><td>高</td><td>☐</td></tr>
<tr><td>13</td><td>トークンセキュリティ (短期)</td><td>高</td><td>☐</td></tr>
<tr><td>14</td><td>監査ログ有効</td><td>高</td><td>☐</td></tr>
</tbody>
</table>

<h2 id="2-content-security-policy-headers"><strong>2.コンテンツ セキュリティ ポリシー (CSP) ヘッダー</strong></h2>

<p>CSP ヘッダーは、ページへの読み込みを許可するリソースを制御することにより、XSS 攻撃から保護します。</p>

<h3 id="21-cau-hinh-csp-trong-keycloak"><strong>2.1 KeycloakでのCSPの構成</strong></h3><p>Keycloak は <strong>レルム設定 → セキュリティ防御</strong>:</p> を介して CSP を設定します

___プレコード_0___

<h3 id="22-cau-hinh-qua-rest-api"><strong>_2.2 REST API による構成</strong></h3>

___プレコード_1___

<h3 id="23-cac-header-bao-mat-quan-trong"><strong>2.3 重要なセキュリティ ヘッダー</strong></h3>

<table>
<thead>
<tr><th>ヘッダー_</th><th>推奨値_</th><th>目的_</th></tr>
</thead>
<tbody>
<tr><td><code>X-Frame-Options</code></td><td><code>_SAMEORIGIN</code></td><td>クリックジャッキング対策</td></tr>
<tr><td><code>X-Content-Type-Options</code></td><td><code>nosniff</code></td><td>アンチ MIME タイプ スニッフィング</td></tr>
<tr><td><code>X-XSS 保護</code></td><td><code>1; mode=block</code></td><td>ブラウザ XSS フィルターを有効にする</td></tr>
<tr><td><code>厳格な輸送セキュリティ</code></td><td><code>max-age=31536000; includeSubDomains_</code></td><td>強制 HTTPS (HSTS)</td></tr>
<tr><td><code>リファラーポリシー</code></td><td><code>リファラーなし_</code></td><td>リファラーヘッダー送信なし</td></tr>
<tr><td><code>コンテンツセキュリティポリシー</code></td><td>フレームソース、オブジェクトソースを制限</td><td>_アンチXSS、データインジェクション</td></tr>
</tbody>
</table>

<h2 id="3-brute-force-detection"><strong>3.ブルートフォース検出</strong></h2>

<p>Keycloak には、ログイン試行に対するブルート フォース防止メカニズムが組み込まれています。</p>

<h3 id="31-cau-hinh-brute-force"><strong>_3.1 ブルートフォース構成</strong></h3>

<p>__HTMLTAG_346___レルム設定 → セキュリティ防御 → ブルート フォース検出</strong>:</p> に移動します。

___プレコード_2___

<h3 id="32-cau-hinh-qua-rest-api"><strong>3.2 REST API による構成</strong></h3>

___プレコード_3___

<h3 id="33-cach-hoat-dong-brute-force"><strong>3.3 ブルートフォース検出の仕組み</strong></h3>

___プレコード_4___

<h3 id="34-unlock-user"><strong>3.4 ロック解除ユーザーはロックされています</strong></h3>

___プレコード_5___

<h2 id="4-password-policies"><strong>_4.パスワード ポリシー_</strong></h2>

<p>Keycloak は、強力なパスワードを確保するために多くのパスワード ポリシーをサポートしています。</p>

<h3 id="41-cau-hinh-password-policies"><strong>4.1 パスワード ポリシーの構成</strong></h3>

<p>_<strong>認証 → ポリシー → パスワード ポリシー</strong> に移動し、ポリシーを追加します:</p><table>
<thead>
<tr><th>ポリシー</th><th>説明_</th><th>テンプレート値_</th></tr>
</thead>
<tbody>
<tr><td><code>length</code></td><td>最小長</td><td><code>12</code></td></tr>
<tr><td><code>maxLength</code></td><td>最大長マルチ</td><td><code>128</code></td></tr>
<tr><td><code>桁</code></td><td>最小文字数</td><td><code>1</code></td></tr>
<tr><td><code>小文字</code></td><td>小文字の最小文字数</td><td><code>1</code></td></tr>
<tr><td><code>upperCase</code></td><td>大文字の最小数</td><td><code>1</code></td></tr>
<tr><td><code>specialChars</code></td><td>特殊文字の最大数最小_</td><td><code>1</code></td></tr>
<tr><td><code>notUsername</code></td><td>パスワードをユーザー名と同じにすることはできません</td><td>(値なし)</td></tr>
<tr><td><code>notEmail</code></td><td>パスワードは同じメールアドレスにすることはできません</td><td>(値なし)</td></tr>
<tr><td><code>パスワード履歴</code></td><td>最近使用した N 個のパスワードをほとんど再利用しない</td><td><code>5</code></td></tr>
<tr><td><code>ハッシュアルゴリズム_</code></td><td>ハッシュアルゴリズムパスワード</td><td><code>pbkdf2-sha512</code></td></tr>
<tr><td><code>hashIterations_</code></td><td>ループハッシュ数</td><td><code>210000</code></td></tr>
<tr><td><code>forceExpiredPasswordChange</code></td><td>N 日以降の MK の強制変更</td><td><code>90</code></td></tr>
<tr><td><code>regulxExpression_</code></td><td>正規表現パターンはオプションedit</td><td><code>^(?!.*(.)\1{2}).*$</code></td></tr>
</tbody>
</table>

<h3 id="42-cau-hinh-qua-rest-api"><strong>_4.2 REST API による構成</strong></h3>___プレコード_6___

<h3 id="43-hash-algorithm-recommendations"><strong>4.3 ハッシュ アルゴリズムの推奨事項</strong></h3>

<table>
<thead>
<tr><th>_アルゴリズム_</th><th>反復 (推奨)</th><th>メモ_</th></tr>
</thead>
<tbody>
<tr><td><code>pbkdf2-sha256_</code></td><td>600,000</td><td>OWASP 2023 推奨</td></tr>
<tr><td><code>pbkdf2-sha512_</code></td><td>210,000</td><td>OWASP 2023 推奨</td></tr>
<tr><td><code>argon2</code></td><td>N/A (Keycloak 24+)</td><td>メモリに負荷がかかり、新規デプロイメントに推奨</td></tr>
</tbody>
</table>

___プレコード_7___

<h2 id="5-session-management"><strong>5.セッション管理_</strong></h2>

<p>セキュリティには強力なセッション管理が重要です。</p>

<h3 id="51-session-timeouts"><strong>5.1 セッションのタイムアウト</strong></h3>

<p><strong>レルム設定 → セッション</strong>:</p> で設定します。<table>
<thead>
<tr><th>_設定</th><th>説明</th><th>推奨__HTMLTAG_615___</tr>
</thead>
<tbody>
<tr><td><strong>SSO セッション アイドル</strong></td><td>SSO セッションの最大アイドル時間_</td><td>30 分</td></tr>
<tr><td><strong>SSO セッションの最大時間</strong></td><td>SSO セッションの最大時間 (アクティビティに関係なく)</td><td>10 時間</td></tr>
<tr><td><strong>SSO セッション アイドル状態を記憶する</strong></td><td>「記憶する」が有効な場合のアイドル タイムアウト</td><td>7 日付</td></tr>
<tr><td><strong>SSO セッションの最大値を記憶する</strong></td><td>「記憶する」が有効な場合の最大有効期間</td><td>30 日</td></tr>
<tr><td><strong>クライアント セッションのアイドル</strong></td><td>_クライアント固有のセッションのアイドル タイムアウト</td><td>15 分</td></tr>
<tr><td><strong>_クライアント セッションの最大数</strong></td><td>_クライアント固有のセッションの最大有効期間</td><td>8 時間_</td></tr>
<tr><td><strong>_オフライン セッション アイドル_</strong></td><td>_オフライン トークンのアイドル タイムアウト_</td><td>30 日付</td></tr>
<tr><td><strong>オフライン セッションの最大期間</strong></td><td>オフライン セッションの有効期間の制限</td><td>60 日_</td></tr>
</tbody>
</table>

<h3 id="52-cau-hinh-sessions-chi-tiet"><strong>_5.2 詳細なセッション構成</strong></h3>

___プレコード_8___

<h3 id="53-session-limits"><strong>5.3 セッション制限</strong></h3>

<p>ユーザーごとの同時セッション数を制限する:</p>

___プレコード_9___

<h3 id="54-kiem-tra-va-revoke-sessions"><strong>_5.4 セッションの確認と取り消し</strong></h3>

___プレコード_10___

<h2 id="6-cors-configuration"><strong>6. CORS 構成</strong></h2>

<p>CORS (クロスオリジン リソース共有) は、Keycloak でクライアントごとに <strong></strong> が構成されました。</p>

<h3 id="61-cau-hinh-cors-cho-client"><strong>6.1 クライアントの CORS の構成</strong></h3>

___プレコード_11___

___プレコード_12___

<h3 id="62-cors-best-practices"><strong>6.2 CORS ベスト プラクティス</strong></h3><ul>
<li><strong>常に特定のオリジンを指定_</strong> — ワイルドカードを使用しない__HTMLTAG_735____*</code></li>
<li><strong><code>+</code></strong> — 有効なリダイレクト URI から起点を自動的に取得</li>
<li><strong>クライアントの分離</strong> — 各フロントエンド アプリには独自の CORS 構成を持つ独自のクライアントが必要</li>
<li><strong>徹底的にテスト</strong> — ブラウザー DevTools を使用して CORS 応答ヘッダーをテスト</li>
</ul>

<h2 id="7-clickjacking-protection"><strong>7。クリックジャッキング保護</strong></h2>

<p>クリックジャッキング攻撃は、Keycloakのログインページをiframeに埋め込んで資格情報を盗みます。</p>

<h3 id="71-cau-hinh-x-frame-options"><strong>7.1 X フレーム オプションの構成</strong></h3>

___プレコード_13___

<h3 id="72-csp-frame-ancestors"><strong>7.2 CSP フレーム祖先 (推奨)</strong></h3>

___プレコード_14___

<h2 id="8-https-tls-enforcement"><strong>8。 HTTPS/TLS の強制</strong></h2>

<h3 id="81-cau-hinh-hostname-va-tls"><strong>_8.1 ホスト名とTLS構成</strong></h3>

___プレコード_15___

<h3 id="82-tls-voi-reverse-proxy"><strong>8.2 リバース プロキシを使用した TLS (一般的)</strong></h3>

___プレコード_16___

___プレコード_17___

<h3 id="83-mutual-tls-mtls"><strong>_8.3 相互 TLS (mTLS)</strong></h3>

___プレコード_18___

<h3 id="84-certificate-management"><strong>8.4 証明書管理</strong></h3>

___プレコード_19___

___プレコード_20___

<h2 id="9-vault-integration"><strong>9. Vault の統合</strong></h2>

<p>Keycloak は、データベース内のプレーンテキストではなく、外部ボールトへのシークレット (LDAP バインド パスワード、SMTP パスワード、クライアント シークレット) の保存をサポートします。</p>

<h3 id="91-hashicorp-vault-integration"><strong>9.1 HashiCorp Vault の統合</strong></h3>

___プレコード_21___

<h3 id="92-luu-secrets-trong-hashicorp-vault"><strong>9.2 HashiCorp Vault にシークレットを保存</strong></h3>

___プレコード_22___

<h3 id="93-su-dung-vault-reference-trong-keycloak"><strong>9.3 KeycloakでのVaultリファレンスの使用</strong></h3>

<p>Keycloak では、プレーンテキスト:</p> の代わりに、__HTMLTAG_806___${vault.key}</code> という構文を使用します。

___プレコード_23___

<h3 id="94-kubernetes-secrets-vault"><strong>_9.4 Kubernetes/OpenShift Secrets Vault</strong></h3>

___プレコード_24___

___プレコード_25___

___プレコード_26___

<h3 id="95-file-based-vault-dev"><strong>9.5 ファイルベースのボールト (開発)</strong></h3>

___プレコード_27___

<h3 id="96-rotating-credentials"><strong>9.6 認証情報のローテーション</strong></h3>

___プレコード_28___

<h2 id="10-admin-console-access-restrictions"><strong>10.管理コンソールのアクセス制限</strong></h2>

<h3 id="101-dedicated-admin-realm"><strong>_10.1 専用管理レルム</strong></h3>

<p>__HTMLTAG_830___マスター レルム</strong> を管理者のみに使用し、ユーザー/クライアント ビジネスを作成しないでください:</p>

___プレコード_29___

<h3 id="102-ip-whitelist-cho-admin-console"><strong>10.2 管理コンソールの IP ホワイトリスト</strong></h3>

___プレコード_30___

<h3 id="103-kubernetes-network-policy"><strong>10.3 Kubernetes ネットワーク ポリシー</strong></h3>

___プレコード_31___<h2 id="11-token-security"><strong>11.トークンのセキュリティ_</strong></h2>

<h3 id="111-short-lived-tokens"><strong>11.1 有効期間の短いトークン</strong></h3>

___プレコード_32___

<h3 id="112-token-introspection"><strong>_11.2 トークンのイントロスペクション</strong></h3>

___プレコード_33___

<h3 id="113-token-revocation"><strong>11.3 トークンの失効</strong></h3>

___プレコード_34___

<h2 id="12-production-deployment-hardened"><strong>12.本番環境への展開 - 強化</strong></h2>

___プレコード_35___

<h2 id="13-best-practices-tong-hop"><strong>_13.ベスト プラクティスの概要_</strong></h2>

<ul>
<li><strong>_どこでもHTTPS</strong> — TLSを使用せずにKeycloak本番環境をデプロイしないでください。 HSTS ヘッダーを使用します。</li>
<li><strong>_Vault のシークレット</strong> — 平文の資格情報を DB に保存しません。 HashiCorp Vault または Kubernetes Secret を使用します。</li>
<li><strong>強力なパスワード ポリシー</strong> — 最小 12 文字、反復回数の多い Argon2 または PBKDF2-SHA512 を使用します。</li>
<li><strong>セッション制限__HTMLTAG_880___ — 同時セッションの数を制限します。適切なアイドル/最大タイムアウトを設定します。</li>
<li><strong>管理者アクセス制限</strong> — 管理コンソールの IP ホワイトリスト。管理者アカウントには MFA が必要です。</li>
<li><strong>有効期限の短いトークン</strong> — アクセス トークンは 5 分、リフレッシュ トークンのローテーションは有効です。</li>
<li><strong>_ブルート フォース保護</strong> — 有効にして適切に構成します。ログイン失敗率を監視します。</li>
<li><strong>_定期的なセキュリティ監査</strong> — Keycloak構成を定期的に確認します。最新バージョンに更新してください。</li>
<li><strong>独立した管理レルム</strong> — 管理者のみにマスター レルムを使用します。管理者ユーザーとビジネス ユーザーを混在させないでください。</li>
<li><strong>監視とアラート</strong> — イベント ログ (レッスン 18) とセキュリティ監視を組み合わせて、検出と対応を行います。</li>
</ul>