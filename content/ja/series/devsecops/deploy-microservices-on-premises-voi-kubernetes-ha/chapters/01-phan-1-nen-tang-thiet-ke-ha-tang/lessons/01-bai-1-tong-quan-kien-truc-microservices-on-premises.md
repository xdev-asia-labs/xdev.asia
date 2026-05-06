---
id: 019e1a00-aa01-7001-c001-k8sha000101
title: 'レッスン 1: オンプレミスのマイクロサービス アーキテクチャの概要'
slug: bai-1-tong-quan-kien-truc-microservices-on-premises
description: オンプレミス、クラウド、ハイブリッド、マイクロサービス運用システムのコア コンポーネント (K8s、DB HA、ストレージ、メッセージング、可観測性、セキュリティ)、ラーニング パス、ラボ環境のセットアップを比較します。
duration_minutes: 90
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai01-microservices-on-prem-overview.png
sort_order: 1
section_title: 'パート 1: オンプレミスのプラットフォームとインフラストラクチャの設計'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6986" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6986)"/>

  <!-- Decorations -->
  <g>
    <circle cx="980" cy="50" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="860" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="150" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="70" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="90" x2="1100" y2="170" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="120" x2="1050" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1061.650635094611,227.5 1061.650635094611,252.5 1040,265 1018.349364905389,252.5 1018.349364905389,227.5 1040,215" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: マイクロサービス アーキテクチャの概要</tspan>
      <tspan x="60" dy="42">オンプレミス</tspan>
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
<li>✅ マイクロサービスのオンプレミス、クラウド、ハイブリッド デプロイメントの違いを理解する</li>
<li>✅ 実稼働システムのアーキテクチャの概要とすべてのコア コンポーネントを理解する</li>
<li>✅ スタック内の各テクノロジーを選択する理由を理解する (Kubernetes、Ceph、Patroni、Istio、ArgoCD...)</li>
<li>✅ コース全体のラボ環境をセットアップする</li>
<li>✅ 50 のレッスンのロードマップとセクション間のリンクを理解する__HTMLTAG_81___
</ul>

<hr>

<h2 id="phan-1-tai-sao-on-premises">パート 1: マイクロサービスにオンプレミスを使用する理由</h2>

<h3 id="11-boi-canh-thuc-te">1.1.実際のコンテキスト</h3>
<p>クラウド ネイティブの時代においても、多くの組織は依然としてオンプレミスでの展開を選択しています。</p>

<p><strong>📊 実際の統計 (2025-2026):</strong></p>
<ul>
<li>~60% のエンタープライズ ワークロードは依然としてオンプレミスまたはハイブリッドで実行されています (Gartner)</li>
<li>スケーリング時にクラウドコストが毎年 30 ～ 40% 増加→「クラウド回帰」傾向</li>
<li>規制産業 (金融、医療、政府) にはデータ主権が必要__HTMLTAG_100___
<li>遅延の影響を受けやすいアプリケーションはユーザー/デバイスに近い必要があります</li>
</ul>

