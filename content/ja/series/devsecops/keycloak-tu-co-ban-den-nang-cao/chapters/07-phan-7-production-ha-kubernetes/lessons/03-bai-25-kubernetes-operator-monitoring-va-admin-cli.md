---
id: 019d8b30-b125-7001-c001-e0c5f8100125
title: 'レッスン 25: Kubernetes オペレーター、モニタリング、および管理 CLI'
slug: bai-25-kubernetes-operator-monitoring-va-admin-cli
description: 'Keycloak Operator (CRD: Keycloak、KeycloakRealmImport)、OLM/kubectl 経由で Operator をインストール、カスタム リソース構成、レルム インポートの自動化、Operator のアップグレード戦略。 Prometheus + Grafana によるモニタリング (Keycloak メトリクス、JVM メトリクス、Infinispan メトリクス、カスタム ダッシュボード)。管理 CLI (kcadm.sh) の習得 - すべての操作 (レルム、ユーザー、クライアント、ロール、グループ、アイデンティティ プロバイダー、フロー、コンポーネント)。 Kubernetes のバックアップと復元戦略。'
duration_minutes: 260
is_free: true
video_url: null
sort_order: 25
section_title: 'パート 7: 本番環境、HA、および Kubernetes'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7570" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7570)"/>

  <!-- Decorations -->
  <g>
    <circle cx="852" cy="66" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="604" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="856" cy="90" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="608" cy="102" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="860" cy="114" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="246" x2="1100" y2="326" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="276" x2="1050" y2="346" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="981.507041555162,125.5 981.507041555162,166.5 946,187 910.492958444838,166.5 910.492958444838,125.50000000000001 946,105" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — レッスン 25</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 25: Kubernetes オペレーター、モニタリング、</tspan>
      <tspan x="60" dy="42">管理者 CLI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">_Keycloak の基本から高度なもの__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: 実稼働、HA、および Kubernetes</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-keycloak-kubernetes-operator-overview"><strong>1. Keycloak Kubernetes オペレーターの概要</strong></h2>

<p>Keycloak Operator は公式の Kubernetes Operator であり、__HTMLTAG_72___宣言的アプローチ</strong> に従って Keycloak のデプロイメントを管理します。オペレーターはカスタム リソース定義 (CRD) を使用して望ましい状態を定義し、実際の状態が一致するように自動的に調整します。</p>

___プレコード_0___

<h3 id="11-crds-overview"><strong>1.1 CRD の概要</strong></h3>

<table>
<thead>
<tr><th>CRD</th><th>API グループ</th><th>目的</th></tr>
</thead>
<tbody>
<tr><td><code>Keycloak</code></td><td><code>k8s.keycloak.org/v2alpha1</code></td><td>定義 Keycloak デプロイ (インスタンス、DB、ホスト名、TLS、機能)</td></tr>
<tr><td><code>KeycloakRealmImport</code></td>___HTM LTAG_108___<code>k8s.keycloak.org/v2alpha1</code></td><td>レルム設定をインポートしますJSON</td></tr>
</tbody>
</table>

<h2 id="2-installing-keycloak-operator"><strong>2. Keycloak Operator のインストール</strong></h2>

<h3 id="21-method-1-kubectl-apply-manifests"><strong>2.1 方法 1: kubectl apply (マニフェスト)</strong></h3>

___プレコード_1___

<h3 id="22-method-2-olm-operator-lifecycle-manager"><strong>2.2 方法 2: OLM (オペレーター ライフサイクル マネージャー)</strong></h3>

___プレコード_2___

<h3 id="23-method-3-helm-chart"><strong>_2.3 方法 3: Helm チャート</strong></h3>

___プレコード_3___

<h2 id="3-keycloak-cr-configuration"><strong>3. Keycloak CR 設定</strong></h2>

<h3 id="31-basic-keycloak-cr"><strong>3.1 基本的な Keycloak CR</strong></h3>___プレコード_4___

<h3 id="32-supporting-resources"><strong>_3.2 サポート リソース</strong></h3>

___プレコード_5___

<h3 id="33-keycloak-cr-status"><strong>3.3 Keycloak CR ステータス</strong></h3>

___プレコード_6___

<h2 id="4-keycloakrealmimport-cr"><strong>4. KeycloakRealmImport CR</strong></h2>

<h3 id="41-realm-import-configuration"><strong>4.1 レルムインポート構成</strong></h3>

___プレコード_7___

___プレコード_8___

<h3 id="42-realm-import-tu-file-json"><strong>4.2 JSON ファイルからのレルムのインポート</strong></h3>

___プレコード_9___

<h2 id="5-operator-upgrade-strategies"><strong>_5.オペレーターのアップグレード戦略</strong></h2>

___プレコード_10___

___プレコード_11___

<h2 id="6-monitoring-voi-prometheus-grafana"><strong>6. Prometheus + Grafana によるモニタリング</strong></h2>

