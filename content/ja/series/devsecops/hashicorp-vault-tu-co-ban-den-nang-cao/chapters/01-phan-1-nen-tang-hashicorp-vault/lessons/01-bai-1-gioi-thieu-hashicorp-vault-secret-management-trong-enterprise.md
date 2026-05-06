---
id: 019d8b30-b201-7001-c002-e0c5f8200101
title: 'レッスン 1: HashiCorp Vault の紹介 - エンタープライズにおけるシークレット管理'
slug: bai-1-gioi-thieu-hashicorp-vault-secret-management-trong-enterprise
description: HashiCorp Vault とは何か、一元的なシークレット管理が必要な理由、Vault アーキテクチャ (ストレージ バックエンド、バリア、シークレット エンジン、認証方法、監査デバイス、システム バックエンド)、AWS Secrets Manager/Azure Key Vault/Google Secret Manager との比較、実際の使用例について学びます。 Vault 1.21.x の概要。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: HashiCorp Vault プラットフォーム'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault の基本から上級まで
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1997" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1997)"/>

  <!-- Decorations -->
  <g>
    <circle cx="714" cy="32" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="828" cy="206" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="942" cy="120" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="1056" cy="34" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="670" cy="208" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="172" x2="1100" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="202" x2="1050" y2="272" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1045.38268590218,208.5 1045.38268590218,235.5 1022,249 998.6173140978201,235.5 998.6173140978201,208.5 1022,195" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 D​​evSecOps — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">レッスン 1: HashiCorp Vault の紹介 - 秘密</tspan>
      <tspan x="60" dy="42">Management trong Enterprise</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault の基本から上級まで</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: HashiCorp Vault プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-hashicorp-vault-la-gi"><strong>1。 HashiCorp Vault とは何ですか?</strong></h2>
<p><strong>HashiCorp Vault</strong> は、パスワード、API キー、証明書、暗号化キー、その他の機密情報などの機密情報を保存、アクセスし、厳密に制御する機能を提供するオープンソースの機密管理ソリューションです。 Vault は HashiCorp によって開発され、現在インフラストラクチャ セキュリティの主要なツールの 1 つです。</p>

<p>Vault は、あらゆる種類のシークレットに統合されたインターフェイスを提供すると同時に、アクセスを厳密に制御し、すべてのやり取りの詳細な監査ログを記録します。</p>

<h3 id="lich-su-phat-trien"><strong>開発履歴</strong></h3>
<ul>
<li><p><strong>2015</strong>: HashiCorp Vault 0.1 がリリース — 基本的な機密管理</p></li>
<li><p><strong>2017</strong>: Vault 0.9 — Identity Secrets Engine, Sentinel policies (Enterprise)</p></li>
<li><p><strong>2018</strong>: Vault 1.0 — 統合ストレージ (Raft)、自動開封、多くの生産上の改善</p></li>
<li><p><strong>2020</strong>: Vault 1.5 — Transform Secrets Engine, UI improvements</p></li>
<li><p><strong>2022</strong>: Vault 1.12 — ACME protocol cho PKI, Vault Agent improvements</p></li>
<li><p><strong>2024</strong>: Vault 1.17 — Vault Secrets Operator GA, Event system</p></li>
<li><p><strong>2025-2026</strong>: Vault 1.21.x — SPIFFE 認証、MFA TOTP 自己登録、Azure の静的ロール、シークレット回復を備えた現在のバージョン</p></li>
</ul>

<h2 id="2-tai-sao-can-secret-management"><strong>2。一元的な秘密管理が必要なのはなぜですか?</strong></h2>
<p>現代のエンタープライズ システムでは、あらゆる場所でシークレットが使用されています:</p>
<ul>
<li><p>各マイクロサービスのデータベース資格情報</p></li>
<li><p>サードパーティ サービスと統合するための API キー</p></li>
<li><p>サービス間の mTLS の TLS 証明書</p></li>
<li><p>SSH keys cho server access</p></li>
<li><p>Cloud credentials (AWS IAM, Azure Service Principal, GCP Service Account)</p></li>
<li><p>Encryption keys cho data at rest</p></li>
</ul>