<h3 id="12-so-sanh-on-prem-vs-cloud-vs-hybrid">1.2.オンプレミス、クラウド、ハイブリッドの比較</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>基準</th>
<th>オンプレミス</th>
<th>パブリック クラウド</th>
<th>ハイブリッド</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>初期費用 (CapEx)</strong></td>
<td>高 (ハードウェアを購入)</td>
<td>低額 (従量課金制)</td>
<td>平均</td>
</tr>
<tr>
<td><strong>長期経費 (運用コスト)</strong></td>
<td>拡大縮小すると低くなります__HTMLTAG_139___
<td>高さと予測不可能__HTMLTAG_141___
<td>ワークロードに応じて</td>
</tr>
<tr>
<td><strong>_データ主権</strong></td>
<td>✅ フルコントロール__HTMLTAG_151___
<td>⚠️ 地域による</td>
<td>✅ ほとんどがオンプレミス</td>
</tr>
<tr>
<td><strong>_遅延</strong></td>
<td>✅ 最低</td>
<td>地域依存</td>
<td>特殊なケースに適しています</td>
</tr>
<tr>
<td><strong>カスタマイズ</strong></td>
<td>✅ 無制限</td>
<td>プロバイダーによる制限</td>
<td>柔軟__HTMLTAG_179___
</tr>
<tr>
<td><strong>運用の複雑さ</strong></td>
<td>❌ 高 (自己管理)</td>
<td>✅ 低 (マネージド)</td>
<td>最高</td>
</tr>
<tr>
<td><strong>スケーリング速度</strong></td>
<td>❌ 遅い (ハードウェアの購入)</td>
<td>✅ 分 (自動スケール)</td>
<td>柔軟</td>
</tr>
<tr>
<td><strong>コンプライアンス</strong></td>
<td>✅ 応答が最も簡単</td>
<td>共同責任が必要_</td>
<td>良い</td>
</tr>
<tr>
<td><strong>_ベンダー ロックイン</strong></td>
<td>✅ いいえ_</td>
<td>❌ 高 (AWS/GCP/Azure)</td>
<td>平均</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html--><h3 id="13-khi-nao-chon-on-premises">1.3。オンプレミスを選択する必要があるのはどのような場合ですか?</h3>
<p><strong>✅ 次の場合はオンプレミスを選択する必要があります:</strong></p>
<ul>
<li>ワークロードは安定しており、予測可能です (連続的にアップダウンが発生しない)</li>
<li>高度なコンプライアンス要件 (HIPAA、PCI-DSS、GDPR データ所在地)</li>
<li>インフラストラクチャ投資 (データセンター、サーバー、ネットワーキング)</li>
<li>クラウドの月額コストがしきい値を超えています (月額約 50,000 ～ 100,000 ドル以上)</li>
<li>運用経験のあるDevOps/SREチーム__HTMLTAG_248___
<li>_超低遅延が必要 (< 1ms giữa services)</li>)
</ul>

<p><strong>❌ 次の場合はオンプレミスを選択しないでください。</strong></p>
<ul>
<li>初期段階のスタートアップは市場投入までのスピードが必要</li>
<li>ワークロードが急増し、予測が困難__HTMLTAG_260___
<li>チーム < 5 người, không có infra engineer</li>
<li>_PoC/MVP を迅速に展開する必要がある__HTMLTAG_264___
</ul>

<hr>

<h2 id="phan-2-kien-truc-tong-the">パート 2: 全体的なシステム アーキテクチャ</h2>

<h3 id="21-so-do-kien-truc">2.1.全体的なアーキテクチャ図</h3>

___コードブロック_0___

<h3 id="22-cac-thanh-phan-cot-loi">2.2.コアコンポーネントと役割</h3>

