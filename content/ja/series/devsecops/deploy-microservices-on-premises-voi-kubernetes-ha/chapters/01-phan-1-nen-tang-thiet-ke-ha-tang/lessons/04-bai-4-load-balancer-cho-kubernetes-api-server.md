---
id: 019e1a00-aa01-7001-c001-k8sha000104
title: 'レッスン 4: Kubernetes API サーバーのロード バランサー (キープアライブ + HAPROXY)'
slug: bai-4-load-balancer-cho-kubernetes-api-server
description: keepalived + HAProxy をインストールして構成し、Kubernetes API サーバーの仮想 IP (VIP) を作成します。ヘルスチェック、自動フェイルオーバーを構成し、kube-vip と比較し、tcpdump/curl で HA をテストします。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 1: オンプレミスのプラットフォームとインフラストラクチャの設計'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5575" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5575)"/>

  <!-- Decorations -->
  <g>
    <circle cx="998" cy="44" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="896" cy="222" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="794" cy="140" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="692" cy="58" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1090" cy="236" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="204" x2="1100" y2="284" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="234" x2="1050" y2="304" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="937.7749907475932,84.5 937.7749907475932,123.5 904,143 870.2250092524068,123.5 870.2250092524068,84.50000000000001 904,65" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 4: KUBERNETES API のロード バランサー</tspan>
      <tspan x="60" dy="42">サーバー (キープアライブ + HAPROXY)</tspan>
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
<li>✅ HA セットアップの K8s API サーバーにロード バランサが必要な理由を理解する</li>
<li>✅ 仮想 IP (VIP) フェイルオーバー用にキープアライブをインストールして構成する</li>
<li>✅ API サーバーの負荷分散用に HAProxy をインストールして構成する</li>
<li>✅ ヘルスチェックと自動フェイルオーバーを構成する</li>
<li>✅ 障害をシミュレートして HA をテスト</li>
<li>✅ keepalived+HAProxy と kube-vip を比較</li>
</ul>

<hr>

<h2 id="phan-1-tai-sao-can-lb">パート 1: API サーバーにロード バランサーが必要な理由</h2>

<h3 id="11-van-de-voi-single-api-endpoint">1.1。単一の API エンドポイントの問題</h3>

___コードブロック_0___

<h3 id="12-architecture">1.2.ロード バランサ アーキテクチャ</h3>

___コードブロック_1___

<h3 id="13-lua-chon-architecture">1.3。アーキテクチャを選択</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>オプション</th>
<th>利点_</th>
<th>欠点</th>
<th>推奨</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>専用 LB ノード</strong></td>
<td>分離、シンプル、明確な分離__HTMLTAG_115___
<td>あと 2 台のサーバーが必要__HTMLTAG_117___
<td>✅ 制作_</td>
</tr>
<tr>
<td>マスター上の HAProxy</td>
<td>_追加のサーバーは必要ありません</td>
<td>リソースの競合、複雑さ</td>
<td>ラボ/小規模</td>
</tr>
<tr>
<td>kube-vip (DaemonSet)</td>
<td>外部 LB は不要</td>
<td>K8 内で実行 → ニワトリと卵</td>
<td>簡単なセットアップ</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>本番グレードのセットアップには、__HTMLTAG_145___専用 LB ノード</strong> (lb1 + lb2) を使用します。</p>

<hr>

<h2 id="phan-2-cai-dat-haproxy">パート 2: HAPROXY のインストールと構成</h2>

<h3 id="21-cai-dat-haproxy">2.1. HAProxy</h3> をインストールする
___コードブロック_2___

<h3 id="22-cau-hinh-haproxy">2.2. HAProxy 構成</h3>
___コードブロック_3___

<h3 id="23-advanced-health-check">2.3.高度なヘルスチェック (HTTP)</h3>
<p>TCP チェックでは、開いているポートのみがチェックされます。 API サーバーが本当に正常であることを確認するには、HTTP ヘルス チェックを使用します:</p>

___コードブロック_4___

<p>⚠️ <strong>注:</strong> K8s API は自己署名証明書を使用するため、HTTP ヘルス チェックには <code>check-ssl verify none</code> が必要です。運用環境では、検証用に CA 証明書を構成できます。</p>

<h3 id="24-start-haproxy">2.4. HAProxy を開始</h3>
___コードブロック_5___

<hr>

<h2 id="phan-3-cai-dat-keepalived">パート 3: インストールと構成の維持</h2>

<h3 id="31-keepalived-la-gi">3.1.キープアライブとは何ですか?</h3>
<p>keepalived は <strong>VRRP (仮想ルーター冗長プロトコル)</strong> を使用して、2 つ以上のサーバー間の仮想 IP を管理します:</p>

___コードブロック_6___

<h3 id="32-cai-dat-keepalived">3.2.キープアライブをインストール</h3>
___コードブロック_7___

<h3 id="33-cau-hinh-keepalived-tren-lb1">3.3. lb1 でのキープアライブ設定 (MASTER)</h3>
___コードブロック_8___

<h3 id="34-cau-hinh-keepalived-tren-lb2">3.4. lb2 でのキープアライブ構成 (バックアップ)</h3>
___コードブロック_9___

<h3 id="35-notification-script">3.5。通知スクリプト (オプション)</h3>
___コードブロック_10___

<h3 id="36-start-keepalived">3.6.キープアライブを開始</h3>
___コードブロック_11___

<hr>

<h2 id="phan-4-testing-ha-failover">パート 4: HA フェイルオーバーのテスト</h2>

