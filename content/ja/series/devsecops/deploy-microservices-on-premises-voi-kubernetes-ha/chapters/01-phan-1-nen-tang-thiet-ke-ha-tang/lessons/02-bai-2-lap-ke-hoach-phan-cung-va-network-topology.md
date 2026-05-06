---
id: 019e1a00-aa01-7001-c001-k8sha000102
title: 'レッスン 2: ハードウェアとネットワーク トポロジの計画'
slug: bai-2-lap-ke-hoach-phan-cung-va-network-topology
description: 'コントロール プレーン、ワーカー ノード、ストレージ ノードの CPU/RAM/ディスクを計算します。ネットワーク トポロジの設計: 管理ネットワーク、クラスター ネットワーク、ストレージ ネットワーク、外部ネットワーク。実稼働用の VLAN、ボンディング、MTU サイジング。'
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'パート 1: オンプレミスのプラットフォームとインフラストラクチャの設計'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4678" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4678)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1069" cy="217" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1038" cy="106" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1007" cy="255" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="976" cy="144" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="945" cy="33" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="87" x2="1100" y2="167" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="117" x2="1050" y2="187" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="973.3730669589464,116 973.3730669589464,158 937,179 900.6269330410536,158 900.6269330410536,116.00000000000001 937,95" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — レッスン 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 2: ハードウェアとネットワークの計画</tspan>
      <tspan x="60" dy="42">トポロジー_</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: プラットフォームとオンプレミスのインフラストラクチャ設計</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_68___
<p>このレッスンを完了すると、次のことができるようになります:</p>
<ul>
<li>✅ 各タイプのノード (コントロール プレーン、ワーカー、ストレージ) の正確なサイズを計算</li>
<li>✅ VLAN 分離を使用した運用グレードのネットワーク トポロジの設計__HTMLTAG_75___
<li>✅ HA ネットワーク用の NIC ボンディングの構成</li>
<li>✅ 各ネットワーク セグメントに適切な MTU を理解して選択</li>
<li>✅ 実際のプロジェクトの完全なハードウェア計画を作成</li>
</ul>

<hr>

<h2 id="phan-1-sizing-control-plane-nodes">パート 1: コントロール プレーン ノードのサイズ設定</h2>

<h3 id="11-thanh-phan-chay-tren-control-plane">1.1.コントロール プレーンで実行されるコンポーネント</h3>

___コードブロック_0___

<h3 id="12-tinh-toan-resources-cho-control-plane">1.2。コントロール プレーンのリソースの計算</h3>

<h4 id="etcd-la-thanh-phan-critical-nhat">etcd は最も重要な要素__HTMLTAG_91___
<p>etcd のパフォーマンスは主にディスク I/O に依存します。 etcd ドキュメントのサイズ設定ガイドラインは次のとおりです:</p><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>クラスター サイズ</th>
<th>ノード</th>
<th>ポッド</th>
<th>etcd CPU</th>
<th>etcd RAM</th>
<th>etcd ディスク_</th>
<th>ディスク タイプ</th>
</tr>
</thead>
<tbody>
<tr>
<td>小</td>
<td>&lt; 10</td>
<td>&lt; 500</td>
<td>2 コア</td>
<td>4GB</td>
<td>50GB</td>
<td>SSD</td>
</tr>
<tr>
<td>中</td>
<td>10-50</td>
<td>500-5000</td>
<td>4 コア</td>
<td>8GB</td>
<td>100GB</td>
<td>NVMe SSD_</td>
</tr>
<tr>
<td>大</td>
<td>50-100</td>
<td>5000+</td>
<td>8 コア</td>
<td>16GB</td>
<td>200GB</td>
<td>NVMe SSD_</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>⚠️ <strong>重要:</strong> etcd にはディスク遅延が必要です p99 < 10ms. Dùng NVMe SSD chuyên dụng cho etcd.</p>

<h4 id="kube-apiserver-sizing">kube-apiserver のサイジング</h4>
___コードブロック_1___