<h4 id="layer-1-infrastructure">レイヤー 1: インフラストラクチャ基盤</h4>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>要素__HTMLTAG_280___
<th>テクノロジー</th>
<th>役割</th>
<th>レッスン__HTMLTAG_286___
</tr>
</thead>
<tbody>
<tr>
<td>コンテナ ランタイム</td>
<td>コンテナ 2.x</td>
<td>CRI 標準に従ってコンテナを実行</td>
<td>レッスン 5</td>
</tr>
<tr>
<td>K8s オーケストレーション__HTMLTAG_302___
<td>kubeadm (K8s 1.31+)</td>
<td>HA コントロール プレーン、スケジューリング、自己修復__HTMLTAG_306___
<td>レッスン 5-7</td>
</tr>
<tr>
<td>CNI ネットワーキング__HTMLTAG_312___
<td>Cilium (eBPF)</td>
<td>ポッド ネットワーキング、ネットワーク ポリシー、ハッブル可観測性__HTMLTAG_316___
<td>レッスン 8</td>
</tr>
<tr>
<td>ロードバランサー</td>
<td>MetalLB</td>
<td>ベアメタル上のサービスに外部 IP を付与</td>
<td>レッスン 9</td>
</tr>
<tr>
<td>API サーバー HA</td>
<td>キープアライブ + HAProxy</td>
<td>K8s API エンドポイントの仮想 IP__HTMLTAG_336___
<td>レッスン 4</td>
</tr>
<tr>
<td>クラスターの状態</td>
<td>etcd (3 ノード)</td>
<td>K8 の分散 Key-Value ストア</td>
<td>レッスン 10</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h4 id="layer-2-storage">レイヤー 2: 分散ストレージ</h4><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>要素__HTMLTAG_360___
<th>テクノロジー</th>
<th>役割</th>
<th>レッスン</th>
</tr>
</thead>
<tbody>
<tr>
<td>ストレージ オーケストレーター</td>
<td>ルーク オペレーター</td>
<td>K8 で Ceph ライフサイクルを管理</td>
<td>レッスン 11-12</td>
</tr>
<tr>
<td>ブロック ストレージ</td>
<td>Ceph RBD</td>
<td>データベース (PostgreSQL、etcd) の PV</td>
<td>レッスン 13</td>
</tr>
<tr>
<td>共有ストレージ</td>
<td>CephFS</td>
<td>マイクロサービスのReadWriteMany__HTMLTAG_396___
<td>レッスン 14</td>
</tr>
<tr>
<td>オブジェクト ストレージ</td>
<td>Ceph RGW (S3)</td>
<td>バックアップ、Loki ログ、Thanos メトリクス</td>
<td>レッスン 15</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h4 id="layer-3-data">レイヤー 3: データレイヤー</h4>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>要素</th>
<th>テクノロジー</th>
<th>役割</th>
<th>レッスン__HTMLTAG_426___
</tr>
</thead>
<tbody>
<tr>
<td>プライマリ データベース_</td>
<td>PostgreSQL HA (CloudNativePG)</td>
<td>ACID トランザクション、リレーショナル データ</td>
<td>レッスン 16～17</td>
</tr>
<tr>
<td>接続プール</td>
<td>PgBouncer</td>
<td>接続プーリング、DB 負荷を軽減__HTMLTAG_446___
<td>レッスン 18</td>
</tr>
<tr>
<td>DB バックアップ</td>
<td>pgBackRest</td>
<td>完全/増分バックアップ、PITR</td>
<td>レッスン 19</td>
</tr>
<tr>
<td>メッセージ キュー</td>
<td>RabbitMQ HA</td>
<td>非同期メッセージング、タスクキュー__HTMLTAG_466___
<td>レッスン 21</td>
</tr>
<tr>
<td>イベント ストリーミング__HTMLTAG_472___
<td>カフカ (ストリムジ)</td>
<td>イベントソーシング、ログ集計</td>
<td>レッスン 22</td>
</tr>
<tr>
<td>キャッシュ</td>
<td>Redis HA</td>
<td>キャッシュ、セッション ストア、レート制限__HTMLTAG_486___
<td>レッスン 23</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h4 id="layer-4-networking">レイヤー 4: サービス メッシュとネットワーキング</h4><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>要素</th>
<th>テクノロジー</th>
<th>役割</th>
<th>レッスン__HTMLTAG_506___
</tr>
</thead>
<tbody>
<tr>
<td>サービス メッシュ</td>
<td>Istio</td>
<td>mTLS、トラフィック管理、可観測性__HTMLTAG_516___
<td>レッスン 24～25</td>
</tr>
<tr>
<td>Ingress コントローラー</td>
<td>NGINX Ingress</td>
<td>クラスターへの HTTP/HTTPS ルーティング</td>
<td>レッスン 26</td>
</tr>
<tr>
<td>TLS 自動化_</td>
<td>証明書マネージャー</td>
<td>証明書の自動発行/更新</td>
<td>レッスン 26</td>
</tr>
<tr>
<td>ゲートウェイ API</td>
<td>Istio + ゲートウェイ API</td>
<td>次世代の Ingress、カナリア ルーティング</td>
<td>レッスン 27</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h4 id="layer-5-platform">レイヤー 5: プラットフォーム操作</h4><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>要素__HTMLTAG_560___
<th>テクノロジー</th>
<th>役割</th>
<th>レッスン</th>
</tr>
</thead>
<tbody>
<tr>
<td>GitOps</td>
<td>ArgoCD HA</td>
<td>Git からの宣言的デプロイメント</td>
<td>レッスン 28、30</td>
</tr>
<tr>
<td>梱包</td>
<td>ヘルム</td>
<td>K8s マニフェスト テンプレート</td>
<td>レッスン 29</td>
</tr>
<tr>
<td>秘密</td>
<td>Vault HA + ESO</td>
<td>シークレットの一元管理</td>
<td>レッスン 31</td>
</tr>
<tr>
<td>メトリクス</td>
<td>プロメテウス HA + サノス</td>
<td>メトリクスの収集、長期保存</td>
<td>レッスン 32</td>
</tr>
<tr>
<td>ダッシュボード</td>
<td>グラファナ HA</td>
<td>視覚化、アラート</td>
<td>レッスン 33</td>
</tr>
<tr>
<td>ログ</td>
<td>ロキ + 合金</td>
<td>一元化されたログ集約</td>
<td>レッスン 34</td>
</tr>
<tr>
<td>トレース</td>
<td>テンポ + OpenTelemetry__HTMLTAG_634___
<td>分散トレース</td>
<td>レッスン 35</td>
</tr>
<tr>
<td>ポリシー</td>
<td>カイバーノ</td>
<td>アドミッション コントロール、コードとしてのポリシー</td>
<td>レッスン 37</td>
</tr>
<tr>
<td>ランタイムセキュリティ</td>
<td>ファルコ</td>
<td>脅威の検出</td>
<td>レッスン 38</td>
</tr>
<tr>
<td>画像セキュリティ</td>
<td>トリビー + ハーバー</td>
<td>脆弱性スキャン、プライベート レジストリ</td>
<td>レッスン 39</td>
</tr>
<tr>
<td>バックアップ</td>
<td>ヴェレロ</td>
<td>クラスターのバックアップ/復元</td>
<td>レッスン 44</td>
</tr>
<tr>
<td>_カオス テスト_</td>
<td>カオス メッシュ</td>
<td>回復力の検証</td>
<td>レッスン 45</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-3-tai-sao-chon-tung-cong-nghe">パート 3: 各テクノロジーを選択する理由</h2>

