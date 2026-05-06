---
id: 019c9618-0305-7000-8000-c1147ba22e13
title: 'レッスン 22: 実践 — ワークロード管理'
slug: thuc-hanh-5-workload-management
description: 'モジュール 5 の演習: データセットを並列処理するインデックス付きジョブを作成し、Prometheus カスタム メトリクスを使用して HPA を構成し、インプレース ポッド サイズ変更 (K8s 1.35) をデモし、KEDA をインストールし、HTTP リクエストに応じてスケーリングします。'
duration_minutes: 180
is_free: false
video_url: null
sort_order: 22
section_title: 'モジュール 5: ワークロード管理'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5663" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5663)"/>

  <!-- Decorations -->
  <g>
    <circle cx="678" cy="64" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="756" cy="162" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="834" cy="260" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="912" cy="98" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="990" cy="196" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="144" x2="1100" y2="224" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="174" x2="1050" y2="244" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="977.7749907475932,124.5 977.7749907475932,163.5 944,183 910.2250092524068,163.5 910.2250092524068,124.50000000000001 944,105" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — レッスン 22</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 22: 実践 - ワークロード管理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 5: ワークロード管理__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>🎯 練習目標</h2>
<ul>
  <li>データを並列処理するためのインデックス付きジョブを作成</li>
  <li>CPU メトリクスを使用した HPA 構成</li>
  <li>インプレース Pod サイズ変更のデモ (K8s 1.35 以降)</li>
  <li>_KEDA をインストールしてゼロにスケール</li>
</ul>

<h2>ラボ 1: インデックス付きジョブ — データの並列処理</h2>
___コードブロック_0___

<h2>ラボ 2: タイムゾーンを使用した CronJob__HTMLTAG_80___
___コードブロック_1___

<h2>_ラボ 3: CPU メトリクスを使用した HPA</h2>
___コードブロック_2___

<h2>Lab 4: In-Place Pod Resource Updates (K8s 1.35)</h2>
___コードブロック_3___

<h2>ラボ 5: KEDA — ゼロへのスケール__HTMLTAG_86___
___コードブロック_4___

<h2>クリーンアップ</h2>
___コードブロック_5___

<h2>概要__HTMLTAG_90___
<ul>
  <li>✅ インデックス付きジョブ: JOB_COMPLETION_INDEX</li> と並行してデータを処理します
  <li>✅ タイムゾーンをサポートする CronJob (GA K8s 1.27)</li>
  <li>✅ HPA: CPU に応じた自動スケール、安定化ウィンドウ</li>
  <li>✅ インプレース ポッドのサイズ変更: CPU を変更しても再起動しない (K8s 1.35)</li>
  <li>✅ KEDA: ゼロまでのスケールとゼロからのスケール</li>
</ul>