<h4 id="tong-hop-control-plane-node">コントロール プレーン ノードのサイジングの合成</h4><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>コンポーネント</th>
<th>CPU リクエスト</th>
<th>CPU 制限</th>
<th>RAM リクエスト</th>
<th>RAM 制限</th>
</tr>
</thead>
<tbody>
<tr>
<td>kube-apiserver__HTMLTAG_193___
<td>250m</td>
<td>2000m</td>
<td>512Mi</td>
<td>4Gi</td>
</tr>
<tr>
<td>etcd</td>
<td>500m</td>
<td>4000m</td>
<td>1Gi</td>
<td>8Gi</td>
</tr>
<tr>
<td>kube-scheduler</td>
<td>100m</td>
<td>500m</td>
<td>128Mi</td>
<td>512Mi</td>
</tr>
<tr>
<td>kube-コントローラーマネージャー</td>
<td>200m</td>
<td>1000m</td>
<td>256Mi</td>
<td>1Gi</td>
</tr>
<tr>
<td>kubelet + コンテナd</td>
<td>200m</td>
<td>500m</td>
<td>256Mi</td>
<td>1Gi</td>
</tr>
<tr>
<td>Cilium エージェント_</td>
<td>100m</td>
<td>500m</td>
<td>256Mi</td>
<td>1Gi</td>
</tr>
<tr>
<td>OS オーバーヘッド</td>
<td>500m</td>
___HTMLTAG_268__-</td>
<td>1Gi</td>
<td>_-</td>
</tr>
<tr>
<td><strong>_合計</strong></td>
<td><strong>_~2 コア_</strong></td>
<td><strong>~8 コア</strong></td>
<td><strong>~3.5Gi</strong></td>
<td><strong>~16Gi</strong></td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>💡 <strong>制作に関する推奨事項:</strong></p>
___コードブロック_2___

<hr>

<h2 id="phan-2-sizing-worker-nodes">パート 2: ワーカー ノードのサイズ設定</h2>

<h3 id="21-tinh-toan-tu-workload">2.1.ワークロード要件から計算</h3>

<p>ワーカー ノードを計算する式:</p>
___コードブロック_3___

<h3 id="22-sizing-guidelines-theo-quy-mo">2.2.サイズ別のサイズガイドライン</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>スケール</th>
<th>サービス</th>
<th>労働者</th>
<th>CPU/ノード</th>
<th>RAM/ノード</th>
<th>ディスク/ノード</th>
</tr>
</thead>
<tbody>
<tr>
<td>小規模 (研究室)</td>
<td>5-10</td>
<td>3</td>
<td>8 コア</td>
<td>32GB</td>
<td>200GB SSD</td>
</tr>
<tr>
<td>中</td>
<td>10-30</td>
<td>5-8</td>
<td>16 コア</td>
<td>64GB</td>
<td>500GB NVMe</td>
</tr>
<tr>
<td>大</td>
<td>30-100</td>
<td>10-20</td>
<td>32 コア</td>
<td>128GB</td>
<td>1TB NVMe</td>
</tr>
<tr>
<td>XLarge</td>
<td>100+</td>
<td>20+</td>
<td>64 コア</td>
<td>256GB</td>
<td>2TB NVMe</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="23-system-reserved-resources">2.3.システム予約リソース</h3>
<p>Kubernetes は、各ノードのシステム コンポーネント用のリソースを予約する必要があります:</p>

___コードブロック_4___

___コードブロック_5___

<hr>

<h2 id="phan-3-sizing-storage-nodes">パート 3: ストレージ ノードのサイジング (CEPH)</h2>

<h3 id="31-ceph-components-tren-storage-nodes">3.1.ストレージ ノード上の Ceph コンポーネント</h3>
___コードブロック_6___

<h3 id="32-tinh-toan-storage-capacity">3.2.ストレージ容量の計算</h3>
___コードブロック_7___

<h3 id="33-sizing-ceph-osd-nodes">3.3. Ceph OSD ノードのサイジング</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>コンポーネント</th>
<th>サイズ設定ルール_</th>
<th>例 (ノードあたり 4 つの OSD)</th>
</tr>
</thead>
<tbody>
<tr>
<td>OSD あたりの CPU</td>
<td>OSD あたり 1 コア (分)</td>
<td>OSD 用の 4 コア</td>
</tr>
<tr>
<td>OSD ごとの RAM</td>
<td>OSD ごとに 5GB (BlueStore のデフォルト)</td>
<td>OSD 用 20GB</td>
</tr>
<tr>
<td>Ceph MON RAM</td>
<td>~2～4GB</td>
<td>4GB</td>
</tr>
<tr>
<td>システム + K8s</td>
<td>~4GB RAM、2 コア</td>
<td>4GB、2コア</td>
</tr>
<tr>
<td><strong>_ノードごとの合計</strong></td>
<td></td>
<td><strong>6 コア、28GB RAM</strong></td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>💡 <strong>推奨事項:</strong></p>
___コードブロック_8___<p>⚠️ <strong>重要な決定:</strong> 専用ストレージ ノード vs コンバージド (ワーカー + ストレージ)?</p>
___コードブロック_9___