<h3 id="31-kubernetes-kubeadm-vs-managed">3.1. Kubernetes (kubeadm) — マネージド K8 を使用しないのはなぜですか?</h3>
<p>_オンプレミスには EKS/GKE/AKS がありません。オプション:</p><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>ツール</th>
<th>利点_</th>
<th>欠点</th>
<th>関連</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>kubeadm</strong></td>
<td>公式 K8s ツール、柔軟、実稼働グレード</td>
<td>手動セットアップ、深く理解する必要があります</td>
<td>_✅ 制作_</td>
</tr>
<tr>
<td>k3s</td>
<td>軽量で取り付け簡単__HTMLTAG_731___
<td>機能を削除し、代わりに SQLite を使用します etcd</td>
<td>エッジ/IoT</td>
</tr>
<tr>
<td>RKE2</td>
<td>FIPS 準拠、Rancher 統合</td>
<td>ベンダー固有</td>
<td>Rancher ユーザー</td>
</tr>
<tr>
<td>Kubespray</td>
<td>Ansible ベース、再現可能</td>
<td>遅い、Ansible の複雑さ</td>
<td>大規模クラスター</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>👉 <strong>kubeadm</strong> を選択する理由: 製品グレードの公式ツールは、K8 の内部を最も深く理解するのに役立ちます。</p>

