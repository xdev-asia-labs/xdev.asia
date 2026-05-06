---
id: 019c9618-0609-7000-8000-c1147ba22e16
title: 'レッスン 41: リソース管理と QOS'
slug: bai-41-resource-management-va-qos
description: 'Kubernetes でのリソース管理: ResourceQuota、LimitRange、Quality of Service クラス、インプレース Pod リソース更新 (K8s 1.35)、VPA、オーバーコミット戦略、MemoryManager、CPU ピニング。'
duration_minutes: 80
is_free: false
video_url: null
sort_order: 41
section_title: 'モジュール 9: クラスター管理'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3084" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3084)"/>

  <!-- Decorations -->
  <g>
    <circle cx="919" cy="127" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="738" cy="246" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1057" cy="105" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="876" cy="224" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="695" cy="83" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="237" x2="1100" y2="317" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="267" x2="1050" y2="337" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1014.712812921102,171 1014.712812921102,203 987,219 959.287187078898,203 959.287187078898,171 987,155" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — レッスン 41</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 41: リソース管理と QOS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 9: クラスター管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>🎯 レッスンの目的</h2><p>Kubernetes クラスターでリソースを管理する方法を理解します: リクエスト/制限、QoS クラス、ResourceQuota、LimitRange、インプレース更新 (K8s 1.35 GA)、および垂直ポッド オートスケーラー。</p>

<h2>1.リクエストと制限</h2>
___コードブロック_0___
<p><strong>重要</strong>: CPU 制限 → スロットリング (強制終了なし)、メモリ制限 → OOMKilled (プロセスの強制終了)。</p>

<h2>2.サービス品質 (QoS) クラス</h2>
___コードブロック_1___
___コードブロック_2___

<h2>3.ポッドリソースのインプレース更新 — K8s 1.35 GA</h2>
<p>最新機能: ポッドを再起動せずに CPU/メモリ リソースを変更!</p>
___コードブロック_3___
___コードブロック_4___

<h2>4.リソースクォータ</h2>
___コードブロック_5___
___コードブロック_6___

<h2>5. LimitRange</h2>
___コードブロック_7___

<h2>6.垂直ポッド オートスケーラー (VPA)</h2>
___コードブロック_8___
___コードブロック_9___
___コードブロック_10___

<h2>7. CPU マネージャーとトポロジー マネージャー</h2>
___コードブロック_11___

<h2>8.優先度とプリエンプション</h2>
___コードブロック_12___
___コードブロック_13___

<h2>概要</h2>
<ul>
  <li>リクエスト/制限: スケジュールのリクエスト、強制の制限</li>
  <li>QoS: 保証 > バースタブル > BestEffort — エビクション順序を決定</li>
  <li>インプレース更新 (K8s 1.35 GA): 再起動せずに CPU/メモリのサイズを変更</li>
  <li>ResourceQuota: 名前空間ごとの合計リソースを制限</li>
  <li>LimitRange: コンテナごとのデフォルトと最大/最小__HTMLTAG_103___
  <li>_VPA: 適切なリソースを自動的に提案/設定__HTMLTAG_105___
  <li>CPU マネージャー: 保証されたポッドのコアをピン留め — レイテンシーの削減</li>
</ul>