<p>一元化されたソリューションがなければ、秘密は次のようになります:</p>
<ul>
<li><p><strong>シークレットの広がり</strong> — 設定ファイル、環境変数、CI/CD パイプラインに散在するシークレット</p></li>
<li><p><strong>ローテーションの欠如</strong> — システムに影響を与える恐れがあるため、認証情報は決して変更しないでください</p></li>
<li><p><strong>監査がありません</strong> — 誰がどのシークレットにいつアクセスしたかわかりません</p></li>
<li><p><strong>ハードコードされたシークレット</strong> — シークレットはソースコードに直接コミット</p></li>
<li><p><strong>過剰な特権アクセス</strong> — 開発者は必要以上のアクセス権を持っています</p></li>
</ul>

<h2 id="3-kien-truc-vault"><strong>3。 HashiCorp Vault アーキテクチャ</strong></h2>
<p>Vault は、次の主要コンポーネントを備えたモジュラー アーキテクチャを備えています:</p>

<h3 id="storage-backend"><strong>Storage Backend</strong></h3>
<p>Storage Backend は、暗号化されたデータの保存を担当します。 Vault はストレージ バックエンドに依存しません。すべてのデータは書き込まれる前に暗号化されます。オプションは次のとおりです:</p>
<ul>
<li><p><strong>Integrated Storage (Raft)</strong> — recommended, built-in, HA support</p></li>
<li><p><strong>Consul</strong> — HashiCorp Consul storage backend</p></li>
<li><p><strong>File</strong> — ローカル ファイル システム。HA</p></li> はサポートされません。
<li><p><strong>インメモリ</strong> — 開発のみ</p></li>
</ul>

<h3 id="barrier"><strong>Barrier (Encryption Layer)</strong></h3>
<p>Barrier は、Vault を囲む暗号化層です。 Vault に出入りするデータはすべて AES-256-GCM で暗号化されます。バリアは、Vault が封印されていない状態にある場合にのみ「開く」ことができます。</p>

<h3 id="secrets-engines"><strong>Secrets Engines</strong></h3>
<p>Secrets エンジンは、データを保存、生成、またはエンコードするコンポーネントです。各エンジンは別のパスにマウントされます:</p>
<ul>
<li><p><strong>KV</strong> — キーと値のペア (静的シークレット) を格納します</p></li>
<li><p><strong>Database</strong> — sinh dynamic database credentials</p></li>
<li><p><strong>PKI</strong> — Certificate Authority, sinh TLS certificates</p></li>
<li><p><strong>Transit</strong> — Encryption as a Service</p></li>
<li><p><strong>AWS/Azure/GCP</strong> — sinh dynamic cloud credentials</p></li>
<li><p><strong>SSH</strong> — 署名された SSH 証明書または OTP</p></li>
</ul>

<h3 id="auth-methods"><strong>Auth Methods</strong></h3>
<p>Auth メソッドはクライアントを認証し、ID とポリシーを割り当てます:</p>
<ul>
<li><p><strong>Token</strong> — Vault トークン</p></li> で認証する
<li><p><strong>AppRole</strong> — cho machine-to-machine authentication</p></li>
<li><p><strong>LDAP/OIDC</strong> — Human users authentication</p></li>
<li><p><strong>Kubernetes</strong> — Pod-based authentication</p></li>
<li><p><strong>AWS/Azure/GCP</strong> — Cloud workload authentication</p></li>
<li><p><strong>SPIFFE</strong> — SVID ベースの認証 (1.21 の新機能)</p></li>
</ul>

<h3 id="audit-devices"><strong>Audit Devices</strong></h3>
<p>Audit Devices ghi lại mọi request và response với Vault. Mỗi request được log bất kể authentication hoặc authorization thành công hay thất bại.</p>

<h2 id="4-so-sanh-vault-vs"><strong>4。 Vault を他のソリューションと比較</strong></h2>

