---
id: 019e1a00-aa01-7001-c001-k8sha000204
title: 'レッスン 8: CILIUM CNI のインストール — eBPF ネットワーキング'
slug: bai-8-cai-dat-cilium-cni
description: kube-proxy の代わりに eBPF を使用して Cilium CNI をインストールし、ハッブル観測を有効にし、NetworkPolicy L3/L4/L7 を構成して、ポッド間のネットワークが適切に動作することを確認します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 2: kubeadm を使用した Kubernetes HA クラスター'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-501" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-501)"/>

  <!-- Decorations -->
  <g>
    <circle cx="964" cy="182" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="828" cy="146" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="692" cy="110" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="1056" cy="74" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="920" cy="38" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="222" x2="1100" y2="302" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="252" x2="1050" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1004.0429399400242,153.5 1004.0429399400242,190.5 972,209 939.9570600599758,190.5 939.9570600599758,153.5 972,135" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: CILIUM CNI セットアップ — eBPF</tspan>
      <tspan x="60" dy="42">ネットワーク</tspan>
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
<li>✅ eBPF と、Cilium が従来の CNI よりも優れている理由を理解します</li>
<li>✅ Helm を使用して Cilium をインストールし、接続を確認します</li>
<li>✅ kube-proxy を Cilium eBPF</li> に置き換えます
<li>✅ ネットワーク可観測性のためにハッブルを有効にする</li>
<li>✅ ネットワーク ポリシー L3/L4/L7 の作成</li>
</ul>

<hr>

<h2 id="phan-1-tai-sao-cilium">パート 1: CILIUM を選ぶ理由</h2>

<h3 id="11-so-sanh-cni">1.1.人気の CNI を比較</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>基準__HTMLTAG_93___
<th>Calico</th>
<th>フランネル</th>
<th>Cilium</th>
</tr>
</thead>
<tbody>
<tr>
<td>データプレーン</td>
<td>iptables/eBPF</td>
<td>VXLAN</td>
<td>eBPF ネイティブ</td>
</tr>
<tr>
<td>ネットワークポリシー</td>
<td>L3/L4</td>
<td>❌ サポートされていません</td>
<td>L3/L4/L7</td>
</tr>
<tr>
<td>パフォーマンス</td>
<td>良い</td>
<td>平均</td>
<td>素晴らしい</td>
</tr>
<tr>
<td>可観測性</td>
<td>基本</td>
<td>❌</td>
<td>ハッブル (深層)</td>
</tr>
<tr>
<td>kube プロキシの置き換え</td>
<td>_❌</td>
<td>❌</td>
<td>✅ 全文_</td>
</tr>
<tr>
<td>暗号化 (WireGuard)</td>
<td>✅</td>
<td>_❌</td>
<td>✅ ネイティブ</td>
</tr>
<tr>
<td>_サービス メッシュの統合</td>
<td>❌_</td>
<td>_❌</td>
<td>✅ Istio/Envoy</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="12-ebpf-la-gi">1.2. eBPF とは何ですか?</h3>
___コードブロック_0___

<hr>

<h2 id="phan-2-cai-dat-cilium">パート 2: CILIUM セットアップ</h2>

<h3 id="21-cai-helm">2.1. Helm をインストール</h3>
___コードブロック_1___

<h3 id="22-xoa-kube-proxy">2.2. kube-proxy を削除します (オプション - Cilium に置き換えます)</h3>
___コードブロック_2___

<h3 id="23-cai-cilium-bang-helm">2.3. Helm</h3> を使用して Cilium をインストールする
___コードブロック_3___

<h3 id="24-giai-thich-tham-so">2.4.重要なパラメータの説明</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>パラメータ</th>
<th>値</th>
<th>意味__HTMLTAG_198___
</tr>
</thead>
<tbody>
<tr>
<td>kubeProxyReplacement</td>
<td>本当</td>
<td>Cilium は kube-proxy を完全に置き換えます__HTMLTAG_208___
</tr>
<tr>
<td>k8sサービスホスト</td>
<td>10.10.20.100</td>
<td>VIP (HAProxy) を Cilium に接続して API サーバー</td>
</tr>
<tr>
<td>ipam.mode</td>
<td>kubernetes_</td>
<td>K8s IPAM を使用する (オンプレミスに適しています)</td>
</tr>
<tr>
<td>hubble.relay.enabled</td>
<td>true</td>
<td>フロー集約のためにハッブルリレーを有効にする</td>
</tr>
<tr>
<td>hubble.ui.有効</td>
<td>本当</td>
<td>Hubble UI (Web ダッシュボード) を有効にする</td>
</tr>
<tr>
<td>オペレーター.レプリカ__HTMLTAG_244___
<td>2</td>
<td>Cilium オペレーター用 HA</td>
</tr>
<tr>
<td>bpf.マスカレード</td>
<td>本当</td>
<td>eBPF マスカレードによる iptables SNAT</td> の置き換え
</tr>
<tr>
<td>loadBalancer.アルゴリズム</td>
<td>リニアモーターカー</td>
<td>スケーリング時の中断を軽減する一貫したハッシュ</td>
</tr>
<tr>
<td>帯域幅マネージャー</td>
<td>有効 + bbr</td>
<td>EDT ベースのレート制限 + BBR 輻輳制御</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="25-verify-cilium-installation">2.5。 Cilium のインストールを確認</h3>
___コードブロック_4___

