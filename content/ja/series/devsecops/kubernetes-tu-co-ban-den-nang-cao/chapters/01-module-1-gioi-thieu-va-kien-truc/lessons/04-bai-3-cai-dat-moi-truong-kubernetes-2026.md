---
id: 019c9618-0002-7000-8000-c1147ba22e10
title: 'レッスン 3: Kubernetes 2026 の環境セットアップ'
slug: bai-3-cai-dat-moi-truong-kubernetes-2026
description: Containerd 2.0、cgroup v2、kind/k3d を使用して Kubernetes 2026 環境をインストールする手順。 kubectl、k9s、kubectx/kubens、stern、および Headlamp ダッシュボードをインストールして、アーカイブされた Kubernetes ダッシュボードを置き換えます。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 3
section_title: 'モジュール 1: 概要と Kubernetes アーキテクチャ'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7152" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7152)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1004" cy="62" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="908" cy="246" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="812" cy="170" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="716" cy="94" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="620" cy="278" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="242" x2="1100" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="272" x2="1050" y2="342" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="974.0429399400242,123.5 974.0429399400242,160.5 942,179 909.9570600599758,160.5 909.9570600599758,123.50000000000001 942,105" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: 環境セットアップ KUBERNETES 2026</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 1: 概要とKubernetes アーキテクチャ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>Kubernetes 環境設定 2026</h2>

<p>Kubernetes 2026 では、基盤となるテクノロジー スタックに重要な変更が加えられました。このレッスンでは、システム要件、containerd 2.0 のインストール、ローカル クラスターの作成から、最先端のダッシュボードと CLI ツールに至るまで、完全な Kubernetes 開発環境を構築する方法を説明します。</p>

<h2>1.システム要件 2026</h2>

<h3>1.1。最小ハードウェア</h3>

<ul>
  <li><strong>CPU</strong>: 4 コア (マルチノード クラスターを実行するには 8 コア以上を推奨)</li>
  <li><strong>RAM</strong>: 8 GB (16 GB 推奨)</li>
  <li><strong>ディスク</strong>: 50 GBの空き容量(SSD推奨)</li>
  <li><strong>OS</strong>: Linux カーネル 5.15 以降 (ローカル開発用の Ubuntu 22.04 以降、Debian 12 以降、RHEL 9 以降、または macOS 14 以降)</li>
</ul>

<h3>1.2。 cgroup v2</h3> をテストして確認する

<p>これは最も重要な__HTMLTAG_94___必須</strong>です。 Kubernetes 1.35 以降、cgroup v1 は非推奨になりました。 Kubernetes 1.36 以降は、cgroup v2 のみがサポートされます。</p>

___コードブロック_0___

<p><strong>cgroup v1</strong> を使用している場合、最も簡単な方法は OS:</p> をアップグレードすることです。

___コードブロック_1___

<p>Ubuntu 22.04 LTS 以降では、デフォルトで cgroup v2 が使用されます。追加の構成は必要ありません。</p>

<h2>2.コンテナー 2.0</h2> をインストールする

<p>containerd 2.0 は、ネイティブ cgroup v2 サポートと多くのパフォーマンス向上を備えた、Kubernetes 2026 の標準コンテナ ランタイムです。</p>

<h3>2.1. Ubuntu/Debian にインストール</h3>

___コードブロック_2___

<h3>2.2. Kubernetes 用のcontainerdの構成</h3>

___コードブロック_3___

<h3>2.3. crictl (CRI CLI ツール)</h3> のインストール___コードブロック_4___

<h2>3. Kubernetes をローカルにインストールする: Kind vs k3d vs Minikube</h2>

<h3>3.1.比較オプション_</h3>

<table>
  <thead>
    <tr>
      <th>ツール</th>
      <th>メカニズム__HTMLTAG_123___
      <th>利点</th>
      <th>欠点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>種類</strong></td>
      <td>K8s ノードは Docker コンテナ</td>
      <td>マルチノード、CI フレンドリー、安定</td>
      <td>Docker デスクトップ/エンジンが必要、k3d より遅い</td>
    </tr>
    <tr>
      <td><strong>_k3d</strong></td>
      Docker の <td>k3 (軽量 K8)__HTMLTAG_149___
      <td>最速、最軽量、簡単なマルチノード__HTMLTAG_151___
      <td>k3s は完全な K8s</td> といくつかの違いがあります
    </tr>
    <tr>
      <td><strong>_ミニクベ</strong></td>
      <td>VM または Docker ドライバー__HTMLTAG_161___
      <td>最も使いやすく、豊富なアドオン</td>
      <td>単一ノードのデフォルト、より多くのリソースを消費__HTMLTAG_165___
    </tr>
  </tbody>
