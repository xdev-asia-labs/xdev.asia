---
id: 019c9618-0003-7000-8000-c1147ba22e10
title: 'レッスン 4: 実践 — クラスターとツールのセットアップ'
slug: thuc-hanh-1-thiet-lap-cluster-va-cong-cu
description: '最初の実践: cgroup v2 をテストし、containerd 2.0 をインストールし、kind/k3d でクラスターを作成し、k9s とヘッドランプをインストールして構成します。基本的な kubectl コマンドに慣れてください。'
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: 'モジュール 1: 概要と Kubernetes アーキテクチャ'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8810" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8810)"/>

  <!-- Decorations -->
  <g>
    <circle cx="813" cy="89" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="1026" cy="282" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="739" cy="215" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="952" cy="148" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="665" cy="81" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="99" x2="1100" y2="179" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="129" x2="1050" y2="199" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1078.444863728671,232 1078.444863728671,266 1049,283 1019.555136271329,266 1019.555136271329,232 1049,215" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 4: 実践 — クラスターと</tspan> のセットアップ
      <tspan x="60" dy="42">ツール</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 1: 概要とKubernetes アーキテクチャ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>実践 1: クラスターのセットアップとツール</h2>

<p>これは、コースの最初の演習です。目標は、これまでのレッスンで得た理論的な知識を実践的なスキルに変えることです。システムのテストからダッシュボードのデプロイ、クラスター検出コマンドの実行に至るまで、完全な Kubernetes 環境を自分で構築します。</p>

<p><strong>推定時間</strong>: 120 分 (Linux/ターミナルに慣れている場合は、より速くなる可能性があります)</p>

<p><strong>演習の出力</strong>:</p>
<ul>
  <li>ローカル マシン上で実行される 3 ノード Kubernetes クラスター (1 つのコントロール プレーン + 2 つのワーカー)</li>
  <li>CLI ツールのフルセット: kubectl、k9s、kubectx/kubens、stern</li>
  <li>ヘッドランプ ダッシュボードが実行中でアクセス可能</li>
  <li>一般的に使用される kubectl コマンドに関する知識</li>
</ul>

<h2>前提条件の確認</h2>

___コードブロック_0___

<p>続行する前に、上記のスクリプトを実行し、すべての要件が満たされていることを確認してください。</p>

<h2>_ラボ 1:containerd 2.0 のインストールと種類クラスターの作成</h2>

<h3>ステップ 1: Docker エンジンをインストールする (まだ利用できない場合)</h3>

<p>kind と k3d の両方を実行するには Docker が必要です。 macOS では、Docker Desktop をインストールします。 Linux の場合:</p>

___コードブロック_1___

<h3>ステップ 2: kind のインストールとクラスターの作成</h3>

___コードブロック_2___

<p><strong>_<code>kubectl get nodes</code></strong>:</p> の予想される出力

___コードブロック_3___

<h3>ステップ 3: kubectl__HTMLTAG_108___ をインストールする

___コードブロック_4___

<h3>チェックポイント ラボ 1</h3>

___コードブロック_5___

<h2>ラボ 2: CLI ツールのインストール</h2>

<h3>_ステップ 1: k9s をインストール</h3>

___コードブロック_6___<p>k9s が開いたら、次の操作を実行します:</p>

___コードブロック_7___

<h3>ステップ 2: kubectx と kubens をインストールする</h3>

___コードブロック_8___

<h3>ステップ 3: stern をインストールする</h3>

___コードブロック_9___

<h3>ステップ 4: bash/zsh 補完とエイリアスのセットアップ</h3>

___コードブロック_10___

<h2>_ラボ 3: ヘッドランプ ダッシュボードの展開__HTMLTAG_124___

<h3>ステップ 1: Helm をインストールする</h3>

___コードブロック_11___

<h3>ステップ 2: ヘッドランプを展開する</h3>

___コードブロック_12___

<h3>ステップ 3: アクセス トークンの作成</h3>

___コードブロック_13___

<h3>_ステップ 4: ヘッドランプにアクセス</h3>

___コードブロック_14___

<p>ブラウザを開いて__HTMLTAG_134___http://localhost:4466</code>にアクセスします。トークンを貼り付けてログインします。探索:</p>
<ul>
  <li>ノード: リソースの使用状況、ラベル、テイントを表示</li>
  <li>ワークロード > ポッド: すべてのポッド、ログ、ターミナルを表示__HTMLTAG_141___
  <li>Config > ConfigMap、シークレット</li>
  <li>クラスター > ネームスペース</li>
</ul>

<h2>_ラボ 4: 基本的な kubectl の探索__HTMLTAG_148___

<h3>4.1.クラスターを探索</h3>

___コードブロック_15___

<h3>4.2.最初のポッドの作成</h3>

___コードブロック_16___

<h3>4.3. Deployment</h3> を使用してアプリケーションをデプロイします。

___コードブロック_17___

<h3>4.4. stern を使用してログを表示</h3>

___コードブロック_18___

<h3>4.5。リソース使用量の分析</h3>

___コードブロック_19___

<h2>トラブルシューティング ガイド: 一般的なエラー__HTMLTAG_160___

<h3>エラー 1: ノードは NotReady 状態です</h3>

___コードブロック_20___

<h3>_エラー 2: ポッドが保留中でスタック__HTMLTAG_164___

___コードブロック_21___

<h3>エラー 3: CrashLoopBackOff</h3>

___コードブロック_22___

<h3>エラー 4: ImagePullBackOff</h3>

___コードブロック_23___

<h3>エラー 5: 種類クラスターを作成できません</h3>

___コードブロック_24___

<h2>研究室のクリーンアップ</h2>

___コードブロック_25___

<h2>演習の概要</h2>

<p>この演習では、</p> を完了しました。

<ul>
  <li>前提条件を確認してください (cgroup v2、Docker、ディスク容量)</li>
  <li>kind を使用して 3 ノード Kubernetes クラスターを作成し、nftables モードを構成する</li>
  <li>ツールセットのインストール: kubectl、k9s、kubectx/kubens、stern</li>
  <li>ヘッドランプ ダッシュボードを展開してアクセス</li>
  <li>kubectl コマンドの練習: get、describe、log、exec、scale、rollout</li>
  <li>保留中のポッド、CrashLoopBackOff、ImagePullBackOff のトラブルシューティングに慣れる</li>
</ul>

<p>次の記事から、デプロイメントの最も基本的な単位である__HTMLTAG_192___ポッド</strong>から始めて、Kubernetes オブジェクトについて詳しく説明します。</p>