<h3 id="41-test-1-vip-failover">4.1.テスト 1: lb1 ダウン時の VIP フェイルオーバー</h3>
___コードブロック_12___

<h3 id="42-test-2-haproxy-failure">4.2.テスト 2: HAProxy の失敗 → キープアライブのデモ</h3>
___コードブロック_13___

<h3 id="43-test-3-api-server-failover">4.3.テスト 3: API サーバー バックエンド フェイルオーバー</h3>
___コードブロック_14___

<hr>

<h2 id="phan-5-kube-vip-alternative">パート 5: 代替案 — kube-vip</h2><h3 id="51-kube-vip-la-gi">5.1. kube-vip とは何ですか?</h3>
<p>kube-vip は、コントロール プレーン ノード上で静的ポッドとして実行され、VIP と負荷分散を 1 つのコンポーネントで組み合わせます:</p>

___コードブロック_15___

<h3 id="52-so-sanh">5.2.詳細な比較_</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>基準</th>
<th>キープアライブ + HAProxy</th>
<th>kube-vip</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>_追加サーバー</strong></td>
<td>2 つの LB サーバーが必要</td>
<td>必要ありません</td>
</tr>
<tr>
<td><strong>_複雑さ</strong></td>
<td>2 つのコンポーネントを管理する必要があります</td>
<td>1 コンポーネント</td>
</tr>
<tr>
<td><strong>_独立</strong></td>
<td>✅ K8s クラスターから独立</td>
<td>❌ K8 で実行 (鶏卵)</td>
</tr>
<tr>
<td><strong>鶏卵問題</strong></td>
<td>✅ なし</td>
<td>⚠️ K8s の前に初期化する必要があります</td>
</tr>
<tr>
<td><strong>_ヘルスチェック</strong></td>
<td>✅ 高度な (HTTP、TCP、スクリプト)</td>
<td>基本</td>
</tr>
<tr>
<td><strong>_モニタリング</strong></td>
<td>✅ HAProxy 統計、Prometheus</td>
<td>限定</td>
</tr>
<tr>
<td><strong>_実証済みの制作</strong></td>
<td>✅ 20 年以上</td>
<td>より新しく、あまり実戦テストされていない</td>
</tr>
<tr>
<td><strong>ラボ/開発</strong></td>
<td>やりすぎ</td>
<td>_✅ 完璧</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>💡 <strong>推奨事項:</strong></p>
<ul>
<li><strong>_制作:</strong> keepalived + HAProxy (成熟した、独立した、監視可能)</li>
<li><strong>_ラボ/小規模:</strong> kube-vip (よりシンプル、追加のサーバーなし)</li>
</ul>

<h3 id="53-kube-vip-quick-setup">5.3. kube-vip クイック セットアップ (リファレンス)</h3>
___コードブロック_16___

<hr>

<h2 id="phan-6-production-considerations">パート 6: 制作上の考慮事項</h2>

<h3 id="61-haproxy-tuning">6.1. HAProxy 実稼働チューニング</h3>
___コードブロック_17___

<h3 id="62-monitoring-haproxy">6.2. Prometheus を使用した HAProxy の監視</h3>
___コードブロック_18___

<h3 id="63-keepalived-monitoring">6.3.キープアライブの監視</h3>
___コードブロック_19___

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>_VIP は K8s HA にとって重要</strong> — すべてのコンポーネントは VIP 経由で接続され、ハードコード マスター IP はありません</li>
<li><strong>keepalived</strong> VRRP プロトコル経由で VIP フェイルオーバーを管理、フェイルオーバー < 3 giây</li>
<li><strong>HAProxy</strong> ヘルスチェックを使用して TCP トラフィックを正常な API サーバーに負荷分散します</li>
<li><strong>nopreempt</strong> モードは、MASTER 回復時の不要な VIP の羽ばたきを回避</li>
<li><strong>ヘルスチェックスクリプト</strong> キープアライブで、VIP が HAProxy が正常なノード上にのみ存在することを確認</li>
<li><strong>_フェイルオーバーのテスト</strong> K8 を展開する前に: LB をオフにし、HAProxy をオフにして、VIP の移行を確認します_</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: HAProxy + keepalived のデプロイ</h3>
<ul>
<li>指示に従って HAProxy + keepalived を lb1 と lb2 にインストールします</li>
<li>lb1 で VIP がアクティブであることを確認</li>
<li>HAProxy 統計ページにアクセス</li>
</ul>

<h3 id="bt2">演習 2: フェイルオーバー テスト</h3>
<ul>
<li>テスト 1: lb1 でキープアライブを停止し、VIP が lb2 に移動することを確認</li>
<li>テスト 2: lb1 で HAProxy を停止し、自動降格を確認します</li>
<li>テスト 3: 両方を再起動し、正しい状態を確認します</li>
<li>連続 ping によるフェイルオーバー時間の測定</li>
</ul>

<h3 id="bt3">_演習 3: 上級</h3>
<ul>
<li>HAProxy 用の Prometheus エクスポーターを追加</li>
<li>フェイルオーバーの発生時に Slack にアラートを送信する通知スクリプトを作成します__HTMLTAG_385___
<li>HAProxy ログの詳細を別のファイルで構成</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_393___レッスン 5: すべてのノードにcontainerdとkubeadmをインストール</strong>では、コンテナ ランタイム (containerd) とkubeadm ツールをインストールし、K8s HA クラスターの初期化の準備をします。</p>