---
id: 019e1a00-aa01-7001-c001-k8sha001002
title: 'レッスン 41: 水平および垂直ポッドの自動スケーリング'
slug: bai-41-horizontal-va-vertical-pod-autoscaling
description: CPU/メモリとカスタム メトリクスを備えた HPA、VPA の推奨事項、KEDA イベント ドリブンの自動スケーリング、クラスター オートスケーラー (オンプレミスの代替手段)、およびスケーリングのベスト プラクティス。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 41
section_title: 'パート 10: デプロイメントパターンと自動スケーリング'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9028" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9028)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1025" cy="265" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="950" cy="170" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="75" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="800" cy="240" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="725" cy="145" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="75" x2="1100" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="105" x2="1050" y2="175" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="950.9807621135332,110 950.9807621135332,140 925,155 899.0192378864668,140 899.0192378864668,110.00000000000001 925,95" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — レッスン 41</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 41: 水平方向と水平方向垂直ポッド</tspan>
      <tspan x="60" dy="42">オートスケーリング_</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 10: 導入パターンと展開自動スケーリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_68___
<ul>
<li>✅ CPU、メモリ、カスタム メトリクスを備えた HPA v2__HTMLTAG_71___
<li>✅ VPA (垂直ポッド オートスケーラー) の推奨事項</li>
<li>✅ KEDA イベント駆動型自動スケーリング</li>
<li>✅ オンプレミスの容量計画 (クラウド オートスケーラーなし)</li>
<li>✅ スケーリングのベスト プラクティスとアンチパターン</li>
</ul>

<hr>

<h2 id="phan-1-hpa">パート 1: HPA V2 (水平ポッド オートスケーラー)</h2>

___コードブロック_0___

___コードブロック_1___

___コードブロック_2___

___コードブロック_3___

<hr>

<h2 id="phan-2-vpa">パート 2: 垂直ポッド オートスケーラー</h2>

___コードブロック_4___

___コードブロック_5___

___コードブロック_6___

<hr>

<h2 id="phan-3-keda">パート 3: KEDA — イベント駆動型オートスケーリング</h2>

___コードブロック_7___

___コードブロック_8___

<hr>

<h2 id="phan-4-on-prem">パート 4: オンプレミスの容量計画</h2>

___コードブロック_9___

___コードブロック_10___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>HPA v2</strong>: CPU、メモリ、またはカスタム Prometheus メトリクスでスケール</li>
<li><strong>動作</strong>: スケールアップ/ダウンの速度と安定化を構成</li>
<li><strong>VPA</strong>: 推奨事項には「オフ」モードを使用し、同じ指標で HPA を使用することは避けてください</li>
<li><strong>KEDA</strong>: イベント駆動型のスケーリング (キューの長さ、Kafka ラグ)</li>
<li><strong>オンプレミス</strong>: 固定容量 → プランバッファ、80% でアラート</li>
<li><strong>アンチパターン</strong>: 同じ指標で HPA と VPA を使用しない</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2><h3 id="bt1">演習 1: HPA + カスタム メトリクス__HTMLTAG_126___
<ul>
<li>Prometheus アダプターのデプロイ</li>
<li>カスタム リクエスト/秒の指標を使用して HPA を作成</li>
<li>ロード テストとスケーリング動作の観察__HTMLTAG_133___
</ul>

<h3 id="bt2">演習 2: KEDA キューベースのスケーリング</h3>
<ul>
<li>KEDA をインストールし、RabbitMQ 用の ScaledObject を作成</li>
<li>1000 件のメッセージをキューにプッシュ</li>
<li>ワーカー ポッドがスケールアップしてからスケールダウンすることを確認</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_149___レッスン 42: リソース管理とスケジューリング</strong> では、リソース割り当てとポッド スケジューリングを最適化します。</p>