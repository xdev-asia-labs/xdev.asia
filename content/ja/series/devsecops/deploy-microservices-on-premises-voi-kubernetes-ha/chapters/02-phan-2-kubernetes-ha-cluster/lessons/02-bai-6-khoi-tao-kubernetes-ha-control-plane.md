---
id: 019e1a00-aa01-7001-c001-k8sha000202
title: 'レッスン 6: 最初の Kubernetes HA コントロール プレーンの初期化'
slug: bai-6-khoi-tao-kubernetes-ha-control-plane
description: HA トポロジ用の kubeadm-config.yaml を作成し、VIP としてコントロール プレーン エンドポイントを使用して master1 で kubeadm init を実行し、証明書を処理し、kubeconfig をコピーして、最初のクラスターのステータスを確認します。
duration_minutes: 150
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai06-ha-control-plane.png
sort_order: 6
section_title: 'パート 2: kubeadm を使用した Kubernetes HA クラスター'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8567" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8567)"/>

  <!-- Decorations -->
  <g>
    <circle cx="840" cy="210" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1080" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="70" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1060" cy="130" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="170" x2="1100" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="200" x2="1050" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="941.650635094611,107.5 941.650635094611,132.5 920,145 898.349364905389,132.5 898.349364905389,107.5 920,95" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — レッスン 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 6: Kubernetes HA コントロールの初期化</tspan>
      <tspan x="60" dy="42">最初の面</tspan>
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
<li>✅ HA トポロジ用の kubeadm 構成ファイルを作成__HTMLTAG_73___
<li>✅ 最初のコントロール プレーンが正常に初期化されました</li>
<li>✅ 証明書の構造と証明書のローテーションを理解する__HTMLTAG_77___
<li>✅ kubeconfig をコピーし、kubectl を使用してクラスターにアクセス</li>
<li>✅ スタック型 etcd トポロジと外部 etcd</li> の理解
</ul>

<hr>

<h2 id="phan-1-ha-topologies">パート 1: KUBERNETES HA トポロジー</h2>

<h3 id="11-stacked-etcd-vs-external-etcd">1.1.スタック etcd と外部 etcd</h3>

**オプション A: スタック etcd** (ほとんどの場合に推奨)

___コードブロック_0___

> ✅ 少数のサーバー · ✅ シンプル · ❌ etcd + API の結合

**オプション B: 外部 etcd**

___コードブロック_1___

> ✅ 分離 · ✅ 独立したスケーリング · ❌ 6 台のサーバーが必要

<p>👉 <strong>このコースにはスタック etcd</strong> を選択します。シンプルで、ほとんどの実稼働ワークロードに十分です。外部 etcd は、非常に大規模なクラスター (100 ノード以上) の場合にのみ必要です。</p>

<hr>

<h2 id="phan-2-kubeadm-config">パート 2: KUBEADM 構成の作成</h2>

<h3 id="21-kubeadm-config-yaml">2.1. kubeadm-config.yaml の詳細</h3>
___コードブロック_2___

<h3 id="22-giai-thich-cac-tham-so-quan-trong">2.2.重要なパラメータの説明</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>パラメータ</th>
<th>値</th>
<th>意味</th>
</tr>
</thead>
<tbody>
<tr>
<td>controlPlaneEndpoint</td>
<td>10.10.20.100:6443</td>
<td>HAProxy VIP — すべてのコンポーネントはここ経由で接続</td>
</tr>
<tr>
<td>podSubnet</td>
<td>10.244.0.0/16</td>
<td>ポッド IP の CIDR (最大 65,534 ポッド)</td>
</tr>
<tr>
<td>サービスサブネット</td>
<td>10.96.0.0/12</td>
<td>ClusterIP サービスの CIDR (1,048,574 IP)</td>
</tr>
<tr>
<td>モード: ipvs</td>
<td>kube-proxy</td>
<td>IPVS 負荷分散 (サービスが多い場合は iptables よりも優れています)</td>
</tr>
<tr>
<td>strictARP: true</td>
<td>kube-proxy</td>
<td>_MetalLB L2 モードに必要</td>
</tr>
<tr>
<td>cgroupドライバー: systemd</td>
<td>kubelet</td>
<td>containerd SystemdCgroup = true</td> と一致します
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>⚠️ <strong>CRITICAL:</strong> <code>controlPlaneEndpoint</code> master1 の IP ではなく、VIP (HAProxy) を指さなければなりません。これは HA の重要な要素です。</p>