<hr>

<h2 id="phan-4-network-topology-design">パート 4: ネットワーク トポロジの設計</h2>

<h3 id="41-4-networks-cho-production">4.1.本番用の 4 つのネットワーク</h3>

___コードブロック_10___

<h3 id="42-ip-planning">4.2. IP プランニングの詳細</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>ノード</th>
<th>管理 (VLAN 10)</th>
<th>クラスター (VLAN 20)</th>
<th>ストレージ (VLAN 30)</th>
<th>役割</th>
</tr>
</thead>
<tbody>
<tr>
<td>lb1</td>
<td>192.168.10.9</td>
<td>10.10.20.9</td>
___HTMLTAG_503__-</td>
<td>HAProxy/キープアライブプライマリ</td>
</tr>
<tr>
<td>lb2</td>
<td>192.168.10.10</td>
<td>10.10.20.10</td>
<td>_-</td>
<td>HAProxy/キープアライブバックアップ</td>
</tr>
<tr>
<td>VIP</td>
___HTMLTAG_523__-</td>
<td>10.10.20.100</td>
<td>-</td>
<td>K8s API サーバー VIP</td>
</tr>
<tr>
<td>マスター1</td>
<td>192.168.10.11</td>
<td>10.10.20.11</td>
___HTMLTAG_539__-</td>
<td>コントロール プレーン 1</td>
</tr>
<tr>
<td>マスター2</td>
<td>192.168.10.12</td>
<td>10.10.20.12</td>
<td>-</td>
<td>コントロール プレーン 2</td>
</tr>
<tr>
<td>マスター3</td>
<td>192.168.10.13</td>
<td>10.10.20.13</td>
___HTMLTAG_563__-</td>
<td>コントロール プレーン 3</td>
</tr>
<tr>
<td>worker1</td>
<td>192.168.10.21</td>
<td>10.10.20.21</td>
<td>_-</td>
<td>ワーカー ノード 1</td>
</tr>
<tr>
<td>worker2</td>
<td>192.168.10.22</td>
<td>10.10.20.22</td>
___HTMLTAG_587__-</td>
<td>ワーカー ノード 2</td>
</tr>
<tr>
<td>worker3</td>
<td>192.168.10.23</td>
<td>10.10.20.23</td>
<td>_-</td>
<td>ワーカー ノード 3</td>
</tr>
<tr>
<td>ストレージ1</td>
<td>192.168.10.31</td>
<td>10.10.20.31</td>
<td>10.10.30.31</td>
<td>Ceph OSD ノード 1</td>
</tr>
<tr>
<td>ストレージ2</td>
<td>192.168.10.32</td>
<td>10.10.20.32</td>
<td>10.10.30.32</td>
<td>Ceph OSD ノード 2</td>
</tr>
<tr>
<td>ストレージ3</td>
<td>192.168.10.33</td>
<td>10.10.20.33</td>
<td>10.10.30.33</td>
<td>Ceph OSD ノード 3</td>
</tr>
<tr>
<td>_メタルLBプール</td>
<td>-</td>
<td>_-</td>
___HTMLTAG_647__-</td>
<td>10.10.40.200-250</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html--><h3 id="43-nic-bonding-configuration">4.3. NIC ボンディング構成</h3>
<p>NIC ボンディング (LACP) は、リンク冗長性と帯域幅集約を提供します:</p>

___コードブロック_11___

___コードブロック_12___

