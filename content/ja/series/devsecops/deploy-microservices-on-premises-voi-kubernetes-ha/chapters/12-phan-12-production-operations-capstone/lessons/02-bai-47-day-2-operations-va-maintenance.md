---
id: 019e1a00-aa01-7001-c001-k8sha001202
title: 'レッスン 47: 2 日目の運用とメンテナンス'
slug: bai-47-day-2-operations-va-maintenance
description: Kubernetes クラスターのアップグレード、ノードのメンテナンス、証明書のローテーション、キャパシティ プランニング、インシデント管理、オンコール プラクティス、運用ランブック。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 47
section_title: 'パート 12: 生産業務とキャップストーン プロジェクト'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-622" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-622)"/>

  <!-- Decorations -->
  <g>
    <circle cx="805" cy="45" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1010" cy="50" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="715" cy="55" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="920" cy="60" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="625" cy="65" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="115" x2="1100" y2="195" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="145" x2="1050" y2="215" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1040.9807621135333,200 1040.9807621135333,230 1015,245 989.0192378864668,230 989.0192378864668,200 1015,185" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — レッスン 47</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 47: 2 日目の操作とメンテナンス</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 12: 制作オペレーションとキャップストーン プロジェクト</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_66___
<ul>
<li>✅ Kubernetes バージョンのアップグレード プロセス</li>
<li>✅ ノードのメンテナンス (排水、遮断、遮断解除)</li>
<li>✅ 証明書のローテーション__HTMLTAG_73___
<li>✅ 容量計画と傾向</li>
<li>✅ インシデント管理フレームワーク__HTMLTAG_77___
<li>✅ 運用ランブック__HTMLTAG_79___
</ul>

<hr>

<h2 id="phan-1-upgrade">パート 1: KUBERNETES のアップグレード</h2>

___コードブロック_0___

___コードブロック_1___

<hr>

<h2 id="phan-2-node-maintenance">パート 2: ノードのメンテナンス</h2>

___コードブロック_2___

___コードブロック_3___

<hr>

<h2 id="phan-3-certs">パート 3: 証明書のローテーション</h2>

___コードブロック_4___

___コードブロック_5___

<hr>

<h2 id="phan-4-capacity">パート 4: キャパシティ プランニング</h2>

___コードブロック_6___<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>指標</th><th>しきい値_</th><th>アクション_</th></tr>
</thead>
<tbody>
<tr><td>_クラスター CPU 割り当て</td><td>> 70%</td><td>新しいワーカー ノードを計画_</td></tr>
<tr><td>クラスター メモリ割り当て</td><td>> 75%_</td><td>新しいワーカー ノードを計画_</td></tr>
<tr><td>Ceph ストレージの使用</td><td>> 70%</td><td>_OSD またはディスクの追加_</td></tr>
<tr><td>PV 使用量</td><td>> 80%</td><td>PVC を拡張するかストレージを追加_</td></tr>
<tr><td>ポッド数とクォータ</td><td>> 80%</td><td>リソースクォータを増やす_</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-5-incident">パート 5: インシデント管理</h2>

___コードブロック_7___

___コードブロック_8___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>アップグレード</strong>: 最初にコントロール プレーン、ワーカーが一度に 1 人ずつローリング</li>
<li><strong>PDB</strong>: ドレイン前に必ず PodDisruptionBudget を設定</li>
<li><strong>証明書</strong>: 有効期限を監視し、30 日の警告の前に更新</li>
<li><strong>容量</strong>: プロアクティブな計画のための予測リニア</li>
<li><strong>インシデント</strong>: SEV レベル、構造化されたランブック、事後分析</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習__HTMLTAG_179___

<h3 id="bt1">演習 1: アップグレード ドリル__HTMLTAG_181___
<ul>
<li>ラボ クラスタで K8s マイナー バージョン アップグレードを実行__HTMLTAG_184___
<li>PDB 保護を使用したノード ドレインの練習</li>
<li>証明書を更新し、クラスターの健全性を確認します</li>
</ul>

<h3 id="bt2">演習 2: インシデント対応</h3>
<ul>
<li>_上位 5 つの一般的なアラートのランブックを作成__HTMLTAG_194___
<li>インシデント シミュレーションの練習: 失敗の挿入 → ランブックに従う</li>
<li>事後分析テンプレートの作成</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>_<strong>レッスン 48: パフォーマンス テストと最適化</strong> では、システムのロード テストと最適化を行います。</p>