<hr>

<h2 id="phan-3-cilium-cli">パート 3: CILIUM CLI — 接続テスト</h2>

<h3 id="31-cai-cilium-cli">3.1. Cilium CLI</h3> をインストールする
___コードブロック_5___

<h3 id="32-cilium-status">3.2.繊毛ステータス</h3>
___コードブロック_6___

<h3 id="33-connectivity-test">3.3.接続テスト</h3>
___コードブロック_7___

<hr>

<h2 id="phan-4-hubble-observability">パート 4: ハッブル観測能力</h2>

<h3 id="41-cai-hubble-cli">4.1. Hubble CLI</h3> をインストールする
___コードブロック_8___

<h3 id="42-xem-network-flows">4.2.ネットワーク フローの表示</h3>
___コードブロック_9___

<h3 id="43-hubble-ui">4.3.ハッブル UI</h3>
___コードブロック_10___

<hr>

<h2 id="phan-5-network-policy">パート 5: CILIUM によるネットワーク ポリシー</h2>

<h3 id="51-deploy-test-apps">5.1.テスト アプリケーションをデプロイ</h3>
___コードブロック_11___

<h3 id="52-deny-all-policy">5.2.デフォルトのすべて拒否ポリシー</h3>
___コードブロック_12___

___コードブロック_13___

<h3 id="53-allow-frontend-to-backend">5.3.フロントエンド→バックエンドを許可</h3>
___コードブロック_14___

___コードブロック_15___

<h3 id="54-cilium-l7-policy">5.4. Cilium L7 ポリシー (HTTP 対応)</h3>
___コードブロック_16___

___コードブロック_17___

<hr>

<h2 id="phan-6-troubleshooting">パート 6: トラブルシューティング</h2>

<h3 id="61-common-issues">6.1.よくある問題</h3>
___コードブロック_18___<h3 id="62-cleanup-test">6.2.テスト リソースのクリーンアップ</h3>
___コードブロック_19___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>Cilium eBPF</strong> 優れた: O(1) ルックアップ、kube-proxy を置き換える、L7 ポリシー</li>
<li><strong>kubeProxyReplacement=true</strong>: Cilium がすべてのサービスを処理するため、kube-proxy は必要ありません</li>
<li><strong>Hubble</strong> による深い可観測性 — フロー、DNS クエリ、HTTP リクエストを参照</li>
<li><strong>_ネットワークポリシー</strong>: デフォルトの拒否 + ホワイトリストがベスト プラクティス</li>
<li><strong>CiliumNetworkPolicy</strong> K8s NetworkPolicy を拡張し、L7 ルール (HTTP、gRPC、Kafka) を追加</li>
<li><strong>_cilium 接続テスト__HTMLTAG_341___: 46 個のテストを実行してネットワークを自動的に検証</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: Cilium のインストール</h3>
<ul>
<li>Helm をインストールし、kubeProxyReplacement を使用して Cilium をインストール</li>
<li>すべてのノードの準備が完了していることを確認</li>
<li>繊毛ステータスと繊毛接続テストを実行</li>
</ul>

<h3 id="bt2">演習 2: ネットワーク ポリシー ラボ</h3>
<ul>
<li>名前空間を作成し、3 つのポッド (フロントエンド、バックエンド、データベース) をデプロイ</li>
<li>デフォルトのすべてを拒否する</li>
<li>ポリシーの作成: フロントエンド→バックエンド (HTTP GET)、バックエンド→データベース (TCP 5432)</li>
<li>_承認されたトラフィックのみが機能することを確認</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_373___レッスン 9: MetalLB — オンプレミス用ロードバランサー</strong>では、MetalLB をインストールして、タイプ LoadBalancer でクラスターの外部にサービスを公開します。</p>