<h3 id="44-mtu-sizing">4.4. MTU サイズ</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>ネットワーク</th>
<th>MTU</th>
<th>理由</th>
</tr>
</thead>
<tbody>
<tr>
<td>管理</td>
<td>1500</td>
<td>標準、すべてのデバイスと互換性</td>
</tr>
<tr>
<td>クラスター (K8s)</td>
<td>9000</td>
<td>ジャンボ フレームは CPU オーバーヘッドを削減し、スループットを向上させます__HTMLTAG_688___
</tr>
<tr>
<td>ストレージ (Ceph)</td>
<td>9000</td>
<td>Ceph OSD レプリケーションのパフォーマンスにとって重要__HTMLTAG_696___
</tr>
<tr>
<td>外部</td>
<td>1500</td>
<td>_インターネット接続トラフィックの標準__HTMLTAG_704___
</tr>
<tr>
<td>ポッド ネットワーク (Cilium)</td>
<td>8950</td>
<td>MTU アンダーレイ (9000) - VXLAN オーバーヘッド (50)</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>⚠️ <strong>ジャンボ フレーム要件:</strong> パス上のすべてのスイッチ ポートが MTU 9000 をサポートし、有効にする必要があります。展開する前にスイッチ管理者に確認してください。</p>

<hr>

<h2 id="phan-5-switch-va-firewall">パート 5: スイッチとファイアウォールの要件</h2>

<h3 id="51-switch-requirements">5.1.切り替え要件</h3>
___コードブロック_13___

<h3 id="52-firewall-rules">5.2.ネットワーク間のファイアウォール ルール</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>出典</th>
<th>目的地</th>
<th>ポート</th>
<th>プロトコル</th>
<th>目的</th>
</tr>
</thead>
<tbody>
<tr>
<td>管理</td>
<td>すべてのノード</td>
<td>22</td>
<td>TCP</td>
<td>SSH</td>
</tr>
<tr>
<td>外部</td>
<td>労働者/LB</td>
<td>80、443</td>
<td>TCP</td>
<td>HTTP/HTTPS イングレス</td>
</tr>
<tr>
<td>外部</td>
<td>マスター VIP</td>
<td>_6443</td>
<td>TCP</td>
<td>K8s API (外部が必要な場合)</td>
</tr>
<tr>
<td>クラスター</td>
<td>クラスター</td>
<td>6443</td>
<td>TCP</td>
<td>K8s API サーバー</td>
</tr>
<tr>
<td>クラスター</td>
<td>クラスター</td>
<td>2379-2380</td>
<td>TCP</td>
<td>etcd ピアとクライアント_</td>
</tr>
<tr>
<td>クラスター</td>
<td>クラスター</td>
<td>10250</td>
<td>TCP</td>
<td>kubelet API_</td>
</tr>
<tr>
<td>クラスター</td>
<td>クラスター</td>
<td>10259</td>
<td>TCP</td>
<td>kube-scheduler__HTMLTAG_827___
</tr>
<tr>
<td>クラスター</td>
<td>クラスター</td>
<td>10257</td>
<td>TCP</td>
<td>kube-コントローラーマネージャー</td>
</tr>
<tr>
<td>クラスター</td>
<td>クラスター</td>
<td>30000-32767</td>
<td>TCP</td>
<td>NodePort 範囲</td>
</tr>
<tr>
<td>クラスター</td>
<td>クラスター</td>
<td>4240、4244</td>
<td>TCP</td>
<td>繊毛の健康、ハッブル</td>
</tr>
<tr>
<td>クラスター</td>
<td>クラスター</td>
<td>8472</td>
<td>UDP</td>
<td>Cilium VXLAN</td>
</tr>
<tr>
<td>ストレージ</td>
<td>ストレージ</td>
<td>6789</td>
<td>TCP</td>
<td>Ceph MO_</td>
</tr>
<tr>
<td>ストレージ</td>
<td>ストレージ</td>
<td>6800-7300</td>
<td>TCP</td>
<td>Ceph OSD</td>
</tr>
<tr>
<td>クラスター</td>
<td>ストレージ</td>
<td>6789,6800-7300</td>
<td>TCP</td>
<td>Ceph クライアント アクセス</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html--><hr>

<h2 id="phan-6-disk-layout">パート 6: ディスクのレイアウトとパーティショニング__HTMLTAG_918___

<h3 id="61-control-plane-disk">6.1。コントロール プレーンのディスク レイアウト</h3>
___コードブロック_14___

<h3 id="62-worker-node-disk">6.2.ワーカー ノードのディスク レイアウト</h3>
___コードブロック_15___

<h3 id="63-storage-node-disk">6.3.ストレージ ノードのディスク レイアウト</h3>
___コードブロック_16___

<hr>

<h2 id="phan-7-bill-of-materials">パート 7: 部品表 (BOM)</h2>