<table>
<thead>
<tr>
<th>機能</th>
<th>HashiCorp Vault</th>
<th>AWS Secrets Manager</th>
<th>Azure Key Vault</th>
<th>GCP Secret Manager</th>
</tr>
</thead>
<tbody>
<tr>
<td>Open Source</td>
<td>✅ (Community Edition)</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>Multi-cloud</td>
<td>✅</td>
<td>❌ (AWS only)</td>
<td>❌ (Azure only)</td>
<td>❌ (GCP only)</td>
</tr>
<tr>
<td>Dynamic Secrets</td>
<td>✅</td>
<td>⚠️ (限定)</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>PKI/CA</td>
<td>✅</td>
<td>❌</td>
<td>✅ (限定)</td>
<td>❌</td>
</tr>
<tr>
<td>Encryption as a Service</td>
<td>✅ (Transit)</td>
<td>❌</td>
<td>✅ (限定)</td>
<td>❌</td>
</tr>
<tr>
<td>SSH Certificates</td>
<td>✅</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>On-premises</td>
<td>✅</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>Plugin Ecosystem</td>
<td>✅ (extensible)</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
</tbody>
</table>

<h2 id="5-cac-use-cases"><strong>5。 Vault</strong></h2> の主な使用例

<h3 id="static-secrets"><strong>Static Secrets Management</strong></h3>
<p>KV Secrets Engine を使用して、任意の文字列をキーと値のペアとして保存、回転、暗号化します。 API キー、構成値、データベースのパスワードに適しています。</p>

<h3 id="dynamic-credentials"><strong>Dynamic Credentials</strong></h3>
<p>データベース (PostgreSQL、MySQL、MongoDB)、クラウド プロバイダー (AWS IAM、Azure SP、GCP SA)、メッセージング システム用に、限られた TTL を使用してオンデマンド認証情報を生成します。資格情報は期限切れになると自動的に取り消されます。</p>

<h3 id="encryption-as-a-service"><strong>Encryption as a Service</strong></h3>
<p>Transit Secrets Engine を使用して、アプリケーションに暗号化キーを保存せずにデータを暗号化/復号化します。アプリケーションは平文を Vault に送信し、暗号文を受信します。</p>

<h3 id="pki-certificate-management"><strong>PKI/Certificate Management</strong></h3>
<p>Vault PKI Secrets Engine は完全な認証局として機能し、TLS 証明書の生成/署名、証明書ライフサイクル、CRL、OCSP の管理、ACME プロトコルのサポートを行います。</p>

<h3 id="identity-based-access"><strong>Identity-based Access</strong></h3>
<p>Vault は、複数の ID ソース (LDAP、OIDC、Kubernetes、Cloud IAM) を統合エンティティに結合し、すべてのプラットフォームにわたって一貫したポリシー管理を可能にします。</p>

<h2 id="6-vault-121x"><strong>6。 Vault 1.21.x — 新機能</strong></h2>
<ul>
<li><p><strong>SPIFFE 認証</strong> — SPIFFE 環境で SVID を使用してワークロードを認証します</p></li>
<li><p><strong>MFA TOTP 自己登録</strong> — ユーザーはログイン時に QR コードを使用して MFA に自己登録します</p></li>
<li><p><strong>KV v2 バージョン属性</strong> — Secret</p></li> の各バージョンの作成者を確認する
<li><p><strong>Azure 静的ロール</strong> — 長期間有効な Azure 資格情報を管理</p></li>
<li><p><strong>シークレットの回復</strong> — 既存のデータを上書きせずにスナップショットからシークレットを復元します</p></li>
<li><p><strong>Snowflake Root Rotation</strong> — Snowflake</p></li> のキーペアのルート認証情報を自動的にローテーションします。
<li><p><strong>RACF パスフレーズのサポート</strong> — LDAP Secrets Engine</p></li> で長いパスフレーズをサポートします。
<li><p><strong>PKI 証明書カウンター</strong> — 毎月発行された証明書の数を追跡</p></li>
</ul>

<h2 id="7-tong-ket"><strong>7。概要</strong></h2>
<p>HashiCorp Vault は、現在最も包括的なシークレット管理ソリューションであり、オンプレミス環境とクラウド環境の両方に適しています。豊富なプラグイン エコシステム、動的な資格情報の生成、サービスとしての暗号化、PKI 管理、ID ベースのアクセスを備えた Vault は、最新のゼロ トラスト アーキテクチャに不可欠なコンポーネントです。</p>

<p>次の記事では、さまざまなプラットフォームに Vault をインストールし、初期化とシール/シール解除のプロセスについて学びます。</p>
