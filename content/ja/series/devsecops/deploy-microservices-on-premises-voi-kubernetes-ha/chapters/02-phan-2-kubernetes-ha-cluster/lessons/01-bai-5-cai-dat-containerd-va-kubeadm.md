---
id: 019e1a00-aa01-7001-c001-k8sha000201
title: 'レッスン 5: すべてのノードにコンテナーと Kubeadm をインストールする'
slug: bai-5-cai-dat-containerd-va-kubeadm
description: cri プラグイン、crictl、kubeadm、kubelet、kubectl の最新バージョンを含むcontainerd 2.xをインストールします。 systemd cgroup ドライバーを使用するようにcontainerdを構成し、クラスターを開始する前にサンドボックスイメージをプルしてテストします。
duration_minutes: 100
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 2: kubeadm を使用した Kubernetes HA クラスター'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2127" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2127)"/>

  <!-- Decorations -->
  <g>
    <circle cx="942" cy="96" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="784" cy="118" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="626" cy="140" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="968" cy="162" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="810" cy="184" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="116" x2="1100" y2="196" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="146" x2="1050" y2="216" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="992.8467875173176,150.5 992.8467875173176,181.5 966,197 939.1532124826824,181.5 939.1532124826824,150.5 966,135" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 5:</tspan> にコンテナーと KBEADM をインストールする
      <tspan x="60" dy="42">すべてのノード</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: kubeadm を使用した Kubernetes HA クラスター__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_68___
<p>このレッスンを完了すると、次のことができるようになります:</p>
<ul>
<li>✅ CRI プラグインを使用してcontainerd コンテナー ランタイムをインストール</li>
<li>✅ systemd cgroup driver__HTMLTAG_75___ を使用してcontainerdを構成する
<li>✅ 公式リポジトリから kubeadm、kubelet、kubectl をインストール</li>
<li>✅ コンテナーをデバッグするために crictl をインストールする__HTMLTAG_79___
<li>✅ サンドボックス画像を事前にプルし、すべての準備が整っていることを確認します</li>
</ul>

<hr>

<h2 id="phan-1-container-runtime">パート 1: コンテナ ランタイム — コンテナを使用する理由</h2>

<h3 id="11-lich-su-container-runtime">1.1. K8s のコンテナ ランタイムの歴史</h3>
___コードブロック_0___

<h3 id="12-containerd-vs-cri-o">1.2。コンテナー対 CRI-O</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>基準</th>
<th>コンテナ</th>
<th>CRI-O</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>メンテナ</strong></td>
<td>CNCF (Docker/Moby オリジン)</td>
<td>CNCF (Red Hat オリジン)</td>
</tr>
<tr>
<td><strong>採用</strong></td>
<td>非常に広い (デフォルトの EKS、GKE、AKS)</td>
<td>OpenShift、RHEL 中心</td>
</tr>
<tr>
<td><strong>特徴</strong></td>
<td>多目的 (Docker CLI 互換)</td>
<td>K8s のみ (軽量)</td>
</tr>
<tr>
<td><strong>イメージのビルド</strong></td>
<td>nerdctl/buildkit 経由でサポート</td>
<td>いいえ (podman/buildah が必要)</td>
</tr>
<tr>
<td><strong>_安定性</strong></td>
<td>非常に安定しています</td>
<td>安定</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>👉 <strong>コンテナを選択:</strong> 最も人気があり、多くのドキュメントがあり、すべての K8 ディストリビューションと互換性があります。</p>

<hr>

<h2 id="phan-2-cai-dat-containerd">パート 2: コンテナのセットアップ</h2>

<h3 id="21-cai-dat-tu-docker-repository">2.1. Docker 公式リポジトリからインストール</h3>
___コードブロック_1___

<h3 id="22-cau-hinh-containerd">2.2.コンテナーの構成</h3>
___コードブロック_2___

<p>🔬 <strong>詳細 — SystemdCgroup = true である理由</strong></p>
___コードブロック_3___

<h3 id="23-cau-hinh-containerd-chi-tiet">2.3.詳細なcontainerd構成(オプションのチューニング)</h3>
___コードブロック_4___

<h3 id="24-restart-containerd">2.4.再起動してcontainerd</h3>を確認する
___コードブロック_5___

<hr>

<h2 id="phan-3-cai-dat-crictl">パート 3: CRICTL セットアップ</h2>

<h3 id="31-crictl-la-gi">3.1. crictl とは何ですか?</h3>
<p>crictl は、CRI 互換コンテナ ランタイム用の CLI ツールです。 docker CLI に似ていますが、CRI 用:</p>

___コードブロック_6___

<h3 id="32-cau-hinh-crictl">3.2. Crictl 構成</h3>
___コードブロック_7___

<hr>

<h2 id="phan-4-cai-dat-kubeadm-kubelet-kubectl">パート 4: KBEADM、KUBELET、KUBECTL のインストール</h2>

<h3 id="41-them-kubernetes-repository">4.1. Kubernetes リポジトリの追加</h3>
___コードブロック_8___

<h3 id="42-enable-kubelet">4.2. kubelet</h3> を有効にする
___コードブロック_9___

<h3 id="43-kubectl-bash-completion">4.3. kubectl Bash の完了</h3>
___コードブロック_10___

<hr>

<h2 id="phan-5-pre-pull-images">パート 5: プレプル画像</h2>

<h3 id="51-pull-k8s-images-truoc">5.1. init</h3> の前に K8s イメージをプルします
___コードブロック_11___

<p>💡 <strong>ヒント:</strong> ノードがインターネットにアクセスできない場合は、インターネットのあるマシンでイメージをプルし、tar にエクスポートしてから、ノードにインポートします:</p>
___コードブロック_12___

<hr>

<h2 id="phan-6-pre-flight-check">パート 6: フライト前チェック</h2>

<h3 id="61-kubeadm-preflight">6.1. kubeadm プリフライト チェック</h3>
___コードブロック_13___

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>containerd</strong> は、Docker 公式リポジトリ</li> からインストールされる標準コンテナ ランタイムです。
<li><strong>SystemdCgroup = true</strong> は必須です — kubelet cgroup driver</li> と一致する必要があります
<li><strong>kubeadm、kubelet、kubectl</strong> を pkgs.k8s.io からインストールしてから、__HTMLTAG_222___apt-markhold</code> して自動アップグレードを回避します</li>
<li><strong>イメージの事前プル</strong> は、クラスターの初期化時間を節約します。エアギャップ環境では特に重要です</li>
<li><strong>プリフライトチェック</strong>は、kubeadm init</li>を実行する前に問題を検出するのに役立ちます
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">_演習 1: すべてのノードにインストール__HTMLTAG_238___
<ul>
<li>containerd + kubeadm を 6 つのノードすべて (マスター 3 個 + ワーカー 3 個) にインストール</li>
<li>ノードごとに SystemdCgroup = true を確認</li>
<li>3 つのマスター ノードで K8s イメージを事前プル</li>
<li>プリフライト チェック スクリプトを実行し、すべてが PASS</li> であることを確認します。
</ul>

<h3 id="bt2">_演習 2: エアギャップ画像転送</h3>
<ul>
<li>K8s イメージを tar ファイルにエクスポート</li>
<li>_インターネットのないノードに転送__HTMLTAG_255___
<li>利用可能な画像をインポートして確認</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_263___レッスン 6: 最初の Kubernetes HA コントロール プレーンの初期化__HTMLTAG_264___ では、HA 構成を使用して master1 で kubeadm init を実行し、クラスター証明書と kubeconfig を作成します。</p>