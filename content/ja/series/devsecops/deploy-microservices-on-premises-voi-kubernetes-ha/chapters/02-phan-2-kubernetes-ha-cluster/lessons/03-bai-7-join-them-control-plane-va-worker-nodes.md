---
id: 019e1a00-aa01-7001-c001-k8sha000203
title: 'レッスン 7: コントロール プレーンとワーカー ノードの追加を結合する'
slug: bai-7-join-them-control-plane-va-worker-nodes
description: master2 と master3 を HA コントロール プレーンに参加させ、ワーカー ノードに参加させ、3 つのメンバーを持つ etcd クラスターを確認し、リーダーの選択とクラスターの準備状況を確認します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 2: kubeadm を使用した Kubernetes HA クラスター'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2466" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2466)"/>

  <!-- Decorations -->
  <g>
    <circle cx="816" cy="198" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1032" cy="254" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="748" cy="50" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="964" cy="106" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="680" cy="162" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="118" x2="1100" y2="198" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="148" x2="1050" y2="218" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="946.5788383248864,101.5 946.5788383248864,134.5 918,151 889.4211616751136,134.5 889.4211616751135,101.50000000000001 918,85" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — レッスン 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: コントロール プレーンとワーカーの追加</tspan>
      <tspan x="60" dy="42">NODES</tspan>
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
<li>✅ さらに 2 つのコントロール プレーン ノードを結合して、3 つのマスターからなる HA クラスターを形成します</li>
<li>✅ ワーカー ノードをクラスターに参加させる__HTMLTAG_75___
<li>✅ etcd クラスター 3 メンバーが正しく動作することを確認</li>
<li>✅ スケジューラーとコントローラーマネージャーのリーダーの選択を確認してください__HTMLTAG_79___
<li>✅ 正しい役割に従ってノードにラベルを付け、汚染する</li>
</ul>

<hr>

<h2 id="phan-1-join-control-plane">パート 1: コントロール プレーン ノードに参加</h2>

<h3 id="11-chuan-bi-tren-master2-master3">1.1. master2 と master3 で準備</h3>
<p>master2 と master3 が完了していることを確認してください:</p>
<ul>
<li>✅ OS チューニング (レッスン 3)</li>
<li>✅containerd + kubeadm のインストール (レッスン 5)</li>
<li>✅ VIP 10.10.20.100:6443</li> に接続できます
</ul>

___コードブロック_0___

<h3 id="12-join-master2">1.2. master2 をコントロール プレーンに参加</h3>
___コードブロック_1___

<p>⚠️ <strong>--apiserver-advertise-address</strong>: 各マスターはクラスター ネットワーク上で独自の IP を使用します。</p>

<h3 id="13-join-master3">1.3. master3 をコントロール プレーンに参加</h3>
___コードブロック_2___

<h3 id="14-setup-kubeconfig-tren-master2-master3">1.4。 master2 と master3 で kubeconfig をセットアップ</h3>
___コードブロック_3___

<hr>

<h2 id="phan-2-token-het-han">パート 2: 期限切れのトークンの処理</h2>

<h3 id="21-tao-token-moi">2.1.新しいトークンを作成します (トークンの有効期限が切れた場合)</h3>
___コードブロック_4___

<hr>

<h2 id="phan-3-join-worker-nodes">パート 3: ワーカー ノードに参加</h2>

<h3 id="31-join-workers">3.1.ワーカー 1、ワーカー 2、ワーカー 3</h3> を結合
___コードブロック_5___

<h3 id="32-verify-all-nodes">3.2.すべてのノードを確認</h3>
___コードブロック_6___

<hr>

<h2 id="phan-4-verify-etcd-cluster">パート 4: ETCD クラスターの確認</h2><h3 id="41-etcd-member-list">4.1. etcd メンバーリスト</h3>
___コードブロック_7___

<h3 id="42-etcd-endpoint-health">4.2. etcd エンドポイントの健全性</h3>
___コードブロック_8___

<h3 id="43-etcd-endpoint-status">4.3. etcd エンドポイントのステータス (リーダー チェック)</h3>
___コードブロック_9___

<hr>

<h2 id="phan-5-leader-election">パート 5: リーダー選挙の検証</h2>

<h3 id="51-check-controller-manager-leader">5.1.コントローラ マネージャ リーダーを確認</h3>
___コードブロック_10___

<h3 id="52-test-ha-failover">5.2. HA フェイルオーバーのテスト</h3>
___コードブロック_11___

<hr>

<h2 id="phan-6-label-va-taint-nodes">パート 6: ラベル ノードと汚染ノード</h2>

<h3 id="61-label-worker-nodes">6.1.ワーカー ノードにラベルを付ける</h3>
___コードブロック_12___

<h3 id="62-kiem-tra-taints">6.2.汚染をチェック</h3>
___コードブロック_13___

<hr>

<h2 id="phan-7-haproxy-verify">パート 7: HAPROXY バックエンドの確認</h2>

___コードブロック_14___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>_コントロール プレーンに参加</strong><code>--control-plane --certificate-key</code></li> を追加する必要があります
<li><strong>_トークンは 24 時間で期限切れになります</strong>、証明書キーは 2 時間で期限切れになります — 必要に応じて新規作成してください</li>
<li><strong>etcd 3 メンバー</strong> により、クラスターは 1 メンバーのダウンに耐えることができます (クォーラム = 2)</li>
<li><strong>リーダーの選出</strong>自動: リーダーがダウンした場合のスケジューラーとコントローラーマネージャーのフェイルオーバー</li>
<li><strong>ラベルとテイント</strong> ノードには、正確なスケジューリングを支援する適切な役割があります</li>
<li><strong>NotReady ステータス</strong> は正常です。Ready</li> に変換するには、CNI (レッスン 8) をインストールする必要があります。
</ol>

<hr>

<h2 id="bai-tap">🎯 演習__HTMLTAG_179___

<h3 id="bt1">演習 1: 完全なクラスターに参加__HTMLTAG_181___
<ul>
<li>master2 と master3 をコントロール プレーンに参加させます__HTMLTAG_184___
<li>worker1、worker2、worker3 に参加</li>
<li>kubectl get ノードで 6 つのノードが表示されることを確認</li>
</ul>

<h3 id="bt2">演習 2: etcd ヘルスチェック</h3>
<ul>
<li>etcdctl メンバー リスト、エンドポイントの健全性、エンドポイントのステータスを実行</li>
<li>etcd リーダーを決定する__HTMLTAG_196___
</ul>

<h3 id="bt3">演習 3: HA フェイルオーバー テスト</h3>
<ul>
<li>master1 で kubelet を停止</li>
<li>VIP 経由でクラスターがまだアクティブであることを確認</li>
<li>別のマスターへのリーダーの選択を確認__HTMLTAG_206___
<li>kubelet を再度開始し、master1 が返されることを確認__HTMLTAG_208___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_214___レッスン 8: Cilium CNI のインストール — eBPF ネットワーキング</strong> では、Cilium をコンテナ ネットワーク インターフェイスとしてインストールし、NotReady ステータスを解決し、NetworkPolicy を有効にします。</p>