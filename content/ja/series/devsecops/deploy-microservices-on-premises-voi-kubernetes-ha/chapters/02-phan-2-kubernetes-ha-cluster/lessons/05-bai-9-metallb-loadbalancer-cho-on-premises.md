---
id: 019e1a00-aa01-7001-c001-k8sha000205
title: 'レッスン 9: METALLB — オンプレミスのロードバランサー'
slug: bai-9-metallb-loadbalancer-cho-on-premises
description: MetalLB をインストールすると、オンプレミス クラスター内のサービスに LoadBalancer IP が提供され、L2 モードと BGP モード、IPAddressPool が構成され、サービスが外部ネットワークに公開されます。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 2: kubeadm を使用した Kubernetes HA クラスター'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8155" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8155)"/>

  <!-- Decorations -->
  <g>
    <circle cx="951" cy="43" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="802" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="653" cy="225" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="1004" cy="56" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="147" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="173" x2="1100" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="203" x2="1050" y2="273" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="997.2487113059643,159 997.2487113059643,187 973,201 948.7512886940357,187 948.7512886940357,159 973,145" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: METALLB —</tspan> のロードバランサー
      <tspan x="60" dy="42">オンプレミス</tspan>
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
<li>✅ オンプレミス (クラウド LB なし) での LoadBalancer の問題を理解する</li>
<li>✅ Helm を使用して MetalLB をインストール</li>
<li>✅ IPAddressPool を使用して L2 モードを構成する</li>
<li>✅ 大規模データセンターの BGP モードを理解する__HTMLTAG_79___
<li>✅ LoadBalancer タイプのサービスを公開</li>
</ul>

<hr>

<h2 id="phan-1-van-de-loadbalancer">パート 1: オンプレミスのロードバランサーの問題</h2>

<h3 id="11-cloud-vs-on-prem">1.1.クラウドとオンプレミス</h3>
___コードブロック_0___

<hr>

<h2 id="phan-2-cai-dat-metallb">パート 2: METALLB のインストール</h2>

<h3 id="21-prerequisites">2.1.前提条件</h3>
___コードブロック_1___

<h3 id="22-install-metallb">2.2. Helm</h3> を使用して MetalLB をインストールする
___コードブロック_2___

<hr>

<h2 id="phan-3-l2-mode">パート 3: L2 モード設定</h2>

<h3 id="31-ip-address-pool">3.1. IPアドレスプール</h3>
___コードブロック_3___

___コードブロック_4___

<h3 id="32-l2-mode-hoat-dong">3.2. L2 モードはどのように機能しますか?</h3>
___コードブロック_5___

<hr>

<h2 id="phan-4-test-loadbalancer">パート 4: ロードバランサー サービスのテスト</h2>

<h3 id="41-deploy-test-app">4.1.テスト アプリケーションをデプロイ</h3>
___コードブロック_6___

<h3 id="42-test-access">4.2.外部からのアクセスをテスト</h3>
___コードブロック_7___

<h3 id="43-specify-ip-tu-pool">4.3.特定の IP</h3> を指定してください
___コードブロック_8___

<hr>

<h2 id="phan-5-bgp-mode">パート 5: BGP モード (大規模データセンター)</h2>

<h3 id="51-khi-nao-dung-bgp">5.1. BGP を使用するのはどのような場合ですか?</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>基準</th>
<th>L2 モード</th>
<th>BGP モード</th>
</tr>
</thead>
<tbody>
<tr>
<td>ルーターリクエスト</td>
<td>いいえ</td>
<td>BGP 対応ルーターが必要__HTMLTAG_135___
</tr>
<tr>
<td>フェイルオーバー</td>
<td>~10 秒__HTMLTAG_141___
<td>~3 秒</td>
</tr>
<tr>
<td>真の負荷分散</td>
<td>❌ (1 ノード ハンドル)</td>
<td>✅ ノード全体の ECMP__HTMLTAG_151___
</tr>
<tr>
<td>クロスサブネット</td>
<td>❌ 同じ L2 セグメント__HTMLTAG_157___
<td>✅ サブネット全体で動作__HTMLTAG_159___
</tr>
<tr>
<td>複雑さ</td>
<td>シンプル__HTMLTAG_165___
<td>ルーター設定が必要</td>
</tr>
<tr>
<td>最適</td>
<td>SMB、シングル ラック</td>
<td>大型 DC、マルチラック</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="52-bgp-config-example">5.2. BGP 構成例</h3>
___コードブロック_9___

<hr>

<h2 id="phan-6-ip-sharing">パート 6: IP 共有と高度な機能</h2>

<h3 id="61-ip-sharing">6.1.共有 IP (多くのサービスは 1 つの IP を使用します)</h3>
___コードブロック_10___

<h3 id="62-cleanup">6.2.クリーンアップ テスト</h3>
___コードブロック_11___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>MetalLB</strong> はオンプレミスの LoadBalancer を解決します — クラウド プロバイダーは必要ありません__HTMLTAG_196___
<li><strong>L2 モード</strong> シンプル、単一ラック/小規模クラスターに適しています</li>
<li><strong>BGP モード</strong>、ECMP 真のロード バランシングを備えた大規模なマルチラック データセンター向け</li>
<li><strong>IPAddressPool</strong>はIP範囲を管理し、多くのプール(外部、内部)を作成できます</li>
<li><strong>IP 共有</strong> により、複数のサービスが同じ外部 IP</li> を共有できるようになります
<li><strong>strictARP: kube-proxy の true</strong> は L2 モードの要件です</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: MetalLB をインストールする</h3>
<ul>
<li>Helm を使用して MetalLB をインストール</li>
<li>適切な IP 範囲のラボで IPAddressPool を作成する</li>
<li>サービス タイプ LoadBalancer をデプロイし、外部 IP を確認します</li>
</ul>

<h3 id="bt2">_演習 2: 複数のプール__HTMLTAG_232___
<ul>
<li>2 つのプールを作成します: 外部プールと内部プール</li>
<li>2 つのサービスをデプロイします。各サービスは異なるプールを使用します</li>
<li>同じ IP ポートを持つ 2 つのサービスで IP 共有をテスト</li>
</ul>

<hr><h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_245___レッスン 10: etcd — 操作、バックアップ、災害復旧</strong> では、etcd の操作、バックアップ戦略、復元手順について詳しく説明します。</p>