</table>

<p><strong>_推奨 2026</strong>: CI/CD パイプラインおよび運用環境に近いマルチノード シナリオのテストに必要な場合は、__HTMLTAG_172___kind</strong> を使用します。迅速なローカル開発には <strong>k3d</strong> を使用してください。このレッスンでは両方について説明します。</p>

<h3>3.2. kind</h3> をインストールして使用する

___コードブロック_5___

<h3>3.3. k3d</h3> のインストールと使用

___コードブロック_6___

<h2>4. kubectl</h2> をインストールする

___コードブロック_7___

<h2>5.基本的な CLI ツール 2026</h2>

<h3>5.1. k9s — ターミナル UI ダッシュボード</h3>

<p>k9s は、Kubernetes 用のターミナルベースの UI です。クラスタ リソースのリアルタイム ビューを提供し、ナビゲーション、ログの表示、コンテナへの実行をすべてターミナルから実行できます。</p>

___コードブロック_8___

<h3>5.2. kubectx と kubens — コンテキストと名前空間の切り替え</h3>

<p>複数のクラスターと名前空間を操作する場合、__HTMLTAG_192___kubectx</code> および <code>kubens</code> は、迅速な切り替えに役立ちます。</p>

___コードブロック_9___

<h3>5.3. stern — マルチポッドのログ ストリーミング</h3>

<p>stern を使用すると、複数のポッドから同時にログをストリーミングしたり、正規表現でフィルタリングしたり、ポッドごとに色を表示したりできます。</p>

___コードブロック_10___

<h3>5.4. krew — kubectl プラグイン マネージャー</h3>

___コードブロック_11___

<h2>6.ダッシュボード 2026: ヘッドランプ</h2><p><strong>Kubernetes ダッシュボード</strong> (kubernetes/ダッシュボード) は <strong>2026 年 1 月にアーカイブされました</strong> — 公式プロジェクトは維持されなくなりました。現在推奨されている代替案は <strong>Headlamp</strong> です。これは、はるかに優れた UI/UX を備えた、積極的に保守されている最新の Web ベースのダッシュボードです。</p>

<h3>6.1.ヘッドランプとヘルムの取り付け</h3>

___コードブロック_12___

<h3>6.2.ログインするためのサービス アカウント トークンを構成</h3>

___コードブロック_13___

<h3>6.3.ヘッドランプの代替品</h3>

<ul>
  <li><strong>Lens / OpenLens</strong>: デスクトップ アプリケーション (Electron)、非常に人気があり、多くの機能があります。 OpenLens は、Lens のオープンソース フォークです。</li>
  <li><strong>k9s</strong>: ターミナル UI、Web ダッシュボードより高速</li>
  <li><strong>_Grafana</strong>: すでに Grafana スタックをお持ちの場合は、kubernetes プラグイン/ダッシュボードを使用してください</li>
  <li><strong>Rancher</strong>: 複数のクラスターを管理する場合の完全なプラットフォーム</li>
</ul>

<h2>7. IDE とエディタのセットアップ</h2>

<h3>7.1. Visual Studio コード</h3>

___コードブロック_14___

<p>_VS Code に必要な拡張機能:</p>
<ul>
  <li><strong>Kubernetes</strong> (ms-kubernetes-tools): YAML マニフェスト用 IntelliSense、クラスター エクスプローラー、IDE からのポート転送</li>
  <li><strong>YAML</strong> (redhat): スキーマ検証、Kubernetes スキーマを使用した YAML のオートコンプリート</li>
  <li><strong>Docker</strong>: Dockerfile 構文、イメージ管理</li>
</ul>

<h3>7.2. YAML スキーマ検証の構成</h3>

___コードブロック_15___

<h2>8。最初のコマンド: クラスターのアクティビティを確認する</h2>

<p>インストールが完了したら、次のコマンドを実行してクラスターが適切に動作することを確認します:</p>

___コードブロック_16___

<h2>9. kubeconfig と複数のクラスターの構成</h2>

___コードブロック_17___

<h2>10.設定チェックリストの概要</h2>

<p>以下は、環境の準備ができていることを確認するためのチェックリストです:</p>

___コードブロック_18___

<p>このレッスンを完了すると、Kubernetes を学習して実践するための完全な環境が整います。次の演習では、インストールされているすべてのものを適用して、最初の実際のアプリケーションをデプロイします。</p>