<h3 id="61-enabling-metrics"><strong>_6.1 メトリクスの有効化</strong></h3>

___プレコード_12___

<h3 id="62-prometheus-servicemonitor"><strong>6.2 Prometheus ServiceMonitor</strong></h3>

___プレコード_13___

<h3 id="63-key-keycloak-metrics"><strong>6.3 Keycloakの主要なメトリクス</strong></h3><table>
<thead>
<tr><th>指標_</th><th>タイプ</th><th>説明_</th></tr>
</thead>
<tbody>
<tr><td><code>keycloak_logins_total</code></td><td>Counter_</td><td>成功したログインの総数 (レルム、プロバイダー、クライアント ID 別)</td></tr>
<tr><td><code>keycloak_registrations_total</code></td><td>Counter</td><td>ユーザー登録総数</td></tr>
<tr><td><code>keycloak_failed_login_attempts_total</code></td><td>_Counter_</td><td>失敗したログイン試行の合計 (エラーの種類別)</td></tr>
<tr><td><code>keycloak_request_duration_秒_</code></td><td>ヒストグラム</td><td>リクエスト期間の分布</td></tr>
<tr><td><code>keycloak_refresh_tokens_total</code></td><td>Counter</td><td>合計トークン更新数</td></tr>
<tr><td><code>keycloak_client_logins_total</code></td><td>_カウンター_</td><td>_クライアント認証情報ログイン</td></tr>
<tr><td><code>vendor_memory_heap_usage_bytes</code></td><td>Gauge</td><td>JVM ヒープ メモリ使用量</td></tr>
<tr><td><code>vendor_memory_non_heap_usage_bytes</code></td><td>_ゲージ</td><td>JVM 非ヒープ メモリ (メタスペース)</td></tr>_
<tr><td><code>vendor_cpu_processCpuLoad</code></td><td>ゲージ</td><td>JVM プロセス CPU 使用率</td></tr>
<tr><td><code>_vendor_gc_pause_秒_</code></td><td>概要</td><td>_GC一時停止期間</td></tr>
<tr><td><code>vendor_thread_count</code></td><td>ゲージ_</td><td>アクティブな JVM スレッド_</td></tr>
<tr><td><code>vendor_db_pool_active_count</code></td><td>ゲージ</td><td>アクティブなデータベース接続</td></tr>
<tr><td><code>vendor_db_pool_available_count</code></td><td>ゲージ</td><td>利用可能なデータベース接続</td></tr>
</tbody>
</table>

<h3 id="64-grafana-dashboards"><strong>_6.4 Grafana ダッシュボード</strong></h3>

___プレコード_14___

<h3 id="65-alerting-rules"><strong>_6.5 アラート ルール</strong></h3>___プレコード_15___

<h2 id="7-admin-cli-kcadmsh"><strong>7.管理 CLI (kcadm.sh)</strong></h2>

<h3 id="71-authentication"><strong>7.1 認証</strong></h3>

___プレコード_16___

<h3 id="72-realm-operations"><strong>_7.2 レルム操作</strong></h3>

___プレコード_17___

<h3 id="73-user-operations"><strong>7.3 ユーザー操作_</strong></h3>

___プレコード_18___

<h3 id="74-client-operations"><strong>_7.4 クライアント操作_</strong></h3>

___プレコード_19___

<h3 id="75-role-operations"><strong>7.5 役割の操作</strong></h3>

___プレコード_20___

<h3 id="76-group-operations"><strong>7.6 グループ操作</strong></h3>

___プレコード_21___

<h3 id="77-identity-provider-operations"><strong>_7.7 ID プロバイダーの操作</strong></h3>

___プレコード_22___

<h3 id="78-authentication-flow-management"><strong>7.8 認証フロー管理</strong></h3>

___プレコード_23___

<h3 id="79-component-management"><strong>7.9 コンポーネント管理</strong></h3>

___プレコード_24___

<h3 id="710-export-import-va-scripting"><strong>_7.10 エクスポート/インポートおよびスクリプト</strong></h3>

___プレコード_25___

___プレコード_26___

<h2 id="8-backup-strategies-cho-kubernetes"><strong>8。 Kubernetes のバックアップ戦略</strong></h2>

<h3 id="81-database-backup"><strong>_8.1 データベースのバックアップ</strong></h3>

___プレコード_27___

<h3 id="82-realm-export-backup"><strong>8.2 レルム エクスポートのバックアップ</strong></h3>

___プレコード_28___

<h3 id="83-velero-backup-cho-kubernetes"><strong>8.3 Kubernetes の Velero バックアップ</strong></h3>

___プレコード_29___

<h2 id="9-complete-kubernetes-deployment"><strong>_9. Kubernetes の導入を完了</strong></h2>

<p>以下は、Kubernetes に Keycloak を完全にデプロイするために必要なマニフェストのすべてです:</p>

___プレコード_30___

___プレコード_31___