<h3 id="32-cilium-vs-calico-vs-flannel">3.2. Cilium CNI — なぜ Calico や Flannel ではないのでしょうか?</h3>
___コードブロック_1___

<h3 id="33-rook-ceph-vs-longhorn-vs-nfs">3.3. Rook-Ceph — なぜ Longhorn や NFS ではないのでしょうか?</h3>
___コードブロック_2___

<h3 id="34-istio-vs-linkerd">3.4. Istio — なぜ Linkerd ではないのでしょうか?</h3>
___コードブロック_3___

<hr>

<h2 id="phan-4-lab-environment-setup">パート 4: 環境ラボのセットアップ</h2>

<h3 id="41-minimum-hardware-cho-lab">4.1.ラボ用の最小ハードウェア</h3>
<p>コース全体を練習するには、少なくとも次のリソースが必要です:</p>

<h4 id="option-a-vms-khuyen-nghi">オプション A: 強力なホスト上の VM (推奨)</h4>

___コードブロック_4___

<p><strong>_合計:</strong> ~26 vCPU、58GB RAM、520GB ディスク</p>

<h4 id="option-b-cloud-vms">オプション B: クラウド VM (AWS/GCP/Hetzner)</h4>
___コードブロック_5___

<h4 id="option-c-bare-metal-production">オプション C: ベアメタル (本番環境と同様)</h4>
___コードブロック_6___

<h3 id="42-network-layout-cho-lab">4.2.ラボのネットワーク レイアウト</h3>

___コードブロック_7___

<h3 id="43-tao-vms-voi-vagrant">4.3. Vagrant を使用して VM を高速に作成する (オプション)</h3>
___コードブロック_8___

___コードブロック_9___

<h3 id="44-cau-hinh-ssh-keys">4.4.すべてのノードの SSH キーを構成</h3>
___コードブロック_10___

<hr>

<h2 id="phan-5-lo-trinh-hoc-tap">パート 5: 学習ルート 50 レッスン</h2>

<h3 id="51-dependency-graph">5.1.セクション間の依存関係グラフ</h3>

___コードブロック_11___

<h3 id="52-thoi-gian-du-kien">5.2.推定所要時間</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>セクション</th>
<th>投稿番号</th>
<th>時間</th>
<th>タイムライン (1 日あたり 2 時間)</th>
</tr>
</thead>
<tbody>
<tr>
<td>パート 1: 基礎</td>
<td>4</td>
<td>~8 時間</td>
<td>第 1 週</td>
</tr>
<tr>
<td>パート 2: K8s HA</td>
<td>6</td>
<td>~14 時間</td>
<td>第 2 ～ 3 週</td>
</tr>
<tr>
<td>パート 3: Rook-Ceph</td>
<td>5</td>
<td>~11 時間</td>
<td>第 3 ～ 4 週</td>
</tr>
<tr>
<td>パート 4: PostgreSQL__HTMLTAG_847___
<td>5</td>
<td>~12 時間</td>
<td>第 5 週～第 6 週</td>
</tr>
<tr>
<td>パート 5: MQ HA</td>
<td>3</td>
<td>~8 時間</td>
<td>第 6 ～ 7 週</td>
</tr>
<tr>
<td>パート 6: Istio</td>
<td>4</td>
<td>~10 時間</td>
<td>第 7 ～ 8 週</td>
</tr>
<tr>
<td>パート 7: GitOps</td>
<td>4</td>
<td>~11 時間</td>
<td>第 9 ～ 10 週</td>
</tr>
<tr>
<td>パート 8: 可観測性__HTMLTAG_887___
<td>4</td>
<td>~10 時間</td>
<td>第 10 ～ 11 週</td>
</tr>
<tr>
<td>パート 9: セキュリティ_</td>
<td>4</td>
<td>~10 時間</td>
<td>第 12 ～ 13 週</td>
</tr>
<tr>
<td>パート 10: 導入</td>
<td>4</td>
<td>~9 時間</td>
<td>第 13 ～ 14 週</td>
</tr>
<tr>
<td>パート 11: DR</td>
<td>2</td>
<td>~5 時間</td>
<td>第 15 週</td>
</tr>
<tr>
<td>パート 12: 操作</td>
<td>5</td>
<td>~15 時間</td>
<td>第 15 週～第 18 週</td>
</tr>
<tr>
<td><strong>_合計</strong></td>
<td><strong>50</strong></td>
<td><strong>_~123h</strong></td>
<td><strong>~18 週間</strong></td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-6-conventions-va-quy-uoc">パート 6: コース内の規約と規約</h2>