<hr>

<h2 id="phan-3-kubeadm-init">パート 3: クラスターの初期化</h2>

<h3 id="31-tao-audit-log-directory">3.1.監査ログ ディレクトリを作成</h3>
___コードブロック_3___

<h3 id="32-chay-kubeadm-init">3.2. kubeadm init</h3> を実行します。
___コードブロック_4___

<p>⚠️ <strong>すぐに呼び出します:</strong></p>
<ul>
<li><code>--token</code>: 結合ノードに使用されます (24 時間後に期限切れになります)</li>
<li><code>--discovery-token-ca-cert-hash</code>: CA 証明書の SHA256 ハッシュ</li>
<li><code>--certificate-key</code>: コントロール プレーン ノードに参加するために使用されます (2 時間後に期限切れになります)</li>
</ul>

<h3 id="33-setup-kubeconfig">3.3. kubeconfig</h3> のセットアップ
___コードブロック_5___

<hr>

<h2 id="phan-4-certificates-deep-dive">パート 4: 証明書の構造</h2>

<h3 id="41-kien-truc-certificates">4.1.アーキテクチャ証明書_</h3>
___コードブロック_6___

<h3 id="42-kiem-tra-certificate-expiry">4.2.証明書の有効期限を確認</h3>
___コードブロック_7___

<hr>

<h2 id="phan-5-verify-ha-readiness">パート 5: 準備状況を確認</h2>

<h3 id="51-kiem-tra-api-server-qua-vip">5.1. VIP 経由で API サーバーを確認</h3>
___コードブロック_8___

<h3 id="52-luu-join-commands">5.2.結合コマンドの保存 (重要!)</h3>
___コードブロック_9___

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>controlPlaneEndpoint</strong> は、特定の IP ではなく、VIP (HAProxy) を指す必要があります</li>
<li><strong>_スタックされた etcd</strong>ほとんどのデプロイメントに十分、etcd はコントロール プレーンで実行されます</li>
<li><strong>--upload-certs</strong> フラグは、コントロール プレーンに参加するための証明書を自動的に配布します</li>
<li><strong>_トークンの有効期限は 24 時間です</strong>、証明書キーの有効期限は 2 時間です — すぐに保存してノードに参加する必要があります</li>
<li><strong>kube-proxy の ipvs モード + strictARP</strong> は MetalLB</li> の要件です
<li><strong>CNI (Cilium) をインストールする前はノードのステータス NotReady</strong> は正常</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: コントロール プレーンの初期化__HTMLTAG_243___
<ul>
<li>master1 に kubeadm-config.yaml を作成</li>
<li>kubeadm init --config --upload-certs</li> を実行します。
<li>kubeconfig をセットアップし、kubectl がノードを取得することを確認</li>
<li>結合コマンドを呼び出します</li>
</ul>

<h3 id="bt2">演習 2: 証明書を確認する</h3>
<ul>
<li>/etc/kubernetes/pki/</li> 内のすべての証明書をリストします
<li>kubeadm certs check-expiration を実行</li>
<li>VIP 経由で API サーバーを確認します:curl -sk https://VIP:6443/healthz</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_268___レッスン 7: コントロール プレーンとワーカー ノードの結合</strong>では、master2、master3 を HA コントロール プレーンに結合し、ワーカー ノードをクラスターに結合します。</p>