<h3 id="71-bom-cho-production-medium">7.1。実稼働用の BOM (中 - 20 マイクロサービス)</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>#</th>
<th>コンポーネント</th>
<th>数量</th>
<th>仕様</th>
<th>役割</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>サーバー (コントロール プレーン)</td>
<td>3</td>
<td>8C/32GB/500GB NVMe、2×10GbE</td>
<td>K8s マスター</td>
</tr>
<tr>
<td>2</td>
<td>サーバー (ワーカー)</td>
<td>5</td>
<td>16C/64GB/500GB NVMe、2×25GbE</td>
<td>ワークロード ノード_</td>
</tr>
<tr>
<td>3</td>
<td>サーバー (ストレージ)</td>
<td>3</td>
<td>8C/64GB/500GB NVMe + 4×2TB NVMe、2×25GbE</td>
<td>Ceph OSD</td>
</tr>
<tr>
<td>4</td>
<td>サーバー (LB)</td>
<td>2</td>
<td>4C/8GB/100GB SSD、2×10GbE</td>
<td>HAProxy/キープアライブ</td>
</tr>
<tr>
<td>5</td>
<td>ToR スイッチ</td>
<td>2</td>
<td>48×25GbE + 8×100GbE アップリンク</td>
<td>ネットワーク</td>
</tr>
<tr>
<td>6</td>
<td>UPS</td>
<td>2</td>
<td>3kVA オンライン二重変換</td>
<td>電源保護</td>
</tr>
<tr>
<td>7</td>
<td>PDU</td>
<td>2</td>
<td>管理されたデュアル フィード</td>
<td>配電</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p><strong>合計:</strong> サーバー 13 台 + スイッチ 2 台 + 電源インフラストラクチャ</p>

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>コントロール プレーン</strong> には、etcd 用の NVMe SSD、8 コア以上、ノードあたり 16 ～ 32 GB の RAM が必要</li>
<li><strong>ワーカーのサイズ</strong> ポッド リクエストの合計 + 30% のバッファ + システム予約済みから計算</li>
<li><strong>Ceph ストレージ</strong>OSD ごとに 5GB RAM が必要、未フォーマットのディスク</li>
<li><strong>VLAN 別の 4 つの個別のネットワーク</strong>: 管理、クラスター、ストレージ、外部</li>
<li><strong>NIC ボンディング</strong> (LACP) リンク冗長性、ジャンボ フレーム 9000 クラスタ/ストレージ</li>
<li><strong>ディスク レイアウト:</strong> etcd には別のパーティションが必要、Ceph には生のブロック デバイスが必要</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習__HTMLTAG_1069___

<h3 id="bt1">演習 1: サイズの計算</h3>
<p>以下を含むシステムの場合:</p>
<ul>
<li>30 マイクロサービス、各サービス 2 レプリカ、平均 1 CPU/2GB RAM</li>
<li>PostgreSQL 3 ノード (それぞれ 4 CPU/8GB RAM)</li>
<li>Kafka 3 ブローカー (それぞれ 4 CPU/8GB RAM)</li>
<li>完全な可観測性スタック</li>
<li>データ保持: 90 日間のログ、1 年間の指標</li>
</ul>
<p>計算: ワーカー ノード、ストレージ ノードの数、必要な合計ディスク容量。</p>

<h3 id="bt2">演習 2: ネットワーク設計__HTMLTAG_1089___
<p>次の内容を含む、上記のシステムの詳細なネットワーク トポロジ図を描画します。</p>
<ul>
<li>各ネットワーク セグメントの VLAN 割り当て__HTMLTAG_1094___
<li>すべてのノードの IP 計画表__HTMLTAG_1096___
<li>NIC ボンディング トポロジ</li>
<li>ファイアウォール ルール マトリックス</li>
</ul>

<h3 id="bt3">演習 3: ラボのセットアップ__HTMLTAG_1103___
<ul>
<li>レッスン 1 の Vagrantfile を使用して、ストレージ ネットワーク用の NIC を追加</li>
<li>VM で VLAN を構成する (ハイパーバイザーがサポートする場合)</li>
<li>接続のテスト: すべてのネットワーク間の ping、iperf3</li>
<li>MTU 9000 がクラスタ ネットワークで動作することを確認</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_1118___レッスン 3: Linux OS とシステム チューニングの準備</strong> では、Kubernetes をインストールする前に、カーネル パラメーターを構成し、スワップをオフにし、NTP と SSH 強化をセットアップし、すべてのノードを準備します。</p>