<h3 id="61-naming-conventions">6.1.命名規則</h3>
___コードブロック_12___<h3 id="62-ky-hieu-trong-bai-hoc">6.2.レッスン内の記号</h3>
<ul>
<li>💡 <strong>ヒント:</strong> 役立つヒント、ベスト プラクティス</li>
<li>⚠️ <strong>警告:</strong> エラーが発生する可能性があるので注意してください</li>
<li>❌ <strong>危険:</strong> 運用環境では絶対に行わないでください</li>
<li>📋 <strong>チェックリスト:</strong> チェックリスト</li>
<li>🔬 <strong>詳細:</strong> 技術的説明</li>
<li>🛠️ <strong>ラボ:</strong> 実践</li>
</ul>

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>オンプレミスのマイクロサービス</strong> データ主権、予測可能なコスト、超低遅延を必要とする組織に適しています</li>
<li><strong>Kubernetes HA</strong> はオーケストレーション プラットフォームであり、CNCF ツール エコシステムと組み合わせて運用プラットフォーム</li> を作成します。
<li><strong>フルスタック__HTMLTAG_1003___には、インフラストラクチャ→ストレージ→データ→ネットワーキング→プラットフォーム→セキュリティ</li>の6つのレイヤーが含まれています
<li><strong>各テクノロジーは次の基準に基づいて選択されます</strong>次の基準に基づいて選択されます: 製品グレード、CNCF 支援、アクティブなコミュニティ</li>
<li><strong>ラボ環境</strong>には、合計約58GBのRAM__HTMLTAG_1012___を備えた少なくとも7つのVM（マスター3つ、ワーカー3つ、LB1つ）が必要です。
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: インフラストラクチャ要件の評価__HTMLTAG_1018___
<p>シナリオの場合: フィンテック企業は、20 のマイクロサービスをデプロイし、10,000 リクエスト/秒を処理し、500 GB のデータを保存し、PCI-DSS 準拠を必要とする必要があります。</p>
<ul>
<li>必要なノードの数を計算します (コントロール プレーン、ワーカー、ストレージ)</li>
<li>CPU、RAM、ストレージの推定合計</li>
<li>ネットワーク トポロジ図を描画</li>
<li>上記のスタックから必要なコンポーネントをリストします</li>
</ul>

<h3 id="bt2">演習 2: ラボ環境のセットアップ__HTMLTAG_1032___
<ul>
<li>オプション A またはオプション B を使用して 7 つの VM を作成</li>
<li>VM 間のネットワークの構成</li>
<li>SSH キーベースの認証のセットアップ</li>
<li>すべてのノード間の ping 接続を確認</li>
<li>各 VM の IP とホスト名を記録します</li>
</ul>

<h3 id="bt3">演習 3: テクノロジーの比較__HTMLTAG_1046___
<p>2 つのテクノロジーのペアを詳細に調査して比較します:</p>
<ul>
<li>Cilium 対 Calico: パフォーマンス ベンチマーク、機能、コミュニティ</li>
<li>Rook-Ceph と Longhorn: スケーラビリティ、機能、運用の複雑さ</li>
</ul>

<hr><h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_1059___レッスン 2: ハードウェア計画とネットワーク トポロジ</strong>では、実稼働環境の CPU/RAM/ディスク、VLAN、ボンディング、および MTU を使用したネットワーク トポロジ設計の詳細なサイジング計算について詳しく説明します。</p>